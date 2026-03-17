//@ts-nocheck
import { ContentType } from "../../common/v1/content_type";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** PostStatus defines the lifecycle status of a post. */
export enum PostStatus {
  POST_STATUS_UNSPECIFIED = 0,
  /** POST_STATUS_ACTIVE - Visible and functional */
  POST_STATUS_ACTIVE = 1,
  /** POST_STATUS_DELETED - Tombstoned — title/body cleared, replies/reactions preserved */
  POST_STATUS_DELETED = 2,
  /** POST_STATUS_HIDDEN - Soft-deleted — title/body preserved in state, excluded from list queries */
  POST_STATUS_HIDDEN = 3,
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
    case "POST_STATUS_DELETED":
      return PostStatus.POST_STATUS_DELETED;
    case 3:
    case "POST_STATUS_HIDDEN":
      return PostStatus.POST_STATUS_HIDDEN;
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
    case PostStatus.POST_STATUS_DELETED:
      return "POST_STATUS_DELETED";
    case PostStatus.POST_STATUS_HIDDEN:
      return "POST_STATUS_HIDDEN";
    case PostStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ReplyStatus defines the lifecycle status of a reply. */
export enum ReplyStatus {
  REPLY_STATUS_UNSPECIFIED = 0,
  /** REPLY_STATUS_ACTIVE - Visible to all */
  REPLY_STATUS_ACTIVE = 1,
  /** REPLY_STATUS_DELETED - Tombstoned — body cleared, structural metadata preserved */
  REPLY_STATUS_DELETED = 2,
  /** REPLY_STATUS_HIDDEN - Soft-deleted by post author; excluded from all query results */
  REPLY_STATUS_HIDDEN = 3,
  UNRECOGNIZED = -1,
}
export const ReplyStatusAmino = ReplyStatus;
export function replyStatusFromJSON(object: any): ReplyStatus {
  switch (object) {
    case 0:
    case "REPLY_STATUS_UNSPECIFIED":
      return ReplyStatus.REPLY_STATUS_UNSPECIFIED;
    case 1:
    case "REPLY_STATUS_ACTIVE":
      return ReplyStatus.REPLY_STATUS_ACTIVE;
    case 2:
    case "REPLY_STATUS_DELETED":
      return ReplyStatus.REPLY_STATUS_DELETED;
    case 3:
    case "REPLY_STATUS_HIDDEN":
      return ReplyStatus.REPLY_STATUS_HIDDEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReplyStatus.UNRECOGNIZED;
  }
}
export function replyStatusToJSON(object: ReplyStatus): string {
  switch (object) {
    case ReplyStatus.REPLY_STATUS_UNSPECIFIED:
      return "REPLY_STATUS_UNSPECIFIED";
    case ReplyStatus.REPLY_STATUS_ACTIVE:
      return "REPLY_STATUS_ACTIVE";
    case ReplyStatus.REPLY_STATUS_DELETED:
      return "REPLY_STATUS_DELETED";
    case ReplyStatus.REPLY_STATUS_HIDDEN:
      return "REPLY_STATUS_HIDDEN";
    case ReplyStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ReactionType defines the fixed set of reactions. */
export enum ReactionType {
  REACTION_TYPE_UNSPECIFIED = 0,
  /** REACTION_TYPE_LIKE - General positive sentiment */
  REACTION_TYPE_LIKE = 1,
  /** REACTION_TYPE_INSIGHTFUL - Adds intellectual value */
  REACTION_TYPE_INSIGHTFUL = 2,
  /** REACTION_TYPE_DISAGREE - Respectful disagreement */
  REACTION_TYPE_DISAGREE = 3,
  /** REACTION_TYPE_FUNNY - Humor appreciation */
  REACTION_TYPE_FUNNY = 4,
  UNRECOGNIZED = -1,
}
export const ReactionTypeAmino = ReactionType;
export function reactionTypeFromJSON(object: any): ReactionType {
  switch (object) {
    case 0:
    case "REACTION_TYPE_UNSPECIFIED":
      return ReactionType.REACTION_TYPE_UNSPECIFIED;
    case 1:
    case "REACTION_TYPE_LIKE":
      return ReactionType.REACTION_TYPE_LIKE;
    case 2:
    case "REACTION_TYPE_INSIGHTFUL":
      return ReactionType.REACTION_TYPE_INSIGHTFUL;
    case 3:
    case "REACTION_TYPE_DISAGREE":
      return ReactionType.REACTION_TYPE_DISAGREE;
    case 4:
    case "REACTION_TYPE_FUNNY":
      return ReactionType.REACTION_TYPE_FUNNY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReactionType.UNRECOGNIZED;
  }
}
export function reactionTypeToJSON(object: ReactionType): string {
  switch (object) {
    case ReactionType.REACTION_TYPE_UNSPECIFIED:
      return "REACTION_TYPE_UNSPECIFIED";
    case ReactionType.REACTION_TYPE_LIKE:
      return "REACTION_TYPE_LIKE";
    case ReactionType.REACTION_TYPE_INSIGHTFUL:
      return "REACTION_TYPE_INSIGHTFUL";
    case ReactionType.REACTION_TYPE_DISAGREE:
      return "REACTION_TYPE_DISAGREE";
    case ReactionType.REACTION_TYPE_FUNNY:
      return "REACTION_TYPE_FUNNY";
    case ReactionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Reply is a threaded reply to a blog post.
 * @name Reply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.Reply
 */
export interface Reply {
  /**
   * Global auto-incremented ID
   */
  id: bigint;
  /**
   * Parent blog post
   */
  postId: bigint;
  /**
   * 0 = top-level reply, >0 = nested under another reply
   */
  parentReplyId: bigint;
  /**
   * Reply author
   */
  creator: string;
  /**
   * Reply content
   */
  body: string;
  /**
   * Content encoding hint
   */
  contentType: ContentType;
  /**
   * Unix timestamp of creation
   */
  createdAt: bigint;
  /**
   * Whether reply has been edited
   */
  edited: boolean;
  /**
   * Unix timestamp of last edit (0 if never)
   */
  editedAt: bigint;
  /**
   * Nesting level (0 = top-level)
   */
  depth: number;
  /**
   * ACTIVE, HIDDEN, or DELETED
   */
  status: ReplyStatus;
  /**
   * Address of post author who hid it
   */
  hiddenBy: string;
  /**
   * Unix timestamp when hidden
   */
  hiddenAt: bigint;
  /**
   * Unix timestamp when reply auto-tombstones (0 = permanent)
   */
  expiresAt: bigint;
  /**
   * Address of member who pinned (empty if not pinned)
   */
  pinnedBy: string;
  /**
   * Unix timestamp when pinned (0 if not pinned)
   */
  pinnedAt: bigint;
  /**
   * Highest byte count for which storage fees have been paid
   */
  feeBytesHighWater: bigint;
  /**
   * True if anonymous reply has entered conviction-sustained state
   */
  convictionSustained: boolean;
}
export interface ReplyProtoMsg {
  typeUrl: "/sparkdream.blog.v1.Reply";
  value: Uint8Array;
}
/**
 * Reply is a threaded reply to a blog post.
 * @name ReplyAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.Reply
 */
export interface ReplyAmino {
  /**
   * Global auto-incremented ID
   */
  id?: string;
  /**
   * Parent blog post
   */
  post_id?: string;
  /**
   * 0 = top-level reply, >0 = nested under another reply
   */
  parent_reply_id?: string;
  /**
   * Reply author
   */
  creator?: string;
  /**
   * Reply content
   */
  body?: string;
  /**
   * Content encoding hint
   */
  content_type?: ContentType;
  /**
   * Unix timestamp of creation
   */
  created_at?: string;
  /**
   * Whether reply has been edited
   */
  edited?: boolean;
  /**
   * Unix timestamp of last edit (0 if never)
   */
  edited_at?: string;
  /**
   * Nesting level (0 = top-level)
   */
  depth?: number;
  /**
   * ACTIVE, HIDDEN, or DELETED
   */
  status?: ReplyStatus;
  /**
   * Address of post author who hid it
   */
  hidden_by?: string;
  /**
   * Unix timestamp when hidden
   */
  hidden_at?: string;
  /**
   * Unix timestamp when reply auto-tombstones (0 = permanent)
   */
  expires_at?: string;
  /**
   * Address of member who pinned (empty if not pinned)
   */
  pinned_by?: string;
  /**
   * Unix timestamp when pinned (0 if not pinned)
   */
  pinned_at?: string;
  /**
   * Highest byte count for which storage fees have been paid
   */
  fee_bytes_high_water?: string;
  /**
   * True if anonymous reply has entered conviction-sustained state
   */
  conviction_sustained?: boolean;
}
export interface ReplyAminoMsg {
  type: "/sparkdream.blog.v1.Reply";
  value: ReplyAmino;
}
/**
 * Reaction is an individual reaction record. One reaction per user per target.
 * @name Reaction
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.Reaction
 */
export interface Reaction {
  /**
   * Reactor address (must be active member)
   */
  creator: string;
  /**
   * Selected reaction
   */
  reactionType: ReactionType;
  /**
   * Target post ID
   */
  postId: bigint;
  /**
   * Target reply ID (0 = reacting to the post itself)
   */
  replyId: bigint;
}
export interface ReactionProtoMsg {
  typeUrl: "/sparkdream.blog.v1.Reaction";
  value: Uint8Array;
}
/**
 * Reaction is an individual reaction record. One reaction per user per target.
 * @name ReactionAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.Reaction
 */
export interface ReactionAmino {
  /**
   * Reactor address (must be active member)
   */
  creator?: string;
  /**
   * Selected reaction
   */
  reaction_type?: ReactionType;
  /**
   * Target post ID
   */
  post_id?: string;
  /**
   * Target reply ID (0 = reacting to the post itself)
   */
  reply_id?: string;
}
export interface ReactionAminoMsg {
  type: "/sparkdream.blog.v1.Reaction";
  value: ReactionAmino;
}
/**
 * ReactionCounts holds denormalized aggregate counts per target.
 * @name ReactionCounts
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.ReactionCounts
 */
export interface ReactionCounts {
  likeCount: bigint;
  insightfulCount: bigint;
  disagreeCount: bigint;
  funnyCount: bigint;
}
export interface ReactionCountsProtoMsg {
  typeUrl: "/sparkdream.blog.v1.ReactionCounts";
  value: Uint8Array;
}
/**
 * ReactionCounts holds denormalized aggregate counts per target.
 * @name ReactionCountsAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.ReactionCounts
 */
export interface ReactionCountsAmino {
  like_count?: string;
  insightful_count?: string;
  disagree_count?: string;
  funny_count?: string;
}
export interface ReactionCountsAminoMsg {
  type: "/sparkdream.blog.v1.ReactionCounts";
  value: ReactionCountsAmino;
}
/**
 * RateLimitEntry is an internal storage type for per-address daily action counters.
 * @name RateLimitEntry
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.RateLimitEntry
 */
export interface RateLimitEntry {
  /**
   * Number of actions taken today
   */
  count: number;
  /**
   * Day identifier: block_time / 86400
   */
  day: bigint;
}
export interface RateLimitEntryProtoMsg {
  typeUrl: "/sparkdream.blog.v1.RateLimitEntry";
  value: Uint8Array;
}
/**
 * RateLimitEntry is an internal storage type for per-address daily action counters.
 * @name RateLimitEntryAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.RateLimitEntry
 */
export interface RateLimitEntryAmino {
  /**
   * Number of actions taken today
   */
  count?: number;
  /**
   * Day identifier: block_time / 86400
   */
  day?: string;
}
export interface RateLimitEntryAminoMsg {
  type: "/sparkdream.blog.v1.RateLimitEntry";
  value: RateLimitEntryAmino;
}
/**
 * GenesisReactionCounts wraps reaction counts with their target key for genesis export.
 * @name GenesisReactionCounts
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.GenesisReactionCounts
 */
export interface GenesisReactionCounts {
  postId: bigint;
  replyId: bigint;
  counts?: ReactionCounts;
}
export interface GenesisReactionCountsProtoMsg {
  typeUrl: "/sparkdream.blog.v1.GenesisReactionCounts";
  value: Uint8Array;
}
/**
 * GenesisReactionCounts wraps reaction counts with their target key for genesis export.
 * @name GenesisReactionCountsAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.GenesisReactionCounts
 */
export interface GenesisReactionCountsAmino {
  post_id?: string;
  reply_id?: string;
  counts?: ReactionCountsAmino;
}
export interface GenesisReactionCountsAminoMsg {
  type: "/sparkdream.blog.v1.GenesisReactionCounts";
  value: GenesisReactionCountsAmino;
}
function createBaseReply(): Reply {
  return {
    id: BigInt(0),
    postId: BigInt(0),
    parentReplyId: BigInt(0),
    creator: "",
    body: "",
    contentType: 0,
    createdAt: BigInt(0),
    edited: false,
    editedAt: BigInt(0),
    depth: 0,
    status: 0,
    hiddenBy: "",
    hiddenAt: BigInt(0),
    expiresAt: BigInt(0),
    pinnedBy: "",
    pinnedAt: BigInt(0),
    feeBytesHighWater: BigInt(0),
    convictionSustained: false
  };
}
/**
 * Reply is a threaded reply to a blog post.
 * @name Reply
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.Reply
 */
export const Reply = {
  typeUrl: "/sparkdream.blog.v1.Reply",
  encode(message: Reply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.parentReplyId !== BigInt(0)) {
      writer.uint32(24).uint64(message.parentReplyId);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.body !== "") {
      writer.uint32(42).string(message.body);
    }
    if (message.contentType !== 0) {
      writer.uint32(48).int32(message.contentType);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(56).int64(message.createdAt);
    }
    if (message.edited === true) {
      writer.uint32(64).bool(message.edited);
    }
    if (message.editedAt !== BigInt(0)) {
      writer.uint32(72).int64(message.editedAt);
    }
    if (message.depth !== 0) {
      writer.uint32(80).uint32(message.depth);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.hiddenBy !== "") {
      writer.uint32(98).string(message.hiddenBy);
    }
    if (message.hiddenAt !== BigInt(0)) {
      writer.uint32(104).int64(message.hiddenAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(112).int64(message.expiresAt);
    }
    if (message.pinnedBy !== "") {
      writer.uint32(122).string(message.pinnedBy);
    }
    if (message.pinnedAt !== BigInt(0)) {
      writer.uint32(128).int64(message.pinnedAt);
    }
    if (message.feeBytesHighWater !== BigInt(0)) {
      writer.uint32(136).uint64(message.feeBytesHighWater);
    }
    if (message.convictionSustained === true) {
      writer.uint32(144).bool(message.convictionSustained);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Reply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.postId = reader.uint64();
          break;
        case 3:
          message.parentReplyId = reader.uint64();
          break;
        case 4:
          message.creator = reader.string();
          break;
        case 5:
          message.body = reader.string();
          break;
        case 6:
          message.contentType = reader.int32() as any;
          break;
        case 7:
          message.createdAt = reader.int64();
          break;
        case 8:
          message.edited = reader.bool();
          break;
        case 9:
          message.editedAt = reader.int64();
          break;
        case 10:
          message.depth = reader.uint32();
          break;
        case 11:
          message.status = reader.int32() as any;
          break;
        case 12:
          message.hiddenBy = reader.string();
          break;
        case 13:
          message.hiddenAt = reader.int64();
          break;
        case 14:
          message.expiresAt = reader.int64();
          break;
        case 15:
          message.pinnedBy = reader.string();
          break;
        case 16:
          message.pinnedAt = reader.int64();
          break;
        case 17:
          message.feeBytesHighWater = reader.uint64();
          break;
        case 18:
          message.convictionSustained = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Reply>): Reply {
    const message = createBaseReply();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.parentReplyId = object.parentReplyId !== undefined && object.parentReplyId !== null ? BigInt(object.parentReplyId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.body = object.body ?? "";
    message.contentType = object.contentType ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.edited = object.edited ?? false;
    message.editedAt = object.editedAt !== undefined && object.editedAt !== null ? BigInt(object.editedAt.toString()) : BigInt(0);
    message.depth = object.depth ?? 0;
    message.status = object.status ?? 0;
    message.hiddenBy = object.hiddenBy ?? "";
    message.hiddenAt = object.hiddenAt !== undefined && object.hiddenAt !== null ? BigInt(object.hiddenAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.pinnedBy = object.pinnedBy ?? "";
    message.pinnedAt = object.pinnedAt !== undefined && object.pinnedAt !== null ? BigInt(object.pinnedAt.toString()) : BigInt(0);
    message.feeBytesHighWater = object.feeBytesHighWater !== undefined && object.feeBytesHighWater !== null ? BigInt(object.feeBytesHighWater.toString()) : BigInt(0);
    message.convictionSustained = object.convictionSustained ?? false;
    return message;
  },
  fromAmino(object: ReplyAmino): Reply {
    const message = createBaseReply();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.parent_reply_id !== undefined && object.parent_reply_id !== null) {
      message.parentReplyId = BigInt(object.parent_reply_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.edited !== undefined && object.edited !== null) {
      message.edited = object.edited;
    }
    if (object.edited_at !== undefined && object.edited_at !== null) {
      message.editedAt = BigInt(object.edited_at);
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.hidden_by !== undefined && object.hidden_by !== null) {
      message.hiddenBy = object.hidden_by;
    }
    if (object.hidden_at !== undefined && object.hidden_at !== null) {
      message.hiddenAt = BigInt(object.hidden_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.pinned_by !== undefined && object.pinned_by !== null) {
      message.pinnedBy = object.pinned_by;
    }
    if (object.pinned_at !== undefined && object.pinned_at !== null) {
      message.pinnedAt = BigInt(object.pinned_at);
    }
    if (object.fee_bytes_high_water !== undefined && object.fee_bytes_high_water !== null) {
      message.feeBytesHighWater = BigInt(object.fee_bytes_high_water);
    }
    if (object.conviction_sustained !== undefined && object.conviction_sustained !== null) {
      message.convictionSustained = object.conviction_sustained;
    }
    return message;
  },
  toAmino(message: Reply): ReplyAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.parent_reply_id = message.parentReplyId !== BigInt(0) ? message.parentReplyId?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.body = message.body === "" ? undefined : message.body;
    obj.content_type = message.contentType === 0 ? undefined : message.contentType;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.edited = message.edited === false ? undefined : message.edited;
    obj.edited_at = message.editedAt !== BigInt(0) ? message.editedAt?.toString() : undefined;
    obj.depth = message.depth === 0 ? undefined : message.depth;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.hidden_by = message.hiddenBy === "" ? undefined : message.hiddenBy;
    obj.hidden_at = message.hiddenAt !== BigInt(0) ? message.hiddenAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.pinned_by = message.pinnedBy === "" ? undefined : message.pinnedBy;
    obj.pinned_at = message.pinnedAt !== BigInt(0) ? message.pinnedAt?.toString() : undefined;
    obj.fee_bytes_high_water = message.feeBytesHighWater !== BigInt(0) ? message.feeBytesHighWater?.toString() : undefined;
    obj.conviction_sustained = message.convictionSustained === false ? undefined : message.convictionSustained;
    return obj;
  },
  fromAminoMsg(object: ReplyAminoMsg): Reply {
    return Reply.fromAmino(object.value);
  },
  fromProtoMsg(message: ReplyProtoMsg): Reply {
    return Reply.decode(message.value);
  },
  toProto(message: Reply): Uint8Array {
    return Reply.encode(message).finish();
  },
  toProtoMsg(message: Reply): ReplyProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.Reply",
      value: Reply.encode(message).finish()
    };
  }
};
function createBaseReaction(): Reaction {
  return {
    creator: "",
    reactionType: 0,
    postId: BigInt(0),
    replyId: BigInt(0)
  };
}
/**
 * Reaction is an individual reaction record. One reaction per user per target.
 * @name Reaction
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.Reaction
 */
export const Reaction = {
  typeUrl: "/sparkdream.blog.v1.Reaction",
  encode(message: Reaction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.reactionType !== 0) {
      writer.uint32(16).int32(message.reactionType);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(24).uint64(message.postId);
    }
    if (message.replyId !== BigInt(0)) {
      writer.uint32(32).uint64(message.replyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Reaction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.reactionType = reader.int32() as any;
          break;
        case 3:
          message.postId = reader.uint64();
          break;
        case 4:
          message.replyId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Reaction>): Reaction {
    const message = createBaseReaction();
    message.creator = object.creator ?? "";
    message.reactionType = object.reactionType ?? 0;
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.replyId = object.replyId !== undefined && object.replyId !== null ? BigInt(object.replyId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ReactionAmino): Reaction {
    const message = createBaseReaction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.reaction_type !== undefined && object.reaction_type !== null) {
      message.reactionType = object.reaction_type;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.reply_id !== undefined && object.reply_id !== null) {
      message.replyId = BigInt(object.reply_id);
    }
    return message;
  },
  toAmino(message: Reaction): ReactionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.reaction_type = message.reactionType === 0 ? undefined : message.reactionType;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.reply_id = message.replyId !== BigInt(0) ? message.replyId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ReactionAminoMsg): Reaction {
    return Reaction.fromAmino(object.value);
  },
  fromProtoMsg(message: ReactionProtoMsg): Reaction {
    return Reaction.decode(message.value);
  },
  toProto(message: Reaction): Uint8Array {
    return Reaction.encode(message).finish();
  },
  toProtoMsg(message: Reaction): ReactionProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.Reaction",
      value: Reaction.encode(message).finish()
    };
  }
};
function createBaseReactionCounts(): ReactionCounts {
  return {
    likeCount: BigInt(0),
    insightfulCount: BigInt(0),
    disagreeCount: BigInt(0),
    funnyCount: BigInt(0)
  };
}
/**
 * ReactionCounts holds denormalized aggregate counts per target.
 * @name ReactionCounts
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.ReactionCounts
 */
export const ReactionCounts = {
  typeUrl: "/sparkdream.blog.v1.ReactionCounts",
  encode(message: ReactionCounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.likeCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.likeCount);
    }
    if (message.insightfulCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.insightfulCount);
    }
    if (message.disagreeCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.disagreeCount);
    }
    if (message.funnyCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.funnyCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReactionCounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReactionCounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.likeCount = reader.uint64();
          break;
        case 2:
          message.insightfulCount = reader.uint64();
          break;
        case 3:
          message.disagreeCount = reader.uint64();
          break;
        case 4:
          message.funnyCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReactionCounts>): ReactionCounts {
    const message = createBaseReactionCounts();
    message.likeCount = object.likeCount !== undefined && object.likeCount !== null ? BigInt(object.likeCount.toString()) : BigInt(0);
    message.insightfulCount = object.insightfulCount !== undefined && object.insightfulCount !== null ? BigInt(object.insightfulCount.toString()) : BigInt(0);
    message.disagreeCount = object.disagreeCount !== undefined && object.disagreeCount !== null ? BigInt(object.disagreeCount.toString()) : BigInt(0);
    message.funnyCount = object.funnyCount !== undefined && object.funnyCount !== null ? BigInt(object.funnyCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ReactionCountsAmino): ReactionCounts {
    const message = createBaseReactionCounts();
    if (object.like_count !== undefined && object.like_count !== null) {
      message.likeCount = BigInt(object.like_count);
    }
    if (object.insightful_count !== undefined && object.insightful_count !== null) {
      message.insightfulCount = BigInt(object.insightful_count);
    }
    if (object.disagree_count !== undefined && object.disagree_count !== null) {
      message.disagreeCount = BigInt(object.disagree_count);
    }
    if (object.funny_count !== undefined && object.funny_count !== null) {
      message.funnyCount = BigInt(object.funny_count);
    }
    return message;
  },
  toAmino(message: ReactionCounts): ReactionCountsAmino {
    const obj: any = {};
    obj.like_count = message.likeCount !== BigInt(0) ? message.likeCount?.toString() : undefined;
    obj.insightful_count = message.insightfulCount !== BigInt(0) ? message.insightfulCount?.toString() : undefined;
    obj.disagree_count = message.disagreeCount !== BigInt(0) ? message.disagreeCount?.toString() : undefined;
    obj.funny_count = message.funnyCount !== BigInt(0) ? message.funnyCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ReactionCountsAminoMsg): ReactionCounts {
    return ReactionCounts.fromAmino(object.value);
  },
  fromProtoMsg(message: ReactionCountsProtoMsg): ReactionCounts {
    return ReactionCounts.decode(message.value);
  },
  toProto(message: ReactionCounts): Uint8Array {
    return ReactionCounts.encode(message).finish();
  },
  toProtoMsg(message: ReactionCounts): ReactionCountsProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.ReactionCounts",
      value: ReactionCounts.encode(message).finish()
    };
  }
};
function createBaseRateLimitEntry(): RateLimitEntry {
  return {
    count: 0,
    day: BigInt(0)
  };
}
/**
 * RateLimitEntry is an internal storage type for per-address daily action counters.
 * @name RateLimitEntry
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.RateLimitEntry
 */
