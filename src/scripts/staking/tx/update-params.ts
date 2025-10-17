import {
  getSigningCosmosClient,
  cosmos,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "@client-util";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/staking/tx/update-params.ts fivenet || yarn ts-node ./scripts/staking/tx/update-params.ts fivenet"
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const gasPrice = GasPrice.fromString("1.25usix");

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });

  // Get signing client
  const client = await getSigningCosmosClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
    options: {
      gasPrice: gasPrice,
    },
  });

  // Get account address (must be the governance authority)
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  console.log(`Updating staking params:`);
  console.log(`Authority: ${address}`);

  let msgArray: Array<EncodeObject> = [];

  // Example params update - modify as needed
  const updateParams =
    cosmos.staking.v1beta1.MessageComposer.withTypeUrl.updateParams({
      authority: address, // Usually the governance module authority
      params: {
        unbondingTime: {
          seconds: Long.fromString("1814400"), // 21 days in seconds
          nanos: 0,
        },
        maxValidators: 100, // Maximum number of validators
        maxEntries: 7, // Maximum number of unbonding/redelegation entries
        historicalEntries: 10000, // Number of historical entries to persist
        bondDenom: "usix", // Staking token denomination
        minCommissionRate: "0.000000000000000000", // Minimum commission rate (0%)
      },
    });

  msgArray.push(updateParams);

  // First attempt with auto gas
  console.log("Attempting staking params update with auto gas...");
  const memo = "update staking params";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.SAMPLE,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error updating staking params: ${txResponse.rawLog}`);
    console.log("Note: This transaction usually requires governance authority");
    return false;
  } else {
    console.log(
      `Staking params update successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
    return true;
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
