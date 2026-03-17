//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { VoteOption } from "./group";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateParams
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
  typeUrl: "/sparkdream.commons.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateParams
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
  type: "sparkdream/x/commons/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgSpendFromCommons defines the MsgSpendFromCommons message.
 * @name MsgSpendFromCommons
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSpendFromCommons
 */
export interface MsgSpendFromCommons {
  authority: string;
  recipient: string;
  amount: Coin[];
}
export interface MsgSpendFromCommonsProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgSpendFromCommons";
  value: Uint8Array;
}
/**
 * MsgSpendFromCommons defines the MsgSpendFromCommons message.
 * @name MsgSpendFromCommonsAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSpendFromCommons
 */
export interface MsgSpendFromCommonsAmino {
  authority?: string;
  recipient?: string;
  amount?: CoinAmino[];
}
export interface MsgSpendFromCommonsAminoMsg {
  type: "sparkdream/x/commons/MsgSpendFromCommons";
  value: MsgSpendFromCommonsAmino;
}
/**
 * MsgSpendFromCommonsResponse defines the MsgSpendFromCommonsResponse message.
 * @name MsgSpendFromCommonsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSpendFromCommonsResponse
 */
export interface MsgSpendFromCommonsResponse {}
export interface MsgSpendFromCommonsResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgSpendFromCommonsResponse";
  value: Uint8Array;
}
/**
 * MsgSpendFromCommonsResponse defines the MsgSpendFromCommonsResponse message.
 * @name MsgSpendFromCommonsResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSpendFromCommonsResponse
 */
export interface MsgSpendFromCommonsResponseAmino {}
export interface MsgSpendFromCommonsResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgSpendFromCommonsResponse";
  value: MsgSpendFromCommonsResponseAmino;
}
/**
 * MsgEmergencyCancelGovProposal defines the MsgEmergencyCancelGovProposal message.
 * @name MsgEmergencyCancelGovProposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgEmergencyCancelGovProposal
 */
export interface MsgEmergencyCancelGovProposal {
  authority: string;
  proposalId: bigint;
}
export interface MsgEmergencyCancelGovProposalProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgEmergencyCancelGovProposal";
  value: Uint8Array;
}
/**
 * MsgEmergencyCancelGovProposal defines the MsgEmergencyCancelGovProposal message.
 * @name MsgEmergencyCancelGovProposalAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgEmergencyCancelGovProposal
 */
export interface MsgEmergencyCancelGovProposalAmino {
  authority?: string;
  proposal_id?: string;
}
export interface MsgEmergencyCancelGovProposalAminoMsg {
  type: "sparkdream/x/commons/MsgEmergencyCancelGovProposal";
  value: MsgEmergencyCancelGovProposalAmino;
}
/**
 * MsgEmergencyCancelGovProposalResponse defines the MsgEmergencyCancelGovProposalResponse message.
 * @name MsgEmergencyCancelGovProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgEmergencyCancelGovProposalResponse
 */
export interface MsgEmergencyCancelGovProposalResponse {}
export interface MsgEmergencyCancelGovProposalResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgEmergencyCancelGovProposalResponse";
  value: Uint8Array;
}
/**
 * MsgEmergencyCancelGovProposalResponse defines the MsgEmergencyCancelGovProposalResponse message.
 * @name MsgEmergencyCancelGovProposalResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgEmergencyCancelGovProposalResponse
 */
export interface MsgEmergencyCancelGovProposalResponseAmino {}
export interface MsgEmergencyCancelGovProposalResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgEmergencyCancelGovProposalResponse";
  value: MsgEmergencyCancelGovProposalResponseAmino;
}
/**
 * MsgCreatePolicyPermissions defines the MsgCreatePolicyPermissions message.
 * @name MsgCreatePolicyPermissions
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgCreatePolicyPermissions
 */
export interface MsgCreatePolicyPermissions {
  authority: string;
  policyAddress: string;
  allowedMessages: string[];
}
export interface MsgCreatePolicyPermissionsProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgCreatePolicyPermissions";
  value: Uint8Array;
}
/**
 * MsgCreatePolicyPermissions defines the MsgCreatePolicyPermissions message.
 * @name MsgCreatePolicyPermissionsAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgCreatePolicyPermissions
 */
export interface MsgCreatePolicyPermissionsAmino {
  authority?: string;
  policy_address?: string;
  allowed_messages?: string[];
}
export interface MsgCreatePolicyPermissionsAminoMsg {
  type: "/sparkdream.commons.v1.MsgCreatePolicyPermissions";
  value: MsgCreatePolicyPermissionsAmino;
}
/**
 * MsgCreatePolicyPermissionsResponse defines the MsgCreatePolicyPermissionsResponse message.
 * @name MsgCreatePolicyPermissionsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgCreatePolicyPermissionsResponse
 */
export interface MsgCreatePolicyPermissionsResponse {}
export interface MsgCreatePolicyPermissionsResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgCreatePolicyPermissionsResponse";
  value: Uint8Array;
}
/**
 * MsgCreatePolicyPermissionsResponse defines the MsgCreatePolicyPermissionsResponse message.
 * @name MsgCreatePolicyPermissionsResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgCreatePolicyPermissionsResponse
 */
export interface MsgCreatePolicyPermissionsResponseAmino {}
export interface MsgCreatePolicyPermissionsResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgCreatePolicyPermissionsResponse";
  value: MsgCreatePolicyPermissionsResponseAmino;
}
/**
 * MsgUpdatePolicyPermissions defines the MsgUpdatePolicyPermissions message.
 * @name MsgUpdatePolicyPermissions
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdatePolicyPermissions
 */
export interface MsgUpdatePolicyPermissions {
  authority: string;
  policyAddress: string;
  allowedMessages: string[];
}
export interface MsgUpdatePolicyPermissionsProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgUpdatePolicyPermissions";
  value: Uint8Array;
}
/**
 * MsgUpdatePolicyPermissions defines the MsgUpdatePolicyPermissions message.
 * @name MsgUpdatePolicyPermissionsAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdatePolicyPermissions
 */
export interface MsgUpdatePolicyPermissionsAmino {
  authority?: string;
  policy_address?: string;
  allowed_messages?: string[];
}
export interface MsgUpdatePolicyPermissionsAminoMsg {
  type: "/sparkdream.commons.v1.MsgUpdatePolicyPermissions";
  value: MsgUpdatePolicyPermissionsAmino;
}
/**
 * MsgUpdatePolicyPermissionsResponse defines the MsgUpdatePolicyPermissionsResponse message.
 * @name MsgUpdatePolicyPermissionsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdatePolicyPermissionsResponse
 */
export interface MsgUpdatePolicyPermissionsResponse {}
export interface MsgUpdatePolicyPermissionsResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgUpdatePolicyPermissionsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdatePolicyPermissionsResponse defines the MsgUpdatePolicyPermissionsResponse message.
 * @name MsgUpdatePolicyPermissionsResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdatePolicyPermissionsResponse
 */
export interface MsgUpdatePolicyPermissionsResponseAmino {}
export interface MsgUpdatePolicyPermissionsResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgUpdatePolicyPermissionsResponse";
  value: MsgUpdatePolicyPermissionsResponseAmino;
}
/**
 * MsgDeletePolicyPermissions defines the MsgDeletePolicyPermissions message.
 * @name MsgDeletePolicyPermissions
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgDeletePolicyPermissions
 */
export interface MsgDeletePolicyPermissions {
  authority: string;
  policyAddress: string;
}
export interface MsgDeletePolicyPermissionsProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgDeletePolicyPermissions";
  value: Uint8Array;
}
/**
 * MsgDeletePolicyPermissions defines the MsgDeletePolicyPermissions message.
 * @name MsgDeletePolicyPermissionsAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgDeletePolicyPermissions
 */
export interface MsgDeletePolicyPermissionsAmino {
  authority?: string;
  policy_address?: string;
}
export interface MsgDeletePolicyPermissionsAminoMsg {
  type: "/sparkdream.commons.v1.MsgDeletePolicyPermissions";
  value: MsgDeletePolicyPermissionsAmino;
}
/**
 * MsgDeletePolicyPermissionsResponse defines the MsgDeletePolicyPermissionsResponse message.
 * @name MsgDeletePolicyPermissionsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgDeletePolicyPermissionsResponse
 */
export interface MsgDeletePolicyPermissionsResponse {}
export interface MsgDeletePolicyPermissionsResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgDeletePolicyPermissionsResponse";
  value: Uint8Array;
}
/**
 * MsgDeletePolicyPermissionsResponse defines the MsgDeletePolicyPermissionsResponse message.
 * @name MsgDeletePolicyPermissionsResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgDeletePolicyPermissionsResponse
 */
export interface MsgDeletePolicyPermissionsResponseAmino {}
export interface MsgDeletePolicyPermissionsResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgDeletePolicyPermissionsResponse";
  value: MsgDeletePolicyPermissionsResponseAmino;
}
/**
 * MsgRegisterGroup defines the MsgRegisterGroup message.
 * @name MsgRegisterGroup
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgRegisterGroup
 */
export interface MsgRegisterGroup {
  authority: string;
  name: string;
  description: string;
  members: string[];
  memberWeights: string[];
  fundingWeight: bigint;
  maxSpendPerEpoch: string;
  updateCooldown: bigint;
  intendedParentAddress: string;
  minMembers: bigint;
  maxMembers: bigint;
  termDuration: bigint;
  activationTime: bigint;
  votingPeriod: bigint;
  minExecutionPeriod: bigint;
  futarchyEnabled: boolean;
  voteThreshold: string;
  policyType: string;
  allowedMessages: string[];
  electoralPolicyAddress: string;
}
export interface MsgRegisterGroupProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgRegisterGroup";
  value: Uint8Array;
}
/**
 * MsgRegisterGroup defines the MsgRegisterGroup message.
 * @name MsgRegisterGroupAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgRegisterGroup
 */
export interface MsgRegisterGroupAmino {
  authority?: string;
  name?: string;
  description?: string;
  members?: string[];
  member_weights?: string[];
  funding_weight?: string;
  max_spend_per_epoch?: string;
  update_cooldown?: string;
  intended_parent_address?: string;
  min_members?: string;
  max_members?: string;
  term_duration?: string;
  activation_time?: string;
  voting_period?: string;
  min_execution_period?: string;
  futarchy_enabled?: boolean;
  vote_threshold?: string;
  policy_type?: string;
  allowed_messages?: string[];
  electoral_policy_address?: string;
}
export interface MsgRegisterGroupAminoMsg {
  type: "/sparkdream.commons.v1.MsgRegisterGroup";
  value: MsgRegisterGroupAmino;
}
/**
 * MsgRegisterGroupResponse defines the MsgRegisterGroupResponse message.
 * @name MsgRegisterGroupResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgRegisterGroupResponse
 */
export interface MsgRegisterGroupResponse {}
export interface MsgRegisterGroupResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgRegisterGroupResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterGroupResponse defines the MsgRegisterGroupResponse message.
 * @name MsgRegisterGroupResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgRegisterGroupResponse
 */
export interface MsgRegisterGroupResponseAmino {}
export interface MsgRegisterGroupResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgRegisterGroupResponse";
  value: MsgRegisterGroupResponseAmino;
}
/**
 * MsgRenewGroup defines the MsgRenewGroup message.
 * @name MsgRenewGroup
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgRenewGroup
 */
export interface MsgRenewGroup {
  authority: string;
  groupName: string;
  newMembers: string[];
  newMemberWeights: string[];
}
export interface MsgRenewGroupProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgRenewGroup";
  value: Uint8Array;
}
/**
 * MsgRenewGroup defines the MsgRenewGroup message.
 * @name MsgRenewGroupAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgRenewGroup
 */
export interface MsgRenewGroupAmino {
  authority?: string;
  group_name?: string;
  new_members?: string[];
  new_member_weights?: string[];
}
export interface MsgRenewGroupAminoMsg {
  type: "/sparkdream.commons.v1.MsgRenewGroup";
  value: MsgRenewGroupAmino;
}
/**
 * MsgRenewGroupResponse defines the MsgRenewGroupResponse message.
 * @name MsgRenewGroupResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgRenewGroupResponse
 */
export interface MsgRenewGroupResponse {}
export interface MsgRenewGroupResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgRenewGroupResponse";
  value: Uint8Array;
}
/**
 * MsgRenewGroupResponse defines the MsgRenewGroupResponse message.
 * @name MsgRenewGroupResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgRenewGroupResponse
 */
export interface MsgRenewGroupResponseAmino {}
export interface MsgRenewGroupResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgRenewGroupResponse";
  value: MsgRenewGroupResponseAmino;
}
/**
 * MsgUpdateGroupConfig defines the MsgUpdateGroupConfig message.
 * @name MsgUpdateGroupConfig
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateGroupConfig
 */
