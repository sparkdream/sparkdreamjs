//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { Member, MemberAmino } from "./member";
import { Invitation, InvitationAmino } from "./invitation";
import { Project, ProjectAmino } from "./project";
import { Initiative, InitiativeAmino } from "./initiative";
import { Stake, StakeAmino, StakeTargetType, MemberStakePool, MemberStakePoolAmino, TagStakePool, TagStakePoolAmino, ProjectStakeInfo, ProjectStakeInfoAmino } from "./stake";
import { Challenge, ChallengeAmino } from "./challenge";
import { JuryReview, JuryReviewAmino } from "./jury_review";
import { Interim, InterimAmino } from "./interim";
import { InterimTemplate, InterimTemplateAmino } from "./interim_template";
import { ContentChallenge, ContentChallengeAmino } from "./content_challenge";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryGetMemberRequest defines the QueryGetMemberRequest message.
 * @name QueryGetMemberRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberRequest
 */
export interface QueryGetMemberRequest {
  address: string;
}
export interface QueryGetMemberRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberRequest";
  value: Uint8Array;
}
/**
 * QueryGetMemberRequest defines the QueryGetMemberRequest message.
 * @name QueryGetMemberRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberRequest
 */
export interface QueryGetMemberRequestAmino {
  address?: string;
}
export interface QueryGetMemberRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetMemberRequest";
  value: QueryGetMemberRequestAmino;
}
/**
 * QueryGetMemberResponse defines the QueryGetMemberResponse message.
 * @name QueryGetMemberResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberResponse
 */
export interface QueryGetMemberResponse {
  member: Member;
}
export interface QueryGetMemberResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberResponse";
  value: Uint8Array;
}
/**
 * QueryGetMemberResponse defines the QueryGetMemberResponse message.
 * @name QueryGetMemberResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberResponse
 */
export interface QueryGetMemberResponseAmino {
  member?: MemberAmino;
}
export interface QueryGetMemberResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetMemberResponse";
  value: QueryGetMemberResponseAmino;
}
/**
 * QueryAllMemberRequest defines the QueryAllMemberRequest message.
 * @name QueryAllMemberRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberRequest
 */
export interface QueryAllMemberRequest {
  pagination?: PageRequest;
}
export interface QueryAllMemberRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllMemberRequest";
  value: Uint8Array;
}
/**
 * QueryAllMemberRequest defines the QueryAllMemberRequest message.
 * @name QueryAllMemberRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberRequest
 */
export interface QueryAllMemberRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMemberRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllMemberRequest";
  value: QueryAllMemberRequestAmino;
}
/**
 * QueryAllMemberResponse defines the QueryAllMemberResponse message.
 * @name QueryAllMemberResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberResponse
 */
export interface QueryAllMemberResponse {
  member: Member[];
  pagination?: PageResponse;
}
export interface QueryAllMemberResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllMemberResponse";
  value: Uint8Array;
}
/**
 * QueryAllMemberResponse defines the QueryAllMemberResponse message.
 * @name QueryAllMemberResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberResponse
 */
export interface QueryAllMemberResponseAmino {
  member?: MemberAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMemberResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllMemberResponse";
  value: QueryAllMemberResponseAmino;
}
/**
 * QueryGetInvitationRequest defines the QueryGetInvitationRequest message.
 * @name QueryGetInvitationRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInvitationRequest
 */
export interface QueryGetInvitationRequest {
  id: bigint;
}
export interface QueryGetInvitationRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetInvitationRequest";
  value: Uint8Array;
}
/**
 * QueryGetInvitationRequest defines the QueryGetInvitationRequest message.
 * @name QueryGetInvitationRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInvitationRequest
 */
export interface QueryGetInvitationRequestAmino {
  id?: string;
}
export interface QueryGetInvitationRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetInvitationRequest";
  value: QueryGetInvitationRequestAmino;
}
/**
 * QueryGetInvitationResponse defines the QueryGetInvitationResponse message.
 * @name QueryGetInvitationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInvitationResponse
 */
export interface QueryGetInvitationResponse {
  invitation: Invitation;
}
export interface QueryGetInvitationResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetInvitationResponse";
  value: Uint8Array;
}
/**
 * QueryGetInvitationResponse defines the QueryGetInvitationResponse message.
 * @name QueryGetInvitationResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInvitationResponse
 */
export interface QueryGetInvitationResponseAmino {
  invitation?: InvitationAmino;
}
export interface QueryGetInvitationResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetInvitationResponse";
  value: QueryGetInvitationResponseAmino;
}
/**
 * QueryAllInvitationRequest defines the QueryAllInvitationRequest message.
 * @name QueryAllInvitationRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInvitationRequest
 */
export interface QueryAllInvitationRequest {
  pagination?: PageRequest;
}
export interface QueryAllInvitationRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllInvitationRequest";
  value: Uint8Array;
}
/**
 * QueryAllInvitationRequest defines the QueryAllInvitationRequest message.
 * @name QueryAllInvitationRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInvitationRequest
 */
export interface QueryAllInvitationRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllInvitationRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllInvitationRequest";
  value: QueryAllInvitationRequestAmino;
}
/**
 * QueryAllInvitationResponse defines the QueryAllInvitationResponse message.
 * @name QueryAllInvitationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInvitationResponse
 */
export interface QueryAllInvitationResponse {
  invitation: Invitation[];
  pagination?: PageResponse;
}
export interface QueryAllInvitationResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllInvitationResponse";
  value: Uint8Array;
}
/**
 * QueryAllInvitationResponse defines the QueryAllInvitationResponse message.
 * @name QueryAllInvitationResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInvitationResponse
 */
export interface QueryAllInvitationResponseAmino {
  invitation?: InvitationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllInvitationResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllInvitationResponse";
  value: QueryAllInvitationResponseAmino;
}
/**
 * QueryGetProjectRequest defines the QueryGetProjectRequest message.
 * @name QueryGetProjectRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetProjectRequest
 */
export interface QueryGetProjectRequest {
  id: bigint;
}
export interface QueryGetProjectRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetProjectRequest";
  value: Uint8Array;
}
/**
 * QueryGetProjectRequest defines the QueryGetProjectRequest message.
 * @name QueryGetProjectRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetProjectRequest
 */
export interface QueryGetProjectRequestAmino {
  id?: string;
}
export interface QueryGetProjectRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetProjectRequest";
  value: QueryGetProjectRequestAmino;
}
/**
 * QueryGetProjectResponse defines the QueryGetProjectResponse message.
 * @name QueryGetProjectResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetProjectResponse
 */
export interface QueryGetProjectResponse {
  project: Project;
}
export interface QueryGetProjectResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetProjectResponse";
  value: Uint8Array;
}
/**
 * QueryGetProjectResponse defines the QueryGetProjectResponse message.
 * @name QueryGetProjectResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetProjectResponse
 */
export interface QueryGetProjectResponseAmino {
  project?: ProjectAmino;
}
export interface QueryGetProjectResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetProjectResponse";
  value: QueryGetProjectResponseAmino;
}
/**
 * QueryAllProjectRequest defines the QueryAllProjectRequest message.
 * @name QueryAllProjectRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllProjectRequest
 */
export interface QueryAllProjectRequest {
  pagination?: PageRequest;
}
export interface QueryAllProjectRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllProjectRequest";
  value: Uint8Array;
}
/**
 * QueryAllProjectRequest defines the QueryAllProjectRequest message.
 * @name QueryAllProjectRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllProjectRequest
 */
export interface QueryAllProjectRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllProjectRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllProjectRequest";
  value: QueryAllProjectRequestAmino;
}
/**
 * QueryAllProjectResponse defines the QueryAllProjectResponse message.
 * @name QueryAllProjectResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllProjectResponse
 */
export interface QueryAllProjectResponse {
  project: Project[];
  pagination?: PageResponse;
}
export interface QueryAllProjectResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllProjectResponse";
  value: Uint8Array;
}
/**
 * QueryAllProjectResponse defines the QueryAllProjectResponse message.
 * @name QueryAllProjectResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllProjectResponse
 */
export interface QueryAllProjectResponseAmino {
  project?: ProjectAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllProjectResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllProjectResponse";
  value: QueryAllProjectResponseAmino;
}
/**
 * QueryGetInitiativeRequest defines the QueryGetInitiativeRequest message.
 * @name QueryGetInitiativeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInitiativeRequest
 */
export interface QueryGetInitiativeRequest {
  id: bigint;
}
export interface QueryGetInitiativeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetInitiativeRequest";
  value: Uint8Array;
}
/**
 * QueryGetInitiativeRequest defines the QueryGetInitiativeRequest message.
 * @name QueryGetInitiativeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInitiativeRequest
 */
export interface QueryGetInitiativeRequestAmino {
  id?: string;
}
export interface QueryGetInitiativeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetInitiativeRequest";
  value: QueryGetInitiativeRequestAmino;
}
/**
 * QueryGetInitiativeResponse defines the QueryGetInitiativeResponse message.
 * @name QueryGetInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInitiativeResponse
 */
export interface QueryGetInitiativeResponse {
  initiative: Initiative;
}
export interface QueryGetInitiativeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetInitiativeResponse";
  value: Uint8Array;
}
/**
 * QueryGetInitiativeResponse defines the QueryGetInitiativeResponse message.
 * @name QueryGetInitiativeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInitiativeResponse
 */
export interface QueryGetInitiativeResponseAmino {
  initiative?: InitiativeAmino;
}
export interface QueryGetInitiativeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetInitiativeResponse";
  value: QueryGetInitiativeResponseAmino;
}
/**
 * QueryAllInitiativeRequest defines the QueryAllInitiativeRequest message.
 * @name QueryAllInitiativeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInitiativeRequest
 */
export interface QueryAllInitiativeRequest {
  pagination?: PageRequest;
}
export interface QueryAllInitiativeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllInitiativeRequest";
  value: Uint8Array;
}
/**
 * QueryAllInitiativeRequest defines the QueryAllInitiativeRequest message.
 * @name QueryAllInitiativeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInitiativeRequest
 */
export interface QueryAllInitiativeRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllInitiativeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllInitiativeRequest";
  value: QueryAllInitiativeRequestAmino;
}
/**
 * QueryAllInitiativeResponse defines the QueryAllInitiativeResponse message.
 * @name QueryAllInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInitiativeResponse
 */
export interface QueryAllInitiativeResponse {
  initiative: Initiative[];
  pagination?: PageResponse;
}
export interface QueryAllInitiativeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllInitiativeResponse";
  value: Uint8Array;
}
/**
 * QueryAllInitiativeResponse defines the QueryAllInitiativeResponse message.
 * @name QueryAllInitiativeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInitiativeResponse
 */
export interface QueryAllInitiativeResponseAmino {
  initiative?: InitiativeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllInitiativeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllInitiativeResponse";
  value: QueryAllInitiativeResponseAmino;
}
/**
 * QueryGetStakeRequest defines the QueryGetStakeRequest message.
 * @name QueryGetStakeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetStakeRequest
 */
export interface QueryGetStakeRequest {
  id: bigint;
}
export interface QueryGetStakeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetStakeRequest";
  value: Uint8Array;
}
/**
 * QueryGetStakeRequest defines the QueryGetStakeRequest message.
 * @name QueryGetStakeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetStakeRequest
 */
export interface QueryGetStakeRequestAmino {
  id?: string;
}
export interface QueryGetStakeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetStakeRequest";
  value: QueryGetStakeRequestAmino;
}
/**
 * QueryGetStakeResponse defines the QueryGetStakeResponse message.
 * @name QueryGetStakeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetStakeResponse
 */
export interface QueryGetStakeResponse {
  stake: Stake;
}
export interface QueryGetStakeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetStakeResponse";
  value: Uint8Array;
}
/**
 * QueryGetStakeResponse defines the QueryGetStakeResponse message.
 * @name QueryGetStakeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetStakeResponse
 */
export interface QueryGetStakeResponseAmino {
  stake?: StakeAmino;
}
export interface QueryGetStakeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetStakeResponse";
  value: QueryGetStakeResponseAmino;
}
/**
 * QueryAllStakeRequest defines the QueryAllStakeRequest message.
 * @name QueryAllStakeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllStakeRequest
 */
export interface QueryAllStakeRequest {
  pagination?: PageRequest;
}
export interface QueryAllStakeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllStakeRequest";
  value: Uint8Array;
}
/**
 * QueryAllStakeRequest defines the QueryAllStakeRequest message.
 * @name QueryAllStakeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllStakeRequest
 */
export interface QueryAllStakeRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllStakeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllStakeRequest";
  value: QueryAllStakeRequestAmino;
}
/**
 * QueryAllStakeResponse defines the QueryAllStakeResponse message.
 * @name QueryAllStakeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllStakeResponse
 */
export interface QueryAllStakeResponse {
  stake: Stake[];
  pagination?: PageResponse;
}
export interface QueryAllStakeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllStakeResponse";
  value: Uint8Array;
}
/**
 * QueryAllStakeResponse defines the QueryAllStakeResponse message.
 * @name QueryAllStakeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllStakeResponse
 */
export interface QueryAllStakeResponseAmino {
  stake?: StakeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllStakeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllStakeResponse";
  value: QueryAllStakeResponseAmino;
}
/**
 * QueryGetChallengeRequest defines the QueryGetChallengeRequest message.
 * @name QueryGetChallengeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetChallengeRequest
 */
export interface QueryGetChallengeRequest {
  id: bigint;
}
export interface QueryGetChallengeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetChallengeRequest";
  value: Uint8Array;
}
/**
 * QueryGetChallengeRequest defines the QueryGetChallengeRequest message.
 * @name QueryGetChallengeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetChallengeRequest
 */
export interface QueryGetChallengeRequestAmino {
  id?: string;
}
export interface QueryGetChallengeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetChallengeRequest";
  value: QueryGetChallengeRequestAmino;
}
/**
 * QueryGetChallengeResponse defines the QueryGetChallengeResponse message.
 * @name QueryGetChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetChallengeResponse
 */
export interface QueryGetChallengeResponse {
  challenge: Challenge;
}
export interface QueryGetChallengeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetChallengeResponse";
  value: Uint8Array;
}
/**
 * QueryGetChallengeResponse defines the QueryGetChallengeResponse message.
 * @name QueryGetChallengeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetChallengeResponse
 */
export interface QueryGetChallengeResponseAmino {
  challenge?: ChallengeAmino;
}
export interface QueryGetChallengeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetChallengeResponse";
  value: QueryGetChallengeResponseAmino;
}
/**
 * QueryAllChallengeRequest defines the QueryAllChallengeRequest message.
 * @name QueryAllChallengeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllChallengeRequest
 */
export interface QueryAllChallengeRequest {
  pagination?: PageRequest;
}
export interface QueryAllChallengeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllChallengeRequest";
  value: Uint8Array;
}
/**
 * QueryAllChallengeRequest defines the QueryAllChallengeRequest message.
 * @name QueryAllChallengeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllChallengeRequest
 */
export interface QueryAllChallengeRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllChallengeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllChallengeRequest";
  value: QueryAllChallengeRequestAmino;
}
/**
 * QueryAllChallengeResponse defines the QueryAllChallengeResponse message.
 * @name QueryAllChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllChallengeResponse
 */
export interface QueryAllChallengeResponse {
  challenge: Challenge[];
  pagination?: PageResponse;
}
export interface QueryAllChallengeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllChallengeResponse";
  value: Uint8Array;
}
/**
 * QueryAllChallengeResponse defines the QueryAllChallengeResponse message.
 * @name QueryAllChallengeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllChallengeResponse
 */
export interface QueryAllChallengeResponseAmino {
  challenge?: ChallengeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllChallengeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllChallengeResponse";
  value: QueryAllChallengeResponseAmino;
}
/**
 * QueryGetJuryReviewRequest defines the QueryGetJuryReviewRequest message.
 * @name QueryGetJuryReviewRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetJuryReviewRequest
 */
export interface QueryGetJuryReviewRequest {
  id: bigint;
}
export interface QueryGetJuryReviewRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetJuryReviewRequest";
  value: Uint8Array;
}
/**
 * QueryGetJuryReviewRequest defines the QueryGetJuryReviewRequest message.
 * @name QueryGetJuryReviewRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetJuryReviewRequest
 */
export interface QueryGetJuryReviewRequestAmino {
  id?: string;
}
export interface QueryGetJuryReviewRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetJuryReviewRequest";
  value: QueryGetJuryReviewRequestAmino;
}
/**
 * QueryGetJuryReviewResponse defines the QueryGetJuryReviewResponse message.
 * @name QueryGetJuryReviewResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetJuryReviewResponse
 */
export interface QueryGetJuryReviewResponse {
  juryReview: JuryReview;
}
export interface QueryGetJuryReviewResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetJuryReviewResponse";
  value: Uint8Array;
}
/**
 * QueryGetJuryReviewResponse defines the QueryGetJuryReviewResponse message.
 * @name QueryGetJuryReviewResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetJuryReviewResponse
 */
export interface QueryGetJuryReviewResponseAmino {
  jury_review?: JuryReviewAmino;
}
export interface QueryGetJuryReviewResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetJuryReviewResponse";
  value: QueryGetJuryReviewResponseAmino;
}
/**
 * QueryAllJuryReviewRequest defines the QueryAllJuryReviewRequest message.
 * @name QueryAllJuryReviewRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllJuryReviewRequest
 */
export interface QueryAllJuryReviewRequest {
  pagination?: PageRequest;
}
export interface QueryAllJuryReviewRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllJuryReviewRequest";
  value: Uint8Array;
}
/**
 * QueryAllJuryReviewRequest defines the QueryAllJuryReviewRequest message.
 * @name QueryAllJuryReviewRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllJuryReviewRequest
 */
export interface QueryAllJuryReviewRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllJuryReviewRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllJuryReviewRequest";
  value: QueryAllJuryReviewRequestAmino;
}
/**
 * QueryAllJuryReviewResponse defines the QueryAllJuryReviewResponse message.
 * @name QueryAllJuryReviewResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllJuryReviewResponse
 */
export interface QueryAllJuryReviewResponse {
  juryReview: JuryReview[];
  pagination?: PageResponse;
}
export interface QueryAllJuryReviewResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllJuryReviewResponse";
  value: Uint8Array;
}
/**
 * QueryAllJuryReviewResponse defines the QueryAllJuryReviewResponse message.
 * @name QueryAllJuryReviewResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllJuryReviewResponse
 */
export interface QueryAllJuryReviewResponseAmino {
  jury_review?: JuryReviewAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllJuryReviewResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllJuryReviewResponse";
  value: QueryAllJuryReviewResponseAmino;
}
/**
 * QueryGetInterimRequest defines the QueryGetInterimRequest message.
 * @name QueryGetInterimRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInterimRequest
 */
export interface QueryGetInterimRequest {
  id: bigint;
}
export interface QueryGetInterimRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetInterimRequest";
  value: Uint8Array;
}
/**
 * QueryGetInterimRequest defines the QueryGetInterimRequest message.
 * @name QueryGetInterimRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInterimRequest
 */
export interface QueryGetInterimRequestAmino {
  id?: string;
}
export interface QueryGetInterimRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetInterimRequest";
  value: QueryGetInterimRequestAmino;
}
/**
 * QueryGetInterimResponse defines the QueryGetInterimResponse message.
 * @name QueryGetInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInterimResponse
 */
export interface QueryGetInterimResponse {
  interim: Interim;
}
export interface QueryGetInterimResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetInterimResponse";
  value: Uint8Array;
}
/**
 * QueryGetInterimResponse defines the QueryGetInterimResponse message.
 * @name QueryGetInterimResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInterimResponse
 */
export interface QueryGetInterimResponseAmino {
  interim?: InterimAmino;
}
export interface QueryGetInterimResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetInterimResponse";
  value: QueryGetInterimResponseAmino;
}
/**
 * QueryAllInterimRequest defines the QueryAllInterimRequest message.
 * @name QueryAllInterimRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInterimRequest
 */
export interface QueryAllInterimRequest {
  pagination?: PageRequest;
}
export interface QueryAllInterimRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllInterimRequest";
  value: Uint8Array;
}
/**
 * QueryAllInterimRequest defines the QueryAllInterimRequest message.
 * @name QueryAllInterimRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInterimRequest
 */
export interface QueryAllInterimRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllInterimRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllInterimRequest";
  value: QueryAllInterimRequestAmino;
}
/**
 * QueryAllInterimResponse defines the QueryAllInterimResponse message.
 * @name QueryAllInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInterimResponse
 */
export interface QueryAllInterimResponse {
  interim: Interim[];
  pagination?: PageResponse;
}
export interface QueryAllInterimResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllInterimResponse";
  value: Uint8Array;
}
/**
 * QueryAllInterimResponse defines the QueryAllInterimResponse message.
 * @name QueryAllInterimResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInterimResponse
 */
export interface QueryAllInterimResponseAmino {
  interim?: InterimAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllInterimResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllInterimResponse";
  value: QueryAllInterimResponseAmino;
}
/**
 * QueryGetInterimTemplateRequest defines the QueryGetInterimTemplateRequest message.
 * @name QueryGetInterimTemplateRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInterimTemplateRequest
 */
export interface QueryGetInterimTemplateRequest {
  templateId: string;
}
export interface QueryGetInterimTemplateRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetInterimTemplateRequest";
  value: Uint8Array;
}
/**
 * QueryGetInterimTemplateRequest defines the QueryGetInterimTemplateRequest message.
 * @name QueryGetInterimTemplateRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInterimTemplateRequest
 */
export interface QueryGetInterimTemplateRequestAmino {
  template_id?: string;
}
export interface QueryGetInterimTemplateRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetInterimTemplateRequest";
  value: QueryGetInterimTemplateRequestAmino;
}
/**
 * QueryGetInterimTemplateResponse defines the QueryGetInterimTemplateResponse message.
 * @name QueryGetInterimTemplateResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInterimTemplateResponse
 */
export interface QueryGetInterimTemplateResponse {
  interimTemplate: InterimTemplate;
}
export interface QueryGetInterimTemplateResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetInterimTemplateResponse";
  value: Uint8Array;
}
/**
 * QueryGetInterimTemplateResponse defines the QueryGetInterimTemplateResponse message.
 * @name QueryGetInterimTemplateResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInterimTemplateResponse
 */
export interface QueryGetInterimTemplateResponseAmino {
  interim_template?: InterimTemplateAmino;
}
export interface QueryGetInterimTemplateResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetInterimTemplateResponse";
  value: QueryGetInterimTemplateResponseAmino;
}
/**
 * QueryAllInterimTemplateRequest defines the QueryAllInterimTemplateRequest message.
 * @name QueryAllInterimTemplateRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInterimTemplateRequest
 */
export interface QueryAllInterimTemplateRequest {
  pagination?: PageRequest;
}
export interface QueryAllInterimTemplateRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllInterimTemplateRequest";
  value: Uint8Array;
}
/**
 * QueryAllInterimTemplateRequest defines the QueryAllInterimTemplateRequest message.
 * @name QueryAllInterimTemplateRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInterimTemplateRequest
 */
export interface QueryAllInterimTemplateRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllInterimTemplateRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllInterimTemplateRequest";
  value: QueryAllInterimTemplateRequestAmino;
}
/**
 * QueryAllInterimTemplateResponse defines the QueryAllInterimTemplateResponse message.
 * @name QueryAllInterimTemplateResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInterimTemplateResponse
 */
export interface QueryAllInterimTemplateResponse {
  interimTemplate: InterimTemplate[];
  pagination?: PageResponse;
}
export interface QueryAllInterimTemplateResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllInterimTemplateResponse";
  value: Uint8Array;
}
/**
 * QueryAllInterimTemplateResponse defines the QueryAllInterimTemplateResponse message.
 * @name QueryAllInterimTemplateResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInterimTemplateResponse
 */
export interface QueryAllInterimTemplateResponseAmino {
  interim_template?: InterimTemplateAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllInterimTemplateResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllInterimTemplateResponse";
  value: QueryAllInterimTemplateResponseAmino;
}
/**
 * QueryMembersByTrustLevelRequest defines the QueryMembersByTrustLevelRequest message.
 * @name QueryMembersByTrustLevelRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMembersByTrustLevelRequest
 */
export interface QueryMembersByTrustLevelRequest {
  trustLevel: bigint;
  pagination?: PageRequest;
}
export interface QueryMembersByTrustLevelRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryMembersByTrustLevelRequest";
  value: Uint8Array;
}
/**
 * QueryMembersByTrustLevelRequest defines the QueryMembersByTrustLevelRequest message.
 * @name QueryMembersByTrustLevelRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMembersByTrustLevelRequest
 */
export interface QueryMembersByTrustLevelRequestAmino {
  trust_level?: string;
  pagination?: PageRequestAmino;
}
export interface QueryMembersByTrustLevelRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryMembersByTrustLevelRequest";
  value: QueryMembersByTrustLevelRequestAmino;
}
/**
 * QueryMembersByTrustLevelResponse defines the QueryMembersByTrustLevelResponse message.
 * @name QueryMembersByTrustLevelResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMembersByTrustLevelResponse
 */
