//@ts-nocheck
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
 * GenesisState defines the season module's genesis state.
 * @name GenesisState
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  season?: Season;
  seasonTransitionState?: SeasonTransitionState;
  transitionRecoveryState?: TransitionRecoveryState;
  nextSeasonInfo?: NextSeasonInfo;
  seasonSnapshotMap: SeasonSnapshot[];
  memberSeasonSnapshotMap: MemberSeasonSnapshot[];
  memberProfileMap: MemberProfile[];
  memberRegistrationMap: MemberRegistration[];
  achievementMap: Achievement[];
  titleMap: Title[];
  seasonTitleEligibilityMap: SeasonTitleEligibility[];
  guildList: Guild[];
  guildCount: bigint;
  guildMembershipMap: GuildMembership[];
  guildInviteMap: GuildInvite[];
  questMap: Quest[];
  memberQuestProgressMap: MemberQuestProgress[];
  epochXpTrackerMap: EpochXpTracker[];
  voteXpRecordMap: VoteXpRecord[];
  forumXpCooldownMap: ForumXpCooldown[];
  displayNameModerationMap: DisplayNameModeration[];
  displayNameReportStakeMap: DisplayNameReportStake[];
  displayNameAppealStakeMap: DisplayNameAppealStake[];
  /**
   * Retroactive Public Goods Funding
   */
  nominationList: Nomination[];
  nominationCount: bigint;
  nominationStakeList: NominationStake[];
  retroRewardRecordList: RetroRewardRecord[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.season.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the season module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  season?: SeasonAmino;
  season_transition_state?: SeasonTransitionStateAmino;
  transition_recovery_state?: TransitionRecoveryStateAmino;
  next_season_info?: NextSeasonInfoAmino;
  season_snapshot_map?: SeasonSnapshotAmino[];
  member_season_snapshot_map?: MemberSeasonSnapshotAmino[];
  member_profile_map?: MemberProfileAmino[];
  member_registration_map?: MemberRegistrationAmino[];
  achievement_map?: AchievementAmino[];
  title_map?: TitleAmino[];
  season_title_eligibility_map?: SeasonTitleEligibilityAmino[];
  guild_list?: GuildAmino[];
  guild_count?: string;
  guild_membership_map?: GuildMembershipAmino[];
  guild_invite_map?: GuildInviteAmino[];
  quest_map?: QuestAmino[];
  member_quest_progress_map?: MemberQuestProgressAmino[];
  epoch_xp_tracker_map?: EpochXpTrackerAmino[];
  vote_xp_record_map?: VoteXpRecordAmino[];
  forum_xp_cooldown_map?: ForumXpCooldownAmino[];
  display_name_moderation_map?: DisplayNameModerationAmino[];
  display_name_report_stake_map?: DisplayNameReportStakeAmino[];
  display_name_appeal_stake_map?: DisplayNameAppealStakeAmino[];
  /**
   * Retroactive Public Goods Funding
   */
  nomination_list?: NominationAmino[];
  nomination_count?: string;
  nomination_stake_list?: NominationStakeAmino[];
  retro_reward_record_list?: RetroRewardRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.season.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    season: undefined,
    seasonTransitionState: undefined,
    transitionRecoveryState: undefined,
    nextSeasonInfo: undefined,
    seasonSnapshotMap: [],
    memberSeasonSnapshotMap: [],
    memberProfileMap: [],
    memberRegistrationMap: [],
    achievementMap: [],
    titleMap: [],
    seasonTitleEligibilityMap: [],
    guildList: [],
    guildCount: BigInt(0),
    guildMembershipMap: [],
    guildInviteMap: [],
    questMap: [],
    memberQuestProgressMap: [],
    epochXpTrackerMap: [],
    voteXpRecordMap: [],
    forumXpCooldownMap: [],
    displayNameModerationMap: [],
    displayNameReportStakeMap: [],
    displayNameAppealStakeMap: [],
    nominationList: [],
    nominationCount: BigInt(0),
    nominationStakeList: [],
    retroRewardRecordList: []
  };
}
/**
 * GenesisState defines the season module's genesis state.
 * @name GenesisState
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.season.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.season !== undefined) {
      Season.encode(message.season, writer.uint32(18).fork()).ldelim();
    }
    if (message.seasonTransitionState !== undefined) {
      SeasonTransitionState.encode(message.seasonTransitionState, writer.uint32(26).fork()).ldelim();
    }
    if (message.transitionRecoveryState !== undefined) {
      TransitionRecoveryState.encode(message.transitionRecoveryState, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextSeasonInfo !== undefined) {
      NextSeasonInfo.encode(message.nextSeasonInfo, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.seasonSnapshotMap) {
      SeasonSnapshot.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.memberSeasonSnapshotMap) {
      MemberSeasonSnapshot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.memberProfileMap) {
      MemberProfile.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.memberRegistrationMap) {
      MemberRegistration.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.achievementMap) {
      Achievement.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.titleMap) {
      Title.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.seasonTitleEligibilityMap) {
      SeasonTitleEligibility.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.guildList) {
      Guild.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.guildCount !== BigInt(0)) {
      writer.uint32(112).uint64(message.guildCount);
    }
    for (const v of message.guildMembershipMap) {
      GuildMembership.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.guildInviteMap) {
      GuildInvite.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.questMap) {
      Quest.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.memberQuestProgressMap) {
      MemberQuestProgress.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.epochXpTrackerMap) {
      EpochXpTracker.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.voteXpRecordMap) {
      VoteXpRecord.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.forumXpCooldownMap) {
      ForumXpCooldown.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.displayNameModerationMap) {
      DisplayNameModeration.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    for (const v of message.displayNameReportStakeMap) {
      DisplayNameReportStake.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.displayNameAppealStakeMap) {
      DisplayNameAppealStake.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.nominationList) {
      Nomination.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    if (message.nominationCount !== BigInt(0)) {
      writer.uint32(208).uint64(message.nominationCount);
    }
    for (const v of message.nominationStakeList) {
      NominationStake.encode(v!, writer.uint32(218).fork()).ldelim();
    }
    for (const v of message.retroRewardRecordList) {
      RetroRewardRecord.encode(v!, writer.uint32(226).fork()).ldelim();
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
          message.season = Season.decode(reader, reader.uint32());
          break;
        case 3:
          message.seasonTransitionState = SeasonTransitionState.decode(reader, reader.uint32());
          break;
        case 4:
          message.transitionRecoveryState = TransitionRecoveryState.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextSeasonInfo = NextSeasonInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.seasonSnapshotMap.push(SeasonSnapshot.decode(reader, reader.uint32()));
          break;
        case 7:
          message.memberSeasonSnapshotMap.push(MemberSeasonSnapshot.decode(reader, reader.uint32()));
          break;
        case 8:
          message.memberProfileMap.push(MemberProfile.decode(reader, reader.uint32()));
          break;
        case 9:
          message.memberRegistrationMap.push(MemberRegistration.decode(reader, reader.uint32()));
          break;
        case 10:
          message.achievementMap.push(Achievement.decode(reader, reader.uint32()));
          break;
        case 11:
          message.titleMap.push(Title.decode(reader, reader.uint32()));
          break;
        case 12:
          message.seasonTitleEligibilityMap.push(SeasonTitleEligibility.decode(reader, reader.uint32()));
          break;
        case 13:
          message.guildList.push(Guild.decode(reader, reader.uint32()));
          break;
        case 14:
          message.guildCount = reader.uint64();
          break;
        case 15:
          message.guildMembershipMap.push(GuildMembership.decode(reader, reader.uint32()));
          break;
        case 16:
          message.guildInviteMap.push(GuildInvite.decode(reader, reader.uint32()));
          break;
        case 17:
          message.questMap.push(Quest.decode(reader, reader.uint32()));
          break;
        case 18:
          message.memberQuestProgressMap.push(MemberQuestProgress.decode(reader, reader.uint32()));
          break;
        case 19:
          message.epochXpTrackerMap.push(EpochXpTracker.decode(reader, reader.uint32()));
          break;
        case 20:
          message.voteXpRecordMap.push(VoteXpRecord.decode(reader, reader.uint32()));
          break;
        case 21:
          message.forumXpCooldownMap.push(ForumXpCooldown.decode(reader, reader.uint32()));
          break;
        case 22:
          message.displayNameModerationMap.push(DisplayNameModeration.decode(reader, reader.uint32()));
          break;
        case 23:
          message.displayNameReportStakeMap.push(DisplayNameReportStake.decode(reader, reader.uint32()));
          break;
        case 24:
          message.displayNameAppealStakeMap.push(DisplayNameAppealStake.decode(reader, reader.uint32()));
          break;
        case 25:
          message.nominationList.push(Nomination.decode(reader, reader.uint32()));
          break;
        case 26:
          message.nominationCount = reader.uint64();
          break;
        case 27:
          message.nominationStakeList.push(NominationStake.decode(reader, reader.uint32()));
          break;
        case 28:
          message.retroRewardRecordList.push(RetroRewardRecord.decode(reader, reader.uint32()));
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
    message.season = object.season !== undefined && object.season !== null ? Season.fromPartial(object.season) : undefined;
    message.seasonTransitionState = object.seasonTransitionState !== undefined && object.seasonTransitionState !== null ? SeasonTransitionState.fromPartial(object.seasonTransitionState) : undefined;
    message.transitionRecoveryState = object.transitionRecoveryState !== undefined && object.transitionRecoveryState !== null ? TransitionRecoveryState.fromPartial(object.transitionRecoveryState) : undefined;
    message.nextSeasonInfo = object.nextSeasonInfo !== undefined && object.nextSeasonInfo !== null ? NextSeasonInfo.fromPartial(object.nextSeasonInfo) : undefined;
    message.seasonSnapshotMap = object.seasonSnapshotMap?.map(e => SeasonSnapshot.fromPartial(e)) || [];
    message.memberSeasonSnapshotMap = object.memberSeasonSnapshotMap?.map(e => MemberSeasonSnapshot.fromPartial(e)) || [];
    message.memberProfileMap = object.memberProfileMap?.map(e => MemberProfile.fromPartial(e)) || [];
    message.memberRegistrationMap = object.memberRegistrationMap?.map(e => MemberRegistration.fromPartial(e)) || [];
    message.achievementMap = object.achievementMap?.map(e => Achievement.fromPartial(e)) || [];
    message.titleMap = object.titleMap?.map(e => Title.fromPartial(e)) || [];
    message.seasonTitleEligibilityMap = object.seasonTitleEligibilityMap?.map(e => SeasonTitleEligibility.fromPartial(e)) || [];
    message.guildList = object.guildList?.map(e => Guild.fromPartial(e)) || [];
    message.guildCount = object.guildCount !== undefined && object.guildCount !== null ? BigInt(object.guildCount.toString()) : BigInt(0);
    message.guildMembershipMap = object.guildMembershipMap?.map(e => GuildMembership.fromPartial(e)) || [];
    message.guildInviteMap = object.guildInviteMap?.map(e => GuildInvite.fromPartial(e)) || [];
    message.questMap = object.questMap?.map(e => Quest.fromPartial(e)) || [];
    message.memberQuestProgressMap = object.memberQuestProgressMap?.map(e => MemberQuestProgress.fromPartial(e)) || [];
    message.epochXpTrackerMap = object.epochXpTrackerMap?.map(e => EpochXpTracker.fromPartial(e)) || [];
    message.voteXpRecordMap = object.voteXpRecordMap?.map(e => VoteXpRecord.fromPartial(e)) || [];
    message.forumXpCooldownMap = object.forumXpCooldownMap?.map(e => ForumXpCooldown.fromPartial(e)) || [];
    message.displayNameModerationMap = object.displayNameModerationMap?.map(e => DisplayNameModeration.fromPartial(e)) || [];
    message.displayNameReportStakeMap = object.displayNameReportStakeMap?.map(e => DisplayNameReportStake.fromPartial(e)) || [];
    message.displayNameAppealStakeMap = object.displayNameAppealStakeMap?.map(e => DisplayNameAppealStake.fromPartial(e)) || [];
    message.nominationList = object.nominationList?.map(e => Nomination.fromPartial(e)) || [];
    message.nominationCount = object.nominationCount !== undefined && object.nominationCount !== null ? BigInt(object.nominationCount.toString()) : BigInt(0);
    message.nominationStakeList = object.nominationStakeList?.map(e => NominationStake.fromPartial(e)) || [];
    message.retroRewardRecordList = object.retroRewardRecordList?.map(e => RetroRewardRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.season !== undefined && object.season !== null) {
      message.season = Season.fromAmino(object.season);
    }
    if (object.season_transition_state !== undefined && object.season_transition_state !== null) {
      message.seasonTransitionState = SeasonTransitionState.fromAmino(object.season_transition_state);
    }
    if (object.transition_recovery_state !== undefined && object.transition_recovery_state !== null) {
      message.transitionRecoveryState = TransitionRecoveryState.fromAmino(object.transition_recovery_state);
    }
    if (object.next_season_info !== undefined && object.next_season_info !== null) {
      message.nextSeasonInfo = NextSeasonInfo.fromAmino(object.next_season_info);
    }
    message.seasonSnapshotMap = object.season_snapshot_map?.map(e => SeasonSnapshot.fromAmino(e)) || [];
    message.memberSeasonSnapshotMap = object.member_season_snapshot_map?.map(e => MemberSeasonSnapshot.fromAmino(e)) || [];
    message.memberProfileMap = object.member_profile_map?.map(e => MemberProfile.fromAmino(e)) || [];
    message.memberRegistrationMap = object.member_registration_map?.map(e => MemberRegistration.fromAmino(e)) || [];
    message.achievementMap = object.achievement_map?.map(e => Achievement.fromAmino(e)) || [];
    message.titleMap = object.title_map?.map(e => Title.fromAmino(e)) || [];
    message.seasonTitleEligibilityMap = object.season_title_eligibility_map?.map(e => SeasonTitleEligibility.fromAmino(e)) || [];
    message.guildList = object.guild_list?.map(e => Guild.fromAmino(e)) || [];
    if (object.guild_count !== undefined && object.guild_count !== null) {
      message.guildCount = BigInt(object.guild_count);
    }
    message.guildMembershipMap = object.guild_membership_map?.map(e => GuildMembership.fromAmino(e)) || [];
    message.guildInviteMap = object.guild_invite_map?.map(e => GuildInvite.fromAmino(e)) || [];
    message.questMap = object.quest_map?.map(e => Quest.fromAmino(e)) || [];
    message.memberQuestProgressMap = object.member_quest_progress_map?.map(e => MemberQuestProgress.fromAmino(e)) || [];
    message.epochXpTrackerMap = object.epoch_xp_tracker_map?.map(e => EpochXpTracker.fromAmino(e)) || [];
    message.voteXpRecordMap = object.vote_xp_record_map?.map(e => VoteXpRecord.fromAmino(e)) || [];
    message.forumXpCooldownMap = object.forum_xp_cooldown_map?.map(e => ForumXpCooldown.fromAmino(e)) || [];
    message.displayNameModerationMap = object.display_name_moderation_map?.map(e => DisplayNameModeration.fromAmino(e)) || [];
    message.displayNameReportStakeMap = object.display_name_report_stake_map?.map(e => DisplayNameReportStake.fromAmino(e)) || [];
    message.displayNameAppealStakeMap = object.display_name_appeal_stake_map?.map(e => DisplayNameAppealStake.fromAmino(e)) || [];
    message.nominationList = object.nomination_list?.map(e => Nomination.fromAmino(e)) || [];
    if (object.nomination_count !== undefined && object.nomination_count !== null) {
      message.nominationCount = BigInt(object.nomination_count);
    }
    message.nominationStakeList = object.nomination_stake_list?.map(e => NominationStake.fromAmino(e)) || [];
    message.retroRewardRecordList = object.retro_reward_record_list?.map(e => RetroRewardRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    obj.season = message.season ? Season.toAmino(message.season) : undefined;
    obj.season_transition_state = message.seasonTransitionState ? SeasonTransitionState.toAmino(message.seasonTransitionState) : undefined;
    obj.transition_recovery_state = message.transitionRecoveryState ? TransitionRecoveryState.toAmino(message.transitionRecoveryState) : undefined;
    obj.next_season_info = message.nextSeasonInfo ? NextSeasonInfo.toAmino(message.nextSeasonInfo) : undefined;
    if (message.seasonSnapshotMap) {
      obj.season_snapshot_map = message.seasonSnapshotMap.map(e => e ? SeasonSnapshot.toAmino(e) : undefined);
    } else {
      obj.season_snapshot_map = message.seasonSnapshotMap;
    }
    if (message.memberSeasonSnapshotMap) {
      obj.member_season_snapshot_map = message.memberSeasonSnapshotMap.map(e => e ? MemberSeasonSnapshot.toAmino(e) : undefined);
    } else {
      obj.member_season_snapshot_map = message.memberSeasonSnapshotMap;
    }
    if (message.memberProfileMap) {
      obj.member_profile_map = message.memberProfileMap.map(e => e ? MemberProfile.toAmino(e) : undefined);
    } else {
      obj.member_profile_map = message.memberProfileMap;
    }
    if (message.memberRegistrationMap) {
      obj.member_registration_map = message.memberRegistrationMap.map(e => e ? MemberRegistration.toAmino(e) : undefined);
    } else {
      obj.member_registration_map = message.memberRegistrationMap;
    }
    if (message.achievementMap) {
      obj.achievement_map = message.achievementMap.map(e => e ? Achievement.toAmino(e) : undefined);
    } else {
      obj.achievement_map = message.achievementMap;
    }
    if (message.titleMap) {
      obj.title_map = message.titleMap.map(e => e ? Title.toAmino(e) : undefined);
    } else {
      obj.title_map = message.titleMap;
    }
    if (message.seasonTitleEligibilityMap) {
      obj.season_title_eligibility_map = message.seasonTitleEligibilityMap.map(e => e ? SeasonTitleEligibility.toAmino(e) : undefined);
    } else {
      obj.season_title_eligibility_map = message.seasonTitleEligibilityMap;
    }
    if (message.guildList) {
      obj.guild_list = message.guildList.map(e => e ? Guild.toAmino(e) : undefined);
    } else {
      obj.guild_list = message.guildList;
    }
    obj.guild_count = message.guildCount !== BigInt(0) ? message.guildCount?.toString() : undefined;
    if (message.guildMembershipMap) {
      obj.guild_membership_map = message.guildMembershipMap.map(e => e ? GuildMembership.toAmino(e) : undefined);
    } else {
      obj.guild_membership_map = message.guildMembershipMap;
    }
    if (message.guildInviteMap) {
      obj.guild_invite_map = message.guildInviteMap.map(e => e ? GuildInvite.toAmino(e) : undefined);
    } else {
      obj.guild_invite_map = message.guildInviteMap;
    }
    if (message.questMap) {
      obj.quest_map = message.questMap.map(e => e ? Quest.toAmino(e) : undefined);
    } else {
      obj.quest_map = message.questMap;
    }
    if (message.memberQuestProgressMap) {
      obj.member_quest_progress_map = message.memberQuestProgressMap.map(e => e ? MemberQuestProgress.toAmino(e) : undefined);
    } else {
      obj.member_quest_progress_map = message.memberQuestProgressMap;
    }
    if (message.epochXpTrackerMap) {
      obj.epoch_xp_tracker_map = message.epochXpTrackerMap.map(e => e ? EpochXpTracker.toAmino(e) : undefined);
    } else {
      obj.epoch_xp_tracker_map = message.epochXpTrackerMap;
    }
    if (message.voteXpRecordMap) {
      obj.vote_xp_record_map = message.voteXpRecordMap.map(e => e ? VoteXpRecord.toAmino(e) : undefined);
    } else {
      obj.vote_xp_record_map = message.voteXpRecordMap;
    }
    if (message.forumXpCooldownMap) {
      obj.forum_xp_cooldown_map = message.forumXpCooldownMap.map(e => e ? ForumXpCooldown.toAmino(e) : undefined);
    } else {
      obj.forum_xp_cooldown_map = message.forumXpCooldownMap;
    }
    if (message.displayNameModerationMap) {
      obj.display_name_moderation_map = message.displayNameModerationMap.map(e => e ? DisplayNameModeration.toAmino(e) : undefined);
    } else {
      obj.display_name_moderation_map = message.displayNameModerationMap;
    }
    if (message.displayNameReportStakeMap) {
      obj.display_name_report_stake_map = message.displayNameReportStakeMap.map(e => e ? DisplayNameReportStake.toAmino(e) : undefined);
    } else {
      obj.display_name_report_stake_map = message.displayNameReportStakeMap;
    }
    if (message.displayNameAppealStakeMap) {
      obj.display_name_appeal_stake_map = message.displayNameAppealStakeMap.map(e => e ? DisplayNameAppealStake.toAmino(e) : undefined);
    } else {
      obj.display_name_appeal_stake_map = message.displayNameAppealStakeMap;
    }
    if (message.nominationList) {
      obj.nomination_list = message.nominationList.map(e => e ? Nomination.toAmino(e) : undefined);
    } else {
      obj.nomination_list = message.nominationList;
    }
    obj.nomination_count = message.nominationCount !== BigInt(0) ? message.nominationCount?.toString() : undefined;
    if (message.nominationStakeList) {
      obj.nomination_stake_list = message.nominationStakeList.map(e => e ? NominationStake.toAmino(e) : undefined);
    } else {
      obj.nomination_stake_list = message.nominationStakeList;
    }
    if (message.retroRewardRecordList) {
      obj.retro_reward_record_list = message.retroRewardRecordList.map(e => e ? RetroRewardRecord.toAmino(e) : undefined);
    } else {
      obj.retro_reward_record_list = message.retroRewardRecordList;
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
      typeUrl: "/sparkdream.season.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};