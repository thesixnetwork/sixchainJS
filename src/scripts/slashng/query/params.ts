import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/slashng/query/params.ts fivenet || yarn ts-node ./scripts/slashng/query/params.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Slashing Parameters Query ===`);

  try {
    console.log(
      "Note: Slashing module queries may not be available in the current SDK version"
    );
    console.log("This is a placeholder script for slashing module queries");

    // If slashing module becomes available, uncomment and use:
    /*
    const params = await queryClient.cosmos.slashing.v1beta1.params({});
    console.log("Slashing params:", params.params);
    
    const signingInfos = await queryClient.cosmos.slashing.v1beta1.signingInfos({});
    console.log("Signing infos:", signingInfos.info);
    */
  } catch (error) {
    console.error("Error querying slashing:", error);
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
