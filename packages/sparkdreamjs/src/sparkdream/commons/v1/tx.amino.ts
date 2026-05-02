//@ts-nocheck
import { MsgUpdateParams, MsgSpendFromCommons, MsgEmergencyCancelGovProposal, MsgCreatePolicyPermissions, MsgUpdatePolicyPermissions, MsgDeletePolicyPermissions, MsgRegisterGroup, MsgRenewGroup, MsgUpdateGroupMembers, MsgUpdateGroupConfig, MsgForceUpgrade, MsgDeleteGroup, MsgVetoGroupProposals, MsgSubmitProposal, MsgVoteProposal, MsgExecuteProposal, MsgSubmitAnonymousProposal, MsgAnonymousVoteProposal, MsgCreateCategory } from "./tx";
export const AminoConverter = {
  "/sparkdream.commons.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/commons/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.commons.v1.MsgSpendFromCommons": {
    aminoType: "sparkdream/x/commons/MsgSpendFromCommons",
    toAmino: MsgSpendFromCommons.toAmino,
    fromAmino: MsgSpendFromCommons.fromAmino
  },
  "/sparkdream.commons.v1.MsgEmergencyCancelGovProposal": {
    aminoType: "sparkdream/x/commons/MsgEmergencyCancelGovProposal",
    toAmino: MsgEmergencyCancelGovProposal.toAmino,
    fromAmino: MsgEmergencyCancelGovProposal.fromAmino
  },
  "/sparkdream.commons.v1.MsgCreatePolicyPermissions": {
    aminoType: "/sparkdream.commons.v1.MsgCreatePolicyPermissions",
    toAmino: MsgCreatePolicyPermissions.toAmino,
    fromAmino: MsgCreatePolicyPermissions.fromAmino
  },
  "/sparkdream.commons.v1.MsgUpdatePolicyPermissions": {
    aminoType: "/sparkdream.commons.v1.MsgUpdatePolicyPermissions",
    toAmino: MsgUpdatePolicyPermissions.toAmino,
    fromAmino: MsgUpdatePolicyPermissions.fromAmino
  },
  "/sparkdream.commons.v1.MsgDeletePolicyPermissions": {
    aminoType: "/sparkdream.commons.v1.MsgDeletePolicyPermissions",
    toAmino: MsgDeletePolicyPermissions.toAmino,
    fromAmino: MsgDeletePolicyPermissions.fromAmino
  },
  "/sparkdream.commons.v1.MsgRegisterGroup": {
    aminoType: "/sparkdream.commons.v1.MsgRegisterGroup",
    toAmino: MsgRegisterGroup.toAmino,
    fromAmino: MsgRegisterGroup.fromAmino
  },
  "/sparkdream.commons.v1.MsgRenewGroup": {
    aminoType: "/sparkdream.commons.v1.MsgRenewGroup",
    toAmino: MsgRenewGroup.toAmino,
    fromAmino: MsgRenewGroup.fromAmino
  },
  "/sparkdream.commons.v1.MsgUpdateGroupMembers": {
    aminoType: "/sparkdream.commons.v1.MsgUpdateGroupMembers",
    toAmino: MsgUpdateGroupMembers.toAmino,
    fromAmino: MsgUpdateGroupMembers.fromAmino
  },
  "/sparkdream.commons.v1.MsgUpdateGroupConfig": {
    aminoType: "/sparkdream.commons.v1.MsgUpdateGroupConfig",
    toAmino: MsgUpdateGroupConfig.toAmino,
    fromAmino: MsgUpdateGroupConfig.fromAmino
  },
  "/sparkdream.commons.v1.MsgForceUpgrade": {
    aminoType: "/sparkdream.commons.v1.MsgForceUpgrade",
    toAmino: MsgForceUpgrade.toAmino,
    fromAmino: MsgForceUpgrade.fromAmino
  },
  "/sparkdream.commons.v1.MsgDeleteGroup": {
    aminoType: "/sparkdream.commons.v1.MsgDeleteGroup",
    toAmino: MsgDeleteGroup.toAmino,
    fromAmino: MsgDeleteGroup.fromAmino
  },
  "/sparkdream.commons.v1.MsgVetoGroupProposals": {
    aminoType: "/sparkdream.commons.v1.MsgVetoGroupProposals",
    toAmino: MsgVetoGroupProposals.toAmino,
    fromAmino: MsgVetoGroupProposals.fromAmino
  },
  "/sparkdream.commons.v1.MsgSubmitProposal": {
    aminoType: "/sparkdream.commons.v1.MsgSubmitProposal",
    toAmino: MsgSubmitProposal.toAmino,
    fromAmino: MsgSubmitProposal.fromAmino
  },
  "/sparkdream.commons.v1.MsgVoteProposal": {
    aminoType: "/sparkdream.commons.v1.MsgVoteProposal",
    toAmino: MsgVoteProposal.toAmino,
    fromAmino: MsgVoteProposal.fromAmino
  },
  "/sparkdream.commons.v1.MsgExecuteProposal": {
    aminoType: "/sparkdream.commons.v1.MsgExecuteProposal",
    toAmino: MsgExecuteProposal.toAmino,
    fromAmino: MsgExecuteProposal.fromAmino
  },
  "/sparkdream.commons.v1.MsgSubmitAnonymousProposal": {
    aminoType: "sparkdream/x/commons/MsgSubmitAnonymousProposal",
    toAmino: MsgSubmitAnonymousProposal.toAmino,
    fromAmino: MsgSubmitAnonymousProposal.fromAmino
  },
  "/sparkdream.commons.v1.MsgAnonymousVoteProposal": {
    aminoType: "sparkdream/x/commons/MsgAnonymousVoteProposal",
    toAmino: MsgAnonymousVoteProposal.toAmino,
    fromAmino: MsgAnonymousVoteProposal.fromAmino
  },
  "/sparkdream.commons.v1.MsgCreateCategory": {
    aminoType: "sparkdream/x/commons/MsgCreateCategory",
    toAmino: MsgCreateCategory.toAmino,
    fromAmino: MsgCreateCategory.fromAmino
  }
};