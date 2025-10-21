import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const COLLECTION_OWNER_REQUEST_ID = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!COLLECTION_OWNER_REQUEST_ID) {
    throw new Error(
      "Collection Owner Request ID not specified. Please provide a collection owner request ID as the second argument."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Oracle Collection Owner Request Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Collection Owner Request ID: ${COLLECTION_OWNER_REQUEST_ID}`);

  try {
    // Query specific collection owner request
    const collectionOwnerRequest = await queryClient.sixprotocol.nftoracle.collectionOwnerRequest({
      id: parseInt(COLLECTION_OWNER_REQUEST_ID),
    });

    console.log(`\n=== Collection Owner Request Details ===`);
    if (collectionOwnerRequest.collectionOwnerRequest) {
      const request = collectionOwnerRequest.collectionOwnerRequest;
      console.log("ID:", request.id?.toString());
      console.log("NFT Schema Code:", request.nftSchemaCode);
      console.log("Requestor:", request.requestor);
      console.log("Required Confirm:", request.requiredConfirm?.toString());
      console.log("Current Confirm:", request.currentConfirm?.toString());
      console.log("Status:", request.status);
      console.log("Base64 Verify Requestor Signature:", request.base64VerifyRequestorSignature);

      if (request.signatures && request.signatures.length > 0) {
        console.log("\n=== Signatures ===");
        request.signatures.forEach((signature, index) => {
          console.log(`Signature ${index + 1}:`);
          console.log("  Signer:", signature.signer);
          console.log("  Valid:", signature.valid);
          console.log("  Base64 Origin Contract Info:", signature.base64OriginContractInfo || "N/A");
        });
      } else {
        console.log("\nNo signatures found");
      }
    } else {
      console.log("Collection owner request not found");
    }
  } catch (error: any) {
    console.error("Error querying collection owner request:", error.message || error);
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
