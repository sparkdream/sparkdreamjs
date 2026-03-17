//@ts-nocheck
import { Params, ParamsAmino, SessionOperationalParams, SessionOperationalParamsAmino } from "./params";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/session/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * @name MsgUpdateParamsResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParams
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParams {
  /**
   * authority is the address authorized to update operational params.
   * Can be: governance authority, Commons Council policy address,
   * or Operations Committee policy address.
   */
  authority: string;
  /**
   * operational_params defines the operational parameters to update.
   */
  operationalParams: SessionOperationalParams;
}
export interface MsgUpdateOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParams";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParamsAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParamsAmino {
  /**
   * authority is the address authorized to update operational params.
   * Can be: governance authority, Commons Council policy address,
   * or Operations Committee policy address.
   */
  authority?: string;
  /**
   * operational_params defines the operational parameters to update.
   */
  operational_params: SessionOperationalParamsAmino;
}
export interface MsgUpdateOperationalParamsAminoMsg {
  type: "sparkdream/x/session/MsgUpdateOperationalParams";
  value: MsgUpdateOperationalParamsAmino;
}
/**
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponse {}
export interface MsgUpdateOperationalParamsResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateOperationalParamsResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponseAmino {}
export interface MsgUpdateOperationalParamsResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgUpdateOperationalParamsResponse";
  value: MsgUpdateOperationalParamsResponseAmino;
}
/**
 * MsgCreateSession creates a new session key delegation. Signed by the granter.
 * @name MsgCreateSession
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateSession
 */
export interface MsgCreateSession {
  granter: string;
  grantee: string;
  allowedMsgTypes: string[];
  spendLimit: Coin;
  expiration: Date;
  maxExecCount: bigint;
}
export interface MsgCreateSessionProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgCreateSession";
  value: Uint8Array;
}
/**
 * MsgCreateSession creates a new session key delegation. Signed by the granter.
 * @name MsgCreateSessionAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateSession
 */
export interface MsgCreateSessionAmino {
  granter?: string;
  grantee?: string;
  allowed_msg_types?: string[];
  spend_limit?: CoinAmino;
  expiration?: string;
  max_exec_count?: string;
}
export interface MsgCreateSessionAminoMsg {
  type: "/sparkdream.session.v1.MsgCreateSession";
  value: MsgCreateSessionAmino;
}
/**
 * @name MsgCreateSessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateSessionResponse
 */
export interface MsgCreateSessionResponse {}
export interface MsgCreateSessionResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgCreateSessionResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateSessionResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateSessionResponse
 */
export interface MsgCreateSessionResponseAmino {}
export interface MsgCreateSessionResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgCreateSessionResponse";
  value: MsgCreateSessionResponseAmino;
}
/**
 * MsgRevokeSession revokes an active session. Signed by the granter.
 * @name MsgRevokeSession
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeSession
 */
export interface MsgRevokeSession {
  granter: string;
  grantee: string;
}
export interface MsgRevokeSessionProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgRevokeSession";
  value: Uint8Array;
}
/**
 * MsgRevokeSession revokes an active session. Signed by the granter.
 * @name MsgRevokeSessionAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeSession
 */
export interface MsgRevokeSessionAmino {
  granter?: string;
  grantee?: string;
}
export interface MsgRevokeSessionAminoMsg {
  type: "/sparkdream.session.v1.MsgRevokeSession";
  value: MsgRevokeSessionAmino;
}
/**
 * @name MsgRevokeSessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeSessionResponse
 */
export interface MsgRevokeSessionResponse {}
export interface MsgRevokeSessionResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgRevokeSessionResponse";
  value: Uint8Array;
}
/**
 * @name MsgRevokeSessionResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeSessionResponse
 */
export interface MsgRevokeSessionResponseAmino {}
export interface MsgRevokeSessionResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgRevokeSessionResponse";
  value: MsgRevokeSessionResponseAmino;
}
/**
 * MsgExecSession executes messages using a session key. Signed by the grantee.
 * @name MsgExecSession
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgExecSession
 */