export interface QueryMembersByTrustLevelResponse {
  address: string;
  dreamBalance: string;
  pagination?: PageResponse;
}
export interface QueryMembersByTrustLevelResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryMembersByTrustLevelResponse";
  value: Uint8Array;
}
/**
 * QueryMembersByTrustLevelResponse defines the QueryMembersByTrustLevelResponse message.
 * @name QueryMembersByTrustLevelResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMembersByTrustLevelResponse
 */
export interface QueryMembersByTrustLevelResponseAmino {
  address?: string;
  dream_balance?: string;
  pagination?: PageResponseAmino;
}
export interface QueryMembersByTrustLevelResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryMembersByTrustLevelResponse";
  value: QueryMembersByTrustLevelResponseAmino;
}
/**
 * QueryInvitationsByInviterRequest defines the QueryInvitationsByInviterRequest message.
 * @name QueryInvitationsByInviterRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInvitationsByInviterRequest
 */
export interface QueryInvitationsByInviterRequest {
  inviter: string;
  pagination?: PageRequest;
}
export interface QueryInvitationsByInviterRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInvitationsByInviterRequest";
  value: Uint8Array;
}
/**
 * QueryInvitationsByInviterRequest defines the QueryInvitationsByInviterRequest message.
 * @name QueryInvitationsByInviterRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInvitationsByInviterRequest
 */
export interface QueryInvitationsByInviterRequestAmino {
  inviter?: string;
  pagination?: PageRequestAmino;
}
export interface QueryInvitationsByInviterRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryInvitationsByInviterRequest";
  value: QueryInvitationsByInviterRequestAmino;
}
/**
 * QueryInvitationsByInviterResponse defines the QueryInvitationsByInviterResponse message.
 * @name QueryInvitationsByInviterResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInvitationsByInviterResponse
 */
export interface QueryInvitationsByInviterResponse {
  invitationId: bigint;
  inviteeAddress: string;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryInvitationsByInviterResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInvitationsByInviterResponse";
  value: Uint8Array;
}
/**
 * QueryInvitationsByInviterResponse defines the QueryInvitationsByInviterResponse message.
 * @name QueryInvitationsByInviterResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInvitationsByInviterResponse
 */
export interface QueryInvitationsByInviterResponseAmino {
  invitation_id?: string;
  invitee_address?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryInvitationsByInviterResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryInvitationsByInviterResponse";
  value: QueryInvitationsByInviterResponseAmino;
}
/**
 * QueryInterimsByAssigneeRequest defines the QueryInterimsByAssigneeRequest message.
 * @name QueryInterimsByAssigneeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByAssigneeRequest
 */
export interface QueryInterimsByAssigneeRequest {
  assignee: string;
  pagination?: PageRequest;
}
export interface QueryInterimsByAssigneeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInterimsByAssigneeRequest";
  value: Uint8Array;
}
/**
 * QueryInterimsByAssigneeRequest defines the QueryInterimsByAssigneeRequest message.
 * @name QueryInterimsByAssigneeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByAssigneeRequest
 */
export interface QueryInterimsByAssigneeRequestAmino {
  assignee?: string;
  pagination?: PageRequestAmino;
}
export interface QueryInterimsByAssigneeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryInterimsByAssigneeRequest";
  value: QueryInterimsByAssigneeRequestAmino;
}
/**
 * QueryInterimsByAssigneeResponse defines the QueryInterimsByAssigneeResponse message.
 * @name QueryInterimsByAssigneeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByAssigneeResponse
 */
export interface QueryInterimsByAssigneeResponse {
  interimId: bigint;
  interimType: bigint;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryInterimsByAssigneeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInterimsByAssigneeResponse";
  value: Uint8Array;
}
/**
 * QueryInterimsByAssigneeResponse defines the QueryInterimsByAssigneeResponse message.
 * @name QueryInterimsByAssigneeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByAssigneeResponse
 */
export interface QueryInterimsByAssigneeResponseAmino {
  interim_id?: string;
  interim_type?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryInterimsByAssigneeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryInterimsByAssigneeResponse";
  value: QueryInterimsByAssigneeResponseAmino;
}
/**
 * QueryInterimsByTypeRequest defines the QueryInterimsByTypeRequest message.
 * @name QueryInterimsByTypeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByTypeRequest
 */
export interface QueryInterimsByTypeRequest {
  interimType: bigint;
  pagination?: PageRequest;
}
export interface QueryInterimsByTypeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInterimsByTypeRequest";
  value: Uint8Array;
}
/**
 * QueryInterimsByTypeRequest defines the QueryInterimsByTypeRequest message.
 * @name QueryInterimsByTypeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByTypeRequest
 */
export interface QueryInterimsByTypeRequestAmino {
  interim_type?: string;
  pagination?: PageRequestAmino;
}
export interface QueryInterimsByTypeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryInterimsByTypeRequest";
  value: QueryInterimsByTypeRequestAmino;
}
/**
 * QueryInterimsByTypeResponse defines the QueryInterimsByTypeResponse message.
 * @name QueryInterimsByTypeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByTypeResponse
 */
export interface QueryInterimsByTypeResponse {
  interimId: bigint;
  status: bigint;
  deadline: bigint;
  pagination?: PageResponse;
}
export interface QueryInterimsByTypeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInterimsByTypeResponse";
  value: Uint8Array;
}
/**
 * QueryInterimsByTypeResponse defines the QueryInterimsByTypeResponse message.
 * @name QueryInterimsByTypeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByTypeResponse
 */
export interface QueryInterimsByTypeResponseAmino {
  interim_id?: string;
  status?: string;
  deadline?: string;
  pagination?: PageResponseAmino;
}
export interface QueryInterimsByTypeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryInterimsByTypeResponse";
  value: QueryInterimsByTypeResponseAmino;
}
/**
 * QueryInterimsByReferenceRequest defines the QueryInterimsByReferenceRequest message.
 * @name QueryInterimsByReferenceRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByReferenceRequest
 */
export interface QueryInterimsByReferenceRequest {
  referenceType: string;
  referenceId: bigint;
  pagination?: PageRequest;
}
export interface QueryInterimsByReferenceRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInterimsByReferenceRequest";
  value: Uint8Array;
}
/**
 * QueryInterimsByReferenceRequest defines the QueryInterimsByReferenceRequest message.
 * @name QueryInterimsByReferenceRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByReferenceRequest
 */
export interface QueryInterimsByReferenceRequestAmino {
  reference_type?: string;
  reference_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryInterimsByReferenceRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryInterimsByReferenceRequest";
  value: QueryInterimsByReferenceRequestAmino;
}
/**
 * QueryInterimsByReferenceResponse defines the QueryInterimsByReferenceResponse message.
 * @name QueryInterimsByReferenceResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByReferenceResponse
 */
export interface QueryInterimsByReferenceResponse {
  interimId: bigint;
  interimType: bigint;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryInterimsByReferenceResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInterimsByReferenceResponse";
  value: Uint8Array;
}
/**
 * QueryInterimsByReferenceResponse defines the QueryInterimsByReferenceResponse message.
 * @name QueryInterimsByReferenceResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByReferenceResponse
 */
export interface QueryInterimsByReferenceResponseAmino {
  interim_id?: string;
  interim_type?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryInterimsByReferenceResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryInterimsByReferenceResponse";
  value: QueryInterimsByReferenceResponseAmino;
}
/**
 * QueryProjectsByCouncilRequest defines the QueryProjectsByCouncilRequest message.
 * @name QueryProjectsByCouncilRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCouncilRequest
 */
export interface QueryProjectsByCouncilRequest {
  council: string;
  pagination?: PageRequest;
}
export interface QueryProjectsByCouncilRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryProjectsByCouncilRequest";
  value: Uint8Array;
}
/**
 * QueryProjectsByCouncilRequest defines the QueryProjectsByCouncilRequest message.
 * @name QueryProjectsByCouncilRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCouncilRequest
 */
export interface QueryProjectsByCouncilRequestAmino {
  council?: string;
  pagination?: PageRequestAmino;
}
export interface QueryProjectsByCouncilRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryProjectsByCouncilRequest";
  value: QueryProjectsByCouncilRequestAmino;
}
/**
 * QueryProjectsByCouncilResponse defines the QueryProjectsByCouncilResponse message.
 * @name QueryProjectsByCouncilResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCouncilResponse
 */
export interface QueryProjectsByCouncilResponse {
  projectId: bigint;
  name: string;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryProjectsByCouncilResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryProjectsByCouncilResponse";
  value: Uint8Array;
}
/**
 * QueryProjectsByCouncilResponse defines the QueryProjectsByCouncilResponse message.
 * @name QueryProjectsByCouncilResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCouncilResponse
 */
export interface QueryProjectsByCouncilResponseAmino {
  project_id?: string;
  name?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryProjectsByCouncilResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryProjectsByCouncilResponse";
  value: QueryProjectsByCouncilResponseAmino;
}
/**
 * QueryInitiativesByProjectRequest defines the QueryInitiativesByProjectRequest message.
 * @name QueryInitiativesByProjectRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByProjectRequest
 */
export interface QueryInitiativesByProjectRequest {
  projectId: bigint;
  pagination?: PageRequest;
}
export interface QueryInitiativesByProjectRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByProjectRequest";
  value: Uint8Array;
}
/**
 * QueryInitiativesByProjectRequest defines the QueryInitiativesByProjectRequest message.
 * @name QueryInitiativesByProjectRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByProjectRequest
 */
export interface QueryInitiativesByProjectRequestAmino {
  project_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryInitiativesByProjectRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryInitiativesByProjectRequest";
  value: QueryInitiativesByProjectRequestAmino;
}
/**
 * QueryInitiativesByProjectResponse defines the QueryInitiativesByProjectResponse message.
 * @name QueryInitiativesByProjectResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByProjectResponse
 */
export interface QueryInitiativesByProjectResponse {
  initiatives: Initiative[];
  pagination?: PageResponse;
}
export interface QueryInitiativesByProjectResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByProjectResponse";
  value: Uint8Array;
}
/**
 * QueryInitiativesByProjectResponse defines the QueryInitiativesByProjectResponse message.
 * @name QueryInitiativesByProjectResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByProjectResponse
 */
export interface QueryInitiativesByProjectResponseAmino {
  initiatives?: InitiativeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryInitiativesByProjectResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryInitiativesByProjectResponse";
  value: QueryInitiativesByProjectResponseAmino;
}
/**
 * QueryInitiativesByAssigneeRequest defines the QueryInitiativesByAssigneeRequest message.
 * @name QueryInitiativesByAssigneeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByAssigneeRequest
 */
export interface QueryInitiativesByAssigneeRequest {
  assignee: string;
  pagination?: PageRequest;
}
export interface QueryInitiativesByAssigneeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByAssigneeRequest";
  value: Uint8Array;
}
/**
 * QueryInitiativesByAssigneeRequest defines the QueryInitiativesByAssigneeRequest message.
 * @name QueryInitiativesByAssigneeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByAssigneeRequest
 */
export interface QueryInitiativesByAssigneeRequestAmino {
  assignee?: string;
  pagination?: PageRequestAmino;
}
export interface QueryInitiativesByAssigneeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryInitiativesByAssigneeRequest";
  value: QueryInitiativesByAssigneeRequestAmino;
}
/**
 * QueryInitiativesByAssigneeResponse defines the QueryInitiativesByAssigneeResponse message.
 * @name QueryInitiativesByAssigneeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByAssigneeResponse
 */
export interface QueryInitiativesByAssigneeResponse {
  initiativeId: bigint;
  title: string;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryInitiativesByAssigneeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByAssigneeResponse";
  value: Uint8Array;
}
/**
 * QueryInitiativesByAssigneeResponse defines the QueryInitiativesByAssigneeResponse message.
 * @name QueryInitiativesByAssigneeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByAssigneeResponse
 */
export interface QueryInitiativesByAssigneeResponseAmino {
  initiative_id?: string;
  title?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryInitiativesByAssigneeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryInitiativesByAssigneeResponse";
  value: QueryInitiativesByAssigneeResponseAmino;
}
/**
 * QueryAvailableInitiativesRequest defines the QueryAvailableInitiativesRequest message.
 * @name QueryAvailableInitiativesRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAvailableInitiativesRequest
 */
export interface QueryAvailableInitiativesRequest {
  pagination?: PageRequest;
}
export interface QueryAvailableInitiativesRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAvailableInitiativesRequest";
  value: Uint8Array;
}
/**
 * QueryAvailableInitiativesRequest defines the QueryAvailableInitiativesRequest message.
 * @name QueryAvailableInitiativesRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAvailableInitiativesRequest
 */
export interface QueryAvailableInitiativesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAvailableInitiativesRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAvailableInitiativesRequest";
  value: QueryAvailableInitiativesRequestAmino;
}
/**
 * QueryAvailableInitiativesResponse defines the QueryAvailableInitiativesResponse message.
 * @name QueryAvailableInitiativesResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAvailableInitiativesResponse
 */
export interface QueryAvailableInitiativesResponse {
  initiativeId: bigint;
  title: string;
  tier: bigint;
  budget: string;
  pagination?: PageResponse;
}
export interface QueryAvailableInitiativesResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAvailableInitiativesResponse";
  value: Uint8Array;
}
/**
 * QueryAvailableInitiativesResponse defines the QueryAvailableInitiativesResponse message.
 * @name QueryAvailableInitiativesResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAvailableInitiativesResponse
 */
export interface QueryAvailableInitiativesResponseAmino {
  initiative_id?: string;
  title?: string;
  tier?: string;
  budget?: string;
  pagination?: PageResponseAmino;
}
export interface QueryAvailableInitiativesResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAvailableInitiativesResponse";
  value: QueryAvailableInitiativesResponseAmino;
}
/**
 * QueryStakesByStakerRequest defines the QueryStakesByStakerRequest message.
 * @name QueryStakesByStakerRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryStakesByStakerRequest
 */
export interface QueryStakesByStakerRequest {
  staker: string;
  pagination?: PageRequest;
}
export interface QueryStakesByStakerRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryStakesByStakerRequest";
  value: Uint8Array;
}
/**
 * QueryStakesByStakerRequest defines the QueryStakesByStakerRequest message.
 * @name QueryStakesByStakerRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryStakesByStakerRequest
 */
export interface QueryStakesByStakerRequestAmino {
  staker?: string;
  pagination?: PageRequestAmino;
}
export interface QueryStakesByStakerRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryStakesByStakerRequest";
  value: QueryStakesByStakerRequestAmino;
}
/**
 * QueryStakesByStakerResponse defines the QueryStakesByStakerResponse message.
 * @name QueryStakesByStakerResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryStakesByStakerResponse
 */
export interface QueryStakesByStakerResponse {
  stakeId: bigint;
  targetType: bigint;
  amount: string;
  pagination?: PageResponse;
}
export interface QueryStakesByStakerResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryStakesByStakerResponse";
  value: Uint8Array;
}
/**
 * QueryStakesByStakerResponse defines the QueryStakesByStakerResponse message.
 * @name QueryStakesByStakerResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryStakesByStakerResponse
 */
export interface QueryStakesByStakerResponseAmino {
  stake_id?: string;
  target_type?: string;
  amount?: string;
  pagination?: PageResponseAmino;
}
export interface QueryStakesByStakerResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryStakesByStakerResponse";
  value: QueryStakesByStakerResponseAmino;
}
/**
 * QueryStakesByTargetRequest defines the QueryStakesByTargetRequest message.
 * @name QueryStakesByTargetRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryStakesByTargetRequest
 */
export interface QueryStakesByTargetRequest {
  targetType: bigint;
  targetId: bigint;
  pagination?: PageRequest;
}
export interface QueryStakesByTargetRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryStakesByTargetRequest";
  value: Uint8Array;
}
/**
 * QueryStakesByTargetRequest defines the QueryStakesByTargetRequest message.
 * @name QueryStakesByTargetRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryStakesByTargetRequest
 */
export interface QueryStakesByTargetRequestAmino {
  target_type?: string;
  target_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryStakesByTargetRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryStakesByTargetRequest";
  value: QueryStakesByTargetRequestAmino;
}
/**
 * QueryStakesByTargetResponse defines the QueryStakesByTargetResponse message.
 * @name QueryStakesByTargetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryStakesByTargetResponse
 */
export interface QueryStakesByTargetResponse {
  stakes: Stake[];
  pagination?: PageResponse;
}
export interface QueryStakesByTargetResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryStakesByTargetResponse";
  value: Uint8Array;
}
/**
 * QueryStakesByTargetResponse defines the QueryStakesByTargetResponse message.
 * @name QueryStakesByTargetResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryStakesByTargetResponse
 */
export interface QueryStakesByTargetResponseAmino {
  stakes?: StakeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryStakesByTargetResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryStakesByTargetResponse";
  value: QueryStakesByTargetResponseAmino;
}
/**
 * QueryInitiativeConvictionRequest defines the QueryInitiativeConvictionRequest message.
 * @name QueryInitiativeConvictionRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativeConvictionRequest
 */
export interface QueryInitiativeConvictionRequest {
  initiativeId: bigint;
}
export interface QueryInitiativeConvictionRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativeConvictionRequest";
  value: Uint8Array;
}
/**
 * QueryInitiativeConvictionRequest defines the QueryInitiativeConvictionRequest message.
 * @name QueryInitiativeConvictionRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativeConvictionRequest
 */
export interface QueryInitiativeConvictionRequestAmino {
  initiative_id?: string;
}
export interface QueryInitiativeConvictionRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryInitiativeConvictionRequest";
  value: QueryInitiativeConvictionRequestAmino;
}
/**
 * QueryInitiativeConvictionResponse defines the QueryInitiativeConvictionResponse message.
 * @name QueryInitiativeConvictionResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativeConvictionResponse
 */
export interface QueryInitiativeConvictionResponse {
  totalConviction: string;
  externalConviction: string;
  threshold: string;
  /**
   * Conviction propagated from linked content
   */
  propagatedConviction: string;
}
export interface QueryInitiativeConvictionResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativeConvictionResponse";
  value: Uint8Array;
}
/**
 * QueryInitiativeConvictionResponse defines the QueryInitiativeConvictionResponse message.
 * @name QueryInitiativeConvictionResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativeConvictionResponse
 */
export interface QueryInitiativeConvictionResponseAmino {
  total_conviction?: string;
  external_conviction?: string;
  threshold?: string;
  /**
   * Conviction propagated from linked content
   */
  propagated_conviction?: string;
}
export interface QueryInitiativeConvictionResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryInitiativeConvictionResponse";
  value: QueryInitiativeConvictionResponseAmino;
}
/**
 * QueryChallengesByInitiativeRequest defines the QueryChallengesByInitiativeRequest message.
 * @name QueryChallengesByInitiativeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryChallengesByInitiativeRequest
 */
export interface QueryChallengesByInitiativeRequest {
  initiativeId: bigint;
  pagination?: PageRequest;
}
export interface QueryChallengesByInitiativeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryChallengesByInitiativeRequest";
  value: Uint8Array;
}
/**
 * QueryChallengesByInitiativeRequest defines the QueryChallengesByInitiativeRequest message.
 * @name QueryChallengesByInitiativeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryChallengesByInitiativeRequest
 */
export interface QueryChallengesByInitiativeRequestAmino {
  initiative_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryChallengesByInitiativeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryChallengesByInitiativeRequest";
  value: QueryChallengesByInitiativeRequestAmino;
}
/**
 * QueryChallengesByInitiativeResponse defines the QueryChallengesByInitiativeResponse message.
 * @name QueryChallengesByInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryChallengesByInitiativeResponse
 */
export interface QueryChallengesByInitiativeResponse {
  challengeId: bigint;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryChallengesByInitiativeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryChallengesByInitiativeResponse";
  value: Uint8Array;
}
/**
 * QueryChallengesByInitiativeResponse defines the QueryChallengesByInitiativeResponse message.
 * @name QueryChallengesByInitiativeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryChallengesByInitiativeResponse
 */
export interface QueryChallengesByInitiativeResponseAmino {
  challenge_id?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryChallengesByInitiativeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryChallengesByInitiativeResponse";
  value: QueryChallengesByInitiativeResponseAmino;
}
/**
 * QueryReputationRequest defines the QueryReputationRequest message.
 * @name QueryReputationRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryReputationRequest
 */
export interface QueryReputationRequest {
  address: string;
  tag: string;
}
export interface QueryReputationRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryReputationRequest";
  value: Uint8Array;
}
/**
 * QueryReputationRequest defines the QueryReputationRequest message.
 * @name QueryReputationRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryReputationRequest
 */
export interface QueryReputationRequestAmino {
  address?: string;
  tag?: string;
}
export interface QueryReputationRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryReputationRequest";
  value: QueryReputationRequestAmino;
}
/**
 * QueryReputationResponse defines the QueryReputationResponse message.
 * @name QueryReputationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryReputationResponse
 */
export interface QueryReputationResponse {
  score: string;
  lifetime: string;
}
export interface QueryReputationResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryReputationResponse";
  value: Uint8Array;
}
/**
 * QueryReputationResponse defines the QueryReputationResponse message.
 * @name QueryReputationResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryReputationResponse
 */
export interface QueryReputationResponseAmino {
  score?: string;
  lifetime?: string;
}
export interface QueryReputationResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryReputationResponse";
  value: QueryReputationResponseAmino;
}
/**
 * QueryPendingStakeRewardsRequest defines the request for pending stake rewards
 * @name QueryPendingStakeRewardsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryPendingStakeRewardsRequest
 */
export interface QueryPendingStakeRewardsRequest {
  stakeId: bigint;
}
export interface QueryPendingStakeRewardsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryPendingStakeRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryPendingStakeRewardsRequest defines the request for pending stake rewards
 * @name QueryPendingStakeRewardsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryPendingStakeRewardsRequest
 */
export interface QueryPendingStakeRewardsRequestAmino {
  stake_id?: string;
}
export interface QueryPendingStakeRewardsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryPendingStakeRewardsRequest";
  value: QueryPendingStakeRewardsRequestAmino;
}
/**
 * QueryPendingStakeRewardsResponse defines the response for pending stake rewards
 * @name QueryPendingStakeRewardsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryPendingStakeRewardsResponse
 */
export interface QueryPendingStakeRewardsResponse {
  pendingRewards: string;
  stakeAmount: string;
  targetType: StakeTargetType;
}
export interface QueryPendingStakeRewardsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryPendingStakeRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryPendingStakeRewardsResponse defines the response for pending stake rewards
 * @name QueryPendingStakeRewardsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryPendingStakeRewardsResponse
 */
export interface QueryPendingStakeRewardsResponseAmino {
  pending_rewards?: string;
  stake_amount?: string;
  target_type?: StakeTargetType;
}
export interface QueryPendingStakeRewardsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryPendingStakeRewardsResponse";
  value: QueryPendingStakeRewardsResponseAmino;
}
/**
 * QueryGetMemberStakePoolRequest defines the request for member stake pool
 * @name QueryGetMemberStakePoolRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberStakePoolRequest
 */
export interface QueryGetMemberStakePoolRequest {
  member: string;
}
export interface QueryGetMemberStakePoolRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberStakePoolRequest";
  value: Uint8Array;
}
/**
 * QueryGetMemberStakePoolRequest defines the request for member stake pool
 * @name QueryGetMemberStakePoolRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberStakePoolRequest
 */
export interface QueryGetMemberStakePoolRequestAmino {
  member?: string;
}
export interface QueryGetMemberStakePoolRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetMemberStakePoolRequest";
  value: QueryGetMemberStakePoolRequestAmino;
}
/**
 * QueryGetMemberStakePoolResponse defines the response for member stake pool
 * @name QueryGetMemberStakePoolResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberStakePoolResponse
 */
export interface QueryGetMemberStakePoolResponse {
  pool: MemberStakePool;
}
export interface QueryGetMemberStakePoolResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberStakePoolResponse";
  value: Uint8Array;
}
/**
 * QueryGetMemberStakePoolResponse defines the response for member stake pool
 * @name QueryGetMemberStakePoolResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberStakePoolResponse
 */
export interface QueryGetMemberStakePoolResponseAmino {
  pool?: MemberStakePoolAmino;
}
export interface QueryGetMemberStakePoolResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetMemberStakePoolResponse";
  value: QueryGetMemberStakePoolResponseAmino;
}
/**
 * QueryGetTagStakePoolRequest defines the request for tag stake pool
 * @name QueryGetTagStakePoolRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagStakePoolRequest
 */
export interface QueryGetTagStakePoolRequest {
  tag: string;
}
export interface QueryGetTagStakePoolRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagStakePoolRequest";
  value: Uint8Array;
}
/**
 * QueryGetTagStakePoolRequest defines the request for tag stake pool
 * @name QueryGetTagStakePoolRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagStakePoolRequest
 */
