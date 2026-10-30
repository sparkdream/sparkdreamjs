//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Member, MemberAmino, GiftRecord, GiftRecordAmino } from "./member";
import { Invitation, InvitationAmino } from "./invitation";
import { Project, ProjectAmino } from "./project";
import { Initiative, InitiativeAmino } from "./initiative";
import { Stake, StakeAmino, MemberStakePool, MemberStakePoolAmino, TagStakePool, TagStakePoolAmino, ProjectStakeInfo, ProjectStakeInfoAmino } from "./stake";
import { Challenge, ChallengeAmino } from "./challenge";
import { JuryReview, JuryReviewAmino } from "./jury_review";
import { Interim, InterimAmino } from "./interim";
import { ContentChallenge, ContentChallengeAmino } from "./content_challenge";
import { Tag, TagAmino } from "./tag";
import { ReservedTag, ReservedTagAmino } from "./reserved_tag";
import { TagReport, TagReportAmino } from "./tag_report";
import { TagBudget, TagBudgetAmino } from "./tag_budget";
import { TagBudgetAward, TagBudgetAwardAmino } from "./tag_budget_award";
import { JuryParticipation, JuryParticipationAmino } from "./jury_participation";
import { MemberReport, MemberReportAmino, MemberActionRestoration, MemberActionRestorationAmino } from "./member_report";
import { MemberWarning, MemberWarningAmino } from "./member_warning";
import { GovActionAppeal, GovActionAppealAmino } from "./gov_action_appeal";
import { BondedRole, BondedRoleAmino, BondedRoleConfig, BondedRoleConfigAmino } from "./bonded_role";
import { RoleActivity, RoleActivityAmino } from "./role_activity";
import { InitiativeReview, InitiativeReviewAmino } from "./initiative_review";
import { ReviewBounty, ReviewBountyAmino } from "./review_bounty";
import { InitiativeBounty, InitiativeBountyAmino } from "./initiative_bounty";
import { Tombstone, TombstoneAmino, MemberMigration, MemberMigrationAmino, RecoveryCommitmentEntry, RecoveryCommitmentEntryAmino, RecoveryCommit, RecoveryCommitAmino } from "./migration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the rep module's genesis state.
 * @name GenesisState
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  memberMap: Member[];
  invitationList: Invitation[];
  invitationCount: bigint;
  projectList: Project[];
  projectCount: bigint;
  initiativeList: Initiative[];
  initiativeCount: bigint;
  stakeList: Stake[];
  stakeCount: bigint;
  challengeList: Challenge[];
  challengeCount: bigint;
  juryReviewList: JuryReview[];
  juryReviewCount: bigint;
  interimList: Interim[];
  interimCount: bigint;
  /**
   * Stake pools (for extended staking)
   */
  memberStakePoolList: MemberStakePool[];
  tagStakePoolList: TagStakePool[];
  projectStakeInfoList: ProjectStakeInfo[];
  /**
   * Content challenges
   */
  contentChallengeList: ContentChallenge[];
  contentChallengeCount: bigint;
  /**
   * Content initiative links for conviction propagation
   */
  contentInitiativeLinks: ContentInitiativeLink[];
  /**
   * Tag registry
   */
  tagMap: Tag[];
  reservedTagMap: ReservedTag[];
  /**
   * Tag moderation
   */
  tagReportMap: TagReport[];
  /**
   * Tag budgets
   */
  tagBudgetList: TagBudget[];
  tagBudgetCount: bigint;
  tagBudgetAwardList: TagBudgetAward[];
  tagBudgetAwardCount: bigint;
  /**
   * Accountability state
   */
  juryParticipationMap: JuryParticipation[];
  memberReportMap: MemberReport[];
  memberWarningList: MemberWarning[];
  memberWarningCount: bigint;
  govActionAppealList: GovActionAppeal[];
  govActionAppealCount: bigint;
  /**
   * Bonded-role primitive (Phase 1 of bonded-role generalization).
   */
  bondedRoleList: BondedRole[];
  bondedRoleConfigList: BondedRoleConfig[];
  roleActivityList: RoleActivity[];
  /**
   * Reviewer verdicts. Their bond_reserved is live liability, so losing them on
   * import would strand committed bond with nothing to release it.
   */
  initiativeReviewList: InitiativeReview[];
  /**
   * Review rounds sitting with the Operations Committee. This set is the ONLY
   * marker for "already escalated" — ReviewEscalation is reset to NONE on
   * escalation — so losing it on import re-escalates every open round and
   * extends its deadline again, and leaves silent escalations with nothing to
   * resolve them.
   */
  escalatedReviewList: bigint[];
  /**
   * Per-UTC-day community-pool draw ledger for the bonded-role reward pools.
   * Dropping it on import hands the chain a fresh daily allowance.
   */
  roleRewardDayFundingList: RoleRewardDayFunding[];
  /**
   * Escrowed review bounties. Real DREAM is held against these, so losing them
   * on import would strand the escrow with nothing able to pay or refund it.
   */
  reviewBountyList: ReviewBounty[];
  /**
   * The module's own token ledger and accumulators. x/rep keeps DREAM outside
   * x/bank, so none of this is recoverable from anywhere else — an export that
   * omits it hands the importing chain a zero treasury, zero season counters
   * (re-opening every per-season cap mid-season), a zero seasonal pool (so the
   * "only seed an uninitialised pool" guard in InitGenesis refills a whole
   * season budget on every import), a reset per-epoch mint allowance, and a
   * decay clock that re-applies an extra epoch.
   */
  economicState?: EconomicState;
  /**
   * Per-(sender, invitee) lifetime gift ledgers. Not exporting them would
   * re-open every invitee's lifetime gift allowance across a restart.
   */
  giftRecordList: GiftRecordEntry[];
  /**
   * Initiative bounties are a lock on each funder's DREAM; dropping them on
   * import would strand the escrow with nothing able to pay or refund it.
   */
  initiativeBountyList: InitiativeBounty[];
  /**
   * Member key migration. The queue, the per-member pending pointer and the
   * reverse alias index are derived from these lists at InitGenesis.
   */
  tombstoneList: Tombstone[];
  memberMigrationList: MemberMigration[];
  memberMigrationCount: bigint;
  recoveryCommitmentList: RecoveryCommitmentEntry[];
  recoveryCommitList: RecoveryCommit[];
  /**
   * Restoration records of appealable member actions. The filing-window
   * expiry index is derived from these at InitGenesis.
   */
  memberActionRestorationList: MemberActionRestoration[];
  /**
   * Jury reviews deliberately kept out of the verdict index (content-challenge
   * and appeal reviews, which have their own timeout paths). InitGenesis
   * indexes every other review, so a hand-written genesis that omits this
   * list indexes them all.
   */
  juryReviewsOutsideVerdictIndex: bigint[];
  /**
   * The per-(budget, post) award cooldown heights. An award without an entry
   * here restarts its cooldown at the import height.
   */
  tagBudgetAwardCooldownList: TagBudgetAwardCooldown[];
  /**
   * What each awarder has awarded from a budget in an epoch (the per-awarder
   * epoch cap ledger). Without it an import inside an epoch would reset every
   * awarder's cap for that epoch.
   */
  tagBudgetAwarderEpochList: TagBudgetAwarderEpochSpend[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.rep.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the rep module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  member_map?: MemberAmino[];
  invitation_list?: InvitationAmino[];
  invitation_count?: string;
  project_list?: ProjectAmino[];
  project_count?: string;
  initiative_list?: InitiativeAmino[];
  initiative_count?: string;
  stake_list?: StakeAmino[];
  stake_count?: string;
  challenge_list?: ChallengeAmino[];
  challenge_count?: string;
  jury_review_list?: JuryReviewAmino[];
  jury_review_count?: string;
  interim_list?: InterimAmino[];
  interim_count?: string;
  /**
   * Stake pools (for extended staking)
   */
  member_stake_pool_list?: MemberStakePoolAmino[];
  tag_stake_pool_list?: TagStakePoolAmino[];
  project_stake_info_list?: ProjectStakeInfoAmino[];
  /**
   * Content challenges
   */
  content_challenge_list?: ContentChallengeAmino[];
  content_challenge_count?: string;
  /**
   * Content initiative links for conviction propagation
   */
  content_initiative_links?: ContentInitiativeLinkAmino[];
  /**
   * Tag registry
   */
  tag_map?: TagAmino[];
  reserved_tag_map?: ReservedTagAmino[];
  /**
   * Tag moderation
   */
  tag_report_map?: TagReportAmino[];
  /**
   * Tag budgets
   */
  tag_budget_list?: TagBudgetAmino[];
  tag_budget_count?: string;
  tag_budget_award_list?: TagBudgetAwardAmino[];
  tag_budget_award_count?: string;
  /**
   * Accountability state
   */
  jury_participation_map?: JuryParticipationAmino[];
  member_report_map?: MemberReportAmino[];
  member_warning_list?: MemberWarningAmino[];
  member_warning_count?: string;
  gov_action_appeal_list?: GovActionAppealAmino[];
  gov_action_appeal_count?: string;
  /**
   * Bonded-role primitive (Phase 1 of bonded-role generalization).
   */
  bonded_role_list?: BondedRoleAmino[];
  bonded_role_config_list?: BondedRoleConfigAmino[];
  role_activity_list?: RoleActivityAmino[];
  /**
   * Reviewer verdicts. Their bond_reserved is live liability, so losing them on
   * import would strand committed bond with nothing to release it.
   */
  initiative_review_list?: InitiativeReviewAmino[];
  /**
   * Review rounds sitting with the Operations Committee. This set is the ONLY
   * marker for "already escalated" — ReviewEscalation is reset to NONE on
   * escalation — so losing it on import re-escalates every open round and
   * extends its deadline again, and leaves silent escalations with nothing to
   * resolve them.
   */
  escalated_review_list?: string[];
  /**
   * Per-UTC-day community-pool draw ledger for the bonded-role reward pools.
   * Dropping it on import hands the chain a fresh daily allowance.
   */
  role_reward_day_funding_list?: RoleRewardDayFundingAmino[];
  /**
   * Escrowed review bounties. Real DREAM is held against these, so losing them
   * on import would strand the escrow with nothing able to pay or refund it.
   */
  review_bounty_list?: ReviewBountyAmino[];
  /**
   * The module's own token ledger and accumulators. x/rep keeps DREAM outside
   * x/bank, so none of this is recoverable from anywhere else — an export that
   * omits it hands the importing chain a zero treasury, zero season counters
   * (re-opening every per-season cap mid-season), a zero seasonal pool (so the
   * "only seed an uninitialised pool" guard in InitGenesis refills a whole
   * season budget on every import), a reset per-epoch mint allowance, and a
   * decay clock that re-applies an extra epoch.
   */
  economic_state?: EconomicStateAmino;
  /**
   * Per-(sender, invitee) lifetime gift ledgers. Not exporting them would
   * re-open every invitee's lifetime gift allowance across a restart.
   */
  gift_record_list?: GiftRecordEntryAmino[];
  /**
   * Initiative bounties are a lock on each funder's DREAM; dropping them on
   * import would strand the escrow with nothing able to pay or refund it.
   */
  initiative_bounty_list?: InitiativeBountyAmino[];
  /**
   * Member key migration. The queue, the per-member pending pointer and the
   * reverse alias index are derived from these lists at InitGenesis.
   */
  tombstone_list?: TombstoneAmino[];
  member_migration_list?: MemberMigrationAmino[];
  member_migration_count?: string;
  recovery_commitment_list?: RecoveryCommitmentEntryAmino[];
  recovery_commit_list?: RecoveryCommitAmino[];
  /**
   * Restoration records of appealable member actions. The filing-window
   * expiry index is derived from these at InitGenesis.
   */
  member_action_restoration_list?: MemberActionRestorationAmino[];
  /**
   * Jury reviews deliberately kept out of the verdict index (content-challenge
   * and appeal reviews, which have their own timeout paths). InitGenesis
   * indexes every other review, so a hand-written genesis that omits this
   * list indexes them all.
   */
  jury_reviews_outside_verdict_index?: string[];
  /**
   * The per-(budget, post) award cooldown heights. An award without an entry
   * here restarts its cooldown at the import height.
   */
  tag_budget_award_cooldown_list?: TagBudgetAwardCooldownAmino[];
  /**
   * What each awarder has awarded from a budget in an epoch (the per-awarder
   * epoch cap ledger). Without it an import inside an epoch would reset every
   * awarder's cap for that epoch.
   */
  tag_budget_awarder_epoch_list?: TagBudgetAwarderEpochSpendAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.rep.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * TagBudgetAwarderEpochSpend is the amount awarder awarded from budget_id in
 * epoch.
 * @name TagBudgetAwarderEpochSpend
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagBudgetAwarderEpochSpend
 */
export interface TagBudgetAwarderEpochSpend {
  budgetId: bigint;
  awarder: string;
  epoch: bigint;
  amount: string;
}
export interface TagBudgetAwarderEpochSpendProtoMsg {
  typeUrl: "/sparkdream.rep.v1.TagBudgetAwarderEpochSpend";
  value: Uint8Array;
}
/**
 * TagBudgetAwarderEpochSpend is the amount awarder awarded from budget_id in
 * epoch.
 * @name TagBudgetAwarderEpochSpendAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagBudgetAwarderEpochSpend
 */
export interface TagBudgetAwarderEpochSpendAmino {
  budget_id?: string;
  awarder?: string;
  epoch?: string;
  amount?: string;
}
export interface TagBudgetAwarderEpochSpendAminoMsg {
  type: "/sparkdream.rep.v1.TagBudgetAwarderEpochSpend";
  value: TagBudgetAwarderEpochSpendAmino;
}
/**
 * TagBudgetAwardCooldown is the height of the latest award from budget_id to
 * post_id, the start of that pair's award cooldown.
 * @name TagBudgetAwardCooldown
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagBudgetAwardCooldown
 */
export interface TagBudgetAwardCooldown {
  budgetId: bigint;
  postId: bigint;
  height: bigint;
}
export interface TagBudgetAwardCooldownProtoMsg {
  typeUrl: "/sparkdream.rep.v1.TagBudgetAwardCooldown";
  value: Uint8Array;
}
/**
 * TagBudgetAwardCooldown is the height of the latest award from budget_id to
 * post_id, the start of that pair's award cooldown.
 * @name TagBudgetAwardCooldownAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagBudgetAwardCooldown
 */
export interface TagBudgetAwardCooldownAmino {
  budget_id?: string;
  post_id?: string;
  height?: string;
}
export interface TagBudgetAwardCooldownAminoMsg {
  type: "/sparkdream.rep.v1.TagBudgetAwardCooldown";
  value: TagBudgetAwardCooldownAmino;
}
/**
 * EconomicState carries x/rep's token ledger across a genesis round trip.
 * Int and Dec values travel as strings so an absent field reads as zero rather
 * than as a malformed number.
 * @name EconomicState
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.EconomicState
 */
export interface EconomicState {
  treasuryBalance: string;
  seasonMinted: string;
  seasonBurned: string;
  seasonInitiativeRewardsMinted: string;
  seasonStakingRewardsMinted: string;
  seasonInterimRewardsMinted: string;
  seasonTreasuryInflow: string;
  seasonTreasuryOutflow: string;
  seasonalPoolRemaining: string;
  /**
   * Monotonic for the life of the chain. Exporting it is what lets
   * RebaseStakeRewardDebt be a no-op on a faithful round trip instead of the
   * repair it has to be when the accumulator resets to zero.
   */
  seasonalPoolAccPerShare: string;
  seasonalPoolSeason: bigint;
  seasonalPoolStartEpoch: bigint;
  epochMintedEpoch: bigint;
  epochMintedAmount: string;
  decayLastProcessedEpoch: bigint;
}
export interface EconomicStateProtoMsg {
  typeUrl: "/sparkdream.rep.v1.EconomicState";
  value: Uint8Array;
}
/**
 * EconomicState carries x/rep's token ledger across a genesis round trip.
 * Int and Dec values travel as strings so an absent field reads as zero rather
 * than as a malformed number.
 * @name EconomicStateAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.EconomicState
 */
export interface EconomicStateAmino {
  treasury_balance?: string;
  season_minted?: string;
  season_burned?: string;
  season_initiative_rewards_minted?: string;
  season_staking_rewards_minted?: string;
  season_interim_rewards_minted?: string;
  season_treasury_inflow?: string;
  season_treasury_outflow?: string;
  seasonal_pool_remaining?: string;
  /**
   * Monotonic for the life of the chain. Exporting it is what lets
   * RebaseStakeRewardDebt be a no-op on a faithful round trip instead of the
   * repair it has to be when the accumulator resets to zero.
   */
  seasonal_pool_acc_per_share?: string;
  seasonal_pool_season?: string;
  seasonal_pool_start_epoch?: string;
  epoch_minted_epoch?: string;
  epoch_minted_amount?: string;
  decay_last_processed_epoch?: string;
}
export interface EconomicStateAminoMsg {
  type: "/sparkdream.rep.v1.EconomicState";
  value: EconomicStateAmino;
}
/**
 * GiftRecordEntry is one (sender, recipient) lifetime gift ledger, flattened
 * for genesis because the live collection is keyed by the pair.
 * @name GiftRecordEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.GiftRecordEntry
 */
export interface GiftRecordEntry {
  sender: string;
  recipient: string;
  record?: GiftRecord;
}
export interface GiftRecordEntryProtoMsg {
  typeUrl: "/sparkdream.rep.v1.GiftRecordEntry";
  value: Uint8Array;
}
/**
 * GiftRecordEntry is one (sender, recipient) lifetime gift ledger, flattened
 * for genesis because the live collection is keyed by the pair.
 * @name GiftRecordEntryAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.GiftRecordEntry
 */
export interface GiftRecordEntryAmino {
  sender?: string;
  recipient?: string;
  record?: GiftRecordAmino;
}
export interface GiftRecordEntryAminoMsg {
  type: "/sparkdream.rep.v1.GiftRecordEntry";
  value: GiftRecordEntryAmino;
}
/**
 * RoleRewardDayFunding is one UTC day's community-pool draw for the
 * bonded-role reward pools, ledgered so role_reward_daily_funding bounds a day
 * rather than a block.
 * @name RoleRewardDayFunding
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleRewardDayFunding
 */
export interface RoleRewardDayFunding {
  day: bigint;
  amountFunded: string;
}
export interface RoleRewardDayFundingProtoMsg {
  typeUrl: "/sparkdream.rep.v1.RoleRewardDayFunding";
  value: Uint8Array;
}
/**
 * RoleRewardDayFunding is one UTC day's community-pool draw for the
 * bonded-role reward pools, ledgered so role_reward_daily_funding bounds a day
 * rather than a block.
 * @name RoleRewardDayFundingAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleRewardDayFunding
 */
export interface RoleRewardDayFundingAmino {
  day?: string;
  amount_funded?: string;
}
export interface RoleRewardDayFundingAminoMsg {
  type: "/sparkdream.rep.v1.RoleRewardDayFunding";
  value: RoleRewardDayFundingAmino;
}
/**
 * ContentInitiativeLink defines a link between content and an initiative for conviction propagation.
 * @name ContentInitiativeLink
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ContentInitiativeLink
 */
export interface ContentInitiativeLink {
  initiativeId: bigint;
  /**
   * StakeTargetType (4=BLOG_CONTENT, 5=FORUM_CONTENT)
   */
  targetType: number;
  /**
   * Content ID
   */
  targetId: bigint;
}
export interface ContentInitiativeLinkProtoMsg {
  typeUrl: "/sparkdream.rep.v1.ContentInitiativeLink";
  value: Uint8Array;
}
/**
 * ContentInitiativeLink defines a link between content and an initiative for conviction propagation.
 * @name ContentInitiativeLinkAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ContentInitiativeLink
 */
export interface ContentInitiativeLinkAmino {
  initiative_id?: string;
  /**
   * StakeTargetType (4=BLOG_CONTENT, 5=FORUM_CONTENT)
   */
  target_type?: number;
  /**
   * Content ID
   */
  target_id?: string;
}
export interface ContentInitiativeLinkAminoMsg {
  type: "/sparkdream.rep.v1.ContentInitiativeLink";
  value: ContentInitiativeLinkAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    memberMap: [],
    invitationList: [],
    invitationCount: BigInt(0),
    projectList: [],
    projectCount: BigInt(0),
    initiativeList: [],
    initiativeCount: BigInt(0),
    stakeList: [],
    stakeCount: BigInt(0),
    challengeList: [],
    challengeCount: BigInt(0),
    juryReviewList: [],
    juryReviewCount: BigInt(0),
    interimList: [],
    interimCount: BigInt(0),
    memberStakePoolList: [],
    tagStakePoolList: [],
    projectStakeInfoList: [],
    contentChallengeList: [],
    contentChallengeCount: BigInt(0),
    contentInitiativeLinks: [],
    tagMap: [],
    reservedTagMap: [],
    tagReportMap: [],
    tagBudgetList: [],
    tagBudgetCount: BigInt(0),
    tagBudgetAwardList: [],
    tagBudgetAwardCount: BigInt(0),
    juryParticipationMap: [],
    memberReportMap: [],
    memberWarningList: [],
    memberWarningCount: BigInt(0),
    govActionAppealList: [],
    govActionAppealCount: BigInt(0),
    bondedRoleList: [],
    bondedRoleConfigList: [],
    roleActivityList: [],
    initiativeReviewList: [],
    escalatedReviewList: [],
    roleRewardDayFundingList: [],
    reviewBountyList: [],
    economicState: undefined,
    giftRecordList: [],
    initiativeBountyList: [],
    tombstoneList: [],
    memberMigrationList: [],
    memberMigrationCount: BigInt(0),
    recoveryCommitmentList: [],
    recoveryCommitList: [],
    memberActionRestorationList: [],
    juryReviewsOutsideVerdictIndex: [],
    tagBudgetAwardCooldownList: [],
    tagBudgetAwarderEpochList: []
  };
}
/**
 * GenesisState defines the rep module's genesis state.
 * @name GenesisState
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.rep.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.memberMap) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.invitationList) {
      Invitation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.invitationCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.invitationCount);
    }
    for (const v of message.projectList) {
      Project.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.projectCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.projectCount);
    }
    for (const v of message.initiativeList) {
      Initiative.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.initiativeCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.initiativeCount);
    }
    for (const v of message.stakeList) {
      Stake.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.stakeCount !== BigInt(0)) {
      writer.uint32(80).uint64(message.stakeCount);
    }
    for (const v of message.challengeList) {
      Challenge.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.challengeCount !== BigInt(0)) {
      writer.uint32(96).uint64(message.challengeCount);
    }
    for (const v of message.juryReviewList) {
      JuryReview.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.juryReviewCount !== BigInt(0)) {
      writer.uint32(112).uint64(message.juryReviewCount);
    }
    for (const v of message.interimList) {
      Interim.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.interimCount !== BigInt(0)) {
      writer.uint32(128).uint64(message.interimCount);
    }
    for (const v of message.memberStakePoolList) {
      MemberStakePool.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.tagStakePoolList) {
      TagStakePool.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.projectStakeInfoList) {
      ProjectStakeInfo.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.contentChallengeList) {
      ContentChallenge.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    if (message.contentChallengeCount !== BigInt(0)) {
      writer.uint32(168).uint64(message.contentChallengeCount);
    }
    for (const v of message.contentInitiativeLinks) {
      ContentInitiativeLink.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    for (const v of message.tagMap) {
      Tag.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.reservedTagMap) {
      ReservedTag.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.tagReportMap) {
      TagReport.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    for (const v of message.tagBudgetList) {
      TagBudget.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    if (message.tagBudgetCount !== BigInt(0)) {
      writer.uint32(216).uint64(message.tagBudgetCount);
    }
    for (const v of message.tagBudgetAwardList) {
      TagBudgetAward.encode(v!, writer.uint32(226).fork()).ldelim();
    }
    if (message.tagBudgetAwardCount !== BigInt(0)) {
      writer.uint32(232).uint64(message.tagBudgetAwardCount);
    }
    for (const v of message.juryParticipationMap) {
      JuryParticipation.encode(v!, writer.uint32(242).fork()).ldelim();
    }
    for (const v of message.memberReportMap) {
      MemberReport.encode(v!, writer.uint32(250).fork()).ldelim();
    }
    for (const v of message.memberWarningList) {
      MemberWarning.encode(v!, writer.uint32(258).fork()).ldelim();
    }
    if (message.memberWarningCount !== BigInt(0)) {
      writer.uint32(264).uint64(message.memberWarningCount);
    }
    for (const v of message.govActionAppealList) {
      GovActionAppeal.encode(v!, writer.uint32(274).fork()).ldelim();
    }
    if (message.govActionAppealCount !== BigInt(0)) {
      writer.uint32(280).uint64(message.govActionAppealCount);
    }
    for (const v of message.bondedRoleList) {
      BondedRole.encode(v!, writer.uint32(290).fork()).ldelim();
    }
    for (const v of message.bondedRoleConfigList) {
      BondedRoleConfig.encode(v!, writer.uint32(298).fork()).ldelim();
    }
    for (const v of message.roleActivityList) {
      RoleActivity.encode(v!, writer.uint32(306).fork()).ldelim();
    }
    for (const v of message.initiativeReviewList) {
      InitiativeReview.encode(v!, writer.uint32(314).fork()).ldelim();
    }
    writer.uint32(322).fork();
    for (const v of message.escalatedReviewList) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.roleRewardDayFundingList) {
      RoleRewardDayFunding.encode(v!, writer.uint32(330).fork()).ldelim();
    }
    for (const v of message.reviewBountyList) {
      ReviewBounty.encode(v!, writer.uint32(338).fork()).ldelim();
    }
    if (message.economicState !== undefined) {
      EconomicState.encode(message.economicState, writer.uint32(346).fork()).ldelim();
    }
    for (const v of message.giftRecordList) {
      GiftRecordEntry.encode(v!, writer.uint32(354).fork()).ldelim();
    }
    for (const v of message.initiativeBountyList) {
      InitiativeBounty.encode(v!, writer.uint32(362).fork()).ldelim();
    }
    for (const v of message.tombstoneList) {
      Tombstone.encode(v!, writer.uint32(370).fork()).ldelim();
    }
    for (const v of message.memberMigrationList) {
      MemberMigration.encode(v!, writer.uint32(378).fork()).ldelim();
    }
    if (message.memberMigrationCount !== BigInt(0)) {
      writer.uint32(384).uint64(message.memberMigrationCount);
    }
    for (const v of message.recoveryCommitmentList) {
      RecoveryCommitmentEntry.encode(v!, writer.uint32(394).fork()).ldelim();
    }
    for (const v of message.recoveryCommitList) {
      RecoveryCommit.encode(v!, writer.uint32(402).fork()).ldelim();
    }
    for (const v of message.memberActionRestorationList) {
      MemberActionRestoration.encode(v!, writer.uint32(410).fork()).ldelim();
    }
    writer.uint32(418).fork();
    for (const v of message.juryReviewsOutsideVerdictIndex) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.tagBudgetAwardCooldownList) {
      TagBudgetAwardCooldown.encode(v!, writer.uint32(426).fork()).ldelim();
    }
    for (const v of message.tagBudgetAwarderEpochList) {
      TagBudgetAwarderEpochSpend.encode(v!, writer.uint32(434).fork()).ldelim();
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
          message.memberMap.push(Member.decode(reader, reader.uint32()));
          break;
        case 3:
          message.invitationList.push(Invitation.decode(reader, reader.uint32()));
          break;
        case 4:
          message.invitationCount = reader.uint64();
          break;
        case 5:
          message.projectList.push(Project.decode(reader, reader.uint32()));
          break;
        case 6:
          message.projectCount = reader.uint64();
          break;
        case 7:
          message.initiativeList.push(Initiative.decode(reader, reader.uint32()));
          break;
        case 8:
          message.initiativeCount = reader.uint64();
          break;
        case 9:
          message.stakeList.push(Stake.decode(reader, reader.uint32()));
          break;
        case 10:
          message.stakeCount = reader.uint64();
          break;
        case 11:
          message.challengeList.push(Challenge.decode(reader, reader.uint32()));
          break;
        case 12:
          message.challengeCount = reader.uint64();
          break;
        case 13:
          message.juryReviewList.push(JuryReview.decode(reader, reader.uint32()));
          break;
        case 14:
          message.juryReviewCount = reader.uint64();
          break;
        case 15:
          message.interimList.push(Interim.decode(reader, reader.uint32()));
          break;
        case 16:
          message.interimCount = reader.uint64();
          break;
        case 17:
          message.memberStakePoolList.push(MemberStakePool.decode(reader, reader.uint32()));
          break;
        case 18:
          message.tagStakePoolList.push(TagStakePool.decode(reader, reader.uint32()));
          break;
        case 19:
          message.projectStakeInfoList.push(ProjectStakeInfo.decode(reader, reader.uint32()));
          break;
        case 20:
          message.contentChallengeList.push(ContentChallenge.decode(reader, reader.uint32()));
          break;
        case 21:
          message.contentChallengeCount = reader.uint64();
          break;
        case 22:
          message.contentInitiativeLinks.push(ContentInitiativeLink.decode(reader, reader.uint32()));
          break;
        case 23:
          message.tagMap.push(Tag.decode(reader, reader.uint32()));
          break;
        case 24:
          message.reservedTagMap.push(ReservedTag.decode(reader, reader.uint32()));
          break;
        case 25:
          message.tagReportMap.push(TagReport.decode(reader, reader.uint32()));
          break;
        case 26:
          message.tagBudgetList.push(TagBudget.decode(reader, reader.uint32()));
          break;
        case 27:
          message.tagBudgetCount = reader.uint64();
          break;
        case 28:
          message.tagBudgetAwardList.push(TagBudgetAward.decode(reader, reader.uint32()));
          break;
        case 29:
          message.tagBudgetAwardCount = reader.uint64();
          break;
        case 30:
          message.juryParticipationMap.push(JuryParticipation.decode(reader, reader.uint32()));
          break;
        case 31:
          message.memberReportMap.push(MemberReport.decode(reader, reader.uint32()));
          break;
        case 32:
          message.memberWarningList.push(MemberWarning.decode(reader, reader.uint32()));
          break;
        case 33:
          message.memberWarningCount = reader.uint64();
          break;
        case 34:
          message.govActionAppealList.push(GovActionAppeal.decode(reader, reader.uint32()));
          break;
        case 35:
          message.govActionAppealCount = reader.uint64();
          break;
        case 36:
          message.bondedRoleList.push(BondedRole.decode(reader, reader.uint32()));
          break;
        case 37:
          message.bondedRoleConfigList.push(BondedRoleConfig.decode(reader, reader.uint32()));
          break;
        case 38:
          message.roleActivityList.push(RoleActivity.decode(reader, reader.uint32()));
          break;
        case 39:
          message.initiativeReviewList.push(InitiativeReview.decode(reader, reader.uint32()));
          break;
        case 40:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.escalatedReviewList.push(reader.uint64());
            }
          } else {
            message.escalatedReviewList.push(reader.uint64());
          }
          break;
        case 41:
          message.roleRewardDayFundingList.push(RoleRewardDayFunding.decode(reader, reader.uint32()));
          break;
        case 42:
          message.reviewBountyList.push(ReviewBounty.decode(reader, reader.uint32()));
          break;
        case 43:
          message.economicState = EconomicState.decode(reader, reader.uint32());
          break;
        case 44:
          message.giftRecordList.push(GiftRecordEntry.decode(reader, reader.uint32()));
          break;
        case 45:
          message.initiativeBountyList.push(InitiativeBounty.decode(reader, reader.uint32()));
          break;
        case 46:
          message.tombstoneList.push(Tombstone.decode(reader, reader.uint32()));
          break;
        case 47:
          message.memberMigrationList.push(MemberMigration.decode(reader, reader.uint32()));
          break;
        case 48:
          message.memberMigrationCount = reader.uint64();
          break;
        case 49:
          message.recoveryCommitmentList.push(RecoveryCommitmentEntry.decode(reader, reader.uint32()));
          break;
        case 50:
          message.recoveryCommitList.push(RecoveryCommit.decode(reader, reader.uint32()));
          break;
        case 51:
          message.memberActionRestorationList.push(MemberActionRestoration.decode(reader, reader.uint32()));
          break;
        case 52:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.juryReviewsOutsideVerdictIndex.push(reader.uint64());
            }
          } else {
            message.juryReviewsOutsideVerdictIndex.push(reader.uint64());
          }
          break;
        case 53:
          message.tagBudgetAwardCooldownList.push(TagBudgetAwardCooldown.decode(reader, reader.uint32()));
          break;
        case 54:
          message.tagBudgetAwarderEpochList.push(TagBudgetAwarderEpochSpend.decode(reader, reader.uint32()));
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
    message.memberMap = object.memberMap?.map(e => Member.fromPartial(e)) || [];
    message.invitationList = object.invitationList?.map(e => Invitation.fromPartial(e)) || [];
    message.invitationCount = object.invitationCount !== undefined && object.invitationCount !== null ? BigInt(object.invitationCount.toString()) : BigInt(0);
    message.projectList = object.projectList?.map(e => Project.fromPartial(e)) || [];
    message.projectCount = object.projectCount !== undefined && object.projectCount !== null ? BigInt(object.projectCount.toString()) : BigInt(0);
    message.initiativeList = object.initiativeList?.map(e => Initiative.fromPartial(e)) || [];
    message.initiativeCount = object.initiativeCount !== undefined && object.initiativeCount !== null ? BigInt(object.initiativeCount.toString()) : BigInt(0);
    message.stakeList = object.stakeList?.map(e => Stake.fromPartial(e)) || [];
    message.stakeCount = object.stakeCount !== undefined && object.stakeCount !== null ? BigInt(object.stakeCount.toString()) : BigInt(0);
    message.challengeList = object.challengeList?.map(e => Challenge.fromPartial(e)) || [];
    message.challengeCount = object.challengeCount !== undefined && object.challengeCount !== null ? BigInt(object.challengeCount.toString()) : BigInt(0);
    message.juryReviewList = object.juryReviewList?.map(e => JuryReview.fromPartial(e)) || [];
    message.juryReviewCount = object.juryReviewCount !== undefined && object.juryReviewCount !== null ? BigInt(object.juryReviewCount.toString()) : BigInt(0);
    message.interimList = object.interimList?.map(e => Interim.fromPartial(e)) || [];
    message.interimCount = object.interimCount !== undefined && object.interimCount !== null ? BigInt(object.interimCount.toString()) : BigInt(0);
    message.memberStakePoolList = object.memberStakePoolList?.map(e => MemberStakePool.fromPartial(e)) || [];
    message.tagStakePoolList = object.tagStakePoolList?.map(e => TagStakePool.fromPartial(e)) || [];
    message.projectStakeInfoList = object.projectStakeInfoList?.map(e => ProjectStakeInfo.fromPartial(e)) || [];
    message.contentChallengeList = object.contentChallengeList?.map(e => ContentChallenge.fromPartial(e)) || [];
    message.contentChallengeCount = object.contentChallengeCount !== undefined && object.contentChallengeCount !== null ? BigInt(object.contentChallengeCount.toString()) : BigInt(0);
    message.contentInitiativeLinks = object.contentInitiativeLinks?.map(e => ContentInitiativeLink.fromPartial(e)) || [];
    message.tagMap = object.tagMap?.map(e => Tag.fromPartial(e)) || [];
    message.reservedTagMap = object.reservedTagMap?.map(e => ReservedTag.fromPartial(e)) || [];
    message.tagReportMap = object.tagReportMap?.map(e => TagReport.fromPartial(e)) || [];
    message.tagBudgetList = object.tagBudgetList?.map(e => TagBudget.fromPartial(e)) || [];
    message.tagBudgetCount = object.tagBudgetCount !== undefined && object.tagBudgetCount !== null ? BigInt(object.tagBudgetCount.toString()) : BigInt(0);
    message.tagBudgetAwardList = object.tagBudgetAwardList?.map(e => TagBudgetAward.fromPartial(e)) || [];
    message.tagBudgetAwardCount = object.tagBudgetAwardCount !== undefined && object.tagBudgetAwardCount !== null ? BigInt(object.tagBudgetAwardCount.toString()) : BigInt(0);
    message.juryParticipationMap = object.juryParticipationMap?.map(e => JuryParticipation.fromPartial(e)) || [];
    message.memberReportMap = object.memberReportMap?.map(e => MemberReport.fromPartial(e)) || [];
    message.memberWarningList = object.memberWarningList?.map(e => MemberWarning.fromPartial(e)) || [];
    message.memberWarningCount = object.memberWarningCount !== undefined && object.memberWarningCount !== null ? BigInt(object.memberWarningCount.toString()) : BigInt(0);
    message.govActionAppealList = object.govActionAppealList?.map(e => GovActionAppeal.fromPartial(e)) || [];
    message.govActionAppealCount = object.govActionAppealCount !== undefined && object.govActionAppealCount !== null ? BigInt(object.govActionAppealCount.toString()) : BigInt(0);
    message.bondedRoleList = object.bondedRoleList?.map(e => BondedRole.fromPartial(e)) || [];
    message.bondedRoleConfigList = object.bondedRoleConfigList?.map(e => BondedRoleConfig.fromPartial(e)) || [];
    message.roleActivityList = object.roleActivityList?.map(e => RoleActivity.fromPartial(e)) || [];
    message.initiativeReviewList = object.initiativeReviewList?.map(e => InitiativeReview.fromPartial(e)) || [];
    message.escalatedReviewList = object.escalatedReviewList?.map(e => BigInt(e.toString())) || [];
    message.roleRewardDayFundingList = object.roleRewardDayFundingList?.map(e => RoleRewardDayFunding.fromPartial(e)) || [];
    message.reviewBountyList = object.reviewBountyList?.map(e => ReviewBounty.fromPartial(e)) || [];
    message.economicState = object.economicState !== undefined && object.economicState !== null ? EconomicState.fromPartial(object.economicState) : undefined;
    message.giftRecordList = object.giftRecordList?.map(e => GiftRecordEntry.fromPartial(e)) || [];
    message.initiativeBountyList = object.initiativeBountyList?.map(e => InitiativeBounty.fromPartial(e)) || [];
    message.tombstoneList = object.tombstoneList?.map(e => Tombstone.fromPartial(e)) || [];
    message.memberMigrationList = object.memberMigrationList?.map(e => MemberMigration.fromPartial(e)) || [];
    message.memberMigrationCount = object.memberMigrationCount !== undefined && object.memberMigrationCount !== null ? BigInt(object.memberMigrationCount.toString()) : BigInt(0);
    message.recoveryCommitmentList = object.recoveryCommitmentList?.map(e => RecoveryCommitmentEntry.fromPartial(e)) || [];
    message.recoveryCommitList = object.recoveryCommitList?.map(e => RecoveryCommit.fromPartial(e)) || [];
    message.memberActionRestorationList = object.memberActionRestorationList?.map(e => MemberActionRestoration.fromPartial(e)) || [];
    message.juryReviewsOutsideVerdictIndex = object.juryReviewsOutsideVerdictIndex?.map(e => BigInt(e.toString())) || [];
    message.tagBudgetAwardCooldownList = object.tagBudgetAwardCooldownList?.map(e => TagBudgetAwardCooldown.fromPartial(e)) || [];
    message.tagBudgetAwarderEpochList = object.tagBudgetAwarderEpochList?.map(e => TagBudgetAwarderEpochSpend.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.memberMap = object.member_map?.map(e => Member.fromAmino(e)) || [];
    message.invitationList = object.invitation_list?.map(e => Invitation.fromAmino(e)) || [];
    if (object.invitation_count !== undefined && object.invitation_count !== null) {
      message.invitationCount = BigInt(object.invitation_count);
    }
    message.projectList = object.project_list?.map(e => Project.fromAmino(e)) || [];
    if (object.project_count !== undefined && object.project_count !== null) {
      message.projectCount = BigInt(object.project_count);
    }
    message.initiativeList = object.initiative_list?.map(e => Initiative.fromAmino(e)) || [];
    if (object.initiative_count !== undefined && object.initiative_count !== null) {
      message.initiativeCount = BigInt(object.initiative_count);
    }
    message.stakeList = object.stake_list?.map(e => Stake.fromAmino(e)) || [];
    if (object.stake_count !== undefined && object.stake_count !== null) {
      message.stakeCount = BigInt(object.stake_count);
    }
    message.challengeList = object.challenge_list?.map(e => Challenge.fromAmino(e)) || [];
    if (object.challenge_count !== undefined && object.challenge_count !== null) {
      message.challengeCount = BigInt(object.challenge_count);
    }
    message.juryReviewList = object.jury_review_list?.map(e => JuryReview.fromAmino(e)) || [];
    if (object.jury_review_count !== undefined && object.jury_review_count !== null) {
      message.juryReviewCount = BigInt(object.jury_review_count);
    }
    message.interimList = object.interim_list?.map(e => Interim.fromAmino(e)) || [];
    if (object.interim_count !== undefined && object.interim_count !== null) {
      message.interimCount = BigInt(object.interim_count);
    }
    message.memberStakePoolList = object.member_stake_pool_list?.map(e => MemberStakePool.fromAmino(e)) || [];
    message.tagStakePoolList = object.tag_stake_pool_list?.map(e => TagStakePool.fromAmino(e)) || [];
    message.projectStakeInfoList = object.project_stake_info_list?.map(e => ProjectStakeInfo.fromAmino(e)) || [];
    message.contentChallengeList = object.content_challenge_list?.map(e => ContentChallenge.fromAmino(e)) || [];
    if (object.content_challenge_count !== undefined && object.content_challenge_count !== null) {
      message.contentChallengeCount = BigInt(object.content_challenge_count);
    }
    message.contentInitiativeLinks = object.content_initiative_links?.map(e => ContentInitiativeLink.fromAmino(e)) || [];
    message.tagMap = object.tag_map?.map(e => Tag.fromAmino(e)) || [];
    message.reservedTagMap = object.reserved_tag_map?.map(e => ReservedTag.fromAmino(e)) || [];
    message.tagReportMap = object.tag_report_map?.map(e => TagReport.fromAmino(e)) || [];
    message.tagBudgetList = object.tag_budget_list?.map(e => TagBudget.fromAmino(e)) || [];
    if (object.tag_budget_count !== undefined && object.tag_budget_count !== null) {
      message.tagBudgetCount = BigInt(object.tag_budget_count);
    }
    message.tagBudgetAwardList = object.tag_budget_award_list?.map(e => TagBudgetAward.fromAmino(e)) || [];
    if (object.tag_budget_award_count !== undefined && object.tag_budget_award_count !== null) {
      message.tagBudgetAwardCount = BigInt(object.tag_budget_award_count);
    }
    message.juryParticipationMap = object.jury_participation_map?.map(e => JuryParticipation.fromAmino(e)) || [];
    message.memberReportMap = object.member_report_map?.map(e => MemberReport.fromAmino(e)) || [];
    message.memberWarningList = object.member_warning_list?.map(e => MemberWarning.fromAmino(e)) || [];
    if (object.member_warning_count !== undefined && object.member_warning_count !== null) {
      message.memberWarningCount = BigInt(object.member_warning_count);
    }
    message.govActionAppealList = object.gov_action_appeal_list?.map(e => GovActionAppeal.fromAmino(e)) || [];
    if (object.gov_action_appeal_count !== undefined && object.gov_action_appeal_count !== null) {
      message.govActionAppealCount = BigInt(object.gov_action_appeal_count);
    }
    message.bondedRoleList = object.bonded_role_list?.map(e => BondedRole.fromAmino(e)) || [];
    message.bondedRoleConfigList = object.bonded_role_config_list?.map(e => BondedRoleConfig.fromAmino(e)) || [];
    message.roleActivityList = object.role_activity_list?.map(e => RoleActivity.fromAmino(e)) || [];
    message.initiativeReviewList = object.initiative_review_list?.map(e => InitiativeReview.fromAmino(e)) || [];
    message.escalatedReviewList = object.escalated_review_list?.map(e => BigInt(e)) || [];
    message.roleRewardDayFundingList = object.role_reward_day_funding_list?.map(e => RoleRewardDayFunding.fromAmino(e)) || [];
    message.reviewBountyList = object.review_bounty_list?.map(e => ReviewBounty.fromAmino(e)) || [];
    if (object.economic_state !== undefined && object.economic_state !== null) {
      message.economicState = EconomicState.fromAmino(object.economic_state);
    }
    message.giftRecordList = object.gift_record_list?.map(e => GiftRecordEntry.fromAmino(e)) || [];
    message.initiativeBountyList = object.initiative_bounty_list?.map(e => InitiativeBounty.fromAmino(e)) || [];
    message.tombstoneList = object.tombstone_list?.map(e => Tombstone.fromAmino(e)) || [];
    message.memberMigrationList = object.member_migration_list?.map(e => MemberMigration.fromAmino(e)) || [];
    if (object.member_migration_count !== undefined && object.member_migration_count !== null) {
      message.memberMigrationCount = BigInt(object.member_migration_count);
    }
    message.recoveryCommitmentList = object.recovery_commitment_list?.map(e => RecoveryCommitmentEntry.fromAmino(e)) || [];
    message.recoveryCommitList = object.recovery_commit_list?.map(e => RecoveryCommit.fromAmino(e)) || [];
    message.memberActionRestorationList = object.member_action_restoration_list?.map(e => MemberActionRestoration.fromAmino(e)) || [];
    message.juryReviewsOutsideVerdictIndex = object.jury_reviews_outside_verdict_index?.map(e => BigInt(e)) || [];
    message.tagBudgetAwardCooldownList = object.tag_budget_award_cooldown_list?.map(e => TagBudgetAwardCooldown.fromAmino(e)) || [];
    message.tagBudgetAwarderEpochList = object.tag_budget_awarder_epoch_list?.map(e => TagBudgetAwarderEpochSpend.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.memberMap) {
      obj.member_map = message.memberMap.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.member_map = message.memberMap;
    }
    if (message.invitationList) {
      obj.invitation_list = message.invitationList.map(e => e ? Invitation.toAmino(e) : undefined);
    } else {
      obj.invitation_list = message.invitationList;
    }
    obj.invitation_count = message.invitationCount !== BigInt(0) ? message.invitationCount?.toString() : undefined;
    if (message.projectList) {
      obj.project_list = message.projectList.map(e => e ? Project.toAmino(e) : undefined);
    } else {
      obj.project_list = message.projectList;
    }
    obj.project_count = message.projectCount !== BigInt(0) ? message.projectCount?.toString() : undefined;
    if (message.initiativeList) {
      obj.initiative_list = message.initiativeList.map(e => e ? Initiative.toAmino(e) : undefined);
    } else {
      obj.initiative_list = message.initiativeList;
    }
    obj.initiative_count = message.initiativeCount !== BigInt(0) ? message.initiativeCount?.toString() : undefined;
    if (message.stakeList) {
      obj.stake_list = message.stakeList.map(e => e ? Stake.toAmino(e) : undefined);
    } else {
      obj.stake_list = message.stakeList;
    }
    obj.stake_count = message.stakeCount !== BigInt(0) ? message.stakeCount?.toString() : undefined;
    if (message.challengeList) {
      obj.challenge_list = message.challengeList.map(e => e ? Challenge.toAmino(e) : undefined);
    } else {
      obj.challenge_list = message.challengeList;
    }
    obj.challenge_count = message.challengeCount !== BigInt(0) ? message.challengeCount?.toString() : undefined;
    if (message.juryReviewList) {
      obj.jury_review_list = message.juryReviewList.map(e => e ? JuryReview.toAmino(e) : undefined);
    } else {
      obj.jury_review_list = message.juryReviewList;
    }
    obj.jury_review_count = message.juryReviewCount !== BigInt(0) ? message.juryReviewCount?.toString() : undefined;
    if (message.interimList) {
      obj.interim_list = message.interimList.map(e => e ? Interim.toAmino(e) : undefined);
    } else {
      obj.interim_list = message.interimList;
    }
    obj.interim_count = message.interimCount !== BigInt(0) ? message.interimCount?.toString() : undefined;
    if (message.memberStakePoolList) {
      obj.member_stake_pool_list = message.memberStakePoolList.map(e => e ? MemberStakePool.toAmino(e) : undefined);
    } else {
      obj.member_stake_pool_list = message.memberStakePoolList;
    }
    if (message.tagStakePoolList) {
      obj.tag_stake_pool_list = message.tagStakePoolList.map(e => e ? TagStakePool.toAmino(e) : undefined);
    } else {
      obj.tag_stake_pool_list = message.tagStakePoolList;
    }
    if (message.projectStakeInfoList) {
      obj.project_stake_info_list = message.projectStakeInfoList.map(e => e ? ProjectStakeInfo.toAmino(e) : undefined);
    } else {
      obj.project_stake_info_list = message.projectStakeInfoList;
    }
    if (message.contentChallengeList) {
      obj.content_challenge_list = message.contentChallengeList.map(e => e ? ContentChallenge.toAmino(e) : undefined);
    } else {
      obj.content_challenge_list = message.contentChallengeList;
    }
    obj.content_challenge_count = message.contentChallengeCount !== BigInt(0) ? message.contentChallengeCount?.toString() : undefined;
    if (message.contentInitiativeLinks) {
      obj.content_initiative_links = message.contentInitiativeLinks.map(e => e ? ContentInitiativeLink.toAmino(e) : undefined);
    } else {
      obj.content_initiative_links = message.contentInitiativeLinks;
    }
    if (message.tagMap) {
      obj.tag_map = message.tagMap.map(e => e ? Tag.toAmino(e) : undefined);
    } else {
      obj.tag_map = message.tagMap;
    }
    if (message.reservedTagMap) {
      obj.reserved_tag_map = message.reservedTagMap.map(e => e ? ReservedTag.toAmino(e) : undefined);
    } else {
      obj.reserved_tag_map = message.reservedTagMap;
    }
    if (message.tagReportMap) {
      obj.tag_report_map = message.tagReportMap.map(e => e ? TagReport.toAmino(e) : undefined);
    } else {
      obj.tag_report_map = message.tagReportMap;
    }
    if (message.tagBudgetList) {
      obj.tag_budget_list = message.tagBudgetList.map(e => e ? TagBudget.toAmino(e) : undefined);
    } else {
      obj.tag_budget_list = message.tagBudgetList;
    }
    obj.tag_budget_count = message.tagBudgetCount !== BigInt(0) ? message.tagBudgetCount?.toString() : undefined;
    if (message.tagBudgetAwardList) {
      obj.tag_budget_award_list = message.tagBudgetAwardList.map(e => e ? TagBudgetAward.toAmino(e) : undefined);
    } else {
      obj.tag_budget_award_list = message.tagBudgetAwardList;
    }
    obj.tag_budget_award_count = message.tagBudgetAwardCount !== BigInt(0) ? message.tagBudgetAwardCount?.toString() : undefined;
    if (message.juryParticipationMap) {
      obj.jury_participation_map = message.juryParticipationMap.map(e => e ? JuryParticipation.toAmino(e) : undefined);
    } else {
      obj.jury_participation_map = message.juryParticipationMap;
    }
    if (message.memberReportMap) {
      obj.member_report_map = message.memberReportMap.map(e => e ? MemberReport.toAmino(e) : undefined);
    } else {
      obj.member_report_map = message.memberReportMap;
    }
    if (message.memberWarningList) {
      obj.member_warning_list = message.memberWarningList.map(e => e ? MemberWarning.toAmino(e) : undefined);
    } else {
      obj.member_warning_list = message.memberWarningList;
    }
    obj.member_warning_count = message.memberWarningCount !== BigInt(0) ? message.memberWarningCount?.toString() : undefined;
    if (message.govActionAppealList) {
      obj.gov_action_appeal_list = message.govActionAppealList.map(e => e ? GovActionAppeal.toAmino(e) : undefined);
    } else {
      obj.gov_action_appeal_list = message.govActionAppealList;
    }
    obj.gov_action_appeal_count = message.govActionAppealCount !== BigInt(0) ? message.govActionAppealCount?.toString() : undefined;
    if (message.bondedRoleList) {
      obj.bonded_role_list = message.bondedRoleList.map(e => e ? BondedRole.toAmino(e) : undefined);
    } else {
      obj.bonded_role_list = message.bondedRoleList;
    }
    if (message.bondedRoleConfigList) {
      obj.bonded_role_config_list = message.bondedRoleConfigList.map(e => e ? BondedRoleConfig.toAmino(e) : undefined);
    } else {
      obj.bonded_role_config_list = message.bondedRoleConfigList;
    }
    if (message.roleActivityList) {
      obj.role_activity_list = message.roleActivityList.map(e => e ? RoleActivity.toAmino(e) : undefined);
    } else {
      obj.role_activity_list = message.roleActivityList;
    }
    if (message.initiativeReviewList) {
      obj.initiative_review_list = message.initiativeReviewList.map(e => e ? InitiativeReview.toAmino(e) : undefined);
    } else {
      obj.initiative_review_list = message.initiativeReviewList;
    }
    if (message.escalatedReviewList) {
      obj.escalated_review_list = message.escalatedReviewList.map(e => e.toString());
    } else {
      obj.escalated_review_list = message.escalatedReviewList;
    }
    if (message.roleRewardDayFundingList) {
      obj.role_reward_day_funding_list = message.roleRewardDayFundingList.map(e => e ? RoleRewardDayFunding.toAmino(e) : undefined);
    } else {
      obj.role_reward_day_funding_list = message.roleRewardDayFundingList;
    }
    if (message.reviewBountyList) {
      obj.review_bounty_list = message.reviewBountyList.map(e => e ? ReviewBounty.toAmino(e) : undefined);
    } else {
      obj.review_bounty_list = message.reviewBountyList;
    }
    obj.economic_state = message.economicState ? EconomicState.toAmino(message.economicState) : undefined;
    if (message.giftRecordList) {
      obj.gift_record_list = message.giftRecordList.map(e => e ? GiftRecordEntry.toAmino(e) : undefined);
    } else {
      obj.gift_record_list = message.giftRecordList;
    }
    if (message.initiativeBountyList) {
      obj.initiative_bounty_list = message.initiativeBountyList.map(e => e ? InitiativeBounty.toAmino(e) : undefined);
    } else {
      obj.initiative_bounty_list = message.initiativeBountyList;
    }
    if (message.tombstoneList) {
      obj.tombstone_list = message.tombstoneList.map(e => e ? Tombstone.toAmino(e) : undefined);
    } else {
      obj.tombstone_list = message.tombstoneList;
    }
    if (message.memberMigrationList) {
      obj.member_migration_list = message.memberMigrationList.map(e => e ? MemberMigration.toAmino(e) : undefined);
    } else {
      obj.member_migration_list = message.memberMigrationList;
    }
    obj.member_migration_count = message.memberMigrationCount !== BigInt(0) ? message.memberMigrationCount?.toString() : undefined;
    if (message.recoveryCommitmentList) {
      obj.recovery_commitment_list = message.recoveryCommitmentList.map(e => e ? RecoveryCommitmentEntry.toAmino(e) : undefined);
    } else {
      obj.recovery_commitment_list = message.recoveryCommitmentList;
    }
    if (message.recoveryCommitList) {
      obj.recovery_commit_list = message.recoveryCommitList.map(e => e ? RecoveryCommit.toAmino(e) : undefined);
    } else {
      obj.recovery_commit_list = message.recoveryCommitList;
    }
    if (message.memberActionRestorationList) {
      obj.member_action_restoration_list = message.memberActionRestorationList.map(e => e ? MemberActionRestoration.toAmino(e) : undefined);
    } else {
      obj.member_action_restoration_list = message.memberActionRestorationList;
    }
    if (message.juryReviewsOutsideVerdictIndex) {
      obj.jury_reviews_outside_verdict_index = message.juryReviewsOutsideVerdictIndex.map(e => e.toString());
    } else {
      obj.jury_reviews_outside_verdict_index = message.juryReviewsOutsideVerdictIndex;
    }
    if (message.tagBudgetAwardCooldownList) {
      obj.tag_budget_award_cooldown_list = message.tagBudgetAwardCooldownList.map(e => e ? TagBudgetAwardCooldown.toAmino(e) : undefined);
    } else {
      obj.tag_budget_award_cooldown_list = message.tagBudgetAwardCooldownList;
    }
    if (message.tagBudgetAwarderEpochList) {
      obj.tag_budget_awarder_epoch_list = message.tagBudgetAwarderEpochList.map(e => e ? TagBudgetAwarderEpochSpend.toAmino(e) : undefined);
    } else {
      obj.tag_budget_awarder_epoch_list = message.tagBudgetAwarderEpochList;
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
      typeUrl: "/sparkdream.rep.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseTagBudgetAwarderEpochSpend(): TagBudgetAwarderEpochSpend {
  return {
    budgetId: BigInt(0),
    awarder: "",
    epoch: BigInt(0),
    amount: ""
  };
}
/**
 * TagBudgetAwarderEpochSpend is the amount awarder awarded from budget_id in
 * epoch.
 * @name TagBudgetAwarderEpochSpend
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagBudgetAwarderEpochSpend
 */
