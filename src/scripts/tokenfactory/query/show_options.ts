import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  // Create RPC query client
  const client = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log("Querying tokenmngr options...");

  try {
    const response = await client.sixprotocol.tokenmngr.options();

    console.log("Tokenmngr Options:");
    console.log("==================");
    console.log(`Default Mintee: ${response.options.defaultMintee || "N/A"}`);

    console.log("\nRaw Response:");
    console.log(JSON.stringify(response.options, null, 2));

    return true;
  } catch (error) {
    console.error(`Error querying options: ${error}`);
    return false;
  }
};

main()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
