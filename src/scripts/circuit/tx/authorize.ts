import { getSigningCosmosClient, cosmos } from "@sixnetwork/sixchain-sdk";
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
      "INPUT NETWORK BY RUNNING: bun run ./scripts/circuit/tx/authorize.ts fivenet || yarn ts-node ./scripts/circuit/tx/authorize.ts fivenet"
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

  const authorize =
    cosmos.circuit.v1.MessageComposer.withTypeUrl.authorizeCircuitBreaker({
      granter: address,
      grantee: "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq",
      permissions: {
        level: 1,
        limitTypeUrls: ["/cosmos.bank.v1beta1.MsgSend"],
      },
    });

  msgArray.push(authorize);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "circuit authorize"
  );

  if (txResponse.code !== 0) {
    console.error(`Error in circuit authorize: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Authorize successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
