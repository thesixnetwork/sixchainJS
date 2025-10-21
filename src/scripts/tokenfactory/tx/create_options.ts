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
  const DEFAULT_MINT_FEE = process.argv[3];
  const DEFAULT_BURN_FEE = process.argv[4];
  const DEFAULT_TRANSFER_FEE = process.argv[5];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!DEFAULT_MINT_FEE) {
    throw new Error(
      "Default mint fee not specified. Please provide default mint fee as the second argument."
    );
  }

  if (!DEFAULT_BURN_FEE) {
    throw new Error(
      "Default burn fee not specified. Please provide default burn fee as the third argument."
    );
  }

  if (!DEFAULT_TRANSFER_FEE) {
    throw new Error(
      "Default transfer fee not specified. Please provide default transfer fee as the fourth argument."
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

  console.log(
    `Creating options with mint fee: ${DEFAULT_MINT_FEE}, burn fee: ${DEFAULT_BURN_FEE}, transfer fee: ${DEFAULT_TRANSFER_FEE}`
  );

  // Create options message
  const createOptions =
    sixprotocol.tokenmngr.MessageComposer.withTypeUrl.createOptions({
      creator: address,
      defaultMintee: DEFAULT_MINT_FEE,
    });

  const msgArray = [createOptions];

  const memo = "Create tokenmngr options";
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
    console.error(`Error creating options: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Options created successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
