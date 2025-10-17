import {
  getSigningCosmosClient,
  cosmos,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { Coin } from "@cosmjs/amino";

import dotenv from "dotenv";

dotenv.config();

const delegate = async () => {
  const rpcEndpoint = "http://localhost:26657";

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    process.env.ALICE_MNEMONIC!,
    { prefix: "6x" }
  );

  // Get signing client
  const client = await getSigningCosmosClient({
    rpcEndpoint,
    signer: wallet,
  });

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  const validator_address = "6xvaloper13dwxflzhc3qlkcy9syfnhr8tu2kdvuavhzdf9f";

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
      fallbackGas: COMMON_GAS_LIMITS.STAKING,
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
  console.log(txResponse);
};

delegate()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
