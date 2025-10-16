import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const denom = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/bank/query/total_supply.ts fivenet [denom]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  try {
    if (denom) {
      // Query supply for specific denom
      console.log(`=== Total Supply for ${denom} ===`);

      const supply = await queryClient.cosmos.bank.v1beta1.supplyOf({
        denom: denom,
      });

      if (supply.amount) {
        const amount = supply.amount.amount || "0";
        console.log(`\nSupply: ${amount} ${denom}`);

        // Convert usix to SIX for display
        if (denom === "usix") {
          const sixAmount = (parseInt(amount) / 1_000_000).toLocaleString();
          console.log(`Converted: ${sixAmount} SIX`);
        }
      } else {
        console.log(`No supply found for denom: ${denom}`);
      }
    } else {
      // Query total supply of all denoms
      console.log(`=== Total Supply of All Denoms ===`);

      const totalSupply = await queryClient.cosmos.bank.v1beta1.totalSupply({});

      if (totalSupply.supply && totalSupply.supply.length > 0) {
        console.log(`\nTotal Supply:`);
        totalSupply.supply.forEach((supply, index) => {
          const amount = supply.amount || "0";
          const denom = supply.denom || "";

          // Convert usix to SIX for display
          if (denom === "usix") {
            const sixAmount = (parseInt(amount) / 1_000_000).toLocaleString();
            console.log(`  ${index + 1}. ${sixAmount} SIX (${amount} usix)`);
          } else {
            console.log(`  ${index + 1}. ${amount} ${denom}`);
          }
        });

        console.log(
          `\nTotal different denoms in supply: ${totalSupply.supply.length}`
        );

        // Show pagination info
        if (totalSupply.pagination) {
          console.log(`\nPagination:`);
          console.log(`  Next Key: ${totalSupply.pagination.nextKey || "N/A"}`);
          console.log(
            `  Total: ${totalSupply.pagination.total?.toString() || "N/A"}`
          );
        }
      } else {
        console.log("No supply information found");
      }
    }
  } catch (error) {
    console.error("Error querying supply:", error);
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
