//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { RoleType, BondedRole, BondedRoleAmino, BondedRoleConfig, BondedRoleConfigAmino } from "./bonded_role";
import { Params, ParamsAmino } from "./params";
import { Member, MemberAmino, TrustLevel } from "./member";
import { Invitation, InvitationAmino } from "./invitation";
import { Project, ProjectAmino } from "./project";
import { Initiative, InitiativeAmino } from "./initiative";
import { Stake, StakeAmino, StakeTargetType, MemberStakePool, MemberStakePoolAmino, TagStakePool, TagStakePoolAmino, ProjectStakeInfo, ProjectStakeInfoAmino } from "./stake";
import { Challenge, ChallengeAmino } from "./challenge";
import { JuryReview, JuryReviewAmino } from "./jury_review";
import { Interim, InterimAmino } from "./interim";
import { ContentChallenge, ContentChallengeAmino } from "./content_challenge";
import { Tag, TagAmino } from "./tag";
import { ReservedTag, ReservedTagAmino } from "./reserved_tag";
import { TagReport, TagReportAmino } from "./tag_report";
import { TagBudget, TagBudgetAmino } from "./tag_budget";
import { TagBudgetAward, TagBudgetAwardAmino } from "./tag_budget_award";
import { MemberReport, MemberReportAmino } from "./member_report";
import { MemberWarning, MemberWarningAmino } from "./member_warning";
import { GovActionAppeal, GovActionAppealAmino } from "./gov_action_appeal";
import { JuryParticipation, JuryParticipationAmino } from "./jury_participation";
import { RoleActivity, RoleActivityAmino } from "./role_activity";
import { InitiativeReview, InitiativeReviewAmino } from "./initiative_review";
import { ReviewBounty, ReviewBountyAmino } from "./review_bounty";
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
  /**
   * sort_by orders the full project set before pagination is applied.
   * Supported keys: "id" (default), "name", "budget" (approved budget),
   * "status". Direction follows pagination.reverse. When set, pagination is
   * offset-based (next_key is an offset, not a store key).
   */
  sortBy: string;
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
  /**
   * sort_by orders the full project set before pagination is applied.
   * Supported keys: "id" (default), "name", "budget" (approved budget),
   * "status". Direction follows pagination.reverse. When set, pagination is
   * offset-based (next_key is an offset, not a store key).
   */
  sort_by?: string;
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
  /**
   * sort_by orders the full initiative set before pagination is applied.
   * Supported keys: "id" (default), "title", "status", "budget", "tier",
   * "conviction" (current/required completion ratio; initiatives with no
   * required conviction sort last). Direction follows pagination.reverse.
   * When set, pagination is offset-based (next_key is an offset, not a
   * store key).
   */
  sortBy: string;
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
  /**
   * sort_by orders the full initiative set before pagination is applied.
   * Supported keys: "id" (default), "title", "status", "budget", "tier",
   * "conviction" (current/required completion ratio; initiatives with no
   * required conviction sort last). Direction follows pagination.reverse.
   * When set, pagination is offset-based (next_key is an offset, not a
   * store key).
   */
  sort_by?: string;
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
  members: Member[];
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
  members?: MemberAmino[];
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
  invitation: Invitation[];
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
  invitation?: InvitationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryInvitationsByInviterResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryInvitationsByInviterResponse";
  value: QueryInvitationsByInviterResponseAmino;
}
/**
 * QueryJuryReviewsByJurorRequest defines the QueryJuryReviewsByJuror request.
 * @name QueryJuryReviewsByJurorRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryJuryReviewsByJurorRequest
 */
export interface QueryJuryReviewsByJurorRequest {
  juror: string;
  /**
   * When true, return only reviews still awaiting a verdict — the summons a
   * juror can still act on. Defaults to false, which returns their full
   * service history.
   */
  pendingOnly: boolean;
  pagination?: PageRequest;
}
export interface QueryJuryReviewsByJurorRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryJuryReviewsByJurorRequest";
  value: Uint8Array;
}
/**
 * QueryJuryReviewsByJurorRequest defines the QueryJuryReviewsByJuror request.
 * @name QueryJuryReviewsByJurorRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryJuryReviewsByJurorRequest
 */
export interface QueryJuryReviewsByJurorRequestAmino {
  juror?: string;
  /**
   * When true, return only reviews still awaiting a verdict — the summons a
   * juror can still act on. Defaults to false, which returns their full
   * service history.
   */
  pending_only?: boolean;
  pagination?: PageRequestAmino;
}
export interface QueryJuryReviewsByJurorRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryJuryReviewsByJurorRequest";
  value: QueryJuryReviewsByJurorRequestAmino;
}
/**
 * QueryJuryReviewsByJurorResponse defines the QueryJuryReviewsByJuror response.
 * @name QueryJuryReviewsByJurorResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryJuryReviewsByJurorResponse
 */
export interface QueryJuryReviewsByJurorResponse {
  juryReview: JuryReview[];
  pagination?: PageResponse;
}
export interface QueryJuryReviewsByJurorResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryJuryReviewsByJurorResponse";
  value: Uint8Array;
}
/**
 * QueryJuryReviewsByJurorResponse defines the QueryJuryReviewsByJuror response.
 * @name QueryJuryReviewsByJurorResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryJuryReviewsByJurorResponse
 */
export interface QueryJuryReviewsByJurorResponseAmino {
  jury_review?: JuryReviewAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryJuryReviewsByJurorResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryJuryReviewsByJurorResponse";
  value: QueryJuryReviewsByJurorResponseAmino;
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
  /**
   * Same keys and semantics as QueryAllProjectRequest.sort_by.
   */
  sortBy: string;
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
  /**
   * Same keys and semantics as QueryAllProjectRequest.sort_by.
   */
  sort_by?: string;
}
export interface QueryProjectsByCouncilRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryProjectsByCouncilRequest";
  value: QueryProjectsByCouncilRequestAmino;
}
/**
 * QueryProjectsByCouncilResponse defines the QueryProjectsByCouncilResponse message.
 * Prior versions declared singular project_id/name/status fields, which could
 * never carry more than one match; the fields were replaced (not extended)
 * because no client could have used them meaningfully.
 * @name QueryProjectsByCouncilResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCouncilResponse
 */
export interface QueryProjectsByCouncilResponse {
  projects: Project[];
  pagination?: PageResponse;
}
export interface QueryProjectsByCouncilResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryProjectsByCouncilResponse";
  value: Uint8Array;
}
/**
 * QueryProjectsByCouncilResponse defines the QueryProjectsByCouncilResponse message.
 * Prior versions declared singular project_id/name/status fields, which could
 * never carry more than one match; the fields were replaced (not extended)
 * because no client could have used them meaningfully.
 * @name QueryProjectsByCouncilResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCouncilResponse
 */
export interface QueryProjectsByCouncilResponseAmino {
  projects?: ProjectAmino[];
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
  /**
   * Same keys and semantics as QueryAllInitiativeRequest.sort_by.
   */
  sortBy: string;
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
  /**
   * Same keys and semantics as QueryAllInitiativeRequest.sort_by.
   */
  sort_by?: string;
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
  /**
   * Same keys and semantics as QueryAllInitiativeRequest.sort_by.
   */
  sortBy: string;
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
  /**
   * Same keys and semantics as QueryAllInitiativeRequest.sort_by.
   */
  sort_by?: string;
}
export interface QueryInitiativesByAssigneeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryInitiativesByAssigneeRequest";
  value: QueryInitiativesByAssigneeRequestAmino;
}
/**
 * QueryInitiativesByAssigneeResponse defines the QueryInitiativesByAssigneeResponse message.
 * Prior versions declared singular initiative_id/title/status fields, which
 * could never carry more than one match; the fields were replaced (not
 * extended) because no client could have used them meaningfully.
 * @name QueryInitiativesByAssigneeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByAssigneeResponse
 */
export interface QueryInitiativesByAssigneeResponse {
  initiatives: Initiative[];
  pagination?: PageResponse;
}
export interface QueryInitiativesByAssigneeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByAssigneeResponse";
  value: Uint8Array;
}
/**
 * QueryInitiativesByAssigneeResponse defines the QueryInitiativesByAssigneeResponse message.
 * Prior versions declared singular initiative_id/title/status fields, which
 * could never carry more than one match; the fields were replaced (not
 * extended) because no client could have used them meaningfully.
 * @name QueryInitiativesByAssigneeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByAssigneeResponse
 */
export interface QueryInitiativesByAssigneeResponseAmino {
  initiatives?: InitiativeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryInitiativesByAssigneeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryInitiativesByAssigneeResponse";
  value: QueryInitiativesByAssigneeResponseAmino;
}
/**
 * QueryInitiativesByCreatorRequest defines the QueryInitiativesByCreatorRequest message.
 * @name QueryInitiativesByCreatorRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByCreatorRequest
 */
export interface QueryInitiativesByCreatorRequest {
  creator: string;
  pagination?: PageRequest;
  /**
   * Same keys and semantics as QueryAllInitiativeRequest.sort_by.
   */
  sortBy: string;
}
export interface QueryInitiativesByCreatorRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByCreatorRequest";
  value: Uint8Array;
}
/**
 * QueryInitiativesByCreatorRequest defines the QueryInitiativesByCreatorRequest message.
 * @name QueryInitiativesByCreatorRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByCreatorRequest
 */
export interface QueryInitiativesByCreatorRequestAmino {
  creator?: string;
  pagination?: PageRequestAmino;
  /**
   * Same keys and semantics as QueryAllInitiativeRequest.sort_by.
   */
  sort_by?: string;
}
export interface QueryInitiativesByCreatorRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryInitiativesByCreatorRequest";
  value: QueryInitiativesByCreatorRequestAmino;
}
/**
 * QueryInitiativesByCreatorResponse defines the QueryInitiativesByCreatorResponse message.
 * @name QueryInitiativesByCreatorResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByCreatorResponse
 */
export interface QueryInitiativesByCreatorResponse {
  initiatives: Initiative[];
  pagination?: PageResponse;
}
export interface QueryInitiativesByCreatorResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByCreatorResponse";
  value: Uint8Array;
}
/**
 * QueryInitiativesByCreatorResponse defines the QueryInitiativesByCreatorResponse message.
 * @name QueryInitiativesByCreatorResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByCreatorResponse
 */
export interface QueryInitiativesByCreatorResponseAmino {
  initiatives?: InitiativeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryInitiativesByCreatorResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryInitiativesByCreatorResponse";
  value: QueryInitiativesByCreatorResponseAmino;
}
/**
 * QueryProjectsByCreatorRequest defines the QueryProjectsByCreatorRequest message.
 * @name QueryProjectsByCreatorRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCreatorRequest
 */
export interface QueryProjectsByCreatorRequest {
  creator: string;
  pagination?: PageRequest;
  /**
   * Same keys and semantics as QueryAllProjectRequest.sort_by.
   */
  sortBy: string;
}
export interface QueryProjectsByCreatorRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryProjectsByCreatorRequest";
  value: Uint8Array;
}
/**
 * QueryProjectsByCreatorRequest defines the QueryProjectsByCreatorRequest message.
 * @name QueryProjectsByCreatorRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCreatorRequest
 */
export interface QueryProjectsByCreatorRequestAmino {
  creator?: string;
  pagination?: PageRequestAmino;
  /**
   * Same keys and semantics as QueryAllProjectRequest.sort_by.
   */
  sort_by?: string;
}
export interface QueryProjectsByCreatorRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryProjectsByCreatorRequest";
  value: QueryProjectsByCreatorRequestAmino;
}
/**
 * QueryProjectsByCreatorResponse defines the QueryProjectsByCreatorResponse message.
 * @name QueryProjectsByCreatorResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCreatorResponse
 */
export interface QueryProjectsByCreatorResponse {
  projects: Project[];
  pagination?: PageResponse;
}
export interface QueryProjectsByCreatorResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryProjectsByCreatorResponse";
  value: Uint8Array;
}
/**
 * QueryProjectsByCreatorResponse defines the QueryProjectsByCreatorResponse message.
 * @name QueryProjectsByCreatorResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCreatorResponse
 */
export interface QueryProjectsByCreatorResponseAmino {
  projects?: ProjectAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryProjectsByCreatorResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryProjectsByCreatorResponse";
  value: QueryProjectsByCreatorResponseAmino;
}
/**
 * QueryAvailableInitiativesRequest defines the QueryAvailableInitiativesRequest message.
 * @name QueryAvailableInitiativesRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAvailableInitiativesRequest
 */
export interface QueryAvailableInitiativesRequest {
  pagination?: PageRequest;
  /**
   * Same keys and semantics as QueryAllInitiativeRequest.sort_by.
   */
  sortBy: string;
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
  /**
   * Same keys and semantics as QueryAllInitiativeRequest.sort_by.
   */
  sort_by?: string;
}
export interface QueryAvailableInitiativesRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAvailableInitiativesRequest";
  value: QueryAvailableInitiativesRequestAmino;
}
/**
 * QueryAvailableInitiativesResponse defines the QueryAvailableInitiativesResponse message.
 * Prior versions declared singular initiative_id/title/tier/budget fields,
 * which could never carry more than one match; the fields were replaced (not
 * extended) because no client could have used them meaningfully.
 * @name QueryAvailableInitiativesResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAvailableInitiativesResponse
 */
export interface QueryAvailableInitiativesResponse {
  initiatives: Initiative[];
  pagination?: PageResponse;
}
export interface QueryAvailableInitiativesResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAvailableInitiativesResponse";
  value: Uint8Array;
}
/**
 * QueryAvailableInitiativesResponse defines the QueryAvailableInitiativesResponse message.
 * Prior versions declared singular initiative_id/title/tier/budget fields,
 * which could never carry more than one match; the fields were replaced (not
 * extended) because no client could have used them meaningfully.
 * @name QueryAvailableInitiativesResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAvailableInitiativesResponse
 */
export interface QueryAvailableInitiativesResponseAmino {
  initiatives?: InitiativeAmino[];
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
  stakes: Stake[];
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
  stakes?: StakeAmino[];
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
 * QueryListTagStakePoolsRequest defines the request for listing tag stake pools.
 * @name QueryListTagStakePoolsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryListTagStakePoolsRequest
 */
export interface QueryListTagStakePoolsRequest {
  pagination?: PageRequest;
}
export interface QueryListTagStakePoolsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryListTagStakePoolsRequest";
  value: Uint8Array;
}
/**
 * QueryListTagStakePoolsRequest defines the request for listing tag stake pools.
 * @name QueryListTagStakePoolsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryListTagStakePoolsRequest
 */
export interface QueryListTagStakePoolsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListTagStakePoolsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryListTagStakePoolsRequest";
  value: QueryListTagStakePoolsRequestAmino;
}
/**
 * QueryListTagStakePoolsResponse defines the response for listing tag stake pools.
 * @name QueryListTagStakePoolsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryListTagStakePoolsResponse
 */
export interface QueryListTagStakePoolsResponse {
  pool: TagStakePool[];
  pagination?: PageResponse;
}
export interface QueryListTagStakePoolsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryListTagStakePoolsResponse";
  value: Uint8Array;
}
/**
 * QueryListTagStakePoolsResponse defines the response for listing tag stake pools.
 * @name QueryListTagStakePoolsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryListTagStakePoolsResponse
 */
export interface QueryListTagStakePoolsResponseAmino {
  pool?: TagStakePoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListTagStakePoolsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryListTagStakePoolsResponse";
  value: QueryListTagStakePoolsResponseAmino;
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
   * StakeTargetType (7=BLOG_AUTHOR_BOND, 8=FORUM_AUTHOR_BOND, 9=COLLECTION_AUTHOR_BOND, 10=BLOG_REPLY_AUTHOR_BOND)
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
   * StakeTargetType (7=BLOG_AUTHOR_BOND, 8=FORUM_AUTHOR_BOND, 9=COLLECTION_AUTHOR_BOND, 10=BLOG_REPLY_AUTHOR_BOND)
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
/**
 * Economic health queries
 * @name QueryDreamSupplyStatsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryDreamSupplyStatsRequest
 */
export interface QueryDreamSupplyStatsRequest {}
export interface QueryDreamSupplyStatsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryDreamSupplyStatsRequest";
  value: Uint8Array;
}
/**
 * Economic health queries
 * @name QueryDreamSupplyStatsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryDreamSupplyStatsRequest
 */
export interface QueryDreamSupplyStatsRequestAmino {}
export interface QueryDreamSupplyStatsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryDreamSupplyStatsRequest";
  value: QueryDreamSupplyStatsRequestAmino;
}
/**
 * @name QueryDreamSupplyStatsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryDreamSupplyStatsResponse
 */
export interface QueryDreamSupplyStatsResponse {
  totalMinted: string;
  totalBurned: string;
  circulating: string;
  totalStaked: string;
  treasuryBalance: string;
  stakedRatio: string;
}
export interface QueryDreamSupplyStatsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryDreamSupplyStatsResponse";
  value: Uint8Array;
}
/**
 * @name QueryDreamSupplyStatsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryDreamSupplyStatsResponse
 */
export interface QueryDreamSupplyStatsResponseAmino {
  total_minted?: string;
  total_burned?: string;
  circulating?: string;
  total_staked?: string;
  treasury_balance?: string;
  staked_ratio?: string;
}
export interface QueryDreamSupplyStatsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryDreamSupplyStatsResponse";
  value: QueryDreamSupplyStatsResponseAmino;
}
/**
 * @name QueryMintBurnRatioRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMintBurnRatioRequest
 */
export interface QueryMintBurnRatioRequest {}
export interface QueryMintBurnRatioRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryMintBurnRatioRequest";
  value: Uint8Array;
}
/**
 * @name QueryMintBurnRatioRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMintBurnRatioRequest
 */
export interface QueryMintBurnRatioRequestAmino {}
export interface QueryMintBurnRatioRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryMintBurnRatioRequest";
  value: QueryMintBurnRatioRequestAmino;
}
/**
 * @name QueryMintBurnRatioResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMintBurnRatioResponse
 */
export interface QueryMintBurnRatioResponse {
  seasonMinted: string;
  seasonBurned: string;
  ratio: string;
  season: number;
}
export interface QueryMintBurnRatioResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryMintBurnRatioResponse";
  value: Uint8Array;
}
/**
 * @name QueryMintBurnRatioResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMintBurnRatioResponse
 */
export interface QueryMintBurnRatioResponseAmino {
  season_minted?: string;
  season_burned?: string;
  ratio?: string;
  season?: number;
}
export interface QueryMintBurnRatioResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryMintBurnRatioResponse";
  value: QueryMintBurnRatioResponseAmino;
}
/**
 * @name QueryEffectiveApyRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryEffectiveApyRequest
 */
export interface QueryEffectiveApyRequest {}
export interface QueryEffectiveApyRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryEffectiveApyRequest";
  value: Uint8Array;
}
/**
 * @name QueryEffectiveApyRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryEffectiveApyRequest
 */
export interface QueryEffectiveApyRequestAmino {}
export interface QueryEffectiveApyRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryEffectiveApyRequest";
  value: QueryEffectiveApyRequestAmino;
}
/**
 * @name QueryEffectiveApyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryEffectiveApyResponse
 */
export interface QueryEffectiveApyResponse {
  seasonalPoolTotal: string;
  seasonalPoolRemaining: string;
  totalStaked: string;
  effectiveApy: string;
}
export interface QueryEffectiveApyResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryEffectiveApyResponse";
  value: Uint8Array;
}
/**
 * @name QueryEffectiveApyResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryEffectiveApyResponse
 */
export interface QueryEffectiveApyResponseAmino {
  seasonal_pool_total?: string;
  seasonal_pool_remaining?: string;
  total_staked?: string;
  effective_apy?: string;
}
export interface QueryEffectiveApyResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryEffectiveApyResponse";
  value: QueryEffectiveApyResponseAmino;
}
/**
 * @name QueryTreasuryStatusRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTreasuryStatusRequest
 */
export interface QueryTreasuryStatusRequest {}
export interface QueryTreasuryStatusRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryTreasuryStatusRequest";
  value: Uint8Array;
}
/**
 * @name QueryTreasuryStatusRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTreasuryStatusRequest
 */
export interface QueryTreasuryStatusRequestAmino {}
export interface QueryTreasuryStatusRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryTreasuryStatusRequest";
  value: QueryTreasuryStatusRequestAmino;
}
/**
 * @name QueryTreasuryStatusResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTreasuryStatusResponse
 */
export interface QueryTreasuryStatusResponse {
  balance: string;
  maxBalance: string;
  seasonInflow: string;
  seasonOutflow: string;
  seasonBurned: string;
}
export interface QueryTreasuryStatusResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryTreasuryStatusResponse";
  value: Uint8Array;
}
/**
 * @name QueryTreasuryStatusResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTreasuryStatusResponse
 */
export interface QueryTreasuryStatusResponseAmino {
  balance?: string;
  max_balance?: string;
  season_inflow?: string;
  season_outflow?: string;
  season_burned?: string;
}
export interface QueryTreasuryStatusResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryTreasuryStatusResponse";
  value: QueryTreasuryStatusResponseAmino;
}
/**
 * QueryGetTagRequest is request type for the Query/GetTag RPC method.
 * @name QueryGetTagRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagRequest
 */
export interface QueryGetTagRequest {
  name: string;
}
export interface QueryGetTagRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagRequest";
  value: Uint8Array;
}
/**
 * QueryGetTagRequest is request type for the Query/GetTag RPC method.
 * @name QueryGetTagRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagRequest
 */
export interface QueryGetTagRequestAmino {
  name?: string;
}
export interface QueryGetTagRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetTagRequest";
  value: QueryGetTagRequestAmino;
}
/**
 * QueryGetTagResponse is response type for the Query/GetTag RPC method.
 * @name QueryGetTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagResponse
 */
export interface QueryGetTagResponse {
  tag: Tag;
}
export interface QueryGetTagResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagResponse";
  value: Uint8Array;
}
/**
 * QueryGetTagResponse is response type for the Query/GetTag RPC method.
 * @name QueryGetTagResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagResponse
 */
export interface QueryGetTagResponseAmino {
  tag?: TagAmino;
}
export interface QueryGetTagResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetTagResponse";
  value: QueryGetTagResponseAmino;
}
/**
 * QueryAllTagRequest is request type for the Query/ListTag RPC method.
 * @name QueryAllTagRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagRequest
 */
export interface QueryAllTagRequest {
  pagination?: PageRequest;
}
export interface QueryAllTagRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagRequest";
  value: Uint8Array;
}
/**
 * QueryAllTagRequest is request type for the Query/ListTag RPC method.
 * @name QueryAllTagRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagRequest
 */
export interface QueryAllTagRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTagRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllTagRequest";
  value: QueryAllTagRequestAmino;
}
/**
 * QueryAllTagResponse is response type for the Query/ListTag RPC method.
 * @name QueryAllTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagResponse
 */
export interface QueryAllTagResponse {
  tag: Tag[];
  pagination?: PageResponse;
}
export interface QueryAllTagResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagResponse";
  value: Uint8Array;
}
/**
 * QueryAllTagResponse is response type for the Query/ListTag RPC method.
 * @name QueryAllTagResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagResponse
 */
export interface QueryAllTagResponseAmino {
  tag?: TagAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTagResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllTagResponse";
  value: QueryAllTagResponseAmino;
}
/**
 * QueryGetReservedTagRequest is request type for the Query/GetReservedTag RPC method.
 * @name QueryGetReservedTagRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetReservedTagRequest
 */
export interface QueryGetReservedTagRequest {
  name: string;
}
export interface QueryGetReservedTagRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetReservedTagRequest";
  value: Uint8Array;
}
/**
 * QueryGetReservedTagRequest is request type for the Query/GetReservedTag RPC method.
 * @name QueryGetReservedTagRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetReservedTagRequest
 */
export interface QueryGetReservedTagRequestAmino {
  name?: string;
}
export interface QueryGetReservedTagRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetReservedTagRequest";
  value: QueryGetReservedTagRequestAmino;
}
/**
 * QueryGetReservedTagResponse is response type for the Query/GetReservedTag RPC method.
 * @name QueryGetReservedTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetReservedTagResponse
 */
export interface QueryGetReservedTagResponse {
  reservedTag: ReservedTag;
}
export interface QueryGetReservedTagResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetReservedTagResponse";
  value: Uint8Array;
}
/**
 * QueryGetReservedTagResponse is response type for the Query/GetReservedTag RPC method.
 * @name QueryGetReservedTagResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetReservedTagResponse
 */
export interface QueryGetReservedTagResponseAmino {
  reserved_tag?: ReservedTagAmino;
}
export interface QueryGetReservedTagResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetReservedTagResponse";
  value: QueryGetReservedTagResponseAmino;
}
/**
 * QueryAllReservedTagRequest is request type for the Query/ListReservedTag RPC method.
 * @name QueryAllReservedTagRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllReservedTagRequest
 */
export interface QueryAllReservedTagRequest {
  pagination?: PageRequest;
}
export interface QueryAllReservedTagRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllReservedTagRequest";
  value: Uint8Array;
}
/**
 * QueryAllReservedTagRequest is request type for the Query/ListReservedTag RPC method.
 * @name QueryAllReservedTagRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllReservedTagRequest
 */
export interface QueryAllReservedTagRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllReservedTagRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllReservedTagRequest";
  value: QueryAllReservedTagRequestAmino;
}
/**
 * QueryAllReservedTagResponse is response type for the Query/ListReservedTag RPC method.
 * @name QueryAllReservedTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllReservedTagResponse
 */
export interface QueryAllReservedTagResponse {
  reservedTag: ReservedTag[];
  pagination?: PageResponse;
}
export interface QueryAllReservedTagResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllReservedTagResponse";
  value: Uint8Array;
}
/**
 * QueryAllReservedTagResponse is response type for the Query/ListReservedTag RPC method.
 * @name QueryAllReservedTagResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllReservedTagResponse
 */
export interface QueryAllReservedTagResponseAmino {
  reserved_tag?: ReservedTagAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllReservedTagResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllReservedTagResponse";
  value: QueryAllReservedTagResponseAmino;
}
/**
 * QueryTagExistsRequest is request type for the Query/TagExists RPC method.
 * @name QueryTagExistsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagExistsRequest
 */
export interface QueryTagExistsRequest {
  tagName: string;
}
export interface QueryTagExistsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryTagExistsRequest";
  value: Uint8Array;
}
/**
 * QueryTagExistsRequest is request type for the Query/TagExists RPC method.
 * @name QueryTagExistsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagExistsRequest
 */
export interface QueryTagExistsRequestAmino {
  tag_name?: string;
}
export interface QueryTagExistsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryTagExistsRequest";
  value: QueryTagExistsRequestAmino;
}
/**
 * QueryTagExistsResponse is response type for the Query/TagExists RPC method.
 * @name QueryTagExistsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagExistsResponse
 */
export interface QueryTagExistsResponse {
  exists: boolean;
  expirationTime: bigint;
}
export interface QueryTagExistsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryTagExistsResponse";
  value: Uint8Array;
}
/**
 * QueryTagExistsResponse is response type for the Query/TagExists RPC method.
 * @name QueryTagExistsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagExistsResponse
 */
export interface QueryTagExistsResponseAmino {
  exists?: boolean;
  expiration_time?: string;
}
export interface QueryTagExistsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryTagExistsResponse";
  value: QueryTagExistsResponseAmino;
}
/**
 * QueryGetTagReportRequest defines the QueryGetTagReportRequest message.
 * @name QueryGetTagReportRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagReportRequest
 */
export interface QueryGetTagReportRequest {
  tagName: string;
}
export interface QueryGetTagReportRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagReportRequest";
  value: Uint8Array;
}
/**
 * QueryGetTagReportRequest defines the QueryGetTagReportRequest message.
 * @name QueryGetTagReportRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagReportRequest
 */
export interface QueryGetTagReportRequestAmino {
  tag_name?: string;
}
export interface QueryGetTagReportRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetTagReportRequest";
  value: QueryGetTagReportRequestAmino;
}
/**
 * QueryGetTagReportResponse defines the QueryGetTagReportResponse message.
 * @name QueryGetTagReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagReportResponse
 */
export interface QueryGetTagReportResponse {
  tagReport: TagReport;
}
export interface QueryGetTagReportResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagReportResponse";
  value: Uint8Array;
}
/**
 * QueryGetTagReportResponse defines the QueryGetTagReportResponse message.
 * @name QueryGetTagReportResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagReportResponse
 */
export interface QueryGetTagReportResponseAmino {
  tag_report?: TagReportAmino;
}
export interface QueryGetTagReportResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetTagReportResponse";
  value: QueryGetTagReportResponseAmino;
}
/**
 * QueryAllTagReportRequest defines the QueryAllTagReportRequest message.
 * @name QueryAllTagReportRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagReportRequest
 */
export interface QueryAllTagReportRequest {
  pagination?: PageRequest;
}
export interface QueryAllTagReportRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagReportRequest";
  value: Uint8Array;
}
/**
 * QueryAllTagReportRequest defines the QueryAllTagReportRequest message.
 * @name QueryAllTagReportRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagReportRequest
 */
export interface QueryAllTagReportRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTagReportRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllTagReportRequest";
  value: QueryAllTagReportRequestAmino;
}
/**
 * QueryAllTagReportResponse defines the QueryAllTagReportResponse message.
 * @name QueryAllTagReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagReportResponse
 */
export interface QueryAllTagReportResponse {
  tagReport: TagReport[];
  pagination?: PageResponse;
}
export interface QueryAllTagReportResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagReportResponse";
  value: Uint8Array;
}
/**
 * QueryAllTagReportResponse defines the QueryAllTagReportResponse message.
 * @name QueryAllTagReportResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagReportResponse
 */
export interface QueryAllTagReportResponseAmino {
  tag_report?: TagReportAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTagReportResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllTagReportResponse";
  value: QueryAllTagReportResponseAmino;
}
/**
 * QueryTagReportsRequest defines the QueryTagReportsRequest message.
 * @name QueryTagReportsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagReportsRequest
 */
export interface QueryTagReportsRequest {
  pagination?: PageRequest;
}
export interface QueryTagReportsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryTagReportsRequest";
  value: Uint8Array;
}
/**
 * QueryTagReportsRequest defines the QueryTagReportsRequest message.
 * @name QueryTagReportsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagReportsRequest
 */
export interface QueryTagReportsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryTagReportsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryTagReportsRequest";
  value: QueryTagReportsRequestAmino;
}
/**
 * QueryTagReportsResponse defines the QueryTagReportsResponse message.
 * @name QueryTagReportsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagReportsResponse
 */
export interface QueryTagReportsResponse {
  tagName: string;
  underReview: boolean;
  pagination?: PageResponse;
}
export interface QueryTagReportsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryTagReportsResponse";
  value: Uint8Array;
}
/**
 * QueryTagReportsResponse defines the QueryTagReportsResponse message.
 * @name QueryTagReportsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagReportsResponse
 */
export interface QueryTagReportsResponseAmino {
  tag_name?: string;
  under_review?: boolean;
  pagination?: PageResponseAmino;
}
export interface QueryTagReportsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryTagReportsResponse";
  value: QueryTagReportsResponseAmino;
}
/**
 * QueryGetTagBudgetRequest defines the QueryGetTagBudgetRequest message.
 * @name QueryGetTagBudgetRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagBudgetRequest
 */
export interface QueryGetTagBudgetRequest {
  id: bigint;
}
export interface QueryGetTagBudgetRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagBudgetRequest";
  value: Uint8Array;
}
/**
 * QueryGetTagBudgetRequest defines the QueryGetTagBudgetRequest message.
 * @name QueryGetTagBudgetRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagBudgetRequest
 */
export interface QueryGetTagBudgetRequestAmino {
  id?: string;
}
export interface QueryGetTagBudgetRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetTagBudgetRequest";
  value: QueryGetTagBudgetRequestAmino;
}
/**
 * QueryGetTagBudgetResponse defines the QueryGetTagBudgetResponse message.
 * @name QueryGetTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagBudgetResponse
 */
