//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * TierConfig defines configuration for an initiative tier
 * @name TierConfig
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TierConfig
 */
export interface TierConfig {
  maxBudget: string;
  minReputation: string;
  reputationCap: string;
  rewardMultiplier: string;
}
export interface TierConfigProtoMsg {
  typeUrl: "/sparkdream.rep.v1.TierConfig";
  value: Uint8Array;
}
/**
 * TierConfig defines configuration for an initiative tier
 * @name TierConfigAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TierConfig
 */
export interface TierConfigAmino {
  max_budget?: string;
  min_reputation?: string;
  reputation_cap?: string;
  reward_multiplier?: string;
}
export interface TierConfigAminoMsg {
  type: "/sparkdream.rep.v1.TierConfig";
  value: TierConfigAmino;
}
/**
 * TrustLevelConfig defines thresholds for trust level progression
 * @name TrustLevelConfig
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TrustLevelConfig
 */
export interface TrustLevelConfig {
  provisionalMinRep: string;
  provisionalMinInterims: number;
  establishedMinRep: string;
  establishedMinInterims: number;
  trustedMinRep: string;
  trustedMinSeasons: number;
  coreMinRep: string;
  coreMinSeasons: number;
  /**
   * Invitation credits per trust level (max credits per season)
   * NEW level gets 0 (cannot invite)
   */
  newInvitationCredits: number;
  provisionalInvitationCredits: number;
  establishedInvitationCredits: number;
  trustedInvitationCredits: number;
  coreInvitationCredits: number;
}
export interface TrustLevelConfigProtoMsg {
  typeUrl: "/sparkdream.rep.v1.TrustLevelConfig";
  value: Uint8Array;
}
/**
 * TrustLevelConfig defines thresholds for trust level progression
 * @name TrustLevelConfigAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TrustLevelConfig
 */
export interface TrustLevelConfigAmino {
  provisional_min_rep?: string;
  provisional_min_interims?: number;
  established_min_rep?: string;
  established_min_interims?: number;
  trusted_min_rep?: string;
  trusted_min_seasons?: number;
  core_min_rep?: string;
  core_min_seasons?: number;
  /**
   * Invitation credits per trust level (max credits per season)
   * NEW level gets 0 (cannot invite)
   */
  new_invitation_credits?: number;
  provisional_invitation_credits?: number;
  established_invitation_credits?: number;
  trusted_invitation_credits?: number;
  core_invitation_credits?: number;
}
export interface TrustLevelConfigAminoMsg {
  type: "/sparkdream.rep.v1.TrustLevelConfig";
  value: TrustLevelConfigAmino;
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Params
 */
export interface Params {
  /**
   * Time
   */
  epochBlocks: bigint;
  seasonDurationEpochs: bigint;
  /**
   * DREAM economics
   */
  stakingApy: string;
  unstakedDecayRate: string;
  transferTaxRate: string;
  maxTipAmount: string;
  maxTipsPerEpoch: number;
  maxGiftAmount: string;
  giftOnlyToInvitees: boolean;
  /**
   * Initiative rewards
   */
  completerShare: string;
  treasuryShare: string;
  minReputationMultiplier: string;
  /**
   * Initiative tiers
   */
  apprenticeTier: TierConfig;
  standardTier: TierConfig;
  expertTier: TierConfig;
  epicTier: TierConfig;
  /**
   * Conviction
   */
  convictionHalfLifeEpochs: bigint;
  externalConvictionRatio: string;
  convictionPerDream: string;
  /**
   * Review periods
   */
  defaultReviewPeriodEpochs: bigint;
  defaultChallengePeriodEpochs: bigint;
  /**
   * Invitations
   */
  minInvitationStake: string;
  invitationAccountabilityEpochs: bigint;
  referralRewardRate: string;
  invitationCostMultiplier: string;
  /**
   * Trust levels
   */
  trustLevelConfig: TrustLevelConfig;
  /**
   * Challenges
   */
  minChallengeStake: string;
  challengerRewardRate: string;
  jurySize: number;
  jurySuperMajority: string;
  minJurorReputation: string;
  /**
   * Interim compensation
   */
  simpleComplexityBudget: string;
  standardComplexityBudget: string;
  complexComplexityBudget: string;
  expertComplexityBudget: string;
  soloExpertBonusRate: string;
  interimDeadlineEpochs: bigint;
  /**
   * Rate limits
   */
  maxActiveChallengesPerCommittee: number;
  maxNewChallengesPerEpoch: number;
  challengeQueueMaxSize: number;
  /**
   * Slashing
   */
  minorSlashPenalty: string;
  moderateSlashPenalty: string;
  severeSlashPenalty: string;
  zeroingSlashPenalty: string;
  /**
   * Extended staking
   */
  projectStakingApy: string;
  projectCompletionBonusRate: string;
  memberStakeRevenueShare: string;
  tagStakeRevenueShare: string;
  minStakeDurationSeconds: bigint;
  allowSelfMemberStake: boolean;
  /**
   * Challenge response deadline (epochs)
   * If assignee doesn't respond within this time, challenge is auto-upheld
   */
  challengeResponseDeadlineEpochs: bigint;
  /**
   * Gift rate limiting
   * Cooldown period in blocks before same sender can gift same recipient again
   */
  giftCooldownBlocks: bigint;
  /**
   * Maximum total DREAM a sender can gift per epoch (across all recipients)
   */
  maxGiftsPerSenderEpoch: string;
  /**
   * Content conviction staking
   */
  contentConvictionHalfLifeEpochs: bigint;
  /**
   * Max DREAM one member can stake on a single content item
   */
  maxContentStakePerMember: string;
  /**
   * Max DREAM an author can bond on their own content
   */
  maxAuthorBondPerContent: string;
  /**
   * Whether to slash author bonds when content is moderated
   */
  authorBondSlashOnModeration: boolean;
  /**
   * Fraction of slashed author bond given to challenger (rest burned), default 0.5
   */
  contentChallengeRewardShare: string;
  /**
   * Fraction of linked content conviction propagated to initiative (default 0.10)
   */
  convictionPropagationRatio: string;
  /**
   * Tag anti-gaming
   */
  maxTagsPerInitiative: number;
  /**
   * Anti-gaming parameters
   */
  reputationDecayRate: string;
  /**
   * Max fraction of required conviction any single member can contribute (default 0.33)
   */
  maxConvictionSharePerMember: string;
  /**
   * Fraction of invitation stake burned on acceptance (default 0.10 = 10%)
   */
  invitationStakeBurnRate: string;
  /**
   * Max reputation any member can earn per tag per epoch (default 50)
   */
  maxReputationGainPerEpoch: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.rep.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Params
 */
export interface ParamsAmino {
  /**
   * Time
   */
  epoch_blocks?: string;
  season_duration_epochs?: string;
  /**
   * DREAM economics
   */
  staking_apy?: string;
  unstaked_decay_rate?: string;
  transfer_tax_rate?: string;
  max_tip_amount?: string;
  max_tips_per_epoch?: number;
  max_gift_amount?: string;
  gift_only_to_invitees?: boolean;
  /**
   * Initiative rewards
   */
  completer_share?: string;
  treasury_share?: string;
  min_reputation_multiplier?: string;
  /**
   * Initiative tiers
   */
  apprentice_tier?: TierConfigAmino;
  standard_tier?: TierConfigAmino;
  expert_tier?: TierConfigAmino;
  epic_tier?: TierConfigAmino;
  /**
   * Conviction
   */
  conviction_half_life_epochs?: string;
  external_conviction_ratio?: string;
  conviction_per_dream?: string;
  /**
   * Review periods
   */
  default_review_period_epochs?: string;
  default_challenge_period_epochs?: string;
  /**
   * Invitations
   */
  min_invitation_stake?: string;
  invitation_accountability_epochs?: string;
  referral_reward_rate?: string;
  invitation_cost_multiplier?: string;
  /**
   * Trust levels
   */
  trust_level_config?: TrustLevelConfigAmino;
  /**
   * Challenges
   */
  min_challenge_stake?: string;
  challenger_reward_rate?: string;
  jury_size?: number;
  jury_super_majority?: string;
  min_juror_reputation?: string;
  /**
   * Interim compensation
   */
  simple_complexity_budget?: string;
  standard_complexity_budget?: string;
  complex_complexity_budget?: string;
  expert_complexity_budget?: string;
  solo_expert_bonus_rate?: string;
  interim_deadline_epochs?: string;
  /**
   * Rate limits
   */
  max_active_challenges_per_committee?: number;
  max_new_challenges_per_epoch?: number;
  challenge_queue_max_size?: number;
  /**
   * Slashing
   */
  minor_slash_penalty?: string;
  moderate_slash_penalty?: string;
  severe_slash_penalty?: string;
  zeroing_slash_penalty?: string;
  /**
   * Extended staking
   */
  project_staking_apy?: string;
  project_completion_bonus_rate?: string;
  member_stake_revenue_share?: string;
  tag_stake_revenue_share?: string;
  min_stake_duration_seconds?: string;
  allow_self_member_stake?: boolean;
  /**
   * Challenge response deadline (epochs)
   * If assignee doesn't respond within this time, challenge is auto-upheld
   */
  challenge_response_deadline_epochs?: string;
  /**
   * Gift rate limiting
   * Cooldown period in blocks before same sender can gift same recipient again
   */
  gift_cooldown_blocks?: string;
  /**
   * Maximum total DREAM a sender can gift per epoch (across all recipients)
   */
  max_gifts_per_sender_epoch?: string;
  /**
   * Content conviction staking
   */
  content_conviction_half_life_epochs?: string;
  /**
   * Max DREAM one member can stake on a single content item
   */
  max_content_stake_per_member?: string;
  /**
   * Max DREAM an author can bond on their own content
   */
  max_author_bond_per_content?: string;
  /**
   * Whether to slash author bonds when content is moderated
   */
  author_bond_slash_on_moderation?: boolean;
  /**
   * Fraction of slashed author bond given to challenger (rest burned), default 0.5
   */
  content_challenge_reward_share?: string;
  /**
   * Fraction of linked content conviction propagated to initiative (default 0.10)
   */
  conviction_propagation_ratio?: string;
  /**
   * Tag anti-gaming
   */
  max_tags_per_initiative?: number;
  /**
   * Anti-gaming parameters
   */
  reputation_decay_rate?: string;
  /**
   * Max fraction of required conviction any single member can contribute (default 0.33)
   */
  max_conviction_share_per_member?: string;
  /**
   * Fraction of invitation stake burned on acceptance (default 0.10 = 10%)
   */
  invitation_stake_burn_rate?: string;
  /**
   * Max reputation any member can earn per tag per epoch (default 50)
   */
  max_reputation_gain_per_epoch?: string;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/rep/Params";
  value: ParamsAmino;
}
/**
 * RepOperationalParams defines the operational parameters that can be updated
 * by committee/council authority without full governance. These are day-to-day
 * tuning knobs that do not affect core economic incentives or tier structures.
 * @name RepOperationalParams
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RepOperationalParams
 */
export interface RepOperationalParams {
  /**
   * Time config
   */
  epochBlocks: bigint;
  seasonDurationEpochs: bigint;
  /**
   * DREAM economics
   */
  stakingApy: string;
  unstakedDecayRate: string;
  transferTaxRate: string;
  maxTipAmount: string;
  maxTipsPerEpoch: number;
  maxGiftAmount: string;
  giftOnlyToInvitees: boolean;
  /**
   * Reputation
   */
  minReputationMultiplier: string;
  /**
   * Review periods
   */
  defaultReviewPeriodEpochs: bigint;
  defaultChallengePeriodEpochs: bigint;
  /**
   * Invitations
   */
  minInvitationStake: string;
  invitationAccountabilityEpochs: bigint;
  referralRewardRate: string;
  invitationCostMultiplier: string;
  /**
   * Challenges
   */
  minChallengeStake: string;
  challengerRewardRate: string;
  jurySize: number;
  jurySuperMajority: string;
  minJurorReputation: string;
  /**
   * Interim compensation
   */
  simpleComplexityBudget: string;
  standardComplexityBudget: string;
  complexComplexityBudget: string;
  expertComplexityBudget: string;
  soloExpertBonusRate: string;
  interimDeadlineEpochs: bigint;
  /**
   * Rate limits
   */
  maxActiveChallengesPerCommittee: number;
  maxNewChallengesPerEpoch: number;
  challengeQueueMaxSize: number;
  /**
   * Extended staking
   */
  projectStakingApy: string;
  projectCompletionBonusRate: string;
  memberStakeRevenueShare: string;
  tagStakeRevenueShare: string;
  minStakeDurationSeconds: bigint;
  allowSelfMemberStake: boolean;
  /**
   * Challenge response deadline (epochs)
   */
  challengeResponseDeadlineEpochs: bigint;
  /**
   * Gift rate limiting
   */
  giftCooldownBlocks: bigint;
  maxGiftsPerSenderEpoch: string;
  /**
   * Content conviction staking
   */
  contentConvictionHalfLifeEpochs: bigint;
  maxContentStakePerMember: string;
  maxAuthorBondPerContent: string;
  authorBondSlashOnModeration: boolean;
  /**
   * Fraction of slashed author bond given to challenger (rest burned), default 0.5
   */
  contentChallengeRewardShare: string;
  /**
   * Fraction of linked content conviction propagated to initiative (default 0.10)
   */
  convictionPropagationRatio: string;
  /**
   * Tag anti-gaming
   */
  maxTagsPerInitiative: number;
  /**
   * Anti-gaming parameters
   */
  reputationDecayRate: string;
  /**
   * Max fraction of required conviction any single member can contribute (default 0.33)
   */
  maxConvictionSharePerMember: string;
  /**
   * Fraction of invitation stake burned on acceptance (default 0.10 = 10%)
   */
  invitationStakeBurnRate: string;
  /**
   * Max reputation any member can earn per tag per epoch (default 50)
   */
  maxReputationGainPerEpoch: string;
}
export interface RepOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.rep.v1.RepOperationalParams";
  value: Uint8Array;
}
/**
 * RepOperationalParams defines the operational parameters that can be updated
 * by committee/council authority without full governance. These are day-to-day
 * tuning knobs that do not affect core economic incentives or tier structures.
 * @name RepOperationalParamsAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RepOperationalParams
 */
export interface RepOperationalParamsAmino {
  /**
   * Time config
   */
  epoch_blocks?: string;
  season_duration_epochs?: string;
  /**
   * DREAM economics
   */
  staking_apy?: string;
  unstaked_decay_rate?: string;
  transfer_tax_rate?: string;
  max_tip_amount?: string;
  max_tips_per_epoch?: number;
  max_gift_amount?: string;
  gift_only_to_invitees?: boolean;
  /**
   * Reputation
   */
  min_reputation_multiplier?: string;
  /**
   * Review periods
   */
  default_review_period_epochs?: string;
  default_challenge_period_epochs?: string;
  /**
   * Invitations
   */
  min_invitation_stake?: string;
  invitation_accountability_epochs?: string;
  referral_reward_rate?: string;
  invitation_cost_multiplier?: string;
  /**
   * Challenges
   */
  min_challenge_stake?: string;
  challenger_reward_rate?: string;
  jury_size?: number;
  jury_super_majority?: string;
  min_juror_reputation?: string;
  /**
   * Interim compensation
   */
  simple_complexity_budget?: string;
  standard_complexity_budget?: string;
  complex_complexity_budget?: string;
  expert_complexity_budget?: string;
  solo_expert_bonus_rate?: string;
  interim_deadline_epochs?: string;
  /**
   * Rate limits
   */
  max_active_challenges_per_committee?: number;
  max_new_challenges_per_epoch?: number;
  challenge_queue_max_size?: number;
  /**
   * Extended staking
   */
  project_staking_apy?: string;
  project_completion_bonus_rate?: string;
  member_stake_revenue_share?: string;
  tag_stake_revenue_share?: string;
  min_stake_duration_seconds?: string;
  allow_self_member_stake?: boolean;
  /**
   * Challenge response deadline (epochs)
   */
  challenge_response_deadline_epochs?: string;
  /**
   * Gift rate limiting
   */
  gift_cooldown_blocks?: string;
  max_gifts_per_sender_epoch?: string;
  /**
   * Content conviction staking
   */
  content_conviction_half_life_epochs?: string;
  max_content_stake_per_member?: string;
  max_author_bond_per_content?: string;
  author_bond_slash_on_moderation?: boolean;
  /**
   * Fraction of slashed author bond given to challenger (rest burned), default 0.5
   */
  content_challenge_reward_share?: string;
  /**
   * Fraction of linked content conviction propagated to initiative (default 0.10)
   */
  conviction_propagation_ratio?: string;
  /**
   * Tag anti-gaming
   */
  max_tags_per_initiative?: number;
  /**
   * Anti-gaming parameters
   */
  reputation_decay_rate?: string;
  /**
   * Max fraction of required conviction any single member can contribute (default 0.33)
   */
  max_conviction_share_per_member?: string;
  /**
   * Fraction of invitation stake burned on acceptance (default 0.10 = 10%)
   */
  invitation_stake_burn_rate?: string;
  /**
   * Max reputation any member can earn per tag per epoch (default 50)
   */
  max_reputation_gain_per_epoch?: string;
}
export interface RepOperationalParamsAminoMsg {
  type: "sparkdream/x/rep/RepOperationalParams";
  value: RepOperationalParamsAmino;
}
function createBaseTierConfig(): TierConfig {
  return {
    maxBudget: "",
    minReputation: "",
    reputationCap: "",
    rewardMultiplier: ""
  };
}
/**
 * TierConfig defines configuration for an initiative tier
 * @name TierConfig
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TierConfig
 */
export const TierConfig = {
  typeUrl: "/sparkdream.rep.v1.TierConfig",
  encode(message: TierConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxBudget !== "") {
      writer.uint32(10).string(message.maxBudget);
    }
    if (message.minReputation !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.minReputation, 18).atomics);
    }
    if (message.reputationCap !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.reputationCap, 18).atomics);
    }
    if (message.rewardMultiplier !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.rewardMultiplier, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TierConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTierConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBudget = reader.string();
          break;
        case 2:
          message.minReputation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.reputationCap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.rewardMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TierConfig>): TierConfig {
    const message = createBaseTierConfig();
    message.maxBudget = object.maxBudget ?? "";
    message.minReputation = object.minReputation ?? "";
    message.reputationCap = object.reputationCap ?? "";
    message.rewardMultiplier = object.rewardMultiplier ?? "";
    return message;
  },
  fromAmino(object: TierConfigAmino): TierConfig {
    const message = createBaseTierConfig();
    if (object.max_budget !== undefined && object.max_budget !== null) {
      message.maxBudget = object.max_budget;
    }
    if (object.min_reputation !== undefined && object.min_reputation !== null) {
      message.minReputation = object.min_reputation;
    }
    if (object.reputation_cap !== undefined && object.reputation_cap !== null) {
      message.reputationCap = object.reputation_cap;
    }
    if (object.reward_multiplier !== undefined && object.reward_multiplier !== null) {
      message.rewardMultiplier = object.reward_multiplier;
    }
    return message;
  },
  toAmino(message: TierConfig): TierConfigAmino {
    const obj: any = {};
    obj.max_budget = message.maxBudget === "" ? undefined : message.maxBudget;
    obj.min_reputation = message.minReputation === "" ? undefined : message.minReputation;
    obj.reputation_cap = message.reputationCap === "" ? undefined : message.reputationCap;
    obj.reward_multiplier = message.rewardMultiplier === "" ? undefined : message.rewardMultiplier;
    return obj;
  },
  fromAminoMsg(object: TierConfigAminoMsg): TierConfig {
    return TierConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: TierConfigProtoMsg): TierConfig {
    return TierConfig.decode(message.value);
  },
  toProto(message: TierConfig): Uint8Array {
    return TierConfig.encode(message).finish();
  },
  toProtoMsg(message: TierConfig): TierConfigProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.TierConfig",
      value: TierConfig.encode(message).finish()
    };
  }
};
function createBaseTrustLevelConfig(): TrustLevelConfig {
  return {
    provisionalMinRep: "",
    provisionalMinInterims: 0,
    establishedMinRep: "",
    establishedMinInterims: 0,
    trustedMinRep: "",
    trustedMinSeasons: 0,
    coreMinRep: "",
    coreMinSeasons: 0,
    newInvitationCredits: 0,
    provisionalInvitationCredits: 0,
    establishedInvitationCredits: 0,
    trustedInvitationCredits: 0,
    coreInvitationCredits: 0
  };
}
/**
 * TrustLevelConfig defines thresholds for trust level progression
 * @name TrustLevelConfig
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TrustLevelConfig
 */
