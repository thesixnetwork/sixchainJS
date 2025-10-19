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
      "INPUT NETWORK BY RUNNING: bun run ./scripts/feegrant/tx/grant.ts fivenet || yarn ts-node ./scripts/feegrant/tx/grant.ts fivenet"
    );
  }

  const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const gasPrice = GasPrice.fromString("1.25usix");

  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: "6x",
  });

  const client = await getSigningSixprotocolClient({
    rpcEndpoint: rpcUrl,
    signer: wallet,
    options: {
      gasPrice: gasPrice,
    },
  });

  const accounts = await wallet.getAccounts();
  const address = accounts[0].address;

  let msgArray: Array<EncodeObject> = [];
  const granteeAddress = "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp";

  const revokeOracleAdmin =
    sixprotocol.nftadmin.MessageComposer.withTypeUrl.revokePermission({
      creator: address,
      revokee: granteeAddress,
      name: "oracle",
    });

  msgArray.push(revokeOracleAdmin);

  const memo = "nft admin revoke";
  let txResponse = await signAndBroadcastWithRetry(
    client,
    address,
    msgArray,
    memo,
    {
      gasMultiplier: 1.5,
      gasPrice: 1.25,
      fallbackGas: COMMON_GAS_LIMITS.NFT_ADMIN.REVOKE,
      denom: "usix",
    }
  );

  if (txResponse.code !== 0) {
    console.error(`Error granting nft admin: ${txResponse.rawLog}`);
    return false;
  } else {
    console.log(
      `Grant nft admin successful: gasUsed=${txResponse.gasUsed}, gasWanted=${txResponse.gasWanted}, hash=${txResponse.transactionHash}`
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
