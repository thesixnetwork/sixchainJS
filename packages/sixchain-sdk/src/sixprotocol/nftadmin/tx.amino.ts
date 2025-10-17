//@ts-nocheck
import { MsgUpdateParams, MsgGrantPermission, MsgRevokePermission } from "./tx";
export const AminoConverter = {
  "/sixprotocol.nftadmin.MsgUpdateParams": {
    aminoType: "sixprotocol/x/nftadmin/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/sixprotocol.nftadmin.MsgGrantPermission": {
    aminoType: "/sixprotocol.nftadmin.MsgGrantPermission",
    toAmino: MsgGrantPermission.toAmino,
    fromAmino: MsgGrantPermission.fromAmino,
  },
  "/sixprotocol.nftadmin.MsgRevokePermission": {
    aminoType: "/sixprotocol.nftadmin.MsgRevokePermission",
    toAmino: MsgRevokePermission.toAmino,
    fromAmino: MsgRevokePermission.fromAmino,
  },
};
