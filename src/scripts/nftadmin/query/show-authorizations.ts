import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const ADDRESS = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/nftadmin/query/show-authorizations.ts fivenet [address] || yarn ts-node ./scripts/nftadmin/query/show-authorizations.ts fivenet [address]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== NFT Admin Authorizations Query ===`);

  try {
    if (ADDRESS) {
      // Query specific address authorizations
      const authorizations =
        await queryClient.sixprotocol.nftadmin.authorization({
          address: ADDRESS,
        });

      console.log(`\n=== Authorizations for ${ADDRESS} ===`);
      if (authorizations.authorization) {
        console.log(
          "Authorization:",
          JSON.stringify(authorizations.authorization, null, 2)
        );
      } else {
        console.log("No authorization found for this address");
      }
    } else {
      // Query all authorizations
      const allAuthorizations =
        await queryClient.sixprotocol.nftadmin.authorization({});

      console.log(`\n=== All NFT Admin Authorizations ===`);
      if (
        allAuthorizations.authorization &&
        allAuthorizations.authorization.permissions.length > 0
      ) {
        allAuthorizations.authorization.permissions.forEach(
          (auth: any, index: any) => {
            console.log(
              `Authorization ${index + 1}:`,
              JSON.stringify(auth, null, 2)
            );
          }
        );
      } else {
        console.log("No authorizations found");
      }
    }
  } catch (error) {
    console.error("Error querying nftadmin authorizations:", error);
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
