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
import { v4 as uuidv4 } from "uuid";

dotenv.config();
const main = async () => {
  const NETOWRK = process.argv[2];
  const org_name = process.env.ORG_NAME;

  let msgArray: EncodeObject[] = [];
  if (!NETOWRK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

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

  let schema_name = "divineXmembership";
  const ref_id = uuidv4();

  const virualAction =
    sixprotocol.nftmngr.MessageComposer.withTypeUrl.performVirtualAction({
      creator: address,
      nftSchemaName: schema_name,
      action: "bridge_12_to_17",
      parameters: [
        {
          name: "amount",
          value: "2",
        },
      ],
      refId: ref_id,
      tokenIdMap: [
        {
          nftSchemaName: `${org_name}.divine_elite`,
          tokenId: "1",
        },
        {
          nftSchemaName: `${org_name}.membership`,
          tokenId: "5",
        },
      ],
    });

  msgArray.push(virualAction);

  const memo = "perform action on virtual schema";
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