export interface QueryGetTagBudgetResponse {
  tagBudget: TagBudget;
}
export interface QueryGetTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagBudgetResponse";
  value: Uint8Array;
}
/**
 * QueryGetTagBudgetResponse defines the QueryGetTagBudgetResponse message.
 * @name QueryGetTagBudgetResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagBudgetResponse
 */
export interface QueryGetTagBudgetResponseAmino {
  tag_budget?: TagBudgetAmino;
}
export interface QueryGetTagBudgetResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetTagBudgetResponse";
  value: QueryGetTagBudgetResponseAmino;
}
/**
 * QueryAllTagBudgetRequest defines the QueryAllTagBudgetRequest message.
 * @name QueryAllTagBudgetRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagBudgetRequest
 */
export interface QueryAllTagBudgetRequest {
  pagination?: PageRequest;
}
export interface QueryAllTagBudgetRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagBudgetRequest";
  value: Uint8Array;
}
/**
 * QueryAllTagBudgetRequest defines the QueryAllTagBudgetRequest message.
 * @name QueryAllTagBudgetRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagBudgetRequest
 */
export interface QueryAllTagBudgetRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTagBudgetRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllTagBudgetRequest";
  value: QueryAllTagBudgetRequestAmino;
}
/**
 * QueryAllTagBudgetResponse defines the QueryAllTagBudgetResponse message.
 * @name QueryAllTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagBudgetResponse
 */
export interface QueryAllTagBudgetResponse {
  tagBudget: TagBudget[];
  pagination?: PageResponse;
}
export interface QueryAllTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagBudgetResponse";
  value: Uint8Array;
}
/**
 * QueryAllTagBudgetResponse defines the QueryAllTagBudgetResponse message.
 * @name QueryAllTagBudgetResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagBudgetResponse
 */
export interface QueryAllTagBudgetResponseAmino {
  tag_budget?: TagBudgetAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTagBudgetResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllTagBudgetResponse";
  value: QueryAllTagBudgetResponseAmino;
}
/**
 * QueryGetTagBudgetAwardRequest defines the QueryGetTagBudgetAwardRequest message.
 * @name QueryGetTagBudgetAwardRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagBudgetAwardRequest
 */
export interface QueryGetTagBudgetAwardRequest {
  id: bigint;
}
export interface QueryGetTagBudgetAwardRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagBudgetAwardRequest";
  value: Uint8Array;
}
/**
 * QueryGetTagBudgetAwardRequest defines the QueryGetTagBudgetAwardRequest message.
 * @name QueryGetTagBudgetAwardRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagBudgetAwardRequest
 */
export interface QueryGetTagBudgetAwardRequestAmino {
  id?: string;
}
export interface QueryGetTagBudgetAwardRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetTagBudgetAwardRequest";
  value: QueryGetTagBudgetAwardRequestAmino;
}
/**
 * QueryGetTagBudgetAwardResponse defines the QueryGetTagBudgetAwardResponse message.
 * @name QueryGetTagBudgetAwardResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagBudgetAwardResponse
 */
export interface QueryGetTagBudgetAwardResponse {
  tagBudgetAward: TagBudgetAward;
}
export interface QueryGetTagBudgetAwardResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagBudgetAwardResponse";
  value: Uint8Array;
}
/**
 * QueryGetTagBudgetAwardResponse defines the QueryGetTagBudgetAwardResponse message.
 * @name QueryGetTagBudgetAwardResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagBudgetAwardResponse
 */
export interface QueryGetTagBudgetAwardResponseAmino {
  tag_budget_award?: TagBudgetAwardAmino;
}
export interface QueryGetTagBudgetAwardResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetTagBudgetAwardResponse";
  value: QueryGetTagBudgetAwardResponseAmino;
}
/**
 * QueryAllTagBudgetAwardRequest defines the QueryAllTagBudgetAwardRequest message.
 * @name QueryAllTagBudgetAwardRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagBudgetAwardRequest
 */
export interface QueryAllTagBudgetAwardRequest {
  pagination?: PageRequest;
}
export interface QueryAllTagBudgetAwardRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagBudgetAwardRequest";
  value: Uint8Array;
}
/**
 * QueryAllTagBudgetAwardRequest defines the QueryAllTagBudgetAwardRequest message.
 * @name QueryAllTagBudgetAwardRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagBudgetAwardRequest
 */
export interface QueryAllTagBudgetAwardRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTagBudgetAwardRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllTagBudgetAwardRequest";
  value: QueryAllTagBudgetAwardRequestAmino;
}
/**
 * QueryAllTagBudgetAwardResponse defines the QueryAllTagBudgetAwardResponse message.
 * @name QueryAllTagBudgetAwardResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagBudgetAwardResponse
 */
export interface QueryAllTagBudgetAwardResponse {
  tagBudgetAward: TagBudgetAward[];
  pagination?: PageResponse;
}
export interface QueryAllTagBudgetAwardResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagBudgetAwardResponse";
  value: Uint8Array;
}
/**
 * QueryAllTagBudgetAwardResponse defines the QueryAllTagBudgetAwardResponse message.
 * @name QueryAllTagBudgetAwardResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagBudgetAwardResponse
 */
export interface QueryAllTagBudgetAwardResponseAmino {
  tag_budget_award?: TagBudgetAwardAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTagBudgetAwardResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllTagBudgetAwardResponse";
  value: QueryAllTagBudgetAwardResponseAmino;
}
/**
 * QueryTagBudgetByTagRequest defines the QueryTagBudgetByTagRequest message.
 * @name QueryTagBudgetByTagRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetByTagRequest
 */
export interface QueryTagBudgetByTagRequest {
  tag: string;
}
export interface QueryTagBudgetByTagRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryTagBudgetByTagRequest";
  value: Uint8Array;
}
/**
 * QueryTagBudgetByTagRequest defines the QueryTagBudgetByTagRequest message.
 * @name QueryTagBudgetByTagRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetByTagRequest
 */
export interface QueryTagBudgetByTagRequestAmino {
  tag?: string;
}
export interface QueryTagBudgetByTagRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryTagBudgetByTagRequest";
  value: QueryTagBudgetByTagRequestAmino;
}
/**
 * QueryTagBudgetByTagResponse defines the QueryTagBudgetByTagResponse message.
 * @name QueryTagBudgetByTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetByTagResponse
 */
export interface QueryTagBudgetByTagResponse {
  budgetId: bigint;
  poolBalance: string;
  active: boolean;
}
export interface QueryTagBudgetByTagResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryTagBudgetByTagResponse";
  value: Uint8Array;
}
/**
 * QueryTagBudgetByTagResponse defines the QueryTagBudgetByTagResponse message.
 * @name QueryTagBudgetByTagResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetByTagResponse
 */
export interface QueryTagBudgetByTagResponseAmino {
  budget_id?: string;
  pool_balance?: string;
  active?: boolean;
}
export interface QueryTagBudgetByTagResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryTagBudgetByTagResponse";
  value: QueryTagBudgetByTagResponseAmino;
}
/**
 * QueryTagBudgetsRequest defines the QueryTagBudgetsRequest message.
 * @name QueryTagBudgetsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetsRequest
 */
export interface QueryTagBudgetsRequest {
  pagination?: PageRequest;
}
export interface QueryTagBudgetsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryTagBudgetsRequest";
  value: Uint8Array;
}
/**
 * QueryTagBudgetsRequest defines the QueryTagBudgetsRequest message.
 * @name QueryTagBudgetsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetsRequest
 */
export interface QueryTagBudgetsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryTagBudgetsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryTagBudgetsRequest";
  value: QueryTagBudgetsRequestAmino;
}
/**
 * QueryTagBudgetsResponse defines the QueryTagBudgetsResponse message.
 * @name QueryTagBudgetsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetsResponse
 */
export interface QueryTagBudgetsResponse {
  budgetId: bigint;
  tag: string;
  poolBalance: string;
  pagination?: PageResponse;
}
export interface QueryTagBudgetsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryTagBudgetsResponse";
  value: Uint8Array;
}
/**
 * QueryTagBudgetsResponse defines the QueryTagBudgetsResponse message.
 * @name QueryTagBudgetsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetsResponse
 */
export interface QueryTagBudgetsResponseAmino {
  budget_id?: string;
  tag?: string;
  pool_balance?: string;
  pagination?: PageResponseAmino;
}
export interface QueryTagBudgetsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryTagBudgetsResponse";
  value: QueryTagBudgetsResponseAmino;
}
/**
 * QueryTagBudgetAwardsRequest defines the QueryTagBudgetAwardsRequest message.
 * @name QueryTagBudgetAwardsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetAwardsRequest
 */
export interface QueryTagBudgetAwardsRequest {
  budgetId: bigint;
  pagination?: PageRequest;
}
export interface QueryTagBudgetAwardsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryTagBudgetAwardsRequest";
  value: Uint8Array;
}
/**
 * QueryTagBudgetAwardsRequest defines the QueryTagBudgetAwardsRequest message.
 * @name QueryTagBudgetAwardsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetAwardsRequest
 */
export interface QueryTagBudgetAwardsRequestAmino {
  budget_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryTagBudgetAwardsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryTagBudgetAwardsRequest";
  value: QueryTagBudgetAwardsRequestAmino;
}
/**
 * QueryTagBudgetAwardsResponse defines the QueryTagBudgetAwardsResponse message.
 * @name QueryTagBudgetAwardsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetAwardsResponse
 */
export interface QueryTagBudgetAwardsResponse {
  postId: bigint;
  recipient: string;
  amount: string;
  pagination?: PageResponse;
}
export interface QueryTagBudgetAwardsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryTagBudgetAwardsResponse";
  value: Uint8Array;
}
/**
 * QueryTagBudgetAwardsResponse defines the QueryTagBudgetAwardsResponse message.
 * @name QueryTagBudgetAwardsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetAwardsResponse
 */
export interface QueryTagBudgetAwardsResponseAmino {
  post_id?: string;
  recipient?: string;
  amount?: string;
  pagination?: PageResponseAmino;
}
export interface QueryTagBudgetAwardsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryTagBudgetAwardsResponse";
  value: QueryTagBudgetAwardsResponseAmino;
}
/**
 * QueryBondedRoleRequest fetches a single BondedRole record.
 * @name QueryBondedRoleRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRoleRequest
 */
export interface QueryBondedRoleRequest {
  roleType: RoleType;
  address: string;
}
export interface QueryBondedRoleRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryBondedRoleRequest";
  value: Uint8Array;
}
/**
 * QueryBondedRoleRequest fetches a single BondedRole record.
 * @name QueryBondedRoleRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRoleRequest
 */
export interface QueryBondedRoleRequestAmino {
  role_type?: RoleType;
  address?: string;
}
export interface QueryBondedRoleRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryBondedRoleRequest";
  value: QueryBondedRoleRequestAmino;
}
/**
 * QueryBondedRoleResponse holds the fetched BondedRole record.
 * @name QueryBondedRoleResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRoleResponse
 */
export interface QueryBondedRoleResponse {
  bondedRole: BondedRole;
}
export interface QueryBondedRoleResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryBondedRoleResponse";
  value: Uint8Array;
}
/**
 * QueryBondedRoleResponse holds the fetched BondedRole record.
 * @name QueryBondedRoleResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRoleResponse
 */
export interface QueryBondedRoleResponseAmino {
  bonded_role?: BondedRoleAmino;
}
export interface QueryBondedRoleResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryBondedRoleResponse";
  value: QueryBondedRoleResponseAmino;
}
/**
 * QueryBondedRolesByTypeRequest lists all BondedRole records for role_type.
 * @name QueryBondedRolesByTypeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRolesByTypeRequest
 */
export interface QueryBondedRolesByTypeRequest {
  roleType: RoleType;
  pagination?: PageRequest;
}
export interface QueryBondedRolesByTypeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryBondedRolesByTypeRequest";
  value: Uint8Array;
}
/**
 * QueryBondedRolesByTypeRequest lists all BondedRole records for role_type.
 * @name QueryBondedRolesByTypeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRolesByTypeRequest
 */
export interface QueryBondedRolesByTypeRequestAmino {
  role_type?: RoleType;
  pagination?: PageRequestAmino;
}
export interface QueryBondedRolesByTypeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryBondedRolesByTypeRequest";
  value: QueryBondedRolesByTypeRequestAmino;
}
/**
 * QueryBondedRolesByTypeResponse holds the paginated list of BondedRole records.
 * @name QueryBondedRolesByTypeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRolesByTypeResponse
 */
export interface QueryBondedRolesByTypeResponse {
  bondedRoles: BondedRole[];
  pagination?: PageResponse;
}
export interface QueryBondedRolesByTypeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryBondedRolesByTypeResponse";
  value: Uint8Array;
}
/**
 * QueryBondedRolesByTypeResponse holds the paginated list of BondedRole records.
 * @name QueryBondedRolesByTypeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRolesByTypeResponse
 */
export interface QueryBondedRolesByTypeResponseAmino {
  bonded_roles?: BondedRoleAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryBondedRolesByTypeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryBondedRolesByTypeResponse";
  value: QueryBondedRolesByTypeResponseAmino;
}
/**
 * QueryBondedRoleConfigRequest fetches the policy config for a role_type.
 * @name QueryBondedRoleConfigRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRoleConfigRequest
 */
export interface QueryBondedRoleConfigRequest {
  roleType: RoleType;
}
export interface QueryBondedRoleConfigRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryBondedRoleConfigRequest";
  value: Uint8Array;
}
/**
 * QueryBondedRoleConfigRequest fetches the policy config for a role_type.
 * @name QueryBondedRoleConfigRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRoleConfigRequest
 */
export interface QueryBondedRoleConfigRequestAmino {
  role_type?: RoleType;
}
export interface QueryBondedRoleConfigRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryBondedRoleConfigRequest";
  value: QueryBondedRoleConfigRequestAmino;
}
/**
 * QueryBondedRoleConfigResponse holds the fetched BondedRoleConfig.
 * @name QueryBondedRoleConfigResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRoleConfigResponse
 */
export interface QueryBondedRoleConfigResponse {
  bondedRoleConfig: BondedRoleConfig;
}
export interface QueryBondedRoleConfigResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryBondedRoleConfigResponse";
  value: Uint8Array;
}
/**
 * QueryBondedRoleConfigResponse holds the fetched BondedRoleConfig.
 * @name QueryBondedRoleConfigResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRoleConfigResponse
 */
export interface QueryBondedRoleConfigResponseAmino {
  bonded_role_config?: BondedRoleConfigAmino;
}
export interface QueryBondedRoleConfigResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryBondedRoleConfigResponse";
  value: QueryBondedRoleConfigResponseAmino;
}
/**
 * QueryGetMemberReportRequest defines the QueryGetMemberReportRequest message.
 * @name QueryGetMemberReportRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberReportRequest
 */
export interface QueryGetMemberReportRequest {
  member: string;
}
export interface QueryGetMemberReportRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberReportRequest";
  value: Uint8Array;
}
/**
 * QueryGetMemberReportRequest defines the QueryGetMemberReportRequest message.
 * @name QueryGetMemberReportRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberReportRequest
 */
export interface QueryGetMemberReportRequestAmino {
  member?: string;
}
export interface QueryGetMemberReportRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetMemberReportRequest";
  value: QueryGetMemberReportRequestAmino;
}
/**
 * QueryGetMemberReportResponse defines the QueryGetMemberReportResponse message.
 * @name QueryGetMemberReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberReportResponse
 */
export interface QueryGetMemberReportResponse {
  memberReport: MemberReport;
}
export interface QueryGetMemberReportResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberReportResponse";
  value: Uint8Array;
}
/**
 * QueryGetMemberReportResponse defines the QueryGetMemberReportResponse message.
 * @name QueryGetMemberReportResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberReportResponse
 */
export interface QueryGetMemberReportResponseAmino {
  member_report?: MemberReportAmino;
}
export interface QueryGetMemberReportResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetMemberReportResponse";
  value: QueryGetMemberReportResponseAmino;
}
/**
 * QueryAllMemberReportRequest defines the QueryAllMemberReportRequest message.
 * @name QueryAllMemberReportRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberReportRequest
 */
export interface QueryAllMemberReportRequest {
  pagination?: PageRequest;
}
export interface QueryAllMemberReportRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllMemberReportRequest";
  value: Uint8Array;
}
/**
 * QueryAllMemberReportRequest defines the QueryAllMemberReportRequest message.
 * @name QueryAllMemberReportRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberReportRequest
 */
export interface QueryAllMemberReportRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMemberReportRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllMemberReportRequest";
  value: QueryAllMemberReportRequestAmino;
}
/**
 * QueryAllMemberReportResponse defines the QueryAllMemberReportResponse message.
 * @name QueryAllMemberReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberReportResponse
 */
export interface QueryAllMemberReportResponse {
  memberReport: MemberReport[];
  pagination?: PageResponse;
}
export interface QueryAllMemberReportResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllMemberReportResponse";
  value: Uint8Array;
}
/**
 * QueryAllMemberReportResponse defines the QueryAllMemberReportResponse message.
 * @name QueryAllMemberReportResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberReportResponse
 */
export interface QueryAllMemberReportResponseAmino {
  member_report?: MemberReportAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMemberReportResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllMemberReportResponse";
  value: QueryAllMemberReportResponseAmino;
}
/**
 * QueryGetMemberWarningRequest defines the QueryGetMemberWarningRequest message.
 * @name QueryGetMemberWarningRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberWarningRequest
 */
export interface QueryGetMemberWarningRequest {
  id: bigint;
}
export interface QueryGetMemberWarningRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberWarningRequest";
  value: Uint8Array;
}
/**
 * QueryGetMemberWarningRequest defines the QueryGetMemberWarningRequest message.
 * @name QueryGetMemberWarningRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberWarningRequest
 */
export interface QueryGetMemberWarningRequestAmino {
  id?: string;
}
export interface QueryGetMemberWarningRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetMemberWarningRequest";
  value: QueryGetMemberWarningRequestAmino;
}
/**
 * QueryGetMemberWarningResponse defines the QueryGetMemberWarningResponse message.
 * @name QueryGetMemberWarningResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberWarningResponse
 */
export interface QueryGetMemberWarningResponse {
  memberWarning: MemberWarning;
}
export interface QueryGetMemberWarningResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberWarningResponse";
  value: Uint8Array;
}
/**
 * QueryGetMemberWarningResponse defines the QueryGetMemberWarningResponse message.
 * @name QueryGetMemberWarningResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberWarningResponse
 */
export interface QueryGetMemberWarningResponseAmino {
  member_warning?: MemberWarningAmino;
}
export interface QueryGetMemberWarningResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetMemberWarningResponse";
  value: QueryGetMemberWarningResponseAmino;
}
/**
 * QueryAllMemberWarningRequest defines the QueryAllMemberWarningRequest message.
 * @name QueryAllMemberWarningRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberWarningRequest
 */
export interface QueryAllMemberWarningRequest {
  pagination?: PageRequest;
}
export interface QueryAllMemberWarningRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllMemberWarningRequest";
  value: Uint8Array;
}
/**
 * QueryAllMemberWarningRequest defines the QueryAllMemberWarningRequest message.
 * @name QueryAllMemberWarningRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberWarningRequest
 */
export interface QueryAllMemberWarningRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMemberWarningRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllMemberWarningRequest";
  value: QueryAllMemberWarningRequestAmino;
}
/**
 * QueryAllMemberWarningResponse defines the QueryAllMemberWarningResponse message.
 * @name QueryAllMemberWarningResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberWarningResponse
 */
export interface QueryAllMemberWarningResponse {
  memberWarning: MemberWarning[];
  pagination?: PageResponse;
}
export interface QueryAllMemberWarningResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllMemberWarningResponse";
  value: Uint8Array;
}
/**
 * QueryAllMemberWarningResponse defines the QueryAllMemberWarningResponse message.
 * @name QueryAllMemberWarningResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberWarningResponse
 */
export interface QueryAllMemberWarningResponseAmino {
  member_warning?: MemberWarningAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMemberWarningResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllMemberWarningResponse";
  value: QueryAllMemberWarningResponseAmino;
}
/**
 * QueryGetGovActionAppealRequest defines the QueryGetGovActionAppealRequest message.
 * @name QueryGetGovActionAppealRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetGovActionAppealRequest
 */
export interface QueryGetGovActionAppealRequest {
  id: bigint;
}
export interface QueryGetGovActionAppealRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetGovActionAppealRequest";
  value: Uint8Array;
}
/**
 * QueryGetGovActionAppealRequest defines the QueryGetGovActionAppealRequest message.
 * @name QueryGetGovActionAppealRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetGovActionAppealRequest
 */
export interface QueryGetGovActionAppealRequestAmino {
  id?: string;
}
export interface QueryGetGovActionAppealRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetGovActionAppealRequest";
  value: QueryGetGovActionAppealRequestAmino;
}
/**
 * QueryGetGovActionAppealResponse defines the QueryGetGovActionAppealResponse message.
 * @name QueryGetGovActionAppealResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetGovActionAppealResponse
 */
export interface QueryGetGovActionAppealResponse {
  govActionAppeal: GovActionAppeal;
}
export interface QueryGetGovActionAppealResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetGovActionAppealResponse";
  value: Uint8Array;
}
/**
 * QueryGetGovActionAppealResponse defines the QueryGetGovActionAppealResponse message.
 * @name QueryGetGovActionAppealResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetGovActionAppealResponse
 */
export interface QueryGetGovActionAppealResponseAmino {
  gov_action_appeal?: GovActionAppealAmino;
}
export interface QueryGetGovActionAppealResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetGovActionAppealResponse";
  value: QueryGetGovActionAppealResponseAmino;
}
/**
 * QueryAllGovActionAppealRequest defines the QueryAllGovActionAppealRequest message.
 * @name QueryAllGovActionAppealRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllGovActionAppealRequest
 */
export interface QueryAllGovActionAppealRequest {
  pagination?: PageRequest;
}
export interface QueryAllGovActionAppealRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllGovActionAppealRequest";
  value: Uint8Array;
}
/**
 * QueryAllGovActionAppealRequest defines the QueryAllGovActionAppealRequest message.
 * @name QueryAllGovActionAppealRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllGovActionAppealRequest
 */
export interface QueryAllGovActionAppealRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllGovActionAppealRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllGovActionAppealRequest";
  value: QueryAllGovActionAppealRequestAmino;
}
/**
 * QueryAllGovActionAppealResponse defines the QueryAllGovActionAppealResponse message.
 * @name QueryAllGovActionAppealResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllGovActionAppealResponse
 */
export interface QueryAllGovActionAppealResponse {
  govActionAppeal: GovActionAppeal[];
  pagination?: PageResponse;
}
export interface QueryAllGovActionAppealResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllGovActionAppealResponse";
  value: Uint8Array;
}
/**
 * QueryAllGovActionAppealResponse defines the QueryAllGovActionAppealResponse message.
 * @name QueryAllGovActionAppealResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllGovActionAppealResponse
 */
export interface QueryAllGovActionAppealResponseAmino {
  gov_action_appeal?: GovActionAppealAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllGovActionAppealResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllGovActionAppealResponse";
  value: QueryAllGovActionAppealResponseAmino;
}
/**
 * QueryGetJuryParticipationRequest defines the QueryGetJuryParticipationRequest message.
 * @name QueryGetJuryParticipationRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetJuryParticipationRequest
 */
export interface QueryGetJuryParticipationRequest {
  juror: string;
}
export interface QueryGetJuryParticipationRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetJuryParticipationRequest";
  value: Uint8Array;
}
/**
 * QueryGetJuryParticipationRequest defines the QueryGetJuryParticipationRequest message.
 * @name QueryGetJuryParticipationRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetJuryParticipationRequest
 */
export interface QueryGetJuryParticipationRequestAmino {
  juror?: string;
}
export interface QueryGetJuryParticipationRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetJuryParticipationRequest";
  value: QueryGetJuryParticipationRequestAmino;
}
/**
 * QueryGetJuryParticipationResponse defines the QueryGetJuryParticipationResponse message.
 * @name QueryGetJuryParticipationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetJuryParticipationResponse
 */
export interface QueryGetJuryParticipationResponse {
  juryParticipation: JuryParticipation;
}
export interface QueryGetJuryParticipationResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryGetJuryParticipationResponse";
  value: Uint8Array;
}
/**
 * QueryGetJuryParticipationResponse defines the QueryGetJuryParticipationResponse message.
 * @name QueryGetJuryParticipationResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetJuryParticipationResponse
 */
export interface QueryGetJuryParticipationResponseAmino {
  jury_participation?: JuryParticipationAmino;
}
export interface QueryGetJuryParticipationResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryGetJuryParticipationResponse";
  value: QueryGetJuryParticipationResponseAmino;
}
/**
 * QueryAllJuryParticipationRequest defines the QueryAllJuryParticipationRequest message.
 * @name QueryAllJuryParticipationRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllJuryParticipationRequest
 */
export interface QueryAllJuryParticipationRequest {
  pagination?: PageRequest;
}
export interface QueryAllJuryParticipationRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllJuryParticipationRequest";
  value: Uint8Array;
}
/**
 * QueryAllJuryParticipationRequest defines the QueryAllJuryParticipationRequest message.
 * @name QueryAllJuryParticipationRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllJuryParticipationRequest
 */
export interface QueryAllJuryParticipationRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllJuryParticipationRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllJuryParticipationRequest";
  value: QueryAllJuryParticipationRequestAmino;
}
/**
 * QueryAllJuryParticipationResponse defines the QueryAllJuryParticipationResponse message.
 * @name QueryAllJuryParticipationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllJuryParticipationResponse
 */
export interface QueryAllJuryParticipationResponse {
  juryParticipation: JuryParticipation[];
  pagination?: PageResponse;
}
export interface QueryAllJuryParticipationResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAllJuryParticipationResponse";
  value: Uint8Array;
}
/**
 * QueryAllJuryParticipationResponse defines the QueryAllJuryParticipationResponse message.
 * @name QueryAllJuryParticipationResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllJuryParticipationResponse
 */
export interface QueryAllJuryParticipationResponseAmino {
  jury_participation?: JuryParticipationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllJuryParticipationResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAllJuryParticipationResponse";
  value: QueryAllJuryParticipationResponseAmino;
}
/**
 * QueryMemberReportsRequest defines the QueryMemberReportsRequest message.
 * @name QueryMemberReportsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberReportsRequest
 */
export interface QueryMemberReportsRequest {
  pagination?: PageRequest;
}
export interface QueryMemberReportsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryMemberReportsRequest";
  value: Uint8Array;
}
/**
 * QueryMemberReportsRequest defines the QueryMemberReportsRequest message.
 * @name QueryMemberReportsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberReportsRequest
 */
export interface QueryMemberReportsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryMemberReportsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryMemberReportsRequest";
  value: QueryMemberReportsRequestAmino;
}
/**
 * QueryMemberReportsResponse defines the QueryMemberReportsResponse message.
 * @name QueryMemberReportsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberReportsResponse
 */
export interface QueryMemberReportsResponse {
  member: string;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryMemberReportsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryMemberReportsResponse";
  value: Uint8Array;
}
/**
 * QueryMemberReportsResponse defines the QueryMemberReportsResponse message.
 * @name QueryMemberReportsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberReportsResponse
 */
export interface QueryMemberReportsResponseAmino {
  member?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryMemberReportsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryMemberReportsResponse";
  value: QueryMemberReportsResponseAmino;
}
/**
 * QueryMemberWarningsRequest defines the QueryMemberWarningsRequest message.
 * @name QueryMemberWarningsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberWarningsRequest
 */
export interface QueryMemberWarningsRequest {
  member: string;
  pagination?: PageRequest;
}
export interface QueryMemberWarningsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryMemberWarningsRequest";
  value: Uint8Array;
}
/**
 * QueryMemberWarningsRequest defines the QueryMemberWarningsRequest message.
 * @name QueryMemberWarningsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberWarningsRequest
 */
export interface QueryMemberWarningsRequestAmino {
  member?: string;
  pagination?: PageRequestAmino;
}
export interface QueryMemberWarningsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryMemberWarningsRequest";
  value: QueryMemberWarningsRequestAmino;
}
/**
 * QueryMemberWarningsResponse defines the QueryMemberWarningsResponse message.
 * @name QueryMemberWarningsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberWarningsResponse
 */
export interface QueryMemberWarningsResponse {
  warningNumber: bigint;
  reason: string;
  issuedAt: bigint;
  pagination?: PageResponse;
}
export interface QueryMemberWarningsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryMemberWarningsResponse";
  value: Uint8Array;
}
/**
 * QueryMemberWarningsResponse defines the QueryMemberWarningsResponse message.
 * @name QueryMemberWarningsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberWarningsResponse
 */
export interface QueryMemberWarningsResponseAmino {
  warning_number?: string;
  reason?: string;
  issued_at?: string;
  pagination?: PageResponseAmino;
}
export interface QueryMemberWarningsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryMemberWarningsResponse";
  value: QueryMemberWarningsResponseAmino;
}
/**
 * QueryMemberStandingRequest defines the QueryMemberStandingRequest message.
 * @name QueryMemberStandingRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberStandingRequest
 */
export interface QueryMemberStandingRequest {
  member: string;
}
export interface QueryMemberStandingRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryMemberStandingRequest";
  value: Uint8Array;
}
/**
 * QueryMemberStandingRequest defines the QueryMemberStandingRequest message.
 * @name QueryMemberStandingRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberStandingRequest
 */
export interface QueryMemberStandingRequestAmino {
  member?: string;
}
export interface QueryMemberStandingRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryMemberStandingRequest";
  value: QueryMemberStandingRequestAmino;
}
/**
 * QueryMemberStandingResponse defines the QueryMemberStandingResponse message.
 * @name QueryMemberStandingResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberStandingResponse
 */
export interface QueryMemberStandingResponse {
  warningCount: bigint;
  activeReport: boolean;
  trustTier: bigint;
}
export interface QueryMemberStandingResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryMemberStandingResponse";
  value: Uint8Array;
}
/**
 * QueryMemberStandingResponse defines the QueryMemberStandingResponse message.
 * @name QueryMemberStandingResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberStandingResponse
 */
export interface QueryMemberStandingResponseAmino {
  warning_count?: string;
  active_report?: boolean;
  trust_tier?: string;
}
export interface QueryMemberStandingResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryMemberStandingResponse";
  value: QueryMemberStandingResponseAmino;
}
/**
 * QueryRequiredInvitationStakeRequest is the request type for
 * Query/RequiredInvitationStake. Frontend clients call this to determine the
 * minimum DREAM stake an inviter must lock for their next invitation.
 * @name QueryRequiredInvitationStakeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRequiredInvitationStakeRequest
 */
export interface QueryRequiredInvitationStakeRequest {
  inviter: string;
}
export interface QueryRequiredInvitationStakeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryRequiredInvitationStakeRequest";
  value: Uint8Array;
}
/**
 * QueryRequiredInvitationStakeRequest is the request type for
 * Query/RequiredInvitationStake. Frontend clients call this to determine the
 * minimum DREAM stake an inviter must lock for their next invitation.
 * @name QueryRequiredInvitationStakeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRequiredInvitationStakeRequest
 */
export interface QueryRequiredInvitationStakeRequestAmino {
  inviter?: string;
}
export interface QueryRequiredInvitationStakeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryRequiredInvitationStakeRequest";
  value: QueryRequiredInvitationStakeRequestAmino;
}
/**
 * QueryRequiredInvitationStakeResponse reports the effective minimum stake
 * (in micro-DREAM) and the inputs used to derive it. The required_stake
 * already accounts for InvitationCostMultiplier escalation based on how many
 * of the inviter's seasonal credits have been spent.
 * @name QueryRequiredInvitationStakeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRequiredInvitationStakeResponse
 */
