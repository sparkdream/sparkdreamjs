//@ts-nocheck
import { Params, ParamsAmino, RepOperationalParams, RepOperationalParamsAmino } from "./params";
import { InterimType, InterimComplexity } from "./interim";
import { ProjectCategory, VerificationPolicy, VerificationPolicyAmino } from "./project";
import { VerificationCriteria, VerificationCriteriaAmino } from "./acceptance_criteria";
import { StakeTargetType } from "./stake";
import { CriteriaVote, CriteriaVoteAmino, Verdict } from "./jury_review";
import { ReviewEscalation } from "./initiative";
import { RoleType } from "./bonded_role";
import { GovAppealStatus } from "./accountability";
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
  type: "sparkdream/x/rep/MsgInviteMember";
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
  type: "sparkdream/x/rep/MsgAcceptInvitation";
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
  type: "sparkdream/x/rep/MsgTransferDream";
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
  type: "sparkdream/x/rep/MsgCreateInterim";
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
  type: "sparkdream/x/rep/MsgAssignInterim";
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
  type: "sparkdream/x/rep/MsgSubmitInterimWork";
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
  type: "sparkdream/x/rep/MsgApproveInterim";
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
  type: "sparkdream/x/rep/MsgAbandonInterim";
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
  type: "sparkdream/x/rep/MsgCompleteInterim";
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
  type: "sparkdream/x/rep/MsgProposeProject";
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
  type: "sparkdream/x/rep/MsgApproveProjectBudget";
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
  type: "sparkdream/x/rep/MsgCancelProject";
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
  budget: string;
  /**
   * Optional definition of done, fixed at creation. See
   * Initiative.acceptance_criteria.
   */
  acceptanceCriteria: VerificationCriteria[];
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
  budget?: string;
  /**
   * Optional definition of done, fixed at creation. See
   * Initiative.acceptance_criteria.
   */
  acceptance_criteria?: VerificationCriteriaAmino[];
}
export interface MsgCreateInitiativeAminoMsg {
  type: "sparkdream/x/rep/MsgCreateInitiative";
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
  type: "sparkdream/x/rep/MsgAssignInitiative";
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
  type: "sparkdream/x/rep/MsgSubmitInitiativeWork";
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
 * MsgApproveInitiative records a reviewer's verdict on submitted work.
 * 
 * Review is advisory for budget-backed, externally assigned work and binding
 * only in aggregate for stakers, whose disapproval is weighted by the DREAM
 * they have staked on the initiative. Conviction remains the gate on payout.
 * 
 * This message used to carry a `criteria_votes` field that the handler read
 * nowhere. Per-criterion verdicts belong on MsgSubmitJurorVote, which stores
 * them on the JurorVote record and validates each id against the initiative's
 * acceptance criteria. A field the handler silently discards is worse than no
 * field: clients populate it and users believe it did something.
 * @name MsgApproveInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInitiative
 */
export interface MsgApproveInitiative {
  creator: string;
  initiativeId: bigint;
  approved: boolean;
  comments: string;
}
export interface MsgApproveInitiativeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgApproveInitiative";
  value: Uint8Array;
}
/**
 * MsgApproveInitiative records a reviewer's verdict on submitted work.
 * 
 * Review is advisory for budget-backed, externally assigned work and binding
 * only in aggregate for stakers, whose disapproval is weighted by the DREAM
 * they have staked on the initiative. Conviction remains the gate on payout.
 * 
 * This message used to carry a `criteria_votes` field that the handler read
 * nowhere. Per-criterion verdicts belong on MsgSubmitJurorVote, which stores
 * them on the JurorVote record and validates each id against the initiative's
 * acceptance criteria. A field the handler silently discards is worse than no
 * field: clients populate it and users believe it did something.
 * @name MsgApproveInitiativeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInitiative
 */
export interface MsgApproveInitiativeAmino {
  creator?: string;
  initiative_id?: string;
  approved?: boolean;
  comments?: string;
}
export interface MsgApproveInitiativeAminoMsg {
  type: "sparkdream/x/rep/MsgApproveInitiative";
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
  type: "sparkdream/x/rep/MsgAbandonInitiative";
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
  type: "sparkdream/x/rep/MsgCompleteInitiative";
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
  type: "sparkdream/x/rep/MsgStake";
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
  type: "sparkdream/x/rep/MsgUnstake";
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
  type: "sparkdream/x/rep/MsgClaimStakingRewards";
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
  type: "sparkdream/x/rep/MsgCompoundStakingRewards";
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
  /**
   * Optional id of the acceptance criterion the work is said to fail. Must
   * match one declared on the initiative.
   */
  criteriaId: string;
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
  /**
   * Optional id of the acceptance criterion the work is said to fail. Must
   * match one declared on the initiative.
   */
  criteria_id?: string;
}
export interface MsgCreateChallengeAminoMsg {
  type: "sparkdream/x/rep/MsgCreateChallenge";
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
 * MsgAcceptJuryDuty accepts a jury summons, turning a seat drawn by lot into a
 * commitment to vote.
 * @name MsgAcceptJuryDuty
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAcceptJuryDuty
 */
export interface MsgAcceptJuryDuty {
  juror: string;
  juryReviewId: bigint;
}
export interface MsgAcceptJuryDutyProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAcceptJuryDuty";
  value: Uint8Array;
}
/**
 * MsgAcceptJuryDuty accepts a jury summons, turning a seat drawn by lot into a
 * commitment to vote.
 * @name MsgAcceptJuryDutyAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAcceptJuryDuty
 */
export interface MsgAcceptJuryDutyAmino {
  juror?: string;
  jury_review_id?: string;
}
export interface MsgAcceptJuryDutyAminoMsg {
  type: "sparkdream/x/rep/MsgAcceptJuryDuty";
  value: MsgAcceptJuryDutyAmino;
}
/**
 * MsgAcceptJuryDutyResponse defines the MsgAcceptJuryDuty response.
 * @name MsgAcceptJuryDutyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAcceptJuryDutyResponse
 */
export interface MsgAcceptJuryDutyResponse {}
export interface MsgAcceptJuryDutyResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAcceptJuryDutyResponse";
  value: Uint8Array;
}
/**
 * MsgAcceptJuryDutyResponse defines the MsgAcceptJuryDuty response.
 * @name MsgAcceptJuryDutyResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAcceptJuryDutyResponse
 */
export interface MsgAcceptJuryDutyResponseAmino {}
export interface MsgAcceptJuryDutyResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgAcceptJuryDutyResponse";
  value: MsgAcceptJuryDutyResponseAmino;
}
/**
 * MsgDeclineJuryDuty releases a seat immediately so it can be redrawn. Free by
 * design: a juror who has no time to review the work should say so early rather
 * than sit on the seat until the deadline.
 * @name MsgDeclineJuryDuty
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgDeclineJuryDuty
 */
export interface MsgDeclineJuryDuty {
  juror: string;
  juryReviewId: bigint;
}
export interface MsgDeclineJuryDutyProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgDeclineJuryDuty";
  value: Uint8Array;
}
/**
 * MsgDeclineJuryDuty releases a seat immediately so it can be redrawn. Free by
 * design: a juror who has no time to review the work should say so early rather
 * than sit on the seat until the deadline.
 * @name MsgDeclineJuryDutyAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgDeclineJuryDuty
 */
export interface MsgDeclineJuryDutyAmino {
  juror?: string;
  jury_review_id?: string;
}
export interface MsgDeclineJuryDutyAminoMsg {
  type: "sparkdream/x/rep/MsgDeclineJuryDuty";
  value: MsgDeclineJuryDutyAmino;
}
/**
 * MsgDeclineJuryDutyResponse defines the MsgDeclineJuryDuty response.
 * @name MsgDeclineJuryDutyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgDeclineJuryDutyResponse
 */
export interface MsgDeclineJuryDutyResponse {}
export interface MsgDeclineJuryDutyResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgDeclineJuryDutyResponse";
  value: Uint8Array;
}
/**
 * MsgDeclineJuryDutyResponse defines the MsgDeclineJuryDuty response.
 * @name MsgDeclineJuryDutyResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgDeclineJuryDutyResponse
 */
export interface MsgDeclineJuryDutyResponseAmino {}
export interface MsgDeclineJuryDutyResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgDeclineJuryDutyResponse";
  value: MsgDeclineJuryDutyResponseAmino;
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
  type: "sparkdream/x/rep/MsgRespondToChallenge";
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
  type: "sparkdream/x/rep/MsgSubmitJurorVote";
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
  type: "sparkdream/x/rep/MsgSubmitExpertTestimony";
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
   * StakeTargetType (7=BLOG_AUTHOR_BOND, 8=FORUM_AUTHOR_BOND, 9=COLLECTION_AUTHOR_BOND, 10=BLOG_REPLY_AUTHOR_BOND)
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
   * StakeTargetType (7=BLOG_AUTHOR_BOND, 8=FORUM_AUTHOR_BOND, 9=COLLECTION_AUTHOR_BOND, 10=BLOG_REPLY_AUTHOR_BOND)
   */
  target_type?: string;
  target_id?: string;
  reason?: string;
  evidence?: string[];
  staked_dream?: string;
}
export interface MsgChallengeContentAminoMsg {
  type: "sparkdream/x/rep/MsgChallengeContent";
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
  type: "sparkdream/x/rep/MsgRespondToContentChallenge";
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
  type: "sparkdream/x/rep/MsgRegisterZkPublicKey";
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
/**
 * MsgCreateTag defines the MsgCreateTag message. Creates a new tag in the
 * shared tag registry. Caller must meet the minimum trust level and pay the
 * tag-creation fee.
 * @name MsgCreateTag
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateTag
 */
export interface MsgCreateTag {
  creator: string;
  name: string;
}
export interface MsgCreateTagProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCreateTag";
  value: Uint8Array;
}
/**
 * MsgCreateTag defines the MsgCreateTag message. Creates a new tag in the
 * shared tag registry. Caller must meet the minimum trust level and pay the
 * tag-creation fee.
 * @name MsgCreateTagAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateTag
 */
export interface MsgCreateTagAmino {
  creator?: string;
  name?: string;
}
export interface MsgCreateTagAminoMsg {
  type: "sparkdream/x/rep/MsgCreateTag";
  value: MsgCreateTagAmino;
}
/**
 * MsgCreateTagResponse defines the response for CreateTag.
 * @name MsgCreateTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateTagResponse
 */
export interface MsgCreateTagResponse {
  name: string;
}
export interface MsgCreateTagResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCreateTagResponse";
  value: Uint8Array;
}
/**
 * MsgCreateTagResponse defines the response for CreateTag.
 * @name MsgCreateTagResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateTagResponse
 */
export interface MsgCreateTagResponseAmino {
  name?: string;
}
export interface MsgCreateTagResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgCreateTagResponse";
  value: MsgCreateTagResponseAmino;
}
/**
 * MsgReportTag defines the MsgReportTag message.
 * @name MsgReportTag
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReportTag
 */
export interface MsgReportTag {
  creator: string;
  tagName: string;
  reason: string;
}
export interface MsgReportTagProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgReportTag";
  value: Uint8Array;
}
/**
 * MsgReportTag defines the MsgReportTag message.
 * @name MsgReportTagAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReportTag
 */
export interface MsgReportTagAmino {
  creator?: string;
  tag_name?: string;
  reason?: string;
}
export interface MsgReportTagAminoMsg {
  type: "sparkdream/x/rep/MsgReportTag";
  value: MsgReportTagAmino;
}
/**
 * MsgReportTagResponse defines the MsgReportTagResponse message.
 * @name MsgReportTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReportTagResponse
 */
export interface MsgReportTagResponse {}
export interface MsgReportTagResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgReportTagResponse";
  value: Uint8Array;
}
/**
 * MsgReportTagResponse defines the MsgReportTagResponse message.
 * @name MsgReportTagResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReportTagResponse
 */
export interface MsgReportTagResponseAmino {}
export interface MsgReportTagResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgReportTagResponse";
  value: MsgReportTagResponseAmino;
}
/**
 * MsgResolveTagReport defines the MsgResolveTagReport message.
 * @name MsgResolveTagReport
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveTagReport
 */
export interface MsgResolveTagReport {
  creator: string;
  tagName: string;
  action: bigint;
  reserveAuthority: string;
  reserveMembersCanUse: boolean;
}
export interface MsgResolveTagReportProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgResolveTagReport";
  value: Uint8Array;
}
/**
 * MsgResolveTagReport defines the MsgResolveTagReport message.
 * @name MsgResolveTagReportAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveTagReport
 */
export interface MsgResolveTagReportAmino {
  creator?: string;
  tag_name?: string;
  action?: string;
  reserve_authority?: string;
  reserve_members_can_use?: boolean;
}
export interface MsgResolveTagReportAminoMsg {
  type: "sparkdream/x/rep/MsgResolveTagReport";
  value: MsgResolveTagReportAmino;
}
/**
 * MsgResolveTagReportResponse defines the MsgResolveTagReportResponse message.
 * @name MsgResolveTagReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveTagReportResponse
 */
export interface MsgResolveTagReportResponse {}
export interface MsgResolveTagReportResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgResolveTagReportResponse";
  value: Uint8Array;
}
/**
 * MsgResolveTagReportResponse defines the MsgResolveTagReportResponse message.
 * @name MsgResolveTagReportResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveTagReportResponse
 */
export interface MsgResolveTagReportResponseAmino {}
export interface MsgResolveTagReportResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgResolveTagReportResponse";
  value: MsgResolveTagReportResponseAmino;
}
/**
 * MsgCreateTagBudget defines the MsgCreateTagBudget message.
 * @name MsgCreateTagBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateTagBudget
 */
export interface MsgCreateTagBudget {
  creator: string;
  tag: string;
  initialPool: string;
  membersOnly: boolean;
}
export interface MsgCreateTagBudgetProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCreateTagBudget";
  value: Uint8Array;
}
/**
 * MsgCreateTagBudget defines the MsgCreateTagBudget message.
 * @name MsgCreateTagBudgetAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateTagBudget
 */
export interface MsgCreateTagBudgetAmino {
  creator?: string;
  tag?: string;
  initial_pool?: string;
  members_only?: boolean;
}
export interface MsgCreateTagBudgetAminoMsg {
  type: "sparkdream/x/rep/MsgCreateTagBudget";
  value: MsgCreateTagBudgetAmino;
}
/**
 * MsgCreateTagBudgetResponse defines the MsgCreateTagBudgetResponse message.
 * @name MsgCreateTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateTagBudgetResponse
 */
export interface MsgCreateTagBudgetResponse {}
export interface MsgCreateTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCreateTagBudgetResponse";
  value: Uint8Array;
}
/**
 * MsgCreateTagBudgetResponse defines the MsgCreateTagBudgetResponse message.
 * @name MsgCreateTagBudgetResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateTagBudgetResponse
 */
export interface MsgCreateTagBudgetResponseAmino {}
export interface MsgCreateTagBudgetResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgCreateTagBudgetResponse";
  value: MsgCreateTagBudgetResponseAmino;
}
/**
 * MsgAwardFromTagBudget defines the MsgAwardFromTagBudget message.
 * @name MsgAwardFromTagBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAwardFromTagBudget
 */
export interface MsgAwardFromTagBudget {
  creator: string;
  budgetId: bigint;
  postId: bigint;
  amount: string;
  reason: string;
}
export interface MsgAwardFromTagBudgetProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAwardFromTagBudget";
  value: Uint8Array;
}
/**
 * MsgAwardFromTagBudget defines the MsgAwardFromTagBudget message.
 * @name MsgAwardFromTagBudgetAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAwardFromTagBudget
 */
export interface MsgAwardFromTagBudgetAmino {
  creator?: string;
  budget_id?: string;
  post_id?: string;
  amount?: string;
  reason?: string;
}
export interface MsgAwardFromTagBudgetAminoMsg {
  type: "sparkdream/x/rep/MsgAwardFromTagBudget";
  value: MsgAwardFromTagBudgetAmino;
}
/**
 * MsgAwardFromTagBudgetResponse defines the MsgAwardFromTagBudgetResponse message.
 * @name MsgAwardFromTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAwardFromTagBudgetResponse
 */
export interface MsgAwardFromTagBudgetResponse {}
export interface MsgAwardFromTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAwardFromTagBudgetResponse";
  value: Uint8Array;
}
/**
 * MsgAwardFromTagBudgetResponse defines the MsgAwardFromTagBudgetResponse message.
 * @name MsgAwardFromTagBudgetResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAwardFromTagBudgetResponse
 */
export interface MsgAwardFromTagBudgetResponseAmino {}
export interface MsgAwardFromTagBudgetResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgAwardFromTagBudgetResponse";
  value: MsgAwardFromTagBudgetResponseAmino;
}
/**
 * MsgTopUpTagBudget defines the MsgTopUpTagBudget message.
 * @name MsgTopUpTagBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgTopUpTagBudget
 */
export interface MsgTopUpTagBudget {
  creator: string;
  budgetId: bigint;
  amount: string;
}
export interface MsgTopUpTagBudgetProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgTopUpTagBudget";
  value: Uint8Array;
}
/**
 * MsgTopUpTagBudget defines the MsgTopUpTagBudget message.
 * @name MsgTopUpTagBudgetAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgTopUpTagBudget
 */
export interface MsgTopUpTagBudgetAmino {
  creator?: string;
  budget_id?: string;
  amount?: string;
}
export interface MsgTopUpTagBudgetAminoMsg {
  type: "sparkdream/x/rep/MsgTopUpTagBudget";
  value: MsgTopUpTagBudgetAmino;
}
/**
 * MsgTopUpTagBudgetResponse defines the MsgTopUpTagBudgetResponse message.
 * @name MsgTopUpTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgTopUpTagBudgetResponse
 */
export interface MsgTopUpTagBudgetResponse {}
export interface MsgTopUpTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgTopUpTagBudgetResponse";
  value: Uint8Array;
}
/**
 * MsgTopUpTagBudgetResponse defines the MsgTopUpTagBudgetResponse message.
 * @name MsgTopUpTagBudgetResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgTopUpTagBudgetResponse
 */
export interface MsgTopUpTagBudgetResponseAmino {}
export interface MsgTopUpTagBudgetResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgTopUpTagBudgetResponse";
  value: MsgTopUpTagBudgetResponseAmino;
}
/**
 * MsgToggleTagBudget defines the MsgToggleTagBudget message.
 * @name MsgToggleTagBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgToggleTagBudget
 */