export const RateLimitEntry = {
  typeUrl: "/sparkdream.blog.v1.RateLimitEntry",
  encode(message: RateLimitEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.count !== 0) {
      writer.uint32(8).uint32(message.count);
    }
    if (message.day !== BigInt(0)) {
      writer.uint32(16).uint64(message.day);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RateLimitEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRateLimitEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint32();
          break;
        case 2:
          message.day = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RateLimitEntry>): RateLimitEntry {
    const message = createBaseRateLimitEntry();
    message.count = object.count ?? 0;
    message.day = object.day !== undefined && object.day !== null ? BigInt(object.day.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RateLimitEntryAmino): RateLimitEntry {
    const message = createBaseRateLimitEntry();
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    if (object.day !== undefined && object.day !== null) {
      message.day = BigInt(object.day);
    }
    return message;
  },
  toAmino(message: RateLimitEntry): RateLimitEntryAmino {
    const obj: any = {};
    obj.count = message.count === 0 ? undefined : message.count;
    obj.day = message.day !== BigInt(0) ? message.day?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RateLimitEntryAminoMsg): RateLimitEntry {
    return RateLimitEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: RateLimitEntryProtoMsg): RateLimitEntry {
    return RateLimitEntry.decode(message.value);
  },
  toProto(message: RateLimitEntry): Uint8Array {
    return RateLimitEntry.encode(message).finish();
  },
  toProtoMsg(message: RateLimitEntry): RateLimitEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.RateLimitEntry",
      value: RateLimitEntry.encode(message).finish()
    };
  }
};
function createBaseGenesisReactionCounts(): GenesisReactionCounts {
  return {
    postId: BigInt(0),
    replyId: BigInt(0),
    counts: undefined
  };
}
/**
 * GenesisReactionCounts wraps reaction counts with their target key for genesis export.
 * @name GenesisReactionCounts
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.GenesisReactionCounts
 */
