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
  const VERIFY_REQUEST_ID = process.argv[3];
  const NFT_SCHEMA_CODE = process.argv[4];
  const BASE64_ORIGIN_CONTRACT_INFO = process.argv[5];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!VERIFY_REQUEST_ID) {
    throw new Error(
      "Verify Request ID not specified. Please provide a verify request ID as the second argument."
    );
  }

  if (!NFT_SCHEMA_CODE) {
    throw new Error(
      "NFT Schema Code not specified. Please provide an NFT schema code as the third argument."
    );
  }

  if (!BASE64_ORIGIN_CONTRACT_INFO) {
    throw new Error(
      "Base64 Origin Contract Info not specified. Please provide base64 origin contract info as the fourth argument."
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
    `Submitting verify collection owner for request ID: ${VERIFY_REQUEST_ID}, NFT Schema: ${NFT_SCHEMA_CODE}`
  );

  // Submit verify collection owner message
  const submitVerifyCollectionOwner =
    sixprotocol.nftoracle.MessageComposer.withTypeUrl.submitVerifyCollectionOwner({
      creator: address,
      verifyRequestID: parseInt(VERIFY_REQUEST_ID),
      nftSchemaCode: NFT_SCHEMA_CODE,
      base64OriginContractInfo: BASE64_ORIGIN_CONTRACT_INFO,
    });

  const msgArray = [submitVerifyCollectionOwner];

  const memo = "Submit NFT Oracle Verify Collection Owner";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.NFT_ORACLE.SUBMIT_VERIFY_COLLECTION_OWNER || 200000,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error submitting verify collection owner: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Verify collection owner submitted successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
