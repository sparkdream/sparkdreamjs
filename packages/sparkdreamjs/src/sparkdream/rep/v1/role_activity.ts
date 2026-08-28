//@ts-nocheck
import { RoleType } from "./bonded_role";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * RoleAccuracyBucket is one reward-epoch slot in a RoleActivity's rolling
 * accuracy ring (slot index = epoch % ring size); the `epoch` stamp
 * disambiguates a live slot from a stale one left by an earlier epoch that
 * mapped to the same index.
 * @name RoleAccuracyBucket
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleAccuracyBucket
 */
export interface RoleAccuracyBucket {
  epoch: bigint;
  upheld: bigint;
  overturned: bigint;
}
export interface RoleAccuracyBucketProtoMsg {
  typeUrl: "/sparkdream.rep.v1.RoleAccuracyBucket";
  value: Uint8Array;
}
/**
 * RoleAccuracyBucket is one reward-epoch slot in a RoleActivity's rolling
 * accuracy ring (slot index = epoch % ring size); the `epoch` stamp
 * disambiguates a live slot from a stale one left by an earlier epoch that
 * mapped to the same index.
 * @name RoleAccuracyBucketAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleAccuracyBucket
 */
export interface RoleAccuracyBucketAmino {
  epoch?: string;
  upheld?: string;
  overturned?: string;
}
export interface RoleAccuracyBucketAminoMsg {
  type: "/sparkdream.rep.v1.RoleAccuracyBucket";
  value: RoleAccuracyBucketAmino;
}
/**
 * @name RoleActivity_EpochActionsEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export interface RoleActivity_EpochActionsEntry {
  key: string;
  value: bigint;
}
export interface RoleActivity_EpochActionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name RoleActivity_EpochActionsEntryAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleActivity_EpochActionsEntry
 */
export interface RoleActivity_EpochActionsEntryAmino {
  key?: string;
  value?: string;
}
export interface RoleActivity_EpochActionsEntryAminoMsg {
  type: string;
  value: RoleActivity_EpochActionsEntryAmino;
}
/**
 * @name RoleActivity_TotalActionsEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export interface RoleActivity_TotalActionsEntry {
  key: string;
  value: bigint;
}
export interface RoleActivity_TotalActionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name RoleActivity_TotalActionsEntryAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleActivity_TotalActionsEntry
 */
export interface RoleActivity_TotalActionsEntryAmino {
  key?: string;
  value?: string;
}
export interface RoleActivity_TotalActionsEntryAminoMsg {
  type: string;
  value: RoleActivity_TotalActionsEntryAmino;
}
/**
 * @name RoleActivity_UpheldActionsEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export interface RoleActivity_UpheldActionsEntry {
  key: string;
  value: bigint;
}
export interface RoleActivity_UpheldActionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name RoleActivity_UpheldActionsEntryAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleActivity_UpheldActionsEntry
 */
export interface RoleActivity_UpheldActionsEntryAmino {
  key?: string;
  value?: string;
}
export interface RoleActivity_UpheldActionsEntryAminoMsg {
  type: string;
  value: RoleActivity_UpheldActionsEntryAmino;
}
/**
 * @name RoleActivity_OverturnedActionsEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export interface RoleActivity_OverturnedActionsEntry {
  key: string;
  value: bigint;
}
export interface RoleActivity_OverturnedActionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name RoleActivity_OverturnedActionsEntryAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleActivity_OverturnedActionsEntry
 */
