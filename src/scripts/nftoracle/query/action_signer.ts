import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const ACTOR_ADDRESS = process.argv[3];
  const OWNER_ADDRESS = process.argv[4];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!ACTOR_ADDRESS) {
    throw new Error(
      "Actor Address not specified. Please provide an actor address as the second argument."
    );
  }

  if (!OWNER_ADDRESS) {
    throw new Error(
      "Owner Address not specified. Please provide an owner address as the third argument."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Oracle Action Signer Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Actor Address: ${ACTOR_ADDRESS}`);
  console.log(`Owner Address: ${OWNER_ADDRESS}`);

  try {
    // Query specific action signer
    const actionSigner = await queryClient.sixprotocol.nftoracle.actionSigner({
      actorAddress: ACTOR_ADDRESS,
      ownerAddress: OWNER_ADDRESS,
    });

    console.log(`\n=== Action Signer Details ===`);
    if (actionSigner.actionSigner) {
      const signer = actionSigner.actionSigner;
      console.log("Actor Address:", signer.actorAddress);
      console.log("Owner Address:", signer.ownerAddress);
      console.log("Required Confirmation:", signer.requiredConfirmation?.toString());
      console.log("Creation Block Height:", signer.creationBlockHeight?.toString());
      console.log("Expire At:", signer.expireAt);
      console.log("Creator:", signer.creator);

      if (signer.chainConfigs && signer.chainConfigs.length > 0) {
        console.log("\n=== Chain Configurations ===");
        signer.chainConfigs.forEach((chainConfig, index) => {
          console.log(`Chain Config ${index + 1}:`);
          console.log("  Chain:", chainConfig.chain);
          console.log("  Contract Address:", chainConfig.contractAddress);
          console.log("  Contract Name:", chainConfig.contractName);
          console.log("  Contract Owner:", chainConfig.contractOwner);
          console.log("  RPC Endpoint:", chainConfig.rpcEndpoint);
        });
      } else {
        console.log("\nNo chain configurations found");
      }

      if (signer.bindedSigners && signer.bindedSigners.length > 0) {
        console.log("\n=== Binded Signers ===");
        signer.bindedSigners.forEach((bindedSigner, index) => {
          console.log(`Binded Signer ${index + 1}:`);
          console.log("  Signer Address:", bindedSigner.signerAddress);
          console.log("  Owner Address:", bindedSigner.ownerAddress);
          console.log("  Expire At:", bindedSigner.expireAt);
        });
      } else {
        console.log("\nNo binded signers found");
      }
    } else {
      console.log("Action signer not found");
    }
  } catch (error: any) {
    console.error("Error querying action signer:", error.message || error);
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
