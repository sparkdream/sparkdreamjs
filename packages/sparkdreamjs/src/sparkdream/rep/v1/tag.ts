//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Tag defines a content-tagging label. Owned by x/rep.
 * Consumed by x/forum, x/collect, and x/rep's own initiative/reputation systems.
 * @name Tag
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Tag
 */
export interface Tag {
  name: string;
  usageCount: bigint;
  createdAt: bigint;
  lastUsedAt: bigint;
  expirationIndex: bigint;
}
export interface TagProtoMsg {
  typeUrl: "/sparkdream.rep.v1.Tag";
  value: Uint8Array;
}
/**
 * Tag defines a content-tagging label. Owned by x/rep.
 * Consumed by x/forum, x/collect, and x/rep's own initiative/reputation systems.
 * @name TagAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Tag
 */
export interface TagAmino {
  name?: string;
  usage_count?: string;
  created_at?: string;
  last_used_at?: string;
  expiration_index?: string;
}
export interface TagAminoMsg {
  type: "/sparkdream.rep.v1.Tag";
  value: TagAmino;
}
function createBaseTag(): Tag {
  return {
    name: "",
    usageCount: BigInt(0),
    createdAt: BigInt(0),
    lastUsedAt: BigInt(0),
    expirationIndex: BigInt(0)
  };
}
/**
 * Tag defines a content-tagging label. Owned by x/rep.
 * Consumed by x/forum, x/collect, and x/rep's own initiative/reputation systems.
 * @name Tag
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Tag
 */
export const Tag = {
  typeUrl: "/sparkdream.rep.v1.Tag",
  encode(message: Tag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.usageCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.usageCount);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(24).int64(message.createdAt);
    }
    if (message.lastUsedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.lastUsedAt);
    }
    if (message.expirationIndex !== BigInt(0)) {
      writer.uint32(40).int64(message.expirationIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Tag {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.usageCount = reader.uint64();
          break;
        case 3:
          message.createdAt = reader.int64();
          break;
        case 4:
          message.lastUsedAt = reader.int64();
          break;
        case 5:
          message.expirationIndex = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Tag>): Tag {
    const message = createBaseTag();
    message.name = object.name ?? "";
    message.usageCount = object.usageCount !== undefined && object.usageCount !== null ? BigInt(object.usageCount.toString()) : BigInt(0);
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.lastUsedAt = object.lastUsedAt !== undefined && object.lastUsedAt !== null ? BigInt(object.lastUsedAt.toString()) : BigInt(0);
    message.expirationIndex = object.expirationIndex !== undefined && object.expirationIndex !== null ? BigInt(object.expirationIndex.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TagAmino): Tag {
    const message = createBaseTag();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.usage_count !== undefined && object.usage_count !== null) {
      message.usageCount = BigInt(object.usage_count);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.last_used_at !== undefined && object.last_used_at !== null) {
      message.lastUsedAt = BigInt(object.last_used_at);
    }
    if (object.expiration_index !== undefined && object.expiration_index !== null) {
      message.expirationIndex = BigInt(object.expiration_index);
    }
    return message;
  },
  toAmino(message: Tag): TagAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.usage_count = message.usageCount !== BigInt(0) ? message.usageCount?.toString() : undefined;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.last_used_at = message.lastUsedAt !== BigInt(0) ? message.lastUsedAt?.toString() : undefined;
    obj.expiration_index = message.expirationIndex !== BigInt(0) ? message.expirationIndex?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TagAminoMsg): Tag {
    return Tag.fromAmino(object.value);
  },
  fromProtoMsg(message: TagProtoMsg): Tag {
    return Tag.decode(message.value);
  },
  toProto(message: Tag): Uint8Array {
    return Tag.encode(message).finish();
  },
  toProtoMsg(message: Tag): TagProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.Tag",
      value: Tag.encode(message).finish()
    };
  }
};