//@ts-nocheck
import { ModerationReason } from "../../common/v1/moderation_reason";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * HideRecord defines the HideRecord message.
 * 
 * Created by MsgHidePost for both sentinel hides and gov-authority hides.
 * The `sentinel` field distinguishes the two: a non-empty address means a
 * sentinel performed the hide and the record drives the appeal flow; an
 * empty string is the gov-hide marker and the record exists only to enable
 * council-driven reversal (author-bond restore + HideRecord cleanup).
 * @name HideRecord
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.HideRecord
 */
export interface HideRecord {
  postId: bigint;
  /**
   * Address of the sentinel who hid the post. Empty string is the gov-hide
   * marker: AppealPost rejects these as ErrGovLockNotAppealable (must go
   * through MsgAppealGovAction); GetActionSentinel / RecordSentinelAction*
   * helpers soft-skip on empty.
   */
  sentinel: string;
  hiddenAt: bigint;
  sentinelBondSnapshot: string;
  sentinelBackingSnapshot: string;
  committedAmount: string;
  reasonCode: ModerationReason;
  reasonText: string;
  /**
   * author_bond_amount captures the author bond that was slashed by MsgHidePost
   * (math.Int as string; empty / "0" means no bond was attached). On reversal
   * (MsgUnhidePost or appeal-OVERTURNED via ReverseSentinelAction) this amount
   * is minted back to the author and re-locked as a fresh author bond, so the
   * round-trip net DREAM supply change is zero. Populated for BOTH sentinel
   * hides and gov-authority hides — see the `sentinel` field for how the two
   * hide flavors are distinguished.
   */
  authorBondAmount: string;
  /**
   * appealed is set true when an appeal is filed against this hide (via
   * MsgAppealPost). The hide-expiry EndBlocker reads it to avoid double-counting:
   * an appealed hide was already tallied as upheld/overturned, so only an
   * un-appealed hide that expires increments unchallenged_hides.
   */
  appealed: boolean;
}
export interface HideRecordProtoMsg {
  typeUrl: "/sparkdream.forum.v1.HideRecord";
  value: Uint8Array;
}
/**
 * HideRecord defines the HideRecord message.
 * 
 * Created by MsgHidePost for both sentinel hides and gov-authority hides.
 * The `sentinel` field distinguishes the two: a non-empty address means a
 * sentinel performed the hide and the record drives the appeal flow; an
 * empty string is the gov-hide marker and the record exists only to enable
 * council-driven reversal (author-bond restore + HideRecord cleanup).
 * @name HideRecordAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.HideRecord
 */
export interface HideRecordAmino {
  post_id?: string;
  /**
   * Address of the sentinel who hid the post. Empty string is the gov-hide
   * marker: AppealPost rejects these as ErrGovLockNotAppealable (must go
   * through MsgAppealGovAction); GetActionSentinel / RecordSentinelAction*
   * helpers soft-skip on empty.
   */
  sentinel?: string;
  hidden_at?: string;
  sentinel_bond_snapshot?: string;
  sentinel_backing_snapshot?: string;
  committed_amount?: string;
  reason_code?: ModerationReason;
  reason_text?: string;
  /**
   * author_bond_amount captures the author bond that was slashed by MsgHidePost
   * (math.Int as string; empty / "0" means no bond was attached). On reversal
   * (MsgUnhidePost or appeal-OVERTURNED via ReverseSentinelAction) this amount
   * is minted back to the author and re-locked as a fresh author bond, so the
   * round-trip net DREAM supply change is zero. Populated for BOTH sentinel
   * hides and gov-authority hides — see the `sentinel` field for how the two
   * hide flavors are distinguished.
   */
  author_bond_amount?: string;
  /**
   * appealed is set true when an appeal is filed against this hide (via
   * MsgAppealPost). The hide-expiry EndBlocker reads it to avoid double-counting:
   * an appealed hide was already tallied as upheld/overturned, so only an
   * un-appealed hide that expires increments unchallenged_hides.
   */
  appealed?: boolean;
}
export interface HideRecordAminoMsg {
  type: "/sparkdream.forum.v1.HideRecord";
  value: HideRecordAmino;
}
function createBaseHideRecord(): HideRecord {
  return {
    postId: BigInt(0),
    sentinel: "",
    hiddenAt: BigInt(0),
    sentinelBondSnapshot: "",
    sentinelBackingSnapshot: "",
    committedAmount: "",
    reasonCode: 0,
    reasonText: "",
    authorBondAmount: "",
    appealed: false
  };
}
/**
 * HideRecord defines the HideRecord message.
 * 
 * Created by MsgHidePost for both sentinel hides and gov-authority hides.
 * The `sentinel` field distinguishes the two: a non-empty address means a
 * sentinel performed the hide and the record drives the appeal flow; an
 * empty string is the gov-hide marker and the record exists only to enable
 * council-driven reversal (author-bond restore + HideRecord cleanup).
 * @name HideRecord
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.HideRecord
 */
