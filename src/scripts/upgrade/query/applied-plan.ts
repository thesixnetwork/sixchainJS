import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const planName = process.argv[3];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/upgrade/query/applied-plan.ts fivenet [planName] || yarn ts-node ./scripts/upgrade/query/applied-plan.ts fivenet [planName]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  console.log(`=== Applied Plan Query ===`);
  if (planName) {
    console.log(`Plan Name: ${planName}`);
  }

  try {
    if (planName) {
      // Query specific applied plan
      const appliedPlan = await queryClient.cosmos.upgrade.v1beta1.appliedPlan({
        name: planName,
      });

      console.log(`\n=== Applied Plan: ${planName} ===`);
      console.log("Height:", appliedPlan.height?.toString());
    } else {
      console.log("Please provide a plan name to query");
      console.log(
        "Usage: bun run ./scripts/upgrade/query/applied-plan.ts fivenet <planName>"
      );
    }

    // Query current plan for context
    const currentPlan = await queryClient.cosmos.upgrade.v1beta1.currentPlan(
      {}
    );

    console.log(`\n=== Current Plan (Context) ===`);
    if (currentPlan.plan) {
      console.log("Name:", currentPlan.plan.name);
      console.log("Height:", currentPlan.plan.height?.toString());
      console.log("Info:", currentPlan.plan.info);
      console.log(
        "Upgraded Client State:",
        currentPlan.plan.upgradedClientState
      );
    } else {
      console.log("No current upgrade plan");
    }

    // Get upgrade authority
    const authority = await queryClient.cosmos.upgrade.v1beta1.authority({});
    console.log(`\n=== Upgrade Authority ===`);
    console.log("Authority:", authority.address);
  } catch (error) {
    console.error("Error querying applied plan:", error);
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
