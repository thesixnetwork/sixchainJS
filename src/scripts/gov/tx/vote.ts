import { getSigningCosmosClient, cosmos } from "@sixnetwork/sixchain-sdk";
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
      "INPUT NETWORK BY RUNNING: bun run ./scripts/gov/tx/vote.ts fivenet || yarn ts-node ./scripts/gov/tx/vote.ts fivenet"
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
      gasPrice: gasPrice,
    },
  });

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];

  // TODO: Replace with actual proposal ID and vote option
  const proposalId = Long.fromNumber(1); // TODO: Replace with actual proposal ID
  const voteOption = cosmos.gov.v1.VoteOption.VOTE_OPTION_YES; // TODO: Change vote option as needed

  const vote = cosmos.gov.v1.MessageComposer.withTypeUrl.vote({
    proposalId: proposalId,
    voter: address,
    option: voteOption,
    metadata: "TODO: Add vote metadata if needed",
  });

  msgArray.push(vote);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "vote on proposal"
  );

  if (txResponse.code !== 0) {
    console.error(`Error voting on proposal: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Vote successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
