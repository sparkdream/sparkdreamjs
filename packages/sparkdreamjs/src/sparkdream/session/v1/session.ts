//@ts-nocheck
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
/**
 * Session represents an active session key delegation from granter to grantee.
 * 
 * DEPRECATED: kept as the response shape for the legacy Session / SessionsByGranter
 * / SessionsByGrantee queries while the registry transitions to the unified Grant
 * model in grant.proto. Internally the keeper now persists every session as a
 * SESSION_KEY-type Grant; the query handlers project Session views back from those
 * grants. New grant types must use Grant directly.
 * @name Session
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.Session
 */
export interface Session {
  /**
   * Main wallet address (pays fees, "owns" the session).
   */
  granter: string;
  /**
   * Ephemeral session key address.
   */
  grantee: string;
  /**
   * Scoped message type URLs (subset of active allowlist).
   */
  allowedMsgTypes: string[];
  /**
   * Max gas budget (zero amount = no fee delegation).
   */
  spendLimit: Coin;
  /**
   * Gas consumed so far.
   */
  spent: Coin;
  /**
   * Auto-invalidation time.
   */
  expiration: Date;
  /**
   * When the session was created.
   */
  createdAt: Date;
  /**
   * Last successful MsgExecSession.
   */
  lastUsedAt: Date;
  /**
   * Total successful executions.
   */
  execCount: bigint;
  /**
   * Execution cap (0 = unlimited).
   */
  maxExecCount: bigint;
}
export interface SessionProtoMsg {
  typeUrl: "/sparkdream.session.v1.Session";
  value: Uint8Array;
}
/**
 * Session represents an active session key delegation from granter to grantee.
 * 
 * DEPRECATED: kept as the response shape for the legacy Session / SessionsByGranter
 * / SessionsByGrantee queries while the registry transitions to the unified Grant
 * model in grant.proto. Internally the keeper now persists every session as a
 * SESSION_KEY-type Grant; the query handlers project Session views back from those
 * grants. New grant types must use Grant directly.
 * @name SessionAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.Session
 */
export interface SessionAmino {
  /**
   * Main wallet address (pays fees, "owns" the session).
   */
  granter?: string;
  /**
   * Ephemeral session key address.
   */
  grantee?: string;
  /**
   * Scoped message type URLs (subset of active allowlist).
   */
  allowed_msg_types?: string[];
  /**
   * Max gas budget (zero amount = no fee delegation).
   */
  spend_limit?: CoinAmino;
  /**
   * Gas consumed so far.
   */
  spent?: CoinAmino;
  /**
   * Auto-invalidation time.
   */
  expiration?: string;
  /**
   * When the session was created.
   */
  created_at?: string;
  /**
   * Last successful MsgExecSession.
   */
  last_used_at?: string;
  /**
   * Total successful executions.
   */
  exec_count?: string;
  /**
   * Execution cap (0 = unlimited).
   */
  max_exec_count?: string;
}
export interface SessionAminoMsg {
  type: "/sparkdream.session.v1.Session";
  value: SessionAmino;
}
function createBaseSession(): Session {
  return {
    granter: "",
    grantee: "",
    allowedMsgTypes: [],
    spendLimit: Coin.fromPartial({}),
    spent: Coin.fromPartial({}),
    expiration: new Date(),
    createdAt: new Date(),
    lastUsedAt: new Date(),
    execCount: BigInt(0),
    maxExecCount: BigInt(0)
  };
}
/**
 * Session represents an active session key delegation from granter to grantee.
 * 
 * DEPRECATED: kept as the response shape for the legacy Session / SessionsByGranter
 * / SessionsByGrantee queries while the registry transitions to the unified Grant
 * model in grant.proto. Internally the keeper now persists every session as a
 * SESSION_KEY-type Grant; the query handlers project Session views back from those
 * grants. New grant types must use Grant directly.
 * @name Session
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.Session
 */
export const Session = {
  typeUrl: "/sparkdream.session.v1.Session",
  encode(message: Session, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.spent !== undefined) {
      Coin.encode(message.spent, writer.uint32(42).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.lastUsedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.lastUsedAt), writer.uint32(66).fork()).ldelim();
    }
    if (message.execCount !== BigInt(0)) {
      writer.uint32(72).uint64(message.execCount);
    }
    if (message.maxExecCount !== BigInt(0)) {
      writer.uint32(80).uint64(message.maxExecCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Session {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSession();
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
          message.spent = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.lastUsedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.execCount = reader.uint64();
          break;
        case 10:
          message.maxExecCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Session>): Session {
    const message = createBaseSession();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowedMsgTypes = object.allowedMsgTypes?.map(e => e) || [];
    message.spendLimit = object.spendLimit !== undefined && object.spendLimit !== null ? Coin.fromPartial(object.spendLimit) : undefined;
    message.spent = object.spent !== undefined && object.spent !== null ? Coin.fromPartial(object.spent) : undefined;
    message.expiration = object.expiration ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.lastUsedAt = object.lastUsedAt ?? undefined;
    message.execCount = object.execCount !== undefined && object.execCount !== null ? BigInt(object.execCount.toString()) : BigInt(0);
    message.maxExecCount = object.maxExecCount !== undefined && object.maxExecCount !== null ? BigInt(object.maxExecCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SessionAmino): Session {
    const message = createBaseSession();
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
    if (object.spent !== undefined && object.spent !== null) {
      message.spent = Coin.fromAmino(object.spent);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    if (object.last_used_at !== undefined && object.last_used_at !== null) {
      message.lastUsedAt = fromTimestamp(Timestamp.fromAmino(object.last_used_at));
    }
    if (object.exec_count !== undefined && object.exec_count !== null) {
      message.execCount = BigInt(object.exec_count);
    }
    if (object.max_exec_count !== undefined && object.max_exec_count !== null) {
      message.maxExecCount = BigInt(object.max_exec_count);
    }
    return message;
  },
  toAmino(message: Session): SessionAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    if (message.allowedMsgTypes) {
      obj.allowed_msg_types = message.allowedMsgTypes.map(e => e);
    } else {
      obj.allowed_msg_types = message.allowedMsgTypes;
    }
    obj.spend_limit = message.spendLimit ? Coin.toAmino(message.spendLimit) : undefined;
    obj.spent = message.spent ? Coin.toAmino(message.spent) : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    obj.last_used_at = message.lastUsedAt ? Timestamp.toAmino(toTimestamp(message.lastUsedAt)) : undefined;
    obj.exec_count = message.execCount !== BigInt(0) ? message.execCount?.toString() : undefined;
    obj.max_exec_count = message.maxExecCount !== BigInt(0) ? message.maxExecCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SessionAminoMsg): Session {
    return Session.fromAmino(object.value);
  },
  fromProtoMsg(message: SessionProtoMsg): Session {
    return Session.decode(message.value);
  },
  toProto(message: Session): Uint8Array {
    return Session.encode(message).finish();
  },
  toProtoMsg(message: Session): SessionProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.Session",
      value: Session.encode(message).finish()
    };
  }
};