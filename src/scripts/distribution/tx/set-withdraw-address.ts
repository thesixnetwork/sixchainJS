import { getSigningCosmosClient, cosmos } from '@sixnetwork/sixchain-sdk';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/distribution/tx/set-withdraw-address.ts fivenet || yarn ts-node ./scripts/distribution/tx/set-withdraw-address.ts fivenet"
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
      gasPrice: gasPrice
    }
  });

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];

  const withdrawAddress = "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp";

  const setWithdrawAddress = cosmos.distribution.v1beta1.MessageComposer.withTypeUrl.setWithdrawAddress({
    delegatorAddress: address,
    withdrawAddress: withdrawAddress
  });

  msgArray.push(setWithdrawAddress);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "set withdraw address"
  );

  if (txResponse.code !== 0) {
    console.error(`Error setting withdraw address: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Set withdraw address successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
