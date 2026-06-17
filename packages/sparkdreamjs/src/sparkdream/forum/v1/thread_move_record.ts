//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ThreadMoveRecord defines the ThreadMoveRecord message.
 * @name ThreadMoveRecord
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadMoveRecord
 */
export interface ThreadMoveRecord {
  rootId: bigint;
  sentinel: string;
  originalCategoryId: bigint;
  newCategoryId: bigint;
  movedAt: bigint;
  sentinelBondSnapshot: string;
  sentinelBackingSnapshot: string;
  moveReason: string;
  appealPending: boolean;
  initiativeId: bigint;
  /**
   * committed_amount is the sentinel bond (udream, as a string) reserved at move
   * time. Released on an upheld appeal; the slash basis on an overturn. Empty
   * for governance-authority moves (no bond).
   */
  committedAmount: string;
}
export interface ThreadMoveRecordProtoMsg {
  typeUrl: "/sparkdream.forum.v1.ThreadMoveRecord";
  value: Uint8Array;
}
/**
 * ThreadMoveRecord defines the ThreadMoveRecord message.
 * @name ThreadMoveRecordAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadMoveRecord
 */
export interface ThreadMoveRecordAmino {
  root_id?: string;
  sentinel?: string;
  original_category_id?: string;
  new_category_id?: string;
  moved_at?: string;
  sentinel_bond_snapshot?: string;
  sentinel_backing_snapshot?: string;
  move_reason?: string;
  appeal_pending?: boolean;
  initiative_id?: string;
  /**
   * committed_amount is the sentinel bond (udream, as a string) reserved at move
   * time. Released on an upheld appeal; the slash basis on an overturn. Empty
   * for governance-authority moves (no bond).
   */
  committed_amount?: string;
}
export interface ThreadMoveRecordAminoMsg {
  type: "/sparkdream.forum.v1.ThreadMoveRecord";
  value: ThreadMoveRecordAmino;
}
function createBaseThreadMoveRecord(): ThreadMoveRecord {
  return {
    rootId: BigInt(0),
    sentinel: "",
    originalCategoryId: BigInt(0),
    newCategoryId: BigInt(0),
    movedAt: BigInt(0),
    sentinelBondSnapshot: "",
    sentinelBackingSnapshot: "",
    moveReason: "",
    appealPending: false,
    initiativeId: BigInt(0),
    committedAmount: ""
  };
}
/**
 * ThreadMoveRecord defines the ThreadMoveRecord message.
 * @name ThreadMoveRecord
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadMoveRecord
 */
