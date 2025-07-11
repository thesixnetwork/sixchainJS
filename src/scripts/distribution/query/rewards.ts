import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

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

  try {
    const delegatorAddress = "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp";

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

    // Query validator commission
    const validatorCommission =
      await queryClient.cosmos.distribution.v1beta1.validatorCommission({
        validatorAddress: "6xvaloper13g50hqdqsjk85fmgqz2h5xdxq49lsmjdz3mr76",
      });

    console.log("Validator commission:", validatorCommission.commission);

    // Query distribution params
    const params = await queryClient.cosmos.distribution.v1beta1.params({});

    console.log("Distribution params:", params);
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
