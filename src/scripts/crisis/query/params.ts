import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/crisis/query/params.ts fivenet || yarn ts-node ./scripts/crisis/query/params.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  try {
    // Note: Crisis module typically doesn't have many query endpoints
    // The main functionality is through invariant checks and halt-on-error

    // TODO: Crisis module queries are limited, this is a placeholder
    // Most crisis functionality happens through invariant checks
    console.log("Crisis module queries are limited to invariant checks");
    console.log(
      "Crisis module is primarily used for emergency halt functionality"
    );
  } catch (error) {
    console.error("Error querying crisis:", error);
  }
};

main()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
