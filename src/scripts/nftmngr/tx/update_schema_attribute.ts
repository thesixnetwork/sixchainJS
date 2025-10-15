import { EncodeObject } from "@cosmjs/proto-signing";
import {
  getSigningSixprotocolClient,
  sixprotocol,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "../client";
import newAttribute from "../../resources/utils/new-attribute.json";
import divine_elite from "../../resources/schemas/divineelite-nft-schema.json";

const main = async () => {
  const NETOWRK = process.argv[2];

  let msgArray: EncodeObject[] = [];
  if (!NETOWRK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

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

  let schemaCode: string;
  schemaCode = divine_elite.code;
  const _name = schemaCode.split(".");
  const org_name = process.env.ORG_NAME;
  schemaCode = `${org_name}.${_name}`;

  // Encode NFT data to base64
  const encodeBase64NewAttribute = Buffer.from(
    JSON.stringify(newAttribute)
  ).toString("base64");
  // Create message
  const updateAttribute =
    sixprotocol.nftmngr.MessageComposer.withTypeUrl.updateSchemaAttribute({
      creator: address,
      nftSchemaCode: schemaCode,
      base64UpdateAttriuteDefenition: encodeBase64NewAttribute,
    });
  msgArray.push(updateAttribute);
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
main();
