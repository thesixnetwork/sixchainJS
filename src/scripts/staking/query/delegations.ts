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
      "INPUT NETWORK BY RUNNING: bun run ./scripts/staking/query/delegations.ts fivenet [delegatorAddr] || yarn ts-node ./scripts/staking/query/delegations.ts fivenet [delegatorAddr]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Delegations Query ===`);
  console.log(`Delegator Address: ${delegatorAddr}`);

  try {
    // Query delegator delegations
    const delegations =
      await queryClient.cosmos.staking.v1beta1.delegatorDelegations({
        delegatorAddr: delegatorAddr,
      });

    console.log(`\n=== Delegator Delegations ===`);
    if (
      delegations.delegationResponses &&
      delegations.delegationResponses.length > 0
    ) {
      let totalDelegated = 0;

      delegations.delegationResponses.forEach((delegation, index) => {
        console.log(`\nDelegation ${index + 1}:`);
        console.log(
          "  Validator Address:",
          delegation.delegation?.validatorAddress
        );
        console.log(
          "  Delegator Address:",
          delegation.delegation?.delegatorAddress
        );
        console.log("  Shares:", delegation.delegation?.shares);
        console.log("  Balance:", delegation.balance);

        if (delegation.balance?.amount) {
          totalDelegated += parseInt(delegation.balance.amount);
        }
      });

      console.log(
        `\nTotal Delegations: ${delegations.delegationResponses.length}`
      );
      if (totalDelegated > 0) {
        console.log(
          `Total Delegated Amount: ${totalDelegated.toLocaleString()} usix`
        );
        console.log(
          `Total Delegated Amount: ${(totalDelegated / 1_000_000).toFixed(6)} SIX`
        );
      }
    } else {
      console.log("No delegations found for this delegator");
    }

    // Query unbonding delegations
    const unbondingDelegations =
      await queryClient.cosmos.staking.v1beta1.delegatorUnbondingDelegations({
        delegatorAddr: delegatorAddr,
      });

    console.log(`\n=== Unbonding Delegations ===`);
    if (
      unbondingDelegations.unbondingResponses &&
      unbondingDelegations.unbondingResponses.length > 0
    ) {
      unbondingDelegations.unbondingResponses.forEach((unbonding, index) => {
        console.log(`\nUnbonding ${index + 1}:`);
        console.log("  Validator Address:", unbonding.validatorAddress);
        console.log("  Delegator Address:", unbonding.delegatorAddress);
        console.log("  Entries:", unbonding.entries);
      });
    } else {
      console.log("No unbonding delegations found");
    }

    // Query redelegations
    const redelegations =
      await queryClient.cosmos.staking.v1beta1.redelegations({
        delegatorAddr: delegatorAddr,
        srcValidatorAddr: "",
        dstValidatorAddr: "",
      });

    console.log(`\n=== Redelegations ===`);
    if (
      redelegations.redelegationResponses &&
      redelegations.redelegationResponses.length > 0
    ) {
      redelegations.redelegationResponses.forEach((redelegation, index) => {
        console.log(`\nRedelegation ${index + 1}:`);
        console.log(
          "  Source Validator:",
          redelegation.redelegation?.validatorSrcAddress
        );
        console.log(
          "  Destination Validator:",
          redelegation.redelegation?.validatorDstAddress
        );
        console.log(
          "  Delegator Address:",
          redelegation.redelegation?.delegatorAddress
        );
        console.log("  Entries:", redelegation.entries);
      });
    } else {
      console.log("No redelegations found");
    }

    // Get pagination info
    if (delegations.pagination) {
      console.log(`\n=== Pagination ===`);
      console.log("Total:", delegations.pagination.total?.toString());
      console.log("Next Key:", delegations.pagination.nextKey);
    }
  } catch (error) {
    console.error("Error querying delegations:", error);
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
