import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const LIMIT = process.argv[3] || "10";

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Oracle All Mint Requests Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Limit: ${LIMIT}`);

  try {
    // Query all mint requests
    const mintRequests = await queryClient.sixprotocol.nftoracle.mintRequestAll({
      pagination: {
        limit: parseInt(LIMIT),
        offset: 0,
        key: new Uint8Array(),
        countTotal: true,
        reverse: false,
      },
    });

    console.log(`\n=== All Mint Requests ===`);
    if (mintRequests.mintRequest && mintRequests.mintRequest.length > 0) {
      console.log(`Total found: ${mintRequests.pagination?.total?.toString() || "Unknown"}`);
      console.log(`Showing: ${mintRequests.mintRequest.length} requests\n`);

      mintRequests.mintRequest.forEach((request, index) => {
        console.log(`--- Mint Request ${index + 1} ---`);
        console.log("ID:", request.id?.toString());
        console.log("NFT Schema Code:", request.nftSchemaCode);
        console.log("Token ID:", request.tokenId);
        console.log("Required Confirm:", request.requiredConfirm?.toString());
        console.log("Current Confirm:", request.currentConfirm?.toString());
        console.log("Status:", request.status);
        console.log("Creator:", request.creator);

        if (request.responses && request.responses.length > 0) {
          console.log("Responses:", request.responses.length);
        } else {
          console.log("Responses: 0");
        }
        console.log("");
      });

      if (mintRequests.pagination?.nextKey && mintRequests.pagination.nextKey.length > 0) {
        console.log("More results available. Use pagination to fetch more.");
      }
    } else {
      console.log("No mint requests found");
    }
  } catch (error: any) {
    console.error("Error querying all mint requests:", error.message || error);
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