export const TagBudgetAwarderEpochSpend = {
  typeUrl: "/sparkdream.rep.v1.TagBudgetAwarderEpochSpend",
  encode(message: TagBudgetAwarderEpochSpend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(8).uint64(message.budgetId);
    }
    if (message.awarder !== "") {
      writer.uint32(18).string(message.awarder);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(24).int64(message.epoch);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TagBudgetAwarderEpochSpend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagBudgetAwarderEpochSpend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.budgetId = reader.uint64();
          break;
        case 2:
          message.awarder = reader.string();
          break;
        case 3:
          message.epoch = reader.int64();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TagBudgetAwarderEpochSpend>): TagBudgetAwarderEpochSpend {
    const message = createBaseTagBudgetAwarderEpochSpend();
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.awarder = object.awarder ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: TagBudgetAwarderEpochSpendAmino): TagBudgetAwarderEpochSpend {
    const message = createBaseTagBudgetAwarderEpochSpend();
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.awarder !== undefined && object.awarder !== null) {
      message.awarder = object.awarder;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: TagBudgetAwarderEpochSpend): TagBudgetAwarderEpochSpendAmino {
    const obj: any = {};
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.awarder = message.awarder === "" ? undefined : message.awarder;
    obj.epoch = message.epoch !== BigInt(0) ? message.epoch?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: TagBudgetAwarderEpochSpendAminoMsg): TagBudgetAwarderEpochSpend {
    return TagBudgetAwarderEpochSpend.fromAmino(object.value);
  },
  fromProtoMsg(message: TagBudgetAwarderEpochSpendProtoMsg): TagBudgetAwarderEpochSpend {
    return TagBudgetAwarderEpochSpend.decode(message.value);
  },
  toProto(message: TagBudgetAwarderEpochSpend): Uint8Array {
    return TagBudgetAwarderEpochSpend.encode(message).finish();
  },
  toProtoMsg(message: TagBudgetAwarderEpochSpend): TagBudgetAwarderEpochSpendProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.TagBudgetAwarderEpochSpend",
      value: TagBudgetAwarderEpochSpend.encode(message).finish()
    };
  }
};
function createBaseTagBudgetAwardCooldown(): TagBudgetAwardCooldown {
  return {
    budgetId: BigInt(0),
    postId: BigInt(0),
    height: BigInt(0)
  };
}
/**
 * TagBudgetAwardCooldown is the height of the latest award from budget_id to
 * post_id, the start of that pair's award cooldown.
 * @name TagBudgetAwardCooldown
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagBudgetAwardCooldown
 */
