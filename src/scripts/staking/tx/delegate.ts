import { getSigningSixprotocolClient, cosmos } from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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
  const client = await getSigningSixprotocolClient({
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

  const msgDelegate =
    cosmos.staking.v1beta1.MessageComposer.withTypeUrl.delegate({
      amount: delegate_amount,
      delegatorAddress: address,
      validatorAddress: validator_address,
    });

  const txResponse = await client.signAndBroadcast(
    address,
    [msgDelegate],
    "auto",
    "memo"
  );
  console.log(txResponse);
};

delegate()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
