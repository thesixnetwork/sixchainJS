import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const address = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/bank/query/spendable-balance.ts fivenet [address]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  // Use provided address or default
  const queryAddress = address || "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq";

  console.log(`=== Spendable Balances for ${queryAddress} ===`);

  try {
    // Query spendable balances (not locked/vested)
    const spendableBalances = await queryClient.cosmos.bank.v1beta1.spendableBalances({
      address: queryAddress,
    });

    if (spendableBalances.balances && spendableBalances.balances.length > 0) {
      console.log("Spendable Balances:");
      spendableBalances.balances.forEach((balance, index) => {
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
      
      console.log(`\nTotal spendable denoms: ${spendableBalances.balances.length}`);
    } else {
      console.log("No spendable balances found for this address");
    }

    // Also query spendable balance for a specific denom (usix)
    console.log("\n=== Spendable Balance for usix ===");
    const spendableBalance = await queryClient.cosmos.bank.v1beta1.spendableBalanceByDenom({
      address: queryAddress,
      denom: "usix",
    });

    if (spendableBalance.balance) {
      const amount = spendableBalance.balance.amount || "0";
      const sixAmount = (parseInt(amount) / 1_000_000).toFixed(6);
      console.log(`Spendable usix: ${amount}`);
      console.log(`Spendable SIX: ${sixAmount}`);
    } else {
      console.log("No spendable usix balance found");
    }

  } catch (error) {
    console.error("Error querying spendable balances:", error);
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
