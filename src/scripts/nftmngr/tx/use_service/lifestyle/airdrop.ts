import {
  getSigningSixprotocolClient,
  sixprotocol,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import NFTSchema from "../../../resources/schemas/lifestyle-nft-schema.json";
import { GasPrice } from "@cosmjs/stargate";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { getConnectorConfig } from "@client-util";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2]!;
  const TOKENID = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const gasPrice = GasPrice.fromString("1.25usix");
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

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;
  let msgArray: Array<EncodeObject> = [];

  let schema_name = NFTSchema.code;
  const split_schema = schema_name.split(".");
  const _name = split_schema[1];
  const org_name = process.env.ORG_NAME;
  let schemaCode: string;
  schemaCode = `${org_name}.${_name}`;

  const ref_id = uuidv4();
  
  const action =
    sixprotocol.nftmngr.MessageComposer.withTypeUrl.performActionByAdmin({
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

  const memo = "Perfrom Airdrop";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.NFT_MANAGER.PERFORM_ACTION_BY_ADMIN,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error performing airdrop: ${txResponse.rawLog}`);
  } else {
    console.log(
      `Perfrom Airdrop successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
  }
};

main().catch((err) => {
  console.error("Error in main execution:", err);
});
