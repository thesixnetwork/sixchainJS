import { SixDataChainConnector } from "@sixnetwork/sixchain-client";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "../client";
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

  console.time("RPC")
  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(NETOWRK);
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = rpcUrl
  sixConnector.apiUrl = apiUrl;
  const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);

  for (let i = 0; i < 10; i++) {
    // Get signing client
    try {
      const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
        gasPrice: GasPrice.fromString("1.25usix"),
      });
      if (rpcClient) {
        console.log("Connection success", i);
      }
    } catch (error) {
      console.log(error);
      await new Promise(r => setTimeout(r, 10000));
    }
  }
  console.timeEnd("RPC")
}

main()
  .then(() => {
    console.log;
  })
  .catch((err: any) => {
    console.log(err);
  });

