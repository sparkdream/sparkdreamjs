//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * UserRateLimit defines the UserRateLimit message. Counters are split by
 * action class — the post counter (fields 2-5) bounds CreatePost, the
 * make-permanent counter (fields 6-8) bounds MakePostPermanent. They are
 * kept on the same record to avoid an extra collection lookup per call.
 * @name UserRateLimit
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.UserRateLimit
 */
export interface UserRateLimit {
  userAddress: string;
  currentEpochCount: bigint;
  previousEpochCount: bigint;
  currentEpochStart: bigint;
  lastPostTime: bigint;
  /**
   * MakePostPermanent sliding-window counters, mirrored from the post counter.
   */
  makePermanentCurrentEpochCount: bigint;
  makePermanentPreviousEpochCount: bigint;
  makePermanentCurrentEpochStart: bigint;
}
export interface UserRateLimitProtoMsg {
  typeUrl: "/sparkdream.forum.v1.UserRateLimit";
  value: Uint8Array;
}
/**
 * UserRateLimit defines the UserRateLimit message. Counters are split by
 * action class — the post counter (fields 2-5) bounds CreatePost, the
 * make-permanent counter (fields 6-8) bounds MakePostPermanent. They are
 * kept on the same record to avoid an extra collection lookup per call.
 * @name UserRateLimitAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.UserRateLimit
 */
export interface UserRateLimitAmino {
  user_address?: string;
  current_epoch_count?: string;
  previous_epoch_count?: string;
  current_epoch_start?: string;
  last_post_time?: string;
  /**
   * MakePostPermanent sliding-window counters, mirrored from the post counter.
   */
  make_permanent_current_epoch_count?: string;
  make_permanent_previous_epoch_count?: string;
  make_permanent_current_epoch_start?: string;
}
export interface UserRateLimitAminoMsg {
  type: "/sparkdream.forum.v1.UserRateLimit";
  value: UserRateLimitAmino;
}
function createBaseUserRateLimit(): UserRateLimit {
  return {
    userAddress: "",
    currentEpochCount: BigInt(0),
    previousEpochCount: BigInt(0),
    currentEpochStart: BigInt(0),
    lastPostTime: BigInt(0),
    makePermanentCurrentEpochCount: BigInt(0),
    makePermanentPreviousEpochCount: BigInt(0),
    makePermanentCurrentEpochStart: BigInt(0)
  };
}
/**
 * UserRateLimit defines the UserRateLimit message. Counters are split by
 * action class — the post counter (fields 2-5) bounds CreatePost, the
 * make-permanent counter (fields 6-8) bounds MakePostPermanent. They are
 * kept on the same record to avoid an extra collection lookup per call.
 * @name UserRateLimit
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.UserRateLimit
 */
