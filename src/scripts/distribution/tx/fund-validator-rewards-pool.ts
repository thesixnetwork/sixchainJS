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

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/distribution/tx/fund-validator-rewards-pool.ts fivenet [recipient] [amount] [denom] || yarn ts-node ./scripts/distribution/tx/community-pool-spend.ts fivenet [recipient] [amount] [denom]"
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

  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];

  const communityPoolSpend =
    cosmos.distribution.v1beta1.MessageComposer.withTypeUrl.depositValidatorRewardsPool(
      {
        depositor: address,
        validatorAddress: "6xvaloper13g50hqdqsjk85fmgqz2h5xdxq49lsmjdz3mr76",
        amount: [{ amount: "10000000", denom: "usix" }],
      }
    );

  msgArray.push(communityPoolSpend);

  // First attempt with auto gas
  const memo = "fund validator rewards pool";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.DISTRIBUTION.FUND_VALIDATOR_REWARD,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error spending from community pool: ${txResponse.rawLog}`);
    console.log("Note: This transaction usually requires governance authority");
    return false;
  } else {
    console.log(
      `Community pool spend successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
