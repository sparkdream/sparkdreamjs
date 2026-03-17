//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * UserReactionLimit defines the UserReactionLimit message.
 * @name UserReactionLimit
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.UserReactionLimit
 */
export interface UserReactionLimit {
  userAddress: string;
  currentDayCount: bigint;
  previousDayCount: bigint;
  currentDayStart: bigint;
}
export interface UserReactionLimitProtoMsg {
  typeUrl: "/sparkdream.forum.v1.UserReactionLimit";
  value: Uint8Array;
}
/**
 * UserReactionLimit defines the UserReactionLimit message.
 * @name UserReactionLimitAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.UserReactionLimit
 */
export interface UserReactionLimitAmino {
  user_address?: string;
  current_day_count?: string;
  previous_day_count?: string;
  current_day_start?: string;
}
export interface UserReactionLimitAminoMsg {
  type: "/sparkdream.forum.v1.UserReactionLimit";
  value: UserReactionLimitAmino;
}
function createBaseUserReactionLimit(): UserReactionLimit {
  return {
    userAddress: "",
    currentDayCount: BigInt(0),
    previousDayCount: BigInt(0),
    currentDayStart: BigInt(0)
  };
}
/**
 * UserReactionLimit defines the UserReactionLimit message.
 * @name UserReactionLimit
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.UserReactionLimit
 */
export const UserReactionLimit = {
  typeUrl: "/sparkdream.forum.v1.UserReactionLimit",
  encode(message: UserReactionLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.currentDayCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentDayCount);
    }
    if (message.previousDayCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.previousDayCount);
    }
    if (message.currentDayStart !== BigInt(0)) {
      writer.uint32(32).int64(message.currentDayStart);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserReactionLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserReactionLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.currentDayCount = reader.uint64();
          break;
        case 3:
          message.previousDayCount = reader.uint64();
          break;
        case 4:
          message.currentDayStart = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UserReactionLimit>): UserReactionLimit {
    const message = createBaseUserReactionLimit();
    message.userAddress = object.userAddress ?? "";
    message.currentDayCount = object.currentDayCount !== undefined && object.currentDayCount !== null ? BigInt(object.currentDayCount.toString()) : BigInt(0);
    message.previousDayCount = object.previousDayCount !== undefined && object.previousDayCount !== null ? BigInt(object.previousDayCount.toString()) : BigInt(0);
    message.currentDayStart = object.currentDayStart !== undefined && object.currentDayStart !== null ? BigInt(object.currentDayStart.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UserReactionLimitAmino): UserReactionLimit {
    const message = createBaseUserReactionLimit();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    if (object.current_day_count !== undefined && object.current_day_count !== null) {
      message.currentDayCount = BigInt(object.current_day_count);
    }
    if (object.previous_day_count !== undefined && object.previous_day_count !== null) {
      message.previousDayCount = BigInt(object.previous_day_count);
    }
    if (object.current_day_start !== undefined && object.current_day_start !== null) {
      message.currentDayStart = BigInt(object.current_day_start);
    }
    return message;
  },
  toAmino(message: UserReactionLimit): UserReactionLimitAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    obj.current_day_count = message.currentDayCount !== BigInt(0) ? message.currentDayCount?.toString() : undefined;
    obj.previous_day_count = message.previousDayCount !== BigInt(0) ? message.previousDayCount?.toString() : undefined;
    obj.current_day_start = message.currentDayStart !== BigInt(0) ? message.currentDayStart?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UserReactionLimitAminoMsg): UserReactionLimit {
    return UserReactionLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: UserReactionLimitProtoMsg): UserReactionLimit {
    return UserReactionLimit.decode(message.value);
  },
  toProto(message: UserReactionLimit): Uint8Array {
    return UserReactionLimit.encode(message).finish();
  },
  toProtoMsg(message: UserReactionLimit): UserReactionLimitProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.UserReactionLimit",
      value: UserReactionLimit.encode(message).finish()
    };
  }
};