//@ts-nocheck
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export enum PeerType {
  PEER_TYPE_UNSPECIFIED = 0,
  PEER_TYPE_SPARK_DREAM = 1,
  PEER_TYPE_ACTIVITYPUB = 2,
  PEER_TYPE_ATPROTO = 3,
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
  maxTrustCredit: number;
  /**
   * Moderation
   */
  requireReview: boolean;
  blockedIdentities: string[];
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
  max_trust_credit?: number;
  /**
   * Moderation
   */
  require_review?: boolean;
  blocked_identities?: string[];
}
export interface PeerPolicyAminoMsg {
  type: "/sparkdream.federation.v1.PeerPolicy";
  value: PeerPolicyAmino;
}
/**
 * BridgeOperator represents an off-chain bridge operator.
 * @name BridgeOperator
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.BridgeOperator
 */
export interface BridgeOperator {
  address: string;
  peerId: string;
  protocol: string;
  endpoint: string;
  stake: Coin;
  registeredAt: bigint;
  status: BridgeStatus;
  contentSubmitted: bigint;
  contentRejected: bigint;
  slashCount: bigint;
  revokedAt: bigint;
  lastSubmissionAt: bigint;
  unbondingEndTime: bigint;
  contentVerified: bigint;
  contentUnverified: bigint;
}
export interface BridgeOperatorProtoMsg {
  typeUrl: "/sparkdream.federation.v1.BridgeOperator";
  value: Uint8Array;
}
/**
 * BridgeOperator represents an off-chain bridge operator.
 * @name BridgeOperatorAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.BridgeOperator
 */
