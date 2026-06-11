//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
/** StakeTargetType defines the type of entity being staked on */
export enum StakeTargetType {
  /** STAKE_TARGET_INITIATIVE - Conviction voting, rewards on completion */
  STAKE_TARGET_INITIATIVE = 0,
  /** STAKE_TARGET_PROJECT - APY while active, bonus on completion */
  STAKE_TARGET_PROJECT = 1,
  /** STAKE_TARGET_MEMBER - Revenue share from member's earnings */
  STAKE_TARGET_MEMBER = 2,
  /** STAKE_TARGET_TAG - Revenue share from tagged initiatives */
  STAKE_TARGET_TAG = 3,
  /** STAKE_TARGET_BLOG_CONTENT - Content conviction staking (no DREAM rewards, conviction signal only) */
  STAKE_TARGET_BLOG_CONTENT = 4,
  /** STAKE_TARGET_FORUM_CONTENT - Community conviction on x/forum posts */
  STAKE_TARGET_FORUM_CONTENT = 5,
  /** STAKE_TARGET_COLLECTION_CONTENT - Community conviction on x/collect collections */
  STAKE_TARGET_COLLECTION_CONTENT = 6,
  /** STAKE_TARGET_BLOG_AUTHOR_BOND - Author bonds (no DREAM rewards, slashable on moderation) */
  STAKE_TARGET_BLOG_AUTHOR_BOND = 7,
  /** STAKE_TARGET_FORUM_AUTHOR_BOND - Author bond on x/forum content (posts and replies share one id space) */
  STAKE_TARGET_FORUM_AUTHOR_BOND = 8,
  /** STAKE_TARGET_COLLECTION_AUTHOR_BOND - Author bond on x/collect content */
  STAKE_TARGET_COLLECTION_AUTHOR_BOND = 9,
  /**
   * STAKE_TARGET_BLOG_REPLY_AUTHOR_BOND - Blog replies have their own id sequence independent of blog posts, so
   * reply bonds need a distinct target type: sharing BLOG_AUTHOR_BOND would
   * make post N and reply N collide (one-bond-per-target, queries, challenges).
   */
  STAKE_TARGET_BLOG_REPLY_AUTHOR_BOND = 10,
  UNRECOGNIZED = -1,
}
export const StakeTargetTypeAmino = StakeTargetType;
export function stakeTargetTypeFromJSON(object: any): StakeTargetType {
  switch (object) {
    case 0:
    case "STAKE_TARGET_INITIATIVE":
      return StakeTargetType.STAKE_TARGET_INITIATIVE;
    case 1:
    case "STAKE_TARGET_PROJECT":
      return StakeTargetType.STAKE_TARGET_PROJECT;
    case 2:
    case "STAKE_TARGET_MEMBER":
      return StakeTargetType.STAKE_TARGET_MEMBER;
    case 3:
    case "STAKE_TARGET_TAG":
      return StakeTargetType.STAKE_TARGET_TAG;
    case 4:
    case "STAKE_TARGET_BLOG_CONTENT":
      return StakeTargetType.STAKE_TARGET_BLOG_CONTENT;
    case 5:
    case "STAKE_TARGET_FORUM_CONTENT":
      return StakeTargetType.STAKE_TARGET_FORUM_CONTENT;
    case 6:
    case "STAKE_TARGET_COLLECTION_CONTENT":
      return StakeTargetType.STAKE_TARGET_COLLECTION_CONTENT;
    case 7:
    case "STAKE_TARGET_BLOG_AUTHOR_BOND":
      return StakeTargetType.STAKE_TARGET_BLOG_AUTHOR_BOND;
    case 8:
    case "STAKE_TARGET_FORUM_AUTHOR_BOND":
      return StakeTargetType.STAKE_TARGET_FORUM_AUTHOR_BOND;
    case 9:
    case "STAKE_TARGET_COLLECTION_AUTHOR_BOND":
      return StakeTargetType.STAKE_TARGET_COLLECTION_AUTHOR_BOND;
    case 10:
    case "STAKE_TARGET_BLOG_REPLY_AUTHOR_BOND":
      return StakeTargetType.STAKE_TARGET_BLOG_REPLY_AUTHOR_BOND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StakeTargetType.UNRECOGNIZED;
  }
}
export function stakeTargetTypeToJSON(object: StakeTargetType): string {
  switch (object) {
    case StakeTargetType.STAKE_TARGET_INITIATIVE:
      return "STAKE_TARGET_INITIATIVE";
    case StakeTargetType.STAKE_TARGET_PROJECT:
      return "STAKE_TARGET_PROJECT";
    case StakeTargetType.STAKE_TARGET_MEMBER:
      return "STAKE_TARGET_MEMBER";
    case StakeTargetType.STAKE_TARGET_TAG:
      return "STAKE_TARGET_TAG";
    case StakeTargetType.STAKE_TARGET_BLOG_CONTENT:
      return "STAKE_TARGET_BLOG_CONTENT";
    case StakeTargetType.STAKE_TARGET_FORUM_CONTENT:
      return "STAKE_TARGET_FORUM_CONTENT";
    case StakeTargetType.STAKE_TARGET_COLLECTION_CONTENT:
      return "STAKE_TARGET_COLLECTION_CONTENT";
    case StakeTargetType.STAKE_TARGET_BLOG_AUTHOR_BOND:
      return "STAKE_TARGET_BLOG_AUTHOR_BOND";
    case StakeTargetType.STAKE_TARGET_FORUM_AUTHOR_BOND:
      return "STAKE_TARGET_FORUM_AUTHOR_BOND";
    case StakeTargetType.STAKE_TARGET_COLLECTION_AUTHOR_BOND:
      return "STAKE_TARGET_COLLECTION_AUTHOR_BOND";
    case StakeTargetType.STAKE_TARGET_BLOG_REPLY_AUTHOR_BOND:
      return "STAKE_TARGET_BLOG_REPLY_AUTHOR_BOND";
    case StakeTargetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Stake defines a staked DREAM position on a target.
 * Stakes earn rewards through different mechanisms depending on target type.
 * @name Stake
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Stake
 */
export interface Stake {
  id: bigint;
  staker: string;
  targetType: StakeTargetType;
  /**
   * For INITIATIVE/PROJECT: the entity ID
   */
  targetId: bigint;
  /**
   * For MEMBER: address; For TAG: tag name
   */
  targetIdentifier: string;
  amount: string;
  createdAt: bigint;
  /**
   * Last reward claim timestamp (lazy calculation)
   */
  lastClaimedAt: bigint;
  /**
   * MasterChef accounting for member/tag staking
   */
  rewardDebt: string;
}
export interface StakeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.Stake";
  value: Uint8Array;
}
/**
 * Stake defines a staked DREAM position on a target.
 * Stakes earn rewards through different mechanisms depending on target type.
 * @name StakeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Stake
 */
export interface StakeAmino {
  id?: string;
  staker?: string;
  target_type?: StakeTargetType;
  /**
   * For INITIATIVE/PROJECT: the entity ID
   */
  target_id?: string;
  /**
   * For MEMBER: address; For TAG: tag name
   */
  target_identifier?: string;
  amount?: string;
  created_at?: string;
  /**
   * Last reward claim timestamp (lazy calculation)
   */
  last_claimed_at?: string;
  /**
   * MasterChef accounting for member/tag staking
   */
  reward_debt?: string;
}
export interface StakeAminoMsg {
  type: "/sparkdream.rep.v1.Stake";
  value: StakeAmino;
}
/**
 * MemberStakePool tracks aggregate staking on a member for O(1) reward distribution
 * @name MemberStakePool
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberStakePool
 */
export interface MemberStakePool {
  member: string;
  totalStaked: string;
  pendingRevenue: string;
  accRewardPerShare: string;
  lastUpdated: bigint;
}
export interface MemberStakePoolProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MemberStakePool";
  value: Uint8Array;
}
/**
 * MemberStakePool tracks aggregate staking on a member for O(1) reward distribution
 * @name MemberStakePoolAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberStakePool
 */
