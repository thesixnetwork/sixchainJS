import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/nftmngr/query/params.ts fivenet || yarn ts-node ./scripts/nftmngr/query/params.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Manager Parameters Query ===`);

  try {
    // Query nftmngr params
    const params = await queryClient.sixprotocol.nftmngr.params({});

    console.log(`\n=== NFT Manager Parameters ===`);
    if (params.params) {
      console.log("Parameters:", JSON.stringify(params.params, null, 2));
    } else {
      console.log("No parameters found");
    }
  } catch (error) {
    console.error("Error querying nftmngr params:", error);
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
