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

  // Hardcoded values as requested
  const toAddress = "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp";
  const amount = "10000000"; // 10 SIX in usix
  const denom = "usix";

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/bank/tx/send.ts fivenet"
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

  // Using hardcoded amount (already in usix)
  const using_amount = amount;

  console.log(
    `Sending ${using_amount} ${denom} (${parseInt(using_amount) / 1_000_000} SIX) from ${address} to ${toAddress}`
  );

  const send = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
    fromAddress: address,
    toAddress: toAddress,
    amount: [
      {
        denom: denom,
        amount: using_amount,
      },
    ],
  });

  const msgArray = [send];

  // First attempt with auto gas
  console.log("Attempting send with auto gas...");
  let txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "send tokens"
  );

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
      "send tokens",
      {
        gasMultiplier: 1.5, // 50% buffer
        gasPrice: 1.25,
        fallbackGas: COMMON_GAS_LIMITS.SIMPLE_SEND,
        denom: "usix",
      }
    );

    console.log(`Calculated fee: gasLimit=${gasLimit}, gasUsed=${gasUsed}`);

    // Retry with calculated fee
    txResponse = await client.signAndBroadcast(
      address,
      msgArray,
      fee,
      "send tokens"
    );
  }

  if (txResponse.code !== 0) {
    console.error(`Error sending tokens: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Send successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
    console.error(e);
    process.exit(1);
  });
