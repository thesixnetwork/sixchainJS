import {
  getSigningCosmosClient,
  cosmos,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const validatorAddress = process.argv[3]; // Validator address
  const delegatorAddress = process.argv[4]; // Delegator address to remove from whitelist

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/staking/tx/delete-whitelist-delegator.ts fivenet [validatorAddress] [delegatorAddress] || yarn ts-node ./scripts/staking/tx/delete-whitelist-delegator.ts fivenet [validatorAddress] [delegatorAddress]"
    );
  }

  if (!validatorAddress || !delegatorAddress) {
    throw new Error("Both validator address and delegator address are required");
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

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  console.log(`Deleting whitelist delegator:`);
  console.log(`Creator: ${address}`);
  console.log(`Validator: ${validatorAddress}`);
  console.log(`Delegator to remove: ${delegatorAddress}`);

  let msgArray: Array<EncodeObject> = [];

  const deleteWhitelistDelegator =
    cosmos.staking.v1beta1.MessageComposer.withTypeUrl.deleteWhitelistdelegator({
      creator: address, // Address creating the deletion
      validatorAddress: validatorAddress, // Validator address
      delegatorAddress: delegatorAddress, // Delegator address to be removed from whitelist
    });

  msgArray.push(deleteWhitelistDelegator);

  // First attempt with auto gas
  console.log("Attempting delete whitelist delegator with auto gas...");
  const memo = "delete whitelist delegator";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.STAKING,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error deleting whitelist delegator: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Delete whitelist delegator successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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