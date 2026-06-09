//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { Post, PostAmino } from "./post";
import { UserRateLimit, UserRateLimitAmino } from "./user_rate_limit";
import { UserReactionLimit, UserReactionLimitAmino } from "./user_reaction_limit";
import { SentinelActivity, SentinelActivityAmino } from "./sentinel_activity";
import { HideRecord, HideRecordAmino } from "./hide_record";
import { ThreadLockRecord, ThreadLockRecordAmino } from "./thread_lock_record";
import { ThreadMoveRecord, ThreadMoveRecordAmino } from "./thread_move_record";
import { PostFlag, PostFlagAmino } from "./post_flag";
import { Bounty, BountyAmino } from "./bounty";
import { ThreadMetadata, ThreadMetadataAmino } from "./thread_metadata";
import { ThreadFollow, ThreadFollowAmino } from "./thread_follow";
import { ThreadFollowCount, ThreadFollowCountAmino } from "./thread_follow_count";
import { ArchiveMetadata, ArchiveMetadataAmino } from "./archive_metadata";
import { PostConvictionStake, PostConvictionStakeAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryGetPostRequest defines the QueryGetPostRequest message.
 * @name QueryGetPostRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostRequest
 */
export interface QueryGetPostRequest {
  postId: bigint;
}
export interface QueryGetPostRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostRequest";
  value: Uint8Array;
}
/**
 * QueryGetPostRequest defines the QueryGetPostRequest message.
 * @name QueryGetPostRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostRequest
 */
export interface QueryGetPostRequestAmino {
  post_id?: string;
}
export interface QueryGetPostRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetPostRequest";
  value: QueryGetPostRequestAmino;
}
/**
 * QueryGetPostResponse defines the QueryGetPostResponse message.
 * @name QueryGetPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostResponse
 */
export interface QueryGetPostResponse {
  post: Post;
}
export interface QueryGetPostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostResponse";
  value: Uint8Array;
}
/**
 * QueryGetPostResponse defines the QueryGetPostResponse message.
 * @name QueryGetPostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostResponse
 */
export interface QueryGetPostResponseAmino {
  post?: PostAmino;
}
export interface QueryGetPostResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetPostResponse";
  value: QueryGetPostResponseAmino;
}
/**
 * QueryAllPostRequest defines the QueryAllPostRequest message.
 * @name QueryAllPostRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostRequest
 */
export interface QueryAllPostRequest {
  pagination?: PageRequest;
}
export interface QueryAllPostRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostRequest";
  value: Uint8Array;
}
/**
 * QueryAllPostRequest defines the QueryAllPostRequest message.
 * @name QueryAllPostRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostRequest
 */
export interface QueryAllPostRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPostRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllPostRequest";
  value: QueryAllPostRequestAmino;
}
/**
 * QueryAllPostResponse defines the QueryAllPostResponse message.
 * @name QueryAllPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostResponse
 */
export interface QueryAllPostResponse {
  post: Post[];
  pagination?: PageResponse;
}
export interface QueryAllPostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostResponse";
  value: Uint8Array;
}
/**
 * QueryAllPostResponse defines the QueryAllPostResponse message.
 * @name QueryAllPostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostResponse
 */
export interface QueryAllPostResponseAmino {
  post?: PostAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPostResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllPostResponse";
  value: QueryAllPostResponseAmino;
}
/**
 * QueryGetUserRateLimitRequest defines the QueryGetUserRateLimitRequest message.
 * @name QueryGetUserRateLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserRateLimitRequest
 */
export interface QueryGetUserRateLimitRequest {
  userAddress: string;
}
export interface QueryGetUserRateLimitRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserRateLimitRequest";
  value: Uint8Array;
}
/**
 * QueryGetUserRateLimitRequest defines the QueryGetUserRateLimitRequest message.
 * @name QueryGetUserRateLimitRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserRateLimitRequest
 */
export interface QueryGetUserRateLimitRequestAmino {
  user_address?: string;
}
export interface QueryGetUserRateLimitRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetUserRateLimitRequest";
  value: QueryGetUserRateLimitRequestAmino;
}
/**
 * QueryGetUserRateLimitResponse defines the QueryGetUserRateLimitResponse message.
 * @name QueryGetUserRateLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserRateLimitResponse
 */
export interface QueryGetUserRateLimitResponse {
  userRateLimit: UserRateLimit;
}
export interface QueryGetUserRateLimitResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserRateLimitResponse";
  value: Uint8Array;
}
/**
 * QueryGetUserRateLimitResponse defines the QueryGetUserRateLimitResponse message.
 * @name QueryGetUserRateLimitResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserRateLimitResponse
 */
export interface QueryGetUserRateLimitResponseAmino {
  user_rate_limit?: UserRateLimitAmino;
}
export interface QueryGetUserRateLimitResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetUserRateLimitResponse";
  value: QueryGetUserRateLimitResponseAmino;
}
/**
 * QueryAllUserRateLimitRequest defines the QueryAllUserRateLimitRequest message.
 * @name QueryAllUserRateLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserRateLimitRequest
 */
export interface QueryAllUserRateLimitRequest {
  pagination?: PageRequest;
}
export interface QueryAllUserRateLimitRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserRateLimitRequest";
  value: Uint8Array;
}
/**
 * QueryAllUserRateLimitRequest defines the QueryAllUserRateLimitRequest message.
 * @name QueryAllUserRateLimitRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserRateLimitRequest
 */
export interface QueryAllUserRateLimitRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllUserRateLimitRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllUserRateLimitRequest";
  value: QueryAllUserRateLimitRequestAmino;
}
/**
 * QueryAllUserRateLimitResponse defines the QueryAllUserRateLimitResponse message.
 * @name QueryAllUserRateLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserRateLimitResponse
 */
export interface QueryAllUserRateLimitResponse {
  userRateLimit: UserRateLimit[];
  pagination?: PageResponse;
}
export interface QueryAllUserRateLimitResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserRateLimitResponse";
  value: Uint8Array;
}
/**
 * QueryAllUserRateLimitResponse defines the QueryAllUserRateLimitResponse message.
 * @name QueryAllUserRateLimitResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserRateLimitResponse
 */
export interface QueryAllUserRateLimitResponseAmino {
  user_rate_limit?: UserRateLimitAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllUserRateLimitResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllUserRateLimitResponse";
  value: QueryAllUserRateLimitResponseAmino;
}
/**
 * QueryGetUserReactionLimitRequest defines the QueryGetUserReactionLimitRequest message.
 * @name QueryGetUserReactionLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserReactionLimitRequest
 */
export interface QueryGetUserReactionLimitRequest {
  userAddress: string;
}
export interface QueryGetUserReactionLimitRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserReactionLimitRequest";
  value: Uint8Array;
}
/**
 * QueryGetUserReactionLimitRequest defines the QueryGetUserReactionLimitRequest message.
 * @name QueryGetUserReactionLimitRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserReactionLimitRequest
 */
export interface QueryGetUserReactionLimitRequestAmino {
  user_address?: string;
}
export interface QueryGetUserReactionLimitRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetUserReactionLimitRequest";
  value: QueryGetUserReactionLimitRequestAmino;
}
/**
 * QueryGetUserReactionLimitResponse defines the QueryGetUserReactionLimitResponse message.
 * @name QueryGetUserReactionLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserReactionLimitResponse
 */
export interface QueryGetUserReactionLimitResponse {
  userReactionLimit: UserReactionLimit;
}
export interface QueryGetUserReactionLimitResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserReactionLimitResponse";
  value: Uint8Array;
}
/**
 * QueryGetUserReactionLimitResponse defines the QueryGetUserReactionLimitResponse message.
 * @name QueryGetUserReactionLimitResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserReactionLimitResponse
 */
export interface QueryGetUserReactionLimitResponseAmino {
  user_reaction_limit?: UserReactionLimitAmino;
}
export interface QueryGetUserReactionLimitResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetUserReactionLimitResponse";
  value: QueryGetUserReactionLimitResponseAmino;
}
/**
 * QueryAllUserReactionLimitRequest defines the QueryAllUserReactionLimitRequest message.
 * @name QueryAllUserReactionLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserReactionLimitRequest
 */
export interface QueryAllUserReactionLimitRequest {
  pagination?: PageRequest;
}
export interface QueryAllUserReactionLimitRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserReactionLimitRequest";
  value: Uint8Array;
}
/**
 * QueryAllUserReactionLimitRequest defines the QueryAllUserReactionLimitRequest message.
 * @name QueryAllUserReactionLimitRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserReactionLimitRequest
 */
export interface QueryAllUserReactionLimitRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllUserReactionLimitRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllUserReactionLimitRequest";
  value: QueryAllUserReactionLimitRequestAmino;
}
/**
 * QueryAllUserReactionLimitResponse defines the QueryAllUserReactionLimitResponse message.
 * @name QueryAllUserReactionLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserReactionLimitResponse
 */
export interface QueryAllUserReactionLimitResponse {
  userReactionLimit: UserReactionLimit[];
  pagination?: PageResponse;
}
export interface QueryAllUserReactionLimitResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserReactionLimitResponse";
  value: Uint8Array;
}
/**
 * QueryAllUserReactionLimitResponse defines the QueryAllUserReactionLimitResponse message.
 * @name QueryAllUserReactionLimitResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserReactionLimitResponse
 */
export interface QueryAllUserReactionLimitResponseAmino {
  user_reaction_limit?: UserReactionLimitAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllUserReactionLimitResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllUserReactionLimitResponse";
  value: QueryAllUserReactionLimitResponseAmino;
}
/**
 * QueryGetSentinelActivityRequest defines the QueryGetSentinelActivityRequest message.
 * @name QueryGetSentinelActivityRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetSentinelActivityRequest
 */
export interface QueryGetSentinelActivityRequest {
  address: string;
}
export interface QueryGetSentinelActivityRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetSentinelActivityRequest";
  value: Uint8Array;
}
/**
 * QueryGetSentinelActivityRequest defines the QueryGetSentinelActivityRequest message.
 * @name QueryGetSentinelActivityRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetSentinelActivityRequest
 */
export interface QueryGetSentinelActivityRequestAmino {
  address?: string;
}
export interface QueryGetSentinelActivityRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetSentinelActivityRequest";
  value: QueryGetSentinelActivityRequestAmino;
}
/**
 * QueryGetSentinelActivityResponse defines the QueryGetSentinelActivityResponse message.
 * @name QueryGetSentinelActivityResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetSentinelActivityResponse
 */
export interface QueryGetSentinelActivityResponse {
  sentinelActivity: SentinelActivity;
}
export interface QueryGetSentinelActivityResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetSentinelActivityResponse";
  value: Uint8Array;
}
/**
 * QueryGetSentinelActivityResponse defines the QueryGetSentinelActivityResponse message.
 * @name QueryGetSentinelActivityResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetSentinelActivityResponse
 */
export interface QueryGetSentinelActivityResponseAmino {
  sentinel_activity?: SentinelActivityAmino;
}
export interface QueryGetSentinelActivityResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetSentinelActivityResponse";
  value: QueryGetSentinelActivityResponseAmino;
}
/**
 * QueryAllSentinelActivityRequest defines the QueryAllSentinelActivityRequest message.
 * @name QueryAllSentinelActivityRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllSentinelActivityRequest
 */
export interface QueryAllSentinelActivityRequest {
  pagination?: PageRequest;
}
export interface QueryAllSentinelActivityRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllSentinelActivityRequest";
  value: Uint8Array;
}
/**
 * QueryAllSentinelActivityRequest defines the QueryAllSentinelActivityRequest message.
 * @name QueryAllSentinelActivityRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllSentinelActivityRequest
 */
export interface QueryAllSentinelActivityRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllSentinelActivityRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllSentinelActivityRequest";
  value: QueryAllSentinelActivityRequestAmino;
}
/**
 * QueryAllSentinelActivityResponse defines the QueryAllSentinelActivityResponse message.
 * @name QueryAllSentinelActivityResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllSentinelActivityResponse
 */
export interface QueryAllSentinelActivityResponse {
  sentinelActivity: SentinelActivity[];
  pagination?: PageResponse;
}
export interface QueryAllSentinelActivityResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllSentinelActivityResponse";
  value: Uint8Array;
}
/**
 * QueryAllSentinelActivityResponse defines the QueryAllSentinelActivityResponse message.
 * @name QueryAllSentinelActivityResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllSentinelActivityResponse
 */
export interface QueryAllSentinelActivityResponseAmino {
  sentinel_activity?: SentinelActivityAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllSentinelActivityResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllSentinelActivityResponse";
  value: QueryAllSentinelActivityResponseAmino;
}
/**
 * QueryGetHideRecordRequest defines the QueryGetHideRecordRequest message.
 * @name QueryGetHideRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetHideRecordRequest
 */
export interface QueryGetHideRecordRequest {
  postId: bigint;
}
export interface QueryGetHideRecordRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetHideRecordRequest";
  value: Uint8Array;
}
/**
 * QueryGetHideRecordRequest defines the QueryGetHideRecordRequest message.
 * @name QueryGetHideRecordRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetHideRecordRequest
 */
export interface QueryGetHideRecordRequestAmino {
  post_id?: string;
}
export interface QueryGetHideRecordRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetHideRecordRequest";
  value: QueryGetHideRecordRequestAmino;
}
/**
 * QueryGetHideRecordResponse defines the QueryGetHideRecordResponse message.
 * @name QueryGetHideRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetHideRecordResponse
 */
export interface QueryGetHideRecordResponse {
  hideRecord: HideRecord;
}
export interface QueryGetHideRecordResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetHideRecordResponse";
  value: Uint8Array;
}
/**
 * QueryGetHideRecordResponse defines the QueryGetHideRecordResponse message.
 * @name QueryGetHideRecordResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetHideRecordResponse
 */
export interface QueryGetHideRecordResponseAmino {
  hide_record?: HideRecordAmino;
}
export interface QueryGetHideRecordResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetHideRecordResponse";
  value: QueryGetHideRecordResponseAmino;
}
/**
 * QueryAllHideRecordRequest defines the QueryAllHideRecordRequest message.
 * @name QueryAllHideRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllHideRecordRequest
 */
export interface QueryAllHideRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllHideRecordRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllHideRecordRequest";
  value: Uint8Array;
}
/**
 * QueryAllHideRecordRequest defines the QueryAllHideRecordRequest message.
 * @name QueryAllHideRecordRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllHideRecordRequest
 */
export interface QueryAllHideRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllHideRecordRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllHideRecordRequest";
  value: QueryAllHideRecordRequestAmino;
}
/**
 * QueryAllHideRecordResponse defines the QueryAllHideRecordResponse message.
 * @name QueryAllHideRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllHideRecordResponse
 */
export interface QueryAllHideRecordResponse {
  hideRecord: HideRecord[];
  pagination?: PageResponse;
}
export interface QueryAllHideRecordResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllHideRecordResponse";
  value: Uint8Array;
}
/**
 * QueryAllHideRecordResponse defines the QueryAllHideRecordResponse message.
 * @name QueryAllHideRecordResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllHideRecordResponse
 */
export interface QueryAllHideRecordResponseAmino {
  hide_record?: HideRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllHideRecordResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllHideRecordResponse";
  value: QueryAllHideRecordResponseAmino;
}
/**
 * QueryGetThreadLockRecordRequest defines the QueryGetThreadLockRecordRequest message.
 * @name QueryGetThreadLockRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadLockRecordRequest
 */
export interface QueryGetThreadLockRecordRequest {
  rootId: bigint;
}
export interface QueryGetThreadLockRecordRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadLockRecordRequest";
  value: Uint8Array;
}
/**
 * QueryGetThreadLockRecordRequest defines the QueryGetThreadLockRecordRequest message.
 * @name QueryGetThreadLockRecordRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadLockRecordRequest
 */
export interface QueryGetThreadLockRecordRequestAmino {
  root_id?: string;
}
export interface QueryGetThreadLockRecordRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadLockRecordRequest";
  value: QueryGetThreadLockRecordRequestAmino;
}
/**
 * QueryGetThreadLockRecordResponse defines the QueryGetThreadLockRecordResponse message.
 * @name QueryGetThreadLockRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadLockRecordResponse
 */
export interface QueryGetThreadLockRecordResponse {
  threadLockRecord: ThreadLockRecord;
}
export interface QueryGetThreadLockRecordResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadLockRecordResponse";
  value: Uint8Array;
}
/**
 * QueryGetThreadLockRecordResponse defines the QueryGetThreadLockRecordResponse message.
 * @name QueryGetThreadLockRecordResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadLockRecordResponse
 */
export interface QueryGetThreadLockRecordResponseAmino {
  thread_lock_record?: ThreadLockRecordAmino;
}
export interface QueryGetThreadLockRecordResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadLockRecordResponse";
  value: QueryGetThreadLockRecordResponseAmino;
}
/**
 * QueryAllThreadLockRecordRequest defines the QueryAllThreadLockRecordRequest message.
 * @name QueryAllThreadLockRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadLockRecordRequest
 */
export interface QueryAllThreadLockRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllThreadLockRecordRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadLockRecordRequest";
  value: Uint8Array;
}
/**
 * QueryAllThreadLockRecordRequest defines the QueryAllThreadLockRecordRequest message.
 * @name QueryAllThreadLockRecordRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadLockRecordRequest
 */
export interface QueryAllThreadLockRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllThreadLockRecordRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadLockRecordRequest";
  value: QueryAllThreadLockRecordRequestAmino;
}
/**
 * QueryAllThreadLockRecordResponse defines the QueryAllThreadLockRecordResponse message.
 * @name QueryAllThreadLockRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadLockRecordResponse
 */
export interface QueryAllThreadLockRecordResponse {
  threadLockRecord: ThreadLockRecord[];
  pagination?: PageResponse;
}
export interface QueryAllThreadLockRecordResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadLockRecordResponse";
  value: Uint8Array;
}
/**
 * QueryAllThreadLockRecordResponse defines the QueryAllThreadLockRecordResponse message.
 * @name QueryAllThreadLockRecordResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadLockRecordResponse
 */
export interface QueryAllThreadLockRecordResponseAmino {
  thread_lock_record?: ThreadLockRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllThreadLockRecordResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadLockRecordResponse";
  value: QueryAllThreadLockRecordResponseAmino;
}
/**
 * QueryGetThreadMoveRecordRequest defines the QueryGetThreadMoveRecordRequest message.
 * @name QueryGetThreadMoveRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMoveRecordRequest
 */
export interface QueryGetThreadMoveRecordRequest {
  rootId: bigint;
}
export interface QueryGetThreadMoveRecordRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMoveRecordRequest";
  value: Uint8Array;
}
/**
 * QueryGetThreadMoveRecordRequest defines the QueryGetThreadMoveRecordRequest message.
 * @name QueryGetThreadMoveRecordRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMoveRecordRequest
 */
export interface QueryGetThreadMoveRecordRequestAmino {
  root_id?: string;
}
export interface QueryGetThreadMoveRecordRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadMoveRecordRequest";
  value: QueryGetThreadMoveRecordRequestAmino;
}
/**
 * QueryGetThreadMoveRecordResponse defines the QueryGetThreadMoveRecordResponse message.
 * @name QueryGetThreadMoveRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMoveRecordResponse
 */
export interface QueryGetThreadMoveRecordResponse {
  threadMoveRecord: ThreadMoveRecord;
}
export interface QueryGetThreadMoveRecordResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMoveRecordResponse";
  value: Uint8Array;
}
/**
 * QueryGetThreadMoveRecordResponse defines the QueryGetThreadMoveRecordResponse message.
 * @name QueryGetThreadMoveRecordResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMoveRecordResponse
 */
export interface QueryGetThreadMoveRecordResponseAmino {
  thread_move_record?: ThreadMoveRecordAmino;
}
export interface QueryGetThreadMoveRecordResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadMoveRecordResponse";
  value: QueryGetThreadMoveRecordResponseAmino;
}
/**
 * QueryAllThreadMoveRecordRequest defines the QueryAllThreadMoveRecordRequest message.
 * @name QueryAllThreadMoveRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMoveRecordRequest
 */
export interface QueryAllThreadMoveRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllThreadMoveRecordRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMoveRecordRequest";
  value: Uint8Array;
}
/**
 * QueryAllThreadMoveRecordRequest defines the QueryAllThreadMoveRecordRequest message.
 * @name QueryAllThreadMoveRecordRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMoveRecordRequest
 */
export interface QueryAllThreadMoveRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllThreadMoveRecordRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadMoveRecordRequest";
  value: QueryAllThreadMoveRecordRequestAmino;
}
/**
 * QueryAllThreadMoveRecordResponse defines the QueryAllThreadMoveRecordResponse message.
 * @name QueryAllThreadMoveRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMoveRecordResponse
 */
export interface QueryAllThreadMoveRecordResponse {
  threadMoveRecord: ThreadMoveRecord[];
  pagination?: PageResponse;
}
export interface QueryAllThreadMoveRecordResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMoveRecordResponse";
  value: Uint8Array;
}
/**
 * QueryAllThreadMoveRecordResponse defines the QueryAllThreadMoveRecordResponse message.
 * @name QueryAllThreadMoveRecordResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMoveRecordResponse
 */
export interface QueryAllThreadMoveRecordResponseAmino {
  thread_move_record?: ThreadMoveRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllThreadMoveRecordResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadMoveRecordResponse";
  value: QueryAllThreadMoveRecordResponseAmino;
}
/**
 * QueryGetPostFlagRequest defines the QueryGetPostFlagRequest message.
 * @name QueryGetPostFlagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostFlagRequest
 */
export interface QueryGetPostFlagRequest {
  postId: bigint;
}
export interface QueryGetPostFlagRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostFlagRequest";
  value: Uint8Array;
}
/**
 * QueryGetPostFlagRequest defines the QueryGetPostFlagRequest message.
 * @name QueryGetPostFlagRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostFlagRequest
 */
export interface QueryGetPostFlagRequestAmino {
  post_id?: string;
}
export interface QueryGetPostFlagRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetPostFlagRequest";
  value: QueryGetPostFlagRequestAmino;
}
/**
 * QueryGetPostFlagResponse defines the QueryGetPostFlagResponse message.
 * @name QueryGetPostFlagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostFlagResponse
 */
export interface QueryGetPostFlagResponse {
  postFlag: PostFlag;
}
export interface QueryGetPostFlagResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostFlagResponse";
  value: Uint8Array;
}
/**
 * QueryGetPostFlagResponse defines the QueryGetPostFlagResponse message.
 * @name QueryGetPostFlagResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostFlagResponse
 */
export interface QueryGetPostFlagResponseAmino {
  post_flag?: PostFlagAmino;
}
export interface QueryGetPostFlagResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetPostFlagResponse";
  value: QueryGetPostFlagResponseAmino;
}
/**
 * QueryAllPostFlagRequest defines the QueryAllPostFlagRequest message.
 * @name QueryAllPostFlagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostFlagRequest
 */
export interface QueryAllPostFlagRequest {
  pagination?: PageRequest;
}
export interface QueryAllPostFlagRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostFlagRequest";
  value: Uint8Array;
}
/**
 * QueryAllPostFlagRequest defines the QueryAllPostFlagRequest message.
 * @name QueryAllPostFlagRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostFlagRequest
 */
export interface QueryAllPostFlagRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPostFlagRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllPostFlagRequest";
  value: QueryAllPostFlagRequestAmino;
}
/**
 * QueryAllPostFlagResponse defines the QueryAllPostFlagResponse message.
 * @name QueryAllPostFlagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostFlagResponse
 */
export interface QueryAllPostFlagResponse {
  postFlag: PostFlag[];
  pagination?: PageResponse;
}
export interface QueryAllPostFlagResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostFlagResponse";
  value: Uint8Array;
}
/**
 * QueryAllPostFlagResponse defines the QueryAllPostFlagResponse message.
 * @name QueryAllPostFlagResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostFlagResponse
 */
export interface QueryAllPostFlagResponseAmino {
  post_flag?: PostFlagAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPostFlagResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllPostFlagResponse";
  value: QueryAllPostFlagResponseAmino;
}
/**
 * QueryGetBountyRequest defines the QueryGetBountyRequest message.
 * @name QueryGetBountyRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetBountyRequest
 */
export interface QueryGetBountyRequest {
  id: bigint;
}
export interface QueryGetBountyRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetBountyRequest";
  value: Uint8Array;
}
/**
 * QueryGetBountyRequest defines the QueryGetBountyRequest message.
 * @name QueryGetBountyRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetBountyRequest
 */
export interface QueryGetBountyRequestAmino {
  id?: string;
}
export interface QueryGetBountyRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetBountyRequest";
  value: QueryGetBountyRequestAmino;
}
/**
 * QueryGetBountyResponse defines the QueryGetBountyResponse message.
 * @name QueryGetBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetBountyResponse
 */
export interface QueryGetBountyResponse {
  bounty: Bounty;
}
export interface QueryGetBountyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetBountyResponse";
  value: Uint8Array;
}
/**
 * QueryGetBountyResponse defines the QueryGetBountyResponse message.
 * @name QueryGetBountyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetBountyResponse
 */
export interface QueryGetBountyResponseAmino {
  bounty?: BountyAmino;
}
export interface QueryGetBountyResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetBountyResponse";
  value: QueryGetBountyResponseAmino;
}
/**
 * QueryAllBountyRequest defines the QueryAllBountyRequest message.
 * @name QueryAllBountyRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllBountyRequest
 */
export interface QueryAllBountyRequest {
  pagination?: PageRequest;
}
export interface QueryAllBountyRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllBountyRequest";
  value: Uint8Array;
}
/**
 * QueryAllBountyRequest defines the QueryAllBountyRequest message.
 * @name QueryAllBountyRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllBountyRequest
 */
export interface QueryAllBountyRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllBountyRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllBountyRequest";
  value: QueryAllBountyRequestAmino;
}
/**
 * QueryAllBountyResponse defines the QueryAllBountyResponse message.
 * @name QueryAllBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllBountyResponse
 */
export interface QueryAllBountyResponse {
  bounty: Bounty[];
  pagination?: PageResponse;
}
export interface QueryAllBountyResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllBountyResponse";
  value: Uint8Array;
}
/**
 * QueryAllBountyResponse defines the QueryAllBountyResponse message.
 * @name QueryAllBountyResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllBountyResponse
 */
export interface QueryAllBountyResponseAmino {
  bounty?: BountyAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllBountyResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllBountyResponse";
  value: QueryAllBountyResponseAmino;
}
/**
 * QueryGetThreadMetadataRequest defines the QueryGetThreadMetadataRequest message.
 * @name QueryGetThreadMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMetadataRequest
 */
export interface QueryGetThreadMetadataRequest {
  threadId: bigint;
}
export interface QueryGetThreadMetadataRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryGetThreadMetadataRequest defines the QueryGetThreadMetadataRequest message.
 * @name QueryGetThreadMetadataRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMetadataRequest
 */
export interface QueryGetThreadMetadataRequestAmino {
  thread_id?: string;
}
export interface QueryGetThreadMetadataRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadMetadataRequest";
  value: QueryGetThreadMetadataRequestAmino;
}
/**
 * QueryGetThreadMetadataResponse defines the QueryGetThreadMetadataResponse message.
 * @name QueryGetThreadMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMetadataResponse
 */
export interface QueryGetThreadMetadataResponse {
  threadMetadata: ThreadMetadata;
}
export interface QueryGetThreadMetadataResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryGetThreadMetadataResponse defines the QueryGetThreadMetadataResponse message.
 * @name QueryGetThreadMetadataResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMetadataResponse
 */
export interface QueryGetThreadMetadataResponseAmino {
  thread_metadata?: ThreadMetadataAmino;
}
export interface QueryGetThreadMetadataResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadMetadataResponse";
  value: QueryGetThreadMetadataResponseAmino;
}
/**
 * QueryAllThreadMetadataRequest defines the QueryAllThreadMetadataRequest message.
 * @name QueryAllThreadMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMetadataRequest
 */