export interface MemberStakePoolAmino {
  member?: string;
  total_staked?: string;
  pending_revenue?: string;
  acc_reward_per_share?: string;
  last_updated?: string;
}
export interface MemberStakePoolAminoMsg {
  type: "/sparkdream.rep.v1.MemberStakePool";
  value: MemberStakePoolAmino;
}
/**
 * TagStakePool tracks aggregate staking on a tag for O(1) reward distribution
 * @name TagStakePool
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagStakePool
 */
export interface TagStakePool {
  tag: string;
  totalStaked: string;
  accRewardPerShare: string;
  lastUpdated: bigint;
}
export interface TagStakePoolProtoMsg {
  typeUrl: "/sparkdream.rep.v1.TagStakePool";
  value: Uint8Array;
}
/**
 * TagStakePool tracks aggregate staking on a tag for O(1) reward distribution
 * @name TagStakePoolAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagStakePool
 */
export interface TagStakePoolAmino {
  tag?: string;
  total_staked?: string;
  acc_reward_per_share?: string;
  last_updated?: string;
}
export interface TagStakePoolAminoMsg {
  type: "/sparkdream.rep.v1.TagStakePool";
  value: TagStakePoolAmino;
}
/**
 * ProjectStakeInfo tracks project staking totals
 * @name ProjectStakeInfo
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ProjectStakeInfo
 */
