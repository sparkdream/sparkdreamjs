//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { Post, PostAmino } from "./post";
import { Reply, ReplyAmino, ReactionCounts, ReactionCountsAmino, Reaction, ReactionAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryShowPostRequest defines the QueryShowPostRequest message.
 * @name QueryShowPostRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowPostRequest
 */
export interface QueryShowPostRequest {
  id: bigint;
}
export interface QueryShowPostRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryShowPostRequest";
  value: Uint8Array;
}
/**
 * QueryShowPostRequest defines the QueryShowPostRequest message.
 * @name QueryShowPostRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowPostRequest
 */
export interface QueryShowPostRequestAmino {
  id?: string;
}
export interface QueryShowPostRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryShowPostRequest";
  value: QueryShowPostRequestAmino;
}
/**
 * QueryShowPostResponse defines the QueryShowPostResponse message.
 * @name QueryShowPostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowPostResponse
 */
export interface QueryShowPostResponse {
  post: Post;
}
export interface QueryShowPostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryShowPostResponse";
  value: Uint8Array;
}
/**
 * QueryShowPostResponse defines the QueryShowPostResponse message.
 * @name QueryShowPostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowPostResponse
 */
export interface QueryShowPostResponseAmino {
  post?: PostAmino;
}
export interface QueryShowPostResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryShowPostResponse";
  value: QueryShowPostResponseAmino;
}
/**
 * QueryListPostRequest defines the QueryListPostRequest message.
 * @name QueryListPostRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostRequest
 */
export interface QueryListPostRequest {
  pagination?: PageRequest;
}
export interface QueryListPostRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListPostRequest";
  value: Uint8Array;
}
/**
 * QueryListPostRequest defines the QueryListPostRequest message.
 * @name QueryListPostRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostRequest
 */
export interface QueryListPostRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListPostRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryListPostRequest";
  value: QueryListPostRequestAmino;
}
/**
 * QueryListPostResponse defines the QueryListPostResponse message.
 * @name QueryListPostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostResponse
 */
export interface QueryListPostResponse {
  post: Post[];
  pagination?: PageResponse;
}
export interface QueryListPostResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListPostResponse";
  value: Uint8Array;
}
/**
 * QueryListPostResponse defines the QueryListPostResponse message.
 * @name QueryListPostResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostResponse
 */
export interface QueryListPostResponseAmino {
  post?: PostAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListPostResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryListPostResponse";
  value: QueryListPostResponseAmino;
}
/**
 * QueryShowReplyRequest defines the QueryShowReplyRequest message.
 * @name QueryShowReplyRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowReplyRequest
 */
export interface QueryShowReplyRequest {
  id: bigint;
}
export interface QueryShowReplyRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryShowReplyRequest";
  value: Uint8Array;
}
/**
 * QueryShowReplyRequest defines the QueryShowReplyRequest message.
 * @name QueryShowReplyRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowReplyRequest
 */
export interface QueryShowReplyRequestAmino {
  id?: string;
}
export interface QueryShowReplyRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryShowReplyRequest";
  value: QueryShowReplyRequestAmino;
}
/**
 * QueryShowReplyResponse defines the QueryShowReplyResponse message.
 * @name QueryShowReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowReplyResponse
 */
export interface QueryShowReplyResponse {
  reply: Reply;
}
export interface QueryShowReplyResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryShowReplyResponse";
  value: Uint8Array;
}
/**
 * QueryShowReplyResponse defines the QueryShowReplyResponse message.
 * @name QueryShowReplyResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowReplyResponse
 */
export interface QueryShowReplyResponseAmino {
  reply?: ReplyAmino;
}
export interface QueryShowReplyResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryShowReplyResponse";
  value: QueryShowReplyResponseAmino;
}
/**
 * QueryListRepliesRequest defines the QueryListRepliesRequest message.
 * @name QueryListRepliesRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListRepliesRequest
 */
export interface QueryListRepliesRequest {
  postId: bigint;
  filterByParent: boolean;
  parentReplyId: bigint;
  pagination?: PageRequest;
  includeHidden: boolean;
}
export interface QueryListRepliesRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListRepliesRequest";
  value: Uint8Array;
}
/**
 * QueryListRepliesRequest defines the QueryListRepliesRequest message.
 * @name QueryListRepliesRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListRepliesRequest
 */
export interface QueryListRepliesRequestAmino {
  post_id?: string;
  filter_by_parent?: boolean;
  parent_reply_id?: string;
  pagination?: PageRequestAmino;
  include_hidden?: boolean;
}
export interface QueryListRepliesRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryListRepliesRequest";
  value: QueryListRepliesRequestAmino;
}
/**
 * QueryListRepliesResponse defines the QueryListRepliesResponse message.
 * @name QueryListRepliesResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListRepliesResponse
 */
export interface QueryListRepliesResponse {
  replies: Reply[];
  pagination?: PageResponse;
}
export interface QueryListRepliesResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListRepliesResponse";
  value: Uint8Array;
}
/**
 * QueryListRepliesResponse defines the QueryListRepliesResponse message.
 * @name QueryListRepliesResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListRepliesResponse
 */
export interface QueryListRepliesResponseAmino {
  replies?: ReplyAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListRepliesResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryListRepliesResponse";
  value: QueryListRepliesResponseAmino;
}
/**
 * QueryListPostsByCreatorRequest defines the QueryListPostsByCreatorRequest message.
 * @name QueryListPostsByCreatorRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostsByCreatorRequest
 */
export interface QueryListPostsByCreatorRequest {
  creator: string;
  pagination?: PageRequest;
  includeHidden: boolean;
}
export interface QueryListPostsByCreatorRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListPostsByCreatorRequest";
  value: Uint8Array;
}
/**
 * QueryListPostsByCreatorRequest defines the QueryListPostsByCreatorRequest message.
 * @name QueryListPostsByCreatorRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostsByCreatorRequest
 */
export interface QueryListPostsByCreatorRequestAmino {
  creator?: string;
  pagination?: PageRequestAmino;
  include_hidden?: boolean;
}
export interface QueryListPostsByCreatorRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryListPostsByCreatorRequest";
  value: QueryListPostsByCreatorRequestAmino;
}
/**
 * QueryListPostsByCreatorResponse defines the QueryListPostsByCreatorResponse message.
 * @name QueryListPostsByCreatorResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostsByCreatorResponse
 */
