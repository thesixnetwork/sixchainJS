import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/ratelimit/query/params.ts fivenet || yarn ts-node ./scripts/ratelimit/query/params.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Rate Limit Parameters Query ===`);

  try {
    console.log(
      "Note: Rate limit module queries may not be available in the current SDK version"
    );
    console.log("This is a placeholder script for rate limit queries");

    // If rate limit module becomes available, queries would look like:
    /*
    const params = await queryClient.ratelimit.v1.params({});
    console.log("Rate Limit Params:", params);
    
    const rateLimits = await queryClient.ratelimit.v1.rateLimits({});
    console.log("Rate Limits:", rateLimits);
    */
  } catch (error) {
    console.error("Error querying rate limit:", error);
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