export interface MsgUpdateGroupConfig {
  authority: string;
  groupName: string;
  maxSpendPerEpoch: string;
  updateCooldown: bigint;
  voteThreshold: string;
  futarchyEnabled?: BoolValue;
  minMembers: bigint;
  maxMembers: bigint;
  termDuration: bigint;
  policyType: string;
  votingPeriod: bigint;
  minExecutionPeriod: bigint;
  electoralPolicyAddress: string;
}
export interface MsgUpdateGroupConfigProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupConfig";
  value: Uint8Array;
}
/**
 * MsgUpdateGroupConfig defines the MsgUpdateGroupConfig message.
 * @name MsgUpdateGroupConfigAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateGroupConfig
 */
export interface MsgUpdateGroupConfigAmino {
  authority?: string;
  group_name?: string;
  max_spend_per_epoch?: string;
  update_cooldown?: string;
  vote_threshold?: string;
  futarchy_enabled?: BoolValueAmino;
  min_members?: string;
  max_members?: string;
  term_duration?: string;
  policy_type?: string;
  voting_period?: string;
  min_execution_period?: string;
  electoral_policy_address?: string;
}
export interface MsgUpdateGroupConfigAminoMsg {
  type: "/sparkdream.commons.v1.MsgUpdateGroupConfig";
  value: MsgUpdateGroupConfigAmino;
}
/**
 * MsgUpdateGroupConfigResponse defines the MsgUpdateGroupConfigResponse message.
 * @name MsgUpdateGroupConfigResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateGroupConfigResponse
 */
export interface MsgUpdateGroupConfigResponse {}
export interface MsgUpdateGroupConfigResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupConfigResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateGroupConfigResponse defines the MsgUpdateGroupConfigResponse message.
 * @name MsgUpdateGroupConfigResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateGroupConfigResponse
 */
export interface MsgUpdateGroupConfigResponseAmino {}
export interface MsgUpdateGroupConfigResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgUpdateGroupConfigResponse";
  value: MsgUpdateGroupConfigResponseAmino;
}
/**
 * MsgUpdateGroupMembers defines the MsgUpdateGroupMembers message.
 * @name MsgUpdateGroupMembers
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateGroupMembers
 */
export interface MsgUpdateGroupMembers {
  authority: string;
  groupPolicyAddress: string;
  membersToAdd: string[];
  weightsToAdd: string[];
  membersToRemove: string[];
}
export interface MsgUpdateGroupMembersProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupMembers";
  value: Uint8Array;
}
/**
 * MsgUpdateGroupMembers defines the MsgUpdateGroupMembers message.
 * @name MsgUpdateGroupMembersAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateGroupMembers
 */
export interface MsgUpdateGroupMembersAmino {
  authority?: string;
  group_policy_address?: string;
  members_to_add?: string[];
  weights_to_add?: string[];
  members_to_remove?: string[];
}
export interface MsgUpdateGroupMembersAminoMsg {
  type: "/sparkdream.commons.v1.MsgUpdateGroupMembers";
  value: MsgUpdateGroupMembersAmino;
}
/**
 * MsgUpdateGroupMembersResponse defines the MsgUpdateGroupMembersResponse message.
 * @name MsgUpdateGroupMembersResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateGroupMembersResponse
 */
export interface MsgUpdateGroupMembersResponse {}
export interface MsgUpdateGroupMembersResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupMembersResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateGroupMembersResponse defines the MsgUpdateGroupMembersResponse message.
 * @name MsgUpdateGroupMembersResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateGroupMembersResponse
 */
export interface MsgUpdateGroupMembersResponseAmino {}
export interface MsgUpdateGroupMembersResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgUpdateGroupMembersResponse";
  value: MsgUpdateGroupMembersResponseAmino;
}
/**
 * MsgForceUpgrade defines the MsgForceUpgrade message.
 * @name MsgForceUpgrade
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgForceUpgrade
 */
export interface MsgForceUpgrade {
  authority: string;
  plan: UpgradePlan;
}
export interface MsgForceUpgradeProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgForceUpgrade";
  value: Uint8Array;
}
/**
 * MsgForceUpgrade defines the MsgForceUpgrade message.
 * @name MsgForceUpgradeAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgForceUpgrade
 */
export interface MsgForceUpgradeAmino {
  authority?: string;
  plan?: UpgradePlanAmino;
}
export interface MsgForceUpgradeAminoMsg {
  type: "/sparkdream.commons.v1.MsgForceUpgrade";
  value: MsgForceUpgradeAmino;
}
/**
 * UpgradePlan is a local wrapper for cosmos.upgrade.v1beta1.Plan.
 * This prevents import cycle/path conflicts in generated Go code.
 * @name UpgradePlan
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.UpgradePlan
 */
export interface UpgradePlan {
  name: string;
  height: bigint;
  info: string;
}
export interface UpgradePlanProtoMsg {
  typeUrl: "/sparkdream.commons.v1.UpgradePlan";
  value: Uint8Array;
}
/**
 * UpgradePlan is a local wrapper for cosmos.upgrade.v1beta1.Plan.
 * This prevents import cycle/path conflicts in generated Go code.
 * @name UpgradePlanAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.UpgradePlan
 */
export interface UpgradePlanAmino {
  name?: string;
  height?: string;
  info?: string;
}
export interface UpgradePlanAminoMsg {
  type: "/sparkdream.commons.v1.UpgradePlan";
  value: UpgradePlanAmino;
}
/**
 * MsgForceUpgradeResponse defines the MsgForceUpgradeResponse message.
 * @name MsgForceUpgradeResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgForceUpgradeResponse
 */
export interface MsgForceUpgradeResponse {}
export interface MsgForceUpgradeResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgForceUpgradeResponse";
  value: Uint8Array;
}
/**
 * MsgForceUpgradeResponse defines the MsgForceUpgradeResponse message.
 * @name MsgForceUpgradeResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgForceUpgradeResponse
 */
export interface MsgForceUpgradeResponseAmino {}
export interface MsgForceUpgradeResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgForceUpgradeResponse";
  value: MsgForceUpgradeResponseAmino;
}
/**
 * BoolValue defines a wrapper around a bool field to support optionality.
 * @name BoolValue
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.BoolValue
 */
export interface BoolValue {
  value: boolean;
}
export interface BoolValueProtoMsg {
  typeUrl: "/sparkdream.commons.v1.BoolValue";
  value: Uint8Array;
}
/**
 * BoolValue defines a wrapper around a bool field to support optionality.
 * @name BoolValueAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.BoolValue
 */
export interface BoolValueAmino {
  value?: boolean;
}
export interface BoolValueAminoMsg {
  type: "/sparkdream.commons.v1.BoolValue";
  value: BoolValueAmino;
}
/**
 * MsgDeleteGroup defines the MsgDeleteGroup message.
 * @name MsgDeleteGroup
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgDeleteGroup
 */
export interface MsgDeleteGroup {
  authority: string;
  groupName: string;
}
export interface MsgDeleteGroupProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgDeleteGroup";
  value: Uint8Array;
}
/**
 * MsgDeleteGroup defines the MsgDeleteGroup message.
 * @name MsgDeleteGroupAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgDeleteGroup
 */
export interface MsgDeleteGroupAmino {
  authority?: string;
  group_name?: string;
}
export interface MsgDeleteGroupAminoMsg {
  type: "/sparkdream.commons.v1.MsgDeleteGroup";
  value: MsgDeleteGroupAmino;
}
/**
 * MsgDeleteGroupResponse defines the MsgDeleteGroupResponse message.
 * @name MsgDeleteGroupResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgDeleteGroupResponse
 */
export interface MsgDeleteGroupResponse {}
export interface MsgDeleteGroupResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgDeleteGroupResponse";
  value: Uint8Array;
}
/**
 * MsgDeleteGroupResponse defines the MsgDeleteGroupResponse message.
 * @name MsgDeleteGroupResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgDeleteGroupResponse
 */
export interface MsgDeleteGroupResponseAmino {}
export interface MsgDeleteGroupResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgDeleteGroupResponse";
  value: MsgDeleteGroupResponseAmino;
}
/**
 * MsgVetoGroupProposals defines the MsgVetoGroupProposals message.
 * @name MsgVetoGroupProposals
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgVetoGroupProposals
 */
export interface MsgVetoGroupProposals {
  authority: string;
  groupName: string;
}
export interface MsgVetoGroupProposalsProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgVetoGroupProposals";
  value: Uint8Array;
}
/**
 * MsgVetoGroupProposals defines the MsgVetoGroupProposals message.
 * @name MsgVetoGroupProposalsAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgVetoGroupProposals
 */
export interface MsgVetoGroupProposalsAmino {
  authority?: string;
  group_name?: string;
}
export interface MsgVetoGroupProposalsAminoMsg {
  type: "/sparkdream.commons.v1.MsgVetoGroupProposals";
  value: MsgVetoGroupProposalsAmino;
}
/**
 * MsgVetoGroupProposalsResponse defines the MsgVetoGroupProposalsResponse message.
 * @name MsgVetoGroupProposalsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgVetoGroupProposalsResponse
 */
export interface MsgVetoGroupProposalsResponse {}
export interface MsgVetoGroupProposalsResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgVetoGroupProposalsResponse";
  value: Uint8Array;
}
/**
 * MsgVetoGroupProposalsResponse defines the MsgVetoGroupProposalsResponse message.
 * @name MsgVetoGroupProposalsResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgVetoGroupProposalsResponse
 */
export interface MsgVetoGroupProposalsResponseAmino {}
export interface MsgVetoGroupProposalsResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgVetoGroupProposalsResponse";
  value: MsgVetoGroupProposalsResponseAmino;
}
/**
 * MsgSubmitProposal submits a new proposal to a council.
 * @name MsgSubmitProposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSubmitProposal
 */
export interface MsgSubmitProposal {
  /**
   * proposer is the address submitting the proposal (must be a council member)
   */
  proposer: string;
  /**
   * policy_address is the council policy address to submit the proposal to
   */
  policyAddress: string;
  /**
   * messages are the messages to execute if the proposal passes
   */
  messages: Any[];
  /**
   * metadata is optional metadata about the proposal
   */
  metadata: string;
}
export interface MsgSubmitProposalProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgSubmitProposal";
  value: Uint8Array;
}
/**
 * MsgSubmitProposal submits a new proposal to a council.
 * @name MsgSubmitProposalAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSubmitProposal
 */
export interface MsgSubmitProposalAmino {
  /**
   * proposer is the address submitting the proposal (must be a council member)
   */
  proposer?: string;
  /**
   * policy_address is the council policy address to submit the proposal to
   */
  policy_address?: string;
  /**
   * messages are the messages to execute if the proposal passes
   */
  messages?: AnyAmino[];
  /**
   * metadata is optional metadata about the proposal
   */
  metadata?: string;
}
export interface MsgSubmitProposalAminoMsg {
  type: "/sparkdream.commons.v1.MsgSubmitProposal";
  value: MsgSubmitProposalAmino;
}
/**
 * MsgSubmitProposalResponse defines the response for SubmitProposal.
 * @name MsgSubmitProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSubmitProposalResponse
 */
export interface MsgSubmitProposalResponse {
  proposalId: bigint;
}
export interface MsgSubmitProposalResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgSubmitProposalResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitProposalResponse defines the response for SubmitProposal.
 * @name MsgSubmitProposalResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSubmitProposalResponse
 */
export interface MsgSubmitProposalResponseAmino {
  proposal_id?: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgSubmitProposalResponse";
  value: MsgSubmitProposalResponseAmino;
}
/**
 * MsgVoteProposal casts a vote on a proposal.
 * @name MsgVoteProposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgVoteProposal
 */
export interface MsgVoteProposal {
  /**
   * voter is the address casting the vote (must be a council member)
   */
  voter: string;
  /**
   * proposal_id is the ID of the proposal to vote on
   */
  proposalId: bigint;
  /**
   * option is the vote option
   */
  option: VoteOption;
  /**
   * metadata is optional metadata about the vote
   */
  metadata: string;
}
export interface MsgVoteProposalProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgVoteProposal";
  value: Uint8Array;
}
/**
 * MsgVoteProposal casts a vote on a proposal.
 * @name MsgVoteProposalAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgVoteProposal
 */
export interface MsgVoteProposalAmino {
  /**
   * voter is the address casting the vote (must be a council member)
   */
  voter?: string;
  /**
   * proposal_id is the ID of the proposal to vote on
   */
  proposal_id?: string;
  /**
   * option is the vote option
   */
  option?: VoteOption;
  /**
   * metadata is optional metadata about the vote
   */
  metadata?: string;
}
export interface MsgVoteProposalAminoMsg {
  type: "/sparkdream.commons.v1.MsgVoteProposal";
  value: MsgVoteProposalAmino;
}
/**
 * MsgVoteProposalResponse defines the response for VoteProposal.
 * @name MsgVoteProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgVoteProposalResponse
 */
