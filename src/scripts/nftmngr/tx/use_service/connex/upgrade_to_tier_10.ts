import {
  getSigningSixprotocolClient,
  sixprotocol,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import NFTSchema from "../../../resources/schemas/divineelite-nft-schema.json";
import { GasPrice } from "@cosmjs/stargate";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { getConnectorConfig } from "@client-util";
import moment from "moment";
dotenv.config();

const TOKEN_ID = process.argv[3]!;
const SENIOR = process.argv[4]!;
const senior = Boolean(SENIOR);

const main = async () => {
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

  let schema_name = NFTSchema.code;
  const split_schema = schema_name.split(".");
  const _name = split_schema[1];
  const org_name = process.env.ORG_NAME;
  let schemaCode: string;
  schemaCode = `${org_name}.${_name}`;

  const ref_id = uuidv4();
  const msgArray: EncodeObject[] = [];

  let action: any;

  const todayDate = new Date();
  const expire_date: string = moment(todayDate.toUTCString())
    .utc()
    .format()
    .toString();

  if (senior) {
    const action40p =
      sixprotocol.nftmngr.MessageComposer.withTypeUrl.performActionByAdmin({
        creator: address,
        nftSchemaCode: schemaCode,
        tokenId: TOKEN_ID,
        action: "extend_privilege",
        refId: ref_id,
        parameters: [
          { name: "tier", value: "10" },
          { name: "group_one", value: "10" },
          { name: "group_two", value: "0" },
          { name: "group_three", value: "0" },
          { name: "expire_date", value: expire_date },
        ],
      });

    action = action40p;
  } else {
    const action40l =
      sixprotocol.nftmngr.MessageComposer.withTypeUrl.performActionByAdmin({
        creator: address,
        nftSchemaCode: schemaCode,
        tokenId: TOKEN_ID,
        action: "extend_privilege",
        refId: ref_id,
        parameters: [
          { name: "tier", value: "10" },
          { name: "group_one", value: "0" },
          { name: "group_two", value: "10" },
          { name: "group_three", value: "0" },
          { name: "expire_date", value: expire_date },
        ],
      });
    action = action40l;
  }

  msgArray.push(action);
  try {
    const txResponse = await client.signAndBroadcast(
      address,
      msgArray,
      "auto",
      ref_id
    );
    console.log(txResponse);
  } catch (err) {
    console.error("Transaction failed:", err);
  }
};

main().catch((err) => {
  console.error("Error in main execution:", err);
});
