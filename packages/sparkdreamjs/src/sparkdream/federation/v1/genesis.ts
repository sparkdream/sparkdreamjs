//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Peer, PeerAmino, PeerPolicy, PeerPolicyAmino, BridgeBinding, BridgeBindingAmino, FederatedContent, FederatedContentAmino, IdentityLink, IdentityLinkAmino, ReputationAttestation, ReputationAttestationAmino, OutboundAttestation, OutboundAttestationAmino, VerificationRecord, VerificationRecordAmino, EscalatedChallenge, EscalatedChallengeAmino, ArbiterHashSubmission, ArbiterHashSubmissionAmino } from "./types";
import { VerifierActivity, VerifierActivityAmino } from "./verifier_activity";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the federation module's genesis state.
 * @name GenesisState
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  portId: string;
  peers: Peer[];
  peerPolicies: PeerPolicy[];
  bridgeBindings: BridgeBinding[];
  federatedContent: FederatedContent[];
  identityLinks: IdentityLink[];
  reputationAttestations: ReputationAttestation[];
  outboundAttestations: OutboundAttestation[];
  verifierActivities: VerifierActivity[];
  verificationRecords: VerificationRecord[];
  nextContentId: bigint;
  nextOutboundAttestationId: bigint;
  /**
   * Per-UTC-day community-pool draw ledger for the bridge-operator reward
   * pool. Dropping it on import hands the chain a fresh daily allowance, so
   * operator_reward_daily_funding would bound a day only until the next
   * export. Mirrors x/rep's role_reward_day_funding_list.
   */
  operatorRewardDayFundingList: OperatorRewardDayFunding[];
  /**
   * In-flight verification-lifecycle queues. These are NOT derivable from
   * the records above: ArbiterResolutionQueue and ArbiterEscalationQueue
   * hold deadlines that live nowhere else, and dropping them on an
   * export/import upgrade strands every in-flight record — DISPUTED or
   * CHALLENGED forever, with the verifier's committed bond unreleasable
   * because the walk that would release it has no queue entry to walk.
   * (VerificationWindow and ChallengeWindow are recomputable in principle,
   * but exporting them keeps one rule for the whole lifecycle instead of
   * two.)
   */
  verificationWindowQueue: ContentDeadline[];
  challengeWindowQueue: ContentDeadline[];
  arbiterResolutionQueue: ContentDeadline[];
  arbiterEscalationQueue: ContentDeadline[];
  escalatedChallenges: EscalatedChallenge[];
  escalatedChallengeDeadlineQueue: ContentDeadline[];
  /**
   * Partial arbiter quorum progress. Dropping these silently resets a
   * dispute's vote tally to zero mid-window.
   */
  arbiterSubmissions: ArbiterSubmissionEntry[];
  arbiterHashCounts: ArbiterHashCount[];
  nextArbiterAnonSubmissionId: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.federation.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the federation module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  port_id?: string;
  peers?: PeerAmino[];
  peer_policies?: PeerPolicyAmino[];
  bridge_bindings?: BridgeBindingAmino[];
  federated_content?: FederatedContentAmino[];
  identity_links?: IdentityLinkAmino[];
  reputation_attestations?: ReputationAttestationAmino[];
  outbound_attestations?: OutboundAttestationAmino[];
  verifier_activities?: VerifierActivityAmino[];
  verification_records?: VerificationRecordAmino[];
  next_content_id?: string;
  next_outbound_attestation_id?: string;
  /**
   * Per-UTC-day community-pool draw ledger for the bridge-operator reward
   * pool. Dropping it on import hands the chain a fresh daily allowance, so
   * operator_reward_daily_funding would bound a day only until the next
   * export. Mirrors x/rep's role_reward_day_funding_list.
   */
  operator_reward_day_funding_list?: OperatorRewardDayFundingAmino[];
  /**
   * In-flight verification-lifecycle queues. These are NOT derivable from
   * the records above: ArbiterResolutionQueue and ArbiterEscalationQueue
   * hold deadlines that live nowhere else, and dropping them on an
   * export/import upgrade strands every in-flight record — DISPUTED or
   * CHALLENGED forever, with the verifier's committed bond unreleasable
   * because the walk that would release it has no queue entry to walk.
   * (VerificationWindow and ChallengeWindow are recomputable in principle,
   * but exporting them keeps one rule for the whole lifecycle instead of
   * two.)
   */
  verification_window_queue?: ContentDeadlineAmino[];
  challenge_window_queue?: ContentDeadlineAmino[];
  arbiter_resolution_queue?: ContentDeadlineAmino[];
  arbiter_escalation_queue?: ContentDeadlineAmino[];
  escalated_challenges?: EscalatedChallengeAmino[];
  escalated_challenge_deadline_queue?: ContentDeadlineAmino[];
  /**
   * Partial arbiter quorum progress. Dropping these silently resets a
   * dispute's vote tally to zero mid-window.
   */
  arbiter_submissions?: ArbiterSubmissionEntryAmino[];
  arbiter_hash_counts?: ArbiterHashCountAmino[];
  next_arbiter_anon_submission_id?: string;
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.federation.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * ContentDeadline is one (deadline, content_id) entry of a federation
 * EndBlocker time queue. All four verification-lifecycle queues share this
 * shape, so they share this message.
 * @name ContentDeadline
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ContentDeadline
 */
