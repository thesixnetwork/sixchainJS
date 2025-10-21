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
  const OLD_DELEGATOR = process.argv[3];
  const NEW_DELEGATOR = process.argv[4];

  if (!NETWORK) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet)."
    );
  }

  if (!OLD_DELEGATOR) {
    throw new Error(
      "Old delegator address not specified. Please provide old delegator address as the second argument."
    );
  }

  if (!NEW_DELEGATOR) {
    throw new Error(
      "New delegator address not specified. Please provide new delegator address as the third argument."
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

  console.log(`Migrating delegation from ${OLD_DELEGATOR} to ${NEW_DELEGATOR}`);

  // Create migrate delegation message
  const migrateDelegation =
    sixprotocol.tokenmngr.MessageComposer.withTypeUrl.migrateDelegation({
      creator: address,
      ethAddress: NEW_DELEGATOR,
    });

  const msgArray = [migrateDelegation];

  const memo = `Migrate delegation from ${OLD_DELEGATOR} to ${NEW_DELEGATOR}`;
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.STAKING.DELEGATE || 200000,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error migrating delegation: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Delegation migrated successfully: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
