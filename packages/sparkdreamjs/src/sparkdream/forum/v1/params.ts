//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module. Fee/cost fields are stored
 * as bare amounts in the chain's bond denom (resolved at runtime from
 * x/identity); the keeper wraps them into sdk.Coin at the point of use.
 * @name Params
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Params
 */
export interface Params {
  /**
   * forum_paused stops all new posts when true
   */
  forumPaused: boolean;
  /**
   * moderation_paused stops all moderation actions when true
   */
  moderationPaused: boolean;
  /**
   * bounties_enabled allows bounty creation when true
   */
  bountiesEnabled: boolean;
  /**
   * reactions_enabled allows upvotes/downvotes when true
   */
  reactionsEnabled: boolean;
  /**
   * appeals_paused stops all appeals when true
   */
  appealsPaused: boolean;
  /**
   * editing_enabled allows post editing when true
   */
  editingEnabled: boolean;
  /**
   * spam_tax_amount charged to non-members for posting, in bond-denom micro-units.
   */
  spamTaxAmount: string;
  /**
   * reaction_spam_tax_amount charged to non-members for reactions, in bond-denom micro-units.
   */
  reactionSpamTaxAmount: string;
  /**
   * flag_spam_tax_amount charged to non-members for flagging, in bond-denom micro-units.
   */
  flagSpamTaxAmount: string;
  /**
   * downvote_deposit_amount burned when downvoting, in bond-denom micro-units.
   */
  downvoteDepositAmount: string;
  /**
   * appeal_fee_amount charged for appeals, in bond-denom micro-units.
   */
  appealFeeAmount: string;
  /**
   * lock_appeal_fee_amount charged for thread lock appeals, in bond-denom micro-units.
   */
  lockAppealFeeAmount: string;
  /**
   * move_appeal_fee_amount charged for thread move appeals, in bond-denom micro-units.
   */
  moveAppealFeeAmount: string;
  /**
   * edit_fee_amount charged for edits past grace period, in bond-denom micro-units.
   */
  editFeeAmount: string;
  /**
   * bounty_cancellation_fee_percent percentage of bounty taken on cancellation (0-100)
   */
  bountyCancellationFeePercent: bigint;
  /**
   * max_content_size in bytes
   */
  maxContentSize: bigint;
  /**
   * daily_post_limit per user
   */
  dailyPostLimit: bigint;
  /**
   * max_reply_depth for thread nesting
   */
  maxReplyDepth: number;
  /**
   * edit_grace_period in seconds (no fee during this time)
   */
  editGracePeriod: bigint;
  /**
   * edit_max_window in seconds (cannot edit after this time)
   */
  editMaxWindow: bigint;
  /**
   * max_follows_per_day per user
   */
  maxFollowsPerDay: bigint;
  /**
   * archive_threshold in seconds (thread must be inactive this long before archiving)
   */
  archiveThreshold: bigint;
  /**
   * unarchive_cooldown in seconds (must wait this long after archive before unarchiving)
   */
  unarchiveCooldown: bigint;
  /**
   * archive_cooldown in seconds (must wait this long after unarchive before re-archiving)
   */
  archiveCooldown: bigint;
  /**
   * hide_appeal_cooldown in seconds (must wait this long after hide before appeal)
   */
  hideAppealCooldown: bigint;
  /**
   * lock_appeal_cooldown in seconds (must wait this long after lock before appeal)
   */
  lockAppealCooldown: bigint;
  /**
   * move_appeal_cooldown in seconds (must wait this long after move before appeal)
   */
  moveAppealCooldown: bigint;
  /**
   * cost_per_byte_amount charged for on-chain content storage (applies to all
   * posts, burned), in bond-denom micro-units.
   */
  costPerByteAmount: string;
  /**
   * cost_per_byte_exempt when true, disables cost_per_byte fee collection
   */
  costPerByteExempt: boolean;
  /**
   * ephemeral_ttl in seconds (TTL for non-member posts, default 86400 = 24h)
   */
  ephemeralTtl: bigint;
  /**
   * conviction_renewal_threshold is the minimum conviction score for TTL renewal
   */
  convictionRenewalThreshold: string;
  /**
   * conviction_renewal_period is the TTL extension in seconds when conviction threshold is met
   */
  convictionRenewalPeriod: bigint;
  /**
   * min_sentinel_bond — see ForumOperationalParams.min_sentinel_bond.
   */
  minSentinelBond: string;
  /**
   * min_sentinel_rep_tier — see ForumOperationalParams.min_sentinel_rep_tier.
   */
  minSentinelRepTier: bigint;
  /**
   * min_sentinel_trust_level — see ForumOperationalParams.min_sentinel_trust_level.
   */
  minSentinelTrustLevel: string;
  /**
   * min_sentinel_age_blocks — see ForumOperationalParams.min_sentinel_age_blocks.
   */
  minSentinelAgeBlocks: bigint;
  /**
   * sentinel_demotion_cooldown — see ForumOperationalParams.sentinel_demotion_cooldown.
   */
  sentinelDemotionCooldown: bigint;
  /**
   * sentinel_demotion_threshold — see ForumOperationalParams.sentinel_demotion_threshold.
   */
  sentinelDemotionThreshold: string;
  /**
   * sentinel_unhide_window in seconds. A sentinel who hid a post may
   * self-correct (call MsgUnhidePost) within this window of the original
   * hide; after it expires, only the Commons Operations Committee or
   * governance can unhide. Analogous to edit_max_window for authors.
   */
  sentinelUnhideWindow: bigint;
  /**
   * sentinel_unbond_cooldown is the number of seconds a sentinel's bond stays
   * locked and slashable after MsgUnbondRole. During the cooldown, the
   * BondedRole status is UNBONDING and forum action gates refuse authority.
   * Propagated to x/rep BondedRoleConfig via SyncSentinelBondedRoleConfig.
   * Zero = immediate withdrawal (legacy behavior).
   */
  sentinelUnbondCooldown: bigint;
  /**
   * make_permanent_min_trust_level is the minimum trust level a caller of
   * MsgMakePostPermanent must hold (0–4). Default PROVISIONAL (1) — lower
   * than the sentinel-pin gate because preservation is a smaller curator
   * action than featuring.
   */
  makePermanentMinTrustLevel: number;
  /**
   * max_promotions_per_block bounds how many ephemeral posts the EndBlocker
   * membership-promotion drain may flip per block. Bounds block gas; the
   * remaining queue is processed in subsequent blocks.
   */
  maxPromotionsPerBlock: number;
  /**
   * author_rep_slash is the per-tag reputation deduction applied to a post's
   * author when ExpireHiddenPosts finalizes an unappealed sentinel hide.
   * Deducted from the author's score in each tag the post carried.
   * DeductReputation floors at zero, so authors with no rep in the tag take
   * no harm — safe to ship before any forum-side rep-grant flow exists.
   */
  authorRepSlash: string;
  /**
   * max_make_permanent_per_day caps MsgMakePostPermanent calls per address per
   * UTC day. Independent of daily_post_limit — promoting an ephemeral to
   * permanent is a distinct curator action with its own quota.
   */
  maxMakePermanentPerDay: bigint;
  /**
   * min_post_conviction_stake is the minimum DREAM amount required to open a
   * PostConvictionStake (math.Int string, e.g. "10000000" = 10 DREAM). Floors
   * out sybil dust stakes that would otherwise farm the per-tag epoch cap with
   * many tiny accounts.
   */
  minPostConvictionStake: string;
  /**
   * post_conviction_lock_seconds is the DREAM-lock duration in seconds. A
   * staker cannot call MsgReleasePostConviction before staked_at + this many
   * seconds. Longer lock = more skin-in-the-game per uDREAM committed.
   */
  postConvictionLockSeconds: bigint;
  /**
   * post_conviction_stream_rate_per_block is the per-DREAM-per-day rep
   * accrual rate (math.LegacyDec). Despite the historical "per_block"
   * suffix in the field name, the formula is unit-clean and time-based, not
   * block-based:
   *   amount_dream         = stake.amount_uDREAM / 1_000_000
   *   elapsed_days         = (now - last_accrual_at) / 86400
   *   rep_credited_total   = amount_dream * rate * elapsed_days
   *   rep_credited_per_tag = rep_credited_total / len(post.tags)
   * The author's per-tag credit is then capped by
   * max_forum_rep_per_tag_per_epoch (one epoch = one UTC day).
   */
  postConvictionStreamRatePerBlock: string;
  /**
   * max_forum_rep_per_tag_per_epoch caps the per-tag forum rep an author may
   * earn from conviction stakes in a single epoch (math.LegacyDec). Prevents
   * a single tag from being flooded by many simultaneous stakes — excess
   * accrual is silently dropped (no error, no refund) so honest stakers do not
   * suffer from saturation they could not have foreseen.
   */
  maxForumRepPerTagPerEpoch: string;
  /**
   * post_conviction_staker_slash_bps is the basis-points slash applied to the
   * staker's locked DREAM when ExpireHiddenPosts finalizes a hide on the post
   * (0-10000; 2500 = 25%). The slashed DREAM is burned. The non-slashed
   * portion is unlocked back to the staker on the next MsgReleasePostConviction
   * and the stake is closed.
   */
  postConvictionStakerSlashBps: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.forum.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module. Fee/cost fields are stored
 * as bare amounts in the chain's bond denom (resolved at runtime from
 * x/identity); the keeper wraps them into sdk.Coin at the point of use.
 * @name ParamsAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Params
 */
