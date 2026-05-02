//@ts-nocheck
/** GovActionType represents the type of governance action. */
export enum GovActionType {
  GOV_ACTION_TYPE_UNSPECIFIED = 0,
  GOV_ACTION_TYPE_WARNING = 1,
  GOV_ACTION_TYPE_DEMOTION = 2,
  GOV_ACTION_TYPE_ZEROING = 3,
  GOV_ACTION_TYPE_TAG_REMOVAL = 4,
  GOV_ACTION_TYPE_FORUM_PAUSE = 5,
  GOV_ACTION_TYPE_THREAD_LOCK = 6,
  GOV_ACTION_TYPE_THREAD_MOVE = 7,
  UNRECOGNIZED = -1,
}
export const GovActionTypeAmino = GovActionType;
export function govActionTypeFromJSON(object: any): GovActionType {
  switch (object) {
    case 0:
    case "GOV_ACTION_TYPE_UNSPECIFIED":
      return GovActionType.GOV_ACTION_TYPE_UNSPECIFIED;
    case 1:
    case "GOV_ACTION_TYPE_WARNING":
      return GovActionType.GOV_ACTION_TYPE_WARNING;
    case 2:
    case "GOV_ACTION_TYPE_DEMOTION":
      return GovActionType.GOV_ACTION_TYPE_DEMOTION;
    case 3:
    case "GOV_ACTION_TYPE_ZEROING":
      return GovActionType.GOV_ACTION_TYPE_ZEROING;
    case 4:
    case "GOV_ACTION_TYPE_TAG_REMOVAL":
      return GovActionType.GOV_ACTION_TYPE_TAG_REMOVAL;
    case 5:
    case "GOV_ACTION_TYPE_FORUM_PAUSE":
      return GovActionType.GOV_ACTION_TYPE_FORUM_PAUSE;
    case 6:
    case "GOV_ACTION_TYPE_THREAD_LOCK":
      return GovActionType.GOV_ACTION_TYPE_THREAD_LOCK;
    case 7:
    case "GOV_ACTION_TYPE_THREAD_MOVE":
      return GovActionType.GOV_ACTION_TYPE_THREAD_MOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GovActionType.UNRECOGNIZED;
  }
}
export function govActionTypeToJSON(object: GovActionType): string {
  switch (object) {
    case GovActionType.GOV_ACTION_TYPE_UNSPECIFIED:
      return "GOV_ACTION_TYPE_UNSPECIFIED";
    case GovActionType.GOV_ACTION_TYPE_WARNING:
      return "GOV_ACTION_TYPE_WARNING";
    case GovActionType.GOV_ACTION_TYPE_DEMOTION:
      return "GOV_ACTION_TYPE_DEMOTION";
    case GovActionType.GOV_ACTION_TYPE_ZEROING:
      return "GOV_ACTION_TYPE_ZEROING";
    case GovActionType.GOV_ACTION_TYPE_TAG_REMOVAL:
      return "GOV_ACTION_TYPE_TAG_REMOVAL";
    case GovActionType.GOV_ACTION_TYPE_FORUM_PAUSE:
      return "GOV_ACTION_TYPE_FORUM_PAUSE";
    case GovActionType.GOV_ACTION_TYPE_THREAD_LOCK:
      return "GOV_ACTION_TYPE_THREAD_LOCK";
    case GovActionType.GOV_ACTION_TYPE_THREAD_MOVE:
      return "GOV_ACTION_TYPE_THREAD_MOVE";
    case GovActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MemberReportStatus represents the status of a member report. */
export enum MemberReportStatus {
  MEMBER_REPORT_STATUS_UNSPECIFIED = 0,
  MEMBER_REPORT_STATUS_PENDING = 1,
  MEMBER_REPORT_STATUS_ESCALATED = 2,
  MEMBER_REPORT_STATUS_RESOLVED = 3,
  MEMBER_REPORT_STATUS_META_APPEALED = 4,
  UNRECOGNIZED = -1,
}
export const MemberReportStatusAmino = MemberReportStatus;
export function memberReportStatusFromJSON(object: any): MemberReportStatus {
  switch (object) {
    case 0:
    case "MEMBER_REPORT_STATUS_UNSPECIFIED":
      return MemberReportStatus.MEMBER_REPORT_STATUS_UNSPECIFIED;
    case 1:
    case "MEMBER_REPORT_STATUS_PENDING":
      return MemberReportStatus.MEMBER_REPORT_STATUS_PENDING;
    case 2:
    case "MEMBER_REPORT_STATUS_ESCALATED":
      return MemberReportStatus.MEMBER_REPORT_STATUS_ESCALATED;
    case 3:
    case "MEMBER_REPORT_STATUS_RESOLVED":
      return MemberReportStatus.MEMBER_REPORT_STATUS_RESOLVED;
    case 4:
    case "MEMBER_REPORT_STATUS_META_APPEALED":
      return MemberReportStatus.MEMBER_REPORT_STATUS_META_APPEALED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MemberReportStatus.UNRECOGNIZED;
  }
}
export function memberReportStatusToJSON(object: MemberReportStatus): string {
  switch (object) {
    case MemberReportStatus.MEMBER_REPORT_STATUS_UNSPECIFIED:
      return "MEMBER_REPORT_STATUS_UNSPECIFIED";
    case MemberReportStatus.MEMBER_REPORT_STATUS_PENDING:
      return "MEMBER_REPORT_STATUS_PENDING";
    case MemberReportStatus.MEMBER_REPORT_STATUS_ESCALATED:
      return "MEMBER_REPORT_STATUS_ESCALATED";
    case MemberReportStatus.MEMBER_REPORT_STATUS_RESOLVED:
      return "MEMBER_REPORT_STATUS_RESOLVED";
    case MemberReportStatus.MEMBER_REPORT_STATUS_META_APPEALED:
      return "MEMBER_REPORT_STATUS_META_APPEALED";
    case MemberReportStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** GovAppealStatus represents the status of a governance appeal. */
export enum GovAppealStatus {
  GOV_APPEAL_STATUS_UNSPECIFIED = 0,
  GOV_APPEAL_STATUS_PENDING = 1,
  GOV_APPEAL_STATUS_UPHELD = 2,
  GOV_APPEAL_STATUS_OVERTURNED = 3,
  GOV_APPEAL_STATUS_TIMEOUT = 4,
  UNRECOGNIZED = -1,
}
export const GovAppealStatusAmino = GovAppealStatus;
export function govAppealStatusFromJSON(object: any): GovAppealStatus {
  switch (object) {
    case 0:
    case "GOV_APPEAL_STATUS_UNSPECIFIED":
      return GovAppealStatus.GOV_APPEAL_STATUS_UNSPECIFIED;
    case 1:
    case "GOV_APPEAL_STATUS_PENDING":
      return GovAppealStatus.GOV_APPEAL_STATUS_PENDING;
    case 2:
    case "GOV_APPEAL_STATUS_UPHELD":
      return GovAppealStatus.GOV_APPEAL_STATUS_UPHELD;
    case 3:
    case "GOV_APPEAL_STATUS_OVERTURNED":
      return GovAppealStatus.GOV_APPEAL_STATUS_OVERTURNED;
    case 4:
    case "GOV_APPEAL_STATUS_TIMEOUT":
      return GovAppealStatus.GOV_APPEAL_STATUS_TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GovAppealStatus.UNRECOGNIZED;
  }
}
export function govAppealStatusToJSON(object: GovAppealStatus): string {
  switch (object) {
    case GovAppealStatus.GOV_APPEAL_STATUS_UNSPECIFIED:
      return "GOV_APPEAL_STATUS_UNSPECIFIED";
    case GovAppealStatus.GOV_APPEAL_STATUS_PENDING:
      return "GOV_APPEAL_STATUS_PENDING";
    case GovAppealStatus.GOV_APPEAL_STATUS_UPHELD:
      return "GOV_APPEAL_STATUS_UPHELD";
    case GovAppealStatus.GOV_APPEAL_STATUS_OVERTURNED:
      return "GOV_APPEAL_STATUS_OVERTURNED";
    case GovAppealStatus.GOV_APPEAL_STATUS_TIMEOUT:
      return "GOV_APPEAL_STATUS_TIMEOUT";
    case GovAppealStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}