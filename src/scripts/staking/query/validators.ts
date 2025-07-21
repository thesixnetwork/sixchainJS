import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/staking/query/validators.ts fivenet || yarn ts-node ./scripts/staking/query/validators.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  try {
    // Query all validators
    const validators = await queryClient.cosmos.staking.v1beta1.validators({
      status: "BOND_STATUS_BONDED", // TODO: Can be "BOND_STATUS_UNBONDED", "BOND_STATUS_UNBONDING", or ""
    });

    console.log("Validators:", validators.validators);

    // Query specific validator
    const validatorAddr = "6xvaloper1myrlxmmasv6yq4axrxmdswj9kv5gc0pp2tkm4m";
    const validator = await queryClient.cosmos.staking.v1beta1.validator({
      validatorAddr: validatorAddr,
    });

    console.log("Validator:", validator.validator);

    // Query validator delegations
    const validatorDelegations =
      await queryClient.cosmos.staking.v1beta1.validatorDelegations({
        validatorAddr: validatorAddr,
      });

    console.log(
      "Validator delegations:",
      validatorDelegations.delegationResponses
    );

    // Query delegator delegations
    const delegatorAddr = "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq";
    const delegatorDelegations =
      await queryClient.cosmos.staking.v1beta1.delegatorDelegations({
        delegatorAddr: delegatorAddr,
      });

    console.log(
      "Delegator delegations:",
      delegatorDelegations.delegationResponses
    );

    /* 
    * Query staking params
    * const params = await queryClient.cosmos.staking.v1beta1.params({});
    * console.log("Staking params:", params.params);
    */

    // Query staking pool
    const pool = await queryClient.cosmos.staking.v1beta1.pool({});

    console.log("Staking pool:", pool.pool);
  } catch (error) {
    console.error("Error querying staking:", error);
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
