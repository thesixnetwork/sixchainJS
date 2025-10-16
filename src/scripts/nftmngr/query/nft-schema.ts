import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const nftSchemaCode = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/nftmngr/query/nft-schema.ts fivenet [nftSchemaCode] || yarn ts-node ./scripts/nftmngr/query/nft-schema.ts fivenet [nftSchemaCode]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Schema Query ===`);
  if (nftSchemaCode) {
    console.log(`Schema Code: ${nftSchemaCode}`);
  }

  try {
    if (nftSchemaCode) {
      // Query specific NFT schema
      const nftSchema = await queryClient.sixprotocol.nftmngr.nFTSchema({
        code: nftSchemaCode,
      });

      console.log(`\n=== NFT Schema: ${nftSchemaCode} ===`);
      if (nftSchema.nFTSchema) {
        console.log("Code:", nftSchema.nFTSchema.code);
        console.log("Name:", nftSchema.nFTSchema.name);
        console.log("Owner:", nftSchema.nFTSchema.owner);
        console.log("Description:", nftSchema.nFTSchema.description);
        console.log("Origin Data:", nftSchema.nFTSchema.originData);
        console.log("Onchain Data:", nftSchema.nFTSchema.onchainData);
        console.log("Is Verified:", nftSchema.nFTSchema.isVerified);
        console.log(
          "Mint Authorization:",
          nftSchema.nFTSchema.mintAuthorization
        );
      } else {
        console.log("No NFT schema found");
      }
    }

    // Query all NFT schemas
    const allSchemas = await queryClient.sixprotocol.nftmngr.nFTSchemaAll({
      pagination: {
        limit: Long.fromNumber(10),
        offset: Long.fromNumber(0),
        key: new Uint8Array(),
        countTotal: false,
        reverse: false,
      },
    });

    console.log(`\n=== All NFT Schemas (First 10) ===`);
    if (allSchemas.nFTSchema && allSchemas.nFTSchema.length > 0) {
      allSchemas.nFTSchema.forEach((schema, index) => {
        console.log(`\nSchema ${index + 1}:`);
        console.log("  Code:", schema.code);
        console.log("  Name:", schema.name);
        console.log("  Owner:", schema.owner);
        console.log("  Is Verified:", schema.isVerified);
      });
      console.log(`\nShowing ${allSchemas.nFTSchema.length} schemas`);
    } else {
      console.log("No NFT schemas found");
    }

    // Get pagination info
    if (allSchemas.pagination) {
      console.log(`\n=== Pagination ===`);
      console.log("Total:", allSchemas.pagination.total?.toString());
      console.log("Next Key:", allSchemas.pagination.nextKey);
    }
  } catch (error) {
    console.error("Error querying NFT schema:", error);
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
