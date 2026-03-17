//@ts-nocheck
import { BountyStatus, BountyAward, BountyAwardAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Bounty defines the Bounty message.
 * @name Bounty
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Bounty
 */
export interface Bounty {
  id: bigint;
  creator: string;
  threadId: bigint;
  amount: string;
  createdAt: bigint;
  expiresAt: bigint;
  status: BountyStatus;
  moderationSuspendedAt: bigint;
  timeRemainingAtSuspension: bigint;
  awards: BountyAward[];
}
export interface BountyProtoMsg {
  typeUrl: "/sparkdream.forum.v1.Bounty";
  value: Uint8Array;
}
/**
 * Bounty defines the Bounty message.
 * @name BountyAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Bounty
 */
export interface BountyAmino {
  id?: string;
  creator?: string;
  thread_id?: string;
  amount?: string;
  created_at?: string;
  expires_at?: string;
  status?: BountyStatus;
  moderation_suspended_at?: string;
  time_remaining_at_suspension?: string;
  awards?: BountyAwardAmino[];
}
export interface BountyAminoMsg {
  type: "/sparkdream.forum.v1.Bounty";
  value: BountyAmino;
}
function createBaseBounty(): Bounty {
  return {
    id: BigInt(0),
    creator: "",
    threadId: BigInt(0),
    amount: "",
    createdAt: BigInt(0),
    expiresAt: BigInt(0),
    status: 0,
    moderationSuspendedAt: BigInt(0),
    timeRemainingAtSuspension: BigInt(0),
    awards: []
  };
}
/**
 * Bounty defines the Bounty message.
 * @name Bounty
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Bounty
 */
export const Bounty = {
  typeUrl: "/sparkdream.forum.v1.Bounty",
  encode(message: Bounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(24).uint64(message.threadId);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(48).int64(message.expiresAt);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.moderationSuspendedAt !== BigInt(0)) {
      writer.uint32(64).int64(message.moderationSuspendedAt);
    }
    if (message.timeRemainingAtSuspension !== BigInt(0)) {
      writer.uint32(72).int64(message.timeRemainingAtSuspension);
    }
    for (const v of message.awards) {
      BountyAward.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bounty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBounty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.threadId = reader.uint64();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.createdAt = reader.int64();
          break;
        case 6:
          message.expiresAt = reader.int64();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.moderationSuspendedAt = reader.int64();
          break;
        case 9:
          message.timeRemainingAtSuspension = reader.int64();
          break;
        case 20:
          message.awards.push(BountyAward.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Bounty>): Bounty {
    const message = createBaseBounty();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.moderationSuspendedAt = object.moderationSuspendedAt !== undefined && object.moderationSuspendedAt !== null ? BigInt(object.moderationSuspendedAt.toString()) : BigInt(0);
    message.timeRemainingAtSuspension = object.timeRemainingAtSuspension !== undefined && object.timeRemainingAtSuspension !== null ? BigInt(object.timeRemainingAtSuspension.toString()) : BigInt(0);
    message.awards = object.awards?.map(e => BountyAward.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BountyAmino): Bounty {
    const message = createBaseBounty();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.moderation_suspended_at !== undefined && object.moderation_suspended_at !== null) {
      message.moderationSuspendedAt = BigInt(object.moderation_suspended_at);
    }
    if (object.time_remaining_at_suspension !== undefined && object.time_remaining_at_suspension !== null) {
      message.timeRemainingAtSuspension = BigInt(object.time_remaining_at_suspension);
    }
    message.awards = object.awards?.map(e => BountyAward.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Bounty): BountyAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.moderation_suspended_at = message.moderationSuspendedAt !== BigInt(0) ? message.moderationSuspendedAt?.toString() : undefined;
    obj.time_remaining_at_suspension = message.timeRemainingAtSuspension !== BigInt(0) ? message.timeRemainingAtSuspension?.toString() : undefined;
    if (message.awards) {
      obj.awards = message.awards.map(e => e ? BountyAward.toAmino(e) : undefined);
    } else {
      obj.awards = message.awards;
    }
    return obj;
  },
  fromAminoMsg(object: BountyAminoMsg): Bounty {
    return Bounty.fromAmino(object.value);
  },
  fromProtoMsg(message: BountyProtoMsg): Bounty {
    return Bounty.decode(message.value);
  },
  toProto(message: Bounty): Uint8Array {
    return Bounty.encode(message).finish();
  },
  toProtoMsg(message: Bounty): BountyProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.Bounty",
      value: Bounty.encode(message).finish()
    };
  }
};