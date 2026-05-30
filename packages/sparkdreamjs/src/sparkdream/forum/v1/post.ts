//@ts-nocheck
import { PostStatus } from "./types";
import { ContentType } from "../../common/v1/content_type";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Post defines the Post message.
 * @name Post
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Post
 */
export interface Post {
  postId: bigint;
  categoryId: bigint;
  rootId: bigint;
  parentId: bigint;
  author: string;
  content: string;
  createdAt: bigint;
  expirationTime: bigint;
  status: PostStatus;
  hiddenBy: string;
  hiddenAt: bigint;
  pinned: boolean;
  pinnedBy: string;
  pinnedAt: bigint;
  pinPriority: bigint;
  locked: boolean;
  lockedBy: string;
  lockedAt: bigint;
  lockReason: string;
  upvoteCount: bigint;
  downvoteCount: bigint;
  depth: bigint;
  edited: boolean;
  editedAt: bigint;
  tags: string[];
  contentType: ContentType;
  initiativeId: bigint;
  convictionSustained: boolean;
  /**
   * promoted_by is the member who called MsgMakePostPermanent on this post
   * (or reply). Empty if still ephemeral, or if it became permanent via
   * author-admission auto-promotion / explicit author self-promotion. Used by
   * ExpireHiddenPosts to issue a MemberWarning against the promoter on
   * unappealed sentinel hide — they vouched for content the community
   * rejected.
   */
  promotedBy: string;
  /**
   * promoted_at is the block-time (unix seconds) at which promoted_by called
   * MsgMakePostPermanent. Zero when promoted_by is empty.
   */
  promotedAt: bigint;
}
export interface PostProtoMsg {
  typeUrl: "/sparkdream.forum.v1.Post";
  value: Uint8Array;
}
/**
 * Post defines the Post message.
 * @name PostAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Post
 */
export interface PostAmino {
  post_id?: string;
  category_id?: string;
  root_id?: string;
  parent_id?: string;
  author?: string;
  content?: string;
  created_at?: string;
  expiration_time?: string;
  status?: PostStatus;
  hidden_by?: string;
  hidden_at?: string;
  pinned?: boolean;
  pinned_by?: string;
  pinned_at?: string;
  pin_priority?: string;
  locked?: boolean;
  locked_by?: string;
  locked_at?: string;
  lock_reason?: string;
  upvote_count?: string;
  downvote_count?: string;
  depth?: string;
  edited?: boolean;
  edited_at?: string;
  tags?: string[];
  content_type?: ContentType;
  initiative_id?: string;
  conviction_sustained?: boolean;
  /**
   * promoted_by is the member who called MsgMakePostPermanent on this post
   * (or reply). Empty if still ephemeral, or if it became permanent via
   * author-admission auto-promotion / explicit author self-promotion. Used by
   * ExpireHiddenPosts to issue a MemberWarning against the promoter on
   * unappealed sentinel hide — they vouched for content the community
   * rejected.
   */
  promoted_by?: string;
  /**
   * promoted_at is the block-time (unix seconds) at which promoted_by called
   * MsgMakePostPermanent. Zero when promoted_by is empty.
   */
  promoted_at?: string;
}
export interface PostAminoMsg {
  type: "/sparkdream.forum.v1.Post";
  value: PostAmino;
}
function createBasePost(): Post {
  return {
    postId: BigInt(0),
    categoryId: BigInt(0),
    rootId: BigInt(0),
    parentId: BigInt(0),
    author: "",
    content: "",
    createdAt: BigInt(0),
    expirationTime: BigInt(0),
    status: 0,
    hiddenBy: "",
    hiddenAt: BigInt(0),
    pinned: false,
    pinnedBy: "",
    pinnedAt: BigInt(0),
    pinPriority: BigInt(0),
    locked: false,
    lockedBy: "",
    lockedAt: BigInt(0),
    lockReason: "",
    upvoteCount: BigInt(0),
    downvoteCount: BigInt(0),
    depth: BigInt(0),
    edited: false,
    editedAt: BigInt(0),
    tags: [],
    contentType: 0,
    initiativeId: BigInt(0),
    convictionSustained: false,
    promotedBy: "",
    promotedAt: BigInt(0)
  };
}
/**
 * Post defines the Post message.
 * @name Post
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Post
 */