export interface RoleActivity_OverturnedActionsEntryAmino {
  key?: string;
  value?: string;
}
export interface RoleActivity_OverturnedActionsEntryAminoMsg {
  type: string;
  value: RoleActivity_OverturnedActionsEntryAmino;
}
/**
 * RoleActivity is the SHARED accountability record for a bonded role,
 * keyed by (role_type, address) and owned by x/rep. It holds everything
 * that is a property of the role rather than of any one module surface:
 * verdict streaks, the overturn cooldown, the rolling accuracy ring, and
 * generic per-action-kind counters. Owning modules REPORT actions
 * (RecordRoleAction) and jury verdicts (RecordRoleOutcome); x/rep applies
 * the consequences, including streak demotion (it owns the bond).
 * 
 * Module-local bookkeeping that is not shared (e.g. forum's
 * pending_hide_count, curation-proposal lifecycle counts) stays in the
 * owning module. There are deliberately NO duplicate counters: forum's
 * per-epoch moderation caps read these maps too.
 * 
 * See docs/x-rep-spec.md (RoleActivity).
 * @name RoleActivity
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleActivity
 */
export interface RoleActivity {
  roleType: RoleType;
  address: string;
  /**
   * Verdict streaks, shared across every surface the role acts on. An
   * overturn streak crossing the demotion threshold demotes the role.
   */
  consecutiveUpheld: bigint;
  consecutiveOverturns: bigint;
  /**
   * overturn_cooldown_until is the unix timestamp until which the role
   * holder may not take new moderation actions (on ANY surface) after a
   * lost appeal. Not set by curation-proposal rejections (see the kind
   * policy table in x/rep/types/role_activity_kinds.go).
   */
  overturnCooldownUntil: bigint;
  /**
   * epoch_appeals_resolved counts jury verdicts (either way) in the
   * current reward epoch; feeds the reward score's sqrt term. Reset each
   * reward epoch.
   */
  epochAppealsResolved: bigint;
  /**
   * Rolling accuracy ring (see RoleAccuracyBucket). Fixed length
   * RoleAccuracyRingSize once first written. The reward distribution
   * computes windowed accuracy over the last
   * SentinelAccuracyWindowEpochs slots.
   */
  accuracyWindow: RoleAccuracyBucket[];
  /**
   * Per-action-kind counters. Keys are the rep-owned kind constants
   * ("forum_hide", "collect_hide", "forum_appeal_filed", ...).
   * epoch_actions resets each reward epoch; the others are lifetime.
   */
  epochActions: {
    [key: string]: bigint;
  };
  totalActions: {
    [key: string]: bigint;
  };
  upheldActions: {
    [key: string]: bigint;
  };
  overturnedActions: {
    [key: string]: bigint;
  };
  /**
   * last_slash_epoch is the reward epoch (in the units the role's own
   * reward distribution reads -- see roleRewardEpoch) in which this role
   * was most recently slashed. Stamped by SlashBond for every role type.
   * 
   * Reward distributions may use it as a "no pay in an epoch you were
   * slashed in" gate; only the federation verifier does today. Stamping it
   * generically anyway is deliberate: it is a property of the bond, the
   * stamp is one write on a path that is already writing, and a role that
   * wants the gate should not have to reintroduce a private counter to get
   * it. Zero means never slashed under the current accounting.
   */
  lastSlashEpoch: bigint;
}
export interface RoleActivityProtoMsg {
  typeUrl: "/sparkdream.rep.v1.RoleActivity";
  value: Uint8Array;
}
/**
 * RoleActivity is the SHARED accountability record for a bonded role,
 * keyed by (role_type, address) and owned by x/rep. It holds everything
 * that is a property of the role rather than of any one module surface:
 * verdict streaks, the overturn cooldown, the rolling accuracy ring, and
 * generic per-action-kind counters. Owning modules REPORT actions
 * (RecordRoleAction) and jury verdicts (RecordRoleOutcome); x/rep applies
 * the consequences, including streak demotion (it owns the bond).
 * 
 * Module-local bookkeeping that is not shared (e.g. forum's
 * pending_hide_count, curation-proposal lifecycle counts) stays in the
 * owning module. There are deliberately NO duplicate counters: forum's
 * per-epoch moderation caps read these maps too.
 * 
 * See docs/x-rep-spec.md (RoleActivity).
 * @name RoleActivityAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleActivity
 */
