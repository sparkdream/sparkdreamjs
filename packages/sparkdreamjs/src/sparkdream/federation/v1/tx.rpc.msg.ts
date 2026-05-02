//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgRegisterPeer, MsgRegisterPeerResponse, MsgRemovePeer, MsgRemovePeerResponse, MsgSuspendPeer, MsgSuspendPeerResponse, MsgResumePeer, MsgResumePeerResponse, MsgUpdatePeerPolicy, MsgUpdatePeerPolicyResponse, MsgRegisterBridge, MsgRegisterBridgeResponse, MsgRevokeBridge, MsgRevokeBridgeResponse, MsgSlashBridge, MsgSlashBridgeResponse, MsgUpdateBridge, MsgUpdateBridgeResponse, MsgUnbondBridge, MsgUnbondBridgeResponse, MsgTopUpBridgeStake, MsgTopUpBridgeStakeResponse, MsgSubmitFederatedContent, MsgSubmitFederatedContentResponse, MsgFederateContent, MsgFederateContentResponse, MsgAttestOutbound, MsgAttestOutboundResponse, MsgModerateContent, MsgModerateContentResponse, MsgLinkIdentity, MsgLinkIdentityResponse, MsgUnlinkIdentity, MsgUnlinkIdentityResponse, MsgConfirmIdentityLink, MsgConfirmIdentityLinkResponse, MsgRequestReputationAttestation, MsgRequestReputationAttestationResponse, MsgVerifyContent, MsgVerifyContentResponse, MsgChallengeVerification, MsgChallengeVerificationResponse, MsgSubmitArbiterHash, MsgSubmitArbiterHashResponse, MsgEscalateChallenge, MsgEscalateChallengeResponse, MsgUpdateOperationalParams, MsgUpdateOperationalParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  registerPeer(request: MsgRegisterPeer): Promise<MsgRegisterPeerResponse>;
  removePeer(request: MsgRemovePeer): Promise<MsgRemovePeerResponse>;
  suspendPeer(request: MsgSuspendPeer): Promise<MsgSuspendPeerResponse>;
  resumePeer(request: MsgResumePeer): Promise<MsgResumePeerResponse>;
  updatePeerPolicy(request: MsgUpdatePeerPolicy): Promise<MsgUpdatePeerPolicyResponse>;
  registerBridge(request: MsgRegisterBridge): Promise<MsgRegisterBridgeResponse>;
  revokeBridge(request: MsgRevokeBridge): Promise<MsgRevokeBridgeResponse>;
  slashBridge(request: MsgSlashBridge): Promise<MsgSlashBridgeResponse>;
  updateBridge(request: MsgUpdateBridge): Promise<MsgUpdateBridgeResponse>;
  unbondBridge(request: MsgUnbondBridge): Promise<MsgUnbondBridgeResponse>;
  topUpBridgeStake(request: MsgTopUpBridgeStake): Promise<MsgTopUpBridgeStakeResponse>;
  submitFederatedContent(request: MsgSubmitFederatedContent): Promise<MsgSubmitFederatedContentResponse>;
  federateContent(request: MsgFederateContent): Promise<MsgFederateContentResponse>;
  attestOutbound(request: MsgAttestOutbound): Promise<MsgAttestOutboundResponse>;
  moderateContent(request: MsgModerateContent): Promise<MsgModerateContentResponse>;
  linkIdentity(request: MsgLinkIdentity): Promise<MsgLinkIdentityResponse>;
  unlinkIdentity(request: MsgUnlinkIdentity): Promise<MsgUnlinkIdentityResponse>;
  confirmIdentityLink(request: MsgConfirmIdentityLink): Promise<MsgConfirmIdentityLinkResponse>;
  requestReputationAttestation(request: MsgRequestReputationAttestation): Promise<MsgRequestReputationAttestationResponse>;
  /**
   * NOTE: Phase 4 of the bonded-role generalization removed BondVerifier /
   * UnbondVerifier RPCs. Verifier bonding now flows through x/rep's generic
   * MsgBondRole / MsgUnbondRole with role_type=ROLE_TYPE_FEDERATION_VERIFIER.
   */
  verifyContent(request: MsgVerifyContent): Promise<MsgVerifyContentResponse>;
  challengeVerification(request: MsgChallengeVerification): Promise<MsgChallengeVerificationResponse>;
  submitArbiterHash(request: MsgSubmitArbiterHash): Promise<MsgSubmitArbiterHashResponse>;
  escalateChallenge(request: MsgEscalateChallenge): Promise<MsgEscalateChallengeResponse>;
  updateOperationalParams(request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* RegisterPeer */
  registerPeer = async (request: MsgRegisterPeer): Promise<MsgRegisterPeerResponse> => {
    const data = MsgRegisterPeer.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "RegisterPeer", data);
    return promise.then(data => MsgRegisterPeerResponse.decode(new BinaryReader(data)));
  };
  /* RemovePeer */
  removePeer = async (request: MsgRemovePeer): Promise<MsgRemovePeerResponse> => {
    const data = MsgRemovePeer.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "RemovePeer", data);
    return promise.then(data => MsgRemovePeerResponse.decode(new BinaryReader(data)));
  };
  /* SuspendPeer */
  suspendPeer = async (request: MsgSuspendPeer): Promise<MsgSuspendPeerResponse> => {
    const data = MsgSuspendPeer.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "SuspendPeer", data);
    return promise.then(data => MsgSuspendPeerResponse.decode(new BinaryReader(data)));
  };
  /* ResumePeer */
  resumePeer = async (request: MsgResumePeer): Promise<MsgResumePeerResponse> => {
    const data = MsgResumePeer.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "ResumePeer", data);
    return promise.then(data => MsgResumePeerResponse.decode(new BinaryReader(data)));
  };
  /* UpdatePeerPolicy */
  updatePeerPolicy = async (request: MsgUpdatePeerPolicy): Promise<MsgUpdatePeerPolicyResponse> => {
    const data = MsgUpdatePeerPolicy.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "UpdatePeerPolicy", data);
    return promise.then(data => MsgUpdatePeerPolicyResponse.decode(new BinaryReader(data)));
  };
  /* RegisterBridge */
  registerBridge = async (request: MsgRegisterBridge): Promise<MsgRegisterBridgeResponse> => {
    const data = MsgRegisterBridge.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "RegisterBridge", data);
    return promise.then(data => MsgRegisterBridgeResponse.decode(new BinaryReader(data)));
  };
  /* RevokeBridge */
  revokeBridge = async (request: MsgRevokeBridge): Promise<MsgRevokeBridgeResponse> => {
    const data = MsgRevokeBridge.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "RevokeBridge", data);
    return promise.then(data => MsgRevokeBridgeResponse.decode(new BinaryReader(data)));
  };
  /* SlashBridge */
  slashBridge = async (request: MsgSlashBridge): Promise<MsgSlashBridgeResponse> => {
    const data = MsgSlashBridge.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "SlashBridge", data);
    return promise.then(data => MsgSlashBridgeResponse.decode(new BinaryReader(data)));
  };
  /* UpdateBridge */
  updateBridge = async (request: MsgUpdateBridge): Promise<MsgUpdateBridgeResponse> => {
    const data = MsgUpdateBridge.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "UpdateBridge", data);
    return promise.then(data => MsgUpdateBridgeResponse.decode(new BinaryReader(data)));
  };
  /* UnbondBridge */
  unbondBridge = async (request: MsgUnbondBridge): Promise<MsgUnbondBridgeResponse> => {
    const data = MsgUnbondBridge.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "UnbondBridge", data);
    return promise.then(data => MsgUnbondBridgeResponse.decode(new BinaryReader(data)));
  };
  /* TopUpBridgeStake */
  topUpBridgeStake = async (request: MsgTopUpBridgeStake): Promise<MsgTopUpBridgeStakeResponse> => {
    const data = MsgTopUpBridgeStake.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "TopUpBridgeStake", data);
    return promise.then(data => MsgTopUpBridgeStakeResponse.decode(new BinaryReader(data)));
  };
  /* SubmitFederatedContent */
  submitFederatedContent = async (request: MsgSubmitFederatedContent): Promise<MsgSubmitFederatedContentResponse> => {
    const data = MsgSubmitFederatedContent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "SubmitFederatedContent", data);
    return promise.then(data => MsgSubmitFederatedContentResponse.decode(new BinaryReader(data)));
  };
  /* FederateContent */
  federateContent = async (request: MsgFederateContent): Promise<MsgFederateContentResponse> => {
    const data = MsgFederateContent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "FederateContent", data);
    return promise.then(data => MsgFederateContentResponse.decode(new BinaryReader(data)));
  };
  /* AttestOutbound */
  attestOutbound = async (request: MsgAttestOutbound): Promise<MsgAttestOutboundResponse> => {
    const data = MsgAttestOutbound.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "AttestOutbound", data);
    return promise.then(data => MsgAttestOutboundResponse.decode(new BinaryReader(data)));
  };
  /* ModerateContent */
  moderateContent = async (request: MsgModerateContent): Promise<MsgModerateContentResponse> => {
    const data = MsgModerateContent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "ModerateContent", data);
    return promise.then(data => MsgModerateContentResponse.decode(new BinaryReader(data)));
  };
  /* LinkIdentity */
  linkIdentity = async (request: MsgLinkIdentity): Promise<MsgLinkIdentityResponse> => {
    const data = MsgLinkIdentity.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "LinkIdentity", data);
    return promise.then(data => MsgLinkIdentityResponse.decode(new BinaryReader(data)));
  };
  /* UnlinkIdentity */
  unlinkIdentity = async (request: MsgUnlinkIdentity): Promise<MsgUnlinkIdentityResponse> => {
    const data = MsgUnlinkIdentity.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "UnlinkIdentity", data);
    return promise.then(data => MsgUnlinkIdentityResponse.decode(new BinaryReader(data)));
  };
  /* ConfirmIdentityLink */
  confirmIdentityLink = async (request: MsgConfirmIdentityLink): Promise<MsgConfirmIdentityLinkResponse> => {
    const data = MsgConfirmIdentityLink.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "ConfirmIdentityLink", data);
    return promise.then(data => MsgConfirmIdentityLinkResponse.decode(new BinaryReader(data)));
  };
  /* RequestReputationAttestation */
  requestReputationAttestation = async (request: MsgRequestReputationAttestation): Promise<MsgRequestReputationAttestationResponse> => {
    const data = MsgRequestReputationAttestation.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "RequestReputationAttestation", data);
    return promise.then(data => MsgRequestReputationAttestationResponse.decode(new BinaryReader(data)));
  };
  /* NOTE: Phase 4 of the bonded-role generalization removed BondVerifier /
   UnbondVerifier RPCs. Verifier bonding now flows through x/rep's generic
   MsgBondRole / MsgUnbondRole with role_type=ROLE_TYPE_FEDERATION_VERIFIER. */
  verifyContent = async (request: MsgVerifyContent): Promise<MsgVerifyContentResponse> => {
    const data = MsgVerifyContent.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "VerifyContent", data);
    return promise.then(data => MsgVerifyContentResponse.decode(new BinaryReader(data)));
  };
  /* ChallengeVerification */
  challengeVerification = async (request: MsgChallengeVerification): Promise<MsgChallengeVerificationResponse> => {
    const data = MsgChallengeVerification.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "ChallengeVerification", data);
    return promise.then(data => MsgChallengeVerificationResponse.decode(new BinaryReader(data)));
  };
  /* SubmitArbiterHash */
  submitArbiterHash = async (request: MsgSubmitArbiterHash): Promise<MsgSubmitArbiterHashResponse> => {
    const data = MsgSubmitArbiterHash.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "SubmitArbiterHash", data);
    return promise.then(data => MsgSubmitArbiterHashResponse.decode(new BinaryReader(data)));
  };
  /* EscalateChallenge */
  escalateChallenge = async (request: MsgEscalateChallenge): Promise<MsgEscalateChallengeResponse> => {
    const data = MsgEscalateChallenge.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "EscalateChallenge", data);
    return promise.then(data => MsgEscalateChallengeResponse.decode(new BinaryReader(data)));
  };
  /* UpdateOperationalParams */
  updateOperationalParams = async (request: MsgUpdateOperationalParams): Promise<MsgUpdateOperationalParamsResponse> => {
    const data = MsgUpdateOperationalParams.encode(request).finish();
    const promise = this.rpc.request("sparkdream.federation.v1.Msg", "UpdateOperationalParams", data);
    return promise.then(data => MsgUpdateOperationalParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};