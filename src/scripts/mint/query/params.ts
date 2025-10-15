import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/mint/query/params.ts fivenet || yarn ts-node ./scripts/mint/query/params.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  try {
    // Query mint params
    const params = await queryClient.cosmos.mint.v1beta1.params({});

    console.log("Mint params:", params);

    // Query current inflation rate
    const inflation = await queryClient.cosmos.mint.v1beta1.inflation({});

    console.log("Current inflation:", inflation);

    // Query annual provisions
    const annualProvisions =
      await queryClient.cosmos.mint.v1beta1.annualProvisions({});

    console.log("Annual provisions:", annualProvisions);
  } catch (error) {
    console.error("Error querying mint:", error);
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
