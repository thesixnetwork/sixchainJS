import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const paramsType = process.argv[3] || "voting"; // voting, deposit, tallying

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/gov/query/params.ts fivenet [paramsType] || yarn ts-node ./scripts/gov/query/params.ts fivenet [paramsType]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Gov Params Query ===`);
  console.log(`Params Type: ${paramsType}`);

  try {
    // Query governance parameters
    const params = await queryClient.cosmos.gov.v1.params({
      paramsType: paramsType,
    });

    console.log(`\n=== ${paramsType.toUpperCase()} Parameters ===`);
    if (params.params) {
      console.log("Params:", JSON.stringify(params.params, null, 2));
    } else {
      console.log("No parameters found");
    }

    // Query all parameter types
    const allParamTypes = ["voting", "deposit", "tallying"];
    console.log("\n=== All Parameter Types ===");

    for (const type of allParamTypes) {
      try {
        const typeParams = await queryClient.cosmos.gov.v1.params({
          paramsType: type,
        });
        console.log(
          `\n${type.toUpperCase()}:`,
          JSON.stringify(typeParams.params, null, 2)
        );
      } catch (error) {
        console.log(`Error querying ${type} params:`, error);
      }
    }
  } catch (error) {
    console.error("Error querying governance params:", error);
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
