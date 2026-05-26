//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the module-wide parameters for x/service. See
 * x-service-spec.md §4.2 for full semantics and validation rules. All
 * fields are x/gov-mutable via MsgUpdateParams unless hardened later
 * via the x/mint immutable-parameter pattern (§4.2 high-impact
 * hardening candidates).
 * 
 * Per-service-type overrides for `default_*` fields live on
 * ServiceTypeConfig (§3.2). The values here are the defaults that
 * apply when a service type's override is zero.
 * 
 * Bond-denom-valued amounts are stored as bare math.Int values; the
 * keeper wraps them into sdk.Coin at the point of use via the identity
 * keeper's BondDenom(ctx).
 * @name Params
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Params
 */
export interface Params {
  /**
   * default_unbonding_period_blocks is the default unbonding window
   * (~14 days at default block time).
   */
  defaultUnbondingPeriodBlocks: bigint;
  /**
   * default_unilateral_slash_cap_bps is the default per-slash cap
   * (500 = 5%).
   */
  defaultUnilateralSlashCapBps: number;
  /**
   * default_tier1_window_blocks is the default rolling-window length
   * for aggregate tier-1 cap accounting (~90 days).
   */
  defaultTier1WindowBlocks: bigint;
  /**
   * default_tier1_aggregate_cap_bps is the default cumulative-slash
   * cap within the window (1500 = 15%).
   */
  defaultTier1AggregateCapBps: number;
  /**
   * default_tier1_cooldown_blocks is the default minimum interval
   * between tier-1 slashes against the same operator (~7 days).
   */
  defaultTier1CooldownBlocks: bigint;
  /**
   * default_underfunded_grace_blocks is the default time an
   * UNDERFUNDED operator has to top up before being force-unbonded
   * (~7 days).
   */
  defaultUnderfundedGraceBlocks: bigint;
  /**
   * report_contest_window_blocks is the window an operator has to
   * contest a tier-1 slash (~24 hours). Also the tier-1 escrow
   * release delay.
   */
  reportContestWindowBlocks: bigint;
  /**
   * max_pending_blocks is the auto-dismiss horizon for PENDING
   * reports (~30 days).
   */
  maxPendingBlocks: bigint;
  /**
   * max_escalated_blocks is the auto-timeout horizon for ESCALATED
   * reports awaiting jury verdict (~60 days). MUST be greater than
   * max_pending_blocks.
   */
  maxEscalatedBlocks: bigint;
  /**
   * report_refile_cooldown_blocks is the per-controller cooldown for
   * re-filing a previously-dismissed allegation (~30 days). MUST be
   * ≥ max_pending_blocks.
   */
  reportRefileCooldownBlocks: bigint;
  /**
   * report_deposit_amount is the SPARK escrow required to file
   * MsgReportOperator, in bond-denom micro-units (default 10 SPARK =
   * 10_000_000). Wrapped into sdk.Coin with the chain's bond denom
   * at the point of use.
   */
  reportDepositAmount: string;
  /**
   * min_reporter_trust_level gates who can file reports, as an enum
   * name (e.g. "TRUST_LEVEL_ESTABLISHED"). Empty = no gate.
   */
  minReporterTrustLevel: string;
  /**
   * max_reports_per_reporter_per_operator_per_window is the
   * sliding-window cap on filings by a single reporter against a
   * single (operator, service_type) (default 3).
   */
  maxReportsPerReporterPerOperatorPerWindow: number;
  /**
   * reporter_rate_limit_window_blocks is the window over which the
   * above cap applies (~30 days).
   */
  reporterRateLimitWindowBlocks: bigint;
  /**
   * endblocker_sweep_limit is the per-queue per-block cap on records
   * processed by EndBlocker sweeps (default 100). Prevents unbounded
   * per-block work.
   */
  endblockerSweepLimit: number;
  /**
   * max_metadata_bytes caps Operator.metadata size (default 4096;
   * hard cap 65536).
   */
  maxMetadataBytes: number;
  /**
   * max_reason_bytes caps Report.reason and similar free-form text
   * (default 512; hard cap 4096).
   */
  maxReasonBytes: number;
  /**
   * max_active_operators_per_address caps the number of live
   * operator records a single address may hold across service types
   * (default 16). Prevents reputation gaming via mass
   * micro-registration (§6.6).
   */
  maxActiveOperatorsPerAddress: number;
  /**
   * reputation_grant_per_bond_block is the reputation accrued per
   * SPARK-block of ACTIVE bond, applied at successful unbond claim
   * and capped by the §6.6 anti-gaming rule.
   */
  reputationGrantPerBondBlock: string;
  /**
   * default_pagination_limit is the default page size when a client
   * omits pagination.limit on a paginated query (default 100).
   */
  defaultPaginationLimit: number;
  /**
   * max_pagination_limit hard-caps pagination.limit to bound query
   * gas (default 1000; absolute cap 10000).
   */
  maxPaginationLimit: number;
  /**
   * max_system_reports_per_caller_per_window caps how many distinct
   * system reports a single allowlisted caller module (e.g.
   * "federation") may open via OpenSystemReport within a rolling
   * window of rate_limit_window_blocks. Idempotent re-calls (same
   * dedupe_key) don't count against the cap. Default 50 — tunable
   * from observed federation challenge volume post-launch.
   */
  maxSystemReportsPerCallerPerWindow: number;
  /**
   * rate_limit_window_blocks is the rolling window over which the
   * above per-caller cap applies (~1 day at default block time).
   * x/service has no native epoch concept, so this is an explicit
   * block-count param rather than reusing season/shield epochs.
   */
  rateLimitWindowBlocks: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.service.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the module-wide parameters for x/service. See
 * x-service-spec.md §4.2 for full semantics and validation rules. All
 * fields are x/gov-mutable via MsgUpdateParams unless hardened later
 * via the x/mint immutable-parameter pattern (§4.2 high-impact
 * hardening candidates).
 * 
 * Per-service-type overrides for `default_*` fields live on
 * ServiceTypeConfig (§3.2). The values here are the defaults that
 * apply when a service type's override is zero.
 * 
 * Bond-denom-valued amounts are stored as bare math.Int values; the
 * keeper wraps them into sdk.Coin at the point of use via the identity
 * keeper's BondDenom(ctx).
 * @name ParamsAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Params
 */
export interface ParamsAmino {
  /**
   * default_unbonding_period_blocks is the default unbonding window
   * (~14 days at default block time).
   */
  default_unbonding_period_blocks?: string;
  /**
   * default_unilateral_slash_cap_bps is the default per-slash cap
   * (500 = 5%).
   */
  default_unilateral_slash_cap_bps?: number;
  /**
   * default_tier1_window_blocks is the default rolling-window length
   * for aggregate tier-1 cap accounting (~90 days).
   */
  default_tier1_window_blocks?: string;
  /**
   * default_tier1_aggregate_cap_bps is the default cumulative-slash
   * cap within the window (1500 = 15%).
   */
  default_tier1_aggregate_cap_bps?: number;
  /**
   * default_tier1_cooldown_blocks is the default minimum interval
   * between tier-1 slashes against the same operator (~7 days).
   */
  default_tier1_cooldown_blocks?: string;
  /**
   * default_underfunded_grace_blocks is the default time an
   * UNDERFUNDED operator has to top up before being force-unbonded
   * (~7 days).
   */
  default_underfunded_grace_blocks?: string;
  /**
   * report_contest_window_blocks is the window an operator has to
   * contest a tier-1 slash (~24 hours). Also the tier-1 escrow
   * release delay.
   */
  report_contest_window_blocks?: string;
  /**
   * max_pending_blocks is the auto-dismiss horizon for PENDING
   * reports (~30 days).
   */
  max_pending_blocks?: string;
  /**
   * max_escalated_blocks is the auto-timeout horizon for ESCALATED
   * reports awaiting jury verdict (~60 days). MUST be greater than
   * max_pending_blocks.
   */
  max_escalated_blocks?: string;
  /**
   * report_refile_cooldown_blocks is the per-controller cooldown for
   * re-filing a previously-dismissed allegation (~30 days). MUST be
   * ≥ max_pending_blocks.
   */
  report_refile_cooldown_blocks?: string;
  /**
   * report_deposit_amount is the SPARK escrow required to file
   * MsgReportOperator, in bond-denom micro-units (default 10 SPARK =
   * 10_000_000). Wrapped into sdk.Coin with the chain's bond denom
   * at the point of use.
   */
  report_deposit_amount?: string;
  /**
   * min_reporter_trust_level gates who can file reports, as an enum
   * name (e.g. "TRUST_LEVEL_ESTABLISHED"). Empty = no gate.
   */
  min_reporter_trust_level?: string;
  /**
   * max_reports_per_reporter_per_operator_per_window is the
   * sliding-window cap on filings by a single reporter against a
   * single (operator, service_type) (default 3).
   */
  max_reports_per_reporter_per_operator_per_window?: number;
  /**
   * reporter_rate_limit_window_blocks is the window over which the
   * above cap applies (~30 days).
   */
  reporter_rate_limit_window_blocks?: string;
  /**
   * endblocker_sweep_limit is the per-queue per-block cap on records
   * processed by EndBlocker sweeps (default 100). Prevents unbounded
   * per-block work.
   */
  endblocker_sweep_limit?: number;
  /**
   * max_metadata_bytes caps Operator.metadata size (default 4096;
   * hard cap 65536).
   */
  max_metadata_bytes?: number;
  /**
   * max_reason_bytes caps Report.reason and similar free-form text
   * (default 512; hard cap 4096).
   */
  max_reason_bytes?: number;
  /**
   * max_active_operators_per_address caps the number of live
   * operator records a single address may hold across service types
   * (default 16). Prevents reputation gaming via mass
   * micro-registration (§6.6).
   */
  max_active_operators_per_address?: number;
  /**
   * reputation_grant_per_bond_block is the reputation accrued per
   * SPARK-block of ACTIVE bond, applied at successful unbond claim
   * and capped by the §6.6 anti-gaming rule.
   */
  reputation_grant_per_bond_block?: string;
  /**
   * default_pagination_limit is the default page size when a client
   * omits pagination.limit on a paginated query (default 100).
   */
  default_pagination_limit?: number;
  /**
   * max_pagination_limit hard-caps pagination.limit to bound query
   * gas (default 1000; absolute cap 10000).
   */
  max_pagination_limit?: number;
  /**
   * max_system_reports_per_caller_per_window caps how many distinct
   * system reports a single allowlisted caller module (e.g.
   * "federation") may open via OpenSystemReport within a rolling
   * window of rate_limit_window_blocks. Idempotent re-calls (same
   * dedupe_key) don't count against the cap. Default 50 — tunable
   * from observed federation challenge volume post-launch.
   */
  max_system_reports_per_caller_per_window?: number;
  /**
   * rate_limit_window_blocks is the rolling window over which the
   * above per-caller cap applies (~1 day at default block time).
   * x/service has no native epoch concept, so this is an explicit
   * block-count param rather than reusing season/shield epochs.
   */
  rate_limit_window_blocks?: string;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/service/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    defaultUnbondingPeriodBlocks: BigInt(0),
    defaultUnilateralSlashCapBps: 0,
    defaultTier1WindowBlocks: BigInt(0),
    defaultTier1AggregateCapBps: 0,
    defaultTier1CooldownBlocks: BigInt(0),
    defaultUnderfundedGraceBlocks: BigInt(0),
    reportContestWindowBlocks: BigInt(0),
    maxPendingBlocks: BigInt(0),
    maxEscalatedBlocks: BigInt(0),
    reportRefileCooldownBlocks: BigInt(0),
    reportDepositAmount: "",
    minReporterTrustLevel: "",
    maxReportsPerReporterPerOperatorPerWindow: 0,
    reporterRateLimitWindowBlocks: BigInt(0),
    endblockerSweepLimit: 0,
    maxMetadataBytes: 0,
    maxReasonBytes: 0,
    maxActiveOperatorsPerAddress: 0,
    reputationGrantPerBondBlock: "",
    defaultPaginationLimit: 0,
    maxPaginationLimit: 0,
    maxSystemReportsPerCallerPerWindow: 0,
    rateLimitWindowBlocks: BigInt(0)
  };
}
/**
 * Params defines the module-wide parameters for x/service. See
 * x-service-spec.md §4.2 for full semantics and validation rules. All
 * fields are x/gov-mutable via MsgUpdateParams unless hardened later
 * via the x/mint immutable-parameter pattern (§4.2 high-impact
 * hardening candidates).
 * 
 * Per-service-type overrides for `default_*` fields live on
 * ServiceTypeConfig (§3.2). The values here are the defaults that
 * apply when a service type's override is zero.
 * 
 * Bond-denom-valued amounts are stored as bare math.Int values; the
 * keeper wraps them into sdk.Coin at the point of use via the identity
 * keeper's BondDenom(ctx).
 * @name Params
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.service.v1.Params",
  aminoType: "sparkdream/x/service/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultUnbondingPeriodBlocks !== BigInt(0)) {
      writer.uint32(8).int64(message.defaultUnbondingPeriodBlocks);
    }
    if (message.defaultUnilateralSlashCapBps !== 0) {
      writer.uint32(16).uint32(message.defaultUnilateralSlashCapBps);
    }
    if (message.defaultTier1WindowBlocks !== BigInt(0)) {
      writer.uint32(24).int64(message.defaultTier1WindowBlocks);
    }
    if (message.defaultTier1AggregateCapBps !== 0) {
      writer.uint32(32).uint32(message.defaultTier1AggregateCapBps);
    }
    if (message.defaultTier1CooldownBlocks !== BigInt(0)) {
      writer.uint32(40).int64(message.defaultTier1CooldownBlocks);
    }
    if (message.defaultUnderfundedGraceBlocks !== BigInt(0)) {
      writer.uint32(48).int64(message.defaultUnderfundedGraceBlocks);
    }
    if (message.reportContestWindowBlocks !== BigInt(0)) {
      writer.uint32(56).int64(message.reportContestWindowBlocks);
    }
    if (message.maxPendingBlocks !== BigInt(0)) {
      writer.uint32(64).int64(message.maxPendingBlocks);
    }
    if (message.maxEscalatedBlocks !== BigInt(0)) {
      writer.uint32(72).int64(message.maxEscalatedBlocks);
    }
    if (message.reportRefileCooldownBlocks !== BigInt(0)) {
      writer.uint32(80).int64(message.reportRefileCooldownBlocks);
    }
    if (message.reportDepositAmount !== "") {
      writer.uint32(90).string(message.reportDepositAmount);
    }
    if (message.minReporterTrustLevel !== "") {
      writer.uint32(98).string(message.minReporterTrustLevel);
    }
    if (message.maxReportsPerReporterPerOperatorPerWindow !== 0) {
      writer.uint32(104).uint32(message.maxReportsPerReporterPerOperatorPerWindow);
    }
    if (message.reporterRateLimitWindowBlocks !== BigInt(0)) {
      writer.uint32(112).int64(message.reporterRateLimitWindowBlocks);
    }
    if (message.endblockerSweepLimit !== 0) {
      writer.uint32(120).uint32(message.endblockerSweepLimit);
    }
    if (message.maxMetadataBytes !== 0) {
      writer.uint32(128).uint32(message.maxMetadataBytes);
    }
    if (message.maxReasonBytes !== 0) {
      writer.uint32(136).uint32(message.maxReasonBytes);
    }
    if (message.maxActiveOperatorsPerAddress !== 0) {
      writer.uint32(144).uint32(message.maxActiveOperatorsPerAddress);
    }
    if (message.reputationGrantPerBondBlock !== "") {
      writer.uint32(154).string(Decimal.fromUserInput(message.reputationGrantPerBondBlock, 18).atomics);
    }
    if (message.defaultPaginationLimit !== 0) {
      writer.uint32(160).uint32(message.defaultPaginationLimit);
    }
    if (message.maxPaginationLimit !== 0) {
      writer.uint32(168).uint32(message.maxPaginationLimit);
    }
    if (message.maxSystemReportsPerCallerPerWindow !== 0) {
      writer.uint32(176).uint32(message.maxSystemReportsPerCallerPerWindow);
    }
    if (message.rateLimitWindowBlocks !== BigInt(0)) {
      writer.uint32(184).int64(message.rateLimitWindowBlocks);
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
          message.defaultUnbondingPeriodBlocks = reader.int64();
          break;
        case 2:
          message.defaultUnilateralSlashCapBps = reader.uint32();
          break;
        case 3:
          message.defaultTier1WindowBlocks = reader.int64();
          break;
        case 4:
          message.defaultTier1AggregateCapBps = reader.uint32();
          break;
        case 5:
          message.defaultTier1CooldownBlocks = reader.int64();
          break;
        case 6:
          message.defaultUnderfundedGraceBlocks = reader.int64();
          break;
        case 7:
          message.reportContestWindowBlocks = reader.int64();
          break;
        case 8:
          message.maxPendingBlocks = reader.int64();
          break;
        case 9:
          message.maxEscalatedBlocks = reader.int64();
          break;
        case 10:
          message.reportRefileCooldownBlocks = reader.int64();
          break;
        case 11:
          message.reportDepositAmount = reader.string();
          break;
        case 12:
          message.minReporterTrustLevel = reader.string();
          break;
        case 13:
          message.maxReportsPerReporterPerOperatorPerWindow = reader.uint32();
          break;
        case 14:
          message.reporterRateLimitWindowBlocks = reader.int64();
          break;
        case 15:
          message.endblockerSweepLimit = reader.uint32();
          break;
        case 16:
          message.maxMetadataBytes = reader.uint32();
          break;
        case 17:
          message.maxReasonBytes = reader.uint32();
          break;
        case 18:
          message.maxActiveOperatorsPerAddress = reader.uint32();
          break;
        case 19:
          message.reputationGrantPerBondBlock = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 20:
          message.defaultPaginationLimit = reader.uint32();
          break;
        case 21:
          message.maxPaginationLimit = reader.uint32();
          break;
        case 22:
          message.maxSystemReportsPerCallerPerWindow = reader.uint32();
          break;
        case 23:
          message.rateLimitWindowBlocks = reader.int64();
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
    message.defaultUnbondingPeriodBlocks = object.defaultUnbondingPeriodBlocks !== undefined && object.defaultUnbondingPeriodBlocks !== null ? BigInt(object.defaultUnbondingPeriodBlocks.toString()) : BigInt(0);
    message.defaultUnilateralSlashCapBps = object.defaultUnilateralSlashCapBps ?? 0;
    message.defaultTier1WindowBlocks = object.defaultTier1WindowBlocks !== undefined && object.defaultTier1WindowBlocks !== null ? BigInt(object.defaultTier1WindowBlocks.toString()) : BigInt(0);
    message.defaultTier1AggregateCapBps = object.defaultTier1AggregateCapBps ?? 0;
    message.defaultTier1CooldownBlocks = object.defaultTier1CooldownBlocks !== undefined && object.defaultTier1CooldownBlocks !== null ? BigInt(object.defaultTier1CooldownBlocks.toString()) : BigInt(0);
    message.defaultUnderfundedGraceBlocks = object.defaultUnderfundedGraceBlocks !== undefined && object.defaultUnderfundedGraceBlocks !== null ? BigInt(object.defaultUnderfundedGraceBlocks.toString()) : BigInt(0);
    message.reportContestWindowBlocks = object.reportContestWindowBlocks !== undefined && object.reportContestWindowBlocks !== null ? BigInt(object.reportContestWindowBlocks.toString()) : BigInt(0);
    message.maxPendingBlocks = object.maxPendingBlocks !== undefined && object.maxPendingBlocks !== null ? BigInt(object.maxPendingBlocks.toString()) : BigInt(0);
    message.maxEscalatedBlocks = object.maxEscalatedBlocks !== undefined && object.maxEscalatedBlocks !== null ? BigInt(object.maxEscalatedBlocks.toString()) : BigInt(0);
    message.reportRefileCooldownBlocks = object.reportRefileCooldownBlocks !== undefined && object.reportRefileCooldownBlocks !== null ? BigInt(object.reportRefileCooldownBlocks.toString()) : BigInt(0);
    message.reportDepositAmount = object.reportDepositAmount ?? "";
    message.minReporterTrustLevel = object.minReporterTrustLevel ?? "";
    message.maxReportsPerReporterPerOperatorPerWindow = object.maxReportsPerReporterPerOperatorPerWindow ?? 0;
    message.reporterRateLimitWindowBlocks = object.reporterRateLimitWindowBlocks !== undefined && object.reporterRateLimitWindowBlocks !== null ? BigInt(object.reporterRateLimitWindowBlocks.toString()) : BigInt(0);
    message.endblockerSweepLimit = object.endblockerSweepLimit ?? 0;
    message.maxMetadataBytes = object.maxMetadataBytes ?? 0;
    message.maxReasonBytes = object.maxReasonBytes ?? 0;
    message.maxActiveOperatorsPerAddress = object.maxActiveOperatorsPerAddress ?? 0;
    message.reputationGrantPerBondBlock = object.reputationGrantPerBondBlock ?? "";
    message.defaultPaginationLimit = object.defaultPaginationLimit ?? 0;
    message.maxPaginationLimit = object.maxPaginationLimit ?? 0;
    message.maxSystemReportsPerCallerPerWindow = object.maxSystemReportsPerCallerPerWindow ?? 0;
    message.rateLimitWindowBlocks = object.rateLimitWindowBlocks !== undefined && object.rateLimitWindowBlocks !== null ? BigInt(object.rateLimitWindowBlocks.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.default_unbonding_period_blocks !== undefined && object.default_unbonding_period_blocks !== null) {
      message.defaultUnbondingPeriodBlocks = BigInt(object.default_unbonding_period_blocks);
    }
    if (object.default_unilateral_slash_cap_bps !== undefined && object.default_unilateral_slash_cap_bps !== null) {
      message.defaultUnilateralSlashCapBps = object.default_unilateral_slash_cap_bps;
    }
    if (object.default_tier1_window_blocks !== undefined && object.default_tier1_window_blocks !== null) {
      message.defaultTier1WindowBlocks = BigInt(object.default_tier1_window_blocks);
    }
    if (object.default_tier1_aggregate_cap_bps !== undefined && object.default_tier1_aggregate_cap_bps !== null) {
      message.defaultTier1AggregateCapBps = object.default_tier1_aggregate_cap_bps;
    }
    if (object.default_tier1_cooldown_blocks !== undefined && object.default_tier1_cooldown_blocks !== null) {
      message.defaultTier1CooldownBlocks = BigInt(object.default_tier1_cooldown_blocks);
    }
    if (object.default_underfunded_grace_blocks !== undefined && object.default_underfunded_grace_blocks !== null) {
      message.defaultUnderfundedGraceBlocks = BigInt(object.default_underfunded_grace_blocks);
    }
    if (object.report_contest_window_blocks !== undefined && object.report_contest_window_blocks !== null) {
      message.reportContestWindowBlocks = BigInt(object.report_contest_window_blocks);
    }
    if (object.max_pending_blocks !== undefined && object.max_pending_blocks !== null) {
      message.maxPendingBlocks = BigInt(object.max_pending_blocks);
    }
    if (object.max_escalated_blocks !== undefined && object.max_escalated_blocks !== null) {
      message.maxEscalatedBlocks = BigInt(object.max_escalated_blocks);
    }
    if (object.report_refile_cooldown_blocks !== undefined && object.report_refile_cooldown_blocks !== null) {
      message.reportRefileCooldownBlocks = BigInt(object.report_refile_cooldown_blocks);
    }
    if (object.report_deposit_amount !== undefined && object.report_deposit_amount !== null) {
      message.reportDepositAmount = object.report_deposit_amount;
    }
    if (object.min_reporter_trust_level !== undefined && object.min_reporter_trust_level !== null) {
      message.minReporterTrustLevel = object.min_reporter_trust_level;
    }
    if (object.max_reports_per_reporter_per_operator_per_window !== undefined && object.max_reports_per_reporter_per_operator_per_window !== null) {
      message.maxReportsPerReporterPerOperatorPerWindow = object.max_reports_per_reporter_per_operator_per_window;
    }
    if (object.reporter_rate_limit_window_blocks !== undefined && object.reporter_rate_limit_window_blocks !== null) {
      message.reporterRateLimitWindowBlocks = BigInt(object.reporter_rate_limit_window_blocks);
    }
    if (object.endblocker_sweep_limit !== undefined && object.endblocker_sweep_limit !== null) {
      message.endblockerSweepLimit = object.endblocker_sweep_limit;
    }
    if (object.max_metadata_bytes !== undefined && object.max_metadata_bytes !== null) {
      message.maxMetadataBytes = object.max_metadata_bytes;
    }
    if (object.max_reason_bytes !== undefined && object.max_reason_bytes !== null) {
      message.maxReasonBytes = object.max_reason_bytes;
    }
    if (object.max_active_operators_per_address !== undefined && object.max_active_operators_per_address !== null) {
      message.maxActiveOperatorsPerAddress = object.max_active_operators_per_address;
    }
    if (object.reputation_grant_per_bond_block !== undefined && object.reputation_grant_per_bond_block !== null) {
      message.reputationGrantPerBondBlock = object.reputation_grant_per_bond_block;
    }
    if (object.default_pagination_limit !== undefined && object.default_pagination_limit !== null) {
      message.defaultPaginationLimit = object.default_pagination_limit;
    }
    if (object.max_pagination_limit !== undefined && object.max_pagination_limit !== null) {
      message.maxPaginationLimit = object.max_pagination_limit;
    }
    if (object.max_system_reports_per_caller_per_window !== undefined && object.max_system_reports_per_caller_per_window !== null) {
      message.maxSystemReportsPerCallerPerWindow = object.max_system_reports_per_caller_per_window;
    }
    if (object.rate_limit_window_blocks !== undefined && object.rate_limit_window_blocks !== null) {
      message.rateLimitWindowBlocks = BigInt(object.rate_limit_window_blocks);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.default_unbonding_period_blocks = message.defaultUnbondingPeriodBlocks !== BigInt(0) ? message.defaultUnbondingPeriodBlocks?.toString() : undefined;
    obj.default_unilateral_slash_cap_bps = message.defaultUnilateralSlashCapBps === 0 ? undefined : message.defaultUnilateralSlashCapBps;
    obj.default_tier1_window_blocks = message.defaultTier1WindowBlocks !== BigInt(0) ? message.defaultTier1WindowBlocks?.toString() : undefined;
    obj.default_tier1_aggregate_cap_bps = message.defaultTier1AggregateCapBps === 0 ? undefined : message.defaultTier1AggregateCapBps;
    obj.default_tier1_cooldown_blocks = message.defaultTier1CooldownBlocks !== BigInt(0) ? message.defaultTier1CooldownBlocks?.toString() : undefined;
    obj.default_underfunded_grace_blocks = message.defaultUnderfundedGraceBlocks !== BigInt(0) ? message.defaultUnderfundedGraceBlocks?.toString() : undefined;
    obj.report_contest_window_blocks = message.reportContestWindowBlocks !== BigInt(0) ? message.reportContestWindowBlocks?.toString() : undefined;
    obj.max_pending_blocks = message.maxPendingBlocks !== BigInt(0) ? message.maxPendingBlocks?.toString() : undefined;
    obj.max_escalated_blocks = message.maxEscalatedBlocks !== BigInt(0) ? message.maxEscalatedBlocks?.toString() : undefined;
    obj.report_refile_cooldown_blocks = message.reportRefileCooldownBlocks !== BigInt(0) ? message.reportRefileCooldownBlocks?.toString() : undefined;
    obj.report_deposit_amount = message.reportDepositAmount === "" ? undefined : message.reportDepositAmount;
    obj.min_reporter_trust_level = message.minReporterTrustLevel === "" ? undefined : message.minReporterTrustLevel;
    obj.max_reports_per_reporter_per_operator_per_window = message.maxReportsPerReporterPerOperatorPerWindow === 0 ? undefined : message.maxReportsPerReporterPerOperatorPerWindow;
    obj.reporter_rate_limit_window_blocks = message.reporterRateLimitWindowBlocks !== BigInt(0) ? message.reporterRateLimitWindowBlocks?.toString() : undefined;
    obj.endblocker_sweep_limit = message.endblockerSweepLimit === 0 ? undefined : message.endblockerSweepLimit;
    obj.max_metadata_bytes = message.maxMetadataBytes === 0 ? undefined : message.maxMetadataBytes;
    obj.max_reason_bytes = message.maxReasonBytes === 0 ? undefined : message.maxReasonBytes;
    obj.max_active_operators_per_address = message.maxActiveOperatorsPerAddress === 0 ? undefined : message.maxActiveOperatorsPerAddress;
    obj.reputation_grant_per_bond_block = message.reputationGrantPerBondBlock === "" ? undefined : message.reputationGrantPerBondBlock;
    obj.default_pagination_limit = message.defaultPaginationLimit === 0 ? undefined : message.defaultPaginationLimit;
    obj.max_pagination_limit = message.maxPaginationLimit === 0 ? undefined : message.maxPaginationLimit;
    obj.max_system_reports_per_caller_per_window = message.maxSystemReportsPerCallerPerWindow === 0 ? undefined : message.maxSystemReportsPerCallerPerWindow;
    obj.rate_limit_window_blocks = message.rateLimitWindowBlocks !== BigInt(0) ? message.rateLimitWindowBlocks?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/service/Params",
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
      typeUrl: "/sparkdream.service.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};