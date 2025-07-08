import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/gov/query/proposal.ts fivenet || yarn ts-node ./scripts/gov/query/proposal.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  try {
    // Query specific proposal
    const proposalId = Long.fromNumber(1); // TODO: Replace with actual proposal ID
    const proposal = await queryClient.cosmos.gov.v1.proposal({
      proposalId: proposalId
    });

    console.log("Proposal:", proposal);

    // Query all proposals
    const proposals = await queryClient.cosmos.gov.v1.proposals({
      proposalStatus: cosmos.gov.v1.ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD,
      voter: "", // TODO: Add voter address to filter by voter
      depositor: "" // TODO: Add depositor address to filter by depositor
    });

    console.log("Proposals:", proposals);

    // Query proposal votes
    const votes = await queryClient.cosmos.gov.v1.votes({
      proposalId: proposalId
    });

    console.log("Votes:", votes);

    // Query proposal deposits
    const deposits = await queryClient.cosmos.gov.v1.deposits({
      proposalId: proposalId
    });

    console.log("Deposits:", deposits);

    // Query governance params
    const params = await queryClient.cosmos.gov.v1.params({
      paramsType: "voting" // TODO: Can be "voting", "tallying", or "deposit"
    });

    console.log("Gov params:", params);
  } catch (error) {
    console.error("Error querying governance:", error);
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