export const TagBudgetAwardCooldown = {
  typeUrl: "/sparkdream.rep.v1.TagBudgetAwardCooldown",
  encode(message: TagBudgetAwardCooldown, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(8).uint64(message.budgetId);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TagBudgetAwardCooldown {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagBudgetAwardCooldown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.budgetId = reader.uint64();
          break;
        case 2:
          message.postId = reader.uint64();
          break;
        case 3:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TagBudgetAwardCooldown>): TagBudgetAwardCooldown {
    const message = createBaseTagBudgetAwardCooldown();
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TagBudgetAwardCooldownAmino): TagBudgetAwardCooldown {
    const message = createBaseTagBudgetAwardCooldown();
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: TagBudgetAwardCooldown): TagBudgetAwardCooldownAmino {
    const obj: any = {};
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TagBudgetAwardCooldownAminoMsg): TagBudgetAwardCooldown {
    return TagBudgetAwardCooldown.fromAmino(object.value);
  },
  fromProtoMsg(message: TagBudgetAwardCooldownProtoMsg): TagBudgetAwardCooldown {
    return TagBudgetAwardCooldown.decode(message.value);
  },
  toProto(message: TagBudgetAwardCooldown): Uint8Array {
    return TagBudgetAwardCooldown.encode(message).finish();
  },
  toProtoMsg(message: TagBudgetAwardCooldown): TagBudgetAwardCooldownProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.TagBudgetAwardCooldown",
      value: TagBudgetAwardCooldown.encode(message).finish()
    };
  }
};
function createBaseEconomicState(): EconomicState {
  return {
    treasuryBalance: "",
    seasonMinted: "",
    seasonBurned: "",
    seasonInitiativeRewardsMinted: "",
    seasonStakingRewardsMinted: "",
    seasonInterimRewardsMinted: "",
    seasonTreasuryInflow: "",
    seasonTreasuryOutflow: "",
    seasonalPoolRemaining: "",
    seasonalPoolAccPerShare: "",
    seasonalPoolSeason: BigInt(0),
    seasonalPoolStartEpoch: BigInt(0),
    epochMintedEpoch: BigInt(0),
    epochMintedAmount: "",
    decayLastProcessedEpoch: BigInt(0)
  };
}
/**
 * EconomicState carries x/rep's token ledger across a genesis round trip.
 * Int and Dec values travel as strings so an absent field reads as zero rather
 * than as a malformed number.
 * @name EconomicState
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.EconomicState
 */
