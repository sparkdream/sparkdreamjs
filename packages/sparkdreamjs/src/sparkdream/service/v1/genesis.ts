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
import { Checkpoint, CheckpointAmino } from "./checkpoint";
import { SystemReportRateLimit, SystemReportRateLimitAmino } from "./system_report_rate_limit";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
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
  /**
   * checkpoints are the latest MsgSubmitCheckpoint record per
   * (service_type, operator). Liveness deadlines are not exported; they
   * are rebuilt from checkpoints and each type's checkpoint_max_lag_blocks
   * at import.
   */
  checkpoints: Checkpoint[];
  /**
   * system_report_dedup is the OpenSystemReport idempotency index
   * (caller_module, dedupe_key) -> report_id. Without it a caller retry
   * after an export/import would open a duplicate report.
   */
  systemReportDedup: SystemReportDedupEntry[];
  /**
   * system_report_rate_limits is the per-caller-module sliding-window
   * ring buffer for OpenSystemReport.
   */
  systemReportRateLimits: SystemReportRateLimit[];
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
  /**
   * checkpoints are the latest MsgSubmitCheckpoint record per
   * (service_type, operator). Liveness deadlines are not exported; they
   * are rebuilt from checkpoints and each type's checkpoint_max_lag_blocks
   * at import.
   */
  checkpoints?: CheckpointAmino[];
  /**
   * system_report_dedup is the OpenSystemReport idempotency index
   * (caller_module, dedupe_key) -> report_id. Without it a caller retry
   * after an export/import would open a duplicate report.
   */
  system_report_dedup?: SystemReportDedupEntryAmino[];
  /**
   * system_report_rate_limits is the per-caller-module sliding-window
   * ring buffer for OpenSystemReport.
   */
  system_report_rate_limits?: SystemReportRateLimitAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.service.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * SystemReportDedupEntry is one SystemReportDedup map entry.
 * @name SystemReportDedupEntry
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.SystemReportDedupEntry
 */
export interface SystemReportDedupEntry {
  callerModule: string;
  dedupeKey: Uint8Array;
  reportId: bigint;
}
export interface SystemReportDedupEntryProtoMsg {
  typeUrl: "/sparkdream.service.v1.SystemReportDedupEntry";
  value: Uint8Array;
}
/**
 * SystemReportDedupEntry is one SystemReportDedup map entry.
 * @name SystemReportDedupEntryAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.SystemReportDedupEntry
 */
