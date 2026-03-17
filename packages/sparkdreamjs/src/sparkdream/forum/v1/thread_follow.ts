//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ThreadFollow defines the ThreadFollow message.
 * @name ThreadFollow
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadFollow
 */
export interface ThreadFollow {
  follower: string;
  threadId: bigint;
  followedAt: bigint;
}
export interface ThreadFollowProtoMsg {
  typeUrl: "/sparkdream.forum.v1.ThreadFollow";
  value: Uint8Array;
}
/**
 * ThreadFollow defines the ThreadFollow message.
 * @name ThreadFollowAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadFollow
 */
export interface ThreadFollowAmino {
  follower?: string;
  thread_id?: string;
  followed_at?: string;
}
export interface ThreadFollowAminoMsg {
  type: "/sparkdream.forum.v1.ThreadFollow";
  value: ThreadFollowAmino;
}
function createBaseThreadFollow(): ThreadFollow {
  return {
    follower: "",
    threadId: BigInt(0),
    followedAt: BigInt(0)
  };
}
/**
 * ThreadFollow defines the ThreadFollow message.
 * @name ThreadFollow
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadFollow
 */
export const ThreadFollow = {
  typeUrl: "/sparkdream.forum.v1.ThreadFollow",
  encode(message: ThreadFollow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.follower !== "") {
      writer.uint32(10).string(message.follower);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.followedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.followedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ThreadFollow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThreadFollow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.follower = reader.string();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        case 3:
          message.followedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ThreadFollow>): ThreadFollow {
    const message = createBaseThreadFollow();
    message.follower = object.follower ?? "";
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.followedAt = object.followedAt !== undefined && object.followedAt !== null ? BigInt(object.followedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ThreadFollowAmino): ThreadFollow {
    const message = createBaseThreadFollow();
    if (object.follower !== undefined && object.follower !== null) {
      message.follower = object.follower;
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.followed_at !== undefined && object.followed_at !== null) {
      message.followedAt = BigInt(object.followed_at);
    }
    return message;
  },
  toAmino(message: ThreadFollow): ThreadFollowAmino {
    const obj: any = {};
    obj.follower = message.follower === "" ? undefined : message.follower;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.followed_at = message.followedAt !== BigInt(0) ? message.followedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ThreadFollowAminoMsg): ThreadFollow {
    return ThreadFollow.fromAmino(object.value);
  },
  fromProtoMsg(message: ThreadFollowProtoMsg): ThreadFollow {
    return ThreadFollow.decode(message.value);
  },
  toProto(message: ThreadFollow): Uint8Array {
    return ThreadFollow.encode(message).finish();
  },
  toProtoMsg(message: ThreadFollow): ThreadFollowProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.ThreadFollow",
      value: ThreadFollow.encode(message).finish()
    };
  }
};