export interface MsgVoteProposalResponse {}
export interface MsgVoteProposalResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgVoteProposalResponse";
  value: Uint8Array;
}
/**
 * MsgVoteProposalResponse defines the response for VoteProposal.
 * @name MsgVoteProposalResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgVoteProposalResponse
 */
export interface MsgVoteProposalResponseAmino {}
export interface MsgVoteProposalResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgVoteProposalResponse";
  value: MsgVoteProposalResponseAmino;
}
/**
 * MsgExecuteProposal executes an accepted proposal.
 * @name MsgExecuteProposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgExecuteProposal
 */
export interface MsgExecuteProposal {
  /**
   * executor is the address executing the proposal (anyone can execute an accepted proposal)
   */
  executor: string;
  /**
   * proposal_id is the ID of the proposal to execute
   */
  proposalId: bigint;
}
export interface MsgExecuteProposalProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgExecuteProposal";
  value: Uint8Array;
}
/**
 * MsgExecuteProposal executes an accepted proposal.
 * @name MsgExecuteProposalAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgExecuteProposal
 */
export interface MsgExecuteProposalAmino {
  /**
   * executor is the address executing the proposal (anyone can execute an accepted proposal)
   */
  executor?: string;
  /**
   * proposal_id is the ID of the proposal to execute
   */
  proposal_id?: string;
}
export interface MsgExecuteProposalAminoMsg {
  type: "/sparkdream.commons.v1.MsgExecuteProposal";
  value: MsgExecuteProposalAmino;
}
/**
 * MsgExecuteProposalResponse defines the response for ExecuteProposal.
 * @name MsgExecuteProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgExecuteProposalResponse
 */
export interface MsgExecuteProposalResponse {}
export interface MsgExecuteProposalResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgExecuteProposalResponse";
  value: Uint8Array;
}
/**
 * MsgExecuteProposalResponse defines the response for ExecuteProposal.
 * @name MsgExecuteProposalResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgExecuteProposalResponse
 */
export interface MsgExecuteProposalResponseAmino {}
export interface MsgExecuteProposalResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgExecuteProposalResponse";
  value: MsgExecuteProposalResponseAmino;
}
/**
 * MsgSubmitAnonymousProposal creates a proposal through the x/shield module.
 * The proposer field must be the shield module account address, verified by
 * the shield's ZK proof and encrypted batch execution. This enables anonymous
 * governance proposals where the identity of the proposer is hidden.
 * @name MsgSubmitAnonymousProposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSubmitAnonymousProposal
 */
export interface MsgSubmitAnonymousProposal {
  /**
   * proposer must be the shield module account address
   */
  proposer: string;
  /**
   * policy_address is the council policy address to submit the proposal to
   */
  policyAddress: string;
  /**
   * messages are the messages to execute if the proposal passes
   */
  messages: Any[];
  /**
   * metadata is optional metadata about the proposal
   */
  metadata: string;
}
export interface MsgSubmitAnonymousProposalProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgSubmitAnonymousProposal";
  value: Uint8Array;
}
/**
 * MsgSubmitAnonymousProposal creates a proposal through the x/shield module.
 * The proposer field must be the shield module account address, verified by
 * the shield's ZK proof and encrypted batch execution. This enables anonymous
 * governance proposals where the identity of the proposer is hidden.
 * @name MsgSubmitAnonymousProposalAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSubmitAnonymousProposal
 */
export interface MsgSubmitAnonymousProposalAmino {
  /**
   * proposer must be the shield module account address
   */
  proposer?: string;
  /**
   * policy_address is the council policy address to submit the proposal to
   */
  policy_address?: string;
  /**
   * messages are the messages to execute if the proposal passes
   */
  messages?: AnyAmino[];
  /**
   * metadata is optional metadata about the proposal
   */
  metadata?: string;
}
export interface MsgSubmitAnonymousProposalAminoMsg {
  type: "sparkdream/x/commons/MsgSubmitAnonymousProposal";
  value: MsgSubmitAnonymousProposalAmino;
}
/**
 * MsgSubmitAnonymousProposalResponse defines the response for SubmitAnonymousProposal.
 * @name MsgSubmitAnonymousProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSubmitAnonymousProposalResponse
 */
export interface MsgSubmitAnonymousProposalResponse {
  proposalId: bigint;
}
export interface MsgSubmitAnonymousProposalResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgSubmitAnonymousProposalResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitAnonymousProposalResponse defines the response for SubmitAnonymousProposal.
 * @name MsgSubmitAnonymousProposalResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSubmitAnonymousProposalResponse
 */
export interface MsgSubmitAnonymousProposalResponseAmino {
  proposal_id?: string;
}
export interface MsgSubmitAnonymousProposalResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgSubmitAnonymousProposalResponse";
  value: MsgSubmitAnonymousProposalResponseAmino;
}
/**
 * MsgAnonymousVoteProposal casts an anonymous vote on a proposal through x/shield.
 * The voter field must be the shield module account address, verified by the shield's
 * ZK proof. Each anonymous vote has uniform weight=1. Anonymous votes are tallied
 * separately and combined with regular council votes for threshold checks.
 * @name MsgAnonymousVoteProposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgAnonymousVoteProposal
 */
export interface MsgAnonymousVoteProposal {
  /**
   * voter must be the shield module account address
   */
  voter: string;
  /**
   * proposal_id is the ID of the proposal to vote on
   */
  proposalId: bigint;
  /**
   * option is the vote option
   */
  option: VoteOption;
  /**
   * metadata is optional metadata about the vote
   */
  metadata: string;
}
export interface MsgAnonymousVoteProposalProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgAnonymousVoteProposal";
  value: Uint8Array;
}
/**
 * MsgAnonymousVoteProposal casts an anonymous vote on a proposal through x/shield.
 * The voter field must be the shield module account address, verified by the shield's
 * ZK proof. Each anonymous vote has uniform weight=1. Anonymous votes are tallied
 * separately and combined with regular council votes for threshold checks.
 * @name MsgAnonymousVoteProposalAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgAnonymousVoteProposal
 */
export interface MsgAnonymousVoteProposalAmino {
  /**
   * voter must be the shield module account address
   */
  voter?: string;
  /**
   * proposal_id is the ID of the proposal to vote on
   */
  proposal_id?: string;
  /**
   * option is the vote option
   */
  option?: VoteOption;
  /**
   * metadata is optional metadata about the vote
   */
  metadata?: string;
}
export interface MsgAnonymousVoteProposalAminoMsg {
  type: "sparkdream/x/commons/MsgAnonymousVoteProposal";
  value: MsgAnonymousVoteProposalAmino;
}
/**
 * MsgAnonymousVoteProposalResponse defines the response for AnonymousVoteProposal.
 * @name MsgAnonymousVoteProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgAnonymousVoteProposalResponse
 */
export interface MsgAnonymousVoteProposalResponse {}
export interface MsgAnonymousVoteProposalResponseProtoMsg {
  typeUrl: "/sparkdream.commons.v1.MsgAnonymousVoteProposalResponse";
  value: Uint8Array;
}
/**
 * MsgAnonymousVoteProposalResponse defines the response for AnonymousVoteProposal.
 * @name MsgAnonymousVoteProposalResponseAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgAnonymousVoteProposalResponse
 */
export interface MsgAnonymousVoteProposalResponseAmino {}
export interface MsgAnonymousVoteProposalResponseAminoMsg {
  type: "/sparkdream.commons.v1.MsgAnonymousVoteProposalResponse";
  value: MsgAnonymousVoteProposalResponseAmino;
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
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.commons.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/commons/MsgUpdateParams",
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
      type: "sparkdream/x/commons/MsgUpdateParams",
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
      typeUrl: "/sparkdream.commons.v1.MsgUpdateParams",
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
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/sparkdream.commons.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSpendFromCommons(): MsgSpendFromCommons {
  return {
    authority: "",
    recipient: "",
    amount: []
  };
}
/**
 * MsgSpendFromCommons defines the MsgSpendFromCommons message.
 * @name MsgSpendFromCommons
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSpendFromCommons
 */
export const MsgSpendFromCommons = {
  typeUrl: "/sparkdream.commons.v1.MsgSpendFromCommons",
  aminoType: "sparkdream/x/commons/MsgSpendFromCommons",
  encode(message: MsgSpendFromCommons, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSpendFromCommons {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSpendFromCommons();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSpendFromCommons>): MsgSpendFromCommons {
    const message = createBaseMsgSpendFromCommons();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSpendFromCommonsAmino): MsgSpendFromCommons {
    const message = createBaseMsgSpendFromCommons();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSpendFromCommons): MsgSpendFromCommonsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSpendFromCommonsAminoMsg): MsgSpendFromCommons {
    return MsgSpendFromCommons.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSpendFromCommons): MsgSpendFromCommonsAminoMsg {
    return {
      type: "sparkdream/x/commons/MsgSpendFromCommons",
      value: MsgSpendFromCommons.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSpendFromCommonsProtoMsg): MsgSpendFromCommons {
    return MsgSpendFromCommons.decode(message.value);
  },
  toProto(message: MsgSpendFromCommons): Uint8Array {
    return MsgSpendFromCommons.encode(message).finish();
  },
  toProtoMsg(message: MsgSpendFromCommons): MsgSpendFromCommonsProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgSpendFromCommons",
      value: MsgSpendFromCommons.encode(message).finish()
    };
  }
};
function createBaseMsgSpendFromCommonsResponse(): MsgSpendFromCommonsResponse {
  return {};
}
/**
 * MsgSpendFromCommonsResponse defines the MsgSpendFromCommonsResponse message.
 * @name MsgSpendFromCommonsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSpendFromCommonsResponse
 */
export const MsgSpendFromCommonsResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgSpendFromCommonsResponse",
  encode(_: MsgSpendFromCommonsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSpendFromCommonsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSpendFromCommonsResponse();
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
  fromPartial(_: DeepPartial<MsgSpendFromCommonsResponse>): MsgSpendFromCommonsResponse {
    const message = createBaseMsgSpendFromCommonsResponse();
    return message;
  },
  fromAmino(_: MsgSpendFromCommonsResponseAmino): MsgSpendFromCommonsResponse {
    const message = createBaseMsgSpendFromCommonsResponse();
    return message;
  },
  toAmino(_: MsgSpendFromCommonsResponse): MsgSpendFromCommonsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSpendFromCommonsResponseAminoMsg): MsgSpendFromCommonsResponse {
    return MsgSpendFromCommonsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSpendFromCommonsResponseProtoMsg): MsgSpendFromCommonsResponse {
    return MsgSpendFromCommonsResponse.decode(message.value);
  },
  toProto(message: MsgSpendFromCommonsResponse): Uint8Array {
    return MsgSpendFromCommonsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSpendFromCommonsResponse): MsgSpendFromCommonsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgSpendFromCommonsResponse",
      value: MsgSpendFromCommonsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEmergencyCancelGovProposal(): MsgEmergencyCancelGovProposal {
  return {
    authority: "",
    proposalId: BigInt(0)
  };
}
/**
 * MsgEmergencyCancelGovProposal defines the MsgEmergencyCancelGovProposal message.
 * @name MsgEmergencyCancelGovProposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgEmergencyCancelGovProposal
 */
export const MsgEmergencyCancelGovProposal = {
  typeUrl: "/sparkdream.commons.v1.MsgEmergencyCancelGovProposal",
  aminoType: "sparkdream/x/commons/MsgEmergencyCancelGovProposal",
  encode(message: MsgEmergencyCancelGovProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEmergencyCancelGovProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEmergencyCancelGovProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgEmergencyCancelGovProposal>): MsgEmergencyCancelGovProposal {
    const message = createBaseMsgEmergencyCancelGovProposal();
    message.authority = object.authority ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgEmergencyCancelGovProposalAmino): MsgEmergencyCancelGovProposal {
    const message = createBaseMsgEmergencyCancelGovProposal();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgEmergencyCancelGovProposal): MsgEmergencyCancelGovProposalAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEmergencyCancelGovProposalAminoMsg): MsgEmergencyCancelGovProposal {
    return MsgEmergencyCancelGovProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEmergencyCancelGovProposal): MsgEmergencyCancelGovProposalAminoMsg {
    return {
      type: "sparkdream/x/commons/MsgEmergencyCancelGovProposal",
      value: MsgEmergencyCancelGovProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEmergencyCancelGovProposalProtoMsg): MsgEmergencyCancelGovProposal {
    return MsgEmergencyCancelGovProposal.decode(message.value);
  },
  toProto(message: MsgEmergencyCancelGovProposal): Uint8Array {
    return MsgEmergencyCancelGovProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgEmergencyCancelGovProposal): MsgEmergencyCancelGovProposalProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgEmergencyCancelGovProposal",
      value: MsgEmergencyCancelGovProposal.encode(message).finish()
    };
  }
};
function createBaseMsgEmergencyCancelGovProposalResponse(): MsgEmergencyCancelGovProposalResponse {
  return {};
}
/**
 * MsgEmergencyCancelGovProposalResponse defines the MsgEmergencyCancelGovProposalResponse message.
 * @name MsgEmergencyCancelGovProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgEmergencyCancelGovProposalResponse
 */
export const MsgEmergencyCancelGovProposalResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgEmergencyCancelGovProposalResponse",
  encode(_: MsgEmergencyCancelGovProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEmergencyCancelGovProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEmergencyCancelGovProposalResponse();
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
  fromPartial(_: DeepPartial<MsgEmergencyCancelGovProposalResponse>): MsgEmergencyCancelGovProposalResponse {
    const message = createBaseMsgEmergencyCancelGovProposalResponse();
    return message;
  },
  fromAmino(_: MsgEmergencyCancelGovProposalResponseAmino): MsgEmergencyCancelGovProposalResponse {
    const message = createBaseMsgEmergencyCancelGovProposalResponse();
    return message;
  },
  toAmino(_: MsgEmergencyCancelGovProposalResponse): MsgEmergencyCancelGovProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEmergencyCancelGovProposalResponseAminoMsg): MsgEmergencyCancelGovProposalResponse {
    return MsgEmergencyCancelGovProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEmergencyCancelGovProposalResponseProtoMsg): MsgEmergencyCancelGovProposalResponse {
    return MsgEmergencyCancelGovProposalResponse.decode(message.value);
  },
  toProto(message: MsgEmergencyCancelGovProposalResponse): Uint8Array {
    return MsgEmergencyCancelGovProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEmergencyCancelGovProposalResponse): MsgEmergencyCancelGovProposalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgEmergencyCancelGovProposalResponse",
      value: MsgEmergencyCancelGovProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePolicyPermissions(): MsgCreatePolicyPermissions {
  return {
    authority: "",
    policyAddress: "",
    allowedMessages: []
  };
}
/**
 * MsgCreatePolicyPermissions defines the MsgCreatePolicyPermissions message.
 * @name MsgCreatePolicyPermissions
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgCreatePolicyPermissions
 */
export const MsgCreatePolicyPermissions = {
  typeUrl: "/sparkdream.commons.v1.MsgCreatePolicyPermissions",
  encode(message: MsgCreatePolicyPermissions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.policyAddress !== "") {
      writer.uint32(18).string(message.policyAddress);
    }
    for (const v of message.allowedMessages) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePolicyPermissions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePolicyPermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.policyAddress = reader.string();
          break;
        case 3:
          message.allowedMessages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreatePolicyPermissions>): MsgCreatePolicyPermissions {
    const message = createBaseMsgCreatePolicyPermissions();
    message.authority = object.authority ?? "";
    message.policyAddress = object.policyAddress ?? "";
    message.allowedMessages = object.allowedMessages?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgCreatePolicyPermissionsAmino): MsgCreatePolicyPermissions {
    const message = createBaseMsgCreatePolicyPermissions();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    message.allowedMessages = object.allowed_messages?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgCreatePolicyPermissions): MsgCreatePolicyPermissionsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    if (message.allowedMessages) {
      obj.allowed_messages = message.allowedMessages.map(e => e);
    } else {
      obj.allowed_messages = message.allowedMessages;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePolicyPermissionsAminoMsg): MsgCreatePolicyPermissions {
    return MsgCreatePolicyPermissions.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePolicyPermissionsProtoMsg): MsgCreatePolicyPermissions {
    return MsgCreatePolicyPermissions.decode(message.value);
  },
  toProto(message: MsgCreatePolicyPermissions): Uint8Array {
    return MsgCreatePolicyPermissions.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePolicyPermissions): MsgCreatePolicyPermissionsProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgCreatePolicyPermissions",
      value: MsgCreatePolicyPermissions.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePolicyPermissionsResponse(): MsgCreatePolicyPermissionsResponse {
  return {};
}
/**
 * MsgCreatePolicyPermissionsResponse defines the MsgCreatePolicyPermissionsResponse message.
 * @name MsgCreatePolicyPermissionsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgCreatePolicyPermissionsResponse
 */
export const MsgCreatePolicyPermissionsResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgCreatePolicyPermissionsResponse",
  encode(_: MsgCreatePolicyPermissionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePolicyPermissionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePolicyPermissionsResponse();
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
  fromPartial(_: DeepPartial<MsgCreatePolicyPermissionsResponse>): MsgCreatePolicyPermissionsResponse {
    const message = createBaseMsgCreatePolicyPermissionsResponse();
    return message;
  },
  fromAmino(_: MsgCreatePolicyPermissionsResponseAmino): MsgCreatePolicyPermissionsResponse {
    const message = createBaseMsgCreatePolicyPermissionsResponse();
    return message;
  },
  toAmino(_: MsgCreatePolicyPermissionsResponse): MsgCreatePolicyPermissionsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePolicyPermissionsResponseAminoMsg): MsgCreatePolicyPermissionsResponse {
    return MsgCreatePolicyPermissionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePolicyPermissionsResponseProtoMsg): MsgCreatePolicyPermissionsResponse {
    return MsgCreatePolicyPermissionsResponse.decode(message.value);
  },
  toProto(message: MsgCreatePolicyPermissionsResponse): Uint8Array {
    return MsgCreatePolicyPermissionsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePolicyPermissionsResponse): MsgCreatePolicyPermissionsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgCreatePolicyPermissionsResponse",
      value: MsgCreatePolicyPermissionsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePolicyPermissions(): MsgUpdatePolicyPermissions {
  return {
    authority: "",
    policyAddress: "",
    allowedMessages: []
  };
}
/**
 * MsgUpdatePolicyPermissions defines the MsgUpdatePolicyPermissions message.
 * @name MsgUpdatePolicyPermissions
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdatePolicyPermissions
 */
export const MsgUpdatePolicyPermissions = {
  typeUrl: "/sparkdream.commons.v1.MsgUpdatePolicyPermissions",
  encode(message: MsgUpdatePolicyPermissions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.policyAddress !== "") {
      writer.uint32(18).string(message.policyAddress);
    }
    for (const v of message.allowedMessages) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePolicyPermissions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePolicyPermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.policyAddress = reader.string();
          break;
        case 3:
          message.allowedMessages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdatePolicyPermissions>): MsgUpdatePolicyPermissions {
    const message = createBaseMsgUpdatePolicyPermissions();
    message.authority = object.authority ?? "";
    message.policyAddress = object.policyAddress ?? "";
    message.allowedMessages = object.allowedMessages?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUpdatePolicyPermissionsAmino): MsgUpdatePolicyPermissions {
    const message = createBaseMsgUpdatePolicyPermissions();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    message.allowedMessages = object.allowed_messages?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUpdatePolicyPermissions): MsgUpdatePolicyPermissionsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    if (message.allowedMessages) {
      obj.allowed_messages = message.allowedMessages.map(e => e);
    } else {
      obj.allowed_messages = message.allowedMessages;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePolicyPermissionsAminoMsg): MsgUpdatePolicyPermissions {
    return MsgUpdatePolicyPermissions.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePolicyPermissionsProtoMsg): MsgUpdatePolicyPermissions {
    return MsgUpdatePolicyPermissions.decode(message.value);
  },
  toProto(message: MsgUpdatePolicyPermissions): Uint8Array {
    return MsgUpdatePolicyPermissions.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePolicyPermissions): MsgUpdatePolicyPermissionsProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgUpdatePolicyPermissions",
      value: MsgUpdatePolicyPermissions.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePolicyPermissionsResponse(): MsgUpdatePolicyPermissionsResponse {
  return {};
}
/**
 * MsgUpdatePolicyPermissionsResponse defines the MsgUpdatePolicyPermissionsResponse message.
 * @name MsgUpdatePolicyPermissionsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdatePolicyPermissionsResponse
 */
export const MsgUpdatePolicyPermissionsResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgUpdatePolicyPermissionsResponse",
  encode(_: MsgUpdatePolicyPermissionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePolicyPermissionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePolicyPermissionsResponse();
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
  fromPartial(_: DeepPartial<MsgUpdatePolicyPermissionsResponse>): MsgUpdatePolicyPermissionsResponse {
    const message = createBaseMsgUpdatePolicyPermissionsResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePolicyPermissionsResponseAmino): MsgUpdatePolicyPermissionsResponse {
    const message = createBaseMsgUpdatePolicyPermissionsResponse();
    return message;
  },
  toAmino(_: MsgUpdatePolicyPermissionsResponse): MsgUpdatePolicyPermissionsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePolicyPermissionsResponseAminoMsg): MsgUpdatePolicyPermissionsResponse {
    return MsgUpdatePolicyPermissionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePolicyPermissionsResponseProtoMsg): MsgUpdatePolicyPermissionsResponse {
    return MsgUpdatePolicyPermissionsResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePolicyPermissionsResponse): Uint8Array {
    return MsgUpdatePolicyPermissionsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePolicyPermissionsResponse): MsgUpdatePolicyPermissionsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgUpdatePolicyPermissionsResponse",
      value: MsgUpdatePolicyPermissionsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePolicyPermissions(): MsgDeletePolicyPermissions {
  return {
    authority: "",
    policyAddress: ""
  };
}
/**
 * MsgDeletePolicyPermissions defines the MsgDeletePolicyPermissions message.
 * @name MsgDeletePolicyPermissions
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgDeletePolicyPermissions
 */
