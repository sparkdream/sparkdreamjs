//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
/** PostStatus represents the status of a post. */
export enum PostStatus {
  POST_STATUS_UNSPECIFIED = 0,
  POST_STATUS_ACTIVE = 1,
  POST_STATUS_HIDDEN = 2,
  POST_STATUS_DELETED = 3,
  POST_STATUS_ARCHIVED = 4,
  UNRECOGNIZED = -1,
}
export const PostStatusAmino = PostStatus;
export function postStatusFromJSON(object: any): PostStatus {
  switch (object) {
    case 0:
    case "POST_STATUS_UNSPECIFIED":
      return PostStatus.POST_STATUS_UNSPECIFIED;
    case 1:
    case "POST_STATUS_ACTIVE":
      return PostStatus.POST_STATUS_ACTIVE;
    case 2:
    case "POST_STATUS_HIDDEN":
      return PostStatus.POST_STATUS_HIDDEN;
    case 3:
    case "POST_STATUS_DELETED":
      return PostStatus.POST_STATUS_DELETED;
    case 4:
    case "POST_STATUS_ARCHIVED":
      return PostStatus.POST_STATUS_ARCHIVED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostStatus.UNRECOGNIZED;
  }
}
export function postStatusToJSON(object: PostStatus): string {
  switch (object) {
    case PostStatus.POST_STATUS_UNSPECIFIED:
      return "POST_STATUS_UNSPECIFIED";
    case PostStatus.POST_STATUS_ACTIVE:
      return "POST_STATUS_ACTIVE";
    case PostStatus.POST_STATUS_HIDDEN:
      return "POST_STATUS_HIDDEN";
    case PostStatus.POST_STATUS_DELETED:
      return "POST_STATUS_DELETED";
    case PostStatus.POST_STATUS_ARCHIVED:
      return "POST_STATUS_ARCHIVED";
    case PostStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** BountyStatus represents the status of a bounty. */
export enum BountyStatus {
  BOUNTY_STATUS_UNSPECIFIED = 0,
  BOUNTY_STATUS_ACTIVE = 1,
  BOUNTY_STATUS_AWARDED = 2,
  BOUNTY_STATUS_EXPIRED = 3,
  BOUNTY_STATUS_CANCELLED = 4,
  BOUNTY_STATUS_MODERATION_PENDING = 5,
  UNRECOGNIZED = -1,
}
export const BountyStatusAmino = BountyStatus;
export function bountyStatusFromJSON(object: any): BountyStatus {
  switch (object) {
    case 0:
    case "BOUNTY_STATUS_UNSPECIFIED":
      return BountyStatus.BOUNTY_STATUS_UNSPECIFIED;
    case 1:
    case "BOUNTY_STATUS_ACTIVE":
      return BountyStatus.BOUNTY_STATUS_ACTIVE;
    case 2:
    case "BOUNTY_STATUS_AWARDED":
      return BountyStatus.BOUNTY_STATUS_AWARDED;
    case 3:
    case "BOUNTY_STATUS_EXPIRED":
      return BountyStatus.BOUNTY_STATUS_EXPIRED;
    case 4:
    case "BOUNTY_STATUS_CANCELLED":
      return BountyStatus.BOUNTY_STATUS_CANCELLED;
    case 5:
    case "BOUNTY_STATUS_MODERATION_PENDING":
      return BountyStatus.BOUNTY_STATUS_MODERATION_PENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BountyStatus.UNRECOGNIZED;
  }
}
export function bountyStatusToJSON(object: BountyStatus): string {
  switch (object) {
    case BountyStatus.BOUNTY_STATUS_UNSPECIFIED:
      return "BOUNTY_STATUS_UNSPECIFIED";
    case BountyStatus.BOUNTY_STATUS_ACTIVE:
      return "BOUNTY_STATUS_ACTIVE";
    case BountyStatus.BOUNTY_STATUS_AWARDED:
      return "BOUNTY_STATUS_AWARDED";
    case BountyStatus.BOUNTY_STATUS_EXPIRED:
      return "BOUNTY_STATUS_EXPIRED";
    case BountyStatus.BOUNTY_STATUS_CANCELLED:
      return "BOUNTY_STATUS_CANCELLED";
    case BountyStatus.BOUNTY_STATUS_MODERATION_PENDING:
      return "BOUNTY_STATUS_MODERATION_PENDING";
    case BountyStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ModerationActionType represents the type of moderation action. */
export enum ModerationActionType {
  MODERATION_ACTION_UNSPECIFIED = 0,
  MODERATION_ACTION_HIDE = 1,
  MODERATION_ACTION_UNHIDE = 2,
  MODERATION_ACTION_LOCK = 3,
  MODERATION_ACTION_UNLOCK = 4,
  MODERATION_ACTION_MOVE = 5,
  MODERATION_ACTION_PIN = 6,
  MODERATION_ACTION_UNPIN = 7,
  MODERATION_ACTION_DELETE = 8,
  MODERATION_ACTION_FLAG_DISMISSED = 9,
  MODERATION_ACTION_APPEAL_FILED = 10,
  MODERATION_ACTION_APPEAL_UPHELD = 11,
  MODERATION_ACTION_APPEAL_REJECTED = 12,
  MODERATION_ACTION_APPEAL_TIMEOUT = 13,
  MODERATION_ACTION_ARCHIVE = 14,
  MODERATION_ACTION_UNARCHIVE = 15,
  UNRECOGNIZED = -1,
}
export const ModerationActionTypeAmino = ModerationActionType;
export function moderationActionTypeFromJSON(object: any): ModerationActionType {
  switch (object) {
    case 0:
    case "MODERATION_ACTION_UNSPECIFIED":
      return ModerationActionType.MODERATION_ACTION_UNSPECIFIED;
    case 1:
    case "MODERATION_ACTION_HIDE":
      return ModerationActionType.MODERATION_ACTION_HIDE;
    case 2:
    case "MODERATION_ACTION_UNHIDE":
      return ModerationActionType.MODERATION_ACTION_UNHIDE;
    case 3:
    case "MODERATION_ACTION_LOCK":
      return ModerationActionType.MODERATION_ACTION_LOCK;
    case 4:
    case "MODERATION_ACTION_UNLOCK":
      return ModerationActionType.MODERATION_ACTION_UNLOCK;
    case 5:
    case "MODERATION_ACTION_MOVE":
      return ModerationActionType.MODERATION_ACTION_MOVE;
    case 6:
    case "MODERATION_ACTION_PIN":
      return ModerationActionType.MODERATION_ACTION_PIN;
    case 7:
    case "MODERATION_ACTION_UNPIN":
      return ModerationActionType.MODERATION_ACTION_UNPIN;
    case 8:
    case "MODERATION_ACTION_DELETE":
      return ModerationActionType.MODERATION_ACTION_DELETE;
    case 9:
    case "MODERATION_ACTION_FLAG_DISMISSED":
      return ModerationActionType.MODERATION_ACTION_FLAG_DISMISSED;
    case 10:
    case "MODERATION_ACTION_APPEAL_FILED":
      return ModerationActionType.MODERATION_ACTION_APPEAL_FILED;
    case 11:
    case "MODERATION_ACTION_APPEAL_UPHELD":
      return ModerationActionType.MODERATION_ACTION_APPEAL_UPHELD;
    case 12:
    case "MODERATION_ACTION_APPEAL_REJECTED":
      return ModerationActionType.MODERATION_ACTION_APPEAL_REJECTED;
    case 13:
    case "MODERATION_ACTION_APPEAL_TIMEOUT":
      return ModerationActionType.MODERATION_ACTION_APPEAL_TIMEOUT;
    case 14:
    case "MODERATION_ACTION_ARCHIVE":
      return ModerationActionType.MODERATION_ACTION_ARCHIVE;
    case 15:
    case "MODERATION_ACTION_UNARCHIVE":
      return ModerationActionType.MODERATION_ACTION_UNARCHIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ModerationActionType.UNRECOGNIZED;
  }
}
export function moderationActionTypeToJSON(object: ModerationActionType): string {
  switch (object) {
    case ModerationActionType.MODERATION_ACTION_UNSPECIFIED:
      return "MODERATION_ACTION_UNSPECIFIED";
    case ModerationActionType.MODERATION_ACTION_HIDE:
      return "MODERATION_ACTION_HIDE";
    case ModerationActionType.MODERATION_ACTION_UNHIDE:
      return "MODERATION_ACTION_UNHIDE";
    case ModerationActionType.MODERATION_ACTION_LOCK:
      return "MODERATION_ACTION_LOCK";
    case ModerationActionType.MODERATION_ACTION_UNLOCK:
      return "MODERATION_ACTION_UNLOCK";
    case ModerationActionType.MODERATION_ACTION_MOVE:
      return "MODERATION_ACTION_MOVE";
    case ModerationActionType.MODERATION_ACTION_PIN:
      return "MODERATION_ACTION_PIN";
    case ModerationActionType.MODERATION_ACTION_UNPIN:
      return "MODERATION_ACTION_UNPIN";
    case ModerationActionType.MODERATION_ACTION_DELETE:
      return "MODERATION_ACTION_DELETE";
    case ModerationActionType.MODERATION_ACTION_FLAG_DISMISSED:
      return "MODERATION_ACTION_FLAG_DISMISSED";
    case ModerationActionType.MODERATION_ACTION_APPEAL_FILED:
      return "MODERATION_ACTION_APPEAL_FILED";
    case ModerationActionType.MODERATION_ACTION_APPEAL_UPHELD:
      return "MODERATION_ACTION_APPEAL_UPHELD";
    case ModerationActionType.MODERATION_ACTION_APPEAL_REJECTED:
      return "MODERATION_ACTION_APPEAL_REJECTED";
    case ModerationActionType.MODERATION_ACTION_APPEAL_TIMEOUT:
      return "MODERATION_ACTION_APPEAL_TIMEOUT";
    case ModerationActionType.MODERATION_ACTION_ARCHIVE:
      return "MODERATION_ACTION_ARCHIVE";
    case ModerationActionType.MODERATION_ACTION_UNARCHIVE:
      return "MODERATION_ACTION_UNARCHIVE";
    case ModerationActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ModerationSource represents the source of moderation action. */
export enum ModerationSource {
  MODERATION_SOURCE_UNSPECIFIED = 0,
  MODERATION_SOURCE_SENTINEL = 1,
  MODERATION_SOURCE_GOV_COMMITTEE = 2,
  MODERATION_SOURCE_SYSTEM = 3,
  MODERATION_SOURCE_APPEAL_JURY = 4,
  MODERATION_SOURCE_AUTHOR = 5,
  UNRECOGNIZED = -1,
}
export const ModerationSourceAmino = ModerationSource;
export function moderationSourceFromJSON(object: any): ModerationSource {
  switch (object) {
    case 0:
    case "MODERATION_SOURCE_UNSPECIFIED":
      return ModerationSource.MODERATION_SOURCE_UNSPECIFIED;
    case 1:
    case "MODERATION_SOURCE_SENTINEL":
      return ModerationSource.MODERATION_SOURCE_SENTINEL;
    case 2:
    case "MODERATION_SOURCE_GOV_COMMITTEE":
      return ModerationSource.MODERATION_SOURCE_GOV_COMMITTEE;
    case 3:
    case "MODERATION_SOURCE_SYSTEM":
      return ModerationSource.MODERATION_SOURCE_SYSTEM;
    case 4:
    case "MODERATION_SOURCE_APPEAL_JURY":
      return ModerationSource.MODERATION_SOURCE_APPEAL_JURY;
    case 5:
    case "MODERATION_SOURCE_AUTHOR":
      return ModerationSource.MODERATION_SOURCE_AUTHOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ModerationSource.UNRECOGNIZED;
  }
}
export function moderationSourceToJSON(object: ModerationSource): string {
  switch (object) {
    case ModerationSource.MODERATION_SOURCE_UNSPECIFIED:
      return "MODERATION_SOURCE_UNSPECIFIED";
    case ModerationSource.MODERATION_SOURCE_SENTINEL:
      return "MODERATION_SOURCE_SENTINEL";
    case ModerationSource.MODERATION_SOURCE_GOV_COMMITTEE:
      return "MODERATION_SOURCE_GOV_COMMITTEE";
    case ModerationSource.MODERATION_SOURCE_SYSTEM:
      return "MODERATION_SOURCE_SYSTEM";
    case ModerationSource.MODERATION_SOURCE_APPEAL_JURY:
      return "MODERATION_SOURCE_APPEAL_JURY";
    case ModerationSource.MODERATION_SOURCE_AUTHOR:
      return "MODERATION_SOURCE_AUTHOR";
    case ModerationSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * BountyAward represents an award given from a bounty.
 * @name BountyAward
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.BountyAward
 */
export interface BountyAward {
  postId: bigint;
  recipient: string;
  amount: string;
  reason: string;
  awardedAt: bigint;
  rank: number;
}
export interface BountyAwardProtoMsg {
  typeUrl: "/sparkdream.forum.v1.BountyAward";
  value: Uint8Array;
}
/**
 * BountyAward represents an award given from a bounty.
 * @name BountyAwardAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.BountyAward
 */
export interface BountyAwardAmino {
  post_id?: string;
  recipient?: string;
  amount?: string;
  reason?: string;
  awarded_at?: string;
  rank?: number;
}
export interface BountyAwardAminoMsg {
  type: "/sparkdream.forum.v1.BountyAward";
  value: BountyAwardAmino;
}
/**
 * PinnedReplyRecord represents a pinned reply in a thread.
 * @name PinnedReplyRecord
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PinnedReplyRecord
 */
export interface PinnedReplyRecord {
  postId: bigint;
  pinnedBy: string;
  pinnedAt: bigint;
  isSentinelPin: boolean;
  disputed: boolean;
  initiativeId: bigint;
  /**
   * committed_amount is the sentinel bond (in udream, as a string) reserved at
   * pin time, released on an upheld dispute and available to slash on an
   * overturn. Empty for governance-authority pins (no bond reserved).
   */
  committedAmount: string;
}
export interface PinnedReplyRecordProtoMsg {
  typeUrl: "/sparkdream.forum.v1.PinnedReplyRecord";
  value: Uint8Array;
}
/**
 * PinnedReplyRecord represents a pinned reply in a thread.
 * @name PinnedReplyRecordAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PinnedReplyRecord
 */
export interface PinnedReplyRecordAmino {
  post_id?: string;
  pinned_by?: string;
  pinned_at?: string;
  is_sentinel_pin?: boolean;
  disputed?: boolean;
  initiative_id?: string;
  /**
   * committed_amount is the sentinel bond (in udream, as a string) reserved at
   * pin time, released on an upheld dispute and available to slash on an
   * overturn. Empty for governance-authority pins (no bond reserved).
   */
  committed_amount?: string;
}
export interface PinnedReplyRecordAminoMsg {
  type: "/sparkdream.forum.v1.PinnedReplyRecord";
  value: PinnedReplyRecordAmino;
}
/**
 * ForumRepEpochCounter tracks how much forum reputation a single author has
 * earned in a single tag during the current UTC-day epoch. Reset implicitly
 * by comparing epoch_id to floor(block_time / 86400) on read — when the
 * stored epoch_id is stale, the accumulated counter is treated as zero and
 * overwritten on the next credit. Used by the post-conviction accrual loop
 * to enforce Params.max_forum_rep_per_tag_per_epoch.
 * @name ForumRepEpochCounter
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ForumRepEpochCounter
 */
export interface ForumRepEpochCounter {
  /**
   * epoch_id is the UTC-day index: floor(block_time / 86400).
   */
  epochId: bigint;
  /**
   * accumulated is the dec-string of rep credited so far this epoch.
   */
  accumulated: string;
}
export interface ForumRepEpochCounterProtoMsg {
  typeUrl: "/sparkdream.forum.v1.ForumRepEpochCounter";
  value: Uint8Array;
}
/**
 * ForumRepEpochCounter tracks how much forum reputation a single author has
 * earned in a single tag during the current UTC-day epoch. Reset implicitly
 * by comparing epoch_id to floor(block_time / 86400) on read — when the
 * stored epoch_id is stale, the accumulated counter is treated as zero and
 * overwritten on the next credit. Used by the post-conviction accrual loop
 * to enforce Params.max_forum_rep_per_tag_per_epoch.
 * @name ForumRepEpochCounterAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ForumRepEpochCounter
 */
export interface ForumRepEpochCounterAmino {
  /**
   * epoch_id is the UTC-day index: floor(block_time / 86400).
   */
  epoch_id?: string;
  /**
   * accumulated is the dec-string of rep credited so far this epoch.
   */
  accumulated?: string;
}
export interface ForumRepEpochCounterAminoMsg {
  type: "/sparkdream.forum.v1.ForumRepEpochCounter";
  value: ForumRepEpochCounterAmino;
}
/**
 * @name PostConvictionStake_AccruedRepPerTagEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.undefined
 */
export interface PostConvictionStake_AccruedRepPerTagEntry {
  key: string;
  value: string;
}
export interface PostConvictionStake_AccruedRepPerTagEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name PostConvictionStake_AccruedRepPerTagEntryAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PostConvictionStake_AccruedRepPerTagEntry
 */
export interface PostConvictionStake_AccruedRepPerTagEntryAmino {
  key?: string;
  value?: string;
}
export interface PostConvictionStake_AccruedRepPerTagEntryAminoMsg {
  type: string;
  value: PostConvictionStake_AccruedRepPerTagEntryAmino;
}
/**
 * PostConvictionStake records an ESTABLISHED+ member's DREAM lock backing a
 * post's author. While the stake is active, the EndBlocker streams per-tag
 * reputation to the author proportional to the stake's share of total active
 * stakes on the post (split evenly across the post's tags). On confirmed
 * sentinel hide (ExpireHiddenPosts), the accrued rep is clawed back from the
 * author per tag and a fraction of the staker's locked DREAM is slashed
 * (staker_slash_bps) — both staker and author endorsed harm.
 * 
 * Stakers cannot stake on their own posts. Stakes are released after
 * unlocks_at via MsgReleasePostConviction; LockDREAM/UnlockDREAM bypass the
 * 3% transfer tax because it is internal member-balance rebalancing, not a
 * transfer.
 * @name PostConvictionStake
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PostConvictionStake
 */
export interface PostConvictionStake {
  id: bigint;
  staker: string;
  postId: bigint;
  amount: string;
  stakedAt: bigint;
  unlocksAt: bigint;
  /**
   * accrued_rep_per_tag tracks how much rep this stake has minted to the
   * author per tag, so a confirmed hide can claw back exactly the amount this
   * stake produced (and no more). Map key is tag name, value is a decimal
   * string (math.LegacyDec). Populated by the EndBlocker accrual loop.
   */
  accruedRepPerTag: {
    [key: string]: string;
  };
  /**
   * last_accrual_at is the last EndBlocker tick at which this stake credited
   * rep to the author. Initialized to staked_at on creation; streaming is
   * bounded by the per-(author,tag) epoch cap so multiple stakes can saturate
   * a single tag without one stake monopolizing the budget.
   */
  lastAccrualAt: bigint;
  /**
   * released is set true once the staker has called MsgReleasePostConviction
   * after unlocks_at. Released stakes are kept in state until the post's
   * hide-appeal window has fully elapsed so any retroactive slash can still
   * find them; after that they are GC'd by a pass in EndBlocker.
   */
  released: boolean;
}
export interface PostConvictionStakeProtoMsg {
  typeUrl: "/sparkdream.forum.v1.PostConvictionStake";
  value: Uint8Array;
}
/**
 * PostConvictionStake records an ESTABLISHED+ member's DREAM lock backing a
 * post's author. While the stake is active, the EndBlocker streams per-tag
 * reputation to the author proportional to the stake's share of total active
 * stakes on the post (split evenly across the post's tags). On confirmed
 * sentinel hide (ExpireHiddenPosts), the accrued rep is clawed back from the
 * author per tag and a fraction of the staker's locked DREAM is slashed
 * (staker_slash_bps) — both staker and author endorsed harm.
 * 
 * Stakers cannot stake on their own posts. Stakes are released after
 * unlocks_at via MsgReleasePostConviction; LockDREAM/UnlockDREAM bypass the
 * 3% transfer tax because it is internal member-balance rebalancing, not a
 * transfer.
 * @name PostConvictionStakeAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PostConvictionStake
 */
export interface PostConvictionStakeAmino {
  id?: string;
  staker?: string;
  post_id?: string;
  amount?: string;
  staked_at?: string;
  unlocks_at?: string;
  /**
   * accrued_rep_per_tag tracks how much rep this stake has minted to the
   * author per tag, so a confirmed hide can claw back exactly the amount this
   * stake produced (and no more). Map key is tag name, value is a decimal
   * string (math.LegacyDec). Populated by the EndBlocker accrual loop.
   */
  accrued_rep_per_tag?: {
    [key: string]: string;
  };
  /**
   * last_accrual_at is the last EndBlocker tick at which this stake credited
   * rep to the author. Initialized to staked_at on creation; streaming is
   * bounded by the per-(author,tag) epoch cap so multiple stakes can saturate
   * a single tag without one stake monopolizing the budget.
   */
  last_accrual_at?: string;
  /**
   * released is set true once the staker has called MsgReleasePostConviction
   * after unlocks_at. Released stakes are kept in state until the post's
   * hide-appeal window has fully elapsed so any retroactive slash can still
   * find them; after that they are GC'd by a pass in EndBlocker.
   */
  released?: boolean;
}
export interface PostConvictionStakeAminoMsg {
  type: "/sparkdream.forum.v1.PostConvictionStake";
  value: PostConvictionStakeAmino;
}
function createBaseBountyAward(): BountyAward {
  return {
    postId: BigInt(0),
    recipient: "",
    amount: "",
    reason: "",
    awardedAt: BigInt(0),
    rank: 0
  };
}
/**
 * BountyAward represents an award given from a bounty.
 * @name BountyAward
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.BountyAward
 */
export const BountyAward = {
  typeUrl: "/sparkdream.forum.v1.BountyAward",
  encode(message: BountyAward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    if (message.awardedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.awardedAt);
    }
    if (message.rank !== 0) {
      writer.uint32(48).uint32(message.rank);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BountyAward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBountyAward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.reason = reader.string();
          break;
        case 5:
          message.awardedAt = reader.int64();
          break;
        case 6:
          message.rank = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BountyAward>): BountyAward {
    const message = createBaseBountyAward();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.reason = object.reason ?? "";
    message.awardedAt = object.awardedAt !== undefined && object.awardedAt !== null ? BigInt(object.awardedAt.toString()) : BigInt(0);
    message.rank = object.rank ?? 0;
    return message;
  },
  fromAmino(object: BountyAwardAmino): BountyAward {
    const message = createBaseBountyAward();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.awarded_at !== undefined && object.awarded_at !== null) {
      message.awardedAt = BigInt(object.awarded_at);
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = object.rank;
    }
    return message;
  },
  toAmino(message: BountyAward): BountyAwardAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.awarded_at = message.awardedAt !== BigInt(0) ? message.awardedAt?.toString() : undefined;
    obj.rank = message.rank === 0 ? undefined : message.rank;
    return obj;
  },
  fromAminoMsg(object: BountyAwardAminoMsg): BountyAward {
    return BountyAward.fromAmino(object.value);
  },
  fromProtoMsg(message: BountyAwardProtoMsg): BountyAward {
    return BountyAward.decode(message.value);
  },
  toProto(message: BountyAward): Uint8Array {
    return BountyAward.encode(message).finish();
  },
  toProtoMsg(message: BountyAward): BountyAwardProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.BountyAward",
      value: BountyAward.encode(message).finish()
    };
  }
};
function createBasePinnedReplyRecord(): PinnedReplyRecord {
  return {
    postId: BigInt(0),
    pinnedBy: "",
    pinnedAt: BigInt(0),
    isSentinelPin: false,
    disputed: false,
    initiativeId: BigInt(0),
    committedAmount: ""
  };
}
/**
 * PinnedReplyRecord represents a pinned reply in a thread.
 * @name PinnedReplyRecord
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PinnedReplyRecord
 */
export const PinnedReplyRecord = {
  typeUrl: "/sparkdream.forum.v1.PinnedReplyRecord",
  encode(message: PinnedReplyRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.pinnedBy !== "") {
      writer.uint32(18).string(message.pinnedBy);
    }
    if (message.pinnedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.pinnedAt);
    }
    if (message.isSentinelPin === true) {
      writer.uint32(32).bool(message.isSentinelPin);
    }
    if (message.disputed === true) {
      writer.uint32(40).bool(message.disputed);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(48).uint64(message.initiativeId);
    }
    if (message.committedAmount !== "") {
      writer.uint32(58).string(message.committedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PinnedReplyRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinnedReplyRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.pinnedBy = reader.string();
          break;
        case 3:
          message.pinnedAt = reader.int64();
          break;
        case 4:
          message.isSentinelPin = reader.bool();
          break;
        case 5:
          message.disputed = reader.bool();
          break;
        case 6:
          message.initiativeId = reader.uint64();
          break;
        case 7:
          message.committedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PinnedReplyRecord>): PinnedReplyRecord {
    const message = createBasePinnedReplyRecord();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.pinnedBy = object.pinnedBy ?? "";
    message.pinnedAt = object.pinnedAt !== undefined && object.pinnedAt !== null ? BigInt(object.pinnedAt.toString()) : BigInt(0);
    message.isSentinelPin = object.isSentinelPin ?? false;
    message.disputed = object.disputed ?? false;
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.committedAmount = object.committedAmount ?? "";
    return message;
  },
  fromAmino(object: PinnedReplyRecordAmino): PinnedReplyRecord {
    const message = createBasePinnedReplyRecord();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.pinned_by !== undefined && object.pinned_by !== null) {
      message.pinnedBy = object.pinned_by;
    }
    if (object.pinned_at !== undefined && object.pinned_at !== null) {
      message.pinnedAt = BigInt(object.pinned_at);
    }
    if (object.is_sentinel_pin !== undefined && object.is_sentinel_pin !== null) {
      message.isSentinelPin = object.is_sentinel_pin;
    }
    if (object.disputed !== undefined && object.disputed !== null) {
      message.disputed = object.disputed;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.committed_amount !== undefined && object.committed_amount !== null) {
      message.committedAmount = object.committed_amount;
    }
    return message;
  },
  toAmino(message: PinnedReplyRecord): PinnedReplyRecordAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.pinned_by = message.pinnedBy === "" ? undefined : message.pinnedBy;
    obj.pinned_at = message.pinnedAt !== BigInt(0) ? message.pinnedAt?.toString() : undefined;
    obj.is_sentinel_pin = message.isSentinelPin === false ? undefined : message.isSentinelPin;
    obj.disputed = message.disputed === false ? undefined : message.disputed;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.committed_amount = message.committedAmount === "" ? undefined : message.committedAmount;
    return obj;
  },
  fromAminoMsg(object: PinnedReplyRecordAminoMsg): PinnedReplyRecord {
    return PinnedReplyRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: PinnedReplyRecordProtoMsg): PinnedReplyRecord {
    return PinnedReplyRecord.decode(message.value);
  },
  toProto(message: PinnedReplyRecord): Uint8Array {
    return PinnedReplyRecord.encode(message).finish();
  },
  toProtoMsg(message: PinnedReplyRecord): PinnedReplyRecordProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.PinnedReplyRecord",
      value: PinnedReplyRecord.encode(message).finish()
    };
  }
};
function createBaseForumRepEpochCounter(): ForumRepEpochCounter {
  return {
    epochId: BigInt(0),
    accumulated: ""
  };
}
/**
 * ForumRepEpochCounter tracks how much forum reputation a single author has
 * earned in a single tag during the current UTC-day epoch. Reset implicitly
 * by comparing epoch_id to floor(block_time / 86400) on read — when the
 * stored epoch_id is stale, the accumulated counter is treated as zero and
 * overwritten on the next credit. Used by the post-conviction accrual loop
 * to enforce Params.max_forum_rep_per_tag_per_epoch.
 * @name ForumRepEpochCounter
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ForumRepEpochCounter
 */
