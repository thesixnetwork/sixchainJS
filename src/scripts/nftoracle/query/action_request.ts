import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const ACTION_REQUEST_ID = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!ACTION_REQUEST_ID) {
    throw new Error(
      "Action Request ID not specified. Please provide an action request ID as the second argument."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Oracle Action Request Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Action Request ID: ${ACTION_REQUEST_ID}`);

  try {
    // Query specific action request
    const actionRequest = await queryClient.sixprotocol.nftoracle.actionOracleRequest({
      id: parseInt(ACTION_REQUEST_ID),
    });

    console.log(`\n=== Action Request Details ===`);
    if (actionRequest.actionOracleRequest) {
      const request = actionRequest.actionOracleRequest;
      console.log("ID:", request.id?.toString());
      console.log("VM:", request.vm);
      console.log("Base64 Action Signature:", request.base64ActionSignature);
      console.log("Required Confirm:", request.requiredConfirm?.toString());
      console.log("Current Confirm:", request.currentConfirm?.toString());
      console.log("Status:", request.status);
      console.log("Creator:", request.creator);

      if (request.params && request.params.length > 0) {
        console.log("\n=== Parameters ===");
        request.params.forEach((param, index) => {
          console.log(`Parameter ${index + 1}:`);
          console.log("  Name:", param.name);
          console.log("  Value:", param.value);
        });
      } else {
        console.log("\nNo parameters found");
      }

      if (request.responses && request.responses.length > 0) {
        console.log("\n=== Responses ===");
        request.responses.forEach((response, index) => {
          console.log(`Response ${index + 1}:`);
          console.log("  Signer:", response.signer);
          console.log("  Status:", response.status);
          console.log("  Base64 NFT Data:", response.base64NftData || "N/A");
        });
      } else {
        console.log("\nNo responses found");
      }
    } else {
      console.log("Action request not found");
    }
  } catch (error: any) {
    console.error("Error querying action request:", error.message || error);
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
