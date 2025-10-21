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
  const ADDRESS = process.argv[4];
  const NEW_CREATOR = process.argv[5];

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

  if (!ADDRESS) {
    throw new Error(
      "Address not specified. Please provide an address as the third argument."
    );
  }

  if (!NEW_CREATOR) {
    throw new Error(
      "New creator not specified. Please provide a new creator address as the fourth argument."
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
  const signerAddress = accounts[0].address;

  console.log(
    `Updating mint permission for token ${TOKEN_NAME}, address ${ADDRESS}, new creator ${NEW_CREATOR}`
  );

  // Create update mintperm message
  const updateMintperm =
    sixprotocol.tokenmngr.MessageComposer.withTypeUrl.updateMintperm({
      creator: signerAddress,
      token: TOKEN_NAME,
      address: ADDRESS,
    });

  const msgArray = [updateMintperm];

  const memo = `Update mint permission for ${TOKEN_NAME}`;
  let txResponse = await signAndBroadcastWithRetry(
    client,
    signerAddress,
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
    console.error(`Error updating mint permission: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Mint permission updated successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
