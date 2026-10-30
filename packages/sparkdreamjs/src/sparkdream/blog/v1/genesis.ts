//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Post, PostAmino } from "./post";
import { Reply, ReplyAmino, Reaction, ReactionAmino, GenesisReactionCounts, GenesisReactionCountsAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the blog module's genesis state.
 * @name GenesisState
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  /**
   * posts is the list of all posts.
   */
  posts: Post[];
  /**
   * post_count is the next auto-increment ID for posts.
   */
  postCount: bigint;
  /**
   * replies is the list of all replies.
   */
  replies: Reply[];
  /**
   * reply_count is the next auto-increment ID for replies.
   */
  replyCount: bigint;
  /**
   * reactions is the list of all individual reactions.
   */
  reactions: Reaction[];
  /**
   * reaction_counts is the list of all aggregate reaction counts.
   */
  reactionCounts: GenesisReactionCounts[];
  /**
   * Authors queued for eager promotion of their ephemeral content (admitted
   * as members after posting). The queue is driven by an x/rep hook, so it
   * cannot be rebuilt from the posts; without it an import would drop every
   * pending promotion.
   */
  promotionQueue: PromotionQueueEntry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.blog.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the blog module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  /**
   * posts is the list of all posts.
   */
  posts?: PostAmino[];
  /**
   * post_count is the next auto-increment ID for posts.
   */
  post_count?: string;
  /**
   * replies is the list of all replies.
   */
  replies?: ReplyAmino[];
  /**
   * reply_count is the next auto-increment ID for replies.
   */
  reply_count?: string;
  /**
   * reactions is the list of all individual reactions.
   */
  reactions?: ReactionAmino[];
  /**
   * reaction_counts is the list of all aggregate reaction counts.
   */
  reaction_counts?: GenesisReactionCountsAmino[];
  /**
   * Authors queued for eager promotion of their ephemeral content (admitted
   * as members after posting). The queue is driven by an x/rep hook, so it
   * cannot be rebuilt from the posts; without it an import would drop every
   * pending promotion.
   */
  promotion_queue?: PromotionQueueEntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.blog.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * PromotionQueueEntry is one queued author and the height it was enqueued.
 * @name PromotionQueueEntry
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.PromotionQueueEntry
 */
export interface PromotionQueueEntry {
  creator: string;
  enqueuedAt: bigint;
}
export interface PromotionQueueEntryProtoMsg {
  typeUrl: "/sparkdream.blog.v1.PromotionQueueEntry";
  value: Uint8Array;
}
/**
 * PromotionQueueEntry is one queued author and the height it was enqueued.
 * @name PromotionQueueEntryAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.PromotionQueueEntry
 */
export interface PromotionQueueEntryAmino {
  creator?: string;
  enqueued_at?: string;
}
export interface PromotionQueueEntryAminoMsg {
  type: "/sparkdream.blog.v1.PromotionQueueEntry";
  value: PromotionQueueEntryAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    posts: [],
    postCount: BigInt(0),
    replies: [],
    replyCount: BigInt(0),
    reactions: [],
    reactionCounts: [],
    promotionQueue: []
  };
}
/**
 * GenesisState defines the blog module's genesis state.
 * @name GenesisState
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.blog.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.postCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.postCount);
    }
    for (const v of message.replies) {
      Reply.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.replyCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.replyCount);
    }
    for (const v of message.reactions) {
      Reaction.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.reactionCounts) {
      GenesisReactionCounts.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.promotionQueue) {
      PromotionQueueEntry.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.posts.push(Post.decode(reader, reader.uint32()));
          break;
        case 3:
          message.postCount = reader.uint64();
          break;
        case 4:
          message.replies.push(Reply.decode(reader, reader.uint32()));
          break;
        case 5:
          message.replyCount = reader.uint64();
          break;
        case 6:
          message.reactions.push(Reaction.decode(reader, reader.uint32()));
          break;
        case 7:
          message.reactionCounts.push(GenesisReactionCounts.decode(reader, reader.uint32()));
          break;
        case 8:
          message.promotionQueue.push(PromotionQueueEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.posts = object.posts?.map(e => Post.fromPartial(e)) || [];
    message.postCount = object.postCount !== undefined && object.postCount !== null ? BigInt(object.postCount.toString()) : BigInt(0);
    message.replies = object.replies?.map(e => Reply.fromPartial(e)) || [];
    message.replyCount = object.replyCount !== undefined && object.replyCount !== null ? BigInt(object.replyCount.toString()) : BigInt(0);
    message.reactions = object.reactions?.map(e => Reaction.fromPartial(e)) || [];
    message.reactionCounts = object.reactionCounts?.map(e => GenesisReactionCounts.fromPartial(e)) || [];
    message.promotionQueue = object.promotionQueue?.map(e => PromotionQueueEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.posts = object.posts?.map(e => Post.fromAmino(e)) || [];
    if (object.post_count !== undefined && object.post_count !== null) {
      message.postCount = BigInt(object.post_count);
    }
    message.replies = object.replies?.map(e => Reply.fromAmino(e)) || [];
    if (object.reply_count !== undefined && object.reply_count !== null) {
      message.replyCount = BigInt(object.reply_count);
    }
    message.reactions = object.reactions?.map(e => Reaction.fromAmino(e)) || [];
    message.reactionCounts = object.reaction_counts?.map(e => GenesisReactionCounts.fromAmino(e)) || [];
    message.promotionQueue = object.promotion_queue?.map(e => PromotionQueueEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.posts) {
      obj.posts = message.posts.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.posts = message.posts;
    }
    obj.post_count = message.postCount !== BigInt(0) ? message.postCount?.toString() : undefined;
    if (message.replies) {
      obj.replies = message.replies.map(e => e ? Reply.toAmino(e) : undefined);
    } else {
      obj.replies = message.replies;
    }
    obj.reply_count = message.replyCount !== BigInt(0) ? message.replyCount?.toString() : undefined;
    if (message.reactions) {
      obj.reactions = message.reactions.map(e => e ? Reaction.toAmino(e) : undefined);
    } else {
      obj.reactions = message.reactions;
    }
    if (message.reactionCounts) {
      obj.reaction_counts = message.reactionCounts.map(e => e ? GenesisReactionCounts.toAmino(e) : undefined);
    } else {
      obj.reaction_counts = message.reactionCounts;
    }
    if (message.promotionQueue) {
      obj.promotion_queue = message.promotionQueue.map(e => e ? PromotionQueueEntry.toAmino(e) : undefined);
    } else {
      obj.promotion_queue = message.promotionQueue;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBasePromotionQueueEntry(): PromotionQueueEntry {
  return {
    creator: "",
    enqueuedAt: BigInt(0)
  };
}
/**
 * PromotionQueueEntry is one queued author and the height it was enqueued.
 * @name PromotionQueueEntry
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.PromotionQueueEntry
 */
