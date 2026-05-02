//@ts-nocheck
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the federation module.
 * @name Params
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.Params
 */
export interface Params {
  /**
   * Bridge operator requirements
   */
  minBridgeStake: Coin;
  maxBridgesPerPeer: bigint;
  bridgeRevocationCooldown: Duration;
  bridgeUnbondingPeriod: Duration;
  /**
   * Content types
   */
  knownContentTypes: string[];
  /**
   * Content federation
   */
  maxInboundPerBlock: bigint;
  maxContentBodySize: bigint;
  maxContentUriSize: bigint;
  maxProtocolMetadataSize: bigint;
  contentTtl: Duration;
  /**
   * Reputation
   */
  attestationTtl: Duration;
  globalMaxTrustCredit: number;
  trustDiscountRate: string;
  /**
   * Identity
   */
  maxIdentityLinksPerUser: number;
  unverifiedLinkTtl: Duration;
  challengeTtl: Duration;
  /**
   * Bridge monitoring
   */
  bridgeInactivityThreshold: bigint;
  /**
   * IBC
   */
  ibcPort: string;
  ibcChannelVersion: string;
  ibcPacketTimeout: Duration;
  /**
   * Pruning
   */
  maxPrunePerBlock: bigint;
  /**
   * Outbound rate limiting
   */
  maxOutboundPerBlock: bigint;
  /**
   * Rate limiting
   */
  rateLimitWindow: Duration;
  /**
   * Verification (sentinel-style)
   */
  minVerifierTrustLevel: number;
  minVerifierBond: string;
  verifierRecoveryThreshold: string;
  verifierSlashAmount: string;
  verificationWindow: Duration;
  challengeWindow: Duration;
  challengeFee: Coin;
  challengeJuryDeadline: Duration;
  verifierDemotionCooldown: Duration;
  verifierOverturnBaseCooldown: Duration;
  upheldToResetOverturns: number;
  minEpochVerifications: number;
  minVerifierAccuracy: string;
  operatorRewardShare: string;
  verifierDreamReward: string;
  maxVerifierDreamMintPerEpoch: string;
  /**
   * Anonymous challenge resolution
   */
  arbiterQuorum: number;
  arbiterResolutionWindow: Duration;
  arbiterEscalationWindow: Duration;
  escalationFee: Coin;
  challengeCooldown: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.federation.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the federation module.
 * @name ParamsAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.Params
 */
export interface ParamsAmino {
  /**
   * Bridge operator requirements
   */
  min_bridge_stake?: CoinAmino;
  max_bridges_per_peer?: string;
  bridge_revocation_cooldown?: DurationAmino;
  bridge_unbonding_period?: DurationAmino;
  /**
   * Content types
   */
  known_content_types?: string[];
  /**
   * Content federation
   */
  max_inbound_per_block?: string;
  max_content_body_size?: string;
  max_content_uri_size?: string;
  max_protocol_metadata_size?: string;
  content_ttl?: DurationAmino;
  /**
   * Reputation
   */
  attestation_ttl?: DurationAmino;
  global_max_trust_credit?: number;
  trust_discount_rate?: string;
  /**
   * Identity
   */
  max_identity_links_per_user?: number;
  unverified_link_ttl?: DurationAmino;
  challenge_ttl?: DurationAmino;
  /**
   * Bridge monitoring
   */
  bridge_inactivity_threshold?: string;
  /**
   * IBC
   */
  ibc_port?: string;
  ibc_channel_version?: string;
  ibc_packet_timeout?: DurationAmino;
  /**
   * Pruning
   */
  max_prune_per_block?: string;
  /**
   * Outbound rate limiting
   */
  max_outbound_per_block?: string;
  /**
   * Rate limiting
   */
  rate_limit_window?: DurationAmino;
  /**
   * Verification (sentinel-style)
   */
  min_verifier_trust_level?: number;
  min_verifier_bond?: string;
  verifier_recovery_threshold?: string;
  verifier_slash_amount?: string;
  verification_window?: DurationAmino;
  challenge_window?: DurationAmino;
  challenge_fee?: CoinAmino;
  challenge_jury_deadline?: DurationAmino;
  verifier_demotion_cooldown?: DurationAmino;
  verifier_overturn_base_cooldown?: DurationAmino;
  upheld_to_reset_overturns?: number;
  min_epoch_verifications?: number;
  min_verifier_accuracy?: string;
  operator_reward_share?: string;
  verifier_dream_reward?: string;
  max_verifier_dream_mint_per_epoch?: string;
  /**
   * Anonymous challenge resolution
   */
  arbiter_quorum?: number;
  arbiter_resolution_window?: DurationAmino;
  arbiter_escalation_window?: DurationAmino;
  escalation_fee?: CoinAmino;
  challenge_cooldown?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/federation/Params";
  value: ParamsAmino;
}
/**
 * FederationOperationalParams is the subset of Params updateable by Operations Committee.
 * @name FederationOperationalParams
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.FederationOperationalParams
 */
export interface FederationOperationalParams {
  maxInboundPerBlock: bigint;
  maxOutboundPerBlock: bigint;
  maxContentBodySize: bigint;
  maxContentUriSize: bigint;
  maxProtocolMetadataSize: bigint;
  contentTtl: Duration;
  attestationTtl: Duration;
  globalMaxTrustCredit: number;
  trustDiscountRate: string;
  bridgeInactivityThreshold: bigint;
  maxPrunePerBlock: bigint;
}
export interface FederationOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.federation.v1.FederationOperationalParams";
  value: Uint8Array;
}
/**
 * FederationOperationalParams is the subset of Params updateable by Operations Committee.
 * @name FederationOperationalParamsAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.FederationOperationalParams
 */
