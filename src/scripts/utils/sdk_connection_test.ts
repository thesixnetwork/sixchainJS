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

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETOWRK);
  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });

  for (let i = 0; i < 10; i++) {
    // Get signing client
    try {
      const client = await getSigningCosmosClient({
        rpcEndpoint: rpcUrl,
        signer: wallet,
        options: {
          gasPrice: gasPrice,
        },
      });

      console.log("Connection success", i);
      client.disconnect();
    } catch (error) {
      console.log(error);
    }
  }
}

main()
  .then(() => {
    console.log;
  })
  .catch((err: any) => {
    console.log(err);
  });
