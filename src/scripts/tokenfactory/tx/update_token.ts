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
  const NAME = process.argv[3];
  const NEW_MAX_SUPPLY = process.argv[4];
  const NEW_METADATA = process.argv[5] || "";
  const NEW_ADMIN = process.argv[6] || "";

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!NAME) {
    throw new Error(
      "Token name not specified. Please provide a token name as the second argument."
    );
  }

  if (!NEW_MAX_SUPPLY) {
    throw new Error(
      "New max supply not specified. Please provide new max supply as the third argument."
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
    `Updating token: ${NAME} with new max supply: ${NEW_MAX_SUPPLY}${NEW_METADATA ? `, new metadata: ${NEW_METADATA}` : ""}${NEW_ADMIN ? `, new admin: ${NEW_ADMIN}` : ""}`
  );

  // Create update token message
  const updateToken =
    sixprotocol.tokenmngr.MessageComposer.withTypeUrl.updateToken({
      creator: address,
      name: NAME,
      maxSupply: {
        denom: NAME.toLowerCase(),
        amount: NEW_MAX_SUPPLY,
      },
      mintee: NEW_ADMIN || address,
    });

  const msgArray = [updateToken];

  const memo = `Update token: ${NAME}`;
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
    console.error(`Error updating token: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Token updated successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
