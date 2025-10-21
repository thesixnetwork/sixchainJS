import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const SYNC_ACTION_SIGNER_ID = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!SYNC_ACTION_SIGNER_ID) {
    throw new Error(
      "Sync Action Signer ID not specified. Please provide a sync action signer ID as the second argument."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Oracle Sync Action Signer Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Sync Action Signer ID: ${SYNC_ACTION_SIGNER_ID}`);

  try {
    // Query specific sync action signer
    const syncActionSigner = await queryClient.sixprotocol.nftoracle.syncActionSigner({
      id: parseInt(SYNC_ACTION_SIGNER_ID),
    });

    console.log(`\n=== Sync Action Signer Details ===`);
    if (syncActionSigner.syncActionSigner) {
      const signer = syncActionSigner.syncActionSigner;
      console.log("ID:", signer.id?.toString());
      console.log("Chain:", signer.chain);
      console.log("Actor Address:", signer.actorAddress);
      console.log("Owner Address:", signer.ownerAddress);
      console.log("Required Confirm:", signer.requiredConfirm?.toString());
      console.log("Current Confirm:", signer.currentConfirm?.toString());
      console.log("Status:", signer.status);
      console.log("Creator:", signer.creator);
      console.log("Expire Epoch:", signer.expireEpoch);

      if (signer.signatures && signer.signatures.length > 0) {
        console.log("\n=== Signatures ===");
        signer.signatures.forEach((signature, index) => {
          console.log(`Signature ${index + 1}:`);
          console.log("  Signer:", signature.signer);
          console.log("  Valid:", signature.valid);
          console.log("  Actor Address:", signature.actorAddress);
          console.log("  Owner Address:", signature.ownerAddress);
          console.log("  Expire Epoch:", signature.expireEpoch);
        });
      } else {
        console.log("\nNo signatures found");
      }
    } else {
      console.log("Sync action signer not found");
    }
  } catch (error: any) {
    console.error("Error querying sync action signer:", error.message || error);
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
