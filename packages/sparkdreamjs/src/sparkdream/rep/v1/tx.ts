//@ts-nocheck
import { Params, ParamsAmino, RepOperationalParams, RepOperationalParamsAmino } from "./params";
import { InterimType, InterimComplexity } from "./interim";
import { ProjectCategory } from "./project";
import { CriteriaVote, CriteriaVoteAmino, Verdict } from "./jury_review";
import { StakeTargetType } from "./stake";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
export enum TransferPurpose {
  TRANSFER_PURPOSE_TIP = 0,
  TRANSFER_PURPOSE_GIFT = 1,
  TRANSFER_PURPOSE_BOUNTY = 2,
  UNRECOGNIZED = -1,
}
export const TransferPurposeAmino = TransferPurpose;
export function transferPurposeFromJSON(object: any): TransferPurpose {
  switch (object) {
    case 0:
    case "TRANSFER_PURPOSE_TIP":
      return TransferPurpose.TRANSFER_PURPOSE_TIP;
    case 1:
    case "TRANSFER_PURPOSE_GIFT":
      return TransferPurpose.TRANSFER_PURPOSE_GIFT;
    case 2:
    case "TRANSFER_PURPOSE_BOUNTY":
      return TransferPurpose.TRANSFER_PURPOSE_BOUNTY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferPurpose.UNRECOGNIZED;
  }
}
export function transferPurposeToJSON(object: TransferPurpose): string {
  switch (object) {
    case TransferPurpose.TRANSFER_PURPOSE_TIP:
      return "TRANSFER_PURPOSE_TIP";
    case TransferPurpose.TRANSFER_PURPOSE_GIFT:
      return "TRANSFER_PURPOSE_GIFT";
    case TransferPurpose.TRANSFER_PURPOSE_BOUNTY:
      return "TRANSFER_PURPOSE_BOUNTY";
    case TransferPurpose.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/rep/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * @name MsgUpdateOperationalParams
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParams {
  /**
   * authority is the address that controls operational params
   * (committee/council authority).
   */
  authority: string;
  /**
   * operational_params defines the operational parameters to update.
   */
  operationalParams: RepOperationalParams;
}
export interface MsgUpdateOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgUpdateOperationalParams";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * @name MsgUpdateOperationalParamsAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParamsAmino {
  /**
   * authority is the address that controls operational params
   * (committee/council authority).
   */
  authority?: string;
  /**
   * operational_params defines the operational parameters to update.
   */
  operational_params: RepOperationalParamsAmino;
}
export interface MsgUpdateOperationalParamsAminoMsg {
  type: "sparkdream/x/rep/MsgUpdateOperationalParams";
  value: MsgUpdateOperationalParamsAmino;
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for
 * executing a MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponse {}
export interface MsgUpdateOperationalParamsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgUpdateOperationalParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for
 * executing a MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponseAmino {}
export interface MsgUpdateOperationalParamsResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgUpdateOperationalParamsResponse";
  value: MsgUpdateOperationalParamsResponseAmino;
}
/**
 * MsgInviteMember defines the MsgInviteMember message.
 * @name MsgInviteMember
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgInviteMember
 */
export interface MsgInviteMember {
  inviter: string;
  inviteeAddress: string;
  stakedDream: string;
  vouchedTags: string[];
}
export interface MsgInviteMemberProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgInviteMember";
  value: Uint8Array;
}
/**
 * MsgInviteMember defines the MsgInviteMember message.
 * @name MsgInviteMemberAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgInviteMember
 */
export interface MsgInviteMemberAmino {
  inviter?: string;
  invitee_address?: string;
  staked_dream?: string;
  vouched_tags?: string[];
}
export interface MsgInviteMemberAminoMsg {
  type: "/sparkdream.rep.v1.MsgInviteMember";
  value: MsgInviteMemberAmino;
}
/**
 * MsgInviteMemberResponse defines the MsgInviteMemberResponse message.
 * @name MsgInviteMemberResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgInviteMemberResponse
 */
export interface MsgInviteMemberResponse {}
export interface MsgInviteMemberResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgInviteMemberResponse";
  value: Uint8Array;
}
/**
 * MsgInviteMemberResponse defines the MsgInviteMemberResponse message.
 * @name MsgInviteMemberResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgInviteMemberResponse
 */
export interface MsgInviteMemberResponseAmino {}
export interface MsgInviteMemberResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgInviteMemberResponse";
  value: MsgInviteMemberResponseAmino;
}
/**
 * MsgAcceptInvitation defines the MsgAcceptInvitation message.
 * @name MsgAcceptInvitation
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAcceptInvitation
 */
export interface MsgAcceptInvitation {
  invitee: string;
  invitationId: bigint;
}
export interface MsgAcceptInvitationProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAcceptInvitation";
  value: Uint8Array;
}
/**
 * MsgAcceptInvitation defines the MsgAcceptInvitation message.
 * @name MsgAcceptInvitationAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAcceptInvitation
 */
export interface MsgAcceptInvitationAmino {
  invitee?: string;
  invitation_id?: string;
}
export interface MsgAcceptInvitationAminoMsg {
  type: "/sparkdream.rep.v1.MsgAcceptInvitation";
  value: MsgAcceptInvitationAmino;
}
/**
 * MsgAcceptInvitationResponse defines the MsgAcceptInvitationResponse message.
 * @name MsgAcceptInvitationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAcceptInvitationResponse
 */
export interface MsgAcceptInvitationResponse {}
export interface MsgAcceptInvitationResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAcceptInvitationResponse";
  value: Uint8Array;
}
/**
 * MsgAcceptInvitationResponse defines the MsgAcceptInvitationResponse message.
 * @name MsgAcceptInvitationResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAcceptInvitationResponse
 */
export interface MsgAcceptInvitationResponseAmino {}
export interface MsgAcceptInvitationResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgAcceptInvitationResponse";
  value: MsgAcceptInvitationResponseAmino;
}
/**
 * MsgTransferDream defines the MsgTransferDream message.
 * @name MsgTransferDream
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgTransferDream
 */
export interface MsgTransferDream {
  sender: string;
  recipient: string;
  amount: string;
  purpose: TransferPurpose;
  reference: string;
}
export interface MsgTransferDreamProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgTransferDream";
  value: Uint8Array;
}
/**
 * MsgTransferDream defines the MsgTransferDream message.
 * @name MsgTransferDreamAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgTransferDream
 */
export interface MsgTransferDreamAmino {
  sender?: string;
  recipient?: string;
  amount?: string;
  purpose?: TransferPurpose;
  reference?: string;
}
export interface MsgTransferDreamAminoMsg {
  type: "/sparkdream.rep.v1.MsgTransferDream";
  value: MsgTransferDreamAmino;
}
/**
 * MsgTransferDreamResponse defines the MsgTransferDreamResponse message.
 * @name MsgTransferDreamResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgTransferDreamResponse
 */
export interface MsgTransferDreamResponse {}
export interface MsgTransferDreamResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgTransferDreamResponse";
  value: Uint8Array;
}
/**
 * MsgTransferDreamResponse defines the MsgTransferDreamResponse message.
 * @name MsgTransferDreamResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgTransferDreamResponse
 */
export interface MsgTransferDreamResponseAmino {}
export interface MsgTransferDreamResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgTransferDreamResponse";
  value: MsgTransferDreamResponseAmino;
}
/**
 * MsgCreateInterim defines the MsgCreateInterim message.
 * @name MsgCreateInterim
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateInterim
 */
export interface MsgCreateInterim {
  creator: string;
  interimType: InterimType;
  referenceId: bigint;
  referenceType: string;
  complexity: InterimComplexity;
  deadline: bigint;
}
export interface MsgCreateInterimProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCreateInterim";
  value: Uint8Array;
}
/**
 * MsgCreateInterim defines the MsgCreateInterim message.
 * @name MsgCreateInterimAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateInterim
 */
export interface MsgCreateInterimAmino {
  creator?: string;
  interim_type?: InterimType;
  reference_id?: string;
  reference_type?: string;
  complexity?: InterimComplexity;
  deadline?: string;
}
export interface MsgCreateInterimAminoMsg {
  type: "/sparkdream.rep.v1.MsgCreateInterim";
  value: MsgCreateInterimAmino;
}
/**
 * MsgCreateInterimResponse defines the MsgCreateInterimResponse message.
 * @name MsgCreateInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateInterimResponse
 */
export interface MsgCreateInterimResponse {}
export interface MsgCreateInterimResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCreateInterimResponse";
  value: Uint8Array;
}
/**
 * MsgCreateInterimResponse defines the MsgCreateInterimResponse message.
 * @name MsgCreateInterimResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateInterimResponse
 */
export interface MsgCreateInterimResponseAmino {}
export interface MsgCreateInterimResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgCreateInterimResponse";
  value: MsgCreateInterimResponseAmino;
}
/**
 * MsgAssignInterim defines the MsgAssignInterim message.
 * @name MsgAssignInterim
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAssignInterim
 */
export interface MsgAssignInterim {
  creator: string;
  interimId: bigint;
  assignee: string;
}
export interface MsgAssignInterimProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAssignInterim";
  value: Uint8Array;
}
/**
 * MsgAssignInterim defines the MsgAssignInterim message.
 * @name MsgAssignInterimAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAssignInterim
 */
export interface MsgAssignInterimAmino {
  creator?: string;
  interim_id?: string;
  assignee?: string;
}
export interface MsgAssignInterimAminoMsg {
  type: "/sparkdream.rep.v1.MsgAssignInterim";
  value: MsgAssignInterimAmino;
}
/**
 * MsgAssignInterimResponse defines the MsgAssignInterimResponse message.
 * @name MsgAssignInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAssignInterimResponse
 */
export interface MsgAssignInterimResponse {}
export interface MsgAssignInterimResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAssignInterimResponse";
  value: Uint8Array;
}
/**
 * MsgAssignInterimResponse defines the MsgAssignInterimResponse message.
 * @name MsgAssignInterimResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAssignInterimResponse
 */
export interface MsgAssignInterimResponseAmino {}
export interface MsgAssignInterimResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgAssignInterimResponse";
  value: MsgAssignInterimResponseAmino;
}
/**
 * MsgSubmitInterimWork defines the MsgSubmitInterimWork message.
 * @name MsgSubmitInterimWork
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInterimWork
 */
export interface MsgSubmitInterimWork {
  creator: string;
  interimId: bigint;
  deliverableUri: string;
  comments: string;
}
export interface MsgSubmitInterimWorkProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitInterimWork";
  value: Uint8Array;
}
/**
 * MsgSubmitInterimWork defines the MsgSubmitInterimWork message.
 * @name MsgSubmitInterimWorkAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInterimWork
 */
export interface MsgSubmitInterimWorkAmino {
  creator?: string;
  interim_id?: string;
  deliverable_uri?: string;
  comments?: string;
}
export interface MsgSubmitInterimWorkAminoMsg {
  type: "/sparkdream.rep.v1.MsgSubmitInterimWork";
  value: MsgSubmitInterimWorkAmino;
}
/**
 * MsgSubmitInterimWorkResponse defines the MsgSubmitInterimWorkResponse message.
 * @name MsgSubmitInterimWorkResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInterimWorkResponse
 */
export interface MsgSubmitInterimWorkResponse {}
export interface MsgSubmitInterimWorkResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitInterimWorkResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitInterimWorkResponse defines the MsgSubmitInterimWorkResponse message.
 * @name MsgSubmitInterimWorkResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInterimWorkResponse
 */
export interface MsgSubmitInterimWorkResponseAmino {}
export interface MsgSubmitInterimWorkResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgSubmitInterimWorkResponse";
  value: MsgSubmitInterimWorkResponseAmino;
}
/**
 * MsgApproveInterim defines the MsgApproveInterim message.
 * @name MsgApproveInterim
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInterim
 */
export interface MsgApproveInterim {
  creator: string;
  interimId: bigint;
  approved: boolean;
  comments: string;
}
export interface MsgApproveInterimProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgApproveInterim";
  value: Uint8Array;
}
/**
 * MsgApproveInterim defines the MsgApproveInterim message.
 * @name MsgApproveInterimAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInterim
 */
export interface MsgApproveInterimAmino {
  creator?: string;
  interim_id?: string;
  approved?: boolean;
  comments?: string;
}
export interface MsgApproveInterimAminoMsg {
  type: "/sparkdream.rep.v1.MsgApproveInterim";
  value: MsgApproveInterimAmino;
}
/**
 * MsgApproveInterimResponse defines the MsgApproveInterimResponse message.
 * @name MsgApproveInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInterimResponse
 */
export interface MsgApproveInterimResponse {}
export interface MsgApproveInterimResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgApproveInterimResponse";
  value: Uint8Array;
}
/**
 * MsgApproveInterimResponse defines the MsgApproveInterimResponse message.
 * @name MsgApproveInterimResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInterimResponse
 */
export interface MsgApproveInterimResponseAmino {}
export interface MsgApproveInterimResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgApproveInterimResponse";
  value: MsgApproveInterimResponseAmino;
}
/**
 * MsgAbandonInterim defines the MsgAbandonInterim message.
 * @name MsgAbandonInterim
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAbandonInterim
 */
export interface MsgAbandonInterim {
  creator: string;
  interimId: bigint;
  reason: string;
}
export interface MsgAbandonInterimProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAbandonInterim";
  value: Uint8Array;
}
/**
 * MsgAbandonInterim defines the MsgAbandonInterim message.
 * @name MsgAbandonInterimAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAbandonInterim
 */
export interface MsgAbandonInterimAmino {
  creator?: string;
  interim_id?: string;
  reason?: string;
}
export interface MsgAbandonInterimAminoMsg {
  type: "/sparkdream.rep.v1.MsgAbandonInterim";
  value: MsgAbandonInterimAmino;
}
/**
 * MsgAbandonInterimResponse defines the MsgAbandonInterimResponse message.
 * @name MsgAbandonInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAbandonInterimResponse
 */
export interface MsgAbandonInterimResponse {}
export interface MsgAbandonInterimResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAbandonInterimResponse";
  value: Uint8Array;
}
/**
 * MsgAbandonInterimResponse defines the MsgAbandonInterimResponse message.
 * @name MsgAbandonInterimResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAbandonInterimResponse
 */
export interface MsgAbandonInterimResponseAmino {}
export interface MsgAbandonInterimResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgAbandonInterimResponse";
  value: MsgAbandonInterimResponseAmino;
}
/**
 * MsgCompleteInterim defines the MsgCompleteInterim message.
 * @name MsgCompleteInterim
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompleteInterim
 */
export interface MsgCompleteInterim {
  creator: string;
  interimId: bigint;
  completionNotes: string;
}
export interface MsgCompleteInterimProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCompleteInterim";
  value: Uint8Array;
}
/**
 * MsgCompleteInterim defines the MsgCompleteInterim message.
 * @name MsgCompleteInterimAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompleteInterim
 */
export interface MsgCompleteInterimAmino {
  creator?: string;
  interim_id?: string;
  completion_notes?: string;
}
export interface MsgCompleteInterimAminoMsg {
  type: "/sparkdream.rep.v1.MsgCompleteInterim";
  value: MsgCompleteInterimAmino;
}
/**
 * MsgCompleteInterimResponse defines the MsgCompleteInterimResponse message.
 * @name MsgCompleteInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompleteInterimResponse
 */
export interface MsgCompleteInterimResponse {}
export interface MsgCompleteInterimResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCompleteInterimResponse";
  value: Uint8Array;
}
/**
 * MsgCompleteInterimResponse defines the MsgCompleteInterimResponse message.
 * @name MsgCompleteInterimResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompleteInterimResponse
 */
export interface MsgCompleteInterimResponseAmino {}
export interface MsgCompleteInterimResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgCompleteInterimResponse";
  value: MsgCompleteInterimResponseAmino;
}
/**
 * MsgProposeProject defines the MsgProposeProject message.
 * @name MsgProposeProject
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgProposeProject
 */
export interface MsgProposeProject {
  creator: string;
  name: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  council: string;
  requestedBudget: string;
  requestedSpark: string;
  deliverables: string[];
  milestones: string[];
}
export interface MsgProposeProjectProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgProposeProject";
  value: Uint8Array;
}
/**
 * MsgProposeProject defines the MsgProposeProject message.
 * @name MsgProposeProjectAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgProposeProject
 */
export interface MsgProposeProjectAmino {
  creator?: string;
  name?: string;
  description?: string;
  tags?: string[];
  category?: ProjectCategory;
  council?: string;
  requested_budget?: string;
  requested_spark?: string;
  deliverables?: string[];
  milestones?: string[];
}
export interface MsgProposeProjectAminoMsg {
  type: "/sparkdream.rep.v1.MsgProposeProject";
  value: MsgProposeProjectAmino;
}
/**
 * MsgProposeProjectResponse defines the MsgProposeProjectResponse message.
 * @name MsgProposeProjectResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgProposeProjectResponse
 */
export interface MsgProposeProjectResponse {}
export interface MsgProposeProjectResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgProposeProjectResponse";
  value: Uint8Array;
}
/**
 * MsgProposeProjectResponse defines the MsgProposeProjectResponse message.
 * @name MsgProposeProjectResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgProposeProjectResponse
 */
export interface MsgProposeProjectResponseAmino {}
export interface MsgProposeProjectResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgProposeProjectResponse";
  value: MsgProposeProjectResponseAmino;
}
/**
 * MsgApproveProjectBudget defines the MsgApproveProjectBudget message.
 * @name MsgApproveProjectBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveProjectBudget
 */
export interface MsgApproveProjectBudget {
  approver: string;
  projectId: bigint;
  approvedBudget: string;
  approvedSpark: string;
}
export interface MsgApproveProjectBudgetProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgApproveProjectBudget";
  value: Uint8Array;
}
/**
 * MsgApproveProjectBudget defines the MsgApproveProjectBudget message.
 * @name MsgApproveProjectBudgetAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveProjectBudget
 */
export interface MsgApproveProjectBudgetAmino {
  approver?: string;
  project_id?: string;
  approved_budget?: string;
  approved_spark?: string;
}
export interface MsgApproveProjectBudgetAminoMsg {
  type: "/sparkdream.rep.v1.MsgApproveProjectBudget";
  value: MsgApproveProjectBudgetAmino;
}
/**
 * MsgApproveProjectBudgetResponse defines the MsgApproveProjectBudgetResponse message.
 * @name MsgApproveProjectBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveProjectBudgetResponse
 */
export interface MsgApproveProjectBudgetResponse {}
export interface MsgApproveProjectBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgApproveProjectBudgetResponse";
  value: Uint8Array;
}
/**
 * MsgApproveProjectBudgetResponse defines the MsgApproveProjectBudgetResponse message.
 * @name MsgApproveProjectBudgetResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveProjectBudgetResponse
 */
export interface MsgApproveProjectBudgetResponseAmino {}
export interface MsgApproveProjectBudgetResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgApproveProjectBudgetResponse";
  value: MsgApproveProjectBudgetResponseAmino;
}
/**
 * MsgCancelProject defines the MsgCancelProject message.
 * @name MsgCancelProject
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelProject
 */
export interface MsgCancelProject {
  creator: string;
  projectId: bigint;
  reason: string;
}
export interface MsgCancelProjectProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCancelProject";
  value: Uint8Array;
}
/**
 * MsgCancelProject defines the MsgCancelProject message.
 * @name MsgCancelProjectAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelProject
 */
export interface MsgCancelProjectAmino {
  creator?: string;
  project_id?: string;
  reason?: string;
}
export interface MsgCancelProjectAminoMsg {
  type: "/sparkdream.rep.v1.MsgCancelProject";
  value: MsgCancelProjectAmino;
}
/**
 * MsgCancelProjectResponse defines the MsgCancelProjectResponse message.
 * @name MsgCancelProjectResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelProjectResponse
 */