export interface QueryListPostsByCreatorResponse {
  posts: Post[];
  pagination?: PageResponse;
}
export interface QueryListPostsByCreatorResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListPostsByCreatorResponse";
  value: Uint8Array;
}
/**
 * QueryListPostsByCreatorResponse defines the QueryListPostsByCreatorResponse message.
 * @name QueryListPostsByCreatorResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostsByCreatorResponse
 */
export interface QueryListPostsByCreatorResponseAmino {
  posts?: PostAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListPostsByCreatorResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryListPostsByCreatorResponse";
  value: QueryListPostsByCreatorResponseAmino;
}
/**
 * QueryReactionCountsRequest defines the QueryReactionCountsRequest message.
 * @name QueryReactionCountsRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryReactionCountsRequest
 */
export interface QueryReactionCountsRequest {
  postId: bigint;
  replyId: bigint;
}
export interface QueryReactionCountsRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryReactionCountsRequest";
  value: Uint8Array;
}
/**
 * QueryReactionCountsRequest defines the QueryReactionCountsRequest message.
 * @name QueryReactionCountsRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryReactionCountsRequest
 */
export interface QueryReactionCountsRequestAmino {
  post_id?: string;
  reply_id?: string;
}
export interface QueryReactionCountsRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryReactionCountsRequest";
  value: QueryReactionCountsRequestAmino;
}
/**
 * QueryReactionCountsResponse defines the QueryReactionCountsResponse message.
 * @name QueryReactionCountsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryReactionCountsResponse
 */
export interface QueryReactionCountsResponse {
  counts: ReactionCounts;
}
export interface QueryReactionCountsResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryReactionCountsResponse";
  value: Uint8Array;
}
/**
 * QueryReactionCountsResponse defines the QueryReactionCountsResponse message.
 * @name QueryReactionCountsResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryReactionCountsResponse
 */
export interface QueryReactionCountsResponseAmino {
  counts?: ReactionCountsAmino;
}
export interface QueryReactionCountsResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryReactionCountsResponse";
  value: QueryReactionCountsResponseAmino;
}
/**
 * QueryUserReactionRequest defines the QueryUserReactionRequest message.
 * @name QueryUserReactionRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryUserReactionRequest
 */
export interface QueryUserReactionRequest {
  creator: string;
  postId: bigint;
  replyId: bigint;
}
export interface QueryUserReactionRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryUserReactionRequest";
  value: Uint8Array;
}
/**
 * QueryUserReactionRequest defines the QueryUserReactionRequest message.
 * @name QueryUserReactionRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryUserReactionRequest
 */
export interface QueryUserReactionRequestAmino {
  creator?: string;
  post_id?: string;
  reply_id?: string;
}
export interface QueryUserReactionRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryUserReactionRequest";
  value: QueryUserReactionRequestAmino;
}
/**
 * QueryUserReactionResponse defines the QueryUserReactionResponse message.
 * @name QueryUserReactionResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryUserReactionResponse
 */
export interface QueryUserReactionResponse {
  /**
   * nil if user has not reacted
   */
  reaction?: Reaction;
}
export interface QueryUserReactionResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryUserReactionResponse";
  value: Uint8Array;
}
/**
 * QueryUserReactionResponse defines the QueryUserReactionResponse message.
 * @name QueryUserReactionResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryUserReactionResponse
 */
export interface QueryUserReactionResponseAmino {
  /**
   * nil if user has not reacted
   */
  reaction?: ReactionAmino;
}
export interface QueryUserReactionResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryUserReactionResponse";
  value: QueryUserReactionResponseAmino;
}
/**
 * QueryListReactionsRequest defines the QueryListReactionsRequest message.
 * @name QueryListReactionsRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListReactionsRequest
 */
export interface QueryListReactionsRequest {
  postId: bigint;
  replyId: bigint;
  pagination?: PageRequest;
}
export interface QueryListReactionsRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListReactionsRequest";
  value: Uint8Array;
}
/**
 * QueryListReactionsRequest defines the QueryListReactionsRequest message.
 * @name QueryListReactionsRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListReactionsRequest
 */
export interface QueryListReactionsRequestAmino {
  post_id?: string;
  reply_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListReactionsRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryListReactionsRequest";
  value: QueryListReactionsRequestAmino;
}
/**
 * QueryListReactionsResponse defines the QueryListReactionsResponse message.
 * @name QueryListReactionsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListReactionsResponse
 */
export interface QueryListReactionsResponse {
  reactions: Reaction[];
  pagination?: PageResponse;
}
export interface QueryListReactionsResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListReactionsResponse";
  value: Uint8Array;
}
/**
 * QueryListReactionsResponse defines the QueryListReactionsResponse message.
 * @name QueryListReactionsResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListReactionsResponse
 */
export interface QueryListReactionsResponseAmino {
  reactions?: ReactionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListReactionsResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryListReactionsResponse";
  value: QueryListReactionsResponseAmino;
}
/**
 * QueryListReactionsByCreatorRequest defines the QueryListReactionsByCreatorRequest message.
 * @name QueryListReactionsByCreatorRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListReactionsByCreatorRequest
 */
export interface QueryListReactionsByCreatorRequest {
  creator: string;
  pagination?: PageRequest;
}
export interface QueryListReactionsByCreatorRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListReactionsByCreatorRequest";
  value: Uint8Array;
}
/**
 * QueryListReactionsByCreatorRequest defines the QueryListReactionsByCreatorRequest message.
 * @name QueryListReactionsByCreatorRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListReactionsByCreatorRequest
 */
export interface QueryListReactionsByCreatorRequestAmino {
  creator?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListReactionsByCreatorRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryListReactionsByCreatorRequest";
  value: QueryListReactionsByCreatorRequestAmino;
}
/**
 * QueryListReactionsByCreatorResponse defines the QueryListReactionsByCreatorResponse message.
 * @name QueryListReactionsByCreatorResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListReactionsByCreatorResponse
 */
