//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ReportTimeoutAction controls what the EndBlocker does when a PENDING
 * report ages past max_pending_blocks without a controller verdict.
 * Per-service-type knob so consumer modules can pick the failure-mode
 * best suited to their accountability model (see Phase 0 of the
 * federation→service migration plan).
 */
export enum ReportTimeoutAction {
  /**
   * REPORT_TIMEOUT_ACTION_DISMISS - REPORT_TIMEOUT_ACTION_DISMISS is the default: aged reports auto-
   * dismiss, deposit refunded to reporter, controller barred from
   * re-filing the same allegation for report_refile_cooldown_blocks.
   * Suits service types where "no decision" should default to the
   * operator's benefit.
   */
  REPORT_TIMEOUT_ACTION_DISMISS = 0,
  /**
   * REPORT_TIMEOUT_ACTION_ESCALATE - REPORT_TIMEOUT_ACTION_ESCALATE auto-opens an x/rep jury case via
   * CreateAppealInitiative when the controller stalls. Suits service
   * types where a silent/captured controller must not be able to park
   * a slash indefinitely (e.g. federation bridges).
   */
  REPORT_TIMEOUT_ACTION_ESCALATE = 1,
  UNRECOGNIZED = -1,
}
export const ReportTimeoutActionAmino = ReportTimeoutAction;
export function reportTimeoutActionFromJSON(object: any): ReportTimeoutAction {
  switch (object) {
    case 0:
    case "REPORT_TIMEOUT_ACTION_DISMISS":
      return ReportTimeoutAction.REPORT_TIMEOUT_ACTION_DISMISS;
    case 1:
    case "REPORT_TIMEOUT_ACTION_ESCALATE":
      return ReportTimeoutAction.REPORT_TIMEOUT_ACTION_ESCALATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReportTimeoutAction.UNRECOGNIZED;
  }
}
export function reportTimeoutActionToJSON(object: ReportTimeoutAction): string {
  switch (object) {
    case ReportTimeoutAction.REPORT_TIMEOUT_ACTION_DISMISS:
      return "REPORT_TIMEOUT_ACTION_DISMISS";
    case ReportTimeoutAction.REPORT_TIMEOUT_ACTION_ESCALATE:
      return "REPORT_TIMEOUT_ACTION_ESCALATE";
    case ReportTimeoutAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ServiceTypeConfig is the governance-managed allowlist entry that defines
 * a permitted service type and its per-type knobs (see x-service-spec.md
 * §3.2). Mutated only via MsgUpdateServiceTypeConfig (gov authority).
 * @name ServiceTypeConfig
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.ServiceTypeConfig
 */
export interface ServiceTypeConfig {
  /**
   * service_type is the string key matching ^[a-z0-9-]{1,64}$. Immutable
   * once created.
   */
  serviceType: string;
  /**
   * description is human-readable purpose; <= 512 chars.
   */
  description: string;
  /**
   * min_bond_amount is the minimum SPARK required to register or remain
   * ACTIVE under this service type, in bond-denom micro-units. Wrapped
   * into sdk.Coin with the chain's bond denom at the point of use.
   */
  minBondAmount: string;
  /**
   * unbonding_period_blocks overrides the default unbonding window for
   * this type. ~14 days at default block time.
   */
  unbondingPeriodBlocks: bigint;
  /**
   * unilateral_slash_cap_bps is the per-slash cap (default 500 = 5%).
   * basis points, in (0, 10000].
   */
  unilateralSlashCapBps: number;
  /**
   * tier1_window_blocks is the rolling window for the aggregate tier-1
   * cap (default ~90 days).
   */
  tier1WindowBlocks: bigint;
  /**
   * tier1_aggregate_cap_bps is the cumulative-slash cap within the
   * window (default 1500 = 15%). MUST be ≥ unilateral_slash_cap_bps.
   */
  tier1AggregateCapBps: number;
  /**
   * tier1_cooldown_blocks is the minimum interval between tier-1 slashes
   * against the same operator (default ~7 days). MUST be > 0.
   */
  tier1CooldownBlocks: bigint;
  /**
   * underfunded_grace_blocks is the time an UNDERFUNDED operator has to
   * top up before being force-unbonded by the EndBlocker (default ~7
   * days).
   */
  underfundedGraceBlocks: bigint;
  /**
   * enabled gates new registrations. Disabling does not affect existing
   * operators (§3.2 disabled-type semantics).
   */
  enabled: boolean;
  /**
   * report_timeout_action controls what the EndBlocker does when a
   * PENDING report against an operator of this service type ages past
   * max_pending_blocks. Default DISMISS preserves prior behavior;
   * ESCALATE auto-opens a jury case via CreateAppealInitiative so a
   * silent controller can't park a slash forever. Per-type knob so
   * each consumer chooses the right failure-mode.
   */
  reportTimeoutAction: ReportTimeoutAction;
  /**
   * challenge_default_slash_bps is the *proposed* slash amount when a
   * system report is filed via OpenSystemReport without an explicit
   * override (e.g. federation files a report on challenge-quorum
   * resolution). MUST be ≤ unilateral_slash_cap_bps. Cross-field
   * validation is enforced in both directions at MsgUpdateServiceType-
   * Config time. The controller can still adjust the actual slash up
   * or down within unilateral_slash_cap_bps at MsgResolveReport time;
   * this field is just the starting proposal.
   */
  challengeDefaultSlashBps: number;
}
export interface ServiceTypeConfigProtoMsg {
  typeUrl: "/sparkdream.service.v1.ServiceTypeConfig";
  value: Uint8Array;
}
/**
 * ServiceTypeConfig is the governance-managed allowlist entry that defines
 * a permitted service type and its per-type knobs (see x-service-spec.md
 * §3.2). Mutated only via MsgUpdateServiceTypeConfig (gov authority).
 * @name ServiceTypeConfigAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.ServiceTypeConfig
 */
export interface ServiceTypeConfigAmino {
  /**
   * service_type is the string key matching ^[a-z0-9-]{1,64}$. Immutable
   * once created.
   */
  service_type?: string;
  /**
   * description is human-readable purpose; <= 512 chars.
   */
  description?: string;
  /**
   * min_bond_amount is the minimum SPARK required to register or remain
   * ACTIVE under this service type, in bond-denom micro-units. Wrapped
   * into sdk.Coin with the chain's bond denom at the point of use.
   */
  min_bond_amount?: string;
  /**
   * unbonding_period_blocks overrides the default unbonding window for
   * this type. ~14 days at default block time.
   */
  unbonding_period_blocks?: string;
  /**
   * unilateral_slash_cap_bps is the per-slash cap (default 500 = 5%).
   * basis points, in (0, 10000].
   */
  unilateral_slash_cap_bps?: number;
  /**
   * tier1_window_blocks is the rolling window for the aggregate tier-1
   * cap (default ~90 days).
   */
  tier1_window_blocks?: string;
  /**
   * tier1_aggregate_cap_bps is the cumulative-slash cap within the
   * window (default 1500 = 15%). MUST be ≥ unilateral_slash_cap_bps.
   */
  tier1_aggregate_cap_bps?: number;
  /**
   * tier1_cooldown_blocks is the minimum interval between tier-1 slashes
   * against the same operator (default ~7 days). MUST be > 0.
   */
  tier1_cooldown_blocks?: string;
  /**
   * underfunded_grace_blocks is the time an UNDERFUNDED operator has to
   * top up before being force-unbonded by the EndBlocker (default ~7
   * days).
   */
  underfunded_grace_blocks?: string;
  /**
   * enabled gates new registrations. Disabling does not affect existing
   * operators (§3.2 disabled-type semantics).
   */
  enabled?: boolean;
  /**
   * report_timeout_action controls what the EndBlocker does when a
   * PENDING report against an operator of this service type ages past
   * max_pending_blocks. Default DISMISS preserves prior behavior;
   * ESCALATE auto-opens a jury case via CreateAppealInitiative so a
   * silent controller can't park a slash forever. Per-type knob so
   * each consumer chooses the right failure-mode.
   */
  report_timeout_action?: ReportTimeoutAction;
  /**
   * challenge_default_slash_bps is the *proposed* slash amount when a
   * system report is filed via OpenSystemReport without an explicit
   * override (e.g. federation files a report on challenge-quorum
   * resolution). MUST be ≤ unilateral_slash_cap_bps. Cross-field
   * validation is enforced in both directions at MsgUpdateServiceType-
   * Config time. The controller can still adjust the actual slash up
   * or down within unilateral_slash_cap_bps at MsgResolveReport time;
   * this field is just the starting proposal.
   */
  challenge_default_slash_bps?: number;
}
export interface ServiceTypeConfigAminoMsg {
  type: "sparkdream/x/service/ServiceTypeConfig";
  value: ServiceTypeConfigAmino;
}
function createBaseServiceTypeConfig(): ServiceTypeConfig {
  return {
    serviceType: "",
    description: "",
    minBondAmount: "",
    unbondingPeriodBlocks: BigInt(0),
    unilateralSlashCapBps: 0,
    tier1WindowBlocks: BigInt(0),
    tier1AggregateCapBps: 0,
    tier1CooldownBlocks: BigInt(0),
    underfundedGraceBlocks: BigInt(0),
    enabled: false,
    reportTimeoutAction: 0,
    challengeDefaultSlashBps: 0
  };
}
/**
 * ServiceTypeConfig is the governance-managed allowlist entry that defines
 * a permitted service type and its per-type knobs (see x-service-spec.md
 * §3.2). Mutated only via MsgUpdateServiceTypeConfig (gov authority).
 * @name ServiceTypeConfig
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.ServiceTypeConfig
 */
export const ServiceTypeConfig = {
  typeUrl: "/sparkdream.service.v1.ServiceTypeConfig",
  aminoType: "sparkdream/x/service/ServiceTypeConfig",
  encode(message: ServiceTypeConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceType !== "") {
      writer.uint32(10).string(message.serviceType);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.minBondAmount !== "") {
      writer.uint32(26).string(message.minBondAmount);
    }
    if (message.unbondingPeriodBlocks !== BigInt(0)) {
      writer.uint32(32).int64(message.unbondingPeriodBlocks);
    }
    if (message.unilateralSlashCapBps !== 0) {
      writer.uint32(40).uint32(message.unilateralSlashCapBps);
    }
    if (message.tier1WindowBlocks !== BigInt(0)) {
      writer.uint32(48).int64(message.tier1WindowBlocks);
    }
    if (message.tier1AggregateCapBps !== 0) {
      writer.uint32(56).uint32(message.tier1AggregateCapBps);
    }
    if (message.tier1CooldownBlocks !== BigInt(0)) {
      writer.uint32(64).int64(message.tier1CooldownBlocks);
    }
    if (message.underfundedGraceBlocks !== BigInt(0)) {
      writer.uint32(72).int64(message.underfundedGraceBlocks);
    }
    if (message.enabled === true) {
      writer.uint32(80).bool(message.enabled);
    }
    if (message.reportTimeoutAction !== 0) {
      writer.uint32(88).int32(message.reportTimeoutAction);
    }
    if (message.challengeDefaultSlashBps !== 0) {
      writer.uint32(96).uint32(message.challengeDefaultSlashBps);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceTypeConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceTypeConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceType = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.minBondAmount = reader.string();
          break;
        case 4:
          message.unbondingPeriodBlocks = reader.int64();
          break;
        case 5:
          message.unilateralSlashCapBps = reader.uint32();
          break;
        case 6:
          message.tier1WindowBlocks = reader.int64();
          break;
        case 7:
          message.tier1AggregateCapBps = reader.uint32();
          break;
        case 8:
          message.tier1CooldownBlocks = reader.int64();
          break;
        case 9:
          message.underfundedGraceBlocks = reader.int64();
          break;
        case 10:
          message.enabled = reader.bool();
          break;
        case 11:
          message.reportTimeoutAction = reader.int32() as any;
          break;
        case 12:
          message.challengeDefaultSlashBps = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ServiceTypeConfig>): ServiceTypeConfig {
    const message = createBaseServiceTypeConfig();
    message.serviceType = object.serviceType ?? "";
    message.description = object.description ?? "";
    message.minBondAmount = object.minBondAmount ?? "";
    message.unbondingPeriodBlocks = object.unbondingPeriodBlocks !== undefined && object.unbondingPeriodBlocks !== null ? BigInt(object.unbondingPeriodBlocks.toString()) : BigInt(0);
    message.unilateralSlashCapBps = object.unilateralSlashCapBps ?? 0;
    message.tier1WindowBlocks = object.tier1WindowBlocks !== undefined && object.tier1WindowBlocks !== null ? BigInt(object.tier1WindowBlocks.toString()) : BigInt(0);
    message.tier1AggregateCapBps = object.tier1AggregateCapBps ?? 0;
    message.tier1CooldownBlocks = object.tier1CooldownBlocks !== undefined && object.tier1CooldownBlocks !== null ? BigInt(object.tier1CooldownBlocks.toString()) : BigInt(0);
    message.underfundedGraceBlocks = object.underfundedGraceBlocks !== undefined && object.underfundedGraceBlocks !== null ? BigInt(object.underfundedGraceBlocks.toString()) : BigInt(0);
    message.enabled = object.enabled ?? false;
    message.reportTimeoutAction = object.reportTimeoutAction ?? 0;
    message.challengeDefaultSlashBps = object.challengeDefaultSlashBps ?? 0;
    return message;
  },
  fromAmino(object: ServiceTypeConfigAmino): ServiceTypeConfig {
    const message = createBaseServiceTypeConfig();
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.min_bond_amount !== undefined && object.min_bond_amount !== null) {
      message.minBondAmount = object.min_bond_amount;
    }
    if (object.unbonding_period_blocks !== undefined && object.unbonding_period_blocks !== null) {
      message.unbondingPeriodBlocks = BigInt(object.unbonding_period_blocks);
    }
    if (object.unilateral_slash_cap_bps !== undefined && object.unilateral_slash_cap_bps !== null) {
      message.unilateralSlashCapBps = object.unilateral_slash_cap_bps;
    }
    if (object.tier1_window_blocks !== undefined && object.tier1_window_blocks !== null) {
      message.tier1WindowBlocks = BigInt(object.tier1_window_blocks);
    }
    if (object.tier1_aggregate_cap_bps !== undefined && object.tier1_aggregate_cap_bps !== null) {
      message.tier1AggregateCapBps = object.tier1_aggregate_cap_bps;
    }
    if (object.tier1_cooldown_blocks !== undefined && object.tier1_cooldown_blocks !== null) {
      message.tier1CooldownBlocks = BigInt(object.tier1_cooldown_blocks);
    }
    if (object.underfunded_grace_blocks !== undefined && object.underfunded_grace_blocks !== null) {
      message.underfundedGraceBlocks = BigInt(object.underfunded_grace_blocks);
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.report_timeout_action !== undefined && object.report_timeout_action !== null) {
      message.reportTimeoutAction = object.report_timeout_action;
    }
    if (object.challenge_default_slash_bps !== undefined && object.challenge_default_slash_bps !== null) {
      message.challengeDefaultSlashBps = object.challenge_default_slash_bps;
    }
    return message;
  },
  toAmino(message: ServiceTypeConfig): ServiceTypeConfigAmino {
    const obj: any = {};
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.description = message.description === "" ? undefined : message.description;
    obj.min_bond_amount = message.minBondAmount === "" ? undefined : message.minBondAmount;
    obj.unbonding_period_blocks = message.unbondingPeriodBlocks !== BigInt(0) ? message.unbondingPeriodBlocks?.toString() : undefined;
    obj.unilateral_slash_cap_bps = message.unilateralSlashCapBps === 0 ? undefined : message.unilateralSlashCapBps;
    obj.tier1_window_blocks = message.tier1WindowBlocks !== BigInt(0) ? message.tier1WindowBlocks?.toString() : undefined;
    obj.tier1_aggregate_cap_bps = message.tier1AggregateCapBps === 0 ? undefined : message.tier1AggregateCapBps;
    obj.tier1_cooldown_blocks = message.tier1CooldownBlocks !== BigInt(0) ? message.tier1CooldownBlocks?.toString() : undefined;
    obj.underfunded_grace_blocks = message.underfundedGraceBlocks !== BigInt(0) ? message.underfundedGraceBlocks?.toString() : undefined;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.report_timeout_action = message.reportTimeoutAction === 0 ? undefined : message.reportTimeoutAction;
    obj.challenge_default_slash_bps = message.challengeDefaultSlashBps === 0 ? undefined : message.challengeDefaultSlashBps;
    return obj;
  },
  fromAminoMsg(object: ServiceTypeConfigAminoMsg): ServiceTypeConfig {
    return ServiceTypeConfig.fromAmino(object.value);
  },
  toAminoMsg(message: ServiceTypeConfig): ServiceTypeConfigAminoMsg {
    return {
      type: "sparkdream/x/service/ServiceTypeConfig",
      value: ServiceTypeConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: ServiceTypeConfigProtoMsg): ServiceTypeConfig {
    return ServiceTypeConfig.decode(message.value);
  },
  toProto(message: ServiceTypeConfig): Uint8Array {
    return ServiceTypeConfig.encode(message).finish();
  },
  toProtoMsg(message: ServiceTypeConfig): ServiceTypeConfigProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.ServiceTypeConfig",
      value: ServiceTypeConfig.encode(message).finish()
    };
  }
};