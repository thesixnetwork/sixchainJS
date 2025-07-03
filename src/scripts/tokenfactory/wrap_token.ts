import { getSigningSixprotocolClient, sixprotocol } from "@sixnetwork/sixchain-sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Coin } from "@cosmjs/amino";
import dotenv from "dotenv";

dotenv.config();

const wrapToken = async () => {
    const rpcEndpoint = "http://localhost:26657";

    // Create wallet from mnemonic
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
        process.env.ALICE_MNEMONIC!,
        { prefix: "6x" }
    );

    // Get signing client
    const client = await getSigningSixprotocolClient({
        rpcEndpoint,
        signer: wallet,
    });

    // Get account address
    const accounts = await wallet.getAccounts();
    const address = accounts[0].address;

    const convertAmount: Coin = {
        amount: "1000000",
        denom: "usix",
    };

    const msgWrapToken = sixprotocol.tokenmngr.MessageComposer.withTypeUrl.wrapToken({
        amount: convertAmount,
        creator: address,
        receiver: "0xB62ef83643A2F8c95dF78F694C6Bf480f5b786f2", // REMARK IF NULL VALUE Coin will convert to itself
    });

    const txResponse = await client.signAndBroadcast(
        address,
        [msgWrapToken],
        "auto",
        "memo"
    );
    console.log(txResponse);
};

wrapToken()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