export const MsgDeletePolicyPermissions = {
  typeUrl: "/sparkdream.commons.v1.MsgDeletePolicyPermissions",
  encode(message: MsgDeletePolicyPermissions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.policyAddress !== "") {
      writer.uint32(18).string(message.policyAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeletePolicyPermissions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePolicyPermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.policyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeletePolicyPermissions>): MsgDeletePolicyPermissions {
    const message = createBaseMsgDeletePolicyPermissions();
    message.authority = object.authority ?? "";
    message.policyAddress = object.policyAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDeletePolicyPermissionsAmino): MsgDeletePolicyPermissions {
    const message = createBaseMsgDeletePolicyPermissions();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    return message;
  },
  toAmino(message: MsgDeletePolicyPermissions): MsgDeletePolicyPermissionsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDeletePolicyPermissionsAminoMsg): MsgDeletePolicyPermissions {
    return MsgDeletePolicyPermissions.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePolicyPermissionsProtoMsg): MsgDeletePolicyPermissions {
    return MsgDeletePolicyPermissions.decode(message.value);
  },
  toProto(message: MsgDeletePolicyPermissions): Uint8Array {
    return MsgDeletePolicyPermissions.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePolicyPermissions): MsgDeletePolicyPermissionsProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgDeletePolicyPermissions",
      value: MsgDeletePolicyPermissions.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePolicyPermissionsResponse(): MsgDeletePolicyPermissionsResponse {
  return {};
}
/**
 * MsgDeletePolicyPermissionsResponse defines the MsgDeletePolicyPermissionsResponse message.
 * @name MsgDeletePolicyPermissionsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgDeletePolicyPermissionsResponse
 */
export const MsgDeletePolicyPermissionsResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgDeletePolicyPermissionsResponse",
  encode(_: MsgDeletePolicyPermissionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeletePolicyPermissionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePolicyPermissionsResponse();
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
  fromPartial(_: DeepPartial<MsgDeletePolicyPermissionsResponse>): MsgDeletePolicyPermissionsResponse {
    const message = createBaseMsgDeletePolicyPermissionsResponse();
    return message;
  },
  fromAmino(_: MsgDeletePolicyPermissionsResponseAmino): MsgDeletePolicyPermissionsResponse {
    const message = createBaseMsgDeletePolicyPermissionsResponse();
    return message;
  },
  toAmino(_: MsgDeletePolicyPermissionsResponse): MsgDeletePolicyPermissionsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeletePolicyPermissionsResponseAminoMsg): MsgDeletePolicyPermissionsResponse {
    return MsgDeletePolicyPermissionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePolicyPermissionsResponseProtoMsg): MsgDeletePolicyPermissionsResponse {
    return MsgDeletePolicyPermissionsResponse.decode(message.value);
  },
  toProto(message: MsgDeletePolicyPermissionsResponse): Uint8Array {
    return MsgDeletePolicyPermissionsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePolicyPermissionsResponse): MsgDeletePolicyPermissionsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgDeletePolicyPermissionsResponse",
      value: MsgDeletePolicyPermissionsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterGroup(): MsgRegisterGroup {
  return {
    authority: "",
    name: "",
    description: "",
    members: [],
    memberWeights: [],
    fundingWeight: BigInt(0),
    maxSpendPerEpoch: "",
    updateCooldown: BigInt(0),
    intendedParentAddress: "",
    minMembers: BigInt(0),
    maxMembers: BigInt(0),
    termDuration: BigInt(0),
    activationTime: BigInt(0),
    votingPeriod: BigInt(0),
    minExecutionPeriod: BigInt(0),
    futarchyEnabled: false,
    voteThreshold: "",
    policyType: "",
    allowedMessages: [],
    electoralPolicyAddress: ""
  };
}
/**
 * MsgRegisterGroup defines the MsgRegisterGroup message.
 * @name MsgRegisterGroup
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgRegisterGroup
 */
export const MsgRegisterGroup = {
  typeUrl: "/sparkdream.commons.v1.MsgRegisterGroup",
  encode(message: MsgRegisterGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.members) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.memberWeights) {
      writer.uint32(42).string(v!);
    }
    if (message.fundingWeight !== BigInt(0)) {
      writer.uint32(48).uint64(message.fundingWeight);
    }
    if (message.maxSpendPerEpoch !== "") {
      writer.uint32(58).string(message.maxSpendPerEpoch);
    }
    if (message.updateCooldown !== BigInt(0)) {
      writer.uint32(64).int64(message.updateCooldown);
    }
    if (message.intendedParentAddress !== "") {
      writer.uint32(74).string(message.intendedParentAddress);
    }
    if (message.minMembers !== BigInt(0)) {
      writer.uint32(80).uint64(message.minMembers);
    }
    if (message.maxMembers !== BigInt(0)) {
      writer.uint32(88).uint64(message.maxMembers);
    }
    if (message.termDuration !== BigInt(0)) {
      writer.uint32(96).int64(message.termDuration);
    }
    if (message.activationTime !== BigInt(0)) {
      writer.uint32(104).int64(message.activationTime);
    }
    if (message.votingPeriod !== BigInt(0)) {
      writer.uint32(112).int64(message.votingPeriod);
    }
    if (message.minExecutionPeriod !== BigInt(0)) {
      writer.uint32(120).int64(message.minExecutionPeriod);
    }
    if (message.futarchyEnabled === true) {
      writer.uint32(128).bool(message.futarchyEnabled);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
    }
    if (message.policyType !== "") {
      writer.uint32(146).string(message.policyType);
    }
    for (const v of message.allowedMessages) {
      writer.uint32(154).string(v!);
    }
    if (message.electoralPolicyAddress !== "") {
      writer.uint32(162).string(message.electoralPolicyAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.members.push(reader.string());
          break;
        case 5:
          message.memberWeights.push(reader.string());
          break;
        case 6:
          message.fundingWeight = reader.uint64();
          break;
        case 7:
          message.maxSpendPerEpoch = reader.string();
          break;
        case 8:
          message.updateCooldown = reader.int64();
          break;
        case 9:
          message.intendedParentAddress = reader.string();
          break;
        case 10:
          message.minMembers = reader.uint64();
          break;
        case 11:
          message.maxMembers = reader.uint64();
          break;
        case 12:
          message.termDuration = reader.int64();
          break;
        case 13:
          message.activationTime = reader.int64();
          break;
        case 14:
          message.votingPeriod = reader.int64();
          break;
        case 15:
          message.minExecutionPeriod = reader.int64();
          break;
        case 16:
          message.futarchyEnabled = reader.bool();
          break;
        case 17:
          message.voteThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 18:
          message.policyType = reader.string();
          break;
        case 19:
          message.allowedMessages.push(reader.string());
          break;
        case 20:
          message.electoralPolicyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterGroup>): MsgRegisterGroup {
    const message = createBaseMsgRegisterGroup();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.members = object.members?.map(e => e) || [];
    message.memberWeights = object.memberWeights?.map(e => e) || [];
    message.fundingWeight = object.fundingWeight !== undefined && object.fundingWeight !== null ? BigInt(object.fundingWeight.toString()) : BigInt(0);
    message.maxSpendPerEpoch = object.maxSpendPerEpoch ?? "";
    message.updateCooldown = object.updateCooldown !== undefined && object.updateCooldown !== null ? BigInt(object.updateCooldown.toString()) : BigInt(0);
    message.intendedParentAddress = object.intendedParentAddress ?? "";
    message.minMembers = object.minMembers !== undefined && object.minMembers !== null ? BigInt(object.minMembers.toString()) : BigInt(0);
    message.maxMembers = object.maxMembers !== undefined && object.maxMembers !== null ? BigInt(object.maxMembers.toString()) : BigInt(0);
    message.termDuration = object.termDuration !== undefined && object.termDuration !== null ? BigInt(object.termDuration.toString()) : BigInt(0);
    message.activationTime = object.activationTime !== undefined && object.activationTime !== null ? BigInt(object.activationTime.toString()) : BigInt(0);
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? BigInt(object.votingPeriod.toString()) : BigInt(0);
    message.minExecutionPeriod = object.minExecutionPeriod !== undefined && object.minExecutionPeriod !== null ? BigInt(object.minExecutionPeriod.toString()) : BigInt(0);
    message.futarchyEnabled = object.futarchyEnabled ?? false;
    message.voteThreshold = object.voteThreshold ?? "";
    message.policyType = object.policyType ?? "";
    message.allowedMessages = object.allowedMessages?.map(e => e) || [];
    message.electoralPolicyAddress = object.electoralPolicyAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterGroupAmino): MsgRegisterGroup {
    const message = createBaseMsgRegisterGroup();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.members = object.members?.map(e => e) || [];
    message.memberWeights = object.member_weights?.map(e => e) || [];
    if (object.funding_weight !== undefined && object.funding_weight !== null) {
      message.fundingWeight = BigInt(object.funding_weight);
    }
    if (object.max_spend_per_epoch !== undefined && object.max_spend_per_epoch !== null) {
      message.maxSpendPerEpoch = object.max_spend_per_epoch;
    }
    if (object.update_cooldown !== undefined && object.update_cooldown !== null) {
      message.updateCooldown = BigInt(object.update_cooldown);
    }
    if (object.intended_parent_address !== undefined && object.intended_parent_address !== null) {
      message.intendedParentAddress = object.intended_parent_address;
    }
    if (object.min_members !== undefined && object.min_members !== null) {
      message.minMembers = BigInt(object.min_members);
    }
    if (object.max_members !== undefined && object.max_members !== null) {
      message.maxMembers = BigInt(object.max_members);
    }
    if (object.term_duration !== undefined && object.term_duration !== null) {
      message.termDuration = BigInt(object.term_duration);
    }
    if (object.activation_time !== undefined && object.activation_time !== null) {
      message.activationTime = BigInt(object.activation_time);
    }
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = BigInt(object.voting_period);
    }
    if (object.min_execution_period !== undefined && object.min_execution_period !== null) {
      message.minExecutionPeriod = BigInt(object.min_execution_period);
    }
    if (object.futarchy_enabled !== undefined && object.futarchy_enabled !== null) {
      message.futarchyEnabled = object.futarchy_enabled;
    }
    if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
      message.voteThreshold = object.vote_threshold;
    }
    if (object.policy_type !== undefined && object.policy_type !== null) {
      message.policyType = object.policy_type;
    }
    message.allowedMessages = object.allowed_messages?.map(e => e) || [];
    if (object.electoral_policy_address !== undefined && object.electoral_policy_address !== null) {
      message.electoralPolicyAddress = object.electoral_policy_address;
    }
    return message;
  },
  toAmino(message: MsgRegisterGroup): MsgRegisterGroupAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.members) {
      obj.members = message.members.map(e => e);
    } else {
      obj.members = message.members;
    }
    if (message.memberWeights) {
      obj.member_weights = message.memberWeights.map(e => e);
    } else {
      obj.member_weights = message.memberWeights;
    }
    obj.funding_weight = message.fundingWeight !== BigInt(0) ? message.fundingWeight?.toString() : undefined;
    obj.max_spend_per_epoch = message.maxSpendPerEpoch === "" ? undefined : message.maxSpendPerEpoch;
    obj.update_cooldown = message.updateCooldown !== BigInt(0) ? message.updateCooldown?.toString() : undefined;
    obj.intended_parent_address = message.intendedParentAddress === "" ? undefined : message.intendedParentAddress;
    obj.min_members = message.minMembers !== BigInt(0) ? message.minMembers?.toString() : undefined;
    obj.max_members = message.maxMembers !== BigInt(0) ? message.maxMembers?.toString() : undefined;
    obj.term_duration = message.termDuration !== BigInt(0) ? message.termDuration?.toString() : undefined;
    obj.activation_time = message.activationTime !== BigInt(0) ? message.activationTime?.toString() : undefined;
    obj.voting_period = message.votingPeriod !== BigInt(0) ? message.votingPeriod?.toString() : undefined;
    obj.min_execution_period = message.minExecutionPeriod !== BigInt(0) ? message.minExecutionPeriod?.toString() : undefined;
    obj.futarchy_enabled = message.futarchyEnabled === false ? undefined : message.futarchyEnabled;
    obj.vote_threshold = message.voteThreshold === "" ? undefined : message.voteThreshold;
    obj.policy_type = message.policyType === "" ? undefined : message.policyType;
    if (message.allowedMessages) {
      obj.allowed_messages = message.allowedMessages.map(e => e);
    } else {
      obj.allowed_messages = message.allowedMessages;
    }
    obj.electoral_policy_address = message.electoralPolicyAddress === "" ? undefined : message.electoralPolicyAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterGroupAminoMsg): MsgRegisterGroup {
    return MsgRegisterGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterGroupProtoMsg): MsgRegisterGroup {
    return MsgRegisterGroup.decode(message.value);
  },
  toProto(message: MsgRegisterGroup): Uint8Array {
    return MsgRegisterGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterGroup): MsgRegisterGroupProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgRegisterGroup",
      value: MsgRegisterGroup.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterGroupResponse(): MsgRegisterGroupResponse {
  return {};
}
/**
 * MsgRegisterGroupResponse defines the MsgRegisterGroupResponse message.
 * @name MsgRegisterGroupResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgRegisterGroupResponse
 */
export const MsgRegisterGroupResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgRegisterGroupResponse",
  encode(_: MsgRegisterGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterGroupResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterGroupResponse>): MsgRegisterGroupResponse {
    const message = createBaseMsgRegisterGroupResponse();
    return message;
  },
  fromAmino(_: MsgRegisterGroupResponseAmino): MsgRegisterGroupResponse {
    const message = createBaseMsgRegisterGroupResponse();
    return message;
  },
  toAmino(_: MsgRegisterGroupResponse): MsgRegisterGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterGroupResponseAminoMsg): MsgRegisterGroupResponse {
    return MsgRegisterGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterGroupResponseProtoMsg): MsgRegisterGroupResponse {
    return MsgRegisterGroupResponse.decode(message.value);
  },
  toProto(message: MsgRegisterGroupResponse): Uint8Array {
    return MsgRegisterGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterGroupResponse): MsgRegisterGroupResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgRegisterGroupResponse",
      value: MsgRegisterGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRenewGroup(): MsgRenewGroup {
  return {
    authority: "",
    groupName: "",
    newMembers: [],
    newMemberWeights: []
  };
}
/**
 * MsgRenewGroup defines the MsgRenewGroup message.
 * @name MsgRenewGroup
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgRenewGroup
 */
export const MsgRenewGroup = {
  typeUrl: "/sparkdream.commons.v1.MsgRenewGroup",
  encode(message: MsgRenewGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    for (const v of message.newMembers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.newMemberWeights) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRenewGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.groupName = reader.string();
          break;
        case 3:
          message.newMembers.push(reader.string());
          break;
        case 4:
          message.newMemberWeights.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRenewGroup>): MsgRenewGroup {
    const message = createBaseMsgRenewGroup();
    message.authority = object.authority ?? "";
    message.groupName = object.groupName ?? "";
    message.newMembers = object.newMembers?.map(e => e) || [];
    message.newMemberWeights = object.newMemberWeights?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRenewGroupAmino): MsgRenewGroup {
    const message = createBaseMsgRenewGroup();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    message.newMembers = object.new_members?.map(e => e) || [];
    message.newMemberWeights = object.new_member_weights?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRenewGroup): MsgRenewGroupAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.group_name = message.groupName === "" ? undefined : message.groupName;
    if (message.newMembers) {
      obj.new_members = message.newMembers.map(e => e);
    } else {
      obj.new_members = message.newMembers;
    }
    if (message.newMemberWeights) {
      obj.new_member_weights = message.newMemberWeights.map(e => e);
    } else {
      obj.new_member_weights = message.newMemberWeights;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRenewGroupAminoMsg): MsgRenewGroup {
    return MsgRenewGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenewGroupProtoMsg): MsgRenewGroup {
    return MsgRenewGroup.decode(message.value);
  },
  toProto(message: MsgRenewGroup): Uint8Array {
    return MsgRenewGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgRenewGroup): MsgRenewGroupProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgRenewGroup",
      value: MsgRenewGroup.encode(message).finish()
    };
  }
};
function createBaseMsgRenewGroupResponse(): MsgRenewGroupResponse {
  return {};
}
/**
 * MsgRenewGroupResponse defines the MsgRenewGroupResponse message.
 * @name MsgRenewGroupResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgRenewGroupResponse
 */