export interface QueryListReactionsByCreatorResponse {
  reactions: Reaction[];
  pagination?: PageResponse;
}
export interface QueryListReactionsByCreatorResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListReactionsByCreatorResponse";
  value: Uint8Array;
}
/**
 * QueryListReactionsByCreatorResponse defines the QueryListReactionsByCreatorResponse message.
 * @name QueryListReactionsByCreatorResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListReactionsByCreatorResponse
 */
export interface QueryListReactionsByCreatorResponseAmino {
  reactions?: ReactionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListReactionsByCreatorResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryListReactionsByCreatorResponse";
  value: QueryListReactionsByCreatorResponseAmino;
}
/**
 * QueryListExpiringContentRequest defines the QueryListExpiringContentRequest message.
 * @name QueryListExpiringContentRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListExpiringContentRequest
 */
export interface QueryListExpiringContentRequest {
  expiresBefore: bigint;
  contentType: string;
  pagination?: PageRequest;
}
export interface QueryListExpiringContentRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListExpiringContentRequest";
  value: Uint8Array;
}
/**
 * QueryListExpiringContentRequest defines the QueryListExpiringContentRequest message.
 * @name QueryListExpiringContentRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListExpiringContentRequest
 */
export interface QueryListExpiringContentRequestAmino {
  expires_before?: string;
  content_type?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListExpiringContentRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryListExpiringContentRequest";
  value: QueryListExpiringContentRequestAmino;
}
/**
 * QueryListExpiringContentResponse defines the QueryListExpiringContentResponse message.
 * @name QueryListExpiringContentResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListExpiringContentResponse
 */
export interface QueryListExpiringContentResponse {
  posts: Post[];
  replies: Reply[];
  pagination?: PageResponse;
}
export interface QueryListExpiringContentResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListExpiringContentResponse";
  value: Uint8Array;
}
/**
 * QueryListExpiringContentResponse defines the QueryListExpiringContentResponse message.
 * @name QueryListExpiringContentResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListExpiringContentResponse
 */
export interface QueryListExpiringContentResponseAmino {
  posts?: PostAmino[];
  replies?: ReplyAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListExpiringContentResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryListExpiringContentResponse";
  value: QueryListExpiringContentResponseAmino;
}
/**
 * QueryListPostsByTagRequest defines the QueryListPostsByTagRequest message.
 * @name QueryListPostsByTagRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostsByTagRequest
 */
export interface QueryListPostsByTagRequest {
  tag: string;
  pagination?: PageRequest;
}
export interface QueryListPostsByTagRequestProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListPostsByTagRequest";
  value: Uint8Array;
}
/**
 * QueryListPostsByTagRequest defines the QueryListPostsByTagRequest message.
 * @name QueryListPostsByTagRequestAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostsByTagRequest
 */
