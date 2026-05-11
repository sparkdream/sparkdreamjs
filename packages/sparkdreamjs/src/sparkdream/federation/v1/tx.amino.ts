//@ts-nocheck
import { MsgUpdateParams, MsgRegisterPeer, MsgRemovePeer, MsgSuspendPeer, MsgResumePeer, MsgUpdatePeerPolicy, MsgRegisterBridge, MsgRevokeBridge, MsgSlashBridge, MsgUpdateBridge, MsgUnbondBridge, MsgTopUpBridgeStake, MsgSubmitFederatedContent, MsgFederateContent, MsgAttestOutbound, MsgModerateContent, MsgLinkIdentity, MsgUnlinkIdentity, MsgConfirmIdentityLink, MsgRequestReputationAttestation, MsgVerifyContent, MsgChallengeVerification, MsgSubmitArbiterHash, MsgEscalateChallenge, MsgUpdateOperationalParams } from "./tx";
export const AminoConverter = {
  "/sparkdream.federation.v1.MsgUpdateParams": {
    aminoType: "sparkdream/x/federation/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/sparkdream.federation.v1.MsgRegisterPeer": {
    aminoType: "sparkdream/x/federation/MsgRegisterPeer",
    toAmino: MsgRegisterPeer.toAmino,
    fromAmino: MsgRegisterPeer.fromAmino
  },
  "/sparkdream.federation.v1.MsgRemovePeer": {
    aminoType: "sparkdream/x/federation/MsgRemovePeer",
    toAmino: MsgRemovePeer.toAmino,
    fromAmino: MsgRemovePeer.fromAmino
  },
  "/sparkdream.federation.v1.MsgSuspendPeer": {
    aminoType: "sparkdream/x/federation/MsgSuspendPeer",
    toAmino: MsgSuspendPeer.toAmino,
    fromAmino: MsgSuspendPeer.fromAmino
  },
  "/sparkdream.federation.v1.MsgResumePeer": {
    aminoType: "sparkdream/x/federation/MsgResumePeer",
    toAmino: MsgResumePeer.toAmino,
    fromAmino: MsgResumePeer.fromAmino
  },
  "/sparkdream.federation.v1.MsgUpdatePeerPolicy": {
    aminoType: "sparkdream/x/federation/MsgUpdatePeerPolicy",
    toAmino: MsgUpdatePeerPolicy.toAmino,
    fromAmino: MsgUpdatePeerPolicy.fromAmino
  },
  "/sparkdream.federation.v1.MsgRegisterBridge": {
    aminoType: "sparkdream/x/federation/MsgRegisterBridge",
    toAmino: MsgRegisterBridge.toAmino,
    fromAmino: MsgRegisterBridge.fromAmino
  },
  "/sparkdream.federation.v1.MsgRevokeBridge": {
    aminoType: "sparkdream/x/federation/MsgRevokeBridge",
    toAmino: MsgRevokeBridge.toAmino,
    fromAmino: MsgRevokeBridge.fromAmino
  },
  "/sparkdream.federation.v1.MsgSlashBridge": {
    aminoType: "sparkdream/x/federation/MsgSlashBridge",
    toAmino: MsgSlashBridge.toAmino,
    fromAmino: MsgSlashBridge.fromAmino
  },
  "/sparkdream.federation.v1.MsgUpdateBridge": {
    aminoType: "sparkdream/x/federation/MsgUpdateBridge",
    toAmino: MsgUpdateBridge.toAmino,
    fromAmino: MsgUpdateBridge.fromAmino
  },
  "/sparkdream.federation.v1.MsgUnbondBridge": {
    aminoType: "sparkdream/x/federation/MsgUnbondBridge",
    toAmino: MsgUnbondBridge.toAmino,
    fromAmino: MsgUnbondBridge.fromAmino
  },
  "/sparkdream.federation.v1.MsgTopUpBridgeStake": {
    aminoType: "sparkdream/x/federation/MsgTopUpBridgeStake",
    toAmino: MsgTopUpBridgeStake.toAmino,
    fromAmino: MsgTopUpBridgeStake.fromAmino
  },
  "/sparkdream.federation.v1.MsgSubmitFederatedContent": {
    aminoType: "sparkdream/x/federation/MsgSubmitFederatedContent",
    toAmino: MsgSubmitFederatedContent.toAmino,
    fromAmino: MsgSubmitFederatedContent.fromAmino
  },
  "/sparkdream.federation.v1.MsgFederateContent": {
    aminoType: "sparkdream/x/federation/MsgFederateContent",
    toAmino: MsgFederateContent.toAmino,
    fromAmino: MsgFederateContent.fromAmino
  },
  "/sparkdream.federation.v1.MsgAttestOutbound": {
    aminoType: "sparkdream/x/federation/MsgAttestOutbound",
    toAmino: MsgAttestOutbound.toAmino,
    fromAmino: MsgAttestOutbound.fromAmino
  },
  "/sparkdream.federation.v1.MsgModerateContent": {
    aminoType: "sparkdream/x/federation/MsgModerateContent",
    toAmino: MsgModerateContent.toAmino,
    fromAmino: MsgModerateContent.fromAmino
  },
  "/sparkdream.federation.v1.MsgLinkIdentity": {
    aminoType: "sparkdream/x/federation/MsgLinkIdentity",
    toAmino: MsgLinkIdentity.toAmino,
    fromAmino: MsgLinkIdentity.fromAmino
  },
  "/sparkdream.federation.v1.MsgUnlinkIdentity": {
    aminoType: "sparkdream/x/federation/MsgUnlinkIdentity",
    toAmino: MsgUnlinkIdentity.toAmino,
    fromAmino: MsgUnlinkIdentity.fromAmino
  },
  "/sparkdream.federation.v1.MsgConfirmIdentityLink": {
    aminoType: "sparkdream/x/federation/MsgConfirmIdentityLink",
    toAmino: MsgConfirmIdentityLink.toAmino,
    fromAmino: MsgConfirmIdentityLink.fromAmino
  },
  "/sparkdream.federation.v1.MsgRequestReputationAttestation": {
    aminoType: "sparkdream/x/federation/MsgRequestReputationAttestation",
    toAmino: MsgRequestReputationAttestation.toAmino,
    fromAmino: MsgRequestReputationAttestation.fromAmino
  },
  "/sparkdream.federation.v1.MsgVerifyContent": {
    aminoType: "sparkdream/x/federation/MsgVerifyContent",
    toAmino: MsgVerifyContent.toAmino,
    fromAmino: MsgVerifyContent.fromAmino
  },
  "/sparkdream.federation.v1.MsgChallengeVerification": {
    aminoType: "sparkdream/x/federation/MsgChallengeVerification",
    toAmino: MsgChallengeVerification.toAmino,
    fromAmino: MsgChallengeVerification.fromAmino
  },
  "/sparkdream.federation.v1.MsgSubmitArbiterHash": {
    aminoType: "sparkdream/x/federation/MsgSubmitArbiterHash",
    toAmino: MsgSubmitArbiterHash.toAmino,
    fromAmino: MsgSubmitArbiterHash.fromAmino
  },
  "/sparkdream.federation.v1.MsgEscalateChallenge": {
    aminoType: "sparkdream/x/federation/MsgEscalateChallenge",
    toAmino: MsgEscalateChallenge.toAmino,
    fromAmino: MsgEscalateChallenge.fromAmino
  },
  "/sparkdream.federation.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/federation/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  }
};