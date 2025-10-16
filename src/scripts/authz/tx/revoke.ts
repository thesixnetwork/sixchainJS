import {
  getSigningCosmosClient,
  cosmos,
  calculateFeeFromSimulation,
  COMMON_GAS_LIMITS,
} from "@sixnetwork/sixchain-sdk";
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
      "INPUT NETWORK BY RUNNING: bun run ./scripts/authz/tx/revoke.ts fivenet || yarn ts-node ./scripts/authz/tx/revoke.ts fivenet"
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

  const granteeAddress = "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp";

  const revoke = cosmos.authz.v1beta1.MessageComposer.withTypeUrl.revoke({
    granter: address,
    grantee: granteeAddress,
    msgTypeUrl: "/cosmos.bank.v1beta1.MsgSend",
  });

  msgArray.push(revoke);

  // First attempt with auto gas
  console.log("Attempting authz revoke with auto gas...");
  let txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "authz revoke"
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
      "authz revoke",
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
      "authz revoke"
    );
  }

  if (txResponse.code !== 0) {
    console.error(`Error in authz revoke: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Revoke successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
