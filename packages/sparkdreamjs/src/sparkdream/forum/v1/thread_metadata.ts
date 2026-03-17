//@ts-nocheck
import { PinnedReplyRecord, PinnedReplyRecordAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ThreadMetadata defines the ThreadMetadata message.
 * @name ThreadMetadata
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadMetadata
 */
export interface ThreadMetadata {
  threadId: bigint;
  acceptedReplyId: bigint;
  acceptedBy: string;
  acceptedAt: bigint;
  proposedReplyId: bigint;
  proposedBy: string;
  proposedAt: bigint;
  pinnedReplyIds: bigint[];
  pinnedRecords: PinnedReplyRecord[];
}
export interface ThreadMetadataProtoMsg {
  typeUrl: "/sparkdream.forum.v1.ThreadMetadata";
  value: Uint8Array;
}
/**
 * ThreadMetadata defines the ThreadMetadata message.
 * @name ThreadMetadataAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadMetadata
 */
export interface ThreadMetadataAmino {
  thread_id?: string;
  accepted_reply_id?: string;
  accepted_by?: string;
  accepted_at?: string;
  proposed_reply_id?: string;
  proposed_by?: string;
  proposed_at?: string;
  pinned_reply_ids?: string[];
  pinned_records?: PinnedReplyRecordAmino[];
}
export interface ThreadMetadataAminoMsg {
  type: "/sparkdream.forum.v1.ThreadMetadata";
  value: ThreadMetadataAmino;
}
function createBaseThreadMetadata(): ThreadMetadata {
  return {
    threadId: BigInt(0),
    acceptedReplyId: BigInt(0),
    acceptedBy: "",
    acceptedAt: BigInt(0),
    proposedReplyId: BigInt(0),
    proposedBy: "",
    proposedAt: BigInt(0),
    pinnedReplyIds: [],
    pinnedRecords: []
  };
}
/**
 * ThreadMetadata defines the ThreadMetadata message.
 * @name ThreadMetadata
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadMetadata
 */
export const ThreadMetadata = {
  typeUrl: "/sparkdream.forum.v1.ThreadMetadata",
  encode(message: ThreadMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    if (message.acceptedReplyId !== BigInt(0)) {
      writer.uint32(16).uint64(message.acceptedReplyId);
    }
    if (message.acceptedBy !== "") {
      writer.uint32(26).string(message.acceptedBy);
    }
    if (message.acceptedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.acceptedAt);
    }
    if (message.proposedReplyId !== BigInt(0)) {
      writer.uint32(40).uint64(message.proposedReplyId);
    }
    if (message.proposedBy !== "") {
      writer.uint32(50).string(message.proposedBy);
    }
    if (message.proposedAt !== BigInt(0)) {
      writer.uint32(56).int64(message.proposedAt);
    }
    writer.uint32(82).fork();
    for (const v of message.pinnedReplyIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.pinnedRecords) {
      PinnedReplyRecord.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ThreadMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThreadMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        case 2:
          message.acceptedReplyId = reader.uint64();
          break;
        case 3:
          message.acceptedBy = reader.string();
          break;
        case 4:
          message.acceptedAt = reader.int64();
          break;
        case 5:
          message.proposedReplyId = reader.uint64();
          break;
        case 6:
          message.proposedBy = reader.string();
          break;
        case 7:
          message.proposedAt = reader.int64();
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pinnedReplyIds.push(reader.uint64());
            }
          } else {
            message.pinnedReplyIds.push(reader.uint64());
          }
          break;
        case 11:
          message.pinnedRecords.push(PinnedReplyRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ThreadMetadata>): ThreadMetadata {
    const message = createBaseThreadMetadata();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.acceptedReplyId = object.acceptedReplyId !== undefined && object.acceptedReplyId !== null ? BigInt(object.acceptedReplyId.toString()) : BigInt(0);
    message.acceptedBy = object.acceptedBy ?? "";
    message.acceptedAt = object.acceptedAt !== undefined && object.acceptedAt !== null ? BigInt(object.acceptedAt.toString()) : BigInt(0);
    message.proposedReplyId = object.proposedReplyId !== undefined && object.proposedReplyId !== null ? BigInt(object.proposedReplyId.toString()) : BigInt(0);
    message.proposedBy = object.proposedBy ?? "";
    message.proposedAt = object.proposedAt !== undefined && object.proposedAt !== null ? BigInt(object.proposedAt.toString()) : BigInt(0);
    message.pinnedReplyIds = object.pinnedReplyIds?.map(e => BigInt(e.toString())) || [];
    message.pinnedRecords = object.pinnedRecords?.map(e => PinnedReplyRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ThreadMetadataAmino): ThreadMetadata {
    const message = createBaseThreadMetadata();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.accepted_reply_id !== undefined && object.accepted_reply_id !== null) {
      message.acceptedReplyId = BigInt(object.accepted_reply_id);
    }
    if (object.accepted_by !== undefined && object.accepted_by !== null) {
      message.acceptedBy = object.accepted_by;
    }
    if (object.accepted_at !== undefined && object.accepted_at !== null) {
      message.acceptedAt = BigInt(object.accepted_at);
    }
    if (object.proposed_reply_id !== undefined && object.proposed_reply_id !== null) {
      message.proposedReplyId = BigInt(object.proposed_reply_id);
    }
    if (object.proposed_by !== undefined && object.proposed_by !== null) {
      message.proposedBy = object.proposed_by;
    }
    if (object.proposed_at !== undefined && object.proposed_at !== null) {
      message.proposedAt = BigInt(object.proposed_at);
    }
    message.pinnedReplyIds = object.pinned_reply_ids?.map(e => BigInt(e)) || [];
    message.pinnedRecords = object.pinned_records?.map(e => PinnedReplyRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ThreadMetadata): ThreadMetadataAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.accepted_reply_id = message.acceptedReplyId !== BigInt(0) ? message.acceptedReplyId?.toString() : undefined;
    obj.accepted_by = message.acceptedBy === "" ? undefined : message.acceptedBy;
    obj.accepted_at = message.acceptedAt !== BigInt(0) ? message.acceptedAt?.toString() : undefined;
    obj.proposed_reply_id = message.proposedReplyId !== BigInt(0) ? message.proposedReplyId?.toString() : undefined;
    obj.proposed_by = message.proposedBy === "" ? undefined : message.proposedBy;
    obj.proposed_at = message.proposedAt !== BigInt(0) ? message.proposedAt?.toString() : undefined;
    if (message.pinnedReplyIds) {
      obj.pinned_reply_ids = message.pinnedReplyIds.map(e => e.toString());
    } else {
      obj.pinned_reply_ids = message.pinnedReplyIds;
    }
    if (message.pinnedRecords) {
      obj.pinned_records = message.pinnedRecords.map(e => e ? PinnedReplyRecord.toAmino(e) : undefined);
    } else {
      obj.pinned_records = message.pinnedRecords;
    }
    return obj;
  },
  fromAminoMsg(object: ThreadMetadataAminoMsg): ThreadMetadata {
    return ThreadMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ThreadMetadataProtoMsg): ThreadMetadata {
    return ThreadMetadata.decode(message.value);
  },
  toProto(message: ThreadMetadata): Uint8Array {
    return ThreadMetadata.encode(message).finish();
  },
  toProtoMsg(message: ThreadMetadata): ThreadMetadataProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.ThreadMetadata",
      value: ThreadMetadata.encode(message).finish()
    };
  }
};