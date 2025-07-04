import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/sixprotocol/protocoladmin/tx";
import { MsgCreateGroup } from "./types/sixprotocol/protocoladmin/tx";
import { MsgUpdateGroup } from "./types/sixprotocol/protocoladmin/tx";
import { MsgDeleteGroup } from "./types/sixprotocol/protocoladmin/tx";
import { MsgAddAdminToGroup } from "./types/sixprotocol/protocoladmin/tx";
import { MsgRemoveAdminFromGroup } from "./types/sixprotocol/protocoladmin/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sixprotocol.protocoladmin.MsgUpdateParams", MsgUpdateParams],
    ["/sixprotocol.protocoladmin.MsgCreateGroup", MsgCreateGroup],
    ["/sixprotocol.protocoladmin.MsgUpdateGroup", MsgUpdateGroup],
    ["/sixprotocol.protocoladmin.MsgDeleteGroup", MsgDeleteGroup],
    ["/sixprotocol.protocoladmin.MsgAddAdminToGroup", MsgAddAdminToGroup],
    ["/sixprotocol.protocoladmin.MsgRemoveAdminFromGroup", MsgRemoveAdminFromGroup],
    
];

export { msgTypes }