//@ts-nocheck
import {
  MsgUpdateParams,
  MsgCreateGroup,
  MsgUpdateGroup,
  MsgDeleteGroup,
  MsgAddAdminToGroup,
  MsgRemoveAdminFromGroup,
} from "./tx";
export const AminoConverter = {
  "/sixprotocol.protocoladmin.MsgUpdateParams": {
    aminoType: "sixprotocol/x/protocoladmin/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sixprotocol.protocoladmin.MsgCreateGroup": {
    aminoType: "/sixprotocol.protocoladmin.MsgCreateGroup",
    toAmino: MsgCreateGroup.toAmino,
    fromAmino: MsgCreateGroup.fromAmino,
  },
  "/sixprotocol.protocoladmin.MsgUpdateGroup": {
    aminoType: "/sixprotocol.protocoladmin.MsgUpdateGroup",
    toAmino: MsgUpdateGroup.toAmino,
    fromAmino: MsgUpdateGroup.fromAmino,
  },
  "/sixprotocol.protocoladmin.MsgDeleteGroup": {
    aminoType: "/sixprotocol.protocoladmin.MsgDeleteGroup",
    toAmino: MsgDeleteGroup.toAmino,
    fromAmino: MsgDeleteGroup.fromAmino,
  },
  "/sixprotocol.protocoladmin.MsgAddAdminToGroup": {
    aminoType: "/sixprotocol.protocoladmin.MsgAddAdminToGroup",
    toAmino: MsgAddAdminToGroup.toAmino,
    fromAmino: MsgAddAdminToGroup.fromAmino,
  },
  "/sixprotocol.protocoladmin.MsgRemoveAdminFromGroup": {
    aminoType: "/sixprotocol.protocoladmin.MsgRemoveAdminFromGroup",
    toAmino: MsgRemoveAdminFromGroup.toAmino,
    fromAmino: MsgRemoveAdminFromGroup.fromAmino,
  },
};
