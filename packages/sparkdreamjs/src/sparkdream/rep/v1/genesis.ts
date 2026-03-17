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
import { InterimTemplate, InterimTemplateAmino } from "./interim_template";
import { ContentChallenge, ContentChallengeAmino } from "./content_challenge";
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
  interimTemplateMap: InterimTemplate[];
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
  interim_template_map?: InterimTemplateAmino[];
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
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.rep.v1.GenesisState";
  value: GenesisStateAmino;
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
    interimTemplateMap: [],
    memberStakePoolList: [],
    tagStakePoolList: [],
    projectStakeInfoList: [],
    contentChallengeList: [],
    contentChallengeCount: BigInt(0),
    contentInitiativeLinks: []
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
    for (const v of message.interimTemplateMap) {
      InterimTemplate.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.memberStakePoolList) {
      MemberStakePool.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.tagStakePoolList) {
      TagStakePool.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.projectStakeInfoList) {
      ProjectStakeInfo.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.contentChallengeList) {
      ContentChallenge.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.contentChallengeCount !== BigInt(0)) {
      writer.uint32(176).uint64(message.contentChallengeCount);
    }
    for (const v of message.contentInitiativeLinks) {
      ContentInitiativeLink.encode(v!, writer.uint32(186).fork()).ldelim();
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
          message.interimTemplateMap.push(InterimTemplate.decode(reader, reader.uint32()));
          break;
        case 18:
          message.memberStakePoolList.push(MemberStakePool.decode(reader, reader.uint32()));
          break;
        case 19:
          message.tagStakePoolList.push(TagStakePool.decode(reader, reader.uint32()));
          break;
        case 20:
          message.projectStakeInfoList.push(ProjectStakeInfo.decode(reader, reader.uint32()));
          break;
        case 21:
          message.contentChallengeList.push(ContentChallenge.decode(reader, reader.uint32()));
          break;
        case 22:
          message.contentChallengeCount = reader.uint64();
          break;
        case 23:
          message.contentInitiativeLinks.push(ContentInitiativeLink.decode(reader, reader.uint32()));
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
    message.interimTemplateMap = object.interimTemplateMap?.map(e => InterimTemplate.fromPartial(e)) || [];
    message.memberStakePoolList = object.memberStakePoolList?.map(e => MemberStakePool.fromPartial(e)) || [];
    message.tagStakePoolList = object.tagStakePoolList?.map(e => TagStakePool.fromPartial(e)) || [];
    message.projectStakeInfoList = object.projectStakeInfoList?.map(e => ProjectStakeInfo.fromPartial(e)) || [];
    message.contentChallengeList = object.contentChallengeList?.map(e => ContentChallenge.fromPartial(e)) || [];
    message.contentChallengeCount = object.contentChallengeCount !== undefined && object.contentChallengeCount !== null ? BigInt(object.contentChallengeCount.toString()) : BigInt(0);
    message.contentInitiativeLinks = object.contentInitiativeLinks?.map(e => ContentInitiativeLink.fromPartial(e)) || [];
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
    message.interimTemplateMap = object.interim_template_map?.map(e => InterimTemplate.fromAmino(e)) || [];
    message.memberStakePoolList = object.member_stake_pool_list?.map(e => MemberStakePool.fromAmino(e)) || [];
    message.tagStakePoolList = object.tag_stake_pool_list?.map(e => TagStakePool.fromAmino(e)) || [];
    message.projectStakeInfoList = object.project_stake_info_list?.map(e => ProjectStakeInfo.fromAmino(e)) || [];
    message.contentChallengeList = object.content_challenge_list?.map(e => ContentChallenge.fromAmino(e)) || [];
    if (object.content_challenge_count !== undefined && object.content_challenge_count !== null) {
      message.contentChallengeCount = BigInt(object.content_challenge_count);
    }
    message.contentInitiativeLinks = object.content_initiative_links?.map(e => ContentInitiativeLink.fromAmino(e)) || [];
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
    if (message.interimTemplateMap) {
      obj.interim_template_map = message.interimTemplateMap.map(e => e ? InterimTemplate.toAmino(e) : undefined);
    } else {
      obj.interim_template_map = message.interimTemplateMap;
    }
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