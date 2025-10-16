import {
  getSigningCosmosClient,
  cosmos,
  calculateFeeFromSimulation,
  COMMON_GAS_LIMITS,
} from "@sixnetwork/sixchain-sdk";
const { MsgAuthorizeCircuitBreaker } = cosmos.circuit.v1;
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/gov/tx/submit-proposal.ts fivenet || yarn ts-node ./scripts/gov/tx/submit-proposal.ts fivenet"
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const gasPrice = GasPrice.fromString("1.25usix");

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });

  // Get signing client
  const client = await getSigningCosmosClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
    options: {
      gasPrice: gasPrice,
    },
  });

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];

  // Create circuit breaker authorization message
  const authorizeCircuitBreakerMsg = {
    typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
    value: MsgAuthorizeCircuitBreaker.encode({
      granter: "6x10d07y265gmmuvt4z0w9aw880jnsr700j4vyszp",
      grantee: address,
      permissions: {
        level: 3, // LEVEL_SUPER_ADMIN
        limitTypeUrls: [], // Empty for super admin (can access all message types)
      },
    }).finish(),
  };

  const submitProposal =
    cosmos.gov.v1.MessageComposer.withTypeUrl.submitProposal({
      messages: [authorizeCircuitBreakerMsg],
      initialDeposit: [
        {
          denom: "usix",
          amount: "500000000",
        },
      ],
      proposer: address,
      metadata: `{"title": "Circuit Breaker Auth", "summary": "Authorize circuit breaker", "details": "Grant circuit breaker permissions"}`,
      title: "Circuit Breaker Auth",
      summary: "Authorize circuit breaker",
      expedited: false,
    });

  msgArray.push(submitProposal);

  // First attempt with auto gas
  console.log("Attempting proposal submission with auto gas...");
  let txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "submit proposal"
  );

  // If out of gas error (code 11), retry with calculated fee
  if (txResponse.code === 11) {
    console.log("Out of gas error detected. Retrying with calculated fee...");
    console.log(
      `Previous attempt: gasWanted=${txResponse.gasWanted}, gasUsed=${txResponse.gasUsed}`
    );

    // Calculate fee using utility function with higher multiplier
    const { fee, gasUsed, gasLimit } = await calculateFeeFromSimulation(
      client,
      address,
      msgArray,
      "submit proposal",
      {
        gasMultiplier: 1.5, // 50% buffer
        gasPrice: 1.25,
        fallbackGas: COMMON_GAS_LIMITS.GOVERNANCE_PROPOSAL,
        denom: "usix",
      }
    );

    console.log(`Calculated fee: gasLimit=${gasLimit}, gasUsed=${gasUsed}`);

    // Retry with calculated fee
    txResponse = await client.signAndBroadcast(
      address,
      msgArray,
      fee,
      "submit proposal"
    );
  }

  if (txResponse.code !== 0) {
    console.error(`Error submitting proposal: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Submit proposal successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
    return true;
  }
};

main()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