export interface ProjectStakeInfo {
  projectId: bigint;
  totalStaked: string;
  completionBonusPool: string;
}
export interface ProjectStakeInfoProtoMsg {
  typeUrl: "/sparkdream.rep.v1.ProjectStakeInfo";
  value: Uint8Array;
}
/**
 * ProjectStakeInfo tracks project staking totals
 * @name ProjectStakeInfoAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ProjectStakeInfo
 */
export interface ProjectStakeInfoAmino {
  project_id?: string;
  total_staked?: string;
  completion_bonus_pool?: string;
}
export interface ProjectStakeInfoAminoMsg {
  type: "/sparkdream.rep.v1.ProjectStakeInfo";
  value: ProjectStakeInfoAmino;
}
function createBaseStake(): Stake {
  return {
    id: BigInt(0),
    staker: "",
    targetType: 0,
    targetId: BigInt(0),
    targetIdentifier: "",
    amount: "",
    createdAt: BigInt(0),
    lastClaimedAt: BigInt(0),
    rewardDebt: ""
  };
}
/**
 * Stake defines a staked DREAM position on a target.
 * Stakes earn rewards through different mechanisms depending on target type.
 * @name Stake
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Stake
 */
export const Stake = {
  typeUrl: "/sparkdream.rep.v1.Stake",
  encode(message: Stake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.targetType !== 0) {
      writer.uint32(24).int32(message.targetType);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(32).uint64(message.targetId);
    }
    if (message.targetIdentifier !== "") {
      writer.uint32(42).string(message.targetIdentifier);
    }
    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(56).int64(message.createdAt);
    }
    if (message.lastClaimedAt !== BigInt(0)) {
      writer.uint32(64).int64(message.lastClaimedAt);
    }
    if (message.rewardDebt !== "") {
      writer.uint32(74).string(message.rewardDebt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Stake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.targetType = reader.int32() as any;
          break;
        case 4:
          message.targetId = reader.uint64();
          break;
        case 5:
          message.targetIdentifier = reader.string();
          break;
        case 6:
          message.amount = reader.string();
          break;
        case 7:
          message.createdAt = reader.int64();
          break;
        case 8:
          message.lastClaimedAt = reader.int64();
          break;
        case 9:
          message.rewardDebt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Stake>): Stake {
    const message = createBaseStake();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.targetType = object.targetType ?? 0;
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.targetIdentifier = object.targetIdentifier ?? "";
    message.amount = object.amount ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.lastClaimedAt = object.lastClaimedAt !== undefined && object.lastClaimedAt !== null ? BigInt(object.lastClaimedAt.toString()) : BigInt(0);
    message.rewardDebt = object.rewardDebt ?? "";
    return message;
  },
  fromAmino(object: StakeAmino): Stake {
    const message = createBaseStake();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.target_identifier !== undefined && object.target_identifier !== null) {
      message.targetIdentifier = object.target_identifier;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.last_claimed_at !== undefined && object.last_claimed_at !== null) {
      message.lastClaimedAt = BigInt(object.last_claimed_at);
    }
    if (object.reward_debt !== undefined && object.reward_debt !== null) {
      message.rewardDebt = object.reward_debt;
    }
    return message;
  },
  toAmino(message: Stake): StakeAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.target_identifier = message.targetIdentifier === "" ? undefined : message.targetIdentifier;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.last_claimed_at = message.lastClaimedAt !== BigInt(0) ? message.lastClaimedAt?.toString() : undefined;
    obj.reward_debt = message.rewardDebt === "" ? undefined : message.rewardDebt;
    return obj;
  },
  fromAminoMsg(object: StakeAminoMsg): Stake {
    return Stake.fromAmino(object.value);
  },
  fromProtoMsg(message: StakeProtoMsg): Stake {
    return Stake.decode(message.value);
  },
  toProto(message: Stake): Uint8Array {
    return Stake.encode(message).finish();
  },
  toProtoMsg(message: Stake): StakeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.Stake",
      value: Stake.encode(message).finish()
    };
  }
};
function createBaseMemberStakePool(): MemberStakePool {
  return {
    member: "",
    totalStaked: "",
    pendingRevenue: "",
    accRewardPerShare: "",
    lastUpdated: BigInt(0)
  };
}
/**
 * MemberStakePool tracks aggregate staking on a member for O(1) reward distribution
 * @name MemberStakePool
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MemberStakePool
 */
