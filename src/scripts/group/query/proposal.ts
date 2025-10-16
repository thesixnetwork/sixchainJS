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
      "INPUT NETWORK BY RUNNING: bun run ./scripts/group/query/proposal.ts fivenet [proposalId] || yarn ts-node ./scripts/group/query/proposal.ts fivenet [proposalId]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  const propId = Long.fromString(proposalId);

  console.log(`=== Group Proposal Query ===`);
  console.log(`Proposal ID: ${proposalId}`);

  try {
    // Query specific proposal
    const proposal = await queryClient.cosmos.group.v1.proposal({
      proposalId: propId,
    });

    console.log(`\n=== Proposal Details ===`);
    if (proposal.proposal) {
      const prop = proposal.proposal;
      console.log("ID:", prop.id?.toString());
      console.log("Group Policy Address:", prop.groupPolicyAddress);
      console.log("Metadata:", prop.metadata);
      console.log("Proposers:", prop.proposers);
      console.log("Submit Time:", prop.submitTime);
      console.log("Group Version:", prop.groupVersion?.toString());
      console.log("Group Policy Version:", prop.groupPolicyVersion?.toString());
      console.log("Status:", prop.status);
      console.log("Final Tally Result:", prop.finalTallyResult);
      console.log("Voting Period End:", prop.votingPeriodEnd);
      console.log("Executor Result:", prop.executorResult);
      console.log("Messages:", prop.messages);
      console.log("Title:", prop.title);
      console.log("Summary:", prop.summary);
    } else {
      console.log("No proposal found with this ID");
    }

    // Query proposals by group policy
    if (proposal.proposal?.groupPolicyAddress) {
      const proposalsByPolicy =
        await queryClient.cosmos.group.v1.proposalsByGroupPolicy({
          address: proposal.proposal.groupPolicyAddress,
        });

      console.log(`\n=== All Proposals by Policy ===`);
      if (
        proposalsByPolicy.proposals &&
        proposalsByPolicy.proposals.length > 0
      ) {
        console.log(
          `Total proposals for this policy: ${proposalsByPolicy.proposals.length}`
        );
        proposalsByPolicy.proposals.forEach((prop, index) => {
          console.log(`\nProposal ${index + 1}:`);
          console.log("  ID:", prop.id?.toString());
          console.log("  Title:", prop.title);
          console.log("  Status:", prop.status);
          console.log("  Submit Time:", prop.submitTime);
        });
      }
    }
  } catch (error) {
    console.error("Error querying group proposal:", error);
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
