//@ts-nocheck
import { ChainIdentity, ChainIdentityAmino } from "../../identity/v1/chain_identity";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export enum PeerType {
  PEER_TYPE_UNSPECIFIED = 0,
  PEER_TYPE_SPARK_DREAM = 1,
  PEER_TYPE_ACTIVITYPUB = 2,
  PEER_TYPE_ATPROTO = 3,
  /**
   * PEER_TYPE_NOSTR - NOSTR peers are modeled per-relay (one Peer = one relay endpoint).
   * Uses an off-chain bridge daemon, same accountability model as
   * ActivityPub/AT Protocol. NOSTR identity (pubkey) is global, so the
   * same remote_identity may be linked across multiple NOSTR-relay peers.
   */
  PEER_TYPE_NOSTR = 4,
  /**
   * PEER_TYPE_LENS - Lens peers represent a Lens Chain deployment (zkSync L2 + Avail DA).
   * Identity is on-chain (wallet address + tokenized handle NFT); the
   * off-chain bridge daemon is expected to query Lens Chain RPC to
   * verify NFT ownership before attesting, raising the bar relative to
   * pure HTTP-signature attestation used for ActivityPub. Future work
   * (deferred): MsgLinkIdentityViaStateProof for fully on-chain
   * verification via EVM state proofs.
   */
  PEER_TYPE_LENS = 5,
  UNRECOGNIZED = -1,
}
export const PeerTypeAmino = PeerType;
export function peerTypeFromJSON(object: any): PeerType {
  switch (object) {
    case 0:
    case "PEER_TYPE_UNSPECIFIED":
      return PeerType.PEER_TYPE_UNSPECIFIED;
    case 1:
    case "PEER_TYPE_SPARK_DREAM":
      return PeerType.PEER_TYPE_SPARK_DREAM;
    case 2:
    case "PEER_TYPE_ACTIVITYPUB":
      return PeerType.PEER_TYPE_ACTIVITYPUB;
    case 3:
    case "PEER_TYPE_ATPROTO":
      return PeerType.PEER_TYPE_ATPROTO;
    case 4:
    case "PEER_TYPE_NOSTR":
      return PeerType.PEER_TYPE_NOSTR;
    case 5:
    case "PEER_TYPE_LENS":
      return PeerType.PEER_TYPE_LENS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PeerType.UNRECOGNIZED;
  }
}
export function peerTypeToJSON(object: PeerType): string {
  switch (object) {
    case PeerType.PEER_TYPE_UNSPECIFIED:
      return "PEER_TYPE_UNSPECIFIED";
    case PeerType.PEER_TYPE_SPARK_DREAM:
      return "PEER_TYPE_SPARK_DREAM";
    case PeerType.PEER_TYPE_ACTIVITYPUB:
      return "PEER_TYPE_ACTIVITYPUB";
    case PeerType.PEER_TYPE_ATPROTO:
      return "PEER_TYPE_ATPROTO";
    case PeerType.PEER_TYPE_NOSTR:
      return "PEER_TYPE_NOSTR";
    case PeerType.PEER_TYPE_LENS:
      return "PEER_TYPE_LENS";
    case PeerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum PeerStatus {
  PEER_STATUS_PENDING = 0,
  PEER_STATUS_ACTIVE = 1,
  PEER_STATUS_SUSPENDED = 2,
  PEER_STATUS_REMOVED = 3,
  UNRECOGNIZED = -1,
}
export const PeerStatusAmino = PeerStatus;
export function peerStatusFromJSON(object: any): PeerStatus {
  switch (object) {
    case 0:
    case "PEER_STATUS_PENDING":
      return PeerStatus.PEER_STATUS_PENDING;
    case 1:
    case "PEER_STATUS_ACTIVE":
      return PeerStatus.PEER_STATUS_ACTIVE;
    case 2:
    case "PEER_STATUS_SUSPENDED":
      return PeerStatus.PEER_STATUS_SUSPENDED;
    case 3:
    case "PEER_STATUS_REMOVED":
      return PeerStatus.PEER_STATUS_REMOVED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PeerStatus.UNRECOGNIZED;
  }
}
export function peerStatusToJSON(object: PeerStatus): string {
  switch (object) {
    case PeerStatus.PEER_STATUS_PENDING:
      return "PEER_STATUS_PENDING";
    case PeerStatus.PEER_STATUS_ACTIVE:
      return "PEER_STATUS_ACTIVE";
    case PeerStatus.PEER_STATUS_SUSPENDED:
      return "PEER_STATUS_SUSPENDED";
    case PeerStatus.PEER_STATUS_REMOVED:
      return "PEER_STATUS_REMOVED";
    case PeerStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum BridgeStatus {
  BRIDGE_STATUS_UNSPECIFIED = 0,
  BRIDGE_STATUS_ACTIVE = 1,
  BRIDGE_STATUS_SUSPENDED = 2,
  BRIDGE_STATUS_UNBONDING = 3,
  BRIDGE_STATUS_REVOKED = 4,
  UNRECOGNIZED = -1,
}
export const BridgeStatusAmino = BridgeStatus;
export function bridgeStatusFromJSON(object: any): BridgeStatus {
  switch (object) {
    case 0:
    case "BRIDGE_STATUS_UNSPECIFIED":
      return BridgeStatus.BRIDGE_STATUS_UNSPECIFIED;
    case 1:
    case "BRIDGE_STATUS_ACTIVE":
      return BridgeStatus.BRIDGE_STATUS_ACTIVE;
    case 2:
    case "BRIDGE_STATUS_SUSPENDED":
      return BridgeStatus.BRIDGE_STATUS_SUSPENDED;
    case 3:
    case "BRIDGE_STATUS_UNBONDING":
      return BridgeStatus.BRIDGE_STATUS_UNBONDING;
    case 4:
    case "BRIDGE_STATUS_REVOKED":
      return BridgeStatus.BRIDGE_STATUS_REVOKED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BridgeStatus.UNRECOGNIZED;
  }
}
export function bridgeStatusToJSON(object: BridgeStatus): string {
  switch (object) {
    case BridgeStatus.BRIDGE_STATUS_UNSPECIFIED:
      return "BRIDGE_STATUS_UNSPECIFIED";
    case BridgeStatus.BRIDGE_STATUS_ACTIVE:
      return "BRIDGE_STATUS_ACTIVE";
    case BridgeStatus.BRIDGE_STATUS_SUSPENDED:
      return "BRIDGE_STATUS_SUSPENDED";
    case BridgeStatus.BRIDGE_STATUS_UNBONDING:
      return "BRIDGE_STATUS_UNBONDING";
    case BridgeStatus.BRIDGE_STATUS_REVOKED:
      return "BRIDGE_STATUS_REVOKED";
    case BridgeStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FederatedContentStatus {
  FEDERATED_CONTENT_STATUS_PENDING_VERIFICATION = 0,
  FEDERATED_CONTENT_STATUS_VERIFIED = 1,
  FEDERATED_CONTENT_STATUS_ACTIVE = 2,
  FEDERATED_CONTENT_STATUS_HIDDEN = 3,
  FEDERATED_CONTENT_STATUS_DISPUTED = 4,
  FEDERATED_CONTENT_STATUS_CHALLENGED = 5,
  FEDERATED_CONTENT_STATUS_REJECTED = 6,
  /**
   * FEDERATED_CONTENT_STATUS_UNRESOLVED - UNRESOLVED is system-assigned: the arbiter resolution window expired
   * without quorum, so no finding was ever made about the content. It is
   * terminal, deliberately excluded from MsgModerateContent (OpsComm
   * moderates HIDDEN/ACTIVE/VERIFIED/REJECTED, not system states), and
   * was chosen over reverting to PENDING_VERIFICATION because a revived
   * record would have no VerificationWindow queue entry and a verification
   * deadline already in the past — unverifiable and unreapable until
   * content_ttl. Local state only: FederatedContentStatus never crosses
   * the IBC wire (see packet_wire_compat_test.go).
   */
  FEDERATED_CONTENT_STATUS_UNRESOLVED = 7,
  /**
   * FEDERATED_CONTENT_STATUS_SUPERSEDED - SUPERSEDED is system-assigned: the submitting operator anchored a newer
   * version of the same content_uri (an edit) while this record was still
   * PENDING_VERIFICATION. The anchored version no longer exists at the
   * source, so no verifier can ever confirm it; retiring it here keeps it
   * out of the verification-expiry sweep, which would otherwise count it
   * against an honest operator as unverified. Terminal and excluded from
   * MsgModerateContent for the same reason as UNRESOLVED: moderating it
   * could manufacture a VERIFIED status for bytes nobody verified. Local
   * state only; never crosses the IBC wire.
   */
  FEDERATED_CONTENT_STATUS_SUPERSEDED = 8,
  UNRECOGNIZED = -1,
}
export const FederatedContentStatusAmino = FederatedContentStatus;
export function federatedContentStatusFromJSON(object: any): FederatedContentStatus {
  switch (object) {
    case 0:
    case "FEDERATED_CONTENT_STATUS_PENDING_VERIFICATION":
      return FederatedContentStatus.FEDERATED_CONTENT_STATUS_PENDING_VERIFICATION;
    case 1:
    case "FEDERATED_CONTENT_STATUS_VERIFIED":
      return FederatedContentStatus.FEDERATED_CONTENT_STATUS_VERIFIED;
    case 2:
    case "FEDERATED_CONTENT_STATUS_ACTIVE":
      return FederatedContentStatus.FEDERATED_CONTENT_STATUS_ACTIVE;
    case 3:
    case "FEDERATED_CONTENT_STATUS_HIDDEN":
      return FederatedContentStatus.FEDERATED_CONTENT_STATUS_HIDDEN;
    case 4:
    case "FEDERATED_CONTENT_STATUS_DISPUTED":
      return FederatedContentStatus.FEDERATED_CONTENT_STATUS_DISPUTED;
    case 5:
    case "FEDERATED_CONTENT_STATUS_CHALLENGED":
      return FederatedContentStatus.FEDERATED_CONTENT_STATUS_CHALLENGED;
    case 6:
    case "FEDERATED_CONTENT_STATUS_REJECTED":
      return FederatedContentStatus.FEDERATED_CONTENT_STATUS_REJECTED;
    case 7:
    case "FEDERATED_CONTENT_STATUS_UNRESOLVED":
      return FederatedContentStatus.FEDERATED_CONTENT_STATUS_UNRESOLVED;
    case 8:
    case "FEDERATED_CONTENT_STATUS_SUPERSEDED":
      return FederatedContentStatus.FEDERATED_CONTENT_STATUS_SUPERSEDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FederatedContentStatus.UNRECOGNIZED;
  }
}
export function federatedContentStatusToJSON(object: FederatedContentStatus): string {
  switch (object) {
    case FederatedContentStatus.FEDERATED_CONTENT_STATUS_PENDING_VERIFICATION:
      return "FEDERATED_CONTENT_STATUS_PENDING_VERIFICATION";
    case FederatedContentStatus.FEDERATED_CONTENT_STATUS_VERIFIED:
      return "FEDERATED_CONTENT_STATUS_VERIFIED";
    case FederatedContentStatus.FEDERATED_CONTENT_STATUS_ACTIVE:
      return "FEDERATED_CONTENT_STATUS_ACTIVE";
    case FederatedContentStatus.FEDERATED_CONTENT_STATUS_HIDDEN:
      return "FEDERATED_CONTENT_STATUS_HIDDEN";
    case FederatedContentStatus.FEDERATED_CONTENT_STATUS_DISPUTED:
      return "FEDERATED_CONTENT_STATUS_DISPUTED";
    case FederatedContentStatus.FEDERATED_CONTENT_STATUS_CHALLENGED:
      return "FEDERATED_CONTENT_STATUS_CHALLENGED";
    case FederatedContentStatus.FEDERATED_CONTENT_STATUS_REJECTED:
      return "FEDERATED_CONTENT_STATUS_REJECTED";
    case FederatedContentStatus.FEDERATED_CONTENT_STATUS_UNRESOLVED:
      return "FEDERATED_CONTENT_STATUS_UNRESOLVED";
    case FederatedContentStatus.FEDERATED_CONTENT_STATUS_SUPERSEDED:
      return "FEDERATED_CONTENT_STATUS_SUPERSEDED";
    case FederatedContentStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum IdentityLinkStatus {
  IDENTITY_LINK_STATUS_UNVERIFIED = 0,
  IDENTITY_LINK_STATUS_VERIFIED = 1,
  IDENTITY_LINK_STATUS_REVOKED = 2,
  UNRECOGNIZED = -1,
}
export const IdentityLinkStatusAmino = IdentityLinkStatus;
export function identityLinkStatusFromJSON(object: any): IdentityLinkStatus {
  switch (object) {
    case 0:
    case "IDENTITY_LINK_STATUS_UNVERIFIED":
      return IdentityLinkStatus.IDENTITY_LINK_STATUS_UNVERIFIED;
    case 1:
    case "IDENTITY_LINK_STATUS_VERIFIED":
      return IdentityLinkStatus.IDENTITY_LINK_STATUS_VERIFIED;
    case 2:
    case "IDENTITY_LINK_STATUS_REVOKED":
      return IdentityLinkStatus.IDENTITY_LINK_STATUS_REVOKED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IdentityLinkStatus.UNRECOGNIZED;
  }
}
export function identityLinkStatusToJSON(object: IdentityLinkStatus): string {
  switch (object) {
    case IdentityLinkStatus.IDENTITY_LINK_STATUS_UNVERIFIED:
      return "IDENTITY_LINK_STATUS_UNVERIFIED";
    case IdentityLinkStatus.IDENTITY_LINK_STATUS_VERIFIED:
      return "IDENTITY_LINK_STATUS_VERIFIED";
    case IdentityLinkStatus.IDENTITY_LINK_STATUS_REVOKED:
      return "IDENTITY_LINK_STATUS_REVOKED";
    case IdentityLinkStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum VerificationOutcome {
  VERIFICATION_OUTCOME_UNSPECIFIED = 0,
  VERIFICATION_OUTCOME_PENDING = 1,
  VERIFICATION_OUTCOME_CONFIRMED = 2,
  VERIFICATION_OUTCOME_CHALLENGED = 3,
  VERIFICATION_OUTCOME_UPHELD = 4,
  VERIFICATION_OUTCOME_OVERTURNED = 5,
  UNRECOGNIZED = -1,
}
export const VerificationOutcomeAmino = VerificationOutcome;
export function verificationOutcomeFromJSON(object: any): VerificationOutcome {
  switch (object) {
    case 0:
    case "VERIFICATION_OUTCOME_UNSPECIFIED":
      return VerificationOutcome.VERIFICATION_OUTCOME_UNSPECIFIED;
    case 1:
    case "VERIFICATION_OUTCOME_PENDING":
      return VerificationOutcome.VERIFICATION_OUTCOME_PENDING;
    case 2:
    case "VERIFICATION_OUTCOME_CONFIRMED":
      return VerificationOutcome.VERIFICATION_OUTCOME_CONFIRMED;
    case 3:
    case "VERIFICATION_OUTCOME_CHALLENGED":
      return VerificationOutcome.VERIFICATION_OUTCOME_CHALLENGED;
    case 4:
    case "VERIFICATION_OUTCOME_UPHELD":
      return VerificationOutcome.VERIFICATION_OUTCOME_UPHELD;
    case 5:
    case "VERIFICATION_OUTCOME_OVERTURNED":
      return VerificationOutcome.VERIFICATION_OUTCOME_OVERTURNED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VerificationOutcome.UNRECOGNIZED;
  }
}
export function verificationOutcomeToJSON(object: VerificationOutcome): string {
  switch (object) {
    case VerificationOutcome.VERIFICATION_OUTCOME_UNSPECIFIED:
      return "VERIFICATION_OUTCOME_UNSPECIFIED";
    case VerificationOutcome.VERIFICATION_OUTCOME_PENDING:
      return "VERIFICATION_OUTCOME_PENDING";
    case VerificationOutcome.VERIFICATION_OUTCOME_CONFIRMED:
      return "VERIFICATION_OUTCOME_CONFIRMED";
    case VerificationOutcome.VERIFICATION_OUTCOME_CHALLENGED:
      return "VERIFICATION_OUTCOME_CHALLENGED";
    case VerificationOutcome.VERIFICATION_OUTCOME_UPHELD:
      return "VERIFICATION_OUTCOME_UPHELD";
    case VerificationOutcome.VERIFICATION_OUTCOME_OVERTURNED:
      return "VERIFICATION_OUTCOME_OVERTURNED";
    case VerificationOutcome.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SettlementKind names an EndBlocker settlement that failed and is retried. */
export enum SettlementKind {
  SETTLEMENT_KIND_UNSPECIFIED = 0,
  /** SETTLEMENT_KIND_NO_QUORUM - The arbiter resolution window closed without a quorum. */
  SETTLEMENT_KIND_NO_QUORUM = 1,
  /** SETTLEMENT_KIND_AUTO_VERDICT - The escalation window of a stashed arbiter verdict closed. */
  SETTLEMENT_KIND_AUTO_VERDICT = 2,
  /** SETTLEMENT_KIND_JURY_TIMEOUT - The jury deadline of an escalated challenge passed (TIMEOUT). */
  SETTLEMENT_KIND_JURY_TIMEOUT = 3,
  UNRECOGNIZED = -1,
}
export const SettlementKindAmino = SettlementKind;
export function settlementKindFromJSON(object: any): SettlementKind {
  switch (object) {
    case 0:
    case "SETTLEMENT_KIND_UNSPECIFIED":
      return SettlementKind.SETTLEMENT_KIND_UNSPECIFIED;
    case 1:
    case "SETTLEMENT_KIND_NO_QUORUM":
      return SettlementKind.SETTLEMENT_KIND_NO_QUORUM;
    case 2:
    case "SETTLEMENT_KIND_AUTO_VERDICT":
      return SettlementKind.SETTLEMENT_KIND_AUTO_VERDICT;
    case 3:
    case "SETTLEMENT_KIND_JURY_TIMEOUT":
      return SettlementKind.SETTLEMENT_KIND_JURY_TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SettlementKind.UNRECOGNIZED;
  }
}
export function settlementKindToJSON(object: SettlementKind): string {
  switch (object) {
    case SettlementKind.SETTLEMENT_KIND_UNSPECIFIED:
      return "SETTLEMENT_KIND_UNSPECIFIED";
    case SettlementKind.SETTLEMENT_KIND_NO_QUORUM:
      return "SETTLEMENT_KIND_NO_QUORUM";
    case SettlementKind.SETTLEMENT_KIND_AUTO_VERDICT:
      return "SETTLEMENT_KIND_AUTO_VERDICT";
    case SettlementKind.SETTLEMENT_KIND_JURY_TIMEOUT:
      return "SETTLEMENT_KIND_JURY_TIMEOUT";
    case SettlementKind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * PendingVerifierVerdict captures an arbiter-quorum auto-verdict that
 * hasn't yet been applied (escalation window still open). Drives the
 * fee-disbursement and slash logic in EndBlocker phase
 * finalizeAutoResolutions.
 */
export enum PendingVerifierVerdict {
  PENDING_VERIFIER_VERDICT_UNSPECIFIED = 0,
  PENDING_VERIFIER_VERDICT_VERIFIER_RIGHT = 1,
  PENDING_VERIFIER_VERDICT_VERIFIER_WRONG = 2,
  UNRECOGNIZED = -1,
}
export const PendingVerifierVerdictAmino = PendingVerifierVerdict;
export function pendingVerifierVerdictFromJSON(object: any): PendingVerifierVerdict {
  switch (object) {
    case 0:
    case "PENDING_VERIFIER_VERDICT_UNSPECIFIED":
      return PendingVerifierVerdict.PENDING_VERIFIER_VERDICT_UNSPECIFIED;
    case 1:
    case "PENDING_VERIFIER_VERDICT_VERIFIER_RIGHT":
      return PendingVerifierVerdict.PENDING_VERIFIER_VERDICT_VERIFIER_RIGHT;
    case 2:
    case "PENDING_VERIFIER_VERDICT_VERIFIER_WRONG":
      return PendingVerifierVerdict.PENDING_VERIFIER_VERDICT_VERIFIER_WRONG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PendingVerifierVerdict.UNRECOGNIZED;
  }
}
export function pendingVerifierVerdictToJSON(object: PendingVerifierVerdict): string {
  switch (object) {
    case PendingVerifierVerdict.PENDING_VERIFIER_VERDICT_UNSPECIFIED:
      return "PENDING_VERIFIER_VERDICT_UNSPECIFIED";
    case PendingVerifierVerdict.PENDING_VERIFIER_VERDICT_VERIFIER_RIGHT:
      return "PENDING_VERIFIER_VERDICT_VERIFIER_RIGHT";
    case PendingVerifierVerdict.PENDING_VERIFIER_VERDICT_VERIFIER_WRONG:
      return "PENDING_VERIFIER_VERDICT_VERIFIER_WRONG";
    case PendingVerifierVerdict.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * JuryVerdict is the Phase 2 (human jury) outcome for an escalated
 * challenge. Submitted via MsgResolveEscalatedChallenge or stamped
 * automatically on jury deadline expiry (TIMEOUT). Drives the final
 * fee disbursement, content status, and verifier-side accounting.
 */
export enum JuryVerdict {
  JURY_VERDICT_UNSPECIFIED = 0,
  JURY_VERDICT_CHALLENGE_UPHELD = 1,
  JURY_VERDICT_CHALLENGE_REJECTED = 2,
  JURY_VERDICT_CHALLENGE_TIMEOUT = 3,
  UNRECOGNIZED = -1,
}
export const JuryVerdictAmino = JuryVerdict;
export function juryVerdictFromJSON(object: any): JuryVerdict {
  switch (object) {
    case 0:
    case "JURY_VERDICT_UNSPECIFIED":
      return JuryVerdict.JURY_VERDICT_UNSPECIFIED;
    case 1:
    case "JURY_VERDICT_CHALLENGE_UPHELD":
      return JuryVerdict.JURY_VERDICT_CHALLENGE_UPHELD;
    case 2:
    case "JURY_VERDICT_CHALLENGE_REJECTED":
      return JuryVerdict.JURY_VERDICT_CHALLENGE_REJECTED;
    case 3:
    case "JURY_VERDICT_CHALLENGE_TIMEOUT":
      return JuryVerdict.JURY_VERDICT_CHALLENGE_TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JuryVerdict.UNRECOGNIZED;
  }
}
export function juryVerdictToJSON(object: JuryVerdict): string {
  switch (object) {
    case JuryVerdict.JURY_VERDICT_UNSPECIFIED:
      return "JURY_VERDICT_UNSPECIFIED";
    case JuryVerdict.JURY_VERDICT_CHALLENGE_UPHELD:
      return "JURY_VERDICT_CHALLENGE_UPHELD";
    case JuryVerdict.JURY_VERDICT_CHALLENGE_REJECTED:
      return "JURY_VERDICT_CHALLENGE_REJECTED";
    case JuryVerdict.JURY_VERDICT_CHALLENGE_TIMEOUT:
      return "JURY_VERDICT_CHALLENGE_TIMEOUT";
    case JuryVerdict.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Peer represents a federation peer (another Spark Dream chain or external protocol).
 * @name Peer
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.Peer
 */
export interface Peer {
  id: string;
  displayName: string;
  type: PeerType;
  status: PeerStatus;
  ibcChannelId: string;
  registeredAt: bigint;
  lastActivity: bigint;
  registeredBy: string;
  metadata: string;
  removedAt: bigint;
  /**
   * controller_group is the x/commons Group policy address that resolves
   * tier-1 reports against this peer's bridge operators (federation→
   * service migration, Decision 2). If empty, federation resolves it to
   * the Operations Committee policy address at MsgRegisterBridge time.
   * The resolved address is captured on the resulting service.Operator;
   * changing it later (MsgUpdatePeerController) affects only new
   * registrations, not existing bridges.
   */
  controllerGroup: string;
  /**
   * peer_identity carries the chain identity (denoms, display symbols,
   * chain human name) supplied at peer registration. Used for IBC voucher
   * metadata pre-registration (see spec §9.2 and x-identity-spec.md) so
   * wallets render PSPK.ibc instead of ibc/<hash>. Optional for backwards
   * compatibility with pre-extension peers; populated for PEER_TYPE_SPARK_DREAM
   * peers registered via MsgRegisterPeer with --peer-identity.
   */
  peerIdentity?: ChainIdentity;
  /**
   * ibc_transfer_channel_id is this chain's end of the ICS-20 `transfer`
   * channel to the peer, as supplied at registration. Empty when the peer
   * has no transfer channel. Voucher metadata (spec §9.2) is keyed on it.
   */
  ibcTransferChannelId: string;
  /**
   * expected_chain_id pins a PEER_TYPE_SPARK_DREAM peer to the chain behind
   * its federation channel. MsgResumePeer reads the chain id of the
   * Tendermint light client under ibc_channel_id and refuses activation
   * unless it equals this value (FED-106): channel ids are sequential, so a
   * peer registered ahead of its handshake could otherwise be activated on
   * whatever chain opened the next federation channel. Required (a
   * CometBFT chain id, at most 50 bytes, no whitespace) for Spark Dream
   * peers, empty for every other peer type. Correctable with
   * MsgUpdatePeerInfo only while the peer is not ACTIVE.
   */
  expectedChainId: string;
}
export interface PeerProtoMsg {
  typeUrl: "/sparkdream.federation.v1.Peer";
  value: Uint8Array;
}
/**
 * Peer represents a federation peer (another Spark Dream chain or external protocol).
 * @name PeerAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.Peer
 */
export interface PeerAmino {
  id?: string;
  display_name?: string;
  type?: PeerType;
  status?: PeerStatus;
  ibc_channel_id?: string;
  registered_at?: string;
  last_activity?: string;
  registered_by?: string;
  metadata?: string;
  removed_at?: string;
  /**
   * controller_group is the x/commons Group policy address that resolves
   * tier-1 reports against this peer's bridge operators (federation→
   * service migration, Decision 2). If empty, federation resolves it to
   * the Operations Committee policy address at MsgRegisterBridge time.
   * The resolved address is captured on the resulting service.Operator;
   * changing it later (MsgUpdatePeerController) affects only new
   * registrations, not existing bridges.
   */
  controller_group?: string;
  /**
   * peer_identity carries the chain identity (denoms, display symbols,
   * chain human name) supplied at peer registration. Used for IBC voucher
   * metadata pre-registration (see spec §9.2 and x-identity-spec.md) so
   * wallets render PSPK.ibc instead of ibc/<hash>. Optional for backwards
   * compatibility with pre-extension peers; populated for PEER_TYPE_SPARK_DREAM
   * peers registered via MsgRegisterPeer with --peer-identity.
   */
  peer_identity?: ChainIdentityAmino;
  /**
   * ibc_transfer_channel_id is this chain's end of the ICS-20 `transfer`
   * channel to the peer, as supplied at registration. Empty when the peer
   * has no transfer channel. Voucher metadata (spec §9.2) is keyed on it.
   */
  ibc_transfer_channel_id?: string;
  /**
   * expected_chain_id pins a PEER_TYPE_SPARK_DREAM peer to the chain behind
   * its federation channel. MsgResumePeer reads the chain id of the
   * Tendermint light client under ibc_channel_id and refuses activation
   * unless it equals this value (FED-106): channel ids are sequential, so a
   * peer registered ahead of its handshake could otherwise be activated on
   * whatever chain opened the next federation channel. Required (a
   * CometBFT chain id, at most 50 bytes, no whitespace) for Spark Dream
   * peers, empty for every other peer type. Correctable with
   * MsgUpdatePeerInfo only while the peer is not ACTIVE.
   */
  expected_chain_id?: string;
}
export interface PeerAminoMsg {
  type: "/sparkdream.federation.v1.Peer";
  value: PeerAmino;
}
/**
 * PeerPolicy defines per-peer federation policies.
 * @name PeerPolicy
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.PeerPolicy
 */
export interface PeerPolicy {
  peerId: string;
  /**
   * Content federation
   */
  outboundContentTypes: string[];
  inboundContentTypes: string[];
  minOutboundTrustLevel: number;
  inboundRateLimitPerEpoch: bigint;
  outboundRateLimitPerEpoch: bigint;
  /**
   * Reputation (Spark Dream peers only)
   */
  allowReputationQueries: boolean;
  acceptReputationAttestations: boolean;
  /**
   * Moderation
   */
  requireReview: boolean;
  blockedIdentities: string[];
  /**
   * content_hosts lists hostnames, beyond the peer id itself, that may
   * appear in an inbound content_uri. ActivityPub peers only. An instance
   * whose AS2 ids live on a different host than its account domain (a
   * WEB_DOMAIN split) lists that host here; otherwise leave it empty and
   * only the peer id's own host is accepted. Without the check a bridge
   * bonded for one peer could anchor another instance's posts under this
   * peer's name.
   */
  contentHosts: string[];
  /**
   * Author curation for bridged content (MsgSubmitFederatedContent, the
   * external-protocol peers). An author is admitted only when BOTH gates
   * pass, and blocked_identities still overrides both:
   * 
   *   allowed_identities  the admitted authors ("@user@host"), or "*" for
   *                       any author. Empty admits nobody: a new external
   *                       peer anchors nothing until the Operations
   *                       Committee decides who is in scope.
   *   curation            an x/collect collection whose active link items
   *                       name the admitted authors, curated by the
   *                       collection's owner and collaborators without a
   *                       proposal per author. Unset: no collection gate.
   * 
   * So "*" plus a collection lets the collection alone decide, and a list
   * without a collection lets the list alone decide. The author's own
   * consent (following the bridge account) is a bridge-side rule on top.
   */
  allowedIdentities: string[];
  curation?: IdentityCuration;
}
export interface PeerPolicyProtoMsg {
  typeUrl: "/sparkdream.federation.v1.PeerPolicy";
  value: Uint8Array;
}
/**
 * PeerPolicy defines per-peer federation policies.
 * @name PeerPolicyAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.PeerPolicy
 */
export interface PeerPolicyAmino {
  peer_id?: string;
  /**
   * Content federation
   */
  outbound_content_types?: string[];
  inbound_content_types?: string[];
  min_outbound_trust_level?: number;
  inbound_rate_limit_per_epoch?: string;
  outbound_rate_limit_per_epoch?: string;
  /**
   * Reputation (Spark Dream peers only)
   */
  allow_reputation_queries?: boolean;
  accept_reputation_attestations?: boolean;
  /**
   * Moderation
   */
  require_review?: boolean;
  blocked_identities?: string[];
  /**
   * content_hosts lists hostnames, beyond the peer id itself, that may
   * appear in an inbound content_uri. ActivityPub peers only. An instance
   * whose AS2 ids live on a different host than its account domain (a
   * WEB_DOMAIN split) lists that host here; otherwise leave it empty and
   * only the peer id's own host is accepted. Without the check a bridge
   * bonded for one peer could anchor another instance's posts under this
   * peer's name.
   */
  content_hosts?: string[];
  /**
   * Author curation for bridged content (MsgSubmitFederatedContent, the
   * external-protocol peers). An author is admitted only when BOTH gates
   * pass, and blocked_identities still overrides both:
   * 
   *   allowed_identities  the admitted authors ("@user@host"), or "*" for
   *                       any author. Empty admits nobody: a new external
   *                       peer anchors nothing until the Operations
   *                       Committee decides who is in scope.
   *   curation            an x/collect collection whose active link items
   *                       name the admitted authors, curated by the
   *                       collection's owner and collaborators without a
   *                       proposal per author. Unset: no collection gate.
   * 
   * So "*" plus a collection lets the collection alone decide, and a list
   * without a collection lets the list alone decide. The author's own
   * consent (following the bridge account) is a bridge-side rule on top.
   */
  allowed_identities?: string[];
  curation?: IdentityCurationAmino;
}
export interface PeerPolicyAminoMsg {
  type: "/sparkdream.federation.v1.PeerPolicy";
  value: PeerPolicyAmino;
}
/**
 * IdentityCuration points a peer's author gate at an x/collect collection.
 * @name IdentityCuration
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityCuration
 */
export interface IdentityCuration {
  /**
   * collection_id is the x/collect collection listing admitted authors, one
   * link item each: an "@user@host" handle or the profile URL
   * ("https://host/@user"). Only active items in an active collection count.
   */
  collectionId: bigint;
}
export interface IdentityCurationProtoMsg {
  typeUrl: "/sparkdream.federation.v1.IdentityCuration";
  value: Uint8Array;
}
/**
 * IdentityCuration points a peer's author gate at an x/collect collection.
 * @name IdentityCurationAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityCuration
 */
export interface IdentityCurationAmino {
  /**
   * collection_id is the x/collect collection listing admitted authors, one
   * link item each: an "@user@host" handle or the profile URL
   * ("https://host/@user"). Only active items in an active collection count.
   */
  collection_id?: string;
}
export interface IdentityCurationAminoMsg {
  type: "/sparkdream.federation.v1.IdentityCuration";
  value: IdentityCurationAmino;
}
/**
 * BridgeBinding represents the federation-owned binding between a bridge
 * operator and a peer. Economic state (bond, status, unbonding, slashing
 * history) lives on the corresponding x/service Operator record keyed
 * by (address, service_type). This binding holds only federation-
 * specific data: which peer + protocol + endpoint URL + content stats
 * + suspended flag (toggled by underfunded/refunded hooks).
 * 
 * Per Decision 1a of the federation→service migration, one operator
 * address may hold multiple bindings under the same protocol (one per
 * peer) backed by a single shared service.Operator and a single shared
 * bond. Suspending a binding refuses new content submissions but does
 * not delete it.
 * @name BridgeBinding
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.BridgeBinding
 */
export interface BridgeBinding {
  address: string;
  peerId: string;
  protocol: string;
  endpoint: string;
  registeredAt: bigint;
  contentSubmitted: bigint;
  contentVerified: bigint;
  contentRejected: bigint;
  contentUnverified: bigint;
  lastSubmissionAt: bigint;
  /**
   * suspended is set to true by AfterOperatorUnderfunded and cleared
   * by AfterOperatorReFunded. Federation rejects new content
   * submissions from suspended bindings.
   */
  suspended: boolean;
  /**
   * --- Per-epoch counters, reset at every operator reward distribution ---
   * 
   * The lifetime counters above cannot score a reward: they only grow, so a
   * long-serving operator would out-earn an equally productive newcomer
   * forever on history alone. These mirror them for the current reward epoch
   * and are zeroed on every distribution, eligible or not.
   */
  epochSubmitted: bigint;
  epochVerified: bigint;
  epochRejected: bigint;
  epochUnverified: bigint;
  /**
   * last_reward_epoch is the most recent epoch in which this binding was
   * paid. Zero means never paid.
   */
  lastRewardEpoch: bigint;
  /**
   * cumulative_rewards is lifetime SPARK paid to this binding
   * (math.Int string, bond-denom micro-units).
   */
  cumulativeRewards: string;
}
export interface BridgeBindingProtoMsg {
  typeUrl: "/sparkdream.federation.v1.BridgeBinding";
  value: Uint8Array;
}
/**
 * BridgeBinding represents the federation-owned binding between a bridge
 * operator and a peer. Economic state (bond, status, unbonding, slashing
 * history) lives on the corresponding x/service Operator record keyed
 * by (address, service_type). This binding holds only federation-
 * specific data: which peer + protocol + endpoint URL + content stats
 * + suspended flag (toggled by underfunded/refunded hooks).
 * 
 * Per Decision 1a of the federation→service migration, one operator
 * address may hold multiple bindings under the same protocol (one per
 * peer) backed by a single shared service.Operator and a single shared
 * bond. Suspending a binding refuses new content submissions but does
 * not delete it.
 * @name BridgeBindingAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.BridgeBinding
 */
export interface BridgeBindingAmino {
  address?: string;
  peer_id?: string;
  protocol?: string;
  endpoint?: string;
  registered_at?: string;
  content_submitted?: string;
  content_verified?: string;
  content_rejected?: string;
  content_unverified?: string;
  last_submission_at?: string;
  /**
   * suspended is set to true by AfterOperatorUnderfunded and cleared
   * by AfterOperatorReFunded. Federation rejects new content
   * submissions from suspended bindings.
   */
  suspended?: boolean;
  /**
   * --- Per-epoch counters, reset at every operator reward distribution ---
   * 
   * The lifetime counters above cannot score a reward: they only grow, so a
   * long-serving operator would out-earn an equally productive newcomer
   * forever on history alone. These mirror them for the current reward epoch
   * and are zeroed on every distribution, eligible or not.
   */
  epoch_submitted?: string;
  epoch_verified?: string;
  epoch_rejected?: string;
  epoch_unverified?: string;
  /**
   * last_reward_epoch is the most recent epoch in which this binding was
   * paid. Zero means never paid.
   */
  last_reward_epoch?: string;
  /**
   * cumulative_rewards is lifetime SPARK paid to this binding
   * (math.Int string, bond-denom micro-units).
   */
  cumulative_rewards?: string;
}
export interface BridgeBindingAminoMsg {
  type: "/sparkdream.federation.v1.BridgeBinding";
  value: BridgeBindingAmino;
}
/**
 * VerificationRecord tracks a verifier's verification of specific content.
 * @name VerificationRecord
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.VerificationRecord
 */
export interface VerificationRecord {
  contentId: bigint;
  verifier: string;
  verifierHash: Uint8Array;
  verifiedAt: bigint;
  challengeWindowEnds: bigint;
  committedAmount: string;
  verifierBondSnapshot: string;
  outcome: VerificationOutcome;
  priorRejectedChallenges: number;
  lastChallengeResolvedAt: bigint;
  challenger: string;
  /**
   * escrowed_challenge_fee is the per-challenge SPARK amount the
   * challenger escrowed at MsgChallengeVerification time. Snapshotted
   * because the effective fee escalates with prior_rejected_challenges
   * (2^N multiplier) — recomputing at resolution time would be fragile.
   * Used by the auto-resolve path to refund (UPHELD) or split
   * (REJECTED) the escrow.
   */
  escrowedChallengeFee: string;
  /**
   * pending_verifier_verdict snapshots the would-be auto-verdict from
   * the arbiter-quorum branch (UNSPECIFIED until quorum lands, then
   * VERIFIER_RIGHT or VERIFIER_WRONG). The verdict is applied by the
   * EndBlocker when the escalation window expires; MsgEscalateChallenge
   * clears it back to UNSPECIFIED, deferring resolution to the jury path.
   */
  pendingVerifierVerdict: PendingVerifierVerdict;
  /**
   * commitment_released records that CommittedAmount was already given
   * back to the verifier's available bond via x/rep ReleaseBond. The
   * flag exists because the alternative — inferring from Outcome —
   * cannot distinguish an upheld challenge (SlashBond already freed the
   * commitment; a second release would silently eat a different
   * concurrent commitment, since ReleaseBond is saturating) from the
   * paths that owe a release, and the record outlives the content
   * (pruneExpiredContent drops Content but never VerificationRecords).
   * True means released; false means either not yet resolved or freed
   * by SlashBond on the upheld path.
   */
  commitmentReleased: boolean;
  /**
   * arbiter_escalation_deadline is the unix time until which the
   * challenger or verifier may escalate the stashed arbiter-quorum
   * auto-verdict (quorum time + arbiter_escalation_window). Zero until a
   * quorum lands; MsgEscalateChallenge refuses once it has passed.
   */
  arbiterEscalationDeadline: bigint;
  /**
   * arbiter_resolution_deadline is the unix time until which arbiters may
   * submit hashes for the current dispute round (round start +
   * arbiter_resolution_window). MsgSubmitArbiterHash refuses after it, and
   * the Phase 7 EndBlocker acts only on the resolution-queue entry keyed
   * on exactly this deadline, so an entry left over from an earlier round
   * of the same content never settles the current one.
   */
  arbiterResolutionDeadline: bigint;
  /**
   * challenge_report_id is the x/service report id returned when
   * federation filed a system report against the submitting bridge
   * operator for this content. Zero when no report was filed.
   */
  challengeReportId: bigint;
  /**
   * pending_challenge_report holds the evidence URI of an operator report
   * that is owed but could not be filed yet (x/service refused it, e.g.
   * under its per-caller system-report rate limit). The EndBlocker retries
   * it with the same dedupe key until it is filed; empty when nothing is
   * owed.
   */
  pendingChallengeReport: string;
  /**
   * quorum_falsified_content records, when the arbiter quorum lands, that
   * the quorum hash differs from the operator's content hash. The stashed
   * verdict only says whether the verifier was right; for DISPUTED content
   * whose quorum hash matches neither the verifier nor the operator, this is
   * what tells the auto-verdict that the content is REJECTED rather than
   * VERIFIED.
   */
  quorumFalsifiedContent: boolean;
  /**
   * EndBlocker settlement retry (FED-29). A settlement the EndBlocker runs
   * (no-quorum expiry, automatic verdict, jury TIMEOUT) executes in a cache
   * context; when a bank or x/rep side effect fails, nothing of it commits
   * (the escrow stays on this record) and the settlement is retried at
   * settlement_retry_at with backoff. settlement_retry_kind says which
   * settlement is owed; settlement_attempts counts failed attempts. After
   * the last attempt settlement_retry_at is cleared and the record keeps its
   * escrow until peer removal or a committee verdict settles it.
   */
  settlementRetryKind: SettlementKind;
  settlementAttempts: number;
  settlementRetryAt: bigint;
}
export interface VerificationRecordProtoMsg {
  typeUrl: "/sparkdream.federation.v1.VerificationRecord";
  value: Uint8Array;
}
/**
 * VerificationRecord tracks a verifier's verification of specific content.
 * @name VerificationRecordAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.VerificationRecord
 */
export interface VerificationRecordAmino {
  content_id?: string;
  verifier?: string;
  verifier_hash?: string;
  verified_at?: string;
  challenge_window_ends?: string;
  committed_amount?: string;
  verifier_bond_snapshot?: string;
  outcome?: VerificationOutcome;
  prior_rejected_challenges?: number;
  last_challenge_resolved_at?: string;
  challenger?: string;
  /**
   * escrowed_challenge_fee is the per-challenge SPARK amount the
   * challenger escrowed at MsgChallengeVerification time. Snapshotted
   * because the effective fee escalates with prior_rejected_challenges
   * (2^N multiplier) — recomputing at resolution time would be fragile.
   * Used by the auto-resolve path to refund (UPHELD) or split
   * (REJECTED) the escrow.
   */
  escrowed_challenge_fee?: string;
  /**
   * pending_verifier_verdict snapshots the would-be auto-verdict from
   * the arbiter-quorum branch (UNSPECIFIED until quorum lands, then
   * VERIFIER_RIGHT or VERIFIER_WRONG). The verdict is applied by the
   * EndBlocker when the escalation window expires; MsgEscalateChallenge
   * clears it back to UNSPECIFIED, deferring resolution to the jury path.
   */
  pending_verifier_verdict?: PendingVerifierVerdict;
  /**
   * commitment_released records that CommittedAmount was already given
   * back to the verifier's available bond via x/rep ReleaseBond. The
   * flag exists because the alternative — inferring from Outcome —
   * cannot distinguish an upheld challenge (SlashBond already freed the
   * commitment; a second release would silently eat a different
   * concurrent commitment, since ReleaseBond is saturating) from the
   * paths that owe a release, and the record outlives the content
   * (pruneExpiredContent drops Content but never VerificationRecords).
   * True means released; false means either not yet resolved or freed
   * by SlashBond on the upheld path.
   */
  commitment_released?: boolean;
  /**
   * arbiter_escalation_deadline is the unix time until which the
   * challenger or verifier may escalate the stashed arbiter-quorum
   * auto-verdict (quorum time + arbiter_escalation_window). Zero until a
   * quorum lands; MsgEscalateChallenge refuses once it has passed.
   */
  arbiter_escalation_deadline?: string;
  /**
   * arbiter_resolution_deadline is the unix time until which arbiters may
   * submit hashes for the current dispute round (round start +
   * arbiter_resolution_window). MsgSubmitArbiterHash refuses after it, and
   * the Phase 7 EndBlocker acts only on the resolution-queue entry keyed
   * on exactly this deadline, so an entry left over from an earlier round
   * of the same content never settles the current one.
   */
  arbiter_resolution_deadline?: string;
  /**
   * challenge_report_id is the x/service report id returned when
   * federation filed a system report against the submitting bridge
   * operator for this content. Zero when no report was filed.
   */
  challenge_report_id?: string;
  /**
   * pending_challenge_report holds the evidence URI of an operator report
   * that is owed but could not be filed yet (x/service refused it, e.g.
   * under its per-caller system-report rate limit). The EndBlocker retries
   * it with the same dedupe key until it is filed; empty when nothing is
   * owed.
   */
  pending_challenge_report?: string;
  /**
   * quorum_falsified_content records, when the arbiter quorum lands, that
   * the quorum hash differs from the operator's content hash. The stashed
   * verdict only says whether the verifier was right; for DISPUTED content
   * whose quorum hash matches neither the verifier nor the operator, this is
   * what tells the auto-verdict that the content is REJECTED rather than
   * VERIFIED.
   */
  quorum_falsified_content?: boolean;
  /**
   * EndBlocker settlement retry (FED-29). A settlement the EndBlocker runs
   * (no-quorum expiry, automatic verdict, jury TIMEOUT) executes in a cache
   * context; when a bank or x/rep side effect fails, nothing of it commits
   * (the escrow stays on this record) and the settlement is retried at
   * settlement_retry_at with backoff. settlement_retry_kind says which
   * settlement is owed; settlement_attempts counts failed attempts. After
   * the last attempt settlement_retry_at is cleared and the record keeps its
   * escrow until peer removal or a committee verdict settles it.
   */
  settlement_retry_kind?: SettlementKind;
  settlement_attempts?: number;
  settlement_retry_at?: string;
}
export interface VerificationRecordAminoMsg {
  type: "/sparkdream.federation.v1.VerificationRecord";
  value: VerificationRecordAmino;
}
/**
 * EscalatedChallenge tracks the Phase 2 (human jury) lifecycle for a
 * challenge whose Phase 1 auto-verdict was contested via
 * MsgEscalateChallenge. Operations Committee submits the jury verdict
 * via MsgResolveEscalatedChallenge; the EndBlocker stamps TIMEOUT on
 * jury_deadline expiry. Both paths feed the same applyJuryVerdict
 * helper which disposes of the escrowed challenge_fee + escalation_fee
 * and (on UPHELD/REJECTED) applies the same verifier-side accounting
 * as the auto-resolution path.
 * @name EscalatedChallenge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.EscalatedChallenge
 */
export interface EscalatedChallenge {
  contentId: bigint;
  /**
   * escalator is the address that paid the escalation_fee (challenger
   * or verifier — either party can escalate within the window).
   */
  escalator: string;
  /**
   * escrowed_escalation_fee snapshots the SPARK amount escrowed at
   * escalation time. Refunded to the escalator if the jury verdict
   * overturns the auto-verdict; burned otherwise.
   */
  escrowedEscalationFee: string;
  /**
   * auto_verdict_before_escalation snapshots the Phase 1 verdict that
   * was about to apply. Compared to the jury verdict to determine if
   * the jury "overturned" the auto-verdict (escalation fee refund).
   */
  autoVerdictBeforeEscalation: PendingVerifierVerdict;
  /**
   * jury_deadline is the unix-time block-time after which the
   * EndBlocker stamps TIMEOUT if no MsgResolveEscalatedChallenge has
   * landed.
   */
  juryDeadline: bigint;
}
export interface EscalatedChallengeProtoMsg {
  typeUrl: "/sparkdream.federation.v1.EscalatedChallenge";
  value: Uint8Array;
}
/**
 * EscalatedChallenge tracks the Phase 2 (human jury) lifecycle for a
 * challenge whose Phase 1 auto-verdict was contested via
 * MsgEscalateChallenge. Operations Committee submits the jury verdict
 * via MsgResolveEscalatedChallenge; the EndBlocker stamps TIMEOUT on
 * jury_deadline expiry. Both paths feed the same applyJuryVerdict
 * helper which disposes of the escrowed challenge_fee + escalation_fee
 * and (on UPHELD/REJECTED) applies the same verifier-side accounting
 * as the auto-resolution path.
 * @name EscalatedChallengeAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.EscalatedChallenge
 */
export interface EscalatedChallengeAmino {
  content_id?: string;
  /**
   * escalator is the address that paid the escalation_fee (challenger
   * or verifier — either party can escalate within the window).
   */
  escalator?: string;
  /**
   * escrowed_escalation_fee snapshots the SPARK amount escrowed at
   * escalation time. Refunded to the escalator if the jury verdict
   * overturns the auto-verdict; burned otherwise.
   */
  escrowed_escalation_fee?: string;
  /**
   * auto_verdict_before_escalation snapshots the Phase 1 verdict that
   * was about to apply. Compared to the jury verdict to determine if
   * the jury "overturned" the auto-verdict (escalation fee refund).
   */
  auto_verdict_before_escalation?: PendingVerifierVerdict;
  /**
   * jury_deadline is the unix-time block-time after which the
   * EndBlocker stamps TIMEOUT if no MsgResolveEscalatedChallenge has
   * landed.
   */
  jury_deadline?: string;
}
export interface EscalatedChallengeAminoMsg {
  type: "/sparkdream.federation.v1.EscalatedChallenge";
  value: EscalatedChallengeAmino;
}
/**
 * ArbiterHashSubmission stores an arbiter's hash for quorum-based challenge resolution.
 * @name ArbiterHashSubmission
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ArbiterHashSubmission
 */
export interface ArbiterHashSubmission {
  contentId: bigint;
  contentHash: Uint8Array;
  submittedAt: bigint;
  operator: string;
  nullifier: Uint8Array;
}
export interface ArbiterHashSubmissionProtoMsg {
  typeUrl: "/sparkdream.federation.v1.ArbiterHashSubmission";
  value: Uint8Array;
}
/**
 * ArbiterHashSubmission stores an arbiter's hash for quorum-based challenge resolution.
 * @name ArbiterHashSubmissionAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ArbiterHashSubmission
 */
export interface ArbiterHashSubmissionAmino {
  content_id?: string;
  content_hash?: string;
  submitted_at?: string;
  operator?: string;
  nullifier?: string;
}
export interface ArbiterHashSubmissionAminoMsg {
  type: "/sparkdream.federation.v1.ArbiterHashSubmission";
  value: ArbiterHashSubmissionAmino;
}
/**
 * FederatedContent represents inbound content from a federation peer.
 * @name FederatedContent
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.FederatedContent
 */
export interface FederatedContent {
  id: bigint;
  peerId: string;
  remoteContentId: string;
  contentType: string;
  creatorIdentity: string;
  creatorName: string;
  title: string;
  body: string;
  contentUri: string;
  protocolMetadata: Uint8Array;
  remoteCreatedAt: bigint;
  receivedAt: bigint;
  submittedBy: string;
  status: FederatedContentStatus;
  expiresAt: bigint;
  contentHash: Uint8Array;
  /**
   * supersedes names the earlier record of the same content_uri that this
   * one replaces (an edit). Unset for a first version.
   */
  supersedes?: ContentRef;
  /**
   * superseded_by is the id of the newer record that replaced this one,
   * 0 while none has. A successor is always allocated after its
   * predecessor, so it is never content id 0 and 0 is unambiguous here.
   */
  supersededBy: bigint;
  /**
   * license is the public-domain license the content entered the chain
   * under ("CC0-1.0" or "PDM-1.0"). Always set: content without one is
   * rejected at submission and on IBC receive.
   */
  license: string;
  /**
   * media_flags is the OR of sparkdream.common.v1.MediaFlag bits, computed on
   * submission and IBC receive (body scanned for data URIs; content_uri set).
   * Non-zero withholds body from list and show queries (fetch it via
   * FederatedContentBody). content_hash already covers the body hash.
   */
  mediaFlags: number;
  /**
   * media_rules_version is the labelling rules version that produced media_flags.
   */
  mediaRulesVersion: number;
}
export interface FederatedContentProtoMsg {
  typeUrl: "/sparkdream.federation.v1.FederatedContent";
  value: Uint8Array;
}
/**
 * FederatedContent represents inbound content from a federation peer.
 * @name FederatedContentAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.FederatedContent
 */
export interface FederatedContentAmino {
  id?: string;
  peer_id?: string;
  remote_content_id?: string;
  content_type?: string;
  creator_identity?: string;
  creator_name?: string;
  title?: string;
  body?: string;
  content_uri?: string;
  protocol_metadata?: string;
  remote_created_at?: string;
  received_at?: string;
  submitted_by?: string;
  status?: FederatedContentStatus;
  expires_at?: string;
  content_hash?: string;
  /**
   * supersedes names the earlier record of the same content_uri that this
   * one replaces (an edit). Unset for a first version.
   */
  supersedes?: ContentRefAmino;
  /**
   * superseded_by is the id of the newer record that replaced this one,
   * 0 while none has. A successor is always allocated after its
   * predecessor, so it is never content id 0 and 0 is unambiguous here.
   */
  superseded_by?: string;
  /**
   * license is the public-domain license the content entered the chain
   * under ("CC0-1.0" or "PDM-1.0"). Always set: content without one is
   * rejected at submission and on IBC receive.
   */
  license?: string;
  /**
   * media_flags is the OR of sparkdream.common.v1.MediaFlag bits, computed on
   * submission and IBC receive (body scanned for data URIs; content_uri set).
   * Non-zero withholds body from list and show queries (fetch it via
   * FederatedContentBody). content_hash already covers the body hash.
   */
  media_flags?: number;
  /**
   * media_rules_version is the labelling rules version that produced media_flags.
   */
  media_rules_version?: number;
}
export interface FederatedContentAminoMsg {
  type: "/sparkdream.federation.v1.FederatedContent";
  value: FederatedContentAmino;
}
/**
 * ContentRef points at a FederatedContent record. A message rather than a
 * bare uint64 because content ids start at 0: a nil ref is "none", which
 * a zero id could not express.
 * @name ContentRef
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ContentRef
 */
export interface ContentRef {
  contentId: bigint;
}
export interface ContentRefProtoMsg {
  typeUrl: "/sparkdream.federation.v1.ContentRef";
  value: Uint8Array;
}
/**
 * ContentRef points at a FederatedContent record. A message rather than a
 * bare uint64 because content ids start at 0: a nil ref is "none", which
 * a zero id could not express.
 * @name ContentRefAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ContentRef
 */
export interface ContentRefAmino {
  content_id?: string;
}
export interface ContentRefAminoMsg {
  type: "/sparkdream.federation.v1.ContentRef";
  value: ContentRefAmino;
}
/**
 * IdentityLink maps a local address to a remote identity on a federation peer.
 * @name IdentityLink
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityLink
 */
export interface IdentityLink {
  localAddress: string;
  peerId: string;
  remoteIdentity: string;
  status: IdentityLinkStatus;
  linkedAt: bigint;
  verifiedAt: bigint;
  /**
   * Challenge bytes generated at LinkIdentity time and echo-checked when the
   * confirmation packet returns from the remote peer (FEDERATION-S2-1).
   */
  challenge: Uint8Array;
  /**
   * verification_attempts counts Phase 1 challenge deliveries sent for this
   * link. A timed-out delivery is re-sent automatically until it reaches
   * three attempts.
   */
  verificationAttempts: number;
  /**
   * unverified_expires_at is the UnverifiedLinkExp queue key the link was
   * written with (linked_at + unverified_link_ttl at link time). The
   * expiry sweep only prunes the link when the queue entry it walks
   * carries this exact time, so a stale entry left by an earlier link of
   * the same (local_address, peer_id) can never prune a re-created one.
   */
  unverifiedExpiresAt: bigint;
  /**
   * attested_by is the bridge operator whose MsgAttestIdentityLink verified
   * this link (empty for links verified over IBC). A false attestation is
   * reported against this operator's x/service bond.
   */
  attestedBy: string;
  /**
   * attestation_evidence is the evidence_uri the operator attested with.
   */
  attestationEvidence: string;
}
export interface IdentityLinkProtoMsg {
  typeUrl: "/sparkdream.federation.v1.IdentityLink";
  value: Uint8Array;
}
/**
 * IdentityLink maps a local address to a remote identity on a federation peer.
 * @name IdentityLinkAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityLink
 */
export interface IdentityLinkAmino {
  local_address?: string;
  peer_id?: string;
  remote_identity?: string;
  status?: IdentityLinkStatus;
  linked_at?: string;
  verified_at?: string;
  /**
   * Challenge bytes generated at LinkIdentity time and echo-checked when the
   * confirmation packet returns from the remote peer (FEDERATION-S2-1).
   */
  challenge?: string;
  /**
   * verification_attempts counts Phase 1 challenge deliveries sent for this
   * link. A timed-out delivery is re-sent automatically until it reaches
   * three attempts.
   */
  verification_attempts?: number;
  /**
   * unverified_expires_at is the UnverifiedLinkExp queue key the link was
   * written with (linked_at + unverified_link_ttl at link time). The
   * expiry sweep only prunes the link when the queue entry it walks
   * carries this exact time, so a stale entry left by an earlier link of
   * the same (local_address, peer_id) can never prune a re-created one.
   */
  unverified_expires_at?: string;
  /**
   * attested_by is the bridge operator whose MsgAttestIdentityLink verified
   * this link (empty for links verified over IBC). A false attestation is
   * reported against this operator's x/service bond.
   */
  attested_by?: string;
  /**
   * attestation_evidence is the evidence_uri the operator attested with.
   */
  attestation_evidence?: string;
}
export interface IdentityLinkAminoMsg {
  type: "/sparkdream.federation.v1.IdentityLink";
  value: IdentityLinkAmino;
}
/**
 * PendingIdentityChallenge stores an IBC identity verification challenge.
 * @name PendingIdentityChallenge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.PendingIdentityChallenge
 */
export interface PendingIdentityChallenge {
  claimedAddress: string;
  claimantChainPeerId: string;
  claimantAddress: string;
  challenge: Uint8Array;
  receivedAt: bigint;
  expiresAt: bigint;
}
export interface PendingIdentityChallengeProtoMsg {
  typeUrl: "/sparkdream.federation.v1.PendingIdentityChallenge";
  value: Uint8Array;
}
/**
 * PendingIdentityChallenge stores an IBC identity verification challenge.
 * @name PendingIdentityChallengeAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.PendingIdentityChallenge
 */
export interface PendingIdentityChallengeAmino {
  claimed_address?: string;
  claimant_chain_peer_id?: string;
  claimant_address?: string;
  challenge?: string;
  received_at?: string;
  expires_at?: string;
}
export interface PendingIdentityChallengeAminoMsg {
  type: "/sparkdream.federation.v1.PendingIdentityChallenge";
  value: PendingIdentityChallengeAmino;
}
/**
 * ReputationAttestation caches cross-chain reputation data.
 * @name ReputationAttestation
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ReputationAttestation
 */
export interface ReputationAttestation {
  localAddress: string;
  peerId: string;
  remoteAddress: string;
  remoteTrustLevel: number;
  localTrustCredit: number;
  remoteReputations: TagReputation[];
  attestedAt: bigint;
  expiresAt: bigint;
}
export interface ReputationAttestationProtoMsg {
  typeUrl: "/sparkdream.federation.v1.ReputationAttestation";
  value: Uint8Array;
}
/**
 * ReputationAttestation caches cross-chain reputation data.
 * @name ReputationAttestationAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ReputationAttestation
 */
export interface ReputationAttestationAmino {
  local_address?: string;
  peer_id?: string;
  remote_address?: string;
  remote_trust_level?: number;
  local_trust_credit?: number;
  remote_reputations?: TagReputationAmino[];
  attested_at?: string;
  expires_at?: string;
}
export interface ReputationAttestationAminoMsg {
  type: "/sparkdream.federation.v1.ReputationAttestation";
  value: ReputationAttestationAmino;
}
/**
 * TagReputation stores a per-tag reputation score.
 * @name TagReputation
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.TagReputation
 */
export interface TagReputation {
  tag: string;
  score: string;
}
export interface TagReputationProtoMsg {
  typeUrl: "/sparkdream.federation.v1.TagReputation";
  value: Uint8Array;
}
/**
 * TagReputation stores a per-tag reputation score.
 * @name TagReputationAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.TagReputation
 */
export interface TagReputationAmino {
  tag?: string;
  score?: string;
}
export interface TagReputationAminoMsg {
  type: "/sparkdream.federation.v1.TagReputation";
  value: TagReputationAmino;
}
/**
 * OutboundAttestation records content published to a federation peer.
 * @name OutboundAttestation
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.OutboundAttestation
 */
export interface OutboundAttestation {
  id: bigint;
  peerId: string;
  contentType: string;
  localContentId: string;
  creator: string;
  submittedBy: string;
  publishedAt: bigint;
}
export interface OutboundAttestationProtoMsg {
  typeUrl: "/sparkdream.federation.v1.OutboundAttestation";
  value: Uint8Array;
}
/**
 * OutboundAttestation records content published to a federation peer.
 * @name OutboundAttestationAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.OutboundAttestation
 */
export interface OutboundAttestationAmino {
  id?: string;
  peer_id?: string;
  content_type?: string;
  local_content_id?: string;
  creator?: string;
  submitted_by?: string;
  published_at?: string;
}
export interface OutboundAttestationAminoMsg {
  type: "/sparkdream.federation.v1.OutboundAttestation";
  value: OutboundAttestationAmino;
}
/**
 * PeerRemovalState tracks cleanup progress for a removed peer.
 * @name PeerRemovalState
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.PeerRemovalState
 */
export interface PeerRemovalState {
  removedAt: bigint;
  lastPrunedContentId: bigint;
  contentDone: boolean;
  linksDone: boolean;
  attestationsDone: boolean;
  outboundDone: boolean;
  bridgesDone: boolean;
  policyDone: boolean;
}
export interface PeerRemovalStateProtoMsg {
  typeUrl: "/sparkdream.federation.v1.PeerRemovalState";
  value: Uint8Array;
}
/**
 * PeerRemovalState tracks cleanup progress for a removed peer.
 * @name PeerRemovalStateAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.PeerRemovalState
 */
export interface PeerRemovalStateAmino {
  removed_at?: string;
  last_pruned_content_id?: string;
  content_done?: boolean;
  links_done?: boolean;
  attestations_done?: boolean;
  outbound_done?: boolean;
  bridges_done?: boolean;
  policy_done?: boolean;
}
export interface PeerRemovalStateAminoMsg {
  type: "/sparkdream.federation.v1.PeerRemovalState";
  value: PeerRemovalStateAmino;
}
function createBasePeer(): Peer {
  return {
    id: "",
    displayName: "",
    type: 0,
    status: 0,
    ibcChannelId: "",
    registeredAt: BigInt(0),
    lastActivity: BigInt(0),
    registeredBy: "",
    metadata: "",
    removedAt: BigInt(0),
    controllerGroup: "",
    peerIdentity: undefined,
    ibcTransferChannelId: "",
    expectedChainId: ""
  };
}
/**
 * Peer represents a federation peer (another Spark Dream chain or external protocol).
 * @name Peer
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.Peer
 */
export const Peer = {
  typeUrl: "/sparkdream.federation.v1.Peer",
  encode(message: Peer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.ibcChannelId !== "") {
      writer.uint32(42).string(message.ibcChannelId);
    }
    if (message.registeredAt !== BigInt(0)) {
      writer.uint32(48).int64(message.registeredAt);
    }
    if (message.lastActivity !== BigInt(0)) {
      writer.uint32(56).int64(message.lastActivity);
    }
    if (message.registeredBy !== "") {
      writer.uint32(66).string(message.registeredBy);
    }
    if (message.metadata !== "") {
      writer.uint32(74).string(message.metadata);
    }
    if (message.removedAt !== BigInt(0)) {
      writer.uint32(80).int64(message.removedAt);
    }
    if (message.controllerGroup !== "") {
      writer.uint32(90).string(message.controllerGroup);
    }
    if (message.peerIdentity !== undefined) {
      ChainIdentity.encode(message.peerIdentity, writer.uint32(98).fork()).ldelim();
    }
    if (message.ibcTransferChannelId !== "") {
      writer.uint32(106).string(message.ibcTransferChannelId);
    }
    if (message.expectedChainId !== "") {
      writer.uint32(114).string(message.expectedChainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Peer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.ibcChannelId = reader.string();
          break;
        case 6:
          message.registeredAt = reader.int64();
          break;
        case 7:
          message.lastActivity = reader.int64();
          break;
        case 8:
          message.registeredBy = reader.string();
          break;
        case 9:
          message.metadata = reader.string();
          break;
        case 10:
          message.removedAt = reader.int64();
          break;
        case 11:
          message.controllerGroup = reader.string();
          break;
        case 12:
          message.peerIdentity = ChainIdentity.decode(reader, reader.uint32());
          break;
        case 13:
          message.ibcTransferChannelId = reader.string();
          break;
        case 14:
          message.expectedChainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Peer>): Peer {
    const message = createBasePeer();
    message.id = object.id ?? "";
    message.displayName = object.displayName ?? "";
    message.type = object.type ?? 0;
    message.status = object.status ?? 0;
    message.ibcChannelId = object.ibcChannelId ?? "";
    message.registeredAt = object.registeredAt !== undefined && object.registeredAt !== null ? BigInt(object.registeredAt.toString()) : BigInt(0);
    message.lastActivity = object.lastActivity !== undefined && object.lastActivity !== null ? BigInt(object.lastActivity.toString()) : BigInt(0);
    message.registeredBy = object.registeredBy ?? "";
    message.metadata = object.metadata ?? "";
    message.removedAt = object.removedAt !== undefined && object.removedAt !== null ? BigInt(object.removedAt.toString()) : BigInt(0);
    message.controllerGroup = object.controllerGroup ?? "";
    message.peerIdentity = object.peerIdentity !== undefined && object.peerIdentity !== null ? ChainIdentity.fromPartial(object.peerIdentity) : undefined;
    message.ibcTransferChannelId = object.ibcTransferChannelId ?? "";
    message.expectedChainId = object.expectedChainId ?? "";
    return message;
  },
  fromAmino(object: PeerAmino): Peer {
    const message = createBasePeer();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.displayName = object.display_name;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.ibc_channel_id !== undefined && object.ibc_channel_id !== null) {
      message.ibcChannelId = object.ibc_channel_id;
    }
    if (object.registered_at !== undefined && object.registered_at !== null) {
      message.registeredAt = BigInt(object.registered_at);
    }
    if (object.last_activity !== undefined && object.last_activity !== null) {
      message.lastActivity = BigInt(object.last_activity);
    }
    if (object.registered_by !== undefined && object.registered_by !== null) {
      message.registeredBy = object.registered_by;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.removed_at !== undefined && object.removed_at !== null) {
      message.removedAt = BigInt(object.removed_at);
    }
    if (object.controller_group !== undefined && object.controller_group !== null) {
      message.controllerGroup = object.controller_group;
    }
    if (object.peer_identity !== undefined && object.peer_identity !== null) {
      message.peerIdentity = ChainIdentity.fromAmino(object.peer_identity);
    }
    if (object.ibc_transfer_channel_id !== undefined && object.ibc_transfer_channel_id !== null) {
      message.ibcTransferChannelId = object.ibc_transfer_channel_id;
    }
    if (object.expected_chain_id !== undefined && object.expected_chain_id !== null) {
      message.expectedChainId = object.expected_chain_id;
    }
    return message;
  },
  toAmino(message: Peer): PeerAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.display_name = message.displayName === "" ? undefined : message.displayName;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.ibc_channel_id = message.ibcChannelId === "" ? undefined : message.ibcChannelId;
    obj.registered_at = message.registeredAt !== BigInt(0) ? message.registeredAt?.toString() : undefined;
    obj.last_activity = message.lastActivity !== BigInt(0) ? message.lastActivity?.toString() : undefined;
    obj.registered_by = message.registeredBy === "" ? undefined : message.registeredBy;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.removed_at = message.removedAt !== BigInt(0) ? message.removedAt?.toString() : undefined;
    obj.controller_group = message.controllerGroup === "" ? undefined : message.controllerGroup;
    obj.peer_identity = message.peerIdentity ? ChainIdentity.toAmino(message.peerIdentity) : undefined;
    obj.ibc_transfer_channel_id = message.ibcTransferChannelId === "" ? undefined : message.ibcTransferChannelId;
    obj.expected_chain_id = message.expectedChainId === "" ? undefined : message.expectedChainId;
    return obj;
  },
  fromAminoMsg(object: PeerAminoMsg): Peer {
    return Peer.fromAmino(object.value);
  },
  fromProtoMsg(message: PeerProtoMsg): Peer {
    return Peer.decode(message.value);
  },
  toProto(message: Peer): Uint8Array {
    return Peer.encode(message).finish();
  },
  toProtoMsg(message: Peer): PeerProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.Peer",
      value: Peer.encode(message).finish()
    };
  }
};
function createBasePeerPolicy(): PeerPolicy {
  return {
    peerId: "",
    outboundContentTypes: [],
    inboundContentTypes: [],
    minOutboundTrustLevel: 0,
    inboundRateLimitPerEpoch: BigInt(0),
    outboundRateLimitPerEpoch: BigInt(0),
    allowReputationQueries: false,
    acceptReputationAttestations: false,
    requireReview: false,
    blockedIdentities: [],
    contentHosts: [],
    allowedIdentities: [],
    curation: undefined
  };
}
/**
 * PeerPolicy defines per-peer federation policies.
 * @name PeerPolicy
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.PeerPolicy
 */
export const PeerPolicy = {
  typeUrl: "/sparkdream.federation.v1.PeerPolicy",
  encode(message: PeerPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.peerId !== "") {
      writer.uint32(10).string(message.peerId);
    }
    for (const v of message.outboundContentTypes) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.inboundContentTypes) {
      writer.uint32(26).string(v!);
    }
    if (message.minOutboundTrustLevel !== 0) {
      writer.uint32(32).uint32(message.minOutboundTrustLevel);
    }
    if (message.inboundRateLimitPerEpoch !== BigInt(0)) {
      writer.uint32(40).uint64(message.inboundRateLimitPerEpoch);
    }
    if (message.outboundRateLimitPerEpoch !== BigInt(0)) {
      writer.uint32(80).uint64(message.outboundRateLimitPerEpoch);
    }
    if (message.allowReputationQueries === true) {
      writer.uint32(48).bool(message.allowReputationQueries);
    }
    if (message.acceptReputationAttestations === true) {
      writer.uint32(56).bool(message.acceptReputationAttestations);
    }
    if (message.requireReview === true) {
      writer.uint32(64).bool(message.requireReview);
    }
    for (const v of message.blockedIdentities) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.contentHosts) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.allowedIdentities) {
      writer.uint32(98).string(v!);
    }
    if (message.curation !== undefined) {
      IdentityCuration.encode(message.curation, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeerPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerId = reader.string();
          break;
        case 2:
          message.outboundContentTypes.push(reader.string());
          break;
        case 3:
          message.inboundContentTypes.push(reader.string());
          break;
        case 4:
          message.minOutboundTrustLevel = reader.uint32();
          break;
        case 5:
          message.inboundRateLimitPerEpoch = reader.uint64();
          break;
        case 10:
          message.outboundRateLimitPerEpoch = reader.uint64();
          break;
        case 6:
          message.allowReputationQueries = reader.bool();
          break;
        case 7:
          message.acceptReputationAttestations = reader.bool();
          break;
        case 8:
          message.requireReview = reader.bool();
          break;
        case 9:
          message.blockedIdentities.push(reader.string());
          break;
        case 11:
          message.contentHosts.push(reader.string());
          break;
        case 12:
          message.allowedIdentities.push(reader.string());
          break;
        case 13:
          message.curation = IdentityCuration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PeerPolicy>): PeerPolicy {
    const message = createBasePeerPolicy();
    message.peerId = object.peerId ?? "";
    message.outboundContentTypes = object.outboundContentTypes?.map(e => e) || [];
    message.inboundContentTypes = object.inboundContentTypes?.map(e => e) || [];
    message.minOutboundTrustLevel = object.minOutboundTrustLevel ?? 0;
    message.inboundRateLimitPerEpoch = object.inboundRateLimitPerEpoch !== undefined && object.inboundRateLimitPerEpoch !== null ? BigInt(object.inboundRateLimitPerEpoch.toString()) : BigInt(0);
    message.outboundRateLimitPerEpoch = object.outboundRateLimitPerEpoch !== undefined && object.outboundRateLimitPerEpoch !== null ? BigInt(object.outboundRateLimitPerEpoch.toString()) : BigInt(0);
    message.allowReputationQueries = object.allowReputationQueries ?? false;
    message.acceptReputationAttestations = object.acceptReputationAttestations ?? false;
    message.requireReview = object.requireReview ?? false;
    message.blockedIdentities = object.blockedIdentities?.map(e => e) || [];
    message.contentHosts = object.contentHosts?.map(e => e) || [];
    message.allowedIdentities = object.allowedIdentities?.map(e => e) || [];
    message.curation = object.curation !== undefined && object.curation !== null ? IdentityCuration.fromPartial(object.curation) : undefined;
    return message;
  },
  fromAmino(object: PeerPolicyAmino): PeerPolicy {
    const message = createBasePeerPolicy();
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    message.outboundContentTypes = object.outbound_content_types?.map(e => e) || [];
    message.inboundContentTypes = object.inbound_content_types?.map(e => e) || [];
    if (object.min_outbound_trust_level !== undefined && object.min_outbound_trust_level !== null) {
      message.minOutboundTrustLevel = object.min_outbound_trust_level;
    }
    if (object.inbound_rate_limit_per_epoch !== undefined && object.inbound_rate_limit_per_epoch !== null) {
      message.inboundRateLimitPerEpoch = BigInt(object.inbound_rate_limit_per_epoch);
    }
    if (object.outbound_rate_limit_per_epoch !== undefined && object.outbound_rate_limit_per_epoch !== null) {
      message.outboundRateLimitPerEpoch = BigInt(object.outbound_rate_limit_per_epoch);
    }
    if (object.allow_reputation_queries !== undefined && object.allow_reputation_queries !== null) {
      message.allowReputationQueries = object.allow_reputation_queries;
    }
    if (object.accept_reputation_attestations !== undefined && object.accept_reputation_attestations !== null) {
      message.acceptReputationAttestations = object.accept_reputation_attestations;
    }
    if (object.require_review !== undefined && object.require_review !== null) {
      message.requireReview = object.require_review;
    }
    message.blockedIdentities = object.blocked_identities?.map(e => e) || [];
    message.contentHosts = object.content_hosts?.map(e => e) || [];
    message.allowedIdentities = object.allowed_identities?.map(e => e) || [];
    if (object.curation !== undefined && object.curation !== null) {
      message.curation = IdentityCuration.fromAmino(object.curation);
    }
    return message;
  },
  toAmino(message: PeerPolicy): PeerPolicyAmino {
    const obj: any = {};
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    if (message.outboundContentTypes) {
      obj.outbound_content_types = message.outboundContentTypes.map(e => e);
    } else {
      obj.outbound_content_types = message.outboundContentTypes;
    }
    if (message.inboundContentTypes) {
      obj.inbound_content_types = message.inboundContentTypes.map(e => e);
    } else {
      obj.inbound_content_types = message.inboundContentTypes;
    }
    obj.min_outbound_trust_level = message.minOutboundTrustLevel === 0 ? undefined : message.minOutboundTrustLevel;
    obj.inbound_rate_limit_per_epoch = message.inboundRateLimitPerEpoch !== BigInt(0) ? message.inboundRateLimitPerEpoch?.toString() : undefined;
    obj.outbound_rate_limit_per_epoch = message.outboundRateLimitPerEpoch !== BigInt(0) ? message.outboundRateLimitPerEpoch?.toString() : undefined;
    obj.allow_reputation_queries = message.allowReputationQueries === false ? undefined : message.allowReputationQueries;
    obj.accept_reputation_attestations = message.acceptReputationAttestations === false ? undefined : message.acceptReputationAttestations;
    obj.require_review = message.requireReview === false ? undefined : message.requireReview;
    if (message.blockedIdentities) {
      obj.blocked_identities = message.blockedIdentities.map(e => e);
    } else {
      obj.blocked_identities = message.blockedIdentities;
    }
    if (message.contentHosts) {
      obj.content_hosts = message.contentHosts.map(e => e);
    } else {
      obj.content_hosts = message.contentHosts;
    }
    if (message.allowedIdentities) {
      obj.allowed_identities = message.allowedIdentities.map(e => e);
    } else {
      obj.allowed_identities = message.allowedIdentities;
    }
    obj.curation = message.curation ? IdentityCuration.toAmino(message.curation) : undefined;
    return obj;
  },
  fromAminoMsg(object: PeerPolicyAminoMsg): PeerPolicy {
    return PeerPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: PeerPolicyProtoMsg): PeerPolicy {
    return PeerPolicy.decode(message.value);
  },
  toProto(message: PeerPolicy): Uint8Array {
    return PeerPolicy.encode(message).finish();
  },
  toProtoMsg(message: PeerPolicy): PeerPolicyProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.PeerPolicy",
      value: PeerPolicy.encode(message).finish()
    };
  }
};
function createBaseIdentityCuration(): IdentityCuration {
  return {
    collectionId: BigInt(0)
  };
}
/**
 * IdentityCuration points a peer's author gate at an x/collect collection.
 * @name IdentityCuration
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityCuration
 */
export const IdentityCuration = {
  typeUrl: "/sparkdream.federation.v1.IdentityCuration",
  encode(message: IdentityCuration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collectionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.collectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentityCuration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentityCuration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IdentityCuration>): IdentityCuration {
    const message = createBaseIdentityCuration();
    message.collectionId = object.collectionId !== undefined && object.collectionId !== null ? BigInt(object.collectionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IdentityCurationAmino): IdentityCuration {
    const message = createBaseIdentityCuration();
    if (object.collection_id !== undefined && object.collection_id !== null) {
      message.collectionId = BigInt(object.collection_id);
    }
    return message;
  },
  toAmino(message: IdentityCuration): IdentityCurationAmino {
    const obj: any = {};
    obj.collection_id = message.collectionId !== BigInt(0) ? message.collectionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IdentityCurationAminoMsg): IdentityCuration {
    return IdentityCuration.fromAmino(object.value);
  },
  fromProtoMsg(message: IdentityCurationProtoMsg): IdentityCuration {
    return IdentityCuration.decode(message.value);
  },
  toProto(message: IdentityCuration): Uint8Array {
    return IdentityCuration.encode(message).finish();
  },
  toProtoMsg(message: IdentityCuration): IdentityCurationProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.IdentityCuration",
      value: IdentityCuration.encode(message).finish()
    };
  }
};
function createBaseBridgeBinding(): BridgeBinding {
  return {
    address: "",
    peerId: "",
    protocol: "",
    endpoint: "",
    registeredAt: BigInt(0),
    contentSubmitted: BigInt(0),
    contentVerified: BigInt(0),
    contentRejected: BigInt(0),
    contentUnverified: BigInt(0),
    lastSubmissionAt: BigInt(0),
    suspended: false,
    epochSubmitted: BigInt(0),
    epochVerified: BigInt(0),
    epochRejected: BigInt(0),
    epochUnverified: BigInt(0),
    lastRewardEpoch: BigInt(0),
    cumulativeRewards: ""
  };
}
/**
 * BridgeBinding represents the federation-owned binding between a bridge
 * operator and a peer. Economic state (bond, status, unbonding, slashing
 * history) lives on the corresponding x/service Operator record keyed
 * by (address, service_type). This binding holds only federation-
 * specific data: which peer + protocol + endpoint URL + content stats
 * + suspended flag (toggled by underfunded/refunded hooks).
 * 
 * Per Decision 1a of the federation→service migration, one operator
 * address may hold multiple bindings under the same protocol (one per
 * peer) backed by a single shared service.Operator and a single shared
 * bond. Suspending a binding refuses new content submissions but does
 * not delete it.
 * @name BridgeBinding
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.BridgeBinding
 */
export const BridgeBinding = {
  typeUrl: "/sparkdream.federation.v1.BridgeBinding",
  encode(message: BridgeBinding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.endpoint !== "") {
      writer.uint32(34).string(message.endpoint);
    }
    if (message.registeredAt !== BigInt(0)) {
      writer.uint32(40).int64(message.registeredAt);
    }
    if (message.contentSubmitted !== BigInt(0)) {
      writer.uint32(48).uint64(message.contentSubmitted);
    }
    if (message.contentVerified !== BigInt(0)) {
      writer.uint32(56).uint64(message.contentVerified);
    }
    if (message.contentRejected !== BigInt(0)) {
      writer.uint32(64).uint64(message.contentRejected);
    }
    if (message.contentUnverified !== BigInt(0)) {
      writer.uint32(72).uint64(message.contentUnverified);
    }
    if (message.lastSubmissionAt !== BigInt(0)) {
      writer.uint32(80).int64(message.lastSubmissionAt);
    }
    if (message.suspended === true) {
      writer.uint32(88).bool(message.suspended);
    }
    if (message.epochSubmitted !== BigInt(0)) {
      writer.uint32(96).uint64(message.epochSubmitted);
    }
    if (message.epochVerified !== BigInt(0)) {
      writer.uint32(104).uint64(message.epochVerified);
    }
    if (message.epochRejected !== BigInt(0)) {
      writer.uint32(112).uint64(message.epochRejected);
    }
    if (message.epochUnverified !== BigInt(0)) {
      writer.uint32(120).uint64(message.epochUnverified);
    }
    if (message.lastRewardEpoch !== BigInt(0)) {
      writer.uint32(128).int64(message.lastRewardEpoch);
    }
    if (message.cumulativeRewards !== "") {
      writer.uint32(138).string(message.cumulativeRewards);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BridgeBinding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.protocol = reader.string();
          break;
        case 4:
          message.endpoint = reader.string();
          break;
        case 5:
          message.registeredAt = reader.int64();
          break;
        case 6:
          message.contentSubmitted = reader.uint64();
          break;
        case 7:
          message.contentVerified = reader.uint64();
          break;
        case 8:
          message.contentRejected = reader.uint64();
          break;
        case 9:
          message.contentUnverified = reader.uint64();
          break;
        case 10:
          message.lastSubmissionAt = reader.int64();
          break;
        case 11:
          message.suspended = reader.bool();
          break;
        case 12:
          message.epochSubmitted = reader.uint64();
          break;
        case 13:
          message.epochVerified = reader.uint64();
          break;
        case 14:
          message.epochRejected = reader.uint64();
          break;
        case 15:
          message.epochUnverified = reader.uint64();
          break;
        case 16:
          message.lastRewardEpoch = reader.int64();
          break;
        case 17:
          message.cumulativeRewards = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BridgeBinding>): BridgeBinding {
    const message = createBaseBridgeBinding();
    message.address = object.address ?? "";
    message.peerId = object.peerId ?? "";
    message.protocol = object.protocol ?? "";
    message.endpoint = object.endpoint ?? "";
    message.registeredAt = object.registeredAt !== undefined && object.registeredAt !== null ? BigInt(object.registeredAt.toString()) : BigInt(0);
    message.contentSubmitted = object.contentSubmitted !== undefined && object.contentSubmitted !== null ? BigInt(object.contentSubmitted.toString()) : BigInt(0);
    message.contentVerified = object.contentVerified !== undefined && object.contentVerified !== null ? BigInt(object.contentVerified.toString()) : BigInt(0);
    message.contentRejected = object.contentRejected !== undefined && object.contentRejected !== null ? BigInt(object.contentRejected.toString()) : BigInt(0);
    message.contentUnverified = object.contentUnverified !== undefined && object.contentUnverified !== null ? BigInt(object.contentUnverified.toString()) : BigInt(0);
    message.lastSubmissionAt = object.lastSubmissionAt !== undefined && object.lastSubmissionAt !== null ? BigInt(object.lastSubmissionAt.toString()) : BigInt(0);
    message.suspended = object.suspended ?? false;
    message.epochSubmitted = object.epochSubmitted !== undefined && object.epochSubmitted !== null ? BigInt(object.epochSubmitted.toString()) : BigInt(0);
    message.epochVerified = object.epochVerified !== undefined && object.epochVerified !== null ? BigInt(object.epochVerified.toString()) : BigInt(0);
    message.epochRejected = object.epochRejected !== undefined && object.epochRejected !== null ? BigInt(object.epochRejected.toString()) : BigInt(0);
    message.epochUnverified = object.epochUnverified !== undefined && object.epochUnverified !== null ? BigInt(object.epochUnverified.toString()) : BigInt(0);
    message.lastRewardEpoch = object.lastRewardEpoch !== undefined && object.lastRewardEpoch !== null ? BigInt(object.lastRewardEpoch.toString()) : BigInt(0);
    message.cumulativeRewards = object.cumulativeRewards ?? "";
    return message;
  },
  fromAmino(object: BridgeBindingAmino): BridgeBinding {
    const message = createBaseBridgeBinding();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = object.protocol;
    }
    if (object.endpoint !== undefined && object.endpoint !== null) {
      message.endpoint = object.endpoint;
    }
    if (object.registered_at !== undefined && object.registered_at !== null) {
      message.registeredAt = BigInt(object.registered_at);
    }
    if (object.content_submitted !== undefined && object.content_submitted !== null) {
      message.contentSubmitted = BigInt(object.content_submitted);
    }
    if (object.content_verified !== undefined && object.content_verified !== null) {
      message.contentVerified = BigInt(object.content_verified);
    }
    if (object.content_rejected !== undefined && object.content_rejected !== null) {
      message.contentRejected = BigInt(object.content_rejected);
    }
    if (object.content_unverified !== undefined && object.content_unverified !== null) {
      message.contentUnverified = BigInt(object.content_unverified);
    }
    if (object.last_submission_at !== undefined && object.last_submission_at !== null) {
      message.lastSubmissionAt = BigInt(object.last_submission_at);
    }
    if (object.suspended !== undefined && object.suspended !== null) {
      message.suspended = object.suspended;
    }
    if (object.epoch_submitted !== undefined && object.epoch_submitted !== null) {
      message.epochSubmitted = BigInt(object.epoch_submitted);
    }
    if (object.epoch_verified !== undefined && object.epoch_verified !== null) {
      message.epochVerified = BigInt(object.epoch_verified);
    }
    if (object.epoch_rejected !== undefined && object.epoch_rejected !== null) {
      message.epochRejected = BigInt(object.epoch_rejected);
    }
    if (object.epoch_unverified !== undefined && object.epoch_unverified !== null) {
      message.epochUnverified = BigInt(object.epoch_unverified);
    }
    if (object.last_reward_epoch !== undefined && object.last_reward_epoch !== null) {
      message.lastRewardEpoch = BigInt(object.last_reward_epoch);
    }
    if (object.cumulative_rewards !== undefined && object.cumulative_rewards !== null) {
      message.cumulativeRewards = object.cumulative_rewards;
    }
    return message;
  },
  toAmino(message: BridgeBinding): BridgeBindingAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.protocol = message.protocol === "" ? undefined : message.protocol;
    obj.endpoint = message.endpoint === "" ? undefined : message.endpoint;
    obj.registered_at = message.registeredAt !== BigInt(0) ? message.registeredAt?.toString() : undefined;
    obj.content_submitted = message.contentSubmitted !== BigInt(0) ? message.contentSubmitted?.toString() : undefined;
    obj.content_verified = message.contentVerified !== BigInt(0) ? message.contentVerified?.toString() : undefined;
    obj.content_rejected = message.contentRejected !== BigInt(0) ? message.contentRejected?.toString() : undefined;
    obj.content_unverified = message.contentUnverified !== BigInt(0) ? message.contentUnverified?.toString() : undefined;
    obj.last_submission_at = message.lastSubmissionAt !== BigInt(0) ? message.lastSubmissionAt?.toString() : undefined;
    obj.suspended = message.suspended === false ? undefined : message.suspended;
    obj.epoch_submitted = message.epochSubmitted !== BigInt(0) ? message.epochSubmitted?.toString() : undefined;
    obj.epoch_verified = message.epochVerified !== BigInt(0) ? message.epochVerified?.toString() : undefined;
    obj.epoch_rejected = message.epochRejected !== BigInt(0) ? message.epochRejected?.toString() : undefined;
    obj.epoch_unverified = message.epochUnverified !== BigInt(0) ? message.epochUnverified?.toString() : undefined;
    obj.last_reward_epoch = message.lastRewardEpoch !== BigInt(0) ? message.lastRewardEpoch?.toString() : undefined;
    obj.cumulative_rewards = message.cumulativeRewards === "" ? undefined : message.cumulativeRewards;
    return obj;
  },
  fromAminoMsg(object: BridgeBindingAminoMsg): BridgeBinding {
    return BridgeBinding.fromAmino(object.value);
  },
  fromProtoMsg(message: BridgeBindingProtoMsg): BridgeBinding {
    return BridgeBinding.decode(message.value);
  },
  toProto(message: BridgeBinding): Uint8Array {
    return BridgeBinding.encode(message).finish();
  },
  toProtoMsg(message: BridgeBinding): BridgeBindingProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.BridgeBinding",
      value: BridgeBinding.encode(message).finish()
    };
  }
};
function createBaseVerificationRecord(): VerificationRecord {
  return {
    contentId: BigInt(0),
    verifier: "",
    verifierHash: new Uint8Array(),
    verifiedAt: BigInt(0),
    challengeWindowEnds: BigInt(0),
    committedAmount: "",
    verifierBondSnapshot: "",
    outcome: 0,
    priorRejectedChallenges: 0,
    lastChallengeResolvedAt: BigInt(0),
    challenger: "",
    escrowedChallengeFee: "",
    pendingVerifierVerdict: 0,
    commitmentReleased: false,
    arbiterEscalationDeadline: BigInt(0),
    arbiterResolutionDeadline: BigInt(0),
    challengeReportId: BigInt(0),
    pendingChallengeReport: "",
    quorumFalsifiedContent: false,
    settlementRetryKind: 0,
    settlementAttempts: 0,
    settlementRetryAt: BigInt(0)
  };
}
/**
 * VerificationRecord tracks a verifier's verification of specific content.
 * @name VerificationRecord
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.VerificationRecord
 */
export const VerificationRecord = {
  typeUrl: "/sparkdream.federation.v1.VerificationRecord",
  encode(message: VerificationRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contentId);
    }
    if (message.verifier !== "") {
      writer.uint32(18).string(message.verifier);
    }
    if (message.verifierHash.length !== 0) {
      writer.uint32(26).bytes(message.verifierHash);
    }
    if (message.verifiedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.verifiedAt);
    }
    if (message.challengeWindowEnds !== BigInt(0)) {
      writer.uint32(40).int64(message.challengeWindowEnds);
    }
    if (message.committedAmount !== "") {
      writer.uint32(50).string(message.committedAmount);
    }
    if (message.verifierBondSnapshot !== "") {
      writer.uint32(58).string(message.verifierBondSnapshot);
    }
    if (message.outcome !== 0) {
      writer.uint32(64).int32(message.outcome);
    }
    if (message.priorRejectedChallenges !== 0) {
      writer.uint32(72).uint32(message.priorRejectedChallenges);
    }
    if (message.lastChallengeResolvedAt !== BigInt(0)) {
      writer.uint32(80).int64(message.lastChallengeResolvedAt);
    }
    if (message.challenger !== "") {
      writer.uint32(90).string(message.challenger);
    }
    if (message.escrowedChallengeFee !== "") {
      writer.uint32(98).string(message.escrowedChallengeFee);
    }
    if (message.pendingVerifierVerdict !== 0) {
      writer.uint32(104).int32(message.pendingVerifierVerdict);
    }
    if (message.commitmentReleased === true) {
      writer.uint32(112).bool(message.commitmentReleased);
    }
    if (message.arbiterEscalationDeadline !== BigInt(0)) {
      writer.uint32(120).int64(message.arbiterEscalationDeadline);
    }
    if (message.arbiterResolutionDeadline !== BigInt(0)) {
      writer.uint32(128).int64(message.arbiterResolutionDeadline);
    }
    if (message.challengeReportId !== BigInt(0)) {
      writer.uint32(136).uint64(message.challengeReportId);
    }
    if (message.pendingChallengeReport !== "") {
      writer.uint32(146).string(message.pendingChallengeReport);
    }
    if (message.quorumFalsifiedContent === true) {
      writer.uint32(152).bool(message.quorumFalsifiedContent);
    }
    if (message.settlementRetryKind !== 0) {
      writer.uint32(160).int32(message.settlementRetryKind);
    }
    if (message.settlementAttempts !== 0) {
      writer.uint32(168).uint32(message.settlementAttempts);
    }
    if (message.settlementRetryAt !== BigInt(0)) {
      writer.uint32(176).int64(message.settlementRetryAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VerificationRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentId = reader.uint64();
          break;
        case 2:
          message.verifier = reader.string();
          break;
        case 3:
          message.verifierHash = reader.bytes();
          break;
        case 4:
          message.verifiedAt = reader.int64();
          break;
        case 5:
          message.challengeWindowEnds = reader.int64();
          break;
        case 6:
          message.committedAmount = reader.string();
          break;
        case 7:
          message.verifierBondSnapshot = reader.string();
          break;
        case 8:
          message.outcome = reader.int32() as any;
          break;
        case 9:
          message.priorRejectedChallenges = reader.uint32();
          break;
        case 10:
          message.lastChallengeResolvedAt = reader.int64();
          break;
        case 11:
          message.challenger = reader.string();
          break;
        case 12:
          message.escrowedChallengeFee = reader.string();
          break;
        case 13:
          message.pendingVerifierVerdict = reader.int32() as any;
          break;
        case 14:
          message.commitmentReleased = reader.bool();
          break;
        case 15:
          message.arbiterEscalationDeadline = reader.int64();
          break;
        case 16:
          message.arbiterResolutionDeadline = reader.int64();
          break;
        case 17:
          message.challengeReportId = reader.uint64();
          break;
        case 18:
          message.pendingChallengeReport = reader.string();
          break;
        case 19:
          message.quorumFalsifiedContent = reader.bool();
          break;
        case 20:
          message.settlementRetryKind = reader.int32() as any;
          break;
        case 21:
          message.settlementAttempts = reader.uint32();
          break;
        case 22:
          message.settlementRetryAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VerificationRecord>): VerificationRecord {
    const message = createBaseVerificationRecord();
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    message.verifier = object.verifier ?? "";
    message.verifierHash = object.verifierHash ?? new Uint8Array();
    message.verifiedAt = object.verifiedAt !== undefined && object.verifiedAt !== null ? BigInt(object.verifiedAt.toString()) : BigInt(0);
    message.challengeWindowEnds = object.challengeWindowEnds !== undefined && object.challengeWindowEnds !== null ? BigInt(object.challengeWindowEnds.toString()) : BigInt(0);
    message.committedAmount = object.committedAmount ?? "";
    message.verifierBondSnapshot = object.verifierBondSnapshot ?? "";
    message.outcome = object.outcome ?? 0;
    message.priorRejectedChallenges = object.priorRejectedChallenges ?? 0;
    message.lastChallengeResolvedAt = object.lastChallengeResolvedAt !== undefined && object.lastChallengeResolvedAt !== null ? BigInt(object.lastChallengeResolvedAt.toString()) : BigInt(0);
    message.challenger = object.challenger ?? "";
    message.escrowedChallengeFee = object.escrowedChallengeFee ?? "";
    message.pendingVerifierVerdict = object.pendingVerifierVerdict ?? 0;
    message.commitmentReleased = object.commitmentReleased ?? false;
    message.arbiterEscalationDeadline = object.arbiterEscalationDeadline !== undefined && object.arbiterEscalationDeadline !== null ? BigInt(object.arbiterEscalationDeadline.toString()) : BigInt(0);
    message.arbiterResolutionDeadline = object.arbiterResolutionDeadline !== undefined && object.arbiterResolutionDeadline !== null ? BigInt(object.arbiterResolutionDeadline.toString()) : BigInt(0);
    message.challengeReportId = object.challengeReportId !== undefined && object.challengeReportId !== null ? BigInt(object.challengeReportId.toString()) : BigInt(0);
    message.pendingChallengeReport = object.pendingChallengeReport ?? "";
    message.quorumFalsifiedContent = object.quorumFalsifiedContent ?? false;
    message.settlementRetryKind = object.settlementRetryKind ?? 0;
    message.settlementAttempts = object.settlementAttempts ?? 0;
    message.settlementRetryAt = object.settlementRetryAt !== undefined && object.settlementRetryAt !== null ? BigInt(object.settlementRetryAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VerificationRecordAmino): VerificationRecord {
    const message = createBaseVerificationRecord();
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    if (object.verifier !== undefined && object.verifier !== null) {
      message.verifier = object.verifier;
    }
    if (object.verifier_hash !== undefined && object.verifier_hash !== null) {
      message.verifierHash = bytesFromBase64(object.verifier_hash);
    }
    if (object.verified_at !== undefined && object.verified_at !== null) {
      message.verifiedAt = BigInt(object.verified_at);
    }
    if (object.challenge_window_ends !== undefined && object.challenge_window_ends !== null) {
      message.challengeWindowEnds = BigInt(object.challenge_window_ends);
    }
    if (object.committed_amount !== undefined && object.committed_amount !== null) {
      message.committedAmount = object.committed_amount;
    }
    if (object.verifier_bond_snapshot !== undefined && object.verifier_bond_snapshot !== null) {
      message.verifierBondSnapshot = object.verifier_bond_snapshot;
    }
    if (object.outcome !== undefined && object.outcome !== null) {
      message.outcome = object.outcome;
    }
    if (object.prior_rejected_challenges !== undefined && object.prior_rejected_challenges !== null) {
      message.priorRejectedChallenges = object.prior_rejected_challenges;
    }
    if (object.last_challenge_resolved_at !== undefined && object.last_challenge_resolved_at !== null) {
      message.lastChallengeResolvedAt = BigInt(object.last_challenge_resolved_at);
    }
    if (object.challenger !== undefined && object.challenger !== null) {
      message.challenger = object.challenger;
    }
    if (object.escrowed_challenge_fee !== undefined && object.escrowed_challenge_fee !== null) {
      message.escrowedChallengeFee = object.escrowed_challenge_fee;
    }
    if (object.pending_verifier_verdict !== undefined && object.pending_verifier_verdict !== null) {
      message.pendingVerifierVerdict = object.pending_verifier_verdict;
    }
    if (object.commitment_released !== undefined && object.commitment_released !== null) {
      message.commitmentReleased = object.commitment_released;
    }
    if (object.arbiter_escalation_deadline !== undefined && object.arbiter_escalation_deadline !== null) {
      message.arbiterEscalationDeadline = BigInt(object.arbiter_escalation_deadline);
    }
    if (object.arbiter_resolution_deadline !== undefined && object.arbiter_resolution_deadline !== null) {
      message.arbiterResolutionDeadline = BigInt(object.arbiter_resolution_deadline);
    }
    if (object.challenge_report_id !== undefined && object.challenge_report_id !== null) {
      message.challengeReportId = BigInt(object.challenge_report_id);
    }
    if (object.pending_challenge_report !== undefined && object.pending_challenge_report !== null) {
      message.pendingChallengeReport = object.pending_challenge_report;
    }
    if (object.quorum_falsified_content !== undefined && object.quorum_falsified_content !== null) {
      message.quorumFalsifiedContent = object.quorum_falsified_content;
    }
    if (object.settlement_retry_kind !== undefined && object.settlement_retry_kind !== null) {
      message.settlementRetryKind = object.settlement_retry_kind;
    }
    if (object.settlement_attempts !== undefined && object.settlement_attempts !== null) {
      message.settlementAttempts = object.settlement_attempts;
    }
    if (object.settlement_retry_at !== undefined && object.settlement_retry_at !== null) {
      message.settlementRetryAt = BigInt(object.settlement_retry_at);
    }
    return message;
  },
  toAmino(message: VerificationRecord): VerificationRecordAmino {
    const obj: any = {};
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    obj.verifier = message.verifier === "" ? undefined : message.verifier;
    obj.verifier_hash = message.verifierHash ? base64FromBytes(message.verifierHash) : undefined;
    obj.verified_at = message.verifiedAt !== BigInt(0) ? message.verifiedAt?.toString() : undefined;
    obj.challenge_window_ends = message.challengeWindowEnds !== BigInt(0) ? message.challengeWindowEnds?.toString() : undefined;
    obj.committed_amount = message.committedAmount === "" ? undefined : message.committedAmount;
    obj.verifier_bond_snapshot = message.verifierBondSnapshot === "" ? undefined : message.verifierBondSnapshot;
    obj.outcome = message.outcome === 0 ? undefined : message.outcome;
    obj.prior_rejected_challenges = message.priorRejectedChallenges === 0 ? undefined : message.priorRejectedChallenges;
    obj.last_challenge_resolved_at = message.lastChallengeResolvedAt !== BigInt(0) ? message.lastChallengeResolvedAt?.toString() : undefined;
    obj.challenger = message.challenger === "" ? undefined : message.challenger;
    obj.escrowed_challenge_fee = message.escrowedChallengeFee === "" ? undefined : message.escrowedChallengeFee;
    obj.pending_verifier_verdict = message.pendingVerifierVerdict === 0 ? undefined : message.pendingVerifierVerdict;
    obj.commitment_released = message.commitmentReleased === false ? undefined : message.commitmentReleased;
    obj.arbiter_escalation_deadline = message.arbiterEscalationDeadline !== BigInt(0) ? message.arbiterEscalationDeadline?.toString() : undefined;
    obj.arbiter_resolution_deadline = message.arbiterResolutionDeadline !== BigInt(0) ? message.arbiterResolutionDeadline?.toString() : undefined;
    obj.challenge_report_id = message.challengeReportId !== BigInt(0) ? message.challengeReportId?.toString() : undefined;
    obj.pending_challenge_report = message.pendingChallengeReport === "" ? undefined : message.pendingChallengeReport;
    obj.quorum_falsified_content = message.quorumFalsifiedContent === false ? undefined : message.quorumFalsifiedContent;
    obj.settlement_retry_kind = message.settlementRetryKind === 0 ? undefined : message.settlementRetryKind;
    obj.settlement_attempts = message.settlementAttempts === 0 ? undefined : message.settlementAttempts;
    obj.settlement_retry_at = message.settlementRetryAt !== BigInt(0) ? message.settlementRetryAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VerificationRecordAminoMsg): VerificationRecord {
    return VerificationRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: VerificationRecordProtoMsg): VerificationRecord {
    return VerificationRecord.decode(message.value);
  },
  toProto(message: VerificationRecord): Uint8Array {
    return VerificationRecord.encode(message).finish();
  },
  toProtoMsg(message: VerificationRecord): VerificationRecordProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.VerificationRecord",
      value: VerificationRecord.encode(message).finish()
    };
  }
};
function createBaseEscalatedChallenge(): EscalatedChallenge {
  return {
    contentId: BigInt(0),
    escalator: "",
    escrowedEscalationFee: "",
    autoVerdictBeforeEscalation: 0,
    juryDeadline: BigInt(0)
  };
}
/**
 * EscalatedChallenge tracks the Phase 2 (human jury) lifecycle for a
 * challenge whose Phase 1 auto-verdict was contested via
 * MsgEscalateChallenge. Operations Committee submits the jury verdict
 * via MsgResolveEscalatedChallenge; the EndBlocker stamps TIMEOUT on
 * jury_deadline expiry. Both paths feed the same applyJuryVerdict
 * helper which disposes of the escrowed challenge_fee + escalation_fee
 * and (on UPHELD/REJECTED) applies the same verifier-side accounting
 * as the auto-resolution path.
 * @name EscalatedChallenge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.EscalatedChallenge
 */
export const EscalatedChallenge = {
  typeUrl: "/sparkdream.federation.v1.EscalatedChallenge",
  encode(message: EscalatedChallenge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contentId);
    }
    if (message.escalator !== "") {
      writer.uint32(18).string(message.escalator);
    }
    if (message.escrowedEscalationFee !== "") {
      writer.uint32(26).string(message.escrowedEscalationFee);
    }
    if (message.autoVerdictBeforeEscalation !== 0) {
      writer.uint32(32).int32(message.autoVerdictBeforeEscalation);
    }
    if (message.juryDeadline !== BigInt(0)) {
      writer.uint32(40).int64(message.juryDeadline);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EscalatedChallenge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEscalatedChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentId = reader.uint64();
          break;
        case 2:
          message.escalator = reader.string();
          break;
        case 3:
          message.escrowedEscalationFee = reader.string();
          break;
        case 4:
          message.autoVerdictBeforeEscalation = reader.int32() as any;
          break;
        case 5:
          message.juryDeadline = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EscalatedChallenge>): EscalatedChallenge {
    const message = createBaseEscalatedChallenge();
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    message.escalator = object.escalator ?? "";
    message.escrowedEscalationFee = object.escrowedEscalationFee ?? "";
    message.autoVerdictBeforeEscalation = object.autoVerdictBeforeEscalation ?? 0;
    message.juryDeadline = object.juryDeadline !== undefined && object.juryDeadline !== null ? BigInt(object.juryDeadline.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EscalatedChallengeAmino): EscalatedChallenge {
    const message = createBaseEscalatedChallenge();
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    if (object.escalator !== undefined && object.escalator !== null) {
      message.escalator = object.escalator;
    }
    if (object.escrowed_escalation_fee !== undefined && object.escrowed_escalation_fee !== null) {
      message.escrowedEscalationFee = object.escrowed_escalation_fee;
    }
    if (object.auto_verdict_before_escalation !== undefined && object.auto_verdict_before_escalation !== null) {
      message.autoVerdictBeforeEscalation = object.auto_verdict_before_escalation;
    }
    if (object.jury_deadline !== undefined && object.jury_deadline !== null) {
      message.juryDeadline = BigInt(object.jury_deadline);
    }
    return message;
  },
  toAmino(message: EscalatedChallenge): EscalatedChallengeAmino {
    const obj: any = {};
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    obj.escalator = message.escalator === "" ? undefined : message.escalator;
    obj.escrowed_escalation_fee = message.escrowedEscalationFee === "" ? undefined : message.escrowedEscalationFee;
    obj.auto_verdict_before_escalation = message.autoVerdictBeforeEscalation === 0 ? undefined : message.autoVerdictBeforeEscalation;
    obj.jury_deadline = message.juryDeadline !== BigInt(0) ? message.juryDeadline?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EscalatedChallengeAminoMsg): EscalatedChallenge {
    return EscalatedChallenge.fromAmino(object.value);
  },
  fromProtoMsg(message: EscalatedChallengeProtoMsg): EscalatedChallenge {
    return EscalatedChallenge.decode(message.value);
  },
  toProto(message: EscalatedChallenge): Uint8Array {
    return EscalatedChallenge.encode(message).finish();
  },
  toProtoMsg(message: EscalatedChallenge): EscalatedChallengeProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.EscalatedChallenge",
      value: EscalatedChallenge.encode(message).finish()
    };
  }
};
function createBaseArbiterHashSubmission(): ArbiterHashSubmission {
  return {
    contentId: BigInt(0),
    contentHash: new Uint8Array(),
    submittedAt: BigInt(0),
    operator: "",
    nullifier: new Uint8Array()
  };
}
/**
 * ArbiterHashSubmission stores an arbiter's hash for quorum-based challenge resolution.
 * @name ArbiterHashSubmission
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ArbiterHashSubmission
 */
export const ArbiterHashSubmission = {
  typeUrl: "/sparkdream.federation.v1.ArbiterHashSubmission",
  encode(message: ArbiterHashSubmission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contentId);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(18).bytes(message.contentHash);
    }
    if (message.submittedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.submittedAt);
    }
    if (message.operator !== "") {
      writer.uint32(34).string(message.operator);
    }
    if (message.nullifier.length !== 0) {
      writer.uint32(42).bytes(message.nullifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ArbiterHashSubmission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArbiterHashSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentId = reader.uint64();
          break;
        case 2:
          message.contentHash = reader.bytes();
          break;
        case 3:
          message.submittedAt = reader.int64();
          break;
        case 4:
          message.operator = reader.string();
          break;
        case 5:
          message.nullifier = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ArbiterHashSubmission>): ArbiterHashSubmission {
    const message = createBaseArbiterHashSubmission();
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    message.contentHash = object.contentHash ?? new Uint8Array();
    message.submittedAt = object.submittedAt !== undefined && object.submittedAt !== null ? BigInt(object.submittedAt.toString()) : BigInt(0);
    message.operator = object.operator ?? "";
    message.nullifier = object.nullifier ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ArbiterHashSubmissionAmino): ArbiterHashSubmission {
    const message = createBaseArbiterHashSubmission();
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = bytesFromBase64(object.content_hash);
    }
    if (object.submitted_at !== undefined && object.submitted_at !== null) {
      message.submittedAt = BigInt(object.submitted_at);
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.nullifier !== undefined && object.nullifier !== null) {
      message.nullifier = bytesFromBase64(object.nullifier);
    }
    return message;
  },
  toAmino(message: ArbiterHashSubmission): ArbiterHashSubmissionAmino {
    const obj: any = {};
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    obj.content_hash = message.contentHash ? base64FromBytes(message.contentHash) : undefined;
    obj.submitted_at = message.submittedAt !== BigInt(0) ? message.submittedAt?.toString() : undefined;
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.nullifier = message.nullifier ? base64FromBytes(message.nullifier) : undefined;
    return obj;
  },
  fromAminoMsg(object: ArbiterHashSubmissionAminoMsg): ArbiterHashSubmission {
    return ArbiterHashSubmission.fromAmino(object.value);
  },
  fromProtoMsg(message: ArbiterHashSubmissionProtoMsg): ArbiterHashSubmission {
    return ArbiterHashSubmission.decode(message.value);
  },
  toProto(message: ArbiterHashSubmission): Uint8Array {
    return ArbiterHashSubmission.encode(message).finish();
  },
  toProtoMsg(message: ArbiterHashSubmission): ArbiterHashSubmissionProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.ArbiterHashSubmission",
      value: ArbiterHashSubmission.encode(message).finish()
    };
  }
};
function createBaseFederatedContent(): FederatedContent {
  return {
    id: BigInt(0),
    peerId: "",
    remoteContentId: "",
    contentType: "",
    creatorIdentity: "",
    creatorName: "",
    title: "",
    body: "",
    contentUri: "",
    protocolMetadata: new Uint8Array(),
    remoteCreatedAt: BigInt(0),
    receivedAt: BigInt(0),
    submittedBy: "",
    status: 0,
    expiresAt: BigInt(0),
    contentHash: new Uint8Array(),
    supersedes: undefined,
    supersededBy: BigInt(0),
    license: "",
    mediaFlags: 0,
    mediaRulesVersion: 0
  };
}
/**
 * FederatedContent represents inbound content from a federation peer.
 * @name FederatedContent
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.FederatedContent
 */
