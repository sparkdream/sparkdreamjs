//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { Season, SeasonAmino } from "./season";
import { SeasonTransitionState, SeasonTransitionStateAmino } from "./season_transition_state";
import { TransitionRecoveryState, TransitionRecoveryStateAmino } from "./transition_recovery_state";
import { NextSeasonInfo, NextSeasonInfoAmino } from "./next_season_info";
import { SeasonSnapshot, SeasonSnapshotAmino } from "./season_snapshot";
import { MemberSeasonSnapshot, MemberSeasonSnapshotAmino } from "./member_season_snapshot";
import { MemberProfile, MemberProfileAmino } from "./member_profile";
import { MemberRegistration, MemberRegistrationAmino } from "./member_registration";
import { Achievement, AchievementAmino } from "./achievement";
import { Title, TitleAmino } from "./title";
import { SeasonTitleEligibility, SeasonTitleEligibilityAmino } from "./season_title_eligibility";
import { Guild, GuildAmino } from "./guild";
import { GuildMembership, GuildMembershipAmino } from "./guild_membership";
import { GuildInvite, GuildInviteAmino } from "./guild_invite";
import { Quest, QuestAmino } from "./quest";
import { MemberQuestProgress, MemberQuestProgressAmino } from "./member_quest_progress";
import { EpochXpTracker, EpochXpTrackerAmino } from "./epoch_xp_tracker";
import { VoteXpRecord, VoteXpRecordAmino } from "./vote_xp_record";
import { ForumXpCooldown, ForumXpCooldownAmino } from "./forum_xp_cooldown";
import { DisplayNameModeration, DisplayNameModerationAmino } from "./display_name_moderation";
import { DisplayNameReportStake, DisplayNameReportStakeAmino } from "./display_name_report_stake";
import { DisplayNameAppealStake, DisplayNameAppealStakeAmino } from "./display_name_appeal_stake";
import { Nomination, NominationAmino, NominationStake, NominationStakeAmino, RetroRewardRecord, RetroRewardRecordAmino } from "./nomination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryGetSeasonRequest defines the QueryGetSeasonRequest message.
 * @name QueryGetSeasonRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonRequest
 */
export interface QueryGetSeasonRequest {}
export interface QueryGetSeasonRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonRequest";
  value: Uint8Array;
}
/**
 * QueryGetSeasonRequest defines the QueryGetSeasonRequest message.
 * @name QueryGetSeasonRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonRequest
 */
export interface QueryGetSeasonRequestAmino {}
export interface QueryGetSeasonRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetSeasonRequest";
  value: QueryGetSeasonRequestAmino;
}
/**
 * QueryGetSeasonResponse defines the QueryGetSeasonResponse message.
 * @name QueryGetSeasonResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonResponse
 */
export interface QueryGetSeasonResponse {
  season: Season;
}
export interface QueryGetSeasonResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonResponse";
  value: Uint8Array;
}
/**
 * QueryGetSeasonResponse defines the QueryGetSeasonResponse message.
 * @name QueryGetSeasonResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonResponse
 */
export interface QueryGetSeasonResponseAmino {
  season?: SeasonAmino;
}
export interface QueryGetSeasonResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetSeasonResponse";
  value: QueryGetSeasonResponseAmino;
}
/**
 * QueryGetSeasonTransitionStateRequest defines the QueryGetSeasonTransitionStateRequest message.
 * @name QueryGetSeasonTransitionStateRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonTransitionStateRequest
 */
export interface QueryGetSeasonTransitionStateRequest {}
export interface QueryGetSeasonTransitionStateRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonTransitionStateRequest";
  value: Uint8Array;
}
/**
 * QueryGetSeasonTransitionStateRequest defines the QueryGetSeasonTransitionStateRequest message.
 * @name QueryGetSeasonTransitionStateRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonTransitionStateRequest
 */
export interface QueryGetSeasonTransitionStateRequestAmino {}
export interface QueryGetSeasonTransitionStateRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetSeasonTransitionStateRequest";
  value: QueryGetSeasonTransitionStateRequestAmino;
}
/**
 * QueryGetSeasonTransitionStateResponse defines the QueryGetSeasonTransitionStateResponse message.
 * @name QueryGetSeasonTransitionStateResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonTransitionStateResponse
 */
export interface QueryGetSeasonTransitionStateResponse {
  seasonTransitionState: SeasonTransitionState;
}
export interface QueryGetSeasonTransitionStateResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonTransitionStateResponse";
  value: Uint8Array;
}
/**
 * QueryGetSeasonTransitionStateResponse defines the QueryGetSeasonTransitionStateResponse message.
 * @name QueryGetSeasonTransitionStateResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonTransitionStateResponse
 */
export interface QueryGetSeasonTransitionStateResponseAmino {
  season_transition_state?: SeasonTransitionStateAmino;
}
export interface QueryGetSeasonTransitionStateResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetSeasonTransitionStateResponse";
  value: QueryGetSeasonTransitionStateResponseAmino;
}
/**
 * QueryGetTransitionRecoveryStateRequest defines the QueryGetTransitionRecoveryStateRequest message.
 * @name QueryGetTransitionRecoveryStateRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetTransitionRecoveryStateRequest
 */
export interface QueryGetTransitionRecoveryStateRequest {}
export interface QueryGetTransitionRecoveryStateRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetTransitionRecoveryStateRequest";
  value: Uint8Array;
}
/**
 * QueryGetTransitionRecoveryStateRequest defines the QueryGetTransitionRecoveryStateRequest message.
 * @name QueryGetTransitionRecoveryStateRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetTransitionRecoveryStateRequest
 */
export interface QueryGetTransitionRecoveryStateRequestAmino {}
export interface QueryGetTransitionRecoveryStateRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetTransitionRecoveryStateRequest";
  value: QueryGetTransitionRecoveryStateRequestAmino;
}
/**
 * QueryGetTransitionRecoveryStateResponse defines the QueryGetTransitionRecoveryStateResponse message.
 * @name QueryGetTransitionRecoveryStateResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetTransitionRecoveryStateResponse
 */
export interface QueryGetTransitionRecoveryStateResponse {
  transitionRecoveryState: TransitionRecoveryState;
}
export interface QueryGetTransitionRecoveryStateResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetTransitionRecoveryStateResponse";
  value: Uint8Array;
}
/**
 * QueryGetTransitionRecoveryStateResponse defines the QueryGetTransitionRecoveryStateResponse message.
 * @name QueryGetTransitionRecoveryStateResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetTransitionRecoveryStateResponse
 */
export interface QueryGetTransitionRecoveryStateResponseAmino {
  transition_recovery_state?: TransitionRecoveryStateAmino;
}
export interface QueryGetTransitionRecoveryStateResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetTransitionRecoveryStateResponse";
  value: QueryGetTransitionRecoveryStateResponseAmino;
}
/**
 * QueryGetNextSeasonInfoRequest defines the QueryGetNextSeasonInfoRequest message.
 * @name QueryGetNextSeasonInfoRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetNextSeasonInfoRequest
 */
export interface QueryGetNextSeasonInfoRequest {}
export interface QueryGetNextSeasonInfoRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetNextSeasonInfoRequest";
  value: Uint8Array;
}
/**
 * QueryGetNextSeasonInfoRequest defines the QueryGetNextSeasonInfoRequest message.
 * @name QueryGetNextSeasonInfoRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetNextSeasonInfoRequest
 */
export interface QueryGetNextSeasonInfoRequestAmino {}
export interface QueryGetNextSeasonInfoRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetNextSeasonInfoRequest";
  value: QueryGetNextSeasonInfoRequestAmino;
}
/**
 * QueryGetNextSeasonInfoResponse defines the QueryGetNextSeasonInfoResponse message.
 * @name QueryGetNextSeasonInfoResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetNextSeasonInfoResponse
 */
export interface QueryGetNextSeasonInfoResponse {
  nextSeasonInfo: NextSeasonInfo;
}
export interface QueryGetNextSeasonInfoResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetNextSeasonInfoResponse";
  value: Uint8Array;
}
/**
 * QueryGetNextSeasonInfoResponse defines the QueryGetNextSeasonInfoResponse message.
 * @name QueryGetNextSeasonInfoResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetNextSeasonInfoResponse
 */
export interface QueryGetNextSeasonInfoResponseAmino {
  next_season_info?: NextSeasonInfoAmino;
}
export interface QueryGetNextSeasonInfoResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetNextSeasonInfoResponse";
  value: QueryGetNextSeasonInfoResponseAmino;
}
/**
 * QueryGetSeasonSnapshotRequest defines the QueryGetSeasonSnapshotRequest message.
 * @name QueryGetSeasonSnapshotRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonSnapshotRequest
 */
export interface QueryGetSeasonSnapshotRequest {
  season: bigint;
}
export interface QueryGetSeasonSnapshotRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonSnapshotRequest";
  value: Uint8Array;
}
/**
 * QueryGetSeasonSnapshotRequest defines the QueryGetSeasonSnapshotRequest message.
 * @name QueryGetSeasonSnapshotRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonSnapshotRequest
 */
export interface QueryGetSeasonSnapshotRequestAmino {
  season?: string;
}
export interface QueryGetSeasonSnapshotRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetSeasonSnapshotRequest";
  value: QueryGetSeasonSnapshotRequestAmino;
}
/**
 * QueryGetSeasonSnapshotResponse defines the QueryGetSeasonSnapshotResponse message.
 * @name QueryGetSeasonSnapshotResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonSnapshotResponse
 */
export interface QueryGetSeasonSnapshotResponse {
  seasonSnapshot: SeasonSnapshot;
}
export interface QueryGetSeasonSnapshotResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonSnapshotResponse";
  value: Uint8Array;
}
/**
 * QueryGetSeasonSnapshotResponse defines the QueryGetSeasonSnapshotResponse message.
 * @name QueryGetSeasonSnapshotResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonSnapshotResponse
 */
export interface QueryGetSeasonSnapshotResponseAmino {
  season_snapshot?: SeasonSnapshotAmino;
}
export interface QueryGetSeasonSnapshotResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetSeasonSnapshotResponse";
  value: QueryGetSeasonSnapshotResponseAmino;
}
/**
 * QueryAllSeasonSnapshotRequest defines the QueryAllSeasonSnapshotRequest message.
 * @name QueryAllSeasonSnapshotRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllSeasonSnapshotRequest
 */
export interface QueryAllSeasonSnapshotRequest {
  pagination?: PageRequest;
}
export interface QueryAllSeasonSnapshotRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllSeasonSnapshotRequest";
  value: Uint8Array;
}
/**
 * QueryAllSeasonSnapshotRequest defines the QueryAllSeasonSnapshotRequest message.
 * @name QueryAllSeasonSnapshotRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllSeasonSnapshotRequest
 */
export interface QueryAllSeasonSnapshotRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllSeasonSnapshotRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllSeasonSnapshotRequest";
  value: QueryAllSeasonSnapshotRequestAmino;
}
/**
 * QueryAllSeasonSnapshotResponse defines the QueryAllSeasonSnapshotResponse message.
 * @name QueryAllSeasonSnapshotResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllSeasonSnapshotResponse
 */
export interface QueryAllSeasonSnapshotResponse {
  seasonSnapshot: SeasonSnapshot[];
  pagination?: PageResponse;
}
export interface QueryAllSeasonSnapshotResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllSeasonSnapshotResponse";
  value: Uint8Array;
}
/**
 * QueryAllSeasonSnapshotResponse defines the QueryAllSeasonSnapshotResponse message.
 * @name QueryAllSeasonSnapshotResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllSeasonSnapshotResponse
 */
export interface QueryAllSeasonSnapshotResponseAmino {
  season_snapshot?: SeasonSnapshotAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllSeasonSnapshotResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllSeasonSnapshotResponse";
  value: QueryAllSeasonSnapshotResponseAmino;
}
/**
 * QueryGetMemberSeasonSnapshotRequest defines the QueryGetMemberSeasonSnapshotRequest message.
 * @name QueryGetMemberSeasonSnapshotRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberSeasonSnapshotRequest
 */
export interface QueryGetMemberSeasonSnapshotRequest {
  seasonAddress: string;
}
export interface QueryGetMemberSeasonSnapshotRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberSeasonSnapshotRequest";
  value: Uint8Array;
}
/**
 * QueryGetMemberSeasonSnapshotRequest defines the QueryGetMemberSeasonSnapshotRequest message.
 * @name QueryGetMemberSeasonSnapshotRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberSeasonSnapshotRequest
 */
export interface QueryGetMemberSeasonSnapshotRequestAmino {
  season_address?: string;
}
export interface QueryGetMemberSeasonSnapshotRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetMemberSeasonSnapshotRequest";
  value: QueryGetMemberSeasonSnapshotRequestAmino;
}
/**
 * QueryGetMemberSeasonSnapshotResponse defines the QueryGetMemberSeasonSnapshotResponse message.
 * @name QueryGetMemberSeasonSnapshotResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberSeasonSnapshotResponse
 */
export interface QueryGetMemberSeasonSnapshotResponse {
  memberSeasonSnapshot: MemberSeasonSnapshot;
}
export interface QueryGetMemberSeasonSnapshotResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberSeasonSnapshotResponse";
  value: Uint8Array;
}
/**
 * QueryGetMemberSeasonSnapshotResponse defines the QueryGetMemberSeasonSnapshotResponse message.
 * @name QueryGetMemberSeasonSnapshotResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberSeasonSnapshotResponse
 */
export interface QueryGetMemberSeasonSnapshotResponseAmino {
  member_season_snapshot?: MemberSeasonSnapshotAmino;
}
export interface QueryGetMemberSeasonSnapshotResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetMemberSeasonSnapshotResponse";
  value: QueryGetMemberSeasonSnapshotResponseAmino;
}
/**
 * QueryAllMemberSeasonSnapshotRequest defines the QueryAllMemberSeasonSnapshotRequest message.
 * @name QueryAllMemberSeasonSnapshotRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberSeasonSnapshotRequest
 */
export interface QueryAllMemberSeasonSnapshotRequest {
  pagination?: PageRequest;
}
export interface QueryAllMemberSeasonSnapshotRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberSeasonSnapshotRequest";
  value: Uint8Array;
}
/**
 * QueryAllMemberSeasonSnapshotRequest defines the QueryAllMemberSeasonSnapshotRequest message.
 * @name QueryAllMemberSeasonSnapshotRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberSeasonSnapshotRequest
 */
export interface QueryAllMemberSeasonSnapshotRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMemberSeasonSnapshotRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllMemberSeasonSnapshotRequest";
  value: QueryAllMemberSeasonSnapshotRequestAmino;
}
/**
 * QueryAllMemberSeasonSnapshotResponse defines the QueryAllMemberSeasonSnapshotResponse message.
 * @name QueryAllMemberSeasonSnapshotResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberSeasonSnapshotResponse
 */
export interface QueryAllMemberSeasonSnapshotResponse {
  memberSeasonSnapshot: MemberSeasonSnapshot[];
  pagination?: PageResponse;
}
export interface QueryAllMemberSeasonSnapshotResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberSeasonSnapshotResponse";
  value: Uint8Array;
}
/**
 * QueryAllMemberSeasonSnapshotResponse defines the QueryAllMemberSeasonSnapshotResponse message.
 * @name QueryAllMemberSeasonSnapshotResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberSeasonSnapshotResponse
 */
export interface QueryAllMemberSeasonSnapshotResponseAmino {
  member_season_snapshot?: MemberSeasonSnapshotAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMemberSeasonSnapshotResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllMemberSeasonSnapshotResponse";
  value: QueryAllMemberSeasonSnapshotResponseAmino;
}
/**
 * QueryGetMemberProfileRequest defines the QueryGetMemberProfileRequest message.
 * @name QueryGetMemberProfileRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberProfileRequest
 */
export interface QueryGetMemberProfileRequest {
  address: string;
}
export interface QueryGetMemberProfileRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberProfileRequest";
  value: Uint8Array;
}
/**
 * QueryGetMemberProfileRequest defines the QueryGetMemberProfileRequest message.
 * @name QueryGetMemberProfileRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberProfileRequest
 */
export interface QueryGetMemberProfileRequestAmino {
  address?: string;
}
export interface QueryGetMemberProfileRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetMemberProfileRequest";
  value: QueryGetMemberProfileRequestAmino;
}
/**
 * QueryGetMemberProfileResponse defines the QueryGetMemberProfileResponse message.
 * @name QueryGetMemberProfileResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberProfileResponse
 */
export interface QueryGetMemberProfileResponse {
  memberProfile: MemberProfile;
}
export interface QueryGetMemberProfileResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberProfileResponse";
  value: Uint8Array;
}
/**
 * QueryGetMemberProfileResponse defines the QueryGetMemberProfileResponse message.
 * @name QueryGetMemberProfileResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberProfileResponse
 */
export interface QueryGetMemberProfileResponseAmino {
  member_profile?: MemberProfileAmino;
}
export interface QueryGetMemberProfileResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetMemberProfileResponse";
  value: QueryGetMemberProfileResponseAmino;
}
/**
 * QueryAllMemberProfileRequest defines the QueryAllMemberProfileRequest message.
 * @name QueryAllMemberProfileRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberProfileRequest
 */
export interface QueryAllMemberProfileRequest {
  pagination?: PageRequest;
}
export interface QueryAllMemberProfileRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberProfileRequest";
  value: Uint8Array;
}
/**
 * QueryAllMemberProfileRequest defines the QueryAllMemberProfileRequest message.
 * @name QueryAllMemberProfileRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberProfileRequest
 */
export interface QueryAllMemberProfileRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMemberProfileRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllMemberProfileRequest";
  value: QueryAllMemberProfileRequestAmino;
}
/**
 * QueryAllMemberProfileResponse defines the QueryAllMemberProfileResponse message.
 * @name QueryAllMemberProfileResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberProfileResponse
 */
export interface QueryAllMemberProfileResponse {
  memberProfile: MemberProfile[];
  pagination?: PageResponse;
}
export interface QueryAllMemberProfileResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberProfileResponse";
  value: Uint8Array;
}
/**
 * QueryAllMemberProfileResponse defines the QueryAllMemberProfileResponse message.
 * @name QueryAllMemberProfileResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberProfileResponse
 */
export interface QueryAllMemberProfileResponseAmino {
  member_profile?: MemberProfileAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMemberProfileResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllMemberProfileResponse";
  value: QueryAllMemberProfileResponseAmino;
}
/**
 * QueryGetMemberRegistrationRequest defines the QueryGetMemberRegistrationRequest message.
 * @name QueryGetMemberRegistrationRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberRegistrationRequest
 */
export interface QueryGetMemberRegistrationRequest {
  member: string;
}
export interface QueryGetMemberRegistrationRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberRegistrationRequest";
  value: Uint8Array;
}
/**
 * QueryGetMemberRegistrationRequest defines the QueryGetMemberRegistrationRequest message.
 * @name QueryGetMemberRegistrationRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberRegistrationRequest
 */
export interface QueryGetMemberRegistrationRequestAmino {
  member?: string;
}
export interface QueryGetMemberRegistrationRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetMemberRegistrationRequest";
  value: QueryGetMemberRegistrationRequestAmino;
}
/**
 * QueryGetMemberRegistrationResponse defines the QueryGetMemberRegistrationResponse message.
 * @name QueryGetMemberRegistrationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberRegistrationResponse
 */
export interface QueryGetMemberRegistrationResponse {
  memberRegistration: MemberRegistration;
}
export interface QueryGetMemberRegistrationResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberRegistrationResponse";
  value: Uint8Array;
}
/**
 * QueryGetMemberRegistrationResponse defines the QueryGetMemberRegistrationResponse message.
 * @name QueryGetMemberRegistrationResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberRegistrationResponse
 */
export interface QueryGetMemberRegistrationResponseAmino {
  member_registration?: MemberRegistrationAmino;
}
export interface QueryGetMemberRegistrationResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetMemberRegistrationResponse";
  value: QueryGetMemberRegistrationResponseAmino;
}
/**
 * QueryAllMemberRegistrationRequest defines the QueryAllMemberRegistrationRequest message.
 * @name QueryAllMemberRegistrationRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberRegistrationRequest
 */
export interface QueryAllMemberRegistrationRequest {
  pagination?: PageRequest;
}
export interface QueryAllMemberRegistrationRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberRegistrationRequest";
  value: Uint8Array;
}
/**
 * QueryAllMemberRegistrationRequest defines the QueryAllMemberRegistrationRequest message.
 * @name QueryAllMemberRegistrationRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberRegistrationRequest
 */
export interface QueryAllMemberRegistrationRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMemberRegistrationRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllMemberRegistrationRequest";
  value: QueryAllMemberRegistrationRequestAmino;
}
/**
 * QueryAllMemberRegistrationResponse defines the QueryAllMemberRegistrationResponse message.
 * @name QueryAllMemberRegistrationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberRegistrationResponse
 */
export interface QueryAllMemberRegistrationResponse {
  memberRegistration: MemberRegistration[];
  pagination?: PageResponse;
}
export interface QueryAllMemberRegistrationResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberRegistrationResponse";
  value: Uint8Array;
}
/**
 * QueryAllMemberRegistrationResponse defines the QueryAllMemberRegistrationResponse message.
 * @name QueryAllMemberRegistrationResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberRegistrationResponse
 */
export interface QueryAllMemberRegistrationResponseAmino {
  member_registration?: MemberRegistrationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMemberRegistrationResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllMemberRegistrationResponse";
  value: QueryAllMemberRegistrationResponseAmino;
}
/**
 * QueryGetAchievementRequest defines the QueryGetAchievementRequest message.
 * @name QueryGetAchievementRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetAchievementRequest
 */
export interface QueryGetAchievementRequest {
  achievementId: string;
}
export interface QueryGetAchievementRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetAchievementRequest";
  value: Uint8Array;
}
/**
 * QueryGetAchievementRequest defines the QueryGetAchievementRequest message.
 * @name QueryGetAchievementRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetAchievementRequest
 */
export interface QueryGetAchievementRequestAmino {
  achievement_id?: string;
}
export interface QueryGetAchievementRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetAchievementRequest";
  value: QueryGetAchievementRequestAmino;
}
/**
 * QueryGetAchievementResponse defines the QueryGetAchievementResponse message.
 * @name QueryGetAchievementResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetAchievementResponse
 */
export interface QueryGetAchievementResponse {
  achievement: Achievement;
}
export interface QueryGetAchievementResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetAchievementResponse";
  value: Uint8Array;
}
/**
 * QueryGetAchievementResponse defines the QueryGetAchievementResponse message.
 * @name QueryGetAchievementResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetAchievementResponse
 */
export interface QueryGetAchievementResponseAmino {
  achievement?: AchievementAmino;
}
export interface QueryGetAchievementResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetAchievementResponse";
  value: QueryGetAchievementResponseAmino;
}
/**
 * QueryAllAchievementRequest defines the QueryAllAchievementRequest message.
 * @name QueryAllAchievementRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllAchievementRequest
 */
export interface QueryAllAchievementRequest {
  pagination?: PageRequest;
}
export interface QueryAllAchievementRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllAchievementRequest";
  value: Uint8Array;
}
/**
 * QueryAllAchievementRequest defines the QueryAllAchievementRequest message.
 * @name QueryAllAchievementRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllAchievementRequest
 */
export interface QueryAllAchievementRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllAchievementRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllAchievementRequest";
  value: QueryAllAchievementRequestAmino;
}
/**
 * QueryAllAchievementResponse defines the QueryAllAchievementResponse message.
 * @name QueryAllAchievementResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllAchievementResponse
 */
export interface QueryAllAchievementResponse {
  achievement: Achievement[];
  pagination?: PageResponse;
}
export interface QueryAllAchievementResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllAchievementResponse";
  value: Uint8Array;
}
/**
 * QueryAllAchievementResponse defines the QueryAllAchievementResponse message.
 * @name QueryAllAchievementResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllAchievementResponse
 */
export interface QueryAllAchievementResponseAmino {
  achievement?: AchievementAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllAchievementResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllAchievementResponse";
  value: QueryAllAchievementResponseAmino;
}
/**
 * QueryGetTitleRequest defines the QueryGetTitleRequest message.
 * @name QueryGetTitleRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetTitleRequest
 */
export interface QueryGetTitleRequest {
  titleId: string;
}
export interface QueryGetTitleRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetTitleRequest";
  value: Uint8Array;
}
/**
 * QueryGetTitleRequest defines the QueryGetTitleRequest message.
 * @name QueryGetTitleRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetTitleRequest
 */
export interface QueryGetTitleRequestAmino {
  title_id?: string;
}
export interface QueryGetTitleRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetTitleRequest";
  value: QueryGetTitleRequestAmino;
}
/**
 * QueryGetTitleResponse defines the QueryGetTitleResponse message.
 * @name QueryGetTitleResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetTitleResponse
 */
export interface QueryGetTitleResponse {
  title: Title;
}
export interface QueryGetTitleResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetTitleResponse";
  value: Uint8Array;
}
/**
 * QueryGetTitleResponse defines the QueryGetTitleResponse message.
 * @name QueryGetTitleResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetTitleResponse
 */
export interface QueryGetTitleResponseAmino {
  title?: TitleAmino;
}
export interface QueryGetTitleResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetTitleResponse";
  value: QueryGetTitleResponseAmino;
}
/**
 * QueryAllTitleRequest defines the QueryAllTitleRequest message.
 * @name QueryAllTitleRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllTitleRequest
 */
export interface QueryAllTitleRequest {
  pagination?: PageRequest;
}
export interface QueryAllTitleRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllTitleRequest";
  value: Uint8Array;
}
/**
 * QueryAllTitleRequest defines the QueryAllTitleRequest message.
 * @name QueryAllTitleRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllTitleRequest
 */
export interface QueryAllTitleRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllTitleRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllTitleRequest";
  value: QueryAllTitleRequestAmino;
}
/**
 * QueryAllTitleResponse defines the QueryAllTitleResponse message.
 * @name QueryAllTitleResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllTitleResponse
 */
export interface QueryAllTitleResponse {
  title: Title[];
  pagination?: PageResponse;
}
export interface QueryAllTitleResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllTitleResponse";
  value: Uint8Array;
}
/**
 * QueryAllTitleResponse defines the QueryAllTitleResponse message.
 * @name QueryAllTitleResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllTitleResponse
 */
export interface QueryAllTitleResponseAmino {
  title?: TitleAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllTitleResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllTitleResponse";
  value: QueryAllTitleResponseAmino;
}
/**
 * QueryGetSeasonTitleEligibilityRequest defines the QueryGetSeasonTitleEligibilityRequest message.
 * @name QueryGetSeasonTitleEligibilityRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonTitleEligibilityRequest
 */
export interface QueryGetSeasonTitleEligibilityRequest {
  titleSeason: bigint;
}
export interface QueryGetSeasonTitleEligibilityRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonTitleEligibilityRequest";
  value: Uint8Array;
}
/**
 * QueryGetSeasonTitleEligibilityRequest defines the QueryGetSeasonTitleEligibilityRequest message.
 * @name QueryGetSeasonTitleEligibilityRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonTitleEligibilityRequest
 */
export interface QueryGetSeasonTitleEligibilityRequestAmino {
  title_season?: string;
}
export interface QueryGetSeasonTitleEligibilityRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetSeasonTitleEligibilityRequest";
  value: QueryGetSeasonTitleEligibilityRequestAmino;
}
/**
 * QueryGetSeasonTitleEligibilityResponse defines the QueryGetSeasonTitleEligibilityResponse message.
 * @name QueryGetSeasonTitleEligibilityResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonTitleEligibilityResponse
 */
export interface QueryGetSeasonTitleEligibilityResponse {
  seasonTitleEligibility: SeasonTitleEligibility;
}
export interface QueryGetSeasonTitleEligibilityResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonTitleEligibilityResponse";
  value: Uint8Array;
}
/**
 * QueryGetSeasonTitleEligibilityResponse defines the QueryGetSeasonTitleEligibilityResponse message.
 * @name QueryGetSeasonTitleEligibilityResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonTitleEligibilityResponse
 */
export interface QueryGetSeasonTitleEligibilityResponseAmino {
  season_title_eligibility?: SeasonTitleEligibilityAmino;
}
export interface QueryGetSeasonTitleEligibilityResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetSeasonTitleEligibilityResponse";
  value: QueryGetSeasonTitleEligibilityResponseAmino;
}
/**
 * QueryAllSeasonTitleEligibilityRequest defines the QueryAllSeasonTitleEligibilityRequest message.
 * @name QueryAllSeasonTitleEligibilityRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllSeasonTitleEligibilityRequest
 */
export interface QueryAllSeasonTitleEligibilityRequest {
  pagination?: PageRequest;
}
export interface QueryAllSeasonTitleEligibilityRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllSeasonTitleEligibilityRequest";
  value: Uint8Array;
}
/**
 * QueryAllSeasonTitleEligibilityRequest defines the QueryAllSeasonTitleEligibilityRequest message.
 * @name QueryAllSeasonTitleEligibilityRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllSeasonTitleEligibilityRequest
 */
export interface QueryAllSeasonTitleEligibilityRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllSeasonTitleEligibilityRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllSeasonTitleEligibilityRequest";
  value: QueryAllSeasonTitleEligibilityRequestAmino;
}
/**
 * QueryAllSeasonTitleEligibilityResponse defines the QueryAllSeasonTitleEligibilityResponse message.
 * @name QueryAllSeasonTitleEligibilityResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllSeasonTitleEligibilityResponse
 */
export interface QueryAllSeasonTitleEligibilityResponse {
  seasonTitleEligibility: SeasonTitleEligibility[];
  pagination?: PageResponse;
}
export interface QueryAllSeasonTitleEligibilityResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllSeasonTitleEligibilityResponse";
  value: Uint8Array;
}
/**
 * QueryAllSeasonTitleEligibilityResponse defines the QueryAllSeasonTitleEligibilityResponse message.
 * @name QueryAllSeasonTitleEligibilityResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllSeasonTitleEligibilityResponse
 */
export interface QueryAllSeasonTitleEligibilityResponseAmino {
  season_title_eligibility?: SeasonTitleEligibilityAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllSeasonTitleEligibilityResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllSeasonTitleEligibilityResponse";
  value: QueryAllSeasonTitleEligibilityResponseAmino;
}
/**
 * QueryGetGuildRequest defines the QueryGetGuildRequest message.
 * @name QueryGetGuildRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildRequest
 */
export interface QueryGetGuildRequest {
  id: bigint;
}
export interface QueryGetGuildRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetGuildRequest";
  value: Uint8Array;
}
/**
 * QueryGetGuildRequest defines the QueryGetGuildRequest message.
 * @name QueryGetGuildRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildRequest
 */
export interface QueryGetGuildRequestAmino {
  id?: string;
}
export interface QueryGetGuildRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetGuildRequest";
  value: QueryGetGuildRequestAmino;
}
/**
 * QueryGetGuildResponse defines the QueryGetGuildResponse message.
 * @name QueryGetGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildResponse
 */
export interface QueryGetGuildResponse {
  guild: Guild;
}
export interface QueryGetGuildResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetGuildResponse";
  value: Uint8Array;
}
/**
 * QueryGetGuildResponse defines the QueryGetGuildResponse message.
 * @name QueryGetGuildResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildResponse
 */
export interface QueryGetGuildResponseAmino {
  guild?: GuildAmino;
}
export interface QueryGetGuildResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetGuildResponse";
  value: QueryGetGuildResponseAmino;
}
/**
 * QueryAllGuildRequest defines the QueryAllGuildRequest message.
 * @name QueryAllGuildRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildRequest
 */
export interface QueryAllGuildRequest {
  pagination?: PageRequest;
}
export interface QueryAllGuildRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllGuildRequest";
  value: Uint8Array;
}
/**
 * QueryAllGuildRequest defines the QueryAllGuildRequest message.
 * @name QueryAllGuildRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildRequest
 */
export interface QueryAllGuildRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllGuildRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllGuildRequest";
  value: QueryAllGuildRequestAmino;
}
/**
 * QueryAllGuildResponse defines the QueryAllGuildResponse message.
 * @name QueryAllGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildResponse
 */
export interface QueryAllGuildResponse {
  guild: Guild[];
  pagination?: PageResponse;
}
export interface QueryAllGuildResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllGuildResponse";
  value: Uint8Array;
}
/**
 * QueryAllGuildResponse defines the QueryAllGuildResponse message.
 * @name QueryAllGuildResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildResponse
 */
export interface QueryAllGuildResponseAmino {
  guild?: GuildAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllGuildResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllGuildResponse";
  value: QueryAllGuildResponseAmino;
}
/**
 * QueryGetGuildMembershipRequest defines the QueryGetGuildMembershipRequest message.
 * @name QueryGetGuildMembershipRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildMembershipRequest
 */
export interface QueryGetGuildMembershipRequest {
  member: string;
}
export interface QueryGetGuildMembershipRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetGuildMembershipRequest";
  value: Uint8Array;
}
/**
 * QueryGetGuildMembershipRequest defines the QueryGetGuildMembershipRequest message.
 * @name QueryGetGuildMembershipRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildMembershipRequest
 */
export interface QueryGetGuildMembershipRequestAmino {
  member?: string;
}
export interface QueryGetGuildMembershipRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetGuildMembershipRequest";
  value: QueryGetGuildMembershipRequestAmino;
}
/**
 * QueryGetGuildMembershipResponse defines the QueryGetGuildMembershipResponse message.
 * @name QueryGetGuildMembershipResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildMembershipResponse
 */
export interface QueryGetGuildMembershipResponse {
  guildMembership: GuildMembership;
}
export interface QueryGetGuildMembershipResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetGuildMembershipResponse";
  value: Uint8Array;
}
/**
 * QueryGetGuildMembershipResponse defines the QueryGetGuildMembershipResponse message.
 * @name QueryGetGuildMembershipResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildMembershipResponse
 */
export interface QueryGetGuildMembershipResponseAmino {
  guild_membership?: GuildMembershipAmino;
}
export interface QueryGetGuildMembershipResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetGuildMembershipResponse";
  value: QueryGetGuildMembershipResponseAmino;
}
/**
 * QueryAllGuildMembershipRequest defines the QueryAllGuildMembershipRequest message.
 * @name QueryAllGuildMembershipRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildMembershipRequest
 */
export interface QueryAllGuildMembershipRequest {
  pagination?: PageRequest;
}
export interface QueryAllGuildMembershipRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllGuildMembershipRequest";
  value: Uint8Array;
}
/**
 * QueryAllGuildMembershipRequest defines the QueryAllGuildMembershipRequest message.
 * @name QueryAllGuildMembershipRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildMembershipRequest
 */
export interface QueryAllGuildMembershipRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllGuildMembershipRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllGuildMembershipRequest";
  value: QueryAllGuildMembershipRequestAmino;
}
/**
 * QueryAllGuildMembershipResponse defines the QueryAllGuildMembershipResponse message.
 * @name QueryAllGuildMembershipResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildMembershipResponse
 */
export interface QueryAllGuildMembershipResponse {
  guildMembership: GuildMembership[];
  pagination?: PageResponse;
}
export interface QueryAllGuildMembershipResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllGuildMembershipResponse";
  value: Uint8Array;
}
/**
 * QueryAllGuildMembershipResponse defines the QueryAllGuildMembershipResponse message.
 * @name QueryAllGuildMembershipResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildMembershipResponse
 */
export interface QueryAllGuildMembershipResponseAmino {
  guild_membership?: GuildMembershipAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllGuildMembershipResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllGuildMembershipResponse";
  value: QueryAllGuildMembershipResponseAmino;
}
/**
 * QueryGetGuildInviteRequest defines the QueryGetGuildInviteRequest message.
 * @name QueryGetGuildInviteRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildInviteRequest
 */
export interface QueryGetGuildInviteRequest {
  guildInvitee: string;
}
export interface QueryGetGuildInviteRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetGuildInviteRequest";
  value: Uint8Array;
}
/**
 * QueryGetGuildInviteRequest defines the QueryGetGuildInviteRequest message.
 * @name QueryGetGuildInviteRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildInviteRequest
 */
export interface QueryGetGuildInviteRequestAmino {
  guild_invitee?: string;
}
export interface QueryGetGuildInviteRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetGuildInviteRequest";
  value: QueryGetGuildInviteRequestAmino;
}
/**
 * QueryGetGuildInviteResponse defines the QueryGetGuildInviteResponse message.
 * @name QueryGetGuildInviteResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildInviteResponse
 */
export interface QueryGetGuildInviteResponse {
  guildInvite: GuildInvite;
}
export interface QueryGetGuildInviteResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetGuildInviteResponse";
  value: Uint8Array;
}
/**
 * QueryGetGuildInviteResponse defines the QueryGetGuildInviteResponse message.
 * @name QueryGetGuildInviteResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildInviteResponse
 */
export interface QueryGetGuildInviteResponseAmino {
  guild_invite?: GuildInviteAmino;
}
export interface QueryGetGuildInviteResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetGuildInviteResponse";
  value: QueryGetGuildInviteResponseAmino;
}
/**
 * QueryAllGuildInviteRequest defines the QueryAllGuildInviteRequest message.
 * @name QueryAllGuildInviteRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildInviteRequest
 */
export interface QueryAllGuildInviteRequest {
  pagination?: PageRequest;
}
export interface QueryAllGuildInviteRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllGuildInviteRequest";
  value: Uint8Array;
}
/**
 * QueryAllGuildInviteRequest defines the QueryAllGuildInviteRequest message.
 * @name QueryAllGuildInviteRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildInviteRequest
 */
export interface QueryAllGuildInviteRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllGuildInviteRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllGuildInviteRequest";
  value: QueryAllGuildInviteRequestAmino;
}
/**
 * QueryAllGuildInviteResponse defines the QueryAllGuildInviteResponse message.
 * @name QueryAllGuildInviteResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildInviteResponse
 */
export interface QueryAllGuildInviteResponse {
  guildInvite: GuildInvite[];
  pagination?: PageResponse;
}
export interface QueryAllGuildInviteResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllGuildInviteResponse";
  value: Uint8Array;
}
/**
 * QueryAllGuildInviteResponse defines the QueryAllGuildInviteResponse message.
 * @name QueryAllGuildInviteResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildInviteResponse
 */
export interface QueryAllGuildInviteResponseAmino {
  guild_invite?: GuildInviteAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllGuildInviteResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllGuildInviteResponse";
  value: QueryAllGuildInviteResponseAmino;
}
/**
 * QueryGetQuestRequest defines the QueryGetQuestRequest message.
 * @name QueryGetQuestRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetQuestRequest
 */
export interface QueryGetQuestRequest {
  questId: string;
}
export interface QueryGetQuestRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetQuestRequest";
  value: Uint8Array;
}
/**
 * QueryGetQuestRequest defines the QueryGetQuestRequest message.
 * @name QueryGetQuestRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetQuestRequest
 */
export interface QueryGetQuestRequestAmino {
  quest_id?: string;
}
export interface QueryGetQuestRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetQuestRequest";
  value: QueryGetQuestRequestAmino;
}
/**
 * QueryGetQuestResponse defines the QueryGetQuestResponse message.
 * @name QueryGetQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetQuestResponse
 */
export interface QueryGetQuestResponse {
  quest: Quest;
}
export interface QueryGetQuestResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetQuestResponse";
  value: Uint8Array;
}
/**
 * QueryGetQuestResponse defines the QueryGetQuestResponse message.
 * @name QueryGetQuestResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetQuestResponse
 */
export interface QueryGetQuestResponseAmino {
  quest?: QuestAmino;
}
export interface QueryGetQuestResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetQuestResponse";
  value: QueryGetQuestResponseAmino;
}
/**
 * QueryAllQuestRequest defines the QueryAllQuestRequest message.
 * @name QueryAllQuestRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllQuestRequest
 */
export interface QueryAllQuestRequest {
  pagination?: PageRequest;
}
export interface QueryAllQuestRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllQuestRequest";
  value: Uint8Array;
}
/**
 * QueryAllQuestRequest defines the QueryAllQuestRequest message.
 * @name QueryAllQuestRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllQuestRequest
 */
export interface QueryAllQuestRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllQuestRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllQuestRequest";
  value: QueryAllQuestRequestAmino;
}
/**
 * QueryAllQuestResponse defines the QueryAllQuestResponse message.
 * @name QueryAllQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllQuestResponse
 */
export interface QueryAllQuestResponse {
  quest: Quest[];
  pagination?: PageResponse;
}
export interface QueryAllQuestResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllQuestResponse";
  value: Uint8Array;
}
/**
 * QueryAllQuestResponse defines the QueryAllQuestResponse message.
 * @name QueryAllQuestResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllQuestResponse
 */
export interface QueryAllQuestResponseAmino {
  quest?: QuestAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllQuestResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllQuestResponse";
  value: QueryAllQuestResponseAmino;
}
/**
 * QueryGetMemberQuestProgressRequest defines the QueryGetMemberQuestProgressRequest message.
 * @name QueryGetMemberQuestProgressRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberQuestProgressRequest
 */
export interface QueryGetMemberQuestProgressRequest {
  memberQuest: string;
}
export interface QueryGetMemberQuestProgressRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberQuestProgressRequest";
  value: Uint8Array;
}
/**
 * QueryGetMemberQuestProgressRequest defines the QueryGetMemberQuestProgressRequest message.
 * @name QueryGetMemberQuestProgressRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberQuestProgressRequest
 */
export interface QueryGetMemberQuestProgressRequestAmino {
  member_quest?: string;
}
export interface QueryGetMemberQuestProgressRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetMemberQuestProgressRequest";
  value: QueryGetMemberQuestProgressRequestAmino;
}
/**
 * QueryGetMemberQuestProgressResponse defines the QueryGetMemberQuestProgressResponse message.
 * @name QueryGetMemberQuestProgressResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberQuestProgressResponse
 */
export interface QueryGetMemberQuestProgressResponse {
  memberQuestProgress: MemberQuestProgress;
}
export interface QueryGetMemberQuestProgressResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberQuestProgressResponse";
  value: Uint8Array;
}
/**
 * QueryGetMemberQuestProgressResponse defines the QueryGetMemberQuestProgressResponse message.
 * @name QueryGetMemberQuestProgressResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberQuestProgressResponse
 */
export interface QueryGetMemberQuestProgressResponseAmino {
  member_quest_progress?: MemberQuestProgressAmino;
}
export interface QueryGetMemberQuestProgressResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetMemberQuestProgressResponse";
  value: QueryGetMemberQuestProgressResponseAmino;
}
/**
 * QueryAllMemberQuestProgressRequest defines the QueryAllMemberQuestProgressRequest message.
 * @name QueryAllMemberQuestProgressRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberQuestProgressRequest
 */
export interface QueryAllMemberQuestProgressRequest {
  pagination?: PageRequest;
}
export interface QueryAllMemberQuestProgressRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberQuestProgressRequest";
  value: Uint8Array;
}
/**
 * QueryAllMemberQuestProgressRequest defines the QueryAllMemberQuestProgressRequest message.
 * @name QueryAllMemberQuestProgressRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberQuestProgressRequest
 */
export interface QueryAllMemberQuestProgressRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMemberQuestProgressRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllMemberQuestProgressRequest";
  value: QueryAllMemberQuestProgressRequestAmino;
}
/**
 * QueryAllMemberQuestProgressResponse defines the QueryAllMemberQuestProgressResponse message.
 * @name QueryAllMemberQuestProgressResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberQuestProgressResponse
 */
export interface QueryAllMemberQuestProgressResponse {
  memberQuestProgress: MemberQuestProgress[];
  pagination?: PageResponse;
}
export interface QueryAllMemberQuestProgressResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberQuestProgressResponse";
  value: Uint8Array;
}
/**
 * QueryAllMemberQuestProgressResponse defines the QueryAllMemberQuestProgressResponse message.
 * @name QueryAllMemberQuestProgressResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberQuestProgressResponse
 */
export interface QueryAllMemberQuestProgressResponseAmino {
  member_quest_progress?: MemberQuestProgressAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMemberQuestProgressResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllMemberQuestProgressResponse";
  value: QueryAllMemberQuestProgressResponseAmino;
}
/**
 * QueryGetEpochXpTrackerRequest defines the QueryGetEpochXpTrackerRequest message.
 * @name QueryGetEpochXpTrackerRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetEpochXpTrackerRequest
 */
export interface QueryGetEpochXpTrackerRequest {
  memberEpoch: string;
}
export interface QueryGetEpochXpTrackerRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetEpochXpTrackerRequest";
  value: Uint8Array;
}
/**
 * QueryGetEpochXpTrackerRequest defines the QueryGetEpochXpTrackerRequest message.
 * @name QueryGetEpochXpTrackerRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetEpochXpTrackerRequest
 */
export interface QueryGetEpochXpTrackerRequestAmino {
  member_epoch?: string;
}
export interface QueryGetEpochXpTrackerRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetEpochXpTrackerRequest";
  value: QueryGetEpochXpTrackerRequestAmino;
}
/**
 * QueryGetEpochXpTrackerResponse defines the QueryGetEpochXpTrackerResponse message.
 * @name QueryGetEpochXpTrackerResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetEpochXpTrackerResponse
 */
export interface QueryGetEpochXpTrackerResponse {
  epochXpTracker: EpochXpTracker;
}
export interface QueryGetEpochXpTrackerResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetEpochXpTrackerResponse";
  value: Uint8Array;
}
/**
 * QueryGetEpochXpTrackerResponse defines the QueryGetEpochXpTrackerResponse message.
 * @name QueryGetEpochXpTrackerResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetEpochXpTrackerResponse
 */
export interface QueryGetEpochXpTrackerResponseAmino {
  epoch_xp_tracker?: EpochXpTrackerAmino;
}
export interface QueryGetEpochXpTrackerResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetEpochXpTrackerResponse";
  value: QueryGetEpochXpTrackerResponseAmino;
}
/**
 * QueryAllEpochXpTrackerRequest defines the QueryAllEpochXpTrackerRequest message.
 * @name QueryAllEpochXpTrackerRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllEpochXpTrackerRequest
 */
export interface QueryAllEpochXpTrackerRequest {
  pagination?: PageRequest;
}
export interface QueryAllEpochXpTrackerRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllEpochXpTrackerRequest";
  value: Uint8Array;
}
/**
 * QueryAllEpochXpTrackerRequest defines the QueryAllEpochXpTrackerRequest message.
 * @name QueryAllEpochXpTrackerRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllEpochXpTrackerRequest
 */
export interface QueryAllEpochXpTrackerRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllEpochXpTrackerRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllEpochXpTrackerRequest";
  value: QueryAllEpochXpTrackerRequestAmino;
}
/**
 * QueryAllEpochXpTrackerResponse defines the QueryAllEpochXpTrackerResponse message.
 * @name QueryAllEpochXpTrackerResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllEpochXpTrackerResponse
 */
export interface QueryAllEpochXpTrackerResponse {
  epochXpTracker: EpochXpTracker[];
  pagination?: PageResponse;
}
export interface QueryAllEpochXpTrackerResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllEpochXpTrackerResponse";
  value: Uint8Array;
}
/**
 * QueryAllEpochXpTrackerResponse defines the QueryAllEpochXpTrackerResponse message.
 * @name QueryAllEpochXpTrackerResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllEpochXpTrackerResponse
 */
export interface QueryAllEpochXpTrackerResponseAmino {
  epoch_xp_tracker?: EpochXpTrackerAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllEpochXpTrackerResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllEpochXpTrackerResponse";
  value: QueryAllEpochXpTrackerResponseAmino;
}
/**
 * QueryGetVoteXpRecordRequest defines the QueryGetVoteXpRecordRequest message.
 * @name QueryGetVoteXpRecordRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetVoteXpRecordRequest
 */
export interface QueryGetVoteXpRecordRequest {
  seasonMemberProposal: string;
}
export interface QueryGetVoteXpRecordRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetVoteXpRecordRequest";
  value: Uint8Array;
}
/**
 * QueryGetVoteXpRecordRequest defines the QueryGetVoteXpRecordRequest message.
 * @name QueryGetVoteXpRecordRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetVoteXpRecordRequest
 */
export interface QueryGetVoteXpRecordRequestAmino {
  season_member_proposal?: string;
}
export interface QueryGetVoteXpRecordRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetVoteXpRecordRequest";
  value: QueryGetVoteXpRecordRequestAmino;
}
/**
 * QueryGetVoteXpRecordResponse defines the QueryGetVoteXpRecordResponse message.
 * @name QueryGetVoteXpRecordResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetVoteXpRecordResponse
 */
export interface QueryGetVoteXpRecordResponse {
  voteXpRecord: VoteXpRecord;
}
export interface QueryGetVoteXpRecordResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetVoteXpRecordResponse";
  value: Uint8Array;
}
/**
 * QueryGetVoteXpRecordResponse defines the QueryGetVoteXpRecordResponse message.
 * @name QueryGetVoteXpRecordResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetVoteXpRecordResponse
 */
export interface QueryGetVoteXpRecordResponseAmino {
  vote_xp_record?: VoteXpRecordAmino;
}
export interface QueryGetVoteXpRecordResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetVoteXpRecordResponse";
  value: QueryGetVoteXpRecordResponseAmino;
}
/**
 * QueryAllVoteXpRecordRequest defines the QueryAllVoteXpRecordRequest message.
 * @name QueryAllVoteXpRecordRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllVoteXpRecordRequest
 */
export interface QueryAllVoteXpRecordRequest {
  pagination?: PageRequest;
}
export interface QueryAllVoteXpRecordRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllVoteXpRecordRequest";
  value: Uint8Array;
}
/**
 * QueryAllVoteXpRecordRequest defines the QueryAllVoteXpRecordRequest message.
 * @name QueryAllVoteXpRecordRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllVoteXpRecordRequest
 */
export interface QueryAllVoteXpRecordRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllVoteXpRecordRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllVoteXpRecordRequest";
  value: QueryAllVoteXpRecordRequestAmino;
}
/**
 * QueryAllVoteXpRecordResponse defines the QueryAllVoteXpRecordResponse message.
 * @name QueryAllVoteXpRecordResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllVoteXpRecordResponse
 */
export interface QueryAllVoteXpRecordResponse {
  voteXpRecord: VoteXpRecord[];
  pagination?: PageResponse;
}
export interface QueryAllVoteXpRecordResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllVoteXpRecordResponse";
  value: Uint8Array;
}
/**
 * QueryAllVoteXpRecordResponse defines the QueryAllVoteXpRecordResponse message.
 * @name QueryAllVoteXpRecordResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllVoteXpRecordResponse
 */
export interface QueryAllVoteXpRecordResponseAmino {
  vote_xp_record?: VoteXpRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllVoteXpRecordResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllVoteXpRecordResponse";
  value: QueryAllVoteXpRecordResponseAmino;
}
/**
 * QueryGetForumXpCooldownRequest defines the QueryGetForumXpCooldownRequest message.
 * @name QueryGetForumXpCooldownRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetForumXpCooldownRequest
 */
export interface QueryGetForumXpCooldownRequest {
  beneficiaryActor: string;
}
export interface QueryGetForumXpCooldownRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetForumXpCooldownRequest";
  value: Uint8Array;
}
/**
 * QueryGetForumXpCooldownRequest defines the QueryGetForumXpCooldownRequest message.
 * @name QueryGetForumXpCooldownRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetForumXpCooldownRequest
 */
export interface QueryGetForumXpCooldownRequestAmino {
  beneficiary_actor?: string;
}
export interface QueryGetForumXpCooldownRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetForumXpCooldownRequest";
  value: QueryGetForumXpCooldownRequestAmino;
}
/**
 * QueryGetForumXpCooldownResponse defines the QueryGetForumXpCooldownResponse message.
 * @name QueryGetForumXpCooldownResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetForumXpCooldownResponse
 */
export interface QueryGetForumXpCooldownResponse {
  forumXpCooldown: ForumXpCooldown;
}
export interface QueryGetForumXpCooldownResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetForumXpCooldownResponse";
  value: Uint8Array;
}
/**
 * QueryGetForumXpCooldownResponse defines the QueryGetForumXpCooldownResponse message.
 * @name QueryGetForumXpCooldownResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetForumXpCooldownResponse
 */
export interface QueryGetForumXpCooldownResponseAmino {
  forum_xp_cooldown?: ForumXpCooldownAmino;
}
export interface QueryGetForumXpCooldownResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetForumXpCooldownResponse";
  value: QueryGetForumXpCooldownResponseAmino;
}
/**
 * QueryAllForumXpCooldownRequest defines the QueryAllForumXpCooldownRequest message.
 * @name QueryAllForumXpCooldownRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllForumXpCooldownRequest
 */
export interface QueryAllForumXpCooldownRequest {
  pagination?: PageRequest;
}
export interface QueryAllForumXpCooldownRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllForumXpCooldownRequest";
  value: Uint8Array;
}
/**
 * QueryAllForumXpCooldownRequest defines the QueryAllForumXpCooldownRequest message.
 * @name QueryAllForumXpCooldownRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllForumXpCooldownRequest
 */
export interface QueryAllForumXpCooldownRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllForumXpCooldownRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllForumXpCooldownRequest";
  value: QueryAllForumXpCooldownRequestAmino;
}
/**
 * QueryAllForumXpCooldownResponse defines the QueryAllForumXpCooldownResponse message.
 * @name QueryAllForumXpCooldownResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllForumXpCooldownResponse
 */
export interface QueryAllForumXpCooldownResponse {
  forumXpCooldown: ForumXpCooldown[];
  pagination?: PageResponse;
}
export interface QueryAllForumXpCooldownResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllForumXpCooldownResponse";
  value: Uint8Array;
}
/**
 * QueryAllForumXpCooldownResponse defines the QueryAllForumXpCooldownResponse message.
 * @name QueryAllForumXpCooldownResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllForumXpCooldownResponse
 */
export interface QueryAllForumXpCooldownResponseAmino {
  forum_xp_cooldown?: ForumXpCooldownAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllForumXpCooldownResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllForumXpCooldownResponse";
  value: QueryAllForumXpCooldownResponseAmino;
}
/**
 * QueryGetDisplayNameModerationRequest defines the QueryGetDisplayNameModerationRequest message.
 * @name QueryGetDisplayNameModerationRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameModerationRequest
 */
export interface QueryGetDisplayNameModerationRequest {
  member: string;
}
export interface QueryGetDisplayNameModerationRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameModerationRequest";
  value: Uint8Array;
}
/**
 * QueryGetDisplayNameModerationRequest defines the QueryGetDisplayNameModerationRequest message.
 * @name QueryGetDisplayNameModerationRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameModerationRequest
 */
export interface QueryGetDisplayNameModerationRequestAmino {
  member?: string;
}
export interface QueryGetDisplayNameModerationRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetDisplayNameModerationRequest";
  value: QueryGetDisplayNameModerationRequestAmino;
}
/**
 * QueryGetDisplayNameModerationResponse defines the QueryGetDisplayNameModerationResponse message.
 * @name QueryGetDisplayNameModerationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameModerationResponse
 */
export interface QueryGetDisplayNameModerationResponse {
  displayNameModeration: DisplayNameModeration;
}
export interface QueryGetDisplayNameModerationResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameModerationResponse";
  value: Uint8Array;
}
/**
 * QueryGetDisplayNameModerationResponse defines the QueryGetDisplayNameModerationResponse message.
 * @name QueryGetDisplayNameModerationResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameModerationResponse
 */
export interface QueryGetDisplayNameModerationResponseAmino {
  display_name_moderation?: DisplayNameModerationAmino;
}
export interface QueryGetDisplayNameModerationResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetDisplayNameModerationResponse";
  value: QueryGetDisplayNameModerationResponseAmino;
}
/**
 * QueryAllDisplayNameModerationRequest defines the QueryAllDisplayNameModerationRequest message.
 * @name QueryAllDisplayNameModerationRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameModerationRequest
 */
export interface QueryAllDisplayNameModerationRequest {
  pagination?: PageRequest;
}
export interface QueryAllDisplayNameModerationRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameModerationRequest";
  value: Uint8Array;
}
/**
 * QueryAllDisplayNameModerationRequest defines the QueryAllDisplayNameModerationRequest message.
 * @name QueryAllDisplayNameModerationRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameModerationRequest
 */
export interface QueryAllDisplayNameModerationRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDisplayNameModerationRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllDisplayNameModerationRequest";
  value: QueryAllDisplayNameModerationRequestAmino;
}
/**
 * QueryAllDisplayNameModerationResponse defines the QueryAllDisplayNameModerationResponse message.
 * @name QueryAllDisplayNameModerationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameModerationResponse
 */
export interface QueryAllDisplayNameModerationResponse {
  displayNameModeration: DisplayNameModeration[];
  pagination?: PageResponse;
}
export interface QueryAllDisplayNameModerationResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameModerationResponse";
  value: Uint8Array;
}
/**
 * QueryAllDisplayNameModerationResponse defines the QueryAllDisplayNameModerationResponse message.
 * @name QueryAllDisplayNameModerationResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameModerationResponse
 */
export interface QueryAllDisplayNameModerationResponseAmino {
  display_name_moderation?: DisplayNameModerationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDisplayNameModerationResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllDisplayNameModerationResponse";
  value: QueryAllDisplayNameModerationResponseAmino;
}
/**
 * QueryGetDisplayNameReportStakeRequest defines the QueryGetDisplayNameReportStakeRequest message.
 * @name QueryGetDisplayNameReportStakeRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameReportStakeRequest
 */
export interface QueryGetDisplayNameReportStakeRequest {
  challengeId: string;
}
export interface QueryGetDisplayNameReportStakeRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameReportStakeRequest";
  value: Uint8Array;
}
/**
 * QueryGetDisplayNameReportStakeRequest defines the QueryGetDisplayNameReportStakeRequest message.
 * @name QueryGetDisplayNameReportStakeRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameReportStakeRequest
 */
export interface QueryGetDisplayNameReportStakeRequestAmino {
  challenge_id?: string;
}
export interface QueryGetDisplayNameReportStakeRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetDisplayNameReportStakeRequest";
  value: QueryGetDisplayNameReportStakeRequestAmino;
}
/**
 * QueryGetDisplayNameReportStakeResponse defines the QueryGetDisplayNameReportStakeResponse message.
 * @name QueryGetDisplayNameReportStakeResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameReportStakeResponse
 */
export interface QueryGetDisplayNameReportStakeResponse {
  displayNameReportStake: DisplayNameReportStake;
}
export interface QueryGetDisplayNameReportStakeResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameReportStakeResponse";
  value: Uint8Array;
}
/**
 * QueryGetDisplayNameReportStakeResponse defines the QueryGetDisplayNameReportStakeResponse message.
 * @name QueryGetDisplayNameReportStakeResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameReportStakeResponse
 */
export interface QueryGetDisplayNameReportStakeResponseAmino {
  display_name_report_stake?: DisplayNameReportStakeAmino;
}
export interface QueryGetDisplayNameReportStakeResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetDisplayNameReportStakeResponse";
  value: QueryGetDisplayNameReportStakeResponseAmino;
}
/**
 * QueryAllDisplayNameReportStakeRequest defines the QueryAllDisplayNameReportStakeRequest message.
 * @name QueryAllDisplayNameReportStakeRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameReportStakeRequest
 */
export interface QueryAllDisplayNameReportStakeRequest {
  pagination?: PageRequest;
}
export interface QueryAllDisplayNameReportStakeRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameReportStakeRequest";
  value: Uint8Array;
}
/**
 * QueryAllDisplayNameReportStakeRequest defines the QueryAllDisplayNameReportStakeRequest message.
 * @name QueryAllDisplayNameReportStakeRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameReportStakeRequest
 */
export interface QueryAllDisplayNameReportStakeRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDisplayNameReportStakeRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllDisplayNameReportStakeRequest";
  value: QueryAllDisplayNameReportStakeRequestAmino;
}
/**
 * QueryAllDisplayNameReportStakeResponse defines the QueryAllDisplayNameReportStakeResponse message.
 * @name QueryAllDisplayNameReportStakeResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameReportStakeResponse
 */
export interface QueryAllDisplayNameReportStakeResponse {
  displayNameReportStake: DisplayNameReportStake[];
  pagination?: PageResponse;
}
export interface QueryAllDisplayNameReportStakeResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameReportStakeResponse";
  value: Uint8Array;
}
/**
 * QueryAllDisplayNameReportStakeResponse defines the QueryAllDisplayNameReportStakeResponse message.
 * @name QueryAllDisplayNameReportStakeResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameReportStakeResponse
 */
export interface QueryAllDisplayNameReportStakeResponseAmino {
  display_name_report_stake?: DisplayNameReportStakeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDisplayNameReportStakeResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllDisplayNameReportStakeResponse";
  value: QueryAllDisplayNameReportStakeResponseAmino;
}
/**
 * QueryGetDisplayNameAppealStakeRequest defines the QueryGetDisplayNameAppealStakeRequest message.
 * @name QueryGetDisplayNameAppealStakeRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameAppealStakeRequest
 */
export interface QueryGetDisplayNameAppealStakeRequest {
  challengeId: string;
}
export interface QueryGetDisplayNameAppealStakeRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameAppealStakeRequest";
  value: Uint8Array;
}
/**
 * QueryGetDisplayNameAppealStakeRequest defines the QueryGetDisplayNameAppealStakeRequest message.
 * @name QueryGetDisplayNameAppealStakeRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameAppealStakeRequest
 */
export interface QueryGetDisplayNameAppealStakeRequestAmino {
  challenge_id?: string;
}
export interface QueryGetDisplayNameAppealStakeRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetDisplayNameAppealStakeRequest";
  value: QueryGetDisplayNameAppealStakeRequestAmino;
}
/**
 * QueryGetDisplayNameAppealStakeResponse defines the QueryGetDisplayNameAppealStakeResponse message.
 * @name QueryGetDisplayNameAppealStakeResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameAppealStakeResponse
 */
export interface QueryGetDisplayNameAppealStakeResponse {
  displayNameAppealStake: DisplayNameAppealStake;
}
export interface QueryGetDisplayNameAppealStakeResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameAppealStakeResponse";
  value: Uint8Array;
}
/**
 * QueryGetDisplayNameAppealStakeResponse defines the QueryGetDisplayNameAppealStakeResponse message.
 * @name QueryGetDisplayNameAppealStakeResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameAppealStakeResponse
 */
export interface QueryGetDisplayNameAppealStakeResponseAmino {
  display_name_appeal_stake?: DisplayNameAppealStakeAmino;
}
export interface QueryGetDisplayNameAppealStakeResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetDisplayNameAppealStakeResponse";
  value: QueryGetDisplayNameAppealStakeResponseAmino;
}
/**
 * QueryAllDisplayNameAppealStakeRequest defines the QueryAllDisplayNameAppealStakeRequest message.
 * @name QueryAllDisplayNameAppealStakeRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameAppealStakeRequest
 */
export interface QueryAllDisplayNameAppealStakeRequest {
  pagination?: PageRequest;
}
export interface QueryAllDisplayNameAppealStakeRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameAppealStakeRequest";
  value: Uint8Array;
}
/**
 * QueryAllDisplayNameAppealStakeRequest defines the QueryAllDisplayNameAppealStakeRequest message.
 * @name QueryAllDisplayNameAppealStakeRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameAppealStakeRequest
 */
export interface QueryAllDisplayNameAppealStakeRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDisplayNameAppealStakeRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAllDisplayNameAppealStakeRequest";
  value: QueryAllDisplayNameAppealStakeRequestAmino;
}
/**
 * QueryAllDisplayNameAppealStakeResponse defines the QueryAllDisplayNameAppealStakeResponse message.
 * @name QueryAllDisplayNameAppealStakeResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameAppealStakeResponse
 */
export interface QueryAllDisplayNameAppealStakeResponse {
  displayNameAppealStake: DisplayNameAppealStake[];
  pagination?: PageResponse;
}
export interface QueryAllDisplayNameAppealStakeResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameAppealStakeResponse";
  value: Uint8Array;
}
/**
 * QueryAllDisplayNameAppealStakeResponse defines the QueryAllDisplayNameAppealStakeResponse message.
 * @name QueryAllDisplayNameAppealStakeResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameAppealStakeResponse
 */
export interface QueryAllDisplayNameAppealStakeResponseAmino {
  display_name_appeal_stake?: DisplayNameAppealStakeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDisplayNameAppealStakeResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAllDisplayNameAppealStakeResponse";
  value: QueryAllDisplayNameAppealStakeResponseAmino;
}
/**
 * QueryCurrentSeasonRequest defines the QueryCurrentSeasonRequest message.
 * @name QueryCurrentSeasonRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryCurrentSeasonRequest
 */
export interface QueryCurrentSeasonRequest {}
export interface QueryCurrentSeasonRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryCurrentSeasonRequest";
  value: Uint8Array;
}
/**
 * QueryCurrentSeasonRequest defines the QueryCurrentSeasonRequest message.
 * @name QueryCurrentSeasonRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryCurrentSeasonRequest
 */
export interface QueryCurrentSeasonRequestAmino {}
export interface QueryCurrentSeasonRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryCurrentSeasonRequest";
  value: QueryCurrentSeasonRequestAmino;
}
/**
 * QueryCurrentSeasonResponse defines the QueryCurrentSeasonResponse message.
 * @name QueryCurrentSeasonResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryCurrentSeasonResponse
 */
export interface QueryCurrentSeasonResponse {
  number: bigint;
  name: string;
  theme: string;
  startBlock: bigint;
  endBlock: bigint;
  status: bigint;
}
export interface QueryCurrentSeasonResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryCurrentSeasonResponse";
  value: Uint8Array;
}
/**
 * QueryCurrentSeasonResponse defines the QueryCurrentSeasonResponse message.
 * @name QueryCurrentSeasonResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryCurrentSeasonResponse
 */
export interface QueryCurrentSeasonResponseAmino {
  number?: string;
  name?: string;
  theme?: string;
  start_block?: string;
  end_block?: string;
  status?: string;
}
export interface QueryCurrentSeasonResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryCurrentSeasonResponse";
  value: QueryCurrentSeasonResponseAmino;
}
/**
 * QuerySeasonByNumberRequest defines the QuerySeasonByNumberRequest message.
 * @name QuerySeasonByNumberRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuerySeasonByNumberRequest
 */
export interface QuerySeasonByNumberRequest {
  number: bigint;
}
export interface QuerySeasonByNumberRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QuerySeasonByNumberRequest";
  value: Uint8Array;
}
/**
 * QuerySeasonByNumberRequest defines the QuerySeasonByNumberRequest message.
 * @name QuerySeasonByNumberRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuerySeasonByNumberRequest
 */
export interface QuerySeasonByNumberRequestAmino {
  number?: string;
}
export interface QuerySeasonByNumberRequestAminoMsg {
  type: "/sparkdream.season.v1.QuerySeasonByNumberRequest";
  value: QuerySeasonByNumberRequestAmino;
}
/**
 * QuerySeasonByNumberResponse defines the QuerySeasonByNumberResponse message.
 * @name QuerySeasonByNumberResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuerySeasonByNumberResponse
 */
export interface QuerySeasonByNumberResponse {
  name: string;
  theme: string;
  startBlock: bigint;
  endBlock: bigint;
  status: bigint;
}
export interface QuerySeasonByNumberResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QuerySeasonByNumberResponse";
  value: Uint8Array;
}
/**
 * QuerySeasonByNumberResponse defines the QuerySeasonByNumberResponse message.
 * @name QuerySeasonByNumberResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuerySeasonByNumberResponse
 */
export interface QuerySeasonByNumberResponseAmino {
  name?: string;
  theme?: string;
  start_block?: string;
  end_block?: string;
  status?: string;
}
export interface QuerySeasonByNumberResponseAminoMsg {
  type: "/sparkdream.season.v1.QuerySeasonByNumberResponse";
  value: QuerySeasonByNumberResponseAmino;
}
/**
 * QuerySeasonStatsRequest defines the QuerySeasonStatsRequest message.
 * @name QuerySeasonStatsRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuerySeasonStatsRequest
 */
export interface QuerySeasonStatsRequest {
  season: bigint;
}
export interface QuerySeasonStatsRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QuerySeasonStatsRequest";
  value: Uint8Array;
}
/**
 * QuerySeasonStatsRequest defines the QuerySeasonStatsRequest message.
 * @name QuerySeasonStatsRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuerySeasonStatsRequest
 */
export interface QuerySeasonStatsRequestAmino {
  season?: string;
}
export interface QuerySeasonStatsRequestAminoMsg {
  type: "/sparkdream.season.v1.QuerySeasonStatsRequest";
  value: QuerySeasonStatsRequestAmino;
}
/**
 * QuerySeasonStatsResponse defines the QuerySeasonStatsResponse message.
 * @name QuerySeasonStatsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuerySeasonStatsResponse
 */
export interface QuerySeasonStatsResponse {
  totalXpEarned: bigint;
  activeMembers: bigint;
  initiativesCompleted: bigint;
  guildsActive: bigint;
  questsCompleted: bigint;
  blocksRemaining: bigint;
}
export interface QuerySeasonStatsResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QuerySeasonStatsResponse";
  value: Uint8Array;
}
/**
 * QuerySeasonStatsResponse defines the QuerySeasonStatsResponse message.
 * @name QuerySeasonStatsResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuerySeasonStatsResponse
 */
export interface QuerySeasonStatsResponseAmino {
  total_xp_earned?: string;
  active_members?: string;
  initiatives_completed?: string;
  guilds_active?: string;
  quests_completed?: string;
  blocks_remaining?: string;
}
export interface QuerySeasonStatsResponseAminoMsg {
  type: "/sparkdream.season.v1.QuerySeasonStatsResponse";
  value: QuerySeasonStatsResponseAmino;
}
/**
 * QueryMemberByDisplayNameRequest defines the QueryMemberByDisplayNameRequest message.
 * @name QueryMemberByDisplayNameRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberByDisplayNameRequest
 */
export interface QueryMemberByDisplayNameRequest {
  displayName: string;
}
export interface QueryMemberByDisplayNameRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberByDisplayNameRequest";
  value: Uint8Array;
}
/**
 * QueryMemberByDisplayNameRequest defines the QueryMemberByDisplayNameRequest message.
 * @name QueryMemberByDisplayNameRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberByDisplayNameRequest
 */
export interface QueryMemberByDisplayNameRequestAmino {
  display_name?: string;
}
export interface QueryMemberByDisplayNameRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberByDisplayNameRequest";
  value: QueryMemberByDisplayNameRequestAmino;
}
/**
 * QueryMemberByDisplayNameResponse defines the QueryMemberByDisplayNameResponse message.
 * @name QueryMemberByDisplayNameResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberByDisplayNameResponse
 */
export interface QueryMemberByDisplayNameResponse {
  address: string;
  username: string;
  seasonXp: bigint;
}
export interface QueryMemberByDisplayNameResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberByDisplayNameResponse";
  value: Uint8Array;
}
/**
 * QueryMemberByDisplayNameResponse defines the QueryMemberByDisplayNameResponse message.
 * @name QueryMemberByDisplayNameResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberByDisplayNameResponse
 */
export interface QueryMemberByDisplayNameResponseAmino {
  address?: string;
  username?: string;
  season_xp?: string;
}
export interface QueryMemberByDisplayNameResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberByDisplayNameResponse";
  value: QueryMemberByDisplayNameResponseAmino;
}
/**
 * QueryMemberSeasonHistoryRequest defines the QueryMemberSeasonHistoryRequest message.
 * @name QueryMemberSeasonHistoryRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberSeasonHistoryRequest
 */
export interface QueryMemberSeasonHistoryRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryMemberSeasonHistoryRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberSeasonHistoryRequest";
  value: Uint8Array;
}
/**
 * QueryMemberSeasonHistoryRequest defines the QueryMemberSeasonHistoryRequest message.
 * @name QueryMemberSeasonHistoryRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberSeasonHistoryRequest
 */
export interface QueryMemberSeasonHistoryRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryMemberSeasonHistoryRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberSeasonHistoryRequest";
  value: QueryMemberSeasonHistoryRequestAmino;
}
/**
 * QueryMemberSeasonHistoryResponse defines the QueryMemberSeasonHistoryResponse message.
 * @name QueryMemberSeasonHistoryResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberSeasonHistoryResponse
 */
export interface QueryMemberSeasonHistoryResponse {
  season: bigint;
  xpEarned: bigint;
  level: bigint;
  pagination?: PageResponse;
}
export interface QueryMemberSeasonHistoryResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberSeasonHistoryResponse";
  value: Uint8Array;
}
/**
 * QueryMemberSeasonHistoryResponse defines the QueryMemberSeasonHistoryResponse message.
 * @name QueryMemberSeasonHistoryResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberSeasonHistoryResponse
 */
export interface QueryMemberSeasonHistoryResponseAmino {
  season?: string;
  xp_earned?: string;
  level?: string;
  pagination?: PageResponseAmino;
}
export interface QueryMemberSeasonHistoryResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberSeasonHistoryResponse";
  value: QueryMemberSeasonHistoryResponseAmino;
}
/**
 * QueryMemberXpHistoryRequest defines the QueryMemberXpHistoryRequest message.
 * @name QueryMemberXpHistoryRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberXpHistoryRequest
 */
export interface QueryMemberXpHistoryRequest {
  address: string;
  season: bigint;
  epochsBack: bigint;
}
export interface QueryMemberXpHistoryRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberXpHistoryRequest";
  value: Uint8Array;
}
/**
 * QueryMemberXpHistoryRequest defines the QueryMemberXpHistoryRequest message.
 * @name QueryMemberXpHistoryRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberXpHistoryRequest
 */
export interface QueryMemberXpHistoryRequestAmino {
  address?: string;
  season?: string;
  epochs_back?: string;
}
export interface QueryMemberXpHistoryRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberXpHistoryRequest";
  value: QueryMemberXpHistoryRequestAmino;
}
/**
 * QueryMemberXpHistoryResponse defines the QueryMemberXpHistoryResponse message.
 * @name QueryMemberXpHistoryResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberXpHistoryResponse
 */
export interface QueryMemberXpHistoryResponse {
  epoch: bigint;
  xpEarned: bigint;
  cumulativeXp: bigint;
}
export interface QueryMemberXpHistoryResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberXpHistoryResponse";
  value: Uint8Array;
}
/**
 * QueryMemberXpHistoryResponse defines the QueryMemberXpHistoryResponse message.
 * @name QueryMemberXpHistoryResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberXpHistoryResponse
 */
export interface QueryMemberXpHistoryResponseAmino {
  epoch?: string;
  xp_earned?: string;
  cumulative_xp?: string;
}
export interface QueryMemberXpHistoryResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberXpHistoryResponse";
  value: QueryMemberXpHistoryResponseAmino;
}
/**
 * QueryAchievementsRequest defines the QueryAchievementsRequest message.
 * @name QueryAchievementsRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAchievementsRequest
 */
export interface QueryAchievementsRequest {
  pagination?: PageRequest;
}
export interface QueryAchievementsRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAchievementsRequest";
  value: Uint8Array;
}
/**
 * QueryAchievementsRequest defines the QueryAchievementsRequest message.
 * @name QueryAchievementsRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAchievementsRequest
 */
export interface QueryAchievementsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAchievementsRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAchievementsRequest";
  value: QueryAchievementsRequestAmino;
}
/**
 * QueryAchievementsResponse defines the QueryAchievementsResponse message.
 * @name QueryAchievementsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAchievementsResponse
 */
export interface QueryAchievementsResponse {
  achievements: Achievement[];
  pagination?: PageResponse;
}
export interface QueryAchievementsResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAchievementsResponse";
  value: Uint8Array;
}
/**
 * QueryAchievementsResponse defines the QueryAchievementsResponse message.
 * @name QueryAchievementsResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAchievementsResponse
 */
export interface QueryAchievementsResponseAmino {
  achievements?: AchievementAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAchievementsResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAchievementsResponse";
  value: QueryAchievementsResponseAmino;
}
/**
 * QueryMemberAchievementsRequest defines the QueryMemberAchievementsRequest message.
 * @name QueryMemberAchievementsRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberAchievementsRequest
 */
export interface QueryMemberAchievementsRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryMemberAchievementsRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberAchievementsRequest";
  value: Uint8Array;
}
/**
 * QueryMemberAchievementsRequest defines the QueryMemberAchievementsRequest message.
 * @name QueryMemberAchievementsRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberAchievementsRequest
 */
export interface QueryMemberAchievementsRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryMemberAchievementsRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberAchievementsRequest";
  value: QueryMemberAchievementsRequestAmino;
}
/**
 * QueryMemberAchievementsResponse defines the QueryMemberAchievementsResponse message.
 * @name QueryMemberAchievementsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberAchievementsResponse
 */
export interface QueryMemberAchievementsResponse {
  achievementId: string;
  earnedAt: bigint;
  pagination?: PageResponse;
}
export interface QueryMemberAchievementsResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberAchievementsResponse";
  value: Uint8Array;
}
/**
 * QueryMemberAchievementsResponse defines the QueryMemberAchievementsResponse message.
 * @name QueryMemberAchievementsResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberAchievementsResponse
 */
export interface QueryMemberAchievementsResponseAmino {
  achievement_id?: string;
  earned_at?: string;
  pagination?: PageResponseAmino;
}
export interface QueryMemberAchievementsResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberAchievementsResponse";
  value: QueryMemberAchievementsResponseAmino;
}
/**
 * QueryTitlesRequest defines the QueryTitlesRequest message.
 * @name QueryTitlesRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryTitlesRequest
 */
export interface QueryTitlesRequest {
  pagination?: PageRequest;
}
export interface QueryTitlesRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryTitlesRequest";
  value: Uint8Array;
}
/**
 * QueryTitlesRequest defines the QueryTitlesRequest message.
 * @name QueryTitlesRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryTitlesRequest
 */
export interface QueryTitlesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryTitlesRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryTitlesRequest";
  value: QueryTitlesRequestAmino;
}
/**
 * QueryTitlesResponse defines the QueryTitlesResponse message.
 * @name QueryTitlesResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryTitlesResponse
 */
export interface QueryTitlesResponse {
  titles: Title[];
  pagination?: PageResponse;
}
export interface QueryTitlesResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryTitlesResponse";
  value: Uint8Array;
}
/**
 * QueryTitlesResponse defines the QueryTitlesResponse message.
 * @name QueryTitlesResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryTitlesResponse
 */
export interface QueryTitlesResponseAmino {
  titles?: TitleAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryTitlesResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryTitlesResponse";
  value: QueryTitlesResponseAmino;
}
/**
 * QueryMemberTitlesRequest defines the QueryMemberTitlesRequest message.
 * @name QueryMemberTitlesRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberTitlesRequest
 */
export interface QueryMemberTitlesRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryMemberTitlesRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberTitlesRequest";
  value: Uint8Array;
}
/**
 * QueryMemberTitlesRequest defines the QueryMemberTitlesRequest message.
 * @name QueryMemberTitlesRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberTitlesRequest
 */
export interface QueryMemberTitlesRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryMemberTitlesRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberTitlesRequest";
  value: QueryMemberTitlesRequestAmino;
}
/**
 * QueryMemberTitlesResponse defines the QueryMemberTitlesResponse message.
 * @name QueryMemberTitlesResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberTitlesResponse
 */
export interface QueryMemberTitlesResponse {
  titleId: string;
  unlockedAt: bigint;
  pagination?: PageResponse;
}
export interface QueryMemberTitlesResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberTitlesResponse";
  value: Uint8Array;
}
/**
 * QueryMemberTitlesResponse defines the QueryMemberTitlesResponse message.
 * @name QueryMemberTitlesResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberTitlesResponse
 */
export interface QueryMemberTitlesResponseAmino {
  title_id?: string;
  unlocked_at?: string;
  pagination?: PageResponseAmino;
}
export interface QueryMemberTitlesResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberTitlesResponse";
  value: QueryMemberTitlesResponseAmino;
}
/**
 * QueryGuildByIdRequest defines the QueryGuildByIdRequest message.
 * @name QueryGuildByIdRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildByIdRequest
 */
export interface QueryGuildByIdRequest {
  guildId: bigint;
}
export interface QueryGuildByIdRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGuildByIdRequest";
  value: Uint8Array;
}
/**
 * QueryGuildByIdRequest defines the QueryGuildByIdRequest message.
 * @name QueryGuildByIdRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildByIdRequest
 */
export interface QueryGuildByIdRequestAmino {
  guild_id?: string;
}
export interface QueryGuildByIdRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGuildByIdRequest";
  value: QueryGuildByIdRequestAmino;
}
/**
 * QueryGuildByIdResponse defines the QueryGuildByIdResponse message.
 * @name QueryGuildByIdResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildByIdResponse
 */
export interface QueryGuildByIdResponse {
  name: string;
  description: string;
  founder: string;
  inviteOnly: boolean;
  status: bigint;
}
export interface QueryGuildByIdResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGuildByIdResponse";
  value: Uint8Array;
}
/**
 * QueryGuildByIdResponse defines the QueryGuildByIdResponse message.
 * @name QueryGuildByIdResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildByIdResponse
 */
export interface QueryGuildByIdResponseAmino {
  name?: string;
  description?: string;
  founder?: string;
  invite_only?: boolean;
  status?: string;
}
export interface QueryGuildByIdResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGuildByIdResponse";
  value: QueryGuildByIdResponseAmino;
}
/**
 * QueryGuildsListRequest defines the QueryGuildsListRequest message.
 * @name QueryGuildsListRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildsListRequest
 */
export interface QueryGuildsListRequest {
  pagination?: PageRequest;
}
export interface QueryGuildsListRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGuildsListRequest";
  value: Uint8Array;
}
/**
 * QueryGuildsListRequest defines the QueryGuildsListRequest message.
 * @name QueryGuildsListRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildsListRequest
 */
export interface QueryGuildsListRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryGuildsListRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGuildsListRequest";
  value: QueryGuildsListRequestAmino;
}
/**
 * QueryGuildsListResponse defines the QueryGuildsListResponse message.
 * @name QueryGuildsListResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildsListResponse
 */
export interface QueryGuildsListResponse {
  id: bigint;
  name: string;
  founder: string;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryGuildsListResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGuildsListResponse";
  value: Uint8Array;
}
/**
 * QueryGuildsListResponse defines the QueryGuildsListResponse message.
 * @name QueryGuildsListResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildsListResponse
 */
export interface QueryGuildsListResponseAmino {
  id?: string;
  name?: string;
  founder?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryGuildsListResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGuildsListResponse";
  value: QueryGuildsListResponseAmino;
}
/**
 * QueryGuildsByFounderRequest defines the QueryGuildsByFounderRequest message.
 * @name QueryGuildsByFounderRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildsByFounderRequest
 */
export interface QueryGuildsByFounderRequest {
  founder: string;
  includeDissolved: boolean;
  pagination?: PageRequest;
}
export interface QueryGuildsByFounderRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGuildsByFounderRequest";
  value: Uint8Array;
}
/**
 * QueryGuildsByFounderRequest defines the QueryGuildsByFounderRequest message.
 * @name QueryGuildsByFounderRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildsByFounderRequest
 */
export interface QueryGuildsByFounderRequestAmino {
  founder?: string;
  include_dissolved?: boolean;
  pagination?: PageRequestAmino;
}
export interface QueryGuildsByFounderRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGuildsByFounderRequest";
  value: QueryGuildsByFounderRequestAmino;
}
/**
 * QueryGuildsByFounderResponse defines the QueryGuildsByFounderResponse message.
 * @name QueryGuildsByFounderResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildsByFounderResponse
 */
export interface QueryGuildsByFounderResponse {
  id: bigint;
  name: string;
  status: bigint;
  pagination?: PageResponse;
}
export interface QueryGuildsByFounderResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGuildsByFounderResponse";
  value: Uint8Array;
}
/**
 * QueryGuildsByFounderResponse defines the QueryGuildsByFounderResponse message.
 * @name QueryGuildsByFounderResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildsByFounderResponse
 */
export interface QueryGuildsByFounderResponseAmino {
  id?: string;
  name?: string;
  status?: string;
  pagination?: PageResponseAmino;
}
export interface QueryGuildsByFounderResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGuildsByFounderResponse";
  value: QueryGuildsByFounderResponseAmino;
}
/**
 * QueryGuildMembersRequest defines the QueryGuildMembersRequest message.
 * @name QueryGuildMembersRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildMembersRequest
 */
export interface QueryGuildMembersRequest {
  guildId: bigint;
  pagination?: PageRequest;
}
export interface QueryGuildMembersRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGuildMembersRequest";
  value: Uint8Array;
}
/**
 * QueryGuildMembersRequest defines the QueryGuildMembersRequest message.
 * @name QueryGuildMembersRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildMembersRequest
 */
export interface QueryGuildMembersRequestAmino {
  guild_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryGuildMembersRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGuildMembersRequest";
  value: QueryGuildMembersRequestAmino;
}
/**
 * QueryGuildMembersResponse defines the QueryGuildMembersResponse message.
 * @name QueryGuildMembersResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildMembersResponse
 */
export interface QueryGuildMembersResponse {
  member: string;
  joinedEpoch: bigint;
  pagination?: PageResponse;
}
export interface QueryGuildMembersResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGuildMembersResponse";
  value: Uint8Array;
}
/**
 * QueryGuildMembersResponse defines the QueryGuildMembersResponse message.
 * @name QueryGuildMembersResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildMembersResponse
 */
export interface QueryGuildMembersResponseAmino {
  member?: string;
  joined_epoch?: string;
  pagination?: PageResponseAmino;
}
export interface QueryGuildMembersResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGuildMembersResponse";
  value: QueryGuildMembersResponseAmino;
}
/**
 * QueryMemberGuildRequest defines the QueryMemberGuildRequest message.
 * @name QueryMemberGuildRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberGuildRequest
 */
export interface QueryMemberGuildRequest {
  member: string;
}
export interface QueryMemberGuildRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberGuildRequest";
  value: Uint8Array;
}
/**
 * QueryMemberGuildRequest defines the QueryMemberGuildRequest message.
 * @name QueryMemberGuildRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberGuildRequest
 */
export interface QueryMemberGuildRequestAmino {
  member?: string;
}
export interface QueryMemberGuildRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberGuildRequest";
  value: QueryMemberGuildRequestAmino;
}
/**
 * QueryMemberGuildResponse defines the QueryMemberGuildResponse message.
 * @name QueryMemberGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberGuildResponse
 */
export interface QueryMemberGuildResponse {
  guildId: bigint;
  joinedEpoch: bigint;
}
export interface QueryMemberGuildResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberGuildResponse";
  value: Uint8Array;
}
/**
 * QueryMemberGuildResponse defines the QueryMemberGuildResponse message.
 * @name QueryMemberGuildResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberGuildResponse
 */
export interface QueryMemberGuildResponseAmino {
  guild_id?: string;
  joined_epoch?: string;
}
export interface QueryMemberGuildResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberGuildResponse";
  value: QueryMemberGuildResponseAmino;
}
/**
 * QueryGuildInvitesRequest defines the QueryGuildInvitesRequest message.
 * @name QueryGuildInvitesRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildInvitesRequest
 */
export interface QueryGuildInvitesRequest {
  guildId: bigint;
  pagination?: PageRequest;
}
export interface QueryGuildInvitesRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGuildInvitesRequest";
  value: Uint8Array;
}
/**
 * QueryGuildInvitesRequest defines the QueryGuildInvitesRequest message.
 * @name QueryGuildInvitesRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildInvitesRequest
 */
export interface QueryGuildInvitesRequestAmino {
  guild_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryGuildInvitesRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGuildInvitesRequest";
  value: QueryGuildInvitesRequestAmino;
}
/**
 * QueryGuildInvitesResponse defines the QueryGuildInvitesResponse message.
 * @name QueryGuildInvitesResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildInvitesResponse
 */
export interface QueryGuildInvitesResponse {
  invitee: string;
  inviter: string;
  expiresEpoch: bigint;
  pagination?: PageResponse;
}
export interface QueryGuildInvitesResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGuildInvitesResponse";
  value: Uint8Array;
}
/**
 * QueryGuildInvitesResponse defines the QueryGuildInvitesResponse message.
 * @name QueryGuildInvitesResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildInvitesResponse
 */
export interface QueryGuildInvitesResponseAmino {
  invitee?: string;
  inviter?: string;
  expires_epoch?: string;
  pagination?: PageResponseAmino;
}
export interface QueryGuildInvitesResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGuildInvitesResponse";
  value: QueryGuildInvitesResponseAmino;
}
/**
 * QueryMemberGuildInvitesRequest defines the QueryMemberGuildInvitesRequest message.
 * @name QueryMemberGuildInvitesRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberGuildInvitesRequest
 */
export interface QueryMemberGuildInvitesRequest {
  member: string;
  pagination?: PageRequest;
}
export interface QueryMemberGuildInvitesRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberGuildInvitesRequest";
  value: Uint8Array;
}
/**
 * QueryMemberGuildInvitesRequest defines the QueryMemberGuildInvitesRequest message.
 * @name QueryMemberGuildInvitesRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberGuildInvitesRequest
 */
export interface QueryMemberGuildInvitesRequestAmino {
  member?: string;
  pagination?: PageRequestAmino;
}
export interface QueryMemberGuildInvitesRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberGuildInvitesRequest";
  value: QueryMemberGuildInvitesRequestAmino;
}
/**
 * QueryMemberGuildInvitesResponse defines the QueryMemberGuildInvitesResponse message.
 * @name QueryMemberGuildInvitesResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberGuildInvitesResponse
 */
export interface QueryMemberGuildInvitesResponse {
  guildId: bigint;
  guildName: string;
  pagination?: PageResponse;
}
export interface QueryMemberGuildInvitesResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberGuildInvitesResponse";
  value: Uint8Array;
}
/**
 * QueryMemberGuildInvitesResponse defines the QueryMemberGuildInvitesResponse message.
 * @name QueryMemberGuildInvitesResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberGuildInvitesResponse
 */
export interface QueryMemberGuildInvitesResponseAmino {
  guild_id?: string;
  guild_name?: string;
  pagination?: PageResponseAmino;
}
export interface QueryMemberGuildInvitesResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberGuildInvitesResponse";
  value: QueryMemberGuildInvitesResponseAmino;
}
/**
 * QueryQuestsListRequest defines the QueryQuestsListRequest message.
 * @name QueryQuestsListRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestsListRequest
 */
export interface QueryQuestsListRequest {
  pagination?: PageRequest;
}
export interface QueryQuestsListRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryQuestsListRequest";
  value: Uint8Array;
}
/**
 * QueryQuestsListRequest defines the QueryQuestsListRequest message.
 * @name QueryQuestsListRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestsListRequest
 */
export interface QueryQuestsListRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryQuestsListRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryQuestsListRequest";
  value: QueryQuestsListRequestAmino;
}
/**
 * QueryQuestsListResponse defines the QueryQuestsListResponse message.
 * @name QueryQuestsListResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestsListResponse
 */
export interface QueryQuestsListResponse {
  id: string;
  name: string;
  xpReward: bigint;
  active: boolean;
  pagination?: PageResponse;
}
export interface QueryQuestsListResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryQuestsListResponse";
  value: Uint8Array;
}
/**
 * QueryQuestsListResponse defines the QueryQuestsListResponse message.
 * @name QueryQuestsListResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestsListResponse
 */
export interface QueryQuestsListResponseAmino {
  id?: string;
  name?: string;
  xp_reward?: string;
  active?: boolean;
  pagination?: PageResponseAmino;
}
export interface QueryQuestsListResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryQuestsListResponse";
  value: QueryQuestsListResponseAmino;
}
/**
 * QueryQuestByIdRequest defines the QueryQuestByIdRequest message.
 * @name QueryQuestByIdRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestByIdRequest
 */
export interface QueryQuestByIdRequest {
  questId: string;
}
export interface QueryQuestByIdRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryQuestByIdRequest";
  value: Uint8Array;
}
/**
 * QueryQuestByIdRequest defines the QueryQuestByIdRequest message.
 * @name QueryQuestByIdRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestByIdRequest
 */
export interface QueryQuestByIdRequestAmino {
  quest_id?: string;
}
export interface QueryQuestByIdRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryQuestByIdRequest";
  value: QueryQuestByIdRequestAmino;
}
/**
 * QueryQuestByIdResponse defines the QueryQuestByIdResponse message.
 * @name QueryQuestByIdResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestByIdResponse
 */
export interface QueryQuestByIdResponse {
  name: string;
  description: string;
  xpReward: bigint;
  active: boolean;
  minLevel: bigint;
}
export interface QueryQuestByIdResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryQuestByIdResponse";
  value: Uint8Array;
}
/**
 * QueryQuestByIdResponse defines the QueryQuestByIdResponse message.
 * @name QueryQuestByIdResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestByIdResponse
 */
export interface QueryQuestByIdResponseAmino {
  name?: string;
  description?: string;
  xp_reward?: string;
  active?: boolean;
  min_level?: string;
}
export interface QueryQuestByIdResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryQuestByIdResponse";
  value: QueryQuestByIdResponseAmino;
}
/**
 * QueryQuestChainRequest defines the QueryQuestChainRequest message.
 * @name QueryQuestChainRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestChainRequest
 */
export interface QueryQuestChainRequest {
  questChain: string;
}
export interface QueryQuestChainRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryQuestChainRequest";
  value: Uint8Array;
}
/**
 * QueryQuestChainRequest defines the QueryQuestChainRequest message.
 * @name QueryQuestChainRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestChainRequest
 */
export interface QueryQuestChainRequestAmino {
  quest_chain?: string;
}
export interface QueryQuestChainRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryQuestChainRequest";
  value: QueryQuestChainRequestAmino;
}
/**
 * QueryQuestChainResponse defines the QueryQuestChainResponse message.
 * @name QueryQuestChainResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestChainResponse
 */
export interface QueryQuestChainResponse {
  questId: string;
  name: string;
  prerequisiteQuest: string;
}
export interface QueryQuestChainResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryQuestChainResponse";
  value: Uint8Array;
}
/**
 * QueryQuestChainResponse defines the QueryQuestChainResponse message.
 * @name QueryQuestChainResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestChainResponse
 */
export interface QueryQuestChainResponseAmino {
  quest_id?: string;
  name?: string;
  prerequisite_quest?: string;
}
export interface QueryQuestChainResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryQuestChainResponse";
  value: QueryQuestChainResponseAmino;
}
/**
 * QueryMemberQuestStatusRequest defines the QueryMemberQuestStatusRequest message.
 * @name QueryMemberQuestStatusRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberQuestStatusRequest
 */
export interface QueryMemberQuestStatusRequest {
  member: string;
  questId: string;
}
export interface QueryMemberQuestStatusRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberQuestStatusRequest";
  value: Uint8Array;
}
/**
 * QueryMemberQuestStatusRequest defines the QueryMemberQuestStatusRequest message.
 * @name QueryMemberQuestStatusRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberQuestStatusRequest
 */
export interface QueryMemberQuestStatusRequestAmino {
  member?: string;
  quest_id?: string;
}
export interface QueryMemberQuestStatusRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberQuestStatusRequest";
  value: QueryMemberQuestStatusRequestAmino;
}
/**
 * QueryMemberQuestStatusResponse defines the QueryMemberQuestStatusResponse message.
 * @name QueryMemberQuestStatusResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberQuestStatusResponse
 */
export interface QueryMemberQuestStatusResponse {
  completed: boolean;
  completedBlock: bigint;
}
export interface QueryMemberQuestStatusResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryMemberQuestStatusResponse";
  value: Uint8Array;
}
/**
 * QueryMemberQuestStatusResponse defines the QueryMemberQuestStatusResponse message.
 * @name QueryMemberQuestStatusResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberQuestStatusResponse
 */
export interface QueryMemberQuestStatusResponseAmino {
  completed?: boolean;
  completed_block?: string;
}
export interface QueryMemberQuestStatusResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryMemberQuestStatusResponse";
  value: QueryMemberQuestStatusResponseAmino;
}
/**
 * QueryAvailableQuestsRequest defines the QueryAvailableQuestsRequest message.
 * @name QueryAvailableQuestsRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAvailableQuestsRequest
 */
export interface QueryAvailableQuestsRequest {
  member: string;
  pagination?: PageRequest;
}
export interface QueryAvailableQuestsRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAvailableQuestsRequest";
  value: Uint8Array;
}
/**
 * QueryAvailableQuestsRequest defines the QueryAvailableQuestsRequest message.
 * @name QueryAvailableQuestsRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAvailableQuestsRequest
 */
export interface QueryAvailableQuestsRequestAmino {
  member?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAvailableQuestsRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryAvailableQuestsRequest";
  value: QueryAvailableQuestsRequestAmino;
}
/**
 * QueryAvailableQuestsResponse defines the QueryAvailableQuestsResponse message.
 * @name QueryAvailableQuestsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAvailableQuestsResponse
 */
export interface QueryAvailableQuestsResponse {
  id: string;
  name: string;
  xpReward: bigint;
  pagination?: PageResponse;
}
export interface QueryAvailableQuestsResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryAvailableQuestsResponse";
  value: Uint8Array;
}
/**
 * QueryAvailableQuestsResponse defines the QueryAvailableQuestsResponse message.
 * @name QueryAvailableQuestsResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAvailableQuestsResponse
 */
export interface QueryAvailableQuestsResponseAmino {
  id?: string;
  name?: string;
  xp_reward?: string;
  pagination?: PageResponseAmino;
}
export interface QueryAvailableQuestsResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryAvailableQuestsResponse";
  value: QueryAvailableQuestsResponseAmino;
}
/**
 * QueryGetNominationRequest defines the request for GetNomination.
 * @name QueryGetNominationRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetNominationRequest
 */
export interface QueryGetNominationRequest {
  id: bigint;
}
export interface QueryGetNominationRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetNominationRequest";
  value: Uint8Array;
}
/**
 * QueryGetNominationRequest defines the request for GetNomination.
 * @name QueryGetNominationRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetNominationRequest
 */
export interface QueryGetNominationRequestAmino {
  id?: string;
}
export interface QueryGetNominationRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryGetNominationRequest";
  value: QueryGetNominationRequestAmino;
}
/**
 * QueryGetNominationResponse defines the response for GetNomination.
 * @name QueryGetNominationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetNominationResponse
 */
export interface QueryGetNominationResponse {
  nomination: Nomination;
}
export interface QueryGetNominationResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryGetNominationResponse";
  value: Uint8Array;
}
/**
 * QueryGetNominationResponse defines the response for GetNomination.
 * @name QueryGetNominationResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetNominationResponse
 */
export interface QueryGetNominationResponseAmino {
  nomination?: NominationAmino;
}
export interface QueryGetNominationResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryGetNominationResponse";
  value: QueryGetNominationResponseAmino;
}
/**
 * QueryListNominationsRequest defines the request for ListNominations.
 * @name QueryListNominationsRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationsRequest
 */
export interface QueryListNominationsRequest {
  pagination?: PageRequest;
}
export interface QueryListNominationsRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryListNominationsRequest";
  value: Uint8Array;
}
/**
 * QueryListNominationsRequest defines the request for ListNominations.
 * @name QueryListNominationsRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationsRequest
 */
export interface QueryListNominationsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListNominationsRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryListNominationsRequest";
  value: QueryListNominationsRequestAmino;
}
/**
 * QueryListNominationsResponse defines the response for ListNominations.
 * @name QueryListNominationsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationsResponse
 */
export interface QueryListNominationsResponse {
  nominations: Nomination[];
  pagination?: PageResponse;
}
export interface QueryListNominationsResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryListNominationsResponse";
  value: Uint8Array;
}
/**
 * QueryListNominationsResponse defines the response for ListNominations.
 * @name QueryListNominationsResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationsResponse
 */
export interface QueryListNominationsResponseAmino {
  nominations?: NominationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListNominationsResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryListNominationsResponse";
  value: QueryListNominationsResponseAmino;
}
/**
 * QueryListNominationsByCreatorRequest defines the request for ListNominationsByCreator.
 * @name QueryListNominationsByCreatorRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationsByCreatorRequest
 */
export interface QueryListNominationsByCreatorRequest {
  creator: string;
  pagination?: PageRequest;
}
export interface QueryListNominationsByCreatorRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryListNominationsByCreatorRequest";
  value: Uint8Array;
}
/**
 * QueryListNominationsByCreatorRequest defines the request for ListNominationsByCreator.
 * @name QueryListNominationsByCreatorRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationsByCreatorRequest
 */
export interface QueryListNominationsByCreatorRequestAmino {
  creator?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListNominationsByCreatorRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryListNominationsByCreatorRequest";
  value: QueryListNominationsByCreatorRequestAmino;
}
/**
 * QueryListNominationsByCreatorResponse defines the response for ListNominationsByCreator.
 * @name QueryListNominationsByCreatorResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationsByCreatorResponse
 */
export interface QueryListNominationsByCreatorResponse {
  nominations: Nomination[];
  pagination?: PageResponse;
}
export interface QueryListNominationsByCreatorResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryListNominationsByCreatorResponse";
  value: Uint8Array;
}
/**
 * QueryListNominationsByCreatorResponse defines the response for ListNominationsByCreator.
 * @name QueryListNominationsByCreatorResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationsByCreatorResponse
 */
export interface QueryListNominationsByCreatorResponseAmino {
  nominations?: NominationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListNominationsByCreatorResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryListNominationsByCreatorResponse";
  value: QueryListNominationsByCreatorResponseAmino;
}
/**
 * QueryListNominationStakesRequest defines the request for ListNominationStakes.
 * @name QueryListNominationStakesRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationStakesRequest
 */
export interface QueryListNominationStakesRequest {
  nominationId: bigint;
  pagination?: PageRequest;
}
export interface QueryListNominationStakesRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryListNominationStakesRequest";
  value: Uint8Array;
}
/**
 * QueryListNominationStakesRequest defines the request for ListNominationStakes.
 * @name QueryListNominationStakesRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationStakesRequest
 */
export interface QueryListNominationStakesRequestAmino {
  nomination_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListNominationStakesRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryListNominationStakesRequest";
  value: QueryListNominationStakesRequestAmino;
}
/**
 * QueryListNominationStakesResponse defines the response for ListNominationStakes.
 * @name QueryListNominationStakesResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationStakesResponse
 */
export interface QueryListNominationStakesResponse {
  stakes: NominationStake[];
  pagination?: PageResponse;
}
export interface QueryListNominationStakesResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryListNominationStakesResponse";
  value: Uint8Array;
}
/**
 * QueryListNominationStakesResponse defines the response for ListNominationStakes.
 * @name QueryListNominationStakesResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationStakesResponse
 */
export interface QueryListNominationStakesResponseAmino {
  stakes?: NominationStakeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListNominationStakesResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryListNominationStakesResponse";
  value: QueryListNominationStakesResponseAmino;
}
/**
 * QueryListRetroRewardHistoryRequest defines the request for ListRetroRewardHistory.
 * @name QueryListRetroRewardHistoryRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListRetroRewardHistoryRequest
 */
export interface QueryListRetroRewardHistoryRequest {
  season: bigint;
  pagination?: PageRequest;
}
export interface QueryListRetroRewardHistoryRequestProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryListRetroRewardHistoryRequest";
  value: Uint8Array;
}
/**
 * QueryListRetroRewardHistoryRequest defines the request for ListRetroRewardHistory.
 * @name QueryListRetroRewardHistoryRequestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListRetroRewardHistoryRequest
 */
export interface QueryListRetroRewardHistoryRequestAmino {
  season?: string;
  pagination?: PageRequestAmino;
}
export interface QueryListRetroRewardHistoryRequestAminoMsg {
  type: "/sparkdream.season.v1.QueryListRetroRewardHistoryRequest";
  value: QueryListRetroRewardHistoryRequestAmino;
}
/**
 * QueryListRetroRewardHistoryResponse defines the response for ListRetroRewardHistory.
 * @name QueryListRetroRewardHistoryResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListRetroRewardHistoryResponse
 */
export interface QueryListRetroRewardHistoryResponse {
  records: RetroRewardRecord[];
  pagination?: PageResponse;
}
export interface QueryListRetroRewardHistoryResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.QueryListRetroRewardHistoryResponse";
  value: Uint8Array;
}
/**
 * QueryListRetroRewardHistoryResponse defines the response for ListRetroRewardHistory.
 * @name QueryListRetroRewardHistoryResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListRetroRewardHistoryResponse
 */
export interface QueryListRetroRewardHistoryResponseAmino {
  records?: RetroRewardRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListRetroRewardHistoryResponseAminoMsg {
  type: "/sparkdream.season.v1.QueryListRetroRewardHistoryResponse";
  value: QueryListRetroRewardHistoryResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.season.v1.QueryParamsRequest",
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
      typeUrl: "/sparkdream.season.v1.QueryParamsRequest",
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
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.season.v1.QueryParamsResponse",
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
      typeUrl: "/sparkdream.season.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSeasonRequest(): QueryGetSeasonRequest {
  return {};
}
/**
 * QueryGetSeasonRequest defines the QueryGetSeasonRequest message.
 * @name QueryGetSeasonRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonRequest
 */
export const QueryGetSeasonRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonRequest",
  encode(_: QueryGetSeasonRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSeasonRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSeasonRequest();
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
  fromPartial(_: DeepPartial<QueryGetSeasonRequest>): QueryGetSeasonRequest {
    const message = createBaseQueryGetSeasonRequest();
    return message;
  },
  fromAmino(_: QueryGetSeasonRequestAmino): QueryGetSeasonRequest {
    const message = createBaseQueryGetSeasonRequest();
    return message;
  },
  toAmino(_: QueryGetSeasonRequest): QueryGetSeasonRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetSeasonRequestAminoMsg): QueryGetSeasonRequest {
    return QueryGetSeasonRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSeasonRequestProtoMsg): QueryGetSeasonRequest {
    return QueryGetSeasonRequest.decode(message.value);
  },
  toProto(message: QueryGetSeasonRequest): Uint8Array {
    return QueryGetSeasonRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSeasonRequest): QueryGetSeasonRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetSeasonRequest",
      value: QueryGetSeasonRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSeasonResponse(): QueryGetSeasonResponse {
  return {
    season: Season.fromPartial({})
  };
}
/**
 * QueryGetSeasonResponse defines the QueryGetSeasonResponse message.
 * @name QueryGetSeasonResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonResponse
 */
export const QueryGetSeasonResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonResponse",
  encode(message: QueryGetSeasonResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.season !== undefined) {
      Season.encode(message.season, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSeasonResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSeasonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.season = Season.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSeasonResponse>): QueryGetSeasonResponse {
    const message = createBaseQueryGetSeasonResponse();
    message.season = object.season !== undefined && object.season !== null ? Season.fromPartial(object.season) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSeasonResponseAmino): QueryGetSeasonResponse {
    const message = createBaseQueryGetSeasonResponse();
    if (object.season !== undefined && object.season !== null) {
      message.season = Season.fromAmino(object.season);
    }
    return message;
  },
  toAmino(message: QueryGetSeasonResponse): QueryGetSeasonResponseAmino {
    const obj: any = {};
    obj.season = message.season ? Season.toAmino(message.season) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSeasonResponseAminoMsg): QueryGetSeasonResponse {
    return QueryGetSeasonResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSeasonResponseProtoMsg): QueryGetSeasonResponse {
    return QueryGetSeasonResponse.decode(message.value);
  },
  toProto(message: QueryGetSeasonResponse): Uint8Array {
    return QueryGetSeasonResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSeasonResponse): QueryGetSeasonResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetSeasonResponse",
      value: QueryGetSeasonResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSeasonTransitionStateRequest(): QueryGetSeasonTransitionStateRequest {
  return {};
}
/**
 * QueryGetSeasonTransitionStateRequest defines the QueryGetSeasonTransitionStateRequest message.
 * @name QueryGetSeasonTransitionStateRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonTransitionStateRequest
 */
export const QueryGetSeasonTransitionStateRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonTransitionStateRequest",
  encode(_: QueryGetSeasonTransitionStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSeasonTransitionStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSeasonTransitionStateRequest();
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
  fromPartial(_: DeepPartial<QueryGetSeasonTransitionStateRequest>): QueryGetSeasonTransitionStateRequest {
    const message = createBaseQueryGetSeasonTransitionStateRequest();
    return message;
  },
  fromAmino(_: QueryGetSeasonTransitionStateRequestAmino): QueryGetSeasonTransitionStateRequest {
    const message = createBaseQueryGetSeasonTransitionStateRequest();
    return message;
  },
  toAmino(_: QueryGetSeasonTransitionStateRequest): QueryGetSeasonTransitionStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetSeasonTransitionStateRequestAminoMsg): QueryGetSeasonTransitionStateRequest {
    return QueryGetSeasonTransitionStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSeasonTransitionStateRequestProtoMsg): QueryGetSeasonTransitionStateRequest {
    return QueryGetSeasonTransitionStateRequest.decode(message.value);
  },
  toProto(message: QueryGetSeasonTransitionStateRequest): Uint8Array {
    return QueryGetSeasonTransitionStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSeasonTransitionStateRequest): QueryGetSeasonTransitionStateRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetSeasonTransitionStateRequest",
      value: QueryGetSeasonTransitionStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSeasonTransitionStateResponse(): QueryGetSeasonTransitionStateResponse {
  return {
    seasonTransitionState: SeasonTransitionState.fromPartial({})
  };
}
/**
 * QueryGetSeasonTransitionStateResponse defines the QueryGetSeasonTransitionStateResponse message.
 * @name QueryGetSeasonTransitionStateResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonTransitionStateResponse
 */
export const QueryGetSeasonTransitionStateResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonTransitionStateResponse",
  encode(message: QueryGetSeasonTransitionStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seasonTransitionState !== undefined) {
      SeasonTransitionState.encode(message.seasonTransitionState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSeasonTransitionStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSeasonTransitionStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seasonTransitionState = SeasonTransitionState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSeasonTransitionStateResponse>): QueryGetSeasonTransitionStateResponse {
    const message = createBaseQueryGetSeasonTransitionStateResponse();
    message.seasonTransitionState = object.seasonTransitionState !== undefined && object.seasonTransitionState !== null ? SeasonTransitionState.fromPartial(object.seasonTransitionState) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSeasonTransitionStateResponseAmino): QueryGetSeasonTransitionStateResponse {
    const message = createBaseQueryGetSeasonTransitionStateResponse();
    if (object.season_transition_state !== undefined && object.season_transition_state !== null) {
      message.seasonTransitionState = SeasonTransitionState.fromAmino(object.season_transition_state);
    }
    return message;
  },
  toAmino(message: QueryGetSeasonTransitionStateResponse): QueryGetSeasonTransitionStateResponseAmino {
    const obj: any = {};
    obj.season_transition_state = message.seasonTransitionState ? SeasonTransitionState.toAmino(message.seasonTransitionState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSeasonTransitionStateResponseAminoMsg): QueryGetSeasonTransitionStateResponse {
    return QueryGetSeasonTransitionStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSeasonTransitionStateResponseProtoMsg): QueryGetSeasonTransitionStateResponse {
    return QueryGetSeasonTransitionStateResponse.decode(message.value);
  },
  toProto(message: QueryGetSeasonTransitionStateResponse): Uint8Array {
    return QueryGetSeasonTransitionStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSeasonTransitionStateResponse): QueryGetSeasonTransitionStateResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetSeasonTransitionStateResponse",
      value: QueryGetSeasonTransitionStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTransitionRecoveryStateRequest(): QueryGetTransitionRecoveryStateRequest {
  return {};
}
/**
 * QueryGetTransitionRecoveryStateRequest defines the QueryGetTransitionRecoveryStateRequest message.
 * @name QueryGetTransitionRecoveryStateRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetTransitionRecoveryStateRequest
 */
export const QueryGetTransitionRecoveryStateRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetTransitionRecoveryStateRequest",
  encode(_: QueryGetTransitionRecoveryStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTransitionRecoveryStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTransitionRecoveryStateRequest();
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
  fromPartial(_: DeepPartial<QueryGetTransitionRecoveryStateRequest>): QueryGetTransitionRecoveryStateRequest {
    const message = createBaseQueryGetTransitionRecoveryStateRequest();
    return message;
  },
  fromAmino(_: QueryGetTransitionRecoveryStateRequestAmino): QueryGetTransitionRecoveryStateRequest {
    const message = createBaseQueryGetTransitionRecoveryStateRequest();
    return message;
  },
  toAmino(_: QueryGetTransitionRecoveryStateRequest): QueryGetTransitionRecoveryStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetTransitionRecoveryStateRequestAminoMsg): QueryGetTransitionRecoveryStateRequest {
    return QueryGetTransitionRecoveryStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTransitionRecoveryStateRequestProtoMsg): QueryGetTransitionRecoveryStateRequest {
    return QueryGetTransitionRecoveryStateRequest.decode(message.value);
  },
  toProto(message: QueryGetTransitionRecoveryStateRequest): Uint8Array {
    return QueryGetTransitionRecoveryStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTransitionRecoveryStateRequest): QueryGetTransitionRecoveryStateRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetTransitionRecoveryStateRequest",
      value: QueryGetTransitionRecoveryStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTransitionRecoveryStateResponse(): QueryGetTransitionRecoveryStateResponse {
  return {
    transitionRecoveryState: TransitionRecoveryState.fromPartial({})
  };
}
/**
 * QueryGetTransitionRecoveryStateResponse defines the QueryGetTransitionRecoveryStateResponse message.
 * @name QueryGetTransitionRecoveryStateResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetTransitionRecoveryStateResponse
 */
export const QueryGetTransitionRecoveryStateResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetTransitionRecoveryStateResponse",
  encode(message: QueryGetTransitionRecoveryStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transitionRecoveryState !== undefined) {
      TransitionRecoveryState.encode(message.transitionRecoveryState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTransitionRecoveryStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTransitionRecoveryStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transitionRecoveryState = TransitionRecoveryState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTransitionRecoveryStateResponse>): QueryGetTransitionRecoveryStateResponse {
    const message = createBaseQueryGetTransitionRecoveryStateResponse();
    message.transitionRecoveryState = object.transitionRecoveryState !== undefined && object.transitionRecoveryState !== null ? TransitionRecoveryState.fromPartial(object.transitionRecoveryState) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTransitionRecoveryStateResponseAmino): QueryGetTransitionRecoveryStateResponse {
    const message = createBaseQueryGetTransitionRecoveryStateResponse();
    if (object.transition_recovery_state !== undefined && object.transition_recovery_state !== null) {
      message.transitionRecoveryState = TransitionRecoveryState.fromAmino(object.transition_recovery_state);
    }
    return message;
  },
  toAmino(message: QueryGetTransitionRecoveryStateResponse): QueryGetTransitionRecoveryStateResponseAmino {
    const obj: any = {};
    obj.transition_recovery_state = message.transitionRecoveryState ? TransitionRecoveryState.toAmino(message.transitionRecoveryState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTransitionRecoveryStateResponseAminoMsg): QueryGetTransitionRecoveryStateResponse {
    return QueryGetTransitionRecoveryStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTransitionRecoveryStateResponseProtoMsg): QueryGetTransitionRecoveryStateResponse {
    return QueryGetTransitionRecoveryStateResponse.decode(message.value);
  },
  toProto(message: QueryGetTransitionRecoveryStateResponse): Uint8Array {
    return QueryGetTransitionRecoveryStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTransitionRecoveryStateResponse): QueryGetTransitionRecoveryStateResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetTransitionRecoveryStateResponse",
      value: QueryGetTransitionRecoveryStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNextSeasonInfoRequest(): QueryGetNextSeasonInfoRequest {
  return {};
}
/**
 * QueryGetNextSeasonInfoRequest defines the QueryGetNextSeasonInfoRequest message.
 * @name QueryGetNextSeasonInfoRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetNextSeasonInfoRequest
 */
export const QueryGetNextSeasonInfoRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetNextSeasonInfoRequest",
  encode(_: QueryGetNextSeasonInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetNextSeasonInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNextSeasonInfoRequest();
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
  fromPartial(_: DeepPartial<QueryGetNextSeasonInfoRequest>): QueryGetNextSeasonInfoRequest {
    const message = createBaseQueryGetNextSeasonInfoRequest();
    return message;
  },
  fromAmino(_: QueryGetNextSeasonInfoRequestAmino): QueryGetNextSeasonInfoRequest {
    const message = createBaseQueryGetNextSeasonInfoRequest();
    return message;
  },
  toAmino(_: QueryGetNextSeasonInfoRequest): QueryGetNextSeasonInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetNextSeasonInfoRequestAminoMsg): QueryGetNextSeasonInfoRequest {
    return QueryGetNextSeasonInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNextSeasonInfoRequestProtoMsg): QueryGetNextSeasonInfoRequest {
    return QueryGetNextSeasonInfoRequest.decode(message.value);
  },
  toProto(message: QueryGetNextSeasonInfoRequest): Uint8Array {
    return QueryGetNextSeasonInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNextSeasonInfoRequest): QueryGetNextSeasonInfoRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetNextSeasonInfoRequest",
      value: QueryGetNextSeasonInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNextSeasonInfoResponse(): QueryGetNextSeasonInfoResponse {
  return {
    nextSeasonInfo: NextSeasonInfo.fromPartial({})
  };
}
/**
 * QueryGetNextSeasonInfoResponse defines the QueryGetNextSeasonInfoResponse message.
 * @name QueryGetNextSeasonInfoResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetNextSeasonInfoResponse
 */
export const QueryGetNextSeasonInfoResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetNextSeasonInfoResponse",
  encode(message: QueryGetNextSeasonInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextSeasonInfo !== undefined) {
      NextSeasonInfo.encode(message.nextSeasonInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetNextSeasonInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNextSeasonInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextSeasonInfo = NextSeasonInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetNextSeasonInfoResponse>): QueryGetNextSeasonInfoResponse {
    const message = createBaseQueryGetNextSeasonInfoResponse();
    message.nextSeasonInfo = object.nextSeasonInfo !== undefined && object.nextSeasonInfo !== null ? NextSeasonInfo.fromPartial(object.nextSeasonInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNextSeasonInfoResponseAmino): QueryGetNextSeasonInfoResponse {
    const message = createBaseQueryGetNextSeasonInfoResponse();
    if (object.next_season_info !== undefined && object.next_season_info !== null) {
      message.nextSeasonInfo = NextSeasonInfo.fromAmino(object.next_season_info);
    }
    return message;
  },
  toAmino(message: QueryGetNextSeasonInfoResponse): QueryGetNextSeasonInfoResponseAmino {
    const obj: any = {};
    obj.next_season_info = message.nextSeasonInfo ? NextSeasonInfo.toAmino(message.nextSeasonInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNextSeasonInfoResponseAminoMsg): QueryGetNextSeasonInfoResponse {
    return QueryGetNextSeasonInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNextSeasonInfoResponseProtoMsg): QueryGetNextSeasonInfoResponse {
    return QueryGetNextSeasonInfoResponse.decode(message.value);
  },
  toProto(message: QueryGetNextSeasonInfoResponse): Uint8Array {
    return QueryGetNextSeasonInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNextSeasonInfoResponse): QueryGetNextSeasonInfoResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetNextSeasonInfoResponse",
      value: QueryGetNextSeasonInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSeasonSnapshotRequest(): QueryGetSeasonSnapshotRequest {
  return {
    season: BigInt(0)
  };
}
/**
 * QueryGetSeasonSnapshotRequest defines the QueryGetSeasonSnapshotRequest message.
 * @name QueryGetSeasonSnapshotRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonSnapshotRequest
 */
export const QueryGetSeasonSnapshotRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonSnapshotRequest",
  encode(message: QueryGetSeasonSnapshotRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.season !== BigInt(0)) {
      writer.uint32(8).uint64(message.season);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSeasonSnapshotRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSeasonSnapshotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.season = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSeasonSnapshotRequest>): QueryGetSeasonSnapshotRequest {
    const message = createBaseQueryGetSeasonSnapshotRequest();
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetSeasonSnapshotRequestAmino): QueryGetSeasonSnapshotRequest {
    const message = createBaseQueryGetSeasonSnapshotRequest();
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    return message;
  },
  toAmino(message: QueryGetSeasonSnapshotRequest): QueryGetSeasonSnapshotRequestAmino {
    const obj: any = {};
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSeasonSnapshotRequestAminoMsg): QueryGetSeasonSnapshotRequest {
    return QueryGetSeasonSnapshotRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSeasonSnapshotRequestProtoMsg): QueryGetSeasonSnapshotRequest {
    return QueryGetSeasonSnapshotRequest.decode(message.value);
  },
  toProto(message: QueryGetSeasonSnapshotRequest): Uint8Array {
    return QueryGetSeasonSnapshotRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSeasonSnapshotRequest): QueryGetSeasonSnapshotRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetSeasonSnapshotRequest",
      value: QueryGetSeasonSnapshotRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSeasonSnapshotResponse(): QueryGetSeasonSnapshotResponse {
  return {
    seasonSnapshot: SeasonSnapshot.fromPartial({})
  };
}
/**
 * QueryGetSeasonSnapshotResponse defines the QueryGetSeasonSnapshotResponse message.
 * @name QueryGetSeasonSnapshotResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonSnapshotResponse
 */
export const QueryGetSeasonSnapshotResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonSnapshotResponse",
  encode(message: QueryGetSeasonSnapshotResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seasonSnapshot !== undefined) {
      SeasonSnapshot.encode(message.seasonSnapshot, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSeasonSnapshotResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSeasonSnapshotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seasonSnapshot = SeasonSnapshot.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSeasonSnapshotResponse>): QueryGetSeasonSnapshotResponse {
    const message = createBaseQueryGetSeasonSnapshotResponse();
    message.seasonSnapshot = object.seasonSnapshot !== undefined && object.seasonSnapshot !== null ? SeasonSnapshot.fromPartial(object.seasonSnapshot) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSeasonSnapshotResponseAmino): QueryGetSeasonSnapshotResponse {
    const message = createBaseQueryGetSeasonSnapshotResponse();
    if (object.season_snapshot !== undefined && object.season_snapshot !== null) {
      message.seasonSnapshot = SeasonSnapshot.fromAmino(object.season_snapshot);
    }
    return message;
  },
  toAmino(message: QueryGetSeasonSnapshotResponse): QueryGetSeasonSnapshotResponseAmino {
    const obj: any = {};
    obj.season_snapshot = message.seasonSnapshot ? SeasonSnapshot.toAmino(message.seasonSnapshot) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSeasonSnapshotResponseAminoMsg): QueryGetSeasonSnapshotResponse {
    return QueryGetSeasonSnapshotResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSeasonSnapshotResponseProtoMsg): QueryGetSeasonSnapshotResponse {
    return QueryGetSeasonSnapshotResponse.decode(message.value);
  },
  toProto(message: QueryGetSeasonSnapshotResponse): Uint8Array {
    return QueryGetSeasonSnapshotResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSeasonSnapshotResponse): QueryGetSeasonSnapshotResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetSeasonSnapshotResponse",
      value: QueryGetSeasonSnapshotResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSeasonSnapshotRequest(): QueryAllSeasonSnapshotRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllSeasonSnapshotRequest defines the QueryAllSeasonSnapshotRequest message.
 * @name QueryAllSeasonSnapshotRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllSeasonSnapshotRequest
 */
export const QueryAllSeasonSnapshotRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllSeasonSnapshotRequest",
  encode(message: QueryAllSeasonSnapshotRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSeasonSnapshotRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSeasonSnapshotRequest();
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
  fromPartial(object: DeepPartial<QueryAllSeasonSnapshotRequest>): QueryAllSeasonSnapshotRequest {
    const message = createBaseQueryAllSeasonSnapshotRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSeasonSnapshotRequestAmino): QueryAllSeasonSnapshotRequest {
    const message = createBaseQueryAllSeasonSnapshotRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSeasonSnapshotRequest): QueryAllSeasonSnapshotRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSeasonSnapshotRequestAminoMsg): QueryAllSeasonSnapshotRequest {
    return QueryAllSeasonSnapshotRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSeasonSnapshotRequestProtoMsg): QueryAllSeasonSnapshotRequest {
    return QueryAllSeasonSnapshotRequest.decode(message.value);
  },
  toProto(message: QueryAllSeasonSnapshotRequest): Uint8Array {
    return QueryAllSeasonSnapshotRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSeasonSnapshotRequest): QueryAllSeasonSnapshotRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllSeasonSnapshotRequest",
      value: QueryAllSeasonSnapshotRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSeasonSnapshotResponse(): QueryAllSeasonSnapshotResponse {
  return {
    seasonSnapshot: [],
    pagination: undefined
  };
}
/**
 * QueryAllSeasonSnapshotResponse defines the QueryAllSeasonSnapshotResponse message.
 * @name QueryAllSeasonSnapshotResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllSeasonSnapshotResponse
 */
export const QueryAllSeasonSnapshotResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllSeasonSnapshotResponse",
  encode(message: QueryAllSeasonSnapshotResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.seasonSnapshot) {
      SeasonSnapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSeasonSnapshotResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSeasonSnapshotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seasonSnapshot.push(SeasonSnapshot.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllSeasonSnapshotResponse>): QueryAllSeasonSnapshotResponse {
    const message = createBaseQueryAllSeasonSnapshotResponse();
    message.seasonSnapshot = object.seasonSnapshot?.map(e => SeasonSnapshot.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSeasonSnapshotResponseAmino): QueryAllSeasonSnapshotResponse {
    const message = createBaseQueryAllSeasonSnapshotResponse();
    message.seasonSnapshot = object.season_snapshot?.map(e => SeasonSnapshot.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSeasonSnapshotResponse): QueryAllSeasonSnapshotResponseAmino {
    const obj: any = {};
    if (message.seasonSnapshot) {
      obj.season_snapshot = message.seasonSnapshot.map(e => e ? SeasonSnapshot.toAmino(e) : undefined);
    } else {
      obj.season_snapshot = message.seasonSnapshot;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSeasonSnapshotResponseAminoMsg): QueryAllSeasonSnapshotResponse {
    return QueryAllSeasonSnapshotResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSeasonSnapshotResponseProtoMsg): QueryAllSeasonSnapshotResponse {
    return QueryAllSeasonSnapshotResponse.decode(message.value);
  },
  toProto(message: QueryAllSeasonSnapshotResponse): Uint8Array {
    return QueryAllSeasonSnapshotResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSeasonSnapshotResponse): QueryAllSeasonSnapshotResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllSeasonSnapshotResponse",
      value: QueryAllSeasonSnapshotResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberSeasonSnapshotRequest(): QueryGetMemberSeasonSnapshotRequest {
  return {
    seasonAddress: ""
  };
}
/**
 * QueryGetMemberSeasonSnapshotRequest defines the QueryGetMemberSeasonSnapshotRequest message.
 * @name QueryGetMemberSeasonSnapshotRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberSeasonSnapshotRequest
 */
export const QueryGetMemberSeasonSnapshotRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberSeasonSnapshotRequest",
  encode(message: QueryGetMemberSeasonSnapshotRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seasonAddress !== "") {
      writer.uint32(10).string(message.seasonAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberSeasonSnapshotRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberSeasonSnapshotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seasonAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberSeasonSnapshotRequest>): QueryGetMemberSeasonSnapshotRequest {
    const message = createBaseQueryGetMemberSeasonSnapshotRequest();
    message.seasonAddress = object.seasonAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetMemberSeasonSnapshotRequestAmino): QueryGetMemberSeasonSnapshotRequest {
    const message = createBaseQueryGetMemberSeasonSnapshotRequest();
    if (object.season_address !== undefined && object.season_address !== null) {
      message.seasonAddress = object.season_address;
    }
    return message;
  },
  toAmino(message: QueryGetMemberSeasonSnapshotRequest): QueryGetMemberSeasonSnapshotRequestAmino {
    const obj: any = {};
    obj.season_address = message.seasonAddress === "" ? undefined : message.seasonAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberSeasonSnapshotRequestAminoMsg): QueryGetMemberSeasonSnapshotRequest {
    return QueryGetMemberSeasonSnapshotRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberSeasonSnapshotRequestProtoMsg): QueryGetMemberSeasonSnapshotRequest {
    return QueryGetMemberSeasonSnapshotRequest.decode(message.value);
  },
  toProto(message: QueryGetMemberSeasonSnapshotRequest): Uint8Array {
    return QueryGetMemberSeasonSnapshotRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberSeasonSnapshotRequest): QueryGetMemberSeasonSnapshotRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetMemberSeasonSnapshotRequest",
      value: QueryGetMemberSeasonSnapshotRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberSeasonSnapshotResponse(): QueryGetMemberSeasonSnapshotResponse {
  return {
    memberSeasonSnapshot: MemberSeasonSnapshot.fromPartial({})
  };
}
/**
 * QueryGetMemberSeasonSnapshotResponse defines the QueryGetMemberSeasonSnapshotResponse message.
 * @name QueryGetMemberSeasonSnapshotResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberSeasonSnapshotResponse
 */
export const QueryGetMemberSeasonSnapshotResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberSeasonSnapshotResponse",
  encode(message: QueryGetMemberSeasonSnapshotResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberSeasonSnapshot !== undefined) {
      MemberSeasonSnapshot.encode(message.memberSeasonSnapshot, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberSeasonSnapshotResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberSeasonSnapshotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberSeasonSnapshot = MemberSeasonSnapshot.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberSeasonSnapshotResponse>): QueryGetMemberSeasonSnapshotResponse {
    const message = createBaseQueryGetMemberSeasonSnapshotResponse();
    message.memberSeasonSnapshot = object.memberSeasonSnapshot !== undefined && object.memberSeasonSnapshot !== null ? MemberSeasonSnapshot.fromPartial(object.memberSeasonSnapshot) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMemberSeasonSnapshotResponseAmino): QueryGetMemberSeasonSnapshotResponse {
    const message = createBaseQueryGetMemberSeasonSnapshotResponse();
    if (object.member_season_snapshot !== undefined && object.member_season_snapshot !== null) {
      message.memberSeasonSnapshot = MemberSeasonSnapshot.fromAmino(object.member_season_snapshot);
    }
    return message;
  },
  toAmino(message: QueryGetMemberSeasonSnapshotResponse): QueryGetMemberSeasonSnapshotResponseAmino {
    const obj: any = {};
    obj.member_season_snapshot = message.memberSeasonSnapshot ? MemberSeasonSnapshot.toAmino(message.memberSeasonSnapshot) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberSeasonSnapshotResponseAminoMsg): QueryGetMemberSeasonSnapshotResponse {
    return QueryGetMemberSeasonSnapshotResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberSeasonSnapshotResponseProtoMsg): QueryGetMemberSeasonSnapshotResponse {
    return QueryGetMemberSeasonSnapshotResponse.decode(message.value);
  },
  toProto(message: QueryGetMemberSeasonSnapshotResponse): Uint8Array {
    return QueryGetMemberSeasonSnapshotResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberSeasonSnapshotResponse): QueryGetMemberSeasonSnapshotResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetMemberSeasonSnapshotResponse",
      value: QueryGetMemberSeasonSnapshotResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberSeasonSnapshotRequest(): QueryAllMemberSeasonSnapshotRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllMemberSeasonSnapshotRequest defines the QueryAllMemberSeasonSnapshotRequest message.
 * @name QueryAllMemberSeasonSnapshotRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberSeasonSnapshotRequest
 */
export const QueryAllMemberSeasonSnapshotRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberSeasonSnapshotRequest",
  encode(message: QueryAllMemberSeasonSnapshotRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberSeasonSnapshotRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberSeasonSnapshotRequest();
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
  fromPartial(object: DeepPartial<QueryAllMemberSeasonSnapshotRequest>): QueryAllMemberSeasonSnapshotRequest {
    const message = createBaseQueryAllMemberSeasonSnapshotRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberSeasonSnapshotRequestAmino): QueryAllMemberSeasonSnapshotRequest {
    const message = createBaseQueryAllMemberSeasonSnapshotRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberSeasonSnapshotRequest): QueryAllMemberSeasonSnapshotRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberSeasonSnapshotRequestAminoMsg): QueryAllMemberSeasonSnapshotRequest {
    return QueryAllMemberSeasonSnapshotRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberSeasonSnapshotRequestProtoMsg): QueryAllMemberSeasonSnapshotRequest {
    return QueryAllMemberSeasonSnapshotRequest.decode(message.value);
  },
  toProto(message: QueryAllMemberSeasonSnapshotRequest): Uint8Array {
    return QueryAllMemberSeasonSnapshotRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberSeasonSnapshotRequest): QueryAllMemberSeasonSnapshotRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllMemberSeasonSnapshotRequest",
      value: QueryAllMemberSeasonSnapshotRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberSeasonSnapshotResponse(): QueryAllMemberSeasonSnapshotResponse {
  return {
    memberSeasonSnapshot: [],
    pagination: undefined
  };
}
/**
 * QueryAllMemberSeasonSnapshotResponse defines the QueryAllMemberSeasonSnapshotResponse message.
 * @name QueryAllMemberSeasonSnapshotResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberSeasonSnapshotResponse
 */
export const QueryAllMemberSeasonSnapshotResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberSeasonSnapshotResponse",
  encode(message: QueryAllMemberSeasonSnapshotResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.memberSeasonSnapshot) {
      MemberSeasonSnapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberSeasonSnapshotResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberSeasonSnapshotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberSeasonSnapshot.push(MemberSeasonSnapshot.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllMemberSeasonSnapshotResponse>): QueryAllMemberSeasonSnapshotResponse {
    const message = createBaseQueryAllMemberSeasonSnapshotResponse();
    message.memberSeasonSnapshot = object.memberSeasonSnapshot?.map(e => MemberSeasonSnapshot.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberSeasonSnapshotResponseAmino): QueryAllMemberSeasonSnapshotResponse {
    const message = createBaseQueryAllMemberSeasonSnapshotResponse();
    message.memberSeasonSnapshot = object.member_season_snapshot?.map(e => MemberSeasonSnapshot.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberSeasonSnapshotResponse): QueryAllMemberSeasonSnapshotResponseAmino {
    const obj: any = {};
    if (message.memberSeasonSnapshot) {
      obj.member_season_snapshot = message.memberSeasonSnapshot.map(e => e ? MemberSeasonSnapshot.toAmino(e) : undefined);
    } else {
      obj.member_season_snapshot = message.memberSeasonSnapshot;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberSeasonSnapshotResponseAminoMsg): QueryAllMemberSeasonSnapshotResponse {
    return QueryAllMemberSeasonSnapshotResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberSeasonSnapshotResponseProtoMsg): QueryAllMemberSeasonSnapshotResponse {
    return QueryAllMemberSeasonSnapshotResponse.decode(message.value);
  },
  toProto(message: QueryAllMemberSeasonSnapshotResponse): Uint8Array {
    return QueryAllMemberSeasonSnapshotResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberSeasonSnapshotResponse): QueryAllMemberSeasonSnapshotResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllMemberSeasonSnapshotResponse",
      value: QueryAllMemberSeasonSnapshotResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberProfileRequest(): QueryGetMemberProfileRequest {
  return {
    address: ""
  };
}
/**
 * QueryGetMemberProfileRequest defines the QueryGetMemberProfileRequest message.
 * @name QueryGetMemberProfileRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberProfileRequest
 */
export const QueryGetMemberProfileRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberProfileRequest",
  encode(message: QueryGetMemberProfileRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberProfileRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberProfileRequest();
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
  fromPartial(object: DeepPartial<QueryGetMemberProfileRequest>): QueryGetMemberProfileRequest {
    const message = createBaseQueryGetMemberProfileRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetMemberProfileRequestAmino): QueryGetMemberProfileRequest {
    const message = createBaseQueryGetMemberProfileRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryGetMemberProfileRequest): QueryGetMemberProfileRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberProfileRequestAminoMsg): QueryGetMemberProfileRequest {
    return QueryGetMemberProfileRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberProfileRequestProtoMsg): QueryGetMemberProfileRequest {
    return QueryGetMemberProfileRequest.decode(message.value);
  },
  toProto(message: QueryGetMemberProfileRequest): Uint8Array {
    return QueryGetMemberProfileRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberProfileRequest): QueryGetMemberProfileRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetMemberProfileRequest",
      value: QueryGetMemberProfileRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberProfileResponse(): QueryGetMemberProfileResponse {
  return {
    memberProfile: MemberProfile.fromPartial({})
  };
}
/**
 * QueryGetMemberProfileResponse defines the QueryGetMemberProfileResponse message.
 * @name QueryGetMemberProfileResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberProfileResponse
 */
export const QueryGetMemberProfileResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberProfileResponse",
  encode(message: QueryGetMemberProfileResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberProfile !== undefined) {
      MemberProfile.encode(message.memberProfile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberProfileResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberProfile = MemberProfile.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberProfileResponse>): QueryGetMemberProfileResponse {
    const message = createBaseQueryGetMemberProfileResponse();
    message.memberProfile = object.memberProfile !== undefined && object.memberProfile !== null ? MemberProfile.fromPartial(object.memberProfile) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMemberProfileResponseAmino): QueryGetMemberProfileResponse {
    const message = createBaseQueryGetMemberProfileResponse();
    if (object.member_profile !== undefined && object.member_profile !== null) {
      message.memberProfile = MemberProfile.fromAmino(object.member_profile);
    }
    return message;
  },
  toAmino(message: QueryGetMemberProfileResponse): QueryGetMemberProfileResponseAmino {
    const obj: any = {};
    obj.member_profile = message.memberProfile ? MemberProfile.toAmino(message.memberProfile) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberProfileResponseAminoMsg): QueryGetMemberProfileResponse {
    return QueryGetMemberProfileResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberProfileResponseProtoMsg): QueryGetMemberProfileResponse {
    return QueryGetMemberProfileResponse.decode(message.value);
  },
  toProto(message: QueryGetMemberProfileResponse): Uint8Array {
    return QueryGetMemberProfileResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberProfileResponse): QueryGetMemberProfileResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetMemberProfileResponse",
      value: QueryGetMemberProfileResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberProfileRequest(): QueryAllMemberProfileRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllMemberProfileRequest defines the QueryAllMemberProfileRequest message.
 * @name QueryAllMemberProfileRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberProfileRequest
 */
export const QueryAllMemberProfileRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberProfileRequest",
  encode(message: QueryAllMemberProfileRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberProfileRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberProfileRequest();
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
  fromPartial(object: DeepPartial<QueryAllMemberProfileRequest>): QueryAllMemberProfileRequest {
    const message = createBaseQueryAllMemberProfileRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberProfileRequestAmino): QueryAllMemberProfileRequest {
    const message = createBaseQueryAllMemberProfileRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberProfileRequest): QueryAllMemberProfileRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberProfileRequestAminoMsg): QueryAllMemberProfileRequest {
    return QueryAllMemberProfileRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberProfileRequestProtoMsg): QueryAllMemberProfileRequest {
    return QueryAllMemberProfileRequest.decode(message.value);
  },
  toProto(message: QueryAllMemberProfileRequest): Uint8Array {
    return QueryAllMemberProfileRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberProfileRequest): QueryAllMemberProfileRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllMemberProfileRequest",
      value: QueryAllMemberProfileRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberProfileResponse(): QueryAllMemberProfileResponse {
  return {
    memberProfile: [],
    pagination: undefined
  };
}
/**
 * QueryAllMemberProfileResponse defines the QueryAllMemberProfileResponse message.
 * @name QueryAllMemberProfileResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberProfileResponse
 */
export const QueryAllMemberProfileResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberProfileResponse",
  encode(message: QueryAllMemberProfileResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.memberProfile) {
      MemberProfile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberProfileResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberProfile.push(MemberProfile.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllMemberProfileResponse>): QueryAllMemberProfileResponse {
    const message = createBaseQueryAllMemberProfileResponse();
    message.memberProfile = object.memberProfile?.map(e => MemberProfile.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberProfileResponseAmino): QueryAllMemberProfileResponse {
    const message = createBaseQueryAllMemberProfileResponse();
    message.memberProfile = object.member_profile?.map(e => MemberProfile.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberProfileResponse): QueryAllMemberProfileResponseAmino {
    const obj: any = {};
    if (message.memberProfile) {
      obj.member_profile = message.memberProfile.map(e => e ? MemberProfile.toAmino(e) : undefined);
    } else {
      obj.member_profile = message.memberProfile;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberProfileResponseAminoMsg): QueryAllMemberProfileResponse {
    return QueryAllMemberProfileResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberProfileResponseProtoMsg): QueryAllMemberProfileResponse {
    return QueryAllMemberProfileResponse.decode(message.value);
  },
  toProto(message: QueryAllMemberProfileResponse): Uint8Array {
    return QueryAllMemberProfileResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberProfileResponse): QueryAllMemberProfileResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllMemberProfileResponse",
      value: QueryAllMemberProfileResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberRegistrationRequest(): QueryGetMemberRegistrationRequest {
  return {
    member: ""
  };
}
/**
 * QueryGetMemberRegistrationRequest defines the QueryGetMemberRegistrationRequest message.
 * @name QueryGetMemberRegistrationRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberRegistrationRequest
 */
export const QueryGetMemberRegistrationRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberRegistrationRequest",
  encode(message: QueryGetMemberRegistrationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberRegistrationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberRegistrationRequest();
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
  fromPartial(object: DeepPartial<QueryGetMemberRegistrationRequest>): QueryGetMemberRegistrationRequest {
    const message = createBaseQueryGetMemberRegistrationRequest();
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: QueryGetMemberRegistrationRequestAmino): QueryGetMemberRegistrationRequest {
    const message = createBaseQueryGetMemberRegistrationRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: QueryGetMemberRegistrationRequest): QueryGetMemberRegistrationRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberRegistrationRequestAminoMsg): QueryGetMemberRegistrationRequest {
    return QueryGetMemberRegistrationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberRegistrationRequestProtoMsg): QueryGetMemberRegistrationRequest {
    return QueryGetMemberRegistrationRequest.decode(message.value);
  },
  toProto(message: QueryGetMemberRegistrationRequest): Uint8Array {
    return QueryGetMemberRegistrationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberRegistrationRequest): QueryGetMemberRegistrationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetMemberRegistrationRequest",
      value: QueryGetMemberRegistrationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberRegistrationResponse(): QueryGetMemberRegistrationResponse {
  return {
    memberRegistration: MemberRegistration.fromPartial({})
  };
}
/**
 * QueryGetMemberRegistrationResponse defines the QueryGetMemberRegistrationResponse message.
 * @name QueryGetMemberRegistrationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberRegistrationResponse
 */
export const QueryGetMemberRegistrationResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberRegistrationResponse",
  encode(message: QueryGetMemberRegistrationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberRegistration !== undefined) {
      MemberRegistration.encode(message.memberRegistration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberRegistrationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberRegistrationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberRegistration = MemberRegistration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberRegistrationResponse>): QueryGetMemberRegistrationResponse {
    const message = createBaseQueryGetMemberRegistrationResponse();
    message.memberRegistration = object.memberRegistration !== undefined && object.memberRegistration !== null ? MemberRegistration.fromPartial(object.memberRegistration) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMemberRegistrationResponseAmino): QueryGetMemberRegistrationResponse {
    const message = createBaseQueryGetMemberRegistrationResponse();
    if (object.member_registration !== undefined && object.member_registration !== null) {
      message.memberRegistration = MemberRegistration.fromAmino(object.member_registration);
    }
    return message;
  },
  toAmino(message: QueryGetMemberRegistrationResponse): QueryGetMemberRegistrationResponseAmino {
    const obj: any = {};
    obj.member_registration = message.memberRegistration ? MemberRegistration.toAmino(message.memberRegistration) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberRegistrationResponseAminoMsg): QueryGetMemberRegistrationResponse {
    return QueryGetMemberRegistrationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberRegistrationResponseProtoMsg): QueryGetMemberRegistrationResponse {
    return QueryGetMemberRegistrationResponse.decode(message.value);
  },
  toProto(message: QueryGetMemberRegistrationResponse): Uint8Array {
    return QueryGetMemberRegistrationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberRegistrationResponse): QueryGetMemberRegistrationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetMemberRegistrationResponse",
      value: QueryGetMemberRegistrationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberRegistrationRequest(): QueryAllMemberRegistrationRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllMemberRegistrationRequest defines the QueryAllMemberRegistrationRequest message.
 * @name QueryAllMemberRegistrationRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberRegistrationRequest
 */
export const QueryAllMemberRegistrationRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberRegistrationRequest",
  encode(message: QueryAllMemberRegistrationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberRegistrationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberRegistrationRequest();
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
  fromPartial(object: DeepPartial<QueryAllMemberRegistrationRequest>): QueryAllMemberRegistrationRequest {
    const message = createBaseQueryAllMemberRegistrationRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberRegistrationRequestAmino): QueryAllMemberRegistrationRequest {
    const message = createBaseQueryAllMemberRegistrationRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberRegistrationRequest): QueryAllMemberRegistrationRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberRegistrationRequestAminoMsg): QueryAllMemberRegistrationRequest {
    return QueryAllMemberRegistrationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberRegistrationRequestProtoMsg): QueryAllMemberRegistrationRequest {
    return QueryAllMemberRegistrationRequest.decode(message.value);
  },
  toProto(message: QueryAllMemberRegistrationRequest): Uint8Array {
    return QueryAllMemberRegistrationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberRegistrationRequest): QueryAllMemberRegistrationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllMemberRegistrationRequest",
      value: QueryAllMemberRegistrationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberRegistrationResponse(): QueryAllMemberRegistrationResponse {
  return {
    memberRegistration: [],
    pagination: undefined
  };
}
/**
 * QueryAllMemberRegistrationResponse defines the QueryAllMemberRegistrationResponse message.
 * @name QueryAllMemberRegistrationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberRegistrationResponse
 */
export const QueryAllMemberRegistrationResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberRegistrationResponse",
  encode(message: QueryAllMemberRegistrationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.memberRegistration) {
      MemberRegistration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberRegistrationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberRegistrationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberRegistration.push(MemberRegistration.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllMemberRegistrationResponse>): QueryAllMemberRegistrationResponse {
    const message = createBaseQueryAllMemberRegistrationResponse();
    message.memberRegistration = object.memberRegistration?.map(e => MemberRegistration.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberRegistrationResponseAmino): QueryAllMemberRegistrationResponse {
    const message = createBaseQueryAllMemberRegistrationResponse();
    message.memberRegistration = object.member_registration?.map(e => MemberRegistration.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberRegistrationResponse): QueryAllMemberRegistrationResponseAmino {
    const obj: any = {};
    if (message.memberRegistration) {
      obj.member_registration = message.memberRegistration.map(e => e ? MemberRegistration.toAmino(e) : undefined);
    } else {
      obj.member_registration = message.memberRegistration;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberRegistrationResponseAminoMsg): QueryAllMemberRegistrationResponse {
    return QueryAllMemberRegistrationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberRegistrationResponseProtoMsg): QueryAllMemberRegistrationResponse {
    return QueryAllMemberRegistrationResponse.decode(message.value);
  },
  toProto(message: QueryAllMemberRegistrationResponse): Uint8Array {
    return QueryAllMemberRegistrationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberRegistrationResponse): QueryAllMemberRegistrationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllMemberRegistrationResponse",
      value: QueryAllMemberRegistrationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetAchievementRequest(): QueryGetAchievementRequest {
  return {
    achievementId: ""
  };
}
/**
 * QueryGetAchievementRequest defines the QueryGetAchievementRequest message.
 * @name QueryGetAchievementRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetAchievementRequest
 */
export const QueryGetAchievementRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetAchievementRequest",
  encode(message: QueryGetAchievementRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.achievementId !== "") {
      writer.uint32(10).string(message.achievementId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAchievementRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAchievementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievementId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetAchievementRequest>): QueryGetAchievementRequest {
    const message = createBaseQueryGetAchievementRequest();
    message.achievementId = object.achievementId ?? "";
    return message;
  },
  fromAmino(object: QueryGetAchievementRequestAmino): QueryGetAchievementRequest {
    const message = createBaseQueryGetAchievementRequest();
    if (object.achievement_id !== undefined && object.achievement_id !== null) {
      message.achievementId = object.achievement_id;
    }
    return message;
  },
  toAmino(message: QueryGetAchievementRequest): QueryGetAchievementRequestAmino {
    const obj: any = {};
    obj.achievement_id = message.achievementId === "" ? undefined : message.achievementId;
    return obj;
  },
  fromAminoMsg(object: QueryGetAchievementRequestAminoMsg): QueryGetAchievementRequest {
    return QueryGetAchievementRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAchievementRequestProtoMsg): QueryGetAchievementRequest {
    return QueryGetAchievementRequest.decode(message.value);
  },
  toProto(message: QueryGetAchievementRequest): Uint8Array {
    return QueryGetAchievementRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAchievementRequest): QueryGetAchievementRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetAchievementRequest",
      value: QueryGetAchievementRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAchievementResponse(): QueryGetAchievementResponse {
  return {
    achievement: Achievement.fromPartial({})
  };
}
/**
 * QueryGetAchievementResponse defines the QueryGetAchievementResponse message.
 * @name QueryGetAchievementResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetAchievementResponse
 */
export const QueryGetAchievementResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetAchievementResponse",
  encode(message: QueryGetAchievementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.achievement !== undefined) {
      Achievement.encode(message.achievement, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAchievementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAchievementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievement = Achievement.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetAchievementResponse>): QueryGetAchievementResponse {
    const message = createBaseQueryGetAchievementResponse();
    message.achievement = object.achievement !== undefined && object.achievement !== null ? Achievement.fromPartial(object.achievement) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAchievementResponseAmino): QueryGetAchievementResponse {
    const message = createBaseQueryGetAchievementResponse();
    if (object.achievement !== undefined && object.achievement !== null) {
      message.achievement = Achievement.fromAmino(object.achievement);
    }
    return message;
  },
  toAmino(message: QueryGetAchievementResponse): QueryGetAchievementResponseAmino {
    const obj: any = {};
    obj.achievement = message.achievement ? Achievement.toAmino(message.achievement) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAchievementResponseAminoMsg): QueryGetAchievementResponse {
    return QueryGetAchievementResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAchievementResponseProtoMsg): QueryGetAchievementResponse {
    return QueryGetAchievementResponse.decode(message.value);
  },
  toProto(message: QueryGetAchievementResponse): Uint8Array {
    return QueryGetAchievementResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAchievementResponse): QueryGetAchievementResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetAchievementResponse",
      value: QueryGetAchievementResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAchievementRequest(): QueryAllAchievementRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllAchievementRequest defines the QueryAllAchievementRequest message.
 * @name QueryAllAchievementRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllAchievementRequest
 */
export const QueryAllAchievementRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllAchievementRequest",
  encode(message: QueryAllAchievementRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAchievementRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAchievementRequest();
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
  fromPartial(object: DeepPartial<QueryAllAchievementRequest>): QueryAllAchievementRequest {
    const message = createBaseQueryAllAchievementRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAchievementRequestAmino): QueryAllAchievementRequest {
    const message = createBaseQueryAllAchievementRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAchievementRequest): QueryAllAchievementRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAchievementRequestAminoMsg): QueryAllAchievementRequest {
    return QueryAllAchievementRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAchievementRequestProtoMsg): QueryAllAchievementRequest {
    return QueryAllAchievementRequest.decode(message.value);
  },
  toProto(message: QueryAllAchievementRequest): Uint8Array {
    return QueryAllAchievementRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAchievementRequest): QueryAllAchievementRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllAchievementRequest",
      value: QueryAllAchievementRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAchievementResponse(): QueryAllAchievementResponse {
  return {
    achievement: [],
    pagination: undefined
  };
}
/**
 * QueryAllAchievementResponse defines the QueryAllAchievementResponse message.
 * @name QueryAllAchievementResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllAchievementResponse
 */
export const QueryAllAchievementResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllAchievementResponse",
  encode(message: QueryAllAchievementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.achievement) {
      Achievement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAchievementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAchievementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievement.push(Achievement.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllAchievementResponse>): QueryAllAchievementResponse {
    const message = createBaseQueryAllAchievementResponse();
    message.achievement = object.achievement?.map(e => Achievement.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAchievementResponseAmino): QueryAllAchievementResponse {
    const message = createBaseQueryAllAchievementResponse();
    message.achievement = object.achievement?.map(e => Achievement.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAchievementResponse): QueryAllAchievementResponseAmino {
    const obj: any = {};
    if (message.achievement) {
      obj.achievement = message.achievement.map(e => e ? Achievement.toAmino(e) : undefined);
    } else {
      obj.achievement = message.achievement;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAchievementResponseAminoMsg): QueryAllAchievementResponse {
    return QueryAllAchievementResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAchievementResponseProtoMsg): QueryAllAchievementResponse {
    return QueryAllAchievementResponse.decode(message.value);
  },
  toProto(message: QueryAllAchievementResponse): Uint8Array {
    return QueryAllAchievementResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAchievementResponse): QueryAllAchievementResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllAchievementResponse",
      value: QueryAllAchievementResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTitleRequest(): QueryGetTitleRequest {
  return {
    titleId: ""
  };
}
/**
 * QueryGetTitleRequest defines the QueryGetTitleRequest message.
 * @name QueryGetTitleRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetTitleRequest
 */
export const QueryGetTitleRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetTitleRequest",
  encode(message: QueryGetTitleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.titleId !== "") {
      writer.uint32(10).string(message.titleId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTitleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTitleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.titleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTitleRequest>): QueryGetTitleRequest {
    const message = createBaseQueryGetTitleRequest();
    message.titleId = object.titleId ?? "";
    return message;
  },
  fromAmino(object: QueryGetTitleRequestAmino): QueryGetTitleRequest {
    const message = createBaseQueryGetTitleRequest();
    if (object.title_id !== undefined && object.title_id !== null) {
      message.titleId = object.title_id;
    }
    return message;
  },
  toAmino(message: QueryGetTitleRequest): QueryGetTitleRequestAmino {
    const obj: any = {};
    obj.title_id = message.titleId === "" ? undefined : message.titleId;
    return obj;
  },
  fromAminoMsg(object: QueryGetTitleRequestAminoMsg): QueryGetTitleRequest {
    return QueryGetTitleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTitleRequestProtoMsg): QueryGetTitleRequest {
    return QueryGetTitleRequest.decode(message.value);
  },
  toProto(message: QueryGetTitleRequest): Uint8Array {
    return QueryGetTitleRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTitleRequest): QueryGetTitleRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetTitleRequest",
      value: QueryGetTitleRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTitleResponse(): QueryGetTitleResponse {
  return {
    title: Title.fromPartial({})
  };
}
/**
 * QueryGetTitleResponse defines the QueryGetTitleResponse message.
 * @name QueryGetTitleResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetTitleResponse
 */
export const QueryGetTitleResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetTitleResponse",
  encode(message: QueryGetTitleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== undefined) {
      Title.encode(message.title, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTitleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTitleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = Title.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTitleResponse>): QueryGetTitleResponse {
    const message = createBaseQueryGetTitleResponse();
    message.title = object.title !== undefined && object.title !== null ? Title.fromPartial(object.title) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTitleResponseAmino): QueryGetTitleResponse {
    const message = createBaseQueryGetTitleResponse();
    if (object.title !== undefined && object.title !== null) {
      message.title = Title.fromAmino(object.title);
    }
    return message;
  },
  toAmino(message: QueryGetTitleResponse): QueryGetTitleResponseAmino {
    const obj: any = {};
    obj.title = message.title ? Title.toAmino(message.title) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTitleResponseAminoMsg): QueryGetTitleResponse {
    return QueryGetTitleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTitleResponseProtoMsg): QueryGetTitleResponse {
    return QueryGetTitleResponse.decode(message.value);
  },
  toProto(message: QueryGetTitleResponse): Uint8Array {
    return QueryGetTitleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTitleResponse): QueryGetTitleResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetTitleResponse",
      value: QueryGetTitleResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTitleRequest(): QueryAllTitleRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllTitleRequest defines the QueryAllTitleRequest message.
 * @name QueryAllTitleRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllTitleRequest
 */
export const QueryAllTitleRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllTitleRequest",
  encode(message: QueryAllTitleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTitleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTitleRequest();
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
  fromPartial(object: DeepPartial<QueryAllTitleRequest>): QueryAllTitleRequest {
    const message = createBaseQueryAllTitleRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTitleRequestAmino): QueryAllTitleRequest {
    const message = createBaseQueryAllTitleRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTitleRequest): QueryAllTitleRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTitleRequestAminoMsg): QueryAllTitleRequest {
    return QueryAllTitleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTitleRequestProtoMsg): QueryAllTitleRequest {
    return QueryAllTitleRequest.decode(message.value);
  },
  toProto(message: QueryAllTitleRequest): Uint8Array {
    return QueryAllTitleRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTitleRequest): QueryAllTitleRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllTitleRequest",
      value: QueryAllTitleRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTitleResponse(): QueryAllTitleResponse {
  return {
    title: [],
    pagination: undefined
  };
}
/**
 * QueryAllTitleResponse defines the QueryAllTitleResponse message.
 * @name QueryAllTitleResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllTitleResponse
 */
export const QueryAllTitleResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllTitleResponse",
  encode(message: QueryAllTitleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.title) {
      Title.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTitleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTitleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title.push(Title.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllTitleResponse>): QueryAllTitleResponse {
    const message = createBaseQueryAllTitleResponse();
    message.title = object.title?.map(e => Title.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTitleResponseAmino): QueryAllTitleResponse {
    const message = createBaseQueryAllTitleResponse();
    message.title = object.title?.map(e => Title.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTitleResponse): QueryAllTitleResponseAmino {
    const obj: any = {};
    if (message.title) {
      obj.title = message.title.map(e => e ? Title.toAmino(e) : undefined);
    } else {
      obj.title = message.title;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTitleResponseAminoMsg): QueryAllTitleResponse {
    return QueryAllTitleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTitleResponseProtoMsg): QueryAllTitleResponse {
    return QueryAllTitleResponse.decode(message.value);
  },
  toProto(message: QueryAllTitleResponse): Uint8Array {
    return QueryAllTitleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTitleResponse): QueryAllTitleResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllTitleResponse",
      value: QueryAllTitleResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetSeasonTitleEligibilityRequest(): QueryGetSeasonTitleEligibilityRequest {
  return {
    titleSeason: BigInt(0)
  };
}
/**
 * QueryGetSeasonTitleEligibilityRequest defines the QueryGetSeasonTitleEligibilityRequest message.
 * @name QueryGetSeasonTitleEligibilityRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonTitleEligibilityRequest
 */
export const QueryGetSeasonTitleEligibilityRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonTitleEligibilityRequest",
  encode(message: QueryGetSeasonTitleEligibilityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.titleSeason !== BigInt(0)) {
      writer.uint32(8).uint64(message.titleSeason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSeasonTitleEligibilityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSeasonTitleEligibilityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.titleSeason = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSeasonTitleEligibilityRequest>): QueryGetSeasonTitleEligibilityRequest {
    const message = createBaseQueryGetSeasonTitleEligibilityRequest();
    message.titleSeason = object.titleSeason !== undefined && object.titleSeason !== null ? BigInt(object.titleSeason.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetSeasonTitleEligibilityRequestAmino): QueryGetSeasonTitleEligibilityRequest {
    const message = createBaseQueryGetSeasonTitleEligibilityRequest();
    if (object.title_season !== undefined && object.title_season !== null) {
      message.titleSeason = BigInt(object.title_season);
    }
    return message;
  },
  toAmino(message: QueryGetSeasonTitleEligibilityRequest): QueryGetSeasonTitleEligibilityRequestAmino {
    const obj: any = {};
    obj.title_season = message.titleSeason !== BigInt(0) ? message.titleSeason?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSeasonTitleEligibilityRequestAminoMsg): QueryGetSeasonTitleEligibilityRequest {
    return QueryGetSeasonTitleEligibilityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSeasonTitleEligibilityRequestProtoMsg): QueryGetSeasonTitleEligibilityRequest {
    return QueryGetSeasonTitleEligibilityRequest.decode(message.value);
  },
  toProto(message: QueryGetSeasonTitleEligibilityRequest): Uint8Array {
    return QueryGetSeasonTitleEligibilityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSeasonTitleEligibilityRequest): QueryGetSeasonTitleEligibilityRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetSeasonTitleEligibilityRequest",
      value: QueryGetSeasonTitleEligibilityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetSeasonTitleEligibilityResponse(): QueryGetSeasonTitleEligibilityResponse {
  return {
    seasonTitleEligibility: SeasonTitleEligibility.fromPartial({})
  };
}
/**
 * QueryGetSeasonTitleEligibilityResponse defines the QueryGetSeasonTitleEligibilityResponse message.
 * @name QueryGetSeasonTitleEligibilityResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetSeasonTitleEligibilityResponse
 */
export const QueryGetSeasonTitleEligibilityResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetSeasonTitleEligibilityResponse",
  encode(message: QueryGetSeasonTitleEligibilityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seasonTitleEligibility !== undefined) {
      SeasonTitleEligibility.encode(message.seasonTitleEligibility, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSeasonTitleEligibilityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSeasonTitleEligibilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seasonTitleEligibility = SeasonTitleEligibility.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSeasonTitleEligibilityResponse>): QueryGetSeasonTitleEligibilityResponse {
    const message = createBaseQueryGetSeasonTitleEligibilityResponse();
    message.seasonTitleEligibility = object.seasonTitleEligibility !== undefined && object.seasonTitleEligibility !== null ? SeasonTitleEligibility.fromPartial(object.seasonTitleEligibility) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSeasonTitleEligibilityResponseAmino): QueryGetSeasonTitleEligibilityResponse {
    const message = createBaseQueryGetSeasonTitleEligibilityResponse();
    if (object.season_title_eligibility !== undefined && object.season_title_eligibility !== null) {
      message.seasonTitleEligibility = SeasonTitleEligibility.fromAmino(object.season_title_eligibility);
    }
    return message;
  },
  toAmino(message: QueryGetSeasonTitleEligibilityResponse): QueryGetSeasonTitleEligibilityResponseAmino {
    const obj: any = {};
    obj.season_title_eligibility = message.seasonTitleEligibility ? SeasonTitleEligibility.toAmino(message.seasonTitleEligibility) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSeasonTitleEligibilityResponseAminoMsg): QueryGetSeasonTitleEligibilityResponse {
    return QueryGetSeasonTitleEligibilityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSeasonTitleEligibilityResponseProtoMsg): QueryGetSeasonTitleEligibilityResponse {
    return QueryGetSeasonTitleEligibilityResponse.decode(message.value);
  },
  toProto(message: QueryGetSeasonTitleEligibilityResponse): Uint8Array {
    return QueryGetSeasonTitleEligibilityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSeasonTitleEligibilityResponse): QueryGetSeasonTitleEligibilityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetSeasonTitleEligibilityResponse",
      value: QueryGetSeasonTitleEligibilityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllSeasonTitleEligibilityRequest(): QueryAllSeasonTitleEligibilityRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllSeasonTitleEligibilityRequest defines the QueryAllSeasonTitleEligibilityRequest message.
 * @name QueryAllSeasonTitleEligibilityRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllSeasonTitleEligibilityRequest
 */
export const QueryAllSeasonTitleEligibilityRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllSeasonTitleEligibilityRequest",
  encode(message: QueryAllSeasonTitleEligibilityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSeasonTitleEligibilityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSeasonTitleEligibilityRequest();
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
  fromPartial(object: DeepPartial<QueryAllSeasonTitleEligibilityRequest>): QueryAllSeasonTitleEligibilityRequest {
    const message = createBaseQueryAllSeasonTitleEligibilityRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSeasonTitleEligibilityRequestAmino): QueryAllSeasonTitleEligibilityRequest {
    const message = createBaseQueryAllSeasonTitleEligibilityRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSeasonTitleEligibilityRequest): QueryAllSeasonTitleEligibilityRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSeasonTitleEligibilityRequestAminoMsg): QueryAllSeasonTitleEligibilityRequest {
    return QueryAllSeasonTitleEligibilityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSeasonTitleEligibilityRequestProtoMsg): QueryAllSeasonTitleEligibilityRequest {
    return QueryAllSeasonTitleEligibilityRequest.decode(message.value);
  },
  toProto(message: QueryAllSeasonTitleEligibilityRequest): Uint8Array {
    return QueryAllSeasonTitleEligibilityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSeasonTitleEligibilityRequest): QueryAllSeasonTitleEligibilityRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllSeasonTitleEligibilityRequest",
      value: QueryAllSeasonTitleEligibilityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllSeasonTitleEligibilityResponse(): QueryAllSeasonTitleEligibilityResponse {
  return {
    seasonTitleEligibility: [],
    pagination: undefined
  };
}
/**
 * QueryAllSeasonTitleEligibilityResponse defines the QueryAllSeasonTitleEligibilityResponse message.
 * @name QueryAllSeasonTitleEligibilityResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllSeasonTitleEligibilityResponse
 */
export const QueryAllSeasonTitleEligibilityResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllSeasonTitleEligibilityResponse",
  encode(message: QueryAllSeasonTitleEligibilityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.seasonTitleEligibility) {
      SeasonTitleEligibility.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSeasonTitleEligibilityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSeasonTitleEligibilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seasonTitleEligibility.push(SeasonTitleEligibility.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllSeasonTitleEligibilityResponse>): QueryAllSeasonTitleEligibilityResponse {
    const message = createBaseQueryAllSeasonTitleEligibilityResponse();
    message.seasonTitleEligibility = object.seasonTitleEligibility?.map(e => SeasonTitleEligibility.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllSeasonTitleEligibilityResponseAmino): QueryAllSeasonTitleEligibilityResponse {
    const message = createBaseQueryAllSeasonTitleEligibilityResponse();
    message.seasonTitleEligibility = object.season_title_eligibility?.map(e => SeasonTitleEligibility.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllSeasonTitleEligibilityResponse): QueryAllSeasonTitleEligibilityResponseAmino {
    const obj: any = {};
    if (message.seasonTitleEligibility) {
      obj.season_title_eligibility = message.seasonTitleEligibility.map(e => e ? SeasonTitleEligibility.toAmino(e) : undefined);
    } else {
      obj.season_title_eligibility = message.seasonTitleEligibility;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllSeasonTitleEligibilityResponseAminoMsg): QueryAllSeasonTitleEligibilityResponse {
    return QueryAllSeasonTitleEligibilityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllSeasonTitleEligibilityResponseProtoMsg): QueryAllSeasonTitleEligibilityResponse {
    return QueryAllSeasonTitleEligibilityResponse.decode(message.value);
  },
  toProto(message: QueryAllSeasonTitleEligibilityResponse): Uint8Array {
    return QueryAllSeasonTitleEligibilityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllSeasonTitleEligibilityResponse): QueryAllSeasonTitleEligibilityResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllSeasonTitleEligibilityResponse",
      value: QueryAllSeasonTitleEligibilityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetGuildRequest(): QueryGetGuildRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetGuildRequest defines the QueryGetGuildRequest message.
 * @name QueryGetGuildRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildRequest
 */
export const QueryGetGuildRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetGuildRequest",
  encode(message: QueryGetGuildRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGuildRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuildRequest();
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
  fromPartial(object: DeepPartial<QueryGetGuildRequest>): QueryGetGuildRequest {
    const message = createBaseQueryGetGuildRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetGuildRequestAmino): QueryGetGuildRequest {
    const message = createBaseQueryGetGuildRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetGuildRequest): QueryGetGuildRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetGuildRequestAminoMsg): QueryGetGuildRequest {
    return QueryGetGuildRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGuildRequestProtoMsg): QueryGetGuildRequest {
    return QueryGetGuildRequest.decode(message.value);
  },
  toProto(message: QueryGetGuildRequest): Uint8Array {
    return QueryGetGuildRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGuildRequest): QueryGetGuildRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetGuildRequest",
      value: QueryGetGuildRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetGuildResponse(): QueryGetGuildResponse {
  return {
    guild: Guild.fromPartial({})
  };
}
/**
 * QueryGetGuildResponse defines the QueryGetGuildResponse message.
 * @name QueryGetGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildResponse
 */
export const QueryGetGuildResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetGuildResponse",
  encode(message: QueryGetGuildResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guild !== undefined) {
      Guild.encode(message.guild, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGuildResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guild = Guild.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetGuildResponse>): QueryGetGuildResponse {
    const message = createBaseQueryGetGuildResponse();
    message.guild = object.guild !== undefined && object.guild !== null ? Guild.fromPartial(object.guild) : undefined;
    return message;
  },
  fromAmino(object: QueryGetGuildResponseAmino): QueryGetGuildResponse {
    const message = createBaseQueryGetGuildResponse();
    if (object.guild !== undefined && object.guild !== null) {
      message.guild = Guild.fromAmino(object.guild);
    }
    return message;
  },
  toAmino(message: QueryGetGuildResponse): QueryGetGuildResponseAmino {
    const obj: any = {};
    obj.guild = message.guild ? Guild.toAmino(message.guild) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetGuildResponseAminoMsg): QueryGetGuildResponse {
    return QueryGetGuildResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGuildResponseProtoMsg): QueryGetGuildResponse {
    return QueryGetGuildResponse.decode(message.value);
  },
  toProto(message: QueryGetGuildResponse): Uint8Array {
    return QueryGetGuildResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGuildResponse): QueryGetGuildResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetGuildResponse",
      value: QueryGetGuildResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllGuildRequest(): QueryAllGuildRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllGuildRequest defines the QueryAllGuildRequest message.
 * @name QueryAllGuildRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildRequest
 */
export const QueryAllGuildRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllGuildRequest",
  encode(message: QueryAllGuildRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGuildRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuildRequest();
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
  fromPartial(object: DeepPartial<QueryAllGuildRequest>): QueryAllGuildRequest {
    const message = createBaseQueryAllGuildRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGuildRequestAmino): QueryAllGuildRequest {
    const message = createBaseQueryAllGuildRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGuildRequest): QueryAllGuildRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGuildRequestAminoMsg): QueryAllGuildRequest {
    return QueryAllGuildRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGuildRequestProtoMsg): QueryAllGuildRequest {
    return QueryAllGuildRequest.decode(message.value);
  },
  toProto(message: QueryAllGuildRequest): Uint8Array {
    return QueryAllGuildRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGuildRequest): QueryAllGuildRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllGuildRequest",
      value: QueryAllGuildRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllGuildResponse(): QueryAllGuildResponse {
  return {
    guild: [],
    pagination: undefined
  };
}
/**
 * QueryAllGuildResponse defines the QueryAllGuildResponse message.
 * @name QueryAllGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildResponse
 */
export const QueryAllGuildResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllGuildResponse",
  encode(message: QueryAllGuildResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.guild) {
      Guild.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGuildResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guild.push(Guild.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllGuildResponse>): QueryAllGuildResponse {
    const message = createBaseQueryAllGuildResponse();
    message.guild = object.guild?.map(e => Guild.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGuildResponseAmino): QueryAllGuildResponse {
    const message = createBaseQueryAllGuildResponse();
    message.guild = object.guild?.map(e => Guild.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGuildResponse): QueryAllGuildResponseAmino {
    const obj: any = {};
    if (message.guild) {
      obj.guild = message.guild.map(e => e ? Guild.toAmino(e) : undefined);
    } else {
      obj.guild = message.guild;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGuildResponseAminoMsg): QueryAllGuildResponse {
    return QueryAllGuildResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGuildResponseProtoMsg): QueryAllGuildResponse {
    return QueryAllGuildResponse.decode(message.value);
  },
  toProto(message: QueryAllGuildResponse): Uint8Array {
    return QueryAllGuildResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGuildResponse): QueryAllGuildResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllGuildResponse",
      value: QueryAllGuildResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetGuildMembershipRequest(): QueryGetGuildMembershipRequest {
  return {
    member: ""
  };
}
/**
 * QueryGetGuildMembershipRequest defines the QueryGetGuildMembershipRequest message.
 * @name QueryGetGuildMembershipRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildMembershipRequest
 */
export const QueryGetGuildMembershipRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetGuildMembershipRequest",
  encode(message: QueryGetGuildMembershipRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGuildMembershipRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuildMembershipRequest();
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
  fromPartial(object: DeepPartial<QueryGetGuildMembershipRequest>): QueryGetGuildMembershipRequest {
    const message = createBaseQueryGetGuildMembershipRequest();
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: QueryGetGuildMembershipRequestAmino): QueryGetGuildMembershipRequest {
    const message = createBaseQueryGetGuildMembershipRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: QueryGetGuildMembershipRequest): QueryGetGuildMembershipRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: QueryGetGuildMembershipRequestAminoMsg): QueryGetGuildMembershipRequest {
    return QueryGetGuildMembershipRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGuildMembershipRequestProtoMsg): QueryGetGuildMembershipRequest {
    return QueryGetGuildMembershipRequest.decode(message.value);
  },
  toProto(message: QueryGetGuildMembershipRequest): Uint8Array {
    return QueryGetGuildMembershipRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGuildMembershipRequest): QueryGetGuildMembershipRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetGuildMembershipRequest",
      value: QueryGetGuildMembershipRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetGuildMembershipResponse(): QueryGetGuildMembershipResponse {
  return {
    guildMembership: GuildMembership.fromPartial({})
  };
}
/**
 * QueryGetGuildMembershipResponse defines the QueryGetGuildMembershipResponse message.
 * @name QueryGetGuildMembershipResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildMembershipResponse
 */
export const QueryGetGuildMembershipResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetGuildMembershipResponse",
  encode(message: QueryGetGuildMembershipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guildMembership !== undefined) {
      GuildMembership.encode(message.guildMembership, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGuildMembershipResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuildMembershipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildMembership = GuildMembership.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetGuildMembershipResponse>): QueryGetGuildMembershipResponse {
    const message = createBaseQueryGetGuildMembershipResponse();
    message.guildMembership = object.guildMembership !== undefined && object.guildMembership !== null ? GuildMembership.fromPartial(object.guildMembership) : undefined;
    return message;
  },
  fromAmino(object: QueryGetGuildMembershipResponseAmino): QueryGetGuildMembershipResponse {
    const message = createBaseQueryGetGuildMembershipResponse();
    if (object.guild_membership !== undefined && object.guild_membership !== null) {
      message.guildMembership = GuildMembership.fromAmino(object.guild_membership);
    }
    return message;
  },
  toAmino(message: QueryGetGuildMembershipResponse): QueryGetGuildMembershipResponseAmino {
    const obj: any = {};
    obj.guild_membership = message.guildMembership ? GuildMembership.toAmino(message.guildMembership) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetGuildMembershipResponseAminoMsg): QueryGetGuildMembershipResponse {
    return QueryGetGuildMembershipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGuildMembershipResponseProtoMsg): QueryGetGuildMembershipResponse {
    return QueryGetGuildMembershipResponse.decode(message.value);
  },
  toProto(message: QueryGetGuildMembershipResponse): Uint8Array {
    return QueryGetGuildMembershipResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGuildMembershipResponse): QueryGetGuildMembershipResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetGuildMembershipResponse",
      value: QueryGetGuildMembershipResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllGuildMembershipRequest(): QueryAllGuildMembershipRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllGuildMembershipRequest defines the QueryAllGuildMembershipRequest message.
 * @name QueryAllGuildMembershipRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildMembershipRequest
 */
export const QueryAllGuildMembershipRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllGuildMembershipRequest",
  encode(message: QueryAllGuildMembershipRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGuildMembershipRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuildMembershipRequest();
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
  fromPartial(object: DeepPartial<QueryAllGuildMembershipRequest>): QueryAllGuildMembershipRequest {
    const message = createBaseQueryAllGuildMembershipRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGuildMembershipRequestAmino): QueryAllGuildMembershipRequest {
    const message = createBaseQueryAllGuildMembershipRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGuildMembershipRequest): QueryAllGuildMembershipRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGuildMembershipRequestAminoMsg): QueryAllGuildMembershipRequest {
    return QueryAllGuildMembershipRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGuildMembershipRequestProtoMsg): QueryAllGuildMembershipRequest {
    return QueryAllGuildMembershipRequest.decode(message.value);
  },
  toProto(message: QueryAllGuildMembershipRequest): Uint8Array {
    return QueryAllGuildMembershipRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGuildMembershipRequest): QueryAllGuildMembershipRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllGuildMembershipRequest",
      value: QueryAllGuildMembershipRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllGuildMembershipResponse(): QueryAllGuildMembershipResponse {
  return {
    guildMembership: [],
    pagination: undefined
  };
}
/**
 * QueryAllGuildMembershipResponse defines the QueryAllGuildMembershipResponse message.
 * @name QueryAllGuildMembershipResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildMembershipResponse
 */
export const QueryAllGuildMembershipResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllGuildMembershipResponse",
  encode(message: QueryAllGuildMembershipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.guildMembership) {
      GuildMembership.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGuildMembershipResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuildMembershipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildMembership.push(GuildMembership.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllGuildMembershipResponse>): QueryAllGuildMembershipResponse {
    const message = createBaseQueryAllGuildMembershipResponse();
    message.guildMembership = object.guildMembership?.map(e => GuildMembership.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGuildMembershipResponseAmino): QueryAllGuildMembershipResponse {
    const message = createBaseQueryAllGuildMembershipResponse();
    message.guildMembership = object.guild_membership?.map(e => GuildMembership.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGuildMembershipResponse): QueryAllGuildMembershipResponseAmino {
    const obj: any = {};
    if (message.guildMembership) {
      obj.guild_membership = message.guildMembership.map(e => e ? GuildMembership.toAmino(e) : undefined);
    } else {
      obj.guild_membership = message.guildMembership;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGuildMembershipResponseAminoMsg): QueryAllGuildMembershipResponse {
    return QueryAllGuildMembershipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGuildMembershipResponseProtoMsg): QueryAllGuildMembershipResponse {
    return QueryAllGuildMembershipResponse.decode(message.value);
  },
  toProto(message: QueryAllGuildMembershipResponse): Uint8Array {
    return QueryAllGuildMembershipResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGuildMembershipResponse): QueryAllGuildMembershipResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllGuildMembershipResponse",
      value: QueryAllGuildMembershipResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetGuildInviteRequest(): QueryGetGuildInviteRequest {
  return {
    guildInvitee: ""
  };
}
/**
 * QueryGetGuildInviteRequest defines the QueryGetGuildInviteRequest message.
 * @name QueryGetGuildInviteRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildInviteRequest
 */
export const QueryGetGuildInviteRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetGuildInviteRequest",
  encode(message: QueryGetGuildInviteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guildInvitee !== "") {
      writer.uint32(10).string(message.guildInvitee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGuildInviteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuildInviteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildInvitee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetGuildInviteRequest>): QueryGetGuildInviteRequest {
    const message = createBaseQueryGetGuildInviteRequest();
    message.guildInvitee = object.guildInvitee ?? "";
    return message;
  },
  fromAmino(object: QueryGetGuildInviteRequestAmino): QueryGetGuildInviteRequest {
    const message = createBaseQueryGetGuildInviteRequest();
    if (object.guild_invitee !== undefined && object.guild_invitee !== null) {
      message.guildInvitee = object.guild_invitee;
    }
    return message;
  },
  toAmino(message: QueryGetGuildInviteRequest): QueryGetGuildInviteRequestAmino {
    const obj: any = {};
    obj.guild_invitee = message.guildInvitee === "" ? undefined : message.guildInvitee;
    return obj;
  },
  fromAminoMsg(object: QueryGetGuildInviteRequestAminoMsg): QueryGetGuildInviteRequest {
    return QueryGetGuildInviteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGuildInviteRequestProtoMsg): QueryGetGuildInviteRequest {
    return QueryGetGuildInviteRequest.decode(message.value);
  },
  toProto(message: QueryGetGuildInviteRequest): Uint8Array {
    return QueryGetGuildInviteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGuildInviteRequest): QueryGetGuildInviteRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetGuildInviteRequest",
      value: QueryGetGuildInviteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetGuildInviteResponse(): QueryGetGuildInviteResponse {
  return {
    guildInvite: GuildInvite.fromPartial({})
  };
}
/**
 * QueryGetGuildInviteResponse defines the QueryGetGuildInviteResponse message.
 * @name QueryGetGuildInviteResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetGuildInviteResponse
 */
export const QueryGetGuildInviteResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetGuildInviteResponse",
  encode(message: QueryGetGuildInviteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guildInvite !== undefined) {
      GuildInvite.encode(message.guildInvite, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetGuildInviteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuildInviteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildInvite = GuildInvite.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetGuildInviteResponse>): QueryGetGuildInviteResponse {
    const message = createBaseQueryGetGuildInviteResponse();
    message.guildInvite = object.guildInvite !== undefined && object.guildInvite !== null ? GuildInvite.fromPartial(object.guildInvite) : undefined;
    return message;
  },
  fromAmino(object: QueryGetGuildInviteResponseAmino): QueryGetGuildInviteResponse {
    const message = createBaseQueryGetGuildInviteResponse();
    if (object.guild_invite !== undefined && object.guild_invite !== null) {
      message.guildInvite = GuildInvite.fromAmino(object.guild_invite);
    }
    return message;
  },
  toAmino(message: QueryGetGuildInviteResponse): QueryGetGuildInviteResponseAmino {
    const obj: any = {};
    obj.guild_invite = message.guildInvite ? GuildInvite.toAmino(message.guildInvite) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetGuildInviteResponseAminoMsg): QueryGetGuildInviteResponse {
    return QueryGetGuildInviteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetGuildInviteResponseProtoMsg): QueryGetGuildInviteResponse {
    return QueryGetGuildInviteResponse.decode(message.value);
  },
  toProto(message: QueryGetGuildInviteResponse): Uint8Array {
    return QueryGetGuildInviteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetGuildInviteResponse): QueryGetGuildInviteResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetGuildInviteResponse",
      value: QueryGetGuildInviteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllGuildInviteRequest(): QueryAllGuildInviteRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllGuildInviteRequest defines the QueryAllGuildInviteRequest message.
 * @name QueryAllGuildInviteRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildInviteRequest
 */
export const QueryAllGuildInviteRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllGuildInviteRequest",
  encode(message: QueryAllGuildInviteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGuildInviteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuildInviteRequest();
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
  fromPartial(object: DeepPartial<QueryAllGuildInviteRequest>): QueryAllGuildInviteRequest {
    const message = createBaseQueryAllGuildInviteRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGuildInviteRequestAmino): QueryAllGuildInviteRequest {
    const message = createBaseQueryAllGuildInviteRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGuildInviteRequest): QueryAllGuildInviteRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGuildInviteRequestAminoMsg): QueryAllGuildInviteRequest {
    return QueryAllGuildInviteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGuildInviteRequestProtoMsg): QueryAllGuildInviteRequest {
    return QueryAllGuildInviteRequest.decode(message.value);
  },
  toProto(message: QueryAllGuildInviteRequest): Uint8Array {
    return QueryAllGuildInviteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGuildInviteRequest): QueryAllGuildInviteRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllGuildInviteRequest",
      value: QueryAllGuildInviteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllGuildInviteResponse(): QueryAllGuildInviteResponse {
  return {
    guildInvite: [],
    pagination: undefined
  };
}
/**
 * QueryAllGuildInviteResponse defines the QueryAllGuildInviteResponse message.
 * @name QueryAllGuildInviteResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllGuildInviteResponse
 */
export const QueryAllGuildInviteResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllGuildInviteResponse",
  encode(message: QueryAllGuildInviteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.guildInvite) {
      GuildInvite.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllGuildInviteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuildInviteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildInvite.push(GuildInvite.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllGuildInviteResponse>): QueryAllGuildInviteResponse {
    const message = createBaseQueryAllGuildInviteResponse();
    message.guildInvite = object.guildInvite?.map(e => GuildInvite.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllGuildInviteResponseAmino): QueryAllGuildInviteResponse {
    const message = createBaseQueryAllGuildInviteResponse();
    message.guildInvite = object.guild_invite?.map(e => GuildInvite.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllGuildInviteResponse): QueryAllGuildInviteResponseAmino {
    const obj: any = {};
    if (message.guildInvite) {
      obj.guild_invite = message.guildInvite.map(e => e ? GuildInvite.toAmino(e) : undefined);
    } else {
      obj.guild_invite = message.guildInvite;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllGuildInviteResponseAminoMsg): QueryAllGuildInviteResponse {
    return QueryAllGuildInviteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllGuildInviteResponseProtoMsg): QueryAllGuildInviteResponse {
    return QueryAllGuildInviteResponse.decode(message.value);
  },
  toProto(message: QueryAllGuildInviteResponse): Uint8Array {
    return QueryAllGuildInviteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllGuildInviteResponse): QueryAllGuildInviteResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllGuildInviteResponse",
      value: QueryAllGuildInviteResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetQuestRequest(): QueryGetQuestRequest {
  return {
    questId: ""
  };
}
/**
 * QueryGetQuestRequest defines the QueryGetQuestRequest message.
 * @name QueryGetQuestRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetQuestRequest
 */
export const QueryGetQuestRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetQuestRequest",
  encode(message: QueryGetQuestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.questId !== "") {
      writer.uint32(10).string(message.questId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetQuestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetQuestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetQuestRequest>): QueryGetQuestRequest {
    const message = createBaseQueryGetQuestRequest();
    message.questId = object.questId ?? "";
    return message;
  },
  fromAmino(object: QueryGetQuestRequestAmino): QueryGetQuestRequest {
    const message = createBaseQueryGetQuestRequest();
    if (object.quest_id !== undefined && object.quest_id !== null) {
      message.questId = object.quest_id;
    }
    return message;
  },
  toAmino(message: QueryGetQuestRequest): QueryGetQuestRequestAmino {
    const obj: any = {};
    obj.quest_id = message.questId === "" ? undefined : message.questId;
    return obj;
  },
  fromAminoMsg(object: QueryGetQuestRequestAminoMsg): QueryGetQuestRequest {
    return QueryGetQuestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetQuestRequestProtoMsg): QueryGetQuestRequest {
    return QueryGetQuestRequest.decode(message.value);
  },
  toProto(message: QueryGetQuestRequest): Uint8Array {
    return QueryGetQuestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetQuestRequest): QueryGetQuestRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetQuestRequest",
      value: QueryGetQuestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetQuestResponse(): QueryGetQuestResponse {
  return {
    quest: Quest.fromPartial({})
  };
}
/**
 * QueryGetQuestResponse defines the QueryGetQuestResponse message.
 * @name QueryGetQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetQuestResponse
 */
export const QueryGetQuestResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetQuestResponse",
  encode(message: QueryGetQuestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quest !== undefined) {
      Quest.encode(message.quest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetQuestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetQuestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quest = Quest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetQuestResponse>): QueryGetQuestResponse {
    const message = createBaseQueryGetQuestResponse();
    message.quest = object.quest !== undefined && object.quest !== null ? Quest.fromPartial(object.quest) : undefined;
    return message;
  },
  fromAmino(object: QueryGetQuestResponseAmino): QueryGetQuestResponse {
    const message = createBaseQueryGetQuestResponse();
    if (object.quest !== undefined && object.quest !== null) {
      message.quest = Quest.fromAmino(object.quest);
    }
    return message;
  },
  toAmino(message: QueryGetQuestResponse): QueryGetQuestResponseAmino {
    const obj: any = {};
    obj.quest = message.quest ? Quest.toAmino(message.quest) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetQuestResponseAminoMsg): QueryGetQuestResponse {
    return QueryGetQuestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetQuestResponseProtoMsg): QueryGetQuestResponse {
    return QueryGetQuestResponse.decode(message.value);
  },
  toProto(message: QueryGetQuestResponse): Uint8Array {
    return QueryGetQuestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetQuestResponse): QueryGetQuestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetQuestResponse",
      value: QueryGetQuestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllQuestRequest(): QueryAllQuestRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllQuestRequest defines the QueryAllQuestRequest message.
 * @name QueryAllQuestRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllQuestRequest
 */
export const QueryAllQuestRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllQuestRequest",
  encode(message: QueryAllQuestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllQuestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllQuestRequest();
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
  fromPartial(object: DeepPartial<QueryAllQuestRequest>): QueryAllQuestRequest {
    const message = createBaseQueryAllQuestRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllQuestRequestAmino): QueryAllQuestRequest {
    const message = createBaseQueryAllQuestRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllQuestRequest): QueryAllQuestRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllQuestRequestAminoMsg): QueryAllQuestRequest {
    return QueryAllQuestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllQuestRequestProtoMsg): QueryAllQuestRequest {
    return QueryAllQuestRequest.decode(message.value);
  },
  toProto(message: QueryAllQuestRequest): Uint8Array {
    return QueryAllQuestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllQuestRequest): QueryAllQuestRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllQuestRequest",
      value: QueryAllQuestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllQuestResponse(): QueryAllQuestResponse {
  return {
    quest: [],
    pagination: undefined
  };
}
/**
 * QueryAllQuestResponse defines the QueryAllQuestResponse message.
 * @name QueryAllQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllQuestResponse
 */
export const QueryAllQuestResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllQuestResponse",
  encode(message: QueryAllQuestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.quest) {
      Quest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllQuestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllQuestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quest.push(Quest.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllQuestResponse>): QueryAllQuestResponse {
    const message = createBaseQueryAllQuestResponse();
    message.quest = object.quest?.map(e => Quest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllQuestResponseAmino): QueryAllQuestResponse {
    const message = createBaseQueryAllQuestResponse();
    message.quest = object.quest?.map(e => Quest.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllQuestResponse): QueryAllQuestResponseAmino {
    const obj: any = {};
    if (message.quest) {
      obj.quest = message.quest.map(e => e ? Quest.toAmino(e) : undefined);
    } else {
      obj.quest = message.quest;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllQuestResponseAminoMsg): QueryAllQuestResponse {
    return QueryAllQuestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllQuestResponseProtoMsg): QueryAllQuestResponse {
    return QueryAllQuestResponse.decode(message.value);
  },
  toProto(message: QueryAllQuestResponse): Uint8Array {
    return QueryAllQuestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllQuestResponse): QueryAllQuestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllQuestResponse",
      value: QueryAllQuestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberQuestProgressRequest(): QueryGetMemberQuestProgressRequest {
  return {
    memberQuest: ""
  };
}
/**
 * QueryGetMemberQuestProgressRequest defines the QueryGetMemberQuestProgressRequest message.
 * @name QueryGetMemberQuestProgressRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberQuestProgressRequest
 */
export const QueryGetMemberQuestProgressRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberQuestProgressRequest",
  encode(message: QueryGetMemberQuestProgressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberQuest !== "") {
      writer.uint32(10).string(message.memberQuest);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberQuestProgressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberQuestProgressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberQuest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberQuestProgressRequest>): QueryGetMemberQuestProgressRequest {
    const message = createBaseQueryGetMemberQuestProgressRequest();
    message.memberQuest = object.memberQuest ?? "";
    return message;
  },
  fromAmino(object: QueryGetMemberQuestProgressRequestAmino): QueryGetMemberQuestProgressRequest {
    const message = createBaseQueryGetMemberQuestProgressRequest();
    if (object.member_quest !== undefined && object.member_quest !== null) {
      message.memberQuest = object.member_quest;
    }
    return message;
  },
  toAmino(message: QueryGetMemberQuestProgressRequest): QueryGetMemberQuestProgressRequestAmino {
    const obj: any = {};
    obj.member_quest = message.memberQuest === "" ? undefined : message.memberQuest;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberQuestProgressRequestAminoMsg): QueryGetMemberQuestProgressRequest {
    return QueryGetMemberQuestProgressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberQuestProgressRequestProtoMsg): QueryGetMemberQuestProgressRequest {
    return QueryGetMemberQuestProgressRequest.decode(message.value);
  },
  toProto(message: QueryGetMemberQuestProgressRequest): Uint8Array {
    return QueryGetMemberQuestProgressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberQuestProgressRequest): QueryGetMemberQuestProgressRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetMemberQuestProgressRequest",
      value: QueryGetMemberQuestProgressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberQuestProgressResponse(): QueryGetMemberQuestProgressResponse {
  return {
    memberQuestProgress: MemberQuestProgress.fromPartial({})
  };
}
/**
 * QueryGetMemberQuestProgressResponse defines the QueryGetMemberQuestProgressResponse message.
 * @name QueryGetMemberQuestProgressResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetMemberQuestProgressResponse
 */
export const QueryGetMemberQuestProgressResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetMemberQuestProgressResponse",
  encode(message: QueryGetMemberQuestProgressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberQuestProgress !== undefined) {
      MemberQuestProgress.encode(message.memberQuestProgress, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMemberQuestProgressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberQuestProgressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberQuestProgress = MemberQuestProgress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberQuestProgressResponse>): QueryGetMemberQuestProgressResponse {
    const message = createBaseQueryGetMemberQuestProgressResponse();
    message.memberQuestProgress = object.memberQuestProgress !== undefined && object.memberQuestProgress !== null ? MemberQuestProgress.fromPartial(object.memberQuestProgress) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMemberQuestProgressResponseAmino): QueryGetMemberQuestProgressResponse {
    const message = createBaseQueryGetMemberQuestProgressResponse();
    if (object.member_quest_progress !== undefined && object.member_quest_progress !== null) {
      message.memberQuestProgress = MemberQuestProgress.fromAmino(object.member_quest_progress);
    }
    return message;
  },
  toAmino(message: QueryGetMemberQuestProgressResponse): QueryGetMemberQuestProgressResponseAmino {
    const obj: any = {};
    obj.member_quest_progress = message.memberQuestProgress ? MemberQuestProgress.toAmino(message.memberQuestProgress) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberQuestProgressResponseAminoMsg): QueryGetMemberQuestProgressResponse {
    return QueryGetMemberQuestProgressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberQuestProgressResponseProtoMsg): QueryGetMemberQuestProgressResponse {
    return QueryGetMemberQuestProgressResponse.decode(message.value);
  },
  toProto(message: QueryGetMemberQuestProgressResponse): Uint8Array {
    return QueryGetMemberQuestProgressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberQuestProgressResponse): QueryGetMemberQuestProgressResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetMemberQuestProgressResponse",
      value: QueryGetMemberQuestProgressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberQuestProgressRequest(): QueryAllMemberQuestProgressRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllMemberQuestProgressRequest defines the QueryAllMemberQuestProgressRequest message.
 * @name QueryAllMemberQuestProgressRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberQuestProgressRequest
 */
export const QueryAllMemberQuestProgressRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberQuestProgressRequest",
  encode(message: QueryAllMemberQuestProgressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberQuestProgressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberQuestProgressRequest();
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
  fromPartial(object: DeepPartial<QueryAllMemberQuestProgressRequest>): QueryAllMemberQuestProgressRequest {
    const message = createBaseQueryAllMemberQuestProgressRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberQuestProgressRequestAmino): QueryAllMemberQuestProgressRequest {
    const message = createBaseQueryAllMemberQuestProgressRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberQuestProgressRequest): QueryAllMemberQuestProgressRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberQuestProgressRequestAminoMsg): QueryAllMemberQuestProgressRequest {
    return QueryAllMemberQuestProgressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberQuestProgressRequestProtoMsg): QueryAllMemberQuestProgressRequest {
    return QueryAllMemberQuestProgressRequest.decode(message.value);
  },
  toProto(message: QueryAllMemberQuestProgressRequest): Uint8Array {
    return QueryAllMemberQuestProgressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberQuestProgressRequest): QueryAllMemberQuestProgressRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllMemberQuestProgressRequest",
      value: QueryAllMemberQuestProgressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberQuestProgressResponse(): QueryAllMemberQuestProgressResponse {
  return {
    memberQuestProgress: [],
    pagination: undefined
  };
}
/**
 * QueryAllMemberQuestProgressResponse defines the QueryAllMemberQuestProgressResponse message.
 * @name QueryAllMemberQuestProgressResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllMemberQuestProgressResponse
 */
export const QueryAllMemberQuestProgressResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllMemberQuestProgressResponse",
  encode(message: QueryAllMemberQuestProgressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.memberQuestProgress) {
      MemberQuestProgress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllMemberQuestProgressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberQuestProgressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberQuestProgress.push(MemberQuestProgress.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllMemberQuestProgressResponse>): QueryAllMemberQuestProgressResponse {
    const message = createBaseQueryAllMemberQuestProgressResponse();
    message.memberQuestProgress = object.memberQuestProgress?.map(e => MemberQuestProgress.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberQuestProgressResponseAmino): QueryAllMemberQuestProgressResponse {
    const message = createBaseQueryAllMemberQuestProgressResponse();
    message.memberQuestProgress = object.member_quest_progress?.map(e => MemberQuestProgress.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberQuestProgressResponse): QueryAllMemberQuestProgressResponseAmino {
    const obj: any = {};
    if (message.memberQuestProgress) {
      obj.member_quest_progress = message.memberQuestProgress.map(e => e ? MemberQuestProgress.toAmino(e) : undefined);
    } else {
      obj.member_quest_progress = message.memberQuestProgress;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberQuestProgressResponseAminoMsg): QueryAllMemberQuestProgressResponse {
    return QueryAllMemberQuestProgressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberQuestProgressResponseProtoMsg): QueryAllMemberQuestProgressResponse {
    return QueryAllMemberQuestProgressResponse.decode(message.value);
  },
  toProto(message: QueryAllMemberQuestProgressResponse): Uint8Array {
    return QueryAllMemberQuestProgressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberQuestProgressResponse): QueryAllMemberQuestProgressResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllMemberQuestProgressResponse",
      value: QueryAllMemberQuestProgressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochXpTrackerRequest(): QueryGetEpochXpTrackerRequest {
  return {
    memberEpoch: ""
  };
}
/**
 * QueryGetEpochXpTrackerRequest defines the QueryGetEpochXpTrackerRequest message.
 * @name QueryGetEpochXpTrackerRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetEpochXpTrackerRequest
 */
export const QueryGetEpochXpTrackerRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetEpochXpTrackerRequest",
  encode(message: QueryGetEpochXpTrackerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberEpoch !== "") {
      writer.uint32(10).string(message.memberEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochXpTrackerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochXpTrackerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberEpoch = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetEpochXpTrackerRequest>): QueryGetEpochXpTrackerRequest {
    const message = createBaseQueryGetEpochXpTrackerRequest();
    message.memberEpoch = object.memberEpoch ?? "";
    return message;
  },
  fromAmino(object: QueryGetEpochXpTrackerRequestAmino): QueryGetEpochXpTrackerRequest {
    const message = createBaseQueryGetEpochXpTrackerRequest();
    if (object.member_epoch !== undefined && object.member_epoch !== null) {
      message.memberEpoch = object.member_epoch;
    }
    return message;
  },
  toAmino(message: QueryGetEpochXpTrackerRequest): QueryGetEpochXpTrackerRequestAmino {
    const obj: any = {};
    obj.member_epoch = message.memberEpoch === "" ? undefined : message.memberEpoch;
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochXpTrackerRequestAminoMsg): QueryGetEpochXpTrackerRequest {
    return QueryGetEpochXpTrackerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochXpTrackerRequestProtoMsg): QueryGetEpochXpTrackerRequest {
    return QueryGetEpochXpTrackerRequest.decode(message.value);
  },
  toProto(message: QueryGetEpochXpTrackerRequest): Uint8Array {
    return QueryGetEpochXpTrackerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochXpTrackerRequest): QueryGetEpochXpTrackerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetEpochXpTrackerRequest",
      value: QueryGetEpochXpTrackerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetEpochXpTrackerResponse(): QueryGetEpochXpTrackerResponse {
  return {
    epochXpTracker: EpochXpTracker.fromPartial({})
  };
}
/**
 * QueryGetEpochXpTrackerResponse defines the QueryGetEpochXpTrackerResponse message.
 * @name QueryGetEpochXpTrackerResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetEpochXpTrackerResponse
 */
export const QueryGetEpochXpTrackerResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetEpochXpTrackerResponse",
  encode(message: QueryGetEpochXpTrackerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochXpTracker !== undefined) {
      EpochXpTracker.encode(message.epochXpTracker, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetEpochXpTrackerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochXpTrackerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochXpTracker = EpochXpTracker.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetEpochXpTrackerResponse>): QueryGetEpochXpTrackerResponse {
    const message = createBaseQueryGetEpochXpTrackerResponse();
    message.epochXpTracker = object.epochXpTracker !== undefined && object.epochXpTracker !== null ? EpochXpTracker.fromPartial(object.epochXpTracker) : undefined;
    return message;
  },
  fromAmino(object: QueryGetEpochXpTrackerResponseAmino): QueryGetEpochXpTrackerResponse {
    const message = createBaseQueryGetEpochXpTrackerResponse();
    if (object.epoch_xp_tracker !== undefined && object.epoch_xp_tracker !== null) {
      message.epochXpTracker = EpochXpTracker.fromAmino(object.epoch_xp_tracker);
    }
    return message;
  },
  toAmino(message: QueryGetEpochXpTrackerResponse): QueryGetEpochXpTrackerResponseAmino {
    const obj: any = {};
    obj.epoch_xp_tracker = message.epochXpTracker ? EpochXpTracker.toAmino(message.epochXpTracker) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetEpochXpTrackerResponseAminoMsg): QueryGetEpochXpTrackerResponse {
    return QueryGetEpochXpTrackerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetEpochXpTrackerResponseProtoMsg): QueryGetEpochXpTrackerResponse {
    return QueryGetEpochXpTrackerResponse.decode(message.value);
  },
  toProto(message: QueryGetEpochXpTrackerResponse): Uint8Array {
    return QueryGetEpochXpTrackerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetEpochXpTrackerResponse): QueryGetEpochXpTrackerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetEpochXpTrackerResponse",
      value: QueryGetEpochXpTrackerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochXpTrackerRequest(): QueryAllEpochXpTrackerRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllEpochXpTrackerRequest defines the QueryAllEpochXpTrackerRequest message.
 * @name QueryAllEpochXpTrackerRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllEpochXpTrackerRequest
 */
export const QueryAllEpochXpTrackerRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllEpochXpTrackerRequest",
  encode(message: QueryAllEpochXpTrackerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEpochXpTrackerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochXpTrackerRequest();
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
  fromPartial(object: DeepPartial<QueryAllEpochXpTrackerRequest>): QueryAllEpochXpTrackerRequest {
    const message = createBaseQueryAllEpochXpTrackerRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllEpochXpTrackerRequestAmino): QueryAllEpochXpTrackerRequest {
    const message = createBaseQueryAllEpochXpTrackerRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllEpochXpTrackerRequest): QueryAllEpochXpTrackerRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEpochXpTrackerRequestAminoMsg): QueryAllEpochXpTrackerRequest {
    return QueryAllEpochXpTrackerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllEpochXpTrackerRequestProtoMsg): QueryAllEpochXpTrackerRequest {
    return QueryAllEpochXpTrackerRequest.decode(message.value);
  },
  toProto(message: QueryAllEpochXpTrackerRequest): Uint8Array {
    return QueryAllEpochXpTrackerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEpochXpTrackerRequest): QueryAllEpochXpTrackerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllEpochXpTrackerRequest",
      value: QueryAllEpochXpTrackerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllEpochXpTrackerResponse(): QueryAllEpochXpTrackerResponse {
  return {
    epochXpTracker: [],
    pagination: undefined
  };
}
/**
 * QueryAllEpochXpTrackerResponse defines the QueryAllEpochXpTrackerResponse message.
 * @name QueryAllEpochXpTrackerResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllEpochXpTrackerResponse
 */
export const QueryAllEpochXpTrackerResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllEpochXpTrackerResponse",
  encode(message: QueryAllEpochXpTrackerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochXpTracker) {
      EpochXpTracker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEpochXpTrackerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochXpTrackerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochXpTracker.push(EpochXpTracker.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllEpochXpTrackerResponse>): QueryAllEpochXpTrackerResponse {
    const message = createBaseQueryAllEpochXpTrackerResponse();
    message.epochXpTracker = object.epochXpTracker?.map(e => EpochXpTracker.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllEpochXpTrackerResponseAmino): QueryAllEpochXpTrackerResponse {
    const message = createBaseQueryAllEpochXpTrackerResponse();
    message.epochXpTracker = object.epoch_xp_tracker?.map(e => EpochXpTracker.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllEpochXpTrackerResponse): QueryAllEpochXpTrackerResponseAmino {
    const obj: any = {};
    if (message.epochXpTracker) {
      obj.epoch_xp_tracker = message.epochXpTracker.map(e => e ? EpochXpTracker.toAmino(e) : undefined);
    } else {
      obj.epoch_xp_tracker = message.epochXpTracker;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEpochXpTrackerResponseAminoMsg): QueryAllEpochXpTrackerResponse {
    return QueryAllEpochXpTrackerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllEpochXpTrackerResponseProtoMsg): QueryAllEpochXpTrackerResponse {
    return QueryAllEpochXpTrackerResponse.decode(message.value);
  },
  toProto(message: QueryAllEpochXpTrackerResponse): Uint8Array {
    return QueryAllEpochXpTrackerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEpochXpTrackerResponse): QueryAllEpochXpTrackerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllEpochXpTrackerResponse",
      value: QueryAllEpochXpTrackerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetVoteXpRecordRequest(): QueryGetVoteXpRecordRequest {
  return {
    seasonMemberProposal: ""
  };
}
/**
 * QueryGetVoteXpRecordRequest defines the QueryGetVoteXpRecordRequest message.
 * @name QueryGetVoteXpRecordRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetVoteXpRecordRequest
 */
export const QueryGetVoteXpRecordRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetVoteXpRecordRequest",
  encode(message: QueryGetVoteXpRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seasonMemberProposal !== "") {
      writer.uint32(10).string(message.seasonMemberProposal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetVoteXpRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVoteXpRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seasonMemberProposal = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetVoteXpRecordRequest>): QueryGetVoteXpRecordRequest {
    const message = createBaseQueryGetVoteXpRecordRequest();
    message.seasonMemberProposal = object.seasonMemberProposal ?? "";
    return message;
  },
  fromAmino(object: QueryGetVoteXpRecordRequestAmino): QueryGetVoteXpRecordRequest {
    const message = createBaseQueryGetVoteXpRecordRequest();
    if (object.season_member_proposal !== undefined && object.season_member_proposal !== null) {
      message.seasonMemberProposal = object.season_member_proposal;
    }
    return message;
  },
  toAmino(message: QueryGetVoteXpRecordRequest): QueryGetVoteXpRecordRequestAmino {
    const obj: any = {};
    obj.season_member_proposal = message.seasonMemberProposal === "" ? undefined : message.seasonMemberProposal;
    return obj;
  },
  fromAminoMsg(object: QueryGetVoteXpRecordRequestAminoMsg): QueryGetVoteXpRecordRequest {
    return QueryGetVoteXpRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVoteXpRecordRequestProtoMsg): QueryGetVoteXpRecordRequest {
    return QueryGetVoteXpRecordRequest.decode(message.value);
  },
  toProto(message: QueryGetVoteXpRecordRequest): Uint8Array {
    return QueryGetVoteXpRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVoteXpRecordRequest): QueryGetVoteXpRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetVoteXpRecordRequest",
      value: QueryGetVoteXpRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetVoteXpRecordResponse(): QueryGetVoteXpRecordResponse {
  return {
    voteXpRecord: VoteXpRecord.fromPartial({})
  };
}
/**
 * QueryGetVoteXpRecordResponse defines the QueryGetVoteXpRecordResponse message.
 * @name QueryGetVoteXpRecordResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetVoteXpRecordResponse
 */
export const QueryGetVoteXpRecordResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetVoteXpRecordResponse",
  encode(message: QueryGetVoteXpRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteXpRecord !== undefined) {
      VoteXpRecord.encode(message.voteXpRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetVoteXpRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetVoteXpRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteXpRecord = VoteXpRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetVoteXpRecordResponse>): QueryGetVoteXpRecordResponse {
    const message = createBaseQueryGetVoteXpRecordResponse();
    message.voteXpRecord = object.voteXpRecord !== undefined && object.voteXpRecord !== null ? VoteXpRecord.fromPartial(object.voteXpRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryGetVoteXpRecordResponseAmino): QueryGetVoteXpRecordResponse {
    const message = createBaseQueryGetVoteXpRecordResponse();
    if (object.vote_xp_record !== undefined && object.vote_xp_record !== null) {
      message.voteXpRecord = VoteXpRecord.fromAmino(object.vote_xp_record);
    }
    return message;
  },
  toAmino(message: QueryGetVoteXpRecordResponse): QueryGetVoteXpRecordResponseAmino {
    const obj: any = {};
    obj.vote_xp_record = message.voteXpRecord ? VoteXpRecord.toAmino(message.voteXpRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetVoteXpRecordResponseAminoMsg): QueryGetVoteXpRecordResponse {
    return QueryGetVoteXpRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetVoteXpRecordResponseProtoMsg): QueryGetVoteXpRecordResponse {
    return QueryGetVoteXpRecordResponse.decode(message.value);
  },
  toProto(message: QueryGetVoteXpRecordResponse): Uint8Array {
    return QueryGetVoteXpRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetVoteXpRecordResponse): QueryGetVoteXpRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetVoteXpRecordResponse",
      value: QueryGetVoteXpRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllVoteXpRecordRequest(): QueryAllVoteXpRecordRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllVoteXpRecordRequest defines the QueryAllVoteXpRecordRequest message.
 * @name QueryAllVoteXpRecordRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllVoteXpRecordRequest
 */
export const QueryAllVoteXpRecordRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllVoteXpRecordRequest",
  encode(message: QueryAllVoteXpRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllVoteXpRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVoteXpRecordRequest();
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
  fromPartial(object: DeepPartial<QueryAllVoteXpRecordRequest>): QueryAllVoteXpRecordRequest {
    const message = createBaseQueryAllVoteXpRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVoteXpRecordRequestAmino): QueryAllVoteXpRecordRequest {
    const message = createBaseQueryAllVoteXpRecordRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVoteXpRecordRequest): QueryAllVoteXpRecordRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVoteXpRecordRequestAminoMsg): QueryAllVoteXpRecordRequest {
    return QueryAllVoteXpRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVoteXpRecordRequestProtoMsg): QueryAllVoteXpRecordRequest {
    return QueryAllVoteXpRecordRequest.decode(message.value);
  },
  toProto(message: QueryAllVoteXpRecordRequest): Uint8Array {
    return QueryAllVoteXpRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVoteXpRecordRequest): QueryAllVoteXpRecordRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllVoteXpRecordRequest",
      value: QueryAllVoteXpRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllVoteXpRecordResponse(): QueryAllVoteXpRecordResponse {
  return {
    voteXpRecord: [],
    pagination: undefined
  };
}
/**
 * QueryAllVoteXpRecordResponse defines the QueryAllVoteXpRecordResponse message.
 * @name QueryAllVoteXpRecordResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllVoteXpRecordResponse
 */
export const QueryAllVoteXpRecordResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllVoteXpRecordResponse",
  encode(message: QueryAllVoteXpRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.voteXpRecord) {
      VoteXpRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllVoteXpRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllVoteXpRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteXpRecord.push(VoteXpRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllVoteXpRecordResponse>): QueryAllVoteXpRecordResponse {
    const message = createBaseQueryAllVoteXpRecordResponse();
    message.voteXpRecord = object.voteXpRecord?.map(e => VoteXpRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllVoteXpRecordResponseAmino): QueryAllVoteXpRecordResponse {
    const message = createBaseQueryAllVoteXpRecordResponse();
    message.voteXpRecord = object.vote_xp_record?.map(e => VoteXpRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllVoteXpRecordResponse): QueryAllVoteXpRecordResponseAmino {
    const obj: any = {};
    if (message.voteXpRecord) {
      obj.vote_xp_record = message.voteXpRecord.map(e => e ? VoteXpRecord.toAmino(e) : undefined);
    } else {
      obj.vote_xp_record = message.voteXpRecord;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllVoteXpRecordResponseAminoMsg): QueryAllVoteXpRecordResponse {
    return QueryAllVoteXpRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllVoteXpRecordResponseProtoMsg): QueryAllVoteXpRecordResponse {
    return QueryAllVoteXpRecordResponse.decode(message.value);
  },
  toProto(message: QueryAllVoteXpRecordResponse): Uint8Array {
    return QueryAllVoteXpRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllVoteXpRecordResponse): QueryAllVoteXpRecordResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllVoteXpRecordResponse",
      value: QueryAllVoteXpRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetForumXpCooldownRequest(): QueryGetForumXpCooldownRequest {
  return {
    beneficiaryActor: ""
  };
}
/**
 * QueryGetForumXpCooldownRequest defines the QueryGetForumXpCooldownRequest message.
 * @name QueryGetForumXpCooldownRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetForumXpCooldownRequest
 */
export const QueryGetForumXpCooldownRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetForumXpCooldownRequest",
  encode(message: QueryGetForumXpCooldownRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beneficiaryActor !== "") {
      writer.uint32(10).string(message.beneficiaryActor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetForumXpCooldownRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetForumXpCooldownRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beneficiaryActor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetForumXpCooldownRequest>): QueryGetForumXpCooldownRequest {
    const message = createBaseQueryGetForumXpCooldownRequest();
    message.beneficiaryActor = object.beneficiaryActor ?? "";
    return message;
  },
  fromAmino(object: QueryGetForumXpCooldownRequestAmino): QueryGetForumXpCooldownRequest {
    const message = createBaseQueryGetForumXpCooldownRequest();
    if (object.beneficiary_actor !== undefined && object.beneficiary_actor !== null) {
      message.beneficiaryActor = object.beneficiary_actor;
    }
    return message;
  },
  toAmino(message: QueryGetForumXpCooldownRequest): QueryGetForumXpCooldownRequestAmino {
    const obj: any = {};
    obj.beneficiary_actor = message.beneficiaryActor === "" ? undefined : message.beneficiaryActor;
    return obj;
  },
  fromAminoMsg(object: QueryGetForumXpCooldownRequestAminoMsg): QueryGetForumXpCooldownRequest {
    return QueryGetForumXpCooldownRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetForumXpCooldownRequestProtoMsg): QueryGetForumXpCooldownRequest {
    return QueryGetForumXpCooldownRequest.decode(message.value);
  },
  toProto(message: QueryGetForumXpCooldownRequest): Uint8Array {
    return QueryGetForumXpCooldownRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetForumXpCooldownRequest): QueryGetForumXpCooldownRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetForumXpCooldownRequest",
      value: QueryGetForumXpCooldownRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetForumXpCooldownResponse(): QueryGetForumXpCooldownResponse {
  return {
    forumXpCooldown: ForumXpCooldown.fromPartial({})
  };
}
/**
 * QueryGetForumXpCooldownResponse defines the QueryGetForumXpCooldownResponse message.
 * @name QueryGetForumXpCooldownResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetForumXpCooldownResponse
 */
export const QueryGetForumXpCooldownResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetForumXpCooldownResponse",
  encode(message: QueryGetForumXpCooldownResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.forumXpCooldown !== undefined) {
      ForumXpCooldown.encode(message.forumXpCooldown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetForumXpCooldownResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetForumXpCooldownResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forumXpCooldown = ForumXpCooldown.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetForumXpCooldownResponse>): QueryGetForumXpCooldownResponse {
    const message = createBaseQueryGetForumXpCooldownResponse();
    message.forumXpCooldown = object.forumXpCooldown !== undefined && object.forumXpCooldown !== null ? ForumXpCooldown.fromPartial(object.forumXpCooldown) : undefined;
    return message;
  },
  fromAmino(object: QueryGetForumXpCooldownResponseAmino): QueryGetForumXpCooldownResponse {
    const message = createBaseQueryGetForumXpCooldownResponse();
    if (object.forum_xp_cooldown !== undefined && object.forum_xp_cooldown !== null) {
      message.forumXpCooldown = ForumXpCooldown.fromAmino(object.forum_xp_cooldown);
    }
    return message;
  },
  toAmino(message: QueryGetForumXpCooldownResponse): QueryGetForumXpCooldownResponseAmino {
    const obj: any = {};
    obj.forum_xp_cooldown = message.forumXpCooldown ? ForumXpCooldown.toAmino(message.forumXpCooldown) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetForumXpCooldownResponseAminoMsg): QueryGetForumXpCooldownResponse {
    return QueryGetForumXpCooldownResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetForumXpCooldownResponseProtoMsg): QueryGetForumXpCooldownResponse {
    return QueryGetForumXpCooldownResponse.decode(message.value);
  },
  toProto(message: QueryGetForumXpCooldownResponse): Uint8Array {
    return QueryGetForumXpCooldownResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetForumXpCooldownResponse): QueryGetForumXpCooldownResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetForumXpCooldownResponse",
      value: QueryGetForumXpCooldownResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllForumXpCooldownRequest(): QueryAllForumXpCooldownRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllForumXpCooldownRequest defines the QueryAllForumXpCooldownRequest message.
 * @name QueryAllForumXpCooldownRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllForumXpCooldownRequest
 */
export const QueryAllForumXpCooldownRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllForumXpCooldownRequest",
  encode(message: QueryAllForumXpCooldownRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllForumXpCooldownRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllForumXpCooldownRequest();
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
  fromPartial(object: DeepPartial<QueryAllForumXpCooldownRequest>): QueryAllForumXpCooldownRequest {
    const message = createBaseQueryAllForumXpCooldownRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllForumXpCooldownRequestAmino): QueryAllForumXpCooldownRequest {
    const message = createBaseQueryAllForumXpCooldownRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllForumXpCooldownRequest): QueryAllForumXpCooldownRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllForumXpCooldownRequestAminoMsg): QueryAllForumXpCooldownRequest {
    return QueryAllForumXpCooldownRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllForumXpCooldownRequestProtoMsg): QueryAllForumXpCooldownRequest {
    return QueryAllForumXpCooldownRequest.decode(message.value);
  },
  toProto(message: QueryAllForumXpCooldownRequest): Uint8Array {
    return QueryAllForumXpCooldownRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllForumXpCooldownRequest): QueryAllForumXpCooldownRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllForumXpCooldownRequest",
      value: QueryAllForumXpCooldownRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllForumXpCooldownResponse(): QueryAllForumXpCooldownResponse {
  return {
    forumXpCooldown: [],
    pagination: undefined
  };
}
/**
 * QueryAllForumXpCooldownResponse defines the QueryAllForumXpCooldownResponse message.
 * @name QueryAllForumXpCooldownResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllForumXpCooldownResponse
 */
export const QueryAllForumXpCooldownResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllForumXpCooldownResponse",
  encode(message: QueryAllForumXpCooldownResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.forumXpCooldown) {
      ForumXpCooldown.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllForumXpCooldownResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllForumXpCooldownResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forumXpCooldown.push(ForumXpCooldown.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllForumXpCooldownResponse>): QueryAllForumXpCooldownResponse {
    const message = createBaseQueryAllForumXpCooldownResponse();
    message.forumXpCooldown = object.forumXpCooldown?.map(e => ForumXpCooldown.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllForumXpCooldownResponseAmino): QueryAllForumXpCooldownResponse {
    const message = createBaseQueryAllForumXpCooldownResponse();
    message.forumXpCooldown = object.forum_xp_cooldown?.map(e => ForumXpCooldown.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllForumXpCooldownResponse): QueryAllForumXpCooldownResponseAmino {
    const obj: any = {};
    if (message.forumXpCooldown) {
      obj.forum_xp_cooldown = message.forumXpCooldown.map(e => e ? ForumXpCooldown.toAmino(e) : undefined);
    } else {
      obj.forum_xp_cooldown = message.forumXpCooldown;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllForumXpCooldownResponseAminoMsg): QueryAllForumXpCooldownResponse {
    return QueryAllForumXpCooldownResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllForumXpCooldownResponseProtoMsg): QueryAllForumXpCooldownResponse {
    return QueryAllForumXpCooldownResponse.decode(message.value);
  },
  toProto(message: QueryAllForumXpCooldownResponse): Uint8Array {
    return QueryAllForumXpCooldownResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllForumXpCooldownResponse): QueryAllForumXpCooldownResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllForumXpCooldownResponse",
      value: QueryAllForumXpCooldownResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDisplayNameModerationRequest(): QueryGetDisplayNameModerationRequest {
  return {
    member: ""
  };
}
/**
 * QueryGetDisplayNameModerationRequest defines the QueryGetDisplayNameModerationRequest message.
 * @name QueryGetDisplayNameModerationRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameModerationRequest
 */
export const QueryGetDisplayNameModerationRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameModerationRequest",
  encode(message: QueryGetDisplayNameModerationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDisplayNameModerationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDisplayNameModerationRequest();
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
  fromPartial(object: DeepPartial<QueryGetDisplayNameModerationRequest>): QueryGetDisplayNameModerationRequest {
    const message = createBaseQueryGetDisplayNameModerationRequest();
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: QueryGetDisplayNameModerationRequestAmino): QueryGetDisplayNameModerationRequest {
    const message = createBaseQueryGetDisplayNameModerationRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: QueryGetDisplayNameModerationRequest): QueryGetDisplayNameModerationRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: QueryGetDisplayNameModerationRequestAminoMsg): QueryGetDisplayNameModerationRequest {
    return QueryGetDisplayNameModerationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDisplayNameModerationRequestProtoMsg): QueryGetDisplayNameModerationRequest {
    return QueryGetDisplayNameModerationRequest.decode(message.value);
  },
  toProto(message: QueryGetDisplayNameModerationRequest): Uint8Array {
    return QueryGetDisplayNameModerationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDisplayNameModerationRequest): QueryGetDisplayNameModerationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameModerationRequest",
      value: QueryGetDisplayNameModerationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDisplayNameModerationResponse(): QueryGetDisplayNameModerationResponse {
  return {
    displayNameModeration: DisplayNameModeration.fromPartial({})
  };
}
/**
 * QueryGetDisplayNameModerationResponse defines the QueryGetDisplayNameModerationResponse message.
 * @name QueryGetDisplayNameModerationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameModerationResponse
 */
export const QueryGetDisplayNameModerationResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameModerationResponse",
  encode(message: QueryGetDisplayNameModerationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.displayNameModeration !== undefined) {
      DisplayNameModeration.encode(message.displayNameModeration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDisplayNameModerationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDisplayNameModerationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayNameModeration = DisplayNameModeration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetDisplayNameModerationResponse>): QueryGetDisplayNameModerationResponse {
    const message = createBaseQueryGetDisplayNameModerationResponse();
    message.displayNameModeration = object.displayNameModeration !== undefined && object.displayNameModeration !== null ? DisplayNameModeration.fromPartial(object.displayNameModeration) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDisplayNameModerationResponseAmino): QueryGetDisplayNameModerationResponse {
    const message = createBaseQueryGetDisplayNameModerationResponse();
    if (object.display_name_moderation !== undefined && object.display_name_moderation !== null) {
      message.displayNameModeration = DisplayNameModeration.fromAmino(object.display_name_moderation);
    }
    return message;
  },
  toAmino(message: QueryGetDisplayNameModerationResponse): QueryGetDisplayNameModerationResponseAmino {
    const obj: any = {};
    obj.display_name_moderation = message.displayNameModeration ? DisplayNameModeration.toAmino(message.displayNameModeration) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDisplayNameModerationResponseAminoMsg): QueryGetDisplayNameModerationResponse {
    return QueryGetDisplayNameModerationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDisplayNameModerationResponseProtoMsg): QueryGetDisplayNameModerationResponse {
    return QueryGetDisplayNameModerationResponse.decode(message.value);
  },
  toProto(message: QueryGetDisplayNameModerationResponse): Uint8Array {
    return QueryGetDisplayNameModerationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDisplayNameModerationResponse): QueryGetDisplayNameModerationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameModerationResponse",
      value: QueryGetDisplayNameModerationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDisplayNameModerationRequest(): QueryAllDisplayNameModerationRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllDisplayNameModerationRequest defines the QueryAllDisplayNameModerationRequest message.
 * @name QueryAllDisplayNameModerationRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameModerationRequest
 */
export const QueryAllDisplayNameModerationRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameModerationRequest",
  encode(message: QueryAllDisplayNameModerationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDisplayNameModerationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDisplayNameModerationRequest();
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
  fromPartial(object: DeepPartial<QueryAllDisplayNameModerationRequest>): QueryAllDisplayNameModerationRequest {
    const message = createBaseQueryAllDisplayNameModerationRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDisplayNameModerationRequestAmino): QueryAllDisplayNameModerationRequest {
    const message = createBaseQueryAllDisplayNameModerationRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDisplayNameModerationRequest): QueryAllDisplayNameModerationRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDisplayNameModerationRequestAminoMsg): QueryAllDisplayNameModerationRequest {
    return QueryAllDisplayNameModerationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDisplayNameModerationRequestProtoMsg): QueryAllDisplayNameModerationRequest {
    return QueryAllDisplayNameModerationRequest.decode(message.value);
  },
  toProto(message: QueryAllDisplayNameModerationRequest): Uint8Array {
    return QueryAllDisplayNameModerationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDisplayNameModerationRequest): QueryAllDisplayNameModerationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameModerationRequest",
      value: QueryAllDisplayNameModerationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDisplayNameModerationResponse(): QueryAllDisplayNameModerationResponse {
  return {
    displayNameModeration: [],
    pagination: undefined
  };
}
/**
 * QueryAllDisplayNameModerationResponse defines the QueryAllDisplayNameModerationResponse message.
 * @name QueryAllDisplayNameModerationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameModerationResponse
 */
export const QueryAllDisplayNameModerationResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameModerationResponse",
  encode(message: QueryAllDisplayNameModerationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.displayNameModeration) {
      DisplayNameModeration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDisplayNameModerationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDisplayNameModerationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayNameModeration.push(DisplayNameModeration.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllDisplayNameModerationResponse>): QueryAllDisplayNameModerationResponse {
    const message = createBaseQueryAllDisplayNameModerationResponse();
    message.displayNameModeration = object.displayNameModeration?.map(e => DisplayNameModeration.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDisplayNameModerationResponseAmino): QueryAllDisplayNameModerationResponse {
    const message = createBaseQueryAllDisplayNameModerationResponse();
    message.displayNameModeration = object.display_name_moderation?.map(e => DisplayNameModeration.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDisplayNameModerationResponse): QueryAllDisplayNameModerationResponseAmino {
    const obj: any = {};
    if (message.displayNameModeration) {
      obj.display_name_moderation = message.displayNameModeration.map(e => e ? DisplayNameModeration.toAmino(e) : undefined);
    } else {
      obj.display_name_moderation = message.displayNameModeration;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDisplayNameModerationResponseAminoMsg): QueryAllDisplayNameModerationResponse {
    return QueryAllDisplayNameModerationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDisplayNameModerationResponseProtoMsg): QueryAllDisplayNameModerationResponse {
    return QueryAllDisplayNameModerationResponse.decode(message.value);
  },
  toProto(message: QueryAllDisplayNameModerationResponse): Uint8Array {
    return QueryAllDisplayNameModerationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDisplayNameModerationResponse): QueryAllDisplayNameModerationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameModerationResponse",
      value: QueryAllDisplayNameModerationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDisplayNameReportStakeRequest(): QueryGetDisplayNameReportStakeRequest {
  return {
    challengeId: ""
  };
}
/**
 * QueryGetDisplayNameReportStakeRequest defines the QueryGetDisplayNameReportStakeRequest message.
 * @name QueryGetDisplayNameReportStakeRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameReportStakeRequest
 */
export const QueryGetDisplayNameReportStakeRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameReportStakeRequest",
  encode(message: QueryGetDisplayNameReportStakeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challengeId !== "") {
      writer.uint32(10).string(message.challengeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDisplayNameReportStakeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDisplayNameReportStakeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetDisplayNameReportStakeRequest>): QueryGetDisplayNameReportStakeRequest {
    const message = createBaseQueryGetDisplayNameReportStakeRequest();
    message.challengeId = object.challengeId ?? "";
    return message;
  },
  fromAmino(object: QueryGetDisplayNameReportStakeRequestAmino): QueryGetDisplayNameReportStakeRequest {
    const message = createBaseQueryGetDisplayNameReportStakeRequest();
    if (object.challenge_id !== undefined && object.challenge_id !== null) {
      message.challengeId = object.challenge_id;
    }
    return message;
  },
  toAmino(message: QueryGetDisplayNameReportStakeRequest): QueryGetDisplayNameReportStakeRequestAmino {
    const obj: any = {};
    obj.challenge_id = message.challengeId === "" ? undefined : message.challengeId;
    return obj;
  },
  fromAminoMsg(object: QueryGetDisplayNameReportStakeRequestAminoMsg): QueryGetDisplayNameReportStakeRequest {
    return QueryGetDisplayNameReportStakeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDisplayNameReportStakeRequestProtoMsg): QueryGetDisplayNameReportStakeRequest {
    return QueryGetDisplayNameReportStakeRequest.decode(message.value);
  },
  toProto(message: QueryGetDisplayNameReportStakeRequest): Uint8Array {
    return QueryGetDisplayNameReportStakeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDisplayNameReportStakeRequest): QueryGetDisplayNameReportStakeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameReportStakeRequest",
      value: QueryGetDisplayNameReportStakeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDisplayNameReportStakeResponse(): QueryGetDisplayNameReportStakeResponse {
  return {
    displayNameReportStake: DisplayNameReportStake.fromPartial({})
  };
}
/**
 * QueryGetDisplayNameReportStakeResponse defines the QueryGetDisplayNameReportStakeResponse message.
 * @name QueryGetDisplayNameReportStakeResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameReportStakeResponse
 */
export const QueryGetDisplayNameReportStakeResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameReportStakeResponse",
  encode(message: QueryGetDisplayNameReportStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.displayNameReportStake !== undefined) {
      DisplayNameReportStake.encode(message.displayNameReportStake, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDisplayNameReportStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDisplayNameReportStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayNameReportStake = DisplayNameReportStake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetDisplayNameReportStakeResponse>): QueryGetDisplayNameReportStakeResponse {
    const message = createBaseQueryGetDisplayNameReportStakeResponse();
    message.displayNameReportStake = object.displayNameReportStake !== undefined && object.displayNameReportStake !== null ? DisplayNameReportStake.fromPartial(object.displayNameReportStake) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDisplayNameReportStakeResponseAmino): QueryGetDisplayNameReportStakeResponse {
    const message = createBaseQueryGetDisplayNameReportStakeResponse();
    if (object.display_name_report_stake !== undefined && object.display_name_report_stake !== null) {
      message.displayNameReportStake = DisplayNameReportStake.fromAmino(object.display_name_report_stake);
    }
    return message;
  },
  toAmino(message: QueryGetDisplayNameReportStakeResponse): QueryGetDisplayNameReportStakeResponseAmino {
    const obj: any = {};
    obj.display_name_report_stake = message.displayNameReportStake ? DisplayNameReportStake.toAmino(message.displayNameReportStake) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDisplayNameReportStakeResponseAminoMsg): QueryGetDisplayNameReportStakeResponse {
    return QueryGetDisplayNameReportStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDisplayNameReportStakeResponseProtoMsg): QueryGetDisplayNameReportStakeResponse {
    return QueryGetDisplayNameReportStakeResponse.decode(message.value);
  },
  toProto(message: QueryGetDisplayNameReportStakeResponse): Uint8Array {
    return QueryGetDisplayNameReportStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDisplayNameReportStakeResponse): QueryGetDisplayNameReportStakeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameReportStakeResponse",
      value: QueryGetDisplayNameReportStakeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDisplayNameReportStakeRequest(): QueryAllDisplayNameReportStakeRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllDisplayNameReportStakeRequest defines the QueryAllDisplayNameReportStakeRequest message.
 * @name QueryAllDisplayNameReportStakeRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameReportStakeRequest
 */
export const QueryAllDisplayNameReportStakeRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameReportStakeRequest",
  encode(message: QueryAllDisplayNameReportStakeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDisplayNameReportStakeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDisplayNameReportStakeRequest();
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
  fromPartial(object: DeepPartial<QueryAllDisplayNameReportStakeRequest>): QueryAllDisplayNameReportStakeRequest {
    const message = createBaseQueryAllDisplayNameReportStakeRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDisplayNameReportStakeRequestAmino): QueryAllDisplayNameReportStakeRequest {
    const message = createBaseQueryAllDisplayNameReportStakeRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDisplayNameReportStakeRequest): QueryAllDisplayNameReportStakeRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDisplayNameReportStakeRequestAminoMsg): QueryAllDisplayNameReportStakeRequest {
    return QueryAllDisplayNameReportStakeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDisplayNameReportStakeRequestProtoMsg): QueryAllDisplayNameReportStakeRequest {
    return QueryAllDisplayNameReportStakeRequest.decode(message.value);
  },
  toProto(message: QueryAllDisplayNameReportStakeRequest): Uint8Array {
    return QueryAllDisplayNameReportStakeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDisplayNameReportStakeRequest): QueryAllDisplayNameReportStakeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameReportStakeRequest",
      value: QueryAllDisplayNameReportStakeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDisplayNameReportStakeResponse(): QueryAllDisplayNameReportStakeResponse {
  return {
    displayNameReportStake: [],
    pagination: undefined
  };
}
/**
 * QueryAllDisplayNameReportStakeResponse defines the QueryAllDisplayNameReportStakeResponse message.
 * @name QueryAllDisplayNameReportStakeResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameReportStakeResponse
 */
export const QueryAllDisplayNameReportStakeResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameReportStakeResponse",
  encode(message: QueryAllDisplayNameReportStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.displayNameReportStake) {
      DisplayNameReportStake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDisplayNameReportStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDisplayNameReportStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayNameReportStake.push(DisplayNameReportStake.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllDisplayNameReportStakeResponse>): QueryAllDisplayNameReportStakeResponse {
    const message = createBaseQueryAllDisplayNameReportStakeResponse();
    message.displayNameReportStake = object.displayNameReportStake?.map(e => DisplayNameReportStake.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDisplayNameReportStakeResponseAmino): QueryAllDisplayNameReportStakeResponse {
    const message = createBaseQueryAllDisplayNameReportStakeResponse();
    message.displayNameReportStake = object.display_name_report_stake?.map(e => DisplayNameReportStake.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDisplayNameReportStakeResponse): QueryAllDisplayNameReportStakeResponseAmino {
    const obj: any = {};
    if (message.displayNameReportStake) {
      obj.display_name_report_stake = message.displayNameReportStake.map(e => e ? DisplayNameReportStake.toAmino(e) : undefined);
    } else {
      obj.display_name_report_stake = message.displayNameReportStake;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDisplayNameReportStakeResponseAminoMsg): QueryAllDisplayNameReportStakeResponse {
    return QueryAllDisplayNameReportStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDisplayNameReportStakeResponseProtoMsg): QueryAllDisplayNameReportStakeResponse {
    return QueryAllDisplayNameReportStakeResponse.decode(message.value);
  },
  toProto(message: QueryAllDisplayNameReportStakeResponse): Uint8Array {
    return QueryAllDisplayNameReportStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDisplayNameReportStakeResponse): QueryAllDisplayNameReportStakeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameReportStakeResponse",
      value: QueryAllDisplayNameReportStakeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDisplayNameAppealStakeRequest(): QueryGetDisplayNameAppealStakeRequest {
  return {
    challengeId: ""
  };
}
/**
 * QueryGetDisplayNameAppealStakeRequest defines the QueryGetDisplayNameAppealStakeRequest message.
 * @name QueryGetDisplayNameAppealStakeRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameAppealStakeRequest
 */
export const QueryGetDisplayNameAppealStakeRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameAppealStakeRequest",
  encode(message: QueryGetDisplayNameAppealStakeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challengeId !== "") {
      writer.uint32(10).string(message.challengeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDisplayNameAppealStakeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDisplayNameAppealStakeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetDisplayNameAppealStakeRequest>): QueryGetDisplayNameAppealStakeRequest {
    const message = createBaseQueryGetDisplayNameAppealStakeRequest();
    message.challengeId = object.challengeId ?? "";
    return message;
  },
  fromAmino(object: QueryGetDisplayNameAppealStakeRequestAmino): QueryGetDisplayNameAppealStakeRequest {
    const message = createBaseQueryGetDisplayNameAppealStakeRequest();
    if (object.challenge_id !== undefined && object.challenge_id !== null) {
      message.challengeId = object.challenge_id;
    }
    return message;
  },
  toAmino(message: QueryGetDisplayNameAppealStakeRequest): QueryGetDisplayNameAppealStakeRequestAmino {
    const obj: any = {};
    obj.challenge_id = message.challengeId === "" ? undefined : message.challengeId;
    return obj;
  },
  fromAminoMsg(object: QueryGetDisplayNameAppealStakeRequestAminoMsg): QueryGetDisplayNameAppealStakeRequest {
    return QueryGetDisplayNameAppealStakeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDisplayNameAppealStakeRequestProtoMsg): QueryGetDisplayNameAppealStakeRequest {
    return QueryGetDisplayNameAppealStakeRequest.decode(message.value);
  },
  toProto(message: QueryGetDisplayNameAppealStakeRequest): Uint8Array {
    return QueryGetDisplayNameAppealStakeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDisplayNameAppealStakeRequest): QueryGetDisplayNameAppealStakeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameAppealStakeRequest",
      value: QueryGetDisplayNameAppealStakeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDisplayNameAppealStakeResponse(): QueryGetDisplayNameAppealStakeResponse {
  return {
    displayNameAppealStake: DisplayNameAppealStake.fromPartial({})
  };
}
/**
 * QueryGetDisplayNameAppealStakeResponse defines the QueryGetDisplayNameAppealStakeResponse message.
 * @name QueryGetDisplayNameAppealStakeResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetDisplayNameAppealStakeResponse
 */
export const QueryGetDisplayNameAppealStakeResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameAppealStakeResponse",
  encode(message: QueryGetDisplayNameAppealStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.displayNameAppealStake !== undefined) {
      DisplayNameAppealStake.encode(message.displayNameAppealStake, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDisplayNameAppealStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDisplayNameAppealStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayNameAppealStake = DisplayNameAppealStake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetDisplayNameAppealStakeResponse>): QueryGetDisplayNameAppealStakeResponse {
    const message = createBaseQueryGetDisplayNameAppealStakeResponse();
    message.displayNameAppealStake = object.displayNameAppealStake !== undefined && object.displayNameAppealStake !== null ? DisplayNameAppealStake.fromPartial(object.displayNameAppealStake) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDisplayNameAppealStakeResponseAmino): QueryGetDisplayNameAppealStakeResponse {
    const message = createBaseQueryGetDisplayNameAppealStakeResponse();
    if (object.display_name_appeal_stake !== undefined && object.display_name_appeal_stake !== null) {
      message.displayNameAppealStake = DisplayNameAppealStake.fromAmino(object.display_name_appeal_stake);
    }
    return message;
  },
  toAmino(message: QueryGetDisplayNameAppealStakeResponse): QueryGetDisplayNameAppealStakeResponseAmino {
    const obj: any = {};
    obj.display_name_appeal_stake = message.displayNameAppealStake ? DisplayNameAppealStake.toAmino(message.displayNameAppealStake) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDisplayNameAppealStakeResponseAminoMsg): QueryGetDisplayNameAppealStakeResponse {
    return QueryGetDisplayNameAppealStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDisplayNameAppealStakeResponseProtoMsg): QueryGetDisplayNameAppealStakeResponse {
    return QueryGetDisplayNameAppealStakeResponse.decode(message.value);
  },
  toProto(message: QueryGetDisplayNameAppealStakeResponse): Uint8Array {
    return QueryGetDisplayNameAppealStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDisplayNameAppealStakeResponse): QueryGetDisplayNameAppealStakeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetDisplayNameAppealStakeResponse",
      value: QueryGetDisplayNameAppealStakeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDisplayNameAppealStakeRequest(): QueryAllDisplayNameAppealStakeRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAllDisplayNameAppealStakeRequest defines the QueryAllDisplayNameAppealStakeRequest message.
 * @name QueryAllDisplayNameAppealStakeRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameAppealStakeRequest
 */
export const QueryAllDisplayNameAppealStakeRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameAppealStakeRequest",
  encode(message: QueryAllDisplayNameAppealStakeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDisplayNameAppealStakeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDisplayNameAppealStakeRequest();
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
  fromPartial(object: DeepPartial<QueryAllDisplayNameAppealStakeRequest>): QueryAllDisplayNameAppealStakeRequest {
    const message = createBaseQueryAllDisplayNameAppealStakeRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDisplayNameAppealStakeRequestAmino): QueryAllDisplayNameAppealStakeRequest {
    const message = createBaseQueryAllDisplayNameAppealStakeRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDisplayNameAppealStakeRequest): QueryAllDisplayNameAppealStakeRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDisplayNameAppealStakeRequestAminoMsg): QueryAllDisplayNameAppealStakeRequest {
    return QueryAllDisplayNameAppealStakeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDisplayNameAppealStakeRequestProtoMsg): QueryAllDisplayNameAppealStakeRequest {
    return QueryAllDisplayNameAppealStakeRequest.decode(message.value);
  },
  toProto(message: QueryAllDisplayNameAppealStakeRequest): Uint8Array {
    return QueryAllDisplayNameAppealStakeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDisplayNameAppealStakeRequest): QueryAllDisplayNameAppealStakeRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameAppealStakeRequest",
      value: QueryAllDisplayNameAppealStakeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDisplayNameAppealStakeResponse(): QueryAllDisplayNameAppealStakeResponse {
  return {
    displayNameAppealStake: [],
    pagination: undefined
  };
}
/**
 * QueryAllDisplayNameAppealStakeResponse defines the QueryAllDisplayNameAppealStakeResponse message.
 * @name QueryAllDisplayNameAppealStakeResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAllDisplayNameAppealStakeResponse
 */
export const QueryAllDisplayNameAppealStakeResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameAppealStakeResponse",
  encode(message: QueryAllDisplayNameAppealStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.displayNameAppealStake) {
      DisplayNameAppealStake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDisplayNameAppealStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDisplayNameAppealStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayNameAppealStake.push(DisplayNameAppealStake.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllDisplayNameAppealStakeResponse>): QueryAllDisplayNameAppealStakeResponse {
    const message = createBaseQueryAllDisplayNameAppealStakeResponse();
    message.displayNameAppealStake = object.displayNameAppealStake?.map(e => DisplayNameAppealStake.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDisplayNameAppealStakeResponseAmino): QueryAllDisplayNameAppealStakeResponse {
    const message = createBaseQueryAllDisplayNameAppealStakeResponse();
    message.displayNameAppealStake = object.display_name_appeal_stake?.map(e => DisplayNameAppealStake.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDisplayNameAppealStakeResponse): QueryAllDisplayNameAppealStakeResponseAmino {
    const obj: any = {};
    if (message.displayNameAppealStake) {
      obj.display_name_appeal_stake = message.displayNameAppealStake.map(e => e ? DisplayNameAppealStake.toAmino(e) : undefined);
    } else {
      obj.display_name_appeal_stake = message.displayNameAppealStake;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDisplayNameAppealStakeResponseAminoMsg): QueryAllDisplayNameAppealStakeResponse {
    return QueryAllDisplayNameAppealStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDisplayNameAppealStakeResponseProtoMsg): QueryAllDisplayNameAppealStakeResponse {
    return QueryAllDisplayNameAppealStakeResponse.decode(message.value);
  },
  toProto(message: QueryAllDisplayNameAppealStakeResponse): Uint8Array {
    return QueryAllDisplayNameAppealStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDisplayNameAppealStakeResponse): QueryAllDisplayNameAppealStakeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAllDisplayNameAppealStakeResponse",
      value: QueryAllDisplayNameAppealStakeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentSeasonRequest(): QueryCurrentSeasonRequest {
  return {};
}
/**
 * QueryCurrentSeasonRequest defines the QueryCurrentSeasonRequest message.
 * @name QueryCurrentSeasonRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryCurrentSeasonRequest
 */
export const QueryCurrentSeasonRequest = {
  typeUrl: "/sparkdream.season.v1.QueryCurrentSeasonRequest",
  encode(_: QueryCurrentSeasonRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentSeasonRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentSeasonRequest();
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
  fromPartial(_: DeepPartial<QueryCurrentSeasonRequest>): QueryCurrentSeasonRequest {
    const message = createBaseQueryCurrentSeasonRequest();
    return message;
  },
  fromAmino(_: QueryCurrentSeasonRequestAmino): QueryCurrentSeasonRequest {
    const message = createBaseQueryCurrentSeasonRequest();
    return message;
  },
  toAmino(_: QueryCurrentSeasonRequest): QueryCurrentSeasonRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentSeasonRequestAminoMsg): QueryCurrentSeasonRequest {
    return QueryCurrentSeasonRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentSeasonRequestProtoMsg): QueryCurrentSeasonRequest {
    return QueryCurrentSeasonRequest.decode(message.value);
  },
  toProto(message: QueryCurrentSeasonRequest): Uint8Array {
    return QueryCurrentSeasonRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentSeasonRequest): QueryCurrentSeasonRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryCurrentSeasonRequest",
      value: QueryCurrentSeasonRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentSeasonResponse(): QueryCurrentSeasonResponse {
  return {
    number: BigInt(0),
    name: "",
    theme: "",
    startBlock: BigInt(0),
    endBlock: BigInt(0),
    status: BigInt(0)
  };
}
/**
 * QueryCurrentSeasonResponse defines the QueryCurrentSeasonResponse message.
 * @name QueryCurrentSeasonResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryCurrentSeasonResponse
 */
export const QueryCurrentSeasonResponse = {
  typeUrl: "/sparkdream.season.v1.QueryCurrentSeasonResponse",
  encode(message: QueryCurrentSeasonResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.number !== BigInt(0)) {
      writer.uint32(8).uint64(message.number);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.theme !== "") {
      writer.uint32(26).string(message.theme);
    }
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.startBlock);
    }
    if (message.endBlock !== BigInt(0)) {
      writer.uint32(40).int64(message.endBlock);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(48).uint64(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentSeasonResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentSeasonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.theme = reader.string();
          break;
        case 4:
          message.startBlock = reader.int64();
          break;
        case 5:
          message.endBlock = reader.int64();
          break;
        case 6:
          message.status = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurrentSeasonResponse>): QueryCurrentSeasonResponse {
    const message = createBaseQueryCurrentSeasonResponse();
    message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.theme = object.theme ?? "";
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? BigInt(object.endBlock.toString()) : BigInt(0);
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCurrentSeasonResponseAmino): QueryCurrentSeasonResponse {
    const message = createBaseQueryCurrentSeasonResponse();
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.theme !== undefined && object.theme !== null) {
      message.theme = object.theme;
    }
    if (object.start_block !== undefined && object.start_block !== null) {
      message.startBlock = BigInt(object.start_block);
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = BigInt(object.end_block);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    return message;
  },
  toAmino(message: QueryCurrentSeasonResponse): QueryCurrentSeasonResponseAmino {
    const obj: any = {};
    obj.number = message.number !== BigInt(0) ? message.number?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.theme = message.theme === "" ? undefined : message.theme;
    obj.start_block = message.startBlock !== BigInt(0) ? message.startBlock?.toString() : undefined;
    obj.end_block = message.endBlock !== BigInt(0) ? message.endBlock?.toString() : undefined;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentSeasonResponseAminoMsg): QueryCurrentSeasonResponse {
    return QueryCurrentSeasonResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentSeasonResponseProtoMsg): QueryCurrentSeasonResponse {
    return QueryCurrentSeasonResponse.decode(message.value);
  },
  toProto(message: QueryCurrentSeasonResponse): Uint8Array {
    return QueryCurrentSeasonResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentSeasonResponse): QueryCurrentSeasonResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryCurrentSeasonResponse",
      value: QueryCurrentSeasonResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySeasonByNumberRequest(): QuerySeasonByNumberRequest {
  return {
    number: BigInt(0)
  };
}
/**
 * QuerySeasonByNumberRequest defines the QuerySeasonByNumberRequest message.
 * @name QuerySeasonByNumberRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuerySeasonByNumberRequest
 */
export const QuerySeasonByNumberRequest = {
  typeUrl: "/sparkdream.season.v1.QuerySeasonByNumberRequest",
  encode(message: QuerySeasonByNumberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.number !== BigInt(0)) {
      writer.uint32(8).uint64(message.number);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySeasonByNumberRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySeasonByNumberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySeasonByNumberRequest>): QuerySeasonByNumberRequest {
    const message = createBaseQuerySeasonByNumberRequest();
    message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySeasonByNumberRequestAmino): QuerySeasonByNumberRequest {
    const message = createBaseQuerySeasonByNumberRequest();
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number);
    }
    return message;
  },
  toAmino(message: QuerySeasonByNumberRequest): QuerySeasonByNumberRequestAmino {
    const obj: any = {};
    obj.number = message.number !== BigInt(0) ? message.number?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySeasonByNumberRequestAminoMsg): QuerySeasonByNumberRequest {
    return QuerySeasonByNumberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySeasonByNumberRequestProtoMsg): QuerySeasonByNumberRequest {
    return QuerySeasonByNumberRequest.decode(message.value);
  },
  toProto(message: QuerySeasonByNumberRequest): Uint8Array {
    return QuerySeasonByNumberRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySeasonByNumberRequest): QuerySeasonByNumberRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QuerySeasonByNumberRequest",
      value: QuerySeasonByNumberRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySeasonByNumberResponse(): QuerySeasonByNumberResponse {
  return {
    name: "",
    theme: "",
    startBlock: BigInt(0),
    endBlock: BigInt(0),
    status: BigInt(0)
  };
}
/**
 * QuerySeasonByNumberResponse defines the QuerySeasonByNumberResponse message.
 * @name QuerySeasonByNumberResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuerySeasonByNumberResponse
 */
export const QuerySeasonByNumberResponse = {
  typeUrl: "/sparkdream.season.v1.QuerySeasonByNumberResponse",
  encode(message: QuerySeasonByNumberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.theme !== "") {
      writer.uint32(18).string(message.theme);
    }
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.startBlock);
    }
    if (message.endBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.endBlock);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(40).uint64(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySeasonByNumberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySeasonByNumberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.theme = reader.string();
          break;
        case 3:
          message.startBlock = reader.int64();
          break;
        case 4:
          message.endBlock = reader.int64();
          break;
        case 5:
          message.status = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySeasonByNumberResponse>): QuerySeasonByNumberResponse {
    const message = createBaseQuerySeasonByNumberResponse();
    message.name = object.name ?? "";
    message.theme = object.theme ?? "";
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? BigInt(object.endBlock.toString()) : BigInt(0);
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySeasonByNumberResponseAmino): QuerySeasonByNumberResponse {
    const message = createBaseQuerySeasonByNumberResponse();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.theme !== undefined && object.theme !== null) {
      message.theme = object.theme;
    }
    if (object.start_block !== undefined && object.start_block !== null) {
      message.startBlock = BigInt(object.start_block);
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = BigInt(object.end_block);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    return message;
  },
  toAmino(message: QuerySeasonByNumberResponse): QuerySeasonByNumberResponseAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.theme = message.theme === "" ? undefined : message.theme;
    obj.start_block = message.startBlock !== BigInt(0) ? message.startBlock?.toString() : undefined;
    obj.end_block = message.endBlock !== BigInt(0) ? message.endBlock?.toString() : undefined;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySeasonByNumberResponseAminoMsg): QuerySeasonByNumberResponse {
    return QuerySeasonByNumberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySeasonByNumberResponseProtoMsg): QuerySeasonByNumberResponse {
    return QuerySeasonByNumberResponse.decode(message.value);
  },
  toProto(message: QuerySeasonByNumberResponse): Uint8Array {
    return QuerySeasonByNumberResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySeasonByNumberResponse): QuerySeasonByNumberResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QuerySeasonByNumberResponse",
      value: QuerySeasonByNumberResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySeasonStatsRequest(): QuerySeasonStatsRequest {
  return {
    season: BigInt(0)
  };
}
/**
 * QuerySeasonStatsRequest defines the QuerySeasonStatsRequest message.
 * @name QuerySeasonStatsRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuerySeasonStatsRequest
 */
export const QuerySeasonStatsRequest = {
  typeUrl: "/sparkdream.season.v1.QuerySeasonStatsRequest",
  encode(message: QuerySeasonStatsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.season !== BigInt(0)) {
      writer.uint32(8).uint64(message.season);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySeasonStatsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySeasonStatsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.season = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySeasonStatsRequest>): QuerySeasonStatsRequest {
    const message = createBaseQuerySeasonStatsRequest();
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySeasonStatsRequestAmino): QuerySeasonStatsRequest {
    const message = createBaseQuerySeasonStatsRequest();
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    return message;
  },
  toAmino(message: QuerySeasonStatsRequest): QuerySeasonStatsRequestAmino {
    const obj: any = {};
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySeasonStatsRequestAminoMsg): QuerySeasonStatsRequest {
    return QuerySeasonStatsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySeasonStatsRequestProtoMsg): QuerySeasonStatsRequest {
    return QuerySeasonStatsRequest.decode(message.value);
  },
  toProto(message: QuerySeasonStatsRequest): Uint8Array {
    return QuerySeasonStatsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySeasonStatsRequest): QuerySeasonStatsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QuerySeasonStatsRequest",
      value: QuerySeasonStatsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySeasonStatsResponse(): QuerySeasonStatsResponse {
  return {
    totalXpEarned: BigInt(0),
    activeMembers: BigInt(0),
    initiativesCompleted: BigInt(0),
    guildsActive: BigInt(0),
    questsCompleted: BigInt(0),
    blocksRemaining: BigInt(0)
  };
}
/**
 * QuerySeasonStatsResponse defines the QuerySeasonStatsResponse message.
 * @name QuerySeasonStatsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuerySeasonStatsResponse
 */
export const QuerySeasonStatsResponse = {
  typeUrl: "/sparkdream.season.v1.QuerySeasonStatsResponse",
  encode(message: QuerySeasonStatsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalXpEarned !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalXpEarned);
    }
    if (message.activeMembers !== BigInt(0)) {
      writer.uint32(16).uint64(message.activeMembers);
    }
    if (message.initiativesCompleted !== BigInt(0)) {
      writer.uint32(24).uint64(message.initiativesCompleted);
    }
    if (message.guildsActive !== BigInt(0)) {
      writer.uint32(32).uint64(message.guildsActive);
    }
    if (message.questsCompleted !== BigInt(0)) {
      writer.uint32(40).uint64(message.questsCompleted);
    }
    if (message.blocksRemaining !== BigInt(0)) {
      writer.uint32(48).int64(message.blocksRemaining);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySeasonStatsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySeasonStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalXpEarned = reader.uint64();
          break;
        case 2:
          message.activeMembers = reader.uint64();
          break;
        case 3:
          message.initiativesCompleted = reader.uint64();
          break;
        case 4:
          message.guildsActive = reader.uint64();
          break;
        case 5:
          message.questsCompleted = reader.uint64();
          break;
        case 6:
          message.blocksRemaining = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySeasonStatsResponse>): QuerySeasonStatsResponse {
    const message = createBaseQuerySeasonStatsResponse();
    message.totalXpEarned = object.totalXpEarned !== undefined && object.totalXpEarned !== null ? BigInt(object.totalXpEarned.toString()) : BigInt(0);
    message.activeMembers = object.activeMembers !== undefined && object.activeMembers !== null ? BigInt(object.activeMembers.toString()) : BigInt(0);
    message.initiativesCompleted = object.initiativesCompleted !== undefined && object.initiativesCompleted !== null ? BigInt(object.initiativesCompleted.toString()) : BigInt(0);
    message.guildsActive = object.guildsActive !== undefined && object.guildsActive !== null ? BigInt(object.guildsActive.toString()) : BigInt(0);
    message.questsCompleted = object.questsCompleted !== undefined && object.questsCompleted !== null ? BigInt(object.questsCompleted.toString()) : BigInt(0);
    message.blocksRemaining = object.blocksRemaining !== undefined && object.blocksRemaining !== null ? BigInt(object.blocksRemaining.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySeasonStatsResponseAmino): QuerySeasonStatsResponse {
    const message = createBaseQuerySeasonStatsResponse();
    if (object.total_xp_earned !== undefined && object.total_xp_earned !== null) {
      message.totalXpEarned = BigInt(object.total_xp_earned);
    }
    if (object.active_members !== undefined && object.active_members !== null) {
      message.activeMembers = BigInt(object.active_members);
    }
    if (object.initiatives_completed !== undefined && object.initiatives_completed !== null) {
      message.initiativesCompleted = BigInt(object.initiatives_completed);
    }
    if (object.guilds_active !== undefined && object.guilds_active !== null) {
      message.guildsActive = BigInt(object.guilds_active);
    }
    if (object.quests_completed !== undefined && object.quests_completed !== null) {
      message.questsCompleted = BigInt(object.quests_completed);
    }
    if (object.blocks_remaining !== undefined && object.blocks_remaining !== null) {
      message.blocksRemaining = BigInt(object.blocks_remaining);
    }
    return message;
  },
  toAmino(message: QuerySeasonStatsResponse): QuerySeasonStatsResponseAmino {
    const obj: any = {};
    obj.total_xp_earned = message.totalXpEarned !== BigInt(0) ? message.totalXpEarned?.toString() : undefined;
    obj.active_members = message.activeMembers !== BigInt(0) ? message.activeMembers?.toString() : undefined;
    obj.initiatives_completed = message.initiativesCompleted !== BigInt(0) ? message.initiativesCompleted?.toString() : undefined;
    obj.guilds_active = message.guildsActive !== BigInt(0) ? message.guildsActive?.toString() : undefined;
    obj.quests_completed = message.questsCompleted !== BigInt(0) ? message.questsCompleted?.toString() : undefined;
    obj.blocks_remaining = message.blocksRemaining !== BigInt(0) ? message.blocksRemaining?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySeasonStatsResponseAminoMsg): QuerySeasonStatsResponse {
    return QuerySeasonStatsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySeasonStatsResponseProtoMsg): QuerySeasonStatsResponse {
    return QuerySeasonStatsResponse.decode(message.value);
  },
  toProto(message: QuerySeasonStatsResponse): Uint8Array {
    return QuerySeasonStatsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySeasonStatsResponse): QuerySeasonStatsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QuerySeasonStatsResponse",
      value: QuerySeasonStatsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberByDisplayNameRequest(): QueryMemberByDisplayNameRequest {
  return {
    displayName: ""
  };
}
/**
 * QueryMemberByDisplayNameRequest defines the QueryMemberByDisplayNameRequest message.
 * @name QueryMemberByDisplayNameRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberByDisplayNameRequest
 */
export const QueryMemberByDisplayNameRequest = {
  typeUrl: "/sparkdream.season.v1.QueryMemberByDisplayNameRequest",
  encode(message: QueryMemberByDisplayNameRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberByDisplayNameRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberByDisplayNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberByDisplayNameRequest>): QueryMemberByDisplayNameRequest {
    const message = createBaseQueryMemberByDisplayNameRequest();
    message.displayName = object.displayName ?? "";
    return message;
  },
  fromAmino(object: QueryMemberByDisplayNameRequestAmino): QueryMemberByDisplayNameRequest {
    const message = createBaseQueryMemberByDisplayNameRequest();
    if (object.display_name !== undefined && object.display_name !== null) {
      message.displayName = object.display_name;
    }
    return message;
  },
  toAmino(message: QueryMemberByDisplayNameRequest): QueryMemberByDisplayNameRequestAmino {
    const obj: any = {};
    obj.display_name = message.displayName === "" ? undefined : message.displayName;
    return obj;
  },
  fromAminoMsg(object: QueryMemberByDisplayNameRequestAminoMsg): QueryMemberByDisplayNameRequest {
    return QueryMemberByDisplayNameRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberByDisplayNameRequestProtoMsg): QueryMemberByDisplayNameRequest {
    return QueryMemberByDisplayNameRequest.decode(message.value);
  },
  toProto(message: QueryMemberByDisplayNameRequest): Uint8Array {
    return QueryMemberByDisplayNameRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberByDisplayNameRequest): QueryMemberByDisplayNameRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberByDisplayNameRequest",
      value: QueryMemberByDisplayNameRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberByDisplayNameResponse(): QueryMemberByDisplayNameResponse {
  return {
    address: "",
    username: "",
    seasonXp: BigInt(0)
  };
}
/**
 * QueryMemberByDisplayNameResponse defines the QueryMemberByDisplayNameResponse message.
 * @name QueryMemberByDisplayNameResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberByDisplayNameResponse
 */
export const QueryMemberByDisplayNameResponse = {
  typeUrl: "/sparkdream.season.v1.QueryMemberByDisplayNameResponse",
  encode(message: QueryMemberByDisplayNameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.seasonXp !== BigInt(0)) {
      writer.uint32(24).uint64(message.seasonXp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberByDisplayNameResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberByDisplayNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.seasonXp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberByDisplayNameResponse>): QueryMemberByDisplayNameResponse {
    const message = createBaseQueryMemberByDisplayNameResponse();
    message.address = object.address ?? "";
    message.username = object.username ?? "";
    message.seasonXp = object.seasonXp !== undefined && object.seasonXp !== null ? BigInt(object.seasonXp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMemberByDisplayNameResponseAmino): QueryMemberByDisplayNameResponse {
    const message = createBaseQueryMemberByDisplayNameResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    }
    if (object.season_xp !== undefined && object.season_xp !== null) {
      message.seasonXp = BigInt(object.season_xp);
    }
    return message;
  },
  toAmino(message: QueryMemberByDisplayNameResponse): QueryMemberByDisplayNameResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.username = message.username === "" ? undefined : message.username;
    obj.season_xp = message.seasonXp !== BigInt(0) ? message.seasonXp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberByDisplayNameResponseAminoMsg): QueryMemberByDisplayNameResponse {
    return QueryMemberByDisplayNameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberByDisplayNameResponseProtoMsg): QueryMemberByDisplayNameResponse {
    return QueryMemberByDisplayNameResponse.decode(message.value);
  },
  toProto(message: QueryMemberByDisplayNameResponse): Uint8Array {
    return QueryMemberByDisplayNameResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberByDisplayNameResponse): QueryMemberByDisplayNameResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberByDisplayNameResponse",
      value: QueryMemberByDisplayNameResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberSeasonHistoryRequest(): QueryMemberSeasonHistoryRequest {
  return {
    address: "",
    pagination: undefined
  };
}
/**
 * QueryMemberSeasonHistoryRequest defines the QueryMemberSeasonHistoryRequest message.
 * @name QueryMemberSeasonHistoryRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberSeasonHistoryRequest
 */
export const QueryMemberSeasonHistoryRequest = {
  typeUrl: "/sparkdream.season.v1.QueryMemberSeasonHistoryRequest",
  encode(message: QueryMemberSeasonHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberSeasonHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberSeasonHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: DeepPartial<QueryMemberSeasonHistoryRequest>): QueryMemberSeasonHistoryRequest {
    const message = createBaseQueryMemberSeasonHistoryRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberSeasonHistoryRequestAmino): QueryMemberSeasonHistoryRequest {
    const message = createBaseQueryMemberSeasonHistoryRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberSeasonHistoryRequest): QueryMemberSeasonHistoryRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberSeasonHistoryRequestAminoMsg): QueryMemberSeasonHistoryRequest {
    return QueryMemberSeasonHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberSeasonHistoryRequestProtoMsg): QueryMemberSeasonHistoryRequest {
    return QueryMemberSeasonHistoryRequest.decode(message.value);
  },
  toProto(message: QueryMemberSeasonHistoryRequest): Uint8Array {
    return QueryMemberSeasonHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberSeasonHistoryRequest): QueryMemberSeasonHistoryRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberSeasonHistoryRequest",
      value: QueryMemberSeasonHistoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberSeasonHistoryResponse(): QueryMemberSeasonHistoryResponse {
  return {
    season: BigInt(0),
    xpEarned: BigInt(0),
    level: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryMemberSeasonHistoryResponse defines the QueryMemberSeasonHistoryResponse message.
 * @name QueryMemberSeasonHistoryResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberSeasonHistoryResponse
 */
export const QueryMemberSeasonHistoryResponse = {
  typeUrl: "/sparkdream.season.v1.QueryMemberSeasonHistoryResponse",
  encode(message: QueryMemberSeasonHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.season !== BigInt(0)) {
      writer.uint32(8).uint64(message.season);
    }
    if (message.xpEarned !== BigInt(0)) {
      writer.uint32(16).uint64(message.xpEarned);
    }
    if (message.level !== BigInt(0)) {
      writer.uint32(24).uint64(message.level);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberSeasonHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberSeasonHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.season = reader.uint64();
          break;
        case 2:
          message.xpEarned = reader.uint64();
          break;
        case 3:
          message.level = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryMemberSeasonHistoryResponse>): QueryMemberSeasonHistoryResponse {
    const message = createBaseQueryMemberSeasonHistoryResponse();
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    message.xpEarned = object.xpEarned !== undefined && object.xpEarned !== null ? BigInt(object.xpEarned.toString()) : BigInt(0);
    message.level = object.level !== undefined && object.level !== null ? BigInt(object.level.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberSeasonHistoryResponseAmino): QueryMemberSeasonHistoryResponse {
    const message = createBaseQueryMemberSeasonHistoryResponse();
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    if (object.xp_earned !== undefined && object.xp_earned !== null) {
      message.xpEarned = BigInt(object.xp_earned);
    }
    if (object.level !== undefined && object.level !== null) {
      message.level = BigInt(object.level);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberSeasonHistoryResponse): QueryMemberSeasonHistoryResponseAmino {
    const obj: any = {};
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    obj.xp_earned = message.xpEarned !== BigInt(0) ? message.xpEarned?.toString() : undefined;
    obj.level = message.level !== BigInt(0) ? message.level?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberSeasonHistoryResponseAminoMsg): QueryMemberSeasonHistoryResponse {
    return QueryMemberSeasonHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberSeasonHistoryResponseProtoMsg): QueryMemberSeasonHistoryResponse {
    return QueryMemberSeasonHistoryResponse.decode(message.value);
  },
  toProto(message: QueryMemberSeasonHistoryResponse): Uint8Array {
    return QueryMemberSeasonHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberSeasonHistoryResponse): QueryMemberSeasonHistoryResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberSeasonHistoryResponse",
      value: QueryMemberSeasonHistoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberXpHistoryRequest(): QueryMemberXpHistoryRequest {
  return {
    address: "",
    season: BigInt(0),
    epochsBack: BigInt(0)
  };
}
/**
 * QueryMemberXpHistoryRequest defines the QueryMemberXpHistoryRequest message.
 * @name QueryMemberXpHistoryRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberXpHistoryRequest
 */
export const QueryMemberXpHistoryRequest = {
  typeUrl: "/sparkdream.season.v1.QueryMemberXpHistoryRequest",
  encode(message: QueryMemberXpHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.season !== BigInt(0)) {
      writer.uint32(16).uint64(message.season);
    }
    if (message.epochsBack !== BigInt(0)) {
      writer.uint32(24).uint64(message.epochsBack);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberXpHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberXpHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.season = reader.uint64();
          break;
        case 3:
          message.epochsBack = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberXpHistoryRequest>): QueryMemberXpHistoryRequest {
    const message = createBaseQueryMemberXpHistoryRequest();
    message.address = object.address ?? "";
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    message.epochsBack = object.epochsBack !== undefined && object.epochsBack !== null ? BigInt(object.epochsBack.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMemberXpHistoryRequestAmino): QueryMemberXpHistoryRequest {
    const message = createBaseQueryMemberXpHistoryRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    if (object.epochs_back !== undefined && object.epochs_back !== null) {
      message.epochsBack = BigInt(object.epochs_back);
    }
    return message;
  },
  toAmino(message: QueryMemberXpHistoryRequest): QueryMemberXpHistoryRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    obj.epochs_back = message.epochsBack !== BigInt(0) ? message.epochsBack?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberXpHistoryRequestAminoMsg): QueryMemberXpHistoryRequest {
    return QueryMemberXpHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberXpHistoryRequestProtoMsg): QueryMemberXpHistoryRequest {
    return QueryMemberXpHistoryRequest.decode(message.value);
  },
  toProto(message: QueryMemberXpHistoryRequest): Uint8Array {
    return QueryMemberXpHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberXpHistoryRequest): QueryMemberXpHistoryRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberXpHistoryRequest",
      value: QueryMemberXpHistoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberXpHistoryResponse(): QueryMemberXpHistoryResponse {
  return {
    epoch: BigInt(0),
    xpEarned: BigInt(0),
    cumulativeXp: BigInt(0)
  };
}
/**
 * QueryMemberXpHistoryResponse defines the QueryMemberXpHistoryResponse message.
 * @name QueryMemberXpHistoryResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberXpHistoryResponse
 */
export const QueryMemberXpHistoryResponse = {
  typeUrl: "/sparkdream.season.v1.QueryMemberXpHistoryResponse",
  encode(message: QueryMemberXpHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).int64(message.epoch);
    }
    if (message.xpEarned !== BigInt(0)) {
      writer.uint32(16).uint64(message.xpEarned);
    }
    if (message.cumulativeXp !== BigInt(0)) {
      writer.uint32(24).uint64(message.cumulativeXp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberXpHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberXpHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.int64();
          break;
        case 2:
          message.xpEarned = reader.uint64();
          break;
        case 3:
          message.cumulativeXp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberXpHistoryResponse>): QueryMemberXpHistoryResponse {
    const message = createBaseQueryMemberXpHistoryResponse();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.xpEarned = object.xpEarned !== undefined && object.xpEarned !== null ? BigInt(object.xpEarned.toString()) : BigInt(0);
    message.cumulativeXp = object.cumulativeXp !== undefined && object.cumulativeXp !== null ? BigInt(object.cumulativeXp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMemberXpHistoryResponseAmino): QueryMemberXpHistoryResponse {
    const message = createBaseQueryMemberXpHistoryResponse();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.xp_earned !== undefined && object.xp_earned !== null) {
      message.xpEarned = BigInt(object.xp_earned);
    }
    if (object.cumulative_xp !== undefined && object.cumulative_xp !== null) {
      message.cumulativeXp = BigInt(object.cumulative_xp);
    }
    return message;
  },
  toAmino(message: QueryMemberXpHistoryResponse): QueryMemberXpHistoryResponseAmino {
    const obj: any = {};
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch?.toString() : undefined;
    obj.xp_earned = message.xpEarned !== BigInt(0) ? message.xpEarned?.toString() : undefined;
    obj.cumulative_xp = message.cumulativeXp !== BigInt(0) ? message.cumulativeXp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberXpHistoryResponseAminoMsg): QueryMemberXpHistoryResponse {
    return QueryMemberXpHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberXpHistoryResponseProtoMsg): QueryMemberXpHistoryResponse {
    return QueryMemberXpHistoryResponse.decode(message.value);
  },
  toProto(message: QueryMemberXpHistoryResponse): Uint8Array {
    return QueryMemberXpHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberXpHistoryResponse): QueryMemberXpHistoryResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberXpHistoryResponse",
      value: QueryMemberXpHistoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAchievementsRequest(): QueryAchievementsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryAchievementsRequest defines the QueryAchievementsRequest message.
 * @name QueryAchievementsRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAchievementsRequest
 */
export const QueryAchievementsRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAchievementsRequest",
  encode(message: QueryAchievementsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAchievementsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAchievementsRequest();
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
  fromPartial(object: DeepPartial<QueryAchievementsRequest>): QueryAchievementsRequest {
    const message = createBaseQueryAchievementsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAchievementsRequestAmino): QueryAchievementsRequest {
    const message = createBaseQueryAchievementsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAchievementsRequest): QueryAchievementsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAchievementsRequestAminoMsg): QueryAchievementsRequest {
    return QueryAchievementsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAchievementsRequestProtoMsg): QueryAchievementsRequest {
    return QueryAchievementsRequest.decode(message.value);
  },
  toProto(message: QueryAchievementsRequest): Uint8Array {
    return QueryAchievementsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAchievementsRequest): QueryAchievementsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAchievementsRequest",
      value: QueryAchievementsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAchievementsResponse(): QueryAchievementsResponse {
  return {
    achievements: [],
    pagination: undefined
  };
}
/**
 * QueryAchievementsResponse defines the QueryAchievementsResponse message.
 * @name QueryAchievementsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAchievementsResponse
 */
export const QueryAchievementsResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAchievementsResponse",
  encode(message: QueryAchievementsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.achievements) {
      Achievement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAchievementsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAchievementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievements.push(Achievement.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAchievementsResponse>): QueryAchievementsResponse {
    const message = createBaseQueryAchievementsResponse();
    message.achievements = object.achievements?.map(e => Achievement.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAchievementsResponseAmino): QueryAchievementsResponse {
    const message = createBaseQueryAchievementsResponse();
    message.achievements = object.achievements?.map(e => Achievement.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAchievementsResponse): QueryAchievementsResponseAmino {
    const obj: any = {};
    if (message.achievements) {
      obj.achievements = message.achievements.map(e => e ? Achievement.toAmino(e) : undefined);
    } else {
      obj.achievements = message.achievements;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAchievementsResponseAminoMsg): QueryAchievementsResponse {
    return QueryAchievementsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAchievementsResponseProtoMsg): QueryAchievementsResponse {
    return QueryAchievementsResponse.decode(message.value);
  },
  toProto(message: QueryAchievementsResponse): Uint8Array {
    return QueryAchievementsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAchievementsResponse): QueryAchievementsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAchievementsResponse",
      value: QueryAchievementsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberAchievementsRequest(): QueryMemberAchievementsRequest {
  return {
    address: "",
    pagination: undefined
  };
}
/**
 * QueryMemberAchievementsRequest defines the QueryMemberAchievementsRequest message.
 * @name QueryMemberAchievementsRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberAchievementsRequest
 */
export const QueryMemberAchievementsRequest = {
  typeUrl: "/sparkdream.season.v1.QueryMemberAchievementsRequest",
  encode(message: QueryMemberAchievementsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberAchievementsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberAchievementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: DeepPartial<QueryMemberAchievementsRequest>): QueryMemberAchievementsRequest {
    const message = createBaseQueryMemberAchievementsRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberAchievementsRequestAmino): QueryMemberAchievementsRequest {
    const message = createBaseQueryMemberAchievementsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberAchievementsRequest): QueryMemberAchievementsRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberAchievementsRequestAminoMsg): QueryMemberAchievementsRequest {
    return QueryMemberAchievementsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberAchievementsRequestProtoMsg): QueryMemberAchievementsRequest {
    return QueryMemberAchievementsRequest.decode(message.value);
  },
  toProto(message: QueryMemberAchievementsRequest): Uint8Array {
    return QueryMemberAchievementsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberAchievementsRequest): QueryMemberAchievementsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberAchievementsRequest",
      value: QueryMemberAchievementsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberAchievementsResponse(): QueryMemberAchievementsResponse {
  return {
    achievementId: "",
    earnedAt: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryMemberAchievementsResponse defines the QueryMemberAchievementsResponse message.
 * @name QueryMemberAchievementsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberAchievementsResponse
 */
export const QueryMemberAchievementsResponse = {
  typeUrl: "/sparkdream.season.v1.QueryMemberAchievementsResponse",
  encode(message: QueryMemberAchievementsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.achievementId !== "") {
      writer.uint32(10).string(message.achievementId);
    }
    if (message.earnedAt !== BigInt(0)) {
      writer.uint32(16).int64(message.earnedAt);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberAchievementsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberAchievementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievementId = reader.string();
          break;
        case 2:
          message.earnedAt = reader.int64();
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
  fromPartial(object: DeepPartial<QueryMemberAchievementsResponse>): QueryMemberAchievementsResponse {
    const message = createBaseQueryMemberAchievementsResponse();
    message.achievementId = object.achievementId ?? "";
    message.earnedAt = object.earnedAt !== undefined && object.earnedAt !== null ? BigInt(object.earnedAt.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberAchievementsResponseAmino): QueryMemberAchievementsResponse {
    const message = createBaseQueryMemberAchievementsResponse();
    if (object.achievement_id !== undefined && object.achievement_id !== null) {
      message.achievementId = object.achievement_id;
    }
    if (object.earned_at !== undefined && object.earned_at !== null) {
      message.earnedAt = BigInt(object.earned_at);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberAchievementsResponse): QueryMemberAchievementsResponseAmino {
    const obj: any = {};
    obj.achievement_id = message.achievementId === "" ? undefined : message.achievementId;
    obj.earned_at = message.earnedAt !== BigInt(0) ? message.earnedAt?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberAchievementsResponseAminoMsg): QueryMemberAchievementsResponse {
    return QueryMemberAchievementsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberAchievementsResponseProtoMsg): QueryMemberAchievementsResponse {
    return QueryMemberAchievementsResponse.decode(message.value);
  },
  toProto(message: QueryMemberAchievementsResponse): Uint8Array {
    return QueryMemberAchievementsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberAchievementsResponse): QueryMemberAchievementsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberAchievementsResponse",
      value: QueryMemberAchievementsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTitlesRequest(): QueryTitlesRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryTitlesRequest defines the QueryTitlesRequest message.
 * @name QueryTitlesRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryTitlesRequest
 */
export const QueryTitlesRequest = {
  typeUrl: "/sparkdream.season.v1.QueryTitlesRequest",
  encode(message: QueryTitlesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTitlesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTitlesRequest();
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
  fromPartial(object: DeepPartial<QueryTitlesRequest>): QueryTitlesRequest {
    const message = createBaseQueryTitlesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTitlesRequestAmino): QueryTitlesRequest {
    const message = createBaseQueryTitlesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTitlesRequest): QueryTitlesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTitlesRequestAminoMsg): QueryTitlesRequest {
    return QueryTitlesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTitlesRequestProtoMsg): QueryTitlesRequest {
    return QueryTitlesRequest.decode(message.value);
  },
  toProto(message: QueryTitlesRequest): Uint8Array {
    return QueryTitlesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTitlesRequest): QueryTitlesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryTitlesRequest",
      value: QueryTitlesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTitlesResponse(): QueryTitlesResponse {
  return {
    titles: [],
    pagination: undefined
  };
}
/**
 * QueryTitlesResponse defines the QueryTitlesResponse message.
 * @name QueryTitlesResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryTitlesResponse
 */
export const QueryTitlesResponse = {
  typeUrl: "/sparkdream.season.v1.QueryTitlesResponse",
  encode(message: QueryTitlesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.titles) {
      Title.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTitlesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTitlesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.titles.push(Title.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryTitlesResponse>): QueryTitlesResponse {
    const message = createBaseQueryTitlesResponse();
    message.titles = object.titles?.map(e => Title.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTitlesResponseAmino): QueryTitlesResponse {
    const message = createBaseQueryTitlesResponse();
    message.titles = object.titles?.map(e => Title.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTitlesResponse): QueryTitlesResponseAmino {
    const obj: any = {};
    if (message.titles) {
      obj.titles = message.titles.map(e => e ? Title.toAmino(e) : undefined);
    } else {
      obj.titles = message.titles;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTitlesResponseAminoMsg): QueryTitlesResponse {
    return QueryTitlesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTitlesResponseProtoMsg): QueryTitlesResponse {
    return QueryTitlesResponse.decode(message.value);
  },
  toProto(message: QueryTitlesResponse): Uint8Array {
    return QueryTitlesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTitlesResponse): QueryTitlesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryTitlesResponse",
      value: QueryTitlesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberTitlesRequest(): QueryMemberTitlesRequest {
  return {
    address: "",
    pagination: undefined
  };
}
/**
 * QueryMemberTitlesRequest defines the QueryMemberTitlesRequest message.
 * @name QueryMemberTitlesRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberTitlesRequest
 */
export const QueryMemberTitlesRequest = {
  typeUrl: "/sparkdream.season.v1.QueryMemberTitlesRequest",
  encode(message: QueryMemberTitlesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberTitlesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberTitlesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: DeepPartial<QueryMemberTitlesRequest>): QueryMemberTitlesRequest {
    const message = createBaseQueryMemberTitlesRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberTitlesRequestAmino): QueryMemberTitlesRequest {
    const message = createBaseQueryMemberTitlesRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberTitlesRequest): QueryMemberTitlesRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberTitlesRequestAminoMsg): QueryMemberTitlesRequest {
    return QueryMemberTitlesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberTitlesRequestProtoMsg): QueryMemberTitlesRequest {
    return QueryMemberTitlesRequest.decode(message.value);
  },
  toProto(message: QueryMemberTitlesRequest): Uint8Array {
    return QueryMemberTitlesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberTitlesRequest): QueryMemberTitlesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberTitlesRequest",
      value: QueryMemberTitlesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberTitlesResponse(): QueryMemberTitlesResponse {
  return {
    titleId: "",
    unlockedAt: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryMemberTitlesResponse defines the QueryMemberTitlesResponse message.
 * @name QueryMemberTitlesResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberTitlesResponse
 */
export const QueryMemberTitlesResponse = {
  typeUrl: "/sparkdream.season.v1.QueryMemberTitlesResponse",
  encode(message: QueryMemberTitlesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.titleId !== "") {
      writer.uint32(10).string(message.titleId);
    }
    if (message.unlockedAt !== BigInt(0)) {
      writer.uint32(16).int64(message.unlockedAt);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberTitlesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberTitlesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.titleId = reader.string();
          break;
        case 2:
          message.unlockedAt = reader.int64();
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
  fromPartial(object: DeepPartial<QueryMemberTitlesResponse>): QueryMemberTitlesResponse {
    const message = createBaseQueryMemberTitlesResponse();
    message.titleId = object.titleId ?? "";
    message.unlockedAt = object.unlockedAt !== undefined && object.unlockedAt !== null ? BigInt(object.unlockedAt.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberTitlesResponseAmino): QueryMemberTitlesResponse {
    const message = createBaseQueryMemberTitlesResponse();
    if (object.title_id !== undefined && object.title_id !== null) {
      message.titleId = object.title_id;
    }
    if (object.unlocked_at !== undefined && object.unlocked_at !== null) {
      message.unlockedAt = BigInt(object.unlocked_at);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberTitlesResponse): QueryMemberTitlesResponseAmino {
    const obj: any = {};
    obj.title_id = message.titleId === "" ? undefined : message.titleId;
    obj.unlocked_at = message.unlockedAt !== BigInt(0) ? message.unlockedAt?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberTitlesResponseAminoMsg): QueryMemberTitlesResponse {
    return QueryMemberTitlesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberTitlesResponseProtoMsg): QueryMemberTitlesResponse {
    return QueryMemberTitlesResponse.decode(message.value);
  },
  toProto(message: QueryMemberTitlesResponse): Uint8Array {
    return QueryMemberTitlesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberTitlesResponse): QueryMemberTitlesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberTitlesResponse",
      value: QueryMemberTitlesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGuildByIdRequest(): QueryGuildByIdRequest {
  return {
    guildId: BigInt(0)
  };
}
/**
 * QueryGuildByIdRequest defines the QueryGuildByIdRequest message.
 * @name QueryGuildByIdRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildByIdRequest
 */
export const QueryGuildByIdRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGuildByIdRequest",
  encode(message: QueryGuildByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guildId !== BigInt(0)) {
      writer.uint32(8).uint64(message.guildId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGuildByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGuildByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGuildByIdRequest>): QueryGuildByIdRequest {
    const message = createBaseQueryGuildByIdRequest();
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGuildByIdRequestAmino): QueryGuildByIdRequest {
    const message = createBaseQueryGuildByIdRequest();
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    return message;
  },
  toAmino(message: QueryGuildByIdRequest): QueryGuildByIdRequestAmino {
    const obj: any = {};
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGuildByIdRequestAminoMsg): QueryGuildByIdRequest {
    return QueryGuildByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGuildByIdRequestProtoMsg): QueryGuildByIdRequest {
    return QueryGuildByIdRequest.decode(message.value);
  },
  toProto(message: QueryGuildByIdRequest): Uint8Array {
    return QueryGuildByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGuildByIdRequest): QueryGuildByIdRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGuildByIdRequest",
      value: QueryGuildByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGuildByIdResponse(): QueryGuildByIdResponse {
  return {
    name: "",
    description: "",
    founder: "",
    inviteOnly: false,
    status: BigInt(0)
  };
}
/**
 * QueryGuildByIdResponse defines the QueryGuildByIdResponse message.
 * @name QueryGuildByIdResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildByIdResponse
 */
export const QueryGuildByIdResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGuildByIdResponse",
  encode(message: QueryGuildByIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.founder !== "") {
      writer.uint32(26).string(message.founder);
    }
    if (message.inviteOnly === true) {
      writer.uint32(32).bool(message.inviteOnly);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(40).uint64(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGuildByIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGuildByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.founder = reader.string();
          break;
        case 4:
          message.inviteOnly = reader.bool();
          break;
        case 5:
          message.status = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGuildByIdResponse>): QueryGuildByIdResponse {
    const message = createBaseQueryGuildByIdResponse();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.founder = object.founder ?? "";
    message.inviteOnly = object.inviteOnly ?? false;
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGuildByIdResponseAmino): QueryGuildByIdResponse {
    const message = createBaseQueryGuildByIdResponse();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.founder !== undefined && object.founder !== null) {
      message.founder = object.founder;
    }
    if (object.invite_only !== undefined && object.invite_only !== null) {
      message.inviteOnly = object.invite_only;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    return message;
  },
  toAmino(message: QueryGuildByIdResponse): QueryGuildByIdResponseAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.founder = message.founder === "" ? undefined : message.founder;
    obj.invite_only = message.inviteOnly === false ? undefined : message.inviteOnly;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGuildByIdResponseAminoMsg): QueryGuildByIdResponse {
    return QueryGuildByIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGuildByIdResponseProtoMsg): QueryGuildByIdResponse {
    return QueryGuildByIdResponse.decode(message.value);
  },
  toProto(message: QueryGuildByIdResponse): Uint8Array {
    return QueryGuildByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGuildByIdResponse): QueryGuildByIdResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGuildByIdResponse",
      value: QueryGuildByIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGuildsListRequest(): QueryGuildsListRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryGuildsListRequest defines the QueryGuildsListRequest message.
 * @name QueryGuildsListRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildsListRequest
 */
export const QueryGuildsListRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGuildsListRequest",
  encode(message: QueryGuildsListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGuildsListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGuildsListRequest();
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
  fromPartial(object: DeepPartial<QueryGuildsListRequest>): QueryGuildsListRequest {
    const message = createBaseQueryGuildsListRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGuildsListRequestAmino): QueryGuildsListRequest {
    const message = createBaseQueryGuildsListRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGuildsListRequest): QueryGuildsListRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGuildsListRequestAminoMsg): QueryGuildsListRequest {
    return QueryGuildsListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGuildsListRequestProtoMsg): QueryGuildsListRequest {
    return QueryGuildsListRequest.decode(message.value);
  },
  toProto(message: QueryGuildsListRequest): Uint8Array {
    return QueryGuildsListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGuildsListRequest): QueryGuildsListRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGuildsListRequest",
      value: QueryGuildsListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGuildsListResponse(): QueryGuildsListResponse {
  return {
    id: BigInt(0),
    name: "",
    founder: "",
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryGuildsListResponse defines the QueryGuildsListResponse message.
 * @name QueryGuildsListResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildsListResponse
 */
export const QueryGuildsListResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGuildsListResponse",
  encode(message: QueryGuildsListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.founder !== "") {
      writer.uint32(26).string(message.founder);
    }
    if (message.status !== BigInt(0)) {
      writer.uint32(32).uint64(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGuildsListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGuildsListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.founder = reader.string();
          break;
        case 4:
          message.status = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryGuildsListResponse>): QueryGuildsListResponse {
    const message = createBaseQueryGuildsListResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.founder = object.founder ?? "";
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGuildsListResponseAmino): QueryGuildsListResponse {
    const message = createBaseQueryGuildsListResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.founder !== undefined && object.founder !== null) {
      message.founder = object.founder;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = BigInt(object.status);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGuildsListResponse): QueryGuildsListResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.founder = message.founder === "" ? undefined : message.founder;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGuildsListResponseAminoMsg): QueryGuildsListResponse {
    return QueryGuildsListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGuildsListResponseProtoMsg): QueryGuildsListResponse {
    return QueryGuildsListResponse.decode(message.value);
  },
  toProto(message: QueryGuildsListResponse): Uint8Array {
    return QueryGuildsListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGuildsListResponse): QueryGuildsListResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGuildsListResponse",
      value: QueryGuildsListResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGuildsByFounderRequest(): QueryGuildsByFounderRequest {
  return {
    founder: "",
    includeDissolved: false,
    pagination: undefined
  };
}
/**
 * QueryGuildsByFounderRequest defines the QueryGuildsByFounderRequest message.
 * @name QueryGuildsByFounderRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildsByFounderRequest
 */
export const QueryGuildsByFounderRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGuildsByFounderRequest",
  encode(message: QueryGuildsByFounderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.founder !== "") {
      writer.uint32(10).string(message.founder);
    }
    if (message.includeDissolved === true) {
      writer.uint32(16).bool(message.includeDissolved);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGuildsByFounderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGuildsByFounderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.founder = reader.string();
          break;
        case 2:
          message.includeDissolved = reader.bool();
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
  fromPartial(object: DeepPartial<QueryGuildsByFounderRequest>): QueryGuildsByFounderRequest {
    const message = createBaseQueryGuildsByFounderRequest();
    message.founder = object.founder ?? "";
    message.includeDissolved = object.includeDissolved ?? false;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGuildsByFounderRequestAmino): QueryGuildsByFounderRequest {
    const message = createBaseQueryGuildsByFounderRequest();
    if (object.founder !== undefined && object.founder !== null) {
      message.founder = object.founder;
    }
    if (object.include_dissolved !== undefined && object.include_dissolved !== null) {
      message.includeDissolved = object.include_dissolved;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGuildsByFounderRequest): QueryGuildsByFounderRequestAmino {
    const obj: any = {};
    obj.founder = message.founder === "" ? undefined : message.founder;
    obj.include_dissolved = message.includeDissolved === false ? undefined : message.includeDissolved;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGuildsByFounderRequestAminoMsg): QueryGuildsByFounderRequest {
    return QueryGuildsByFounderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGuildsByFounderRequestProtoMsg): QueryGuildsByFounderRequest {
    return QueryGuildsByFounderRequest.decode(message.value);
  },
  toProto(message: QueryGuildsByFounderRequest): Uint8Array {
    return QueryGuildsByFounderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGuildsByFounderRequest): QueryGuildsByFounderRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGuildsByFounderRequest",
      value: QueryGuildsByFounderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGuildsByFounderResponse(): QueryGuildsByFounderResponse {
  return {
    id: BigInt(0),
    name: "",
    status: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryGuildsByFounderResponse defines the QueryGuildsByFounderResponse message.
 * @name QueryGuildsByFounderResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildsByFounderResponse
 */
export const QueryGuildsByFounderResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGuildsByFounderResponse",
  encode(message: QueryGuildsByFounderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGuildsByFounderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGuildsByFounderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryGuildsByFounderResponse>): QueryGuildsByFounderResponse {
    const message = createBaseQueryGuildsByFounderResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.status = object.status !== undefined && object.status !== null ? BigInt(object.status.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGuildsByFounderResponseAmino): QueryGuildsByFounderResponse {
    const message = createBaseQueryGuildsByFounderResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
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
  toAmino(message: QueryGuildsByFounderResponse): QueryGuildsByFounderResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.status = message.status !== BigInt(0) ? message.status?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGuildsByFounderResponseAminoMsg): QueryGuildsByFounderResponse {
    return QueryGuildsByFounderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGuildsByFounderResponseProtoMsg): QueryGuildsByFounderResponse {
    return QueryGuildsByFounderResponse.decode(message.value);
  },
  toProto(message: QueryGuildsByFounderResponse): Uint8Array {
    return QueryGuildsByFounderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGuildsByFounderResponse): QueryGuildsByFounderResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGuildsByFounderResponse",
      value: QueryGuildsByFounderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGuildMembersRequest(): QueryGuildMembersRequest {
  return {
    guildId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryGuildMembersRequest defines the QueryGuildMembersRequest message.
 * @name QueryGuildMembersRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildMembersRequest
 */
export const QueryGuildMembersRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGuildMembersRequest",
  encode(message: QueryGuildMembersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guildId !== BigInt(0)) {
      writer.uint32(8).uint64(message.guildId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGuildMembersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGuildMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryGuildMembersRequest>): QueryGuildMembersRequest {
    const message = createBaseQueryGuildMembersRequest();
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGuildMembersRequestAmino): QueryGuildMembersRequest {
    const message = createBaseQueryGuildMembersRequest();
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGuildMembersRequest): QueryGuildMembersRequestAmino {
    const obj: any = {};
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGuildMembersRequestAminoMsg): QueryGuildMembersRequest {
    return QueryGuildMembersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGuildMembersRequestProtoMsg): QueryGuildMembersRequest {
    return QueryGuildMembersRequest.decode(message.value);
  },
  toProto(message: QueryGuildMembersRequest): Uint8Array {
    return QueryGuildMembersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGuildMembersRequest): QueryGuildMembersRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGuildMembersRequest",
      value: QueryGuildMembersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGuildMembersResponse(): QueryGuildMembersResponse {
  return {
    member: "",
    joinedEpoch: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryGuildMembersResponse defines the QueryGuildMembersResponse message.
 * @name QueryGuildMembersResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildMembersResponse
 */
export const QueryGuildMembersResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGuildMembersResponse",
  encode(message: QueryGuildMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.joinedEpoch !== BigInt(0)) {
      writer.uint32(16).int64(message.joinedEpoch);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGuildMembersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGuildMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.joinedEpoch = reader.int64();
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
  fromPartial(object: DeepPartial<QueryGuildMembersResponse>): QueryGuildMembersResponse {
    const message = createBaseQueryGuildMembersResponse();
    message.member = object.member ?? "";
    message.joinedEpoch = object.joinedEpoch !== undefined && object.joinedEpoch !== null ? BigInt(object.joinedEpoch.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGuildMembersResponseAmino): QueryGuildMembersResponse {
    const message = createBaseQueryGuildMembersResponse();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.joined_epoch !== undefined && object.joined_epoch !== null) {
      message.joinedEpoch = BigInt(object.joined_epoch);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGuildMembersResponse): QueryGuildMembersResponseAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.joined_epoch = message.joinedEpoch !== BigInt(0) ? message.joinedEpoch?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGuildMembersResponseAminoMsg): QueryGuildMembersResponse {
    return QueryGuildMembersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGuildMembersResponseProtoMsg): QueryGuildMembersResponse {
    return QueryGuildMembersResponse.decode(message.value);
  },
  toProto(message: QueryGuildMembersResponse): Uint8Array {
    return QueryGuildMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGuildMembersResponse): QueryGuildMembersResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGuildMembersResponse",
      value: QueryGuildMembersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberGuildRequest(): QueryMemberGuildRequest {
  return {
    member: ""
  };
}
/**
 * QueryMemberGuildRequest defines the QueryMemberGuildRequest message.
 * @name QueryMemberGuildRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberGuildRequest
 */
export const QueryMemberGuildRequest = {
  typeUrl: "/sparkdream.season.v1.QueryMemberGuildRequest",
  encode(message: QueryMemberGuildRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberGuildRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberGuildRequest();
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
  fromPartial(object: DeepPartial<QueryMemberGuildRequest>): QueryMemberGuildRequest {
    const message = createBaseQueryMemberGuildRequest();
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: QueryMemberGuildRequestAmino): QueryMemberGuildRequest {
    const message = createBaseQueryMemberGuildRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: QueryMemberGuildRequest): QueryMemberGuildRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: QueryMemberGuildRequestAminoMsg): QueryMemberGuildRequest {
    return QueryMemberGuildRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberGuildRequestProtoMsg): QueryMemberGuildRequest {
    return QueryMemberGuildRequest.decode(message.value);
  },
  toProto(message: QueryMemberGuildRequest): Uint8Array {
    return QueryMemberGuildRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberGuildRequest): QueryMemberGuildRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberGuildRequest",
      value: QueryMemberGuildRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberGuildResponse(): QueryMemberGuildResponse {
  return {
    guildId: BigInt(0),
    joinedEpoch: BigInt(0)
  };
}
/**
 * QueryMemberGuildResponse defines the QueryMemberGuildResponse message.
 * @name QueryMemberGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberGuildResponse
 */
export const QueryMemberGuildResponse = {
  typeUrl: "/sparkdream.season.v1.QueryMemberGuildResponse",
  encode(message: QueryMemberGuildResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guildId !== BigInt(0)) {
      writer.uint32(8).uint64(message.guildId);
    }
    if (message.joinedEpoch !== BigInt(0)) {
      writer.uint32(16).int64(message.joinedEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberGuildResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberGuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = reader.uint64();
          break;
        case 2:
          message.joinedEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberGuildResponse>): QueryMemberGuildResponse {
    const message = createBaseQueryMemberGuildResponse();
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.joinedEpoch = object.joinedEpoch !== undefined && object.joinedEpoch !== null ? BigInt(object.joinedEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMemberGuildResponseAmino): QueryMemberGuildResponse {
    const message = createBaseQueryMemberGuildResponse();
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.joined_epoch !== undefined && object.joined_epoch !== null) {
      message.joinedEpoch = BigInt(object.joined_epoch);
    }
    return message;
  },
  toAmino(message: QueryMemberGuildResponse): QueryMemberGuildResponseAmino {
    const obj: any = {};
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.joined_epoch = message.joinedEpoch !== BigInt(0) ? message.joinedEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberGuildResponseAminoMsg): QueryMemberGuildResponse {
    return QueryMemberGuildResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberGuildResponseProtoMsg): QueryMemberGuildResponse {
    return QueryMemberGuildResponse.decode(message.value);
  },
  toProto(message: QueryMemberGuildResponse): Uint8Array {
    return QueryMemberGuildResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberGuildResponse): QueryMemberGuildResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberGuildResponse",
      value: QueryMemberGuildResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGuildInvitesRequest(): QueryGuildInvitesRequest {
  return {
    guildId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryGuildInvitesRequest defines the QueryGuildInvitesRequest message.
 * @name QueryGuildInvitesRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildInvitesRequest
 */
export const QueryGuildInvitesRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGuildInvitesRequest",
  encode(message: QueryGuildInvitesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guildId !== BigInt(0)) {
      writer.uint32(8).uint64(message.guildId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGuildInvitesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGuildInvitesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryGuildInvitesRequest>): QueryGuildInvitesRequest {
    const message = createBaseQueryGuildInvitesRequest();
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGuildInvitesRequestAmino): QueryGuildInvitesRequest {
    const message = createBaseQueryGuildInvitesRequest();
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGuildInvitesRequest): QueryGuildInvitesRequestAmino {
    const obj: any = {};
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGuildInvitesRequestAminoMsg): QueryGuildInvitesRequest {
    return QueryGuildInvitesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGuildInvitesRequestProtoMsg): QueryGuildInvitesRequest {
    return QueryGuildInvitesRequest.decode(message.value);
  },
  toProto(message: QueryGuildInvitesRequest): Uint8Array {
    return QueryGuildInvitesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGuildInvitesRequest): QueryGuildInvitesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGuildInvitesRequest",
      value: QueryGuildInvitesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGuildInvitesResponse(): QueryGuildInvitesResponse {
  return {
    invitee: "",
    inviter: "",
    expiresEpoch: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryGuildInvitesResponse defines the QueryGuildInvitesResponse message.
 * @name QueryGuildInvitesResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGuildInvitesResponse
 */
export const QueryGuildInvitesResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGuildInvitesResponse",
  encode(message: QueryGuildInvitesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.invitee !== "") {
      writer.uint32(10).string(message.invitee);
    }
    if (message.inviter !== "") {
      writer.uint32(18).string(message.inviter);
    }
    if (message.expiresEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.expiresEpoch);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGuildInvitesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGuildInvitesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invitee = reader.string();
          break;
        case 2:
          message.inviter = reader.string();
          break;
        case 3:
          message.expiresEpoch = reader.int64();
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
  fromPartial(object: DeepPartial<QueryGuildInvitesResponse>): QueryGuildInvitesResponse {
    const message = createBaseQueryGuildInvitesResponse();
    message.invitee = object.invitee ?? "";
    message.inviter = object.inviter ?? "";
    message.expiresEpoch = object.expiresEpoch !== undefined && object.expiresEpoch !== null ? BigInt(object.expiresEpoch.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGuildInvitesResponseAmino): QueryGuildInvitesResponse {
    const message = createBaseQueryGuildInvitesResponse();
    if (object.invitee !== undefined && object.invitee !== null) {
      message.invitee = object.invitee;
    }
    if (object.inviter !== undefined && object.inviter !== null) {
      message.inviter = object.inviter;
    }
    if (object.expires_epoch !== undefined && object.expires_epoch !== null) {
      message.expiresEpoch = BigInt(object.expires_epoch);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGuildInvitesResponse): QueryGuildInvitesResponseAmino {
    const obj: any = {};
    obj.invitee = message.invitee === "" ? undefined : message.invitee;
    obj.inviter = message.inviter === "" ? undefined : message.inviter;
    obj.expires_epoch = message.expiresEpoch !== BigInt(0) ? message.expiresEpoch?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGuildInvitesResponseAminoMsg): QueryGuildInvitesResponse {
    return QueryGuildInvitesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGuildInvitesResponseProtoMsg): QueryGuildInvitesResponse {
    return QueryGuildInvitesResponse.decode(message.value);
  },
  toProto(message: QueryGuildInvitesResponse): Uint8Array {
    return QueryGuildInvitesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGuildInvitesResponse): QueryGuildInvitesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGuildInvitesResponse",
      value: QueryGuildInvitesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberGuildInvitesRequest(): QueryMemberGuildInvitesRequest {
  return {
    member: "",
    pagination: undefined
  };
}
/**
 * QueryMemberGuildInvitesRequest defines the QueryMemberGuildInvitesRequest message.
 * @name QueryMemberGuildInvitesRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberGuildInvitesRequest
 */
export const QueryMemberGuildInvitesRequest = {
  typeUrl: "/sparkdream.season.v1.QueryMemberGuildInvitesRequest",
  encode(message: QueryMemberGuildInvitesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberGuildInvitesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberGuildInvitesRequest();
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
  fromPartial(object: DeepPartial<QueryMemberGuildInvitesRequest>): QueryMemberGuildInvitesRequest {
    const message = createBaseQueryMemberGuildInvitesRequest();
    message.member = object.member ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberGuildInvitesRequestAmino): QueryMemberGuildInvitesRequest {
    const message = createBaseQueryMemberGuildInvitesRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberGuildInvitesRequest): QueryMemberGuildInvitesRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberGuildInvitesRequestAminoMsg): QueryMemberGuildInvitesRequest {
    return QueryMemberGuildInvitesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberGuildInvitesRequestProtoMsg): QueryMemberGuildInvitesRequest {
    return QueryMemberGuildInvitesRequest.decode(message.value);
  },
  toProto(message: QueryMemberGuildInvitesRequest): Uint8Array {
    return QueryMemberGuildInvitesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberGuildInvitesRequest): QueryMemberGuildInvitesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberGuildInvitesRequest",
      value: QueryMemberGuildInvitesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberGuildInvitesResponse(): QueryMemberGuildInvitesResponse {
  return {
    guildId: BigInt(0),
    guildName: "",
    pagination: undefined
  };
}
/**
 * QueryMemberGuildInvitesResponse defines the QueryMemberGuildInvitesResponse message.
 * @name QueryMemberGuildInvitesResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberGuildInvitesResponse
 */
export const QueryMemberGuildInvitesResponse = {
  typeUrl: "/sparkdream.season.v1.QueryMemberGuildInvitesResponse",
  encode(message: QueryMemberGuildInvitesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guildId !== BigInt(0)) {
      writer.uint32(8).uint64(message.guildId);
    }
    if (message.guildName !== "") {
      writer.uint32(18).string(message.guildName);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberGuildInvitesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberGuildInvitesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildId = reader.uint64();
          break;
        case 2:
          message.guildName = reader.string();
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
  fromPartial(object: DeepPartial<QueryMemberGuildInvitesResponse>): QueryMemberGuildInvitesResponse {
    const message = createBaseQueryMemberGuildInvitesResponse();
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.guildName = object.guildName ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMemberGuildInvitesResponseAmino): QueryMemberGuildInvitesResponse {
    const message = createBaseQueryMemberGuildInvitesResponse();
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.guild_name !== undefined && object.guild_name !== null) {
      message.guildName = object.guild_name;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMemberGuildInvitesResponse): QueryMemberGuildInvitesResponseAmino {
    const obj: any = {};
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.guild_name = message.guildName === "" ? undefined : message.guildName;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberGuildInvitesResponseAminoMsg): QueryMemberGuildInvitesResponse {
    return QueryMemberGuildInvitesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberGuildInvitesResponseProtoMsg): QueryMemberGuildInvitesResponse {
    return QueryMemberGuildInvitesResponse.decode(message.value);
  },
  toProto(message: QueryMemberGuildInvitesResponse): Uint8Array {
    return QueryMemberGuildInvitesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberGuildInvitesResponse): QueryMemberGuildInvitesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberGuildInvitesResponse",
      value: QueryMemberGuildInvitesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryQuestsListRequest(): QueryQuestsListRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryQuestsListRequest defines the QueryQuestsListRequest message.
 * @name QueryQuestsListRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestsListRequest
 */
export const QueryQuestsListRequest = {
  typeUrl: "/sparkdream.season.v1.QueryQuestsListRequest",
  encode(message: QueryQuestsListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuestsListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuestsListRequest();
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
  fromPartial(object: DeepPartial<QueryQuestsListRequest>): QueryQuestsListRequest {
    const message = createBaseQueryQuestsListRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryQuestsListRequestAmino): QueryQuestsListRequest {
    const message = createBaseQueryQuestsListRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryQuestsListRequest): QueryQuestsListRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryQuestsListRequestAminoMsg): QueryQuestsListRequest {
    return QueryQuestsListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuestsListRequestProtoMsg): QueryQuestsListRequest {
    return QueryQuestsListRequest.decode(message.value);
  },
  toProto(message: QueryQuestsListRequest): Uint8Array {
    return QueryQuestsListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryQuestsListRequest): QueryQuestsListRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryQuestsListRequest",
      value: QueryQuestsListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryQuestsListResponse(): QueryQuestsListResponse {
  return {
    id: "",
    name: "",
    xpReward: BigInt(0),
    active: false,
    pagination: undefined
  };
}
/**
 * QueryQuestsListResponse defines the QueryQuestsListResponse message.
 * @name QueryQuestsListResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestsListResponse
 */
export const QueryQuestsListResponse = {
  typeUrl: "/sparkdream.season.v1.QueryQuestsListResponse",
  encode(message: QueryQuestsListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.xpReward !== BigInt(0)) {
      writer.uint32(24).uint64(message.xpReward);
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuestsListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuestsListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.xpReward = reader.uint64();
          break;
        case 4:
          message.active = reader.bool();
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
  fromPartial(object: DeepPartial<QueryQuestsListResponse>): QueryQuestsListResponse {
    const message = createBaseQueryQuestsListResponse();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.xpReward = object.xpReward !== undefined && object.xpReward !== null ? BigInt(object.xpReward.toString()) : BigInt(0);
    message.active = object.active ?? false;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryQuestsListResponseAmino): QueryQuestsListResponse {
    const message = createBaseQueryQuestsListResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.xp_reward !== undefined && object.xp_reward !== null) {
      message.xpReward = BigInt(object.xp_reward);
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryQuestsListResponse): QueryQuestsListResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    obj.xp_reward = message.xpReward !== BigInt(0) ? message.xpReward?.toString() : undefined;
    obj.active = message.active === false ? undefined : message.active;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryQuestsListResponseAminoMsg): QueryQuestsListResponse {
    return QueryQuestsListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuestsListResponseProtoMsg): QueryQuestsListResponse {
    return QueryQuestsListResponse.decode(message.value);
  },
  toProto(message: QueryQuestsListResponse): Uint8Array {
    return QueryQuestsListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryQuestsListResponse): QueryQuestsListResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryQuestsListResponse",
      value: QueryQuestsListResponse.encode(message).finish()
    };
  }
};
function createBaseQueryQuestByIdRequest(): QueryQuestByIdRequest {
  return {
    questId: ""
  };
}
/**
 * QueryQuestByIdRequest defines the QueryQuestByIdRequest message.
 * @name QueryQuestByIdRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestByIdRequest
 */
export const QueryQuestByIdRequest = {
  typeUrl: "/sparkdream.season.v1.QueryQuestByIdRequest",
  encode(message: QueryQuestByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.questId !== "") {
      writer.uint32(10).string(message.questId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuestByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuestByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryQuestByIdRequest>): QueryQuestByIdRequest {
    const message = createBaseQueryQuestByIdRequest();
    message.questId = object.questId ?? "";
    return message;
  },
  fromAmino(object: QueryQuestByIdRequestAmino): QueryQuestByIdRequest {
    const message = createBaseQueryQuestByIdRequest();
    if (object.quest_id !== undefined && object.quest_id !== null) {
      message.questId = object.quest_id;
    }
    return message;
  },
  toAmino(message: QueryQuestByIdRequest): QueryQuestByIdRequestAmino {
    const obj: any = {};
    obj.quest_id = message.questId === "" ? undefined : message.questId;
    return obj;
  },
  fromAminoMsg(object: QueryQuestByIdRequestAminoMsg): QueryQuestByIdRequest {
    return QueryQuestByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuestByIdRequestProtoMsg): QueryQuestByIdRequest {
    return QueryQuestByIdRequest.decode(message.value);
  },
  toProto(message: QueryQuestByIdRequest): Uint8Array {
    return QueryQuestByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryQuestByIdRequest): QueryQuestByIdRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryQuestByIdRequest",
      value: QueryQuestByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryQuestByIdResponse(): QueryQuestByIdResponse {
  return {
    name: "",
    description: "",
    xpReward: BigInt(0),
    active: false,
    minLevel: BigInt(0)
  };
}
/**
 * QueryQuestByIdResponse defines the QueryQuestByIdResponse message.
 * @name QueryQuestByIdResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestByIdResponse
 */
export const QueryQuestByIdResponse = {
  typeUrl: "/sparkdream.season.v1.QueryQuestByIdResponse",
  encode(message: QueryQuestByIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.xpReward !== BigInt(0)) {
      writer.uint32(24).uint64(message.xpReward);
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    if (message.minLevel !== BigInt(0)) {
      writer.uint32(40).uint64(message.minLevel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuestByIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuestByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.xpReward = reader.uint64();
          break;
        case 4:
          message.active = reader.bool();
          break;
        case 5:
          message.minLevel = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryQuestByIdResponse>): QueryQuestByIdResponse {
    const message = createBaseQueryQuestByIdResponse();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.xpReward = object.xpReward !== undefined && object.xpReward !== null ? BigInt(object.xpReward.toString()) : BigInt(0);
    message.active = object.active ?? false;
    message.minLevel = object.minLevel !== undefined && object.minLevel !== null ? BigInt(object.minLevel.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryQuestByIdResponseAmino): QueryQuestByIdResponse {
    const message = createBaseQueryQuestByIdResponse();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.xp_reward !== undefined && object.xp_reward !== null) {
      message.xpReward = BigInt(object.xp_reward);
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.min_level !== undefined && object.min_level !== null) {
      message.minLevel = BigInt(object.min_level);
    }
    return message;
  },
  toAmino(message: QueryQuestByIdResponse): QueryQuestByIdResponseAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.xp_reward = message.xpReward !== BigInt(0) ? message.xpReward?.toString() : undefined;
    obj.active = message.active === false ? undefined : message.active;
    obj.min_level = message.minLevel !== BigInt(0) ? message.minLevel?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryQuestByIdResponseAminoMsg): QueryQuestByIdResponse {
    return QueryQuestByIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuestByIdResponseProtoMsg): QueryQuestByIdResponse {
    return QueryQuestByIdResponse.decode(message.value);
  },
  toProto(message: QueryQuestByIdResponse): Uint8Array {
    return QueryQuestByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryQuestByIdResponse): QueryQuestByIdResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryQuestByIdResponse",
      value: QueryQuestByIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryQuestChainRequest(): QueryQuestChainRequest {
  return {
    questChain: ""
  };
}
/**
 * QueryQuestChainRequest defines the QueryQuestChainRequest message.
 * @name QueryQuestChainRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestChainRequest
 */
export const QueryQuestChainRequest = {
  typeUrl: "/sparkdream.season.v1.QueryQuestChainRequest",
  encode(message: QueryQuestChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.questChain !== "") {
      writer.uint32(10).string(message.questChain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuestChainRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuestChainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryQuestChainRequest>): QueryQuestChainRequest {
    const message = createBaseQueryQuestChainRequest();
    message.questChain = object.questChain ?? "";
    return message;
  },
  fromAmino(object: QueryQuestChainRequestAmino): QueryQuestChainRequest {
    const message = createBaseQueryQuestChainRequest();
    if (object.quest_chain !== undefined && object.quest_chain !== null) {
      message.questChain = object.quest_chain;
    }
    return message;
  },
  toAmino(message: QueryQuestChainRequest): QueryQuestChainRequestAmino {
    const obj: any = {};
    obj.quest_chain = message.questChain === "" ? undefined : message.questChain;
    return obj;
  },
  fromAminoMsg(object: QueryQuestChainRequestAminoMsg): QueryQuestChainRequest {
    return QueryQuestChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuestChainRequestProtoMsg): QueryQuestChainRequest {
    return QueryQuestChainRequest.decode(message.value);
  },
  toProto(message: QueryQuestChainRequest): Uint8Array {
    return QueryQuestChainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryQuestChainRequest): QueryQuestChainRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryQuestChainRequest",
      value: QueryQuestChainRequest.encode(message).finish()
    };
  }
};
function createBaseQueryQuestChainResponse(): QueryQuestChainResponse {
  return {
    questId: "",
    name: "",
    prerequisiteQuest: ""
  };
}
/**
 * QueryQuestChainResponse defines the QueryQuestChainResponse message.
 * @name QueryQuestChainResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryQuestChainResponse
 */
export const QueryQuestChainResponse = {
  typeUrl: "/sparkdream.season.v1.QueryQuestChainResponse",
  encode(message: QueryQuestChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.questId !== "") {
      writer.uint32(10).string(message.questId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.prerequisiteQuest !== "") {
      writer.uint32(26).string(message.prerequisiteQuest);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuestChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuestChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.prerequisiteQuest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryQuestChainResponse>): QueryQuestChainResponse {
    const message = createBaseQueryQuestChainResponse();
    message.questId = object.questId ?? "";
    message.name = object.name ?? "";
    message.prerequisiteQuest = object.prerequisiteQuest ?? "";
    return message;
  },
  fromAmino(object: QueryQuestChainResponseAmino): QueryQuestChainResponse {
    const message = createBaseQueryQuestChainResponse();
    if (object.quest_id !== undefined && object.quest_id !== null) {
      message.questId = object.quest_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.prerequisite_quest !== undefined && object.prerequisite_quest !== null) {
      message.prerequisiteQuest = object.prerequisite_quest;
    }
    return message;
  },
  toAmino(message: QueryQuestChainResponse): QueryQuestChainResponseAmino {
    const obj: any = {};
    obj.quest_id = message.questId === "" ? undefined : message.questId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.prerequisite_quest = message.prerequisiteQuest === "" ? undefined : message.prerequisiteQuest;
    return obj;
  },
  fromAminoMsg(object: QueryQuestChainResponseAminoMsg): QueryQuestChainResponse {
    return QueryQuestChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuestChainResponseProtoMsg): QueryQuestChainResponse {
    return QueryQuestChainResponse.decode(message.value);
  },
  toProto(message: QueryQuestChainResponse): Uint8Array {
    return QueryQuestChainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryQuestChainResponse): QueryQuestChainResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryQuestChainResponse",
      value: QueryQuestChainResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMemberQuestStatusRequest(): QueryMemberQuestStatusRequest {
  return {
    member: "",
    questId: ""
  };
}
/**
 * QueryMemberQuestStatusRequest defines the QueryMemberQuestStatusRequest message.
 * @name QueryMemberQuestStatusRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberQuestStatusRequest
 */
export const QueryMemberQuestStatusRequest = {
  typeUrl: "/sparkdream.season.v1.QueryMemberQuestStatusRequest",
  encode(message: QueryMemberQuestStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.questId !== "") {
      writer.uint32(18).string(message.questId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberQuestStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberQuestStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.questId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberQuestStatusRequest>): QueryMemberQuestStatusRequest {
    const message = createBaseQueryMemberQuestStatusRequest();
    message.member = object.member ?? "";
    message.questId = object.questId ?? "";
    return message;
  },
  fromAmino(object: QueryMemberQuestStatusRequestAmino): QueryMemberQuestStatusRequest {
    const message = createBaseQueryMemberQuestStatusRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.quest_id !== undefined && object.quest_id !== null) {
      message.questId = object.quest_id;
    }
    return message;
  },
  toAmino(message: QueryMemberQuestStatusRequest): QueryMemberQuestStatusRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.quest_id = message.questId === "" ? undefined : message.questId;
    return obj;
  },
  fromAminoMsg(object: QueryMemberQuestStatusRequestAminoMsg): QueryMemberQuestStatusRequest {
    return QueryMemberQuestStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberQuestStatusRequestProtoMsg): QueryMemberQuestStatusRequest {
    return QueryMemberQuestStatusRequest.decode(message.value);
  },
  toProto(message: QueryMemberQuestStatusRequest): Uint8Array {
    return QueryMemberQuestStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberQuestStatusRequest): QueryMemberQuestStatusRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberQuestStatusRequest",
      value: QueryMemberQuestStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMemberQuestStatusResponse(): QueryMemberQuestStatusResponse {
  return {
    completed: false,
    completedBlock: BigInt(0)
  };
}
/**
 * QueryMemberQuestStatusResponse defines the QueryMemberQuestStatusResponse message.
 * @name QueryMemberQuestStatusResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryMemberQuestStatusResponse
 */
export const QueryMemberQuestStatusResponse = {
  typeUrl: "/sparkdream.season.v1.QueryMemberQuestStatusResponse",
  encode(message: QueryMemberQuestStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completed === true) {
      writer.uint32(8).bool(message.completed);
    }
    if (message.completedBlock !== BigInt(0)) {
      writer.uint32(16).int64(message.completedBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMemberQuestStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMemberQuestStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completed = reader.bool();
          break;
        case 2:
          message.completedBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMemberQuestStatusResponse>): QueryMemberQuestStatusResponse {
    const message = createBaseQueryMemberQuestStatusResponse();
    message.completed = object.completed ?? false;
    message.completedBlock = object.completedBlock !== undefined && object.completedBlock !== null ? BigInt(object.completedBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMemberQuestStatusResponseAmino): QueryMemberQuestStatusResponse {
    const message = createBaseQueryMemberQuestStatusResponse();
    if (object.completed !== undefined && object.completed !== null) {
      message.completed = object.completed;
    }
    if (object.completed_block !== undefined && object.completed_block !== null) {
      message.completedBlock = BigInt(object.completed_block);
    }
    return message;
  },
  toAmino(message: QueryMemberQuestStatusResponse): QueryMemberQuestStatusResponseAmino {
    const obj: any = {};
    obj.completed = message.completed === false ? undefined : message.completed;
    obj.completed_block = message.completedBlock !== BigInt(0) ? message.completedBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMemberQuestStatusResponseAminoMsg): QueryMemberQuestStatusResponse {
    return QueryMemberQuestStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMemberQuestStatusResponseProtoMsg): QueryMemberQuestStatusResponse {
    return QueryMemberQuestStatusResponse.decode(message.value);
  },
  toProto(message: QueryMemberQuestStatusResponse): Uint8Array {
    return QueryMemberQuestStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMemberQuestStatusResponse): QueryMemberQuestStatusResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryMemberQuestStatusResponse",
      value: QueryMemberQuestStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAvailableQuestsRequest(): QueryAvailableQuestsRequest {
  return {
    member: "",
    pagination: undefined
  };
}
/**
 * QueryAvailableQuestsRequest defines the QueryAvailableQuestsRequest message.
 * @name QueryAvailableQuestsRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAvailableQuestsRequest
 */
export const QueryAvailableQuestsRequest = {
  typeUrl: "/sparkdream.season.v1.QueryAvailableQuestsRequest",
  encode(message: QueryAvailableQuestsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAvailableQuestsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAvailableQuestsRequest();
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
  fromPartial(object: DeepPartial<QueryAvailableQuestsRequest>): QueryAvailableQuestsRequest {
    const message = createBaseQueryAvailableQuestsRequest();
    message.member = object.member ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAvailableQuestsRequestAmino): QueryAvailableQuestsRequest {
    const message = createBaseQueryAvailableQuestsRequest();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAvailableQuestsRequest): QueryAvailableQuestsRequestAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAvailableQuestsRequestAminoMsg): QueryAvailableQuestsRequest {
    return QueryAvailableQuestsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAvailableQuestsRequestProtoMsg): QueryAvailableQuestsRequest {
    return QueryAvailableQuestsRequest.decode(message.value);
  },
  toProto(message: QueryAvailableQuestsRequest): Uint8Array {
    return QueryAvailableQuestsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAvailableQuestsRequest): QueryAvailableQuestsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAvailableQuestsRequest",
      value: QueryAvailableQuestsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAvailableQuestsResponse(): QueryAvailableQuestsResponse {
  return {
    id: "",
    name: "",
    xpReward: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryAvailableQuestsResponse defines the QueryAvailableQuestsResponse message.
 * @name QueryAvailableQuestsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryAvailableQuestsResponse
 */
export const QueryAvailableQuestsResponse = {
  typeUrl: "/sparkdream.season.v1.QueryAvailableQuestsResponse",
  encode(message: QueryAvailableQuestsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.xpReward !== BigInt(0)) {
      writer.uint32(24).uint64(message.xpReward);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAvailableQuestsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAvailableQuestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.xpReward = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryAvailableQuestsResponse>): QueryAvailableQuestsResponse {
    const message = createBaseQueryAvailableQuestsResponse();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.xpReward = object.xpReward !== undefined && object.xpReward !== null ? BigInt(object.xpReward.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAvailableQuestsResponseAmino): QueryAvailableQuestsResponse {
    const message = createBaseQueryAvailableQuestsResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.xp_reward !== undefined && object.xp_reward !== null) {
      message.xpReward = BigInt(object.xp_reward);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAvailableQuestsResponse): QueryAvailableQuestsResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    obj.xp_reward = message.xpReward !== BigInt(0) ? message.xpReward?.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAvailableQuestsResponseAminoMsg): QueryAvailableQuestsResponse {
    return QueryAvailableQuestsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAvailableQuestsResponseProtoMsg): QueryAvailableQuestsResponse {
    return QueryAvailableQuestsResponse.decode(message.value);
  },
  toProto(message: QueryAvailableQuestsResponse): Uint8Array {
    return QueryAvailableQuestsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAvailableQuestsResponse): QueryAvailableQuestsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryAvailableQuestsResponse",
      value: QueryAvailableQuestsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetNominationRequest(): QueryGetNominationRequest {
  return {
    id: BigInt(0)
  };
}
/**
 * QueryGetNominationRequest defines the request for GetNomination.
 * @name QueryGetNominationRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetNominationRequest
 */
export const QueryGetNominationRequest = {
  typeUrl: "/sparkdream.season.v1.QueryGetNominationRequest",
  encode(message: QueryGetNominationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetNominationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNominationRequest();
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
  fromPartial(object: DeepPartial<QueryGetNominationRequest>): QueryGetNominationRequest {
    const message = createBaseQueryGetNominationRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetNominationRequestAmino): QueryGetNominationRequest {
    const message = createBaseQueryGetNominationRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetNominationRequest): QueryGetNominationRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNominationRequestAminoMsg): QueryGetNominationRequest {
    return QueryGetNominationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNominationRequestProtoMsg): QueryGetNominationRequest {
    return QueryGetNominationRequest.decode(message.value);
  },
  toProto(message: QueryGetNominationRequest): Uint8Array {
    return QueryGetNominationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNominationRequest): QueryGetNominationRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetNominationRequest",
      value: QueryGetNominationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetNominationResponse(): QueryGetNominationResponse {
  return {
    nomination: Nomination.fromPartial({})
  };
}
/**
 * QueryGetNominationResponse defines the response for GetNomination.
 * @name QueryGetNominationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryGetNominationResponse
 */
export const QueryGetNominationResponse = {
  typeUrl: "/sparkdream.season.v1.QueryGetNominationResponse",
  encode(message: QueryGetNominationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nomination !== undefined) {
      Nomination.encode(message.nomination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetNominationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNominationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nomination = Nomination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetNominationResponse>): QueryGetNominationResponse {
    const message = createBaseQueryGetNominationResponse();
    message.nomination = object.nomination !== undefined && object.nomination !== null ? Nomination.fromPartial(object.nomination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetNominationResponseAmino): QueryGetNominationResponse {
    const message = createBaseQueryGetNominationResponse();
    if (object.nomination !== undefined && object.nomination !== null) {
      message.nomination = Nomination.fromAmino(object.nomination);
    }
    return message;
  },
  toAmino(message: QueryGetNominationResponse): QueryGetNominationResponseAmino {
    const obj: any = {};
    obj.nomination = message.nomination ? Nomination.toAmino(message.nomination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetNominationResponseAminoMsg): QueryGetNominationResponse {
    return QueryGetNominationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetNominationResponseProtoMsg): QueryGetNominationResponse {
    return QueryGetNominationResponse.decode(message.value);
  },
  toProto(message: QueryGetNominationResponse): Uint8Array {
    return QueryGetNominationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetNominationResponse): QueryGetNominationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryGetNominationResponse",
      value: QueryGetNominationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListNominationsRequest(): QueryListNominationsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryListNominationsRequest defines the request for ListNominations.
 * @name QueryListNominationsRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationsRequest
 */
export const QueryListNominationsRequest = {
  typeUrl: "/sparkdream.season.v1.QueryListNominationsRequest",
  encode(message: QueryListNominationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListNominationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListNominationsRequest();
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
  fromPartial(object: DeepPartial<QueryListNominationsRequest>): QueryListNominationsRequest {
    const message = createBaseQueryListNominationsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListNominationsRequestAmino): QueryListNominationsRequest {
    const message = createBaseQueryListNominationsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListNominationsRequest): QueryListNominationsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListNominationsRequestAminoMsg): QueryListNominationsRequest {
    return QueryListNominationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListNominationsRequestProtoMsg): QueryListNominationsRequest {
    return QueryListNominationsRequest.decode(message.value);
  },
  toProto(message: QueryListNominationsRequest): Uint8Array {
    return QueryListNominationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListNominationsRequest): QueryListNominationsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryListNominationsRequest",
      value: QueryListNominationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListNominationsResponse(): QueryListNominationsResponse {
  return {
    nominations: [],
    pagination: undefined
  };
}
/**
 * QueryListNominationsResponse defines the response for ListNominations.
 * @name QueryListNominationsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationsResponse
 */
export const QueryListNominationsResponse = {
  typeUrl: "/sparkdream.season.v1.QueryListNominationsResponse",
  encode(message: QueryListNominationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nominations) {
      Nomination.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListNominationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListNominationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nominations.push(Nomination.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListNominationsResponse>): QueryListNominationsResponse {
    const message = createBaseQueryListNominationsResponse();
    message.nominations = object.nominations?.map(e => Nomination.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListNominationsResponseAmino): QueryListNominationsResponse {
    const message = createBaseQueryListNominationsResponse();
    message.nominations = object.nominations?.map(e => Nomination.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListNominationsResponse): QueryListNominationsResponseAmino {
    const obj: any = {};
    if (message.nominations) {
      obj.nominations = message.nominations.map(e => e ? Nomination.toAmino(e) : undefined);
    } else {
      obj.nominations = message.nominations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListNominationsResponseAminoMsg): QueryListNominationsResponse {
    return QueryListNominationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListNominationsResponseProtoMsg): QueryListNominationsResponse {
    return QueryListNominationsResponse.decode(message.value);
  },
  toProto(message: QueryListNominationsResponse): Uint8Array {
    return QueryListNominationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListNominationsResponse): QueryListNominationsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryListNominationsResponse",
      value: QueryListNominationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListNominationsByCreatorRequest(): QueryListNominationsByCreatorRequest {
  return {
    creator: "",
    pagination: undefined
  };
}
/**
 * QueryListNominationsByCreatorRequest defines the request for ListNominationsByCreator.
 * @name QueryListNominationsByCreatorRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationsByCreatorRequest
 */
export const QueryListNominationsByCreatorRequest = {
  typeUrl: "/sparkdream.season.v1.QueryListNominationsByCreatorRequest",
  encode(message: QueryListNominationsByCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListNominationsByCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListNominationsByCreatorRequest();
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
  fromPartial(object: DeepPartial<QueryListNominationsByCreatorRequest>): QueryListNominationsByCreatorRequest {
    const message = createBaseQueryListNominationsByCreatorRequest();
    message.creator = object.creator ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListNominationsByCreatorRequestAmino): QueryListNominationsByCreatorRequest {
    const message = createBaseQueryListNominationsByCreatorRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListNominationsByCreatorRequest): QueryListNominationsByCreatorRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListNominationsByCreatorRequestAminoMsg): QueryListNominationsByCreatorRequest {
    return QueryListNominationsByCreatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListNominationsByCreatorRequestProtoMsg): QueryListNominationsByCreatorRequest {
    return QueryListNominationsByCreatorRequest.decode(message.value);
  },
  toProto(message: QueryListNominationsByCreatorRequest): Uint8Array {
    return QueryListNominationsByCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListNominationsByCreatorRequest): QueryListNominationsByCreatorRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryListNominationsByCreatorRequest",
      value: QueryListNominationsByCreatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListNominationsByCreatorResponse(): QueryListNominationsByCreatorResponse {
  return {
    nominations: [],
    pagination: undefined
  };
}
/**
 * QueryListNominationsByCreatorResponse defines the response for ListNominationsByCreator.
 * @name QueryListNominationsByCreatorResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationsByCreatorResponse
 */
export const QueryListNominationsByCreatorResponse = {
  typeUrl: "/sparkdream.season.v1.QueryListNominationsByCreatorResponse",
  encode(message: QueryListNominationsByCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nominations) {
      Nomination.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListNominationsByCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListNominationsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nominations.push(Nomination.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListNominationsByCreatorResponse>): QueryListNominationsByCreatorResponse {
    const message = createBaseQueryListNominationsByCreatorResponse();
    message.nominations = object.nominations?.map(e => Nomination.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListNominationsByCreatorResponseAmino): QueryListNominationsByCreatorResponse {
    const message = createBaseQueryListNominationsByCreatorResponse();
    message.nominations = object.nominations?.map(e => Nomination.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListNominationsByCreatorResponse): QueryListNominationsByCreatorResponseAmino {
    const obj: any = {};
    if (message.nominations) {
      obj.nominations = message.nominations.map(e => e ? Nomination.toAmino(e) : undefined);
    } else {
      obj.nominations = message.nominations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListNominationsByCreatorResponseAminoMsg): QueryListNominationsByCreatorResponse {
    return QueryListNominationsByCreatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListNominationsByCreatorResponseProtoMsg): QueryListNominationsByCreatorResponse {
    return QueryListNominationsByCreatorResponse.decode(message.value);
  },
  toProto(message: QueryListNominationsByCreatorResponse): Uint8Array {
    return QueryListNominationsByCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListNominationsByCreatorResponse): QueryListNominationsByCreatorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryListNominationsByCreatorResponse",
      value: QueryListNominationsByCreatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListNominationStakesRequest(): QueryListNominationStakesRequest {
  return {
    nominationId: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryListNominationStakesRequest defines the request for ListNominationStakes.
 * @name QueryListNominationStakesRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationStakesRequest
 */
export const QueryListNominationStakesRequest = {
  typeUrl: "/sparkdream.season.v1.QueryListNominationStakesRequest",
  encode(message: QueryListNominationStakesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nominationId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nominationId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListNominationStakesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListNominationStakesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nominationId = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryListNominationStakesRequest>): QueryListNominationStakesRequest {
    const message = createBaseQueryListNominationStakesRequest();
    message.nominationId = object.nominationId !== undefined && object.nominationId !== null ? BigInt(object.nominationId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListNominationStakesRequestAmino): QueryListNominationStakesRequest {
    const message = createBaseQueryListNominationStakesRequest();
    if (object.nomination_id !== undefined && object.nomination_id !== null) {
      message.nominationId = BigInt(object.nomination_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListNominationStakesRequest): QueryListNominationStakesRequestAmino {
    const obj: any = {};
    obj.nomination_id = message.nominationId !== BigInt(0) ? message.nominationId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListNominationStakesRequestAminoMsg): QueryListNominationStakesRequest {
    return QueryListNominationStakesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListNominationStakesRequestProtoMsg): QueryListNominationStakesRequest {
    return QueryListNominationStakesRequest.decode(message.value);
  },
  toProto(message: QueryListNominationStakesRequest): Uint8Array {
    return QueryListNominationStakesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListNominationStakesRequest): QueryListNominationStakesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryListNominationStakesRequest",
      value: QueryListNominationStakesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListNominationStakesResponse(): QueryListNominationStakesResponse {
  return {
    stakes: [],
    pagination: undefined
  };
}
/**
 * QueryListNominationStakesResponse defines the response for ListNominationStakes.
 * @name QueryListNominationStakesResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListNominationStakesResponse
 */
export const QueryListNominationStakesResponse = {
  typeUrl: "/sparkdream.season.v1.QueryListNominationStakesResponse",
  encode(message: QueryListNominationStakesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakes) {
      NominationStake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListNominationStakesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListNominationStakesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakes.push(NominationStake.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListNominationStakesResponse>): QueryListNominationStakesResponse {
    const message = createBaseQueryListNominationStakesResponse();
    message.stakes = object.stakes?.map(e => NominationStake.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListNominationStakesResponseAmino): QueryListNominationStakesResponse {
    const message = createBaseQueryListNominationStakesResponse();
    message.stakes = object.stakes?.map(e => NominationStake.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListNominationStakesResponse): QueryListNominationStakesResponseAmino {
    const obj: any = {};
    if (message.stakes) {
      obj.stakes = message.stakes.map(e => e ? NominationStake.toAmino(e) : undefined);
    } else {
      obj.stakes = message.stakes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListNominationStakesResponseAminoMsg): QueryListNominationStakesResponse {
    return QueryListNominationStakesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListNominationStakesResponseProtoMsg): QueryListNominationStakesResponse {
    return QueryListNominationStakesResponse.decode(message.value);
  },
  toProto(message: QueryListNominationStakesResponse): Uint8Array {
    return QueryListNominationStakesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListNominationStakesResponse): QueryListNominationStakesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryListNominationStakesResponse",
      value: QueryListNominationStakesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListRetroRewardHistoryRequest(): QueryListRetroRewardHistoryRequest {
  return {
    season: BigInt(0),
    pagination: undefined
  };
}
/**
 * QueryListRetroRewardHistoryRequest defines the request for ListRetroRewardHistory.
 * @name QueryListRetroRewardHistoryRequest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListRetroRewardHistoryRequest
 */
export const QueryListRetroRewardHistoryRequest = {
  typeUrl: "/sparkdream.season.v1.QueryListRetroRewardHistoryRequest",
  encode(message: QueryListRetroRewardHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.season !== BigInt(0)) {
      writer.uint32(8).uint64(message.season);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListRetroRewardHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRetroRewardHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.season = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryListRetroRewardHistoryRequest>): QueryListRetroRewardHistoryRequest {
    const message = createBaseQueryListRetroRewardHistoryRequest();
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListRetroRewardHistoryRequestAmino): QueryListRetroRewardHistoryRequest {
    const message = createBaseQueryListRetroRewardHistoryRequest();
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListRetroRewardHistoryRequest): QueryListRetroRewardHistoryRequestAmino {
    const obj: any = {};
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListRetroRewardHistoryRequestAminoMsg): QueryListRetroRewardHistoryRequest {
    return QueryListRetroRewardHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListRetroRewardHistoryRequestProtoMsg): QueryListRetroRewardHistoryRequest {
    return QueryListRetroRewardHistoryRequest.decode(message.value);
  },
  toProto(message: QueryListRetroRewardHistoryRequest): Uint8Array {
    return QueryListRetroRewardHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListRetroRewardHistoryRequest): QueryListRetroRewardHistoryRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryListRetroRewardHistoryRequest",
      value: QueryListRetroRewardHistoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListRetroRewardHistoryResponse(): QueryListRetroRewardHistoryResponse {
  return {
    records: [],
    pagination: undefined
  };
}
/**
 * QueryListRetroRewardHistoryResponse defines the response for ListRetroRewardHistory.
 * @name QueryListRetroRewardHistoryResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QueryListRetroRewardHistoryResponse
 */
export const QueryListRetroRewardHistoryResponse = {
  typeUrl: "/sparkdream.season.v1.QueryListRetroRewardHistoryResponse",
  encode(message: QueryListRetroRewardHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      RetroRewardRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListRetroRewardHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRetroRewardHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(RetroRewardRecord.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListRetroRewardHistoryResponse>): QueryListRetroRewardHistoryResponse {
    const message = createBaseQueryListRetroRewardHistoryResponse();
    message.records = object.records?.map(e => RetroRewardRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListRetroRewardHistoryResponseAmino): QueryListRetroRewardHistoryResponse {
    const message = createBaseQueryListRetroRewardHistoryResponse();
    message.records = object.records?.map(e => RetroRewardRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListRetroRewardHistoryResponse): QueryListRetroRewardHistoryResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? RetroRewardRecord.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListRetroRewardHistoryResponseAminoMsg): QueryListRetroRewardHistoryResponse {
    return QueryListRetroRewardHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListRetroRewardHistoryResponseProtoMsg): QueryListRetroRewardHistoryResponse {
    return QueryListRetroRewardHistoryResponse.decode(message.value);
  },
  toProto(message: QueryListRetroRewardHistoryResponse): Uint8Array {
    return QueryListRetroRewardHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListRetroRewardHistoryResponse): QueryListRetroRewardHistoryResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QueryListRetroRewardHistoryResponse",
      value: QueryListRetroRewardHistoryResponse.encode(message).finish()
    };
  }
};