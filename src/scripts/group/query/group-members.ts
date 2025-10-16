import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const groupId = process.argv[3] || "1";

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/group/query/group-members.ts fivenet [groupId] || yarn ts-node ./scripts/group/query/group-members.ts fivenet [groupId]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  const grpId = Long.fromString(groupId);

  console.log(`=== Group Members Query ===`);
  console.log(`Group ID: ${groupId}`);

  try {
    // Query group members
    const groupMembers = await queryClient.cosmos.group.v1.groupMembers({
      groupId: grpId,
    });

    console.log(`\n=== Group Members ===`);
    if (groupMembers.members && groupMembers.members.length > 0) {
      groupMembers.members.forEach((member, index) => {
        console.log(`\nMember ${index + 1}:`);
        console.log("  Address:", member.member?.address);
        console.log("  Weight:", member.member?.weight);
        console.log("  Metadata:", member.member?.metadata);
        console.log("  Added At:", member.member?.addedAt);
      });
      console.log(`\nTotal members: ${groupMembers.members.length}`);
    } else {
      console.log("No members found for this group");
    }

    // Get pagination info
    if (groupMembers.pagination) {
      console.log(`\n=== Pagination ===`);
      console.log("Total:", groupMembers.pagination.total?.toString());
      console.log("Next Key:", groupMembers.pagination.nextKey);
    }
  } catch (error) {
    console.error("Error querying group members:", error);
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
