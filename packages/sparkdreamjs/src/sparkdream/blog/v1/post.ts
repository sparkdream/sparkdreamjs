//@ts-nocheck
import { ContentType } from "../../common/v1/content_type";
import { PostStatus } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Post defines the Post message.
 * @name Post
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.Post
 */
export interface Post {
  /**
   * Post title
   */
  title: string;
  /**
   * Post content
   */
  body: string;
  /**
   * Creator's bech32 address
   */
  creator: string;
  /**
   * Auto-incremented unique identifier
   */
  id: bigint;
  /**
   * Content encoding hint
   */
  contentType: ContentType;
  /**
   * Whether replies are accepted (default: true)
   */
  repliesEnabled: boolean;
  /**
   * Denormalized reply count (active replies only)
   */
  replyCount: bigint;
  /**
   * Minimum trust level to reply (default: 0)
   */
  minReplyTrustLevel: number;
  /**
   * Unix timestamp of creation
   */
  createdAt: bigint;
  /**
   * Unix timestamp of last update (0 if never)
   */
  updatedAt: bigint;
  /**
   * ACTIVE, HIDDEN, or DELETED
   */
  status: PostStatus;
  /**
   * Address that hid the post (empty if not hidden)
   */
  hiddenBy: string;
  /**
   * Unix timestamp when hidden (0 if not hidden)
   */
  hiddenAt: bigint;
  /**
   * Unix timestamp when post auto-tombstones (0 = permanent)
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
   * Whether post content has been edited (via UpdatePost)
   */
  edited: boolean;
  /**
   * Unix timestamp of last content edit (0 if never)
   */
  editedAt: bigint;
  /**
   * x/rep initiative referenced by this post (0 = none, immutable)
   */
  initiativeId: bigint;
  /**
   * True if anonymous content has entered conviction-sustained state (TTL extended by community conviction)
   */
  convictionSustained: boolean;
}
export interface PostProtoMsg {
  typeUrl: "/sparkdream.blog.v1.Post";
  value: Uint8Array;
}
/**
 * Post defines the Post message.
 * @name PostAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.Post
 */
export interface PostAmino {
  /**
   * Post title
   */
  title?: string;
  /**
   * Post content
   */
  body?: string;
  /**
   * Creator's bech32 address
   */
  creator?: string;
  /**
   * Auto-incremented unique identifier
   */
  id?: string;
  /**
   * Content encoding hint
   */
  content_type?: ContentType;
  /**
   * Whether replies are accepted (default: true)
   */
  replies_enabled?: boolean;
  /**
   * Denormalized reply count (active replies only)
   */
  reply_count?: string;
  /**
   * Minimum trust level to reply (default: 0)
   */
  min_reply_trust_level?: number;
  /**
   * Unix timestamp of creation
   */
  created_at?: string;
  /**
   * Unix timestamp of last update (0 if never)
   */
  updated_at?: string;
  /**
   * ACTIVE, HIDDEN, or DELETED
   */
  status?: PostStatus;
  /**
   * Address that hid the post (empty if not hidden)
   */
  hidden_by?: string;
  /**
   * Unix timestamp when hidden (0 if not hidden)
   */
  hidden_at?: string;
  /**
   * Unix timestamp when post auto-tombstones (0 = permanent)
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
   * Whether post content has been edited (via UpdatePost)
   */
  edited?: boolean;
  /**
   * Unix timestamp of last content edit (0 if never)
   */
  edited_at?: string;
  /**
   * x/rep initiative referenced by this post (0 = none, immutable)
   */
  initiative_id?: string;
  /**
   * True if anonymous content has entered conviction-sustained state (TTL extended by community conviction)
   */
  conviction_sustained?: boolean;
}
export interface PostAminoMsg {
  type: "/sparkdream.blog.v1.Post";
  value: PostAmino;
}
function createBasePost(): Post {
  return {
    title: "",
    body: "",
    creator: "",
    id: BigInt(0),
    contentType: 0,
    repliesEnabled: false,
    replyCount: BigInt(0),
    minReplyTrustLevel: 0,
    createdAt: BigInt(0),
    updatedAt: BigInt(0),
    status: 0,
    hiddenBy: "",
    hiddenAt: BigInt(0),
    expiresAt: BigInt(0),
    pinnedBy: "",
    pinnedAt: BigInt(0),
    feeBytesHighWater: BigInt(0),
    edited: false,
    editedAt: BigInt(0),
    initiativeId: BigInt(0),
    convictionSustained: false
  };
}
/**
 * Post defines the Post message.
 * @name Post
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.Post
 */