export interface ParamsAmino {
  /**
   * forum_paused stops all new posts when true
   */
  forum_paused?: boolean;
  /**
   * moderation_paused stops all moderation actions when true
   */
  moderation_paused?: boolean;
  /**
   * bounties_enabled allows bounty creation when true
   */
  bounties_enabled?: boolean;
  /**
   * reactions_enabled allows upvotes/downvotes when true
   */
  reactions_enabled?: boolean;
  /**
   * appeals_paused stops all appeals when true
   */
  appeals_paused?: boolean;
  /**
   * editing_enabled allows post editing when true
   */
  editing_enabled?: boolean;
  /**
   * spam_tax_amount charged to non-members for posting, in bond-denom micro-units.
   */
  spam_tax_amount?: string;
  /**
   * reaction_spam_tax_amount charged to non-members for reactions, in bond-denom micro-units.
   */
  reaction_spam_tax_amount?: string;
  /**
   * flag_spam_tax_amount charged to non-members for flagging, in bond-denom micro-units.
   */
  flag_spam_tax_amount?: string;
  /**
   * downvote_deposit_amount burned when downvoting, in bond-denom micro-units.
   */
  downvote_deposit_amount?: string;
  /**
   * appeal_fee_amount charged for appeals, in bond-denom micro-units.
   */
  appeal_fee_amount?: string;
  /**
   * lock_appeal_fee_amount charged for thread lock appeals, in bond-denom micro-units.
   */
  lock_appeal_fee_amount?: string;
  /**
   * move_appeal_fee_amount charged for thread move appeals, in bond-denom micro-units.
   */
  move_appeal_fee_amount?: string;
  /**
   * edit_fee_amount charged for edits past grace period, in bond-denom micro-units.
   */
  edit_fee_amount?: string;
  /**
   * bounty_cancellation_fee_percent percentage of bounty taken on cancellation (0-100)
   */
  bounty_cancellation_fee_percent?: string;
  /**
   * max_content_size in bytes
   */
  max_content_size?: string;
  /**
   * daily_post_limit per user
   */
  daily_post_limit?: string;
  /**
   * max_reply_depth for thread nesting
   */
  max_reply_depth?: number;
  /**
   * edit_grace_period in seconds (no fee during this time)
   */
  edit_grace_period?: string;
  /**
   * edit_max_window in seconds (cannot edit after this time)
   */
  edit_max_window?: string;
  /**
   * max_follows_per_day per user
   */
  max_follows_per_day?: string;
  /**
   * archive_threshold in seconds (thread must be inactive this long before archiving)
   */
  archive_threshold?: string;
  /**
   * unarchive_cooldown in seconds (must wait this long after archive before unarchiving)
   */
  unarchive_cooldown?: string;
  /**
   * archive_cooldown in seconds (must wait this long after unarchive before re-archiving)
   */
  archive_cooldown?: string;
  /**
   * hide_appeal_cooldown in seconds (must wait this long after hide before appeal)
   */
  hide_appeal_cooldown?: string;
  /**
   * lock_appeal_cooldown in seconds (must wait this long after lock before appeal)
   */
  lock_appeal_cooldown?: string;
  /**
   * move_appeal_cooldown in seconds (must wait this long after move before appeal)
   */
  move_appeal_cooldown?: string;
  /**
   * cost_per_byte_amount charged for on-chain content storage (applies to all
   * posts, burned), in bond-denom micro-units.
   */
  cost_per_byte_amount?: string;
  /**
   * cost_per_byte_exempt when true, disables cost_per_byte fee collection
   */
  cost_per_byte_exempt?: boolean;
  /**
   * ephemeral_ttl in seconds (TTL for non-member posts, default 86400 = 24h)
   */
  ephemeral_ttl?: string;
  /**
   * conviction_renewal_threshold is the minimum conviction score for TTL renewal
   */
  conviction_renewal_threshold?: string;
  /**
   * conviction_renewal_period is the TTL extension in seconds when conviction threshold is met
   */
  conviction_renewal_period?: string;
  /**
   * min_sentinel_bond — see ForumOperationalParams.min_sentinel_bond.
   */
  min_sentinel_bond?: string;
  /**
   * min_sentinel_rep_tier — see ForumOperationalParams.min_sentinel_rep_tier.
   */
  min_sentinel_rep_tier?: string;
  /**
   * min_sentinel_trust_level — see ForumOperationalParams.min_sentinel_trust_level.
   */
  min_sentinel_trust_level?: string;
  /**
   * min_sentinel_age_blocks — see ForumOperationalParams.min_sentinel_age_blocks.
   */
  min_sentinel_age_blocks?: string;
  /**
   * sentinel_demotion_cooldown — see ForumOperationalParams.sentinel_demotion_cooldown.
   */
  sentinel_demotion_cooldown?: string;
  /**
   * sentinel_demotion_threshold — see ForumOperationalParams.sentinel_demotion_threshold.
   */
  sentinel_demotion_threshold?: string;
  /**
   * sentinel_unhide_window in seconds. A sentinel who hid a post may
   * self-correct (call MsgUnhidePost) within this window of the original
   * hide; after it expires, only the Commons Operations Committee or
   * governance can unhide. Analogous to edit_max_window for authors.
   */
  sentinel_unhide_window?: string;
  /**
   * sentinel_unbond_cooldown is the number of seconds a sentinel's bond stays
   * locked and slashable after MsgUnbondRole. During the cooldown, the
   * BondedRole status is UNBONDING and forum action gates refuse authority.
   * Propagated to x/rep BondedRoleConfig via SyncSentinelBondedRoleConfig.
   * Zero = immediate withdrawal (legacy behavior).
   */
  sentinel_unbond_cooldown?: string;
  /**
   * make_permanent_min_trust_level is the minimum trust level a caller of
   * MsgMakePostPermanent must hold (0–4). Default PROVISIONAL (1) — lower
   * than the sentinel-pin gate because preservation is a smaller curator
   * action than featuring.
   */
  make_permanent_min_trust_level?: number;
  /**
   * max_promotions_per_block bounds how many ephemeral posts the EndBlocker
   * membership-promotion drain may flip per block. Bounds block gas; the
   * remaining queue is processed in subsequent blocks.
   */
  max_promotions_per_block?: number;
  /**
   * author_rep_slash is the per-tag reputation deduction applied to a post's
   * author when ExpireHiddenPosts finalizes an unappealed sentinel hide.
   * Deducted from the author's score in each tag the post carried.
   * DeductReputation floors at zero, so authors with no rep in the tag take
   * no harm — safe to ship before any forum-side rep-grant flow exists.
   */
  author_rep_slash?: string;
  /**
   * max_make_permanent_per_day caps MsgMakePostPermanent calls per address per
   * UTC day. Independent of daily_post_limit — promoting an ephemeral to
   * permanent is a distinct curator action with its own quota.
   */
  max_make_permanent_per_day?: string;
  /**
   * min_post_conviction_stake is the minimum DREAM amount required to open a
   * PostConvictionStake (math.Int string, e.g. "10000000" = 10 DREAM). Floors
   * out sybil dust stakes that would otherwise farm the per-tag epoch cap with
   * many tiny accounts.
   */
  min_post_conviction_stake?: string;
  /**
   * post_conviction_lock_seconds is the DREAM-lock duration in seconds. A
   * staker cannot call MsgReleasePostConviction before staked_at + this many
   * seconds. Longer lock = more skin-in-the-game per uDREAM committed.
   */
  post_conviction_lock_seconds?: string;
  /**
   * post_conviction_stream_rate_per_block is the per-DREAM-per-day rep
   * accrual rate (math.LegacyDec). Despite the historical "per_block"
   * suffix in the field name, the formula is unit-clean and time-based, not
   * block-based:
   *   amount_dream         = stake.amount_uDREAM / 1_000_000
   *   elapsed_days         = (now - last_accrual_at) / 86400
   *   rep_credited_total   = amount_dream * rate * elapsed_days
   *   rep_credited_per_tag = rep_credited_total / len(post.tags)
   * The author's per-tag credit is then capped by
   * max_forum_rep_per_tag_per_epoch (one epoch = one UTC day).
   */
  post_conviction_stream_rate_per_block?: string;
  /**
   * max_forum_rep_per_tag_per_epoch caps the per-tag forum rep an author may
   * earn from conviction stakes in a single epoch (math.LegacyDec). Prevents
   * a single tag from being flooded by many simultaneous stakes — excess
   * accrual is silently dropped (no error, no refund) so honest stakers do not
   * suffer from saturation they could not have foreseen.
   */
  max_forum_rep_per_tag_per_epoch?: string;
  /**
   * post_conviction_staker_slash_bps is the basis-points slash applied to the
   * staker's locked DREAM when ExpireHiddenPosts finalizes a hide on the post
   * (0-10000; 2500 = 25%). The slashed DREAM is burned. The non-slashed
   * portion is unlocked back to the staker on the next MsgReleasePostConviction
   * and the stake is closed.
   */
  post_conviction_staker_slash_bps?: string;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/forum/Params";
  value: ParamsAmino;
}
/**
 * ForumOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * Governance-only fields (forum_paused, moderation_paused, appeals_paused) are
 * excluded and can only be changed via MsgUpdateParams.
 * @name ForumOperationalParams
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ForumOperationalParams
 */
export interface ForumOperationalParams {
  /**
   * Feature toggles
   */
  bountiesEnabled: boolean;
  reactionsEnabled: boolean;
  editingEnabled: boolean;
  /**
   * Fees, all in bond-denom micro-units.
   */
  spamTaxAmount: string;
  reactionSpamTaxAmount: string;
  flagSpamTaxAmount: string;
  downvoteDepositAmount: string;
  appealFeeAmount: string;
  lockAppealFeeAmount: string;
  moveAppealFeeAmount: string;
  editFeeAmount: string;
  costPerByteAmount: string;
  costPerByteExempt: boolean;
  /**
   * Limits
   */
  maxContentSize: bigint;
  dailyPostLimit: bigint;
  maxReplyDepth: number;
  maxFollowsPerDay: bigint;
  bountyCancellationFeePercent: bigint;
  /**
   * Time windows
   */
  editGracePeriod: bigint;
  editMaxWindow: bigint;
  archiveThreshold: bigint;
  unarchiveCooldown: bigint;
  archiveCooldown: bigint;
  hideAppealCooldown: bigint;
  lockAppealCooldown: bigint;
  moveAppealCooldown: bigint;
  ephemeralTtl: bigint;
  /**
   * conviction_renewal_threshold is the minimum conviction score for TTL renewal
   */
  convictionRenewalThreshold: string;
  /**
   * conviction_renewal_period is the TTL extension in seconds when conviction threshold is met
   */
  convictionRenewalPeriod: bigint;
  /**
   * min_sentinel_bond is the minimum DREAM required to bond as a sentinel
   * (math.Int string, e.g. "1000").
   */
  minSentinelBond: string;
  /**
   * min_sentinel_rep_tier is the minimum reputation tier required to bond as
   * a sentinel. 0 = no rep-tier gate.
   */
  minSentinelRepTier: bigint;
  /**
   * min_sentinel_trust_level is the minimum trust level required to bond as a
   * sentinel, as an enum name (e.g. "TRUST_LEVEL_ESTABLISHED"). Empty = no
   * trust-level gate.
   */
  minSentinelTrustLevel: string;
  /**
   * min_sentinel_age_blocks is enforced by forum at action time (the sentinel
   * must have been bonded for this many blocks before taking an action). Zero
   * = no age gate.
   */
  minSentinelAgeBlocks: bigint;
  /**
   * sentinel_demotion_cooldown is the number of seconds a DEMOTED sentinel
   * must wait before re-bonding.
   */
  sentinelDemotionCooldown: bigint;
  /**
   * sentinel_demotion_threshold is the bond floor below which the sentinel
   * transitions from RECOVERY to DEMOTED (math.Int string).
   */
  sentinelDemotionThreshold: string;
  /**
   * sentinel_unhide_window in seconds. A sentinel who hid a post may
   * self-correct (call MsgUnhidePost) within this window of the original
   * hide; after it expires, only the Commons Operations Committee or
   * governance can unhide.
   */
  sentinelUnhideWindow: bigint;
  /**
   * sentinel_unbond_cooldown is the number of seconds a sentinel's bond stays
   * locked and slashable after MsgUnbondRole. During the cooldown the
   * BondedRole is in UNBONDING status and forum action gates refuse
   * authority. Zero = immediate withdrawal.
   */
  sentinelUnbondCooldown: bigint;
  /**
   * make_permanent_min_trust_level — see Params.make_permanent_min_trust_level.
   */
  makePermanentMinTrustLevel: number;
  /**
   * max_promotions_per_block — see Params.max_promotions_per_block.
   */
  maxPromotionsPerBlock: number;
  /**
   * author_rep_slash — see Params.author_rep_slash.
   */
  authorRepSlash: string;
  /**
   * max_make_permanent_per_day — see Params.max_make_permanent_per_day.
   */
  maxMakePermanentPerDay: bigint;
  /**
   * min_post_conviction_stake — see Params.min_post_conviction_stake.
   */
  minPostConvictionStake: string;
  /**
   * post_conviction_lock_seconds — see Params.post_conviction_lock_seconds.
   */
  postConvictionLockSeconds: bigint;
  /**
   * post_conviction_stream_rate_per_block — see Params.post_conviction_stream_rate_per_block.
   */
  postConvictionStreamRatePerBlock: string;
  /**
   * max_forum_rep_per_tag_per_epoch — see Params.max_forum_rep_per_tag_per_epoch.
   */
  maxForumRepPerTagPerEpoch: string;
  /**
   * post_conviction_staker_slash_bps — see Params.post_conviction_staker_slash_bps.
   */
  postConvictionStakerSlashBps: bigint;
}
export interface ForumOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.forum.v1.ForumOperationalParams";
  value: Uint8Array;
}
/**
 * ForumOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * Governance-only fields (forum_paused, moderation_paused, appeals_paused) are
 * excluded and can only be changed via MsgUpdateParams.
 * @name ForumOperationalParamsAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ForumOperationalParams
 */
