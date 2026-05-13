//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgSpendFromCommons, MsgEmergencyCancelGovProposal, MsgCreatePolicyPermissions, MsgUpdatePolicyPermissions, MsgDeletePolicyPermissions, MsgRegisterGroup, MsgRenewGroup, MsgUpdateGroupMembers, MsgUpdateGroupConfig, MsgForceUpgrade, MsgDeleteGroup, MsgVetoGroupProposals, MsgSubmitProposal, MsgVoteProposal, MsgExecuteProposal, MsgSubmitAnonymousProposal, MsgAnonymousVoteProposal, MsgCreateCategory, MsgDeleteCategory } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.commons.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.commons.v1.MsgSpendFromCommons", MsgSpendFromCommons], ["/sparkdream.commons.v1.MsgEmergencyCancelGovProposal", MsgEmergencyCancelGovProposal], ["/sparkdream.commons.v1.MsgCreatePolicyPermissions", MsgCreatePolicyPermissions], ["/sparkdream.commons.v1.MsgUpdatePolicyPermissions", MsgUpdatePolicyPermissions], ["/sparkdream.commons.v1.MsgDeletePolicyPermissions", MsgDeletePolicyPermissions], ["/sparkdream.commons.v1.MsgRegisterGroup", MsgRegisterGroup], ["/sparkdream.commons.v1.MsgRenewGroup", MsgRenewGroup], ["/sparkdream.commons.v1.MsgUpdateGroupMembers", MsgUpdateGroupMembers], ["/sparkdream.commons.v1.MsgUpdateGroupConfig", MsgUpdateGroupConfig], ["/sparkdream.commons.v1.MsgForceUpgrade", MsgForceUpgrade], ["/sparkdream.commons.v1.MsgDeleteGroup", MsgDeleteGroup], ["/sparkdream.commons.v1.MsgVetoGroupProposals", MsgVetoGroupProposals], ["/sparkdream.commons.v1.MsgSubmitProposal", MsgSubmitProposal], ["/sparkdream.commons.v1.MsgVoteProposal", MsgVoteProposal], ["/sparkdream.commons.v1.MsgExecuteProposal", MsgExecuteProposal], ["/sparkdream.commons.v1.MsgSubmitAnonymousProposal", MsgSubmitAnonymousProposal], ["/sparkdream.commons.v1.MsgAnonymousVoteProposal", MsgAnonymousVoteProposal], ["/sparkdream.commons.v1.MsgCreateCategory", MsgCreateCategory], ["/sparkdream.commons.v1.MsgDeleteCategory", MsgDeleteCategory]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    spendFromCommons(value: MsgSpendFromCommons) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgSpendFromCommons",
        value: MsgSpendFromCommons.encode(value).finish()
      };
    },
    emergencyCancelGovProposal(value: MsgEmergencyCancelGovProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgEmergencyCancelGovProposal",
        value: MsgEmergencyCancelGovProposal.encode(value).finish()
      };
    },
    createPolicyPermissions(value: MsgCreatePolicyPermissions) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgCreatePolicyPermissions",
        value: MsgCreatePolicyPermissions.encode(value).finish()
      };
    },
    updatePolicyPermissions(value: MsgUpdatePolicyPermissions) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgUpdatePolicyPermissions",
        value: MsgUpdatePolicyPermissions.encode(value).finish()
      };
    },
    deletePolicyPermissions(value: MsgDeletePolicyPermissions) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgDeletePolicyPermissions",
        value: MsgDeletePolicyPermissions.encode(value).finish()
      };
    },
    registerGroup(value: MsgRegisterGroup) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgRegisterGroup",
        value: MsgRegisterGroup.encode(value).finish()
      };
    },
    renewGroup(value: MsgRenewGroup) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgRenewGroup",
        value: MsgRenewGroup.encode(value).finish()
      };
    },
    updateGroupMembers(value: MsgUpdateGroupMembers) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupMembers",
        value: MsgUpdateGroupMembers.encode(value).finish()
      };
    },
    updateGroupConfig(value: MsgUpdateGroupConfig) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupConfig",
        value: MsgUpdateGroupConfig.encode(value).finish()
      };
    },
    forceUpgrade(value: MsgForceUpgrade) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgForceUpgrade",
        value: MsgForceUpgrade.encode(value).finish()
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgDeleteGroup",
        value: MsgDeleteGroup.encode(value).finish()
      };
    },
    vetoGroupProposals(value: MsgVetoGroupProposals) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgVetoGroupProposals",
        value: MsgVetoGroupProposals.encode(value).finish()
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },
    voteProposal(value: MsgVoteProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgVoteProposal",
        value: MsgVoteProposal.encode(value).finish()
      };
    },
    executeProposal(value: MsgExecuteProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgExecuteProposal",
        value: MsgExecuteProposal.encode(value).finish()
      };
    },
    submitAnonymousProposal(value: MsgSubmitAnonymousProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgSubmitAnonymousProposal",
        value: MsgSubmitAnonymousProposal.encode(value).finish()
      };
    },
    anonymousVoteProposal(value: MsgAnonymousVoteProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgAnonymousVoteProposal",
        value: MsgAnonymousVoteProposal.encode(value).finish()
      };
    },
    createCategory(value: MsgCreateCategory) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgCreateCategory",
        value: MsgCreateCategory.encode(value).finish()
      };
    },
    deleteCategory(value: MsgDeleteCategory) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgDeleteCategory",
        value: MsgDeleteCategory.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgUpdateParams",
        value
      };
    },
    spendFromCommons(value: MsgSpendFromCommons) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgSpendFromCommons",
        value
      };
    },
    emergencyCancelGovProposal(value: MsgEmergencyCancelGovProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgEmergencyCancelGovProposal",
        value
      };
    },
    createPolicyPermissions(value: MsgCreatePolicyPermissions) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgCreatePolicyPermissions",
        value
      };
    },
    updatePolicyPermissions(value: MsgUpdatePolicyPermissions) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgUpdatePolicyPermissions",
        value
      };
    },
    deletePolicyPermissions(value: MsgDeletePolicyPermissions) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgDeletePolicyPermissions",
        value
      };
    },
    registerGroup(value: MsgRegisterGroup) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgRegisterGroup",
        value
      };
    },
    renewGroup(value: MsgRenewGroup) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgRenewGroup",
        value
      };
    },
    updateGroupMembers(value: MsgUpdateGroupMembers) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupMembers",
        value
      };
    },
    updateGroupConfig(value: MsgUpdateGroupConfig) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupConfig",
        value
      };
    },
    forceUpgrade(value: MsgForceUpgrade) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgForceUpgrade",
        value
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgDeleteGroup",
        value
      };
    },
    vetoGroupProposals(value: MsgVetoGroupProposals) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgVetoGroupProposals",
        value
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgSubmitProposal",
        value
      };
    },
    voteProposal(value: MsgVoteProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgVoteProposal",
        value
      };
    },
    executeProposal(value: MsgExecuteProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgExecuteProposal",
        value
      };
    },
    submitAnonymousProposal(value: MsgSubmitAnonymousProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgSubmitAnonymousProposal",
        value
      };
    },
    anonymousVoteProposal(value: MsgAnonymousVoteProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgAnonymousVoteProposal",
        value
      };
    },
    createCategory(value: MsgCreateCategory) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgCreateCategory",
        value
      };
    },
    deleteCategory(value: MsgDeleteCategory) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgDeleteCategory",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    spendFromCommons(value: MsgSpendFromCommons) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgSpendFromCommons",
        value: MsgSpendFromCommons.fromPartial(value)
      };
    },
    emergencyCancelGovProposal(value: MsgEmergencyCancelGovProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgEmergencyCancelGovProposal",
        value: MsgEmergencyCancelGovProposal.fromPartial(value)
      };
    },
    createPolicyPermissions(value: MsgCreatePolicyPermissions) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgCreatePolicyPermissions",
        value: MsgCreatePolicyPermissions.fromPartial(value)
      };
    },
    updatePolicyPermissions(value: MsgUpdatePolicyPermissions) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgUpdatePolicyPermissions",
        value: MsgUpdatePolicyPermissions.fromPartial(value)
      };
    },
    deletePolicyPermissions(value: MsgDeletePolicyPermissions) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgDeletePolicyPermissions",
        value: MsgDeletePolicyPermissions.fromPartial(value)
      };
    },
    registerGroup(value: MsgRegisterGroup) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgRegisterGroup",
        value: MsgRegisterGroup.fromPartial(value)
      };
    },
    renewGroup(value: MsgRenewGroup) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgRenewGroup",
        value: MsgRenewGroup.fromPartial(value)
      };
    },
    updateGroupMembers(value: MsgUpdateGroupMembers) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupMembers",
        value: MsgUpdateGroupMembers.fromPartial(value)
      };
    },
    updateGroupConfig(value: MsgUpdateGroupConfig) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgUpdateGroupConfig",
        value: MsgUpdateGroupConfig.fromPartial(value)
      };
    },
    forceUpgrade(value: MsgForceUpgrade) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgForceUpgrade",
        value: MsgForceUpgrade.fromPartial(value)
      };
    },
    deleteGroup(value: MsgDeleteGroup) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgDeleteGroup",
        value: MsgDeleteGroup.fromPartial(value)
      };
    },
    vetoGroupProposals(value: MsgVetoGroupProposals) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgVetoGroupProposals",
        value: MsgVetoGroupProposals.fromPartial(value)
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },
    voteProposal(value: MsgVoteProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgVoteProposal",
        value: MsgVoteProposal.fromPartial(value)
      };
    },
    executeProposal(value: MsgExecuteProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgExecuteProposal",
        value: MsgExecuteProposal.fromPartial(value)
      };
    },
    submitAnonymousProposal(value: MsgSubmitAnonymousProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgSubmitAnonymousProposal",
        value: MsgSubmitAnonymousProposal.fromPartial(value)
      };
    },
    anonymousVoteProposal(value: MsgAnonymousVoteProposal) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgAnonymousVoteProposal",
        value: MsgAnonymousVoteProposal.fromPartial(value)
      };
    },
    createCategory(value: MsgCreateCategory) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgCreateCategory",
        value: MsgCreateCategory.fromPartial(value)
      };
    },
    deleteCategory(value: MsgDeleteCategory) {
      return {
        typeUrl: "/sparkdream.commons.v1.MsgDeleteCategory",
        value: MsgDeleteCategory.fromPartial(value)
      };
    }
  }
};