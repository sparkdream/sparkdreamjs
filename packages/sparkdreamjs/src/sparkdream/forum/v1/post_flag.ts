//@ts-nocheck
import { FlagRecord, FlagRecordAmino } from "../../common/v1/flag_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * @name PostFlag_ReasonCountsEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.undefined
 */
export interface PostFlag_ReasonCountsEntry {
  key: number;
  value: bigint;
}
export interface PostFlag_ReasonCountsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name PostFlag_ReasonCountsEntryAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PostFlag_ReasonCountsEntry
 */
export interface PostFlag_ReasonCountsEntryAmino {
  key?: number;
  value?: string;
}
export interface PostFlag_ReasonCountsEntryAminoMsg {
  type: string;
  value: PostFlag_ReasonCountsEntryAmino;
}
/**
 * PostFlag defines the PostFlag message.
 * @name PostFlag
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PostFlag
 */
export interface PostFlag {
  postId: bigint;
  totalWeight: string;
  firstFlagAt: bigint;
  lastFlagAt: bigint;
  inReviewQueue: boolean;
  flaggers: string[];
  flagRecords: FlagRecord[];
  reasonCounts: {
    [key: number]: bigint;
  };
}
export interface PostFlagProtoMsg {
  typeUrl: "/sparkdream.forum.v1.PostFlag";
  value: Uint8Array;
}
/**
 * PostFlag defines the PostFlag message.
 * @name PostFlagAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PostFlag
 */
export interface PostFlagAmino {
  post_id?: string;
  total_weight?: string;
  first_flag_at?: string;
  last_flag_at?: string;
  in_review_queue?: boolean;
  flaggers?: string[];
  flag_records?: FlagRecordAmino[];
  reason_counts?: {
    [key: number]: string;
  };
}
export interface PostFlagAminoMsg {
  type: "/sparkdream.forum.v1.PostFlag";
  value: PostFlagAmino;
}
function createBasePostFlag_ReasonCountsEntry(): PostFlag_ReasonCountsEntry {
  return {
    key: 0,
    value: BigInt(0)
  };
}
/**
 * @name PostFlag_ReasonCountsEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.undefined
 */
export const PostFlag_ReasonCountsEntry = {
  encode(message: PostFlag_ReasonCountsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PostFlag_ReasonCountsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostFlag_ReasonCountsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PostFlag_ReasonCountsEntry>): PostFlag_ReasonCountsEntry {
    const message = createBasePostFlag_ReasonCountsEntry();
    message.key = object.key ?? 0;
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PostFlag_ReasonCountsEntryAmino): PostFlag_ReasonCountsEntry {
    const message = createBasePostFlag_ReasonCountsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: PostFlag_ReasonCountsEntry): PostFlag_ReasonCountsEntryAmino {
    const obj: any = {};
    obj.key = message.key === 0 ? undefined : message.key;
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PostFlag_ReasonCountsEntryAminoMsg): PostFlag_ReasonCountsEntry {
    return PostFlag_ReasonCountsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PostFlag_ReasonCountsEntryProtoMsg): PostFlag_ReasonCountsEntry {
    return PostFlag_ReasonCountsEntry.decode(message.value);
  },
  toProto(message: PostFlag_ReasonCountsEntry): Uint8Array {
    return PostFlag_ReasonCountsEntry.encode(message).finish();
  }
};
function createBasePostFlag(): PostFlag {
  return {
    postId: BigInt(0),
    totalWeight: "",
    firstFlagAt: BigInt(0),
    lastFlagAt: BigInt(0),
    inReviewQueue: false,
    flaggers: [],
    flagRecords: [],
    reasonCounts: {}
  };
}
/**
 * PostFlag defines the PostFlag message.
 * @name PostFlag
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PostFlag
 */
