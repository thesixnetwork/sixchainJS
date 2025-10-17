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
  const PORT_ID = process.argv[3];
  const VERSION = process.argv[4] || "ics20-1";
  const ORDERING = process.argv[5] || "1"; // 1 = ORDER_UNORDERED, 2 = ORDER_ORDERED
  const CONNECTION_HOPS = process.argv[6]; // Comma-separated connection IDs
  const COUNTERPARTY_PORT_ID = process.argv[7];

  if (!NETWORK || !PORT_ID || !CONNECTION_HOPS || !COUNTERPARTY_PORT_ID) {
    throw new Error(
      "INPUT REQUIRED: bun run ./scripts/ibc/tx/channel-open-init.ts <network> <port_id> [version] [ordering] <connection_hops> <counterparty_port_id>"
    );
  }

  console.log(`=== IBC Channel Open Init Transaction ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Port ID: ${PORT_ID}`);
  console.log(`Version: ${VERSION}`);
  console.log(`Ordering: ${ORDERING}`);
  console.log(`Connection Hops: ${CONNECTION_HOPS}`);
  console.log(`Counterparty Port ID: ${COUNTERPARTY_PORT_ID}`);

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

  const { channelOpenInit } = ibc.core.channel.v1.MessageComposer.withTypeUrl;

  let msgArray: Array<EncodeObject> = [];

  const connectionHops = CONNECTION_HOPS.split(",").map((id) => id.trim());
  const orderingValue = parseInt(ORDERING);

  const msgChannelOpenInit = channelOpenInit({
    portId: PORT_ID,
    channel: {
      state: 1, // STATE_INIT
      ordering: orderingValue,
      counterparty: {
        portId: COUNTERPARTY_PORT_ID,
        channelId: "", // Empty for init
      },
      connectionHops: connectionHops,
      version: VERSION,
      upgradeSequence: Long.fromString("0"),
    },
    signer: address,
  });

  msgArray.push(msgChannelOpenInit);

  // First attempt with auto gas
  console.log("Attempting channel open init with auto gas...");
  const memo = "IBC channel open init";

  try {
    const result = await signAndBroadcastWithRetry(
      client,
      address,
      msgArray,
      memo,
      {
        gasMultiplier: 1.5,
        gasPrice: 1.25,
        fallbackGas: COMMON_GAS_LIMITS.BANK.SEND,
        denom: "usix",
      }
    );

    console.log("\n✅ Channel open init successful!");
    console.log(`Transaction hash: ${result.transactionHash}`);
    console.log(`Gas used: ${result.gasUsed}`);

    if (result.events && result.events.length > 0) {
      console.log("\n📋 Transaction Events:");
      result.events.forEach((event, index) => {
        console.log(`  Event ${index + 1}:`);
        console.log(`    Type: ${event.type}`);
        event.attributes.forEach((attr, attrIndex) => {
          console.log(`    ${attr.key}: ${attr.value}`);
        });
      });
    }
  } catch (error: any) {
    console.error("\n❌ Channel open init failed:");
    console.error(error.message);

    if (error.log) {
      console.error("Transaction log:", error.log);
    }
  }
};

main()
  .then(() => {
    console.log("\nDone");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