export interface QueryAllThreadMetadataRequest {
  pagination?: PageRequest;
}
export interface QueryAllThreadMetadataRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryAllThreadMetadataRequest defines the QueryAllThreadMetadataRequest message.
 * @name QueryAllThreadMetadataRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMetadataRequest
 */
export interface QueryAllThreadMetadataRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllThreadMetadataRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadMetadataRequest";
  value: QueryAllThreadMetadataRequestAmino;
}
/**
 * QueryAllThreadMetadataResponse defines the QueryAllThreadMetadataResponse message.
 * @name QueryAllThreadMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMetadataResponse
 */
export interface QueryAllThreadMetadataResponse {
  threadMetadata: ThreadMetadata[];
  pagination?: PageResponse;
}
export interface QueryAllThreadMetadataResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryAllThreadMetadataResponse defines the QueryAllThreadMetadataResponse message.
 * @name QueryAllThreadMetadataResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMetadataResponse
 */
export interface QueryAllThreadMetadataResponseAmino {
  thread_metadata?: ThreadMetadataAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllThreadMetadataResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadMetadataResponse";
  value: QueryAllThreadMetadataResponseAmino;
}
/**
 * QueryGetThreadFollowRequest defines the QueryGetThreadFollowRequest message.
 * @name QueryGetThreadFollowRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowRequest
 */
export interface QueryGetThreadFollowRequest {
  follower: string;
}
export interface QueryGetThreadFollowRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowRequest";
  value: Uint8Array;
}
/**
 * QueryGetThreadFollowRequest defines the QueryGetThreadFollowRequest message.
 * @name QueryGetThreadFollowRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowRequest
 */
export interface QueryGetThreadFollowRequestAmino {
  follower?: string;
}
export interface QueryGetThreadFollowRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadFollowRequest";
  value: QueryGetThreadFollowRequestAmino;
}
/**
 * QueryGetThreadFollowResponse defines the QueryGetThreadFollowResponse message.
 * @name QueryGetThreadFollowResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowResponse
 */
export interface QueryGetThreadFollowResponse {
  threadFollow: ThreadFollow;
}
export interface QueryGetThreadFollowResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowResponse";
  value: Uint8Array;
}
/**
 * QueryGetThreadFollowResponse defines the QueryGetThreadFollowResponse message.
 * @name QueryGetThreadFollowResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowResponse
 */
export interface QueryGetThreadFollowResponseAmino {
  thread_follow?: ThreadFollowAmino;
}
export interface QueryGetThreadFollowResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadFollowResponse";
  value: QueryGetThreadFollowResponseAmino;
}
/**
 * QueryAllThreadFollowRequest defines the QueryAllThreadFollowRequest message.
 * @name QueryAllThreadFollowRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowRequest
 */
export interface QueryAllThreadFollowRequest {
  pagination?: PageRequest;
}
export interface QueryAllThreadFollowRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowRequest";
  value: Uint8Array;
}
/**
 * QueryAllThreadFollowRequest defines the QueryAllThreadFollowRequest message.
 * @name QueryAllThreadFollowRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowRequest
 */
export interface QueryAllThreadFollowRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllThreadFollowRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadFollowRequest";
  value: QueryAllThreadFollowRequestAmino;
}
/**
 * QueryAllThreadFollowResponse defines the QueryAllThreadFollowResponse message.
 * @name QueryAllThreadFollowResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowResponse
 */
export interface QueryAllThreadFollowResponse {
  threadFollow: ThreadFollow[];
  pagination?: PageResponse;
}
export interface QueryAllThreadFollowResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowResponse";
  value: Uint8Array;
}
/**
 * QueryAllThreadFollowResponse defines the QueryAllThreadFollowResponse message.
 * @name QueryAllThreadFollowResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowResponse
 */
export interface QueryAllThreadFollowResponseAmino {
  thread_follow?: ThreadFollowAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllThreadFollowResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadFollowResponse";
  value: QueryAllThreadFollowResponseAmino;
}
/**
 * QueryGetThreadFollowCountRequest defines the QueryGetThreadFollowCountRequest message.
 * @name QueryGetThreadFollowCountRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowCountRequest
 */
export interface QueryGetThreadFollowCountRequest {
  threadId: bigint;
}
export interface QueryGetThreadFollowCountRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowCountRequest";
  value: Uint8Array;
}
/**
 * QueryGetThreadFollowCountRequest defines the QueryGetThreadFollowCountRequest message.
 * @name QueryGetThreadFollowCountRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowCountRequest
 */
export interface QueryGetThreadFollowCountRequestAmino {
  thread_id?: string;
}
export interface QueryGetThreadFollowCountRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadFollowCountRequest";
  value: QueryGetThreadFollowCountRequestAmino;
}
/**
 * QueryGetThreadFollowCountResponse defines the QueryGetThreadFollowCountResponse message.
 * @name QueryGetThreadFollowCountResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowCountResponse
 */
export interface QueryGetThreadFollowCountResponse {
  threadFollowCount: ThreadFollowCount;
}
export interface QueryGetThreadFollowCountResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowCountResponse";
  value: Uint8Array;
}
/**
 * QueryGetThreadFollowCountResponse defines the QueryGetThreadFollowCountResponse message.
 * @name QueryGetThreadFollowCountResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowCountResponse
 */
export interface QueryGetThreadFollowCountResponseAmino {
  thread_follow_count?: ThreadFollowCountAmino;
}
export interface QueryGetThreadFollowCountResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetThreadFollowCountResponse";
  value: QueryGetThreadFollowCountResponseAmino;
}
/**
 * QueryAllThreadFollowCountRequest defines the QueryAllThreadFollowCountRequest message.
 * @name QueryAllThreadFollowCountRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowCountRequest
 */
export interface QueryAllThreadFollowCountRequest {
  pagination?: PageRequest;
}
export interface QueryAllThreadFollowCountRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowCountRequest";
  value: Uint8Array;
}
/**
 * QueryAllThreadFollowCountRequest defines the QueryAllThreadFollowCountRequest message.
 * @name QueryAllThreadFollowCountRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowCountRequest
 */
export interface QueryAllThreadFollowCountRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllThreadFollowCountRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadFollowCountRequest";
  value: QueryAllThreadFollowCountRequestAmino;
}
/**
 * QueryAllThreadFollowCountResponse defines the QueryAllThreadFollowCountResponse message.
 * @name QueryAllThreadFollowCountResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowCountResponse
 */
export interface QueryAllThreadFollowCountResponse {
  threadFollowCount: ThreadFollowCount[];
  pagination?: PageResponse;
}
export interface QueryAllThreadFollowCountResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowCountResponse";
  value: Uint8Array;
}
/**
 * QueryAllThreadFollowCountResponse defines the QueryAllThreadFollowCountResponse message.
 * @name QueryAllThreadFollowCountResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowCountResponse
 */
export interface QueryAllThreadFollowCountResponseAmino {
  thread_follow_count?: ThreadFollowCountAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllThreadFollowCountResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllThreadFollowCountResponse";
  value: QueryAllThreadFollowCountResponseAmino;
}
/**
 * QueryGetArchiveMetadataRequest defines the QueryGetArchiveMetadataRequest message.
 * @name QueryGetArchiveMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetArchiveMetadataRequest
 */
export interface QueryGetArchiveMetadataRequest {
  rootId: bigint;
}
export interface QueryGetArchiveMetadataRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetArchiveMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryGetArchiveMetadataRequest defines the QueryGetArchiveMetadataRequest message.
 * @name QueryGetArchiveMetadataRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetArchiveMetadataRequest
 */
export interface QueryGetArchiveMetadataRequestAmino {
  root_id?: string;
}
export interface QueryGetArchiveMetadataRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetArchiveMetadataRequest";
  value: QueryGetArchiveMetadataRequestAmino;
}
/**
 * QueryGetArchiveMetadataResponse defines the QueryGetArchiveMetadataResponse message.
 * @name QueryGetArchiveMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetArchiveMetadataResponse
 */
export interface QueryGetArchiveMetadataResponse {
  archiveMetadata: ArchiveMetadata;
}
export interface QueryGetArchiveMetadataResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetArchiveMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryGetArchiveMetadataResponse defines the QueryGetArchiveMetadataResponse message.
 * @name QueryGetArchiveMetadataResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetArchiveMetadataResponse
 */
export interface QueryGetArchiveMetadataResponseAmino {
  archive_metadata?: ArchiveMetadataAmino;
}
export interface QueryGetArchiveMetadataResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetArchiveMetadataResponse";
  value: QueryGetArchiveMetadataResponseAmino;
}
/**
 * QueryAllArchiveMetadataRequest defines the QueryAllArchiveMetadataRequest message.
 * @name QueryAllArchiveMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllArchiveMetadataRequest
 */
export interface QueryAllArchiveMetadataRequest {
  pagination?: PageRequest;
}
export interface QueryAllArchiveMetadataRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllArchiveMetadataRequest";
  value: Uint8Array;
}
/**
 * QueryAllArchiveMetadataRequest defines the QueryAllArchiveMetadataRequest message.
 * @name QueryAllArchiveMetadataRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllArchiveMetadataRequest
 */
export interface QueryAllArchiveMetadataRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllArchiveMetadataRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllArchiveMetadataRequest";
  value: QueryAllArchiveMetadataRequestAmino;
}
/**
 * QueryAllArchiveMetadataResponse defines the QueryAllArchiveMetadataResponse message.
 * @name QueryAllArchiveMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllArchiveMetadataResponse
 */
export interface QueryAllArchiveMetadataResponse {
  archiveMetadata: ArchiveMetadata[];
  pagination?: PageResponse;
}
export interface QueryAllArchiveMetadataResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAllArchiveMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryAllArchiveMetadataResponse defines the QueryAllArchiveMetadataResponse message.
 * @name QueryAllArchiveMetadataResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllArchiveMetadataResponse
 */
export interface QueryAllArchiveMetadataResponseAmino {
  archive_metadata?: ArchiveMetadataAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllArchiveMetadataResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAllArchiveMetadataResponse";
  value: QueryAllArchiveMetadataResponseAmino;
}
/**
 * QueryPostsRequest defines the QueryPostsRequest message.
 * @name QueryPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostsRequest
 */
export interface QueryPostsRequest {
  categoryId: bigint;
  status: bigint;
  pagination?: PageRequest;
}
export interface QueryPostsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPostsRequest";
  value: Uint8Array;
}
/**
 * QueryPostsRequest defines the QueryPostsRequest message.
 * @name QueryPostsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostsRequest
 */
export interface QueryPostsRequestAmino {
  category_id?: string;
  status?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPostsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryPostsRequest";
  value: QueryPostsRequestAmino;
}
/**
 * QueryPostsResponse defines the QueryPostsResponse message.
 * @name QueryPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostsResponse
 */
export interface QueryPostsResponse {
  posts: Post[];
  pagination?: PageResponse;
}
export interface QueryPostsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPostsResponse";
  value: Uint8Array;
}
/**
 * QueryPostsResponse defines the QueryPostsResponse message.
 * @name QueryPostsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostsResponse
 */
export interface QueryPostsResponseAmino {
  posts?: PostAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPostsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryPostsResponse";
  value: QueryPostsResponseAmino;
}
/**
 * QueryThreadRequest defines the QueryThreadRequest message.
 * @name QueryThreadRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadRequest
 */
export interface QueryThreadRequest {
  rootId: bigint;
  pagination?: PageRequest;
}
export interface QueryThreadRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryThreadRequest";
  value: Uint8Array;
}
/**
 * QueryThreadRequest defines the QueryThreadRequest message.
 * @name QueryThreadRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadRequest
 */
export interface QueryThreadRequestAmino {
  root_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryThreadRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryThreadRequest";
  value: QueryThreadRequestAmino;
}
/**
 * QueryThreadResponse defines the QueryThreadResponse message.
 * @name QueryThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadResponse
 */
export interface QueryThreadResponse {
  posts: Post[];
  pagination?: PageResponse;
}
export interface QueryThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryThreadResponse";
  value: Uint8Array;
}
/**
 * QueryThreadResponse defines the QueryThreadResponse message.
 * @name QueryThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadResponse
 */
export interface QueryThreadResponseAmino {
  posts?: PostAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryThreadResponse";
  value: QueryThreadResponseAmino;
}
/**
 * QueryUserPostsRequest defines the QueryUserPostsRequest message.
 * @name QueryUserPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserPostsRequest
 */
export interface QueryUserPostsRequest {
  author: string;
  pagination?: PageRequest;
}
export interface QueryUserPostsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryUserPostsRequest";
  value: Uint8Array;
}
/**
 * QueryUserPostsRequest defines the QueryUserPostsRequest message.
 * @name QueryUserPostsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserPostsRequest
 */
export interface QueryUserPostsRequestAmino {
  author?: string;
  pagination?: PageRequestAmino;
}
export interface QueryUserPostsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryUserPostsRequest";
  value: QueryUserPostsRequestAmino;
}
/**
 * QueryUserPostsResponse defines the QueryUserPostsResponse message.
 * @name QueryUserPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserPostsResponse
 */
export interface QueryUserPostsResponse {
  posts: Post[];
  pagination?: PageResponse;
}
export interface QueryUserPostsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryUserPostsResponse";
  value: Uint8Array;
}
/**
 * QueryUserPostsResponse defines the QueryUserPostsResponse message.
 * @name QueryUserPostsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserPostsResponse
 */
export interface QueryUserPostsResponseAmino {
  posts?: PostAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUserPostsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryUserPostsResponse";
  value: QueryUserPostsResponseAmino;
}
/**
 * QueryArchiveCooldownRequest defines the QueryArchiveCooldownRequest message.
 * @name QueryArchiveCooldownRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryArchiveCooldownRequest
 */
export interface QueryArchiveCooldownRequest {
  rootId: bigint;
}
export interface QueryArchiveCooldownRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryArchiveCooldownRequest";
  value: Uint8Array;
}
/**
 * QueryArchiveCooldownRequest defines the QueryArchiveCooldownRequest message.
 * @name QueryArchiveCooldownRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryArchiveCooldownRequest
 */
export interface QueryArchiveCooldownRequestAmino {
  root_id?: string;
}
export interface QueryArchiveCooldownRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryArchiveCooldownRequest";
  value: QueryArchiveCooldownRequestAmino;
}
/**
 * QueryArchiveCooldownResponse defines the QueryArchiveCooldownResponse message.
 * @name QueryArchiveCooldownResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryArchiveCooldownResponse
 */
export interface QueryArchiveCooldownResponse {
  inCooldown: boolean;
  cooldownEnds: bigint;
}
export interface QueryArchiveCooldownResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryArchiveCooldownResponse";
  value: Uint8Array;
}
/**
 * QueryArchiveCooldownResponse defines the QueryArchiveCooldownResponse message.
 * @name QueryArchiveCooldownResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryArchiveCooldownResponse
 */
export interface QueryArchiveCooldownResponseAmino {
  in_cooldown?: boolean;
  cooldown_ends?: string;
}
export interface QueryArchiveCooldownResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryArchiveCooldownResponse";
  value: QueryArchiveCooldownResponseAmino;
}
/**
 * QueryForumStatusRequest defines the QueryForumStatusRequest message.
 * @name QueryForumStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryForumStatusRequest
 */
export interface QueryForumStatusRequest {}
export interface QueryForumStatusRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryForumStatusRequest";
  value: Uint8Array;
}
/**
 * QueryForumStatusRequest defines the QueryForumStatusRequest message.
 * @name QueryForumStatusRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryForumStatusRequest
 */
export interface QueryForumStatusRequestAmino {}
export interface QueryForumStatusRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryForumStatusRequest";
  value: QueryForumStatusRequestAmino;
}
/**
 * QueryForumStatusResponse defines the QueryForumStatusResponse message.
 * @name QueryForumStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryForumStatusResponse
 */
export interface QueryForumStatusResponse {
  forumPaused: boolean;
  moderationPaused: boolean;
  currentEpoch: bigint;
}
export interface QueryForumStatusResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryForumStatusResponse";
  value: Uint8Array;
}
/**
 * QueryForumStatusResponse defines the QueryForumStatusResponse message.
 * @name QueryForumStatusResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryForumStatusResponse
 */
export interface QueryForumStatusResponseAmino {
  forum_paused?: boolean;
  moderation_paused?: boolean;
  current_epoch?: string;
}
export interface QueryForumStatusResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryForumStatusResponse";
  value: QueryForumStatusResponseAmino;
}
/**
 * QueryAppealCooldownRequest defines the QueryAppealCooldownRequest message.
 * @name QueryAppealCooldownRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAppealCooldownRequest
 */
export interface QueryAppealCooldownRequest {
  postId: bigint;
}
export interface QueryAppealCooldownRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAppealCooldownRequest";
  value: Uint8Array;
}
/**
 * QueryAppealCooldownRequest defines the QueryAppealCooldownRequest message.
 * @name QueryAppealCooldownRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAppealCooldownRequest
 */
export interface QueryAppealCooldownRequestAmino {
  post_id?: string;
}
export interface QueryAppealCooldownRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryAppealCooldownRequest";
  value: QueryAppealCooldownRequestAmino;
}
/**
 * QueryAppealCooldownResponse defines the QueryAppealCooldownResponse message.
 * @name QueryAppealCooldownResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAppealCooldownResponse
 */
export interface QueryAppealCooldownResponse {
  inCooldown: boolean;
  cooldownEnds: bigint;
}
export interface QueryAppealCooldownResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryAppealCooldownResponse";
  value: Uint8Array;
}
/**
 * QueryAppealCooldownResponse defines the QueryAppealCooldownResponse message.
 * @name QueryAppealCooldownResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAppealCooldownResponse
 */
export interface QueryAppealCooldownResponseAmino {
  in_cooldown?: boolean;
  cooldown_ends?: string;
}
export interface QueryAppealCooldownResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryAppealCooldownResponse";
  value: QueryAppealCooldownResponseAmino;
}
/**
 * QueryPinnedPostsRequest defines the QueryPinnedPostsRequest message.
 * @name QueryPinnedPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPinnedPostsRequest
 */
export interface QueryPinnedPostsRequest {
  categoryId: bigint;
  pagination?: PageRequest;
}
export interface QueryPinnedPostsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPinnedPostsRequest";
  value: Uint8Array;
}
/**
 * QueryPinnedPostsRequest defines the QueryPinnedPostsRequest message.
 * @name QueryPinnedPostsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPinnedPostsRequest
 */
export interface QueryPinnedPostsRequestAmino {
  category_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPinnedPostsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryPinnedPostsRequest";
  value: QueryPinnedPostsRequestAmino;
}
/**
 * QueryPinnedPostsResponse defines the QueryPinnedPostsResponse message.
 * @name QueryPinnedPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPinnedPostsResponse
 */
export interface QueryPinnedPostsResponse {
  postId: bigint;
  priority: bigint;
  pinnedBy: string;
  pagination?: PageResponse;
}
export interface QueryPinnedPostsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPinnedPostsResponse";
  value: Uint8Array;
}
/**
 * QueryPinnedPostsResponse defines the QueryPinnedPostsResponse message.
 * @name QueryPinnedPostsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPinnedPostsResponse
 */
export interface QueryPinnedPostsResponseAmino {
  post_id?: string;
  priority?: string;
  pinned_by?: string;
  pagination?: PageResponseAmino;
}
export interface QueryPinnedPostsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryPinnedPostsResponse";
  value: QueryPinnedPostsResponseAmino;
}
/**
 * QueryLockedThreadsRequest defines the QueryLockedThreadsRequest message.
 * @name QueryLockedThreadsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryLockedThreadsRequest
 */
export interface QueryLockedThreadsRequest {
  pagination?: PageRequest;
}
export interface QueryLockedThreadsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryLockedThreadsRequest";
  value: Uint8Array;
}
/**
 * QueryLockedThreadsRequest defines the QueryLockedThreadsRequest message.
 * @name QueryLockedThreadsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryLockedThreadsRequest
 */
export interface QueryLockedThreadsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryLockedThreadsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryLockedThreadsRequest";
  value: QueryLockedThreadsRequestAmino;
}
/**
 * QueryLockedThreadsResponse defines the QueryLockedThreadsResponse message.
 * @name QueryLockedThreadsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryLockedThreadsResponse
 */
export interface QueryLockedThreadsResponse {
  rootId: bigint;
  lockedBy: string;
  lockedAt: bigint;
  pagination?: PageResponse;
}
export interface QueryLockedThreadsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryLockedThreadsResponse";
  value: Uint8Array;
}
/**
 * QueryLockedThreadsResponse defines the QueryLockedThreadsResponse message.
 * @name QueryLockedThreadsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryLockedThreadsResponse
 */
export interface QueryLockedThreadsResponseAmino {
  root_id?: string;
  locked_by?: string;
  locked_at?: string;
  pagination?: PageResponseAmino;
}
export interface QueryLockedThreadsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryLockedThreadsResponse";
  value: QueryLockedThreadsResponseAmino;
}
/**
 * QueryThreadLockStatusRequest defines the QueryThreadLockStatusRequest message.
 * @name QueryThreadLockStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadLockStatusRequest
 */
export interface QueryThreadLockStatusRequest {
  rootId: bigint;
}
export interface QueryThreadLockStatusRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryThreadLockStatusRequest";
  value: Uint8Array;
}
/**
 * QueryThreadLockStatusRequest defines the QueryThreadLockStatusRequest message.
 * @name QueryThreadLockStatusRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadLockStatusRequest
 */
export interface QueryThreadLockStatusRequestAmino {
  root_id?: string;
}
export interface QueryThreadLockStatusRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryThreadLockStatusRequest";
  value: QueryThreadLockStatusRequestAmino;
}
/**
 * QueryThreadLockStatusResponse defines the QueryThreadLockStatusResponse message.
 * @name QueryThreadLockStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadLockStatusResponse
 */
export interface QueryThreadLockStatusResponse {
  locked: boolean;
  lockedBy: string;
  reason: string;
  isSentinelLock: boolean;
}
export interface QueryThreadLockStatusResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryThreadLockStatusResponse";
  value: Uint8Array;
}
/**
 * QueryThreadLockStatusResponse defines the QueryThreadLockStatusResponse message.
 * @name QueryThreadLockStatusResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadLockStatusResponse
 */
export interface QueryThreadLockStatusResponseAmino {
  locked?: boolean;
  locked_by?: string;
  reason?: string;
  is_sentinel_lock?: boolean;
}
export interface QueryThreadLockStatusResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryThreadLockStatusResponse";
  value: QueryThreadLockStatusResponseAmino;
}
/**
 * QueryTopPostsRequest defines the QueryTopPostsRequest message.
 * @name QueryTopPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTopPostsRequest
 */
export interface QueryTopPostsRequest {
  categoryId: bigint;
  timeRange: bigint;
  pagination?: PageRequest;
}
export interface QueryTopPostsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTopPostsRequest";
  value: Uint8Array;
}
/**
 * QueryTopPostsRequest defines the QueryTopPostsRequest message.
 * @name QueryTopPostsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTopPostsRequest
 */
export interface QueryTopPostsRequestAmino {
  category_id?: string;
  time_range?: string;
  pagination?: PageRequestAmino;
}
export interface QueryTopPostsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryTopPostsRequest";
  value: QueryTopPostsRequestAmino;
}
/**
 * QueryTopPostsResponse defines the QueryTopPostsResponse message.
 * @name QueryTopPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTopPostsResponse
 */
export interface QueryTopPostsResponse {
  postId: bigint;
  upvoteCount: bigint;
  downvoteCount: bigint;
  pagination?: PageResponse;
}
export interface QueryTopPostsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryTopPostsResponse";
  value: Uint8Array;
}
/**
 * QueryTopPostsResponse defines the QueryTopPostsResponse message.
 * @name QueryTopPostsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTopPostsResponse
 */
export interface QueryTopPostsResponseAmino {
  post_id?: string;
  upvote_count?: string;
  downvote_count?: string;
  pagination?: PageResponseAmino;
}
export interface QueryTopPostsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryTopPostsResponse";
  value: QueryTopPostsResponseAmino;
}
/**
 * QueryThreadFollowersRequest defines the QueryThreadFollowersRequest message.
 * @name QueryThreadFollowersRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadFollowersRequest
 */
export interface QueryThreadFollowersRequest {
  threadId: bigint;
  pagination?: PageRequest;
}
export interface QueryThreadFollowersRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryThreadFollowersRequest";
  value: Uint8Array;
}
/**
 * QueryThreadFollowersRequest defines the QueryThreadFollowersRequest message.
 * @name QueryThreadFollowersRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadFollowersRequest
 */
export interface QueryThreadFollowersRequestAmino {
  thread_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryThreadFollowersRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryThreadFollowersRequest";
  value: QueryThreadFollowersRequestAmino;
}
/**
 * QueryThreadFollowersResponse defines the QueryThreadFollowersResponse message.
 * @name QueryThreadFollowersResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadFollowersResponse
 */
export interface QueryThreadFollowersResponse {
  follower: string;
  followedAt: bigint;
  pagination?: PageResponse;
}
export interface QueryThreadFollowersResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryThreadFollowersResponse";
  value: Uint8Array;
}
/**
 * QueryThreadFollowersResponse defines the QueryThreadFollowersResponse message.
 * @name QueryThreadFollowersResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadFollowersResponse
 */
export interface QueryThreadFollowersResponseAmino {
  follower?: string;
  followed_at?: string;
  pagination?: PageResponseAmino;
}
export interface QueryThreadFollowersResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryThreadFollowersResponse";
  value: QueryThreadFollowersResponseAmino;
}
/**
 * QueryUserFollowedThreadsRequest defines the QueryUserFollowedThreadsRequest message.
 * @name QueryUserFollowedThreadsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserFollowedThreadsRequest
 */
export interface QueryUserFollowedThreadsRequest {
  user: string;
  pagination?: PageRequest;
}
export interface QueryUserFollowedThreadsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryUserFollowedThreadsRequest";
  value: Uint8Array;
}
/**
 * QueryUserFollowedThreadsRequest defines the QueryUserFollowedThreadsRequest message.
 * @name QueryUserFollowedThreadsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserFollowedThreadsRequest
 */
export interface QueryUserFollowedThreadsRequestAmino {
  user?: string;
  pagination?: PageRequestAmino;
}
export interface QueryUserFollowedThreadsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryUserFollowedThreadsRequest";
  value: QueryUserFollowedThreadsRequestAmino;
}
/**
 * QueryUserFollowedThreadsResponse defines the QueryUserFollowedThreadsResponse message.
 * @name QueryUserFollowedThreadsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserFollowedThreadsResponse
 */
export interface QueryUserFollowedThreadsResponse {
  threadId: bigint;
  followedAt: bigint;
  pagination?: PageResponse;
}
export interface QueryUserFollowedThreadsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryUserFollowedThreadsResponse";
  value: Uint8Array;
}
/**
 * QueryUserFollowedThreadsResponse defines the QueryUserFollowedThreadsResponse message.
 * @name QueryUserFollowedThreadsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserFollowedThreadsResponse
 */
export interface QueryUserFollowedThreadsResponseAmino {
  thread_id?: string;
  followed_at?: string;
  pagination?: PageResponseAmino;
}
export interface QueryUserFollowedThreadsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryUserFollowedThreadsResponse";
  value: QueryUserFollowedThreadsResponseAmino;
}
/**
 * QueryIsFollowingThreadRequest defines the QueryIsFollowingThreadRequest message.
 * @name QueryIsFollowingThreadRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryIsFollowingThreadRequest
 */
export interface QueryIsFollowingThreadRequest {
  threadId: bigint;
  user: string;
}
export interface QueryIsFollowingThreadRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryIsFollowingThreadRequest";
  value: Uint8Array;
}
/**
 * QueryIsFollowingThreadRequest defines the QueryIsFollowingThreadRequest message.
 * @name QueryIsFollowingThreadRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryIsFollowingThreadRequest
 */
