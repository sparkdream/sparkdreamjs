//@ts-nocheck
// HAND-WRITTEN OVERRIDE — overlaid on top of the Telescope-generated tx.amino.ts
// by scripts/codegen.ts after each codegen run. Do not let codegen wipe this.
//
// Why: Telescope's auto-generated toAmino emits `[]` for empty repeated fields
// (the `if (message.field)` check is truthy for `[]` in JS), but
// cosmossdk.io/x/tx/signing/aminojson on the chain side omits them per
// `omitempty`. Whenever a repeated field happens to be empty, the JS side signs
// `"field":[]` and the chain reconstructs without the key — sign bytes differ,
// surfacing as "signature verification failed" / "unauthorized".
//
// Every federation message with a repeated field not marked
// `(amino.dont_omitempty) = true` is patched here to mirror aminojson's
// omitempty (return `undefined` when empty). MsgUpdatePeerPolicy's repeated
// fields sit inside the nested PeerPolicy, whose generated toAmino has the same
// bug, so it goes through peerPolicyToAmino below. The rest of the converters
// pass straight through to the auto-generated toAmino/fromAmino.
//
// MAINTENANCE: this map REPLACES the generated one wholesale, so it must list
// every message in tx.proto. A message added to the proto but not added here
// ends up with no amino converter at all, and amino (Ledger) signing for it
// fails at runtime. When syncing protos, diff the message list in
// protos/sparkdream/federation/v1/tx.proto against the keys below.

import { MsgUpdateParams, MsgRegisterPeer, MsgRemovePeer, MsgSuspendPeer, MsgResumePeer, MsgUpdatePeerPolicy, MsgRegisterBridge, MsgUpdateBridge, MsgSubmitFederatedContent, MsgFederateContent, MsgAttestOutbound, MsgModerateContent, MsgLinkIdentity, MsgUnlinkIdentity, MsgConfirmIdentityLink, MsgRequestReputationAttestation, MsgVerifyContent, MsgChallengeVerification, MsgSubmitArbiterHash, MsgEscalateChallenge, MsgResolveEscalatedChallenge, MsgUpdateOperationalParams, MsgUpdatePeerController, MsgResyncBridgeCount, MsgPruneOrphanBindings } from "./tx";
import { IdentityCuration } from "./types";

// Repeated string fields mirror aminojson's omitempty: omit when empty.
function omitEmptyStrings(list: string[] | undefined): string[] | undefined {
  return (list?.length ?? 0) > 0 ? list.map((e: string) => e) : undefined;
}

function peerPolicyToAmino(message: any): any {
  const obj: any = {};
  obj.peer_id = message.peerId === "" ? undefined : message.peerId;
  obj.outbound_content_types = omitEmptyStrings(message.outboundContentTypes);
  obj.inbound_content_types = omitEmptyStrings(message.inboundContentTypes);
  obj.min_outbound_trust_level = message.minOutboundTrustLevel === 0 ? undefined : message.minOutboundTrustLevel;
  obj.inbound_rate_limit_per_epoch = message.inboundRateLimitPerEpoch !== BigInt(0) ? message.inboundRateLimitPerEpoch?.toString() : undefined;
  obj.outbound_rate_limit_per_epoch = message.outboundRateLimitPerEpoch !== BigInt(0) ? message.outboundRateLimitPerEpoch?.toString() : undefined;
  obj.allow_reputation_queries = message.allowReputationQueries === false ? undefined : message.allowReputationQueries;
  obj.accept_reputation_attestations = message.acceptReputationAttestations === false ? undefined : message.acceptReputationAttestations;
  obj.require_review = message.requireReview === false ? undefined : message.requireReview;
  obj.blocked_identities = omitEmptyStrings(message.blockedIdentities);
  obj.content_hosts = omitEmptyStrings(message.contentHosts);
  obj.allowed_identities = omitEmptyStrings(message.allowedIdentities);
  obj.curation = message.curation ? IdentityCuration.toAmino(message.curation) : undefined;
  return obj;
}
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
    toAmino(message: any): any {
      const obj: any = {};
      obj.authority = message.authority === "" ? undefined : message.authority;
      obj.peer_id = message.peerId === "" ? undefined : message.peerId;
      obj.policy = message.policy ? peerPolicyToAmino(message.policy) : undefined;
      return obj;
    },
    fromAmino: MsgUpdatePeerPolicy.fromAmino
  },
  "/sparkdream.federation.v1.MsgRegisterBridge": {
    aminoType: "sparkdream/x/federation/MsgRegisterBridge",
    toAmino: MsgRegisterBridge.toAmino,
    fromAmino: MsgRegisterBridge.fromAmino
  },
  "/sparkdream.federation.v1.MsgUpdateBridge": {
    aminoType: "sparkdream/x/federation/MsgUpdateBridge",
    toAmino: MsgUpdateBridge.toAmino,
    fromAmino: MsgUpdateBridge.fromAmino
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
  "/sparkdream.federation.v1.MsgResolveEscalatedChallenge": {
    aminoType: "sparkdream/x/federation/MsgResolveEscalatedChallenge",
    toAmino: MsgResolveEscalatedChallenge.toAmino,
    fromAmino: MsgResolveEscalatedChallenge.fromAmino
  },
  "/sparkdream.federation.v1.MsgUpdateOperationalParams": {
    aminoType: "sparkdream/x/federation/MsgUpdateOperationalParams",
    toAmino: MsgUpdateOperationalParams.toAmino,
    fromAmino: MsgUpdateOperationalParams.fromAmino
  },
  "/sparkdream.federation.v1.MsgUpdatePeerController": {
    aminoType: "sparkdream/x/federation/MsgUpdatePeerController",
    toAmino: MsgUpdatePeerController.toAmino,
    fromAmino: MsgUpdatePeerController.fromAmino
  },
  "/sparkdream.federation.v1.MsgResyncBridgeCount": {
    aminoType: "sparkdream/x/federation/MsgResyncBridgeCount",
    toAmino: MsgResyncBridgeCount.toAmino,
    fromAmino: MsgResyncBridgeCount.fromAmino
  },
  "/sparkdream.federation.v1.MsgPruneOrphanBindings": {
    aminoType: "sparkdream/x/federation/MsgPruneOrphanBindings",
    toAmino: MsgPruneOrphanBindings.toAmino,
    fromAmino: MsgPruneOrphanBindings.fromAmino
  }
};
