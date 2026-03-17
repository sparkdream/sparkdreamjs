//@ts-nocheck
/**
 * ModerationReason defines the reason for flagging or hiding content.
 * Shared across modules (x/forum, x/collect) for consistent moderation vocabulary.
 */
export enum ModerationReason {
  MODERATION_REASON_UNSPECIFIED = 0,
  /** MODERATION_REASON_SPAM - Unsolicited commercial content, repetitive posts */
  MODERATION_REASON_SPAM = 1,
  /** MODERATION_REASON_HARASSMENT - Personal attacks, bullying, threats */
  MODERATION_REASON_HARASSMENT = 2,
  /** MODERATION_REASON_MISINFORMATION - False claims, misleading content */
  MODERATION_REASON_MISINFORMATION = 3,
  /** MODERATION_REASON_OFF_TOPIC - Content unrelated to category/thread */
  MODERATION_REASON_OFF_TOPIC = 4,
  /** MODERATION_REASON_LOW_QUALITY - Low-effort posts, unclear content */
  MODERATION_REASON_LOW_QUALITY = 5,
  /** MODERATION_REASON_INAPPROPRIATE - Adult content, graphic material */
  MODERATION_REASON_INAPPROPRIATE = 6,
  /** MODERATION_REASON_IMPERSONATION - Pretending to be someone else */
  MODERATION_REASON_IMPERSONATION = 7,
  /** MODERATION_REASON_POLICY_VIOLATION - Violates community guidelines */
  MODERATION_REASON_POLICY_VIOLATION = 8,
  /** MODERATION_REASON_DUPLICATE - Duplicate/cross-posted content */
  MODERATION_REASON_DUPLICATE = 9,
  /** MODERATION_REASON_SCAM - Fraudulent content, phishing attempts */
  MODERATION_REASON_SCAM = 10,
  /** MODERATION_REASON_COPYRIGHT - Copyright infringement */
  MODERATION_REASON_COPYRIGHT = 11,
  /** MODERATION_REASON_OTHER - Requires custom reason field */
  MODERATION_REASON_OTHER = 12,
  UNRECOGNIZED = -1,
}
export const ModerationReasonAmino = ModerationReason;
export function moderationReasonFromJSON(object: any): ModerationReason {
  switch (object) {
    case 0:
    case "MODERATION_REASON_UNSPECIFIED":
      return ModerationReason.MODERATION_REASON_UNSPECIFIED;
    case 1:
    case "MODERATION_REASON_SPAM":
      return ModerationReason.MODERATION_REASON_SPAM;
    case 2:
    case "MODERATION_REASON_HARASSMENT":
      return ModerationReason.MODERATION_REASON_HARASSMENT;
    case 3:
    case "MODERATION_REASON_MISINFORMATION":
      return ModerationReason.MODERATION_REASON_MISINFORMATION;
    case 4:
    case "MODERATION_REASON_OFF_TOPIC":
      return ModerationReason.MODERATION_REASON_OFF_TOPIC;
    case 5:
    case "MODERATION_REASON_LOW_QUALITY":
      return ModerationReason.MODERATION_REASON_LOW_QUALITY;
    case 6:
    case "MODERATION_REASON_INAPPROPRIATE":
      return ModerationReason.MODERATION_REASON_INAPPROPRIATE;
    case 7:
    case "MODERATION_REASON_IMPERSONATION":
      return ModerationReason.MODERATION_REASON_IMPERSONATION;
    case 8:
    case "MODERATION_REASON_POLICY_VIOLATION":
      return ModerationReason.MODERATION_REASON_POLICY_VIOLATION;
    case 9:
    case "MODERATION_REASON_DUPLICATE":
      return ModerationReason.MODERATION_REASON_DUPLICATE;
    case 10:
    case "MODERATION_REASON_SCAM":
      return ModerationReason.MODERATION_REASON_SCAM;
    case 11:
    case "MODERATION_REASON_COPYRIGHT":
      return ModerationReason.MODERATION_REASON_COPYRIGHT;
    case 12:
    case "MODERATION_REASON_OTHER":
      return ModerationReason.MODERATION_REASON_OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ModerationReason.UNRECOGNIZED;
  }
}
export function moderationReasonToJSON(object: ModerationReason): string {
  switch (object) {
    case ModerationReason.MODERATION_REASON_UNSPECIFIED:
      return "MODERATION_REASON_UNSPECIFIED";
    case ModerationReason.MODERATION_REASON_SPAM:
      return "MODERATION_REASON_SPAM";
    case ModerationReason.MODERATION_REASON_HARASSMENT:
      return "MODERATION_REASON_HARASSMENT";
    case ModerationReason.MODERATION_REASON_MISINFORMATION:
      return "MODERATION_REASON_MISINFORMATION";
    case ModerationReason.MODERATION_REASON_OFF_TOPIC:
      return "MODERATION_REASON_OFF_TOPIC";
    case ModerationReason.MODERATION_REASON_LOW_QUALITY:
      return "MODERATION_REASON_LOW_QUALITY";
    case ModerationReason.MODERATION_REASON_INAPPROPRIATE:
      return "MODERATION_REASON_INAPPROPRIATE";
    case ModerationReason.MODERATION_REASON_IMPERSONATION:
      return "MODERATION_REASON_IMPERSONATION";
    case ModerationReason.MODERATION_REASON_POLICY_VIOLATION:
      return "MODERATION_REASON_POLICY_VIOLATION";
    case ModerationReason.MODERATION_REASON_DUPLICATE:
      return "MODERATION_REASON_DUPLICATE";
    case ModerationReason.MODERATION_REASON_SCAM:
      return "MODERATION_REASON_SCAM";
    case ModerationReason.MODERATION_REASON_COPYRIGHT:
      return "MODERATION_REASON_COPYRIGHT";
    case ModerationReason.MODERATION_REASON_OTHER:
      return "MODERATION_REASON_OTHER";
    case ModerationReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}