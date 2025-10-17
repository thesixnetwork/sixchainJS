import {
  getSigningCosmosClient,
  cosmos,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
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

  const memo = "send tokens";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.BANK.SEND,
      denom: "usix",
    }
  );

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