export interface ContentDeadline {
  deadline: bigint;
  contentId: bigint;
}
export interface ContentDeadlineProtoMsg {
  typeUrl: "/sparkdream.federation.v1.ContentDeadline";
  value: Uint8Array;
}
/**
 * ContentDeadline is one (deadline, content_id) entry of a federation
 * EndBlocker time queue. All four verification-lifecycle queues share this
 * shape, so they share this message.
 * @name ContentDeadlineAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ContentDeadline
 */
export interface ContentDeadlineAmino {
  deadline?: string;
  content_id?: string;
}
export interface ContentDeadlineAminoMsg {
  type: "/sparkdream.federation.v1.ContentDeadline";
  value: ContentDeadlineAmino;
}
/**
 * ArbiterSubmissionEntry is one ArbiterSubmissions map entry. The submitter
 * key is part of the STATE key rather than of ArbiterHashSubmission —
 * identified arbiters key by bech32 address, anonymous ones by "anon:<seq>"
 * (where the Operator field holds the shield module address instead) — so it
 * must be exported alongside the value or the "no double vote per operator"
 * rule cannot be reconstructed.
 * @name ArbiterSubmissionEntry
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ArbiterSubmissionEntry
 */
export interface ArbiterSubmissionEntry {
  submitterKey: string;
  submission: ArbiterHashSubmission;
}
export interface ArbiterSubmissionEntryProtoMsg {
  typeUrl: "/sparkdream.federation.v1.ArbiterSubmissionEntry";
  value: Uint8Array;
}
/**
 * ArbiterSubmissionEntry is one ArbiterSubmissions map entry. The submitter
 * key is part of the STATE key rather than of ArbiterHashSubmission —
 * identified arbiters key by bech32 address, anonymous ones by "anon:<seq>"
 * (where the Operator field holds the shield module address instead) — so it
 * must be exported alongside the value or the "no double vote per operator"
 * rule cannot be reconstructed.
 * @name ArbiterSubmissionEntryAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ArbiterSubmissionEntry
 */
export interface ArbiterSubmissionEntryAmino {
  submitter_key?: string;
  submission?: ArbiterHashSubmissionAmino;
}
export interface ArbiterSubmissionEntryAminoMsg {
  type: "/sparkdream.federation.v1.ArbiterSubmissionEntry";
  value: ArbiterSubmissionEntryAmino;
}
/**
 * ArbiterHashCount is one (content_id, content_hash) -> votes tally from the
 * arbiter quorum counter.
 * @name ArbiterHashCount
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ArbiterHashCount
 */
export interface ArbiterHashCount {
  contentId: bigint;
  /**
   * content_hash is the lowercase hex encoding of the submitted hash, which
   * is how ArbiterHashCounts keys it in state.
   */
  contentHash: string;
  count: number;
}
export interface ArbiterHashCountProtoMsg {
  typeUrl: "/sparkdream.federation.v1.ArbiterHashCount";
  value: Uint8Array;
}
/**
 * ArbiterHashCount is one (content_id, content_hash) -> votes tally from the
 * arbiter quorum counter.
 * @name ArbiterHashCountAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ArbiterHashCount
 */
