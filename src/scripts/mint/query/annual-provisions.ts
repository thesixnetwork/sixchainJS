import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/mint/query/annual-provisions.ts fivenet || yarn ts-node ./scripts/mint/query/annual-provisions.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Annual Provisions Query ===`);

  try {
    // Query annual provisions
    const annualProvisions =
      await queryClient.cosmos.mint.v1beta1.annualProvisions({});

    console.log(`\n=== Annual Provisions ===`);
    if (annualProvisions.annualProvisions) {
      console.log("Annual Provisions:", annualProvisions.annualProvisions);

      // Try to parse as number for additional info
      try {
        const provisionsStr = annualProvisions.annualProvisions.toString();
        const provisionsNum = parseFloat(provisionsStr);
        if (!isNaN(provisionsNum)) {
          console.log(
            "Annual Provisions (Numeric):",
            provisionsNum.toLocaleString()
          );
          console.log(
            "Daily Provisions (Estimate):",
            (provisionsNum / 365).toLocaleString()
          );
          console.log(
            "Monthly Provisions (Estimate):",
            (provisionsNum / 12).toLocaleString()
          );
        }
      } catch (error) {
        console.log("Could not parse provisions for calculations");
      }
    } else {
      console.log("No annual provisions data available");
    }

    // Get related data for context
    const inflation = await queryClient.cosmos.mint.v1beta1.inflation({});
    const params = await queryClient.cosmos.mint.v1beta1.params({});

    console.log(`\n=== Related Information ===`);
    console.log("Current Inflation:", inflation.inflation);
    if (params.params) {
      console.log("Mint Denom:", params.params.mintDenom);
      console.log("Blocks Per Year:", params.params.blocksPerYear?.toString());
    }
  } catch (error) {
    console.error("Error querying annual provisions:", error);
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
