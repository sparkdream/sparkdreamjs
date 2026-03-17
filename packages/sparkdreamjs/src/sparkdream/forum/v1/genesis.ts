//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Post, PostAmino } from "./post";
import { Category, CategoryAmino } from "./category";
import { Tag, TagAmino } from "../../common/v1/tag";
import { ReservedTag, ReservedTagAmino } from "../../common/v1/reserved_tag";
import { UserRateLimit, UserRateLimitAmino } from "./user_rate_limit";
import { UserReactionLimit, UserReactionLimitAmino } from "./user_reaction_limit";
import { SentinelActivity, SentinelActivityAmino } from "./sentinel_activity";
import { HideRecord, HideRecordAmino } from "./hide_record";
import { ThreadLockRecord, ThreadLockRecordAmino } from "./thread_lock_record";
import { ThreadMoveRecord, ThreadMoveRecordAmino } from "./thread_move_record";
import { PostFlag, PostFlagAmino } from "./post_flag";
import { Bounty, BountyAmino } from "./bounty";
import { TagBudget, TagBudgetAmino } from "./tag_budget";
import { TagBudgetAward, TagBudgetAwardAmino } from "./tag_budget_award";
import { ThreadMetadata, ThreadMetadataAmino } from "./thread_metadata";
import { ThreadFollow, ThreadFollowAmino } from "./thread_follow";
import { ThreadFollowCount, ThreadFollowCountAmino } from "./thread_follow_count";
import { ArchiveMetadata, ArchiveMetadataAmino } from "./archive_metadata";
import { TagReport, TagReportAmino } from "./tag_report";
import { MemberSalvationStatus, MemberSalvationStatusAmino } from "./member_salvation_status";
import { JuryParticipation, JuryParticipationAmino } from "./jury_participation";
import { MemberReport, MemberReportAmino } from "./member_report";
import { MemberWarning, MemberWarningAmino } from "./member_warning";
import { GovActionAppeal, GovActionAppealAmino } from "./gov_action_appeal";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the forum module's genesis state.
 * @name GenesisState
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  postMap: Post[];
  categoryMap: Category[];
  tagMap: Tag[];
  reservedTagMap: ReservedTag[];
  userRateLimitMap: UserRateLimit[];
  userReactionLimitMap: UserReactionLimit[];
  sentinelActivityMap: SentinelActivity[];
  hideRecordMap: HideRecord[];
  threadLockRecordMap: ThreadLockRecord[];
  threadMoveRecordMap: ThreadMoveRecord[];
  postFlagMap: PostFlag[];
  bountyList: Bounty[];
  bountyCount: bigint;
  tagBudgetList: TagBudget[];
  tagBudgetCount: bigint;
  tagBudgetAwardList: TagBudgetAward[];
  tagBudgetAwardCount: bigint;
  threadMetadataMap: ThreadMetadata[];
  threadFollowMap: ThreadFollow[];
  threadFollowCountMap: ThreadFollowCount[];
  archiveMetadataMap: ArchiveMetadata[];
  tagReportMap: TagReport[];
  memberSalvationStatusMap: MemberSalvationStatus[];
  juryParticipationMap: JuryParticipation[];
  memberReportMap: MemberReport[];
  memberWarningList: MemberWarning[];
  memberWarningCount: bigint;
  govActionAppealList: GovActionAppeal[];
  govActionAppealCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.forum.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the forum module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  post_map?: PostAmino[];
  category_map?: CategoryAmino[];
  tag_map?: TagAmino[];
  reserved_tag_map?: ReservedTagAmino[];
  user_rate_limit_map?: UserRateLimitAmino[];
  user_reaction_limit_map?: UserReactionLimitAmino[];
  sentinel_activity_map?: SentinelActivityAmino[];
  hide_record_map?: HideRecordAmino[];
  thread_lock_record_map?: ThreadLockRecordAmino[];
  thread_move_record_map?: ThreadMoveRecordAmino[];
  post_flag_map?: PostFlagAmino[];
  bounty_list?: BountyAmino[];
  bounty_count?: string;
  tag_budget_list?: TagBudgetAmino[];
  tag_budget_count?: string;
  tag_budget_award_list?: TagBudgetAwardAmino[];
  tag_budget_award_count?: string;
  thread_metadata_map?: ThreadMetadataAmino[];
  thread_follow_map?: ThreadFollowAmino[];
  thread_follow_count_map?: ThreadFollowCountAmino[];
  archive_metadata_map?: ArchiveMetadataAmino[];
  tag_report_map?: TagReportAmino[];
  member_salvation_status_map?: MemberSalvationStatusAmino[];
  jury_participation_map?: JuryParticipationAmino[];
  member_report_map?: MemberReportAmino[];
  member_warning_list?: MemberWarningAmino[];
  member_warning_count?: string;
  gov_action_appeal_list?: GovActionAppealAmino[];
  gov_action_appeal_count?: string;
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.forum.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    postMap: [],
    categoryMap: [],
    tagMap: [],
    reservedTagMap: [],
    userRateLimitMap: [],
    userReactionLimitMap: [],
    sentinelActivityMap: [],
    hideRecordMap: [],
    threadLockRecordMap: [],
    threadMoveRecordMap: [],
    postFlagMap: [],
    bountyList: [],
    bountyCount: BigInt(0),
    tagBudgetList: [],
    tagBudgetCount: BigInt(0),
    tagBudgetAwardList: [],
    tagBudgetAwardCount: BigInt(0),
    threadMetadataMap: [],
    threadFollowMap: [],
    threadFollowCountMap: [],
    archiveMetadataMap: [],
    tagReportMap: [],
    memberSalvationStatusMap: [],
    juryParticipationMap: [],
    memberReportMap: [],
    memberWarningList: [],
    memberWarningCount: BigInt(0),
    govActionAppealList: [],
    govActionAppealCount: BigInt(0)
  };
}
/**
 * GenesisState defines the forum module's genesis state.
 * @name GenesisState
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.forum.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.postMap) {
      Post.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.categoryMap) {
      Category.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.tagMap) {
      Tag.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reservedTagMap) {
      ReservedTag.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.userRateLimitMap) {
      UserRateLimit.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.userReactionLimitMap) {
      UserReactionLimit.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.sentinelActivityMap) {
      SentinelActivity.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.hideRecordMap) {
      HideRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.threadLockRecordMap) {
      ThreadLockRecord.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.threadMoveRecordMap) {
      ThreadMoveRecord.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.postFlagMap) {
      PostFlag.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.bountyList) {
      Bounty.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.bountyCount !== BigInt(0)) {
      writer.uint32(112).uint64(message.bountyCount);
    }
    for (const v of message.tagBudgetList) {
      TagBudget.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.tagBudgetCount !== BigInt(0)) {
      writer.uint32(128).uint64(message.tagBudgetCount);
    }
    for (const v of message.tagBudgetAwardList) {
      TagBudgetAward.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.tagBudgetAwardCount !== BigInt(0)) {
      writer.uint32(144).uint64(message.tagBudgetAwardCount);
    }
    for (const v of message.threadMetadataMap) {
      ThreadMetadata.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.threadFollowMap) {
      ThreadFollow.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.threadFollowCountMap) {
      ThreadFollowCount.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.archiveMetadataMap) {
      ArchiveMetadata.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.tagReportMap) {
      TagReport.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.memberSalvationStatusMap) {
      MemberSalvationStatus.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    for (const v of message.juryParticipationMap) {
      JuryParticipation.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    for (const v of message.memberReportMap) {
      MemberReport.encode(v!, writer.uint32(218).fork()).ldelim();
    }
    for (const v of message.memberWarningList) {
      MemberWarning.encode(v!, writer.uint32(226).fork()).ldelim();
    }
    if (message.memberWarningCount !== BigInt(0)) {
      writer.uint32(232).uint64(message.memberWarningCount);
    }
    for (const v of message.govActionAppealList) {
      GovActionAppeal.encode(v!, writer.uint32(242).fork()).ldelim();
    }
    if (message.govActionAppealCount !== BigInt(0)) {
      writer.uint32(248).uint64(message.govActionAppealCount);
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
          message.postMap.push(Post.decode(reader, reader.uint32()));
          break;
        case 3:
          message.categoryMap.push(Category.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tagMap.push(Tag.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reservedTagMap.push(ReservedTag.decode(reader, reader.uint32()));
          break;
        case 6:
          message.userRateLimitMap.push(UserRateLimit.decode(reader, reader.uint32()));
          break;
        case 7:
          message.userReactionLimitMap.push(UserReactionLimit.decode(reader, reader.uint32()));
          break;
        case 8:
          message.sentinelActivityMap.push(SentinelActivity.decode(reader, reader.uint32()));
          break;
        case 9:
          message.hideRecordMap.push(HideRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.threadLockRecordMap.push(ThreadLockRecord.decode(reader, reader.uint32()));
          break;
        case 11:
          message.threadMoveRecordMap.push(ThreadMoveRecord.decode(reader, reader.uint32()));
          break;
        case 12:
          message.postFlagMap.push(PostFlag.decode(reader, reader.uint32()));
          break;
        case 13:
          message.bountyList.push(Bounty.decode(reader, reader.uint32()));
          break;
        case 14:
          message.bountyCount = reader.uint64();
          break;
        case 15:
          message.tagBudgetList.push(TagBudget.decode(reader, reader.uint32()));
          break;
        case 16:
          message.tagBudgetCount = reader.uint64();
          break;
        case 17:
          message.tagBudgetAwardList.push(TagBudgetAward.decode(reader, reader.uint32()));
          break;
        case 18:
          message.tagBudgetAwardCount = reader.uint64();
          break;
        case 19:
          message.threadMetadataMap.push(ThreadMetadata.decode(reader, reader.uint32()));
          break;
        case 20:
          message.threadFollowMap.push(ThreadFollow.decode(reader, reader.uint32()));
          break;
        case 21:
          message.threadFollowCountMap.push(ThreadFollowCount.decode(reader, reader.uint32()));
          break;
        case 23:
          message.archiveMetadataMap.push(ArchiveMetadata.decode(reader, reader.uint32()));
          break;
        case 24:
          message.tagReportMap.push(TagReport.decode(reader, reader.uint32()));
          break;
        case 25:
          message.memberSalvationStatusMap.push(MemberSalvationStatus.decode(reader, reader.uint32()));
          break;
        case 26:
          message.juryParticipationMap.push(JuryParticipation.decode(reader, reader.uint32()));
          break;
        case 27:
          message.memberReportMap.push(MemberReport.decode(reader, reader.uint32()));
          break;
        case 28:
          message.memberWarningList.push(MemberWarning.decode(reader, reader.uint32()));
          break;
        case 29:
          message.memberWarningCount = reader.uint64();
          break;
        case 30:
          message.govActionAppealList.push(GovActionAppeal.decode(reader, reader.uint32()));
          break;
        case 31:
          message.govActionAppealCount = reader.uint64();
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
    message.postMap = object.postMap?.map(e => Post.fromPartial(e)) || [];
    message.categoryMap = object.categoryMap?.map(e => Category.fromPartial(e)) || [];
    message.tagMap = object.tagMap?.map(e => Tag.fromPartial(e)) || [];
    message.reservedTagMap = object.reservedTagMap?.map(e => ReservedTag.fromPartial(e)) || [];
    message.userRateLimitMap = object.userRateLimitMap?.map(e => UserRateLimit.fromPartial(e)) || [];
    message.userReactionLimitMap = object.userReactionLimitMap?.map(e => UserReactionLimit.fromPartial(e)) || [];
    message.sentinelActivityMap = object.sentinelActivityMap?.map(e => SentinelActivity.fromPartial(e)) || [];
    message.hideRecordMap = object.hideRecordMap?.map(e => HideRecord.fromPartial(e)) || [];
    message.threadLockRecordMap = object.threadLockRecordMap?.map(e => ThreadLockRecord.fromPartial(e)) || [];
    message.threadMoveRecordMap = object.threadMoveRecordMap?.map(e => ThreadMoveRecord.fromPartial(e)) || [];
    message.postFlagMap = object.postFlagMap?.map(e => PostFlag.fromPartial(e)) || [];
    message.bountyList = object.bountyList?.map(e => Bounty.fromPartial(e)) || [];
    message.bountyCount = object.bountyCount !== undefined && object.bountyCount !== null ? BigInt(object.bountyCount.toString()) : BigInt(0);
    message.tagBudgetList = object.tagBudgetList?.map(e => TagBudget.fromPartial(e)) || [];
    message.tagBudgetCount = object.tagBudgetCount !== undefined && object.tagBudgetCount !== null ? BigInt(object.tagBudgetCount.toString()) : BigInt(0);
    message.tagBudgetAwardList = object.tagBudgetAwardList?.map(e => TagBudgetAward.fromPartial(e)) || [];
    message.tagBudgetAwardCount = object.tagBudgetAwardCount !== undefined && object.tagBudgetAwardCount !== null ? BigInt(object.tagBudgetAwardCount.toString()) : BigInt(0);
    message.threadMetadataMap = object.threadMetadataMap?.map(e => ThreadMetadata.fromPartial(e)) || [];
    message.threadFollowMap = object.threadFollowMap?.map(e => ThreadFollow.fromPartial(e)) || [];
    message.threadFollowCountMap = object.threadFollowCountMap?.map(e => ThreadFollowCount.fromPartial(e)) || [];
    message.archiveMetadataMap = object.archiveMetadataMap?.map(e => ArchiveMetadata.fromPartial(e)) || [];
    message.tagReportMap = object.tagReportMap?.map(e => TagReport.fromPartial(e)) || [];
    message.memberSalvationStatusMap = object.memberSalvationStatusMap?.map(e => MemberSalvationStatus.fromPartial(e)) || [];
    message.juryParticipationMap = object.juryParticipationMap?.map(e => JuryParticipation.fromPartial(e)) || [];
    message.memberReportMap = object.memberReportMap?.map(e => MemberReport.fromPartial(e)) || [];
    message.memberWarningList = object.memberWarningList?.map(e => MemberWarning.fromPartial(e)) || [];
    message.memberWarningCount = object.memberWarningCount !== undefined && object.memberWarningCount !== null ? BigInt(object.memberWarningCount.toString()) : BigInt(0);
    message.govActionAppealList = object.govActionAppealList?.map(e => GovActionAppeal.fromPartial(e)) || [];
    message.govActionAppealCount = object.govActionAppealCount !== undefined && object.govActionAppealCount !== null ? BigInt(object.govActionAppealCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.postMap = object.post_map?.map(e => Post.fromAmino(e)) || [];
    message.categoryMap = object.category_map?.map(e => Category.fromAmino(e)) || [];
    message.tagMap = object.tag_map?.map(e => Tag.fromAmino(e)) || [];
    message.reservedTagMap = object.reserved_tag_map?.map(e => ReservedTag.fromAmino(e)) || [];
    message.userRateLimitMap = object.user_rate_limit_map?.map(e => UserRateLimit.fromAmino(e)) || [];
    message.userReactionLimitMap = object.user_reaction_limit_map?.map(e => UserReactionLimit.fromAmino(e)) || [];
    message.sentinelActivityMap = object.sentinel_activity_map?.map(e => SentinelActivity.fromAmino(e)) || [];
    message.hideRecordMap = object.hide_record_map?.map(e => HideRecord.fromAmino(e)) || [];
    message.threadLockRecordMap = object.thread_lock_record_map?.map(e => ThreadLockRecord.fromAmino(e)) || [];
    message.threadMoveRecordMap = object.thread_move_record_map?.map(e => ThreadMoveRecord.fromAmino(e)) || [];
    message.postFlagMap = object.post_flag_map?.map(e => PostFlag.fromAmino(e)) || [];
    message.bountyList = object.bounty_list?.map(e => Bounty.fromAmino(e)) || [];
    if (object.bounty_count !== undefined && object.bounty_count !== null) {
      message.bountyCount = BigInt(object.bounty_count);
    }
    message.tagBudgetList = object.tag_budget_list?.map(e => TagBudget.fromAmino(e)) || [];
    if (object.tag_budget_count !== undefined && object.tag_budget_count !== null) {
      message.tagBudgetCount = BigInt(object.tag_budget_count);
    }
    message.tagBudgetAwardList = object.tag_budget_award_list?.map(e => TagBudgetAward.fromAmino(e)) || [];
    if (object.tag_budget_award_count !== undefined && object.tag_budget_award_count !== null) {
      message.tagBudgetAwardCount = BigInt(object.tag_budget_award_count);
    }
    message.threadMetadataMap = object.thread_metadata_map?.map(e => ThreadMetadata.fromAmino(e)) || [];
    message.threadFollowMap = object.thread_follow_map?.map(e => ThreadFollow.fromAmino(e)) || [];
    message.threadFollowCountMap = object.thread_follow_count_map?.map(e => ThreadFollowCount.fromAmino(e)) || [];
    message.archiveMetadataMap = object.archive_metadata_map?.map(e => ArchiveMetadata.fromAmino(e)) || [];
    message.tagReportMap = object.tag_report_map?.map(e => TagReport.fromAmino(e)) || [];
    message.memberSalvationStatusMap = object.member_salvation_status_map?.map(e => MemberSalvationStatus.fromAmino(e)) || [];
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
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.postMap) {
      obj.post_map = message.postMap.map(e => e ? Post.toAmino(e) : undefined);
    } else {
      obj.post_map = message.postMap;
    }
    if (message.categoryMap) {
      obj.category_map = message.categoryMap.map(e => e ? Category.toAmino(e) : undefined);
    } else {
      obj.category_map = message.categoryMap;
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
    if (message.userRateLimitMap) {
      obj.user_rate_limit_map = message.userRateLimitMap.map(e => e ? UserRateLimit.toAmino(e) : undefined);
    } else {
      obj.user_rate_limit_map = message.userRateLimitMap;
    }
    if (message.userReactionLimitMap) {
      obj.user_reaction_limit_map = message.userReactionLimitMap.map(e => e ? UserReactionLimit.toAmino(e) : undefined);
    } else {
      obj.user_reaction_limit_map = message.userReactionLimitMap;
    }
    if (message.sentinelActivityMap) {
      obj.sentinel_activity_map = message.sentinelActivityMap.map(e => e ? SentinelActivity.toAmino(e) : undefined);
    } else {
      obj.sentinel_activity_map = message.sentinelActivityMap;
    }
    if (message.hideRecordMap) {
      obj.hide_record_map = message.hideRecordMap.map(e => e ? HideRecord.toAmino(e) : undefined);
    } else {
      obj.hide_record_map = message.hideRecordMap;
    }
    if (message.threadLockRecordMap) {
      obj.thread_lock_record_map = message.threadLockRecordMap.map(e => e ? ThreadLockRecord.toAmino(e) : undefined);
    } else {
      obj.thread_lock_record_map = message.threadLockRecordMap;
    }
    if (message.threadMoveRecordMap) {
      obj.thread_move_record_map = message.threadMoveRecordMap.map(e => e ? ThreadMoveRecord.toAmino(e) : undefined);
    } else {
      obj.thread_move_record_map = message.threadMoveRecordMap;
    }
    if (message.postFlagMap) {
      obj.post_flag_map = message.postFlagMap.map(e => e ? PostFlag.toAmino(e) : undefined);
    } else {
      obj.post_flag_map = message.postFlagMap;
    }
    if (message.bountyList) {
      obj.bounty_list = message.bountyList.map(e => e ? Bounty.toAmino(e) : undefined);
    } else {
      obj.bounty_list = message.bountyList;
    }
    obj.bounty_count = message.bountyCount !== BigInt(0) ? message.bountyCount?.toString() : undefined;
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
    if (message.threadMetadataMap) {
      obj.thread_metadata_map = message.threadMetadataMap.map(e => e ? ThreadMetadata.toAmino(e) : undefined);
    } else {
      obj.thread_metadata_map = message.threadMetadataMap;
    }
    if (message.threadFollowMap) {
      obj.thread_follow_map = message.threadFollowMap.map(e => e ? ThreadFollow.toAmino(e) : undefined);
    } else {
      obj.thread_follow_map = message.threadFollowMap;
    }
    if (message.threadFollowCountMap) {
      obj.thread_follow_count_map = message.threadFollowCountMap.map(e => e ? ThreadFollowCount.toAmino(e) : undefined);
    } else {
      obj.thread_follow_count_map = message.threadFollowCountMap;
    }
    if (message.archiveMetadataMap) {
      obj.archive_metadata_map = message.archiveMetadataMap.map(e => e ? ArchiveMetadata.toAmino(e) : undefined);
    } else {
      obj.archive_metadata_map = message.archiveMetadataMap;
    }
    if (message.tagReportMap) {
      obj.tag_report_map = message.tagReportMap.map(e => e ? TagReport.toAmino(e) : undefined);
    } else {
      obj.tag_report_map = message.tagReportMap;
    }
    if (message.memberSalvationStatusMap) {
      obj.member_salvation_status_map = message.memberSalvationStatusMap.map(e => e ? MemberSalvationStatus.toAmino(e) : undefined);
    } else {
      obj.member_salvation_status_map = message.memberSalvationStatusMap;
    }
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
      typeUrl: "/sparkdream.forum.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};