export const EconomicState = {
  typeUrl: "/sparkdream.rep.v1.EconomicState",
  encode(message: EconomicState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.treasuryBalance !== "") {
      writer.uint32(10).string(message.treasuryBalance);
    }
    if (message.seasonMinted !== "") {
      writer.uint32(18).string(message.seasonMinted);
    }
    if (message.seasonBurned !== "") {
      writer.uint32(26).string(message.seasonBurned);
    }
    if (message.seasonInitiativeRewardsMinted !== "") {
      writer.uint32(34).string(message.seasonInitiativeRewardsMinted);
    }
    if (message.seasonStakingRewardsMinted !== "") {
      writer.uint32(42).string(message.seasonStakingRewardsMinted);
    }
    if (message.seasonInterimRewardsMinted !== "") {
      writer.uint32(50).string(message.seasonInterimRewardsMinted);
    }
    if (message.seasonTreasuryInflow !== "") {
      writer.uint32(58).string(message.seasonTreasuryInflow);
    }
    if (message.seasonTreasuryOutflow !== "") {
      writer.uint32(66).string(message.seasonTreasuryOutflow);
    }
    if (message.seasonalPoolRemaining !== "") {
      writer.uint32(74).string(message.seasonalPoolRemaining);
    }
    if (message.seasonalPoolAccPerShare !== "") {
      writer.uint32(82).string(message.seasonalPoolAccPerShare);
    }
    if (message.seasonalPoolSeason !== BigInt(0)) {
      writer.uint32(88).uint64(message.seasonalPoolSeason);
    }
    if (message.seasonalPoolStartEpoch !== BigInt(0)) {
      writer.uint32(96).uint64(message.seasonalPoolStartEpoch);
    }
    if (message.epochMintedEpoch !== BigInt(0)) {
      writer.uint32(104).uint64(message.epochMintedEpoch);
    }
    if (message.epochMintedAmount !== "") {
      writer.uint32(114).string(message.epochMintedAmount);
    }
    if (message.decayLastProcessedEpoch !== BigInt(0)) {
      writer.uint32(120).uint64(message.decayLastProcessedEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EconomicState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEconomicState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.treasuryBalance = reader.string();
          break;
        case 2:
          message.seasonMinted = reader.string();
          break;
        case 3:
          message.seasonBurned = reader.string();
          break;
        case 4:
          message.seasonInitiativeRewardsMinted = reader.string();
          break;
        case 5:
          message.seasonStakingRewardsMinted = reader.string();
          break;
        case 6:
          message.seasonInterimRewardsMinted = reader.string();
          break;
        case 7:
          message.seasonTreasuryInflow = reader.string();
          break;
        case 8:
          message.seasonTreasuryOutflow = reader.string();
          break;
        case 9:
          message.seasonalPoolRemaining = reader.string();
          break;
        case 10:
          message.seasonalPoolAccPerShare = reader.string();
          break;
        case 11:
          message.seasonalPoolSeason = reader.uint64();
          break;
        case 12:
          message.seasonalPoolStartEpoch = reader.uint64();
          break;
        case 13:
          message.epochMintedEpoch = reader.uint64();
          break;
        case 14:
          message.epochMintedAmount = reader.string();
          break;
        case 15:
          message.decayLastProcessedEpoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EconomicState>): EconomicState {
    const message = createBaseEconomicState();
    message.treasuryBalance = object.treasuryBalance ?? "";
    message.seasonMinted = object.seasonMinted ?? "";
    message.seasonBurned = object.seasonBurned ?? "";
    message.seasonInitiativeRewardsMinted = object.seasonInitiativeRewardsMinted ?? "";
    message.seasonStakingRewardsMinted = object.seasonStakingRewardsMinted ?? "";
    message.seasonInterimRewardsMinted = object.seasonInterimRewardsMinted ?? "";
    message.seasonTreasuryInflow = object.seasonTreasuryInflow ?? "";
    message.seasonTreasuryOutflow = object.seasonTreasuryOutflow ?? "";
    message.seasonalPoolRemaining = object.seasonalPoolRemaining ?? "";
    message.seasonalPoolAccPerShare = object.seasonalPoolAccPerShare ?? "";
    message.seasonalPoolSeason = object.seasonalPoolSeason !== undefined && object.seasonalPoolSeason !== null ? BigInt(object.seasonalPoolSeason.toString()) : BigInt(0);
    message.seasonalPoolStartEpoch = object.seasonalPoolStartEpoch !== undefined && object.seasonalPoolStartEpoch !== null ? BigInt(object.seasonalPoolStartEpoch.toString()) : BigInt(0);
    message.epochMintedEpoch = object.epochMintedEpoch !== undefined && object.epochMintedEpoch !== null ? BigInt(object.epochMintedEpoch.toString()) : BigInt(0);
    message.epochMintedAmount = object.epochMintedAmount ?? "";
    message.decayLastProcessedEpoch = object.decayLastProcessedEpoch !== undefined && object.decayLastProcessedEpoch !== null ? BigInt(object.decayLastProcessedEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EconomicStateAmino): EconomicState {
    const message = createBaseEconomicState();
    if (object.treasury_balance !== undefined && object.treasury_balance !== null) {
      message.treasuryBalance = object.treasury_balance;
    }
    if (object.season_minted !== undefined && object.season_minted !== null) {
      message.seasonMinted = object.season_minted;
    }
    if (object.season_burned !== undefined && object.season_burned !== null) {
      message.seasonBurned = object.season_burned;
    }
    if (object.season_initiative_rewards_minted !== undefined && object.season_initiative_rewards_minted !== null) {
      message.seasonInitiativeRewardsMinted = object.season_initiative_rewards_minted;
    }
    if (object.season_staking_rewards_minted !== undefined && object.season_staking_rewards_minted !== null) {
      message.seasonStakingRewardsMinted = object.season_staking_rewards_minted;
    }
    if (object.season_interim_rewards_minted !== undefined && object.season_interim_rewards_minted !== null) {
      message.seasonInterimRewardsMinted = object.season_interim_rewards_minted;
    }
    if (object.season_treasury_inflow !== undefined && object.season_treasury_inflow !== null) {
      message.seasonTreasuryInflow = object.season_treasury_inflow;
    }
    if (object.season_treasury_outflow !== undefined && object.season_treasury_outflow !== null) {
      message.seasonTreasuryOutflow = object.season_treasury_outflow;
    }
    if (object.seasonal_pool_remaining !== undefined && object.seasonal_pool_remaining !== null) {
      message.seasonalPoolRemaining = object.seasonal_pool_remaining;
    }
    if (object.seasonal_pool_acc_per_share !== undefined && object.seasonal_pool_acc_per_share !== null) {
      message.seasonalPoolAccPerShare = object.seasonal_pool_acc_per_share;
    }
    if (object.seasonal_pool_season !== undefined && object.seasonal_pool_season !== null) {
      message.seasonalPoolSeason = BigInt(object.seasonal_pool_season);
    }
    if (object.seasonal_pool_start_epoch !== undefined && object.seasonal_pool_start_epoch !== null) {
      message.seasonalPoolStartEpoch = BigInt(object.seasonal_pool_start_epoch);
    }
    if (object.epoch_minted_epoch !== undefined && object.epoch_minted_epoch !== null) {
      message.epochMintedEpoch = BigInt(object.epoch_minted_epoch);
    }
    if (object.epoch_minted_amount !== undefined && object.epoch_minted_amount !== null) {
      message.epochMintedAmount = object.epoch_minted_amount;
    }
    if (object.decay_last_processed_epoch !== undefined && object.decay_last_processed_epoch !== null) {
      message.decayLastProcessedEpoch = BigInt(object.decay_last_processed_epoch);
    }
    return message;
  },
  toAmino(message: EconomicState): EconomicStateAmino {
    const obj: any = {};
    obj.treasury_balance = message.treasuryBalance === "" ? undefined : message.treasuryBalance;
    obj.season_minted = message.seasonMinted === "" ? undefined : message.seasonMinted;
    obj.season_burned = message.seasonBurned === "" ? undefined : message.seasonBurned;
    obj.season_initiative_rewards_minted = message.seasonInitiativeRewardsMinted === "" ? undefined : message.seasonInitiativeRewardsMinted;
    obj.season_staking_rewards_minted = message.seasonStakingRewardsMinted === "" ? undefined : message.seasonStakingRewardsMinted;
    obj.season_interim_rewards_minted = message.seasonInterimRewardsMinted === "" ? undefined : message.seasonInterimRewardsMinted;
    obj.season_treasury_inflow = message.seasonTreasuryInflow === "" ? undefined : message.seasonTreasuryInflow;
    obj.season_treasury_outflow = message.seasonTreasuryOutflow === "" ? undefined : message.seasonTreasuryOutflow;
    obj.seasonal_pool_remaining = message.seasonalPoolRemaining === "" ? undefined : message.seasonalPoolRemaining;
    obj.seasonal_pool_acc_per_share = message.seasonalPoolAccPerShare === "" ? undefined : message.seasonalPoolAccPerShare;
    obj.seasonal_pool_season = message.seasonalPoolSeason !== BigInt(0) ? message.seasonalPoolSeason?.toString() : undefined;
    obj.seasonal_pool_start_epoch = message.seasonalPoolStartEpoch !== BigInt(0) ? message.seasonalPoolStartEpoch?.toString() : undefined;
    obj.epoch_minted_epoch = message.epochMintedEpoch !== BigInt(0) ? message.epochMintedEpoch?.toString() : undefined;
    obj.epoch_minted_amount = message.epochMintedAmount === "" ? undefined : message.epochMintedAmount;
    obj.decay_last_processed_epoch = message.decayLastProcessedEpoch !== BigInt(0) ? message.decayLastProcessedEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EconomicStateAminoMsg): EconomicState {
    return EconomicState.fromAmino(object.value);
  },
  fromProtoMsg(message: EconomicStateProtoMsg): EconomicState {
    return EconomicState.decode(message.value);
  },
  toProto(message: EconomicState): Uint8Array {
    return EconomicState.encode(message).finish();
  },
  toProtoMsg(message: EconomicState): EconomicStateProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.EconomicState",
      value: EconomicState.encode(message).finish()
    };
  }
};
function createBaseGiftRecordEntry(): GiftRecordEntry {
  return {
    sender: "",
    recipient: "",
    record: undefined
  };
}
/**
 * GiftRecordEntry is one (sender, recipient) lifetime gift ledger, flattened
 * for genesis because the live collection is keyed by the pair.
 * @name GiftRecordEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.GiftRecordEntry
 */