export interface MsgCancelProjectResponse {}
export interface MsgCancelProjectResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCancelProjectResponse";
  value: Uint8Array;
}
/**
 * MsgCancelProjectResponse defines the MsgCancelProjectResponse message.
 * @name MsgCancelProjectResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelProjectResponse
 */
export interface MsgCancelProjectResponseAmino {}
export interface MsgCancelProjectResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgCancelProjectResponse";
  value: MsgCancelProjectResponseAmino;
}
/**
 * MsgCreateInitiative defines the MsgCreateInitiative message.
 * @name MsgCreateInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateInitiative
 */
export interface MsgCreateInitiative {
  creator: string;
  projectId: bigint;
  title: string;
  description: string;
  tags: string[];
  tier: bigint;
  category: bigint;
  templateId: string;
  budget: string;
}
export interface MsgCreateInitiativeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCreateInitiative";
  value: Uint8Array;
}
/**
 * MsgCreateInitiative defines the MsgCreateInitiative message.
 * @name MsgCreateInitiativeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateInitiative
 */
export interface MsgCreateInitiativeAmino {
  creator?: string;
  project_id?: string;
  title?: string;
  description?: string;
  tags?: string[];
  tier?: string;
  category?: string;
  template_id?: string;
  budget?: string;
}
export interface MsgCreateInitiativeAminoMsg {
  type: "/sparkdream.rep.v1.MsgCreateInitiative";
  value: MsgCreateInitiativeAmino;
}
/**
 * MsgCreateInitiativeResponse defines the MsgCreateInitiativeResponse message.
 * @name MsgCreateInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateInitiativeResponse
 */
export interface MsgCreateInitiativeResponse {
  initiativeId: bigint;
}
export interface MsgCreateInitiativeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCreateInitiativeResponse";
  value: Uint8Array;
}
/**
 * MsgCreateInitiativeResponse defines the MsgCreateInitiativeResponse message.
 * @name MsgCreateInitiativeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateInitiativeResponse
 */
export interface MsgCreateInitiativeResponseAmino {
  initiative_id?: string;
}
export interface MsgCreateInitiativeResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgCreateInitiativeResponse";
  value: MsgCreateInitiativeResponseAmino;
}
/**
 * MsgAssignInitiative defines the MsgAssignInitiative message.
 * @name MsgAssignInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAssignInitiative
 */
export interface MsgAssignInitiative {
  creator: string;
  initiativeId: bigint;
  assignee: string;
}
export interface MsgAssignInitiativeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAssignInitiative";
  value: Uint8Array;
}
/**
 * MsgAssignInitiative defines the MsgAssignInitiative message.
 * @name MsgAssignInitiativeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAssignInitiative
 */
export interface MsgAssignInitiativeAmino {
  creator?: string;
  initiative_id?: string;
  assignee?: string;
}
export interface MsgAssignInitiativeAminoMsg {
  type: "/sparkdream.rep.v1.MsgAssignInitiative";
  value: MsgAssignInitiativeAmino;
}
/**
 * MsgAssignInitiativeResponse defines the MsgAssignInitiativeResponse message.
 * @name MsgAssignInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAssignInitiativeResponse
 */
export interface MsgAssignInitiativeResponse {}
export interface MsgAssignInitiativeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAssignInitiativeResponse";
  value: Uint8Array;
}
/**
 * MsgAssignInitiativeResponse defines the MsgAssignInitiativeResponse message.
 * @name MsgAssignInitiativeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAssignInitiativeResponse
 */
export interface MsgAssignInitiativeResponseAmino {}
export interface MsgAssignInitiativeResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgAssignInitiativeResponse";
  value: MsgAssignInitiativeResponseAmino;
}
/**
 * MsgSubmitInitiativeWork defines the MsgSubmitInitiativeWork message.
 * @name MsgSubmitInitiativeWork
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInitiativeWork
 */
export interface MsgSubmitInitiativeWork {
  creator: string;
  initiativeId: bigint;
  deliverableUri: string;
  comments: string;
}
export interface MsgSubmitInitiativeWorkProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeWork";
  value: Uint8Array;
}
/**
 * MsgSubmitInitiativeWork defines the MsgSubmitInitiativeWork message.
 * @name MsgSubmitInitiativeWorkAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInitiativeWork
 */
export interface MsgSubmitInitiativeWorkAmino {
  creator?: string;
  initiative_id?: string;
  deliverable_uri?: string;
  comments?: string;
}
export interface MsgSubmitInitiativeWorkAminoMsg {
  type: "/sparkdream.rep.v1.MsgSubmitInitiativeWork";
  value: MsgSubmitInitiativeWorkAmino;
}
/**
 * MsgSubmitInitiativeWorkResponse defines the MsgSubmitInitiativeWorkResponse message.
 * @name MsgSubmitInitiativeWorkResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInitiativeWorkResponse
 */
export interface MsgSubmitInitiativeWorkResponse {}
export interface MsgSubmitInitiativeWorkResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeWorkResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitInitiativeWorkResponse defines the MsgSubmitInitiativeWorkResponse message.
 * @name MsgSubmitInitiativeWorkResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInitiativeWorkResponse
 */
export interface MsgSubmitInitiativeWorkResponseAmino {}
export interface MsgSubmitInitiativeWorkResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgSubmitInitiativeWorkResponse";
  value: MsgSubmitInitiativeWorkResponseAmino;
}
/**
 * MsgApproveInitiative defines the MsgApproveInitiative message.
 * @name MsgApproveInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInitiative
 */
export interface MsgApproveInitiative {
  creator: string;
  initiativeId: bigint;
  criteriaVotes: CriteriaVote[];
  approved: boolean;
  comments: string;
}
export interface MsgApproveInitiativeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgApproveInitiative";
  value: Uint8Array;
}
/**
 * MsgApproveInitiative defines the MsgApproveInitiative message.
 * @name MsgApproveInitiativeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInitiative
 */
export interface MsgApproveInitiativeAmino {
  creator?: string;
  initiative_id?: string;
  criteria_votes?: CriteriaVoteAmino[];
  approved?: boolean;
  comments?: string;
}
export interface MsgApproveInitiativeAminoMsg {
  type: "/sparkdream.rep.v1.MsgApproveInitiative";
  value: MsgApproveInitiativeAmino;
}
/**
 * MsgApproveInitiativeResponse defines the MsgApproveInitiativeResponse message.
 * @name MsgApproveInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInitiativeResponse
 */
export interface MsgApproveInitiativeResponse {}
export interface MsgApproveInitiativeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgApproveInitiativeResponse";
  value: Uint8Array;
}
/**
 * MsgApproveInitiativeResponse defines the MsgApproveInitiativeResponse message.
 * @name MsgApproveInitiativeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInitiativeResponse
 */
export interface MsgApproveInitiativeResponseAmino {}
export interface MsgApproveInitiativeResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgApproveInitiativeResponse";
  value: MsgApproveInitiativeResponseAmino;
}
/**
 * MsgAbandonInitiative defines the MsgAbandonInitiative message.
 * @name MsgAbandonInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAbandonInitiative
 */
export interface MsgAbandonInitiative {
  creator: string;
  initiativeId: bigint;
  reason: string;
}
export interface MsgAbandonInitiativeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAbandonInitiative";
  value: Uint8Array;
}
/**
 * MsgAbandonInitiative defines the MsgAbandonInitiative message.
 * @name MsgAbandonInitiativeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAbandonInitiative
 */
export interface MsgAbandonInitiativeAmino {
  creator?: string;
  initiative_id?: string;
  reason?: string;
}
export interface MsgAbandonInitiativeAminoMsg {
  type: "/sparkdream.rep.v1.MsgAbandonInitiative";
  value: MsgAbandonInitiativeAmino;
}
/**
 * MsgAbandonInitiativeResponse defines the MsgAbandonInitiativeResponse message.
 * @name MsgAbandonInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAbandonInitiativeResponse
 */
export interface MsgAbandonInitiativeResponse {}
export interface MsgAbandonInitiativeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAbandonInitiativeResponse";
  value: Uint8Array;
}
/**
 * MsgAbandonInitiativeResponse defines the MsgAbandonInitiativeResponse message.
 * @name MsgAbandonInitiativeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAbandonInitiativeResponse
 */
export interface MsgAbandonInitiativeResponseAmino {}
export interface MsgAbandonInitiativeResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgAbandonInitiativeResponse";
  value: MsgAbandonInitiativeResponseAmino;
}
/**
 * MsgCompleteInitiative defines the MsgCompleteInitiative message.
 * @name MsgCompleteInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompleteInitiative
 */
export interface MsgCompleteInitiative {
  creator: string;
  initiativeId: bigint;
  completionNotes: string;
}
export interface MsgCompleteInitiativeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCompleteInitiative";
  value: Uint8Array;
}
/**
 * MsgCompleteInitiative defines the MsgCompleteInitiative message.
 * @name MsgCompleteInitiativeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompleteInitiative
 */
export interface MsgCompleteInitiativeAmino {
  creator?: string;
  initiative_id?: string;
  completion_notes?: string;
}
export interface MsgCompleteInitiativeAminoMsg {
  type: "/sparkdream.rep.v1.MsgCompleteInitiative";
  value: MsgCompleteInitiativeAmino;
}
/**
 * MsgCompleteInitiativeResponse defines the MsgCompleteInitiativeResponse message.
 * @name MsgCompleteInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompleteInitiativeResponse
 */
export interface MsgCompleteInitiativeResponse {}
export interface MsgCompleteInitiativeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCompleteInitiativeResponse";
  value: Uint8Array;
}
/**
 * MsgCompleteInitiativeResponse defines the MsgCompleteInitiativeResponse message.
 * @name MsgCompleteInitiativeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompleteInitiativeResponse
 */
export interface MsgCompleteInitiativeResponseAmino {}
export interface MsgCompleteInitiativeResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgCompleteInitiativeResponse";
  value: MsgCompleteInitiativeResponseAmino;
}
/**
 * MsgStake defines the MsgStake message.
 * @name MsgStake
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgStake
 */
export interface MsgStake {
  staker: string;
  targetType: StakeTargetType;
  /**
   * For INITIATIVE/PROJECT
   */
  targetId: bigint;
  /**
   * For MEMBER (address) or TAG (name)
   */
  targetIdentifier: string;
  amount: string;
}
export interface MsgStakeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgStake";
  value: Uint8Array;
}
/**
 * MsgStake defines the MsgStake message.
 * @name MsgStakeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgStake
 */
export interface MsgStakeAmino {
  staker?: string;
  target_type?: StakeTargetType;
  /**
   * For INITIATIVE/PROJECT
   */
  target_id?: string;
  /**
   * For MEMBER (address) or TAG (name)
   */
  target_identifier?: string;
  amount?: string;
}
export interface MsgStakeAminoMsg {
  type: "/sparkdream.rep.v1.MsgStake";
  value: MsgStakeAmino;
}
/**
 * MsgStakeResponse defines the MsgStakeResponse message.
 * @name MsgStakeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgStakeResponse
 */
export interface MsgStakeResponse {
  stakeId: bigint;
}
export interface MsgStakeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgStakeResponse";
  value: Uint8Array;
}
/**
 * MsgStakeResponse defines the MsgStakeResponse message.
 * @name MsgStakeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgStakeResponse
 */
export interface MsgStakeResponseAmino {
  stake_id?: string;
}
export interface MsgStakeResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgStakeResponse";
  value: MsgStakeResponseAmino;
}
/**
 * MsgUnstake defines the MsgUnstake message.
 * @name MsgUnstake
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUnstake
 */
export interface MsgUnstake {
  staker: string;
  stakeId: bigint;
  amount: string;
}
export interface MsgUnstakeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgUnstake";
  value: Uint8Array;
}
/**
 * MsgUnstake defines the MsgUnstake message.
 * @name MsgUnstakeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUnstake
 */
export interface MsgUnstakeAmino {
  staker?: string;
  stake_id?: string;
  amount?: string;
}
export interface MsgUnstakeAminoMsg {
  type: "/sparkdream.rep.v1.MsgUnstake";
  value: MsgUnstakeAmino;
}
/**
 * MsgUnstakeResponse defines the MsgUnstakeResponse message.
 * @name MsgUnstakeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUnstakeResponse
 */
export interface MsgUnstakeResponse {
  returnedAmount: string;
  rewardAmount: string;
}
export interface MsgUnstakeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgUnstakeResponse";
  value: Uint8Array;
}
/**
 * MsgUnstakeResponse defines the MsgUnstakeResponse message.
 * @name MsgUnstakeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUnstakeResponse
 */
export interface MsgUnstakeResponseAmino {
  returned_amount?: string;
  reward_amount?: string;
}
export interface MsgUnstakeResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgUnstakeResponse";
  value: MsgUnstakeResponseAmino;
}
/**
 * MsgClaimStakingRewards defines the MsgClaimStakingRewards message.
 * @name MsgClaimStakingRewards
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgClaimStakingRewards
 */
export interface MsgClaimStakingRewards {
  staker: string;
  stakeId: bigint;
}
export interface MsgClaimStakingRewardsProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgClaimStakingRewards";
  value: Uint8Array;
}
/**
 * MsgClaimStakingRewards defines the MsgClaimStakingRewards message.
 * @name MsgClaimStakingRewardsAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgClaimStakingRewards
 */
export interface MsgClaimStakingRewardsAmino {
  staker?: string;
  stake_id?: string;
}
export interface MsgClaimStakingRewardsAminoMsg {
  type: "/sparkdream.rep.v1.MsgClaimStakingRewards";
  value: MsgClaimStakingRewardsAmino;
}
/**
 * MsgClaimStakingRewardsResponse defines the MsgClaimStakingRewardsResponse message.
 * @name MsgClaimStakingRewardsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgClaimStakingRewardsResponse
 */
export interface MsgClaimStakingRewardsResponse {
  claimedAmount: string;
}
export interface MsgClaimStakingRewardsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgClaimStakingRewardsResponse";
  value: Uint8Array;
}
/**
 * MsgClaimStakingRewardsResponse defines the MsgClaimStakingRewardsResponse message.
 * @name MsgClaimStakingRewardsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgClaimStakingRewardsResponse
 */
export interface MsgClaimStakingRewardsResponseAmino {
  claimed_amount?: string;
}
export interface MsgClaimStakingRewardsResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgClaimStakingRewardsResponse";
  value: MsgClaimStakingRewardsResponseAmino;
}
/**
 * MsgCompoundStakingRewards defines the MsgCompoundStakingRewards message.
 * @name MsgCompoundStakingRewards
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompoundStakingRewards
 */
export interface MsgCompoundStakingRewards {
  staker: string;
  stakeId: bigint;
}
export interface MsgCompoundStakingRewardsProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCompoundStakingRewards";
  value: Uint8Array;
}
/**
 * MsgCompoundStakingRewards defines the MsgCompoundStakingRewards message.
 * @name MsgCompoundStakingRewardsAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompoundStakingRewards
 */
export interface MsgCompoundStakingRewardsAmino {
  staker?: string;
  stake_id?: string;
}
export interface MsgCompoundStakingRewardsAminoMsg {
  type: "/sparkdream.rep.v1.MsgCompoundStakingRewards";
  value: MsgCompoundStakingRewardsAmino;
}
/**
 * MsgCompoundStakingRewardsResponse defines the MsgCompoundStakingRewardsResponse message.
 * @name MsgCompoundStakingRewardsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompoundStakingRewardsResponse
 */
export interface MsgCompoundStakingRewardsResponse {
  compoundedAmount: string;
  newStakeAmount: string;
}
export interface MsgCompoundStakingRewardsResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCompoundStakingRewardsResponse";
  value: Uint8Array;
}
/**
 * MsgCompoundStakingRewardsResponse defines the MsgCompoundStakingRewardsResponse message.
 * @name MsgCompoundStakingRewardsResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompoundStakingRewardsResponse
 */
export interface MsgCompoundStakingRewardsResponseAmino {
  compounded_amount?: string;
  new_stake_amount?: string;
}
export interface MsgCompoundStakingRewardsResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgCompoundStakingRewardsResponse";
  value: MsgCompoundStakingRewardsResponseAmino;
}
/**
 * MsgCreateChallenge defines the MsgCreateChallenge message.
 * @name MsgCreateChallenge
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateChallenge
 */
export interface MsgCreateChallenge {
  challenger: string;
  initiativeId: bigint;
  reason: string;
  evidence: string[];
  stakedDream: string;
}
export interface MsgCreateChallengeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCreateChallenge";
  value: Uint8Array;
}
/**
 * MsgCreateChallenge defines the MsgCreateChallenge message.
 * @name MsgCreateChallengeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateChallenge
 */
export interface MsgCreateChallengeAmino {
  challenger?: string;
  initiative_id?: string;
  reason?: string;
  evidence?: string[];
  staked_dream?: string;
}
export interface MsgCreateChallengeAminoMsg {
  type: "/sparkdream.rep.v1.MsgCreateChallenge";
  value: MsgCreateChallengeAmino;
}
/**
 * MsgCreateChallengeResponse defines the MsgCreateChallengeResponse message.
 * @name MsgCreateChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateChallengeResponse
 */
export interface MsgCreateChallengeResponse {}
export interface MsgCreateChallengeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCreateChallengeResponse";
  value: Uint8Array;
}
/**
 * MsgCreateChallengeResponse defines the MsgCreateChallengeResponse message.
 * @name MsgCreateChallengeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateChallengeResponse
 */
export interface MsgCreateChallengeResponseAmino {}
export interface MsgCreateChallengeResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgCreateChallengeResponse";
  value: MsgCreateChallengeResponseAmino;
}
/**
 * MsgRespondToChallenge defines the MsgRespondToChallenge message.
 * @name MsgRespondToChallenge
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRespondToChallenge
 */
export interface MsgRespondToChallenge {
  assignee: string;
  challengeId: bigint;
  response: string;
  evidence: string[];
}
export interface MsgRespondToChallengeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgRespondToChallenge";
  value: Uint8Array;
}
/**
 * MsgRespondToChallenge defines the MsgRespondToChallenge message.
 * @name MsgRespondToChallengeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRespondToChallenge
 */
export interface MsgRespondToChallengeAmino {
  assignee?: string;
  challenge_id?: string;
  response?: string;
  evidence?: string[];
}
export interface MsgRespondToChallengeAminoMsg {
  type: "/sparkdream.rep.v1.MsgRespondToChallenge";
  value: MsgRespondToChallengeAmino;
}
/**
 * MsgRespondToChallengeResponse defines the MsgRespondToChallengeResponse message.
 * @name MsgRespondToChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRespondToChallengeResponse
 */
export interface MsgRespondToChallengeResponse {}
export interface MsgRespondToChallengeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgRespondToChallengeResponse";
  value: Uint8Array;
}
/**
 * MsgRespondToChallengeResponse defines the MsgRespondToChallengeResponse message.
 * @name MsgRespondToChallengeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRespondToChallengeResponse
 */
export interface MsgRespondToChallengeResponseAmino {}
export interface MsgRespondToChallengeResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgRespondToChallengeResponse";
  value: MsgRespondToChallengeResponseAmino;
}
/**
 * MsgSubmitJurorVote defines the MsgSubmitJurorVote message.
 * @name MsgSubmitJurorVote
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitJurorVote
 */
export interface MsgSubmitJurorVote {
  juror: string;
  juryReviewId: bigint;
  criteriaVotes: CriteriaVote[];
  verdict: Verdict;
  confidence: string;
  reasoning: string;
}
export interface MsgSubmitJurorVoteProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitJurorVote";
  value: Uint8Array;
}
/**
 * MsgSubmitJurorVote defines the MsgSubmitJurorVote message.
 * @name MsgSubmitJurorVoteAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitJurorVote
 */
