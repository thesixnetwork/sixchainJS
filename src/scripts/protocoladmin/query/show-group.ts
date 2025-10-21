import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const GROUP_NAME = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/protocoladmin/query/show-group.ts fivenet [group_name] || yarn ts-node ./scripts/protocoladmin/query/show-group.ts fivenet [group_name]"
    );
  }

  if (!GROUP_NAME) {
    throw new Error(
      "GROUP NAME is required: bun run ./scripts/protocoladmin/query/show-group.ts fivenet [group_name]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Protocol Admin Show Group Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Group: ${GROUP_NAME}`);

  try {
    // Query specific group by name
    const result = await queryClient.sixprotocol.protocoladmin.group({
      name: GROUP_NAME,
    });

    console.log(`\n=== Group Details ===`);
    if (result.group) {
      console.log("Group found:");
      console.log(JSON.stringify(result.group, null, 2));
    } else {
      console.log(`Group "${GROUP_NAME}" not found`);
    }
  } catch (error) {
    console.error("Error querying group:", error);
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