export const TrustLevelConfig = {
  typeUrl: "/sparkdream.rep.v1.TrustLevelConfig",
  encode(message: TrustLevelConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provisionalMinRep !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.provisionalMinRep, 18).atomics);
    }
    if (message.provisionalMinInterims !== 0) {
      writer.uint32(16).uint32(message.provisionalMinInterims);
    }
    if (message.establishedMinRep !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.establishedMinRep, 18).atomics);
    }
    if (message.establishedMinInterims !== 0) {
      writer.uint32(32).uint32(message.establishedMinInterims);
    }
    if (message.trustedMinRep !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.trustedMinRep, 18).atomics);
    }
    if (message.trustedMinSeasons !== 0) {
      writer.uint32(48).uint32(message.trustedMinSeasons);
    }
    if (message.coreMinRep !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.coreMinRep, 18).atomics);
    }
    if (message.coreMinSeasons !== 0) {
      writer.uint32(64).uint32(message.coreMinSeasons);
    }
    if (message.newInvitationCredits !== 0) {
      writer.uint32(72).uint32(message.newInvitationCredits);
    }
    if (message.provisionalInvitationCredits !== 0) {
      writer.uint32(80).uint32(message.provisionalInvitationCredits);
    }
    if (message.establishedInvitationCredits !== 0) {
      writer.uint32(88).uint32(message.establishedInvitationCredits);
    }
    if (message.trustedInvitationCredits !== 0) {
      writer.uint32(96).uint32(message.trustedInvitationCredits);
    }
    if (message.coreInvitationCredits !== 0) {
      writer.uint32(104).uint32(message.coreInvitationCredits);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrustLevelConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrustLevelConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provisionalMinRep = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.provisionalMinInterims = reader.uint32();
          break;
        case 3:
          message.establishedMinRep = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.establishedMinInterims = reader.uint32();
          break;
        case 5:
          message.trustedMinRep = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.trustedMinSeasons = reader.uint32();
          break;
        case 7:
          message.coreMinRep = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.coreMinSeasons = reader.uint32();
          break;
        case 9:
          message.newInvitationCredits = reader.uint32();
          break;
        case 10:
          message.provisionalInvitationCredits = reader.uint32();
          break;
        case 11:
          message.establishedInvitationCredits = reader.uint32();
          break;
        case 12:
          message.trustedInvitationCredits = reader.uint32();
          break;
        case 13:
          message.coreInvitationCredits = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TrustLevelConfig>): TrustLevelConfig {
    const message = createBaseTrustLevelConfig();
    message.provisionalMinRep = object.provisionalMinRep ?? "";
    message.provisionalMinInterims = object.provisionalMinInterims ?? 0;
    message.establishedMinRep = object.establishedMinRep ?? "";
    message.establishedMinInterims = object.establishedMinInterims ?? 0;
    message.trustedMinRep = object.trustedMinRep ?? "";
    message.trustedMinSeasons = object.trustedMinSeasons ?? 0;
    message.coreMinRep = object.coreMinRep ?? "";
    message.coreMinSeasons = object.coreMinSeasons ?? 0;
    message.newInvitationCredits = object.newInvitationCredits ?? 0;
    message.provisionalInvitationCredits = object.provisionalInvitationCredits ?? 0;
    message.establishedInvitationCredits = object.establishedInvitationCredits ?? 0;
    message.trustedInvitationCredits = object.trustedInvitationCredits ?? 0;
    message.coreInvitationCredits = object.coreInvitationCredits ?? 0;
    return message;
  },
  fromAmino(object: TrustLevelConfigAmino): TrustLevelConfig {
    const message = createBaseTrustLevelConfig();
    if (object.provisional_min_rep !== undefined && object.provisional_min_rep !== null) {
      message.provisionalMinRep = object.provisional_min_rep;
    }
    if (object.provisional_min_interims !== undefined && object.provisional_min_interims !== null) {
      message.provisionalMinInterims = object.provisional_min_interims;
    }
    if (object.established_min_rep !== undefined && object.established_min_rep !== null) {
      message.establishedMinRep = object.established_min_rep;
    }
    if (object.established_min_interims !== undefined && object.established_min_interims !== null) {
      message.establishedMinInterims = object.established_min_interims;
    }
    if (object.trusted_min_rep !== undefined && object.trusted_min_rep !== null) {
      message.trustedMinRep = object.trusted_min_rep;
    }
    if (object.trusted_min_seasons !== undefined && object.trusted_min_seasons !== null) {
      message.trustedMinSeasons = object.trusted_min_seasons;
    }
    if (object.core_min_rep !== undefined && object.core_min_rep !== null) {
      message.coreMinRep = object.core_min_rep;
    }
    if (object.core_min_seasons !== undefined && object.core_min_seasons !== null) {
      message.coreMinSeasons = object.core_min_seasons;
    }
    if (object.new_invitation_credits !== undefined && object.new_invitation_credits !== null) {
      message.newInvitationCredits = object.new_invitation_credits;
    }
    if (object.provisional_invitation_credits !== undefined && object.provisional_invitation_credits !== null) {
      message.provisionalInvitationCredits = object.provisional_invitation_credits;
    }
    if (object.established_invitation_credits !== undefined && object.established_invitation_credits !== null) {
      message.establishedInvitationCredits = object.established_invitation_credits;
    }
    if (object.trusted_invitation_credits !== undefined && object.trusted_invitation_credits !== null) {
      message.trustedInvitationCredits = object.trusted_invitation_credits;
    }
    if (object.core_invitation_credits !== undefined && object.core_invitation_credits !== null) {
      message.coreInvitationCredits = object.core_invitation_credits;
    }
    return message;
  },
  toAmino(message: TrustLevelConfig): TrustLevelConfigAmino {
    const obj: any = {};
    obj.provisional_min_rep = message.provisionalMinRep === "" ? undefined : message.provisionalMinRep;
    obj.provisional_min_interims = message.provisionalMinInterims === 0 ? undefined : message.provisionalMinInterims;
    obj.established_min_rep = message.establishedMinRep === "" ? undefined : message.establishedMinRep;
    obj.established_min_interims = message.establishedMinInterims === 0 ? undefined : message.establishedMinInterims;
    obj.trusted_min_rep = message.trustedMinRep === "" ? undefined : message.trustedMinRep;
    obj.trusted_min_seasons = message.trustedMinSeasons === 0 ? undefined : message.trustedMinSeasons;
    obj.core_min_rep = message.coreMinRep === "" ? undefined : message.coreMinRep;
    obj.core_min_seasons = message.coreMinSeasons === 0 ? undefined : message.coreMinSeasons;
    obj.new_invitation_credits = message.newInvitationCredits === 0 ? undefined : message.newInvitationCredits;
    obj.provisional_invitation_credits = message.provisionalInvitationCredits === 0 ? undefined : message.provisionalInvitationCredits;
    obj.established_invitation_credits = message.establishedInvitationCredits === 0 ? undefined : message.establishedInvitationCredits;
    obj.trusted_invitation_credits = message.trustedInvitationCredits === 0 ? undefined : message.trustedInvitationCredits;
    obj.core_invitation_credits = message.coreInvitationCredits === 0 ? undefined : message.coreInvitationCredits;
    return obj;
  },
  fromAminoMsg(object: TrustLevelConfigAminoMsg): TrustLevelConfig {
    return TrustLevelConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: TrustLevelConfigProtoMsg): TrustLevelConfig {
    return TrustLevelConfig.decode(message.value);
  },
  toProto(message: TrustLevelConfig): Uint8Array {
    return TrustLevelConfig.encode(message).finish();
  },
  toProtoMsg(message: TrustLevelConfig): TrustLevelConfigProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.TrustLevelConfig",
      value: TrustLevelConfig.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    epochBlocks: BigInt(0),
    seasonDurationEpochs: BigInt(0),
    stakingApy: "",
    unstakedDecayRate: "",
    transferTaxRate: "",
    maxTipAmount: "",
    maxTipsPerEpoch: 0,
    maxGiftAmount: "",
    giftOnlyToInvitees: false,
    completerShare: "",
    treasuryShare: "",
    minReputationMultiplier: "",
    apprenticeTier: TierConfig.fromPartial({}),
    standardTier: TierConfig.fromPartial({}),
    expertTier: TierConfig.fromPartial({}),
    epicTier: TierConfig.fromPartial({}),
    convictionHalfLifeEpochs: BigInt(0),
    externalConvictionRatio: "",
    convictionPerDream: "",
    defaultReviewPeriodEpochs: BigInt(0),
    defaultChallengePeriodEpochs: BigInt(0),
    minInvitationStake: "",
    invitationAccountabilityEpochs: BigInt(0),
    referralRewardRate: "",
    invitationCostMultiplier: "",
    trustLevelConfig: TrustLevelConfig.fromPartial({}),
    minChallengeStake: "",
    challengerRewardRate: "",
    jurySize: 0,
    jurySuperMajority: "",
    minJurorReputation: "",
    simpleComplexityBudget: "",
    standardComplexityBudget: "",
    complexComplexityBudget: "",
    expertComplexityBudget: "",
    soloExpertBonusRate: "",
    interimDeadlineEpochs: BigInt(0),
    maxActiveChallengesPerCommittee: 0,
    maxNewChallengesPerEpoch: 0,
    challengeQueueMaxSize: 0,
    minorSlashPenalty: "",
    moderateSlashPenalty: "",
    severeSlashPenalty: "",
    zeroingSlashPenalty: "",
    projectStakingApy: "",
    projectCompletionBonusRate: "",
    memberStakeRevenueShare: "",
    tagStakeRevenueShare: "",
    minStakeDurationSeconds: BigInt(0),
    allowSelfMemberStake: false,
    challengeResponseDeadlineEpochs: BigInt(0),
    giftCooldownBlocks: BigInt(0),
    maxGiftsPerSenderEpoch: "",
    contentConvictionHalfLifeEpochs: BigInt(0),
    maxContentStakePerMember: "",
    maxAuthorBondPerContent: "",
    authorBondSlashOnModeration: false,
    contentChallengeRewardShare: "",
    convictionPropagationRatio: "",
    maxTagsPerInitiative: 0,
    reputationDecayRate: "",
    maxConvictionSharePerMember: "",
    invitationStakeBurnRate: "",
    maxReputationGainPerEpoch: ""
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.rep.v1.Params",
  aminoType: "sparkdream/x/rep/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochBlocks !== BigInt(0)) {
      writer.uint32(8).int64(message.epochBlocks);
    }
    if (message.seasonDurationEpochs !== BigInt(0)) {
      writer.uint32(16).int64(message.seasonDurationEpochs);
    }
    if (message.stakingApy !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.stakingApy, 18).atomics);
    }
    if (message.unstakedDecayRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.unstakedDecayRate, 18).atomics);
    }
    if (message.transferTaxRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.transferTaxRate, 18).atomics);
    }
    if (message.maxTipAmount !== "") {
      writer.uint32(50).string(message.maxTipAmount);
    }
    if (message.maxTipsPerEpoch !== 0) {
      writer.uint32(56).uint32(message.maxTipsPerEpoch);
    }
    if (message.maxGiftAmount !== "") {
      writer.uint32(66).string(message.maxGiftAmount);
    }
    if (message.giftOnlyToInvitees === true) {
      writer.uint32(72).bool(message.giftOnlyToInvitees);
    }
    if (message.completerShare !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.completerShare, 18).atomics);
    }
    if (message.treasuryShare !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.treasuryShare, 18).atomics);
    }
    if (message.minReputationMultiplier !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.minReputationMultiplier, 18).atomics);
    }
    if (message.apprenticeTier !== undefined) {
      TierConfig.encode(message.apprenticeTier, writer.uint32(106).fork()).ldelim();
    }
    if (message.standardTier !== undefined) {
      TierConfig.encode(message.standardTier, writer.uint32(114).fork()).ldelim();
    }
    if (message.expertTier !== undefined) {
      TierConfig.encode(message.expertTier, writer.uint32(122).fork()).ldelim();
    }
    if (message.epicTier !== undefined) {
      TierConfig.encode(message.epicTier, writer.uint32(130).fork()).ldelim();
    }
    if (message.convictionHalfLifeEpochs !== BigInt(0)) {
      writer.uint32(136).int64(message.convictionHalfLifeEpochs);
    }
    if (message.externalConvictionRatio !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.externalConvictionRatio, 18).atomics);
    }
    if (message.convictionPerDream !== "") {
      writer.uint32(154).string(Decimal.fromUserInput(message.convictionPerDream, 18).atomics);
    }
    if (message.defaultReviewPeriodEpochs !== BigInt(0)) {
      writer.uint32(160).int64(message.defaultReviewPeriodEpochs);
    }
    if (message.defaultChallengePeriodEpochs !== BigInt(0)) {
      writer.uint32(168).int64(message.defaultChallengePeriodEpochs);
    }
    if (message.minInvitationStake !== "") {
      writer.uint32(178).string(message.minInvitationStake);
    }
    if (message.invitationAccountabilityEpochs !== BigInt(0)) {
      writer.uint32(184).int64(message.invitationAccountabilityEpochs);
    }
    if (message.referralRewardRate !== "") {
      writer.uint32(194).string(Decimal.fromUserInput(message.referralRewardRate, 18).atomics);
    }
    if (message.invitationCostMultiplier !== "") {
      writer.uint32(202).string(Decimal.fromUserInput(message.invitationCostMultiplier, 18).atomics);
    }
    if (message.trustLevelConfig !== undefined) {
      TrustLevelConfig.encode(message.trustLevelConfig, writer.uint32(210).fork()).ldelim();
    }
    if (message.minChallengeStake !== "") {
      writer.uint32(218).string(message.minChallengeStake);
    }
    if (message.challengerRewardRate !== "") {
      writer.uint32(226).string(Decimal.fromUserInput(message.challengerRewardRate, 18).atomics);
    }
    if (message.jurySize !== 0) {
      writer.uint32(232).uint32(message.jurySize);
    }
    if (message.jurySuperMajority !== "") {
      writer.uint32(242).string(Decimal.fromUserInput(message.jurySuperMajority, 18).atomics);
    }
    if (message.minJurorReputation !== "") {
      writer.uint32(250).string(Decimal.fromUserInput(message.minJurorReputation, 18).atomics);
    }
    if (message.simpleComplexityBudget !== "") {
      writer.uint32(258).string(message.simpleComplexityBudget);
    }
    if (message.standardComplexityBudget !== "") {
      writer.uint32(266).string(message.standardComplexityBudget);
    }
    if (message.complexComplexityBudget !== "") {
      writer.uint32(274).string(message.complexComplexityBudget);
    }
    if (message.expertComplexityBudget !== "") {
      writer.uint32(282).string(message.expertComplexityBudget);
    }
    if (message.soloExpertBonusRate !== "") {
      writer.uint32(290).string(Decimal.fromUserInput(message.soloExpertBonusRate, 18).atomics);
    }
    if (message.interimDeadlineEpochs !== BigInt(0)) {
      writer.uint32(296).int64(message.interimDeadlineEpochs);
    }
    if (message.maxActiveChallengesPerCommittee !== 0) {
      writer.uint32(304).uint32(message.maxActiveChallengesPerCommittee);
    }
    if (message.maxNewChallengesPerEpoch !== 0) {
      writer.uint32(312).uint32(message.maxNewChallengesPerEpoch);
    }
    if (message.challengeQueueMaxSize !== 0) {
      writer.uint32(320).uint32(message.challengeQueueMaxSize);
    }
    if (message.minorSlashPenalty !== "") {
      writer.uint32(330).string(Decimal.fromUserInput(message.minorSlashPenalty, 18).atomics);
    }
    if (message.moderateSlashPenalty !== "") {
      writer.uint32(338).string(Decimal.fromUserInput(message.moderateSlashPenalty, 18).atomics);
    }
    if (message.severeSlashPenalty !== "") {
      writer.uint32(346).string(Decimal.fromUserInput(message.severeSlashPenalty, 18).atomics);
    }
    if (message.zeroingSlashPenalty !== "") {
      writer.uint32(354).string(Decimal.fromUserInput(message.zeroingSlashPenalty, 18).atomics);
    }
    if (message.projectStakingApy !== "") {
      writer.uint32(362).string(Decimal.fromUserInput(message.projectStakingApy, 18).atomics);
    }
    if (message.projectCompletionBonusRate !== "") {
      writer.uint32(370).string(Decimal.fromUserInput(message.projectCompletionBonusRate, 18).atomics);
    }
    if (message.memberStakeRevenueShare !== "") {
      writer.uint32(378).string(Decimal.fromUserInput(message.memberStakeRevenueShare, 18).atomics);
    }
    if (message.tagStakeRevenueShare !== "") {
      writer.uint32(386).string(Decimal.fromUserInput(message.tagStakeRevenueShare, 18).atomics);
    }
    if (message.minStakeDurationSeconds !== BigInt(0)) {
      writer.uint32(392).int64(message.minStakeDurationSeconds);
    }
    if (message.allowSelfMemberStake === true) {
      writer.uint32(400).bool(message.allowSelfMemberStake);
    }
    if (message.challengeResponseDeadlineEpochs !== BigInt(0)) {
      writer.uint32(408).int64(message.challengeResponseDeadlineEpochs);
    }
    if (message.giftCooldownBlocks !== BigInt(0)) {
      writer.uint32(416).int64(message.giftCooldownBlocks);
    }
    if (message.maxGiftsPerSenderEpoch !== "") {
      writer.uint32(426).string(message.maxGiftsPerSenderEpoch);
    }
    if (message.contentConvictionHalfLifeEpochs !== BigInt(0)) {
      writer.uint32(432).int64(message.contentConvictionHalfLifeEpochs);
    }
    if (message.maxContentStakePerMember !== "") {
      writer.uint32(442).string(message.maxContentStakePerMember);
    }
    if (message.maxAuthorBondPerContent !== "") {
      writer.uint32(450).string(message.maxAuthorBondPerContent);
    }
    if (message.authorBondSlashOnModeration === true) {
      writer.uint32(456).bool(message.authorBondSlashOnModeration);
    }
    if (message.contentChallengeRewardShare !== "") {
      writer.uint32(466).string(Decimal.fromUserInput(message.contentChallengeRewardShare, 18).atomics);
    }
    if (message.convictionPropagationRatio !== "") {
      writer.uint32(474).string(Decimal.fromUserInput(message.convictionPropagationRatio, 18).atomics);
    }
    if (message.maxTagsPerInitiative !== 0) {
      writer.uint32(480).uint32(message.maxTagsPerInitiative);
    }
    if (message.reputationDecayRate !== "") {
      writer.uint32(490).string(Decimal.fromUserInput(message.reputationDecayRate, 18).atomics);
    }
    if (message.maxConvictionSharePerMember !== "") {
      writer.uint32(498).string(Decimal.fromUserInput(message.maxConvictionSharePerMember, 18).atomics);
    }
    if (message.invitationStakeBurnRate !== "") {
      writer.uint32(506).string(Decimal.fromUserInput(message.invitationStakeBurnRate, 18).atomics);
    }
    if (message.maxReputationGainPerEpoch !== "") {
      writer.uint32(514).string(Decimal.fromUserInput(message.maxReputationGainPerEpoch, 18).atomics);
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
          message.stakingApy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.unstakedDecayRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.transferTaxRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.maxTipAmount = reader.string();
          break;
        case 7:
          message.maxTipsPerEpoch = reader.uint32();
          break;
        case 8:
          message.maxGiftAmount = reader.string();
          break;
        case 9:
          message.giftOnlyToInvitees = reader.bool();
          break;
        case 10:
          message.completerShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.treasuryShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.minReputationMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.apprenticeTier = TierConfig.decode(reader, reader.uint32());
          break;
        case 14:
          message.standardTier = TierConfig.decode(reader, reader.uint32());
          break;
        case 15:
          message.expertTier = TierConfig.decode(reader, reader.uint32());
          break;
        case 16:
          message.epicTier = TierConfig.decode(reader, reader.uint32());
          break;
        case 17:
          message.convictionHalfLifeEpochs = reader.int64();
          break;
        case 18:
          message.externalConvictionRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.convictionPerDream = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 20:
          message.defaultReviewPeriodEpochs = reader.int64();
          break;
        case 21:
          message.defaultChallengePeriodEpochs = reader.int64();
          break;
        case 22:
          message.minInvitationStake = reader.string();
          break;
        case 23:
          message.invitationAccountabilityEpochs = reader.int64();
          break;
        case 24:
          message.referralRewardRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 25:
          message.invitationCostMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 26:
          message.trustLevelConfig = TrustLevelConfig.decode(reader, reader.uint32());
          break;
        case 27:
          message.minChallengeStake = reader.string();
          break;
        case 28:
          message.challengerRewardRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 29:
          message.jurySize = reader.uint32();
          break;
        case 30:
          message.jurySuperMajority = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 31:
          message.minJurorReputation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 32:
          message.simpleComplexityBudget = reader.string();
          break;
        case 33:
          message.standardComplexityBudget = reader.string();
          break;
        case 34:
          message.complexComplexityBudget = reader.string();
          break;
        case 35:
          message.expertComplexityBudget = reader.string();
          break;
        case 36:
          message.soloExpertBonusRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 37:
          message.interimDeadlineEpochs = reader.int64();
          break;
        case 38:
          message.maxActiveChallengesPerCommittee = reader.uint32();
          break;
        case 39:
          message.maxNewChallengesPerEpoch = reader.uint32();
          break;
        case 40:
          message.challengeQueueMaxSize = reader.uint32();
          break;
        case 41:
          message.minorSlashPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 42:
          message.moderateSlashPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 43:
          message.severeSlashPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 44:
          message.zeroingSlashPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 45:
          message.projectStakingApy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 46:
          message.projectCompletionBonusRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 47:
          message.memberStakeRevenueShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 48:
          message.tagStakeRevenueShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 49:
          message.minStakeDurationSeconds = reader.int64();
          break;
        case 50:
          message.allowSelfMemberStake = reader.bool();
          break;
        case 51:
          message.challengeResponseDeadlineEpochs = reader.int64();
          break;
        case 52:
          message.giftCooldownBlocks = reader.int64();
          break;
        case 53:
          message.maxGiftsPerSenderEpoch = reader.string();
          break;
        case 54:
          message.contentConvictionHalfLifeEpochs = reader.int64();
          break;
        case 55:
          message.maxContentStakePerMember = reader.string();
          break;
        case 56:
          message.maxAuthorBondPerContent = reader.string();
          break;
        case 57:
          message.authorBondSlashOnModeration = reader.bool();
          break;
        case 58:
          message.contentChallengeRewardShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 59:
          message.convictionPropagationRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 60:
          message.maxTagsPerInitiative = reader.uint32();
          break;
        case 61:
          message.reputationDecayRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 62:
          message.maxConvictionSharePerMember = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 63:
          message.invitationStakeBurnRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 64:
          message.maxReputationGainPerEpoch = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.stakingApy = object.stakingApy ?? "";
    message.unstakedDecayRate = object.unstakedDecayRate ?? "";
    message.transferTaxRate = object.transferTaxRate ?? "";
    message.maxTipAmount = object.maxTipAmount ?? "";
    message.maxTipsPerEpoch = object.maxTipsPerEpoch ?? 0;
    message.maxGiftAmount = object.maxGiftAmount ?? "";
    message.giftOnlyToInvitees = object.giftOnlyToInvitees ?? false;
    message.completerShare = object.completerShare ?? "";
    message.treasuryShare = object.treasuryShare ?? "";
    message.minReputationMultiplier = object.minReputationMultiplier ?? "";
    message.apprenticeTier = object.apprenticeTier !== undefined && object.apprenticeTier !== null ? TierConfig.fromPartial(object.apprenticeTier) : undefined;
    message.standardTier = object.standardTier !== undefined && object.standardTier !== null ? TierConfig.fromPartial(object.standardTier) : undefined;
    message.expertTier = object.expertTier !== undefined && object.expertTier !== null ? TierConfig.fromPartial(object.expertTier) : undefined;
    message.epicTier = object.epicTier !== undefined && object.epicTier !== null ? TierConfig.fromPartial(object.epicTier) : undefined;
    message.convictionHalfLifeEpochs = object.convictionHalfLifeEpochs !== undefined && object.convictionHalfLifeEpochs !== null ? BigInt(object.convictionHalfLifeEpochs.toString()) : BigInt(0);
    message.externalConvictionRatio = object.externalConvictionRatio ?? "";
    message.convictionPerDream = object.convictionPerDream ?? "";
    message.defaultReviewPeriodEpochs = object.defaultReviewPeriodEpochs !== undefined && object.defaultReviewPeriodEpochs !== null ? BigInt(object.defaultReviewPeriodEpochs.toString()) : BigInt(0);
    message.defaultChallengePeriodEpochs = object.defaultChallengePeriodEpochs !== undefined && object.defaultChallengePeriodEpochs !== null ? BigInt(object.defaultChallengePeriodEpochs.toString()) : BigInt(0);
    message.minInvitationStake = object.minInvitationStake ?? "";
    message.invitationAccountabilityEpochs = object.invitationAccountabilityEpochs !== undefined && object.invitationAccountabilityEpochs !== null ? BigInt(object.invitationAccountabilityEpochs.toString()) : BigInt(0);
    message.referralRewardRate = object.referralRewardRate ?? "";
    message.invitationCostMultiplier = object.invitationCostMultiplier ?? "";
    message.trustLevelConfig = object.trustLevelConfig !== undefined && object.trustLevelConfig !== null ? TrustLevelConfig.fromPartial(object.trustLevelConfig) : undefined;
    message.minChallengeStake = object.minChallengeStake ?? "";
    message.challengerRewardRate = object.challengerRewardRate ?? "";
    message.jurySize = object.jurySize ?? 0;
    message.jurySuperMajority = object.jurySuperMajority ?? "";
    message.minJurorReputation = object.minJurorReputation ?? "";
    message.simpleComplexityBudget = object.simpleComplexityBudget ?? "";
    message.standardComplexityBudget = object.standardComplexityBudget ?? "";
    message.complexComplexityBudget = object.complexComplexityBudget ?? "";
    message.expertComplexityBudget = object.expertComplexityBudget ?? "";
    message.soloExpertBonusRate = object.soloExpertBonusRate ?? "";
    message.interimDeadlineEpochs = object.interimDeadlineEpochs !== undefined && object.interimDeadlineEpochs !== null ? BigInt(object.interimDeadlineEpochs.toString()) : BigInt(0);
    message.maxActiveChallengesPerCommittee = object.maxActiveChallengesPerCommittee ?? 0;
    message.maxNewChallengesPerEpoch = object.maxNewChallengesPerEpoch ?? 0;
    message.challengeQueueMaxSize = object.challengeQueueMaxSize ?? 0;
    message.minorSlashPenalty = object.minorSlashPenalty ?? "";
    message.moderateSlashPenalty = object.moderateSlashPenalty ?? "";
    message.severeSlashPenalty = object.severeSlashPenalty ?? "";
    message.zeroingSlashPenalty = object.zeroingSlashPenalty ?? "";
    message.projectStakingApy = object.projectStakingApy ?? "";
    message.projectCompletionBonusRate = object.projectCompletionBonusRate ?? "";
    message.memberStakeRevenueShare = object.memberStakeRevenueShare ?? "";
    message.tagStakeRevenueShare = object.tagStakeRevenueShare ?? "";
    message.minStakeDurationSeconds = object.minStakeDurationSeconds !== undefined && object.minStakeDurationSeconds !== null ? BigInt(object.minStakeDurationSeconds.toString()) : BigInt(0);
    message.allowSelfMemberStake = object.allowSelfMemberStake ?? false;
    message.challengeResponseDeadlineEpochs = object.challengeResponseDeadlineEpochs !== undefined && object.challengeResponseDeadlineEpochs !== null ? BigInt(object.challengeResponseDeadlineEpochs.toString()) : BigInt(0);
    message.giftCooldownBlocks = object.giftCooldownBlocks !== undefined && object.giftCooldownBlocks !== null ? BigInt(object.giftCooldownBlocks.toString()) : BigInt(0);
    message.maxGiftsPerSenderEpoch = object.maxGiftsPerSenderEpoch ?? "";
    message.contentConvictionHalfLifeEpochs = object.contentConvictionHalfLifeEpochs !== undefined && object.contentConvictionHalfLifeEpochs !== null ? BigInt(object.contentConvictionHalfLifeEpochs.toString()) : BigInt(0);
    message.maxContentStakePerMember = object.maxContentStakePerMember ?? "";
    message.maxAuthorBondPerContent = object.maxAuthorBondPerContent ?? "";
    message.authorBondSlashOnModeration = object.authorBondSlashOnModeration ?? false;
    message.contentChallengeRewardShare = object.contentChallengeRewardShare ?? "";
    message.convictionPropagationRatio = object.convictionPropagationRatio ?? "";
    message.maxTagsPerInitiative = object.maxTagsPerInitiative ?? 0;
    message.reputationDecayRate = object.reputationDecayRate ?? "";
    message.maxConvictionSharePerMember = object.maxConvictionSharePerMember ?? "";
    message.invitationStakeBurnRate = object.invitationStakeBurnRate ?? "";
    message.maxReputationGainPerEpoch = object.maxReputationGainPerEpoch ?? "";
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
    if (object.staking_apy !== undefined && object.staking_apy !== null) {
      message.stakingApy = object.staking_apy;
    }
    if (object.unstaked_decay_rate !== undefined && object.unstaked_decay_rate !== null) {
      message.unstakedDecayRate = object.unstaked_decay_rate;
    }
    if (object.transfer_tax_rate !== undefined && object.transfer_tax_rate !== null) {
      message.transferTaxRate = object.transfer_tax_rate;
    }
    if (object.max_tip_amount !== undefined && object.max_tip_amount !== null) {
      message.maxTipAmount = object.max_tip_amount;
    }
    if (object.max_tips_per_epoch !== undefined && object.max_tips_per_epoch !== null) {
      message.maxTipsPerEpoch = object.max_tips_per_epoch;
    }
    if (object.max_gift_amount !== undefined && object.max_gift_amount !== null) {
      message.maxGiftAmount = object.max_gift_amount;
    }
    if (object.gift_only_to_invitees !== undefined && object.gift_only_to_invitees !== null) {
      message.giftOnlyToInvitees = object.gift_only_to_invitees;
    }
    if (object.completer_share !== undefined && object.completer_share !== null) {
      message.completerShare = object.completer_share;
    }
    if (object.treasury_share !== undefined && object.treasury_share !== null) {
      message.treasuryShare = object.treasury_share;
    }
    if (object.min_reputation_multiplier !== undefined && object.min_reputation_multiplier !== null) {
      message.minReputationMultiplier = object.min_reputation_multiplier;
    }
    if (object.apprentice_tier !== undefined && object.apprentice_tier !== null) {
      message.apprenticeTier = TierConfig.fromAmino(object.apprentice_tier);
    }
    if (object.standard_tier !== undefined && object.standard_tier !== null) {
      message.standardTier = TierConfig.fromAmino(object.standard_tier);
    }
    if (object.expert_tier !== undefined && object.expert_tier !== null) {
      message.expertTier = TierConfig.fromAmino(object.expert_tier);
    }
    if (object.epic_tier !== undefined && object.epic_tier !== null) {
      message.epicTier = TierConfig.fromAmino(object.epic_tier);
    }
    if (object.conviction_half_life_epochs !== undefined && object.conviction_half_life_epochs !== null) {
      message.convictionHalfLifeEpochs = BigInt(object.conviction_half_life_epochs);
    }
    if (object.external_conviction_ratio !== undefined && object.external_conviction_ratio !== null) {
      message.externalConvictionRatio = object.external_conviction_ratio;
    }
    if (object.conviction_per_dream !== undefined && object.conviction_per_dream !== null) {
      message.convictionPerDream = object.conviction_per_dream;
    }
    if (object.default_review_period_epochs !== undefined && object.default_review_period_epochs !== null) {
      message.defaultReviewPeriodEpochs = BigInt(object.default_review_period_epochs);
    }
    if (object.default_challenge_period_epochs !== undefined && object.default_challenge_period_epochs !== null) {
      message.defaultChallengePeriodEpochs = BigInt(object.default_challenge_period_epochs);
    }
    if (object.min_invitation_stake !== undefined && object.min_invitation_stake !== null) {
      message.minInvitationStake = object.min_invitation_stake;
    }
    if (object.invitation_accountability_epochs !== undefined && object.invitation_accountability_epochs !== null) {
      message.invitationAccountabilityEpochs = BigInt(object.invitation_accountability_epochs);
    }
    if (object.referral_reward_rate !== undefined && object.referral_reward_rate !== null) {
      message.referralRewardRate = object.referral_reward_rate;
    }
    if (object.invitation_cost_multiplier !== undefined && object.invitation_cost_multiplier !== null) {
      message.invitationCostMultiplier = object.invitation_cost_multiplier;
    }
    if (object.trust_level_config !== undefined && object.trust_level_config !== null) {
      message.trustLevelConfig = TrustLevelConfig.fromAmino(object.trust_level_config);
    }
    if (object.min_challenge_stake !== undefined && object.min_challenge_stake !== null) {
      message.minChallengeStake = object.min_challenge_stake;
    }
    if (object.challenger_reward_rate !== undefined && object.challenger_reward_rate !== null) {
      message.challengerRewardRate = object.challenger_reward_rate;
    }
    if (object.jury_size !== undefined && object.jury_size !== null) {
      message.jurySize = object.jury_size;
    }
    if (object.jury_super_majority !== undefined && object.jury_super_majority !== null) {
      message.jurySuperMajority = object.jury_super_majority;
    }
    if (object.min_juror_reputation !== undefined && object.min_juror_reputation !== null) {
      message.minJurorReputation = object.min_juror_reputation;
    }
    if (object.simple_complexity_budget !== undefined && object.simple_complexity_budget !== null) {
      message.simpleComplexityBudget = object.simple_complexity_budget;
    }
    if (object.standard_complexity_budget !== undefined && object.standard_complexity_budget !== null) {
      message.standardComplexityBudget = object.standard_complexity_budget;
    }
    if (object.complex_complexity_budget !== undefined && object.complex_complexity_budget !== null) {
      message.complexComplexityBudget = object.complex_complexity_budget;
    }
    if (object.expert_complexity_budget !== undefined && object.expert_complexity_budget !== null) {
      message.expertComplexityBudget = object.expert_complexity_budget;
    }
    if (object.solo_expert_bonus_rate !== undefined && object.solo_expert_bonus_rate !== null) {
      message.soloExpertBonusRate = object.solo_expert_bonus_rate;
    }
    if (object.interim_deadline_epochs !== undefined && object.interim_deadline_epochs !== null) {
      message.interimDeadlineEpochs = BigInt(object.interim_deadline_epochs);
    }
    if (object.max_active_challenges_per_committee !== undefined && object.max_active_challenges_per_committee !== null) {
      message.maxActiveChallengesPerCommittee = object.max_active_challenges_per_committee;
    }
    if (object.max_new_challenges_per_epoch !== undefined && object.max_new_challenges_per_epoch !== null) {
      message.maxNewChallengesPerEpoch = object.max_new_challenges_per_epoch;
    }
    if (object.challenge_queue_max_size !== undefined && object.challenge_queue_max_size !== null) {
      message.challengeQueueMaxSize = object.challenge_queue_max_size;
    }
    if (object.minor_slash_penalty !== undefined && object.minor_slash_penalty !== null) {
      message.minorSlashPenalty = object.minor_slash_penalty;
    }
    if (object.moderate_slash_penalty !== undefined && object.moderate_slash_penalty !== null) {
      message.moderateSlashPenalty = object.moderate_slash_penalty;
    }
    if (object.severe_slash_penalty !== undefined && object.severe_slash_penalty !== null) {
      message.severeSlashPenalty = object.severe_slash_penalty;
    }
    if (object.zeroing_slash_penalty !== undefined && object.zeroing_slash_penalty !== null) {
      message.zeroingSlashPenalty = object.zeroing_slash_penalty;
    }
    if (object.project_staking_apy !== undefined && object.project_staking_apy !== null) {
      message.projectStakingApy = object.project_staking_apy;
    }
    if (object.project_completion_bonus_rate !== undefined && object.project_completion_bonus_rate !== null) {
      message.projectCompletionBonusRate = object.project_completion_bonus_rate;
    }
    if (object.member_stake_revenue_share !== undefined && object.member_stake_revenue_share !== null) {
      message.memberStakeRevenueShare = object.member_stake_revenue_share;
    }
    if (object.tag_stake_revenue_share !== undefined && object.tag_stake_revenue_share !== null) {
      message.tagStakeRevenueShare = object.tag_stake_revenue_share;
    }
    if (object.min_stake_duration_seconds !== undefined && object.min_stake_duration_seconds !== null) {
      message.minStakeDurationSeconds = BigInt(object.min_stake_duration_seconds);
    }
    if (object.allow_self_member_stake !== undefined && object.allow_self_member_stake !== null) {
      message.allowSelfMemberStake = object.allow_self_member_stake;
    }
    if (object.challenge_response_deadline_epochs !== undefined && object.challenge_response_deadline_epochs !== null) {
      message.challengeResponseDeadlineEpochs = BigInt(object.challenge_response_deadline_epochs);
    }
    if (object.gift_cooldown_blocks !== undefined && object.gift_cooldown_blocks !== null) {
      message.giftCooldownBlocks = BigInt(object.gift_cooldown_blocks);
    }
    if (object.max_gifts_per_sender_epoch !== undefined && object.max_gifts_per_sender_epoch !== null) {
      message.maxGiftsPerSenderEpoch = object.max_gifts_per_sender_epoch;
    }
    if (object.content_conviction_half_life_epochs !== undefined && object.content_conviction_half_life_epochs !== null) {
      message.contentConvictionHalfLifeEpochs = BigInt(object.content_conviction_half_life_epochs);
    }
    if (object.max_content_stake_per_member !== undefined && object.max_content_stake_per_member !== null) {
      message.maxContentStakePerMember = object.max_content_stake_per_member;
    }
    if (object.max_author_bond_per_content !== undefined && object.max_author_bond_per_content !== null) {
      message.maxAuthorBondPerContent = object.max_author_bond_per_content;
    }
    if (object.author_bond_slash_on_moderation !== undefined && object.author_bond_slash_on_moderation !== null) {
      message.authorBondSlashOnModeration = object.author_bond_slash_on_moderation;
    }
    if (object.content_challenge_reward_share !== undefined && object.content_challenge_reward_share !== null) {
      message.contentChallengeRewardShare = object.content_challenge_reward_share;
    }
    if (object.conviction_propagation_ratio !== undefined && object.conviction_propagation_ratio !== null) {
      message.convictionPropagationRatio = object.conviction_propagation_ratio;
    }
    if (object.max_tags_per_initiative !== undefined && object.max_tags_per_initiative !== null) {
      message.maxTagsPerInitiative = object.max_tags_per_initiative;
    }
    if (object.reputation_decay_rate !== undefined && object.reputation_decay_rate !== null) {
      message.reputationDecayRate = object.reputation_decay_rate;
    }
    if (object.max_conviction_share_per_member !== undefined && object.max_conviction_share_per_member !== null) {
      message.maxConvictionSharePerMember = object.max_conviction_share_per_member;
    }
    if (object.invitation_stake_burn_rate !== undefined && object.invitation_stake_burn_rate !== null) {
      message.invitationStakeBurnRate = object.invitation_stake_burn_rate;
    }
    if (object.max_reputation_gain_per_epoch !== undefined && object.max_reputation_gain_per_epoch !== null) {
      message.maxReputationGainPerEpoch = object.max_reputation_gain_per_epoch;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.epoch_blocks = message.epochBlocks !== BigInt(0) ? message.epochBlocks?.toString() : undefined;
    obj.season_duration_epochs = message.seasonDurationEpochs !== BigInt(0) ? message.seasonDurationEpochs?.toString() : undefined;
    obj.staking_apy = message.stakingApy === "" ? undefined : message.stakingApy;
    obj.unstaked_decay_rate = message.unstakedDecayRate === "" ? undefined : message.unstakedDecayRate;
    obj.transfer_tax_rate = message.transferTaxRate === "" ? undefined : message.transferTaxRate;
    obj.max_tip_amount = message.maxTipAmount === "" ? undefined : message.maxTipAmount;
    obj.max_tips_per_epoch = message.maxTipsPerEpoch === 0 ? undefined : message.maxTipsPerEpoch;
    obj.max_gift_amount = message.maxGiftAmount === "" ? undefined : message.maxGiftAmount;
    obj.gift_only_to_invitees = message.giftOnlyToInvitees === false ? undefined : message.giftOnlyToInvitees;
    obj.completer_share = message.completerShare === "" ? undefined : message.completerShare;
    obj.treasury_share = message.treasuryShare === "" ? undefined : message.treasuryShare;
    obj.min_reputation_multiplier = message.minReputationMultiplier === "" ? undefined : message.minReputationMultiplier;
    obj.apprentice_tier = message.apprenticeTier ? TierConfig.toAmino(message.apprenticeTier) : undefined;
    obj.standard_tier = message.standardTier ? TierConfig.toAmino(message.standardTier) : undefined;
    obj.expert_tier = message.expertTier ? TierConfig.toAmino(message.expertTier) : undefined;
    obj.epic_tier = message.epicTier ? TierConfig.toAmino(message.epicTier) : undefined;
    obj.conviction_half_life_epochs = message.convictionHalfLifeEpochs !== BigInt(0) ? message.convictionHalfLifeEpochs?.toString() : undefined;
    obj.external_conviction_ratio = message.externalConvictionRatio === "" ? undefined : message.externalConvictionRatio;
    obj.conviction_per_dream = message.convictionPerDream === "" ? undefined : message.convictionPerDream;
    obj.default_review_period_epochs = message.defaultReviewPeriodEpochs !== BigInt(0) ? message.defaultReviewPeriodEpochs?.toString() : undefined;
    obj.default_challenge_period_epochs = message.defaultChallengePeriodEpochs !== BigInt(0) ? message.defaultChallengePeriodEpochs?.toString() : undefined;
    obj.min_invitation_stake = message.minInvitationStake === "" ? undefined : message.minInvitationStake;
    obj.invitation_accountability_epochs = message.invitationAccountabilityEpochs !== BigInt(0) ? message.invitationAccountabilityEpochs?.toString() : undefined;
    obj.referral_reward_rate = message.referralRewardRate === "" ? undefined : message.referralRewardRate;
    obj.invitation_cost_multiplier = message.invitationCostMultiplier === "" ? undefined : message.invitationCostMultiplier;
    obj.trust_level_config = message.trustLevelConfig ? TrustLevelConfig.toAmino(message.trustLevelConfig) : undefined;
    obj.min_challenge_stake = message.minChallengeStake === "" ? undefined : message.minChallengeStake;
    obj.challenger_reward_rate = message.challengerRewardRate === "" ? undefined : message.challengerRewardRate;
    obj.jury_size = message.jurySize === 0 ? undefined : message.jurySize;
    obj.jury_super_majority = message.jurySuperMajority === "" ? undefined : message.jurySuperMajority;
    obj.min_juror_reputation = message.minJurorReputation === "" ? undefined : message.minJurorReputation;
    obj.simple_complexity_budget = message.simpleComplexityBudget === "" ? undefined : message.simpleComplexityBudget;
    obj.standard_complexity_budget = message.standardComplexityBudget === "" ? undefined : message.standardComplexityBudget;
    obj.complex_complexity_budget = message.complexComplexityBudget === "" ? undefined : message.complexComplexityBudget;
    obj.expert_complexity_budget = message.expertComplexityBudget === "" ? undefined : message.expertComplexityBudget;
    obj.solo_expert_bonus_rate = message.soloExpertBonusRate === "" ? undefined : message.soloExpertBonusRate;
    obj.interim_deadline_epochs = message.interimDeadlineEpochs !== BigInt(0) ? message.interimDeadlineEpochs?.toString() : undefined;
    obj.max_active_challenges_per_committee = message.maxActiveChallengesPerCommittee === 0 ? undefined : message.maxActiveChallengesPerCommittee;
    obj.max_new_challenges_per_epoch = message.maxNewChallengesPerEpoch === 0 ? undefined : message.maxNewChallengesPerEpoch;
    obj.challenge_queue_max_size = message.challengeQueueMaxSize === 0 ? undefined : message.challengeQueueMaxSize;
    obj.minor_slash_penalty = message.minorSlashPenalty === "" ? undefined : message.minorSlashPenalty;
    obj.moderate_slash_penalty = message.moderateSlashPenalty === "" ? undefined : message.moderateSlashPenalty;
    obj.severe_slash_penalty = message.severeSlashPenalty === "" ? undefined : message.severeSlashPenalty;
    obj.zeroing_slash_penalty = message.zeroingSlashPenalty === "" ? undefined : message.zeroingSlashPenalty;
    obj.project_staking_apy = message.projectStakingApy === "" ? undefined : message.projectStakingApy;
    obj.project_completion_bonus_rate = message.projectCompletionBonusRate === "" ? undefined : message.projectCompletionBonusRate;
    obj.member_stake_revenue_share = message.memberStakeRevenueShare === "" ? undefined : message.memberStakeRevenueShare;
    obj.tag_stake_revenue_share = message.tagStakeRevenueShare === "" ? undefined : message.tagStakeRevenueShare;
    obj.min_stake_duration_seconds = message.minStakeDurationSeconds !== BigInt(0) ? message.minStakeDurationSeconds?.toString() : undefined;
    obj.allow_self_member_stake = message.allowSelfMemberStake === false ? undefined : message.allowSelfMemberStake;
    obj.challenge_response_deadline_epochs = message.challengeResponseDeadlineEpochs !== BigInt(0) ? message.challengeResponseDeadlineEpochs?.toString() : undefined;
    obj.gift_cooldown_blocks = message.giftCooldownBlocks !== BigInt(0) ? message.giftCooldownBlocks?.toString() : undefined;
    obj.max_gifts_per_sender_epoch = message.maxGiftsPerSenderEpoch === "" ? undefined : message.maxGiftsPerSenderEpoch;
    obj.content_conviction_half_life_epochs = message.contentConvictionHalfLifeEpochs !== BigInt(0) ? message.contentConvictionHalfLifeEpochs?.toString() : undefined;
    obj.max_content_stake_per_member = message.maxContentStakePerMember === "" ? undefined : message.maxContentStakePerMember;
    obj.max_author_bond_per_content = message.maxAuthorBondPerContent === "" ? undefined : message.maxAuthorBondPerContent;
    obj.author_bond_slash_on_moderation = message.authorBondSlashOnModeration === false ? undefined : message.authorBondSlashOnModeration;
    obj.content_challenge_reward_share = message.contentChallengeRewardShare === "" ? undefined : message.contentChallengeRewardShare;
    obj.conviction_propagation_ratio = message.convictionPropagationRatio === "" ? undefined : message.convictionPropagationRatio;
    obj.max_tags_per_initiative = message.maxTagsPerInitiative === 0 ? undefined : message.maxTagsPerInitiative;
    obj.reputation_decay_rate = message.reputationDecayRate === "" ? undefined : message.reputationDecayRate;
    obj.max_conviction_share_per_member = message.maxConvictionSharePerMember === "" ? undefined : message.maxConvictionSharePerMember;
    obj.invitation_stake_burn_rate = message.invitationStakeBurnRate === "" ? undefined : message.invitationStakeBurnRate;
    obj.max_reputation_gain_per_epoch = message.maxReputationGainPerEpoch === "" ? undefined : message.maxReputationGainPerEpoch;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/rep/Params",
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
      typeUrl: "/sparkdream.rep.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseRepOperationalParams(): RepOperationalParams {
  return {
    epochBlocks: BigInt(0),
    seasonDurationEpochs: BigInt(0),
    stakingApy: "",
    unstakedDecayRate: "",
    transferTaxRate: "",
    maxTipAmount: "",
    maxTipsPerEpoch: 0,
    maxGiftAmount: "",
    giftOnlyToInvitees: false,
    minReputationMultiplier: "",
    defaultReviewPeriodEpochs: BigInt(0),
    defaultChallengePeriodEpochs: BigInt(0),
    minInvitationStake: "",
    invitationAccountabilityEpochs: BigInt(0),
    referralRewardRate: "",
    invitationCostMultiplier: "",
    minChallengeStake: "",
    challengerRewardRate: "",
    jurySize: 0,
    jurySuperMajority: "",
    minJurorReputation: "",
    simpleComplexityBudget: "",
    standardComplexityBudget: "",
    complexComplexityBudget: "",
    expertComplexityBudget: "",
    soloExpertBonusRate: "",
    interimDeadlineEpochs: BigInt(0),
    maxActiveChallengesPerCommittee: 0,
    maxNewChallengesPerEpoch: 0,
    challengeQueueMaxSize: 0,
    projectStakingApy: "",
    projectCompletionBonusRate: "",
    memberStakeRevenueShare: "",
    tagStakeRevenueShare: "",
    minStakeDurationSeconds: BigInt(0),
    allowSelfMemberStake: false,
    challengeResponseDeadlineEpochs: BigInt(0),
    giftCooldownBlocks: BigInt(0),
    maxGiftsPerSenderEpoch: "",
    contentConvictionHalfLifeEpochs: BigInt(0),
    maxContentStakePerMember: "",
    maxAuthorBondPerContent: "",
    authorBondSlashOnModeration: false,
    contentChallengeRewardShare: "",
    convictionPropagationRatio: "",
    maxTagsPerInitiative: 0,
    reputationDecayRate: "",
    maxConvictionSharePerMember: "",
    invitationStakeBurnRate: "",
    maxReputationGainPerEpoch: ""
  };
}
/**
 * RepOperationalParams defines the operational parameters that can be updated
 * by committee/council authority without full governance. These are day-to-day
 * tuning knobs that do not affect core economic incentives or tier structures.
 * @name RepOperationalParams
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RepOperationalParams
 */
export const RepOperationalParams = {
  typeUrl: "/sparkdream.rep.v1.RepOperationalParams",
  aminoType: "sparkdream/x/rep/RepOperationalParams",
  encode(message: RepOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochBlocks !== BigInt(0)) {
      writer.uint32(8).int64(message.epochBlocks);
    }
    if (message.seasonDurationEpochs !== BigInt(0)) {
      writer.uint32(16).int64(message.seasonDurationEpochs);
    }
    if (message.stakingApy !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.stakingApy, 18).atomics);
    }
    if (message.unstakedDecayRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.unstakedDecayRate, 18).atomics);
    }
    if (message.transferTaxRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.transferTaxRate, 18).atomics);
    }
    if (message.maxTipAmount !== "") {
      writer.uint32(50).string(message.maxTipAmount);
    }
    if (message.maxTipsPerEpoch !== 0) {
      writer.uint32(56).uint32(message.maxTipsPerEpoch);
    }
    if (message.maxGiftAmount !== "") {
      writer.uint32(66).string(message.maxGiftAmount);
    }
    if (message.giftOnlyToInvitees === true) {
      writer.uint32(72).bool(message.giftOnlyToInvitees);
    }
    if (message.minReputationMultiplier !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.minReputationMultiplier, 18).atomics);
    }
    if (message.defaultReviewPeriodEpochs !== BigInt(0)) {
      writer.uint32(88).int64(message.defaultReviewPeriodEpochs);
    }
    if (message.defaultChallengePeriodEpochs !== BigInt(0)) {
      writer.uint32(96).int64(message.defaultChallengePeriodEpochs);
    }
    if (message.minInvitationStake !== "") {
      writer.uint32(106).string(message.minInvitationStake);
    }
    if (message.invitationAccountabilityEpochs !== BigInt(0)) {
      writer.uint32(112).int64(message.invitationAccountabilityEpochs);
    }
    if (message.referralRewardRate !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.referralRewardRate, 18).atomics);
    }
    if (message.invitationCostMultiplier !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.invitationCostMultiplier, 18).atomics);
    }
    if (message.minChallengeStake !== "") {
      writer.uint32(138).string(message.minChallengeStake);
    }
    if (message.challengerRewardRate !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.challengerRewardRate, 18).atomics);
    }
    if (message.jurySize !== 0) {
      writer.uint32(152).uint32(message.jurySize);
    }
    if (message.jurySuperMajority !== "") {
      writer.uint32(162).string(Decimal.fromUserInput(message.jurySuperMajority, 18).atomics);
    }
    if (message.minJurorReputation !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.minJurorReputation, 18).atomics);
    }
    if (message.simpleComplexityBudget !== "") {
      writer.uint32(178).string(message.simpleComplexityBudget);
    }
    if (message.standardComplexityBudget !== "") {
      writer.uint32(186).string(message.standardComplexityBudget);
    }
    if (message.complexComplexityBudget !== "") {
      writer.uint32(194).string(message.complexComplexityBudget);
    }
    if (message.expertComplexityBudget !== "") {
      writer.uint32(202).string(message.expertComplexityBudget);
    }
    if (message.soloExpertBonusRate !== "") {
      writer.uint32(210).string(Decimal.fromUserInput(message.soloExpertBonusRate, 18).atomics);
    }
    if (message.interimDeadlineEpochs !== BigInt(0)) {
      writer.uint32(216).int64(message.interimDeadlineEpochs);
    }
    if (message.maxActiveChallengesPerCommittee !== 0) {
      writer.uint32(224).uint32(message.maxActiveChallengesPerCommittee);
    }
    if (message.maxNewChallengesPerEpoch !== 0) {
      writer.uint32(232).uint32(message.maxNewChallengesPerEpoch);
    }
    if (message.challengeQueueMaxSize !== 0) {
      writer.uint32(240).uint32(message.challengeQueueMaxSize);
    }
    if (message.projectStakingApy !== "") {
      writer.uint32(250).string(Decimal.fromUserInput(message.projectStakingApy, 18).atomics);
    }
    if (message.projectCompletionBonusRate !== "") {
      writer.uint32(258).string(Decimal.fromUserInput(message.projectCompletionBonusRate, 18).atomics);
    }
    if (message.memberStakeRevenueShare !== "") {
      writer.uint32(266).string(Decimal.fromUserInput(message.memberStakeRevenueShare, 18).atomics);
    }
    if (message.tagStakeRevenueShare !== "") {
      writer.uint32(274).string(Decimal.fromUserInput(message.tagStakeRevenueShare, 18).atomics);
    }
    if (message.minStakeDurationSeconds !== BigInt(0)) {
      writer.uint32(280).int64(message.minStakeDurationSeconds);
    }
    if (message.allowSelfMemberStake === true) {
      writer.uint32(288).bool(message.allowSelfMemberStake);
    }
    if (message.challengeResponseDeadlineEpochs !== BigInt(0)) {
      writer.uint32(296).int64(message.challengeResponseDeadlineEpochs);
    }
    if (message.giftCooldownBlocks !== BigInt(0)) {
      writer.uint32(304).int64(message.giftCooldownBlocks);
    }
    if (message.maxGiftsPerSenderEpoch !== "") {
      writer.uint32(314).string(message.maxGiftsPerSenderEpoch);
    }
    if (message.contentConvictionHalfLifeEpochs !== BigInt(0)) {
      writer.uint32(320).int64(message.contentConvictionHalfLifeEpochs);
    }
    if (message.maxContentStakePerMember !== "") {
      writer.uint32(330).string(message.maxContentStakePerMember);
    }
    if (message.maxAuthorBondPerContent !== "") {
      writer.uint32(338).string(message.maxAuthorBondPerContent);
    }
    if (message.authorBondSlashOnModeration === true) {
      writer.uint32(344).bool(message.authorBondSlashOnModeration);
    }
    if (message.contentChallengeRewardShare !== "") {
      writer.uint32(354).string(Decimal.fromUserInput(message.contentChallengeRewardShare, 18).atomics);
    }
    if (message.convictionPropagationRatio !== "") {
      writer.uint32(362).string(Decimal.fromUserInput(message.convictionPropagationRatio, 18).atomics);
    }
    if (message.maxTagsPerInitiative !== 0) {
      writer.uint32(368).uint32(message.maxTagsPerInitiative);
    }
    if (message.reputationDecayRate !== "") {
      writer.uint32(378).string(Decimal.fromUserInput(message.reputationDecayRate, 18).atomics);
    }
    if (message.maxConvictionSharePerMember !== "") {
      writer.uint32(386).string(Decimal.fromUserInput(message.maxConvictionSharePerMember, 18).atomics);
    }
    if (message.invitationStakeBurnRate !== "") {
      writer.uint32(394).string(Decimal.fromUserInput(message.invitationStakeBurnRate, 18).atomics);
    }
    if (message.maxReputationGainPerEpoch !== "") {
      writer.uint32(402).string(Decimal.fromUserInput(message.maxReputationGainPerEpoch, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RepOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepOperationalParams();
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
          message.stakingApy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.unstakedDecayRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.transferTaxRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.maxTipAmount = reader.string();
          break;
        case 7:
          message.maxTipsPerEpoch = reader.uint32();
          break;
        case 8:
          message.maxGiftAmount = reader.string();
          break;
        case 9:
          message.giftOnlyToInvitees = reader.bool();
          break;
        case 10:
          message.minReputationMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.defaultReviewPeriodEpochs = reader.int64();
          break;
        case 12:
          message.defaultChallengePeriodEpochs = reader.int64();
          break;
        case 13:
          message.minInvitationStake = reader.string();
          break;
        case 14:
          message.invitationAccountabilityEpochs = reader.int64();
          break;
        case 15:
          message.referralRewardRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.invitationCostMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 17:
          message.minChallengeStake = reader.string();
          break;
        case 18:
          message.challengerRewardRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.jurySize = reader.uint32();
          break;
        case 20:
          message.jurySuperMajority = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 21:
          message.minJurorReputation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 22:
          message.simpleComplexityBudget = reader.string();
          break;
        case 23:
          message.standardComplexityBudget = reader.string();
          break;
        case 24:
          message.complexComplexityBudget = reader.string();
          break;
        case 25:
          message.expertComplexityBudget = reader.string();
          break;
        case 26:
          message.soloExpertBonusRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 27:
          message.interimDeadlineEpochs = reader.int64();
          break;
        case 28:
          message.maxActiveChallengesPerCommittee = reader.uint32();
          break;
        case 29:
          message.maxNewChallengesPerEpoch = reader.uint32();
          break;
        case 30:
          message.challengeQueueMaxSize = reader.uint32();
          break;
        case 31:
          message.projectStakingApy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 32:
          message.projectCompletionBonusRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 33:
          message.memberStakeRevenueShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 34:
          message.tagStakeRevenueShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 35:
          message.minStakeDurationSeconds = reader.int64();
          break;
        case 36:
          message.allowSelfMemberStake = reader.bool();
          break;
        case 37:
          message.challengeResponseDeadlineEpochs = reader.int64();
          break;
        case 38:
          message.giftCooldownBlocks = reader.int64();
          break;
        case 39:
          message.maxGiftsPerSenderEpoch = reader.string();
          break;
        case 40:
          message.contentConvictionHalfLifeEpochs = reader.int64();
          break;
        case 41:
          message.maxContentStakePerMember = reader.string();
          break;
        case 42:
          message.maxAuthorBondPerContent = reader.string();
          break;
        case 43:
          message.authorBondSlashOnModeration = reader.bool();
          break;
        case 44:
          message.contentChallengeRewardShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 45:
          message.convictionPropagationRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 46:
          message.maxTagsPerInitiative = reader.uint32();
          break;
        case 47:
          message.reputationDecayRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 48:
          message.maxConvictionSharePerMember = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 49:
          message.invitationStakeBurnRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 50:
          message.maxReputationGainPerEpoch = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RepOperationalParams>): RepOperationalParams {
    const message = createBaseRepOperationalParams();
    message.epochBlocks = object.epochBlocks !== undefined && object.epochBlocks !== null ? BigInt(object.epochBlocks.toString()) : BigInt(0);
    message.seasonDurationEpochs = object.seasonDurationEpochs !== undefined && object.seasonDurationEpochs !== null ? BigInt(object.seasonDurationEpochs.toString()) : BigInt(0);
    message.stakingApy = object.stakingApy ?? "";
    message.unstakedDecayRate = object.unstakedDecayRate ?? "";
    message.transferTaxRate = object.transferTaxRate ?? "";
    message.maxTipAmount = object.maxTipAmount ?? "";
    message.maxTipsPerEpoch = object.maxTipsPerEpoch ?? 0;
    message.maxGiftAmount = object.maxGiftAmount ?? "";
    message.giftOnlyToInvitees = object.giftOnlyToInvitees ?? false;
    message.minReputationMultiplier = object.minReputationMultiplier ?? "";
    message.defaultReviewPeriodEpochs = object.defaultReviewPeriodEpochs !== undefined && object.defaultReviewPeriodEpochs !== null ? BigInt(object.defaultReviewPeriodEpochs.toString()) : BigInt(0);
    message.defaultChallengePeriodEpochs = object.defaultChallengePeriodEpochs !== undefined && object.defaultChallengePeriodEpochs !== null ? BigInt(object.defaultChallengePeriodEpochs.toString()) : BigInt(0);
    message.minInvitationStake = object.minInvitationStake ?? "";
    message.invitationAccountabilityEpochs = object.invitationAccountabilityEpochs !== undefined && object.invitationAccountabilityEpochs !== null ? BigInt(object.invitationAccountabilityEpochs.toString()) : BigInt(0);
    message.referralRewardRate = object.referralRewardRate ?? "";
    message.invitationCostMultiplier = object.invitationCostMultiplier ?? "";
    message.minChallengeStake = object.minChallengeStake ?? "";
    message.challengerRewardRate = object.challengerRewardRate ?? "";
    message.jurySize = object.jurySize ?? 0;
    message.jurySuperMajority = object.jurySuperMajority ?? "";
    message.minJurorReputation = object.minJurorReputation ?? "";
    message.simpleComplexityBudget = object.simpleComplexityBudget ?? "";
    message.standardComplexityBudget = object.standardComplexityBudget ?? "";
    message.complexComplexityBudget = object.complexComplexityBudget ?? "";
    message.expertComplexityBudget = object.expertComplexityBudget ?? "";
    message.soloExpertBonusRate = object.soloExpertBonusRate ?? "";
    message.interimDeadlineEpochs = object.interimDeadlineEpochs !== undefined && object.interimDeadlineEpochs !== null ? BigInt(object.interimDeadlineEpochs.toString()) : BigInt(0);
    message.maxActiveChallengesPerCommittee = object.maxActiveChallengesPerCommittee ?? 0;
    message.maxNewChallengesPerEpoch = object.maxNewChallengesPerEpoch ?? 0;
    message.challengeQueueMaxSize = object.challengeQueueMaxSize ?? 0;
    message.projectStakingApy = object.projectStakingApy ?? "";
    message.projectCompletionBonusRate = object.projectCompletionBonusRate ?? "";
    message.memberStakeRevenueShare = object.memberStakeRevenueShare ?? "";
    message.tagStakeRevenueShare = object.tagStakeRevenueShare ?? "";
    message.minStakeDurationSeconds = object.minStakeDurationSeconds !== undefined && object.minStakeDurationSeconds !== null ? BigInt(object.minStakeDurationSeconds.toString()) : BigInt(0);
    message.allowSelfMemberStake = object.allowSelfMemberStake ?? false;
    message.challengeResponseDeadlineEpochs = object.challengeResponseDeadlineEpochs !== undefined && object.challengeResponseDeadlineEpochs !== null ? BigInt(object.challengeResponseDeadlineEpochs.toString()) : BigInt(0);
    message.giftCooldownBlocks = object.giftCooldownBlocks !== undefined && object.giftCooldownBlocks !== null ? BigInt(object.giftCooldownBlocks.toString()) : BigInt(0);
    message.maxGiftsPerSenderEpoch = object.maxGiftsPerSenderEpoch ?? "";
    message.contentConvictionHalfLifeEpochs = object.contentConvictionHalfLifeEpochs !== undefined && object.contentConvictionHalfLifeEpochs !== null ? BigInt(object.contentConvictionHalfLifeEpochs.toString()) : BigInt(0);
    message.maxContentStakePerMember = object.maxContentStakePerMember ?? "";
    message.maxAuthorBondPerContent = object.maxAuthorBondPerContent ?? "";
    message.authorBondSlashOnModeration = object.authorBondSlashOnModeration ?? false;
    message.contentChallengeRewardShare = object.contentChallengeRewardShare ?? "";
    message.convictionPropagationRatio = object.convictionPropagationRatio ?? "";
    message.maxTagsPerInitiative = object.maxTagsPerInitiative ?? 0;
    message.reputationDecayRate = object.reputationDecayRate ?? "";
    message.maxConvictionSharePerMember = object.maxConvictionSharePerMember ?? "";
    message.invitationStakeBurnRate = object.invitationStakeBurnRate ?? "";
    message.maxReputationGainPerEpoch = object.maxReputationGainPerEpoch ?? "";
    return message;
  },
  fromAmino(object: RepOperationalParamsAmino): RepOperationalParams {
    const message = createBaseRepOperationalParams();
    if (object.epoch_blocks !== undefined && object.epoch_blocks !== null) {
      message.epochBlocks = BigInt(object.epoch_blocks);
    }
    if (object.season_duration_epochs !== undefined && object.season_duration_epochs !== null) {
      message.seasonDurationEpochs = BigInt(object.season_duration_epochs);
    }
    if (object.staking_apy !== undefined && object.staking_apy !== null) {
      message.stakingApy = object.staking_apy;
    }
    if (object.unstaked_decay_rate !== undefined && object.unstaked_decay_rate !== null) {
      message.unstakedDecayRate = object.unstaked_decay_rate;
    }
    if (object.transfer_tax_rate !== undefined && object.transfer_tax_rate !== null) {
      message.transferTaxRate = object.transfer_tax_rate;
    }
    if (object.max_tip_amount !== undefined && object.max_tip_amount !== null) {
      message.maxTipAmount = object.max_tip_amount;
    }
    if (object.max_tips_per_epoch !== undefined && object.max_tips_per_epoch !== null) {
      message.maxTipsPerEpoch = object.max_tips_per_epoch;
    }
    if (object.max_gift_amount !== undefined && object.max_gift_amount !== null) {
      message.maxGiftAmount = object.max_gift_amount;
    }
    if (object.gift_only_to_invitees !== undefined && object.gift_only_to_invitees !== null) {
      message.giftOnlyToInvitees = object.gift_only_to_invitees;
    }
    if (object.min_reputation_multiplier !== undefined && object.min_reputation_multiplier !== null) {
      message.minReputationMultiplier = object.min_reputation_multiplier;
    }
    if (object.default_review_period_epochs !== undefined && object.default_review_period_epochs !== null) {
      message.defaultReviewPeriodEpochs = BigInt(object.default_review_period_epochs);
    }
    if (object.default_challenge_period_epochs !== undefined && object.default_challenge_period_epochs !== null) {
      message.defaultChallengePeriodEpochs = BigInt(object.default_challenge_period_epochs);
    }
    if (object.min_invitation_stake !== undefined && object.min_invitation_stake !== null) {
      message.minInvitationStake = object.min_invitation_stake;
    }
    if (object.invitation_accountability_epochs !== undefined && object.invitation_accountability_epochs !== null) {
      message.invitationAccountabilityEpochs = BigInt(object.invitation_accountability_epochs);
    }
    if (object.referral_reward_rate !== undefined && object.referral_reward_rate !== null) {
      message.referralRewardRate = object.referral_reward_rate;
    }
    if (object.invitation_cost_multiplier !== undefined && object.invitation_cost_multiplier !== null) {
      message.invitationCostMultiplier = object.invitation_cost_multiplier;
    }
    if (object.min_challenge_stake !== undefined && object.min_challenge_stake !== null) {
      message.minChallengeStake = object.min_challenge_stake;
    }
    if (object.challenger_reward_rate !== undefined && object.challenger_reward_rate !== null) {
      message.challengerRewardRate = object.challenger_reward_rate;
    }
    if (object.jury_size !== undefined && object.jury_size !== null) {
      message.jurySize = object.jury_size;
    }
    if (object.jury_super_majority !== undefined && object.jury_super_majority !== null) {
      message.jurySuperMajority = object.jury_super_majority;
    }
    if (object.min_juror_reputation !== undefined && object.min_juror_reputation !== null) {
      message.minJurorReputation = object.min_juror_reputation;
    }
    if (object.simple_complexity_budget !== undefined && object.simple_complexity_budget !== null) {
      message.simpleComplexityBudget = object.simple_complexity_budget;
    }
    if (object.standard_complexity_budget !== undefined && object.standard_complexity_budget !== null) {
      message.standardComplexityBudget = object.standard_complexity_budget;
    }
    if (object.complex_complexity_budget !== undefined && object.complex_complexity_budget !== null) {
      message.complexComplexityBudget = object.complex_complexity_budget;
    }
    if (object.expert_complexity_budget !== undefined && object.expert_complexity_budget !== null) {
      message.expertComplexityBudget = object.expert_complexity_budget;
    }
    if (object.solo_expert_bonus_rate !== undefined && object.solo_expert_bonus_rate !== null) {
      message.soloExpertBonusRate = object.solo_expert_bonus_rate;
    }
    if (object.interim_deadline_epochs !== undefined && object.interim_deadline_epochs !== null) {
      message.interimDeadlineEpochs = BigInt(object.interim_deadline_epochs);
    }
    if (object.max_active_challenges_per_committee !== undefined && object.max_active_challenges_per_committee !== null) {
      message.maxActiveChallengesPerCommittee = object.max_active_challenges_per_committee;
    }
    if (object.max_new_challenges_per_epoch !== undefined && object.max_new_challenges_per_epoch !== null) {
      message.maxNewChallengesPerEpoch = object.max_new_challenges_per_epoch;
    }
    if (object.challenge_queue_max_size !== undefined && object.challenge_queue_max_size !== null) {
      message.challengeQueueMaxSize = object.challenge_queue_max_size;
    }
    if (object.project_staking_apy !== undefined && object.project_staking_apy !== null) {
      message.projectStakingApy = object.project_staking_apy;
    }
    if (object.project_completion_bonus_rate !== undefined && object.project_completion_bonus_rate !== null) {
      message.projectCompletionBonusRate = object.project_completion_bonus_rate;
    }
    if (object.member_stake_revenue_share !== undefined && object.member_stake_revenue_share !== null) {
      message.memberStakeRevenueShare = object.member_stake_revenue_share;
    }
    if (object.tag_stake_revenue_share !== undefined && object.tag_stake_revenue_share !== null) {
      message.tagStakeRevenueShare = object.tag_stake_revenue_share;
    }
    if (object.min_stake_duration_seconds !== undefined && object.min_stake_duration_seconds !== null) {
      message.minStakeDurationSeconds = BigInt(object.min_stake_duration_seconds);
    }
    if (object.allow_self_member_stake !== undefined && object.allow_self_member_stake !== null) {
      message.allowSelfMemberStake = object.allow_self_member_stake;
    }
    if (object.challenge_response_deadline_epochs !== undefined && object.challenge_response_deadline_epochs !== null) {
      message.challengeResponseDeadlineEpochs = BigInt(object.challenge_response_deadline_epochs);
    }
    if (object.gift_cooldown_blocks !== undefined && object.gift_cooldown_blocks !== null) {
      message.giftCooldownBlocks = BigInt(object.gift_cooldown_blocks);
    }
    if (object.max_gifts_per_sender_epoch !== undefined && object.max_gifts_per_sender_epoch !== null) {
      message.maxGiftsPerSenderEpoch = object.max_gifts_per_sender_epoch;
    }
    if (object.content_conviction_half_life_epochs !== undefined && object.content_conviction_half_life_epochs !== null) {
      message.contentConvictionHalfLifeEpochs = BigInt(object.content_conviction_half_life_epochs);
    }
    if (object.max_content_stake_per_member !== undefined && object.max_content_stake_per_member !== null) {
      message.maxContentStakePerMember = object.max_content_stake_per_member;
    }
    if (object.max_author_bond_per_content !== undefined && object.max_author_bond_per_content !== null) {
      message.maxAuthorBondPerContent = object.max_author_bond_per_content;
    }
    if (object.author_bond_slash_on_moderation !== undefined && object.author_bond_slash_on_moderation !== null) {
      message.authorBondSlashOnModeration = object.author_bond_slash_on_moderation;
    }
    if (object.content_challenge_reward_share !== undefined && object.content_challenge_reward_share !== null) {
      message.contentChallengeRewardShare = object.content_challenge_reward_share;
    }
    if (object.conviction_propagation_ratio !== undefined && object.conviction_propagation_ratio !== null) {
      message.convictionPropagationRatio = object.conviction_propagation_ratio;
    }
    if (object.max_tags_per_initiative !== undefined && object.max_tags_per_initiative !== null) {
      message.maxTagsPerInitiative = object.max_tags_per_initiative;
    }
    if (object.reputation_decay_rate !== undefined && object.reputation_decay_rate !== null) {
      message.reputationDecayRate = object.reputation_decay_rate;
    }
    if (object.max_conviction_share_per_member !== undefined && object.max_conviction_share_per_member !== null) {
      message.maxConvictionSharePerMember = object.max_conviction_share_per_member;
    }
    if (object.invitation_stake_burn_rate !== undefined && object.invitation_stake_burn_rate !== null) {
      message.invitationStakeBurnRate = object.invitation_stake_burn_rate;
    }
    if (object.max_reputation_gain_per_epoch !== undefined && object.max_reputation_gain_per_epoch !== null) {
      message.maxReputationGainPerEpoch = object.max_reputation_gain_per_epoch;
    }
    return message;
  },
  toAmino(message: RepOperationalParams): RepOperationalParamsAmino {
    const obj: any = {};
    obj.epoch_blocks = message.epochBlocks !== BigInt(0) ? message.epochBlocks?.toString() : undefined;
    obj.season_duration_epochs = message.seasonDurationEpochs !== BigInt(0) ? message.seasonDurationEpochs?.toString() : undefined;
    obj.staking_apy = message.stakingApy === "" ? undefined : message.stakingApy;
    obj.unstaked_decay_rate = message.unstakedDecayRate === "" ? undefined : message.unstakedDecayRate;
    obj.transfer_tax_rate = message.transferTaxRate === "" ? undefined : message.transferTaxRate;
    obj.max_tip_amount = message.maxTipAmount === "" ? undefined : message.maxTipAmount;
    obj.max_tips_per_epoch = message.maxTipsPerEpoch === 0 ? undefined : message.maxTipsPerEpoch;
    obj.max_gift_amount = message.maxGiftAmount === "" ? undefined : message.maxGiftAmount;
    obj.gift_only_to_invitees = message.giftOnlyToInvitees === false ? undefined : message.giftOnlyToInvitees;
    obj.min_reputation_multiplier = message.minReputationMultiplier === "" ? undefined : message.minReputationMultiplier;
    obj.default_review_period_epochs = message.defaultReviewPeriodEpochs !== BigInt(0) ? message.defaultReviewPeriodEpochs?.toString() : undefined;
    obj.default_challenge_period_epochs = message.defaultChallengePeriodEpochs !== BigInt(0) ? message.defaultChallengePeriodEpochs?.toString() : undefined;
    obj.min_invitation_stake = message.minInvitationStake === "" ? undefined : message.minInvitationStake;
    obj.invitation_accountability_epochs = message.invitationAccountabilityEpochs !== BigInt(0) ? message.invitationAccountabilityEpochs?.toString() : undefined;
    obj.referral_reward_rate = message.referralRewardRate === "" ? undefined : message.referralRewardRate;
    obj.invitation_cost_multiplier = message.invitationCostMultiplier === "" ? undefined : message.invitationCostMultiplier;
    obj.min_challenge_stake = message.minChallengeStake === "" ? undefined : message.minChallengeStake;
    obj.challenger_reward_rate = message.challengerRewardRate === "" ? undefined : message.challengerRewardRate;
    obj.jury_size = message.jurySize === 0 ? undefined : message.jurySize;
    obj.jury_super_majority = message.jurySuperMajority === "" ? undefined : message.jurySuperMajority;
    obj.min_juror_reputation = message.minJurorReputation === "" ? undefined : message.minJurorReputation;
    obj.simple_complexity_budget = message.simpleComplexityBudget === "" ? undefined : message.simpleComplexityBudget;
    obj.standard_complexity_budget = message.standardComplexityBudget === "" ? undefined : message.standardComplexityBudget;
    obj.complex_complexity_budget = message.complexComplexityBudget === "" ? undefined : message.complexComplexityBudget;
    obj.expert_complexity_budget = message.expertComplexityBudget === "" ? undefined : message.expertComplexityBudget;
    obj.solo_expert_bonus_rate = message.soloExpertBonusRate === "" ? undefined : message.soloExpertBonusRate;
    obj.interim_deadline_epochs = message.interimDeadlineEpochs !== BigInt(0) ? message.interimDeadlineEpochs?.toString() : undefined;
    obj.max_active_challenges_per_committee = message.maxActiveChallengesPerCommittee === 0 ? undefined : message.maxActiveChallengesPerCommittee;
    obj.max_new_challenges_per_epoch = message.maxNewChallengesPerEpoch === 0 ? undefined : message.maxNewChallengesPerEpoch;
    obj.challenge_queue_max_size = message.challengeQueueMaxSize === 0 ? undefined : message.challengeQueueMaxSize;
    obj.project_staking_apy = message.projectStakingApy === "" ? undefined : message.projectStakingApy;
    obj.project_completion_bonus_rate = message.projectCompletionBonusRate === "" ? undefined : message.projectCompletionBonusRate;
    obj.member_stake_revenue_share = message.memberStakeRevenueShare === "" ? undefined : message.memberStakeRevenueShare;
    obj.tag_stake_revenue_share = message.tagStakeRevenueShare === "" ? undefined : message.tagStakeRevenueShare;
    obj.min_stake_duration_seconds = message.minStakeDurationSeconds !== BigInt(0) ? message.minStakeDurationSeconds?.toString() : undefined;
    obj.allow_self_member_stake = message.allowSelfMemberStake === false ? undefined : message.allowSelfMemberStake;
    obj.challenge_response_deadline_epochs = message.challengeResponseDeadlineEpochs !== BigInt(0) ? message.challengeResponseDeadlineEpochs?.toString() : undefined;
    obj.gift_cooldown_blocks = message.giftCooldownBlocks !== BigInt(0) ? message.giftCooldownBlocks?.toString() : undefined;
    obj.max_gifts_per_sender_epoch = message.maxGiftsPerSenderEpoch === "" ? undefined : message.maxGiftsPerSenderEpoch;
    obj.content_conviction_half_life_epochs = message.contentConvictionHalfLifeEpochs !== BigInt(0) ? message.contentConvictionHalfLifeEpochs?.toString() : undefined;
    obj.max_content_stake_per_member = message.maxContentStakePerMember === "" ? undefined : message.maxContentStakePerMember;
    obj.max_author_bond_per_content = message.maxAuthorBondPerContent === "" ? undefined : message.maxAuthorBondPerContent;
    obj.author_bond_slash_on_moderation = message.authorBondSlashOnModeration === false ? undefined : message.authorBondSlashOnModeration;
    obj.content_challenge_reward_share = message.contentChallengeRewardShare === "" ? undefined : message.contentChallengeRewardShare;
    obj.conviction_propagation_ratio = message.convictionPropagationRatio === "" ? undefined : message.convictionPropagationRatio;
    obj.max_tags_per_initiative = message.maxTagsPerInitiative === 0 ? undefined : message.maxTagsPerInitiative;
    obj.reputation_decay_rate = message.reputationDecayRate === "" ? undefined : message.reputationDecayRate;
    obj.max_conviction_share_per_member = message.maxConvictionSharePerMember === "" ? undefined : message.maxConvictionSharePerMember;
    obj.invitation_stake_burn_rate = message.invitationStakeBurnRate === "" ? undefined : message.invitationStakeBurnRate;
    obj.max_reputation_gain_per_epoch = message.maxReputationGainPerEpoch === "" ? undefined : message.maxReputationGainPerEpoch;
    return obj;
  },
  fromAminoMsg(object: RepOperationalParamsAminoMsg): RepOperationalParams {
    return RepOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: RepOperationalParams): RepOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/rep/RepOperationalParams",
      value: RepOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: RepOperationalParamsProtoMsg): RepOperationalParams {
    return RepOperationalParams.decode(message.value);
  },
  toProto(message: RepOperationalParams): Uint8Array {
    return RepOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: RepOperationalParams): RepOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.RepOperationalParams",
      value: RepOperationalParams.encode(message).finish()
    };
  }
};