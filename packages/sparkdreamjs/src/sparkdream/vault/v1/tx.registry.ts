//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateVault, MsgPropose, MsgApprove, MsgRevokeApproval, MsgExecute, MsgCancelProposal, MsgUpdateVault, MsgAcceptVaultSigner, MsgLeaveVault } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.vault.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.vault.v1.MsgCreateVault", MsgCreateVault], ["/sparkdream.vault.v1.MsgPropose", MsgPropose], ["/sparkdream.vault.v1.MsgApprove", MsgApprove], ["/sparkdream.vault.v1.MsgRevokeApproval", MsgRevokeApproval], ["/sparkdream.vault.v1.MsgExecute", MsgExecute], ["/sparkdream.vault.v1.MsgCancelProposal", MsgCancelProposal], ["/sparkdream.vault.v1.MsgUpdateVault", MsgUpdateVault], ["/sparkdream.vault.v1.MsgAcceptVaultSigner", MsgAcceptVaultSigner], ["/sparkdream.vault.v1.MsgLeaveVault", MsgLeaveVault]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createVault(value: MsgCreateVault) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgCreateVault",
        value: MsgCreateVault.encode(value).finish()
      };
    },
    propose(value: MsgPropose) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgPropose",
        value: MsgPropose.encode(value).finish()
      };
    },
    approve(value: MsgApprove) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgApprove",
        value: MsgApprove.encode(value).finish()
      };
    },
    revokeApproval(value: MsgRevokeApproval) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgRevokeApproval",
        value: MsgRevokeApproval.encode(value).finish()
      };
    },
    execute(value: MsgExecute) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgExecute",
        value: MsgExecute.encode(value).finish()
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgCancelProposal",
        value: MsgCancelProposal.encode(value).finish()
      };
    },
    updateVault(value: MsgUpdateVault) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgUpdateVault",
        value: MsgUpdateVault.encode(value).finish()
      };
    },
    acceptVaultSigner(value: MsgAcceptVaultSigner) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgAcceptVaultSigner",
        value: MsgAcceptVaultSigner.encode(value).finish()
      };
    },
    leaveVault(value: MsgLeaveVault) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgLeaveVault",
        value: MsgLeaveVault.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgUpdateParams",
        value
      };
    },
    createVault(value: MsgCreateVault) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgCreateVault",
        value
      };
    },
    propose(value: MsgPropose) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgPropose",
        value
      };
    },
    approve(value: MsgApprove) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgApprove",
        value
      };
    },
    revokeApproval(value: MsgRevokeApproval) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgRevokeApproval",
        value
      };
    },
    execute(value: MsgExecute) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgExecute",
        value
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgCancelProposal",
        value
      };
    },
    updateVault(value: MsgUpdateVault) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgUpdateVault",
        value
      };
    },
    acceptVaultSigner(value: MsgAcceptVaultSigner) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgAcceptVaultSigner",
        value
      };
    },
    leaveVault(value: MsgLeaveVault) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgLeaveVault",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createVault(value: MsgCreateVault) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgCreateVault",
        value: MsgCreateVault.fromPartial(value)
      };
    },
    propose(value: MsgPropose) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgPropose",
        value: MsgPropose.fromPartial(value)
      };
    },
    approve(value: MsgApprove) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgApprove",
        value: MsgApprove.fromPartial(value)
      };
    },
    revokeApproval(value: MsgRevokeApproval) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgRevokeApproval",
        value: MsgRevokeApproval.fromPartial(value)
      };
    },
    execute(value: MsgExecute) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgExecute",
        value: MsgExecute.fromPartial(value)
      };
    },
    cancelProposal(value: MsgCancelProposal) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgCancelProposal",
        value: MsgCancelProposal.fromPartial(value)
      };
    },
    updateVault(value: MsgUpdateVault) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgUpdateVault",
        value: MsgUpdateVault.fromPartial(value)
      };
    },
    acceptVaultSigner(value: MsgAcceptVaultSigner) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgAcceptVaultSigner",
        value: MsgAcceptVaultSigner.fromPartial(value)
      };
    },
    leaveVault(value: MsgLeaveVault) {
      return {
        typeUrl: "/sparkdream.vault.v1.MsgLeaveVault",
        value: MsgLeaveVault.fromPartial(value)
      };
    }
  }
};