export const FederatedContent = {
  typeUrl: "/sparkdream.federation.v1.FederatedContent",
  encode(message: FederatedContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.remoteContentId !== "") {
      writer.uint32(26).string(message.remoteContentId);
    }
    if (message.contentType !== "") {
      writer.uint32(34).string(message.contentType);
    }
    if (message.creatorIdentity !== "") {
      writer.uint32(42).string(message.creatorIdentity);
    }
    if (message.creatorName !== "") {
      writer.uint32(50).string(message.creatorName);
    }
    if (message.title !== "") {
      writer.uint32(58).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(66).string(message.body);
    }
    if (message.contentUri !== "") {
      writer.uint32(74).string(message.contentUri);
    }
    if (message.protocolMetadata.length !== 0) {
      writer.uint32(82).bytes(message.protocolMetadata);
    }
    if (message.remoteCreatedAt !== BigInt(0)) {
      writer.uint32(88).int64(message.remoteCreatedAt);
    }
    if (message.receivedAt !== BigInt(0)) {
      writer.uint32(96).int64(message.receivedAt);
    }
    if (message.submittedBy !== "") {
      writer.uint32(106).string(message.submittedBy);
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(120).int64(message.expiresAt);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(130).bytes(message.contentHash);
    }
    if (message.supersedes !== undefined) {
      ContentRef.encode(message.supersedes, writer.uint32(138).fork()).ldelim();
    }
    if (message.supersededBy !== BigInt(0)) {
      writer.uint32(144).uint64(message.supersededBy);
    }
    if (message.license !== "") {
      writer.uint32(154).string(message.license);
    }
    if (message.mediaFlags !== 0) {
      writer.uint32(160).uint32(message.mediaFlags);
    }
    if (message.mediaRulesVersion !== 0) {
      writer.uint32(168).uint32(message.mediaRulesVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FederatedContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFederatedContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.remoteContentId = reader.string();
          break;
        case 4:
          message.contentType = reader.string();
          break;
        case 5:
          message.creatorIdentity = reader.string();
          break;
        case 6:
          message.creatorName = reader.string();
          break;
        case 7:
          message.title = reader.string();
          break;
        case 8:
          message.body = reader.string();
          break;
        case 9:
          message.contentUri = reader.string();
          break;
        case 10:
          message.protocolMetadata = reader.bytes();
          break;
        case 11:
          message.remoteCreatedAt = reader.int64();
          break;
        case 12:
          message.receivedAt = reader.int64();
          break;
        case 13:
          message.submittedBy = reader.string();
          break;
        case 14:
          message.status = reader.int32() as any;
          break;
        case 15:
          message.expiresAt = reader.int64();
          break;
        case 16:
          message.contentHash = reader.bytes();
          break;
        case 17:
          message.supersedes = ContentRef.decode(reader, reader.uint32());
          break;
        case 18:
          message.supersededBy = reader.uint64();
          break;
        case 19:
          message.license = reader.string();
          break;
        case 20:
          message.mediaFlags = reader.uint32();
          break;
        case 21:
          message.mediaRulesVersion = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FederatedContent>): FederatedContent {
    const message = createBaseFederatedContent();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.peerId = object.peerId ?? "";
    message.remoteContentId = object.remoteContentId ?? "";
    message.contentType = object.contentType ?? "";
    message.creatorIdentity = object.creatorIdentity ?? "";
    message.creatorName = object.creatorName ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.contentUri = object.contentUri ?? "";
    message.protocolMetadata = object.protocolMetadata ?? new Uint8Array();
    message.remoteCreatedAt = object.remoteCreatedAt !== undefined && object.remoteCreatedAt !== null ? BigInt(object.remoteCreatedAt.toString()) : BigInt(0);
    message.receivedAt = object.receivedAt !== undefined && object.receivedAt !== null ? BigInt(object.receivedAt.toString()) : BigInt(0);
    message.submittedBy = object.submittedBy ?? "";
    message.status = object.status ?? 0;
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    message.contentHash = object.contentHash ?? new Uint8Array();
    message.supersedes = object.supersedes !== undefined && object.supersedes !== null ? ContentRef.fromPartial(object.supersedes) : undefined;
    message.supersededBy = object.supersededBy !== undefined && object.supersededBy !== null ? BigInt(object.supersededBy.toString()) : BigInt(0);
    message.license = object.license ?? "";
    message.mediaFlags = object.mediaFlags ?? 0;
    message.mediaRulesVersion = object.mediaRulesVersion ?? 0;
    return message;
  },
  fromAmino(object: FederatedContentAmino): FederatedContent {
    const message = createBaseFederatedContent();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.remote_content_id !== undefined && object.remote_content_id !== null) {
      message.remoteContentId = object.remote_content_id;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.creator_identity !== undefined && object.creator_identity !== null) {
      message.creatorIdentity = object.creator_identity;
    }
    if (object.creator_name !== undefined && object.creator_name !== null) {
      message.creatorName = object.creator_name;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    if (object.content_uri !== undefined && object.content_uri !== null) {
      message.contentUri = object.content_uri;
    }
    if (object.protocol_metadata !== undefined && object.protocol_metadata !== null) {
      message.protocolMetadata = bytesFromBase64(object.protocol_metadata);
    }
    if (object.remote_created_at !== undefined && object.remote_created_at !== null) {
      message.remoteCreatedAt = BigInt(object.remote_created_at);
    }
    if (object.received_at !== undefined && object.received_at !== null) {
      message.receivedAt = BigInt(object.received_at);
    }
    if (object.submitted_by !== undefined && object.submitted_by !== null) {
      message.submittedBy = object.submitted_by;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = bytesFromBase64(object.content_hash);
    }
    if (object.supersedes !== undefined && object.supersedes !== null) {
      message.supersedes = ContentRef.fromAmino(object.supersedes);
    }
    if (object.superseded_by !== undefined && object.superseded_by !== null) {
      message.supersededBy = BigInt(object.superseded_by);
    }
    if (object.license !== undefined && object.license !== null) {
      message.license = object.license;
    }
    if (object.media_flags !== undefined && object.media_flags !== null) {
      message.mediaFlags = object.media_flags;
    }
    if (object.media_rules_version !== undefined && object.media_rules_version !== null) {
      message.mediaRulesVersion = object.media_rules_version;
    }
    return message;
  },
  toAmino(message: FederatedContent): FederatedContentAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.remote_content_id = message.remoteContentId === "" ? undefined : message.remoteContentId;
    obj.content_type = message.contentType === "" ? undefined : message.contentType;
    obj.creator_identity = message.creatorIdentity === "" ? undefined : message.creatorIdentity;
    obj.creator_name = message.creatorName === "" ? undefined : message.creatorName;
    obj.title = message.title === "" ? undefined : message.title;
    obj.body = message.body === "" ? undefined : message.body;
    obj.content_uri = message.contentUri === "" ? undefined : message.contentUri;
    obj.protocol_metadata = message.protocolMetadata ? base64FromBytes(message.protocolMetadata) : undefined;
    obj.remote_created_at = message.remoteCreatedAt !== BigInt(0) ? message.remoteCreatedAt?.toString() : undefined;
    obj.received_at = message.receivedAt !== BigInt(0) ? message.receivedAt?.toString() : undefined;
    obj.submitted_by = message.submittedBy === "" ? undefined : message.submittedBy;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    obj.content_hash = message.contentHash ? base64FromBytes(message.contentHash) : undefined;
    obj.supersedes = message.supersedes ? ContentRef.toAmino(message.supersedes) : undefined;
    obj.superseded_by = message.supersededBy !== BigInt(0) ? message.supersededBy?.toString() : undefined;
    obj.license = message.license === "" ? undefined : message.license;
    obj.media_flags = message.mediaFlags === 0 ? undefined : message.mediaFlags;
    obj.media_rules_version = message.mediaRulesVersion === 0 ? undefined : message.mediaRulesVersion;
    return obj;
  },
  fromAminoMsg(object: FederatedContentAminoMsg): FederatedContent {
    return FederatedContent.fromAmino(object.value);
  },
  fromProtoMsg(message: FederatedContentProtoMsg): FederatedContent {
    return FederatedContent.decode(message.value);
  },
  toProto(message: FederatedContent): Uint8Array {
    return FederatedContent.encode(message).finish();
  },
  toProtoMsg(message: FederatedContent): FederatedContentProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.FederatedContent",
      value: FederatedContent.encode(message).finish()
    };
  }
};
function createBaseContentRef(): ContentRef {
  return {
    contentId: BigInt(0)
  };
}
/**
 * ContentRef points at a FederatedContent record. A message rather than a
 * bare uint64 because content ids start at 0: a nil ref is "none", which
 * a zero id could not express.
 * @name ContentRef
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ContentRef
 */
