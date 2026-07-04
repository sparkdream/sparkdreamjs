//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * RoleType identifies a kind of bonded role across the chain. Values are
 * module-scoped: naming convention is ROLE_TYPE_<OWNING_MODULE>_<ROLE>. A role
 * is owned by exactly one module, which is the sole writer of its
 * BondedRoleConfig. Independent bond pools, configs, and slashing surfaces per
 * role; cross-role coupling (if ever needed) belongs in the gaining module, not
 * in this primitive.
 * 
 * CONTENT_SENTINEL is the deliberate exception to the owning-module naming
 * convention: one moderation corps (one bond, one accountability record)
 * spans every content surface — forum posts/threads AND collect
 * collections/items. x/forum is the role's CONFIG STEWARD: it is the sole
 * writer of the role's BondedRoleConfig (via its sentinel operational
 * params). The shared accountability record (RoleActivity: per-kind action
 * counters, verdict streaks, overturn cooldown, accuracy ring) is owned by
 * x/rep itself; forum and collect report actions and verdicts into it.
 * Formerly named ROLE_TYPE_FORUM_SENTINEL (renamed pre-launch; see the
 * docs/bonded-role-generalization.md addendum and docs/x-rep-spec.md,
 * RoleActivity).
 */
export enum RoleType {
  ROLE_TYPE_UNSPECIFIED = 0,
  ROLE_TYPE_CONTENT_SENTINEL = 1,
  ROLE_TYPE_COLLECT_CURATOR = 2,
  ROLE_TYPE_FEDERATION_VERIFIER = 3,
  UNRECOGNIZED = -1,
}
export const RoleTypeAmino = RoleType;
export function roleTypeFromJSON(object: any): RoleType {
  switch (object) {
    case 0:
    case "ROLE_TYPE_UNSPECIFIED":
      return RoleType.ROLE_TYPE_UNSPECIFIED;
    case 1:
    case "ROLE_TYPE_CONTENT_SENTINEL":
      return RoleType.ROLE_TYPE_CONTENT_SENTINEL;
    case 2:
    case "ROLE_TYPE_COLLECT_CURATOR":
      return RoleType.ROLE_TYPE_COLLECT_CURATOR;
    case 3:
    case "ROLE_TYPE_FEDERATION_VERIFIER":
      return RoleType.ROLE_TYPE_FEDERATION_VERIFIER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RoleType.UNRECOGNIZED;
  }
}
export function roleTypeToJSON(object: RoleType): string {
  switch (object) {
    case RoleType.ROLE_TYPE_UNSPECIFIED:
      return "ROLE_TYPE_UNSPECIFIED";
    case RoleType.ROLE_TYPE_CONTENT_SENTINEL:
      return "ROLE_TYPE_CONTENT_SENTINEL";
    case RoleType.ROLE_TYPE_COLLECT_CURATOR:
      return "ROLE_TYPE_COLLECT_CURATOR";
    case RoleType.ROLE_TYPE_FEDERATION_VERIFIER:
      return "ROLE_TYPE_FEDERATION_VERIFIER";
    case RoleType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * BondedRoleStatus represents the lifecycle status of a bonded role record.
 * NORMAL: full privileges; bond at or above min_bond.
 * RECOVERY: bond dropped below min_bond but at or above demotion_threshold;
 *   reduced privileges depending on role, rewards may auto-bond.
 * DEMOTED: bond below demotion_threshold; privileges revoked; cooldown
 *   enforced before re-bonding.
 * UNBONDING: role-holder called MsgUnbondRole. DREAM remains locked and the
 *   bond remains slashable until unbond_completion_time. Action-time gates in
 *   owning modules must refuse on this status to contain new liability while
 *   the bond drains.
 */
export enum BondedRoleStatus {
  BONDED_ROLE_STATUS_UNSPECIFIED = 0,
  BONDED_ROLE_STATUS_NORMAL = 1,
  BONDED_ROLE_STATUS_RECOVERY = 2,
  BONDED_ROLE_STATUS_DEMOTED = 3,
  BONDED_ROLE_STATUS_UNBONDING = 4,
  UNRECOGNIZED = -1,
}
export const BondedRoleStatusAmino = BondedRoleStatus;
export function bondedRoleStatusFromJSON(object: any): BondedRoleStatus {
  switch (object) {
    case 0:
    case "BONDED_ROLE_STATUS_UNSPECIFIED":
      return BondedRoleStatus.BONDED_ROLE_STATUS_UNSPECIFIED;
    case 1:
    case "BONDED_ROLE_STATUS_NORMAL":
      return BondedRoleStatus.BONDED_ROLE_STATUS_NORMAL;
    case 2:
    case "BONDED_ROLE_STATUS_RECOVERY":
      return BondedRoleStatus.BONDED_ROLE_STATUS_RECOVERY;
    case 3:
    case "BONDED_ROLE_STATUS_DEMOTED":
      return BondedRoleStatus.BONDED_ROLE_STATUS_DEMOTED;
    case 4:
    case "BONDED_ROLE_STATUS_UNBONDING":
      return BondedRoleStatus.BONDED_ROLE_STATUS_UNBONDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondedRoleStatus.UNRECOGNIZED;
  }
}
export function bondedRoleStatusToJSON(object: BondedRoleStatus): string {
  switch (object) {
    case BondedRoleStatus.BONDED_ROLE_STATUS_UNSPECIFIED:
      return "BONDED_ROLE_STATUS_UNSPECIFIED";
    case BondedRoleStatus.BONDED_ROLE_STATUS_NORMAL:
      return "BONDED_ROLE_STATUS_NORMAL";
    case BondedRoleStatus.BONDED_ROLE_STATUS_RECOVERY:
      return "BONDED_ROLE_STATUS_RECOVERY";
    case BondedRoleStatus.BONDED_ROLE_STATUS_DEMOTED:
      return "BONDED_ROLE_STATUS_DEMOTED";
    case BondedRoleStatus.BONDED_ROLE_STATUS_UNBONDING:
      return "BONDED_ROLE_STATUS_UNBONDING";
    case BondedRoleStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * BondedRole is the generic accountability record for a role-playing member:
 * identity, bond, bond status, and activity stamps. Module-specific action
 * counters (hides, reviews, verifications, etc.) live in per-module activity
 * protos owned by the role's module.
 * @name BondedRole
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.BondedRole
 */
export interface BondedRole {
  /**
   * address is the bech32 address of the member holding this role.
   */
  address: string;
  /**
   * role_type identifies which role this record represents. The composite key
   * (role_type, address) allows a single address to hold multiple roles.
   */
  roleType: RoleType;
  /**
   * bond_status is the current lifecycle status (NORMAL / RECOVERY / DEMOTED).
   */
  bondStatus: BondedRoleStatus;
  /**
   * current_bond is the total DREAM locked as this role's bond (math.Int string).
   */
  currentBond: string;
  /**
   * total_committed_bond is the portion of current_bond reserved against
   * pending actions (math.Int string). Available bond = current_bond -
   * total_committed_bond.
   */
  totalCommittedBond: string;
  /**
   * registered_at is the block height at which this role was first bonded.
   */
  registeredAt: bigint;
  /**
   * last_active_epoch is the most recent epoch in which the role performed a
   * tracked action. Used for inactivity cleanup.
   */
  lastActiveEpoch: bigint;
  /**
   * consecutive_inactive_epochs counts epochs since last activity, reset to 0
   * when RecordActivity fires.
   */
  consecutiveInactiveEpochs: bigint;
  /**
   * demotion_cooldown_until is the unix timestamp until which a demoted role
   * cannot re-bond.
   */
  demotionCooldownUntil: bigint;
  /**
   * cumulative_rewards tracks DREAM rewards earned in this role (math.Int
   * string). Module-specific reward distributors write here.
   */
  cumulativeRewards: string;
  /**
   * last_reward_epoch is the most recent epoch in which rewards were paid for
   * this role.
   */
  lastRewardEpoch: bigint;
  /**
   * pending_unbond_amount is DREAM queued for withdrawal via MsgUnbondRole and
   * not yet released to the holder's available balance (math.Int string).
   * Counts toward current_bond — i.e., slashes consume current_bond as a
   * whole and the pending amount is reduced symmetrically on slash. Zero when
   * no unbond is in flight.
   */
  pendingUnbondAmount: string;
  /**
   * unbond_completion_time is the unix timestamp at which an in-flight unbond
   * matures: the EndBlocker unlocks pending_unbond_amount, resets the field,
   * and flips bond_status (typically to DEMOTED, starting demotion_cooldown).
   * Zero when no unbond is in flight.
   */
  unbondCompletionTime: bigint;
}
export interface BondedRoleProtoMsg {
  typeUrl: "/sparkdream.rep.v1.BondedRole";
  value: Uint8Array;
}
/**
 * BondedRole is the generic accountability record for a role-playing member:
 * identity, bond, bond status, and activity stamps. Module-specific action
 * counters (hides, reviews, verifications, etc.) live in per-module activity
 * protos owned by the role's module.
 * @name BondedRoleAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.BondedRole
 */
export interface BondedRoleAmino {
  /**
   * address is the bech32 address of the member holding this role.
   */
  address?: string;
  /**
   * role_type identifies which role this record represents. The composite key
   * (role_type, address) allows a single address to hold multiple roles.
   */
  role_type?: RoleType;
  /**
   * bond_status is the current lifecycle status (NORMAL / RECOVERY / DEMOTED).
   */
  bond_status?: BondedRoleStatus;
  /**
   * current_bond is the total DREAM locked as this role's bond (math.Int string).
   */
  current_bond?: string;
  /**
   * total_committed_bond is the portion of current_bond reserved against
   * pending actions (math.Int string). Available bond = current_bond -
   * total_committed_bond.
   */
  total_committed_bond?: string;
  /**
   * registered_at is the block height at which this role was first bonded.
   */
  registered_at?: string;
  /**
   * last_active_epoch is the most recent epoch in which the role performed a
   * tracked action. Used for inactivity cleanup.
   */
  last_active_epoch?: string;
  /**
   * consecutive_inactive_epochs counts epochs since last activity, reset to 0
   * when RecordActivity fires.
   */
  consecutive_inactive_epochs?: string;
  /**
   * demotion_cooldown_until is the unix timestamp until which a demoted role
   * cannot re-bond.
   */
  demotion_cooldown_until?: string;
  /**
   * cumulative_rewards tracks DREAM rewards earned in this role (math.Int
   * string). Module-specific reward distributors write here.
   */
  cumulative_rewards?: string;
  /**
   * last_reward_epoch is the most recent epoch in which rewards were paid for
   * this role.
   */
  last_reward_epoch?: string;
  /**
   * pending_unbond_amount is DREAM queued for withdrawal via MsgUnbondRole and
   * not yet released to the holder's available balance (math.Int string).
   * Counts toward current_bond — i.e., slashes consume current_bond as a
   * whole and the pending amount is reduced symmetrically on slash. Zero when
   * no unbond is in flight.
   */
  pending_unbond_amount?: string;
  /**
   * unbond_completion_time is the unix timestamp at which an in-flight unbond
   * matures: the EndBlocker unlocks pending_unbond_amount, resets the field,
   * and flips bond_status (typically to DEMOTED, starting demotion_cooldown).
   * Zero when no unbond is in flight.
   */
  unbond_completion_time?: string;
}
export interface BondedRoleAminoMsg {
  type: "/sparkdream.rep.v1.BondedRole";
  value: BondedRoleAmino;
}
/**
 * BondedRoleConfig holds the per-role policy knobs enforced by x/rep at
 * MsgBondRole time. The source-of-truth field values live on the owning
 * module's operational params (flattened); the owning module write-throughs
 * the full config via SetBondedRoleConfig on change and at InitGenesis.
 * 
 * Every field is mutable via the owning module's operational-params flow. No
 * chain-upgrade gates — these are operational accountability knobs, not
 * monetary policy.
 * @name BondedRoleConfig
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.BondedRoleConfig
 */
export interface BondedRoleConfig {
  /**
   * role_type is the key this config applies to.
   */
  roleType: RoleType;
  /**
   * min_bond is the minimum DREAM required to bond this role (math.Int
   * string). Bonds at or above this amount are NORMAL.
   */
  minBond: string;
  /**
   * min_rep_tier is the minimum reputation tier required to bond the role.
   * Zero = no rep-tier gate.
   */
  minRepTier: bigint;
  /**
   * min_trust_level is the minimum trust level required to bond the role, as
   * a string enum name (e.g. "TRUST_LEVEL_ESTABLISHED"). Empty = no
   * trust-level gate.
   */
  minTrustLevel: string;
  /**
   * min_age_blocks is a shared policy knob: the minimum block-age the role
   * must have been bonded before the owning module will let the role take
   * action. Enforced by the role's owning module at action time (read via
   * GetBondedRoleConfig), NOT by x/rep at bond time. Zero = no age gate.
   */
  minAgeBlocks: bigint;
  /**
   * demotion_cooldown is the number of seconds a DEMOTED role must wait
   * before re-bonding.
   */
  demotionCooldown: bigint;
  /**
   * demotion_threshold is the bond floor below which the role transitions
   * from RECOVERY to DEMOTED (math.Int string).
   */
  demotionThreshold: string;
  /**
   * unbond_cooldown is the number of seconds DREAM stays locked and slashable
   * after MsgUnbondRole is called. While the cooldown is pending, the role's
   * bond_status is UNBONDING and the owning module refuses authority. Zero =
   * no cooldown (immediate withdrawal, legacy behavior). Source of truth is
   * the owning module's operational params.
   */
  unbondCooldown: bigint;
}
export interface BondedRoleConfigProtoMsg {
  typeUrl: "/sparkdream.rep.v1.BondedRoleConfig";
  value: Uint8Array;
}
/**
 * BondedRoleConfig holds the per-role policy knobs enforced by x/rep at
 * MsgBondRole time. The source-of-truth field values live on the owning
 * module's operational params (flattened); the owning module write-throughs
 * the full config via SetBondedRoleConfig on change and at InitGenesis.
 * 
 * Every field is mutable via the owning module's operational-params flow. No
 * chain-upgrade gates — these are operational accountability knobs, not
 * monetary policy.
 * @name BondedRoleConfigAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.BondedRoleConfig
 */
export interface BondedRoleConfigAmino {
  /**
   * role_type is the key this config applies to.
   */
  role_type?: RoleType;
  /**
   * min_bond is the minimum DREAM required to bond this role (math.Int
   * string). Bonds at or above this amount are NORMAL.
   */
  min_bond?: string;
  /**
   * min_rep_tier is the minimum reputation tier required to bond the role.
   * Zero = no rep-tier gate.
   */
  min_rep_tier?: string;
  /**
   * min_trust_level is the minimum trust level required to bond the role, as
   * a string enum name (e.g. "TRUST_LEVEL_ESTABLISHED"). Empty = no
   * trust-level gate.
   */
  min_trust_level?: string;
  /**
   * min_age_blocks is a shared policy knob: the minimum block-age the role
   * must have been bonded before the owning module will let the role take
   * action. Enforced by the role's owning module at action time (read via
   * GetBondedRoleConfig), NOT by x/rep at bond time. Zero = no age gate.
   */
  min_age_blocks?: string;
  /**
   * demotion_cooldown is the number of seconds a DEMOTED role must wait
   * before re-bonding.
   */
  demotion_cooldown?: string;
  /**
   * demotion_threshold is the bond floor below which the role transitions
   * from RECOVERY to DEMOTED (math.Int string).
   */
  demotion_threshold?: string;
  /**
   * unbond_cooldown is the number of seconds DREAM stays locked and slashable
   * after MsgUnbondRole is called. While the cooldown is pending, the role's
   * bond_status is UNBONDING and the owning module refuses authority. Zero =
   * no cooldown (immediate withdrawal, legacy behavior). Source of truth is
   * the owning module's operational params.
   */
  unbond_cooldown?: string;
}
export interface BondedRoleConfigAminoMsg {
  type: "/sparkdream.rep.v1.BondedRoleConfig";
  value: BondedRoleConfigAmino;
}
function createBaseBondedRole(): BondedRole {
  return {
    address: "",
    roleType: 0,
    bondStatus: 0,
    currentBond: "",
    totalCommittedBond: "",
    registeredAt: BigInt(0),
    lastActiveEpoch: BigInt(0),
    consecutiveInactiveEpochs: BigInt(0),
    demotionCooldownUntil: BigInt(0),
    cumulativeRewards: "",
    lastRewardEpoch: BigInt(0),
    pendingUnbondAmount: "",
    unbondCompletionTime: BigInt(0)
  };
}
/**
 * BondedRole is the generic accountability record for a role-playing member:
 * identity, bond, bond status, and activity stamps. Module-specific action
 * counters (hides, reviews, verifications, etc.) live in per-module activity
 * protos owned by the role's module.
 * @name BondedRole
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.BondedRole
 */
export const BondedRole = {
  typeUrl: "/sparkdream.rep.v1.BondedRole",
  encode(message: BondedRole, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.roleType !== 0) {
      writer.uint32(16).int32(message.roleType);
    }
    if (message.bondStatus !== 0) {
      writer.uint32(24).int32(message.bondStatus);
    }
    if (message.currentBond !== "") {
      writer.uint32(34).string(message.currentBond);
    }
    if (message.totalCommittedBond !== "") {
      writer.uint32(42).string(message.totalCommittedBond);
    }
    if (message.registeredAt !== BigInt(0)) {
      writer.uint32(48).int64(message.registeredAt);
    }
    if (message.lastActiveEpoch !== BigInt(0)) {
      writer.uint32(56).int64(message.lastActiveEpoch);
    }
    if (message.consecutiveInactiveEpochs !== BigInt(0)) {
      writer.uint32(64).uint64(message.consecutiveInactiveEpochs);
    }
    if (message.demotionCooldownUntil !== BigInt(0)) {
      writer.uint32(72).int64(message.demotionCooldownUntil);
    }
    if (message.cumulativeRewards !== "") {
      writer.uint32(82).string(message.cumulativeRewards);
    }
    if (message.lastRewardEpoch !== BigInt(0)) {
      writer.uint32(88).int64(message.lastRewardEpoch);
    }
    if (message.pendingUnbondAmount !== "") {
      writer.uint32(98).string(message.pendingUnbondAmount);
    }
    if (message.unbondCompletionTime !== BigInt(0)) {
      writer.uint32(104).int64(message.unbondCompletionTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BondedRole {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondedRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.roleType = reader.int32() as any;
          break;
        case 3:
          message.bondStatus = reader.int32() as any;
          break;
        case 4:
          message.currentBond = reader.string();
          break;
        case 5:
          message.totalCommittedBond = reader.string();
          break;
        case 6:
          message.registeredAt = reader.int64();
          break;
        case 7:
          message.lastActiveEpoch = reader.int64();
          break;
        case 8:
          message.consecutiveInactiveEpochs = reader.uint64();
          break;
        case 9:
          message.demotionCooldownUntil = reader.int64();
          break;
        case 10:
          message.cumulativeRewards = reader.string();
          break;
        case 11:
          message.lastRewardEpoch = reader.int64();
          break;
        case 12:
          message.pendingUnbondAmount = reader.string();
          break;
        case 13:
          message.unbondCompletionTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BondedRole>): BondedRole {
    const message = createBaseBondedRole();
    message.address = object.address ?? "";
    message.roleType = object.roleType ?? 0;
    message.bondStatus = object.bondStatus ?? 0;
    message.currentBond = object.currentBond ?? "";
    message.totalCommittedBond = object.totalCommittedBond ?? "";
    message.registeredAt = object.registeredAt !== undefined && object.registeredAt !== null ? BigInt(object.registeredAt.toString()) : BigInt(0);
    message.lastActiveEpoch = object.lastActiveEpoch !== undefined && object.lastActiveEpoch !== null ? BigInt(object.lastActiveEpoch.toString()) : BigInt(0);
    message.consecutiveInactiveEpochs = object.consecutiveInactiveEpochs !== undefined && object.consecutiveInactiveEpochs !== null ? BigInt(object.consecutiveInactiveEpochs.toString()) : BigInt(0);
    message.demotionCooldownUntil = object.demotionCooldownUntil !== undefined && object.demotionCooldownUntil !== null ? BigInt(object.demotionCooldownUntil.toString()) : BigInt(0);
    message.cumulativeRewards = object.cumulativeRewards ?? "";
    message.lastRewardEpoch = object.lastRewardEpoch !== undefined && object.lastRewardEpoch !== null ? BigInt(object.lastRewardEpoch.toString()) : BigInt(0);
    message.pendingUnbondAmount = object.pendingUnbondAmount ?? "";
    message.unbondCompletionTime = object.unbondCompletionTime !== undefined && object.unbondCompletionTime !== null ? BigInt(object.unbondCompletionTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BondedRoleAmino): BondedRole {
    const message = createBaseBondedRole();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.role_type !== undefined && object.role_type !== null) {
      message.roleType = object.role_type;
    }
    if (object.bond_status !== undefined && object.bond_status !== null) {
      message.bondStatus = object.bond_status;
    }
    if (object.current_bond !== undefined && object.current_bond !== null) {
      message.currentBond = object.current_bond;
    }
    if (object.total_committed_bond !== undefined && object.total_committed_bond !== null) {
      message.totalCommittedBond = object.total_committed_bond;
    }
    if (object.registered_at !== undefined && object.registered_at !== null) {
      message.registeredAt = BigInt(object.registered_at);
    }
    if (object.last_active_epoch !== undefined && object.last_active_epoch !== null) {
      message.lastActiveEpoch = BigInt(object.last_active_epoch);
    }
    if (object.consecutive_inactive_epochs !== undefined && object.consecutive_inactive_epochs !== null) {
      message.consecutiveInactiveEpochs = BigInt(object.consecutive_inactive_epochs);
    }
    if (object.demotion_cooldown_until !== undefined && object.demotion_cooldown_until !== null) {
      message.demotionCooldownUntil = BigInt(object.demotion_cooldown_until);
    }
    if (object.cumulative_rewards !== undefined && object.cumulative_rewards !== null) {
      message.cumulativeRewards = object.cumulative_rewards;
    }
    if (object.last_reward_epoch !== undefined && object.last_reward_epoch !== null) {
      message.lastRewardEpoch = BigInt(object.last_reward_epoch);
    }
    if (object.pending_unbond_amount !== undefined && object.pending_unbond_amount !== null) {
      message.pendingUnbondAmount = object.pending_unbond_amount;
    }
    if (object.unbond_completion_time !== undefined && object.unbond_completion_time !== null) {
      message.unbondCompletionTime = BigInt(object.unbond_completion_time);
    }
    return message;
  },
  toAmino(message: BondedRole): BondedRoleAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.role_type = message.roleType === 0 ? undefined : message.roleType;
    obj.bond_status = message.bondStatus === 0 ? undefined : message.bondStatus;
    obj.current_bond = message.currentBond === "" ? undefined : message.currentBond;
    obj.total_committed_bond = message.totalCommittedBond === "" ? undefined : message.totalCommittedBond;
    obj.registered_at = message.registeredAt !== BigInt(0) ? message.registeredAt?.toString() : undefined;
    obj.last_active_epoch = message.lastActiveEpoch !== BigInt(0) ? message.lastActiveEpoch?.toString() : undefined;
    obj.consecutive_inactive_epochs = message.consecutiveInactiveEpochs !== BigInt(0) ? message.consecutiveInactiveEpochs?.toString() : undefined;
    obj.demotion_cooldown_until = message.demotionCooldownUntil !== BigInt(0) ? message.demotionCooldownUntil?.toString() : undefined;
    obj.cumulative_rewards = message.cumulativeRewards === "" ? undefined : message.cumulativeRewards;
    obj.last_reward_epoch = message.lastRewardEpoch !== BigInt(0) ? message.lastRewardEpoch?.toString() : undefined;
    obj.pending_unbond_amount = message.pendingUnbondAmount === "" ? undefined : message.pendingUnbondAmount;
    obj.unbond_completion_time = message.unbondCompletionTime !== BigInt(0) ? message.unbondCompletionTime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BondedRoleAminoMsg): BondedRole {
    return BondedRole.fromAmino(object.value);
  },
  fromProtoMsg(message: BondedRoleProtoMsg): BondedRole {
    return BondedRole.decode(message.value);
  },
  toProto(message: BondedRole): Uint8Array {
    return BondedRole.encode(message).finish();
  },
  toProtoMsg(message: BondedRole): BondedRoleProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.BondedRole",
      value: BondedRole.encode(message).finish()
    };
  }
};
function createBaseBondedRoleConfig(): BondedRoleConfig {
  return {
    roleType: 0,
    minBond: "",
    minRepTier: BigInt(0),
    minTrustLevel: "",
    minAgeBlocks: BigInt(0),
    demotionCooldown: BigInt(0),
    demotionThreshold: "",
    unbondCooldown: BigInt(0)
  };
}
/**
 * BondedRoleConfig holds the per-role policy knobs enforced by x/rep at
 * MsgBondRole time. The source-of-truth field values live on the owning
 * module's operational params (flattened); the owning module write-throughs
 * the full config via SetBondedRoleConfig on change and at InitGenesis.
 * 
 * Every field is mutable via the owning module's operational-params flow. No
 * chain-upgrade gates — these are operational accountability knobs, not
 * monetary policy.
 * @name BondedRoleConfig
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.BondedRoleConfig
 */
export const BondedRoleConfig = {
  typeUrl: "/sparkdream.rep.v1.BondedRoleConfig",
  encode(message: BondedRoleConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.roleType !== 0) {
      writer.uint32(8).int32(message.roleType);
    }
    if (message.minBond !== "") {
      writer.uint32(18).string(message.minBond);
    }
    if (message.minRepTier !== BigInt(0)) {
      writer.uint32(24).uint64(message.minRepTier);
    }
    if (message.minTrustLevel !== "") {
      writer.uint32(34).string(message.minTrustLevel);
    }
    if (message.minAgeBlocks !== BigInt(0)) {
      writer.uint32(40).int64(message.minAgeBlocks);
    }
    if (message.demotionCooldown !== BigInt(0)) {
      writer.uint32(48).int64(message.demotionCooldown);
    }
    if (message.demotionThreshold !== "") {
      writer.uint32(58).string(message.demotionThreshold);
    }
    if (message.unbondCooldown !== BigInt(0)) {
      writer.uint32(64).int64(message.unbondCooldown);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BondedRoleConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondedRoleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleType = reader.int32() as any;
          break;
        case 2:
          message.minBond = reader.string();
          break;
        case 3:
          message.minRepTier = reader.uint64();
          break;
        case 4:
          message.minTrustLevel = reader.string();
          break;
        case 5:
          message.minAgeBlocks = reader.int64();
          break;
        case 6:
          message.demotionCooldown = reader.int64();
          break;
        case 7:
          message.demotionThreshold = reader.string();
          break;
        case 8:
          message.unbondCooldown = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BondedRoleConfig>): BondedRoleConfig {
    const message = createBaseBondedRoleConfig();
    message.roleType = object.roleType ?? 0;
    message.minBond = object.minBond ?? "";
    message.minRepTier = object.minRepTier !== undefined && object.minRepTier !== null ? BigInt(object.minRepTier.toString()) : BigInt(0);
    message.minTrustLevel = object.minTrustLevel ?? "";
    message.minAgeBlocks = object.minAgeBlocks !== undefined && object.minAgeBlocks !== null ? BigInt(object.minAgeBlocks.toString()) : BigInt(0);
    message.demotionCooldown = object.demotionCooldown !== undefined && object.demotionCooldown !== null ? BigInt(object.demotionCooldown.toString()) : BigInt(0);
    message.demotionThreshold = object.demotionThreshold ?? "";
    message.unbondCooldown = object.unbondCooldown !== undefined && object.unbondCooldown !== null ? BigInt(object.unbondCooldown.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BondedRoleConfigAmino): BondedRoleConfig {
    const message = createBaseBondedRoleConfig();
    if (object.role_type !== undefined && object.role_type !== null) {
      message.roleType = object.role_type;
    }
    if (object.min_bond !== undefined && object.min_bond !== null) {
      message.minBond = object.min_bond;
    }
    if (object.min_rep_tier !== undefined && object.min_rep_tier !== null) {
      message.minRepTier = BigInt(object.min_rep_tier);
    }
    if (object.min_trust_level !== undefined && object.min_trust_level !== null) {
      message.minTrustLevel = object.min_trust_level;
    }
    if (object.min_age_blocks !== undefined && object.min_age_blocks !== null) {
      message.minAgeBlocks = BigInt(object.min_age_blocks);
    }
    if (object.demotion_cooldown !== undefined && object.demotion_cooldown !== null) {
      message.demotionCooldown = BigInt(object.demotion_cooldown);
    }
    if (object.demotion_threshold !== undefined && object.demotion_threshold !== null) {
      message.demotionThreshold = object.demotion_threshold;
    }
    if (object.unbond_cooldown !== undefined && object.unbond_cooldown !== null) {
      message.unbondCooldown = BigInt(object.unbond_cooldown);
    }
    return message;
  },
  toAmino(message: BondedRoleConfig): BondedRoleConfigAmino {
    const obj: any = {};
    obj.role_type = message.roleType === 0 ? undefined : message.roleType;
    obj.min_bond = message.minBond === "" ? undefined : message.minBond;
    obj.min_rep_tier = message.minRepTier !== BigInt(0) ? message.minRepTier?.toString() : undefined;
    obj.min_trust_level = message.minTrustLevel === "" ? undefined : message.minTrustLevel;
    obj.min_age_blocks = message.minAgeBlocks !== BigInt(0) ? message.minAgeBlocks?.toString() : undefined;
    obj.demotion_cooldown = message.demotionCooldown !== BigInt(0) ? message.demotionCooldown?.toString() : undefined;
    obj.demotion_threshold = message.demotionThreshold === "" ? undefined : message.demotionThreshold;
    obj.unbond_cooldown = message.unbondCooldown !== BigInt(0) ? message.unbondCooldown?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BondedRoleConfigAminoMsg): BondedRoleConfig {
    return BondedRoleConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: BondedRoleConfigProtoMsg): BondedRoleConfig {
    return BondedRoleConfig.decode(message.value);
  },
  toProto(message: BondedRoleConfig): Uint8Array {
    return BondedRoleConfig.encode(message).finish();
  },
  toProtoMsg(message: BondedRoleConfig): BondedRoleConfigProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.BondedRoleConfig",
      value: BondedRoleConfig.encode(message).finish()
    };
  }
};