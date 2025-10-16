import {
  getSigningCosmosClient,
  cosmos,
  calculateFeeFromSimulation,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
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
      "INPUT NETWORK BY RUNNING: bun run ./scripts/circuit/tx/reset.ts fivenet || yarn ts-node ./scripts/circuit/tx/reset.ts fivenet"
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

  const reset =
    cosmos.circuit.v1.MessageComposer.withTypeUrl.resetCircuitBreaker({
      authority: address,
      msgTypeUrls: ["/cosmos.bank.v1beta1.MsgSend"],
    });

  msgArray.push(reset);

  // Use the new SDK utility for auto gas + fallback pattern
  const txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    "circuit reset",
    {
      gasMultiplier: 1.5, // 50% buffer
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.CIRCUIT_RESET,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error in circuit reset: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Reset successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