export const UserRateLimit = {
  typeUrl: "/sparkdream.forum.v1.UserRateLimit",
  encode(message: UserRateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.currentEpochCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentEpochCount);
    }
    if (message.previousEpochCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.previousEpochCount);
    }
    if (message.currentEpochStart !== BigInt(0)) {
      writer.uint32(32).int64(message.currentEpochStart);
    }
    if (message.lastPostTime !== BigInt(0)) {
      writer.uint32(40).int64(message.lastPostTime);
    }
    if (message.makePermanentCurrentEpochCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.makePermanentCurrentEpochCount);
    }
    if (message.makePermanentPreviousEpochCount !== BigInt(0)) {
      writer.uint32(56).uint64(message.makePermanentPreviousEpochCount);
    }
    if (message.makePermanentCurrentEpochStart !== BigInt(0)) {
      writer.uint32(64).int64(message.makePermanentCurrentEpochStart);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserRateLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRateLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.currentEpochCount = reader.uint64();
          break;
        case 3:
          message.previousEpochCount = reader.uint64();
          break;
        case 4:
          message.currentEpochStart = reader.int64();
          break;
        case 5:
          message.lastPostTime = reader.int64();
          break;
        case 6:
          message.makePermanentCurrentEpochCount = reader.uint64();
          break;
        case 7:
          message.makePermanentPreviousEpochCount = reader.uint64();
          break;
        case 8:
          message.makePermanentCurrentEpochStart = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UserRateLimit>): UserRateLimit {
    const message = createBaseUserRateLimit();
    message.userAddress = object.userAddress ?? "";
    message.currentEpochCount = object.currentEpochCount !== undefined && object.currentEpochCount !== null ? BigInt(object.currentEpochCount.toString()) : BigInt(0);
    message.previousEpochCount = object.previousEpochCount !== undefined && object.previousEpochCount !== null ? BigInt(object.previousEpochCount.toString()) : BigInt(0);
    message.currentEpochStart = object.currentEpochStart !== undefined && object.currentEpochStart !== null ? BigInt(object.currentEpochStart.toString()) : BigInt(0);
    message.lastPostTime = object.lastPostTime !== undefined && object.lastPostTime !== null ? BigInt(object.lastPostTime.toString()) : BigInt(0);
    message.makePermanentCurrentEpochCount = object.makePermanentCurrentEpochCount !== undefined && object.makePermanentCurrentEpochCount !== null ? BigInt(object.makePermanentCurrentEpochCount.toString()) : BigInt(0);
    message.makePermanentPreviousEpochCount = object.makePermanentPreviousEpochCount !== undefined && object.makePermanentPreviousEpochCount !== null ? BigInt(object.makePermanentPreviousEpochCount.toString()) : BigInt(0);
    message.makePermanentCurrentEpochStart = object.makePermanentCurrentEpochStart !== undefined && object.makePermanentCurrentEpochStart !== null ? BigInt(object.makePermanentCurrentEpochStart.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UserRateLimitAmino): UserRateLimit {
    const message = createBaseUserRateLimit();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    if (object.current_epoch_count !== undefined && object.current_epoch_count !== null) {
      message.currentEpochCount = BigInt(object.current_epoch_count);
    }
    if (object.previous_epoch_count !== undefined && object.previous_epoch_count !== null) {
      message.previousEpochCount = BigInt(object.previous_epoch_count);
    }
    if (object.current_epoch_start !== undefined && object.current_epoch_start !== null) {
      message.currentEpochStart = BigInt(object.current_epoch_start);
    }
    if (object.last_post_time !== undefined && object.last_post_time !== null) {
      message.lastPostTime = BigInt(object.last_post_time);
    }
    if (object.make_permanent_current_epoch_count !== undefined && object.make_permanent_current_epoch_count !== null) {
      message.makePermanentCurrentEpochCount = BigInt(object.make_permanent_current_epoch_count);
    }
    if (object.make_permanent_previous_epoch_count !== undefined && object.make_permanent_previous_epoch_count !== null) {
      message.makePermanentPreviousEpochCount = BigInt(object.make_permanent_previous_epoch_count);
    }
    if (object.make_permanent_current_epoch_start !== undefined && object.make_permanent_current_epoch_start !== null) {
      message.makePermanentCurrentEpochStart = BigInt(object.make_permanent_current_epoch_start);
    }
    return message;
  },
  toAmino(message: UserRateLimit): UserRateLimitAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    obj.current_epoch_count = message.currentEpochCount !== BigInt(0) ? message.currentEpochCount?.toString() : undefined;
    obj.previous_epoch_count = message.previousEpochCount !== BigInt(0) ? message.previousEpochCount?.toString() : undefined;
    obj.current_epoch_start = message.currentEpochStart !== BigInt(0) ? message.currentEpochStart?.toString() : undefined;
    obj.last_post_time = message.lastPostTime !== BigInt(0) ? message.lastPostTime?.toString() : undefined;
    obj.make_permanent_current_epoch_count = message.makePermanentCurrentEpochCount !== BigInt(0) ? message.makePermanentCurrentEpochCount?.toString() : undefined;
    obj.make_permanent_previous_epoch_count = message.makePermanentPreviousEpochCount !== BigInt(0) ? message.makePermanentPreviousEpochCount?.toString() : undefined;
    obj.make_permanent_current_epoch_start = message.makePermanentCurrentEpochStart !== BigInt(0) ? message.makePermanentCurrentEpochStart?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UserRateLimitAminoMsg): UserRateLimit {
    return UserRateLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: UserRateLimitProtoMsg): UserRateLimit {
    return UserRateLimit.decode(message.value);
  },
  toProto(message: UserRateLimit): Uint8Array {
    return UserRateLimit.encode(message).finish();
  },
  toProtoMsg(message: UserRateLimit): UserRateLimitProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.UserRateLimit",
      value: UserRateLimit.encode(message).finish()
    };
  }
};