export interface ArbiterHashCountAmino {
  content_id?: string;
  /**
   * content_hash is the lowercase hex encoding of the submitted hash, which
   * is how ArbiterHashCounts keys it in state.
   */
  content_hash?: string;
  count?: number;
}
export interface ArbiterHashCountAminoMsg {
  type: "/sparkdream.federation.v1.ArbiterHashCount";
  value: ArbiterHashCountAmino;
}
/**
 * OperatorRewardDayFunding is one UTC day's community-pool draw for the
 * bridge-operator reward pool, ledgered so the daily cap bounds a day rather
 * than a block.
 * @name OperatorRewardDayFunding
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.OperatorRewardDayFunding
 */
export interface OperatorRewardDayFunding {
  day: bigint;
  amountFunded: string;
}
export interface OperatorRewardDayFundingProtoMsg {
  typeUrl: "/sparkdream.federation.v1.OperatorRewardDayFunding";
  value: Uint8Array;
}
/**
 * OperatorRewardDayFunding is one UTC day's community-pool draw for the
 * bridge-operator reward pool, ledgered so the daily cap bounds a day rather
 * than a block.
 * @name OperatorRewardDayFundingAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.OperatorRewardDayFunding
 */
export interface OperatorRewardDayFundingAmino {
  day?: string;
  amount_funded?: string;
}
export interface OperatorRewardDayFundingAminoMsg {
  type: "/sparkdream.federation.v1.OperatorRewardDayFunding";
  value: OperatorRewardDayFundingAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    portId: "",
    peers: [],
    peerPolicies: [],
    bridgeBindings: [],
    federatedContent: [],
    identityLinks: [],
    reputationAttestations: [],
    outboundAttestations: [],
    verifierActivities: [],
    verificationRecords: [],
    nextContentId: BigInt(0),
    nextOutboundAttestationId: BigInt(0),
    operatorRewardDayFundingList: [],
    verificationWindowQueue: [],
    challengeWindowQueue: [],
    arbiterResolutionQueue: [],
    arbiterEscalationQueue: [],
    escalatedChallenges: [],
    escalatedChallengeDeadlineQueue: [],
    arbiterSubmissions: [],
    arbiterHashCounts: [],
    nextArbiterAnonSubmissionId: BigInt(0)
  };
}
/**
 * GenesisState defines the federation module's genesis state.
 * @name GenesisState
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.federation.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.peers) {
      Peer.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.peerPolicies) {
      PeerPolicy.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.bridgeBindings) {
      BridgeBinding.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.federatedContent) {
      FederatedContent.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.identityLinks) {
      IdentityLink.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reputationAttestations) {
      ReputationAttestation.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.outboundAttestations) {
      OutboundAttestation.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.verifierActivities) {
      VerifierActivity.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.verificationRecords) {
      VerificationRecord.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.nextContentId !== BigInt(0)) {
      writer.uint32(96).uint64(message.nextContentId);
    }
    if (message.nextOutboundAttestationId !== BigInt(0)) {
      writer.uint32(104).uint64(message.nextOutboundAttestationId);
    }
    for (const v of message.operatorRewardDayFundingList) {
      OperatorRewardDayFunding.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.verificationWindowQueue) {
      ContentDeadline.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.challengeWindowQueue) {
      ContentDeadline.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.arbiterResolutionQueue) {
      ContentDeadline.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.arbiterEscalationQueue) {
      ContentDeadline.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.escalatedChallenges) {
      EscalatedChallenge.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.escalatedChallengeDeadlineQueue) {
      ContentDeadline.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.arbiterSubmissions) {
      ArbiterSubmissionEntry.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.arbiterHashCounts) {
      ArbiterHashCount.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    if (message.nextArbiterAnonSubmissionId !== BigInt(0)) {
      writer.uint32(184).uint64(message.nextArbiterAnonSubmissionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.peers.push(Peer.decode(reader, reader.uint32()));
          break;
        case 4:
          message.peerPolicies.push(PeerPolicy.decode(reader, reader.uint32()));
          break;
        case 5:
          message.bridgeBindings.push(BridgeBinding.decode(reader, reader.uint32()));
          break;
        case 6:
          message.federatedContent.push(FederatedContent.decode(reader, reader.uint32()));
          break;
        case 7:
          message.identityLinks.push(IdentityLink.decode(reader, reader.uint32()));
          break;
        case 8:
          message.reputationAttestations.push(ReputationAttestation.decode(reader, reader.uint32()));
          break;
        case 9:
          message.outboundAttestations.push(OutboundAttestation.decode(reader, reader.uint32()));
          break;
        case 10:
          message.verifierActivities.push(VerifierActivity.decode(reader, reader.uint32()));
          break;
        case 11:
          message.verificationRecords.push(VerificationRecord.decode(reader, reader.uint32()));
          break;
        case 12:
          message.nextContentId = reader.uint64();
          break;
        case 13:
          message.nextOutboundAttestationId = reader.uint64();
          break;
        case 14:
          message.operatorRewardDayFundingList.push(OperatorRewardDayFunding.decode(reader, reader.uint32()));
          break;
        case 15:
          message.verificationWindowQueue.push(ContentDeadline.decode(reader, reader.uint32()));
          break;
        case 16:
          message.challengeWindowQueue.push(ContentDeadline.decode(reader, reader.uint32()));
          break;
        case 17:
          message.arbiterResolutionQueue.push(ContentDeadline.decode(reader, reader.uint32()));
          break;
        case 18:
          message.arbiterEscalationQueue.push(ContentDeadline.decode(reader, reader.uint32()));
          break;
        case 19:
          message.escalatedChallenges.push(EscalatedChallenge.decode(reader, reader.uint32()));
          break;
        case 20:
          message.escalatedChallengeDeadlineQueue.push(ContentDeadline.decode(reader, reader.uint32()));
          break;
        case 21:
          message.arbiterSubmissions.push(ArbiterSubmissionEntry.decode(reader, reader.uint32()));
          break;
        case 22:
          message.arbiterHashCounts.push(ArbiterHashCount.decode(reader, reader.uint32()));
          break;
        case 23:
          message.nextArbiterAnonSubmissionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.portId = object.portId ?? "";
    message.peers = object.peers?.map(e => Peer.fromPartial(e)) || [];
    message.peerPolicies = object.peerPolicies?.map(e => PeerPolicy.fromPartial(e)) || [];
    message.bridgeBindings = object.bridgeBindings?.map(e => BridgeBinding.fromPartial(e)) || [];
    message.federatedContent = object.federatedContent?.map(e => FederatedContent.fromPartial(e)) || [];
    message.identityLinks = object.identityLinks?.map(e => IdentityLink.fromPartial(e)) || [];
    message.reputationAttestations = object.reputationAttestations?.map(e => ReputationAttestation.fromPartial(e)) || [];
    message.outboundAttestations = object.outboundAttestations?.map(e => OutboundAttestation.fromPartial(e)) || [];
    message.verifierActivities = object.verifierActivities?.map(e => VerifierActivity.fromPartial(e)) || [];
    message.verificationRecords = object.verificationRecords?.map(e => VerificationRecord.fromPartial(e)) || [];
    message.nextContentId = object.nextContentId !== undefined && object.nextContentId !== null ? BigInt(object.nextContentId.toString()) : BigInt(0);
    message.nextOutboundAttestationId = object.nextOutboundAttestationId !== undefined && object.nextOutboundAttestationId !== null ? BigInt(object.nextOutboundAttestationId.toString()) : BigInt(0);
    message.operatorRewardDayFundingList = object.operatorRewardDayFundingList?.map(e => OperatorRewardDayFunding.fromPartial(e)) || [];
    message.verificationWindowQueue = object.verificationWindowQueue?.map(e => ContentDeadline.fromPartial(e)) || [];
    message.challengeWindowQueue = object.challengeWindowQueue?.map(e => ContentDeadline.fromPartial(e)) || [];
    message.arbiterResolutionQueue = object.arbiterResolutionQueue?.map(e => ContentDeadline.fromPartial(e)) || [];
    message.arbiterEscalationQueue = object.arbiterEscalationQueue?.map(e => ContentDeadline.fromPartial(e)) || [];
    message.escalatedChallenges = object.escalatedChallenges?.map(e => EscalatedChallenge.fromPartial(e)) || [];
    message.escalatedChallengeDeadlineQueue = object.escalatedChallengeDeadlineQueue?.map(e => ContentDeadline.fromPartial(e)) || [];
    message.arbiterSubmissions = object.arbiterSubmissions?.map(e => ArbiterSubmissionEntry.fromPartial(e)) || [];
    message.arbiterHashCounts = object.arbiterHashCounts?.map(e => ArbiterHashCount.fromPartial(e)) || [];
    message.nextArbiterAnonSubmissionId = object.nextArbiterAnonSubmissionId !== undefined && object.nextArbiterAnonSubmissionId !== null ? BigInt(object.nextArbiterAnonSubmissionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    message.peers = object.peers?.map(e => Peer.fromAmino(e)) || [];
    message.peerPolicies = object.peer_policies?.map(e => PeerPolicy.fromAmino(e)) || [];
    message.bridgeBindings = object.bridge_bindings?.map(e => BridgeBinding.fromAmino(e)) || [];
    message.federatedContent = object.federated_content?.map(e => FederatedContent.fromAmino(e)) || [];
    message.identityLinks = object.identity_links?.map(e => IdentityLink.fromAmino(e)) || [];
    message.reputationAttestations = object.reputation_attestations?.map(e => ReputationAttestation.fromAmino(e)) || [];
    message.outboundAttestations = object.outbound_attestations?.map(e => OutboundAttestation.fromAmino(e)) || [];
    message.verifierActivities = object.verifier_activities?.map(e => VerifierActivity.fromAmino(e)) || [];
    message.verificationRecords = object.verification_records?.map(e => VerificationRecord.fromAmino(e)) || [];
    if (object.next_content_id !== undefined && object.next_content_id !== null) {
      message.nextContentId = BigInt(object.next_content_id);
    }
    if (object.next_outbound_attestation_id !== undefined && object.next_outbound_attestation_id !== null) {
      message.nextOutboundAttestationId = BigInt(object.next_outbound_attestation_id);
    }
    message.operatorRewardDayFundingList = object.operator_reward_day_funding_list?.map(e => OperatorRewardDayFunding.fromAmino(e)) || [];
    message.verificationWindowQueue = object.verification_window_queue?.map(e => ContentDeadline.fromAmino(e)) || [];
    message.challengeWindowQueue = object.challenge_window_queue?.map(e => ContentDeadline.fromAmino(e)) || [];
    message.arbiterResolutionQueue = object.arbiter_resolution_queue?.map(e => ContentDeadline.fromAmino(e)) || [];
    message.arbiterEscalationQueue = object.arbiter_escalation_queue?.map(e => ContentDeadline.fromAmino(e)) || [];
    message.escalatedChallenges = object.escalated_challenges?.map(e => EscalatedChallenge.fromAmino(e)) || [];
    message.escalatedChallengeDeadlineQueue = object.escalated_challenge_deadline_queue?.map(e => ContentDeadline.fromAmino(e)) || [];
    message.arbiterSubmissions = object.arbiter_submissions?.map(e => ArbiterSubmissionEntry.fromAmino(e)) || [];
    message.arbiterHashCounts = object.arbiter_hash_counts?.map(e => ArbiterHashCount.fromAmino(e)) || [];
    if (object.next_arbiter_anon_submission_id !== undefined && object.next_arbiter_anon_submission_id !== null) {
      message.nextArbiterAnonSubmissionId = BigInt(object.next_arbiter_anon_submission_id);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    obj.port_id = message.portId === "" ? undefined : message.portId;
    if (message.peers) {
      obj.peers = message.peers.map(e => e ? Peer.toAmino(e) : undefined);
    } else {
      obj.peers = message.peers;
    }
    if (message.peerPolicies) {
      obj.peer_policies = message.peerPolicies.map(e => e ? PeerPolicy.toAmino(e) : undefined);
    } else {
      obj.peer_policies = message.peerPolicies;
    }
    if (message.bridgeBindings) {
      obj.bridge_bindings = message.bridgeBindings.map(e => e ? BridgeBinding.toAmino(e) : undefined);
    } else {
      obj.bridge_bindings = message.bridgeBindings;
    }
    if (message.federatedContent) {
      obj.federated_content = message.federatedContent.map(e => e ? FederatedContent.toAmino(e) : undefined);
    } else {
      obj.federated_content = message.federatedContent;
    }
    if (message.identityLinks) {
      obj.identity_links = message.identityLinks.map(e => e ? IdentityLink.toAmino(e) : undefined);
    } else {
      obj.identity_links = message.identityLinks;
    }
    if (message.reputationAttestations) {
      obj.reputation_attestations = message.reputationAttestations.map(e => e ? ReputationAttestation.toAmino(e) : undefined);
    } else {
      obj.reputation_attestations = message.reputationAttestations;
    }
    if (message.outboundAttestations) {
      obj.outbound_attestations = message.outboundAttestations.map(e => e ? OutboundAttestation.toAmino(e) : undefined);
    } else {
      obj.outbound_attestations = message.outboundAttestations;
    }
    if (message.verifierActivities) {
      obj.verifier_activities = message.verifierActivities.map(e => e ? VerifierActivity.toAmino(e) : undefined);
    } else {
      obj.verifier_activities = message.verifierActivities;
    }
    if (message.verificationRecords) {
      obj.verification_records = message.verificationRecords.map(e => e ? VerificationRecord.toAmino(e) : undefined);
    } else {
      obj.verification_records = message.verificationRecords;
    }
    obj.next_content_id = message.nextContentId !== BigInt(0) ? message.nextContentId?.toString() : undefined;
    obj.next_outbound_attestation_id = message.nextOutboundAttestationId !== BigInt(0) ? message.nextOutboundAttestationId?.toString() : undefined;
    if (message.operatorRewardDayFundingList) {
      obj.operator_reward_day_funding_list = message.operatorRewardDayFundingList.map(e => e ? OperatorRewardDayFunding.toAmino(e) : undefined);
    } else {
      obj.operator_reward_day_funding_list = message.operatorRewardDayFundingList;
    }
    if (message.verificationWindowQueue) {
      obj.verification_window_queue = message.verificationWindowQueue.map(e => e ? ContentDeadline.toAmino(e) : undefined);
    } else {
      obj.verification_window_queue = message.verificationWindowQueue;
    }
    if (message.challengeWindowQueue) {
      obj.challenge_window_queue = message.challengeWindowQueue.map(e => e ? ContentDeadline.toAmino(e) : undefined);
    } else {
      obj.challenge_window_queue = message.challengeWindowQueue;
    }
    if (message.arbiterResolutionQueue) {
      obj.arbiter_resolution_queue = message.arbiterResolutionQueue.map(e => e ? ContentDeadline.toAmino(e) : undefined);
    } else {
      obj.arbiter_resolution_queue = message.arbiterResolutionQueue;
    }
    if (message.arbiterEscalationQueue) {
      obj.arbiter_escalation_queue = message.arbiterEscalationQueue.map(e => e ? ContentDeadline.toAmino(e) : undefined);
    } else {
      obj.arbiter_escalation_queue = message.arbiterEscalationQueue;
    }
    if (message.escalatedChallenges) {
      obj.escalated_challenges = message.escalatedChallenges.map(e => e ? EscalatedChallenge.toAmino(e) : undefined);
    } else {
      obj.escalated_challenges = message.escalatedChallenges;
    }
    if (message.escalatedChallengeDeadlineQueue) {
      obj.escalated_challenge_deadline_queue = message.escalatedChallengeDeadlineQueue.map(e => e ? ContentDeadline.toAmino(e) : undefined);
    } else {
      obj.escalated_challenge_deadline_queue = message.escalatedChallengeDeadlineQueue;
    }
    if (message.arbiterSubmissions) {
      obj.arbiter_submissions = message.arbiterSubmissions.map(e => e ? ArbiterSubmissionEntry.toAmino(e) : undefined);
    } else {
      obj.arbiter_submissions = message.arbiterSubmissions;
    }
    if (message.arbiterHashCounts) {
      obj.arbiter_hash_counts = message.arbiterHashCounts.map(e => e ? ArbiterHashCount.toAmino(e) : undefined);
    } else {
      obj.arbiter_hash_counts = message.arbiterHashCounts;
    }
    obj.next_arbiter_anon_submission_id = message.nextArbiterAnonSubmissionId !== BigInt(0) ? message.nextArbiterAnonSubmissionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseContentDeadline(): ContentDeadline {
  return {
    deadline: BigInt(0),
    contentId: BigInt(0)
  };
}
/**
 * ContentDeadline is one (deadline, content_id) entry of a federation
 * EndBlocker time queue. All four verification-lifecycle queues share this
 * shape, so they share this message.
 * @name ContentDeadline
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ContentDeadline
 */
