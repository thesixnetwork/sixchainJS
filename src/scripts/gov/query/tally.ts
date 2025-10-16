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
      "INPUT NETWORK BY RUNNING: bun run ./scripts/gov/query/tally.ts fivenet [proposalId] || yarn ts-node ./scripts/gov/query/tally.ts fivenet [proposalId]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  const propId = Long.fromString(proposalId);

  console.log(`=== Proposal Tally Query ===`);
  console.log(`Proposal ID: ${proposalId}`);

  try {
    // Query tally result for a proposal
    const tally = await queryClient.cosmos.gov.v1.tallyResult({
      proposalId: propId,
    });

    console.log(`\n=== Tally Results ===`);
    if (tally.tally) {
      console.log("Yes votes:", tally.tally.yesCount || "0");
      console.log("Abstain votes:", tally.tally.abstainCount || "0");
      console.log("No votes:", tally.tally.noCount || "0");
      console.log("No with veto votes:", tally.tally.noWithVetoCount || "0");

      // Calculate totals and percentages
      const yes = parseInt(tally.tally.yesCount || "0");
      const abstain = parseInt(tally.tally.abstainCount || "0");
      const no = parseInt(tally.tally.noCount || "0");
      const noWithVeto = parseInt(tally.tally.noWithVetoCount || "0");
      const total = yes + abstain + no + noWithVeto;

      if (total > 0) {
        console.log(`\n=== Percentages ===`);
        console.log(`Yes: ${((yes / total) * 100).toFixed(2)}%`);
        console.log(`Abstain: ${((abstain / total) * 100).toFixed(2)}%`);
        console.log(`No: ${((no / total) * 100).toFixed(2)}%`);
        console.log(
          `No with Veto: ${((noWithVeto / total) * 100).toFixed(2)}%`
        );
        console.log(`\nTotal Votes: ${total}`);
      }
    } else {
      console.log("No tally results found for this proposal");
    }
  } catch (error) {
    console.error("Error querying tally:", error);
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
