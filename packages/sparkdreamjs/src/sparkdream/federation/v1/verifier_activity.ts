//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * VerifierActivity holds federation-specific per-verifier counters. The
 * generic bond/status/activity record lives in x/rep as BondedRole
 * (ROLE_TYPE_FEDERATION_VERIFIER) — this proto only tracks what's
 * federation-specific: verification counts and dispute outcomes.
 * @name VerifierActivity
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.VerifierActivity
 */
export interface VerifierActivity {
  address: string;
  /**
   * Lifetime metrics
   */
  totalVerifications: bigint;
  upheldVerifications: bigint;
  overturnedVerifications: bigint;
  unchallengedVerifications: bigint;
  /**
   * Epoch metrics
   */
  epochVerifications: bigint;
  epochChallengesResolved: bigint;
  /**
   * Consecutive-outcome tracking for demotion triggers. Slash streak beyond
   * UpheldToResetOverturns consecutive-overturn is the demotion signal.
   */
  consecutiveOverturns: bigint;
  consecutiveUpheld: bigint;
  /**
   * overturn_cooldown_until is the unix timestamp during which the verifier
   * cannot submit new verifications after an overturn. Managed by the
   * federation challenge-resolution flow.
   */
  overturnCooldownUntil: bigint;
  /**
   * slash_count is the lifetime number of times this verifier has been
   * slashed (overturn verdicts).
   */
  slashCount: bigint;
  /**
   * last_slash_epoch records the Phase 11 reward-epoch number
   * (height / GetVerifierRewardEpochBlocks) in which this verifier was
   * most recently slashed. Phase 11's "no slashing this epoch"
   * eligibility gate compares this against the current reward epoch —
   * an exact match disqualifies the verifier for the current epoch's
   * payout. Zero means "never slashed under the current accounting".
   */
  lastSlashEpoch: bigint;
}
export interface VerifierActivityProtoMsg {
  typeUrl: "/sparkdream.federation.v1.VerifierActivity";
  value: Uint8Array;
}
/**
 * VerifierActivity holds federation-specific per-verifier counters. The
 * generic bond/status/activity record lives in x/rep as BondedRole
 * (ROLE_TYPE_FEDERATION_VERIFIER) — this proto only tracks what's
 * federation-specific: verification counts and dispute outcomes.
 * @name VerifierActivityAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.VerifierActivity
 */