export interface FederationOperationalParamsAmino {
  max_inbound_per_block?: string;
  max_outbound_per_block?: string;
  max_content_body_size?: string;
  max_content_uri_size?: string;
  max_protocol_metadata_size?: string;
  content_ttl?: DurationAmino;
  attestation_ttl?: DurationAmino;
  global_max_trust_credit?: number;
  trust_discount_rate?: string;
  bridge_inactivity_threshold?: string;
  max_prune_per_block?: string;
}
export interface FederationOperationalParamsAminoMsg {
  type: "/sparkdream.federation.v1.FederationOperationalParams";
  value: FederationOperationalParamsAmino;
}
function createBaseParams(): Params {
  return {
    minBridgeStake: Coin.fromPartial({}),
    maxBridgesPerPeer: BigInt(0),
    bridgeRevocationCooldown: Duration.fromPartial({}),
    bridgeUnbondingPeriod: Duration.fromPartial({}),
    knownContentTypes: [],
    maxInboundPerBlock: BigInt(0),
    maxContentBodySize: BigInt(0),
    maxContentUriSize: BigInt(0),
    maxProtocolMetadataSize: BigInt(0),
    contentTtl: Duration.fromPartial({}),
    attestationTtl: Duration.fromPartial({}),
    globalMaxTrustCredit: 0,
    trustDiscountRate: "",
    maxIdentityLinksPerUser: 0,
    unverifiedLinkTtl: Duration.fromPartial({}),
    challengeTtl: Duration.fromPartial({}),
    bridgeInactivityThreshold: BigInt(0),
    ibcPort: "",
    ibcChannelVersion: "",
    ibcPacketTimeout: Duration.fromPartial({}),
    maxPrunePerBlock: BigInt(0),
    maxOutboundPerBlock: BigInt(0),
    rateLimitWindow: Duration.fromPartial({}),
    minVerifierTrustLevel: 0,
    minVerifierBond: "",
    verifierRecoveryThreshold: "",
    verifierSlashAmount: "",
    verificationWindow: Duration.fromPartial({}),
    challengeWindow: Duration.fromPartial({}),
    challengeFee: Coin.fromPartial({}),
    challengeJuryDeadline: Duration.fromPartial({}),
    verifierDemotionCooldown: Duration.fromPartial({}),
    verifierOverturnBaseCooldown: Duration.fromPartial({}),
    upheldToResetOverturns: 0,
    minEpochVerifications: 0,
    minVerifierAccuracy: "",
    operatorRewardShare: "",
    verifierDreamReward: "",
    maxVerifierDreamMintPerEpoch: "",
    arbiterQuorum: 0,
    arbiterResolutionWindow: Duration.fromPartial({}),
    arbiterEscalationWindow: Duration.fromPartial({}),
    escalationFee: Coin.fromPartial({}),
    challengeCooldown: Duration.fromPartial({})
  };
}
/**
 * Params defines the parameters for the federation module.
 * @name Params
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.federation.v1.Params",
  aminoType: "sparkdream/x/federation/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minBridgeStake !== undefined) {
      Coin.encode(message.minBridgeStake, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxBridgesPerPeer !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxBridgesPerPeer);
    }
    if (message.bridgeRevocationCooldown !== undefined) {
      Duration.encode(message.bridgeRevocationCooldown, writer.uint32(26).fork()).ldelim();
    }
    if (message.bridgeUnbondingPeriod !== undefined) {
      Duration.encode(message.bridgeUnbondingPeriod, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.knownContentTypes) {
      writer.uint32(42).string(v!);
    }
    if (message.maxInboundPerBlock !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxInboundPerBlock);
    }
    if (message.maxContentBodySize !== BigInt(0)) {
      writer.uint32(56).uint64(message.maxContentBodySize);
    }
    if (message.maxContentUriSize !== BigInt(0)) {
      writer.uint32(64).uint64(message.maxContentUriSize);
    }
    if (message.maxProtocolMetadataSize !== BigInt(0)) {
      writer.uint32(72).uint64(message.maxProtocolMetadataSize);
    }
    if (message.contentTtl !== undefined) {
      Duration.encode(message.contentTtl, writer.uint32(82).fork()).ldelim();
    }
    if (message.attestationTtl !== undefined) {
      Duration.encode(message.attestationTtl, writer.uint32(90).fork()).ldelim();
    }
    if (message.globalMaxTrustCredit !== 0) {
      writer.uint32(96).uint32(message.globalMaxTrustCredit);
    }
    if (message.trustDiscountRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.trustDiscountRate, 18).atomics);
    }
    if (message.maxIdentityLinksPerUser !== 0) {
      writer.uint32(112).uint32(message.maxIdentityLinksPerUser);
    }
    if (message.unverifiedLinkTtl !== undefined) {
      Duration.encode(message.unverifiedLinkTtl, writer.uint32(122).fork()).ldelim();
    }
    if (message.challengeTtl !== undefined) {
      Duration.encode(message.challengeTtl, writer.uint32(130).fork()).ldelim();
    }
    if (message.bridgeInactivityThreshold !== BigInt(0)) {
      writer.uint32(136).uint64(message.bridgeInactivityThreshold);
    }
    if (message.ibcPort !== "") {
      writer.uint32(146).string(message.ibcPort);
    }
    if (message.ibcChannelVersion !== "") {
      writer.uint32(154).string(message.ibcChannelVersion);
    }
    if (message.ibcPacketTimeout !== undefined) {
      Duration.encode(message.ibcPacketTimeout, writer.uint32(162).fork()).ldelim();
    }
    if (message.maxPrunePerBlock !== BigInt(0)) {
      writer.uint32(168).uint64(message.maxPrunePerBlock);
    }
    if (message.maxOutboundPerBlock !== BigInt(0)) {
      writer.uint32(176).uint64(message.maxOutboundPerBlock);
    }
    if (message.rateLimitWindow !== undefined) {
      Duration.encode(message.rateLimitWindow, writer.uint32(186).fork()).ldelim();
    }
    if (message.minVerifierTrustLevel !== 0) {
      writer.uint32(192).uint32(message.minVerifierTrustLevel);
    }
    if (message.minVerifierBond !== "") {
      writer.uint32(202).string(message.minVerifierBond);
    }
    if (message.verifierRecoveryThreshold !== "") {
      writer.uint32(210).string(message.verifierRecoveryThreshold);
    }
    if (message.verifierSlashAmount !== "") {
      writer.uint32(218).string(message.verifierSlashAmount);
    }
    if (message.verificationWindow !== undefined) {
      Duration.encode(message.verificationWindow, writer.uint32(226).fork()).ldelim();
    }
    if (message.challengeWindow !== undefined) {
      Duration.encode(message.challengeWindow, writer.uint32(234).fork()).ldelim();
    }
    if (message.challengeFee !== undefined) {
      Coin.encode(message.challengeFee, writer.uint32(242).fork()).ldelim();
    }
    if (message.challengeJuryDeadline !== undefined) {
      Duration.encode(message.challengeJuryDeadline, writer.uint32(250).fork()).ldelim();
    }
    if (message.verifierDemotionCooldown !== undefined) {
      Duration.encode(message.verifierDemotionCooldown, writer.uint32(258).fork()).ldelim();
    }
    if (message.verifierOverturnBaseCooldown !== undefined) {
      Duration.encode(message.verifierOverturnBaseCooldown, writer.uint32(266).fork()).ldelim();
    }
    if (message.upheldToResetOverturns !== 0) {
      writer.uint32(272).uint32(message.upheldToResetOverturns);
    }
    if (message.minEpochVerifications !== 0) {
      writer.uint32(280).uint32(message.minEpochVerifications);
    }
    if (message.minVerifierAccuracy !== "") {
      writer.uint32(290).string(Decimal.fromUserInput(message.minVerifierAccuracy, 18).atomics);
    }
    if (message.operatorRewardShare !== "") {
      writer.uint32(298).string(Decimal.fromUserInput(message.operatorRewardShare, 18).atomics);
    }
    if (message.verifierDreamReward !== "") {
      writer.uint32(306).string(message.verifierDreamReward);
    }
    if (message.maxVerifierDreamMintPerEpoch !== "") {
      writer.uint32(314).string(message.maxVerifierDreamMintPerEpoch);
    }
    if (message.arbiterQuorum !== 0) {
      writer.uint32(320).uint32(message.arbiterQuorum);
    }
    if (message.arbiterResolutionWindow !== undefined) {
      Duration.encode(message.arbiterResolutionWindow, writer.uint32(330).fork()).ldelim();
    }
    if (message.arbiterEscalationWindow !== undefined) {
      Duration.encode(message.arbiterEscalationWindow, writer.uint32(338).fork()).ldelim();
    }
    if (message.escalationFee !== undefined) {
      Coin.encode(message.escalationFee, writer.uint32(346).fork()).ldelim();
    }
    if (message.challengeCooldown !== undefined) {
      Duration.encode(message.challengeCooldown, writer.uint32(354).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minBridgeStake = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxBridgesPerPeer = reader.uint64();
          break;
        case 3:
          message.bridgeRevocationCooldown = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.bridgeUnbondingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.knownContentTypes.push(reader.string());
          break;
        case 6:
          message.maxInboundPerBlock = reader.uint64();
          break;
        case 7:
          message.maxContentBodySize = reader.uint64();
          break;
        case 8:
          message.maxContentUriSize = reader.uint64();
          break;
        case 9:
          message.maxProtocolMetadataSize = reader.uint64();
          break;
        case 10:
          message.contentTtl = Duration.decode(reader, reader.uint32());
          break;
        case 11:
          message.attestationTtl = Duration.decode(reader, reader.uint32());
          break;
        case 12:
          message.globalMaxTrustCredit = reader.uint32();
          break;
        case 13:
          message.trustDiscountRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.maxIdentityLinksPerUser = reader.uint32();
          break;
        case 15:
          message.unverifiedLinkTtl = Duration.decode(reader, reader.uint32());
          break;
        case 16:
          message.challengeTtl = Duration.decode(reader, reader.uint32());
          break;
        case 17:
          message.bridgeInactivityThreshold = reader.uint64();
          break;
        case 18:
          message.ibcPort = reader.string();
          break;
        case 19:
          message.ibcChannelVersion = reader.string();
          break;
        case 20:
          message.ibcPacketTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 21:
          message.maxPrunePerBlock = reader.uint64();
          break;
        case 22:
          message.maxOutboundPerBlock = reader.uint64();
          break;
        case 23:
          message.rateLimitWindow = Duration.decode(reader, reader.uint32());
          break;
        case 24:
          message.minVerifierTrustLevel = reader.uint32();
          break;
        case 25:
          message.minVerifierBond = reader.string();
          break;
        case 26:
          message.verifierRecoveryThreshold = reader.string();
          break;
        case 27:
          message.verifierSlashAmount = reader.string();
          break;
        case 28:
          message.verificationWindow = Duration.decode(reader, reader.uint32());
          break;
        case 29:
          message.challengeWindow = Duration.decode(reader, reader.uint32());
          break;
        case 30:
          message.challengeFee = Coin.decode(reader, reader.uint32());
          break;
        case 31:
          message.challengeJuryDeadline = Duration.decode(reader, reader.uint32());
          break;
        case 32:
          message.verifierDemotionCooldown = Duration.decode(reader, reader.uint32());
          break;
        case 33:
          message.verifierOverturnBaseCooldown = Duration.decode(reader, reader.uint32());
          break;
        case 34:
          message.upheldToResetOverturns = reader.uint32();
          break;
        case 35:
          message.minEpochVerifications = reader.uint32();
          break;
        case 36:
          message.minVerifierAccuracy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 37:
          message.operatorRewardShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 38:
          message.verifierDreamReward = reader.string();
          break;
        case 39:
          message.maxVerifierDreamMintPerEpoch = reader.string();
          break;
        case 40:
          message.arbiterQuorum = reader.uint32();
          break;
        case 41:
          message.arbiterResolutionWindow = Duration.decode(reader, reader.uint32());
          break;
        case 42:
          message.arbiterEscalationWindow = Duration.decode(reader, reader.uint32());
          break;
        case 43:
          message.escalationFee = Coin.decode(reader, reader.uint32());
          break;
        case 44:
          message.challengeCooldown = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.minBridgeStake = object.minBridgeStake !== undefined && object.minBridgeStake !== null ? Coin.fromPartial(object.minBridgeStake) : undefined;
    message.maxBridgesPerPeer = object.maxBridgesPerPeer !== undefined && object.maxBridgesPerPeer !== null ? BigInt(object.maxBridgesPerPeer.toString()) : BigInt(0);
    message.bridgeRevocationCooldown = object.bridgeRevocationCooldown !== undefined && object.bridgeRevocationCooldown !== null ? Duration.fromPartial(object.bridgeRevocationCooldown) : undefined;
    message.bridgeUnbondingPeriod = object.bridgeUnbondingPeriod !== undefined && object.bridgeUnbondingPeriod !== null ? Duration.fromPartial(object.bridgeUnbondingPeriod) : undefined;
    message.knownContentTypes = object.knownContentTypes?.map(e => e) || [];
    message.maxInboundPerBlock = object.maxInboundPerBlock !== undefined && object.maxInboundPerBlock !== null ? BigInt(object.maxInboundPerBlock.toString()) : BigInt(0);
    message.maxContentBodySize = object.maxContentBodySize !== undefined && object.maxContentBodySize !== null ? BigInt(object.maxContentBodySize.toString()) : BigInt(0);
    message.maxContentUriSize = object.maxContentUriSize !== undefined && object.maxContentUriSize !== null ? BigInt(object.maxContentUriSize.toString()) : BigInt(0);
    message.maxProtocolMetadataSize = object.maxProtocolMetadataSize !== undefined && object.maxProtocolMetadataSize !== null ? BigInt(object.maxProtocolMetadataSize.toString()) : BigInt(0);
    message.contentTtl = object.contentTtl !== undefined && object.contentTtl !== null ? Duration.fromPartial(object.contentTtl) : undefined;
    message.attestationTtl = object.attestationTtl !== undefined && object.attestationTtl !== null ? Duration.fromPartial(object.attestationTtl) : undefined;
    message.globalMaxTrustCredit = object.globalMaxTrustCredit ?? 0;
    message.trustDiscountRate = object.trustDiscountRate ?? "";
    message.maxIdentityLinksPerUser = object.maxIdentityLinksPerUser ?? 0;
    message.unverifiedLinkTtl = object.unverifiedLinkTtl !== undefined && object.unverifiedLinkTtl !== null ? Duration.fromPartial(object.unverifiedLinkTtl) : undefined;
    message.challengeTtl = object.challengeTtl !== undefined && object.challengeTtl !== null ? Duration.fromPartial(object.challengeTtl) : undefined;
    message.bridgeInactivityThreshold = object.bridgeInactivityThreshold !== undefined && object.bridgeInactivityThreshold !== null ? BigInt(object.bridgeInactivityThreshold.toString()) : BigInt(0);
    message.ibcPort = object.ibcPort ?? "";
    message.ibcChannelVersion = object.ibcChannelVersion ?? "";
    message.ibcPacketTimeout = object.ibcPacketTimeout !== undefined && object.ibcPacketTimeout !== null ? Duration.fromPartial(object.ibcPacketTimeout) : undefined;
    message.maxPrunePerBlock = object.maxPrunePerBlock !== undefined && object.maxPrunePerBlock !== null ? BigInt(object.maxPrunePerBlock.toString()) : BigInt(0);
    message.maxOutboundPerBlock = object.maxOutboundPerBlock !== undefined && object.maxOutboundPerBlock !== null ? BigInt(object.maxOutboundPerBlock.toString()) : BigInt(0);
    message.rateLimitWindow = object.rateLimitWindow !== undefined && object.rateLimitWindow !== null ? Duration.fromPartial(object.rateLimitWindow) : undefined;
    message.minVerifierTrustLevel = object.minVerifierTrustLevel ?? 0;
    message.minVerifierBond = object.minVerifierBond ?? "";
    message.verifierRecoveryThreshold = object.verifierRecoveryThreshold ?? "";
    message.verifierSlashAmount = object.verifierSlashAmount ?? "";
    message.verificationWindow = object.verificationWindow !== undefined && object.verificationWindow !== null ? Duration.fromPartial(object.verificationWindow) : undefined;
    message.challengeWindow = object.challengeWindow !== undefined && object.challengeWindow !== null ? Duration.fromPartial(object.challengeWindow) : undefined;
    message.challengeFee = object.challengeFee !== undefined && object.challengeFee !== null ? Coin.fromPartial(object.challengeFee) : undefined;
    message.challengeJuryDeadline = object.challengeJuryDeadline !== undefined && object.challengeJuryDeadline !== null ? Duration.fromPartial(object.challengeJuryDeadline) : undefined;
    message.verifierDemotionCooldown = object.verifierDemotionCooldown !== undefined && object.verifierDemotionCooldown !== null ? Duration.fromPartial(object.verifierDemotionCooldown) : undefined;
    message.verifierOverturnBaseCooldown = object.verifierOverturnBaseCooldown !== undefined && object.verifierOverturnBaseCooldown !== null ? Duration.fromPartial(object.verifierOverturnBaseCooldown) : undefined;
    message.upheldToResetOverturns = object.upheldToResetOverturns ?? 0;
    message.minEpochVerifications = object.minEpochVerifications ?? 0;
    message.minVerifierAccuracy = object.minVerifierAccuracy ?? "";
    message.operatorRewardShare = object.operatorRewardShare ?? "";
    message.verifierDreamReward = object.verifierDreamReward ?? "";
    message.maxVerifierDreamMintPerEpoch = object.maxVerifierDreamMintPerEpoch ?? "";
    message.arbiterQuorum = object.arbiterQuorum ?? 0;
    message.arbiterResolutionWindow = object.arbiterResolutionWindow !== undefined && object.arbiterResolutionWindow !== null ? Duration.fromPartial(object.arbiterResolutionWindow) : undefined;
    message.arbiterEscalationWindow = object.arbiterEscalationWindow !== undefined && object.arbiterEscalationWindow !== null ? Duration.fromPartial(object.arbiterEscalationWindow) : undefined;
    message.escalationFee = object.escalationFee !== undefined && object.escalationFee !== null ? Coin.fromPartial(object.escalationFee) : undefined;
    message.challengeCooldown = object.challengeCooldown !== undefined && object.challengeCooldown !== null ? Duration.fromPartial(object.challengeCooldown) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_bridge_stake !== undefined && object.min_bridge_stake !== null) {
      message.minBridgeStake = Coin.fromAmino(object.min_bridge_stake);
    }
    if (object.max_bridges_per_peer !== undefined && object.max_bridges_per_peer !== null) {
      message.maxBridgesPerPeer = BigInt(object.max_bridges_per_peer);
    }
    if (object.bridge_revocation_cooldown !== undefined && object.bridge_revocation_cooldown !== null) {
      message.bridgeRevocationCooldown = Duration.fromAmino(object.bridge_revocation_cooldown);
    }
    if (object.bridge_unbonding_period !== undefined && object.bridge_unbonding_period !== null) {
      message.bridgeUnbondingPeriod = Duration.fromAmino(object.bridge_unbonding_period);
    }
    message.knownContentTypes = object.known_content_types?.map(e => e) || [];
    if (object.max_inbound_per_block !== undefined && object.max_inbound_per_block !== null) {
      message.maxInboundPerBlock = BigInt(object.max_inbound_per_block);
    }
    if (object.max_content_body_size !== undefined && object.max_content_body_size !== null) {
      message.maxContentBodySize = BigInt(object.max_content_body_size);
    }
    if (object.max_content_uri_size !== undefined && object.max_content_uri_size !== null) {
      message.maxContentUriSize = BigInt(object.max_content_uri_size);
    }
    if (object.max_protocol_metadata_size !== undefined && object.max_protocol_metadata_size !== null) {
      message.maxProtocolMetadataSize = BigInt(object.max_protocol_metadata_size);
    }
    if (object.content_ttl !== undefined && object.content_ttl !== null) {
      message.contentTtl = Duration.fromAmino(object.content_ttl);
    }
    if (object.attestation_ttl !== undefined && object.attestation_ttl !== null) {
      message.attestationTtl = Duration.fromAmino(object.attestation_ttl);
    }
    if (object.global_max_trust_credit !== undefined && object.global_max_trust_credit !== null) {
      message.globalMaxTrustCredit = object.global_max_trust_credit;
    }
    if (object.trust_discount_rate !== undefined && object.trust_discount_rate !== null) {
      message.trustDiscountRate = object.trust_discount_rate;
    }
    if (object.max_identity_links_per_user !== undefined && object.max_identity_links_per_user !== null) {
      message.maxIdentityLinksPerUser = object.max_identity_links_per_user;
    }
    if (object.unverified_link_ttl !== undefined && object.unverified_link_ttl !== null) {
      message.unverifiedLinkTtl = Duration.fromAmino(object.unverified_link_ttl);
    }
    if (object.challenge_ttl !== undefined && object.challenge_ttl !== null) {
      message.challengeTtl = Duration.fromAmino(object.challenge_ttl);
    }
    if (object.bridge_inactivity_threshold !== undefined && object.bridge_inactivity_threshold !== null) {
      message.bridgeInactivityThreshold = BigInt(object.bridge_inactivity_threshold);
    }
    if (object.ibc_port !== undefined && object.ibc_port !== null) {
      message.ibcPort = object.ibc_port;
    }
    if (object.ibc_channel_version !== undefined && object.ibc_channel_version !== null) {
      message.ibcChannelVersion = object.ibc_channel_version;
    }
    if (object.ibc_packet_timeout !== undefined && object.ibc_packet_timeout !== null) {
      message.ibcPacketTimeout = Duration.fromAmino(object.ibc_packet_timeout);
    }
    if (object.max_prune_per_block !== undefined && object.max_prune_per_block !== null) {
      message.maxPrunePerBlock = BigInt(object.max_prune_per_block);
    }
    if (object.max_outbound_per_block !== undefined && object.max_outbound_per_block !== null) {
      message.maxOutboundPerBlock = BigInt(object.max_outbound_per_block);
    }
    if (object.rate_limit_window !== undefined && object.rate_limit_window !== null) {
      message.rateLimitWindow = Duration.fromAmino(object.rate_limit_window);
    }
    if (object.min_verifier_trust_level !== undefined && object.min_verifier_trust_level !== null) {
      message.minVerifierTrustLevel = object.min_verifier_trust_level;
    }
    if (object.min_verifier_bond !== undefined && object.min_verifier_bond !== null) {
      message.minVerifierBond = object.min_verifier_bond;
    }
    if (object.verifier_recovery_threshold !== undefined && object.verifier_recovery_threshold !== null) {
      message.verifierRecoveryThreshold = object.verifier_recovery_threshold;
    }
    if (object.verifier_slash_amount !== undefined && object.verifier_slash_amount !== null) {
      message.verifierSlashAmount = object.verifier_slash_amount;
    }
    if (object.verification_window !== undefined && object.verification_window !== null) {
      message.verificationWindow = Duration.fromAmino(object.verification_window);
    }
    if (object.challenge_window !== undefined && object.challenge_window !== null) {
      message.challengeWindow = Duration.fromAmino(object.challenge_window);
    }
    if (object.challenge_fee !== undefined && object.challenge_fee !== null) {
      message.challengeFee = Coin.fromAmino(object.challenge_fee);
    }
    if (object.challenge_jury_deadline !== undefined && object.challenge_jury_deadline !== null) {
      message.challengeJuryDeadline = Duration.fromAmino(object.challenge_jury_deadline);
    }
    if (object.verifier_demotion_cooldown !== undefined && object.verifier_demotion_cooldown !== null) {
      message.verifierDemotionCooldown = Duration.fromAmino(object.verifier_demotion_cooldown);
    }
    if (object.verifier_overturn_base_cooldown !== undefined && object.verifier_overturn_base_cooldown !== null) {
      message.verifierOverturnBaseCooldown = Duration.fromAmino(object.verifier_overturn_base_cooldown);
    }
    if (object.upheld_to_reset_overturns !== undefined && object.upheld_to_reset_overturns !== null) {
      message.upheldToResetOverturns = object.upheld_to_reset_overturns;
    }
    if (object.min_epoch_verifications !== undefined && object.min_epoch_verifications !== null) {
      message.minEpochVerifications = object.min_epoch_verifications;
    }
    if (object.min_verifier_accuracy !== undefined && object.min_verifier_accuracy !== null) {
      message.minVerifierAccuracy = object.min_verifier_accuracy;
    }
    if (object.operator_reward_share !== undefined && object.operator_reward_share !== null) {
      message.operatorRewardShare = object.operator_reward_share;
    }
    if (object.verifier_dream_reward !== undefined && object.verifier_dream_reward !== null) {
      message.verifierDreamReward = object.verifier_dream_reward;
    }
    if (object.max_verifier_dream_mint_per_epoch !== undefined && object.max_verifier_dream_mint_per_epoch !== null) {
      message.maxVerifierDreamMintPerEpoch = object.max_verifier_dream_mint_per_epoch;
    }
    if (object.arbiter_quorum !== undefined && object.arbiter_quorum !== null) {
      message.arbiterQuorum = object.arbiter_quorum;
    }
    if (object.arbiter_resolution_window !== undefined && object.arbiter_resolution_window !== null) {
      message.arbiterResolutionWindow = Duration.fromAmino(object.arbiter_resolution_window);
    }
    if (object.arbiter_escalation_window !== undefined && object.arbiter_escalation_window !== null) {
      message.arbiterEscalationWindow = Duration.fromAmino(object.arbiter_escalation_window);
    }
    if (object.escalation_fee !== undefined && object.escalation_fee !== null) {
      message.escalationFee = Coin.fromAmino(object.escalation_fee);
    }
    if (object.challenge_cooldown !== undefined && object.challenge_cooldown !== null) {
      message.challengeCooldown = Duration.fromAmino(object.challenge_cooldown);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_bridge_stake = message.minBridgeStake ? Coin.toAmino(message.minBridgeStake) : undefined;
    obj.max_bridges_per_peer = message.maxBridgesPerPeer !== BigInt(0) ? message.maxBridgesPerPeer?.toString() : undefined;
    obj.bridge_revocation_cooldown = message.bridgeRevocationCooldown ? Duration.toAmino(message.bridgeRevocationCooldown) : undefined;
    obj.bridge_unbonding_period = message.bridgeUnbondingPeriod ? Duration.toAmino(message.bridgeUnbondingPeriod) : undefined;
    if (message.knownContentTypes) {
      obj.known_content_types = message.knownContentTypes.map(e => e);
    } else {
      obj.known_content_types = message.knownContentTypes;
    }
    obj.max_inbound_per_block = message.maxInboundPerBlock !== BigInt(0) ? message.maxInboundPerBlock?.toString() : undefined;
    obj.max_content_body_size = message.maxContentBodySize !== BigInt(0) ? message.maxContentBodySize?.toString() : undefined;
    obj.max_content_uri_size = message.maxContentUriSize !== BigInt(0) ? message.maxContentUriSize?.toString() : undefined;
    obj.max_protocol_metadata_size = message.maxProtocolMetadataSize !== BigInt(0) ? message.maxProtocolMetadataSize?.toString() : undefined;
    obj.content_ttl = message.contentTtl ? Duration.toAmino(message.contentTtl) : undefined;
    obj.attestation_ttl = message.attestationTtl ? Duration.toAmino(message.attestationTtl) : undefined;
    obj.global_max_trust_credit = message.globalMaxTrustCredit === 0 ? undefined : message.globalMaxTrustCredit;
    obj.trust_discount_rate = message.trustDiscountRate === "" ? undefined : message.trustDiscountRate;
    obj.max_identity_links_per_user = message.maxIdentityLinksPerUser === 0 ? undefined : message.maxIdentityLinksPerUser;
    obj.unverified_link_ttl = message.unverifiedLinkTtl ? Duration.toAmino(message.unverifiedLinkTtl) : undefined;
    obj.challenge_ttl = message.challengeTtl ? Duration.toAmino(message.challengeTtl) : undefined;
    obj.bridge_inactivity_threshold = message.bridgeInactivityThreshold !== BigInt(0) ? message.bridgeInactivityThreshold?.toString() : undefined;
    obj.ibc_port = message.ibcPort === "" ? undefined : message.ibcPort;
    obj.ibc_channel_version = message.ibcChannelVersion === "" ? undefined : message.ibcChannelVersion;
    obj.ibc_packet_timeout = message.ibcPacketTimeout ? Duration.toAmino(message.ibcPacketTimeout) : undefined;
    obj.max_prune_per_block = message.maxPrunePerBlock !== BigInt(0) ? message.maxPrunePerBlock?.toString() : undefined;
    obj.max_outbound_per_block = message.maxOutboundPerBlock !== BigInt(0) ? message.maxOutboundPerBlock?.toString() : undefined;
    obj.rate_limit_window = message.rateLimitWindow ? Duration.toAmino(message.rateLimitWindow) : undefined;
    obj.min_verifier_trust_level = message.minVerifierTrustLevel === 0 ? undefined : message.minVerifierTrustLevel;
    obj.min_verifier_bond = message.minVerifierBond === "" ? undefined : message.minVerifierBond;
    obj.verifier_recovery_threshold = message.verifierRecoveryThreshold === "" ? undefined : message.verifierRecoveryThreshold;
    obj.verifier_slash_amount = message.verifierSlashAmount === "" ? undefined : message.verifierSlashAmount;
    obj.verification_window = message.verificationWindow ? Duration.toAmino(message.verificationWindow) : undefined;
    obj.challenge_window = message.challengeWindow ? Duration.toAmino(message.challengeWindow) : undefined;
    obj.challenge_fee = message.challengeFee ? Coin.toAmino(message.challengeFee) : undefined;
    obj.challenge_jury_deadline = message.challengeJuryDeadline ? Duration.toAmino(message.challengeJuryDeadline) : undefined;
    obj.verifier_demotion_cooldown = message.verifierDemotionCooldown ? Duration.toAmino(message.verifierDemotionCooldown) : undefined;
    obj.verifier_overturn_base_cooldown = message.verifierOverturnBaseCooldown ? Duration.toAmino(message.verifierOverturnBaseCooldown) : undefined;
    obj.upheld_to_reset_overturns = message.upheldToResetOverturns === 0 ? undefined : message.upheldToResetOverturns;
    obj.min_epoch_verifications = message.minEpochVerifications === 0 ? undefined : message.minEpochVerifications;
    obj.min_verifier_accuracy = message.minVerifierAccuracy === "" ? undefined : message.minVerifierAccuracy;
    obj.operator_reward_share = message.operatorRewardShare === "" ? undefined : message.operatorRewardShare;
    obj.verifier_dream_reward = message.verifierDreamReward === "" ? undefined : message.verifierDreamReward;
    obj.max_verifier_dream_mint_per_epoch = message.maxVerifierDreamMintPerEpoch === "" ? undefined : message.maxVerifierDreamMintPerEpoch;
    obj.arbiter_quorum = message.arbiterQuorum === 0 ? undefined : message.arbiterQuorum;
    obj.arbiter_resolution_window = message.arbiterResolutionWindow ? Duration.toAmino(message.arbiterResolutionWindow) : undefined;
    obj.arbiter_escalation_window = message.arbiterEscalationWindow ? Duration.toAmino(message.arbiterEscalationWindow) : undefined;
    obj.escalation_fee = message.escalationFee ? Coin.toAmino(message.escalationFee) : undefined;
    obj.challenge_cooldown = message.challengeCooldown ? Duration.toAmino(message.challengeCooldown) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/federation/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseFederationOperationalParams(): FederationOperationalParams {
  return {
    maxInboundPerBlock: BigInt(0),
    maxOutboundPerBlock: BigInt(0),
    maxContentBodySize: BigInt(0),
    maxContentUriSize: BigInt(0),
    maxProtocolMetadataSize: BigInt(0),
    contentTtl: Duration.fromPartial({}),
    attestationTtl: Duration.fromPartial({}),
    globalMaxTrustCredit: 0,
    trustDiscountRate: "",
    bridgeInactivityThreshold: BigInt(0),
    maxPrunePerBlock: BigInt(0)
  };
}
/**
 * FederationOperationalParams is the subset of Params updateable by Operations Committee.
 * @name FederationOperationalParams
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.FederationOperationalParams
 */
