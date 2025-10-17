import {
  getSigningCosmosClient,
  ibc,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "@client-util";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const SOURCE_PORT = process.argv[3] || "transfer";
  const SOURCE_CHANNEL = process.argv[4] || "channel-0";
  const TOKEN_DENOM = process.argv[5] || "usix";
  const TOKEN_AMOUNT = process.argv[6] || "1000000";
  const RECEIVER = process.argv[7];
  const TIMEOUT_HEIGHT = process.argv[8] || "0";
  const TIMEOUT_TIMESTAMP = process.argv[9] || "0";
  const MEMO = process.argv[10] || "";

  if (!NETWORK || !RECEIVER) {
    throw new Error(
      "INPUT REQUIRED: bun run ./scripts/ibc-transfer/tx/transfer.ts <network> <source_port> <source_channel> <token_denom> <token_amount> <receiver> [timeout_height] [timeout_timestamp] [memo]"
    );
  }

  console.log(`=== IBC Transfer Transaction ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Source Port: ${SOURCE_PORT}`);
  console.log(`Source Channel: ${SOURCE_CHANNEL}`);
  console.log(`Token: ${TOKEN_AMOUNT}${TOKEN_DENOM}`);
  console.log(`Receiver: ${RECEIVER}`);
  console.log(`Memo: ${MEMO || "(none)"}`);

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

  const { transfer } = ibc.applications.transfer.v1.MessageComposer.withTypeUrl;

  // Parse timeout values
  const timeoutHeight = TIMEOUT_HEIGHT === "0" ? undefined : {
    revisionNumber: Long.ZERO,
    revisionHeight: Long.fromString(TIMEOUT_HEIGHT)
  };
  
  const timeoutTimestamp = TIMEOUT_TIMESTAMP === "0" ? Long.UZERO : Long.fromString(TIMEOUT_TIMESTAMP);

  let msgArray: Array<EncodeObject> = [];

  const msgTransfer = transfer({
    sourcePort: SOURCE_PORT,
    sourceChannel: SOURCE_CHANNEL,
    token: {
      denom: TOKEN_DENOM,
      amount: TOKEN_AMOUNT,
    },
    sender: address,
    receiver: RECEIVER,
    timeoutHeight,
    timeoutTimestamp,
    memo: MEMO,
  });

  msgArray.push(msgTransfer);

  console.log("Attempting IBC transfer with auto gas...");
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    "IBC Transfer",
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.BANK.SEND,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error in IBC transfer: ${txResponse.rawLog}`);
  } else {
    console.log(
      `IBC transfer successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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