export interface RoleActivityAmino {
  role_type?: RoleType;
  address?: string;
  /**
   * Verdict streaks, shared across every surface the role acts on. An
   * overturn streak crossing the demotion threshold demotes the role.
   */
  consecutive_upheld?: string;
  consecutive_overturns?: string;
  /**
   * overturn_cooldown_until is the unix timestamp until which the role
   * holder may not take new moderation actions (on ANY surface) after a
   * lost appeal. Not set by curation-proposal rejections (see the kind
   * policy table in x/rep/types/role_activity_kinds.go).
   */
  overturn_cooldown_until?: string;
  /**
   * epoch_appeals_resolved counts jury verdicts (either way) in the
   * current reward epoch; feeds the reward score's sqrt term. Reset each
   * reward epoch.
   */
  epoch_appeals_resolved?: string;
  /**
   * Rolling accuracy ring (see RoleAccuracyBucket). Fixed length
   * RoleAccuracyRingSize once first written. The reward distribution
   * computes windowed accuracy over the last
   * SentinelAccuracyWindowEpochs slots.
   */
  accuracy_window?: RoleAccuracyBucketAmino[];
  /**
   * Per-action-kind counters. Keys are the rep-owned kind constants
   * ("forum_hide", "collect_hide", "forum_appeal_filed", ...).
   * epoch_actions resets each reward epoch; the others are lifetime.
   */
  epoch_actions?: {
    [key: string]: string;
  };
  total_actions?: {
    [key: string]: string;
  };
  upheld_actions?: {
    [key: string]: string;
  };
  overturned_actions?: {
    [key: string]: string;
  };
  /**
   * last_slash_epoch is the reward epoch (in the units the role's own
   * reward distribution reads -- see roleRewardEpoch) in which this role
   * was most recently slashed. Stamped by SlashBond for every role type.
   * 
   * Reward distributions may use it as a "no pay in an epoch you were
   * slashed in" gate; only the federation verifier does today. Stamping it
   * generically anyway is deliberate: it is a property of the bond, the
   * stamp is one write on a path that is already writing, and a role that
   * wants the gate should not have to reintroduce a private counter to get
   * it. Zero means never slashed under the current accounting.
   */
  last_slash_epoch?: string;
}
export interface RoleActivityAminoMsg {
  type: "/sparkdream.rep.v1.RoleActivity";
  value: RoleActivityAmino;
}
function createBaseRoleAccuracyBucket(): RoleAccuracyBucket {
  return {
    epoch: BigInt(0),
    upheld: BigInt(0),
    overturned: BigInt(0)
  };
}
/**
 * RoleAccuracyBucket is one reward-epoch slot in a RoleActivity's rolling
 * accuracy ring (slot index = epoch % ring size); the `epoch` stamp
 * disambiguates a live slot from a stale one left by an earlier epoch that
 * mapped to the same index.
 * @name RoleAccuracyBucket
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleAccuracyBucket
 */
