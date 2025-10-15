import { EncodeObject } from "@cosmjs/proto-signing";
import {
  getSigningSixprotocolClient,
  sixprotocol,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import divine_elite from "../../resources/schemas/divineelite-nft-schema.json";
import preventive from "../../resources/schemas/preventive-nft-schema.json";
import membership from "../../resources/schemas/membership-nft-schema.json";
import lifestyle from "../../resources/schemas/lifestyle-nft-schema.json";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";
dotenv.config();
const NETOWRK = process.argv[2]!;

if (!NETOWRK) {
  throw new Error(
    "INPUT NETWORK BY RUNNING: bun run ./scripts/deploy.ts fivenet || yarn ts-node ./scripts/deploy.ts fivenet"
  );
}

const schemaList = [divine_elite, preventive, membership, lifestyle];
const gasPrice = GasPrice.fromString("1.25usix");

export const Deploy = async () => {
  const { rpcUrl, mnemonic } = await getConnectorConfig(NETOWRK);

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });
  // Get signing client
  const client = await getSigningSixprotocolClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
    options: {
      gasPrice: gasPrice,
    },
  });

  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];

  for (let i = 0; i < schemaList.length; i++) {
    let schema_name = schemaList[i].code;
    const split_schema = schema_name.split(".");
    const _name = split_schema[1];
    const org_name = process.env.ORG_NAME;
    let schemaCode: string;
    schemaCode = `${org_name}.${_name}`;
    schemaList[i].code = schemaCode;
    let encodeBase64Schema = Buffer.from(
      JSON.stringify(schemaList[i])
    ).toString("base64");
    const msgCreateNFTSchema =
      sixprotocol.nftmngr.MessageComposer.withTypeUrl.createNFTSchema({
        creator: address,
        nftSchemaBase64: encodeBase64Schema,
      });

    msgArray.push(msgCreateNFTSchema);
  }

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "memo"
  );
  if (txResponse.code != 0) {
    console.log(txResponse.rawLog);
  }
  console.log(
    `gasUsed: ${txResponse.gasUsed}\ngasWanted:${txResponse.gasWanted}, hash=${txResponse.transactionHash}\n`
  );
  return txResponse;
};

// ask to enter confirmmation
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Are you sure you want to deploy to ${NETOWRK} (y/n)?`,
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