export const ForumRepEpochCounter = {
  typeUrl: "/sparkdream.forum.v1.ForumRepEpochCounter",
  encode(message: ForumRepEpochCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochId !== BigInt(0)) {
      writer.uint32(8).int64(message.epochId);
    }
    if (message.accumulated !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.accumulated, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForumRepEpochCounter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForumRepEpochCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochId = reader.int64();
          break;
        case 2:
          message.accumulated = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ForumRepEpochCounter>): ForumRepEpochCounter {
    const message = createBaseForumRepEpochCounter();
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.accumulated = object.accumulated ?? "";
    return message;
  },
  fromAmino(object: ForumRepEpochCounterAmino): ForumRepEpochCounter {
    const message = createBaseForumRepEpochCounter();
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.accumulated !== undefined && object.accumulated !== null) {
      message.accumulated = object.accumulated;
    }
    return message;
  },
  toAmino(message: ForumRepEpochCounter): ForumRepEpochCounterAmino {
    const obj: any = {};
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.accumulated = message.accumulated === "" ? undefined : message.accumulated;
    return obj;
  },
  fromAminoMsg(object: ForumRepEpochCounterAminoMsg): ForumRepEpochCounter {
    return ForumRepEpochCounter.fromAmino(object.value);
  },
  fromProtoMsg(message: ForumRepEpochCounterProtoMsg): ForumRepEpochCounter {
    return ForumRepEpochCounter.decode(message.value);
  },
  toProto(message: ForumRepEpochCounter): Uint8Array {
    return ForumRepEpochCounter.encode(message).finish();
  },
  toProtoMsg(message: ForumRepEpochCounter): ForumRepEpochCounterProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.ForumRepEpochCounter",
      value: ForumRepEpochCounter.encode(message).finish()
    };
  }
};
function createBasePostConvictionStake_AccruedRepPerTagEntry(): PostConvictionStake_AccruedRepPerTagEntry {
  return {
    key: "",
    value: ""
  };
}
/**
 * @name PostConvictionStake_AccruedRepPerTagEntry
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.undefined
 */
