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
  const BASE64_VERIFY_REQUESTOR_SIGNATURE = process.argv[4];
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

  if (!BASE64_VERIFY_REQUESTOR_SIGNATURE) {
    throw new Error(
      "Base64 Verify Requestor Signature not specified. Please provide a base64 verify requestor signature as the third argument."
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
    `Creating verify collection owner request for NFT Schema: ${NFT_SCHEMA_CODE} with required confirmation: ${REQUIRED_CONFIRM}`
  );

  // Create verify collection owner request message
  const createVerifyCollectionOwnerRequest =
    sixprotocol.nftoracle.MessageComposer.withTypeUrl.createVerifyCollectionOwnerRequest(
      {
        creator: address,
        nftSchemaCode: NFT_SCHEMA_CODE,
        base64VerifyRequestorSignature: BASE64_VERIFY_REQUESTOR_SIGNATURE,
        requiredConfirm: parseInt(REQUIRED_CONFIRM),
      }
    );

  const msgArray = [createVerifyCollectionOwnerRequest];

  const memo = "Create NFT Oracle Verify Collection Owner Request";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas:
        COMMON_GAS_LIMITS.NFT_ORACLE.CREATE_VERIFY_COLLECTION_OWNER_REQUEST ||
        200000,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(
      `Error creating verify collection owner request: ${txResponse.rawLog}`
    );
    return false;
  } else {
    console.log(
      `Verify collection owner request created successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
