import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const denom = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/bank/query/denoms_metadata.ts fivenet [denom]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  try {
    if (denom) {
      // Query specific denom metadata
      console.log(`=== Metadata for ${denom} ===`);
      
      const metadata = await queryClient.cosmos.bank.v1beta1.denomMetadata({
        denom: denom,
      });

      if (metadata.metadata) {
        const meta = metadata.metadata;
        console.log(`\nDenom Information:`);
        console.log(`  Name: ${meta.name || "N/A"}`);
        console.log(`  Symbol: ${meta.symbol || "N/A"}`);
        console.log(`  Description: ${meta.description || "N/A"}`);
        console.log(`  Base Denom: ${meta.base || "N/A"}`);
        console.log(`  Display Denom: ${meta.display || "N/A"}`);

        if (meta.denomUnits && meta.denomUnits.length > 0) {
          console.log(`\nDenom Units:`);
          meta.denomUnits.forEach((unit, index) => {
            console.log(`  ${index + 1}. ${unit.denom}: 10^${unit.exponent} (${unit.aliases?.join(", ") || "no aliases"})`);
          });
        }

        if (meta.uri) {
          console.log(`\nURI: ${meta.uri}`);
        }

        if (meta.uriHash) {
          console.log(`URI Hash: ${meta.uriHash}`);
        }

      } else {
        console.log(`No metadata found for denom: ${denom}`);
      }

    } else {
      // Query all denom metadata
      console.log(`=== All Denom Metadata ===`);
      
      const allMetadata = await queryClient.cosmos.bank.v1beta1.denomsMetadata({});

      if (allMetadata.metadatas && allMetadata.metadatas.length > 0) {
        console.log(`\nFound ${allMetadata.metadatas.length} registered denoms:\n`);
        
        allMetadata.metadatas.forEach((meta, index) => {
          console.log(`${index + 1}. ${meta.base || "Unknown"}`);
          console.log(`   Name: ${meta.name || "N/A"}`);
          console.log(`   Symbol: ${meta.symbol || "N/A"}`);
          console.log(`   Display: ${meta.display || "N/A"}`);
          
          if (meta.denomUnits && meta.denomUnits.length > 0) {
            console.log(`   Units: ${meta.denomUnits.map(u => `${u.denom}(10^${u.exponent})`).join(", ")}`);
          }
          console.log("");
        });

        // Show pagination info
        if (allMetadata.pagination) {
          console.log(`Pagination:`);
          console.log(`  Next Key: ${allMetadata.pagination.nextKey || "N/A"}`);
          console.log(`  Total: ${allMetadata.pagination.total?.toString() || "N/A"}`);
        }

      } else {
        console.log("No denom metadata found");
      }
    }

  } catch (error) {
    console.error("Error querying denom metadata:", error);
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
