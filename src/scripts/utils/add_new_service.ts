import {
  SixDataChainConnector,
  ITxNFTmngr,
  fee,
  BASE64,
  typesTxNFTManager,
} from "@sixnetwork/sixchain-client";
import newAttribute from "../../resources/utils/new-attribute.json";
import divine_elite from "../../resources/schemas/divineelite-nft-schema.json";
import { getConnectorConfig } from "../client";

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
  // Encode NFT data to base64
  const encodeBase64NewAttribute = BASE64.encode(JSON.stringify(newAttribute));
  // Create message
  const addAttribute: typesTxNFTManager.MsgAddAttribute = {
    creator: address,
    code: schemaCode,
    location: 1, // 0: NFT Attribute(non-Dynamic Attribute), 1: Token Attribute (Dynamic Attribute)
    base64NewAttriuteDefenition: encodeBase64NewAttribute,
  };
  const msg = rpcClient.nftmngrModule.msgAddAttribute(addAttribute);
  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg], {
    fee: "auto",
    memo: "Add New Attribute to NFT Schema",
  });

  console.log(txResponse);
};
main();
