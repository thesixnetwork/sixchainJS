import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/vesting/query/account.ts fivenet || yarn ts-node ./scripts/vesting/query/account.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  try {
    // TODO: Replace with actual vesting account address
    const vestingAccountAddress = "6x1example_vesting_account_address";

    // Query account info (this will show if it's a vesting account)
    const accountInfo = await queryClient.cosmos.auth.v1beta1.account({
      address: vestingAccountAddress,
    });

    console.log("Account info:", accountInfo);

    // Query account balance
    const balance = await queryClient.cosmos.bank.v1beta1.balance({
      address: vestingAccountAddress,
      denom: "usix",
    });

    console.log("Account balance:", balance);

    // Query all balances
    const allBalances = await queryClient.cosmos.bank.v1beta1.allBalances({
      address: vestingAccountAddress,
      resolveDenom: false,
    });

    console.log("All balances:", allBalances);

    // Note: Vesting module doesn't have specific query endpoints
    // Vesting information is stored in the account type and can be accessed through auth module
    console.log(
      "Vesting details are available in the account type returned by auth module"
    );
  } catch (error) {
    console.error("Error querying vesting account:", error);
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