export const RoleAccuracyBucket = {
  typeUrl: "/sparkdream.rep.v1.RoleAccuracyBucket",
  encode(message: RoleAccuracyBucket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.upheld !== BigInt(0)) {
      writer.uint32(16).uint64(message.upheld);
    }
    if (message.overturned !== BigInt(0)) {
      writer.uint32(24).uint64(message.overturned);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoleAccuracyBucket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleAccuracyBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.uint64();
          break;
        case 2:
          message.upheld = reader.uint64();
          break;
        case 3:
          message.overturned = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RoleAccuracyBucket>): RoleAccuracyBucket {
    const message = createBaseRoleAccuracyBucket();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.upheld = object.upheld !== undefined && object.upheld !== null ? BigInt(object.upheld.toString()) : BigInt(0);
    message.overturned = object.overturned !== undefined && object.overturned !== null ? BigInt(object.overturned.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RoleAccuracyBucketAmino): RoleAccuracyBucket {
    const message = createBaseRoleAccuracyBucket();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.upheld !== undefined && object.upheld !== null) {
      message.upheld = BigInt(object.upheld);
    }
    if (object.overturned !== undefined && object.overturned !== null) {
      message.overturned = BigInt(object.overturned);
    }
    return message;
  },
  toAmino(message: RoleAccuracyBucket): RoleAccuracyBucketAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch?.toString() : undefined;
    obj.upheld = message.upheld !== BigInt(0) ? message.upheld?.toString() : undefined;
    obj.overturned = message.overturned !== BigInt(0) ? message.overturned?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RoleAccuracyBucketAminoMsg): RoleAccuracyBucket {
    return RoleAccuracyBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: RoleAccuracyBucketProtoMsg): RoleAccuracyBucket {
    return RoleAccuracyBucket.decode(message.value);
  },
  toProto(message: RoleAccuracyBucket): Uint8Array {
    return RoleAccuracyBucket.encode(message).finish();
  },
  toProtoMsg(message: RoleAccuracyBucket): RoleAccuracyBucketProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.RoleAccuracyBucket",
      value: RoleAccuracyBucket.encode(message).finish()
    };
  }
};
function createBaseRoleActivity_EpochActionsEntry(): RoleActivity_EpochActionsEntry {
  return {
    key: "",
    value: BigInt(0)
  };
}
/**
 * @name RoleActivity_EpochActionsEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export const RoleActivity_EpochActionsEntry = {
  encode(message: RoleActivity_EpochActionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoleActivity_EpochActionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleActivity_EpochActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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
  fromPartial(object: DeepPartial<RoleActivity_EpochActionsEntry>): RoleActivity_EpochActionsEntry {
    const message = createBaseRoleActivity_EpochActionsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RoleActivity_EpochActionsEntryAmino): RoleActivity_EpochActionsEntry {
    const message = createBaseRoleActivity_EpochActionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: RoleActivity_EpochActionsEntry): RoleActivity_EpochActionsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RoleActivity_EpochActionsEntryAminoMsg): RoleActivity_EpochActionsEntry {
    return RoleActivity_EpochActionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: RoleActivity_EpochActionsEntryProtoMsg): RoleActivity_EpochActionsEntry {
    return RoleActivity_EpochActionsEntry.decode(message.value);
  },
  toProto(message: RoleActivity_EpochActionsEntry): Uint8Array {
    return RoleActivity_EpochActionsEntry.encode(message).finish();
  }
};
function createBaseRoleActivity_TotalActionsEntry(): RoleActivity_TotalActionsEntry {
  return {
    key: "",
    value: BigInt(0)
  };
}
/**
 * @name RoleActivity_TotalActionsEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export const RoleActivity_TotalActionsEntry = {
  encode(message: RoleActivity_TotalActionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoleActivity_TotalActionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleActivity_TotalActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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
  fromPartial(object: DeepPartial<RoleActivity_TotalActionsEntry>): RoleActivity_TotalActionsEntry {
    const message = createBaseRoleActivity_TotalActionsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RoleActivity_TotalActionsEntryAmino): RoleActivity_TotalActionsEntry {
    const message = createBaseRoleActivity_TotalActionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: RoleActivity_TotalActionsEntry): RoleActivity_TotalActionsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RoleActivity_TotalActionsEntryAminoMsg): RoleActivity_TotalActionsEntry {
    return RoleActivity_TotalActionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: RoleActivity_TotalActionsEntryProtoMsg): RoleActivity_TotalActionsEntry {
    return RoleActivity_TotalActionsEntry.decode(message.value);
  },
  toProto(message: RoleActivity_TotalActionsEntry): Uint8Array {
    return RoleActivity_TotalActionsEntry.encode(message).finish();
  }
};
function createBaseRoleActivity_UpheldActionsEntry(): RoleActivity_UpheldActionsEntry {
  return {
    key: "",
    value: BigInt(0)
  };
}
/**
 * @name RoleActivity_UpheldActionsEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export const RoleActivity_UpheldActionsEntry = {
  encode(message: RoleActivity_UpheldActionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoleActivity_UpheldActionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleActivity_UpheldActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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
  fromPartial(object: DeepPartial<RoleActivity_UpheldActionsEntry>): RoleActivity_UpheldActionsEntry {
    const message = createBaseRoleActivity_UpheldActionsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RoleActivity_UpheldActionsEntryAmino): RoleActivity_UpheldActionsEntry {
    const message = createBaseRoleActivity_UpheldActionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: RoleActivity_UpheldActionsEntry): RoleActivity_UpheldActionsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RoleActivity_UpheldActionsEntryAminoMsg): RoleActivity_UpheldActionsEntry {
    return RoleActivity_UpheldActionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: RoleActivity_UpheldActionsEntryProtoMsg): RoleActivity_UpheldActionsEntry {
    return RoleActivity_UpheldActionsEntry.decode(message.value);
  },
  toProto(message: RoleActivity_UpheldActionsEntry): Uint8Array {
    return RoleActivity_UpheldActionsEntry.encode(message).finish();
  }
};
function createBaseRoleActivity_OverturnedActionsEntry(): RoleActivity_OverturnedActionsEntry {
  return {
    key: "",
    value: BigInt(0)
  };
}
/**
 * @name RoleActivity_OverturnedActionsEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export const RoleActivity_OverturnedActionsEntry = {
  encode(message: RoleActivity_OverturnedActionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoleActivity_OverturnedActionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleActivity_OverturnedActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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
  fromPartial(object: DeepPartial<RoleActivity_OverturnedActionsEntry>): RoleActivity_OverturnedActionsEntry {
    const message = createBaseRoleActivity_OverturnedActionsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RoleActivity_OverturnedActionsEntryAmino): RoleActivity_OverturnedActionsEntry {
    const message = createBaseRoleActivity_OverturnedActionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: RoleActivity_OverturnedActionsEntry): RoleActivity_OverturnedActionsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RoleActivity_OverturnedActionsEntryAminoMsg): RoleActivity_OverturnedActionsEntry {
    return RoleActivity_OverturnedActionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: RoleActivity_OverturnedActionsEntryProtoMsg): RoleActivity_OverturnedActionsEntry {
    return RoleActivity_OverturnedActionsEntry.decode(message.value);
  },
  toProto(message: RoleActivity_OverturnedActionsEntry): Uint8Array {
    return RoleActivity_OverturnedActionsEntry.encode(message).finish();
  }
};
function createBaseRoleActivity(): RoleActivity {
  return {
    roleType: 0,
    address: "",
    consecutiveUpheld: BigInt(0),
    consecutiveOverturns: BigInt(0),
    overturnCooldownUntil: BigInt(0),
    epochAppealsResolved: BigInt(0),
    accuracyWindow: [],
    epochActions: {},
    totalActions: {},
    upheldActions: {},
    overturnedActions: {},
    lastSlashEpoch: BigInt(0)
  };
}
/**
 * RoleActivity is the SHARED accountability record for a bonded role,
 * keyed by (role_type, address) and owned by x/rep. It holds everything
 * that is a property of the role rather than of any one module surface:
 * verdict streaks, the overturn cooldown, the rolling accuracy ring, and
 * generic per-action-kind counters. Owning modules REPORT actions
 * (RecordRoleAction) and jury verdicts (RecordRoleOutcome); x/rep applies
 * the consequences, including streak demotion (it owns the bond).
 * 
 * Module-local bookkeeping that is not shared (e.g. forum's
 * pending_hide_count, curation-proposal lifecycle counts) stays in the
 * owning module. There are deliberately NO duplicate counters: forum's
 * per-epoch moderation caps read these maps too.
 * 
 * See docs/x-rep-spec.md (RoleActivity).
 * @name RoleActivity
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleActivity
 */