export interface MsgToggleTagBudget {
  creator: string;
  budgetId: bigint;
  active: boolean;
}
export interface MsgToggleTagBudgetProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgToggleTagBudget";
  value: Uint8Array;
}
/**
 * MsgToggleTagBudget defines the MsgToggleTagBudget message.
 * @name MsgToggleTagBudgetAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgToggleTagBudget
 */
export interface MsgToggleTagBudgetAmino {
  creator?: string;
  budget_id?: string;
  active?: boolean;
}
export interface MsgToggleTagBudgetAminoMsg {
  type: "sparkdream/x/rep/MsgToggleTagBudget";
  value: MsgToggleTagBudgetAmino;
}
/**
 * MsgToggleTagBudgetResponse defines the MsgToggleTagBudgetResponse message.
 * @name MsgToggleTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgToggleTagBudgetResponse
 */
export interface MsgToggleTagBudgetResponse {}
export interface MsgToggleTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgToggleTagBudgetResponse";
  value: Uint8Array;
}
/**
 * MsgToggleTagBudgetResponse defines the MsgToggleTagBudgetResponse message.
 * @name MsgToggleTagBudgetResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgToggleTagBudgetResponse
 */
export interface MsgToggleTagBudgetResponseAmino {}
export interface MsgToggleTagBudgetResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgToggleTagBudgetResponse";
  value: MsgToggleTagBudgetResponseAmino;
}
/**
 * MsgWithdrawTagBudget defines the MsgWithdrawTagBudget message.
 * @name MsgWithdrawTagBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgWithdrawTagBudget
 */
export interface MsgWithdrawTagBudget {
  creator: string;
  budgetId: bigint;
}
export interface MsgWithdrawTagBudgetProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgWithdrawTagBudget";
  value: Uint8Array;
}
/**
 * MsgWithdrawTagBudget defines the MsgWithdrawTagBudget message.
 * @name MsgWithdrawTagBudgetAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgWithdrawTagBudget
 */
export interface MsgWithdrawTagBudgetAmino {
  creator?: string;
  budget_id?: string;
}
export interface MsgWithdrawTagBudgetAminoMsg {
  type: "sparkdream/x/rep/MsgWithdrawTagBudget";
  value: MsgWithdrawTagBudgetAmino;
}
/**
 * MsgWithdrawTagBudgetResponse defines the MsgWithdrawTagBudgetResponse message.
 * @name MsgWithdrawTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgWithdrawTagBudgetResponse
 */
export interface MsgWithdrawTagBudgetResponse {}
export interface MsgWithdrawTagBudgetResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgWithdrawTagBudgetResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawTagBudgetResponse defines the MsgWithdrawTagBudgetResponse message.
 * @name MsgWithdrawTagBudgetResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgWithdrawTagBudgetResponse
 */
export interface MsgWithdrawTagBudgetResponseAmino {}
export interface MsgWithdrawTagBudgetResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgWithdrawTagBudgetResponse";
  value: MsgWithdrawTagBudgetResponseAmino;
}
/**
 * MsgBondRole bonds DREAM against a specific role_type. The role's
 * BondedRoleConfig controls eligibility (min_bond, min_rep_tier,
 * min_trust_level, min_age_blocks) and demotion behaviour.
 * @name MsgBondRole
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgBondRole
 */
export interface MsgBondRole {
  creator: string;
  roleType: RoleType;
  amount: string;
}
export interface MsgBondRoleProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgBondRole";
  value: Uint8Array;
}
/**
 * MsgBondRole bonds DREAM against a specific role_type. The role's
 * BondedRoleConfig controls eligibility (min_bond, min_rep_tier,
 * min_trust_level, min_age_blocks) and demotion behaviour.
 * @name MsgBondRoleAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgBondRole
 */
export interface MsgBondRoleAmino {
  creator?: string;
  role_type?: RoleType;
  amount?: string;
}
export interface MsgBondRoleAminoMsg {
  type: "sparkdream/x/rep/MsgBondRole";
  value: MsgBondRoleAmino;
}
/**
 * MsgBondRoleResponse defines the MsgBondRoleResponse message.
 * @name MsgBondRoleResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgBondRoleResponse
 */
export interface MsgBondRoleResponse {}
export interface MsgBondRoleResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgBondRoleResponse";
  value: Uint8Array;
}
/**
 * MsgBondRoleResponse defines the MsgBondRoleResponse message.
 * @name MsgBondRoleResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgBondRoleResponse
 */
export interface MsgBondRoleResponseAmino {}
export interface MsgBondRoleResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgBondRoleResponse";
  value: MsgBondRoleResponseAmino;
}
/**
 * MsgUnbondRole withdraws a portion of the caller's bond for the given
 * role_type. The committed portion (reserved against pending actions) is
 * non-withdrawable.
 * @name MsgUnbondRole
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUnbondRole
 */
export interface MsgUnbondRole {
  creator: string;
  roleType: RoleType;
  amount: string;
}
export interface MsgUnbondRoleProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgUnbondRole";
  value: Uint8Array;
}
/**
 * MsgUnbondRole withdraws a portion of the caller's bond for the given
 * role_type. The committed portion (reserved against pending actions) is
 * non-withdrawable.
 * @name MsgUnbondRoleAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUnbondRole
 */
export interface MsgUnbondRoleAmino {
  creator?: string;
  role_type?: RoleType;
  amount?: string;
}
export interface MsgUnbondRoleAminoMsg {
  type: "sparkdream/x/rep/MsgUnbondRole";
  value: MsgUnbondRoleAmino;
}
/**
 * MsgUnbondRoleResponse defines the MsgUnbondRoleResponse message.
 * @name MsgUnbondRoleResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUnbondRoleResponse
 */
export interface MsgUnbondRoleResponse {}
export interface MsgUnbondRoleResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgUnbondRoleResponse";
  value: Uint8Array;
}
/**
 * MsgUnbondRoleResponse defines the MsgUnbondRoleResponse message.
 * @name MsgUnbondRoleResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUnbondRoleResponse
 */
export interface MsgUnbondRoleResponseAmino {}
export interface MsgUnbondRoleResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgUnbondRoleResponse";
  value: MsgUnbondRoleResponseAmino;
}
/**
 * MsgCancelUnbondRole cancels part or all of an in-flight unbond for the given
 * role_type. The cancelled amount returns to active bond immediately (the DREAM
 * was never unlocked — pending is only an earmark), without waiting out the
 * cooldown. amount must be <= the role's pending_unbond_amount.
 * @name MsgCancelUnbondRole
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelUnbondRole
 */
export interface MsgCancelUnbondRole {
  creator: string;
  roleType: RoleType;
  amount: string;
}
export interface MsgCancelUnbondRoleProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCancelUnbondRole";
  value: Uint8Array;
}
/**
 * MsgCancelUnbondRole cancels part or all of an in-flight unbond for the given
 * role_type. The cancelled amount returns to active bond immediately (the DREAM
 * was never unlocked — pending is only an earmark), without waiting out the
 * cooldown. amount must be <= the role's pending_unbond_amount.
 * @name MsgCancelUnbondRoleAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelUnbondRole
 */
export interface MsgCancelUnbondRoleAmino {
  creator?: string;
  role_type?: RoleType;
  amount?: string;
}
export interface MsgCancelUnbondRoleAminoMsg {
  type: "sparkdream/x/rep/MsgCancelUnbondRole";
  value: MsgCancelUnbondRoleAmino;
}
/**
 * MsgCancelUnbondRoleResponse defines the MsgCancelUnbondRoleResponse message.
 * @name MsgCancelUnbondRoleResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelUnbondRoleResponse
 */
export interface MsgCancelUnbondRoleResponse {}
export interface MsgCancelUnbondRoleResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCancelUnbondRoleResponse";
  value: Uint8Array;
}
/**
 * MsgCancelUnbondRoleResponse defines the MsgCancelUnbondRoleResponse message.
 * @name MsgCancelUnbondRoleResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelUnbondRoleResponse
 */
export interface MsgCancelUnbondRoleResponseAmino {}
export interface MsgCancelUnbondRoleResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgCancelUnbondRoleResponse";
  value: MsgCancelUnbondRoleResponseAmino;
}
/**
 * MsgReportMember defines the MsgReportMember message.
 * @name MsgReportMember
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReportMember
 */
export interface MsgReportMember {
  creator: string;
  member: string;
  reason: string;
  recommendedAction: bigint;
}
export interface MsgReportMemberProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgReportMember";
  value: Uint8Array;
}
/**
 * MsgReportMember defines the MsgReportMember message.
 * @name MsgReportMemberAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReportMember
 */
export interface MsgReportMemberAmino {
  creator?: string;
  member?: string;
  reason?: string;
  recommended_action?: string;
}
export interface MsgReportMemberAminoMsg {
  type: "sparkdream/x/rep/MsgReportMember";
  value: MsgReportMemberAmino;
}
/**
 * MsgReportMemberResponse defines the MsgReportMemberResponse message.
 * @name MsgReportMemberResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReportMemberResponse
 */
export interface MsgReportMemberResponse {}
export interface MsgReportMemberResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgReportMemberResponse";
  value: Uint8Array;
}
/**
 * MsgReportMemberResponse defines the MsgReportMemberResponse message.
 * @name MsgReportMemberResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReportMemberResponse
 */
export interface MsgReportMemberResponseAmino {}
export interface MsgReportMemberResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgReportMemberResponse";
  value: MsgReportMemberResponseAmino;
}
/**
 * MsgCosignMemberReport defines the MsgCosignMemberReport message.
 * @name MsgCosignMemberReport
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCosignMemberReport
 */
export interface MsgCosignMemberReport {
  creator: string;
  member: string;
}
export interface MsgCosignMemberReportProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCosignMemberReport";
  value: Uint8Array;
}
/**
 * MsgCosignMemberReport defines the MsgCosignMemberReport message.
 * @name MsgCosignMemberReportAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCosignMemberReport
 */
export interface MsgCosignMemberReportAmino {
  creator?: string;
  member?: string;
}
export interface MsgCosignMemberReportAminoMsg {
  type: "sparkdream/x/rep/MsgCosignMemberReport";
  value: MsgCosignMemberReportAmino;
}
/**
 * MsgCosignMemberReportResponse defines the MsgCosignMemberReportResponse message.
 * @name MsgCosignMemberReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCosignMemberReportResponse
 */
export interface MsgCosignMemberReportResponse {}
export interface MsgCosignMemberReportResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCosignMemberReportResponse";
  value: Uint8Array;
}
/**
 * MsgCosignMemberReportResponse defines the MsgCosignMemberReportResponse message.
 * @name MsgCosignMemberReportResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCosignMemberReportResponse
 */
export interface MsgCosignMemberReportResponseAmino {}
export interface MsgCosignMemberReportResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgCosignMemberReportResponse";
  value: MsgCosignMemberReportResponseAmino;
}
/**
 * MsgResolveMemberReport defines the MsgResolveMemberReport message.
 * @name MsgResolveMemberReport
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveMemberReport
 */
export interface MsgResolveMemberReport {
  creator: string;
  member: string;
  action: bigint;
  reason: string;
}
export interface MsgResolveMemberReportProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgResolveMemberReport";
  value: Uint8Array;
}
/**
 * MsgResolveMemberReport defines the MsgResolveMemberReport message.
 * @name MsgResolveMemberReportAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveMemberReport
 */
export interface MsgResolveMemberReportAmino {
  creator?: string;
  member?: string;
  action?: string;
  reason?: string;
}
export interface MsgResolveMemberReportAminoMsg {
  type: "sparkdream/x/rep/MsgResolveMemberReport";
  value: MsgResolveMemberReportAmino;
}
/**
 * MsgResolveMemberReportResponse defines the MsgResolveMemberReportResponse message.
 * @name MsgResolveMemberReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveMemberReportResponse
 */
export interface MsgResolveMemberReportResponse {}
export interface MsgResolveMemberReportResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgResolveMemberReportResponse";
  value: Uint8Array;
}
/**
 * MsgResolveMemberReportResponse defines the MsgResolveMemberReportResponse message.
 * @name MsgResolveMemberReportResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveMemberReportResponse
 */
export interface MsgResolveMemberReportResponseAmino {}
export interface MsgResolveMemberReportResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgResolveMemberReportResponse";
  value: MsgResolveMemberReportResponseAmino;
}
/**
 * MsgDefendMemberReport defines the MsgDefendMemberReport message.
 * @name MsgDefendMemberReport
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgDefendMemberReport
 */
export interface MsgDefendMemberReport {
  creator: string;
  defense: string;
}
export interface MsgDefendMemberReportProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgDefendMemberReport";
  value: Uint8Array;
}
/**
 * MsgDefendMemberReport defines the MsgDefendMemberReport message.
 * @name MsgDefendMemberReportAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgDefendMemberReport
 */
export interface MsgDefendMemberReportAmino {
  creator?: string;
  defense?: string;
}
export interface MsgDefendMemberReportAminoMsg {
  type: "sparkdream/x/rep/MsgDefendMemberReport";
  value: MsgDefendMemberReportAmino;
}
/**
 * MsgDefendMemberReportResponse defines the MsgDefendMemberReportResponse message.
 * @name MsgDefendMemberReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgDefendMemberReportResponse
 */
export interface MsgDefendMemberReportResponse {}
export interface MsgDefendMemberReportResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgDefendMemberReportResponse";
  value: Uint8Array;
}
/**
 * MsgDefendMemberReportResponse defines the MsgDefendMemberReportResponse message.
 * @name MsgDefendMemberReportResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgDefendMemberReportResponse
 */
export interface MsgDefendMemberReportResponseAmino {}
export interface MsgDefendMemberReportResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgDefendMemberReportResponse";
  value: MsgDefendMemberReportResponseAmino;
}
/**
 * MsgAppealGovAction defines the MsgAppealGovAction message.
 * @name MsgAppealGovAction
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAppealGovAction
 */
export interface MsgAppealGovAction {
  creator: string;
  actionType: bigint;
  actionTarget: string;
  appealReason: string;
}
export interface MsgAppealGovActionProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAppealGovAction";
  value: Uint8Array;
}
/**
 * MsgAppealGovAction defines the MsgAppealGovAction message.
 * @name MsgAppealGovActionAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAppealGovAction
 */
export interface MsgAppealGovActionAmino {
  creator?: string;
  action_type?: string;
  action_target?: string;
  appeal_reason?: string;
}
export interface MsgAppealGovActionAminoMsg {
  type: "sparkdream/x/rep/MsgAppealGovAction";
  value: MsgAppealGovActionAmino;
}
/**
 * MsgAppealGovActionResponse defines the MsgAppealGovActionResponse message.
 * @name MsgAppealGovActionResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAppealGovActionResponse
 */
export interface MsgAppealGovActionResponse {}
export interface MsgAppealGovActionResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgAppealGovActionResponse";
  value: Uint8Array;
}
/**
 * MsgAppealGovActionResponse defines the MsgAppealGovActionResponse message.
 * @name MsgAppealGovActionResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAppealGovActionResponse
 */
export interface MsgAppealGovActionResponseAmino {}
export interface MsgAppealGovActionResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgAppealGovActionResponse";
  value: MsgAppealGovActionResponseAmino;
}
/**
 * MsgResolveGovActionAppeal resolves a pending appeal via council authority.
 * Only the Operations Committee of the commons council may resolve appeals.
 * The verdict must be UPHELD or OVERTURNED; TIMEOUT is EndBlocker-only and
 * UNSPECIFIED is rejected.
 * @name MsgResolveGovActionAppeal
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveGovActionAppeal
 */
export interface MsgResolveGovActionAppeal {
  resolver: string;
  appealId: bigint;
  verdict: GovAppealStatus;
  reason: string;
}
export interface MsgResolveGovActionAppealProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgResolveGovActionAppeal";
  value: Uint8Array;
}
/**
 * MsgResolveGovActionAppeal resolves a pending appeal via council authority.
 * Only the Operations Committee of the commons council may resolve appeals.
 * The verdict must be UPHELD or OVERTURNED; TIMEOUT is EndBlocker-only and
 * UNSPECIFIED is rejected.
 * @name MsgResolveGovActionAppealAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveGovActionAppeal
 */
export interface MsgResolveGovActionAppealAmino {
  resolver?: string;
  appeal_id?: string;
  verdict?: GovAppealStatus;
  reason?: string;
}
export interface MsgResolveGovActionAppealAminoMsg {
  type: "sparkdream/x/rep/MsgResolveGovActionAppeal";
  value: MsgResolveGovActionAppealAmino;
}
/**
 * MsgResolveGovActionAppealResponse defines the response for
 * ResolveGovActionAppeal.
 * @name MsgResolveGovActionAppealResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveGovActionAppealResponse
 */
export interface MsgResolveGovActionAppealResponse {}
export interface MsgResolveGovActionAppealResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgResolveGovActionAppealResponse";
  value: Uint8Array;
}
/**
 * MsgResolveGovActionAppealResponse defines the response for
 * ResolveGovActionAppeal.
 * @name MsgResolveGovActionAppealResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveGovActionAppealResponse
 */
export interface MsgResolveGovActionAppealResponseAmino {}
export interface MsgResolveGovActionAppealResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgResolveGovActionAppealResponse";
  value: MsgResolveGovActionAppealResponseAmino;
}
/**
 * MsgCancelInitiative retires an OPEN, unassigned initiative. Callable by the
 * parent project's creator or the Operations Committee.
 * @name MsgCancelInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelInitiative
 */
export interface MsgCancelInitiative {
  creator: string;
  initiativeId: bigint;
  reason: string;
}
export interface MsgCancelInitiativeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCancelInitiative";
  value: Uint8Array;
}
/**
 * MsgCancelInitiative retires an OPEN, unassigned initiative. Callable by the
 * parent project's creator or the Operations Committee.
 * @name MsgCancelInitiativeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelInitiative
 */
export interface MsgCancelInitiativeAmino {
  creator?: string;
  initiative_id?: string;
  reason?: string;
}
export interface MsgCancelInitiativeAminoMsg {
  type: "sparkdream/x/rep/MsgCancelInitiative";
  value: MsgCancelInitiativeAmino;
}
/**
 * MsgCancelInitiativeResponse defines the MsgCancelInitiativeResponse message.
 * @name MsgCancelInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelInitiativeResponse
 */
export interface MsgCancelInitiativeResponse {}
export interface MsgCancelInitiativeResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgCancelInitiativeResponse";
  value: Uint8Array;
}
/**
 * MsgCancelInitiativeResponse defines the MsgCancelInitiativeResponse message.
 * @name MsgCancelInitiativeResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelInitiativeResponse
 */
