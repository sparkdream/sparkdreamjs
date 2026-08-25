//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Member, MemberAmino } from "./member";
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
import { MemberReport, MemberReportAmino } from "./member_report";
import { MemberWarning, MemberWarningAmino } from "./member_warning";
import { GovActionAppeal, GovActionAppealAmino } from "./gov_action_appeal";
import { BondedRole, BondedRoleAmino, BondedRoleConfig, BondedRoleConfigAmino } from "./bonded_role";
import { RoleActivity, RoleActivityAmino } from "./role_activity";
import { InitiativeReview, InitiativeReviewAmino } from "./initiative_review";
import { ReviewBounty, ReviewBountyAmino } from "./review_bounty";
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
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.rep.v1.GenesisState";
  value: GenesisStateAmino;
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
    reviewBountyList: []
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