export interface QueryIsFollowingThreadRequestAmino {
  thread_id?: string;
  user?: string;
}
export interface QueryIsFollowingThreadRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryIsFollowingThreadRequest";
  value: QueryIsFollowingThreadRequestAmino;
}
/**
 * QueryIsFollowingThreadResponse defines the QueryIsFollowingThreadResponse message.
 * @name QueryIsFollowingThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryIsFollowingThreadResponse
 */
export interface QueryIsFollowingThreadResponse {
  isFollowing: boolean;
  followedAt: bigint;
}
export interface QueryIsFollowingThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryIsFollowingThreadResponse";
  value: Uint8Array;
}
/**
 * QueryIsFollowingThreadResponse defines the QueryIsFollowingThreadResponse message.
 * @name QueryIsFollowingThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryIsFollowingThreadResponse
 */
export interface QueryIsFollowingThreadResponseAmino {
  is_following?: boolean;
  followed_at?: string;
}
export interface QueryIsFollowingThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryIsFollowingThreadResponse";
  value: QueryIsFollowingThreadResponseAmino;
}
/**
 * QueryBountyByThreadRequest defines the QueryBountyByThreadRequest message.
 * @name QueryBountyByThreadRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyByThreadRequest
 */
export interface QueryBountyByThreadRequest {
  threadId: bigint;
}
export interface QueryBountyByThreadRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryBountyByThreadRequest";
  value: Uint8Array;
}
/**
 * QueryBountyByThreadRequest defines the QueryBountyByThreadRequest message.
 * @name QueryBountyByThreadRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyByThreadRequest
 */
export interface QueryBountyByThreadRequestAmino {
  thread_id?: string;
}
export interface QueryBountyByThreadRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryBountyByThreadRequest";
  value: QueryBountyByThreadRequestAmino;
}
/**
 * QueryBountyByThreadResponse defines the QueryBountyByThreadResponse message.
 * @name QueryBountyByThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyByThreadResponse
 */
export interface QueryBountyByThreadResponse {
  bountyId: bigint;
  amount: string;
  status: bigint;
  expiresAt: bigint;
}
export interface QueryBountyByThreadResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryBountyByThreadResponse";
  value: Uint8Array;
}
/**
 * QueryBountyByThreadResponse defines the QueryBountyByThreadResponse message.
 * @name QueryBountyByThreadResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyByThreadResponse
 */
export interface QueryBountyByThreadResponseAmino {
  bounty_id?: string;
  amount?: string;
  status?: string;
  expires_at?: string;
}
export interface QueryBountyByThreadResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryBountyByThreadResponse";
  value: QueryBountyByThreadResponseAmino;
}
/**
 * QueryActiveBountiesRequest defines the QueryActiveBountiesRequest message.
 * @name QueryActiveBountiesRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryActiveBountiesRequest
 */
export interface QueryActiveBountiesRequest {
  pagination?: PageRequest;
}
export interface QueryActiveBountiesRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryActiveBountiesRequest";
  value: Uint8Array;
}
/**
 * QueryActiveBountiesRequest defines the QueryActiveBountiesRequest message.
 * @name QueryActiveBountiesRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryActiveBountiesRequest
 */
export interface QueryActiveBountiesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryActiveBountiesRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryActiveBountiesRequest";
  value: QueryActiveBountiesRequestAmino;
}
/**
 * QueryActiveBountiesResponse defines the QueryActiveBountiesResponse message.
 * @name QueryActiveBountiesResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryActiveBountiesResponse
 */
export interface QueryActiveBountiesResponse {
  bountyId: bigint;
  threadId: bigint;
  amount: string;
  pagination?: PageResponse;
}
export interface QueryActiveBountiesResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryActiveBountiesResponse";
  value: Uint8Array;
}
/**
 * QueryActiveBountiesResponse defines the QueryActiveBountiesResponse message.
 * @name QueryActiveBountiesResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryActiveBountiesResponse
 */
export interface QueryActiveBountiesResponseAmino {
  bounty_id?: string;
  thread_id?: string;
  amount?: string;
  pagination?: PageResponseAmino;
}
export interface QueryActiveBountiesResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryActiveBountiesResponse";
  value: QueryActiveBountiesResponseAmino;
}
/**
 * QueryUserBountiesRequest defines the QueryUserBountiesRequest message.
 * @name QueryUserBountiesRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserBountiesRequest
 */
export interface QueryUserBountiesRequest {
  user: string;
  pagination?: PageRequest;
}
export interface QueryUserBountiesRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryUserBountiesRequest";
  value: Uint8Array;
}
/**
 * QueryUserBountiesRequest defines the QueryUserBountiesRequest message.
 * @name QueryUserBountiesRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserBountiesRequest
 */
export interface QueryUserBountiesRequestAmino {
  user?: string;
  pagination?: PageRequestAmino;
}
export interface QueryUserBountiesRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryUserBountiesRequest";
  value: QueryUserBountiesRequestAmino;
}
/**
 * QueryUserBountiesResponse defines the QueryUserBountiesResponse message.
 * @name QueryUserBountiesResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserBountiesResponse
 */
export interface QueryUserBountiesResponse {
  bountyId: bigint;
  threadId: bigint;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryUserBountiesResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryUserBountiesResponse";
  value: Uint8Array;
}
/**
 * QueryUserBountiesResponse defines the QueryUserBountiesResponse message.
 * @name QueryUserBountiesResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserBountiesResponse
 */
export interface QueryUserBountiesResponseAmino {
  bounty_id?: string;
  thread_id?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryUserBountiesResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryUserBountiesResponse";
  value: QueryUserBountiesResponseAmino;
}
/**
 * QueryBountyExpiringSoonRequest defines the QueryBountyExpiringSoonRequest message.
 * @name QueryBountyExpiringSoonRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyExpiringSoonRequest
 */
export interface QueryBountyExpiringSoonRequest {
  withinSeconds: bigint;
  pagination?: PageRequest;
}
export interface QueryBountyExpiringSoonRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryBountyExpiringSoonRequest";
  value: Uint8Array;
}
/**
 * QueryBountyExpiringSoonRequest defines the QueryBountyExpiringSoonRequest message.
 * @name QueryBountyExpiringSoonRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyExpiringSoonRequest
 */
export interface QueryBountyExpiringSoonRequestAmino {
  within_seconds?: string;
  pagination?: PageRequestAmino;
}
export interface QueryBountyExpiringSoonRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryBountyExpiringSoonRequest";
  value: QueryBountyExpiringSoonRequestAmino;
}
/**
 * QueryBountyExpiringSoonResponse defines the QueryBountyExpiringSoonResponse message.
 * @name QueryBountyExpiringSoonResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyExpiringSoonResponse
 */
export interface QueryBountyExpiringSoonResponse {
  bountyId: bigint;
  threadId: bigint;
  expiresAt: bigint;
  pagination?: PageResponse;
}
export interface QueryBountyExpiringSoonResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryBountyExpiringSoonResponse";
  value: Uint8Array;
}
/**
 * QueryBountyExpiringSoonResponse defines the QueryBountyExpiringSoonResponse message.
 * @name QueryBountyExpiringSoonResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyExpiringSoonResponse
 */
export interface QueryBountyExpiringSoonResponseAmino {
  bounty_id?: string;
  thread_id?: string;
  expires_at?: string;
  pagination?: PageResponseAmino;
}
export interface QueryBountyExpiringSoonResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryBountyExpiringSoonResponse";
  value: QueryBountyExpiringSoonResponseAmino;
}
/**
 * QueryPostFlagsRequest defines the QueryPostFlagsRequest message.
 * @name QueryPostFlagsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostFlagsRequest
 */
export interface QueryPostFlagsRequest {
  postId: bigint;
}
export interface QueryPostFlagsRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPostFlagsRequest";
  value: Uint8Array;
}
/**
 * QueryPostFlagsRequest defines the QueryPostFlagsRequest message.
 * @name QueryPostFlagsRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostFlagsRequest
 */
export interface QueryPostFlagsRequestAmino {
  post_id?: string;
}
export interface QueryPostFlagsRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryPostFlagsRequest";
  value: QueryPostFlagsRequestAmino;
}
/**
 * QueryPostFlagsResponse defines the QueryPostFlagsResponse message.
 * @name QueryPostFlagsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostFlagsResponse
 */
export interface QueryPostFlagsResponse {
  totalWeight: string;
  inReviewQueue: boolean;
  flaggerCount: bigint;
}
export interface QueryPostFlagsResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPostFlagsResponse";
  value: Uint8Array;
}
/**
 * QueryPostFlagsResponse defines the QueryPostFlagsResponse message.
 * @name QueryPostFlagsResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostFlagsResponse
 */
export interface QueryPostFlagsResponseAmino {
  total_weight?: string;
  in_review_queue?: boolean;
  flagger_count?: string;
}
export interface QueryPostFlagsResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryPostFlagsResponse";
  value: QueryPostFlagsResponseAmino;
}
/**
 * QueryFlagReviewQueueRequest defines the QueryFlagReviewQueueRequest message.
 * @name QueryFlagReviewQueueRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryFlagReviewQueueRequest
 */
export interface QueryFlagReviewQueueRequest {
  pagination?: PageRequest;
}
export interface QueryFlagReviewQueueRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryFlagReviewQueueRequest";
  value: Uint8Array;
}
/**
 * QueryFlagReviewQueueRequest defines the QueryFlagReviewQueueRequest message.
 * @name QueryFlagReviewQueueRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryFlagReviewQueueRequest
 */
export interface QueryFlagReviewQueueRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryFlagReviewQueueRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryFlagReviewQueueRequest";
  value: QueryFlagReviewQueueRequestAmino;
}
/**
 * QueryFlagReviewQueueResponse defines the QueryFlagReviewQueueResponse message.
 * @name QueryFlagReviewQueueResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryFlagReviewQueueResponse
 */
export interface QueryFlagReviewQueueResponse {
  postId: bigint;
  totalWeight: string;
  pagination?: PageResponse;
}
export interface QueryFlagReviewQueueResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryFlagReviewQueueResponse";
  value: Uint8Array;
}
/**
 * QueryFlagReviewQueueResponse defines the QueryFlagReviewQueueResponse message.
 * @name QueryFlagReviewQueueResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryFlagReviewQueueResponse
 */
export interface QueryFlagReviewQueueResponseAmino {
  post_id?: string;
  total_weight?: string;
  pagination?: PageResponseAmino;
}
export interface QueryFlagReviewQueueResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryFlagReviewQueueResponse";
  value: QueryFlagReviewQueueResponseAmino;
}
/**
 * QueryGetPostConvictionStakeRequest defines the QueryGetPostConvictionStakeRequest message.
 * @name QueryGetPostConvictionStakeRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostConvictionStakeRequest
 */
export interface QueryGetPostConvictionStakeRequest {
  id: bigint;
}
export interface QueryGetPostConvictionStakeRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostConvictionStakeRequest";
  value: Uint8Array;
}
/**
 * QueryGetPostConvictionStakeRequest defines the QueryGetPostConvictionStakeRequest message.
 * @name QueryGetPostConvictionStakeRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostConvictionStakeRequest
 */
export interface QueryGetPostConvictionStakeRequestAmino {
  id?: string;
}
export interface QueryGetPostConvictionStakeRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetPostConvictionStakeRequest";
  value: QueryGetPostConvictionStakeRequestAmino;
}
/**
 * QueryGetPostConvictionStakeResponse defines the QueryGetPostConvictionStakeResponse message.
 * @name QueryGetPostConvictionStakeResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostConvictionStakeResponse
 */
export interface QueryGetPostConvictionStakeResponse {
  stake: PostConvictionStake;
}
export interface QueryGetPostConvictionStakeResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostConvictionStakeResponse";
  value: Uint8Array;
}
/**
 * QueryGetPostConvictionStakeResponse defines the QueryGetPostConvictionStakeResponse message.
 * @name QueryGetPostConvictionStakeResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostConvictionStakeResponse
 */
export interface QueryGetPostConvictionStakeResponseAmino {
  stake?: PostConvictionStakeAmino;
}
export interface QueryGetPostConvictionStakeResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryGetPostConvictionStakeResponse";
  value: QueryGetPostConvictionStakeResponseAmino;
}
/**
 * QueryPostConvictionStakesByStakerRequest defines the QueryPostConvictionStakesByStakerRequest message.
 * @name QueryPostConvictionStakesByStakerRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostConvictionStakesByStakerRequest
 */
export interface QueryPostConvictionStakesByStakerRequest {
  staker: string;
  pagination?: PageRequest;
}
export interface QueryPostConvictionStakesByStakerRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPostConvictionStakesByStakerRequest";
  value: Uint8Array;
}
/**
 * QueryPostConvictionStakesByStakerRequest defines the QueryPostConvictionStakesByStakerRequest message.
 * @name QueryPostConvictionStakesByStakerRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostConvictionStakesByStakerRequest
 */
export interface QueryPostConvictionStakesByStakerRequestAmino {
  staker?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPostConvictionStakesByStakerRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryPostConvictionStakesByStakerRequest";
  value: QueryPostConvictionStakesByStakerRequestAmino;
}
/**
 * QueryPostConvictionStakesByStakerResponse defines the QueryPostConvictionStakesByStakerResponse message.
 * @name QueryPostConvictionStakesByStakerResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostConvictionStakesByStakerResponse
 */
export interface QueryPostConvictionStakesByStakerResponse {
  stakes: PostConvictionStake[];
  pagination?: PageResponse;
}
export interface QueryPostConvictionStakesByStakerResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPostConvictionStakesByStakerResponse";
  value: Uint8Array;
}
/**
 * QueryPostConvictionStakesByStakerResponse defines the QueryPostConvictionStakesByStakerResponse message.
 * @name QueryPostConvictionStakesByStakerResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostConvictionStakesByStakerResponse
 */
export interface QueryPostConvictionStakesByStakerResponseAmino {
  stakes?: PostConvictionStakeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPostConvictionStakesByStakerResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryPostConvictionStakesByStakerResponse";
  value: QueryPostConvictionStakesByStakerResponseAmino;
}
/**
 * QueryPostConvictionStakesByPostRequest defines the QueryPostConvictionStakesByPostRequest message.
 * @name QueryPostConvictionStakesByPostRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostConvictionStakesByPostRequest
 */
export interface QueryPostConvictionStakesByPostRequest {
  postId: bigint;
  pagination?: PageRequest;
}
export interface QueryPostConvictionStakesByPostRequestProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPostConvictionStakesByPostRequest";
  value: Uint8Array;
}
/**
 * QueryPostConvictionStakesByPostRequest defines the QueryPostConvictionStakesByPostRequest message.
 * @name QueryPostConvictionStakesByPostRequestAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostConvictionStakesByPostRequest
 */