export interface QueryRequiredInvitationStakeResponse {
  /**
   * Effective minimum stake required for the next invitation, in micro-DREAM.
   */
  requiredStake: string;
  /**
   * Base floor (params.MinInvitationStake) before any cost-multiplier escalation.
   */
  baseStake: string;
  /**
   * InvitationCostMultiplier raised to credits_used (mirror of the on-chain math).
   */
  costMultiplier: string;
  /**
   * Number of invitation credits the inviter has already spent this season.
   */
  creditsUsed: number;
  /**
   * Credits the inviter has remaining for the current season.
   */
  creditsRemaining: number;
  /**
   * Trust level enum used to derive the credit cap.
   */
  trustLevel: TrustLevel;
}
export interface QueryRequiredInvitationStakeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryRequiredInvitationStakeResponse";
  value: Uint8Array;
}
/**
 * QueryRequiredInvitationStakeResponse reports the effective minimum stake
 * (in micro-DREAM) and the inputs used to derive it. The required_stake
 * already accounts for InvitationCostMultiplier escalation based on how many
 * of the inviter's seasonal credits have been spent.
 * @name QueryRequiredInvitationStakeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRequiredInvitationStakeResponse
 */
export interface QueryRequiredInvitationStakeResponseAmino {
  /**
   * Effective minimum stake required for the next invitation, in micro-DREAM.
   */
  required_stake?: string;
  /**
   * Base floor (params.MinInvitationStake) before any cost-multiplier escalation.
   */
  base_stake?: string;
  /**
   * InvitationCostMultiplier raised to credits_used (mirror of the on-chain math).
   */
  cost_multiplier?: string;
  /**
   * Number of invitation credits the inviter has already spent this season.
   */
  credits_used?: number;
  /**
   * Credits the inviter has remaining for the current season.
   */
  credits_remaining?: number;
  /**
   * Trust level enum used to derive the credit cap.
   */
  trust_level?: TrustLevel;
}
export interface QueryRequiredInvitationStakeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryRequiredInvitationStakeResponse";
  value: QueryRequiredInvitationStakeResponseAmino;
}
/**
 * QueryAuthorBondsByTypeRequest defines the QueryAuthorBondsByTypeRequest message.
 * @name QueryAuthorBondsByTypeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAuthorBondsByTypeRequest
 */
export interface QueryAuthorBondsByTypeRequest {
  targetType: bigint;
  pagination?: PageRequest;
}
export interface QueryAuthorBondsByTypeRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAuthorBondsByTypeRequest";
  value: Uint8Array;
}
/**
 * QueryAuthorBondsByTypeRequest defines the QueryAuthorBondsByTypeRequest message.
 * @name QueryAuthorBondsByTypeRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAuthorBondsByTypeRequest
 */
export interface QueryAuthorBondsByTypeRequestAmino {
  target_type?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAuthorBondsByTypeRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryAuthorBondsByTypeRequest";
  value: QueryAuthorBondsByTypeRequestAmino;
}
/**
 * QueryAuthorBondsByTypeResponse defines the QueryAuthorBondsByTypeResponse message.
 * @name QueryAuthorBondsByTypeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAuthorBondsByTypeResponse
 */
export interface QueryAuthorBondsByTypeResponse {
  bonds: Stake[];
  pagination?: PageResponse;
}
export interface QueryAuthorBondsByTypeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryAuthorBondsByTypeResponse";
  value: Uint8Array;
}
/**
 * QueryAuthorBondsByTypeResponse defines the QueryAuthorBondsByTypeResponse message.
 * @name QueryAuthorBondsByTypeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAuthorBondsByTypeResponse
 */
export interface QueryAuthorBondsByTypeResponseAmino {
  bonds?: StakeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAuthorBondsByTypeResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryAuthorBondsByTypeResponse";
  value: QueryAuthorBondsByTypeResponseAmino;
}
/**
 * QueryRoleActivityRequest defines the QueryRoleActivity request.
 * @name QueryRoleActivityRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRoleActivityRequest
 */
export interface QueryRoleActivityRequest {
  roleType: RoleType;
  address: string;
}
export interface QueryRoleActivityRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryRoleActivityRequest";
  value: Uint8Array;
}
/**
 * QueryRoleActivityRequest defines the QueryRoleActivity request.
 * @name QueryRoleActivityRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRoleActivityRequest
 */
export interface QueryRoleActivityRequestAmino {
  role_type?: RoleType;
  address?: string;
}
export interface QueryRoleActivityRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryRoleActivityRequest";
  value: QueryRoleActivityRequestAmino;
}
/**
 * QueryRoleActivityResponse defines the QueryRoleActivity response.
 * @name QueryRoleActivityResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRoleActivityResponse
 */
export interface QueryRoleActivityResponse {
  roleActivity: RoleActivity;
}
export interface QueryRoleActivityResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryRoleActivityResponse";
  value: Uint8Array;
}
/**
 * QueryRoleActivityResponse defines the QueryRoleActivity response.
 * @name QueryRoleActivityResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRoleActivityResponse
 */
export interface QueryRoleActivityResponseAmino {
  role_activity?: RoleActivityAmino;
}
export interface QueryRoleActivityResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryRoleActivityResponse";
  value: QueryRoleActivityResponseAmino;
}
/**
 * QueryRoleRewardPoolsRequest is the request for RoleRewardPools.
 * @name QueryRoleRewardPoolsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRoleRewardPoolsRequest
 */
export interface QueryRoleRewardPoolsRequest {}
export interface QueryRoleRewardPoolsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryRoleRewardPoolsRequest";
  value: Uint8Array;
}
/**
 * QueryRoleRewardPoolsRequest is the request for RoleRewardPools.
 * @name QueryRoleRewardPoolsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRoleRewardPoolsRequest
 */
export interface QueryRoleRewardPoolsRequestAmino {}
export interface QueryRoleRewardPoolsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryRoleRewardPoolsRequest";
  value: QueryRoleRewardPoolsRequestAmino;
}
/**
 * RoleRewardPoolStatus is one bonded-role reward pool's funding state.
 * @name RoleRewardPoolStatus
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleRewardPoolStatus
 */
export interface RoleRewardPoolStatus {
  /**
   * role identifies the bonded role the pool pays, e.g. "content_sentinel".
   */
  role: string;
  /**
   * address is the derived sub-address holding the pool balance.
   */
  address: string;
  /**
   * balance is the pool's current SPARK balance.
   */
  balance: string;
  /**
   * cap is the pool's configured ceiling; excess is burned each epoch.
   */
  cap: string;
  /**
   * headroom is max(0, cap - balance) and sets this pool's share of the draw.
   */
  headroom: string;
}
export interface RoleRewardPoolStatusProtoMsg {
  typeUrl: "/sparkdream.rep.v1.RoleRewardPoolStatus";
  value: Uint8Array;
}
/**
 * RoleRewardPoolStatus is one bonded-role reward pool's funding state.
 * @name RoleRewardPoolStatusAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleRewardPoolStatus
 */
export interface RoleRewardPoolStatusAmino {
  /**
   * role identifies the bonded role the pool pays, e.g. "content_sentinel".
   */
  role?: string;
  /**
   * address is the derived sub-address holding the pool balance.
   */
  address?: string;
  /**
   * balance is the pool's current SPARK balance.
   */
  balance?: string;
  /**
   * cap is the pool's configured ceiling; excess is burned each epoch.
   */
  cap?: string;
  /**
   * headroom is max(0, cap - balance) and sets this pool's share of the draw.
   */
  headroom?: string;
}
export interface RoleRewardPoolStatusAminoMsg {
  type: "/sparkdream.rep.v1.RoleRewardPoolStatus";
  value: RoleRewardPoolStatusAmino;
}
/**
 * QueryRoleRewardPoolsResponse is the response for RoleRewardPools.
 * @name QueryRoleRewardPoolsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRoleRewardPoolsResponse
 */
export interface QueryRoleRewardPoolsResponse {
  pools: RoleRewardPoolStatus[];
  /**
   * funded_today is the SPARK already drawn from the community pool on the
   * current UTC day.
   */
  fundedToday: string;
  /**
   * daily_funding_cap is today's computed allowance in uspark --
   * annual_provisions * community_tax * inflation_share / 365. Zero means
   * automatic funding is disabled or nothing is being minted yet.
   */
  dailyFundingCap: string;
  /**
   * inflation_share is the role_reward_inflation_share param the allowance is
   * derived from. Reported alongside the computed amount so an operator can
   * tell a retuned share from a change in the inflation rate.
   */
  inflationShare: string;
}
export interface QueryRoleRewardPoolsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryRoleRewardPoolsResponse";
  value: Uint8Array;
}
/**
 * QueryRoleRewardPoolsResponse is the response for RoleRewardPools.
 * @name QueryRoleRewardPoolsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRoleRewardPoolsResponse
 */
export interface QueryRoleRewardPoolsResponseAmino {
  pools?: RoleRewardPoolStatusAmino[];
  /**
   * funded_today is the SPARK already drawn from the community pool on the
   * current UTC day.
   */
  funded_today?: string;
  /**
   * daily_funding_cap is today's computed allowance in uspark --
   * annual_provisions * community_tax * inflation_share / 365. Zero means
   * automatic funding is disabled or nothing is being minted yet.
   */
  daily_funding_cap?: string;
  /**
   * inflation_share is the role_reward_inflation_share param the allowance is
   * derived from. Reported alongside the computed amount so an operator can
   * tell a retuned share from a change in the inflation rate.
   */
  inflation_share?: string;
}
export interface QueryRoleRewardPoolsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryRoleRewardPoolsResponse";
  value: QueryRoleRewardPoolsResponseAmino;
}
/**
 * QueryInitiativeReviewsRequest asks for the verdicts on one initiative.
 * 
 * Deliberately has NO round selector. The codebase convention for an optional
 * numeric filter is a plain field where zero means unset (see
 * QueryPostsRequest.category_id, QuerySeasonStatsRequest.season,
 * QueryShieldRequest.epoch) — which works there because none of those domains
 * has a valid zero. Review rounds number from 0, so the same convention would
 * make the first round unaddressable. Rather than diverge from the convention
 * for one message, every round is returned: max_review_rounds bounds the set at
 * 3, so there is nothing to select between and nothing to paginate.
 * @name QueryInitiativeReviewsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativeReviewsRequest
 */
export interface QueryInitiativeReviewsRequest {
  initiativeId: bigint;
}
export interface QueryInitiativeReviewsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativeReviewsRequest";
  value: Uint8Array;
}
/**
 * QueryInitiativeReviewsRequest asks for the verdicts on one initiative.
 * 
 * Deliberately has NO round selector. The codebase convention for an optional
 * numeric filter is a plain field where zero means unset (see
 * QueryPostsRequest.category_id, QuerySeasonStatsRequest.season,
 * QueryShieldRequest.epoch) — which works there because none of those domains
 * has a valid zero. Review rounds number from 0, so the same convention would
 * make the first round unaddressable. Rather than diverge from the convention
 * for one message, every round is returned: max_review_rounds bounds the set at
 * 3, so there is nothing to select between and nothing to paginate.
 * @name QueryInitiativeReviewsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativeReviewsRequest
 */
export interface QueryInitiativeReviewsRequestAmino {
  initiative_id?: string;
}
export interface QueryInitiativeReviewsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryInitiativeReviewsRequest";
  value: QueryInitiativeReviewsRequestAmino;
}
/**
 * QueryInitiativeReviewsResponse returns every round's verdicts, plus what the
 * current round adds up to against the gate.
 * @name QueryInitiativeReviewsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativeReviewsResponse
 */
export interface QueryInitiativeReviewsResponse {
  /**
   * Oldest round first. A rejected round's verdicts stay here so the decision
   * that sent work back can still be audited.
   */
  rounds: InitiativeReviewRound[];
  /**
   * The round the gate is judging now.
   */
  currentRound: number;
  /**
   * Approving verdicts on the current round.
   */
  approvals: number;
  /**
   * How many approvals the gate needs — the maximum of the initiative's
   * snapshotted project policy and the live chain-wide budget threshold.
   */
  required: number;
  /**
   * Whether the gate is satisfied. Reported rather than left to the caller to
   * recompute, because "approvals >= required" is not the whole rule: a
   * committee escalation can satisfy or fail the gate on its own.
   */
  satisfied: boolean;
}
export interface QueryInitiativeReviewsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativeReviewsResponse";
  value: Uint8Array;
}
/**
 * QueryInitiativeReviewsResponse returns every round's verdicts, plus what the
 * current round adds up to against the gate.
 * @name QueryInitiativeReviewsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativeReviewsResponse
 */
export interface QueryInitiativeReviewsResponseAmino {
  /**
   * Oldest round first. A rejected round's verdicts stay here so the decision
   * that sent work back can still be audited.
   */
  rounds?: InitiativeReviewRoundAmino[];
  /**
   * The round the gate is judging now.
   */
  current_round?: number;
  /**
   * Approving verdicts on the current round.
   */
  approvals?: number;
  /**
   * How many approvals the gate needs — the maximum of the initiative's
   * snapshotted project policy and the live chain-wide budget threshold.
   */
  required?: number;
  /**
   * Whether the gate is satisfied. Reported rather than left to the caller to
   * recompute, because "approvals >= required" is not the whole rule: a
   * committee escalation can satisfy or fail the gate on its own.
   */
  satisfied?: boolean;
}
export interface QueryInitiativeReviewsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryInitiativeReviewsResponse";
  value: QueryInitiativeReviewsResponseAmino;
}
/**
 * InitiativeReviewRound groups one round's verdicts.
 * @name InitiativeReviewRound
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.InitiativeReviewRound
 */
export interface InitiativeReviewRound {
  round: number;
  reviews: InitiativeReview[];
  approvals: number;
}
export interface InitiativeReviewRoundProtoMsg {
  typeUrl: "/sparkdream.rep.v1.InitiativeReviewRound";
  value: Uint8Array;
}
/**
 * InitiativeReviewRound groups one round's verdicts.
 * @name InitiativeReviewRoundAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.InitiativeReviewRound
 */
export interface InitiativeReviewRoundAmino {
  round?: number;
  reviews?: InitiativeReviewAmino[];
  approvals?: number;
}
export interface InitiativeReviewRoundAminoMsg {
  type: "/sparkdream.rep.v1.InitiativeReviewRound";
  value: InitiativeReviewRoundAmino;
}
/**
 * QueryReviewBountyRequest asks what is escrowed against an initiative.
 * @name QueryReviewBountyRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryReviewBountyRequest
 */
export interface QueryReviewBountyRequest {
  initiativeId: bigint;
}
export interface QueryReviewBountyRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryReviewBountyRequest";
  value: Uint8Array;
}
/**
 * QueryReviewBountyRequest asks what is escrowed against an initiative.
 * @name QueryReviewBountyRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryReviewBountyRequest
 */
export interface QueryReviewBountyRequestAmino {
  initiative_id?: string;
}
export interface QueryReviewBountyRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryReviewBountyRequest";
  value: QueryReviewBountyRequestAmino;
}
/**
 * QueryReviewBountyResponse returns the escrow and its reclaim state.
 * @name QueryReviewBountyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryReviewBountyResponse
 */
export interface QueryReviewBountyResponse {
  bounty: ReviewBounty;
  /**
   * Per-funder view of when each contribution matures, so a funder can see what
   * they may reclaim without recomputing the delay themselves.
   */
  reclaimStatus: ReviewBountyReclaimStatus[];
}
export interface QueryReviewBountyResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryReviewBountyResponse";
  value: Uint8Array;
}
/**
 * QueryReviewBountyResponse returns the escrow and its reclaim state.
 * @name QueryReviewBountyResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryReviewBountyResponse
 */
export interface QueryReviewBountyResponseAmino {
  bounty?: ReviewBountyAmino;
  /**
   * Per-funder view of when each contribution matures, so a funder can see what
   * they may reclaim without recomputing the delay themselves.
   */
  reclaim_status?: ReviewBountyReclaimStatusAmino[];
}
export interface QueryReviewBountyResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryReviewBountyResponse";
  value: QueryReviewBountyResponseAmino;
}
/**
 * ReviewBountyReclaimStatus is one contribution's reclaim eligibility.
 * @name ReviewBountyReclaimStatus
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReviewBountyReclaimStatus
 */
export interface ReviewBountyReclaimStatus {
  funder: string;
  amount: string;
  /**
   * Height at which the reclaim delay elapses for this contribution.
   */
  reclaimableAtHeight: bigint;
  /**
   * False whenever the bounty is committed, regardless of height: a verdict has
   * been filed and the escrow now belongs to paying for it.
   */
  reclaimable: boolean;
}
export interface ReviewBountyReclaimStatusProtoMsg {
  typeUrl: "/sparkdream.rep.v1.ReviewBountyReclaimStatus";
  value: Uint8Array;
}
/**
 * ReviewBountyReclaimStatus is one contribution's reclaim eligibility.
 * @name ReviewBountyReclaimStatusAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReviewBountyReclaimStatus
 */
export interface ReviewBountyReclaimStatusAmino {
  funder?: string;
  amount?: string;
  /**
   * Height at which the reclaim delay elapses for this contribution.
   */
  reclaimable_at_height?: string;
  /**
   * False whenever the bounty is committed, regardless of height: a verdict has
   * been filed and the escrow now belongs to paying for it.
   */
  reclaimable?: boolean;
}
export interface ReviewBountyReclaimStatusAminoMsg {
  type: "/sparkdream.rep.v1.ReviewBountyReclaimStatus";
  value: ReviewBountyReclaimStatusAmino;
}
/**
 * QueryEscalatedReviewsRequest asks what is awaiting the committee.
 * @name QueryEscalatedReviewsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryEscalatedReviewsRequest
 */
export interface QueryEscalatedReviewsRequest {}
export interface QueryEscalatedReviewsRequestProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryEscalatedReviewsRequest";
  value: Uint8Array;
}
/**
 * QueryEscalatedReviewsRequest asks what is awaiting the committee.
 * @name QueryEscalatedReviewsRequestAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryEscalatedReviewsRequest
 */
export interface QueryEscalatedReviewsRequestAmino {}
export interface QueryEscalatedReviewsRequestAminoMsg {
  type: "/sparkdream.rep.v1.QueryEscalatedReviewsRequest";
  value: QueryEscalatedReviewsRequestAmino;
}
/**
 * QueryEscalatedReviewsResponse lists the escalated rounds.
 * 
 * Escalation is recorded in a separate set rather than on the initiative --
 * ReviewEscalation is reset to NONE when a round escalates -- so without this
 * query a committee has no way to find the decisions waiting on it.
 * @name QueryEscalatedReviewsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryEscalatedReviewsResponse
 */
export interface QueryEscalatedReviewsResponse {
  escalations: EscalatedReview[];
}
export interface QueryEscalatedReviewsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.QueryEscalatedReviewsResponse";
  value: Uint8Array;
}
/**
 * QueryEscalatedReviewsResponse lists the escalated rounds.
 * 
 * Escalation is recorded in a separate set rather than on the initiative --
 * ReviewEscalation is reset to NONE when a round escalates -- so without this
 * query a committee has no way to find the decisions waiting on it.
 * @name QueryEscalatedReviewsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryEscalatedReviewsResponse
 */
export interface QueryEscalatedReviewsResponseAmino {
  escalations?: EscalatedReviewAmino[];
}
export interface QueryEscalatedReviewsResponseAminoMsg {
  type: "/sparkdream.rep.v1.QueryEscalatedReviewsResponse";
  value: QueryEscalatedReviewsResponseAmino;
}
/**
 * EscalatedReview is one round sitting with the Operations Committee.
 * @name EscalatedReview
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.EscalatedReview
 */
export interface EscalatedReview {
  initiativeId: bigint;
  round: number;
  /**
   * Height at which committee silence rejects the round.
   */
  reviewDeadline: bigint;
  title: string;
  assignee: string;
}
export interface EscalatedReviewProtoMsg {
  typeUrl: "/sparkdream.rep.v1.EscalatedReview";
  value: Uint8Array;
}
/**
 * EscalatedReview is one round sitting with the Operations Committee.
 * @name EscalatedReviewAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.EscalatedReview
 */
