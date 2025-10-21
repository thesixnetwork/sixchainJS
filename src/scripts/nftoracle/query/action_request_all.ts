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

  console.log(`=== NFT Oracle All Action Requests Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Limit: ${LIMIT}`);

  try {
    // Query all action requests
    const actionRequests = await queryClient.sixprotocol.nftoracle.actionRequestAll({
      pagination: {
        limit: parseInt(LIMIT),
        offset: 0,
        key: new Uint8Array(),
        countTotal: true,
        reverse: false,
      },
    });

    console.log(`\n=== All Action Requests ===`);
    if (actionRequests.actionOracleRequest && actionRequests.actionOracleRequest.length > 0) {
      console.log(`Total found: ${actionRequests.pagination?.total?.toString() || "Unknown"}`);
      console.log(`Showing: ${actionRequests.actionOracleRequest.length} requests\n`);

      actionRequests.actionOracleRequest.forEach((request, index) => {
        console.log(`--- Action Request ${index + 1} ---`);
        console.log("ID:", request.id?.toString());
        console.log("VM:", request.vm);
        console.log("Base64 Action Signature:", request.base64ActionSignature?.substring(0, 50) + "...");
        console.log("Required Confirm:", request.requiredConfirm?.toString());
        console.log("Current Confirm:", request.currentConfirm?.toString());
        console.log("Status:", request.status);
        console.log("Creator:", request.creator);

        if (request.params && request.params.length > 0) {
          console.log("Parameters:", request.params.length);
        } else {
          console.log("Parameters: 0");
        }

        if (request.responses && request.responses.length > 0) {
          console.log("Responses:", request.responses.length);
        } else {
          console.log("Responses: 0");
        }
        console.log("");
      });

      if (actionRequests.pagination?.nextKey && actionRequests.pagination.nextKey.length > 0) {
        console.log("More results available. Use pagination to fetch more.");
      }
    } else {
      console.log("No action requests found");
    }
  } catch (error: any) {
    console.error("Error querying all action requests:", error.message || error);
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