export interface VerifierActivityAmino {
  address?: string;
  /**
   * Lifetime metrics
   */
  total_verifications?: string;
  upheld_verifications?: string;
  overturned_verifications?: string;
  unchallenged_verifications?: string;
  /**
   * Epoch metrics
   */
  epoch_verifications?: string;
  epoch_challenges_resolved?: string;
  /**
   * Consecutive-outcome tracking for demotion triggers. Slash streak beyond
   * UpheldToResetOverturns consecutive-overturn is the demotion signal.
   */
  consecutive_overturns?: string;
  consecutive_upheld?: string;
  /**
   * overturn_cooldown_until is the unix timestamp during which the verifier
   * cannot submit new verifications after an overturn. Managed by the
   * federation challenge-resolution flow.
   */
  overturn_cooldown_until?: string;
  /**
   * slash_count is the lifetime number of times this verifier has been
   * slashed (overturn verdicts).
   */
  slash_count?: string;
  /**
   * last_slash_epoch records the Phase 11 reward-epoch number
   * (height / GetVerifierRewardEpochBlocks) in which this verifier was
   * most recently slashed. Phase 11's "no slashing this epoch"
   * eligibility gate compares this against the current reward epoch —
   * an exact match disqualifies the verifier for the current epoch's
   * payout. Zero means "never slashed under the current accounting".
   */
  last_slash_epoch?: string;
}
export interface VerifierActivityAminoMsg {
  type: "/sparkdream.federation.v1.VerifierActivity";
  value: VerifierActivityAmino;
}
function createBaseVerifierActivity(): VerifierActivity {
  return {
    address: "",
    totalVerifications: BigInt(0),
    upheldVerifications: BigInt(0),
    overturnedVerifications: BigInt(0),
    unchallengedVerifications: BigInt(0),
    epochVerifications: BigInt(0),
    epochChallengesResolved: BigInt(0),
    consecutiveOverturns: BigInt(0),
    consecutiveUpheld: BigInt(0),
    overturnCooldownUntil: BigInt(0),
    slashCount: BigInt(0),
    lastSlashEpoch: BigInt(0)
  };
}
/**
 * VerifierActivity holds federation-specific per-verifier counters. The
 * generic bond/status/activity record lives in x/rep as BondedRole
 * (ROLE_TYPE_FEDERATION_VERIFIER) — this proto only tracks what's
 * federation-specific: verification counts and dispute outcomes.
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
    if (message.totalVerifications !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalVerifications);
    }
    if (message.upheldVerifications !== BigInt(0)) {
      writer.uint32(24).uint64(message.upheldVerifications);
    }
    if (message.overturnedVerifications !== BigInt(0)) {
      writer.uint32(32).uint64(message.overturnedVerifications);
    }
    if (message.unchallengedVerifications !== BigInt(0)) {
      writer.uint32(40).uint64(message.unchallengedVerifications);
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
    if (message.slashCount !== BigInt(0)) {
      writer.uint32(88).uint64(message.slashCount);
    }
    if (message.lastSlashEpoch !== BigInt(0)) {
      writer.uint32(96).int64(message.lastSlashEpoch);
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
          message.totalVerifications = reader.uint64();
          break;
        case 3:
          message.upheldVerifications = reader.uint64();
          break;
        case 4:
          message.overturnedVerifications = reader.uint64();
          break;
        case 5:
          message.unchallengedVerifications = reader.uint64();
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
          message.slashCount = reader.uint64();
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
  fromPartial(object: DeepPartial<VerifierActivity>): VerifierActivity {
    const message = createBaseVerifierActivity();
    message.address = object.address ?? "";
    message.totalVerifications = object.totalVerifications !== undefined && object.totalVerifications !== null ? BigInt(object.totalVerifications.toString()) : BigInt(0);
    message.upheldVerifications = object.upheldVerifications !== undefined && object.upheldVerifications !== null ? BigInt(object.upheldVerifications.toString()) : BigInt(0);
    message.overturnedVerifications = object.overturnedVerifications !== undefined && object.overturnedVerifications !== null ? BigInt(object.overturnedVerifications.toString()) : BigInt(0);
    message.unchallengedVerifications = object.unchallengedVerifications !== undefined && object.unchallengedVerifications !== null ? BigInt(object.unchallengedVerifications.toString()) : BigInt(0);
    message.epochVerifications = object.epochVerifications !== undefined && object.epochVerifications !== null ? BigInt(object.epochVerifications.toString()) : BigInt(0);
    message.epochChallengesResolved = object.epochChallengesResolved !== undefined && object.epochChallengesResolved !== null ? BigInt(object.epochChallengesResolved.toString()) : BigInt(0);
    message.consecutiveOverturns = object.consecutiveOverturns !== undefined && object.consecutiveOverturns !== null ? BigInt(object.consecutiveOverturns.toString()) : BigInt(0);
    message.consecutiveUpheld = object.consecutiveUpheld !== undefined && object.consecutiveUpheld !== null ? BigInt(object.consecutiveUpheld.toString()) : BigInt(0);
    message.overturnCooldownUntil = object.overturnCooldownUntil !== undefined && object.overturnCooldownUntil !== null ? BigInt(object.overturnCooldownUntil.toString()) : BigInt(0);
    message.slashCount = object.slashCount !== undefined && object.slashCount !== null ? BigInt(object.slashCount.toString()) : BigInt(0);
    message.lastSlashEpoch = object.lastSlashEpoch !== undefined && object.lastSlashEpoch !== null ? BigInt(object.lastSlashEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VerifierActivityAmino): VerifierActivity {
    const message = createBaseVerifierActivity();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
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
    if (object.unchallenged_verifications !== undefined && object.unchallenged_verifications !== null) {
      message.unchallengedVerifications = BigInt(object.unchallenged_verifications);
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
    if (object.slash_count !== undefined && object.slash_count !== null) {
      message.slashCount = BigInt(object.slash_count);
    }
    if (object.last_slash_epoch !== undefined && object.last_slash_epoch !== null) {
      message.lastSlashEpoch = BigInt(object.last_slash_epoch);
    }
    return message;
  },
  toAmino(message: VerifierActivity): VerifierActivityAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.total_verifications = message.totalVerifications !== BigInt(0) ? message.totalVerifications?.toString() : undefined;
    obj.upheld_verifications = message.upheldVerifications !== BigInt(0) ? message.upheldVerifications?.toString() : undefined;
    obj.overturned_verifications = message.overturnedVerifications !== BigInt(0) ? message.overturnedVerifications?.toString() : undefined;
    obj.unchallenged_verifications = message.unchallengedVerifications !== BigInt(0) ? message.unchallengedVerifications?.toString() : undefined;
    obj.epoch_verifications = message.epochVerifications !== BigInt(0) ? message.epochVerifications?.toString() : undefined;
    obj.epoch_challenges_resolved = message.epochChallengesResolved !== BigInt(0) ? message.epochChallengesResolved?.toString() : undefined;
    obj.consecutive_overturns = message.consecutiveOverturns !== BigInt(0) ? message.consecutiveOverturns?.toString() : undefined;
    obj.consecutive_upheld = message.consecutiveUpheld !== BigInt(0) ? message.consecutiveUpheld?.toString() : undefined;
    obj.overturn_cooldown_until = message.overturnCooldownUntil !== BigInt(0) ? message.overturnCooldownUntil?.toString() : undefined;
    obj.slash_count = message.slashCount !== BigInt(0) ? message.slashCount?.toString() : undefined;
    obj.last_slash_epoch = message.lastSlashEpoch !== BigInt(0) ? message.lastSlashEpoch?.toString() : undefined;
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