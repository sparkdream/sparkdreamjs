//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
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
/** SentinelBondStatus represents the bond status of a sentinel. */
export enum SentinelBondStatus {
  SENTINEL_BOND_STATUS_UNSPECIFIED = 0,
  SENTINEL_BOND_STATUS_NORMAL = 1,
  SENTINEL_BOND_STATUS_RECOVERY = 2,
  SENTINEL_BOND_STATUS_DEMOTED = 3,
  UNRECOGNIZED = -1,
}
export const SentinelBondStatusAmino = SentinelBondStatus;
export function sentinelBondStatusFromJSON(object: any): SentinelBondStatus {
  switch (object) {
    case 0:
    case "SENTINEL_BOND_STATUS_UNSPECIFIED":
      return SentinelBondStatus.SENTINEL_BOND_STATUS_UNSPECIFIED;
    case 1:
    case "SENTINEL_BOND_STATUS_NORMAL":
      return SentinelBondStatus.SENTINEL_BOND_STATUS_NORMAL;
    case 2:
    case "SENTINEL_BOND_STATUS_RECOVERY":
      return SentinelBondStatus.SENTINEL_BOND_STATUS_RECOVERY;
    case 3:
    case "SENTINEL_BOND_STATUS_DEMOTED":
      return SentinelBondStatus.SENTINEL_BOND_STATUS_DEMOTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SentinelBondStatus.UNRECOGNIZED;
  }
}
export function sentinelBondStatusToJSON(object: SentinelBondStatus): string {
  switch (object) {
    case SentinelBondStatus.SENTINEL_BOND_STATUS_UNSPECIFIED:
      return "SENTINEL_BOND_STATUS_UNSPECIFIED";
    case SentinelBondStatus.SENTINEL_BOND_STATUS_NORMAL:
      return "SENTINEL_BOND_STATUS_NORMAL";
    case SentinelBondStatus.SENTINEL_BOND_STATUS_RECOVERY:
      return "SENTINEL_BOND_STATUS_RECOVERY";
    case SentinelBondStatus.SENTINEL_BOND_STATUS_DEMOTED:
      return "SENTINEL_BOND_STATUS_DEMOTED";
    case SentinelBondStatus.UNRECOGNIZED:
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
/** GovActionType represents the type of governance action. */
export enum GovActionType {
  GOV_ACTION_TYPE_UNSPECIFIED = 0,
  GOV_ACTION_TYPE_WARNING = 1,
  GOV_ACTION_TYPE_DEMOTION = 2,
  GOV_ACTION_TYPE_ZEROING = 3,
  GOV_ACTION_TYPE_TAG_REMOVAL = 4,
  GOV_ACTION_TYPE_FORUM_PAUSE = 5,
  GOV_ACTION_TYPE_THREAD_LOCK = 6,
  GOV_ACTION_TYPE_THREAD_MOVE = 7,
  UNRECOGNIZED = -1,
}
export const GovActionTypeAmino = GovActionType;
export function govActionTypeFromJSON(object: any): GovActionType {
  switch (object) {
    case 0:
    case "GOV_ACTION_TYPE_UNSPECIFIED":
      return GovActionType.GOV_ACTION_TYPE_UNSPECIFIED;
    case 1:
    case "GOV_ACTION_TYPE_WARNING":
      return GovActionType.GOV_ACTION_TYPE_WARNING;
    case 2:
    case "GOV_ACTION_TYPE_DEMOTION":
      return GovActionType.GOV_ACTION_TYPE_DEMOTION;
    case 3:
    case "GOV_ACTION_TYPE_ZEROING":
      return GovActionType.GOV_ACTION_TYPE_ZEROING;
    case 4:
    case "GOV_ACTION_TYPE_TAG_REMOVAL":
      return GovActionType.GOV_ACTION_TYPE_TAG_REMOVAL;
    case 5:
    case "GOV_ACTION_TYPE_FORUM_PAUSE":
      return GovActionType.GOV_ACTION_TYPE_FORUM_PAUSE;
    case 6:
    case "GOV_ACTION_TYPE_THREAD_LOCK":
      return GovActionType.GOV_ACTION_TYPE_THREAD_LOCK;
    case 7:
    case "GOV_ACTION_TYPE_THREAD_MOVE":
      return GovActionType.GOV_ACTION_TYPE_THREAD_MOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GovActionType.UNRECOGNIZED;
  }
}
export function govActionTypeToJSON(object: GovActionType): string {
  switch (object) {
    case GovActionType.GOV_ACTION_TYPE_UNSPECIFIED:
      return "GOV_ACTION_TYPE_UNSPECIFIED";
    case GovActionType.GOV_ACTION_TYPE_WARNING:
      return "GOV_ACTION_TYPE_WARNING";
    case GovActionType.GOV_ACTION_TYPE_DEMOTION:
      return "GOV_ACTION_TYPE_DEMOTION";
    case GovActionType.GOV_ACTION_TYPE_ZEROING:
      return "GOV_ACTION_TYPE_ZEROING";
    case GovActionType.GOV_ACTION_TYPE_TAG_REMOVAL:
      return "GOV_ACTION_TYPE_TAG_REMOVAL";
    case GovActionType.GOV_ACTION_TYPE_FORUM_PAUSE:
      return "GOV_ACTION_TYPE_FORUM_PAUSE";
    case GovActionType.GOV_ACTION_TYPE_THREAD_LOCK:
      return "GOV_ACTION_TYPE_THREAD_LOCK";
    case GovActionType.GOV_ACTION_TYPE_THREAD_MOVE:
      return "GOV_ACTION_TYPE_THREAD_MOVE";
    case GovActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MemberReportStatus represents the status of a member report. */
export enum MemberReportStatus {
  MEMBER_REPORT_STATUS_UNSPECIFIED = 0,
  MEMBER_REPORT_STATUS_PENDING = 1,
  MEMBER_REPORT_STATUS_ESCALATED = 2,
  MEMBER_REPORT_STATUS_RESOLVED = 3,
  MEMBER_REPORT_STATUS_META_APPEALED = 4,
  UNRECOGNIZED = -1,
}
export const MemberReportStatusAmino = MemberReportStatus;
export function memberReportStatusFromJSON(object: any): MemberReportStatus {
  switch (object) {
    case 0:
    case "MEMBER_REPORT_STATUS_UNSPECIFIED":
      return MemberReportStatus.MEMBER_REPORT_STATUS_UNSPECIFIED;
    case 1:
    case "MEMBER_REPORT_STATUS_PENDING":
      return MemberReportStatus.MEMBER_REPORT_STATUS_PENDING;
    case 2:
    case "MEMBER_REPORT_STATUS_ESCALATED":
      return MemberReportStatus.MEMBER_REPORT_STATUS_ESCALATED;
    case 3:
    case "MEMBER_REPORT_STATUS_RESOLVED":
      return MemberReportStatus.MEMBER_REPORT_STATUS_RESOLVED;
    case 4:
    case "MEMBER_REPORT_STATUS_META_APPEALED":
      return MemberReportStatus.MEMBER_REPORT_STATUS_META_APPEALED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MemberReportStatus.UNRECOGNIZED;
  }
}
export function memberReportStatusToJSON(object: MemberReportStatus): string {
  switch (object) {
    case MemberReportStatus.MEMBER_REPORT_STATUS_UNSPECIFIED:
      return "MEMBER_REPORT_STATUS_UNSPECIFIED";
    case MemberReportStatus.MEMBER_REPORT_STATUS_PENDING:
      return "MEMBER_REPORT_STATUS_PENDING";
    case MemberReportStatus.MEMBER_REPORT_STATUS_ESCALATED:
      return "MEMBER_REPORT_STATUS_ESCALATED";
    case MemberReportStatus.MEMBER_REPORT_STATUS_RESOLVED:
      return "MEMBER_REPORT_STATUS_RESOLVED";
    case MemberReportStatus.MEMBER_REPORT_STATUS_META_APPEALED:
      return "MEMBER_REPORT_STATUS_META_APPEALED";
    case MemberReportStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** GovAppealStatus represents the status of a governance appeal. */
export enum GovAppealStatus {
  GOV_APPEAL_STATUS_UNSPECIFIED = 0,
  GOV_APPEAL_STATUS_PENDING = 1,
  GOV_APPEAL_STATUS_UPHELD = 2,
  GOV_APPEAL_STATUS_OVERTURNED = 3,
  GOV_APPEAL_STATUS_TIMEOUT = 4,
  UNRECOGNIZED = -1,
}
export const GovAppealStatusAmino = GovAppealStatus;
export function govAppealStatusFromJSON(object: any): GovAppealStatus {
  switch (object) {
    case 0:
    case "GOV_APPEAL_STATUS_UNSPECIFIED":
      return GovAppealStatus.GOV_APPEAL_STATUS_UNSPECIFIED;
    case 1:
    case "GOV_APPEAL_STATUS_PENDING":
      return GovAppealStatus.GOV_APPEAL_STATUS_PENDING;
    case 2:
    case "GOV_APPEAL_STATUS_UPHELD":
      return GovAppealStatus.GOV_APPEAL_STATUS_UPHELD;
    case 3:
    case "GOV_APPEAL_STATUS_OVERTURNED":
      return GovAppealStatus.GOV_APPEAL_STATUS_OVERTURNED;
    case 4:
    case "GOV_APPEAL_STATUS_TIMEOUT":
      return GovAppealStatus.GOV_APPEAL_STATUS_TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GovAppealStatus.UNRECOGNIZED;
  }
}
export function govAppealStatusToJSON(object: GovAppealStatus): string {
  switch (object) {
    case GovAppealStatus.GOV_APPEAL_STATUS_UNSPECIFIED:
      return "GOV_APPEAL_STATUS_UNSPECIFIED";
    case GovAppealStatus.GOV_APPEAL_STATUS_PENDING:
      return "GOV_APPEAL_STATUS_PENDING";
    case GovAppealStatus.GOV_APPEAL_STATUS_UPHELD:
      return "GOV_APPEAL_STATUS_UPHELD";
    case GovAppealStatus.GOV_APPEAL_STATUS_OVERTURNED:
      return "GOV_APPEAL_STATUS_OVERTURNED";
    case GovAppealStatus.GOV_APPEAL_STATUS_TIMEOUT:
      return "GOV_APPEAL_STATUS_TIMEOUT";
    case GovAppealStatus.UNRECOGNIZED:
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
}
export interface PinnedReplyRecordAminoMsg {
  type: "/sparkdream.forum.v1.PinnedReplyRecord";
  value: PinnedReplyRecordAmino;
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
    initiativeId: BigInt(0)
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