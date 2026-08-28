//@ts-nocheck
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
   * Bridge operator requirements. Bond minimums, revocation lifecycle,
   * and unbonding period live on x/service ServiceTypeConfig per
   * service_type (federation-bridge-activitypub / federation-bridge-atproto).
   * 
   * max_bridges_per_peer is intentionally KEPT as a kill-switch (Decision 6):
   * default 1000 leaves it effectively no-op against any realistic legit
   * use. The real defenses against runaway registration are the
   * service.MinBond economic gate, content-hash deduplication, and per-
   * peer rate limits. Gov may dial it down without a chain upgrade if
   * some unknown-unknown materializes. It is NOT a normal policy lever.
   */
  maxBridgesPerPeer: bigint;
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
  /**
   * challenge_fee_amount is the per-challenge fee escrowed by a verifier
   * challenger, in bond-denom micro-units. Denom is resolved at runtime
   * from x/identity (see x-identity-spec.md). Escalating multiplier in
   * msg_server_challenge_verification.go applies to this amount.
   */
  challengeFeeAmount: string;
  challengeJuryDeadline: Duration;
  verifierDemotionCooldown: Duration;
  verifierOverturnBaseCooldown: Duration;
  /**
   * upheld_to_reset_overturns is how many CONSECUTIVE upheld verdicts clear a
   * verifier's overturn streak. Federation owns the value; x/rep enforces it,
   * via BondedRoleConfig.upheld_to_reset_overturns written through by
   * SyncVerifierBondedRoleConfig -- same path as the two cooldowns above.
   */
  upheldToResetOverturns: number;
  /**
   * operator_reward_inflation_share is the fraction of the community pool's
   * INFLATION income federation may draw per UTC day:
   * 
   *   daily_allowance = annual_provisions * community_tax * share / 365
   * 
   * A share rather than a fixed amount, for the reason x/rep documents: a
   * fixed draw takes its largest share of the pool exactly when the pool is
   * poorest. The base is the inflation rate, never the pool balance -- the
   * balance holds the genesis allocation earmarked for the councils. Zero
   * disables automatic funding, leaving the pool to direct sends.
   */
  operatorRewardInflationShare: string;
  /**
   * Upper cap on the pool; excess is burned at the ratio below, so an
   * over-funded pool cannot sit as a standing prize.
   */
  maxOperatorRewardPool: string;
  operatorRewardPoolOverflowBurnRatio: string;
  operatorRewardEpochBlocks: bigint;
  /**
   * Minimum independently-verified submissions in an epoch to earn anything.
   */
  minEpochVerifiedSubmissions: number;
  /**
   * Ceiling on epoch_unverified / epoch_submitted. An operator flooding the
   * queue with content no verifier will confirm is spending verifier
   * attention rather than producing value.
   */
  maxUnverifiedRate: string;
  /**
   * Anonymous challenge resolution
   */
  arbiterQuorum: number;
  arbiterResolutionWindow: Duration;
  arbiterEscalationWindow: Duration;
  /**
   * escalation_fee_amount is the fee escrowed by a party escalating a
   * challenge to a system report, in bond-denom micro-units. Denom is
   * resolved at runtime from x/identity (see x-identity-spec.md).
   */
  escalationFeeAmount: string;
  challengeCooldown: Duration;
  /**
   * verifier_unbond_cooldown is the period a verifier's bond stays locked
   * and slashable after MsgUnbondRole. During the cooldown the BondedRole's
   * status is UNBONDING and federation action handlers refuse authority.
   * Propagated to x/rep BondedRoleConfig via SyncVerifierBondedRoleConfig.
   * Mirrors bridge_unbonding_period — verifier and bridge operator both
   * face a 14-day slashable window after exit-of-role intent.
   */
  verifierUnbondCooldown: Duration;
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
   * Bridge operator requirements. Bond minimums, revocation lifecycle,
   * and unbonding period live on x/service ServiceTypeConfig per
   * service_type (federation-bridge-activitypub / federation-bridge-atproto).
   * 
   * max_bridges_per_peer is intentionally KEPT as a kill-switch (Decision 6):
   * default 1000 leaves it effectively no-op against any realistic legit
   * use. The real defenses against runaway registration are the
   * service.MinBond economic gate, content-hash deduplication, and per-
   * peer rate limits. Gov may dial it down without a chain upgrade if
   * some unknown-unknown materializes. It is NOT a normal policy lever.
   */
  max_bridges_per_peer?: string;
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
  /**
   * challenge_fee_amount is the per-challenge fee escrowed by a verifier
   * challenger, in bond-denom micro-units. Denom is resolved at runtime
   * from x/identity (see x-identity-spec.md). Escalating multiplier in
   * msg_server_challenge_verification.go applies to this amount.
   */
  challenge_fee_amount?: string;
  challenge_jury_deadline?: DurationAmino;
  verifier_demotion_cooldown?: DurationAmino;
  verifier_overturn_base_cooldown?: DurationAmino;
  /**
   * upheld_to_reset_overturns is how many CONSECUTIVE upheld verdicts clear a
   * verifier's overturn streak. Federation owns the value; x/rep enforces it,
   * via BondedRoleConfig.upheld_to_reset_overturns written through by
   * SyncVerifierBondedRoleConfig -- same path as the two cooldowns above.
   */
  upheld_to_reset_overturns?: number;
  /**
   * operator_reward_inflation_share is the fraction of the community pool's
   * INFLATION income federation may draw per UTC day:
   * 
   *   daily_allowance = annual_provisions * community_tax * share / 365
   * 
   * A share rather than a fixed amount, for the reason x/rep documents: a
   * fixed draw takes its largest share of the pool exactly when the pool is
   * poorest. The base is the inflation rate, never the pool balance -- the
   * balance holds the genesis allocation earmarked for the councils. Zero
   * disables automatic funding, leaving the pool to direct sends.
   */
  operator_reward_inflation_share?: string;
  /**
   * Upper cap on the pool; excess is burned at the ratio below, so an
   * over-funded pool cannot sit as a standing prize.
   */
  max_operator_reward_pool?: string;
  operator_reward_pool_overflow_burn_ratio?: string;
  operator_reward_epoch_blocks?: string;
  /**
   * Minimum independently-verified submissions in an epoch to earn anything.
   */
  min_epoch_verified_submissions?: number;
  /**
   * Ceiling on epoch_unverified / epoch_submitted. An operator flooding the
   * queue with content no verifier will confirm is spending verifier
   * attention rather than producing value.
   */
  max_unverified_rate?: string;
  /**
   * Anonymous challenge resolution
   */
  arbiter_quorum?: number;
  arbiter_resolution_window?: DurationAmino;
  arbiter_escalation_window?: DurationAmino;
  /**
   * escalation_fee_amount is the fee escrowed by a party escalating a
   * challenge to a system report, in bond-denom micro-units. Denom is
   * resolved at runtime from x/identity (see x-identity-spec.md).
   */
  escalation_fee_amount?: string;
  challenge_cooldown?: DurationAmino;
  /**
   * verifier_unbond_cooldown is the period a verifier's bond stays locked
   * and slashable after MsgUnbondRole. During the cooldown the BondedRole's
   * status is UNBONDING and federation action handlers refuse authority.
   * Propagated to x/rep BondedRoleConfig via SyncVerifierBondedRoleConfig.
   * Mirrors bridge_unbonding_period — verifier and bridge operator both
   * face a 14-day slashable window after exit-of-role intent.
   */
  verifier_unbond_cooldown?: DurationAmino;
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
    maxBridgesPerPeer: BigInt(0),
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
    challengeFeeAmount: "",
    challengeJuryDeadline: Duration.fromPartial({}),
    verifierDemotionCooldown: Duration.fromPartial({}),
    verifierOverturnBaseCooldown: Duration.fromPartial({}),
    upheldToResetOverturns: 0,
    operatorRewardInflationShare: "",
    maxOperatorRewardPool: "",
    operatorRewardPoolOverflowBurnRatio: "",
    operatorRewardEpochBlocks: BigInt(0),
    minEpochVerifiedSubmissions: 0,
    maxUnverifiedRate: "",
    arbiterQuorum: 0,
    arbiterResolutionWindow: Duration.fromPartial({}),
    arbiterEscalationWindow: Duration.fromPartial({}),
    escalationFeeAmount: "",
    challengeCooldown: Duration.fromPartial({}),
    verifierUnbondCooldown: Duration.fromPartial({})
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
    if (message.maxBridgesPerPeer !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxBridgesPerPeer);
    }
    for (const v of message.knownContentTypes) {
      writer.uint32(18).string(v!);
    }
    if (message.maxInboundPerBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxInboundPerBlock);
    }
    if (message.maxContentBodySize !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxContentBodySize);
    }
    if (message.maxContentUriSize !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxContentUriSize);
    }
    if (message.maxProtocolMetadataSize !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxProtocolMetadataSize);
    }
    if (message.contentTtl !== undefined) {
      Duration.encode(message.contentTtl, writer.uint32(58).fork()).ldelim();
    }
    if (message.attestationTtl !== undefined) {
      Duration.encode(message.attestationTtl, writer.uint32(66).fork()).ldelim();
    }
    if (message.globalMaxTrustCredit !== 0) {
      writer.uint32(72).uint32(message.globalMaxTrustCredit);
    }
    if (message.trustDiscountRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.trustDiscountRate, 18).atomics);
    }
    if (message.maxIdentityLinksPerUser !== 0) {
      writer.uint32(88).uint32(message.maxIdentityLinksPerUser);
    }
    if (message.unverifiedLinkTtl !== undefined) {
      Duration.encode(message.unverifiedLinkTtl, writer.uint32(98).fork()).ldelim();
    }
    if (message.challengeTtl !== undefined) {
      Duration.encode(message.challengeTtl, writer.uint32(106).fork()).ldelim();
    }
    if (message.bridgeInactivityThreshold !== BigInt(0)) {
      writer.uint32(112).uint64(message.bridgeInactivityThreshold);
    }
    if (message.ibcPort !== "") {
      writer.uint32(122).string(message.ibcPort);
    }
    if (message.ibcChannelVersion !== "") {
      writer.uint32(130).string(message.ibcChannelVersion);
    }
    if (message.ibcPacketTimeout !== undefined) {
      Duration.encode(message.ibcPacketTimeout, writer.uint32(138).fork()).ldelim();
    }
    if (message.maxPrunePerBlock !== BigInt(0)) {
      writer.uint32(144).uint64(message.maxPrunePerBlock);
    }
    if (message.maxOutboundPerBlock !== BigInt(0)) {
      writer.uint32(152).uint64(message.maxOutboundPerBlock);
    }
    if (message.rateLimitWindow !== undefined) {
      Duration.encode(message.rateLimitWindow, writer.uint32(162).fork()).ldelim();
    }
    if (message.minVerifierTrustLevel !== 0) {
      writer.uint32(168).uint32(message.minVerifierTrustLevel);
    }
    if (message.minVerifierBond !== "") {
      writer.uint32(178).string(message.minVerifierBond);
    }
    if (message.verifierRecoveryThreshold !== "") {
      writer.uint32(186).string(message.verifierRecoveryThreshold);
    }
    if (message.verifierSlashAmount !== "") {
      writer.uint32(194).string(message.verifierSlashAmount);
    }
    if (message.verificationWindow !== undefined) {
      Duration.encode(message.verificationWindow, writer.uint32(202).fork()).ldelim();
    }
    if (message.challengeWindow !== undefined) {
      Duration.encode(message.challengeWindow, writer.uint32(210).fork()).ldelim();
    }
    if (message.challengeFeeAmount !== "") {
      writer.uint32(218).string(message.challengeFeeAmount);
    }
    if (message.challengeJuryDeadline !== undefined) {
      Duration.encode(message.challengeJuryDeadline, writer.uint32(226).fork()).ldelim();
    }
    if (message.verifierDemotionCooldown !== undefined) {
      Duration.encode(message.verifierDemotionCooldown, writer.uint32(234).fork()).ldelim();
    }
    if (message.verifierOverturnBaseCooldown !== undefined) {
      Duration.encode(message.verifierOverturnBaseCooldown, writer.uint32(242).fork()).ldelim();
    }
    if (message.upheldToResetOverturns !== 0) {
      writer.uint32(248).uint32(message.upheldToResetOverturns);
    }
    if (message.operatorRewardInflationShare !== "") {
      writer.uint32(258).string(Decimal.fromUserInput(message.operatorRewardInflationShare, 18).atomics);
    }
    if (message.maxOperatorRewardPool !== "") {
      writer.uint32(266).string(message.maxOperatorRewardPool);
    }
    if (message.operatorRewardPoolOverflowBurnRatio !== "") {
      writer.uint32(274).string(Decimal.fromUserInput(message.operatorRewardPoolOverflowBurnRatio, 18).atomics);
    }
    if (message.operatorRewardEpochBlocks !== BigInt(0)) {
      writer.uint32(280).uint64(message.operatorRewardEpochBlocks);
    }
    if (message.minEpochVerifiedSubmissions !== 0) {
      writer.uint32(288).uint32(message.minEpochVerifiedSubmissions);
    }
    if (message.maxUnverifiedRate !== "") {
      writer.uint32(298).string(Decimal.fromUserInput(message.maxUnverifiedRate, 18).atomics);
    }
    if (message.arbiterQuorum !== 0) {
      writer.uint32(304).uint32(message.arbiterQuorum);
    }
    if (message.arbiterResolutionWindow !== undefined) {
      Duration.encode(message.arbiterResolutionWindow, writer.uint32(314).fork()).ldelim();
    }
    if (message.arbiterEscalationWindow !== undefined) {
      Duration.encode(message.arbiterEscalationWindow, writer.uint32(322).fork()).ldelim();
    }
    if (message.escalationFeeAmount !== "") {
      writer.uint32(330).string(message.escalationFeeAmount);
    }
    if (message.challengeCooldown !== undefined) {
      Duration.encode(message.challengeCooldown, writer.uint32(338).fork()).ldelim();
    }
    if (message.verifierUnbondCooldown !== undefined) {
      Duration.encode(message.verifierUnbondCooldown, writer.uint32(346).fork()).ldelim();
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
          message.maxBridgesPerPeer = reader.uint64();
          break;
        case 2:
          message.knownContentTypes.push(reader.string());
          break;
        case 3:
          message.maxInboundPerBlock = reader.uint64();
          break;
        case 4:
          message.maxContentBodySize = reader.uint64();
          break;
        case 5:
          message.maxContentUriSize = reader.uint64();
          break;
        case 6:
          message.maxProtocolMetadataSize = reader.uint64();
          break;
        case 7:
          message.contentTtl = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.attestationTtl = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.globalMaxTrustCredit = reader.uint32();
          break;
        case 10:
          message.trustDiscountRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.maxIdentityLinksPerUser = reader.uint32();
          break;
        case 12:
          message.unverifiedLinkTtl = Duration.decode(reader, reader.uint32());
          break;
        case 13:
          message.challengeTtl = Duration.decode(reader, reader.uint32());
          break;
        case 14:
          message.bridgeInactivityThreshold = reader.uint64();
          break;
        case 15:
          message.ibcPort = reader.string();
          break;
        case 16:
          message.ibcChannelVersion = reader.string();
          break;
        case 17:
          message.ibcPacketTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 18:
          message.maxPrunePerBlock = reader.uint64();
          break;
        case 19:
          message.maxOutboundPerBlock = reader.uint64();
          break;
        case 20:
          message.rateLimitWindow = Duration.decode(reader, reader.uint32());
          break;
        case 21:
          message.minVerifierTrustLevel = reader.uint32();
          break;
        case 22:
          message.minVerifierBond = reader.string();
          break;
        case 23:
          message.verifierRecoveryThreshold = reader.string();
          break;
        case 24:
          message.verifierSlashAmount = reader.string();
          break;
        case 25:
          message.verificationWindow = Duration.decode(reader, reader.uint32());
          break;
        case 26:
          message.challengeWindow = Duration.decode(reader, reader.uint32());
          break;
        case 27:
          message.challengeFeeAmount = reader.string();
          break;
        case 28:
          message.challengeJuryDeadline = Duration.decode(reader, reader.uint32());
          break;
        case 29:
          message.verifierDemotionCooldown = Duration.decode(reader, reader.uint32());
          break;
        case 30:
          message.verifierOverturnBaseCooldown = Duration.decode(reader, reader.uint32());
          break;
        case 31:
          message.upheldToResetOverturns = reader.uint32();
          break;
        case 32:
          message.operatorRewardInflationShare = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 33:
          message.maxOperatorRewardPool = reader.string();
          break;
        case 34:
          message.operatorRewardPoolOverflowBurnRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 35:
          message.operatorRewardEpochBlocks = reader.uint64();
          break;
        case 36:
          message.minEpochVerifiedSubmissions = reader.uint32();
          break;
        case 37:
          message.maxUnverifiedRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 38:
          message.arbiterQuorum = reader.uint32();
          break;
        case 39:
          message.arbiterResolutionWindow = Duration.decode(reader, reader.uint32());
          break;
        case 40:
          message.arbiterEscalationWindow = Duration.decode(reader, reader.uint32());
          break;
        case 41:
          message.escalationFeeAmount = reader.string();
          break;
        case 42:
          message.challengeCooldown = Duration.decode(reader, reader.uint32());
          break;
        case 43:
          message.verifierUnbondCooldown = Duration.decode(reader, reader.uint32());
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
    message.maxBridgesPerPeer = object.maxBridgesPerPeer !== undefined && object.maxBridgesPerPeer !== null ? BigInt(object.maxBridgesPerPeer.toString()) : BigInt(0);
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
    message.challengeFeeAmount = object.challengeFeeAmount ?? "";
    message.challengeJuryDeadline = object.challengeJuryDeadline !== undefined && object.challengeJuryDeadline !== null ? Duration.fromPartial(object.challengeJuryDeadline) : undefined;
    message.verifierDemotionCooldown = object.verifierDemotionCooldown !== undefined && object.verifierDemotionCooldown !== null ? Duration.fromPartial(object.verifierDemotionCooldown) : undefined;
    message.verifierOverturnBaseCooldown = object.verifierOverturnBaseCooldown !== undefined && object.verifierOverturnBaseCooldown !== null ? Duration.fromPartial(object.verifierOverturnBaseCooldown) : undefined;
    message.upheldToResetOverturns = object.upheldToResetOverturns ?? 0;
    message.operatorRewardInflationShare = object.operatorRewardInflationShare ?? "";
    message.maxOperatorRewardPool = object.maxOperatorRewardPool ?? "";
    message.operatorRewardPoolOverflowBurnRatio = object.operatorRewardPoolOverflowBurnRatio ?? "";
    message.operatorRewardEpochBlocks = object.operatorRewardEpochBlocks !== undefined && object.operatorRewardEpochBlocks !== null ? BigInt(object.operatorRewardEpochBlocks.toString()) : BigInt(0);
    message.minEpochVerifiedSubmissions = object.minEpochVerifiedSubmissions ?? 0;
    message.maxUnverifiedRate = object.maxUnverifiedRate ?? "";
    message.arbiterQuorum = object.arbiterQuorum ?? 0;
    message.arbiterResolutionWindow = object.arbiterResolutionWindow !== undefined && object.arbiterResolutionWindow !== null ? Duration.fromPartial(object.arbiterResolutionWindow) : undefined;
    message.arbiterEscalationWindow = object.arbiterEscalationWindow !== undefined && object.arbiterEscalationWindow !== null ? Duration.fromPartial(object.arbiterEscalationWindow) : undefined;
    message.escalationFeeAmount = object.escalationFeeAmount ?? "";
    message.challengeCooldown = object.challengeCooldown !== undefined && object.challengeCooldown !== null ? Duration.fromPartial(object.challengeCooldown) : undefined;
    message.verifierUnbondCooldown = object.verifierUnbondCooldown !== undefined && object.verifierUnbondCooldown !== null ? Duration.fromPartial(object.verifierUnbondCooldown) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_bridges_per_peer !== undefined && object.max_bridges_per_peer !== null) {
      message.maxBridgesPerPeer = BigInt(object.max_bridges_per_peer);
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
    if (object.challenge_fee_amount !== undefined && object.challenge_fee_amount !== null) {
      message.challengeFeeAmount = object.challenge_fee_amount;
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
    if (object.operator_reward_inflation_share !== undefined && object.operator_reward_inflation_share !== null) {
      message.operatorRewardInflationShare = object.operator_reward_inflation_share;
    }
    if (object.max_operator_reward_pool !== undefined && object.max_operator_reward_pool !== null) {
      message.maxOperatorRewardPool = object.max_operator_reward_pool;
    }
    if (object.operator_reward_pool_overflow_burn_ratio !== undefined && object.operator_reward_pool_overflow_burn_ratio !== null) {
      message.operatorRewardPoolOverflowBurnRatio = object.operator_reward_pool_overflow_burn_ratio;
    }
    if (object.operator_reward_epoch_blocks !== undefined && object.operator_reward_epoch_blocks !== null) {
      message.operatorRewardEpochBlocks = BigInt(object.operator_reward_epoch_blocks);
    }
    if (object.min_epoch_verified_submissions !== undefined && object.min_epoch_verified_submissions !== null) {
      message.minEpochVerifiedSubmissions = object.min_epoch_verified_submissions;
    }
    if (object.max_unverified_rate !== undefined && object.max_unverified_rate !== null) {
      message.maxUnverifiedRate = object.max_unverified_rate;
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
    if (object.escalation_fee_amount !== undefined && object.escalation_fee_amount !== null) {
      message.escalationFeeAmount = object.escalation_fee_amount;
    }
    if (object.challenge_cooldown !== undefined && object.challenge_cooldown !== null) {
      message.challengeCooldown = Duration.fromAmino(object.challenge_cooldown);
    }
    if (object.verifier_unbond_cooldown !== undefined && object.verifier_unbond_cooldown !== null) {
      message.verifierUnbondCooldown = Duration.fromAmino(object.verifier_unbond_cooldown);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_bridges_per_peer = message.maxBridgesPerPeer !== BigInt(0) ? message.maxBridgesPerPeer?.toString() : undefined;
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
    obj.challenge_fee_amount = message.challengeFeeAmount === "" ? undefined : message.challengeFeeAmount;
    obj.challenge_jury_deadline = message.challengeJuryDeadline ? Duration.toAmino(message.challengeJuryDeadline) : undefined;
    obj.verifier_demotion_cooldown = message.verifierDemotionCooldown ? Duration.toAmino(message.verifierDemotionCooldown) : undefined;
    obj.verifier_overturn_base_cooldown = message.verifierOverturnBaseCooldown ? Duration.toAmino(message.verifierOverturnBaseCooldown) : undefined;
    obj.upheld_to_reset_overturns = message.upheldToResetOverturns === 0 ? undefined : message.upheldToResetOverturns;
    obj.operator_reward_inflation_share = message.operatorRewardInflationShare === "" ? undefined : message.operatorRewardInflationShare;
    obj.max_operator_reward_pool = message.maxOperatorRewardPool === "" ? undefined : message.maxOperatorRewardPool;
    obj.operator_reward_pool_overflow_burn_ratio = message.operatorRewardPoolOverflowBurnRatio === "" ? undefined : message.operatorRewardPoolOverflowBurnRatio;
    obj.operator_reward_epoch_blocks = message.operatorRewardEpochBlocks !== BigInt(0) ? message.operatorRewardEpochBlocks?.toString() : undefined;
    obj.min_epoch_verified_submissions = message.minEpochVerifiedSubmissions === 0 ? undefined : message.minEpochVerifiedSubmissions;
    obj.max_unverified_rate = message.maxUnverifiedRate === "" ? undefined : message.maxUnverifiedRate;
    obj.arbiter_quorum = message.arbiterQuorum === 0 ? undefined : message.arbiterQuorum;
    obj.arbiter_resolution_window = message.arbiterResolutionWindow ? Duration.toAmino(message.arbiterResolutionWindow) : undefined;
    obj.arbiter_escalation_window = message.arbiterEscalationWindow ? Duration.toAmino(message.arbiterEscalationWindow) : undefined;
    obj.escalation_fee_amount = message.escalationFeeAmount === "" ? undefined : message.escalationFeeAmount;
    obj.challenge_cooldown = message.challengeCooldown ? Duration.toAmino(message.challengeCooldown) : undefined;
    obj.verifier_unbond_cooldown = message.verifierUnbondCooldown ? Duration.toAmino(message.verifierUnbondCooldown) : undefined;
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