import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../../client";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/upgrade/query/current-plan.ts fivenet || yarn ts-node ./scripts/upgrade/query/current-plan.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  try {
    // Query current upgrade plan
    const currentPlan = await queryClient.cosmos.upgrade.v1beta1.currentPlan(
      {}
    );

    console.log("Current upgrade plan:", currentPlan);

    // Query applied plan
    const appliedPlan = await queryClient.cosmos.upgrade.v1beta1.appliedPlan({
      name: "TODO: Set upgrade name to query", // TODO: Replace with actual upgrade name
    });

    console.log("Applied plan:", appliedPlan);

    // Query upgraded consensus state
    const upgradedConsensusState =
      await queryClient.cosmos.upgrade.v1beta1.upgradedConsensusState({
        lastHeight: Long.fromNumber(1000000), // TODO: Set appropriate height
      });

    console.log("Upgraded consensus state:", upgradedConsensusState);

    // Query module versions
    const moduleVersions =
      await queryClient.cosmos.upgrade.v1beta1.moduleVersions({
        moduleName: "", // TODO: Set specific module name or leave empty for all
      });

    console.log("Module versions:", moduleVersions);

    // Query authority
    const authority = await queryClient.cosmos.upgrade.v1beta1.authority({});

    console.log("Upgrade authority:", authority);
  } catch (error) {
    console.error("Error querying upgrade:", error);
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
