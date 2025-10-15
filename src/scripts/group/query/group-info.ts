import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/group/query/group-info.ts fivenet || yarn ts-node ./scripts/group/query/group-info.ts fivenet"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  try {
    // TODO: Replace with actual group ID
    const groupId = Long.fromNumber(1);

    // Query group info
    const groupInfo = await queryClient.cosmos.group.v1.groupInfo({
      groupId: groupId,
    });

    console.log("Group info:", groupInfo);

    // Query group members
    const groupMembers = await queryClient.cosmos.group.v1.groupMembers({
      groupId: groupId,
    });

    console.log("Group members:", groupMembers);

    // Query groups by admin
    const groupsByAdmin = await queryClient.cosmos.group.v1.groupsByAdmin({
      admin: "6x1example_admin_address", // TODO: Replace with actual admin address
    });

    console.log("Groups by admin:", groupsByAdmin);

    // Query group policies by group
    const groupPolicies =
      await queryClient.cosmos.group.v1.groupPoliciesByGroup({
        groupId: groupId,
      });

    console.log("Group policies:", groupPolicies);

    // Query group policy info
    if (groupPolicies.groupPolicies.length > 0) {
      const policyAddress = groupPolicies.groupPolicies[0].address;
      const policyInfo = await queryClient.cosmos.group.v1.groupPolicyInfo({
        address: policyAddress,
      });

      console.log("Group policy info:", policyInfo);
    }
  } catch (error) {
    console.error("Error querying group:", error);
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
