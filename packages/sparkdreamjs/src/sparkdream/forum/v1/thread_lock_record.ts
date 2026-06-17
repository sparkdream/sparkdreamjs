//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ThreadLockRecord defines the ThreadLockRecord message.
 * @name ThreadLockRecord
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadLockRecord
 */
export interface ThreadLockRecord {
  rootId: bigint;
  sentinel: string;
  lockedAt: bigint;
  sentinelBondSnapshot: string;
  sentinelBackingSnapshot: string;
  lockReason: string;
  appealPending: boolean;
  initiativeId: bigint;
  /**
   * committed_amount is the sentinel bond (udream, as a string) reserved at lock
   * time. Released on self-unlock or an upheld appeal, and the amount slashed
   * basis on an overturn. Empty for governance-authority locks (no bond).
   */
  committedAmount: string;
}
export interface ThreadLockRecordProtoMsg {
  typeUrl: "/sparkdream.forum.v1.ThreadLockRecord";
  value: Uint8Array;
}
/**
 * ThreadLockRecord defines the ThreadLockRecord message.
 * @name ThreadLockRecordAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadLockRecord
 */
export interface ThreadLockRecordAmino {
  root_id?: string;
  sentinel?: string;
  locked_at?: string;
  sentinel_bond_snapshot?: string;
  sentinel_backing_snapshot?: string;
  lock_reason?: string;
  appeal_pending?: boolean;
  initiative_id?: string;
  /**
   * committed_amount is the sentinel bond (udream, as a string) reserved at lock
   * time. Released on self-unlock or an upheld appeal, and the amount slashed
   * basis on an overturn. Empty for governance-authority locks (no bond).
   */
  committed_amount?: string;
}
export interface ThreadLockRecordAminoMsg {
  type: "/sparkdream.forum.v1.ThreadLockRecord";
  value: ThreadLockRecordAmino;
}
function createBaseThreadLockRecord(): ThreadLockRecord {
  return {
    rootId: BigInt(0),
    sentinel: "",
    lockedAt: BigInt(0),
    sentinelBondSnapshot: "",
    sentinelBackingSnapshot: "",
    lockReason: "",
    appealPending: false,
    initiativeId: BigInt(0),
    committedAmount: ""
  };
}
/**
 * ThreadLockRecord defines the ThreadLockRecord message.
 * @name ThreadLockRecord
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ThreadLockRecord
 */
export const ThreadLockRecord = {
  typeUrl: "/sparkdream.forum.v1.ThreadLockRecord",
  encode(message: ThreadLockRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    if (message.sentinel !== "") {
      writer.uint32(18).string(message.sentinel);
    }
    if (message.lockedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.lockedAt);
    }
    if (message.sentinelBondSnapshot !== "") {
      writer.uint32(34).string(message.sentinelBondSnapshot);
    }
    if (message.sentinelBackingSnapshot !== "") {
      writer.uint32(42).string(message.sentinelBackingSnapshot);
    }
    if (message.lockReason !== "") {
      writer.uint32(50).string(message.lockReason);
    }
    if (message.appealPending === true) {
      writer.uint32(56).bool(message.appealPending);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(64).uint64(message.initiativeId);
    }
    if (message.committedAmount !== "") {
      writer.uint32(74).string(message.committedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ThreadLockRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThreadLockRecord();
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
          message.lockedAt = reader.int64();
          break;
        case 4:
          message.sentinelBondSnapshot = reader.string();
          break;
        case 5:
          message.sentinelBackingSnapshot = reader.string();
          break;
        case 6:
          message.lockReason = reader.string();
          break;
        case 7:
          message.appealPending = reader.bool();
          break;
        case 8:
          message.initiativeId = reader.uint64();
          break;
        case 9:
          message.committedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ThreadLockRecord>): ThreadLockRecord {
    const message = createBaseThreadLockRecord();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    message.sentinel = object.sentinel ?? "";
    message.lockedAt = object.lockedAt !== undefined && object.lockedAt !== null ? BigInt(object.lockedAt.toString()) : BigInt(0);
    message.sentinelBondSnapshot = object.sentinelBondSnapshot ?? "";
    message.sentinelBackingSnapshot = object.sentinelBackingSnapshot ?? "";
    message.lockReason = object.lockReason ?? "";
    message.appealPending = object.appealPending ?? false;
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.committedAmount = object.committedAmount ?? "";
    return message;
  },
  fromAmino(object: ThreadLockRecordAmino): ThreadLockRecord {
    const message = createBaseThreadLockRecord();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    if (object.sentinel !== undefined && object.sentinel !== null) {
      message.sentinel = object.sentinel;
    }
    if (object.locked_at !== undefined && object.locked_at !== null) {
      message.lockedAt = BigInt(object.locked_at);
    }
    if (object.sentinel_bond_snapshot !== undefined && object.sentinel_bond_snapshot !== null) {
      message.sentinelBondSnapshot = object.sentinel_bond_snapshot;
    }
    if (object.sentinel_backing_snapshot !== undefined && object.sentinel_backing_snapshot !== null) {
      message.sentinelBackingSnapshot = object.sentinel_backing_snapshot;
    }
    if (object.lock_reason !== undefined && object.lock_reason !== null) {
      message.lockReason = object.lock_reason;
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
  toAmino(message: ThreadLockRecord): ThreadLockRecordAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    obj.sentinel = message.sentinel === "" ? undefined : message.sentinel;
    obj.locked_at = message.lockedAt !== BigInt(0) ? message.lockedAt?.toString() : undefined;
    obj.sentinel_bond_snapshot = message.sentinelBondSnapshot === "" ? undefined : message.sentinelBondSnapshot;
    obj.sentinel_backing_snapshot = message.sentinelBackingSnapshot === "" ? undefined : message.sentinelBackingSnapshot;
    obj.lock_reason = message.lockReason === "" ? undefined : message.lockReason;
    obj.appeal_pending = message.appealPending === false ? undefined : message.appealPending;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.committed_amount = message.committedAmount === "" ? undefined : message.committedAmount;
    return obj;
  },
  fromAminoMsg(object: ThreadLockRecordAminoMsg): ThreadLockRecord {
    return ThreadLockRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ThreadLockRecordProtoMsg): ThreadLockRecord {
    return ThreadLockRecord.decode(message.value);
  },
  toProto(message: ThreadLockRecord): Uint8Array {
    return ThreadLockRecord.encode(message).finish();
  },
  toProtoMsg(message: ThreadLockRecord): ThreadLockRecordProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.ThreadLockRecord",
      value: ThreadLockRecord.encode(message).finish()
    };
  }
};