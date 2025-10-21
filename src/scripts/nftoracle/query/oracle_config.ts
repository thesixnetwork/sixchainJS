import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Oracle Configuration Query ===`);
  console.log(`Network: ${NETWORK}`);

  try {
    // Query oracle configuration
    const oracleConfig = await queryClient.sixprotocol.nftoracle.oracleConfig({});

    console.log(`\n=== Oracle Configuration ===`);
    if (oracleConfig.oracleConfig) {
      const config = oracleConfig.oracleConfig;
      console.log("Minimum Confirmation:", config.minimumConfirmation?.toString());

      if (config.requiredConfirmTaskList && config.requiredConfirmTaskList.length > 0) {
        console.log("\n=== Required Confirmation Task List ===");
        config.requiredConfirmTaskList.forEach((task, index) => {
          console.log(`Task ${index + 1}:`);
          console.log("  Task:", task.task);
          console.log("  Required Confirmation:", task.requiredConfirmation?.toString());
        });
      } else {
        console.log("\nNo required confirmation tasks found");
      }

      if (config.chainConfigs && config.chainConfigs.length > 0) {
        console.log("\n=== Chain Configurations ===");
        config.chainConfigs.forEach((chainConfig, index) => {
          console.log(`Chain Config ${index + 1}:`);
          console.log("  Chain:", chainConfig.chain);
          console.log("  Min Confirmation:", chainConfig.minConfirmation?.toString());
          console.log("  Confirmation Block Count:", chainConfig.confirmationBlockCount?.toString());
        });
      } else {
        console.log("\nNo chain configurations found");
      }

      // Display additional oracle config fields if they exist
      if (config.params) {
        console.log("\n=== Additional Parameters ===");
        console.log(JSON.stringify(config.params, null, 2));
      }
    } else {
      console.log("Oracle configuration not found");
    }
  } catch (error: any) {
    console.error("Error querying oracle configuration:", error.message || error);
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
