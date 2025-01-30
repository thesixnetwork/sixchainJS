import { SixDataChainConnector, ITxNFTmngr, fee } from "@thesixnetwork/sixchain-client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "../client";
import { GasPrice } from "@cosmjs/stargate";
import divine_elite from "../../resources/schemas/divineelite-nft-schema.json";
import preventive from "../../resources/schemas/preventive-nft-schema.json";
import membership from "../../resources/schemas/membership-nft-schema.json";
import lifestyle from "../../resources/schemas/lifestyle-nft-schema.json";
import dotenv from "dotenv";
dotenv.config();


const schemaList = [
    divine_elite,
    preventive,
    membership,
    lifestyle
];

const main = async () => {
    const network = process.argv[2];
    const propId = process.argv[3];

    if (!propId || propId == "") {
        throw new Error(
            "Make sure to input proposal Id and Schema name"
        );
    }

    let msgArray: EncodeObject[] = [];
    if (!network) {
        throw new Error(
            "Network not specified. Please provide a network as an argument (local, fivenet, sixnet).",
        );
    }
    const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(network);
    const sixConnector = new SixDataChainConnector();
    sixConnector.rpcUrl = rpcUrl;
    sixConnector.apiUrl = apiUrl;
    const accountSigner =
        await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);
    const address = (await accountSigner.getAccounts())[0].address;
    const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
        gasPrice: GasPrice.fromString("1.25usix"),
    });

    for (let i = 0; i < schemaList.length; i++) {
        let schema_code = schemaList[i].code;
        const split_schema = schema_code.split(".");
        const _name = split_schema[1];
        const org_name = process.env.ORG_NAME;
        let schemaCode: string;
        schemaCode = `${org_name}.${_name}`;
        const voteCreateSchema: ITxNFTmngr.MsgVoteVirtualSchemaProposal = {
            creator: address,
            id: String(propId),
            nftSchemaCode: schemaCode,
            option: 2
        }

        msgArray.push(rpcClient.nftmngrModule.msgVoteVirtualSchemaProposal(voteCreateSchema))
    }

    try {
        const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
            fee: "auto",
            memo: "vote create virtual schema"
        })
        console.log(txResponse);
    } catch (err) {
        console.error("Transaction failed:", err);
    }
}

main().catch((err) => {
    console.error("Error in main execution:", err);
});