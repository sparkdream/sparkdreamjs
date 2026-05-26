//@ts-nocheck
/**
 * OperatorStatus is the lifecycle status of a service-operator record.
 * ACTIVE | UNDERFUNDED | UNBONDING are live; SLASHED | RETIRED are terminal
 * and held in ArchivedOperators (see x-service-spec.md §3.1).
 */
export enum OperatorStatus {
  OPERATOR_STATUS_UNSPECIFIED = 0,
  OPERATOR_STATUS_ACTIVE = 1,
  OPERATOR_STATUS_UNDERFUNDED = 2,
  OPERATOR_STATUS_UNBONDING = 3,
  OPERATOR_STATUS_SLASHED = 4,
  OPERATOR_STATUS_RETIRED = 5,
  UNRECOGNIZED = -1,
}
export const OperatorStatusAmino = OperatorStatus;
export function operatorStatusFromJSON(object: any): OperatorStatus {
  switch (object) {
    case 0:
    case "OPERATOR_STATUS_UNSPECIFIED":
      return OperatorStatus.OPERATOR_STATUS_UNSPECIFIED;
    case 1:
    case "OPERATOR_STATUS_ACTIVE":
      return OperatorStatus.OPERATOR_STATUS_ACTIVE;
    case 2:
    case "OPERATOR_STATUS_UNDERFUNDED":
      return OperatorStatus.OPERATOR_STATUS_UNDERFUNDED;
    case 3:
    case "OPERATOR_STATUS_UNBONDING":
      return OperatorStatus.OPERATOR_STATUS_UNBONDING;
    case 4:
    case "OPERATOR_STATUS_SLASHED":
      return OperatorStatus.OPERATOR_STATUS_SLASHED;
    case 5:
    case "OPERATOR_STATUS_RETIRED":
      return OperatorStatus.OPERATOR_STATUS_RETIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperatorStatus.UNRECOGNIZED;
  }
}
export function operatorStatusToJSON(object: OperatorStatus): string {
  switch (object) {
    case OperatorStatus.OPERATOR_STATUS_UNSPECIFIED:
      return "OPERATOR_STATUS_UNSPECIFIED";
    case OperatorStatus.OPERATOR_STATUS_ACTIVE:
      return "OPERATOR_STATUS_ACTIVE";
    case OperatorStatus.OPERATOR_STATUS_UNDERFUNDED:
      return "OPERATOR_STATUS_UNDERFUNDED";
    case OperatorStatus.OPERATOR_STATUS_UNBONDING:
      return "OPERATOR_STATUS_UNBONDING";
    case OperatorStatus.OPERATOR_STATUS_SLASHED:
      return "OPERATOR_STATUS_SLASHED";
    case OperatorStatus.OPERATOR_STATUS_RETIRED:
      return "OPERATOR_STATUS_RETIRED";
    case OperatorStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ReportStatus is the lifecycle status of a Report (see §3.4.5). */
export enum ReportStatus {
  REPORT_STATUS_UNSPECIFIED = 0,
  REPORT_STATUS_PENDING = 1,
  REPORT_STATUS_RESOLVED_T1 = 2,
  REPORT_STATUS_ESCALATED = 3,
  REPORT_STATUS_RESOLVED_T2 = 4,
  REPORT_STATUS_AUTO_DISMISSED = 5,
  REPORT_STATUS_AUTO_TIMEOUT = 6,
  REPORT_STATUS_CLOSED_OPERATOR_DISSOLVED = 7,
  UNRECOGNIZED = -1,
}
export const ReportStatusAmino = ReportStatus;
export function reportStatusFromJSON(object: any): ReportStatus {
  switch (object) {
    case 0:
    case "REPORT_STATUS_UNSPECIFIED":
      return ReportStatus.REPORT_STATUS_UNSPECIFIED;
    case 1:
    case "REPORT_STATUS_PENDING":
      return ReportStatus.REPORT_STATUS_PENDING;
    case 2:
    case "REPORT_STATUS_RESOLVED_T1":
      return ReportStatus.REPORT_STATUS_RESOLVED_T1;
    case 3:
    case "REPORT_STATUS_ESCALATED":
      return ReportStatus.REPORT_STATUS_ESCALATED;
    case 4:
    case "REPORT_STATUS_RESOLVED_T2":
      return ReportStatus.REPORT_STATUS_RESOLVED_T2;
    case 5:
    case "REPORT_STATUS_AUTO_DISMISSED":
      return ReportStatus.REPORT_STATUS_AUTO_DISMISSED;
    case 6:
    case "REPORT_STATUS_AUTO_TIMEOUT":
      return ReportStatus.REPORT_STATUS_AUTO_TIMEOUT;
    case 7:
    case "REPORT_STATUS_CLOSED_OPERATOR_DISSOLVED":
      return ReportStatus.REPORT_STATUS_CLOSED_OPERATOR_DISSOLVED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReportStatus.UNRECOGNIZED;
  }
}
export function reportStatusToJSON(object: ReportStatus): string {
  switch (object) {
    case ReportStatus.REPORT_STATUS_UNSPECIFIED:
      return "REPORT_STATUS_UNSPECIFIED";
    case ReportStatus.REPORT_STATUS_PENDING:
      return "REPORT_STATUS_PENDING";
    case ReportStatus.REPORT_STATUS_RESOLVED_T1:
      return "REPORT_STATUS_RESOLVED_T1";
    case ReportStatus.REPORT_STATUS_ESCALATED:
      return "REPORT_STATUS_ESCALATED";
    case ReportStatus.REPORT_STATUS_RESOLVED_T2:
      return "REPORT_STATUS_RESOLVED_T2";
    case ReportStatus.REPORT_STATUS_AUTO_DISMISSED:
      return "REPORT_STATUS_AUTO_DISMISSED";
    case ReportStatus.REPORT_STATUS_AUTO_TIMEOUT:
      return "REPORT_STATUS_AUTO_TIMEOUT";
    case ReportStatus.REPORT_STATUS_CLOSED_OPERATOR_DISSOLVED:
      return "REPORT_STATUS_CLOSED_OPERATOR_DISSOLVED";
    case ReportStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ResolveVerdict is the controller's verdict on a PENDING report (§5.2). */
export enum ResolveVerdict {
  RESOLVE_VERDICT_UNSPECIFIED = 0,
  RESOLVE_VERDICT_T1_SLASH = 1,
  RESOLVE_VERDICT_T1_DISMISS = 2,
  RESOLVE_VERDICT_ESCALATE_TO_JURY = 3,
  UNRECOGNIZED = -1,
}
export const ResolveVerdictAmino = ResolveVerdict;
export function resolveVerdictFromJSON(object: any): ResolveVerdict {
  switch (object) {
    case 0:
    case "RESOLVE_VERDICT_UNSPECIFIED":
      return ResolveVerdict.RESOLVE_VERDICT_UNSPECIFIED;
    case 1:
    case "RESOLVE_VERDICT_T1_SLASH":
      return ResolveVerdict.RESOLVE_VERDICT_T1_SLASH;
    case 2:
    case "RESOLVE_VERDICT_T1_DISMISS":
      return ResolveVerdict.RESOLVE_VERDICT_T1_DISMISS;
    case 3:
    case "RESOLVE_VERDICT_ESCALATE_TO_JURY":
      return ResolveVerdict.RESOLVE_VERDICT_ESCALATE_TO_JURY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResolveVerdict.UNRECOGNIZED;
  }
}
export function resolveVerdictToJSON(object: ResolveVerdict): string {
  switch (object) {
    case ResolveVerdict.RESOLVE_VERDICT_UNSPECIFIED:
      return "RESOLVE_VERDICT_UNSPECIFIED";
    case ResolveVerdict.RESOLVE_VERDICT_T1_SLASH:
      return "RESOLVE_VERDICT_T1_SLASH";
    case ResolveVerdict.RESOLVE_VERDICT_T1_DISMISS:
      return "RESOLVE_VERDICT_T1_DISMISS";
    case ResolveVerdict.RESOLVE_VERDICT_ESCALATE_TO_JURY:
      return "RESOLVE_VERDICT_ESCALATE_TO_JURY";
    case ResolveVerdict.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** JuryVerdict is the jury's verdict on a service.slash case (§5.2). */
export enum JuryVerdict {
  JURY_VERDICT_UNSPECIFIED = 0,
  JURY_VERDICT_ACCEPT = 1,
  JURY_VERDICT_REDUCE = 2,
  JURY_VERDICT_REJECT = 3,
  UNRECOGNIZED = -1,
}
export const JuryVerdictAmino = JuryVerdict;
export function juryVerdictFromJSON(object: any): JuryVerdict {
  switch (object) {
    case 0:
    case "JURY_VERDICT_UNSPECIFIED":
      return JuryVerdict.JURY_VERDICT_UNSPECIFIED;
    case 1:
    case "JURY_VERDICT_ACCEPT":
      return JuryVerdict.JURY_VERDICT_ACCEPT;
    case 2:
    case "JURY_VERDICT_REDUCE":
      return JuryVerdict.JURY_VERDICT_REDUCE;
    case 3:
    case "JURY_VERDICT_REJECT":
      return JuryVerdict.JURY_VERDICT_REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return JuryVerdict.UNRECOGNIZED;
  }
}
export function juryVerdictToJSON(object: JuryVerdict): string {
  switch (object) {
    case JuryVerdict.JURY_VERDICT_UNSPECIFIED:
      return "JURY_VERDICT_UNSPECIFIED";
    case JuryVerdict.JURY_VERDICT_ACCEPT:
      return "JURY_VERDICT_ACCEPT";
    case JuryVerdict.JURY_VERDICT_REDUCE:
      return "JURY_VERDICT_REDUCE";
    case JuryVerdict.JURY_VERDICT_REJECT:
      return "JURY_VERDICT_REJECT";
    case JuryVerdict.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * TransferVerdict is the jury's verdict on a service.controller_transfer
 * case (§5.4). Binary — no REDUCE.
 */
export enum TransferVerdict {
  TRANSFER_VERDICT_UNSPECIFIED = 0,
  TRANSFER_VERDICT_ACCEPT = 1,
  TRANSFER_VERDICT_REJECT = 2,
  UNRECOGNIZED = -1,
}
export const TransferVerdictAmino = TransferVerdict;
export function transferVerdictFromJSON(object: any): TransferVerdict {
  switch (object) {
    case 0:
    case "TRANSFER_VERDICT_UNSPECIFIED":
      return TransferVerdict.TRANSFER_VERDICT_UNSPECIFIED;
    case 1:
    case "TRANSFER_VERDICT_ACCEPT":
      return TransferVerdict.TRANSFER_VERDICT_ACCEPT;
    case 2:
    case "TRANSFER_VERDICT_REJECT":
      return TransferVerdict.TRANSFER_VERDICT_REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferVerdict.UNRECOGNIZED;
  }
}
export function transferVerdictToJSON(object: TransferVerdict): string {
  switch (object) {
    case TransferVerdict.TRANSFER_VERDICT_UNSPECIFIED:
      return "TRANSFER_VERDICT_UNSPECIFIED";
    case TransferVerdict.TRANSFER_VERDICT_ACCEPT:
      return "TRANSFER_VERDICT_ACCEPT";
    case TransferVerdict.TRANSFER_VERDICT_REJECT:
      return "TRANSFER_VERDICT_REJECT";
    case TransferVerdict.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * SlashSource identifies the origin of a slash for keeper-level invariant
 * dispatch (§6.7). Internal to the keeper; not serialized in events.
 */
export enum SlashSource {
  SLASH_SOURCE_UNSPECIFIED = 0,
  SLASH_SOURCE_TIER1 = 1,
  SLASH_SOURCE_TIER2_JURY = 2,
  SLASH_SOURCE_MIGRATION = 3,
  UNRECOGNIZED = -1,
}
export const SlashSourceAmino = SlashSource;
export function slashSourceFromJSON(object: any): SlashSource {
  switch (object) {
    case 0:
    case "SLASH_SOURCE_UNSPECIFIED":
      return SlashSource.SLASH_SOURCE_UNSPECIFIED;
    case 1:
    case "SLASH_SOURCE_TIER1":
      return SlashSource.SLASH_SOURCE_TIER1;
    case 2:
    case "SLASH_SOURCE_TIER2_JURY":
      return SlashSource.SLASH_SOURCE_TIER2_JURY;
    case 3:
    case "SLASH_SOURCE_MIGRATION":
      return SlashSource.SLASH_SOURCE_MIGRATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SlashSource.UNRECOGNIZED;
  }
}
export function slashSourceToJSON(object: SlashSource): string {
  switch (object) {
    case SlashSource.SLASH_SOURCE_UNSPECIFIED:
      return "SLASH_SOURCE_UNSPECIFIED";
    case SlashSource.SLASH_SOURCE_TIER1:
      return "SLASH_SOURCE_TIER1";
    case SlashSource.SLASH_SOURCE_TIER2_JURY:
      return "SLASH_SOURCE_TIER2_JURY";
    case SlashSource.SLASH_SOURCE_MIGRATION:
      return "SLASH_SOURCE_MIGRATION";
    case SlashSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * UnbondSource distinguishes voluntary vs forced unbonding for telemetry
 * and event emission (§12 events).
 */
export enum UnbondSource {
  UNBOND_SOURCE_UNSPECIFIED = 0,
  UNBOND_SOURCE_VOLUNTARY = 1,
  UNBOND_SOURCE_FORCED_UNDERFUNDED = 2,
  UNRECOGNIZED = -1,
}
export const UnbondSourceAmino = UnbondSource;
export function unbondSourceFromJSON(object: any): UnbondSource {
  switch (object) {
    case 0:
    case "UNBOND_SOURCE_UNSPECIFIED":
      return UnbondSource.UNBOND_SOURCE_UNSPECIFIED;
    case 1:
    case "UNBOND_SOURCE_VOLUNTARY":
      return UnbondSource.UNBOND_SOURCE_VOLUNTARY;
    case 2:
    case "UNBOND_SOURCE_FORCED_UNDERFUNDED":
      return UnbondSource.UNBOND_SOURCE_FORCED_UNDERFUNDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UnbondSource.UNRECOGNIZED;
  }
}
export function unbondSourceToJSON(object: UnbondSource): string {
  switch (object) {
    case UnbondSource.UNBOND_SOURCE_UNSPECIFIED:
      return "UNBOND_SOURCE_UNSPECIFIED";
    case UnbondSource.UNBOND_SOURCE_VOLUNTARY:
      return "UNBOND_SOURCE_VOLUNTARY";
    case UnbondSource.UNBOND_SOURCE_FORCED_UNDERFUNDED:
      return "UNBOND_SOURCE_FORCED_UNDERFUNDED";
    case UnbondSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}