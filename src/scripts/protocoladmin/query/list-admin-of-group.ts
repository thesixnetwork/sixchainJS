import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const GROUP_NAME = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/protocoladmin/query/list-admin-of-group.ts fivenet [group_name] || yarn ts-node ./scripts/protocoladmin/query/list-admin-of-group.ts fivenet [group_name]"
    );
  }

  if (!GROUP_NAME) {
    throw new Error(
      "GROUP NAME is required: bun run ./scripts/protocoladmin/query/list-admin-of-group.ts fivenet [group_name]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Protocol Admin List Admins of Group Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Group: ${GROUP_NAME}`);

  try {
    // Query admins of specific group
    const result = await queryClient.sixprotocol.protocoladmin.listAdminOfGroup({
      group: GROUP_NAME,
    });

    console.log(`\n=== Admins in Group: ${GROUP_NAME} ===`);
    if (result.admin && result.admin.length > 0) {
      console.log(`Found ${result.admin.length} admins in group "${GROUP_NAME}":`);
      result.admin.forEach((admin, index) => {
        console.log(`${index + 1}. Admin: ${admin}`);
      });
      
      if (result.pagination) {
        console.log("\n=== Pagination Info ===");
        console.log("Pagination:", JSON.stringify(result.pagination, null, 2));
      }
    } else {
      console.log(`No admins found in group "${GROUP_NAME}"`);
    }
  } catch (error) {
    console.error("Error querying admins of group:", error);
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