export interface SystemReportDedupEntryAmino {
  caller_module?: string;
  dedupe_key?: string;
  report_id?: string;
}
export interface SystemReportDedupEntryAminoMsg {
  type: "/sparkdream.service.v1.SystemReportDedupEntry";
  value: SystemReportDedupEntryAmino;
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
    nextEscrowId: BigInt(0),
    checkpoints: [],
    systemReportDedup: [],
    systemReportRateLimits: []
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
    for (const v of message.checkpoints) {
      Checkpoint.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.systemReportDedup) {
      SystemReportDedupEntry.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.systemReportRateLimits) {
      SystemReportRateLimit.encode(v!, writer.uint32(122).fork()).ldelim();
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
        case 13:
          message.checkpoints.push(Checkpoint.decode(reader, reader.uint32()));
          break;
        case 14:
          message.systemReportDedup.push(SystemReportDedupEntry.decode(reader, reader.uint32()));
          break;
        case 15:
          message.systemReportRateLimits.push(SystemReportRateLimit.decode(reader, reader.uint32()));
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
    message.checkpoints = object.checkpoints?.map(e => Checkpoint.fromPartial(e)) || [];
    message.systemReportDedup = object.systemReportDedup?.map(e => SystemReportDedupEntry.fromPartial(e)) || [];
    message.systemReportRateLimits = object.systemReportRateLimits?.map(e => SystemReportRateLimit.fromPartial(e)) || [];
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
    message.checkpoints = object.checkpoints?.map(e => Checkpoint.fromAmino(e)) || [];
    message.systemReportDedup = object.system_report_dedup?.map(e => SystemReportDedupEntry.fromAmino(e)) || [];
    message.systemReportRateLimits = object.system_report_rate_limits?.map(e => SystemReportRateLimit.fromAmino(e)) || [];
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
    if (message.checkpoints) {
      obj.checkpoints = message.checkpoints.map(e => e ? Checkpoint.toAmino(e) : undefined);
    } else {
      obj.checkpoints = message.checkpoints;
    }
    if (message.systemReportDedup) {
      obj.system_report_dedup = message.systemReportDedup.map(e => e ? SystemReportDedupEntry.toAmino(e) : undefined);
    } else {
      obj.system_report_dedup = message.systemReportDedup;
    }
    if (message.systemReportRateLimits) {
      obj.system_report_rate_limits = message.systemReportRateLimits.map(e => e ? SystemReportRateLimit.toAmino(e) : undefined);
    } else {
      obj.system_report_rate_limits = message.systemReportRateLimits;
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
      typeUrl: "/sparkdream.service.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseSystemReportDedupEntry(): SystemReportDedupEntry {
  return {
    callerModule: "",
    dedupeKey: new Uint8Array(),
    reportId: BigInt(0)
  };
}
/**
 * SystemReportDedupEntry is one SystemReportDedup map entry.
 * @name SystemReportDedupEntry
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.SystemReportDedupEntry
 */
export const SystemReportDedupEntry = {
  typeUrl: "/sparkdream.service.v1.SystemReportDedupEntry",
  encode(message: SystemReportDedupEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.callerModule !== "") {
      writer.uint32(10).string(message.callerModule);
    }
    if (message.dedupeKey.length !== 0) {
      writer.uint32(18).bytes(message.dedupeKey);
    }
    if (message.reportId !== BigInt(0)) {
      writer.uint32(24).uint64(message.reportId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SystemReportDedupEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemReportDedupEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callerModule = reader.string();
          break;
        case 2:
          message.dedupeKey = reader.bytes();
          break;
        case 3:
          message.reportId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SystemReportDedupEntry>): SystemReportDedupEntry {
    const message = createBaseSystemReportDedupEntry();
    message.callerModule = object.callerModule ?? "";
    message.dedupeKey = object.dedupeKey ?? new Uint8Array();
    message.reportId = object.reportId !== undefined && object.reportId !== null ? BigInt(object.reportId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SystemReportDedupEntryAmino): SystemReportDedupEntry {
    const message = createBaseSystemReportDedupEntry();
    if (object.caller_module !== undefined && object.caller_module !== null) {
      message.callerModule = object.caller_module;
    }
    if (object.dedupe_key !== undefined && object.dedupe_key !== null) {
      message.dedupeKey = bytesFromBase64(object.dedupe_key);
    }
    if (object.report_id !== undefined && object.report_id !== null) {
      message.reportId = BigInt(object.report_id);
    }
    return message;
  },
  toAmino(message: SystemReportDedupEntry): SystemReportDedupEntryAmino {
    const obj: any = {};
    obj.caller_module = message.callerModule === "" ? undefined : message.callerModule;
    obj.dedupe_key = message.dedupeKey ? base64FromBytes(message.dedupeKey) : undefined;
    obj.report_id = message.reportId !== BigInt(0) ? message.reportId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SystemReportDedupEntryAminoMsg): SystemReportDedupEntry {
    return SystemReportDedupEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: SystemReportDedupEntryProtoMsg): SystemReportDedupEntry {
    return SystemReportDedupEntry.decode(message.value);
  },
  toProto(message: SystemReportDedupEntry): Uint8Array {
    return SystemReportDedupEntry.encode(message).finish();
  },
  toProtoMsg(message: SystemReportDedupEntry): SystemReportDedupEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.SystemReportDedupEntry",
      value: SystemReportDedupEntry.encode(message).finish()
    };
  }
};