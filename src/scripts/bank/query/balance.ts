import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();

const getTotalBalance = async () => {
  const NETOWRK = process.argv[2];

  if (!NETOWRK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/deploy.ts fivenet || yarn ts-node ./scripts/deploy.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETOWRK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });
  const balance = await queryClient.cosmos.bank.v1beta1.balance({
    address: "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq",
    denom: "usix",
  });

  console.log(balance.balance);
};

// create one metadata for test on production which is token_id = 2531
getTotalBalance()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
