import { getSigningCosmosClient, cosmos } from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const NETOWRK = process.argv[2]!;
const gasPrice = GasPrice.fromString("1.25usix");

async function main() {
  if (!NETOWRK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/deploy.ts fivenet || yarn ts-node ./scripts/deploy.ts fivenet"
    );
  }

  console.time("RPC");
  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(NETOWRK);
  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });
  const client = await getSigningCosmosClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
    options: {
      gasPrice: gasPrice,
    },
  });

  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  for (let i = 0; i < 10; i++) {
    // Get signing client
    try {
      const rpcClient = await client.getBlock()
      if (rpcClient) {
        console.log("Connection success", i, "Block", rpcClient.header.height);
      }
    } catch (error) {
      console.log(error);
      await new Promise((r) => setTimeout(r, 10000));
    }
  }
  console.timeEnd("RPC");
}

main()
  .then(() => {
    console.log;
  })
  .catch((err: any) => {
    console.log(err);
  });
