import { BASE64, SixDataChainConnector } from "@sixnetwork/sixchain-client";
import exampleNewAttriubte from "./tmp/new-attribute.json";
const mnemonic = ""
const main = async () => {
    const sixConnector = new SixDataChainConnector()
    sixConnector.rpcUrl = "http://localhost:80"
    const accountSigner = await sixConnector.accounts.privateKeyToAccount(mnemonic)
    const address = (await accountSigner.getAccounts())[0].address
    const rpcClient = await sixConnector.connectRPCClient(accountSigner)

    const encodeBase64NewAction = BASE64.encode(JSON.stringify(exampleNewAttriubte))

    const msg = rpcClient.nftmngrModule.msgAddAttribute({
        creator: address,
        code: "buakaw99",
        location: "0", // if 0 it is for NFT_ATTRIBUTE and if 1 then it is for TOKEN_ATTRIBUTE 
        base64NewAttriuteDefenition: encodeBase64NewAction,
    })
    const txResponse = await rpcClient.nftmngrModule.signAndBroadcast([msg])
    console.log(txResponse)
}
main()
