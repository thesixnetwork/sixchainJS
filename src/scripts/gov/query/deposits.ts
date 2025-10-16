import { cosmos } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "@client-util";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const proposalId = process.argv[3] || "1";

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/gov/query/deposits.ts fivenet [proposalId] || yarn ts-node ./scripts/gov/query/deposits.ts fivenet [proposalId]"
    );
  }

  const { rpcUrl } = await getConnectorConfig(NETWORK);

  const queryClient = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcUrl,
  });

  const propId = Long.fromString(proposalId);

  console.log(`=== Proposal Deposits Query ===`);
  console.log(`Proposal ID: ${proposalId}`);

  try {
    // Query all deposits for a proposal
    const deposits = await queryClient.cosmos.gov.v1.deposits({
      proposalId: propId,
    });

    console.log(`\n=== All Deposits ===`);
    if (deposits.deposits && deposits.deposits.length > 0) {
      let totalDeposit = 0;
      deposits.deposits.forEach((deposit, index) => {
        console.log(`\nDeposit ${index + 1}:`);
        console.log("  Depositor:", deposit.depositor);
        console.log("  Amount:", deposit.amount);

        // Calculate total if possible
        if (deposit.amount && deposit.amount.length > 0) {
          deposit.amount.forEach((coin) => {
            if (coin.denom === "usix") {
              totalDeposit += parseInt(coin.amount || "0");
            }
          });
        }
      });

      console.log(`\nTotal deposits: ${deposits.deposits.length}`);
      if (totalDeposit > 0) {
        console.log(`Total USIX deposited: ${totalDeposit}`);
        console.log(
          `Total SIX deposited: ${(totalDeposit / 1_000_000).toFixed(6)}`
        );
      }
    } else {
      console.log("No deposits found for this proposal");
    }

    // Query specific depositor's deposit (if available)
    const depositorAddress = "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq";
    try {
      const deposit = await queryClient.cosmos.gov.v1.deposit({
        proposalId: propId,
        depositor: depositorAddress,
      });

      console.log(`\n=== Specific Deposit ===`);
      console.log("Depositor:", depositorAddress);
      console.log("Deposit:", deposit.deposit);
    } catch (error) {
      console.log(`\nNo deposit found for depositor: ${depositorAddress}`);
    }

    // Get pagination info
    if (deposits.pagination) {
      console.log(`\n=== Pagination ===`);
      console.log("Total:", deposits.pagination.total?.toString());
      console.log("Next Key:", deposits.pagination.nextKey);
    }
  } catch (error) {
    console.error("Error querying deposits:", error);
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
