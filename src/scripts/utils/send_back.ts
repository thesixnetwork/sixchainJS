import { SixDataChainConnector } from "../../sdk/client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { typesTxBank } from "../../sdk";
import { GasPrice } from "@cosmjs/stargate/build/fee";
import dotenv from "dotenv";
import fs from "fs";
import { decryptMnemonic } from "../../poc/mnemonic";
import encryptedSeed from "../../poc/samitivej-uat.seed.json";

const date = new Date();
const dateString = date.toISOString().slice(0, 10);

let list_all_sender = [];

dotenv.config();

const network = process.argv[2]; // input network

const cosmosSend = async (start: number, end: number) => {
  const sixConnector = new SixDataChainConnector();
  for (let i = start; i < end; i++) {
    let msgArray: Array<EncodeObject> = [];
    let accountSigner;
    if (network === "local") {
      // ** LOCAL TESTNET **
      sixConnector.rpcUrl = "http://localhost:26657";
      sixConnector.apiUrl = "http://localhost:1317";
      // const accountSigner = await sixConnector.accounts.privateKeyToAccount(
      //   process.env.ALICE_PRIVATE_KEY
      // );
      accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
        list_all_sender[i],
      );
    } else if (network === "fivenet") {
      // ** FIVENET **
      sixConnector.rpcUrl = "https://rpc1.fivenet.sixprotocol.net:443";
      sixConnector.apiUrl = "https://api1.fivenet.sixprotocol.net:443";
      // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
      accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
        list_all_sender[i],
      );
    } else if (network === "sixnet") {
      // ** SIXNET **
      sixConnector.rpcUrl = "https://sixnet-rpc.sixprotocol.net:443";
      sixConnector.apiUrl = "https://sixnet-api.sixprotocol.net:443";
      // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
      accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
        list_all_sender[i],
      );
    } else {
      throw new Error("Invalid network");
    }

    const address = (await accountSigner.getAccounts())[0].address;

    const apiClient = await sixConnector.connectAPIClient();
    const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
      gasPrice: GasPrice.fromString("1.25usix"),
    });

    const balance = await apiClient.cosmosBankModule.queryBalance(address, {
      denom: "usix",
    });

    let singerBalance = 0;
    if (balance.data) {
      singerBalance = parseInt(balance.data?.balance.amount) / 1_000_000;
    }

    if (singerBalance < 1) {
      continue;
    }
    const amount_ToSend = singerBalance - 0.2;
    const using_to_send = amount_ToSend * 1_000_000;

    const send: typesTxBank.MsgSend = {
      from_address: address,
      to_address: "6x16s4q4lx48rhdycswktyt2j75vdpnlmv6z5j74r",
      amount: [
        {
          denom: "usix",
          amount: Math.round(using_to_send).toString(),
        },
      ],
    };

    console.log(using_to_send);

    const msg = await rpcClient.cosmosBankModule.msgSend(send);

    msgArray.push(msg);

    const txResponse = await rpcClient.cosmosBankModule.signAndBroadcast(
      msgArray,
      {
        fee: "auto",
        memo: "send back to Distributor",
      },
    );

    if (txResponse.code !== 0) {
      console.log(txResponse.rawLog);
    }
    if (txResponse.code === 0) {
      console.log(
        `gasUsed: ${txResponse.gasUsed}\ngasWanted:${txResponse.gasWanted}\nhash:${txResponse.transactionHash}\n`,
      );
    }

    // save to csv
    fs.appendFile(
      `send_${dateString}.csv`,
      `${start},${end},${txResponse.code},${txResponse.height},${
        txResponse.gasUsed
      },${txResponse.gasWanted},${""},${
        txResponse.transactionHash
      },${amount_ToSend}\n`,
      function (err) {
        if (err) throw err;
      },
    );
  }
};

const multiSendCoin = async () => {
  fs.appendFile(
    `send_${dateString}.csv`,
    `start,to,code,height,gasUsed,gasWanted,Fee,Hash,amount\n`,
    function (err) {
      if (err) throw err;
    },
  );

  for (let i = 0; i < encryptedSeed.length; i++) {
    const seed = decryptMnemonic(encryptedSeed[i].seed);
    list_all_sender.push(seed);
  }

  let sentCount = 0;
  const numberPerRound = 50;
  const allReciver = list_all_sender.length;
  const round = Math.floor(allReciver / numberPerRound);
  const remain = allReciver % numberPerRound;

  for (let i = 0; i < round; i++) {
    await cosmosSend(sentCount, sentCount + numberPerRound);
    // await new Promise((r) => setTimeout(r, 300));
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
  `Are you sure you want to send TOKEN SIX ON ${process.argv[2]} to all actionSigner? (y/n)?`,
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
