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

  console.log(`=== NFT Oracle All Action Signers Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Limit: ${LIMIT}`);

  try {
    // Query all action signers
    const actionSigners = await queryClient.sixprotocol.nftoracle.actionSignerAll({
      pagination: {
        limit: parseInt(LIMIT),
        offset: 0,
        key: new Uint8Array(),
        countTotal: true,
        reverse: false,
      },
    });

    console.log(`\n=== All Action Signers ===`);
    if (actionSigners.actionSigner && actionSigners.actionSigner.length > 0) {
      console.log(`Total found: ${actionSigners.pagination?.total?.toString() || "Unknown"}`);
      console.log(`Showing: ${actionSigners.actionSigner.length} signers\n`);

      actionSigners.actionSigner.forEach((signer, index) => {
        console.log(`--- Action Signer ${index + 1} ---`);
        console.log("Actor Address:", signer.actorAddress);
        console.log("Owner Address:", signer.ownerAddress);
        console.log("Required Confirmation:", signer.requiredConfirmation?.toString());
        console.log("Creation Block Height:", signer.creationBlockHeight?.toString());
        console.log("Expire At:", signer.expireAt);
        console.log("Creator:", signer.creator);

        if (signer.chainConfigs && signer.chainConfigs.length > 0) {
          console.log("Chain Configs:", signer.chainConfigs.length);
        } else {
          console.log("Chain Configs: 0");
        }

        if (signer.bindedSigners && signer.bindedSigners.length > 0) {
          console.log("Binded Signers:", signer.bindedSigners.length);
        } else {
          console.log("Binded Signers: 0");
        }
        console.log("");
      });

      if (actionSigners.pagination?.nextKey && actionSigners.pagination.nextKey.length > 0) {
        console.log("More results available. Use pagination to fetch more.");
      }
    } else {
      console.log("No action signers found");
    }
  } catch (error: any) {
    console.error("Error querying all action signers:", error.message || error);
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
