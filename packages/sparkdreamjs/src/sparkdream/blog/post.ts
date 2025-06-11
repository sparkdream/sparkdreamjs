//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface Post {
  title: string;
  body: string;
  creator: string;
  id: bigint;
}
export interface PostProtoMsg {
  typeUrl: "/sparkdream.blog.Post";
  value: Uint8Array;
}
export interface PostAmino {
  title?: string;
  body?: string;
  creator?: string;
  id?: string;
}
export interface PostAminoMsg {
  type: "/sparkdream.blog.Post";
  value: PostAmino;
}
function createBasePost(): Post {
  return {
    title: "",
    body: "",
    creator: "",
    id: BigInt(0)
  };
}
export const Post = {
  typeUrl: "/sparkdream.blog.Post",
  encode(message: Post, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Post {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Post>): Post {
    const message = createBasePost();
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PostAmino): Post {
    const message = createBasePost();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: Post): PostAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.body = message.body === "" ? undefined : message.body;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PostAminoMsg): Post {
    return Post.fromAmino(object.value);
  },
  fromProtoMsg(message: PostProtoMsg): Post {
    return Post.decode(message.value);
  },
  toProto(message: Post): Uint8Array {
    return Post.encode(message).finish();
  },
  toProtoMsg(message: Post): PostProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.Post",
      value: Post.encode(message).finish()
    };
  }
};