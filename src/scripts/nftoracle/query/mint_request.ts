import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const MINT_REQUEST_ID = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!MINT_REQUEST_ID) {
    throw new Error(
      "Mint Request ID not specified. Please provide a mint request ID as the second argument."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Oracle Mint Request Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Mint Request ID: ${MINT_REQUEST_ID}`);

  try {
    // Query specific mint request
    const mintRequest = await queryClient.sixprotocol.nftoracle.mintRequest({
      id: parseInt(MINT_REQUEST_ID),
    });

    console.log(`\n=== Mint Request Details ===`);
    if (mintRequest.mintRequest) {
      console.log("ID:", mintRequest.mintRequest.id?.toString());
      console.log("NFT Schema Code:", mintRequest.mintRequest.nftSchemaCode);
      console.log("Token ID:", mintRequest.mintRequest.tokenId);
      console.log("Required Confirm:", mintRequest.mintRequest.requiredConfirm?.toString());
      console.log("Current Confirm:", mintRequest.mintRequest.currentConfirm?.toString());
      console.log("Status:", mintRequest.mintRequest.status);
      console.log("Creator:", mintRequest.mintRequest.creator);

      if (mintRequest.mintRequest.responses && mintRequest.mintRequest.responses.length > 0) {
        console.log("\n=== Responses ===");
        mintRequest.mintRequest.responses.forEach((response, index) => {
          console.log(`Response ${index + 1}:`);
          console.log("  Signer:", response.signer);
          console.log("  Status:", response.status);
          console.log("  Base64 NFT Data:", response.base64NftData || "N/A");
        });
      } else {
        console.log("\nNo responses found");
      }
    } else {
      console.log("Mint request not found");
    }
  } catch (error: any) {
    console.error("Error querying mint request:", error.message || error);
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
