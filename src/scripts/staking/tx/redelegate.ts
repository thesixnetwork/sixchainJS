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
  const srcValidator = process.argv[3];
  const dstValidator = process.argv[4];
  const amount = process.argv[5] || "1000000"; // Default 1 SIX
  const denom = process.argv[6] || "usix";

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/staking/tx/redelegate.ts fivenet [srcValidator] [dstValidator] [amount] [denom] || yarn ts-node ./scripts/staking/tx/redelegate.ts fivenet [srcValidator] [dstValidator] [amount] [denom]"
    );
  }

  if (!srcValidator || !dstValidator) {
    throw new Error("Source and destination validator addresses are required");
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

  console.log(`Redelegating:`);
  console.log(`Delegator: ${address}`);
  console.log(`From Validator: ${srcValidator}`);
  console.log(`To Validator: ${dstValidator}`);
  console.log(`Amount: ${amount} ${denom}`);

  let msgArray: Array<EncodeObject> = [];

  const redelegate =
    cosmos.staking.v1beta1.MessageComposer.withTypeUrl.beginRedelegate({
      delegatorAddress: address,
      validatorSrcAddress: srcValidator,
      validatorDstAddress: dstValidator,
      amount: {
        amount: amount,
        denom: denom,
      },
    });

  msgArray.push(redelegate);

  // First attempt with auto gas
  console.log("Attempting redelegation with auto gas...");
  const memo = "redelegate";
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
    console.error(`Error in redelegation: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Redelegation successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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