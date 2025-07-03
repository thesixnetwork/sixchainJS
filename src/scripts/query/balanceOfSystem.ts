import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../client";
import list_all_recipient from "../utils/all_address";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const NETWORK = process.argv[2]!;
const Balance = async () => {
    const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);
    const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({ rpcEndpoint: rpcUrl });

    fs.appendFile(`balance.csv`, `address,token\n`, function (err) {
        if (err) throw err;
    });

    let balances: any = {};
    if (fs.existsSync("balances.json")) {
        balances = JSON.parse(fs.readFileSync("balances.json").toString());
    }

    // ** QUERY BALANCES **
    // loop through all addresses
    const records = [];
    for (let i = 0; i < list_all_recipient.length; i++) {
    const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({ rpcEndpoint: rpcUrl });
    let balance;
    let isQueried = false;
    // map of address and balance
    let token = {
      address: list_all_recipient[i],
      balance: 0,
    };
    try {
      const balance = await queryClient.cosmos.bank.v1beta1.balance({
        address: list_all_recipient[i],
        denom: "usix"
      })

      // if token has been minted, skip to next token
      // update to key
      if (balance.balance) {
        isQueried = true;
        const balanceAmount =
          parseInt(balance?.balance.amount) / 1_000_000; 
        token.balance = balanceAmount;
        console.log(token);

        // Update balance for address
        if (!balances[token.address]) {
          balances[token.address] = 0;
        }
        balances[token.address] = balanceAmount;

        // Write updated balances to JSON file
        fs.writeFileSync("balances.json", JSON.stringify(balances));
      }
    } catch (e: any) {
      console.log("token not found", e.error);
    }
    records.push(token);
  }
};

// create one metadata for test on production which is token_id = 2531
Balance()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