export const ContentDeadline = {
  typeUrl: "/sparkdream.federation.v1.ContentDeadline",
  encode(message: ContentDeadline, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deadline !== BigInt(0)) {
      writer.uint32(8).int64(message.deadline);
    }
    if (message.contentId !== BigInt(0)) {
      writer.uint32(16).uint64(message.contentId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContentDeadline {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentDeadline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deadline = reader.int64();
          break;
        case 2:
          message.contentId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContentDeadline>): ContentDeadline {
    const message = createBaseContentDeadline();
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ContentDeadlineAmino): ContentDeadline {
    const message = createBaseContentDeadline();
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    return message;
  },
  toAmino(message: ContentDeadline): ContentDeadlineAmino {
    const obj: any = {};
    obj.deadline = message.deadline !== BigInt(0) ? message.deadline?.toString() : undefined;
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContentDeadlineAminoMsg): ContentDeadline {
    return ContentDeadline.fromAmino(object.value);
  },
  fromProtoMsg(message: ContentDeadlineProtoMsg): ContentDeadline {
    return ContentDeadline.decode(message.value);
  },
  toProto(message: ContentDeadline): Uint8Array {
    return ContentDeadline.encode(message).finish();
  },
  toProtoMsg(message: ContentDeadline): ContentDeadlineProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.ContentDeadline",
      value: ContentDeadline.encode(message).finish()
    };
  }
};
function createBaseArbiterSubmissionEntry(): ArbiterSubmissionEntry {
  return {
    submitterKey: "",
    submission: ArbiterHashSubmission.fromPartial({})
  };
}
/**
 * ArbiterSubmissionEntry is one ArbiterSubmissions map entry. The submitter
 * key is part of the STATE key rather than of ArbiterHashSubmission —
 * identified arbiters key by bech32 address, anonymous ones by "anon:<seq>"
 * (where the Operator field holds the shield module address instead) — so it
 * must be exported alongside the value or the "no double vote per operator"
 * rule cannot be reconstructed.
 * @name ArbiterSubmissionEntry
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ArbiterSubmissionEntry
 */
