//@ts-nocheck
import { MsgSetValidatorApproval, MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCreateWhitelistDelegator, MsgDeleteWhitelistDelegator } from "./tx";
export const AminoConverter = {
  "/cosmos.staking.v2beta1.MsgSetValidatorApproval": {
    aminoType: "cosmos-sdk/MsgSetValidatorApproval",
    toAmino: MsgSetValidatorApproval.toAmino,
    fromAmino: MsgSetValidatorApproval.fromAmino
  },
  "/cosmos.staking.v2beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: MsgCreateValidator.toAmino,
    fromAmino: MsgCreateValidator.fromAmino
  },
  "/cosmos.staking.v2beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: MsgEditValidator.toAmino,
    fromAmino: MsgEditValidator.fromAmino
  },
  "/cosmos.staking.v2beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: MsgDelegate.toAmino,
    fromAmino: MsgDelegate.fromAmino
  },
  "/cosmos.staking.v2beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: MsgBeginRedelegate.toAmino,
    fromAmino: MsgBeginRedelegate.fromAmino
  },
  "/cosmos.staking.v2beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: MsgUndelegate.toAmino,
    fromAmino: MsgUndelegate.fromAmino
  },
  "/cosmos.staking.v2beta1.MsgCreateWhitelistDelegator": {
    aminoType: "cosmos-sdk/MsgCreateWhitelistDelegator",
    toAmino: MsgCreateWhitelistDelegator.toAmino,
    fromAmino: MsgCreateWhitelistDelegator.fromAmino
  },
  "/cosmos.staking.v2beta1.MsgDeleteWhitelistDelegator": {
    aminoType: "cosmos-sdk/MsgDeleteWhitelistDelegator",
    toAmino: MsgDeleteWhitelistDelegator.toAmino,
    fromAmino: MsgDeleteWhitelistDelegator.fromAmino
  }
};