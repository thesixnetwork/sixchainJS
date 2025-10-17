import {
  getSigningSixprotocolClient,
  sixprotocol,
  calculateFeeFromSimulation,
  COMMON_GAS_LIMITS,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import dotenv from "dotenv";
import allAddress from "./all_address";
import { getConnectorConfig } from "@client-util";
dotenv.config();
import divine_elite from "../resources/schemas/divineelite-nft-schema.json";
import preventive from "../resources/schemas/preventive-nft-schema.json";
import membership from "../resources/schemas/membership-nft-schema.json";
import lifestyle from "../resources/schemas/lifestyle-nft-schema.json";

const schemaList = [divine_elite, preventive, membership, lifestyle];

const NETOWRK = process.argv[2]!;

const addSystemActioner = async (start: number, end: number) => {
  if (!NETOWRK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/deploy.ts fivenet || yarn ts-node ./scripts/deploy.ts fivenet"
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETOWRK);
  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });
  // Get signing client
  const client = await getSigningSixprotocolClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
  });

  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];

  for (let i = 0; i < schemaList.length; i++) {
    let schema_name = schemaList[i].code;
    const split_schema = schema_name.split(".");
    const _name = split_schema[1];
    const org_name = process.env.ORG_NAME;
    let schemaCode: string;
    schemaCode = `${org_name}.${_name}`;
    schemaList[i].code = schemaCode;

    // loop trough all addresses of list_recipient according to start and end
    for (let j = start; j < end; j++) {
      const addSystemAction =
        sixprotocol.nftmngr.MessageComposer.withTypeUrl.createActionExecutor({
          creator: address,
          nftSchemaCode: schemaCode,
          executorAddress: allAddress[j],
        });

      msgArray.push(addSystemAction);
    }

    // First attempt with auto gas
    console.log("Attempting add system actioner with auto gas...");
    let txResponse = await client.signAndBroadcast(address, msgArray, "auto");

    // If out of gas error (code 11), retry with calculated fee
    if (txResponse.code === 11) {
      console.log("Out of gas error detected. Retrying with calculated fee...");
      console.log(
        `Previous attempt: gasWanted=${txResponse.gasWanted}, gasUsed=${txResponse.gasUsed}`
      );

      // Calculate fee using utility function with higher multiplier
      const { fee, gasUsed, gasLimit } = await calculateFeeFromSimulation(
        client,
        address,
        msgArray,
        "add system actioner",
        {
          gasMultiplier: 1.5, // 50% buffer
          gasPrice: 1.25,
          fallbackGas: COMMON_GAS_LIMITS.NFT_MINT,
          denom: "usix",
        }
      );

      console.log(`Calculated fee: gasLimit=${gasLimit}, gasUsed=${gasUsed}`);

      // Retry with calculated fee
      txResponse = await client.signAndBroadcast(address, msgArray, fee);
    }

    if (txResponse.code !== 0) {
      console.error(`Error in add system actioner: ${txResponse.rawLog}`);
    } else {
      console.log(
        `Add system actioner successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
      );
    }
    console.log(
      `gasUsed: ${txResponse.gasUsed}\ngasWanted:${txResponse.gasWanted}\n${txResponse.transactionHash}`
    );
  }

  return;
};

const multiAddSystemActioner = async () => {
  let sentCount = 0;
  const numberPerRound = 50;
  const actionNumber = allAddress.length;
  const round = Math.floor(actionNumber / numberPerRound);
  const remain = actionNumber % numberPerRound;
  console.log("remain", remain);

  for (let i = 0; i < round; i++) {
    await addSystemActioner(sentCount, sentCount + numberPerRound);
    await new Promise((r) => setTimeout(r, 300));
    sentCount += numberPerRound;
  }

  if (remain > 0) {
    await addSystemActioner(sentCount, sentCount + remain);
  }
};

// ask to enter confirmmation
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Are you sure you want to add System actioner to ${process.argv[2]} (y/n)?`,
  (answer: any) => {
    if (
      answer === "y" ||
      answer === "Y" ||
      answer === "yes" ||
      answer === "Yes"
    ) {
      console.log("Adding System actioner...");
      multiAddSystemActioner()
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