export const MsgRenewGroupResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgRenewGroupResponse",
  encode(_: MsgRenewGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRenewGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewGroupResponse();
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
  fromPartial(_: DeepPartial<MsgRenewGroupResponse>): MsgRenewGroupResponse {
    const message = createBaseMsgRenewGroupResponse();
    return message;
  },
  fromAmino(_: MsgRenewGroupResponseAmino): MsgRenewGroupResponse {
    const message = createBaseMsgRenewGroupResponse();
    return message;
  },
  toAmino(_: MsgRenewGroupResponse): MsgRenewGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRenewGroupResponseAminoMsg): MsgRenewGroupResponse {
    return MsgRenewGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenewGroupResponseProtoMsg): MsgRenewGroupResponse {
    return MsgRenewGroupResponse.decode(message.value);
  },
  toProto(message: MsgRenewGroupResponse): Uint8Array {
    return MsgRenewGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRenewGroupResponse): MsgRenewGroupResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgRenewGroupResponse",
      value: MsgRenewGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupConfig(): MsgUpdateGroupConfig {
  return {
    authority: "",
    groupName: "",
    maxSpendPerEpoch: "",
    updateCooldown: BigInt(0),
    voteThreshold: "",
    futarchyEnabled: undefined,
    minMembers: BigInt(0),
    maxMembers: BigInt(0),
    termDuration: BigInt(0),
    policyType: "",
    votingPeriod: BigInt(0),
    minExecutionPeriod: BigInt(0),
    electoralPolicyAddress: ""
  };
}
/**
 * MsgUpdateGroupConfig defines the MsgUpdateGroupConfig message.
 * @name MsgUpdateGroupConfig
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateGroupConfig
 */
export const MsgUpdateGroupConfig = {
  typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupConfig",
  encode(message: MsgUpdateGroupConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    if (message.maxSpendPerEpoch !== "") {
      writer.uint32(26).string(message.maxSpendPerEpoch);
    }
    if (message.updateCooldown !== BigInt(0)) {
      writer.uint32(32).int64(message.updateCooldown);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
    }
    if (message.futarchyEnabled !== undefined) {
      BoolValue.encode(message.futarchyEnabled, writer.uint32(50).fork()).ldelim();
    }
    if (message.minMembers !== BigInt(0)) {
      writer.uint32(56).uint64(message.minMembers);
    }
    if (message.maxMembers !== BigInt(0)) {
      writer.uint32(64).uint64(message.maxMembers);
    }
    if (message.termDuration !== BigInt(0)) {
      writer.uint32(72).int64(message.termDuration);
    }
    if (message.policyType !== "") {
      writer.uint32(82).string(message.policyType);
    }
    if (message.votingPeriod !== BigInt(0)) {
      writer.uint32(88).int64(message.votingPeriod);
    }
    if (message.minExecutionPeriod !== BigInt(0)) {
      writer.uint32(96).int64(message.minExecutionPeriod);
    }
    if (message.electoralPolicyAddress !== "") {
      writer.uint32(106).string(message.electoralPolicyAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.groupName = reader.string();
          break;
        case 3:
          message.maxSpendPerEpoch = reader.string();
          break;
        case 4:
          message.updateCooldown = reader.int64();
          break;
        case 5:
          message.voteThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.futarchyEnabled = BoolValue.decode(reader, reader.uint32());
          break;
        case 7:
          message.minMembers = reader.uint64();
          break;
        case 8:
          message.maxMembers = reader.uint64();
          break;
        case 9:
          message.termDuration = reader.int64();
          break;
        case 10:
          message.policyType = reader.string();
          break;
        case 11:
          message.votingPeriod = reader.int64();
          break;
        case 12:
          message.minExecutionPeriod = reader.int64();
          break;
        case 13:
          message.electoralPolicyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupConfig>): MsgUpdateGroupConfig {
    const message = createBaseMsgUpdateGroupConfig();
    message.authority = object.authority ?? "";
    message.groupName = object.groupName ?? "";
    message.maxSpendPerEpoch = object.maxSpendPerEpoch ?? "";
    message.updateCooldown = object.updateCooldown !== undefined && object.updateCooldown !== null ? BigInt(object.updateCooldown.toString()) : BigInt(0);
    message.voteThreshold = object.voteThreshold ?? "";
    message.futarchyEnabled = object.futarchyEnabled !== undefined && object.futarchyEnabled !== null ? BoolValue.fromPartial(object.futarchyEnabled) : undefined;
    message.minMembers = object.minMembers !== undefined && object.minMembers !== null ? BigInt(object.minMembers.toString()) : BigInt(0);
    message.maxMembers = object.maxMembers !== undefined && object.maxMembers !== null ? BigInt(object.maxMembers.toString()) : BigInt(0);
    message.termDuration = object.termDuration !== undefined && object.termDuration !== null ? BigInt(object.termDuration.toString()) : BigInt(0);
    message.policyType = object.policyType ?? "";
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? BigInt(object.votingPeriod.toString()) : BigInt(0);
    message.minExecutionPeriod = object.minExecutionPeriod !== undefined && object.minExecutionPeriod !== null ? BigInt(object.minExecutionPeriod.toString()) : BigInt(0);
    message.electoralPolicyAddress = object.electoralPolicyAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateGroupConfigAmino): MsgUpdateGroupConfig {
    const message = createBaseMsgUpdateGroupConfig();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    if (object.max_spend_per_epoch !== undefined && object.max_spend_per_epoch !== null) {
      message.maxSpendPerEpoch = object.max_spend_per_epoch;
    }
    if (object.update_cooldown !== undefined && object.update_cooldown !== null) {
      message.updateCooldown = BigInt(object.update_cooldown);
    }
    if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
      message.voteThreshold = object.vote_threshold;
    }
    if (object.futarchy_enabled !== undefined && object.futarchy_enabled !== null) {
      message.futarchyEnabled = BoolValue.fromAmino(object.futarchy_enabled);
    }
    if (object.min_members !== undefined && object.min_members !== null) {
      message.minMembers = BigInt(object.min_members);
    }
    if (object.max_members !== undefined && object.max_members !== null) {
      message.maxMembers = BigInt(object.max_members);
    }
    if (object.term_duration !== undefined && object.term_duration !== null) {
      message.termDuration = BigInt(object.term_duration);
    }
    if (object.policy_type !== undefined && object.policy_type !== null) {
      message.policyType = object.policy_type;
    }
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = BigInt(object.voting_period);
    }
    if (object.min_execution_period !== undefined && object.min_execution_period !== null) {
      message.minExecutionPeriod = BigInt(object.min_execution_period);
    }
    if (object.electoral_policy_address !== undefined && object.electoral_policy_address !== null) {
      message.electoralPolicyAddress = object.electoral_policy_address;
    }
    return message;
  },
  toAmino(message: MsgUpdateGroupConfig): MsgUpdateGroupConfigAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.group_name = message.groupName === "" ? undefined : message.groupName;
    obj.max_spend_per_epoch = message.maxSpendPerEpoch === "" ? undefined : message.maxSpendPerEpoch;
    obj.update_cooldown = message.updateCooldown !== BigInt(0) ? message.updateCooldown?.toString() : undefined;
    obj.vote_threshold = message.voteThreshold === "" ? undefined : message.voteThreshold;
    obj.futarchy_enabled = message.futarchyEnabled ? BoolValue.toAmino(message.futarchyEnabled) : undefined;
    obj.min_members = message.minMembers !== BigInt(0) ? message.minMembers?.toString() : undefined;
    obj.max_members = message.maxMembers !== BigInt(0) ? message.maxMembers?.toString() : undefined;
    obj.term_duration = message.termDuration !== BigInt(0) ? message.termDuration?.toString() : undefined;
    obj.policy_type = message.policyType === "" ? undefined : message.policyType;
    obj.voting_period = message.votingPeriod !== BigInt(0) ? message.votingPeriod?.toString() : undefined;
    obj.min_execution_period = message.minExecutionPeriod !== BigInt(0) ? message.minExecutionPeriod?.toString() : undefined;
    obj.electoral_policy_address = message.electoralPolicyAddress === "" ? undefined : message.electoralPolicyAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupConfigAminoMsg): MsgUpdateGroupConfig {
    return MsgUpdateGroupConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupConfigProtoMsg): MsgUpdateGroupConfig {
    return MsgUpdateGroupConfig.decode(message.value);
  },
  toProto(message: MsgUpdateGroupConfig): Uint8Array {
    return MsgUpdateGroupConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupConfig): MsgUpdateGroupConfigProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupConfig",
      value: MsgUpdateGroupConfig.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupConfigResponse(): MsgUpdateGroupConfigResponse {
  return {};
}
/**
 * MsgUpdateGroupConfigResponse defines the MsgUpdateGroupConfigResponse message.
 * @name MsgUpdateGroupConfigResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateGroupConfigResponse
 */
export const MsgUpdateGroupConfigResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupConfigResponse",
  encode(_: MsgUpdateGroupConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupConfigResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateGroupConfigResponse>): MsgUpdateGroupConfigResponse {
    const message = createBaseMsgUpdateGroupConfigResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupConfigResponseAmino): MsgUpdateGroupConfigResponse {
    const message = createBaseMsgUpdateGroupConfigResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupConfigResponse): MsgUpdateGroupConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupConfigResponseAminoMsg): MsgUpdateGroupConfigResponse {
    return MsgUpdateGroupConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupConfigResponseProtoMsg): MsgUpdateGroupConfigResponse {
    return MsgUpdateGroupConfigResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupConfigResponse): Uint8Array {
    return MsgUpdateGroupConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupConfigResponse): MsgUpdateGroupConfigResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupConfigResponse",
      value: MsgUpdateGroupConfigResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMembers(): MsgUpdateGroupMembers {
  return {
    authority: "",
    groupPolicyAddress: "",
    membersToAdd: [],
    weightsToAdd: [],
    membersToRemove: []
  };
}
/**
 * MsgUpdateGroupMembers defines the MsgUpdateGroupMembers message.
 * @name MsgUpdateGroupMembers
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateGroupMembers
 */
export const MsgUpdateGroupMembers = {
  typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupMembers",
  encode(message: MsgUpdateGroupMembers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    for (const v of message.membersToAdd) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.weightsToAdd) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.membersToRemove) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMembers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.membersToAdd.push(reader.string());
          break;
        case 4:
          message.weightsToAdd.push(reader.string());
          break;
        case 5:
          message.membersToRemove.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers {
    const message = createBaseMsgUpdateGroupMembers();
    message.authority = object.authority ?? "";
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.membersToAdd = object.membersToAdd?.map(e => e) || [];
    message.weightsToAdd = object.weightsToAdd?.map(e => e) || [];
    message.membersToRemove = object.membersToRemove?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgUpdateGroupMembersAmino): MsgUpdateGroupMembers {
    const message = createBaseMsgUpdateGroupMembers();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
      message.groupPolicyAddress = object.group_policy_address;
    }
    message.membersToAdd = object.members_to_add?.map(e => e) || [];
    message.weightsToAdd = object.weights_to_add?.map(e => e) || [];
    message.membersToRemove = object.members_to_remove?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.group_policy_address = message.groupPolicyAddress === "" ? undefined : message.groupPolicyAddress;
    if (message.membersToAdd) {
      obj.members_to_add = message.membersToAdd.map(e => e);
    } else {
      obj.members_to_add = message.membersToAdd;
    }
    if (message.weightsToAdd) {
      obj.weights_to_add = message.weightsToAdd.map(e => e);
    } else {
      obj.weights_to_add = message.weightsToAdd;
    }
    if (message.membersToRemove) {
      obj.members_to_remove = message.membersToRemove.map(e => e);
    } else {
      obj.members_to_remove = message.membersToRemove;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMembersAminoMsg): MsgUpdateGroupMembers {
    return MsgUpdateGroupMembers.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupMembersProtoMsg): MsgUpdateGroupMembers {
    return MsgUpdateGroupMembers.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMembers): Uint8Array {
    return MsgUpdateGroupMembers.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMembersResponse(): MsgUpdateGroupMembersResponse {
  return {};
}
/**
 * MsgUpdateGroupMembersResponse defines the MsgUpdateGroupMembersResponse message.
 * @name MsgUpdateGroupMembersResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgUpdateGroupMembersResponse
 */
export const MsgUpdateGroupMembersResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupMembersResponse",
  encode(_: MsgUpdateGroupMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembersResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupMembersResponseAmino): MsgUpdateGroupMembersResponse {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },
  toAmino(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMembersResponseAminoMsg): MsgUpdateGroupMembersResponse {
    return MsgUpdateGroupMembersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGroupMembersResponseProtoMsg): MsgUpdateGroupMembersResponse {
    return MsgUpdateGroupMembersResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMembersResponse): Uint8Array {
    return MsgUpdateGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupMembersResponse",
      value: MsgUpdateGroupMembersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgForceUpgrade(): MsgForceUpgrade {
  return {
    authority: "",
    plan: UpgradePlan.fromPartial({})
  };
}
/**
 * MsgForceUpgrade defines the MsgForceUpgrade message.
 * @name MsgForceUpgrade
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgForceUpgrade
 */
export const MsgForceUpgrade = {
  typeUrl: "/sparkdream.commons.v1.MsgForceUpgrade",
  encode(message: MsgForceUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      UpgradePlan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = UpgradePlan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgForceUpgrade>): MsgForceUpgrade {
    const message = createBaseMsgForceUpgrade();
    message.authority = object.authority ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? UpgradePlan.fromPartial(object.plan) : undefined;
    return message;
  },
  fromAmino(object: MsgForceUpgradeAmino): MsgForceUpgrade {
    const message = createBaseMsgForceUpgrade();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = UpgradePlan.fromAmino(object.plan);
    }
    return message;
  },
  toAmino(message: MsgForceUpgrade): MsgForceUpgradeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.plan = message.plan ? UpgradePlan.toAmino(message.plan) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgForceUpgradeAminoMsg): MsgForceUpgrade {
    return MsgForceUpgrade.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForceUpgradeProtoMsg): MsgForceUpgrade {
    return MsgForceUpgrade.decode(message.value);
  },
  toProto(message: MsgForceUpgrade): Uint8Array {
    return MsgForceUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgForceUpgrade): MsgForceUpgradeProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgForceUpgrade",
      value: MsgForceUpgrade.encode(message).finish()
    };
  }
};
function createBaseUpgradePlan(): UpgradePlan {
  return {
    name: "",
    height: BigInt(0),
    info: ""
  };
}
/**
 * UpgradePlan is a local wrapper for cosmos.upgrade.v1beta1.Plan.
 * This prevents import cycle/path conflicts in generated Go code.
 * @name UpgradePlan
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.UpgradePlan
 */