export interface MsgSubmitJurorVoteAmino {
  juror?: string;
  jury_review_id?: string;
  criteria_votes?: CriteriaVoteAmino[];
  verdict?: Verdict;
  confidence?: string;
  reasoning?: string;
}
export interface MsgSubmitJurorVoteAminoMsg {
  type: "/sparkdream.rep.v1.MsgSubmitJurorVote";
  value: MsgSubmitJurorVoteAmino;
}
/**
 * MsgSubmitJurorVoteResponse defines the MsgSubmitJurorVoteResponse message.
 * @name MsgSubmitJurorVoteResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitJurorVoteResponse
 */
export interface MsgSubmitJurorVoteResponse {}
export interface MsgSubmitJurorVoteResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitJurorVoteResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitJurorVoteResponse defines the MsgSubmitJurorVoteResponse message.
 * @name MsgSubmitJurorVoteResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitJurorVoteResponse
 */
export interface MsgSubmitJurorVoteResponseAmino {}
export interface MsgSubmitJurorVoteResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgSubmitJurorVoteResponse";
  value: MsgSubmitJurorVoteResponseAmino;
}
/**
 * MsgSubmitExpertTestimony defines the MsgSubmitExpertTestimony message.
 * @name MsgSubmitExpertTestimony
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitExpertTestimony
 */
export interface MsgSubmitExpertTestimony {
  expert: string;
  juryReviewId: bigint;
  opinion: string;
  reasoning: string;
}
export interface MsgSubmitExpertTestimonyProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitExpertTestimony";
  value: Uint8Array;
}
/**
 * MsgSubmitExpertTestimony defines the MsgSubmitExpertTestimony message.
 * @name MsgSubmitExpertTestimonyAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitExpertTestimony
 */
export interface MsgSubmitExpertTestimonyAmino {
  expert?: string;
  jury_review_id?: string;
  opinion?: string;
  reasoning?: string;
}
export interface MsgSubmitExpertTestimonyAminoMsg {
  type: "/sparkdream.rep.v1.MsgSubmitExpertTestimony";
  value: MsgSubmitExpertTestimonyAmino;
}
/**
 * MsgSubmitExpertTestimonyResponse defines the MsgSubmitExpertTestimonyResponse message.
 * @name MsgSubmitExpertTestimonyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitExpertTestimonyResponse
 */
export interface MsgSubmitExpertTestimonyResponse {}
export interface MsgSubmitExpertTestimonyResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitExpertTestimonyResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitExpertTestimonyResponse defines the MsgSubmitExpertTestimonyResponse message.
 * @name MsgSubmitExpertTestimonyResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitExpertTestimonyResponse
 */
export interface MsgSubmitExpertTestimonyResponseAmino {}
export interface MsgSubmitExpertTestimonyResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgSubmitExpertTestimonyResponse";
  value: MsgSubmitExpertTestimonyResponseAmino;
}
/**
 * MsgChallengeContent creates a challenge against bonded content.
 * @name MsgChallengeContent
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgChallengeContent
 */
export interface MsgChallengeContent {
  challenger: string;
  /**
   * StakeTargetType (7=BLOG_AUTHOR_BOND, 8=FORUM_AUTHOR_BOND, 9=COLLECTION_AUTHOR_BOND)
   */
  targetType: bigint;
  targetId: bigint;
  reason: string;
  evidence: string[];
  stakedDream?: string;
}
export interface MsgChallengeContentProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgChallengeContent";
  value: Uint8Array;
}
/**
 * MsgChallengeContent creates a challenge against bonded content.
 * @name MsgChallengeContentAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgChallengeContent
 */
export interface MsgChallengeContentAmino {
  challenger?: string;
  /**
   * StakeTargetType (7=BLOG_AUTHOR_BOND, 8=FORUM_AUTHOR_BOND, 9=COLLECTION_AUTHOR_BOND)
   */
  target_type?: string;
  target_id?: string;
  reason?: string;
  evidence?: string[];
  staked_dream?: string;
}
export interface MsgChallengeContentAminoMsg {
  type: "/sparkdream.rep.v1.MsgChallengeContent";
  value: MsgChallengeContentAmino;
}
/**
 * MsgChallengeContentResponse defines the response for ChallengeContent.
 * @name MsgChallengeContentResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgChallengeContentResponse
 */
export interface MsgChallengeContentResponse {
  contentChallengeId: bigint;
}
export interface MsgChallengeContentResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgChallengeContentResponse";
  value: Uint8Array;
}
/**
 * MsgChallengeContentResponse defines the response for ChallengeContent.
 * @name MsgChallengeContentResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgChallengeContentResponse
 */
export interface MsgChallengeContentResponseAmino {
  content_challenge_id?: string;
}
export interface MsgChallengeContentResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgChallengeContentResponse";
  value: MsgChallengeContentResponseAmino;
}
/**
 * MsgRespondToContentChallenge allows the content author to respond to a challenge.
 * @name MsgRespondToContentChallenge
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRespondToContentChallenge
 */
export interface MsgRespondToContentChallenge {
  author: string;
  contentChallengeId: bigint;
  response: string;
  evidence: string[];
}
export interface MsgRespondToContentChallengeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgRespondToContentChallenge";
  value: Uint8Array;
}
/**
 * MsgRespondToContentChallenge allows the content author to respond to a challenge.
 * @name MsgRespondToContentChallengeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRespondToContentChallenge
 */
export interface MsgRespondToContentChallengeAmino {
  author?: string;
  content_challenge_id?: string;
  response?: string;
  evidence?: string[];
}
export interface MsgRespondToContentChallengeAminoMsg {
  type: "/sparkdream.rep.v1.MsgRespondToContentChallenge";
  value: MsgRespondToContentChallengeAmino;
}
/**
 * MsgRespondToContentChallengeResponse defines the response for RespondToContentChallenge.
 * @name MsgRespondToContentChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRespondToContentChallengeResponse
 */
export interface MsgRespondToContentChallengeResponse {}
export interface MsgRespondToContentChallengeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgRespondToContentChallengeResponse";
  value: Uint8Array;
}
/**
 * MsgRespondToContentChallengeResponse defines the response for RespondToContentChallenge.
 * @name MsgRespondToContentChallengeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRespondToContentChallengeResponse
 */
export interface MsgRespondToContentChallengeResponseAmino {}
export interface MsgRespondToContentChallengeResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgRespondToContentChallengeResponse";
  value: MsgRespondToContentChallengeResponseAmino;
}
/**
 * MsgRegisterZkPublicKey defines the MsgRegisterZkPublicKey message.
 * @name MsgRegisterZkPublicKey
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRegisterZkPublicKey
 */
export interface MsgRegisterZkPublicKey {
  member: string;
  zkPublicKey: Uint8Array;
}
export interface MsgRegisterZkPublicKeyProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgRegisterZkPublicKey";
  value: Uint8Array;
}
/**
 * MsgRegisterZkPublicKey defines the MsgRegisterZkPublicKey message.
 * @name MsgRegisterZkPublicKeyAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRegisterZkPublicKey
 */
export interface MsgRegisterZkPublicKeyAmino {
  member?: string;
  zk_public_key?: string;
}
export interface MsgRegisterZkPublicKeyAminoMsg {
  type: "/sparkdream.rep.v1.MsgRegisterZkPublicKey";
  value: MsgRegisterZkPublicKeyAmino;
}
/**
 * MsgRegisterZkPublicKeyResponse defines the MsgRegisterZkPublicKeyResponse message.
 * @name MsgRegisterZkPublicKeyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRegisterZkPublicKeyResponse
 */
export interface MsgRegisterZkPublicKeyResponse {}
export interface MsgRegisterZkPublicKeyResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgRegisterZkPublicKeyResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterZkPublicKeyResponse defines the MsgRegisterZkPublicKeyResponse message.
 * @name MsgRegisterZkPublicKeyResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRegisterZkPublicKeyResponse
 */
export interface MsgRegisterZkPublicKeyResponseAmino {}
export interface MsgRegisterZkPublicKeyResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgRegisterZkPublicKeyResponse";
  value: MsgRegisterZkPublicKeyResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.rep.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/rep/MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParams(): MsgUpdateOperationalParams {
  return {
    authority: "",
    operationalParams: RepOperationalParams.fromPartial({})
  };
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * @name MsgUpdateOperationalParams
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUpdateOperationalParams
 */
export const MsgUpdateOperationalParams = {
  typeUrl: "/sparkdream.rep.v1.MsgUpdateOperationalParams",
  aminoType: "sparkdream/x/rep/MsgUpdateOperationalParams",
  encode(message: MsgUpdateOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operationalParams !== undefined) {
      RepOperationalParams.encode(message.operationalParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operationalParams = RepOperationalParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateOperationalParams>): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    message.authority = object.authority ?? "";
    message.operationalParams = object.operationalParams !== undefined && object.operationalParams !== null ? RepOperationalParams.fromPartial(object.operationalParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOperationalParamsAmino): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operational_params !== undefined && object.operational_params !== null) {
      message.operationalParams = RepOperationalParams.fromAmino(object.operational_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operational_params = message.operationalParams ? RepOperationalParams.toAmino(message.operationalParams) : RepOperationalParams.toAmino(RepOperationalParams.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsAminoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsProtoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParams): Uint8Array {
    return MsgUpdateOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParamsResponse(): MsgUpdateOperationalParamsResponse {
  return {};
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for
 * executing a MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUpdateOperationalParamsResponse
 */
export const MsgUpdateOperationalParamsResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgUpdateOperationalParamsResponse",
  encode(_: MsgUpdateOperationalParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateOperationalParamsResponse>): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOperationalParamsResponseAmino): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsResponseAminoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsResponseProtoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParamsResponse): Uint8Array {
    return MsgUpdateOperationalParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgUpdateOperationalParamsResponse",
      value: MsgUpdateOperationalParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInviteMember(): MsgInviteMember {
  return {
    inviter: "",
    inviteeAddress: "",
    stakedDream: "",
    vouchedTags: []
  };
}
/**
 * MsgInviteMember defines the MsgInviteMember message.
 * @name MsgInviteMember
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgInviteMember
 */
export const MsgInviteMember = {
  typeUrl: "/sparkdream.rep.v1.MsgInviteMember",
  encode(message: MsgInviteMember, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inviter !== "") {
      writer.uint32(10).string(message.inviter);
    }
    if (message.inviteeAddress !== "") {
      writer.uint32(18).string(message.inviteeAddress);
    }
    if (message.stakedDream !== "") {
      writer.uint32(26).string(message.stakedDream);
    }
    for (const v of message.vouchedTags) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInviteMember {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInviteMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inviter = reader.string();
          break;
        case 2:
          message.inviteeAddress = reader.string();
          break;
        case 3:
          message.stakedDream = reader.string();
          break;
        case 4:
          message.vouchedTags.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgInviteMember>): MsgInviteMember {
    const message = createBaseMsgInviteMember();
    message.inviter = object.inviter ?? "";
    message.inviteeAddress = object.inviteeAddress ?? "";
    message.stakedDream = object.stakedDream ?? "";
    message.vouchedTags = object.vouchedTags?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgInviteMemberAmino): MsgInviteMember {
    const message = createBaseMsgInviteMember();
    if (object.inviter !== undefined && object.inviter !== null) {
      message.inviter = object.inviter;
    }
    if (object.invitee_address !== undefined && object.invitee_address !== null) {
      message.inviteeAddress = object.invitee_address;
    }
    if (object.staked_dream !== undefined && object.staked_dream !== null) {
      message.stakedDream = object.staked_dream;
    }
    message.vouchedTags = object.vouched_tags?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgInviteMember): MsgInviteMemberAmino {
    const obj: any = {};
    obj.inviter = message.inviter === "" ? undefined : message.inviter;
    obj.invitee_address = message.inviteeAddress === "" ? undefined : message.inviteeAddress;
    obj.staked_dream = message.stakedDream === "" ? undefined : message.stakedDream;
    if (message.vouchedTags) {
      obj.vouched_tags = message.vouchedTags.map(e => e);
    } else {
      obj.vouched_tags = message.vouchedTags;
    }
    return obj;
  },
  fromAminoMsg(object: MsgInviteMemberAminoMsg): MsgInviteMember {
    return MsgInviteMember.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInviteMemberProtoMsg): MsgInviteMember {
    return MsgInviteMember.decode(message.value);
  },
  toProto(message: MsgInviteMember): Uint8Array {
    return MsgInviteMember.encode(message).finish();
  },
  toProtoMsg(message: MsgInviteMember): MsgInviteMemberProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgInviteMember",
      value: MsgInviteMember.encode(message).finish()
    };
  }
};
function createBaseMsgInviteMemberResponse(): MsgInviteMemberResponse {
  return {};
}
/**
 * MsgInviteMemberResponse defines the MsgInviteMemberResponse message.
 * @name MsgInviteMemberResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgInviteMemberResponse
 */
export const MsgInviteMemberResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgInviteMemberResponse",
  encode(_: MsgInviteMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInviteMemberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInviteMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgInviteMemberResponse>): MsgInviteMemberResponse {
    const message = createBaseMsgInviteMemberResponse();
    return message;
  },
  fromAmino(_: MsgInviteMemberResponseAmino): MsgInviteMemberResponse {
    const message = createBaseMsgInviteMemberResponse();
    return message;
  },
  toAmino(_: MsgInviteMemberResponse): MsgInviteMemberResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInviteMemberResponseAminoMsg): MsgInviteMemberResponse {
    return MsgInviteMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInviteMemberResponseProtoMsg): MsgInviteMemberResponse {
    return MsgInviteMemberResponse.decode(message.value);
  },
  toProto(message: MsgInviteMemberResponse): Uint8Array {
    return MsgInviteMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInviteMemberResponse): MsgInviteMemberResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgInviteMemberResponse",
      value: MsgInviteMemberResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptInvitation(): MsgAcceptInvitation {
  return {
    invitee: "",
    invitationId: BigInt(0)
  };
}
/**
 * MsgAcceptInvitation defines the MsgAcceptInvitation message.
 * @name MsgAcceptInvitation
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAcceptInvitation
 */
export const MsgAcceptInvitation = {
  typeUrl: "/sparkdream.rep.v1.MsgAcceptInvitation",
  encode(message: MsgAcceptInvitation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.invitee !== "") {
      writer.uint32(10).string(message.invitee);
    }
    if (message.invitationId !== BigInt(0)) {
      writer.uint32(16).uint64(message.invitationId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptInvitation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptInvitation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invitee = reader.string();
          break;
        case 2:
          message.invitationId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcceptInvitation>): MsgAcceptInvitation {
    const message = createBaseMsgAcceptInvitation();
    message.invitee = object.invitee ?? "";
    message.invitationId = object.invitationId !== undefined && object.invitationId !== null ? BigInt(object.invitationId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAcceptInvitationAmino): MsgAcceptInvitation {
    const message = createBaseMsgAcceptInvitation();
    if (object.invitee !== undefined && object.invitee !== null) {
      message.invitee = object.invitee;
    }
    if (object.invitation_id !== undefined && object.invitation_id !== null) {
      message.invitationId = BigInt(object.invitation_id);
    }
    return message;
  },
  toAmino(message: MsgAcceptInvitation): MsgAcceptInvitationAmino {
    const obj: any = {};
    obj.invitee = message.invitee === "" ? undefined : message.invitee;
    obj.invitation_id = message.invitationId !== BigInt(0) ? message.invitationId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptInvitationAminoMsg): MsgAcceptInvitation {
    return MsgAcceptInvitation.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptInvitationProtoMsg): MsgAcceptInvitation {
    return MsgAcceptInvitation.decode(message.value);
  },
  toProto(message: MsgAcceptInvitation): Uint8Array {
    return MsgAcceptInvitation.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptInvitation): MsgAcceptInvitationProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAcceptInvitation",
      value: MsgAcceptInvitation.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptInvitationResponse(): MsgAcceptInvitationResponse {
  return {};
}
/**
 * MsgAcceptInvitationResponse defines the MsgAcceptInvitationResponse message.
 * @name MsgAcceptInvitationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAcceptInvitationResponse
 */
export const MsgAcceptInvitationResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgAcceptInvitationResponse",
  encode(_: MsgAcceptInvitationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptInvitationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptInvitationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgAcceptInvitationResponse>): MsgAcceptInvitationResponse {
    const message = createBaseMsgAcceptInvitationResponse();
    return message;
  },
  fromAmino(_: MsgAcceptInvitationResponseAmino): MsgAcceptInvitationResponse {
    const message = createBaseMsgAcceptInvitationResponse();
    return message;
  },
  toAmino(_: MsgAcceptInvitationResponse): MsgAcceptInvitationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcceptInvitationResponseAminoMsg): MsgAcceptInvitationResponse {
    return MsgAcceptInvitationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptInvitationResponseProtoMsg): MsgAcceptInvitationResponse {
    return MsgAcceptInvitationResponse.decode(message.value);
  },
  toProto(message: MsgAcceptInvitationResponse): Uint8Array {
    return MsgAcceptInvitationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptInvitationResponse): MsgAcceptInvitationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAcceptInvitationResponse",
      value: MsgAcceptInvitationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferDream(): MsgTransferDream {
  return {
    sender: "",
    recipient: "",
    amount: "",
    purpose: 0,
    reference: ""
  };
}
/**
 * MsgTransferDream defines the MsgTransferDream message.
 * @name MsgTransferDream
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgTransferDream
 */
export const MsgTransferDream = {
  typeUrl: "/sparkdream.rep.v1.MsgTransferDream",
  encode(message: MsgTransferDream, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.purpose !== 0) {
      writer.uint32(32).int32(message.purpose);
    }
    if (message.reference !== "") {
      writer.uint32(42).string(message.reference);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferDream {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDream();
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
          message.amount = reader.string();
          break;
        case 4:
          message.purpose = reader.int32() as any;
          break;
        case 5:
          message.reference = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransferDream>): MsgTransferDream {
    const message = createBaseMsgTransferDream();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.purpose = object.purpose ?? 0;
    message.reference = object.reference ?? "";
    return message;
  },
  fromAmino(object: MsgTransferDreamAmino): MsgTransferDream {
    const message = createBaseMsgTransferDream();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.purpose !== undefined && object.purpose !== null) {
      message.purpose = object.purpose;
    }
    if (object.reference !== undefined && object.reference !== null) {
      message.reference = object.reference;
    }
    return message;
  },
  toAmino(message: MsgTransferDream): MsgTransferDreamAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.purpose = message.purpose === 0 ? undefined : message.purpose;
    obj.reference = message.reference === "" ? undefined : message.reference;
    return obj;
  },
  fromAminoMsg(object: MsgTransferDreamAminoMsg): MsgTransferDream {
    return MsgTransferDream.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferDreamProtoMsg): MsgTransferDream {
    return MsgTransferDream.decode(message.value);
  },
  toProto(message: MsgTransferDream): Uint8Array {
    return MsgTransferDream.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferDream): MsgTransferDreamProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgTransferDream",
      value: MsgTransferDream.encode(message).finish()
    };
  }
};
function createBaseMsgTransferDreamResponse(): MsgTransferDreamResponse {
  return {};
}
/**
 * MsgTransferDreamResponse defines the MsgTransferDreamResponse message.
 * @name MsgTransferDreamResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgTransferDreamResponse
 */
export const MsgTransferDreamResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgTransferDreamResponse",
  encode(_: MsgTransferDreamResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferDreamResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgTransferDreamResponse>): MsgTransferDreamResponse {
    const message = createBaseMsgTransferDreamResponse();
    return message;
  },
  fromAmino(_: MsgTransferDreamResponseAmino): MsgTransferDreamResponse {
    const message = createBaseMsgTransferDreamResponse();
    return message;
  },
  toAmino(_: MsgTransferDreamResponse): MsgTransferDreamResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferDreamResponseAminoMsg): MsgTransferDreamResponse {
    return MsgTransferDreamResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferDreamResponseProtoMsg): MsgTransferDreamResponse {
    return MsgTransferDreamResponse.decode(message.value);
  },
  toProto(message: MsgTransferDreamResponse): Uint8Array {
    return MsgTransferDreamResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferDreamResponse): MsgTransferDreamResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgTransferDreamResponse",
      value: MsgTransferDreamResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateInterim(): MsgCreateInterim {
  return {
    creator: "",
    interimType: 0,
    referenceId: BigInt(0),
    referenceType: "",
    complexity: 0,
    deadline: BigInt(0)
  };
}
/**
 * MsgCreateInterim defines the MsgCreateInterim message.
 * @name MsgCreateInterim
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateInterim
 */
