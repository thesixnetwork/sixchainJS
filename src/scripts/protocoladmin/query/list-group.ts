import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/protocoladmin/query/list-group.ts fivenet || yarn ts-node ./scripts/protocoladmin/query/list-group.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Protocol Admin List Groups Query ===`);

  try {
    // Query all groups
    const result = await queryClient.sixprotocol.protocoladmin.groupAll({});

    console.log(`\n=== All Groups ===`);
    if (result.group && result.group.length > 0) {
      console.log(`Found ${result.group.length} groups:`);
      result.group.forEach((group, index) => {
        console.log(`${index + 1}. Group:`, JSON.stringify(group, null, 2));
      });
      
      if (result.pagination) {
        console.log("\n=== Pagination Info ===");
        console.log("Pagination:", JSON.stringify(result.pagination, null, 2));
      }
    } else {
      console.log("No groups found");
    }
  } catch (error) {
    console.error("Error querying groups:", error);
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
