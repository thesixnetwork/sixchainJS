import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const PAGE_LIMIT = process.argv[3] || "10";
  const PAGE_OFFSET = process.argv[4] || "0";

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

  console.log("Querying all mint permissions...");

  try {
    const response = await client.sixprotocol.tokenmngr.mintpermAll({
      // pagination: {
      //   limit: BigInt(PAGE_LIMIT),
      //   offset: BigInt(PAGE_OFFSET),
      //   key: new Uint8Array(),
      //   countTotal: true,
      //   reverse: false,
      // },
    });

    console.log("Mint Permissions List:");
    console.log("======================");

    if (response.mintperm.length === 0) {
      console.log("No mint permissions found.");
    } else {
      response.mintperm.forEach((mintperm, index) => {
        console.log(`\n${index + 1}. Token: ${mintperm.token}`);
        console.log(`   Address: ${mintperm.address}`);
        console.log(`   Creator: ${mintperm.creator || "N/A"}`);
      });

      if (response.pagination) {
        console.log("\nPagination Info:");
        console.log(`Total: ${response.pagination.total || "N/A"}`);
        console.log(`Current offset: ${PAGE_OFFSET}`);
        console.log(`Limit: ${PAGE_LIMIT}`);

        const total = Number(response.pagination.total || 0);
        const currentOffset = Number(PAGE_OFFSET);
        const limit = Number(PAGE_LIMIT);

        if (currentOffset + limit < total) {
          console.log(
            `\nTo see more mint permissions, run with offset: ${currentOffset + limit}`
          );
        }
      }
    }

    console.log("\nRaw Response:");
    console.log(JSON.stringify(response, null, 2));

    return true;
  } catch (error) {
    console.error(`Error querying mint permissions: ${error}`);
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