export const MsgCreateInterim = {
  typeUrl: "/sparkdream.rep.v1.MsgCreateInterim",
  encode(message: MsgCreateInterim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.interimType !== 0) {
      writer.uint32(16).int32(message.interimType);
    }
    if (message.referenceId !== BigInt(0)) {
      writer.uint32(24).uint64(message.referenceId);
    }
    if (message.referenceType !== "") {
      writer.uint32(34).string(message.referenceType);
    }
    if (message.complexity !== 0) {
      writer.uint32(40).int32(message.complexity);
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(48).int64(message.deadline);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateInterim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateInterim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.interimType = reader.int32() as any;
          break;
        case 3:
          message.referenceId = reader.uint64();
          break;
        case 4:
          message.referenceType = reader.string();
          break;
        case 5:
          message.complexity = reader.int32() as any;
          break;
        case 6:
          message.deadline = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateInterim>): MsgCreateInterim {
    const message = createBaseMsgCreateInterim();
    message.creator = object.creator ?? "";
    message.interimType = object.interimType ?? 0;
    message.referenceId = object.referenceId !== undefined && object.referenceId !== null ? BigInt(object.referenceId.toString()) : BigInt(0);
    message.referenceType = object.referenceType ?? "";
    message.complexity = object.complexity ?? 0;
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateInterimAmino): MsgCreateInterim {
    const message = createBaseMsgCreateInterim();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.interim_type !== undefined && object.interim_type !== null) {
      message.interimType = object.interim_type;
    }
    if (object.reference_id !== undefined && object.reference_id !== null) {
      message.referenceId = BigInt(object.reference_id);
    }
    if (object.reference_type !== undefined && object.reference_type !== null) {
      message.referenceType = object.reference_type;
    }
    if (object.complexity !== undefined && object.complexity !== null) {
      message.complexity = object.complexity;
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    return message;
  },
  toAmino(message: MsgCreateInterim): MsgCreateInterimAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.interim_type = message.interimType === 0 ? undefined : message.interimType;
    obj.reference_id = message.referenceId !== BigInt(0) ? message.referenceId?.toString() : undefined;
    obj.reference_type = message.referenceType === "" ? undefined : message.referenceType;
    obj.complexity = message.complexity === 0 ? undefined : message.complexity;
    obj.deadline = message.deadline !== BigInt(0) ? message.deadline?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateInterimAminoMsg): MsgCreateInterim {
    return MsgCreateInterim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateInterimProtoMsg): MsgCreateInterim {
    return MsgCreateInterim.decode(message.value);
  },
  toProto(message: MsgCreateInterim): Uint8Array {
    return MsgCreateInterim.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateInterim): MsgCreateInterimProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCreateInterim",
      value: MsgCreateInterim.encode(message).finish()
    };
  }
};
function createBaseMsgCreateInterimResponse(): MsgCreateInterimResponse {
  return {};
}
/**
 * MsgCreateInterimResponse defines the MsgCreateInterimResponse message.
 * @name MsgCreateInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateInterimResponse
 */
export const MsgCreateInterimResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgCreateInterimResponse",
  encode(_: MsgCreateInterimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateInterimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateInterimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreateInterimResponse>): MsgCreateInterimResponse {
    const message = createBaseMsgCreateInterimResponse();
    return message;
  },
  fromAmino(_: MsgCreateInterimResponseAmino): MsgCreateInterimResponse {
    const message = createBaseMsgCreateInterimResponse();
    return message;
  },
  toAmino(_: MsgCreateInterimResponse): MsgCreateInterimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateInterimResponseAminoMsg): MsgCreateInterimResponse {
    return MsgCreateInterimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateInterimResponseProtoMsg): MsgCreateInterimResponse {
    return MsgCreateInterimResponse.decode(message.value);
  },
  toProto(message: MsgCreateInterimResponse): Uint8Array {
    return MsgCreateInterimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateInterimResponse): MsgCreateInterimResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCreateInterimResponse",
      value: MsgCreateInterimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAssignInterim(): MsgAssignInterim {
  return {
    creator: "",
    interimId: BigInt(0),
    assignee: ""
  };
}
/**
 * MsgAssignInterim defines the MsgAssignInterim message.
 * @name MsgAssignInterim
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAssignInterim
 */
export const MsgAssignInterim = {
  typeUrl: "/sparkdream.rep.v1.MsgAssignInterim",
  encode(message: MsgAssignInterim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.interimId !== BigInt(0)) {
      writer.uint32(16).uint64(message.interimId);
    }
    if (message.assignee !== "") {
      writer.uint32(26).string(message.assignee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAssignInterim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAssignInterim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.interimId = reader.uint64();
          break;
        case 3:
          message.assignee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAssignInterim>): MsgAssignInterim {
    const message = createBaseMsgAssignInterim();
    message.creator = object.creator ?? "";
    message.interimId = object.interimId !== undefined && object.interimId !== null ? BigInt(object.interimId.toString()) : BigInt(0);
    message.assignee = object.assignee ?? "";
    return message;
  },
  fromAmino(object: MsgAssignInterimAmino): MsgAssignInterim {
    const message = createBaseMsgAssignInterim();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.interim_id !== undefined && object.interim_id !== null) {
      message.interimId = BigInt(object.interim_id);
    }
    if (object.assignee !== undefined && object.assignee !== null) {
      message.assignee = object.assignee;
    }
    return message;
  },
  toAmino(message: MsgAssignInterim): MsgAssignInterimAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.interim_id = message.interimId !== BigInt(0) ? message.interimId?.toString() : undefined;
    obj.assignee = message.assignee === "" ? undefined : message.assignee;
    return obj;
  },
  fromAminoMsg(object: MsgAssignInterimAminoMsg): MsgAssignInterim {
    return MsgAssignInterim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAssignInterimProtoMsg): MsgAssignInterim {
    return MsgAssignInterim.decode(message.value);
  },
  toProto(message: MsgAssignInterim): Uint8Array {
    return MsgAssignInterim.encode(message).finish();
  },
  toProtoMsg(message: MsgAssignInterim): MsgAssignInterimProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAssignInterim",
      value: MsgAssignInterim.encode(message).finish()
    };
  }
};
function createBaseMsgAssignInterimResponse(): MsgAssignInterimResponse {
  return {};
}
/**
 * MsgAssignInterimResponse defines the MsgAssignInterimResponse message.
 * @name MsgAssignInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAssignInterimResponse
 */
export const MsgAssignInterimResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgAssignInterimResponse",
  encode(_: MsgAssignInterimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAssignInterimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAssignInterimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgAssignInterimResponse>): MsgAssignInterimResponse {
    const message = createBaseMsgAssignInterimResponse();
    return message;
  },
  fromAmino(_: MsgAssignInterimResponseAmino): MsgAssignInterimResponse {
    const message = createBaseMsgAssignInterimResponse();
    return message;
  },
  toAmino(_: MsgAssignInterimResponse): MsgAssignInterimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAssignInterimResponseAminoMsg): MsgAssignInterimResponse {
    return MsgAssignInterimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAssignInterimResponseProtoMsg): MsgAssignInterimResponse {
    return MsgAssignInterimResponse.decode(message.value);
  },
  toProto(message: MsgAssignInterimResponse): Uint8Array {
    return MsgAssignInterimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAssignInterimResponse): MsgAssignInterimResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAssignInterimResponse",
      value: MsgAssignInterimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitInterimWork(): MsgSubmitInterimWork {
  return {
    creator: "",
    interimId: BigInt(0),
    deliverableUri: "",
    comments: ""
  };
}
/**
 * MsgSubmitInterimWork defines the MsgSubmitInterimWork message.
 * @name MsgSubmitInterimWork
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInterimWork
 */
export const MsgSubmitInterimWork = {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitInterimWork",
  encode(message: MsgSubmitInterimWork, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.interimId !== BigInt(0)) {
      writer.uint32(16).uint64(message.interimId);
    }
    if (message.deliverableUri !== "") {
      writer.uint32(26).string(message.deliverableUri);
    }
    if (message.comments !== "") {
      writer.uint32(34).string(message.comments);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitInterimWork {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitInterimWork();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.interimId = reader.uint64();
          break;
        case 3:
          message.deliverableUri = reader.string();
          break;
        case 4:
          message.comments = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitInterimWork>): MsgSubmitInterimWork {
    const message = createBaseMsgSubmitInterimWork();
    message.creator = object.creator ?? "";
    message.interimId = object.interimId !== undefined && object.interimId !== null ? BigInt(object.interimId.toString()) : BigInt(0);
    message.deliverableUri = object.deliverableUri ?? "";
    message.comments = object.comments ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitInterimWorkAmino): MsgSubmitInterimWork {
    const message = createBaseMsgSubmitInterimWork();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.interim_id !== undefined && object.interim_id !== null) {
      message.interimId = BigInt(object.interim_id);
    }
    if (object.deliverable_uri !== undefined && object.deliverable_uri !== null) {
      message.deliverableUri = object.deliverable_uri;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    }
    return message;
  },
  toAmino(message: MsgSubmitInterimWork): MsgSubmitInterimWorkAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.interim_id = message.interimId !== BigInt(0) ? message.interimId?.toString() : undefined;
    obj.deliverable_uri = message.deliverableUri === "" ? undefined : message.deliverableUri;
    obj.comments = message.comments === "" ? undefined : message.comments;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitInterimWorkAminoMsg): MsgSubmitInterimWork {
    return MsgSubmitInterimWork.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitInterimWorkProtoMsg): MsgSubmitInterimWork {
    return MsgSubmitInterimWork.decode(message.value);
  },
  toProto(message: MsgSubmitInterimWork): Uint8Array {
    return MsgSubmitInterimWork.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitInterimWork): MsgSubmitInterimWorkProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgSubmitInterimWork",
      value: MsgSubmitInterimWork.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitInterimWorkResponse(): MsgSubmitInterimWorkResponse {
  return {};
}
/**
 * MsgSubmitInterimWorkResponse defines the MsgSubmitInterimWorkResponse message.
 * @name MsgSubmitInterimWorkResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInterimWorkResponse
 */
export const MsgSubmitInterimWorkResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitInterimWorkResponse",
  encode(_: MsgSubmitInterimWorkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitInterimWorkResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitInterimWorkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSubmitInterimWorkResponse>): MsgSubmitInterimWorkResponse {
    const message = createBaseMsgSubmitInterimWorkResponse();
    return message;
  },
  fromAmino(_: MsgSubmitInterimWorkResponseAmino): MsgSubmitInterimWorkResponse {
    const message = createBaseMsgSubmitInterimWorkResponse();
    return message;
  },
  toAmino(_: MsgSubmitInterimWorkResponse): MsgSubmitInterimWorkResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitInterimWorkResponseAminoMsg): MsgSubmitInterimWorkResponse {
    return MsgSubmitInterimWorkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitInterimWorkResponseProtoMsg): MsgSubmitInterimWorkResponse {
    return MsgSubmitInterimWorkResponse.decode(message.value);
  },
  toProto(message: MsgSubmitInterimWorkResponse): Uint8Array {
    return MsgSubmitInterimWorkResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitInterimWorkResponse): MsgSubmitInterimWorkResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgSubmitInterimWorkResponse",
      value: MsgSubmitInterimWorkResponse.encode(message).finish()
    };
  }
};
function createBaseMsgApproveInterim(): MsgApproveInterim {
  return {
    creator: "",
    interimId: BigInt(0),
    approved: false,
    comments: ""
  };
}
/**
 * MsgApproveInterim defines the MsgApproveInterim message.
 * @name MsgApproveInterim
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInterim
 */
export const MsgApproveInterim = {
  typeUrl: "/sparkdream.rep.v1.MsgApproveInterim",
  encode(message: MsgApproveInterim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.interimId !== BigInt(0)) {
      writer.uint32(16).uint64(message.interimId);
    }
    if (message.approved === true) {
      writer.uint32(24).bool(message.approved);
    }
    if (message.comments !== "") {
      writer.uint32(34).string(message.comments);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApproveInterim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveInterim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.interimId = reader.uint64();
          break;
        case 3:
          message.approved = reader.bool();
          break;
        case 4:
          message.comments = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgApproveInterim>): MsgApproveInterim {
    const message = createBaseMsgApproveInterim();
    message.creator = object.creator ?? "";
    message.interimId = object.interimId !== undefined && object.interimId !== null ? BigInt(object.interimId.toString()) : BigInt(0);
    message.approved = object.approved ?? false;
    message.comments = object.comments ?? "";
    return message;
  },
  fromAmino(object: MsgApproveInterimAmino): MsgApproveInterim {
    const message = createBaseMsgApproveInterim();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.interim_id !== undefined && object.interim_id !== null) {
      message.interimId = BigInt(object.interim_id);
    }
    if (object.approved !== undefined && object.approved !== null) {
      message.approved = object.approved;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    }
    return message;
  },
  toAmino(message: MsgApproveInterim): MsgApproveInterimAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.interim_id = message.interimId !== BigInt(0) ? message.interimId?.toString() : undefined;
    obj.approved = message.approved === false ? undefined : message.approved;
    obj.comments = message.comments === "" ? undefined : message.comments;
    return obj;
  },
  fromAminoMsg(object: MsgApproveInterimAminoMsg): MsgApproveInterim {
    return MsgApproveInterim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgApproveInterimProtoMsg): MsgApproveInterim {
    return MsgApproveInterim.decode(message.value);
  },
  toProto(message: MsgApproveInterim): Uint8Array {
    return MsgApproveInterim.encode(message).finish();
  },
  toProtoMsg(message: MsgApproveInterim): MsgApproveInterimProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgApproveInterim",
      value: MsgApproveInterim.encode(message).finish()
    };
  }
};
function createBaseMsgApproveInterimResponse(): MsgApproveInterimResponse {
  return {};
}
/**
 * MsgApproveInterimResponse defines the MsgApproveInterimResponse message.
 * @name MsgApproveInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInterimResponse
 */
export const MsgApproveInterimResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgApproveInterimResponse",
  encode(_: MsgApproveInterimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApproveInterimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveInterimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgApproveInterimResponse>): MsgApproveInterimResponse {
    const message = createBaseMsgApproveInterimResponse();
    return message;
  },
  fromAmino(_: MsgApproveInterimResponseAmino): MsgApproveInterimResponse {
    const message = createBaseMsgApproveInterimResponse();
    return message;
  },
  toAmino(_: MsgApproveInterimResponse): MsgApproveInterimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgApproveInterimResponseAminoMsg): MsgApproveInterimResponse {
    return MsgApproveInterimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgApproveInterimResponseProtoMsg): MsgApproveInterimResponse {
    return MsgApproveInterimResponse.decode(message.value);
  },
  toProto(message: MsgApproveInterimResponse): Uint8Array {
    return MsgApproveInterimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgApproveInterimResponse): MsgApproveInterimResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgApproveInterimResponse",
      value: MsgApproveInterimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAbandonInterim(): MsgAbandonInterim {
  return {
    creator: "",
    interimId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgAbandonInterim defines the MsgAbandonInterim message.
 * @name MsgAbandonInterim
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAbandonInterim
 */
export const MsgAbandonInterim = {
  typeUrl: "/sparkdream.rep.v1.MsgAbandonInterim",
  encode(message: MsgAbandonInterim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.interimId !== BigInt(0)) {
      writer.uint32(16).uint64(message.interimId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAbandonInterim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAbandonInterim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.interimId = reader.uint64();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAbandonInterim>): MsgAbandonInterim {
    const message = createBaseMsgAbandonInterim();
    message.creator = object.creator ?? "";
    message.interimId = object.interimId !== undefined && object.interimId !== null ? BigInt(object.interimId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgAbandonInterimAmino): MsgAbandonInterim {
    const message = createBaseMsgAbandonInterim();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.interim_id !== undefined && object.interim_id !== null) {
      message.interimId = BigInt(object.interim_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgAbandonInterim): MsgAbandonInterimAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.interim_id = message.interimId !== BigInt(0) ? message.interimId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgAbandonInterimAminoMsg): MsgAbandonInterim {
    return MsgAbandonInterim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAbandonInterimProtoMsg): MsgAbandonInterim {
    return MsgAbandonInterim.decode(message.value);
  },
  toProto(message: MsgAbandonInterim): Uint8Array {
    return MsgAbandonInterim.encode(message).finish();
  },
  toProtoMsg(message: MsgAbandonInterim): MsgAbandonInterimProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAbandonInterim",
      value: MsgAbandonInterim.encode(message).finish()
    };
  }
};
function createBaseMsgAbandonInterimResponse(): MsgAbandonInterimResponse {
  return {};
}
/**
 * MsgAbandonInterimResponse defines the MsgAbandonInterimResponse message.
 * @name MsgAbandonInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAbandonInterimResponse
 */
export const MsgAbandonInterimResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgAbandonInterimResponse",
  encode(_: MsgAbandonInterimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAbandonInterimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAbandonInterimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgAbandonInterimResponse>): MsgAbandonInterimResponse {
    const message = createBaseMsgAbandonInterimResponse();
    return message;
  },
  fromAmino(_: MsgAbandonInterimResponseAmino): MsgAbandonInterimResponse {
    const message = createBaseMsgAbandonInterimResponse();
    return message;
  },
  toAmino(_: MsgAbandonInterimResponse): MsgAbandonInterimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAbandonInterimResponseAminoMsg): MsgAbandonInterimResponse {
    return MsgAbandonInterimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAbandonInterimResponseProtoMsg): MsgAbandonInterimResponse {
    return MsgAbandonInterimResponse.decode(message.value);
  },
  toProto(message: MsgAbandonInterimResponse): Uint8Array {
    return MsgAbandonInterimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAbandonInterimResponse): MsgAbandonInterimResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAbandonInterimResponse",
      value: MsgAbandonInterimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteInterim(): MsgCompleteInterim {
  return {
    creator: "",
    interimId: BigInt(0),
    completionNotes: ""
  };
}
/**
 * MsgCompleteInterim defines the MsgCompleteInterim message.
 * @name MsgCompleteInterim
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompleteInterim
 */
export const MsgCompleteInterim = {
  typeUrl: "/sparkdream.rep.v1.MsgCompleteInterim",
  encode(message: MsgCompleteInterim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.interimId !== BigInt(0)) {
      writer.uint32(16).uint64(message.interimId);
    }
    if (message.completionNotes !== "") {
      writer.uint32(26).string(message.completionNotes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompleteInterim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteInterim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.interimId = reader.uint64();
          break;
        case 3:
          message.completionNotes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCompleteInterim>): MsgCompleteInterim {
    const message = createBaseMsgCompleteInterim();
    message.creator = object.creator ?? "";
    message.interimId = object.interimId !== undefined && object.interimId !== null ? BigInt(object.interimId.toString()) : BigInt(0);
    message.completionNotes = object.completionNotes ?? "";
    return message;
  },
  fromAmino(object: MsgCompleteInterimAmino): MsgCompleteInterim {
    const message = createBaseMsgCompleteInterim();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.interim_id !== undefined && object.interim_id !== null) {
      message.interimId = BigInt(object.interim_id);
    }
    if (object.completion_notes !== undefined && object.completion_notes !== null) {
      message.completionNotes = object.completion_notes;
    }
    return message;
  },
  toAmino(message: MsgCompleteInterim): MsgCompleteInterimAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.interim_id = message.interimId !== BigInt(0) ? message.interimId?.toString() : undefined;
    obj.completion_notes = message.completionNotes === "" ? undefined : message.completionNotes;
    return obj;
  },
  fromAminoMsg(object: MsgCompleteInterimAminoMsg): MsgCompleteInterim {
    return MsgCompleteInterim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteInterimProtoMsg): MsgCompleteInterim {
    return MsgCompleteInterim.decode(message.value);
  },
  toProto(message: MsgCompleteInterim): Uint8Array {
    return MsgCompleteInterim.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteInterim): MsgCompleteInterimProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCompleteInterim",
      value: MsgCompleteInterim.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteInterimResponse(): MsgCompleteInterimResponse {
  return {};
}
/**
 * MsgCompleteInterimResponse defines the MsgCompleteInterimResponse message.
 * @name MsgCompleteInterimResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompleteInterimResponse
 */
export const MsgCompleteInterimResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgCompleteInterimResponse",
  encode(_: MsgCompleteInterimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompleteInterimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteInterimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCompleteInterimResponse>): MsgCompleteInterimResponse {
    const message = createBaseMsgCompleteInterimResponse();
    return message;
  },
  fromAmino(_: MsgCompleteInterimResponseAmino): MsgCompleteInterimResponse {
    const message = createBaseMsgCompleteInterimResponse();
    return message;
  },
  toAmino(_: MsgCompleteInterimResponse): MsgCompleteInterimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCompleteInterimResponseAminoMsg): MsgCompleteInterimResponse {
    return MsgCompleteInterimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteInterimResponseProtoMsg): MsgCompleteInterimResponse {
    return MsgCompleteInterimResponse.decode(message.value);
  },
  toProto(message: MsgCompleteInterimResponse): Uint8Array {
    return MsgCompleteInterimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteInterimResponse): MsgCompleteInterimResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCompleteInterimResponse",
      value: MsgCompleteInterimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgProposeProject(): MsgProposeProject {
  return {
    creator: "",
    name: "",
    description: "",
    tags: [],
    category: 0,
    council: "",
    requestedBudget: "",
    requestedSpark: "",
    deliverables: [],
    milestones: []
  };
}
/**
 * MsgProposeProject defines the MsgProposeProject message.
 * @name MsgProposeProject
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgProposeProject
 */