export const GiftRecordEntry = {
  typeUrl: "/sparkdream.rep.v1.GiftRecordEntry",
  encode(message: GiftRecordEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.record !== undefined) {
      GiftRecord.encode(message.record, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GiftRecordEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGiftRecordEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.record = GiftRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GiftRecordEntry>): GiftRecordEntry {
    const message = createBaseGiftRecordEntry();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.record = object.record !== undefined && object.record !== null ? GiftRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: GiftRecordEntryAmino): GiftRecordEntry {
    const message = createBaseGiftRecordEntry();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.record !== undefined && object.record !== null) {
      message.record = GiftRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: GiftRecordEntry): GiftRecordEntryAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.record = message.record ? GiftRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: GiftRecordEntryAminoMsg): GiftRecordEntry {
    return GiftRecordEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: GiftRecordEntryProtoMsg): GiftRecordEntry {
    return GiftRecordEntry.decode(message.value);
  },
  toProto(message: GiftRecordEntry): Uint8Array {
    return GiftRecordEntry.encode(message).finish();
  },
  toProtoMsg(message: GiftRecordEntry): GiftRecordEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.GiftRecordEntry",
      value: GiftRecordEntry.encode(message).finish()
    };
  }
};
function createBaseRoleRewardDayFunding(): RoleRewardDayFunding {
  return {
    day: BigInt(0),
    amountFunded: ""
  };
}
/**
 * RoleRewardDayFunding is one UTC day's community-pool draw for the
 * bonded-role reward pools, ledgered so role_reward_daily_funding bounds a day
 * rather than a block.
 * @name RoleRewardDayFunding
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.RoleRewardDayFunding
 */
