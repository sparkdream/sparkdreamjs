//@ts-nocheck
import { ModerationReason } from "./moderation_reason";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * FlagRecord records a single member's flag on a piece of content.
 * Shared across modules (x/forum, x/collect) for consistent moderation records.
 * @name FlagRecord
 * @package sparkdream.common.v1
 * @see proto type: sparkdream.common.v1.FlagRecord
 */
export interface FlagRecord {
  flagger: string;
  reason: ModerationReason;
  reasonText: string;
  flaggedAt: bigint;
  weight: string;
}
export interface FlagRecordProtoMsg {
  typeUrl: "/sparkdream.common.v1.FlagRecord";
  value: Uint8Array;
}
/**
 * FlagRecord records a single member's flag on a piece of content.
 * Shared across modules (x/forum, x/collect) for consistent moderation records.
 * @name FlagRecordAmino
 * @package sparkdream.common.v1
 * @see proto type: sparkdream.common.v1.FlagRecord
 */
export interface FlagRecordAmino {
  flagger?: string;
  reason?: ModerationReason;
  reason_text?: string;
  flagged_at?: string;
  weight?: string;
}
export interface FlagRecordAminoMsg {
  type: "/sparkdream.common.v1.FlagRecord";
  value: FlagRecordAmino;
}
function createBaseFlagRecord(): FlagRecord {
  return {
    flagger: "",
    reason: 0,
    reasonText: "",
    flaggedAt: BigInt(0),
    weight: ""
  };
}
/**
 * FlagRecord records a single member's flag on a piece of content.
 * Shared across modules (x/forum, x/collect) for consistent moderation records.
 * @name FlagRecord
 * @package sparkdream.common.v1
 * @see proto type: sparkdream.common.v1.FlagRecord
 */
export const FlagRecord = {
  typeUrl: "/sparkdream.common.v1.FlagRecord",
  encode(message: FlagRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flagger !== "") {
      writer.uint32(10).string(message.flagger);
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    if (message.reasonText !== "") {
      writer.uint32(26).string(message.reasonText);
    }
    if (message.flaggedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.flaggedAt);
    }
    if (message.weight !== "") {
      writer.uint32(42).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FlagRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlagRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flagger = reader.string();
          break;
        case 2:
          message.reason = reader.int32() as any;
          break;
        case 3:
          message.reasonText = reader.string();
          break;
        case 4:
          message.flaggedAt = reader.int64();
          break;
        case 5:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FlagRecord>): FlagRecord {
    const message = createBaseFlagRecord();
    message.flagger = object.flagger ?? "";
    message.reason = object.reason ?? 0;
    message.reasonText = object.reasonText ?? "";
    message.flaggedAt = object.flaggedAt !== undefined && object.flaggedAt !== null ? BigInt(object.flaggedAt.toString()) : BigInt(0);
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: FlagRecordAmino): FlagRecord {
    const message = createBaseFlagRecord();
    if (object.flagger !== undefined && object.flagger !== null) {
      message.flagger = object.flagger;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.reason_text !== undefined && object.reason_text !== null) {
      message.reasonText = object.reason_text;
    }
    if (object.flagged_at !== undefined && object.flagged_at !== null) {
      message.flaggedAt = BigInt(object.flagged_at);
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: FlagRecord): FlagRecordAmino {
    const obj: any = {};
    obj.flagger = message.flagger === "" ? undefined : message.flagger;
    obj.reason = message.reason === 0 ? undefined : message.reason;
    obj.reason_text = message.reasonText === "" ? undefined : message.reasonText;
    obj.flagged_at = message.flaggedAt !== BigInt(0) ? message.flaggedAt?.toString() : undefined;
    obj.weight = message.weight === "" ? undefined : message.weight;
    return obj;
  },
  fromAminoMsg(object: FlagRecordAminoMsg): FlagRecord {
    return FlagRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: FlagRecordProtoMsg): FlagRecord {
    return FlagRecord.decode(message.value);
  },
  toProto(message: FlagRecord): Uint8Array {
    return FlagRecord.encode(message).finish();
  },
  toProtoMsg(message: FlagRecord): FlagRecordProtoMsg {
    return {
      typeUrl: "/sparkdream.common.v1.FlagRecord",
      value: FlagRecord.encode(message).finish()
    };
  }
};