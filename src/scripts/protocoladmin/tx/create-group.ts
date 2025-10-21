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
  const client = await getSigningSixprotocolClient({
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

  const msgCreateGroup =
    sixprotocol.protocoladmin.MessageComposer.withTypeUrl.createGroup({
      creator: address,
      name: "token.admin",
    });

  msgArray.push(msgCreateGroup);

  const memo = "cretea new group";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.PROTOCOMADMIN.CREATE_GROUP,
      denom: "usix",
    }
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
