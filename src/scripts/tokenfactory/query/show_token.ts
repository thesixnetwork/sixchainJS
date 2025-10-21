import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const TOKEN_NAME = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!TOKEN_NAME) {
    throw new Error(
      "Token name not specified. Please provide a token name as the second argument."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  // Create RPC query client
  const client = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`Querying token: ${TOKEN_NAME}...`);

  try {
    const response = await client.sixprotocol.tokenmngr.token({
      name: TOKEN_NAME,
    });

    console.log("Token Details:");
    console.log("==============");
    console.log(`Name: ${response.token.name}`);
    console.log(`Base: ${response.token.base}`);
    console.log(
      `Max Supply: ${response.token.maxSupply?.amount || "N/A"} ${response.token.maxSupply?.denom || ""}`
    );
    console.log(`Mintee: ${response.token.mintee || "N/A"}`);
    console.log(`Creator: ${response.token.creator || "N/A"}`);

    console.log("\nRaw Response:");
    console.log(JSON.stringify(response.token, null, 2));

    return true;
  } catch (error) {
    console.error(`Error querying token: ${error}`);
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
