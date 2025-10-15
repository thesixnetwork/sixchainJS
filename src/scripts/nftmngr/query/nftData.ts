import { SixDataChainConnector, fee } from "@thesixnetwork/sixchain-client";
import { getConnectorConfig } from "../../client";
import dotenv from "dotenv";

dotenv.config();
const default_schemaCode: string = "sixprotocol.divine_elite";

const split_schema = default_schemaCode.split(".");
const _name = split_schema[1];
const org_name = process.env.ORG_NAME;
let schemaCode: string;
schemaCode = `${org_name}.${_name}`;

const NETWORK = process.argv[2]!;
const TOKENID = process.argv[3]!;

const query = async (TOKEN_ID: number) => {
  // console.time("Minting time");
  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = rpcUrl;
  sixConnector.apiUrl = apiUrl;

  const accountSigner =
    await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);
  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: fee.GasPrice.fromString("1.25usix"),
  });

  // find the token has been minted or not
  const apiClient = await sixConnector.connectAPIClient();
  let token;
  let isMinted = false;
  try {
    token = await apiClient.nftmngrModule.queryNftData(
      schemaCode,
      TOKEN_ID.toString()
    );
    if (token.data) {
      isMinted = true;
    }
  } catch (e: any) {
    console.log("token not found", e.error);
    token = null;
    isMinted = false;
  }

  console.log(token);
};

query(Number(TOKENID));
