import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const address = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/bank/query/balances.ts fivenet [address]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  // Use provided address or default
  const queryAddress = address || "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq";

  console.log(`=== All Balances for ${queryAddress} ===`);

  try {
    // Query all balances
    const balances = await queryClient.cosmos.bank.v1beta1.allBalances({
      address: queryAddress,
      resolveDenom: true,
    });

    if (balances.balances && balances.balances.length > 0) {
      console.log("Balances:");
      balances.balances.forEach((balance, index) => {
        const amount = balance.amount || "0";
        const denom = balance.denom || "";

        // Convert usix to SIX for display
        if (denom === "usix") {
          const sixAmount = (parseInt(amount) / 1_000_000).toString();
          console.log(`  ${index + 1}. ${sixAmount} SIX (${amount} usix)`);
        } else {
          console.log(`  ${index + 1}. ${amount} ${denom}`);
        }
      });

      console.log(`\nTotal different denoms: ${balances.balances.length}`);
    } else {
      console.log("No balances found for this address");
    }

    // Also get pagination info if available
    if (balances.pagination) {
      console.log(`\nPagination:`);
      console.log(`  Next Key: ${balances.pagination.nextKey || "N/A"}`);
      console.log(`  Total: ${balances.pagination.total?.toString() || "N/A"}`);
    }
  } catch (error) {
    console.error("Error querying balances:", error);
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
