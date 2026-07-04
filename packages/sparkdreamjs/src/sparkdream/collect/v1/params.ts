//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Params
 */
export interface Params {
  /**
   * --- Collection limits (tiered) — GOVERNANCE ONLY ---
   */
  maxCollectionsBase: number;
  maxCollectionsPerTrustLevel: number;
  /**
   * --- Size limits — GOVERNANCE ONLY ---
   */
  maxItemsPerCollection: number;
  maxTitleLength: number;
  maxNameLength: number;
  maxDescriptionLength: number;
  maxTagLength: number;
  maxTagsPerCollection: number;
  maxAttributesPerItem: number;
  maxAttributeKeyLength: number;
  maxAttributeValueLength: number;
  maxReferenceFieldLength: number;
  maxEncryptedDataSize: number;
  maxCollaboratorsPerCollection: number;
  maxBatchSize: number;
  maxTtlBlocks: bigint;
  maxNonMemberTtlBlocks: bigint;
  /**
   * --- Fee parameters (SPARK) — OPERATIONAL ---
   */
  baseCollectionDeposit: string;
  perItemDeposit: string;
  perItemSpamTax: string;
  /**
   * --- Sponsorship parameters — OPERATIONAL ---
   */
  sponsorFee: string;
  minSponsorTrustLevel: string;
  sponsorshipRequestTtlBlocks: bigint;
  /**
   * --- Curation parameters — OPERATIONAL ---
   */
  minCuratorBond: string;
  minCuratorTrustLevel: string;
  minCuratorAgeBlocks: bigint;
  maxTagsPerReview: number;
  maxReviewCommentLength: number;
  maxReviewsPerCollection: number;
  curatorSlashFraction: string;
  challengeWindowBlocks: bigint;
  challengeDeposit: string;
  maxChallengeReasonLength: number;
  /**
   * --- EndBlocker — GOVERNANCE ONLY ---
   */
  maxPrunePerBlock: number;
  challengeRewardFraction: string;
  /**
   * --- Reaction parameters — OPERATIONAL ---
   */
  downvoteCost: string;
  maxUpvotesPerDay: number;
  maxDownvotesPerDay: number;
  /**
   * --- Flagging parameters — OPERATIONAL ---
   */
  flagReviewThreshold: number;
  maxFlagsPerDay: number;
  maxFlaggersPerTarget: number;
  flagExpirationBlocks: bigint;
  maxFlagReasonLength: number;
  /**
   * --- Sentinel moderation parameters — OPERATIONAL ---
   */
  sentinelCommitAmount: string;
  hideExpiryBlocks: bigint;
  appealFee: string;
  appealCooldownBlocks: bigint;
  appealDeadlineBlocks: bigint;
  /**
   * Blocks after HiddenAt during which the hiding sentinel may
   * self-correct via MsgUnhideContent. Must be < hide_expiry_blocks.
   * Default 14400 (~24h at 6s blocks).
   */
  sentinelUnhideWindowBlocks: bigint;
  /**
   * Max MsgHideContent actions per sentinel per day (block-height day,
   * BlocksPerDay = 14400). Collect's other hide throttle is the per-hide
   * bond reservation; this caps outright hide spam by a well-funded
   * sentinel. Default 50 (parity with forum's max_hides_per_epoch).
   * A self-correct unhide does NOT refund the day's slot.
   */
  maxHidesPerSentinelPerDay: number;
  /**
   * --- Endorsement parameters — OPERATIONAL ---
   */
  endorsementCreationFee: string;
  endorsementDreamStake: string;
  endorsementStakeDuration: bigint;
  endorsementExpiryBlocks: bigint;
  endorsementFeeEndorserShare: string;
  endorsementDeletionBurnFraction: string;
  /**
   * --- Conviction renewal parameters — OPERATIONAL ---
   */
  convictionRenewalThreshold: string;
  convictionRenewalPeriod: bigint;
  /**
   * --- Pinning parameters — OPERATIONAL ---
   */
  pinMinTrustLevel: number;
  /**
   * Max pins per address per day (default: 10)
   */
  maxPinsPerDay: number;
  /**
   * curator_demotion_cooldown is the number of seconds a DEMOTED curator
   * must wait before re-bonding.
   */
  curatorDemotionCooldown: bigint;
  /**
   * curator_demotion_threshold is the bond floor (DREAM) below which a
   * curator transitions from RECOVERY to DEMOTED.
   */
  curatorDemotionThreshold: string;
  /**
   * curator_overturn_demotion_streak is the number of consecutive overturned
   * challenge outcomes against a curator before they are demoted. Zero = no
   * streak-based demotion.
   */
  curatorOverturnDemotionStreak: bigint;
  /**
   * curator_unbond_cooldown is the number of seconds a curator's bond stays
   * locked and slashable after MsgUnbondRole. During the cooldown the
   * BondedRole status is UNBONDING and MsgRateCollection refuses authority.
   * Propagated to x/rep BondedRoleConfig via SyncCuratorBondedRoleConfig.
   * Zero = immediate withdrawal (legacy behavior).
   */
  curatorUnbondCooldown: bigint;
  /**
   * make_permanent_min_trust_level is the minimum trust level a caller of
   * MsgMakeCollectionPermanent must hold (0–4). Default PROVISIONAL (1) —
   * lower than pin_min_trust_level because preservation (committing the
   * deposit so the collection never expires) is a smaller curator action
   * than featuring it on the pinned list.
   */
  makePermanentMinTrustLevel: number;
  /**
   * max_make_permanent_per_day caps MsgMakeCollectionPermanent calls per
   * address per UTC day. Independent of max_pins_per_day — promoting an
   * ephemeral to permanent is a distinct curator action with its own quota.
   */
  maxMakePermanentPerDay: number;
  /**
   * non_member_collab_dream_stake is the DREAM amount the inviter locks per
   * non-member collaborator.
   */
  nonMemberCollabDreamStake: string;
  /**
   * non_member_collab_burn_fraction is the fraction of the inviter's locked
   * DREAM that is burned when the collaborator exits while the collection is
   * HIDDEN. Must be in [0, 1]. Default 0.5 — heavier than
   * endorsement_deletion_burn_fraction because HIDDEN is an explicit
   * misconduct signal, not just abandonment.
   */
  nonMemberCollabBurnFraction: string;
  /**
   * max_non_member_collaborators_per_collection caps how many slots within a
   * single collection may be held by non-member collaborators. Must be
   * <= max_collaborators_per_collection.
   */
  maxNonMemberCollaboratorsPerCollection: number;
  /**
   * max_promotions_per_block caps the membership-driven promotion-queue drain
   * (Phase 0 in EndBlocker). Each unit of work — releasing an inviter's
   * collaborator stake or flipping an owned ephemeral collection to permanent
   * — counts against this cap. Zero disables the drain. Mirrors the matching
   * forum/blog parameter.
   */
  maxPromotionsPerBlock: number;
  /**
   * endorser_rep_penalty is the per-tag rep deduction on an endorser when
   * their endorsed collection is hidden and the hide stands (sentinel hide
   * unappealed or appeal rejected). Fires alongside the BurnDREAM of the
   * endorsement stake.
   */
  endorserRepPenalty: string;
  /**
   * collab_inviter_rep_penalty is the per-tag rep deduction on a
   * collaborator-inviter when the collaborator exits a HIDDEN collection and
   * the inviter's stake is fractionally burned. Lower than
   * endorser_rep_penalty because vouching for a person's future contributions
   * is a weaker claim than vouching for specific content quality.
   */
  collabInviterRepPenalty: string;
  /**
   * author_rep_penalty is the per-tag rep deduction on a collection creator
   * when a sentinel hides their collection (fires alongside SlashAuthorBond).
   * Highest of the three because the author authored the bad content.
   */
  authorRepPenalty: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.collect.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Params
 */
export interface ParamsAmino {
  /**
   * --- Collection limits (tiered) — GOVERNANCE ONLY ---
   */
  max_collections_base?: number;
  max_collections_per_trust_level?: number;
  /**
   * --- Size limits — GOVERNANCE ONLY ---
   */
  max_items_per_collection?: number;
  max_title_length?: number;
  max_name_length?: number;
  max_description_length?: number;
  max_tag_length?: number;
  max_tags_per_collection?: number;
  max_attributes_per_item?: number;
  max_attribute_key_length?: number;
  max_attribute_value_length?: number;
  max_reference_field_length?: number;
  max_encrypted_data_size?: number;
  max_collaborators_per_collection?: number;
  max_batch_size?: number;
  max_ttl_blocks?: string;
  max_non_member_ttl_blocks?: string;
  /**
   * --- Fee parameters (SPARK) — OPERATIONAL ---
   */
  base_collection_deposit?: string;
  per_item_deposit?: string;
  per_item_spam_tax?: string;
  /**
   * --- Sponsorship parameters — OPERATIONAL ---
   */
  sponsor_fee?: string;
  min_sponsor_trust_level?: string;
  sponsorship_request_ttl_blocks?: string;
  /**
   * --- Curation parameters — OPERATIONAL ---
   */
  min_curator_bond?: string;
  min_curator_trust_level?: string;
  min_curator_age_blocks?: string;
  max_tags_per_review?: number;
  max_review_comment_length?: number;
  max_reviews_per_collection?: number;
  curator_slash_fraction?: string;
  challenge_window_blocks?: string;
  challenge_deposit?: string;
  max_challenge_reason_length?: number;
  /**
   * --- EndBlocker — GOVERNANCE ONLY ---
   */
  max_prune_per_block?: number;
  challenge_reward_fraction?: string;
  /**
   * --- Reaction parameters — OPERATIONAL ---
   */
  downvote_cost?: string;
  max_upvotes_per_day?: number;
  max_downvotes_per_day?: number;
  /**
   * --- Flagging parameters — OPERATIONAL ---
   */
  flag_review_threshold?: number;
  max_flags_per_day?: number;
  max_flaggers_per_target?: number;
  flag_expiration_blocks?: string;
  max_flag_reason_length?: number;
  /**
   * --- Sentinel moderation parameters — OPERATIONAL ---
   */
  sentinel_commit_amount?: string;
  hide_expiry_blocks?: string;
  appeal_fee?: string;
  appeal_cooldown_blocks?: string;
  appeal_deadline_blocks?: string;
  /**
   * Blocks after HiddenAt during which the hiding sentinel may
   * self-correct via MsgUnhideContent. Must be < hide_expiry_blocks.
   * Default 14400 (~24h at 6s blocks).
   */
  sentinel_unhide_window_blocks?: string;
  /**
   * Max MsgHideContent actions per sentinel per day (block-height day,
   * BlocksPerDay = 14400). Collect's other hide throttle is the per-hide
   * bond reservation; this caps outright hide spam by a well-funded
   * sentinel. Default 50 (parity with forum's max_hides_per_epoch).
   * A self-correct unhide does NOT refund the day's slot.
   */
  max_hides_per_sentinel_per_day?: number;
  /**
   * --- Endorsement parameters — OPERATIONAL ---
   */
  endorsement_creation_fee?: string;
  endorsement_dream_stake?: string;
  endorsement_stake_duration?: string;
  endorsement_expiry_blocks?: string;
  endorsement_fee_endorser_share?: string;
  endorsement_deletion_burn_fraction?: string;
  /**
   * --- Conviction renewal parameters — OPERATIONAL ---
   */
  conviction_renewal_threshold?: string;
  conviction_renewal_period?: string;
  /**
   * --- Pinning parameters — OPERATIONAL ---
   */
  pin_min_trust_level?: number;
  /**
   * Max pins per address per day (default: 10)
   */
  max_pins_per_day?: number;
  /**
   * curator_demotion_cooldown is the number of seconds a DEMOTED curator
   * must wait before re-bonding.
   */
  curator_demotion_cooldown?: string;
  /**
   * curator_demotion_threshold is the bond floor (DREAM) below which a
   * curator transitions from RECOVERY to DEMOTED.
   */
  curator_demotion_threshold?: string;
  /**
   * curator_overturn_demotion_streak is the number of consecutive overturned
   * challenge outcomes against a curator before they are demoted. Zero = no
   * streak-based demotion.
   */
  curator_overturn_demotion_streak?: string;
  /**
   * curator_unbond_cooldown is the number of seconds a curator's bond stays
   * locked and slashable after MsgUnbondRole. During the cooldown the
   * BondedRole status is UNBONDING and MsgRateCollection refuses authority.
   * Propagated to x/rep BondedRoleConfig via SyncCuratorBondedRoleConfig.
   * Zero = immediate withdrawal (legacy behavior).
   */
  curator_unbond_cooldown?: string;
  /**
   * make_permanent_min_trust_level is the minimum trust level a caller of
   * MsgMakeCollectionPermanent must hold (0–4). Default PROVISIONAL (1) —
   * lower than pin_min_trust_level because preservation (committing the
   * deposit so the collection never expires) is a smaller curator action
   * than featuring it on the pinned list.
   */
  make_permanent_min_trust_level?: number;
  /**
   * max_make_permanent_per_day caps MsgMakeCollectionPermanent calls per
   * address per UTC day. Independent of max_pins_per_day — promoting an
   * ephemeral to permanent is a distinct curator action with its own quota.
   */
  max_make_permanent_per_day?: number;
  /**
   * non_member_collab_dream_stake is the DREAM amount the inviter locks per
   * non-member collaborator.
   */
  non_member_collab_dream_stake?: string;
  /**
   * non_member_collab_burn_fraction is the fraction of the inviter's locked
   * DREAM that is burned when the collaborator exits while the collection is
   * HIDDEN. Must be in [0, 1]. Default 0.5 — heavier than
   * endorsement_deletion_burn_fraction because HIDDEN is an explicit
   * misconduct signal, not just abandonment.
   */
  non_member_collab_burn_fraction?: string;
  /**
   * max_non_member_collaborators_per_collection caps how many slots within a
   * single collection may be held by non-member collaborators. Must be
   * <= max_collaborators_per_collection.
   */
  max_non_member_collaborators_per_collection?: number;
  /**
   * max_promotions_per_block caps the membership-driven promotion-queue drain
   * (Phase 0 in EndBlocker). Each unit of work — releasing an inviter's
   * collaborator stake or flipping an owned ephemeral collection to permanent
   * — counts against this cap. Zero disables the drain. Mirrors the matching
   * forum/blog parameter.
   */
  max_promotions_per_block?: number;
  /**
   * endorser_rep_penalty is the per-tag rep deduction on an endorser when
   * their endorsed collection is hidden and the hide stands (sentinel hide
   * unappealed or appeal rejected). Fires alongside the BurnDREAM of the
   * endorsement stake.
   */
  endorser_rep_penalty?: string;
  /**
   * collab_inviter_rep_penalty is the per-tag rep deduction on a
   * collaborator-inviter when the collaborator exits a HIDDEN collection and
   * the inviter's stake is fractionally burned. Lower than
   * endorser_rep_penalty because vouching for a person's future contributions
   * is a weaker claim than vouching for specific content quality.
   */
  collab_inviter_rep_penalty?: string;
  /**
   * author_rep_penalty is the per-tag rep deduction on a collection creator
   * when a sentinel hides their collection (fires alongside SlashAuthorBond).
   * Highest of the three because the author authored the bad content.
   */
  author_rep_penalty?: string;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/collect/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    maxCollectionsBase: 0,
    maxCollectionsPerTrustLevel: 0,
    maxItemsPerCollection: 0,
    maxTitleLength: 0,
    maxNameLength: 0,
    maxDescriptionLength: 0,
    maxTagLength: 0,
    maxTagsPerCollection: 0,
    maxAttributesPerItem: 0,
    maxAttributeKeyLength: 0,
    maxAttributeValueLength: 0,
    maxReferenceFieldLength: 0,
    maxEncryptedDataSize: 0,
    maxCollaboratorsPerCollection: 0,
    maxBatchSize: 0,
    maxTtlBlocks: BigInt(0),
    maxNonMemberTtlBlocks: BigInt(0),
    baseCollectionDeposit: "",
    perItemDeposit: "",
    perItemSpamTax: "",
    sponsorFee: "",
    minSponsorTrustLevel: "",
    sponsorshipRequestTtlBlocks: BigInt(0),
    minCuratorBond: "",
    minCuratorTrustLevel: "",
    minCuratorAgeBlocks: BigInt(0),
    maxTagsPerReview: 0,
    maxReviewCommentLength: 0,
    maxReviewsPerCollection: 0,
    curatorSlashFraction: "",
    challengeWindowBlocks: BigInt(0),
    challengeDeposit: "",
    maxChallengeReasonLength: 0,
    maxPrunePerBlock: 0,
    challengeRewardFraction: "",
    downvoteCost: "",
    maxUpvotesPerDay: 0,
    maxDownvotesPerDay: 0,
    flagReviewThreshold: 0,
    maxFlagsPerDay: 0,
    maxFlaggersPerTarget: 0,
    flagExpirationBlocks: BigInt(0),
    maxFlagReasonLength: 0,
    sentinelCommitAmount: "",
    hideExpiryBlocks: BigInt(0),
    appealFee: "",
    appealCooldownBlocks: BigInt(0),
    appealDeadlineBlocks: BigInt(0),
    sentinelUnhideWindowBlocks: BigInt(0),
    maxHidesPerSentinelPerDay: 0,
    endorsementCreationFee: "",
    endorsementDreamStake: "",
    endorsementStakeDuration: BigInt(0),
    endorsementExpiryBlocks: BigInt(0),
    endorsementFeeEndorserShare: "",
    endorsementDeletionBurnFraction: "",
    convictionRenewalThreshold: "",
    convictionRenewalPeriod: BigInt(0),
    pinMinTrustLevel: 0,
    maxPinsPerDay: 0,
    curatorDemotionCooldown: BigInt(0),
    curatorDemotionThreshold: "",
    curatorOverturnDemotionStreak: BigInt(0),
    curatorUnbondCooldown: BigInt(0),
    makePermanentMinTrustLevel: 0,
    maxMakePermanentPerDay: 0,
    nonMemberCollabDreamStake: "",
    nonMemberCollabBurnFraction: "",
    maxNonMemberCollaboratorsPerCollection: 0,
    maxPromotionsPerBlock: 0,
    endorserRepPenalty: "",
    collabInviterRepPenalty: "",
    authorRepPenalty: ""
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.collect.v1
 * @see proto type: sparkdream.collect.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.collect.v1.Params",
  aminoType: "sparkdream/x/collect/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxCollectionsBase !== 0) {
      writer.uint32(8).uint32(message.maxCollectionsBase);
    }
    if (message.maxCollectionsPerTrustLevel !== 0) {
      writer.uint32(16).uint32(message.maxCollectionsPerTrustLevel);
    }
    if (message.maxItemsPerCollection !== 0) {
      writer.uint32(24).uint32(message.maxItemsPerCollection);
    }
    if (message.maxTitleLength !== 0) {
      writer.uint32(32).uint32(message.maxTitleLength);
    }
    if (message.maxNameLength !== 0) {
      writer.uint32(40).uint32(message.maxNameLength);
    }
    if (message.maxDescriptionLength !== 0) {
      writer.uint32(48).uint32(message.maxDescriptionLength);
    }
    if (message.maxTagLength !== 0) {
      writer.uint32(56).uint32(message.maxTagLength);
    }
    if (message.maxTagsPerCollection !== 0) {
      writer.uint32(64).uint32(message.maxTagsPerCollection);
    }
    if (message.maxAttributesPerItem !== 0) {
      writer.uint32(72).uint32(message.maxAttributesPerItem);
    }
    if (message.maxAttributeKeyLength !== 0) {
      writer.uint32(80).uint32(message.maxAttributeKeyLength);
    }
    if (message.maxAttributeValueLength !== 0) {
      writer.uint32(88).uint32(message.maxAttributeValueLength);
    }
    if (message.maxReferenceFieldLength !== 0) {
      writer.uint32(96).uint32(message.maxReferenceFieldLength);
    }
    if (message.maxEncryptedDataSize !== 0) {
      writer.uint32(104).uint32(message.maxEncryptedDataSize);
    }
    if (message.maxCollaboratorsPerCollection !== 0) {
      writer.uint32(112).uint32(message.maxCollaboratorsPerCollection);
    }
    if (message.maxBatchSize !== 0) {
      writer.uint32(120).uint32(message.maxBatchSize);
    }
    if (message.maxTtlBlocks !== BigInt(0)) {
      writer.uint32(128).int64(message.maxTtlBlocks);
    }
    if (message.maxNonMemberTtlBlocks !== BigInt(0)) {
      writer.uint32(136).int64(message.maxNonMemberTtlBlocks);
    }
    if (message.baseCollectionDeposit !== "") {
      writer.uint32(146).string(message.baseCollectionDeposit);
    }
    if (message.perItemDeposit !== "") {
      writer.uint32(154).string(message.perItemDeposit);
    }
    if (message.perItemSpamTax !== "") {
      writer.uint32(162).string(message.perItemSpamTax);
    }
    if (message.sponsorFee !== "") {
      writer.uint32(178).string(message.sponsorFee);
    }
    if (message.minSponsorTrustLevel !== "") {
      writer.uint32(186).string(message.minSponsorTrustLevel);
    }
    if (message.sponsorshipRequestTtlBlocks !== BigInt(0)) {
      writer.uint32(192).int64(message.sponsorshipRequestTtlBlocks);
    }
    if (message.minCuratorBond !== "") {
      writer.uint32(202).string(message.minCuratorBond);
    }
    if (message.minCuratorTrustLevel !== "") {
      writer.uint32(210).string(message.minCuratorTrustLevel);
    }
    if (message.minCuratorAgeBlocks !== BigInt(0)) {
      writer.uint32(216).int64(message.minCuratorAgeBlocks);
    }
    if (message.maxTagsPerReview !== 0) {
      writer.uint32(224).uint32(message.maxTagsPerReview);
    }
    if (message.maxReviewCommentLength !== 0) {
      writer.uint32(232).uint32(message.maxReviewCommentLength);
    }
    if (message.maxReviewsPerCollection !== 0) {
      writer.uint32(240).uint32(message.maxReviewsPerCollection);
    }
    if (message.curatorSlashFraction !== "") {
      writer.uint32(250).string(Decimal.fromUserInput(message.curatorSlashFraction, 18).atomics);
    }
    if (message.challengeWindowBlocks !== BigInt(0)) {
      writer.uint32(256).int64(message.challengeWindowBlocks);
    }
    if (message.challengeDeposit !== "") {
      writer.uint32(266).string(message.challengeDeposit);
    }
    if (message.maxChallengeReasonLength !== 0) {
      writer.uint32(272).uint32(message.maxChallengeReasonLength);
    }
    if (message.maxPrunePerBlock !== 0) {
      writer.uint32(280).uint32(message.maxPrunePerBlock);
    }
    if (message.challengeRewardFraction !== "") {
      writer.uint32(290).string(Decimal.fromUserInput(message.challengeRewardFraction, 18).atomics);
    }
    if (message.downvoteCost !== "") {
      writer.uint32(298).string(message.downvoteCost);
    }
    if (message.maxUpvotesPerDay !== 0) {
      writer.uint32(304).uint32(message.maxUpvotesPerDay);
    }
    if (message.maxDownvotesPerDay !== 0) {
      writer.uint32(312).uint32(message.maxDownvotesPerDay);
    }
    if (message.flagReviewThreshold !== 0) {
      writer.uint32(320).uint32(message.flagReviewThreshold);
    }
    if (message.maxFlagsPerDay !== 0) {
      writer.uint32(328).uint32(message.maxFlagsPerDay);
    }
    if (message.maxFlaggersPerTarget !== 0) {
      writer.uint32(336).uint32(message.maxFlaggersPerTarget);
    }
    if (message.flagExpirationBlocks !== BigInt(0)) {
      writer.uint32(344).int64(message.flagExpirationBlocks);
    }
    if (message.maxFlagReasonLength !== 0) {
      writer.uint32(352).uint32(message.maxFlagReasonLength);
    }
    if (message.sentinelCommitAmount !== "") {
      writer.uint32(362).string(message.sentinelCommitAmount);
    }
    if (message.hideExpiryBlocks !== BigInt(0)) {
      writer.uint32(368).int64(message.hideExpiryBlocks);
    }
    if (message.appealFee !== "") {
      writer.uint32(378).string(message.appealFee);
    }
    if (message.appealCooldownBlocks !== BigInt(0)) {
      writer.uint32(384).int64(message.appealCooldownBlocks);
    }
    if (message.appealDeadlineBlocks !== BigInt(0)) {
      writer.uint32(392).int64(message.appealDeadlineBlocks);
    }
    if (message.sentinelUnhideWindowBlocks !== BigInt(0)) {
      writer.uint32(608).int64(message.sentinelUnhideWindowBlocks);
    }
    if (message.maxHidesPerSentinelPerDay !== 0) {
      writer.uint32(616).uint32(message.maxHidesPerSentinelPerDay);
    }
    if (message.endorsementCreationFee !== "") {
      writer.uint32(402).string(message.endorsementCreationFee);
    }
    if (message.endorsementDreamStake !== "") {
      writer.uint32(410).string(message.endorsementDreamStake);
    }
    if (message.endorsementStakeDuration !== BigInt(0)) {
      writer.uint32(416).int64(message.endorsementStakeDuration);
    }
    if (message.endorsementExpiryBlocks !== BigInt(0)) {
      writer.uint32(424).int64(message.endorsementExpiryBlocks);
    }
    if (message.endorsementFeeEndorserShare !== "") {
      writer.uint32(434).string(Decimal.fromUserInput(message.endorsementFeeEndorserShare, 18).atomics);
    }
    if (message.endorsementDeletionBurnFraction !== "") {
      writer.uint32(442).string(Decimal.fromUserInput(message.endorsementDeletionBurnFraction, 18).atomics);
    }
    if (message.convictionRenewalThreshold !== "") {
      writer.uint32(450).string(Decimal.fromUserInput(message.convictionRenewalThreshold, 18).atomics);
    }
    if (message.convictionRenewalPeriod !== BigInt(0)) {
      writer.uint32(456).int64(message.convictionRenewalPeriod);
    }
    if (message.pinMinTrustLevel !== 0) {
      writer.uint32(488).uint32(message.pinMinTrustLevel);
    }
    if (message.maxPinsPerDay !== 0) {
      writer.uint32(496).uint32(message.maxPinsPerDay);
    }
    if (message.curatorDemotionCooldown !== BigInt(0)) {
      writer.uint32(504).int64(message.curatorDemotionCooldown);
    }
    if (message.curatorDemotionThreshold !== "") {
      writer.uint32(514).string(message.curatorDemotionThreshold);
    }
    if (message.curatorOverturnDemotionStreak !== BigInt(0)) {
      writer.uint32(520).uint64(message.curatorOverturnDemotionStreak);
    }
    if (message.curatorUnbondCooldown !== BigInt(0)) {
      writer.uint32(528).int64(message.curatorUnbondCooldown);
    }
    if (message.makePermanentMinTrustLevel !== 0) {
      writer.uint32(536).uint32(message.makePermanentMinTrustLevel);
    }
    if (message.maxMakePermanentPerDay !== 0) {
      writer.uint32(600).uint32(message.maxMakePermanentPerDay);
    }
    if (message.nonMemberCollabDreamStake !== "") {
      writer.uint32(546).string(message.nonMemberCollabDreamStake);
    }
    if (message.nonMemberCollabBurnFraction !== "") {
      writer.uint32(554).string(Decimal.fromUserInput(message.nonMemberCollabBurnFraction, 18).atomics);
    }
    if (message.maxNonMemberCollaboratorsPerCollection !== 0) {
      writer.uint32(560).uint32(message.maxNonMemberCollaboratorsPerCollection);
    }
    if (message.maxPromotionsPerBlock !== 0) {
      writer.uint32(568).uint32(message.maxPromotionsPerBlock);
    }
    if (message.endorserRepPenalty !== "") {
      writer.uint32(578).string(Decimal.fromUserInput(message.endorserRepPenalty, 18).atomics);
    }
    if (message.collabInviterRepPenalty !== "") {
      writer.uint32(586).string(Decimal.fromUserInput(message.collabInviterRepPenalty, 18).atomics);
    }
    if (message.authorRepPenalty !== "") {
      writer.uint32(594).string(Decimal.fromUserInput(message.authorRepPenalty, 18).atomics);
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
          message.maxCollectionsBase = reader.uint32();
          break;
        case 2:
          message.maxCollectionsPerTrustLevel = reader.uint32();
          break;
        case 3:
          message.maxItemsPerCollection = reader.uint32();
          break;
        case 4:
          message.maxTitleLength = reader.uint32();
          break;
        case 5:
          message.maxNameLength = reader.uint32();
          break;
        case 6:
          message.maxDescriptionLength = reader.uint32();
          break;
        case 7:
          message.maxTagLength = reader.uint32();
          break;
        case 8:
          message.maxTagsPerCollection = reader.uint32();
          break;
        case 9:
          message.maxAttributesPerItem = reader.uint32();
          break;
        case 10:
          message.maxAttributeKeyLength = reader.uint32();
          break;
        case 11:
          message.maxAttributeValueLength = reader.uint32();
          break;
        case 12:
          message.maxReferenceFieldLength = reader.uint32();
          break;
        case 13:
          message.maxEncryptedDataSize = reader.uint32();
          break;
        case 14:
          message.maxCollaboratorsPerCollection = reader.uint32();
          break;
        case 15:
          message.maxBatchSize = reader.uint32();
          break;
        case 16:
          message.maxTtlBlocks = reader.int64();
          break;
        case 17:
          message.maxNonMemberTtlBlocks = reader.int64();
          break;
        case 18:
          message.baseCollectionDeposit = reader.string();
          break;
        case 19:
          message.perItemDeposit = reader.string();
          break;
        case 20:
          message.perItemSpamTax = reader.string();
          break;
        case 22:
          message.sponsorFee = reader.string();
          break;
        case 23:
          message.minSponsorTrustLevel = reader.string();
          break;
        case 24:
          message.sponsorshipRequestTtlBlocks = reader.int64();
          break;
        case 25:
          message.minCuratorBond = reader.string();
          break;
        case 26:
          message.minCuratorTrustLevel = reader.string();
          break;
        case 27:
          message.minCuratorAgeBlocks = reader.int64();
          break;
        case 28:
          message.maxTagsPerReview = reader.uint32();
          break;
        case 29:
          message.maxReviewCommentLength = reader.uint32();
          break;
        case 30:
          message.maxReviewsPerCollection = reader.uint32();
          break;
        case 31:
          message.curatorSlashFraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 32:
          message.challengeWindowBlocks = reader.int64();
          break;
        case 33:
          message.challengeDeposit = reader.string();
          break;
        case 34:
          message.maxChallengeReasonLength = reader.uint32();
          break;
        case 35:
          message.maxPrunePerBlock = reader.uint32();
          break;
        case 36:
          message.challengeRewardFraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 37:
          message.downvoteCost = reader.string();
          break;
        case 38:
          message.maxUpvotesPerDay = reader.uint32();
          break;
        case 39:
          message.maxDownvotesPerDay = reader.uint32();
          break;
        case 40:
          message.flagReviewThreshold = reader.uint32();
          break;
        case 41:
          message.maxFlagsPerDay = reader.uint32();
          break;
        case 42:
          message.maxFlaggersPerTarget = reader.uint32();
          break;
        case 43:
          message.flagExpirationBlocks = reader.int64();
          break;
        case 44:
          message.maxFlagReasonLength = reader.uint32();
          break;
        case 45:
          message.sentinelCommitAmount = reader.string();
          break;
        case 46:
          message.hideExpiryBlocks = reader.int64();
          break;
        case 47:
          message.appealFee = reader.string();
          break;
        case 48:
          message.appealCooldownBlocks = reader.int64();
          break;
        case 49:
          message.appealDeadlineBlocks = reader.int64();
          break;
        case 76:
          message.sentinelUnhideWindowBlocks = reader.int64();
          break;
        case 77:
          message.maxHidesPerSentinelPerDay = reader.uint32();
          break;
        case 50:
          message.endorsementCreationFee = reader.string();
          break;
        case 51:
          message.endorsementDreamStake = reader.string();
          break;
        case 52:
          message.endorsementStakeDuration = reader.int64();
          break;
        case 53:
          message.endorsementExpiryBlocks = reader.int64();
          break;
        case 54:
          message.endorsementFeeEndorserShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 55:
          message.endorsementDeletionBurnFraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 56:
          message.convictionRenewalThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 57:
          message.convictionRenewalPeriod = reader.int64();
          break;
        case 61:
          message.pinMinTrustLevel = reader.uint32();
          break;
        case 62:
          message.maxPinsPerDay = reader.uint32();
          break;
        case 63:
          message.curatorDemotionCooldown = reader.int64();
          break;
        case 64:
          message.curatorDemotionThreshold = reader.string();
          break;
        case 65:
          message.curatorOverturnDemotionStreak = reader.uint64();
          break;
        case 66:
          message.curatorUnbondCooldown = reader.int64();
          break;
        case 67:
          message.makePermanentMinTrustLevel = reader.uint32();
          break;
        case 75:
          message.maxMakePermanentPerDay = reader.uint32();
          break;
        case 68:
          message.nonMemberCollabDreamStake = reader.string();
          break;
        case 69:
          message.nonMemberCollabBurnFraction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 70:
          message.maxNonMemberCollaboratorsPerCollection = reader.uint32();
          break;
        case 71:
          message.maxPromotionsPerBlock = reader.uint32();
          break;
        case 72:
          message.endorserRepPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 73:
          message.collabInviterRepPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 74:
          message.authorRepPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
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
    message.maxCollectionsBase = object.maxCollectionsBase ?? 0;
    message.maxCollectionsPerTrustLevel = object.maxCollectionsPerTrustLevel ?? 0;
    message.maxItemsPerCollection = object.maxItemsPerCollection ?? 0;
    message.maxTitleLength = object.maxTitleLength ?? 0;
    message.maxNameLength = object.maxNameLength ?? 0;
    message.maxDescriptionLength = object.maxDescriptionLength ?? 0;
    message.maxTagLength = object.maxTagLength ?? 0;
    message.maxTagsPerCollection = object.maxTagsPerCollection ?? 0;
    message.maxAttributesPerItem = object.maxAttributesPerItem ?? 0;
    message.maxAttributeKeyLength = object.maxAttributeKeyLength ?? 0;
    message.maxAttributeValueLength = object.maxAttributeValueLength ?? 0;
    message.maxReferenceFieldLength = object.maxReferenceFieldLength ?? 0;
    message.maxEncryptedDataSize = object.maxEncryptedDataSize ?? 0;
    message.maxCollaboratorsPerCollection = object.maxCollaboratorsPerCollection ?? 0;
    message.maxBatchSize = object.maxBatchSize ?? 0;
    message.maxTtlBlocks = object.maxTtlBlocks !== undefined && object.maxTtlBlocks !== null ? BigInt(object.maxTtlBlocks.toString()) : BigInt(0);
    message.maxNonMemberTtlBlocks = object.maxNonMemberTtlBlocks !== undefined && object.maxNonMemberTtlBlocks !== null ? BigInt(object.maxNonMemberTtlBlocks.toString()) : BigInt(0);
    message.baseCollectionDeposit = object.baseCollectionDeposit ?? "";
    message.perItemDeposit = object.perItemDeposit ?? "";
    message.perItemSpamTax = object.perItemSpamTax ?? "";
    message.sponsorFee = object.sponsorFee ?? "";
    message.minSponsorTrustLevel = object.minSponsorTrustLevel ?? "";
    message.sponsorshipRequestTtlBlocks = object.sponsorshipRequestTtlBlocks !== undefined && object.sponsorshipRequestTtlBlocks !== null ? BigInt(object.sponsorshipRequestTtlBlocks.toString()) : BigInt(0);
    message.minCuratorBond = object.minCuratorBond ?? "";
    message.minCuratorTrustLevel = object.minCuratorTrustLevel ?? "";
    message.minCuratorAgeBlocks = object.minCuratorAgeBlocks !== undefined && object.minCuratorAgeBlocks !== null ? BigInt(object.minCuratorAgeBlocks.toString()) : BigInt(0);
    message.maxTagsPerReview = object.maxTagsPerReview ?? 0;
    message.maxReviewCommentLength = object.maxReviewCommentLength ?? 0;
    message.maxReviewsPerCollection = object.maxReviewsPerCollection ?? 0;
    message.curatorSlashFraction = object.curatorSlashFraction ?? "";
    message.challengeWindowBlocks = object.challengeWindowBlocks !== undefined && object.challengeWindowBlocks !== null ? BigInt(object.challengeWindowBlocks.toString()) : BigInt(0);
    message.challengeDeposit = object.challengeDeposit ?? "";
    message.maxChallengeReasonLength = object.maxChallengeReasonLength ?? 0;
    message.maxPrunePerBlock = object.maxPrunePerBlock ?? 0;
    message.challengeRewardFraction = object.challengeRewardFraction ?? "";
    message.downvoteCost = object.downvoteCost ?? "";
    message.maxUpvotesPerDay = object.maxUpvotesPerDay ?? 0;
    message.maxDownvotesPerDay = object.maxDownvotesPerDay ?? 0;
    message.flagReviewThreshold = object.flagReviewThreshold ?? 0;
    message.maxFlagsPerDay = object.maxFlagsPerDay ?? 0;
    message.maxFlaggersPerTarget = object.maxFlaggersPerTarget ?? 0;
    message.flagExpirationBlocks = object.flagExpirationBlocks !== undefined && object.flagExpirationBlocks !== null ? BigInt(object.flagExpirationBlocks.toString()) : BigInt(0);
    message.maxFlagReasonLength = object.maxFlagReasonLength ?? 0;
    message.sentinelCommitAmount = object.sentinelCommitAmount ?? "";
    message.hideExpiryBlocks = object.hideExpiryBlocks !== undefined && object.hideExpiryBlocks !== null ? BigInt(object.hideExpiryBlocks.toString()) : BigInt(0);
    message.appealFee = object.appealFee ?? "";
    message.appealCooldownBlocks = object.appealCooldownBlocks !== undefined && object.appealCooldownBlocks !== null ? BigInt(object.appealCooldownBlocks.toString()) : BigInt(0);
    message.appealDeadlineBlocks = object.appealDeadlineBlocks !== undefined && object.appealDeadlineBlocks !== null ? BigInt(object.appealDeadlineBlocks.toString()) : BigInt(0);
    message.sentinelUnhideWindowBlocks = object.sentinelUnhideWindowBlocks !== undefined && object.sentinelUnhideWindowBlocks !== null ? BigInt(object.sentinelUnhideWindowBlocks.toString()) : BigInt(0);
    message.maxHidesPerSentinelPerDay = object.maxHidesPerSentinelPerDay ?? 0;
    message.endorsementCreationFee = object.endorsementCreationFee ?? "";
    message.endorsementDreamStake = object.endorsementDreamStake ?? "";
    message.endorsementStakeDuration = object.endorsementStakeDuration !== undefined && object.endorsementStakeDuration !== null ? BigInt(object.endorsementStakeDuration.toString()) : BigInt(0);
    message.endorsementExpiryBlocks = object.endorsementExpiryBlocks !== undefined && object.endorsementExpiryBlocks !== null ? BigInt(object.endorsementExpiryBlocks.toString()) : BigInt(0);
    message.endorsementFeeEndorserShare = object.endorsementFeeEndorserShare ?? "";
    message.endorsementDeletionBurnFraction = object.endorsementDeletionBurnFraction ?? "";
    message.convictionRenewalThreshold = object.convictionRenewalThreshold ?? "";
    message.convictionRenewalPeriod = object.convictionRenewalPeriod !== undefined && object.convictionRenewalPeriod !== null ? BigInt(object.convictionRenewalPeriod.toString()) : BigInt(0);
    message.pinMinTrustLevel = object.pinMinTrustLevel ?? 0;
    message.maxPinsPerDay = object.maxPinsPerDay ?? 0;
    message.curatorDemotionCooldown = object.curatorDemotionCooldown !== undefined && object.curatorDemotionCooldown !== null ? BigInt(object.curatorDemotionCooldown.toString()) : BigInt(0);
    message.curatorDemotionThreshold = object.curatorDemotionThreshold ?? "";
    message.curatorOverturnDemotionStreak = object.curatorOverturnDemotionStreak !== undefined && object.curatorOverturnDemotionStreak !== null ? BigInt(object.curatorOverturnDemotionStreak.toString()) : BigInt(0);
    message.curatorUnbondCooldown = object.curatorUnbondCooldown !== undefined && object.curatorUnbondCooldown !== null ? BigInt(object.curatorUnbondCooldown.toString()) : BigInt(0);
    message.makePermanentMinTrustLevel = object.makePermanentMinTrustLevel ?? 0;
    message.maxMakePermanentPerDay = object.maxMakePermanentPerDay ?? 0;
    message.nonMemberCollabDreamStake = object.nonMemberCollabDreamStake ?? "";
    message.nonMemberCollabBurnFraction = object.nonMemberCollabBurnFraction ?? "";
    message.maxNonMemberCollaboratorsPerCollection = object.maxNonMemberCollaboratorsPerCollection ?? 0;
    message.maxPromotionsPerBlock = object.maxPromotionsPerBlock ?? 0;
    message.endorserRepPenalty = object.endorserRepPenalty ?? "";
    message.collabInviterRepPenalty = object.collabInviterRepPenalty ?? "";
    message.authorRepPenalty = object.authorRepPenalty ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_collections_base !== undefined && object.max_collections_base !== null) {
      message.maxCollectionsBase = object.max_collections_base;
    }
    if (object.max_collections_per_trust_level !== undefined && object.max_collections_per_trust_level !== null) {
      message.maxCollectionsPerTrustLevel = object.max_collections_per_trust_level;
    }
    if (object.max_items_per_collection !== undefined && object.max_items_per_collection !== null) {
      message.maxItemsPerCollection = object.max_items_per_collection;
    }
    if (object.max_title_length !== undefined && object.max_title_length !== null) {
      message.maxTitleLength = object.max_title_length;
    }
    if (object.max_name_length !== undefined && object.max_name_length !== null) {
      message.maxNameLength = object.max_name_length;
    }
    if (object.max_description_length !== undefined && object.max_description_length !== null) {
      message.maxDescriptionLength = object.max_description_length;
    }
    if (object.max_tag_length !== undefined && object.max_tag_length !== null) {
      message.maxTagLength = object.max_tag_length;
    }
    if (object.max_tags_per_collection !== undefined && object.max_tags_per_collection !== null) {
      message.maxTagsPerCollection = object.max_tags_per_collection;
    }
    if (object.max_attributes_per_item !== undefined && object.max_attributes_per_item !== null) {
      message.maxAttributesPerItem = object.max_attributes_per_item;
    }
    if (object.max_attribute_key_length !== undefined && object.max_attribute_key_length !== null) {
      message.maxAttributeKeyLength = object.max_attribute_key_length;
    }
    if (object.max_attribute_value_length !== undefined && object.max_attribute_value_length !== null) {
      message.maxAttributeValueLength = object.max_attribute_value_length;
    }
    if (object.max_reference_field_length !== undefined && object.max_reference_field_length !== null) {
      message.maxReferenceFieldLength = object.max_reference_field_length;
    }
    if (object.max_encrypted_data_size !== undefined && object.max_encrypted_data_size !== null) {
      message.maxEncryptedDataSize = object.max_encrypted_data_size;
    }
    if (object.max_collaborators_per_collection !== undefined && object.max_collaborators_per_collection !== null) {
      message.maxCollaboratorsPerCollection = object.max_collaborators_per_collection;
    }
    if (object.max_batch_size !== undefined && object.max_batch_size !== null) {
      message.maxBatchSize = object.max_batch_size;
    }
    if (object.max_ttl_blocks !== undefined && object.max_ttl_blocks !== null) {
      message.maxTtlBlocks = BigInt(object.max_ttl_blocks);
    }
    if (object.max_non_member_ttl_blocks !== undefined && object.max_non_member_ttl_blocks !== null) {
      message.maxNonMemberTtlBlocks = BigInt(object.max_non_member_ttl_blocks);
    }
    if (object.base_collection_deposit !== undefined && object.base_collection_deposit !== null) {
      message.baseCollectionDeposit = object.base_collection_deposit;
    }
    if (object.per_item_deposit !== undefined && object.per_item_deposit !== null) {
      message.perItemDeposit = object.per_item_deposit;
    }
    if (object.per_item_spam_tax !== undefined && object.per_item_spam_tax !== null) {
      message.perItemSpamTax = object.per_item_spam_tax;
    }
    if (object.sponsor_fee !== undefined && object.sponsor_fee !== null) {
      message.sponsorFee = object.sponsor_fee;
    }
    if (object.min_sponsor_trust_level !== undefined && object.min_sponsor_trust_level !== null) {
      message.minSponsorTrustLevel = object.min_sponsor_trust_level;
    }
    if (object.sponsorship_request_ttl_blocks !== undefined && object.sponsorship_request_ttl_blocks !== null) {
      message.sponsorshipRequestTtlBlocks = BigInt(object.sponsorship_request_ttl_blocks);
    }
    if (object.min_curator_bond !== undefined && object.min_curator_bond !== null) {
      message.minCuratorBond = object.min_curator_bond;
    }
    if (object.min_curator_trust_level !== undefined && object.min_curator_trust_level !== null) {
      message.minCuratorTrustLevel = object.min_curator_trust_level;
    }
    if (object.min_curator_age_blocks !== undefined && object.min_curator_age_blocks !== null) {
      message.minCuratorAgeBlocks = BigInt(object.min_curator_age_blocks);
    }
    if (object.max_tags_per_review !== undefined && object.max_tags_per_review !== null) {
      message.maxTagsPerReview = object.max_tags_per_review;
    }
    if (object.max_review_comment_length !== undefined && object.max_review_comment_length !== null) {
      message.maxReviewCommentLength = object.max_review_comment_length;
    }
    if (object.max_reviews_per_collection !== undefined && object.max_reviews_per_collection !== null) {
      message.maxReviewsPerCollection = object.max_reviews_per_collection;
    }
    if (object.curator_slash_fraction !== undefined && object.curator_slash_fraction !== null) {
      message.curatorSlashFraction = object.curator_slash_fraction;
    }
    if (object.challenge_window_blocks !== undefined && object.challenge_window_blocks !== null) {
      message.challengeWindowBlocks = BigInt(object.challenge_window_blocks);
    }
    if (object.challenge_deposit !== undefined && object.challenge_deposit !== null) {
      message.challengeDeposit = object.challenge_deposit;
    }
    if (object.max_challenge_reason_length !== undefined && object.max_challenge_reason_length !== null) {
      message.maxChallengeReasonLength = object.max_challenge_reason_length;
    }
    if (object.max_prune_per_block !== undefined && object.max_prune_per_block !== null) {
      message.maxPrunePerBlock = object.max_prune_per_block;
    }
    if (object.challenge_reward_fraction !== undefined && object.challenge_reward_fraction !== null) {
      message.challengeRewardFraction = object.challenge_reward_fraction;
    }
    if (object.downvote_cost !== undefined && object.downvote_cost !== null) {
      message.downvoteCost = object.downvote_cost;
    }
    if (object.max_upvotes_per_day !== undefined && object.max_upvotes_per_day !== null) {
      message.maxUpvotesPerDay = object.max_upvotes_per_day;
    }
    if (object.max_downvotes_per_day !== undefined && object.max_downvotes_per_day !== null) {
      message.maxDownvotesPerDay = object.max_downvotes_per_day;
    }
    if (object.flag_review_threshold !== undefined && object.flag_review_threshold !== null) {
      message.flagReviewThreshold = object.flag_review_threshold;
    }
    if (object.max_flags_per_day !== undefined && object.max_flags_per_day !== null) {
      message.maxFlagsPerDay = object.max_flags_per_day;
    }
    if (object.max_flaggers_per_target !== undefined && object.max_flaggers_per_target !== null) {
      message.maxFlaggersPerTarget = object.max_flaggers_per_target;
    }
    if (object.flag_expiration_blocks !== undefined && object.flag_expiration_blocks !== null) {
      message.flagExpirationBlocks = BigInt(object.flag_expiration_blocks);
    }
    if (object.max_flag_reason_length !== undefined && object.max_flag_reason_length !== null) {
      message.maxFlagReasonLength = object.max_flag_reason_length;
    }
    if (object.sentinel_commit_amount !== undefined && object.sentinel_commit_amount !== null) {
      message.sentinelCommitAmount = object.sentinel_commit_amount;
    }
    if (object.hide_expiry_blocks !== undefined && object.hide_expiry_blocks !== null) {
      message.hideExpiryBlocks = BigInt(object.hide_expiry_blocks);
    }
    if (object.appeal_fee !== undefined && object.appeal_fee !== null) {
      message.appealFee = object.appeal_fee;
    }
    if (object.appeal_cooldown_blocks !== undefined && object.appeal_cooldown_blocks !== null) {
      message.appealCooldownBlocks = BigInt(object.appeal_cooldown_blocks);
    }
    if (object.appeal_deadline_blocks !== undefined && object.appeal_deadline_blocks !== null) {
      message.appealDeadlineBlocks = BigInt(object.appeal_deadline_blocks);
    }
    if (object.sentinel_unhide_window_blocks !== undefined && object.sentinel_unhide_window_blocks !== null) {
      message.sentinelUnhideWindowBlocks = BigInt(object.sentinel_unhide_window_blocks);
    }
    if (object.max_hides_per_sentinel_per_day !== undefined && object.max_hides_per_sentinel_per_day !== null) {
      message.maxHidesPerSentinelPerDay = object.max_hides_per_sentinel_per_day;
    }
    if (object.endorsement_creation_fee !== undefined && object.endorsement_creation_fee !== null) {
      message.endorsementCreationFee = object.endorsement_creation_fee;
    }
    if (object.endorsement_dream_stake !== undefined && object.endorsement_dream_stake !== null) {
      message.endorsementDreamStake = object.endorsement_dream_stake;
    }
    if (object.endorsement_stake_duration !== undefined && object.endorsement_stake_duration !== null) {
      message.endorsementStakeDuration = BigInt(object.endorsement_stake_duration);
    }
    if (object.endorsement_expiry_blocks !== undefined && object.endorsement_expiry_blocks !== null) {
      message.endorsementExpiryBlocks = BigInt(object.endorsement_expiry_blocks);
    }
    if (object.endorsement_fee_endorser_share !== undefined && object.endorsement_fee_endorser_share !== null) {
      message.endorsementFeeEndorserShare = object.endorsement_fee_endorser_share;
    }
    if (object.endorsement_deletion_burn_fraction !== undefined && object.endorsement_deletion_burn_fraction !== null) {
      message.endorsementDeletionBurnFraction = object.endorsement_deletion_burn_fraction;
    }
    if (object.conviction_renewal_threshold !== undefined && object.conviction_renewal_threshold !== null) {
      message.convictionRenewalThreshold = object.conviction_renewal_threshold;
    }
    if (object.conviction_renewal_period !== undefined && object.conviction_renewal_period !== null) {
      message.convictionRenewalPeriod = BigInt(object.conviction_renewal_period);
    }
    if (object.pin_min_trust_level !== undefined && object.pin_min_trust_level !== null) {
      message.pinMinTrustLevel = object.pin_min_trust_level;
    }
    if (object.max_pins_per_day !== undefined && object.max_pins_per_day !== null) {
      message.maxPinsPerDay = object.max_pins_per_day;
    }
    if (object.curator_demotion_cooldown !== undefined && object.curator_demotion_cooldown !== null) {
      message.curatorDemotionCooldown = BigInt(object.curator_demotion_cooldown);
    }
    if (object.curator_demotion_threshold !== undefined && object.curator_demotion_threshold !== null) {
      message.curatorDemotionThreshold = object.curator_demotion_threshold;
    }
    if (object.curator_overturn_demotion_streak !== undefined && object.curator_overturn_demotion_streak !== null) {
      message.curatorOverturnDemotionStreak = BigInt(object.curator_overturn_demotion_streak);
    }
    if (object.curator_unbond_cooldown !== undefined && object.curator_unbond_cooldown !== null) {
      message.curatorUnbondCooldown = BigInt(object.curator_unbond_cooldown);
    }
    if (object.make_permanent_min_trust_level !== undefined && object.make_permanent_min_trust_level !== null) {
      message.makePermanentMinTrustLevel = object.make_permanent_min_trust_level;
    }
    if (object.max_make_permanent_per_day !== undefined && object.max_make_permanent_per_day !== null) {
      message.maxMakePermanentPerDay = object.max_make_permanent_per_day;
    }
    if (object.non_member_collab_dream_stake !== undefined && object.non_member_collab_dream_stake !== null) {
      message.nonMemberCollabDreamStake = object.non_member_collab_dream_stake;
    }
    if (object.non_member_collab_burn_fraction !== undefined && object.non_member_collab_burn_fraction !== null) {
      message.nonMemberCollabBurnFraction = object.non_member_collab_burn_fraction;
    }
    if (object.max_non_member_collaborators_per_collection !== undefined && object.max_non_member_collaborators_per_collection !== null) {
      message.maxNonMemberCollaboratorsPerCollection = object.max_non_member_collaborators_per_collection;
    }
    if (object.max_promotions_per_block !== undefined && object.max_promotions_per_block !== null) {
      message.maxPromotionsPerBlock = object.max_promotions_per_block;
    }
    if (object.endorser_rep_penalty !== undefined && object.endorser_rep_penalty !== null) {
      message.endorserRepPenalty = object.endorser_rep_penalty;
    }
    if (object.collab_inviter_rep_penalty !== undefined && object.collab_inviter_rep_penalty !== null) {
      message.collabInviterRepPenalty = object.collab_inviter_rep_penalty;
    }
    if (object.author_rep_penalty !== undefined && object.author_rep_penalty !== null) {
      message.authorRepPenalty = object.author_rep_penalty;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_collections_base = message.maxCollectionsBase === 0 ? undefined : message.maxCollectionsBase;
    obj.max_collections_per_trust_level = message.maxCollectionsPerTrustLevel === 0 ? undefined : message.maxCollectionsPerTrustLevel;
    obj.max_items_per_collection = message.maxItemsPerCollection === 0 ? undefined : message.maxItemsPerCollection;
    obj.max_title_length = message.maxTitleLength === 0 ? undefined : message.maxTitleLength;
    obj.max_name_length = message.maxNameLength === 0 ? undefined : message.maxNameLength;
    obj.max_description_length = message.maxDescriptionLength === 0 ? undefined : message.maxDescriptionLength;
    obj.max_tag_length = message.maxTagLength === 0 ? undefined : message.maxTagLength;
    obj.max_tags_per_collection = message.maxTagsPerCollection === 0 ? undefined : message.maxTagsPerCollection;
    obj.max_attributes_per_item = message.maxAttributesPerItem === 0 ? undefined : message.maxAttributesPerItem;
    obj.max_attribute_key_length = message.maxAttributeKeyLength === 0 ? undefined : message.maxAttributeKeyLength;
    obj.max_attribute_value_length = message.maxAttributeValueLength === 0 ? undefined : message.maxAttributeValueLength;
    obj.max_reference_field_length = message.maxReferenceFieldLength === 0 ? undefined : message.maxReferenceFieldLength;
    obj.max_encrypted_data_size = message.maxEncryptedDataSize === 0 ? undefined : message.maxEncryptedDataSize;
    obj.max_collaborators_per_collection = message.maxCollaboratorsPerCollection === 0 ? undefined : message.maxCollaboratorsPerCollection;
    obj.max_batch_size = message.maxBatchSize === 0 ? undefined : message.maxBatchSize;
    obj.max_ttl_blocks = message.maxTtlBlocks !== BigInt(0) ? message.maxTtlBlocks?.toString() : undefined;
    obj.max_non_member_ttl_blocks = message.maxNonMemberTtlBlocks !== BigInt(0) ? message.maxNonMemberTtlBlocks?.toString() : undefined;
    obj.base_collection_deposit = message.baseCollectionDeposit === "" ? undefined : message.baseCollectionDeposit;
    obj.per_item_deposit = message.perItemDeposit === "" ? undefined : message.perItemDeposit;
    obj.per_item_spam_tax = message.perItemSpamTax === "" ? undefined : message.perItemSpamTax;
    obj.sponsor_fee = message.sponsorFee === "" ? undefined : message.sponsorFee;
    obj.min_sponsor_trust_level = message.minSponsorTrustLevel === "" ? undefined : message.minSponsorTrustLevel;
    obj.sponsorship_request_ttl_blocks = message.sponsorshipRequestTtlBlocks !== BigInt(0) ? message.sponsorshipRequestTtlBlocks?.toString() : undefined;
    obj.min_curator_bond = message.minCuratorBond === "" ? undefined : message.minCuratorBond;
    obj.min_curator_trust_level = message.minCuratorTrustLevel === "" ? undefined : message.minCuratorTrustLevel;
    obj.min_curator_age_blocks = message.minCuratorAgeBlocks !== BigInt(0) ? message.minCuratorAgeBlocks?.toString() : undefined;
    obj.max_tags_per_review = message.maxTagsPerReview === 0 ? undefined : message.maxTagsPerReview;
    obj.max_review_comment_length = message.maxReviewCommentLength === 0 ? undefined : message.maxReviewCommentLength;
    obj.max_reviews_per_collection = message.maxReviewsPerCollection === 0 ? undefined : message.maxReviewsPerCollection;
    obj.curator_slash_fraction = message.curatorSlashFraction === "" ? undefined : message.curatorSlashFraction;
    obj.challenge_window_blocks = message.challengeWindowBlocks !== BigInt(0) ? message.challengeWindowBlocks?.toString() : undefined;
    obj.challenge_deposit = message.challengeDeposit === "" ? undefined : message.challengeDeposit;
    obj.max_challenge_reason_length = message.maxChallengeReasonLength === 0 ? undefined : message.maxChallengeReasonLength;
    obj.max_prune_per_block = message.maxPrunePerBlock === 0 ? undefined : message.maxPrunePerBlock;
    obj.challenge_reward_fraction = message.challengeRewardFraction === "" ? undefined : message.challengeRewardFraction;
    obj.downvote_cost = message.downvoteCost === "" ? undefined : message.downvoteCost;
    obj.max_upvotes_per_day = message.maxUpvotesPerDay === 0 ? undefined : message.maxUpvotesPerDay;
    obj.max_downvotes_per_day = message.maxDownvotesPerDay === 0 ? undefined : message.maxDownvotesPerDay;
    obj.flag_review_threshold = message.flagReviewThreshold === 0 ? undefined : message.flagReviewThreshold;
    obj.max_flags_per_day = message.maxFlagsPerDay === 0 ? undefined : message.maxFlagsPerDay;
    obj.max_flaggers_per_target = message.maxFlaggersPerTarget === 0 ? undefined : message.maxFlaggersPerTarget;
    obj.flag_expiration_blocks = message.flagExpirationBlocks !== BigInt(0) ? message.flagExpirationBlocks?.toString() : undefined;
    obj.max_flag_reason_length = message.maxFlagReasonLength === 0 ? undefined : message.maxFlagReasonLength;
    obj.sentinel_commit_amount = message.sentinelCommitAmount === "" ? undefined : message.sentinelCommitAmount;
    obj.hide_expiry_blocks = message.hideExpiryBlocks !== BigInt(0) ? message.hideExpiryBlocks?.toString() : undefined;
    obj.appeal_fee = message.appealFee === "" ? undefined : message.appealFee;
    obj.appeal_cooldown_blocks = message.appealCooldownBlocks !== BigInt(0) ? message.appealCooldownBlocks?.toString() : undefined;
    obj.appeal_deadline_blocks = message.appealDeadlineBlocks !== BigInt(0) ? message.appealDeadlineBlocks?.toString() : undefined;
    obj.sentinel_unhide_window_blocks = message.sentinelUnhideWindowBlocks !== BigInt(0) ? message.sentinelUnhideWindowBlocks?.toString() : undefined;
    obj.max_hides_per_sentinel_per_day = message.maxHidesPerSentinelPerDay === 0 ? undefined : message.maxHidesPerSentinelPerDay;
    obj.endorsement_creation_fee = message.endorsementCreationFee === "" ? undefined : message.endorsementCreationFee;
    obj.endorsement_dream_stake = message.endorsementDreamStake === "" ? undefined : message.endorsementDreamStake;
    obj.endorsement_stake_duration = message.endorsementStakeDuration !== BigInt(0) ? message.endorsementStakeDuration?.toString() : undefined;
    obj.endorsement_expiry_blocks = message.endorsementExpiryBlocks !== BigInt(0) ? message.endorsementExpiryBlocks?.toString() : undefined;
    obj.endorsement_fee_endorser_share = message.endorsementFeeEndorserShare === "" ? undefined : message.endorsementFeeEndorserShare;
    obj.endorsement_deletion_burn_fraction = message.endorsementDeletionBurnFraction === "" ? undefined : message.endorsementDeletionBurnFraction;
    obj.conviction_renewal_threshold = message.convictionRenewalThreshold === "" ? undefined : message.convictionRenewalThreshold;
    obj.conviction_renewal_period = message.convictionRenewalPeriod !== BigInt(0) ? message.convictionRenewalPeriod?.toString() : undefined;
    obj.pin_min_trust_level = message.pinMinTrustLevel === 0 ? undefined : message.pinMinTrustLevel;
    obj.max_pins_per_day = message.maxPinsPerDay === 0 ? undefined : message.maxPinsPerDay;
    obj.curator_demotion_cooldown = message.curatorDemotionCooldown !== BigInt(0) ? message.curatorDemotionCooldown?.toString() : undefined;
    obj.curator_demotion_threshold = message.curatorDemotionThreshold === "" ? undefined : message.curatorDemotionThreshold;
    obj.curator_overturn_demotion_streak = message.curatorOverturnDemotionStreak !== BigInt(0) ? message.curatorOverturnDemotionStreak?.toString() : undefined;
    obj.curator_unbond_cooldown = message.curatorUnbondCooldown !== BigInt(0) ? message.curatorUnbondCooldown?.toString() : undefined;
    obj.make_permanent_min_trust_level = message.makePermanentMinTrustLevel === 0 ? undefined : message.makePermanentMinTrustLevel;
    obj.max_make_permanent_per_day = message.maxMakePermanentPerDay === 0 ? undefined : message.maxMakePermanentPerDay;
    obj.non_member_collab_dream_stake = message.nonMemberCollabDreamStake === "" ? undefined : message.nonMemberCollabDreamStake;
    obj.non_member_collab_burn_fraction = message.nonMemberCollabBurnFraction === "" ? undefined : message.nonMemberCollabBurnFraction;
    obj.max_non_member_collaborators_per_collection = message.maxNonMemberCollaboratorsPerCollection === 0 ? undefined : message.maxNonMemberCollaboratorsPerCollection;
    obj.max_promotions_per_block = message.maxPromotionsPerBlock === 0 ? undefined : message.maxPromotionsPerBlock;
    obj.endorser_rep_penalty = message.endorserRepPenalty === "" ? undefined : message.endorserRepPenalty;
    obj.collab_inviter_rep_penalty = message.collabInviterRepPenalty === "" ? undefined : message.collabInviterRepPenalty;
    obj.author_rep_penalty = message.authorRepPenalty === "" ? undefined : message.authorRepPenalty;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/collect/Params",
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
      typeUrl: "/sparkdream.collect.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};