export interface QueryPostConvictionStakesByPostRequestAmino {
  post_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryPostConvictionStakesByPostRequestAminoMsg {
  type: "/sparkdream.forum.v1.QueryPostConvictionStakesByPostRequest";
  value: QueryPostConvictionStakesByPostRequestAmino;
}
/**
 * QueryPostConvictionStakesByPostResponse defines the QueryPostConvictionStakesByPostResponse message.
 * @name QueryPostConvictionStakesByPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostConvictionStakesByPostResponse
 */
export interface QueryPostConvictionStakesByPostResponse {
  stakes: PostConvictionStake[];
  pagination?: PageResponse;
}
export interface QueryPostConvictionStakesByPostResponseProtoMsg {
  typeUrl: "/sparkdream.forum.v1.QueryPostConvictionStakesByPostResponse";
  value: Uint8Array;
}
/**
 * QueryPostConvictionStakesByPostResponse defines the QueryPostConvictionStakesByPostResponse message.
 * @name QueryPostConvictionStakesByPostResponseAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostConvictionStakesByPostResponse
 */
export interface QueryPostConvictionStakesByPostResponseAmino {
  stakes?: PostConvictionStakeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPostConvictionStakesByPostResponseAminoMsg {
  type: "/sparkdream.forum.v1.QueryPostConvictionStakesByPostResponse";
  value: QueryPostConvictionStakesByPostResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryParamsRequest",
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
      typeUrl: "/sparkdream.forum.v1.QueryParamsRequest",
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
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryParamsResponse",
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
      typeUrl: "/sparkdream.forum.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPostRequest(): QueryGetPostRequest {
  return {
    postId: BigInt(0)
  };
}
/**
 * QueryGetPostRequest defines the QueryGetPostRequest message.
 * @name QueryGetPostRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostRequest
 */
export const QueryGetPostRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostRequest",
  encode(message: QueryGetPostRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPostRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest {
    const message = createBaseQueryGetPostRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPostRequestAmino): QueryGetPostRequest {
    const message = createBaseQueryGetPostRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: QueryGetPostRequest): QueryGetPostRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPostRequestAminoMsg): QueryGetPostRequest {
    return QueryGetPostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPostRequestProtoMsg): QueryGetPostRequest {
    return QueryGetPostRequest.decode(message.value);
  },
  toProto(message: QueryGetPostRequest): Uint8Array {
    return QueryGetPostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPostRequest): QueryGetPostRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetPostRequest",
      value: QueryGetPostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPostResponse(): QueryGetPostResponse {
  return {
    post: Post.fromPartial({})
  };
}
/**
 * QueryGetPostResponse defines the QueryGetPostResponse message.
 * @name QueryGetPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostResponse
 */
export const QueryGetPostResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostResponse",
  encode(message: QueryGetPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.post !== undefined) {
      Post.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostResponse();
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
  fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse {
    const message = createBaseQueryGetPostResponse();
    message.post = object.post !== undefined && object.post !== null ? Post.fromPartial(object.post) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPostResponseAmino): QueryGetPostResponse {
    const message = createBaseQueryGetPostResponse();
    if (object.post !== undefined && object.post !== null) {
      message.post = Post.fromAmino(object.post);
    }
    return message;
  },
  toAmino(message: QueryGetPostResponse): QueryGetPostResponseAmino {
    const obj: any = {};
    obj.post = message.post ? Post.toAmino(message.post) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPostResponseAminoMsg): QueryGetPostResponse {
    return QueryGetPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPostResponseProtoMsg): QueryGetPostResponse {
    return QueryGetPostResponse.decode(message.value);
  },
  toProto(message: QueryGetPostResponse): Uint8Array {
    return QueryGetPostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPostResponse): QueryGetPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetPostResponse",
      value: QueryGetPostResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPostRequest(): QueryAllPostRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllPostRequest defines the QueryAllPostRequest message.
 * @name QueryAllPostRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostRequest
 */
export const QueryAllPostRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostRequest",
  encode(message: QueryAllPostRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPostRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPostRequest();
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
  fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest {
    const message = createBaseQueryAllPostRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPostRequestAmino): QueryAllPostRequest {
    const message = createBaseQueryAllPostRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPostRequest): QueryAllPostRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPostRequestAminoMsg): QueryAllPostRequest {
    return QueryAllPostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPostRequestProtoMsg): QueryAllPostRequest {
    return QueryAllPostRequest.decode(message.value);
  },
  toProto(message: QueryAllPostRequest): Uint8Array {
    return QueryAllPostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPostRequest): QueryAllPostRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllPostRequest",
      value: QueryAllPostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPostResponse(): QueryAllPostResponse {
  return {
    post: [],
    pagination: undefined
  };
}
/**
 * QueryAllPostResponse defines the QueryAllPostResponse message.
 * @name QueryAllPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostResponse
 */
export const QueryAllPostResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostResponse",
  encode(message: QueryAllPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPostResponse();
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
  fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse {
    const message = createBaseQueryAllPostResponse();
    message.post = object.post?.map(e => Post.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPostResponseAmino): QueryAllPostResponse {
    const message = createBaseQueryAllPostResponse();
    message.post = object.post?.map(e => Post.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPostResponse): QueryAllPostResponseAmino {
    const obj: any = {};
    if (message.post) {
      obj.post = message.post.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.post = message.post;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPostResponseAminoMsg): QueryAllPostResponse {
    return QueryAllPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPostResponseProtoMsg): QueryAllPostResponse {
    return QueryAllPostResponse.decode(message.value);
  },
  toProto(message: QueryAllPostResponse): Uint8Array {
    return QueryAllPostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPostResponse): QueryAllPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllPostResponse",
      value: QueryAllPostResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserRateLimitRequest(): QueryGetUserRateLimitRequest {
  return {
    userAddress: ""
  };
}
/**
 * QueryGetUserRateLimitRequest defines the QueryGetUserRateLimitRequest message.
 * @name QueryGetUserRateLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserRateLimitRequest
 */
export const QueryGetUserRateLimitRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserRateLimitRequest",
  encode(message: QueryGetUserRateLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserRateLimitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRateLimitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetUserRateLimitRequest>): QueryGetUserRateLimitRequest {
    const message = createBaseQueryGetUserRateLimitRequest();
    message.userAddress = object.userAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetUserRateLimitRequestAmino): QueryGetUserRateLimitRequest {
    const message = createBaseQueryGetUserRateLimitRequest();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    return message;
  },
  toAmino(message: QueryGetUserRateLimitRequest): QueryGetUserRateLimitRequestAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserRateLimitRequestAminoMsg): QueryGetUserRateLimitRequest {
    return QueryGetUserRateLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserRateLimitRequestProtoMsg): QueryGetUserRateLimitRequest {
    return QueryGetUserRateLimitRequest.decode(message.value);
  },
  toProto(message: QueryGetUserRateLimitRequest): Uint8Array {
    return QueryGetUserRateLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserRateLimitRequest): QueryGetUserRateLimitRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetUserRateLimitRequest",
      value: QueryGetUserRateLimitRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserRateLimitResponse(): QueryGetUserRateLimitResponse {
  return {
    userRateLimit: UserRateLimit.fromPartial({})
  };
}
/**
 * QueryGetUserRateLimitResponse defines the QueryGetUserRateLimitResponse message.
 * @name QueryGetUserRateLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserRateLimitResponse
 */
export const QueryGetUserRateLimitResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserRateLimitResponse",
  encode(message: QueryGetUserRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userRateLimit !== undefined) {
      UserRateLimit.encode(message.userRateLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserRateLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserRateLimitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRateLimit = UserRateLimit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetUserRateLimitResponse>): QueryGetUserRateLimitResponse {
    const message = createBaseQueryGetUserRateLimitResponse();
    message.userRateLimit = object.userRateLimit !== undefined && object.userRateLimit !== null ? UserRateLimit.fromPartial(object.userRateLimit) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUserRateLimitResponseAmino): QueryGetUserRateLimitResponse {
    const message = createBaseQueryGetUserRateLimitResponse();
    if (object.user_rate_limit !== undefined && object.user_rate_limit !== null) {
      message.userRateLimit = UserRateLimit.fromAmino(object.user_rate_limit);
    }
    return message;
  },
  toAmino(message: QueryGetUserRateLimitResponse): QueryGetUserRateLimitResponseAmino {
    const obj: any = {};
    obj.user_rate_limit = message.userRateLimit ? UserRateLimit.toAmino(message.userRateLimit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserRateLimitResponseAminoMsg): QueryGetUserRateLimitResponse {
    return QueryGetUserRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserRateLimitResponseProtoMsg): QueryGetUserRateLimitResponse {
    return QueryGetUserRateLimitResponse.decode(message.value);
  },
  toProto(message: QueryGetUserRateLimitResponse): Uint8Array {
    return QueryGetUserRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserRateLimitResponse): QueryGetUserRateLimitResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetUserRateLimitResponse",
      value: QueryGetUserRateLimitResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRateLimitRequest(): QueryAllUserRateLimitRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllUserRateLimitRequest defines the QueryAllUserRateLimitRequest message.
 * @name QueryAllUserRateLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserRateLimitRequest
 */
export const QueryAllUserRateLimitRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserRateLimitRequest",
  encode(message: QueryAllUserRateLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRateLimitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRateLimitRequest();
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
  fromPartial(object: DeepPartial<QueryAllUserRateLimitRequest>): QueryAllUserRateLimitRequest {
    const message = createBaseQueryAllUserRateLimitRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRateLimitRequestAmino): QueryAllUserRateLimitRequest {
    const message = createBaseQueryAllUserRateLimitRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserRateLimitRequest): QueryAllUserRateLimitRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRateLimitRequestAminoMsg): QueryAllUserRateLimitRequest {
    return QueryAllUserRateLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRateLimitRequestProtoMsg): QueryAllUserRateLimitRequest {
    return QueryAllUserRateLimitRequest.decode(message.value);
  },
  toProto(message: QueryAllUserRateLimitRequest): Uint8Array {
    return QueryAllUserRateLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRateLimitRequest): QueryAllUserRateLimitRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllUserRateLimitRequest",
      value: QueryAllUserRateLimitRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRateLimitResponse(): QueryAllUserRateLimitResponse {
  return {
    userRateLimit: [],
    pagination: undefined
  };
}
/**
 * QueryAllUserRateLimitResponse defines the QueryAllUserRateLimitResponse message.
 * @name QueryAllUserRateLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserRateLimitResponse
 */
export const QueryAllUserRateLimitResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserRateLimitResponse",
  encode(message: QueryAllUserRateLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userRateLimit) {
      UserRateLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserRateLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserRateLimitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userRateLimit.push(UserRateLimit.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllUserRateLimitResponse>): QueryAllUserRateLimitResponse {
    const message = createBaseQueryAllUserRateLimitResponse();
    message.userRateLimit = object.userRateLimit?.map(e => UserRateLimit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRateLimitResponseAmino): QueryAllUserRateLimitResponse {
    const message = createBaseQueryAllUserRateLimitResponse();
    message.userRateLimit = object.user_rate_limit?.map(e => UserRateLimit.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserRateLimitResponse): QueryAllUserRateLimitResponseAmino {
    const obj: any = {};
    if (message.userRateLimit) {
      obj.user_rate_limit = message.userRateLimit.map(e => e ? UserRateLimit.toAmino(e) : undefined);
    } else {
      obj.user_rate_limit = message.userRateLimit;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRateLimitResponseAminoMsg): QueryAllUserRateLimitResponse {
    return QueryAllUserRateLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRateLimitResponseProtoMsg): QueryAllUserRateLimitResponse {
    return QueryAllUserRateLimitResponse.decode(message.value);
  },
  toProto(message: QueryAllUserRateLimitResponse): Uint8Array {
    return QueryAllUserRateLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRateLimitResponse): QueryAllUserRateLimitResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllUserRateLimitResponse",
      value: QueryAllUserRateLimitResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserReactionLimitRequest(): QueryGetUserReactionLimitRequest {
  return {
    userAddress: ""
  };
}
/**
 * QueryGetUserReactionLimitRequest defines the QueryGetUserReactionLimitRequest message.
 * @name QueryGetUserReactionLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserReactionLimitRequest
 */
export const QueryGetUserReactionLimitRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserReactionLimitRequest",
  encode(message: QueryGetUserReactionLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserReactionLimitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserReactionLimitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetUserReactionLimitRequest>): QueryGetUserReactionLimitRequest {
    const message = createBaseQueryGetUserReactionLimitRequest();
    message.userAddress = object.userAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetUserReactionLimitRequestAmino): QueryGetUserReactionLimitRequest {
    const message = createBaseQueryGetUserReactionLimitRequest();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    return message;
  },
  toAmino(message: QueryGetUserReactionLimitRequest): QueryGetUserReactionLimitRequestAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserReactionLimitRequestAminoMsg): QueryGetUserReactionLimitRequest {
    return QueryGetUserReactionLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserReactionLimitRequestProtoMsg): QueryGetUserReactionLimitRequest {
    return QueryGetUserReactionLimitRequest.decode(message.value);
  },
  toProto(message: QueryGetUserReactionLimitRequest): Uint8Array {
    return QueryGetUserReactionLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserReactionLimitRequest): QueryGetUserReactionLimitRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetUserReactionLimitRequest",
      value: QueryGetUserReactionLimitRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserReactionLimitResponse(): QueryGetUserReactionLimitResponse {
  return {
    userReactionLimit: UserReactionLimit.fromPartial({})
  };
}
/**
 * QueryGetUserReactionLimitResponse defines the QueryGetUserReactionLimitResponse message.
 * @name QueryGetUserReactionLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetUserReactionLimitResponse
 */
export const QueryGetUserReactionLimitResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetUserReactionLimitResponse",
  encode(message: QueryGetUserReactionLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userReactionLimit !== undefined) {
      UserReactionLimit.encode(message.userReactionLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetUserReactionLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserReactionLimitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userReactionLimit = UserReactionLimit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetUserReactionLimitResponse>): QueryGetUserReactionLimitResponse {
    const message = createBaseQueryGetUserReactionLimitResponse();
    message.userReactionLimit = object.userReactionLimit !== undefined && object.userReactionLimit !== null ? UserReactionLimit.fromPartial(object.userReactionLimit) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUserReactionLimitResponseAmino): QueryGetUserReactionLimitResponse {
    const message = createBaseQueryGetUserReactionLimitResponse();
    if (object.user_reaction_limit !== undefined && object.user_reaction_limit !== null) {
      message.userReactionLimit = UserReactionLimit.fromAmino(object.user_reaction_limit);
    }
    return message;
  },
  toAmino(message: QueryGetUserReactionLimitResponse): QueryGetUserReactionLimitResponseAmino {
    const obj: any = {};
    obj.user_reaction_limit = message.userReactionLimit ? UserReactionLimit.toAmino(message.userReactionLimit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserReactionLimitResponseAminoMsg): QueryGetUserReactionLimitResponse {
    return QueryGetUserReactionLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserReactionLimitResponseProtoMsg): QueryGetUserReactionLimitResponse {
    return QueryGetUserReactionLimitResponse.decode(message.value);
  },
  toProto(message: QueryGetUserReactionLimitResponse): Uint8Array {
    return QueryGetUserReactionLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserReactionLimitResponse): QueryGetUserReactionLimitResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetUserReactionLimitResponse",
      value: QueryGetUserReactionLimitResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserReactionLimitRequest(): QueryAllUserReactionLimitRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllUserReactionLimitRequest defines the QueryAllUserReactionLimitRequest message.
 * @name QueryAllUserReactionLimitRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserReactionLimitRequest
 */
export const QueryAllUserReactionLimitRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserReactionLimitRequest",
  encode(message: QueryAllUserReactionLimitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserReactionLimitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserReactionLimitRequest();
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
  fromPartial(object: DeepPartial<QueryAllUserReactionLimitRequest>): QueryAllUserReactionLimitRequest {
    const message = createBaseQueryAllUserReactionLimitRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserReactionLimitRequestAmino): QueryAllUserReactionLimitRequest {
    const message = createBaseQueryAllUserReactionLimitRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserReactionLimitRequest): QueryAllUserReactionLimitRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserReactionLimitRequestAminoMsg): QueryAllUserReactionLimitRequest {
    return QueryAllUserReactionLimitRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserReactionLimitRequestProtoMsg): QueryAllUserReactionLimitRequest {
    return QueryAllUserReactionLimitRequest.decode(message.value);
  },
  toProto(message: QueryAllUserReactionLimitRequest): Uint8Array {
    return QueryAllUserReactionLimitRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserReactionLimitRequest): QueryAllUserReactionLimitRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllUserReactionLimitRequest",
      value: QueryAllUserReactionLimitRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserReactionLimitResponse(): QueryAllUserReactionLimitResponse {
  return {
    userReactionLimit: [],
    pagination: undefined
  };
}
/**
 * QueryAllUserReactionLimitResponse defines the QueryAllUserReactionLimitResponse message.
 * @name QueryAllUserReactionLimitResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllUserReactionLimitResponse
 */
export const QueryAllUserReactionLimitResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllUserReactionLimitResponse",
  encode(message: QueryAllUserReactionLimitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userReactionLimit) {
      UserReactionLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserReactionLimitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserReactionLimitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userReactionLimit.push(UserReactionLimit.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllUserReactionLimitResponse>): QueryAllUserReactionLimitResponse {
    const message = createBaseQueryAllUserReactionLimitResponse();
    message.userReactionLimit = object.userReactionLimit?.map(e => UserReactionLimit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserReactionLimitResponseAmino): QueryAllUserReactionLimitResponse {
    const message = createBaseQueryAllUserReactionLimitResponse();
    message.userReactionLimit = object.user_reaction_limit?.map(e => UserReactionLimit.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserReactionLimitResponse): QueryAllUserReactionLimitResponseAmino {
    const obj: any = {};
    if (message.userReactionLimit) {
      obj.user_reaction_limit = message.userReactionLimit.map(e => e ? UserReactionLimit.toAmino(e) : undefined);
    } else {
      obj.user_reaction_limit = message.userReactionLimit;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserReactionLimitResponseAminoMsg): QueryAllUserReactionLimitResponse {
    return QueryAllUserReactionLimitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserReactionLimitResponseProtoMsg): QueryAllUserReactionLimitResponse {
    return QueryAllUserReactionLimitResponse.decode(message.value);
  },
  toProto(message: QueryAllUserReactionLimitResponse): Uint8Array {
    return QueryAllUserReactionLimitResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserReactionLimitResponse): QueryAllUserReactionLimitResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllUserReactionLimitResponse",
      value: QueryAllUserReactionLimitResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSentinelActivityRequest(): QueryGetSentinelActivityRequest {
  return {
    address: ""
  };
}
/**
 * QueryGetSentinelActivityRequest defines the QueryGetSentinelActivityRequest message.
 * @name QueryGetSentinelActivityRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetSentinelActivityRequest
 */
export const QueryGetSentinelActivityRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetSentinelActivityRequest",
  encode(message: QueryGetSentinelActivityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSentinelActivityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSentinelActivityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSentinelActivityRequest>): QueryGetSentinelActivityRequest {
    const message = createBaseQueryGetSentinelActivityRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetSentinelActivityRequestAmino): QueryGetSentinelActivityRequest {
    const message = createBaseQueryGetSentinelActivityRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGetSentinelActivityRequest): QueryGetSentinelActivityRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetSentinelActivityRequestAminoMsg): QueryGetSentinelActivityRequest {
    return QueryGetSentinelActivityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSentinelActivityRequestProtoMsg): QueryGetSentinelActivityRequest {
    return QueryGetSentinelActivityRequest.decode(message.value);
  },
  toProto(message: QueryGetSentinelActivityRequest): Uint8Array {
    return QueryGetSentinelActivityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSentinelActivityRequest): QueryGetSentinelActivityRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetSentinelActivityRequest",
      value: QueryGetSentinelActivityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSentinelActivityResponse(): QueryGetSentinelActivityResponse {
  return {
    sentinelActivity: SentinelActivity.fromPartial({})
  };
}
/**
 * QueryGetSentinelActivityResponse defines the QueryGetSentinelActivityResponse message.
 * @name QueryGetSentinelActivityResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetSentinelActivityResponse
 */
export const QueryGetSentinelActivityResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetSentinelActivityResponse",
  encode(message: QueryGetSentinelActivityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sentinelActivity !== undefined) {
      SentinelActivity.encode(message.sentinelActivity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSentinelActivityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSentinelActivityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sentinelActivity = SentinelActivity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSentinelActivityResponse>): QueryGetSentinelActivityResponse {
    const message = createBaseQueryGetSentinelActivityResponse();
    message.sentinelActivity = object.sentinelActivity !== undefined && object.sentinelActivity !== null ? SentinelActivity.fromPartial(object.sentinelActivity) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSentinelActivityResponseAmino): QueryGetSentinelActivityResponse {
    const message = createBaseQueryGetSentinelActivityResponse();
    if (object.sentinel_activity !== undefined && object.sentinel_activity !== null) {
      message.sentinelActivity = SentinelActivity.fromAmino(object.sentinel_activity);
    }
    return message;
  },
  toAmino(message: QueryGetSentinelActivityResponse): QueryGetSentinelActivityResponseAmino {
    const obj: any = {};
    obj.sentinel_activity = message.sentinelActivity ? SentinelActivity.toAmino(message.sentinelActivity) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSentinelActivityResponseAminoMsg): QueryGetSentinelActivityResponse {
    return QueryGetSentinelActivityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSentinelActivityResponseProtoMsg): QueryGetSentinelActivityResponse {
    return QueryGetSentinelActivityResponse.decode(message.value);
  },
  toProto(message: QueryGetSentinelActivityResponse): Uint8Array {
    return QueryGetSentinelActivityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSentinelActivityResponse): QueryGetSentinelActivityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetSentinelActivityResponse",
      value: QueryGetSentinelActivityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSentinelActivityRequest(): QueryAllSentinelActivityRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllSentinelActivityRequest defines the QueryAllSentinelActivityRequest message.
 * @name QueryAllSentinelActivityRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllSentinelActivityRequest
 */
export const QueryAllSentinelActivityRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllSentinelActivityRequest",
  encode(message: QueryAllSentinelActivityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSentinelActivityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSentinelActivityRequest();
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
  fromPartial(object: DeepPartial<QueryAllSentinelActivityRequest>): QueryAllSentinelActivityRequest {
    const message = createBaseQueryAllSentinelActivityRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSentinelActivityRequestAmino): QueryAllSentinelActivityRequest {
    const message = createBaseQueryAllSentinelActivityRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSentinelActivityRequest): QueryAllSentinelActivityRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSentinelActivityRequestAminoMsg): QueryAllSentinelActivityRequest {
    return QueryAllSentinelActivityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSentinelActivityRequestProtoMsg): QueryAllSentinelActivityRequest {
    return QueryAllSentinelActivityRequest.decode(message.value);
  },
  toProto(message: QueryAllSentinelActivityRequest): Uint8Array {
    return QueryAllSentinelActivityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSentinelActivityRequest): QueryAllSentinelActivityRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllSentinelActivityRequest",
      value: QueryAllSentinelActivityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSentinelActivityResponse(): QueryAllSentinelActivityResponse {
  return {
    sentinelActivity: [],
    pagination: undefined
  };
}
/**
 * QueryAllSentinelActivityResponse defines the QueryAllSentinelActivityResponse message.
 * @name QueryAllSentinelActivityResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllSentinelActivityResponse
 */
export const QueryAllSentinelActivityResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllSentinelActivityResponse",
  encode(message: QueryAllSentinelActivityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sentinelActivity) {
      SentinelActivity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSentinelActivityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSentinelActivityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sentinelActivity.push(SentinelActivity.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllSentinelActivityResponse>): QueryAllSentinelActivityResponse {
    const message = createBaseQueryAllSentinelActivityResponse();
    message.sentinelActivity = object.sentinelActivity?.map(e => SentinelActivity.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSentinelActivityResponseAmino): QueryAllSentinelActivityResponse {
    const message = createBaseQueryAllSentinelActivityResponse();
    message.sentinelActivity = object.sentinel_activity?.map(e => SentinelActivity.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSentinelActivityResponse): QueryAllSentinelActivityResponseAmino {
    const obj: any = {};
    if (message.sentinelActivity) {
      obj.sentinel_activity = message.sentinelActivity.map(e => e ? SentinelActivity.toAmino(e) : undefined);
    } else {
      obj.sentinel_activity = message.sentinelActivity;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSentinelActivityResponseAminoMsg): QueryAllSentinelActivityResponse {
    return QueryAllSentinelActivityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSentinelActivityResponseProtoMsg): QueryAllSentinelActivityResponse {
    return QueryAllSentinelActivityResponse.decode(message.value);
  },
  toProto(message: QueryAllSentinelActivityResponse): Uint8Array {
    return QueryAllSentinelActivityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSentinelActivityResponse): QueryAllSentinelActivityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllSentinelActivityResponse",
      value: QueryAllSentinelActivityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetHideRecordRequest(): QueryGetHideRecordRequest {
  return {
    postId: BigInt(0)
  };
}
/**
 * QueryGetHideRecordRequest defines the QueryGetHideRecordRequest message.
 * @name QueryGetHideRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetHideRecordRequest
 */
export const QueryGetHideRecordRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetHideRecordRequest",
  encode(message: QueryGetHideRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHideRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHideRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetHideRecordRequest>): QueryGetHideRecordRequest {
    const message = createBaseQueryGetHideRecordRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetHideRecordRequestAmino): QueryGetHideRecordRequest {
    const message = createBaseQueryGetHideRecordRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: QueryGetHideRecordRequest): QueryGetHideRecordRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetHideRecordRequestAminoMsg): QueryGetHideRecordRequest {
    return QueryGetHideRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetHideRecordRequestProtoMsg): QueryGetHideRecordRequest {
    return QueryGetHideRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetHideRecordRequest): Uint8Array {
    return QueryGetHideRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHideRecordRequest): QueryGetHideRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetHideRecordRequest",
      value: QueryGetHideRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetHideRecordResponse(): QueryGetHideRecordResponse {
  return {
    hideRecord: HideRecord.fromPartial({})
  };
}
/**
 * QueryGetHideRecordResponse defines the QueryGetHideRecordResponse message.
 * @name QueryGetHideRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetHideRecordResponse
 */
export const QueryGetHideRecordResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetHideRecordResponse",
  encode(message: QueryGetHideRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hideRecord !== undefined) {
      HideRecord.encode(message.hideRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHideRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHideRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hideRecord = HideRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetHideRecordResponse>): QueryGetHideRecordResponse {
    const message = createBaseQueryGetHideRecordResponse();
    message.hideRecord = object.hideRecord !== undefined && object.hideRecord !== null ? HideRecord.fromPartial(object.hideRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetHideRecordResponseAmino): QueryGetHideRecordResponse {
    const message = createBaseQueryGetHideRecordResponse();
    if (object.hide_record !== undefined && object.hide_record !== null) {
      message.hideRecord = HideRecord.fromAmino(object.hide_record);
    }
    return message;
  },
  toAmino(message: QueryGetHideRecordResponse): QueryGetHideRecordResponseAmino {
    const obj: any = {};
    obj.hide_record = message.hideRecord ? HideRecord.toAmino(message.hideRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetHideRecordResponseAminoMsg): QueryGetHideRecordResponse {
    return QueryGetHideRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetHideRecordResponseProtoMsg): QueryGetHideRecordResponse {
    return QueryGetHideRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetHideRecordResponse): Uint8Array {
    return QueryGetHideRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHideRecordResponse): QueryGetHideRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetHideRecordResponse",
      value: QueryGetHideRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllHideRecordRequest(): QueryAllHideRecordRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllHideRecordRequest defines the QueryAllHideRecordRequest message.
 * @name QueryAllHideRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllHideRecordRequest
 */
export const QueryAllHideRecordRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllHideRecordRequest",
  encode(message: QueryAllHideRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHideRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHideRecordRequest();
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
  fromPartial(object: DeepPartial<QueryAllHideRecordRequest>): QueryAllHideRecordRequest {
    const message = createBaseQueryAllHideRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllHideRecordRequestAmino): QueryAllHideRecordRequest {
    const message = createBaseQueryAllHideRecordRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllHideRecordRequest): QueryAllHideRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllHideRecordRequestAminoMsg): QueryAllHideRecordRequest {
    return QueryAllHideRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllHideRecordRequestProtoMsg): QueryAllHideRecordRequest {
    return QueryAllHideRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllHideRecordRequest): Uint8Array {
    return QueryAllHideRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHideRecordRequest): QueryAllHideRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllHideRecordRequest",
      value: QueryAllHideRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllHideRecordResponse(): QueryAllHideRecordResponse {
  return {
    hideRecord: [],
    pagination: undefined
  };
}
/**
 * QueryAllHideRecordResponse defines the QueryAllHideRecordResponse message.
 * @name QueryAllHideRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllHideRecordResponse
 */
export const QueryAllHideRecordResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllHideRecordResponse",
  encode(message: QueryAllHideRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hideRecord) {
      HideRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHideRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHideRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hideRecord.push(HideRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllHideRecordResponse>): QueryAllHideRecordResponse {
    const message = createBaseQueryAllHideRecordResponse();
    message.hideRecord = object.hideRecord?.map(e => HideRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllHideRecordResponseAmino): QueryAllHideRecordResponse {
    const message = createBaseQueryAllHideRecordResponse();
    message.hideRecord = object.hide_record?.map(e => HideRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllHideRecordResponse): QueryAllHideRecordResponseAmino {
    const obj: any = {};
    if (message.hideRecord) {
      obj.hide_record = message.hideRecord.map(e => e ? HideRecord.toAmino(e) : undefined);
    } else {
      obj.hide_record = message.hideRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllHideRecordResponseAminoMsg): QueryAllHideRecordResponse {
    return QueryAllHideRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllHideRecordResponseProtoMsg): QueryAllHideRecordResponse {
    return QueryAllHideRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllHideRecordResponse): Uint8Array {
    return QueryAllHideRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHideRecordResponse): QueryAllHideRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllHideRecordResponse",
      value: QueryAllHideRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadLockRecordRequest(): QueryGetThreadLockRecordRequest {
  return {
    rootId: BigInt(0)
  };
}
/**
 * QueryGetThreadLockRecordRequest defines the QueryGetThreadLockRecordRequest message.
 * @name QueryGetThreadLockRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadLockRecordRequest
 */
export const QueryGetThreadLockRecordRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadLockRecordRequest",
  encode(message: QueryGetThreadLockRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadLockRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadLockRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadLockRecordRequest>): QueryGetThreadLockRecordRequest {
    const message = createBaseQueryGetThreadLockRecordRequest();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetThreadLockRecordRequestAmino): QueryGetThreadLockRecordRequest {
    const message = createBaseQueryGetThreadLockRecordRequest();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: QueryGetThreadLockRecordRequest): QueryGetThreadLockRecordRequestAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadLockRecordRequestAminoMsg): QueryGetThreadLockRecordRequest {
    return QueryGetThreadLockRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadLockRecordRequestProtoMsg): QueryGetThreadLockRecordRequest {
    return QueryGetThreadLockRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetThreadLockRecordRequest): Uint8Array {
    return QueryGetThreadLockRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadLockRecordRequest): QueryGetThreadLockRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadLockRecordRequest",
      value: QueryGetThreadLockRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadLockRecordResponse(): QueryGetThreadLockRecordResponse {
  return {
    threadLockRecord: ThreadLockRecord.fromPartial({})
  };
}
/**
 * QueryGetThreadLockRecordResponse defines the QueryGetThreadLockRecordResponse message.
 * @name QueryGetThreadLockRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadLockRecordResponse
 */
export const QueryGetThreadLockRecordResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadLockRecordResponse",
  encode(message: QueryGetThreadLockRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadLockRecord !== undefined) {
      ThreadLockRecord.encode(message.threadLockRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadLockRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadLockRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadLockRecord = ThreadLockRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadLockRecordResponse>): QueryGetThreadLockRecordResponse {
    const message = createBaseQueryGetThreadLockRecordResponse();
    message.threadLockRecord = object.threadLockRecord !== undefined && object.threadLockRecord !== null ? ThreadLockRecord.fromPartial(object.threadLockRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetThreadLockRecordResponseAmino): QueryGetThreadLockRecordResponse {
    const message = createBaseQueryGetThreadLockRecordResponse();
    if (object.thread_lock_record !== undefined && object.thread_lock_record !== null) {
      message.threadLockRecord = ThreadLockRecord.fromAmino(object.thread_lock_record);
    }
    return message;
  },
  toAmino(message: QueryGetThreadLockRecordResponse): QueryGetThreadLockRecordResponseAmino {
    const obj: any = {};
    obj.thread_lock_record = message.threadLockRecord ? ThreadLockRecord.toAmino(message.threadLockRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadLockRecordResponseAminoMsg): QueryGetThreadLockRecordResponse {
    return QueryGetThreadLockRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadLockRecordResponseProtoMsg): QueryGetThreadLockRecordResponse {
    return QueryGetThreadLockRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetThreadLockRecordResponse): Uint8Array {
    return QueryGetThreadLockRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadLockRecordResponse): QueryGetThreadLockRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadLockRecordResponse",
      value: QueryGetThreadLockRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadLockRecordRequest(): QueryAllThreadLockRecordRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllThreadLockRecordRequest defines the QueryAllThreadLockRecordRequest message.
 * @name QueryAllThreadLockRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadLockRecordRequest
 */
export const QueryAllThreadLockRecordRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadLockRecordRequest",
  encode(message: QueryAllThreadLockRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadLockRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadLockRecordRequest();
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
  fromPartial(object: DeepPartial<QueryAllThreadLockRecordRequest>): QueryAllThreadLockRecordRequest {
    const message = createBaseQueryAllThreadLockRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadLockRecordRequestAmino): QueryAllThreadLockRecordRequest {
    const message = createBaseQueryAllThreadLockRecordRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadLockRecordRequest): QueryAllThreadLockRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadLockRecordRequestAminoMsg): QueryAllThreadLockRecordRequest {
    return QueryAllThreadLockRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadLockRecordRequestProtoMsg): QueryAllThreadLockRecordRequest {
    return QueryAllThreadLockRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllThreadLockRecordRequest): Uint8Array {
    return QueryAllThreadLockRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadLockRecordRequest): QueryAllThreadLockRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadLockRecordRequest",
      value: QueryAllThreadLockRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadLockRecordResponse(): QueryAllThreadLockRecordResponse {
  return {
    threadLockRecord: [],
    pagination: undefined
  };
}
/**
 * QueryAllThreadLockRecordResponse defines the QueryAllThreadLockRecordResponse message.
 * @name QueryAllThreadLockRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadLockRecordResponse
 */
export const QueryAllThreadLockRecordResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadLockRecordResponse",
  encode(message: QueryAllThreadLockRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.threadLockRecord) {
      ThreadLockRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadLockRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadLockRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadLockRecord.push(ThreadLockRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllThreadLockRecordResponse>): QueryAllThreadLockRecordResponse {
    const message = createBaseQueryAllThreadLockRecordResponse();
    message.threadLockRecord = object.threadLockRecord?.map(e => ThreadLockRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadLockRecordResponseAmino): QueryAllThreadLockRecordResponse {
    const message = createBaseQueryAllThreadLockRecordResponse();
    message.threadLockRecord = object.thread_lock_record?.map(e => ThreadLockRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadLockRecordResponse): QueryAllThreadLockRecordResponseAmino {
    const obj: any = {};
    if (message.threadLockRecord) {
      obj.thread_lock_record = message.threadLockRecord.map(e => e ? ThreadLockRecord.toAmino(e) : undefined);
    } else {
      obj.thread_lock_record = message.threadLockRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadLockRecordResponseAminoMsg): QueryAllThreadLockRecordResponse {
    return QueryAllThreadLockRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadLockRecordResponseProtoMsg): QueryAllThreadLockRecordResponse {
    return QueryAllThreadLockRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllThreadLockRecordResponse): Uint8Array {
    return QueryAllThreadLockRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadLockRecordResponse): QueryAllThreadLockRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadLockRecordResponse",
      value: QueryAllThreadLockRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadMoveRecordRequest(): QueryGetThreadMoveRecordRequest {
  return {
    rootId: BigInt(0)
  };
}
/**
 * QueryGetThreadMoveRecordRequest defines the QueryGetThreadMoveRecordRequest message.
 * @name QueryGetThreadMoveRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMoveRecordRequest
 */
export const QueryGetThreadMoveRecordRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMoveRecordRequest",
  encode(message: QueryGetThreadMoveRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadMoveRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadMoveRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadMoveRecordRequest>): QueryGetThreadMoveRecordRequest {
    const message = createBaseQueryGetThreadMoveRecordRequest();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetThreadMoveRecordRequestAmino): QueryGetThreadMoveRecordRequest {
    const message = createBaseQueryGetThreadMoveRecordRequest();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: QueryGetThreadMoveRecordRequest): QueryGetThreadMoveRecordRequestAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadMoveRecordRequestAminoMsg): QueryGetThreadMoveRecordRequest {
    return QueryGetThreadMoveRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadMoveRecordRequestProtoMsg): QueryGetThreadMoveRecordRequest {
    return QueryGetThreadMoveRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetThreadMoveRecordRequest): Uint8Array {
    return QueryGetThreadMoveRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadMoveRecordRequest): QueryGetThreadMoveRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadMoveRecordRequest",
      value: QueryGetThreadMoveRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadMoveRecordResponse(): QueryGetThreadMoveRecordResponse {
  return {
    threadMoveRecord: ThreadMoveRecord.fromPartial({})
  };
}
/**
 * QueryGetThreadMoveRecordResponse defines the QueryGetThreadMoveRecordResponse message.
 * @name QueryGetThreadMoveRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMoveRecordResponse
 */
export const QueryGetThreadMoveRecordResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMoveRecordResponse",
  encode(message: QueryGetThreadMoveRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadMoveRecord !== undefined) {
      ThreadMoveRecord.encode(message.threadMoveRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadMoveRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadMoveRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadMoveRecord = ThreadMoveRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadMoveRecordResponse>): QueryGetThreadMoveRecordResponse {
    const message = createBaseQueryGetThreadMoveRecordResponse();
    message.threadMoveRecord = object.threadMoveRecord !== undefined && object.threadMoveRecord !== null ? ThreadMoveRecord.fromPartial(object.threadMoveRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetThreadMoveRecordResponseAmino): QueryGetThreadMoveRecordResponse {
    const message = createBaseQueryGetThreadMoveRecordResponse();
    if (object.thread_move_record !== undefined && object.thread_move_record !== null) {
      message.threadMoveRecord = ThreadMoveRecord.fromAmino(object.thread_move_record);
    }
    return message;
  },
  toAmino(message: QueryGetThreadMoveRecordResponse): QueryGetThreadMoveRecordResponseAmino {
    const obj: any = {};
    obj.thread_move_record = message.threadMoveRecord ? ThreadMoveRecord.toAmino(message.threadMoveRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadMoveRecordResponseAminoMsg): QueryGetThreadMoveRecordResponse {
    return QueryGetThreadMoveRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadMoveRecordResponseProtoMsg): QueryGetThreadMoveRecordResponse {
    return QueryGetThreadMoveRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetThreadMoveRecordResponse): Uint8Array {
    return QueryGetThreadMoveRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadMoveRecordResponse): QueryGetThreadMoveRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadMoveRecordResponse",
      value: QueryGetThreadMoveRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadMoveRecordRequest(): QueryAllThreadMoveRecordRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllThreadMoveRecordRequest defines the QueryAllThreadMoveRecordRequest message.
 * @name QueryAllThreadMoveRecordRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMoveRecordRequest
 */
export const QueryAllThreadMoveRecordRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMoveRecordRequest",
  encode(message: QueryAllThreadMoveRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadMoveRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadMoveRecordRequest();
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
  fromPartial(object: DeepPartial<QueryAllThreadMoveRecordRequest>): QueryAllThreadMoveRecordRequest {
    const message = createBaseQueryAllThreadMoveRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadMoveRecordRequestAmino): QueryAllThreadMoveRecordRequest {
    const message = createBaseQueryAllThreadMoveRecordRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadMoveRecordRequest): QueryAllThreadMoveRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadMoveRecordRequestAminoMsg): QueryAllThreadMoveRecordRequest {
    return QueryAllThreadMoveRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadMoveRecordRequestProtoMsg): QueryAllThreadMoveRecordRequest {
    return QueryAllThreadMoveRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllThreadMoveRecordRequest): Uint8Array {
    return QueryAllThreadMoveRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadMoveRecordRequest): QueryAllThreadMoveRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadMoveRecordRequest",
      value: QueryAllThreadMoveRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadMoveRecordResponse(): QueryAllThreadMoveRecordResponse {
  return {
    threadMoveRecord: [],
    pagination: undefined
  };
}
/**
 * QueryAllThreadMoveRecordResponse defines the QueryAllThreadMoveRecordResponse message.
 * @name QueryAllThreadMoveRecordResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMoveRecordResponse
 */
export const QueryAllThreadMoveRecordResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMoveRecordResponse",
  encode(message: QueryAllThreadMoveRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.threadMoveRecord) {
      ThreadMoveRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadMoveRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadMoveRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadMoveRecord.push(ThreadMoveRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllThreadMoveRecordResponse>): QueryAllThreadMoveRecordResponse {
    const message = createBaseQueryAllThreadMoveRecordResponse();
    message.threadMoveRecord = object.threadMoveRecord?.map(e => ThreadMoveRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadMoveRecordResponseAmino): QueryAllThreadMoveRecordResponse {
    const message = createBaseQueryAllThreadMoveRecordResponse();
    message.threadMoveRecord = object.thread_move_record?.map(e => ThreadMoveRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadMoveRecordResponse): QueryAllThreadMoveRecordResponseAmino {
    const obj: any = {};
    if (message.threadMoveRecord) {
      obj.thread_move_record = message.threadMoveRecord.map(e => e ? ThreadMoveRecord.toAmino(e) : undefined);
    } else {
      obj.thread_move_record = message.threadMoveRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadMoveRecordResponseAminoMsg): QueryAllThreadMoveRecordResponse {
    return QueryAllThreadMoveRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadMoveRecordResponseProtoMsg): QueryAllThreadMoveRecordResponse {
    return QueryAllThreadMoveRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllThreadMoveRecordResponse): Uint8Array {
    return QueryAllThreadMoveRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadMoveRecordResponse): QueryAllThreadMoveRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadMoveRecordResponse",
      value: QueryAllThreadMoveRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPostFlagRequest(): QueryGetPostFlagRequest {
  return {
    postId: BigInt(0)
  };
}
/**
 * QueryGetPostFlagRequest defines the QueryGetPostFlagRequest message.
 * @name QueryGetPostFlagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostFlagRequest
 */
export const QueryGetPostFlagRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostFlagRequest",
  encode(message: QueryGetPostFlagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPostFlagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostFlagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPostFlagRequest>): QueryGetPostFlagRequest {
    const message = createBaseQueryGetPostFlagRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPostFlagRequestAmino): QueryGetPostFlagRequest {
    const message = createBaseQueryGetPostFlagRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: QueryGetPostFlagRequest): QueryGetPostFlagRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPostFlagRequestAminoMsg): QueryGetPostFlagRequest {
    return QueryGetPostFlagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPostFlagRequestProtoMsg): QueryGetPostFlagRequest {
    return QueryGetPostFlagRequest.decode(message.value);
  },
  toProto(message: QueryGetPostFlagRequest): Uint8Array {
    return QueryGetPostFlagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPostFlagRequest): QueryGetPostFlagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetPostFlagRequest",
      value: QueryGetPostFlagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPostFlagResponse(): QueryGetPostFlagResponse {
  return {
    postFlag: PostFlag.fromPartial({})
  };
}
/**
 * QueryGetPostFlagResponse defines the QueryGetPostFlagResponse message.
 * @name QueryGetPostFlagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostFlagResponse
 */
export const QueryGetPostFlagResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostFlagResponse",
  encode(message: QueryGetPostFlagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postFlag !== undefined) {
      PostFlag.encode(message.postFlag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPostFlagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostFlagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postFlag = PostFlag.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPostFlagResponse>): QueryGetPostFlagResponse {
    const message = createBaseQueryGetPostFlagResponse();
    message.postFlag = object.postFlag !== undefined && object.postFlag !== null ? PostFlag.fromPartial(object.postFlag) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPostFlagResponseAmino): QueryGetPostFlagResponse {
    const message = createBaseQueryGetPostFlagResponse();
    if (object.post_flag !== undefined && object.post_flag !== null) {
      message.postFlag = PostFlag.fromAmino(object.post_flag);
    }
    return message;
  },
  toAmino(message: QueryGetPostFlagResponse): QueryGetPostFlagResponseAmino {
    const obj: any = {};
    obj.post_flag = message.postFlag ? PostFlag.toAmino(message.postFlag) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPostFlagResponseAminoMsg): QueryGetPostFlagResponse {
    return QueryGetPostFlagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPostFlagResponseProtoMsg): QueryGetPostFlagResponse {
    return QueryGetPostFlagResponse.decode(message.value);
  },
  toProto(message: QueryGetPostFlagResponse): Uint8Array {
    return QueryGetPostFlagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPostFlagResponse): QueryGetPostFlagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetPostFlagResponse",
      value: QueryGetPostFlagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPostFlagRequest(): QueryAllPostFlagRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllPostFlagRequest defines the QueryAllPostFlagRequest message.
 * @name QueryAllPostFlagRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostFlagRequest
 */
export const QueryAllPostFlagRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostFlagRequest",
  encode(message: QueryAllPostFlagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPostFlagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPostFlagRequest();
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
  fromPartial(object: DeepPartial<QueryAllPostFlagRequest>): QueryAllPostFlagRequest {
    const message = createBaseQueryAllPostFlagRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPostFlagRequestAmino): QueryAllPostFlagRequest {
    const message = createBaseQueryAllPostFlagRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPostFlagRequest): QueryAllPostFlagRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPostFlagRequestAminoMsg): QueryAllPostFlagRequest {
    return QueryAllPostFlagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPostFlagRequestProtoMsg): QueryAllPostFlagRequest {
    return QueryAllPostFlagRequest.decode(message.value);
  },
  toProto(message: QueryAllPostFlagRequest): Uint8Array {
    return QueryAllPostFlagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPostFlagRequest): QueryAllPostFlagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllPostFlagRequest",
      value: QueryAllPostFlagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPostFlagResponse(): QueryAllPostFlagResponse {
  return {
    postFlag: [],
    pagination: undefined
  };
}
/**
 * QueryAllPostFlagResponse defines the QueryAllPostFlagResponse message.
 * @name QueryAllPostFlagResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllPostFlagResponse
 */
export const QueryAllPostFlagResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllPostFlagResponse",
  encode(message: QueryAllPostFlagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.postFlag) {
      PostFlag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPostFlagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPostFlagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postFlag.push(PostFlag.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllPostFlagResponse>): QueryAllPostFlagResponse {
    const message = createBaseQueryAllPostFlagResponse();
    message.postFlag = object.postFlag?.map(e => PostFlag.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPostFlagResponseAmino): QueryAllPostFlagResponse {
    const message = createBaseQueryAllPostFlagResponse();
    message.postFlag = object.post_flag?.map(e => PostFlag.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPostFlagResponse): QueryAllPostFlagResponseAmino {
    const obj: any = {};
    if (message.postFlag) {
      obj.post_flag = message.postFlag.map(e => e ? PostFlag.toAmino(e) : undefined);
    } else {
      obj.post_flag = message.postFlag;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPostFlagResponseAminoMsg): QueryAllPostFlagResponse {
    return QueryAllPostFlagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPostFlagResponseProtoMsg): QueryAllPostFlagResponse {
    return QueryAllPostFlagResponse.decode(message.value);
  },
  toProto(message: QueryAllPostFlagResponse): Uint8Array {
    return QueryAllPostFlagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPostFlagResponse): QueryAllPostFlagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllPostFlagResponse",
      value: QueryAllPostFlagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetBountyRequest(): QueryGetBountyRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetBountyRequest defines the QueryGetBountyRequest message.
 * @name QueryGetBountyRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetBountyRequest
 */
export const QueryGetBountyRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetBountyRequest",
  encode(message: QueryGetBountyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBountyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBountyRequest();
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
  fromPartial(object: DeepPartial<QueryGetBountyRequest>): QueryGetBountyRequest {
    const message = createBaseQueryGetBountyRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetBountyRequestAmino): QueryGetBountyRequest {
    const message = createBaseQueryGetBountyRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetBountyRequest): QueryGetBountyRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBountyRequestAminoMsg): QueryGetBountyRequest {
    return QueryGetBountyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBountyRequestProtoMsg): QueryGetBountyRequest {
    return QueryGetBountyRequest.decode(message.value);
  },
  toProto(message: QueryGetBountyRequest): Uint8Array {
    return QueryGetBountyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBountyRequest): QueryGetBountyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetBountyRequest",
      value: QueryGetBountyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetBountyResponse(): QueryGetBountyResponse {
  return {
    bounty: Bounty.fromPartial({})
  };
}
/**
 * QueryGetBountyResponse defines the QueryGetBountyResponse message.
 * @name QueryGetBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetBountyResponse
 */
export const QueryGetBountyResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetBountyResponse",
  encode(message: QueryGetBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bounty !== undefined) {
      Bounty.encode(message.bounty, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBountyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBountyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bounty = Bounty.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetBountyResponse>): QueryGetBountyResponse {
    const message = createBaseQueryGetBountyResponse();
    message.bounty = object.bounty !== undefined && object.bounty !== null ? Bounty.fromPartial(object.bounty) : undefined;
    return message;
  },
  fromAmino(object: QueryGetBountyResponseAmino): QueryGetBountyResponse {
    const message = createBaseQueryGetBountyResponse();
    if (object.bounty !== undefined && object.bounty !== null) {
      message.bounty = Bounty.fromAmino(object.bounty);
    }
    return message;
  },
  toAmino(message: QueryGetBountyResponse): QueryGetBountyResponseAmino {
    const obj: any = {};
    obj.bounty = message.bounty ? Bounty.toAmino(message.bounty) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBountyResponseAminoMsg): QueryGetBountyResponse {
    return QueryGetBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBountyResponseProtoMsg): QueryGetBountyResponse {
    return QueryGetBountyResponse.decode(message.value);
  },
  toProto(message: QueryGetBountyResponse): Uint8Array {
    return QueryGetBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBountyResponse): QueryGetBountyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetBountyResponse",
      value: QueryGetBountyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBountyRequest(): QueryAllBountyRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllBountyRequest defines the QueryAllBountyRequest message.
 * @name QueryAllBountyRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllBountyRequest
 */
export const QueryAllBountyRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllBountyRequest",
  encode(message: QueryAllBountyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBountyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBountyRequest();
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
  fromPartial(object: DeepPartial<QueryAllBountyRequest>): QueryAllBountyRequest {
    const message = createBaseQueryAllBountyRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBountyRequestAmino): QueryAllBountyRequest {
    const message = createBaseQueryAllBountyRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBountyRequest): QueryAllBountyRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBountyRequestAminoMsg): QueryAllBountyRequest {
    return QueryAllBountyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBountyRequestProtoMsg): QueryAllBountyRequest {
    return QueryAllBountyRequest.decode(message.value);
  },
  toProto(message: QueryAllBountyRequest): Uint8Array {
    return QueryAllBountyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBountyRequest): QueryAllBountyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllBountyRequest",
      value: QueryAllBountyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBountyResponse(): QueryAllBountyResponse {
  return {
    bounty: [],
    pagination: undefined
  };
}
/**
 * QueryAllBountyResponse defines the QueryAllBountyResponse message.
 * @name QueryAllBountyResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllBountyResponse
 */
export const QueryAllBountyResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllBountyResponse",
  encode(message: QueryAllBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bounty) {
      Bounty.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBountyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBountyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bounty.push(Bounty.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllBountyResponse>): QueryAllBountyResponse {
    const message = createBaseQueryAllBountyResponse();
    message.bounty = object.bounty?.map(e => Bounty.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBountyResponseAmino): QueryAllBountyResponse {
    const message = createBaseQueryAllBountyResponse();
    message.bounty = object.bounty?.map(e => Bounty.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBountyResponse): QueryAllBountyResponseAmino {
    const obj: any = {};
    if (message.bounty) {
      obj.bounty = message.bounty.map(e => e ? Bounty.toAmino(e) : undefined);
    } else {
      obj.bounty = message.bounty;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBountyResponseAminoMsg): QueryAllBountyResponse {
    return QueryAllBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBountyResponseProtoMsg): QueryAllBountyResponse {
    return QueryAllBountyResponse.decode(message.value);
  },
  toProto(message: QueryAllBountyResponse): Uint8Array {
    return QueryAllBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBountyResponse): QueryAllBountyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllBountyResponse",
      value: QueryAllBountyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadMetadataRequest(): QueryGetThreadMetadataRequest {
  return {
    threadId: BigInt(0)
  };
}
/**
 * QueryGetThreadMetadataRequest defines the QueryGetThreadMetadataRequest message.
 * @name QueryGetThreadMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMetadataRequest
 */
export const QueryGetThreadMetadataRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMetadataRequest",
  encode(message: QueryGetThreadMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadMetadataRequest>): QueryGetThreadMetadataRequest {
    const message = createBaseQueryGetThreadMetadataRequest();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetThreadMetadataRequestAmino): QueryGetThreadMetadataRequest {
    const message = createBaseQueryGetThreadMetadataRequest();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    return message;
  },
  toAmino(message: QueryGetThreadMetadataRequest): QueryGetThreadMetadataRequestAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadMetadataRequestAminoMsg): QueryGetThreadMetadataRequest {
    return QueryGetThreadMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadMetadataRequestProtoMsg): QueryGetThreadMetadataRequest {
    return QueryGetThreadMetadataRequest.decode(message.value);
  },
  toProto(message: QueryGetThreadMetadataRequest): Uint8Array {
    return QueryGetThreadMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadMetadataRequest): QueryGetThreadMetadataRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadMetadataRequest",
      value: QueryGetThreadMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadMetadataResponse(): QueryGetThreadMetadataResponse {
  return {
    threadMetadata: ThreadMetadata.fromPartial({})
  };
}
/**
 * QueryGetThreadMetadataResponse defines the QueryGetThreadMetadataResponse message.
 * @name QueryGetThreadMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadMetadataResponse
 */
export const QueryGetThreadMetadataResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadMetadataResponse",
  encode(message: QueryGetThreadMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadMetadata !== undefined) {
      ThreadMetadata.encode(message.threadMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadMetadata = ThreadMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadMetadataResponse>): QueryGetThreadMetadataResponse {
    const message = createBaseQueryGetThreadMetadataResponse();
    message.threadMetadata = object.threadMetadata !== undefined && object.threadMetadata !== null ? ThreadMetadata.fromPartial(object.threadMetadata) : undefined;
    return message;
  },
  fromAmino(object: QueryGetThreadMetadataResponseAmino): QueryGetThreadMetadataResponse {
    const message = createBaseQueryGetThreadMetadataResponse();
    if (object.thread_metadata !== undefined && object.thread_metadata !== null) {
      message.threadMetadata = ThreadMetadata.fromAmino(object.thread_metadata);
    }
    return message;
  },
  toAmino(message: QueryGetThreadMetadataResponse): QueryGetThreadMetadataResponseAmino {
    const obj: any = {};
    obj.thread_metadata = message.threadMetadata ? ThreadMetadata.toAmino(message.threadMetadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadMetadataResponseAminoMsg): QueryGetThreadMetadataResponse {
    return QueryGetThreadMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadMetadataResponseProtoMsg): QueryGetThreadMetadataResponse {
    return QueryGetThreadMetadataResponse.decode(message.value);
  },
  toProto(message: QueryGetThreadMetadataResponse): Uint8Array {
    return QueryGetThreadMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadMetadataResponse): QueryGetThreadMetadataResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadMetadataResponse",
      value: QueryGetThreadMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadMetadataRequest(): QueryAllThreadMetadataRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllThreadMetadataRequest defines the QueryAllThreadMetadataRequest message.
 * @name QueryAllThreadMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMetadataRequest
 */
export const QueryAllThreadMetadataRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMetadataRequest",
  encode(message: QueryAllThreadMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadMetadataRequest();
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
  fromPartial(object: DeepPartial<QueryAllThreadMetadataRequest>): QueryAllThreadMetadataRequest {
    const message = createBaseQueryAllThreadMetadataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadMetadataRequestAmino): QueryAllThreadMetadataRequest {
    const message = createBaseQueryAllThreadMetadataRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadMetadataRequest): QueryAllThreadMetadataRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadMetadataRequestAminoMsg): QueryAllThreadMetadataRequest {
    return QueryAllThreadMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadMetadataRequestProtoMsg): QueryAllThreadMetadataRequest {
    return QueryAllThreadMetadataRequest.decode(message.value);
  },
  toProto(message: QueryAllThreadMetadataRequest): Uint8Array {
    return QueryAllThreadMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadMetadataRequest): QueryAllThreadMetadataRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadMetadataRequest",
      value: QueryAllThreadMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadMetadataResponse(): QueryAllThreadMetadataResponse {
  return {
    threadMetadata: [],
    pagination: undefined
  };
}
/**
 * QueryAllThreadMetadataResponse defines the QueryAllThreadMetadataResponse message.
 * @name QueryAllThreadMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadMetadataResponse
 */
export const QueryAllThreadMetadataResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadMetadataResponse",
  encode(message: QueryAllThreadMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.threadMetadata) {
      ThreadMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadMetadata.push(ThreadMetadata.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllThreadMetadataResponse>): QueryAllThreadMetadataResponse {
    const message = createBaseQueryAllThreadMetadataResponse();
    message.threadMetadata = object.threadMetadata?.map(e => ThreadMetadata.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadMetadataResponseAmino): QueryAllThreadMetadataResponse {
    const message = createBaseQueryAllThreadMetadataResponse();
    message.threadMetadata = object.thread_metadata?.map(e => ThreadMetadata.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadMetadataResponse): QueryAllThreadMetadataResponseAmino {
    const obj: any = {};
    if (message.threadMetadata) {
      obj.thread_metadata = message.threadMetadata.map(e => e ? ThreadMetadata.toAmino(e) : undefined);
    } else {
      obj.thread_metadata = message.threadMetadata;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadMetadataResponseAminoMsg): QueryAllThreadMetadataResponse {
    return QueryAllThreadMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadMetadataResponseProtoMsg): QueryAllThreadMetadataResponse {
    return QueryAllThreadMetadataResponse.decode(message.value);
  },
  toProto(message: QueryAllThreadMetadataResponse): Uint8Array {
    return QueryAllThreadMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadMetadataResponse): QueryAllThreadMetadataResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadMetadataResponse",
      value: QueryAllThreadMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadFollowRequest(): QueryGetThreadFollowRequest {
  return {
    follower: ""
  };
}
/**
 * QueryGetThreadFollowRequest defines the QueryGetThreadFollowRequest message.
 * @name QueryGetThreadFollowRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowRequest
 */
export const QueryGetThreadFollowRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowRequest",
  encode(message: QueryGetThreadFollowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.follower !== "") {
      writer.uint32(10).string(message.follower);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadFollowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadFollowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.follower = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadFollowRequest>): QueryGetThreadFollowRequest {
    const message = createBaseQueryGetThreadFollowRequest();
    message.follower = object.follower ?? "";
    return message;
  },
  fromAmino(object: QueryGetThreadFollowRequestAmino): QueryGetThreadFollowRequest {
    const message = createBaseQueryGetThreadFollowRequest();
    if (object.follower !== undefined && object.follower !== null) {
      message.follower = object.follower;
    }
    return message;
  },
  toAmino(message: QueryGetThreadFollowRequest): QueryGetThreadFollowRequestAmino {
    const obj: any = {};
    obj.follower = message.follower === "" ? undefined : message.follower;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadFollowRequestAminoMsg): QueryGetThreadFollowRequest {
    return QueryGetThreadFollowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadFollowRequestProtoMsg): QueryGetThreadFollowRequest {
    return QueryGetThreadFollowRequest.decode(message.value);
  },
  toProto(message: QueryGetThreadFollowRequest): Uint8Array {
    return QueryGetThreadFollowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadFollowRequest): QueryGetThreadFollowRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowRequest",
      value: QueryGetThreadFollowRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadFollowResponse(): QueryGetThreadFollowResponse {
  return {
    threadFollow: ThreadFollow.fromPartial({})
  };
}
/**
 * QueryGetThreadFollowResponse defines the QueryGetThreadFollowResponse message.
 * @name QueryGetThreadFollowResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowResponse
 */
export const QueryGetThreadFollowResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowResponse",
  encode(message: QueryGetThreadFollowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadFollow !== undefined) {
      ThreadFollow.encode(message.threadFollow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadFollowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadFollowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadFollow = ThreadFollow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadFollowResponse>): QueryGetThreadFollowResponse {
    const message = createBaseQueryGetThreadFollowResponse();
    message.threadFollow = object.threadFollow !== undefined && object.threadFollow !== null ? ThreadFollow.fromPartial(object.threadFollow) : undefined;
    return message;
  },
  fromAmino(object: QueryGetThreadFollowResponseAmino): QueryGetThreadFollowResponse {
    const message = createBaseQueryGetThreadFollowResponse();
    if (object.thread_follow !== undefined && object.thread_follow !== null) {
      message.threadFollow = ThreadFollow.fromAmino(object.thread_follow);
    }
    return message;
  },
  toAmino(message: QueryGetThreadFollowResponse): QueryGetThreadFollowResponseAmino {
    const obj: any = {};
    obj.thread_follow = message.threadFollow ? ThreadFollow.toAmino(message.threadFollow) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadFollowResponseAminoMsg): QueryGetThreadFollowResponse {
    return QueryGetThreadFollowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadFollowResponseProtoMsg): QueryGetThreadFollowResponse {
    return QueryGetThreadFollowResponse.decode(message.value);
  },
  toProto(message: QueryGetThreadFollowResponse): Uint8Array {
    return QueryGetThreadFollowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadFollowResponse): QueryGetThreadFollowResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowResponse",
      value: QueryGetThreadFollowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadFollowRequest(): QueryAllThreadFollowRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllThreadFollowRequest defines the QueryAllThreadFollowRequest message.
 * @name QueryAllThreadFollowRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowRequest
 */
export const QueryAllThreadFollowRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowRequest",
  encode(message: QueryAllThreadFollowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadFollowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadFollowRequest();
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
  fromPartial(object: DeepPartial<QueryAllThreadFollowRequest>): QueryAllThreadFollowRequest {
    const message = createBaseQueryAllThreadFollowRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadFollowRequestAmino): QueryAllThreadFollowRequest {
    const message = createBaseQueryAllThreadFollowRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadFollowRequest): QueryAllThreadFollowRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadFollowRequestAminoMsg): QueryAllThreadFollowRequest {
    return QueryAllThreadFollowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadFollowRequestProtoMsg): QueryAllThreadFollowRequest {
    return QueryAllThreadFollowRequest.decode(message.value);
  },
  toProto(message: QueryAllThreadFollowRequest): Uint8Array {
    return QueryAllThreadFollowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadFollowRequest): QueryAllThreadFollowRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowRequest",
      value: QueryAllThreadFollowRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadFollowResponse(): QueryAllThreadFollowResponse {
  return {
    threadFollow: [],
    pagination: undefined
  };
}
/**
 * QueryAllThreadFollowResponse defines the QueryAllThreadFollowResponse message.
 * @name QueryAllThreadFollowResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowResponse
 */
export const QueryAllThreadFollowResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowResponse",
  encode(message: QueryAllThreadFollowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.threadFollow) {
      ThreadFollow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadFollowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadFollowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadFollow.push(ThreadFollow.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllThreadFollowResponse>): QueryAllThreadFollowResponse {
    const message = createBaseQueryAllThreadFollowResponse();
    message.threadFollow = object.threadFollow?.map(e => ThreadFollow.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadFollowResponseAmino): QueryAllThreadFollowResponse {
    const message = createBaseQueryAllThreadFollowResponse();
    message.threadFollow = object.thread_follow?.map(e => ThreadFollow.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadFollowResponse): QueryAllThreadFollowResponseAmino {
    const obj: any = {};
    if (message.threadFollow) {
      obj.thread_follow = message.threadFollow.map(e => e ? ThreadFollow.toAmino(e) : undefined);
    } else {
      obj.thread_follow = message.threadFollow;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadFollowResponseAminoMsg): QueryAllThreadFollowResponse {
    return QueryAllThreadFollowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadFollowResponseProtoMsg): QueryAllThreadFollowResponse {
    return QueryAllThreadFollowResponse.decode(message.value);
  },
  toProto(message: QueryAllThreadFollowResponse): Uint8Array {
    return QueryAllThreadFollowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadFollowResponse): QueryAllThreadFollowResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowResponse",
      value: QueryAllThreadFollowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadFollowCountRequest(): QueryGetThreadFollowCountRequest {
  return {
    threadId: BigInt(0)
  };
}
/**
 * QueryGetThreadFollowCountRequest defines the QueryGetThreadFollowCountRequest message.
 * @name QueryGetThreadFollowCountRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowCountRequest
 */
export const QueryGetThreadFollowCountRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowCountRequest",
  encode(message: QueryGetThreadFollowCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadFollowCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadFollowCountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadFollowCountRequest>): QueryGetThreadFollowCountRequest {
    const message = createBaseQueryGetThreadFollowCountRequest();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetThreadFollowCountRequestAmino): QueryGetThreadFollowCountRequest {
    const message = createBaseQueryGetThreadFollowCountRequest();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    return message;
  },
  toAmino(message: QueryGetThreadFollowCountRequest): QueryGetThreadFollowCountRequestAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadFollowCountRequestAminoMsg): QueryGetThreadFollowCountRequest {
    return QueryGetThreadFollowCountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadFollowCountRequestProtoMsg): QueryGetThreadFollowCountRequest {
    return QueryGetThreadFollowCountRequest.decode(message.value);
  },
  toProto(message: QueryGetThreadFollowCountRequest): Uint8Array {
    return QueryGetThreadFollowCountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadFollowCountRequest): QueryGetThreadFollowCountRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowCountRequest",
      value: QueryGetThreadFollowCountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetThreadFollowCountResponse(): QueryGetThreadFollowCountResponse {
  return {
    threadFollowCount: ThreadFollowCount.fromPartial({})
  };
}
/**
 * QueryGetThreadFollowCountResponse defines the QueryGetThreadFollowCountResponse message.
 * @name QueryGetThreadFollowCountResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetThreadFollowCountResponse
 */
export const QueryGetThreadFollowCountResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowCountResponse",
  encode(message: QueryGetThreadFollowCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadFollowCount !== undefined) {
      ThreadFollowCount.encode(message.threadFollowCount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetThreadFollowCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetThreadFollowCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadFollowCount = ThreadFollowCount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetThreadFollowCountResponse>): QueryGetThreadFollowCountResponse {
    const message = createBaseQueryGetThreadFollowCountResponse();
    message.threadFollowCount = object.threadFollowCount !== undefined && object.threadFollowCount !== null ? ThreadFollowCount.fromPartial(object.threadFollowCount) : undefined;
    return message;
  },
  fromAmino(object: QueryGetThreadFollowCountResponseAmino): QueryGetThreadFollowCountResponse {
    const message = createBaseQueryGetThreadFollowCountResponse();
    if (object.thread_follow_count !== undefined && object.thread_follow_count !== null) {
      message.threadFollowCount = ThreadFollowCount.fromAmino(object.thread_follow_count);
    }
    return message;
  },
  toAmino(message: QueryGetThreadFollowCountResponse): QueryGetThreadFollowCountResponseAmino {
    const obj: any = {};
    obj.thread_follow_count = message.threadFollowCount ? ThreadFollowCount.toAmino(message.threadFollowCount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetThreadFollowCountResponseAminoMsg): QueryGetThreadFollowCountResponse {
    return QueryGetThreadFollowCountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetThreadFollowCountResponseProtoMsg): QueryGetThreadFollowCountResponse {
    return QueryGetThreadFollowCountResponse.decode(message.value);
  },
  toProto(message: QueryGetThreadFollowCountResponse): Uint8Array {
    return QueryGetThreadFollowCountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetThreadFollowCountResponse): QueryGetThreadFollowCountResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetThreadFollowCountResponse",
      value: QueryGetThreadFollowCountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadFollowCountRequest(): QueryAllThreadFollowCountRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllThreadFollowCountRequest defines the QueryAllThreadFollowCountRequest message.
 * @name QueryAllThreadFollowCountRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowCountRequest
 */
export const QueryAllThreadFollowCountRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowCountRequest",
  encode(message: QueryAllThreadFollowCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadFollowCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadFollowCountRequest();
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
  fromPartial(object: DeepPartial<QueryAllThreadFollowCountRequest>): QueryAllThreadFollowCountRequest {
    const message = createBaseQueryAllThreadFollowCountRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadFollowCountRequestAmino): QueryAllThreadFollowCountRequest {
    const message = createBaseQueryAllThreadFollowCountRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadFollowCountRequest): QueryAllThreadFollowCountRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadFollowCountRequestAminoMsg): QueryAllThreadFollowCountRequest {
    return QueryAllThreadFollowCountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadFollowCountRequestProtoMsg): QueryAllThreadFollowCountRequest {
    return QueryAllThreadFollowCountRequest.decode(message.value);
  },
  toProto(message: QueryAllThreadFollowCountRequest): Uint8Array {
    return QueryAllThreadFollowCountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadFollowCountRequest): QueryAllThreadFollowCountRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowCountRequest",
      value: QueryAllThreadFollowCountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllThreadFollowCountResponse(): QueryAllThreadFollowCountResponse {
  return {
    threadFollowCount: [],
    pagination: undefined
  };
}
/**
 * QueryAllThreadFollowCountResponse defines the QueryAllThreadFollowCountResponse message.
 * @name QueryAllThreadFollowCountResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllThreadFollowCountResponse
 */
export const QueryAllThreadFollowCountResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowCountResponse",
  encode(message: QueryAllThreadFollowCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.threadFollowCount) {
      ThreadFollowCount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllThreadFollowCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllThreadFollowCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadFollowCount.push(ThreadFollowCount.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllThreadFollowCountResponse>): QueryAllThreadFollowCountResponse {
    const message = createBaseQueryAllThreadFollowCountResponse();
    message.threadFollowCount = object.threadFollowCount?.map(e => ThreadFollowCount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllThreadFollowCountResponseAmino): QueryAllThreadFollowCountResponse {
    const message = createBaseQueryAllThreadFollowCountResponse();
    message.threadFollowCount = object.thread_follow_count?.map(e => ThreadFollowCount.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllThreadFollowCountResponse): QueryAllThreadFollowCountResponseAmino {
    const obj: any = {};
    if (message.threadFollowCount) {
      obj.thread_follow_count = message.threadFollowCount.map(e => e ? ThreadFollowCount.toAmino(e) : undefined);
    } else {
      obj.thread_follow_count = message.threadFollowCount;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllThreadFollowCountResponseAminoMsg): QueryAllThreadFollowCountResponse {
    return QueryAllThreadFollowCountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllThreadFollowCountResponseProtoMsg): QueryAllThreadFollowCountResponse {
    return QueryAllThreadFollowCountResponse.decode(message.value);
  },
  toProto(message: QueryAllThreadFollowCountResponse): Uint8Array {
    return QueryAllThreadFollowCountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllThreadFollowCountResponse): QueryAllThreadFollowCountResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllThreadFollowCountResponse",
      value: QueryAllThreadFollowCountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetArchiveMetadataRequest(): QueryGetArchiveMetadataRequest {
  return {
    rootId: BigInt(0)
  };
}
/**
 * QueryGetArchiveMetadataRequest defines the QueryGetArchiveMetadataRequest message.
 * @name QueryGetArchiveMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetArchiveMetadataRequest
 */
export const QueryGetArchiveMetadataRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetArchiveMetadataRequest",
  encode(message: QueryGetArchiveMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetArchiveMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetArchiveMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetArchiveMetadataRequest>): QueryGetArchiveMetadataRequest {
    const message = createBaseQueryGetArchiveMetadataRequest();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetArchiveMetadataRequestAmino): QueryGetArchiveMetadataRequest {
    const message = createBaseQueryGetArchiveMetadataRequest();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: QueryGetArchiveMetadataRequest): QueryGetArchiveMetadataRequestAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetArchiveMetadataRequestAminoMsg): QueryGetArchiveMetadataRequest {
    return QueryGetArchiveMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetArchiveMetadataRequestProtoMsg): QueryGetArchiveMetadataRequest {
    return QueryGetArchiveMetadataRequest.decode(message.value);
  },
  toProto(message: QueryGetArchiveMetadataRequest): Uint8Array {
    return QueryGetArchiveMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetArchiveMetadataRequest): QueryGetArchiveMetadataRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetArchiveMetadataRequest",
      value: QueryGetArchiveMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetArchiveMetadataResponse(): QueryGetArchiveMetadataResponse {
  return {
    archiveMetadata: ArchiveMetadata.fromPartial({})
  };
}
/**
 * QueryGetArchiveMetadataResponse defines the QueryGetArchiveMetadataResponse message.
 * @name QueryGetArchiveMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetArchiveMetadataResponse
 */
export const QueryGetArchiveMetadataResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetArchiveMetadataResponse",
  encode(message: QueryGetArchiveMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.archiveMetadata !== undefined) {
      ArchiveMetadata.encode(message.archiveMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetArchiveMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetArchiveMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.archiveMetadata = ArchiveMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetArchiveMetadataResponse>): QueryGetArchiveMetadataResponse {
    const message = createBaseQueryGetArchiveMetadataResponse();
    message.archiveMetadata = object.archiveMetadata !== undefined && object.archiveMetadata !== null ? ArchiveMetadata.fromPartial(object.archiveMetadata) : undefined;
    return message;
  },
  fromAmino(object: QueryGetArchiveMetadataResponseAmino): QueryGetArchiveMetadataResponse {
    const message = createBaseQueryGetArchiveMetadataResponse();
    if (object.archive_metadata !== undefined && object.archive_metadata !== null) {
      message.archiveMetadata = ArchiveMetadata.fromAmino(object.archive_metadata);
    }
    return message;
  },
  toAmino(message: QueryGetArchiveMetadataResponse): QueryGetArchiveMetadataResponseAmino {
    const obj: any = {};
    obj.archive_metadata = message.archiveMetadata ? ArchiveMetadata.toAmino(message.archiveMetadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetArchiveMetadataResponseAminoMsg): QueryGetArchiveMetadataResponse {
    return QueryGetArchiveMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetArchiveMetadataResponseProtoMsg): QueryGetArchiveMetadataResponse {
    return QueryGetArchiveMetadataResponse.decode(message.value);
  },
  toProto(message: QueryGetArchiveMetadataResponse): Uint8Array {
    return QueryGetArchiveMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetArchiveMetadataResponse): QueryGetArchiveMetadataResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetArchiveMetadataResponse",
      value: QueryGetArchiveMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllArchiveMetadataRequest(): QueryAllArchiveMetadataRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllArchiveMetadataRequest defines the QueryAllArchiveMetadataRequest message.
 * @name QueryAllArchiveMetadataRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllArchiveMetadataRequest
 */
export const QueryAllArchiveMetadataRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAllArchiveMetadataRequest",
  encode(message: QueryAllArchiveMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllArchiveMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllArchiveMetadataRequest();
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
  fromPartial(object: DeepPartial<QueryAllArchiveMetadataRequest>): QueryAllArchiveMetadataRequest {
    const message = createBaseQueryAllArchiveMetadataRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllArchiveMetadataRequestAmino): QueryAllArchiveMetadataRequest {
    const message = createBaseQueryAllArchiveMetadataRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllArchiveMetadataRequest): QueryAllArchiveMetadataRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllArchiveMetadataRequestAminoMsg): QueryAllArchiveMetadataRequest {
    return QueryAllArchiveMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllArchiveMetadataRequestProtoMsg): QueryAllArchiveMetadataRequest {
    return QueryAllArchiveMetadataRequest.decode(message.value);
  },
  toProto(message: QueryAllArchiveMetadataRequest): Uint8Array {
    return QueryAllArchiveMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllArchiveMetadataRequest): QueryAllArchiveMetadataRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllArchiveMetadataRequest",
      value: QueryAllArchiveMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllArchiveMetadataResponse(): QueryAllArchiveMetadataResponse {
  return {
    archiveMetadata: [],
    pagination: undefined
  };
}
/**
 * QueryAllArchiveMetadataResponse defines the QueryAllArchiveMetadataResponse message.
 * @name QueryAllArchiveMetadataResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAllArchiveMetadataResponse
 */
export const QueryAllArchiveMetadataResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAllArchiveMetadataResponse",
  encode(message: QueryAllArchiveMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.archiveMetadata) {
      ArchiveMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllArchiveMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllArchiveMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.archiveMetadata.push(ArchiveMetadata.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllArchiveMetadataResponse>): QueryAllArchiveMetadataResponse {
    const message = createBaseQueryAllArchiveMetadataResponse();
    message.archiveMetadata = object.archiveMetadata?.map(e => ArchiveMetadata.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllArchiveMetadataResponseAmino): QueryAllArchiveMetadataResponse {
    const message = createBaseQueryAllArchiveMetadataResponse();
    message.archiveMetadata = object.archive_metadata?.map(e => ArchiveMetadata.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllArchiveMetadataResponse): QueryAllArchiveMetadataResponseAmino {
    const obj: any = {};
    if (message.archiveMetadata) {
      obj.archive_metadata = message.archiveMetadata.map(e => e ? ArchiveMetadata.toAmino(e) : undefined);
    } else {
      obj.archive_metadata = message.archiveMetadata;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllArchiveMetadataResponseAminoMsg): QueryAllArchiveMetadataResponse {
    return QueryAllArchiveMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllArchiveMetadataResponseProtoMsg): QueryAllArchiveMetadataResponse {
    return QueryAllArchiveMetadataResponse.decode(message.value);
  },
  toProto(message: QueryAllArchiveMetadataResponse): Uint8Array {
    return QueryAllArchiveMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllArchiveMetadataResponse): QueryAllArchiveMetadataResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAllArchiveMetadataResponse",
      value: QueryAllArchiveMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPostsRequest(): QueryPostsRequest {
  return {
    categoryId: BigInt(0),
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryPostsRequest defines the QueryPostsRequest message.
 * @name QueryPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostsRequest
 */
export const QueryPostsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryPostsRequest",
  encode(message: QueryPostsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.categoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.categoryId);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(16).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPostsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryId = reader.uint64();
          break;
        case 2:
          message.status = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryPostsRequest>): QueryPostsRequest {
    const message = createBaseQueryPostsRequest();
    message.categoryId = object.categoryId !== undefined && object.categoryId !== null ? BigInt(object.categoryId.toString()) : BigInt(0);
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPostsRequestAmino): QueryPostsRequest {
    const message = createBaseQueryPostsRequest();
    if (object.category_id !== undefined && object.category_id !== null) {
      message.categoryId = BigInt(object.category_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPostsRequest): QueryPostsRequestAmino {
    const obj: any = {};
    obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostsRequestAminoMsg): QueryPostsRequest {
    return QueryPostsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostsRequestProtoMsg): QueryPostsRequest {
    return QueryPostsRequest.decode(message.value);
  },
  toProto(message: QueryPostsRequest): Uint8Array {
    return QueryPostsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPostsRequest): QueryPostsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPostsRequest",
      value: QueryPostsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPostsResponse(): QueryPostsResponse {
  return {
    posts: [],
    pagination: undefined
  };
}
/**
 * QueryPostsResponse defines the QueryPostsResponse message.
 * @name QueryPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostsResponse
 */
export const QueryPostsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryPostsResponse",
  encode(message: QueryPostsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPostsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostsResponse();
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
  fromPartial(object: DeepPartial<QueryPostsResponse>): QueryPostsResponse {
    const message = createBaseQueryPostsResponse();
    message.posts = object.posts?.map(e => Post.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPostsResponseAmino): QueryPostsResponse {
    const message = createBaseQueryPostsResponse();
    message.posts = object.posts?.map(e => Post.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPostsResponse): QueryPostsResponseAmino {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.posts = message.posts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostsResponseAminoMsg): QueryPostsResponse {
    return QueryPostsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostsResponseProtoMsg): QueryPostsResponse {
    return QueryPostsResponse.decode(message.value);
  },
  toProto(message: QueryPostsResponse): Uint8Array {
    return QueryPostsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPostsResponse): QueryPostsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPostsResponse",
      value: QueryPostsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryThreadRequest(): QueryThreadRequest {
  return {
    rootId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryThreadRequest defines the QueryThreadRequest message.
 * @name QueryThreadRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadRequest
 */
export const QueryThreadRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryThreadRequest",
  encode(message: QueryThreadRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThreadRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThreadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryThreadRequest>): QueryThreadRequest {
    const message = createBaseQueryThreadRequest();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryThreadRequestAmino): QueryThreadRequest {
    const message = createBaseQueryThreadRequest();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryThreadRequest): QueryThreadRequestAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryThreadRequestAminoMsg): QueryThreadRequest {
    return QueryThreadRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThreadRequestProtoMsg): QueryThreadRequest {
    return QueryThreadRequest.decode(message.value);
  },
  toProto(message: QueryThreadRequest): Uint8Array {
    return QueryThreadRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryThreadRequest): QueryThreadRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryThreadRequest",
      value: QueryThreadRequest.encode(message).finish()
    };
  }
};
function createBaseQueryThreadResponse(): QueryThreadResponse {
  return {
    posts: [],
    pagination: undefined
  };
}
/**
 * QueryThreadResponse defines the QueryThreadResponse message.
 * @name QueryThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadResponse
 */
export const QueryThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryThreadResponse",
  encode(message: QueryThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThreadResponse();
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
  fromPartial(object: DeepPartial<QueryThreadResponse>): QueryThreadResponse {
    const message = createBaseQueryThreadResponse();
    message.posts = object.posts?.map(e => Post.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryThreadResponseAmino): QueryThreadResponse {
    const message = createBaseQueryThreadResponse();
    message.posts = object.posts?.map(e => Post.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryThreadResponse): QueryThreadResponseAmino {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.posts = message.posts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryThreadResponseAminoMsg): QueryThreadResponse {
    return QueryThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThreadResponseProtoMsg): QueryThreadResponse {
    return QueryThreadResponse.decode(message.value);
  },
  toProto(message: QueryThreadResponse): Uint8Array {
    return QueryThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryThreadResponse): QueryThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryThreadResponse",
      value: QueryThreadResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserPostsRequest(): QueryUserPostsRequest {
  return {
    author: "",
    pagination: undefined
  };
}
/**
 * QueryUserPostsRequest defines the QueryUserPostsRequest message.
 * @name QueryUserPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserPostsRequest
 */
export const QueryUserPostsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryUserPostsRequest",
  encode(message: QueryUserPostsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.author !== "") {
      writer.uint32(10).string(message.author);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserPostsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.author = reader.string();
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
  fromPartial(object: DeepPartial<QueryUserPostsRequest>): QueryUserPostsRequest {
    const message = createBaseQueryUserPostsRequest();
    message.author = object.author ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserPostsRequestAmino): QueryUserPostsRequest {
    const message = createBaseQueryUserPostsRequest();
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserPostsRequest): QueryUserPostsRequestAmino {
    const obj: any = {};
    obj.author = message.author === "" ? undefined : message.author;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserPostsRequestAminoMsg): QueryUserPostsRequest {
    return QueryUserPostsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPostsRequestProtoMsg): QueryUserPostsRequest {
    return QueryUserPostsRequest.decode(message.value);
  },
  toProto(message: QueryUserPostsRequest): Uint8Array {
    return QueryUserPostsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPostsRequest): QueryUserPostsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryUserPostsRequest",
      value: QueryUserPostsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserPostsResponse(): QueryUserPostsResponse {
  return {
    posts: [],
    pagination: undefined
  };
}
/**
 * QueryUserPostsResponse defines the QueryUserPostsResponse message.
 * @name QueryUserPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserPostsResponse
 */
export const QueryUserPostsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryUserPostsResponse",
  encode(message: QueryUserPostsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserPostsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPostsResponse();
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
  fromPartial(object: DeepPartial<QueryUserPostsResponse>): QueryUserPostsResponse {
    const message = createBaseQueryUserPostsResponse();
    message.posts = object.posts?.map(e => Post.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserPostsResponseAmino): QueryUserPostsResponse {
    const message = createBaseQueryUserPostsResponse();
    message.posts = object.posts?.map(e => Post.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserPostsResponse): QueryUserPostsResponseAmino {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.posts = message.posts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserPostsResponseAminoMsg): QueryUserPostsResponse {
    return QueryUserPostsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPostsResponseProtoMsg): QueryUserPostsResponse {
    return QueryUserPostsResponse.decode(message.value);
  },
  toProto(message: QueryUserPostsResponse): Uint8Array {
    return QueryUserPostsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPostsResponse): QueryUserPostsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryUserPostsResponse",
      value: QueryUserPostsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryArchiveCooldownRequest(): QueryArchiveCooldownRequest {
  return {
    rootId: BigInt(0)
  };
}
/**
 * QueryArchiveCooldownRequest defines the QueryArchiveCooldownRequest message.
 * @name QueryArchiveCooldownRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryArchiveCooldownRequest
 */
export const QueryArchiveCooldownRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryArchiveCooldownRequest",
  encode(message: QueryArchiveCooldownRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArchiveCooldownRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArchiveCooldownRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryArchiveCooldownRequest>): QueryArchiveCooldownRequest {
    const message = createBaseQueryArchiveCooldownRequest();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryArchiveCooldownRequestAmino): QueryArchiveCooldownRequest {
    const message = createBaseQueryArchiveCooldownRequest();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: QueryArchiveCooldownRequest): QueryArchiveCooldownRequestAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryArchiveCooldownRequestAminoMsg): QueryArchiveCooldownRequest {
    return QueryArchiveCooldownRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryArchiveCooldownRequestProtoMsg): QueryArchiveCooldownRequest {
    return QueryArchiveCooldownRequest.decode(message.value);
  },
  toProto(message: QueryArchiveCooldownRequest): Uint8Array {
    return QueryArchiveCooldownRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryArchiveCooldownRequest): QueryArchiveCooldownRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryArchiveCooldownRequest",
      value: QueryArchiveCooldownRequest.encode(message).finish()
    };
  }
};
function createBaseQueryArchiveCooldownResponse(): QueryArchiveCooldownResponse {
  return {
    inCooldown: false,
    cooldownEnds: BigInt(0)
  };
}
/**
 * QueryArchiveCooldownResponse defines the QueryArchiveCooldownResponse message.
 * @name QueryArchiveCooldownResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryArchiveCooldownResponse
 */
export const QueryArchiveCooldownResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryArchiveCooldownResponse",
  encode(message: QueryArchiveCooldownResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inCooldown === true) {
      writer.uint32(8).bool(message.inCooldown);
    }
    if (message.cooldownEnds !== BigInt(0)) {
      writer.uint32(16).int64(message.cooldownEnds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArchiveCooldownResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArchiveCooldownResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inCooldown = reader.bool();
          break;
        case 2:
          message.cooldownEnds = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryArchiveCooldownResponse>): QueryArchiveCooldownResponse {
    const message = createBaseQueryArchiveCooldownResponse();
    message.inCooldown = object.inCooldown ?? false;
    message.cooldownEnds = object.cooldownEnds !== undefined && object.cooldownEnds !== null ? BigInt(object.cooldownEnds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryArchiveCooldownResponseAmino): QueryArchiveCooldownResponse {
    const message = createBaseQueryArchiveCooldownResponse();
    if (object.in_cooldown !== undefined && object.in_cooldown !== null) {
      message.inCooldown = object.in_cooldown;
    }
    if (object.cooldown_ends !== undefined && object.cooldown_ends !== null) {
      message.cooldownEnds = BigInt(object.cooldown_ends);
    }
    return message;
  },
  toAmino(message: QueryArchiveCooldownResponse): QueryArchiveCooldownResponseAmino {
    const obj: any = {};
    obj.in_cooldown = message.inCooldown === false ? undefined : message.inCooldown;
    obj.cooldown_ends = message.cooldownEnds !== BigInt(0) ? message.cooldownEnds?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryArchiveCooldownResponseAminoMsg): QueryArchiveCooldownResponse {
    return QueryArchiveCooldownResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryArchiveCooldownResponseProtoMsg): QueryArchiveCooldownResponse {
    return QueryArchiveCooldownResponse.decode(message.value);
  },
  toProto(message: QueryArchiveCooldownResponse): Uint8Array {
    return QueryArchiveCooldownResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryArchiveCooldownResponse): QueryArchiveCooldownResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryArchiveCooldownResponse",
      value: QueryArchiveCooldownResponse.encode(message).finish()
    };
  }
};
function createBaseQueryForumStatusRequest(): QueryForumStatusRequest {
  return {};
}
/**
 * QueryForumStatusRequest defines the QueryForumStatusRequest message.
 * @name QueryForumStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryForumStatusRequest
 */
export const QueryForumStatusRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryForumStatusRequest",
  encode(_: QueryForumStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryForumStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryForumStatusRequest();
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
  fromPartial(_: DeepPartial<QueryForumStatusRequest>): QueryForumStatusRequest {
    const message = createBaseQueryForumStatusRequest();
    return message;
  },
  fromAmino(_: QueryForumStatusRequestAmino): QueryForumStatusRequest {
    const message = createBaseQueryForumStatusRequest();
    return message;
  },
  toAmino(_: QueryForumStatusRequest): QueryForumStatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryForumStatusRequestAminoMsg): QueryForumStatusRequest {
    return QueryForumStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryForumStatusRequestProtoMsg): QueryForumStatusRequest {
    return QueryForumStatusRequest.decode(message.value);
  },
  toProto(message: QueryForumStatusRequest): Uint8Array {
    return QueryForumStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryForumStatusRequest): QueryForumStatusRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryForumStatusRequest",
      value: QueryForumStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryForumStatusResponse(): QueryForumStatusResponse {
  return {
    forumPaused: false,
    moderationPaused: false,
    currentEpoch: BigInt(0)
  };
}
/**
 * QueryForumStatusResponse defines the QueryForumStatusResponse message.
 * @name QueryForumStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryForumStatusResponse
 */
export const QueryForumStatusResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryForumStatusResponse",
  encode(message: QueryForumStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.forumPaused === true) {
      writer.uint32(8).bool(message.forumPaused);
    }
    if (message.moderationPaused === true) {
      writer.uint32(16).bool(message.moderationPaused);
    }
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.currentEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryForumStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryForumStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forumPaused = reader.bool();
          break;
        case 2:
          message.moderationPaused = reader.bool();
          break;
        case 3:
          message.currentEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryForumStatusResponse>): QueryForumStatusResponse {
    const message = createBaseQueryForumStatusResponse();
    message.forumPaused = object.forumPaused ?? false;
    message.moderationPaused = object.moderationPaused ?? false;
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? BigInt(object.currentEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryForumStatusResponseAmino): QueryForumStatusResponse {
    const message = createBaseQueryForumStatusResponse();
    if (object.forum_paused !== undefined && object.forum_paused !== null) {
      message.forumPaused = object.forum_paused;
    }
    if (object.moderation_paused !== undefined && object.moderation_paused !== null) {
      message.moderationPaused = object.moderation_paused;
    }
    if (object.current_epoch !== undefined && object.current_epoch !== null) {
      message.currentEpoch = BigInt(object.current_epoch);
    }
    return message;
  },
  toAmino(message: QueryForumStatusResponse): QueryForumStatusResponseAmino {
    const obj: any = {};
    obj.forum_paused = message.forumPaused === false ? undefined : message.forumPaused;
    obj.moderation_paused = message.moderationPaused === false ? undefined : message.moderationPaused;
    obj.current_epoch = message.currentEpoch !== BigInt(0) ? message.currentEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryForumStatusResponseAminoMsg): QueryForumStatusResponse {
    return QueryForumStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryForumStatusResponseProtoMsg): QueryForumStatusResponse {
    return QueryForumStatusResponse.decode(message.value);
  },
  toProto(message: QueryForumStatusResponse): Uint8Array {
    return QueryForumStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryForumStatusResponse): QueryForumStatusResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryForumStatusResponse",
      value: QueryForumStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAppealCooldownRequest(): QueryAppealCooldownRequest {
  return {
    postId: BigInt(0)
  };
}
/**
 * QueryAppealCooldownRequest defines the QueryAppealCooldownRequest message.
 * @name QueryAppealCooldownRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAppealCooldownRequest
 */
export const QueryAppealCooldownRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryAppealCooldownRequest",
  encode(message: QueryAppealCooldownRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAppealCooldownRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppealCooldownRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAppealCooldownRequest>): QueryAppealCooldownRequest {
    const message = createBaseQueryAppealCooldownRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAppealCooldownRequestAmino): QueryAppealCooldownRequest {
    const message = createBaseQueryAppealCooldownRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: QueryAppealCooldownRequest): QueryAppealCooldownRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAppealCooldownRequestAminoMsg): QueryAppealCooldownRequest {
    return QueryAppealCooldownRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAppealCooldownRequestProtoMsg): QueryAppealCooldownRequest {
    return QueryAppealCooldownRequest.decode(message.value);
  },
  toProto(message: QueryAppealCooldownRequest): Uint8Array {
    return QueryAppealCooldownRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAppealCooldownRequest): QueryAppealCooldownRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAppealCooldownRequest",
      value: QueryAppealCooldownRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAppealCooldownResponse(): QueryAppealCooldownResponse {
  return {
    inCooldown: false,
    cooldownEnds: BigInt(0)
  };
}
/**
 * QueryAppealCooldownResponse defines the QueryAppealCooldownResponse message.
 * @name QueryAppealCooldownResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryAppealCooldownResponse
 */
export const QueryAppealCooldownResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryAppealCooldownResponse",
  encode(message: QueryAppealCooldownResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inCooldown === true) {
      writer.uint32(8).bool(message.inCooldown);
    }
    if (message.cooldownEnds !== BigInt(0)) {
      writer.uint32(16).int64(message.cooldownEnds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAppealCooldownResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppealCooldownResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inCooldown = reader.bool();
          break;
        case 2:
          message.cooldownEnds = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAppealCooldownResponse>): QueryAppealCooldownResponse {
    const message = createBaseQueryAppealCooldownResponse();
    message.inCooldown = object.inCooldown ?? false;
    message.cooldownEnds = object.cooldownEnds !== undefined && object.cooldownEnds !== null ? BigInt(object.cooldownEnds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAppealCooldownResponseAmino): QueryAppealCooldownResponse {
    const message = createBaseQueryAppealCooldownResponse();
    if (object.in_cooldown !== undefined && object.in_cooldown !== null) {
      message.inCooldown = object.in_cooldown;
    }
    if (object.cooldown_ends !== undefined && object.cooldown_ends !== null) {
      message.cooldownEnds = BigInt(object.cooldown_ends);
    }
    return message;
  },
  toAmino(message: QueryAppealCooldownResponse): QueryAppealCooldownResponseAmino {
    const obj: any = {};
    obj.in_cooldown = message.inCooldown === false ? undefined : message.inCooldown;
    obj.cooldown_ends = message.cooldownEnds !== BigInt(0) ? message.cooldownEnds?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAppealCooldownResponseAminoMsg): QueryAppealCooldownResponse {
    return QueryAppealCooldownResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAppealCooldownResponseProtoMsg): QueryAppealCooldownResponse {
    return QueryAppealCooldownResponse.decode(message.value);
  },
  toProto(message: QueryAppealCooldownResponse): Uint8Array {
    return QueryAppealCooldownResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAppealCooldownResponse): QueryAppealCooldownResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryAppealCooldownResponse",
      value: QueryAppealCooldownResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPinnedPostsRequest(): QueryPinnedPostsRequest {
  return {
    categoryId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryPinnedPostsRequest defines the QueryPinnedPostsRequest message.
 * @name QueryPinnedPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPinnedPostsRequest
 */
export const QueryPinnedPostsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryPinnedPostsRequest",
  encode(message: QueryPinnedPostsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.categoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.categoryId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedPostsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryPinnedPostsRequest>): QueryPinnedPostsRequest {
    const message = createBaseQueryPinnedPostsRequest();
    message.categoryId = object.categoryId !== undefined && object.categoryId !== null ? BigInt(object.categoryId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPinnedPostsRequestAmino): QueryPinnedPostsRequest {
    const message = createBaseQueryPinnedPostsRequest();
    if (object.category_id !== undefined && object.category_id !== null) {
      message.categoryId = BigInt(object.category_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPinnedPostsRequest): QueryPinnedPostsRequestAmino {
    const obj: any = {};
    obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPinnedPostsRequestAminoMsg): QueryPinnedPostsRequest {
    return QueryPinnedPostsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPinnedPostsRequestProtoMsg): QueryPinnedPostsRequest {
    return QueryPinnedPostsRequest.decode(message.value);
  },
  toProto(message: QueryPinnedPostsRequest): Uint8Array {
    return QueryPinnedPostsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedPostsRequest): QueryPinnedPostsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPinnedPostsRequest",
      value: QueryPinnedPostsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPinnedPostsResponse(): QueryPinnedPostsResponse {
  return {
    postId: BigInt(0),
    priority: BigInt(0),
    pinnedBy: "",
    pagination: undefined
  };
}
/**
 * QueryPinnedPostsResponse defines the QueryPinnedPostsResponse message.
 * @name QueryPinnedPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPinnedPostsResponse
 */
export const QueryPinnedPostsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryPinnedPostsResponse",
  encode(message: QueryPinnedPostsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.priority !== BigInt(0)) {
      writer.uint32(16).uint64(message.priority);
    }
    if (message.pinnedBy !== "") {
      writer.uint32(26).string(message.pinnedBy);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPinnedPostsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedPostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.priority = reader.uint64();
          break;
        case 3:
          message.pinnedBy = reader.string();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPinnedPostsResponse>): QueryPinnedPostsResponse {
    const message = createBaseQueryPinnedPostsResponse();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.priority = object.priority !== undefined && object.priority !== null ? BigInt(object.priority.toString()) : BigInt(0);
    message.pinnedBy = object.pinnedBy ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPinnedPostsResponseAmino): QueryPinnedPostsResponse {
    const message = createBaseQueryPinnedPostsResponse();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = BigInt(object.priority);
    }
    if (object.pinned_by !== undefined && object.pinned_by !== null) {
      message.pinnedBy = object.pinned_by;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPinnedPostsResponse): QueryPinnedPostsResponseAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.priority = message.priority !== BigInt(0) ? message.priority?.toString() : undefined;
    obj.pinned_by = message.pinnedBy === "" ? undefined : message.pinnedBy;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPinnedPostsResponseAminoMsg): QueryPinnedPostsResponse {
    return QueryPinnedPostsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPinnedPostsResponseProtoMsg): QueryPinnedPostsResponse {
    return QueryPinnedPostsResponse.decode(message.value);
  },
  toProto(message: QueryPinnedPostsResponse): Uint8Array {
    return QueryPinnedPostsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPinnedPostsResponse): QueryPinnedPostsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPinnedPostsResponse",
      value: QueryPinnedPostsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLockedThreadsRequest(): QueryLockedThreadsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryLockedThreadsRequest defines the QueryLockedThreadsRequest message.
 * @name QueryLockedThreadsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryLockedThreadsRequest
 */
export const QueryLockedThreadsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryLockedThreadsRequest",
  encode(message: QueryLockedThreadsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockedThreadsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedThreadsRequest();
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
  fromPartial(object: DeepPartial<QueryLockedThreadsRequest>): QueryLockedThreadsRequest {
    const message = createBaseQueryLockedThreadsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLockedThreadsRequestAmino): QueryLockedThreadsRequest {
    const message = createBaseQueryLockedThreadsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLockedThreadsRequest): QueryLockedThreadsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLockedThreadsRequestAminoMsg): QueryLockedThreadsRequest {
    return QueryLockedThreadsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLockedThreadsRequestProtoMsg): QueryLockedThreadsRequest {
    return QueryLockedThreadsRequest.decode(message.value);
  },
  toProto(message: QueryLockedThreadsRequest): Uint8Array {
    return QueryLockedThreadsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLockedThreadsRequest): QueryLockedThreadsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryLockedThreadsRequest",
      value: QueryLockedThreadsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLockedThreadsResponse(): QueryLockedThreadsResponse {
  return {
    rootId: BigInt(0),
    lockedBy: "",
    lockedAt: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryLockedThreadsResponse defines the QueryLockedThreadsResponse message.
 * @name QueryLockedThreadsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryLockedThreadsResponse
 */
export const QueryLockedThreadsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryLockedThreadsResponse",
  encode(message: QueryLockedThreadsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    if (message.lockedBy !== "") {
      writer.uint32(18).string(message.lockedBy);
    }
    if (message.lockedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.lockedAt);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockedThreadsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockedThreadsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        case 2:
          message.lockedBy = reader.string();
          break;
        case 3:
          message.lockedAt = reader.int64();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLockedThreadsResponse>): QueryLockedThreadsResponse {
    const message = createBaseQueryLockedThreadsResponse();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    message.lockedBy = object.lockedBy ?? "";
    message.lockedAt = object.lockedAt !== undefined && object.lockedAt !== null ? BigInt(object.lockedAt.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLockedThreadsResponseAmino): QueryLockedThreadsResponse {
    const message = createBaseQueryLockedThreadsResponse();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    if (object.locked_by !== undefined && object.locked_by !== null) {
      message.lockedBy = object.locked_by;
    }
    if (object.locked_at !== undefined && object.locked_at !== null) {
      message.lockedAt = BigInt(object.locked_at);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLockedThreadsResponse): QueryLockedThreadsResponseAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    obj.locked_by = message.lockedBy === "" ? undefined : message.lockedBy;
    obj.locked_at = message.lockedAt !== BigInt(0) ? message.lockedAt?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLockedThreadsResponseAminoMsg): QueryLockedThreadsResponse {
    return QueryLockedThreadsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLockedThreadsResponseProtoMsg): QueryLockedThreadsResponse {
    return QueryLockedThreadsResponse.decode(message.value);
  },
  toProto(message: QueryLockedThreadsResponse): Uint8Array {
    return QueryLockedThreadsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLockedThreadsResponse): QueryLockedThreadsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryLockedThreadsResponse",
      value: QueryLockedThreadsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryThreadLockStatusRequest(): QueryThreadLockStatusRequest {
  return {
    rootId: BigInt(0)
  };
}
/**
 * QueryThreadLockStatusRequest defines the QueryThreadLockStatusRequest message.
 * @name QueryThreadLockStatusRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadLockStatusRequest
 */
export const QueryThreadLockStatusRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryThreadLockStatusRequest",
  encode(message: QueryThreadLockStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rootId !== BigInt(0)) {
      writer.uint32(8).uint64(message.rootId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThreadLockStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThreadLockStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryThreadLockStatusRequest>): QueryThreadLockStatusRequest {
    const message = createBaseQueryThreadLockStatusRequest();
    message.rootId = object.rootId !== undefined && object.rootId !== null ? BigInt(object.rootId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryThreadLockStatusRequestAmino): QueryThreadLockStatusRequest {
    const message = createBaseQueryThreadLockStatusRequest();
    if (object.root_id !== undefined && object.root_id !== null) {
      message.rootId = BigInt(object.root_id);
    }
    return message;
  },
  toAmino(message: QueryThreadLockStatusRequest): QueryThreadLockStatusRequestAmino {
    const obj: any = {};
    obj.root_id = message.rootId !== BigInt(0) ? message.rootId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryThreadLockStatusRequestAminoMsg): QueryThreadLockStatusRequest {
    return QueryThreadLockStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThreadLockStatusRequestProtoMsg): QueryThreadLockStatusRequest {
    return QueryThreadLockStatusRequest.decode(message.value);
  },
  toProto(message: QueryThreadLockStatusRequest): Uint8Array {
    return QueryThreadLockStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryThreadLockStatusRequest): QueryThreadLockStatusRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryThreadLockStatusRequest",
      value: QueryThreadLockStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryThreadLockStatusResponse(): QueryThreadLockStatusResponse {
  return {
    locked: false,
    lockedBy: "",
    reason: "",
    isSentinelLock: false
  };
}
/**
 * QueryThreadLockStatusResponse defines the QueryThreadLockStatusResponse message.
 * @name QueryThreadLockStatusResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadLockStatusResponse
 */
export const QueryThreadLockStatusResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryThreadLockStatusResponse",
  encode(message: QueryThreadLockStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.locked === true) {
      writer.uint32(8).bool(message.locked);
    }
    if (message.lockedBy !== "") {
      writer.uint32(18).string(message.lockedBy);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (message.isSentinelLock === true) {
      writer.uint32(32).bool(message.isSentinelLock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThreadLockStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThreadLockStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locked = reader.bool();
          break;
        case 2:
          message.lockedBy = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.isSentinelLock = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryThreadLockStatusResponse>): QueryThreadLockStatusResponse {
    const message = createBaseQueryThreadLockStatusResponse();
    message.locked = object.locked ?? false;
    message.lockedBy = object.lockedBy ?? "";
    message.reason = object.reason ?? "";
    message.isSentinelLock = object.isSentinelLock ?? false;
    return message;
  },
  fromAmino(object: QueryThreadLockStatusResponseAmino): QueryThreadLockStatusResponse {
    const message = createBaseQueryThreadLockStatusResponse();
    if (object.locked !== undefined && object.locked !== null) {
      message.locked = object.locked;
    }
    if (object.locked_by !== undefined && object.locked_by !== null) {
      message.lockedBy = object.locked_by;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.is_sentinel_lock !== undefined && object.is_sentinel_lock !== null) {
      message.isSentinelLock = object.is_sentinel_lock;
    }
    return message;
  },
  toAmino(message: QueryThreadLockStatusResponse): QueryThreadLockStatusResponseAmino {
    const obj: any = {};
    obj.locked = message.locked === false ? undefined : message.locked;
    obj.locked_by = message.lockedBy === "" ? undefined : message.lockedBy;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.is_sentinel_lock = message.isSentinelLock === false ? undefined : message.isSentinelLock;
    return obj;
  },
  fromAminoMsg(object: QueryThreadLockStatusResponseAminoMsg): QueryThreadLockStatusResponse {
    return QueryThreadLockStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThreadLockStatusResponseProtoMsg): QueryThreadLockStatusResponse {
    return QueryThreadLockStatusResponse.decode(message.value);
  },
  toProto(message: QueryThreadLockStatusResponse): Uint8Array {
    return QueryThreadLockStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryThreadLockStatusResponse): QueryThreadLockStatusResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryThreadLockStatusResponse",
      value: QueryThreadLockStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTopPostsRequest(): QueryTopPostsRequest {
  return {
    categoryId: BigInt(0),
    timeRange: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryTopPostsRequest defines the QueryTopPostsRequest message.
 * @name QueryTopPostsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTopPostsRequest
 */
export const QueryTopPostsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryTopPostsRequest",
  encode(message: QueryTopPostsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.categoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.categoryId);
    }
    if (message.timeRange !== BigInt(0)) {
      writer.uint32(16).int64(message.timeRange);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTopPostsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTopPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryId = reader.uint64();
          break;
        case 2:
          message.timeRange = reader.int64();
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
  fromPartial(object: DeepPartial<QueryTopPostsRequest>): QueryTopPostsRequest {
    const message = createBaseQueryTopPostsRequest();
    message.categoryId = object.categoryId !== undefined && object.categoryId !== null ? BigInt(object.categoryId.toString()) : BigInt(0);
    message.timeRange = object.timeRange !== undefined && object.timeRange !== null ? BigInt(object.timeRange.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTopPostsRequestAmino): QueryTopPostsRequest {
    const message = createBaseQueryTopPostsRequest();
    if (object.category_id !== undefined && object.category_id !== null) {
      message.categoryId = BigInt(object.category_id);
    }
    if (object.time_range !== undefined && object.time_range !== null) {
      message.timeRange = BigInt(object.time_range);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTopPostsRequest): QueryTopPostsRequestAmino {
    const obj: any = {};
    obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
    obj.time_range = message.timeRange !== BigInt(0) ? message.timeRange?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTopPostsRequestAminoMsg): QueryTopPostsRequest {
    return QueryTopPostsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTopPostsRequestProtoMsg): QueryTopPostsRequest {
    return QueryTopPostsRequest.decode(message.value);
  },
  toProto(message: QueryTopPostsRequest): Uint8Array {
    return QueryTopPostsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTopPostsRequest): QueryTopPostsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTopPostsRequest",
      value: QueryTopPostsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTopPostsResponse(): QueryTopPostsResponse {
  return {
    postId: BigInt(0),
    upvoteCount: BigInt(0),
    downvoteCount: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryTopPostsResponse defines the QueryTopPostsResponse message.
 * @name QueryTopPostsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryTopPostsResponse
 */
export const QueryTopPostsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryTopPostsResponse",
  encode(message: QueryTopPostsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.upvoteCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.upvoteCount);
    }
    if (message.downvoteCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.downvoteCount);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTopPostsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTopPostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.upvoteCount = reader.uint64();
          break;
        case 3:
          message.downvoteCount = reader.uint64();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTopPostsResponse>): QueryTopPostsResponse {
    const message = createBaseQueryTopPostsResponse();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.upvoteCount = object.upvoteCount !== undefined && object.upvoteCount !== null ? BigInt(object.upvoteCount.toString()) : BigInt(0);
    message.downvoteCount = object.downvoteCount !== undefined && object.downvoteCount !== null ? BigInt(object.downvoteCount.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTopPostsResponseAmino): QueryTopPostsResponse {
    const message = createBaseQueryTopPostsResponse();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.upvote_count !== undefined && object.upvote_count !== null) {
      message.upvoteCount = BigInt(object.upvote_count);
    }
    if (object.downvote_count !== undefined && object.downvote_count !== null) {
      message.downvoteCount = BigInt(object.downvote_count);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTopPostsResponse): QueryTopPostsResponseAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.upvote_count = message.upvoteCount !== BigInt(0) ? message.upvoteCount?.toString() : undefined;
    obj.downvote_count = message.downvoteCount !== BigInt(0) ? message.downvoteCount?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTopPostsResponseAminoMsg): QueryTopPostsResponse {
    return QueryTopPostsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTopPostsResponseProtoMsg): QueryTopPostsResponse {
    return QueryTopPostsResponse.decode(message.value);
  },
  toProto(message: QueryTopPostsResponse): Uint8Array {
    return QueryTopPostsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTopPostsResponse): QueryTopPostsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryTopPostsResponse",
      value: QueryTopPostsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryThreadFollowersRequest(): QueryThreadFollowersRequest {
  return {
    threadId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryThreadFollowersRequest defines the QueryThreadFollowersRequest message.
 * @name QueryThreadFollowersRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadFollowersRequest
 */
export const QueryThreadFollowersRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryThreadFollowersRequest",
  encode(message: QueryThreadFollowersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThreadFollowersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThreadFollowersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryThreadFollowersRequest>): QueryThreadFollowersRequest {
    const message = createBaseQueryThreadFollowersRequest();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryThreadFollowersRequestAmino): QueryThreadFollowersRequest {
    const message = createBaseQueryThreadFollowersRequest();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryThreadFollowersRequest): QueryThreadFollowersRequestAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryThreadFollowersRequestAminoMsg): QueryThreadFollowersRequest {
    return QueryThreadFollowersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThreadFollowersRequestProtoMsg): QueryThreadFollowersRequest {
    return QueryThreadFollowersRequest.decode(message.value);
  },
  toProto(message: QueryThreadFollowersRequest): Uint8Array {
    return QueryThreadFollowersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryThreadFollowersRequest): QueryThreadFollowersRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryThreadFollowersRequest",
      value: QueryThreadFollowersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryThreadFollowersResponse(): QueryThreadFollowersResponse {
  return {
    follower: "",
    followedAt: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryThreadFollowersResponse defines the QueryThreadFollowersResponse message.
 * @name QueryThreadFollowersResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryThreadFollowersResponse
 */
export const QueryThreadFollowersResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryThreadFollowersResponse",
  encode(message: QueryThreadFollowersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.follower !== "") {
      writer.uint32(10).string(message.follower);
    }
    if (message.followedAt !== BigInt(0)) {
      writer.uint32(16).int64(message.followedAt);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThreadFollowersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThreadFollowersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.follower = reader.string();
          break;
        case 2:
          message.followedAt = reader.int64();
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
  fromPartial(object: DeepPartial<QueryThreadFollowersResponse>): QueryThreadFollowersResponse {
    const message = createBaseQueryThreadFollowersResponse();
    message.follower = object.follower ?? "";
    message.followedAt = object.followedAt !== undefined && object.followedAt !== null ? BigInt(object.followedAt.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryThreadFollowersResponseAmino): QueryThreadFollowersResponse {
    const message = createBaseQueryThreadFollowersResponse();
    if (object.follower !== undefined && object.follower !== null) {
      message.follower = object.follower;
    }
    if (object.followed_at !== undefined && object.followed_at !== null) {
      message.followedAt = BigInt(object.followed_at);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryThreadFollowersResponse): QueryThreadFollowersResponseAmino {
    const obj: any = {};
    obj.follower = message.follower === "" ? undefined : message.follower;
    obj.followed_at = message.followedAt !== BigInt(0) ? message.followedAt?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryThreadFollowersResponseAminoMsg): QueryThreadFollowersResponse {
    return QueryThreadFollowersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryThreadFollowersResponseProtoMsg): QueryThreadFollowersResponse {
    return QueryThreadFollowersResponse.decode(message.value);
  },
  toProto(message: QueryThreadFollowersResponse): Uint8Array {
    return QueryThreadFollowersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryThreadFollowersResponse): QueryThreadFollowersResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryThreadFollowersResponse",
      value: QueryThreadFollowersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserFollowedThreadsRequest(): QueryUserFollowedThreadsRequest {
  return {
    user: "",
    pagination: undefined
  };
}
/**
 * QueryUserFollowedThreadsRequest defines the QueryUserFollowedThreadsRequest message.
 * @name QueryUserFollowedThreadsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserFollowedThreadsRequest
 */
export const QueryUserFollowedThreadsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryUserFollowedThreadsRequest",
  encode(message: QueryUserFollowedThreadsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserFollowedThreadsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserFollowedThreadsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
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
  fromPartial(object: DeepPartial<QueryUserFollowedThreadsRequest>): QueryUserFollowedThreadsRequest {
    const message = createBaseQueryUserFollowedThreadsRequest();
    message.user = object.user ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserFollowedThreadsRequestAmino): QueryUserFollowedThreadsRequest {
    const message = createBaseQueryUserFollowedThreadsRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserFollowedThreadsRequest): QueryUserFollowedThreadsRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserFollowedThreadsRequestAminoMsg): QueryUserFollowedThreadsRequest {
    return QueryUserFollowedThreadsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserFollowedThreadsRequestProtoMsg): QueryUserFollowedThreadsRequest {
    return QueryUserFollowedThreadsRequest.decode(message.value);
  },
  toProto(message: QueryUserFollowedThreadsRequest): Uint8Array {
    return QueryUserFollowedThreadsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserFollowedThreadsRequest): QueryUserFollowedThreadsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryUserFollowedThreadsRequest",
      value: QueryUserFollowedThreadsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserFollowedThreadsResponse(): QueryUserFollowedThreadsResponse {
  return {
    threadId: BigInt(0),
    followedAt: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryUserFollowedThreadsResponse defines the QueryUserFollowedThreadsResponse message.
 * @name QueryUserFollowedThreadsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserFollowedThreadsResponse
 */
export const QueryUserFollowedThreadsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryUserFollowedThreadsResponse",
  encode(message: QueryUserFollowedThreadsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    if (message.followedAt !== BigInt(0)) {
      writer.uint32(16).int64(message.followedAt);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserFollowedThreadsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserFollowedThreadsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        case 2:
          message.followedAt = reader.int64();
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
  fromPartial(object: DeepPartial<QueryUserFollowedThreadsResponse>): QueryUserFollowedThreadsResponse {
    const message = createBaseQueryUserFollowedThreadsResponse();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.followedAt = object.followedAt !== undefined && object.followedAt !== null ? BigInt(object.followedAt.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserFollowedThreadsResponseAmino): QueryUserFollowedThreadsResponse {
    const message = createBaseQueryUserFollowedThreadsResponse();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.followed_at !== undefined && object.followed_at !== null) {
      message.followedAt = BigInt(object.followed_at);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserFollowedThreadsResponse): QueryUserFollowedThreadsResponseAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.followed_at = message.followedAt !== BigInt(0) ? message.followedAt?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserFollowedThreadsResponseAminoMsg): QueryUserFollowedThreadsResponse {
    return QueryUserFollowedThreadsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserFollowedThreadsResponseProtoMsg): QueryUserFollowedThreadsResponse {
    return QueryUserFollowedThreadsResponse.decode(message.value);
  },
  toProto(message: QueryUserFollowedThreadsResponse): Uint8Array {
    return QueryUserFollowedThreadsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserFollowedThreadsResponse): QueryUserFollowedThreadsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryUserFollowedThreadsResponse",
      value: QueryUserFollowedThreadsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIsFollowingThreadRequest(): QueryIsFollowingThreadRequest {
  return {
    threadId: BigInt(0),
    user: ""
  };
}
/**
 * QueryIsFollowingThreadRequest defines the QueryIsFollowingThreadRequest message.
 * @name QueryIsFollowingThreadRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryIsFollowingThreadRequest
 */
export const QueryIsFollowingThreadRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryIsFollowingThreadRequest",
  encode(message: QueryIsFollowingThreadRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsFollowingThreadRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsFollowingThreadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        case 2:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryIsFollowingThreadRequest>): QueryIsFollowingThreadRequest {
    const message = createBaseQueryIsFollowingThreadRequest();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryIsFollowingThreadRequestAmino): QueryIsFollowingThreadRequest {
    const message = createBaseQueryIsFollowingThreadRequest();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QueryIsFollowingThreadRequest): QueryIsFollowingThreadRequestAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QueryIsFollowingThreadRequestAminoMsg): QueryIsFollowingThreadRequest {
    return QueryIsFollowingThreadRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsFollowingThreadRequestProtoMsg): QueryIsFollowingThreadRequest {
    return QueryIsFollowingThreadRequest.decode(message.value);
  },
  toProto(message: QueryIsFollowingThreadRequest): Uint8Array {
    return QueryIsFollowingThreadRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsFollowingThreadRequest): QueryIsFollowingThreadRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryIsFollowingThreadRequest",
      value: QueryIsFollowingThreadRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIsFollowingThreadResponse(): QueryIsFollowingThreadResponse {
  return {
    isFollowing: false,
    followedAt: BigInt(0)
  };
}
/**
 * QueryIsFollowingThreadResponse defines the QueryIsFollowingThreadResponse message.
 * @name QueryIsFollowingThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryIsFollowingThreadResponse
 */
export const QueryIsFollowingThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryIsFollowingThreadResponse",
  encode(message: QueryIsFollowingThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isFollowing === true) {
      writer.uint32(8).bool(message.isFollowing);
    }
    if (message.followedAt !== BigInt(0)) {
      writer.uint32(16).int64(message.followedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsFollowingThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsFollowingThreadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isFollowing = reader.bool();
          break;
        case 2:
          message.followedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryIsFollowingThreadResponse>): QueryIsFollowingThreadResponse {
    const message = createBaseQueryIsFollowingThreadResponse();
    message.isFollowing = object.isFollowing ?? false;
    message.followedAt = object.followedAt !== undefined && object.followedAt !== null ? BigInt(object.followedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryIsFollowingThreadResponseAmino): QueryIsFollowingThreadResponse {
    const message = createBaseQueryIsFollowingThreadResponse();
    if (object.is_following !== undefined && object.is_following !== null) {
      message.isFollowing = object.is_following;
    }
    if (object.followed_at !== undefined && object.followed_at !== null) {
      message.followedAt = BigInt(object.followed_at);
    }
    return message;
  },
  toAmino(message: QueryIsFollowingThreadResponse): QueryIsFollowingThreadResponseAmino {
    const obj: any = {};
    obj.is_following = message.isFollowing === false ? undefined : message.isFollowing;
    obj.followed_at = message.followedAt !== BigInt(0) ? message.followedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIsFollowingThreadResponseAminoMsg): QueryIsFollowingThreadResponse {
    return QueryIsFollowingThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsFollowingThreadResponseProtoMsg): QueryIsFollowingThreadResponse {
    return QueryIsFollowingThreadResponse.decode(message.value);
  },
  toProto(message: QueryIsFollowingThreadResponse): Uint8Array {
    return QueryIsFollowingThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsFollowingThreadResponse): QueryIsFollowingThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryIsFollowingThreadResponse",
      value: QueryIsFollowingThreadResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBountyByThreadRequest(): QueryBountyByThreadRequest {
  return {
    threadId: BigInt(0)
  };
}
/**
 * QueryBountyByThreadRequest defines the QueryBountyByThreadRequest message.
 * @name QueryBountyByThreadRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyByThreadRequest
 */
export const QueryBountyByThreadRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryBountyByThreadRequest",
  encode(message: QueryBountyByThreadRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threadId !== BigInt(0)) {
      writer.uint32(8).uint64(message.threadId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBountyByThreadRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBountyByThreadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threadId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBountyByThreadRequest>): QueryBountyByThreadRequest {
    const message = createBaseQueryBountyByThreadRequest();
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBountyByThreadRequestAmino): QueryBountyByThreadRequest {
    const message = createBaseQueryBountyByThreadRequest();
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    return message;
  },
  toAmino(message: QueryBountyByThreadRequest): QueryBountyByThreadRequestAmino {
    const obj: any = {};
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBountyByThreadRequestAminoMsg): QueryBountyByThreadRequest {
    return QueryBountyByThreadRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBountyByThreadRequestProtoMsg): QueryBountyByThreadRequest {
    return QueryBountyByThreadRequest.decode(message.value);
  },
  toProto(message: QueryBountyByThreadRequest): Uint8Array {
    return QueryBountyByThreadRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBountyByThreadRequest): QueryBountyByThreadRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryBountyByThreadRequest",
      value: QueryBountyByThreadRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBountyByThreadResponse(): QueryBountyByThreadResponse {
  return {
    bountyId: BigInt(0),
    amount: "",
    status: BigInt(0),
    expiresAt: BigInt(0)
  };
}
/**
 * QueryBountyByThreadResponse defines the QueryBountyByThreadResponse message.
 * @name QueryBountyByThreadResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyByThreadResponse
 */
export const QueryBountyByThreadResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryBountyByThreadResponse",
  encode(message: QueryBountyByThreadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bountyId !== BigInt(0)) {
      writer.uint32(8).uint64(message.bountyId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(32).int64(message.expiresAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBountyByThreadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBountyByThreadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bountyId = reader.uint64();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.status = reader.uint64();
          break;
        case 4:
          message.expiresAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBountyByThreadResponse>): QueryBountyByThreadResponse {
    const message = createBaseQueryBountyByThreadResponse();
    message.bountyId = object.bountyId !== undefined && object.bountyId !== null ? BigInt(object.bountyId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBountyByThreadResponseAmino): QueryBountyByThreadResponse {
    const message = createBaseQueryBountyByThreadResponse();
    if (object.bounty_id !== undefined && object.bounty_id !== null) {
      message.bountyId = BigInt(object.bounty_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    return message;
  },
  toAmino(message: QueryBountyByThreadResponse): QueryBountyByThreadResponseAmino {
    const obj: any = {};
    obj.bounty_id = message.bountyId !== BigInt(0) ? message.bountyId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBountyByThreadResponseAminoMsg): QueryBountyByThreadResponse {
    return QueryBountyByThreadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBountyByThreadResponseProtoMsg): QueryBountyByThreadResponse {
    return QueryBountyByThreadResponse.decode(message.value);
  },
  toProto(message: QueryBountyByThreadResponse): Uint8Array {
    return QueryBountyByThreadResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBountyByThreadResponse): QueryBountyByThreadResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryBountyByThreadResponse",
      value: QueryBountyByThreadResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActiveBountiesRequest(): QueryActiveBountiesRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryActiveBountiesRequest defines the QueryActiveBountiesRequest message.
 * @name QueryActiveBountiesRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryActiveBountiesRequest
 */
export const QueryActiveBountiesRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryActiveBountiesRequest",
  encode(message: QueryActiveBountiesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveBountiesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveBountiesRequest();
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
  fromPartial(object: DeepPartial<QueryActiveBountiesRequest>): QueryActiveBountiesRequest {
    const message = createBaseQueryActiveBountiesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryActiveBountiesRequestAmino): QueryActiveBountiesRequest {
    const message = createBaseQueryActiveBountiesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryActiveBountiesRequest): QueryActiveBountiesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActiveBountiesRequestAminoMsg): QueryActiveBountiesRequest {
    return QueryActiveBountiesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveBountiesRequestProtoMsg): QueryActiveBountiesRequest {
    return QueryActiveBountiesRequest.decode(message.value);
  },
  toProto(message: QueryActiveBountiesRequest): Uint8Array {
    return QueryActiveBountiesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveBountiesRequest): QueryActiveBountiesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryActiveBountiesRequest",
      value: QueryActiveBountiesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryActiveBountiesResponse(): QueryActiveBountiesResponse {
  return {
    bountyId: BigInt(0),
    threadId: BigInt(0),
    amount: "",
    pagination: undefined
  };
}
/**
 * QueryActiveBountiesResponse defines the QueryActiveBountiesResponse message.
 * @name QueryActiveBountiesResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryActiveBountiesResponse
 */
export const QueryActiveBountiesResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryActiveBountiesResponse",
  encode(message: QueryActiveBountiesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bountyId !== BigInt(0)) {
      writer.uint32(8).uint64(message.bountyId);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActiveBountiesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveBountiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bountyId = reader.uint64();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryActiveBountiesResponse>): QueryActiveBountiesResponse {
    const message = createBaseQueryActiveBountiesResponse();
    message.bountyId = object.bountyId !== undefined && object.bountyId !== null ? BigInt(object.bountyId.toString()) : BigInt(0);
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryActiveBountiesResponseAmino): QueryActiveBountiesResponse {
    const message = createBaseQueryActiveBountiesResponse();
    if (object.bounty_id !== undefined && object.bounty_id !== null) {
      message.bountyId = BigInt(object.bounty_id);
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryActiveBountiesResponse): QueryActiveBountiesResponseAmino {
    const obj: any = {};
    obj.bounty_id = message.bountyId !== BigInt(0) ? message.bountyId?.toString() : undefined;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActiveBountiesResponseAminoMsg): QueryActiveBountiesResponse {
    return QueryActiveBountiesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActiveBountiesResponseProtoMsg): QueryActiveBountiesResponse {
    return QueryActiveBountiesResponse.decode(message.value);
  },
  toProto(message: QueryActiveBountiesResponse): Uint8Array {
    return QueryActiveBountiesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActiveBountiesResponse): QueryActiveBountiesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryActiveBountiesResponse",
      value: QueryActiveBountiesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserBountiesRequest(): QueryUserBountiesRequest {
  return {
    user: "",
    pagination: undefined
  };
}
/**
 * QueryUserBountiesRequest defines the QueryUserBountiesRequest message.
 * @name QueryUserBountiesRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserBountiesRequest
 */
export const QueryUserBountiesRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryUserBountiesRequest",
  encode(message: QueryUserBountiesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserBountiesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserBountiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
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
  fromPartial(object: DeepPartial<QueryUserBountiesRequest>): QueryUserBountiesRequest {
    const message = createBaseQueryUserBountiesRequest();
    message.user = object.user ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserBountiesRequestAmino): QueryUserBountiesRequest {
    const message = createBaseQueryUserBountiesRequest();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserBountiesRequest): QueryUserBountiesRequestAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserBountiesRequestAminoMsg): QueryUserBountiesRequest {
    return QueryUserBountiesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserBountiesRequestProtoMsg): QueryUserBountiesRequest {
    return QueryUserBountiesRequest.decode(message.value);
  },
  toProto(message: QueryUserBountiesRequest): Uint8Array {
    return QueryUserBountiesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserBountiesRequest): QueryUserBountiesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryUserBountiesRequest",
      value: QueryUserBountiesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserBountiesResponse(): QueryUserBountiesResponse {
  return {
    bountyId: BigInt(0),
    threadId: BigInt(0),
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryUserBountiesResponse defines the QueryUserBountiesResponse message.
 * @name QueryUserBountiesResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryUserBountiesResponse
 */
export const QueryUserBountiesResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryUserBountiesResponse",
  encode(message: QueryUserBountiesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bountyId !== BigInt(0)) {
      writer.uint32(8).uint64(message.bountyId);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserBountiesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserBountiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bountyId = reader.uint64();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        case 3:
          message.status = reader.uint64();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUserBountiesResponse>): QueryUserBountiesResponse {
    const message = createBaseQueryUserBountiesResponse();
    message.bountyId = object.bountyId !== undefined && object.bountyId !== null ? BigInt(object.bountyId.toString()) : BigInt(0);
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserBountiesResponseAmino): QueryUserBountiesResponse {
    const message = createBaseQueryUserBountiesResponse();
    if (object.bounty_id !== undefined && object.bounty_id !== null) {
      message.bountyId = BigInt(object.bounty_id);
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserBountiesResponse): QueryUserBountiesResponseAmino {
    const obj: any = {};
    obj.bounty_id = message.bountyId !== BigInt(0) ? message.bountyId?.toString() : undefined;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserBountiesResponseAminoMsg): QueryUserBountiesResponse {
    return QueryUserBountiesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserBountiesResponseProtoMsg): QueryUserBountiesResponse {
    return QueryUserBountiesResponse.decode(message.value);
  },
  toProto(message: QueryUserBountiesResponse): Uint8Array {
    return QueryUserBountiesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserBountiesResponse): QueryUserBountiesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryUserBountiesResponse",
      value: QueryUserBountiesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBountyExpiringSoonRequest(): QueryBountyExpiringSoonRequest {
  return {
    withinSeconds: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryBountyExpiringSoonRequest defines the QueryBountyExpiringSoonRequest message.
 * @name QueryBountyExpiringSoonRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyExpiringSoonRequest
 */
export const QueryBountyExpiringSoonRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryBountyExpiringSoonRequest",
  encode(message: QueryBountyExpiringSoonRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withinSeconds !== BigInt(0)) {
      writer.uint32(8).int64(message.withinSeconds);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBountyExpiringSoonRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBountyExpiringSoonRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withinSeconds = reader.int64();
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
  fromPartial(object: DeepPartial<QueryBountyExpiringSoonRequest>): QueryBountyExpiringSoonRequest {
    const message = createBaseQueryBountyExpiringSoonRequest();
    message.withinSeconds = object.withinSeconds !== undefined && object.withinSeconds !== null ? BigInt(object.withinSeconds.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBountyExpiringSoonRequestAmino): QueryBountyExpiringSoonRequest {
    const message = createBaseQueryBountyExpiringSoonRequest();
    if (object.within_seconds !== undefined && object.within_seconds !== null) {
      message.withinSeconds = BigInt(object.within_seconds);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBountyExpiringSoonRequest): QueryBountyExpiringSoonRequestAmino {
    const obj: any = {};
    obj.within_seconds = message.withinSeconds !== BigInt(0) ? message.withinSeconds?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBountyExpiringSoonRequestAminoMsg): QueryBountyExpiringSoonRequest {
    return QueryBountyExpiringSoonRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBountyExpiringSoonRequestProtoMsg): QueryBountyExpiringSoonRequest {
    return QueryBountyExpiringSoonRequest.decode(message.value);
  },
  toProto(message: QueryBountyExpiringSoonRequest): Uint8Array {
    return QueryBountyExpiringSoonRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBountyExpiringSoonRequest): QueryBountyExpiringSoonRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryBountyExpiringSoonRequest",
      value: QueryBountyExpiringSoonRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBountyExpiringSoonResponse(): QueryBountyExpiringSoonResponse {
  return {
    bountyId: BigInt(0),
    threadId: BigInt(0),
    expiresAt: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryBountyExpiringSoonResponse defines the QueryBountyExpiringSoonResponse message.
 * @name QueryBountyExpiringSoonResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryBountyExpiringSoonResponse
 */
export const QueryBountyExpiringSoonResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryBountyExpiringSoonResponse",
  encode(message: QueryBountyExpiringSoonResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bountyId !== BigInt(0)) {
      writer.uint32(8).uint64(message.bountyId);
    }
    if (message.threadId !== BigInt(0)) {
      writer.uint32(16).uint64(message.threadId);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(24).int64(message.expiresAt);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBountyExpiringSoonResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBountyExpiringSoonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bountyId = reader.uint64();
          break;
        case 2:
          message.threadId = reader.uint64();
          break;
        case 3:
          message.expiresAt = reader.int64();
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBountyExpiringSoonResponse>): QueryBountyExpiringSoonResponse {
    const message = createBaseQueryBountyExpiringSoonResponse();
    message.bountyId = object.bountyId !== undefined && object.bountyId !== null ? BigInt(object.bountyId.toString()) : BigInt(0);
    message.threadId = object.threadId !== undefined && object.threadId !== null ? BigInt(object.threadId.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBountyExpiringSoonResponseAmino): QueryBountyExpiringSoonResponse {
    const message = createBaseQueryBountyExpiringSoonResponse();
    if (object.bounty_id !== undefined && object.bounty_id !== null) {
      message.bountyId = BigInt(object.bounty_id);
    }
    if (object.thread_id !== undefined && object.thread_id !== null) {
      message.threadId = BigInt(object.thread_id);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBountyExpiringSoonResponse): QueryBountyExpiringSoonResponseAmino {
    const obj: any = {};
    obj.bounty_id = message.bountyId !== BigInt(0) ? message.bountyId?.toString() : undefined;
    obj.thread_id = message.threadId !== BigInt(0) ? message.threadId?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBountyExpiringSoonResponseAminoMsg): QueryBountyExpiringSoonResponse {
    return QueryBountyExpiringSoonResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBountyExpiringSoonResponseProtoMsg): QueryBountyExpiringSoonResponse {
    return QueryBountyExpiringSoonResponse.decode(message.value);
  },
  toProto(message: QueryBountyExpiringSoonResponse): Uint8Array {
    return QueryBountyExpiringSoonResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBountyExpiringSoonResponse): QueryBountyExpiringSoonResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryBountyExpiringSoonResponse",
      value: QueryBountyExpiringSoonResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPostFlagsRequest(): QueryPostFlagsRequest {
  return {
    postId: BigInt(0)
  };
}
/**
 * QueryPostFlagsRequest defines the QueryPostFlagsRequest message.
 * @name QueryPostFlagsRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostFlagsRequest
 */
export const QueryPostFlagsRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryPostFlagsRequest",
  encode(message: QueryPostFlagsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPostFlagsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostFlagsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPostFlagsRequest>): QueryPostFlagsRequest {
    const message = createBaseQueryPostFlagsRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPostFlagsRequestAmino): QueryPostFlagsRequest {
    const message = createBaseQueryPostFlagsRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    return message;
  },
  toAmino(message: QueryPostFlagsRequest): QueryPostFlagsRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostFlagsRequestAminoMsg): QueryPostFlagsRequest {
    return QueryPostFlagsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostFlagsRequestProtoMsg): QueryPostFlagsRequest {
    return QueryPostFlagsRequest.decode(message.value);
  },
  toProto(message: QueryPostFlagsRequest): Uint8Array {
    return QueryPostFlagsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPostFlagsRequest): QueryPostFlagsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPostFlagsRequest",
      value: QueryPostFlagsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPostFlagsResponse(): QueryPostFlagsResponse {
  return {
    totalWeight: "",
    inReviewQueue: false,
    flaggerCount: BigInt(0)
  };
}
/**
 * QueryPostFlagsResponse defines the QueryPostFlagsResponse message.
 * @name QueryPostFlagsResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostFlagsResponse
 */
export const QueryPostFlagsResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryPostFlagsResponse",
  encode(message: QueryPostFlagsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }
    if (message.inReviewQueue === true) {
      writer.uint32(16).bool(message.inReviewQueue);
    }
    if (message.flaggerCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.flaggerCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPostFlagsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostFlagsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalWeight = reader.string();
          break;
        case 2:
          message.inReviewQueue = reader.bool();
          break;
        case 3:
          message.flaggerCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPostFlagsResponse>): QueryPostFlagsResponse {
    const message = createBaseQueryPostFlagsResponse();
    message.totalWeight = object.totalWeight ?? "";
    message.inReviewQueue = object.inReviewQueue ?? false;
    message.flaggerCount = object.flaggerCount !== undefined && object.flaggerCount !== null ? BigInt(object.flaggerCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPostFlagsResponseAmino): QueryPostFlagsResponse {
    const message = createBaseQueryPostFlagsResponse();
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    if (object.in_review_queue !== undefined && object.in_review_queue !== null) {
      message.inReviewQueue = object.in_review_queue;
    }
    if (object.flagger_count !== undefined && object.flagger_count !== null) {
      message.flaggerCount = BigInt(object.flagger_count);
    }
    return message;
  },
  toAmino(message: QueryPostFlagsResponse): QueryPostFlagsResponseAmino {
    const obj: any = {};
    obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
    obj.in_review_queue = message.inReviewQueue === false ? undefined : message.inReviewQueue;
    obj.flagger_count = message.flaggerCount !== BigInt(0) ? message.flaggerCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostFlagsResponseAminoMsg): QueryPostFlagsResponse {
    return QueryPostFlagsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostFlagsResponseProtoMsg): QueryPostFlagsResponse {
    return QueryPostFlagsResponse.decode(message.value);
  },
  toProto(message: QueryPostFlagsResponse): Uint8Array {
    return QueryPostFlagsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPostFlagsResponse): QueryPostFlagsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPostFlagsResponse",
      value: QueryPostFlagsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFlagReviewQueueRequest(): QueryFlagReviewQueueRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryFlagReviewQueueRequest defines the QueryFlagReviewQueueRequest message.
 * @name QueryFlagReviewQueueRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryFlagReviewQueueRequest
 */
export const QueryFlagReviewQueueRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryFlagReviewQueueRequest",
  encode(message: QueryFlagReviewQueueRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlagReviewQueueRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlagReviewQueueRequest();
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
  fromPartial(object: DeepPartial<QueryFlagReviewQueueRequest>): QueryFlagReviewQueueRequest {
    const message = createBaseQueryFlagReviewQueueRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlagReviewQueueRequestAmino): QueryFlagReviewQueueRequest {
    const message = createBaseQueryFlagReviewQueueRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlagReviewQueueRequest): QueryFlagReviewQueueRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlagReviewQueueRequestAminoMsg): QueryFlagReviewQueueRequest {
    return QueryFlagReviewQueueRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlagReviewQueueRequestProtoMsg): QueryFlagReviewQueueRequest {
    return QueryFlagReviewQueueRequest.decode(message.value);
  },
  toProto(message: QueryFlagReviewQueueRequest): Uint8Array {
    return QueryFlagReviewQueueRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFlagReviewQueueRequest): QueryFlagReviewQueueRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryFlagReviewQueueRequest",
      value: QueryFlagReviewQueueRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFlagReviewQueueResponse(): QueryFlagReviewQueueResponse {
  return {
    postId: BigInt(0),
    totalWeight: "",
    pagination: undefined
  };
}
/**
 * QueryFlagReviewQueueResponse defines the QueryFlagReviewQueueResponse message.
 * @name QueryFlagReviewQueueResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryFlagReviewQueueResponse
 */
export const QueryFlagReviewQueueResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryFlagReviewQueueResponse",
  encode(message: QueryFlagReviewQueueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.totalWeight !== "") {
      writer.uint32(18).string(message.totalWeight);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlagReviewQueueResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlagReviewQueueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
          break;
        case 2:
          message.totalWeight = reader.string();
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
  fromPartial(object: DeepPartial<QueryFlagReviewQueueResponse>): QueryFlagReviewQueueResponse {
    const message = createBaseQueryFlagReviewQueueResponse();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.totalWeight = object.totalWeight ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlagReviewQueueResponseAmino): QueryFlagReviewQueueResponse {
    const message = createBaseQueryFlagReviewQueueResponse();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlagReviewQueueResponse): QueryFlagReviewQueueResponseAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlagReviewQueueResponseAminoMsg): QueryFlagReviewQueueResponse {
    return QueryFlagReviewQueueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlagReviewQueueResponseProtoMsg): QueryFlagReviewQueueResponse {
    return QueryFlagReviewQueueResponse.decode(message.value);
  },
  toProto(message: QueryFlagReviewQueueResponse): Uint8Array {
    return QueryFlagReviewQueueResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFlagReviewQueueResponse): QueryFlagReviewQueueResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryFlagReviewQueueResponse",
      value: QueryFlagReviewQueueResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPostConvictionStakeRequest(): QueryGetPostConvictionStakeRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetPostConvictionStakeRequest defines the QueryGetPostConvictionStakeRequest message.
 * @name QueryGetPostConvictionStakeRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostConvictionStakeRequest
 */
export const QueryGetPostConvictionStakeRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostConvictionStakeRequest",
  encode(message: QueryGetPostConvictionStakeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPostConvictionStakeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostConvictionStakeRequest();
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
  fromPartial(object: DeepPartial<QueryGetPostConvictionStakeRequest>): QueryGetPostConvictionStakeRequest {
    const message = createBaseQueryGetPostConvictionStakeRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPostConvictionStakeRequestAmino): QueryGetPostConvictionStakeRequest {
    const message = createBaseQueryGetPostConvictionStakeRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetPostConvictionStakeRequest): QueryGetPostConvictionStakeRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPostConvictionStakeRequestAminoMsg): QueryGetPostConvictionStakeRequest {
    return QueryGetPostConvictionStakeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPostConvictionStakeRequestProtoMsg): QueryGetPostConvictionStakeRequest {
    return QueryGetPostConvictionStakeRequest.decode(message.value);
  },
  toProto(message: QueryGetPostConvictionStakeRequest): Uint8Array {
    return QueryGetPostConvictionStakeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPostConvictionStakeRequest): QueryGetPostConvictionStakeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetPostConvictionStakeRequest",
      value: QueryGetPostConvictionStakeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPostConvictionStakeResponse(): QueryGetPostConvictionStakeResponse {
  return {
    stake: PostConvictionStake.fromPartial({})
  };
}
/**
 * QueryGetPostConvictionStakeResponse defines the QueryGetPostConvictionStakeResponse message.
 * @name QueryGetPostConvictionStakeResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryGetPostConvictionStakeResponse
 */
export const QueryGetPostConvictionStakeResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryGetPostConvictionStakeResponse",
  encode(message: QueryGetPostConvictionStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stake !== undefined) {
      PostConvictionStake.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPostConvictionStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostConvictionStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake = PostConvictionStake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPostConvictionStakeResponse>): QueryGetPostConvictionStakeResponse {
    const message = createBaseQueryGetPostConvictionStakeResponse();
    message.stake = object.stake !== undefined && object.stake !== null ? PostConvictionStake.fromPartial(object.stake) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPostConvictionStakeResponseAmino): QueryGetPostConvictionStakeResponse {
    const message = createBaseQueryGetPostConvictionStakeResponse();
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = PostConvictionStake.fromAmino(object.stake);
    }
    return message;
  },
  toAmino(message: QueryGetPostConvictionStakeResponse): QueryGetPostConvictionStakeResponseAmino {
    const obj: any = {};
    obj.stake = message.stake ? PostConvictionStake.toAmino(message.stake) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPostConvictionStakeResponseAminoMsg): QueryGetPostConvictionStakeResponse {
    return QueryGetPostConvictionStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPostConvictionStakeResponseProtoMsg): QueryGetPostConvictionStakeResponse {
    return QueryGetPostConvictionStakeResponse.decode(message.value);
  },
  toProto(message: QueryGetPostConvictionStakeResponse): Uint8Array {
    return QueryGetPostConvictionStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPostConvictionStakeResponse): QueryGetPostConvictionStakeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryGetPostConvictionStakeResponse",
      value: QueryGetPostConvictionStakeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPostConvictionStakesByStakerRequest(): QueryPostConvictionStakesByStakerRequest {
  return {
    staker: "",
    pagination: undefined
  };
}
/**
 * QueryPostConvictionStakesByStakerRequest defines the QueryPostConvictionStakesByStakerRequest message.
 * @name QueryPostConvictionStakesByStakerRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostConvictionStakesByStakerRequest
 */
export const QueryPostConvictionStakesByStakerRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryPostConvictionStakesByStakerRequest",
  encode(message: QueryPostConvictionStakesByStakerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPostConvictionStakesByStakerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostConvictionStakesByStakerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
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
  fromPartial(object: DeepPartial<QueryPostConvictionStakesByStakerRequest>): QueryPostConvictionStakesByStakerRequest {
    const message = createBaseQueryPostConvictionStakesByStakerRequest();
    message.staker = object.staker ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPostConvictionStakesByStakerRequestAmino): QueryPostConvictionStakesByStakerRequest {
    const message = createBaseQueryPostConvictionStakesByStakerRequest();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPostConvictionStakesByStakerRequest): QueryPostConvictionStakesByStakerRequestAmino {
    const obj: any = {};
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostConvictionStakesByStakerRequestAminoMsg): QueryPostConvictionStakesByStakerRequest {
    return QueryPostConvictionStakesByStakerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostConvictionStakesByStakerRequestProtoMsg): QueryPostConvictionStakesByStakerRequest {
    return QueryPostConvictionStakesByStakerRequest.decode(message.value);
  },
  toProto(message: QueryPostConvictionStakesByStakerRequest): Uint8Array {
    return QueryPostConvictionStakesByStakerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPostConvictionStakesByStakerRequest): QueryPostConvictionStakesByStakerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPostConvictionStakesByStakerRequest",
      value: QueryPostConvictionStakesByStakerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPostConvictionStakesByStakerResponse(): QueryPostConvictionStakesByStakerResponse {
  return {
    stakes: [],
    pagination: undefined
  };
}
/**
 * QueryPostConvictionStakesByStakerResponse defines the QueryPostConvictionStakesByStakerResponse message.
 * @name QueryPostConvictionStakesByStakerResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostConvictionStakesByStakerResponse
 */
export const QueryPostConvictionStakesByStakerResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryPostConvictionStakesByStakerResponse",
  encode(message: QueryPostConvictionStakesByStakerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakes) {
      PostConvictionStake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPostConvictionStakesByStakerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostConvictionStakesByStakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakes.push(PostConvictionStake.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryPostConvictionStakesByStakerResponse>): QueryPostConvictionStakesByStakerResponse {
    const message = createBaseQueryPostConvictionStakesByStakerResponse();
    message.stakes = object.stakes?.map(e => PostConvictionStake.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPostConvictionStakesByStakerResponseAmino): QueryPostConvictionStakesByStakerResponse {
    const message = createBaseQueryPostConvictionStakesByStakerResponse();
    message.stakes = object.stakes?.map(e => PostConvictionStake.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPostConvictionStakesByStakerResponse): QueryPostConvictionStakesByStakerResponseAmino {
    const obj: any = {};
    if (message.stakes) {
      obj.stakes = message.stakes.map(e => e ? PostConvictionStake.toAmino(e) : undefined);
    } else {
      obj.stakes = message.stakes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostConvictionStakesByStakerResponseAminoMsg): QueryPostConvictionStakesByStakerResponse {
    return QueryPostConvictionStakesByStakerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostConvictionStakesByStakerResponseProtoMsg): QueryPostConvictionStakesByStakerResponse {
    return QueryPostConvictionStakesByStakerResponse.decode(message.value);
  },
  toProto(message: QueryPostConvictionStakesByStakerResponse): Uint8Array {
    return QueryPostConvictionStakesByStakerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPostConvictionStakesByStakerResponse): QueryPostConvictionStakesByStakerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPostConvictionStakesByStakerResponse",
      value: QueryPostConvictionStakesByStakerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPostConvictionStakesByPostRequest(): QueryPostConvictionStakesByPostRequest {
  return {
    postId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryPostConvictionStakesByPostRequest defines the QueryPostConvictionStakesByPostRequest message.
 * @name QueryPostConvictionStakesByPostRequest
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostConvictionStakesByPostRequest
 */
export const QueryPostConvictionStakesByPostRequest = {
  typeUrl: "/sparkdream.forum.v1.QueryPostConvictionStakesByPostRequest",
  encode(message: QueryPostConvictionStakesByPostRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPostConvictionStakesByPostRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostConvictionStakesByPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryPostConvictionStakesByPostRequest>): QueryPostConvictionStakesByPostRequest {
    const message = createBaseQueryPostConvictionStakesByPostRequest();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPostConvictionStakesByPostRequestAmino): QueryPostConvictionStakesByPostRequest {
    const message = createBaseQueryPostConvictionStakesByPostRequest();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPostConvictionStakesByPostRequest): QueryPostConvictionStakesByPostRequestAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostConvictionStakesByPostRequestAminoMsg): QueryPostConvictionStakesByPostRequest {
    return QueryPostConvictionStakesByPostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostConvictionStakesByPostRequestProtoMsg): QueryPostConvictionStakesByPostRequest {
    return QueryPostConvictionStakesByPostRequest.decode(message.value);
  },
  toProto(message: QueryPostConvictionStakesByPostRequest): Uint8Array {
    return QueryPostConvictionStakesByPostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPostConvictionStakesByPostRequest): QueryPostConvictionStakesByPostRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPostConvictionStakesByPostRequest",
      value: QueryPostConvictionStakesByPostRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPostConvictionStakesByPostResponse(): QueryPostConvictionStakesByPostResponse {
  return {
    stakes: [],
    pagination: undefined
  };
}
/**
 * QueryPostConvictionStakesByPostResponse defines the QueryPostConvictionStakesByPostResponse message.
 * @name QueryPostConvictionStakesByPostResponse
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.QueryPostConvictionStakesByPostResponse
 */
export const QueryPostConvictionStakesByPostResponse = {
  typeUrl: "/sparkdream.forum.v1.QueryPostConvictionStakesByPostResponse",
  encode(message: QueryPostConvictionStakesByPostResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakes) {
      PostConvictionStake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPostConvictionStakesByPostResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostConvictionStakesByPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakes.push(PostConvictionStake.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryPostConvictionStakesByPostResponse>): QueryPostConvictionStakesByPostResponse {
    const message = createBaseQueryPostConvictionStakesByPostResponse();
    message.stakes = object.stakes?.map(e => PostConvictionStake.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPostConvictionStakesByPostResponseAmino): QueryPostConvictionStakesByPostResponse {
    const message = createBaseQueryPostConvictionStakesByPostResponse();
    message.stakes = object.stakes?.map(e => PostConvictionStake.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPostConvictionStakesByPostResponse): QueryPostConvictionStakesByPostResponseAmino {
    const obj: any = {};
    if (message.stakes) {
      obj.stakes = message.stakes.map(e => e ? PostConvictionStake.toAmino(e) : undefined);
    } else {
      obj.stakes = message.stakes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostConvictionStakesByPostResponseAminoMsg): QueryPostConvictionStakesByPostResponse {
    return QueryPostConvictionStakesByPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostConvictionStakesByPostResponseProtoMsg): QueryPostConvictionStakesByPostResponse {
    return QueryPostConvictionStakesByPostResponse.decode(message.value);
  },
  toProto(message: QueryPostConvictionStakesByPostResponse): Uint8Array {
    return QueryPostConvictionStakesByPostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPostConvictionStakesByPostResponse): QueryPostConvictionStakesByPostResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.QueryPostConvictionStakesByPostResponse",
      value: QueryPostConvictionStakesByPostResponse.encode(message).finish()
    };
  }
};