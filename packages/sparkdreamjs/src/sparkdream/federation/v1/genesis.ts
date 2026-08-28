//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Peer, PeerAmino, PeerPolicy, PeerPolicyAmino, BridgeBinding, BridgeBindingAmino, FederatedContent, FederatedContentAmino, IdentityLink, IdentityLinkAmino, ReputationAttestation, ReputationAttestationAmino, OutboundAttestation, OutboundAttestationAmino, VerificationRecord, VerificationRecordAmino } from "./types";
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
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.federation.v1.GenesisState";
  value: GenesisStateAmino;
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
    operatorRewardDayFundingList: []
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