export interface QueryGetTagStakePoolRequestAmino {
  tag?: string;
}
export interface QueryGetTagStakePoolRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetTagStakePoolRequest";
  value: QueryGetTagStakePoolRequestAmino;
}
/**
 * QueryGetTagStakePoolResponse defines the response for tag stake pool
 * @name QueryGetTagStakePoolResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagStakePoolResponse
 */
export interface QueryGetTagStakePoolResponse {
  pool: TagStakePool;
}
export interface QueryGetTagStakePoolResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagStakePoolResponse";
  value: Uint8Array;
}
/**
 * QueryGetTagStakePoolResponse defines the response for tag stake pool
 * @name QueryGetTagStakePoolResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagStakePoolResponse
 */
export interface QueryGetTagStakePoolResponseAmino {
  pool?: TagStakePoolAmino;
}
export interface QueryGetTagStakePoolResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetTagStakePoolResponse";
  value: QueryGetTagStakePoolResponseAmino;
}
/**
 * QueryGetProjectStakeInfoRequest defines the request for project stake info
 * @name QueryGetProjectStakeInfoRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetProjectStakeInfoRequest
 */
export interface QueryGetProjectStakeInfoRequest {
  projectId: bigint;
}
export interface QueryGetProjectStakeInfoRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetProjectStakeInfoRequest";
  value: Uint8Array;
}
/**
 * QueryGetProjectStakeInfoRequest defines the request for project stake info
 * @name QueryGetProjectStakeInfoRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetProjectStakeInfoRequest
 */
export interface QueryGetProjectStakeInfoRequestAmino {
  project_id?: string;
}
export interface QueryGetProjectStakeInfoRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetProjectStakeInfoRequest";
  value: QueryGetProjectStakeInfoRequestAmino;
}
/**
 * QueryGetProjectStakeInfoResponse defines the response for project stake info
 * @name QueryGetProjectStakeInfoResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetProjectStakeInfoResponse
 */
export interface QueryGetProjectStakeInfoResponse {
  info: ProjectStakeInfo;
}
export interface QueryGetProjectStakeInfoResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetProjectStakeInfoResponse";
  value: Uint8Array;
}
/**
 * QueryGetProjectStakeInfoResponse defines the response for project stake info
 * @name QueryGetProjectStakeInfoResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetProjectStakeInfoResponse
 */
export interface QueryGetProjectStakeInfoResponseAmino {
  info?: ProjectStakeInfoAmino;
}
export interface QueryGetProjectStakeInfoResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetProjectStakeInfoResponse";
  value: QueryGetProjectStakeInfoResponseAmino;
}
/**
 * QueryContentConvictionRequest defines the request for content conviction score
 * @name QueryContentConvictionRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentConvictionRequest
 */
export interface QueryContentConvictionRequest {
  /**
   * StakeTargetType (4=BLOG_CONTENT, 5=FORUM_CONTENT, 6=COLLECTION_CONTENT)
   */
  targetType: bigint;
  /**
   * Content ID (post ID, collection ID, etc.)
   */
  targetId: bigint;
}
export interface QueryContentConvictionRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryContentConvictionRequest";
  value: Uint8Array;
}
/**
 * QueryContentConvictionRequest defines the request for content conviction score
 * @name QueryContentConvictionRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentConvictionRequest
 */
export interface QueryContentConvictionRequestAmino {
  /**
   * StakeTargetType (4=BLOG_CONTENT, 5=FORUM_CONTENT, 6=COLLECTION_CONTENT)
   */
  target_type?: string;
  /**
   * Content ID (post ID, collection ID, etc.)
   */
  target_id?: string;
}
export interface QueryContentConvictionRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryContentConvictionRequest";
  value: QueryContentConvictionRequestAmino;
}
/**
 * QueryContentConvictionResponse defines the response for content conviction score
 * @name QueryContentConvictionResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentConvictionResponse
 */
export interface QueryContentConvictionResponse {
  totalConviction: string;
  stakerCount: bigint;
  totalStaked: string;
}
export interface QueryContentConvictionResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryContentConvictionResponse";
  value: Uint8Array;
}
/**
 * QueryContentConvictionResponse defines the response for content conviction score
 * @name QueryContentConvictionResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentConvictionResponse
 */
export interface QueryContentConvictionResponseAmino {
  total_conviction?: string;
  staker_count?: string;
  total_staked?: string;
}
export interface QueryContentConvictionResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryContentConvictionResponse";
  value: QueryContentConvictionResponseAmino;
}
/**
 * QueryAuthorBondRequest defines the request for author bond info
 * @name QueryAuthorBondRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAuthorBondRequest
 */
export interface QueryAuthorBondRequest {
  /**
   * StakeTargetType (7=BLOG_AUTHOR_BOND, 8=FORUM_AUTHOR_BOND, 9=COLLECTION_AUTHOR_BOND)
   */
  targetType: bigint;
  /**
   * Content ID
   */
  targetId: bigint;
}
export interface QueryAuthorBondRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAuthorBondRequest";
  value: Uint8Array;
}
/**
 * QueryAuthorBondRequest defines the request for author bond info
 * @name QueryAuthorBondRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAuthorBondRequest
 */
export interface QueryAuthorBondRequestAmino {
  /**
   * StakeTargetType (7=BLOG_AUTHOR_BOND, 8=FORUM_AUTHOR_BOND, 9=COLLECTION_AUTHOR_BOND)
   */
  target_type?: string;
  /**
   * Content ID
   */
  target_id?: string;
}
export interface QueryAuthorBondRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAuthorBondRequest";
  value: QueryAuthorBondRequestAmino;
}
/**
 * QueryAuthorBondResponse defines the response for author bond info
 * @name QueryAuthorBondResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAuthorBondResponse
 */
export interface QueryAuthorBondResponse {
  bondAmount: string;
  author: string;
  stakeId: bigint;
}
export interface QueryAuthorBondResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAuthorBondResponse";
  value: Uint8Array;
}
/**
 * QueryAuthorBondResponse defines the response for author bond info
 * @name QueryAuthorBondResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAuthorBondResponse
 */
export interface QueryAuthorBondResponseAmino {
  bond_amount?: string;
  author?: string;
  stake_id?: string;
}
export interface QueryAuthorBondResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAuthorBondResponse";
  value: QueryAuthorBondResponseAmino;
}
/**
 * QueryGetContentChallengeRequest defines the request for a content challenge by ID
 * @name QueryGetContentChallengeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetContentChallengeRequest
 */
export interface QueryGetContentChallengeRequest {
  id: bigint;
}
export interface QueryGetContentChallengeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetContentChallengeRequest";
  value: Uint8Array;
}
/**
 * QueryGetContentChallengeRequest defines the request for a content challenge by ID
 * @name QueryGetContentChallengeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetContentChallengeRequest
 */
export interface QueryGetContentChallengeRequestAmino {
  id?: string;
}
export interface QueryGetContentChallengeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetContentChallengeRequest";
  value: QueryGetContentChallengeRequestAmino;
}
/**
 * QueryGetContentChallengeResponse defines the response for a content challenge
 * @name QueryGetContentChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetContentChallengeResponse
 */
export interface QueryGetContentChallengeResponse {
  contentChallenge: ContentChallenge;
}
export interface QueryGetContentChallengeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetContentChallengeResponse";
  value: Uint8Array;
}
/**
 * QueryGetContentChallengeResponse defines the response for a content challenge
 * @name QueryGetContentChallengeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetContentChallengeResponse
 */
export interface QueryGetContentChallengeResponseAmino {
  content_challenge?: ContentChallengeAmino;
}
export interface QueryGetContentChallengeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetContentChallengeResponse";
  value: QueryGetContentChallengeResponseAmino;
}
/**
 * QueryAllContentChallengeRequest defines the request for all content challenges
 * @name QueryAllContentChallengeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllContentChallengeRequest
 */
export interface QueryAllContentChallengeRequest {
  pagination?: PageRequest;
}
export interface QueryAllContentChallengeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllContentChallengeRequest";
  value: Uint8Array;
}
/**
 * QueryAllContentChallengeRequest defines the request for all content challenges
 * @name QueryAllContentChallengeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllContentChallengeRequest
 */
export interface QueryAllContentChallengeRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllContentChallengeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllContentChallengeRequest";
  value: QueryAllContentChallengeRequestAmino;
}
/**
 * QueryAllContentChallengeResponse defines the response for all content challenges
 * @name QueryAllContentChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllContentChallengeResponse
 */
export interface QueryAllContentChallengeResponse {
  contentChallenge: ContentChallenge[];
  pagination?: PageResponse;
}
export interface QueryAllContentChallengeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllContentChallengeResponse";
  value: Uint8Array;
}
/**
 * QueryAllContentChallengeResponse defines the response for all content challenges
 * @name QueryAllContentChallengeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllContentChallengeResponse
 */
export interface QueryAllContentChallengeResponseAmino {
  content_challenge?: ContentChallengeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllContentChallengeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllContentChallengeResponse";
  value: QueryAllContentChallengeResponseAmino;
}
/**
 * QueryContentChallengesByTargetRequest defines the request for content challenges by target
 * @name QueryContentChallengesByTargetRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentChallengesByTargetRequest
 */
export interface QueryContentChallengesByTargetRequest {
  targetType: bigint;
  targetId: bigint;
}
export interface QueryContentChallengesByTargetRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryContentChallengesByTargetRequest";
  value: Uint8Array;
}
/**
 * QueryContentChallengesByTargetRequest defines the request for content challenges by target
 * @name QueryContentChallengesByTargetRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentChallengesByTargetRequest
 */
export interface QueryContentChallengesByTargetRequestAmino {
  target_type?: string;
  target_id?: string;
}
export interface QueryContentChallengesByTargetRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryContentChallengesByTargetRequest";
  value: QueryContentChallengesByTargetRequestAmino;
}
/**
 * QueryContentChallengesByTargetResponse defines the response for content challenges by target
 * @name QueryContentChallengesByTargetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentChallengesByTargetResponse
 */
export interface QueryContentChallengesByTargetResponse {
  contentChallenge: ContentChallenge;
}
export interface QueryContentChallengesByTargetResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryContentChallengesByTargetResponse";
  value: Uint8Array;
}
/**
 * QueryContentChallengesByTargetResponse defines the response for content challenges by target
 * @name QueryContentChallengesByTargetResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentChallengesByTargetResponse
 */
export interface QueryContentChallengesByTargetResponseAmino {
  content_challenge?: ContentChallengeAmino;
}
export interface QueryContentChallengesByTargetResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryContentChallengesByTargetResponse";
  value: QueryContentChallengesByTargetResponseAmino;
}
/**
 * QueryContentByInitiativeRequest defines the request for content linked to an initiative
 * @name QueryContentByInitiativeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentByInitiativeRequest
 */
export interface QueryContentByInitiativeRequest {
  initiativeId: bigint;
}
export interface QueryContentByInitiativeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryContentByInitiativeRequest";
  value: Uint8Array;
}
/**
 * QueryContentByInitiativeRequest defines the request for content linked to an initiative
 * @name QueryContentByInitiativeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentByInitiativeRequest
 */
export interface QueryContentByInitiativeRequestAmino {
  initiative_id?: string;
}
export interface QueryContentByInitiativeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryContentByInitiativeRequest";
  value: QueryContentByInitiativeRequestAmino;
}
/**
 * ContentInitiativeLinkEntry represents a content item linked to an initiative with its conviction
 * @name ContentInitiativeLinkEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ContentInitiativeLinkEntry
 */
export interface ContentInitiativeLinkEntry {
  /**
   * StakeTargetType (4=BLOG_CONTENT, 5=FORUM_CONTENT)
   */
  targetType: number;
  /**
   * Content ID
   */
  targetId: bigint;
  conviction: string;
}
export interface ContentInitiativeLinkEntryProtoMsg {
  typeUrl: "/sparkdream.rep.v1.ContentInitiativeLinkEntry";
  value: Uint8Array;
}
/**
 * ContentInitiativeLinkEntry represents a content item linked to an initiative with its conviction
 * @name ContentInitiativeLinkEntryAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ContentInitiativeLinkEntry
 */
export interface ContentInitiativeLinkEntryAmino {
  /**
   * StakeTargetType (4=BLOG_CONTENT, 5=FORUM_CONTENT)
   */
  target_type?: number;
  /**
   * Content ID
   */
  target_id?: string;
  conviction?: string;
}
export interface ContentInitiativeLinkEntryAminoMsg {
  type: "/sparkdream.rep.v1.ContentInitiativeLinkEntry";
  value: ContentInitiativeLinkEntryAmino;
}
/**
 * QueryContentByInitiativeResponse defines the response for content linked to an initiative
 * @name QueryContentByInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentByInitiativeResponse
 */
export interface QueryContentByInitiativeResponse {
  links: ContentInitiativeLinkEntry[];
  totalPropagated: string;
}
export interface QueryContentByInitiativeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryContentByInitiativeResponse";
  value: Uint8Array;
}
/**
 * QueryContentByInitiativeResponse defines the response for content linked to an initiative
 * @name QueryContentByInitiativeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentByInitiativeResponse
 */
export interface QueryContentByInitiativeResponseAmino {
  links?: ContentInitiativeLinkEntryAmino[];
  total_propagated?: string;
}
export interface QueryContentByInitiativeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryContentByInitiativeResponse";
  value: QueryContentByInitiativeResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryParamsRequest",
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
      typeUrl: "/sparkdream.rep.v1.QueryParamsRequest",
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
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryParamsResponse",
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
      typeUrl: "/sparkdream.rep.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberRequest(): QueryGetMemberRequest {
  return {
    address: ""
  };
}
/**
 * QueryGetMemberRequest defines the QueryGetMemberRequest message.
 * @name QueryGetMemberRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberRequest
 */
export const QueryGetMemberRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberRequest",
  encode(message: QueryGetMemberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberRequest();
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
  fromPartial(object: DeepPartial<QueryGetMemberRequest>): QueryGetMemberRequest {
    const message = createBaseQueryGetMemberRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetMemberRequestAmino): QueryGetMemberRequest {
    const message = createBaseQueryGetMemberRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGetMemberRequest): QueryGetMemberRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberRequestAminoMsg): QueryGetMemberRequest {
    return QueryGetMemberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberRequestProtoMsg): QueryGetMemberRequest {
    return QueryGetMemberRequest.decode(message.value);
  },
  toProto(message: QueryGetMemberRequest): Uint8Array {
    return QueryGetMemberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberRequest): QueryGetMemberRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetMemberRequest",
      value: QueryGetMemberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberResponse(): QueryGetMemberResponse {
  return {
    member: Member.fromPartial({})
  };
}
/**
 * QueryGetMemberResponse defines the QueryGetMemberResponse message.
 * @name QueryGetMemberResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberResponse
 */
export const QueryGetMemberResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberResponse",
  encode(message: QueryGetMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberResponse>): QueryGetMemberResponse {
    const message = createBaseQueryGetMemberResponse();
    message.member = object.member !== undefined && object.member !== null ? Member.fromPartial(object.member) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMemberResponseAmino): QueryGetMemberResponse {
    const message = createBaseQueryGetMemberResponse();
    if (object.member !== undefined && object.member !== null) {
      message.member = Member.fromAmino(object.member);
    }
    return message;
  },
  toAmino(message: QueryGetMemberResponse): QueryGetMemberResponseAmino {
    const obj: any = {};
    obj.member = message.member ? Member.toAmino(message.member) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberResponseAminoMsg): QueryGetMemberResponse {
    return QueryGetMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberResponseProtoMsg): QueryGetMemberResponse {
    return QueryGetMemberResponse.decode(message.value);
  },
  toProto(message: QueryGetMemberResponse): Uint8Array {
    return QueryGetMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberResponse): QueryGetMemberResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetMemberResponse",
      value: QueryGetMemberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberRequest(): QueryAllMemberRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllMemberRequest defines the QueryAllMemberRequest message.
 * @name QueryAllMemberRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberRequest
 */
export const QueryAllMemberRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllMemberRequest",
  encode(message: QueryAllMemberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberRequest();
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
  fromPartial(object: DeepPartial<QueryAllMemberRequest>): QueryAllMemberRequest {
    const message = createBaseQueryAllMemberRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberRequestAmino): QueryAllMemberRequest {
    const message = createBaseQueryAllMemberRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberRequest): QueryAllMemberRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberRequestAminoMsg): QueryAllMemberRequest {
    return QueryAllMemberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberRequestProtoMsg): QueryAllMemberRequest {
    return QueryAllMemberRequest.decode(message.value);
  },
  toProto(message: QueryAllMemberRequest): Uint8Array {
    return QueryAllMemberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberRequest): QueryAllMemberRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllMemberRequest",
      value: QueryAllMemberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberResponse(): QueryAllMemberResponse {
  return {
    member: [],
    pagination: undefined
  };
}
/**
 * QueryAllMemberResponse defines the QueryAllMemberResponse message.
 * @name QueryAllMemberResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberResponse
 */
