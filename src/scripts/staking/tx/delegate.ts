import {
  getSigningCosmosClient,
  cosmos,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { Coin } from "@cosmjs/amino";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const delegate = async () => {
  const NETWORK = process.argv[2];

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

  const validator_address = "6xvaloper13g50hqdqsjk85fmgqz2h5xdxq49lsmjdz3mr76";

  const delegate_amount: Coin = {
    amount: "20000000000",
    denom: "usix",
  };

  let msgArray: Array<EncodeObject> = [];

  const msgDelegate =
    cosmos.staking.v1beta1.MessageComposer.withTypeUrl.delegate({
      amount: delegate_amount,
      delegatorAddress: address,
      validatorAddress: validator_address,
    });

  msgArray.push(msgDelegate);

  // First attempt with auto gas
  console.log("Attempting delegation with auto gas...");
  const memo = "delegate";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.STAKING.DELEGATE,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error in delegation: ${txResponse.rawLog}`);
  } else {
    console.log(
      `Delegation successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
  }
};

delegate()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
