import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/ibc/query/client-states.ts fivenet || yarn ts-node ./scripts/ibc/query/client-states.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== IBC Client States Query ===`);

  try {
    console.log(
      "Note: IBC module queries may not be fully available in the current SDK version"
    );
    console.log("This is a placeholder script for IBC client states queries");

    // If IBC module becomes available, queries would look like:
    /*
    const clientStates = await queryClient.ibc.core.client.v1.clientStates({});
    console.log("Client States:", clientStates);
    */
  } catch (error) {
    console.error("Error querying IBC client states:", error);
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