export const ArbiterSubmissionEntry = {
  typeUrl: "/sparkdream.federation.v1.ArbiterSubmissionEntry",
  encode(message: ArbiterSubmissionEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.submitterKey !== "") {
      writer.uint32(10).string(message.submitterKey);
    }
    if (message.submission !== undefined) {
      ArbiterHashSubmission.encode(message.submission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ArbiterSubmissionEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArbiterSubmissionEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitterKey = reader.string();
          break;
        case 2:
          message.submission = ArbiterHashSubmission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ArbiterSubmissionEntry>): ArbiterSubmissionEntry {
    const message = createBaseArbiterSubmissionEntry();
    message.submitterKey = object.submitterKey ?? "";
    message.submission = object.submission !== undefined && object.submission !== null ? ArbiterHashSubmission.fromPartial(object.submission) : undefined;
    return message;
  },
  fromAmino(object: ArbiterSubmissionEntryAmino): ArbiterSubmissionEntry {
    const message = createBaseArbiterSubmissionEntry();
    if (object.submitter_key !== undefined && object.submitter_key !== null) {
      message.submitterKey = object.submitter_key;
    }
    if (object.submission !== undefined && object.submission !== null) {
      message.submission = ArbiterHashSubmission.fromAmino(object.submission);
    }
    return message;
  },
  toAmino(message: ArbiterSubmissionEntry): ArbiterSubmissionEntryAmino {
    const obj: any = {};
    obj.submitter_key = message.submitterKey === "" ? undefined : message.submitterKey;
    obj.submission = message.submission ? ArbiterHashSubmission.toAmino(message.submission) : undefined;
    return obj;
  },
  fromAminoMsg(object: ArbiterSubmissionEntryAminoMsg): ArbiterSubmissionEntry {
    return ArbiterSubmissionEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ArbiterSubmissionEntryProtoMsg): ArbiterSubmissionEntry {
    return ArbiterSubmissionEntry.decode(message.value);
  },
  toProto(message: ArbiterSubmissionEntry): Uint8Array {
    return ArbiterSubmissionEntry.encode(message).finish();
  },
  toProtoMsg(message: ArbiterSubmissionEntry): ArbiterSubmissionEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.ArbiterSubmissionEntry",
      value: ArbiterSubmissionEntry.encode(message).finish()
    };
  }
};
function createBaseArbiterHashCount(): ArbiterHashCount {
  return {
    contentId: BigInt(0),
    contentHash: "",
    count: 0
  };
}
/**
 * ArbiterHashCount is one (content_id, content_hash) -> votes tally from the
 * arbiter quorum counter.
 * @name ArbiterHashCount
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ArbiterHashCount
 */