export const ThreadMoveRecord = {
  typeUrl: "/sparkdream.forum.v1.ThreadMoveRecord",
  encode(message: ThreadMoveRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    if (message.sentinel !== "") {
      writer.uint32(18).string(message.sentinel);
    }
    if (message.originalCategoryId !== BigInt(0)) {
      writer.uint32(24).uint64(message.originalCategoryId);
    }
    if (message.newCategoryId !== BigInt(0)) {
      writer.uint32(32).uint64(message.newCategoryId);
    }
    if (message.movedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.movedAt);
    }
    if (message.sentinelBondSnapshot !== "") {
      writer.uint32(50).string(message.sentinelBondSnapshot);
    }
    if (message.sentinelBackingSnapshot !== "") {
      writer.uint32(58).string(message.sentinelBackingSnapshot);
    }
    if (message.moveReason !== "") {
      writer.uint32(66).string(message.moveReason);
    }
    if (message.appealPending === true) {
      writer.uint32(72).bool(message.appealPending);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(80).uint64(message.initiativeId);
    }
    if (message.committedAmount !== "") {
      writer.uint32(90).string(message.committedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ThreadMoveRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThreadMoveRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        case 2:
          message.sentinel = reader.string();
          break;
        case 3:
          message.originalCategoryId = reader.uint64();
          break;
        case 4:
          message.newCategoryId = reader.uint64();
          break;
        case 5:
          message.movedAt = reader.int64();
          break;
        case 6:
          message.sentinelBondSnapshot = reader.string();
          break;
        case 7:
          message.sentinelBackingSnapshot = reader.string();
          break;
        case 8:
          message.moveReason = reader.string();
          break;
        case 9:
          message.appealPending = reader.bool();
          break;
        case 10:
          message.initiativeId = reader.uint64();
          break;
        case 11:
          message.committedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ThreadMoveRecord>): ThreadMoveRecord {
    const message = createBaseThreadMoveRecord();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    message.sentinel = object.sentinel ?? "";
    message.originalCategoryId = object.originalCategoryId !== undefined && object.originalCategoryId !== null ? BigInt(object.originalCategoryId.toString()) : BigInt(0);
    message.newCategoryId = object.newCategoryId !== undefined && object.newCategoryId !== null ? BigInt(object.newCategoryId.toString()) : BigInt(0);
    message.movedAt = object.movedAt !== undefined && object.movedAt !== null ? BigInt(object.movedAt.toString()) : BigInt(0);
    message.sentinelBondSnapshot = object.sentinelBondSnapshot ?? "";
    message.sentinelBackingSnapshot = object.sentinelBackingSnapshot ?? "";
    message.moveReason = object.moveReason ?? "";
    message.appealPending = object.appealPending ?? false;
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.committedAmount = object.committedAmount ?? "";
    return message;
  },
  fromAmino(object: ThreadMoveRecordAmino): ThreadMoveRecord {
    const message = createBaseThreadMoveRecord();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    if (object.sentinel !== undefined && object.sentinel !== null) {
      message.sentinel = object.sentinel;
    }
    if (object.original_category_id !== undefined && object.original_category_id !== null) {
      message.originalCategoryId = BigInt(object.original_category_id);
    }
    if (object.new_category_id !== undefined && object.new_category_id !== null) {
      message.newCategoryId = BigInt(object.new_category_id);
    }
    if (object.moved_at !== undefined && object.moved_at !== null) {
      message.movedAt = BigInt(object.moved_at);
    }
    if (object.sentinel_bond_snapshot !== undefined && object.sentinel_bond_snapshot !== null) {
      message.sentinelBondSnapshot = object.sentinel_bond_snapshot;
    }
    if (object.sentinel_backing_snapshot !== undefined && object.sentinel_backing_snapshot !== null) {
      message.sentinelBackingSnapshot = object.sentinel_backing_snapshot;
    }
    if (object.move_reason !== undefined && object.move_reason !== null) {
      message.moveReason = object.move_reason;
    }
    if (object.appeal_pending !== undefined && object.appeal_pending !== null) {
      message.appealPending = object.appeal_pending;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.committed_amount !== undefined && object.committed_amount !== null) {
      message.committedAmount = object.committed_amount;
    }
    return message;
  },
  toAmino(message: ThreadMoveRecord): ThreadMoveRecordAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    obj.sentinel = message.sentinel === "" ? undefined : message.sentinel;
    obj.original_category_id = message.originalCategoryId !== BigInt(0) ? message.originalCategoryId?.toString() : undefined;
    obj.new_category_id = message.newCategoryId !== BigInt(0) ? message.newCategoryId?.toString() : undefined;
    obj.moved_at = message.movedAt !== BigInt(0) ? message.movedAt?.toString() : undefined;
    obj.sentinel_bond_snapshot = message.sentinelBondSnapshot === "" ? undefined : message.sentinelBondSnapshot;
    obj.sentinel_backing_snapshot = message.sentinelBackingSnapshot === "" ? undefined : message.sentinelBackingSnapshot;
    obj.move_reason = message.moveReason === "" ? undefined : message.moveReason;
    obj.appeal_pending = message.appealPending === false ? undefined : message.appealPending;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.committed_amount = message.committedAmount === "" ? undefined : message.committedAmount;
    return obj;
  },
  fromAminoMsg(object: ThreadMoveRecordAminoMsg): ThreadMoveRecord {
    return ThreadMoveRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ThreadMoveRecordProtoMsg): ThreadMoveRecord {
    return ThreadMoveRecord.decode(message.value);
  },
  toProto(message: ThreadMoveRecord): Uint8Array {
    return ThreadMoveRecord.encode(message).finish();
  },
  toProtoMsg(message: ThreadMoveRecord): ThreadMoveRecordProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.ThreadMoveRecord",
      value: ThreadMoveRecord.encode(message).finish()
    };
  }
};