export interface QueryListPostsByTagRequestAmino {
  tag?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListPostsByTagRequestAminoMsg {
  type: "/sparkdream.blog.v1.QueryListPostsByTagRequest";
  value: QueryListPostsByTagRequestAmino;
}
/**
 * QueryListPostsByTagResponse defines the QueryListPostsByTagResponse message.
 * @name QueryListPostsByTagResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostsByTagResponse
 */
export interface QueryListPostsByTagResponse {
  posts: Post[];
  pagination?: PageResponse;
}
export interface QueryListPostsByTagResponseProtoMsg {
  typeUrl: "/sparkdream.blog.v1.QueryListPostsByTagResponse";
  value: Uint8Array;
}
/**
 * QueryListPostsByTagResponse defines the QueryListPostsByTagResponse message.
 * @name QueryListPostsByTagResponseAmino
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostsByTagResponse
 */
export interface QueryListPostsByTagResponseAmino {
  posts?: PostAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListPostsByTagResponseAminoMsg {
  type: "/sparkdream.blog.v1.QueryListPostsByTagResponse";
  value: QueryListPostsByTagResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowPostRequest(): QueryShowPostRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryShowPostRequest defines the QueryShowPostRequest message.
 * @name QueryShowPostRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowPostRequest
 */
export const QueryShowPostRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryShowPostRequest",
  encode(message: QueryShowPostRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowPostRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryShowPostRequest>): QueryShowPostRequest {
    const message = createBaseQueryShowPostRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryShowPostRequestAmino): QueryShowPostRequest {
    const message = createBaseQueryShowPostRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryShowPostRequest): QueryShowPostRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowPostRequestAminoMsg): QueryShowPostRequest {
    return QueryShowPostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowPostRequestProtoMsg): QueryShowPostRequest {
    return QueryShowPostRequest.decode(message.value);
  },
  toProto(message: QueryShowPostRequest): Uint8Array {
    return QueryShowPostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowPostRequest): QueryShowPostRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryShowPostRequest",
      value: QueryShowPostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowPostResponse(): QueryShowPostResponse {
  return {
    post: Post.fromPartial({})
  };
}
/**
 * QueryShowPostResponse defines the QueryShowPostResponse message.
 * @name QueryShowPostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowPostResponse
 */
export const QueryShowPostResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryShowPostResponse",
  encode(message: QueryShowPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.post !== undefined) {
      Post.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = Post.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryShowPostResponse>): QueryShowPostResponse {
    const message = createBaseQueryShowPostResponse();
    message.post = object.post !== undefined && object.post !== null ? Post.fromPartial(object.post) : undefined;
    return message;
  },
  fromAmino(object: QueryShowPostResponseAmino): QueryShowPostResponse {
    const message = createBaseQueryShowPostResponse();
    if (object.post !== undefined && object.post !== null) {
      message.post = Post.fromAmino(object.post);
    }
    return message;
  },
  toAmino(message: QueryShowPostResponse): QueryShowPostResponseAmino {
    const obj: any = {};
    obj.post = message.post ? Post.toAmino(message.post) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowPostResponseAminoMsg): QueryShowPostResponse {
    return QueryShowPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowPostResponseProtoMsg): QueryShowPostResponse {
    return QueryShowPostResponse.decode(message.value);
  },
  toProto(message: QueryShowPostResponse): Uint8Array {
    return QueryShowPostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowPostResponse): QueryShowPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryShowPostResponse",
      value: QueryShowPostResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListPostRequest(): QueryListPostRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryListPostRequest defines the QueryListPostRequest message.
 * @name QueryListPostRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostRequest
 */
export const QueryListPostRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryListPostRequest",
  encode(message: QueryListPostRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPostRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListPostRequest>): QueryListPostRequest {
    const message = createBaseQueryListPostRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListPostRequestAmino): QueryListPostRequest {
    const message = createBaseQueryListPostRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListPostRequest): QueryListPostRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListPostRequestAminoMsg): QueryListPostRequest {
    return QueryListPostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPostRequestProtoMsg): QueryListPostRequest {
    return QueryListPostRequest.decode(message.value);
  },
  toProto(message: QueryListPostRequest): Uint8Array {
    return QueryListPostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListPostRequest): QueryListPostRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListPostRequest",
      value: QueryListPostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListPostResponse(): QueryListPostResponse {
  return {
    post: [],
    pagination: undefined
  };
}
/**
 * QueryListPostResponse defines the QueryListPostResponse message.
 * @name QueryListPostResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostResponse
 */
export const QueryListPostResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryListPostResponse",
  encode(message: QueryListPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListPostResponse>): QueryListPostResponse {
    const message = createBaseQueryListPostResponse();
    message.post = object.post?.map(e => Post.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListPostResponseAmino): QueryListPostResponse {
    const message = createBaseQueryListPostResponse();
    message.post = object.post?.map(e => Post.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListPostResponse): QueryListPostResponseAmino {
    const obj: any = {};
    if (message.post) {
      obj.post = message.post.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.post = message.post;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListPostResponseAminoMsg): QueryListPostResponse {
    return QueryListPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPostResponseProtoMsg): QueryListPostResponse {
    return QueryListPostResponse.decode(message.value);
  },
  toProto(message: QueryListPostResponse): Uint8Array {
    return QueryListPostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListPostResponse): QueryListPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListPostResponse",
      value: QueryListPostResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowReplyRequest(): QueryShowReplyRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryShowReplyRequest defines the QueryShowReplyRequest message.
 * @name QueryShowReplyRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowReplyRequest
 */
export const QueryShowReplyRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryShowReplyRequest",
  encode(message: QueryShowReplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowReplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowReplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryShowReplyRequest>): QueryShowReplyRequest {
    const message = createBaseQueryShowReplyRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryShowReplyRequestAmino): QueryShowReplyRequest {
    const message = createBaseQueryShowReplyRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryShowReplyRequest): QueryShowReplyRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowReplyRequestAminoMsg): QueryShowReplyRequest {
    return QueryShowReplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowReplyRequestProtoMsg): QueryShowReplyRequest {
    return QueryShowReplyRequest.decode(message.value);
  },
  toProto(message: QueryShowReplyRequest): Uint8Array {
    return QueryShowReplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowReplyRequest): QueryShowReplyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryShowReplyRequest",
      value: QueryShowReplyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowReplyResponse(): QueryShowReplyResponse {
  return {
    reply: Reply.fromPartial({})
  };
}
/**
 * QueryShowReplyResponse defines the QueryShowReplyResponse message.
 * @name QueryShowReplyResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryShowReplyResponse
 */
export const QueryShowReplyResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryShowReplyResponse",
  encode(message: QueryShowReplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reply !== undefined) {
      Reply.encode(message.reply, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowReplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowReplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reply = Reply.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryShowReplyResponse>): QueryShowReplyResponse {
    const message = createBaseQueryShowReplyResponse();
    message.reply = object.reply !== undefined && object.reply !== null ? Reply.fromPartial(object.reply) : undefined;
    return message;
  },
  fromAmino(object: QueryShowReplyResponseAmino): QueryShowReplyResponse {
    const message = createBaseQueryShowReplyResponse();
    if (object.reply !== undefined && object.reply !== null) {
      message.reply = Reply.fromAmino(object.reply);
    }
    return message;
  },
  toAmino(message: QueryShowReplyResponse): QueryShowReplyResponseAmino {
    const obj: any = {};
    obj.reply = message.reply ? Reply.toAmino(message.reply) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowReplyResponseAminoMsg): QueryShowReplyResponse {
    return QueryShowReplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowReplyResponseProtoMsg): QueryShowReplyResponse {
    return QueryShowReplyResponse.decode(message.value);
  },
  toProto(message: QueryShowReplyResponse): Uint8Array {
    return QueryShowReplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowReplyResponse): QueryShowReplyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryShowReplyResponse",
      value: QueryShowReplyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListRepliesRequest(): QueryListRepliesRequest {
  return {
    postId: BigInt(0),
    filterByParent: false,
    parentReplyId: BigInt(0),
    pagination: undefined,
    includeHidden: false
  };
}
/**
 * QueryListRepliesRequest defines the QueryListRepliesRequest message.
 * @name QueryListRepliesRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListRepliesRequest
 */
export const QueryListRepliesRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryListRepliesRequest",
  encode(message: QueryListRepliesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.filterByParent === true) {
      writer.uint32(16).bool(message.filterByParent);
    }
    if (message.parentReplyId !== BigInt(0)) {
      writer.uint32(24).uint64(message.parentReplyId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    if (message.includeHidden === true) {
      writer.uint32(40).bool(message.includeHidden);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListRepliesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRepliesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.filterByParent = reader.bool();
          break;
        case 3:
          message.parentReplyId = reader.uint64();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 5:
          message.includeHidden = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListRepliesRequest>): QueryListRepliesRequest {
    const message = createBaseQueryListRepliesRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.filterByParent = object.filterByParent ?? false;
    message.parentReplyId = object.parentReplyId !== undefined && object.parentReplyId !== null ? BigInt(object.parentReplyId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.includeHidden = object.includeHidden ?? false;
    return message;
  },
  fromAmino(object: QueryListRepliesRequestAmino): QueryListRepliesRequest {
    const message = createBaseQueryListRepliesRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.filter_by_parent !== undefined && object.filter_by_parent !== null) {
      message.filterByParent = object.filter_by_parent;
    }
    if (object.parent_reply_id !== undefined && object.parent_reply_id !== null) {
      message.parentReplyId = BigInt(object.parent_reply_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.include_hidden !== undefined && object.include_hidden !== null) {
      message.includeHidden = object.include_hidden;
    }
    return message;
  },
  toAmino(message: QueryListRepliesRequest): QueryListRepliesRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.filter_by_parent = message.filterByParent === false ? undefined : message.filterByParent;
    obj.parent_reply_id = message.parentReplyId !== BigInt(0) ? message.parentReplyId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.include_hidden = message.includeHidden === false ? undefined : message.includeHidden;
    return obj;
  },
  fromAminoMsg(object: QueryListRepliesRequestAminoMsg): QueryListRepliesRequest {
    return QueryListRepliesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListRepliesRequestProtoMsg): QueryListRepliesRequest {
    return QueryListRepliesRequest.decode(message.value);
  },
  toProto(message: QueryListRepliesRequest): Uint8Array {
    return QueryListRepliesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListRepliesRequest): QueryListRepliesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListRepliesRequest",
      value: QueryListRepliesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListRepliesResponse(): QueryListRepliesResponse {
  return {
    replies: [],
    pagination: undefined
  };
}
/**
 * QueryListRepliesResponse defines the QueryListRepliesResponse message.
 * @name QueryListRepliesResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListRepliesResponse
 */
export const QueryListRepliesResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryListRepliesResponse",
  encode(message: QueryListRepliesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.replies) {
      Reply.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListRepliesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRepliesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.replies.push(Reply.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListRepliesResponse>): QueryListRepliesResponse {
    const message = createBaseQueryListRepliesResponse();
    message.replies = object.replies?.map(e => Reply.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListRepliesResponseAmino): QueryListRepliesResponse {
    const message = createBaseQueryListRepliesResponse();
    message.replies = object.replies?.map(e => Reply.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListRepliesResponse): QueryListRepliesResponseAmino {
    const obj: any = {};
    if (message.replies) {
      obj.replies = message.replies.map(e => e ? Reply.toAmino(e) : undefined);
    } else {
      obj.replies = message.replies;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListRepliesResponseAminoMsg): QueryListRepliesResponse {
    return QueryListRepliesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListRepliesResponseProtoMsg): QueryListRepliesResponse {
    return QueryListRepliesResponse.decode(message.value);
  },
  toProto(message: QueryListRepliesResponse): Uint8Array {
    return QueryListRepliesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListRepliesResponse): QueryListRepliesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListRepliesResponse",
      value: QueryListRepliesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListPostsByCreatorRequest(): QueryListPostsByCreatorRequest {
  return {
    creator: "",
    pagination: undefined,
    includeHidden: false
  };
}
/**
 * QueryListPostsByCreatorRequest defines the QueryListPostsByCreatorRequest message.
 * @name QueryListPostsByCreatorRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostsByCreatorRequest
 */
export const QueryListPostsByCreatorRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryListPostsByCreatorRequest",
  encode(message: QueryListPostsByCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.includeHidden === true) {
      writer.uint32(24).bool(message.includeHidden);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPostsByCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPostsByCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.includeHidden = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListPostsByCreatorRequest>): QueryListPostsByCreatorRequest {
    const message = createBaseQueryListPostsByCreatorRequest();
    message.creator = object.creator ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.includeHidden = object.includeHidden ?? false;
    return message;
  },
  fromAmino(object: QueryListPostsByCreatorRequestAmino): QueryListPostsByCreatorRequest {
    const message = createBaseQueryListPostsByCreatorRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.include_hidden !== undefined && object.include_hidden !== null) {
      message.includeHidden = object.include_hidden;
    }
    return message;
  },
  toAmino(message: QueryListPostsByCreatorRequest): QueryListPostsByCreatorRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.include_hidden = message.includeHidden === false ? undefined : message.includeHidden;
    return obj;
  },
  fromAminoMsg(object: QueryListPostsByCreatorRequestAminoMsg): QueryListPostsByCreatorRequest {
    return QueryListPostsByCreatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPostsByCreatorRequestProtoMsg): QueryListPostsByCreatorRequest {
    return QueryListPostsByCreatorRequest.decode(message.value);
  },
  toProto(message: QueryListPostsByCreatorRequest): Uint8Array {
    return QueryListPostsByCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListPostsByCreatorRequest): QueryListPostsByCreatorRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListPostsByCreatorRequest",
      value: QueryListPostsByCreatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListPostsByCreatorResponse(): QueryListPostsByCreatorResponse {
  return {
    posts: [],
    pagination: undefined
  };
}
/**
 * QueryListPostsByCreatorResponse defines the QueryListPostsByCreatorResponse message.
 * @name QueryListPostsByCreatorResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostsByCreatorResponse
 */
export const QueryListPostsByCreatorResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryListPostsByCreatorResponse",
  encode(message: QueryListPostsByCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPostsByCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPostsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.posts.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListPostsByCreatorResponse>): QueryListPostsByCreatorResponse {
    const message = createBaseQueryListPostsByCreatorResponse();
    message.posts = object.posts?.map(e => Post.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListPostsByCreatorResponseAmino): QueryListPostsByCreatorResponse {
    const message = createBaseQueryListPostsByCreatorResponse();
    message.posts = object.posts?.map(e => Post.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListPostsByCreatorResponse): QueryListPostsByCreatorResponseAmino {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.posts = message.posts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListPostsByCreatorResponseAminoMsg): QueryListPostsByCreatorResponse {
    return QueryListPostsByCreatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPostsByCreatorResponseProtoMsg): QueryListPostsByCreatorResponse {
    return QueryListPostsByCreatorResponse.decode(message.value);
  },
  toProto(message: QueryListPostsByCreatorResponse): Uint8Array {
    return QueryListPostsByCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListPostsByCreatorResponse): QueryListPostsByCreatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListPostsByCreatorResponse",
      value: QueryListPostsByCreatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReactionCountsRequest(): QueryReactionCountsRequest {
  return {
    postId: BigInt(0),
    replyId: BigInt(0)
  };
}
/**
 * QueryReactionCountsRequest defines the QueryReactionCountsRequest message.
 * @name QueryReactionCountsRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryReactionCountsRequest
 */
export const QueryReactionCountsRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryReactionCountsRequest",
  encode(message: QueryReactionCountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.replyId !== BigInt(0)) {
      writer.uint32(16).uint64(message.replyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReactionCountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReactionCountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.replyId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReactionCountsRequest>): QueryReactionCountsRequest {
    const message = createBaseQueryReactionCountsRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.replyId = object.replyId !== undefined && object.replyId !== null ? BigInt(object.replyId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryReactionCountsRequestAmino): QueryReactionCountsRequest {
    const message = createBaseQueryReactionCountsRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.reply_id !== undefined && object.reply_id !== null) {
      message.replyId = BigInt(object.reply_id);
    }
    return message;
  },
  toAmino(message: QueryReactionCountsRequest): QueryReactionCountsRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.reply_id = message.replyId !== BigInt(0) ? message.replyId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReactionCountsRequestAminoMsg): QueryReactionCountsRequest {
    return QueryReactionCountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReactionCountsRequestProtoMsg): QueryReactionCountsRequest {
    return QueryReactionCountsRequest.decode(message.value);
  },
  toProto(message: QueryReactionCountsRequest): Uint8Array {
    return QueryReactionCountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReactionCountsRequest): QueryReactionCountsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryReactionCountsRequest",
      value: QueryReactionCountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReactionCountsResponse(): QueryReactionCountsResponse {
  return {
    counts: ReactionCounts.fromPartial({})
  };
}
/**
 * QueryReactionCountsResponse defines the QueryReactionCountsResponse message.
 * @name QueryReactionCountsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryReactionCountsResponse
 */
export const QueryReactionCountsResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryReactionCountsResponse",
  encode(message: QueryReactionCountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.counts !== undefined) {
      ReactionCounts.encode(message.counts, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReactionCountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReactionCountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counts = ReactionCounts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReactionCountsResponse>): QueryReactionCountsResponse {
    const message = createBaseQueryReactionCountsResponse();
    message.counts = object.counts !== undefined && object.counts !== null ? ReactionCounts.fromPartial(object.counts) : undefined;
    return message;
  },
  fromAmino(object: QueryReactionCountsResponseAmino): QueryReactionCountsResponse {
    const message = createBaseQueryReactionCountsResponse();
    if (object.counts !== undefined && object.counts !== null) {
      message.counts = ReactionCounts.fromAmino(object.counts);
    }
    return message;
  },
  toAmino(message: QueryReactionCountsResponse): QueryReactionCountsResponseAmino {
    const obj: any = {};
    obj.counts = message.counts ? ReactionCounts.toAmino(message.counts) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReactionCountsResponseAminoMsg): QueryReactionCountsResponse {
    return QueryReactionCountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReactionCountsResponseProtoMsg): QueryReactionCountsResponse {
    return QueryReactionCountsResponse.decode(message.value);
  },
  toProto(message: QueryReactionCountsResponse): Uint8Array {
    return QueryReactionCountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReactionCountsResponse): QueryReactionCountsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryReactionCountsResponse",
      value: QueryReactionCountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserReactionRequest(): QueryUserReactionRequest {
  return {
    creator: "",
    postId: BigInt(0),
    replyId: BigInt(0)
  };
}
/**
 * QueryUserReactionRequest defines the QueryUserReactionRequest message.
 * @name QueryUserReactionRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryUserReactionRequest
 */
export const QueryUserReactionRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryUserReactionRequest",
  encode(message: QueryUserReactionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.replyId !== BigInt(0)) {
      writer.uint32(24).uint64(message.replyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserReactionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserReactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.postId = reader.uint64();
          break;
        case 3:
          message.replyId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUserReactionRequest>): QueryUserReactionRequest {
    const message = createBaseQueryUserReactionRequest();
    message.creator = object.creator ?? "";
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.replyId = object.replyId !== undefined && object.replyId !== null ? BigInt(object.replyId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryUserReactionRequestAmino): QueryUserReactionRequest {
    const message = createBaseQueryUserReactionRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.reply_id !== undefined && object.reply_id !== null) {
      message.replyId = BigInt(object.reply_id);
    }
    return message;
  },
  toAmino(message: QueryUserReactionRequest): QueryUserReactionRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.reply_id = message.replyId !== BigInt(0) ? message.replyId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserReactionRequestAminoMsg): QueryUserReactionRequest {
    return QueryUserReactionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserReactionRequestProtoMsg): QueryUserReactionRequest {
    return QueryUserReactionRequest.decode(message.value);
  },
  toProto(message: QueryUserReactionRequest): Uint8Array {
    return QueryUserReactionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserReactionRequest): QueryUserReactionRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryUserReactionRequest",
      value: QueryUserReactionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserReactionResponse(): QueryUserReactionResponse {
  return {
    reaction: undefined
  };
}
/**
 * QueryUserReactionResponse defines the QueryUserReactionResponse message.
 * @name QueryUserReactionResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryUserReactionResponse
 */
export const QueryUserReactionResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryUserReactionResponse",
  encode(message: QueryUserReactionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reaction !== undefined) {
      Reaction.encode(message.reaction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserReactionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserReactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reaction = Reaction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUserReactionResponse>): QueryUserReactionResponse {
    const message = createBaseQueryUserReactionResponse();
    message.reaction = object.reaction !== undefined && object.reaction !== null ? Reaction.fromPartial(object.reaction) : undefined;
    return message;
  },
  fromAmino(object: QueryUserReactionResponseAmino): QueryUserReactionResponse {
    const message = createBaseQueryUserReactionResponse();
    if (object.reaction !== undefined && object.reaction !== null) {
      message.reaction = Reaction.fromAmino(object.reaction);
    }
    return message;
  },
  toAmino(message: QueryUserReactionResponse): QueryUserReactionResponseAmino {
    const obj: any = {};
    obj.reaction = message.reaction ? Reaction.toAmino(message.reaction) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserReactionResponseAminoMsg): QueryUserReactionResponse {
    return QueryUserReactionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserReactionResponseProtoMsg): QueryUserReactionResponse {
    return QueryUserReactionResponse.decode(message.value);
  },
  toProto(message: QueryUserReactionResponse): Uint8Array {
    return QueryUserReactionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserReactionResponse): QueryUserReactionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryUserReactionResponse",
      value: QueryUserReactionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListReactionsRequest(): QueryListReactionsRequest {
  return {
    postId: BigInt(0),
    replyId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryListReactionsRequest defines the QueryListReactionsRequest message.
 * @name QueryListReactionsRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListReactionsRequest
 */
export const QueryListReactionsRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryListReactionsRequest",
  encode(message: QueryListReactionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.replyId !== BigInt(0)) {
      writer.uint32(16).uint64(message.replyId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListReactionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListReactionsRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListReactionsRequest>): QueryListReactionsRequest {
    const message = createBaseQueryListReactionsRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.replyId = object.replyId !== undefined && object.replyId !== null ? BigInt(object.replyId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListReactionsRequestAmino): QueryListReactionsRequest {
    const message = createBaseQueryListReactionsRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.reply_id !== undefined && object.reply_id !== null) {
      message.replyId = BigInt(object.reply_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListReactionsRequest): QueryListReactionsRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.reply_id = message.replyId !== BigInt(0) ? message.replyId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListReactionsRequestAminoMsg): QueryListReactionsRequest {
    return QueryListReactionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListReactionsRequestProtoMsg): QueryListReactionsRequest {
    return QueryListReactionsRequest.decode(message.value);
  },
  toProto(message: QueryListReactionsRequest): Uint8Array {
    return QueryListReactionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListReactionsRequest): QueryListReactionsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListReactionsRequest",
      value: QueryListReactionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListReactionsResponse(): QueryListReactionsResponse {
  return {
    reactions: [],
    pagination: undefined
  };
}
/**
 * QueryListReactionsResponse defines the QueryListReactionsResponse message.
 * @name QueryListReactionsResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListReactionsResponse
 */
export const QueryListReactionsResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryListReactionsResponse",
  encode(message: QueryListReactionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reactions) {
      Reaction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListReactionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListReactionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reactions.push(Reaction.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListReactionsResponse>): QueryListReactionsResponse {
    const message = createBaseQueryListReactionsResponse();
    message.reactions = object.reactions?.map(e => Reaction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListReactionsResponseAmino): QueryListReactionsResponse {
    const message = createBaseQueryListReactionsResponse();
    message.reactions = object.reactions?.map(e => Reaction.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListReactionsResponse): QueryListReactionsResponseAmino {
    const obj: any = {};
    if (message.reactions) {
      obj.reactions = message.reactions.map(e => e ? Reaction.toAmino(e) : undefined);
    } else {
      obj.reactions = message.reactions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListReactionsResponseAminoMsg): QueryListReactionsResponse {
    return QueryListReactionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListReactionsResponseProtoMsg): QueryListReactionsResponse {
    return QueryListReactionsResponse.decode(message.value);
  },
  toProto(message: QueryListReactionsResponse): Uint8Array {
    return QueryListReactionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListReactionsResponse): QueryListReactionsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListReactionsResponse",
      value: QueryListReactionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListReactionsByCreatorRequest(): QueryListReactionsByCreatorRequest {
  return {
    creator: "",
    pagination: undefined
  };
}
/**
 * QueryListReactionsByCreatorRequest defines the QueryListReactionsByCreatorRequest message.
 * @name QueryListReactionsByCreatorRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListReactionsByCreatorRequest
 */
export const QueryListReactionsByCreatorRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryListReactionsByCreatorRequest",
  encode(message: QueryListReactionsByCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListReactionsByCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListReactionsByCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListReactionsByCreatorRequest>): QueryListReactionsByCreatorRequest {
    const message = createBaseQueryListReactionsByCreatorRequest();
    message.creator = object.creator ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListReactionsByCreatorRequestAmino): QueryListReactionsByCreatorRequest {
    const message = createBaseQueryListReactionsByCreatorRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListReactionsByCreatorRequest): QueryListReactionsByCreatorRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListReactionsByCreatorRequestAminoMsg): QueryListReactionsByCreatorRequest {
    return QueryListReactionsByCreatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListReactionsByCreatorRequestProtoMsg): QueryListReactionsByCreatorRequest {
    return QueryListReactionsByCreatorRequest.decode(message.value);
  },
  toProto(message: QueryListReactionsByCreatorRequest): Uint8Array {
    return QueryListReactionsByCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListReactionsByCreatorRequest): QueryListReactionsByCreatorRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListReactionsByCreatorRequest",
      value: QueryListReactionsByCreatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListReactionsByCreatorResponse(): QueryListReactionsByCreatorResponse {
  return {
    reactions: [],
    pagination: undefined
  };
}
/**
 * QueryListReactionsByCreatorResponse defines the QueryListReactionsByCreatorResponse message.
 * @name QueryListReactionsByCreatorResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListReactionsByCreatorResponse
 */
export const QueryListReactionsByCreatorResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryListReactionsByCreatorResponse",
  encode(message: QueryListReactionsByCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reactions) {
      Reaction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListReactionsByCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListReactionsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reactions.push(Reaction.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListReactionsByCreatorResponse>): QueryListReactionsByCreatorResponse {
    const message = createBaseQueryListReactionsByCreatorResponse();
    message.reactions = object.reactions?.map(e => Reaction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListReactionsByCreatorResponseAmino): QueryListReactionsByCreatorResponse {
    const message = createBaseQueryListReactionsByCreatorResponse();
    message.reactions = object.reactions?.map(e => Reaction.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListReactionsByCreatorResponse): QueryListReactionsByCreatorResponseAmino {
    const obj: any = {};
    if (message.reactions) {
      obj.reactions = message.reactions.map(e => e ? Reaction.toAmino(e) : undefined);
    } else {
      obj.reactions = message.reactions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListReactionsByCreatorResponseAminoMsg): QueryListReactionsByCreatorResponse {
    return QueryListReactionsByCreatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListReactionsByCreatorResponseProtoMsg): QueryListReactionsByCreatorResponse {
    return QueryListReactionsByCreatorResponse.decode(message.value);
  },
  toProto(message: QueryListReactionsByCreatorResponse): Uint8Array {
    return QueryListReactionsByCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListReactionsByCreatorResponse): QueryListReactionsByCreatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListReactionsByCreatorResponse",
      value: QueryListReactionsByCreatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListExpiringContentRequest(): QueryListExpiringContentRequest {
  return {
    expiresBefore: BigInt(0),
    contentType: "",
    pagination: undefined
  };
}
/**
 * QueryListExpiringContentRequest defines the QueryListExpiringContentRequest message.
 * @name QueryListExpiringContentRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListExpiringContentRequest
 */
export const QueryListExpiringContentRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryListExpiringContentRequest",
  encode(message: QueryListExpiringContentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expiresBefore !== BigInt(0)) {
      writer.uint32(8).int64(message.expiresBefore);
    }
    if (message.contentType !== "") {
      writer.uint32(18).string(message.contentType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListExpiringContentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListExpiringContentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiresBefore = reader.int64();
          break;
        case 2:
          message.contentType = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListExpiringContentRequest>): QueryListExpiringContentRequest {
    const message = createBaseQueryListExpiringContentRequest();
    message.expiresBefore = object.expiresBefore !== undefined && object.expiresBefore !== null ? BigInt(object.expiresBefore.toString()) : BigInt(0);
    message.contentType = object.contentType ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListExpiringContentRequestAmino): QueryListExpiringContentRequest {
    const message = createBaseQueryListExpiringContentRequest();
    if (object.expires_before !== undefined && object.expires_before !== null) {
      message.expiresBefore = BigInt(object.expires_before);
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListExpiringContentRequest): QueryListExpiringContentRequestAmino {
    const obj: any = {};
    obj.expires_before = message.expiresBefore !== BigInt(0) ? message.expiresBefore?.toString() : undefined;
    obj.content_type = message.contentType === "" ? undefined : message.contentType;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListExpiringContentRequestAminoMsg): QueryListExpiringContentRequest {
    return QueryListExpiringContentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListExpiringContentRequestProtoMsg): QueryListExpiringContentRequest {
    return QueryListExpiringContentRequest.decode(message.value);
  },
  toProto(message: QueryListExpiringContentRequest): Uint8Array {
    return QueryListExpiringContentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListExpiringContentRequest): QueryListExpiringContentRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListExpiringContentRequest",
      value: QueryListExpiringContentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListExpiringContentResponse(): QueryListExpiringContentResponse {
  return {
    posts: [],
    replies: [],
    pagination: undefined
  };
}
/**
 * QueryListExpiringContentResponse defines the QueryListExpiringContentResponse message.
 * @name QueryListExpiringContentResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListExpiringContentResponse
 */
export const QueryListExpiringContentResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryListExpiringContentResponse",
  encode(message: QueryListExpiringContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.replies) {
      Reply.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListExpiringContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListExpiringContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.posts.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.replies.push(Reply.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListExpiringContentResponse>): QueryListExpiringContentResponse {
    const message = createBaseQueryListExpiringContentResponse();
    message.posts = object.posts?.map(e => Post.fromPartial(e)) || [];
    message.replies = object.replies?.map(e => Reply.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListExpiringContentResponseAmino): QueryListExpiringContentResponse {
    const message = createBaseQueryListExpiringContentResponse();
    message.posts = object.posts?.map(e => Post.fromAmino(e)) || [];
    message.replies = object.replies?.map(e => Reply.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListExpiringContentResponse): QueryListExpiringContentResponseAmino {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.posts = message.posts;
    }
    if (message.replies) {
      obj.replies = message.replies.map(e => e ? Reply.toAmino(e) : undefined);
    } else {
      obj.replies = message.replies;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListExpiringContentResponseAminoMsg): QueryListExpiringContentResponse {
    return QueryListExpiringContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListExpiringContentResponseProtoMsg): QueryListExpiringContentResponse {
    return QueryListExpiringContentResponse.decode(message.value);
  },
  toProto(message: QueryListExpiringContentResponse): Uint8Array {
    return QueryListExpiringContentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListExpiringContentResponse): QueryListExpiringContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListExpiringContentResponse",
      value: QueryListExpiringContentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListPostsByTagRequest(): QueryListPostsByTagRequest {
  return {
    tag: "",
    pagination: undefined
  };
}
/**
 * QueryListPostsByTagRequest defines the QueryListPostsByTagRequest message.
 * @name QueryListPostsByTagRequest
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostsByTagRequest
 */
export const QueryListPostsByTagRequest = {
  typeUrl: "/sparkdream.blog.v1.QueryListPostsByTagRequest",
  encode(message: QueryListPostsByTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPostsByTagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPostsByTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListPostsByTagRequest>): QueryListPostsByTagRequest {
    const message = createBaseQueryListPostsByTagRequest();
    message.tag = object.tag ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListPostsByTagRequestAmino): QueryListPostsByTagRequest {
    const message = createBaseQueryListPostsByTagRequest();
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListPostsByTagRequest): QueryListPostsByTagRequestAmino {
    const obj: any = {};
    obj.tag = message.tag === "" ? undefined : message.tag;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListPostsByTagRequestAminoMsg): QueryListPostsByTagRequest {
    return QueryListPostsByTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPostsByTagRequestProtoMsg): QueryListPostsByTagRequest {
    return QueryListPostsByTagRequest.decode(message.value);
  },
  toProto(message: QueryListPostsByTagRequest): Uint8Array {
    return QueryListPostsByTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListPostsByTagRequest): QueryListPostsByTagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListPostsByTagRequest",
      value: QueryListPostsByTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListPostsByTagResponse(): QueryListPostsByTagResponse {
  return {
    posts: [],
    pagination: undefined
  };
}
/**
 * QueryListPostsByTagResponse defines the QueryListPostsByTagResponse message.
 * @name QueryListPostsByTagResponse
 * @package sparkdream.blog.v1
 * @see proto type: sparkdream.blog.v1.QueryListPostsByTagResponse
 */
export const QueryListPostsByTagResponse = {
  typeUrl: "/sparkdream.blog.v1.QueryListPostsByTagResponse",
  encode(message: QueryListPostsByTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListPostsByTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListPostsByTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.posts.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryListPostsByTagResponse>): QueryListPostsByTagResponse {
    const message = createBaseQueryListPostsByTagResponse();
    message.posts = object.posts?.map(e => Post.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListPostsByTagResponseAmino): QueryListPostsByTagResponse {
    const message = createBaseQueryListPostsByTagResponse();
    message.posts = object.posts?.map(e => Post.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListPostsByTagResponse): QueryListPostsByTagResponseAmino {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.posts = message.posts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListPostsByTagResponseAminoMsg): QueryListPostsByTagResponse {
    return QueryListPostsByTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListPostsByTagResponseProtoMsg): QueryListPostsByTagResponse {
    return QueryListPostsByTagResponse.decode(message.value);
  },
  toProto(message: QueryListPostsByTagResponse): Uint8Array {
    return QueryListPostsByTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListPostsByTagResponse): QueryListPostsByTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.blog.v1.QueryListPostsByTagResponse",
      value: QueryListPostsByTagResponse.encode(message).finish()
    };
  }
};