export interface ForumOperationalParamsAmino {
  /**
   * Feature toggles
   */
  bounties_enabled?: boolean;
  reactions_enabled?: boolean;
  editing_enabled?: boolean;
  /**
   * Fees, all in bond-denom micro-units.
   */
  spam_tax_amount?: string;
  reaction_spam_tax_amount?: string;
  flag_spam_tax_amount?: string;
  downvote_deposit_amount?: string;
  appeal_fee_amount?: string;
  lock_appeal_fee_amount?: string;
  move_appeal_fee_amount?: string;
  edit_fee_amount?: string;
  cost_per_byte_amount?: string;
  cost_per_byte_exempt?: boolean;
  /**
   * Limits
   */
  max_content_size?: string;
  daily_post_limit?: string;
  max_reply_depth?: number;
  max_follows_per_day?: string;
  bounty_cancellation_fee_percent?: string;
  /**
   * Time windows
   */
  edit_grace_period?: string;
  edit_max_window?: string;
  archive_threshold?: string;
  unarchive_cooldown?: string;
  archive_cooldown?: string;
  hide_appeal_cooldown?: string;
  lock_appeal_cooldown?: string;
  move_appeal_cooldown?: string;
  ephemeral_ttl?: string;
  /**
   * conviction_renewal_threshold is the minimum conviction score for TTL renewal
   */
  conviction_renewal_threshold?: string;
  /**
   * conviction_renewal_period is the TTL extension in seconds when conviction threshold is met
   */
  conviction_renewal_period?: string;
  /**
   * min_sentinel_bond is the minimum DREAM required to bond as a sentinel
   * (math.Int string, e.g. "1000").
   */
  min_sentinel_bond?: string;
  /**
   * min_sentinel_rep_tier is the minimum reputation tier required to bond as
   * a sentinel. 0 = no rep-tier gate.
   */
  min_sentinel_rep_tier?: string;
  /**
   * min_sentinel_trust_level is the minimum trust level required to bond as a
   * sentinel, as an enum name (e.g. "TRUST_LEVEL_ESTABLISHED"). Empty = no
   * trust-level gate.
   */
  min_sentinel_trust_level?: string;
  /**
   * min_sentinel_age_blocks is enforced by forum at action time (the sentinel
   * must have been bonded for this many blocks before taking an action). Zero
   * = no age gate.
   */
  min_sentinel_age_blocks?: string;
  /**
   * sentinel_demotion_cooldown is the number of seconds a DEMOTED sentinel
   * must wait before re-bonding.
   */
  sentinel_demotion_cooldown?: string;
  /**
   * sentinel_demotion_threshold is the bond floor below which the sentinel
   * transitions from RECOVERY to DEMOTED (math.Int string).
   */
  sentinel_demotion_threshold?: string;
  /**
   * sentinel_unhide_window in seconds. A sentinel who hid a post may
   * self-correct (call MsgUnhidePost) within this window of the original
   * hide; after it expires, only the Commons Operations Committee or
   * governance can unhide.
   */
  sentinel_unhide_window?: string;
  /**
   * sentinel_unbond_cooldown is the number of seconds a sentinel's bond stays
   * locked and slashable after MsgUnbondRole. During the cooldown the
   * BondedRole is in UNBONDING status and forum action gates refuse
   * authority. Zero = immediate withdrawal.
   */
  sentinel_unbond_cooldown?: string;
  /**
   * make_permanent_min_trust_level — see Params.make_permanent_min_trust_level.
   */
  make_permanent_min_trust_level?: number;
  /**
   * max_promotions_per_block — see Params.max_promotions_per_block.
   */
  max_promotions_per_block?: number;
  /**
   * author_rep_slash — see Params.author_rep_slash.
   */
  author_rep_slash?: string;
  /**
   * max_make_permanent_per_day — see Params.max_make_permanent_per_day.
   */
  max_make_permanent_per_day?: string;
  /**
   * min_post_conviction_stake — see Params.min_post_conviction_stake.
   */
  min_post_conviction_stake?: string;
  /**
   * post_conviction_lock_seconds — see Params.post_conviction_lock_seconds.
   */
  post_conviction_lock_seconds?: string;
  /**
   * post_conviction_stream_rate_per_block — see Params.post_conviction_stream_rate_per_block.
   */
  post_conviction_stream_rate_per_block?: string;
  /**
   * max_forum_rep_per_tag_per_epoch — see Params.max_forum_rep_per_tag_per_epoch.
   */
  max_forum_rep_per_tag_per_epoch?: string;
  /**
   * post_conviction_staker_slash_bps — see Params.post_conviction_staker_slash_bps.
   */
  post_conviction_staker_slash_bps?: string;
}
export interface ForumOperationalParamsAminoMsg {
  type: "sparkdream/x/forum/ForumOperationalParams";
  value: ForumOperationalParamsAmino;
}
function createBaseParams(): Params {
  return {
    forumPaused: false,
    moderationPaused: false,
    bountiesEnabled: false,
    reactionsEnabled: false,
    appealsPaused: false,
    editingEnabled: false,
    spamTaxAmount: "",
    reactionSpamTaxAmount: "",
    flagSpamTaxAmount: "",
    downvoteDepositAmount: "",
    appealFeeAmount: "",
    lockAppealFeeAmount: "",
    moveAppealFeeAmount: "",
    editFeeAmount: "",
    bountyCancellationFeePercent: BigInt(0),
    maxContentSize: BigInt(0),
    dailyPostLimit: BigInt(0),
    maxReplyDepth: 0,
    editGracePeriod: BigInt(0),
    editMaxWindow: BigInt(0),
    maxFollowsPerDay: BigInt(0),
    archiveThreshold: BigInt(0),
    unarchiveCooldown: BigInt(0),
    archiveCooldown: BigInt(0),
    hideAppealCooldown: BigInt(0),
    lockAppealCooldown: BigInt(0),
    moveAppealCooldown: BigInt(0),
    costPerByteAmount: "",
    costPerByteExempt: false,
    ephemeralTtl: BigInt(0),
    convictionRenewalThreshold: "",
    convictionRenewalPeriod: BigInt(0),
    minSentinelBond: "",
    minSentinelRepTier: BigInt(0),
    minSentinelTrustLevel: "",
    minSentinelAgeBlocks: BigInt(0),
    sentinelDemotionCooldown: BigInt(0),
    sentinelDemotionThreshold: "",
    sentinelUnhideWindow: BigInt(0),
    sentinelUnbondCooldown: BigInt(0),
    makePermanentMinTrustLevel: 0,
    maxPromotionsPerBlock: 0,
    authorRepSlash: "",
    maxMakePermanentPerDay: BigInt(0),
    minPostConvictionStake: "",
    postConvictionLockSeconds: BigInt(0),
    postConvictionStreamRatePerBlock: "",
    maxForumRepPerTagPerEpoch: "",
    postConvictionStakerSlashBps: BigInt(0)
  };
}
/**
 * Params defines the parameters for the module. Fee/cost fields are stored
 * as bare amounts in the chain's bond denom (resolved at runtime from
 * x/identity); the keeper wraps them into sdk.Coin at the point of use.
 * @name Params
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.forum.v1.Params",
  aminoType: "sparkdream/x/forum/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.forumPaused === true) {
      writer.uint32(8).bool(message.forumPaused);
    }
    if (message.moderationPaused === true) {
      writer.uint32(16).bool(message.moderationPaused);
    }
    if (message.bountiesEnabled === true) {
      writer.uint32(24).bool(message.bountiesEnabled);
    }
    if (message.reactionsEnabled === true) {
      writer.uint32(32).bool(message.reactionsEnabled);
    }
    if (message.appealsPaused === true) {
      writer.uint32(40).bool(message.appealsPaused);
    }
    if (message.editingEnabled === true) {
      writer.uint32(48).bool(message.editingEnabled);
    }
    if (message.spamTaxAmount !== "") {
      writer.uint32(58).string(message.spamTaxAmount);
    }
    if (message.reactionSpamTaxAmount !== "") {
      writer.uint32(66).string(message.reactionSpamTaxAmount);
    }
    if (message.flagSpamTaxAmount !== "") {
      writer.uint32(74).string(message.flagSpamTaxAmount);
    }
    if (message.downvoteDepositAmount !== "") {
      writer.uint32(82).string(message.downvoteDepositAmount);
    }
    if (message.appealFeeAmount !== "") {
      writer.uint32(90).string(message.appealFeeAmount);
    }
    if (message.lockAppealFeeAmount !== "") {
      writer.uint32(98).string(message.lockAppealFeeAmount);
    }
    if (message.moveAppealFeeAmount !== "") {
      writer.uint32(106).string(message.moveAppealFeeAmount);
    }
    if (message.editFeeAmount !== "") {
      writer.uint32(114).string(message.editFeeAmount);
    }
    if (message.bountyCancellationFeePercent !== BigInt(0)) {
      writer.uint32(120).uint64(message.bountyCancellationFeePercent);
    }
    if (message.maxContentSize !== BigInt(0)) {
      writer.uint32(128).uint64(message.maxContentSize);
    }
    if (message.dailyPostLimit !== BigInt(0)) {
      writer.uint32(136).uint64(message.dailyPostLimit);
    }
    if (message.maxReplyDepth !== 0) {
      writer.uint32(144).uint32(message.maxReplyDepth);
    }
    if (message.editGracePeriod !== BigInt(0)) {
      writer.uint32(152).int64(message.editGracePeriod);
    }
    if (message.editMaxWindow !== BigInt(0)) {
      writer.uint32(160).int64(message.editMaxWindow);
    }
    if (message.maxFollowsPerDay !== BigInt(0)) {
      writer.uint32(168).uint64(message.maxFollowsPerDay);
    }
    if (message.archiveThreshold !== BigInt(0)) {
      writer.uint32(176).int64(message.archiveThreshold);
    }
    if (message.unarchiveCooldown !== BigInt(0)) {
      writer.uint32(184).int64(message.unarchiveCooldown);
    }
    if (message.archiveCooldown !== BigInt(0)) {
      writer.uint32(192).int64(message.archiveCooldown);
    }
    if (message.hideAppealCooldown !== BigInt(0)) {
      writer.uint32(200).int64(message.hideAppealCooldown);
    }
    if (message.lockAppealCooldown !== BigInt(0)) {
      writer.uint32(208).int64(message.lockAppealCooldown);
    }
    if (message.moveAppealCooldown !== BigInt(0)) {
      writer.uint32(216).int64(message.moveAppealCooldown);
    }
    if (message.costPerByteAmount !== "") {
      writer.uint32(226).string(message.costPerByteAmount);
    }
    if (message.costPerByteExempt === true) {
      writer.uint32(232).bool(message.costPerByteExempt);
    }
    if (message.ephemeralTtl !== BigInt(0)) {
      writer.uint32(240).int64(message.ephemeralTtl);
    }
    if (message.convictionRenewalThreshold !== "") {
      writer.uint32(298).string(Decimal.fromUserInput(message.convictionRenewalThreshold, 18).atomics);
    }
    if (message.convictionRenewalPeriod !== BigInt(0)) {
      writer.uint32(304).int64(message.convictionRenewalPeriod);
    }
    if (message.minSentinelBond !== "") {
      writer.uint32(322).string(message.minSentinelBond);
    }
    if (message.minSentinelRepTier !== BigInt(0)) {
      writer.uint32(328).uint64(message.minSentinelRepTier);
    }
    if (message.minSentinelTrustLevel !== "") {
      writer.uint32(338).string(message.minSentinelTrustLevel);
    }
    if (message.minSentinelAgeBlocks !== BigInt(0)) {
      writer.uint32(344).int64(message.minSentinelAgeBlocks);
    }
    if (message.sentinelDemotionCooldown !== BigInt(0)) {
      writer.uint32(352).int64(message.sentinelDemotionCooldown);
    }
    if (message.sentinelDemotionThreshold !== "") {
      writer.uint32(362).string(message.sentinelDemotionThreshold);
    }
    if (message.sentinelUnhideWindow !== BigInt(0)) {
      writer.uint32(368).int64(message.sentinelUnhideWindow);
    }
    if (message.sentinelUnbondCooldown !== BigInt(0)) {
      writer.uint32(376).int64(message.sentinelUnbondCooldown);
    }
    if (message.makePermanentMinTrustLevel !== 0) {
      writer.uint32(384).uint32(message.makePermanentMinTrustLevel);
    }
    if (message.maxPromotionsPerBlock !== 0) {
      writer.uint32(392).uint32(message.maxPromotionsPerBlock);
    }
    if (message.authorRepSlash !== "") {
      writer.uint32(402).string(Decimal.fromUserInput(message.authorRepSlash, 18).atomics);
    }
    if (message.maxMakePermanentPerDay !== BigInt(0)) {
      writer.uint32(408).uint64(message.maxMakePermanentPerDay);
    }
    if (message.minPostConvictionStake !== "") {
      writer.uint32(482).string(message.minPostConvictionStake);
    }
    if (message.postConvictionLockSeconds !== BigInt(0)) {
      writer.uint32(488).int64(message.postConvictionLockSeconds);
    }
    if (message.postConvictionStreamRatePerBlock !== "") {
      writer.uint32(498).string(Decimal.fromUserInput(message.postConvictionStreamRatePerBlock, 18).atomics);
    }
    if (message.maxForumRepPerTagPerEpoch !== "") {
      writer.uint32(506).string(Decimal.fromUserInput(message.maxForumRepPerTagPerEpoch, 18).atomics);
    }
    if (message.postConvictionStakerSlashBps !== BigInt(0)) {
      writer.uint32(512).uint64(message.postConvictionStakerSlashBps);
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
          message.forumPaused = reader.bool();
          break;
        case 2:
          message.moderationPaused = reader.bool();
          break;
        case 3:
          message.bountiesEnabled = reader.bool();
          break;
        case 4:
          message.reactionsEnabled = reader.bool();
          break;
        case 5:
          message.appealsPaused = reader.bool();
          break;
        case 6:
          message.editingEnabled = reader.bool();
          break;
        case 7:
          message.spamTaxAmount = reader.string();
          break;
        case 8:
          message.reactionSpamTaxAmount = reader.string();
          break;
        case 9:
          message.flagSpamTaxAmount = reader.string();
          break;
        case 10:
          message.downvoteDepositAmount = reader.string();
          break;
        case 11:
          message.appealFeeAmount = reader.string();
          break;
        case 12:
          message.lockAppealFeeAmount = reader.string();
          break;
        case 13:
          message.moveAppealFeeAmount = reader.string();
          break;
        case 14:
          message.editFeeAmount = reader.string();
          break;
        case 15:
          message.bountyCancellationFeePercent = reader.uint64();
          break;
        case 16:
          message.maxContentSize = reader.uint64();
          break;
        case 17:
          message.dailyPostLimit = reader.uint64();
          break;
        case 18:
          message.maxReplyDepth = reader.uint32();
          break;
        case 19:
          message.editGracePeriod = reader.int64();
          break;
        case 20:
          message.editMaxWindow = reader.int64();
          break;
        case 21:
          message.maxFollowsPerDay = reader.uint64();
          break;
        case 22:
          message.archiveThreshold = reader.int64();
          break;
        case 23:
          message.unarchiveCooldown = reader.int64();
          break;
        case 24:
          message.archiveCooldown = reader.int64();
          break;
        case 25:
          message.hideAppealCooldown = reader.int64();
          break;
        case 26:
          message.lockAppealCooldown = reader.int64();
          break;
        case 27:
          message.moveAppealCooldown = reader.int64();
          break;
        case 28:
          message.costPerByteAmount = reader.string();
          break;
        case 29:
          message.costPerByteExempt = reader.bool();
          break;
        case 30:
          message.ephemeralTtl = reader.int64();
          break;
        case 37:
          message.convictionRenewalThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 38:
          message.convictionRenewalPeriod = reader.int64();
          break;
        case 40:
          message.minSentinelBond = reader.string();
          break;
        case 41:
          message.minSentinelRepTier = reader.uint64();
          break;
        case 42:
          message.minSentinelTrustLevel = reader.string();
          break;
        case 43:
          message.minSentinelAgeBlocks = reader.int64();
          break;
        case 44:
          message.sentinelDemotionCooldown = reader.int64();
          break;
        case 45:
          message.sentinelDemotionThreshold = reader.string();
          break;
        case 46:
          message.sentinelUnhideWindow = reader.int64();
          break;
        case 47:
          message.sentinelUnbondCooldown = reader.int64();
          break;
        case 48:
          message.makePermanentMinTrustLevel = reader.uint32();
          break;
        case 49:
          message.maxPromotionsPerBlock = reader.uint32();
          break;
        case 50:
          message.authorRepSlash = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 51:
          message.maxMakePermanentPerDay = reader.uint64();
          break;
        case 60:
          message.minPostConvictionStake = reader.string();
          break;
        case 61:
          message.postConvictionLockSeconds = reader.int64();
          break;
        case 62:
          message.postConvictionStreamRatePerBlock = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 63:
          message.maxForumRepPerTagPerEpoch = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 64:
          message.postConvictionStakerSlashBps = reader.uint64();
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
    message.forumPaused = object.forumPaused ?? false;
    message.moderationPaused = object.moderationPaused ?? false;
    message.bountiesEnabled = object.bountiesEnabled ?? false;
    message.reactionsEnabled = object.reactionsEnabled ?? false;
    message.appealsPaused = object.appealsPaused ?? false;
    message.editingEnabled = object.editingEnabled ?? false;
    message.spamTaxAmount = object.spamTaxAmount ?? "";
    message.reactionSpamTaxAmount = object.reactionSpamTaxAmount ?? "";
    message.flagSpamTaxAmount = object.flagSpamTaxAmount ?? "";
    message.downvoteDepositAmount = object.downvoteDepositAmount ?? "";
    message.appealFeeAmount = object.appealFeeAmount ?? "";
    message.lockAppealFeeAmount = object.lockAppealFeeAmount ?? "";
    message.moveAppealFeeAmount = object.moveAppealFeeAmount ?? "";
    message.editFeeAmount = object.editFeeAmount ?? "";
    message.bountyCancellationFeePercent = object.bountyCancellationFeePercent !== undefined && object.bountyCancellationFeePercent !== null ? BigInt(object.bountyCancellationFeePercent.toString()) : BigInt(0);
    message.maxContentSize = object.maxContentSize !== undefined && object.maxContentSize !== null ? BigInt(object.maxContentSize.toString()) : BigInt(0);
    message.dailyPostLimit = object.dailyPostLimit !== undefined && object.dailyPostLimit !== null ? BigInt(object.dailyPostLimit.toString()) : BigInt(0);
    message.maxReplyDepth = object.maxReplyDepth ?? 0;
    message.editGracePeriod = object.editGracePeriod !== undefined && object.editGracePeriod !== null ? BigInt(object.editGracePeriod.toString()) : BigInt(0);
    message.editMaxWindow = object.editMaxWindow !== undefined && object.editMaxWindow !== null ? BigInt(object.editMaxWindow.toString()) : BigInt(0);
    message.maxFollowsPerDay = object.maxFollowsPerDay !== undefined && object.maxFollowsPerDay !== null ? BigInt(object.maxFollowsPerDay.toString()) : BigInt(0);
    message.archiveThreshold = object.archiveThreshold !== undefined && object.archiveThreshold !== null ? BigInt(object.archiveThreshold.toString()) : BigInt(0);
    message.unarchiveCooldown = object.unarchiveCooldown !== undefined && object.unarchiveCooldown !== null ? BigInt(object.unarchiveCooldown.toString()) : BigInt(0);
    message.archiveCooldown = object.archiveCooldown !== undefined && object.archiveCooldown !== null ? BigInt(object.archiveCooldown.toString()) : BigInt(0);
    message.hideAppealCooldown = object.hideAppealCooldown !== undefined && object.hideAppealCooldown !== null ? BigInt(object.hideAppealCooldown.toString()) : BigInt(0);
    message.lockAppealCooldown = object.lockAppealCooldown !== undefined && object.lockAppealCooldown !== null ? BigInt(object.lockAppealCooldown.toString()) : BigInt(0);
    message.moveAppealCooldown = object.moveAppealCooldown !== undefined && object.moveAppealCooldown !== null ? BigInt(object.moveAppealCooldown.toString()) : BigInt(0);
    message.costPerByteAmount = object.costPerByteAmount ?? "";
    message.costPerByteExempt = object.costPerByteExempt ?? false;
    message.ephemeralTtl = object.ephemeralTtl !== undefined && object.ephemeralTtl !== null ? BigInt(object.ephemeralTtl.toString()) : BigInt(0);
    message.convictionRenewalThreshold = object.convictionRenewalThreshold ?? "";
    message.convictionRenewalPeriod = object.convictionRenewalPeriod !== undefined && object.convictionRenewalPeriod !== null ? BigInt(object.convictionRenewalPeriod.toString()) : BigInt(0);
    message.minSentinelBond = object.minSentinelBond ?? "";
    message.minSentinelRepTier = object.minSentinelRepTier !== undefined && object.minSentinelRepTier !== null ? BigInt(object.minSentinelRepTier.toString()) : BigInt(0);
    message.minSentinelTrustLevel = object.minSentinelTrustLevel ?? "";
    message.minSentinelAgeBlocks = object.minSentinelAgeBlocks !== undefined && object.minSentinelAgeBlocks !== null ? BigInt(object.minSentinelAgeBlocks.toString()) : BigInt(0);
    message.sentinelDemotionCooldown = object.sentinelDemotionCooldown !== undefined && object.sentinelDemotionCooldown !== null ? BigInt(object.sentinelDemotionCooldown.toString()) : BigInt(0);
    message.sentinelDemotionThreshold = object.sentinelDemotionThreshold ?? "";
    message.sentinelUnhideWindow = object.sentinelUnhideWindow !== undefined && object.sentinelUnhideWindow !== null ? BigInt(object.sentinelUnhideWindow.toString()) : BigInt(0);
    message.sentinelUnbondCooldown = object.sentinelUnbondCooldown !== undefined && object.sentinelUnbondCooldown !== null ? BigInt(object.sentinelUnbondCooldown.toString()) : BigInt(0);
    message.makePermanentMinTrustLevel = object.makePermanentMinTrustLevel ?? 0;
    message.maxPromotionsPerBlock = object.maxPromotionsPerBlock ?? 0;
    message.authorRepSlash = object.authorRepSlash ?? "";
    message.maxMakePermanentPerDay = object.maxMakePermanentPerDay !== undefined && object.maxMakePermanentPerDay !== null ? BigInt(object.maxMakePermanentPerDay.toString()) : BigInt(0);
    message.minPostConvictionStake = object.minPostConvictionStake ?? "";
    message.postConvictionLockSeconds = object.postConvictionLockSeconds !== undefined && object.postConvictionLockSeconds !== null ? BigInt(object.postConvictionLockSeconds.toString()) : BigInt(0);
    message.postConvictionStreamRatePerBlock = object.postConvictionStreamRatePerBlock ?? "";
    message.maxForumRepPerTagPerEpoch = object.maxForumRepPerTagPerEpoch ?? "";
    message.postConvictionStakerSlashBps = object.postConvictionStakerSlashBps !== undefined && object.postConvictionStakerSlashBps !== null ? BigInt(object.postConvictionStakerSlashBps.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.forum_paused !== undefined && object.forum_paused !== null) {
      message.forumPaused = object.forum_paused;
    }
    if (object.moderation_paused !== undefined && object.moderation_paused !== null) {
      message.moderationPaused = object.moderation_paused;
    }
    if (object.bounties_enabled !== undefined && object.bounties_enabled !== null) {
      message.bountiesEnabled = object.bounties_enabled;
    }
    if (object.reactions_enabled !== undefined && object.reactions_enabled !== null) {
      message.reactionsEnabled = object.reactions_enabled;
    }
    if (object.appeals_paused !== undefined && object.appeals_paused !== null) {
      message.appealsPaused = object.appeals_paused;
    }
    if (object.editing_enabled !== undefined && object.editing_enabled !== null) {
      message.editingEnabled = object.editing_enabled;
    }
    if (object.spam_tax_amount !== undefined && object.spam_tax_amount !== null) {
      message.spamTaxAmount = object.spam_tax_amount;
    }
    if (object.reaction_spam_tax_amount !== undefined && object.reaction_spam_tax_amount !== null) {
      message.reactionSpamTaxAmount = object.reaction_spam_tax_amount;
    }
    if (object.flag_spam_tax_amount !== undefined && object.flag_spam_tax_amount !== null) {
      message.flagSpamTaxAmount = object.flag_spam_tax_amount;
    }
    if (object.downvote_deposit_amount !== undefined && object.downvote_deposit_amount !== null) {
      message.downvoteDepositAmount = object.downvote_deposit_amount;
    }
    if (object.appeal_fee_amount !== undefined && object.appeal_fee_amount !== null) {
      message.appealFeeAmount = object.appeal_fee_amount;
    }
    if (object.lock_appeal_fee_amount !== undefined && object.lock_appeal_fee_amount !== null) {
      message.lockAppealFeeAmount = object.lock_appeal_fee_amount;
    }
    if (object.move_appeal_fee_amount !== undefined && object.move_appeal_fee_amount !== null) {
      message.moveAppealFeeAmount = object.move_appeal_fee_amount;
    }
    if (object.edit_fee_amount !== undefined && object.edit_fee_amount !== null) {
      message.editFeeAmount = object.edit_fee_amount;
    }
    if (object.bounty_cancellation_fee_percent !== undefined && object.bounty_cancellation_fee_percent !== null) {
      message.bountyCancellationFeePercent = BigInt(object.bounty_cancellation_fee_percent);
    }
    if (object.max_content_size !== undefined && object.max_content_size !== null) {
      message.maxContentSize = BigInt(object.max_content_size);
    }
    if (object.daily_post_limit !== undefined && object.daily_post_limit !== null) {
      message.dailyPostLimit = BigInt(object.daily_post_limit);
    }
    if (object.max_reply_depth !== undefined && object.max_reply_depth !== null) {
      message.maxReplyDepth = object.max_reply_depth;
    }
    if (object.edit_grace_period !== undefined && object.edit_grace_period !== null) {
      message.editGracePeriod = BigInt(object.edit_grace_period);
    }
    if (object.edit_max_window !== undefined && object.edit_max_window !== null) {
      message.editMaxWindow = BigInt(object.edit_max_window);
    }
    if (object.max_follows_per_day !== undefined && object.max_follows_per_day !== null) {
      message.maxFollowsPerDay = BigInt(object.max_follows_per_day);
    }
    if (object.archive_threshold !== undefined && object.archive_threshold !== null) {
      message.archiveThreshold = BigInt(object.archive_threshold);
    }
    if (object.unarchive_cooldown !== undefined && object.unarchive_cooldown !== null) {
      message.unarchiveCooldown = BigInt(object.unarchive_cooldown);
    }
    if (object.archive_cooldown !== undefined && object.archive_cooldown !== null) {
      message.archiveCooldown = BigInt(object.archive_cooldown);
    }
    if (object.hide_appeal_cooldown !== undefined && object.hide_appeal_cooldown !== null) {
      message.hideAppealCooldown = BigInt(object.hide_appeal_cooldown);
    }
    if (object.lock_appeal_cooldown !== undefined && object.lock_appeal_cooldown !== null) {
      message.lockAppealCooldown = BigInt(object.lock_appeal_cooldown);
    }
    if (object.move_appeal_cooldown !== undefined && object.move_appeal_cooldown !== null) {
      message.moveAppealCooldown = BigInt(object.move_appeal_cooldown);
    }
    if (object.cost_per_byte_amount !== undefined && object.cost_per_byte_amount !== null) {
      message.costPerByteAmount = object.cost_per_byte_amount;
    }
    if (object.cost_per_byte_exempt !== undefined && object.cost_per_byte_exempt !== null) {
      message.costPerByteExempt = object.cost_per_byte_exempt;
    }
    if (object.ephemeral_ttl !== undefined && object.ephemeral_ttl !== null) {
      message.ephemeralTtl = BigInt(object.ephemeral_ttl);
    }
    if (object.conviction_renewal_threshold !== undefined && object.conviction_renewal_threshold !== null) {
      message.convictionRenewalThreshold = object.conviction_renewal_threshold;
    }
    if (object.conviction_renewal_period !== undefined && object.conviction_renewal_period !== null) {
      message.convictionRenewalPeriod = BigInt(object.conviction_renewal_period);
    }
    if (object.min_sentinel_bond !== undefined && object.min_sentinel_bond !== null) {
      message.minSentinelBond = object.min_sentinel_bond;
    }
    if (object.min_sentinel_rep_tier !== undefined && object.min_sentinel_rep_tier !== null) {
      message.minSentinelRepTier = BigInt(object.min_sentinel_rep_tier);
    }
    if (object.min_sentinel_trust_level !== undefined && object.min_sentinel_trust_level !== null) {
      message.minSentinelTrustLevel = object.min_sentinel_trust_level;
    }
    if (object.min_sentinel_age_blocks !== undefined && object.min_sentinel_age_blocks !== null) {
      message.minSentinelAgeBlocks = BigInt(object.min_sentinel_age_blocks);
    }
    if (object.sentinel_demotion_cooldown !== undefined && object.sentinel_demotion_cooldown !== null) {
      message.sentinelDemotionCooldown = BigInt(object.sentinel_demotion_cooldown);
    }
    if (object.sentinel_demotion_threshold !== undefined && object.sentinel_demotion_threshold !== null) {
      message.sentinelDemotionThreshold = object.sentinel_demotion_threshold;
    }
    if (object.sentinel_unhide_window !== undefined && object.sentinel_unhide_window !== null) {
      message.sentinelUnhideWindow = BigInt(object.sentinel_unhide_window);
    }
    if (object.sentinel_unbond_cooldown !== undefined && object.sentinel_unbond_cooldown !== null) {
      message.sentinelUnbondCooldown = BigInt(object.sentinel_unbond_cooldown);
    }
    if (object.make_permanent_min_trust_level !== undefined && object.make_permanent_min_trust_level !== null) {
      message.makePermanentMinTrustLevel = object.make_permanent_min_trust_level;
    }
    if (object.max_promotions_per_block !== undefined && object.max_promotions_per_block !== null) {
      message.maxPromotionsPerBlock = object.max_promotions_per_block;
    }
    if (object.author_rep_slash !== undefined && object.author_rep_slash !== null) {
      message.authorRepSlash = object.author_rep_slash;
    }
    if (object.max_make_permanent_per_day !== undefined && object.max_make_permanent_per_day !== null) {
      message.maxMakePermanentPerDay = BigInt(object.max_make_permanent_per_day);
    }
    if (object.min_post_conviction_stake !== undefined && object.min_post_conviction_stake !== null) {
      message.minPostConvictionStake = object.min_post_conviction_stake;
    }
    if (object.post_conviction_lock_seconds !== undefined && object.post_conviction_lock_seconds !== null) {
      message.postConvictionLockSeconds = BigInt(object.post_conviction_lock_seconds);
    }
    if (object.post_conviction_stream_rate_per_block !== undefined && object.post_conviction_stream_rate_per_block !== null) {
      message.postConvictionStreamRatePerBlock = object.post_conviction_stream_rate_per_block;
    }
    if (object.max_forum_rep_per_tag_per_epoch !== undefined && object.max_forum_rep_per_tag_per_epoch !== null) {
      message.maxForumRepPerTagPerEpoch = object.max_forum_rep_per_tag_per_epoch;
    }
    if (object.post_conviction_staker_slash_bps !== undefined && object.post_conviction_staker_slash_bps !== null) {
      message.postConvictionStakerSlashBps = BigInt(object.post_conviction_staker_slash_bps);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.forum_paused = message.forumPaused === false ? undefined : message.forumPaused;
    obj.moderation_paused = message.moderationPaused === false ? undefined : message.moderationPaused;
    obj.bounties_enabled = message.bountiesEnabled === false ? undefined : message.bountiesEnabled;
    obj.reactions_enabled = message.reactionsEnabled === false ? undefined : message.reactionsEnabled;
    obj.appeals_paused = message.appealsPaused === false ? undefined : message.appealsPaused;
    obj.editing_enabled = message.editingEnabled === false ? undefined : message.editingEnabled;
    obj.spam_tax_amount = message.spamTaxAmount === "" ? undefined : message.spamTaxAmount;
    obj.reaction_spam_tax_amount = message.reactionSpamTaxAmount === "" ? undefined : message.reactionSpamTaxAmount;
    obj.flag_spam_tax_amount = message.flagSpamTaxAmount === "" ? undefined : message.flagSpamTaxAmount;
    obj.downvote_deposit_amount = message.downvoteDepositAmount === "" ? undefined : message.downvoteDepositAmount;
    obj.appeal_fee_amount = message.appealFeeAmount === "" ? undefined : message.appealFeeAmount;
    obj.lock_appeal_fee_amount = message.lockAppealFeeAmount === "" ? undefined : message.lockAppealFeeAmount;
    obj.move_appeal_fee_amount = message.moveAppealFeeAmount === "" ? undefined : message.moveAppealFeeAmount;
    obj.edit_fee_amount = message.editFeeAmount === "" ? undefined : message.editFeeAmount;
    obj.bounty_cancellation_fee_percent = message.bountyCancellationFeePercent !== BigInt(0) ? message.bountyCancellationFeePercent?.toString() : undefined;
    obj.max_content_size = message.maxContentSize !== BigInt(0) ? message.maxContentSize?.toString() : undefined;
    obj.daily_post_limit = message.dailyPostLimit !== BigInt(0) ? message.dailyPostLimit?.toString() : undefined;
    obj.max_reply_depth = message.maxReplyDepth === 0 ? undefined : message.maxReplyDepth;
    obj.edit_grace_period = message.editGracePeriod !== BigInt(0) ? message.editGracePeriod?.toString() : undefined;
    obj.edit_max_window = message.editMaxWindow !== BigInt(0) ? message.editMaxWindow?.toString() : undefined;
    obj.max_follows_per_day = message.maxFollowsPerDay !== BigInt(0) ? message.maxFollowsPerDay?.toString() : undefined;
    obj.archive_threshold = message.archiveThreshold !== BigInt(0) ? message.archiveThreshold?.toString() : undefined;
    obj.unarchive_cooldown = message.unarchiveCooldown !== BigInt(0) ? message.unarchiveCooldown?.toString() : undefined;
    obj.archive_cooldown = message.archiveCooldown !== BigInt(0) ? message.archiveCooldown?.toString() : undefined;
    obj.hide_appeal_cooldown = message.hideAppealCooldown !== BigInt(0) ? message.hideAppealCooldown?.toString() : undefined;
    obj.lock_appeal_cooldown = message.lockAppealCooldown !== BigInt(0) ? message.lockAppealCooldown?.toString() : undefined;
    obj.move_appeal_cooldown = message.moveAppealCooldown !== BigInt(0) ? message.moveAppealCooldown?.toString() : undefined;
    obj.cost_per_byte_amount = message.costPerByteAmount === "" ? undefined : message.costPerByteAmount;
    obj.cost_per_byte_exempt = message.costPerByteExempt === false ? undefined : message.costPerByteExempt;
    obj.ephemeral_ttl = message.ephemeralTtl !== BigInt(0) ? message.ephemeralTtl?.toString() : undefined;
    obj.conviction_renewal_threshold = message.convictionRenewalThreshold === "" ? undefined : message.convictionRenewalThreshold;
    obj.conviction_renewal_period = message.convictionRenewalPeriod !== BigInt(0) ? message.convictionRenewalPeriod?.toString() : undefined;
    obj.min_sentinel_bond = message.minSentinelBond === "" ? undefined : message.minSentinelBond;
    obj.min_sentinel_rep_tier = message.minSentinelRepTier !== BigInt(0) ? message.minSentinelRepTier?.toString() : undefined;
    obj.min_sentinel_trust_level = message.minSentinelTrustLevel === "" ? undefined : message.minSentinelTrustLevel;
    obj.min_sentinel_age_blocks = message.minSentinelAgeBlocks !== BigInt(0) ? message.minSentinelAgeBlocks?.toString() : undefined;
    obj.sentinel_demotion_cooldown = message.sentinelDemotionCooldown !== BigInt(0) ? message.sentinelDemotionCooldown?.toString() : undefined;
    obj.sentinel_demotion_threshold = message.sentinelDemotionThreshold === "" ? undefined : message.sentinelDemotionThreshold;
    obj.sentinel_unhide_window = message.sentinelUnhideWindow !== BigInt(0) ? message.sentinelUnhideWindow?.toString() : undefined;
    obj.sentinel_unbond_cooldown = message.sentinelUnbondCooldown !== BigInt(0) ? message.sentinelUnbondCooldown?.toString() : undefined;
    obj.make_permanent_min_trust_level = message.makePermanentMinTrustLevel === 0 ? undefined : message.makePermanentMinTrustLevel;
    obj.max_promotions_per_block = message.maxPromotionsPerBlock === 0 ? undefined : message.maxPromotionsPerBlock;
    obj.author_rep_slash = message.authorRepSlash === "" ? undefined : message.authorRepSlash;
    obj.max_make_permanent_per_day = message.maxMakePermanentPerDay !== BigInt(0) ? message.maxMakePermanentPerDay?.toString() : undefined;
    obj.min_post_conviction_stake = message.minPostConvictionStake === "" ? undefined : message.minPostConvictionStake;
    obj.post_conviction_lock_seconds = message.postConvictionLockSeconds !== BigInt(0) ? message.postConvictionLockSeconds?.toString() : undefined;
    obj.post_conviction_stream_rate_per_block = message.postConvictionStreamRatePerBlock === "" ? undefined : message.postConvictionStreamRatePerBlock;
    obj.max_forum_rep_per_tag_per_epoch = message.maxForumRepPerTagPerEpoch === "" ? undefined : message.maxForumRepPerTagPerEpoch;
    obj.post_conviction_staker_slash_bps = message.postConvictionStakerSlashBps !== BigInt(0) ? message.postConvictionStakerSlashBps?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/forum/Params",
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
      typeUrl: "/sparkdream.forum.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseForumOperationalParams(): ForumOperationalParams {
  return {
    bountiesEnabled: false,
    reactionsEnabled: false,
    editingEnabled: false,
    spamTaxAmount: "",
    reactionSpamTaxAmount: "",
    flagSpamTaxAmount: "",
    downvoteDepositAmount: "",
    appealFeeAmount: "",
    lockAppealFeeAmount: "",
    moveAppealFeeAmount: "",
    editFeeAmount: "",
    costPerByteAmount: "",
    costPerByteExempt: false,
    maxContentSize: BigInt(0),
    dailyPostLimit: BigInt(0),
    maxReplyDepth: 0,
    maxFollowsPerDay: BigInt(0),
    bountyCancellationFeePercent: BigInt(0),
    editGracePeriod: BigInt(0),
    editMaxWindow: BigInt(0),
    archiveThreshold: BigInt(0),
    unarchiveCooldown: BigInt(0),
    archiveCooldown: BigInt(0),
    hideAppealCooldown: BigInt(0),
    lockAppealCooldown: BigInt(0),
    moveAppealCooldown: BigInt(0),
    ephemeralTtl: BigInt(0),
    convictionRenewalThreshold: "",
    convictionRenewalPeriod: BigInt(0),
    minSentinelBond: "",
    minSentinelRepTier: BigInt(0),
    minSentinelTrustLevel: "",
    minSentinelAgeBlocks: BigInt(0),
    sentinelDemotionCooldown: BigInt(0),
    sentinelDemotionThreshold: "",
    sentinelUnhideWindow: BigInt(0),
    sentinelUnbondCooldown: BigInt(0),
    makePermanentMinTrustLevel: 0,
    maxPromotionsPerBlock: 0,
    authorRepSlash: "",
    maxMakePermanentPerDay: BigInt(0),
    minPostConvictionStake: "",
    postConvictionLockSeconds: BigInt(0),
    postConvictionStreamRatePerBlock: "",
    maxForumRepPerTagPerEpoch: "",
    postConvictionStakerSlashBps: BigInt(0)
  };
}
/**
 * ForumOperationalParams defines the operational parameters that can be updated
 * by the Commons Council Operations Committee without a full governance proposal.
 * Governance-only fields (forum_paused, moderation_paused, appeals_paused) are
 * excluded and can only be changed via MsgUpdateParams.
 * @name ForumOperationalParams
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.ForumOperationalParams
 */
