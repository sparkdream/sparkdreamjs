//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * VerifierActivity is federation's SLIM per-verifier record.
 * 
 * Everything that is a property of the ROLE rather than of federation's
 * surface -- verdict streaks, the overturn cooldown, the rolling accuracy
 * ring, and the per-action counters -- lives on x/rep's shared RoleActivity
 * under ROLE_TYPE_FEDERATION_VERIFIER, alongside the bond it governs.
 * Federation reports actions (RecordRoleAction with
 * ActionKindFederationVerify) and verdicts (RecordRoleOutcome); x/rep applies
 * the consequences and pays the role. Same ownership split forum and collect
 * already use for the content sentinel.
 * 
 * Only unchallenged_verifications stays here: it is a federation-local
 * bookkeeping stat with no shared meaning -- an unchallenged verification is
 * not evidence of accuracy and deliberately earns nothing, so it must not
 * reach the accuracy ring.
 * 
 * The QueryVerifierActivityResponse still returns the FULL historical shape.
 * Those fields are PROJECTED from rep at query time (see
 * query_verifier_activity.go) and are not persisted here.
 * @name VerifierActivity
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.VerifierActivity
 */
export interface VerifierActivity {
  address: string;
  /**
   * unchallenged_verifications counts verifications whose challenge window
   * closed with no challenge filed. Bumped by the Phase 6 EndBlocker sweep.
   */
  unchallengedVerifications: bigint;
}
export interface VerifierActivityProtoMsg {
  typeUrl: "/sparkdream.federation.v1.VerifierActivity";
  value: Uint8Array;
}
/**
 * VerifierActivity is federation's SLIM per-verifier record.
 * 
 * Everything that is a property of the ROLE rather than of federation's
 * surface -- verdict streaks, the overturn cooldown, the rolling accuracy
 * ring, and the per-action counters -- lives on x/rep's shared RoleActivity
 * under ROLE_TYPE_FEDERATION_VERIFIER, alongside the bond it governs.
 * Federation reports actions (RecordRoleAction with
 * ActionKindFederationVerify) and verdicts (RecordRoleOutcome); x/rep applies
 * the consequences and pays the role. Same ownership split forum and collect
 * already use for the content sentinel.
 * 
 * Only unchallenged_verifications stays here: it is a federation-local
 * bookkeeping stat with no shared meaning -- an unchallenged verification is
 * not evidence of accuracy and deliberately earns nothing, so it must not
 * reach the accuracy ring.
 * 
 * The QueryVerifierActivityResponse still returns the FULL historical shape.
 * Those fields are PROJECTED from rep at query time (see
 * query_verifier_activity.go) and are not persisted here.
 * @name VerifierActivityAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.VerifierActivity
 */
export interface VerifierActivityAmino {
  address?: string;
  /**
   * unchallenged_verifications counts verifications whose challenge window
   * closed with no challenge filed. Bumped by the Phase 6 EndBlocker sweep.
   */
  unchallenged_verifications?: string;
}
export interface VerifierActivityAminoMsg {
  type: "/sparkdream.federation.v1.VerifierActivity";
  value: VerifierActivityAmino;
}
/**
 * VerifierActivityView is the read-only projection returned by the
 * verifier-activity query: federation's slim stored record overlaid with the
 * shared accountability state x/rep owns. Never persisted.
 * @name VerifierActivityView
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.VerifierActivityView
 */
export interface VerifierActivityView {
  address: string;
  /**
   * Federation-local (stored).
   */
  unchallengedVerifications: bigint;
  /**
   * Projected from rep RoleActivity per-kind counters
   * (ActionKindFederationVerify).
   */
  totalVerifications: bigint;
  upheldVerifications: bigint;
  overturnedVerifications: bigint;
  epochVerifications: bigint;
  /**
   * Projected from rep RoleActivity shared fields.
   */
  epochChallengesResolved: bigint;
  consecutiveOverturns: bigint;
  consecutiveUpheld: bigint;
  overturnCooldownUntil: bigint;
  lastSlashEpoch: bigint;
  /**
   * slash_count is DERIVED, not stored: every upheld challenge against a
   * verifier slashes exactly once, so the overturned-verification count IS
   * the slash count. It was a duplicate counter incremented on the same line
   * as the overturn before the migration.
   */
  slashCount: bigint;
}
export interface VerifierActivityViewProtoMsg {
  typeUrl: "/sparkdream.federation.v1.VerifierActivityView";
  value: Uint8Array;
}
/**
 * VerifierActivityView is the read-only projection returned by the
 * verifier-activity query: federation's slim stored record overlaid with the
 * shared accountability state x/rep owns. Never persisted.
 * @name VerifierActivityViewAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.VerifierActivityView
 */
