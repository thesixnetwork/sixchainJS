import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/ibc-transfer/query/params.ts fivenet || yarn ts-node ./scripts/ibc-transfer/query/params.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== IBC Transfer Parameters Query ===`);

  try {
    console.log(
      "Note: IBC Transfer module queries may not be available in the current SDK version"
    );
    console.log("This is a placeholder script for IBC Transfer queries");

    // If IBC Transfer module becomes available, queries would look like:
    /*
    const params = await queryClient.ibc.applications.transfer.v1.params({});
    console.log("IBC Transfer Params:", params);
    
    const denomTrace = await queryClient.ibc.applications.transfer.v1.denomTrace({
      hash: "example_hash"
    });
    console.log("Denom Trace:", denomTrace);
    */
  } catch (error) {
    console.error("Error querying IBC Transfer:", error);
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
