import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/bank/query/params.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Bank Module Parameters ===`);

  try {
    const params = await queryClient.cosmos.bank.v1beta1.params({});

    if (params.params) {
      console.log("\nBank Module Configuration:");
      
      // Send enabled parameters
      if (params.params.sendEnabled && params.params.sendEnabled.length > 0) {
        console.log("\nSend Enabled Rules:");
        params.params.sendEnabled.forEach((rule, index) => {
          console.log(`  ${index + 1}. Denom: ${rule.denom || "N/A"}, Enabled: ${rule.enabled || false}`);
        });
      } else {
        console.log("\nSend Enabled Rules: Default (all enabled)");
      }

      // Default send enabled
      console.log(`\nDefault Send Enabled: ${params.params.defaultSendEnabled !== undefined ? params.params.defaultSendEnabled : 'true (default)'}`);
      
    } else {
      console.log("No parameters found");
    }

  } catch (error) {
    console.error("Error querying bank parameters:", error);
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
