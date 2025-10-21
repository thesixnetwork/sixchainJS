import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const GROUP_NAME = process.argv[3];
  const ADMIN_ADDRESS = process.argv[4];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/protocoladmin/query/show-admin.ts fivenet [group_name] [admin_address] || yarn ts-node ./scripts/protocoladmin/query/show-admin.ts fivenet [group_name] [admin_address]"
    );
  }

  if (!GROUP_NAME) {
    throw new Error(
      "GROUP NAME is required: bun run ./scripts/protocoladmin/query/show-admin.ts fivenet [group_name] [admin_address]"
    );
  }

  if (!ADMIN_ADDRESS) {
    throw new Error(
      "ADMIN ADDRESS is required: bun run ./scripts/protocoladmin/query/show-admin.ts fivenet [group_name] [admin_address]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Protocol Admin Show Admin Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Group: ${GROUP_NAME}`);
  console.log(`Admin: ${ADMIN_ADDRESS}`);

  try {
    // Query specific admin by group and admin address
    const result = await queryClient.sixprotocol.protocoladmin.admin({
      group: GROUP_NAME,
      admin: ADMIN_ADDRESS,
    });

    console.log(`\n=== Admin Details ===`);
    if (result.admin) {
      console.log("Admin found:");
      console.log(JSON.stringify(result.admin, null, 2));
    } else {
      console.log(`Admin "${ADMIN_ADDRESS}" not found in group "${GROUP_NAME}"`);
    }
  } catch (error) {
    console.error("Error querying admin:", error);
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