export interface MsgExecSession {
  grantee: string;
  granter: string;
  /**
   * Inner messages to execute on behalf of the granter (max 10).
   */
  msgs: Any[];
}
export interface MsgExecSessionProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgExecSession";
  value: Uint8Array;
}
/**
 * MsgExecSession executes messages using a session key. Signed by the grantee.
 * @name MsgExecSessionAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgExecSession
 */
export interface MsgExecSessionAmino {
  grantee?: string;
  granter?: string;
  /**
   * Inner messages to execute on behalf of the granter (max 10).
   */
  msgs?: AnyAmino[];
}
export interface MsgExecSessionAminoMsg {
  type: "/sparkdream.session.v1.MsgExecSession";
  value: MsgExecSessionAmino;
}
/**
 * @name MsgExecSessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgExecSessionResponse
 */
export interface MsgExecSessionResponse {}
export interface MsgExecSessionResponseProtoMsg {
  typeUrl: "/sparkdream.session.v1.MsgExecSessionResponse";
  value: Uint8Array;
}
/**
 * @name MsgExecSessionResponseAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgExecSessionResponse
 */
export interface MsgExecSessionResponseAmino {}
export interface MsgExecSessionResponseAminoMsg {
  type: "/sparkdream.session.v1.MsgExecSessionResponse";
  value: MsgExecSessionResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.session.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/session/MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "sparkdream/x/session/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * @name MsgUpdateParamsResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.session.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParams(): MsgUpdateOperationalParams {
  return {
    authority: "",
    operationalParams: SessionOperationalParams.fromPartial({})
  };
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * Authorized: Commons Council Operations Committee (via IsCouncilAuthorized).
 * @name MsgUpdateOperationalParams
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateOperationalParams
 */
export const MsgUpdateOperationalParams = {
  typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParams",
  aminoType: "sparkdream/x/session/MsgUpdateOperationalParams",
  encode(message: MsgUpdateOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operationalParams !== undefined) {
      SessionOperationalParams.encode(message.operationalParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operationalParams = SessionOperationalParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateOperationalParams>): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    message.authority = object.authority ?? "";
    message.operationalParams = object.operationalParams !== undefined && object.operationalParams !== null ? SessionOperationalParams.fromPartial(object.operationalParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOperationalParamsAmino): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operational_params !== undefined && object.operational_params !== null) {
      message.operationalParams = SessionOperationalParams.fromAmino(object.operational_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operational_params = message.operationalParams ? SessionOperationalParams.toAmino(message.operationalParams) : SessionOperationalParams.toAmino(SessionOperationalParams.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsAminoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/session/MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsProtoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParams): Uint8Array {
    return MsgUpdateOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParamsResponse(): MsgUpdateOperationalParamsResponse {
  return {};
}
/**
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgUpdateOperationalParamsResponse
 */
export const MsgUpdateOperationalParamsResponse = {
  typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParamsResponse",
  encode(_: MsgUpdateOperationalParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateOperationalParamsResponse>): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOperationalParamsResponseAmino): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsResponseAminoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsResponseProtoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParamsResponse): Uint8Array {
    return MsgUpdateOperationalParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgUpdateOperationalParamsResponse",
      value: MsgUpdateOperationalParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSession(): MsgCreateSession {
  return {
    granter: "",
    grantee: "",
    allowedMsgTypes: [],
    spendLimit: Coin.fromPartial({}),
    expiration: new Date(),
    maxExecCount: BigInt(0)
  };
}
/**
 * MsgCreateSession creates a new session key delegation. Signed by the granter.
 * @name MsgCreateSession
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateSession
 */
export const MsgCreateSession = {
  typeUrl: "/sparkdream.session.v1.MsgCreateSession",
  encode(message: MsgCreateSession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    for (const v of message.allowedMsgTypes) {
      writer.uint32(26).string(v!);
    }
    if (message.spendLimit !== undefined) {
      Coin.encode(message.spendLimit, writer.uint32(34).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(42).fork()).ldelim();
    }
    if (message.maxExecCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxExecCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateSession {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowedMsgTypes.push(reader.string());
          break;
        case 4:
          message.spendLimit = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.maxExecCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateSession>): MsgCreateSession {
    const message = createBaseMsgCreateSession();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowedMsgTypes = object.allowedMsgTypes?.map(e => e) || [];
    message.spendLimit = object.spendLimit !== undefined && object.spendLimit !== null ? Coin.fromPartial(object.spendLimit) : undefined;
    message.expiration = object.expiration ?? undefined;
    message.maxExecCount = object.maxExecCount !== undefined && object.maxExecCount !== null ? BigInt(object.maxExecCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateSessionAmino): MsgCreateSession {
    const message = createBaseMsgCreateSession();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    message.allowedMsgTypes = object.allowed_msg_types?.map(e => e) || [];
    if (object.spend_limit !== undefined && object.spend_limit !== null) {
      message.spendLimit = Coin.fromAmino(object.spend_limit);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    if (object.max_exec_count !== undefined && object.max_exec_count !== null) {
      message.maxExecCount = BigInt(object.max_exec_count);
    }
    return message;
  },
  toAmino(message: MsgCreateSession): MsgCreateSessionAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    if (message.allowedMsgTypes) {
      obj.allowed_msg_types = message.allowedMsgTypes.map(e => e);
    } else {
      obj.allowed_msg_types = message.allowedMsgTypes;
    }
    obj.spend_limit = message.spendLimit ? Coin.toAmino(message.spendLimit) : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    obj.max_exec_count = message.maxExecCount !== BigInt(0) ? message.maxExecCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSessionAminoMsg): MsgCreateSession {
    return MsgCreateSession.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSessionProtoMsg): MsgCreateSession {
    return MsgCreateSession.decode(message.value);
  },
  toProto(message: MsgCreateSession): Uint8Array {
    return MsgCreateSession.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSession): MsgCreateSessionProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgCreateSession",
      value: MsgCreateSession.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSessionResponse(): MsgCreateSessionResponse {
  return {};
}
/**
 * @name MsgCreateSessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgCreateSessionResponse
 */
export const MsgCreateSessionResponse = {
  typeUrl: "/sparkdream.session.v1.MsgCreateSessionResponse",
  encode(_: MsgCreateSessionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateSessionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreateSessionResponse>): MsgCreateSessionResponse {
    const message = createBaseMsgCreateSessionResponse();
    return message;
  },
  fromAmino(_: MsgCreateSessionResponseAmino): MsgCreateSessionResponse {
    const message = createBaseMsgCreateSessionResponse();
    return message;
  },
  toAmino(_: MsgCreateSessionResponse): MsgCreateSessionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateSessionResponseAminoMsg): MsgCreateSessionResponse {
    return MsgCreateSessionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSessionResponseProtoMsg): MsgCreateSessionResponse {
    return MsgCreateSessionResponse.decode(message.value);
  },
  toProto(message: MsgCreateSessionResponse): Uint8Array {
    return MsgCreateSessionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSessionResponse): MsgCreateSessionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgCreateSessionResponse",
      value: MsgCreateSessionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeSession(): MsgRevokeSession {
  return {
    granter: "",
    grantee: ""
  };
}
/**
 * MsgRevokeSession revokes an active session. Signed by the granter.
 * @name MsgRevokeSession
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeSession
 */
export const MsgRevokeSession = {
  typeUrl: "/sparkdream.session.v1.MsgRevokeSession",
  encode(message: MsgRevokeSession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeSession {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevokeSession>): MsgRevokeSession {
    const message = createBaseMsgRevokeSession();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeSessionAmino): MsgRevokeSession {
    const message = createBaseMsgRevokeSession();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: MsgRevokeSession): MsgRevokeSessionAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeSessionAminoMsg): MsgRevokeSession {
    return MsgRevokeSession.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeSessionProtoMsg): MsgRevokeSession {
    return MsgRevokeSession.decode(message.value);
  },
  toProto(message: MsgRevokeSession): Uint8Array {
    return MsgRevokeSession.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeSession): MsgRevokeSessionProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgRevokeSession",
      value: MsgRevokeSession.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeSessionResponse(): MsgRevokeSessionResponse {
  return {};
}
/**
 * @name MsgRevokeSessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgRevokeSessionResponse
 */
export const MsgRevokeSessionResponse = {
  typeUrl: "/sparkdream.session.v1.MsgRevokeSessionResponse",
  encode(_: MsgRevokeSessionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeSessionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRevokeSessionResponse>): MsgRevokeSessionResponse {
    const message = createBaseMsgRevokeSessionResponse();
    return message;
  },
  fromAmino(_: MsgRevokeSessionResponseAmino): MsgRevokeSessionResponse {
    const message = createBaseMsgRevokeSessionResponse();
    return message;
  },
  toAmino(_: MsgRevokeSessionResponse): MsgRevokeSessionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeSessionResponseAminoMsg): MsgRevokeSessionResponse {
    return MsgRevokeSessionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeSessionResponseProtoMsg): MsgRevokeSessionResponse {
    return MsgRevokeSessionResponse.decode(message.value);
  },
  toProto(message: MsgRevokeSessionResponse): Uint8Array {
    return MsgRevokeSessionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeSessionResponse): MsgRevokeSessionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgRevokeSessionResponse",
      value: MsgRevokeSessionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExecSession(): MsgExecSession {
  return {
    grantee: "",
    granter: "",
    msgs: []
  };
}
/**
 * MsgExecSession executes messages using a session key. Signed by the grantee.
 * @name MsgExecSession
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgExecSession
 */
export const MsgExecSession = {
  typeUrl: "/sparkdream.session.v1.MsgExecSession",
  encode(message: MsgExecSession, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecSession {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.granter = reader.string();
          break;
        case 3:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgExecSession>): MsgExecSession {
    const message = createBaseMsgExecSession();
    message.grantee = object.grantee ?? "";
    message.granter = object.granter ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgExecSessionAmino): MsgExecSession {
    const message = createBaseMsgExecSession();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    message.msgs = object.msgs?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgExecSession): MsgExecSessionAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.granter = message.granter === "" ? undefined : message.granter;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecSessionAminoMsg): MsgExecSession {
    return MsgExecSession.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecSessionProtoMsg): MsgExecSession {
    return MsgExecSession.decode(message.value);
  },
  toProto(message: MsgExecSession): Uint8Array {
    return MsgExecSession.encode(message).finish();
  },
  toProtoMsg(message: MsgExecSession): MsgExecSessionProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgExecSession",
      value: MsgExecSession.encode(message).finish()
    };
  }
};
function createBaseMsgExecSessionResponse(): MsgExecSessionResponse {
  return {};
}
/**
 * @name MsgExecSessionResponse
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.MsgExecSessionResponse
 */
export const MsgExecSessionResponse = {
  typeUrl: "/sparkdream.session.v1.MsgExecSessionResponse",
  encode(_: MsgExecSessionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecSessionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgExecSessionResponse>): MsgExecSessionResponse {
    const message = createBaseMsgExecSessionResponse();
    return message;
  },
  fromAmino(_: MsgExecSessionResponseAmino): MsgExecSessionResponse {
    const message = createBaseMsgExecSessionResponse();
    return message;
  },
  toAmino(_: MsgExecSessionResponse): MsgExecSessionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExecSessionResponseAminoMsg): MsgExecSessionResponse {
    return MsgExecSessionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecSessionResponseProtoMsg): MsgExecSessionResponse {
    return MsgExecSessionResponse.decode(message.value);
  },
  toProto(message: MsgExecSessionResponse): Uint8Array {
    return MsgExecSessionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecSessionResponse): MsgExecSessionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.MsgExecSessionResponse",
      value: MsgExecSessionResponse.encode(message).finish()
    };
  }
};