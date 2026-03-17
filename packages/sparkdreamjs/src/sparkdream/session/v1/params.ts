//@ts-nocheck
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.Params
 */
export interface Params {
  /**
   * Ceiling: the maximum set of message types that could ever be session-delegable.
   * Set at genesis. Only expandable via chain upgrade.
   */
  maxAllowedMsgTypes: string[];
  /**
   * Active allowlist: the currently delegable subset of max_allowed_msg_types.
   * Governance can remove types. Operations Committee can re-add from ceiling.
   */
  allowedMsgTypes: string[];
  /**
   * Maximum concurrent active sessions per granter.
   */
  maxSessionsPerGranter: bigint;
  /**
   * Maximum message types per individual session.
   */
  maxMsgTypesPerSession: bigint;
  /**
   * Maximum session duration.
   */
  maxExpiration: Duration;
  /**
   * Maximum gas budget per session.
   */
  maxSpendLimit: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.session.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.Params
 */
export interface ParamsAmino {
  /**
   * Ceiling: the maximum set of message types that could ever be session-delegable.
   * Set at genesis. Only expandable via chain upgrade.
   */
  max_allowed_msg_types?: string[];
  /**
   * Active allowlist: the currently delegable subset of max_allowed_msg_types.
   * Governance can remove types. Operations Committee can re-add from ceiling.
   */
  allowed_msg_types?: string[];
  /**
   * Maximum concurrent active sessions per granter.
   */
  max_sessions_per_granter?: string;
  /**
   * Maximum message types per individual session.
   */
  max_msg_types_per_session?: string;
  /**
   * Maximum session duration.
   */
  max_expiration?: DurationAmino;
  /**
   * Maximum gas budget per session.
   */
  max_spend_limit: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/session/Params";
  value: ParamsAmino;
}
/**
 * SessionOperationalParams defines the operational parameters updateable by
 * the Commons Council Operations Committee without a full governance proposal.
 * max_allowed_msg_types (the ceiling) is excluded — only chain upgrades can expand it.
 * @name SessionOperationalParams
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.SessionOperationalParams
 */
export interface SessionOperationalParams {
  /**
   * Operations Committee can re-add types to the active allowlist, but ONLY
   * from max_allowed_msg_types (the ceiling). Cannot expand beyond the ceiling.
   */
  allowedMsgTypes: string[];
  maxSessionsPerGranter: bigint;
  maxMsgTypesPerSession: bigint;
  maxExpiration: Duration;
  maxSpendLimit: Coin;
}
export interface SessionOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.session.v1.SessionOperationalParams";
  value: Uint8Array;
}
/**
 * SessionOperationalParams defines the operational parameters updateable by
 * the Commons Council Operations Committee without a full governance proposal.
 * max_allowed_msg_types (the ceiling) is excluded — only chain upgrades can expand it.
 * @name SessionOperationalParamsAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.SessionOperationalParams
 */