export const PromotionQueueEntry = {
  typeUrl: "/sparkdream.blog.v1.PromotionQueueEntry",
  encode(message: PromotionQueueEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.enqueuedAt !== BigInt(0)) {
      writer.uint32(16).int64(message.enqueuedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PromotionQueueEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePromotionQueueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.enqueuedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PromotionQueueEntry>): PromotionQueueEntry {
    const message = createBasePromotionQueueEntry();
    message.creator = object.creator ?? "";
    message.enqueuedAt = object.enqueuedAt !== undefined && object.enqueuedAt !== null ? BigInt(object.enqueuedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PromotionQueueEntryAmino): PromotionQueueEntry {
    const message = createBasePromotionQueueEntry();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.enqueued_at !== undefined && object.enqueued_at !== null) {
      message.enqueuedAt = BigInt(object.enqueued_at);
    }
    return message;
  },
  toAmino(message: PromotionQueueEntry): PromotionQueueEntryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.enqueued_at = message.enqueuedAt !== BigInt(0) ? message.enqueuedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PromotionQueueEntryAminoMsg): PromotionQueueEntry {
    return PromotionQueueEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PromotionQueueEntryProtoMsg): PromotionQueueEntry {
    return PromotionQueueEntry.decode(message.value);
  },
  toProto(message: PromotionQueueEntry): Uint8Array {
    return PromotionQueueEntry.encode(message).finish();
  },
  toProtoMsg(message: PromotionQueueEntry): PromotionQueueEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.PromotionQueueEntry",
      value: PromotionQueueEntry.encode(message).finish()
    };
  }
};