export const HideRecord = {
  typeUrl: "/sparkdream.forum.v1.HideRecord",
  encode(message: HideRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.sentinel !== "") {
      writer.uint32(18).string(message.sentinel);
    }
    if (message.hiddenAt !== BigInt(0)) {
      writer.uint32(24).int64(message.hiddenAt);
    }
    if (message.sentinelBondSnapshot !== "") {
      writer.uint32(34).string(message.sentinelBondSnapshot);
    }
    if (message.sentinelBackingSnapshot !== "") {
      writer.uint32(42).string(message.sentinelBackingSnapshot);
    }
    if (message.committedAmount !== "") {
      writer.uint32(50).string(message.committedAmount);
    }
    if (message.reasonCode !== 0) {
      writer.uint32(56).int32(message.reasonCode);
    }
    if (message.reasonText !== "") {
      writer.uint32(66).string(message.reasonText);
    }
    if (message.authorBondAmount !== "") {
      writer.uint32(74).string(message.authorBondAmount);
    }
    if (message.appealed === true) {
      writer.uint32(80).bool(message.appealed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HideRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHideRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.sentinel = reader.string();
          break;
        case 3:
          message.hiddenAt = reader.int64();
          break;
        case 4:
          message.sentinelBondSnapshot = reader.string();
          break;
        case 5:
          message.sentinelBackingSnapshot = reader.string();
          break;
        case 6:
          message.committedAmount = reader.string();
          break;
        case 7:
          message.reasonCode = reader.int32() as any;
          break;
        case 8:
          message.reasonText = reader.string();
          break;
        case 9:
          message.authorBondAmount = reader.string();
          break;
        case 10:
          message.appealed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HideRecord>): HideRecord {
    const message = createBaseHideRecord();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.sentinel = object.sentinel ?? "";
    message.hiddenAt = object.hiddenAt !== undefined && object.hiddenAt !== null ? BigInt(object.hiddenAt.toString()) : BigInt(0);
    message.sentinelBondSnapshot = object.sentinelBondSnapshot ?? "";
    message.sentinelBackingSnapshot = object.sentinelBackingSnapshot ?? "";
    message.committedAmount = object.committedAmount ?? "";
    message.reasonCode = object.reasonCode ?? 0;
    message.reasonText = object.reasonText ?? "";
    message.authorBondAmount = object.authorBondAmount ?? "";
    message.appealed = object.appealed ?? false;
    return message;
  },
  fromAmino(object: HideRecordAmino): HideRecord {
    const message = createBaseHideRecord();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.sentinel !== undefined && object.sentinel !== null) {
      message.sentinel = object.sentinel;
    }
    if (object.hidden_at !== undefined && object.hidden_at !== null) {
      message.hiddenAt = BigInt(object.hidden_at);
    }
    if (object.sentinel_bond_snapshot !== undefined && object.sentinel_bond_snapshot !== null) {
      message.sentinelBondSnapshot = object.sentinel_bond_snapshot;
    }
    if (object.sentinel_backing_snapshot !== undefined && object.sentinel_backing_snapshot !== null) {
      message.sentinelBackingSnapshot = object.sentinel_backing_snapshot;
    }
    if (object.committed_amount !== undefined && object.committed_amount !== null) {
      message.committedAmount = object.committed_amount;
    }
    if (object.reason_code !== undefined && object.reason_code !== null) {
      message.reasonCode = object.reason_code;
    }
    if (object.reason_text !== undefined && object.reason_text !== null) {
      message.reasonText = object.reason_text;
    }
    if (object.author_bond_amount !== undefined && object.author_bond_amount !== null) {
      message.authorBondAmount = object.author_bond_amount;
    }
    if (object.appealed !== undefined && object.appealed !== null) {
      message.appealed = object.appealed;
    }
    return message;
  },
  toAmino(message: HideRecord): HideRecordAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.sentinel = message.sentinel === "" ? undefined : message.sentinel;
    obj.hidden_at = message.hiddenAt !== BigInt(0) ? message.hiddenAt?.toString() : undefined;
    obj.sentinel_bond_snapshot = message.sentinelBondSnapshot === "" ? undefined : message.sentinelBondSnapshot;
    obj.sentinel_backing_snapshot = message.sentinelBackingSnapshot === "" ? undefined : message.sentinelBackingSnapshot;
    obj.committed_amount = message.committedAmount === "" ? undefined : message.committedAmount;
    obj.reason_code = message.reasonCode === 0 ? undefined : message.reasonCode;
    obj.reason_text = message.reasonText === "" ? undefined : message.reasonText;
    obj.author_bond_amount = message.authorBondAmount === "" ? undefined : message.authorBondAmount;
    obj.appealed = message.appealed === false ? undefined : message.appealed;
    return obj;
  },
  fromAminoMsg(object: HideRecordAminoMsg): HideRecord {
    return HideRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: HideRecordProtoMsg): HideRecord {
    return HideRecord.decode(message.value);
  },
  toProto(message: HideRecord): Uint8Array {
    return HideRecord.encode(message).finish();
  },
  toProtoMsg(message: HideRecord): HideRecordProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.HideRecord",
      value: HideRecord.encode(message).finish()
    };
  }
};