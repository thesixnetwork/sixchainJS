import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const delegatorAddr =
    process.argv[3] || "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq";

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/vesting/query/vesting-account.ts fivenet [delegatorAddr] || yarn ts-node ./scripts/vesting/query/vesting-account.ts fivenet [delegatorAddr]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Vesting Account Query ===`);
  console.log(`Address: ${delegatorAddr}`);

  try {
    console.log("Note: Vesting queries may use auth module account queries");

    // Query account to check if it's a vesting account
    const account = await queryClient.cosmos.auth.v1beta1.account({
      address: delegatorAddr,
    });

    console.log(`\n=== Account Information ===`);
    if (account.account && "$typeUrl" in account.account) {
      console.log("Account Type:", account.account.$typeUrl);
      console.log("Account Data:", JSON.stringify(account.account, null, 2));

      // Check if it's a vesting account type
      if (account.account.$typeUrl.includes("vesting")) {
        console.log("\nThis is a vesting account!");
      } else {
        console.log("\nThis is not a vesting account.");
      }
    } else {
      console.log("Account not found or invalid format");
    }

    // Note: Specific vesting queries may not be available in all SDK versions
    console.log(
      "\nNote: For detailed vesting information, check the account type and data above."
    );
  } catch (error) {
    console.error("Error querying vesting account:", error);
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