export const RoleRewardDayFunding = {
  typeUrl: "/sparkdream.rep.v1.RoleRewardDayFunding",
  encode(message: RoleRewardDayFunding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.day !== BigInt(0)) {
      writer.uint32(8).uint64(message.day);
    }
    if (message.amountFunded !== "") {
      writer.uint32(18).string(message.amountFunded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoleRewardDayFunding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleRewardDayFunding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.day = reader.uint64();
          break;
        case 2:
          message.amountFunded = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RoleRewardDayFunding>): RoleRewardDayFunding {
    const message = createBaseRoleRewardDayFunding();
    message.day = object.day !== undefined && object.day !== null ? BigInt(object.day.toString()) : BigInt(0);
    message.amountFunded = object.amountFunded ?? "";
    return message;
  },
  fromAmino(object: RoleRewardDayFundingAmino): RoleRewardDayFunding {
    const message = createBaseRoleRewardDayFunding();
    if (object.day !== undefined && object.day !== null) {
      message.day = BigInt(object.day);
    }
    if (object.amount_funded !== undefined && object.amount_funded !== null) {
      message.amountFunded = object.amount_funded;
    }
    return message;
  },
  toAmino(message: RoleRewardDayFunding): RoleRewardDayFundingAmino {
    const obj: any = {};
    obj.day = message.day !== BigInt(0) ? message.day?.toString() : undefined;
    obj.amount_funded = message.amountFunded === "" ? undefined : message.amountFunded;
    return obj;
  },
  fromAminoMsg(object: RoleRewardDayFundingAminoMsg): RoleRewardDayFunding {
    return RoleRewardDayFunding.fromAmino(object.value);
  },
  fromProtoMsg(message: RoleRewardDayFundingProtoMsg): RoleRewardDayFunding {
    return RoleRewardDayFunding.decode(message.value);
  },
  toProto(message: RoleRewardDayFunding): Uint8Array {
    return RoleRewardDayFunding.encode(message).finish();
  },
  toProtoMsg(message: RoleRewardDayFunding): RoleRewardDayFundingProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.RoleRewardDayFunding",
      value: RoleRewardDayFunding.encode(message).finish()
    };
  }
};
function createBaseContentInitiativeLink(): ContentInitiativeLink {
  return {
    initiativeId: BigInt(0),
    targetType: 0,
    targetId: BigInt(0)
  };
}
/**
 * ContentInitiativeLink defines a link between content and an initiative for conviction propagation.
 * @name ContentInitiativeLink
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ContentInitiativeLink
 */
