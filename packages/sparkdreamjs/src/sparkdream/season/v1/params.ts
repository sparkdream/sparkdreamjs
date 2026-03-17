//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Params
 */
export interface Params {
  /**
   * Epoch configuration
   */
  epochBlocks: bigint;
  /**
   * Season timing
   */
  seasonDurationEpochs: bigint;
  seasonTransitionEpochs: bigint;
  /**
   * XP rewards
   */
  xpVoteCast: bigint;
  xpProposalCreated: bigint;
  xpForumReplyReceived: bigint;
  xpForumMarkedHelpful: bigint;
  xpInviteeFirstInitiative: bigint;
  xpInviteeEstablished: bigint;
  /**
   * XP caps
   */
  maxVoteXpPerEpoch: number;
  maxForumXpPerEpoch: bigint;
  maxXpPerEpoch: bigint;
  /**
   * Levels
   */
  levelThresholds: bigint[];
  /**
   * Reputation reset
   */
  baselineReputation: string;
  /**
   * Guilds
   */
  minGuildMembers: number;
  maxGuildMembers: number;
  maxGuildOfficers: number;
  guildCreationCost: string;
  guildHopCooldownEpochs: bigint;
  maxGuildsPerSeason: number;
  minGuildAgeEpochs: bigint;
  maxPendingInvites: number;
  /**
   * Display names
   */
  displayNameMinLength: number;
  displayNameMaxLength: number;
  displayNameChangeCooldownEpochs: bigint;
  /**
   * Season transitions
   */
  maxTransitionEpochs: bigint;
  transitionBatchSize: number;
  /**
   * Season extensions
   */
  maxSeasonExtensions: number;
  maxExtensionEpochs: bigint;
  /**
   * Guild content limits
   */
  guildDescriptionMaxLength: number;
  guildInviteTtlEpochs: bigint;
  /**
   * Quests
   */
  maxQuestObjectives: number;
  /**
   * Historical data management
   */
  snapshotRetentionSeasons: number;
  epochTrackerRetentionEpochs: number;
  voteXpRecordRetentionSeasons: number;
  forumCooldownRetentionEpochs: number;
  /**
   * Forum XP anti-gaming
   */
  forumXpMinAccountAgeEpochs: bigint;
  forumXpReciprocalCooldownEpochs: bigint;
  forumXpSelfReplyCooldownEpochs: bigint;
  /**
   * Transition recovery
   */
  transitionGracePeriod: number;
  maxQuestXpReward: bigint;
  /**
   * Usernames
   */
  usernameMinLength: number;
  usernameMaxLength: number;
  usernameChangeCooldownEpochs: bigint;
  usernameCostDream: string;
  /**
   * Transition max retries
   */
  transitionMaxRetries: number;
  /**
   * Quest limits
   */
  maxActiveQuestsPerMember: number;
  /**
   * Display name moderation
   */
  displayNameReportStakeDream: string;
  /**
   * Title management
   */
  maxDisplayableTitles: number;
  /**
   * Guild invite cleanup
   */
  inviteCleanupIntervalBlocks: number;
  inviteCleanupBatchSize: number;
  /**
   * Quest validation
   */
  maxObjectiveDescriptionLength: number;
  /**
   * Display name appeal
   */
  displayNameAppealStakeDream: string;
  displayNameAppealPeriodBlocks: bigint;
  /**
   * Archived titles
   */
  maxArchivedTitles: number;
  /**
   * Nomination / Retroactive Public Goods Funding
   */
  nominationWindowEpochs: bigint;
  maxNominationsPerMember: bigint;
  retroRewardMaxRecipients: bigint;
  retroRewardBudgetPerSeason: string;
  retroRewardMinConviction: string;
  nominationConvictionHalfLifeEpochs: bigint;
  nominationRationaleMaxLength: number;
  nominationMinTrustLevel: number;
  nominationStakeMinTrustLevel: number;
  nominationMinStake: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.season.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Params
 */
export interface ParamsAmino {
  /**
   * Epoch configuration
   */
  epoch_blocks?: string;
  /**
   * Season timing
   */
  season_duration_epochs?: string;
  season_transition_epochs?: string;
  /**
   * XP rewards
   */
  xp_vote_cast?: string;
  xp_proposal_created?: string;
  xp_forum_reply_received?: string;
  xp_forum_marked_helpful?: string;
  xp_invitee_first_initiative?: string;
  xp_invitee_established?: string;
  /**
   * XP caps
   */
  max_vote_xp_per_epoch?: number;
  max_forum_xp_per_epoch?: string;
  max_xp_per_epoch?: string;
  /**
   * Levels
   */
  level_thresholds?: string[];
  /**
   * Reputation reset
   */
  baseline_reputation?: string;
  /**
   * Guilds
   */
  min_guild_members?: number;
  max_guild_members?: number;
  max_guild_officers?: number;
  guild_creation_cost?: string;
  guild_hop_cooldown_epochs?: string;
  max_guilds_per_season?: number;
  min_guild_age_epochs?: string;
  max_pending_invites?: number;
  /**
   * Display names
   */
  display_name_min_length?: number;
  display_name_max_length?: number;
  display_name_change_cooldown_epochs?: string;
  /**
   * Season transitions
   */
  max_transition_epochs?: string;
  transition_batch_size?: number;
  /**
   * Season extensions
   */
  max_season_extensions?: number;
  max_extension_epochs?: string;
  /**
   * Guild content limits
   */
  guild_description_max_length?: number;
  guild_invite_ttl_epochs?: string;
  /**
   * Quests
   */
  max_quest_objectives?: number;
  /**
   * Historical data management
   */
  snapshot_retention_seasons?: number;
  epoch_tracker_retention_epochs?: number;
  vote_xp_record_retention_seasons?: number;
  forum_cooldown_retention_epochs?: number;
  /**
   * Forum XP anti-gaming
   */
  forum_xp_min_account_age_epochs?: string;
  forum_xp_reciprocal_cooldown_epochs?: string;
  forum_xp_self_reply_cooldown_epochs?: string;
  /**
   * Transition recovery
   */
  transition_grace_period?: number;
  max_quest_xp_reward?: string;
  /**
   * Usernames
   */
  username_min_length?: number;
  username_max_length?: number;
  username_change_cooldown_epochs?: string;
  username_cost_dream?: string;
  /**
   * Transition max retries
   */
  transition_max_retries?: number;
  /**
   * Quest limits
   */
  max_active_quests_per_member?: number;
  /**
   * Display name moderation
   */
  display_name_report_stake_dream?: string;
  /**
   * Title management
   */
  max_displayable_titles?: number;
  /**
   * Guild invite cleanup
   */
  invite_cleanup_interval_blocks?: number;
  invite_cleanup_batch_size?: number;
  /**
   * Quest validation
   */
  max_objective_description_length?: number;
  /**
   * Display name appeal
   */
  display_name_appeal_stake_dream?: string;
  display_name_appeal_period_blocks?: string;
  /**
   * Archived titles
   */
  max_archived_titles?: number;
  /**
   * Nomination / Retroactive Public Goods Funding
   */
  nomination_window_epochs?: string;
  max_nominations_per_member?: string;
  retro_reward_max_recipients?: string;
  retro_reward_budget_per_season?: string;
  retro_reward_min_conviction?: string;
  nomination_conviction_half_life_epochs?: string;
  nomination_rationale_max_length?: number;
  nomination_min_trust_level?: number;
  nomination_stake_min_trust_level?: number;
  nomination_min_stake?: string;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/season/Params";
  value: ParamsAmino;
}
/**
 * SeasonOperationalParams defines the operational parameters that can be updated
 * by the Operations Committee without full governance proposals.
 * @name SeasonOperationalParams
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonOperationalParams
 */
export interface SeasonOperationalParams {
  /**
   * Epoch configuration
   */
  epochBlocks: bigint;
  /**
   * Season timing
   */
  seasonDurationEpochs: bigint;
  seasonTransitionEpochs: bigint;
  /**
   * XP rewards
   */
  xpVoteCast: bigint;
  xpProposalCreated: bigint;
  xpForumReplyReceived: bigint;
  xpForumMarkedHelpful: bigint;
  xpInviteeFirstInitiative: bigint;
  xpInviteeEstablished: bigint;
  /**
   * XP caps
   */
  maxVoteXpPerEpoch: number;
  maxForumXpPerEpoch: bigint;
  maxXpPerEpoch: bigint;
  /**
   * Guilds
   */
  minGuildMembers: number;
  maxGuildOfficers: number;
  guildCreationCost: string;
  guildHopCooldownEpochs: bigint;
  maxGuildsPerSeason: number;
  minGuildAgeEpochs: bigint;
  maxPendingInvites: number;
  /**
   * Display names
   */
  displayNameMinLength: number;
  displayNameMaxLength: number;
  displayNameChangeCooldownEpochs: bigint;
  /**
   * Season transitions
   */
  transitionBatchSize: number;
  /**
   * Season extensions
   */
  maxSeasonExtensions: number;
  maxExtensionEpochs: bigint;
  /**
   * Guild content limits
   */
  guildDescriptionMaxLength: number;
  guildInviteTtlEpochs: bigint;
  /**
   * Quests
   */
  maxQuestObjectives: number;
  /**
   * Forum XP anti-gaming
   */
  forumXpMinAccountAgeEpochs: bigint;
  forumXpReciprocalCooldownEpochs: bigint;
  forumXpSelfReplyCooldownEpochs: bigint;
  /**
   * Transition recovery
   */
  transitionGracePeriod: number;
  maxQuestXpReward: bigint;
  /**
   * Usernames
   */
  usernameMinLength: number;
  usernameMaxLength: number;
  usernameChangeCooldownEpochs: bigint;
  usernameCostDream: string;
  /**
   * Quest limits
   */
  maxActiveQuestsPerMember: number;
  /**
   * Display name moderation
   */
  displayNameReportStakeDream: string;
  /**
   * Title management
   */
  maxDisplayableTitles: number;
  /**
   * Guild invite cleanup
   */
  inviteCleanupIntervalBlocks: number;
  inviteCleanupBatchSize: number;
  /**
   * Quest validation
   */
  maxObjectiveDescriptionLength: number;
  /**
   * Display name appeal
   */
  displayNameAppealStakeDream: string;
  displayNameAppealPeriodBlocks: bigint;
  /**
   * Archived titles
   */
  maxArchivedTitles: number;
  /**
   * Nomination / Retroactive Public Goods Funding
   */
  nominationWindowEpochs: bigint;
  maxNominationsPerMember: bigint;
  retroRewardMaxRecipients: bigint;
  retroRewardBudgetPerSeason: string;
  retroRewardMinConviction: string;
  nominationConvictionHalfLifeEpochs: bigint;
  nominationRationaleMaxLength: number;
  nominationMinTrustLevel: number;
  nominationStakeMinTrustLevel: number;
  nominationMinStake: string;
}
export interface SeasonOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.season.v1.SeasonOperationalParams";
  value: Uint8Array;
}
/**
 * SeasonOperationalParams defines the operational parameters that can be updated
 * by the Operations Committee without full governance proposals.
 * @name SeasonOperationalParamsAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonOperationalParams
 */
