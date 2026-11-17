//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgRequestPermanentCopy, MsgAddSource, MsgCancelRequest, MsgDisputeCompletion, MsgClaimRequest, MsgExtendClaim, MsgCompleteRequest, MsgDeclineRequest, MsgFlagRemoved, MsgUnflagRemoved, MsgVoidCompletion, MsgApproveOperator, MsgRemoveOperator, MsgApproveScanner, MsgRemoveScanner, MsgUpdateBackend, MsgUpdateOperationalParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.storage.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.storage.v1.MsgRequestPermanentCopy", MsgRequestPermanentCopy], ["/sparkdream.storage.v1.MsgAddSource", MsgAddSource], ["/sparkdream.storage.v1.MsgCancelRequest", MsgCancelRequest], ["/sparkdream.storage.v1.MsgDisputeCompletion", MsgDisputeCompletion], ["/sparkdream.storage.v1.MsgClaimRequest", MsgClaimRequest], ["/sparkdream.storage.v1.MsgExtendClaim", MsgExtendClaim], ["/sparkdream.storage.v1.MsgCompleteRequest", MsgCompleteRequest], ["/sparkdream.storage.v1.MsgDeclineRequest", MsgDeclineRequest], ["/sparkdream.storage.v1.MsgFlagRemoved", MsgFlagRemoved], ["/sparkdream.storage.v1.MsgUnflagRemoved", MsgUnflagRemoved], ["/sparkdream.storage.v1.MsgVoidCompletion", MsgVoidCompletion], ["/sparkdream.storage.v1.MsgApproveOperator", MsgApproveOperator], ["/sparkdream.storage.v1.MsgRemoveOperator", MsgRemoveOperator], ["/sparkdream.storage.v1.MsgApproveScanner", MsgApproveScanner], ["/sparkdream.storage.v1.MsgRemoveScanner", MsgRemoveScanner], ["/sparkdream.storage.v1.MsgUpdateBackend", MsgUpdateBackend], ["/sparkdream.storage.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    requestPermanentCopy(value: MsgRequestPermanentCopy) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgRequestPermanentCopy",
        value: MsgRequestPermanentCopy.encode(value).finish()
      };
    },
    addSource(value: MsgAddSource) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgAddSource",
        value: MsgAddSource.encode(value).finish()
      };
    },
    cancelRequest(value: MsgCancelRequest) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgCancelRequest",
        value: MsgCancelRequest.encode(value).finish()
      };
    },
    disputeCompletion(value: MsgDisputeCompletion) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgDisputeCompletion",
        value: MsgDisputeCompletion.encode(value).finish()
      };
    },
    claimRequest(value: MsgClaimRequest) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgClaimRequest",
        value: MsgClaimRequest.encode(value).finish()
      };
    },
    extendClaim(value: MsgExtendClaim) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgExtendClaim",
        value: MsgExtendClaim.encode(value).finish()
      };
    },
    completeRequest(value: MsgCompleteRequest) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgCompleteRequest",
        value: MsgCompleteRequest.encode(value).finish()
      };
    },
    declineRequest(value: MsgDeclineRequest) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgDeclineRequest",
        value: MsgDeclineRequest.encode(value).finish()
      };
    },
    flagRemoved(value: MsgFlagRemoved) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgFlagRemoved",
        value: MsgFlagRemoved.encode(value).finish()
      };
    },
    unflagRemoved(value: MsgUnflagRemoved) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgUnflagRemoved",
        value: MsgUnflagRemoved.encode(value).finish()
      };
    },
    voidCompletion(value: MsgVoidCompletion) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgVoidCompletion",
        value: MsgVoidCompletion.encode(value).finish()
      };
    },
    approveOperator(value: MsgApproveOperator) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgApproveOperator",
        value: MsgApproveOperator.encode(value).finish()
      };
    },
    removeOperator(value: MsgRemoveOperator) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgRemoveOperator",
        value: MsgRemoveOperator.encode(value).finish()
      };
    },
    approveScanner(value: MsgApproveScanner) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgApproveScanner",
        value: MsgApproveScanner.encode(value).finish()
      };
    },
    removeScanner(value: MsgRemoveScanner) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgRemoveScanner",
        value: MsgRemoveScanner.encode(value).finish()
      };
    },
    updateBackend(value: MsgUpdateBackend) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgUpdateBackend",
        value: MsgUpdateBackend.encode(value).finish()
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgUpdateParams",
        value
      };
    },
    requestPermanentCopy(value: MsgRequestPermanentCopy) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgRequestPermanentCopy",
        value
      };
    },
    addSource(value: MsgAddSource) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgAddSource",
        value
      };
    },
    cancelRequest(value: MsgCancelRequest) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgCancelRequest",
        value
      };
    },
    disputeCompletion(value: MsgDisputeCompletion) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgDisputeCompletion",
        value
      };
    },
    claimRequest(value: MsgClaimRequest) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgClaimRequest",
        value
      };
    },
    extendClaim(value: MsgExtendClaim) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgExtendClaim",
        value
      };
    },
    completeRequest(value: MsgCompleteRequest) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgCompleteRequest",
        value
      };
    },
    declineRequest(value: MsgDeclineRequest) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgDeclineRequest",
        value
      };
    },
    flagRemoved(value: MsgFlagRemoved) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgFlagRemoved",
        value
      };
    },
    unflagRemoved(value: MsgUnflagRemoved) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgUnflagRemoved",
        value
      };
    },
    voidCompletion(value: MsgVoidCompletion) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgVoidCompletion",
        value
      };
    },
    approveOperator(value: MsgApproveOperator) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgApproveOperator",
        value
      };
    },
    removeOperator(value: MsgRemoveOperator) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgRemoveOperator",
        value
      };
    },
    approveScanner(value: MsgApproveScanner) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgApproveScanner",
        value
      };
    },
    removeScanner(value: MsgRemoveScanner) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgRemoveScanner",
        value
      };
    },
    updateBackend(value: MsgUpdateBackend) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgUpdateBackend",
        value
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgUpdateOperationalParams",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    requestPermanentCopy(value: MsgRequestPermanentCopy) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgRequestPermanentCopy",
        value: MsgRequestPermanentCopy.fromPartial(value)
      };
    },
    addSource(value: MsgAddSource) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgAddSource",
        value: MsgAddSource.fromPartial(value)
      };
    },
    cancelRequest(value: MsgCancelRequest) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgCancelRequest",
        value: MsgCancelRequest.fromPartial(value)
      };
    },
    disputeCompletion(value: MsgDisputeCompletion) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgDisputeCompletion",
        value: MsgDisputeCompletion.fromPartial(value)
      };
    },
    claimRequest(value: MsgClaimRequest) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgClaimRequest",
        value: MsgClaimRequest.fromPartial(value)
      };
    },
    extendClaim(value: MsgExtendClaim) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgExtendClaim",
        value: MsgExtendClaim.fromPartial(value)
      };
    },
    completeRequest(value: MsgCompleteRequest) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgCompleteRequest",
        value: MsgCompleteRequest.fromPartial(value)
      };
    },
    declineRequest(value: MsgDeclineRequest) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgDeclineRequest",
        value: MsgDeclineRequest.fromPartial(value)
      };
    },
    flagRemoved(value: MsgFlagRemoved) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgFlagRemoved",
        value: MsgFlagRemoved.fromPartial(value)
      };
    },
    unflagRemoved(value: MsgUnflagRemoved) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgUnflagRemoved",
        value: MsgUnflagRemoved.fromPartial(value)
      };
    },
    voidCompletion(value: MsgVoidCompletion) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgVoidCompletion",
        value: MsgVoidCompletion.fromPartial(value)
      };
    },
    approveOperator(value: MsgApproveOperator) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgApproveOperator",
        value: MsgApproveOperator.fromPartial(value)
      };
    },
    removeOperator(value: MsgRemoveOperator) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgRemoveOperator",
        value: MsgRemoveOperator.fromPartial(value)
      };
    },
    approveScanner(value: MsgApproveScanner) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgApproveScanner",
        value: MsgApproveScanner.fromPartial(value)
      };
    },
    removeScanner(value: MsgRemoveScanner) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgRemoveScanner",
        value: MsgRemoveScanner.fromPartial(value)
      };
    },
    updateBackend(value: MsgUpdateBackend) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgUpdateBackend",
        value: MsgUpdateBackend.fromPartial(value)
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.storage.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.fromPartial(value)
      };
    }
  }
};