export const QueryAllMemberResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllMemberResponse",
  encode(message: QueryAllMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.member) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member.push(Member.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllMemberResponse>): QueryAllMemberResponse {
    const message = createBaseQueryAllMemberResponse();
    message.member = object.member?.map(e => Member.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberResponseAmino): QueryAllMemberResponse {
    const message = createBaseQueryAllMemberResponse();
    message.member = object.member?.map(e => Member.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberResponse): QueryAllMemberResponseAmino {
    const obj: any = {};
    if (message.member) {
      obj.member = message.member.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.member = message.member;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberResponseAminoMsg): QueryAllMemberResponse {
    return QueryAllMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberResponseProtoMsg): QueryAllMemberResponse {
    return QueryAllMemberResponse.decode(message.value);
  },
  toProto(message: QueryAllMemberResponse): Uint8Array {
    return QueryAllMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberResponse): QueryAllMemberResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllMemberResponse",
      value: QueryAllMemberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetInvitationRequest(): QueryGetInvitationRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetInvitationRequest defines the QueryGetInvitationRequest message.
 * @name QueryGetInvitationRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInvitationRequest
 */
export const QueryGetInvitationRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetInvitationRequest",
  encode(message: QueryGetInvitationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetInvitationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInvitationRequest();
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
  fromPartial(object: DeepPartial<QueryGetInvitationRequest>): QueryGetInvitationRequest {
    const message = createBaseQueryGetInvitationRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetInvitationRequestAmino): QueryGetInvitationRequest {
    const message = createBaseQueryGetInvitationRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetInvitationRequest): QueryGetInvitationRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetInvitationRequestAminoMsg): QueryGetInvitationRequest {
    return QueryGetInvitationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetInvitationRequestProtoMsg): QueryGetInvitationRequest {
    return QueryGetInvitationRequest.decode(message.value);
  },
  toProto(message: QueryGetInvitationRequest): Uint8Array {
    return QueryGetInvitationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetInvitationRequest): QueryGetInvitationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetInvitationRequest",
      value: QueryGetInvitationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetInvitationResponse(): QueryGetInvitationResponse {
  return {
    invitation: Invitation.fromPartial({})
  };
}
/**
 * QueryGetInvitationResponse defines the QueryGetInvitationResponse message.
 * @name QueryGetInvitationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInvitationResponse
 */
export const QueryGetInvitationResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetInvitationResponse",
  encode(message: QueryGetInvitationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.invitation !== undefined) {
      Invitation.encode(message.invitation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetInvitationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInvitationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invitation = Invitation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetInvitationResponse>): QueryGetInvitationResponse {
    const message = createBaseQueryGetInvitationResponse();
    message.invitation = object.invitation !== undefined && object.invitation !== null ? Invitation.fromPartial(object.invitation) : undefined;
    return message;
  },
  fromAmino(object: QueryGetInvitationResponseAmino): QueryGetInvitationResponse {
    const message = createBaseQueryGetInvitationResponse();
    if (object.invitation !== undefined && object.invitation !== null) {
      message.invitation = Invitation.fromAmino(object.invitation);
    }
    return message;
  },
  toAmino(message: QueryGetInvitationResponse): QueryGetInvitationResponseAmino {
    const obj: any = {};
    obj.invitation = message.invitation ? Invitation.toAmino(message.invitation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetInvitationResponseAminoMsg): QueryGetInvitationResponse {
    return QueryGetInvitationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetInvitationResponseProtoMsg): QueryGetInvitationResponse {
    return QueryGetInvitationResponse.decode(message.value);
  },
  toProto(message: QueryGetInvitationResponse): Uint8Array {
    return QueryGetInvitationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetInvitationResponse): QueryGetInvitationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetInvitationResponse",
      value: QueryGetInvitationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllInvitationRequest(): QueryAllInvitationRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllInvitationRequest defines the QueryAllInvitationRequest message.
 * @name QueryAllInvitationRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInvitationRequest
 */
export const QueryAllInvitationRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllInvitationRequest",
  encode(message: QueryAllInvitationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllInvitationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInvitationRequest();
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
  fromPartial(object: DeepPartial<QueryAllInvitationRequest>): QueryAllInvitationRequest {
    const message = createBaseQueryAllInvitationRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllInvitationRequestAmino): QueryAllInvitationRequest {
    const message = createBaseQueryAllInvitationRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllInvitationRequest): QueryAllInvitationRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllInvitationRequestAminoMsg): QueryAllInvitationRequest {
    return QueryAllInvitationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllInvitationRequestProtoMsg): QueryAllInvitationRequest {
    return QueryAllInvitationRequest.decode(message.value);
  },
  toProto(message: QueryAllInvitationRequest): Uint8Array {
    return QueryAllInvitationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllInvitationRequest): QueryAllInvitationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllInvitationRequest",
      value: QueryAllInvitationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllInvitationResponse(): QueryAllInvitationResponse {
  return {
    invitation: [],
    pagination: undefined
  };
}
/**
 * QueryAllInvitationResponse defines the QueryAllInvitationResponse message.
 * @name QueryAllInvitationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInvitationResponse
 */
export const QueryAllInvitationResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllInvitationResponse",
  encode(message: QueryAllInvitationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.invitation) {
      Invitation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllInvitationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInvitationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invitation.push(Invitation.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllInvitationResponse>): QueryAllInvitationResponse {
    const message = createBaseQueryAllInvitationResponse();
    message.invitation = object.invitation?.map(e => Invitation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllInvitationResponseAmino): QueryAllInvitationResponse {
    const message = createBaseQueryAllInvitationResponse();
    message.invitation = object.invitation?.map(e => Invitation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllInvitationResponse): QueryAllInvitationResponseAmino {
    const obj: any = {};
    if (message.invitation) {
      obj.invitation = message.invitation.map(e => e ? Invitation.toAmino(e) : undefined);
    } else {
      obj.invitation = message.invitation;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllInvitationResponseAminoMsg): QueryAllInvitationResponse {
    return QueryAllInvitationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllInvitationResponseProtoMsg): QueryAllInvitationResponse {
    return QueryAllInvitationResponse.decode(message.value);
  },
  toProto(message: QueryAllInvitationResponse): Uint8Array {
    return QueryAllInvitationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllInvitationResponse): QueryAllInvitationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllInvitationResponse",
      value: QueryAllInvitationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProjectRequest(): QueryGetProjectRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetProjectRequest defines the QueryGetProjectRequest message.
 * @name QueryGetProjectRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetProjectRequest
 */
export const QueryGetProjectRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetProjectRequest",
  encode(message: QueryGetProjectRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProjectRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProjectRequest();
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
  fromPartial(object: DeepPartial<QueryGetProjectRequest>): QueryGetProjectRequest {
    const message = createBaseQueryGetProjectRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetProjectRequestAmino): QueryGetProjectRequest {
    const message = createBaseQueryGetProjectRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetProjectRequest): QueryGetProjectRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProjectRequestAminoMsg): QueryGetProjectRequest {
    return QueryGetProjectRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProjectRequestProtoMsg): QueryGetProjectRequest {
    return QueryGetProjectRequest.decode(message.value);
  },
  toProto(message: QueryGetProjectRequest): Uint8Array {
    return QueryGetProjectRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProjectRequest): QueryGetProjectRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetProjectRequest",
      value: QueryGetProjectRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProjectResponse(): QueryGetProjectResponse {
  return {
    project: Project.fromPartial({})
  };
}
/**
 * QueryGetProjectResponse defines the QueryGetProjectResponse message.
 * @name QueryGetProjectResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetProjectResponse
 */
export const QueryGetProjectResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetProjectResponse",
  encode(message: QueryGetProjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProjectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetProjectResponse>): QueryGetProjectResponse {
    const message = createBaseQueryGetProjectResponse();
    message.project = object.project !== undefined && object.project !== null ? Project.fromPartial(object.project) : undefined;
    return message;
  },
  fromAmino(object: QueryGetProjectResponseAmino): QueryGetProjectResponse {
    const message = createBaseQueryGetProjectResponse();
    if (object.project !== undefined && object.project !== null) {
      message.project = Project.fromAmino(object.project);
    }
    return message;
  },
  toAmino(message: QueryGetProjectResponse): QueryGetProjectResponseAmino {
    const obj: any = {};
    obj.project = message.project ? Project.toAmino(message.project) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProjectResponseAminoMsg): QueryGetProjectResponse {
    return QueryGetProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProjectResponseProtoMsg): QueryGetProjectResponse {
    return QueryGetProjectResponse.decode(message.value);
  },
  toProto(message: QueryGetProjectResponse): Uint8Array {
    return QueryGetProjectResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProjectResponse): QueryGetProjectResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetProjectResponse",
      value: QueryGetProjectResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllProjectRequest(): QueryAllProjectRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllProjectRequest defines the QueryAllProjectRequest message.
 * @name QueryAllProjectRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllProjectRequest
 */
export const QueryAllProjectRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllProjectRequest",
  encode(message: QueryAllProjectRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllProjectRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProjectRequest();
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
  fromPartial(object: DeepPartial<QueryAllProjectRequest>): QueryAllProjectRequest {
    const message = createBaseQueryAllProjectRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllProjectRequestAmino): QueryAllProjectRequest {
    const message = createBaseQueryAllProjectRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllProjectRequest): QueryAllProjectRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllProjectRequestAminoMsg): QueryAllProjectRequest {
    return QueryAllProjectRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllProjectRequestProtoMsg): QueryAllProjectRequest {
    return QueryAllProjectRequest.decode(message.value);
  },
  toProto(message: QueryAllProjectRequest): Uint8Array {
    return QueryAllProjectRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllProjectRequest): QueryAllProjectRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllProjectRequest",
      value: QueryAllProjectRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllProjectResponse(): QueryAllProjectResponse {
  return {
    project: [],
    pagination: undefined
  };
}
/**
 * QueryAllProjectResponse defines the QueryAllProjectResponse message.
 * @name QueryAllProjectResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllProjectResponse
 */
export const QueryAllProjectResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllProjectResponse",
  encode(message: QueryAllProjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.project) {
      Project.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllProjectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project.push(Project.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllProjectResponse>): QueryAllProjectResponse {
    const message = createBaseQueryAllProjectResponse();
    message.project = object.project?.map(e => Project.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllProjectResponseAmino): QueryAllProjectResponse {
    const message = createBaseQueryAllProjectResponse();
    message.project = object.project?.map(e => Project.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllProjectResponse): QueryAllProjectResponseAmino {
    const obj: any = {};
    if (message.project) {
      obj.project = message.project.map(e => e ? Project.toAmino(e) : undefined);
    } else {
      obj.project = message.project;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllProjectResponseAminoMsg): QueryAllProjectResponse {
    return QueryAllProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllProjectResponseProtoMsg): QueryAllProjectResponse {
    return QueryAllProjectResponse.decode(message.value);
  },
  toProto(message: QueryAllProjectResponse): Uint8Array {
    return QueryAllProjectResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllProjectResponse): QueryAllProjectResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllProjectResponse",
      value: QueryAllProjectResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetInitiativeRequest(): QueryGetInitiativeRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetInitiativeRequest defines the QueryGetInitiativeRequest message.
 * @name QueryGetInitiativeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInitiativeRequest
 */
export const QueryGetInitiativeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetInitiativeRequest",
  encode(message: QueryGetInitiativeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetInitiativeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInitiativeRequest();
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
  fromPartial(object: DeepPartial<QueryGetInitiativeRequest>): QueryGetInitiativeRequest {
    const message = createBaseQueryGetInitiativeRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetInitiativeRequestAmino): QueryGetInitiativeRequest {
    const message = createBaseQueryGetInitiativeRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetInitiativeRequest): QueryGetInitiativeRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetInitiativeRequestAminoMsg): QueryGetInitiativeRequest {
    return QueryGetInitiativeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetInitiativeRequestProtoMsg): QueryGetInitiativeRequest {
    return QueryGetInitiativeRequest.decode(message.value);
  },
  toProto(message: QueryGetInitiativeRequest): Uint8Array {
    return QueryGetInitiativeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetInitiativeRequest): QueryGetInitiativeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetInitiativeRequest",
      value: QueryGetInitiativeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetInitiativeResponse(): QueryGetInitiativeResponse {
  return {
    initiative: Initiative.fromPartial({})
  };
}
/**
 * QueryGetInitiativeResponse defines the QueryGetInitiativeResponse message.
 * @name QueryGetInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInitiativeResponse
 */
export const QueryGetInitiativeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetInitiativeResponse",
  encode(message: QueryGetInitiativeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiative !== undefined) {
      Initiative.encode(message.initiative, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetInitiativeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInitiativeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiative = Initiative.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetInitiativeResponse>): QueryGetInitiativeResponse {
    const message = createBaseQueryGetInitiativeResponse();
    message.initiative = object.initiative !== undefined && object.initiative !== null ? Initiative.fromPartial(object.initiative) : undefined;
    return message;
  },
  fromAmino(object: QueryGetInitiativeResponseAmino): QueryGetInitiativeResponse {
    const message = createBaseQueryGetInitiativeResponse();
    if (object.initiative !== undefined && object.initiative !== null) {
      message.initiative = Initiative.fromAmino(object.initiative);
    }
    return message;
  },
  toAmino(message: QueryGetInitiativeResponse): QueryGetInitiativeResponseAmino {
    const obj: any = {};
    obj.initiative = message.initiative ? Initiative.toAmino(message.initiative) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetInitiativeResponseAminoMsg): QueryGetInitiativeResponse {
    return QueryGetInitiativeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetInitiativeResponseProtoMsg): QueryGetInitiativeResponse {
    return QueryGetInitiativeResponse.decode(message.value);
  },
  toProto(message: QueryGetInitiativeResponse): Uint8Array {
    return QueryGetInitiativeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetInitiativeResponse): QueryGetInitiativeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetInitiativeResponse",
      value: QueryGetInitiativeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllInitiativeRequest(): QueryAllInitiativeRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllInitiativeRequest defines the QueryAllInitiativeRequest message.
 * @name QueryAllInitiativeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInitiativeRequest
 */
export const QueryAllInitiativeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllInitiativeRequest",
  encode(message: QueryAllInitiativeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllInitiativeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInitiativeRequest();
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
  fromPartial(object: DeepPartial<QueryAllInitiativeRequest>): QueryAllInitiativeRequest {
    const message = createBaseQueryAllInitiativeRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllInitiativeRequestAmino): QueryAllInitiativeRequest {
    const message = createBaseQueryAllInitiativeRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllInitiativeRequest): QueryAllInitiativeRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllInitiativeRequestAminoMsg): QueryAllInitiativeRequest {
    return QueryAllInitiativeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllInitiativeRequestProtoMsg): QueryAllInitiativeRequest {
    return QueryAllInitiativeRequest.decode(message.value);
  },
  toProto(message: QueryAllInitiativeRequest): Uint8Array {
    return QueryAllInitiativeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllInitiativeRequest): QueryAllInitiativeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllInitiativeRequest",
      value: QueryAllInitiativeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllInitiativeResponse(): QueryAllInitiativeResponse {
  return {
    initiative: [],
    pagination: undefined
  };
}
/**
 * QueryAllInitiativeResponse defines the QueryAllInitiativeResponse message.
 * @name QueryAllInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInitiativeResponse
 */
export const QueryAllInitiativeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllInitiativeResponse",
  encode(message: QueryAllInitiativeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.initiative) {
      Initiative.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllInitiativeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInitiativeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiative.push(Initiative.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllInitiativeResponse>): QueryAllInitiativeResponse {
    const message = createBaseQueryAllInitiativeResponse();
    message.initiative = object.initiative?.map(e => Initiative.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllInitiativeResponseAmino): QueryAllInitiativeResponse {
    const message = createBaseQueryAllInitiativeResponse();
    message.initiative = object.initiative?.map(e => Initiative.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllInitiativeResponse): QueryAllInitiativeResponseAmino {
    const obj: any = {};
    if (message.initiative) {
      obj.initiative = message.initiative.map(e => e ? Initiative.toAmino(e) : undefined);
    } else {
      obj.initiative = message.initiative;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllInitiativeResponseAminoMsg): QueryAllInitiativeResponse {
    return QueryAllInitiativeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllInitiativeResponseProtoMsg): QueryAllInitiativeResponse {
    return QueryAllInitiativeResponse.decode(message.value);
  },
  toProto(message: QueryAllInitiativeResponse): Uint8Array {
    return QueryAllInitiativeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllInitiativeResponse): QueryAllInitiativeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllInitiativeResponse",
      value: QueryAllInitiativeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetStakeRequest(): QueryGetStakeRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetStakeRequest defines the QueryGetStakeRequest message.
 * @name QueryGetStakeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetStakeRequest
 */
export const QueryGetStakeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetStakeRequest",
  encode(message: QueryGetStakeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStakeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakeRequest();
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
  fromPartial(object: DeepPartial<QueryGetStakeRequest>): QueryGetStakeRequest {
    const message = createBaseQueryGetStakeRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetStakeRequestAmino): QueryGetStakeRequest {
    const message = createBaseQueryGetStakeRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetStakeRequest): QueryGetStakeRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStakeRequestAminoMsg): QueryGetStakeRequest {
    return QueryGetStakeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStakeRequestProtoMsg): QueryGetStakeRequest {
    return QueryGetStakeRequest.decode(message.value);
  },
  toProto(message: QueryGetStakeRequest): Uint8Array {
    return QueryGetStakeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStakeRequest): QueryGetStakeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetStakeRequest",
      value: QueryGetStakeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetStakeResponse(): QueryGetStakeResponse {
  return {
    stake: Stake.fromPartial({})
  };
}
/**
 * QueryGetStakeResponse defines the QueryGetStakeResponse message.
 * @name QueryGetStakeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetStakeResponse
 */
export const QueryGetStakeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetStakeResponse",
  encode(message: QueryGetStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake = Stake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetStakeResponse>): QueryGetStakeResponse {
    const message = createBaseQueryGetStakeResponse();
    message.stake = object.stake !== undefined && object.stake !== null ? Stake.fromPartial(object.stake) : undefined;
    return message;
  },
  fromAmino(object: QueryGetStakeResponseAmino): QueryGetStakeResponse {
    const message = createBaseQueryGetStakeResponse();
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = Stake.fromAmino(object.stake);
    }
    return message;
  },
  toAmino(message: QueryGetStakeResponse): QueryGetStakeResponseAmino {
    const obj: any = {};
    obj.stake = message.stake ? Stake.toAmino(message.stake) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetStakeResponseAminoMsg): QueryGetStakeResponse {
    return QueryGetStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetStakeResponseProtoMsg): QueryGetStakeResponse {
    return QueryGetStakeResponse.decode(message.value);
  },
  toProto(message: QueryGetStakeResponse): Uint8Array {
    return QueryGetStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetStakeResponse): QueryGetStakeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetStakeResponse",
      value: QueryGetStakeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllStakeRequest(): QueryAllStakeRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllStakeRequest defines the QueryAllStakeRequest message.
 * @name QueryAllStakeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllStakeRequest
 */
export const QueryAllStakeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllStakeRequest",
  encode(message: QueryAllStakeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStakeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakeRequest();
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
  fromPartial(object: DeepPartial<QueryAllStakeRequest>): QueryAllStakeRequest {
    const message = createBaseQueryAllStakeRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStakeRequestAmino): QueryAllStakeRequest {
    const message = createBaseQueryAllStakeRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStakeRequest): QueryAllStakeRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStakeRequestAminoMsg): QueryAllStakeRequest {
    return QueryAllStakeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStakeRequestProtoMsg): QueryAllStakeRequest {
    return QueryAllStakeRequest.decode(message.value);
  },
  toProto(message: QueryAllStakeRequest): Uint8Array {
    return QueryAllStakeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStakeRequest): QueryAllStakeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllStakeRequest",
      value: QueryAllStakeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllStakeResponse(): QueryAllStakeResponse {
  return {
    stake: [],
    pagination: undefined
  };
}
/**
 * QueryAllStakeResponse defines the QueryAllStakeResponse message.
 * @name QueryAllStakeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllStakeResponse
 */
export const QueryAllStakeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllStakeResponse",
  encode(message: QueryAllStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stake) {
      Stake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake.push(Stake.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllStakeResponse>): QueryAllStakeResponse {
    const message = createBaseQueryAllStakeResponse();
    message.stake = object.stake?.map(e => Stake.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllStakeResponseAmino): QueryAllStakeResponse {
    const message = createBaseQueryAllStakeResponse();
    message.stake = object.stake?.map(e => Stake.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllStakeResponse): QueryAllStakeResponseAmino {
    const obj: any = {};
    if (message.stake) {
      obj.stake = message.stake.map(e => e ? Stake.toAmino(e) : undefined);
    } else {
      obj.stake = message.stake;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllStakeResponseAminoMsg): QueryAllStakeResponse {
    return QueryAllStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllStakeResponseProtoMsg): QueryAllStakeResponse {
    return QueryAllStakeResponse.decode(message.value);
  },
  toProto(message: QueryAllStakeResponse): Uint8Array {
    return QueryAllStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllStakeResponse): QueryAllStakeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllStakeResponse",
      value: QueryAllStakeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetChallengeRequest(): QueryGetChallengeRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetChallengeRequest defines the QueryGetChallengeRequest message.
 * @name QueryGetChallengeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetChallengeRequest
 */
export const QueryGetChallengeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetChallengeRequest",
  encode(message: QueryGetChallengeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetChallengeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetChallengeRequest();
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
  fromPartial(object: DeepPartial<QueryGetChallengeRequest>): QueryGetChallengeRequest {
    const message = createBaseQueryGetChallengeRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetChallengeRequestAmino): QueryGetChallengeRequest {
    const message = createBaseQueryGetChallengeRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetChallengeRequest): QueryGetChallengeRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetChallengeRequestAminoMsg): QueryGetChallengeRequest {
    return QueryGetChallengeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetChallengeRequestProtoMsg): QueryGetChallengeRequest {
    return QueryGetChallengeRequest.decode(message.value);
  },
  toProto(message: QueryGetChallengeRequest): Uint8Array {
    return QueryGetChallengeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetChallengeRequest): QueryGetChallengeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetChallengeRequest",
      value: QueryGetChallengeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetChallengeResponse(): QueryGetChallengeResponse {
  return {
    challenge: Challenge.fromPartial({})
  };
}
/**
 * QueryGetChallengeResponse defines the QueryGetChallengeResponse message.
 * @name QueryGetChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetChallengeResponse
 */
export const QueryGetChallengeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetChallengeResponse",
  encode(message: QueryGetChallengeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challenge !== undefined) {
      Challenge.encode(message.challenge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetChallengeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challenge = Challenge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetChallengeResponse>): QueryGetChallengeResponse {
    const message = createBaseQueryGetChallengeResponse();
    message.challenge = object.challenge !== undefined && object.challenge !== null ? Challenge.fromPartial(object.challenge) : undefined;
    return message;
  },
  fromAmino(object: QueryGetChallengeResponseAmino): QueryGetChallengeResponse {
    const message = createBaseQueryGetChallengeResponse();
    if (object.challenge !== undefined && object.challenge !== null) {
      message.challenge = Challenge.fromAmino(object.challenge);
    }
    return message;
  },
  toAmino(message: QueryGetChallengeResponse): QueryGetChallengeResponseAmino {
    const obj: any = {};
    obj.challenge = message.challenge ? Challenge.toAmino(message.challenge) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetChallengeResponseAminoMsg): QueryGetChallengeResponse {
    return QueryGetChallengeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetChallengeResponseProtoMsg): QueryGetChallengeResponse {
    return QueryGetChallengeResponse.decode(message.value);
  },
  toProto(message: QueryGetChallengeResponse): Uint8Array {
    return QueryGetChallengeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetChallengeResponse): QueryGetChallengeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetChallengeResponse",
      value: QueryGetChallengeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllChallengeRequest(): QueryAllChallengeRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllChallengeRequest defines the QueryAllChallengeRequest message.
 * @name QueryAllChallengeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllChallengeRequest
 */
export const QueryAllChallengeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllChallengeRequest",
  encode(message: QueryAllChallengeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllChallengeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllChallengeRequest();
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
  fromPartial(object: DeepPartial<QueryAllChallengeRequest>): QueryAllChallengeRequest {
    const message = createBaseQueryAllChallengeRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllChallengeRequestAmino): QueryAllChallengeRequest {
    const message = createBaseQueryAllChallengeRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllChallengeRequest): QueryAllChallengeRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllChallengeRequestAminoMsg): QueryAllChallengeRequest {
    return QueryAllChallengeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllChallengeRequestProtoMsg): QueryAllChallengeRequest {
    return QueryAllChallengeRequest.decode(message.value);
  },
  toProto(message: QueryAllChallengeRequest): Uint8Array {
    return QueryAllChallengeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllChallengeRequest): QueryAllChallengeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllChallengeRequest",
      value: QueryAllChallengeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllChallengeResponse(): QueryAllChallengeResponse {
  return {
    challenge: [],
    pagination: undefined
  };
}
/**
 * QueryAllChallengeResponse defines the QueryAllChallengeResponse message.
 * @name QueryAllChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllChallengeResponse
 */
export const QueryAllChallengeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllChallengeResponse",
  encode(message: QueryAllChallengeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.challenge) {
      Challenge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllChallengeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challenge.push(Challenge.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllChallengeResponse>): QueryAllChallengeResponse {
    const message = createBaseQueryAllChallengeResponse();
    message.challenge = object.challenge?.map(e => Challenge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllChallengeResponseAmino): QueryAllChallengeResponse {
    const message = createBaseQueryAllChallengeResponse();
    message.challenge = object.challenge?.map(e => Challenge.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllChallengeResponse): QueryAllChallengeResponseAmino {
    const obj: any = {};
    if (message.challenge) {
      obj.challenge = message.challenge.map(e => e ? Challenge.toAmino(e) : undefined);
    } else {
      obj.challenge = message.challenge;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllChallengeResponseAminoMsg): QueryAllChallengeResponse {
    return QueryAllChallengeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllChallengeResponseProtoMsg): QueryAllChallengeResponse {
    return QueryAllChallengeResponse.decode(message.value);
  },
  toProto(message: QueryAllChallengeResponse): Uint8Array {
    return QueryAllChallengeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllChallengeResponse): QueryAllChallengeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllChallengeResponse",
      value: QueryAllChallengeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetJuryReviewRequest(): QueryGetJuryReviewRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetJuryReviewRequest defines the QueryGetJuryReviewRequest message.
 * @name QueryGetJuryReviewRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetJuryReviewRequest
 */
export const QueryGetJuryReviewRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetJuryReviewRequest",
  encode(message: QueryGetJuryReviewRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetJuryReviewRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetJuryReviewRequest();
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
  fromPartial(object: DeepPartial<QueryGetJuryReviewRequest>): QueryGetJuryReviewRequest {
    const message = createBaseQueryGetJuryReviewRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetJuryReviewRequestAmino): QueryGetJuryReviewRequest {
    const message = createBaseQueryGetJuryReviewRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetJuryReviewRequest): QueryGetJuryReviewRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetJuryReviewRequestAminoMsg): QueryGetJuryReviewRequest {
    return QueryGetJuryReviewRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetJuryReviewRequestProtoMsg): QueryGetJuryReviewRequest {
    return QueryGetJuryReviewRequest.decode(message.value);
  },
  toProto(message: QueryGetJuryReviewRequest): Uint8Array {
    return QueryGetJuryReviewRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetJuryReviewRequest): QueryGetJuryReviewRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetJuryReviewRequest",
      value: QueryGetJuryReviewRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetJuryReviewResponse(): QueryGetJuryReviewResponse {
  return {
    juryReview: JuryReview.fromPartial({})
  };
}
/**
 * QueryGetJuryReviewResponse defines the QueryGetJuryReviewResponse message.
 * @name QueryGetJuryReviewResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetJuryReviewResponse
 */
export const QueryGetJuryReviewResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetJuryReviewResponse",
  encode(message: QueryGetJuryReviewResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juryReview !== undefined) {
      JuryReview.encode(message.juryReview, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetJuryReviewResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetJuryReviewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juryReview = JuryReview.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetJuryReviewResponse>): QueryGetJuryReviewResponse {
    const message = createBaseQueryGetJuryReviewResponse();
    message.juryReview = object.juryReview !== undefined && object.juryReview !== null ? JuryReview.fromPartial(object.juryReview) : undefined;
    return message;
  },
  fromAmino(object: QueryGetJuryReviewResponseAmino): QueryGetJuryReviewResponse {
    const message = createBaseQueryGetJuryReviewResponse();
    if (object.jury_review !== undefined && object.jury_review !== null) {
      message.juryReview = JuryReview.fromAmino(object.jury_review);
    }
    return message;
  },
  toAmino(message: QueryGetJuryReviewResponse): QueryGetJuryReviewResponseAmino {
    const obj: any = {};
    obj.jury_review = message.juryReview ? JuryReview.toAmino(message.juryReview) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetJuryReviewResponseAminoMsg): QueryGetJuryReviewResponse {
    return QueryGetJuryReviewResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetJuryReviewResponseProtoMsg): QueryGetJuryReviewResponse {
    return QueryGetJuryReviewResponse.decode(message.value);
  },
  toProto(message: QueryGetJuryReviewResponse): Uint8Array {
    return QueryGetJuryReviewResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetJuryReviewResponse): QueryGetJuryReviewResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetJuryReviewResponse",
      value: QueryGetJuryReviewResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllJuryReviewRequest(): QueryAllJuryReviewRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllJuryReviewRequest defines the QueryAllJuryReviewRequest message.
 * @name QueryAllJuryReviewRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllJuryReviewRequest
 */
export const QueryAllJuryReviewRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllJuryReviewRequest",
  encode(message: QueryAllJuryReviewRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllJuryReviewRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllJuryReviewRequest();
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
  fromPartial(object: DeepPartial<QueryAllJuryReviewRequest>): QueryAllJuryReviewRequest {
    const message = createBaseQueryAllJuryReviewRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllJuryReviewRequestAmino): QueryAllJuryReviewRequest {
    const message = createBaseQueryAllJuryReviewRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllJuryReviewRequest): QueryAllJuryReviewRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllJuryReviewRequestAminoMsg): QueryAllJuryReviewRequest {
    return QueryAllJuryReviewRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllJuryReviewRequestProtoMsg): QueryAllJuryReviewRequest {
    return QueryAllJuryReviewRequest.decode(message.value);
  },
  toProto(message: QueryAllJuryReviewRequest): Uint8Array {
    return QueryAllJuryReviewRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllJuryReviewRequest): QueryAllJuryReviewRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllJuryReviewRequest",
      value: QueryAllJuryReviewRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllJuryReviewResponse(): QueryAllJuryReviewResponse {
  return {
    juryReview: [],
    pagination: undefined
  };
}
/**
 * QueryAllJuryReviewResponse defines the QueryAllJuryReviewResponse message.
 * @name QueryAllJuryReviewResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllJuryReviewResponse
 */
export const QueryAllJuryReviewResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllJuryReviewResponse",
  encode(message: QueryAllJuryReviewResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.juryReview) {
      JuryReview.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllJuryReviewResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllJuryReviewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juryReview.push(JuryReview.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllJuryReviewResponse>): QueryAllJuryReviewResponse {
    const message = createBaseQueryAllJuryReviewResponse();
    message.juryReview = object.juryReview?.map(e => JuryReview.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllJuryReviewResponseAmino): QueryAllJuryReviewResponse {
    const message = createBaseQueryAllJuryReviewResponse();
    message.juryReview = object.jury_review?.map(e => JuryReview.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllJuryReviewResponse): QueryAllJuryReviewResponseAmino {
    const obj: any = {};
    if (message.juryReview) {
      obj.jury_review = message.juryReview.map(e => e ? JuryReview.toAmino(e) : undefined);
    } else {
      obj.jury_review = message.juryReview;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllJuryReviewResponseAminoMsg): QueryAllJuryReviewResponse {
    return QueryAllJuryReviewResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllJuryReviewResponseProtoMsg): QueryAllJuryReviewResponse {
    return QueryAllJuryReviewResponse.decode(message.value);
  },
  toProto(message: QueryAllJuryReviewResponse): Uint8Array {
    return QueryAllJuryReviewResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllJuryReviewResponse): QueryAllJuryReviewResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllJuryReviewResponse",
      value: QueryAllJuryReviewResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetInterimRequest(): QueryGetInterimRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetInterimRequest defines the QueryGetInterimRequest message.
 * @name QueryGetInterimRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInterimRequest
 */
export const QueryGetInterimRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetInterimRequest",
  encode(message: QueryGetInterimRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetInterimRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInterimRequest();
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
  fromPartial(object: DeepPartial<QueryGetInterimRequest>): QueryGetInterimRequest {
    const message = createBaseQueryGetInterimRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetInterimRequestAmino): QueryGetInterimRequest {
    const message = createBaseQueryGetInterimRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetInterimRequest): QueryGetInterimRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetInterimRequestAminoMsg): QueryGetInterimRequest {
    return QueryGetInterimRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetInterimRequestProtoMsg): QueryGetInterimRequest {
    return QueryGetInterimRequest.decode(message.value);
  },
  toProto(message: QueryGetInterimRequest): Uint8Array {
    return QueryGetInterimRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetInterimRequest): QueryGetInterimRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetInterimRequest",
      value: QueryGetInterimRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetInterimResponse(): QueryGetInterimResponse {
  return {
    interim: Interim.fromPartial({})
  };
}
/**
 * QueryGetInterimResponse defines the QueryGetInterimResponse message.
 * @name QueryGetInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInterimResponse
 */
export const QueryGetInterimResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetInterimResponse",
  encode(message: QueryGetInterimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interim !== undefined) {
      Interim.encode(message.interim, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetInterimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInterimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interim = Interim.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetInterimResponse>): QueryGetInterimResponse {
    const message = createBaseQueryGetInterimResponse();
    message.interim = object.interim !== undefined && object.interim !== null ? Interim.fromPartial(object.interim) : undefined;
    return message;
  },
  fromAmino(object: QueryGetInterimResponseAmino): QueryGetInterimResponse {
    const message = createBaseQueryGetInterimResponse();
    if (object.interim !== undefined && object.interim !== null) {
      message.interim = Interim.fromAmino(object.interim);
    }
    return message;
  },
  toAmino(message: QueryGetInterimResponse): QueryGetInterimResponseAmino {
    const obj: any = {};
    obj.interim = message.interim ? Interim.toAmino(message.interim) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetInterimResponseAminoMsg): QueryGetInterimResponse {
    return QueryGetInterimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetInterimResponseProtoMsg): QueryGetInterimResponse {
    return QueryGetInterimResponse.decode(message.value);
  },
  toProto(message: QueryGetInterimResponse): Uint8Array {
    return QueryGetInterimResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetInterimResponse): QueryGetInterimResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetInterimResponse",
      value: QueryGetInterimResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllInterimRequest(): QueryAllInterimRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllInterimRequest defines the QueryAllInterimRequest message.
 * @name QueryAllInterimRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInterimRequest
 */
export const QueryAllInterimRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllInterimRequest",
  encode(message: QueryAllInterimRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllInterimRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInterimRequest();
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
  fromPartial(object: DeepPartial<QueryAllInterimRequest>): QueryAllInterimRequest {
    const message = createBaseQueryAllInterimRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllInterimRequestAmino): QueryAllInterimRequest {
    const message = createBaseQueryAllInterimRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllInterimRequest): QueryAllInterimRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllInterimRequestAminoMsg): QueryAllInterimRequest {
    return QueryAllInterimRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllInterimRequestProtoMsg): QueryAllInterimRequest {
    return QueryAllInterimRequest.decode(message.value);
  },
  toProto(message: QueryAllInterimRequest): Uint8Array {
    return QueryAllInterimRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllInterimRequest): QueryAllInterimRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllInterimRequest",
      value: QueryAllInterimRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllInterimResponse(): QueryAllInterimResponse {
  return {
    interim: [],
    pagination: undefined
  };
}
/**
 * QueryAllInterimResponse defines the QueryAllInterimResponse message.
 * @name QueryAllInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInterimResponse
 */
export const QueryAllInterimResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllInterimResponse",
  encode(message: QueryAllInterimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.interim) {
      Interim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllInterimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInterimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interim.push(Interim.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllInterimResponse>): QueryAllInterimResponse {
    const message = createBaseQueryAllInterimResponse();
    message.interim = object.interim?.map(e => Interim.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllInterimResponseAmino): QueryAllInterimResponse {
    const message = createBaseQueryAllInterimResponse();
    message.interim = object.interim?.map(e => Interim.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllInterimResponse): QueryAllInterimResponseAmino {
    const obj: any = {};
    if (message.interim) {
      obj.interim = message.interim.map(e => e ? Interim.toAmino(e) : undefined);
    } else {
      obj.interim = message.interim;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllInterimResponseAminoMsg): QueryAllInterimResponse {
    return QueryAllInterimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllInterimResponseProtoMsg): QueryAllInterimResponse {
    return QueryAllInterimResponse.decode(message.value);
  },
  toProto(message: QueryAllInterimResponse): Uint8Array {
    return QueryAllInterimResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllInterimResponse): QueryAllInterimResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllInterimResponse",
      value: QueryAllInterimResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetInterimTemplateRequest(): QueryGetInterimTemplateRequest {
  return {
    templateId: ""
  };
}
/**
 * QueryGetInterimTemplateRequest defines the QueryGetInterimTemplateRequest message.
 * @name QueryGetInterimTemplateRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInterimTemplateRequest
 */
export const QueryGetInterimTemplateRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetInterimTemplateRequest",
  encode(message: QueryGetInterimTemplateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.templateId !== "") {
      writer.uint32(10).string(message.templateId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetInterimTemplateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInterimTemplateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.templateId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetInterimTemplateRequest>): QueryGetInterimTemplateRequest {
    const message = createBaseQueryGetInterimTemplateRequest();
    message.templateId = object.templateId ?? "";
    return message;
  },
  fromAmino(object: QueryGetInterimTemplateRequestAmino): QueryGetInterimTemplateRequest {
    const message = createBaseQueryGetInterimTemplateRequest();
    if (object.template_id !== undefined && object.template_id !== null) {
      message.templateId = object.template_id;
    }
    return message;
  },
  toAmino(message: QueryGetInterimTemplateRequest): QueryGetInterimTemplateRequestAmino {
    const obj: any = {};
    obj.template_id = message.templateId === "" ? undefined : message.templateId;
    return obj;
  },
  fromAminoMsg(object: QueryGetInterimTemplateRequestAminoMsg): QueryGetInterimTemplateRequest {
    return QueryGetInterimTemplateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetInterimTemplateRequestProtoMsg): QueryGetInterimTemplateRequest {
    return QueryGetInterimTemplateRequest.decode(message.value);
  },
  toProto(message: QueryGetInterimTemplateRequest): Uint8Array {
    return QueryGetInterimTemplateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetInterimTemplateRequest): QueryGetInterimTemplateRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetInterimTemplateRequest",
      value: QueryGetInterimTemplateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetInterimTemplateResponse(): QueryGetInterimTemplateResponse {
  return {
    interimTemplate: InterimTemplate.fromPartial({})
  };
}
/**
 * QueryGetInterimTemplateResponse defines the QueryGetInterimTemplateResponse message.
 * @name QueryGetInterimTemplateResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetInterimTemplateResponse
 */
export const QueryGetInterimTemplateResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetInterimTemplateResponse",
  encode(message: QueryGetInterimTemplateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interimTemplate !== undefined) {
      InterimTemplate.encode(message.interimTemplate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetInterimTemplateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInterimTemplateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interimTemplate = InterimTemplate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetInterimTemplateResponse>): QueryGetInterimTemplateResponse {
    const message = createBaseQueryGetInterimTemplateResponse();
    message.interimTemplate = object.interimTemplate !== undefined && object.interimTemplate !== null ? InterimTemplate.fromPartial(object.interimTemplate) : undefined;
    return message;
  },
  fromAmino(object: QueryGetInterimTemplateResponseAmino): QueryGetInterimTemplateResponse {
    const message = createBaseQueryGetInterimTemplateResponse();
    if (object.interim_template !== undefined && object.interim_template !== null) {
      message.interimTemplate = InterimTemplate.fromAmino(object.interim_template);
    }
    return message;
  },
  toAmino(message: QueryGetInterimTemplateResponse): QueryGetInterimTemplateResponseAmino {
    const obj: any = {};
    obj.interim_template = message.interimTemplate ? InterimTemplate.toAmino(message.interimTemplate) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetInterimTemplateResponseAminoMsg): QueryGetInterimTemplateResponse {
    return QueryGetInterimTemplateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetInterimTemplateResponseProtoMsg): QueryGetInterimTemplateResponse {
    return QueryGetInterimTemplateResponse.decode(message.value);
  },
  toProto(message: QueryGetInterimTemplateResponse): Uint8Array {
    return QueryGetInterimTemplateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetInterimTemplateResponse): QueryGetInterimTemplateResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetInterimTemplateResponse",
      value: QueryGetInterimTemplateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllInterimTemplateRequest(): QueryAllInterimTemplateRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllInterimTemplateRequest defines the QueryAllInterimTemplateRequest message.
 * @name QueryAllInterimTemplateRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInterimTemplateRequest
 */
export const QueryAllInterimTemplateRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllInterimTemplateRequest",
  encode(message: QueryAllInterimTemplateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllInterimTemplateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInterimTemplateRequest();
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
  fromPartial(object: DeepPartial<QueryAllInterimTemplateRequest>): QueryAllInterimTemplateRequest {
    const message = createBaseQueryAllInterimTemplateRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllInterimTemplateRequestAmino): QueryAllInterimTemplateRequest {
    const message = createBaseQueryAllInterimTemplateRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllInterimTemplateRequest): QueryAllInterimTemplateRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllInterimTemplateRequestAminoMsg): QueryAllInterimTemplateRequest {
    return QueryAllInterimTemplateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllInterimTemplateRequestProtoMsg): QueryAllInterimTemplateRequest {
    return QueryAllInterimTemplateRequest.decode(message.value);
  },
  toProto(message: QueryAllInterimTemplateRequest): Uint8Array {
    return QueryAllInterimTemplateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllInterimTemplateRequest): QueryAllInterimTemplateRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllInterimTemplateRequest",
      value: QueryAllInterimTemplateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllInterimTemplateResponse(): QueryAllInterimTemplateResponse {
  return {
    interimTemplate: [],
    pagination: undefined
  };
}
/**
 * QueryAllInterimTemplateResponse defines the QueryAllInterimTemplateResponse message.
 * @name QueryAllInterimTemplateResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllInterimTemplateResponse
 */
export const QueryAllInterimTemplateResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllInterimTemplateResponse",
  encode(message: QueryAllInterimTemplateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.interimTemplate) {
      InterimTemplate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllInterimTemplateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllInterimTemplateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interimTemplate.push(InterimTemplate.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllInterimTemplateResponse>): QueryAllInterimTemplateResponse {
    const message = createBaseQueryAllInterimTemplateResponse();
    message.interimTemplate = object.interimTemplate?.map(e => InterimTemplate.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllInterimTemplateResponseAmino): QueryAllInterimTemplateResponse {
    const message = createBaseQueryAllInterimTemplateResponse();
    message.interimTemplate = object.interim_template?.map(e => InterimTemplate.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllInterimTemplateResponse): QueryAllInterimTemplateResponseAmino {
    const obj: any = {};
    if (message.interimTemplate) {
      obj.interim_template = message.interimTemplate.map(e => e ? InterimTemplate.toAmino(e) : undefined);
    } else {
      obj.interim_template = message.interimTemplate;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllInterimTemplateResponseAminoMsg): QueryAllInterimTemplateResponse {
    return QueryAllInterimTemplateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllInterimTemplateResponseProtoMsg): QueryAllInterimTemplateResponse {
    return QueryAllInterimTemplateResponse.decode(message.value);
  },
  toProto(message: QueryAllInterimTemplateResponse): Uint8Array {
    return QueryAllInterimTemplateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllInterimTemplateResponse): QueryAllInterimTemplateResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllInterimTemplateResponse",
      value: QueryAllInterimTemplateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMembersByTrustLevelRequest(): QueryMembersByTrustLevelRequest {
  return {
    trustLevel: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryMembersByTrustLevelRequest defines the QueryMembersByTrustLevelRequest message.
 * @name QueryMembersByTrustLevelRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMembersByTrustLevelRequest
 */
export const QueryMembersByTrustLevelRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryMembersByTrustLevelRequest",
  encode(message: QueryMembersByTrustLevelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.trustLevel !== BigInt(0)) {
      writer.uint32(8).uint64(message.trustLevel);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMembersByTrustLevelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMembersByTrustLevelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trustLevel = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryMembersByTrustLevelRequest>): QueryMembersByTrustLevelRequest {
    const message = createBaseQueryMembersByTrustLevelRequest();
    message.trustLevel = object.trustLevel !== undefined && object.trustLevel !== null ? BigInt(object.trustLevel.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMembersByTrustLevelRequestAmino): QueryMembersByTrustLevelRequest {
    const message = createBaseQueryMembersByTrustLevelRequest();
    if (object.trust_level !== undefined && object.trust_level !== null) {
      message.trustLevel = BigInt(object.trust_level);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMembersByTrustLevelRequest): QueryMembersByTrustLevelRequestAmino {
    const obj: any = {};
    obj.trust_level = message.trustLevel !== BigInt(0) ? message.trustLevel?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMembersByTrustLevelRequestAminoMsg): QueryMembersByTrustLevelRequest {
    return QueryMembersByTrustLevelRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMembersByTrustLevelRequestProtoMsg): QueryMembersByTrustLevelRequest {
    return QueryMembersByTrustLevelRequest.decode(message.value);
  },
  toProto(message: QueryMembersByTrustLevelRequest): Uint8Array {
    return QueryMembersByTrustLevelRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMembersByTrustLevelRequest): QueryMembersByTrustLevelRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryMembersByTrustLevelRequest",
      value: QueryMembersByTrustLevelRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMembersByTrustLevelResponse(): QueryMembersByTrustLevelResponse {
  return {
    address: "",
    dreamBalance: "",
    pagination: undefined
  };
}
/**
 * QueryMembersByTrustLevelResponse defines the QueryMembersByTrustLevelResponse message.
 * @name QueryMembersByTrustLevelResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMembersByTrustLevelResponse
 */
export const QueryMembersByTrustLevelResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryMembersByTrustLevelResponse",
  encode(message: QueryMembersByTrustLevelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.dreamBalance !== "") {
      writer.uint32(18).string(message.dreamBalance);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMembersByTrustLevelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMembersByTrustLevelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.dreamBalance = reader.string();
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
  fromPartial(object: DeepPartial<QueryMembersByTrustLevelResponse>): QueryMembersByTrustLevelResponse {
    const message = createBaseQueryMembersByTrustLevelResponse();
    message.address = object.address ?? "";
    message.dreamBalance = object.dreamBalance ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMembersByTrustLevelResponseAmino): QueryMembersByTrustLevelResponse {
    const message = createBaseQueryMembersByTrustLevelResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.dream_balance !== undefined && object.dream_balance !== null) {
      message.dreamBalance = object.dream_balance;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMembersByTrustLevelResponse): QueryMembersByTrustLevelResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.dream_balance = message.dreamBalance === "" ? undefined : message.dreamBalance;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMembersByTrustLevelResponseAminoMsg): QueryMembersByTrustLevelResponse {
    return QueryMembersByTrustLevelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMembersByTrustLevelResponseProtoMsg): QueryMembersByTrustLevelResponse {
    return QueryMembersByTrustLevelResponse.decode(message.value);
  },
  toProto(message: QueryMembersByTrustLevelResponse): Uint8Array {
    return QueryMembersByTrustLevelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMembersByTrustLevelResponse): QueryMembersByTrustLevelResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryMembersByTrustLevelResponse",
      value: QueryMembersByTrustLevelResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInvitationsByInviterRequest(): QueryInvitationsByInviterRequest {
  return {
    inviter: "",
    pagination: undefined
  };
}
/**
 * QueryInvitationsByInviterRequest defines the QueryInvitationsByInviterRequest message.
 * @name QueryInvitationsByInviterRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInvitationsByInviterRequest
 */
export const QueryInvitationsByInviterRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryInvitationsByInviterRequest",
  encode(message: QueryInvitationsByInviterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inviter !== "") {
      writer.uint32(10).string(message.inviter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInvitationsByInviterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInvitationsByInviterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inviter = reader.string();
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
  fromPartial(object: DeepPartial<QueryInvitationsByInviterRequest>): QueryInvitationsByInviterRequest {
    const message = createBaseQueryInvitationsByInviterRequest();
    message.inviter = object.inviter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInvitationsByInviterRequestAmino): QueryInvitationsByInviterRequest {
    const message = createBaseQueryInvitationsByInviterRequest();
    if (object.inviter !== undefined && object.inviter !== null) {
      message.inviter = object.inviter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInvitationsByInviterRequest): QueryInvitationsByInviterRequestAmino {
    const obj: any = {};
    obj.inviter = message.inviter === "" ? undefined : message.inviter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInvitationsByInviterRequestAminoMsg): QueryInvitationsByInviterRequest {
    return QueryInvitationsByInviterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInvitationsByInviterRequestProtoMsg): QueryInvitationsByInviterRequest {
    return QueryInvitationsByInviterRequest.decode(message.value);
  },
  toProto(message: QueryInvitationsByInviterRequest): Uint8Array {
    return QueryInvitationsByInviterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInvitationsByInviterRequest): QueryInvitationsByInviterRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInvitationsByInviterRequest",
      value: QueryInvitationsByInviterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInvitationsByInviterResponse(): QueryInvitationsByInviterResponse {
  return {
    invitationId: BigInt(0),
    inviteeAddress: "",
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryInvitationsByInviterResponse defines the QueryInvitationsByInviterResponse message.
 * @name QueryInvitationsByInviterResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInvitationsByInviterResponse
 */
export const QueryInvitationsByInviterResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryInvitationsByInviterResponse",
  encode(message: QueryInvitationsByInviterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.invitationId !== BigInt(0)) {
      writer.uint32(8).uint64(message.invitationId);
    }
    if (message.inviteeAddress !== "") {
      writer.uint32(18).string(message.inviteeAddress);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInvitationsByInviterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInvitationsByInviterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invitationId = reader.uint64();
          break;
        case 2:
          message.inviteeAddress = reader.string();
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
  fromPartial(object: DeepPartial<QueryInvitationsByInviterResponse>): QueryInvitationsByInviterResponse {
    const message = createBaseQueryInvitationsByInviterResponse();
    message.invitationId = object.invitationId !== undefined && object.invitationId !== null ? BigInt(object.invitationId.toString()) : BigInt(0);
    message.inviteeAddress = object.inviteeAddress ?? "";
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInvitationsByInviterResponseAmino): QueryInvitationsByInviterResponse {
    const message = createBaseQueryInvitationsByInviterResponse();
    if (object.invitation_id !== undefined && object.invitation_id !== null) {
      message.invitationId = BigInt(object.invitation_id);
    }
    if (object.invitee_address !== undefined && object.invitee_address !== null) {
      message.inviteeAddress = object.invitee_address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInvitationsByInviterResponse): QueryInvitationsByInviterResponseAmino {
    const obj: any = {};
    obj.invitation_id = message.invitationId !== BigInt(0) ? message.invitationId?.toString() : undefined;
    obj.invitee_address = message.inviteeAddress === "" ? undefined : message.inviteeAddress;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInvitationsByInviterResponseAminoMsg): QueryInvitationsByInviterResponse {
    return QueryInvitationsByInviterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInvitationsByInviterResponseProtoMsg): QueryInvitationsByInviterResponse {
    return QueryInvitationsByInviterResponse.decode(message.value);
  },
  toProto(message: QueryInvitationsByInviterResponse): Uint8Array {
    return QueryInvitationsByInviterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInvitationsByInviterResponse): QueryInvitationsByInviterResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInvitationsByInviterResponse",
      value: QueryInvitationsByInviterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInterimsByAssigneeRequest(): QueryInterimsByAssigneeRequest {
  return {
    assignee: "",
    pagination: undefined
  };
}
/**
 * QueryInterimsByAssigneeRequest defines the QueryInterimsByAssigneeRequest message.
 * @name QueryInterimsByAssigneeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByAssigneeRequest
 */
export const QueryInterimsByAssigneeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryInterimsByAssigneeRequest",
  encode(message: QueryInterimsByAssigneeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assignee !== "") {
      writer.uint32(10).string(message.assignee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterimsByAssigneeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterimsByAssigneeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assignee = reader.string();
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
  fromPartial(object: DeepPartial<QueryInterimsByAssigneeRequest>): QueryInterimsByAssigneeRequest {
    const message = createBaseQueryInterimsByAssigneeRequest();
    message.assignee = object.assignee ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInterimsByAssigneeRequestAmino): QueryInterimsByAssigneeRequest {
    const message = createBaseQueryInterimsByAssigneeRequest();
    if (object.assignee !== undefined && object.assignee !== null) {
      message.assignee = object.assignee;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInterimsByAssigneeRequest): QueryInterimsByAssigneeRequestAmino {
    const obj: any = {};
    obj.assignee = message.assignee === "" ? undefined : message.assignee;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInterimsByAssigneeRequestAminoMsg): QueryInterimsByAssigneeRequest {
    return QueryInterimsByAssigneeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterimsByAssigneeRequestProtoMsg): QueryInterimsByAssigneeRequest {
    return QueryInterimsByAssigneeRequest.decode(message.value);
  },
  toProto(message: QueryInterimsByAssigneeRequest): Uint8Array {
    return QueryInterimsByAssigneeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterimsByAssigneeRequest): QueryInterimsByAssigneeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInterimsByAssigneeRequest",
      value: QueryInterimsByAssigneeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInterimsByAssigneeResponse(): QueryInterimsByAssigneeResponse {
  return {
    interimId: BigInt(0),
    interimType: BigInt(0),
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryInterimsByAssigneeResponse defines the QueryInterimsByAssigneeResponse message.
 * @name QueryInterimsByAssigneeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByAssigneeResponse
 */
export const QueryInterimsByAssigneeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryInterimsByAssigneeResponse",
  encode(message: QueryInterimsByAssigneeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interimId !== BigInt(0)) {
      writer.uint32(8).uint64(message.interimId);
    }
    if (message.interimType !== BigInt(0)) {
      writer.uint32(16).uint64(message.interimType);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterimsByAssigneeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterimsByAssigneeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interimId = reader.uint64();
          break;
        case 2:
          message.interimType = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryInterimsByAssigneeResponse>): QueryInterimsByAssigneeResponse {
    const message = createBaseQueryInterimsByAssigneeResponse();
    message.interimId = object.interimId !== undefined && object.interimId !== null ? BigInt(object.interimId.toString()) : BigInt(0);
    message.interimType = object.interimType !== undefined && object.interimType !== null ? BigInt(object.interimType.toString()) : BigInt(0);
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInterimsByAssigneeResponseAmino): QueryInterimsByAssigneeResponse {
    const message = createBaseQueryInterimsByAssigneeResponse();
    if (object.interim_id !== undefined && object.interim_id !== null) {
      message.interimId = BigInt(object.interim_id);
    }
    if (object.interim_type !== undefined && object.interim_type !== null) {
      message.interimType = BigInt(object.interim_type);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInterimsByAssigneeResponse): QueryInterimsByAssigneeResponseAmino {
    const obj: any = {};
    obj.interim_id = message.interimId !== BigInt(0) ? message.interimId?.toString() : undefined;
    obj.interim_type = message.interimType !== BigInt(0) ? message.interimType?.toString() : undefined;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInterimsByAssigneeResponseAminoMsg): QueryInterimsByAssigneeResponse {
    return QueryInterimsByAssigneeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterimsByAssigneeResponseProtoMsg): QueryInterimsByAssigneeResponse {
    return QueryInterimsByAssigneeResponse.decode(message.value);
  },
  toProto(message: QueryInterimsByAssigneeResponse): Uint8Array {
    return QueryInterimsByAssigneeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterimsByAssigneeResponse): QueryInterimsByAssigneeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInterimsByAssigneeResponse",
      value: QueryInterimsByAssigneeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInterimsByTypeRequest(): QueryInterimsByTypeRequest {
  return {
    interimType: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryInterimsByTypeRequest defines the QueryInterimsByTypeRequest message.
 * @name QueryInterimsByTypeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByTypeRequest
 */
export const QueryInterimsByTypeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryInterimsByTypeRequest",
  encode(message: QueryInterimsByTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interimType !== BigInt(0)) {
      writer.uint32(8).uint64(message.interimType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterimsByTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterimsByTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interimType = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryInterimsByTypeRequest>): QueryInterimsByTypeRequest {
    const message = createBaseQueryInterimsByTypeRequest();
    message.interimType = object.interimType !== undefined && object.interimType !== null ? BigInt(object.interimType.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInterimsByTypeRequestAmino): QueryInterimsByTypeRequest {
    const message = createBaseQueryInterimsByTypeRequest();
    if (object.interim_type !== undefined && object.interim_type !== null) {
      message.interimType = BigInt(object.interim_type);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInterimsByTypeRequest): QueryInterimsByTypeRequestAmino {
    const obj: any = {};
    obj.interim_type = message.interimType !== BigInt(0) ? message.interimType?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInterimsByTypeRequestAminoMsg): QueryInterimsByTypeRequest {
    return QueryInterimsByTypeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterimsByTypeRequestProtoMsg): QueryInterimsByTypeRequest {
    return QueryInterimsByTypeRequest.decode(message.value);
  },
  toProto(message: QueryInterimsByTypeRequest): Uint8Array {
    return QueryInterimsByTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterimsByTypeRequest): QueryInterimsByTypeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInterimsByTypeRequest",
      value: QueryInterimsByTypeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInterimsByTypeResponse(): QueryInterimsByTypeResponse {
  return {
    interimId: BigInt(0),
    status: BigInt(0),
    deadline: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryInterimsByTypeResponse defines the QueryInterimsByTypeResponse message.
 * @name QueryInterimsByTypeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByTypeResponse
 */
export const QueryInterimsByTypeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryInterimsByTypeResponse",
  encode(message: QueryInterimsByTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interimId !== BigInt(0)) {
      writer.uint32(8).uint64(message.interimId);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(16).uint64(message.status);
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(24).int64(message.deadline);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterimsByTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterimsByTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interimId = reader.uint64();
          break;
        case 2:
          message.status = reader.uint64();
          break;
        case 3:
          message.deadline = reader.int64();
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
  fromPartial(object: DeepPartial<QueryInterimsByTypeResponse>): QueryInterimsByTypeResponse {
    const message = createBaseQueryInterimsByTypeResponse();
    message.interimId = object.interimId !== undefined && object.interimId !== null ? BigInt(object.interimId.toString()) : BigInt(0);
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInterimsByTypeResponseAmino): QueryInterimsByTypeResponse {
    const message = createBaseQueryInterimsByTypeResponse();
    if (object.interim_id !== undefined && object.interim_id !== null) {
      message.interimId = BigInt(object.interim_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInterimsByTypeResponse): QueryInterimsByTypeResponseAmino {
    const obj: any = {};
    obj.interim_id = message.interimId !== BigInt(0) ? message.interimId?.toString() : undefined;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.deadline = message.deadline !== BigInt(0) ? message.deadline?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInterimsByTypeResponseAminoMsg): QueryInterimsByTypeResponse {
    return QueryInterimsByTypeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterimsByTypeResponseProtoMsg): QueryInterimsByTypeResponse {
    return QueryInterimsByTypeResponse.decode(message.value);
  },
  toProto(message: QueryInterimsByTypeResponse): Uint8Array {
    return QueryInterimsByTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterimsByTypeResponse): QueryInterimsByTypeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInterimsByTypeResponse",
      value: QueryInterimsByTypeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInterimsByReferenceRequest(): QueryInterimsByReferenceRequest {
  return {
    referenceType: "",
    referenceId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryInterimsByReferenceRequest defines the QueryInterimsByReferenceRequest message.
 * @name QueryInterimsByReferenceRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByReferenceRequest
 */
export const QueryInterimsByReferenceRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryInterimsByReferenceRequest",
  encode(message: QueryInterimsByReferenceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.referenceType !== "") {
      writer.uint32(10).string(message.referenceType);
    }
    if (message.referenceId !== BigInt(0)) {
      writer.uint32(16).uint64(message.referenceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterimsByReferenceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterimsByReferenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referenceType = reader.string();
          break;
        case 2:
          message.referenceId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryInterimsByReferenceRequest>): QueryInterimsByReferenceRequest {
    const message = createBaseQueryInterimsByReferenceRequest();
    message.referenceType = object.referenceType ?? "";
    message.referenceId = object.referenceId !== undefined && object.referenceId !== null ? BigInt(object.referenceId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInterimsByReferenceRequestAmino): QueryInterimsByReferenceRequest {
    const message = createBaseQueryInterimsByReferenceRequest();
    if (object.reference_type !== undefined && object.reference_type !== null) {
      message.referenceType = object.reference_type;
    }
    if (object.reference_id !== undefined && object.reference_id !== null) {
      message.referenceId = BigInt(object.reference_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInterimsByReferenceRequest): QueryInterimsByReferenceRequestAmino {
    const obj: any = {};
    obj.reference_type = message.referenceType === "" ? undefined : message.referenceType;
    obj.reference_id = message.referenceId !== BigInt(0) ? message.referenceId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInterimsByReferenceRequestAminoMsg): QueryInterimsByReferenceRequest {
    return QueryInterimsByReferenceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterimsByReferenceRequestProtoMsg): QueryInterimsByReferenceRequest {
    return QueryInterimsByReferenceRequest.decode(message.value);
  },
  toProto(message: QueryInterimsByReferenceRequest): Uint8Array {
    return QueryInterimsByReferenceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterimsByReferenceRequest): QueryInterimsByReferenceRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInterimsByReferenceRequest",
      value: QueryInterimsByReferenceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInterimsByReferenceResponse(): QueryInterimsByReferenceResponse {
  return {
    interimId: BigInt(0),
    interimType: BigInt(0),
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryInterimsByReferenceResponse defines the QueryInterimsByReferenceResponse message.
 * @name QueryInterimsByReferenceResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInterimsByReferenceResponse
 */
export const QueryInterimsByReferenceResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryInterimsByReferenceResponse",
  encode(message: QueryInterimsByReferenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interimId !== BigInt(0)) {
      writer.uint32(8).uint64(message.interimId);
    }
    if (message.interimType !== BigInt(0)) {
      writer.uint32(16).uint64(message.interimType);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterimsByReferenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterimsByReferenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interimId = reader.uint64();
          break;
        case 2:
          message.interimType = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryInterimsByReferenceResponse>): QueryInterimsByReferenceResponse {
    const message = createBaseQueryInterimsByReferenceResponse();
    message.interimId = object.interimId !== undefined && object.interimId !== null ? BigInt(object.interimId.toString()) : BigInt(0);
    message.interimType = object.interimType !== undefined && object.interimType !== null ? BigInt(object.interimType.toString()) : BigInt(0);
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInterimsByReferenceResponseAmino): QueryInterimsByReferenceResponse {
    const message = createBaseQueryInterimsByReferenceResponse();
    if (object.interim_id !== undefined && object.interim_id !== null) {
      message.interimId = BigInt(object.interim_id);
    }
    if (object.interim_type !== undefined && object.interim_type !== null) {
      message.interimType = BigInt(object.interim_type);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInterimsByReferenceResponse): QueryInterimsByReferenceResponseAmino {
    const obj: any = {};
    obj.interim_id = message.interimId !== BigInt(0) ? message.interimId?.toString() : undefined;
    obj.interim_type = message.interimType !== BigInt(0) ? message.interimType?.toString() : undefined;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInterimsByReferenceResponseAminoMsg): QueryInterimsByReferenceResponse {
    return QueryInterimsByReferenceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterimsByReferenceResponseProtoMsg): QueryInterimsByReferenceResponse {
    return QueryInterimsByReferenceResponse.decode(message.value);
  },
  toProto(message: QueryInterimsByReferenceResponse): Uint8Array {
    return QueryInterimsByReferenceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterimsByReferenceResponse): QueryInterimsByReferenceResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInterimsByReferenceResponse",
      value: QueryInterimsByReferenceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProjectsByCouncilRequest(): QueryProjectsByCouncilRequest {
  return {
    council: "",
    pagination: undefined
  };
}
/**
 * QueryProjectsByCouncilRequest defines the QueryProjectsByCouncilRequest message.
 * @name QueryProjectsByCouncilRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCouncilRequest
 */
export const QueryProjectsByCouncilRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryProjectsByCouncilRequest",
  encode(message: QueryProjectsByCouncilRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.council !== "") {
      writer.uint32(10).string(message.council);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectsByCouncilRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsByCouncilRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.council = reader.string();
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
  fromPartial(object: DeepPartial<QueryProjectsByCouncilRequest>): QueryProjectsByCouncilRequest {
    const message = createBaseQueryProjectsByCouncilRequest();
    message.council = object.council ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProjectsByCouncilRequestAmino): QueryProjectsByCouncilRequest {
    const message = createBaseQueryProjectsByCouncilRequest();
    if (object.council !== undefined && object.council !== null) {
      message.council = object.council;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProjectsByCouncilRequest): QueryProjectsByCouncilRequestAmino {
    const obj: any = {};
    obj.council = message.council === "" ? undefined : message.council;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProjectsByCouncilRequestAminoMsg): QueryProjectsByCouncilRequest {
    return QueryProjectsByCouncilRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProjectsByCouncilRequestProtoMsg): QueryProjectsByCouncilRequest {
    return QueryProjectsByCouncilRequest.decode(message.value);
  },
  toProto(message: QueryProjectsByCouncilRequest): Uint8Array {
    return QueryProjectsByCouncilRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProjectsByCouncilRequest): QueryProjectsByCouncilRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryProjectsByCouncilRequest",
      value: QueryProjectsByCouncilRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProjectsByCouncilResponse(): QueryProjectsByCouncilResponse {
  return {
    projectId: BigInt(0),
    name: "",
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryProjectsByCouncilResponse defines the QueryProjectsByCouncilResponse message.
 * @name QueryProjectsByCouncilResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCouncilResponse
 */
export const QueryProjectsByCouncilResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryProjectsByCouncilResponse",
  encode(message: QueryProjectsByCouncilResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== BigInt(0)) {
      writer.uint32(8).uint64(message.projectId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectsByCouncilResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsByCouncilResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
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
  fromPartial(object: DeepPartial<QueryProjectsByCouncilResponse>): QueryProjectsByCouncilResponse {
    const message = createBaseQueryProjectsByCouncilResponse();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProjectsByCouncilResponseAmino): QueryProjectsByCouncilResponse {
    const message = createBaseQueryProjectsByCouncilResponse();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = BigInt(object.project_id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProjectsByCouncilResponse): QueryProjectsByCouncilResponseAmino {
    const obj: any = {};
    obj.project_id = message.projectId !== BigInt(0) ? message.projectId?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProjectsByCouncilResponseAminoMsg): QueryProjectsByCouncilResponse {
    return QueryProjectsByCouncilResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProjectsByCouncilResponseProtoMsg): QueryProjectsByCouncilResponse {
    return QueryProjectsByCouncilResponse.decode(message.value);
  },
  toProto(message: QueryProjectsByCouncilResponse): Uint8Array {
    return QueryProjectsByCouncilResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProjectsByCouncilResponse): QueryProjectsByCouncilResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryProjectsByCouncilResponse",
      value: QueryProjectsByCouncilResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInitiativesByProjectRequest(): QueryInitiativesByProjectRequest {
  return {
    projectId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryInitiativesByProjectRequest defines the QueryInitiativesByProjectRequest message.
 * @name QueryInitiativesByProjectRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByProjectRequest
 */
export const QueryInitiativesByProjectRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByProjectRequest",
  encode(message: QueryInitiativesByProjectRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== BigInt(0)) {
      writer.uint32(8).uint64(message.projectId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInitiativesByProjectRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitiativesByProjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryInitiativesByProjectRequest>): QueryInitiativesByProjectRequest {
    const message = createBaseQueryInitiativesByProjectRequest();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInitiativesByProjectRequestAmino): QueryInitiativesByProjectRequest {
    const message = createBaseQueryInitiativesByProjectRequest();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = BigInt(object.project_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInitiativesByProjectRequest): QueryInitiativesByProjectRequestAmino {
    const obj: any = {};
    obj.project_id = message.projectId !== BigInt(0) ? message.projectId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInitiativesByProjectRequestAminoMsg): QueryInitiativesByProjectRequest {
    return QueryInitiativesByProjectRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInitiativesByProjectRequestProtoMsg): QueryInitiativesByProjectRequest {
    return QueryInitiativesByProjectRequest.decode(message.value);
  },
  toProto(message: QueryInitiativesByProjectRequest): Uint8Array {
    return QueryInitiativesByProjectRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInitiativesByProjectRequest): QueryInitiativesByProjectRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInitiativesByProjectRequest",
      value: QueryInitiativesByProjectRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInitiativesByProjectResponse(): QueryInitiativesByProjectResponse {
  return {
    initiatives: [],
    pagination: undefined
  };
}
/**
 * QueryInitiativesByProjectResponse defines the QueryInitiativesByProjectResponse message.
 * @name QueryInitiativesByProjectResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByProjectResponse
 */
export const QueryInitiativesByProjectResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByProjectResponse",
  encode(message: QueryInitiativesByProjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.initiatives) {
      Initiative.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInitiativesByProjectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitiativesByProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiatives.push(Initiative.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryInitiativesByProjectResponse>): QueryInitiativesByProjectResponse {
    const message = createBaseQueryInitiativesByProjectResponse();
    message.initiatives = object.initiatives?.map(e => Initiative.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInitiativesByProjectResponseAmino): QueryInitiativesByProjectResponse {
    const message = createBaseQueryInitiativesByProjectResponse();
    message.initiatives = object.initiatives?.map(e => Initiative.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInitiativesByProjectResponse): QueryInitiativesByProjectResponseAmino {
    const obj: any = {};
    if (message.initiatives) {
      obj.initiatives = message.initiatives.map(e => e ? Initiative.toAmino(e) : undefined);
    } else {
      obj.initiatives = message.initiatives;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInitiativesByProjectResponseAminoMsg): QueryInitiativesByProjectResponse {
    return QueryInitiativesByProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInitiativesByProjectResponseProtoMsg): QueryInitiativesByProjectResponse {
    return QueryInitiativesByProjectResponse.decode(message.value);
  },
  toProto(message: QueryInitiativesByProjectResponse): Uint8Array {
    return QueryInitiativesByProjectResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInitiativesByProjectResponse): QueryInitiativesByProjectResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInitiativesByProjectResponse",
      value: QueryInitiativesByProjectResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInitiativesByAssigneeRequest(): QueryInitiativesByAssigneeRequest {
  return {
    assignee: "",
    pagination: undefined
  };
}
/**
 * QueryInitiativesByAssigneeRequest defines the QueryInitiativesByAssigneeRequest message.
 * @name QueryInitiativesByAssigneeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByAssigneeRequest
 */
export const QueryInitiativesByAssigneeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByAssigneeRequest",
  encode(message: QueryInitiativesByAssigneeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assignee !== "") {
      writer.uint32(10).string(message.assignee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInitiativesByAssigneeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitiativesByAssigneeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assignee = reader.string();
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
  fromPartial(object: DeepPartial<QueryInitiativesByAssigneeRequest>): QueryInitiativesByAssigneeRequest {
    const message = createBaseQueryInitiativesByAssigneeRequest();
    message.assignee = object.assignee ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInitiativesByAssigneeRequestAmino): QueryInitiativesByAssigneeRequest {
    const message = createBaseQueryInitiativesByAssigneeRequest();
    if (object.assignee !== undefined && object.assignee !== null) {
      message.assignee = object.assignee;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInitiativesByAssigneeRequest): QueryInitiativesByAssigneeRequestAmino {
    const obj: any = {};
    obj.assignee = message.assignee === "" ? undefined : message.assignee;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInitiativesByAssigneeRequestAminoMsg): QueryInitiativesByAssigneeRequest {
    return QueryInitiativesByAssigneeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInitiativesByAssigneeRequestProtoMsg): QueryInitiativesByAssigneeRequest {
    return QueryInitiativesByAssigneeRequest.decode(message.value);
  },
  toProto(message: QueryInitiativesByAssigneeRequest): Uint8Array {
    return QueryInitiativesByAssigneeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInitiativesByAssigneeRequest): QueryInitiativesByAssigneeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInitiativesByAssigneeRequest",
      value: QueryInitiativesByAssigneeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInitiativesByAssigneeResponse(): QueryInitiativesByAssigneeResponse {
  return {
    initiativeId: BigInt(0),
    title: "",
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryInitiativesByAssigneeResponse defines the QueryInitiativesByAssigneeResponse message.
 * @name QueryInitiativesByAssigneeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByAssigneeResponse
 */
export const QueryInitiativesByAssigneeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByAssigneeResponse",
  encode(message: QueryInitiativesByAssigneeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(24).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInitiativesByAssigneeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitiativesByAssigneeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiativeId = reader.uint64();
          break;
        case 2:
          message.title = reader.string();
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
  fromPartial(object: DeepPartial<QueryInitiativesByAssigneeResponse>): QueryInitiativesByAssigneeResponse {
    const message = createBaseQueryInitiativesByAssigneeResponse();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.title = object.title ?? "";
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInitiativesByAssigneeResponseAmino): QueryInitiativesByAssigneeResponse {
    const message = createBaseQueryInitiativesByAssigneeResponse();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInitiativesByAssigneeResponse): QueryInitiativesByAssigneeResponseAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInitiativesByAssigneeResponseAminoMsg): QueryInitiativesByAssigneeResponse {
    return QueryInitiativesByAssigneeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInitiativesByAssigneeResponseProtoMsg): QueryInitiativesByAssigneeResponse {
    return QueryInitiativesByAssigneeResponse.decode(message.value);
  },
  toProto(message: QueryInitiativesByAssigneeResponse): Uint8Array {
    return QueryInitiativesByAssigneeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInitiativesByAssigneeResponse): QueryInitiativesByAssigneeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInitiativesByAssigneeResponse",
      value: QueryInitiativesByAssigneeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAvailableInitiativesRequest(): QueryAvailableInitiativesRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAvailableInitiativesRequest defines the QueryAvailableInitiativesRequest message.
 * @name QueryAvailableInitiativesRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAvailableInitiativesRequest
 */
export const QueryAvailableInitiativesRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAvailableInitiativesRequest",
  encode(message: QueryAvailableInitiativesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAvailableInitiativesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAvailableInitiativesRequest();
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
  fromPartial(object: DeepPartial<QueryAvailableInitiativesRequest>): QueryAvailableInitiativesRequest {
    const message = createBaseQueryAvailableInitiativesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAvailableInitiativesRequestAmino): QueryAvailableInitiativesRequest {
    const message = createBaseQueryAvailableInitiativesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAvailableInitiativesRequest): QueryAvailableInitiativesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAvailableInitiativesRequestAminoMsg): QueryAvailableInitiativesRequest {
    return QueryAvailableInitiativesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAvailableInitiativesRequestProtoMsg): QueryAvailableInitiativesRequest {
    return QueryAvailableInitiativesRequest.decode(message.value);
  },
  toProto(message: QueryAvailableInitiativesRequest): Uint8Array {
    return QueryAvailableInitiativesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAvailableInitiativesRequest): QueryAvailableInitiativesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAvailableInitiativesRequest",
      value: QueryAvailableInitiativesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAvailableInitiativesResponse(): QueryAvailableInitiativesResponse {
  return {
    initiativeId: BigInt(0),
    title: "",
    tier: BigInt(0),
    budget: "",
    pagination: undefined
  };
}
/**
 * QueryAvailableInitiativesResponse defines the QueryAvailableInitiativesResponse message.
 * @name QueryAvailableInitiativesResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAvailableInitiativesResponse
 */
export const QueryAvailableInitiativesResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAvailableInitiativesResponse",
  encode(message: QueryAvailableInitiativesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.tier !== BigInt(0)) {
      writer.uint32(24).uint64(message.tier);
    }
    if (message.budget !== "") {
      writer.uint32(34).string(message.budget);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAvailableInitiativesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAvailableInitiativesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiativeId = reader.uint64();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.tier = reader.uint64();
          break;
        case 4:
          message.budget = reader.string();
          break;
        case 5:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAvailableInitiativesResponse>): QueryAvailableInitiativesResponse {
    const message = createBaseQueryAvailableInitiativesResponse();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.title = object.title ?? "";
    message.tier = object.tier !== undefined && object.tier !== null ? BigInt(object.tier.toString()) : BigInt(0);
    message.budget = object.budget ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAvailableInitiativesResponseAmino): QueryAvailableInitiativesResponse {
    const message = createBaseQueryAvailableInitiativesResponse();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.tier !== undefined && object.tier !== null) {
      message.tier = BigInt(object.tier);
    }
    if (object.budget !== undefined && object.budget !== null) {
      message.budget = object.budget;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAvailableInitiativesResponse): QueryAvailableInitiativesResponseAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.tier = message.tier !== BigInt(0) ? message.tier?.toString() : undefined;
    obj.budget = message.budget === "" ? undefined : message.budget;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAvailableInitiativesResponseAminoMsg): QueryAvailableInitiativesResponse {
    return QueryAvailableInitiativesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAvailableInitiativesResponseProtoMsg): QueryAvailableInitiativesResponse {
    return QueryAvailableInitiativesResponse.decode(message.value);
  },
  toProto(message: QueryAvailableInitiativesResponse): Uint8Array {
    return QueryAvailableInitiativesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAvailableInitiativesResponse): QueryAvailableInitiativesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAvailableInitiativesResponse",
      value: QueryAvailableInitiativesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakesByStakerRequest(): QueryStakesByStakerRequest {
  return {
    staker: "",
    pagination: undefined
  };
}
/**
 * QueryStakesByStakerRequest defines the QueryStakesByStakerRequest message.
 * @name QueryStakesByStakerRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryStakesByStakerRequest
 */
export const QueryStakesByStakerRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryStakesByStakerRequest",
  encode(message: QueryStakesByStakerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakesByStakerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakesByStakerRequest();
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
  fromPartial(object: DeepPartial<QueryStakesByStakerRequest>): QueryStakesByStakerRequest {
    const message = createBaseQueryStakesByStakerRequest();
    message.staker = object.staker ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryStakesByStakerRequestAmino): QueryStakesByStakerRequest {
    const message = createBaseQueryStakesByStakerRequest();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStakesByStakerRequest): QueryStakesByStakerRequestAmino {
    const obj: any = {};
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakesByStakerRequestAminoMsg): QueryStakesByStakerRequest {
    return QueryStakesByStakerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakesByStakerRequestProtoMsg): QueryStakesByStakerRequest {
    return QueryStakesByStakerRequest.decode(message.value);
  },
  toProto(message: QueryStakesByStakerRequest): Uint8Array {
    return QueryStakesByStakerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakesByStakerRequest): QueryStakesByStakerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryStakesByStakerRequest",
      value: QueryStakesByStakerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakesByStakerResponse(): QueryStakesByStakerResponse {
  return {
    stakeId: BigInt(0),
    targetType: BigInt(0),
    amount: "",
    pagination: undefined
  };
}
/**
 * QueryStakesByStakerResponse defines the QueryStakesByStakerResponse message.
 * @name QueryStakesByStakerResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryStakesByStakerResponse
 */
export const QueryStakesByStakerResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryStakesByStakerResponse",
  encode(message: QueryStakesByStakerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.stakeId);
    }
    if (message.targetType !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetType);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakesByStakerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakesByStakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeId = reader.uint64();
          break;
        case 2:
          message.targetType = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryStakesByStakerResponse>): QueryStakesByStakerResponse {
    const message = createBaseQueryStakesByStakerResponse();
    message.stakeId = object.stakeId !== undefined && object.stakeId !== null ? BigInt(object.stakeId.toString()) : BigInt(0);
    message.targetType = object.targetType !== undefined && object.targetType !== null ? BigInt(object.targetType.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryStakesByStakerResponseAmino): QueryStakesByStakerResponse {
    const message = createBaseQueryStakesByStakerResponse();
    if (object.stake_id !== undefined && object.stake_id !== null) {
      message.stakeId = BigInt(object.stake_id);
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = BigInt(object.target_type);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStakesByStakerResponse): QueryStakesByStakerResponseAmino {
    const obj: any = {};
    obj.stake_id = message.stakeId !== BigInt(0) ? message.stakeId?.toString() : undefined;
    obj.target_type = message.targetType !== BigInt(0) ? message.targetType?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakesByStakerResponseAminoMsg): QueryStakesByStakerResponse {
    return QueryStakesByStakerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakesByStakerResponseProtoMsg): QueryStakesByStakerResponse {
    return QueryStakesByStakerResponse.decode(message.value);
  },
  toProto(message: QueryStakesByStakerResponse): Uint8Array {
    return QueryStakesByStakerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakesByStakerResponse): QueryStakesByStakerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryStakesByStakerResponse",
      value: QueryStakesByStakerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakesByTargetRequest(): QueryStakesByTargetRequest {
  return {
    targetType: BigInt(0),
    targetId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryStakesByTargetRequest defines the QueryStakesByTargetRequest message.
 * @name QueryStakesByTargetRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryStakesByTargetRequest
 */
export const QueryStakesByTargetRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryStakesByTargetRequest",
  encode(message: QueryStakesByTargetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.targetType !== BigInt(0)) {
      writer.uint32(8).uint64(message.targetType);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakesByTargetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakesByTargetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetType = reader.uint64();
          break;
        case 2:
          message.targetId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryStakesByTargetRequest>): QueryStakesByTargetRequest {
    const message = createBaseQueryStakesByTargetRequest();
    message.targetType = object.targetType !== undefined && object.targetType !== null ? BigInt(object.targetType.toString()) : BigInt(0);
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryStakesByTargetRequestAmino): QueryStakesByTargetRequest {
    const message = createBaseQueryStakesByTargetRequest();
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = BigInt(object.target_type);
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStakesByTargetRequest): QueryStakesByTargetRequestAmino {
    const obj: any = {};
    obj.target_type = message.targetType !== BigInt(0) ? message.targetType?.toString() : undefined;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakesByTargetRequestAminoMsg): QueryStakesByTargetRequest {
    return QueryStakesByTargetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakesByTargetRequestProtoMsg): QueryStakesByTargetRequest {
    return QueryStakesByTargetRequest.decode(message.value);
  },
  toProto(message: QueryStakesByTargetRequest): Uint8Array {
    return QueryStakesByTargetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakesByTargetRequest): QueryStakesByTargetRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryStakesByTargetRequest",
      value: QueryStakesByTargetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakesByTargetResponse(): QueryStakesByTargetResponse {
  return {
    stakes: [],
    pagination: undefined
  };
}
/**
 * QueryStakesByTargetResponse defines the QueryStakesByTargetResponse message.
 * @name QueryStakesByTargetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryStakesByTargetResponse
 */
export const QueryStakesByTargetResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryStakesByTargetResponse",
  encode(message: QueryStakesByTargetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakes) {
      Stake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakesByTargetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakesByTargetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakes.push(Stake.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryStakesByTargetResponse>): QueryStakesByTargetResponse {
    const message = createBaseQueryStakesByTargetResponse();
    message.stakes = object.stakes?.map(e => Stake.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryStakesByTargetResponseAmino): QueryStakesByTargetResponse {
    const message = createBaseQueryStakesByTargetResponse();
    message.stakes = object.stakes?.map(e => Stake.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStakesByTargetResponse): QueryStakesByTargetResponseAmino {
    const obj: any = {};
    if (message.stakes) {
      obj.stakes = message.stakes.map(e => e ? Stake.toAmino(e) : undefined);
    } else {
      obj.stakes = message.stakes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakesByTargetResponseAminoMsg): QueryStakesByTargetResponse {
    return QueryStakesByTargetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakesByTargetResponseProtoMsg): QueryStakesByTargetResponse {
    return QueryStakesByTargetResponse.decode(message.value);
  },
  toProto(message: QueryStakesByTargetResponse): Uint8Array {
    return QueryStakesByTargetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakesByTargetResponse): QueryStakesByTargetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryStakesByTargetResponse",
      value: QueryStakesByTargetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInitiativeConvictionRequest(): QueryInitiativeConvictionRequest {
  return {
    initiativeId: BigInt(0)
  };
}
/**
 * QueryInitiativeConvictionRequest defines the QueryInitiativeConvictionRequest message.
 * @name QueryInitiativeConvictionRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativeConvictionRequest
 */
export const QueryInitiativeConvictionRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativeConvictionRequest",
  encode(message: QueryInitiativeConvictionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInitiativeConvictionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitiativeConvictionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiativeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryInitiativeConvictionRequest>): QueryInitiativeConvictionRequest {
    const message = createBaseQueryInitiativeConvictionRequest();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryInitiativeConvictionRequestAmino): QueryInitiativeConvictionRequest {
    const message = createBaseQueryInitiativeConvictionRequest();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    return message;
  },
  toAmino(message: QueryInitiativeConvictionRequest): QueryInitiativeConvictionRequestAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInitiativeConvictionRequestAminoMsg): QueryInitiativeConvictionRequest {
    return QueryInitiativeConvictionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInitiativeConvictionRequestProtoMsg): QueryInitiativeConvictionRequest {
    return QueryInitiativeConvictionRequest.decode(message.value);
  },
  toProto(message: QueryInitiativeConvictionRequest): Uint8Array {
    return QueryInitiativeConvictionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInitiativeConvictionRequest): QueryInitiativeConvictionRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInitiativeConvictionRequest",
      value: QueryInitiativeConvictionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInitiativeConvictionResponse(): QueryInitiativeConvictionResponse {
  return {
    totalConviction: "",
    externalConviction: "",
    threshold: "",
    propagatedConviction: ""
  };
}
/**
 * QueryInitiativeConvictionResponse defines the QueryInitiativeConvictionResponse message.
 * @name QueryInitiativeConvictionResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativeConvictionResponse
 */
export const QueryInitiativeConvictionResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativeConvictionResponse",
  encode(message: QueryInitiativeConvictionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalConviction !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.totalConviction, 18).atomics);
    }
    if (message.externalConviction !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.externalConviction, 18).atomics);
    }
    if (message.threshold !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.threshold, 18).atomics);
    }
    if (message.propagatedConviction !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.propagatedConviction, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInitiativeConvictionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitiativeConvictionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalConviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.externalConviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.threshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.propagatedConviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryInitiativeConvictionResponse>): QueryInitiativeConvictionResponse {
    const message = createBaseQueryInitiativeConvictionResponse();
    message.totalConviction = object.totalConviction ?? "";
    message.externalConviction = object.externalConviction ?? "";
    message.threshold = object.threshold ?? "";
    message.propagatedConviction = object.propagatedConviction ?? "";
    return message;
  },
  fromAmino(object: QueryInitiativeConvictionResponseAmino): QueryInitiativeConvictionResponse {
    const message = createBaseQueryInitiativeConvictionResponse();
    if (object.total_conviction !== undefined && object.total_conviction !== null) {
      message.totalConviction = object.total_conviction;
    }
    if (object.external_conviction !== undefined && object.external_conviction !== null) {
      message.externalConviction = object.external_conviction;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.propagated_conviction !== undefined && object.propagated_conviction !== null) {
      message.propagatedConviction = object.propagated_conviction;
    }
    return message;
  },
  toAmino(message: QueryInitiativeConvictionResponse): QueryInitiativeConvictionResponseAmino {
    const obj: any = {};
    obj.total_conviction = message.totalConviction === "" ? undefined : message.totalConviction;
    obj.external_conviction = message.externalConviction === "" ? undefined : message.externalConviction;
    obj.threshold = message.threshold === "" ? undefined : message.threshold;
    obj.propagated_conviction = message.propagatedConviction === "" ? undefined : message.propagatedConviction;
    return obj;
  },
  fromAminoMsg(object: QueryInitiativeConvictionResponseAminoMsg): QueryInitiativeConvictionResponse {
    return QueryInitiativeConvictionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInitiativeConvictionResponseProtoMsg): QueryInitiativeConvictionResponse {
    return QueryInitiativeConvictionResponse.decode(message.value);
  },
  toProto(message: QueryInitiativeConvictionResponse): Uint8Array {
    return QueryInitiativeConvictionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInitiativeConvictionResponse): QueryInitiativeConvictionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInitiativeConvictionResponse",
      value: QueryInitiativeConvictionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryChallengesByInitiativeRequest(): QueryChallengesByInitiativeRequest {
  return {
    initiativeId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryChallengesByInitiativeRequest defines the QueryChallengesByInitiativeRequest message.
 * @name QueryChallengesByInitiativeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryChallengesByInitiativeRequest
 */
export const QueryChallengesByInitiativeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryChallengesByInitiativeRequest",
  encode(message: QueryChallengesByInitiativeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChallengesByInitiativeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChallengesByInitiativeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiativeId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryChallengesByInitiativeRequest>): QueryChallengesByInitiativeRequest {
    const message = createBaseQueryChallengesByInitiativeRequest();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryChallengesByInitiativeRequestAmino): QueryChallengesByInitiativeRequest {
    const message = createBaseQueryChallengesByInitiativeRequest();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryChallengesByInitiativeRequest): QueryChallengesByInitiativeRequestAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChallengesByInitiativeRequestAminoMsg): QueryChallengesByInitiativeRequest {
    return QueryChallengesByInitiativeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChallengesByInitiativeRequestProtoMsg): QueryChallengesByInitiativeRequest {
    return QueryChallengesByInitiativeRequest.decode(message.value);
  },
  toProto(message: QueryChallengesByInitiativeRequest): Uint8Array {
    return QueryChallengesByInitiativeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChallengesByInitiativeRequest): QueryChallengesByInitiativeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryChallengesByInitiativeRequest",
      value: QueryChallengesByInitiativeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryChallengesByInitiativeResponse(): QueryChallengesByInitiativeResponse {
  return {
    challengeId: BigInt(0),
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryChallengesByInitiativeResponse defines the QueryChallengesByInitiativeResponse message.
 * @name QueryChallengesByInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryChallengesByInitiativeResponse
 */
export const QueryChallengesByInitiativeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryChallengesByInitiativeResponse",
  encode(message: QueryChallengesByInitiativeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challengeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.challengeId);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(16).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChallengesByInitiativeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChallengesByInitiativeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeId = reader.uint64();
          break;
        case 2:
          message.status = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryChallengesByInitiativeResponse>): QueryChallengesByInitiativeResponse {
    const message = createBaseQueryChallengesByInitiativeResponse();
    message.challengeId = object.challengeId !== undefined && object.challengeId !== null ? BigInt(object.challengeId.toString()) : BigInt(0);
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryChallengesByInitiativeResponseAmino): QueryChallengesByInitiativeResponse {
    const message = createBaseQueryChallengesByInitiativeResponse();
    if (object.challenge_id !== undefined && object.challenge_id !== null) {
      message.challengeId = BigInt(object.challenge_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryChallengesByInitiativeResponse): QueryChallengesByInitiativeResponseAmino {
    const obj: any = {};
    obj.challenge_id = message.challengeId !== BigInt(0) ? message.challengeId?.toString() : undefined;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChallengesByInitiativeResponseAminoMsg): QueryChallengesByInitiativeResponse {
    return QueryChallengesByInitiativeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChallengesByInitiativeResponseProtoMsg): QueryChallengesByInitiativeResponse {
    return QueryChallengesByInitiativeResponse.decode(message.value);
  },
  toProto(message: QueryChallengesByInitiativeResponse): Uint8Array {
    return QueryChallengesByInitiativeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChallengesByInitiativeResponse): QueryChallengesByInitiativeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryChallengesByInitiativeResponse",
      value: QueryChallengesByInitiativeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReputationRequest(): QueryReputationRequest {
  return {
    address: "",
    tag: ""
  };
}
/**
 * QueryReputationRequest defines the QueryReputationRequest message.
 * @name QueryReputationRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryReputationRequest
 */
export const QueryReputationRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryReputationRequest",
  encode(message: QueryReputationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReputationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReputationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.tag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReputationRequest>): QueryReputationRequest {
    const message = createBaseQueryReputationRequest();
    message.address = object.address ?? "";
    message.tag = object.tag ?? "";
    return message;
  },
  fromAmino(object: QueryReputationRequestAmino): QueryReputationRequest {
    const message = createBaseQueryReputationRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    return message;
  },
  toAmino(message: QueryReputationRequest): QueryReputationRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.tag = message.tag === "" ? undefined : message.tag;
    return obj;
  },
  fromAminoMsg(object: QueryReputationRequestAminoMsg): QueryReputationRequest {
    return QueryReputationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReputationRequestProtoMsg): QueryReputationRequest {
    return QueryReputationRequest.decode(message.value);
  },
  toProto(message: QueryReputationRequest): Uint8Array {
    return QueryReputationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReputationRequest): QueryReputationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryReputationRequest",
      value: QueryReputationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReputationResponse(): QueryReputationResponse {
  return {
    score: "",
    lifetime: ""
  };
}
/**
 * QueryReputationResponse defines the QueryReputationResponse message.
 * @name QueryReputationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryReputationResponse
 */
export const QueryReputationResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryReputationResponse",
  encode(message: QueryReputationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.score !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.score, 18).atomics);
    }
    if (message.lifetime !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.lifetime, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReputationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReputationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.score = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.lifetime = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReputationResponse>): QueryReputationResponse {
    const message = createBaseQueryReputationResponse();
    message.score = object.score ?? "";
    message.lifetime = object.lifetime ?? "";
    return message;
  },
  fromAmino(object: QueryReputationResponseAmino): QueryReputationResponse {
    const message = createBaseQueryReputationResponse();
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    }
    if (object.lifetime !== undefined && object.lifetime !== null) {
      message.lifetime = object.lifetime;
    }
    return message;
  },
  toAmino(message: QueryReputationResponse): QueryReputationResponseAmino {
    const obj: any = {};
    obj.score = message.score === "" ? undefined : message.score;
    obj.lifetime = message.lifetime === "" ? undefined : message.lifetime;
    return obj;
  },
  fromAminoMsg(object: QueryReputationResponseAminoMsg): QueryReputationResponse {
    return QueryReputationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReputationResponseProtoMsg): QueryReputationResponse {
    return QueryReputationResponse.decode(message.value);
  },
  toProto(message: QueryReputationResponse): Uint8Array {
    return QueryReputationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReputationResponse): QueryReputationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryReputationResponse",
      value: QueryReputationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingStakeRewardsRequest(): QueryPendingStakeRewardsRequest {
  return {
    stakeId: BigInt(0)
  };
}
/**
 * QueryPendingStakeRewardsRequest defines the request for pending stake rewards
 * @name QueryPendingStakeRewardsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryPendingStakeRewardsRequest
 */
export const QueryPendingStakeRewardsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryPendingStakeRewardsRequest",
  encode(message: QueryPendingStakeRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.stakeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingStakeRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingStakeRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPendingStakeRewardsRequest>): QueryPendingStakeRewardsRequest {
    const message = createBaseQueryPendingStakeRewardsRequest();
    message.stakeId = object.stakeId !== undefined && object.stakeId !== null ? BigInt(object.stakeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPendingStakeRewardsRequestAmino): QueryPendingStakeRewardsRequest {
    const message = createBaseQueryPendingStakeRewardsRequest();
    if (object.stake_id !== undefined && object.stake_id !== null) {
      message.stakeId = BigInt(object.stake_id);
    }
    return message;
  },
  toAmino(message: QueryPendingStakeRewardsRequest): QueryPendingStakeRewardsRequestAmino {
    const obj: any = {};
    obj.stake_id = message.stakeId !== BigInt(0) ? message.stakeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPendingStakeRewardsRequestAminoMsg): QueryPendingStakeRewardsRequest {
    return QueryPendingStakeRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingStakeRewardsRequestProtoMsg): QueryPendingStakeRewardsRequest {
    return QueryPendingStakeRewardsRequest.decode(message.value);
  },
  toProto(message: QueryPendingStakeRewardsRequest): Uint8Array {
    return QueryPendingStakeRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingStakeRewardsRequest): QueryPendingStakeRewardsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryPendingStakeRewardsRequest",
      value: QueryPendingStakeRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPendingStakeRewardsResponse(): QueryPendingStakeRewardsResponse {
  return {
    pendingRewards: "",
    stakeAmount: "",
    targetType: 0
  };
}
/**
 * QueryPendingStakeRewardsResponse defines the response for pending stake rewards
 * @name QueryPendingStakeRewardsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryPendingStakeRewardsResponse
 */
export const QueryPendingStakeRewardsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryPendingStakeRewardsResponse",
  encode(message: QueryPendingStakeRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pendingRewards !== "") {
      writer.uint32(10).string(message.pendingRewards);
    }
    if (message.stakeAmount !== "") {
      writer.uint32(18).string(message.stakeAmount);
    }
    if (message.targetType !== 0) {
      writer.uint32(24).int32(message.targetType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingStakeRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingStakeRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingRewards = reader.string();
          break;
        case 2:
          message.stakeAmount = reader.string();
          break;
        case 3:
          message.targetType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPendingStakeRewardsResponse>): QueryPendingStakeRewardsResponse {
    const message = createBaseQueryPendingStakeRewardsResponse();
    message.pendingRewards = object.pendingRewards ?? "";
    message.stakeAmount = object.stakeAmount ?? "";
    message.targetType = object.targetType ?? 0;
    return message;
  },
  fromAmino(object: QueryPendingStakeRewardsResponseAmino): QueryPendingStakeRewardsResponse {
    const message = createBaseQueryPendingStakeRewardsResponse();
    if (object.pending_rewards !== undefined && object.pending_rewards !== null) {
      message.pendingRewards = object.pending_rewards;
    }
    if (object.stake_amount !== undefined && object.stake_amount !== null) {
      message.stakeAmount = object.stake_amount;
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    return message;
  },
  toAmino(message: QueryPendingStakeRewardsResponse): QueryPendingStakeRewardsResponseAmino {
    const obj: any = {};
    obj.pending_rewards = message.pendingRewards === "" ? undefined : message.pendingRewards;
    obj.stake_amount = message.stakeAmount === "" ? undefined : message.stakeAmount;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    return obj;
  },
  fromAminoMsg(object: QueryPendingStakeRewardsResponseAminoMsg): QueryPendingStakeRewardsResponse {
    return QueryPendingStakeRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingStakeRewardsResponseProtoMsg): QueryPendingStakeRewardsResponse {
    return QueryPendingStakeRewardsResponse.decode(message.value);
  },
  toProto(message: QueryPendingStakeRewardsResponse): Uint8Array {
    return QueryPendingStakeRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingStakeRewardsResponse): QueryPendingStakeRewardsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryPendingStakeRewardsResponse",
      value: QueryPendingStakeRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberStakePoolRequest(): QueryGetMemberStakePoolRequest {
  return {
    member: ""
  };
}
/**
 * QueryGetMemberStakePoolRequest defines the request for member stake pool
 * @name QueryGetMemberStakePoolRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberStakePoolRequest
 */
export const QueryGetMemberStakePoolRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberStakePoolRequest",
  encode(message: QueryGetMemberStakePoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberStakePoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberStakePoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberStakePoolRequest>): QueryGetMemberStakePoolRequest {
    const message = createBaseQueryGetMemberStakePoolRequest();
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: QueryGetMemberStakePoolRequestAmino): QueryGetMemberStakePoolRequest {
    const message = createBaseQueryGetMemberStakePoolRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: QueryGetMemberStakePoolRequest): QueryGetMemberStakePoolRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberStakePoolRequestAminoMsg): QueryGetMemberStakePoolRequest {
    return QueryGetMemberStakePoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberStakePoolRequestProtoMsg): QueryGetMemberStakePoolRequest {
    return QueryGetMemberStakePoolRequest.decode(message.value);
  },
  toProto(message: QueryGetMemberStakePoolRequest): Uint8Array {
    return QueryGetMemberStakePoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberStakePoolRequest): QueryGetMemberStakePoolRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetMemberStakePoolRequest",
      value: QueryGetMemberStakePoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberStakePoolResponse(): QueryGetMemberStakePoolResponse {
  return {
    pool: MemberStakePool.fromPartial({})
  };
}
/**
 * QueryGetMemberStakePoolResponse defines the response for member stake pool
 * @name QueryGetMemberStakePoolResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberStakePoolResponse
 */
export const QueryGetMemberStakePoolResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberStakePoolResponse",
  encode(message: QueryGetMemberStakePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      MemberStakePool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberStakePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberStakePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = MemberStakePool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberStakePoolResponse>): QueryGetMemberStakePoolResponse {
    const message = createBaseQueryGetMemberStakePoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? MemberStakePool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMemberStakePoolResponseAmino): QueryGetMemberStakePoolResponse {
    const message = createBaseQueryGetMemberStakePoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = MemberStakePool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryGetMemberStakePoolResponse): QueryGetMemberStakePoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? MemberStakePool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberStakePoolResponseAminoMsg): QueryGetMemberStakePoolResponse {
    return QueryGetMemberStakePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberStakePoolResponseProtoMsg): QueryGetMemberStakePoolResponse {
    return QueryGetMemberStakePoolResponse.decode(message.value);
  },
  toProto(message: QueryGetMemberStakePoolResponse): Uint8Array {
    return QueryGetMemberStakePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberStakePoolResponse): QueryGetMemberStakePoolResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetMemberStakePoolResponse",
      value: QueryGetMemberStakePoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagStakePoolRequest(): QueryGetTagStakePoolRequest {
  return {
    tag: ""
  };
}
/**
 * QueryGetTagStakePoolRequest defines the request for tag stake pool
 * @name QueryGetTagStakePoolRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagStakePoolRequest
 */
export const QueryGetTagStakePoolRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagStakePoolRequest",
  encode(message: QueryGetTagStakePoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagStakePoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagStakePoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagStakePoolRequest>): QueryGetTagStakePoolRequest {
    const message = createBaseQueryGetTagStakePoolRequest();
    message.tag = object.tag ?? "";
    return message;
  },
  fromAmino(object: QueryGetTagStakePoolRequestAmino): QueryGetTagStakePoolRequest {
    const message = createBaseQueryGetTagStakePoolRequest();
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    return message;
  },
  toAmino(message: QueryGetTagStakePoolRequest): QueryGetTagStakePoolRequestAmino {
    const obj: any = {};
    obj.tag = message.tag === "" ? undefined : message.tag;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagStakePoolRequestAminoMsg): QueryGetTagStakePoolRequest {
    return QueryGetTagStakePoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagStakePoolRequestProtoMsg): QueryGetTagStakePoolRequest {
    return QueryGetTagStakePoolRequest.decode(message.value);
  },
  toProto(message: QueryGetTagStakePoolRequest): Uint8Array {
    return QueryGetTagStakePoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagStakePoolRequest): QueryGetTagStakePoolRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetTagStakePoolRequest",
      value: QueryGetTagStakePoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagStakePoolResponse(): QueryGetTagStakePoolResponse {
  return {
    pool: TagStakePool.fromPartial({})
  };
}
/**
 * QueryGetTagStakePoolResponse defines the response for tag stake pool
 * @name QueryGetTagStakePoolResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagStakePoolResponse
 */
export const QueryGetTagStakePoolResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagStakePoolResponse",
  encode(message: QueryGetTagStakePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      TagStakePool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagStakePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagStakePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = TagStakePool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagStakePoolResponse>): QueryGetTagStakePoolResponse {
    const message = createBaseQueryGetTagStakePoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? TagStakePool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTagStakePoolResponseAmino): QueryGetTagStakePoolResponse {
    const message = createBaseQueryGetTagStakePoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = TagStakePool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryGetTagStakePoolResponse): QueryGetTagStakePoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? TagStakePool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagStakePoolResponseAminoMsg): QueryGetTagStakePoolResponse {
    return QueryGetTagStakePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagStakePoolResponseProtoMsg): QueryGetTagStakePoolResponse {
    return QueryGetTagStakePoolResponse.decode(message.value);
  },
  toProto(message: QueryGetTagStakePoolResponse): Uint8Array {
    return QueryGetTagStakePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagStakePoolResponse): QueryGetTagStakePoolResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetTagStakePoolResponse",
      value: QueryGetTagStakePoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetProjectStakeInfoRequest(): QueryGetProjectStakeInfoRequest {
  return {
    projectId: BigInt(0)
  };
}
/**
 * QueryGetProjectStakeInfoRequest defines the request for project stake info
 * @name QueryGetProjectStakeInfoRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetProjectStakeInfoRequest
 */
export const QueryGetProjectStakeInfoRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetProjectStakeInfoRequest",
  encode(message: QueryGetProjectStakeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== BigInt(0)) {
      writer.uint32(8).uint64(message.projectId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProjectStakeInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProjectStakeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetProjectStakeInfoRequest>): QueryGetProjectStakeInfoRequest {
    const message = createBaseQueryGetProjectStakeInfoRequest();
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetProjectStakeInfoRequestAmino): QueryGetProjectStakeInfoRequest {
    const message = createBaseQueryGetProjectStakeInfoRequest();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = BigInt(object.project_id);
    }
    return message;
  },
  toAmino(message: QueryGetProjectStakeInfoRequest): QueryGetProjectStakeInfoRequestAmino {
    const obj: any = {};
    obj.project_id = message.projectId !== BigInt(0) ? message.projectId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProjectStakeInfoRequestAminoMsg): QueryGetProjectStakeInfoRequest {
    return QueryGetProjectStakeInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProjectStakeInfoRequestProtoMsg): QueryGetProjectStakeInfoRequest {
    return QueryGetProjectStakeInfoRequest.decode(message.value);
  },
  toProto(message: QueryGetProjectStakeInfoRequest): Uint8Array {
    return QueryGetProjectStakeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProjectStakeInfoRequest): QueryGetProjectStakeInfoRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetProjectStakeInfoRequest",
      value: QueryGetProjectStakeInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetProjectStakeInfoResponse(): QueryGetProjectStakeInfoResponse {
  return {
    info: ProjectStakeInfo.fromPartial({})
  };
}
/**
 * QueryGetProjectStakeInfoResponse defines the response for project stake info
 * @name QueryGetProjectStakeInfoResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetProjectStakeInfoResponse
 */
export const QueryGetProjectStakeInfoResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetProjectStakeInfoResponse",
  encode(message: QueryGetProjectStakeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      ProjectStakeInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProjectStakeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProjectStakeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = ProjectStakeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetProjectStakeInfoResponse>): QueryGetProjectStakeInfoResponse {
    const message = createBaseQueryGetProjectStakeInfoResponse();
    message.info = object.info !== undefined && object.info !== null ? ProjectStakeInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: QueryGetProjectStakeInfoResponseAmino): QueryGetProjectStakeInfoResponse {
    const message = createBaseQueryGetProjectStakeInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = ProjectStakeInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryGetProjectStakeInfoResponse): QueryGetProjectStakeInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? ProjectStakeInfo.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetProjectStakeInfoResponseAminoMsg): QueryGetProjectStakeInfoResponse {
    return QueryGetProjectStakeInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetProjectStakeInfoResponseProtoMsg): QueryGetProjectStakeInfoResponse {
    return QueryGetProjectStakeInfoResponse.decode(message.value);
  },
  toProto(message: QueryGetProjectStakeInfoResponse): Uint8Array {
    return QueryGetProjectStakeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetProjectStakeInfoResponse): QueryGetProjectStakeInfoResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetProjectStakeInfoResponse",
      value: QueryGetProjectStakeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContentConvictionRequest(): QueryContentConvictionRequest {
  return {
    targetType: BigInt(0),
    targetId: BigInt(0)
  };
}
/**
 * QueryContentConvictionRequest defines the request for content conviction score
 * @name QueryContentConvictionRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentConvictionRequest
 */
export const QueryContentConvictionRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryContentConvictionRequest",
  encode(message: QueryContentConvictionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.targetType !== BigInt(0)) {
      writer.uint32(8).uint64(message.targetType);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContentConvictionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContentConvictionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetType = reader.uint64();
          break;
        case 2:
          message.targetId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContentConvictionRequest>): QueryContentConvictionRequest {
    const message = createBaseQueryContentConvictionRequest();
    message.targetType = object.targetType !== undefined && object.targetType !== null ? BigInt(object.targetType.toString()) : BigInt(0);
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryContentConvictionRequestAmino): QueryContentConvictionRequest {
    const message = createBaseQueryContentConvictionRequest();
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = BigInt(object.target_type);
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    return message;
  },
  toAmino(message: QueryContentConvictionRequest): QueryContentConvictionRequestAmino {
    const obj: any = {};
    obj.target_type = message.targetType !== BigInt(0) ? message.targetType?.toString() : undefined;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContentConvictionRequestAminoMsg): QueryContentConvictionRequest {
    return QueryContentConvictionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContentConvictionRequestProtoMsg): QueryContentConvictionRequest {
    return QueryContentConvictionRequest.decode(message.value);
  },
  toProto(message: QueryContentConvictionRequest): Uint8Array {
    return QueryContentConvictionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContentConvictionRequest): QueryContentConvictionRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryContentConvictionRequest",
      value: QueryContentConvictionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContentConvictionResponse(): QueryContentConvictionResponse {
  return {
    totalConviction: "",
    stakerCount: BigInt(0),
    totalStaked: ""
  };
}
/**
 * QueryContentConvictionResponse defines the response for content conviction score
 * @name QueryContentConvictionResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentConvictionResponse
 */
export const QueryContentConvictionResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryContentConvictionResponse",
  encode(message: QueryContentConvictionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalConviction !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.totalConviction, 18).atomics);
    }
    if (message.stakerCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.stakerCount);
    }
    if (message.totalStaked !== "") {
      writer.uint32(26).string(message.totalStaked);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContentConvictionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContentConvictionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalConviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.stakerCount = reader.uint64();
          break;
        case 3:
          message.totalStaked = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContentConvictionResponse>): QueryContentConvictionResponse {
    const message = createBaseQueryContentConvictionResponse();
    message.totalConviction = object.totalConviction ?? "";
    message.stakerCount = object.stakerCount !== undefined && object.stakerCount !== null ? BigInt(object.stakerCount.toString()) : BigInt(0);
    message.totalStaked = object.totalStaked ?? "";
    return message;
  },
  fromAmino(object: QueryContentConvictionResponseAmino): QueryContentConvictionResponse {
    const message = createBaseQueryContentConvictionResponse();
    if (object.total_conviction !== undefined && object.total_conviction !== null) {
      message.totalConviction = object.total_conviction;
    }
    if (object.staker_count !== undefined && object.staker_count !== null) {
      message.stakerCount = BigInt(object.staker_count);
    }
    if (object.total_staked !== undefined && object.total_staked !== null) {
      message.totalStaked = object.total_staked;
    }
    return message;
  },
  toAmino(message: QueryContentConvictionResponse): QueryContentConvictionResponseAmino {
    const obj: any = {};
    obj.total_conviction = message.totalConviction === "" ? undefined : message.totalConviction;
    obj.staker_count = message.stakerCount !== BigInt(0) ? message.stakerCount?.toString() : undefined;
    obj.total_staked = message.totalStaked === "" ? undefined : message.totalStaked;
    return obj;
  },
  fromAminoMsg(object: QueryContentConvictionResponseAminoMsg): QueryContentConvictionResponse {
    return QueryContentConvictionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContentConvictionResponseProtoMsg): QueryContentConvictionResponse {
    return QueryContentConvictionResponse.decode(message.value);
  },
  toProto(message: QueryContentConvictionResponse): Uint8Array {
    return QueryContentConvictionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContentConvictionResponse): QueryContentConvictionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryContentConvictionResponse",
      value: QueryContentConvictionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuthorBondRequest(): QueryAuthorBondRequest {
  return {
    targetType: BigInt(0),
    targetId: BigInt(0)
  };
}
/**
 * QueryAuthorBondRequest defines the request for author bond info
 * @name QueryAuthorBondRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAuthorBondRequest
 */
export const QueryAuthorBondRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAuthorBondRequest",
  encode(message: QueryAuthorBondRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.targetType !== BigInt(0)) {
      writer.uint32(8).uint64(message.targetType);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuthorBondRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorBondRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetType = reader.uint64();
          break;
        case 2:
          message.targetId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAuthorBondRequest>): QueryAuthorBondRequest {
    const message = createBaseQueryAuthorBondRequest();
    message.targetType = object.targetType !== undefined && object.targetType !== null ? BigInt(object.targetType.toString()) : BigInt(0);
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAuthorBondRequestAmino): QueryAuthorBondRequest {
    const message = createBaseQueryAuthorBondRequest();
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = BigInt(object.target_type);
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    return message;
  },
  toAmino(message: QueryAuthorBondRequest): QueryAuthorBondRequestAmino {
    const obj: any = {};
    obj.target_type = message.targetType !== BigInt(0) ? message.targetType?.toString() : undefined;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuthorBondRequestAminoMsg): QueryAuthorBondRequest {
    return QueryAuthorBondRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuthorBondRequestProtoMsg): QueryAuthorBondRequest {
    return QueryAuthorBondRequest.decode(message.value);
  },
  toProto(message: QueryAuthorBondRequest): Uint8Array {
    return QueryAuthorBondRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuthorBondRequest): QueryAuthorBondRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAuthorBondRequest",
      value: QueryAuthorBondRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuthorBondResponse(): QueryAuthorBondResponse {
  return {
    bondAmount: "",
    author: "",
    stakeId: BigInt(0)
  };
}
/**
 * QueryAuthorBondResponse defines the response for author bond info
 * @name QueryAuthorBondResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAuthorBondResponse
 */
export const QueryAuthorBondResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAuthorBondResponse",
  encode(message: QueryAuthorBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondAmount !== "") {
      writer.uint32(10).string(message.bondAmount);
    }
    if (message.author !== "") {
      writer.uint32(18).string(message.author);
    }
    if (message.stakeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.stakeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuthorBondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorBondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondAmount = reader.string();
          break;
        case 2:
          message.author = reader.string();
          break;
        case 3:
          message.stakeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAuthorBondResponse>): QueryAuthorBondResponse {
    const message = createBaseQueryAuthorBondResponse();
    message.bondAmount = object.bondAmount ?? "";
    message.author = object.author ?? "";
    message.stakeId = object.stakeId !== undefined && object.stakeId !== null ? BigInt(object.stakeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAuthorBondResponseAmino): QueryAuthorBondResponse {
    const message = createBaseQueryAuthorBondResponse();
    if (object.bond_amount !== undefined && object.bond_amount !== null) {
      message.bondAmount = object.bond_amount;
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    }
    if (object.stake_id !== undefined && object.stake_id !== null) {
      message.stakeId = BigInt(object.stake_id);
    }
    return message;
  },
  toAmino(message: QueryAuthorBondResponse): QueryAuthorBondResponseAmino {
    const obj: any = {};
    obj.bond_amount = message.bondAmount === "" ? undefined : message.bondAmount;
    obj.author = message.author === "" ? undefined : message.author;
    obj.stake_id = message.stakeId !== BigInt(0) ? message.stakeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuthorBondResponseAminoMsg): QueryAuthorBondResponse {
    return QueryAuthorBondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuthorBondResponseProtoMsg): QueryAuthorBondResponse {
    return QueryAuthorBondResponse.decode(message.value);
  },
  toProto(message: QueryAuthorBondResponse): Uint8Array {
    return QueryAuthorBondResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuthorBondResponse): QueryAuthorBondResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAuthorBondResponse",
      value: QueryAuthorBondResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetContentChallengeRequest(): QueryGetContentChallengeRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetContentChallengeRequest defines the request for a content challenge by ID
 * @name QueryGetContentChallengeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetContentChallengeRequest
 */
export const QueryGetContentChallengeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetContentChallengeRequest",
  encode(message: QueryGetContentChallengeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetContentChallengeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetContentChallengeRequest();
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
  fromPartial(object: DeepPartial<QueryGetContentChallengeRequest>): QueryGetContentChallengeRequest {
    const message = createBaseQueryGetContentChallengeRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetContentChallengeRequestAmino): QueryGetContentChallengeRequest {
    const message = createBaseQueryGetContentChallengeRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetContentChallengeRequest): QueryGetContentChallengeRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetContentChallengeRequestAminoMsg): QueryGetContentChallengeRequest {
    return QueryGetContentChallengeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetContentChallengeRequestProtoMsg): QueryGetContentChallengeRequest {
    return QueryGetContentChallengeRequest.decode(message.value);
  },
  toProto(message: QueryGetContentChallengeRequest): Uint8Array {
    return QueryGetContentChallengeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetContentChallengeRequest): QueryGetContentChallengeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetContentChallengeRequest",
      value: QueryGetContentChallengeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetContentChallengeResponse(): QueryGetContentChallengeResponse {
  return {
    contentChallenge: ContentChallenge.fromPartial({})
  };
}
/**
 * QueryGetContentChallengeResponse defines the response for a content challenge
 * @name QueryGetContentChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetContentChallengeResponse
 */
export const QueryGetContentChallengeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetContentChallengeResponse",
  encode(message: QueryGetContentChallengeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentChallenge !== undefined) {
      ContentChallenge.encode(message.contentChallenge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetContentChallengeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetContentChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentChallenge = ContentChallenge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetContentChallengeResponse>): QueryGetContentChallengeResponse {
    const message = createBaseQueryGetContentChallengeResponse();
    message.contentChallenge = object.contentChallenge !== undefined && object.contentChallenge !== null ? ContentChallenge.fromPartial(object.contentChallenge) : undefined;
    return message;
  },
  fromAmino(object: QueryGetContentChallengeResponseAmino): QueryGetContentChallengeResponse {
    const message = createBaseQueryGetContentChallengeResponse();
    if (object.content_challenge !== undefined && object.content_challenge !== null) {
      message.contentChallenge = ContentChallenge.fromAmino(object.content_challenge);
    }
    return message;
  },
  toAmino(message: QueryGetContentChallengeResponse): QueryGetContentChallengeResponseAmino {
    const obj: any = {};
    obj.content_challenge = message.contentChallenge ? ContentChallenge.toAmino(message.contentChallenge) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetContentChallengeResponseAminoMsg): QueryGetContentChallengeResponse {
    return QueryGetContentChallengeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetContentChallengeResponseProtoMsg): QueryGetContentChallengeResponse {
    return QueryGetContentChallengeResponse.decode(message.value);
  },
  toProto(message: QueryGetContentChallengeResponse): Uint8Array {
    return QueryGetContentChallengeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetContentChallengeResponse): QueryGetContentChallengeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetContentChallengeResponse",
      value: QueryGetContentChallengeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllContentChallengeRequest(): QueryAllContentChallengeRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllContentChallengeRequest defines the request for all content challenges
 * @name QueryAllContentChallengeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllContentChallengeRequest
 */
export const QueryAllContentChallengeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllContentChallengeRequest",
  encode(message: QueryAllContentChallengeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContentChallengeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContentChallengeRequest();
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
  fromPartial(object: DeepPartial<QueryAllContentChallengeRequest>): QueryAllContentChallengeRequest {
    const message = createBaseQueryAllContentChallengeRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllContentChallengeRequestAmino): QueryAllContentChallengeRequest {
    const message = createBaseQueryAllContentChallengeRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllContentChallengeRequest): QueryAllContentChallengeRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllContentChallengeRequestAminoMsg): QueryAllContentChallengeRequest {
    return QueryAllContentChallengeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllContentChallengeRequestProtoMsg): QueryAllContentChallengeRequest {
    return QueryAllContentChallengeRequest.decode(message.value);
  },
  toProto(message: QueryAllContentChallengeRequest): Uint8Array {
    return QueryAllContentChallengeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContentChallengeRequest): QueryAllContentChallengeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllContentChallengeRequest",
      value: QueryAllContentChallengeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllContentChallengeResponse(): QueryAllContentChallengeResponse {
  return {
    contentChallenge: [],
    pagination: undefined
  };
}
/**
 * QueryAllContentChallengeResponse defines the response for all content challenges
 * @name QueryAllContentChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllContentChallengeResponse
 */
export const QueryAllContentChallengeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllContentChallengeResponse",
  encode(message: QueryAllContentChallengeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contentChallenge) {
      ContentChallenge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllContentChallengeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContentChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentChallenge.push(ContentChallenge.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllContentChallengeResponse>): QueryAllContentChallengeResponse {
    const message = createBaseQueryAllContentChallengeResponse();
    message.contentChallenge = object.contentChallenge?.map(e => ContentChallenge.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllContentChallengeResponseAmino): QueryAllContentChallengeResponse {
    const message = createBaseQueryAllContentChallengeResponse();
    message.contentChallenge = object.content_challenge?.map(e => ContentChallenge.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllContentChallengeResponse): QueryAllContentChallengeResponseAmino {
    const obj: any = {};
    if (message.contentChallenge) {
      obj.content_challenge = message.contentChallenge.map(e => e ? ContentChallenge.toAmino(e) : undefined);
    } else {
      obj.content_challenge = message.contentChallenge;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllContentChallengeResponseAminoMsg): QueryAllContentChallengeResponse {
    return QueryAllContentChallengeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllContentChallengeResponseProtoMsg): QueryAllContentChallengeResponse {
    return QueryAllContentChallengeResponse.decode(message.value);
  },
  toProto(message: QueryAllContentChallengeResponse): Uint8Array {
    return QueryAllContentChallengeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllContentChallengeResponse): QueryAllContentChallengeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllContentChallengeResponse",
      value: QueryAllContentChallengeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContentChallengesByTargetRequest(): QueryContentChallengesByTargetRequest {
  return {
    targetType: BigInt(0),
    targetId: BigInt(0)
  };
}
/**
 * QueryContentChallengesByTargetRequest defines the request for content challenges by target
 * @name QueryContentChallengesByTargetRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentChallengesByTargetRequest
 */
export const QueryContentChallengesByTargetRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryContentChallengesByTargetRequest",
  encode(message: QueryContentChallengesByTargetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.targetType !== BigInt(0)) {
      writer.uint32(8).uint64(message.targetType);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContentChallengesByTargetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContentChallengesByTargetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetType = reader.uint64();
          break;
        case 2:
          message.targetId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContentChallengesByTargetRequest>): QueryContentChallengesByTargetRequest {
    const message = createBaseQueryContentChallengesByTargetRequest();
    message.targetType = object.targetType !== undefined && object.targetType !== null ? BigInt(object.targetType.toString()) : BigInt(0);
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryContentChallengesByTargetRequestAmino): QueryContentChallengesByTargetRequest {
    const message = createBaseQueryContentChallengesByTargetRequest();
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = BigInt(object.target_type);
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    return message;
  },
  toAmino(message: QueryContentChallengesByTargetRequest): QueryContentChallengesByTargetRequestAmino {
    const obj: any = {};
    obj.target_type = message.targetType !== BigInt(0) ? message.targetType?.toString() : undefined;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContentChallengesByTargetRequestAminoMsg): QueryContentChallengesByTargetRequest {
    return QueryContentChallengesByTargetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContentChallengesByTargetRequestProtoMsg): QueryContentChallengesByTargetRequest {
    return QueryContentChallengesByTargetRequest.decode(message.value);
  },
  toProto(message: QueryContentChallengesByTargetRequest): Uint8Array {
    return QueryContentChallengesByTargetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContentChallengesByTargetRequest): QueryContentChallengesByTargetRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryContentChallengesByTargetRequest",
      value: QueryContentChallengesByTargetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContentChallengesByTargetResponse(): QueryContentChallengesByTargetResponse {
  return {
    contentChallenge: ContentChallenge.fromPartial({})
  };
}
/**
 * QueryContentChallengesByTargetResponse defines the response for content challenges by target
 * @name QueryContentChallengesByTargetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentChallengesByTargetResponse
 */
export const QueryContentChallengesByTargetResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryContentChallengesByTargetResponse",
  encode(message: QueryContentChallengesByTargetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentChallenge !== undefined) {
      ContentChallenge.encode(message.contentChallenge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContentChallengesByTargetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContentChallengesByTargetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentChallenge = ContentChallenge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContentChallengesByTargetResponse>): QueryContentChallengesByTargetResponse {
    const message = createBaseQueryContentChallengesByTargetResponse();
    message.contentChallenge = object.contentChallenge !== undefined && object.contentChallenge !== null ? ContentChallenge.fromPartial(object.contentChallenge) : undefined;
    return message;
  },
  fromAmino(object: QueryContentChallengesByTargetResponseAmino): QueryContentChallengesByTargetResponse {
    const message = createBaseQueryContentChallengesByTargetResponse();
    if (object.content_challenge !== undefined && object.content_challenge !== null) {
      message.contentChallenge = ContentChallenge.fromAmino(object.content_challenge);
    }
    return message;
  },
  toAmino(message: QueryContentChallengesByTargetResponse): QueryContentChallengesByTargetResponseAmino {
    const obj: any = {};
    obj.content_challenge = message.contentChallenge ? ContentChallenge.toAmino(message.contentChallenge) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContentChallengesByTargetResponseAminoMsg): QueryContentChallengesByTargetResponse {
    return QueryContentChallengesByTargetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContentChallengesByTargetResponseProtoMsg): QueryContentChallengesByTargetResponse {
    return QueryContentChallengesByTargetResponse.decode(message.value);
  },
  toProto(message: QueryContentChallengesByTargetResponse): Uint8Array {
    return QueryContentChallengesByTargetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContentChallengesByTargetResponse): QueryContentChallengesByTargetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryContentChallengesByTargetResponse",
      value: QueryContentChallengesByTargetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContentByInitiativeRequest(): QueryContentByInitiativeRequest {
  return {
    initiativeId: BigInt(0)
  };
}
/**
 * QueryContentByInitiativeRequest defines the request for content linked to an initiative
 * @name QueryContentByInitiativeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentByInitiativeRequest
 */
export const QueryContentByInitiativeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryContentByInitiativeRequest",
  encode(message: QueryContentByInitiativeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContentByInitiativeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContentByInitiativeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiativeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContentByInitiativeRequest>): QueryContentByInitiativeRequest {
    const message = createBaseQueryContentByInitiativeRequest();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryContentByInitiativeRequestAmino): QueryContentByInitiativeRequest {
    const message = createBaseQueryContentByInitiativeRequest();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    return message;
  },
  toAmino(message: QueryContentByInitiativeRequest): QueryContentByInitiativeRequestAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContentByInitiativeRequestAminoMsg): QueryContentByInitiativeRequest {
    return QueryContentByInitiativeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContentByInitiativeRequestProtoMsg): QueryContentByInitiativeRequest {
    return QueryContentByInitiativeRequest.decode(message.value);
  },
  toProto(message: QueryContentByInitiativeRequest): Uint8Array {
    return QueryContentByInitiativeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContentByInitiativeRequest): QueryContentByInitiativeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryContentByInitiativeRequest",
      value: QueryContentByInitiativeRequest.encode(message).finish()
    };
  }
};
function createBaseContentInitiativeLinkEntry(): ContentInitiativeLinkEntry {
  return {
    targetType: 0,
    targetId: BigInt(0),
    conviction: ""
  };
}
/**
 * ContentInitiativeLinkEntry represents a content item linked to an initiative with its conviction
 * @name ContentInitiativeLinkEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ContentInitiativeLinkEntry
 */
export const ContentInitiativeLinkEntry = {
  typeUrl: "/sparkdream.rep.v1.ContentInitiativeLinkEntry",
  encode(message: ContentInitiativeLinkEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.targetType !== 0) {
      writer.uint32(8).int32(message.targetType);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetId);
    }
    if (message.conviction !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.conviction, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContentInitiativeLinkEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentInitiativeLinkEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetType = reader.int32();
          break;
        case 2:
          message.targetId = reader.uint64();
          break;
        case 3:
          message.conviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContentInitiativeLinkEntry>): ContentInitiativeLinkEntry {
    const message = createBaseContentInitiativeLinkEntry();
    message.targetType = object.targetType ?? 0;
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.conviction = object.conviction ?? "";
    return message;
  },
  fromAmino(object: ContentInitiativeLinkEntryAmino): ContentInitiativeLinkEntry {
    const message = createBaseContentInitiativeLinkEntry();
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.conviction !== undefined && object.conviction !== null) {
      message.conviction = object.conviction;
    }
    return message;
  },
  toAmino(message: ContentInitiativeLinkEntry): ContentInitiativeLinkEntryAmino {
    const obj: any = {};
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.conviction = message.conviction === "" ? undefined : message.conviction;
    return obj;
  },
  fromAminoMsg(object: ContentInitiativeLinkEntryAminoMsg): ContentInitiativeLinkEntry {
    return ContentInitiativeLinkEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ContentInitiativeLinkEntryProtoMsg): ContentInitiativeLinkEntry {
    return ContentInitiativeLinkEntry.decode(message.value);
  },
  toProto(message: ContentInitiativeLinkEntry): Uint8Array {
    return ContentInitiativeLinkEntry.encode(message).finish();
  },
  toProtoMsg(message: ContentInitiativeLinkEntry): ContentInitiativeLinkEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.ContentInitiativeLinkEntry",
      value: ContentInitiativeLinkEntry.encode(message).finish()
    };
  }
};
function createBaseQueryContentByInitiativeResponse(): QueryContentByInitiativeResponse {
  return {
    links: [],
    totalPropagated: ""
  };
}
/**
 * QueryContentByInitiativeResponse defines the response for content linked to an initiative
 * @name QueryContentByInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryContentByInitiativeResponse
 */
export const QueryContentByInitiativeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryContentByInitiativeResponse",
  encode(message: QueryContentByInitiativeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.links) {
      ContentInitiativeLinkEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalPropagated !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.totalPropagated, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContentByInitiativeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContentByInitiativeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.links.push(ContentInitiativeLinkEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalPropagated = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContentByInitiativeResponse>): QueryContentByInitiativeResponse {
    const message = createBaseQueryContentByInitiativeResponse();
    message.links = object.links?.map(e => ContentInitiativeLinkEntry.fromPartial(e)) || [];
    message.totalPropagated = object.totalPropagated ?? "";
    return message;
  },
  fromAmino(object: QueryContentByInitiativeResponseAmino): QueryContentByInitiativeResponse {
    const message = createBaseQueryContentByInitiativeResponse();
    message.links = object.links?.map(e => ContentInitiativeLinkEntry.fromAmino(e)) || [];
    if (object.total_propagated !== undefined && object.total_propagated !== null) {
      message.totalPropagated = object.total_propagated;
    }
    return message;
  },
  toAmino(message: QueryContentByInitiativeResponse): QueryContentByInitiativeResponseAmino {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map(e => e ? ContentInitiativeLinkEntry.toAmino(e) : undefined);
    } else {
      obj.links = message.links;
    }
    obj.total_propagated = message.totalPropagated === "" ? undefined : message.totalPropagated;
    return obj;
  },
  fromAminoMsg(object: QueryContentByInitiativeResponseAminoMsg): QueryContentByInitiativeResponse {
    return QueryContentByInitiativeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContentByInitiativeResponseProtoMsg): QueryContentByInitiativeResponse {
    return QueryContentByInitiativeResponse.decode(message.value);
  },
  toProto(message: QueryContentByInitiativeResponse): Uint8Array {
    return QueryContentByInitiativeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContentByInitiativeResponse): QueryContentByInitiativeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryContentByInitiativeResponse",
      value: QueryContentByInitiativeResponse.encode(message).finish()
    };
  }
};