export interface BridgeOperatorAmino {
  address?: string;
  peer_id?: string;
  protocol?: string;
  endpoint?: string;
  stake?: CoinAmino;
  registered_at?: string;
  status?: BridgeStatus;
  content_submitted?: string;
  content_rejected?: string;
  slash_count?: string;
  revoked_at?: string;
  last_submission_at?: string;
  unbonding_end_time?: string;
  content_verified?: string;
  content_unverified?: string;
}
export interface BridgeOperatorAminoMsg {
  type: "/sparkdream.federation.v1.BridgeOperator";
  value: BridgeOperatorAmino;
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
}
export interface VerificationRecordAminoMsg {
  type: "/sparkdream.federation.v1.VerificationRecord";
  value: VerificationRecordAmino;
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
}
export interface FederatedContentAminoMsg {
  type: "/sparkdream.federation.v1.FederatedContent";
  value: FederatedContentAmino;
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
    removedAt: BigInt(0)
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
    maxTrustCredit: 0,
    requireReview: false,
    blockedIdentities: []
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
      writer.uint32(88).uint64(message.outboundRateLimitPerEpoch);
    }
    if (message.allowReputationQueries === true) {
      writer.uint32(48).bool(message.allowReputationQueries);
    }
    if (message.acceptReputationAttestations === true) {
      writer.uint32(56).bool(message.acceptReputationAttestations);
    }
    if (message.maxTrustCredit !== 0) {
      writer.uint32(64).uint32(message.maxTrustCredit);
    }
    if (message.requireReview === true) {
      writer.uint32(72).bool(message.requireReview);
    }
    for (const v of message.blockedIdentities) {
      writer.uint32(82).string(v!);
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
        case 11:
          message.outboundRateLimitPerEpoch = reader.uint64();
          break;
        case 6:
          message.allowReputationQueries = reader.bool();
          break;
        case 7:
          message.acceptReputationAttestations = reader.bool();
          break;
        case 8:
          message.maxTrustCredit = reader.uint32();
          break;
        case 9:
          message.requireReview = reader.bool();
          break;
        case 10:
          message.blockedIdentities.push(reader.string());
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
    message.maxTrustCredit = object.maxTrustCredit ?? 0;
    message.requireReview = object.requireReview ?? false;
    message.blockedIdentities = object.blockedIdentities?.map(e => e) || [];
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
    if (object.max_trust_credit !== undefined && object.max_trust_credit !== null) {
      message.maxTrustCredit = object.max_trust_credit;
    }
    if (object.require_review !== undefined && object.require_review !== null) {
      message.requireReview = object.require_review;
    }
    message.blockedIdentities = object.blocked_identities?.map(e => e) || [];
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
    obj.max_trust_credit = message.maxTrustCredit === 0 ? undefined : message.maxTrustCredit;
    obj.require_review = message.requireReview === false ? undefined : message.requireReview;
    if (message.blockedIdentities) {
      obj.blocked_identities = message.blockedIdentities.map(e => e);
    } else {
      obj.blocked_identities = message.blockedIdentities;
    }
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
function createBaseBridgeOperator(): BridgeOperator {
  return {
    address: "",
    peerId: "",
    protocol: "",
    endpoint: "",
    stake: Coin.fromPartial({}),
    registeredAt: BigInt(0),
    status: 0,
    contentSubmitted: BigInt(0),
    contentRejected: BigInt(0),
    slashCount: BigInt(0),
    revokedAt: BigInt(0),
    lastSubmissionAt: BigInt(0),
    unbondingEndTime: BigInt(0),
    contentVerified: BigInt(0),
    contentUnverified: BigInt(0)
  };
}
/**
 * BridgeOperator represents an off-chain bridge operator.
 * @name BridgeOperator
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.BridgeOperator
 */
export const BridgeOperator = {
  typeUrl: "/sparkdream.federation.v1.BridgeOperator",
  encode(message: BridgeOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(42).fork()).ldelim();
    }
    if (message.registeredAt !== BigInt(0)) {
      writer.uint32(48).int64(message.registeredAt);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.contentSubmitted !== BigInt(0)) {
      writer.uint32(64).uint64(message.contentSubmitted);
    }
    if (message.contentRejected !== BigInt(0)) {
      writer.uint32(72).uint64(message.contentRejected);
    }
    if (message.slashCount !== BigInt(0)) {
      writer.uint32(80).uint64(message.slashCount);
    }
    if (message.revokedAt !== BigInt(0)) {
      writer.uint32(88).int64(message.revokedAt);
    }
    if (message.lastSubmissionAt !== BigInt(0)) {
      writer.uint32(96).int64(message.lastSubmissionAt);
    }
    if (message.unbondingEndTime !== BigInt(0)) {
      writer.uint32(104).int64(message.unbondingEndTime);
    }
    if (message.contentVerified !== BigInt(0)) {
      writer.uint32(112).uint64(message.contentVerified);
    }
    if (message.contentUnverified !== BigInt(0)) {
      writer.uint32(120).uint64(message.contentUnverified);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BridgeOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeOperator();
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
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.registeredAt = reader.int64();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.contentSubmitted = reader.uint64();
          break;
        case 9:
          message.contentRejected = reader.uint64();
          break;
        case 10:
          message.slashCount = reader.uint64();
          break;
        case 11:
          message.revokedAt = reader.int64();
          break;
        case 12:
          message.lastSubmissionAt = reader.int64();
          break;
        case 13:
          message.unbondingEndTime = reader.int64();
          break;
        case 14:
          message.contentVerified = reader.uint64();
          break;
        case 15:
          message.contentUnverified = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BridgeOperator>): BridgeOperator {
    const message = createBaseBridgeOperator();
    message.address = object.address ?? "";
    message.peerId = object.peerId ?? "";
    message.protocol = object.protocol ?? "";
    message.endpoint = object.endpoint ?? "";
    message.stake = object.stake !== undefined && object.stake !== null ? Coin.fromPartial(object.stake) : undefined;
    message.registeredAt = object.registeredAt !== undefined && object.registeredAt !== null ? BigInt(object.registeredAt.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.contentSubmitted = object.contentSubmitted !== undefined && object.contentSubmitted !== null ? BigInt(object.contentSubmitted.toString()) : BigInt(0);
    message.contentRejected = object.contentRejected !== undefined && object.contentRejected !== null ? BigInt(object.contentRejected.toString()) : BigInt(0);
    message.slashCount = object.slashCount !== undefined && object.slashCount !== null ? BigInt(object.slashCount.toString()) : BigInt(0);
    message.revokedAt = object.revokedAt !== undefined && object.revokedAt !== null ? BigInt(object.revokedAt.toString()) : BigInt(0);
    message.lastSubmissionAt = object.lastSubmissionAt !== undefined && object.lastSubmissionAt !== null ? BigInt(object.lastSubmissionAt.toString()) : BigInt(0);
    message.unbondingEndTime = object.unbondingEndTime !== undefined && object.unbondingEndTime !== null ? BigInt(object.unbondingEndTime.toString()) : BigInt(0);
    message.contentVerified = object.contentVerified !== undefined && object.contentVerified !== null ? BigInt(object.contentVerified.toString()) : BigInt(0);
    message.contentUnverified = object.contentUnverified !== undefined && object.contentUnverified !== null ? BigInt(object.contentUnverified.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BridgeOperatorAmino): BridgeOperator {
    const message = createBaseBridgeOperator();
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
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = Coin.fromAmino(object.stake);
    }
    if (object.registered_at !== undefined && object.registered_at !== null) {
      message.registeredAt = BigInt(object.registered_at);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.content_submitted !== undefined && object.content_submitted !== null) {
      message.contentSubmitted = BigInt(object.content_submitted);
    }
    if (object.content_rejected !== undefined && object.content_rejected !== null) {
      message.contentRejected = BigInt(object.content_rejected);
    }
    if (object.slash_count !== undefined && object.slash_count !== null) {
      message.slashCount = BigInt(object.slash_count);
    }
    if (object.revoked_at !== undefined && object.revoked_at !== null) {
      message.revokedAt = BigInt(object.revoked_at);
    }
    if (object.last_submission_at !== undefined && object.last_submission_at !== null) {
      message.lastSubmissionAt = BigInt(object.last_submission_at);
    }
    if (object.unbonding_end_time !== undefined && object.unbonding_end_time !== null) {
      message.unbondingEndTime = BigInt(object.unbonding_end_time);
    }
    if (object.content_verified !== undefined && object.content_verified !== null) {
      message.contentVerified = BigInt(object.content_verified);
    }
    if (object.content_unverified !== undefined && object.content_unverified !== null) {
      message.contentUnverified = BigInt(object.content_unverified);
    }
    return message;
  },
  toAmino(message: BridgeOperator): BridgeOperatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.peer_id = message.peerId === "" ? undefined : message.peerId;
    obj.protocol = message.protocol === "" ? undefined : message.protocol;
    obj.endpoint = message.endpoint === "" ? undefined : message.endpoint;
    obj.stake = message.stake ? Coin.toAmino(message.stake) : undefined;
    obj.registered_at = message.registeredAt !== BigInt(0) ? message.registeredAt?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.content_submitted = message.contentSubmitted !== BigInt(0) ? message.contentSubmitted?.toString() : undefined;
    obj.content_rejected = message.contentRejected !== BigInt(0) ? message.contentRejected?.toString() : undefined;
    obj.slash_count = message.slashCount !== BigInt(0) ? message.slashCount?.toString() : undefined;
    obj.revoked_at = message.revokedAt !== BigInt(0) ? message.revokedAt?.toString() : undefined;
    obj.last_submission_at = message.lastSubmissionAt !== BigInt(0) ? message.lastSubmissionAt?.toString() : undefined;
    obj.unbonding_end_time = message.unbondingEndTime !== BigInt(0) ? message.unbondingEndTime?.toString() : undefined;
    obj.content_verified = message.contentVerified !== BigInt(0) ? message.contentVerified?.toString() : undefined;
    obj.content_unverified = message.contentUnverified !== BigInt(0) ? message.contentUnverified?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BridgeOperatorAminoMsg): BridgeOperator {
    return BridgeOperator.fromAmino(object.value);
  },
  fromProtoMsg(message: BridgeOperatorProtoMsg): BridgeOperator {
    return BridgeOperator.decode(message.value);
  },
  toProto(message: BridgeOperator): Uint8Array {
    return BridgeOperator.encode(message).finish();
  },
  toProtoMsg(message: BridgeOperator): BridgeOperatorProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.BridgeOperator",
      value: BridgeOperator.encode(message).finish()
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
    challenger: ""
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
    contentHash: new Uint8Array()
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
function createBaseIdentityLink(): IdentityLink {
  return {
    localAddress: "",
    peerId: "",
    remoteIdentity: "",
    status: 0,
    linkedAt: BigInt(0),
    verifiedAt: BigInt(0),
    challenge: new Uint8Array()
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