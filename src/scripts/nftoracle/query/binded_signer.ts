import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const OWNER_ADDRESS = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!OWNER_ADDRESS) {
    throw new Error(
      "Owner Address not specified. Please provide an owner address as the second argument."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Oracle Binded Signer Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Owner Address: ${OWNER_ADDRESS}`);

  try {
    // Query specific binded signer
    const bindedSigner = await queryClient.sixprotocol.nftoracle.bindedSigner({
      ownerAddress: OWNER_ADDRESS,
    });

    console.log(`\n=== Binded Signer Details ===`);
    if (bindedSigner.bindedSigner) {
      const signer = bindedSigner.bindedSigner;
      console.log("Owner Address:", signer.ownerAddress);
      console.log("Signer Address:", signer.signerAddress);
      console.log("Expire At:", signer.expireAt);
      console.log("Creation Block Height:", signer.creationBlockHeight?.toString());
      console.log("Creator:", signer.creator);

      // Display additional signer fields if they exist
      if (signer.params) {
        console.log("\n=== Additional Parameters ===");
        console.log(JSON.stringify(signer.params, null, 2));
      }
    } else {
      console.log("Binded signer not found for this owner address");
    }
  } catch (error: any) {
    console.error("Error querying binded signer:", error.message || error);
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
