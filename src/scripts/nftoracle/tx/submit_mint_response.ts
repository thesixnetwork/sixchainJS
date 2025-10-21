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
  const MINT_REQUEST_ID = process.argv[3];
  const BASE64_NFT_DATA = process.argv[4];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!MINT_REQUEST_ID) {
    throw new Error(
      "Mint Request ID not specified. Please provide a mint request ID as the second argument."
    );
  }

  if (!BASE64_NFT_DATA) {
    throw new Error(
      "Base64 NFT Data not specified. Please provide base64 NFT data as the third argument."
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

  console.log(`Submitting mint response for request ID: ${MINT_REQUEST_ID}`);

  // Submit mint response message
  const submitMintResponse =
    sixprotocol.nftoracle.MessageComposer.withTypeUrl.submitMintResponse({
      creator: address,
      mintRequestID: parseInt(MINT_REQUEST_ID),
      base64NftData: BASE64_NFT_DATA,
    });

  const msgArray = [submitMintResponse];

  const memo = "Submit NFT Oracle Mint Response";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.NFT_ORACLE.SUBMIT_MINT_RESPONSE || 200000,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error submitting mint response: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Mint response submitted successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
