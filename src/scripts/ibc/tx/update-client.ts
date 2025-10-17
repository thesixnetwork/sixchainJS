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
  const CLIENT_ID = process.argv[3];
  const CLIENT_MESSAGE = process.argv[4]; // Header or misbehaviour in hex/base64

  if (!NETWORK || !CLIENT_ID || !CLIENT_MESSAGE) {
    throw new Error(
      "INPUT REQUIRED: bun run ./scripts/ibc/tx/update-client.ts <network> <client_id> <client_message>"
    );
  }

  console.log(`=== IBC Update Client Transaction ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Client ID: ${CLIENT_ID}`);
  console.log(`Client Message: ${CLIENT_MESSAGE.substring(0, 50)}...`);

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });

  // Get signing client
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

  console.log(`Signer: ${address}`);

  const { updateClient } = ibc.core.client.v1.MessageComposer.withTypeUrl;

  let msgArray: Array<EncodeObject> = [];

  // Convert hex string to Uint8Array if needed
  let clientMessageBytes: Uint8Array;
  try {
    if (CLIENT_MESSAGE.startsWith("0x")) {
      // Hex string
      const hex = CLIENT_MESSAGE.slice(2);
      clientMessageBytes = new Uint8Array(
        hex.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))
      );
    } else {
      // Assume base64
      clientMessageBytes = new Uint8Array(
        Buffer.from(CLIENT_MESSAGE, "base64")
      );
    }
  } catch (error) {
    throw new Error(
      "Invalid client message format. Must be hex (0x...) or base64"
    );
  }

  const msgUpdateClient = updateClient({
    clientId: CLIENT_ID,
    clientMessage: {
      typeUrl: "/ibc.lightclients.tendermint.v1.Header", // Or appropriate type
      value: clientMessageBytes,
    },
    signer: address,
  });

  msgArray.push(msgUpdateClient);

  console.log("Attempting update client with auto gas...");
  const memo = "IBC update client";

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

    console.log("\n✅ Update client successful!");
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
    console.error("\n❌ Update client failed:");
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
