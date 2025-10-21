import {
  getSigningCosmosClient,
  sixprotocol,
  COMMON_GAS_LIMITS,
  signAndBroadcastWithRetry,
} from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];
  const TOKEN_NAME = process.argv[3];
  const AMOUNT = process.argv[4];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!TOKEN_NAME) {
    throw new Error(
      "Token name not specified. Please provide a token name as the second argument."
    );
  }

  if (!AMOUNT) {
    throw new Error(
      "Amount not specified. Please provide amount to burn as the third argument."
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

  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  console.log(`Burning ${AMOUNT} of token ${TOKEN_NAME}`);

  // Create burn message
  const burn = sixprotocol.tokenmngr.MessageComposer.withTypeUrl.burn({
    creator: address,
    amount: {
      denom: TOKEN_NAME.toLowerCase(),
      amount: AMOUNT,
    },
  });

  const msgArray = [burn];

  const memo = `Burn ${AMOUNT} of ${TOKEN_NAME}`;
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.BANK.SEND || 200000,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error burning tokens: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Tokens burned successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
