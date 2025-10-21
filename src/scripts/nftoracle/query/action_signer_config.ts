import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const CHAIN = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!CHAIN) {
    throw new Error(
      "Chain not specified. Please provide a chain as the second argument."
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Oracle Action Signer Config Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Chain: ${CHAIN}`);

  try {
    // Query specific action signer config
    const actionSignerConfig = await queryClient.sixprotocol.nftoracle.actionSignerConfig({
      chain: CHAIN,
    });

    console.log(`\n=== Action Signer Config Details ===`);
    if (actionSignerConfig.actionSignerConfig) {
      const config = actionSignerConfig.actionSignerConfig;
      console.log("Chain:", config.chain);
      console.log("RPC Endpoint:", config.rpcEndpoint);
      console.log("Contract Address:", config.contractAddress);
      console.log("Contract Name:", config.contractName);
      console.log("Contract Owner:", config.contractOwner);
      console.log("Creator:", config.creator);

      // Display additional config fields if they exist
      if (config.params) {
        console.log("\n=== Additional Parameters ===");
        console.log(JSON.stringify(config.params, null, 2));
      }
    } else {
      console.log("Action signer config not found for this chain");
    }
  } catch (error: any) {
    console.error("Error querying action signer config:", error.message || error);
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