export interface EscalatedReviewAmino {
  initiative_id?: string;
  round?: number;
  /**
   * Height at which committee silence rejects the round.
   */
  review_deadline?: string;
  title?: string;
  assignee?: string;
}
export interface EscalatedReviewAminoMsg {
  type: "/sparkdream.rep.v1.EscalatedReview";
  value: EscalatedReviewAmino;
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
    pagination: undefined,
    sortBy: ""
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
    if (message.sortBy !== "") {
      writer.uint32(18).string(message.sortBy);
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
        case 2:
          message.sortBy = reader.string();
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
    message.sortBy = object.sortBy ?? "";
    return message;
  },
  fromAmino(object: QueryAllProjectRequestAmino): QueryAllProjectRequest {
    const message = createBaseQueryAllProjectRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.sort_by !== undefined && object.sort_by !== null) {
      message.sortBy = object.sort_by;
    }
    return message;
  },
  toAmino(message: QueryAllProjectRequest): QueryAllProjectRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.sort_by = message.sortBy === "" ? undefined : message.sortBy;
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
    pagination: undefined,
    sortBy: ""
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
    if (message.sortBy !== "") {
      writer.uint32(18).string(message.sortBy);
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
        case 2:
          message.sortBy = reader.string();
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
    message.sortBy = object.sortBy ?? "";
    return message;
  },
  fromAmino(object: QueryAllInitiativeRequestAmino): QueryAllInitiativeRequest {
    const message = createBaseQueryAllInitiativeRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.sort_by !== undefined && object.sort_by !== null) {
      message.sortBy = object.sort_by;
    }
    return message;
  },
  toAmino(message: QueryAllInitiativeRequest): QueryAllInitiativeRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.sort_by = message.sortBy === "" ? undefined : message.sortBy;
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
    members: [],
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
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.members.push(Member.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryMembersByTrustLevelResponse>): QueryMembersByTrustLevelResponse {
    const message = createBaseQueryMembersByTrustLevelResponse();
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMembersByTrustLevelResponseAmino): QueryMembersByTrustLevelResponse {
    const message = createBaseQueryMembersByTrustLevelResponse();
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMembersByTrustLevelResponse): QueryMembersByTrustLevelResponseAmino {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
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
    invitation: [],
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
    for (const v of message.invitation) {
      Invitation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
  fromPartial(object: DeepPartial<QueryInvitationsByInviterResponse>): QueryInvitationsByInviterResponse {
    const message = createBaseQueryInvitationsByInviterResponse();
    message.invitation = object.invitation?.map(e => Invitation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInvitationsByInviterResponseAmino): QueryInvitationsByInviterResponse {
    const message = createBaseQueryInvitationsByInviterResponse();
    message.invitation = object.invitation?.map(e => Invitation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInvitationsByInviterResponse): QueryInvitationsByInviterResponseAmino {
    const obj: any = {};
    if (message.invitation) {
      obj.invitation = message.invitation.map(e => e ? Invitation.toAmino(e) : undefined);
    } else {
      obj.invitation = message.invitation;
    }
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
function createBaseQueryJuryReviewsByJurorRequest(): QueryJuryReviewsByJurorRequest {
  return {
    juror: "",
    pendingOnly: false,
    pagination: undefined
  };
}
/**
 * QueryJuryReviewsByJurorRequest defines the QueryJuryReviewsByJuror request.
 * @name QueryJuryReviewsByJurorRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryJuryReviewsByJurorRequest
 */
export const QueryJuryReviewsByJurorRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryJuryReviewsByJurorRequest",
  encode(message: QueryJuryReviewsByJurorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juror !== "") {
      writer.uint32(10).string(message.juror);
    }
    if (message.pendingOnly === true) {
      writer.uint32(16).bool(message.pendingOnly);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryJuryReviewsByJurorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJuryReviewsByJurorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juror = reader.string();
          break;
        case 2:
          message.pendingOnly = reader.bool();
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
  fromPartial(object: DeepPartial<QueryJuryReviewsByJurorRequest>): QueryJuryReviewsByJurorRequest {
    const message = createBaseQueryJuryReviewsByJurorRequest();
    message.juror = object.juror ?? "";
    message.pendingOnly = object.pendingOnly ?? false;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryJuryReviewsByJurorRequestAmino): QueryJuryReviewsByJurorRequest {
    const message = createBaseQueryJuryReviewsByJurorRequest();
    if (object.juror !== undefined && object.juror !== null) {
      message.juror = object.juror;
    }
    if (object.pending_only !== undefined && object.pending_only !== null) {
      message.pendingOnly = object.pending_only;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryJuryReviewsByJurorRequest): QueryJuryReviewsByJurorRequestAmino {
    const obj: any = {};
    obj.juror = message.juror === "" ? undefined : message.juror;
    obj.pending_only = message.pendingOnly === false ? undefined : message.pendingOnly;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryJuryReviewsByJurorRequestAminoMsg): QueryJuryReviewsByJurorRequest {
    return QueryJuryReviewsByJurorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJuryReviewsByJurorRequestProtoMsg): QueryJuryReviewsByJurorRequest {
    return QueryJuryReviewsByJurorRequest.decode(message.value);
  },
  toProto(message: QueryJuryReviewsByJurorRequest): Uint8Array {
    return QueryJuryReviewsByJurorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryJuryReviewsByJurorRequest): QueryJuryReviewsByJurorRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryJuryReviewsByJurorRequest",
      value: QueryJuryReviewsByJurorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryJuryReviewsByJurorResponse(): QueryJuryReviewsByJurorResponse {
  return {
    juryReview: [],
    pagination: undefined
  };
}
/**
 * QueryJuryReviewsByJurorResponse defines the QueryJuryReviewsByJuror response.
 * @name QueryJuryReviewsByJurorResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryJuryReviewsByJurorResponse
 */
export const QueryJuryReviewsByJurorResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryJuryReviewsByJurorResponse",
  encode(message: QueryJuryReviewsByJurorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.juryReview) {
      JuryReview.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryJuryReviewsByJurorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJuryReviewsByJurorResponse();
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
  fromPartial(object: DeepPartial<QueryJuryReviewsByJurorResponse>): QueryJuryReviewsByJurorResponse {
    const message = createBaseQueryJuryReviewsByJurorResponse();
    message.juryReview = object.juryReview?.map(e => JuryReview.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryJuryReviewsByJurorResponseAmino): QueryJuryReviewsByJurorResponse {
    const message = createBaseQueryJuryReviewsByJurorResponse();
    message.juryReview = object.jury_review?.map(e => JuryReview.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryJuryReviewsByJurorResponse): QueryJuryReviewsByJurorResponseAmino {
    const obj: any = {};
    if (message.juryReview) {
      obj.jury_review = message.juryReview.map(e => e ? JuryReview.toAmino(e) : undefined);
    } else {
      obj.jury_review = message.juryReview;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryJuryReviewsByJurorResponseAminoMsg): QueryJuryReviewsByJurorResponse {
    return QueryJuryReviewsByJurorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJuryReviewsByJurorResponseProtoMsg): QueryJuryReviewsByJurorResponse {
    return QueryJuryReviewsByJurorResponse.decode(message.value);
  },
  toProto(message: QueryJuryReviewsByJurorResponse): Uint8Array {
    return QueryJuryReviewsByJurorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryJuryReviewsByJurorResponse): QueryJuryReviewsByJurorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryJuryReviewsByJurorResponse",
      value: QueryJuryReviewsByJurorResponse.encode(message).finish()
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
    pagination: undefined,
    sortBy: ""
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
    if (message.sortBy !== "") {
      writer.uint32(26).string(message.sortBy);
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
        case 3:
          message.sortBy = reader.string();
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
    message.sortBy = object.sortBy ?? "";
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
    if (object.sort_by !== undefined && object.sort_by !== null) {
      message.sortBy = object.sort_by;
    }
    return message;
  },
  toAmino(message: QueryProjectsByCouncilRequest): QueryProjectsByCouncilRequestAmino {
    const obj: any = {};
    obj.council = message.council === "" ? undefined : message.council;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.sort_by = message.sortBy === "" ? undefined : message.sortBy;
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
    projects: [],
    pagination: undefined
  };
}
/**
 * QueryProjectsByCouncilResponse defines the QueryProjectsByCouncilResponse message.
 * Prior versions declared singular project_id/name/status fields, which could
 * never carry more than one match; the fields were replaced (not extended)
 * because no client could have used them meaningfully.
 * @name QueryProjectsByCouncilResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCouncilResponse
 */
export const QueryProjectsByCouncilResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryProjectsByCouncilResponse",
  encode(message: QueryProjectsByCouncilResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.projects) {
      Project.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.projects.push(Project.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryProjectsByCouncilResponse>): QueryProjectsByCouncilResponse {
    const message = createBaseQueryProjectsByCouncilResponse();
    message.projects = object.projects?.map(e => Project.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProjectsByCouncilResponseAmino): QueryProjectsByCouncilResponse {
    const message = createBaseQueryProjectsByCouncilResponse();
    message.projects = object.projects?.map(e => Project.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProjectsByCouncilResponse): QueryProjectsByCouncilResponseAmino {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e ? Project.toAmino(e) : undefined);
    } else {
      obj.projects = message.projects;
    }
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
    pagination: undefined,
    sortBy: ""
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
    if (message.sortBy !== "") {
      writer.uint32(26).string(message.sortBy);
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
        case 3:
          message.sortBy = reader.string();
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
    message.sortBy = object.sortBy ?? "";
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
    if (object.sort_by !== undefined && object.sort_by !== null) {
      message.sortBy = object.sort_by;
    }
    return message;
  },
  toAmino(message: QueryInitiativesByProjectRequest): QueryInitiativesByProjectRequestAmino {
    const obj: any = {};
    obj.project_id = message.projectId !== BigInt(0) ? message.projectId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.sort_by = message.sortBy === "" ? undefined : message.sortBy;
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
    pagination: undefined,
    sortBy: ""
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
    if (message.sortBy !== "") {
      writer.uint32(26).string(message.sortBy);
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
        case 3:
          message.sortBy = reader.string();
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
    message.sortBy = object.sortBy ?? "";
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
    if (object.sort_by !== undefined && object.sort_by !== null) {
      message.sortBy = object.sort_by;
    }
    return message;
  },
  toAmino(message: QueryInitiativesByAssigneeRequest): QueryInitiativesByAssigneeRequestAmino {
    const obj: any = {};
    obj.assignee = message.assignee === "" ? undefined : message.assignee;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.sort_by = message.sortBy === "" ? undefined : message.sortBy;
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
    initiatives: [],
    pagination: undefined
  };
}
/**
 * QueryInitiativesByAssigneeResponse defines the QueryInitiativesByAssigneeResponse message.
 * Prior versions declared singular initiative_id/title/status fields, which
 * could never carry more than one match; the fields were replaced (not
 * extended) because no client could have used them meaningfully.
 * @name QueryInitiativesByAssigneeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByAssigneeResponse
 */
export const QueryInitiativesByAssigneeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByAssigneeResponse",
  encode(message: QueryInitiativesByAssigneeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.initiatives) {
      Initiative.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
  fromPartial(object: DeepPartial<QueryInitiativesByAssigneeResponse>): QueryInitiativesByAssigneeResponse {
    const message = createBaseQueryInitiativesByAssigneeResponse();
    message.initiatives = object.initiatives?.map(e => Initiative.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInitiativesByAssigneeResponseAmino): QueryInitiativesByAssigneeResponse {
    const message = createBaseQueryInitiativesByAssigneeResponse();
    message.initiatives = object.initiatives?.map(e => Initiative.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInitiativesByAssigneeResponse): QueryInitiativesByAssigneeResponseAmino {
    const obj: any = {};
    if (message.initiatives) {
      obj.initiatives = message.initiatives.map(e => e ? Initiative.toAmino(e) : undefined);
    } else {
      obj.initiatives = message.initiatives;
    }
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
function createBaseQueryInitiativesByCreatorRequest(): QueryInitiativesByCreatorRequest {
  return {
    creator: "",
    pagination: undefined,
    sortBy: ""
  };
}
/**
 * QueryInitiativesByCreatorRequest defines the QueryInitiativesByCreatorRequest message.
 * @name QueryInitiativesByCreatorRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByCreatorRequest
 */
export const QueryInitiativesByCreatorRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByCreatorRequest",
  encode(message: QueryInitiativesByCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.sortBy !== "") {
      writer.uint32(26).string(message.sortBy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInitiativesByCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitiativesByCreatorRequest();
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
          message.sortBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryInitiativesByCreatorRequest>): QueryInitiativesByCreatorRequest {
    const message = createBaseQueryInitiativesByCreatorRequest();
    message.creator = object.creator ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.sortBy = object.sortBy ?? "";
    return message;
  },
  fromAmino(object: QueryInitiativesByCreatorRequestAmino): QueryInitiativesByCreatorRequest {
    const message = createBaseQueryInitiativesByCreatorRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.sort_by !== undefined && object.sort_by !== null) {
      message.sortBy = object.sort_by;
    }
    return message;
  },
  toAmino(message: QueryInitiativesByCreatorRequest): QueryInitiativesByCreatorRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.sort_by = message.sortBy === "" ? undefined : message.sortBy;
    return obj;
  },
  fromAminoMsg(object: QueryInitiativesByCreatorRequestAminoMsg): QueryInitiativesByCreatorRequest {
    return QueryInitiativesByCreatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInitiativesByCreatorRequestProtoMsg): QueryInitiativesByCreatorRequest {
    return QueryInitiativesByCreatorRequest.decode(message.value);
  },
  toProto(message: QueryInitiativesByCreatorRequest): Uint8Array {
    return QueryInitiativesByCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInitiativesByCreatorRequest): QueryInitiativesByCreatorRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInitiativesByCreatorRequest",
      value: QueryInitiativesByCreatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInitiativesByCreatorResponse(): QueryInitiativesByCreatorResponse {
  return {
    initiatives: [],
    pagination: undefined
  };
}
/**
 * QueryInitiativesByCreatorResponse defines the QueryInitiativesByCreatorResponse message.
 * @name QueryInitiativesByCreatorResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativesByCreatorResponse
 */
export const QueryInitiativesByCreatorResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativesByCreatorResponse",
  encode(message: QueryInitiativesByCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.initiatives) {
      Initiative.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInitiativesByCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitiativesByCreatorResponse();
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
  fromPartial(object: DeepPartial<QueryInitiativesByCreatorResponse>): QueryInitiativesByCreatorResponse {
    const message = createBaseQueryInitiativesByCreatorResponse();
    message.initiatives = object.initiatives?.map(e => Initiative.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryInitiativesByCreatorResponseAmino): QueryInitiativesByCreatorResponse {
    const message = createBaseQueryInitiativesByCreatorResponse();
    message.initiatives = object.initiatives?.map(e => Initiative.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryInitiativesByCreatorResponse): QueryInitiativesByCreatorResponseAmino {
    const obj: any = {};
    if (message.initiatives) {
      obj.initiatives = message.initiatives.map(e => e ? Initiative.toAmino(e) : undefined);
    } else {
      obj.initiatives = message.initiatives;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInitiativesByCreatorResponseAminoMsg): QueryInitiativesByCreatorResponse {
    return QueryInitiativesByCreatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInitiativesByCreatorResponseProtoMsg): QueryInitiativesByCreatorResponse {
    return QueryInitiativesByCreatorResponse.decode(message.value);
  },
  toProto(message: QueryInitiativesByCreatorResponse): Uint8Array {
    return QueryInitiativesByCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInitiativesByCreatorResponse): QueryInitiativesByCreatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInitiativesByCreatorResponse",
      value: QueryInitiativesByCreatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProjectsByCreatorRequest(): QueryProjectsByCreatorRequest {
  return {
    creator: "",
    pagination: undefined,
    sortBy: ""
  };
}
/**
 * QueryProjectsByCreatorRequest defines the QueryProjectsByCreatorRequest message.
 * @name QueryProjectsByCreatorRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCreatorRequest
 */
export const QueryProjectsByCreatorRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryProjectsByCreatorRequest",
  encode(message: QueryProjectsByCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.sortBy !== "") {
      writer.uint32(26).string(message.sortBy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectsByCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsByCreatorRequest();
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
          message.sortBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProjectsByCreatorRequest>): QueryProjectsByCreatorRequest {
    const message = createBaseQueryProjectsByCreatorRequest();
    message.creator = object.creator ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.sortBy = object.sortBy ?? "";
    return message;
  },
  fromAmino(object: QueryProjectsByCreatorRequestAmino): QueryProjectsByCreatorRequest {
    const message = createBaseQueryProjectsByCreatorRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.sort_by !== undefined && object.sort_by !== null) {
      message.sortBy = object.sort_by;
    }
    return message;
  },
  toAmino(message: QueryProjectsByCreatorRequest): QueryProjectsByCreatorRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.sort_by = message.sortBy === "" ? undefined : message.sortBy;
    return obj;
  },
  fromAminoMsg(object: QueryProjectsByCreatorRequestAminoMsg): QueryProjectsByCreatorRequest {
    return QueryProjectsByCreatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProjectsByCreatorRequestProtoMsg): QueryProjectsByCreatorRequest {
    return QueryProjectsByCreatorRequest.decode(message.value);
  },
  toProto(message: QueryProjectsByCreatorRequest): Uint8Array {
    return QueryProjectsByCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProjectsByCreatorRequest): QueryProjectsByCreatorRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryProjectsByCreatorRequest",
      value: QueryProjectsByCreatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProjectsByCreatorResponse(): QueryProjectsByCreatorResponse {
  return {
    projects: [],
    pagination: undefined
  };
}
/**
 * QueryProjectsByCreatorResponse defines the QueryProjectsByCreatorResponse message.
 * @name QueryProjectsByCreatorResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryProjectsByCreatorResponse
 */
export const QueryProjectsByCreatorResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryProjectsByCreatorResponse",
  encode(message: QueryProjectsByCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.projects) {
      Project.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProjectsByCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProjectsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projects.push(Project.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryProjectsByCreatorResponse>): QueryProjectsByCreatorResponse {
    const message = createBaseQueryProjectsByCreatorResponse();
    message.projects = object.projects?.map(e => Project.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryProjectsByCreatorResponseAmino): QueryProjectsByCreatorResponse {
    const message = createBaseQueryProjectsByCreatorResponse();
    message.projects = object.projects?.map(e => Project.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProjectsByCreatorResponse): QueryProjectsByCreatorResponseAmino {
    const obj: any = {};
    if (message.projects) {
      obj.projects = message.projects.map(e => e ? Project.toAmino(e) : undefined);
    } else {
      obj.projects = message.projects;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProjectsByCreatorResponseAminoMsg): QueryProjectsByCreatorResponse {
    return QueryProjectsByCreatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProjectsByCreatorResponseProtoMsg): QueryProjectsByCreatorResponse {
    return QueryProjectsByCreatorResponse.decode(message.value);
  },
  toProto(message: QueryProjectsByCreatorResponse): Uint8Array {
    return QueryProjectsByCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProjectsByCreatorResponse): QueryProjectsByCreatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryProjectsByCreatorResponse",
      value: QueryProjectsByCreatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAvailableInitiativesRequest(): QueryAvailableInitiativesRequest {
  return {
    pagination: undefined,
    sortBy: ""
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
    if (message.sortBy !== "") {
      writer.uint32(18).string(message.sortBy);
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
        case 2:
          message.sortBy = reader.string();
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
    message.sortBy = object.sortBy ?? "";
    return message;
  },
  fromAmino(object: QueryAvailableInitiativesRequestAmino): QueryAvailableInitiativesRequest {
    const message = createBaseQueryAvailableInitiativesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.sort_by !== undefined && object.sort_by !== null) {
      message.sortBy = object.sort_by;
    }
    return message;
  },
  toAmino(message: QueryAvailableInitiativesRequest): QueryAvailableInitiativesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.sort_by = message.sortBy === "" ? undefined : message.sortBy;
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
    initiatives: [],
    pagination: undefined
  };
}
/**
 * QueryAvailableInitiativesResponse defines the QueryAvailableInitiativesResponse message.
 * Prior versions declared singular initiative_id/title/tier/budget fields,
 * which could never carry more than one match; the fields were replaced (not
 * extended) because no client could have used them meaningfully.
 * @name QueryAvailableInitiativesResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAvailableInitiativesResponse
 */
export const QueryAvailableInitiativesResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAvailableInitiativesResponse",
  encode(message: QueryAvailableInitiativesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.initiatives) {
      Initiative.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
  fromPartial(object: DeepPartial<QueryAvailableInitiativesResponse>): QueryAvailableInitiativesResponse {
    const message = createBaseQueryAvailableInitiativesResponse();
    message.initiatives = object.initiatives?.map(e => Initiative.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAvailableInitiativesResponseAmino): QueryAvailableInitiativesResponse {
    const message = createBaseQueryAvailableInitiativesResponse();
    message.initiatives = object.initiatives?.map(e => Initiative.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAvailableInitiativesResponse): QueryAvailableInitiativesResponseAmino {
    const obj: any = {};
    if (message.initiatives) {
      obj.initiatives = message.initiatives.map(e => e ? Initiative.toAmino(e) : undefined);
    } else {
      obj.initiatives = message.initiatives;
    }
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
    stakes: [],
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
    for (const v of message.stakes) {
      Stake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
  fromPartial(object: DeepPartial<QueryStakesByStakerResponse>): QueryStakesByStakerResponse {
    const message = createBaseQueryStakesByStakerResponse();
    message.stakes = object.stakes?.map(e => Stake.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryStakesByStakerResponseAmino): QueryStakesByStakerResponse {
    const message = createBaseQueryStakesByStakerResponse();
    message.stakes = object.stakes?.map(e => Stake.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStakesByStakerResponse): QueryStakesByStakerResponseAmino {
    const obj: any = {};
    if (message.stakes) {
      obj.stakes = message.stakes.map(e => e ? Stake.toAmino(e) : undefined);
    } else {
      obj.stakes = message.stakes;
    }
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
function createBaseQueryListTagStakePoolsRequest(): QueryListTagStakePoolsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryListTagStakePoolsRequest defines the request for listing tag stake pools.
 * @name QueryListTagStakePoolsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryListTagStakePoolsRequest
 */
export const QueryListTagStakePoolsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryListTagStakePoolsRequest",
  encode(message: QueryListTagStakePoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListTagStakePoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListTagStakePoolsRequest();
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
  fromPartial(object: DeepPartial<QueryListTagStakePoolsRequest>): QueryListTagStakePoolsRequest {
    const message = createBaseQueryListTagStakePoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListTagStakePoolsRequestAmino): QueryListTagStakePoolsRequest {
    const message = createBaseQueryListTagStakePoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListTagStakePoolsRequest): QueryListTagStakePoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListTagStakePoolsRequestAminoMsg): QueryListTagStakePoolsRequest {
    return QueryListTagStakePoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListTagStakePoolsRequestProtoMsg): QueryListTagStakePoolsRequest {
    return QueryListTagStakePoolsRequest.decode(message.value);
  },
  toProto(message: QueryListTagStakePoolsRequest): Uint8Array {
    return QueryListTagStakePoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListTagStakePoolsRequest): QueryListTagStakePoolsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryListTagStakePoolsRequest",
      value: QueryListTagStakePoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListTagStakePoolsResponse(): QueryListTagStakePoolsResponse {
  return {
    pool: [],
    pagination: undefined
  };
}
/**
 * QueryListTagStakePoolsResponse defines the response for listing tag stake pools.
 * @name QueryListTagStakePoolsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryListTagStakePoolsResponse
 */
export const QueryListTagStakePoolsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryListTagStakePoolsResponse",
  encode(message: QueryListTagStakePoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      TagStakePool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListTagStakePoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListTagStakePoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(TagStakePool.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListTagStakePoolsResponse>): QueryListTagStakePoolsResponse {
    const message = createBaseQueryListTagStakePoolsResponse();
    message.pool = object.pool?.map(e => TagStakePool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListTagStakePoolsResponseAmino): QueryListTagStakePoolsResponse {
    const message = createBaseQueryListTagStakePoolsResponse();
    message.pool = object.pool?.map(e => TagStakePool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListTagStakePoolsResponse): QueryListTagStakePoolsResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? TagStakePool.toAmino(e) : undefined);
    } else {
      obj.pool = message.pool;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListTagStakePoolsResponseAminoMsg): QueryListTagStakePoolsResponse {
    return QueryListTagStakePoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListTagStakePoolsResponseProtoMsg): QueryListTagStakePoolsResponse {
    return QueryListTagStakePoolsResponse.decode(message.value);
  },
  toProto(message: QueryListTagStakePoolsResponse): Uint8Array {
    return QueryListTagStakePoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListTagStakePoolsResponse): QueryListTagStakePoolsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryListTagStakePoolsResponse",
      value: QueryListTagStakePoolsResponse.encode(message).finish()
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
function createBaseQueryDreamSupplyStatsRequest(): QueryDreamSupplyStatsRequest {
  return {};
}
/**
 * Economic health queries
 * @name QueryDreamSupplyStatsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryDreamSupplyStatsRequest
 */
export const QueryDreamSupplyStatsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryDreamSupplyStatsRequest",
  encode(_: QueryDreamSupplyStatsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDreamSupplyStatsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDreamSupplyStatsRequest();
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
  fromPartial(_: DeepPartial<QueryDreamSupplyStatsRequest>): QueryDreamSupplyStatsRequest {
    const message = createBaseQueryDreamSupplyStatsRequest();
    return message;
  },
  fromAmino(_: QueryDreamSupplyStatsRequestAmino): QueryDreamSupplyStatsRequest {
    const message = createBaseQueryDreamSupplyStatsRequest();
    return message;
  },
  toAmino(_: QueryDreamSupplyStatsRequest): QueryDreamSupplyStatsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryDreamSupplyStatsRequestAminoMsg): QueryDreamSupplyStatsRequest {
    return QueryDreamSupplyStatsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDreamSupplyStatsRequestProtoMsg): QueryDreamSupplyStatsRequest {
    return QueryDreamSupplyStatsRequest.decode(message.value);
  },
  toProto(message: QueryDreamSupplyStatsRequest): Uint8Array {
    return QueryDreamSupplyStatsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDreamSupplyStatsRequest): QueryDreamSupplyStatsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryDreamSupplyStatsRequest",
      value: QueryDreamSupplyStatsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDreamSupplyStatsResponse(): QueryDreamSupplyStatsResponse {
  return {
    totalMinted: "",
    totalBurned: "",
    circulating: "",
    totalStaked: "",
    treasuryBalance: "",
    stakedRatio: ""
  };
}
/**
 * @name QueryDreamSupplyStatsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryDreamSupplyStatsResponse
 */
export const QueryDreamSupplyStatsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryDreamSupplyStatsResponse",
  encode(message: QueryDreamSupplyStatsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalMinted !== "") {
      writer.uint32(10).string(message.totalMinted);
    }
    if (message.totalBurned !== "") {
      writer.uint32(18).string(message.totalBurned);
    }
    if (message.circulating !== "") {
      writer.uint32(26).string(message.circulating);
    }
    if (message.totalStaked !== "") {
      writer.uint32(34).string(message.totalStaked);
    }
    if (message.treasuryBalance !== "") {
      writer.uint32(42).string(message.treasuryBalance);
    }
    if (message.stakedRatio !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.stakedRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDreamSupplyStatsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDreamSupplyStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalMinted = reader.string();
          break;
        case 2:
          message.totalBurned = reader.string();
          break;
        case 3:
          message.circulating = reader.string();
          break;
        case 4:
          message.totalStaked = reader.string();
          break;
        case 5:
          message.treasuryBalance = reader.string();
          break;
        case 6:
          message.stakedRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDreamSupplyStatsResponse>): QueryDreamSupplyStatsResponse {
    const message = createBaseQueryDreamSupplyStatsResponse();
    message.totalMinted = object.totalMinted ?? "";
    message.totalBurned = object.totalBurned ?? "";
    message.circulating = object.circulating ?? "";
    message.totalStaked = object.totalStaked ?? "";
    message.treasuryBalance = object.treasuryBalance ?? "";
    message.stakedRatio = object.stakedRatio ?? "";
    return message;
  },
  fromAmino(object: QueryDreamSupplyStatsResponseAmino): QueryDreamSupplyStatsResponse {
    const message = createBaseQueryDreamSupplyStatsResponse();
    if (object.total_minted !== undefined && object.total_minted !== null) {
      message.totalMinted = object.total_minted;
    }
    if (object.total_burned !== undefined && object.total_burned !== null) {
      message.totalBurned = object.total_burned;
    }
    if (object.circulating !== undefined && object.circulating !== null) {
      message.circulating = object.circulating;
    }
    if (object.total_staked !== undefined && object.total_staked !== null) {
      message.totalStaked = object.total_staked;
    }
    if (object.treasury_balance !== undefined && object.treasury_balance !== null) {
      message.treasuryBalance = object.treasury_balance;
    }
    if (object.staked_ratio !== undefined && object.staked_ratio !== null) {
      message.stakedRatio = object.staked_ratio;
    }
    return message;
  },
  toAmino(message: QueryDreamSupplyStatsResponse): QueryDreamSupplyStatsResponseAmino {
    const obj: any = {};
    obj.total_minted = message.totalMinted === "" ? undefined : message.totalMinted;
    obj.total_burned = message.totalBurned === "" ? undefined : message.totalBurned;
    obj.circulating = message.circulating === "" ? undefined : message.circulating;
    obj.total_staked = message.totalStaked === "" ? undefined : message.totalStaked;
    obj.treasury_balance = message.treasuryBalance === "" ? undefined : message.treasuryBalance;
    obj.staked_ratio = message.stakedRatio === "" ? undefined : message.stakedRatio;
    return obj;
  },
  fromAminoMsg(object: QueryDreamSupplyStatsResponseAminoMsg): QueryDreamSupplyStatsResponse {
    return QueryDreamSupplyStatsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDreamSupplyStatsResponseProtoMsg): QueryDreamSupplyStatsResponse {
    return QueryDreamSupplyStatsResponse.decode(message.value);
  },
  toProto(message: QueryDreamSupplyStatsResponse): Uint8Array {
    return QueryDreamSupplyStatsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDreamSupplyStatsResponse): QueryDreamSupplyStatsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryDreamSupplyStatsResponse",
      value: QueryDreamSupplyStatsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMintBurnRatioRequest(): QueryMintBurnRatioRequest {
  return {};
}
/**
 * @name QueryMintBurnRatioRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMintBurnRatioRequest
 */
export const QueryMintBurnRatioRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryMintBurnRatioRequest",
  encode(_: QueryMintBurnRatioRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMintBurnRatioRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintBurnRatioRequest();
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
  fromPartial(_: DeepPartial<QueryMintBurnRatioRequest>): QueryMintBurnRatioRequest {
    const message = createBaseQueryMintBurnRatioRequest();
    return message;
  },
  fromAmino(_: QueryMintBurnRatioRequestAmino): QueryMintBurnRatioRequest {
    const message = createBaseQueryMintBurnRatioRequest();
    return message;
  },
  toAmino(_: QueryMintBurnRatioRequest): QueryMintBurnRatioRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMintBurnRatioRequestAminoMsg): QueryMintBurnRatioRequest {
    return QueryMintBurnRatioRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMintBurnRatioRequestProtoMsg): QueryMintBurnRatioRequest {
    return QueryMintBurnRatioRequest.decode(message.value);
  },
  toProto(message: QueryMintBurnRatioRequest): Uint8Array {
    return QueryMintBurnRatioRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMintBurnRatioRequest): QueryMintBurnRatioRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryMintBurnRatioRequest",
      value: QueryMintBurnRatioRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMintBurnRatioResponse(): QueryMintBurnRatioResponse {
  return {
    seasonMinted: "",
    seasonBurned: "",
    ratio: "",
    season: 0
  };
}
/**
 * @name QueryMintBurnRatioResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMintBurnRatioResponse
 */
export const QueryMintBurnRatioResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryMintBurnRatioResponse",
  encode(message: QueryMintBurnRatioResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seasonMinted !== "") {
      writer.uint32(10).string(message.seasonMinted);
    }
    if (message.seasonBurned !== "") {
      writer.uint32(18).string(message.seasonBurned);
    }
    if (message.ratio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.ratio, 18).atomics);
    }
    if (message.season !== 0) {
      writer.uint32(32).uint32(message.season);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMintBurnRatioResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintBurnRatioResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seasonMinted = reader.string();
          break;
        case 2:
          message.seasonBurned = reader.string();
          break;
        case 3:
          message.ratio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.season = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMintBurnRatioResponse>): QueryMintBurnRatioResponse {
    const message = createBaseQueryMintBurnRatioResponse();
    message.seasonMinted = object.seasonMinted ?? "";
    message.seasonBurned = object.seasonBurned ?? "";
    message.ratio = object.ratio ?? "";
    message.season = object.season ?? 0;
    return message;
  },
  fromAmino(object: QueryMintBurnRatioResponseAmino): QueryMintBurnRatioResponse {
    const message = createBaseQueryMintBurnRatioResponse();
    if (object.season_minted !== undefined && object.season_minted !== null) {
      message.seasonMinted = object.season_minted;
    }
    if (object.season_burned !== undefined && object.season_burned !== null) {
      message.seasonBurned = object.season_burned;
    }
    if (object.ratio !== undefined && object.ratio !== null) {
      message.ratio = object.ratio;
    }
    if (object.season !== undefined && object.season !== null) {
      message.season = object.season;
    }
    return message;
  },
  toAmino(message: QueryMintBurnRatioResponse): QueryMintBurnRatioResponseAmino {
    const obj: any = {};
    obj.season_minted = message.seasonMinted === "" ? undefined : message.seasonMinted;
    obj.season_burned = message.seasonBurned === "" ? undefined : message.seasonBurned;
    obj.ratio = message.ratio === "" ? undefined : message.ratio;
    obj.season = message.season === 0 ? undefined : message.season;
    return obj;
  },
  fromAminoMsg(object: QueryMintBurnRatioResponseAminoMsg): QueryMintBurnRatioResponse {
    return QueryMintBurnRatioResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMintBurnRatioResponseProtoMsg): QueryMintBurnRatioResponse {
    return QueryMintBurnRatioResponse.decode(message.value);
  },
  toProto(message: QueryMintBurnRatioResponse): Uint8Array {
    return QueryMintBurnRatioResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMintBurnRatioResponse): QueryMintBurnRatioResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryMintBurnRatioResponse",
      value: QueryMintBurnRatioResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEffectiveApyRequest(): QueryEffectiveApyRequest {
  return {};
}
/**
 * @name QueryEffectiveApyRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryEffectiveApyRequest
 */
export const QueryEffectiveApyRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryEffectiveApyRequest",
  encode(_: QueryEffectiveApyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEffectiveApyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEffectiveApyRequest();
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
  fromPartial(_: DeepPartial<QueryEffectiveApyRequest>): QueryEffectiveApyRequest {
    const message = createBaseQueryEffectiveApyRequest();
    return message;
  },
  fromAmino(_: QueryEffectiveApyRequestAmino): QueryEffectiveApyRequest {
    const message = createBaseQueryEffectiveApyRequest();
    return message;
  },
  toAmino(_: QueryEffectiveApyRequest): QueryEffectiveApyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEffectiveApyRequestAminoMsg): QueryEffectiveApyRequest {
    return QueryEffectiveApyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEffectiveApyRequestProtoMsg): QueryEffectiveApyRequest {
    return QueryEffectiveApyRequest.decode(message.value);
  },
  toProto(message: QueryEffectiveApyRequest): Uint8Array {
    return QueryEffectiveApyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEffectiveApyRequest): QueryEffectiveApyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryEffectiveApyRequest",
      value: QueryEffectiveApyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEffectiveApyResponse(): QueryEffectiveApyResponse {
  return {
    seasonalPoolTotal: "",
    seasonalPoolRemaining: "",
    totalStaked: "",
    effectiveApy: ""
  };
}
/**
 * @name QueryEffectiveApyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryEffectiveApyResponse
 */
export const QueryEffectiveApyResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryEffectiveApyResponse",
  encode(message: QueryEffectiveApyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seasonalPoolTotal !== "") {
      writer.uint32(10).string(message.seasonalPoolTotal);
    }
    if (message.seasonalPoolRemaining !== "") {
      writer.uint32(18).string(message.seasonalPoolRemaining);
    }
    if (message.totalStaked !== "") {
      writer.uint32(26).string(message.totalStaked);
    }
    if (message.effectiveApy !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.effectiveApy, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEffectiveApyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEffectiveApyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seasonalPoolTotal = reader.string();
          break;
        case 2:
          message.seasonalPoolRemaining = reader.string();
          break;
        case 3:
          message.totalStaked = reader.string();
          break;
        case 4:
          message.effectiveApy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEffectiveApyResponse>): QueryEffectiveApyResponse {
    const message = createBaseQueryEffectiveApyResponse();
    message.seasonalPoolTotal = object.seasonalPoolTotal ?? "";
    message.seasonalPoolRemaining = object.seasonalPoolRemaining ?? "";
    message.totalStaked = object.totalStaked ?? "";
    message.effectiveApy = object.effectiveApy ?? "";
    return message;
  },
  fromAmino(object: QueryEffectiveApyResponseAmino): QueryEffectiveApyResponse {
    const message = createBaseQueryEffectiveApyResponse();
    if (object.seasonal_pool_total !== undefined && object.seasonal_pool_total !== null) {
      message.seasonalPoolTotal = object.seasonal_pool_total;
    }
    if (object.seasonal_pool_remaining !== undefined && object.seasonal_pool_remaining !== null) {
      message.seasonalPoolRemaining = object.seasonal_pool_remaining;
    }
    if (object.total_staked !== undefined && object.total_staked !== null) {
      message.totalStaked = object.total_staked;
    }
    if (object.effective_apy !== undefined && object.effective_apy !== null) {
      message.effectiveApy = object.effective_apy;
    }
    return message;
  },
  toAmino(message: QueryEffectiveApyResponse): QueryEffectiveApyResponseAmino {
    const obj: any = {};
    obj.seasonal_pool_total = message.seasonalPoolTotal === "" ? undefined : message.seasonalPoolTotal;
    obj.seasonal_pool_remaining = message.seasonalPoolRemaining === "" ? undefined : message.seasonalPoolRemaining;
    obj.total_staked = message.totalStaked === "" ? undefined : message.totalStaked;
    obj.effective_apy = message.effectiveApy === "" ? undefined : message.effectiveApy;
    return obj;
  },
  fromAminoMsg(object: QueryEffectiveApyResponseAminoMsg): QueryEffectiveApyResponse {
    return QueryEffectiveApyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEffectiveApyResponseProtoMsg): QueryEffectiveApyResponse {
    return QueryEffectiveApyResponse.decode(message.value);
  },
  toProto(message: QueryEffectiveApyResponse): Uint8Array {
    return QueryEffectiveApyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEffectiveApyResponse): QueryEffectiveApyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryEffectiveApyResponse",
      value: QueryEffectiveApyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTreasuryStatusRequest(): QueryTreasuryStatusRequest {
  return {};
}
/**
 * @name QueryTreasuryStatusRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTreasuryStatusRequest
 */
export const QueryTreasuryStatusRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryTreasuryStatusRequest",
  encode(_: QueryTreasuryStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTreasuryStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTreasuryStatusRequest();
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
  fromPartial(_: DeepPartial<QueryTreasuryStatusRequest>): QueryTreasuryStatusRequest {
    const message = createBaseQueryTreasuryStatusRequest();
    return message;
  },
  fromAmino(_: QueryTreasuryStatusRequestAmino): QueryTreasuryStatusRequest {
    const message = createBaseQueryTreasuryStatusRequest();
    return message;
  },
  toAmino(_: QueryTreasuryStatusRequest): QueryTreasuryStatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTreasuryStatusRequestAminoMsg): QueryTreasuryStatusRequest {
    return QueryTreasuryStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTreasuryStatusRequestProtoMsg): QueryTreasuryStatusRequest {
    return QueryTreasuryStatusRequest.decode(message.value);
  },
  toProto(message: QueryTreasuryStatusRequest): Uint8Array {
    return QueryTreasuryStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTreasuryStatusRequest): QueryTreasuryStatusRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryTreasuryStatusRequest",
      value: QueryTreasuryStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTreasuryStatusResponse(): QueryTreasuryStatusResponse {
  return {
    balance: "",
    maxBalance: "",
    seasonInflow: "",
    seasonOutflow: "",
    seasonBurned: ""
  };
}
/**
 * @name QueryTreasuryStatusResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTreasuryStatusResponse
 */
export const QueryTreasuryStatusResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryTreasuryStatusResponse",
  encode(message: QueryTreasuryStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    if (message.maxBalance !== "") {
      writer.uint32(18).string(message.maxBalance);
    }
    if (message.seasonInflow !== "") {
      writer.uint32(26).string(message.seasonInflow);
    }
    if (message.seasonOutflow !== "") {
      writer.uint32(34).string(message.seasonOutflow);
    }
    if (message.seasonBurned !== "") {
      writer.uint32(42).string(message.seasonBurned);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTreasuryStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTreasuryStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        case 2:
          message.maxBalance = reader.string();
          break;
        case 3:
          message.seasonInflow = reader.string();
          break;
        case 4:
          message.seasonOutflow = reader.string();
          break;
        case 5:
          message.seasonBurned = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTreasuryStatusResponse>): QueryTreasuryStatusResponse {
    const message = createBaseQueryTreasuryStatusResponse();
    message.balance = object.balance ?? "";
    message.maxBalance = object.maxBalance ?? "";
    message.seasonInflow = object.seasonInflow ?? "";
    message.seasonOutflow = object.seasonOutflow ?? "";
    message.seasonBurned = object.seasonBurned ?? "";
    return message;
  },
  fromAmino(object: QueryTreasuryStatusResponseAmino): QueryTreasuryStatusResponse {
    const message = createBaseQueryTreasuryStatusResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.max_balance !== undefined && object.max_balance !== null) {
      message.maxBalance = object.max_balance;
    }
    if (object.season_inflow !== undefined && object.season_inflow !== null) {
      message.seasonInflow = object.season_inflow;
    }
    if (object.season_outflow !== undefined && object.season_outflow !== null) {
      message.seasonOutflow = object.season_outflow;
    }
    if (object.season_burned !== undefined && object.season_burned !== null) {
      message.seasonBurned = object.season_burned;
    }
    return message;
  },
  toAmino(message: QueryTreasuryStatusResponse): QueryTreasuryStatusResponseAmino {
    const obj: any = {};
    obj.balance = message.balance === "" ? undefined : message.balance;
    obj.max_balance = message.maxBalance === "" ? undefined : message.maxBalance;
    obj.season_inflow = message.seasonInflow === "" ? undefined : message.seasonInflow;
    obj.season_outflow = message.seasonOutflow === "" ? undefined : message.seasonOutflow;
    obj.season_burned = message.seasonBurned === "" ? undefined : message.seasonBurned;
    return obj;
  },
  fromAminoMsg(object: QueryTreasuryStatusResponseAminoMsg): QueryTreasuryStatusResponse {
    return QueryTreasuryStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTreasuryStatusResponseProtoMsg): QueryTreasuryStatusResponse {
    return QueryTreasuryStatusResponse.decode(message.value);
  },
  toProto(message: QueryTreasuryStatusResponse): Uint8Array {
    return QueryTreasuryStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTreasuryStatusResponse): QueryTreasuryStatusResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryTreasuryStatusResponse",
      value: QueryTreasuryStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagRequest(): QueryGetTagRequest {
  return {
    name: ""
  };
}
/**
 * QueryGetTagRequest is request type for the Query/GetTag RPC method.
 * @name QueryGetTagRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagRequest
 */
export const QueryGetTagRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagRequest",
  encode(message: QueryGetTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagRequest>): QueryGetTagRequest {
    const message = createBaseQueryGetTagRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryGetTagRequestAmino): QueryGetTagRequest {
    const message = createBaseQueryGetTagRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetTagRequest): QueryGetTagRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagRequestAminoMsg): QueryGetTagRequest {
    return QueryGetTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagRequestProtoMsg): QueryGetTagRequest {
    return QueryGetTagRequest.decode(message.value);
  },
  toProto(message: QueryGetTagRequest): Uint8Array {
    return QueryGetTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagRequest): QueryGetTagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetTagRequest",
      value: QueryGetTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagResponse(): QueryGetTagResponse {
  return {
    tag: Tag.fromPartial({})
  };
}
/**
 * QueryGetTagResponse is response type for the Query/GetTag RPC method.
 * @name QueryGetTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagResponse
 */
export const QueryGetTagResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagResponse",
  encode(message: QueryGetTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tag !== undefined) {
      Tag.encode(message.tag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = Tag.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagResponse>): QueryGetTagResponse {
    const message = createBaseQueryGetTagResponse();
    message.tag = object.tag !== undefined && object.tag !== null ? Tag.fromPartial(object.tag) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTagResponseAmino): QueryGetTagResponse {
    const message = createBaseQueryGetTagResponse();
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = Tag.fromAmino(object.tag);
    }
    return message;
  },
  toAmino(message: QueryGetTagResponse): QueryGetTagResponseAmino {
    const obj: any = {};
    obj.tag = message.tag ? Tag.toAmino(message.tag) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagResponseAminoMsg): QueryGetTagResponse {
    return QueryGetTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagResponseProtoMsg): QueryGetTagResponse {
    return QueryGetTagResponse.decode(message.value);
  },
  toProto(message: QueryGetTagResponse): Uint8Array {
    return QueryGetTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagResponse): QueryGetTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetTagResponse",
      value: QueryGetTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagRequest(): QueryAllTagRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllTagRequest is request type for the Query/ListTag RPC method.
 * @name QueryAllTagRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagRequest
 */
export const QueryAllTagRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagRequest",
  encode(message: QueryAllTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagRequest();
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
  fromPartial(object: DeepPartial<QueryAllTagRequest>): QueryAllTagRequest {
    const message = createBaseQueryAllTagRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagRequestAmino): QueryAllTagRequest {
    const message = createBaseQueryAllTagRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagRequest): QueryAllTagRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagRequestAminoMsg): QueryAllTagRequest {
    return QueryAllTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagRequestProtoMsg): QueryAllTagRequest {
    return QueryAllTagRequest.decode(message.value);
  },
  toProto(message: QueryAllTagRequest): Uint8Array {
    return QueryAllTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagRequest): QueryAllTagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllTagRequest",
      value: QueryAllTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagResponse(): QueryAllTagResponse {
  return {
    tag: [],
    pagination: undefined
  };
}
/**
 * QueryAllTagResponse is response type for the Query/ListTag RPC method.
 * @name QueryAllTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagResponse
 */
export const QueryAllTagResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagResponse",
  encode(message: QueryAllTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tag) {
      Tag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag.push(Tag.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllTagResponse>): QueryAllTagResponse {
    const message = createBaseQueryAllTagResponse();
    message.tag = object.tag?.map(e => Tag.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagResponseAmino): QueryAllTagResponse {
    const message = createBaseQueryAllTagResponse();
    message.tag = object.tag?.map(e => Tag.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagResponse): QueryAllTagResponseAmino {
    const obj: any = {};
    if (message.tag) {
      obj.tag = message.tag.map(e => e ? Tag.toAmino(e) : undefined);
    } else {
      obj.tag = message.tag;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagResponseAminoMsg): QueryAllTagResponse {
    return QueryAllTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagResponseProtoMsg): QueryAllTagResponse {
    return QueryAllTagResponse.decode(message.value);
  },
  toProto(message: QueryAllTagResponse): Uint8Array {
    return QueryAllTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagResponse): QueryAllTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllTagResponse",
      value: QueryAllTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetReservedTagRequest(): QueryGetReservedTagRequest {
  return {
    name: ""
  };
}
/**
 * QueryGetReservedTagRequest is request type for the Query/GetReservedTag RPC method.
 * @name QueryGetReservedTagRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetReservedTagRequest
 */
export const QueryGetReservedTagRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetReservedTagRequest",
  encode(message: QueryGetReservedTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetReservedTagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReservedTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetReservedTagRequest>): QueryGetReservedTagRequest {
    const message = createBaseQueryGetReservedTagRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryGetReservedTagRequestAmino): QueryGetReservedTagRequest {
    const message = createBaseQueryGetReservedTagRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetReservedTagRequest): QueryGetReservedTagRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetReservedTagRequestAminoMsg): QueryGetReservedTagRequest {
    return QueryGetReservedTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetReservedTagRequestProtoMsg): QueryGetReservedTagRequest {
    return QueryGetReservedTagRequest.decode(message.value);
  },
  toProto(message: QueryGetReservedTagRequest): Uint8Array {
    return QueryGetReservedTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetReservedTagRequest): QueryGetReservedTagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetReservedTagRequest",
      value: QueryGetReservedTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetReservedTagResponse(): QueryGetReservedTagResponse {
  return {
    reservedTag: ReservedTag.fromPartial({})
  };
}
/**
 * QueryGetReservedTagResponse is response type for the Query/GetReservedTag RPC method.
 * @name QueryGetReservedTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetReservedTagResponse
 */
export const QueryGetReservedTagResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetReservedTagResponse",
  encode(message: QueryGetReservedTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reservedTag !== undefined) {
      ReservedTag.encode(message.reservedTag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetReservedTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReservedTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservedTag = ReservedTag.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetReservedTagResponse>): QueryGetReservedTagResponse {
    const message = createBaseQueryGetReservedTagResponse();
    message.reservedTag = object.reservedTag !== undefined && object.reservedTag !== null ? ReservedTag.fromPartial(object.reservedTag) : undefined;
    return message;
  },
  fromAmino(object: QueryGetReservedTagResponseAmino): QueryGetReservedTagResponse {
    const message = createBaseQueryGetReservedTagResponse();
    if (object.reserved_tag !== undefined && object.reserved_tag !== null) {
      message.reservedTag = ReservedTag.fromAmino(object.reserved_tag);
    }
    return message;
  },
  toAmino(message: QueryGetReservedTagResponse): QueryGetReservedTagResponseAmino {
    const obj: any = {};
    obj.reserved_tag = message.reservedTag ? ReservedTag.toAmino(message.reservedTag) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetReservedTagResponseAminoMsg): QueryGetReservedTagResponse {
    return QueryGetReservedTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetReservedTagResponseProtoMsg): QueryGetReservedTagResponse {
    return QueryGetReservedTagResponse.decode(message.value);
  },
  toProto(message: QueryGetReservedTagResponse): Uint8Array {
    return QueryGetReservedTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetReservedTagResponse): QueryGetReservedTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetReservedTagResponse",
      value: QueryGetReservedTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllReservedTagRequest(): QueryAllReservedTagRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllReservedTagRequest is request type for the Query/ListReservedTag RPC method.
 * @name QueryAllReservedTagRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllReservedTagRequest
 */
export const QueryAllReservedTagRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllReservedTagRequest",
  encode(message: QueryAllReservedTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllReservedTagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllReservedTagRequest();
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
  fromPartial(object: DeepPartial<QueryAllReservedTagRequest>): QueryAllReservedTagRequest {
    const message = createBaseQueryAllReservedTagRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllReservedTagRequestAmino): QueryAllReservedTagRequest {
    const message = createBaseQueryAllReservedTagRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllReservedTagRequest): QueryAllReservedTagRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllReservedTagRequestAminoMsg): QueryAllReservedTagRequest {
    return QueryAllReservedTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllReservedTagRequestProtoMsg): QueryAllReservedTagRequest {
    return QueryAllReservedTagRequest.decode(message.value);
  },
  toProto(message: QueryAllReservedTagRequest): Uint8Array {
    return QueryAllReservedTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllReservedTagRequest): QueryAllReservedTagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllReservedTagRequest",
      value: QueryAllReservedTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllReservedTagResponse(): QueryAllReservedTagResponse {
  return {
    reservedTag: [],
    pagination: undefined
  };
}
/**
 * QueryAllReservedTagResponse is response type for the Query/ListReservedTag RPC method.
 * @name QueryAllReservedTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllReservedTagResponse
 */
export const QueryAllReservedTagResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllReservedTagResponse",
  encode(message: QueryAllReservedTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reservedTag) {
      ReservedTag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllReservedTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllReservedTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservedTag.push(ReservedTag.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllReservedTagResponse>): QueryAllReservedTagResponse {
    const message = createBaseQueryAllReservedTagResponse();
    message.reservedTag = object.reservedTag?.map(e => ReservedTag.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllReservedTagResponseAmino): QueryAllReservedTagResponse {
    const message = createBaseQueryAllReservedTagResponse();
    message.reservedTag = object.reserved_tag?.map(e => ReservedTag.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllReservedTagResponse): QueryAllReservedTagResponseAmino {
    const obj: any = {};
    if (message.reservedTag) {
      obj.reserved_tag = message.reservedTag.map(e => e ? ReservedTag.toAmino(e) : undefined);
    } else {
      obj.reserved_tag = message.reservedTag;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllReservedTagResponseAminoMsg): QueryAllReservedTagResponse {
    return QueryAllReservedTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllReservedTagResponseProtoMsg): QueryAllReservedTagResponse {
    return QueryAllReservedTagResponse.decode(message.value);
  },
  toProto(message: QueryAllReservedTagResponse): Uint8Array {
    return QueryAllReservedTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllReservedTagResponse): QueryAllReservedTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllReservedTagResponse",
      value: QueryAllReservedTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTagExistsRequest(): QueryTagExistsRequest {
  return {
    tagName: ""
  };
}
/**
 * QueryTagExistsRequest is request type for the Query/TagExists RPC method.
 * @name QueryTagExistsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagExistsRequest
 */
export const QueryTagExistsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryTagExistsRequest",
  encode(message: QueryTagExistsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagName !== "") {
      writer.uint32(10).string(message.tagName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagExistsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagExistsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagExistsRequest>): QueryTagExistsRequest {
    const message = createBaseQueryTagExistsRequest();
    message.tagName = object.tagName ?? "";
    return message;
  },
  fromAmino(object: QueryTagExistsRequestAmino): QueryTagExistsRequest {
    const message = createBaseQueryTagExistsRequest();
    if (object.tag_name !== undefined && object.tag_name !== null) {
      message.tagName = object.tag_name;
    }
    return message;
  },
  toAmino(message: QueryTagExistsRequest): QueryTagExistsRequestAmino {
    const obj: any = {};
    obj.tag_name = message.tagName === "" ? undefined : message.tagName;
    return obj;
  },
  fromAminoMsg(object: QueryTagExistsRequestAminoMsg): QueryTagExistsRequest {
    return QueryTagExistsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagExistsRequestProtoMsg): QueryTagExistsRequest {
    return QueryTagExistsRequest.decode(message.value);
  },
  toProto(message: QueryTagExistsRequest): Uint8Array {
    return QueryTagExistsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTagExistsRequest): QueryTagExistsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryTagExistsRequest",
      value: QueryTagExistsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTagExistsResponse(): QueryTagExistsResponse {
  return {
    exists: false,
    expirationTime: BigInt(0)
  };
}
/**
 * QueryTagExistsResponse is response type for the Query/TagExists RPC method.
 * @name QueryTagExistsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagExistsResponse
 */
export const QueryTagExistsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryTagExistsResponse",
  encode(message: QueryTagExistsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exists === true) {
      writer.uint32(8).bool(message.exists);
    }
    if (message.expirationTime !== BigInt(0)) {
      writer.uint32(16).int64(message.expirationTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagExistsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagExistsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exists = reader.bool();
          break;
        case 2:
          message.expirationTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagExistsResponse>): QueryTagExistsResponse {
    const message = createBaseQueryTagExistsResponse();
    message.exists = object.exists ?? false;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? BigInt(object.expirationTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTagExistsResponseAmino): QueryTagExistsResponse {
    const message = createBaseQueryTagExistsResponse();
    if (object.exists !== undefined && object.exists !== null) {
      message.exists = object.exists;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = BigInt(object.expiration_time);
    }
    return message;
  },
  toAmino(message: QueryTagExistsResponse): QueryTagExistsResponseAmino {
    const obj: any = {};
    obj.exists = message.exists === false ? undefined : message.exists;
    obj.expiration_time = message.expirationTime !== BigInt(0) ? message.expirationTime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagExistsResponseAminoMsg): QueryTagExistsResponse {
    return QueryTagExistsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagExistsResponseProtoMsg): QueryTagExistsResponse {
    return QueryTagExistsResponse.decode(message.value);
  },
  toProto(message: QueryTagExistsResponse): Uint8Array {
    return QueryTagExistsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTagExistsResponse): QueryTagExistsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryTagExistsResponse",
      value: QueryTagExistsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagReportRequest(): QueryGetTagReportRequest {
  return {
    tagName: ""
  };
}
/**
 * QueryGetTagReportRequest defines the QueryGetTagReportRequest message.
 * @name QueryGetTagReportRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagReportRequest
 */
export const QueryGetTagReportRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagReportRequest",
  encode(message: QueryGetTagReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagName !== "") {
      writer.uint32(10).string(message.tagName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagReportRequest>): QueryGetTagReportRequest {
    const message = createBaseQueryGetTagReportRequest();
    message.tagName = object.tagName ?? "";
    return message;
  },
  fromAmino(object: QueryGetTagReportRequestAmino): QueryGetTagReportRequest {
    const message = createBaseQueryGetTagReportRequest();
    if (object.tag_name !== undefined && object.tag_name !== null) {
      message.tagName = object.tag_name;
    }
    return message;
  },
  toAmino(message: QueryGetTagReportRequest): QueryGetTagReportRequestAmino {
    const obj: any = {};
    obj.tag_name = message.tagName === "" ? undefined : message.tagName;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagReportRequestAminoMsg): QueryGetTagReportRequest {
    return QueryGetTagReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagReportRequestProtoMsg): QueryGetTagReportRequest {
    return QueryGetTagReportRequest.decode(message.value);
  },
  toProto(message: QueryGetTagReportRequest): Uint8Array {
    return QueryGetTagReportRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagReportRequest): QueryGetTagReportRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetTagReportRequest",
      value: QueryGetTagReportRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagReportResponse(): QueryGetTagReportResponse {
  return {
    tagReport: TagReport.fromPartial({})
  };
}
/**
 * QueryGetTagReportResponse defines the QueryGetTagReportResponse message.
 * @name QueryGetTagReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagReportResponse
 */
export const QueryGetTagReportResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagReportResponse",
  encode(message: QueryGetTagReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagReport !== undefined) {
      TagReport.encode(message.tagReport, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagReport = TagReport.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagReportResponse>): QueryGetTagReportResponse {
    const message = createBaseQueryGetTagReportResponse();
    message.tagReport = object.tagReport !== undefined && object.tagReport !== null ? TagReport.fromPartial(object.tagReport) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTagReportResponseAmino): QueryGetTagReportResponse {
    const message = createBaseQueryGetTagReportResponse();
    if (object.tag_report !== undefined && object.tag_report !== null) {
      message.tagReport = TagReport.fromAmino(object.tag_report);
    }
    return message;
  },
  toAmino(message: QueryGetTagReportResponse): QueryGetTagReportResponseAmino {
    const obj: any = {};
    obj.tag_report = message.tagReport ? TagReport.toAmino(message.tagReport) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagReportResponseAminoMsg): QueryGetTagReportResponse {
    return QueryGetTagReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagReportResponseProtoMsg): QueryGetTagReportResponse {
    return QueryGetTagReportResponse.decode(message.value);
  },
  toProto(message: QueryGetTagReportResponse): Uint8Array {
    return QueryGetTagReportResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagReportResponse): QueryGetTagReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetTagReportResponse",
      value: QueryGetTagReportResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagReportRequest(): QueryAllTagReportRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllTagReportRequest defines the QueryAllTagReportRequest message.
 * @name QueryAllTagReportRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagReportRequest
 */
export const QueryAllTagReportRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagReportRequest",
  encode(message: QueryAllTagReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagReportRequest();
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
  fromPartial(object: DeepPartial<QueryAllTagReportRequest>): QueryAllTagReportRequest {
    const message = createBaseQueryAllTagReportRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagReportRequestAmino): QueryAllTagReportRequest {
    const message = createBaseQueryAllTagReportRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagReportRequest): QueryAllTagReportRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagReportRequestAminoMsg): QueryAllTagReportRequest {
    return QueryAllTagReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagReportRequestProtoMsg): QueryAllTagReportRequest {
    return QueryAllTagReportRequest.decode(message.value);
  },
  toProto(message: QueryAllTagReportRequest): Uint8Array {
    return QueryAllTagReportRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagReportRequest): QueryAllTagReportRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllTagReportRequest",
      value: QueryAllTagReportRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagReportResponse(): QueryAllTagReportResponse {
  return {
    tagReport: [],
    pagination: undefined
  };
}
/**
 * QueryAllTagReportResponse defines the QueryAllTagReportResponse message.
 * @name QueryAllTagReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagReportResponse
 */
export const QueryAllTagReportResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagReportResponse",
  encode(message: QueryAllTagReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tagReport) {
      TagReport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagReport.push(TagReport.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllTagReportResponse>): QueryAllTagReportResponse {
    const message = createBaseQueryAllTagReportResponse();
    message.tagReport = object.tagReport?.map(e => TagReport.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagReportResponseAmino): QueryAllTagReportResponse {
    const message = createBaseQueryAllTagReportResponse();
    message.tagReport = object.tag_report?.map(e => TagReport.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagReportResponse): QueryAllTagReportResponseAmino {
    const obj: any = {};
    if (message.tagReport) {
      obj.tag_report = message.tagReport.map(e => e ? TagReport.toAmino(e) : undefined);
    } else {
      obj.tag_report = message.tagReport;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagReportResponseAminoMsg): QueryAllTagReportResponse {
    return QueryAllTagReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagReportResponseProtoMsg): QueryAllTagReportResponse {
    return QueryAllTagReportResponse.decode(message.value);
  },
  toProto(message: QueryAllTagReportResponse): Uint8Array {
    return QueryAllTagReportResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagReportResponse): QueryAllTagReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllTagReportResponse",
      value: QueryAllTagReportResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTagReportsRequest(): QueryTagReportsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryTagReportsRequest defines the QueryTagReportsRequest message.
 * @name QueryTagReportsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagReportsRequest
 */
export const QueryTagReportsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryTagReportsRequest",
  encode(message: QueryTagReportsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagReportsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagReportsRequest();
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
  fromPartial(object: DeepPartial<QueryTagReportsRequest>): QueryTagReportsRequest {
    const message = createBaseQueryTagReportsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTagReportsRequestAmino): QueryTagReportsRequest {
    const message = createBaseQueryTagReportsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTagReportsRequest): QueryTagReportsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagReportsRequestAminoMsg): QueryTagReportsRequest {
    return QueryTagReportsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagReportsRequestProtoMsg): QueryTagReportsRequest {
    return QueryTagReportsRequest.decode(message.value);
  },
  toProto(message: QueryTagReportsRequest): Uint8Array {
    return QueryTagReportsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTagReportsRequest): QueryTagReportsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryTagReportsRequest",
      value: QueryTagReportsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTagReportsResponse(): QueryTagReportsResponse {
  return {
    tagName: "",
    underReview: false,
    pagination: undefined
  };
}
/**
 * QueryTagReportsResponse defines the QueryTagReportsResponse message.
 * @name QueryTagReportsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagReportsResponse
 */
export const QueryTagReportsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryTagReportsResponse",
  encode(message: QueryTagReportsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagName !== "") {
      writer.uint32(10).string(message.tagName);
    }
    if (message.underReview === true) {
      writer.uint32(16).bool(message.underReview);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagReportsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagReportsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagName = reader.string();
          break;
        case 2:
          message.underReview = reader.bool();
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
  fromPartial(object: DeepPartial<QueryTagReportsResponse>): QueryTagReportsResponse {
    const message = createBaseQueryTagReportsResponse();
    message.tagName = object.tagName ?? "";
    message.underReview = object.underReview ?? false;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTagReportsResponseAmino): QueryTagReportsResponse {
    const message = createBaseQueryTagReportsResponse();
    if (object.tag_name !== undefined && object.tag_name !== null) {
      message.tagName = object.tag_name;
    }
    if (object.under_review !== undefined && object.under_review !== null) {
      message.underReview = object.under_review;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTagReportsResponse): QueryTagReportsResponseAmino {
    const obj: any = {};
    obj.tag_name = message.tagName === "" ? undefined : message.tagName;
    obj.under_review = message.underReview === false ? undefined : message.underReview;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagReportsResponseAminoMsg): QueryTagReportsResponse {
    return QueryTagReportsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagReportsResponseProtoMsg): QueryTagReportsResponse {
    return QueryTagReportsResponse.decode(message.value);
  },
  toProto(message: QueryTagReportsResponse): Uint8Array {
    return QueryTagReportsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTagReportsResponse): QueryTagReportsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryTagReportsResponse",
      value: QueryTagReportsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagBudgetRequest(): QueryGetTagBudgetRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetTagBudgetRequest defines the QueryGetTagBudgetRequest message.
 * @name QueryGetTagBudgetRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagBudgetRequest
 */
export const QueryGetTagBudgetRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagBudgetRequest",
  encode(message: QueryGetTagBudgetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagBudgetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagBudgetRequest();
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
  fromPartial(object: DeepPartial<QueryGetTagBudgetRequest>): QueryGetTagBudgetRequest {
    const message = createBaseQueryGetTagBudgetRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetTagBudgetRequestAmino): QueryGetTagBudgetRequest {
    const message = createBaseQueryGetTagBudgetRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetTagBudgetRequest): QueryGetTagBudgetRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagBudgetRequestAminoMsg): QueryGetTagBudgetRequest {
    return QueryGetTagBudgetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagBudgetRequestProtoMsg): QueryGetTagBudgetRequest {
    return QueryGetTagBudgetRequest.decode(message.value);
  },
  toProto(message: QueryGetTagBudgetRequest): Uint8Array {
    return QueryGetTagBudgetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagBudgetRequest): QueryGetTagBudgetRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetTagBudgetRequest",
      value: QueryGetTagBudgetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagBudgetResponse(): QueryGetTagBudgetResponse {
  return {
    tagBudget: TagBudget.fromPartial({})
  };
}
/**
 * QueryGetTagBudgetResponse defines the QueryGetTagBudgetResponse message.
 * @name QueryGetTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagBudgetResponse
 */
export const QueryGetTagBudgetResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagBudgetResponse",
  encode(message: QueryGetTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagBudget !== undefined) {
      TagBudget.encode(message.tagBudget, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagBudgetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagBudget = TagBudget.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagBudgetResponse>): QueryGetTagBudgetResponse {
    const message = createBaseQueryGetTagBudgetResponse();
    message.tagBudget = object.tagBudget !== undefined && object.tagBudget !== null ? TagBudget.fromPartial(object.tagBudget) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTagBudgetResponseAmino): QueryGetTagBudgetResponse {
    const message = createBaseQueryGetTagBudgetResponse();
    if (object.tag_budget !== undefined && object.tag_budget !== null) {
      message.tagBudget = TagBudget.fromAmino(object.tag_budget);
    }
    return message;
  },
  toAmino(message: QueryGetTagBudgetResponse): QueryGetTagBudgetResponseAmino {
    const obj: any = {};
    obj.tag_budget = message.tagBudget ? TagBudget.toAmino(message.tagBudget) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagBudgetResponseAminoMsg): QueryGetTagBudgetResponse {
    return QueryGetTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagBudgetResponseProtoMsg): QueryGetTagBudgetResponse {
    return QueryGetTagBudgetResponse.decode(message.value);
  },
  toProto(message: QueryGetTagBudgetResponse): Uint8Array {
    return QueryGetTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagBudgetResponse): QueryGetTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetTagBudgetResponse",
      value: QueryGetTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagBudgetRequest(): QueryAllTagBudgetRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllTagBudgetRequest defines the QueryAllTagBudgetRequest message.
 * @name QueryAllTagBudgetRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagBudgetRequest
 */
export const QueryAllTagBudgetRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagBudgetRequest",
  encode(message: QueryAllTagBudgetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagBudgetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagBudgetRequest();
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
  fromPartial(object: DeepPartial<QueryAllTagBudgetRequest>): QueryAllTagBudgetRequest {
    const message = createBaseQueryAllTagBudgetRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagBudgetRequestAmino): QueryAllTagBudgetRequest {
    const message = createBaseQueryAllTagBudgetRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagBudgetRequest): QueryAllTagBudgetRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagBudgetRequestAminoMsg): QueryAllTagBudgetRequest {
    return QueryAllTagBudgetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagBudgetRequestProtoMsg): QueryAllTagBudgetRequest {
    return QueryAllTagBudgetRequest.decode(message.value);
  },
  toProto(message: QueryAllTagBudgetRequest): Uint8Array {
    return QueryAllTagBudgetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagBudgetRequest): QueryAllTagBudgetRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllTagBudgetRequest",
      value: QueryAllTagBudgetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagBudgetResponse(): QueryAllTagBudgetResponse {
  return {
    tagBudget: [],
    pagination: undefined
  };
}
/**
 * QueryAllTagBudgetResponse defines the QueryAllTagBudgetResponse message.
 * @name QueryAllTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagBudgetResponse
 */
export const QueryAllTagBudgetResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagBudgetResponse",
  encode(message: QueryAllTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tagBudget) {
      TagBudget.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagBudgetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagBudget.push(TagBudget.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllTagBudgetResponse>): QueryAllTagBudgetResponse {
    const message = createBaseQueryAllTagBudgetResponse();
    message.tagBudget = object.tagBudget?.map(e => TagBudget.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagBudgetResponseAmino): QueryAllTagBudgetResponse {
    const message = createBaseQueryAllTagBudgetResponse();
    message.tagBudget = object.tag_budget?.map(e => TagBudget.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagBudgetResponse): QueryAllTagBudgetResponseAmino {
    const obj: any = {};
    if (message.tagBudget) {
      obj.tag_budget = message.tagBudget.map(e => e ? TagBudget.toAmino(e) : undefined);
    } else {
      obj.tag_budget = message.tagBudget;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagBudgetResponseAminoMsg): QueryAllTagBudgetResponse {
    return QueryAllTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagBudgetResponseProtoMsg): QueryAllTagBudgetResponse {
    return QueryAllTagBudgetResponse.decode(message.value);
  },
  toProto(message: QueryAllTagBudgetResponse): Uint8Array {
    return QueryAllTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagBudgetResponse): QueryAllTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllTagBudgetResponse",
      value: QueryAllTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagBudgetAwardRequest(): QueryGetTagBudgetAwardRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetTagBudgetAwardRequest defines the QueryGetTagBudgetAwardRequest message.
 * @name QueryGetTagBudgetAwardRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagBudgetAwardRequest
 */
export const QueryGetTagBudgetAwardRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagBudgetAwardRequest",
  encode(message: QueryGetTagBudgetAwardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagBudgetAwardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagBudgetAwardRequest();
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
  fromPartial(object: DeepPartial<QueryGetTagBudgetAwardRequest>): QueryGetTagBudgetAwardRequest {
    const message = createBaseQueryGetTagBudgetAwardRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetTagBudgetAwardRequestAmino): QueryGetTagBudgetAwardRequest {
    const message = createBaseQueryGetTagBudgetAwardRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetTagBudgetAwardRequest): QueryGetTagBudgetAwardRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagBudgetAwardRequestAminoMsg): QueryGetTagBudgetAwardRequest {
    return QueryGetTagBudgetAwardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagBudgetAwardRequestProtoMsg): QueryGetTagBudgetAwardRequest {
    return QueryGetTagBudgetAwardRequest.decode(message.value);
  },
  toProto(message: QueryGetTagBudgetAwardRequest): Uint8Array {
    return QueryGetTagBudgetAwardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagBudgetAwardRequest): QueryGetTagBudgetAwardRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetTagBudgetAwardRequest",
      value: QueryGetTagBudgetAwardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTagBudgetAwardResponse(): QueryGetTagBudgetAwardResponse {
  return {
    tagBudgetAward: TagBudgetAward.fromPartial({})
  };
}
/**
 * QueryGetTagBudgetAwardResponse defines the QueryGetTagBudgetAwardResponse message.
 * @name QueryGetTagBudgetAwardResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetTagBudgetAwardResponse
 */
export const QueryGetTagBudgetAwardResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetTagBudgetAwardResponse",
  encode(message: QueryGetTagBudgetAwardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tagBudgetAward !== undefined) {
      TagBudgetAward.encode(message.tagBudgetAward, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTagBudgetAwardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTagBudgetAwardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagBudgetAward = TagBudgetAward.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTagBudgetAwardResponse>): QueryGetTagBudgetAwardResponse {
    const message = createBaseQueryGetTagBudgetAwardResponse();
    message.tagBudgetAward = object.tagBudgetAward !== undefined && object.tagBudgetAward !== null ? TagBudgetAward.fromPartial(object.tagBudgetAward) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTagBudgetAwardResponseAmino): QueryGetTagBudgetAwardResponse {
    const message = createBaseQueryGetTagBudgetAwardResponse();
    if (object.tag_budget_award !== undefined && object.tag_budget_award !== null) {
      message.tagBudgetAward = TagBudgetAward.fromAmino(object.tag_budget_award);
    }
    return message;
  },
  toAmino(message: QueryGetTagBudgetAwardResponse): QueryGetTagBudgetAwardResponseAmino {
    const obj: any = {};
    obj.tag_budget_award = message.tagBudgetAward ? TagBudgetAward.toAmino(message.tagBudgetAward) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTagBudgetAwardResponseAminoMsg): QueryGetTagBudgetAwardResponse {
    return QueryGetTagBudgetAwardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTagBudgetAwardResponseProtoMsg): QueryGetTagBudgetAwardResponse {
    return QueryGetTagBudgetAwardResponse.decode(message.value);
  },
  toProto(message: QueryGetTagBudgetAwardResponse): Uint8Array {
    return QueryGetTagBudgetAwardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTagBudgetAwardResponse): QueryGetTagBudgetAwardResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetTagBudgetAwardResponse",
      value: QueryGetTagBudgetAwardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagBudgetAwardRequest(): QueryAllTagBudgetAwardRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllTagBudgetAwardRequest defines the QueryAllTagBudgetAwardRequest message.
 * @name QueryAllTagBudgetAwardRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagBudgetAwardRequest
 */
export const QueryAllTagBudgetAwardRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagBudgetAwardRequest",
  encode(message: QueryAllTagBudgetAwardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagBudgetAwardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagBudgetAwardRequest();
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
  fromPartial(object: DeepPartial<QueryAllTagBudgetAwardRequest>): QueryAllTagBudgetAwardRequest {
    const message = createBaseQueryAllTagBudgetAwardRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagBudgetAwardRequestAmino): QueryAllTagBudgetAwardRequest {
    const message = createBaseQueryAllTagBudgetAwardRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagBudgetAwardRequest): QueryAllTagBudgetAwardRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagBudgetAwardRequestAminoMsg): QueryAllTagBudgetAwardRequest {
    return QueryAllTagBudgetAwardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagBudgetAwardRequestProtoMsg): QueryAllTagBudgetAwardRequest {
    return QueryAllTagBudgetAwardRequest.decode(message.value);
  },
  toProto(message: QueryAllTagBudgetAwardRequest): Uint8Array {
    return QueryAllTagBudgetAwardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagBudgetAwardRequest): QueryAllTagBudgetAwardRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllTagBudgetAwardRequest",
      value: QueryAllTagBudgetAwardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagBudgetAwardResponse(): QueryAllTagBudgetAwardResponse {
  return {
    tagBudgetAward: [],
    pagination: undefined
  };
}
/**
 * QueryAllTagBudgetAwardResponse defines the QueryAllTagBudgetAwardResponse message.
 * @name QueryAllTagBudgetAwardResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllTagBudgetAwardResponse
 */
export const QueryAllTagBudgetAwardResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllTagBudgetAwardResponse",
  encode(message: QueryAllTagBudgetAwardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tagBudgetAward) {
      TagBudgetAward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTagBudgetAwardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTagBudgetAwardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagBudgetAward.push(TagBudgetAward.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllTagBudgetAwardResponse>): QueryAllTagBudgetAwardResponse {
    const message = createBaseQueryAllTagBudgetAwardResponse();
    message.tagBudgetAward = object.tagBudgetAward?.map(e => TagBudgetAward.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagBudgetAwardResponseAmino): QueryAllTagBudgetAwardResponse {
    const message = createBaseQueryAllTagBudgetAwardResponse();
    message.tagBudgetAward = object.tag_budget_award?.map(e => TagBudgetAward.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagBudgetAwardResponse): QueryAllTagBudgetAwardResponseAmino {
    const obj: any = {};
    if (message.tagBudgetAward) {
      obj.tag_budget_award = message.tagBudgetAward.map(e => e ? TagBudgetAward.toAmino(e) : undefined);
    } else {
      obj.tag_budget_award = message.tagBudgetAward;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagBudgetAwardResponseAminoMsg): QueryAllTagBudgetAwardResponse {
    return QueryAllTagBudgetAwardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagBudgetAwardResponseProtoMsg): QueryAllTagBudgetAwardResponse {
    return QueryAllTagBudgetAwardResponse.decode(message.value);
  },
  toProto(message: QueryAllTagBudgetAwardResponse): Uint8Array {
    return QueryAllTagBudgetAwardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagBudgetAwardResponse): QueryAllTagBudgetAwardResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllTagBudgetAwardResponse",
      value: QueryAllTagBudgetAwardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTagBudgetByTagRequest(): QueryTagBudgetByTagRequest {
  return {
    tag: ""
  };
}
/**
 * QueryTagBudgetByTagRequest defines the QueryTagBudgetByTagRequest message.
 * @name QueryTagBudgetByTagRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetByTagRequest
 */
export const QueryTagBudgetByTagRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryTagBudgetByTagRequest",
  encode(message: QueryTagBudgetByTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagBudgetByTagRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagBudgetByTagRequest();
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
  fromPartial(object: DeepPartial<QueryTagBudgetByTagRequest>): QueryTagBudgetByTagRequest {
    const message = createBaseQueryTagBudgetByTagRequest();
    message.tag = object.tag ?? "";
    return message;
  },
  fromAmino(object: QueryTagBudgetByTagRequestAmino): QueryTagBudgetByTagRequest {
    const message = createBaseQueryTagBudgetByTagRequest();
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    return message;
  },
  toAmino(message: QueryTagBudgetByTagRequest): QueryTagBudgetByTagRequestAmino {
    const obj: any = {};
    obj.tag = message.tag === "" ? undefined : message.tag;
    return obj;
  },
  fromAminoMsg(object: QueryTagBudgetByTagRequestAminoMsg): QueryTagBudgetByTagRequest {
    return QueryTagBudgetByTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagBudgetByTagRequestProtoMsg): QueryTagBudgetByTagRequest {
    return QueryTagBudgetByTagRequest.decode(message.value);
  },
  toProto(message: QueryTagBudgetByTagRequest): Uint8Array {
    return QueryTagBudgetByTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTagBudgetByTagRequest): QueryTagBudgetByTagRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryTagBudgetByTagRequest",
      value: QueryTagBudgetByTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTagBudgetByTagResponse(): QueryTagBudgetByTagResponse {
  return {
    budgetId: BigInt(0),
    poolBalance: "",
    active: false
  };
}
/**
 * QueryTagBudgetByTagResponse defines the QueryTagBudgetByTagResponse message.
 * @name QueryTagBudgetByTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetByTagResponse
 */
export const QueryTagBudgetByTagResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryTagBudgetByTagResponse",
  encode(message: QueryTagBudgetByTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(8).uint64(message.budgetId);
    }
    if (message.poolBalance !== "") {
      writer.uint32(18).string(message.poolBalance);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagBudgetByTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagBudgetByTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.budgetId = reader.uint64();
          break;
        case 2:
          message.poolBalance = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagBudgetByTagResponse>): QueryTagBudgetByTagResponse {
    const message = createBaseQueryTagBudgetByTagResponse();
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.poolBalance = object.poolBalance ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: QueryTagBudgetByTagResponseAmino): QueryTagBudgetByTagResponse {
    const message = createBaseQueryTagBudgetByTagResponse();
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.pool_balance !== undefined && object.pool_balance !== null) {
      message.poolBalance = object.pool_balance;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: QueryTagBudgetByTagResponse): QueryTagBudgetByTagResponseAmino {
    const obj: any = {};
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.pool_balance = message.poolBalance === "" ? undefined : message.poolBalance;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: QueryTagBudgetByTagResponseAminoMsg): QueryTagBudgetByTagResponse {
    return QueryTagBudgetByTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagBudgetByTagResponseProtoMsg): QueryTagBudgetByTagResponse {
    return QueryTagBudgetByTagResponse.decode(message.value);
  },
  toProto(message: QueryTagBudgetByTagResponse): Uint8Array {
    return QueryTagBudgetByTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTagBudgetByTagResponse): QueryTagBudgetByTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryTagBudgetByTagResponse",
      value: QueryTagBudgetByTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTagBudgetsRequest(): QueryTagBudgetsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryTagBudgetsRequest defines the QueryTagBudgetsRequest message.
 * @name QueryTagBudgetsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetsRequest
 */
export const QueryTagBudgetsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryTagBudgetsRequest",
  encode(message: QueryTagBudgetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagBudgetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagBudgetsRequest();
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
  fromPartial(object: DeepPartial<QueryTagBudgetsRequest>): QueryTagBudgetsRequest {
    const message = createBaseQueryTagBudgetsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTagBudgetsRequestAmino): QueryTagBudgetsRequest {
    const message = createBaseQueryTagBudgetsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTagBudgetsRequest): QueryTagBudgetsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagBudgetsRequestAminoMsg): QueryTagBudgetsRequest {
    return QueryTagBudgetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagBudgetsRequestProtoMsg): QueryTagBudgetsRequest {
    return QueryTagBudgetsRequest.decode(message.value);
  },
  toProto(message: QueryTagBudgetsRequest): Uint8Array {
    return QueryTagBudgetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTagBudgetsRequest): QueryTagBudgetsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryTagBudgetsRequest",
      value: QueryTagBudgetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTagBudgetsResponse(): QueryTagBudgetsResponse {
  return {
    budgetId: BigInt(0),
    tag: "",
    poolBalance: "",
    pagination: undefined
  };
}
/**
 * QueryTagBudgetsResponse defines the QueryTagBudgetsResponse message.
 * @name QueryTagBudgetsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetsResponse
 */
export const QueryTagBudgetsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryTagBudgetsResponse",
  encode(message: QueryTagBudgetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(8).uint64(message.budgetId);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.poolBalance !== "") {
      writer.uint32(26).string(message.poolBalance);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagBudgetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagBudgetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.budgetId = reader.uint64();
          break;
        case 2:
          message.tag = reader.string();
          break;
        case 3:
          message.poolBalance = reader.string();
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
  fromPartial(object: DeepPartial<QueryTagBudgetsResponse>): QueryTagBudgetsResponse {
    const message = createBaseQueryTagBudgetsResponse();
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.tag = object.tag ?? "";
    message.poolBalance = object.poolBalance ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTagBudgetsResponseAmino): QueryTagBudgetsResponse {
    const message = createBaseQueryTagBudgetsResponse();
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    if (object.pool_balance !== undefined && object.pool_balance !== null) {
      message.poolBalance = object.pool_balance;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTagBudgetsResponse): QueryTagBudgetsResponseAmino {
    const obj: any = {};
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.tag = message.tag === "" ? undefined : message.tag;
    obj.pool_balance = message.poolBalance === "" ? undefined : message.poolBalance;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagBudgetsResponseAminoMsg): QueryTagBudgetsResponse {
    return QueryTagBudgetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagBudgetsResponseProtoMsg): QueryTagBudgetsResponse {
    return QueryTagBudgetsResponse.decode(message.value);
  },
  toProto(message: QueryTagBudgetsResponse): Uint8Array {
    return QueryTagBudgetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTagBudgetsResponse): QueryTagBudgetsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryTagBudgetsResponse",
      value: QueryTagBudgetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTagBudgetAwardsRequest(): QueryTagBudgetAwardsRequest {
  return {
    budgetId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryTagBudgetAwardsRequest defines the QueryTagBudgetAwardsRequest message.
 * @name QueryTagBudgetAwardsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetAwardsRequest
 */
export const QueryTagBudgetAwardsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryTagBudgetAwardsRequest",
  encode(message: QueryTagBudgetAwardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(8).uint64(message.budgetId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagBudgetAwardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagBudgetAwardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.budgetId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryTagBudgetAwardsRequest>): QueryTagBudgetAwardsRequest {
    const message = createBaseQueryTagBudgetAwardsRequest();
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTagBudgetAwardsRequestAmino): QueryTagBudgetAwardsRequest {
    const message = createBaseQueryTagBudgetAwardsRequest();
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTagBudgetAwardsRequest): QueryTagBudgetAwardsRequestAmino {
    const obj: any = {};
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagBudgetAwardsRequestAminoMsg): QueryTagBudgetAwardsRequest {
    return QueryTagBudgetAwardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagBudgetAwardsRequestProtoMsg): QueryTagBudgetAwardsRequest {
    return QueryTagBudgetAwardsRequest.decode(message.value);
  },
  toProto(message: QueryTagBudgetAwardsRequest): Uint8Array {
    return QueryTagBudgetAwardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTagBudgetAwardsRequest): QueryTagBudgetAwardsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryTagBudgetAwardsRequest",
      value: QueryTagBudgetAwardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTagBudgetAwardsResponse(): QueryTagBudgetAwardsResponse {
  return {
    postId: BigInt(0),
    recipient: "",
    amount: "",
    pagination: undefined
  };
}
/**
 * QueryTagBudgetAwardsResponse defines the QueryTagBudgetAwardsResponse message.
 * @name QueryTagBudgetAwardsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryTagBudgetAwardsResponse
 */
export const QueryTagBudgetAwardsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryTagBudgetAwardsResponse",
  encode(message: QueryTagBudgetAwardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postId !== BigInt(0)) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTagBudgetAwardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTagBudgetAwardsResponse();
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
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTagBudgetAwardsResponse>): QueryTagBudgetAwardsResponse {
    const message = createBaseQueryTagBudgetAwardsResponse();
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTagBudgetAwardsResponseAmino): QueryTagBudgetAwardsResponse {
    const message = createBaseQueryTagBudgetAwardsResponse();
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTagBudgetAwardsResponse): QueryTagBudgetAwardsResponseAmino {
    const obj: any = {};
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTagBudgetAwardsResponseAminoMsg): QueryTagBudgetAwardsResponse {
    return QueryTagBudgetAwardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTagBudgetAwardsResponseProtoMsg): QueryTagBudgetAwardsResponse {
    return QueryTagBudgetAwardsResponse.decode(message.value);
  },
  toProto(message: QueryTagBudgetAwardsResponse): Uint8Array {
    return QueryTagBudgetAwardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTagBudgetAwardsResponse): QueryTagBudgetAwardsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryTagBudgetAwardsResponse",
      value: QueryTagBudgetAwardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBondedRoleRequest(): QueryBondedRoleRequest {
  return {
    roleType: 0,
    address: ""
  };
}
/**
 * QueryBondedRoleRequest fetches a single BondedRole record.
 * @name QueryBondedRoleRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRoleRequest
 */
export const QueryBondedRoleRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryBondedRoleRequest",
  encode(message: QueryBondedRoleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.roleType !== 0) {
      writer.uint32(8).int32(message.roleType);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondedRoleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedRoleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleType = reader.int32() as any;
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBondedRoleRequest>): QueryBondedRoleRequest {
    const message = createBaseQueryBondedRoleRequest();
    message.roleType = object.roleType ?? 0;
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryBondedRoleRequestAmino): QueryBondedRoleRequest {
    const message = createBaseQueryBondedRoleRequest();
    if (object.role_type !== undefined && object.role_type !== null) {
      message.roleType = object.role_type;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryBondedRoleRequest): QueryBondedRoleRequestAmino {
    const obj: any = {};
    obj.role_type = message.roleType === 0 ? undefined : message.roleType;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryBondedRoleRequestAminoMsg): QueryBondedRoleRequest {
    return QueryBondedRoleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBondedRoleRequestProtoMsg): QueryBondedRoleRequest {
    return QueryBondedRoleRequest.decode(message.value);
  },
  toProto(message: QueryBondedRoleRequest): Uint8Array {
    return QueryBondedRoleRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBondedRoleRequest): QueryBondedRoleRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryBondedRoleRequest",
      value: QueryBondedRoleRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBondedRoleResponse(): QueryBondedRoleResponse {
  return {
    bondedRole: BondedRole.fromPartial({})
  };
}
/**
 * QueryBondedRoleResponse holds the fetched BondedRole record.
 * @name QueryBondedRoleResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRoleResponse
 */
export const QueryBondedRoleResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryBondedRoleResponse",
  encode(message: QueryBondedRoleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondedRole !== undefined) {
      BondedRole.encode(message.bondedRole, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondedRoleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondedRole = BondedRole.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBondedRoleResponse>): QueryBondedRoleResponse {
    const message = createBaseQueryBondedRoleResponse();
    message.bondedRole = object.bondedRole !== undefined && object.bondedRole !== null ? BondedRole.fromPartial(object.bondedRole) : undefined;
    return message;
  },
  fromAmino(object: QueryBondedRoleResponseAmino): QueryBondedRoleResponse {
    const message = createBaseQueryBondedRoleResponse();
    if (object.bonded_role !== undefined && object.bonded_role !== null) {
      message.bondedRole = BondedRole.fromAmino(object.bonded_role);
    }
    return message;
  },
  toAmino(message: QueryBondedRoleResponse): QueryBondedRoleResponseAmino {
    const obj: any = {};
    obj.bonded_role = message.bondedRole ? BondedRole.toAmino(message.bondedRole) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBondedRoleResponseAminoMsg): QueryBondedRoleResponse {
    return QueryBondedRoleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBondedRoleResponseProtoMsg): QueryBondedRoleResponse {
    return QueryBondedRoleResponse.decode(message.value);
  },
  toProto(message: QueryBondedRoleResponse): Uint8Array {
    return QueryBondedRoleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBondedRoleResponse): QueryBondedRoleResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryBondedRoleResponse",
      value: QueryBondedRoleResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBondedRolesByTypeRequest(): QueryBondedRolesByTypeRequest {
  return {
    roleType: 0,
    pagination: undefined
  };
}
/**
 * QueryBondedRolesByTypeRequest lists all BondedRole records for role_type.
 * @name QueryBondedRolesByTypeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRolesByTypeRequest
 */
export const QueryBondedRolesByTypeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryBondedRolesByTypeRequest",
  encode(message: QueryBondedRolesByTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.roleType !== 0) {
      writer.uint32(8).int32(message.roleType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondedRolesByTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedRolesByTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleType = reader.int32() as any;
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
  fromPartial(object: DeepPartial<QueryBondedRolesByTypeRequest>): QueryBondedRolesByTypeRequest {
    const message = createBaseQueryBondedRolesByTypeRequest();
    message.roleType = object.roleType ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBondedRolesByTypeRequestAmino): QueryBondedRolesByTypeRequest {
    const message = createBaseQueryBondedRolesByTypeRequest();
    if (object.role_type !== undefined && object.role_type !== null) {
      message.roleType = object.role_type;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBondedRolesByTypeRequest): QueryBondedRolesByTypeRequestAmino {
    const obj: any = {};
    obj.role_type = message.roleType === 0 ? undefined : message.roleType;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBondedRolesByTypeRequestAminoMsg): QueryBondedRolesByTypeRequest {
    return QueryBondedRolesByTypeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBondedRolesByTypeRequestProtoMsg): QueryBondedRolesByTypeRequest {
    return QueryBondedRolesByTypeRequest.decode(message.value);
  },
  toProto(message: QueryBondedRolesByTypeRequest): Uint8Array {
    return QueryBondedRolesByTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBondedRolesByTypeRequest): QueryBondedRolesByTypeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryBondedRolesByTypeRequest",
      value: QueryBondedRolesByTypeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBondedRolesByTypeResponse(): QueryBondedRolesByTypeResponse {
  return {
    bondedRoles: [],
    pagination: undefined
  };
}
/**
 * QueryBondedRolesByTypeResponse holds the paginated list of BondedRole records.
 * @name QueryBondedRolesByTypeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRolesByTypeResponse
 */
export const QueryBondedRolesByTypeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryBondedRolesByTypeResponse",
  encode(message: QueryBondedRolesByTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bondedRoles) {
      BondedRole.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondedRolesByTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedRolesByTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondedRoles.push(BondedRole.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryBondedRolesByTypeResponse>): QueryBondedRolesByTypeResponse {
    const message = createBaseQueryBondedRolesByTypeResponse();
    message.bondedRoles = object.bondedRoles?.map(e => BondedRole.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBondedRolesByTypeResponseAmino): QueryBondedRolesByTypeResponse {
    const message = createBaseQueryBondedRolesByTypeResponse();
    message.bondedRoles = object.bonded_roles?.map(e => BondedRole.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBondedRolesByTypeResponse): QueryBondedRolesByTypeResponseAmino {
    const obj: any = {};
    if (message.bondedRoles) {
      obj.bonded_roles = message.bondedRoles.map(e => e ? BondedRole.toAmino(e) : undefined);
    } else {
      obj.bonded_roles = message.bondedRoles;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBondedRolesByTypeResponseAminoMsg): QueryBondedRolesByTypeResponse {
    return QueryBondedRolesByTypeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBondedRolesByTypeResponseProtoMsg): QueryBondedRolesByTypeResponse {
    return QueryBondedRolesByTypeResponse.decode(message.value);
  },
  toProto(message: QueryBondedRolesByTypeResponse): Uint8Array {
    return QueryBondedRolesByTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBondedRolesByTypeResponse): QueryBondedRolesByTypeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryBondedRolesByTypeResponse",
      value: QueryBondedRolesByTypeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBondedRoleConfigRequest(): QueryBondedRoleConfigRequest {
  return {
    roleType: 0
  };
}
/**
 * QueryBondedRoleConfigRequest fetches the policy config for a role_type.
 * @name QueryBondedRoleConfigRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRoleConfigRequest
 */
export const QueryBondedRoleConfigRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryBondedRoleConfigRequest",
  encode(message: QueryBondedRoleConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.roleType !== 0) {
      writer.uint32(8).int32(message.roleType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondedRoleConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedRoleConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBondedRoleConfigRequest>): QueryBondedRoleConfigRequest {
    const message = createBaseQueryBondedRoleConfigRequest();
    message.roleType = object.roleType ?? 0;
    return message;
  },
  fromAmino(object: QueryBondedRoleConfigRequestAmino): QueryBondedRoleConfigRequest {
    const message = createBaseQueryBondedRoleConfigRequest();
    if (object.role_type !== undefined && object.role_type !== null) {
      message.roleType = object.role_type;
    }
    return message;
  },
  toAmino(message: QueryBondedRoleConfigRequest): QueryBondedRoleConfigRequestAmino {
    const obj: any = {};
    obj.role_type = message.roleType === 0 ? undefined : message.roleType;
    return obj;
  },
  fromAminoMsg(object: QueryBondedRoleConfigRequestAminoMsg): QueryBondedRoleConfigRequest {
    return QueryBondedRoleConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBondedRoleConfigRequestProtoMsg): QueryBondedRoleConfigRequest {
    return QueryBondedRoleConfigRequest.decode(message.value);
  },
  toProto(message: QueryBondedRoleConfigRequest): Uint8Array {
    return QueryBondedRoleConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBondedRoleConfigRequest): QueryBondedRoleConfigRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryBondedRoleConfigRequest",
      value: QueryBondedRoleConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBondedRoleConfigResponse(): QueryBondedRoleConfigResponse {
  return {
    bondedRoleConfig: BondedRoleConfig.fromPartial({})
  };
}
/**
 * QueryBondedRoleConfigResponse holds the fetched BondedRoleConfig.
 * @name QueryBondedRoleConfigResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryBondedRoleConfigResponse
 */
export const QueryBondedRoleConfigResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryBondedRoleConfigResponse",
  encode(message: QueryBondedRoleConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondedRoleConfig !== undefined) {
      BondedRoleConfig.encode(message.bondedRoleConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondedRoleConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedRoleConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondedRoleConfig = BondedRoleConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBondedRoleConfigResponse>): QueryBondedRoleConfigResponse {
    const message = createBaseQueryBondedRoleConfigResponse();
    message.bondedRoleConfig = object.bondedRoleConfig !== undefined && object.bondedRoleConfig !== null ? BondedRoleConfig.fromPartial(object.bondedRoleConfig) : undefined;
    return message;
  },
  fromAmino(object: QueryBondedRoleConfigResponseAmino): QueryBondedRoleConfigResponse {
    const message = createBaseQueryBondedRoleConfigResponse();
    if (object.bonded_role_config !== undefined && object.bonded_role_config !== null) {
      message.bondedRoleConfig = BondedRoleConfig.fromAmino(object.bonded_role_config);
    }
    return message;
  },
  toAmino(message: QueryBondedRoleConfigResponse): QueryBondedRoleConfigResponseAmino {
    const obj: any = {};
    obj.bonded_role_config = message.bondedRoleConfig ? BondedRoleConfig.toAmino(message.bondedRoleConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBondedRoleConfigResponseAminoMsg): QueryBondedRoleConfigResponse {
    return QueryBondedRoleConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBondedRoleConfigResponseProtoMsg): QueryBondedRoleConfigResponse {
    return QueryBondedRoleConfigResponse.decode(message.value);
  },
  toProto(message: QueryBondedRoleConfigResponse): Uint8Array {
    return QueryBondedRoleConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBondedRoleConfigResponse): QueryBondedRoleConfigResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryBondedRoleConfigResponse",
      value: QueryBondedRoleConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberReportRequest(): QueryGetMemberReportRequest {
  return {
    member: ""
  };
}
/**
 * QueryGetMemberReportRequest defines the QueryGetMemberReportRequest message.
 * @name QueryGetMemberReportRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberReportRequest
 */
export const QueryGetMemberReportRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberReportRequest",
  encode(message: QueryGetMemberReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberReportRequest();
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
  fromPartial(object: DeepPartial<QueryGetMemberReportRequest>): QueryGetMemberReportRequest {
    const message = createBaseQueryGetMemberReportRequest();
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: QueryGetMemberReportRequestAmino): QueryGetMemberReportRequest {
    const message = createBaseQueryGetMemberReportRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: QueryGetMemberReportRequest): QueryGetMemberReportRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberReportRequestAminoMsg): QueryGetMemberReportRequest {
    return QueryGetMemberReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberReportRequestProtoMsg): QueryGetMemberReportRequest {
    return QueryGetMemberReportRequest.decode(message.value);
  },
  toProto(message: QueryGetMemberReportRequest): Uint8Array {
    return QueryGetMemberReportRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberReportRequest): QueryGetMemberReportRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetMemberReportRequest",
      value: QueryGetMemberReportRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberReportResponse(): QueryGetMemberReportResponse {
  return {
    memberReport: MemberReport.fromPartial({})
  };
}
/**
 * QueryGetMemberReportResponse defines the QueryGetMemberReportResponse message.
 * @name QueryGetMemberReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberReportResponse
 */
export const QueryGetMemberReportResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberReportResponse",
  encode(message: QueryGetMemberReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberReport !== undefined) {
      MemberReport.encode(message.memberReport, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberReport = MemberReport.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberReportResponse>): QueryGetMemberReportResponse {
    const message = createBaseQueryGetMemberReportResponse();
    message.memberReport = object.memberReport !== undefined && object.memberReport !== null ? MemberReport.fromPartial(object.memberReport) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMemberReportResponseAmino): QueryGetMemberReportResponse {
    const message = createBaseQueryGetMemberReportResponse();
    if (object.member_report !== undefined && object.member_report !== null) {
      message.memberReport = MemberReport.fromAmino(object.member_report);
    }
    return message;
  },
  toAmino(message: QueryGetMemberReportResponse): QueryGetMemberReportResponseAmino {
    const obj: any = {};
    obj.member_report = message.memberReport ? MemberReport.toAmino(message.memberReport) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberReportResponseAminoMsg): QueryGetMemberReportResponse {
    return QueryGetMemberReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberReportResponseProtoMsg): QueryGetMemberReportResponse {
    return QueryGetMemberReportResponse.decode(message.value);
  },
  toProto(message: QueryGetMemberReportResponse): Uint8Array {
    return QueryGetMemberReportResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberReportResponse): QueryGetMemberReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetMemberReportResponse",
      value: QueryGetMemberReportResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberReportRequest(): QueryAllMemberReportRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllMemberReportRequest defines the QueryAllMemberReportRequest message.
 * @name QueryAllMemberReportRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberReportRequest
 */
export const QueryAllMemberReportRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllMemberReportRequest",
  encode(message: QueryAllMemberReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberReportRequest();
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
  fromPartial(object: DeepPartial<QueryAllMemberReportRequest>): QueryAllMemberReportRequest {
    const message = createBaseQueryAllMemberReportRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberReportRequestAmino): QueryAllMemberReportRequest {
    const message = createBaseQueryAllMemberReportRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberReportRequest): QueryAllMemberReportRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberReportRequestAminoMsg): QueryAllMemberReportRequest {
    return QueryAllMemberReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberReportRequestProtoMsg): QueryAllMemberReportRequest {
    return QueryAllMemberReportRequest.decode(message.value);
  },
  toProto(message: QueryAllMemberReportRequest): Uint8Array {
    return QueryAllMemberReportRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberReportRequest): QueryAllMemberReportRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllMemberReportRequest",
      value: QueryAllMemberReportRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberReportResponse(): QueryAllMemberReportResponse {
  return {
    memberReport: [],
    pagination: undefined
  };
}
/**
 * QueryAllMemberReportResponse defines the QueryAllMemberReportResponse message.
 * @name QueryAllMemberReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberReportResponse
 */
export const QueryAllMemberReportResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllMemberReportResponse",
  encode(message: QueryAllMemberReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.memberReport) {
      MemberReport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberReport.push(MemberReport.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllMemberReportResponse>): QueryAllMemberReportResponse {
    const message = createBaseQueryAllMemberReportResponse();
    message.memberReport = object.memberReport?.map(e => MemberReport.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberReportResponseAmino): QueryAllMemberReportResponse {
    const message = createBaseQueryAllMemberReportResponse();
    message.memberReport = object.member_report?.map(e => MemberReport.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberReportResponse): QueryAllMemberReportResponseAmino {
    const obj: any = {};
    if (message.memberReport) {
      obj.member_report = message.memberReport.map(e => e ? MemberReport.toAmino(e) : undefined);
    } else {
      obj.member_report = message.memberReport;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberReportResponseAminoMsg): QueryAllMemberReportResponse {
    return QueryAllMemberReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberReportResponseProtoMsg): QueryAllMemberReportResponse {
    return QueryAllMemberReportResponse.decode(message.value);
  },
  toProto(message: QueryAllMemberReportResponse): Uint8Array {
    return QueryAllMemberReportResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberReportResponse): QueryAllMemberReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllMemberReportResponse",
      value: QueryAllMemberReportResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberWarningRequest(): QueryGetMemberWarningRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetMemberWarningRequest defines the QueryGetMemberWarningRequest message.
 * @name QueryGetMemberWarningRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberWarningRequest
 */
export const QueryGetMemberWarningRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberWarningRequest",
  encode(message: QueryGetMemberWarningRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberWarningRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberWarningRequest();
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
  fromPartial(object: DeepPartial<QueryGetMemberWarningRequest>): QueryGetMemberWarningRequest {
    const message = createBaseQueryGetMemberWarningRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetMemberWarningRequestAmino): QueryGetMemberWarningRequest {
    const message = createBaseQueryGetMemberWarningRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetMemberWarningRequest): QueryGetMemberWarningRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberWarningRequestAminoMsg): QueryGetMemberWarningRequest {
    return QueryGetMemberWarningRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberWarningRequestProtoMsg): QueryGetMemberWarningRequest {
    return QueryGetMemberWarningRequest.decode(message.value);
  },
  toProto(message: QueryGetMemberWarningRequest): Uint8Array {
    return QueryGetMemberWarningRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberWarningRequest): QueryGetMemberWarningRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetMemberWarningRequest",
      value: QueryGetMemberWarningRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberWarningResponse(): QueryGetMemberWarningResponse {
  return {
    memberWarning: MemberWarning.fromPartial({})
  };
}
/**
 * QueryGetMemberWarningResponse defines the QueryGetMemberWarningResponse message.
 * @name QueryGetMemberWarningResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetMemberWarningResponse
 */
export const QueryGetMemberWarningResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetMemberWarningResponse",
  encode(message: QueryGetMemberWarningResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberWarning !== undefined) {
      MemberWarning.encode(message.memberWarning, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberWarningResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberWarningResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberWarning = MemberWarning.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberWarningResponse>): QueryGetMemberWarningResponse {
    const message = createBaseQueryGetMemberWarningResponse();
    message.memberWarning = object.memberWarning !== undefined && object.memberWarning !== null ? MemberWarning.fromPartial(object.memberWarning) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMemberWarningResponseAmino): QueryGetMemberWarningResponse {
    const message = createBaseQueryGetMemberWarningResponse();
    if (object.member_warning !== undefined && object.member_warning !== null) {
      message.memberWarning = MemberWarning.fromAmino(object.member_warning);
    }
    return message;
  },
  toAmino(message: QueryGetMemberWarningResponse): QueryGetMemberWarningResponseAmino {
    const obj: any = {};
    obj.member_warning = message.memberWarning ? MemberWarning.toAmino(message.memberWarning) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberWarningResponseAminoMsg): QueryGetMemberWarningResponse {
    return QueryGetMemberWarningResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberWarningResponseProtoMsg): QueryGetMemberWarningResponse {
    return QueryGetMemberWarningResponse.decode(message.value);
  },
  toProto(message: QueryGetMemberWarningResponse): Uint8Array {
    return QueryGetMemberWarningResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberWarningResponse): QueryGetMemberWarningResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetMemberWarningResponse",
      value: QueryGetMemberWarningResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberWarningRequest(): QueryAllMemberWarningRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllMemberWarningRequest defines the QueryAllMemberWarningRequest message.
 * @name QueryAllMemberWarningRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberWarningRequest
 */
export const QueryAllMemberWarningRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllMemberWarningRequest",
  encode(message: QueryAllMemberWarningRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberWarningRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberWarningRequest();
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
  fromPartial(object: DeepPartial<QueryAllMemberWarningRequest>): QueryAllMemberWarningRequest {
    const message = createBaseQueryAllMemberWarningRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberWarningRequestAmino): QueryAllMemberWarningRequest {
    const message = createBaseQueryAllMemberWarningRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberWarningRequest): QueryAllMemberWarningRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberWarningRequestAminoMsg): QueryAllMemberWarningRequest {
    return QueryAllMemberWarningRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberWarningRequestProtoMsg): QueryAllMemberWarningRequest {
    return QueryAllMemberWarningRequest.decode(message.value);
  },
  toProto(message: QueryAllMemberWarningRequest): Uint8Array {
    return QueryAllMemberWarningRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberWarningRequest): QueryAllMemberWarningRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllMemberWarningRequest",
      value: QueryAllMemberWarningRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberWarningResponse(): QueryAllMemberWarningResponse {
  return {
    memberWarning: [],
    pagination: undefined
  };
}
/**
 * QueryAllMemberWarningResponse defines the QueryAllMemberWarningResponse message.
 * @name QueryAllMemberWarningResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllMemberWarningResponse
 */
export const QueryAllMemberWarningResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllMemberWarningResponse",
  encode(message: QueryAllMemberWarningResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.memberWarning) {
      MemberWarning.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberWarningResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberWarningResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberWarning.push(MemberWarning.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllMemberWarningResponse>): QueryAllMemberWarningResponse {
    const message = createBaseQueryAllMemberWarningResponse();
    message.memberWarning = object.memberWarning?.map(e => MemberWarning.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberWarningResponseAmino): QueryAllMemberWarningResponse {
    const message = createBaseQueryAllMemberWarningResponse();
    message.memberWarning = object.member_warning?.map(e => MemberWarning.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberWarningResponse): QueryAllMemberWarningResponseAmino {
    const obj: any = {};
    if (message.memberWarning) {
      obj.member_warning = message.memberWarning.map(e => e ? MemberWarning.toAmino(e) : undefined);
    } else {
      obj.member_warning = message.memberWarning;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberWarningResponseAminoMsg): QueryAllMemberWarningResponse {
    return QueryAllMemberWarningResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberWarningResponseProtoMsg): QueryAllMemberWarningResponse {
    return QueryAllMemberWarningResponse.decode(message.value);
  },
  toProto(message: QueryAllMemberWarningResponse): Uint8Array {
    return QueryAllMemberWarningResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberWarningResponse): QueryAllMemberWarningResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllMemberWarningResponse",
      value: QueryAllMemberWarningResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetGovActionAppealRequest(): QueryGetGovActionAppealRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetGovActionAppealRequest defines the QueryGetGovActionAppealRequest message.
 * @name QueryGetGovActionAppealRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetGovActionAppealRequest
 */
export const QueryGetGovActionAppealRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetGovActionAppealRequest",
  encode(message: QueryGetGovActionAppealRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGovActionAppealRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGovActionAppealRequest();
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
  fromPartial(object: DeepPartial<QueryGetGovActionAppealRequest>): QueryGetGovActionAppealRequest {
    const message = createBaseQueryGetGovActionAppealRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetGovActionAppealRequestAmino): QueryGetGovActionAppealRequest {
    const message = createBaseQueryGetGovActionAppealRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetGovActionAppealRequest): QueryGetGovActionAppealRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetGovActionAppealRequestAminoMsg): QueryGetGovActionAppealRequest {
    return QueryGetGovActionAppealRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGovActionAppealRequestProtoMsg): QueryGetGovActionAppealRequest {
    return QueryGetGovActionAppealRequest.decode(message.value);
  },
  toProto(message: QueryGetGovActionAppealRequest): Uint8Array {
    return QueryGetGovActionAppealRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGovActionAppealRequest): QueryGetGovActionAppealRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetGovActionAppealRequest",
      value: QueryGetGovActionAppealRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetGovActionAppealResponse(): QueryGetGovActionAppealResponse {
  return {
    govActionAppeal: GovActionAppeal.fromPartial({})
  };
}
/**
 * QueryGetGovActionAppealResponse defines the QueryGetGovActionAppealResponse message.
 * @name QueryGetGovActionAppealResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetGovActionAppealResponse
 */
export const QueryGetGovActionAppealResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetGovActionAppealResponse",
  encode(message: QueryGetGovActionAppealResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.govActionAppeal !== undefined) {
      GovActionAppeal.encode(message.govActionAppeal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGovActionAppealResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGovActionAppealResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.govActionAppeal = GovActionAppeal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetGovActionAppealResponse>): QueryGetGovActionAppealResponse {
    const message = createBaseQueryGetGovActionAppealResponse();
    message.govActionAppeal = object.govActionAppeal !== undefined && object.govActionAppeal !== null ? GovActionAppeal.fromPartial(object.govActionAppeal) : undefined;
    return message;
  },
  fromAmino(object: QueryGetGovActionAppealResponseAmino): QueryGetGovActionAppealResponse {
    const message = createBaseQueryGetGovActionAppealResponse();
    if (object.gov_action_appeal !== undefined && object.gov_action_appeal !== null) {
      message.govActionAppeal = GovActionAppeal.fromAmino(object.gov_action_appeal);
    }
    return message;
  },
  toAmino(message: QueryGetGovActionAppealResponse): QueryGetGovActionAppealResponseAmino {
    const obj: any = {};
    obj.gov_action_appeal = message.govActionAppeal ? GovActionAppeal.toAmino(message.govActionAppeal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetGovActionAppealResponseAminoMsg): QueryGetGovActionAppealResponse {
    return QueryGetGovActionAppealResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGovActionAppealResponseProtoMsg): QueryGetGovActionAppealResponse {
    return QueryGetGovActionAppealResponse.decode(message.value);
  },
  toProto(message: QueryGetGovActionAppealResponse): Uint8Array {
    return QueryGetGovActionAppealResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGovActionAppealResponse): QueryGetGovActionAppealResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetGovActionAppealResponse",
      value: QueryGetGovActionAppealResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllGovActionAppealRequest(): QueryAllGovActionAppealRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllGovActionAppealRequest defines the QueryAllGovActionAppealRequest message.
 * @name QueryAllGovActionAppealRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllGovActionAppealRequest
 */
export const QueryAllGovActionAppealRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllGovActionAppealRequest",
  encode(message: QueryAllGovActionAppealRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGovActionAppealRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGovActionAppealRequest();
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
  fromPartial(object: DeepPartial<QueryAllGovActionAppealRequest>): QueryAllGovActionAppealRequest {
    const message = createBaseQueryAllGovActionAppealRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGovActionAppealRequestAmino): QueryAllGovActionAppealRequest {
    const message = createBaseQueryAllGovActionAppealRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGovActionAppealRequest): QueryAllGovActionAppealRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGovActionAppealRequestAminoMsg): QueryAllGovActionAppealRequest {
    return QueryAllGovActionAppealRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGovActionAppealRequestProtoMsg): QueryAllGovActionAppealRequest {
    return QueryAllGovActionAppealRequest.decode(message.value);
  },
  toProto(message: QueryAllGovActionAppealRequest): Uint8Array {
    return QueryAllGovActionAppealRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGovActionAppealRequest): QueryAllGovActionAppealRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllGovActionAppealRequest",
      value: QueryAllGovActionAppealRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllGovActionAppealResponse(): QueryAllGovActionAppealResponse {
  return {
    govActionAppeal: [],
    pagination: undefined
  };
}
/**
 * QueryAllGovActionAppealResponse defines the QueryAllGovActionAppealResponse message.
 * @name QueryAllGovActionAppealResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllGovActionAppealResponse
 */
export const QueryAllGovActionAppealResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllGovActionAppealResponse",
  encode(message: QueryAllGovActionAppealResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.govActionAppeal) {
      GovActionAppeal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGovActionAppealResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGovActionAppealResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.govActionAppeal.push(GovActionAppeal.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllGovActionAppealResponse>): QueryAllGovActionAppealResponse {
    const message = createBaseQueryAllGovActionAppealResponse();
    message.govActionAppeal = object.govActionAppeal?.map(e => GovActionAppeal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGovActionAppealResponseAmino): QueryAllGovActionAppealResponse {
    const message = createBaseQueryAllGovActionAppealResponse();
    message.govActionAppeal = object.gov_action_appeal?.map(e => GovActionAppeal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGovActionAppealResponse): QueryAllGovActionAppealResponseAmino {
    const obj: any = {};
    if (message.govActionAppeal) {
      obj.gov_action_appeal = message.govActionAppeal.map(e => e ? GovActionAppeal.toAmino(e) : undefined);
    } else {
      obj.gov_action_appeal = message.govActionAppeal;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGovActionAppealResponseAminoMsg): QueryAllGovActionAppealResponse {
    return QueryAllGovActionAppealResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGovActionAppealResponseProtoMsg): QueryAllGovActionAppealResponse {
    return QueryAllGovActionAppealResponse.decode(message.value);
  },
  toProto(message: QueryAllGovActionAppealResponse): Uint8Array {
    return QueryAllGovActionAppealResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGovActionAppealResponse): QueryAllGovActionAppealResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllGovActionAppealResponse",
      value: QueryAllGovActionAppealResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetJuryParticipationRequest(): QueryGetJuryParticipationRequest {
  return {
    juror: ""
  };
}
/**
 * QueryGetJuryParticipationRequest defines the QueryGetJuryParticipationRequest message.
 * @name QueryGetJuryParticipationRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetJuryParticipationRequest
 */
export const QueryGetJuryParticipationRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryGetJuryParticipationRequest",
  encode(message: QueryGetJuryParticipationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juror !== "") {
      writer.uint32(10).string(message.juror);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetJuryParticipationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetJuryParticipationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juror = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetJuryParticipationRequest>): QueryGetJuryParticipationRequest {
    const message = createBaseQueryGetJuryParticipationRequest();
    message.juror = object.juror ?? "";
    return message;
  },
  fromAmino(object: QueryGetJuryParticipationRequestAmino): QueryGetJuryParticipationRequest {
    const message = createBaseQueryGetJuryParticipationRequest();
    if (object.juror !== undefined && object.juror !== null) {
      message.juror = object.juror;
    }
    return message;
  },
  toAmino(message: QueryGetJuryParticipationRequest): QueryGetJuryParticipationRequestAmino {
    const obj: any = {};
    obj.juror = message.juror === "" ? undefined : message.juror;
    return obj;
  },
  fromAminoMsg(object: QueryGetJuryParticipationRequestAminoMsg): QueryGetJuryParticipationRequest {
    return QueryGetJuryParticipationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetJuryParticipationRequestProtoMsg): QueryGetJuryParticipationRequest {
    return QueryGetJuryParticipationRequest.decode(message.value);
  },
  toProto(message: QueryGetJuryParticipationRequest): Uint8Array {
    return QueryGetJuryParticipationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetJuryParticipationRequest): QueryGetJuryParticipationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetJuryParticipationRequest",
      value: QueryGetJuryParticipationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetJuryParticipationResponse(): QueryGetJuryParticipationResponse {
  return {
    juryParticipation: JuryParticipation.fromPartial({})
  };
}
/**
 * QueryGetJuryParticipationResponse defines the QueryGetJuryParticipationResponse message.
 * @name QueryGetJuryParticipationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryGetJuryParticipationResponse
 */
export const QueryGetJuryParticipationResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryGetJuryParticipationResponse",
  encode(message: QueryGetJuryParticipationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juryParticipation !== undefined) {
      JuryParticipation.encode(message.juryParticipation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetJuryParticipationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetJuryParticipationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juryParticipation = JuryParticipation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetJuryParticipationResponse>): QueryGetJuryParticipationResponse {
    const message = createBaseQueryGetJuryParticipationResponse();
    message.juryParticipation = object.juryParticipation !== undefined && object.juryParticipation !== null ? JuryParticipation.fromPartial(object.juryParticipation) : undefined;
    return message;
  },
  fromAmino(object: QueryGetJuryParticipationResponseAmino): QueryGetJuryParticipationResponse {
    const message = createBaseQueryGetJuryParticipationResponse();
    if (object.jury_participation !== undefined && object.jury_participation !== null) {
      message.juryParticipation = JuryParticipation.fromAmino(object.jury_participation);
    }
    return message;
  },
  toAmino(message: QueryGetJuryParticipationResponse): QueryGetJuryParticipationResponseAmino {
    const obj: any = {};
    obj.jury_participation = message.juryParticipation ? JuryParticipation.toAmino(message.juryParticipation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetJuryParticipationResponseAminoMsg): QueryGetJuryParticipationResponse {
    return QueryGetJuryParticipationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetJuryParticipationResponseProtoMsg): QueryGetJuryParticipationResponse {
    return QueryGetJuryParticipationResponse.decode(message.value);
  },
  toProto(message: QueryGetJuryParticipationResponse): Uint8Array {
    return QueryGetJuryParticipationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetJuryParticipationResponse): QueryGetJuryParticipationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryGetJuryParticipationResponse",
      value: QueryGetJuryParticipationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllJuryParticipationRequest(): QueryAllJuryParticipationRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllJuryParticipationRequest defines the QueryAllJuryParticipationRequest message.
 * @name QueryAllJuryParticipationRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllJuryParticipationRequest
 */
export const QueryAllJuryParticipationRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAllJuryParticipationRequest",
  encode(message: QueryAllJuryParticipationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllJuryParticipationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllJuryParticipationRequest();
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
  fromPartial(object: DeepPartial<QueryAllJuryParticipationRequest>): QueryAllJuryParticipationRequest {
    const message = createBaseQueryAllJuryParticipationRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllJuryParticipationRequestAmino): QueryAllJuryParticipationRequest {
    const message = createBaseQueryAllJuryParticipationRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllJuryParticipationRequest): QueryAllJuryParticipationRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllJuryParticipationRequestAminoMsg): QueryAllJuryParticipationRequest {
    return QueryAllJuryParticipationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllJuryParticipationRequestProtoMsg): QueryAllJuryParticipationRequest {
    return QueryAllJuryParticipationRequest.decode(message.value);
  },
  toProto(message: QueryAllJuryParticipationRequest): Uint8Array {
    return QueryAllJuryParticipationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllJuryParticipationRequest): QueryAllJuryParticipationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllJuryParticipationRequest",
      value: QueryAllJuryParticipationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllJuryParticipationResponse(): QueryAllJuryParticipationResponse {
  return {
    juryParticipation: [],
    pagination: undefined
  };
}
/**
 * QueryAllJuryParticipationResponse defines the QueryAllJuryParticipationResponse message.
 * @name QueryAllJuryParticipationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAllJuryParticipationResponse
 */
export const QueryAllJuryParticipationResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAllJuryParticipationResponse",
  encode(message: QueryAllJuryParticipationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.juryParticipation) {
      JuryParticipation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllJuryParticipationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllJuryParticipationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juryParticipation.push(JuryParticipation.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllJuryParticipationResponse>): QueryAllJuryParticipationResponse {
    const message = createBaseQueryAllJuryParticipationResponse();
    message.juryParticipation = object.juryParticipation?.map(e => JuryParticipation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllJuryParticipationResponseAmino): QueryAllJuryParticipationResponse {
    const message = createBaseQueryAllJuryParticipationResponse();
    message.juryParticipation = object.jury_participation?.map(e => JuryParticipation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllJuryParticipationResponse): QueryAllJuryParticipationResponseAmino {
    const obj: any = {};
    if (message.juryParticipation) {
      obj.jury_participation = message.juryParticipation.map(e => e ? JuryParticipation.toAmino(e) : undefined);
    } else {
      obj.jury_participation = message.juryParticipation;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllJuryParticipationResponseAminoMsg): QueryAllJuryParticipationResponse {
    return QueryAllJuryParticipationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllJuryParticipationResponseProtoMsg): QueryAllJuryParticipationResponse {
    return QueryAllJuryParticipationResponse.decode(message.value);
  },
  toProto(message: QueryAllJuryParticipationResponse): Uint8Array {
    return QueryAllJuryParticipationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllJuryParticipationResponse): QueryAllJuryParticipationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAllJuryParticipationResponse",
      value: QueryAllJuryParticipationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberReportsRequest(): QueryMemberReportsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryMemberReportsRequest defines the QueryMemberReportsRequest message.
 * @name QueryMemberReportsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberReportsRequest
 */
export const QueryMemberReportsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryMemberReportsRequest",
  encode(message: QueryMemberReportsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberReportsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberReportsRequest();
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
  fromPartial(object: DeepPartial<QueryMemberReportsRequest>): QueryMemberReportsRequest {
    const message = createBaseQueryMemberReportsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberReportsRequestAmino): QueryMemberReportsRequest {
    const message = createBaseQueryMemberReportsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberReportsRequest): QueryMemberReportsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberReportsRequestAminoMsg): QueryMemberReportsRequest {
    return QueryMemberReportsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberReportsRequestProtoMsg): QueryMemberReportsRequest {
    return QueryMemberReportsRequest.decode(message.value);
  },
  toProto(message: QueryMemberReportsRequest): Uint8Array {
    return QueryMemberReportsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberReportsRequest): QueryMemberReportsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryMemberReportsRequest",
      value: QueryMemberReportsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberReportsResponse(): QueryMemberReportsResponse {
  return {
    member: "",
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryMemberReportsResponse defines the QueryMemberReportsResponse message.
 * @name QueryMemberReportsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberReportsResponse
 */
export const QueryMemberReportsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryMemberReportsResponse",
  encode(message: QueryMemberReportsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(16).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberReportsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberReportsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
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
  fromPartial(object: DeepPartial<QueryMemberReportsResponse>): QueryMemberReportsResponse {
    const message = createBaseQueryMemberReportsResponse();
    message.member = object.member ?? "";
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberReportsResponseAmino): QueryMemberReportsResponse {
    const message = createBaseQueryMemberReportsResponse();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberReportsResponse): QueryMemberReportsResponseAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberReportsResponseAminoMsg): QueryMemberReportsResponse {
    return QueryMemberReportsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberReportsResponseProtoMsg): QueryMemberReportsResponse {
    return QueryMemberReportsResponse.decode(message.value);
  },
  toProto(message: QueryMemberReportsResponse): Uint8Array {
    return QueryMemberReportsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberReportsResponse): QueryMemberReportsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryMemberReportsResponse",
      value: QueryMemberReportsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberWarningsRequest(): QueryMemberWarningsRequest {
  return {
    member: "",
    pagination: undefined
  };
}
/**
 * QueryMemberWarningsRequest defines the QueryMemberWarningsRequest message.
 * @name QueryMemberWarningsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberWarningsRequest
 */
export const QueryMemberWarningsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryMemberWarningsRequest",
  encode(message: QueryMemberWarningsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberWarningsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberWarningsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
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
  fromPartial(object: DeepPartial<QueryMemberWarningsRequest>): QueryMemberWarningsRequest {
    const message = createBaseQueryMemberWarningsRequest();
    message.member = object.member ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberWarningsRequestAmino): QueryMemberWarningsRequest {
    const message = createBaseQueryMemberWarningsRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberWarningsRequest): QueryMemberWarningsRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberWarningsRequestAminoMsg): QueryMemberWarningsRequest {
    return QueryMemberWarningsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberWarningsRequestProtoMsg): QueryMemberWarningsRequest {
    return QueryMemberWarningsRequest.decode(message.value);
  },
  toProto(message: QueryMemberWarningsRequest): Uint8Array {
    return QueryMemberWarningsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberWarningsRequest): QueryMemberWarningsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryMemberWarningsRequest",
      value: QueryMemberWarningsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberWarningsResponse(): QueryMemberWarningsResponse {
  return {
    warningNumber: BigInt(0),
    reason: "",
    issuedAt: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryMemberWarningsResponse defines the QueryMemberWarningsResponse message.
 * @name QueryMemberWarningsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberWarningsResponse
 */
export const QueryMemberWarningsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryMemberWarningsResponse",
  encode(message: QueryMemberWarningsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.warningNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.warningNumber);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.issuedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.issuedAt);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberWarningsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberWarningsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.warningNumber = reader.uint64();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.issuedAt = reader.int64();
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
  fromPartial(object: DeepPartial<QueryMemberWarningsResponse>): QueryMemberWarningsResponse {
    const message = createBaseQueryMemberWarningsResponse();
    message.warningNumber = object.warningNumber !== undefined && object.warningNumber !== null ? BigInt(object.warningNumber.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    message.issuedAt = object.issuedAt !== undefined && object.issuedAt !== null ? BigInt(object.issuedAt.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberWarningsResponseAmino): QueryMemberWarningsResponse {
    const message = createBaseQueryMemberWarningsResponse();
    if (object.warning_number !== undefined && object.warning_number !== null) {
      message.warningNumber = BigInt(object.warning_number);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.issued_at !== undefined && object.issued_at !== null) {
      message.issuedAt = BigInt(object.issued_at);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberWarningsResponse): QueryMemberWarningsResponseAmino {
    const obj: any = {};
    obj.warning_number = message.warningNumber !== BigInt(0) ? message.warningNumber?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.issued_at = message.issuedAt !== BigInt(0) ? message.issuedAt?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberWarningsResponseAminoMsg): QueryMemberWarningsResponse {
    return QueryMemberWarningsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberWarningsResponseProtoMsg): QueryMemberWarningsResponse {
    return QueryMemberWarningsResponse.decode(message.value);
  },
  toProto(message: QueryMemberWarningsResponse): Uint8Array {
    return QueryMemberWarningsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberWarningsResponse): QueryMemberWarningsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryMemberWarningsResponse",
      value: QueryMemberWarningsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberStandingRequest(): QueryMemberStandingRequest {
  return {
    member: ""
  };
}
/**
 * QueryMemberStandingRequest defines the QueryMemberStandingRequest message.
 * @name QueryMemberStandingRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberStandingRequest
 */
export const QueryMemberStandingRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryMemberStandingRequest",
  encode(message: QueryMemberStandingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberStandingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberStandingRequest();
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
  fromPartial(object: DeepPartial<QueryMemberStandingRequest>): QueryMemberStandingRequest {
    const message = createBaseQueryMemberStandingRequest();
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: QueryMemberStandingRequestAmino): QueryMemberStandingRequest {
    const message = createBaseQueryMemberStandingRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: QueryMemberStandingRequest): QueryMemberStandingRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: QueryMemberStandingRequestAminoMsg): QueryMemberStandingRequest {
    return QueryMemberStandingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberStandingRequestProtoMsg): QueryMemberStandingRequest {
    return QueryMemberStandingRequest.decode(message.value);
  },
  toProto(message: QueryMemberStandingRequest): Uint8Array {
    return QueryMemberStandingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberStandingRequest): QueryMemberStandingRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryMemberStandingRequest",
      value: QueryMemberStandingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberStandingResponse(): QueryMemberStandingResponse {
  return {
    warningCount: BigInt(0),
    activeReport: false,
    trustTier: BigInt(0)
  };
}
/**
 * QueryMemberStandingResponse defines the QueryMemberStandingResponse message.
 * @name QueryMemberStandingResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryMemberStandingResponse
 */
export const QueryMemberStandingResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryMemberStandingResponse",
  encode(message: QueryMemberStandingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.warningCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.warningCount);
    }
    if (message.activeReport === true) {
      writer.uint32(16).bool(message.activeReport);
    }
    if (message.trustTier !== BigInt(0)) {
      writer.uint32(24).uint64(message.trustTier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberStandingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberStandingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.warningCount = reader.uint64();
          break;
        case 2:
          message.activeReport = reader.bool();
          break;
        case 3:
          message.trustTier = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberStandingResponse>): QueryMemberStandingResponse {
    const message = createBaseQueryMemberStandingResponse();
    message.warningCount = object.warningCount !== undefined && object.warningCount !== null ? BigInt(object.warningCount.toString()) : BigInt(0);
    message.activeReport = object.activeReport ?? false;
    message.trustTier = object.trustTier !== undefined && object.trustTier !== null ? BigInt(object.trustTier.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMemberStandingResponseAmino): QueryMemberStandingResponse {
    const message = createBaseQueryMemberStandingResponse();
    if (object.warning_count !== undefined && object.warning_count !== null) {
      message.warningCount = BigInt(object.warning_count);
    }
    if (object.active_report !== undefined && object.active_report !== null) {
      message.activeReport = object.active_report;
    }
    if (object.trust_tier !== undefined && object.trust_tier !== null) {
      message.trustTier = BigInt(object.trust_tier);
    }
    return message;
  },
  toAmino(message: QueryMemberStandingResponse): QueryMemberStandingResponseAmino {
    const obj: any = {};
    obj.warning_count = message.warningCount !== BigInt(0) ? message.warningCount?.toString() : undefined;
    obj.active_report = message.activeReport === false ? undefined : message.activeReport;
    obj.trust_tier = message.trustTier !== BigInt(0) ? message.trustTier?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberStandingResponseAminoMsg): QueryMemberStandingResponse {
    return QueryMemberStandingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberStandingResponseProtoMsg): QueryMemberStandingResponse {
    return QueryMemberStandingResponse.decode(message.value);
  },
  toProto(message: QueryMemberStandingResponse): Uint8Array {
    return QueryMemberStandingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberStandingResponse): QueryMemberStandingResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryMemberStandingResponse",
      value: QueryMemberStandingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRequiredInvitationStakeRequest(): QueryRequiredInvitationStakeRequest {
  return {
    inviter: ""
  };
}
/**
 * QueryRequiredInvitationStakeRequest is the request type for
 * Query/RequiredInvitationStake. Frontend clients call this to determine the
 * minimum DREAM stake an inviter must lock for their next invitation.
 * @name QueryRequiredInvitationStakeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRequiredInvitationStakeRequest
 */
export const QueryRequiredInvitationStakeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryRequiredInvitationStakeRequest",
  encode(message: QueryRequiredInvitationStakeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inviter !== "") {
      writer.uint32(10).string(message.inviter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequiredInvitationStakeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequiredInvitationStakeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inviter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequiredInvitationStakeRequest>): QueryRequiredInvitationStakeRequest {
    const message = createBaseQueryRequiredInvitationStakeRequest();
    message.inviter = object.inviter ?? "";
    return message;
  },
  fromAmino(object: QueryRequiredInvitationStakeRequestAmino): QueryRequiredInvitationStakeRequest {
    const message = createBaseQueryRequiredInvitationStakeRequest();
    if (object.inviter !== undefined && object.inviter !== null) {
      message.inviter = object.inviter;
    }
    return message;
  },
  toAmino(message: QueryRequiredInvitationStakeRequest): QueryRequiredInvitationStakeRequestAmino {
    const obj: any = {};
    obj.inviter = message.inviter === "" ? undefined : message.inviter;
    return obj;
  },
  fromAminoMsg(object: QueryRequiredInvitationStakeRequestAminoMsg): QueryRequiredInvitationStakeRequest {
    return QueryRequiredInvitationStakeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequiredInvitationStakeRequestProtoMsg): QueryRequiredInvitationStakeRequest {
    return QueryRequiredInvitationStakeRequest.decode(message.value);
  },
  toProto(message: QueryRequiredInvitationStakeRequest): Uint8Array {
    return QueryRequiredInvitationStakeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequiredInvitationStakeRequest): QueryRequiredInvitationStakeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryRequiredInvitationStakeRequest",
      value: QueryRequiredInvitationStakeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequiredInvitationStakeResponse(): QueryRequiredInvitationStakeResponse {
  return {
    requiredStake: "",
    baseStake: "",
    costMultiplier: "",
    creditsUsed: 0,
    creditsRemaining: 0,
    trustLevel: 0
  };
}
/**
 * QueryRequiredInvitationStakeResponse reports the effective minimum stake
 * (in micro-DREAM) and the inputs used to derive it. The required_stake
 * already accounts for InvitationCostMultiplier escalation based on how many
 * of the inviter's seasonal credits have been spent.
 * @name QueryRequiredInvitationStakeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRequiredInvitationStakeResponse
 */
export const QueryRequiredInvitationStakeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryRequiredInvitationStakeResponse",
  encode(message: QueryRequiredInvitationStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requiredStake !== "") {
      writer.uint32(10).string(message.requiredStake);
    }
    if (message.baseStake !== "") {
      writer.uint32(18).string(message.baseStake);
    }
    if (message.costMultiplier !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.costMultiplier, 18).atomics);
    }
    if (message.creditsUsed !== 0) {
      writer.uint32(32).uint32(message.creditsUsed);
    }
    if (message.creditsRemaining !== 0) {
      writer.uint32(40).uint32(message.creditsRemaining);
    }
    if (message.trustLevel !== 0) {
      writer.uint32(48).int32(message.trustLevel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequiredInvitationStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequiredInvitationStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requiredStake = reader.string();
          break;
        case 2:
          message.baseStake = reader.string();
          break;
        case 3:
          message.costMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.creditsUsed = reader.uint32();
          break;
        case 5:
          message.creditsRemaining = reader.uint32();
          break;
        case 6:
          message.trustLevel = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequiredInvitationStakeResponse>): QueryRequiredInvitationStakeResponse {
    const message = createBaseQueryRequiredInvitationStakeResponse();
    message.requiredStake = object.requiredStake ?? "";
    message.baseStake = object.baseStake ?? "";
    message.costMultiplier = object.costMultiplier ?? "";
    message.creditsUsed = object.creditsUsed ?? 0;
    message.creditsRemaining = object.creditsRemaining ?? 0;
    message.trustLevel = object.trustLevel ?? 0;
    return message;
  },
  fromAmino(object: QueryRequiredInvitationStakeResponseAmino): QueryRequiredInvitationStakeResponse {
    const message = createBaseQueryRequiredInvitationStakeResponse();
    if (object.required_stake !== undefined && object.required_stake !== null) {
      message.requiredStake = object.required_stake;
    }
    if (object.base_stake !== undefined && object.base_stake !== null) {
      message.baseStake = object.base_stake;
    }
    if (object.cost_multiplier !== undefined && object.cost_multiplier !== null) {
      message.costMultiplier = object.cost_multiplier;
    }
    if (object.credits_used !== undefined && object.credits_used !== null) {
      message.creditsUsed = object.credits_used;
    }
    if (object.credits_remaining !== undefined && object.credits_remaining !== null) {
      message.creditsRemaining = object.credits_remaining;
    }
    if (object.trust_level !== undefined && object.trust_level !== null) {
      message.trustLevel = object.trust_level;
    }
    return message;
  },
  toAmino(message: QueryRequiredInvitationStakeResponse): QueryRequiredInvitationStakeResponseAmino {
    const obj: any = {};
    obj.required_stake = message.requiredStake === "" ? undefined : message.requiredStake;
    obj.base_stake = message.baseStake === "" ? undefined : message.baseStake;
    obj.cost_multiplier = message.costMultiplier === "" ? undefined : message.costMultiplier;
    obj.credits_used = message.creditsUsed === 0 ? undefined : message.creditsUsed;
    obj.credits_remaining = message.creditsRemaining === 0 ? undefined : message.creditsRemaining;
    obj.trust_level = message.trustLevel === 0 ? undefined : message.trustLevel;
    return obj;
  },
  fromAminoMsg(object: QueryRequiredInvitationStakeResponseAminoMsg): QueryRequiredInvitationStakeResponse {
    return QueryRequiredInvitationStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequiredInvitationStakeResponseProtoMsg): QueryRequiredInvitationStakeResponse {
    return QueryRequiredInvitationStakeResponse.decode(message.value);
  },
  toProto(message: QueryRequiredInvitationStakeResponse): Uint8Array {
    return QueryRequiredInvitationStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequiredInvitationStakeResponse): QueryRequiredInvitationStakeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryRequiredInvitationStakeResponse",
      value: QueryRequiredInvitationStakeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuthorBondsByTypeRequest(): QueryAuthorBondsByTypeRequest {
  return {
    targetType: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryAuthorBondsByTypeRequest defines the QueryAuthorBondsByTypeRequest message.
 * @name QueryAuthorBondsByTypeRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAuthorBondsByTypeRequest
 */
export const QueryAuthorBondsByTypeRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryAuthorBondsByTypeRequest",
  encode(message: QueryAuthorBondsByTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.targetType !== BigInt(0)) {
      writer.uint32(8).uint64(message.targetType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuthorBondsByTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorBondsByTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetType = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryAuthorBondsByTypeRequest>): QueryAuthorBondsByTypeRequest {
    const message = createBaseQueryAuthorBondsByTypeRequest();
    message.targetType = object.targetType !== undefined && object.targetType !== null ? BigInt(object.targetType.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAuthorBondsByTypeRequestAmino): QueryAuthorBondsByTypeRequest {
    const message = createBaseQueryAuthorBondsByTypeRequest();
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = BigInt(object.target_type);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuthorBondsByTypeRequest): QueryAuthorBondsByTypeRequestAmino {
    const obj: any = {};
    obj.target_type = message.targetType !== BigInt(0) ? message.targetType?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuthorBondsByTypeRequestAminoMsg): QueryAuthorBondsByTypeRequest {
    return QueryAuthorBondsByTypeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuthorBondsByTypeRequestProtoMsg): QueryAuthorBondsByTypeRequest {
    return QueryAuthorBondsByTypeRequest.decode(message.value);
  },
  toProto(message: QueryAuthorBondsByTypeRequest): Uint8Array {
    return QueryAuthorBondsByTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuthorBondsByTypeRequest): QueryAuthorBondsByTypeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAuthorBondsByTypeRequest",
      value: QueryAuthorBondsByTypeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuthorBondsByTypeResponse(): QueryAuthorBondsByTypeResponse {
  return {
    bonds: [],
    pagination: undefined
  };
}
/**
 * QueryAuthorBondsByTypeResponse defines the QueryAuthorBondsByTypeResponse message.
 * @name QueryAuthorBondsByTypeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryAuthorBondsByTypeResponse
 */
export const QueryAuthorBondsByTypeResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryAuthorBondsByTypeResponse",
  encode(message: QueryAuthorBondsByTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bonds) {
      Stake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuthorBondsByTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorBondsByTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bonds.push(Stake.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAuthorBondsByTypeResponse>): QueryAuthorBondsByTypeResponse {
    const message = createBaseQueryAuthorBondsByTypeResponse();
    message.bonds = object.bonds?.map(e => Stake.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAuthorBondsByTypeResponseAmino): QueryAuthorBondsByTypeResponse {
    const message = createBaseQueryAuthorBondsByTypeResponse();
    message.bonds = object.bonds?.map(e => Stake.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuthorBondsByTypeResponse): QueryAuthorBondsByTypeResponseAmino {
    const obj: any = {};
    if (message.bonds) {
      obj.bonds = message.bonds.map(e => e ? Stake.toAmino(e) : undefined);
    } else {
      obj.bonds = message.bonds;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuthorBondsByTypeResponseAminoMsg): QueryAuthorBondsByTypeResponse {
    return QueryAuthorBondsByTypeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuthorBondsByTypeResponseProtoMsg): QueryAuthorBondsByTypeResponse {
    return QueryAuthorBondsByTypeResponse.decode(message.value);
  },
  toProto(message: QueryAuthorBondsByTypeResponse): Uint8Array {
    return QueryAuthorBondsByTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuthorBondsByTypeResponse): QueryAuthorBondsByTypeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryAuthorBondsByTypeResponse",
      value: QueryAuthorBondsByTypeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRoleActivityRequest(): QueryRoleActivityRequest {
  return {
    roleType: 0,
    address: ""
  };
}
/**
 * QueryRoleActivityRequest defines the QueryRoleActivity request.
 * @name QueryRoleActivityRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRoleActivityRequest
 */
export const QueryRoleActivityRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryRoleActivityRequest",
  encode(message: QueryRoleActivityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.roleType !== 0) {
      writer.uint32(8).int32(message.roleType);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRoleActivityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoleActivityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleType = reader.int32() as any;
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRoleActivityRequest>): QueryRoleActivityRequest {
    const message = createBaseQueryRoleActivityRequest();
    message.roleType = object.roleType ?? 0;
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryRoleActivityRequestAmino): QueryRoleActivityRequest {
    const message = createBaseQueryRoleActivityRequest();
    if (object.role_type !== undefined && object.role_type !== null) {
      message.roleType = object.role_type;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryRoleActivityRequest): QueryRoleActivityRequestAmino {
    const obj: any = {};
    obj.role_type = message.roleType === 0 ? undefined : message.roleType;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryRoleActivityRequestAminoMsg): QueryRoleActivityRequest {
    return QueryRoleActivityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRoleActivityRequestProtoMsg): QueryRoleActivityRequest {
    return QueryRoleActivityRequest.decode(message.value);
  },
  toProto(message: QueryRoleActivityRequest): Uint8Array {
    return QueryRoleActivityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRoleActivityRequest): QueryRoleActivityRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryRoleActivityRequest",
      value: QueryRoleActivityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRoleActivityResponse(): QueryRoleActivityResponse {
  return {
    roleActivity: RoleActivity.fromPartial({})
  };
}
/**
 * QueryRoleActivityResponse defines the QueryRoleActivity response.
 * @name QueryRoleActivityResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRoleActivityResponse
 */
export const QueryRoleActivityResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryRoleActivityResponse",
  encode(message: QueryRoleActivityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.roleActivity !== undefined) {
      RoleActivity.encode(message.roleActivity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRoleActivityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoleActivityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleActivity = RoleActivity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRoleActivityResponse>): QueryRoleActivityResponse {
    const message = createBaseQueryRoleActivityResponse();
    message.roleActivity = object.roleActivity !== undefined && object.roleActivity !== null ? RoleActivity.fromPartial(object.roleActivity) : undefined;
    return message;
  },
  fromAmino(object: QueryRoleActivityResponseAmino): QueryRoleActivityResponse {
    const message = createBaseQueryRoleActivityResponse();
    if (object.role_activity !== undefined && object.role_activity !== null) {
      message.roleActivity = RoleActivity.fromAmino(object.role_activity);
    }
    return message;
  },
  toAmino(message: QueryRoleActivityResponse): QueryRoleActivityResponseAmino {
    const obj: any = {};
    obj.role_activity = message.roleActivity ? RoleActivity.toAmino(message.roleActivity) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRoleActivityResponseAminoMsg): QueryRoleActivityResponse {
    return QueryRoleActivityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRoleActivityResponseProtoMsg): QueryRoleActivityResponse {
    return QueryRoleActivityResponse.decode(message.value);
  },
  toProto(message: QueryRoleActivityResponse): Uint8Array {
    return QueryRoleActivityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRoleActivityResponse): QueryRoleActivityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryRoleActivityResponse",
      value: QueryRoleActivityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRoleRewardPoolsRequest(): QueryRoleRewardPoolsRequest {
  return {};
}
/**
 * QueryRoleRewardPoolsRequest is the request for RoleRewardPools.
 * @name QueryRoleRewardPoolsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRoleRewardPoolsRequest
 */
export const QueryRoleRewardPoolsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryRoleRewardPoolsRequest",
  encode(_: QueryRoleRewardPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRoleRewardPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoleRewardPoolsRequest();
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
  fromPartial(_: DeepPartial<QueryRoleRewardPoolsRequest>): QueryRoleRewardPoolsRequest {
    const message = createBaseQueryRoleRewardPoolsRequest();
    return message;
  },
  fromAmino(_: QueryRoleRewardPoolsRequestAmino): QueryRoleRewardPoolsRequest {
    const message = createBaseQueryRoleRewardPoolsRequest();
    return message;
  },
  toAmino(_: QueryRoleRewardPoolsRequest): QueryRoleRewardPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryRoleRewardPoolsRequestAminoMsg): QueryRoleRewardPoolsRequest {
    return QueryRoleRewardPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRoleRewardPoolsRequestProtoMsg): QueryRoleRewardPoolsRequest {
    return QueryRoleRewardPoolsRequest.decode(message.value);
  },
  toProto(message: QueryRoleRewardPoolsRequest): Uint8Array {
    return QueryRoleRewardPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRoleRewardPoolsRequest): QueryRoleRewardPoolsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryRoleRewardPoolsRequest",
      value: QueryRoleRewardPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseRoleRewardPoolStatus(): RoleRewardPoolStatus {
  return {
    role: "",
    address: "",
    balance: "",
    cap: "",
    headroom: ""
  };
}
/**
 * RoleRewardPoolStatus is one bonded-role reward pool's funding state.
 * @name RoleRewardPoolStatus
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleRewardPoolStatus
 */
export const RoleRewardPoolStatus = {
  typeUrl: "/sparkdream.rep.v1.RoleRewardPoolStatus",
  encode(message: RoleRewardPoolStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    if (message.cap !== "") {
      writer.uint32(34).string(message.cap);
    }
    if (message.headroom !== "") {
      writer.uint32(42).string(message.headroom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoleRewardPoolStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleRewardPoolStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        case 4:
          message.cap = reader.string();
          break;
        case 5:
          message.headroom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RoleRewardPoolStatus>): RoleRewardPoolStatus {
    const message = createBaseRoleRewardPoolStatus();
    message.role = object.role ?? "";
    message.address = object.address ?? "";
    message.balance = object.balance ?? "";
    message.cap = object.cap ?? "";
    message.headroom = object.headroom ?? "";
    return message;
  },
  fromAmino(object: RoleRewardPoolStatusAmino): RoleRewardPoolStatus {
    const message = createBaseRoleRewardPoolStatus();
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.cap !== undefined && object.cap !== null) {
      message.cap = object.cap;
    }
    if (object.headroom !== undefined && object.headroom !== null) {
      message.headroom = object.headroom;
    }
    return message;
  },
  toAmino(message: RoleRewardPoolStatus): RoleRewardPoolStatusAmino {
    const obj: any = {};
    obj.role = message.role === "" ? undefined : message.role;
    obj.address = message.address === "" ? undefined : message.address;
    obj.balance = message.balance === "" ? undefined : message.balance;
    obj.cap = message.cap === "" ? undefined : message.cap;
    obj.headroom = message.headroom === "" ? undefined : message.headroom;
    return obj;
  },
  fromAminoMsg(object: RoleRewardPoolStatusAminoMsg): RoleRewardPoolStatus {
    return RoleRewardPoolStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: RoleRewardPoolStatusProtoMsg): RoleRewardPoolStatus {
    return RoleRewardPoolStatus.decode(message.value);
  },
  toProto(message: RoleRewardPoolStatus): Uint8Array {
    return RoleRewardPoolStatus.encode(message).finish();
  },
  toProtoMsg(message: RoleRewardPoolStatus): RoleRewardPoolStatusProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.RoleRewardPoolStatus",
      value: RoleRewardPoolStatus.encode(message).finish()
    };
  }
};
function createBaseQueryRoleRewardPoolsResponse(): QueryRoleRewardPoolsResponse {
  return {
    pools: [],
    fundedToday: "",
    dailyFundingCap: "",
    inflationShare: ""
  };
}
/**
 * QueryRoleRewardPoolsResponse is the response for RoleRewardPools.
 * @name QueryRoleRewardPoolsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryRoleRewardPoolsResponse
 */
export const QueryRoleRewardPoolsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryRoleRewardPoolsResponse",
  encode(message: QueryRoleRewardPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      RoleRewardPoolStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fundedToday !== "") {
      writer.uint32(18).string(message.fundedToday);
    }
    if (message.dailyFundingCap !== "") {
      writer.uint32(26).string(message.dailyFundingCap);
    }
    if (message.inflationShare !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.inflationShare, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRoleRewardPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoleRewardPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(RoleRewardPoolStatus.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fundedToday = reader.string();
          break;
        case 3:
          message.dailyFundingCap = reader.string();
          break;
        case 4:
          message.inflationShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRoleRewardPoolsResponse>): QueryRoleRewardPoolsResponse {
    const message = createBaseQueryRoleRewardPoolsResponse();
    message.pools = object.pools?.map(e => RoleRewardPoolStatus.fromPartial(e)) || [];
    message.fundedToday = object.fundedToday ?? "";
    message.dailyFundingCap = object.dailyFundingCap ?? "";
    message.inflationShare = object.inflationShare ?? "";
    return message;
  },
  fromAmino(object: QueryRoleRewardPoolsResponseAmino): QueryRoleRewardPoolsResponse {
    const message = createBaseQueryRoleRewardPoolsResponse();
    message.pools = object.pools?.map(e => RoleRewardPoolStatus.fromAmino(e)) || [];
    if (object.funded_today !== undefined && object.funded_today !== null) {
      message.fundedToday = object.funded_today;
    }
    if (object.daily_funding_cap !== undefined && object.daily_funding_cap !== null) {
      message.dailyFundingCap = object.daily_funding_cap;
    }
    if (object.inflation_share !== undefined && object.inflation_share !== null) {
      message.inflationShare = object.inflation_share;
    }
    return message;
  },
  toAmino(message: QueryRoleRewardPoolsResponse): QueryRoleRewardPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? RoleRewardPoolStatus.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.funded_today = message.fundedToday === "" ? undefined : message.fundedToday;
    obj.daily_funding_cap = message.dailyFundingCap === "" ? undefined : message.dailyFundingCap;
    obj.inflation_share = message.inflationShare === "" ? undefined : message.inflationShare;
    return obj;
  },
  fromAminoMsg(object: QueryRoleRewardPoolsResponseAminoMsg): QueryRoleRewardPoolsResponse {
    return QueryRoleRewardPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRoleRewardPoolsResponseProtoMsg): QueryRoleRewardPoolsResponse {
    return QueryRoleRewardPoolsResponse.decode(message.value);
  },
  toProto(message: QueryRoleRewardPoolsResponse): Uint8Array {
    return QueryRoleRewardPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRoleRewardPoolsResponse): QueryRoleRewardPoolsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryRoleRewardPoolsResponse",
      value: QueryRoleRewardPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInitiativeReviewsRequest(): QueryInitiativeReviewsRequest {
  return {
    initiativeId: BigInt(0)
  };
}
/**
 * QueryInitiativeReviewsRequest asks for the verdicts on one initiative.
 * 
 * Deliberately has NO round selector. The codebase convention for an optional
 * numeric filter is a plain field where zero means unset (see
 * QueryPostsRequest.category_id, QuerySeasonStatsRequest.season,
 * QueryShieldRequest.epoch) — which works there because none of those domains
 * has a valid zero. Review rounds number from 0, so the same convention would
 * make the first round unaddressable. Rather than diverge from the convention
 * for one message, every round is returned: max_review_rounds bounds the set at
 * 3, so there is nothing to select between and nothing to paginate.
 * @name QueryInitiativeReviewsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativeReviewsRequest
 */
export const QueryInitiativeReviewsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativeReviewsRequest",
  encode(message: QueryInitiativeReviewsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInitiativeReviewsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitiativeReviewsRequest();
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
  fromPartial(object: DeepPartial<QueryInitiativeReviewsRequest>): QueryInitiativeReviewsRequest {
    const message = createBaseQueryInitiativeReviewsRequest();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryInitiativeReviewsRequestAmino): QueryInitiativeReviewsRequest {
    const message = createBaseQueryInitiativeReviewsRequest();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    return message;
  },
  toAmino(message: QueryInitiativeReviewsRequest): QueryInitiativeReviewsRequestAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryInitiativeReviewsRequestAminoMsg): QueryInitiativeReviewsRequest {
    return QueryInitiativeReviewsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInitiativeReviewsRequestProtoMsg): QueryInitiativeReviewsRequest {
    return QueryInitiativeReviewsRequest.decode(message.value);
  },
  toProto(message: QueryInitiativeReviewsRequest): Uint8Array {
    return QueryInitiativeReviewsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInitiativeReviewsRequest): QueryInitiativeReviewsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInitiativeReviewsRequest",
      value: QueryInitiativeReviewsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInitiativeReviewsResponse(): QueryInitiativeReviewsResponse {
  return {
    rounds: [],
    currentRound: 0,
    approvals: 0,
    required: 0,
    satisfied: false
  };
}
/**
 * QueryInitiativeReviewsResponse returns every round's verdicts, plus what the
 * current round adds up to against the gate.
 * @name QueryInitiativeReviewsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryInitiativeReviewsResponse
 */
export const QueryInitiativeReviewsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryInitiativeReviewsResponse",
  encode(message: QueryInitiativeReviewsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rounds) {
      InitiativeReviewRound.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentRound !== 0) {
      writer.uint32(16).uint32(message.currentRound);
    }
    if (message.approvals !== 0) {
      writer.uint32(24).uint32(message.approvals);
    }
    if (message.required !== 0) {
      writer.uint32(32).uint32(message.required);
    }
    if (message.satisfied === true) {
      writer.uint32(40).bool(message.satisfied);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInitiativeReviewsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInitiativeReviewsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rounds.push(InitiativeReviewRound.decode(reader, reader.uint32()));
          break;
        case 2:
          message.currentRound = reader.uint32();
          break;
        case 3:
          message.approvals = reader.uint32();
          break;
        case 4:
          message.required = reader.uint32();
          break;
        case 5:
          message.satisfied = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryInitiativeReviewsResponse>): QueryInitiativeReviewsResponse {
    const message = createBaseQueryInitiativeReviewsResponse();
    message.rounds = object.rounds?.map(e => InitiativeReviewRound.fromPartial(e)) || [];
    message.currentRound = object.currentRound ?? 0;
    message.approvals = object.approvals ?? 0;
    message.required = object.required ?? 0;
    message.satisfied = object.satisfied ?? false;
    return message;
  },
  fromAmino(object: QueryInitiativeReviewsResponseAmino): QueryInitiativeReviewsResponse {
    const message = createBaseQueryInitiativeReviewsResponse();
    message.rounds = object.rounds?.map(e => InitiativeReviewRound.fromAmino(e)) || [];
    if (object.current_round !== undefined && object.current_round !== null) {
      message.currentRound = object.current_round;
    }
    if (object.approvals !== undefined && object.approvals !== null) {
      message.approvals = object.approvals;
    }
    if (object.required !== undefined && object.required !== null) {
      message.required = object.required;
    }
    if (object.satisfied !== undefined && object.satisfied !== null) {
      message.satisfied = object.satisfied;
    }
    return message;
  },
  toAmino(message: QueryInitiativeReviewsResponse): QueryInitiativeReviewsResponseAmino {
    const obj: any = {};
    if (message.rounds) {
      obj.rounds = message.rounds.map(e => e ? InitiativeReviewRound.toAmino(e) : undefined);
    } else {
      obj.rounds = message.rounds;
    }
    obj.current_round = message.currentRound === 0 ? undefined : message.currentRound;
    obj.approvals = message.approvals === 0 ? undefined : message.approvals;
    obj.required = message.required === 0 ? undefined : message.required;
    obj.satisfied = message.satisfied === false ? undefined : message.satisfied;
    return obj;
  },
  fromAminoMsg(object: QueryInitiativeReviewsResponseAminoMsg): QueryInitiativeReviewsResponse {
    return QueryInitiativeReviewsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInitiativeReviewsResponseProtoMsg): QueryInitiativeReviewsResponse {
    return QueryInitiativeReviewsResponse.decode(message.value);
  },
  toProto(message: QueryInitiativeReviewsResponse): Uint8Array {
    return QueryInitiativeReviewsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInitiativeReviewsResponse): QueryInitiativeReviewsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryInitiativeReviewsResponse",
      value: QueryInitiativeReviewsResponse.encode(message).finish()
    };
  }
};
function createBaseInitiativeReviewRound(): InitiativeReviewRound {
  return {
    round: 0,
    reviews: [],
    approvals: 0
  };
}
/**
 * InitiativeReviewRound groups one round's verdicts.
 * @name InitiativeReviewRound
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.InitiativeReviewRound
 */
export const InitiativeReviewRound = {
  typeUrl: "/sparkdream.rep.v1.InitiativeReviewRound",
  encode(message: InitiativeReviewRound, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== 0) {
      writer.uint32(8).uint32(message.round);
    }
    for (const v of message.reviews) {
      InitiativeReview.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.approvals !== 0) {
      writer.uint32(24).uint32(message.approvals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InitiativeReviewRound {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitiativeReviewRound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.uint32();
          break;
        case 2:
          message.reviews.push(InitiativeReview.decode(reader, reader.uint32()));
          break;
        case 3:
          message.approvals = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InitiativeReviewRound>): InitiativeReviewRound {
    const message = createBaseInitiativeReviewRound();
    message.round = object.round ?? 0;
    message.reviews = object.reviews?.map(e => InitiativeReview.fromPartial(e)) || [];
    message.approvals = object.approvals ?? 0;
    return message;
  },
  fromAmino(object: InitiativeReviewRoundAmino): InitiativeReviewRound {
    const message = createBaseInitiativeReviewRound();
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    message.reviews = object.reviews?.map(e => InitiativeReview.fromAmino(e)) || [];
    if (object.approvals !== undefined && object.approvals !== null) {
      message.approvals = object.approvals;
    }
    return message;
  },
  toAmino(message: InitiativeReviewRound): InitiativeReviewRoundAmino {
    const obj: any = {};
    obj.round = message.round === 0 ? undefined : message.round;
    if (message.reviews) {
      obj.reviews = message.reviews.map(e => e ? InitiativeReview.toAmino(e) : undefined);
    } else {
      obj.reviews = message.reviews;
    }
    obj.approvals = message.approvals === 0 ? undefined : message.approvals;
    return obj;
  },
  fromAminoMsg(object: InitiativeReviewRoundAminoMsg): InitiativeReviewRound {
    return InitiativeReviewRound.fromAmino(object.value);
  },
  fromProtoMsg(message: InitiativeReviewRoundProtoMsg): InitiativeReviewRound {
    return InitiativeReviewRound.decode(message.value);
  },
  toProto(message: InitiativeReviewRound): Uint8Array {
    return InitiativeReviewRound.encode(message).finish();
  },
  toProtoMsg(message: InitiativeReviewRound): InitiativeReviewRoundProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.InitiativeReviewRound",
      value: InitiativeReviewRound.encode(message).finish()
    };
  }
};
function createBaseQueryReviewBountyRequest(): QueryReviewBountyRequest {
  return {
    initiativeId: BigInt(0)
  };
}
/**
 * QueryReviewBountyRequest asks what is escrowed against an initiative.
 * @name QueryReviewBountyRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryReviewBountyRequest
 */
export const QueryReviewBountyRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryReviewBountyRequest",
  encode(message: QueryReviewBountyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReviewBountyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReviewBountyRequest();
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
  fromPartial(object: DeepPartial<QueryReviewBountyRequest>): QueryReviewBountyRequest {
    const message = createBaseQueryReviewBountyRequest();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryReviewBountyRequestAmino): QueryReviewBountyRequest {
    const message = createBaseQueryReviewBountyRequest();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    return message;
  },
  toAmino(message: QueryReviewBountyRequest): QueryReviewBountyRequestAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReviewBountyRequestAminoMsg): QueryReviewBountyRequest {
    return QueryReviewBountyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReviewBountyRequestProtoMsg): QueryReviewBountyRequest {
    return QueryReviewBountyRequest.decode(message.value);
  },
  toProto(message: QueryReviewBountyRequest): Uint8Array {
    return QueryReviewBountyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReviewBountyRequest): QueryReviewBountyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryReviewBountyRequest",
      value: QueryReviewBountyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReviewBountyResponse(): QueryReviewBountyResponse {
  return {
    bounty: ReviewBounty.fromPartial({}),
    reclaimStatus: []
  };
}
/**
 * QueryReviewBountyResponse returns the escrow and its reclaim state.
 * @name QueryReviewBountyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryReviewBountyResponse
 */
export const QueryReviewBountyResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryReviewBountyResponse",
  encode(message: QueryReviewBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bounty !== undefined) {
      ReviewBounty.encode(message.bounty, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.reclaimStatus) {
      ReviewBountyReclaimStatus.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReviewBountyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReviewBountyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bounty = ReviewBounty.decode(reader, reader.uint32());
          break;
        case 2:
          message.reclaimStatus.push(ReviewBountyReclaimStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReviewBountyResponse>): QueryReviewBountyResponse {
    const message = createBaseQueryReviewBountyResponse();
    message.bounty = object.bounty !== undefined && object.bounty !== null ? ReviewBounty.fromPartial(object.bounty) : undefined;
    message.reclaimStatus = object.reclaimStatus?.map(e => ReviewBountyReclaimStatus.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryReviewBountyResponseAmino): QueryReviewBountyResponse {
    const message = createBaseQueryReviewBountyResponse();
    if (object.bounty !== undefined && object.bounty !== null) {
      message.bounty = ReviewBounty.fromAmino(object.bounty);
    }
    message.reclaimStatus = object.reclaim_status?.map(e => ReviewBountyReclaimStatus.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryReviewBountyResponse): QueryReviewBountyResponseAmino {
    const obj: any = {};
    obj.bounty = message.bounty ? ReviewBounty.toAmino(message.bounty) : undefined;
    if (message.reclaimStatus) {
      obj.reclaim_status = message.reclaimStatus.map(e => e ? ReviewBountyReclaimStatus.toAmino(e) : undefined);
    } else {
      obj.reclaim_status = message.reclaimStatus;
    }
    return obj;
  },
  fromAminoMsg(object: QueryReviewBountyResponseAminoMsg): QueryReviewBountyResponse {
    return QueryReviewBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReviewBountyResponseProtoMsg): QueryReviewBountyResponse {
    return QueryReviewBountyResponse.decode(message.value);
  },
  toProto(message: QueryReviewBountyResponse): Uint8Array {
    return QueryReviewBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReviewBountyResponse): QueryReviewBountyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryReviewBountyResponse",
      value: QueryReviewBountyResponse.encode(message).finish()
    };
  }
};
function createBaseReviewBountyReclaimStatus(): ReviewBountyReclaimStatus {
  return {
    funder: "",
    amount: "",
    reclaimableAtHeight: BigInt(0),
    reclaimable: false
  };
}
/**
 * ReviewBountyReclaimStatus is one contribution's reclaim eligibility.
 * @name ReviewBountyReclaimStatus
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReviewBountyReclaimStatus
 */
export const ReviewBountyReclaimStatus = {
  typeUrl: "/sparkdream.rep.v1.ReviewBountyReclaimStatus",
  encode(message: ReviewBountyReclaimStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.funder !== "") {
      writer.uint32(10).string(message.funder);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.reclaimableAtHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.reclaimableAtHeight);
    }
    if (message.reclaimable === true) {
      writer.uint32(32).bool(message.reclaimable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReviewBountyReclaimStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewBountyReclaimStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funder = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.reclaimableAtHeight = reader.int64();
          break;
        case 4:
          message.reclaimable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReviewBountyReclaimStatus>): ReviewBountyReclaimStatus {
    const message = createBaseReviewBountyReclaimStatus();
    message.funder = object.funder ?? "";
    message.amount = object.amount ?? "";
    message.reclaimableAtHeight = object.reclaimableAtHeight !== undefined && object.reclaimableAtHeight !== null ? BigInt(object.reclaimableAtHeight.toString()) : BigInt(0);
    message.reclaimable = object.reclaimable ?? false;
    return message;
  },
  fromAmino(object: ReviewBountyReclaimStatusAmino): ReviewBountyReclaimStatus {
    const message = createBaseReviewBountyReclaimStatus();
    if (object.funder !== undefined && object.funder !== null) {
      message.funder = object.funder;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.reclaimable_at_height !== undefined && object.reclaimable_at_height !== null) {
      message.reclaimableAtHeight = BigInt(object.reclaimable_at_height);
    }
    if (object.reclaimable !== undefined && object.reclaimable !== null) {
      message.reclaimable = object.reclaimable;
    }
    return message;
  },
  toAmino(message: ReviewBountyReclaimStatus): ReviewBountyReclaimStatusAmino {
    const obj: any = {};
    obj.funder = message.funder === "" ? undefined : message.funder;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.reclaimable_at_height = message.reclaimableAtHeight !== BigInt(0) ? message.reclaimableAtHeight?.toString() : undefined;
    obj.reclaimable = message.reclaimable === false ? undefined : message.reclaimable;
    return obj;
  },
  fromAminoMsg(object: ReviewBountyReclaimStatusAminoMsg): ReviewBountyReclaimStatus {
    return ReviewBountyReclaimStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: ReviewBountyReclaimStatusProtoMsg): ReviewBountyReclaimStatus {
    return ReviewBountyReclaimStatus.decode(message.value);
  },
  toProto(message: ReviewBountyReclaimStatus): Uint8Array {
    return ReviewBountyReclaimStatus.encode(message).finish();
  },
  toProtoMsg(message: ReviewBountyReclaimStatus): ReviewBountyReclaimStatusProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.ReviewBountyReclaimStatus",
      value: ReviewBountyReclaimStatus.encode(message).finish()
    };
  }
};
function createBaseQueryEscalatedReviewsRequest(): QueryEscalatedReviewsRequest {
  return {};
}
/**
 * QueryEscalatedReviewsRequest asks what is awaiting the committee.
 * @name QueryEscalatedReviewsRequest
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryEscalatedReviewsRequest
 */
export const QueryEscalatedReviewsRequest = {
  typeUrl: "/sparkdream.rep.v1.QueryEscalatedReviewsRequest",
  encode(_: QueryEscalatedReviewsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEscalatedReviewsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscalatedReviewsRequest();
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
  fromPartial(_: DeepPartial<QueryEscalatedReviewsRequest>): QueryEscalatedReviewsRequest {
    const message = createBaseQueryEscalatedReviewsRequest();
    return message;
  },
  fromAmino(_: QueryEscalatedReviewsRequestAmino): QueryEscalatedReviewsRequest {
    const message = createBaseQueryEscalatedReviewsRequest();
    return message;
  },
  toAmino(_: QueryEscalatedReviewsRequest): QueryEscalatedReviewsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEscalatedReviewsRequestAminoMsg): QueryEscalatedReviewsRequest {
    return QueryEscalatedReviewsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEscalatedReviewsRequestProtoMsg): QueryEscalatedReviewsRequest {
    return QueryEscalatedReviewsRequest.decode(message.value);
  },
  toProto(message: QueryEscalatedReviewsRequest): Uint8Array {
    return QueryEscalatedReviewsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEscalatedReviewsRequest): QueryEscalatedReviewsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryEscalatedReviewsRequest",
      value: QueryEscalatedReviewsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEscalatedReviewsResponse(): QueryEscalatedReviewsResponse {
  return {
    escalations: []
  };
}
/**
 * QueryEscalatedReviewsResponse lists the escalated rounds.
 * 
 * Escalation is recorded in a separate set rather than on the initiative --
 * ReviewEscalation is reset to NONE when a round escalates -- so without this
 * query a committee has no way to find the decisions waiting on it.
 * @name QueryEscalatedReviewsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.QueryEscalatedReviewsResponse
 */
export const QueryEscalatedReviewsResponse = {
  typeUrl: "/sparkdream.rep.v1.QueryEscalatedReviewsResponse",
  encode(message: QueryEscalatedReviewsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.escalations) {
      EscalatedReview.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEscalatedReviewsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscalatedReviewsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.escalations.push(EscalatedReview.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEscalatedReviewsResponse>): QueryEscalatedReviewsResponse {
    const message = createBaseQueryEscalatedReviewsResponse();
    message.escalations = object.escalations?.map(e => EscalatedReview.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryEscalatedReviewsResponseAmino): QueryEscalatedReviewsResponse {
    const message = createBaseQueryEscalatedReviewsResponse();
    message.escalations = object.escalations?.map(e => EscalatedReview.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEscalatedReviewsResponse): QueryEscalatedReviewsResponseAmino {
    const obj: any = {};
    if (message.escalations) {
      obj.escalations = message.escalations.map(e => e ? EscalatedReview.toAmino(e) : undefined);
    } else {
      obj.escalations = message.escalations;
    }
    return obj;
  },
  fromAminoMsg(object: QueryEscalatedReviewsResponseAminoMsg): QueryEscalatedReviewsResponse {
    return QueryEscalatedReviewsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEscalatedReviewsResponseProtoMsg): QueryEscalatedReviewsResponse {
    return QueryEscalatedReviewsResponse.decode(message.value);
  },
  toProto(message: QueryEscalatedReviewsResponse): Uint8Array {
    return QueryEscalatedReviewsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEscalatedReviewsResponse): QueryEscalatedReviewsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.QueryEscalatedReviewsResponse",
      value: QueryEscalatedReviewsResponse.encode(message).finish()
    };
  }
};
function createBaseEscalatedReview(): EscalatedReview {
  return {
    initiativeId: BigInt(0),
    round: 0,
    reviewDeadline: BigInt(0),
    title: "",
    assignee: ""
  };
}
/**
 * EscalatedReview is one round sitting with the Operations Committee.
 * @name EscalatedReview
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.EscalatedReview
 */
export const EscalatedReview = {
  typeUrl: "/sparkdream.rep.v1.EscalatedReview",
  encode(message: EscalatedReview, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    if (message.round !== 0) {
      writer.uint32(16).uint32(message.round);
    }
    if (message.reviewDeadline !== BigInt(0)) {
      writer.uint32(24).int64(message.reviewDeadline);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.assignee !== "") {
      writer.uint32(42).string(message.assignee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EscalatedReview {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEscalatedReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiativeId = reader.uint64();
          break;
        case 2:
          message.round = reader.uint32();
          break;
        case 3:
          message.reviewDeadline = reader.int64();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.assignee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EscalatedReview>): EscalatedReview {
    const message = createBaseEscalatedReview();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.round = object.round ?? 0;
    message.reviewDeadline = object.reviewDeadline !== undefined && object.reviewDeadline !== null ? BigInt(object.reviewDeadline.toString()) : BigInt(0);
    message.title = object.title ?? "";
    message.assignee = object.assignee ?? "";
    return message;
  },
  fromAmino(object: EscalatedReviewAmino): EscalatedReview {
    const message = createBaseEscalatedReview();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    if (object.review_deadline !== undefined && object.review_deadline !== null) {
      message.reviewDeadline = BigInt(object.review_deadline);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.assignee !== undefined && object.assignee !== null) {
      message.assignee = object.assignee;
    }
    return message;
  },
  toAmino(message: EscalatedReview): EscalatedReviewAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.round = message.round === 0 ? undefined : message.round;
    obj.review_deadline = message.reviewDeadline !== BigInt(0) ? message.reviewDeadline?.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.assignee = message.assignee === "" ? undefined : message.assignee;
    return obj;
  },
  fromAminoMsg(object: EscalatedReviewAminoMsg): EscalatedReview {
    return EscalatedReview.fromAmino(object.value);
  },
  fromProtoMsg(message: EscalatedReviewProtoMsg): EscalatedReview {
    return EscalatedReview.decode(message.value);
  },
  toProto(message: EscalatedReview): Uint8Array {
    return EscalatedReview.encode(message).finish();
  },
  toProtoMsg(message: EscalatedReview): EscalatedReviewProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.EscalatedReview",
      value: EscalatedReview.encode(message).finish()
    };
  }
};