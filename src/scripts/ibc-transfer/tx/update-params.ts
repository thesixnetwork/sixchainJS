import {
  getSigningCosmosClient,
  ibc,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const AUTHORITY = process.argv[3];
  const SEND_ENABLED = process.argv[4] === "true";
  const RECEIVE_ENABLED = process.argv[5] === "true";

  if (!NETWORK || !AUTHORITY) {
    throw new Error(
      "INPUT REQUIRED: bun run ./scripts/ibc-transfer/tx/update-params.ts <network> <authority> <send_enabled> <receive_enabled>"
    );
  }

  console.log(`=== IBC Transfer Update Params Transaction ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Authority: ${AUTHORITY}`);
  console.log(`Send Enabled: ${SEND_ENABLED}`);
  console.log(`Receive Enabled: ${RECEIVE_ENABLED}`);

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });

  // Get signing client
  const client = await getSigningCosmosClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
  });

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  console.log(`Signer: ${address}`);

  const { updateParams } =
    ibc.applications.transfer.v1.MessageComposer.withTypeUrl;

  let msgArray: Array<EncodeObject> = [];

  const msgUpdateParams = updateParams({
    signer: AUTHORITY,
    params: {
      allowedClients: [],
    },
  });

  msgArray.push(msgUpdateParams);

  console.log("Attempting IBC Transfer update params with auto gas...");
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    "IBC Transfer Update Params",
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.GOV.SUBMIT_PROPOSAL,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error in IBC transfer update params: ${txResponse.rawLog}`);
  } else {
    console.log(
      `IBC transfer update params successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
  }
  console.log(txResponse);
};

main()
  .then(() => {
    console.log("\nTransaction completed successfully!");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
