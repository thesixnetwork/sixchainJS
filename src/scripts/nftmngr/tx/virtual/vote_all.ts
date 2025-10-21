import {
  getSigningSixprotocolClient,
  sixprotocol,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";
dotenv.config();

import divine_elite from "../../resources/schemas/divineelite-nft-schema.json";
import preventive from "../../resources/schemas/preventive-nft-schema.json";
import membership from "../../resources/schemas/membership-nft-schema.json";
import lifestyle from "../../resources/schemas/lifestyle-nft-schema.json";

const schemaList = [divine_elite, membership];

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

  const memo = "vote virtual schema proposal";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.NFT_MANAGER.VOTE_VIRTUAL_SCHEMA_PROPOSAL,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error minting NFT: ${txResponse.rawLog}`);
  } else {
    console.log(
      `Minting successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
  }
};

main().catch((err) => {
  console.error("Error in main execution:", err);
});
