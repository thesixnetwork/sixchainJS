import { getSigningCosmosClient, cosmos } from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "../../client";
import Long from "long";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/vesting/tx/create-vesting-account.ts fivenet || yarn ts-node ./scripts/vesting/tx/create-vesting-account.ts fivenet"
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

  // TODO: Replace with actual vesting account details
  const toAddress = "6x1example_vesting_account_address";
  const amount = [
    {
      denom: "usix",
      amount: "1000000000", // 1000 SIX
    },
  ];
  const endTime = Long.fromNumber(
    Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60
  ); // 1 year from now
  const delayed = false; // TODO: Set to true for delayed vesting

  const createVestingAccount =
    cosmos.vesting.v1beta1.MessageComposer.withTypeUrl.createVestingAccount({
      fromAddress: address,
      toAddress: toAddress,
      amount: amount,
      endTime: endTime,
      delayed: delayed,
    });

  msgArray.push(createVestingAccount);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "create vesting account"
  );

  if (txResponse.code !== 0) {
    console.error(`Error creating vesting account: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Create vesting account successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
