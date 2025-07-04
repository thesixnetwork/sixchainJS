import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/sixprotocol/nftadmin/tx";
import { MsgGrantPermission } from "./types/sixprotocol/nftadmin/tx";
import { MsgRevokePermission } from "./types/sixprotocol/nftadmin/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sixprotocol.nftadmin.MsgUpdateParams", MsgUpdateParams],
    ["/sixprotocol.nftadmin.MsgGrantPermission", MsgGrantPermission],
    ["/sixprotocol.nftadmin.MsgRevokePermission", MsgRevokePermission],
    
];

export { msgTypes }