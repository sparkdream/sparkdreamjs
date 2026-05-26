//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgSpendFromCommons, MsgSpendFromCommonsResponse, MsgEmergencyCancelGovProposal, MsgEmergencyCancelGovProposalResponse, MsgCreatePolicyPermissions, MsgCreatePolicyPermissionsResponse, MsgUpdatePolicyPermissions, MsgUpdatePolicyPermissionsResponse, MsgDeletePolicyPermissions, MsgDeletePolicyPermissionsResponse, MsgRegisterGroup, MsgRegisterGroupResponse, MsgRenewGroup, MsgRenewGroupResponse, MsgUpdateGroupMembers, MsgUpdateGroupMembersResponse, MsgUpdateGroupConfig, MsgUpdateGroupConfigResponse, MsgForceUpgrade, MsgForceUpgradeResponse, MsgDeleteGroup, MsgDeleteGroupResponse, MsgVetoGroupProposals, MsgVetoGroupProposalsResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgVoteProposal, MsgVoteProposalResponse, MsgExecuteProposal, MsgExecuteProposalResponse, MsgSubmitAnonymousProposal, MsgSubmitAnonymousProposalResponse, MsgAnonymousVoteProposal, MsgAnonymousVoteProposalResponse, MsgCreateCategory, MsgCreateCategoryResponse, MsgDeleteCategory, MsgDeleteCategoryResponse, MsgScheduleRecurringSpend, MsgScheduleRecurringSpendResponse, MsgCancelRecurringSpend, MsgCancelRecurringSpendResponse, MsgClaimRecurringSpend, MsgClaimRecurringSpendResponse, MsgDeclineRecurringSpend, MsgDeclineRecurringSpendResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** SpendFromCommons defines a method for the council to spend funds. */
  spendFromCommons(request: MsgSpendFromCommons): Promise<MsgSpendFromCommonsResponse>;
  /** EmergencyCancelGovProposal defines a method for the council to kill a proposal. */
  emergencyCancelGovProposal(request: MsgEmergencyCancelGovProposal): Promise<MsgEmergencyCancelGovProposalResponse>;
  /** CreatePolicyPermissions defines the CreatePolicyPermissions RPC. */
  createPolicyPermissions(request: MsgCreatePolicyPermissions): Promise<MsgCreatePolicyPermissionsResponse>;
  /** UpdatePolicyPermissions defines the UpdatePolicyPermissions RPC. */
  updatePolicyPermissions(request: MsgUpdatePolicyPermissions): Promise<MsgUpdatePolicyPermissionsResponse>;
  /** DeletePolicyPermissions defines the DeletePolicyPermissions RPC. */
  deletePolicyPermissions(request: MsgDeletePolicyPermissions): Promise<MsgDeletePolicyPermissionsResponse>;
  /** RegisterGroup defines the RegisterGroup RPC. */
  registerGroup(request: MsgRegisterGroup): Promise<MsgRegisterGroupResponse>;
  /** RenewGroup defines the RenewGroup RPC. */
  renewGroup(request: MsgRenewGroup): Promise<MsgRenewGroupResponse>;
  /** UpdateGroupMembers defines the UpdateGroupMembers RPC. */
  updateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse>;
  /** UpdateGroupConfig defines the UpdateGroupConfig RPC. */
  updateGroupConfig(request: MsgUpdateGroupConfig): Promise<MsgUpdateGroupConfigResponse>;
  /** ForceUpgrade defines the ForceUpgrade RPC. */
  forceUpgrade(request: MsgForceUpgrade): Promise<MsgForceUpgradeResponse>;
  /** DeleteGroup defines the DeleteGroup RPC. */
  deleteGroup(request: MsgDeleteGroup): Promise<MsgDeleteGroupResponse>;
  /** VetoGroupProposals defines the VetoGroupProposals RPC. */
  vetoGroupProposals(request: MsgVetoGroupProposals): Promise<MsgVetoGroupProposalsResponse>;
  /** SubmitProposal submits a new proposal to a council for voting. */
  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
  /** VoteProposal casts a vote on an active proposal. */
  voteProposal(request: MsgVoteProposal): Promise<MsgVoteProposalResponse>;
  /** ExecuteProposal executes an accepted proposal. */
  executeProposal(request: MsgExecuteProposal): Promise<MsgExecuteProposalResponse>;
  /**
   * SubmitAnonymousProposal creates a proposal through the x/shield module.
   * The proposer must be the shield module account (verified by shield ZK proof).
   */
  submitAnonymousProposal(request: MsgSubmitAnonymousProposal): Promise<MsgSubmitAnonymousProposalResponse>;
  /**
   * AnonymousVoteProposal casts an anonymous vote on a proposal through x/shield.
   * The voter must be the shield module account (verified by shield ZK proof).
   */
  anonymousVoteProposal(request: MsgAnonymousVoteProposal): Promise<MsgAnonymousVoteProposalResponse>;
  /**
   * CreateCategory registers a new shared content category. Restricted to
   * governance or the Commons Council Operations Committee.
   */
  createCategory(request: MsgCreateCategory): Promise<MsgCreateCategoryResponse>;
  deleteCategory(request: MsgDeleteCategory): Promise<MsgDeleteCategoryResponse>;
  /**
   * ScheduleRecurringSpend schedules a council-approved recurring
   * disbursement. The signer must be the council policy address (so it is
   * wrapped in a MsgSubmitProposal).
   */
  scheduleRecurringSpend(request: MsgScheduleRecurringSpend): Promise<MsgScheduleRecurringSpendResponse>;
  /**
   * CancelRecurringSpend cancels an active recurring spend schedule. The
   * signer must be the same council policy address that scheduled it,
   * requiring a council proposal.
   */
  cancelRecurringSpend(request: MsgCancelRecurringSpend): Promise<MsgCancelRecurringSpendResponse>;
  /**
   * ClaimRecurringSpend disburses one period of an active recurring
   * spend. The signer must be the recipient. Each claim advances the
   * schedule's logical clock by exactly one period.
   */
  claimRecurringSpend(request: MsgClaimRecurringSpend): Promise<MsgClaimRecurringSpendResponse>;
  /**
   * DeclineRecurringSpend lets the recipient unilaterally opt out of
   * future claims on a schedule (graceful exit when leaving a role). The
   * signer must be the recipient.
   */
  declineRecurringSpend(request: MsgDeclineRecurringSpend): Promise<MsgDeclineRecurringSpendResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a (governance) operation for updating the module
   parameters. The authority defaults to the x/gov module account. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* SpendFromCommons defines a method for the council to spend funds. */
  spendFromCommons = async (request: MsgSpendFromCommons): Promise<MsgSpendFromCommonsResponse> => {
    const data = MsgSpendFromCommons.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "SpendFromCommons", data);
    return promise.then(data => MsgSpendFromCommonsResponse.decode(new BinaryReader(data)));
  };
  /* EmergencyCancelGovProposal defines a method for the council to kill a proposal. */
  emergencyCancelGovProposal = async (request: MsgEmergencyCancelGovProposal): Promise<MsgEmergencyCancelGovProposalResponse> => {
    const data = MsgEmergencyCancelGovProposal.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "EmergencyCancelGovProposal", data);
    return promise.then(data => MsgEmergencyCancelGovProposalResponse.decode(new BinaryReader(data)));
  };
  /* CreatePolicyPermissions defines the CreatePolicyPermissions RPC. */
  createPolicyPermissions = async (request: MsgCreatePolicyPermissions): Promise<MsgCreatePolicyPermissionsResponse> => {
    const data = MsgCreatePolicyPermissions.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "CreatePolicyPermissions", data);
    return promise.then(data => MsgCreatePolicyPermissionsResponse.decode(new BinaryReader(data)));
  };
  /* UpdatePolicyPermissions defines the UpdatePolicyPermissions RPC. */
  updatePolicyPermissions = async (request: MsgUpdatePolicyPermissions): Promise<MsgUpdatePolicyPermissionsResponse> => {
    const data = MsgUpdatePolicyPermissions.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "UpdatePolicyPermissions", data);
    return promise.then(data => MsgUpdatePolicyPermissionsResponse.decode(new BinaryReader(data)));
  };
  /* DeletePolicyPermissions defines the DeletePolicyPermissions RPC. */
  deletePolicyPermissions = async (request: MsgDeletePolicyPermissions): Promise<MsgDeletePolicyPermissionsResponse> => {
    const data = MsgDeletePolicyPermissions.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "DeletePolicyPermissions", data);
    return promise.then(data => MsgDeletePolicyPermissionsResponse.decode(new BinaryReader(data)));
  };
  /* RegisterGroup defines the RegisterGroup RPC. */
  registerGroup = async (request: MsgRegisterGroup): Promise<MsgRegisterGroupResponse> => {
    const data = MsgRegisterGroup.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "RegisterGroup", data);
    return promise.then(data => MsgRegisterGroupResponse.decode(new BinaryReader(data)));
  };
  /* RenewGroup defines the RenewGroup RPC. */
  renewGroup = async (request: MsgRenewGroup): Promise<MsgRenewGroupResponse> => {
    const data = MsgRenewGroup.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "RenewGroup", data);
    return promise.then(data => MsgRenewGroupResponse.decode(new BinaryReader(data)));
  };
  /* UpdateGroupMembers defines the UpdateGroupMembers RPC. */
  updateGroupMembers = async (request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse> => {
    const data = MsgUpdateGroupMembers.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "UpdateGroupMembers", data);
    return promise.then(data => MsgUpdateGroupMembersResponse.decode(new BinaryReader(data)));
  };
  /* UpdateGroupConfig defines the UpdateGroupConfig RPC. */
  updateGroupConfig = async (request: MsgUpdateGroupConfig): Promise<MsgUpdateGroupConfigResponse> => {
    const data = MsgUpdateGroupConfig.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "UpdateGroupConfig", data);
    return promise.then(data => MsgUpdateGroupConfigResponse.decode(new BinaryReader(data)));
  };
  /* ForceUpgrade defines the ForceUpgrade RPC. */
  forceUpgrade = async (request: MsgForceUpgrade): Promise<MsgForceUpgradeResponse> => {
    const data = MsgForceUpgrade.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "ForceUpgrade", data);
    return promise.then(data => MsgForceUpgradeResponse.decode(new BinaryReader(data)));
  };
  /* DeleteGroup defines the DeleteGroup RPC. */
  deleteGroup = async (request: MsgDeleteGroup): Promise<MsgDeleteGroupResponse> => {
    const data = MsgDeleteGroup.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "DeleteGroup", data);
    return promise.then(data => MsgDeleteGroupResponse.decode(new BinaryReader(data)));
  };
  /* VetoGroupProposals defines the VetoGroupProposals RPC. */
  vetoGroupProposals = async (request: MsgVetoGroupProposals): Promise<MsgVetoGroupProposalsResponse> => {
    const data = MsgVetoGroupProposals.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "VetoGroupProposals", data);
    return promise.then(data => MsgVetoGroupProposalsResponse.decode(new BinaryReader(data)));
  };
  /* SubmitProposal submits a new proposal to a council for voting. */
  submitProposal = async (request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> => {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "SubmitProposal", data);
    return promise.then(data => MsgSubmitProposalResponse.decode(new BinaryReader(data)));
  };
  /* VoteProposal casts a vote on an active proposal. */
  voteProposal = async (request: MsgVoteProposal): Promise<MsgVoteProposalResponse> => {
    const data = MsgVoteProposal.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "VoteProposal", data);
    return promise.then(data => MsgVoteProposalResponse.decode(new BinaryReader(data)));
  };
  /* ExecuteProposal executes an accepted proposal. */
  executeProposal = async (request: MsgExecuteProposal): Promise<MsgExecuteProposalResponse> => {
    const data = MsgExecuteProposal.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "ExecuteProposal", data);
    return promise.then(data => MsgExecuteProposalResponse.decode(new BinaryReader(data)));
  };
  /* SubmitAnonymousProposal creates a proposal through the x/shield module.
   The proposer must be the shield module account (verified by shield ZK proof). */
  submitAnonymousProposal = async (request: MsgSubmitAnonymousProposal): Promise<MsgSubmitAnonymousProposalResponse> => {
    const data = MsgSubmitAnonymousProposal.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "SubmitAnonymousProposal", data);
    return promise.then(data => MsgSubmitAnonymousProposalResponse.decode(new BinaryReader(data)));
  };
  /* AnonymousVoteProposal casts an anonymous vote on a proposal through x/shield.
   The voter must be the shield module account (verified by shield ZK proof). */
  anonymousVoteProposal = async (request: MsgAnonymousVoteProposal): Promise<MsgAnonymousVoteProposalResponse> => {
    const data = MsgAnonymousVoteProposal.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "AnonymousVoteProposal", data);
    return promise.then(data => MsgAnonymousVoteProposalResponse.decode(new BinaryReader(data)));
  };
  /* CreateCategory registers a new shared content category. Restricted to
   governance or the Commons Council Operations Committee. */
  createCategory = async (request: MsgCreateCategory): Promise<MsgCreateCategoryResponse> => {
    const data = MsgCreateCategory.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "CreateCategory", data);
    return promise.then(data => MsgCreateCategoryResponse.decode(new BinaryReader(data)));
  };
  /* DeleteCategory */
  deleteCategory = async (request: MsgDeleteCategory): Promise<MsgDeleteCategoryResponse> => {
    const data = MsgDeleteCategory.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "DeleteCategory", data);
    return promise.then(data => MsgDeleteCategoryResponse.decode(new BinaryReader(data)));
  };
  /* ScheduleRecurringSpend schedules a council-approved recurring
   disbursement. The signer must be the council policy address (so it is
   wrapped in a MsgSubmitProposal). */
  scheduleRecurringSpend = async (request: MsgScheduleRecurringSpend): Promise<MsgScheduleRecurringSpendResponse> => {
    const data = MsgScheduleRecurringSpend.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "ScheduleRecurringSpend", data);
    return promise.then(data => MsgScheduleRecurringSpendResponse.decode(new BinaryReader(data)));
  };
  /* CancelRecurringSpend cancels an active recurring spend schedule. The
   signer must be the same council policy address that scheduled it,
   requiring a council proposal. */
  cancelRecurringSpend = async (request: MsgCancelRecurringSpend): Promise<MsgCancelRecurringSpendResponse> => {
    const data = MsgCancelRecurringSpend.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "CancelRecurringSpend", data);
    return promise.then(data => MsgCancelRecurringSpendResponse.decode(new BinaryReader(data)));
  };
  /* ClaimRecurringSpend disburses one period of an active recurring
   spend. The signer must be the recipient. Each claim advances the
   schedule's logical clock by exactly one period. */
  claimRecurringSpend = async (request: MsgClaimRecurringSpend): Promise<MsgClaimRecurringSpendResponse> => {
    const data = MsgClaimRecurringSpend.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "ClaimRecurringSpend", data);
    return promise.then(data => MsgClaimRecurringSpendResponse.decode(new BinaryReader(data)));
  };
  /* DeclineRecurringSpend lets the recipient unilaterally opt out of
   future claims on a schedule (graceful exit when leaving a role). The
   signer must be the recipient. */
  declineRecurringSpend = async (request: MsgDeclineRecurringSpend): Promise<MsgDeclineRecurringSpendResponse> => {
    const data = MsgDeclineRecurringSpend.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Msg", "DeclineRecurringSpend", data);
    return promise.then(data => MsgDeclineRecurringSpendResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};