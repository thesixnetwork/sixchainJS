import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import dotenv from "dotenv";

dotenv.config();

const getTotalBalance = async () => {
  const network = process.argv[2];
  let rpcEndpoint: string;

  if (network === "local") {
    // ** LOCAL TESTNET **
    rpcEndpoint = "http://localhost:26657";
  } else if (network === "fivenet") {
    // ** FIVENET **
    rpcEndpoint = "https://rpc1.fivenet.sixprotocol.net:443";
  } else if (network === "sixnet") {
    // ** SIXNET **
    rpcEndpoint = "https://sixnet-rpc.sixprotocol.net:443";
  } else {
    throw new Error("Invalid network");
  }

  const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({
    rpcEndpoint,
  });

  const totalBalance = await queryClient.cosmos.bank.v1beta1.totalSupply();

  console.log(totalBalance);
};

// create one metadata for test on production which is token_id = 2531
getTotalBalance()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
