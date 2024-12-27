import { ethers } from "ethers";
import { SixDataChainConnector } from "../../sdk/client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { typesTxBank } from "../../sdk";
import { GasPrice, calculateFee } from "@cosmjs/stargate/build/fee";
import { getConnectorConfig, getConnection } from "../client";
import dotenv from "dotenv";

import list_all_recipient from "./all_address";

dotenv.config();

const NETOWRK = process.argv[2]!;
const amount = process.argv[3]; // input six amount
const using_amount = parseInt(amount) * 1_000_000; // convert to usix

const individual_amount = using_amount / list_all_recipient.length;

const cosmosSend = async (start: number, end: number) => {
  if (!NETOWRK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/deploy.ts fivenet || yarn ts-node ./scripts/deploy.ts fivenet",
    );
  }
  let mnemonic: string;

  const { rpcUrl, apiUrl } = await getConnection(NETOWRK);
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = rpcUrl;
  sixConnector.apiUrl = apiUrl;

  switch (NETOWRK) {
    case "fivenet":
      mnemonic = process.env.ADDRESS_KLANG_MNEMONIC!
      break;
    case "sixnet":
      mnemonic = process.env.COLD_WALLET_MNEMONIC!
      break;
    case "local":
      mnemonic = process.env.ALICE_MNEMONIC!
      break;
    default:
      throw new Error("NETWORK NOT SUPPORT")
  }

  const accountSigner =
    await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);

  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: GasPrice.fromString("1.25usix"),
  });

  let msgArray: Array<EncodeObject> = [];

  // loop trough all addresses of list_recipient
  for (let i = start; i < end; i++) {
    const send: typesTxBank.MsgSend = {
      from_address: address,
      to_address: list_all_recipient[i],
      amount: [
        {
          denom: "usix",
          amount: individual_amount.toString(),
        },
      ],
    };

    const msg = rpcClient.cosmosBankModule.msgSend(send);
    msgArray.push(msg);
  }

  const txResponse = await rpcClient.cosmosBankModule.signAndBroadcast(
    msgArray,
    {
      fee: "auto",
      memo: "send balance to action executor",
    },
  );
  console.log(txResponse);
};

const multiSendCoin = async () => {
  let sentCount = 0;
  const numberPerRound = 50;
  const allReciver = list_all_recipient.length;
  const round = Math.floor(allReciver / numberPerRound);
  const remain = allReciver % numberPerRound;

  for (let i = 0; i < round; i++) {
    await cosmosSend(sentCount, sentCount + numberPerRound);
    await new Promise((r) => setTimeout(r, 300));
    sentCount += numberPerRound;
  }

  if (remain > 0) {
    await cosmosSend(sentCount, sentCount + remain);
  }
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Are you sure you want to send ${amount} SIX ON ${process.argv[2]} to all actionSigner? (y/n)?`,
  (answer) => {
    if (
      answer === "y" ||
      answer === "Y" ||
      answer === "yes" ||
      answer === "Yes"
    ) {
      console.log("Sending coint to system actioner ...");
      multiSendCoin()
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
  },
);
