//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { ServiceTypeConfig, ServiceTypeConfigAmino } from "./service_type_config";
import { Operator, OperatorAmino } from "./operator";
import { Report, ReportAmino } from "./report";
import { Tier1EscrowEntry, Tier1EscrowEntryAmino } from "./tier1_escrow_entry";
import { ControllerTransferCase, ControllerTransferCaseAmino } from "./controller_transfer_case";
import { ReporterRateLimit, ReporterRateLimitAmino } from "./reporter_rate_limit";
import { RefileCooldown, RefileCooldownAmino } from "./refile_cooldown";
import { Tier1LastSlash, Tier1LastSlashAmino } from "./tier1_last_slash";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the service module's genesis state. See
 * x-service-spec.md §7 for full validation rules.
 * @name GenesisState
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  /**
   * service_types is the initial governance-managed allowlist (§3.2).
   * Default genesis is empty — governance must enable types post-launch.
   */
  serviceTypes: ServiceTypeConfig[];
  /**
   * operators is the set of live records (status ∈ {ACTIVE, UNDERFUNDED,
   * UNBONDING}) at genesis time. Each (address, service_type) MUST be
   * unique (§3.1).
   */
  operators: Operator[];
  /**
   * archived_operators is the set of terminal records (status ∈ {SLASHED,
   * RETIRED}) — retained for audit. MUST not collide with live operators
   * on (address, service_type).
   */
  archivedOperators: Operator[];
  /**
   * reports is the set of open and recently-resolved reports.
   */
  reports: Report[];
  /**
   * tier1_escrow is the set of in-flight tier-1 slashes awaiting either
   * contest or release to community pool (§3.4.7).
   */
  tier1Escrow: Tier1EscrowEntry[];
  /**
   * controller_transfer_cases is the set of open controller-transfer
   * jury cases (§5.4), each holding an escrowed opener deposit.
   */
  controllerTransferCases: ControllerTransferCase[];
  /**
   * reporter_rate_limits is the per-(reporter, operator, service_type)
   * sliding-window ring buffer (§3.4.6).
   */
  reporterRateLimits: ReporterRateLimit[];
  /**
   * refile_cooldowns blocks the same controller from re-filing a
   * dismissed allegation within `report_refile_cooldown_blocks` (§3.4.5).
   */
  refileCooldowns: RefileCooldown[];
  /**
   * tier1_last_slash records per-(controller, operator, service_type) the
   * height of the last tier-1 slash for cooldown enforcement (§3.4.4).
   */
  tier1LastSlash: Tier1LastSlash[];
  /**
   * next_report_id restores the Reports auto-incrementing counter.
   */
  nextReportId: bigint;
  /**
   * next_escrow_id restores the Tier1Escrow auto-incrementing counter.
   */
  nextEscrowId: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.service.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the service module's genesis state. See
 * x-service-spec.md §7 for full validation rules.
 * @name GenesisStateAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  /**
   * service_types is the initial governance-managed allowlist (§3.2).
   * Default genesis is empty — governance must enable types post-launch.
   */
  service_types?: ServiceTypeConfigAmino[];
  /**
   * operators is the set of live records (status ∈ {ACTIVE, UNDERFUNDED,
   * UNBONDING}) at genesis time. Each (address, service_type) MUST be
   * unique (§3.1).
   */
  operators?: OperatorAmino[];
  /**
   * archived_operators is the set of terminal records (status ∈ {SLASHED,
   * RETIRED}) — retained for audit. MUST not collide with live operators
   * on (address, service_type).
   */
  archived_operators?: OperatorAmino[];
  /**
   * reports is the set of open and recently-resolved reports.
   */
  reports?: ReportAmino[];
  /**
   * tier1_escrow is the set of in-flight tier-1 slashes awaiting either
   * contest or release to community pool (§3.4.7).
   */
  tier1_escrow?: Tier1EscrowEntryAmino[];
  /**
   * controller_transfer_cases is the set of open controller-transfer
   * jury cases (§5.4), each holding an escrowed opener deposit.
   */
  controller_transfer_cases?: ControllerTransferCaseAmino[];
  /**
   * reporter_rate_limits is the per-(reporter, operator, service_type)
   * sliding-window ring buffer (§3.4.6).
   */
  reporter_rate_limits?: ReporterRateLimitAmino[];
  /**
   * refile_cooldowns blocks the same controller from re-filing a
   * dismissed allegation within `report_refile_cooldown_blocks` (§3.4.5).
   */
  refile_cooldowns?: RefileCooldownAmino[];
  /**
   * tier1_last_slash records per-(controller, operator, service_type) the
   * height of the last tier-1 slash for cooldown enforcement (§3.4.4).
   */
  tier1_last_slash?: Tier1LastSlashAmino[];
  /**
   * next_report_id restores the Reports auto-incrementing counter.
   */
  next_report_id?: string;
  /**
   * next_escrow_id restores the Tier1Escrow auto-incrementing counter.
   */
  next_escrow_id?: string;
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.service.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    serviceTypes: [],
    operators: [],
    archivedOperators: [],
    reports: [],
    tier1Escrow: [],
    controllerTransferCases: [],
    reporterRateLimits: [],
    refileCooldowns: [],
    tier1LastSlash: [],
    nextReportId: BigInt(0),
    nextEscrowId: BigInt(0)
  };
}
/**
 * GenesisState defines the service module's genesis state. See
 * x-service-spec.md §7 for full validation rules.
 * @name GenesisState
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.service.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.serviceTypes) {
      ServiceTypeConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.operators) {
      Operator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.archivedOperators) {
      Operator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.tier1Escrow) {
      Tier1EscrowEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.controllerTransferCases) {
      ControllerTransferCase.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reporterRateLimits) {
      ReporterRateLimit.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.refileCooldowns) {
      RefileCooldown.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.tier1LastSlash) {
      Tier1LastSlash.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.nextReportId !== BigInt(0)) {
      writer.uint32(88).uint64(message.nextReportId);
    }
    if (message.nextEscrowId !== BigInt(0)) {
      writer.uint32(96).uint64(message.nextEscrowId);
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
          message.serviceTypes.push(ServiceTypeConfig.decode(reader, reader.uint32()));
          break;
        case 3:
          message.operators.push(Operator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.archivedOperators.push(Operator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reports.push(Report.decode(reader, reader.uint32()));
          break;
        case 6:
          message.tier1Escrow.push(Tier1EscrowEntry.decode(reader, reader.uint32()));
          break;
        case 7:
          message.controllerTransferCases.push(ControllerTransferCase.decode(reader, reader.uint32()));
          break;
        case 8:
          message.reporterRateLimits.push(ReporterRateLimit.decode(reader, reader.uint32()));
          break;
        case 9:
          message.refileCooldowns.push(RefileCooldown.decode(reader, reader.uint32()));
          break;
        case 10:
          message.tier1LastSlash.push(Tier1LastSlash.decode(reader, reader.uint32()));
          break;
        case 11:
          message.nextReportId = reader.uint64();
          break;
        case 12:
          message.nextEscrowId = reader.uint64();
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
    message.serviceTypes = object.serviceTypes?.map(e => ServiceTypeConfig.fromPartial(e)) || [];
    message.operators = object.operators?.map(e => Operator.fromPartial(e)) || [];
    message.archivedOperators = object.archivedOperators?.map(e => Operator.fromPartial(e)) || [];
    message.reports = object.reports?.map(e => Report.fromPartial(e)) || [];
    message.tier1Escrow = object.tier1Escrow?.map(e => Tier1EscrowEntry.fromPartial(e)) || [];
    message.controllerTransferCases = object.controllerTransferCases?.map(e => ControllerTransferCase.fromPartial(e)) || [];
    message.reporterRateLimits = object.reporterRateLimits?.map(e => ReporterRateLimit.fromPartial(e)) || [];
    message.refileCooldowns = object.refileCooldowns?.map(e => RefileCooldown.fromPartial(e)) || [];
    message.tier1LastSlash = object.tier1LastSlash?.map(e => Tier1LastSlash.fromPartial(e)) || [];
    message.nextReportId = object.nextReportId !== undefined && object.nextReportId !== null ? BigInt(object.nextReportId.toString()) : BigInt(0);
    message.nextEscrowId = object.nextEscrowId !== undefined && object.nextEscrowId !== null ? BigInt(object.nextEscrowId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.serviceTypes = object.service_types?.map(e => ServiceTypeConfig.fromAmino(e)) || [];
    message.operators = object.operators?.map(e => Operator.fromAmino(e)) || [];
    message.archivedOperators = object.archived_operators?.map(e => Operator.fromAmino(e)) || [];
    message.reports = object.reports?.map(e => Report.fromAmino(e)) || [];
    message.tier1Escrow = object.tier1_escrow?.map(e => Tier1EscrowEntry.fromAmino(e)) || [];
    message.controllerTransferCases = object.controller_transfer_cases?.map(e => ControllerTransferCase.fromAmino(e)) || [];
    message.reporterRateLimits = object.reporter_rate_limits?.map(e => ReporterRateLimit.fromAmino(e)) || [];
    message.refileCooldowns = object.refile_cooldowns?.map(e => RefileCooldown.fromAmino(e)) || [];
    message.tier1LastSlash = object.tier1_last_slash?.map(e => Tier1LastSlash.fromAmino(e)) || [];
    if (object.next_report_id !== undefined && object.next_report_id !== null) {
      message.nextReportId = BigInt(object.next_report_id);
    }
    if (object.next_escrow_id !== undefined && object.next_escrow_id !== null) {
      message.nextEscrowId = BigInt(object.next_escrow_id);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.serviceTypes) {
      obj.service_types = message.serviceTypes.map(e => e ? ServiceTypeConfig.toAmino(e) : undefined);
    } else {
      obj.service_types = message.serviceTypes;
    }
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
    if (message.archivedOperators) {
      obj.archived_operators = message.archivedOperators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.archived_operators = message.archivedOperators;
    }
    if (message.reports) {
      obj.reports = message.reports.map(e => e ? Report.toAmino(e) : undefined);
    } else {
      obj.reports = message.reports;
    }
    if (message.tier1Escrow) {
      obj.tier1_escrow = message.tier1Escrow.map(e => e ? Tier1EscrowEntry.toAmino(e) : undefined);
    } else {
      obj.tier1_escrow = message.tier1Escrow;
    }
    if (message.controllerTransferCases) {
      obj.controller_transfer_cases = message.controllerTransferCases.map(e => e ? ControllerTransferCase.toAmino(e) : undefined);
    } else {
      obj.controller_transfer_cases = message.controllerTransferCases;
    }
    if (message.reporterRateLimits) {
      obj.reporter_rate_limits = message.reporterRateLimits.map(e => e ? ReporterRateLimit.toAmino(e) : undefined);
    } else {
      obj.reporter_rate_limits = message.reporterRateLimits;
    }
    if (message.refileCooldowns) {
      obj.refile_cooldowns = message.refileCooldowns.map(e => e ? RefileCooldown.toAmino(e) : undefined);
    } else {
      obj.refile_cooldowns = message.refileCooldowns;
    }
    if (message.tier1LastSlash) {
      obj.tier1_last_slash = message.tier1LastSlash.map(e => e ? Tier1LastSlash.toAmino(e) : undefined);
    } else {
      obj.tier1_last_slash = message.tier1LastSlash;
    }
    obj.next_report_id = message.nextReportId !== BigInt(0) ? message.nextReportId?.toString() : undefined;
    obj.next_escrow_id = message.nextEscrowId !== BigInt(0) ? message.nextEscrowId?.toString() : undefined;
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
      typeUrl: "/sparkdream.service.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};