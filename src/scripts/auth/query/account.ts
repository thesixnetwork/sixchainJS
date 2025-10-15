import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";
import Long from "long";

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

  const alice_address = "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq";

  try {
    // Query account details
    const account = await queryClient.cosmos.auth.v1beta1.account({
      address: alice_address,
    });

    console.log("=== Account Details ===");
    if (account.account && '$typeUrl' in account.account) {
      console.log("Type:", account.account.$typeUrl);
      // Cast to any to access properties safely
      const acc = account.account as any;
      console.log("Address:", acc.address);
      console.log("Account Number:", acc.accountNumber?.toString());
      console.log("Sequence:", acc.sequence?.toString());
    }

    // Query account info
    const account_info = await queryClient.cosmos.auth.v1beta1.accountInfo({
      address: alice_address,
    });

    console.log("\n=== Account Info ===");
    if (account_info.info) {
      const info = account_info.info as any;
      console.log("Address:", info.address);
      console.log("Account Number:", info.accountNumber?.toString());
      console.log("Sequence:", info.sequence?.toString());
    }

    // Convert address string to bytes
    const address_string_to_bytes =
      await queryClient.cosmos.auth.v1beta1.addressStringToBytes({
        addressString: alice_address,
      });

    console.log("\n=== Address Conversion ===");
    console.log("Original Address:", alice_address);
    console.log("Address Bytes Length:", address_string_to_bytes.addressBytes?.length);

    // Convert address bytes back to string
    const address_byte_to_string =
      await queryClient.cosmos.auth.v1beta1.addressBytesToString({
        addressBytes: address_string_to_bytes.addressBytes,
      });

    console.log("Converted Back:", address_byte_to_string.addressString);

    // Query all accounts
    const all_accounts = await queryClient.cosmos.auth.v1beta1.accounts({});
    console.log("\n=== System Info ===");
    console.log("Total Accounts:", all_accounts.accounts?.length || 0);

    // Query auth module parameters
    const auth_params = await queryClient.cosmos.auth.v1beta1.params({});
    console.log("Max Memo Characters:", auth_params.params?.maxMemoCharacters?.toString());
    console.log("Tx Sig Limit:", auth_params.params?.txSigLimit?.toString());
    console.log("Tx Size Cost Per Byte:", auth_params.params?.txSizeCostPerByte?.toString());

    // Query auth module account by type (if available)
    const module_accounts = await queryClient.cosmos.auth.v1beta1.moduleAccounts({});
    console.log("Module Accounts Count:", module_accounts.accounts?.length || 0);
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
