//@ts-nocheck
import { VerificationCriteria, VerificationCriteriaAmino } from "./acceptance_criteria";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
export enum InitiativeTier {
  INITIATIVE_TIER_APPRENTICE = 0,
  INITIATIVE_TIER_STANDARD = 1,
  INITIATIVE_TIER_EXPERT = 2,
  INITIATIVE_TIER_EPIC = 3,
  UNRECOGNIZED = -1,
}
export const InitiativeTierAmino = InitiativeTier;
export function initiativeTierFromJSON(object: any): InitiativeTier {
  switch (object) {
    case 0:
    case "INITIATIVE_TIER_APPRENTICE":
      return InitiativeTier.INITIATIVE_TIER_APPRENTICE;
    case 1:
    case "INITIATIVE_TIER_STANDARD":
      return InitiativeTier.INITIATIVE_TIER_STANDARD;
    case 2:
    case "INITIATIVE_TIER_EXPERT":
      return InitiativeTier.INITIATIVE_TIER_EXPERT;
    case 3:
    case "INITIATIVE_TIER_EPIC":
      return InitiativeTier.INITIATIVE_TIER_EPIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InitiativeTier.UNRECOGNIZED;
  }
}
export function initiativeTierToJSON(object: InitiativeTier): string {
  switch (object) {
    case InitiativeTier.INITIATIVE_TIER_APPRENTICE:
      return "INITIATIVE_TIER_APPRENTICE";
    case InitiativeTier.INITIATIVE_TIER_STANDARD:
      return "INITIATIVE_TIER_STANDARD";
    case InitiativeTier.INITIATIVE_TIER_EXPERT:
      return "INITIATIVE_TIER_EXPERT";
    case InitiativeTier.INITIATIVE_TIER_EPIC:
      return "INITIATIVE_TIER_EPIC";
    case InitiativeTier.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum InitiativeCategory {
  INITIATIVE_CATEGORY_FEATURE = 0,
  INITIATIVE_CATEGORY_BUGFIX = 1,
  INITIATIVE_CATEGORY_REFACTOR = 2,
  INITIATIVE_CATEGORY_TESTING = 3,
  INITIATIVE_CATEGORY_SECURITY = 4,
  INITIATIVE_CATEGORY_DOCUMENTATION = 5,
  INITIATIVE_CATEGORY_DESIGN = 6,
  INITIATIVE_CATEGORY_RESEARCH = 7,
  INITIATIVE_CATEGORY_REVIEW = 8,
  INITIATIVE_CATEGORY_OTHER = 9,
  UNRECOGNIZED = -1,
}
export const InitiativeCategoryAmino = InitiativeCategory;
export function initiativeCategoryFromJSON(object: any): InitiativeCategory {
  switch (object) {
    case 0:
    case "INITIATIVE_CATEGORY_FEATURE":
      return InitiativeCategory.INITIATIVE_CATEGORY_FEATURE;
    case 1:
    case "INITIATIVE_CATEGORY_BUGFIX":
      return InitiativeCategory.INITIATIVE_CATEGORY_BUGFIX;
    case 2:
    case "INITIATIVE_CATEGORY_REFACTOR":
      return InitiativeCategory.INITIATIVE_CATEGORY_REFACTOR;
    case 3:
    case "INITIATIVE_CATEGORY_TESTING":
      return InitiativeCategory.INITIATIVE_CATEGORY_TESTING;
    case 4:
    case "INITIATIVE_CATEGORY_SECURITY":
      return InitiativeCategory.INITIATIVE_CATEGORY_SECURITY;
    case 5:
    case "INITIATIVE_CATEGORY_DOCUMENTATION":
      return InitiativeCategory.INITIATIVE_CATEGORY_DOCUMENTATION;
    case 6:
    case "INITIATIVE_CATEGORY_DESIGN":
      return InitiativeCategory.INITIATIVE_CATEGORY_DESIGN;
    case 7:
    case "INITIATIVE_CATEGORY_RESEARCH":
      return InitiativeCategory.INITIATIVE_CATEGORY_RESEARCH;
    case 8:
    case "INITIATIVE_CATEGORY_REVIEW":
      return InitiativeCategory.INITIATIVE_CATEGORY_REVIEW;
    case 9:
    case "INITIATIVE_CATEGORY_OTHER":
      return InitiativeCategory.INITIATIVE_CATEGORY_OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InitiativeCategory.UNRECOGNIZED;
  }
}
export function initiativeCategoryToJSON(object: InitiativeCategory): string {
  switch (object) {
    case InitiativeCategory.INITIATIVE_CATEGORY_FEATURE:
      return "INITIATIVE_CATEGORY_FEATURE";
    case InitiativeCategory.INITIATIVE_CATEGORY_BUGFIX:
      return "INITIATIVE_CATEGORY_BUGFIX";
    case InitiativeCategory.INITIATIVE_CATEGORY_REFACTOR:
      return "INITIATIVE_CATEGORY_REFACTOR";
    case InitiativeCategory.INITIATIVE_CATEGORY_TESTING:
      return "INITIATIVE_CATEGORY_TESTING";
    case InitiativeCategory.INITIATIVE_CATEGORY_SECURITY:
      return "INITIATIVE_CATEGORY_SECURITY";
    case InitiativeCategory.INITIATIVE_CATEGORY_DOCUMENTATION:
      return "INITIATIVE_CATEGORY_DOCUMENTATION";
    case InitiativeCategory.INITIATIVE_CATEGORY_DESIGN:
      return "INITIATIVE_CATEGORY_DESIGN";
    case InitiativeCategory.INITIATIVE_CATEGORY_RESEARCH:
      return "INITIATIVE_CATEGORY_RESEARCH";
    case InitiativeCategory.INITIATIVE_CATEGORY_REVIEW:
      return "INITIATIVE_CATEGORY_REVIEW";
    case InitiativeCategory.INITIATIVE_CATEGORY_OTHER:
      return "INITIATIVE_CATEGORY_OTHER";
    case InitiativeCategory.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum InitiativeStatus {
  INITIATIVE_STATUS_OPEN = 0,
  INITIATIVE_STATUS_ASSIGNED = 1,
  INITIATIVE_STATUS_SUBMITTED = 2,
  INITIATIVE_STATUS_IN_REVIEW = 3,
  INITIATIVE_STATUS_CHALLENGED = 4,
  INITIATIVE_STATUS_COMPLETED = 5,
  INITIATIVE_STATUS_REJECTED = 6,
  INITIATIVE_STATUS_ABANDONED = 7,
  /**
   * INITIATIVE_STATUS_CANCELLED - Retired by the project creator (or Operations Committee) while still
   * OPEN and unassigned. Distinct from ABANDONED, which records an assignee
   * walking away from work they had taken on.
   */
  INITIATIVE_STATUS_CANCELLED = 8,
  UNRECOGNIZED = -1,
}
export const InitiativeStatusAmino = InitiativeStatus;
export function initiativeStatusFromJSON(object: any): InitiativeStatus {
  switch (object) {
    case 0:
    case "INITIATIVE_STATUS_OPEN":
      return InitiativeStatus.INITIATIVE_STATUS_OPEN;
    case 1:
    case "INITIATIVE_STATUS_ASSIGNED":
      return InitiativeStatus.INITIATIVE_STATUS_ASSIGNED;
    case 2:
    case "INITIATIVE_STATUS_SUBMITTED":
      return InitiativeStatus.INITIATIVE_STATUS_SUBMITTED;
    case 3:
    case "INITIATIVE_STATUS_IN_REVIEW":
      return InitiativeStatus.INITIATIVE_STATUS_IN_REVIEW;
    case 4:
    case "INITIATIVE_STATUS_CHALLENGED":
      return InitiativeStatus.INITIATIVE_STATUS_CHALLENGED;
    case 5:
    case "INITIATIVE_STATUS_COMPLETED":
      return InitiativeStatus.INITIATIVE_STATUS_COMPLETED;
    case 6:
    case "INITIATIVE_STATUS_REJECTED":
      return InitiativeStatus.INITIATIVE_STATUS_REJECTED;
    case 7:
    case "INITIATIVE_STATUS_ABANDONED":
      return InitiativeStatus.INITIATIVE_STATUS_ABANDONED;
    case 8:
    case "INITIATIVE_STATUS_CANCELLED":
      return InitiativeStatus.INITIATIVE_STATUS_CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InitiativeStatus.UNRECOGNIZED;
  }
}
export function initiativeStatusToJSON(object: InitiativeStatus): string {
  switch (object) {
    case InitiativeStatus.INITIATIVE_STATUS_OPEN:
      return "INITIATIVE_STATUS_OPEN";
    case InitiativeStatus.INITIATIVE_STATUS_ASSIGNED:
      return "INITIATIVE_STATUS_ASSIGNED";
    case InitiativeStatus.INITIATIVE_STATUS_SUBMITTED:
      return "INITIATIVE_STATUS_SUBMITTED";
    case InitiativeStatus.INITIATIVE_STATUS_IN_REVIEW:
      return "INITIATIVE_STATUS_IN_REVIEW";
    case InitiativeStatus.INITIATIVE_STATUS_CHALLENGED:
      return "INITIATIVE_STATUS_CHALLENGED";
    case InitiativeStatus.INITIATIVE_STATUS_COMPLETED:
      return "INITIATIVE_STATUS_COMPLETED";
    case InitiativeStatus.INITIATIVE_STATUS_REJECTED:
      return "INITIATIVE_STATUS_REJECTED";
    case InitiativeStatus.INITIATIVE_STATUS_ABANDONED:
      return "INITIATIVE_STATUS_ABANDONED";
    case InitiativeStatus.INITIATIVE_STATUS_CANCELLED:
      return "INITIATIVE_STATUS_CANCELLED";
    case InitiativeStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * How an escalated review round was resolved by the Operations Committee.
 * 
 * PASSED is also what committee *inaction* resolves to: silence must never wedge
 * an initiative, and silence must never mint.
 */
export enum ReviewEscalation {
  REVIEW_ESCALATION_NONE = 0,
  /**
   * REVIEW_ESCALATION_APPROVED - Committee satisfied the reviewer gate itself. Writes no RoleActivity — the
   * committee holds no bond and carries no accuracy record.
   */
  REVIEW_ESCALATION_APPROVED = 1,
  /** REVIEW_ESCALATION_REJECTED - Committee rejected; same effect as a reviewer rejection. */
  REVIEW_ESCALATION_REJECTED = 2,
  /**
   * REVIEW_ESCALATION_PASSED - Committee declined to substitute its judgement. The initiative proceeds on
   * conviction alone; the challenge window still runs.
   */
  REVIEW_ESCALATION_PASSED = 3,
  UNRECOGNIZED = -1,
}
export const ReviewEscalationAmino = ReviewEscalation;
export function reviewEscalationFromJSON(object: any): ReviewEscalation {
  switch (object) {
    case 0:
    case "REVIEW_ESCALATION_NONE":
      return ReviewEscalation.REVIEW_ESCALATION_NONE;
    case 1:
    case "REVIEW_ESCALATION_APPROVED":
      return ReviewEscalation.REVIEW_ESCALATION_APPROVED;
    case 2:
    case "REVIEW_ESCALATION_REJECTED":
      return ReviewEscalation.REVIEW_ESCALATION_REJECTED;
    case 3:
    case "REVIEW_ESCALATION_PASSED":
      return ReviewEscalation.REVIEW_ESCALATION_PASSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReviewEscalation.UNRECOGNIZED;
  }
}
export function reviewEscalationToJSON(object: ReviewEscalation): string {
  switch (object) {
    case ReviewEscalation.REVIEW_ESCALATION_NONE:
      return "REVIEW_ESCALATION_NONE";
    case ReviewEscalation.REVIEW_ESCALATION_APPROVED:
      return "REVIEW_ESCALATION_APPROVED";
    case ReviewEscalation.REVIEW_ESCALATION_REJECTED:
      return "REVIEW_ESCALATION_REJECTED";
    case ReviewEscalation.REVIEW_ESCALATION_PASSED:
      return "REVIEW_ESCALATION_PASSED";
    case ReviewEscalation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Initiative defines the Initiative message.
 * @name Initiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Initiative
 */
export interface Initiative {
  id: bigint;
  projectId: bigint;
  title: string;
  description: string;
  tags: string[];
  tier: InitiativeTier;
  category: InitiativeCategory;
  budget: string;
  assignee: string;
  apprentice: string;
  assignedAt: bigint;
  deliverableUri: string;
  submittedAt: bigint;
  requiredConviction: string;
  currentConviction: string;
  externalConviction: string;
  convictionLastUpdated: bigint;
  reviewPeriodEnd: bigint;
  challengePeriodEnd: bigint;
  approvals: string[];
  status: InitiativeStatus;
  createdAt: bigint;
  completedAt: bigint;
  /**
   * Conviction propagated from linked content
   */
  propagatedConviction: string;
  /**
   * DREAM locked by a self-assigning project creator (budget-backed projects
   * only). Returned on completion/abandonment, burned on upheld challenge.
   */
  selfAssignBond: string;
  /**
   * The definition of done, pre-committed by the initiative's author before
   * any work starts and immutable thereafter. Optional; when present it gives
   * a challenger something concrete and objective to point at
   * (Challenge.criteria_id) and gives a juror's CriteriaVote a real referent
   * instead of an unvalidated free-form id.
   * 
   * Deliberately declared per-initiative rather than resolved from a registry:
   * templates have no authoring message and all three networks ship zero of
   * them, so a template reference would be a pointer into an empty registry.
   */
  acceptanceCriteria: VerificationCriteria[];
  /**
   * Review-round bookkeeping for the bonded reviewer gate. A rejection returns
   * the initiative to ASSIGNED and increments the round, so the assignee can
   * fix the work and resubmit; each round collects its own verdicts. Bounded by
   * max_review_rounds so a bad-faith assignee cannot burn reviewer effort
   * indefinitely.
   */
  reviewRound: number;
  /**
   * Height at which the current round's review window closes. Past this with
   * the gate unmet, the initiative escalates to the Operations Committee.
   */
  reviewDeadline: bigint;
  /**
   * Set when the committee has resolved an escalation for the current round, so
   * the sweep does not escalate the same round twice.
   */
  reviewEscalation: ReviewEscalation;
  /**
   * Address that submitted MsgCreateInitiative. Recorded on state so
   * authorship is answerable from a node query instead of only from the
   * initiative_created event (which requires an off-chain indexer).
   * Immutable once set.
   */
  creator: string;
  /**
   * Reviewer approvals this round needs, snapshotted from the project's policy
   * when the review window opened.
   * 
   * Read instead of the live policy so a project cannot relax its own standard
   * out from under work already under review — the creator owns the policy and,
   * for self-assigned work, is also the party the gate exists to constrain.
   * Zero means no reviewer gate for this round, which is the genesis default.
   */
  requiredVerifiers: number;
}
export interface InitiativeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.Initiative";
  value: Uint8Array;
}
/**
 * Initiative defines the Initiative message.
 * @name InitiativeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Initiative
 */
export interface InitiativeAmino {
  id?: string;
  project_id?: string;
  title?: string;
  description?: string;
  tags?: string[];
  tier?: InitiativeTier;
  category?: InitiativeCategory;
  budget?: string;
  assignee?: string;
  apprentice?: string;
  assigned_at?: string;
  deliverable_uri?: string;
  submitted_at?: string;
  required_conviction?: string;
  current_conviction?: string;
  external_conviction?: string;
  conviction_last_updated?: string;
  review_period_end?: string;
  challenge_period_end?: string;
  approvals?: string[];
  status?: InitiativeStatus;
  created_at?: string;
  completed_at?: string;
  /**
   * Conviction propagated from linked content
   */
  propagated_conviction?: string;
  /**
   * DREAM locked by a self-assigning project creator (budget-backed projects
   * only). Returned on completion/abandonment, burned on upheld challenge.
   */
  self_assign_bond?: string;
  /**
   * The definition of done, pre-committed by the initiative's author before
   * any work starts and immutable thereafter. Optional; when present it gives
   * a challenger something concrete and objective to point at
   * (Challenge.criteria_id) and gives a juror's CriteriaVote a real referent
   * instead of an unvalidated free-form id.
   * 
   * Deliberately declared per-initiative rather than resolved from a registry:
   * templates have no authoring message and all three networks ship zero of
   * them, so a template reference would be a pointer into an empty registry.
   */
  acceptance_criteria?: VerificationCriteriaAmino[];
  /**
   * Review-round bookkeeping for the bonded reviewer gate. A rejection returns
   * the initiative to ASSIGNED and increments the round, so the assignee can
   * fix the work and resubmit; each round collects its own verdicts. Bounded by
   * max_review_rounds so a bad-faith assignee cannot burn reviewer effort
   * indefinitely.
   */
  review_round?: number;
  /**
   * Height at which the current round's review window closes. Past this with
   * the gate unmet, the initiative escalates to the Operations Committee.
   */
  review_deadline?: string;
  /**
   * Set when the committee has resolved an escalation for the current round, so
   * the sweep does not escalate the same round twice.
   */
  review_escalation?: ReviewEscalation;
  /**
   * Address that submitted MsgCreateInitiative. Recorded on state so
   * authorship is answerable from a node query instead of only from the
   * initiative_created event (which requires an off-chain indexer).
   * Immutable once set.
   */
  creator?: string;
  /**
   * Reviewer approvals this round needs, snapshotted from the project's policy
   * when the review window opened.
   * 
   * Read instead of the live policy so a project cannot relax its own standard
   * out from under work already under review — the creator owns the policy and,
   * for self-assigned work, is also the party the gate exists to constrain.
   * Zero means no reviewer gate for this round, which is the genesis default.
   */
  required_verifiers?: number;
}
export interface InitiativeAminoMsg {
  type: "/sparkdream.rep.v1.Initiative";
  value: InitiativeAmino;
}
function createBaseInitiative(): Initiative {
  return {
    id: BigInt(0),
    projectId: BigInt(0),
    title: "",
    description: "",
    tags: [],
    tier: 0,
    category: 0,
    budget: "",
    assignee: "",
    apprentice: "",
    assignedAt: BigInt(0),
    deliverableUri: "",
    submittedAt: BigInt(0),
    requiredConviction: "",
    currentConviction: "",
    externalConviction: "",
    convictionLastUpdated: BigInt(0),
    reviewPeriodEnd: BigInt(0),
    challengePeriodEnd: BigInt(0),
    approvals: [],
    status: 0,
    createdAt: BigInt(0),
    completedAt: BigInt(0),
    propagatedConviction: "",
    selfAssignBond: "",
    acceptanceCriteria: [],
    reviewRound: 0,
    reviewDeadline: BigInt(0),
    reviewEscalation: 0,
    creator: "",
    requiredVerifiers: 0
  };
}
/**
 * Initiative defines the Initiative message.
 * @name Initiative
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Initiative
 */
export const Initiative = {
  typeUrl: "/sparkdream.rep.v1.Initiative",
  encode(message: Initiative, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.projectId !== BigInt(0)) {
      writer.uint32(16).uint64(message.projectId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(42).string(v!);
    }
    if (message.tier !== 0) {
      writer.uint32(48).int32(message.tier);
    }
    if (message.category !== 0) {
      writer.uint32(56).int32(message.category);
    }
    if (message.budget !== "") {
      writer.uint32(66).string(message.budget);
    }
    if (message.assignee !== "") {
      writer.uint32(74).string(message.assignee);
    }
    if (message.apprentice !== "") {
      writer.uint32(82).string(message.apprentice);
    }
    if (message.assignedAt !== BigInt(0)) {
      writer.uint32(88).int64(message.assignedAt);
    }
    if (message.deliverableUri !== "") {
      writer.uint32(98).string(message.deliverableUri);
    }
    if (message.submittedAt !== BigInt(0)) {
      writer.uint32(104).int64(message.submittedAt);
    }
    if (message.requiredConviction !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.requiredConviction, 18).atomics);
    }
    if (message.currentConviction !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.currentConviction, 18).atomics);
    }
    if (message.externalConviction !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.externalConviction, 18).atomics);
    }
    if (message.convictionLastUpdated !== BigInt(0)) {
      writer.uint32(136).int64(message.convictionLastUpdated);
    }
    if (message.reviewPeriodEnd !== BigInt(0)) {
      writer.uint32(144).int64(message.reviewPeriodEnd);
    }
    if (message.challengePeriodEnd !== BigInt(0)) {
      writer.uint32(152).int64(message.challengePeriodEnd);
    }
    for (const v of message.approvals) {
      writer.uint32(162).string(v!);
    }
    if (message.status !== 0) {
      writer.uint32(168).int32(message.status);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(176).int64(message.createdAt);
    }
    if (message.completedAt !== BigInt(0)) {
      writer.uint32(184).int64(message.completedAt);
    }
    if (message.propagatedConviction !== "") {
      writer.uint32(194).string(Decimal.fromUserInput(message.propagatedConviction, 18).atomics);
    }
    if (message.selfAssignBond !== "") {
      writer.uint32(202).string(message.selfAssignBond);
    }
    for (const v of message.acceptanceCriteria) {
      VerificationCriteria.encode(v!, writer.uint32(218).fork()).ldelim();
    }
    if (message.reviewRound !== 0) {
      writer.uint32(224).uint32(message.reviewRound);
    }
    if (message.reviewDeadline !== BigInt(0)) {
      writer.uint32(232).int64(message.reviewDeadline);
    }
    if (message.reviewEscalation !== 0) {
      writer.uint32(240).int32(message.reviewEscalation);
    }
    if (message.creator !== "") {
      writer.uint32(210).string(message.creator);
    }
    if (message.requiredVerifiers !== 0) {
      writer.uint32(248).uint32(message.requiredVerifiers);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Initiative {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitiative();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.projectId = reader.uint64();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.tags.push(reader.string());
          break;
        case 6:
          message.tier = reader.int32() as any;
          break;
        case 7:
          message.category = reader.int32() as any;
          break;
        case 8:
          message.budget = reader.string();
          break;
        case 9:
          message.assignee = reader.string();
          break;
        case 10:
          message.apprentice = reader.string();
          break;
        case 11:
          message.assignedAt = reader.int64();
          break;
        case 12:
          message.deliverableUri = reader.string();
          break;
        case 13:
          message.submittedAt = reader.int64();
          break;
        case 14:
          message.requiredConviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.currentConviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.externalConviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 17:
          message.convictionLastUpdated = reader.int64();
          break;
        case 18:
          message.reviewPeriodEnd = reader.int64();
          break;
        case 19:
          message.challengePeriodEnd = reader.int64();
          break;
        case 20:
          message.approvals.push(reader.string());
          break;
        case 21:
          message.status = reader.int32() as any;
          break;
        case 22:
          message.createdAt = reader.int64();
          break;
        case 23:
          message.completedAt = reader.int64();
          break;
        case 24:
          message.propagatedConviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 25:
          message.selfAssignBond = reader.string();
          break;
        case 27:
          message.acceptanceCriteria.push(VerificationCriteria.decode(reader, reader.uint32()));
          break;
        case 28:
          message.reviewRound = reader.uint32();
          break;
        case 29:
          message.reviewDeadline = reader.int64();
          break;
        case 30:
          message.reviewEscalation = reader.int32() as any;
          break;
        case 26:
          message.creator = reader.string();
          break;
        case 31:
          message.requiredVerifiers = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Initiative>): Initiative {
    const message = createBaseInitiative();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt(0);
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.tags = object.tags?.map(e => e) || [];
    message.tier = object.tier ?? 0;
    message.category = object.category ?? 0;
    message.budget = object.budget ?? "";
    message.assignee = object.assignee ?? "";
    message.apprentice = object.apprentice ?? "";
    message.assignedAt = object.assignedAt !== undefined && object.assignedAt !== null ? BigInt(object.assignedAt.toString()) : BigInt(0);
    message.deliverableUri = object.deliverableUri ?? "";
    message.submittedAt = object.submittedAt !== undefined && object.submittedAt !== null ? BigInt(object.submittedAt.toString()) : BigInt(0);
    message.requiredConviction = object.requiredConviction ?? "";
    message.currentConviction = object.currentConviction ?? "";
    message.externalConviction = object.externalConviction ?? "";
    message.convictionLastUpdated = object.convictionLastUpdated !== undefined && object.convictionLastUpdated !== null ? BigInt(object.convictionLastUpdated.toString()) : BigInt(0);
    message.reviewPeriodEnd = object.reviewPeriodEnd !== undefined && object.reviewPeriodEnd !== null ? BigInt(object.reviewPeriodEnd.toString()) : BigInt(0);
    message.challengePeriodEnd = object.challengePeriodEnd !== undefined && object.challengePeriodEnd !== null ? BigInt(object.challengePeriodEnd.toString()) : BigInt(0);
    message.approvals = object.approvals?.map(e => e) || [];
    message.status = object.status ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.completedAt = object.completedAt !== undefined && object.completedAt !== null ? BigInt(object.completedAt.toString()) : BigInt(0);
    message.propagatedConviction = object.propagatedConviction ?? "";
    message.selfAssignBond = object.selfAssignBond ?? "";
    message.acceptanceCriteria = object.acceptanceCriteria?.map(e => VerificationCriteria.fromPartial(e)) || [];
    message.reviewRound = object.reviewRound ?? 0;
    message.reviewDeadline = object.reviewDeadline !== undefined && object.reviewDeadline !== null ? BigInt(object.reviewDeadline.toString()) : BigInt(0);
    message.reviewEscalation = object.reviewEscalation ?? 0;
    message.creator = object.creator ?? "";
    message.requiredVerifiers = object.requiredVerifiers ?? 0;
    return message;
  },
  fromAmino(object: InitiativeAmino): Initiative {
    const message = createBaseInitiative();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = BigInt(object.project_id);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.tags = object.tags?.map(e => e) || [];
    if (object.tier !== undefined && object.tier !== null) {
      message.tier = object.tier;
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    }
    if (object.budget !== undefined && object.budget !== null) {
      message.budget = object.budget;
    }
    if (object.assignee !== undefined && object.assignee !== null) {
      message.assignee = object.assignee;
    }
    if (object.apprentice !== undefined && object.apprentice !== null) {
      message.apprentice = object.apprentice;
    }
    if (object.assigned_at !== undefined && object.assigned_at !== null) {
      message.assignedAt = BigInt(object.assigned_at);
    }
    if (object.deliverable_uri !== undefined && object.deliverable_uri !== null) {
      message.deliverableUri = object.deliverable_uri;
    }
    if (object.submitted_at !== undefined && object.submitted_at !== null) {
      message.submittedAt = BigInt(object.submitted_at);
    }
    if (object.required_conviction !== undefined && object.required_conviction !== null) {
      message.requiredConviction = object.required_conviction;
    }
    if (object.current_conviction !== undefined && object.current_conviction !== null) {
      message.currentConviction = object.current_conviction;
    }
    if (object.external_conviction !== undefined && object.external_conviction !== null) {
      message.externalConviction = object.external_conviction;
    }
    if (object.conviction_last_updated !== undefined && object.conviction_last_updated !== null) {
      message.convictionLastUpdated = BigInt(object.conviction_last_updated);
    }
    if (object.review_period_end !== undefined && object.review_period_end !== null) {
      message.reviewPeriodEnd = BigInt(object.review_period_end);
    }
    if (object.challenge_period_end !== undefined && object.challenge_period_end !== null) {
      message.challengePeriodEnd = BigInt(object.challenge_period_end);
    }
    message.approvals = object.approvals?.map(e => e) || [];
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.completed_at !== undefined && object.completed_at !== null) {
      message.completedAt = BigInt(object.completed_at);
    }
    if (object.propagated_conviction !== undefined && object.propagated_conviction !== null) {
      message.propagatedConviction = object.propagated_conviction;
    }
    if (object.self_assign_bond !== undefined && object.self_assign_bond !== null) {
      message.selfAssignBond = object.self_assign_bond;
    }
    message.acceptanceCriteria = object.acceptance_criteria?.map(e => VerificationCriteria.fromAmino(e)) || [];
    if (object.review_round !== undefined && object.review_round !== null) {
      message.reviewRound = object.review_round;
    }
    if (object.review_deadline !== undefined && object.review_deadline !== null) {
      message.reviewDeadline = BigInt(object.review_deadline);
    }
    if (object.review_escalation !== undefined && object.review_escalation !== null) {
      message.reviewEscalation = object.review_escalation;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.required_verifiers !== undefined && object.required_verifiers !== null) {
      message.requiredVerifiers = object.required_verifiers;
    }
    return message;
  },
  toAmino(message: Initiative): InitiativeAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.project_id = message.projectId !== BigInt(0) ? message.projectId?.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    obj.tier = message.tier === 0 ? undefined : message.tier;
    obj.category = message.category === 0 ? undefined : message.category;
    obj.budget = message.budget === "" ? undefined : message.budget;
    obj.assignee = message.assignee === "" ? undefined : message.assignee;
    obj.apprentice = message.apprentice === "" ? undefined : message.apprentice;
    obj.assigned_at = message.assignedAt !== BigInt(0) ? message.assignedAt?.toString() : undefined;
    obj.deliverable_uri = message.deliverableUri === "" ? undefined : message.deliverableUri;
    obj.submitted_at = message.submittedAt !== BigInt(0) ? message.submittedAt?.toString() : undefined;
    obj.required_conviction = message.requiredConviction === "" ? undefined : message.requiredConviction;
    obj.current_conviction = message.currentConviction === "" ? undefined : message.currentConviction;
    obj.external_conviction = message.externalConviction === "" ? undefined : message.externalConviction;
    obj.conviction_last_updated = message.convictionLastUpdated !== BigInt(0) ? message.convictionLastUpdated?.toString() : undefined;
    obj.review_period_end = message.reviewPeriodEnd !== BigInt(0) ? message.reviewPeriodEnd?.toString() : undefined;
    obj.challenge_period_end = message.challengePeriodEnd !== BigInt(0) ? message.challengePeriodEnd?.toString() : undefined;
    if (message.approvals) {
      obj.approvals = message.approvals.map(e => e);
    } else {
      obj.approvals = message.approvals;
    }
    obj.status = message.status === 0 ? undefined : message.status;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.completed_at = message.completedAt !== BigInt(0) ? message.completedAt?.toString() : undefined;
    obj.propagated_conviction = message.propagatedConviction === "" ? undefined : message.propagatedConviction;
    obj.self_assign_bond = message.selfAssignBond === "" ? undefined : message.selfAssignBond;
    if (message.acceptanceCriteria) {
      obj.acceptance_criteria = message.acceptanceCriteria.map(e => e ? VerificationCriteria.toAmino(e) : undefined);
    } else {
      obj.acceptance_criteria = message.acceptanceCriteria;
    }
    obj.review_round = message.reviewRound === 0 ? undefined : message.reviewRound;
    obj.review_deadline = message.reviewDeadline !== BigInt(0) ? message.reviewDeadline?.toString() : undefined;
    obj.review_escalation = message.reviewEscalation === 0 ? undefined : message.reviewEscalation;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.required_verifiers = message.requiredVerifiers === 0 ? undefined : message.requiredVerifiers;
    return obj;
  },
  fromAminoMsg(object: InitiativeAminoMsg): Initiative {
    return Initiative.fromAmino(object.value);
  },
  fromProtoMsg(message: InitiativeProtoMsg): Initiative {
    return Initiative.decode(message.value);
  },
  toProto(message: Initiative): Uint8Array {
    return Initiative.encode(message).finish();
  },
  toProtoMsg(message: Initiative): InitiativeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.Initiative",
      value: Initiative.encode(message).finish()
    };
  }
};