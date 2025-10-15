import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const denoms = process.argv.slice(3); // Allow multiple denoms

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/bank/query/send-enabled.ts fivenet [denom1] [denom2] ..."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Send Enabled Status ===`);

  try {
    if (denoms.length > 0) {
      // Query specific denoms
      console.log(`\nChecking send status for: ${denoms.join(", ")}`);
      
      const sendEnabled = await queryClient.cosmos.bank.v1beta1.sendEnabled({
        denoms: denoms,
      });

      if (sendEnabled.sendEnabled && sendEnabled.sendEnabled.length > 0) {
        console.log("\nSend Status:");
        sendEnabled.sendEnabled.forEach((status, index) => {
          const isEnabled = status.enabled ? "✅ ENABLED" : "❌ DISABLED";
          console.log(`  ${index + 1}. ${status.denom}: ${isEnabled}`);
        });
      } else {
        console.log("\nNo specific send rules found for these denoms (using default)");
      }

      // Also show pagination info
      if (sendEnabled.pagination) {
        console.log(`\nPagination:`);
        console.log(`  Next Key: ${sendEnabled.pagination.nextKey || "N/A"}`);
        console.log(`  Total: ${sendEnabled.pagination.total?.toString() || "N/A"}`);
      }

    } else {
      // Query all send-enabled rules
      console.log("\nQuerying all send-enabled rules...");
      
      const allSendEnabled = await queryClient.cosmos.bank.v1beta1.sendEnabled({
        denoms: [], // Empty array to get all
      });

      if (allSendEnabled.sendEnabled && allSendEnabled.sendEnabled.length > 0) {
        console.log("\nAll Send Rules:");
        allSendEnabled.sendEnabled.forEach((status, index) => {
          const isEnabled = status.enabled ? "✅ ENABLED" : "❌ DISABLED";
          console.log(`  ${index + 1}. ${status.denom}: ${isEnabled}`);
        });
        
        console.log(`\nTotal rules: ${allSendEnabled.sendEnabled.length}`);
      } else {
        console.log("\nNo specific send rules configured (all denoms use default setting)");
      }

      // Check default setting from params
      console.log("\n=== Default Send Setting ===");
      const params = await queryClient.cosmos.bank.v1beta1.params({});
      if (params.params) {
        const defaultEnabled = params.params.defaultSendEnabled !== false;
        console.log(`Default send enabled: ${defaultEnabled ? "✅ ENABLED" : "❌ DISABLED"}`);
        console.log("(This applies to all denoms without specific rules)");
      }
    }

  } catch (error) {
    console.error("Error querying send-enabled status:", error);
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
