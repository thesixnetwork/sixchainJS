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
  const CHAIN = process.argv[3];
  const RPC_ENDPOINT = process.argv[4];
  const CONTRACT_ADDRESS = process.argv[5];
  const CONTRACT_NAME = process.argv[6];
  const CONTRACT_OWNER = process.argv[7];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!CHAIN) {
    throw new Error(
      "Chain not specified. Please provide a chain as the second argument."
    );
  }

  if (!RPC_ENDPOINT) {
    throw new Error(
      "RPC Endpoint not specified. Please provide an RPC endpoint as the third argument."
    );
  }

  if (!CONTRACT_ADDRESS) {
    throw new Error(
      "Contract Address not specified. Please provide a contract address as the fourth argument."
    );
  }

  if (!CONTRACT_NAME) {
    throw new Error(
      "Contract Name not specified. Please provide a contract name as the fifth argument."
    );
  }

  if (!CONTRACT_OWNER) {
    throw new Error(
      "Contract Owner not specified. Please provide a contract owner as the sixth argument."
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
    `Creating action signer config for chain: ${CHAIN}, contract: ${CONTRACT_NAME} at ${CONTRACT_ADDRESS}`
  );

  // Create action signer config message
  const createActionSignerConfig =
    sixprotocol.nftoracle.MessageComposer.withTypeUrl.createActionSignerConfig({
      creator: address,
      chain: CHAIN,
      rpcEndpoint: RPC_ENDPOINT,
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      contractOwner: CONTRACT_OWNER,
    });

  const msgArray = [createActionSignerConfig];

  const memo = "Create NFT Oracle Action Signer Config";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas:
        COMMON_GAS_LIMITS.NFT_ORACLE.CREATE_ACTION_SIGNER_CONFIG || 200000,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error creating action signer config: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Action signer config created successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
