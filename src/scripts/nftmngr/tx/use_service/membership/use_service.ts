import {
  getSigningSixprotocolClient,
  sixprotocol,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "@client-util";
import { EncodeObject } from "@cosmjs/proto-signing";
import NFTSchema from "../../../resources/schemas/membership-nft-schema.json";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
dotenv.config();

const main = async () => {
  const NETOWRK = process.argv[2];
  if (!NETOWRK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }
  const TOKENID = process.argv[3];

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

  let schema_name = NFTSchema.code;
  const split_schema = schema_name.split(".");
  const _name = split_schema[1];
  const org_name = process.env.ORG_NAME;
  let schemaCode: string;
  schemaCode = `${org_name}.${_name}`;

  const ref_id = uuidv4();
  const msgArray: EncodeObject[] = [];

  const action =
    sixprotocol.nftmngr.MessageComposer.withTypeUrl.performActionByAdmin({
      creator: address,
      nftSchemaCode: schemaCode,
      tokenId: TOKENID,
      action: "use_service",
      refId: ref_id,
      parameters: [{ name: "service_name", value: "service_3" }],
    });

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
