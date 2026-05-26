//@ts-nocheck
import { ReportStatus } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Report is a single report filed against an operator (see x-service-spec.md
 * §3.4 and §4.1). Keyed by `report_id` (auto-incrementing uint64); secondary
 * indexes by operator (ReportsByOperator) and by status for the PENDING /
 * ESCALATED EndBlocker sweeps.
 * @name Report
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Report
 */
export interface Report {
  /**
   * report_id is the auto-incrementing primary key (NextReportID counter).
   */
  reportId: bigint;
  /**
   * operator_address is the target operator's bech32 address.
   */
  operatorAddress: string;
  /**
   * service_type identifies which operator record this report targets
   * (an address may have multiple operators across service types).
   */
  serviceType: string;
  /**
   * reporter is the bech32 address of the member who filed the report.
   */
  reporter: string;
  /**
   * reason is free-form human-readable text, capped by `max_reason_bytes`.
   */
  reason: string;
  /**
   * filed_at is the height the report was filed.
   */
  filedAt: bigint;
  /**
   * escalated_at is the height the report transitioned to ESCALATED; 0
   * otherwise. Feeds the auto-timeout sweep (§3.6 queue 3).
   */
  escalatedAt: bigint;
  /**
   * status is the lifecycle status (§3.4.5).
   */
  status: ReportStatus;
  /**
   * proposed_slash_bps is set when the controller escalates with a
   * specific proposal (or carried forward on operator contest); the jury
   * verdict is bounded by this value (§5.2).
   */
  proposedSlashBps: number;
  /**
   * slash_amount is the SPARK amount actually slashed once the report
   * resolves, in bond-denom micro-units. Zero for PENDING /
   * RESOLVED_T1-with-dismiss / AUTO_*. Wrapped into sdk.Coin with the
   * chain's bond denom at the point of use.
   */
  slashAmount: string;
  /**
   * deposit is the SPARK the reporter escrowed at filing time
   * (`report_deposit_amount` param), in bond-denom micro-units. Held in
   * the report deposit pool until resolution. Wrapped into sdk.Coin with
   * the chain's bond denom at the point of use.
   */
  deposit: string;
  /**
   * jury_case_id is the x/rep case id opened on escalation; 0 if never
   * escalated.
   */
  juryCaseId: bigint;
}
export interface ReportProtoMsg {
  typeUrl: "/sparkdream.service.v1.Report";
  value: Uint8Array;
}
/**
 * Report is a single report filed against an operator (see x-service-spec.md
 * §3.4 and §4.1). Keyed by `report_id` (auto-incrementing uint64); secondary
 * indexes by operator (ReportsByOperator) and by status for the PENDING /
 * ESCALATED EndBlocker sweeps.
 * @name ReportAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Report
 */
export interface ReportAmino {
  /**
   * report_id is the auto-incrementing primary key (NextReportID counter).
   */
  report_id?: string;
  /**
   * operator_address is the target operator's bech32 address.
   */
  operator_address?: string;
  /**
   * service_type identifies which operator record this report targets
   * (an address may have multiple operators across service types).
   */
  service_type?: string;
  /**
   * reporter is the bech32 address of the member who filed the report.
   */
  reporter?: string;
  /**
   * reason is free-form human-readable text, capped by `max_reason_bytes`.
   */
  reason?: string;
  /**
   * filed_at is the height the report was filed.
   */
  filed_at?: string;
  /**
   * escalated_at is the height the report transitioned to ESCALATED; 0
   * otherwise. Feeds the auto-timeout sweep (§3.6 queue 3).
   */
  escalated_at?: string;
  /**
   * status is the lifecycle status (§3.4.5).
   */
  status?: ReportStatus;
  /**
   * proposed_slash_bps is set when the controller escalates with a
   * specific proposal (or carried forward on operator contest); the jury
   * verdict is bounded by this value (§5.2).
   */
  proposed_slash_bps?: number;
  /**
   * slash_amount is the SPARK amount actually slashed once the report
   * resolves, in bond-denom micro-units. Zero for PENDING /
   * RESOLVED_T1-with-dismiss / AUTO_*. Wrapped into sdk.Coin with the
   * chain's bond denom at the point of use.
   */
  slash_amount?: string;
  /**
   * deposit is the SPARK the reporter escrowed at filing time
   * (`report_deposit_amount` param), in bond-denom micro-units. Held in
   * the report deposit pool until resolution. Wrapped into sdk.Coin with
   * the chain's bond denom at the point of use.
   */
  deposit?: string;
  /**
   * jury_case_id is the x/rep case id opened on escalation; 0 if never
   * escalated.
   */
  jury_case_id?: string;
}
export interface ReportAminoMsg {
  type: "sparkdream/x/service/Report";
  value: ReportAmino;
}
function createBaseReport(): Report {
  return {
    reportId: BigInt(0),
    operatorAddress: "",
    serviceType: "",
    reporter: "",
    reason: "",
    filedAt: BigInt(0),
    escalatedAt: BigInt(0),
    status: 0,
    proposedSlashBps: 0,
    slashAmount: "",
    deposit: "",
    juryCaseId: BigInt(0)
  };
}
/**
 * Report is a single report filed against an operator (see x-service-spec.md
 * §3.4 and §4.1). Keyed by `report_id` (auto-incrementing uint64); secondary
 * indexes by operator (ReportsByOperator) and by status for the PENDING /
 * ESCALATED EndBlocker sweeps.
 * @name Report
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Report
 */
