import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgEthereumTx } from "./types/ethermint/evm/v1/tx";
import { MsgUpdateParams } from "./types/ethermint/evm/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ethermint.evm.v1.MsgEthereumTx", MsgEthereumTx],
    ["/ethermint.evm.v1.MsgUpdateParams", MsgUpdateParams],
    
];

export { msgTypes }