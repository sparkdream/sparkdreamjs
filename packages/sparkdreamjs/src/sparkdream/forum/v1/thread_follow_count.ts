//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ThreadFollowCount defines the ThreadFollowCount message.
 * @name ThreadFollowCount
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadFollowCount
 */
export interface ThreadFollowCount {
  threadId: bigint;
  followerCount: bigint;
}
export interface ThreadFollowCountProtoMsg {
  typeUrl: "/sparkdream.forum.v1.ThreadFollowCount";
  value: Uint8Array;
}
/**
 * ThreadFollowCount defines the ThreadFollowCount message.
 * @name ThreadFollowCountAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadFollowCount
 */
export interface ThreadFollowCountAmino {
  thread_id?: string;
  follower_count?: string;
}
export interface ThreadFollowCountAminoMsg {
  type: "/sparkdream.forum.v1.ThreadFollowCount";
  value: ThreadFollowCountAmino;
}
function createBaseThreadFollowCount(): ThreadFollowCount {
  return {
    threadId: BigInt(0),
    followerCount: BigInt(0)
  };
}
/**
 * ThreadFollowCount defines the ThreadFollowCount message.
 * @name ThreadFollowCount
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadFollowCount
 */
export const ThreadFollowCount = {
  typeUrl: "/sparkdream.forum.v1.ThreadFollowCount",
  encode(message: ThreadFollowCount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    if (message.followerCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.followerCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ThreadFollowCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThreadFollowCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        case 2:
          message.followerCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ThreadFollowCount>): ThreadFollowCount {
    const message = createBaseThreadFollowCount();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.followerCount = object.followerCount !== undefined && object.followerCount !== null ? BigInt(object.followerCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ThreadFollowCountAmino): ThreadFollowCount {
    const message = createBaseThreadFollowCount();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.follower_count !== undefined && object.follower_count !== null) {
      message.followerCount = BigInt(object.follower_count);
    }
    return message;
  },
  toAmino(message: ThreadFollowCount): ThreadFollowCountAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.follower_count = message.followerCount !== BigInt(0) ? message.followerCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ThreadFollowCountAminoMsg): ThreadFollowCount {
    return ThreadFollowCount.fromAmino(object.value);
  },
  fromProtoMsg(message: ThreadFollowCountProtoMsg): ThreadFollowCount {
    return ThreadFollowCount.decode(message.value);
  },
  toProto(message: ThreadFollowCount): Uint8Array {
    return ThreadFollowCount.encode(message).finish();
  },
  toProtoMsg(message: ThreadFollowCount): ThreadFollowCountProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.ThreadFollowCount",
      value: ThreadFollowCount.encode(message).finish()
    };
  }
};