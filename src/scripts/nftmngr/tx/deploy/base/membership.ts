import { EncodeObject } from '@cosmjs/proto-signing';
import { getSigningSixprotocolClient, sixprotocol } from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";
dotenv.config();

import exmapleSchema from "../../../resources/schemas/membership-nft-schema.json";

const NETOWRK = process.argv[2]!;

let schema_name = exmapleSchema.code;
const split_schema = schema_name.split(".");
const _name = split_schema[1];
const org_name = process.env.ORG_NAME;
let schemaCode: string;
schemaCode = `${org_name}.${_name}`;
exmapleSchema.code = schemaCode;

export const Deploy = async () => {
  if (!NETOWRK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETOWRK);
  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    mnemonic,
    { prefix: "6x" }
  );

  // Get signing client
  const client = await getSigningSixprotocolClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
  });


  const accounts = await wallet.getAccounts()
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];

  let encodeBase64Schema = Buffer.from(JSON.stringify(exmapleSchema)).toString(
    "base64"
  );

  const msgCreateNFTSchema = sixprotocol.nftmngr.MessageComposer.withTypeUrl.createNFTSchema({
    creator: address,
    nftSchemaBase64: encodeBase64Schema,
  })

  msgArray.push(msgCreateNFTSchema);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "memo"
  );

  if (txResponse.code) {
    console.log(txResponse.rawLog);
  }
  console.log(
    `gasUsed: ${txResponse.gasUsed}\ngasWanted:${txResponse.gasWanted}\n`
  );
  return txResponse;
};

// ask to enter confirmmation
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Are you sure you want to deploy ${schemaCode} to ${NETOWRK} (y/n)?`,
  (answer: any) => {
    if (
      answer === "y" ||
      answer === "Y" ||
      answer === "yes" ||
      answer === "Yes"
    ) {
      console.log("deploying...");
      Deploy();
    } else {
      console.log("aborting...");
      process.exit(1);
    }
    readline.close();
  }
);