export const Post = {
  typeUrl: "/sparkdream.blog.v1.Post",
  encode(message: Post, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    if (message.contentType !== 0) {
      writer.uint32(40).int32(message.contentType);
    }
    if (message.repliesEnabled === true) {
      writer.uint32(48).bool(message.repliesEnabled);
    }
    if (message.replyCount !== BigInt(0)) {
      writer.uint32(56).uint64(message.replyCount);
    }
    if (message.minReplyTrustLevel !== 0) {
      writer.uint32(64).int32(message.minReplyTrustLevel);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(72).int64(message.createdAt);
    }
    if (message.updatedAt !== BigInt(0)) {
      writer.uint32(80).int64(message.updatedAt);
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
    if (message.edited === true) {
      writer.uint32(144).bool(message.edited);
    }
    if (message.editedAt !== BigInt(0)) {
      writer.uint32(152).int64(message.editedAt);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(160).uint64(message.initiativeId);
    }
    if (message.convictionSustained === true) {
      writer.uint32(168).bool(message.convictionSustained);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Post {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.id = reader.uint64();
          break;
        case 5:
          message.contentType = reader.int32() as any;
          break;
        case 6:
          message.repliesEnabled = reader.bool();
          break;
        case 7:
          message.replyCount = reader.uint64();
          break;
        case 8:
          message.minReplyTrustLevel = reader.int32();
          break;
        case 9:
          message.createdAt = reader.int64();
          break;
        case 10:
          message.updatedAt = reader.int64();
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
          message.edited = reader.bool();
          break;
        case 19:
          message.editedAt = reader.int64();
          break;
        case 20:
          message.initiativeId = reader.uint64();
          break;
        case 21:
          message.convictionSustained = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Post>): Post {
    const message = createBasePost();
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.contentType = object.contentType ?? 0;
    message.repliesEnabled = object.repliesEnabled ?? false;
    message.replyCount = object.replyCount !== undefined && object.replyCount !== null ? BigInt(object.replyCount.toString()) : BigInt(0);
    message.minReplyTrustLevel = object.minReplyTrustLevel ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.hiddenBy = object.hiddenBy ?? "";
    message.hiddenAt = object.hiddenAt !== undefined && object.hiddenAt !== null ? BigInt(object.hiddenAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.pinnedBy = object.pinnedBy ?? "";
    message.pinnedAt = object.pinnedAt !== undefined && object.pinnedAt !== null ? BigInt(object.pinnedAt.toString()) : BigInt(0);
    message.feeBytesHighWater = object.feeBytesHighWater !== undefined && object.feeBytesHighWater !== null ? BigInt(object.feeBytesHighWater.toString()) : BigInt(0);
    message.edited = object.edited ?? false;
    message.editedAt = object.editedAt !== undefined && object.editedAt !== null ? BigInt(object.editedAt.toString()) : BigInt(0);
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.convictionSustained = object.convictionSustained ?? false;
    return message;
  },
  fromAmino(object: PostAmino): Post {
    const message = createBasePost();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.replies_enabled !== undefined && object.replies_enabled !== null) {
      message.repliesEnabled = object.replies_enabled;
    }
    if (object.reply_count !== undefined && object.reply_count !== null) {
      message.replyCount = BigInt(object.reply_count);
    }
    if (object.min_reply_trust_level !== undefined && object.min_reply_trust_level !== null) {
      message.minReplyTrustLevel = object.min_reply_trust_level;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.updated_at !== undefined && object.updated_at !== null) {
      message.updatedAt = BigInt(object.updated_at);
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
    if (object.edited !== undefined && object.edited !== null) {
      message.edited = object.edited;
    }
    if (object.edited_at !== undefined && object.edited_at !== null) {
      message.editedAt = BigInt(object.edited_at);
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.conviction_sustained !== undefined && object.conviction_sustained !== null) {
      message.convictionSustained = object.conviction_sustained;
    }
    return message;
  },
  toAmino(message: Post): PostAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.body = message.body === "" ? undefined : message.body;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.content_type = message.contentType === 0 ? undefined : message.contentType;
    obj.replies_enabled = message.repliesEnabled === false ? undefined : message.repliesEnabled;
    obj.reply_count = message.replyCount !== BigInt(0) ? message.replyCount?.toString() : undefined;
    obj.min_reply_trust_level = message.minReplyTrustLevel === 0 ? undefined : message.minReplyTrustLevel;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.updated_at = message.updatedAt !== BigInt(0) ? message.updatedAt?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.hidden_by = message.hiddenBy === "" ? undefined : message.hiddenBy;
    obj.hidden_at = message.hiddenAt !== BigInt(0) ? message.hiddenAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.pinned_by = message.pinnedBy === "" ? undefined : message.pinnedBy;
    obj.pinned_at = message.pinnedAt !== BigInt(0) ? message.pinnedAt?.toString() : undefined;
    obj.fee_bytes_high_water = message.feeBytesHighWater !== BigInt(0) ? message.feeBytesHighWater?.toString() : undefined;
    obj.edited = message.edited === false ? undefined : message.edited;
    obj.edited_at = message.editedAt !== BigInt(0) ? message.editedAt?.toString() : undefined;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.conviction_sustained = message.convictionSustained === false ? undefined : message.convictionSustained;
    return obj;
  },
  fromAminoMsg(object: PostAminoMsg): Post {
    return Post.fromAmino(object.value);
  },
  fromProtoMsg(message: PostProtoMsg): Post {
    return Post.decode(message.value);
  },
  toProto(message: Post): Uint8Array {
    return Post.encode(message).finish();
  },
  toProtoMsg(message: Post): PostProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.Post",
      value: Post.encode(message).finish()
    };
  }
};