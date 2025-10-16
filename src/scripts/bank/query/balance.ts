import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const address = process.argv[3];
  const denom = process.argv[4] || "usix";

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/bank/query/balance.ts fivenet [address] [denom]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  // Use provided address or default
  const queryAddress = address || "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq";

  console.log(`=== Balance Query ===`);
  console.log(`Address: ${queryAddress}`);
  console.log(`Denom: ${denom}`);

  try {
    const balance = await queryClient.cosmos.bank.v1beta1.balance({
      address: queryAddress,
      denom: denom,
    });

    if (balance.balance) {
      const amount = balance.balance.amount || "0";
      console.log(`\nBalance: ${amount} ${denom}`);

      // Convert usix to SIX for display
      if (denom === "usix") {
        const sixAmount = (parseInt(amount) / 1_000_000).toFixed(6);
        console.log(`Converted: ${sixAmount} SIX`);
      }
    } else {
      console.log(`\nNo balance found for denom: ${denom}`);
    }
  } catch (error) {
    console.error("Error querying balance:", error);
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
