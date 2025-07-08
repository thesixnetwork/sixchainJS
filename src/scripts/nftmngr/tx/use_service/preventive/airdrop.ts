import { getSigningSixprotocolClient, sixprotocol } from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import NFTSchema from "../../../resources/schemas/preventive-nft-schema.json";
import { GasPrice } from "@cosmjs/stargate";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { getConnectorConfig } from "../../client";
dotenv.config();

const main = async () => {
  const network = process.argv[2];
  const TOKENID = process.argv[3];

  if (!network) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(network);
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
  const action = sixprotocol.nftmngr.MessageComposer.withTypeUrl.performActionByAdmin({
    creator: address,
    nftSchemaCode: schemaCode,
    tokenId: TOKENID,
    action: "airdrop",
    refId: ref_id,
    parameters: [
      { name: "service_name", value: "service_16" },
      { name: "amount", value: "1" },
    ],
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
