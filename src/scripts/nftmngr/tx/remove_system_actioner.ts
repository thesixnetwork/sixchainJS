import {
  getSigningSixprotocolClient,
  sixprotocol,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

// import list_recipient  from "./list_address"
// import list_recipient_71_250 from "./list_address_71-250";
const list_recipient_71_250: Array<string> = [];
dotenv.config();

const schemaCode = "TechSauce.GlobalSummit2023";

const addSystemActioner = async (start: number, end: number) => {
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

  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];

  // loop trough all addresses of list_recipient according to start and end
  for (let i = start; i < end; i++) {
    const rmSystemAction =
      sixprotocol.nftmngr.MessageComposer.withTypeUrl.deleteActionExecutor({
        creator: address,
        nftSchemaCode: schemaCode,
        executorAddress: list_recipient_71_250[i],
      });
    msgArray.push(rmSystemAction);
  }

  try {
    const txResponse = await client.signAndBroadcast(address, msgArray, "auto");
    console.log(txResponse);
  } catch (err) {
    console.error("Transaction failed:", err);
  }
};

const multiAddSystemActioner = async () => {
  let sentCount = 0;
  const numberPerRound = 50;
  const actionNumber = list_recipient_71_250.length - sentCount;
  const round = Math.floor(actionNumber / numberPerRound);
  const remain = actionNumber % numberPerRound;

  for (let i = 0; i < round; i++) {
    await addSystemActioner(sentCount, sentCount + numberPerRound);
    await new Promise((r) => setTimeout(r, 300));
    sentCount += numberPerRound;
  }

  if (remain > 0) {
    await addSystemActioner(sentCount, sentCount + remain);
  }
};

// ask to enter confirmmation
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Are you sure you want to add System actioner ${schemaCode} to ${process.argv[2]} (y/n)?`,
  (answer: any) => {
    if (
      answer === "y" ||
      answer === "Y" ||
      answer === "yes" ||
      answer === "Yes"
    ) {
      console.log("Adding System actioner...");
      multiAddSystemActioner()
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
