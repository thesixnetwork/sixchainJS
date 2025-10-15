import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/feegrant/query/allowance.ts fivenet || yarn ts-node ./scripts/feegrant/query/allowance.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  try {
    const granter = "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq";
    const grantee = "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp";

    // Query specific allowance
    const allowance = await queryClient.cosmos.feegrant.v1beta1.allowance({
      granter: granter,
      grantee: grantee,
    });

    console.log("Allowance:", allowance);

    // Query allowances by granter
    const allowancesByGranter =
      await queryClient.cosmos.feegrant.v1beta1.allowancesByGranter({
        granter: granter,
      });

    console.log("Allowances by granter:", allowancesByGranter);

    // Query allowances for a specific grantee
    const allowancesForGrantee =
      await queryClient.cosmos.feegrant.v1beta1.allowances({
        grantee: grantee,
      });

    console.log("Allowances for grantee:", allowancesForGrantee);
  } catch (error) {
    console.error("Error querying feegrant:", error);
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
