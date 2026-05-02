//@ts-nocheck
import { MsgUpdateParams, MsgRegisterPeer, MsgRemovePeer, MsgSuspendPeer, MsgResumePeer, MsgUpdatePeerPolicy, MsgRegisterBridge, MsgRevokeBridge, MsgSlashBridge, MsgUpdateBridge, MsgUnbondBridge, MsgTopUpBridgeStake, MsgSubmitFederatedContent, MsgFederateContent, MsgAttestOutbound, MsgModerateContent, MsgLinkIdentity, MsgUnlinkIdentity, MsgConfirmIdentityLink, MsgRequestReputationAttestation, MsgVerifyContent, MsgChallengeVerification, MsgSubmitArbiterHash, MsgEscalateChallenge, MsgUpdateOperationalParams } from "./tx";
export const AminoConverter = {
  "/sparkdream.federation.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/federation/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.federation.v1.MsgRegisterPeer": {
    aminoType: "/sparkdream.federation.v1.MsgRegisterPeer",
    toAmino: MsgRegisterPeer.toAmino,
    fromAmino: MsgRegisterPeer.fromAmino
  },
  "/sparkdream.federation.v1.MsgRemovePeer": {
    aminoType: "/sparkdream.federation.v1.MsgRemovePeer",
    toAmino: MsgRemovePeer.toAmino,
    fromAmino: MsgRemovePeer.fromAmino
  },
  "/sparkdream.federation.v1.MsgSuspendPeer": {
    aminoType: "/sparkdream.federation.v1.MsgSuspendPeer",
    toAmino: MsgSuspendPeer.toAmino,
    fromAmino: MsgSuspendPeer.fromAmino
  },
  "/sparkdream.federation.v1.MsgResumePeer": {
    aminoType: "/sparkdream.federation.v1.MsgResumePeer",
    toAmino: MsgResumePeer.toAmino,
    fromAmino: MsgResumePeer.fromAmino
  },
  "/sparkdream.federation.v1.MsgUpdatePeerPolicy": {
    aminoType: "/sparkdream.federation.v1.MsgUpdatePeerPolicy",
    toAmino: MsgUpdatePeerPolicy.toAmino,
    fromAmino: MsgUpdatePeerPolicy.fromAmino
  },
  "/sparkdream.federation.v1.MsgRegisterBridge": {
    aminoType: "/sparkdream.federation.v1.MsgRegisterBridge",
    toAmino: MsgRegisterBridge.toAmino,
    fromAmino: MsgRegisterBridge.fromAmino
  },
  "/sparkdream.federation.v1.MsgRevokeBridge": {
    aminoType: "/sparkdream.federation.v1.MsgRevokeBridge",
    toAmino: MsgRevokeBridge.toAmino,
    fromAmino: MsgRevokeBridge.fromAmino
  },
  "/sparkdream.federation.v1.MsgSlashBridge": {
    aminoType: "/sparkdream.federation.v1.MsgSlashBridge",
    toAmino: MsgSlashBridge.toAmino,
    fromAmino: MsgSlashBridge.fromAmino
  },
  "/sparkdream.federation.v1.MsgUpdateBridge": {
    aminoType: "/sparkdream.federation.v1.MsgUpdateBridge",
    toAmino: MsgUpdateBridge.toAmino,
    fromAmino: MsgUpdateBridge.fromAmino
  },
  "/sparkdream.federation.v1.MsgUnbondBridge": {
    aminoType: "/sparkdream.federation.v1.MsgUnbondBridge",
    toAmino: MsgUnbondBridge.toAmino,
    fromAmino: MsgUnbondBridge.fromAmino
  },
  "/sparkdream.federation.v1.MsgTopUpBridgeStake": {
    aminoType: "/sparkdream.federation.v1.MsgTopUpBridgeStake",
    toAmino: MsgTopUpBridgeStake.toAmino,
    fromAmino: MsgTopUpBridgeStake.fromAmino
  },
  "/sparkdream.federation.v1.MsgSubmitFederatedContent": {
    aminoType: "/sparkdream.federation.v1.MsgSubmitFederatedContent",
    toAmino: MsgSubmitFederatedContent.toAmino,
    fromAmino: MsgSubmitFederatedContent.fromAmino
  },
  "/sparkdream.federation.v1.MsgFederateContent": {
    aminoType: "/sparkdream.federation.v1.MsgFederateContent",
    toAmino: MsgFederateContent.toAmino,
    fromAmino: MsgFederateContent.fromAmino
  },
  "/sparkdream.federation.v1.MsgAttestOutbound": {
    aminoType: "/sparkdream.federation.v1.MsgAttestOutbound",
    toAmino: MsgAttestOutbound.toAmino,
    fromAmino: MsgAttestOutbound.fromAmino
  },
  "/sparkdream.federation.v1.MsgModerateContent": {
    aminoType: "/sparkdream.federation.v1.MsgModerateContent",
    toAmino: MsgModerateContent.toAmino,
    fromAmino: MsgModerateContent.fromAmino
  },
  "/sparkdream.federation.v1.MsgLinkIdentity": {
    aminoType: "/sparkdream.federation.v1.MsgLinkIdentity",
    toAmino: MsgLinkIdentity.toAmino,
    fromAmino: MsgLinkIdentity.fromAmino
  },
  "/sparkdream.federation.v1.MsgUnlinkIdentity": {
    aminoType: "/sparkdream.federation.v1.MsgUnlinkIdentity",
    toAmino: MsgUnlinkIdentity.toAmino,
    fromAmino: MsgUnlinkIdentity.fromAmino
  },
  "/sparkdream.federation.v1.MsgConfirmIdentityLink": {
    aminoType: "/sparkdream.federation.v1.MsgConfirmIdentityLink",
    toAmino: MsgConfirmIdentityLink.toAmino,
    fromAmino: MsgConfirmIdentityLink.fromAmino
  },
  "/sparkdream.federation.v1.MsgRequestReputationAttestation": {
    aminoType: "/sparkdream.federation.v1.MsgRequestReputationAttestation",
    toAmino: MsgRequestReputationAttestation.toAmino,
    fromAmino: MsgRequestReputationAttestation.fromAmino
  },
  "/sparkdream.federation.v1.MsgVerifyContent": {
    aminoType: "/sparkdream.federation.v1.MsgVerifyContent",
    toAmino: MsgVerifyContent.toAmino,
    fromAmino: MsgVerifyContent.fromAmino
  },
  "/sparkdream.federation.v1.MsgChallengeVerification": {
    aminoType: "/sparkdream.federation.v1.MsgChallengeVerification",
    toAmino: MsgChallengeVerification.toAmino,
    fromAmino: MsgChallengeVerification.fromAmino
  },
  "/sparkdream.federation.v1.MsgSubmitArbiterHash": {
    aminoType: "/sparkdream.federation.v1.MsgSubmitArbiterHash",
    toAmino: MsgSubmitArbiterHash.toAmino,
    fromAmino: MsgSubmitArbiterHash.fromAmino
  },
  "/sparkdream.federation.v1.MsgEscalateChallenge": {
    aminoType: "/sparkdream.federation.v1.MsgEscalateChallenge",
    toAmino: MsgEscalateChallenge.toAmino,
    fromAmino: MsgEscalateChallenge.fromAmino
  },
  "/sparkdream.federation.v1.MsgUpdateOperationalParams": {
    aminoType: "/sparkdream.federation.v1.MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  }
};