export const ForumOperationalParams = {
  typeUrl: "/sparkdream.forum.v1.ForumOperationalParams",
  aminoType: "sparkdream/x/forum/ForumOperationalParams",
  encode(message: ForumOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bountiesEnabled === true) {
      writer.uint32(8).bool(message.bountiesEnabled);
    }
    if (message.reactionsEnabled === true) {
      writer.uint32(16).bool(message.reactionsEnabled);
    }
    if (message.editingEnabled === true) {
      writer.uint32(24).bool(message.editingEnabled);
    }
    if (message.spamTaxAmount !== "") {
      writer.uint32(34).string(message.spamTaxAmount);
    }
    if (message.reactionSpamTaxAmount !== "") {
      writer.uint32(42).string(message.reactionSpamTaxAmount);
    }
    if (message.flagSpamTaxAmount !== "") {
      writer.uint32(50).string(message.flagSpamTaxAmount);
    }
    if (message.downvoteDepositAmount !== "") {
      writer.uint32(58).string(message.downvoteDepositAmount);
    }
    if (message.appealFeeAmount !== "") {
      writer.uint32(66).string(message.appealFeeAmount);
    }
    if (message.lockAppealFeeAmount !== "") {
      writer.uint32(74).string(message.lockAppealFeeAmount);
    }
    if (message.moveAppealFeeAmount !== "") {
      writer.uint32(82).string(message.moveAppealFeeAmount);
    }
    if (message.editFeeAmount !== "") {
      writer.uint32(90).string(message.editFeeAmount);
    }
    if (message.costPerByteAmount !== "") {
      writer.uint32(98).string(message.costPerByteAmount);
    }
    if (message.costPerByteExempt === true) {
      writer.uint32(104).bool(message.costPerByteExempt);
    }
    if (message.maxContentSize !== BigInt(0)) {
      writer.uint32(112).uint64(message.maxContentSize);
    }
    if (message.dailyPostLimit !== BigInt(0)) {
      writer.uint32(120).uint64(message.dailyPostLimit);
    }
    if (message.maxReplyDepth !== 0) {
      writer.uint32(128).uint32(message.maxReplyDepth);
    }
    if (message.maxFollowsPerDay !== BigInt(0)) {
      writer.uint32(136).uint64(message.maxFollowsPerDay);
    }
    if (message.bountyCancellationFeePercent !== BigInt(0)) {
      writer.uint32(144).uint64(message.bountyCancellationFeePercent);
    }
    if (message.editGracePeriod !== BigInt(0)) {
      writer.uint32(152).int64(message.editGracePeriod);
    }
    if (message.editMaxWindow !== BigInt(0)) {
      writer.uint32(160).int64(message.editMaxWindow);
    }
    if (message.archiveThreshold !== BigInt(0)) {
      writer.uint32(168).int64(message.archiveThreshold);
    }
    if (message.unarchiveCooldown !== BigInt(0)) {
      writer.uint32(176).int64(message.unarchiveCooldown);
    }
    if (message.archiveCooldown !== BigInt(0)) {
      writer.uint32(184).int64(message.archiveCooldown);
    }
    if (message.hideAppealCooldown !== BigInt(0)) {
      writer.uint32(192).int64(message.hideAppealCooldown);
    }
    if (message.lockAppealCooldown !== BigInt(0)) {
      writer.uint32(200).int64(message.lockAppealCooldown);
    }
    if (message.moveAppealCooldown !== BigInt(0)) {
      writer.uint32(208).int64(message.moveAppealCooldown);
    }
    if (message.ephemeralTtl !== BigInt(0)) {
      writer.uint32(216).int64(message.ephemeralTtl);
    }
    if (message.convictionRenewalThreshold !== "") {
      writer.uint32(250).string(Decimal.fromUserInput(message.convictionRenewalThreshold, 18).atomics);
    }
    if (message.convictionRenewalPeriod !== BigInt(0)) {
      writer.uint32(256).int64(message.convictionRenewalPeriod);
    }
    if (message.minSentinelBond !== "") {
      writer.uint32(322).string(message.minSentinelBond);
    }
    if (message.minSentinelRepTier !== BigInt(0)) {
      writer.uint32(328).uint64(message.minSentinelRepTier);
    }
    if (message.minSentinelTrustLevel !== "") {
      writer.uint32(338).string(message.minSentinelTrustLevel);
    }
    if (message.minSentinelAgeBlocks !== BigInt(0)) {
      writer.uint32(344).int64(message.minSentinelAgeBlocks);
    }
    if (message.sentinelDemotionCooldown !== BigInt(0)) {
      writer.uint32(352).int64(message.sentinelDemotionCooldown);
    }
    if (message.sentinelDemotionThreshold !== "") {
      writer.uint32(362).string(message.sentinelDemotionThreshold);
    }
    if (message.sentinelUnhideWindow !== BigInt(0)) {
      writer.uint32(368).int64(message.sentinelUnhideWindow);
    }
    if (message.sentinelUnbondCooldown !== BigInt(0)) {
      writer.uint32(376).int64(message.sentinelUnbondCooldown);
    }
    if (message.makePermanentMinTrustLevel !== 0) {
      writer.uint32(384).uint32(message.makePermanentMinTrustLevel);
    }
    if (message.maxPromotionsPerBlock !== 0) {
      writer.uint32(392).uint32(message.maxPromotionsPerBlock);
    }
    if (message.authorRepSlash !== "") {
      writer.uint32(402).string(Decimal.fromUserInput(message.authorRepSlash, 18).atomics);
    }
    if (message.maxMakePermanentPerDay !== BigInt(0)) {
      writer.uint32(408).uint64(message.maxMakePermanentPerDay);
    }
    if (message.minPostConvictionStake !== "") {
      writer.uint32(482).string(message.minPostConvictionStake);
    }
    if (message.postConvictionLockSeconds !== BigInt(0)) {
      writer.uint32(488).int64(message.postConvictionLockSeconds);
    }
    if (message.postConvictionStreamRatePerBlock !== "") {
      writer.uint32(498).string(Decimal.fromUserInput(message.postConvictionStreamRatePerBlock, 18).atomics);
    }
    if (message.maxForumRepPerTagPerEpoch !== "") {
      writer.uint32(506).string(Decimal.fromUserInput(message.maxForumRepPerTagPerEpoch, 18).atomics);
    }
    if (message.postConvictionStakerSlashBps !== BigInt(0)) {
      writer.uint32(512).uint64(message.postConvictionStakerSlashBps);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForumOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForumOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bountiesEnabled = reader.bool();
          break;
        case 2:
          message.reactionsEnabled = reader.bool();
          break;
        case 3:
          message.editingEnabled = reader.bool();
          break;
        case 4:
          message.spamTaxAmount = reader.string();
          break;
        case 5:
          message.reactionSpamTaxAmount = reader.string();
          break;
        case 6:
          message.flagSpamTaxAmount = reader.string();
          break;
        case 7:
          message.downvoteDepositAmount = reader.string();
          break;
        case 8:
          message.appealFeeAmount = reader.string();
          break;
        case 9:
          message.lockAppealFeeAmount = reader.string();
          break;
        case 10:
          message.moveAppealFeeAmount = reader.string();
          break;
        case 11:
          message.editFeeAmount = reader.string();
          break;
        case 12:
          message.costPerByteAmount = reader.string();
          break;
        case 13:
          message.costPerByteExempt = reader.bool();
          break;
        case 14:
          message.maxContentSize = reader.uint64();
          break;
        case 15:
          message.dailyPostLimit = reader.uint64();
          break;
        case 16:
          message.maxReplyDepth = reader.uint32();
          break;
        case 17:
          message.maxFollowsPerDay = reader.uint64();
          break;
        case 18:
          message.bountyCancellationFeePercent = reader.uint64();
          break;
        case 19:
          message.editGracePeriod = reader.int64();
          break;
        case 20:
          message.editMaxWindow = reader.int64();
          break;
        case 21:
          message.archiveThreshold = reader.int64();
          break;
        case 22:
          message.unarchiveCooldown = reader.int64();
          break;
        case 23:
          message.archiveCooldown = reader.int64();
          break;
        case 24:
          message.hideAppealCooldown = reader.int64();
          break;
        case 25:
          message.lockAppealCooldown = reader.int64();
          break;
        case 26:
          message.moveAppealCooldown = reader.int64();
          break;
        case 27:
          message.ephemeralTtl = reader.int64();
          break;
        case 31:
          message.convictionRenewalThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 32:
          message.convictionRenewalPeriod = reader.int64();
          break;
        case 40:
          message.minSentinelBond = reader.string();
          break;
        case 41:
          message.minSentinelRepTier = reader.uint64();
          break;
        case 42:
          message.minSentinelTrustLevel = reader.string();
          break;
        case 43:
          message.minSentinelAgeBlocks = reader.int64();
          break;
        case 44:
          message.sentinelDemotionCooldown = reader.int64();
          break;
        case 45:
          message.sentinelDemotionThreshold = reader.string();
          break;
        case 46:
          message.sentinelUnhideWindow = reader.int64();
          break;
        case 47:
          message.sentinelUnbondCooldown = reader.int64();
          break;
        case 48:
          message.makePermanentMinTrustLevel = reader.uint32();
          break;
        case 49:
          message.maxPromotionsPerBlock = reader.uint32();
          break;
        case 50:
          message.authorRepSlash = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 51:
          message.maxMakePermanentPerDay = reader.uint64();
          break;
        case 60:
          message.minPostConvictionStake = reader.string();
          break;
        case 61:
          message.postConvictionLockSeconds = reader.int64();
          break;
        case 62:
          message.postConvictionStreamRatePerBlock = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 63:
          message.maxForumRepPerTagPerEpoch = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 64:
          message.postConvictionStakerSlashBps = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ForumOperationalParams>): ForumOperationalParams {
    const message = createBaseForumOperationalParams();
    message.bountiesEnabled = object.bountiesEnabled ?? false;
    message.reactionsEnabled = object.reactionsEnabled ?? false;
    message.editingEnabled = object.editingEnabled ?? false;
    message.spamTaxAmount = object.spamTaxAmount ?? "";
    message.reactionSpamTaxAmount = object.reactionSpamTaxAmount ?? "";
    message.flagSpamTaxAmount = object.flagSpamTaxAmount ?? "";
    message.downvoteDepositAmount = object.downvoteDepositAmount ?? "";
    message.appealFeeAmount = object.appealFeeAmount ?? "";
    message.lockAppealFeeAmount = object.lockAppealFeeAmount ?? "";
    message.moveAppealFeeAmount = object.moveAppealFeeAmount ?? "";
    message.editFeeAmount = object.editFeeAmount ?? "";
    message.costPerByteAmount = object.costPerByteAmount ?? "";
    message.costPerByteExempt = object.costPerByteExempt ?? false;
    message.maxContentSize = object.maxContentSize !== undefined && object.maxContentSize !== null ? BigInt(object.maxContentSize.toString()) : BigInt(0);
    message.dailyPostLimit = object.dailyPostLimit !== undefined && object.dailyPostLimit !== null ? BigInt(object.dailyPostLimit.toString()) : BigInt(0);
    message.maxReplyDepth = object.maxReplyDepth ?? 0;
    message.maxFollowsPerDay = object.maxFollowsPerDay !== undefined && object.maxFollowsPerDay !== null ? BigInt(object.maxFollowsPerDay.toString()) : BigInt(0);
    message.bountyCancellationFeePercent = object.bountyCancellationFeePercent !== undefined && object.bountyCancellationFeePercent !== null ? BigInt(object.bountyCancellationFeePercent.toString()) : BigInt(0);
    message.editGracePeriod = object.editGracePeriod !== undefined && object.editGracePeriod !== null ? BigInt(object.editGracePeriod.toString()) : BigInt(0);
    message.editMaxWindow = object.editMaxWindow !== undefined && object.editMaxWindow !== null ? BigInt(object.editMaxWindow.toString()) : BigInt(0);
    message.archiveThreshold = object.archiveThreshold !== undefined && object.archiveThreshold !== null ? BigInt(object.archiveThreshold.toString()) : BigInt(0);
    message.unarchiveCooldown = object.unarchiveCooldown !== undefined && object.unarchiveCooldown !== null ? BigInt(object.unarchiveCooldown.toString()) : BigInt(0);
    message.archiveCooldown = object.archiveCooldown !== undefined && object.archiveCooldown !== null ? BigInt(object.archiveCooldown.toString()) : BigInt(0);
    message.hideAppealCooldown = object.hideAppealCooldown !== undefined && object.hideAppealCooldown !== null ? BigInt(object.hideAppealCooldown.toString()) : BigInt(0);
    message.lockAppealCooldown = object.lockAppealCooldown !== undefined && object.lockAppealCooldown !== null ? BigInt(object.lockAppealCooldown.toString()) : BigInt(0);
    message.moveAppealCooldown = object.moveAppealCooldown !== undefined && object.moveAppealCooldown !== null ? BigInt(object.moveAppealCooldown.toString()) : BigInt(0);
    message.ephemeralTtl = object.ephemeralTtl !== undefined && object.ephemeralTtl !== null ? BigInt(object.ephemeralTtl.toString()) : BigInt(0);
    message.convictionRenewalThreshold = object.convictionRenewalThreshold ?? "";
    message.convictionRenewalPeriod = object.convictionRenewalPeriod !== undefined && object.convictionRenewalPeriod !== null ? BigInt(object.convictionRenewalPeriod.toString()) : BigInt(0);
    message.minSentinelBond = object.minSentinelBond ?? "";
    message.minSentinelRepTier = object.minSentinelRepTier !== undefined && object.minSentinelRepTier !== null ? BigInt(object.minSentinelRepTier.toString()) : BigInt(0);
    message.minSentinelTrustLevel = object.minSentinelTrustLevel ?? "";
    message.minSentinelAgeBlocks = object.minSentinelAgeBlocks !== undefined && object.minSentinelAgeBlocks !== null ? BigInt(object.minSentinelAgeBlocks.toString()) : BigInt(0);
    message.sentinelDemotionCooldown = object.sentinelDemotionCooldown !== undefined && object.sentinelDemotionCooldown !== null ? BigInt(object.sentinelDemotionCooldown.toString()) : BigInt(0);
    message.sentinelDemotionThreshold = object.sentinelDemotionThreshold ?? "";
    message.sentinelUnhideWindow = object.sentinelUnhideWindow !== undefined && object.sentinelUnhideWindow !== null ? BigInt(object.sentinelUnhideWindow.toString()) : BigInt(0);
    message.sentinelUnbondCooldown = object.sentinelUnbondCooldown !== undefined && object.sentinelUnbondCooldown !== null ? BigInt(object.sentinelUnbondCooldown.toString()) : BigInt(0);
    message.makePermanentMinTrustLevel = object.makePermanentMinTrustLevel ?? 0;
    message.maxPromotionsPerBlock = object.maxPromotionsPerBlock ?? 0;
    message.authorRepSlash = object.authorRepSlash ?? "";
    message.maxMakePermanentPerDay = object.maxMakePermanentPerDay !== undefined && object.maxMakePermanentPerDay !== null ? BigInt(object.maxMakePermanentPerDay.toString()) : BigInt(0);
    message.minPostConvictionStake = object.minPostConvictionStake ?? "";
    message.postConvictionLockSeconds = object.postConvictionLockSeconds !== undefined && object.postConvictionLockSeconds !== null ? BigInt(object.postConvictionLockSeconds.toString()) : BigInt(0);
    message.postConvictionStreamRatePerBlock = object.postConvictionStreamRatePerBlock ?? "";
    message.maxForumRepPerTagPerEpoch = object.maxForumRepPerTagPerEpoch ?? "";
    message.postConvictionStakerSlashBps = object.postConvictionStakerSlashBps !== undefined && object.postConvictionStakerSlashBps !== null ? BigInt(object.postConvictionStakerSlashBps.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ForumOperationalParamsAmino): ForumOperationalParams {
    const message = createBaseForumOperationalParams();
    if (object.bounties_enabled !== undefined && object.bounties_enabled !== null) {
      message.bountiesEnabled = object.bounties_enabled;
    }
    if (object.reactions_enabled !== undefined && object.reactions_enabled !== null) {
      message.reactionsEnabled = object.reactions_enabled;
    }
    if (object.editing_enabled !== undefined && object.editing_enabled !== null) {
      message.editingEnabled = object.editing_enabled;
    }
    if (object.spam_tax_amount !== undefined && object.spam_tax_amount !== null) {
      message.spamTaxAmount = object.spam_tax_amount;
    }
    if (object.reaction_spam_tax_amount !== undefined && object.reaction_spam_tax_amount !== null) {
      message.reactionSpamTaxAmount = object.reaction_spam_tax_amount;
    }
    if (object.flag_spam_tax_amount !== undefined && object.flag_spam_tax_amount !== null) {
      message.flagSpamTaxAmount = object.flag_spam_tax_amount;
    }
    if (object.downvote_deposit_amount !== undefined && object.downvote_deposit_amount !== null) {
      message.downvoteDepositAmount = object.downvote_deposit_amount;
    }
    if (object.appeal_fee_amount !== undefined && object.appeal_fee_amount !== null) {
      message.appealFeeAmount = object.appeal_fee_amount;
    }
    if (object.lock_appeal_fee_amount !== undefined && object.lock_appeal_fee_amount !== null) {
      message.lockAppealFeeAmount = object.lock_appeal_fee_amount;
    }
    if (object.move_appeal_fee_amount !== undefined && object.move_appeal_fee_amount !== null) {
      message.moveAppealFeeAmount = object.move_appeal_fee_amount;
    }
    if (object.edit_fee_amount !== undefined && object.edit_fee_amount !== null) {
      message.editFeeAmount = object.edit_fee_amount;
    }
    if (object.cost_per_byte_amount !== undefined && object.cost_per_byte_amount !== null) {
      message.costPerByteAmount = object.cost_per_byte_amount;
    }
    if (object.cost_per_byte_exempt !== undefined && object.cost_per_byte_exempt !== null) {
      message.costPerByteExempt = object.cost_per_byte_exempt;
    }
    if (object.max_content_size !== undefined && object.max_content_size !== null) {
      message.maxContentSize = BigInt(object.max_content_size);
    }
    if (object.daily_post_limit !== undefined && object.daily_post_limit !== null) {
      message.dailyPostLimit = BigInt(object.daily_post_limit);
    }
    if (object.max_reply_depth !== undefined && object.max_reply_depth !== null) {
      message.maxReplyDepth = object.max_reply_depth;
    }
    if (object.max_follows_per_day !== undefined && object.max_follows_per_day !== null) {
      message.maxFollowsPerDay = BigInt(object.max_follows_per_day);
    }
    if (object.bounty_cancellation_fee_percent !== undefined && object.bounty_cancellation_fee_percent !== null) {
      message.bountyCancellationFeePercent = BigInt(object.bounty_cancellation_fee_percent);
    }
    if (object.edit_grace_period !== undefined && object.edit_grace_period !== null) {
      message.editGracePeriod = BigInt(object.edit_grace_period);
    }
    if (object.edit_max_window !== undefined && object.edit_max_window !== null) {
      message.editMaxWindow = BigInt(object.edit_max_window);
    }
    if (object.archive_threshold !== undefined && object.archive_threshold !== null) {
      message.archiveThreshold = BigInt(object.archive_threshold);
    }
    if (object.unarchive_cooldown !== undefined && object.unarchive_cooldown !== null) {
      message.unarchiveCooldown = BigInt(object.unarchive_cooldown);
    }
    if (object.archive_cooldown !== undefined && object.archive_cooldown !== null) {
      message.archiveCooldown = BigInt(object.archive_cooldown);
    }
    if (object.hide_appeal_cooldown !== undefined && object.hide_appeal_cooldown !== null) {
      message.hideAppealCooldown = BigInt(object.hide_appeal_cooldown);
    }
    if (object.lock_appeal_cooldown !== undefined && object.lock_appeal_cooldown !== null) {
      message.lockAppealCooldown = BigInt(object.lock_appeal_cooldown);
    }
    if (object.move_appeal_cooldown !== undefined && object.move_appeal_cooldown !== null) {
      message.moveAppealCooldown = BigInt(object.move_appeal_cooldown);
    }
    if (object.ephemeral_ttl !== undefined && object.ephemeral_ttl !== null) {
      message.ephemeralTtl = BigInt(object.ephemeral_ttl);
    }
    if (object.conviction_renewal_threshold !== undefined && object.conviction_renewal_threshold !== null) {
      message.convictionRenewalThreshold = object.conviction_renewal_threshold;
    }
    if (object.conviction_renewal_period !== undefined && object.conviction_renewal_period !== null) {
      message.convictionRenewalPeriod = BigInt(object.conviction_renewal_period);
    }
    if (object.min_sentinel_bond !== undefined && object.min_sentinel_bond !== null) {
      message.minSentinelBond = object.min_sentinel_bond;
    }
    if (object.min_sentinel_rep_tier !== undefined && object.min_sentinel_rep_tier !== null) {
      message.minSentinelRepTier = BigInt(object.min_sentinel_rep_tier);
    }
    if (object.min_sentinel_trust_level !== undefined && object.min_sentinel_trust_level !== null) {
      message.minSentinelTrustLevel = object.min_sentinel_trust_level;
    }
    if (object.min_sentinel_age_blocks !== undefined && object.min_sentinel_age_blocks !== null) {
      message.minSentinelAgeBlocks = BigInt(object.min_sentinel_age_blocks);
    }
    if (object.sentinel_demotion_cooldown !== undefined && object.sentinel_demotion_cooldown !== null) {
      message.sentinelDemotionCooldown = BigInt(object.sentinel_demotion_cooldown);
    }
    if (object.sentinel_demotion_threshold !== undefined && object.sentinel_demotion_threshold !== null) {
      message.sentinelDemotionThreshold = object.sentinel_demotion_threshold;
    }
    if (object.sentinel_unhide_window !== undefined && object.sentinel_unhide_window !== null) {
      message.sentinelUnhideWindow = BigInt(object.sentinel_unhide_window);
    }
    if (object.sentinel_unbond_cooldown !== undefined && object.sentinel_unbond_cooldown !== null) {
      message.sentinelUnbondCooldown = BigInt(object.sentinel_unbond_cooldown);
    }
    if (object.make_permanent_min_trust_level !== undefined && object.make_permanent_min_trust_level !== null) {
      message.makePermanentMinTrustLevel = object.make_permanent_min_trust_level;
    }
    if (object.max_promotions_per_block !== undefined && object.max_promotions_per_block !== null) {
      message.maxPromotionsPerBlock = object.max_promotions_per_block;
    }
    if (object.author_rep_slash !== undefined && object.author_rep_slash !== null) {
      message.authorRepSlash = object.author_rep_slash;
    }
    if (object.max_make_permanent_per_day !== undefined && object.max_make_permanent_per_day !== null) {
      message.maxMakePermanentPerDay = BigInt(object.max_make_permanent_per_day);
    }
    if (object.min_post_conviction_stake !== undefined && object.min_post_conviction_stake !== null) {
      message.minPostConvictionStake = object.min_post_conviction_stake;
    }
    if (object.post_conviction_lock_seconds !== undefined && object.post_conviction_lock_seconds !== null) {
      message.postConvictionLockSeconds = BigInt(object.post_conviction_lock_seconds);
    }
    if (object.post_conviction_stream_rate_per_block !== undefined && object.post_conviction_stream_rate_per_block !== null) {
      message.postConvictionStreamRatePerBlock = object.post_conviction_stream_rate_per_block;
    }
    if (object.max_forum_rep_per_tag_per_epoch !== undefined && object.max_forum_rep_per_tag_per_epoch !== null) {
      message.maxForumRepPerTagPerEpoch = object.max_forum_rep_per_tag_per_epoch;
    }
    if (object.post_conviction_staker_slash_bps !== undefined && object.post_conviction_staker_slash_bps !== null) {
      message.postConvictionStakerSlashBps = BigInt(object.post_conviction_staker_slash_bps);
    }
    return message;
  },
  toAmino(message: ForumOperationalParams): ForumOperationalParamsAmino {
    const obj: any = {};
    obj.bounties_enabled = message.bountiesEnabled === false ? undefined : message.bountiesEnabled;
    obj.reactions_enabled = message.reactionsEnabled === false ? undefined : message.reactionsEnabled;
    obj.editing_enabled = message.editingEnabled === false ? undefined : message.editingEnabled;
    obj.spam_tax_amount = message.spamTaxAmount === "" ? undefined : message.spamTaxAmount;
    obj.reaction_spam_tax_amount = message.reactionSpamTaxAmount === "" ? undefined : message.reactionSpamTaxAmount;
    obj.flag_spam_tax_amount = message.flagSpamTaxAmount === "" ? undefined : message.flagSpamTaxAmount;
    obj.downvote_deposit_amount = message.downvoteDepositAmount === "" ? undefined : message.downvoteDepositAmount;
    obj.appeal_fee_amount = message.appealFeeAmount === "" ? undefined : message.appealFeeAmount;
    obj.lock_appeal_fee_amount = message.lockAppealFeeAmount === "" ? undefined : message.lockAppealFeeAmount;
    obj.move_appeal_fee_amount = message.moveAppealFeeAmount === "" ? undefined : message.moveAppealFeeAmount;
    obj.edit_fee_amount = message.editFeeAmount === "" ? undefined : message.editFeeAmount;
    obj.cost_per_byte_amount = message.costPerByteAmount === "" ? undefined : message.costPerByteAmount;
    obj.cost_per_byte_exempt = message.costPerByteExempt === false ? undefined : message.costPerByteExempt;
    obj.max_content_size = message.maxContentSize !== BigInt(0) ? message.maxContentSize?.toString() : undefined;
    obj.daily_post_limit = message.dailyPostLimit !== BigInt(0) ? message.dailyPostLimit?.toString() : undefined;
    obj.max_reply_depth = message.maxReplyDepth === 0 ? undefined : message.maxReplyDepth;
    obj.max_follows_per_day = message.maxFollowsPerDay !== BigInt(0) ? message.maxFollowsPerDay?.toString() : undefined;
    obj.bounty_cancellation_fee_percent = message.bountyCancellationFeePercent !== BigInt(0) ? message.bountyCancellationFeePercent?.toString() : undefined;
    obj.edit_grace_period = message.editGracePeriod !== BigInt(0) ? message.editGracePeriod?.toString() : undefined;
    obj.edit_max_window = message.editMaxWindow !== BigInt(0) ? message.editMaxWindow?.toString() : undefined;
    obj.archive_threshold = message.archiveThreshold !== BigInt(0) ? message.archiveThreshold?.toString() : undefined;
    obj.unarchive_cooldown = message.unarchiveCooldown !== BigInt(0) ? message.unarchiveCooldown?.toString() : undefined;
    obj.archive_cooldown = message.archiveCooldown !== BigInt(0) ? message.archiveCooldown?.toString() : undefined;
    obj.hide_appeal_cooldown = message.hideAppealCooldown !== BigInt(0) ? message.hideAppealCooldown?.toString() : undefined;
    obj.lock_appeal_cooldown = message.lockAppealCooldown !== BigInt(0) ? message.lockAppealCooldown?.toString() : undefined;
    obj.move_appeal_cooldown = message.moveAppealCooldown !== BigInt(0) ? message.moveAppealCooldown?.toString() : undefined;
    obj.ephemeral_ttl = message.ephemeralTtl !== BigInt(0) ? message.ephemeralTtl?.toString() : undefined;
    obj.conviction_renewal_threshold = message.convictionRenewalThreshold === "" ? undefined : message.convictionRenewalThreshold;
    obj.conviction_renewal_period = message.convictionRenewalPeriod !== BigInt(0) ? message.convictionRenewalPeriod?.toString() : undefined;
    obj.min_sentinel_bond = message.minSentinelBond === "" ? undefined : message.minSentinelBond;
    obj.min_sentinel_rep_tier = message.minSentinelRepTier !== BigInt(0) ? message.minSentinelRepTier?.toString() : undefined;
    obj.min_sentinel_trust_level = message.minSentinelTrustLevel === "" ? undefined : message.minSentinelTrustLevel;
    obj.min_sentinel_age_blocks = message.minSentinelAgeBlocks !== BigInt(0) ? message.minSentinelAgeBlocks?.toString() : undefined;
    obj.sentinel_demotion_cooldown = message.sentinelDemotionCooldown !== BigInt(0) ? message.sentinelDemotionCooldown?.toString() : undefined;
    obj.sentinel_demotion_threshold = message.sentinelDemotionThreshold === "" ? undefined : message.sentinelDemotionThreshold;
    obj.sentinel_unhide_window = message.sentinelUnhideWindow !== BigInt(0) ? message.sentinelUnhideWindow?.toString() : undefined;
    obj.sentinel_unbond_cooldown = message.sentinelUnbondCooldown !== BigInt(0) ? message.sentinelUnbondCooldown?.toString() : undefined;
    obj.make_permanent_min_trust_level = message.makePermanentMinTrustLevel === 0 ? undefined : message.makePermanentMinTrustLevel;
    obj.max_promotions_per_block = message.maxPromotionsPerBlock === 0 ? undefined : message.maxPromotionsPerBlock;
    obj.author_rep_slash = message.authorRepSlash === "" ? undefined : message.authorRepSlash;
    obj.max_make_permanent_per_day = message.maxMakePermanentPerDay !== BigInt(0) ? message.maxMakePermanentPerDay?.toString() : undefined;
    obj.min_post_conviction_stake = message.minPostConvictionStake === "" ? undefined : message.minPostConvictionStake;
    obj.post_conviction_lock_seconds = message.postConvictionLockSeconds !== BigInt(0) ? message.postConvictionLockSeconds?.toString() : undefined;
    obj.post_conviction_stream_rate_per_block = message.postConvictionStreamRatePerBlock === "" ? undefined : message.postConvictionStreamRatePerBlock;
    obj.max_forum_rep_per_tag_per_epoch = message.maxForumRepPerTagPerEpoch === "" ? undefined : message.maxForumRepPerTagPerEpoch;
    obj.post_conviction_staker_slash_bps = message.postConvictionStakerSlashBps !== BigInt(0) ? message.postConvictionStakerSlashBps?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ForumOperationalParamsAminoMsg): ForumOperationalParams {
    return ForumOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: ForumOperationalParams): ForumOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/forum/ForumOperationalParams",
      value: ForumOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: ForumOperationalParamsProtoMsg): ForumOperationalParams {
    return ForumOperationalParams.decode(message.value);
  },
  toProto(message: ForumOperationalParams): Uint8Array {
    return ForumOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: ForumOperationalParams): ForumOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.ForumOperationalParams",
      value: ForumOperationalParams.encode(message).finish()
    };
  }
};