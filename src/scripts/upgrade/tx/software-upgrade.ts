import { getSigningCosmosClient, cosmos } from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "@client-util";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/upgrade/tx/software-upgrade.ts fivenet || yarn ts-node ./scripts/upgrade/tx/software-upgrade.ts fivenet"
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

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];

  // TODO: Replace with actual upgrade plan details
  const plan = {
    name: "TODO: Set upgrade name",
    time: new Date(0), // TODO: Set appropriate upgrade time, or use height-based upgrade
    height: Long.fromNumber(1000000), // TODO: Set appropriate upgrade height
    info: "TODO: Set upgrade info",
    upgradedClientState: undefined as any,
  };

  const softwareUpgrade =
    cosmos.upgrade.v1beta1.MessageComposer.withTypeUrl.softwareUpgrade({
      authority: address, // TODO: This should be the governance module address in production
      plan: plan,
    });

  msgArray.push(softwareUpgrade);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "software upgrade"
  );

  if (txResponse.code !== 0) {
    console.error(`Error submitting software upgrade: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Software upgrade successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
    console.log(e);
    process.exit(1);
  });
