import { getSigningEthermintClient, ethermint } from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { getConnectorConfig } from "@client-util";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const NETWORK = process.argv[2];

  if (!NETWORK) {
    throw new Error(
      "INPUT NETWORK BY RUNNING: bun run ./scripts/feegrant/tx/grant.ts fivenet || yarn ts-node ./scripts/feegrant/tx/grant.ts fivenet"
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const gasPrice = GasPrice.fromString("1.25usix");

  // Create wallet from mnemonic
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });

  // Get signing client
  const client = await getSigningEthermintClient({
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

  const granteeAddress = "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp";

  // Basic allowance grant
  const basicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
    value: cosmos.feegrant.v1beta1.BasicAllowance.encode({
      spendLimit: [
        {
          denom: "usix",
          amount: "1000000", // 1 SIX
        },
      ],
      expiration: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
    }).finish(),
  };

  const grantAllowance =
    cosmos.feegrant.v1beta1.MessageComposer.withTypeUrl.grantAllowance({
      granter: address,
      grantee: granteeAddress,
      allowance: basicAllowance,
    });

  msgArray.push(grantAllowance);

  const txResponse = await client.signAndBroadcast(
    address,
    msgArray,
    "auto",
    "feegrant grant"
  );

  if (txResponse.code !== 0) {
    console.error(`Error granting fee allowance: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Grant allowance successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