export interface MsgCancelInitiativeResponseAmino {}
export interface MsgCancelInitiativeResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgCancelInitiativeResponse";
  value: MsgCancelInitiativeResponseAmino;
}
/**
 * MsgSubmitInitiativeReview files one bonded reviewer's verdict on the current
 * review round of an initiative's submitted work.
 * 
 * Filing reserves bond scaled to the initiative's budget, so a reviewer can
 * only take on as much work as their bond covers and liability tracks what the
 * review could mint. The bond is released when the challenge window closes
 * unchallenged, and slashed when a jury overturns the verdict.
 * @name MsgSubmitInitiativeReview
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInitiativeReview
 */
export interface MsgSubmitInitiativeReview {
  reviewer: string;
  initiativeId: bigint;
  approved: boolean;
  criteriaVotes: CriteriaVote[];
  comments: string;
}
export interface MsgSubmitInitiativeReviewProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeReview";
  value: Uint8Array;
}
/**
 * MsgSubmitInitiativeReview files one bonded reviewer's verdict on the current
 * review round of an initiative's submitted work.
 * 
 * Filing reserves bond scaled to the initiative's budget, so a reviewer can
 * only take on as much work as their bond covers and liability tracks what the
 * review could mint. The bond is released when the challenge window closes
 * unchallenged, and slashed when a jury overturns the verdict.
 * @name MsgSubmitInitiativeReviewAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInitiativeReview
 */
export interface MsgSubmitInitiativeReviewAmino {
  reviewer?: string;
  initiative_id?: string;
  approved?: boolean;
  criteria_votes?: CriteriaVoteAmino[];
  comments?: string;
}
export interface MsgSubmitInitiativeReviewAminoMsg {
  type: "sparkdream/x/rep/MsgSubmitInitiativeReview";
  value: MsgSubmitInitiativeReviewAmino;
}
/**
 * MsgSubmitInitiativeReviewResponse defines the MsgSubmitInitiativeReview response.
 * @name MsgSubmitInitiativeReviewResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInitiativeReviewResponse
 */
export interface MsgSubmitInitiativeReviewResponse {}
export interface MsgSubmitInitiativeReviewResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeReviewResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitInitiativeReviewResponse defines the MsgSubmitInitiativeReview response.
 * @name MsgSubmitInitiativeReviewResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInitiativeReviewResponse
 */
export interface MsgSubmitInitiativeReviewResponseAmino {}
export interface MsgSubmitInitiativeReviewResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgSubmitInitiativeReviewResponse";
  value: MsgSubmitInitiativeReviewResponseAmino;
}
/**
 * MsgSetVerificationPolicy sets how a project's initiatives are reviewed.
 * 
 * Authority is the project's creator or the Operations Committee, and it is
 * settable while the project is ACTIVE rather than fixed at creation: the
 * reviewer roster grows over time, so a project needs to be able to turn review
 * on once reviewers exist. The review and challenge windows in the policy are
 * clamped to max(global, project) — a project may be more conservative than the
 * chain default, never less.
 * @name MsgSetVerificationPolicy
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSetVerificationPolicy
 */
export interface MsgSetVerificationPolicy {
  creator: string;
  projectId: bigint;
  policy: VerificationPolicy;
}
export interface MsgSetVerificationPolicyProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgSetVerificationPolicy";
  value: Uint8Array;
}
/**
 * MsgSetVerificationPolicy sets how a project's initiatives are reviewed.
 * 
 * Authority is the project's creator or the Operations Committee, and it is
 * settable while the project is ACTIVE rather than fixed at creation: the
 * reviewer roster grows over time, so a project needs to be able to turn review
 * on once reviewers exist. The review and challenge windows in the policy are
 * clamped to max(global, project) — a project may be more conservative than the
 * chain default, never less.
 * @name MsgSetVerificationPolicyAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSetVerificationPolicy
 */
export interface MsgSetVerificationPolicyAmino {
  creator?: string;
  project_id?: string;
  policy?: VerificationPolicyAmino;
}
export interface MsgSetVerificationPolicyAminoMsg {
  type: "sparkdream/x/rep/MsgSetVerificationPolicy";
  value: MsgSetVerificationPolicyAmino;
}
/**
 * MsgSetVerificationPolicyResponse defines the MsgSetVerificationPolicy response.
 * @name MsgSetVerificationPolicyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSetVerificationPolicyResponse
 */
export interface MsgSetVerificationPolicyResponse {}
export interface MsgSetVerificationPolicyResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgSetVerificationPolicyResponse";
  value: Uint8Array;
}
/**
 * MsgSetVerificationPolicyResponse defines the MsgSetVerificationPolicy response.
 * @name MsgSetVerificationPolicyResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSetVerificationPolicyResponse
 */
export interface MsgSetVerificationPolicyResponseAmino {}
export interface MsgSetVerificationPolicyResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgSetVerificationPolicyResponse";
  value: MsgSetVerificationPolicyResponseAmino;
}
/**
 * MsgResolveReviewEscalation settles a review round that hit its deadline
 * without meeting the reviewer gate.
 * 
 * Operations Committee only. The three resolutions are approve (satisfy the
 * gate), reject (send the work back for another round), and pass (decline to
 * substitute judgement and let conviction and the challenge window decide).
 * All three still run the challenge window — committee approval satisfies the
 * reviewer requirement and nothing else.
 * @name MsgResolveReviewEscalation
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveReviewEscalation
 */
export interface MsgResolveReviewEscalation {
  creator: string;
  initiativeId: bigint;
  resolution: ReviewEscalation;
  reason: string;
}
export interface MsgResolveReviewEscalationProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgResolveReviewEscalation";
  value: Uint8Array;
}
/**
 * MsgResolveReviewEscalation settles a review round that hit its deadline
 * without meeting the reviewer gate.
 * 
 * Operations Committee only. The three resolutions are approve (satisfy the
 * gate), reject (send the work back for another round), and pass (decline to
 * substitute judgement and let conviction and the challenge window decide).
 * All three still run the challenge window — committee approval satisfies the
 * reviewer requirement and nothing else.
 * @name MsgResolveReviewEscalationAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveReviewEscalation
 */
export interface MsgResolveReviewEscalationAmino {
  creator?: string;
  initiative_id?: string;
  resolution?: ReviewEscalation;
  reason?: string;
}
export interface MsgResolveReviewEscalationAminoMsg {
  type: "sparkdream/x/rep/MsgResolveReviewEscalation";
  value: MsgResolveReviewEscalationAmino;
}
/**
 * MsgResolveReviewEscalationResponse defines the MsgResolveReviewEscalation response.
 * @name MsgResolveReviewEscalationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveReviewEscalationResponse
 */
export interface MsgResolveReviewEscalationResponse {}
export interface MsgResolveReviewEscalationResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgResolveReviewEscalationResponse";
  value: Uint8Array;
}
/**
 * MsgResolveReviewEscalationResponse defines the MsgResolveReviewEscalation response.
 * @name MsgResolveReviewEscalationResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveReviewEscalationResponse
 */
export interface MsgResolveReviewEscalationResponseAmino {}
export interface MsgResolveReviewEscalationResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgResolveReviewEscalationResponse";
  value: MsgResolveReviewEscalationResponseAmino;
}
/**
 * MsgFundReviewBounty escrows DREAM against an initiative so reviewers have a
 * reason to look at that one rather than any other.
 * 
 * Anyone may fund, and contributions are additive: the creator who wants their
 * work cleared, a staker protecting conviction already committed, or a third
 * party who simply wants the thing checked. Restricting it to the creator would
 * make the amount a statement about one person's budget rather than about how
 * much the work matters.
 * @name MsgFundReviewBounty
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgFundReviewBounty
 */
export interface MsgFundReviewBounty {
  funder: string;
  initiativeId: bigint;
  amount: string;
}
export interface MsgFundReviewBountyProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgFundReviewBounty";
  value: Uint8Array;
}
/**
 * MsgFundReviewBounty escrows DREAM against an initiative so reviewers have a
 * reason to look at that one rather than any other.
 * 
 * Anyone may fund, and contributions are additive: the creator who wants their
 * work cleared, a staker protecting conviction already committed, or a third
 * party who simply wants the thing checked. Restricting it to the creator would
 * make the amount a statement about one person's budget rather than about how
 * much the work matters.
 * @name MsgFundReviewBountyAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgFundReviewBounty
 */
export interface MsgFundReviewBountyAmino {
  funder?: string;
  initiative_id?: string;
  amount?: string;
}
export interface MsgFundReviewBountyAminoMsg {
  type: "sparkdream/x/rep/MsgFundReviewBounty";
  value: MsgFundReviewBountyAmino;
}
/**
 * MsgFundReviewBountyResponse defines the MsgFundReviewBounty response.
 * @name MsgFundReviewBountyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgFundReviewBountyResponse
 */
export interface MsgFundReviewBountyResponse {
  /**
   * Total escrowed against the initiative after this contribution.
   */
  total: string;
}
export interface MsgFundReviewBountyResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgFundReviewBountyResponse";
  value: Uint8Array;
}
/**
 * MsgFundReviewBountyResponse defines the MsgFundReviewBounty response.
 * @name MsgFundReviewBountyResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgFundReviewBountyResponse
 */
export interface MsgFundReviewBountyResponseAmino {
  /**
   * Total escrowed against the initiative after this contribution.
   */
  total?: string;
}
export interface MsgFundReviewBountyResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgFundReviewBountyResponse";
  value: MsgFundReviewBountyResponseAmino;
}
/**
 * MsgReclaimReviewBounty returns a funder's own unpaid contribution.
 * 
 * Permitted only after review_bounty_reclaim_delay blocks and only while NO
 * verdict has been filed against the initiative. The delay stops a funder
 * advertising a bounty and yanking it in the same breath; the verdict bar stops
 * them yanking it once reviewers have committed bond on the strength of it.
 * @name MsgReclaimReviewBounty
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReclaimReviewBounty
 */
export interface MsgReclaimReviewBounty {
  funder: string;
  initiativeId: bigint;
}
export interface MsgReclaimReviewBountyProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgReclaimReviewBounty";
  value: Uint8Array;
}
/**
 * MsgReclaimReviewBounty returns a funder's own unpaid contribution.
 * 
 * Permitted only after review_bounty_reclaim_delay blocks and only while NO
 * verdict has been filed against the initiative. The delay stops a funder
 * advertising a bounty and yanking it in the same breath; the verdict bar stops
 * them yanking it once reviewers have committed bond on the strength of it.
 * @name MsgReclaimReviewBountyAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReclaimReviewBounty
 */
export interface MsgReclaimReviewBountyAmino {
  funder?: string;
  initiative_id?: string;
}
export interface MsgReclaimReviewBountyAminoMsg {
  type: "sparkdream/x/rep/MsgReclaimReviewBounty";
  value: MsgReclaimReviewBountyAmino;
}
/**
 * MsgReclaimReviewBountyResponse defines the MsgReclaimReviewBounty response.
 * @name MsgReclaimReviewBountyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReclaimReviewBountyResponse
 */
export interface MsgReclaimReviewBountyResponse {
  refunded: string;
}
export interface MsgReclaimReviewBountyResponseProtoMsg {
  typeUrl: "/sparkdream.rep.v1.MsgReclaimReviewBountyResponse";
  value: Uint8Array;
}
/**
 * MsgReclaimReviewBountyResponse defines the MsgReclaimReviewBounty response.
 * @name MsgReclaimReviewBountyResponseAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReclaimReviewBountyResponse
 */
export interface MsgReclaimReviewBountyResponseAmino {
  refunded?: string;
}
export interface MsgReclaimReviewBountyResponseAminoMsg {
  type: "/sparkdream.rep.v1.MsgReclaimReviewBountyResponse";
  value: MsgReclaimReviewBountyResponseAmino;
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
  aminoType: "sparkdream/x/rep/MsgInviteMember",
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
  toAminoMsg(message: MsgInviteMember): MsgInviteMemberAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgInviteMember",
      value: MsgInviteMember.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgAcceptInvitation",
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
  toAminoMsg(message: MsgAcceptInvitation): MsgAcceptInvitationAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgAcceptInvitation",
      value: MsgAcceptInvitation.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgTransferDream",
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
  toAminoMsg(message: MsgTransferDream): MsgTransferDreamAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgTransferDream",
      value: MsgTransferDream.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgCreateInterim",
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
  toAminoMsg(message: MsgCreateInterim): MsgCreateInterimAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgCreateInterim",
      value: MsgCreateInterim.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgAssignInterim",
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
  toAminoMsg(message: MsgAssignInterim): MsgAssignInterimAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgAssignInterim",
      value: MsgAssignInterim.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgSubmitInterimWork",
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
  toAminoMsg(message: MsgSubmitInterimWork): MsgSubmitInterimWorkAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgSubmitInterimWork",
      value: MsgSubmitInterimWork.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgApproveInterim",
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
  toAminoMsg(message: MsgApproveInterim): MsgApproveInterimAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgApproveInterim",
      value: MsgApproveInterim.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgAbandonInterim",
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
  toAminoMsg(message: MsgAbandonInterim): MsgAbandonInterimAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgAbandonInterim",
      value: MsgAbandonInterim.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgCompleteInterim",
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
  toAminoMsg(message: MsgCompleteInterim): MsgCompleteInterimAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgCompleteInterim",
      value: MsgCompleteInterim.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgProposeProject",
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
  toAminoMsg(message: MsgProposeProject): MsgProposeProjectAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgProposeProject",
      value: MsgProposeProject.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgApproveProjectBudget",
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
  toAminoMsg(message: MsgApproveProjectBudget): MsgApproveProjectBudgetAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgApproveProjectBudget",
      value: MsgApproveProjectBudget.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgCancelProject",
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
  toAminoMsg(message: MsgCancelProject): MsgCancelProjectAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgCancelProject",
      value: MsgCancelProject.toAmino(message)
    };
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
    budget: "",
    acceptanceCriteria: []
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
  aminoType: "sparkdream/x/rep/MsgCreateInitiative",
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
      writer.uint32(58).string(v!);
    }
    if (message.tier !== BigInt(0)) {
      writer.uint32(40).uint64(message.tier);
    }
    if (message.category !== BigInt(0)) {
      writer.uint32(48).uint64(message.category);
    }
    if (message.budget !== "") {
      writer.uint32(66).string(message.budget);
    }
    for (const v of message.acceptanceCriteria) {
      VerificationCriteria.encode(v!, writer.uint32(74).fork()).ldelim();
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
        case 7:
          message.tags.push(reader.string());
          break;
        case 5:
          message.tier = reader.uint64();
          break;
        case 6:
          message.category = reader.uint64();
          break;
        case 8:
          message.budget = reader.string();
          break;
        case 9:
          message.acceptanceCriteria.push(VerificationCriteria.decode(reader, reader.uint32()));
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
    message.budget = object.budget ?? "";
    message.acceptanceCriteria = object.acceptanceCriteria?.map(e => VerificationCriteria.fromPartial(e)) || [];
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
    if (object.budget !== undefined && object.budget !== null) {
      message.budget = object.budget;
    }
    message.acceptanceCriteria = object.acceptance_criteria?.map(e => VerificationCriteria.fromAmino(e)) || [];
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
    obj.budget = message.budget === "" ? undefined : message.budget;
    if (message.acceptanceCriteria) {
      obj.acceptance_criteria = message.acceptanceCriteria.map(e => e ? VerificationCriteria.toAmino(e) : undefined);
    } else {
      obj.acceptance_criteria = message.acceptanceCriteria;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateInitiativeAminoMsg): MsgCreateInitiative {
    return MsgCreateInitiative.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateInitiative): MsgCreateInitiativeAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgCreateInitiative",
      value: MsgCreateInitiative.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgAssignInitiative",
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
  toAminoMsg(message: MsgAssignInitiative): MsgAssignInitiativeAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgAssignInitiative",
      value: MsgAssignInitiative.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgSubmitInitiativeWork",
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
  toAminoMsg(message: MsgSubmitInitiativeWork): MsgSubmitInitiativeWorkAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgSubmitInitiativeWork",
      value: MsgSubmitInitiativeWork.toAmino(message)
    };
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
    approved: false,
    comments: ""
  };
}
/**
 * MsgApproveInitiative records a reviewer's verdict on submitted work.
 * 
 * Review is advisory for budget-backed, externally assigned work and binding
 * only in aggregate for stakers, whose disapproval is weighted by the DREAM
 * they have staked on the initiative. Conviction remains the gate on payout.
 * 
 * This message used to carry a `criteria_votes` field that the handler read
 * nowhere. Per-criterion verdicts belong on MsgSubmitJurorVote, which stores
 * them on the JurorVote record and validates each id against the initiative's
 * acceptance criteria. A field the handler silently discards is worse than no
 * field: clients populate it and users believe it did something.
 * @name MsgApproveInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgApproveInitiative
 */
export const MsgApproveInitiative = {
  typeUrl: "/sparkdream.rep.v1.MsgApproveInitiative",
  aminoType: "sparkdream/x/rep/MsgApproveInitiative",
  encode(message: MsgApproveInitiative, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.initiativeId);
    }
    if (message.approved === true) {
      writer.uint32(24).bool(message.approved);
    }
    if (message.comments !== "") {
      writer.uint32(34).string(message.comments);
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
  fromPartial(object: DeepPartial<MsgApproveInitiative>): MsgApproveInitiative {
    const message = createBaseMsgApproveInitiative();
    message.creator = object.creator ?? "";
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
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
    obj.approved = message.approved === false ? undefined : message.approved;
    obj.comments = message.comments === "" ? undefined : message.comments;
    return obj;
  },
  fromAminoMsg(object: MsgApproveInitiativeAminoMsg): MsgApproveInitiative {
    return MsgApproveInitiative.fromAmino(object.value);
  },
  toAminoMsg(message: MsgApproveInitiative): MsgApproveInitiativeAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgApproveInitiative",
      value: MsgApproveInitiative.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgAbandonInitiative",
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
  toAminoMsg(message: MsgAbandonInitiative): MsgAbandonInitiativeAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgAbandonInitiative",
      value: MsgAbandonInitiative.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgCompleteInitiative",
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
  toAminoMsg(message: MsgCompleteInitiative): MsgCompleteInitiativeAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgCompleteInitiative",
      value: MsgCompleteInitiative.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgStake",
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
  toAminoMsg(message: MsgStake): MsgStakeAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgStake",
      value: MsgStake.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgUnstake",
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
  toAminoMsg(message: MsgUnstake): MsgUnstakeAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgUnstake",
      value: MsgUnstake.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgClaimStakingRewards",
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
  toAminoMsg(message: MsgClaimStakingRewards): MsgClaimStakingRewardsAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgClaimStakingRewards",
      value: MsgClaimStakingRewards.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgCompoundStakingRewards",
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
  toAminoMsg(message: MsgCompoundStakingRewards): MsgCompoundStakingRewardsAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgCompoundStakingRewards",
      value: MsgCompoundStakingRewards.toAmino(message)
    };
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
    stakedDream: "",
    criteriaId: ""
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
  aminoType: "sparkdream/x/rep/MsgCreateChallenge",
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
    if (message.criteriaId !== "") {
      writer.uint32(50).string(message.criteriaId);
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
        case 6:
          message.criteriaId = reader.string();
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
    message.criteriaId = object.criteriaId ?? "";
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
    if (object.criteria_id !== undefined && object.criteria_id !== null) {
      message.criteriaId = object.criteria_id;
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
    obj.criteria_id = message.criteriaId === "" ? undefined : message.criteriaId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateChallengeAminoMsg): MsgCreateChallenge {
    return MsgCreateChallenge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateChallenge): MsgCreateChallengeAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgCreateChallenge",
      value: MsgCreateChallenge.toAmino(message)
    };
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
function createBaseMsgAcceptJuryDuty(): MsgAcceptJuryDuty {
  return {
    juror: "",
    juryReviewId: BigInt(0)
  };
}
/**
 * MsgAcceptJuryDuty accepts a jury summons, turning a seat drawn by lot into a
 * commitment to vote.
 * @name MsgAcceptJuryDuty
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAcceptJuryDuty
 */
