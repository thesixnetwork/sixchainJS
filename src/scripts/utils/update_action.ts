import {
  getSigningSixprotocolClient,
  sixprotocol,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "../client";
import dotenv from "dotenv";

// Schema
import divine from "../../resources/schemas/divineelite-nft-schema.json";
import lifestyle from "../../resources/schemas/lifestyle-nft-schema.json";
import membership from "../../resources/schemas/membership-nft-schema.json";
import preventive from "../../resources/schemas/preventive-nft-schema.json";

// update aciton
import devive_update from "../../resources/utils/updateAction/divine/extend_action.json";
import lifestyle_update from "../../resources/utils/updateAction/lifestyle/extend_action.json";
import preventive_update from "../../resources/utils/updateAction/preventive/extend_action.json";
import member_update from "../../resources/utils/updateAction/membership/extend_action.json";

import set_privilege from "../../resources/utils/updateAction/set_service.json";

import update_tier_name from "../../resources/utils/updateAction/update_tier_name.json";

const SCHEMA_LIST = [divine, lifestyle, membership, preventive];

const UPDATE_LIST = [
  devive_update,
  lifestyle_update,
  member_update,
  preventive_update,
];

dotenv.config();

const NETWORK = process.argv[2]!;

let schemaCode: string; // Make sure to initialize this variable before using

async function updateAction() {
  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);

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

  for (let i = 0; i < SCHEMA_LIST.length; i++) {
    let schema_name = SCHEMA_LIST[i].code;
    const split_schema = schema_name.split(".");
    const _name = split_schema[1];
    const org_name = process.env.ORG_NAME;
    schemaCode = `${org_name}.${_name}`;

    const base64updateAction = Buffer.from(
      JSON.stringify(UPDATE_LIST[i])
    ).toString("base64");

    const msgUpdateAction =
      sixprotocol.nftmngr.MessageComposer.withTypeUrl.updateAction({
        creator: address,
        nftSchemaCode: schemaCode,
        base64UpdateAction: base64updateAction,
      });

    msgArray.push(msgUpdateAction);

    const base64updateTierName = Buffer.from(
      JSON.stringify(update_tier_name)
    ).toString("base64");

    const msgSetPrivilege =
      sixprotocol.nftmngr.MessageComposer.withTypeUrl.updateAction({
        creator: address,
        nftSchemaCode: schemaCode,
        base64UpdateAction: base64updateTierName,
      });
    msgArray.push(msgSetPrivilege);
  }

  const txResponse = await client.signAndBroadcast(address, msgArray, "auto");

  if (txResponse.code !== 0) {
    console.error(`Error minting NFT: ${txResponse.rawLog}`);
  } else {
    console.log(
      `Minting successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
  }
}

updateAction()
  .then(() => {
    console.log;
  })
  .catch((err) => console.log(err));