export interface VerifierActivityViewAmino {
  address?: string;
  /**
   * Federation-local (stored).
   */
  unchallenged_verifications?: string;
  /**
   * Projected from rep RoleActivity per-kind counters
   * (ActionKindFederationVerify).
   */
  total_verifications?: string;
  upheld_verifications?: string;
  overturned_verifications?: string;
  epoch_verifications?: string;
  /**
   * Projected from rep RoleActivity shared fields.
   */
  epoch_challenges_resolved?: string;
  consecutive_overturns?: string;
  consecutive_upheld?: string;
  overturn_cooldown_until?: string;
  last_slash_epoch?: string;
  /**
   * slash_count is DERIVED, not stored: every upheld challenge against a
   * verifier slashes exactly once, so the overturned-verification count IS
   * the slash count. It was a duplicate counter incremented on the same line
   * as the overturn before the migration.
   */
  slash_count?: string;
}
export interface VerifierActivityViewAminoMsg {
  type: "/sparkdream.federation.v1.VerifierActivityView";
  value: VerifierActivityViewAmino;
}
function createBaseVerifierActivity(): VerifierActivity {
  return {
    address: "",
    unchallengedVerifications: BigInt(0)
  };
}
/**
 * VerifierActivity is federation's SLIM per-verifier record.
 * 
 * Everything that is a property of the ROLE rather than of federation's
 * surface -- verdict streaks, the overturn cooldown, the rolling accuracy
 * ring, and the per-action counters -- lives on x/rep's shared RoleActivity
 * under ROLE_TYPE_FEDERATION_VERIFIER, alongside the bond it governs.
 * Federation reports actions (RecordRoleAction with
 * ActionKindFederationVerify) and verdicts (RecordRoleOutcome); x/rep applies
 * the consequences and pays the role. Same ownership split forum and collect
 * already use for the content sentinel.
 * 
 * Only unchallenged_verifications stays here: it is a federation-local
 * bookkeeping stat with no shared meaning -- an unchallenged verification is
 * not evidence of accuracy and deliberately earns nothing, so it must not
 * reach the accuracy ring.
 * 
 * The QueryVerifierActivityResponse still returns the FULL historical shape.
 * Those fields are PROJECTED from rep at query time (see
 * query_verifier_activity.go) and are not persisted here.
 * @name VerifierActivity
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.VerifierActivity
 */
export const VerifierActivity = {
  typeUrl: "/sparkdream.federation.v1.VerifierActivity",
  encode(message: VerifierActivity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.unchallengedVerifications !== BigInt(0)) {
      writer.uint32(16).uint64(message.unchallengedVerifications);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VerifierActivity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifierActivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.unchallengedVerifications = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VerifierActivity>): VerifierActivity {
    const message = createBaseVerifierActivity();
    message.address = object.address ?? "";
    message.unchallengedVerifications = object.unchallengedVerifications !== undefined && object.unchallengedVerifications !== null ? BigInt(object.unchallengedVerifications.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VerifierActivityAmino): VerifierActivity {
    const message = createBaseVerifierActivity();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.unchallenged_verifications !== undefined && object.unchallenged_verifications !== null) {
      message.unchallengedVerifications = BigInt(object.unchallenged_verifications);
    }
    return message;
  },
  toAmino(message: VerifierActivity): VerifierActivityAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.unchallenged_verifications = message.unchallengedVerifications !== BigInt(0) ? message.unchallengedVerifications?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VerifierActivityAminoMsg): VerifierActivity {
    return VerifierActivity.fromAmino(object.value);
  },
  fromProtoMsg(message: VerifierActivityProtoMsg): VerifierActivity {
    return VerifierActivity.decode(message.value);
  },
  toProto(message: VerifierActivity): Uint8Array {
    return VerifierActivity.encode(message).finish();
  },
  toProtoMsg(message: VerifierActivity): VerifierActivityProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.VerifierActivity",
      value: VerifierActivity.encode(message).finish()
    };
  }
};
function createBaseVerifierActivityView(): VerifierActivityView {
  return {
    address: "",
    unchallengedVerifications: BigInt(0),
    totalVerifications: BigInt(0),
    upheldVerifications: BigInt(0),
    overturnedVerifications: BigInt(0),
    epochVerifications: BigInt(0),
    epochChallengesResolved: BigInt(0),
    consecutiveOverturns: BigInt(0),
    consecutiveUpheld: BigInt(0),
    overturnCooldownUntil: BigInt(0),
    lastSlashEpoch: BigInt(0),
    slashCount: BigInt(0)
  };
}
/**
 * VerifierActivityView is the read-only projection returned by the
 * verifier-activity query: federation's slim stored record overlaid with the
 * shared accountability state x/rep owns. Never persisted.
 * @name VerifierActivityView
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.VerifierActivityView
 */