export const MsgAcceptJuryDuty = {
  typeUrl: "/sparkdream.rep.v1.MsgAcceptJuryDuty",
  aminoType: "sparkdream/x/rep/MsgAcceptJuryDuty",
  encode(message: MsgAcceptJuryDuty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juror !== "") {
      writer.uint32(10).string(message.juror);
    }
    if (message.juryReviewId !== BigInt(0)) {
      writer.uint32(16).uint64(message.juryReviewId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptJuryDuty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptJuryDuty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juror = reader.string();
          break;
        case 2:
          message.juryReviewId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcceptJuryDuty>): MsgAcceptJuryDuty {
    const message = createBaseMsgAcceptJuryDuty();
    message.juror = object.juror ?? "";
    message.juryReviewId = object.juryReviewId !== undefined && object.juryReviewId !== null ? BigInt(object.juryReviewId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAcceptJuryDutyAmino): MsgAcceptJuryDuty {
    const message = createBaseMsgAcceptJuryDuty();
    if (object.juror !== undefined && object.juror !== null) {
      message.juror = object.juror;
    }
    if (object.jury_review_id !== undefined && object.jury_review_id !== null) {
      message.juryReviewId = BigInt(object.jury_review_id);
    }
    return message;
  },
  toAmino(message: MsgAcceptJuryDuty): MsgAcceptJuryDutyAmino {
    const obj: any = {};
    obj.juror = message.juror === "" ? undefined : message.juror;
    obj.jury_review_id = message.juryReviewId !== BigInt(0) ? message.juryReviewId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptJuryDutyAminoMsg): MsgAcceptJuryDuty {
    return MsgAcceptJuryDuty.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcceptJuryDuty): MsgAcceptJuryDutyAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgAcceptJuryDuty",
      value: MsgAcceptJuryDuty.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcceptJuryDutyProtoMsg): MsgAcceptJuryDuty {
    return MsgAcceptJuryDuty.decode(message.value);
  },
  toProto(message: MsgAcceptJuryDuty): Uint8Array {
    return MsgAcceptJuryDuty.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptJuryDuty): MsgAcceptJuryDutyProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAcceptJuryDuty",
      value: MsgAcceptJuryDuty.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptJuryDutyResponse(): MsgAcceptJuryDutyResponse {
  return {};
}
/**
 * MsgAcceptJuryDutyResponse defines the MsgAcceptJuryDuty response.
 * @name MsgAcceptJuryDutyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAcceptJuryDutyResponse
 */
export const MsgAcceptJuryDutyResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgAcceptJuryDutyResponse",
  encode(_: MsgAcceptJuryDutyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptJuryDutyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptJuryDutyResponse();
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
  fromPartial(_: DeepPartial<MsgAcceptJuryDutyResponse>): MsgAcceptJuryDutyResponse {
    const message = createBaseMsgAcceptJuryDutyResponse();
    return message;
  },
  fromAmino(_: MsgAcceptJuryDutyResponseAmino): MsgAcceptJuryDutyResponse {
    const message = createBaseMsgAcceptJuryDutyResponse();
    return message;
  },
  toAmino(_: MsgAcceptJuryDutyResponse): MsgAcceptJuryDutyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcceptJuryDutyResponseAminoMsg): MsgAcceptJuryDutyResponse {
    return MsgAcceptJuryDutyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptJuryDutyResponseProtoMsg): MsgAcceptJuryDutyResponse {
    return MsgAcceptJuryDutyResponse.decode(message.value);
  },
  toProto(message: MsgAcceptJuryDutyResponse): Uint8Array {
    return MsgAcceptJuryDutyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptJuryDutyResponse): MsgAcceptJuryDutyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAcceptJuryDutyResponse",
      value: MsgAcceptJuryDutyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeclineJuryDuty(): MsgDeclineJuryDuty {
  return {
    juror: "",
    juryReviewId: BigInt(0)
  };
}
/**
 * MsgDeclineJuryDuty releases a seat immediately so it can be redrawn. Free by
 * design: a juror who has no time to review the work should say so early rather
 * than sit on the seat until the deadline.
 * @name MsgDeclineJuryDuty
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgDeclineJuryDuty
 */
export const MsgDeclineJuryDuty = {
  typeUrl: "/sparkdream.rep.v1.MsgDeclineJuryDuty",
  aminoType: "sparkdream/x/rep/MsgDeclineJuryDuty",
  encode(message: MsgDeclineJuryDuty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juror !== "") {
      writer.uint32(10).string(message.juror);
    }
    if (message.juryReviewId !== BigInt(0)) {
      writer.uint32(16).uint64(message.juryReviewId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeclineJuryDuty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeclineJuryDuty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juror = reader.string();
          break;
        case 2:
          message.juryReviewId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeclineJuryDuty>): MsgDeclineJuryDuty {
    const message = createBaseMsgDeclineJuryDuty();
    message.juror = object.juror ?? "";
    message.juryReviewId = object.juryReviewId !== undefined && object.juryReviewId !== null ? BigInt(object.juryReviewId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeclineJuryDutyAmino): MsgDeclineJuryDuty {
    const message = createBaseMsgDeclineJuryDuty();
    if (object.juror !== undefined && object.juror !== null) {
      message.juror = object.juror;
    }
    if (object.jury_review_id !== undefined && object.jury_review_id !== null) {
      message.juryReviewId = BigInt(object.jury_review_id);
    }
    return message;
  },
  toAmino(message: MsgDeclineJuryDuty): MsgDeclineJuryDutyAmino {
    const obj: any = {};
    obj.juror = message.juror === "" ? undefined : message.juror;
    obj.jury_review_id = message.juryReviewId !== BigInt(0) ? message.juryReviewId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeclineJuryDutyAminoMsg): MsgDeclineJuryDuty {
    return MsgDeclineJuryDuty.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeclineJuryDuty): MsgDeclineJuryDutyAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgDeclineJuryDuty",
      value: MsgDeclineJuryDuty.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeclineJuryDutyProtoMsg): MsgDeclineJuryDuty {
    return MsgDeclineJuryDuty.decode(message.value);
  },
  toProto(message: MsgDeclineJuryDuty): Uint8Array {
    return MsgDeclineJuryDuty.encode(message).finish();
  },
  toProtoMsg(message: MsgDeclineJuryDuty): MsgDeclineJuryDutyProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgDeclineJuryDuty",
      value: MsgDeclineJuryDuty.encode(message).finish()
    };
  }
};
function createBaseMsgDeclineJuryDutyResponse(): MsgDeclineJuryDutyResponse {
  return {};
}
/**
 * MsgDeclineJuryDutyResponse defines the MsgDeclineJuryDuty response.
 * @name MsgDeclineJuryDutyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgDeclineJuryDutyResponse
 */
export const MsgDeclineJuryDutyResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgDeclineJuryDutyResponse",
  encode(_: MsgDeclineJuryDutyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeclineJuryDutyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeclineJuryDutyResponse();
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
  fromPartial(_: DeepPartial<MsgDeclineJuryDutyResponse>): MsgDeclineJuryDutyResponse {
    const message = createBaseMsgDeclineJuryDutyResponse();
    return message;
  },
  fromAmino(_: MsgDeclineJuryDutyResponseAmino): MsgDeclineJuryDutyResponse {
    const message = createBaseMsgDeclineJuryDutyResponse();
    return message;
  },
  toAmino(_: MsgDeclineJuryDutyResponse): MsgDeclineJuryDutyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeclineJuryDutyResponseAminoMsg): MsgDeclineJuryDutyResponse {
    return MsgDeclineJuryDutyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeclineJuryDutyResponseProtoMsg): MsgDeclineJuryDutyResponse {
    return MsgDeclineJuryDutyResponse.decode(message.value);
  },
  toProto(message: MsgDeclineJuryDutyResponse): Uint8Array {
    return MsgDeclineJuryDutyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeclineJuryDutyResponse): MsgDeclineJuryDutyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgDeclineJuryDutyResponse",
      value: MsgDeclineJuryDutyResponse.encode(message).finish()
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
  aminoType: "sparkdream/x/rep/MsgRespondToChallenge",
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
  toAminoMsg(message: MsgRespondToChallenge): MsgRespondToChallengeAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgRespondToChallenge",
      value: MsgRespondToChallenge.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgSubmitJurorVote",
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
  toAminoMsg(message: MsgSubmitJurorVote): MsgSubmitJurorVoteAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgSubmitJurorVote",
      value: MsgSubmitJurorVote.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgSubmitExpertTestimony",
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
  toAminoMsg(message: MsgSubmitExpertTestimony): MsgSubmitExpertTestimonyAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgSubmitExpertTestimony",
      value: MsgSubmitExpertTestimony.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgChallengeContent",
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
  toAminoMsg(message: MsgChallengeContent): MsgChallengeContentAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgChallengeContent",
      value: MsgChallengeContent.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgRespondToContentChallenge",
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
  toAminoMsg(message: MsgRespondToContentChallenge): MsgRespondToContentChallengeAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgRespondToContentChallenge",
      value: MsgRespondToContentChallenge.toAmino(message)
    };
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
  aminoType: "sparkdream/x/rep/MsgRegisterZkPublicKey",
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
  toAminoMsg(message: MsgRegisterZkPublicKey): MsgRegisterZkPublicKeyAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgRegisterZkPublicKey",
      value: MsgRegisterZkPublicKey.toAmino(message)
    };
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
function createBaseMsgCreateTag(): MsgCreateTag {
  return {
    creator: "",
    name: ""
  };
}
/**
 * MsgCreateTag defines the MsgCreateTag message. Creates a new tag in the
 * shared tag registry. Caller must meet the minimum trust level and pay the
 * tag-creation fee.
 * @name MsgCreateTag
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateTag
 */
export const MsgCreateTag = {
  typeUrl: "/sparkdream.rep.v1.MsgCreateTag",
  aminoType: "sparkdream/x/rep/MsgCreateTag",
  encode(message: MsgCreateTag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTag {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateTag>): MsgCreateTag {
    const message = createBaseMsgCreateTag();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgCreateTagAmino): MsgCreateTag {
    const message = createBaseMsgCreateTag();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgCreateTag): MsgCreateTagAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTagAminoMsg): MsgCreateTag {
    return MsgCreateTag.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateTag): MsgCreateTagAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgCreateTag",
      value: MsgCreateTag.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateTagProtoMsg): MsgCreateTag {
    return MsgCreateTag.decode(message.value);
  },
  toProto(message: MsgCreateTag): Uint8Array {
    return MsgCreateTag.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTag): MsgCreateTagProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCreateTag",
      value: MsgCreateTag.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTagResponse(): MsgCreateTagResponse {
  return {
    name: ""
  };
}
/**
 * MsgCreateTagResponse defines the response for CreateTag.
 * @name MsgCreateTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateTagResponse
 */
export const MsgCreateTagResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgCreateTagResponse",
  encode(message: MsgCreateTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateTagResponse>): MsgCreateTagResponse {
    const message = createBaseMsgCreateTagResponse();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgCreateTagResponseAmino): MsgCreateTagResponse {
    const message = createBaseMsgCreateTagResponse();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgCreateTagResponse): MsgCreateTagResponseAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTagResponseAminoMsg): MsgCreateTagResponse {
    return MsgCreateTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTagResponseProtoMsg): MsgCreateTagResponse {
    return MsgCreateTagResponse.decode(message.value);
  },
  toProto(message: MsgCreateTagResponse): Uint8Array {
    return MsgCreateTagResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTagResponse): MsgCreateTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCreateTagResponse",
      value: MsgCreateTagResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReportTag(): MsgReportTag {
  return {
    creator: "",
    tagName: "",
    reason: ""
  };
}
/**
 * MsgReportTag defines the MsgReportTag message.
 * @name MsgReportTag
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReportTag
 */
export const MsgReportTag = {
  typeUrl: "/sparkdream.rep.v1.MsgReportTag",
  aminoType: "sparkdream/x/rep/MsgReportTag",
  encode(message: MsgReportTag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tagName !== "") {
      writer.uint32(18).string(message.tagName);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportTag {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tagName = reader.string();
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
  fromPartial(object: DeepPartial<MsgReportTag>): MsgReportTag {
    const message = createBaseMsgReportTag();
    message.creator = object.creator ?? "";
    message.tagName = object.tagName ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgReportTagAmino): MsgReportTag {
    const message = createBaseMsgReportTag();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.tag_name !== undefined && object.tag_name !== null) {
      message.tagName = object.tag_name;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgReportTag): MsgReportTagAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.tag_name = message.tagName === "" ? undefined : message.tagName;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgReportTagAminoMsg): MsgReportTag {
    return MsgReportTag.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReportTag): MsgReportTagAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgReportTag",
      value: MsgReportTag.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgReportTagProtoMsg): MsgReportTag {
    return MsgReportTag.decode(message.value);
  },
  toProto(message: MsgReportTag): Uint8Array {
    return MsgReportTag.encode(message).finish();
  },
  toProtoMsg(message: MsgReportTag): MsgReportTagProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgReportTag",
      value: MsgReportTag.encode(message).finish()
    };
  }
};
function createBaseMsgReportTagResponse(): MsgReportTagResponse {
  return {};
}
/**
 * MsgReportTagResponse defines the MsgReportTagResponse message.
 * @name MsgReportTagResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReportTagResponse
 */
export const MsgReportTagResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgReportTagResponse",
  encode(_: MsgReportTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportTagResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportTagResponse();
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
  fromPartial(_: DeepPartial<MsgReportTagResponse>): MsgReportTagResponse {
    const message = createBaseMsgReportTagResponse();
    return message;
  },
  fromAmino(_: MsgReportTagResponseAmino): MsgReportTagResponse {
    const message = createBaseMsgReportTagResponse();
    return message;
  },
  toAmino(_: MsgReportTagResponse): MsgReportTagResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReportTagResponseAminoMsg): MsgReportTagResponse {
    return MsgReportTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReportTagResponseProtoMsg): MsgReportTagResponse {
    return MsgReportTagResponse.decode(message.value);
  },
  toProto(message: MsgReportTagResponse): Uint8Array {
    return MsgReportTagResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReportTagResponse): MsgReportTagResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgReportTagResponse",
      value: MsgReportTagResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResolveTagReport(): MsgResolveTagReport {
  return {
    creator: "",
    tagName: "",
    action: BigInt(0),
    reserveAuthority: "",
    reserveMembersCanUse: false
  };
}
/**
 * MsgResolveTagReport defines the MsgResolveTagReport message.
 * @name MsgResolveTagReport
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveTagReport
 */
export const MsgResolveTagReport = {
  typeUrl: "/sparkdream.rep.v1.MsgResolveTagReport",
  aminoType: "sparkdream/x/rep/MsgResolveTagReport",
  encode(message: MsgResolveTagReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tagName !== "") {
      writer.uint32(18).string(message.tagName);
    }
    if (message.action !== BigInt(0)) {
      writer.uint32(24).uint64(message.action);
    }
    if (message.reserveAuthority !== "") {
      writer.uint32(34).string(message.reserveAuthority);
    }
    if (message.reserveMembersCanUse === true) {
      writer.uint32(40).bool(message.reserveMembersCanUse);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveTagReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveTagReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tagName = reader.string();
          break;
        case 3:
          message.action = reader.uint64();
          break;
        case 4:
          message.reserveAuthority = reader.string();
          break;
        case 5:
          message.reserveMembersCanUse = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgResolveTagReport>): MsgResolveTagReport {
    const message = createBaseMsgResolveTagReport();
    message.creator = object.creator ?? "";
    message.tagName = object.tagName ?? "";
    message.action = object.action !== undefined && object.action !== null ? BigInt(object.action.toString()) : BigInt(0);
    message.reserveAuthority = object.reserveAuthority ?? "";
    message.reserveMembersCanUse = object.reserveMembersCanUse ?? false;
    return message;
  },
  fromAmino(object: MsgResolveTagReportAmino): MsgResolveTagReport {
    const message = createBaseMsgResolveTagReport();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.tag_name !== undefined && object.tag_name !== null) {
      message.tagName = object.tag_name;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = BigInt(object.action);
    }
    if (object.reserve_authority !== undefined && object.reserve_authority !== null) {
      message.reserveAuthority = object.reserve_authority;
    }
    if (object.reserve_members_can_use !== undefined && object.reserve_members_can_use !== null) {
      message.reserveMembersCanUse = object.reserve_members_can_use;
    }
    return message;
  },
  toAmino(message: MsgResolveTagReport): MsgResolveTagReportAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.tag_name = message.tagName === "" ? undefined : message.tagName;
    obj.action = message.action !== BigInt(0) ? message.action?.toString() : undefined;
    obj.reserve_authority = message.reserveAuthority === "" ? undefined : message.reserveAuthority;
    obj.reserve_members_can_use = message.reserveMembersCanUse === false ? undefined : message.reserveMembersCanUse;
    return obj;
  },
  fromAminoMsg(object: MsgResolveTagReportAminoMsg): MsgResolveTagReport {
    return MsgResolveTagReport.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResolveTagReport): MsgResolveTagReportAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgResolveTagReport",
      value: MsgResolveTagReport.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResolveTagReportProtoMsg): MsgResolveTagReport {
    return MsgResolveTagReport.decode(message.value);
  },
  toProto(message: MsgResolveTagReport): Uint8Array {
    return MsgResolveTagReport.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveTagReport): MsgResolveTagReportProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgResolveTagReport",
      value: MsgResolveTagReport.encode(message).finish()
    };
  }
};
function createBaseMsgResolveTagReportResponse(): MsgResolveTagReportResponse {
  return {};
}
/**
 * MsgResolveTagReportResponse defines the MsgResolveTagReportResponse message.
 * @name MsgResolveTagReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveTagReportResponse
 */
