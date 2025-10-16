import {
  getSigningSixprotocolClient,
  sixprotocol,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import newAttribute from "../resources/utils/new-attribute.json";
import divine_elite from "../resources/schemas/divineelite-nft-schema.json";
import { getConnectorConfig } from "@client-util";

const main = async () => {
  const NETWORK = process.argv[2];
  let msgArray: EncodeObject[] = [];
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
  const addAttribute =
    sixprotocol.nftmngr.MessageComposer.withTypeUrl.addAttribute({
      creator: address,
      code: schemaCode,
      location: 1, // 0: NFT Attribute(non-Dynamic Attribute), 1: Token Attribute (Dynamic Attribute)
      base64NewAttriuteDefenition: encodeBase64NewAttribute,
    });

  msgArray.push(addAttribute);

  try {
    const txResponse = await client.signAndBroadcast(address, msgArray, "auto");
    console.log(txResponse);
  } catch (err) {
    console.error("Transaction failed:", err);
  }
};
main();
