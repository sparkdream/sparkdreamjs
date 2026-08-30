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
  /**
   * Seasonal staking reward pool
   */
  maxStakingRewardsPerSeason: string;
  /**
   * Per-epoch decay on staked DREAM (default 0.05% = 0.0005)
   */
  stakedDecayRate: string;
  /**
   * Epochs new members are exempt from decay (default 30 ~1 month)
   */
  newMemberDecayGraceEpochs: bigint;
  /**
   * Treasury management
   */
  maxTreasuryBalance: string;
  /**
   * Pay interims from treasury first, mint only if empty (default true)
   */
  treasuryFundsInterims: boolean;
  /**
   * Pay retro PGF from treasury first, mint remainder (default true)
   */
  treasuryFundsRetroPgf: boolean;
  /**
   * Anti-whale staking cap: max DREAM one member can stake on a single initiative (default 50,000 DREAM)
   * Prevents reward pool extraction — conviction is already capped by max_conviction_share_per_member,
   * but without this cap, a whale can stake disproportionately and extract most seasonal staking rewards.
   */
  maxInitiativeStakePerMember: string;
  /**
   * Per-season cap on total DREAM minted via initiative completion rewards (default 100,000 DREAM).
   * Bounds total extraction even if colluding members rubber-stamp initiatives.
   */
  maxInitiativeRewardsPerSeason: string;
  /**
   * Projects with approved budget above this threshold require council proposal approval
   * instead of single Operations Committee member approval (default 10,000 DREAM).
   */
  largeProjectBudgetThreshold: string;
  /**
   * Permissionless creation fees (burned on creation — anti-spam + deflationary)
   */
  projectCreationFee: string;
  /**
   * DREAM burned for apprentice initiative under permissionless project (default 1 DREAM)
   */
  initiativeCreationFeeApprentice: string;
  /**
   * DREAM burned for standard initiative under permissionless project (default 3 DREAM)
   */
  initiativeCreationFeeStandard: string;
  /**
   * Permissionless access control (governance-only — not in RepOperationalParams)
   */
  permissionlessMinTrustLevel: number;
  /**
   * Highest initiative tier allowed in permissionless projects (default 1 = STANDARD)
   */
  permissionlessMaxTier: number;
  /**
   * DREAM burned when creating a member-registered tag (default 100 micro-DREAM)
   */
  tagCreationFee: string;
  /**
   * Sentinel SPARK reward pool (x/rep holds SPARK fed by spam taxes;
   * drained each epoch to sentinels according to accuracy/activity gates).
   */
  maxSentinelRewardPool: string;
  /**
   * Fraction of overflow burned per epoch (default 0.5).
   */
  sentinelRewardPoolOverflowBurnRatio: string;
  /**
   * Cadence of sentinel reward distribution (default 14400 ~= 1 day).
   */
  sentinelRewardEpochBlocks: bigint;
  /**
   * Minimum accuracy to qualify for a reward (default 0.70).
   */
  minSentinelAccuracy: string;
  /**
   * Minimum appeal sample size before accuracy is meaningful (default 10).
   */
  minAppealsForAccuracy: bigint;
  /**
   * Minimum moderation actions in an epoch to qualify for a reward (default 1).
   */
  minEpochActivityForReward: bigint;
  /**
   * Minimum appeal rate (appeals / actions) to qualify for a reward (default 0.05).
   */
  minAppealRate: string;
  /**
   * Rolling window (in reward epochs) over which sentinel reward accuracy is
   * measured. Recent overturns move the ratio; inactivity ages a sentinel out.
   * Bounded 1 <= W <= MaxSentinelAccuracyWindowEpochs (== the forum
   * SentinelAccuracyRingSize). Default 6.
   */
  sentinelAccuracyWindowEpochs: bigint;
  /**
   * Per-member active work caps (anti-monopolization). 0 = unbounded.
   */
  maxActiveInitiativesPerMember: number;
  /**
   * Max in-flight interims (PENDING/IN_PROGRESS) where the member is an assignee (default 10)
   */
  maxActiveInterimsPerMember: number;
  /**
   * Global per-epoch ceiling on DREAM minted across every path (initiative rewards,
   * referral rewards, interim compensation, retro PGF, jury rewards, etc.). Counter
   * resets at the first MintDREAM of each new epoch. 0 = unbounded.
   */
  maxDreamMintPerEpoch: string;
  /**
   * Absolute upper bound on requested_budget at proposal time. Distinct from
   * large_project_budget_threshold (which is an approval-time routing rule):
   * this is a hard cap that rejects nonsense values (e.g. 10^30 DREAM) and
   * keeps state clean. Set well above any legitimate project size so council-
   * gated large proposals are not blocked. Must be positive.
   */
  maxProjectRequestedBudget: string;
  /**
   * Absolute upper bound on requested_spark at proposal time. Same role as
   * max_project_requested_budget but for SPARK (uspark). Must be positive.
   */
  maxProjectRequestedSpark: string;
  /**
   * Number of blocks a PROPOSED (non-permissionless) project stays open before
   * the EndBlocker transitions it to PROJECT_STATUS_EXPIRED. Prevents state
   * pollution by stale unapproved proposals. Must be positive.
   */
  proposedProjectExpiryBlocks: bigint;
  /**
   * Fraction of the initiative budget locked as a DREAM bond when an
   * initiative is self-assigned on a budget-backed project. Bond is returned
   * on completion or abandonment and burned when a challenge is upheld.
   * Range [0, 1]; 0 disables.
   */
  selfAssignedBondRate: string;
  /**
   * External-conviction ratio applied instead of external_conviction_ratio when
   * the initiative is self-assigned. Must be >= external_conviction_ratio and
   * <= 1. Default 0.75 — a distinct-staker floor as much as a magnitude one,
   * since max_conviction_share_per_member caps any one member's contribution:
   * ceil(0.75 / 0.33) = 3 independent stakers, against 2 for externally
   * assigned work.
   */
  selfAssignedExternalConvictionRatio: string;
  /**
   * Multiplier applied to the challenge window for self-assigned initiatives.
   * Must be >= 1. Default 2.
   */
  selfAssignedChallengeMultiplier: bigint;
  /**
   * Bond rate applied instead of self_assigned_bond_rate when the initiative
   * is self-assigned under a permissionless project. Higher because the two
   * cases expose the commons differently: a budget-backed initiative MOVES
   * DREAM that governance already approved, while a permissionless one MINTS
   * DREAM nobody approved and dilutes every holder. Permissionless
   * self-assignment used to be exempt from the bond entirely, which disabled
   * the main economic deterrent exactly where no counterparty exists.
   * Range [0, 1]; 0 disables. Default 0.25.
   */
  permissionlessSelfAssignedBondRate: string;
  /**
   * Reputation deducted, per tag of the disputed initiative, from a juror who
   * accepted a summons and then let it lapse. Accepting is voluntary and
   * declining is free and immediate, so an abandoned seat is a broken
   * commitment rather than an accident of the draw.
   * 
   * Charged in reputation because that is what qualifies a juror: enough
   * abandoned seats and they fall below min_juror_reputation and stop being
   * drawn for that tag at all. Must be non-negative; 0 disables. Default 10.
   */
  abandonedJurySeatPenalty: string;
  /**
   * Fraction of the disputed initiative's budget paid out to its jury, split
   * evenly across the seats. Juror pay was a flat StandardComplexityBudget
   * regardless of what was in dispute, so a challenge over a 100 DREAM
   * APPRENTICE initiative minted 750 DREAM in juror fees to settle it — more
   * than the work was worth. Range [0, 1]. Default 0.25.
   */
  jurorRewardRate: string;
  /**
   * Fraction of an initiative's review period a juror has to answer a summons
   * before the seat is swept and redrawn.
   * 
   * A ratio rather than a block count because the review period varies by two
   * orders of magnitude across networks: the previous fixed 1200-block (~2h)
   * window was 1.2% of mainnet's ~7-day review but 133% of devnet's, putting
   * the acceptance deadline *after* the vote deadline there and making the
   * sweep unreachable. It also contradicted the reason no-shows go unpunished
   * — that a member cannot be expected to watch the chain for an event that
   * reaches them about once a year — by then withdrawing the seat if they did
   * not answer within two hours.
   * 
   * Sized for how long it takes someone to read a notification, not to react
   * to a block. Range (0, 1). Default 0.25 — about 42 hours on mainnet.
   * 
   * Operational alongside the other juror knobs: leaving juror *pay* committee
   * tunable while juror *timing* needed a governance vote was an artifact of
   * build order, not a decision.
   */
  juryAcceptanceWindowRatio: string;
  /**
   * Floor on a single juror's pay, in micro-DREAM.
   * 
   * juror_reward_rate scales pay against the disputed initiative's budget, but
   * content challenges and moderation appeals have no initiative budget to
   * scale against — for those this floor *is* the whole rate, which is why it
   * cannot stay a compile-time constant. Default 5 DREAM.
   */
  minJurorReward: string;
  /**
   * Floor on the responsiveness multiplier applied to a juror's selection
   * weight. A juror who never answers is drawn less often, never not at all —
   * a zero-weight address could never earn its way back, since it would stop
   * being drawn and so could never demonstrate otherwise.
   * 
   * Chosen for shape rather than fitted to anything, and meant to be revisited
   * against observed response rates. Range (0,1]. Default 0.1.
   */
  minJurorSelectionWeight: string;
  /**
   * Seatings a juror must have before the responsiveness weight applies at all.
   * Below this there is no meaningful record and they are drawn at full weight.
   * Like the floor above, a guess awaiting real data. Default 3.
   */
  minJurySeatingsForWeighting: bigint;
  /**
   * Conviction-weighted completion bonus, as a fraction of the initiative
   * budget, paid to external stakers on completion.
   * 
   * Was a hardcoded 1/10 divisor while the project-side equivalent
   * (project_completion_bonus_rate) was already a param — the same economic
   * knob, tunable on one side and fixed on the other. Range [0,1].
   * Default 0.1.
   */
  initiativeCompletionBonusRate: string;
  /**
   * Replacement rounds the acceptance sweep may run per jury review.
   * 
   * Coupled to jury_acceptance_window_ratio and validated against it: each round
   * costs one acceptance window out of the review period, so widening the window
   * without lowering this leaves replacement jurors no time to read the work.
   * Both live in the same scope so the pair always moves under one authority.
   * Default 1.
   */
  maxJuryRedraws: number;
  /**
   * Fraction of an initiative's budget a reviewer commits as bond when filing a
   * verdict on it, and the amount slashed if a jury overturns that verdict.
   * 
   * Scaled rather than flat so liability tracks what the review could mint — a
   * wrong approval on an EPIC initiative releases up to 10,000 DREAM, and the
   * same risk should not attach to a 100 DREAM one. It is also self-limiting:
   * a reviewer can only hold as many open verdicts as their free bond covers.
   * Range (0,1]. Default 0.1.
   */
  reviewerBondReserveRate: string;
  /**
   * Fraction of an initiative's budget paid to the reviewers who filed a
   * verdict on the round that resolved it, scaled by the tier's
   * reward_multiplier and split evenly across those reviewers.
   * 
   * Paid per verdict filed, never per approval — if approving paid and
   * rejecting did not, the role would rebuild "paid to say yes" one layer down.
   * Paid when the initiative resolves, so an unacted-on review costs nothing and
   * filing verdicts earns nothing until something turns on them. Range [0,1].
   * Default 0.05.
   */
  reviewFeeRate: string;
  /**
   * Review rounds an initiative may go through before a rejection becomes
   * terminal. A rejection returns the work to ASSIGNED so the assignee can fix
   * and resubmit, which is the right remedy for "not done" — but unbounded it
   * lets a bad-faith assignee burn reviewer effort indefinitely. Default 3.
   */
  maxReviewRounds: number;
  /**
   * SPARK reward pool for initiative reviewers, mirroring the sentinel pool but
   * held and tuned separately.
   * 
   * The DREAM review fee pays for the act of reviewing; this pays for reviewing
   * *well*, gated on windowed accuracy the same way sentinel pay is. Separate
   * knobs because the liability differs by orders of magnitude: a wrong
   * approval mints DREAM that cannot be clawed back, where a wrong hide costs a
   * post some visibility.
   * 
   * The pool is an ordinary bank sub-address, so a council policy funds it with
   * a plain send.
   */
  maxReviewerRewardPool: string;
  /**
   * Fraction of overflow burned per epoch. Default 0.5.
   */
  reviewerRewardPoolOverflowBurnRatio: string;
  /**
   * Distribution cadence. Default 14400 (~1 day).
   */
  reviewerRewardEpochBlocks: bigint;
  /**
   * Minimum windowed accuracy to earn a share. Default 0.70.
   */
  minReviewerAccuracy: string;
  /**
   * Epochs of history the accuracy ring scores. Default 6.
   */
  reviewerAccuracyWindowEpochs: bigint;
  /**
   * Reviewer bonded-role policy: the eligibility and exit terms for
   * ROLE_TYPE_INITIATIVE_REVIEWER.
   * 
   * These live here rather than only in the BondedRoleConfig store so the
   * reviewer role has the same shape as every other bonded role: params are the
   * source of truth and are written through to rep's enforcement state on
   * InitGenesis and on every operational param update (x/forum does this for
   * the sentinel, x/collect for the curator). Before that, the reviewer was the
   * one role no module owned, so its config was reachable only by editing
   * genesis or shipping an upgrade.
   * 
   * Field numbers jump past the reviewer pay knobs above because these were
   * added later; they belong to this block by topic, not by number.
   * 
   * min_reviewer_bond is deliberately a LOW barrier to entry (500 DREAM), not a
   * measure of what a bad verdict costs. Per-verdict exposure is the reserve --
   * SlashReviewersOnOverturn charges BondReserved, which is
   * reviewer_bond_reserve_rate x the initiative's budget -- so liability already
   * scales with what the review could mint, whatever the floor is.
   * 
   * Reviewers scale up by bonding more when they want bigger work. Free bond
   * above a reviewer's open reserves is what decides which initiatives they can
   * pick up and how many at once: at the default 10% rate the floor alone covers
   * work up to ~5,000 DREAM of budget, while an EPIC initiative (10,000 cap)
   * reserves 1,000. Raising the ceiling is just another MsgBondRole against the
   * same record -- it adds to current_bond and is reservable on the next verdict,
   * with no waiting period and no need to unbond first. Keeping the entry price
   * low is the point: reviewing should be something an ordinary member can start
   * doing and then grow into, rather than something gated on holding a large
   * balance up front.
   */
  minReviewerBond: string;
  /**
   * Free bond below which a reviewer is demoted out of the role. Conventionally
   * half of min_reviewer_bond.
   */
  reviewerDemotionThreshold: string;
  /**
   * Trust level a member must hold to bond as a reviewer. The trust ladder
   * already encodes reputation, so this is the whole eligibility gate and
   * min_reviewer_rep_tier stays 0 (see BondedRoleConfig seeding notes).
   * 
   * Required, unlike the sentinel's and curator's: BondRole skips the trust
   * check entirely on an empty string, so an omitted level would silently open
   * the one role whose approvals mint DREAM. An ungated roster is still
   * expressible as TRUST_LEVEL_NEW.
   */
  minReviewerTrustLevel: string;
  minReviewerRepTier: bigint;
  minReviewerAgeBlocks: bigint;
  reviewerDemotionCooldown: bigint;
  /**
   * Bond stays slashable through this window after an unbond request, so open
   * verdicts can age out and still be charged if a jury overturns them.
   */
  reviewerUnbondCooldown: bigint;
  /**
   * Ceiling on the uspark x/rep may draw from the community pool per UTC day to
   * fund its bonded-role reward pools.
   * 
   * One capped claim on the community pool for the whole module, divided
   * internally by headroom — adding a fourth bonded role must not mean adding a
   * fourth funding line. The skim tops pools up toward their own caps and stops
   * there, so an idle role costs the community pool nothing.
   * 
   * Funding is automatic rather than by council transfer because pay that
   * depends on somebody remembering to send it arrives unpredictably, and
   * unpredictable pay does not hold a roster.
   * 
   * Expressed as a SHARE OF INFLATION rather than an absolute daily amount:
   * 
   *   daily_allowance = annual_provisions * community_tax * share / 365
   * 
   * A fixed nominal draw takes its largest share of the community pool exactly
   * when the pool is poorest — inflation floats 2–5%, so a constant amount is
   * half the pool's income at the top of that range and more than all of it at
   * the bottom, and x/rep skims before x/split. A share is counter-cyclical:
   * it takes less when there is less, so the councils' remainder is structural
   * rather than whatever happens to be left over. It also tracks supply growth
   * without periodic retuning.
   * 
   * The base is inflation, NOT the community pool balance. A share of the
   * balance would let x/rep raid the 95M SPARK genesis allocation that x/split
   * exists to hand to the councils, and would take a cut of every direct
   * fund-community-pool deposit. annual_provisions is also set by x/mint, whose
   * authority is the burn address — so this rate is anchored to a number no
   * committee or proposal can move.
   * 
   * Default 0.5 (half the community pool's inflation income); zero disables the
   * skim, leaving the pools to forfeited bonds and direct sends.
   */
  roleRewardInflationShare: string;
  /**
   * Curator SPARK pool. Same shape and cadence as the sentinel pool above and
   * sized to match it: curating a collection rating and hiding a post are
   * comparable judgment calls with comparable liability. Kept as separate
   * params (and a separate pool) anyway, so neither role can draw on the
   * other's funds or be retuned by the other's bar.
   */
  maxCuratorRewardPool: string;
  curatorRewardPoolOverflowBurnRatio: string;
  curatorRewardEpochBlocks: bigint;
  minCuratorAccuracy: string;
  curatorAccuracyWindowEpochs: bigint;
  /**
   * Budget above which an initiative cannot complete without at least one
   * reviewer verdict, regardless of the parent project's verification policy.
   * 
   * The gate keys on how much DREAM the completion CREATES, not on whether the
   * project is budget-backed. Permissionless initiatives mint against a
   * self-declared budget with no treasury behind it, capped only by tier — so
   * the funded/unfunded axis gets the risk ordering backwards. Mint size is the
   * number that actually matters and it exists on both paths.
   * 
   * Default 100 DREAM, the APPRENTICE ceiling: apprentice work stays exempt
   * because it is small and it is the on-ramp where reviewer scarcity would
   * hurt newcomers most, while every permissionless STANDARD initiative — the
   * whole farming vector — is gated.
   * 
   * Composes with the per-project policy as a MAXIMUM, never a replacement: a
   * project may demand more verifiers than this, never fewer. Zero disables the
   * chain-wide gate and leaves review entirely to project policy.
   */
  reviewRequiredAboveBudget: string;
  /**
   * Blocks a review bounty must sit before its funder may reclaim it. Stops a
   * funder advertising a bounty and withdrawing it in the same breath, which
   * would let anyone grief the reviewer roster at zero cost. Reclaim is barred
   * outright once any verdict is filed, regardless of this delay.
   */
  reviewBountyReclaimDelay: bigint;
  /**
   * Minimum review bounty a PERMISSIONLESS initiative must escrow at creation,
   * as a fraction of its budget, paid in existing DREAM.
   * 
   * Permissionless initiatives mint against a self-declared budget with no
   * treasury behind them, and their review fee is minted too — so reviewers of
   * permissionless work are currently paid purely by dilution, the very thing
   * the funded path's budget-netting exists to avoid. A creator-funded bounty
   * prices that reviewer attention onto whoever consumes it, is non-inflationary
   * because it moves existing DREAM, and scales the spam brake with the amount
   * being minted instead of a flat creation fee.
   * 
   * Charged ONLY when the budget exceeds review_required_above_budget: the
   * bounty funds mandatory review, so below the gate it would take DREAM for a
   * service that is never delivered. That keeps apprentice work — the on-ramp,
   * where members arrive holding zero DREAM — free of it. Zero disables the
   * requirement entirely.
   */
  permissionlessMinReviewBountyRate: string;
  /**
   * --- Federation verifier pay (SPARK pool + DREAM stipend) ---
   * 
   * The verifier's whole reward distribution lives here rather than in
   * x/federation, for the same reason the curator's lives here rather than in
   * x/collect: the accuracy it scores comes from the shared RoleActivity
   * record x/rep owns, and the epoch it resets is the epoch the accuracy ring
   * is stamped in. Two modules distributing on two independently-editable
   * cadences would both reset those per-epoch counters and neither would read
   * a coherent window. x/federation keeps the verification mechanics -- bond,
   * slash, challenge windows, cooldown base -- and reports actions here.
   * 
   * The verifier is the one bonded role whose work has an OFF-chain cost:
   * fetching the peer's content and hashing it, then paying SPARK gas to
   * submit. Paying only in DREAM made it the single role where doing the job
   * drains the holder's SPARK and returns a token they cannot spend on gas.
   */
  maxVerifierRewardPool: string;
  verifierRewardPoolOverflowBurnRatio: string;
  verifierRewardEpochBlocks: bigint;
  minVerifierAccuracy: string;
  verifierAccuracyWindowEpochs: bigint;
  /**
   * Verified items required in an epoch to earn anything that epoch. This is
   * the ONLY place volume enters verifier pay -- as a floor, never as a
   * weight. See the score formula in x/rep/keeper/verifier_reward_distribution.go
   * for why weighting by verified_count is the wrong curve for this role.
   */
  minEpochVerifications: number;
  /**
   * Flat DREAM minted per eligible verifier per epoch, scaled down pro-rata
   * when the roster would push the epoch's total past the mint cap. Auto-bonds
   * while the verifier is in RECOVERY so a slashed verifier can rebuild their
   * bond by working rather than by fronting DREAM.
   */
  verifierDreamReward: string;
  maxVerifierDreamMintPerEpoch: string;
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
  /**
   * Seasonal staking reward pool
   */
  max_staking_rewards_per_season?: string;
  /**
   * Per-epoch decay on staked DREAM (default 0.05% = 0.0005)
   */
  staked_decay_rate?: string;
  /**
   * Epochs new members are exempt from decay (default 30 ~1 month)
   */
  new_member_decay_grace_epochs?: string;
  /**
   * Treasury management
   */
  max_treasury_balance?: string;
  /**
   * Pay interims from treasury first, mint only if empty (default true)
   */
  treasury_funds_interims?: boolean;
  /**
   * Pay retro PGF from treasury first, mint remainder (default true)
   */
  treasury_funds_retro_pgf?: boolean;
  /**
   * Anti-whale staking cap: max DREAM one member can stake on a single initiative (default 50,000 DREAM)
   * Prevents reward pool extraction — conviction is already capped by max_conviction_share_per_member,
   * but without this cap, a whale can stake disproportionately and extract most seasonal staking rewards.
   */
  max_initiative_stake_per_member?: string;
  /**
   * Per-season cap on total DREAM minted via initiative completion rewards (default 100,000 DREAM).
   * Bounds total extraction even if colluding members rubber-stamp initiatives.
   */
  max_initiative_rewards_per_season?: string;
  /**
   * Projects with approved budget above this threshold require council proposal approval
   * instead of single Operations Committee member approval (default 10,000 DREAM).
   */
  large_project_budget_threshold?: string;
  /**
   * Permissionless creation fees (burned on creation — anti-spam + deflationary)
   */
  project_creation_fee?: string;
  /**
   * DREAM burned for apprentice initiative under permissionless project (default 1 DREAM)
   */
  initiative_creation_fee_apprentice?: string;
  /**
   * DREAM burned for standard initiative under permissionless project (default 3 DREAM)
   */
  initiative_creation_fee_standard?: string;
  /**
   * Permissionless access control (governance-only — not in RepOperationalParams)
   */
  permissionless_min_trust_level?: number;
  /**
   * Highest initiative tier allowed in permissionless projects (default 1 = STANDARD)
   */
  permissionless_max_tier?: number;
  /**
   * DREAM burned when creating a member-registered tag (default 100 micro-DREAM)
   */
  tag_creation_fee?: string;
  /**
   * Sentinel SPARK reward pool (x/rep holds SPARK fed by spam taxes;
   * drained each epoch to sentinels according to accuracy/activity gates).
   */
  max_sentinel_reward_pool?: string;
  /**
   * Fraction of overflow burned per epoch (default 0.5).
   */
  sentinel_reward_pool_overflow_burn_ratio?: string;
  /**
   * Cadence of sentinel reward distribution (default 14400 ~= 1 day).
   */
  sentinel_reward_epoch_blocks?: string;
  /**
   * Minimum accuracy to qualify for a reward (default 0.70).
   */
  min_sentinel_accuracy?: string;
  /**
   * Minimum appeal sample size before accuracy is meaningful (default 10).
   */
  min_appeals_for_accuracy?: string;
  /**
   * Minimum moderation actions in an epoch to qualify for a reward (default 1).
   */
  min_epoch_activity_for_reward?: string;
  /**
   * Minimum appeal rate (appeals / actions) to qualify for a reward (default 0.05).
   */
  min_appeal_rate?: string;
  /**
   * Rolling window (in reward epochs) over which sentinel reward accuracy is
   * measured. Recent overturns move the ratio; inactivity ages a sentinel out.
   * Bounded 1 <= W <= MaxSentinelAccuracyWindowEpochs (== the forum
   * SentinelAccuracyRingSize). Default 6.
   */
  sentinel_accuracy_window_epochs?: string;
  /**
   * Per-member active work caps (anti-monopolization). 0 = unbounded.
   */
  max_active_initiatives_per_member?: number;
  /**
   * Max in-flight interims (PENDING/IN_PROGRESS) where the member is an assignee (default 10)
   */
  max_active_interims_per_member?: number;
  /**
   * Global per-epoch ceiling on DREAM minted across every path (initiative rewards,
   * referral rewards, interim compensation, retro PGF, jury rewards, etc.). Counter
   * resets at the first MintDREAM of each new epoch. 0 = unbounded.
   */
  max_dream_mint_per_epoch?: string;
  /**
   * Absolute upper bound on requested_budget at proposal time. Distinct from
   * large_project_budget_threshold (which is an approval-time routing rule):
   * this is a hard cap that rejects nonsense values (e.g. 10^30 DREAM) and
   * keeps state clean. Set well above any legitimate project size so council-
   * gated large proposals are not blocked. Must be positive.
   */
  max_project_requested_budget?: string;
  /**
   * Absolute upper bound on requested_spark at proposal time. Same role as
   * max_project_requested_budget but for SPARK (uspark). Must be positive.
   */
  max_project_requested_spark?: string;
  /**
   * Number of blocks a PROPOSED (non-permissionless) project stays open before
   * the EndBlocker transitions it to PROJECT_STATUS_EXPIRED. Prevents state
   * pollution by stale unapproved proposals. Must be positive.
   */
  proposed_project_expiry_blocks?: string;
  /**
   * Fraction of the initiative budget locked as a DREAM bond when an
   * initiative is self-assigned on a budget-backed project. Bond is returned
   * on completion or abandonment and burned when a challenge is upheld.
   * Range [0, 1]; 0 disables.
   */
  self_assigned_bond_rate?: string;
  /**
   * External-conviction ratio applied instead of external_conviction_ratio when
   * the initiative is self-assigned. Must be >= external_conviction_ratio and
   * <= 1. Default 0.75 — a distinct-staker floor as much as a magnitude one,
   * since max_conviction_share_per_member caps any one member's contribution:
   * ceil(0.75 / 0.33) = 3 independent stakers, against 2 for externally
   * assigned work.
   */
  self_assigned_external_conviction_ratio?: string;
  /**
   * Multiplier applied to the challenge window for self-assigned initiatives.
   * Must be >= 1. Default 2.
   */
  self_assigned_challenge_multiplier?: string;
  /**
   * Bond rate applied instead of self_assigned_bond_rate when the initiative
   * is self-assigned under a permissionless project. Higher because the two
   * cases expose the commons differently: a budget-backed initiative MOVES
   * DREAM that governance already approved, while a permissionless one MINTS
   * DREAM nobody approved and dilutes every holder. Permissionless
   * self-assignment used to be exempt from the bond entirely, which disabled
   * the main economic deterrent exactly where no counterparty exists.
   * Range [0, 1]; 0 disables. Default 0.25.
   */
  permissionless_self_assigned_bond_rate?: string;
  /**
   * Reputation deducted, per tag of the disputed initiative, from a juror who
   * accepted a summons and then let it lapse. Accepting is voluntary and
   * declining is free and immediate, so an abandoned seat is a broken
   * commitment rather than an accident of the draw.
   * 
   * Charged in reputation because that is what qualifies a juror: enough
   * abandoned seats and they fall below min_juror_reputation and stop being
   * drawn for that tag at all. Must be non-negative; 0 disables. Default 10.
   */
  abandoned_jury_seat_penalty?: string;
  /**
   * Fraction of the disputed initiative's budget paid out to its jury, split
   * evenly across the seats. Juror pay was a flat StandardComplexityBudget
   * regardless of what was in dispute, so a challenge over a 100 DREAM
   * APPRENTICE initiative minted 750 DREAM in juror fees to settle it — more
   * than the work was worth. Range [0, 1]. Default 0.25.
   */
  juror_reward_rate?: string;
  /**
   * Fraction of an initiative's review period a juror has to answer a summons
   * before the seat is swept and redrawn.
   * 
   * A ratio rather than a block count because the review period varies by two
   * orders of magnitude across networks: the previous fixed 1200-block (~2h)
   * window was 1.2% of mainnet's ~7-day review but 133% of devnet's, putting
   * the acceptance deadline *after* the vote deadline there and making the
   * sweep unreachable. It also contradicted the reason no-shows go unpunished
   * — that a member cannot be expected to watch the chain for an event that
   * reaches them about once a year — by then withdrawing the seat if they did
   * not answer within two hours.
   * 
   * Sized for how long it takes someone to read a notification, not to react
   * to a block. Range (0, 1). Default 0.25 — about 42 hours on mainnet.
   * 
   * Operational alongside the other juror knobs: leaving juror *pay* committee
   * tunable while juror *timing* needed a governance vote was an artifact of
   * build order, not a decision.
   */
  jury_acceptance_window_ratio?: string;
  /**
   * Floor on a single juror's pay, in micro-DREAM.
   * 
   * juror_reward_rate scales pay against the disputed initiative's budget, but
   * content challenges and moderation appeals have no initiative budget to
   * scale against — for those this floor *is* the whole rate, which is why it
   * cannot stay a compile-time constant. Default 5 DREAM.
   */
  min_juror_reward?: string;
  /**
   * Floor on the responsiveness multiplier applied to a juror's selection
   * weight. A juror who never answers is drawn less often, never not at all —
   * a zero-weight address could never earn its way back, since it would stop
   * being drawn and so could never demonstrate otherwise.
   * 
   * Chosen for shape rather than fitted to anything, and meant to be revisited
   * against observed response rates. Range (0,1]. Default 0.1.
   */
  min_juror_selection_weight?: string;
  /**
   * Seatings a juror must have before the responsiveness weight applies at all.
   * Below this there is no meaningful record and they are drawn at full weight.
   * Like the floor above, a guess awaiting real data. Default 3.
   */
  min_jury_seatings_for_weighting?: string;
  /**
   * Conviction-weighted completion bonus, as a fraction of the initiative
   * budget, paid to external stakers on completion.
   * 
   * Was a hardcoded 1/10 divisor while the project-side equivalent
   * (project_completion_bonus_rate) was already a param — the same economic
   * knob, tunable on one side and fixed on the other. Range [0,1].
   * Default 0.1.
   */
  initiative_completion_bonus_rate?: string;
  /**
   * Replacement rounds the acceptance sweep may run per jury review.
   * 
   * Coupled to jury_acceptance_window_ratio and validated against it: each round
   * costs one acceptance window out of the review period, so widening the window
   * without lowering this leaves replacement jurors no time to read the work.
   * Both live in the same scope so the pair always moves under one authority.
   * Default 1.
   */
  max_jury_redraws?: number;
  /**
   * Fraction of an initiative's budget a reviewer commits as bond when filing a
   * verdict on it, and the amount slashed if a jury overturns that verdict.
   * 
   * Scaled rather than flat so liability tracks what the review could mint — a
   * wrong approval on an EPIC initiative releases up to 10,000 DREAM, and the
   * same risk should not attach to a 100 DREAM one. It is also self-limiting:
   * a reviewer can only hold as many open verdicts as their free bond covers.
   * Range (0,1]. Default 0.1.
   */
  reviewer_bond_reserve_rate?: string;
  /**
   * Fraction of an initiative's budget paid to the reviewers who filed a
   * verdict on the round that resolved it, scaled by the tier's
   * reward_multiplier and split evenly across those reviewers.
   * 
   * Paid per verdict filed, never per approval — if approving paid and
   * rejecting did not, the role would rebuild "paid to say yes" one layer down.
   * Paid when the initiative resolves, so an unacted-on review costs nothing and
   * filing verdicts earns nothing until something turns on them. Range [0,1].
   * Default 0.05.
   */
  review_fee_rate?: string;
  /**
   * Review rounds an initiative may go through before a rejection becomes
   * terminal. A rejection returns the work to ASSIGNED so the assignee can fix
   * and resubmit, which is the right remedy for "not done" — but unbounded it
   * lets a bad-faith assignee burn reviewer effort indefinitely. Default 3.
   */
  max_review_rounds?: number;
  /**
   * SPARK reward pool for initiative reviewers, mirroring the sentinel pool but
   * held and tuned separately.
   * 
   * The DREAM review fee pays for the act of reviewing; this pays for reviewing
   * *well*, gated on windowed accuracy the same way sentinel pay is. Separate
   * knobs because the liability differs by orders of magnitude: a wrong
   * approval mints DREAM that cannot be clawed back, where a wrong hide costs a
   * post some visibility.
   * 
   * The pool is an ordinary bank sub-address, so a council policy funds it with
   * a plain send.
   */
  max_reviewer_reward_pool?: string;
  /**
   * Fraction of overflow burned per epoch. Default 0.5.
   */
  reviewer_reward_pool_overflow_burn_ratio?: string;
  /**
   * Distribution cadence. Default 14400 (~1 day).
   */
  reviewer_reward_epoch_blocks?: string;
  /**
   * Minimum windowed accuracy to earn a share. Default 0.70.
   */
  min_reviewer_accuracy?: string;
  /**
   * Epochs of history the accuracy ring scores. Default 6.
   */
  reviewer_accuracy_window_epochs?: string;
  /**
   * Reviewer bonded-role policy: the eligibility and exit terms for
   * ROLE_TYPE_INITIATIVE_REVIEWER.
   * 
   * These live here rather than only in the BondedRoleConfig store so the
   * reviewer role has the same shape as every other bonded role: params are the
   * source of truth and are written through to rep's enforcement state on
   * InitGenesis and on every operational param update (x/forum does this for
   * the sentinel, x/collect for the curator). Before that, the reviewer was the
   * one role no module owned, so its config was reachable only by editing
   * genesis or shipping an upgrade.
   * 
   * Field numbers jump past the reviewer pay knobs above because these were
   * added later; they belong to this block by topic, not by number.
   * 
   * min_reviewer_bond is deliberately a LOW barrier to entry (500 DREAM), not a
   * measure of what a bad verdict costs. Per-verdict exposure is the reserve --
   * SlashReviewersOnOverturn charges BondReserved, which is
   * reviewer_bond_reserve_rate x the initiative's budget -- so liability already
   * scales with what the review could mint, whatever the floor is.
   * 
   * Reviewers scale up by bonding more when they want bigger work. Free bond
   * above a reviewer's open reserves is what decides which initiatives they can
   * pick up and how many at once: at the default 10% rate the floor alone covers
   * work up to ~5,000 DREAM of budget, while an EPIC initiative (10,000 cap)
   * reserves 1,000. Raising the ceiling is just another MsgBondRole against the
   * same record -- it adds to current_bond and is reservable on the next verdict,
   * with no waiting period and no need to unbond first. Keeping the entry price
   * low is the point: reviewing should be something an ordinary member can start
   * doing and then grow into, rather than something gated on holding a large
   * balance up front.
   */
  min_reviewer_bond?: string;
  /**
   * Free bond below which a reviewer is demoted out of the role. Conventionally
   * half of min_reviewer_bond.
   */
  reviewer_demotion_threshold?: string;
  /**
   * Trust level a member must hold to bond as a reviewer. The trust ladder
   * already encodes reputation, so this is the whole eligibility gate and
   * min_reviewer_rep_tier stays 0 (see BondedRoleConfig seeding notes).
   * 
   * Required, unlike the sentinel's and curator's: BondRole skips the trust
   * check entirely on an empty string, so an omitted level would silently open
   * the one role whose approvals mint DREAM. An ungated roster is still
   * expressible as TRUST_LEVEL_NEW.
   */
  min_reviewer_trust_level?: string;
  min_reviewer_rep_tier?: string;
  min_reviewer_age_blocks?: string;
  reviewer_demotion_cooldown?: string;
  /**
   * Bond stays slashable through this window after an unbond request, so open
   * verdicts can age out and still be charged if a jury overturns them.
   */
  reviewer_unbond_cooldown?: string;
  /**
   * Ceiling on the uspark x/rep may draw from the community pool per UTC day to
   * fund its bonded-role reward pools.
   * 
   * One capped claim on the community pool for the whole module, divided
   * internally by headroom — adding a fourth bonded role must not mean adding a
   * fourth funding line. The skim tops pools up toward their own caps and stops
   * there, so an idle role costs the community pool nothing.
   * 
   * Funding is automatic rather than by council transfer because pay that
   * depends on somebody remembering to send it arrives unpredictably, and
   * unpredictable pay does not hold a roster.
   * 
   * Expressed as a SHARE OF INFLATION rather than an absolute daily amount:
   * 
   *   daily_allowance = annual_provisions * community_tax * share / 365
   * 
   * A fixed nominal draw takes its largest share of the community pool exactly
   * when the pool is poorest — inflation floats 2–5%, so a constant amount is
   * half the pool's income at the top of that range and more than all of it at
   * the bottom, and x/rep skims before x/split. A share is counter-cyclical:
   * it takes less when there is less, so the councils' remainder is structural
   * rather than whatever happens to be left over. It also tracks supply growth
   * without periodic retuning.
   * 
   * The base is inflation, NOT the community pool balance. A share of the
   * balance would let x/rep raid the 95M SPARK genesis allocation that x/split
   * exists to hand to the councils, and would take a cut of every direct
   * fund-community-pool deposit. annual_provisions is also set by x/mint, whose
   * authority is the burn address — so this rate is anchored to a number no
   * committee or proposal can move.
   * 
   * Default 0.5 (half the community pool's inflation income); zero disables the
   * skim, leaving the pools to forfeited bonds and direct sends.
   */
  role_reward_inflation_share?: string;
  /**
   * Curator SPARK pool. Same shape and cadence as the sentinel pool above and
   * sized to match it: curating a collection rating and hiding a post are
   * comparable judgment calls with comparable liability. Kept as separate
   * params (and a separate pool) anyway, so neither role can draw on the
   * other's funds or be retuned by the other's bar.
   */
  max_curator_reward_pool?: string;
  curator_reward_pool_overflow_burn_ratio?: string;
  curator_reward_epoch_blocks?: string;
  min_curator_accuracy?: string;
  curator_accuracy_window_epochs?: string;
  /**
   * Budget above which an initiative cannot complete without at least one
   * reviewer verdict, regardless of the parent project's verification policy.
   * 
   * The gate keys on how much DREAM the completion CREATES, not on whether the
   * project is budget-backed. Permissionless initiatives mint against a
   * self-declared budget with no treasury behind it, capped only by tier — so
   * the funded/unfunded axis gets the risk ordering backwards. Mint size is the
   * number that actually matters and it exists on both paths.
   * 
   * Default 100 DREAM, the APPRENTICE ceiling: apprentice work stays exempt
   * because it is small and it is the on-ramp where reviewer scarcity would
   * hurt newcomers most, while every permissionless STANDARD initiative — the
   * whole farming vector — is gated.
   * 
   * Composes with the per-project policy as a MAXIMUM, never a replacement: a
   * project may demand more verifiers than this, never fewer. Zero disables the
   * chain-wide gate and leaves review entirely to project policy.
   */
  review_required_above_budget?: string;
  /**
   * Blocks a review bounty must sit before its funder may reclaim it. Stops a
   * funder advertising a bounty and withdrawing it in the same breath, which
   * would let anyone grief the reviewer roster at zero cost. Reclaim is barred
   * outright once any verdict is filed, regardless of this delay.
   */
  review_bounty_reclaim_delay?: string;
  /**
   * Minimum review bounty a PERMISSIONLESS initiative must escrow at creation,
   * as a fraction of its budget, paid in existing DREAM.
   * 
   * Permissionless initiatives mint against a self-declared budget with no
   * treasury behind them, and their review fee is minted too — so reviewers of
   * permissionless work are currently paid purely by dilution, the very thing
   * the funded path's budget-netting exists to avoid. A creator-funded bounty
   * prices that reviewer attention onto whoever consumes it, is non-inflationary
   * because it moves existing DREAM, and scales the spam brake with the amount
   * being minted instead of a flat creation fee.
   * 
   * Charged ONLY when the budget exceeds review_required_above_budget: the
   * bounty funds mandatory review, so below the gate it would take DREAM for a
   * service that is never delivered. That keeps apprentice work — the on-ramp,
   * where members arrive holding zero DREAM — free of it. Zero disables the
   * requirement entirely.
   */
  permissionless_min_review_bounty_rate?: string;
  /**
   * --- Federation verifier pay (SPARK pool + DREAM stipend) ---
   * 
   * The verifier's whole reward distribution lives here rather than in
   * x/federation, for the same reason the curator's lives here rather than in
   * x/collect: the accuracy it scores comes from the shared RoleActivity
   * record x/rep owns, and the epoch it resets is the epoch the accuracy ring
   * is stamped in. Two modules distributing on two independently-editable
   * cadences would both reset those per-epoch counters and neither would read
   * a coherent window. x/federation keeps the verification mechanics -- bond,
   * slash, challenge windows, cooldown base -- and reports actions here.
   * 
   * The verifier is the one bonded role whose work has an OFF-chain cost:
   * fetching the peer's content and hashing it, then paying SPARK gas to
   * submit. Paying only in DREAM made it the single role where doing the job
   * drains the holder's SPARK and returns a token they cannot spend on gas.
   */
  max_verifier_reward_pool?: string;
  verifier_reward_pool_overflow_burn_ratio?: string;
  verifier_reward_epoch_blocks?: string;
  min_verifier_accuracy?: string;
  verifier_accuracy_window_epochs?: string;
  /**
   * Verified items required in an epoch to earn anything that epoch. This is
   * the ONLY place volume enters verifier pay -- as a floor, never as a
   * weight. See the score formula in x/rep/keeper/verifier_reward_distribution.go
   * for why weighting by verified_count is the wrong curve for this role.
   */
  min_epoch_verifications?: number;
  /**
   * Flat DREAM minted per eligible verifier per epoch, scaled down pro-rata
   * when the roster would push the epoch's total past the mint cap. Auto-bonds
   * while the verifier is in RECOVERY so a slashed verifier can rebuild their
   * bond by working rather than by fronting DREAM.
   */
  verifier_dream_reward?: string;
  max_verifier_dream_mint_per_epoch?: string;
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
  /**
   * Seasonal staking reward pool
   */
  maxStakingRewardsPerSeason: string;
  stakedDecayRate: string;
  newMemberDecayGraceEpochs: bigint;
  /**
   * Treasury management
   */
  maxTreasuryBalance: string;
  treasuryFundsInterims: boolean;
  treasuryFundsRetroPgf: boolean;
  /**
   * Anti-whale staking cap (mirrors Params.max_initiative_stake_per_member)
   */
  maxInitiativeStakePerMember: string;
  /**
   * Per-season initiative reward minting cap (mirrors Params.max_initiative_rewards_per_season)
   */
  maxInitiativeRewardsPerSeason: string;
  /**
   * Large project budget threshold for council approval (mirrors Params.large_project_budget_threshold)
   */
  largeProjectBudgetThreshold: string;
  /**
   * Permissionless creation fees (council-tunable)
   */
  projectCreationFee: string;
  initiativeCreationFeeApprentice: string;
  initiativeCreationFeeStandard: string;
  tagCreationFee: string;
  /**
   * Sentinel SPARK reward pool (x/rep holds SPARK fed by spam taxes;
   * drained each epoch to sentinels according to accuracy/activity gates).
   */
  maxSentinelRewardPool: string;
  /**
   * Fraction of overflow burned per epoch (default 0.5).
   */
  sentinelRewardPoolOverflowBurnRatio: string;
  /**
   * Cadence of sentinel reward distribution (default 14400 ~= 1 day).
   */
  sentinelRewardEpochBlocks: bigint;
  /**
   * Minimum accuracy to qualify for a reward (default 0.70).
   */
  minSentinelAccuracy: string;
  /**
   * Minimum appeal sample size before accuracy is meaningful (default 10).
   */
  minAppealsForAccuracy: bigint;
  /**
   * Minimum moderation actions in an epoch to qualify for a reward (default 1).
   */
  minEpochActivityForReward: bigint;
  /**
   * Minimum appeal rate (appeals / actions) to qualify for a reward (default 0.05).
   */
  minAppealRate: string;
  /**
   * Rolling window (in reward epochs) for sentinel reward accuracy (mirrors
   * Params.sentinel_accuracy_window_epochs). Default 6.
   */
  sentinelAccuracyWindowEpochs: bigint;
  /**
   * Per-member active work caps (mirrors Params.max_active_{initiatives,interims}_per_member). 0 = unbounded.
   */
  maxActiveInitiativesPerMember: number;
  maxActiveInterimsPerMember: number;
  /**
   * Global per-epoch DREAM minting cap (mirrors Params.max_dream_mint_per_epoch). 0 = unbounded.
   */
  maxDreamMintPerEpoch: string;
  /**
   * Proposal-time hard caps and expiry (mirror Params.max_project_requested_*
   * and Params.proposed_project_expiry_blocks).
   */
  maxProjectRequestedBudget: string;
  maxProjectRequestedSpark: string;
  proposedProjectExpiryBlocks: bigint;
  /**
   * Reputation deducted from a juror who accepted a summons and abandoned it.
   * Mirrors abandoned_jury_seat_penalty in Params.
   */
  abandonedJurySeatPenalty: string;
  /**
   * Fraction of the disputed initiative's budget paid out to its jury, split
   * evenly across the seats. Juror pay was a flat StandardComplexityBudget
   * regardless of what was in dispute, so a challenge over a 100 DREAM
   * APPRENTICE initiative minted 750 DREAM in juror fees to settle it — more
   * than the work was worth. Range [0, 1]. Default 0.25.
   */
  jurorRewardRate: string;
  /**
   * Mirrors min_juror_reward in Params.
   */
  minJurorReward: string;
  /**
   * Mirrors min_juror_selection_weight in Params.
   */
  minJurorSelectionWeight: string;
  /**
   * Mirrors min_jury_seatings_for_weighting in Params.
   */
  minJurySeatingsForWeighting: bigint;
  /**
   * Mirrors initiative_completion_bonus_rate in Params.
   */
  initiativeCompletionBonusRate: string;
  /**
   * Mirrors jury_acceptance_window_ratio in Params. Validated against
   * max_jury_redraws below — the pair must fit inside the review period.
   */
  juryAcceptanceWindowRatio: string;
  /**
   * Mirrors max_jury_redraws in Params.
   */
  maxJuryRedraws: number;
  /**
   * Mirrors reviewer_bond_reserve_rate in Params.
   */
  reviewerBondReserveRate: string;
  /**
   * Mirrors review_fee_rate in Params.
   */
  reviewFeeRate: string;
  /**
   * Mirrors max_review_rounds in Params.
   */
  maxReviewRounds: number;
  /**
   * Mirrors the reviewer reward pool knobs in Params.
   */
  maxReviewerRewardPool: string;
  reviewerRewardPoolOverflowBurnRatio: string;
  reviewerRewardEpochBlocks: bigint;
  minReviewerAccuracy: string;
  reviewerAccuracyWindowEpochs: bigint;
  /**
   * Mirrors role_reward_inflation_share in Params.
   */
  roleRewardInflationShare: string;
  /**
   * Mirrors the curator SPARK pool params in Params.
   */
  maxCuratorRewardPool: string;
  curatorRewardPoolOverflowBurnRatio: string;
  curatorRewardEpochBlocks: bigint;
  minCuratorAccuracy: string;
  curatorAccuracyWindowEpochs: bigint;
  /**
   * Mirrors review_required_above_budget in Params.
   */
  reviewRequiredAboveBudget: string;
  reviewBountyReclaimDelay: bigint;
  permissionlessMinReviewBountyRate: string;
  /**
   * Mirrors the federation-verifier pay params in Params.
   */
  maxVerifierRewardPool: string;
  verifierRewardPoolOverflowBurnRatio: string;
  verifierRewardEpochBlocks: bigint;
  minVerifierAccuracy: string;
  verifierAccuracyWindowEpochs: bigint;
  minEpochVerifications: number;
  verifierDreamReward: string;
  maxVerifierDreamMintPerEpoch: string;
  /**
   * Mirrors the reviewer bonded-role policy in Params. Updating these writes
   * through to the BondedRoleConfig for ROLE_TYPE_INITIATIVE_REVIEWER, so the
   * reviewer bond floor is tunable by council vote like every other role's.
   */
  minReviewerBond: string;
  reviewerDemotionThreshold: string;
  minReviewerTrustLevel: string;
  minReviewerRepTier: bigint;
  minReviewerAgeBlocks: bigint;
  reviewerDemotionCooldown: bigint;
  reviewerUnbondCooldown: bigint;
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
  /**
   * Seasonal staking reward pool
   */
  max_staking_rewards_per_season?: string;
  staked_decay_rate?: string;
  new_member_decay_grace_epochs?: string;
  /**
   * Treasury management
   */
  max_treasury_balance?: string;
  treasury_funds_interims?: boolean;
  treasury_funds_retro_pgf?: boolean;
  /**
   * Anti-whale staking cap (mirrors Params.max_initiative_stake_per_member)
   */
  max_initiative_stake_per_member?: string;
  /**
   * Per-season initiative reward minting cap (mirrors Params.max_initiative_rewards_per_season)
   */
  max_initiative_rewards_per_season?: string;
  /**
   * Large project budget threshold for council approval (mirrors Params.large_project_budget_threshold)
   */
  large_project_budget_threshold?: string;
  /**
   * Permissionless creation fees (council-tunable)
   */
  project_creation_fee?: string;
  initiative_creation_fee_apprentice?: string;
  initiative_creation_fee_standard?: string;
  tag_creation_fee?: string;
  /**
   * Sentinel SPARK reward pool (x/rep holds SPARK fed by spam taxes;
   * drained each epoch to sentinels according to accuracy/activity gates).
   */
  max_sentinel_reward_pool?: string;
  /**
   * Fraction of overflow burned per epoch (default 0.5).
   */
  sentinel_reward_pool_overflow_burn_ratio?: string;
  /**
   * Cadence of sentinel reward distribution (default 14400 ~= 1 day).
   */
  sentinel_reward_epoch_blocks?: string;
  /**
   * Minimum accuracy to qualify for a reward (default 0.70).
   */
  min_sentinel_accuracy?: string;
  /**
   * Minimum appeal sample size before accuracy is meaningful (default 10).
   */
  min_appeals_for_accuracy?: string;
  /**
   * Minimum moderation actions in an epoch to qualify for a reward (default 1).
   */
  min_epoch_activity_for_reward?: string;
  /**
   * Minimum appeal rate (appeals / actions) to qualify for a reward (default 0.05).
   */
  min_appeal_rate?: string;
  /**
   * Rolling window (in reward epochs) for sentinel reward accuracy (mirrors
   * Params.sentinel_accuracy_window_epochs). Default 6.
   */
  sentinel_accuracy_window_epochs?: string;
  /**
   * Per-member active work caps (mirrors Params.max_active_{initiatives,interims}_per_member). 0 = unbounded.
   */
  max_active_initiatives_per_member?: number;
  max_active_interims_per_member?: number;
  /**
   * Global per-epoch DREAM minting cap (mirrors Params.max_dream_mint_per_epoch). 0 = unbounded.
   */
  max_dream_mint_per_epoch?: string;
  /**
   * Proposal-time hard caps and expiry (mirror Params.max_project_requested_*
   * and Params.proposed_project_expiry_blocks).
   */
  max_project_requested_budget?: string;
  max_project_requested_spark?: string;
  proposed_project_expiry_blocks?: string;
  /**
   * Reputation deducted from a juror who accepted a summons and abandoned it.
   * Mirrors abandoned_jury_seat_penalty in Params.
   */
  abandoned_jury_seat_penalty?: string;
  /**
   * Fraction of the disputed initiative's budget paid out to its jury, split
   * evenly across the seats. Juror pay was a flat StandardComplexityBudget
   * regardless of what was in dispute, so a challenge over a 100 DREAM
   * APPRENTICE initiative minted 750 DREAM in juror fees to settle it — more
   * than the work was worth. Range [0, 1]. Default 0.25.
   */
  juror_reward_rate?: string;
  /**
   * Mirrors min_juror_reward in Params.
   */
  min_juror_reward?: string;
  /**
   * Mirrors min_juror_selection_weight in Params.
   */
  min_juror_selection_weight?: string;
  /**
   * Mirrors min_jury_seatings_for_weighting in Params.
   */
  min_jury_seatings_for_weighting?: string;
  /**
   * Mirrors initiative_completion_bonus_rate in Params.
   */
  initiative_completion_bonus_rate?: string;
  /**
   * Mirrors jury_acceptance_window_ratio in Params. Validated against
   * max_jury_redraws below — the pair must fit inside the review period.
   */
  jury_acceptance_window_ratio?: string;
  /**
   * Mirrors max_jury_redraws in Params.
   */
  max_jury_redraws?: number;
  /**
   * Mirrors reviewer_bond_reserve_rate in Params.
   */
  reviewer_bond_reserve_rate?: string;
  /**
   * Mirrors review_fee_rate in Params.
   */
  review_fee_rate?: string;
  /**
   * Mirrors max_review_rounds in Params.
   */
  max_review_rounds?: number;
  /**
   * Mirrors the reviewer reward pool knobs in Params.
   */
  max_reviewer_reward_pool?: string;
  reviewer_reward_pool_overflow_burn_ratio?: string;
  reviewer_reward_epoch_blocks?: string;
  min_reviewer_accuracy?: string;
  reviewer_accuracy_window_epochs?: string;
  /**
   * Mirrors role_reward_inflation_share in Params.
   */
  role_reward_inflation_share?: string;
  /**
   * Mirrors the curator SPARK pool params in Params.
   */
  max_curator_reward_pool?: string;
  curator_reward_pool_overflow_burn_ratio?: string;
  curator_reward_epoch_blocks?: string;
  min_curator_accuracy?: string;
  curator_accuracy_window_epochs?: string;
  /**
   * Mirrors review_required_above_budget in Params.
   */
  review_required_above_budget?: string;
  review_bounty_reclaim_delay?: string;
  permissionless_min_review_bounty_rate?: string;
  /**
   * Mirrors the federation-verifier pay params in Params.
   */
  max_verifier_reward_pool?: string;
  verifier_reward_pool_overflow_burn_ratio?: string;
  verifier_reward_epoch_blocks?: string;
  min_verifier_accuracy?: string;
  verifier_accuracy_window_epochs?: string;
  min_epoch_verifications?: number;
  verifier_dream_reward?: string;
  max_verifier_dream_mint_per_epoch?: string;
  /**
   * Mirrors the reviewer bonded-role policy in Params. Updating these writes
   * through to the BondedRoleConfig for ROLE_TYPE_INITIATIVE_REVIEWER, so the
   * reviewer bond floor is tunable by council vote like every other role's.
   */
  min_reviewer_bond?: string;
  reviewer_demotion_threshold?: string;
  min_reviewer_trust_level?: string;
  min_reviewer_rep_tier?: string;
  min_reviewer_age_blocks?: string;
  reviewer_demotion_cooldown?: string;
  reviewer_unbond_cooldown?: string;
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
    maxReputationGainPerEpoch: "",
    maxStakingRewardsPerSeason: "",
    stakedDecayRate: "",
    newMemberDecayGraceEpochs: BigInt(0),
    maxTreasuryBalance: "",
    treasuryFundsInterims: false,
    treasuryFundsRetroPgf: false,
    maxInitiativeStakePerMember: "",
    maxInitiativeRewardsPerSeason: "",
    largeProjectBudgetThreshold: "",
    projectCreationFee: "",
    initiativeCreationFeeApprentice: "",
    initiativeCreationFeeStandard: "",
    permissionlessMinTrustLevel: 0,
    permissionlessMaxTier: 0,
    tagCreationFee: "",
    maxSentinelRewardPool: "",
    sentinelRewardPoolOverflowBurnRatio: "",
    sentinelRewardEpochBlocks: BigInt(0),
    minSentinelAccuracy: "",
    minAppealsForAccuracy: BigInt(0),
    minEpochActivityForReward: BigInt(0),
    minAppealRate: "",
    sentinelAccuracyWindowEpochs: BigInt(0),
    maxActiveInitiativesPerMember: 0,
    maxActiveInterimsPerMember: 0,
    maxDreamMintPerEpoch: "",
    maxProjectRequestedBudget: "",
    maxProjectRequestedSpark: "",
    proposedProjectExpiryBlocks: BigInt(0),
    selfAssignedBondRate: "",
    selfAssignedExternalConvictionRatio: "",
    selfAssignedChallengeMultiplier: BigInt(0),
    permissionlessSelfAssignedBondRate: "",
    abandonedJurySeatPenalty: "",
    jurorRewardRate: "",
    juryAcceptanceWindowRatio: "",
    minJurorReward: "",
    minJurorSelectionWeight: "",
    minJurySeatingsForWeighting: BigInt(0),
    initiativeCompletionBonusRate: "",
    maxJuryRedraws: 0,
    reviewerBondReserveRate: "",
    reviewFeeRate: "",
    maxReviewRounds: 0,
    maxReviewerRewardPool: "",
    reviewerRewardPoolOverflowBurnRatio: "",
    reviewerRewardEpochBlocks: BigInt(0),
    minReviewerAccuracy: "",
    reviewerAccuracyWindowEpochs: BigInt(0),
    minReviewerBond: "",
    reviewerDemotionThreshold: "",
    minReviewerTrustLevel: "",
    minReviewerRepTier: BigInt(0),
    minReviewerAgeBlocks: BigInt(0),
    reviewerDemotionCooldown: BigInt(0),
    reviewerUnbondCooldown: BigInt(0),
    roleRewardInflationShare: "",
    maxCuratorRewardPool: "",
    curatorRewardPoolOverflowBurnRatio: "",
    curatorRewardEpochBlocks: BigInt(0),
    minCuratorAccuracy: "",
    curatorAccuracyWindowEpochs: BigInt(0),
    reviewRequiredAboveBudget: "",
    reviewBountyReclaimDelay: BigInt(0),
    permissionlessMinReviewBountyRate: "",
    maxVerifierRewardPool: "",
    verifierRewardPoolOverflowBurnRatio: "",
    verifierRewardEpochBlocks: BigInt(0),
    minVerifierAccuracy: "",
    verifierAccuracyWindowEpochs: BigInt(0),
    minEpochVerifications: 0,
    verifierDreamReward: "",
    maxVerifierDreamMintPerEpoch: ""
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
    if (message.unstakedDecayRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.unstakedDecayRate, 18).atomics);
    }
    if (message.transferTaxRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.transferTaxRate, 18).atomics);
    }
    if (message.maxTipAmount !== "") {
      writer.uint32(42).string(message.maxTipAmount);
    }
    if (message.maxTipsPerEpoch !== 0) {
      writer.uint32(48).uint32(message.maxTipsPerEpoch);
    }
    if (message.maxGiftAmount !== "") {
      writer.uint32(58).string(message.maxGiftAmount);
    }
    if (message.giftOnlyToInvitees === true) {
      writer.uint32(64).bool(message.giftOnlyToInvitees);
    }
    if (message.completerShare !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.completerShare, 18).atomics);
    }
    if (message.treasuryShare !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.treasuryShare, 18).atomics);
    }
    if (message.minReputationMultiplier !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.minReputationMultiplier, 18).atomics);
    }
    if (message.apprenticeTier !== undefined) {
      TierConfig.encode(message.apprenticeTier, writer.uint32(98).fork()).ldelim();
    }
    if (message.standardTier !== undefined) {
      TierConfig.encode(message.standardTier, writer.uint32(106).fork()).ldelim();
    }
    if (message.expertTier !== undefined) {
      TierConfig.encode(message.expertTier, writer.uint32(114).fork()).ldelim();
    }
    if (message.epicTier !== undefined) {
      TierConfig.encode(message.epicTier, writer.uint32(122).fork()).ldelim();
    }
    if (message.convictionHalfLifeEpochs !== BigInt(0)) {
      writer.uint32(128).int64(message.convictionHalfLifeEpochs);
    }
    if (message.externalConvictionRatio !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.externalConvictionRatio, 18).atomics);
    }
    if (message.convictionPerDream !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.convictionPerDream, 18).atomics);
    }
    if (message.defaultReviewPeriodEpochs !== BigInt(0)) {
      writer.uint32(152).int64(message.defaultReviewPeriodEpochs);
    }
    if (message.defaultChallengePeriodEpochs !== BigInt(0)) {
      writer.uint32(160).int64(message.defaultChallengePeriodEpochs);
    }
    if (message.minInvitationStake !== "") {
      writer.uint32(170).string(message.minInvitationStake);
    }
    if (message.invitationAccountabilityEpochs !== BigInt(0)) {
      writer.uint32(176).int64(message.invitationAccountabilityEpochs);
    }
    if (message.referralRewardRate !== "") {
      writer.uint32(186).string(Decimal.fromUserInput(message.referralRewardRate, 18).atomics);
    }
    if (message.invitationCostMultiplier !== "") {
      writer.uint32(194).string(Decimal.fromUserInput(message.invitationCostMultiplier, 18).atomics);
    }
    if (message.trustLevelConfig !== undefined) {
      TrustLevelConfig.encode(message.trustLevelConfig, writer.uint32(202).fork()).ldelim();
    }
    if (message.minChallengeStake !== "") {
      writer.uint32(210).string(message.minChallengeStake);
    }
    if (message.challengerRewardRate !== "") {
      writer.uint32(218).string(Decimal.fromUserInput(message.challengerRewardRate, 18).atomics);
    }
    if (message.jurySize !== 0) {
      writer.uint32(224).uint32(message.jurySize);
    }
    if (message.jurySuperMajority !== "") {
      writer.uint32(234).string(Decimal.fromUserInput(message.jurySuperMajority, 18).atomics);
    }
    if (message.minJurorReputation !== "") {
      writer.uint32(242).string(Decimal.fromUserInput(message.minJurorReputation, 18).atomics);
    }
    if (message.simpleComplexityBudget !== "") {
      writer.uint32(250).string(message.simpleComplexityBudget);
    }
    if (message.standardComplexityBudget !== "") {
      writer.uint32(258).string(message.standardComplexityBudget);
    }
    if (message.complexComplexityBudget !== "") {
      writer.uint32(266).string(message.complexComplexityBudget);
    }
    if (message.expertComplexityBudget !== "") {
      writer.uint32(274).string(message.expertComplexityBudget);
    }
    if (message.soloExpertBonusRate !== "") {
      writer.uint32(282).string(Decimal.fromUserInput(message.soloExpertBonusRate, 18).atomics);
    }
    if (message.interimDeadlineEpochs !== BigInt(0)) {
      writer.uint32(288).int64(message.interimDeadlineEpochs);
    }
    if (message.maxActiveChallengesPerCommittee !== 0) {
      writer.uint32(296).uint32(message.maxActiveChallengesPerCommittee);
    }
    if (message.maxNewChallengesPerEpoch !== 0) {
      writer.uint32(304).uint32(message.maxNewChallengesPerEpoch);
    }
    if (message.challengeQueueMaxSize !== 0) {
      writer.uint32(312).uint32(message.challengeQueueMaxSize);
    }
    if (message.minorSlashPenalty !== "") {
      writer.uint32(322).string(Decimal.fromUserInput(message.minorSlashPenalty, 18).atomics);
    }
    if (message.moderateSlashPenalty !== "") {
      writer.uint32(330).string(Decimal.fromUserInput(message.moderateSlashPenalty, 18).atomics);
    }
    if (message.severeSlashPenalty !== "") {
      writer.uint32(338).string(Decimal.fromUserInput(message.severeSlashPenalty, 18).atomics);
    }
    if (message.zeroingSlashPenalty !== "") {
      writer.uint32(346).string(Decimal.fromUserInput(message.zeroingSlashPenalty, 18).atomics);
    }
    if (message.projectCompletionBonusRate !== "") {
      writer.uint32(354).string(Decimal.fromUserInput(message.projectCompletionBonusRate, 18).atomics);
    }
    if (message.memberStakeRevenueShare !== "") {
      writer.uint32(362).string(Decimal.fromUserInput(message.memberStakeRevenueShare, 18).atomics);
    }
    if (message.tagStakeRevenueShare !== "") {
      writer.uint32(370).string(Decimal.fromUserInput(message.tagStakeRevenueShare, 18).atomics);
    }
    if (message.minStakeDurationSeconds !== BigInt(0)) {
      writer.uint32(376).int64(message.minStakeDurationSeconds);
    }
    if (message.allowSelfMemberStake === true) {
      writer.uint32(384).bool(message.allowSelfMemberStake);
    }
    if (message.challengeResponseDeadlineEpochs !== BigInt(0)) {
      writer.uint32(392).int64(message.challengeResponseDeadlineEpochs);
    }
    if (message.giftCooldownBlocks !== BigInt(0)) {
      writer.uint32(400).int64(message.giftCooldownBlocks);
    }
    if (message.maxGiftsPerSenderEpoch !== "") {
      writer.uint32(410).string(message.maxGiftsPerSenderEpoch);
    }
    if (message.contentConvictionHalfLifeEpochs !== BigInt(0)) {
      writer.uint32(416).int64(message.contentConvictionHalfLifeEpochs);
    }
    if (message.maxContentStakePerMember !== "") {
      writer.uint32(426).string(message.maxContentStakePerMember);
    }
    if (message.maxAuthorBondPerContent !== "") {
      writer.uint32(434).string(message.maxAuthorBondPerContent);
    }
    if (message.authorBondSlashOnModeration === true) {
      writer.uint32(440).bool(message.authorBondSlashOnModeration);
    }
    if (message.contentChallengeRewardShare !== "") {
      writer.uint32(450).string(Decimal.fromUserInput(message.contentChallengeRewardShare, 18).atomics);
    }
    if (message.convictionPropagationRatio !== "") {
      writer.uint32(458).string(Decimal.fromUserInput(message.convictionPropagationRatio, 18).atomics);
    }
    if (message.maxTagsPerInitiative !== 0) {
      writer.uint32(464).uint32(message.maxTagsPerInitiative);
    }
    if (message.reputationDecayRate !== "") {
      writer.uint32(474).string(Decimal.fromUserInput(message.reputationDecayRate, 18).atomics);
    }
    if (message.maxConvictionSharePerMember !== "") {
      writer.uint32(482).string(Decimal.fromUserInput(message.maxConvictionSharePerMember, 18).atomics);
    }
    if (message.invitationStakeBurnRate !== "") {
      writer.uint32(490).string(Decimal.fromUserInput(message.invitationStakeBurnRate, 18).atomics);
    }
    if (message.maxReputationGainPerEpoch !== "") {
      writer.uint32(498).string(Decimal.fromUserInput(message.maxReputationGainPerEpoch, 18).atomics);
    }
    if (message.maxStakingRewardsPerSeason !== "") {
      writer.uint32(506).string(message.maxStakingRewardsPerSeason);
    }
    if (message.stakedDecayRate !== "") {
      writer.uint32(514).string(Decimal.fromUserInput(message.stakedDecayRate, 18).atomics);
    }
    if (message.newMemberDecayGraceEpochs !== BigInt(0)) {
      writer.uint32(520).int64(message.newMemberDecayGraceEpochs);
    }
    if (message.maxTreasuryBalance !== "") {
      writer.uint32(530).string(message.maxTreasuryBalance);
    }
    if (message.treasuryFundsInterims === true) {
      writer.uint32(536).bool(message.treasuryFundsInterims);
    }
    if (message.treasuryFundsRetroPgf === true) {
      writer.uint32(544).bool(message.treasuryFundsRetroPgf);
    }
    if (message.maxInitiativeStakePerMember !== "") {
      writer.uint32(554).string(message.maxInitiativeStakePerMember);
    }
    if (message.maxInitiativeRewardsPerSeason !== "") {
      writer.uint32(562).string(message.maxInitiativeRewardsPerSeason);
    }
    if (message.largeProjectBudgetThreshold !== "") {
      writer.uint32(570).string(message.largeProjectBudgetThreshold);
    }
    if (message.projectCreationFee !== "") {
      writer.uint32(578).string(message.projectCreationFee);
    }
    if (message.initiativeCreationFeeApprentice !== "") {
      writer.uint32(586).string(message.initiativeCreationFeeApprentice);
    }
    if (message.initiativeCreationFeeStandard !== "") {
      writer.uint32(594).string(message.initiativeCreationFeeStandard);
    }
    if (message.permissionlessMinTrustLevel !== 0) {
      writer.uint32(600).uint32(message.permissionlessMinTrustLevel);
    }
    if (message.permissionlessMaxTier !== 0) {
      writer.uint32(608).uint32(message.permissionlessMaxTier);
    }
    if (message.tagCreationFee !== "") {
      writer.uint32(618).string(message.tagCreationFee);
    }
    if (message.maxSentinelRewardPool !== "") {
      writer.uint32(626).string(message.maxSentinelRewardPool);
    }
    if (message.sentinelRewardPoolOverflowBurnRatio !== "") {
      writer.uint32(634).string(Decimal.fromUserInput(message.sentinelRewardPoolOverflowBurnRatio, 18).atomics);
    }
    if (message.sentinelRewardEpochBlocks !== BigInt(0)) {
      writer.uint32(640).uint64(message.sentinelRewardEpochBlocks);
    }
    if (message.minSentinelAccuracy !== "") {
      writer.uint32(650).string(Decimal.fromUserInput(message.minSentinelAccuracy, 18).atomics);
    }
    if (message.minAppealsForAccuracy !== BigInt(0)) {
      writer.uint32(656).uint64(message.minAppealsForAccuracy);
    }
    if (message.minEpochActivityForReward !== BigInt(0)) {
      writer.uint32(664).uint64(message.minEpochActivityForReward);
    }
    if (message.minAppealRate !== "") {
      writer.uint32(674).string(Decimal.fromUserInput(message.minAppealRate, 18).atomics);
    }
    if (message.sentinelAccuracyWindowEpochs !== BigInt(0)) {
      writer.uint32(728).uint64(message.sentinelAccuracyWindowEpochs);
    }
    if (message.maxActiveInitiativesPerMember !== 0) {
      writer.uint32(680).uint32(message.maxActiveInitiativesPerMember);
    }
    if (message.maxActiveInterimsPerMember !== 0) {
      writer.uint32(688).uint32(message.maxActiveInterimsPerMember);
    }
    if (message.maxDreamMintPerEpoch !== "") {
      writer.uint32(698).string(message.maxDreamMintPerEpoch);
    }
    if (message.maxProjectRequestedBudget !== "") {
      writer.uint32(706).string(message.maxProjectRequestedBudget);
    }
    if (message.maxProjectRequestedSpark !== "") {
      writer.uint32(714).string(message.maxProjectRequestedSpark);
    }
    if (message.proposedProjectExpiryBlocks !== BigInt(0)) {
      writer.uint32(720).int64(message.proposedProjectExpiryBlocks);
    }
    if (message.selfAssignedBondRate !== "") {
      writer.uint32(738).string(Decimal.fromUserInput(message.selfAssignedBondRate, 18).atomics);
    }
    if (message.selfAssignedExternalConvictionRatio !== "") {
      writer.uint32(746).string(Decimal.fromUserInput(message.selfAssignedExternalConvictionRatio, 18).atomics);
    }
    if (message.selfAssignedChallengeMultiplier !== BigInt(0)) {
      writer.uint32(752).int64(message.selfAssignedChallengeMultiplier);
    }
    if (message.permissionlessSelfAssignedBondRate !== "") {
      writer.uint32(762).string(Decimal.fromUserInput(message.permissionlessSelfAssignedBondRate, 18).atomics);
    }
    if (message.abandonedJurySeatPenalty !== "") {
      writer.uint32(770).string(Decimal.fromUserInput(message.abandonedJurySeatPenalty, 18).atomics);
    }
    if (message.jurorRewardRate !== "") {
      writer.uint32(778).string(Decimal.fromUserInput(message.jurorRewardRate, 18).atomics);
    }
    if (message.juryAcceptanceWindowRatio !== "") {
      writer.uint32(786).string(Decimal.fromUserInput(message.juryAcceptanceWindowRatio, 18).atomics);
    }
    if (message.minJurorReward !== "") {
      writer.uint32(794).string(message.minJurorReward);
    }
    if (message.minJurorSelectionWeight !== "") {
      writer.uint32(802).string(Decimal.fromUserInput(message.minJurorSelectionWeight, 18).atomics);
    }
    if (message.minJurySeatingsForWeighting !== BigInt(0)) {
      writer.uint32(808).uint64(message.minJurySeatingsForWeighting);
    }
    if (message.initiativeCompletionBonusRate !== "") {
      writer.uint32(818).string(Decimal.fromUserInput(message.initiativeCompletionBonusRate, 18).atomics);
    }
    if (message.maxJuryRedraws !== 0) {
      writer.uint32(824).uint32(message.maxJuryRedraws);
    }
    if (message.reviewerBondReserveRate !== "") {
      writer.uint32(834).string(Decimal.fromUserInput(message.reviewerBondReserveRate, 18).atomics);
    }
    if (message.reviewFeeRate !== "") {
      writer.uint32(842).string(Decimal.fromUserInput(message.reviewFeeRate, 18).atomics);
    }
    if (message.maxReviewRounds !== 0) {
      writer.uint32(848).uint32(message.maxReviewRounds);
    }
    if (message.maxReviewerRewardPool !== "") {
      writer.uint32(858).string(message.maxReviewerRewardPool);
    }
    if (message.reviewerRewardPoolOverflowBurnRatio !== "") {
      writer.uint32(866).string(Decimal.fromUserInput(message.reviewerRewardPoolOverflowBurnRatio, 18).atomics);
    }
    if (message.reviewerRewardEpochBlocks !== BigInt(0)) {
      writer.uint32(872).uint64(message.reviewerRewardEpochBlocks);
    }
    if (message.minReviewerAccuracy !== "") {
      writer.uint32(882).string(Decimal.fromUserInput(message.minReviewerAccuracy, 18).atomics);
    }
    if (message.reviewerAccuracyWindowEpochs !== BigInt(0)) {
      writer.uint32(888).uint64(message.reviewerAccuracyWindowEpochs);
    }
    if (message.minReviewerBond !== "") {
      writer.uint32(1034).string(message.minReviewerBond);
    }
    if (message.reviewerDemotionThreshold !== "") {
      writer.uint32(1042).string(message.reviewerDemotionThreshold);
    }
    if (message.minReviewerTrustLevel !== "") {
      writer.uint32(1050).string(message.minReviewerTrustLevel);
    }
    if (message.minReviewerRepTier !== BigInt(0)) {
      writer.uint32(1056).uint64(message.minReviewerRepTier);
    }
    if (message.minReviewerAgeBlocks !== BigInt(0)) {
      writer.uint32(1064).int64(message.minReviewerAgeBlocks);
    }
    if (message.reviewerDemotionCooldown !== BigInt(0)) {
      writer.uint32(1072).int64(message.reviewerDemotionCooldown);
    }
    if (message.reviewerUnbondCooldown !== BigInt(0)) {
      writer.uint32(1080).int64(message.reviewerUnbondCooldown);
    }
    if (message.roleRewardInflationShare !== "") {
      writer.uint32(898).string(Decimal.fromUserInput(message.roleRewardInflationShare, 18).atomics);
    }
    if (message.maxCuratorRewardPool !== "") {
      writer.uint32(906).string(message.maxCuratorRewardPool);
    }
    if (message.curatorRewardPoolOverflowBurnRatio !== "") {
      writer.uint32(914).string(Decimal.fromUserInput(message.curatorRewardPoolOverflowBurnRatio, 18).atomics);
    }
    if (message.curatorRewardEpochBlocks !== BigInt(0)) {
      writer.uint32(920).uint64(message.curatorRewardEpochBlocks);
    }
    if (message.minCuratorAccuracy !== "") {
      writer.uint32(930).string(Decimal.fromUserInput(message.minCuratorAccuracy, 18).atomics);
    }
    if (message.curatorAccuracyWindowEpochs !== BigInt(0)) {
      writer.uint32(936).uint64(message.curatorAccuracyWindowEpochs);
    }
    if (message.reviewRequiredAboveBudget !== "") {
      writer.uint32(946).string(message.reviewRequiredAboveBudget);
    }
    if (message.reviewBountyReclaimDelay !== BigInt(0)) {
      writer.uint32(952).uint64(message.reviewBountyReclaimDelay);
    }
    if (message.permissionlessMinReviewBountyRate !== "") {
      writer.uint32(962).string(Decimal.fromUserInput(message.permissionlessMinReviewBountyRate, 18).atomics);
    }
    if (message.maxVerifierRewardPool !== "") {
      writer.uint32(970).string(message.maxVerifierRewardPool);
    }
    if (message.verifierRewardPoolOverflowBurnRatio !== "") {
      writer.uint32(978).string(Decimal.fromUserInput(message.verifierRewardPoolOverflowBurnRatio, 18).atomics);
    }
    if (message.verifierRewardEpochBlocks !== BigInt(0)) {
      writer.uint32(984).uint64(message.verifierRewardEpochBlocks);
    }
    if (message.minVerifierAccuracy !== "") {
      writer.uint32(994).string(Decimal.fromUserInput(message.minVerifierAccuracy, 18).atomics);
    }
    if (message.verifierAccuracyWindowEpochs !== BigInt(0)) {
      writer.uint32(1000).uint64(message.verifierAccuracyWindowEpochs);
    }
    if (message.minEpochVerifications !== 0) {
      writer.uint32(1008).uint32(message.minEpochVerifications);
    }
    if (message.verifierDreamReward !== "") {
      writer.uint32(1018).string(message.verifierDreamReward);
    }
    if (message.maxVerifierDreamMintPerEpoch !== "") {
      writer.uint32(1026).string(message.maxVerifierDreamMintPerEpoch);
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
          message.unstakedDecayRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.transferTaxRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.maxTipAmount = reader.string();
          break;
        case 6:
          message.maxTipsPerEpoch = reader.uint32();
          break;
        case 7:
          message.maxGiftAmount = reader.string();
          break;
        case 8:
          message.giftOnlyToInvitees = reader.bool();
          break;
        case 9:
          message.completerShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.treasuryShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.minReputationMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.apprenticeTier = TierConfig.decode(reader, reader.uint32());
          break;
        case 13:
          message.standardTier = TierConfig.decode(reader, reader.uint32());
          break;
        case 14:
          message.expertTier = TierConfig.decode(reader, reader.uint32());
          break;
        case 15:
          message.epicTier = TierConfig.decode(reader, reader.uint32());
          break;
        case 16:
          message.convictionHalfLifeEpochs = reader.int64();
          break;
        case 17:
          message.externalConvictionRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 18:
          message.convictionPerDream = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.defaultReviewPeriodEpochs = reader.int64();
          break;
        case 20:
          message.defaultChallengePeriodEpochs = reader.int64();
          break;
        case 21:
          message.minInvitationStake = reader.string();
          break;
        case 22:
          message.invitationAccountabilityEpochs = reader.int64();
          break;
        case 23:
          message.referralRewardRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 24:
          message.invitationCostMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 25:
          message.trustLevelConfig = TrustLevelConfig.decode(reader, reader.uint32());
          break;
        case 26:
          message.minChallengeStake = reader.string();
          break;
        case 27:
          message.challengerRewardRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 28:
          message.jurySize = reader.uint32();
          break;
        case 29:
          message.jurySuperMajority = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 30:
          message.minJurorReputation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 31:
          message.simpleComplexityBudget = reader.string();
          break;
        case 32:
          message.standardComplexityBudget = reader.string();
          break;
        case 33:
          message.complexComplexityBudget = reader.string();
          break;
        case 34:
          message.expertComplexityBudget = reader.string();
          break;
        case 35:
          message.soloExpertBonusRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 36:
          message.interimDeadlineEpochs = reader.int64();
          break;
        case 37:
          message.maxActiveChallengesPerCommittee = reader.uint32();
          break;
        case 38:
          message.maxNewChallengesPerEpoch = reader.uint32();
          break;
        case 39:
          message.challengeQueueMaxSize = reader.uint32();
          break;
        case 40:
          message.minorSlashPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 41:
          message.moderateSlashPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 42:
          message.severeSlashPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 43:
          message.zeroingSlashPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 44:
          message.projectCompletionBonusRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 45:
          message.memberStakeRevenueShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 46:
          message.tagStakeRevenueShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 47:
          message.minStakeDurationSeconds = reader.int64();
          break;
        case 48:
          message.allowSelfMemberStake = reader.bool();
          break;
        case 49:
          message.challengeResponseDeadlineEpochs = reader.int64();
          break;
        case 50:
          message.giftCooldownBlocks = reader.int64();
          break;
        case 51:
          message.maxGiftsPerSenderEpoch = reader.string();
          break;
        case 52:
          message.contentConvictionHalfLifeEpochs = reader.int64();
          break;
        case 53:
          message.maxContentStakePerMember = reader.string();
          break;
        case 54:
          message.maxAuthorBondPerContent = reader.string();
          break;
        case 55:
          message.authorBondSlashOnModeration = reader.bool();
          break;
        case 56:
          message.contentChallengeRewardShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 57:
          message.convictionPropagationRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 58:
          message.maxTagsPerInitiative = reader.uint32();
          break;
        case 59:
          message.reputationDecayRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 60:
          message.maxConvictionSharePerMember = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 61:
          message.invitationStakeBurnRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 62:
          message.maxReputationGainPerEpoch = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 63:
          message.maxStakingRewardsPerSeason = reader.string();
          break;
        case 64:
          message.stakedDecayRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 65:
          message.newMemberDecayGraceEpochs = reader.int64();
          break;
        case 66:
          message.maxTreasuryBalance = reader.string();
          break;
        case 67:
          message.treasuryFundsInterims = reader.bool();
          break;
        case 68:
          message.treasuryFundsRetroPgf = reader.bool();
          break;
        case 69:
          message.maxInitiativeStakePerMember = reader.string();
          break;
        case 70:
          message.maxInitiativeRewardsPerSeason = reader.string();
          break;
        case 71:
          message.largeProjectBudgetThreshold = reader.string();
          break;
        case 72:
          message.projectCreationFee = reader.string();
          break;
        case 73:
          message.initiativeCreationFeeApprentice = reader.string();
          break;
        case 74:
          message.initiativeCreationFeeStandard = reader.string();
          break;
        case 75:
          message.permissionlessMinTrustLevel = reader.uint32();
          break;
        case 76:
          message.permissionlessMaxTier = reader.uint32();
          break;
        case 77:
          message.tagCreationFee = reader.string();
          break;
        case 78:
          message.maxSentinelRewardPool = reader.string();
          break;
        case 79:
          message.sentinelRewardPoolOverflowBurnRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 80:
          message.sentinelRewardEpochBlocks = reader.uint64();
          break;
        case 81:
          message.minSentinelAccuracy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 82:
          message.minAppealsForAccuracy = reader.uint64();
          break;
        case 83:
          message.minEpochActivityForReward = reader.uint64();
          break;
        case 84:
          message.minAppealRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 91:
          message.sentinelAccuracyWindowEpochs = reader.uint64();
          break;
        case 85:
          message.maxActiveInitiativesPerMember = reader.uint32();
          break;
        case 86:
          message.maxActiveInterimsPerMember = reader.uint32();
          break;
        case 87:
          message.maxDreamMintPerEpoch = reader.string();
          break;
        case 88:
          message.maxProjectRequestedBudget = reader.string();
          break;
        case 89:
          message.maxProjectRequestedSpark = reader.string();
          break;
        case 90:
          message.proposedProjectExpiryBlocks = reader.int64();
          break;
        case 92:
          message.selfAssignedBondRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 93:
          message.selfAssignedExternalConvictionRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 94:
          message.selfAssignedChallengeMultiplier = reader.int64();
          break;
        case 95:
          message.permissionlessSelfAssignedBondRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 96:
          message.abandonedJurySeatPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 97:
          message.jurorRewardRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 98:
          message.juryAcceptanceWindowRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 99:
          message.minJurorReward = reader.string();
          break;
        case 100:
          message.minJurorSelectionWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 101:
          message.minJurySeatingsForWeighting = reader.uint64();
          break;
        case 102:
          message.initiativeCompletionBonusRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 103:
          message.maxJuryRedraws = reader.uint32();
          break;
        case 104:
          message.reviewerBondReserveRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 105:
          message.reviewFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 106:
          message.maxReviewRounds = reader.uint32();
          break;
        case 107:
          message.maxReviewerRewardPool = reader.string();
          break;
        case 108:
          message.reviewerRewardPoolOverflowBurnRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 109:
          message.reviewerRewardEpochBlocks = reader.uint64();
          break;
        case 110:
          message.minReviewerAccuracy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 111:
          message.reviewerAccuracyWindowEpochs = reader.uint64();
          break;
        case 129:
          message.minReviewerBond = reader.string();
          break;
        case 130:
          message.reviewerDemotionThreshold = reader.string();
          break;
        case 131:
          message.minReviewerTrustLevel = reader.string();
          break;
        case 132:
          message.minReviewerRepTier = reader.uint64();
          break;
        case 133:
          message.minReviewerAgeBlocks = reader.int64();
          break;
        case 134:
          message.reviewerDemotionCooldown = reader.int64();
          break;
        case 135:
          message.reviewerUnbondCooldown = reader.int64();
          break;
        case 112:
          message.roleRewardInflationShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 113:
          message.maxCuratorRewardPool = reader.string();
          break;
        case 114:
          message.curatorRewardPoolOverflowBurnRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 115:
          message.curatorRewardEpochBlocks = reader.uint64();
          break;
        case 116:
          message.minCuratorAccuracy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 117:
          message.curatorAccuracyWindowEpochs = reader.uint64();
          break;
        case 118:
          message.reviewRequiredAboveBudget = reader.string();
          break;
        case 119:
          message.reviewBountyReclaimDelay = reader.uint64();
          break;
        case 120:
          message.permissionlessMinReviewBountyRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 121:
          message.maxVerifierRewardPool = reader.string();
          break;
        case 122:
          message.verifierRewardPoolOverflowBurnRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 123:
          message.verifierRewardEpochBlocks = reader.uint64();
          break;
        case 124:
          message.minVerifierAccuracy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 125:
          message.verifierAccuracyWindowEpochs = reader.uint64();
          break;
        case 126:
          message.minEpochVerifications = reader.uint32();
          break;
        case 127:
          message.verifierDreamReward = reader.string();
          break;
        case 128:
          message.maxVerifierDreamMintPerEpoch = reader.string();
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
    message.maxStakingRewardsPerSeason = object.maxStakingRewardsPerSeason ?? "";
    message.stakedDecayRate = object.stakedDecayRate ?? "";
    message.newMemberDecayGraceEpochs = object.newMemberDecayGraceEpochs !== undefined && object.newMemberDecayGraceEpochs !== null ? BigInt(object.newMemberDecayGraceEpochs.toString()) : BigInt(0);
    message.maxTreasuryBalance = object.maxTreasuryBalance ?? "";
    message.treasuryFundsInterims = object.treasuryFundsInterims ?? false;
    message.treasuryFundsRetroPgf = object.treasuryFundsRetroPgf ?? false;
    message.maxInitiativeStakePerMember = object.maxInitiativeStakePerMember ?? "";
    message.maxInitiativeRewardsPerSeason = object.maxInitiativeRewardsPerSeason ?? "";
    message.largeProjectBudgetThreshold = object.largeProjectBudgetThreshold ?? "";
    message.projectCreationFee = object.projectCreationFee ?? "";
    message.initiativeCreationFeeApprentice = object.initiativeCreationFeeApprentice ?? "";
    message.initiativeCreationFeeStandard = object.initiativeCreationFeeStandard ?? "";
    message.permissionlessMinTrustLevel = object.permissionlessMinTrustLevel ?? 0;
    message.permissionlessMaxTier = object.permissionlessMaxTier ?? 0;
    message.tagCreationFee = object.tagCreationFee ?? "";
    message.maxSentinelRewardPool = object.maxSentinelRewardPool ?? "";
    message.sentinelRewardPoolOverflowBurnRatio = object.sentinelRewardPoolOverflowBurnRatio ?? "";
    message.sentinelRewardEpochBlocks = object.sentinelRewardEpochBlocks !== undefined && object.sentinelRewardEpochBlocks !== null ? BigInt(object.sentinelRewardEpochBlocks.toString()) : BigInt(0);
    message.minSentinelAccuracy = object.minSentinelAccuracy ?? "";
    message.minAppealsForAccuracy = object.minAppealsForAccuracy !== undefined && object.minAppealsForAccuracy !== null ? BigInt(object.minAppealsForAccuracy.toString()) : BigInt(0);
    message.minEpochActivityForReward = object.minEpochActivityForReward !== undefined && object.minEpochActivityForReward !== null ? BigInt(object.minEpochActivityForReward.toString()) : BigInt(0);
    message.minAppealRate = object.minAppealRate ?? "";
    message.sentinelAccuracyWindowEpochs = object.sentinelAccuracyWindowEpochs !== undefined && object.sentinelAccuracyWindowEpochs !== null ? BigInt(object.sentinelAccuracyWindowEpochs.toString()) : BigInt(0);
    message.maxActiveInitiativesPerMember = object.maxActiveInitiativesPerMember ?? 0;
    message.maxActiveInterimsPerMember = object.maxActiveInterimsPerMember ?? 0;
    message.maxDreamMintPerEpoch = object.maxDreamMintPerEpoch ?? "";
    message.maxProjectRequestedBudget = object.maxProjectRequestedBudget ?? "";
    message.maxProjectRequestedSpark = object.maxProjectRequestedSpark ?? "";
    message.proposedProjectExpiryBlocks = object.proposedProjectExpiryBlocks !== undefined && object.proposedProjectExpiryBlocks !== null ? BigInt(object.proposedProjectExpiryBlocks.toString()) : BigInt(0);
    message.selfAssignedBondRate = object.selfAssignedBondRate ?? "";
    message.selfAssignedExternalConvictionRatio = object.selfAssignedExternalConvictionRatio ?? "";
    message.selfAssignedChallengeMultiplier = object.selfAssignedChallengeMultiplier !== undefined && object.selfAssignedChallengeMultiplier !== null ? BigInt(object.selfAssignedChallengeMultiplier.toString()) : BigInt(0);
    message.permissionlessSelfAssignedBondRate = object.permissionlessSelfAssignedBondRate ?? "";
    message.abandonedJurySeatPenalty = object.abandonedJurySeatPenalty ?? "";
    message.jurorRewardRate = object.jurorRewardRate ?? "";
    message.juryAcceptanceWindowRatio = object.juryAcceptanceWindowRatio ?? "";
    message.minJurorReward = object.minJurorReward ?? "";
    message.minJurorSelectionWeight = object.minJurorSelectionWeight ?? "";
    message.minJurySeatingsForWeighting = object.minJurySeatingsForWeighting !== undefined && object.minJurySeatingsForWeighting !== null ? BigInt(object.minJurySeatingsForWeighting.toString()) : BigInt(0);
    message.initiativeCompletionBonusRate = object.initiativeCompletionBonusRate ?? "";
    message.maxJuryRedraws = object.maxJuryRedraws ?? 0;
    message.reviewerBondReserveRate = object.reviewerBondReserveRate ?? "";
    message.reviewFeeRate = object.reviewFeeRate ?? "";
    message.maxReviewRounds = object.maxReviewRounds ?? 0;
    message.maxReviewerRewardPool = object.maxReviewerRewardPool ?? "";
    message.reviewerRewardPoolOverflowBurnRatio = object.reviewerRewardPoolOverflowBurnRatio ?? "";
    message.reviewerRewardEpochBlocks = object.reviewerRewardEpochBlocks !== undefined && object.reviewerRewardEpochBlocks !== null ? BigInt(object.reviewerRewardEpochBlocks.toString()) : BigInt(0);
    message.minReviewerAccuracy = object.minReviewerAccuracy ?? "";
    message.reviewerAccuracyWindowEpochs = object.reviewerAccuracyWindowEpochs !== undefined && object.reviewerAccuracyWindowEpochs !== null ? BigInt(object.reviewerAccuracyWindowEpochs.toString()) : BigInt(0);
    message.minReviewerBond = object.minReviewerBond ?? "";
    message.reviewerDemotionThreshold = object.reviewerDemotionThreshold ?? "";
    message.minReviewerTrustLevel = object.minReviewerTrustLevel ?? "";
    message.minReviewerRepTier = object.minReviewerRepTier !== undefined && object.minReviewerRepTier !== null ? BigInt(object.minReviewerRepTier.toString()) : BigInt(0);
    message.minReviewerAgeBlocks = object.minReviewerAgeBlocks !== undefined && object.minReviewerAgeBlocks !== null ? BigInt(object.minReviewerAgeBlocks.toString()) : BigInt(0);
    message.reviewerDemotionCooldown = object.reviewerDemotionCooldown !== undefined && object.reviewerDemotionCooldown !== null ? BigInt(object.reviewerDemotionCooldown.toString()) : BigInt(0);
    message.reviewerUnbondCooldown = object.reviewerUnbondCooldown !== undefined && object.reviewerUnbondCooldown !== null ? BigInt(object.reviewerUnbondCooldown.toString()) : BigInt(0);
    message.roleRewardInflationShare = object.roleRewardInflationShare ?? "";
    message.maxCuratorRewardPool = object.maxCuratorRewardPool ?? "";
    message.curatorRewardPoolOverflowBurnRatio = object.curatorRewardPoolOverflowBurnRatio ?? "";
    message.curatorRewardEpochBlocks = object.curatorRewardEpochBlocks !== undefined && object.curatorRewardEpochBlocks !== null ? BigInt(object.curatorRewardEpochBlocks.toString()) : BigInt(0);
    message.minCuratorAccuracy = object.minCuratorAccuracy ?? "";
    message.curatorAccuracyWindowEpochs = object.curatorAccuracyWindowEpochs !== undefined && object.curatorAccuracyWindowEpochs !== null ? BigInt(object.curatorAccuracyWindowEpochs.toString()) : BigInt(0);
    message.reviewRequiredAboveBudget = object.reviewRequiredAboveBudget ?? "";
    message.reviewBountyReclaimDelay = object.reviewBountyReclaimDelay !== undefined && object.reviewBountyReclaimDelay !== null ? BigInt(object.reviewBountyReclaimDelay.toString()) : BigInt(0);
    message.permissionlessMinReviewBountyRate = object.permissionlessMinReviewBountyRate ?? "";
    message.maxVerifierRewardPool = object.maxVerifierRewardPool ?? "";
    message.verifierRewardPoolOverflowBurnRatio = object.verifierRewardPoolOverflowBurnRatio ?? "";
    message.verifierRewardEpochBlocks = object.verifierRewardEpochBlocks !== undefined && object.verifierRewardEpochBlocks !== null ? BigInt(object.verifierRewardEpochBlocks.toString()) : BigInt(0);
    message.minVerifierAccuracy = object.minVerifierAccuracy ?? "";
    message.verifierAccuracyWindowEpochs = object.verifierAccuracyWindowEpochs !== undefined && object.verifierAccuracyWindowEpochs !== null ? BigInt(object.verifierAccuracyWindowEpochs.toString()) : BigInt(0);
    message.minEpochVerifications = object.minEpochVerifications ?? 0;
    message.verifierDreamReward = object.verifierDreamReward ?? "";
    message.maxVerifierDreamMintPerEpoch = object.maxVerifierDreamMintPerEpoch ?? "";
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
    if (object.max_staking_rewards_per_season !== undefined && object.max_staking_rewards_per_season !== null) {
      message.maxStakingRewardsPerSeason = object.max_staking_rewards_per_season;
    }
    if (object.staked_decay_rate !== undefined && object.staked_decay_rate !== null) {
      message.stakedDecayRate = object.staked_decay_rate;
    }
    if (object.new_member_decay_grace_epochs !== undefined && object.new_member_decay_grace_epochs !== null) {
      message.newMemberDecayGraceEpochs = BigInt(object.new_member_decay_grace_epochs);
    }
    if (object.max_treasury_balance !== undefined && object.max_treasury_balance !== null) {
      message.maxTreasuryBalance = object.max_treasury_balance;
    }
    if (object.treasury_funds_interims !== undefined && object.treasury_funds_interims !== null) {
      message.treasuryFundsInterims = object.treasury_funds_interims;
    }
    if (object.treasury_funds_retro_pgf !== undefined && object.treasury_funds_retro_pgf !== null) {
      message.treasuryFundsRetroPgf = object.treasury_funds_retro_pgf;
    }
    if (object.max_initiative_stake_per_member !== undefined && object.max_initiative_stake_per_member !== null) {
      message.maxInitiativeStakePerMember = object.max_initiative_stake_per_member;
    }
    if (object.max_initiative_rewards_per_season !== undefined && object.max_initiative_rewards_per_season !== null) {
      message.maxInitiativeRewardsPerSeason = object.max_initiative_rewards_per_season;
    }
    if (object.large_project_budget_threshold !== undefined && object.large_project_budget_threshold !== null) {
      message.largeProjectBudgetThreshold = object.large_project_budget_threshold;
    }
    if (object.project_creation_fee !== undefined && object.project_creation_fee !== null) {
      message.projectCreationFee = object.project_creation_fee;
    }
    if (object.initiative_creation_fee_apprentice !== undefined && object.initiative_creation_fee_apprentice !== null) {
      message.initiativeCreationFeeApprentice = object.initiative_creation_fee_apprentice;
    }
    if (object.initiative_creation_fee_standard !== undefined && object.initiative_creation_fee_standard !== null) {
      message.initiativeCreationFeeStandard = object.initiative_creation_fee_standard;
    }
    if (object.permissionless_min_trust_level !== undefined && object.permissionless_min_trust_level !== null) {
      message.permissionlessMinTrustLevel = object.permissionless_min_trust_level;
    }
    if (object.permissionless_max_tier !== undefined && object.permissionless_max_tier !== null) {
      message.permissionlessMaxTier = object.permissionless_max_tier;
    }
    if (object.tag_creation_fee !== undefined && object.tag_creation_fee !== null) {
      message.tagCreationFee = object.tag_creation_fee;
    }
    if (object.max_sentinel_reward_pool !== undefined && object.max_sentinel_reward_pool !== null) {
      message.maxSentinelRewardPool = object.max_sentinel_reward_pool;
    }
    if (object.sentinel_reward_pool_overflow_burn_ratio !== undefined && object.sentinel_reward_pool_overflow_burn_ratio !== null) {
      message.sentinelRewardPoolOverflowBurnRatio = object.sentinel_reward_pool_overflow_burn_ratio;
    }
    if (object.sentinel_reward_epoch_blocks !== undefined && object.sentinel_reward_epoch_blocks !== null) {
      message.sentinelRewardEpochBlocks = BigInt(object.sentinel_reward_epoch_blocks);
    }
    if (object.min_sentinel_accuracy !== undefined && object.min_sentinel_accuracy !== null) {
      message.minSentinelAccuracy = object.min_sentinel_accuracy;
    }
    if (object.min_appeals_for_accuracy !== undefined && object.min_appeals_for_accuracy !== null) {
      message.minAppealsForAccuracy = BigInt(object.min_appeals_for_accuracy);
    }
    if (object.min_epoch_activity_for_reward !== undefined && object.min_epoch_activity_for_reward !== null) {
      message.minEpochActivityForReward = BigInt(object.min_epoch_activity_for_reward);
    }
    if (object.min_appeal_rate !== undefined && object.min_appeal_rate !== null) {
      message.minAppealRate = object.min_appeal_rate;
    }
    if (object.sentinel_accuracy_window_epochs !== undefined && object.sentinel_accuracy_window_epochs !== null) {
      message.sentinelAccuracyWindowEpochs = BigInt(object.sentinel_accuracy_window_epochs);
    }
    if (object.max_active_initiatives_per_member !== undefined && object.max_active_initiatives_per_member !== null) {
      message.maxActiveInitiativesPerMember = object.max_active_initiatives_per_member;
    }
    if (object.max_active_interims_per_member !== undefined && object.max_active_interims_per_member !== null) {
      message.maxActiveInterimsPerMember = object.max_active_interims_per_member;
    }
    if (object.max_dream_mint_per_epoch !== undefined && object.max_dream_mint_per_epoch !== null) {
      message.maxDreamMintPerEpoch = object.max_dream_mint_per_epoch;
    }
    if (object.max_project_requested_budget !== undefined && object.max_project_requested_budget !== null) {
      message.maxProjectRequestedBudget = object.max_project_requested_budget;
    }
    if (object.max_project_requested_spark !== undefined && object.max_project_requested_spark !== null) {
      message.maxProjectRequestedSpark = object.max_project_requested_spark;
    }
    if (object.proposed_project_expiry_blocks !== undefined && object.proposed_project_expiry_blocks !== null) {
      message.proposedProjectExpiryBlocks = BigInt(object.proposed_project_expiry_blocks);
    }
    if (object.self_assigned_bond_rate !== undefined && object.self_assigned_bond_rate !== null) {
      message.selfAssignedBondRate = object.self_assigned_bond_rate;
    }
    if (object.self_assigned_external_conviction_ratio !== undefined && object.self_assigned_external_conviction_ratio !== null) {
      message.selfAssignedExternalConvictionRatio = object.self_assigned_external_conviction_ratio;
    }
    if (object.self_assigned_challenge_multiplier !== undefined && object.self_assigned_challenge_multiplier !== null) {
      message.selfAssignedChallengeMultiplier = BigInt(object.self_assigned_challenge_multiplier);
    }
    if (object.permissionless_self_assigned_bond_rate !== undefined && object.permissionless_self_assigned_bond_rate !== null) {
      message.permissionlessSelfAssignedBondRate = object.permissionless_self_assigned_bond_rate;
    }
    if (object.abandoned_jury_seat_penalty !== undefined && object.abandoned_jury_seat_penalty !== null) {
      message.abandonedJurySeatPenalty = object.abandoned_jury_seat_penalty;
    }
    if (object.juror_reward_rate !== undefined && object.juror_reward_rate !== null) {
      message.jurorRewardRate = object.juror_reward_rate;
    }
    if (object.jury_acceptance_window_ratio !== undefined && object.jury_acceptance_window_ratio !== null) {
      message.juryAcceptanceWindowRatio = object.jury_acceptance_window_ratio;
    }
    if (object.min_juror_reward !== undefined && object.min_juror_reward !== null) {
      message.minJurorReward = object.min_juror_reward;
    }
    if (object.min_juror_selection_weight !== undefined && object.min_juror_selection_weight !== null) {
      message.minJurorSelectionWeight = object.min_juror_selection_weight;
    }
    if (object.min_jury_seatings_for_weighting !== undefined && object.min_jury_seatings_for_weighting !== null) {
      message.minJurySeatingsForWeighting = BigInt(object.min_jury_seatings_for_weighting);
    }
    if (object.initiative_completion_bonus_rate !== undefined && object.initiative_completion_bonus_rate !== null) {
      message.initiativeCompletionBonusRate = object.initiative_completion_bonus_rate;
    }
    if (object.max_jury_redraws !== undefined && object.max_jury_redraws !== null) {
      message.maxJuryRedraws = object.max_jury_redraws;
    }
    if (object.reviewer_bond_reserve_rate !== undefined && object.reviewer_bond_reserve_rate !== null) {
      message.reviewerBondReserveRate = object.reviewer_bond_reserve_rate;
    }
    if (object.review_fee_rate !== undefined && object.review_fee_rate !== null) {
      message.reviewFeeRate = object.review_fee_rate;
    }
    if (object.max_review_rounds !== undefined && object.max_review_rounds !== null) {
      message.maxReviewRounds = object.max_review_rounds;
    }
    if (object.max_reviewer_reward_pool !== undefined && object.max_reviewer_reward_pool !== null) {
      message.maxReviewerRewardPool = object.max_reviewer_reward_pool;
    }
    if (object.reviewer_reward_pool_overflow_burn_ratio !== undefined && object.reviewer_reward_pool_overflow_burn_ratio !== null) {
      message.reviewerRewardPoolOverflowBurnRatio = object.reviewer_reward_pool_overflow_burn_ratio;
    }
    if (object.reviewer_reward_epoch_blocks !== undefined && object.reviewer_reward_epoch_blocks !== null) {
      message.reviewerRewardEpochBlocks = BigInt(object.reviewer_reward_epoch_blocks);
    }
    if (object.min_reviewer_accuracy !== undefined && object.min_reviewer_accuracy !== null) {
      message.minReviewerAccuracy = object.min_reviewer_accuracy;
    }
    if (object.reviewer_accuracy_window_epochs !== undefined && object.reviewer_accuracy_window_epochs !== null) {
      message.reviewerAccuracyWindowEpochs = BigInt(object.reviewer_accuracy_window_epochs);
    }
    if (object.min_reviewer_bond !== undefined && object.min_reviewer_bond !== null) {
      message.minReviewerBond = object.min_reviewer_bond;
    }
    if (object.reviewer_demotion_threshold !== undefined && object.reviewer_demotion_threshold !== null) {
      message.reviewerDemotionThreshold = object.reviewer_demotion_threshold;
    }
    if (object.min_reviewer_trust_level !== undefined && object.min_reviewer_trust_level !== null) {
      message.minReviewerTrustLevel = object.min_reviewer_trust_level;
    }
    if (object.min_reviewer_rep_tier !== undefined && object.min_reviewer_rep_tier !== null) {
      message.minReviewerRepTier = BigInt(object.min_reviewer_rep_tier);
    }
    if (object.min_reviewer_age_blocks !== undefined && object.min_reviewer_age_blocks !== null) {
      message.minReviewerAgeBlocks = BigInt(object.min_reviewer_age_blocks);
    }
    if (object.reviewer_demotion_cooldown !== undefined && object.reviewer_demotion_cooldown !== null) {
      message.reviewerDemotionCooldown = BigInt(object.reviewer_demotion_cooldown);
    }
    if (object.reviewer_unbond_cooldown !== undefined && object.reviewer_unbond_cooldown !== null) {
      message.reviewerUnbondCooldown = BigInt(object.reviewer_unbond_cooldown);
    }
    if (object.role_reward_inflation_share !== undefined && object.role_reward_inflation_share !== null) {
      message.roleRewardInflationShare = object.role_reward_inflation_share;
    }
    if (object.max_curator_reward_pool !== undefined && object.max_curator_reward_pool !== null) {
      message.maxCuratorRewardPool = object.max_curator_reward_pool;
    }
    if (object.curator_reward_pool_overflow_burn_ratio !== undefined && object.curator_reward_pool_overflow_burn_ratio !== null) {
      message.curatorRewardPoolOverflowBurnRatio = object.curator_reward_pool_overflow_burn_ratio;
    }
    if (object.curator_reward_epoch_blocks !== undefined && object.curator_reward_epoch_blocks !== null) {
      message.curatorRewardEpochBlocks = BigInt(object.curator_reward_epoch_blocks);
    }
    if (object.min_curator_accuracy !== undefined && object.min_curator_accuracy !== null) {
      message.minCuratorAccuracy = object.min_curator_accuracy;
    }
    if (object.curator_accuracy_window_epochs !== undefined && object.curator_accuracy_window_epochs !== null) {
      message.curatorAccuracyWindowEpochs = BigInt(object.curator_accuracy_window_epochs);
    }
    if (object.review_required_above_budget !== undefined && object.review_required_above_budget !== null) {
      message.reviewRequiredAboveBudget = object.review_required_above_budget;
    }
    if (object.review_bounty_reclaim_delay !== undefined && object.review_bounty_reclaim_delay !== null) {
      message.reviewBountyReclaimDelay = BigInt(object.review_bounty_reclaim_delay);
    }
    if (object.permissionless_min_review_bounty_rate !== undefined && object.permissionless_min_review_bounty_rate !== null) {
      message.permissionlessMinReviewBountyRate = object.permissionless_min_review_bounty_rate;
    }
    if (object.max_verifier_reward_pool !== undefined && object.max_verifier_reward_pool !== null) {
      message.maxVerifierRewardPool = object.max_verifier_reward_pool;
    }
    if (object.verifier_reward_pool_overflow_burn_ratio !== undefined && object.verifier_reward_pool_overflow_burn_ratio !== null) {
      message.verifierRewardPoolOverflowBurnRatio = object.verifier_reward_pool_overflow_burn_ratio;
    }
    if (object.verifier_reward_epoch_blocks !== undefined && object.verifier_reward_epoch_blocks !== null) {
      message.verifierRewardEpochBlocks = BigInt(object.verifier_reward_epoch_blocks);
    }
    if (object.min_verifier_accuracy !== undefined && object.min_verifier_accuracy !== null) {
      message.minVerifierAccuracy = object.min_verifier_accuracy;
    }
    if (object.verifier_accuracy_window_epochs !== undefined && object.verifier_accuracy_window_epochs !== null) {
      message.verifierAccuracyWindowEpochs = BigInt(object.verifier_accuracy_window_epochs);
    }
    if (object.min_epoch_verifications !== undefined && object.min_epoch_verifications !== null) {
      message.minEpochVerifications = object.min_epoch_verifications;
    }
    if (object.verifier_dream_reward !== undefined && object.verifier_dream_reward !== null) {
      message.verifierDreamReward = object.verifier_dream_reward;
    }
    if (object.max_verifier_dream_mint_per_epoch !== undefined && object.max_verifier_dream_mint_per_epoch !== null) {
      message.maxVerifierDreamMintPerEpoch = object.max_verifier_dream_mint_per_epoch;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.epoch_blocks = message.epochBlocks !== BigInt(0) ? message.epochBlocks?.toString() : undefined;
    obj.season_duration_epochs = message.seasonDurationEpochs !== BigInt(0) ? message.seasonDurationEpochs?.toString() : undefined;
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
    obj.max_staking_rewards_per_season = message.maxStakingRewardsPerSeason === "" ? undefined : message.maxStakingRewardsPerSeason;
    obj.staked_decay_rate = message.stakedDecayRate === "" ? undefined : message.stakedDecayRate;
    obj.new_member_decay_grace_epochs = message.newMemberDecayGraceEpochs !== BigInt(0) ? message.newMemberDecayGraceEpochs?.toString() : undefined;
    obj.max_treasury_balance = message.maxTreasuryBalance === "" ? undefined : message.maxTreasuryBalance;
    obj.treasury_funds_interims = message.treasuryFundsInterims === false ? undefined : message.treasuryFundsInterims;
    obj.treasury_funds_retro_pgf = message.treasuryFundsRetroPgf === false ? undefined : message.treasuryFundsRetroPgf;
    obj.max_initiative_stake_per_member = message.maxInitiativeStakePerMember === "" ? undefined : message.maxInitiativeStakePerMember;
    obj.max_initiative_rewards_per_season = message.maxInitiativeRewardsPerSeason === "" ? undefined : message.maxInitiativeRewardsPerSeason;
    obj.large_project_budget_threshold = message.largeProjectBudgetThreshold === "" ? undefined : message.largeProjectBudgetThreshold;
    obj.project_creation_fee = message.projectCreationFee === "" ? undefined : message.projectCreationFee;
    obj.initiative_creation_fee_apprentice = message.initiativeCreationFeeApprentice === "" ? undefined : message.initiativeCreationFeeApprentice;
    obj.initiative_creation_fee_standard = message.initiativeCreationFeeStandard === "" ? undefined : message.initiativeCreationFeeStandard;
    obj.permissionless_min_trust_level = message.permissionlessMinTrustLevel === 0 ? undefined : message.permissionlessMinTrustLevel;
    obj.permissionless_max_tier = message.permissionlessMaxTier === 0 ? undefined : message.permissionlessMaxTier;
    obj.tag_creation_fee = message.tagCreationFee === "" ? undefined : message.tagCreationFee;
    obj.max_sentinel_reward_pool = message.maxSentinelRewardPool === "" ? undefined : message.maxSentinelRewardPool;
    obj.sentinel_reward_pool_overflow_burn_ratio = message.sentinelRewardPoolOverflowBurnRatio === "" ? undefined : message.sentinelRewardPoolOverflowBurnRatio;
    obj.sentinel_reward_epoch_blocks = message.sentinelRewardEpochBlocks !== BigInt(0) ? message.sentinelRewardEpochBlocks?.toString() : undefined;
    obj.min_sentinel_accuracy = message.minSentinelAccuracy === "" ? undefined : message.minSentinelAccuracy;
    obj.min_appeals_for_accuracy = message.minAppealsForAccuracy !== BigInt(0) ? message.minAppealsForAccuracy?.toString() : undefined;
    obj.min_epoch_activity_for_reward = message.minEpochActivityForReward !== BigInt(0) ? message.minEpochActivityForReward?.toString() : undefined;
    obj.min_appeal_rate = message.minAppealRate === "" ? undefined : message.minAppealRate;
    obj.sentinel_accuracy_window_epochs = message.sentinelAccuracyWindowEpochs !== BigInt(0) ? message.sentinelAccuracyWindowEpochs?.toString() : undefined;
    obj.max_active_initiatives_per_member = message.maxActiveInitiativesPerMember === 0 ? undefined : message.maxActiveInitiativesPerMember;
    obj.max_active_interims_per_member = message.maxActiveInterimsPerMember === 0 ? undefined : message.maxActiveInterimsPerMember;
    obj.max_dream_mint_per_epoch = message.maxDreamMintPerEpoch === "" ? undefined : message.maxDreamMintPerEpoch;
    obj.max_project_requested_budget = message.maxProjectRequestedBudget === "" ? undefined : message.maxProjectRequestedBudget;
    obj.max_project_requested_spark = message.maxProjectRequestedSpark === "" ? undefined : message.maxProjectRequestedSpark;
    obj.proposed_project_expiry_blocks = message.proposedProjectExpiryBlocks !== BigInt(0) ? message.proposedProjectExpiryBlocks?.toString() : undefined;
    obj.self_assigned_bond_rate = message.selfAssignedBondRate === "" ? undefined : message.selfAssignedBondRate;
    obj.self_assigned_external_conviction_ratio = message.selfAssignedExternalConvictionRatio === "" ? undefined : message.selfAssignedExternalConvictionRatio;
    obj.self_assigned_challenge_multiplier = message.selfAssignedChallengeMultiplier !== BigInt(0) ? message.selfAssignedChallengeMultiplier?.toString() : undefined;
    obj.permissionless_self_assigned_bond_rate = message.permissionlessSelfAssignedBondRate === "" ? undefined : message.permissionlessSelfAssignedBondRate;
    obj.abandoned_jury_seat_penalty = message.abandonedJurySeatPenalty === "" ? undefined : message.abandonedJurySeatPenalty;
    obj.juror_reward_rate = message.jurorRewardRate === "" ? undefined : message.jurorRewardRate;
    obj.jury_acceptance_window_ratio = message.juryAcceptanceWindowRatio === "" ? undefined : message.juryAcceptanceWindowRatio;
    obj.min_juror_reward = message.minJurorReward === "" ? undefined : message.minJurorReward;
    obj.min_juror_selection_weight = message.minJurorSelectionWeight === "" ? undefined : message.minJurorSelectionWeight;
    obj.min_jury_seatings_for_weighting = message.minJurySeatingsForWeighting !== BigInt(0) ? message.minJurySeatingsForWeighting?.toString() : undefined;
    obj.initiative_completion_bonus_rate = message.initiativeCompletionBonusRate === "" ? undefined : message.initiativeCompletionBonusRate;
    obj.max_jury_redraws = message.maxJuryRedraws === 0 ? undefined : message.maxJuryRedraws;
    obj.reviewer_bond_reserve_rate = message.reviewerBondReserveRate === "" ? undefined : message.reviewerBondReserveRate;
    obj.review_fee_rate = message.reviewFeeRate === "" ? undefined : message.reviewFeeRate;
    obj.max_review_rounds = message.maxReviewRounds === 0 ? undefined : message.maxReviewRounds;
    obj.max_reviewer_reward_pool = message.maxReviewerRewardPool === "" ? undefined : message.maxReviewerRewardPool;
    obj.reviewer_reward_pool_overflow_burn_ratio = message.reviewerRewardPoolOverflowBurnRatio === "" ? undefined : message.reviewerRewardPoolOverflowBurnRatio;
    obj.reviewer_reward_epoch_blocks = message.reviewerRewardEpochBlocks !== BigInt(0) ? message.reviewerRewardEpochBlocks?.toString() : undefined;
    obj.min_reviewer_accuracy = message.minReviewerAccuracy === "" ? undefined : message.minReviewerAccuracy;
    obj.reviewer_accuracy_window_epochs = message.reviewerAccuracyWindowEpochs !== BigInt(0) ? message.reviewerAccuracyWindowEpochs?.toString() : undefined;
    obj.min_reviewer_bond = message.minReviewerBond === "" ? undefined : message.minReviewerBond;
    obj.reviewer_demotion_threshold = message.reviewerDemotionThreshold === "" ? undefined : message.reviewerDemotionThreshold;
    obj.min_reviewer_trust_level = message.minReviewerTrustLevel === "" ? undefined : message.minReviewerTrustLevel;
    obj.min_reviewer_rep_tier = message.minReviewerRepTier !== BigInt(0) ? message.minReviewerRepTier?.toString() : undefined;
    obj.min_reviewer_age_blocks = message.minReviewerAgeBlocks !== BigInt(0) ? message.minReviewerAgeBlocks?.toString() : undefined;
    obj.reviewer_demotion_cooldown = message.reviewerDemotionCooldown !== BigInt(0) ? message.reviewerDemotionCooldown?.toString() : undefined;
    obj.reviewer_unbond_cooldown = message.reviewerUnbondCooldown !== BigInt(0) ? message.reviewerUnbondCooldown?.toString() : undefined;
    obj.role_reward_inflation_share = message.roleRewardInflationShare === "" ? undefined : message.roleRewardInflationShare;
    obj.max_curator_reward_pool = message.maxCuratorRewardPool === "" ? undefined : message.maxCuratorRewardPool;
    obj.curator_reward_pool_overflow_burn_ratio = message.curatorRewardPoolOverflowBurnRatio === "" ? undefined : message.curatorRewardPoolOverflowBurnRatio;
    obj.curator_reward_epoch_blocks = message.curatorRewardEpochBlocks !== BigInt(0) ? message.curatorRewardEpochBlocks?.toString() : undefined;
    obj.min_curator_accuracy = message.minCuratorAccuracy === "" ? undefined : message.minCuratorAccuracy;
    obj.curator_accuracy_window_epochs = message.curatorAccuracyWindowEpochs !== BigInt(0) ? message.curatorAccuracyWindowEpochs?.toString() : undefined;
    obj.review_required_above_budget = message.reviewRequiredAboveBudget === "" ? undefined : message.reviewRequiredAboveBudget;
    obj.review_bounty_reclaim_delay = message.reviewBountyReclaimDelay !== BigInt(0) ? message.reviewBountyReclaimDelay?.toString() : undefined;
    obj.permissionless_min_review_bounty_rate = message.permissionlessMinReviewBountyRate === "" ? undefined : message.permissionlessMinReviewBountyRate;
    obj.max_verifier_reward_pool = message.maxVerifierRewardPool === "" ? undefined : message.maxVerifierRewardPool;
    obj.verifier_reward_pool_overflow_burn_ratio = message.verifierRewardPoolOverflowBurnRatio === "" ? undefined : message.verifierRewardPoolOverflowBurnRatio;
    obj.verifier_reward_epoch_blocks = message.verifierRewardEpochBlocks !== BigInt(0) ? message.verifierRewardEpochBlocks?.toString() : undefined;
    obj.min_verifier_accuracy = message.minVerifierAccuracy === "" ? undefined : message.minVerifierAccuracy;
    obj.verifier_accuracy_window_epochs = message.verifierAccuracyWindowEpochs !== BigInt(0) ? message.verifierAccuracyWindowEpochs?.toString() : undefined;
    obj.min_epoch_verifications = message.minEpochVerifications === 0 ? undefined : message.minEpochVerifications;
    obj.verifier_dream_reward = message.verifierDreamReward === "" ? undefined : message.verifierDreamReward;
    obj.max_verifier_dream_mint_per_epoch = message.maxVerifierDreamMintPerEpoch === "" ? undefined : message.maxVerifierDreamMintPerEpoch;
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
    maxReputationGainPerEpoch: "",
    maxStakingRewardsPerSeason: "",
    stakedDecayRate: "",
    newMemberDecayGraceEpochs: BigInt(0),
    maxTreasuryBalance: "",
    treasuryFundsInterims: false,
    treasuryFundsRetroPgf: false,
    maxInitiativeStakePerMember: "",
    maxInitiativeRewardsPerSeason: "",
    largeProjectBudgetThreshold: "",
    projectCreationFee: "",
    initiativeCreationFeeApprentice: "",
    initiativeCreationFeeStandard: "",
    tagCreationFee: "",
    maxSentinelRewardPool: "",
    sentinelRewardPoolOverflowBurnRatio: "",
    sentinelRewardEpochBlocks: BigInt(0),
    minSentinelAccuracy: "",
    minAppealsForAccuracy: BigInt(0),
    minEpochActivityForReward: BigInt(0),
    minAppealRate: "",
    sentinelAccuracyWindowEpochs: BigInt(0),
    maxActiveInitiativesPerMember: 0,
    maxActiveInterimsPerMember: 0,
    maxDreamMintPerEpoch: "",
    maxProjectRequestedBudget: "",
    maxProjectRequestedSpark: "",
    proposedProjectExpiryBlocks: BigInt(0),
    abandonedJurySeatPenalty: "",
    jurorRewardRate: "",
    minJurorReward: "",
    minJurorSelectionWeight: "",
    minJurySeatingsForWeighting: BigInt(0),
    initiativeCompletionBonusRate: "",
    juryAcceptanceWindowRatio: "",
    maxJuryRedraws: 0,
    reviewerBondReserveRate: "",
    reviewFeeRate: "",
    maxReviewRounds: 0,
    maxReviewerRewardPool: "",
    reviewerRewardPoolOverflowBurnRatio: "",
    reviewerRewardEpochBlocks: BigInt(0),
    minReviewerAccuracy: "",
    reviewerAccuracyWindowEpochs: BigInt(0),
    roleRewardInflationShare: "",
    maxCuratorRewardPool: "",
    curatorRewardPoolOverflowBurnRatio: "",
    curatorRewardEpochBlocks: BigInt(0),
    minCuratorAccuracy: "",
    curatorAccuracyWindowEpochs: BigInt(0),
    reviewRequiredAboveBudget: "",
    reviewBountyReclaimDelay: BigInt(0),
    permissionlessMinReviewBountyRate: "",
    maxVerifierRewardPool: "",
    verifierRewardPoolOverflowBurnRatio: "",
    verifierRewardEpochBlocks: BigInt(0),
    minVerifierAccuracy: "",
    verifierAccuracyWindowEpochs: BigInt(0),
    minEpochVerifications: 0,
    verifierDreamReward: "",
    maxVerifierDreamMintPerEpoch: "",
    minReviewerBond: "",
    reviewerDemotionThreshold: "",
    minReviewerTrustLevel: "",
    minReviewerRepTier: BigInt(0),
    minReviewerAgeBlocks: BigInt(0),
    reviewerDemotionCooldown: BigInt(0),
    reviewerUnbondCooldown: BigInt(0)
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
    if (message.unstakedDecayRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.unstakedDecayRate, 18).atomics);
    }
    if (message.transferTaxRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.transferTaxRate, 18).atomics);
    }
    if (message.maxTipAmount !== "") {
      writer.uint32(42).string(message.maxTipAmount);
    }
    if (message.maxTipsPerEpoch !== 0) {
      writer.uint32(48).uint32(message.maxTipsPerEpoch);
    }
    if (message.maxGiftAmount !== "") {
      writer.uint32(58).string(message.maxGiftAmount);
    }
    if (message.giftOnlyToInvitees === true) {
      writer.uint32(64).bool(message.giftOnlyToInvitees);
    }
    if (message.minReputationMultiplier !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.minReputationMultiplier, 18).atomics);
    }
    if (message.defaultReviewPeriodEpochs !== BigInt(0)) {
      writer.uint32(80).int64(message.defaultReviewPeriodEpochs);
    }
    if (message.defaultChallengePeriodEpochs !== BigInt(0)) {
      writer.uint32(88).int64(message.defaultChallengePeriodEpochs);
    }
    if (message.minInvitationStake !== "") {
      writer.uint32(98).string(message.minInvitationStake);
    }
    if (message.invitationAccountabilityEpochs !== BigInt(0)) {
      writer.uint32(104).int64(message.invitationAccountabilityEpochs);
    }
    if (message.referralRewardRate !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.referralRewardRate, 18).atomics);
    }
    if (message.invitationCostMultiplier !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.invitationCostMultiplier, 18).atomics);
    }
    if (message.minChallengeStake !== "") {
      writer.uint32(130).string(message.minChallengeStake);
    }
    if (message.challengerRewardRate !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.challengerRewardRate, 18).atomics);
    }
    if (message.jurySize !== 0) {
      writer.uint32(144).uint32(message.jurySize);
    }
    if (message.jurySuperMajority !== "") {
      writer.uint32(154).string(Decimal.fromUserInput(message.jurySuperMajority, 18).atomics);
    }
    if (message.minJurorReputation !== "") {
      writer.uint32(162).string(Decimal.fromUserInput(message.minJurorReputation, 18).atomics);
    }
    if (message.simpleComplexityBudget !== "") {
      writer.uint32(170).string(message.simpleComplexityBudget);
    }
    if (message.standardComplexityBudget !== "") {
      writer.uint32(178).string(message.standardComplexityBudget);
    }
    if (message.complexComplexityBudget !== "") {
      writer.uint32(186).string(message.complexComplexityBudget);
    }
    if (message.expertComplexityBudget !== "") {
      writer.uint32(194).string(message.expertComplexityBudget);
    }
    if (message.soloExpertBonusRate !== "") {
      writer.uint32(202).string(Decimal.fromUserInput(message.soloExpertBonusRate, 18).atomics);
    }
    if (message.interimDeadlineEpochs !== BigInt(0)) {
      writer.uint32(208).int64(message.interimDeadlineEpochs);
    }
    if (message.maxActiveChallengesPerCommittee !== 0) {
      writer.uint32(216).uint32(message.maxActiveChallengesPerCommittee);
    }
    if (message.maxNewChallengesPerEpoch !== 0) {
      writer.uint32(224).uint32(message.maxNewChallengesPerEpoch);
    }
    if (message.challengeQueueMaxSize !== 0) {
      writer.uint32(232).uint32(message.challengeQueueMaxSize);
    }
    if (message.projectCompletionBonusRate !== "") {
      writer.uint32(242).string(Decimal.fromUserInput(message.projectCompletionBonusRate, 18).atomics);
    }
    if (message.memberStakeRevenueShare !== "") {
      writer.uint32(250).string(Decimal.fromUserInput(message.memberStakeRevenueShare, 18).atomics);
    }
    if (message.tagStakeRevenueShare !== "") {
      writer.uint32(258).string(Decimal.fromUserInput(message.tagStakeRevenueShare, 18).atomics);
    }
    if (message.minStakeDurationSeconds !== BigInt(0)) {
      writer.uint32(264).int64(message.minStakeDurationSeconds);
    }
    if (message.allowSelfMemberStake === true) {
      writer.uint32(272).bool(message.allowSelfMemberStake);
    }
    if (message.challengeResponseDeadlineEpochs !== BigInt(0)) {
      writer.uint32(280).int64(message.challengeResponseDeadlineEpochs);
    }
    if (message.giftCooldownBlocks !== BigInt(0)) {
      writer.uint32(288).int64(message.giftCooldownBlocks);
    }
    if (message.maxGiftsPerSenderEpoch !== "") {
      writer.uint32(298).string(message.maxGiftsPerSenderEpoch);
    }
    if (message.contentConvictionHalfLifeEpochs !== BigInt(0)) {
      writer.uint32(304).int64(message.contentConvictionHalfLifeEpochs);
    }
    if (message.maxContentStakePerMember !== "") {
      writer.uint32(314).string(message.maxContentStakePerMember);
    }
    if (message.maxAuthorBondPerContent !== "") {
      writer.uint32(322).string(message.maxAuthorBondPerContent);
    }
    if (message.authorBondSlashOnModeration === true) {
      writer.uint32(328).bool(message.authorBondSlashOnModeration);
    }
    if (message.contentChallengeRewardShare !== "") {
      writer.uint32(338).string(Decimal.fromUserInput(message.contentChallengeRewardShare, 18).atomics);
    }
    if (message.convictionPropagationRatio !== "") {
      writer.uint32(346).string(Decimal.fromUserInput(message.convictionPropagationRatio, 18).atomics);
    }
    if (message.maxTagsPerInitiative !== 0) {
      writer.uint32(352).uint32(message.maxTagsPerInitiative);
    }
    if (message.reputationDecayRate !== "") {
      writer.uint32(362).string(Decimal.fromUserInput(message.reputationDecayRate, 18).atomics);
    }
    if (message.maxConvictionSharePerMember !== "") {
      writer.uint32(370).string(Decimal.fromUserInput(message.maxConvictionSharePerMember, 18).atomics);
    }
    if (message.invitationStakeBurnRate !== "") {
      writer.uint32(378).string(Decimal.fromUserInput(message.invitationStakeBurnRate, 18).atomics);
    }
    if (message.maxReputationGainPerEpoch !== "") {
      writer.uint32(386).string(Decimal.fromUserInput(message.maxReputationGainPerEpoch, 18).atomics);
    }
    if (message.maxStakingRewardsPerSeason !== "") {
      writer.uint32(394).string(message.maxStakingRewardsPerSeason);
    }
    if (message.stakedDecayRate !== "") {
      writer.uint32(402).string(Decimal.fromUserInput(message.stakedDecayRate, 18).atomics);
    }
    if (message.newMemberDecayGraceEpochs !== BigInt(0)) {
      writer.uint32(408).int64(message.newMemberDecayGraceEpochs);
    }
    if (message.maxTreasuryBalance !== "") {
      writer.uint32(418).string(message.maxTreasuryBalance);
    }
    if (message.treasuryFundsInterims === true) {
      writer.uint32(424).bool(message.treasuryFundsInterims);
    }
    if (message.treasuryFundsRetroPgf === true) {
      writer.uint32(432).bool(message.treasuryFundsRetroPgf);
    }
    if (message.maxInitiativeStakePerMember !== "") {
      writer.uint32(442).string(message.maxInitiativeStakePerMember);
    }
    if (message.maxInitiativeRewardsPerSeason !== "") {
      writer.uint32(450).string(message.maxInitiativeRewardsPerSeason);
    }
    if (message.largeProjectBudgetThreshold !== "") {
      writer.uint32(458).string(message.largeProjectBudgetThreshold);
    }
    if (message.projectCreationFee !== "") {
      writer.uint32(466).string(message.projectCreationFee);
    }
    if (message.initiativeCreationFeeApprentice !== "") {
      writer.uint32(474).string(message.initiativeCreationFeeApprentice);
    }
    if (message.initiativeCreationFeeStandard !== "") {
      writer.uint32(482).string(message.initiativeCreationFeeStandard);
    }
    if (message.tagCreationFee !== "") {
      writer.uint32(490).string(message.tagCreationFee);
    }
    if (message.maxSentinelRewardPool !== "") {
      writer.uint32(498).string(message.maxSentinelRewardPool);
    }
    if (message.sentinelRewardPoolOverflowBurnRatio !== "") {
      writer.uint32(506).string(Decimal.fromUserInput(message.sentinelRewardPoolOverflowBurnRatio, 18).atomics);
    }
    if (message.sentinelRewardEpochBlocks !== BigInt(0)) {
      writer.uint32(512).uint64(message.sentinelRewardEpochBlocks);
    }
    if (message.minSentinelAccuracy !== "") {
      writer.uint32(522).string(Decimal.fromUserInput(message.minSentinelAccuracy, 18).atomics);
    }
    if (message.minAppealsForAccuracy !== BigInt(0)) {
      writer.uint32(528).uint64(message.minAppealsForAccuracy);
    }
    if (message.minEpochActivityForReward !== BigInt(0)) {
      writer.uint32(536).uint64(message.minEpochActivityForReward);
    }
    if (message.minAppealRate !== "") {
      writer.uint32(546).string(Decimal.fromUserInput(message.minAppealRate, 18).atomics);
    }
    if (message.sentinelAccuracyWindowEpochs !== BigInt(0)) {
      writer.uint32(600).uint64(message.sentinelAccuracyWindowEpochs);
    }
    if (message.maxActiveInitiativesPerMember !== 0) {
      writer.uint32(552).uint32(message.maxActiveInitiativesPerMember);
    }
    if (message.maxActiveInterimsPerMember !== 0) {
      writer.uint32(560).uint32(message.maxActiveInterimsPerMember);
    }
    if (message.maxDreamMintPerEpoch !== "") {
      writer.uint32(570).string(message.maxDreamMintPerEpoch);
    }
    if (message.maxProjectRequestedBudget !== "") {
      writer.uint32(578).string(message.maxProjectRequestedBudget);
    }
    if (message.maxProjectRequestedSpark !== "") {
      writer.uint32(586).string(message.maxProjectRequestedSpark);
    }
    if (message.proposedProjectExpiryBlocks !== BigInt(0)) {
      writer.uint32(592).int64(message.proposedProjectExpiryBlocks);
    }
    if (message.abandonedJurySeatPenalty !== "") {
      writer.uint32(610).string(Decimal.fromUserInput(message.abandonedJurySeatPenalty, 18).atomics);
    }
    if (message.jurorRewardRate !== "") {
      writer.uint32(618).string(Decimal.fromUserInput(message.jurorRewardRate, 18).atomics);
    }
    if (message.minJurorReward !== "") {
      writer.uint32(626).string(message.minJurorReward);
    }
    if (message.minJurorSelectionWeight !== "") {
      writer.uint32(634).string(Decimal.fromUserInput(message.minJurorSelectionWeight, 18).atomics);
    }
    if (message.minJurySeatingsForWeighting !== BigInt(0)) {
      writer.uint32(640).uint64(message.minJurySeatingsForWeighting);
    }
    if (message.initiativeCompletionBonusRate !== "") {
      writer.uint32(650).string(Decimal.fromUserInput(message.initiativeCompletionBonusRate, 18).atomics);
    }
    if (message.juryAcceptanceWindowRatio !== "") {
      writer.uint32(658).string(Decimal.fromUserInput(message.juryAcceptanceWindowRatio, 18).atomics);
    }
    if (message.maxJuryRedraws !== 0) {
      writer.uint32(664).uint32(message.maxJuryRedraws);
    }
    if (message.reviewerBondReserveRate !== "") {
      writer.uint32(674).string(Decimal.fromUserInput(message.reviewerBondReserveRate, 18).atomics);
    }
    if (message.reviewFeeRate !== "") {
      writer.uint32(682).string(Decimal.fromUserInput(message.reviewFeeRate, 18).atomics);
    }
    if (message.maxReviewRounds !== 0) {
      writer.uint32(688).uint32(message.maxReviewRounds);
    }
    if (message.maxReviewerRewardPool !== "") {
      writer.uint32(698).string(message.maxReviewerRewardPool);
    }
    if (message.reviewerRewardPoolOverflowBurnRatio !== "") {
      writer.uint32(706).string(Decimal.fromUserInput(message.reviewerRewardPoolOverflowBurnRatio, 18).atomics);
    }
    if (message.reviewerRewardEpochBlocks !== BigInt(0)) {
      writer.uint32(712).uint64(message.reviewerRewardEpochBlocks);
    }
    if (message.minReviewerAccuracy !== "") {
      writer.uint32(722).string(Decimal.fromUserInput(message.minReviewerAccuracy, 18).atomics);
    }
    if (message.reviewerAccuracyWindowEpochs !== BigInt(0)) {
      writer.uint32(728).uint64(message.reviewerAccuracyWindowEpochs);
    }
    if (message.roleRewardInflationShare !== "") {
      writer.uint32(738).string(Decimal.fromUserInput(message.roleRewardInflationShare, 18).atomics);
    }
    if (message.maxCuratorRewardPool !== "") {
      writer.uint32(746).string(message.maxCuratorRewardPool);
    }
    if (message.curatorRewardPoolOverflowBurnRatio !== "") {
      writer.uint32(754).string(Decimal.fromUserInput(message.curatorRewardPoolOverflowBurnRatio, 18).atomics);
    }
    if (message.curatorRewardEpochBlocks !== BigInt(0)) {
      writer.uint32(760).uint64(message.curatorRewardEpochBlocks);
    }
    if (message.minCuratorAccuracy !== "") {
      writer.uint32(770).string(Decimal.fromUserInput(message.minCuratorAccuracy, 18).atomics);
    }
    if (message.curatorAccuracyWindowEpochs !== BigInt(0)) {
      writer.uint32(776).uint64(message.curatorAccuracyWindowEpochs);
    }
    if (message.reviewRequiredAboveBudget !== "") {
      writer.uint32(786).string(message.reviewRequiredAboveBudget);
    }
    if (message.reviewBountyReclaimDelay !== BigInt(0)) {
      writer.uint32(792).uint64(message.reviewBountyReclaimDelay);
    }
    if (message.permissionlessMinReviewBountyRate !== "") {
      writer.uint32(802).string(Decimal.fromUserInput(message.permissionlessMinReviewBountyRate, 18).atomics);
    }
    if (message.maxVerifierRewardPool !== "") {
      writer.uint32(810).string(message.maxVerifierRewardPool);
    }
    if (message.verifierRewardPoolOverflowBurnRatio !== "") {
      writer.uint32(818).string(Decimal.fromUserInput(message.verifierRewardPoolOverflowBurnRatio, 18).atomics);
    }
    if (message.verifierRewardEpochBlocks !== BigInt(0)) {
      writer.uint32(824).uint64(message.verifierRewardEpochBlocks);
    }
    if (message.minVerifierAccuracy !== "") {
      writer.uint32(834).string(Decimal.fromUserInput(message.minVerifierAccuracy, 18).atomics);
    }
    if (message.verifierAccuracyWindowEpochs !== BigInt(0)) {
      writer.uint32(840).uint64(message.verifierAccuracyWindowEpochs);
    }
    if (message.minEpochVerifications !== 0) {
      writer.uint32(848).uint32(message.minEpochVerifications);
    }
    if (message.verifierDreamReward !== "") {
      writer.uint32(858).string(message.verifierDreamReward);
    }
    if (message.maxVerifierDreamMintPerEpoch !== "") {
      writer.uint32(866).string(message.maxVerifierDreamMintPerEpoch);
    }
    if (message.minReviewerBond !== "") {
      writer.uint32(874).string(message.minReviewerBond);
    }
    if (message.reviewerDemotionThreshold !== "") {
      writer.uint32(882).string(message.reviewerDemotionThreshold);
    }
    if (message.minReviewerTrustLevel !== "") {
      writer.uint32(890).string(message.minReviewerTrustLevel);
    }
    if (message.minReviewerRepTier !== BigInt(0)) {
      writer.uint32(896).uint64(message.minReviewerRepTier);
    }
    if (message.minReviewerAgeBlocks !== BigInt(0)) {
      writer.uint32(904).int64(message.minReviewerAgeBlocks);
    }
    if (message.reviewerDemotionCooldown !== BigInt(0)) {
      writer.uint32(912).int64(message.reviewerDemotionCooldown);
    }
    if (message.reviewerUnbondCooldown !== BigInt(0)) {
      writer.uint32(920).int64(message.reviewerUnbondCooldown);
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
          message.unstakedDecayRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.transferTaxRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.maxTipAmount = reader.string();
          break;
        case 6:
          message.maxTipsPerEpoch = reader.uint32();
          break;
        case 7:
          message.maxGiftAmount = reader.string();
          break;
        case 8:
          message.giftOnlyToInvitees = reader.bool();
          break;
        case 9:
          message.minReputationMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.defaultReviewPeriodEpochs = reader.int64();
          break;
        case 11:
          message.defaultChallengePeriodEpochs = reader.int64();
          break;
        case 12:
          message.minInvitationStake = reader.string();
          break;
        case 13:
          message.invitationAccountabilityEpochs = reader.int64();
          break;
        case 14:
          message.referralRewardRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.invitationCostMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.minChallengeStake = reader.string();
          break;
        case 17:
          message.challengerRewardRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 18:
          message.jurySize = reader.uint32();
          break;
        case 19:
          message.jurySuperMajority = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 20:
          message.minJurorReputation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 21:
          message.simpleComplexityBudget = reader.string();
          break;
        case 22:
          message.standardComplexityBudget = reader.string();
          break;
        case 23:
          message.complexComplexityBudget = reader.string();
          break;
        case 24:
          message.expertComplexityBudget = reader.string();
          break;
        case 25:
          message.soloExpertBonusRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 26:
          message.interimDeadlineEpochs = reader.int64();
          break;
        case 27:
          message.maxActiveChallengesPerCommittee = reader.uint32();
          break;
        case 28:
          message.maxNewChallengesPerEpoch = reader.uint32();
          break;
        case 29:
          message.challengeQueueMaxSize = reader.uint32();
          break;
        case 30:
          message.projectCompletionBonusRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 31:
          message.memberStakeRevenueShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 32:
          message.tagStakeRevenueShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 33:
          message.minStakeDurationSeconds = reader.int64();
          break;
        case 34:
          message.allowSelfMemberStake = reader.bool();
          break;
        case 35:
          message.challengeResponseDeadlineEpochs = reader.int64();
          break;
        case 36:
          message.giftCooldownBlocks = reader.int64();
          break;
        case 37:
          message.maxGiftsPerSenderEpoch = reader.string();
          break;
        case 38:
          message.contentConvictionHalfLifeEpochs = reader.int64();
          break;
        case 39:
          message.maxContentStakePerMember = reader.string();
          break;
        case 40:
          message.maxAuthorBondPerContent = reader.string();
          break;
        case 41:
          message.authorBondSlashOnModeration = reader.bool();
          break;
        case 42:
          message.contentChallengeRewardShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 43:
          message.convictionPropagationRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 44:
          message.maxTagsPerInitiative = reader.uint32();
          break;
        case 45:
          message.reputationDecayRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 46:
          message.maxConvictionSharePerMember = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 47:
          message.invitationStakeBurnRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 48:
          message.maxReputationGainPerEpoch = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 49:
          message.maxStakingRewardsPerSeason = reader.string();
          break;
        case 50:
          message.stakedDecayRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 51:
          message.newMemberDecayGraceEpochs = reader.int64();
          break;
        case 52:
          message.maxTreasuryBalance = reader.string();
          break;
        case 53:
          message.treasuryFundsInterims = reader.bool();
          break;
        case 54:
          message.treasuryFundsRetroPgf = reader.bool();
          break;
        case 55:
          message.maxInitiativeStakePerMember = reader.string();
          break;
        case 56:
          message.maxInitiativeRewardsPerSeason = reader.string();
          break;
        case 57:
          message.largeProjectBudgetThreshold = reader.string();
          break;
        case 58:
          message.projectCreationFee = reader.string();
          break;
        case 59:
          message.initiativeCreationFeeApprentice = reader.string();
          break;
        case 60:
          message.initiativeCreationFeeStandard = reader.string();
          break;
        case 61:
          message.tagCreationFee = reader.string();
          break;
        case 62:
          message.maxSentinelRewardPool = reader.string();
          break;
        case 63:
          message.sentinelRewardPoolOverflowBurnRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 64:
          message.sentinelRewardEpochBlocks = reader.uint64();
          break;
        case 65:
          message.minSentinelAccuracy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 66:
          message.minAppealsForAccuracy = reader.uint64();
          break;
        case 67:
          message.minEpochActivityForReward = reader.uint64();
          break;
        case 68:
          message.minAppealRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 75:
          message.sentinelAccuracyWindowEpochs = reader.uint64();
          break;
        case 69:
          message.maxActiveInitiativesPerMember = reader.uint32();
          break;
        case 70:
          message.maxActiveInterimsPerMember = reader.uint32();
          break;
        case 71:
          message.maxDreamMintPerEpoch = reader.string();
          break;
        case 72:
          message.maxProjectRequestedBudget = reader.string();
          break;
        case 73:
          message.maxProjectRequestedSpark = reader.string();
          break;
        case 74:
          message.proposedProjectExpiryBlocks = reader.int64();
          break;
        case 76:
          message.abandonedJurySeatPenalty = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 77:
          message.jurorRewardRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 78:
          message.minJurorReward = reader.string();
          break;
        case 79:
          message.minJurorSelectionWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 80:
          message.minJurySeatingsForWeighting = reader.uint64();
          break;
        case 81:
          message.initiativeCompletionBonusRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 82:
          message.juryAcceptanceWindowRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 83:
          message.maxJuryRedraws = reader.uint32();
          break;
        case 84:
          message.reviewerBondReserveRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 85:
          message.reviewFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 86:
          message.maxReviewRounds = reader.uint32();
          break;
        case 87:
          message.maxReviewerRewardPool = reader.string();
          break;
        case 88:
          message.reviewerRewardPoolOverflowBurnRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 89:
          message.reviewerRewardEpochBlocks = reader.uint64();
          break;
        case 90:
          message.minReviewerAccuracy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 91:
          message.reviewerAccuracyWindowEpochs = reader.uint64();
          break;
        case 92:
          message.roleRewardInflationShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 93:
          message.maxCuratorRewardPool = reader.string();
          break;
        case 94:
          message.curatorRewardPoolOverflowBurnRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 95:
          message.curatorRewardEpochBlocks = reader.uint64();
          break;
        case 96:
          message.minCuratorAccuracy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 97:
          message.curatorAccuracyWindowEpochs = reader.uint64();
          break;
        case 98:
          message.reviewRequiredAboveBudget = reader.string();
          break;
        case 99:
          message.reviewBountyReclaimDelay = reader.uint64();
          break;
        case 100:
          message.permissionlessMinReviewBountyRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 101:
          message.maxVerifierRewardPool = reader.string();
          break;
        case 102:
          message.verifierRewardPoolOverflowBurnRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 103:
          message.verifierRewardEpochBlocks = reader.uint64();
          break;
        case 104:
          message.minVerifierAccuracy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 105:
          message.verifierAccuracyWindowEpochs = reader.uint64();
          break;
        case 106:
          message.minEpochVerifications = reader.uint32();
          break;
        case 107:
          message.verifierDreamReward = reader.string();
          break;
        case 108:
          message.maxVerifierDreamMintPerEpoch = reader.string();
          break;
        case 109:
          message.minReviewerBond = reader.string();
          break;
        case 110:
          message.reviewerDemotionThreshold = reader.string();
          break;
        case 111:
          message.minReviewerTrustLevel = reader.string();
          break;
        case 112:
          message.minReviewerRepTier = reader.uint64();
          break;
        case 113:
          message.minReviewerAgeBlocks = reader.int64();
          break;
        case 114:
          message.reviewerDemotionCooldown = reader.int64();
          break;
        case 115:
          message.reviewerUnbondCooldown = reader.int64();
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
    message.maxStakingRewardsPerSeason = object.maxStakingRewardsPerSeason ?? "";
    message.stakedDecayRate = object.stakedDecayRate ?? "";
    message.newMemberDecayGraceEpochs = object.newMemberDecayGraceEpochs !== undefined && object.newMemberDecayGraceEpochs !== null ? BigInt(object.newMemberDecayGraceEpochs.toString()) : BigInt(0);
    message.maxTreasuryBalance = object.maxTreasuryBalance ?? "";
    message.treasuryFundsInterims = object.treasuryFundsInterims ?? false;
    message.treasuryFundsRetroPgf = object.treasuryFundsRetroPgf ?? false;
    message.maxInitiativeStakePerMember = object.maxInitiativeStakePerMember ?? "";
    message.maxInitiativeRewardsPerSeason = object.maxInitiativeRewardsPerSeason ?? "";
    message.largeProjectBudgetThreshold = object.largeProjectBudgetThreshold ?? "";
    message.projectCreationFee = object.projectCreationFee ?? "";
    message.initiativeCreationFeeApprentice = object.initiativeCreationFeeApprentice ?? "";
    message.initiativeCreationFeeStandard = object.initiativeCreationFeeStandard ?? "";
    message.tagCreationFee = object.tagCreationFee ?? "";
    message.maxSentinelRewardPool = object.maxSentinelRewardPool ?? "";
    message.sentinelRewardPoolOverflowBurnRatio = object.sentinelRewardPoolOverflowBurnRatio ?? "";
    message.sentinelRewardEpochBlocks = object.sentinelRewardEpochBlocks !== undefined && object.sentinelRewardEpochBlocks !== null ? BigInt(object.sentinelRewardEpochBlocks.toString()) : BigInt(0);
    message.minSentinelAccuracy = object.minSentinelAccuracy ?? "";
    message.minAppealsForAccuracy = object.minAppealsForAccuracy !== undefined && object.minAppealsForAccuracy !== null ? BigInt(object.minAppealsForAccuracy.toString()) : BigInt(0);
    message.minEpochActivityForReward = object.minEpochActivityForReward !== undefined && object.minEpochActivityForReward !== null ? BigInt(object.minEpochActivityForReward.toString()) : BigInt(0);
    message.minAppealRate = object.minAppealRate ?? "";
    message.sentinelAccuracyWindowEpochs = object.sentinelAccuracyWindowEpochs !== undefined && object.sentinelAccuracyWindowEpochs !== null ? BigInt(object.sentinelAccuracyWindowEpochs.toString()) : BigInt(0);
    message.maxActiveInitiativesPerMember = object.maxActiveInitiativesPerMember ?? 0;
    message.maxActiveInterimsPerMember = object.maxActiveInterimsPerMember ?? 0;
    message.maxDreamMintPerEpoch = object.maxDreamMintPerEpoch ?? "";
    message.maxProjectRequestedBudget = object.maxProjectRequestedBudget ?? "";
    message.maxProjectRequestedSpark = object.maxProjectRequestedSpark ?? "";
    message.proposedProjectExpiryBlocks = object.proposedProjectExpiryBlocks !== undefined && object.proposedProjectExpiryBlocks !== null ? BigInt(object.proposedProjectExpiryBlocks.toString()) : BigInt(0);
    message.abandonedJurySeatPenalty = object.abandonedJurySeatPenalty ?? "";
    message.jurorRewardRate = object.jurorRewardRate ?? "";
    message.minJurorReward = object.minJurorReward ?? "";
    message.minJurorSelectionWeight = object.minJurorSelectionWeight ?? "";
    message.minJurySeatingsForWeighting = object.minJurySeatingsForWeighting !== undefined && object.minJurySeatingsForWeighting !== null ? BigInt(object.minJurySeatingsForWeighting.toString()) : BigInt(0);
    message.initiativeCompletionBonusRate = object.initiativeCompletionBonusRate ?? "";
    message.juryAcceptanceWindowRatio = object.juryAcceptanceWindowRatio ?? "";
    message.maxJuryRedraws = object.maxJuryRedraws ?? 0;
    message.reviewerBondReserveRate = object.reviewerBondReserveRate ?? "";
    message.reviewFeeRate = object.reviewFeeRate ?? "";
    message.maxReviewRounds = object.maxReviewRounds ?? 0;
    message.maxReviewerRewardPool = object.maxReviewerRewardPool ?? "";
    message.reviewerRewardPoolOverflowBurnRatio = object.reviewerRewardPoolOverflowBurnRatio ?? "";
    message.reviewerRewardEpochBlocks = object.reviewerRewardEpochBlocks !== undefined && object.reviewerRewardEpochBlocks !== null ? BigInt(object.reviewerRewardEpochBlocks.toString()) : BigInt(0);
    message.minReviewerAccuracy = object.minReviewerAccuracy ?? "";
    message.reviewerAccuracyWindowEpochs = object.reviewerAccuracyWindowEpochs !== undefined && object.reviewerAccuracyWindowEpochs !== null ? BigInt(object.reviewerAccuracyWindowEpochs.toString()) : BigInt(0);
    message.roleRewardInflationShare = object.roleRewardInflationShare ?? "";
    message.maxCuratorRewardPool = object.maxCuratorRewardPool ?? "";
    message.curatorRewardPoolOverflowBurnRatio = object.curatorRewardPoolOverflowBurnRatio ?? "";
    message.curatorRewardEpochBlocks = object.curatorRewardEpochBlocks !== undefined && object.curatorRewardEpochBlocks !== null ? BigInt(object.curatorRewardEpochBlocks.toString()) : BigInt(0);
    message.minCuratorAccuracy = object.minCuratorAccuracy ?? "";
    message.curatorAccuracyWindowEpochs = object.curatorAccuracyWindowEpochs !== undefined && object.curatorAccuracyWindowEpochs !== null ? BigInt(object.curatorAccuracyWindowEpochs.toString()) : BigInt(0);
    message.reviewRequiredAboveBudget = object.reviewRequiredAboveBudget ?? "";
    message.reviewBountyReclaimDelay = object.reviewBountyReclaimDelay !== undefined && object.reviewBountyReclaimDelay !== null ? BigInt(object.reviewBountyReclaimDelay.toString()) : BigInt(0);
    message.permissionlessMinReviewBountyRate = object.permissionlessMinReviewBountyRate ?? "";
    message.maxVerifierRewardPool = object.maxVerifierRewardPool ?? "";
    message.verifierRewardPoolOverflowBurnRatio = object.verifierRewardPoolOverflowBurnRatio ?? "";
    message.verifierRewardEpochBlocks = object.verifierRewardEpochBlocks !== undefined && object.verifierRewardEpochBlocks !== null ? BigInt(object.verifierRewardEpochBlocks.toString()) : BigInt(0);
    message.minVerifierAccuracy = object.minVerifierAccuracy ?? "";
    message.verifierAccuracyWindowEpochs = object.verifierAccuracyWindowEpochs !== undefined && object.verifierAccuracyWindowEpochs !== null ? BigInt(object.verifierAccuracyWindowEpochs.toString()) : BigInt(0);
    message.minEpochVerifications = object.minEpochVerifications ?? 0;
    message.verifierDreamReward = object.verifierDreamReward ?? "";
    message.maxVerifierDreamMintPerEpoch = object.maxVerifierDreamMintPerEpoch ?? "";
    message.minReviewerBond = object.minReviewerBond ?? "";
    message.reviewerDemotionThreshold = object.reviewerDemotionThreshold ?? "";
    message.minReviewerTrustLevel = object.minReviewerTrustLevel ?? "";
    message.minReviewerRepTier = object.minReviewerRepTier !== undefined && object.minReviewerRepTier !== null ? BigInt(object.minReviewerRepTier.toString()) : BigInt(0);
    message.minReviewerAgeBlocks = object.minReviewerAgeBlocks !== undefined && object.minReviewerAgeBlocks !== null ? BigInt(object.minReviewerAgeBlocks.toString()) : BigInt(0);
    message.reviewerDemotionCooldown = object.reviewerDemotionCooldown !== undefined && object.reviewerDemotionCooldown !== null ? BigInt(object.reviewerDemotionCooldown.toString()) : BigInt(0);
    message.reviewerUnbondCooldown = object.reviewerUnbondCooldown !== undefined && object.reviewerUnbondCooldown !== null ? BigInt(object.reviewerUnbondCooldown.toString()) : BigInt(0);
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
    if (object.max_staking_rewards_per_season !== undefined && object.max_staking_rewards_per_season !== null) {
      message.maxStakingRewardsPerSeason = object.max_staking_rewards_per_season;
    }
    if (object.staked_decay_rate !== undefined && object.staked_decay_rate !== null) {
      message.stakedDecayRate = object.staked_decay_rate;
    }
    if (object.new_member_decay_grace_epochs !== undefined && object.new_member_decay_grace_epochs !== null) {
      message.newMemberDecayGraceEpochs = BigInt(object.new_member_decay_grace_epochs);
    }
    if (object.max_treasury_balance !== undefined && object.max_treasury_balance !== null) {
      message.maxTreasuryBalance = object.max_treasury_balance;
    }
    if (object.treasury_funds_interims !== undefined && object.treasury_funds_interims !== null) {
      message.treasuryFundsInterims = object.treasury_funds_interims;
    }
    if (object.treasury_funds_retro_pgf !== undefined && object.treasury_funds_retro_pgf !== null) {
      message.treasuryFundsRetroPgf = object.treasury_funds_retro_pgf;
    }
    if (object.max_initiative_stake_per_member !== undefined && object.max_initiative_stake_per_member !== null) {
      message.maxInitiativeStakePerMember = object.max_initiative_stake_per_member;
    }
    if (object.max_initiative_rewards_per_season !== undefined && object.max_initiative_rewards_per_season !== null) {
      message.maxInitiativeRewardsPerSeason = object.max_initiative_rewards_per_season;
    }
    if (object.large_project_budget_threshold !== undefined && object.large_project_budget_threshold !== null) {
      message.largeProjectBudgetThreshold = object.large_project_budget_threshold;
    }
    if (object.project_creation_fee !== undefined && object.project_creation_fee !== null) {
      message.projectCreationFee = object.project_creation_fee;
    }
    if (object.initiative_creation_fee_apprentice !== undefined && object.initiative_creation_fee_apprentice !== null) {
      message.initiativeCreationFeeApprentice = object.initiative_creation_fee_apprentice;
    }
    if (object.initiative_creation_fee_standard !== undefined && object.initiative_creation_fee_standard !== null) {
      message.initiativeCreationFeeStandard = object.initiative_creation_fee_standard;
    }
    if (object.tag_creation_fee !== undefined && object.tag_creation_fee !== null) {
      message.tagCreationFee = object.tag_creation_fee;
    }
    if (object.max_sentinel_reward_pool !== undefined && object.max_sentinel_reward_pool !== null) {
      message.maxSentinelRewardPool = object.max_sentinel_reward_pool;
    }
    if (object.sentinel_reward_pool_overflow_burn_ratio !== undefined && object.sentinel_reward_pool_overflow_burn_ratio !== null) {
      message.sentinelRewardPoolOverflowBurnRatio = object.sentinel_reward_pool_overflow_burn_ratio;
    }
    if (object.sentinel_reward_epoch_blocks !== undefined && object.sentinel_reward_epoch_blocks !== null) {
      message.sentinelRewardEpochBlocks = BigInt(object.sentinel_reward_epoch_blocks);
    }
    if (object.min_sentinel_accuracy !== undefined && object.min_sentinel_accuracy !== null) {
      message.minSentinelAccuracy = object.min_sentinel_accuracy;
    }
    if (object.min_appeals_for_accuracy !== undefined && object.min_appeals_for_accuracy !== null) {
      message.minAppealsForAccuracy = BigInt(object.min_appeals_for_accuracy);
    }
    if (object.min_epoch_activity_for_reward !== undefined && object.min_epoch_activity_for_reward !== null) {
      message.minEpochActivityForReward = BigInt(object.min_epoch_activity_for_reward);
    }
    if (object.min_appeal_rate !== undefined && object.min_appeal_rate !== null) {
      message.minAppealRate = object.min_appeal_rate;
    }
    if (object.sentinel_accuracy_window_epochs !== undefined && object.sentinel_accuracy_window_epochs !== null) {
      message.sentinelAccuracyWindowEpochs = BigInt(object.sentinel_accuracy_window_epochs);
    }
    if (object.max_active_initiatives_per_member !== undefined && object.max_active_initiatives_per_member !== null) {
      message.maxActiveInitiativesPerMember = object.max_active_initiatives_per_member;
    }
    if (object.max_active_interims_per_member !== undefined && object.max_active_interims_per_member !== null) {
      message.maxActiveInterimsPerMember = object.max_active_interims_per_member;
    }
    if (object.max_dream_mint_per_epoch !== undefined && object.max_dream_mint_per_epoch !== null) {
      message.maxDreamMintPerEpoch = object.max_dream_mint_per_epoch;
    }
    if (object.max_project_requested_budget !== undefined && object.max_project_requested_budget !== null) {
      message.maxProjectRequestedBudget = object.max_project_requested_budget;
    }
    if (object.max_project_requested_spark !== undefined && object.max_project_requested_spark !== null) {
      message.maxProjectRequestedSpark = object.max_project_requested_spark;
    }
    if (object.proposed_project_expiry_blocks !== undefined && object.proposed_project_expiry_blocks !== null) {
      message.proposedProjectExpiryBlocks = BigInt(object.proposed_project_expiry_blocks);
    }
    if (object.abandoned_jury_seat_penalty !== undefined && object.abandoned_jury_seat_penalty !== null) {
      message.abandonedJurySeatPenalty = object.abandoned_jury_seat_penalty;
    }
    if (object.juror_reward_rate !== undefined && object.juror_reward_rate !== null) {
      message.jurorRewardRate = object.juror_reward_rate;
    }
    if (object.min_juror_reward !== undefined && object.min_juror_reward !== null) {
      message.minJurorReward = object.min_juror_reward;
    }
    if (object.min_juror_selection_weight !== undefined && object.min_juror_selection_weight !== null) {
      message.minJurorSelectionWeight = object.min_juror_selection_weight;
    }
    if (object.min_jury_seatings_for_weighting !== undefined && object.min_jury_seatings_for_weighting !== null) {
      message.minJurySeatingsForWeighting = BigInt(object.min_jury_seatings_for_weighting);
    }
    if (object.initiative_completion_bonus_rate !== undefined && object.initiative_completion_bonus_rate !== null) {
      message.initiativeCompletionBonusRate = object.initiative_completion_bonus_rate;
    }
    if (object.jury_acceptance_window_ratio !== undefined && object.jury_acceptance_window_ratio !== null) {
      message.juryAcceptanceWindowRatio = object.jury_acceptance_window_ratio;
    }
    if (object.max_jury_redraws !== undefined && object.max_jury_redraws !== null) {
      message.maxJuryRedraws = object.max_jury_redraws;
    }
    if (object.reviewer_bond_reserve_rate !== undefined && object.reviewer_bond_reserve_rate !== null) {
      message.reviewerBondReserveRate = object.reviewer_bond_reserve_rate;
    }
    if (object.review_fee_rate !== undefined && object.review_fee_rate !== null) {
      message.reviewFeeRate = object.review_fee_rate;
    }
    if (object.max_review_rounds !== undefined && object.max_review_rounds !== null) {
      message.maxReviewRounds = object.max_review_rounds;
    }
    if (object.max_reviewer_reward_pool !== undefined && object.max_reviewer_reward_pool !== null) {
      message.maxReviewerRewardPool = object.max_reviewer_reward_pool;
    }
    if (object.reviewer_reward_pool_overflow_burn_ratio !== undefined && object.reviewer_reward_pool_overflow_burn_ratio !== null) {
      message.reviewerRewardPoolOverflowBurnRatio = object.reviewer_reward_pool_overflow_burn_ratio;
    }
    if (object.reviewer_reward_epoch_blocks !== undefined && object.reviewer_reward_epoch_blocks !== null) {
      message.reviewerRewardEpochBlocks = BigInt(object.reviewer_reward_epoch_blocks);
    }
    if (object.min_reviewer_accuracy !== undefined && object.min_reviewer_accuracy !== null) {
      message.minReviewerAccuracy = object.min_reviewer_accuracy;
    }
    if (object.reviewer_accuracy_window_epochs !== undefined && object.reviewer_accuracy_window_epochs !== null) {
      message.reviewerAccuracyWindowEpochs = BigInt(object.reviewer_accuracy_window_epochs);
    }
    if (object.role_reward_inflation_share !== undefined && object.role_reward_inflation_share !== null) {
      message.roleRewardInflationShare = object.role_reward_inflation_share;
    }
    if (object.max_curator_reward_pool !== undefined && object.max_curator_reward_pool !== null) {
      message.maxCuratorRewardPool = object.max_curator_reward_pool;
    }
    if (object.curator_reward_pool_overflow_burn_ratio !== undefined && object.curator_reward_pool_overflow_burn_ratio !== null) {
      message.curatorRewardPoolOverflowBurnRatio = object.curator_reward_pool_overflow_burn_ratio;
    }
    if (object.curator_reward_epoch_blocks !== undefined && object.curator_reward_epoch_blocks !== null) {
      message.curatorRewardEpochBlocks = BigInt(object.curator_reward_epoch_blocks);
    }
    if (object.min_curator_accuracy !== undefined && object.min_curator_accuracy !== null) {
      message.minCuratorAccuracy = object.min_curator_accuracy;
    }
    if (object.curator_accuracy_window_epochs !== undefined && object.curator_accuracy_window_epochs !== null) {
      message.curatorAccuracyWindowEpochs = BigInt(object.curator_accuracy_window_epochs);
    }
    if (object.review_required_above_budget !== undefined && object.review_required_above_budget !== null) {
      message.reviewRequiredAboveBudget = object.review_required_above_budget;
    }
    if (object.review_bounty_reclaim_delay !== undefined && object.review_bounty_reclaim_delay !== null) {
      message.reviewBountyReclaimDelay = BigInt(object.review_bounty_reclaim_delay);
    }
    if (object.permissionless_min_review_bounty_rate !== undefined && object.permissionless_min_review_bounty_rate !== null) {
      message.permissionlessMinReviewBountyRate = object.permissionless_min_review_bounty_rate;
    }
    if (object.max_verifier_reward_pool !== undefined && object.max_verifier_reward_pool !== null) {
      message.maxVerifierRewardPool = object.max_verifier_reward_pool;
    }
    if (object.verifier_reward_pool_overflow_burn_ratio !== undefined && object.verifier_reward_pool_overflow_burn_ratio !== null) {
      message.verifierRewardPoolOverflowBurnRatio = object.verifier_reward_pool_overflow_burn_ratio;
    }
    if (object.verifier_reward_epoch_blocks !== undefined && object.verifier_reward_epoch_blocks !== null) {
      message.verifierRewardEpochBlocks = BigInt(object.verifier_reward_epoch_blocks);
    }
    if (object.min_verifier_accuracy !== undefined && object.min_verifier_accuracy !== null) {
      message.minVerifierAccuracy = object.min_verifier_accuracy;
    }
    if (object.verifier_accuracy_window_epochs !== undefined && object.verifier_accuracy_window_epochs !== null) {
      message.verifierAccuracyWindowEpochs = BigInt(object.verifier_accuracy_window_epochs);
    }
    if (object.min_epoch_verifications !== undefined && object.min_epoch_verifications !== null) {
      message.minEpochVerifications = object.min_epoch_verifications;
    }
    if (object.verifier_dream_reward !== undefined && object.verifier_dream_reward !== null) {
      message.verifierDreamReward = object.verifier_dream_reward;
    }
    if (object.max_verifier_dream_mint_per_epoch !== undefined && object.max_verifier_dream_mint_per_epoch !== null) {
      message.maxVerifierDreamMintPerEpoch = object.max_verifier_dream_mint_per_epoch;
    }
    if (object.min_reviewer_bond !== undefined && object.min_reviewer_bond !== null) {
      message.minReviewerBond = object.min_reviewer_bond;
    }
    if (object.reviewer_demotion_threshold !== undefined && object.reviewer_demotion_threshold !== null) {
      message.reviewerDemotionThreshold = object.reviewer_demotion_threshold;
    }
    if (object.min_reviewer_trust_level !== undefined && object.min_reviewer_trust_level !== null) {
      message.minReviewerTrustLevel = object.min_reviewer_trust_level;
    }
    if (object.min_reviewer_rep_tier !== undefined && object.min_reviewer_rep_tier !== null) {
      message.minReviewerRepTier = BigInt(object.min_reviewer_rep_tier);
    }
    if (object.min_reviewer_age_blocks !== undefined && object.min_reviewer_age_blocks !== null) {
      message.minReviewerAgeBlocks = BigInt(object.min_reviewer_age_blocks);
    }
    if (object.reviewer_demotion_cooldown !== undefined && object.reviewer_demotion_cooldown !== null) {
      message.reviewerDemotionCooldown = BigInt(object.reviewer_demotion_cooldown);
    }
    if (object.reviewer_unbond_cooldown !== undefined && object.reviewer_unbond_cooldown !== null) {
      message.reviewerUnbondCooldown = BigInt(object.reviewer_unbond_cooldown);
    }
    return message;
  },
  toAmino(message: RepOperationalParams): RepOperationalParamsAmino {
    const obj: any = {};
    obj.epoch_blocks = message.epochBlocks !== BigInt(0) ? message.epochBlocks?.toString() : undefined;
    obj.season_duration_epochs = message.seasonDurationEpochs !== BigInt(0) ? message.seasonDurationEpochs?.toString() : undefined;
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
    obj.max_staking_rewards_per_season = message.maxStakingRewardsPerSeason === "" ? undefined : message.maxStakingRewardsPerSeason;
    obj.staked_decay_rate = message.stakedDecayRate === "" ? undefined : message.stakedDecayRate;
    obj.new_member_decay_grace_epochs = message.newMemberDecayGraceEpochs !== BigInt(0) ? message.newMemberDecayGraceEpochs?.toString() : undefined;
    obj.max_treasury_balance = message.maxTreasuryBalance === "" ? undefined : message.maxTreasuryBalance;
    obj.treasury_funds_interims = message.treasuryFundsInterims === false ? undefined : message.treasuryFundsInterims;
    obj.treasury_funds_retro_pgf = message.treasuryFundsRetroPgf === false ? undefined : message.treasuryFundsRetroPgf;
    obj.max_initiative_stake_per_member = message.maxInitiativeStakePerMember === "" ? undefined : message.maxInitiativeStakePerMember;
    obj.max_initiative_rewards_per_season = message.maxInitiativeRewardsPerSeason === "" ? undefined : message.maxInitiativeRewardsPerSeason;
    obj.large_project_budget_threshold = message.largeProjectBudgetThreshold === "" ? undefined : message.largeProjectBudgetThreshold;
    obj.project_creation_fee = message.projectCreationFee === "" ? undefined : message.projectCreationFee;
    obj.initiative_creation_fee_apprentice = message.initiativeCreationFeeApprentice === "" ? undefined : message.initiativeCreationFeeApprentice;
    obj.initiative_creation_fee_standard = message.initiativeCreationFeeStandard === "" ? undefined : message.initiativeCreationFeeStandard;
    obj.tag_creation_fee = message.tagCreationFee === "" ? undefined : message.tagCreationFee;
    obj.max_sentinel_reward_pool = message.maxSentinelRewardPool === "" ? undefined : message.maxSentinelRewardPool;
    obj.sentinel_reward_pool_overflow_burn_ratio = message.sentinelRewardPoolOverflowBurnRatio === "" ? undefined : message.sentinelRewardPoolOverflowBurnRatio;
    obj.sentinel_reward_epoch_blocks = message.sentinelRewardEpochBlocks !== BigInt(0) ? message.sentinelRewardEpochBlocks?.toString() : undefined;
    obj.min_sentinel_accuracy = message.minSentinelAccuracy === "" ? undefined : message.minSentinelAccuracy;
    obj.min_appeals_for_accuracy = message.minAppealsForAccuracy !== BigInt(0) ? message.minAppealsForAccuracy?.toString() : undefined;
    obj.min_epoch_activity_for_reward = message.minEpochActivityForReward !== BigInt(0) ? message.minEpochActivityForReward?.toString() : undefined;
    obj.min_appeal_rate = message.minAppealRate === "" ? undefined : message.minAppealRate;
    obj.sentinel_accuracy_window_epochs = message.sentinelAccuracyWindowEpochs !== BigInt(0) ? message.sentinelAccuracyWindowEpochs?.toString() : undefined;
    obj.max_active_initiatives_per_member = message.maxActiveInitiativesPerMember === 0 ? undefined : message.maxActiveInitiativesPerMember;
    obj.max_active_interims_per_member = message.maxActiveInterimsPerMember === 0 ? undefined : message.maxActiveInterimsPerMember;
    obj.max_dream_mint_per_epoch = message.maxDreamMintPerEpoch === "" ? undefined : message.maxDreamMintPerEpoch;
    obj.max_project_requested_budget = message.maxProjectRequestedBudget === "" ? undefined : message.maxProjectRequestedBudget;
    obj.max_project_requested_spark = message.maxProjectRequestedSpark === "" ? undefined : message.maxProjectRequestedSpark;
    obj.proposed_project_expiry_blocks = message.proposedProjectExpiryBlocks !== BigInt(0) ? message.proposedProjectExpiryBlocks?.toString() : undefined;
    obj.abandoned_jury_seat_penalty = message.abandonedJurySeatPenalty === "" ? undefined : message.abandonedJurySeatPenalty;
    obj.juror_reward_rate = message.jurorRewardRate === "" ? undefined : message.jurorRewardRate;
    obj.min_juror_reward = message.minJurorReward === "" ? undefined : message.minJurorReward;
    obj.min_juror_selection_weight = message.minJurorSelectionWeight === "" ? undefined : message.minJurorSelectionWeight;
    obj.min_jury_seatings_for_weighting = message.minJurySeatingsForWeighting !== BigInt(0) ? message.minJurySeatingsForWeighting?.toString() : undefined;
    obj.initiative_completion_bonus_rate = message.initiativeCompletionBonusRate === "" ? undefined : message.initiativeCompletionBonusRate;
    obj.jury_acceptance_window_ratio = message.juryAcceptanceWindowRatio === "" ? undefined : message.juryAcceptanceWindowRatio;
    obj.max_jury_redraws = message.maxJuryRedraws === 0 ? undefined : message.maxJuryRedraws;
    obj.reviewer_bond_reserve_rate = message.reviewerBondReserveRate === "" ? undefined : message.reviewerBondReserveRate;
    obj.review_fee_rate = message.reviewFeeRate === "" ? undefined : message.reviewFeeRate;
    obj.max_review_rounds = message.maxReviewRounds === 0 ? undefined : message.maxReviewRounds;
    obj.max_reviewer_reward_pool = message.maxReviewerRewardPool === "" ? undefined : message.maxReviewerRewardPool;
    obj.reviewer_reward_pool_overflow_burn_ratio = message.reviewerRewardPoolOverflowBurnRatio === "" ? undefined : message.reviewerRewardPoolOverflowBurnRatio;
    obj.reviewer_reward_epoch_blocks = message.reviewerRewardEpochBlocks !== BigInt(0) ? message.reviewerRewardEpochBlocks?.toString() : undefined;
    obj.min_reviewer_accuracy = message.minReviewerAccuracy === "" ? undefined : message.minReviewerAccuracy;
    obj.reviewer_accuracy_window_epochs = message.reviewerAccuracyWindowEpochs !== BigInt(0) ? message.reviewerAccuracyWindowEpochs?.toString() : undefined;
    obj.role_reward_inflation_share = message.roleRewardInflationShare === "" ? undefined : message.roleRewardInflationShare;
    obj.max_curator_reward_pool = message.maxCuratorRewardPool === "" ? undefined : message.maxCuratorRewardPool;
    obj.curator_reward_pool_overflow_burn_ratio = message.curatorRewardPoolOverflowBurnRatio === "" ? undefined : message.curatorRewardPoolOverflowBurnRatio;
    obj.curator_reward_epoch_blocks = message.curatorRewardEpochBlocks !== BigInt(0) ? message.curatorRewardEpochBlocks?.toString() : undefined;
    obj.min_curator_accuracy = message.minCuratorAccuracy === "" ? undefined : message.minCuratorAccuracy;
    obj.curator_accuracy_window_epochs = message.curatorAccuracyWindowEpochs !== BigInt(0) ? message.curatorAccuracyWindowEpochs?.toString() : undefined;
    obj.review_required_above_budget = message.reviewRequiredAboveBudget === "" ? undefined : message.reviewRequiredAboveBudget;
    obj.review_bounty_reclaim_delay = message.reviewBountyReclaimDelay !== BigInt(0) ? message.reviewBountyReclaimDelay?.toString() : undefined;
    obj.permissionless_min_review_bounty_rate = message.permissionlessMinReviewBountyRate === "" ? undefined : message.permissionlessMinReviewBountyRate;
    obj.max_verifier_reward_pool = message.maxVerifierRewardPool === "" ? undefined : message.maxVerifierRewardPool;
    obj.verifier_reward_pool_overflow_burn_ratio = message.verifierRewardPoolOverflowBurnRatio === "" ? undefined : message.verifierRewardPoolOverflowBurnRatio;
    obj.verifier_reward_epoch_blocks = message.verifierRewardEpochBlocks !== BigInt(0) ? message.verifierRewardEpochBlocks?.toString() : undefined;
    obj.min_verifier_accuracy = message.minVerifierAccuracy === "" ? undefined : message.minVerifierAccuracy;
    obj.verifier_accuracy_window_epochs = message.verifierAccuracyWindowEpochs !== BigInt(0) ? message.verifierAccuracyWindowEpochs?.toString() : undefined;
    obj.min_epoch_verifications = message.minEpochVerifications === 0 ? undefined : message.minEpochVerifications;
    obj.verifier_dream_reward = message.verifierDreamReward === "" ? undefined : message.verifierDreamReward;
    obj.max_verifier_dream_mint_per_epoch = message.maxVerifierDreamMintPerEpoch === "" ? undefined : message.maxVerifierDreamMintPerEpoch;
    obj.min_reviewer_bond = message.minReviewerBond === "" ? undefined : message.minReviewerBond;
    obj.reviewer_demotion_threshold = message.reviewerDemotionThreshold === "" ? undefined : message.reviewerDemotionThreshold;
    obj.min_reviewer_trust_level = message.minReviewerTrustLevel === "" ? undefined : message.minReviewerTrustLevel;
    obj.min_reviewer_rep_tier = message.minReviewerRepTier !== BigInt(0) ? message.minReviewerRepTier?.toString() : undefined;
    obj.min_reviewer_age_blocks = message.minReviewerAgeBlocks !== BigInt(0) ? message.minReviewerAgeBlocks?.toString() : undefined;
    obj.reviewer_demotion_cooldown = message.reviewerDemotionCooldown !== BigInt(0) ? message.reviewerDemotionCooldown?.toString() : undefined;
    obj.reviewer_unbond_cooldown = message.reviewerUnbondCooldown !== BigInt(0) ? message.reviewerUnbondCooldown?.toString() : undefined;
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