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
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.blog.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    posts: [],
    postCount: BigInt(0),
    replies: [],
    replyCount: BigInt(0),
    reactions: [],
    reactionCounts: []
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