export interface SessionOperationalParamsAmino {
  /**
   * Operations Committee can re-add types to the active allowlist, but ONLY
   * from max_allowed_msg_types (the ceiling). Cannot expand beyond the ceiling.
   */
  allowed_msg_types?: string[];
  max_sessions_per_granter?: string;
  max_msg_types_per_session?: string;
  max_expiration?: DurationAmino;
  max_spend_limit: CoinAmino;
}
export interface SessionOperationalParamsAminoMsg {
  type: "sparkdream/x/session/SessionOperationalParams";
  value: SessionOperationalParamsAmino;
}
function createBaseParams(): Params {
  return {
    maxAllowedMsgTypes: [],
    allowedMsgTypes: [],
    maxSessionsPerGranter: BigInt(0),
    maxMsgTypesPerSession: BigInt(0),
    maxExpiration: Duration.fromPartial({}),
    maxSpendLimit: Coin.fromPartial({})
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.session.v1.Params",
  aminoType: "sparkdream/x/session/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.maxAllowedMsgTypes) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.allowedMsgTypes) {
      writer.uint32(18).string(v!);
    }
    if (message.maxSessionsPerGranter !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxSessionsPerGranter);
    }
    if (message.maxMsgTypesPerSession !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxMsgTypesPerSession);
    }
    if (message.maxExpiration !== undefined) {
      Duration.encode(message.maxExpiration, writer.uint32(42).fork()).ldelim();
    }
    if (message.maxSpendLimit !== undefined) {
      Coin.encode(message.maxSpendLimit, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAllowedMsgTypes.push(reader.string());
          break;
        case 2:
          message.allowedMsgTypes.push(reader.string());
          break;
        case 3:
          message.maxSessionsPerGranter = reader.uint64();
          break;
        case 4:
          message.maxMsgTypesPerSession = reader.uint64();
          break;
        case 5:
          message.maxExpiration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.maxSpendLimit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.maxAllowedMsgTypes = object.maxAllowedMsgTypes?.map(e => e) || [];
    message.allowedMsgTypes = object.allowedMsgTypes?.map(e => e) || [];
    message.maxSessionsPerGranter = object.maxSessionsPerGranter !== undefined && object.maxSessionsPerGranter !== null ? BigInt(object.maxSessionsPerGranter.toString()) : BigInt(0);
    message.maxMsgTypesPerSession = object.maxMsgTypesPerSession !== undefined && object.maxMsgTypesPerSession !== null ? BigInt(object.maxMsgTypesPerSession.toString()) : BigInt(0);
    message.maxExpiration = object.maxExpiration !== undefined && object.maxExpiration !== null ? Duration.fromPartial(object.maxExpiration) : undefined;
    message.maxSpendLimit = object.maxSpendLimit !== undefined && object.maxSpendLimit !== null ? Coin.fromPartial(object.maxSpendLimit) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.maxAllowedMsgTypes = object.max_allowed_msg_types?.map(e => e) || [];
    message.allowedMsgTypes = object.allowed_msg_types?.map(e => e) || [];
    if (object.max_sessions_per_granter !== undefined && object.max_sessions_per_granter !== null) {
      message.maxSessionsPerGranter = BigInt(object.max_sessions_per_granter);
    }
    if (object.max_msg_types_per_session !== undefined && object.max_msg_types_per_session !== null) {
      message.maxMsgTypesPerSession = BigInt(object.max_msg_types_per_session);
    }
    if (object.max_expiration !== undefined && object.max_expiration !== null) {
      message.maxExpiration = Duration.fromAmino(object.max_expiration);
    }
    if (object.max_spend_limit !== undefined && object.max_spend_limit !== null) {
      message.maxSpendLimit = Coin.fromAmino(object.max_spend_limit);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.maxAllowedMsgTypes) {
      obj.max_allowed_msg_types = message.maxAllowedMsgTypes.map(e => e);
    } else {
      obj.max_allowed_msg_types = message.maxAllowedMsgTypes;
    }
    if (message.allowedMsgTypes) {
      obj.allowed_msg_types = message.allowedMsgTypes.map(e => e);
    } else {
      obj.allowed_msg_types = message.allowedMsgTypes;
    }
    obj.max_sessions_per_granter = message.maxSessionsPerGranter !== BigInt(0) ? message.maxSessionsPerGranter?.toString() : undefined;
    obj.max_msg_types_per_session = message.maxMsgTypesPerSession !== BigInt(0) ? message.maxMsgTypesPerSession?.toString() : undefined;
    obj.max_expiration = message.maxExpiration ? Duration.toAmino(message.maxExpiration) : undefined;
    obj.max_spend_limit = message.maxSpendLimit ? Coin.toAmino(message.maxSpendLimit) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/session/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseSessionOperationalParams(): SessionOperationalParams {
  return {
    allowedMsgTypes: [],
    maxSessionsPerGranter: BigInt(0),
    maxMsgTypesPerSession: BigInt(0),
    maxExpiration: Duration.fromPartial({}),
    maxSpendLimit: Coin.fromPartial({})
  };
}
/**
 * SessionOperationalParams defines the operational parameters updateable by
 * the Commons Council Operations Committee without a full governance proposal.
 * max_allowed_msg_types (the ceiling) is excluded — only chain upgrades can expand it.
 * @name SessionOperationalParams
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.SessionOperationalParams
 */
export const SessionOperationalParams = {
  typeUrl: "/sparkdream.session.v1.SessionOperationalParams",
  aminoType: "sparkdream/x/session/SessionOperationalParams",
  encode(message: SessionOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedMsgTypes) {
      writer.uint32(10).string(v!);
    }
    if (message.maxSessionsPerGranter !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxSessionsPerGranter);
    }
    if (message.maxMsgTypesPerSession !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxMsgTypesPerSession);
    }
    if (message.maxExpiration !== undefined) {
      Duration.encode(message.maxExpiration, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxSpendLimit !== undefined) {
      Coin.encode(message.maxSpendLimit, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SessionOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSessionOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedMsgTypes.push(reader.string());
          break;
        case 2:
          message.maxSessionsPerGranter = reader.uint64();
          break;
        case 3:
          message.maxMsgTypesPerSession = reader.uint64();
          break;
        case 4:
          message.maxExpiration = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxSpendLimit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SessionOperationalParams>): SessionOperationalParams {
    const message = createBaseSessionOperationalParams();
    message.allowedMsgTypes = object.allowedMsgTypes?.map(e => e) || [];
    message.maxSessionsPerGranter = object.maxSessionsPerGranter !== undefined && object.maxSessionsPerGranter !== null ? BigInt(object.maxSessionsPerGranter.toString()) : BigInt(0);
    message.maxMsgTypesPerSession = object.maxMsgTypesPerSession !== undefined && object.maxMsgTypesPerSession !== null ? BigInt(object.maxMsgTypesPerSession.toString()) : BigInt(0);
    message.maxExpiration = object.maxExpiration !== undefined && object.maxExpiration !== null ? Duration.fromPartial(object.maxExpiration) : undefined;
    message.maxSpendLimit = object.maxSpendLimit !== undefined && object.maxSpendLimit !== null ? Coin.fromPartial(object.maxSpendLimit) : undefined;
    return message;
  },
  fromAmino(object: SessionOperationalParamsAmino): SessionOperationalParams {
    const message = createBaseSessionOperationalParams();
    message.allowedMsgTypes = object.allowed_msg_types?.map(e => e) || [];
    if (object.max_sessions_per_granter !== undefined && object.max_sessions_per_granter !== null) {
      message.maxSessionsPerGranter = BigInt(object.max_sessions_per_granter);
    }
    if (object.max_msg_types_per_session !== undefined && object.max_msg_types_per_session !== null) {
      message.maxMsgTypesPerSession = BigInt(object.max_msg_types_per_session);
    }
    if (object.max_expiration !== undefined && object.max_expiration !== null) {
      message.maxExpiration = Duration.fromAmino(object.max_expiration);
    }
    if (object.max_spend_limit !== undefined && object.max_spend_limit !== null) {
      message.maxSpendLimit = Coin.fromAmino(object.max_spend_limit);
    }
    return message;
  },
  toAmino(message: SessionOperationalParams): SessionOperationalParamsAmino {
    const obj: any = {};
    if (message.allowedMsgTypes) {
      obj.allowed_msg_types = message.allowedMsgTypes.map(e => e);
    } else {
      obj.allowed_msg_types = message.allowedMsgTypes;
    }
    obj.max_sessions_per_granter = message.maxSessionsPerGranter !== BigInt(0) ? message.maxSessionsPerGranter?.toString() : undefined;
    obj.max_msg_types_per_session = message.maxMsgTypesPerSession !== BigInt(0) ? message.maxMsgTypesPerSession?.toString() : undefined;
    obj.max_expiration = message.maxExpiration ? Duration.toAmino(message.maxExpiration) : undefined;
    obj.max_spend_limit = message.maxSpendLimit ? Coin.toAmino(message.maxSpendLimit) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: SessionOperationalParamsAminoMsg): SessionOperationalParams {
    return SessionOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: SessionOperationalParams): SessionOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/session/SessionOperationalParams",
      value: SessionOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: SessionOperationalParamsProtoMsg): SessionOperationalParams {
    return SessionOperationalParams.decode(message.value);
  },
  toProto(message: SessionOperationalParams): Uint8Array {
    return SessionOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: SessionOperationalParams): SessionOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.SessionOperationalParams",
      value: SessionOperationalParams.encode(message).finish()
    };
  }
};