export const MsgProposeProject = {
  typeUrl: "/sparkdream.rep.v1.MsgProposeProject",
  encode(message: MsgProposeProject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    if (message.category !== 0) {
      writer.uint32(40).int32(message.category);
    }
    if (message.council !== "") {
      writer.uint32(50).string(message.council);
    }
    if (message.requestedBudget !== "") {
      writer.uint32(58).string(message.requestedBudget);
    }
    if (message.requestedSpark !== "") {
      writer.uint32(66).string(message.requestedSpark);
    }
    for (const v of message.deliverables) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.milestones) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeProject {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.tags.push(reader.string());
          break;
        case 5:
          message.category = reader.int32() as any;
          break;
        case 6:
          message.council = reader.string();
          break;
        case 7:
          message.requestedBudget = reader.string();
          break;
        case 8:
          message.requestedSpark = reader.string();
          break;
        case 9:
          message.deliverables.push(reader.string());
          break;
        case 10:
          message.milestones.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgProposeProject>): MsgProposeProject {
    const message = createBaseMsgProposeProject();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.tags = object.tags?.map(e => e) || [];
    message.category = object.category ?? 0;
    message.council = object.council ?? "";
    message.requestedBudget = object.requestedBudget ?? "";
    message.requestedSpark = object.requestedSpark ?? "";
    message.deliverables = object.deliverables?.map(e => e) || [];
    message.milestones = object.milestones?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgProposeProjectAmino): MsgProposeProject {
    const message = createBaseMsgProposeProject();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.tags = object.tags?.map(e => e) || [];
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    }
    if (object.council !== undefined && object.council !== null) {
      message.council = object.council;
    }
    if (object.requested_budget !== undefined && object.requested_budget !== null) {
      message.requestedBudget = object.requested_budget;
    }
    if (object.requested_spark !== undefined && object.requested_spark !== null) {
      message.requestedSpark = object.requested_spark;
    }
    message.deliverables = object.deliverables?.map(e => e) || [];
    message.milestones = object.milestones?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgProposeProject): MsgProposeProjectAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.category = message.category === 0 ? undefined : message.category;
    obj.council = message.council === "" ? undefined : message.council;
    obj.requested_budget = message.requestedBudget === "" ? undefined : message.requestedBudget;
    obj.requested_spark = message.requestedSpark === "" ? undefined : message.requestedSpark;
    if (message.deliverables) {
      obj.deliverables = message.deliverables.map(e => e);
    } else {
      obj.deliverables = message.deliverables;
    }
    if (message.milestones) {
      obj.milestones = message.milestones.map(e => e);
    } else {
      obj.milestones = message.milestones;
    }
    return obj;
  },
  fromAminoMsg(object: MsgProposeProjectAminoMsg): MsgProposeProject {
    return MsgProposeProject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeProjectProtoMsg): MsgProposeProject {
    return MsgProposeProject.decode(message.value);
  },
  toProto(message: MsgProposeProject): Uint8Array {
    return MsgProposeProject.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeProject): MsgProposeProjectProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgProposeProject",
      value: MsgProposeProject.encode(message).finish()
    };
  }
};
function createBaseMsgProposeProjectResponse(): MsgProposeProjectResponse {
  return {};
}
/**
 * MsgProposeProjectResponse defines the MsgProposeProjectResponse message.
 * @name MsgProposeProjectResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgProposeProjectResponse
 */
export const MsgProposeProjectResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgProposeProjectResponse",
  encode(_: MsgProposeProjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeProjectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgProposeProjectResponse>): MsgProposeProjectResponse {
    const message = createBaseMsgProposeProjectResponse();
    return message;
  },
  fromAmino(_: MsgProposeProjectResponseAmino): MsgProposeProjectResponse {
    const message = createBaseMsgProposeProjectResponse();
    return message;
  },
  toAmino(_: MsgProposeProjectResponse): MsgProposeProjectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProposeProjectResponseAminoMsg): MsgProposeProjectResponse {
    return MsgProposeProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeProjectResponseProtoMsg): MsgProposeProjectResponse {
    return MsgProposeProjectResponse.decode(message.value);
  },
  toProto(message: MsgProposeProjectResponse): Uint8Array {
    return MsgProposeProjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeProjectResponse): MsgProposeProjectResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgProposeProjectResponse",
      value: MsgProposeProjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgApproveProjectBudget(): MsgApproveProjectBudget {
  return {
    approver: "",
    projectId: BigInt(0),
    approvedBudget: "",
    approvedSpark: ""
  };
}
/**
 * MsgApproveProjectBudget defines the MsgApproveProjectBudget message.
 * @name MsgApproveProjectBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveProjectBudget
 */
export const MsgApproveProjectBudget = {
  typeUrl: "/sparkdream.rep.v1.MsgApproveProjectBudget",
  encode(message: MsgApproveProjectBudget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.approver !== "") {
      writer.uint32(10).string(message.approver);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(message.projectId);
    }
    if (message.approvedBudget !== "") {
      writer.uint32(26).string(message.approvedBudget);
    }
    if (message.approvedSpark !== "") {
      writer.uint32(34).string(message.approvedSpark);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApproveProjectBudget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveProjectBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approver = reader.string();
          break;
        case 2:
          message.projectId = reader.uint64();
          break;
        case 3:
          message.approvedBudget = reader.string();
          break;
        case 4:
          message.approvedSpark = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgApproveProjectBudget>): MsgApproveProjectBudget {
    const message = createBaseMsgApproveProjectBudget();
    message.approver = object.approver ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt(0);
    message.approvedBudget = object.approvedBudget ?? "";
    message.approvedSpark = object.approvedSpark ?? "";
    return message;
  },
  fromAmino(object: MsgApproveProjectBudgetAmino): MsgApproveProjectBudget {
    const message = createBaseMsgApproveProjectBudget();
    if (object.approver !== undefined && object.approver !== null) {
      message.approver = object.approver;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = BigInt(object.project_id);
    }
    if (object.approved_budget !== undefined && object.approved_budget !== null) {
      message.approvedBudget = object.approved_budget;
    }
    if (object.approved_spark !== undefined && object.approved_spark !== null) {
      message.approvedSpark = object.approved_spark;
    }
    return message;
  },
  toAmino(message: MsgApproveProjectBudget): MsgApproveProjectBudgetAmino {
    const obj: any = {};
    obj.approver = message.approver === "" ? undefined : message.approver;
    obj.project_id = message.projectId !== BigInt(0) ? message.projectId?.toString() : undefined;
    obj.approved_budget = message.approvedBudget === "" ? undefined : message.approvedBudget;
    obj.approved_spark = message.approvedSpark === "" ? undefined : message.approvedSpark;
    return obj;
  },
  fromAminoMsg(object: MsgApproveProjectBudgetAminoMsg): MsgApproveProjectBudget {
    return MsgApproveProjectBudget.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgApproveProjectBudgetProtoMsg): MsgApproveProjectBudget {
    return MsgApproveProjectBudget.decode(message.value);
  },
  toProto(message: MsgApproveProjectBudget): Uint8Array {
    return MsgApproveProjectBudget.encode(message).finish();
  },
  toProtoMsg(message: MsgApproveProjectBudget): MsgApproveProjectBudgetProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgApproveProjectBudget",
      value: MsgApproveProjectBudget.encode(message).finish()
    };
  }
};
function createBaseMsgApproveProjectBudgetResponse(): MsgApproveProjectBudgetResponse {
  return {};
}
/**
 * MsgApproveProjectBudgetResponse defines the MsgApproveProjectBudgetResponse message.
 * @name MsgApproveProjectBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveProjectBudgetResponse
 */
export const MsgApproveProjectBudgetResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgApproveProjectBudgetResponse",
  encode(_: MsgApproveProjectBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApproveProjectBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveProjectBudgetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgApproveProjectBudgetResponse>): MsgApproveProjectBudgetResponse {
    const message = createBaseMsgApproveProjectBudgetResponse();
    return message;
  },
  fromAmino(_: MsgApproveProjectBudgetResponseAmino): MsgApproveProjectBudgetResponse {
    const message = createBaseMsgApproveProjectBudgetResponse();
    return message;
  },
  toAmino(_: MsgApproveProjectBudgetResponse): MsgApproveProjectBudgetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgApproveProjectBudgetResponseAminoMsg): MsgApproveProjectBudgetResponse {
    return MsgApproveProjectBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgApproveProjectBudgetResponseProtoMsg): MsgApproveProjectBudgetResponse {
    return MsgApproveProjectBudgetResponse.decode(message.value);
  },
  toProto(message: MsgApproveProjectBudgetResponse): Uint8Array {
    return MsgApproveProjectBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgApproveProjectBudgetResponse): MsgApproveProjectBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgApproveProjectBudgetResponse",
      value: MsgApproveProjectBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelProject(): MsgCancelProject {
  return {
    creator: "",
    projectId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgCancelProject defines the MsgCancelProject message.
 * @name MsgCancelProject
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelProject
 */
export const MsgCancelProject = {
  typeUrl: "/sparkdream.rep.v1.MsgCancelProject",
  encode(message: MsgCancelProject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(message.projectId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelProject {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projectId = reader.uint64();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelProject>): MsgCancelProject {
    const message = createBaseMsgCancelProject();
    message.creator = object.creator ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgCancelProjectAmino): MsgCancelProject {
    const message = createBaseMsgCancelProject();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = BigInt(object.project_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgCancelProject): MsgCancelProjectAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.project_id = message.projectId !== BigInt(0) ? message.projectId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgCancelProjectAminoMsg): MsgCancelProject {
    return MsgCancelProject.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelProjectProtoMsg): MsgCancelProject {
    return MsgCancelProject.decode(message.value);
  },
  toProto(message: MsgCancelProject): Uint8Array {
    return MsgCancelProject.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelProject): MsgCancelProjectProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCancelProject",
      value: MsgCancelProject.encode(message).finish()
    };
  }
};
function createBaseMsgCancelProjectResponse(): MsgCancelProjectResponse {
  return {};
}
/**
 * MsgCancelProjectResponse defines the MsgCancelProjectResponse message.
 * @name MsgCancelProjectResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelProjectResponse
 */
export const MsgCancelProjectResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgCancelProjectResponse",
  encode(_: MsgCancelProjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelProjectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCancelProjectResponse>): MsgCancelProjectResponse {
    const message = createBaseMsgCancelProjectResponse();
    return message;
  },
  fromAmino(_: MsgCancelProjectResponseAmino): MsgCancelProjectResponse {
    const message = createBaseMsgCancelProjectResponse();
    return message;
  },
  toAmino(_: MsgCancelProjectResponse): MsgCancelProjectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelProjectResponseAminoMsg): MsgCancelProjectResponse {
    return MsgCancelProjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelProjectResponseProtoMsg): MsgCancelProjectResponse {
    return MsgCancelProjectResponse.decode(message.value);
  },
  toProto(message: MsgCancelProjectResponse): Uint8Array {
    return MsgCancelProjectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelProjectResponse): MsgCancelProjectResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCancelProjectResponse",
      value: MsgCancelProjectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateInitiative(): MsgCreateInitiative {
  return {
    creator: "",
    projectId: BigInt(0),
    title: "",
    description: "",
    tags: [],
    tier: BigInt(0),
    category: BigInt(0),
    templateId: "",
    budget: ""
  };
}
/**
 * MsgCreateInitiative defines the MsgCreateInitiative message.
 * @name MsgCreateInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateInitiative
 */
export const MsgCreateInitiative = {
  typeUrl: "/sparkdream.rep.v1.MsgCreateInitiative",
  encode(message: MsgCreateInitiative, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(message.projectId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(66).string(v!);
    }
    if (message.tier !== BigInt(0)) {
      writer.uint32(40).uint64(message.tier);
    }
    if (message.category !== BigInt(0)) {
      writer.uint32(48).uint64(message.category);
    }
    if (message.templateId !== "") {
      writer.uint32(58).string(message.templateId);
    }
    if (message.budget !== "") {
      writer.uint32(74).string(message.budget);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateInitiative {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateInitiative();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.projectId = reader.uint64();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 8:
          message.tags.push(reader.string());
          break;
        case 5:
          message.tier = reader.uint64();
          break;
        case 6:
          message.category = reader.uint64();
          break;
        case 7:
          message.templateId = reader.string();
          break;
        case 9:
          message.budget = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateInitiative>): MsgCreateInitiative {
    const message = createBaseMsgCreateInitiative();
    message.creator = object.creator ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt(0);
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.tags = object.tags?.map(e => e) || [];
    message.tier = object.tier !== undefined && object.tier !== null ? BigInt(object.tier.toString()) : BigInt(0);
    message.category = object.category !== undefined && object.category !== null ? BigInt(object.category.toString()) : BigInt(0);
    message.templateId = object.templateId ?? "";
    message.budget = object.budget ?? "";
    return message;
  },
  fromAmino(object: MsgCreateInitiativeAmino): MsgCreateInitiative {
    const message = createBaseMsgCreateInitiative();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = BigInt(object.project_id);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.tags = object.tags?.map(e => e) || [];
    if (object.tier !== undefined && object.tier !== null) {
      message.tier = BigInt(object.tier);
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = BigInt(object.category);
    }
    if (object.template_id !== undefined && object.template_id !== null) {
      message.templateId = object.template_id;
    }
    if (object.budget !== undefined && object.budget !== null) {
      message.budget = object.budget;
    }
    return message;
  },
  toAmino(message: MsgCreateInitiative): MsgCreateInitiativeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.project_id = message.projectId !== BigInt(0) ? message.projectId?.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.tier = message.tier !== BigInt(0) ? message.tier?.toString() : undefined;
    obj.category = message.category !== BigInt(0) ? message.category?.toString() : undefined;
    obj.template_id = message.templateId === "" ? undefined : message.templateId;
    obj.budget = message.budget === "" ? undefined : message.budget;
    return obj;
  },
  fromAminoMsg(object: MsgCreateInitiativeAminoMsg): MsgCreateInitiative {
    return MsgCreateInitiative.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateInitiativeProtoMsg): MsgCreateInitiative {
    return MsgCreateInitiative.decode(message.value);
  },
  toProto(message: MsgCreateInitiative): Uint8Array {
    return MsgCreateInitiative.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateInitiative): MsgCreateInitiativeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCreateInitiative",
      value: MsgCreateInitiative.encode(message).finish()
    };
  }
};
function createBaseMsgCreateInitiativeResponse(): MsgCreateInitiativeResponse {
  return {
    initiativeId: BigInt(0)
  };
}
/**
 * MsgCreateInitiativeResponse defines the MsgCreateInitiativeResponse message.
 * @name MsgCreateInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateInitiativeResponse
 */
export const MsgCreateInitiativeResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgCreateInitiativeResponse",
  encode(message: MsgCreateInitiativeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateInitiativeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateInitiativeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiativeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateInitiativeResponse>): MsgCreateInitiativeResponse {
    const message = createBaseMsgCreateInitiativeResponse();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateInitiativeResponseAmino): MsgCreateInitiativeResponse {
    const message = createBaseMsgCreateInitiativeResponse();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    return message;
  },
  toAmino(message: MsgCreateInitiativeResponse): MsgCreateInitiativeResponseAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateInitiativeResponseAminoMsg): MsgCreateInitiativeResponse {
    return MsgCreateInitiativeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateInitiativeResponseProtoMsg): MsgCreateInitiativeResponse {
    return MsgCreateInitiativeResponse.decode(message.value);
  },
  toProto(message: MsgCreateInitiativeResponse): Uint8Array {
    return MsgCreateInitiativeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateInitiativeResponse): MsgCreateInitiativeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCreateInitiativeResponse",
      value: MsgCreateInitiativeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAssignInitiative(): MsgAssignInitiative {
  return {
    creator: "",
    initiativeId: BigInt(0),
    assignee: ""
  };
}
/**
 * MsgAssignInitiative defines the MsgAssignInitiative message.
 * @name MsgAssignInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAssignInitiative
 */
export const MsgAssignInitiative = {
  typeUrl: "/sparkdream.rep.v1.MsgAssignInitiative",
  encode(message: MsgAssignInitiative, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.initiativeId);
    }
    if (message.assignee !== "") {
      writer.uint32(26).string(message.assignee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAssignInitiative {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAssignInitiative();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.initiativeId = reader.uint64();
          break;
        case 3:
          message.assignee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAssignInitiative>): MsgAssignInitiative {
    const message = createBaseMsgAssignInitiative();
    message.creator = object.creator ?? "";
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.assignee = object.assignee ?? "";
    return message;
  },
  fromAmino(object: MsgAssignInitiativeAmino): MsgAssignInitiative {
    const message = createBaseMsgAssignInitiative();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.assignee !== undefined && object.assignee !== null) {
      message.assignee = object.assignee;
    }
    return message;
  },
  toAmino(message: MsgAssignInitiative): MsgAssignInitiativeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.assignee = message.assignee === "" ? undefined : message.assignee;
    return obj;
  },
  fromAminoMsg(object: MsgAssignInitiativeAminoMsg): MsgAssignInitiative {
    return MsgAssignInitiative.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAssignInitiativeProtoMsg): MsgAssignInitiative {
    return MsgAssignInitiative.decode(message.value);
  },
  toProto(message: MsgAssignInitiative): Uint8Array {
    return MsgAssignInitiative.encode(message).finish();
  },
  toProtoMsg(message: MsgAssignInitiative): MsgAssignInitiativeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAssignInitiative",
      value: MsgAssignInitiative.encode(message).finish()
    };
  }
};
function createBaseMsgAssignInitiativeResponse(): MsgAssignInitiativeResponse {
  return {};
}
/**
 * MsgAssignInitiativeResponse defines the MsgAssignInitiativeResponse message.
 * @name MsgAssignInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAssignInitiativeResponse
 */
