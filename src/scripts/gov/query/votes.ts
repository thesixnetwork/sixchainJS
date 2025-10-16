import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const proposalId = process.argv[3] || "1";

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/gov/query/votes.ts fivenet [proposalId] || yarn ts-node ./scripts/gov/query/votes.ts fivenet [proposalId]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  const propId = Long.fromString(proposalId);

  console.log(`=== Proposal Votes Query ===`);
  console.log(`Proposal ID: ${proposalId}`);

  try {
    // Query all votes for a proposal
    const votes = await queryClient.cosmos.gov.v1.votes({
      proposalId: propId,
    });

    console.log(`\n=== All Votes ===`);
    if (votes.votes && votes.votes.length > 0) {
      votes.votes.forEach((vote, index) => {
        console.log(`\nVote ${index + 1}:`);
        console.log("  Voter:", vote.voter);
        console.log("  Options:", vote.options);
        console.log("  Metadata:", vote.metadata);
      });
      console.log(`\nTotal votes: ${votes.votes.length}`);
    } else {
      console.log("No votes found for this proposal");
    }

    // Query specific voter's vote (if available)
    const voterAddress = "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq";
    try {
      const vote = await queryClient.cosmos.gov.v1.vote({
        proposalId: propId,
        voter: voterAddress,
      });

      console.log(`\n=== Specific Vote ===`);
      console.log("Voter:", voterAddress);
      console.log("Vote:", vote.vote);
    } catch (error) {
      console.log(`\nNo vote found for voter: ${voterAddress}`);
    }

    // Get pagination info
    if (votes.pagination) {
      console.log(`\n=== Pagination ===`);
      console.log("Total:", votes.pagination.total?.toString());
      console.log("Next Key:", votes.pagination.nextKey);
    }
  } catch (error) {
    console.error("Error querying votes:", error);
  }
};

main()
  .then(() => {
    console.log("\nDone");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