export const ContentRef = {
  typeUrl: "/sparkdream.federation.v1.ContentRef",
  encode(message: ContentRef, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contentId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContentRef {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentRef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContentRef>): ContentRef {
    const message = createBaseContentRef();
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ContentRefAmino): ContentRef {
    const message = createBaseContentRef();
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    return message;
  },
  toAmino(message: ContentRef): ContentRefAmino {
    const obj: any = {};
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContentRefAminoMsg): ContentRef {
    return ContentRef.fromAmino(object.value);
  },
  fromProtoMsg(message: ContentRefProtoMsg): ContentRef {
    return ContentRef.decode(message.value);
  },
  toProto(message: ContentRef): Uint8Array {
    return ContentRef.encode(message).finish();
  },
  toProtoMsg(message: ContentRef): ContentRefProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.ContentRef",
      value: ContentRef.encode(message).finish()
    };
  }
};
function createBaseIdentityLink(): IdentityLink {
  return {
    localAddress: "",
    peerId: "",
    remoteIdentity: "",
    status: 0,
    linkedAt: BigInt(0),
    verifiedAt: BigInt(0),
    challenge: new Uint8Array(),
    verificationAttempts: 0,
    unverifiedExpiresAt: BigInt(0),
    attestedBy: "",
    attestationEvidence: ""
  };
}
/**
 * IdentityLink maps a local address to a remote identity on a federation peer.
 * @name IdentityLink
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityLink
 */