export const VerifierActivityView = {
  typeUrl: "/sparkdream.federation.v1.VerifierActivityView",
  encode(message: VerifierActivityView, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.unchallengedVerifications !== BigInt(0)) {
      writer.uint32(16).uint64(message.unchallengedVerifications);
    }
    if (message.totalVerifications !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalVerifications);
    }
    if (message.upheldVerifications !== BigInt(0)) {
      writer.uint32(32).uint64(message.upheldVerifications);
    }
    if (message.overturnedVerifications !== BigInt(0)) {
      writer.uint32(40).uint64(message.overturnedVerifications);
    }
    if (message.epochVerifications !== BigInt(0)) {
      writer.uint32(48).uint64(message.epochVerifications);
    }
    if (message.epochChallengesResolved !== BigInt(0)) {
      writer.uint32(56).uint64(message.epochChallengesResolved);
    }
    if (message.consecutiveOverturns !== BigInt(0)) {
      writer.uint32(64).uint64(message.consecutiveOverturns);
    }
    if (message.consecutiveUpheld !== BigInt(0)) {
      writer.uint32(72).uint64(message.consecutiveUpheld);
    }
    if (message.overturnCooldownUntil !== BigInt(0)) {
      writer.uint32(80).int64(message.overturnCooldownUntil);
    }
    if (message.lastSlashEpoch !== BigInt(0)) {
      writer.uint32(88).int64(message.lastSlashEpoch);
    }
    if (message.slashCount !== BigInt(0)) {
      writer.uint32(96).uint64(message.slashCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VerifierActivityView {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifierActivityView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.unchallengedVerifications = reader.uint64();
          break;
        case 3:
          message.totalVerifications = reader.uint64();
          break;
        case 4:
          message.upheldVerifications = reader.uint64();
          break;
        case 5:
          message.overturnedVerifications = reader.uint64();
          break;
        case 6:
          message.epochVerifications = reader.uint64();
          break;
        case 7:
          message.epochChallengesResolved = reader.uint64();
          break;
        case 8:
          message.consecutiveOverturns = reader.uint64();
          break;
        case 9:
          message.consecutiveUpheld = reader.uint64();
          break;
        case 10:
          message.overturnCooldownUntil = reader.int64();
          break;
        case 11:
          message.lastSlashEpoch = reader.int64();
          break;
        case 12:
          message.slashCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VerifierActivityView>): VerifierActivityView {
    const message = createBaseVerifierActivityView();
    message.address = object.address ?? "";
    message.unchallengedVerifications = object.unchallengedVerifications !== undefined && object.unchallengedVerifications !== null ? BigInt(object.unchallengedVerifications.toString()) : BigInt(0);
    message.totalVerifications = object.totalVerifications !== undefined && object.totalVerifications !== null ? BigInt(object.totalVerifications.toString()) : BigInt(0);
    message.upheldVerifications = object.upheldVerifications !== undefined && object.upheldVerifications !== null ? BigInt(object.upheldVerifications.toString()) : BigInt(0);
    message.overturnedVerifications = object.overturnedVerifications !== undefined && object.overturnedVerifications !== null ? BigInt(object.overturnedVerifications.toString()) : BigInt(0);
    message.epochVerifications = object.epochVerifications !== undefined && object.epochVerifications !== null ? BigInt(object.epochVerifications.toString()) : BigInt(0);
    message.epochChallengesResolved = object.epochChallengesResolved !== undefined && object.epochChallengesResolved !== null ? BigInt(object.epochChallengesResolved.toString()) : BigInt(0);
    message.consecutiveOverturns = object.consecutiveOverturns !== undefined && object.consecutiveOverturns !== null ? BigInt(object.consecutiveOverturns.toString()) : BigInt(0);
    message.consecutiveUpheld = object.consecutiveUpheld !== undefined && object.consecutiveUpheld !== null ? BigInt(object.consecutiveUpheld.toString()) : BigInt(0);
    message.overturnCooldownUntil = object.overturnCooldownUntil !== undefined && object.overturnCooldownUntil !== null ? BigInt(object.overturnCooldownUntil.toString()) : BigInt(0);
    message.lastSlashEpoch = object.lastSlashEpoch !== undefined && object.lastSlashEpoch !== null ? BigInt(object.lastSlashEpoch.toString()) : BigInt(0);
    message.slashCount = object.slashCount !== undefined && object.slashCount !== null ? BigInt(object.slashCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VerifierActivityViewAmino): VerifierActivityView {
    const message = createBaseVerifierActivityView();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.unchallenged_verifications !== undefined && object.unchallenged_verifications !== null) {
      message.unchallengedVerifications = BigInt(object.unchallenged_verifications);
    }
    if (object.total_verifications !== undefined && object.total_verifications !== null) {
      message.totalVerifications = BigInt(object.total_verifications);
    }
    if (object.upheld_verifications !== undefined && object.upheld_verifications !== null) {
      message.upheldVerifications = BigInt(object.upheld_verifications);
    }
    if (object.overturned_verifications !== undefined && object.overturned_verifications !== null) {
      message.overturnedVerifications = BigInt(object.overturned_verifications);
    }
    if (object.epoch_verifications !== undefined && object.epoch_verifications !== null) {
      message.epochVerifications = BigInt(object.epoch_verifications);
    }
    if (object.epoch_challenges_resolved !== undefined && object.epoch_challenges_resolved !== null) {
      message.epochChallengesResolved = BigInt(object.epoch_challenges_resolved);
    }
    if (object.consecutive_overturns !== undefined && object.consecutive_overturns !== null) {
      message.consecutiveOverturns = BigInt(object.consecutive_overturns);
    }
    if (object.consecutive_upheld !== undefined && object.consecutive_upheld !== null) {
      message.consecutiveUpheld = BigInt(object.consecutive_upheld);
    }
    if (object.overturn_cooldown_until !== undefined && object.overturn_cooldown_until !== null) {
      message.overturnCooldownUntil = BigInt(object.overturn_cooldown_until);
    }
    if (object.last_slash_epoch !== undefined && object.last_slash_epoch !== null) {
      message.lastSlashEpoch = BigInt(object.last_slash_epoch);
    }
    if (object.slash_count !== undefined && object.slash_count !== null) {
      message.slashCount = BigInt(object.slash_count);
    }
    return message;
  },
  toAmino(message: VerifierActivityView): VerifierActivityViewAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.unchallenged_verifications = message.unchallengedVerifications !== BigInt(0) ? message.unchallengedVerifications?.toString() : undefined;
    obj.total_verifications = message.totalVerifications !== BigInt(0) ? message.totalVerifications?.toString() : undefined;
    obj.upheld_verifications = message.upheldVerifications !== BigInt(0) ? message.upheldVerifications?.toString() : undefined;
    obj.overturned_verifications = message.overturnedVerifications !== BigInt(0) ? message.overturnedVerifications?.toString() : undefined;
    obj.epoch_verifications = message.epochVerifications !== BigInt(0) ? message.epochVerifications?.toString() : undefined;
    obj.epoch_challenges_resolved = message.epochChallengesResolved !== BigInt(0) ? message.epochChallengesResolved?.toString() : undefined;
    obj.consecutive_overturns = message.consecutiveOverturns !== BigInt(0) ? message.consecutiveOverturns?.toString() : undefined;
    obj.consecutive_upheld = message.consecutiveUpheld !== BigInt(0) ? message.consecutiveUpheld?.toString() : undefined;
    obj.overturn_cooldown_until = message.overturnCooldownUntil !== BigInt(0) ? message.overturnCooldownUntil?.toString() : undefined;
    obj.last_slash_epoch = message.lastSlashEpoch !== BigInt(0) ? message.lastSlashEpoch?.toString() : undefined;
    obj.slash_count = message.slashCount !== BigInt(0) ? message.slashCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VerifierActivityViewAminoMsg): VerifierActivityView {
    return VerifierActivityView.fromAmino(object.value);
  },
  fromProtoMsg(message: VerifierActivityViewProtoMsg): VerifierActivityView {
    return VerifierActivityView.decode(message.value);
  },
  toProto(message: VerifierActivityView): Uint8Array {
    return VerifierActivityView.encode(message).finish();
  },
  toProtoMsg(message: VerifierActivityView): VerifierActivityViewProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.VerifierActivityView",
      value: VerifierActivityView.encode(message).finish()
    };
  }
};