export const PostConvictionStake_AccruedRepPerTagEntry = {
  encode(message: PostConvictionStake_AccruedRepPerTagEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PostConvictionStake_AccruedRepPerTagEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostConvictionStake_AccruedRepPerTagEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PostConvictionStake_AccruedRepPerTagEntry>): PostConvictionStake_AccruedRepPerTagEntry {
    const message = createBasePostConvictionStake_AccruedRepPerTagEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: PostConvictionStake_AccruedRepPerTagEntryAmino): PostConvictionStake_AccruedRepPerTagEntry {
    const message = createBasePostConvictionStake_AccruedRepPerTagEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: PostConvictionStake_AccruedRepPerTagEntry): PostConvictionStake_AccruedRepPerTagEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: PostConvictionStake_AccruedRepPerTagEntryAminoMsg): PostConvictionStake_AccruedRepPerTagEntry {
    return PostConvictionStake_AccruedRepPerTagEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PostConvictionStake_AccruedRepPerTagEntryProtoMsg): PostConvictionStake_AccruedRepPerTagEntry {
    return PostConvictionStake_AccruedRepPerTagEntry.decode(message.value);
  },
  toProto(message: PostConvictionStake_AccruedRepPerTagEntry): Uint8Array {
    return PostConvictionStake_AccruedRepPerTagEntry.encode(message).finish();
  }
};
function createBasePostConvictionStake(): PostConvictionStake {
  return {
    id: BigInt(0),
    staker: "",
    postId: BigInt(0),
    amount: "",
    stakedAt: BigInt(0),
    unlocksAt: BigInt(0),
    accruedRepPerTag: {},
    lastAccrualAt: BigInt(0),
    released: false
  };
}
/**
 * PostConvictionStake records an ESTABLISHED+ member's DREAM lock backing a
 * post's author. While the stake is active, the EndBlocker streams per-tag
 * reputation to the author proportional to the stake's share of total active
 * stakes on the post (split evenly across the post's tags). On confirmed
 * sentinel hide (ExpireHiddenPosts), the accrued rep is clawed back from the
 * author per tag and a fraction of the staker's locked DREAM is slashed
 * (staker_slash_bps) — both staker and author endorsed harm.
 * 
 * Stakers cannot stake on their own posts. Stakes are released after
 * unlocks_at via MsgReleasePostConviction; LockDREAM/UnlockDREAM bypass the
 * 3% transfer tax because it is internal member-balance rebalancing, not a
 * transfer.
 * @name PostConvictionStake
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.PostConvictionStake
 */
