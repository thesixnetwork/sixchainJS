import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const TOKEN_NAME = process.argv[3];
  const ADDRESS = process.argv[4];

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

  if (!ADDRESS) {
    throw new Error(
      "Address not specified. Please provide an address as the third argument."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  // Create RPC query client
  const client = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`Querying mint permission for token: ${TOKEN_NAME}, address: ${ADDRESS}...`);

  try {
    const response = await client.sixprotocol.tokenmngr.mintperm({
      token: TOKEN_NAME,
      address: ADDRESS,
    });

    console.log("Mint Permission Details:");
    console.log("========================");
    console.log(`Token: ${response.mintperm.token}`);
    console.log(`Address: ${response.mintperm.address}`);
    console.log(`Creator: ${response.mintperm.creator || "N/A"}`);

    console.log("\nRaw Response:");
    console.log(JSON.stringify(response.mintperm, null, 2));

    return true;
  } catch (error) {
    console.error(`Error querying mint permission: ${error}`);
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