export const ArbiterHashCount = {
  typeUrl: "/sparkdream.federation.v1.ArbiterHashCount",
  encode(message: ArbiterHashCount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contentId);
    }
    if (message.contentHash !== "") {
      writer.uint32(18).string(message.contentHash);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ArbiterHashCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArbiterHashCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentId = reader.uint64();
          break;
        case 2:
          message.contentHash = reader.string();
          break;
        case 3:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ArbiterHashCount>): ArbiterHashCount {
    const message = createBaseArbiterHashCount();
    message.contentId = object.contentId !== undefined && object.contentId !== null ? BigInt(object.contentId.toString()) : BigInt(0);
    message.contentHash = object.contentHash ?? "";
    message.count = object.count ?? 0;
    return message;
  },
  fromAmino(object: ArbiterHashCountAmino): ArbiterHashCount {
    const message = createBaseArbiterHashCount();
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = BigInt(object.content_id);
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = object.content_hash;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    return message;
  },
  toAmino(message: ArbiterHashCount): ArbiterHashCountAmino {
    const obj: any = {};
    obj.content_id = message.contentId !== BigInt(0) ? message.contentId?.toString() : undefined;
    obj.content_hash = message.contentHash === "" ? undefined : message.contentHash;
    obj.count = message.count === 0 ? undefined : message.count;
    return obj;
  },
  fromAminoMsg(object: ArbiterHashCountAminoMsg): ArbiterHashCount {
    return ArbiterHashCount.fromAmino(object.value);
  },
  fromProtoMsg(message: ArbiterHashCountProtoMsg): ArbiterHashCount {
    return ArbiterHashCount.decode(message.value);
  },
  toProto(message: ArbiterHashCount): Uint8Array {
    return ArbiterHashCount.encode(message).finish();
  },
  toProtoMsg(message: ArbiterHashCount): ArbiterHashCountProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.ArbiterHashCount",
      value: ArbiterHashCount.encode(message).finish()
    };
  }
};
function createBaseOperatorRewardDayFunding(): OperatorRewardDayFunding {
  return {
    day: BigInt(0),
    amountFunded: ""
  };
}
/**
 * OperatorRewardDayFunding is one UTC day's community-pool draw for the
 * bridge-operator reward pool, ledgered so the daily cap bounds a day rather
 * than a block.
 * @name OperatorRewardDayFunding
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.OperatorRewardDayFunding
 */
