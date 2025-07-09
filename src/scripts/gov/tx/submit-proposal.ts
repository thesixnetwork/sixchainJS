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
      "INPUT NETWORK BY RUNNING: bun run ./scripts/gov/tx/submit-proposal.ts fivenet || yarn ts-node ./scripts/gov/tx/submit-proposal.ts fivenet"
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

  // TODO: Replace with actual proposal details
  const submitProposal =
    cosmos.gov.v1.MessageComposer.withTypeUrl.submitProposal({
      messages: [
        {
          typeUrl: "/cosmos.upgrade.v1beta1.msgsoftwareupgrade",
          value: undefined,
        },
      ], // TODO: Add actual proposal messages
      initialDeposit: [
        {
          denom: "usix",
          amount: "10000000", // 10 SIX, TODO: Adjust based on governance params
        },
      ],
      proposer: address,
      metadata: "TODO: Add proposal metadata",
      title: "TODO: Add proposal title",
      summary: "TODO: Add proposal summary",
      expedited: false, // TODO: Set to true for expedited proposals
    });

  msgArray.push(submitProposal);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "submit proposal"
  );

  if (txResponse.code !== 0) {
    console.error(`Error submitting proposal: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Submit proposal successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