export const MsgAssignInitiativeResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgAssignInitiativeResponse",
  encode(_: MsgAssignInitiativeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAssignInitiativeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAssignInitiativeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgAssignInitiativeResponse>): MsgAssignInitiativeResponse {
    const message = createBaseMsgAssignInitiativeResponse();
    return message;
  },
  fromAmino(_: MsgAssignInitiativeResponseAmino): MsgAssignInitiativeResponse {
    const message = createBaseMsgAssignInitiativeResponse();
    return message;
  },
  toAmino(_: MsgAssignInitiativeResponse): MsgAssignInitiativeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAssignInitiativeResponseAminoMsg): MsgAssignInitiativeResponse {
    return MsgAssignInitiativeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAssignInitiativeResponseProtoMsg): MsgAssignInitiativeResponse {
    return MsgAssignInitiativeResponse.decode(message.value);
  },
  toProto(message: MsgAssignInitiativeResponse): Uint8Array {
    return MsgAssignInitiativeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAssignInitiativeResponse): MsgAssignInitiativeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAssignInitiativeResponse",
      value: MsgAssignInitiativeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitInitiativeWork(): MsgSubmitInitiativeWork {
  return {
    creator: "",
    initiativeId: BigInt(0),
    deliverableUri: "",
    comments: ""
  };
}
/**
 * MsgSubmitInitiativeWork defines the MsgSubmitInitiativeWork message.
 * @name MsgSubmitInitiativeWork
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInitiativeWork
 */
export const MsgSubmitInitiativeWork = {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeWork",
  encode(message: MsgSubmitInitiativeWork, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.initiativeId);
    }
    if (message.deliverableUri !== "") {
      writer.uint32(26).string(message.deliverableUri);
    }
    if (message.comments !== "") {
      writer.uint32(34).string(message.comments);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitInitiativeWork {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitInitiativeWork();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.initiativeId = reader.uint64();
          break;
        case 3:
          message.deliverableUri = reader.string();
          break;
        case 4:
          message.comments = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitInitiativeWork>): MsgSubmitInitiativeWork {
    const message = createBaseMsgSubmitInitiativeWork();
    message.creator = object.creator ?? "";
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.deliverableUri = object.deliverableUri ?? "";
    message.comments = object.comments ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitInitiativeWorkAmino): MsgSubmitInitiativeWork {
    const message = createBaseMsgSubmitInitiativeWork();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.deliverable_uri !== undefined && object.deliverable_uri !== null) {
      message.deliverableUri = object.deliverable_uri;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    }
    return message;
  },
  toAmino(message: MsgSubmitInitiativeWork): MsgSubmitInitiativeWorkAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.deliverable_uri = message.deliverableUri === "" ? undefined : message.deliverableUri;
    obj.comments = message.comments === "" ? undefined : message.comments;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitInitiativeWorkAminoMsg): MsgSubmitInitiativeWork {
    return MsgSubmitInitiativeWork.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitInitiativeWorkProtoMsg): MsgSubmitInitiativeWork {
    return MsgSubmitInitiativeWork.decode(message.value);
  },
  toProto(message: MsgSubmitInitiativeWork): Uint8Array {
    return MsgSubmitInitiativeWork.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitInitiativeWork): MsgSubmitInitiativeWorkProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeWork",
      value: MsgSubmitInitiativeWork.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitInitiativeWorkResponse(): MsgSubmitInitiativeWorkResponse {
  return {};
}
/**
 * MsgSubmitInitiativeWorkResponse defines the MsgSubmitInitiativeWorkResponse message.
 * @name MsgSubmitInitiativeWorkResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInitiativeWorkResponse
 */
export const MsgSubmitInitiativeWorkResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeWorkResponse",
  encode(_: MsgSubmitInitiativeWorkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitInitiativeWorkResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitInitiativeWorkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSubmitInitiativeWorkResponse>): MsgSubmitInitiativeWorkResponse {
    const message = createBaseMsgSubmitInitiativeWorkResponse();
    return message;
  },
  fromAmino(_: MsgSubmitInitiativeWorkResponseAmino): MsgSubmitInitiativeWorkResponse {
    const message = createBaseMsgSubmitInitiativeWorkResponse();
    return message;
  },
  toAmino(_: MsgSubmitInitiativeWorkResponse): MsgSubmitInitiativeWorkResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitInitiativeWorkResponseAminoMsg): MsgSubmitInitiativeWorkResponse {
    return MsgSubmitInitiativeWorkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitInitiativeWorkResponseProtoMsg): MsgSubmitInitiativeWorkResponse {
    return MsgSubmitInitiativeWorkResponse.decode(message.value);
  },
  toProto(message: MsgSubmitInitiativeWorkResponse): Uint8Array {
    return MsgSubmitInitiativeWorkResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitInitiativeWorkResponse): MsgSubmitInitiativeWorkResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeWorkResponse",
      value: MsgSubmitInitiativeWorkResponse.encode(message).finish()
    };
  }
};
function createBaseMsgApproveInitiative(): MsgApproveInitiative {
  return {
    creator: "",
    initiativeId: BigInt(0),
    criteriaVotes: [],
    approved: false,
    comments: ""
  };
}
/**
 * MsgApproveInitiative defines the MsgApproveInitiative message.
 * @name MsgApproveInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInitiative
 */
export const MsgApproveInitiative = {
  typeUrl: "/sparkdream.rep.v1.MsgApproveInitiative",
  encode(message: MsgApproveInitiative, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.initiativeId);
    }
    for (const v of message.criteriaVotes) {
      CriteriaVote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.approved === true) {
      writer.uint32(32).bool(message.approved);
    }
    if (message.comments !== "") {
      writer.uint32(42).string(message.comments);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApproveInitiative {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveInitiative();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.initiativeId = reader.uint64();
          break;
        case 3:
          message.criteriaVotes.push(CriteriaVote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.approved = reader.bool();
          break;
        case 5:
          message.comments = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgApproveInitiative>): MsgApproveInitiative {
    const message = createBaseMsgApproveInitiative();
    message.creator = object.creator ?? "";
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.criteriaVotes = object.criteriaVotes?.map(e => CriteriaVote.fromPartial(e)) || [];
    message.approved = object.approved ?? false;
    message.comments = object.comments ?? "";
    return message;
  },
  fromAmino(object: MsgApproveInitiativeAmino): MsgApproveInitiative {
    const message = createBaseMsgApproveInitiative();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    message.criteriaVotes = object.criteria_votes?.map(e => CriteriaVote.fromAmino(e)) || [];
    if (object.approved !== undefined && object.approved !== null) {
      message.approved = object.approved;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    }
    return message;
  },
  toAmino(message: MsgApproveInitiative): MsgApproveInitiativeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    if (message.criteriaVotes) {
      obj.criteria_votes = message.criteriaVotes.map(e => e ? CriteriaVote.toAmino(e) : undefined);
    } else {
      obj.criteria_votes = message.criteriaVotes;
    }
    obj.approved = message.approved === false ? undefined : message.approved;
    obj.comments = message.comments === "" ? undefined : message.comments;
    return obj;
  },
  fromAminoMsg(object: MsgApproveInitiativeAminoMsg): MsgApproveInitiative {
    return MsgApproveInitiative.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgApproveInitiativeProtoMsg): MsgApproveInitiative {
    return MsgApproveInitiative.decode(message.value);
  },
  toProto(message: MsgApproveInitiative): Uint8Array {
    return MsgApproveInitiative.encode(message).finish();
  },
  toProtoMsg(message: MsgApproveInitiative): MsgApproveInitiativeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgApproveInitiative",
      value: MsgApproveInitiative.encode(message).finish()
    };
  }
};
function createBaseMsgApproveInitiativeResponse(): MsgApproveInitiativeResponse {
  return {};
}
/**
 * MsgApproveInitiativeResponse defines the MsgApproveInitiativeResponse message.
 * @name MsgApproveInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInitiativeResponse
 */
export const MsgApproveInitiativeResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgApproveInitiativeResponse",
  encode(_: MsgApproveInitiativeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApproveInitiativeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveInitiativeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgApproveInitiativeResponse>): MsgApproveInitiativeResponse {
    const message = createBaseMsgApproveInitiativeResponse();
    return message;
  },
  fromAmino(_: MsgApproveInitiativeResponseAmino): MsgApproveInitiativeResponse {
    const message = createBaseMsgApproveInitiativeResponse();
    return message;
  },
  toAmino(_: MsgApproveInitiativeResponse): MsgApproveInitiativeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgApproveInitiativeResponseAminoMsg): MsgApproveInitiativeResponse {
    return MsgApproveInitiativeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgApproveInitiativeResponseProtoMsg): MsgApproveInitiativeResponse {
    return MsgApproveInitiativeResponse.decode(message.value);
  },
  toProto(message: MsgApproveInitiativeResponse): Uint8Array {
    return MsgApproveInitiativeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgApproveInitiativeResponse): MsgApproveInitiativeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgApproveInitiativeResponse",
      value: MsgApproveInitiativeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAbandonInitiative(): MsgAbandonInitiative {
  return {
    creator: "",
    initiativeId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgAbandonInitiative defines the MsgAbandonInitiative message.
 * @name MsgAbandonInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAbandonInitiative
 */
export const MsgAbandonInitiative = {
  typeUrl: "/sparkdream.rep.v1.MsgAbandonInitiative",
  encode(message: MsgAbandonInitiative, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.initiativeId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAbandonInitiative {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAbandonInitiative();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.initiativeId = reader.uint64();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAbandonInitiative>): MsgAbandonInitiative {
    const message = createBaseMsgAbandonInitiative();
    message.creator = object.creator ?? "";
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgAbandonInitiativeAmino): MsgAbandonInitiative {
    const message = createBaseMsgAbandonInitiative();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgAbandonInitiative): MsgAbandonInitiativeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgAbandonInitiativeAminoMsg): MsgAbandonInitiative {
    return MsgAbandonInitiative.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAbandonInitiativeProtoMsg): MsgAbandonInitiative {
    return MsgAbandonInitiative.decode(message.value);
  },
  toProto(message: MsgAbandonInitiative): Uint8Array {
    return MsgAbandonInitiative.encode(message).finish();
  },
  toProtoMsg(message: MsgAbandonInitiative): MsgAbandonInitiativeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAbandonInitiative",
      value: MsgAbandonInitiative.encode(message).finish()
    };
  }
};
function createBaseMsgAbandonInitiativeResponse(): MsgAbandonInitiativeResponse {
  return {};
}
/**
 * MsgAbandonInitiativeResponse defines the MsgAbandonInitiativeResponse message.
 * @name MsgAbandonInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAbandonInitiativeResponse
 */
export const MsgAbandonInitiativeResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgAbandonInitiativeResponse",
  encode(_: MsgAbandonInitiativeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAbandonInitiativeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAbandonInitiativeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgAbandonInitiativeResponse>): MsgAbandonInitiativeResponse {
    const message = createBaseMsgAbandonInitiativeResponse();
    return message;
  },
  fromAmino(_: MsgAbandonInitiativeResponseAmino): MsgAbandonInitiativeResponse {
    const message = createBaseMsgAbandonInitiativeResponse();
    return message;
  },
  toAmino(_: MsgAbandonInitiativeResponse): MsgAbandonInitiativeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAbandonInitiativeResponseAminoMsg): MsgAbandonInitiativeResponse {
    return MsgAbandonInitiativeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAbandonInitiativeResponseProtoMsg): MsgAbandonInitiativeResponse {
    return MsgAbandonInitiativeResponse.decode(message.value);
  },
  toProto(message: MsgAbandonInitiativeResponse): Uint8Array {
    return MsgAbandonInitiativeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAbandonInitiativeResponse): MsgAbandonInitiativeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAbandonInitiativeResponse",
      value: MsgAbandonInitiativeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteInitiative(): MsgCompleteInitiative {
  return {
    creator: "",
    initiativeId: BigInt(0),
    completionNotes: ""
  };
}
/**
 * MsgCompleteInitiative defines the MsgCompleteInitiative message.
 * @name MsgCompleteInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompleteInitiative
 */
export const MsgCompleteInitiative = {
  typeUrl: "/sparkdream.rep.v1.MsgCompleteInitiative",
  encode(message: MsgCompleteInitiative, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.initiativeId);
    }
    if (message.completionNotes !== "") {
      writer.uint32(26).string(message.completionNotes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompleteInitiative {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteInitiative();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.initiativeId = reader.uint64();
          break;
        case 3:
          message.completionNotes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCompleteInitiative>): MsgCompleteInitiative {
    const message = createBaseMsgCompleteInitiative();
    message.creator = object.creator ?? "";
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.completionNotes = object.completionNotes ?? "";
    return message;
  },
  fromAmino(object: MsgCompleteInitiativeAmino): MsgCompleteInitiative {
    const message = createBaseMsgCompleteInitiative();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.completion_notes !== undefined && object.completion_notes !== null) {
      message.completionNotes = object.completion_notes;
    }
    return message;
  },
  toAmino(message: MsgCompleteInitiative): MsgCompleteInitiativeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.completion_notes = message.completionNotes === "" ? undefined : message.completionNotes;
    return obj;
  },
  fromAminoMsg(object: MsgCompleteInitiativeAminoMsg): MsgCompleteInitiative {
    return MsgCompleteInitiative.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteInitiativeProtoMsg): MsgCompleteInitiative {
    return MsgCompleteInitiative.decode(message.value);
  },
  toProto(message: MsgCompleteInitiative): Uint8Array {
    return MsgCompleteInitiative.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteInitiative): MsgCompleteInitiativeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCompleteInitiative",
      value: MsgCompleteInitiative.encode(message).finish()
    };
  }
};
function createBaseMsgCompleteInitiativeResponse(): MsgCompleteInitiativeResponse {
  return {};
}
/**
 * MsgCompleteInitiativeResponse defines the MsgCompleteInitiativeResponse message.
 * @name MsgCompleteInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompleteInitiativeResponse
 */
export const MsgCompleteInitiativeResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgCompleteInitiativeResponse",
  encode(_: MsgCompleteInitiativeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompleteInitiativeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteInitiativeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCompleteInitiativeResponse>): MsgCompleteInitiativeResponse {
    const message = createBaseMsgCompleteInitiativeResponse();
    return message;
  },
  fromAmino(_: MsgCompleteInitiativeResponseAmino): MsgCompleteInitiativeResponse {
    const message = createBaseMsgCompleteInitiativeResponse();
    return message;
  },
  toAmino(_: MsgCompleteInitiativeResponse): MsgCompleteInitiativeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCompleteInitiativeResponseAminoMsg): MsgCompleteInitiativeResponse {
    return MsgCompleteInitiativeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompleteInitiativeResponseProtoMsg): MsgCompleteInitiativeResponse {
    return MsgCompleteInitiativeResponse.decode(message.value);
  },
  toProto(message: MsgCompleteInitiativeResponse): Uint8Array {
    return MsgCompleteInitiativeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCompleteInitiativeResponse): MsgCompleteInitiativeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCompleteInitiativeResponse",
      value: MsgCompleteInitiativeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStake(): MsgStake {
  return {
    staker: "",
    targetType: 0,
    targetId: BigInt(0),
    targetIdentifier: "",
    amount: ""
  };
}
/**
 * MsgStake defines the MsgStake message.
 * @name MsgStake
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgStake
 */
export const MsgStake = {
  typeUrl: "/sparkdream.rep.v1.MsgStake",
  encode(message: MsgStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.targetType !== 0) {
      writer.uint32(16).int32(message.targetType);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(24).uint64(message.targetId);
    }
    if (message.targetIdentifier !== "") {
      writer.uint32(34).string(message.targetIdentifier);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.targetType = reader.int32() as any;
          break;
        case 3:
          message.targetId = reader.uint64();
          break;
        case 4:
          message.targetIdentifier = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgStake>): MsgStake {
    const message = createBaseMsgStake();
    message.staker = object.staker ?? "";
    message.targetType = object.targetType ?? 0;
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.targetIdentifier = object.targetIdentifier ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgStakeAmino): MsgStake {
    const message = createBaseMsgStake();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.target_identifier !== undefined && object.target_identifier !== null) {
      message.targetIdentifier = object.target_identifier;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgStake): MsgStakeAmino {
    const obj: any = {};
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.target_identifier = message.targetIdentifier === "" ? undefined : message.targetIdentifier;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgStakeAminoMsg): MsgStake {
    return MsgStake.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeProtoMsg): MsgStake {
    return MsgStake.decode(message.value);
  },
  toProto(message: MsgStake): Uint8Array {
    return MsgStake.encode(message).finish();
  },
  toProtoMsg(message: MsgStake): MsgStakeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgStake",
      value: MsgStake.encode(message).finish()
    };
  }
};
function createBaseMsgStakeResponse(): MsgStakeResponse {
  return {
    stakeId: BigInt(0)
  };
}
/**
 * MsgStakeResponse defines the MsgStakeResponse message.
 * @name MsgStakeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgStakeResponse
 */
export const MsgStakeResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgStakeResponse",
  encode(message: MsgStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.stakeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgStakeResponse>): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    message.stakeId = object.stakeId !== undefined && object.stakeId !== null ? BigInt(object.stakeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgStakeResponseAmino): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    if (object.stake_id !== undefined && object.stake_id !== null) {
      message.stakeId = BigInt(object.stake_id);
    }
    return message;
  },
  toAmino(message: MsgStakeResponse): MsgStakeResponseAmino {
    const obj: any = {};
    obj.stake_id = message.stakeId !== BigInt(0) ? message.stakeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStakeResponseAminoMsg): MsgStakeResponse {
    return MsgStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeResponseProtoMsg): MsgStakeResponse {
    return MsgStakeResponse.decode(message.value);
  },
  toProto(message: MsgStakeResponse): Uint8Array {
    return MsgStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeResponse): MsgStakeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgStakeResponse",
      value: MsgStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnstake(): MsgUnstake {
  return {
    staker: "",
    stakeId: BigInt(0),
    amount: ""
  };
}
/**
 * MsgUnstake defines the MsgUnstake message.
 * @name MsgUnstake
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUnstake
 */
