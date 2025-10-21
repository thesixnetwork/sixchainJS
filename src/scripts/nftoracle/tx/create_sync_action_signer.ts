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
  const ACTOR_ADDRESS = process.argv[4];
  const OWNER_ADDRESS = process.argv[5];
  const REQUIRED_CONFIRM = process.argv[6] || "1";

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

  if (!ACTOR_ADDRESS) {
    throw new Error(
      "Actor Address not specified. Please provide an actor address as the third argument."
    );
  }

  if (!OWNER_ADDRESS) {
    throw new Error(
      "Owner Address not specified. Please provide an owner address as the fourth argument."
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
    `Creating sync action signer for chain: ${CHAIN}, actor: ${ACTOR_ADDRESS}, owner: ${OWNER_ADDRESS} with required confirmation: ${REQUIRED_CONFIRM}`
  );

  // Create sync action signer message
  const createSyncActionSigner =
    sixprotocol.nftoracle.MessageComposer.withTypeUrl.createSyncActionSigner({
      creator: address,
      chain: CHAIN,
      actorAddress: ACTOR_ADDRESS,
      ownerAddress: OWNER_ADDRESS,
      requiredConfirm: parseInt(REQUIRED_CONFIRM),
    });

  const msgArray = [createSyncActionSigner];

  const memo = "Create NFT Oracle Sync Action Signer";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas:
        COMMON_GAS_LIMITS.NFT_ORACLE.CREATE_SYNC_ACTION_SIGNER || 200000,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error creating sync action signer: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Sync action signer created successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