export const Report = {
  typeUrl: "/sparkdream.service.v1.Report",
  aminoType: "sparkdream/x/service/Report",
  encode(message: Report, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reportId !== BigInt(0)) {
      writer.uint32(8).uint64(message.reportId);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    if (message.serviceType !== "") {
      writer.uint32(26).string(message.serviceType);
    }
    if (message.reporter !== "") {
      writer.uint32(34).string(message.reporter);
    }
    if (message.reason !== "") {
      writer.uint32(42).string(message.reason);
    }
    if (message.filedAt !== BigInt(0)) {
      writer.uint32(48).int64(message.filedAt);
    }
    if (message.escalatedAt !== BigInt(0)) {
      writer.uint32(56).int64(message.escalatedAt);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.proposedSlashBps !== 0) {
      writer.uint32(72).uint32(message.proposedSlashBps);
    }
    if (message.slashAmount !== "") {
      writer.uint32(82).string(message.slashAmount);
    }
    if (message.deposit !== "") {
      writer.uint32(90).string(message.deposit);
    }
    if (message.juryCaseId !== BigInt(0)) {
      writer.uint32(96).uint64(message.juryCaseId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Report {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reportId = reader.uint64();
          break;
        case 2:
          message.operatorAddress = reader.string();
          break;
        case 3:
          message.serviceType = reader.string();
          break;
        case 4:
          message.reporter = reader.string();
          break;
        case 5:
          message.reason = reader.string();
          break;
        case 6:
          message.filedAt = reader.int64();
          break;
        case 7:
          message.escalatedAt = reader.int64();
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.proposedSlashBps = reader.uint32();
          break;
        case 10:
          message.slashAmount = reader.string();
          break;
        case 11:
          message.deposit = reader.string();
          break;
        case 12:
          message.juryCaseId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Report>): Report {
    const message = createBaseReport();
    message.reportId = object.reportId !== undefined && object.reportId !== null ? BigInt(object.reportId.toString()) : BigInt(0);
    message.operatorAddress = object.operatorAddress ?? "";
    message.serviceType = object.serviceType ?? "";
    message.reporter = object.reporter ?? "";
    message.reason = object.reason ?? "";
    message.filedAt = object.filedAt !== undefined && object.filedAt !== null ? BigInt(object.filedAt.toString()) : BigInt(0);
    message.escalatedAt = object.escalatedAt !== undefined && object.escalatedAt !== null ? BigInt(object.escalatedAt.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.proposedSlashBps = object.proposedSlashBps ?? 0;
    message.slashAmount = object.slashAmount ?? "";
    message.deposit = object.deposit ?? "";
    message.juryCaseId = object.juryCaseId !== undefined && object.juryCaseId !== null ? BigInt(object.juryCaseId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ReportAmino): Report {
    const message = createBaseReport();
    if (object.report_id !== undefined && object.report_id !== null) {
      message.reportId = BigInt(object.report_id);
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.reporter !== undefined && object.reporter !== null) {
      message.reporter = object.reporter;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.filed_at !== undefined && object.filed_at !== null) {
      message.filedAt = BigInt(object.filed_at);
    }
    if (object.escalated_at !== undefined && object.escalated_at !== null) {
      message.escalatedAt = BigInt(object.escalated_at);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.proposed_slash_bps !== undefined && object.proposed_slash_bps !== null) {
      message.proposedSlashBps = object.proposed_slash_bps;
    }
    if (object.slash_amount !== undefined && object.slash_amount !== null) {
      message.slashAmount = object.slash_amount;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    if (object.jury_case_id !== undefined && object.jury_case_id !== null) {
      message.juryCaseId = BigInt(object.jury_case_id);
    }
    return message;
  },
  toAmino(message: Report): ReportAmino {
    const obj: any = {};
    obj.report_id = message.reportId !== BigInt(0) ? message.reportId?.toString() : undefined;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.reporter = message.reporter === "" ? undefined : message.reporter;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.filed_at = message.filedAt !== BigInt(0) ? message.filedAt?.toString() : undefined;
    obj.escalated_at = message.escalatedAt !== BigInt(0) ? message.escalatedAt?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.proposed_slash_bps = message.proposedSlashBps === 0 ? undefined : message.proposedSlashBps;
    obj.slash_amount = message.slashAmount === "" ? undefined : message.slashAmount;
    obj.deposit = message.deposit === "" ? undefined : message.deposit;
    obj.jury_case_id = message.juryCaseId !== BigInt(0) ? message.juryCaseId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ReportAminoMsg): Report {
    return Report.fromAmino(object.value);
  },
  toAminoMsg(message: Report): ReportAminoMsg {
    return {
      type: "sparkdream/x/service/Report",
      value: Report.toAmino(message)
    };
  },
  fromProtoMsg(message: ReportProtoMsg): Report {
    return Report.decode(message.value);
  },
  toProto(message: Report): Uint8Array {
    return Report.encode(message).finish();
  },
  toProtoMsg(message: Report): ReportProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.Report",
      value: Report.encode(message).finish()
    };
  }
};