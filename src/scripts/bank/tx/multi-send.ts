import {
  getSigningCosmosClient,
  cosmos,
  calculateFeeFromSimulation,
  COMMON_GAS_LIMITS,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/bank/tx/multi-send.ts fivenet || yarn ts-node ./scripts/bank/tx/multi-send.ts fivenet"
    );
  }

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

  let msgArray: Array<EncodeObject> = [];

  const inputs = [
    {
      address: address,
      coins: [
        {
          denom: "usix",
          amount: "2000000", // 2 SIX total to send
        },
      ],
    },
  ];

  const outputs = [
    {
      address: "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp",
      coins: [
        {
          denom: "usix",
          amount: "1000000", // 1 SIX
        },
      ],
    },
    {
      address: "6x1t3p2vzd7w036ahxf4kefsc9sn24pvlqphcuauv",
      coins: [
        {
          denom: "usix",
          amount: "1000000", // 1 SIX
        },
      ],
    },
  ];

  const multiSend = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.multiSend({
    inputs: inputs,
    outputs: outputs,
  });

  msgArray.push(multiSend);

  // Simulate transaction to get gas estimate
  const gasEstimate = await client.simulate(address, msgArray, "multi send");
  console.log(`Gas estimate: ${gasEstimate}`);

  // Apply gas adjustment (1.5x like CLI)
  const gasLimit = Math.ceil(gasEstimate * 1.5);
  console.log(`Gas limit with adjustment: ${gasLimit}`);

  const memo = "multi send";
  let txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    gasLimit,
    memo
  );

  if (txResponse.code === 11) {
    console.log("Out of gas error detected. Retrying with calculated fee...");
    console.log(
      `Previous attempt: gasWanted=${txResponse.gasWanted}, gasUsed=${txResponse.gasUsed}`
    );

    const { fee, gasUsed, gasLimit } = await calculateFeeFromSimulation(
      client,
      address,
      msgArray,
      memo,
      {
        gasMultiplier: 1.5,
        gasPrice: 1.25,
        fallbackGas: COMMON_GAS_LIMITS.SAMPLE,
        denom: "usix",
      }
    );
    console.log(`Calculated fee: gasLimit=${gasLimit}, gasUsed=${gasUsed}`);
    // Retry with calculated fee
    txResponse = await client.signAndBroadcast(address, msgArray, fee, memo);
  }

  if (txResponse.code !== 0) {
    console.error(`Error in multi send: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Multi send successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
    return true;
  }
};

main()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
