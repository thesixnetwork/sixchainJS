import { getSigningCosmosClient, cosmos } from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice, calculateFee } from "@cosmjs/stargate";
import { getConnectorConfig } from "../client";
import dotenv from "dotenv";

dotenv.config();

const NETOWRK = process.argv[2]!;
const amount = process.argv[3]; // input six amount
const using_amount = parseInt(amount) * 1_000_000; // convert to usix
const gasPrice = GasPrice.fromString("1.25usix");

const cosmosSendAuto = async () => {
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

  // Get signing client
  const client = await getSigningCosmosClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
    gasPrice: gasPrice,
  });

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];
  const send = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
    fromAddress: address,
    toAddress: "6x1t3p2vzd7w036ahxf4kefsc9sn24pvlqphcuauv",
    amount: [
      {
        denom: "usix",
        amount: using_amount.toString(),
      },
    ],
  });
  msgArray.push(send);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "Send Balance"
  );
  if (txResponse.code !== 0) {
    console.error(`Error minting NFT: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `AUTO successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
    return true;
  }
};

const cosmosSendFixed = async () => {
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

  // Get signing client
  const client = await getSigningCosmosClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
    gasPrice: gasPrice,
  });

  // Get account address
  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];

  const send = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
    fromAddress: address,
    toAddress: "6x1t3p2vzd7w036ahxf4kefsc9sn24pvlqphcuauv",
    amount: [
      {
        denom: "usix",
        amount: using_amount.toString(),
      },
    ],
  });

  msgArray.push(send);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "send"
  );
  if (txResponse.code !== 0) {
    console.error(`Error minting NFT: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `FIXED successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
    );
    return true;
  }
};

async function main() {
  if (!NETOWRK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/deploy.ts fivenet || yarn ts-node ./scripts/deploy.ts fivenet"
    );
  }

  try {
    // Call both functions and wait for them to resolve or reject
    const [autoResponse, fixedResponse] = await Promise.all([
      cosmosSendAuto(),
      cosmosSendFixed(),
    ]);

    // Check which function had a successful response
    if (autoResponse) {
      console.log("cosmosSendAuto completed successfully:", autoResponse);
    } else if (fixedResponse) {
      console.log("cosmosSendFixed completed successfully:", fixedResponse);
    } else {
      console.log("Both functions failed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main().then(() => {
  console.log;
});