export const MsgResolveTagReportResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgResolveTagReportResponse",
  encode(_: MsgResolveTagReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveTagReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveTagReportResponse();
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
  fromPartial(_: DeepPartial<MsgResolveTagReportResponse>): MsgResolveTagReportResponse {
    const message = createBaseMsgResolveTagReportResponse();
    return message;
  },
  fromAmino(_: MsgResolveTagReportResponseAmino): MsgResolveTagReportResponse {
    const message = createBaseMsgResolveTagReportResponse();
    return message;
  },
  toAmino(_: MsgResolveTagReportResponse): MsgResolveTagReportResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResolveTagReportResponseAminoMsg): MsgResolveTagReportResponse {
    return MsgResolveTagReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveTagReportResponseProtoMsg): MsgResolveTagReportResponse {
    return MsgResolveTagReportResponse.decode(message.value);
  },
  toProto(message: MsgResolveTagReportResponse): Uint8Array {
    return MsgResolveTagReportResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveTagReportResponse): MsgResolveTagReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgResolveTagReportResponse",
      value: MsgResolveTagReportResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTagBudget(): MsgCreateTagBudget {
  return {
    creator: "",
    tag: "",
    initialPool: "",
    membersOnly: false
  };
}
/**
 * MsgCreateTagBudget defines the MsgCreateTagBudget message.
 * @name MsgCreateTagBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateTagBudget
 */
export const MsgCreateTagBudget = {
  typeUrl: "/sparkdream.rep.v1.MsgCreateTagBudget",
  aminoType: "sparkdream/x/rep/MsgCreateTagBudget",
  encode(message: MsgCreateTagBudget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tag !== "") {
      writer.uint32(18).string(message.tag);
    }
    if (message.initialPool !== "") {
      writer.uint32(26).string(message.initialPool);
    }
    if (message.membersOnly === true) {
      writer.uint32(32).bool(message.membersOnly);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTagBudget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTagBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tag = reader.string();
          break;
        case 3:
          message.initialPool = reader.string();
          break;
        case 4:
          message.membersOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateTagBudget>): MsgCreateTagBudget {
    const message = createBaseMsgCreateTagBudget();
    message.creator = object.creator ?? "";
    message.tag = object.tag ?? "";
    message.initialPool = object.initialPool ?? "";
    message.membersOnly = object.membersOnly ?? false;
    return message;
  },
  fromAmino(object: MsgCreateTagBudgetAmino): MsgCreateTagBudget {
    const message = createBaseMsgCreateTagBudget();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    if (object.initial_pool !== undefined && object.initial_pool !== null) {
      message.initialPool = object.initial_pool;
    }
    if (object.members_only !== undefined && object.members_only !== null) {
      message.membersOnly = object.members_only;
    }
    return message;
  },
  toAmino(message: MsgCreateTagBudget): MsgCreateTagBudgetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.tag = message.tag === "" ? undefined : message.tag;
    obj.initial_pool = message.initialPool === "" ? undefined : message.initialPool;
    obj.members_only = message.membersOnly === false ? undefined : message.membersOnly;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTagBudgetAminoMsg): MsgCreateTagBudget {
    return MsgCreateTagBudget.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateTagBudget): MsgCreateTagBudgetAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgCreateTagBudget",
      value: MsgCreateTagBudget.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateTagBudgetProtoMsg): MsgCreateTagBudget {
    return MsgCreateTagBudget.decode(message.value);
  },
  toProto(message: MsgCreateTagBudget): Uint8Array {
    return MsgCreateTagBudget.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTagBudget): MsgCreateTagBudgetProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCreateTagBudget",
      value: MsgCreateTagBudget.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTagBudgetResponse(): MsgCreateTagBudgetResponse {
  return {};
}
/**
 * MsgCreateTagBudgetResponse defines the MsgCreateTagBudgetResponse message.
 * @name MsgCreateTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCreateTagBudgetResponse
 */
export const MsgCreateTagBudgetResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgCreateTagBudgetResponse",
  encode(_: MsgCreateTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTagBudgetResponse();
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
  fromPartial(_: DeepPartial<MsgCreateTagBudgetResponse>): MsgCreateTagBudgetResponse {
    const message = createBaseMsgCreateTagBudgetResponse();
    return message;
  },
  fromAmino(_: MsgCreateTagBudgetResponseAmino): MsgCreateTagBudgetResponse {
    const message = createBaseMsgCreateTagBudgetResponse();
    return message;
  },
  toAmino(_: MsgCreateTagBudgetResponse): MsgCreateTagBudgetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateTagBudgetResponseAminoMsg): MsgCreateTagBudgetResponse {
    return MsgCreateTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTagBudgetResponseProtoMsg): MsgCreateTagBudgetResponse {
    return MsgCreateTagBudgetResponse.decode(message.value);
  },
  toProto(message: MsgCreateTagBudgetResponse): Uint8Array {
    return MsgCreateTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTagBudgetResponse): MsgCreateTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCreateTagBudgetResponse",
      value: MsgCreateTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAwardFromTagBudget(): MsgAwardFromTagBudget {
  return {
    creator: "",
    budgetId: BigInt(0),
    postId: BigInt(0),
    amount: "",
    reason: ""
  };
}
/**
 * MsgAwardFromTagBudget defines the MsgAwardFromTagBudget message.
 * @name MsgAwardFromTagBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAwardFromTagBudget
 */
export const MsgAwardFromTagBudget = {
  typeUrl: "/sparkdream.rep.v1.MsgAwardFromTagBudget",
  aminoType: "sparkdream/x/rep/MsgAwardFromTagBudget",
  encode(message: MsgAwardFromTagBudget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.budgetId);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(24).uint64(message.postId);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.reason !== "") {
      writer.uint32(42).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAwardFromTagBudget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAwardFromTagBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.budgetId = reader.uint64();
          break;
        case 3:
          message.postId = reader.uint64();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAwardFromTagBudget>): MsgAwardFromTagBudget {
    const message = createBaseMsgAwardFromTagBudget();
    message.creator = object.creator ?? "";
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgAwardFromTagBudgetAmino): MsgAwardFromTagBudget {
    const message = createBaseMsgAwardFromTagBudget();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgAwardFromTagBudget): MsgAwardFromTagBudgetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgAwardFromTagBudgetAminoMsg): MsgAwardFromTagBudget {
    return MsgAwardFromTagBudget.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAwardFromTagBudget): MsgAwardFromTagBudgetAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgAwardFromTagBudget",
      value: MsgAwardFromTagBudget.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAwardFromTagBudgetProtoMsg): MsgAwardFromTagBudget {
    return MsgAwardFromTagBudget.decode(message.value);
  },
  toProto(message: MsgAwardFromTagBudget): Uint8Array {
    return MsgAwardFromTagBudget.encode(message).finish();
  },
  toProtoMsg(message: MsgAwardFromTagBudget): MsgAwardFromTagBudgetProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAwardFromTagBudget",
      value: MsgAwardFromTagBudget.encode(message).finish()
    };
  }
};
function createBaseMsgAwardFromTagBudgetResponse(): MsgAwardFromTagBudgetResponse {
  return {};
}
/**
 * MsgAwardFromTagBudgetResponse defines the MsgAwardFromTagBudgetResponse message.
 * @name MsgAwardFromTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAwardFromTagBudgetResponse
 */
export const MsgAwardFromTagBudgetResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgAwardFromTagBudgetResponse",
  encode(_: MsgAwardFromTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAwardFromTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAwardFromTagBudgetResponse();
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
  fromPartial(_: DeepPartial<MsgAwardFromTagBudgetResponse>): MsgAwardFromTagBudgetResponse {
    const message = createBaseMsgAwardFromTagBudgetResponse();
    return message;
  },
  fromAmino(_: MsgAwardFromTagBudgetResponseAmino): MsgAwardFromTagBudgetResponse {
    const message = createBaseMsgAwardFromTagBudgetResponse();
    return message;
  },
  toAmino(_: MsgAwardFromTagBudgetResponse): MsgAwardFromTagBudgetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAwardFromTagBudgetResponseAminoMsg): MsgAwardFromTagBudgetResponse {
    return MsgAwardFromTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAwardFromTagBudgetResponseProtoMsg): MsgAwardFromTagBudgetResponse {
    return MsgAwardFromTagBudgetResponse.decode(message.value);
  },
  toProto(message: MsgAwardFromTagBudgetResponse): Uint8Array {
    return MsgAwardFromTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAwardFromTagBudgetResponse): MsgAwardFromTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAwardFromTagBudgetResponse",
      value: MsgAwardFromTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTopUpTagBudget(): MsgTopUpTagBudget {
  return {
    creator: "",
    budgetId: BigInt(0),
    amount: ""
  };
}
/**
 * MsgTopUpTagBudget defines the MsgTopUpTagBudget message.
 * @name MsgTopUpTagBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgTopUpTagBudget
 */
export const MsgTopUpTagBudget = {
  typeUrl: "/sparkdream.rep.v1.MsgTopUpTagBudget",
  aminoType: "sparkdream/x/rep/MsgTopUpTagBudget",
  encode(message: MsgTopUpTagBudget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.budgetId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpTagBudget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTopUpTagBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.budgetId = reader.uint64();
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
  fromPartial(object: DeepPartial<MsgTopUpTagBudget>): MsgTopUpTagBudget {
    const message = createBaseMsgTopUpTagBudget();
    message.creator = object.creator ?? "";
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgTopUpTagBudgetAmino): MsgTopUpTagBudget {
    const message = createBaseMsgTopUpTagBudget();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgTopUpTagBudget): MsgTopUpTagBudgetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgTopUpTagBudgetAminoMsg): MsgTopUpTagBudget {
    return MsgTopUpTagBudget.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTopUpTagBudget): MsgTopUpTagBudgetAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgTopUpTagBudget",
      value: MsgTopUpTagBudget.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTopUpTagBudgetProtoMsg): MsgTopUpTagBudget {
    return MsgTopUpTagBudget.decode(message.value);
  },
  toProto(message: MsgTopUpTagBudget): Uint8Array {
    return MsgTopUpTagBudget.encode(message).finish();
  },
  toProtoMsg(message: MsgTopUpTagBudget): MsgTopUpTagBudgetProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgTopUpTagBudget",
      value: MsgTopUpTagBudget.encode(message).finish()
    };
  }
};
function createBaseMsgTopUpTagBudgetResponse(): MsgTopUpTagBudgetResponse {
  return {};
}
/**
 * MsgTopUpTagBudgetResponse defines the MsgTopUpTagBudgetResponse message.
 * @name MsgTopUpTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgTopUpTagBudgetResponse
 */
export const MsgTopUpTagBudgetResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgTopUpTagBudgetResponse",
  encode(_: MsgTopUpTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTopUpTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTopUpTagBudgetResponse();
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
  fromPartial(_: DeepPartial<MsgTopUpTagBudgetResponse>): MsgTopUpTagBudgetResponse {
    const message = createBaseMsgTopUpTagBudgetResponse();
    return message;
  },
  fromAmino(_: MsgTopUpTagBudgetResponseAmino): MsgTopUpTagBudgetResponse {
    const message = createBaseMsgTopUpTagBudgetResponse();
    return message;
  },
  toAmino(_: MsgTopUpTagBudgetResponse): MsgTopUpTagBudgetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTopUpTagBudgetResponseAminoMsg): MsgTopUpTagBudgetResponse {
    return MsgTopUpTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTopUpTagBudgetResponseProtoMsg): MsgTopUpTagBudgetResponse {
    return MsgTopUpTagBudgetResponse.decode(message.value);
  },
  toProto(message: MsgTopUpTagBudgetResponse): Uint8Array {
    return MsgTopUpTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTopUpTagBudgetResponse): MsgTopUpTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgTopUpTagBudgetResponse",
      value: MsgTopUpTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleTagBudget(): MsgToggleTagBudget {
  return {
    creator: "",
    budgetId: BigInt(0),
    active: false
  };
}
/**
 * MsgToggleTagBudget defines the MsgToggleTagBudget message.
 * @name MsgToggleTagBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgToggleTagBudget
 */
export const MsgToggleTagBudget = {
  typeUrl: "/sparkdream.rep.v1.MsgToggleTagBudget",
  aminoType: "sparkdream/x/rep/MsgToggleTagBudget",
  encode(message: MsgToggleTagBudget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.budgetId);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleTagBudget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleTagBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.budgetId = reader.uint64();
          break;
        case 3:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgToggleTagBudget>): MsgToggleTagBudget {
    const message = createBaseMsgToggleTagBudget();
    message.creator = object.creator ?? "";
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: MsgToggleTagBudgetAmino): MsgToggleTagBudget {
    const message = createBaseMsgToggleTagBudget();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: MsgToggleTagBudget): MsgToggleTagBudgetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: MsgToggleTagBudgetAminoMsg): MsgToggleTagBudget {
    return MsgToggleTagBudget.fromAmino(object.value);
  },
  toAminoMsg(message: MsgToggleTagBudget): MsgToggleTagBudgetAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgToggleTagBudget",
      value: MsgToggleTagBudget.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgToggleTagBudgetProtoMsg): MsgToggleTagBudget {
    return MsgToggleTagBudget.decode(message.value);
  },
  toProto(message: MsgToggleTagBudget): Uint8Array {
    return MsgToggleTagBudget.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleTagBudget): MsgToggleTagBudgetProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgToggleTagBudget",
      value: MsgToggleTagBudget.encode(message).finish()
    };
  }
};
function createBaseMsgToggleTagBudgetResponse(): MsgToggleTagBudgetResponse {
  return {};
}
/**
 * MsgToggleTagBudgetResponse defines the MsgToggleTagBudgetResponse message.
 * @name MsgToggleTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgToggleTagBudgetResponse
 */
export const MsgToggleTagBudgetResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgToggleTagBudgetResponse",
  encode(_: MsgToggleTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgToggleTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgToggleTagBudgetResponse();
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
  fromPartial(_: DeepPartial<MsgToggleTagBudgetResponse>): MsgToggleTagBudgetResponse {
    const message = createBaseMsgToggleTagBudgetResponse();
    return message;
  },
  fromAmino(_: MsgToggleTagBudgetResponseAmino): MsgToggleTagBudgetResponse {
    const message = createBaseMsgToggleTagBudgetResponse();
    return message;
  },
  toAmino(_: MsgToggleTagBudgetResponse): MsgToggleTagBudgetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgToggleTagBudgetResponseAminoMsg): MsgToggleTagBudgetResponse {
    return MsgToggleTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleTagBudgetResponseProtoMsg): MsgToggleTagBudgetResponse {
    return MsgToggleTagBudgetResponse.decode(message.value);
  },
  toProto(message: MsgToggleTagBudgetResponse): Uint8Array {
    return MsgToggleTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleTagBudgetResponse): MsgToggleTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgToggleTagBudgetResponse",
      value: MsgToggleTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTagBudget(): MsgWithdrawTagBudget {
  return {
    creator: "",
    budgetId: BigInt(0)
  };
}
/**
 * MsgWithdrawTagBudget defines the MsgWithdrawTagBudget message.
 * @name MsgWithdrawTagBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgWithdrawTagBudget
 */
export const MsgWithdrawTagBudget = {
  typeUrl: "/sparkdream.rep.v1.MsgWithdrawTagBudget",
  aminoType: "sparkdream/x/rep/MsgWithdrawTagBudget",
  encode(message: MsgWithdrawTagBudget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.budgetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawTagBudget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTagBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.budgetId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawTagBudget>): MsgWithdrawTagBudget {
    const message = createBaseMsgWithdrawTagBudget();
    message.creator = object.creator ?? "";
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgWithdrawTagBudgetAmino): MsgWithdrawTagBudget {
    const message = createBaseMsgWithdrawTagBudget();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    return message;
  },
  toAmino(message: MsgWithdrawTagBudget): MsgWithdrawTagBudgetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTagBudgetAminoMsg): MsgWithdrawTagBudget {
    return MsgWithdrawTagBudget.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawTagBudget): MsgWithdrawTagBudgetAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgWithdrawTagBudget",
      value: MsgWithdrawTagBudget.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawTagBudgetProtoMsg): MsgWithdrawTagBudget {
    return MsgWithdrawTagBudget.decode(message.value);
  },
  toProto(message: MsgWithdrawTagBudget): Uint8Array {
    return MsgWithdrawTagBudget.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTagBudget): MsgWithdrawTagBudgetProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgWithdrawTagBudget",
      value: MsgWithdrawTagBudget.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTagBudgetResponse(): MsgWithdrawTagBudgetResponse {
  return {};
}
/**
 * MsgWithdrawTagBudgetResponse defines the MsgWithdrawTagBudgetResponse message.
 * @name MsgWithdrawTagBudgetResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgWithdrawTagBudgetResponse
 */
export const MsgWithdrawTagBudgetResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgWithdrawTagBudgetResponse",
  encode(_: MsgWithdrawTagBudgetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawTagBudgetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTagBudgetResponse();
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
  fromPartial(_: DeepPartial<MsgWithdrawTagBudgetResponse>): MsgWithdrawTagBudgetResponse {
    const message = createBaseMsgWithdrawTagBudgetResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawTagBudgetResponseAmino): MsgWithdrawTagBudgetResponse {
    const message = createBaseMsgWithdrawTagBudgetResponse();
    return message;
  },
  toAmino(_: MsgWithdrawTagBudgetResponse): MsgWithdrawTagBudgetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTagBudgetResponseAminoMsg): MsgWithdrawTagBudgetResponse {
    return MsgWithdrawTagBudgetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawTagBudgetResponseProtoMsg): MsgWithdrawTagBudgetResponse {
    return MsgWithdrawTagBudgetResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawTagBudgetResponse): Uint8Array {
    return MsgWithdrawTagBudgetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTagBudgetResponse): MsgWithdrawTagBudgetResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgWithdrawTagBudgetResponse",
      value: MsgWithdrawTagBudgetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBondRole(): MsgBondRole {
  return {
    creator: "",
    roleType: 0,
    amount: ""
  };
}
/**
 * MsgBondRole bonds DREAM against a specific role_type. The role's
 * BondedRoleConfig controls eligibility (min_bond, min_rep_tier,
 * min_trust_level, min_age_blocks) and demotion behaviour.
 * @name MsgBondRole
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgBondRole
 */
