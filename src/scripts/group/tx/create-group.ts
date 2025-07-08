import { getSigningCosmosClient, cosmos } from '@sixnetwork/sixchain-sdk';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/group/tx/create-group.ts fivenet || yarn ts-node ./scripts/group/tx/create-group.ts fivenet"
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const gasPrice = GasPrice.fromString("1.25usix");

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });

  // Get signing client
  const client = await getSigningCosmosClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
    options: {
      gasPrice: gasPrice
    }
  });

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];

  // TODO: Replace with actual group members
  const members = [
    {
      address: address,
      weight: "1",
      metadata: "Group admin"
    },
    {
      address: "6x1example_member_address", // TODO: Replace with actual member address
      weight: "1",
      metadata: "Group member"
    }
  ];

  const createGroup = cosmos.group.v1.MessageComposer.withTypeUrl.createGroup({
    admin: address,
    members: members,
    metadata: "TODO: Add group metadata"
  });

  msgArray.push(createGroup);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "create group"
  );

  if (txResponse.code !== 0) {
    console.error(`Error creating group: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Create group successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
    return true;
  }
};

main()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
