import {
  getSigningSixprotocolClient,
  sixprotocol,
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
  const NFT_SCHEMA_CODE = process.argv[3];
  const TOKEN_ID = process.argv[4];
  const REQUIRED_CONFIRM = process.argv[5] || "1";

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!NFT_SCHEMA_CODE) {
    throw new Error(
      "NFT Schema Code not specified. Please provide an NFT schema code as the second argument."
    );
  }

  if (!TOKEN_ID) {
    throw new Error(
      "Token ID not specified. Please provide a token ID as the third argument."
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const gasPrice = GasPrice.fromString("1.25usix");

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });

  // Get signing client
  const client = await getSigningSixprotocolClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
    options: {
      gasPrice: gasPrice,
    },
  });

  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  console.log(
    `Creating mint request for NFT Schema: ${NFT_SCHEMA_CODE}, Token ID: ${TOKEN_ID} with required confirmation: ${REQUIRED_CONFIRM}`
  );

  // Create mint request message
  const createMintRequest =
    sixprotocol.nftoracle.MessageComposer.withTypeUrl.createMintRequest({
      creator: address,
      nftSchemaCode: NFT_SCHEMA_CODE,
      tokenId: TOKEN_ID,
      requiredConfirm: parseInt(REQUIRED_CONFIRM),
    });

  const msgArray = [createMintRequest];

  const memo = "Create NFT Oracle Mint Request";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.NFT_ORACLE.CREATE_MINT_REQUEST || 200000,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error creating mint request: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Mint request created successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