export const PostFlag = {
  typeUrl: "/sparkdream.forum.v1.PostFlag",
  encode(message: PostFlag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.totalWeight !== "") {
      writer.uint32(18).string(message.totalWeight);
    }
    if (message.firstFlagAt !== BigInt(0)) {
      writer.uint32(24).int64(message.firstFlagAt);
    }
    if (message.lastFlagAt !== BigInt(0)) {
      writer.uint32(32).int64(message.lastFlagAt);
    }
    if (message.inReviewQueue === true) {
      writer.uint32(40).bool(message.inReviewQueue);
    }
    for (const v of message.flaggers) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.flagRecords) {
      FlagRecord.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    Object.entries(message.reasonCounts).forEach(([key, value]) => {
      PostFlag_ReasonCountsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(96).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PostFlag {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostFlag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.totalWeight = reader.string();
          break;
        case 3:
          message.firstFlagAt = reader.int64();
          break;
        case 4:
          message.lastFlagAt = reader.int64();
          break;
        case 5:
          message.inReviewQueue = reader.bool();
          break;
        case 10:
          message.flaggers.push(reader.string());
          break;
        case 11:
          message.flagRecords.push(FlagRecord.decode(reader, reader.uint32()));
          break;
        case 12:
          const entry12 = PostFlag_ReasonCountsEntry.decode(reader, reader.uint32());
          if (entry12.value !== undefined) {
            message.reasonCounts[entry12.key] = entry12.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PostFlag>): PostFlag {
    const message = createBasePostFlag();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.totalWeight = object.totalWeight ?? "";
    message.firstFlagAt = object.firstFlagAt !== undefined && object.firstFlagAt !== null ? BigInt(object.firstFlagAt.toString()) : BigInt(0);
    message.lastFlagAt = object.lastFlagAt !== undefined && object.lastFlagAt !== null ? BigInt(object.lastFlagAt.toString()) : BigInt(0);
    message.inReviewQueue = object.inReviewQueue ?? false;
    message.flaggers = object.flaggers?.map(e => e) || [];
    message.flagRecords = object.flagRecords?.map(e => FlagRecord.fromPartial(e)) || [];
    message.reasonCounts = Object.entries(object.reasonCounts ?? {}).reduce<{
      [key: number]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = BigInt(value.toString());
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: PostFlagAmino): PostFlag {
    const message = createBasePostFlag();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    if (object.first_flag_at !== undefined && object.first_flag_at !== null) {
      message.firstFlagAt = BigInt(object.first_flag_at);
    }
    if (object.last_flag_at !== undefined && object.last_flag_at !== null) {
      message.lastFlagAt = BigInt(object.last_flag_at);
    }
    if (object.in_review_queue !== undefined && object.in_review_queue !== null) {
      message.inReviewQueue = object.in_review_queue;
    }
    message.flaggers = object.flaggers?.map(e => e) || [];
    message.flagRecords = object.flag_records?.map(e => FlagRecord.fromAmino(e)) || [];
    message.reasonCounts = Object.entries(object.reason_counts ?? {}).reduce<{
      [key: number]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = BigInt(value.toString());
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: PostFlag): PostFlagAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
    obj.first_flag_at = message.firstFlagAt !== BigInt(0) ? message.firstFlagAt?.toString() : undefined;
    obj.last_flag_at = message.lastFlagAt !== BigInt(0) ? message.lastFlagAt?.toString() : undefined;
    obj.in_review_queue = message.inReviewQueue === false ? undefined : message.inReviewQueue;
    if (message.flaggers) {
      obj.flaggers = message.flaggers.map(e => e);
    } else {
      obj.flaggers = message.flaggers;
    }
    if (message.flagRecords) {
      obj.flag_records = message.flagRecords.map(e => e ? FlagRecord.toAmino(e) : undefined);
    } else {
      obj.flag_records = message.flagRecords;
    }
    obj.reason_counts = {};
    if (message.reasonCounts) {
      Object.entries(message.reasonCounts).forEach(([k, v]) => {
        obj.reason_counts[k] = v.toString();
      });
    }
    return obj;
  },
  fromAminoMsg(object: PostFlagAminoMsg): PostFlag {
    return PostFlag.fromAmino(object.value);
  },
  fromProtoMsg(message: PostFlagProtoMsg): PostFlag {
    return PostFlag.decode(message.value);
  },
  toProto(message: PostFlag): Uint8Array {
    return PostFlag.encode(message).finish();
  },
  toProtoMsg(message: PostFlag): PostFlagProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.PostFlag",
      value: PostFlag.encode(message).finish()
    };
  }
};