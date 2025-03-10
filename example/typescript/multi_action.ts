import { SixDataChainConnector,typesTxNFTManager, BASE64 } from "@sixnetwork/sixchain-client";
import { EncodeObject } from "@cosmjs/proto-signing";
import exampleNFTData from "../resource/nft-metadata-example.json";
import { GasPrice, calculateFee } from "@cosmjs/stargate/build/fee"
// import { MsgPerformActionByAdmin } from "./interface/IAction";
import fs from 'fs'
import dotenv from "dotenv";
dotenv.config();

const MultiAction = async () => {
  const sixConnector = new SixDataChainConnector();
  // ** LOCAL TESTNET **
  sixConnector.rpcUrl = "http://localhost:26657";
  const accountSigner = await sixConnector.accounts.privateKeyToAccount("code1 code2 code3 code4 code5 code6 code7 code8 code9 code10 code11 code12 code13 code14 code15 code16 code17 code18 code19 code20 code21 code22 code23 code24");
  // const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(process.env.ALICE_MNEMONIC);

  // ** FIVENET **
  // sixConnector.rpcUrl = "https://rpc1.fivenet.sixprotocol.net:443";
  // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
  // const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(process.env.MNEMONIC);
  // Get index of account
  const address = (await accountSigner.getAccounts())[0].address;

  const rpcClient = await sixConnector.connectRPCClient(accountSigner, { gasPrice: GasPrice.fromString("1.25usix") })
  // Encode NFT data to base64
  
  
  let tokenCount = 0;
  let tokenTarget = "452";
  // let tokenPerRound = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 3250
  let tokenPerRound = [10,20,30,40,50,60,70,80,90,100]; // 3250
  let msgArray:Array<EncodeObject> =[]
  type TimeMap = {
    [key: string]: string;
  };
  let timeMap: TimeMap = {};
  // loop with requent of tokenPerRound
  for (let i = 0; i < tokenPerRound.length; i++) {
    // loop with requent of tokenPerRound
    for (let j = 0; j < tokenPerRound[i]; j++) {
      // replace token id
      let token_id = String(tokenCount);

      const action : typesTxNFTManager.MsgPerformActionByAdmin = {
        creator: address,
        nft_schema_code: exampleNFTData.nft_schema_code,
        tokenId: token_id,
        action: "transfer",
        ref_id: `transfer-${token_id}-to-${tokenTarget}`,
        parameters: [{"name":"points","value":"20"},{"name":"token_id","value":tokenTarget}],
    }

      const msg = await rpcClient.nftmngrModule.msgPerformActionByAdmin(action);
      // push msg to array
      msgArray.push(msg)
      tokenCount++;
    }
    // start
    console.time(`Execute_time(${i+1})`)
    console.log("Action "+tokenPerRound[i]+" tokens/round"+", Total Action Token "+tokenCount+" tokens");
    const start = new Date().getTime();
    const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
      fee: "auto",
      memo: "Mint NFT Metadata Token",
    });
    const end = new Date().getTime();
    const sec = (end - start)/1000;
    console.timeEnd(`Execute_time(${i+1})`)
    timeMap[tokenPerRound[i]] = `${sec} sec`;
    if (txResponse.code) {
      console.log(txResponse.rawLog);
    }
    console.log(`gasUsed: ${txResponse.gasUsed}\ngasWanted:${txResponse.gasWanted}\nFee: ${(txResponse.gasWanted * 1.25)/1000000} six`);
    
    // console.log(txResponse);
    // save console.log to file
    fs.appendFile('action.txt', `Token per round: ${tokenPerRound[i]}\nTime consume: ${sec} sec\ncode: ${txResponse.code}\nheight: ${txResponse.height}\ngasUsed: ${txResponse.gasUsed}\ngasWanted: ${txResponse.gasWanted}\nFee: ${(txResponse.gasWanted * 1.25)/1000000} six\ntransactionHash: ${txResponse.transactionHash}\nTotalToken: ${tokenCount}\n\n`,
     function (err) {
      if (err) throw err;
    });
    // clear msgArray
    msgArray = [];
  }
  console.log(timeMap);
};
  
MultiAction();