export const ContentInitiativeLink = {
  typeUrl: "/sparkdream.rep.v1.ContentInitiativeLink",
  encode(message: ContentInitiativeLink, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    if (message.targetType !== 0) {
      writer.uint32(16).int32(message.targetType);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(24).uint64(message.targetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContentInitiativeLink {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentInitiativeLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiativeId = reader.uint64();
          break;
        case 2:
          message.targetType = reader.int32();
          break;
        case 3:
          message.targetId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContentInitiativeLink>): ContentInitiativeLink {
    const message = createBaseContentInitiativeLink();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.targetType = object.targetType ?? 0;
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ContentInitiativeLinkAmino): ContentInitiativeLink {
    const message = createBaseContentInitiativeLink();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    return message;
  },
  toAmino(message: ContentInitiativeLink): ContentInitiativeLinkAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContentInitiativeLinkAminoMsg): ContentInitiativeLink {
    return ContentInitiativeLink.fromAmino(object.value);
  },
  fromProtoMsg(message: ContentInitiativeLinkProtoMsg): ContentInitiativeLink {
    return ContentInitiativeLink.decode(message.value);
  },
  toProto(message: ContentInitiativeLink): Uint8Array {
    return ContentInitiativeLink.encode(message).finish();
  },
  toProtoMsg(message: ContentInitiativeLink): ContentInitiativeLinkProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.ContentInitiativeLink",
      value: ContentInitiativeLink.encode(message).finish()
    };
  }
};