export const UpgradePlan = {
  typeUrl: "/sparkdream.commons.v1.UpgradePlan",
  encode(message: UpgradePlan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.info !== "") {
      writer.uint32(26).string(message.info);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpgradePlan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgradePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.info = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpgradePlan>): UpgradePlan {
    const message = createBaseUpgradePlan();
    message.name = object.name ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.info = object.info ?? "";
    return message;
  },
  fromAmino(object: UpgradePlanAmino): UpgradePlan {
    const message = createBaseUpgradePlan();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    return message;
  },
  toAmino(message: UpgradePlan): UpgradePlanAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.info = message.info === "" ? undefined : message.info;
    return obj;
  },
  fromAminoMsg(object: UpgradePlanAminoMsg): UpgradePlan {
    return UpgradePlan.fromAmino(object.value);
  },
  fromProtoMsg(message: UpgradePlanProtoMsg): UpgradePlan {
    return UpgradePlan.decode(message.value);
  },
  toProto(message: UpgradePlan): Uint8Array {
    return UpgradePlan.encode(message).finish();
  },
  toProtoMsg(message: UpgradePlan): UpgradePlanProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.UpgradePlan",
      value: UpgradePlan.encode(message).finish()
    };
  }
};
function createBaseMsgForceUpgradeResponse(): MsgForceUpgradeResponse {
  return {};
}
/**
 * MsgForceUpgradeResponse defines the MsgForceUpgradeResponse message.
 * @name MsgForceUpgradeResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgForceUpgradeResponse
 */
export const MsgForceUpgradeResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgForceUpgradeResponse",
  encode(_: MsgForceUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUpgradeResponse();
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
  fromPartial(_: DeepPartial<MsgForceUpgradeResponse>): MsgForceUpgradeResponse {
    const message = createBaseMsgForceUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgForceUpgradeResponseAmino): MsgForceUpgradeResponse {
    const message = createBaseMsgForceUpgradeResponse();
    return message;
  },
  toAmino(_: MsgForceUpgradeResponse): MsgForceUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgForceUpgradeResponseAminoMsg): MsgForceUpgradeResponse {
    return MsgForceUpgradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForceUpgradeResponseProtoMsg): MsgForceUpgradeResponse {
    return MsgForceUpgradeResponse.decode(message.value);
  },
  toProto(message: MsgForceUpgradeResponse): Uint8Array {
    return MsgForceUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgForceUpgradeResponse): MsgForceUpgradeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgForceUpgradeResponse",
      value: MsgForceUpgradeResponse.encode(message).finish()
    };
  }
};
function createBaseBoolValue(): BoolValue {
  return {
    value: false
  };
}
/**
 * BoolValue defines a wrapper around a bool field to support optionality.
 * @name BoolValue
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.BoolValue
 */
export const BoolValue = {
  typeUrl: "/sparkdream.commons.v1.BoolValue",
  encode(message: BoolValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BoolValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BoolValue>): BoolValue {
    const message = createBaseBoolValue();
    message.value = object.value ?? false;
    return message;
  },
  fromAmino(object: BoolValueAmino): BoolValue {
    const message = createBaseBoolValue();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: BoolValue): BoolValueAmino {
    const obj: any = {};
    obj.value = message.value === false ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: BoolValueAminoMsg): BoolValue {
    return BoolValue.fromAmino(object.value);
  },
  fromProtoMsg(message: BoolValueProtoMsg): BoolValue {
    return BoolValue.decode(message.value);
  },
  toProto(message: BoolValue): Uint8Array {
    return BoolValue.encode(message).finish();
  },
  toProtoMsg(message: BoolValue): BoolValueProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.BoolValue",
      value: BoolValue.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteGroup(): MsgDeleteGroup {
  return {
    authority: "",
    groupName: ""
  };
}
/**
 * MsgDeleteGroup defines the MsgDeleteGroup message.
 * @name MsgDeleteGroup
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgDeleteGroup
 */
export const MsgDeleteGroup = {
  typeUrl: "/sparkdream.commons.v1.MsgDeleteGroup",
  encode(message: MsgDeleteGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.groupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeleteGroup>): MsgDeleteGroup {
    const message = createBaseMsgDeleteGroup();
    message.authority = object.authority ?? "";
    message.groupName = object.groupName ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteGroupAmino): MsgDeleteGroup {
    const message = createBaseMsgDeleteGroup();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    return message;
  },
  toAmino(message: MsgDeleteGroup): MsgDeleteGroupAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.group_name = message.groupName === "" ? undefined : message.groupName;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteGroupAminoMsg): MsgDeleteGroup {
    return MsgDeleteGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteGroupProtoMsg): MsgDeleteGroup {
    return MsgDeleteGroup.decode(message.value);
  },
  toProto(message: MsgDeleteGroup): Uint8Array {
    return MsgDeleteGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteGroup): MsgDeleteGroupProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgDeleteGroup",
      value: MsgDeleteGroup.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteGroupResponse(): MsgDeleteGroupResponse {
  return {};
}
/**
 * MsgDeleteGroupResponse defines the MsgDeleteGroupResponse message.
 * @name MsgDeleteGroupResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgDeleteGroupResponse
 */
export const MsgDeleteGroupResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgDeleteGroupResponse",
  encode(_: MsgDeleteGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteGroupResponse();
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
  fromPartial(_: DeepPartial<MsgDeleteGroupResponse>): MsgDeleteGroupResponse {
    const message = createBaseMsgDeleteGroupResponse();
    return message;
  },
  fromAmino(_: MsgDeleteGroupResponseAmino): MsgDeleteGroupResponse {
    const message = createBaseMsgDeleteGroupResponse();
    return message;
  },
  toAmino(_: MsgDeleteGroupResponse): MsgDeleteGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteGroupResponseAminoMsg): MsgDeleteGroupResponse {
    return MsgDeleteGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteGroupResponseProtoMsg): MsgDeleteGroupResponse {
    return MsgDeleteGroupResponse.decode(message.value);
  },
  toProto(message: MsgDeleteGroupResponse): Uint8Array {
    return MsgDeleteGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteGroupResponse): MsgDeleteGroupResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgDeleteGroupResponse",
      value: MsgDeleteGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVetoGroupProposals(): MsgVetoGroupProposals {
  return {
    authority: "",
    groupName: ""
  };
}
/**
 * MsgVetoGroupProposals defines the MsgVetoGroupProposals message.
 * @name MsgVetoGroupProposals
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgVetoGroupProposals
 */
export const MsgVetoGroupProposals = {
  typeUrl: "/sparkdream.commons.v1.MsgVetoGroupProposals",
  encode(message: MsgVetoGroupProposals, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVetoGroupProposals {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVetoGroupProposals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.groupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgVetoGroupProposals>): MsgVetoGroupProposals {
    const message = createBaseMsgVetoGroupProposals();
    message.authority = object.authority ?? "";
    message.groupName = object.groupName ?? "";
    return message;
  },
  fromAmino(object: MsgVetoGroupProposalsAmino): MsgVetoGroupProposals {
    const message = createBaseMsgVetoGroupProposals();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.group_name !== undefined && object.group_name !== null) {
      message.groupName = object.group_name;
    }
    return message;
  },
  toAmino(message: MsgVetoGroupProposals): MsgVetoGroupProposalsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.group_name = message.groupName === "" ? undefined : message.groupName;
    return obj;
  },
  fromAminoMsg(object: MsgVetoGroupProposalsAminoMsg): MsgVetoGroupProposals {
    return MsgVetoGroupProposals.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVetoGroupProposalsProtoMsg): MsgVetoGroupProposals {
    return MsgVetoGroupProposals.decode(message.value);
  },
  toProto(message: MsgVetoGroupProposals): Uint8Array {
    return MsgVetoGroupProposals.encode(message).finish();
  },
  toProtoMsg(message: MsgVetoGroupProposals): MsgVetoGroupProposalsProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgVetoGroupProposals",
      value: MsgVetoGroupProposals.encode(message).finish()
    };
  }
};
function createBaseMsgVetoGroupProposalsResponse(): MsgVetoGroupProposalsResponse {
  return {};
}
/**
 * MsgVetoGroupProposalsResponse defines the MsgVetoGroupProposalsResponse message.
 * @name MsgVetoGroupProposalsResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgVetoGroupProposalsResponse
 */
export const MsgVetoGroupProposalsResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgVetoGroupProposalsResponse",
  encode(_: MsgVetoGroupProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVetoGroupProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVetoGroupProposalsResponse();
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
  fromPartial(_: DeepPartial<MsgVetoGroupProposalsResponse>): MsgVetoGroupProposalsResponse {
    const message = createBaseMsgVetoGroupProposalsResponse();
    return message;
  },
  fromAmino(_: MsgVetoGroupProposalsResponseAmino): MsgVetoGroupProposalsResponse {
    const message = createBaseMsgVetoGroupProposalsResponse();
    return message;
  },
  toAmino(_: MsgVetoGroupProposalsResponse): MsgVetoGroupProposalsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVetoGroupProposalsResponseAminoMsg): MsgVetoGroupProposalsResponse {
    return MsgVetoGroupProposalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVetoGroupProposalsResponseProtoMsg): MsgVetoGroupProposalsResponse {
    return MsgVetoGroupProposalsResponse.decode(message.value);
  },
  toProto(message: MsgVetoGroupProposalsResponse): Uint8Array {
    return MsgVetoGroupProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVetoGroupProposalsResponse): MsgVetoGroupProposalsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgVetoGroupProposalsResponse",
      value: MsgVetoGroupProposalsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    proposer: "",
    policyAddress: "",
    messages: [],
    metadata: ""
  };
}
/**
 * MsgSubmitProposal submits a new proposal to a council.
 * @name MsgSubmitProposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSubmitProposal
 */
export const MsgSubmitProposal = {
  typeUrl: "/sparkdream.commons.v1.MsgSubmitProposal",
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.policyAddress !== "") {
      writer.uint32(18).string(message.policyAddress);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.policyAddress = reader.string();
          break;
        case 3:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 4:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.proposer = object.proposer ?? "";
    message.policyAddress = object.policyAddress ?? "";
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino {
    const obj: any = {};
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = message.messages;
    }
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message: MsgSubmitProposal): Uint8Array {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: BigInt(0)
  };
}
/**
 * MsgSubmitProposalResponse defines the response for SubmitProposal.
 * @name MsgSubmitProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSubmitProposalResponse
 */