export const IdentityLink = {
  typeUrl: "/sparkdream.federation.v1.IdentityLink",
  encode(message: IdentityLink, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.localAddress !== "") {
      writer.uint32(10).string(message.localAddress);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.remoteIdentity !== "") {
      writer.uint32(26).string(message.remoteIdentity);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.linkedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.linkedAt);
    }
    if (message.verifiedAt !== BigInt(0)) {
      writer.uint32(48).int64(message.verifiedAt);
    }
    if (message.challenge.length !== 0) {
      writer.uint32(58).bytes(message.challenge);
    }
    if (message.verificationAttempts !== 0) {
      writer.uint32(64).uint32(message.verificationAttempts);
    }
    if (message.unverifiedExpiresAt !== BigInt(0)) {
      writer.uint32(72).int64(message.unverifiedExpiresAt);
    }
    if (message.attestedBy !== "") {
      writer.uint32(82).string(message.attestedBy);
    }
    if (message.attestationEvidence !== "") {
      writer.uint32(90).string(message.attestationEvidence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentityLink {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentityLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.localAddress = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.remoteIdentity = reader.string();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.linkedAt = reader.int64();
          break;
        case 6:
          message.verifiedAt = reader.int64();
          break;
        case 7:
          message.challenge = reader.bytes();
          break;
        case 8:
          message.verificationAttempts = reader.uint32();
          break;
        case 9:
          message.unverifiedExpiresAt = reader.int64();
          break;
        case 10:
          message.attestedBy = reader.string();
          break;
        case 11:
          message.attestationEvidence = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IdentityLink>): IdentityLink {
    const message = createBaseIdentityLink();
    message.localAddress = object.localAddress ?? "";
    message.peerId = object.peerId ?? "";
    message.remoteIdentity = object.remoteIdentity ?? "";
    message.status = object.status ?? 0;
    message.linkedAt = object.linkedAt !== undefined && object.linkedAt !== null ? BigInt(object.linkedAt.toString()) : BigInt(0);
    message.verifiedAt = object.verifiedAt !== undefined && object.verifiedAt !== null ? BigInt(object.verifiedAt.toString()) : BigInt(0);
    message.challenge = object.challenge ?? new Uint8Array();
    message.verificationAttempts = object.verificationAttempts ?? 0;
    message.unverifiedExpiresAt = object.unverifiedExpiresAt !== undefined && object.unverifiedExpiresAt !== null ? BigInt(object.unverifiedExpiresAt.toString()) : BigInt(0);
    message.attestedBy = object.attestedBy ?? "";
    message.attestationEvidence = object.attestationEvidence ?? "";
    return message;
  },
  fromAmino(object: IdentityLinkAmino): IdentityLink {
    const message = createBaseIdentityLink();
    if (object.local_address !== undefined && object.local_address !== null) {
      message.localAddress = object.local_address;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.remote_identity !== undefined && object.remote_identity !== null) {
      message.remoteIdentity = object.remote_identity;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.linked_at !== undefined && object.linked_at !== null) {
      message.linkedAt = BigInt(object.linked_at);
    }
    if (object.verified_at !== undefined && object.verified_at !== null) {
      message.verifiedAt = BigInt(object.verified_at);
    }
    if (object.challenge !== undefined && object.challenge !== null) {
      message.challenge = bytesFromBase64(object.challenge);
    }
    if (object.verification_attempts !== undefined && object.verification_attempts !== null) {
      message.verificationAttempts = object.verification_attempts;
    }
    if (object.unverified_expires_at !== undefined && object.unverified_expires_at !== null) {
      message.unverifiedExpiresAt = BigInt(object.unverified_expires_at);
    }
    if (object.attested_by !== undefined && object.attested_by !== null) {
      message.attestedBy = object.attested_by;
    }
    if (object.attestation_evidence !== undefined && object.attestation_evidence !== null) {
      message.attestationEvidence = object.attestation_evidence;
    }
    return message;
  },
  toAmino(message: IdentityLink): IdentityLinkAmino {
    const obj: any = {};
    obj.local_address = message.localAddress === "" ? undefined : message.localAddress;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.remote_identity = message.remoteIdentity === "" ? undefined : message.remoteIdentity;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.linked_at = message.linkedAt !== BigInt(0) ? message.linkedAt?.toString() : undefined;
    obj.verified_at = message.verifiedAt !== BigInt(0) ? message.verifiedAt?.toString() : undefined;
    obj.challenge = message.challenge ? base64FromBytes(message.challenge) : undefined;
    obj.verification_attempts = message.verificationAttempts === 0 ? undefined : message.verificationAttempts;
    obj.unverified_expires_at = message.unverifiedExpiresAt !== BigInt(0) ? message.unverifiedExpiresAt?.toString() : undefined;
    obj.attested_by = message.attestedBy === "" ? undefined : message.attestedBy;
    obj.attestation_evidence = message.attestationEvidence === "" ? undefined : message.attestationEvidence;
    return obj;
  },
  fromAminoMsg(object: IdentityLinkAminoMsg): IdentityLink {
    return IdentityLink.fromAmino(object.value);
  },
  fromProtoMsg(message: IdentityLinkProtoMsg): IdentityLink {
    return IdentityLink.decode(message.value);
  },
  toProto(message: IdentityLink): Uint8Array {
    return IdentityLink.encode(message).finish();
  },
  toProtoMsg(message: IdentityLink): IdentityLinkProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.IdentityLink",
      value: IdentityLink.encode(message).finish()
    };
  }
};
function createBasePendingIdentityChallenge(): PendingIdentityChallenge {
  return {
    claimedAddress: "",
    claimantChainPeerId: "",
    claimantAddress: "",
    challenge: new Uint8Array(),
    receivedAt: BigInt(0),
    expiresAt: BigInt(0)
  };
}
/**
 * PendingIdentityChallenge stores an IBC identity verification challenge.
 * @name PendingIdentityChallenge
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.PendingIdentityChallenge
 */
