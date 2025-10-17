import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import {
  getSigningSixprotocolClient,
  sixprotocol,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "@client-util";
import { GasPrice } from "@cosmjs/stargate";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
dotenv.config();

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

  let schema_name = "sixprotocol.medical";
  const ref_id = uuidv4();

  const virualAction =
    sixprotocol.nftmngr.MessageComposer.withTypeUrl.performVirtualAction({
      creator: address,
      nftSchemaName: schema_name,
      action: "bridge_3_to_1",
      parameters: [],
      refId: ref_id,
      tokenIdMap: [
        {
          nftSchemaName: "sixprotocol.divine_elite",
          tokenId: "1",
        },
        {
          nftSchemaName: "sixprotocol.membership",
          tokenId: "5",
        },
        {
          nftSchemaName: "sixprotocol.preventive",
          tokenId: "3",
        },
        {
          nftSchemaName: "sixprotocol.lifestyle",
          tokenId: "6",
        },
      ],
    });

  msgArray.push(virualAction);
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
