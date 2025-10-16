import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const moduleName = process.argv[3] || ""; // Leave empty for all modules

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/upgrade/query/module-versions.ts fivenet [moduleName] || yarn ts-node ./scripts/upgrade/query/module-versions.ts fivenet [moduleName]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Module Versions Query ===`);
  if (moduleName) {
    console.log(`Module Filter: ${moduleName}`);
  } else {
    console.log("Querying all modules");
  }

  try {
    // Query module versions
    const moduleVersions =
      await queryClient.cosmos.upgrade.v1beta1.moduleVersions({
        moduleName: moduleName,
      });

    console.log(`\n=== Module Versions ===`);
    if (
      moduleVersions.moduleVersions &&
      moduleVersions.moduleVersions.length > 0
    ) {
      moduleVersions.moduleVersions.forEach((module, index) => {
        console.log(`\nModule ${index + 1}:`);
        console.log("  Name:", module.name);
        console.log("  Version:", module.version?.toString());
      });
      console.log(`\nTotal modules: ${moduleVersions.moduleVersions.length}`);
    } else {
      console.log("No module versions found");
    }

    // Get upgrade authority for context
    try {
      const authority = await queryClient.cosmos.upgrade.v1beta1.authority({});
      console.log(`\n=== Upgrade Authority ===`);
      console.log("Authority:", authority.address);
    } catch (error) {
      console.log("Could not query upgrade authority");
    }
  } catch (error) {
    console.error("Error querying module versions:", error);
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
