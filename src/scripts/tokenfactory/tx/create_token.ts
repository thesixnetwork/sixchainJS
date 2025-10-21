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
  const MAX_SUPPLY = process.argv[4];
  const METADATA = process.argv[5] || "";
  const ADMIN = process.argv[6] || "";

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

  if (!MAX_SUPPLY) {
    throw new Error(
      "Max supply not specified. Please provide max supply as the third argument."
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
    `Creating token: ${NAME} with max supply: ${MAX_SUPPLY}${METADATA ? `, metadata: ${METADATA}` : ""}${ADMIN ? `, admin: ${ADMIN}` : ""}`
  );

  // Create token message
  const createToken =
    sixprotocol.tokenmngr.MessageComposer.withTypeUrl.createToken({
      creator: address,
      name: NAME,
      maxSupply: {
        denom: NAME.toLowerCase(),
        amount: MAX_SUPPLY,
      },
      denomMetaData: METADATA,
      mintee: ADMIN || address, // Use creator as admin if not specified
    });

  const msgArray = [createToken];

  const memo = `Create token: ${NAME}`;
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
    console.error(`Error creating token: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Token created successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
