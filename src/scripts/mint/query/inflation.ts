import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/mint/query/inflation.ts fivenet || yarn ts-node ./scripts/mint/query/inflation.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Mint Inflation Query ===`);

  try {
    // Query current inflation rate
    const inflation = await queryClient.cosmos.mint.v1beta1.inflation({});

    console.log(`\n=== Current Inflation ===`);
    if (inflation.inflation) {
      console.log("Inflation Rate:", inflation.inflation);
      // Convert Uint8Array to string if needed for percentage calculation
      try {
        const inflationStr = inflation.inflation.toString();
        const inflationRate = parseFloat(inflationStr);
        if (!isNaN(inflationRate)) {
          console.log(
            "Inflation Percentage:",
            `${(inflationRate * 100).toFixed(6)}%`
          );
        }
      } catch (error) {
        console.log("Could not parse inflation rate for percentage");
      }
    } else {
      console.log("No inflation data available");
    }

    // Also query mint params for context
    const params = await queryClient.cosmos.mint.v1beta1.params({});

    console.log(`\n=== Mint Parameters (Context) ===`);
    if (params.params) {
      console.log("Mint Denom:", params.params.mintDenom);
      console.log("Inflation Rate Change:", params.params.inflationRateChange);
      console.log("Inflation Max:", params.params.inflationMax);
      console.log("Inflation Min:", params.params.inflationMin);
      console.log("Goal Bonded:", params.params.goalBonded);
      console.log("Blocks Per Year:", params.params.blocksPerYear?.toString());
    }
  } catch (error) {
    console.error("Error querying inflation:", error);
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