export const OperatorRewardDayFunding = {
  typeUrl: "/sparkdream.federation.v1.OperatorRewardDayFunding",
  encode(message: OperatorRewardDayFunding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.day !== BigInt(0)) {
      writer.uint32(8).uint64(message.day);
    }
    if (message.amountFunded !== "") {
      writer.uint32(18).string(message.amountFunded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperatorRewardDayFunding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorRewardDayFunding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.day = reader.uint64();
          break;
        case 2:
          message.amountFunded = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OperatorRewardDayFunding>): OperatorRewardDayFunding {
    const message = createBaseOperatorRewardDayFunding();
    message.day = object.day !== undefined && object.day !== null ? BigInt(object.day.toString()) : BigInt(0);
    message.amountFunded = object.amountFunded ?? "";
    return message;
  },
  fromAmino(object: OperatorRewardDayFundingAmino): OperatorRewardDayFunding {
    const message = createBaseOperatorRewardDayFunding();
    if (object.day !== undefined && object.day !== null) {
      message.day = BigInt(object.day);
    }
    if (object.amount_funded !== undefined && object.amount_funded !== null) {
      message.amountFunded = object.amount_funded;
    }
    return message;
  },
  toAmino(message: OperatorRewardDayFunding): OperatorRewardDayFundingAmino {
    const obj: any = {};
    obj.day = message.day !== BigInt(0) ? message.day?.toString() : undefined;
    obj.amount_funded = message.amountFunded === "" ? undefined : message.amountFunded;
    return obj;
  },
  fromAminoMsg(object: OperatorRewardDayFundingAminoMsg): OperatorRewardDayFunding {
    return OperatorRewardDayFunding.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorRewardDayFundingProtoMsg): OperatorRewardDayFunding {
    return OperatorRewardDayFunding.decode(message.value);
  },
  toProto(message: OperatorRewardDayFunding): Uint8Array {
    return OperatorRewardDayFunding.encode(message).finish();
  },
  toProtoMsg(message: OperatorRewardDayFunding): OperatorRewardDayFundingProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.OperatorRewardDayFunding",
      value: OperatorRewardDayFunding.encode(message).finish()
    };
  }
};