//@ts-nocheck
import { MsgGrantPermission, MsgRevokePermission } from "./tx";
export const AminoConverter = {
  "/thesixnetwork.sixnft.nftadmin.MsgGrantPermission": {
    aminoType: "/thesixnetwork.sixnft.nftadmin.MsgGrantPermission",
    toAmino: MsgGrantPermission.toAmino,
    fromAmino: MsgGrantPermission.fromAmino
  },
  "/thesixnetwork.sixnft.nftadmin.MsgRevokePermission": {
    aminoType: "/thesixnetwork.sixnft.nftadmin.MsgRevokePermission",
    toAmino: MsgRevokePermission.toAmino,
    fromAmino: MsgRevokePermission.fromAmino
  }
};