export const MemberStakePool = {
  typeUrl: "/sparkdream.rep.v1.MemberStakePool",
  encode(message: MemberStakePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.totalStaked !== "") {
      writer.uint32(18).string(message.totalStaked);
    }
    if (message.pendingRevenue !== "") {
      writer.uint32(26).string(message.pendingRevenue);
    }
    if (message.accRewardPerShare !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.accRewardPerShare, 18).atomics);
    }
    if (message.lastUpdated !== BigInt(0)) {
      writer.uint32(40).int64(message.lastUpdated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberStakePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberStakePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.totalStaked = reader.string();
          break;
        case 3:
          message.pendingRevenue = reader.string();
          break;
        case 4:
          message.accRewardPerShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.lastUpdated = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MemberStakePool>): MemberStakePool {
    const message = createBaseMemberStakePool();
    message.member = object.member ?? "";
    message.totalStaked = object.totalStaked ?? "";
    message.pendingRevenue = object.pendingRevenue ?? "";
    message.accRewardPerShare = object.accRewardPerShare ?? "";
    message.lastUpdated = object.lastUpdated !== undefined && object.lastUpdated !== null ? BigInt(object.lastUpdated.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MemberStakePoolAmino): MemberStakePool {
    const message = createBaseMemberStakePool();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.total_staked !== undefined && object.total_staked !== null) {
      message.totalStaked = object.total_staked;
    }
    if (object.pending_revenue !== undefined && object.pending_revenue !== null) {
      message.pendingRevenue = object.pending_revenue;
    }
    if (object.acc_reward_per_share !== undefined && object.acc_reward_per_share !== null) {
      message.accRewardPerShare = object.acc_reward_per_share;
    }
    if (object.last_updated !== undefined && object.last_updated !== null) {
      message.lastUpdated = BigInt(object.last_updated);
    }
    return message;
  },
  toAmino(message: MemberStakePool): MemberStakePoolAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.total_staked = message.totalStaked === "" ? undefined : message.totalStaked;
    obj.pending_revenue = message.pendingRevenue === "" ? undefined : message.pendingRevenue;
    obj.acc_reward_per_share = message.accRewardPerShare === "" ? undefined : message.accRewardPerShare;
    obj.last_updated = message.lastUpdated !== BigInt(0) ? message.lastUpdated?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberStakePoolAminoMsg): MemberStakePool {
    return MemberStakePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberStakePoolProtoMsg): MemberStakePool {
    return MemberStakePool.decode(message.value);
  },
  toProto(message: MemberStakePool): Uint8Array {
    return MemberStakePool.encode(message).finish();
  },
  toProtoMsg(message: MemberStakePool): MemberStakePoolProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MemberStakePool",
      value: MemberStakePool.encode(message).finish()
    };
  }
};
function createBaseTagStakePool(): TagStakePool {
  return {
    tag: "",
    totalStaked: "",
    accRewardPerShare: "",
    lastUpdated: BigInt(0)
  };
}
/**
 * TagStakePool tracks aggregate staking on a tag for O(1) reward distribution
 * @name TagStakePool
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagStakePool
 */