export const PostConvictionStake = {
  typeUrl: "/sparkdream.forum.v1.PostConvictionStake",
  encode(message: PostConvictionStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(24).uint64(message.postId);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.stakedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.stakedAt);
    }
    if (message.unlocksAt !== BigInt(0)) {
      writer.uint32(48).int64(message.unlocksAt);
    }
    Object.entries(message.accruedRepPerTag).forEach(([key, value]) => {
      PostConvictionStake_AccruedRepPerTagEntry.encode({
        key: key as any,
        value
      }, writer.uint32(58).fork()).ldelim();
    });
    if (message.lastAccrualAt !== BigInt(0)) {
      writer.uint32(64).int64(message.lastAccrualAt);
    }
    if (message.released === true) {
      writer.uint32(72).bool(message.released);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PostConvictionStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostConvictionStake();
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
          message.postId = reader.uint64();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.stakedAt = reader.int64();
          break;
        case 6:
          message.unlocksAt = reader.int64();
          break;
        case 7:
          const entry7 = PostConvictionStake_AccruedRepPerTagEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.accruedRepPerTag[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.lastAccrualAt = reader.int64();
          break;
        case 9:
          message.released = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PostConvictionStake>): PostConvictionStake {
    const message = createBasePostConvictionStake();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.stakedAt = object.stakedAt !== undefined && object.stakedAt !== null ? BigInt(object.stakedAt.toString()) : BigInt(0);
    message.unlocksAt = object.unlocksAt !== undefined && object.unlocksAt !== null ? BigInt(object.unlocksAt.toString()) : BigInt(0);
    message.accruedRepPerTag = Object.entries(object.accruedRepPerTag ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.lastAccrualAt = object.lastAccrualAt !== undefined && object.lastAccrualAt !== null ? BigInt(object.lastAccrualAt.toString()) : BigInt(0);
    message.released = object.released ?? false;
    return message;
  },
  fromAmino(object: PostConvictionStakeAmino): PostConvictionStake {
    const message = createBasePostConvictionStake();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.staked_at !== undefined && object.staked_at !== null) {
      message.stakedAt = BigInt(object.staked_at);
    }
    if (object.unlocks_at !== undefined && object.unlocks_at !== null) {
      message.unlocksAt = BigInt(object.unlocks_at);
    }
    message.accruedRepPerTag = Object.entries(object.accrued_rep_per_tag ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.last_accrual_at !== undefined && object.last_accrual_at !== null) {
      message.lastAccrualAt = BigInt(object.last_accrual_at);
    }
    if (object.released !== undefined && object.released !== null) {
      message.released = object.released;
    }
    return message;
  },
  toAmino(message: PostConvictionStake): PostConvictionStakeAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.staked_at = message.stakedAt !== BigInt(0) ? message.stakedAt?.toString() : undefined;
    obj.unlocks_at = message.unlocksAt !== BigInt(0) ? message.unlocksAt?.toString() : undefined;
    obj.accrued_rep_per_tag = {};
    if (message.accruedRepPerTag) {
      Object.entries(message.accruedRepPerTag).forEach(([k, v]) => {
        obj.accrued_rep_per_tag[k] = v;
      });
    }
    obj.last_accrual_at = message.lastAccrualAt !== BigInt(0) ? message.lastAccrualAt?.toString() : undefined;
    obj.released = message.released === false ? undefined : message.released;
    return obj;
  },
  fromAminoMsg(object: PostConvictionStakeAminoMsg): PostConvictionStake {
    return PostConvictionStake.fromAmino(object.value);
  },
  fromProtoMsg(message: PostConvictionStakeProtoMsg): PostConvictionStake {
    return PostConvictionStake.decode(message.value);
  },
  toProto(message: PostConvictionStake): Uint8Array {
    return PostConvictionStake.encode(message).finish();
  },
  toProtoMsg(message: PostConvictionStake): PostConvictionStakeProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.PostConvictionStake",
      value: PostConvictionStake.encode(message).finish()
    };
  }
};