export const MsgBondRole = {
  typeUrl: "/sparkdream.rep.v1.MsgBondRole",
  aminoType: "sparkdream/x/rep/MsgBondRole",
  encode(message: MsgBondRole, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.roleType !== 0) {
      writer.uint32(16).int32(message.roleType);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBondRole {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.roleType = reader.int32() as any;
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
  fromPartial(object: DeepPartial<MsgBondRole>): MsgBondRole {
    const message = createBaseMsgBondRole();
    message.creator = object.creator ?? "";
    message.roleType = object.roleType ?? 0;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgBondRoleAmino): MsgBondRole {
    const message = createBaseMsgBondRole();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.role_type !== undefined && object.role_type !== null) {
      message.roleType = object.role_type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgBondRole): MsgBondRoleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.role_type = message.roleType === 0 ? undefined : message.roleType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgBondRoleAminoMsg): MsgBondRole {
    return MsgBondRole.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBondRole): MsgBondRoleAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgBondRole",
      value: MsgBondRole.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBondRoleProtoMsg): MsgBondRole {
    return MsgBondRole.decode(message.value);
  },
  toProto(message: MsgBondRole): Uint8Array {
    return MsgBondRole.encode(message).finish();
  },
  toProtoMsg(message: MsgBondRole): MsgBondRoleProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgBondRole",
      value: MsgBondRole.encode(message).finish()
    };
  }
};
function createBaseMsgBondRoleResponse(): MsgBondRoleResponse {
  return {};
}
/**
 * MsgBondRoleResponse defines the MsgBondRoleResponse message.
 * @name MsgBondRoleResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgBondRoleResponse
 */
export const MsgBondRoleResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgBondRoleResponse",
  encode(_: MsgBondRoleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBondRoleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondRoleResponse();
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
  fromPartial(_: DeepPartial<MsgBondRoleResponse>): MsgBondRoleResponse {
    const message = createBaseMsgBondRoleResponse();
    return message;
  },
  fromAmino(_: MsgBondRoleResponseAmino): MsgBondRoleResponse {
    const message = createBaseMsgBondRoleResponse();
    return message;
  },
  toAmino(_: MsgBondRoleResponse): MsgBondRoleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBondRoleResponseAminoMsg): MsgBondRoleResponse {
    return MsgBondRoleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBondRoleResponseProtoMsg): MsgBondRoleResponse {
    return MsgBondRoleResponse.decode(message.value);
  },
  toProto(message: MsgBondRoleResponse): Uint8Array {
    return MsgBondRoleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBondRoleResponse): MsgBondRoleResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgBondRoleResponse",
      value: MsgBondRoleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondRole(): MsgUnbondRole {
  return {
    creator: "",
    roleType: 0,
    amount: ""
  };
}
/**
 * MsgUnbondRole withdraws a portion of the caller's bond for the given
 * role_type. The committed portion (reserved against pending actions) is
 * non-withdrawable.
 * @name MsgUnbondRole
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUnbondRole
 */
export const MsgUnbondRole = {
  typeUrl: "/sparkdream.rep.v1.MsgUnbondRole",
  aminoType: "sparkdream/x/rep/MsgUnbondRole",
  encode(message: MsgUnbondRole, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.roleType !== 0) {
      writer.uint32(16).int32(message.roleType);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondRole {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.roleType = reader.int32() as any;
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
  fromPartial(object: DeepPartial<MsgUnbondRole>): MsgUnbondRole {
    const message = createBaseMsgUnbondRole();
    message.creator = object.creator ?? "";
    message.roleType = object.roleType ?? 0;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgUnbondRoleAmino): MsgUnbondRole {
    const message = createBaseMsgUnbondRole();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.role_type !== undefined && object.role_type !== null) {
      message.roleType = object.role_type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgUnbondRole): MsgUnbondRoleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.role_type = message.roleType === 0 ? undefined : message.roleType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgUnbondRoleAminoMsg): MsgUnbondRole {
    return MsgUnbondRole.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnbondRole): MsgUnbondRoleAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgUnbondRole",
      value: MsgUnbondRole.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnbondRoleProtoMsg): MsgUnbondRole {
    return MsgUnbondRole.decode(message.value);
  },
  toProto(message: MsgUnbondRole): Uint8Array {
    return MsgUnbondRole.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondRole): MsgUnbondRoleProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgUnbondRole",
      value: MsgUnbondRole.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondRoleResponse(): MsgUnbondRoleResponse {
  return {};
}
/**
 * MsgUnbondRoleResponse defines the MsgUnbondRoleResponse message.
 * @name MsgUnbondRoleResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgUnbondRoleResponse
 */
export const MsgUnbondRoleResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgUnbondRoleResponse",
  encode(_: MsgUnbondRoleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondRoleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondRoleResponse();
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
  fromPartial(_: DeepPartial<MsgUnbondRoleResponse>): MsgUnbondRoleResponse {
    const message = createBaseMsgUnbondRoleResponse();
    return message;
  },
  fromAmino(_: MsgUnbondRoleResponseAmino): MsgUnbondRoleResponse {
    const message = createBaseMsgUnbondRoleResponse();
    return message;
  },
  toAmino(_: MsgUnbondRoleResponse): MsgUnbondRoleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnbondRoleResponseAminoMsg): MsgUnbondRoleResponse {
    return MsgUnbondRoleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnbondRoleResponseProtoMsg): MsgUnbondRoleResponse {
    return MsgUnbondRoleResponse.decode(message.value);
  },
  toProto(message: MsgUnbondRoleResponse): Uint8Array {
    return MsgUnbondRoleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondRoleResponse): MsgUnbondRoleResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgUnbondRoleResponse",
      value: MsgUnbondRoleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUnbondRole(): MsgCancelUnbondRole {
  return {
    creator: "",
    roleType: 0,
    amount: ""
  };
}
/**
 * MsgCancelUnbondRole cancels part or all of an in-flight unbond for the given
 * role_type. The cancelled amount returns to active bond immediately (the DREAM
 * was never unlocked — pending is only an earmark), without waiting out the
 * cooldown. amount must be <= the role's pending_unbond_amount.
 * @name MsgCancelUnbondRole
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelUnbondRole
 */
export const MsgCancelUnbondRole = {
  typeUrl: "/sparkdream.rep.v1.MsgCancelUnbondRole",
  aminoType: "sparkdream/x/rep/MsgCancelUnbondRole",
  encode(message: MsgCancelUnbondRole, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.roleType !== 0) {
      writer.uint32(16).int32(message.roleType);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUnbondRole {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.roleType = reader.int32() as any;
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
  fromPartial(object: DeepPartial<MsgCancelUnbondRole>): MsgCancelUnbondRole {
    const message = createBaseMsgCancelUnbondRole();
    message.creator = object.creator ?? "";
    message.roleType = object.roleType ?? 0;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgCancelUnbondRoleAmino): MsgCancelUnbondRole {
    const message = createBaseMsgCancelUnbondRole();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.role_type !== undefined && object.role_type !== null) {
      message.roleType = object.role_type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgCancelUnbondRole): MsgCancelUnbondRoleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.role_type = message.roleType === 0 ? undefined : message.roleType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgCancelUnbondRoleAminoMsg): MsgCancelUnbondRole {
    return MsgCancelUnbondRole.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelUnbondRole): MsgCancelUnbondRoleAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgCancelUnbondRole",
      value: MsgCancelUnbondRole.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelUnbondRoleProtoMsg): MsgCancelUnbondRole {
    return MsgCancelUnbondRole.decode(message.value);
  },
  toProto(message: MsgCancelUnbondRole): Uint8Array {
    return MsgCancelUnbondRole.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUnbondRole): MsgCancelUnbondRoleProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCancelUnbondRole",
      value: MsgCancelUnbondRole.encode(message).finish()
    };
  }
};
function createBaseMsgCancelUnbondRoleResponse(): MsgCancelUnbondRoleResponse {
  return {};
}
/**
 * MsgCancelUnbondRoleResponse defines the MsgCancelUnbondRoleResponse message.
 * @name MsgCancelUnbondRoleResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelUnbondRoleResponse
 */
export const MsgCancelUnbondRoleResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgCancelUnbondRoleResponse",
  encode(_: MsgCancelUnbondRoleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUnbondRoleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondRoleResponse();
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
  fromPartial(_: DeepPartial<MsgCancelUnbondRoleResponse>): MsgCancelUnbondRoleResponse {
    const message = createBaseMsgCancelUnbondRoleResponse();
    return message;
  },
  fromAmino(_: MsgCancelUnbondRoleResponseAmino): MsgCancelUnbondRoleResponse {
    const message = createBaseMsgCancelUnbondRoleResponse();
    return message;
  },
  toAmino(_: MsgCancelUnbondRoleResponse): MsgCancelUnbondRoleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelUnbondRoleResponseAminoMsg): MsgCancelUnbondRoleResponse {
    return MsgCancelUnbondRoleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelUnbondRoleResponseProtoMsg): MsgCancelUnbondRoleResponse {
    return MsgCancelUnbondRoleResponse.decode(message.value);
  },
  toProto(message: MsgCancelUnbondRoleResponse): Uint8Array {
    return MsgCancelUnbondRoleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUnbondRoleResponse): MsgCancelUnbondRoleResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCancelUnbondRoleResponse",
      value: MsgCancelUnbondRoleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReportMember(): MsgReportMember {
  return {
    creator: "",
    member: "",
    reason: "",
    recommendedAction: BigInt(0)
  };
}
/**
 * MsgReportMember defines the MsgReportMember message.
 * @name MsgReportMember
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReportMember
 */
export const MsgReportMember = {
  typeUrl: "/sparkdream.rep.v1.MsgReportMember",
  aminoType: "sparkdream/x/rep/MsgReportMember",
  encode(message: MsgReportMember, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.member !== "") {
      writer.uint32(18).string(message.member);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (message.recommendedAction !== BigInt(0)) {
      writer.uint32(32).uint64(message.recommendedAction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportMember {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.member = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.recommendedAction = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReportMember>): MsgReportMember {
    const message = createBaseMsgReportMember();
    message.creator = object.creator ?? "";
    message.member = object.member ?? "";
    message.reason = object.reason ?? "";
    message.recommendedAction = object.recommendedAction !== undefined && object.recommendedAction !== null ? BigInt(object.recommendedAction.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgReportMemberAmino): MsgReportMember {
    const message = createBaseMsgReportMember();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.recommended_action !== undefined && object.recommended_action !== null) {
      message.recommendedAction = BigInt(object.recommended_action);
    }
    return message;
  },
  toAmino(message: MsgReportMember): MsgReportMemberAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.member = message.member === "" ? undefined : message.member;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.recommended_action = message.recommendedAction !== BigInt(0) ? message.recommendedAction?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgReportMemberAminoMsg): MsgReportMember {
    return MsgReportMember.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReportMember): MsgReportMemberAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgReportMember",
      value: MsgReportMember.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgReportMemberProtoMsg): MsgReportMember {
    return MsgReportMember.decode(message.value);
  },
  toProto(message: MsgReportMember): Uint8Array {
    return MsgReportMember.encode(message).finish();
  },
  toProtoMsg(message: MsgReportMember): MsgReportMemberProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgReportMember",
      value: MsgReportMember.encode(message).finish()
    };
  }
};
function createBaseMsgReportMemberResponse(): MsgReportMemberResponse {
  return {};
}
/**
 * MsgReportMemberResponse defines the MsgReportMemberResponse message.
 * @name MsgReportMemberResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReportMemberResponse
 */
export const MsgReportMemberResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgReportMemberResponse",
  encode(_: MsgReportMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportMemberResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportMemberResponse();
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
  fromPartial(_: DeepPartial<MsgReportMemberResponse>): MsgReportMemberResponse {
    const message = createBaseMsgReportMemberResponse();
    return message;
  },
  fromAmino(_: MsgReportMemberResponseAmino): MsgReportMemberResponse {
    const message = createBaseMsgReportMemberResponse();
    return message;
  },
  toAmino(_: MsgReportMemberResponse): MsgReportMemberResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReportMemberResponseAminoMsg): MsgReportMemberResponse {
    return MsgReportMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReportMemberResponseProtoMsg): MsgReportMemberResponse {
    return MsgReportMemberResponse.decode(message.value);
  },
  toProto(message: MsgReportMemberResponse): Uint8Array {
    return MsgReportMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReportMemberResponse): MsgReportMemberResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgReportMemberResponse",
      value: MsgReportMemberResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCosignMemberReport(): MsgCosignMemberReport {
  return {
    creator: "",
    member: ""
  };
}
/**
 * MsgCosignMemberReport defines the MsgCosignMemberReport message.
 * @name MsgCosignMemberReport
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCosignMemberReport
 */
export const MsgCosignMemberReport = {
  typeUrl: "/sparkdream.rep.v1.MsgCosignMemberReport",
  aminoType: "sparkdream/x/rep/MsgCosignMemberReport",
  encode(message: MsgCosignMemberReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.member !== "") {
      writer.uint32(18).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCosignMemberReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCosignMemberReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.member = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCosignMemberReport>): MsgCosignMemberReport {
    const message = createBaseMsgCosignMemberReport();
    message.creator = object.creator ?? "";
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: MsgCosignMemberReportAmino): MsgCosignMemberReport {
    const message = createBaseMsgCosignMemberReport();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: MsgCosignMemberReport): MsgCosignMemberReportAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: MsgCosignMemberReportAminoMsg): MsgCosignMemberReport {
    return MsgCosignMemberReport.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCosignMemberReport): MsgCosignMemberReportAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgCosignMemberReport",
      value: MsgCosignMemberReport.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCosignMemberReportProtoMsg): MsgCosignMemberReport {
    return MsgCosignMemberReport.decode(message.value);
  },
  toProto(message: MsgCosignMemberReport): Uint8Array {
    return MsgCosignMemberReport.encode(message).finish();
  },
  toProtoMsg(message: MsgCosignMemberReport): MsgCosignMemberReportProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCosignMemberReport",
      value: MsgCosignMemberReport.encode(message).finish()
    };
  }
};
function createBaseMsgCosignMemberReportResponse(): MsgCosignMemberReportResponse {
  return {};
}
/**
 * MsgCosignMemberReportResponse defines the MsgCosignMemberReportResponse message.
 * @name MsgCosignMemberReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCosignMemberReportResponse
 */
export const MsgCosignMemberReportResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgCosignMemberReportResponse",
  encode(_: MsgCosignMemberReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCosignMemberReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCosignMemberReportResponse();
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
  fromPartial(_: DeepPartial<MsgCosignMemberReportResponse>): MsgCosignMemberReportResponse {
    const message = createBaseMsgCosignMemberReportResponse();
    return message;
  },
  fromAmino(_: MsgCosignMemberReportResponseAmino): MsgCosignMemberReportResponse {
    const message = createBaseMsgCosignMemberReportResponse();
    return message;
  },
  toAmino(_: MsgCosignMemberReportResponse): MsgCosignMemberReportResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCosignMemberReportResponseAminoMsg): MsgCosignMemberReportResponse {
    return MsgCosignMemberReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCosignMemberReportResponseProtoMsg): MsgCosignMemberReportResponse {
    return MsgCosignMemberReportResponse.decode(message.value);
  },
  toProto(message: MsgCosignMemberReportResponse): Uint8Array {
    return MsgCosignMemberReportResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCosignMemberReportResponse): MsgCosignMemberReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCosignMemberReportResponse",
      value: MsgCosignMemberReportResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResolveMemberReport(): MsgResolveMemberReport {
  return {
    creator: "",
    member: "",
    action: BigInt(0),
    reason: ""
  };
}
/**
 * MsgResolveMemberReport defines the MsgResolveMemberReport message.
 * @name MsgResolveMemberReport
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveMemberReport
 */
export const MsgResolveMemberReport = {
  typeUrl: "/sparkdream.rep.v1.MsgResolveMemberReport",
  aminoType: "sparkdream/x/rep/MsgResolveMemberReport",
  encode(message: MsgResolveMemberReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.member !== "") {
      writer.uint32(18).string(message.member);
    }
    if (message.action !== BigInt(0)) {
      writer.uint32(24).uint64(message.action);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveMemberReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveMemberReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.member = reader.string();
          break;
        case 3:
          message.action = reader.uint64();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgResolveMemberReport>): MsgResolveMemberReport {
    const message = createBaseMsgResolveMemberReport();
    message.creator = object.creator ?? "";
    message.member = object.member ?? "";
    message.action = object.action !== undefined && object.action !== null ? BigInt(object.action.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgResolveMemberReportAmino): MsgResolveMemberReport {
    const message = createBaseMsgResolveMemberReport();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = BigInt(object.action);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgResolveMemberReport): MsgResolveMemberReportAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.member = message.member === "" ? undefined : message.member;
    obj.action = message.action !== BigInt(0) ? message.action?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgResolveMemberReportAminoMsg): MsgResolveMemberReport {
    return MsgResolveMemberReport.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResolveMemberReport): MsgResolveMemberReportAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgResolveMemberReport",
      value: MsgResolveMemberReport.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResolveMemberReportProtoMsg): MsgResolveMemberReport {
    return MsgResolveMemberReport.decode(message.value);
  },
  toProto(message: MsgResolveMemberReport): Uint8Array {
    return MsgResolveMemberReport.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveMemberReport): MsgResolveMemberReportProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgResolveMemberReport",
      value: MsgResolveMemberReport.encode(message).finish()
    };
  }
};
function createBaseMsgResolveMemberReportResponse(): MsgResolveMemberReportResponse {
  return {};
}
/**
 * MsgResolveMemberReportResponse defines the MsgResolveMemberReportResponse message.
 * @name MsgResolveMemberReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveMemberReportResponse
 */
