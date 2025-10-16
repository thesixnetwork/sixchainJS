//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Token, TokenAmino, TokenSDKType } from "./token";
import { Mintperm, MintpermAmino, MintpermSDKType } from "./mintperm";
import { TokenBurn, TokenBurnAmino, TokenBurnSDKType } from "./token_burn";
import { Options, OptionsAmino, OptionsSDKType } from "./options";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the tokenmngr module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  tokenList: Token[];
  mintpermList: Mintperm[];
  tokenBurnList: TokenBurn[];
  options?: Options;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sixprotocol.tokenmngr.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the tokenmngr module's genesis state.
 * @name GenesisStateAmino
 * @package sixprotocol.tokenmngr
 * @see proto type: sixprotocol.tokenmngr.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  tokenList?: TokenAmino[];
  mintpermList?: MintpermAmino[];
  tokenBurnList?: TokenBurnAmino[];
  options?: OptionsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/sixprotocol.tokenmngr.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the tokenmngr module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  tokenList: TokenSDKType[];
  mintpermList: MintpermSDKType[];
  tokenBurnList: TokenBurnSDKType[];
  options?: OptionsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokenList: [],
    mintpermList: [],
    tokenBurnList: [],
    options: undefined
  };
}
export const GenesisState = {
  typeUrl: "/sixprotocol.tokenmngr.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenList) {
      Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.mintpermList) {
      Mintperm.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.tokenBurnList) {
      TokenBurn.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.options !== undefined) {
      Options.encode(message.options, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenList.push(Token.decode(reader, reader.uint32()));
          break;
        case 3:
          message.mintpermList.push(Mintperm.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenBurnList.push(TokenBurn.decode(reader, reader.uint32()));
          break;
        case 5:
          message.options = Options.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenList = object.tokenList?.map(e => Token.fromPartial(e)) || [];
    message.mintpermList = object.mintpermList?.map(e => Mintperm.fromPartial(e)) || [];
    message.tokenBurnList = object.tokenBurnList?.map(e => TokenBurn.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? Options.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.tokenList = object.tokenList?.map(e => Token.fromAmino(e)) || [];
    message.mintpermList = object.mintpermList?.map(e => Mintperm.fromAmino(e)) || [];
    message.tokenBurnList = object.tokenBurnList?.map(e => TokenBurn.fromAmino(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = Options.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.tokenList) {
      obj.tokenList = message.tokenList.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.tokenList = message.tokenList;
    }
    if (message.mintpermList) {
      obj.mintpermList = message.mintpermList.map(e => e ? Mintperm.toAmino(e) : undefined);
    } else {
      obj.mintpermList = message.mintpermList;
    }
    if (message.tokenBurnList) {
      obj.tokenBurnList = message.tokenBurnList.map(e => e ? TokenBurn.toAmino(e) : undefined);
    } else {
      obj.tokenBurnList = message.tokenBurnList;
    }
    obj.options = message.options ? Options.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/sixprotocol.tokenmngr.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};