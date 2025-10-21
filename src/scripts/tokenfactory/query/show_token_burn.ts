import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const BURN_INDEX = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!BURN_INDEX) {
    throw new Error(
      "Burn index not specified. Please provide a burn index as the second argument."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  // Create RPC query client
  const client = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`Querying token burn with index: ${BURN_INDEX}...`);

  try {
    const response = await client.sixprotocol.tokenmngr.tokenBurn({
      index: BURN_INDEX,
    });

    console.log("Token Burn Details:");
    console.log("===================");
    console.log(
      `Amount: ${response.tokenBurn.amount?.amount || "N/A"} ${response.tokenBurn.amount?.denom || ""}`
    );

    console.log("\nRaw Response:");
    console.log(JSON.stringify(response.tokenBurn, null, 2));

    return true;
  } catch (error) {
    console.error(`Error querying token burn: ${error}`);
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