export const MsgResolveMemberReportResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgResolveMemberReportResponse",
  encode(_: MsgResolveMemberReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveMemberReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveMemberReportResponse();
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
  fromPartial(_: DeepPartial<MsgResolveMemberReportResponse>): MsgResolveMemberReportResponse {
    const message = createBaseMsgResolveMemberReportResponse();
    return message;
  },
  fromAmino(_: MsgResolveMemberReportResponseAmino): MsgResolveMemberReportResponse {
    const message = createBaseMsgResolveMemberReportResponse();
    return message;
  },
  toAmino(_: MsgResolveMemberReportResponse): MsgResolveMemberReportResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResolveMemberReportResponseAminoMsg): MsgResolveMemberReportResponse {
    return MsgResolveMemberReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveMemberReportResponseProtoMsg): MsgResolveMemberReportResponse {
    return MsgResolveMemberReportResponse.decode(message.value);
  },
  toProto(message: MsgResolveMemberReportResponse): Uint8Array {
    return MsgResolveMemberReportResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveMemberReportResponse): MsgResolveMemberReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgResolveMemberReportResponse",
      value: MsgResolveMemberReportResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDefendMemberReport(): MsgDefendMemberReport {
  return {
    creator: "",
    defense: ""
  };
}
/**
 * MsgDefendMemberReport defines the MsgDefendMemberReport message.
 * @name MsgDefendMemberReport
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgDefendMemberReport
 */
export const MsgDefendMemberReport = {
  typeUrl: "/sparkdream.rep.v1.MsgDefendMemberReport",
  aminoType: "sparkdream/x/rep/MsgDefendMemberReport",
  encode(message: MsgDefendMemberReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.defense !== "") {
      writer.uint32(18).string(message.defense);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDefendMemberReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefendMemberReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.defense = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDefendMemberReport>): MsgDefendMemberReport {
    const message = createBaseMsgDefendMemberReport();
    message.creator = object.creator ?? "";
    message.defense = object.defense ?? "";
    return message;
  },
  fromAmino(object: MsgDefendMemberReportAmino): MsgDefendMemberReport {
    const message = createBaseMsgDefendMemberReport();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.defense !== undefined && object.defense !== null) {
      message.defense = object.defense;
    }
    return message;
  },
  toAmino(message: MsgDefendMemberReport): MsgDefendMemberReportAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.defense = message.defense === "" ? undefined : message.defense;
    return obj;
  },
  fromAminoMsg(object: MsgDefendMemberReportAminoMsg): MsgDefendMemberReport {
    return MsgDefendMemberReport.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDefendMemberReport): MsgDefendMemberReportAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgDefendMemberReport",
      value: MsgDefendMemberReport.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDefendMemberReportProtoMsg): MsgDefendMemberReport {
    return MsgDefendMemberReport.decode(message.value);
  },
  toProto(message: MsgDefendMemberReport): Uint8Array {
    return MsgDefendMemberReport.encode(message).finish();
  },
  toProtoMsg(message: MsgDefendMemberReport): MsgDefendMemberReportProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgDefendMemberReport",
      value: MsgDefendMemberReport.encode(message).finish()
    };
  }
};
function createBaseMsgDefendMemberReportResponse(): MsgDefendMemberReportResponse {
  return {};
}
/**
 * MsgDefendMemberReportResponse defines the MsgDefendMemberReportResponse message.
 * @name MsgDefendMemberReportResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgDefendMemberReportResponse
 */
export const MsgDefendMemberReportResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgDefendMemberReportResponse",
  encode(_: MsgDefendMemberReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDefendMemberReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefendMemberReportResponse();
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
  fromPartial(_: DeepPartial<MsgDefendMemberReportResponse>): MsgDefendMemberReportResponse {
    const message = createBaseMsgDefendMemberReportResponse();
    return message;
  },
  fromAmino(_: MsgDefendMemberReportResponseAmino): MsgDefendMemberReportResponse {
    const message = createBaseMsgDefendMemberReportResponse();
    return message;
  },
  toAmino(_: MsgDefendMemberReportResponse): MsgDefendMemberReportResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDefendMemberReportResponseAminoMsg): MsgDefendMemberReportResponse {
    return MsgDefendMemberReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDefendMemberReportResponseProtoMsg): MsgDefendMemberReportResponse {
    return MsgDefendMemberReportResponse.decode(message.value);
  },
  toProto(message: MsgDefendMemberReportResponse): Uint8Array {
    return MsgDefendMemberReportResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDefendMemberReportResponse): MsgDefendMemberReportResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgDefendMemberReportResponse",
      value: MsgDefendMemberReportResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAppealGovAction(): MsgAppealGovAction {
  return {
    creator: "",
    actionType: BigInt(0),
    actionTarget: "",
    appealReason: ""
  };
}
/**
 * MsgAppealGovAction defines the MsgAppealGovAction message.
 * @name MsgAppealGovAction
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAppealGovAction
 */
export const MsgAppealGovAction = {
  typeUrl: "/sparkdream.rep.v1.MsgAppealGovAction",
  aminoType: "sparkdream/x/rep/MsgAppealGovAction",
  encode(message: MsgAppealGovAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.actionType !== BigInt(0)) {
      writer.uint32(16).uint64(message.actionType);
    }
    if (message.actionTarget !== "") {
      writer.uint32(26).string(message.actionTarget);
    }
    if (message.appealReason !== "") {
      writer.uint32(34).string(message.appealReason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealGovAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealGovAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.actionType = reader.uint64();
          break;
        case 3:
          message.actionTarget = reader.string();
          break;
        case 4:
          message.appealReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAppealGovAction>): MsgAppealGovAction {
    const message = createBaseMsgAppealGovAction();
    message.creator = object.creator ?? "";
    message.actionType = object.actionType !== undefined && object.actionType !== null ? BigInt(object.actionType.toString()) : BigInt(0);
    message.actionTarget = object.actionTarget ?? "";
    message.appealReason = object.appealReason ?? "";
    return message;
  },
  fromAmino(object: MsgAppealGovActionAmino): MsgAppealGovAction {
    const message = createBaseMsgAppealGovAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.action_type !== undefined && object.action_type !== null) {
      message.actionType = BigInt(object.action_type);
    }
    if (object.action_target !== undefined && object.action_target !== null) {
      message.actionTarget = object.action_target;
    }
    if (object.appeal_reason !== undefined && object.appeal_reason !== null) {
      message.appealReason = object.appeal_reason;
    }
    return message;
  },
  toAmino(message: MsgAppealGovAction): MsgAppealGovActionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.action_type = message.actionType !== BigInt(0) ? message.actionType?.toString() : undefined;
    obj.action_target = message.actionTarget === "" ? undefined : message.actionTarget;
    obj.appeal_reason = message.appealReason === "" ? undefined : message.appealReason;
    return obj;
  },
  fromAminoMsg(object: MsgAppealGovActionAminoMsg): MsgAppealGovAction {
    return MsgAppealGovAction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAppealGovAction): MsgAppealGovActionAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgAppealGovAction",
      value: MsgAppealGovAction.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAppealGovActionProtoMsg): MsgAppealGovAction {
    return MsgAppealGovAction.decode(message.value);
  },
  toProto(message: MsgAppealGovAction): Uint8Array {
    return MsgAppealGovAction.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealGovAction): MsgAppealGovActionProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAppealGovAction",
      value: MsgAppealGovAction.encode(message).finish()
    };
  }
};
function createBaseMsgAppealGovActionResponse(): MsgAppealGovActionResponse {
  return {};
}
/**
 * MsgAppealGovActionResponse defines the MsgAppealGovActionResponse message.
 * @name MsgAppealGovActionResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgAppealGovActionResponse
 */
export const MsgAppealGovActionResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgAppealGovActionResponse",
  encode(_: MsgAppealGovActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealGovActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealGovActionResponse();
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
  fromPartial(_: DeepPartial<MsgAppealGovActionResponse>): MsgAppealGovActionResponse {
    const message = createBaseMsgAppealGovActionResponse();
    return message;
  },
  fromAmino(_: MsgAppealGovActionResponseAmino): MsgAppealGovActionResponse {
    const message = createBaseMsgAppealGovActionResponse();
    return message;
  },
  toAmino(_: MsgAppealGovActionResponse): MsgAppealGovActionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAppealGovActionResponseAminoMsg): MsgAppealGovActionResponse {
    return MsgAppealGovActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAppealGovActionResponseProtoMsg): MsgAppealGovActionResponse {
    return MsgAppealGovActionResponse.decode(message.value);
  },
  toProto(message: MsgAppealGovActionResponse): Uint8Array {
    return MsgAppealGovActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealGovActionResponse): MsgAppealGovActionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgAppealGovActionResponse",
      value: MsgAppealGovActionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResolveGovActionAppeal(): MsgResolveGovActionAppeal {
  return {
    resolver: "",
    appealId: BigInt(0),
    verdict: 0,
    reason: ""
  };
}
/**
 * MsgResolveGovActionAppeal resolves a pending appeal via council authority.
 * Only the Operations Committee of the commons council may resolve appeals.
 * The verdict must be UPHELD or OVERTURNED; TIMEOUT is EndBlocker-only and
 * UNSPECIFIED is rejected.
 * @name MsgResolveGovActionAppeal
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveGovActionAppeal
 */
export const MsgResolveGovActionAppeal = {
  typeUrl: "/sparkdream.rep.v1.MsgResolveGovActionAppeal",
  aminoType: "sparkdream/x/rep/MsgResolveGovActionAppeal",
  encode(message: MsgResolveGovActionAppeal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resolver !== "") {
      writer.uint32(10).string(message.resolver);
    }
    if (message.appealId !== BigInt(0)) {
      writer.uint32(16).uint64(message.appealId);
    }
    if (message.verdict !== 0) {
      writer.uint32(24).int32(message.verdict);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveGovActionAppeal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveGovActionAppeal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resolver = reader.string();
          break;
        case 2:
          message.appealId = reader.uint64();
          break;
        case 3:
          message.verdict = reader.int32() as any;
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgResolveGovActionAppeal>): MsgResolveGovActionAppeal {
    const message = createBaseMsgResolveGovActionAppeal();
    message.resolver = object.resolver ?? "";
    message.appealId = object.appealId !== undefined && object.appealId !== null ? BigInt(object.appealId.toString()) : BigInt(0);
    message.verdict = object.verdict ?? 0;
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgResolveGovActionAppealAmino): MsgResolveGovActionAppeal {
    const message = createBaseMsgResolveGovActionAppeal();
    if (object.resolver !== undefined && object.resolver !== null) {
      message.resolver = object.resolver;
    }
    if (object.appeal_id !== undefined && object.appeal_id !== null) {
      message.appealId = BigInt(object.appeal_id);
    }
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = object.verdict;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgResolveGovActionAppeal): MsgResolveGovActionAppealAmino {
    const obj: any = {};
    obj.resolver = message.resolver === "" ? undefined : message.resolver;
    obj.appeal_id = message.appealId !== BigInt(0) ? message.appealId?.toString() : undefined;
    obj.verdict = message.verdict === 0 ? undefined : message.verdict;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgResolveGovActionAppealAminoMsg): MsgResolveGovActionAppeal {
    return MsgResolveGovActionAppeal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResolveGovActionAppeal): MsgResolveGovActionAppealAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgResolveGovActionAppeal",
      value: MsgResolveGovActionAppeal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResolveGovActionAppealProtoMsg): MsgResolveGovActionAppeal {
    return MsgResolveGovActionAppeal.decode(message.value);
  },
  toProto(message: MsgResolveGovActionAppeal): Uint8Array {
    return MsgResolveGovActionAppeal.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveGovActionAppeal): MsgResolveGovActionAppealProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgResolveGovActionAppeal",
      value: MsgResolveGovActionAppeal.encode(message).finish()
    };
  }
};
function createBaseMsgResolveGovActionAppealResponse(): MsgResolveGovActionAppealResponse {
  return {};
}
/**
 * MsgResolveGovActionAppealResponse defines the response for
 * ResolveGovActionAppeal.
 * @name MsgResolveGovActionAppealResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveGovActionAppealResponse
 */
export const MsgResolveGovActionAppealResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgResolveGovActionAppealResponse",
  encode(_: MsgResolveGovActionAppealResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveGovActionAppealResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveGovActionAppealResponse();
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
  fromPartial(_: DeepPartial<MsgResolveGovActionAppealResponse>): MsgResolveGovActionAppealResponse {
    const message = createBaseMsgResolveGovActionAppealResponse();
    return message;
  },
  fromAmino(_: MsgResolveGovActionAppealResponseAmino): MsgResolveGovActionAppealResponse {
    const message = createBaseMsgResolveGovActionAppealResponse();
    return message;
  },
  toAmino(_: MsgResolveGovActionAppealResponse): MsgResolveGovActionAppealResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResolveGovActionAppealResponseAminoMsg): MsgResolveGovActionAppealResponse {
    return MsgResolveGovActionAppealResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveGovActionAppealResponseProtoMsg): MsgResolveGovActionAppealResponse {
    return MsgResolveGovActionAppealResponse.decode(message.value);
  },
  toProto(message: MsgResolveGovActionAppealResponse): Uint8Array {
    return MsgResolveGovActionAppealResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveGovActionAppealResponse): MsgResolveGovActionAppealResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgResolveGovActionAppealResponse",
      value: MsgResolveGovActionAppealResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelInitiative(): MsgCancelInitiative {
  return {
    creator: "",
    initiativeId: BigInt(0),
    reason: ""
  };
}
/**
 * MsgCancelInitiative retires an OPEN, unassigned initiative. Callable by the
 * parent project's creator or the Operations Committee.
 * @name MsgCancelInitiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelInitiative
 */
export const MsgCancelInitiative = {
  typeUrl: "/sparkdream.rep.v1.MsgCancelInitiative",
  aminoType: "sparkdream/x/rep/MsgCancelInitiative",
  encode(message: MsgCancelInitiative, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelInitiative {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelInitiative();
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
  fromPartial(object: DeepPartial<MsgCancelInitiative>): MsgCancelInitiative {
    const message = createBaseMsgCancelInitiative();
    message.creator = object.creator ?? "";
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgCancelInitiativeAmino): MsgCancelInitiative {
    const message = createBaseMsgCancelInitiative();
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
  toAmino(message: MsgCancelInitiative): MsgCancelInitiativeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgCancelInitiativeAminoMsg): MsgCancelInitiative {
    return MsgCancelInitiative.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelInitiative): MsgCancelInitiativeAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgCancelInitiative",
      value: MsgCancelInitiative.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelInitiativeProtoMsg): MsgCancelInitiative {
    return MsgCancelInitiative.decode(message.value);
  },
  toProto(message: MsgCancelInitiative): Uint8Array {
    return MsgCancelInitiative.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelInitiative): MsgCancelInitiativeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCancelInitiative",
      value: MsgCancelInitiative.encode(message).finish()
    };
  }
};
function createBaseMsgCancelInitiativeResponse(): MsgCancelInitiativeResponse {
  return {};
}
/**
 * MsgCancelInitiativeResponse defines the MsgCancelInitiativeResponse message.
 * @name MsgCancelInitiativeResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgCancelInitiativeResponse
 */
export const MsgCancelInitiativeResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgCancelInitiativeResponse",
  encode(_: MsgCancelInitiativeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelInitiativeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelInitiativeResponse();
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
  fromPartial(_: DeepPartial<MsgCancelInitiativeResponse>): MsgCancelInitiativeResponse {
    const message = createBaseMsgCancelInitiativeResponse();
    return message;
  },
  fromAmino(_: MsgCancelInitiativeResponseAmino): MsgCancelInitiativeResponse {
    const message = createBaseMsgCancelInitiativeResponse();
    return message;
  },
  toAmino(_: MsgCancelInitiativeResponse): MsgCancelInitiativeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelInitiativeResponseAminoMsg): MsgCancelInitiativeResponse {
    return MsgCancelInitiativeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelInitiativeResponseProtoMsg): MsgCancelInitiativeResponse {
    return MsgCancelInitiativeResponse.decode(message.value);
  },
  toProto(message: MsgCancelInitiativeResponse): Uint8Array {
    return MsgCancelInitiativeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelInitiativeResponse): MsgCancelInitiativeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgCancelInitiativeResponse",
      value: MsgCancelInitiativeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitInitiativeReview(): MsgSubmitInitiativeReview {
  return {
    reviewer: "",
    initiativeId: BigInt(0),
    approved: false,
    criteriaVotes: [],
    comments: ""
  };
}
/**
 * MsgSubmitInitiativeReview files one bonded reviewer's verdict on the current
 * review round of an initiative's submitted work.
 * 
 * Filing reserves bond scaled to the initiative's budget, so a reviewer can
 * only take on as much work as their bond covers and liability tracks what the
 * review could mint. The bond is released when the challenge window closes
 * unchallenged, and slashed when a jury overturns the verdict.
 * @name MsgSubmitInitiativeReview
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInitiativeReview
 */
export const MsgSubmitInitiativeReview = {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeReview",
  aminoType: "sparkdream/x/rep/MsgSubmitInitiativeReview",
  encode(message: MsgSubmitInitiativeReview, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reviewer !== "") {
      writer.uint32(10).string(message.reviewer);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.initiativeId);
    }
    if (message.approved === true) {
      writer.uint32(24).bool(message.approved);
    }
    for (const v of message.criteriaVotes) {
      CriteriaVote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(42).string(message.comments);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitInitiativeReview {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitInitiativeReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewer = reader.string();
          break;
        case 2:
          message.initiativeId = reader.uint64();
          break;
        case 3:
          message.approved = reader.bool();
          break;
        case 4:
          message.criteriaVotes.push(CriteriaVote.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<MsgSubmitInitiativeReview>): MsgSubmitInitiativeReview {
    const message = createBaseMsgSubmitInitiativeReview();
    message.reviewer = object.reviewer ?? "";
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.approved = object.approved ?? false;
    message.criteriaVotes = object.criteriaVotes?.map(e => CriteriaVote.fromPartial(e)) || [];
    message.comments = object.comments ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitInitiativeReviewAmino): MsgSubmitInitiativeReview {
    const message = createBaseMsgSubmitInitiativeReview();
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = object.reviewer;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.approved !== undefined && object.approved !== null) {
      message.approved = object.approved;
    }
    message.criteriaVotes = object.criteria_votes?.map(e => CriteriaVote.fromAmino(e)) || [];
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    }
    return message;
  },
  toAmino(message: MsgSubmitInitiativeReview): MsgSubmitInitiativeReviewAmino {
    const obj: any = {};
    obj.reviewer = message.reviewer === "" ? undefined : message.reviewer;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.approved = message.approved === false ? undefined : message.approved;
    if (message.criteriaVotes) {
      obj.criteria_votes = message.criteriaVotes.map(e => e ? CriteriaVote.toAmino(e) : undefined);
    } else {
      obj.criteria_votes = message.criteriaVotes;
    }
    obj.comments = message.comments === "" ? undefined : message.comments;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitInitiativeReviewAminoMsg): MsgSubmitInitiativeReview {
    return MsgSubmitInitiativeReview.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitInitiativeReview): MsgSubmitInitiativeReviewAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgSubmitInitiativeReview",
      value: MsgSubmitInitiativeReview.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitInitiativeReviewProtoMsg): MsgSubmitInitiativeReview {
    return MsgSubmitInitiativeReview.decode(message.value);
  },
  toProto(message: MsgSubmitInitiativeReview): Uint8Array {
    return MsgSubmitInitiativeReview.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitInitiativeReview): MsgSubmitInitiativeReviewProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeReview",
      value: MsgSubmitInitiativeReview.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitInitiativeReviewResponse(): MsgSubmitInitiativeReviewResponse {
  return {};
}
/**
 * MsgSubmitInitiativeReviewResponse defines the MsgSubmitInitiativeReview response.
 * @name MsgSubmitInitiativeReviewResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSubmitInitiativeReviewResponse
 */
export const MsgSubmitInitiativeReviewResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeReviewResponse",
  encode(_: MsgSubmitInitiativeReviewResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitInitiativeReviewResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitInitiativeReviewResponse();
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
  fromPartial(_: DeepPartial<MsgSubmitInitiativeReviewResponse>): MsgSubmitInitiativeReviewResponse {
    const message = createBaseMsgSubmitInitiativeReviewResponse();
    return message;
  },
  fromAmino(_: MsgSubmitInitiativeReviewResponseAmino): MsgSubmitInitiativeReviewResponse {
    const message = createBaseMsgSubmitInitiativeReviewResponse();
    return message;
  },
  toAmino(_: MsgSubmitInitiativeReviewResponse): MsgSubmitInitiativeReviewResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitInitiativeReviewResponseAminoMsg): MsgSubmitInitiativeReviewResponse {
    return MsgSubmitInitiativeReviewResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitInitiativeReviewResponseProtoMsg): MsgSubmitInitiativeReviewResponse {
    return MsgSubmitInitiativeReviewResponse.decode(message.value);
  },
  toProto(message: MsgSubmitInitiativeReviewResponse): Uint8Array {
    return MsgSubmitInitiativeReviewResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitInitiativeReviewResponse): MsgSubmitInitiativeReviewResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgSubmitInitiativeReviewResponse",
      value: MsgSubmitInitiativeReviewResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetVerificationPolicy(): MsgSetVerificationPolicy {
  return {
    creator: "",
    projectId: BigInt(0),
    policy: VerificationPolicy.fromPartial({})
  };
}
/**
 * MsgSetVerificationPolicy sets how a project's initiatives are reviewed.
 * 
 * Authority is the project's creator or the Operations Committee, and it is
 * settable while the project is ACTIVE rather than fixed at creation: the
 * reviewer roster grows over time, so a project needs to be able to turn review
 * on once reviewers exist. The review and challenge windows in the policy are
 * clamped to max(global, project) — a project may be more conservative than the
 * chain default, never less.
 * @name MsgSetVerificationPolicy
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSetVerificationPolicy
 */
export const MsgSetVerificationPolicy = {
  typeUrl: "/sparkdream.rep.v1.MsgSetVerificationPolicy",
  aminoType: "sparkdream/x/rep/MsgSetVerificationPolicy",
  encode(message: MsgSetVerificationPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(message.projectId);
    }
    if (message.policy !== undefined) {
      VerificationPolicy.encode(message.policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetVerificationPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVerificationPolicy();
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
          message.policy = VerificationPolicy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetVerificationPolicy>): MsgSetVerificationPolicy {
    const message = createBaseMsgSetVerificationPolicy();
    message.creator = object.creator ?? "";
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt(0);
    message.policy = object.policy !== undefined && object.policy !== null ? VerificationPolicy.fromPartial(object.policy) : undefined;
    return message;
  },
  fromAmino(object: MsgSetVerificationPolicyAmino): MsgSetVerificationPolicy {
    const message = createBaseMsgSetVerificationPolicy();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = BigInt(object.project_id);
    }
    if (object.policy !== undefined && object.policy !== null) {
      message.policy = VerificationPolicy.fromAmino(object.policy);
    }
    return message;
  },
  toAmino(message: MsgSetVerificationPolicy): MsgSetVerificationPolicyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.project_id = message.projectId !== BigInt(0) ? message.projectId?.toString() : undefined;
    obj.policy = message.policy ? VerificationPolicy.toAmino(message.policy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetVerificationPolicyAminoMsg): MsgSetVerificationPolicy {
    return MsgSetVerificationPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetVerificationPolicy): MsgSetVerificationPolicyAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgSetVerificationPolicy",
      value: MsgSetVerificationPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetVerificationPolicyProtoMsg): MsgSetVerificationPolicy {
    return MsgSetVerificationPolicy.decode(message.value);
  },
  toProto(message: MsgSetVerificationPolicy): Uint8Array {
    return MsgSetVerificationPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgSetVerificationPolicy): MsgSetVerificationPolicyProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgSetVerificationPolicy",
      value: MsgSetVerificationPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgSetVerificationPolicyResponse(): MsgSetVerificationPolicyResponse {
  return {};
}
/**
 * MsgSetVerificationPolicyResponse defines the MsgSetVerificationPolicy response.
 * @name MsgSetVerificationPolicyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgSetVerificationPolicyResponse
 */
export const MsgSetVerificationPolicyResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgSetVerificationPolicyResponse",
  encode(_: MsgSetVerificationPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetVerificationPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVerificationPolicyResponse();
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
  fromPartial(_: DeepPartial<MsgSetVerificationPolicyResponse>): MsgSetVerificationPolicyResponse {
    const message = createBaseMsgSetVerificationPolicyResponse();
    return message;
  },
  fromAmino(_: MsgSetVerificationPolicyResponseAmino): MsgSetVerificationPolicyResponse {
    const message = createBaseMsgSetVerificationPolicyResponse();
    return message;
  },
  toAmino(_: MsgSetVerificationPolicyResponse): MsgSetVerificationPolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetVerificationPolicyResponseAminoMsg): MsgSetVerificationPolicyResponse {
    return MsgSetVerificationPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetVerificationPolicyResponseProtoMsg): MsgSetVerificationPolicyResponse {
    return MsgSetVerificationPolicyResponse.decode(message.value);
  },
  toProto(message: MsgSetVerificationPolicyResponse): Uint8Array {
    return MsgSetVerificationPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetVerificationPolicyResponse): MsgSetVerificationPolicyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgSetVerificationPolicyResponse",
      value: MsgSetVerificationPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResolveReviewEscalation(): MsgResolveReviewEscalation {
  return {
    creator: "",
    initiativeId: BigInt(0),
    resolution: 0,
    reason: ""
  };
}
/**
 * MsgResolveReviewEscalation settles a review round that hit its deadline
 * without meeting the reviewer gate.
 * 
 * Operations Committee only. The three resolutions are approve (satisfy the
 * gate), reject (send the work back for another round), and pass (decline to
 * substitute judgement and let conviction and the challenge window decide).
 * All three still run the challenge window — committee approval satisfies the
 * reviewer requirement and nothing else.
 * @name MsgResolveReviewEscalation
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveReviewEscalation
 */
export const MsgResolveReviewEscalation = {
  typeUrl: "/sparkdream.rep.v1.MsgResolveReviewEscalation",
  aminoType: "sparkdream/x/rep/MsgResolveReviewEscalation",
  encode(message: MsgResolveReviewEscalation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.initiativeId);
    }
    if (message.resolution !== 0) {
      writer.uint32(24).int32(message.resolution);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveReviewEscalation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveReviewEscalation();
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
          message.resolution = reader.int32() as any;
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgResolveReviewEscalation>): MsgResolveReviewEscalation {
    const message = createBaseMsgResolveReviewEscalation();
    message.creator = object.creator ?? "";
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.resolution = object.resolution ?? 0;
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgResolveReviewEscalationAmino): MsgResolveReviewEscalation {
    const message = createBaseMsgResolveReviewEscalation();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.resolution !== undefined && object.resolution !== null) {
      message.resolution = object.resolution;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgResolveReviewEscalation): MsgResolveReviewEscalationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.resolution = message.resolution === 0 ? undefined : message.resolution;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgResolveReviewEscalationAminoMsg): MsgResolveReviewEscalation {
    return MsgResolveReviewEscalation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResolveReviewEscalation): MsgResolveReviewEscalationAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgResolveReviewEscalation",
      value: MsgResolveReviewEscalation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResolveReviewEscalationProtoMsg): MsgResolveReviewEscalation {
    return MsgResolveReviewEscalation.decode(message.value);
  },
  toProto(message: MsgResolveReviewEscalation): Uint8Array {
    return MsgResolveReviewEscalation.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveReviewEscalation): MsgResolveReviewEscalationProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgResolveReviewEscalation",
      value: MsgResolveReviewEscalation.encode(message).finish()
    };
  }
};
function createBaseMsgResolveReviewEscalationResponse(): MsgResolveReviewEscalationResponse {
  return {};
}
/**
 * MsgResolveReviewEscalationResponse defines the MsgResolveReviewEscalation response.
 * @name MsgResolveReviewEscalationResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgResolveReviewEscalationResponse
 */
export const MsgResolveReviewEscalationResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgResolveReviewEscalationResponse",
  encode(_: MsgResolveReviewEscalationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveReviewEscalationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveReviewEscalationResponse();
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
  fromPartial(_: DeepPartial<MsgResolveReviewEscalationResponse>): MsgResolveReviewEscalationResponse {
    const message = createBaseMsgResolveReviewEscalationResponse();
    return message;
  },
  fromAmino(_: MsgResolveReviewEscalationResponseAmino): MsgResolveReviewEscalationResponse {
    const message = createBaseMsgResolveReviewEscalationResponse();
    return message;
  },
  toAmino(_: MsgResolveReviewEscalationResponse): MsgResolveReviewEscalationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResolveReviewEscalationResponseAminoMsg): MsgResolveReviewEscalationResponse {
    return MsgResolveReviewEscalationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveReviewEscalationResponseProtoMsg): MsgResolveReviewEscalationResponse {
    return MsgResolveReviewEscalationResponse.decode(message.value);
  },
  toProto(message: MsgResolveReviewEscalationResponse): Uint8Array {
    return MsgResolveReviewEscalationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveReviewEscalationResponse): MsgResolveReviewEscalationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgResolveReviewEscalationResponse",
      value: MsgResolveReviewEscalationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFundReviewBounty(): MsgFundReviewBounty {
  return {
    funder: "",
    initiativeId: BigInt(0),
    amount: ""
  };
}
/**
 * MsgFundReviewBounty escrows DREAM against an initiative so reviewers have a
 * reason to look at that one rather than any other.
 * 
 * Anyone may fund, and contributions are additive: the creator who wants their
 * work cleared, a staker protecting conviction already committed, or a third
 * party who simply wants the thing checked. Restricting it to the creator would
 * make the amount a statement about one person's budget rather than about how
 * much the work matters.
 * @name MsgFundReviewBounty
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgFundReviewBounty
 */
export const MsgFundReviewBounty = {
  typeUrl: "/sparkdream.rep.v1.MsgFundReviewBounty",
  aminoType: "sparkdream/x/rep/MsgFundReviewBounty",
  encode(message: MsgFundReviewBounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.funder !== "") {
      writer.uint32(10).string(message.funder);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.initiativeId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundReviewBounty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundReviewBounty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funder = reader.string();
          break;
        case 2:
          message.initiativeId = reader.uint64();
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
  fromPartial(object: DeepPartial<MsgFundReviewBounty>): MsgFundReviewBounty {
    const message = createBaseMsgFundReviewBounty();
    message.funder = object.funder ?? "";
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgFundReviewBountyAmino): MsgFundReviewBounty {
    const message = createBaseMsgFundReviewBounty();
    if (object.funder !== undefined && object.funder !== null) {
      message.funder = object.funder;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgFundReviewBounty): MsgFundReviewBountyAmino {
    const obj: any = {};
    obj.funder = message.funder === "" ? undefined : message.funder;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgFundReviewBountyAminoMsg): MsgFundReviewBounty {
    return MsgFundReviewBounty.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFundReviewBounty): MsgFundReviewBountyAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgFundReviewBounty",
      value: MsgFundReviewBounty.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFundReviewBountyProtoMsg): MsgFundReviewBounty {
    return MsgFundReviewBounty.decode(message.value);
  },
  toProto(message: MsgFundReviewBounty): Uint8Array {
    return MsgFundReviewBounty.encode(message).finish();
  },
  toProtoMsg(message: MsgFundReviewBounty): MsgFundReviewBountyProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgFundReviewBounty",
      value: MsgFundReviewBounty.encode(message).finish()
    };
  }
};
function createBaseMsgFundReviewBountyResponse(): MsgFundReviewBountyResponse {
  return {
    total: ""
  };
}
/**
 * MsgFundReviewBountyResponse defines the MsgFundReviewBounty response.
 * @name MsgFundReviewBountyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgFundReviewBountyResponse
 */
export const MsgFundReviewBountyResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgFundReviewBountyResponse",
  encode(message: MsgFundReviewBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== "") {
      writer.uint32(10).string(message.total);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundReviewBountyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundReviewBountyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFundReviewBountyResponse>): MsgFundReviewBountyResponse {
    const message = createBaseMsgFundReviewBountyResponse();
    message.total = object.total ?? "";
    return message;
  },
  fromAmino(object: MsgFundReviewBountyResponseAmino): MsgFundReviewBountyResponse {
    const message = createBaseMsgFundReviewBountyResponse();
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    return message;
  },
  toAmino(message: MsgFundReviewBountyResponse): MsgFundReviewBountyResponseAmino {
    const obj: any = {};
    obj.total = message.total === "" ? undefined : message.total;
    return obj;
  },
  fromAminoMsg(object: MsgFundReviewBountyResponseAminoMsg): MsgFundReviewBountyResponse {
    return MsgFundReviewBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundReviewBountyResponseProtoMsg): MsgFundReviewBountyResponse {
    return MsgFundReviewBountyResponse.decode(message.value);
  },
  toProto(message: MsgFundReviewBountyResponse): Uint8Array {
    return MsgFundReviewBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundReviewBountyResponse): MsgFundReviewBountyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgFundReviewBountyResponse",
      value: MsgFundReviewBountyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReclaimReviewBounty(): MsgReclaimReviewBounty {
  return {
    funder: "",
    initiativeId: BigInt(0)
  };
}
/**
 * MsgReclaimReviewBounty returns a funder's own unpaid contribution.
 * 
 * Permitted only after review_bounty_reclaim_delay blocks and only while NO
 * verdict has been filed against the initiative. The delay stops a funder
 * advertising a bounty and yanking it in the same breath; the verdict bar stops
 * them yanking it once reviewers have committed bond on the strength of it.
 * @name MsgReclaimReviewBounty
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReclaimReviewBounty
 */
export const MsgReclaimReviewBounty = {
  typeUrl: "/sparkdream.rep.v1.MsgReclaimReviewBounty",
  aminoType: "sparkdream/x/rep/MsgReclaimReviewBounty",
  encode(message: MsgReclaimReviewBounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.funder !== "") {
      writer.uint32(10).string(message.funder);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.initiativeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReclaimReviewBounty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReclaimReviewBounty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funder = reader.string();
          break;
        case 2:
          message.initiativeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReclaimReviewBounty>): MsgReclaimReviewBounty {
    const message = createBaseMsgReclaimReviewBounty();
    message.funder = object.funder ?? "";
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgReclaimReviewBountyAmino): MsgReclaimReviewBounty {
    const message = createBaseMsgReclaimReviewBounty();
    if (object.funder !== undefined && object.funder !== null) {
      message.funder = object.funder;
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    return message;
  },
  toAmino(message: MsgReclaimReviewBounty): MsgReclaimReviewBountyAmino {
    const obj: any = {};
    obj.funder = message.funder === "" ? undefined : message.funder;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgReclaimReviewBountyAminoMsg): MsgReclaimReviewBounty {
    return MsgReclaimReviewBounty.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReclaimReviewBounty): MsgReclaimReviewBountyAminoMsg {
    return {
      type: "sparkdream/x/rep/MsgReclaimReviewBounty",
      value: MsgReclaimReviewBounty.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgReclaimReviewBountyProtoMsg): MsgReclaimReviewBounty {
    return MsgReclaimReviewBounty.decode(message.value);
  },
  toProto(message: MsgReclaimReviewBounty): Uint8Array {
    return MsgReclaimReviewBounty.encode(message).finish();
  },
  toProtoMsg(message: MsgReclaimReviewBounty): MsgReclaimReviewBountyProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgReclaimReviewBounty",
      value: MsgReclaimReviewBounty.encode(message).finish()
    };
  }
};
function createBaseMsgReclaimReviewBountyResponse(): MsgReclaimReviewBountyResponse {
  return {
    refunded: ""
  };
}
/**
 * MsgReclaimReviewBountyResponse defines the MsgReclaimReviewBounty response.
 * @name MsgReclaimReviewBountyResponse
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.MsgReclaimReviewBountyResponse
 */
export const MsgReclaimReviewBountyResponse = {
  typeUrl: "/sparkdream.rep.v1.MsgReclaimReviewBountyResponse",
  encode(message: MsgReclaimReviewBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.refunded !== "") {
      writer.uint32(10).string(message.refunded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReclaimReviewBountyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReclaimReviewBountyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refunded = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReclaimReviewBountyResponse>): MsgReclaimReviewBountyResponse {
    const message = createBaseMsgReclaimReviewBountyResponse();
    message.refunded = object.refunded ?? "";
    return message;
  },
  fromAmino(object: MsgReclaimReviewBountyResponseAmino): MsgReclaimReviewBountyResponse {
    const message = createBaseMsgReclaimReviewBountyResponse();
    if (object.refunded !== undefined && object.refunded !== null) {
      message.refunded = object.refunded;
    }
    return message;
  },
  toAmino(message: MsgReclaimReviewBountyResponse): MsgReclaimReviewBountyResponseAmino {
    const obj: any = {};
    obj.refunded = message.refunded === "" ? undefined : message.refunded;
    return obj;
  },
  fromAminoMsg(object: MsgReclaimReviewBountyResponseAminoMsg): MsgReclaimReviewBountyResponse {
    return MsgReclaimReviewBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReclaimReviewBountyResponseProtoMsg): MsgReclaimReviewBountyResponse {
    return MsgReclaimReviewBountyResponse.decode(message.value);
  },
  toProto(message: MsgReclaimReviewBountyResponse): Uint8Array {
    return MsgReclaimReviewBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReclaimReviewBountyResponse): MsgReclaimReviewBountyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.MsgReclaimReviewBountyResponse",
      value: MsgReclaimReviewBountyResponse.encode(message).finish()
    };
  }
};