export interface SeasonOperationalParamsAmino {
  /**
   * Epoch configuration
   */
  epoch_blocks?: string;
  /**
   * Season timing
   */
  season_duration_epochs?: string;
  season_transition_epochs?: string;
  /**
   * XP rewards
   */
  xp_vote_cast?: string;
  xp_proposal_created?: string;
  xp_forum_reply_received?: string;
  xp_forum_marked_helpful?: string;
  xp_invitee_first_initiative?: string;
  xp_invitee_established?: string;
  /**
   * XP caps
   */
  max_vote_xp_per_epoch?: number;
  max_forum_xp_per_epoch?: string;
  max_xp_per_epoch?: string;
  /**
   * Guilds
   */
  min_guild_members?: number;
  max_guild_officers?: number;
  guild_creation_cost?: string;
  guild_hop_cooldown_epochs?: string;
  max_guilds_per_season?: number;
  min_guild_age_epochs?: string;
  max_pending_invites?: number;
  /**
   * Display names
   */
  display_name_min_length?: number;
  display_name_max_length?: number;
  display_name_change_cooldown_epochs?: string;
  /**
   * Season transitions
   */
  transition_batch_size?: number;
  /**
   * Season extensions
   */
  max_season_extensions?: number;
  max_extension_epochs?: string;
  /**
   * Guild content limits
   */
  guild_description_max_length?: number;
  guild_invite_ttl_epochs?: string;
  /**
   * Quests
   */
  max_quest_objectives?: number;
  /**
   * Forum XP anti-gaming
   */
  forum_xp_min_account_age_epochs?: string;
  forum_xp_reciprocal_cooldown_epochs?: string;
  forum_xp_self_reply_cooldown_epochs?: string;
  /**
   * Transition recovery
   */
  transition_grace_period?: number;
  max_quest_xp_reward?: string;
  /**
   * Usernames
   */
  username_min_length?: number;
  username_max_length?: number;
  username_change_cooldown_epochs?: string;
  username_cost_dream?: string;
  /**
   * Quest limits
   */
  max_active_quests_per_member?: number;
  /**
   * Display name moderation
   */
  display_name_report_stake_dream?: string;
  /**
   * Title management
   */
  max_displayable_titles?: number;
  /**
   * Guild invite cleanup
   */
  invite_cleanup_interval_blocks?: number;
  invite_cleanup_batch_size?: number;
  /**
   * Quest validation
   */
  max_objective_description_length?: number;
  /**
   * Display name appeal
   */
  display_name_appeal_stake_dream?: string;
  display_name_appeal_period_blocks?: string;
  /**
   * Archived titles
   */
  max_archived_titles?: number;
  /**
   * Nomination / Retroactive Public Goods Funding
   */
  nomination_window_epochs?: string;
  max_nominations_per_member?: string;
  retro_reward_max_recipients?: string;
  retro_reward_budget_per_season?: string;
  retro_reward_min_conviction?: string;
  nomination_conviction_half_life_epochs?: string;
  nomination_rationale_max_length?: number;
  nomination_min_trust_level?: number;
  nomination_stake_min_trust_level?: number;
  nomination_min_stake?: string;
}
export interface SeasonOperationalParamsAminoMsg {
  type: "sparkdream/x/season/SeasonOperationalParams";
  value: SeasonOperationalParamsAmino;
}
function createBaseParams(): Params {
  return {
    epochBlocks: BigInt(0),
    seasonDurationEpochs: BigInt(0),
    seasonTransitionEpochs: BigInt(0),
    xpVoteCast: BigInt(0),
    xpProposalCreated: BigInt(0),
    xpForumReplyReceived: BigInt(0),
    xpForumMarkedHelpful: BigInt(0),
    xpInviteeFirstInitiative: BigInt(0),
    xpInviteeEstablished: BigInt(0),
    maxVoteXpPerEpoch: 0,
    maxForumXpPerEpoch: BigInt(0),
    maxXpPerEpoch: BigInt(0),
    levelThresholds: [],
    baselineReputation: "",
    minGuildMembers: 0,
    maxGuildMembers: 0,
    maxGuildOfficers: 0,
    guildCreationCost: "",
    guildHopCooldownEpochs: BigInt(0),
    maxGuildsPerSeason: 0,
    minGuildAgeEpochs: BigInt(0),
    maxPendingInvites: 0,
    displayNameMinLength: 0,
    displayNameMaxLength: 0,
    displayNameChangeCooldownEpochs: BigInt(0),
    maxTransitionEpochs: BigInt(0),
    transitionBatchSize: 0,
    maxSeasonExtensions: 0,
    maxExtensionEpochs: BigInt(0),
    guildDescriptionMaxLength: 0,
    guildInviteTtlEpochs: BigInt(0),
    maxQuestObjectives: 0,
    snapshotRetentionSeasons: 0,
    epochTrackerRetentionEpochs: 0,
    voteXpRecordRetentionSeasons: 0,
    forumCooldownRetentionEpochs: 0,
    forumXpMinAccountAgeEpochs: BigInt(0),
    forumXpReciprocalCooldownEpochs: BigInt(0),
    forumXpSelfReplyCooldownEpochs: BigInt(0),
    transitionGracePeriod: 0,
    maxQuestXpReward: BigInt(0),
    usernameMinLength: 0,
    usernameMaxLength: 0,
    usernameChangeCooldownEpochs: BigInt(0),
    usernameCostDream: "",
    transitionMaxRetries: 0,
    maxActiveQuestsPerMember: 0,
    displayNameReportStakeDream: "",
    maxDisplayableTitles: 0,
    inviteCleanupIntervalBlocks: 0,
    inviteCleanupBatchSize: 0,
    maxObjectiveDescriptionLength: 0,
    displayNameAppealStakeDream: "",
    displayNameAppealPeriodBlocks: BigInt(0),
    maxArchivedTitles: 0,
    nominationWindowEpochs: BigInt(0),
    maxNominationsPerMember: BigInt(0),
    retroRewardMaxRecipients: BigInt(0),
    retroRewardBudgetPerSeason: "",
    retroRewardMinConviction: "",
    nominationConvictionHalfLifeEpochs: BigInt(0),
    nominationRationaleMaxLength: 0,
    nominationMinTrustLevel: 0,
    nominationStakeMinTrustLevel: 0,
    nominationMinStake: ""
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.season.v1.Params",
  aminoType: "sparkdream/x/season/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochBlocks !== BigInt(0)) {
      writer.uint32(8).int64(message.epochBlocks);
    }
    if (message.seasonDurationEpochs !== BigInt(0)) {
      writer.uint32(16).int64(message.seasonDurationEpochs);
    }
    if (message.seasonTransitionEpochs !== BigInt(0)) {
      writer.uint32(24).int64(message.seasonTransitionEpochs);
    }
    if (message.xpVoteCast !== BigInt(0)) {
      writer.uint32(32).uint64(message.xpVoteCast);
    }
    if (message.xpProposalCreated !== BigInt(0)) {
      writer.uint32(40).uint64(message.xpProposalCreated);
    }
    if (message.xpForumReplyReceived !== BigInt(0)) {
      writer.uint32(48).uint64(message.xpForumReplyReceived);
    }
    if (message.xpForumMarkedHelpful !== BigInt(0)) {
      writer.uint32(56).uint64(message.xpForumMarkedHelpful);
    }
    if (message.xpInviteeFirstInitiative !== BigInt(0)) {
      writer.uint32(64).uint64(message.xpInviteeFirstInitiative);
    }
    if (message.xpInviteeEstablished !== BigInt(0)) {
      writer.uint32(72).uint64(message.xpInviteeEstablished);
    }
    if (message.maxVoteXpPerEpoch !== 0) {
      writer.uint32(80).uint32(message.maxVoteXpPerEpoch);
    }
    if (message.maxForumXpPerEpoch !== BigInt(0)) {
      writer.uint32(88).uint64(message.maxForumXpPerEpoch);
    }
    if (message.maxXpPerEpoch !== BigInt(0)) {
      writer.uint32(96).uint64(message.maxXpPerEpoch);
    }
    writer.uint32(106).fork();
    for (const v of message.levelThresholds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.baselineReputation !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.baselineReputation, 18).atomics);
    }
    if (message.minGuildMembers !== 0) {
      writer.uint32(120).uint32(message.minGuildMembers);
    }
    if (message.maxGuildMembers !== 0) {
      writer.uint32(128).uint32(message.maxGuildMembers);
    }
    if (message.maxGuildOfficers !== 0) {
      writer.uint32(136).uint32(message.maxGuildOfficers);
    }
    if (message.guildCreationCost !== "") {
      writer.uint32(146).string(message.guildCreationCost);
    }
    if (message.guildHopCooldownEpochs !== BigInt(0)) {
      writer.uint32(152).uint64(message.guildHopCooldownEpochs);
    }
    if (message.maxGuildsPerSeason !== 0) {
      writer.uint32(160).uint32(message.maxGuildsPerSeason);
    }
    if (message.minGuildAgeEpochs !== BigInt(0)) {
      writer.uint32(168).uint64(message.minGuildAgeEpochs);
    }
    if (message.maxPendingInvites !== 0) {
      writer.uint32(176).uint32(message.maxPendingInvites);
    }
    if (message.displayNameMinLength !== 0) {
      writer.uint32(184).uint32(message.displayNameMinLength);
    }
    if (message.displayNameMaxLength !== 0) {
      writer.uint32(192).uint32(message.displayNameMaxLength);
    }
    if (message.displayNameChangeCooldownEpochs !== BigInt(0)) {
      writer.uint32(200).uint64(message.displayNameChangeCooldownEpochs);
    }
    if (message.maxTransitionEpochs !== BigInt(0)) {
      writer.uint32(208).uint64(message.maxTransitionEpochs);
    }
    if (message.transitionBatchSize !== 0) {
      writer.uint32(216).uint32(message.transitionBatchSize);
    }
    if (message.maxSeasonExtensions !== 0) {
      writer.uint32(224).uint32(message.maxSeasonExtensions);
    }
    if (message.maxExtensionEpochs !== BigInt(0)) {
      writer.uint32(232).uint64(message.maxExtensionEpochs);
    }
    if (message.guildDescriptionMaxLength !== 0) {
      writer.uint32(240).uint32(message.guildDescriptionMaxLength);
    }
    if (message.guildInviteTtlEpochs !== BigInt(0)) {
      writer.uint32(248).uint64(message.guildInviteTtlEpochs);
    }
    if (message.maxQuestObjectives !== 0) {
      writer.uint32(256).uint32(message.maxQuestObjectives);
    }
    if (message.snapshotRetentionSeasons !== 0) {
      writer.uint32(264).uint32(message.snapshotRetentionSeasons);
    }
    if (message.epochTrackerRetentionEpochs !== 0) {
      writer.uint32(272).uint32(message.epochTrackerRetentionEpochs);
    }
    if (message.voteXpRecordRetentionSeasons !== 0) {
      writer.uint32(280).uint32(message.voteXpRecordRetentionSeasons);
    }
    if (message.forumCooldownRetentionEpochs !== 0) {
      writer.uint32(288).uint32(message.forumCooldownRetentionEpochs);
    }
    if (message.forumXpMinAccountAgeEpochs !== BigInt(0)) {
      writer.uint32(296).uint64(message.forumXpMinAccountAgeEpochs);
    }
    if (message.forumXpReciprocalCooldownEpochs !== BigInt(0)) {
      writer.uint32(304).uint64(message.forumXpReciprocalCooldownEpochs);
    }
    if (message.forumXpSelfReplyCooldownEpochs !== BigInt(0)) {
      writer.uint32(312).uint64(message.forumXpSelfReplyCooldownEpochs);
    }
    if (message.transitionGracePeriod !== 0) {
      writer.uint32(320).uint32(message.transitionGracePeriod);
    }
    if (message.maxQuestXpReward !== BigInt(0)) {
      writer.uint32(328).uint64(message.maxQuestXpReward);
    }
    if (message.usernameMinLength !== 0) {
      writer.uint32(336).uint32(message.usernameMinLength);
    }
    if (message.usernameMaxLength !== 0) {
      writer.uint32(344).uint32(message.usernameMaxLength);
    }
    if (message.usernameChangeCooldownEpochs !== BigInt(0)) {
      writer.uint32(352).uint64(message.usernameChangeCooldownEpochs);
    }
    if (message.usernameCostDream !== "") {
      writer.uint32(362).string(message.usernameCostDream);
    }
    if (message.transitionMaxRetries !== 0) {
      writer.uint32(368).uint32(message.transitionMaxRetries);
    }
    if (message.maxActiveQuestsPerMember !== 0) {
      writer.uint32(376).uint32(message.maxActiveQuestsPerMember);
    }
    if (message.displayNameReportStakeDream !== "") {
      writer.uint32(386).string(message.displayNameReportStakeDream);
    }
    if (message.maxDisplayableTitles !== 0) {
      writer.uint32(392).uint32(message.maxDisplayableTitles);
    }
    if (message.inviteCleanupIntervalBlocks !== 0) {
      writer.uint32(400).uint32(message.inviteCleanupIntervalBlocks);
    }
    if (message.inviteCleanupBatchSize !== 0) {
      writer.uint32(408).uint32(message.inviteCleanupBatchSize);
    }
    if (message.maxObjectiveDescriptionLength !== 0) {
      writer.uint32(416).uint32(message.maxObjectiveDescriptionLength);
    }
    if (message.displayNameAppealStakeDream !== "") {
      writer.uint32(426).string(message.displayNameAppealStakeDream);
    }
    if (message.displayNameAppealPeriodBlocks !== BigInt(0)) {
      writer.uint32(432).uint64(message.displayNameAppealPeriodBlocks);
    }
    if (message.maxArchivedTitles !== 0) {
      writer.uint32(440).uint32(message.maxArchivedTitles);
    }
    if (message.nominationWindowEpochs !== BigInt(0)) {
      writer.uint32(448).uint64(message.nominationWindowEpochs);
    }
    if (message.maxNominationsPerMember !== BigInt(0)) {
      writer.uint32(456).uint64(message.maxNominationsPerMember);
    }
    if (message.retroRewardMaxRecipients !== BigInt(0)) {
      writer.uint32(464).uint64(message.retroRewardMaxRecipients);
    }
    if (message.retroRewardBudgetPerSeason !== "") {
      writer.uint32(474).string(Decimal.fromUserInput(message.retroRewardBudgetPerSeason, 18).atomics);
    }
    if (message.retroRewardMinConviction !== "") {
      writer.uint32(482).string(Decimal.fromUserInput(message.retroRewardMinConviction, 18).atomics);
    }
    if (message.nominationConvictionHalfLifeEpochs !== BigInt(0)) {
      writer.uint32(488).uint64(message.nominationConvictionHalfLifeEpochs);
    }
    if (message.nominationRationaleMaxLength !== 0) {
      writer.uint32(496).uint32(message.nominationRationaleMaxLength);
    }
    if (message.nominationMinTrustLevel !== 0) {
      writer.uint32(504).uint32(message.nominationMinTrustLevel);
    }
    if (message.nominationStakeMinTrustLevel !== 0) {
      writer.uint32(512).uint32(message.nominationStakeMinTrustLevel);
    }
    if (message.nominationMinStake !== "") {
      writer.uint32(522).string(Decimal.fromUserInput(message.nominationMinStake, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochBlocks = reader.int64();
          break;
        case 2:
          message.seasonDurationEpochs = reader.int64();
          break;
        case 3:
          message.seasonTransitionEpochs = reader.int64();
          break;
        case 4:
          message.xpVoteCast = reader.uint64();
          break;
        case 5:
          message.xpProposalCreated = reader.uint64();
          break;
        case 6:
          message.xpForumReplyReceived = reader.uint64();
          break;
        case 7:
          message.xpForumMarkedHelpful = reader.uint64();
          break;
        case 8:
          message.xpInviteeFirstInitiative = reader.uint64();
          break;
        case 9:
          message.xpInviteeEstablished = reader.uint64();
          break;
        case 10:
          message.maxVoteXpPerEpoch = reader.uint32();
          break;
        case 11:
          message.maxForumXpPerEpoch = reader.uint64();
          break;
        case 12:
          message.maxXpPerEpoch = reader.uint64();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.levelThresholds.push(reader.uint64());
            }
          } else {
            message.levelThresholds.push(reader.uint64());
          }
          break;
        case 14:
          message.baselineReputation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.minGuildMembers = reader.uint32();
          break;
        case 16:
          message.maxGuildMembers = reader.uint32();
          break;
        case 17:
          message.maxGuildOfficers = reader.uint32();
          break;
        case 18:
          message.guildCreationCost = reader.string();
          break;
        case 19:
          message.guildHopCooldownEpochs = reader.uint64();
          break;
        case 20:
          message.maxGuildsPerSeason = reader.uint32();
          break;
        case 21:
          message.minGuildAgeEpochs = reader.uint64();
          break;
        case 22:
          message.maxPendingInvites = reader.uint32();
          break;
        case 23:
          message.displayNameMinLength = reader.uint32();
          break;
        case 24:
          message.displayNameMaxLength = reader.uint32();
          break;
        case 25:
          message.displayNameChangeCooldownEpochs = reader.uint64();
          break;
        case 26:
          message.maxTransitionEpochs = reader.uint64();
          break;
        case 27:
          message.transitionBatchSize = reader.uint32();
          break;
        case 28:
          message.maxSeasonExtensions = reader.uint32();
          break;
        case 29:
          message.maxExtensionEpochs = reader.uint64();
          break;
        case 30:
          message.guildDescriptionMaxLength = reader.uint32();
          break;
        case 31:
          message.guildInviteTtlEpochs = reader.uint64();
          break;
        case 32:
          message.maxQuestObjectives = reader.uint32();
          break;
        case 33:
          message.snapshotRetentionSeasons = reader.uint32();
          break;
        case 34:
          message.epochTrackerRetentionEpochs = reader.uint32();
          break;
        case 35:
          message.voteXpRecordRetentionSeasons = reader.uint32();
          break;
        case 36:
          message.forumCooldownRetentionEpochs = reader.uint32();
          break;
        case 37:
          message.forumXpMinAccountAgeEpochs = reader.uint64();
          break;
        case 38:
          message.forumXpReciprocalCooldownEpochs = reader.uint64();
          break;
        case 39:
          message.forumXpSelfReplyCooldownEpochs = reader.uint64();
          break;
        case 40:
          message.transitionGracePeriod = reader.uint32();
          break;
        case 41:
          message.maxQuestXpReward = reader.uint64();
          break;
        case 42:
          message.usernameMinLength = reader.uint32();
          break;
        case 43:
          message.usernameMaxLength = reader.uint32();
          break;
        case 44:
          message.usernameChangeCooldownEpochs = reader.uint64();
          break;
        case 45:
          message.usernameCostDream = reader.string();
          break;
        case 46:
          message.transitionMaxRetries = reader.uint32();
          break;
        case 47:
          message.maxActiveQuestsPerMember = reader.uint32();
          break;
        case 48:
          message.displayNameReportStakeDream = reader.string();
          break;
        case 49:
          message.maxDisplayableTitles = reader.uint32();
          break;
        case 50:
          message.inviteCleanupIntervalBlocks = reader.uint32();
          break;
        case 51:
          message.inviteCleanupBatchSize = reader.uint32();
          break;
        case 52:
          message.maxObjectiveDescriptionLength = reader.uint32();
          break;
        case 53:
          message.displayNameAppealStakeDream = reader.string();
          break;
        case 54:
          message.displayNameAppealPeriodBlocks = reader.uint64();
          break;
        case 55:
          message.maxArchivedTitles = reader.uint32();
          break;
        case 56:
          message.nominationWindowEpochs = reader.uint64();
          break;
        case 57:
          message.maxNominationsPerMember = reader.uint64();
          break;
        case 58:
          message.retroRewardMaxRecipients = reader.uint64();
          break;
        case 59:
          message.retroRewardBudgetPerSeason = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 60:
          message.retroRewardMinConviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 61:
          message.nominationConvictionHalfLifeEpochs = reader.uint64();
          break;
        case 62:
          message.nominationRationaleMaxLength = reader.uint32();
          break;
        case 63:
          message.nominationMinTrustLevel = reader.uint32();
          break;
        case 64:
          message.nominationStakeMinTrustLevel = reader.uint32();
          break;
        case 65:
          message.nominationMinStake = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.epochBlocks = object.epochBlocks !== undefined && object.epochBlocks !== null ? BigInt(object.epochBlocks.toString()) : BigInt(0);
    message.seasonDurationEpochs = object.seasonDurationEpochs !== undefined && object.seasonDurationEpochs !== null ? BigInt(object.seasonDurationEpochs.toString()) : BigInt(0);
    message.seasonTransitionEpochs = object.seasonTransitionEpochs !== undefined && object.seasonTransitionEpochs !== null ? BigInt(object.seasonTransitionEpochs.toString()) : BigInt(0);
    message.xpVoteCast = object.xpVoteCast !== undefined && object.xpVoteCast !== null ? BigInt(object.xpVoteCast.toString()) : BigInt(0);
    message.xpProposalCreated = object.xpProposalCreated !== undefined && object.xpProposalCreated !== null ? BigInt(object.xpProposalCreated.toString()) : BigInt(0);
    message.xpForumReplyReceived = object.xpForumReplyReceived !== undefined && object.xpForumReplyReceived !== null ? BigInt(object.xpForumReplyReceived.toString()) : BigInt(0);
    message.xpForumMarkedHelpful = object.xpForumMarkedHelpful !== undefined && object.xpForumMarkedHelpful !== null ? BigInt(object.xpForumMarkedHelpful.toString()) : BigInt(0);
    message.xpInviteeFirstInitiative = object.xpInviteeFirstInitiative !== undefined && object.xpInviteeFirstInitiative !== null ? BigInt(object.xpInviteeFirstInitiative.toString()) : BigInt(0);
    message.xpInviteeEstablished = object.xpInviteeEstablished !== undefined && object.xpInviteeEstablished !== null ? BigInt(object.xpInviteeEstablished.toString()) : BigInt(0);
    message.maxVoteXpPerEpoch = object.maxVoteXpPerEpoch ?? 0;
    message.maxForumXpPerEpoch = object.maxForumXpPerEpoch !== undefined && object.maxForumXpPerEpoch !== null ? BigInt(object.maxForumXpPerEpoch.toString()) : BigInt(0);
    message.maxXpPerEpoch = object.maxXpPerEpoch !== undefined && object.maxXpPerEpoch !== null ? BigInt(object.maxXpPerEpoch.toString()) : BigInt(0);
    message.levelThresholds = object.levelThresholds?.map(e => BigInt(e.toString())) || [];
    message.baselineReputation = object.baselineReputation ?? "";
    message.minGuildMembers = object.minGuildMembers ?? 0;
    message.maxGuildMembers = object.maxGuildMembers ?? 0;
    message.maxGuildOfficers = object.maxGuildOfficers ?? 0;
    message.guildCreationCost = object.guildCreationCost ?? "";
    message.guildHopCooldownEpochs = object.guildHopCooldownEpochs !== undefined && object.guildHopCooldownEpochs !== null ? BigInt(object.guildHopCooldownEpochs.toString()) : BigInt(0);
    message.maxGuildsPerSeason = object.maxGuildsPerSeason ?? 0;
    message.minGuildAgeEpochs = object.minGuildAgeEpochs !== undefined && object.minGuildAgeEpochs !== null ? BigInt(object.minGuildAgeEpochs.toString()) : BigInt(0);
    message.maxPendingInvites = object.maxPendingInvites ?? 0;
    message.displayNameMinLength = object.displayNameMinLength ?? 0;
    message.displayNameMaxLength = object.displayNameMaxLength ?? 0;
    message.displayNameChangeCooldownEpochs = object.displayNameChangeCooldownEpochs !== undefined && object.displayNameChangeCooldownEpochs !== null ? BigInt(object.displayNameChangeCooldownEpochs.toString()) : BigInt(0);
    message.maxTransitionEpochs = object.maxTransitionEpochs !== undefined && object.maxTransitionEpochs !== null ? BigInt(object.maxTransitionEpochs.toString()) : BigInt(0);
    message.transitionBatchSize = object.transitionBatchSize ?? 0;
    message.maxSeasonExtensions = object.maxSeasonExtensions ?? 0;
    message.maxExtensionEpochs = object.maxExtensionEpochs !== undefined && object.maxExtensionEpochs !== null ? BigInt(object.maxExtensionEpochs.toString()) : BigInt(0);
    message.guildDescriptionMaxLength = object.guildDescriptionMaxLength ?? 0;
    message.guildInviteTtlEpochs = object.guildInviteTtlEpochs !== undefined && object.guildInviteTtlEpochs !== null ? BigInt(object.guildInviteTtlEpochs.toString()) : BigInt(0);
    message.maxQuestObjectives = object.maxQuestObjectives ?? 0;
    message.snapshotRetentionSeasons = object.snapshotRetentionSeasons ?? 0;
    message.epochTrackerRetentionEpochs = object.epochTrackerRetentionEpochs ?? 0;
    message.voteXpRecordRetentionSeasons = object.voteXpRecordRetentionSeasons ?? 0;
    message.forumCooldownRetentionEpochs = object.forumCooldownRetentionEpochs ?? 0;
    message.forumXpMinAccountAgeEpochs = object.forumXpMinAccountAgeEpochs !== undefined && object.forumXpMinAccountAgeEpochs !== null ? BigInt(object.forumXpMinAccountAgeEpochs.toString()) : BigInt(0);
    message.forumXpReciprocalCooldownEpochs = object.forumXpReciprocalCooldownEpochs !== undefined && object.forumXpReciprocalCooldownEpochs !== null ? BigInt(object.forumXpReciprocalCooldownEpochs.toString()) : BigInt(0);
    message.forumXpSelfReplyCooldownEpochs = object.forumXpSelfReplyCooldownEpochs !== undefined && object.forumXpSelfReplyCooldownEpochs !== null ? BigInt(object.forumXpSelfReplyCooldownEpochs.toString()) : BigInt(0);
    message.transitionGracePeriod = object.transitionGracePeriod ?? 0;
    message.maxQuestXpReward = object.maxQuestXpReward !== undefined && object.maxQuestXpReward !== null ? BigInt(object.maxQuestXpReward.toString()) : BigInt(0);
    message.usernameMinLength = object.usernameMinLength ?? 0;
    message.usernameMaxLength = object.usernameMaxLength ?? 0;
    message.usernameChangeCooldownEpochs = object.usernameChangeCooldownEpochs !== undefined && object.usernameChangeCooldownEpochs !== null ? BigInt(object.usernameChangeCooldownEpochs.toString()) : BigInt(0);
    message.usernameCostDream = object.usernameCostDream ?? "";
    message.transitionMaxRetries = object.transitionMaxRetries ?? 0;
    message.maxActiveQuestsPerMember = object.maxActiveQuestsPerMember ?? 0;
    message.displayNameReportStakeDream = object.displayNameReportStakeDream ?? "";
    message.maxDisplayableTitles = object.maxDisplayableTitles ?? 0;
    message.inviteCleanupIntervalBlocks = object.inviteCleanupIntervalBlocks ?? 0;
    message.inviteCleanupBatchSize = object.inviteCleanupBatchSize ?? 0;
    message.maxObjectiveDescriptionLength = object.maxObjectiveDescriptionLength ?? 0;
    message.displayNameAppealStakeDream = object.displayNameAppealStakeDream ?? "";
    message.displayNameAppealPeriodBlocks = object.displayNameAppealPeriodBlocks !== undefined && object.displayNameAppealPeriodBlocks !== null ? BigInt(object.displayNameAppealPeriodBlocks.toString()) : BigInt(0);
    message.maxArchivedTitles = object.maxArchivedTitles ?? 0;
    message.nominationWindowEpochs = object.nominationWindowEpochs !== undefined && object.nominationWindowEpochs !== null ? BigInt(object.nominationWindowEpochs.toString()) : BigInt(0);
    message.maxNominationsPerMember = object.maxNominationsPerMember !== undefined && object.maxNominationsPerMember !== null ? BigInt(object.maxNominationsPerMember.toString()) : BigInt(0);
    message.retroRewardMaxRecipients = object.retroRewardMaxRecipients !== undefined && object.retroRewardMaxRecipients !== null ? BigInt(object.retroRewardMaxRecipients.toString()) : BigInt(0);
    message.retroRewardBudgetPerSeason = object.retroRewardBudgetPerSeason ?? "";
    message.retroRewardMinConviction = object.retroRewardMinConviction ?? "";
    message.nominationConvictionHalfLifeEpochs = object.nominationConvictionHalfLifeEpochs !== undefined && object.nominationConvictionHalfLifeEpochs !== null ? BigInt(object.nominationConvictionHalfLifeEpochs.toString()) : BigInt(0);
    message.nominationRationaleMaxLength = object.nominationRationaleMaxLength ?? 0;
    message.nominationMinTrustLevel = object.nominationMinTrustLevel ?? 0;
    message.nominationStakeMinTrustLevel = object.nominationStakeMinTrustLevel ?? 0;
    message.nominationMinStake = object.nominationMinStake ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.epoch_blocks !== undefined && object.epoch_blocks !== null) {
      message.epochBlocks = BigInt(object.epoch_blocks);
    }
    if (object.season_duration_epochs !== undefined && object.season_duration_epochs !== null) {
      message.seasonDurationEpochs = BigInt(object.season_duration_epochs);
    }
    if (object.season_transition_epochs !== undefined && object.season_transition_epochs !== null) {
      message.seasonTransitionEpochs = BigInt(object.season_transition_epochs);
    }
    if (object.xp_vote_cast !== undefined && object.xp_vote_cast !== null) {
      message.xpVoteCast = BigInt(object.xp_vote_cast);
    }
    if (object.xp_proposal_created !== undefined && object.xp_proposal_created !== null) {
      message.xpProposalCreated = BigInt(object.xp_proposal_created);
    }
    if (object.xp_forum_reply_received !== undefined && object.xp_forum_reply_received !== null) {
      message.xpForumReplyReceived = BigInt(object.xp_forum_reply_received);
    }
    if (object.xp_forum_marked_helpful !== undefined && object.xp_forum_marked_helpful !== null) {
      message.xpForumMarkedHelpful = BigInt(object.xp_forum_marked_helpful);
    }
    if (object.xp_invitee_first_initiative !== undefined && object.xp_invitee_first_initiative !== null) {
      message.xpInviteeFirstInitiative = BigInt(object.xp_invitee_first_initiative);
    }
    if (object.xp_invitee_established !== undefined && object.xp_invitee_established !== null) {
      message.xpInviteeEstablished = BigInt(object.xp_invitee_established);
    }
    if (object.max_vote_xp_per_epoch !== undefined && object.max_vote_xp_per_epoch !== null) {
      message.maxVoteXpPerEpoch = object.max_vote_xp_per_epoch;
    }
    if (object.max_forum_xp_per_epoch !== undefined && object.max_forum_xp_per_epoch !== null) {
      message.maxForumXpPerEpoch = BigInt(object.max_forum_xp_per_epoch);
    }
    if (object.max_xp_per_epoch !== undefined && object.max_xp_per_epoch !== null) {
      message.maxXpPerEpoch = BigInt(object.max_xp_per_epoch);
    }
    message.levelThresholds = object.level_thresholds?.map(e => BigInt(e)) || [];
    if (object.baseline_reputation !== undefined && object.baseline_reputation !== null) {
      message.baselineReputation = object.baseline_reputation;
    }
    if (object.min_guild_members !== undefined && object.min_guild_members !== null) {
      message.minGuildMembers = object.min_guild_members;
    }
    if (object.max_guild_members !== undefined && object.max_guild_members !== null) {
      message.maxGuildMembers = object.max_guild_members;
    }
    if (object.max_guild_officers !== undefined && object.max_guild_officers !== null) {
      message.maxGuildOfficers = object.max_guild_officers;
    }
    if (object.guild_creation_cost !== undefined && object.guild_creation_cost !== null) {
      message.guildCreationCost = object.guild_creation_cost;
    }
    if (object.guild_hop_cooldown_epochs !== undefined && object.guild_hop_cooldown_epochs !== null) {
      message.guildHopCooldownEpochs = BigInt(object.guild_hop_cooldown_epochs);
    }
    if (object.max_guilds_per_season !== undefined && object.max_guilds_per_season !== null) {
      message.maxGuildsPerSeason = object.max_guilds_per_season;
    }
    if (object.min_guild_age_epochs !== undefined && object.min_guild_age_epochs !== null) {
      message.minGuildAgeEpochs = BigInt(object.min_guild_age_epochs);
    }
    if (object.max_pending_invites !== undefined && object.max_pending_invites !== null) {
      message.maxPendingInvites = object.max_pending_invites;
    }
    if (object.display_name_min_length !== undefined && object.display_name_min_length !== null) {
      message.displayNameMinLength = object.display_name_min_length;
    }
    if (object.display_name_max_length !== undefined && object.display_name_max_length !== null) {
      message.displayNameMaxLength = object.display_name_max_length;
    }
    if (object.display_name_change_cooldown_epochs !== undefined && object.display_name_change_cooldown_epochs !== null) {
      message.displayNameChangeCooldownEpochs = BigInt(object.display_name_change_cooldown_epochs);
    }
    if (object.max_transition_epochs !== undefined && object.max_transition_epochs !== null) {
      message.maxTransitionEpochs = BigInt(object.max_transition_epochs);
    }
    if (object.transition_batch_size !== undefined && object.transition_batch_size !== null) {
      message.transitionBatchSize = object.transition_batch_size;
    }
    if (object.max_season_extensions !== undefined && object.max_season_extensions !== null) {
      message.maxSeasonExtensions = object.max_season_extensions;
    }
    if (object.max_extension_epochs !== undefined && object.max_extension_epochs !== null) {
      message.maxExtensionEpochs = BigInt(object.max_extension_epochs);
    }
    if (object.guild_description_max_length !== undefined && object.guild_description_max_length !== null) {
      message.guildDescriptionMaxLength = object.guild_description_max_length;
    }
    if (object.guild_invite_ttl_epochs !== undefined && object.guild_invite_ttl_epochs !== null) {
      message.guildInviteTtlEpochs = BigInt(object.guild_invite_ttl_epochs);
    }
    if (object.max_quest_objectives !== undefined && object.max_quest_objectives !== null) {
      message.maxQuestObjectives = object.max_quest_objectives;
    }
    if (object.snapshot_retention_seasons !== undefined && object.snapshot_retention_seasons !== null) {
      message.snapshotRetentionSeasons = object.snapshot_retention_seasons;
    }
    if (object.epoch_tracker_retention_epochs !== undefined && object.epoch_tracker_retention_epochs !== null) {
      message.epochTrackerRetentionEpochs = object.epoch_tracker_retention_epochs;
    }
    if (object.vote_xp_record_retention_seasons !== undefined && object.vote_xp_record_retention_seasons !== null) {
      message.voteXpRecordRetentionSeasons = object.vote_xp_record_retention_seasons;
    }
    if (object.forum_cooldown_retention_epochs !== undefined && object.forum_cooldown_retention_epochs !== null) {
      message.forumCooldownRetentionEpochs = object.forum_cooldown_retention_epochs;
    }
    if (object.forum_xp_min_account_age_epochs !== undefined && object.forum_xp_min_account_age_epochs !== null) {
      message.forumXpMinAccountAgeEpochs = BigInt(object.forum_xp_min_account_age_epochs);
    }
    if (object.forum_xp_reciprocal_cooldown_epochs !== undefined && object.forum_xp_reciprocal_cooldown_epochs !== null) {
      message.forumXpReciprocalCooldownEpochs = BigInt(object.forum_xp_reciprocal_cooldown_epochs);
    }
    if (object.forum_xp_self_reply_cooldown_epochs !== undefined && object.forum_xp_self_reply_cooldown_epochs !== null) {
      message.forumXpSelfReplyCooldownEpochs = BigInt(object.forum_xp_self_reply_cooldown_epochs);
    }
    if (object.transition_grace_period !== undefined && object.transition_grace_period !== null) {
      message.transitionGracePeriod = object.transition_grace_period;
    }
    if (object.max_quest_xp_reward !== undefined && object.max_quest_xp_reward !== null) {
      message.maxQuestXpReward = BigInt(object.max_quest_xp_reward);
    }
    if (object.username_min_length !== undefined && object.username_min_length !== null) {
      message.usernameMinLength = object.username_min_length;
    }
    if (object.username_max_length !== undefined && object.username_max_length !== null) {
      message.usernameMaxLength = object.username_max_length;
    }
    if (object.username_change_cooldown_epochs !== undefined && object.username_change_cooldown_epochs !== null) {
      message.usernameChangeCooldownEpochs = BigInt(object.username_change_cooldown_epochs);
    }
    if (object.username_cost_dream !== undefined && object.username_cost_dream !== null) {
      message.usernameCostDream = object.username_cost_dream;
    }
    if (object.transition_max_retries !== undefined && object.transition_max_retries !== null) {
      message.transitionMaxRetries = object.transition_max_retries;
    }
    if (object.max_active_quests_per_member !== undefined && object.max_active_quests_per_member !== null) {
      message.maxActiveQuestsPerMember = object.max_active_quests_per_member;
    }
    if (object.display_name_report_stake_dream !== undefined && object.display_name_report_stake_dream !== null) {
      message.displayNameReportStakeDream = object.display_name_report_stake_dream;
    }
    if (object.max_displayable_titles !== undefined && object.max_displayable_titles !== null) {
      message.maxDisplayableTitles = object.max_displayable_titles;
    }
    if (object.invite_cleanup_interval_blocks !== undefined && object.invite_cleanup_interval_blocks !== null) {
      message.inviteCleanupIntervalBlocks = object.invite_cleanup_interval_blocks;
    }
    if (object.invite_cleanup_batch_size !== undefined && object.invite_cleanup_batch_size !== null) {
      message.inviteCleanupBatchSize = object.invite_cleanup_batch_size;
    }
    if (object.max_objective_description_length !== undefined && object.max_objective_description_length !== null) {
      message.maxObjectiveDescriptionLength = object.max_objective_description_length;
    }
    if (object.display_name_appeal_stake_dream !== undefined && object.display_name_appeal_stake_dream !== null) {
      message.displayNameAppealStakeDream = object.display_name_appeal_stake_dream;
    }
    if (object.display_name_appeal_period_blocks !== undefined && object.display_name_appeal_period_blocks !== null) {
      message.displayNameAppealPeriodBlocks = BigInt(object.display_name_appeal_period_blocks);
    }
    if (object.max_archived_titles !== undefined && object.max_archived_titles !== null) {
      message.maxArchivedTitles = object.max_archived_titles;
    }
    if (object.nomination_window_epochs !== undefined && object.nomination_window_epochs !== null) {
      message.nominationWindowEpochs = BigInt(object.nomination_window_epochs);
    }
    if (object.max_nominations_per_member !== undefined && object.max_nominations_per_member !== null) {
      message.maxNominationsPerMember = BigInt(object.max_nominations_per_member);
    }
    if (object.retro_reward_max_recipients !== undefined && object.retro_reward_max_recipients !== null) {
      message.retroRewardMaxRecipients = BigInt(object.retro_reward_max_recipients);
    }
    if (object.retro_reward_budget_per_season !== undefined && object.retro_reward_budget_per_season !== null) {
      message.retroRewardBudgetPerSeason = object.retro_reward_budget_per_season;
    }
    if (object.retro_reward_min_conviction !== undefined && object.retro_reward_min_conviction !== null) {
      message.retroRewardMinConviction = object.retro_reward_min_conviction;
    }
    if (object.nomination_conviction_half_life_epochs !== undefined && object.nomination_conviction_half_life_epochs !== null) {
      message.nominationConvictionHalfLifeEpochs = BigInt(object.nomination_conviction_half_life_epochs);
    }
    if (object.nomination_rationale_max_length !== undefined && object.nomination_rationale_max_length !== null) {
      message.nominationRationaleMaxLength = object.nomination_rationale_max_length;
    }
    if (object.nomination_min_trust_level !== undefined && object.nomination_min_trust_level !== null) {
      message.nominationMinTrustLevel = object.nomination_min_trust_level;
    }
    if (object.nomination_stake_min_trust_level !== undefined && object.nomination_stake_min_trust_level !== null) {
      message.nominationStakeMinTrustLevel = object.nomination_stake_min_trust_level;
    }
    if (object.nomination_min_stake !== undefined && object.nomination_min_stake !== null) {
      message.nominationMinStake = object.nomination_min_stake;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.epoch_blocks = message.epochBlocks !== BigInt(0) ? message.epochBlocks?.toString() : undefined;
    obj.season_duration_epochs = message.seasonDurationEpochs !== BigInt(0) ? message.seasonDurationEpochs?.toString() : undefined;
    obj.season_transition_epochs = message.seasonTransitionEpochs !== BigInt(0) ? message.seasonTransitionEpochs?.toString() : undefined;
    obj.xp_vote_cast = message.xpVoteCast !== BigInt(0) ? message.xpVoteCast?.toString() : undefined;
    obj.xp_proposal_created = message.xpProposalCreated !== BigInt(0) ? message.xpProposalCreated?.toString() : undefined;
    obj.xp_forum_reply_received = message.xpForumReplyReceived !== BigInt(0) ? message.xpForumReplyReceived?.toString() : undefined;
    obj.xp_forum_marked_helpful = message.xpForumMarkedHelpful !== BigInt(0) ? message.xpForumMarkedHelpful?.toString() : undefined;
    obj.xp_invitee_first_initiative = message.xpInviteeFirstInitiative !== BigInt(0) ? message.xpInviteeFirstInitiative?.toString() : undefined;
    obj.xp_invitee_established = message.xpInviteeEstablished !== BigInt(0) ? message.xpInviteeEstablished?.toString() : undefined;
    obj.max_vote_xp_per_epoch = message.maxVoteXpPerEpoch === 0 ? undefined : message.maxVoteXpPerEpoch;
    obj.max_forum_xp_per_epoch = message.maxForumXpPerEpoch !== BigInt(0) ? message.maxForumXpPerEpoch?.toString() : undefined;
    obj.max_xp_per_epoch = message.maxXpPerEpoch !== BigInt(0) ? message.maxXpPerEpoch?.toString() : undefined;
    if (message.levelThresholds) {
      obj.level_thresholds = message.levelThresholds.map(e => e.toString());
    } else {
      obj.level_thresholds = message.levelThresholds;
    }
    obj.baseline_reputation = message.baselineReputation === "" ? undefined : message.baselineReputation;
    obj.min_guild_members = message.minGuildMembers === 0 ? undefined : message.minGuildMembers;
    obj.max_guild_members = message.maxGuildMembers === 0 ? undefined : message.maxGuildMembers;
    obj.max_guild_officers = message.maxGuildOfficers === 0 ? undefined : message.maxGuildOfficers;
    obj.guild_creation_cost = message.guildCreationCost === "" ? undefined : message.guildCreationCost;
    obj.guild_hop_cooldown_epochs = message.guildHopCooldownEpochs !== BigInt(0) ? message.guildHopCooldownEpochs?.toString() : undefined;
    obj.max_guilds_per_season = message.maxGuildsPerSeason === 0 ? undefined : message.maxGuildsPerSeason;
    obj.min_guild_age_epochs = message.minGuildAgeEpochs !== BigInt(0) ? message.minGuildAgeEpochs?.toString() : undefined;
    obj.max_pending_invites = message.maxPendingInvites === 0 ? undefined : message.maxPendingInvites;
    obj.display_name_min_length = message.displayNameMinLength === 0 ? undefined : message.displayNameMinLength;
    obj.display_name_max_length = message.displayNameMaxLength === 0 ? undefined : message.displayNameMaxLength;
    obj.display_name_change_cooldown_epochs = message.displayNameChangeCooldownEpochs !== BigInt(0) ? message.displayNameChangeCooldownEpochs?.toString() : undefined;
    obj.max_transition_epochs = message.maxTransitionEpochs !== BigInt(0) ? message.maxTransitionEpochs?.toString() : undefined;
    obj.transition_batch_size = message.transitionBatchSize === 0 ? undefined : message.transitionBatchSize;
    obj.max_season_extensions = message.maxSeasonExtensions === 0 ? undefined : message.maxSeasonExtensions;
    obj.max_extension_epochs = message.maxExtensionEpochs !== BigInt(0) ? message.maxExtensionEpochs?.toString() : undefined;
    obj.guild_description_max_length = message.guildDescriptionMaxLength === 0 ? undefined : message.guildDescriptionMaxLength;
    obj.guild_invite_ttl_epochs = message.guildInviteTtlEpochs !== BigInt(0) ? message.guildInviteTtlEpochs?.toString() : undefined;
    obj.max_quest_objectives = message.maxQuestObjectives === 0 ? undefined : message.maxQuestObjectives;
    obj.snapshot_retention_seasons = message.snapshotRetentionSeasons === 0 ? undefined : message.snapshotRetentionSeasons;
    obj.epoch_tracker_retention_epochs = message.epochTrackerRetentionEpochs === 0 ? undefined : message.epochTrackerRetentionEpochs;
    obj.vote_xp_record_retention_seasons = message.voteXpRecordRetentionSeasons === 0 ? undefined : message.voteXpRecordRetentionSeasons;
    obj.forum_cooldown_retention_epochs = message.forumCooldownRetentionEpochs === 0 ? undefined : message.forumCooldownRetentionEpochs;
    obj.forum_xp_min_account_age_epochs = message.forumXpMinAccountAgeEpochs !== BigInt(0) ? message.forumXpMinAccountAgeEpochs?.toString() : undefined;
    obj.forum_xp_reciprocal_cooldown_epochs = message.forumXpReciprocalCooldownEpochs !== BigInt(0) ? message.forumXpReciprocalCooldownEpochs?.toString() : undefined;
    obj.forum_xp_self_reply_cooldown_epochs = message.forumXpSelfReplyCooldownEpochs !== BigInt(0) ? message.forumXpSelfReplyCooldownEpochs?.toString() : undefined;
    obj.transition_grace_period = message.transitionGracePeriod === 0 ? undefined : message.transitionGracePeriod;
    obj.max_quest_xp_reward = message.maxQuestXpReward !== BigInt(0) ? message.maxQuestXpReward?.toString() : undefined;
    obj.username_min_length = message.usernameMinLength === 0 ? undefined : message.usernameMinLength;
    obj.username_max_length = message.usernameMaxLength === 0 ? undefined : message.usernameMaxLength;
    obj.username_change_cooldown_epochs = message.usernameChangeCooldownEpochs !== BigInt(0) ? message.usernameChangeCooldownEpochs?.toString() : undefined;
    obj.username_cost_dream = message.usernameCostDream === "" ? undefined : message.usernameCostDream;
    obj.transition_max_retries = message.transitionMaxRetries === 0 ? undefined : message.transitionMaxRetries;
    obj.max_active_quests_per_member = message.maxActiveQuestsPerMember === 0 ? undefined : message.maxActiveQuestsPerMember;
    obj.display_name_report_stake_dream = message.displayNameReportStakeDream === "" ? undefined : message.displayNameReportStakeDream;
    obj.max_displayable_titles = message.maxDisplayableTitles === 0 ? undefined : message.maxDisplayableTitles;
    obj.invite_cleanup_interval_blocks = message.inviteCleanupIntervalBlocks === 0 ? undefined : message.inviteCleanupIntervalBlocks;
    obj.invite_cleanup_batch_size = message.inviteCleanupBatchSize === 0 ? undefined : message.inviteCleanupBatchSize;
    obj.max_objective_description_length = message.maxObjectiveDescriptionLength === 0 ? undefined : message.maxObjectiveDescriptionLength;
    obj.display_name_appeal_stake_dream = message.displayNameAppealStakeDream === "" ? undefined : message.displayNameAppealStakeDream;
    obj.display_name_appeal_period_blocks = message.displayNameAppealPeriodBlocks !== BigInt(0) ? message.displayNameAppealPeriodBlocks?.toString() : undefined;
    obj.max_archived_titles = message.maxArchivedTitles === 0 ? undefined : message.maxArchivedTitles;
    obj.nomination_window_epochs = message.nominationWindowEpochs !== BigInt(0) ? message.nominationWindowEpochs?.toString() : undefined;
    obj.max_nominations_per_member = message.maxNominationsPerMember !== BigInt(0) ? message.maxNominationsPerMember?.toString() : undefined;
    obj.retro_reward_max_recipients = message.retroRewardMaxRecipients !== BigInt(0) ? message.retroRewardMaxRecipients?.toString() : undefined;
    obj.retro_reward_budget_per_season = message.retroRewardBudgetPerSeason === "" ? undefined : message.retroRewardBudgetPerSeason;
    obj.retro_reward_min_conviction = message.retroRewardMinConviction === "" ? undefined : message.retroRewardMinConviction;
    obj.nomination_conviction_half_life_epochs = message.nominationConvictionHalfLifeEpochs !== BigInt(0) ? message.nominationConvictionHalfLifeEpochs?.toString() : undefined;
    obj.nomination_rationale_max_length = message.nominationRationaleMaxLength === 0 ? undefined : message.nominationRationaleMaxLength;
    obj.nomination_min_trust_level = message.nominationMinTrustLevel === 0 ? undefined : message.nominationMinTrustLevel;
    obj.nomination_stake_min_trust_level = message.nominationStakeMinTrustLevel === 0 ? undefined : message.nominationStakeMinTrustLevel;
    obj.nomination_min_stake = message.nominationMinStake === "" ? undefined : message.nominationMinStake;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/season/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseSeasonOperationalParams(): SeasonOperationalParams {
  return {
    epochBlocks: BigInt(0),
    seasonDurationEpochs: BigInt(0),
    seasonTransitionEpochs: BigInt(0),
    xpVoteCast: BigInt(0),
    xpProposalCreated: BigInt(0),
    xpForumReplyReceived: BigInt(0),
    xpForumMarkedHelpful: BigInt(0),
    xpInviteeFirstInitiative: BigInt(0),
    xpInviteeEstablished: BigInt(0),
    maxVoteXpPerEpoch: 0,
    maxForumXpPerEpoch: BigInt(0),
    maxXpPerEpoch: BigInt(0),
    minGuildMembers: 0,
    maxGuildOfficers: 0,
    guildCreationCost: "",
    guildHopCooldownEpochs: BigInt(0),
    maxGuildsPerSeason: 0,
    minGuildAgeEpochs: BigInt(0),
    maxPendingInvites: 0,
    displayNameMinLength: 0,
    displayNameMaxLength: 0,
    displayNameChangeCooldownEpochs: BigInt(0),
    transitionBatchSize: 0,
    maxSeasonExtensions: 0,
    maxExtensionEpochs: BigInt(0),
    guildDescriptionMaxLength: 0,
    guildInviteTtlEpochs: BigInt(0),
    maxQuestObjectives: 0,
    forumXpMinAccountAgeEpochs: BigInt(0),
    forumXpReciprocalCooldownEpochs: BigInt(0),
    forumXpSelfReplyCooldownEpochs: BigInt(0),
    transitionGracePeriod: 0,
    maxQuestXpReward: BigInt(0),
    usernameMinLength: 0,
    usernameMaxLength: 0,
    usernameChangeCooldownEpochs: BigInt(0),
    usernameCostDream: "",
    maxActiveQuestsPerMember: 0,
    displayNameReportStakeDream: "",
    maxDisplayableTitles: 0,
    inviteCleanupIntervalBlocks: 0,
    inviteCleanupBatchSize: 0,
    maxObjectiveDescriptionLength: 0,
    displayNameAppealStakeDream: "",
    displayNameAppealPeriodBlocks: BigInt(0),
    maxArchivedTitles: 0,
    nominationWindowEpochs: BigInt(0),
    maxNominationsPerMember: BigInt(0),
    retroRewardMaxRecipients: BigInt(0),
    retroRewardBudgetPerSeason: "",
    retroRewardMinConviction: "",
    nominationConvictionHalfLifeEpochs: BigInt(0),
    nominationRationaleMaxLength: 0,
    nominationMinTrustLevel: 0,
    nominationStakeMinTrustLevel: 0,
    nominationMinStake: ""
  };
}
/**
 * SeasonOperationalParams defines the operational parameters that can be updated
 * by the Operations Committee without full governance proposals.
 * @name SeasonOperationalParams
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonOperationalParams
 */
export const SeasonOperationalParams = {
  typeUrl: "/sparkdream.season.v1.SeasonOperationalParams",
  aminoType: "sparkdream/x/season/SeasonOperationalParams",
  encode(message: SeasonOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochBlocks !== BigInt(0)) {
      writer.uint32(8).int64(message.epochBlocks);
    }
    if (message.seasonDurationEpochs !== BigInt(0)) {
      writer.uint32(16).int64(message.seasonDurationEpochs);
    }
    if (message.seasonTransitionEpochs !== BigInt(0)) {
      writer.uint32(24).int64(message.seasonTransitionEpochs);
    }
    if (message.xpVoteCast !== BigInt(0)) {
      writer.uint32(32).uint64(message.xpVoteCast);
    }
    if (message.xpProposalCreated !== BigInt(0)) {
      writer.uint32(40).uint64(message.xpProposalCreated);
    }
    if (message.xpForumReplyReceived !== BigInt(0)) {
      writer.uint32(48).uint64(message.xpForumReplyReceived);
    }
    if (message.xpForumMarkedHelpful !== BigInt(0)) {
      writer.uint32(56).uint64(message.xpForumMarkedHelpful);
    }
    if (message.xpInviteeFirstInitiative !== BigInt(0)) {
      writer.uint32(64).uint64(message.xpInviteeFirstInitiative);
    }
    if (message.xpInviteeEstablished !== BigInt(0)) {
      writer.uint32(72).uint64(message.xpInviteeEstablished);
    }
    if (message.maxVoteXpPerEpoch !== 0) {
      writer.uint32(80).uint32(message.maxVoteXpPerEpoch);
    }
    if (message.maxForumXpPerEpoch !== BigInt(0)) {
      writer.uint32(88).uint64(message.maxForumXpPerEpoch);
    }
    if (message.maxXpPerEpoch !== BigInt(0)) {
      writer.uint32(96).uint64(message.maxXpPerEpoch);
    }
    if (message.minGuildMembers !== 0) {
      writer.uint32(104).uint32(message.minGuildMembers);
    }
    if (message.maxGuildOfficers !== 0) {
      writer.uint32(112).uint32(message.maxGuildOfficers);
    }
    if (message.guildCreationCost !== "") {
      writer.uint32(122).string(message.guildCreationCost);
    }
    if (message.guildHopCooldownEpochs !== BigInt(0)) {
      writer.uint32(128).uint64(message.guildHopCooldownEpochs);
    }
    if (message.maxGuildsPerSeason !== 0) {
      writer.uint32(136).uint32(message.maxGuildsPerSeason);
    }
    if (message.minGuildAgeEpochs !== BigInt(0)) {
      writer.uint32(144).uint64(message.minGuildAgeEpochs);
    }
    if (message.maxPendingInvites !== 0) {
      writer.uint32(152).uint32(message.maxPendingInvites);
    }
    if (message.displayNameMinLength !== 0) {
      writer.uint32(160).uint32(message.displayNameMinLength);
    }
    if (message.displayNameMaxLength !== 0) {
      writer.uint32(168).uint32(message.displayNameMaxLength);
    }
    if (message.displayNameChangeCooldownEpochs !== BigInt(0)) {
      writer.uint32(176).uint64(message.displayNameChangeCooldownEpochs);
    }
    if (message.transitionBatchSize !== 0) {
      writer.uint32(184).uint32(message.transitionBatchSize);
    }
    if (message.maxSeasonExtensions !== 0) {
      writer.uint32(192).uint32(message.maxSeasonExtensions);
    }
    if (message.maxExtensionEpochs !== BigInt(0)) {
      writer.uint32(200).uint64(message.maxExtensionEpochs);
    }
    if (message.guildDescriptionMaxLength !== 0) {
      writer.uint32(208).uint32(message.guildDescriptionMaxLength);
    }
    if (message.guildInviteTtlEpochs !== BigInt(0)) {
      writer.uint32(216).uint64(message.guildInviteTtlEpochs);
    }
    if (message.maxQuestObjectives !== 0) {
      writer.uint32(224).uint32(message.maxQuestObjectives);
    }
    if (message.forumXpMinAccountAgeEpochs !== BigInt(0)) {
      writer.uint32(232).uint64(message.forumXpMinAccountAgeEpochs);
    }
    if (message.forumXpReciprocalCooldownEpochs !== BigInt(0)) {
      writer.uint32(240).uint64(message.forumXpReciprocalCooldownEpochs);
    }
    if (message.forumXpSelfReplyCooldownEpochs !== BigInt(0)) {
      writer.uint32(248).uint64(message.forumXpSelfReplyCooldownEpochs);
    }
    if (message.transitionGracePeriod !== 0) {
      writer.uint32(256).uint32(message.transitionGracePeriod);
    }
    if (message.maxQuestXpReward !== BigInt(0)) {
      writer.uint32(264).uint64(message.maxQuestXpReward);
    }
    if (message.usernameMinLength !== 0) {
      writer.uint32(272).uint32(message.usernameMinLength);
    }
    if (message.usernameMaxLength !== 0) {
      writer.uint32(280).uint32(message.usernameMaxLength);
    }
    if (message.usernameChangeCooldownEpochs !== BigInt(0)) {
      writer.uint32(288).uint64(message.usernameChangeCooldownEpochs);
    }
    if (message.usernameCostDream !== "") {
      writer.uint32(298).string(message.usernameCostDream);
    }
    if (message.maxActiveQuestsPerMember !== 0) {
      writer.uint32(304).uint32(message.maxActiveQuestsPerMember);
    }
    if (message.displayNameReportStakeDream !== "") {
      writer.uint32(314).string(message.displayNameReportStakeDream);
    }
    if (message.maxDisplayableTitles !== 0) {
      writer.uint32(320).uint32(message.maxDisplayableTitles);
    }
    if (message.inviteCleanupIntervalBlocks !== 0) {
      writer.uint32(328).uint32(message.inviteCleanupIntervalBlocks);
    }
    if (message.inviteCleanupBatchSize !== 0) {
      writer.uint32(336).uint32(message.inviteCleanupBatchSize);
    }
    if (message.maxObjectiveDescriptionLength !== 0) {
      writer.uint32(344).uint32(message.maxObjectiveDescriptionLength);
    }
    if (message.displayNameAppealStakeDream !== "") {
      writer.uint32(354).string(message.displayNameAppealStakeDream);
    }
    if (message.displayNameAppealPeriodBlocks !== BigInt(0)) {
      writer.uint32(360).uint64(message.displayNameAppealPeriodBlocks);
    }
    if (message.maxArchivedTitles !== 0) {
      writer.uint32(368).uint32(message.maxArchivedTitles);
    }
    if (message.nominationWindowEpochs !== BigInt(0)) {
      writer.uint32(376).uint64(message.nominationWindowEpochs);
    }
    if (message.maxNominationsPerMember !== BigInt(0)) {
      writer.uint32(384).uint64(message.maxNominationsPerMember);
    }
    if (message.retroRewardMaxRecipients !== BigInt(0)) {
      writer.uint32(392).uint64(message.retroRewardMaxRecipients);
    }
    if (message.retroRewardBudgetPerSeason !== "") {
      writer.uint32(402).string(Decimal.fromUserInput(message.retroRewardBudgetPerSeason, 18).atomics);
    }
    if (message.retroRewardMinConviction !== "") {
      writer.uint32(410).string(Decimal.fromUserInput(message.retroRewardMinConviction, 18).atomics);
    }
    if (message.nominationConvictionHalfLifeEpochs !== BigInt(0)) {
      writer.uint32(416).uint64(message.nominationConvictionHalfLifeEpochs);
    }
    if (message.nominationRationaleMaxLength !== 0) {
      writer.uint32(424).uint32(message.nominationRationaleMaxLength);
    }
    if (message.nominationMinTrustLevel !== 0) {
      writer.uint32(432).uint32(message.nominationMinTrustLevel);
    }
    if (message.nominationStakeMinTrustLevel !== 0) {
      writer.uint32(440).uint32(message.nominationStakeMinTrustLevel);
    }
    if (message.nominationMinStake !== "") {
      writer.uint32(450).string(Decimal.fromUserInput(message.nominationMinStake, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SeasonOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochBlocks = reader.int64();
          break;
        case 2:
          message.seasonDurationEpochs = reader.int64();
          break;
        case 3:
          message.seasonTransitionEpochs = reader.int64();
          break;
        case 4:
          message.xpVoteCast = reader.uint64();
          break;
        case 5:
          message.xpProposalCreated = reader.uint64();
          break;
        case 6:
          message.xpForumReplyReceived = reader.uint64();
          break;
        case 7:
          message.xpForumMarkedHelpful = reader.uint64();
          break;
        case 8:
          message.xpInviteeFirstInitiative = reader.uint64();
          break;
        case 9:
          message.xpInviteeEstablished = reader.uint64();
          break;
        case 10:
          message.maxVoteXpPerEpoch = reader.uint32();
          break;
        case 11:
          message.maxForumXpPerEpoch = reader.uint64();
          break;
        case 12:
          message.maxXpPerEpoch = reader.uint64();
          break;
        case 13:
          message.minGuildMembers = reader.uint32();
          break;
        case 14:
          message.maxGuildOfficers = reader.uint32();
          break;
        case 15:
          message.guildCreationCost = reader.string();
          break;
        case 16:
          message.guildHopCooldownEpochs = reader.uint64();
          break;
        case 17:
          message.maxGuildsPerSeason = reader.uint32();
          break;
        case 18:
          message.minGuildAgeEpochs = reader.uint64();
          break;
        case 19:
          message.maxPendingInvites = reader.uint32();
          break;
        case 20:
          message.displayNameMinLength = reader.uint32();
          break;
        case 21:
          message.displayNameMaxLength = reader.uint32();
          break;
        case 22:
          message.displayNameChangeCooldownEpochs = reader.uint64();
          break;
        case 23:
          message.transitionBatchSize = reader.uint32();
          break;
        case 24:
          message.maxSeasonExtensions = reader.uint32();
          break;
        case 25:
          message.maxExtensionEpochs = reader.uint64();
          break;
        case 26:
          message.guildDescriptionMaxLength = reader.uint32();
          break;
        case 27:
          message.guildInviteTtlEpochs = reader.uint64();
          break;
        case 28:
          message.maxQuestObjectives = reader.uint32();
          break;
        case 29:
          message.forumXpMinAccountAgeEpochs = reader.uint64();
          break;
        case 30:
          message.forumXpReciprocalCooldownEpochs = reader.uint64();
          break;
        case 31:
          message.forumXpSelfReplyCooldownEpochs = reader.uint64();
          break;
        case 32:
          message.transitionGracePeriod = reader.uint32();
          break;
        case 33:
          message.maxQuestXpReward = reader.uint64();
          break;
        case 34:
          message.usernameMinLength = reader.uint32();
          break;
        case 35:
          message.usernameMaxLength = reader.uint32();
          break;
        case 36:
          message.usernameChangeCooldownEpochs = reader.uint64();
          break;
        case 37:
          message.usernameCostDream = reader.string();
          break;
        case 38:
          message.maxActiveQuestsPerMember = reader.uint32();
          break;
        case 39:
          message.displayNameReportStakeDream = reader.string();
          break;
        case 40:
          message.maxDisplayableTitles = reader.uint32();
          break;
        case 41:
          message.inviteCleanupIntervalBlocks = reader.uint32();
          break;
        case 42:
          message.inviteCleanupBatchSize = reader.uint32();
          break;
        case 43:
          message.maxObjectiveDescriptionLength = reader.uint32();
          break;
        case 44:
          message.displayNameAppealStakeDream = reader.string();
          break;
        case 45:
          message.displayNameAppealPeriodBlocks = reader.uint64();
          break;
        case 46:
          message.maxArchivedTitles = reader.uint32();
          break;
        case 47:
          message.nominationWindowEpochs = reader.uint64();
          break;
        case 48:
          message.maxNominationsPerMember = reader.uint64();
          break;
        case 49:
          message.retroRewardMaxRecipients = reader.uint64();
          break;
        case 50:
          message.retroRewardBudgetPerSeason = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 51:
          message.retroRewardMinConviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 52:
          message.nominationConvictionHalfLifeEpochs = reader.uint64();
          break;
        case 53:
          message.nominationRationaleMaxLength = reader.uint32();
          break;
        case 54:
          message.nominationMinTrustLevel = reader.uint32();
          break;
        case 55:
          message.nominationStakeMinTrustLevel = reader.uint32();
          break;
        case 56:
          message.nominationMinStake = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SeasonOperationalParams>): SeasonOperationalParams {
    const message = createBaseSeasonOperationalParams();
    message.epochBlocks = object.epochBlocks !== undefined && object.epochBlocks !== null ? BigInt(object.epochBlocks.toString()) : BigInt(0);
    message.seasonDurationEpochs = object.seasonDurationEpochs !== undefined && object.seasonDurationEpochs !== null ? BigInt(object.seasonDurationEpochs.toString()) : BigInt(0);
    message.seasonTransitionEpochs = object.seasonTransitionEpochs !== undefined && object.seasonTransitionEpochs !== null ? BigInt(object.seasonTransitionEpochs.toString()) : BigInt(0);
    message.xpVoteCast = object.xpVoteCast !== undefined && object.xpVoteCast !== null ? BigInt(object.xpVoteCast.toString()) : BigInt(0);
    message.xpProposalCreated = object.xpProposalCreated !== undefined && object.xpProposalCreated !== null ? BigInt(object.xpProposalCreated.toString()) : BigInt(0);
    message.xpForumReplyReceived = object.xpForumReplyReceived !== undefined && object.xpForumReplyReceived !== null ? BigInt(object.xpForumReplyReceived.toString()) : BigInt(0);
    message.xpForumMarkedHelpful = object.xpForumMarkedHelpful !== undefined && object.xpForumMarkedHelpful !== null ? BigInt(object.xpForumMarkedHelpful.toString()) : BigInt(0);
    message.xpInviteeFirstInitiative = object.xpInviteeFirstInitiative !== undefined && object.xpInviteeFirstInitiative !== null ? BigInt(object.xpInviteeFirstInitiative.toString()) : BigInt(0);
    message.xpInviteeEstablished = object.xpInviteeEstablished !== undefined && object.xpInviteeEstablished !== null ? BigInt(object.xpInviteeEstablished.toString()) : BigInt(0);
    message.maxVoteXpPerEpoch = object.maxVoteXpPerEpoch ?? 0;
    message.maxForumXpPerEpoch = object.maxForumXpPerEpoch !== undefined && object.maxForumXpPerEpoch !== null ? BigInt(object.maxForumXpPerEpoch.toString()) : BigInt(0);
    message.maxXpPerEpoch = object.maxXpPerEpoch !== undefined && object.maxXpPerEpoch !== null ? BigInt(object.maxXpPerEpoch.toString()) : BigInt(0);
    message.minGuildMembers = object.minGuildMembers ?? 0;
    message.maxGuildOfficers = object.maxGuildOfficers ?? 0;
    message.guildCreationCost = object.guildCreationCost ?? "";
    message.guildHopCooldownEpochs = object.guildHopCooldownEpochs !== undefined && object.guildHopCooldownEpochs !== null ? BigInt(object.guildHopCooldownEpochs.toString()) : BigInt(0);
    message.maxGuildsPerSeason = object.maxGuildsPerSeason ?? 0;
    message.minGuildAgeEpochs = object.minGuildAgeEpochs !== undefined && object.minGuildAgeEpochs !== null ? BigInt(object.minGuildAgeEpochs.toString()) : BigInt(0);
    message.maxPendingInvites = object.maxPendingInvites ?? 0;
    message.displayNameMinLength = object.displayNameMinLength ?? 0;
    message.displayNameMaxLength = object.displayNameMaxLength ?? 0;
    message.displayNameChangeCooldownEpochs = object.displayNameChangeCooldownEpochs !== undefined && object.displayNameChangeCooldownEpochs !== null ? BigInt(object.displayNameChangeCooldownEpochs.toString()) : BigInt(0);
    message.transitionBatchSize = object.transitionBatchSize ?? 0;
    message.maxSeasonExtensions = object.maxSeasonExtensions ?? 0;
    message.maxExtensionEpochs = object.maxExtensionEpochs !== undefined && object.maxExtensionEpochs !== null ? BigInt(object.maxExtensionEpochs.toString()) : BigInt(0);
    message.guildDescriptionMaxLength = object.guildDescriptionMaxLength ?? 0;
    message.guildInviteTtlEpochs = object.guildInviteTtlEpochs !== undefined && object.guildInviteTtlEpochs !== null ? BigInt(object.guildInviteTtlEpochs.toString()) : BigInt(0);
    message.maxQuestObjectives = object.maxQuestObjectives ?? 0;
    message.forumXpMinAccountAgeEpochs = object.forumXpMinAccountAgeEpochs !== undefined && object.forumXpMinAccountAgeEpochs !== null ? BigInt(object.forumXpMinAccountAgeEpochs.toString()) : BigInt(0);
    message.forumXpReciprocalCooldownEpochs = object.forumXpReciprocalCooldownEpochs !== undefined && object.forumXpReciprocalCooldownEpochs !== null ? BigInt(object.forumXpReciprocalCooldownEpochs.toString()) : BigInt(0);
    message.forumXpSelfReplyCooldownEpochs = object.forumXpSelfReplyCooldownEpochs !== undefined && object.forumXpSelfReplyCooldownEpochs !== null ? BigInt(object.forumXpSelfReplyCooldownEpochs.toString()) : BigInt(0);
    message.transitionGracePeriod = object.transitionGracePeriod ?? 0;
    message.maxQuestXpReward = object.maxQuestXpReward !== undefined && object.maxQuestXpReward !== null ? BigInt(object.maxQuestXpReward.toString()) : BigInt(0);
    message.usernameMinLength = object.usernameMinLength ?? 0;
    message.usernameMaxLength = object.usernameMaxLength ?? 0;
    message.usernameChangeCooldownEpochs = object.usernameChangeCooldownEpochs !== undefined && object.usernameChangeCooldownEpochs !== null ? BigInt(object.usernameChangeCooldownEpochs.toString()) : BigInt(0);
    message.usernameCostDream = object.usernameCostDream ?? "";
    message.maxActiveQuestsPerMember = object.maxActiveQuestsPerMember ?? 0;
    message.displayNameReportStakeDream = object.displayNameReportStakeDream ?? "";
    message.maxDisplayableTitles = object.maxDisplayableTitles ?? 0;
    message.inviteCleanupIntervalBlocks = object.inviteCleanupIntervalBlocks ?? 0;
    message.inviteCleanupBatchSize = object.inviteCleanupBatchSize ?? 0;
    message.maxObjectiveDescriptionLength = object.maxObjectiveDescriptionLength ?? 0;
    message.displayNameAppealStakeDream = object.displayNameAppealStakeDream ?? "";
    message.displayNameAppealPeriodBlocks = object.displayNameAppealPeriodBlocks !== undefined && object.displayNameAppealPeriodBlocks !== null ? BigInt(object.displayNameAppealPeriodBlocks.toString()) : BigInt(0);
    message.maxArchivedTitles = object.maxArchivedTitles ?? 0;
    message.nominationWindowEpochs = object.nominationWindowEpochs !== undefined && object.nominationWindowEpochs !== null ? BigInt(object.nominationWindowEpochs.toString()) : BigInt(0);
    message.maxNominationsPerMember = object.maxNominationsPerMember !== undefined && object.maxNominationsPerMember !== null ? BigInt(object.maxNominationsPerMember.toString()) : BigInt(0);
    message.retroRewardMaxRecipients = object.retroRewardMaxRecipients !== undefined && object.retroRewardMaxRecipients !== null ? BigInt(object.retroRewardMaxRecipients.toString()) : BigInt(0);
    message.retroRewardBudgetPerSeason = object.retroRewardBudgetPerSeason ?? "";
    message.retroRewardMinConviction = object.retroRewardMinConviction ?? "";
    message.nominationConvictionHalfLifeEpochs = object.nominationConvictionHalfLifeEpochs !== undefined && object.nominationConvictionHalfLifeEpochs !== null ? BigInt(object.nominationConvictionHalfLifeEpochs.toString()) : BigInt(0);
    message.nominationRationaleMaxLength = object.nominationRationaleMaxLength ?? 0;
    message.nominationMinTrustLevel = object.nominationMinTrustLevel ?? 0;
    message.nominationStakeMinTrustLevel = object.nominationStakeMinTrustLevel ?? 0;
    message.nominationMinStake = object.nominationMinStake ?? "";
    return message;
  },
  fromAmino(object: SeasonOperationalParamsAmino): SeasonOperationalParams {
    const message = createBaseSeasonOperationalParams();
    if (object.epoch_blocks !== undefined && object.epoch_blocks !== null) {
      message.epochBlocks = BigInt(object.epoch_blocks);
    }
    if (object.season_duration_epochs !== undefined && object.season_duration_epochs !== null) {
      message.seasonDurationEpochs = BigInt(object.season_duration_epochs);
    }
    if (object.season_transition_epochs !== undefined && object.season_transition_epochs !== null) {
      message.seasonTransitionEpochs = BigInt(object.season_transition_epochs);
    }
    if (object.xp_vote_cast !== undefined && object.xp_vote_cast !== null) {
      message.xpVoteCast = BigInt(object.xp_vote_cast);
    }
    if (object.xp_proposal_created !== undefined && object.xp_proposal_created !== null) {
      message.xpProposalCreated = BigInt(object.xp_proposal_created);
    }
    if (object.xp_forum_reply_received !== undefined && object.xp_forum_reply_received !== null) {
      message.xpForumReplyReceived = BigInt(object.xp_forum_reply_received);
    }
    if (object.xp_forum_marked_helpful !== undefined && object.xp_forum_marked_helpful !== null) {
      message.xpForumMarkedHelpful = BigInt(object.xp_forum_marked_helpful);
    }
    if (object.xp_invitee_first_initiative !== undefined && object.xp_invitee_first_initiative !== null) {
      message.xpInviteeFirstInitiative = BigInt(object.xp_invitee_first_initiative);
    }
    if (object.xp_invitee_established !== undefined && object.xp_invitee_established !== null) {
      message.xpInviteeEstablished = BigInt(object.xp_invitee_established);
    }
    if (object.max_vote_xp_per_epoch !== undefined && object.max_vote_xp_per_epoch !== null) {
      message.maxVoteXpPerEpoch = object.max_vote_xp_per_epoch;
    }
    if (object.max_forum_xp_per_epoch !== undefined && object.max_forum_xp_per_epoch !== null) {
      message.maxForumXpPerEpoch = BigInt(object.max_forum_xp_per_epoch);
    }
    if (object.max_xp_per_epoch !== undefined && object.max_xp_per_epoch !== null) {
      message.maxXpPerEpoch = BigInt(object.max_xp_per_epoch);
    }
    if (object.min_guild_members !== undefined && object.min_guild_members !== null) {
      message.minGuildMembers = object.min_guild_members;
    }
    if (object.max_guild_officers !== undefined && object.max_guild_officers !== null) {
      message.maxGuildOfficers = object.max_guild_officers;
    }
    if (object.guild_creation_cost !== undefined && object.guild_creation_cost !== null) {
      message.guildCreationCost = object.guild_creation_cost;
    }
    if (object.guild_hop_cooldown_epochs !== undefined && object.guild_hop_cooldown_epochs !== null) {
      message.guildHopCooldownEpochs = BigInt(object.guild_hop_cooldown_epochs);
    }
    if (object.max_guilds_per_season !== undefined && object.max_guilds_per_season !== null) {
      message.maxGuildsPerSeason = object.max_guilds_per_season;
    }
    if (object.min_guild_age_epochs !== undefined && object.min_guild_age_epochs !== null) {
      message.minGuildAgeEpochs = BigInt(object.min_guild_age_epochs);
    }
    if (object.max_pending_invites !== undefined && object.max_pending_invites !== null) {
      message.maxPendingInvites = object.max_pending_invites;
    }
    if (object.display_name_min_length !== undefined && object.display_name_min_length !== null) {
      message.displayNameMinLength = object.display_name_min_length;
    }
    if (object.display_name_max_length !== undefined && object.display_name_max_length !== null) {
      message.displayNameMaxLength = object.display_name_max_length;
    }
    if (object.display_name_change_cooldown_epochs !== undefined && object.display_name_change_cooldown_epochs !== null) {
      message.displayNameChangeCooldownEpochs = BigInt(object.display_name_change_cooldown_epochs);
    }
    if (object.transition_batch_size !== undefined && object.transition_batch_size !== null) {
      message.transitionBatchSize = object.transition_batch_size;
    }
    if (object.max_season_extensions !== undefined && object.max_season_extensions !== null) {
      message.maxSeasonExtensions = object.max_season_extensions;
    }
    if (object.max_extension_epochs !== undefined && object.max_extension_epochs !== null) {
      message.maxExtensionEpochs = BigInt(object.max_extension_epochs);
    }
    if (object.guild_description_max_length !== undefined && object.guild_description_max_length !== null) {
      message.guildDescriptionMaxLength = object.guild_description_max_length;
    }
    if (object.guild_invite_ttl_epochs !== undefined && object.guild_invite_ttl_epochs !== null) {
      message.guildInviteTtlEpochs = BigInt(object.guild_invite_ttl_epochs);
    }
    if (object.max_quest_objectives !== undefined && object.max_quest_objectives !== null) {
      message.maxQuestObjectives = object.max_quest_objectives;
    }
    if (object.forum_xp_min_account_age_epochs !== undefined && object.forum_xp_min_account_age_epochs !== null) {
      message.forumXpMinAccountAgeEpochs = BigInt(object.forum_xp_min_account_age_epochs);
    }
    if (object.forum_xp_reciprocal_cooldown_epochs !== undefined && object.forum_xp_reciprocal_cooldown_epochs !== null) {
      message.forumXpReciprocalCooldownEpochs = BigInt(object.forum_xp_reciprocal_cooldown_epochs);
    }
    if (object.forum_xp_self_reply_cooldown_epochs !== undefined && object.forum_xp_self_reply_cooldown_epochs !== null) {
      message.forumXpSelfReplyCooldownEpochs = BigInt(object.forum_xp_self_reply_cooldown_epochs);
    }
    if (object.transition_grace_period !== undefined && object.transition_grace_period !== null) {
      message.transitionGracePeriod = object.transition_grace_period;
    }
    if (object.max_quest_xp_reward !== undefined && object.max_quest_xp_reward !== null) {
      message.maxQuestXpReward = BigInt(object.max_quest_xp_reward);
    }
    if (object.username_min_length !== undefined && object.username_min_length !== null) {
      message.usernameMinLength = object.username_min_length;
    }
    if (object.username_max_length !== undefined && object.username_max_length !== null) {
      message.usernameMaxLength = object.username_max_length;
    }
    if (object.username_change_cooldown_epochs !== undefined && object.username_change_cooldown_epochs !== null) {
      message.usernameChangeCooldownEpochs = BigInt(object.username_change_cooldown_epochs);
    }
    if (object.username_cost_dream !== undefined && object.username_cost_dream !== null) {
      message.usernameCostDream = object.username_cost_dream;
    }
    if (object.max_active_quests_per_member !== undefined && object.max_active_quests_per_member !== null) {
      message.maxActiveQuestsPerMember = object.max_active_quests_per_member;
    }
    if (object.display_name_report_stake_dream !== undefined && object.display_name_report_stake_dream !== null) {
      message.displayNameReportStakeDream = object.display_name_report_stake_dream;
    }
    if (object.max_displayable_titles !== undefined && object.max_displayable_titles !== null) {
      message.maxDisplayableTitles = object.max_displayable_titles;
    }
    if (object.invite_cleanup_interval_blocks !== undefined && object.invite_cleanup_interval_blocks !== null) {
      message.inviteCleanupIntervalBlocks = object.invite_cleanup_interval_blocks;
    }
    if (object.invite_cleanup_batch_size !== undefined && object.invite_cleanup_batch_size !== null) {
      message.inviteCleanupBatchSize = object.invite_cleanup_batch_size;
    }
    if (object.max_objective_description_length !== undefined && object.max_objective_description_length !== null) {
      message.maxObjectiveDescriptionLength = object.max_objective_description_length;
    }
    if (object.display_name_appeal_stake_dream !== undefined && object.display_name_appeal_stake_dream !== null) {
      message.displayNameAppealStakeDream = object.display_name_appeal_stake_dream;
    }
    if (object.display_name_appeal_period_blocks !== undefined && object.display_name_appeal_period_blocks !== null) {
      message.displayNameAppealPeriodBlocks = BigInt(object.display_name_appeal_period_blocks);
    }
    if (object.max_archived_titles !== undefined && object.max_archived_titles !== null) {
      message.maxArchivedTitles = object.max_archived_titles;
    }
    if (object.nomination_window_epochs !== undefined && object.nomination_window_epochs !== null) {
      message.nominationWindowEpochs = BigInt(object.nomination_window_epochs);
    }
    if (object.max_nominations_per_member !== undefined && object.max_nominations_per_member !== null) {
      message.maxNominationsPerMember = BigInt(object.max_nominations_per_member);
    }
    if (object.retro_reward_max_recipients !== undefined && object.retro_reward_max_recipients !== null) {
      message.retroRewardMaxRecipients = BigInt(object.retro_reward_max_recipients);
    }
    if (object.retro_reward_budget_per_season !== undefined && object.retro_reward_budget_per_season !== null) {
      message.retroRewardBudgetPerSeason = object.retro_reward_budget_per_season;
    }
    if (object.retro_reward_min_conviction !== undefined && object.retro_reward_min_conviction !== null) {
      message.retroRewardMinConviction = object.retro_reward_min_conviction;
    }
    if (object.nomination_conviction_half_life_epochs !== undefined && object.nomination_conviction_half_life_epochs !== null) {
      message.nominationConvictionHalfLifeEpochs = BigInt(object.nomination_conviction_half_life_epochs);
    }
    if (object.nomination_rationale_max_length !== undefined && object.nomination_rationale_max_length !== null) {
      message.nominationRationaleMaxLength = object.nomination_rationale_max_length;
    }
    if (object.nomination_min_trust_level !== undefined && object.nomination_min_trust_level !== null) {
      message.nominationMinTrustLevel = object.nomination_min_trust_level;
    }
    if (object.nomination_stake_min_trust_level !== undefined && object.nomination_stake_min_trust_level !== null) {
      message.nominationStakeMinTrustLevel = object.nomination_stake_min_trust_level;
    }
    if (object.nomination_min_stake !== undefined && object.nomination_min_stake !== null) {
      message.nominationMinStake = object.nomination_min_stake;
    }
    return message;
  },
  toAmino(message: SeasonOperationalParams): SeasonOperationalParamsAmino {
    const obj: any = {};
    obj.epoch_blocks = message.epochBlocks !== BigInt(0) ? message.epochBlocks?.toString() : undefined;
    obj.season_duration_epochs = message.seasonDurationEpochs !== BigInt(0) ? message.seasonDurationEpochs?.toString() : undefined;
    obj.season_transition_epochs = message.seasonTransitionEpochs !== BigInt(0) ? message.seasonTransitionEpochs?.toString() : undefined;
    obj.xp_vote_cast = message.xpVoteCast !== BigInt(0) ? message.xpVoteCast?.toString() : undefined;
    obj.xp_proposal_created = message.xpProposalCreated !== BigInt(0) ? message.xpProposalCreated?.toString() : undefined;
    obj.xp_forum_reply_received = message.xpForumReplyReceived !== BigInt(0) ? message.xpForumReplyReceived?.toString() : undefined;
    obj.xp_forum_marked_helpful = message.xpForumMarkedHelpful !== BigInt(0) ? message.xpForumMarkedHelpful?.toString() : undefined;
    obj.xp_invitee_first_initiative = message.xpInviteeFirstInitiative !== BigInt(0) ? message.xpInviteeFirstInitiative?.toString() : undefined;
    obj.xp_invitee_established = message.xpInviteeEstablished !== BigInt(0) ? message.xpInviteeEstablished?.toString() : undefined;
    obj.max_vote_xp_per_epoch = message.maxVoteXpPerEpoch === 0 ? undefined : message.maxVoteXpPerEpoch;
    obj.max_forum_xp_per_epoch = message.maxForumXpPerEpoch !== BigInt(0) ? message.maxForumXpPerEpoch?.toString() : undefined;
    obj.max_xp_per_epoch = message.maxXpPerEpoch !== BigInt(0) ? message.maxXpPerEpoch?.toString() : undefined;
    obj.min_guild_members = message.minGuildMembers === 0 ? undefined : message.minGuildMembers;
    obj.max_guild_officers = message.maxGuildOfficers === 0 ? undefined : message.maxGuildOfficers;
    obj.guild_creation_cost = message.guildCreationCost === "" ? undefined : message.guildCreationCost;
    obj.guild_hop_cooldown_epochs = message.guildHopCooldownEpochs !== BigInt(0) ? message.guildHopCooldownEpochs?.toString() : undefined;
    obj.max_guilds_per_season = message.maxGuildsPerSeason === 0 ? undefined : message.maxGuildsPerSeason;
    obj.min_guild_age_epochs = message.minGuildAgeEpochs !== BigInt(0) ? message.minGuildAgeEpochs?.toString() : undefined;
    obj.max_pending_invites = message.maxPendingInvites === 0 ? undefined : message.maxPendingInvites;
    obj.display_name_min_length = message.displayNameMinLength === 0 ? undefined : message.displayNameMinLength;
    obj.display_name_max_length = message.displayNameMaxLength === 0 ? undefined : message.displayNameMaxLength;
    obj.display_name_change_cooldown_epochs = message.displayNameChangeCooldownEpochs !== BigInt(0) ? message.displayNameChangeCooldownEpochs?.toString() : undefined;
    obj.transition_batch_size = message.transitionBatchSize === 0 ? undefined : message.transitionBatchSize;
    obj.max_season_extensions = message.maxSeasonExtensions === 0 ? undefined : message.maxSeasonExtensions;
    obj.max_extension_epochs = message.maxExtensionEpochs !== BigInt(0) ? message.maxExtensionEpochs?.toString() : undefined;
    obj.guild_description_max_length = message.guildDescriptionMaxLength === 0 ? undefined : message.guildDescriptionMaxLength;
    obj.guild_invite_ttl_epochs = message.guildInviteTtlEpochs !== BigInt(0) ? message.guildInviteTtlEpochs?.toString() : undefined;
    obj.max_quest_objectives = message.maxQuestObjectives === 0 ? undefined : message.maxQuestObjectives;
    obj.forum_xp_min_account_age_epochs = message.forumXpMinAccountAgeEpochs !== BigInt(0) ? message.forumXpMinAccountAgeEpochs?.toString() : undefined;
    obj.forum_xp_reciprocal_cooldown_epochs = message.forumXpReciprocalCooldownEpochs !== BigInt(0) ? message.forumXpReciprocalCooldownEpochs?.toString() : undefined;
    obj.forum_xp_self_reply_cooldown_epochs = message.forumXpSelfReplyCooldownEpochs !== BigInt(0) ? message.forumXpSelfReplyCooldownEpochs?.toString() : undefined;
    obj.transition_grace_period = message.transitionGracePeriod === 0 ? undefined : message.transitionGracePeriod;
    obj.max_quest_xp_reward = message.maxQuestXpReward !== BigInt(0) ? message.maxQuestXpReward?.toString() : undefined;
    obj.username_min_length = message.usernameMinLength === 0 ? undefined : message.usernameMinLength;
    obj.username_max_length = message.usernameMaxLength === 0 ? undefined : message.usernameMaxLength;
    obj.username_change_cooldown_epochs = message.usernameChangeCooldownEpochs !== BigInt(0) ? message.usernameChangeCooldownEpochs?.toString() : undefined;
    obj.username_cost_dream = message.usernameCostDream === "" ? undefined : message.usernameCostDream;
    obj.max_active_quests_per_member = message.maxActiveQuestsPerMember === 0 ? undefined : message.maxActiveQuestsPerMember;
    obj.display_name_report_stake_dream = message.displayNameReportStakeDream === "" ? undefined : message.displayNameReportStakeDream;
    obj.max_displayable_titles = message.maxDisplayableTitles === 0 ? undefined : message.maxDisplayableTitles;
    obj.invite_cleanup_interval_blocks = message.inviteCleanupIntervalBlocks === 0 ? undefined : message.inviteCleanupIntervalBlocks;
    obj.invite_cleanup_batch_size = message.inviteCleanupBatchSize === 0 ? undefined : message.inviteCleanupBatchSize;
    obj.max_objective_description_length = message.maxObjectiveDescriptionLength === 0 ? undefined : message.maxObjectiveDescriptionLength;
    obj.display_name_appeal_stake_dream = message.displayNameAppealStakeDream === "" ? undefined : message.displayNameAppealStakeDream;
    obj.display_name_appeal_period_blocks = message.displayNameAppealPeriodBlocks !== BigInt(0) ? message.displayNameAppealPeriodBlocks?.toString() : undefined;
    obj.max_archived_titles = message.maxArchivedTitles === 0 ? undefined : message.maxArchivedTitles;
    obj.nomination_window_epochs = message.nominationWindowEpochs !== BigInt(0) ? message.nominationWindowEpochs?.toString() : undefined;
    obj.max_nominations_per_member = message.maxNominationsPerMember !== BigInt(0) ? message.maxNominationsPerMember?.toString() : undefined;
    obj.retro_reward_max_recipients = message.retroRewardMaxRecipients !== BigInt(0) ? message.retroRewardMaxRecipients?.toString() : undefined;
    obj.retro_reward_budget_per_season = message.retroRewardBudgetPerSeason === "" ? undefined : message.retroRewardBudgetPerSeason;
    obj.retro_reward_min_conviction = message.retroRewardMinConviction === "" ? undefined : message.retroRewardMinConviction;
    obj.nomination_conviction_half_life_epochs = message.nominationConvictionHalfLifeEpochs !== BigInt(0) ? message.nominationConvictionHalfLifeEpochs?.toString() : undefined;
    obj.nomination_rationale_max_length = message.nominationRationaleMaxLength === 0 ? undefined : message.nominationRationaleMaxLength;
    obj.nomination_min_trust_level = message.nominationMinTrustLevel === 0 ? undefined : message.nominationMinTrustLevel;
    obj.nomination_stake_min_trust_level = message.nominationStakeMinTrustLevel === 0 ? undefined : message.nominationStakeMinTrustLevel;
    obj.nomination_min_stake = message.nominationMinStake === "" ? undefined : message.nominationMinStake;
    return obj;
  },
  fromAminoMsg(object: SeasonOperationalParamsAminoMsg): SeasonOperationalParams {
    return SeasonOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: SeasonOperationalParams): SeasonOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/season/SeasonOperationalParams",
      value: SeasonOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: SeasonOperationalParamsProtoMsg): SeasonOperationalParams {
    return SeasonOperationalParams.decode(message.value);
  },
  toProto(message: SeasonOperationalParams): Uint8Array {
    return SeasonOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: SeasonOperationalParams): SeasonOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.SeasonOperationalParams",
      value: SeasonOperationalParams.encode(message).finish()
    };
  }
};