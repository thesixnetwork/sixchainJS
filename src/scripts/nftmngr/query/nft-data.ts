import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const nftSchemaCode = process.argv[3] || "example.schema";
  const tokenId = process.argv[4] || "1";

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/nftmngr/query/nft-data.ts fivenet [nftSchemaCode] [tokenId] || yarn ts-node ./scripts/nftmngr/query/nft-data.ts fivenet [nftSchemaCode] [tokenId]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Data Query ===`);
  console.log(`Schema Code: ${nftSchemaCode}`);
  console.log(`Token ID: ${tokenId}`);

  try {
    // Query specific NFT data
    const nftData = await queryClient.sixprotocol.nftmngr.nftData({
      nftSchemaCode: nftSchemaCode,
      tokenId: tokenId,
      withGlobal: true,
    });

    console.log(`\n=== NFT Data ===`);
    if (nftData.nftData) {
      console.log("NFT Schema Code:", nftData.nftData.nftSchemaCode);
      console.log("Token ID:", nftData.nftData.tokenId);
      console.log("Token Owner:", nftData.nftData.tokenOwner);
      console.log("Origin Image:", nftData.nftData.originImage);
      console.log("Origin Attributes:", nftData.nftData.originAttributes);
      console.log("On Chain Attributes:", nftData.nftData.onchainAttributes);
      console.log("Token URI:", nftData.nftData.tokenUri);
    } else {
      console.log("No NFT data found");
    }

    // Query all NFT data (with pagination)
    const allNftData = await queryClient.sixprotocol.nftmngr.nftDataAll({
      withGlobal: true,
      pagination: {
        limit: Long.fromNumber(10),
        offset: Long.fromNumber(0),
        key: new Uint8Array(),
        countTotal: false,
        reverse: false,
      },
    });

    console.log(`\n=== All NFT Data (First 10) ===`);
    if (allNftData.nftData && allNftData.nftData.length > 0) {
      allNftData.nftData.forEach((nft, index) => {
        console.log(`\nNFT ${index + 1}:`);
        console.log("  Schema Code:", nft.nftSchemaCode);
        console.log("  Token ID:", nft.tokenId);
        console.log("  Owner:", nft.tokenOwner);
      });
      console.log(`\nShowing ${allNftData.nftData.length} NFTs`);
    } else {
      console.log("No NFT data found");
    }

    // Get pagination info
    if (allNftData.pagination) {
      console.log(`\n=== Pagination ===`);
      console.log("Total:", allNftData.pagination.total?.toString());
      console.log("Next Key:", allNftData.pagination.nextKey);
    }
  } catch (error) {
    console.error("Error querying NFT data:", error);
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
