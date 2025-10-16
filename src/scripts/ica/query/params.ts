import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/ica/query/params.ts fivenet || yarn ts-node ./scripts/ica/query/params.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== ICA (Interchain Accounts) Parameters Query ===`);

  try {
    console.log(
      "Note: ICA module queries may not be fully available in the current SDK version"
    );
    console.log("This is a placeholder script for ICA params queries");

    // If ICA module becomes available, queries would look like:
    /*
    const params = await queryClient.ibc.applications.interchain_accounts.controller.v1.params({});
    console.log("ICA Controller Params:", params);
    
    const hostParams = await queryClient.ibc.applications.interchain_accounts.host.v1.params({});
    console.log("ICA Host Params:", hostParams);
    */
  } catch (error) {
    console.error("Error querying ICA params:", error);
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