export const MsgSubmitProposalResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgSubmitProposalResponse",
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message: MsgSubmitProposalResponse): Uint8Array {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVoteProposal(): MsgVoteProposal {
  return {
    voter: "",
    proposalId: BigInt(0),
    option: 0,
    metadata: ""
  };
}
/**
 * MsgVoteProposal casts a vote on a proposal.
 * @name MsgVoteProposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgVoteProposal
 */
export const MsgVoteProposal = {
  typeUrl: "/sparkdream.commons.v1.MsgVoteProposal",
  encode(message: MsgVoteProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        case 4:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgVoteProposal>): MsgVoteProposal {
    const message = createBaseMsgVoteProposal();
    message.voter = object.voter ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgVoteProposalAmino): MsgVoteProposal {
    const message = createBaseMsgVoteProposal();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgVoteProposal): MsgVoteProposalAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.option = message.option === 0 ? undefined : message.option;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgVoteProposalAminoMsg): MsgVoteProposal {
    return MsgVoteProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoteProposalProtoMsg): MsgVoteProposal {
    return MsgVoteProposal.decode(message.value);
  },
  toProto(message: MsgVoteProposal): Uint8Array {
    return MsgVoteProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteProposal): MsgVoteProposalProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgVoteProposal",
      value: MsgVoteProposal.encode(message).finish()
    };
  }
};
function createBaseMsgVoteProposalResponse(): MsgVoteProposalResponse {
  return {};
}
/**
 * MsgVoteProposalResponse defines the response for VoteProposal.
 * @name MsgVoteProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgVoteProposalResponse
 */
export const MsgVoteProposalResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgVoteProposalResponse",
  encode(_: MsgVoteProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteProposalResponse();
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
  fromPartial(_: DeepPartial<MsgVoteProposalResponse>): MsgVoteProposalResponse {
    const message = createBaseMsgVoteProposalResponse();
    return message;
  },
  fromAmino(_: MsgVoteProposalResponseAmino): MsgVoteProposalResponse {
    const message = createBaseMsgVoteProposalResponse();
    return message;
  },
  toAmino(_: MsgVoteProposalResponse): MsgVoteProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteProposalResponseAminoMsg): MsgVoteProposalResponse {
    return MsgVoteProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoteProposalResponseProtoMsg): MsgVoteProposalResponse {
    return MsgVoteProposalResponse.decode(message.value);
  },
  toProto(message: MsgVoteProposalResponse): Uint8Array {
    return MsgVoteProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteProposalResponse): MsgVoteProposalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgVoteProposalResponse",
      value: MsgVoteProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteProposal(): MsgExecuteProposal {
  return {
    executor: "",
    proposalId: BigInt(0)
  };
}
/**
 * MsgExecuteProposal executes an accepted proposal.
 * @name MsgExecuteProposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgExecuteProposal
 */
export const MsgExecuteProposal = {
  typeUrl: "/sparkdream.commons.v1.MsgExecuteProposal",
  encode(message: MsgExecuteProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.executor !== "") {
      writer.uint32(10).string(message.executor);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executor = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgExecuteProposal>): MsgExecuteProposal {
    const message = createBaseMsgExecuteProposal();
    message.executor = object.executor ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgExecuteProposalAmino): MsgExecuteProposal {
    const message = createBaseMsgExecuteProposal();
    if (object.executor !== undefined && object.executor !== null) {
      message.executor = object.executor;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgExecuteProposal): MsgExecuteProposalAmino {
    const obj: any = {};
    obj.executor = message.executor === "" ? undefined : message.executor;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteProposalAminoMsg): MsgExecuteProposal {
    return MsgExecuteProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecuteProposalProtoMsg): MsgExecuteProposal {
    return MsgExecuteProposal.decode(message.value);
  },
  toProto(message: MsgExecuteProposal): Uint8Array {
    return MsgExecuteProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteProposal): MsgExecuteProposalProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgExecuteProposal",
      value: MsgExecuteProposal.encode(message).finish()
    };
  }
};
function createBaseMsgExecuteProposalResponse(): MsgExecuteProposalResponse {
  return {};
}
/**
 * MsgExecuteProposalResponse defines the response for ExecuteProposal.
 * @name MsgExecuteProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgExecuteProposalResponse
 */
export const MsgExecuteProposalResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgExecuteProposalResponse",
  encode(_: MsgExecuteProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteProposalResponse();
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
  fromPartial(_: DeepPartial<MsgExecuteProposalResponse>): MsgExecuteProposalResponse {
    const message = createBaseMsgExecuteProposalResponse();
    return message;
  },
  fromAmino(_: MsgExecuteProposalResponseAmino): MsgExecuteProposalResponse {
    const message = createBaseMsgExecuteProposalResponse();
    return message;
  },
  toAmino(_: MsgExecuteProposalResponse): MsgExecuteProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExecuteProposalResponseAminoMsg): MsgExecuteProposalResponse {
    return MsgExecuteProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecuteProposalResponseProtoMsg): MsgExecuteProposalResponse {
    return MsgExecuteProposalResponse.decode(message.value);
  },
  toProto(message: MsgExecuteProposalResponse): Uint8Array {
    return MsgExecuteProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteProposalResponse): MsgExecuteProposalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgExecuteProposalResponse",
      value: MsgExecuteProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitAnonymousProposal(): MsgSubmitAnonymousProposal {
  return {
    proposer: "",
    policyAddress: "",
    messages: [],
    metadata: ""
  };
}
/**
 * MsgSubmitAnonymousProposal creates a proposal through the x/shield module.
 * The proposer field must be the shield module account address, verified by
 * the shield's ZK proof and encrypted batch execution. This enables anonymous
 * governance proposals where the identity of the proposer is hidden.
 * @name MsgSubmitAnonymousProposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSubmitAnonymousProposal
 */
export const MsgSubmitAnonymousProposal = {
  typeUrl: "/sparkdream.commons.v1.MsgSubmitAnonymousProposal",
  aminoType: "sparkdream/x/commons/MsgSubmitAnonymousProposal",
  encode(message: MsgSubmitAnonymousProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.policyAddress !== "") {
      writer.uint32(18).string(message.policyAddress);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitAnonymousProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitAnonymousProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.policyAddress = reader.string();
          break;
        case 3:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 4:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitAnonymousProposal>): MsgSubmitAnonymousProposal {
    const message = createBaseMsgSubmitAnonymousProposal();
    message.proposer = object.proposer ?? "";
    message.policyAddress = object.policyAddress ?? "";
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitAnonymousProposalAmino): MsgSubmitAnonymousProposal {
    const message = createBaseMsgSubmitAnonymousProposal();
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.policy_address !== undefined && object.policy_address !== null) {
      message.policyAddress = object.policy_address;
    }
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgSubmitAnonymousProposal): MsgSubmitAnonymousProposalAmino {
    const obj: any = {};
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.policy_address = message.policyAddress === "" ? undefined : message.policyAddress;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = message.messages;
    }
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitAnonymousProposalAminoMsg): MsgSubmitAnonymousProposal {
    return MsgSubmitAnonymousProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitAnonymousProposal): MsgSubmitAnonymousProposalAminoMsg {
    return {
      type: "sparkdream/x/commons/MsgSubmitAnonymousProposal",
      value: MsgSubmitAnonymousProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitAnonymousProposalProtoMsg): MsgSubmitAnonymousProposal {
    return MsgSubmitAnonymousProposal.decode(message.value);
  },
  toProto(message: MsgSubmitAnonymousProposal): Uint8Array {
    return MsgSubmitAnonymousProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitAnonymousProposal): MsgSubmitAnonymousProposalProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgSubmitAnonymousProposal",
      value: MsgSubmitAnonymousProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitAnonymousProposalResponse(): MsgSubmitAnonymousProposalResponse {
  return {
    proposalId: BigInt(0)
  };
}
/**
 * MsgSubmitAnonymousProposalResponse defines the response for SubmitAnonymousProposal.
 * @name MsgSubmitAnonymousProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgSubmitAnonymousProposalResponse
 */
export const MsgSubmitAnonymousProposalResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgSubmitAnonymousProposalResponse",
  encode(message: MsgSubmitAnonymousProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitAnonymousProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitAnonymousProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitAnonymousProposalResponse>): MsgSubmitAnonymousProposalResponse {
    const message = createBaseMsgSubmitAnonymousProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSubmitAnonymousProposalResponseAmino): MsgSubmitAnonymousProposalResponse {
    const message = createBaseMsgSubmitAnonymousProposalResponse();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgSubmitAnonymousProposalResponse): MsgSubmitAnonymousProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitAnonymousProposalResponseAminoMsg): MsgSubmitAnonymousProposalResponse {
    return MsgSubmitAnonymousProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitAnonymousProposalResponseProtoMsg): MsgSubmitAnonymousProposalResponse {
    return MsgSubmitAnonymousProposalResponse.decode(message.value);
  },
  toProto(message: MsgSubmitAnonymousProposalResponse): Uint8Array {
    return MsgSubmitAnonymousProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitAnonymousProposalResponse): MsgSubmitAnonymousProposalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgSubmitAnonymousProposalResponse",
      value: MsgSubmitAnonymousProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAnonymousVoteProposal(): MsgAnonymousVoteProposal {
  return {
    voter: "",
    proposalId: BigInt(0),
    option: 0,
    metadata: ""
  };
}
/**
 * MsgAnonymousVoteProposal casts an anonymous vote on a proposal through x/shield.
 * The voter field must be the shield module account address, verified by the shield's
 * ZK proof. Each anonymous vote has uniform weight=1. Anonymous votes are tallied
 * separately and combined with regular council votes for threshold checks.
 * @name MsgAnonymousVoteProposal
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgAnonymousVoteProposal
 */
export const MsgAnonymousVoteProposal = {
  typeUrl: "/sparkdream.commons.v1.MsgAnonymousVoteProposal",
  aminoType: "sparkdream/x/commons/MsgAnonymousVoteProposal",
  encode(message: MsgAnonymousVoteProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAnonymousVoteProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnonymousVoteProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        case 4:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAnonymousVoteProposal>): MsgAnonymousVoteProposal {
    const message = createBaseMsgAnonymousVoteProposal();
    message.voter = object.voter ?? "";
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgAnonymousVoteProposalAmino): MsgAnonymousVoteProposal {
    const message = createBaseMsgAnonymousVoteProposal();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgAnonymousVoteProposal): MsgAnonymousVoteProposalAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.option = message.option === 0 ? undefined : message.option;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgAnonymousVoteProposalAminoMsg): MsgAnonymousVoteProposal {
    return MsgAnonymousVoteProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAnonymousVoteProposal): MsgAnonymousVoteProposalAminoMsg {
    return {
      type: "sparkdream/x/commons/MsgAnonymousVoteProposal",
      value: MsgAnonymousVoteProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAnonymousVoteProposalProtoMsg): MsgAnonymousVoteProposal {
    return MsgAnonymousVoteProposal.decode(message.value);
  },
  toProto(message: MsgAnonymousVoteProposal): Uint8Array {
    return MsgAnonymousVoteProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgAnonymousVoteProposal): MsgAnonymousVoteProposalProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgAnonymousVoteProposal",
      value: MsgAnonymousVoteProposal.encode(message).finish()
    };
  }
};
function createBaseMsgAnonymousVoteProposalResponse(): MsgAnonymousVoteProposalResponse {
  return {};
}
/**
 * MsgAnonymousVoteProposalResponse defines the response for AnonymousVoteProposal.
 * @name MsgAnonymousVoteProposalResponse
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.MsgAnonymousVoteProposalResponse
 */
export const MsgAnonymousVoteProposalResponse = {
  typeUrl: "/sparkdream.commons.v1.MsgAnonymousVoteProposalResponse",
  encode(_: MsgAnonymousVoteProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAnonymousVoteProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnonymousVoteProposalResponse();
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
  fromPartial(_: DeepPartial<MsgAnonymousVoteProposalResponse>): MsgAnonymousVoteProposalResponse {
    const message = createBaseMsgAnonymousVoteProposalResponse();
    return message;
  },
  fromAmino(_: MsgAnonymousVoteProposalResponseAmino): MsgAnonymousVoteProposalResponse {
    const message = createBaseMsgAnonymousVoteProposalResponse();
    return message;
  },
  toAmino(_: MsgAnonymousVoteProposalResponse): MsgAnonymousVoteProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAnonymousVoteProposalResponseAminoMsg): MsgAnonymousVoteProposalResponse {
    return MsgAnonymousVoteProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAnonymousVoteProposalResponseProtoMsg): MsgAnonymousVoteProposalResponse {
    return MsgAnonymousVoteProposalResponse.decode(message.value);
  },
  toProto(message: MsgAnonymousVoteProposalResponse): Uint8Array {
    return MsgAnonymousVoteProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAnonymousVoteProposalResponse): MsgAnonymousVoteProposalResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.MsgAnonymousVoteProposalResponse",
      value: MsgAnonymousVoteProposalResponse.encode(message).finish()
    };
  }
};