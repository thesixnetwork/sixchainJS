import { SixDataChainConnector, ITxNFTmngr, fee } from "@sixnetwork/sixchain-client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { getConnectorConfig } from "../client";
import { GasPrice } from "@cosmjs/stargate";
import dotenv from "dotenv";
import { AllowedActioner } from "@sixnetwork/sixchain-client/modules/thesixnetwork/six-protocol/thesixnetwork.sixprotocol.nftmngr/module/types/nftmngr/action";
dotenv.config();

const main = async () => {
    const network = process.argv[2];

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


    let schema_name = "divineXmembership"

    const virtualSchemaProp: ITxNFTmngr.MsgProposalVirtualSchema = {
        creator: address,
        virtualNftSchemaCode: schema_name,
        registry: [{
            nftSchemaCode: "sixprotocol.divine_elite",
        }, {
            nftSchemaCode: "sixprotocol.membership",
        }],
        actions: [
            {
                name: "bridge_4_to_2",
                allowed_actioner: AllowedActioner.ALLOWED_ACTIONER_SYSTEM_ONLY,
                desc: "Bridge service 4 to service 2",
                disable: false,
                params: [
                    {
                        name: "amount",
                        desc: "Service 4 Amount",
                        data_type: "number",
                        required: true,
                        default_value: "0"
                    }
                ],
                then: [
                    "ser4value = meta.GetNumber('sixprotocol.divine_elite','service_4')",
                    "ser2Value = meta.GetNumber('sixprotocol.membership','service_2')",
                    "toSetValue = ser2Value + params['amount'].GetNumber()",
                    "meta.SetNumber('sixprotocol.membership','service_2', toSetValue)",
                    "meta.SetNumber('sixprotocol.divine_elite','service_4', ser4value - params['amount'].GetNumber())"
                ],
                when: "meta.GetNumber('sixprotocol.divine_elite','service_4') >= params['amount'].GetNumber()"
            },
            {
                name: "bridge_12_to_17",
                allowed_actioner: AllowedActioner.ALLOWED_ACTIONER_SYSTEM_ONLY,
                desc: "Bridge service 4 to service 2",
                disable: false,
                params: [
                    {
                        name: "amount",
                        desc: "Service 4 Amount",
                        data_type: "number",
                        required: true,
                        default_value: "0"
                    }
                ],
                then: [
                    "ser12value = meta.GetNumber('sixprotocol.preventive','service_12')",
                    "ser17value = meta.GetNumber('sixprotocol.lifestyle','service_17')",
                    "toSetValue = ser12value + params['amount'].GetNumber()",
                    "meta.SetNumber('sixprotocol.preventive','service_12', toSetValue)",
                    "meta.SetNumber('sixprotocol.lifestyle','service_17', ser17value - params['amount'].GetNumber())"
                ],
                when: "meta.GetNumber('sixprotocol.preventive','service_12') >= params['amount'].GetNumber()"
            },
            {
                name: "bridge_3_to_1",
                allowed_actioner: AllowedActioner.ALLOWED_ACTIONER_SYSTEM_ONLY,
                desc: "Bridge service 1 to service 4",
                disable: false,
                params: [],
                then: [
                    "ser3value = meta.GetNumber('sixprotocol.divine_elite','service_3')",
                    "ser1Value = meta.GetNumber('sixprotocol.membership','service_1')",
                    "toSetValue = ser3value + ser1Value",
                    "meta.SetNumber('sixprotocol.membership','service_1', toSetValue)",
                    "meta.SetNumber('sixprotocol.divine_elite','service_3', 0)"
                ],
                when: "true"
            },
            {
                name: "native_bridge",
                allowed_actioner: AllowedActioner.ALLOWED_ACTIONER_SYSTEM_ONLY,
                desc: "Send Value across schema",
                disable: false,
                params: [
                    {
                        name: "amount",
                        desc: "Service 7 Amount",
                        data_type: "number",
                        required: true,
                        default_value: "0"
                    }
                ],
                then: [
                    "meta.ConvertNumberAttribute('sixprotocol.divine_elite','service_7','sixprotocol.membership','service_x', params['amount'].GetNumber())"
                ],
                when: "true"
            },
            {
                name: "transform",
                allowed_actioner: AllowedActioner.ALLOWED_ACTIONER_SYSTEM_ONLY,
                desc: "Transform Metadata Image",
                disable: false,
                params: [],
                then: [
                    "meta.SetImage('sixprotocol.divine_elite','https://image-trasformed-divine')",
                    "meta.SetImage('sixprotocol.membership','https://image-trasformed-membership')"
                ],
                when: "true"
            }
        ],
        enable: true,
        executors: [
            "6x1t3p2vzd7w036ahxf4kefsc9sn24pvlqphcuauv",
            "6x13g50hqdqsjk85fmgqz2h5xdxq49lsmjdwlemsp",
            "6x1myrlxmmasv6yq4axrxmdswj9kv5gc0ppx95rmq",
            "6x1adj7d8vthms0qw7p7706mwyzmpnwrgugegehg8",
            "6x1pgdtamdyl8pgl5tqnnrxs554tmspktzcexv039"
        ],
        proposalType: 0
    }

    msgArray.push(rpcClient.nftmngrModule.msgProposalVirtualSchema(virtualSchemaProp))


    try {
        const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
            fee: "auto",
            memo: "create virtual schema proposal"
        })
        console.log(txResponse);
    } catch (err) {
        console.error("Transaction failed:", err);
    }

}

main().catch((err) => {
    console.error("Error in main execution:", err);
});
