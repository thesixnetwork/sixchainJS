import {
  SixDataChainConnector,
  typesTxNFTManager,
  fee,
} from "@sixnetwork/sixchain-client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate/build/fee";
import dotenv from "dotenv";

const TransferSchema = async (schemaCode: string, newOwner: string) => {
  const sixConnector = new SixDataChainConnector();
  let accountSigner;
  const network = process.argv[2];

  if (network === "local") {
    // ** LOCAL TESTNET **
    sixConnector.rpcUrl = "http://localhost:26657";
    accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
      process.env.ALICE_MNEMONIC!
    );
  } else if (network === "fivenet") {
    // ** FIVENET **
    sixConnector.rpcUrl = "https://rpc1.fivenet.sixprotocol.net:443";
    // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
      process.env.ADDRESS_KLANG_MNEMONIC
    );
  } else if (network === "sixnet") {
    // ** SIXNET **
    sixConnector.rpcUrl = "https://sixnet-rpc.sixprotocol.net:443";
    // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
      process.env.TECHSAUCE_MNEMONIC
    );
  } else {
    throw new Error("Invalid network");
  }

  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: GasPrice.fromString("1.25usix"),
  });

  let msgArray: Array<EncodeObject> = [];

  // loop trough all addresses of list_recipient according to start and end
  const addSystemAction: typesTxNFTManager.MsgChangeSchemaOwner = {
    creator: address,
    nftSchemaCode: schemaCode,
    newOwner: newOwner,
  };

  const msg = rpcClient.nftmngrModule.msgChangeSchemaOwner(addSystemAction);
  msgArray.push(msg);

  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
    fee: "auto",
    memo: "add System To TechSauce.GlobalSummit2023Mockingv9",
  });
  console.log(txResponse);
};

// ask to enter confirmmation
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Are you sure you want to add transfer schemaCode to ${process.argv[2]} (y/n)?`,
  (answer: any) => {
    if (
      answer === "y" ||
      answer === "Y" ||
      answer === "yes" ||
      answer === "Yes"
    ) {
      console.log("TransferSchema...");
      TransferSchema("schemaCode", "newOwner")
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("aborting...");
      process.exit(1);
    }
    readline.close();
  }
);
