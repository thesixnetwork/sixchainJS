import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/ibc-fee/query/params.ts fivenet || yarn ts-node ./scripts/ibc-fee/query/params.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== IBC Fee Parameters Query ===`);

  try {
    console.log(
      "Note: IBC Fee module queries may not be available in the current SDK version"
    );
    console.log("This is a placeholder script for IBC Fee queries");

    // If IBC Fee module becomes available, queries would look like:
    /*
    const params = await queryClient.ibc.applications.fee.v1.params({});
    console.log("IBC Fee Params:", params);
    
    const incentivizedPackets = await queryClient.ibc.applications.fee.v1.incentivizedPackets({});
    console.log("Incentivized Packets:", incentivizedPackets);
    */
  } catch (error) {
    console.error("Error querying IBC Fee:", error);
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
