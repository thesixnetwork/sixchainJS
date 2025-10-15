import {
  getSigningSixprotocolClient,
  sixprotocol,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "../../client";
import { EncodeObject } from "@cosmjs/proto-signing";
import dotenv from "dotenv";
dotenv.config();

const TransferSchema = async (schemaCode: string, newOwner: string) => {
  let accountSigner;
  const network = process.argv[2];
  if (!network) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }
  const { rpcUrl, mnemonic } = await getConnectorConfig(network);

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });

  // Get signing client
  const client = await getSigningSixprotocolClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
  });

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];

  // loop trough all addresses of list_recipient according to start and end
  const addSystemAction =
    sixprotocol.nftmngr.MessageComposer.withTypeUrl.changeSchemaOwner({
      creator: address,
      nftSchemaCode: schemaCode,
      newOwner: newOwner,
    });

  msgArray.push(addSystemAction);

  try {
    const txResponse = await client.signAndBroadcast(
      address,
      msgArray,
      "auto",
      "transfer schema"
    );
    console.log(txResponse);
  } catch (err) {
    console.error("Transaction failed:", err);
  }
};

// ask to enter confirmmation
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Are you sure you want to add transfer schemaCode to ${process.argv[2]} (y/n)?`,
  (answer: any) => {
    if (
      answer === "y" ||
      answer === "Y" ||
      answer === "yes" ||
      answer === "Yes"
    ) {
      console.log("TransferSchema...");
      TransferSchema("schemaCode", "newOwner")
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("aborting...");
      process.exit(1);
    }
    readline.close();
  }
);