export const MsgUnstake = {
  typeUrl: "/sparkdream.rep.v1.MsgUnstake",
  encode(message: MsgUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.stakeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.stakeId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.stakeId = reader.uint64();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnstake>): MsgUnstake {
    const message = createBaseMsgUnstake();
    message.staker = object.staker ?? "";
    message.stakeId = object.stakeId !== undefined && object.stakeId !== null ? BigInt(object.stakeId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeAmino): MsgUnstake {
    const message = createBaseMsgUnstake();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.stake_id !== undefined && object.stake_id !== null) {
      message.stakeId = BigInt(object.stake_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgUnstake): MsgUnstakeAmino {
    const obj: any = {};
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.stake_id = message.stakeId !== BigInt(0) ? message.stakeId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeAminoMsg): MsgUnstake {
    return MsgUnstake.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeProtoMsg): MsgUnstake {
    return MsgUnstake.decode(message.value);
  },
  toProto(message: MsgUnstake): Uint8Array {
    return MsgUnstake.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstake): MsgUnstakeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgUnstake",
      value: MsgUnstake.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeResponse(): MsgUnstakeResponse {
  return {
    returnedAmount: "",
    rewardAmount: ""
  };
}
/**
 * MsgUnstakeResponse defines the MsgUnstakeResponse message.
 * @name MsgUnstakeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUnstakeResponse
 */
export const MsgUnstakeResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgUnstakeResponse",
  encode(message: MsgUnstakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.returnedAmount !== "") {
      writer.uint32(10).string(message.returnedAmount);
    }
    if (message.rewardAmount !== "") {
      writer.uint32(18).string(message.rewardAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.returnedAmount = reader.string();
          break;
        case 2:
          message.rewardAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnstakeResponse>): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    message.returnedAmount = object.returnedAmount ?? "";
    message.rewardAmount = object.rewardAmount ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeResponseAmino): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    if (object.returned_amount !== undefined && object.returned_amount !== null) {
      message.returnedAmount = object.returned_amount;
    }
    if (object.reward_amount !== undefined && object.reward_amount !== null) {
      message.rewardAmount = object.reward_amount;
    }
    return message;
  },
  toAmino(message: MsgUnstakeResponse): MsgUnstakeResponseAmino {
    const obj: any = {};
    obj.returned_amount = message.returnedAmount === "" ? undefined : message.returnedAmount;
    obj.reward_amount = message.rewardAmount === "" ? undefined : message.rewardAmount;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeResponseAminoMsg): MsgUnstakeResponse {
    return MsgUnstakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeResponseProtoMsg): MsgUnstakeResponse {
    return MsgUnstakeResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeResponse): Uint8Array {
    return MsgUnstakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeResponse): MsgUnstakeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgUnstakeResponse",
      value: MsgUnstakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimStakingRewards(): MsgClaimStakingRewards {
  return {
    staker: "",
    stakeId: BigInt(0)
  };
}
/**
 * MsgClaimStakingRewards defines the MsgClaimStakingRewards message.
 * @name MsgClaimStakingRewards
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgClaimStakingRewards
 */
export const MsgClaimStakingRewards = {
  typeUrl: "/sparkdream.rep.v1.MsgClaimStakingRewards",
  encode(message: MsgClaimStakingRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.stakeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.stakeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimStakingRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStakingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.stakeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimStakingRewards>): MsgClaimStakingRewards {
    const message = createBaseMsgClaimStakingRewards();
    message.staker = object.staker ?? "";
    message.stakeId = object.stakeId !== undefined && object.stakeId !== null ? BigInt(object.stakeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgClaimStakingRewardsAmino): MsgClaimStakingRewards {
    const message = createBaseMsgClaimStakingRewards();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.stake_id !== undefined && object.stake_id !== null) {
      message.stakeId = BigInt(object.stake_id);
    }
    return message;
  },
  toAmino(message: MsgClaimStakingRewards): MsgClaimStakingRewardsAmino {
    const obj: any = {};
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.stake_id = message.stakeId !== BigInt(0) ? message.stakeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimStakingRewardsAminoMsg): MsgClaimStakingRewards {
    return MsgClaimStakingRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimStakingRewardsProtoMsg): MsgClaimStakingRewards {
    return MsgClaimStakingRewards.decode(message.value);
  },
  toProto(message: MsgClaimStakingRewards): Uint8Array {
    return MsgClaimStakingRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimStakingRewards): MsgClaimStakingRewardsProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgClaimStakingRewards",
      value: MsgClaimStakingRewards.encode(message).finish()
    };
  }
};
function createBaseMsgClaimStakingRewardsResponse(): MsgClaimStakingRewardsResponse {
  return {
    claimedAmount: ""
  };
}
/**
 * MsgClaimStakingRewardsResponse defines the MsgClaimStakingRewardsResponse message.
 * @name MsgClaimStakingRewardsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgClaimStakingRewardsResponse
 */
export const MsgClaimStakingRewardsResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgClaimStakingRewardsResponse",
  encode(message: MsgClaimStakingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimedAmount !== "") {
      writer.uint32(10).string(message.claimedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimStakingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimStakingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimStakingRewardsResponse>): MsgClaimStakingRewardsResponse {
    const message = createBaseMsgClaimStakingRewardsResponse();
    message.claimedAmount = object.claimedAmount ?? "";
    return message;
  },
  fromAmino(object: MsgClaimStakingRewardsResponseAmino): MsgClaimStakingRewardsResponse {
    const message = createBaseMsgClaimStakingRewardsResponse();
    if (object.claimed_amount !== undefined && object.claimed_amount !== null) {
      message.claimedAmount = object.claimed_amount;
    }
    return message;
  },
  toAmino(message: MsgClaimStakingRewardsResponse): MsgClaimStakingRewardsResponseAmino {
    const obj: any = {};
    obj.claimed_amount = message.claimedAmount === "" ? undefined : message.claimedAmount;
    return obj;
  },
  fromAminoMsg(object: MsgClaimStakingRewardsResponseAminoMsg): MsgClaimStakingRewardsResponse {
    return MsgClaimStakingRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimStakingRewardsResponseProtoMsg): MsgClaimStakingRewardsResponse {
    return MsgClaimStakingRewardsResponse.decode(message.value);
  },
  toProto(message: MsgClaimStakingRewardsResponse): Uint8Array {
    return MsgClaimStakingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimStakingRewardsResponse): MsgClaimStakingRewardsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgClaimStakingRewardsResponse",
      value: MsgClaimStakingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCompoundStakingRewards(): MsgCompoundStakingRewards {
  return {
    staker: "",
    stakeId: BigInt(0)
  };
}
/**
 * MsgCompoundStakingRewards defines the MsgCompoundStakingRewards message.
 * @name MsgCompoundStakingRewards
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompoundStakingRewards
 */
export const MsgCompoundStakingRewards = {
  typeUrl: "/sparkdream.rep.v1.MsgCompoundStakingRewards",
  encode(message: MsgCompoundStakingRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.stakeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.stakeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompoundStakingRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompoundStakingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.stakeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCompoundStakingRewards>): MsgCompoundStakingRewards {
    const message = createBaseMsgCompoundStakingRewards();
    message.staker = object.staker ?? "";
    message.stakeId = object.stakeId !== undefined && object.stakeId !== null ? BigInt(object.stakeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCompoundStakingRewardsAmino): MsgCompoundStakingRewards {
    const message = createBaseMsgCompoundStakingRewards();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.stake_id !== undefined && object.stake_id !== null) {
      message.stakeId = BigInt(object.stake_id);
    }
    return message;
  },
  toAmino(message: MsgCompoundStakingRewards): MsgCompoundStakingRewardsAmino {
    const obj: any = {};
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.stake_id = message.stakeId !== BigInt(0) ? message.stakeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCompoundStakingRewardsAminoMsg): MsgCompoundStakingRewards {
    return MsgCompoundStakingRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompoundStakingRewardsProtoMsg): MsgCompoundStakingRewards {
    return MsgCompoundStakingRewards.decode(message.value);
  },
  toProto(message: MsgCompoundStakingRewards): Uint8Array {
    return MsgCompoundStakingRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgCompoundStakingRewards): MsgCompoundStakingRewardsProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCompoundStakingRewards",
      value: MsgCompoundStakingRewards.encode(message).finish()
    };
  }
};
function createBaseMsgCompoundStakingRewardsResponse(): MsgCompoundStakingRewardsResponse {
  return {
    compoundedAmount: "",
    newStakeAmount: ""
  };
}
/**
 * MsgCompoundStakingRewardsResponse defines the MsgCompoundStakingRewardsResponse message.
 * @name MsgCompoundStakingRewardsResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCompoundStakingRewardsResponse
 */
export const MsgCompoundStakingRewardsResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgCompoundStakingRewardsResponse",
  encode(message: MsgCompoundStakingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.compoundedAmount !== "") {
      writer.uint32(10).string(message.compoundedAmount);
    }
    if (message.newStakeAmount !== "") {
      writer.uint32(18).string(message.newStakeAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCompoundStakingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompoundStakingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.compoundedAmount = reader.string();
          break;
        case 2:
          message.newStakeAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCompoundStakingRewardsResponse>): MsgCompoundStakingRewardsResponse {
    const message = createBaseMsgCompoundStakingRewardsResponse();
    message.compoundedAmount = object.compoundedAmount ?? "";
    message.newStakeAmount = object.newStakeAmount ?? "";
    return message;
  },
  fromAmino(object: MsgCompoundStakingRewardsResponseAmino): MsgCompoundStakingRewardsResponse {
    const message = createBaseMsgCompoundStakingRewardsResponse();
    if (object.compounded_amount !== undefined && object.compounded_amount !== null) {
      message.compoundedAmount = object.compounded_amount;
    }
    if (object.new_stake_amount !== undefined && object.new_stake_amount !== null) {
      message.newStakeAmount = object.new_stake_amount;
    }
    return message;
  },
  toAmino(message: MsgCompoundStakingRewardsResponse): MsgCompoundStakingRewardsResponseAmino {
    const obj: any = {};
    obj.compounded_amount = message.compoundedAmount === "" ? undefined : message.compoundedAmount;
    obj.new_stake_amount = message.newStakeAmount === "" ? undefined : message.newStakeAmount;
    return obj;
  },
  fromAminoMsg(object: MsgCompoundStakingRewardsResponseAminoMsg): MsgCompoundStakingRewardsResponse {
    return MsgCompoundStakingRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCompoundStakingRewardsResponseProtoMsg): MsgCompoundStakingRewardsResponse {
    return MsgCompoundStakingRewardsResponse.decode(message.value);
  },
  toProto(message: MsgCompoundStakingRewardsResponse): Uint8Array {
    return MsgCompoundStakingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCompoundStakingRewardsResponse): MsgCompoundStakingRewardsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCompoundStakingRewardsResponse",
      value: MsgCompoundStakingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateChallenge(): MsgCreateChallenge {
  return {
    challenger: "",
    initiativeId: BigInt(0),
    reason: "",
    evidence: [],
    stakedDream: ""
  };
}
/**
 * MsgCreateChallenge defines the MsgCreateChallenge message.
 * @name MsgCreateChallenge
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateChallenge
 */
export const MsgCreateChallenge = {
  typeUrl: "/sparkdream.rep.v1.MsgCreateChallenge",
  encode(message: MsgCreateChallenge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challenger !== "") {
      writer.uint32(10).string(message.challenger);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.initiativeId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    for (const v of message.evidence) {
      writer.uint32(34).string(v!);
    }
    if (message.stakedDream !== "") {
      writer.uint32(42).string(message.stakedDream);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateChallenge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challenger = reader.string();
          break;
        case 2:
          message.initiativeId = reader.uint64();
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.evidence.push(reader.string());
          break;
        case 5:
          message.stakedDream = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateChallenge>): MsgCreateChallenge {
    const message = createBaseMsgCreateChallenge();
    message.challenger = object.challenger ?? "";
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    message.evidence = object.evidence?.map(e => e) || [];
    message.stakedDream = object.stakedDream ?? "";
    return message;
  },
  fromAmino(object: MsgCreateChallengeAmino): MsgCreateChallenge {
    const message = createBaseMsgCreateChallenge();
    if (object.challenger !== undefined && object.challenger !== null) {
      message.challenger = object.challenger;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    message.evidence = object.evidence?.map(e => e) || [];
    if (object.staked_dream !== undefined && object.staked_dream !== null) {
      message.stakedDream = object.staked_dream;
    }
    return message;
  },
  toAmino(message: MsgCreateChallenge): MsgCreateChallengeAmino {
    const obj: any = {};
    obj.challenger = message.challenger === "" ? undefined : message.challenger;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e);
    } else {
      obj.evidence = message.evidence;
    }
    obj.staked_dream = message.stakedDream === "" ? undefined : message.stakedDream;
    return obj;
  },
  fromAminoMsg(object: MsgCreateChallengeAminoMsg): MsgCreateChallenge {
    return MsgCreateChallenge.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateChallengeProtoMsg): MsgCreateChallenge {
    return MsgCreateChallenge.decode(message.value);
  },
  toProto(message: MsgCreateChallenge): Uint8Array {
    return MsgCreateChallenge.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateChallenge): MsgCreateChallengeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCreateChallenge",
      value: MsgCreateChallenge.encode(message).finish()
    };
  }
};
function createBaseMsgCreateChallengeResponse(): MsgCreateChallengeResponse {
  return {};
}
/**
 * MsgCreateChallengeResponse defines the MsgCreateChallengeResponse message.
 * @name MsgCreateChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateChallengeResponse
 */
export const MsgCreateChallengeResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgCreateChallengeResponse",
  encode(_: MsgCreateChallengeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateChallengeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreateChallengeResponse>): MsgCreateChallengeResponse {
    const message = createBaseMsgCreateChallengeResponse();
    return message;
  },
  fromAmino(_: MsgCreateChallengeResponseAmino): MsgCreateChallengeResponse {
    const message = createBaseMsgCreateChallengeResponse();
    return message;
  },
  toAmino(_: MsgCreateChallengeResponse): MsgCreateChallengeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateChallengeResponseAminoMsg): MsgCreateChallengeResponse {
    return MsgCreateChallengeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateChallengeResponseProtoMsg): MsgCreateChallengeResponse {
    return MsgCreateChallengeResponse.decode(message.value);
  },
  toProto(message: MsgCreateChallengeResponse): Uint8Array {
    return MsgCreateChallengeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateChallengeResponse): MsgCreateChallengeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCreateChallengeResponse",
      value: MsgCreateChallengeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRespondToChallenge(): MsgRespondToChallenge {
  return {
    assignee: "",
    challengeId: BigInt(0),
    response: "",
    evidence: []
  };
}
/**
 * MsgRespondToChallenge defines the MsgRespondToChallenge message.
 * @name MsgRespondToChallenge
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRespondToChallenge
 */
export const MsgRespondToChallenge = {
  typeUrl: "/sparkdream.rep.v1.MsgRespondToChallenge",
  encode(message: MsgRespondToChallenge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assignee !== "") {
      writer.uint32(10).string(message.assignee);
    }
    if (message.challengeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.challengeId);
    }
    if (message.response !== "") {
      writer.uint32(26).string(message.response);
    }
    for (const v of message.evidence) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRespondToChallenge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRespondToChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assignee = reader.string();
          break;
        case 2:
          message.challengeId = reader.uint64();
          break;
        case 3:
          message.response = reader.string();
          break;
        case 4:
          message.evidence.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRespondToChallenge>): MsgRespondToChallenge {
    const message = createBaseMsgRespondToChallenge();
    message.assignee = object.assignee ?? "";
    message.challengeId = object.challengeId !== undefined && object.challengeId !== null ? BigInt(object.challengeId.toString()) : BigInt(0);
    message.response = object.response ?? "";
    message.evidence = object.evidence?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRespondToChallengeAmino): MsgRespondToChallenge {
    const message = createBaseMsgRespondToChallenge();
    if (object.assignee !== undefined && object.assignee !== null) {
      message.assignee = object.assignee;
    }
    if (object.challenge_id !== undefined && object.challenge_id !== null) {
      message.challengeId = BigInt(object.challenge_id);
    }
    if (object.response !== undefined && object.response !== null) {
      message.response = object.response;
    }
    message.evidence = object.evidence?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRespondToChallenge): MsgRespondToChallengeAmino {
    const obj: any = {};
    obj.assignee = message.assignee === "" ? undefined : message.assignee;
    obj.challenge_id = message.challengeId !== BigInt(0) ? message.challengeId?.toString() : undefined;
    obj.response = message.response === "" ? undefined : message.response;
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e);
    } else {
      obj.evidence = message.evidence;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRespondToChallengeAminoMsg): MsgRespondToChallenge {
    return MsgRespondToChallenge.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRespondToChallengeProtoMsg): MsgRespondToChallenge {
    return MsgRespondToChallenge.decode(message.value);
  },
  toProto(message: MsgRespondToChallenge): Uint8Array {
    return MsgRespondToChallenge.encode(message).finish();
  },
  toProtoMsg(message: MsgRespondToChallenge): MsgRespondToChallengeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgRespondToChallenge",
      value: MsgRespondToChallenge.encode(message).finish()
    };
  }
};
function createBaseMsgRespondToChallengeResponse(): MsgRespondToChallengeResponse {
  return {};
}
/**
 * MsgRespondToChallengeResponse defines the MsgRespondToChallengeResponse message.
 * @name MsgRespondToChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRespondToChallengeResponse
 */
export const MsgRespondToChallengeResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgRespondToChallengeResponse",
  encode(_: MsgRespondToChallengeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRespondToChallengeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRespondToChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRespondToChallengeResponse>): MsgRespondToChallengeResponse {
    const message = createBaseMsgRespondToChallengeResponse();
    return message;
  },
  fromAmino(_: MsgRespondToChallengeResponseAmino): MsgRespondToChallengeResponse {
    const message = createBaseMsgRespondToChallengeResponse();
    return message;
  },
  toAmino(_: MsgRespondToChallengeResponse): MsgRespondToChallengeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRespondToChallengeResponseAminoMsg): MsgRespondToChallengeResponse {
    return MsgRespondToChallengeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRespondToChallengeResponseProtoMsg): MsgRespondToChallengeResponse {
    return MsgRespondToChallengeResponse.decode(message.value);
  },
  toProto(message: MsgRespondToChallengeResponse): Uint8Array {
    return MsgRespondToChallengeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRespondToChallengeResponse): MsgRespondToChallengeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgRespondToChallengeResponse",
      value: MsgRespondToChallengeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitJurorVote(): MsgSubmitJurorVote {
  return {
    juror: "",
    juryReviewId: BigInt(0),
    criteriaVotes: [],
    verdict: 0,
    confidence: "",
    reasoning: ""
  };
}
/**
 * MsgSubmitJurorVote defines the MsgSubmitJurorVote message.
 * @name MsgSubmitJurorVote
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitJurorVote
 */
export const MsgSubmitJurorVote = {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitJurorVote",
  encode(message: MsgSubmitJurorVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juror !== "") {
      writer.uint32(10).string(message.juror);
    }
    if (message.juryReviewId !== BigInt(0)) {
      writer.uint32(16).uint64(message.juryReviewId);
    }
    for (const v of message.criteriaVotes) {
      CriteriaVote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.verdict !== 0) {
      writer.uint32(32).int32(message.verdict);
    }
    if (message.confidence !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.confidence, 18).atomics);
    }
    if (message.reasoning !== "") {
      writer.uint32(50).string(message.reasoning);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitJurorVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitJurorVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juror = reader.string();
          break;
        case 2:
          message.juryReviewId = reader.uint64();
          break;
        case 3:
          message.criteriaVotes.push(CriteriaVote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.verdict = reader.int32() as any;
          break;
        case 5:
          message.confidence = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.reasoning = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitJurorVote>): MsgSubmitJurorVote {
    const message = createBaseMsgSubmitJurorVote();
    message.juror = object.juror ?? "";
    message.juryReviewId = object.juryReviewId !== undefined && object.juryReviewId !== null ? BigInt(object.juryReviewId.toString()) : BigInt(0);
    message.criteriaVotes = object.criteriaVotes?.map(e => CriteriaVote.fromPartial(e)) || [];
    message.verdict = object.verdict ?? 0;
    message.confidence = object.confidence ?? "";
    message.reasoning = object.reasoning ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitJurorVoteAmino): MsgSubmitJurorVote {
    const message = createBaseMsgSubmitJurorVote();
    if (object.juror !== undefined && object.juror !== null) {
      message.juror = object.juror;
    }
    if (object.jury_review_id !== undefined && object.jury_review_id !== null) {
      message.juryReviewId = BigInt(object.jury_review_id);
    }
    message.criteriaVotes = object.criteria_votes?.map(e => CriteriaVote.fromAmino(e)) || [];
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = object.verdict;
    }
    if (object.confidence !== undefined && object.confidence !== null) {
      message.confidence = object.confidence;
    }
    if (object.reasoning !== undefined && object.reasoning !== null) {
      message.reasoning = object.reasoning;
    }
    return message;
  },
  toAmino(message: MsgSubmitJurorVote): MsgSubmitJurorVoteAmino {
    const obj: any = {};
    obj.juror = message.juror === "" ? undefined : message.juror;
    obj.jury_review_id = message.juryReviewId !== BigInt(0) ? message.juryReviewId?.toString() : undefined;
    if (message.criteriaVotes) {
      obj.criteria_votes = message.criteriaVotes.map(e => e ? CriteriaVote.toAmino(e) : undefined);
    } else {
      obj.criteria_votes = message.criteriaVotes;
    }
    obj.verdict = message.verdict === 0 ? undefined : message.verdict;
    obj.confidence = message.confidence === "" ? undefined : message.confidence;
    obj.reasoning = message.reasoning === "" ? undefined : message.reasoning;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitJurorVoteAminoMsg): MsgSubmitJurorVote {
    return MsgSubmitJurorVote.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitJurorVoteProtoMsg): MsgSubmitJurorVote {
    return MsgSubmitJurorVote.decode(message.value);
  },
  toProto(message: MsgSubmitJurorVote): Uint8Array {
    return MsgSubmitJurorVote.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitJurorVote): MsgSubmitJurorVoteProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgSubmitJurorVote",
      value: MsgSubmitJurorVote.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitJurorVoteResponse(): MsgSubmitJurorVoteResponse {
  return {};
}
/**
 * MsgSubmitJurorVoteResponse defines the MsgSubmitJurorVoteResponse message.
 * @name MsgSubmitJurorVoteResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitJurorVoteResponse
 */
export const MsgSubmitJurorVoteResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitJurorVoteResponse",
  encode(_: MsgSubmitJurorVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitJurorVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitJurorVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSubmitJurorVoteResponse>): MsgSubmitJurorVoteResponse {
    const message = createBaseMsgSubmitJurorVoteResponse();
    return message;
  },
  fromAmino(_: MsgSubmitJurorVoteResponseAmino): MsgSubmitJurorVoteResponse {
    const message = createBaseMsgSubmitJurorVoteResponse();
    return message;
  },
  toAmino(_: MsgSubmitJurorVoteResponse): MsgSubmitJurorVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitJurorVoteResponseAminoMsg): MsgSubmitJurorVoteResponse {
    return MsgSubmitJurorVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitJurorVoteResponseProtoMsg): MsgSubmitJurorVoteResponse {
    return MsgSubmitJurorVoteResponse.decode(message.value);
  },
  toProto(message: MsgSubmitJurorVoteResponse): Uint8Array {
    return MsgSubmitJurorVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitJurorVoteResponse): MsgSubmitJurorVoteResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgSubmitJurorVoteResponse",
      value: MsgSubmitJurorVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitExpertTestimony(): MsgSubmitExpertTestimony {
  return {
    expert: "",
    juryReviewId: BigInt(0),
    opinion: "",
    reasoning: ""
  };
}
/**
 * MsgSubmitExpertTestimony defines the MsgSubmitExpertTestimony message.
 * @name MsgSubmitExpertTestimony
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitExpertTestimony
 */
export const MsgSubmitExpertTestimony = {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitExpertTestimony",
  encode(message: MsgSubmitExpertTestimony, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expert !== "") {
      writer.uint32(10).string(message.expert);
    }
    if (message.juryReviewId !== BigInt(0)) {
      writer.uint32(16).uint64(message.juryReviewId);
    }
    if (message.opinion !== "") {
      writer.uint32(26).string(message.opinion);
    }
    if (message.reasoning !== "") {
      writer.uint32(34).string(message.reasoning);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitExpertTestimony {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitExpertTestimony();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expert = reader.string();
          break;
        case 2:
          message.juryReviewId = reader.uint64();
          break;
        case 3:
          message.opinion = reader.string();
          break;
        case 4:
          message.reasoning = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitExpertTestimony>): MsgSubmitExpertTestimony {
    const message = createBaseMsgSubmitExpertTestimony();
    message.expert = object.expert ?? "";
    message.juryReviewId = object.juryReviewId !== undefined && object.juryReviewId !== null ? BigInt(object.juryReviewId.toString()) : BigInt(0);
    message.opinion = object.opinion ?? "";
    message.reasoning = object.reasoning ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitExpertTestimonyAmino): MsgSubmitExpertTestimony {
    const message = createBaseMsgSubmitExpertTestimony();
    if (object.expert !== undefined && object.expert !== null) {
      message.expert = object.expert;
    }
    if (object.jury_review_id !== undefined && object.jury_review_id !== null) {
      message.juryReviewId = BigInt(object.jury_review_id);
    }
    if (object.opinion !== undefined && object.opinion !== null) {
      message.opinion = object.opinion;
    }
    if (object.reasoning !== undefined && object.reasoning !== null) {
      message.reasoning = object.reasoning;
    }
    return message;
  },
  toAmino(message: MsgSubmitExpertTestimony): MsgSubmitExpertTestimonyAmino {
    const obj: any = {};
    obj.expert = message.expert === "" ? undefined : message.expert;
    obj.jury_review_id = message.juryReviewId !== BigInt(0) ? message.juryReviewId?.toString() : undefined;
    obj.opinion = message.opinion === "" ? undefined : message.opinion;
    obj.reasoning = message.reasoning === "" ? undefined : message.reasoning;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitExpertTestimonyAminoMsg): MsgSubmitExpertTestimony {
    return MsgSubmitExpertTestimony.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitExpertTestimonyProtoMsg): MsgSubmitExpertTestimony {
    return MsgSubmitExpertTestimony.decode(message.value);
  },
  toProto(message: MsgSubmitExpertTestimony): Uint8Array {
    return MsgSubmitExpertTestimony.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitExpertTestimony): MsgSubmitExpertTestimonyProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgSubmitExpertTestimony",
      value: MsgSubmitExpertTestimony.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitExpertTestimonyResponse(): MsgSubmitExpertTestimonyResponse {
  return {};
}
/**
 * MsgSubmitExpertTestimonyResponse defines the MsgSubmitExpertTestimonyResponse message.
 * @name MsgSubmitExpertTestimonyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitExpertTestimonyResponse
 */
export const MsgSubmitExpertTestimonyResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitExpertTestimonyResponse",
  encode(_: MsgSubmitExpertTestimonyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitExpertTestimonyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitExpertTestimonyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSubmitExpertTestimonyResponse>): MsgSubmitExpertTestimonyResponse {
    const message = createBaseMsgSubmitExpertTestimonyResponse();
    return message;
  },
  fromAmino(_: MsgSubmitExpertTestimonyResponseAmino): MsgSubmitExpertTestimonyResponse {
    const message = createBaseMsgSubmitExpertTestimonyResponse();
    return message;
  },
  toAmino(_: MsgSubmitExpertTestimonyResponse): MsgSubmitExpertTestimonyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitExpertTestimonyResponseAminoMsg): MsgSubmitExpertTestimonyResponse {
    return MsgSubmitExpertTestimonyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitExpertTestimonyResponseProtoMsg): MsgSubmitExpertTestimonyResponse {
    return MsgSubmitExpertTestimonyResponse.decode(message.value);
  },
  toProto(message: MsgSubmitExpertTestimonyResponse): Uint8Array {
    return MsgSubmitExpertTestimonyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitExpertTestimonyResponse): MsgSubmitExpertTestimonyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgSubmitExpertTestimonyResponse",
      value: MsgSubmitExpertTestimonyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChallengeContent(): MsgChallengeContent {
  return {
    challenger: "",
    targetType: BigInt(0),
    targetId: BigInt(0),
    reason: "",
    evidence: [],
    stakedDream: undefined
  };
}
/**
 * MsgChallengeContent creates a challenge against bonded content.
 * @name MsgChallengeContent
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgChallengeContent
 */
export const MsgChallengeContent = {
  typeUrl: "/sparkdream.rep.v1.MsgChallengeContent",
  encode(message: MsgChallengeContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challenger !== "") {
      writer.uint32(10).string(message.challenger);
    }
    if (message.targetType !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetType);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(24).uint64(message.targetId);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    for (const v of message.evidence) {
      writer.uint32(42).string(v!);
    }
    if (message.stakedDream !== undefined) {
      writer.uint32(50).string(message.stakedDream);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChallengeContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChallengeContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challenger = reader.string();
          break;
        case 2:
          message.targetType = reader.uint64();
          break;
        case 3:
          message.targetId = reader.uint64();
          break;
        case 4:
          message.reason = reader.string();
          break;
        case 5:
          message.evidence.push(reader.string());
          break;
        case 6:
          message.stakedDream = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgChallengeContent>): MsgChallengeContent {
    const message = createBaseMsgChallengeContent();
    message.challenger = object.challenger ?? "";
    message.targetType = object.targetType !== undefined && object.targetType !== null ? BigInt(object.targetType.toString()) : BigInt(0);
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    message.evidence = object.evidence?.map(e => e) || [];
    message.stakedDream = object.stakedDream ?? undefined;
    return message;
  },
  fromAmino(object: MsgChallengeContentAmino): MsgChallengeContent {
    const message = createBaseMsgChallengeContent();
    if (object.challenger !== undefined && object.challenger !== null) {
      message.challenger = object.challenger;
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = BigInt(object.target_type);
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    message.evidence = object.evidence?.map(e => e) || [];
    if (object.staked_dream !== undefined && object.staked_dream !== null) {
      message.stakedDream = object.staked_dream;
    }
    return message;
  },
  toAmino(message: MsgChallengeContent): MsgChallengeContentAmino {
    const obj: any = {};
    obj.challenger = message.challenger === "" ? undefined : message.challenger;
    obj.target_type = message.targetType !== BigInt(0) ? message.targetType?.toString() : undefined;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e);
    } else {
      obj.evidence = message.evidence;
    }
    obj.staked_dream = message.stakedDream === null ? undefined : message.stakedDream;
    return obj;
  },
  fromAminoMsg(object: MsgChallengeContentAminoMsg): MsgChallengeContent {
    return MsgChallengeContent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChallengeContentProtoMsg): MsgChallengeContent {
    return MsgChallengeContent.decode(message.value);
  },
  toProto(message: MsgChallengeContent): Uint8Array {
    return MsgChallengeContent.encode(message).finish();
  },
  toProtoMsg(message: MsgChallengeContent): MsgChallengeContentProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgChallengeContent",
      value: MsgChallengeContent.encode(message).finish()
    };
  }
};
function createBaseMsgChallengeContentResponse(): MsgChallengeContentResponse {
  return {
    contentChallengeId: BigInt(0)
  };
}
/**
 * MsgChallengeContentResponse defines the response for ChallengeContent.
 * @name MsgChallengeContentResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgChallengeContentResponse
 */
export const MsgChallengeContentResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgChallengeContentResponse",
  encode(message: MsgChallengeContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentChallengeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contentChallengeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChallengeContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChallengeContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentChallengeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgChallengeContentResponse>): MsgChallengeContentResponse {
    const message = createBaseMsgChallengeContentResponse();
    message.contentChallengeId = object.contentChallengeId !== undefined && object.contentChallengeId !== null ? BigInt(object.contentChallengeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgChallengeContentResponseAmino): MsgChallengeContentResponse {
    const message = createBaseMsgChallengeContentResponse();
    if (object.content_challenge_id !== undefined && object.content_challenge_id !== null) {
      message.contentChallengeId = BigInt(object.content_challenge_id);
    }
    return message;
  },
  toAmino(message: MsgChallengeContentResponse): MsgChallengeContentResponseAmino {
    const obj: any = {};
    obj.content_challenge_id = message.contentChallengeId !== BigInt(0) ? message.contentChallengeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgChallengeContentResponseAminoMsg): MsgChallengeContentResponse {
    return MsgChallengeContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChallengeContentResponseProtoMsg): MsgChallengeContentResponse {
    return MsgChallengeContentResponse.decode(message.value);
  },
  toProto(message: MsgChallengeContentResponse): Uint8Array {
    return MsgChallengeContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChallengeContentResponse): MsgChallengeContentResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgChallengeContentResponse",
      value: MsgChallengeContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRespondToContentChallenge(): MsgRespondToContentChallenge {
  return {
    author: "",
    contentChallengeId: BigInt(0),
    response: "",
    evidence: []
  };
}
/**
 * MsgRespondToContentChallenge allows the content author to respond to a challenge.
 * @name MsgRespondToContentChallenge
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRespondToContentChallenge
 */
export const MsgRespondToContentChallenge = {
  typeUrl: "/sparkdream.rep.v1.MsgRespondToContentChallenge",
  encode(message: MsgRespondToContentChallenge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.author !== "") {
      writer.uint32(10).string(message.author);
    }
    if (message.contentChallengeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.contentChallengeId);
    }
    if (message.response !== "") {
      writer.uint32(26).string(message.response);
    }
    for (const v of message.evidence) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRespondToContentChallenge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRespondToContentChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.author = reader.string();
          break;
        case 2:
          message.contentChallengeId = reader.uint64();
          break;
        case 3:
          message.response = reader.string();
          break;
        case 4:
          message.evidence.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRespondToContentChallenge>): MsgRespondToContentChallenge {
    const message = createBaseMsgRespondToContentChallenge();
    message.author = object.author ?? "";
    message.contentChallengeId = object.contentChallengeId !== undefined && object.contentChallengeId !== null ? BigInt(object.contentChallengeId.toString()) : BigInt(0);
    message.response = object.response ?? "";
    message.evidence = object.evidence?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRespondToContentChallengeAmino): MsgRespondToContentChallenge {
    const message = createBaseMsgRespondToContentChallenge();
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    }
    if (object.content_challenge_id !== undefined && object.content_challenge_id !== null) {
      message.contentChallengeId = BigInt(object.content_challenge_id);
    }
    if (object.response !== undefined && object.response !== null) {
      message.response = object.response;
    }
    message.evidence = object.evidence?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRespondToContentChallenge): MsgRespondToContentChallengeAmino {
    const obj: any = {};
    obj.author = message.author === "" ? undefined : message.author;
    obj.content_challenge_id = message.contentChallengeId !== BigInt(0) ? message.contentChallengeId?.toString() : undefined;
    obj.response = message.response === "" ? undefined : message.response;
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e);
    } else {
      obj.evidence = message.evidence;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRespondToContentChallengeAminoMsg): MsgRespondToContentChallenge {
    return MsgRespondToContentChallenge.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRespondToContentChallengeProtoMsg): MsgRespondToContentChallenge {
    return MsgRespondToContentChallenge.decode(message.value);
  },
  toProto(message: MsgRespondToContentChallenge): Uint8Array {
    return MsgRespondToContentChallenge.encode(message).finish();
  },
  toProtoMsg(message: MsgRespondToContentChallenge): MsgRespondToContentChallengeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgRespondToContentChallenge",
      value: MsgRespondToContentChallenge.encode(message).finish()
    };
  }
};
function createBaseMsgRespondToContentChallengeResponse(): MsgRespondToContentChallengeResponse {
  return {};
}
/**
 * MsgRespondToContentChallengeResponse defines the response for RespondToContentChallenge.
 * @name MsgRespondToContentChallengeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRespondToContentChallengeResponse
 */
export const MsgRespondToContentChallengeResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgRespondToContentChallengeResponse",
  encode(_: MsgRespondToContentChallengeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRespondToContentChallengeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRespondToContentChallengeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRespondToContentChallengeResponse>): MsgRespondToContentChallengeResponse {
    const message = createBaseMsgRespondToContentChallengeResponse();
    return message;
  },
  fromAmino(_: MsgRespondToContentChallengeResponseAmino): MsgRespondToContentChallengeResponse {
    const message = createBaseMsgRespondToContentChallengeResponse();
    return message;
  },
  toAmino(_: MsgRespondToContentChallengeResponse): MsgRespondToContentChallengeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRespondToContentChallengeResponseAminoMsg): MsgRespondToContentChallengeResponse {
    return MsgRespondToContentChallengeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRespondToContentChallengeResponseProtoMsg): MsgRespondToContentChallengeResponse {
    return MsgRespondToContentChallengeResponse.decode(message.value);
  },
  toProto(message: MsgRespondToContentChallengeResponse): Uint8Array {
    return MsgRespondToContentChallengeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRespondToContentChallengeResponse): MsgRespondToContentChallengeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgRespondToContentChallengeResponse",
      value: MsgRespondToContentChallengeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterZkPublicKey(): MsgRegisterZkPublicKey {
  return {
    member: "",
    zkPublicKey: new Uint8Array()
  };
}
/**
 * MsgRegisterZkPublicKey defines the MsgRegisterZkPublicKey message.
 * @name MsgRegisterZkPublicKey
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRegisterZkPublicKey
 */
export const MsgRegisterZkPublicKey = {
  typeUrl: "/sparkdream.rep.v1.MsgRegisterZkPublicKey",
  encode(message: MsgRegisterZkPublicKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.zkPublicKey.length !== 0) {
      writer.uint32(18).bytes(message.zkPublicKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterZkPublicKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterZkPublicKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.zkPublicKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterZkPublicKey>): MsgRegisterZkPublicKey {
    const message = createBaseMsgRegisterZkPublicKey();
    message.member = object.member ?? "";
    message.zkPublicKey = object.zkPublicKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgRegisterZkPublicKeyAmino): MsgRegisterZkPublicKey {
    const message = createBaseMsgRegisterZkPublicKey();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.zk_public_key !== undefined && object.zk_public_key !== null) {
      message.zkPublicKey = bytesFromBase64(object.zk_public_key);
    }
    return message;
  },
  toAmino(message: MsgRegisterZkPublicKey): MsgRegisterZkPublicKeyAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.zk_public_key = message.zkPublicKey ? base64FromBytes(message.zkPublicKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterZkPublicKeyAminoMsg): MsgRegisterZkPublicKey {
    return MsgRegisterZkPublicKey.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterZkPublicKeyProtoMsg): MsgRegisterZkPublicKey {
    return MsgRegisterZkPublicKey.decode(message.value);
  },
  toProto(message: MsgRegisterZkPublicKey): Uint8Array {
    return MsgRegisterZkPublicKey.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterZkPublicKey): MsgRegisterZkPublicKeyProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgRegisterZkPublicKey",
      value: MsgRegisterZkPublicKey.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterZkPublicKeyResponse(): MsgRegisterZkPublicKeyResponse {
  return {};
}
/**
 * MsgRegisterZkPublicKeyResponse defines the MsgRegisterZkPublicKeyResponse message.
 * @name MsgRegisterZkPublicKeyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgRegisterZkPublicKeyResponse
 */
export const MsgRegisterZkPublicKeyResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgRegisterZkPublicKeyResponse",
  encode(_: MsgRegisterZkPublicKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterZkPublicKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterZkPublicKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRegisterZkPublicKeyResponse>): MsgRegisterZkPublicKeyResponse {
    const message = createBaseMsgRegisterZkPublicKeyResponse();
    return message;
  },
  fromAmino(_: MsgRegisterZkPublicKeyResponseAmino): MsgRegisterZkPublicKeyResponse {
    const message = createBaseMsgRegisterZkPublicKeyResponse();
    return message;
  },
  toAmino(_: MsgRegisterZkPublicKeyResponse): MsgRegisterZkPublicKeyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterZkPublicKeyResponseAminoMsg): MsgRegisterZkPublicKeyResponse {
    return MsgRegisterZkPublicKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterZkPublicKeyResponseProtoMsg): MsgRegisterZkPublicKeyResponse {
    return MsgRegisterZkPublicKeyResponse.decode(message.value);
  },
  toProto(message: MsgRegisterZkPublicKeyResponse): Uint8Array {
    return MsgRegisterZkPublicKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterZkPublicKeyResponse): MsgRegisterZkPublicKeyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgRegisterZkPublicKeyResponse",
      value: MsgRegisterZkPublicKeyResponse.encode(message).finish()
    };
  }
};