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

  console.log(`=== NFT Oracle All Action Signer Configs Query ===`);
  console.log(`Network: ${NETWORK}`);
  console.log(`Limit: ${LIMIT}`);

  try {
    // Query all action signer configs
    const actionSignerConfigs = await queryClient.sixprotocol.nftoracle.actionSignerConfigAll({
      pagination: {
        limit: parseInt(LIMIT),
        offset: 0,
        key: new Uint8Array(),
        countTotal: true,
        reverse: false,
      },
    });

    console.log(`\n=== All Action Signer Configs ===`);
    if (actionSignerConfigs.actionSignerConfig && actionSignerConfigs.actionSignerConfig.length > 0) {
      console.log(`Total found: ${actionSignerConfigs.pagination?.total?.toString() || "Unknown"}`);
      console.log(`Showing: ${actionSignerConfigs.actionSignerConfig.length} configs\n`);

      actionSignerConfigs.actionSignerConfig.forEach((config, index) => {
        console.log(`--- Action Signer Config ${index + 1} ---`);
        console.log("Chain:", config.chain);
        console.log("RPC Endpoint:", config.rpcEndpoint);
        console.log("Contract Address:", config.contractAddress);
        console.log("Contract Name:", config.contractName);
        console.log("Contract Owner:", config.contractOwner);
        console.log("Creator:", config.creator);
        console.log("");
      });

      if (actionSignerConfigs.pagination?.nextKey && actionSignerConfigs.pagination.nextKey.length > 0) {
        console.log("More results available. Use pagination to fetch more.");
      }
    } else {
      console.log("No action signer configs found");
    }
  } catch (error: any) {
    console.error("Error querying all action signer configs:", error.message || error);
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
