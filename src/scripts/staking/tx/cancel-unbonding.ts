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
  const validator = process.argv[3];
  const amount = process.argv[4] || "1000000"; // Default 1 SIX
  const denom = process.argv[5] || "usix";
  const creationHeight = process.argv[6] || "1"; // Height at which unbonding was created

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/staking/tx/cancel-unbonding.ts fivenet [validator] [amount] [denom] [creationHeight] || yarn ts-node ./scripts/staking/tx/cancel-unbonding.ts fivenet [validator] [amount] [denom] [creationHeight]"
    );
  }

  if (!validator) {
    throw new Error("Validator address is required");
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

  console.log(`Cancelling unbonding delegation:`);
  console.log(`Delegator: ${address}`);
  console.log(`Validator: ${validator}`);
  console.log(`Amount: ${amount} ${denom}`);
  console.log(`Creation Height: ${creationHeight}`);

  let msgArray: Array<EncodeObject> = [];

  const cancelUnbonding =
    cosmos.staking.v1beta1.MessageComposer.withTypeUrl.cancelUnbondingDelegation({
      delegatorAddress: address,
      validatorAddress: validator,
      amount: {
        amount: amount,
        denom: denom,
      },
      creationHeight: Long.fromString(creationHeight),
    });

  msgArray.push(cancelUnbonding);

  // First attempt with auto gas
  console.log("Attempting cancel unbonding delegation with auto gas...");
  const memo = "cancel unbonding delegation";
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
    console.error(`Error cancelling unbonding delegation: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Cancel unbonding delegation successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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