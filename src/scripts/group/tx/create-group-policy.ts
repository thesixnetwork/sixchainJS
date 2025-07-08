import { getSigningCosmosClient, cosmos } from '@sixnetwork/sixchain-sdk';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "../../client";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/group/tx/create-group-policy.ts fivenet || yarn ts-node ./scripts/group/tx/create-group-policy.ts fivenet"
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

  // TODO: Replace with actual group ID and decision policy
  const groupId = Long.fromNumber(1); // TODO: Replace with actual group ID

  // Threshold decision policy
  const decisionPolicy = {
    typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
    value: cosmos.group.v1.ThresholdDecisionPolicy.encode({
      threshold: "1", // TODO: Set appropriate threshold
      windows: {
        votingPeriod: {
          seconds: Long.fromNumber(86400), // 24 hours, TODO: Adjust as needed
          nanos: 0
        },
        minExecutionPeriod: {
          seconds: Long.fromNumber(0),
          nanos: 0
        }
      }
    }).finish()
  };

  const createGroupPolicy = cosmos.group.v1.MessageComposer.withTypeUrl.createGroupPolicy({
    admin: address,
    groupId: groupId,
    metadata: "TODO: Add group policy metadata",
    decisionPolicy: decisionPolicy
  });

  msgArray.push(createGroupPolicy);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "create group policy"
  );

  if (txResponse.code !== 0) {
    console.error(`Error creating group policy: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Create group policy successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
