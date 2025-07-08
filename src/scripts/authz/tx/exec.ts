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
      "INPUT NETWORK BY RUNNING: bun run ./scripts/authz/tx/exec.ts fivenet || yarn ts-node ./scripts/authz/tx/exec.ts fivenet"
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

  // TODO: Replace with actual messages to execute on behalf of granter
  const messagesToExecute = [
    {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: cosmos.bank.v1beta1.MsgSend.encode({
        fromAddress: "6x1example_granter_address", // TODO: Replace with granter address
        toAddress: "6x1example_recipient_address", // TODO: Replace with recipient address
        amount: [
          {
            denom: "usix",
            amount: "1000000", // 1 SIX
          },
        ],
      }).finish()
    }
  ];

  const exec = cosmos.authz.v1beta1.MessageComposer.withTypeUrl.exec({
    grantee: address,
    msgs: messagesToExecute
  });

  msgArray.push(exec);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "authz exec"
  );

  if (txResponse.code !== 0) {
    console.error(`Error in authz exec: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Exec successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