export const FederationOperationalParams = {
  typeUrl: "/sparkdream.federation.v1.FederationOperationalParams",
  encode(message: FederationOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxInboundPerBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxInboundPerBlock);
    }
    if (message.maxOutboundPerBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxOutboundPerBlock);
    }
    if (message.maxContentBodySize !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxContentBodySize);
    }
    if (message.maxContentUriSize !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxContentUriSize);
    }
    if (message.maxProtocolMetadataSize !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxProtocolMetadataSize);
    }
    if (message.contentTtl !== undefined) {
      Duration.encode(message.contentTtl, writer.uint32(50).fork()).ldelim();
    }
    if (message.attestationTtl !== undefined) {
      Duration.encode(message.attestationTtl, writer.uint32(58).fork()).ldelim();
    }
    if (message.globalMaxTrustCredit !== 0) {
      writer.uint32(64).uint32(message.globalMaxTrustCredit);
    }
    if (message.trustDiscountRate !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.trustDiscountRate, 18).atomics);
    }
    if (message.bridgeInactivityThreshold !== BigInt(0)) {
      writer.uint32(80).uint64(message.bridgeInactivityThreshold);
    }
    if (message.maxPrunePerBlock !== BigInt(0)) {
      writer.uint32(88).uint64(message.maxPrunePerBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FederationOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFederationOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxInboundPerBlock = reader.uint64();
          break;
        case 2:
          message.maxOutboundPerBlock = reader.uint64();
          break;
        case 3:
          message.maxContentBodySize = reader.uint64();
          break;
        case 4:
          message.maxContentUriSize = reader.uint64();
          break;
        case 5:
          message.maxProtocolMetadataSize = reader.uint64();
          break;
        case 6:
          message.contentTtl = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.attestationTtl = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.globalMaxTrustCredit = reader.uint32();
          break;
        case 9:
          message.trustDiscountRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.bridgeInactivityThreshold = reader.uint64();
          break;
        case 11:
          message.maxPrunePerBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FederationOperationalParams>): FederationOperationalParams {
    const message = createBaseFederationOperationalParams();
    message.maxInboundPerBlock = object.maxInboundPerBlock !== undefined && object.maxInboundPerBlock !== null ? BigInt(object.maxInboundPerBlock.toString()) : BigInt(0);
    message.maxOutboundPerBlock = object.maxOutboundPerBlock !== undefined && object.maxOutboundPerBlock !== null ? BigInt(object.maxOutboundPerBlock.toString()) : BigInt(0);
    message.maxContentBodySize = object.maxContentBodySize !== undefined && object.maxContentBodySize !== null ? BigInt(object.maxContentBodySize.toString()) : BigInt(0);
    message.maxContentUriSize = object.maxContentUriSize !== undefined && object.maxContentUriSize !== null ? BigInt(object.maxContentUriSize.toString()) : BigInt(0);
    message.maxProtocolMetadataSize = object.maxProtocolMetadataSize !== undefined && object.maxProtocolMetadataSize !== null ? BigInt(object.maxProtocolMetadataSize.toString()) : BigInt(0);
    message.contentTtl = object.contentTtl !== undefined && object.contentTtl !== null ? Duration.fromPartial(object.contentTtl) : undefined;
    message.attestationTtl = object.attestationTtl !== undefined && object.attestationTtl !== null ? Duration.fromPartial(object.attestationTtl) : undefined;
    message.globalMaxTrustCredit = object.globalMaxTrustCredit ?? 0;
    message.trustDiscountRate = object.trustDiscountRate ?? "";
    message.bridgeInactivityThreshold = object.bridgeInactivityThreshold !== undefined && object.bridgeInactivityThreshold !== null ? BigInt(object.bridgeInactivityThreshold.toString()) : BigInt(0);
    message.maxPrunePerBlock = object.maxPrunePerBlock !== undefined && object.maxPrunePerBlock !== null ? BigInt(object.maxPrunePerBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FederationOperationalParamsAmino): FederationOperationalParams {
    const message = createBaseFederationOperationalParams();
    if (object.max_inbound_per_block !== undefined && object.max_inbound_per_block !== null) {
      message.maxInboundPerBlock = BigInt(object.max_inbound_per_block);
    }
    if (object.max_outbound_per_block !== undefined && object.max_outbound_per_block !== null) {
      message.maxOutboundPerBlock = BigInt(object.max_outbound_per_block);
    }
    if (object.max_content_body_size !== undefined && object.max_content_body_size !== null) {
      message.maxContentBodySize = BigInt(object.max_content_body_size);
    }
    if (object.max_content_uri_size !== undefined && object.max_content_uri_size !== null) {
      message.maxContentUriSize = BigInt(object.max_content_uri_size);
    }
    if (object.max_protocol_metadata_size !== undefined && object.max_protocol_metadata_size !== null) {
      message.maxProtocolMetadataSize = BigInt(object.max_protocol_metadata_size);
    }
    if (object.content_ttl !== undefined && object.content_ttl !== null) {
      message.contentTtl = Duration.fromAmino(object.content_ttl);
    }
    if (object.attestation_ttl !== undefined && object.attestation_ttl !== null) {
      message.attestationTtl = Duration.fromAmino(object.attestation_ttl);
    }
    if (object.global_max_trust_credit !== undefined && object.global_max_trust_credit !== null) {
      message.globalMaxTrustCredit = object.global_max_trust_credit;
    }
    if (object.trust_discount_rate !== undefined && object.trust_discount_rate !== null) {
      message.trustDiscountRate = object.trust_discount_rate;
    }
    if (object.bridge_inactivity_threshold !== undefined && object.bridge_inactivity_threshold !== null) {
      message.bridgeInactivityThreshold = BigInt(object.bridge_inactivity_threshold);
    }
    if (object.max_prune_per_block !== undefined && object.max_prune_per_block !== null) {
      message.maxPrunePerBlock = BigInt(object.max_prune_per_block);
    }
    return message;
  },
  toAmino(message: FederationOperationalParams): FederationOperationalParamsAmino {
    const obj: any = {};
    obj.max_inbound_per_block = message.maxInboundPerBlock !== BigInt(0) ? message.maxInboundPerBlock?.toString() : undefined;
    obj.max_outbound_per_block = message.maxOutboundPerBlock !== BigInt(0) ? message.maxOutboundPerBlock?.toString() : undefined;
    obj.max_content_body_size = message.maxContentBodySize !== BigInt(0) ? message.maxContentBodySize?.toString() : undefined;
    obj.max_content_uri_size = message.maxContentUriSize !== BigInt(0) ? message.maxContentUriSize?.toString() : undefined;
    obj.max_protocol_metadata_size = message.maxProtocolMetadataSize !== BigInt(0) ? message.maxProtocolMetadataSize?.toString() : undefined;
    obj.content_ttl = message.contentTtl ? Duration.toAmino(message.contentTtl) : undefined;
    obj.attestation_ttl = message.attestationTtl ? Duration.toAmino(message.attestationTtl) : undefined;
    obj.global_max_trust_credit = message.globalMaxTrustCredit === 0 ? undefined : message.globalMaxTrustCredit;
    obj.trust_discount_rate = message.trustDiscountRate === "" ? undefined : message.trustDiscountRate;
    obj.bridge_inactivity_threshold = message.bridgeInactivityThreshold !== BigInt(0) ? message.bridgeInactivityThreshold?.toString() : undefined;
    obj.max_prune_per_block = message.maxPrunePerBlock !== BigInt(0) ? message.maxPrunePerBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FederationOperationalParamsAminoMsg): FederationOperationalParams {
    return FederationOperationalParams.fromAmino(object.value);
  },
  fromProtoMsg(message: FederationOperationalParamsProtoMsg): FederationOperationalParams {
    return FederationOperationalParams.decode(message.value);
  },
  toProto(message: FederationOperationalParams): Uint8Array {
    return FederationOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: FederationOperationalParams): FederationOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.FederationOperationalParams",
      value: FederationOperationalParams.encode(message).finish()
    };
  }
};