import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";
import Long from "long";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/distribution/query/rewards.ts fivenet || yarn ts-node ./scripts/distribution/query/rewards.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  const delegatorAddress = "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp";
  const validatorsAddress = "6xvaloper13g50hqdqsjk85fmgqz2h5xdxq49lsmjdz3mr76";

  try {
    const communityPool =
      await queryClient.cosmos.distribution.v1beta1.communityPool();
    console.log("communityPool pool: ", communityPool.pool);

    // Query validator commission
    const validatorCommission =
      await queryClient.cosmos.distribution.v1beta1.validatorCommission({
        validatorAddress: validatorsAddress,
      });
    console.log("Validator commission:", validatorCommission.commission);

    const delegatorValidators =
      await queryClient.cosmos.distribution.v1beta1.delegatorValidators({
        delegatorAddress: delegatorAddress,
      });

    console.log("Delegator Validators:", delegatorValidators.validators);

    // Query delegation rewards
    const delegationRewards =
      await queryClient.cosmos.distribution.v1beta1.delegationRewards({
        delegatorAddress: delegatorAddress,
        validatorAddress: "6xvaloper13g50hqdqsjk85fmgqz2h5xdxq49lsmjdz3mr76",
      });

    console.log("Delegation rewards:", delegationRewards.rewards);

    // Query total delegation rewards
    const totalRewards =
      await queryClient.cosmos.distribution.v1beta1.delegationTotalRewards({
        delegatorAddress: delegatorAddress,
      });
    console.log("Total delegation rewards:", totalRewards);

    const validatorSlashes =
      await queryClient.cosmos.distribution.v1beta1.validatorSlashes({
        endingHeight: Long.fromNumber(10000),
        startingHeight: Long.fromNumber(1),
        validatorAddress: validatorsAddress,
      });
    console.log("Slash Validators:", validatorSlashes.slashes);

    // Query distribution params
    const params = await queryClient.cosmos.distribution.v1beta1.params({});
    console.log("Distribution params:", params.params);

    const validatorDistributionInfo =
      await queryClient.cosmos.distribution.v1beta1.validatorDistributionInfo({
        validatorAddress: validatorsAddress,
      });
    console.log(
      "Validator Info Commission :",
      validatorDistributionInfo.commission
    );
    console.log(
      "Validator Info OperatorAddress :",
      validatorDistributionInfo.operatorAddress
    );
    console.log(
      "Validator Info SelfBondReward :",
      validatorDistributionInfo.selfBondRewards
    );

    const validatorOutstandingReward =
      await queryClient.cosmos.distribution.v1beta1.validatorOutstandingRewards(
        {
          validatorAddress: validatorsAddress,
        }
      );
    console.log(
      "Validator Outstanding rewards: ",
      validatorOutstandingReward.rewards
    );
  } catch (error) {
    console.error("Error querying distribution:", error);
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
