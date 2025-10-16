import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/staking/query/params.ts fivenet || yarn ts-node ./scripts/staking/query/params.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Staking Parameters Query ===`);

  try {
    // Query staking params
    const params = await queryClient.cosmos.staking.v1beta1.params({});

    console.log(`\n=== Staking Parameters ===`);
    if (params.params) {
      console.log("Unbonding Time:", params.params.unbondingTime);
      console.log("Max Validators:", params.params.maxValidators);
      console.log("Max Entries:", params.params.maxEntries);
      console.log("Historical Entries:", params.params.historicalEntries);
      console.log("Bond Denom:", params.params.bondDenom);
      console.log("Min Commission Rate:", params.params.minCommissionRate);
    } else {
      console.log("No staking parameters found");
    }

    // Query staking pool for additional context
    const pool = await queryClient.cosmos.staking.v1beta1.pool({});

    console.log(`\n=== Staking Pool ===`);
    if (pool.pool) {
      console.log("Not Bonded Tokens:", pool.pool.notBondedTokens);
      console.log("Bonded Tokens:", pool.pool.bondedTokens);

      // Calculate some ratios
      const notBonded = parseInt(pool.pool.notBondedTokens || "0");
      const bonded = parseInt(pool.pool.bondedTokens || "0");
      const total = notBonded + bonded;

      if (total > 0) {
        console.log(`\n=== Pool Statistics ===`);
        console.log(`Total Tokens: ${total.toLocaleString()}`);
        console.log(`Bonded Ratio: ${((bonded / total) * 100).toFixed(2)}%`);
        console.log(
          `Not Bonded Ratio: ${((notBonded / total) * 100).toFixed(2)}%`
        );
      }
    }
  } catch (error) {
    console.error("Error querying staking params:", error);
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
