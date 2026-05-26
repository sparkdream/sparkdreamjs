//@ts-nocheck
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgRegisterPeer, MsgRemovePeer, MsgSuspendPeer, MsgResumePeer, MsgUpdatePeerPolicy, MsgRegisterBridge, MsgUpdateBridge, MsgSubmitFederatedContent, MsgFederateContent, MsgAttestOutbound, MsgModerateContent, MsgLinkIdentity, MsgUnlinkIdentity, MsgConfirmIdentityLink, MsgRequestReputationAttestation, MsgVerifyContent, MsgChallengeVerification, MsgSubmitArbiterHash, MsgEscalateChallenge, MsgResolveEscalatedChallenge, MsgUpdateOperationalParams, MsgUpdatePeerController, MsgResyncBridgeCount, MsgPruneOrphanBindings } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/sparkdream.federation.v1.MsgUpdateParams", MsgUpdateParams], ["/sparkdream.federation.v1.MsgRegisterPeer", MsgRegisterPeer], ["/sparkdream.federation.v1.MsgRemovePeer", MsgRemovePeer], ["/sparkdream.federation.v1.MsgSuspendPeer", MsgSuspendPeer], ["/sparkdream.federation.v1.MsgResumePeer", MsgResumePeer], ["/sparkdream.federation.v1.MsgUpdatePeerPolicy", MsgUpdatePeerPolicy], ["/sparkdream.federation.v1.MsgRegisterBridge", MsgRegisterBridge], ["/sparkdream.federation.v1.MsgUpdateBridge", MsgUpdateBridge], ["/sparkdream.federation.v1.MsgSubmitFederatedContent", MsgSubmitFederatedContent], ["/sparkdream.federation.v1.MsgFederateContent", MsgFederateContent], ["/sparkdream.federation.v1.MsgAttestOutbound", MsgAttestOutbound], ["/sparkdream.federation.v1.MsgModerateContent", MsgModerateContent], ["/sparkdream.federation.v1.MsgLinkIdentity", MsgLinkIdentity], ["/sparkdream.federation.v1.MsgUnlinkIdentity", MsgUnlinkIdentity], ["/sparkdream.federation.v1.MsgConfirmIdentityLink", MsgConfirmIdentityLink], ["/sparkdream.federation.v1.MsgRequestReputationAttestation", MsgRequestReputationAttestation], ["/sparkdream.federation.v1.MsgVerifyContent", MsgVerifyContent], ["/sparkdream.federation.v1.MsgChallengeVerification", MsgChallengeVerification], ["/sparkdream.federation.v1.MsgSubmitArbiterHash", MsgSubmitArbiterHash], ["/sparkdream.federation.v1.MsgEscalateChallenge", MsgEscalateChallenge], ["/sparkdream.federation.v1.MsgResolveEscalatedChallenge", MsgResolveEscalatedChallenge], ["/sparkdream.federation.v1.MsgUpdateOperationalParams", MsgUpdateOperationalParams], ["/sparkdream.federation.v1.MsgUpdatePeerController", MsgUpdatePeerController], ["/sparkdream.federation.v1.MsgResyncBridgeCount", MsgResyncBridgeCount], ["/sparkdream.federation.v1.MsgPruneOrphanBindings", MsgPruneOrphanBindings]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    registerPeer(value: MsgRegisterPeer) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgRegisterPeer",
        value: MsgRegisterPeer.encode(value).finish()
      };
    },
    removePeer(value: MsgRemovePeer) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgRemovePeer",
        value: MsgRemovePeer.encode(value).finish()
      };
    },
    suspendPeer(value: MsgSuspendPeer) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgSuspendPeer",
        value: MsgSuspendPeer.encode(value).finish()
      };
    },
    resumePeer(value: MsgResumePeer) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgResumePeer",
        value: MsgResumePeer.encode(value).finish()
      };
    },
    updatePeerPolicy(value: MsgUpdatePeerPolicy) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdatePeerPolicy",
        value: MsgUpdatePeerPolicy.encode(value).finish()
      };
    },
    registerBridge(value: MsgRegisterBridge) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgRegisterBridge",
        value: MsgRegisterBridge.encode(value).finish()
      };
    },
    updateBridge(value: MsgUpdateBridge) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdateBridge",
        value: MsgUpdateBridge.encode(value).finish()
      };
    },
    submitFederatedContent(value: MsgSubmitFederatedContent) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgSubmitFederatedContent",
        value: MsgSubmitFederatedContent.encode(value).finish()
      };
    },
    federateContent(value: MsgFederateContent) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgFederateContent",
        value: MsgFederateContent.encode(value).finish()
      };
    },
    attestOutbound(value: MsgAttestOutbound) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgAttestOutbound",
        value: MsgAttestOutbound.encode(value).finish()
      };
    },
    moderateContent(value: MsgModerateContent) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgModerateContent",
        value: MsgModerateContent.encode(value).finish()
      };
    },
    linkIdentity(value: MsgLinkIdentity) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgLinkIdentity",
        value: MsgLinkIdentity.encode(value).finish()
      };
    },
    unlinkIdentity(value: MsgUnlinkIdentity) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUnlinkIdentity",
        value: MsgUnlinkIdentity.encode(value).finish()
      };
    },
    confirmIdentityLink(value: MsgConfirmIdentityLink) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgConfirmIdentityLink",
        value: MsgConfirmIdentityLink.encode(value).finish()
      };
    },
    requestReputationAttestation(value: MsgRequestReputationAttestation) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgRequestReputationAttestation",
        value: MsgRequestReputationAttestation.encode(value).finish()
      };
    },
    verifyContent(value: MsgVerifyContent) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgVerifyContent",
        value: MsgVerifyContent.encode(value).finish()
      };
    },
    challengeVerification(value: MsgChallengeVerification) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgChallengeVerification",
        value: MsgChallengeVerification.encode(value).finish()
      };
    },
    submitArbiterHash(value: MsgSubmitArbiterHash) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgSubmitArbiterHash",
        value: MsgSubmitArbiterHash.encode(value).finish()
      };
    },
    escalateChallenge(value: MsgEscalateChallenge) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgEscalateChallenge",
        value: MsgEscalateChallenge.encode(value).finish()
      };
    },
    resolveEscalatedChallenge(value: MsgResolveEscalatedChallenge) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgResolveEscalatedChallenge",
        value: MsgResolveEscalatedChallenge.encode(value).finish()
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.encode(value).finish()
      };
    },
    updatePeerController(value: MsgUpdatePeerController) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdatePeerController",
        value: MsgUpdatePeerController.encode(value).finish()
      };
    },
    resyncBridgeCount(value: MsgResyncBridgeCount) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgResyncBridgeCount",
        value: MsgResyncBridgeCount.encode(value).finish()
      };
    },
    pruneOrphanBindings(value: MsgPruneOrphanBindings) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgPruneOrphanBindings",
        value: MsgPruneOrphanBindings.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdateParams",
        value
      };
    },
    registerPeer(value: MsgRegisterPeer) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgRegisterPeer",
        value
      };
    },
    removePeer(value: MsgRemovePeer) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgRemovePeer",
        value
      };
    },
    suspendPeer(value: MsgSuspendPeer) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgSuspendPeer",
        value
      };
    },
    resumePeer(value: MsgResumePeer) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgResumePeer",
        value
      };
    },
    updatePeerPolicy(value: MsgUpdatePeerPolicy) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdatePeerPolicy",
        value
      };
    },
    registerBridge(value: MsgRegisterBridge) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgRegisterBridge",
        value
      };
    },
    updateBridge(value: MsgUpdateBridge) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdateBridge",
        value
      };
    },
    submitFederatedContent(value: MsgSubmitFederatedContent) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgSubmitFederatedContent",
        value
      };
    },
    federateContent(value: MsgFederateContent) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgFederateContent",
        value
      };
    },
    attestOutbound(value: MsgAttestOutbound) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgAttestOutbound",
        value
      };
    },
    moderateContent(value: MsgModerateContent) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgModerateContent",
        value
      };
    },
    linkIdentity(value: MsgLinkIdentity) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgLinkIdentity",
        value
      };
    },
    unlinkIdentity(value: MsgUnlinkIdentity) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUnlinkIdentity",
        value
      };
    },
    confirmIdentityLink(value: MsgConfirmIdentityLink) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgConfirmIdentityLink",
        value
      };
    },
    requestReputationAttestation(value: MsgRequestReputationAttestation) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgRequestReputationAttestation",
        value
      };
    },
    verifyContent(value: MsgVerifyContent) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgVerifyContent",
        value
      };
    },
    challengeVerification(value: MsgChallengeVerification) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgChallengeVerification",
        value
      };
    },
    submitArbiterHash(value: MsgSubmitArbiterHash) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgSubmitArbiterHash",
        value
      };
    },
    escalateChallenge(value: MsgEscalateChallenge) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgEscalateChallenge",
        value
      };
    },
    resolveEscalatedChallenge(value: MsgResolveEscalatedChallenge) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgResolveEscalatedChallenge",
        value
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdateOperationalParams",
        value
      };
    },
    updatePeerController(value: MsgUpdatePeerController) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdatePeerController",
        value
      };
    },
    resyncBridgeCount(value: MsgResyncBridgeCount) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgResyncBridgeCount",
        value
      };
    },
    pruneOrphanBindings(value: MsgPruneOrphanBindings) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgPruneOrphanBindings",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    registerPeer(value: MsgRegisterPeer) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgRegisterPeer",
        value: MsgRegisterPeer.fromPartial(value)
      };
    },
    removePeer(value: MsgRemovePeer) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgRemovePeer",
        value: MsgRemovePeer.fromPartial(value)
      };
    },
    suspendPeer(value: MsgSuspendPeer) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgSuspendPeer",
        value: MsgSuspendPeer.fromPartial(value)
      };
    },
    resumePeer(value: MsgResumePeer) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgResumePeer",
        value: MsgResumePeer.fromPartial(value)
      };
    },
    updatePeerPolicy(value: MsgUpdatePeerPolicy) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdatePeerPolicy",
        value: MsgUpdatePeerPolicy.fromPartial(value)
      };
    },
    registerBridge(value: MsgRegisterBridge) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgRegisterBridge",
        value: MsgRegisterBridge.fromPartial(value)
      };
    },
    updateBridge(value: MsgUpdateBridge) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdateBridge",
        value: MsgUpdateBridge.fromPartial(value)
      };
    },
    submitFederatedContent(value: MsgSubmitFederatedContent) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgSubmitFederatedContent",
        value: MsgSubmitFederatedContent.fromPartial(value)
      };
    },
    federateContent(value: MsgFederateContent) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgFederateContent",
        value: MsgFederateContent.fromPartial(value)
      };
    },
    attestOutbound(value: MsgAttestOutbound) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgAttestOutbound",
        value: MsgAttestOutbound.fromPartial(value)
      };
    },
    moderateContent(value: MsgModerateContent) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgModerateContent",
        value: MsgModerateContent.fromPartial(value)
      };
    },
    linkIdentity(value: MsgLinkIdentity) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgLinkIdentity",
        value: MsgLinkIdentity.fromPartial(value)
      };
    },
    unlinkIdentity(value: MsgUnlinkIdentity) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUnlinkIdentity",
        value: MsgUnlinkIdentity.fromPartial(value)
      };
    },
    confirmIdentityLink(value: MsgConfirmIdentityLink) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgConfirmIdentityLink",
        value: MsgConfirmIdentityLink.fromPartial(value)
      };
    },
    requestReputationAttestation(value: MsgRequestReputationAttestation) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgRequestReputationAttestation",
        value: MsgRequestReputationAttestation.fromPartial(value)
      };
    },
    verifyContent(value: MsgVerifyContent) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgVerifyContent",
        value: MsgVerifyContent.fromPartial(value)
      };
    },
    challengeVerification(value: MsgChallengeVerification) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgChallengeVerification",
        value: MsgChallengeVerification.fromPartial(value)
      };
    },
    submitArbiterHash(value: MsgSubmitArbiterHash) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgSubmitArbiterHash",
        value: MsgSubmitArbiterHash.fromPartial(value)
      };
    },
    escalateChallenge(value: MsgEscalateChallenge) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgEscalateChallenge",
        value: MsgEscalateChallenge.fromPartial(value)
      };
    },
    resolveEscalatedChallenge(value: MsgResolveEscalatedChallenge) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgResolveEscalatedChallenge",
        value: MsgResolveEscalatedChallenge.fromPartial(value)
      };
    },
    updateOperationalParams(value: MsgUpdateOperationalParams) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdateOperationalParams",
        value: MsgUpdateOperationalParams.fromPartial(value)
      };
    },
    updatePeerController(value: MsgUpdatePeerController) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgUpdatePeerController",
        value: MsgUpdatePeerController.fromPartial(value)
      };
    },
    resyncBridgeCount(value: MsgResyncBridgeCount) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgResyncBridgeCount",
        value: MsgResyncBridgeCount.fromPartial(value)
      };
    },
    pruneOrphanBindings(value: MsgPruneOrphanBindings) {
      return {
        typeUrl: "/sparkdream.federation.v1.MsgPruneOrphanBindings",
        value: MsgPruneOrphanBindings.fromPartial(value)
      };
    }
  }
};