export const GenesisReactionCounts = {
  typeUrl: "/sparkdream.blog.v1.GenesisReactionCounts",
  encode(message: GenesisReactionCounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.replyId !== BigInt(0)) {
      writer.uint32(16).uint64(message.replyId);
    }
    if (message.counts !== undefined) {
      ReactionCounts.encode(message.counts, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisReactionCounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisReactionCounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.replyId = reader.uint64();
          break;
        case 3:
          message.counts = ReactionCounts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisReactionCounts>): GenesisReactionCounts {
    const message = createBaseGenesisReactionCounts();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.replyId = object.replyId !== undefined && object.replyId !== null ? BigInt(object.replyId.toString()) : BigInt(0);
    message.counts = object.counts !== undefined && object.counts !== null ? ReactionCounts.fromPartial(object.counts) : undefined;
    return message;
  },
  fromAmino(object: GenesisReactionCountsAmino): GenesisReactionCounts {
    const message = createBaseGenesisReactionCounts();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.reply_id !== undefined && object.reply_id !== null) {
      message.replyId = BigInt(object.reply_id);
    }
    if (object.counts !== undefined && object.counts !== null) {
      message.counts = ReactionCounts.fromAmino(object.counts);
    }
    return message;
  },
  toAmino(message: GenesisReactionCounts): GenesisReactionCountsAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.reply_id = message.replyId !== BigInt(0) ? message.replyId?.toString() : undefined;
    obj.counts = message.counts ? ReactionCounts.toAmino(message.counts) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisReactionCountsAminoMsg): GenesisReactionCounts {
    return GenesisReactionCounts.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisReactionCountsProtoMsg): GenesisReactionCounts {
    return GenesisReactionCounts.decode(message.value);
  },
  toProto(message: GenesisReactionCounts): Uint8Array {
    return GenesisReactionCounts.encode(message).finish();
  },
  toProtoMsg(message: GenesisReactionCounts): GenesisReactionCountsProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.GenesisReactionCounts",
      value: GenesisReactionCounts.encode(message).finish()
    };
  }
};