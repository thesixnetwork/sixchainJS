import { sixprotocol } from "@sixnetwork/sixchain-sdk";
import { getConnectorConfig } from "../client";
import dotenv from "dotenv";

dotenv.config();
const default_schemaCode: string = "sixprotocol.sleeptest";

const NETWORK = process.argv[2]!;

const query = async (TOKEN_ID: number) => {
    const { rpcUrl, mnemonic } = await getConnectorConfig(NETWORK);
    
    const queryClient = await sixprotocol.ClientFactory.createRPCQueryClient({ rpcEndpoint: rpcUrl });
    let token;
    let isMinted = false;
    try {
        token = await queryClient.sixprotocol.nftmngr.nftData({
            nftSchemaCode: default_schemaCode,
            tokenId: TOKEN_ID.toString(),
            withGlobal: false,
        });
        if (token) {
            isMinted = true;
        }
    } catch (e: any) {
        console.log("token not found", e.message);
        token = null;
        isMinted = false;
    }

    console.log(token);
};

query(2531);