export const PendingIdentityChallenge = {
  typeUrl: "/sparkdream.federation.v1.PendingIdentityChallenge",
  encode(message: PendingIdentityChallenge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimedAddress !== "") {
      writer.uint32(10).string(message.claimedAddress);
    }
    if (message.claimantChainPeerId !== "") {
      writer.uint32(18).string(message.claimantChainPeerId);
    }
    if (message.claimantAddress !== "") {
      writer.uint32(26).string(message.claimantAddress);
    }
    if (message.challenge.length !== 0) {
      writer.uint32(34).bytes(message.challenge);
    }
    if (message.receivedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.receivedAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(48).int64(message.expiresAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PendingIdentityChallenge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingIdentityChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimedAddress = reader.string();
          break;
        case 2:
          message.claimantChainPeerId = reader.string();
          break;
        case 3:
          message.claimantAddress = reader.string();
          break;
        case 4:
          message.challenge = reader.bytes();
          break;
        case 5:
          message.receivedAt = reader.int64();
          break;
        case 6:
          message.expiresAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PendingIdentityChallenge>): PendingIdentityChallenge {
    const message = createBasePendingIdentityChallenge();
    message.claimedAddress = object.claimedAddress ?? "";
    message.claimantChainPeerId = object.claimantChainPeerId ?? "";
    message.claimantAddress = object.claimantAddress ?? "";
    message.challenge = object.challenge ?? new Uint8Array();
    message.receivedAt = object.receivedAt !== undefined && object.receivedAt !== null ? BigInt(object.receivedAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PendingIdentityChallengeAmino): PendingIdentityChallenge {
    const message = createBasePendingIdentityChallenge();
    if (object.claimed_address !== undefined && object.claimed_address !== null) {
      message.claimedAddress = object.claimed_address;
    }
    if (object.claimant_chain_peer_id !== undefined && object.claimant_chain_peer_id !== null) {
      message.claimantChainPeerId = object.claimant_chain_peer_id;
    }
    if (object.claimant_address !== undefined && object.claimant_address !== null) {
      message.claimantAddress = object.claimant_address;
    }
    if (object.challenge !== undefined && object.challenge !== null) {
      message.challenge = bytesFromBase64(object.challenge);
    }
    if (object.received_at !== undefined && object.received_at !== null) {
      message.receivedAt = BigInt(object.received_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    return message;
  },
  toAmino(message: PendingIdentityChallenge): PendingIdentityChallengeAmino {
    const obj: any = {};
    obj.claimed_address = message.claimedAddress === "" ? undefined : message.claimedAddress;
    obj.claimant_chain_peer_id = message.claimantChainPeerId === "" ? undefined : message.claimantChainPeerId;
    obj.claimant_address = message.claimantAddress === "" ? undefined : message.claimantAddress;
    obj.challenge = message.challenge ? base64FromBytes(message.challenge) : undefined;
    obj.received_at = message.receivedAt !== BigInt(0) ? message.receivedAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PendingIdentityChallengeAminoMsg): PendingIdentityChallenge {
    return PendingIdentityChallenge.fromAmino(object.value);
  },
  fromProtoMsg(message: PendingIdentityChallengeProtoMsg): PendingIdentityChallenge {
    return PendingIdentityChallenge.decode(message.value);
  },
  toProto(message: PendingIdentityChallenge): Uint8Array {
    return PendingIdentityChallenge.encode(message).finish();
  },
  toProtoMsg(message: PendingIdentityChallenge): PendingIdentityChallengeProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.PendingIdentityChallenge",
      value: PendingIdentityChallenge.encode(message).finish()
    };
  }
};
function createBaseReputationAttestation(): ReputationAttestation {
  return {
    localAddress: "",
    peerId: "",
    remoteAddress: "",
    remoteTrustLevel: 0,
    localTrustCredit: 0,
    remoteReputations: [],
    attestedAt: BigInt(0),
    expiresAt: BigInt(0)
  };
}
/**
 * ReputationAttestation caches cross-chain reputation data.
 * @name ReputationAttestation
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ReputationAttestation
 */
export const ReputationAttestation = {
  typeUrl: "/sparkdream.federation.v1.ReputationAttestation",
  encode(message: ReputationAttestation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.localAddress !== "") {
      writer.uint32(10).string(message.localAddress);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.remoteAddress !== "") {
      writer.uint32(26).string(message.remoteAddress);
    }
    if (message.remoteTrustLevel !== 0) {
      writer.uint32(32).uint32(message.remoteTrustLevel);
    }
    if (message.localTrustCredit !== 0) {
      writer.uint32(40).uint32(message.localTrustCredit);
    }
    for (const v of message.remoteReputations) {
      TagReputation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.attestedAt !== BigInt(0)) {
      writer.uint32(56).int64(message.attestedAt);
    }
    if (message.expiresAt !== BigInt(0)) {
      writer.uint32(64).int64(message.expiresAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReputationAttestation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReputationAttestation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.localAddress = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.remoteAddress = reader.string();
          break;
        case 4:
          message.remoteTrustLevel = reader.uint32();
          break;
        case 5:
          message.localTrustCredit = reader.uint32();
          break;
        case 6:
          message.remoteReputations.push(TagReputation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.attestedAt = reader.int64();
          break;
        case 8:
          message.expiresAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReputationAttestation>): ReputationAttestation {
    const message = createBaseReputationAttestation();
    message.localAddress = object.localAddress ?? "";
    message.peerId = object.peerId ?? "";
    message.remoteAddress = object.remoteAddress ?? "";
    message.remoteTrustLevel = object.remoteTrustLevel ?? 0;
    message.localTrustCredit = object.localTrustCredit ?? 0;
    message.remoteReputations = object.remoteReputations?.map(e => TagReputation.fromPartial(e)) || [];
    message.attestedAt = object.attestedAt !== undefined && object.attestedAt !== null ? BigInt(object.attestedAt.toString()) : BigInt(0);
    message.expiresAt = object.expiresAt !== undefined && object.expiresAt !== null ? BigInt(object.expiresAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ReputationAttestationAmino): ReputationAttestation {
    const message = createBaseReputationAttestation();
    if (object.local_address !== undefined && object.local_address !== null) {
      message.localAddress = object.local_address;
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.remote_address !== undefined && object.remote_address !== null) {
      message.remoteAddress = object.remote_address;
    }
    if (object.remote_trust_level !== undefined && object.remote_trust_level !== null) {
      message.remoteTrustLevel = object.remote_trust_level;
    }
    if (object.local_trust_credit !== undefined && object.local_trust_credit !== null) {
      message.localTrustCredit = object.local_trust_credit;
    }
    message.remoteReputations = object.remote_reputations?.map(e => TagReputation.fromAmino(e)) || [];
    if (object.attested_at !== undefined && object.attested_at !== null) {
      message.attestedAt = BigInt(object.attested_at);
    }
    if (object.expires_at !== undefined && object.expires_at !== null) {
      message.expiresAt = BigInt(object.expires_at);
    }
    return message;
  },
  toAmino(message: ReputationAttestation): ReputationAttestationAmino {
    const obj: any = {};
    obj.local_address = message.localAddress === "" ? undefined : message.localAddress;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.remote_address = message.remoteAddress === "" ? undefined : message.remoteAddress;
    obj.remote_trust_level = message.remoteTrustLevel === 0 ? undefined : message.remoteTrustLevel;
    obj.local_trust_credit = message.localTrustCredit === 0 ? undefined : message.localTrustCredit;
    if (message.remoteReputations) {
      obj.remote_reputations = message.remoteReputations.map(e => e ? TagReputation.toAmino(e) : undefined);
    } else {
      obj.remote_reputations = message.remoteReputations;
    }
    obj.attested_at = message.attestedAt !== BigInt(0) ? message.attestedAt?.toString() : undefined;
    obj.expires_at = message.expiresAt !== BigInt(0) ? message.expiresAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ReputationAttestationAminoMsg): ReputationAttestation {
    return ReputationAttestation.fromAmino(object.value);
  },
  fromProtoMsg(message: ReputationAttestationProtoMsg): ReputationAttestation {
    return ReputationAttestation.decode(message.value);
  },
  toProto(message: ReputationAttestation): Uint8Array {
    return ReputationAttestation.encode(message).finish();
  },
  toProtoMsg(message: ReputationAttestation): ReputationAttestationProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.ReputationAttestation",
      value: ReputationAttestation.encode(message).finish()
    };
  }
};
function createBaseTagReputation(): TagReputation {
  return {
    tag: "",
    score: ""
  };
}
/**
 * TagReputation stores a per-tag reputation score.
 * @name TagReputation
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.TagReputation
 */
export const TagReputation = {
  typeUrl: "/sparkdream.federation.v1.TagReputation",
  encode(message: TagReputation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    if (message.score !== "") {
      writer.uint32(18).string(message.score);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TagReputation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagReputation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        case 2:
          message.score = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TagReputation>): TagReputation {
    const message = createBaseTagReputation();
    message.tag = object.tag ?? "";
    message.score = object.score ?? "";
    return message;
  },
  fromAmino(object: TagReputationAmino): TagReputation {
    const message = createBaseTagReputation();
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    }
    return message;
  },
  toAmino(message: TagReputation): TagReputationAmino {
    const obj: any = {};
    obj.tag = message.tag === "" ? undefined : message.tag;
    obj.score = message.score === "" ? undefined : message.score;
    return obj;
  },
  fromAminoMsg(object: TagReputationAminoMsg): TagReputation {
    return TagReputation.fromAmino(object.value);
  },
  fromProtoMsg(message: TagReputationProtoMsg): TagReputation {
    return TagReputation.decode(message.value);
  },
  toProto(message: TagReputation): Uint8Array {
    return TagReputation.encode(message).finish();
  },
  toProtoMsg(message: TagReputation): TagReputationProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.TagReputation",
      value: TagReputation.encode(message).finish()
    };
  }
};
function createBaseOutboundAttestation(): OutboundAttestation {
  return {
    id: BigInt(0),
    peerId: "",
    contentType: "",
    localContentId: "",
    creator: "",
    submittedBy: "",
    publishedAt: BigInt(0)
  };
}
/**
 * OutboundAttestation records content published to a federation peer.
 * @name OutboundAttestation
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.OutboundAttestation
 */
export const OutboundAttestation = {
  typeUrl: "/sparkdream.federation.v1.OutboundAttestation",
  encode(message: OutboundAttestation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    if (message.contentType !== "") {
      writer.uint32(26).string(message.contentType);
    }
    if (message.localContentId !== "") {
      writer.uint32(34).string(message.localContentId);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.submittedBy !== "") {
      writer.uint32(50).string(message.submittedBy);
    }
    if (message.publishedAt !== BigInt(0)) {
      writer.uint32(56).int64(message.publishedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OutboundAttestation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutboundAttestation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        case 3:
          message.contentType = reader.string();
          break;
        case 4:
          message.localContentId = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        case 6:
          message.submittedBy = reader.string();
          break;
        case 7:
          message.publishedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OutboundAttestation>): OutboundAttestation {
    const message = createBaseOutboundAttestation();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.peerId = object.peerId ?? "";
    message.contentType = object.contentType ?? "";
    message.localContentId = object.localContentId ?? "";
    message.creator = object.creator ?? "";
    message.submittedBy = object.submittedBy ?? "";
    message.publishedAt = object.publishedAt !== undefined && object.publishedAt !== null ? BigInt(object.publishedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OutboundAttestationAmino): OutboundAttestation {
    const message = createBaseOutboundAttestation();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.peer_id !== undefined && object.peer_id !== null) {
      message.peerId = object.peer_id;
    }
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.local_content_id !== undefined && object.local_content_id !== null) {
      message.localContentId = object.local_content_id;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.submitted_by !== undefined && object.submitted_by !== null) {
      message.submittedBy = object.submitted_by;
    }
    if (object.published_at !== undefined && object.published_at !== null) {
      message.publishedAt = BigInt(object.published_at);
    }
    return message;
  },
  toAmino(message: OutboundAttestation): OutboundAttestationAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.content_type = message.contentType === "" ? undefined : message.contentType;
    obj.local_content_id = message.localContentId === "" ? undefined : message.localContentId;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.submitted_by = message.submittedBy === "" ? undefined : message.submittedBy;
    obj.published_at = message.publishedAt !== BigInt(0) ? message.publishedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OutboundAttestationAminoMsg): OutboundAttestation {
    return OutboundAttestation.fromAmino(object.value);
  },
  fromProtoMsg(message: OutboundAttestationProtoMsg): OutboundAttestation {
    return OutboundAttestation.decode(message.value);
  },
  toProto(message: OutboundAttestation): Uint8Array {
    return OutboundAttestation.encode(message).finish();
  },
  toProtoMsg(message: OutboundAttestation): OutboundAttestationProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.OutboundAttestation",
      value: OutboundAttestation.encode(message).finish()
    };
  }
};
function createBasePeerRemovalState(): PeerRemovalState {
  return {
    removedAt: BigInt(0),
    lastPrunedContentId: BigInt(0),
    contentDone: false,
    linksDone: false,
    attestationsDone: false,
    outboundDone: false,
    bridgesDone: false,
    policyDone: false
  };
}
/**
 * PeerRemovalState tracks cleanup progress for a removed peer.
 * @name PeerRemovalState
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.PeerRemovalState
 */
