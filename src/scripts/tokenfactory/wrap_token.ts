import {
  SixDataChainConnector,
  BASE64,
  typesTxTokenManager,
  fee,
} from "@sixnetwork/sixchain-client";
import { Coin } from "@cosmjs/amino";
import dotenv from "dotenv";

dotenv.config();

const Delegate = async () => {
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = "https://rpc1.fivenet.sixprotocol.net:443";

  // Retrieve acctount signer from private key or mnemonic
  const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
    process.env.FIVENET_MNEMONIC!
  );

  // Get index of account
  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: fee.GasPrice.fromString("1.25usix"),
  });

  const convertAmount: Coin = {
    amount: "1000000",
    denom: "usix",
  };

  const msgDelegate: typesTxTokenManager.MsgWrapToken = {
    amount: convertAmount,
    creator: address,
    receiver: "0xB62ef83643A2F8c95dF78F694C6Bf480f5b786f2", // REMARK IF NULL VALUE Coint will convert to itself
  };

  const msg = rpcClient.tokenmngrModule.msgWrapToken(msgDelegate);
  const txResponse = await rpcClient.tokenmngrModule.signAndBroadcast([msg], {
    fee: "auto",
    memo: "memo",
  });
  console.log(txResponse);
};

Delegate()
  .then((res) => {
    console.log;
  })
  .catch((err) => {
    console.log(err);
  });
