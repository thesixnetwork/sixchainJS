import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/tokenfactory/query/params.ts fivenet || yarn ts-node ./scripts/tokenfactory/query/params.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Token Factory Parameters Query ===`);

  try {
    console.log(
      "Note: Token factory module queries may not be available in the current SDK version"
    );
    console.log("This is a placeholder script for token factory queries");

    // If token factory module becomes available, queries would look like:
    /*
    const params = await queryClient.tokenfactory.v1beta1.params({});
    console.log("Token Factory Params:", params);
    
    const denoms = await queryClient.tokenfactory.v1beta1.denomsFromCreator({
      creator: "6x1example_creator_address"
    });
    console.log("Created Denoms:", denoms);
    */
  } catch (error) {
    console.error("Error querying token factory:", error);
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