export const PeerRemovalState = {
  typeUrl: "/sparkdream.federation.v1.PeerRemovalState",
  encode(message: PeerRemovalState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.removedAt !== BigInt(0)) {
      writer.uint32(8).int64(message.removedAt);
    }
    if (message.lastPrunedContentId !== BigInt(0)) {
      writer.uint32(16).uint64(message.lastPrunedContentId);
    }
    if (message.contentDone === true) {
      writer.uint32(24).bool(message.contentDone);
    }
    if (message.linksDone === true) {
      writer.uint32(32).bool(message.linksDone);
    }
    if (message.attestationsDone === true) {
      writer.uint32(40).bool(message.attestationsDone);
    }
    if (message.outboundDone === true) {
      writer.uint32(48).bool(message.outboundDone);
    }
    if (message.bridgesDone === true) {
      writer.uint32(56).bool(message.bridgesDone);
    }
    if (message.policyDone === true) {
      writer.uint32(64).bool(message.policyDone);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeerRemovalState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerRemovalState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.removedAt = reader.int64();
          break;
        case 2:
          message.lastPrunedContentId = reader.uint64();
          break;
        case 3:
          message.contentDone = reader.bool();
          break;
        case 4:
          message.linksDone = reader.bool();
          break;
        case 5:
          message.attestationsDone = reader.bool();
          break;
        case 6:
          message.outboundDone = reader.bool();
          break;
        case 7:
          message.bridgesDone = reader.bool();
          break;
        case 8:
          message.policyDone = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PeerRemovalState>): PeerRemovalState {
    const message = createBasePeerRemovalState();
    message.removedAt = object.removedAt !== undefined && object.removedAt !== null ? BigInt(object.removedAt.toString()) : BigInt(0);
    message.lastPrunedContentId = object.lastPrunedContentId !== undefined && object.lastPrunedContentId !== null ? BigInt(object.lastPrunedContentId.toString()) : BigInt(0);
    message.contentDone = object.contentDone ?? false;
    message.linksDone = object.linksDone ?? false;
    message.attestationsDone = object.attestationsDone ?? false;
    message.outboundDone = object.outboundDone ?? false;
    message.bridgesDone = object.bridgesDone ?? false;
    message.policyDone = object.policyDone ?? false;
    return message;
  },
  fromAmino(object: PeerRemovalStateAmino): PeerRemovalState {
    const message = createBasePeerRemovalState();
    if (object.removed_at !== undefined && object.removed_at !== null) {
      message.removedAt = BigInt(object.removed_at);
    }
    if (object.last_pruned_content_id !== undefined && object.last_pruned_content_id !== null) {
      message.lastPrunedContentId = BigInt(object.last_pruned_content_id);
    }
    if (object.content_done !== undefined && object.content_done !== null) {
      message.contentDone = object.content_done;
    }
    if (object.links_done !== undefined && object.links_done !== null) {
      message.linksDone = object.links_done;
    }
    if (object.attestations_done !== undefined && object.attestations_done !== null) {
      message.attestationsDone = object.attestations_done;
    }
    if (object.outbound_done !== undefined && object.outbound_done !== null) {
      message.outboundDone = object.outbound_done;
    }
    if (object.bridges_done !== undefined && object.bridges_done !== null) {
      message.bridgesDone = object.bridges_done;
    }
    if (object.policy_done !== undefined && object.policy_done !== null) {
      message.policyDone = object.policy_done;
    }
    return message;
  },
  toAmino(message: PeerRemovalState): PeerRemovalStateAmino {
    const obj: any = {};
    obj.removed_at = message.removedAt !== BigInt(0) ? message.removedAt?.toString() : undefined;
    obj.last_pruned_content_id = message.lastPrunedContentId !== BigInt(0) ? message.lastPrunedContentId?.toString() : undefined;
    obj.content_done = message.contentDone === false ? undefined : message.contentDone;
    obj.links_done = message.linksDone === false ? undefined : message.linksDone;
    obj.attestations_done = message.attestationsDone === false ? undefined : message.attestationsDone;
    obj.outbound_done = message.outboundDone === false ? undefined : message.outboundDone;
    obj.bridges_done = message.bridgesDone === false ? undefined : message.bridgesDone;
    obj.policy_done = message.policyDone === false ? undefined : message.policyDone;
    return obj;
  },
  fromAminoMsg(object: PeerRemovalStateAminoMsg): PeerRemovalState {
    return PeerRemovalState.fromAmino(object.value);
  },
  fromProtoMsg(message: PeerRemovalStateProtoMsg): PeerRemovalState {
    return PeerRemovalState.decode(message.value);
  },
  toProto(message: PeerRemovalState): Uint8Array {
    return PeerRemovalState.encode(message).finish();
  },
  toProtoMsg(message: PeerRemovalState): PeerRemovalStateProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.PeerRemovalState",
      value: PeerRemovalState.encode(message).finish()
    };
  }
};