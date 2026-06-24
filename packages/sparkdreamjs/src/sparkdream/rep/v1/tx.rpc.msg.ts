//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse, MsgInviteMember, MsgInviteMemberResponse, MsgAcceptInvitation, MsgAcceptInvitationResponse, MsgTransferDream, MsgTransferDreamResponse, MsgCreateInterim, MsgCreateInterimResponse, MsgAssignInterim, MsgAssignInterimResponse, MsgSubmitInterimWork, MsgSubmitInterimWorkResponse, MsgApproveInterim, MsgApproveInterimResponse, MsgAbandonInterim, MsgAbandonInterimResponse, MsgCompleteInterim, MsgCompleteInterimResponse, MsgProposeProject, MsgProposeProjectResponse, MsgApproveProjectBudget, MsgApproveProjectBudgetResponse, MsgCancelProject, MsgCancelProjectResponse, MsgCreateInitiative, MsgCreateInitiativeResponse, MsgAssignInitiative, MsgAssignInitiativeResponse, MsgSubmitInitiativeWork, MsgSubmitInitiativeWorkResponse, MsgApproveInitiative, MsgApproveInitiativeResponse, MsgAbandonInitiative, MsgAbandonInitiativeResponse, MsgCompleteInitiative, MsgCompleteInitiativeResponse, MsgStake, MsgStakeResponse, MsgUnstake, MsgUnstakeResponse, MsgClaimStakingRewards, MsgClaimStakingRewardsResponse, MsgCompoundStakingRewards, MsgCompoundStakingRewardsResponse, MsgCreateChallenge, MsgCreateChallengeResponse, MsgRespondToChallenge, MsgRespondToChallengeResponse, MsgSubmitJurorVote, MsgSubmitJurorVoteResponse, MsgSubmitExpertTestimony, MsgSubmitExpertTestimonyResponse, MsgChallengeContent, MsgChallengeContentResponse, MsgRespondToContentChallenge, MsgRespondToContentChallengeResponse, MsgRegisterZkPublicKey, MsgRegisterZkPublicKeyResponse, MsgCreateTag, MsgCreateTagResponse, MsgReportTag, MsgReportTagResponse, MsgResolveTagReport, MsgResolveTagReportResponse, MsgCreateTagBudget, MsgCreateTagBudgetResponse, MsgAwardFromTagBudget, MsgAwardFromTagBudgetResponse, MsgTopUpTagBudget, MsgTopUpTagBudgetResponse, MsgToggleTagBudget, MsgToggleTagBudgetResponse, MsgWithdrawTagBudget, MsgWithdrawTagBudgetResponse, MsgBondRole, MsgBondRoleResponse, MsgUnbondRole, MsgUnbondRoleResponse, MsgCancelUnbondRole, MsgCancelUnbondRoleResponse, MsgReportMember, MsgReportMemberResponse, MsgCosignMemberReport, MsgCosignMemberReportResponse, MsgResolveMemberReport, MsgResolveMemberReportResponse, MsgDefendMemberReport, MsgDefendMemberReportResponse, MsgAppealGovAction, MsgAppealGovActionResponse, MsgResolveGovActionAppeal, MsgResolveGovActionAppealResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * UpdateOperationalParams defines an operation for updating operational
   * parameters. Can be called by committee/council authority.
   */
  updateOperationalParams(request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse>;
  /** InviteMember defines the InviteMember RPC. */
  inviteMember(request: MsgInviteMember): Promise<MsgInviteMemberResponse>;
  /** AcceptInvitation defines the AcceptInvitation RPC. */
  acceptInvitation(request: MsgAcceptInvitation): Promise<MsgAcceptInvitationResponse>;
  /** TransferDream defines the TransferDream RPC. */
  transferDream(request: MsgTransferDream): Promise<MsgTransferDreamResponse>;
  /** CreateInterim defines the CreateInterim RPC. */
  createInterim(request: MsgCreateInterim): Promise<MsgCreateInterimResponse>;
  /** AssignInterim defines the AssignInterim RPC. */
  assignInterim(request: MsgAssignInterim): Promise<MsgAssignInterimResponse>;
  /** SubmitInterimWork defines the SubmitInterimWork RPC. */
  submitInterimWork(request: MsgSubmitInterimWork): Promise<MsgSubmitInterimWorkResponse>;
  /** ApproveInterim defines the ApproveInterim RPC. */
  approveInterim(request: MsgApproveInterim): Promise<MsgApproveInterimResponse>;
  /** AbandonInterim defines the AbandonInterim RPC. */
  abandonInterim(request: MsgAbandonInterim): Promise<MsgAbandonInterimResponse>;
  /** CompleteInterim defines the CompleteInterim RPC. */
  completeInterim(request: MsgCompleteInterim): Promise<MsgCompleteInterimResponse>;
  /** ProposeProject defines the ProposeProject RPC. */
  proposeProject(request: MsgProposeProject): Promise<MsgProposeProjectResponse>;
  /** ApproveProjectBudget defines the ApproveProjectBudget RPC. */
  approveProjectBudget(request: MsgApproveProjectBudget): Promise<MsgApproveProjectBudgetResponse>;
  /** CancelProject defines the CancelProject RPC. */
  cancelProject(request: MsgCancelProject): Promise<MsgCancelProjectResponse>;
  /** CreateInitiative defines the CreateInitiative RPC. */
  createInitiative(request: MsgCreateInitiative): Promise<MsgCreateInitiativeResponse>;
  /** AssignInitiative defines the AssignInitiative RPC. */
  assignInitiative(request: MsgAssignInitiative): Promise<MsgAssignInitiativeResponse>;
  /** SubmitInitiativeWork defines the SubmitInitiativeWork RPC. */
  submitInitiativeWork(request: MsgSubmitInitiativeWork): Promise<MsgSubmitInitiativeWorkResponse>;
  /** ApproveInitiative defines the ApproveInitiative RPC. */
  approveInitiative(request: MsgApproveInitiative): Promise<MsgApproveInitiativeResponse>;
  /** AbandonInitiative defines the AbandonInitiative RPC. */
  abandonInitiative(request: MsgAbandonInitiative): Promise<MsgAbandonInitiativeResponse>;
  /** CompleteInitiative defines the CompleteInitiative RPC. */
  completeInitiative(request: MsgCompleteInitiative): Promise<MsgCompleteInitiativeResponse>;
  /** Stake defines the Stake RPC. */
  stake(request: MsgStake): Promise<MsgStakeResponse>;
  /** Unstake defines the Unstake RPC. */
  unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
  /** ClaimStakingRewards defines the ClaimStakingRewards RPC. */
  claimStakingRewards(request: MsgClaimStakingRewards): Promise<MsgClaimStakingRewardsResponse>;
  /** CompoundStakingRewards defines the CompoundStakingRewards RPC. */
  compoundStakingRewards(request: MsgCompoundStakingRewards): Promise<MsgCompoundStakingRewardsResponse>;
  /** CreateChallenge defines the CreateChallenge RPC. */
  createChallenge(request: MsgCreateChallenge): Promise<MsgCreateChallengeResponse>;
  /** RespondToChallenge defines the RespondToChallenge RPC. */
  respondToChallenge(request: MsgRespondToChallenge): Promise<MsgRespondToChallengeResponse>;
  /** SubmitJurorVote defines the SubmitJurorVote RPC. */
  submitJurorVote(request: MsgSubmitJurorVote): Promise<MsgSubmitJurorVoteResponse>;
  /** SubmitExpertTestimony defines the SubmitExpertTestimony RPC. */
  submitExpertTestimony(request: MsgSubmitExpertTestimony): Promise<MsgSubmitExpertTestimonyResponse>;
  /** ChallengeContent creates a challenge against bonded content. */
  challengeContent(request: MsgChallengeContent): Promise<MsgChallengeContentResponse>;
  /** RespondToContentChallenge allows the content author to respond to a challenge. */
  respondToContentChallenge(request: MsgRespondToContentChallenge): Promise<MsgRespondToContentChallengeResponse>;
  /** RegisterZkPublicKey defines the RegisterZkPublicKey RPC. */
  registerZkPublicKey(request: MsgRegisterZkPublicKey): Promise<MsgRegisterZkPublicKeyResponse>;
  /**
   * CreateTag defines the CreateTag RPC. Permissionless tag registry creation
   * for members meeting the minimum trust level. Deducts the tag-creation fee
   * from the creator (split between burn and community pool).
   */
  createTag(request: MsgCreateTag): Promise<MsgCreateTagResponse>;
  /** ReportTag defines the ReportTag RPC. */
  reportTag(request: MsgReportTag): Promise<MsgReportTagResponse>;
  /** ResolveTagReport defines the ResolveTagReport RPC. */
  resolveTagReport(request: MsgResolveTagReport): Promise<MsgResolveTagReportResponse>;
  /** CreateTagBudget defines the CreateTagBudget RPC. */
  createTagBudget(request: MsgCreateTagBudget): Promise<MsgCreateTagBudgetResponse>;
  /** AwardFromTagBudget defines the AwardFromTagBudget RPC. */
  awardFromTagBudget(request: MsgAwardFromTagBudget): Promise<MsgAwardFromTagBudgetResponse>;
  /** TopUpTagBudget defines the TopUpTagBudget RPC. */
  topUpTagBudget(request: MsgTopUpTagBudget): Promise<MsgTopUpTagBudgetResponse>;
  /** ToggleTagBudget defines the ToggleTagBudget RPC. */
  toggleTagBudget(request: MsgToggleTagBudget): Promise<MsgToggleTagBudgetResponse>;
  /** WithdrawTagBudget defines the WithdrawTagBudget RPC. */
  withdrawTagBudget(request: MsgWithdrawTagBudget): Promise<MsgWithdrawTagBudgetResponse>;
  /**
   * BondRole locks DREAM against (role_type, creator) and creates or updates
   * the BondedRole record. Used to register as a forum sentinel, collect
   * curator, federation verifier, etc. — role-specific eligibility comes from
   * the role's BondedRoleConfig.
   */
  bondRole(request: MsgBondRole): Promise<MsgBondRoleResponse>;
  /**
   * UnbondRole withdraws a portion of the caller's bond for the given
   * role_type (subject to committed-bond constraints).
   */
  unbondRole(request: MsgUnbondRole): Promise<MsgUnbondRoleResponse>;
  /**
   * CancelUnbondRole cancels (reduces) an in-flight unbond, returning the
   * cancelled amount to active bond without waiting out the cooldown.
   */
  cancelUnbondRole(request: MsgCancelUnbondRole): Promise<MsgCancelUnbondRoleResponse>;
  /** ReportMember defines the ReportMember RPC. */
  reportMember(request: MsgReportMember): Promise<MsgReportMemberResponse>;
  /** CosignMemberReport defines the CosignMemberReport RPC. */
  cosignMemberReport(request: MsgCosignMemberReport): Promise<MsgCosignMemberReportResponse>;
  /** ResolveMemberReport defines the ResolveMemberReport RPC. */
  resolveMemberReport(request: MsgResolveMemberReport): Promise<MsgResolveMemberReportResponse>;
  /** DefendMemberReport defines the DefendMemberReport RPC. */
  defendMemberReport(request: MsgDefendMemberReport): Promise<MsgDefendMemberReportResponse>;
  /** AppealGovAction defines the AppealGovAction RPC. */
  appealGovAction(request: MsgAppealGovAction): Promise<MsgAppealGovActionResponse>;
  /**
   * ResolveGovActionAppeal defines the ResolveGovActionAppeal RPC. Resolves
   * a pending gov action appeal via council authority (UPHELD or OVERTURNED).
   */
  resolveGovActionAppeal(request: MsgResolveGovActionAppeal): Promise<MsgResolveGovActionAppealResponse>;
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
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpdateOperationalParams defines an operation for updating operational
   parameters. Can be called by committee/council authority. */
  updateOperationalParams = async (request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse> => {
    const data = MsgUpdateOperationalParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "UpdateOperationalParams", data);
    return promise.then(data => MsgUpdateOperationalParamsResponse.decode(new BinaryReader(data)));
  };
  /* InviteMember defines the InviteMember RPC. */
  inviteMember = async (request: MsgInviteMember): Promise<MsgInviteMemberResponse> => {
    const data = MsgInviteMember.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "InviteMember", data);
    return promise.then(data => MsgInviteMemberResponse.decode(new BinaryReader(data)));
  };
  /* AcceptInvitation defines the AcceptInvitation RPC. */
  acceptInvitation = async (request: MsgAcceptInvitation): Promise<MsgAcceptInvitationResponse> => {
    const data = MsgAcceptInvitation.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "AcceptInvitation", data);
    return promise.then(data => MsgAcceptInvitationResponse.decode(new BinaryReader(data)));
  };
  /* TransferDream defines the TransferDream RPC. */
  transferDream = async (request: MsgTransferDream): Promise<MsgTransferDreamResponse> => {
    const data = MsgTransferDream.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "TransferDream", data);
    return promise.then(data => MsgTransferDreamResponse.decode(new BinaryReader(data)));
  };
  /* CreateInterim defines the CreateInterim RPC. */
  createInterim = async (request: MsgCreateInterim): Promise<MsgCreateInterimResponse> => {
    const data = MsgCreateInterim.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "CreateInterim", data);
    return promise.then(data => MsgCreateInterimResponse.decode(new BinaryReader(data)));
  };
  /* AssignInterim defines the AssignInterim RPC. */
  assignInterim = async (request: MsgAssignInterim): Promise<MsgAssignInterimResponse> => {
    const data = MsgAssignInterim.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "AssignInterim", data);
    return promise.then(data => MsgAssignInterimResponse.decode(new BinaryReader(data)));
  };
  /* SubmitInterimWork defines the SubmitInterimWork RPC. */
  submitInterimWork = async (request: MsgSubmitInterimWork): Promise<MsgSubmitInterimWorkResponse> => {
    const data = MsgSubmitInterimWork.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "SubmitInterimWork", data);
    return promise.then(data => MsgSubmitInterimWorkResponse.decode(new BinaryReader(data)));
  };
  /* ApproveInterim defines the ApproveInterim RPC. */
  approveInterim = async (request: MsgApproveInterim): Promise<MsgApproveInterimResponse> => {
    const data = MsgApproveInterim.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "ApproveInterim", data);
    return promise.then(data => MsgApproveInterimResponse.decode(new BinaryReader(data)));
  };
  /* AbandonInterim defines the AbandonInterim RPC. */
  abandonInterim = async (request: MsgAbandonInterim): Promise<MsgAbandonInterimResponse> => {
    const data = MsgAbandonInterim.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "AbandonInterim", data);
    return promise.then(data => MsgAbandonInterimResponse.decode(new BinaryReader(data)));
  };
  /* CompleteInterim defines the CompleteInterim RPC. */
  completeInterim = async (request: MsgCompleteInterim): Promise<MsgCompleteInterimResponse> => {
    const data = MsgCompleteInterim.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "CompleteInterim", data);
    return promise.then(data => MsgCompleteInterimResponse.decode(new BinaryReader(data)));
  };
  /* ProposeProject defines the ProposeProject RPC. */
  proposeProject = async (request: MsgProposeProject): Promise<MsgProposeProjectResponse> => {
    const data = MsgProposeProject.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "ProposeProject", data);
    return promise.then(data => MsgProposeProjectResponse.decode(new BinaryReader(data)));
  };
  /* ApproveProjectBudget defines the ApproveProjectBudget RPC. */
  approveProjectBudget = async (request: MsgApproveProjectBudget): Promise<MsgApproveProjectBudgetResponse> => {
    const data = MsgApproveProjectBudget.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "ApproveProjectBudget", data);
    return promise.then(data => MsgApproveProjectBudgetResponse.decode(new BinaryReader(data)));
  };
  /* CancelProject defines the CancelProject RPC. */
  cancelProject = async (request: MsgCancelProject): Promise<MsgCancelProjectResponse> => {
    const data = MsgCancelProject.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "CancelProject", data);
    return promise.then(data => MsgCancelProjectResponse.decode(new BinaryReader(data)));
  };
  /* CreateInitiative defines the CreateInitiative RPC. */
  createInitiative = async (request: MsgCreateInitiative): Promise<MsgCreateInitiativeResponse> => {
    const data = MsgCreateInitiative.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "CreateInitiative", data);
    return promise.then(data => MsgCreateInitiativeResponse.decode(new BinaryReader(data)));
  };
  /* AssignInitiative defines the AssignInitiative RPC. */
  assignInitiative = async (request: MsgAssignInitiative): Promise<MsgAssignInitiativeResponse> => {
    const data = MsgAssignInitiative.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "AssignInitiative", data);
    return promise.then(data => MsgAssignInitiativeResponse.decode(new BinaryReader(data)));
  };
  /* SubmitInitiativeWork defines the SubmitInitiativeWork RPC. */
  submitInitiativeWork = async (request: MsgSubmitInitiativeWork): Promise<MsgSubmitInitiativeWorkResponse> => {
    const data = MsgSubmitInitiativeWork.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "SubmitInitiativeWork", data);
    return promise.then(data => MsgSubmitInitiativeWorkResponse.decode(new BinaryReader(data)));
  };
  /* ApproveInitiative defines the ApproveInitiative RPC. */
  approveInitiative = async (request: MsgApproveInitiative): Promise<MsgApproveInitiativeResponse> => {
    const data = MsgApproveInitiative.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "ApproveInitiative", data);
    return promise.then(data => MsgApproveInitiativeResponse.decode(new BinaryReader(data)));
  };
  /* AbandonInitiative defines the AbandonInitiative RPC. */
  abandonInitiative = async (request: MsgAbandonInitiative): Promise<MsgAbandonInitiativeResponse> => {
    const data = MsgAbandonInitiative.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "AbandonInitiative", data);
    return promise.then(data => MsgAbandonInitiativeResponse.decode(new BinaryReader(data)));
  };
  /* CompleteInitiative defines the CompleteInitiative RPC. */
  completeInitiative = async (request: MsgCompleteInitiative): Promise<MsgCompleteInitiativeResponse> => {
    const data = MsgCompleteInitiative.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "CompleteInitiative", data);
    return promise.then(data => MsgCompleteInitiativeResponse.decode(new BinaryReader(data)));
  };
  /* Stake defines the Stake RPC. */
  stake = async (request: MsgStake): Promise<MsgStakeResponse> => {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "Stake", data);
    return promise.then(data => MsgStakeResponse.decode(new BinaryReader(data)));
  };
  /* Unstake defines the Unstake RPC. */
  unstake = async (request: MsgUnstake): Promise<MsgUnstakeResponse> => {
    const data = MsgUnstake.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "Unstake", data);
    return promise.then(data => MsgUnstakeResponse.decode(new BinaryReader(data)));
  };
  /* ClaimStakingRewards defines the ClaimStakingRewards RPC. */
  claimStakingRewards = async (request: MsgClaimStakingRewards): Promise<MsgClaimStakingRewardsResponse> => {
    const data = MsgClaimStakingRewards.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "ClaimStakingRewards", data);
    return promise.then(data => MsgClaimStakingRewardsResponse.decode(new BinaryReader(data)));
  };
  /* CompoundStakingRewards defines the CompoundStakingRewards RPC. */
  compoundStakingRewards = async (request: MsgCompoundStakingRewards): Promise<MsgCompoundStakingRewardsResponse> => {
    const data = MsgCompoundStakingRewards.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "CompoundStakingRewards", data);
    return promise.then(data => MsgCompoundStakingRewardsResponse.decode(new BinaryReader(data)));
  };
  /* CreateChallenge defines the CreateChallenge RPC. */
  createChallenge = async (request: MsgCreateChallenge): Promise<MsgCreateChallengeResponse> => {
    const data = MsgCreateChallenge.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "CreateChallenge", data);
    return promise.then(data => MsgCreateChallengeResponse.decode(new BinaryReader(data)));
  };
  /* RespondToChallenge defines the RespondToChallenge RPC. */
  respondToChallenge = async (request: MsgRespondToChallenge): Promise<MsgRespondToChallengeResponse> => {
    const data = MsgRespondToChallenge.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "RespondToChallenge", data);
    return promise.then(data => MsgRespondToChallengeResponse.decode(new BinaryReader(data)));
  };
  /* SubmitJurorVote defines the SubmitJurorVote RPC. */
  submitJurorVote = async (request: MsgSubmitJurorVote): Promise<MsgSubmitJurorVoteResponse> => {
    const data = MsgSubmitJurorVote.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "SubmitJurorVote", data);
    return promise.then(data => MsgSubmitJurorVoteResponse.decode(new BinaryReader(data)));
  };
  /* SubmitExpertTestimony defines the SubmitExpertTestimony RPC. */
  submitExpertTestimony = async (request: MsgSubmitExpertTestimony): Promise<MsgSubmitExpertTestimonyResponse> => {
    const data = MsgSubmitExpertTestimony.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "SubmitExpertTestimony", data);
    return promise.then(data => MsgSubmitExpertTestimonyResponse.decode(new BinaryReader(data)));
  };
  /* ChallengeContent creates a challenge against bonded content. */
  challengeContent = async (request: MsgChallengeContent): Promise<MsgChallengeContentResponse> => {
    const data = MsgChallengeContent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "ChallengeContent", data);
    return promise.then(data => MsgChallengeContentResponse.decode(new BinaryReader(data)));
  };
  /* RespondToContentChallenge allows the content author to respond to a challenge. */
  respondToContentChallenge = async (request: MsgRespondToContentChallenge): Promise<MsgRespondToContentChallengeResponse> => {
    const data = MsgRespondToContentChallenge.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "RespondToContentChallenge", data);
    return promise.then(data => MsgRespondToContentChallengeResponse.decode(new BinaryReader(data)));
  };
  /* RegisterZkPublicKey defines the RegisterZkPublicKey RPC. */
  registerZkPublicKey = async (request: MsgRegisterZkPublicKey): Promise<MsgRegisterZkPublicKeyResponse> => {
    const data = MsgRegisterZkPublicKey.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "RegisterZkPublicKey", data);
    return promise.then(data => MsgRegisterZkPublicKeyResponse.decode(new BinaryReader(data)));
  };
  /* CreateTag defines the CreateTag RPC. Permissionless tag registry creation
   for members meeting the minimum trust level. Deducts the tag-creation fee
   from the creator (split between burn and community pool). */
  createTag = async (request: MsgCreateTag): Promise<MsgCreateTagResponse> => {
    const data = MsgCreateTag.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "CreateTag", data);
    return promise.then(data => MsgCreateTagResponse.decode(new BinaryReader(data)));
  };
  /* ReportTag defines the ReportTag RPC. */
  reportTag = async (request: MsgReportTag): Promise<MsgReportTagResponse> => {
    const data = MsgReportTag.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "ReportTag", data);
    return promise.then(data => MsgReportTagResponse.decode(new BinaryReader(data)));
  };
  /* ResolveTagReport defines the ResolveTagReport RPC. */
  resolveTagReport = async (request: MsgResolveTagReport): Promise<MsgResolveTagReportResponse> => {
    const data = MsgResolveTagReport.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "ResolveTagReport", data);
    return promise.then(data => MsgResolveTagReportResponse.decode(new BinaryReader(data)));
  };
  /* CreateTagBudget defines the CreateTagBudget RPC. */
  createTagBudget = async (request: MsgCreateTagBudget): Promise<MsgCreateTagBudgetResponse> => {
    const data = MsgCreateTagBudget.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "CreateTagBudget", data);
    return promise.then(data => MsgCreateTagBudgetResponse.decode(new BinaryReader(data)));
  };
  /* AwardFromTagBudget defines the AwardFromTagBudget RPC. */
  awardFromTagBudget = async (request: MsgAwardFromTagBudget): Promise<MsgAwardFromTagBudgetResponse> => {
    const data = MsgAwardFromTagBudget.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "AwardFromTagBudget", data);
    return promise.then(data => MsgAwardFromTagBudgetResponse.decode(new BinaryReader(data)));
  };
  /* TopUpTagBudget defines the TopUpTagBudget RPC. */
  topUpTagBudget = async (request: MsgTopUpTagBudget): Promise<MsgTopUpTagBudgetResponse> => {
    const data = MsgTopUpTagBudget.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "TopUpTagBudget", data);
    return promise.then(data => MsgTopUpTagBudgetResponse.decode(new BinaryReader(data)));
  };
  /* ToggleTagBudget defines the ToggleTagBudget RPC. */
  toggleTagBudget = async (request: MsgToggleTagBudget): Promise<MsgToggleTagBudgetResponse> => {
    const data = MsgToggleTagBudget.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "ToggleTagBudget", data);
    return promise.then(data => MsgToggleTagBudgetResponse.decode(new BinaryReader(data)));
  };
  /* WithdrawTagBudget defines the WithdrawTagBudget RPC. */
  withdrawTagBudget = async (request: MsgWithdrawTagBudget): Promise<MsgWithdrawTagBudgetResponse> => {
    const data = MsgWithdrawTagBudget.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "WithdrawTagBudget", data);
    return promise.then(data => MsgWithdrawTagBudgetResponse.decode(new BinaryReader(data)));
  };
  /* BondRole locks DREAM against (role_type, creator) and creates or updates
   the BondedRole record. Used to register as a forum sentinel, collect
   curator, federation verifier, etc. — role-specific eligibility comes from
   the role's BondedRoleConfig. */
  bondRole = async (request: MsgBondRole): Promise<MsgBondRoleResponse> => {
    const data = MsgBondRole.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "BondRole", data);
    return promise.then(data => MsgBondRoleResponse.decode(new BinaryReader(data)));
  };
  /* UnbondRole withdraws a portion of the caller's bond for the given
   role_type (subject to committed-bond constraints). */
  unbondRole = async (request: MsgUnbondRole): Promise<MsgUnbondRoleResponse> => {
    const data = MsgUnbondRole.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "UnbondRole", data);
    return promise.then(data => MsgUnbondRoleResponse.decode(new BinaryReader(data)));
  };
  /* CancelUnbondRole cancels (reduces) an in-flight unbond, returning the
   cancelled amount to active bond without waiting out the cooldown. */
  cancelUnbondRole = async (request: MsgCancelUnbondRole): Promise<MsgCancelUnbondRoleResponse> => {
    const data = MsgCancelUnbondRole.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "CancelUnbondRole", data);
    return promise.then(data => MsgCancelUnbondRoleResponse.decode(new BinaryReader(data)));
  };
  /* ReportMember defines the ReportMember RPC. */
  reportMember = async (request: MsgReportMember): Promise<MsgReportMemberResponse> => {
    const data = MsgReportMember.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "ReportMember", data);
    return promise.then(data => MsgReportMemberResponse.decode(new BinaryReader(data)));
  };
  /* CosignMemberReport defines the CosignMemberReport RPC. */
  cosignMemberReport = async (request: MsgCosignMemberReport): Promise<MsgCosignMemberReportResponse> => {
    const data = MsgCosignMemberReport.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "CosignMemberReport", data);
    return promise.then(data => MsgCosignMemberReportResponse.decode(new BinaryReader(data)));
  };
  /* ResolveMemberReport defines the ResolveMemberReport RPC. */
  resolveMemberReport = async (request: MsgResolveMemberReport): Promise<MsgResolveMemberReportResponse> => {
    const data = MsgResolveMemberReport.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "ResolveMemberReport", data);
    return promise.then(data => MsgResolveMemberReportResponse.decode(new BinaryReader(data)));
  };
  /* DefendMemberReport defines the DefendMemberReport RPC. */
  defendMemberReport = async (request: MsgDefendMemberReport): Promise<MsgDefendMemberReportResponse> => {
    const data = MsgDefendMemberReport.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "DefendMemberReport", data);
    return promise.then(data => MsgDefendMemberReportResponse.decode(new BinaryReader(data)));
  };
  /* AppealGovAction defines the AppealGovAction RPC. */
  appealGovAction = async (request: MsgAppealGovAction): Promise<MsgAppealGovActionResponse> => {
    const data = MsgAppealGovAction.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "AppealGovAction", data);
    return promise.then(data => MsgAppealGovActionResponse.decode(new BinaryReader(data)));
  };
  /* ResolveGovActionAppeal defines the ResolveGovActionAppeal RPC. Resolves
   a pending gov action appeal via council authority (UPHELD or OVERTURNED). */
  resolveGovActionAppeal = async (request: MsgResolveGovActionAppeal): Promise<MsgResolveGovActionAppealResponse> => {
    const data = MsgResolveGovActionAppeal.encode(request).finish();
    const promise = this.rpc.request("sparkdream.rep.v1.Msg", "ResolveGovActionAppeal", data);
    return promise.then(data => MsgResolveGovActionAppealResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};