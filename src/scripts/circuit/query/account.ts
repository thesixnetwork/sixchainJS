import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/circuit/query/account.ts fivenet || yarn ts-node ./scripts/circuit/query/account.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  try {
    const accountAddress = "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq";

    // Query account permissions
    const account = await queryClient.cosmos.circuit.v1.account({
      address: accountAddress,
    });

    console.log("Account permissions:", account);

    // Query all accounts with circuit breaker permissions
    const accounts = await queryClient.cosmos.circuit.v1.accounts({});

    console.log("All accounts with permissions:", accounts);

    // Query disabled list
    const disabledList = await queryClient.cosmos.circuit.v1.disabledList({});

    console.log("Disabled message types:", disabledList);
  } catch (error) {
    console.error("Error querying circuit:", error);
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
