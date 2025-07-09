import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/authz/query/grants.ts fivenet || yarn ts-node ./scripts/authz/query/grants.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  const granter = "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq";
  const grantee = "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp";

  try {
    // Query grants by granter and grantee
    const grants = await queryClient.cosmos.authz.v1beta1.grants({
      granter: granter,
      grantee: grantee,
      msgTypeUrl: "",
    });

    console.log("Grants:", grants);

    // Query grants by granter
    const granterGrants = await queryClient.cosmos.authz.v1beta1.granterGrants({
      granter: granter,
    });

    console.log("Granter grants:", granterGrants);

    // Query grants by grantee
    const granteeGrants = await queryClient.cosmos.authz.v1beta1.granteeGrants({
      grantee: grantee,
    });

    console.log("Grantee grants:", granteeGrants);
  } catch (error) {
    console.error("Error querying grants:", error);
  }
};

main()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
