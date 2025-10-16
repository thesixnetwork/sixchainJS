import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const proposalStatus = process.argv[3]; // PROPOSAL_STATUS_VOTING_PERIOD, etc.
  const voter = process.argv[4];
  const depositor = process.argv[5];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/gov/query/proposals.ts fivenet [status] [voter] [depositor] || yarn ts-node ./scripts/gov/query/proposals.ts fivenet [status] [voter] [depositor]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== All Proposals Query ===`);
  if (proposalStatus) console.log(`Status Filter: ${proposalStatus}`);
  if (voter) console.log(`Voter Filter: ${voter}`);
  if (depositor) console.log(`Depositor Filter: ${depositor}`);

  try {
    // Build query parameters
    const queryParams: any = {};

    if (proposalStatus) {
      // Map string to enum value
      const statusMap: Record<string, number> = {
        PROPOSAL_STATUS_UNSPECIFIED: 0,
        PROPOSAL_STATUS_DEPOSIT_PERIOD: 1,
        PROPOSAL_STATUS_VOTING_PERIOD: 2,
        PROPOSAL_STATUS_PASSED: 3,
        PROPOSAL_STATUS_REJECTED: 4,
        PROPOSAL_STATUS_FAILED: 5,
      };
      queryParams.proposalStatus =
        statusMap[proposalStatus] ?? parseInt(proposalStatus);
    }

    if (voter) queryParams.voter = voter;
    if (depositor) queryParams.depositor = depositor;

    // Query all proposals
    const proposals = await queryClient.cosmos.gov.v1.proposals(queryParams);

    console.log(`\n=== Proposals ===`);
    if (proposals.proposals && proposals.proposals.length > 0) {
      proposals.proposals.forEach((proposal, index) => {
        console.log(`\nProposal ${index + 1}:`);
        console.log("  ID:", proposal.id?.toString());
        console.log("  Title:", proposal.title);
        console.log("  Summary:", proposal.summary);
        console.log("  Status:", proposal.status);
        console.log("  Submit Time:", proposal.submitTime);
        console.log("  Deposit End Time:", proposal.depositEndTime);
        console.log("  Voting Start Time:", proposal.votingStartTime);
        console.log("  Voting End Time:", proposal.votingEndTime);
        console.log("  Total Deposit:", proposal.totalDeposit);
        console.log("  Final Tally Result:", proposal.finalTallyResult);
        console.log("  Proposer:", proposal.proposer);
      });
      console.log(`\nTotal proposals: ${proposals.proposals.length}`);
    } else {
      console.log("No proposals found with the given filters");
    }

    // Get pagination info
    if (proposals.pagination) {
      console.log(`\n=== Pagination ===`);
      console.log("Total:", proposals.pagination.total?.toString());
      console.log("Next Key:", proposals.pagination.nextKey);
    }

    // Show available status options
    console.log(`\n=== Available Status Options ===`);
    console.log("0: PROPOSAL_STATUS_UNSPECIFIED");
    console.log("1: PROPOSAL_STATUS_DEPOSIT_PERIOD");
    console.log("2: PROPOSAL_STATUS_VOTING_PERIOD");
    console.log("3: PROPOSAL_STATUS_PASSED");
    console.log("4: PROPOSAL_STATUS_REJECTED");
    console.log("5: PROPOSAL_STATUS_FAILED");
  } catch (error) {
    console.error("Error querying proposals:", error);
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
