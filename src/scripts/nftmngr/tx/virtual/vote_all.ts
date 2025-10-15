import {
  getSigningSixprotocolClient,
  sixprotocol,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "../client";
import divine_elite from "../../resources/schemas/divineelite-nft-schema.json";
import preventive from "../../resources/schemas/preventive-nft-schema.json";
import membership from "../../resources/schemas/membership-nft-schema.json";
import lifestyle from "../../resources/schemas/lifestyle-nft-schema.json";
import dotenv from "dotenv";
dotenv.config();

const schemaList = [divine_elite, preventive, membership, lifestyle];

const main = async () => {
  const NETOWRK = process.argv[2];

  if (!NETOWRK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  const propId = process.argv[3];

  if (!propId || propId == "") {
    throw new Error("Make sure to input proposal Id and Schema name");
  }

  let msgArray: EncodeObject[] = [];

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETOWRK);
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

  for (let i = 0; i < schemaList.length; i++) {
    let schema_code = schemaList[i].code;
    const split_schema = schema_code.split(".");
    const _name = split_schema[1];
    const org_name = process.env.ORG_NAME;
    let schemaCode: string;
    schemaCode = `${org_name}.${_name}`;
    const voteCreateSchema =
      sixprotocol.nftmngr.MessageComposer.withTypeUrl.voteVirtualSchemaProposal(
        {
          creator: address,
          id: String(propId),
          nftSchemaCode: schemaCode,
          option: 2,
        }
      );

    msgArray.push(voteCreateSchema);
  }

  try {
    const txResponse = await client.signAndBroadcast(
      address,
      msgArray,
      "auto",
      "memo"
    );
    console.log(txResponse);
  } catch (err) {
    console.error("Transaction failed:", err);
  }
};

main().catch((err) => {
  console.error("Error in main execution:", err);
});