export const RoleActivity = {
  typeUrl: "/sparkdream.rep.v1.RoleActivity",
  encode(message: RoleActivity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.roleType !== 0) {
      writer.uint32(8).int32(message.roleType);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.consecutiveUpheld !== BigInt(0)) {
      writer.uint32(24).uint64(message.consecutiveUpheld);
    }
    if (message.consecutiveOverturns !== BigInt(0)) {
      writer.uint32(32).uint64(message.consecutiveOverturns);
    }
    if (message.overturnCooldownUntil !== BigInt(0)) {
      writer.uint32(40).int64(message.overturnCooldownUntil);
    }
    if (message.epochAppealsResolved !== BigInt(0)) {
      writer.uint32(48).uint64(message.epochAppealsResolved);
    }
    for (const v of message.accuracyWindow) {
      RoleAccuracyBucket.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    Object.entries(message.epochActions).forEach(([key, value]) => {
      RoleActivity_EpochActionsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(64).fork()).ldelim();
    });
    Object.entries(message.totalActions).forEach(([key, value]) => {
      RoleActivity_TotalActionsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(72).fork()).ldelim();
    });
    Object.entries(message.upheldActions).forEach(([key, value]) => {
      RoleActivity_UpheldActionsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(80).fork()).ldelim();
    });
    Object.entries(message.overturnedActions).forEach(([key, value]) => {
      RoleActivity_OverturnedActionsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(88).fork()).ldelim();
    });
    if (message.lastSlashEpoch !== BigInt(0)) {
      writer.uint32(96).int64(message.lastSlashEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoleActivity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleActivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleType = reader.int32() as any;
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.consecutiveUpheld = reader.uint64();
          break;
        case 4:
          message.consecutiveOverturns = reader.uint64();
          break;
        case 5:
          message.overturnCooldownUntil = reader.int64();
          break;
        case 6:
          message.epochAppealsResolved = reader.uint64();
          break;
        case 7:
          message.accuracyWindow.push(RoleAccuracyBucket.decode(reader, reader.uint32()));
          break;
        case 8:
          const entry8 = RoleActivity_EpochActionsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.epochActions[entry8.key] = entry8.value;
          }
          break;
        case 9:
          const entry9 = RoleActivity_TotalActionsEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.totalActions[entry9.key] = entry9.value;
          }
          break;
        case 10:
          const entry10 = RoleActivity_UpheldActionsEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.upheldActions[entry10.key] = entry10.value;
          }
          break;
        case 11:
          const entry11 = RoleActivity_OverturnedActionsEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.overturnedActions[entry11.key] = entry11.value;
          }
          break;
        case 12:
          message.lastSlashEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RoleActivity>): RoleActivity {
    const message = createBaseRoleActivity();
    message.roleType = object.roleType ?? 0;
    message.address = object.address ?? "";
    message.consecutiveUpheld = object.consecutiveUpheld !== undefined && object.consecutiveUpheld !== null ? BigInt(object.consecutiveUpheld.toString()) : BigInt(0);
    message.consecutiveOverturns = object.consecutiveOverturns !== undefined && object.consecutiveOverturns !== null ? BigInt(object.consecutiveOverturns.toString()) : BigInt(0);
    message.overturnCooldownUntil = object.overturnCooldownUntil !== undefined && object.overturnCooldownUntil !== null ? BigInt(object.overturnCooldownUntil.toString()) : BigInt(0);
    message.epochAppealsResolved = object.epochAppealsResolved !== undefined && object.epochAppealsResolved !== null ? BigInt(object.epochAppealsResolved.toString()) : BigInt(0);
    message.accuracyWindow = object.accuracyWindow?.map(e => RoleAccuracyBucket.fromPartial(e)) || [];
    message.epochActions = Object.entries(object.epochActions ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    message.totalActions = Object.entries(object.totalActions ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    message.upheldActions = Object.entries(object.upheldActions ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    message.overturnedActions = Object.entries(object.overturnedActions ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    message.lastSlashEpoch = object.lastSlashEpoch !== undefined && object.lastSlashEpoch !== null ? BigInt(object.lastSlashEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RoleActivityAmino): RoleActivity {
    const message = createBaseRoleActivity();
    if (object.role_type !== undefined && object.role_type !== null) {
      message.roleType = object.role_type;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.consecutive_upheld !== undefined && object.consecutive_upheld !== null) {
      message.consecutiveUpheld = BigInt(object.consecutive_upheld);
    }
    if (object.consecutive_overturns !== undefined && object.consecutive_overturns !== null) {
      message.consecutiveOverturns = BigInt(object.consecutive_overturns);
    }
    if (object.overturn_cooldown_until !== undefined && object.overturn_cooldown_until !== null) {
      message.overturnCooldownUntil = BigInt(object.overturn_cooldown_until);
    }
    if (object.epoch_appeals_resolved !== undefined && object.epoch_appeals_resolved !== null) {
      message.epochAppealsResolved = BigInt(object.epoch_appeals_resolved);
    }
    message.accuracyWindow = object.accuracy_window?.map(e => RoleAccuracyBucket.fromAmino(e)) || [];
    message.epochActions = Object.entries(object.epoch_actions ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    message.totalActions = Object.entries(object.total_actions ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    message.upheldActions = Object.entries(object.upheld_actions ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    message.overturnedActions = Object.entries(object.overturned_actions ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    if (object.last_slash_epoch !== undefined && object.last_slash_epoch !== null) {
      message.lastSlashEpoch = BigInt(object.last_slash_epoch);
    }
    return message;
  },
  toAmino(message: RoleActivity): RoleActivityAmino {
    const obj: any = {};
    obj.role_type = message.roleType === 0 ? undefined : message.roleType;
    obj.address = message.address === "" ? undefined : message.address;
    obj.consecutive_upheld = message.consecutiveUpheld !== BigInt(0) ? message.consecutiveUpheld?.toString() : undefined;
    obj.consecutive_overturns = message.consecutiveOverturns !== BigInt(0) ? message.consecutiveOverturns?.toString() : undefined;
    obj.overturn_cooldown_until = message.overturnCooldownUntil !== BigInt(0) ? message.overturnCooldownUntil?.toString() : undefined;
    obj.epoch_appeals_resolved = message.epochAppealsResolved !== BigInt(0) ? message.epochAppealsResolved?.toString() : undefined;
    if (message.accuracyWindow) {
      obj.accuracy_window = message.accuracyWindow.map(e => e ? RoleAccuracyBucket.toAmino(e) : undefined);
    } else {
      obj.accuracy_window = message.accuracyWindow;
    }
    obj.epoch_actions = {};
    if (message.epochActions) {
      Object.entries(message.epochActions).forEach(([k, v]) => {
        obj.epoch_actions[k] = v.toString();
      });
    }
    obj.total_actions = {};
    if (message.totalActions) {
      Object.entries(message.totalActions).forEach(([k, v]) => {
        obj.total_actions[k] = v.toString();
      });
    }
    obj.upheld_actions = {};
    if (message.upheldActions) {
      Object.entries(message.upheldActions).forEach(([k, v]) => {
        obj.upheld_actions[k] = v.toString();
      });
    }
    obj.overturned_actions = {};
    if (message.overturnedActions) {
      Object.entries(message.overturnedActions).forEach(([k, v]) => {
        obj.overturned_actions[k] = v.toString();
      });
    }
    obj.last_slash_epoch = message.lastSlashEpoch !== BigInt(0) ? message.lastSlashEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RoleActivityAminoMsg): RoleActivity {
    return RoleActivity.fromAmino(object.value);
  },
  fromProtoMsg(message: RoleActivityProtoMsg): RoleActivity {
    return RoleActivity.decode(message.value);
  },
  toProto(message: RoleActivity): Uint8Array {
    return RoleActivity.encode(message).finish();
  },
  toProtoMsg(message: RoleActivity): RoleActivityProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.RoleActivity",
      value: RoleActivity.encode(message).finish()
    };
  }
};