export const Post = {
  typeUrl: "/sparkdream.forum.v1.Post",
  encode(message: Post, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.categoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.categoryId);
    }
    if (message.rootId !== BigInt(0)) {
      writer.uint32(24).uint64(message.rootId);
    }
    if (message.parentId !== BigInt(0)) {
      writer.uint32(32).uint64(message.parentId);
    }
    if (message.author !== "") {
      writer.uint32(42).string(message.author);
    }
    if (message.content !== "") {
      writer.uint32(50).string(message.content);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(56).int64(message.createdAt);
    }
    if (message.expirationTime !== BigInt(0)) {
      writer.uint32(64).int64(message.expirationTime);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.hiddenBy !== "") {
      writer.uint32(82).string(message.hiddenBy);
    }
    if (message.hiddenAt !== BigInt(0)) {
      writer.uint32(88).int64(message.hiddenAt);
    }
    if (message.pinned === true) {
      writer.uint32(96).bool(message.pinned);
    }
    if (message.pinnedBy !== "") {
      writer.uint32(106).string(message.pinnedBy);
    }
    if (message.pinnedAt !== BigInt(0)) {
      writer.uint32(112).int64(message.pinnedAt);
    }
    if (message.pinPriority !== BigInt(0)) {
      writer.uint32(120).uint64(message.pinPriority);
    }
    if (message.locked === true) {
      writer.uint32(128).bool(message.locked);
    }
    if (message.lockedBy !== "") {
      writer.uint32(138).string(message.lockedBy);
    }
    if (message.lockedAt !== BigInt(0)) {
      writer.uint32(144).int64(message.lockedAt);
    }
    if (message.lockReason !== "") {
      writer.uint32(154).string(message.lockReason);
    }
    if (message.upvoteCount !== BigInt(0)) {
      writer.uint32(160).uint64(message.upvoteCount);
    }
    if (message.downvoteCount !== BigInt(0)) {
      writer.uint32(168).uint64(message.downvoteCount);
    }
    if (message.depth !== BigInt(0)) {
      writer.uint32(176).uint64(message.depth);
    }
    if (message.edited === true) {
      writer.uint32(184).bool(message.edited);
    }
    if (message.editedAt !== BigInt(0)) {
      writer.uint32(192).int64(message.editedAt);
    }
    for (const v of message.tags) {
      writer.uint32(242).string(v!);
    }
    if (message.contentType !== 0) {
      writer.uint32(248).int32(message.contentType);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(256).uint64(message.initiativeId);
    }
    if (message.convictionSustained === true) {
      writer.uint32(264).bool(message.convictionSustained);
    }
    if (message.promotedBy !== "") {
      writer.uint32(274).string(message.promotedBy);
    }
    if (message.promotedAt !== BigInt(0)) {
      writer.uint32(280).int64(message.promotedAt);
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
          message.postId = reader.uint64();
          break;
        case 2:
          message.categoryId = reader.uint64();
          break;
        case 3:
          message.rootId = reader.uint64();
          break;
        case 4:
          message.parentId = reader.uint64();
          break;
        case 5:
          message.author = reader.string();
          break;
        case 6:
          message.content = reader.string();
          break;
        case 7:
          message.createdAt = reader.int64();
          break;
        case 8:
          message.expirationTime = reader.int64();
          break;
        case 9:
          message.status = reader.int32() as any;
          break;
        case 10:
          message.hiddenBy = reader.string();
          break;
        case 11:
          message.hiddenAt = reader.int64();
          break;
        case 12:
          message.pinned = reader.bool();
          break;
        case 13:
          message.pinnedBy = reader.string();
          break;
        case 14:
          message.pinnedAt = reader.int64();
          break;
        case 15:
          message.pinPriority = reader.uint64();
          break;
        case 16:
          message.locked = reader.bool();
          break;
        case 17:
          message.lockedBy = reader.string();
          break;
        case 18:
          message.lockedAt = reader.int64();
          break;
        case 19:
          message.lockReason = reader.string();
          break;
        case 20:
          message.upvoteCount = reader.uint64();
          break;
        case 21:
          message.downvoteCount = reader.uint64();
          break;
        case 22:
          message.depth = reader.uint64();
          break;
        case 23:
          message.edited = reader.bool();
          break;
        case 24:
          message.editedAt = reader.int64();
          break;
        case 30:
          message.tags.push(reader.string());
          break;
        case 31:
          message.contentType = reader.int32() as any;
          break;
        case 32:
          message.initiativeId = reader.uint64();
          break;
        case 33:
          message.convictionSustained = reader.bool();
          break;
        case 34:
          message.promotedBy = reader.string();
          break;
        case 35:
          message.promotedAt = reader.int64();
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
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.categoryId = object.categoryId !== undefined && object.categoryId !== null ? BigInt(object.categoryId.toString()) : BigInt(0);
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    message.parentId = object.parentId !== undefined && object.parentId !== null ? BigInt(object.parentId.toString()) : BigInt(0);
    message.author = object.author ?? "";
    message.content = object.content ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? BigInt(object.expirationTime.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.hiddenBy = object.hiddenBy ?? "";
    message.hiddenAt = object.hiddenAt !== undefined && object.hiddenAt !== null ? BigInt(object.hiddenAt.toString()) : BigInt(0);
    message.pinned = object.pinned ?? false;
    message.pinnedBy = object.pinnedBy ?? "";
    message.pinnedAt = object.pinnedAt !== undefined && object.pinnedAt !== null ? BigInt(object.pinnedAt.toString()) : BigInt(0);
    message.pinPriority = object.pinPriority !== undefined && object.pinPriority !== null ? BigInt(object.pinPriority.toString()) : BigInt(0);
    message.locked = object.locked ?? false;
    message.lockedBy = object.lockedBy ?? "";
    message.lockedAt = object.lockedAt !== undefined && object.lockedAt !== null ? BigInt(object.lockedAt.toString()) : BigInt(0);
    message.lockReason = object.lockReason ?? "";
    message.upvoteCount = object.upvoteCount !== undefined && object.upvoteCount !== null ? BigInt(object.upvoteCount.toString()) : BigInt(0);
    message.downvoteCount = object.downvoteCount !== undefined && object.downvoteCount !== null ? BigInt(object.downvoteCount.toString()) : BigInt(0);
    message.depth = object.depth !== undefined && object.depth !== null ? BigInt(object.depth.toString()) : BigInt(0);
    message.edited = object.edited ?? false;
    message.editedAt = object.editedAt !== undefined && object.editedAt !== null ? BigInt(object.editedAt.toString()) : BigInt(0);
    message.tags = object.tags?.map(e => e) || [];
    message.contentType = object.contentType ?? 0;
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.convictionSustained = object.convictionSustained ?? false;
    message.promotedBy = object.promotedBy ?? "";
    message.promotedAt = object.promotedAt !== undefined && object.promotedAt !== null ? BigInt(object.promotedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PostAmino): Post {
    const message = createBasePost();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.category_id !== undefined && object.category_id !== null) {
      message.categoryId = BigInt(object.category_id);
    }
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    if (object.parent_id !== undefined && object.parent_id !== null) {
      message.parentId = BigInt(object.parent_id);
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = BigInt(object.expiration_time);
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
    if (object.pinned !== undefined && object.pinned !== null) {
      message.pinned = object.pinned;
    }
    if (object.pinned_by !== undefined && object.pinned_by !== null) {
      message.pinnedBy = object.pinned_by;
    }
    if (object.pinned_at !== undefined && object.pinned_at !== null) {
      message.pinnedAt = BigInt(object.pinned_at);
    }
    if (object.pin_priority !== undefined && object.pin_priority !== null) {
      message.pinPriority = BigInt(object.pin_priority);
    }
    if (object.locked !== undefined && object.locked !== null) {
      message.locked = object.locked;
    }
    if (object.locked_by !== undefined && object.locked_by !== null) {
      message.lockedBy = object.locked_by;
    }
    if (object.locked_at !== undefined && object.locked_at !== null) {
      message.lockedAt = BigInt(object.locked_at);
    }
    if (object.lock_reason !== undefined && object.lock_reason !== null) {
      message.lockReason = object.lock_reason;
    }
    if (object.upvote_count !== undefined && object.upvote_count !== null) {
      message.upvoteCount = BigInt(object.upvote_count);
    }
    if (object.downvote_count !== undefined && object.downvote_count !== null) {
      message.downvoteCount = BigInt(object.downvote_count);
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = BigInt(object.depth);
    }
    if (object.edited !== undefined && object.edited !== null) {
      message.edited = object.edited;
    }
    if (object.edited_at !== undefined && object.edited_at !== null) {
      message.editedAt = BigInt(object.edited_at);
    }
    message.tags = object.tags?.map(e => e) || [];
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.conviction_sustained !== undefined && object.conviction_sustained !== null) {
      message.convictionSustained = object.conviction_sustained;
    }
    if (object.promoted_by !== undefined && object.promoted_by !== null) {
      message.promotedBy = object.promoted_by;
    }
    if (object.promoted_at !== undefined && object.promoted_at !== null) {
      message.promotedAt = BigInt(object.promoted_at);
    }
    return message;
  },
  toAmino(message: Post): PostAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    obj.parent_id = message.parentId !== BigInt(0) ? message.parentId?.toString() : undefined;
    obj.author = message.author === "" ? undefined : message.author;
    obj.content = message.content === "" ? undefined : message.content;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.expiration_time = message.expirationTime !== BigInt(0) ? message.expirationTime?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.hidden_by = message.hiddenBy === "" ? undefined : message.hiddenBy;
    obj.hidden_at = message.hiddenAt !== BigInt(0) ? message.hiddenAt?.toString() : undefined;
    obj.pinned = message.pinned === false ? undefined : message.pinned;
    obj.pinned_by = message.pinnedBy === "" ? undefined : message.pinnedBy;
    obj.pinned_at = message.pinnedAt !== BigInt(0) ? message.pinnedAt?.toString() : undefined;
    obj.pin_priority = message.pinPriority !== BigInt(0) ? message.pinPriority?.toString() : undefined;
    obj.locked = message.locked === false ? undefined : message.locked;
    obj.locked_by = message.lockedBy === "" ? undefined : message.lockedBy;
    obj.locked_at = message.lockedAt !== BigInt(0) ? message.lockedAt?.toString() : undefined;
    obj.lock_reason = message.lockReason === "" ? undefined : message.lockReason;
    obj.upvote_count = message.upvoteCount !== BigInt(0) ? message.upvoteCount?.toString() : undefined;
    obj.downvote_count = message.downvoteCount !== BigInt(0) ? message.downvoteCount?.toString() : undefined;
    obj.depth = message.depth !== BigInt(0) ? message.depth?.toString() : undefined;
    obj.edited = message.edited === false ? undefined : message.edited;
    obj.edited_at = message.editedAt !== BigInt(0) ? message.editedAt?.toString() : undefined;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.content_type = message.contentType === 0 ? undefined : message.contentType;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.conviction_sustained = message.convictionSustained === false ? undefined : message.convictionSustained;
    obj.promoted_by = message.promotedBy === "" ? undefined : message.promotedBy;
    obj.promoted_at = message.promotedAt !== BigInt(0) ? message.promotedAt?.toString() : undefined;
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
      typeUrl: "/sparkdream.forum.v1.Post",
      value: Post.encode(message).finish()
    };
  }
};