export const TagStakePool = {
  typeUrl: "/sparkdream.rep.v1.TagStakePool",
  encode(message: TagStakePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    if (message.totalStaked !== "") {
      writer.uint32(18).string(message.totalStaked);
    }
    if (message.accRewardPerShare !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.accRewardPerShare, 18).atomics);
    }
    if (message.lastUpdated !== BigInt(0)) {
      writer.uint32(32).int64(message.lastUpdated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TagStakePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagStakePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        case 2:
          message.totalStaked = reader.string();
          break;
        case 3:
          message.accRewardPerShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.lastUpdated = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TagStakePool>): TagStakePool {
    const message = createBaseTagStakePool();
    message.tag = object.tag ?? "";
    message.totalStaked = object.totalStaked ?? "";
    message.accRewardPerShare = object.accRewardPerShare ?? "";
    message.lastUpdated = object.lastUpdated !== undefined && object.lastUpdated !== null ? BigInt(object.lastUpdated.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TagStakePoolAmino): TagStakePool {
    const message = createBaseTagStakePool();
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    if (object.total_staked !== undefined && object.total_staked !== null) {
      message.totalStaked = object.total_staked;
    }
    if (object.acc_reward_per_share !== undefined && object.acc_reward_per_share !== null) {
      message.accRewardPerShare = object.acc_reward_per_share;
    }
    if (object.last_updated !== undefined && object.last_updated !== null) {
      message.lastUpdated = BigInt(object.last_updated);
    }
    return message;
  },
  toAmino(message: TagStakePool): TagStakePoolAmino {
    const obj: any = {};
    obj.tag = message.tag === "" ? undefined : message.tag;
    obj.total_staked = message.totalStaked === "" ? undefined : message.totalStaked;
    obj.acc_reward_per_share = message.accRewardPerShare === "" ? undefined : message.accRewardPerShare;
    obj.last_updated = message.lastUpdated !== BigInt(0) ? message.lastUpdated?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TagStakePoolAminoMsg): TagStakePool {
    return TagStakePool.fromAmino(object.value);
  },
  fromProtoMsg(message: TagStakePoolProtoMsg): TagStakePool {
    return TagStakePool.decode(message.value);
  },
  toProto(message: TagStakePool): Uint8Array {
    return TagStakePool.encode(message).finish();
  },
  toProtoMsg(message: TagStakePool): TagStakePoolProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.TagStakePool",
      value: TagStakePool.encode(message).finish()
    };
  }
};
function createBaseProjectStakeInfo(): ProjectStakeInfo {
  return {
    projectId: BigInt(0),
    totalStaked: "",
    completionBonusPool: ""
  };
}
/**
 * ProjectStakeInfo tracks project staking totals
 * @name ProjectStakeInfo
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ProjectStakeInfo
 */
export const ProjectStakeInfo = {
  typeUrl: "/sparkdream.rep.v1.ProjectStakeInfo",
  encode(message: ProjectStakeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== BigInt(0)) {
      writer.uint32(8).uint64(message.projectId);
    }
    if (message.totalStaked !== "") {
      writer.uint32(18).string(message.totalStaked);
    }
    if (message.completionBonusPool !== "") {
      writer.uint32(26).string(message.completionBonusPool);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProjectStakeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectStakeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.uint64();
          break;
        case 2:
          message.totalStaked = reader.string();
          break;
        case 3:
          message.completionBonusPool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProjectStakeInfo>): ProjectStakeInfo {
    const message = createBaseProjectStakeInfo();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt(0);
    message.totalStaked = object.totalStaked ?? "";
    message.completionBonusPool = object.completionBonusPool ?? "";
    return message;
  },
  fromAmino(object: ProjectStakeInfoAmino): ProjectStakeInfo {
    const message = createBaseProjectStakeInfo();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = BigInt(object.project_id);
    }
    if (object.total_staked !== undefined && object.total_staked !== null) {
      message.totalStaked = object.total_staked;
    }
    if (object.completion_bonus_pool !== undefined && object.completion_bonus_pool !== null) {
      message.completionBonusPool = object.completion_bonus_pool;
    }
    return message;
  },
  toAmino(message: ProjectStakeInfo): ProjectStakeInfoAmino {
    const obj: any = {};
    obj.project_id = message.projectId !== BigInt(0) ? message.projectId?.toString() : undefined;
    obj.total_staked = message.totalStaked === "" ? undefined : message.totalStaked;
    obj.completion_bonus_pool = message.completionBonusPool === "" ? undefined : message.completionBonusPool;
    return obj;
  },
  fromAminoMsg(object: ProjectStakeInfoAminoMsg): ProjectStakeInfo {
    return ProjectStakeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectStakeInfoProtoMsg): ProjectStakeInfo {
    return ProjectStakeInfo.decode(message.value);
  },
  toProto(message: ProjectStakeInfo): Uint8Array {
    return ProjectStakeInfo.encode(message).finish();
  },
  toProtoMsg(message: ProjectStakeInfo): ProjectStakeInfoProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.ProjectStakeInfo",
      value: ProjectStakeInfo.encode(message).finish()
    };
  }
};