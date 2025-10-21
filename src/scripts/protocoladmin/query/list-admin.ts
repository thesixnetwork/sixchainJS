import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/protocoladmin/query/list-admin.ts fivenet || yarn ts-node ./scripts/protocoladmin/query/list-admin.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Protocol Admin List All Admins Query ===`);

  try {
    // Query all admins
    const result = await queryClient.sixprotocol.protocoladmin.adminAll({});

    console.log(`\n=== All Admins ===`);
    if (result.admin && result.admin.length > 0) {
      console.log(`Found ${result.admin.length} admins:`);
      result.admin.forEach((admin, index) => {
        console.log(`${index + 1}. Admin:`, JSON.stringify(admin, null, 2));
      });
      
      if (result.pagination) {
        console.log("\n=== Pagination Info ===");
        console.log("Pagination:", JSON.stringify(result.pagination, null, 2));
      }
    } else {
      console.log("No admins found");
    }
  } catch (error) {
    console.error("Error querying admins:", error);
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