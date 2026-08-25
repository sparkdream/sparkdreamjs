//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
export enum Verdict {
  VERDICT_PENDING = 0,
  VERDICT_UPHOLD_CHALLENGE = 1,
  VERDICT_REJECT_CHALLENGE = 2,
  VERDICT_INCONCLUSIVE = 3,
  UNRECOGNIZED = -1,
}
export const VerdictAmino = Verdict;
export function verdictFromJSON(object: any): Verdict {
  switch (object) {
    case 0:
    case "VERDICT_PENDING":
      return Verdict.VERDICT_PENDING;
    case 1:
    case "VERDICT_UPHOLD_CHALLENGE":
      return Verdict.VERDICT_UPHOLD_CHALLENGE;
    case 2:
    case "VERDICT_REJECT_CHALLENGE":
      return Verdict.VERDICT_REJECT_CHALLENGE;
    case 3:
    case "VERDICT_INCONCLUSIVE":
      return Verdict.VERDICT_INCONCLUSIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Verdict.UNRECOGNIZED;
  }
}
export function verdictToJSON(object: Verdict): string {
  switch (object) {
    case Verdict.VERDICT_PENDING:
      return "VERDICT_PENDING";
    case Verdict.VERDICT_UPHOLD_CHALLENGE:
      return "VERDICT_UPHOLD_CHALLENGE";
    case Verdict.VERDICT_REJECT_CHALLENGE:
      return "VERDICT_REJECT_CHALLENGE";
    case Verdict.VERDICT_INCONCLUSIVE:
      return "VERDICT_INCONCLUSIVE";
    case Verdict.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * JuryReview defines the JuryReview message.
 * @name JuryReview
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.JuryReview
 */
export interface JuryReview {
  id: bigint;
  challengeId: bigint;
  initiativeId: bigint;
  jurors: string[];
  requiredVotes: number;
  expertWitnesses: string[];
  testimonies: ExpertTestimony[];
  reviewDeliverable: string;
  challengerClaim: string;
  assigneeResponse: string;
  votes: JurorVote[];
  deadline: bigint;
  verdict: Verdict;
  reasoning: string;
  /**
   * For content challenges (non-zero means this review is for a content challenge, not an initiative challenge)
   */
  contentChallengeId: bigint;
  /**
   * Block height by which a seated juror must accept, after which unanswered
   * seats are vacated and redrawn (see SweepUnansweredJurySeats).
   */
  acceptanceDeadline: bigint;
  /**
   * Jurors who have accepted the summons. Accepting is what converts a seat
   * drawn by lot into a commitment: jurors are conscripted by sortition, so
   * penalising a no-show who never agreed to serve would punish an accident of
   * the draw. Declining is free and immediate; ignoring the summons is what
   * costs a seat and counts against the participation rate.
   */
  accepted: string[];
  /**
   * How many replacement rounds this review has been through. Bounded by
   * MaxJuryRedraws so a review cannot redraw forever against a pool that will
   * not answer.
   */
  redrawCount: number;
}
export interface JuryReviewProtoMsg {
  typeUrl: "/sparkdream.rep.v1.JuryReview";
  value: Uint8Array;
}
/**
 * JuryReview defines the JuryReview message.
 * @name JuryReviewAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.JuryReview
 */
export interface JuryReviewAmino {
  id?: string;
  challenge_id?: string;
  initiative_id?: string;
  jurors?: string[];
  required_votes?: number;
  expert_witnesses?: string[];
  testimonies?: ExpertTestimonyAmino[];
  review_deliverable?: string;
  challenger_claim?: string;
  assignee_response?: string;
  votes?: JurorVoteAmino[];
  deadline?: string;
  verdict?: Verdict;
  reasoning?: string;
  /**
   * For content challenges (non-zero means this review is for a content challenge, not an initiative challenge)
   */
  content_challenge_id?: string;
  /**
   * Block height by which a seated juror must accept, after which unanswered
   * seats are vacated and redrawn (see SweepUnansweredJurySeats).
   */
  acceptance_deadline?: string;
  /**
   * Jurors who have accepted the summons. Accepting is what converts a seat
   * drawn by lot into a commitment: jurors are conscripted by sortition, so
   * penalising a no-show who never agreed to serve would punish an accident of
   * the draw. Declining is free and immediate; ignoring the summons is what
   * costs a seat and counts against the participation rate.
   */
  accepted?: string[];
  /**
   * How many replacement rounds this review has been through. Bounded by
   * MaxJuryRedraws so a review cannot redraw forever against a pool that will
   * not answer.
   */
  redraw_count?: number;
}
export interface JuryReviewAminoMsg {
  type: "/sparkdream.rep.v1.JuryReview";
  value: JuryReviewAmino;
}
/**
 * @name JurorVote
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.JurorVote
 */
export interface JurorVote {
  juror: string;
  criteriaVotes: CriteriaVote[];
  verdict: Verdict;
  confidence: string;
  reasoning: string;
  submittedAt: bigint;
}
export interface JurorVoteProtoMsg {
  typeUrl: "/sparkdream.rep.v1.JurorVote";
  value: Uint8Array;
}
/**
 * @name JurorVoteAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.JurorVote
 */
export interface JurorVoteAmino {
  juror?: string;
  criteria_votes?: CriteriaVoteAmino[];
  verdict?: Verdict;
  confidence?: string;
  reasoning?: string;
  submitted_at?: string;
}
export interface JurorVoteAminoMsg {
  type: "/sparkdream.rep.v1.JurorVote";
  value: JurorVoteAmino;
}
/**
 * @name ExpertTestimony
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ExpertTestimony
 */
export interface ExpertTestimony {
  expert: string;
  opinion: string;
  reasoning: string;
  submittedAt: bigint;
}
export interface ExpertTestimonyProtoMsg {
  typeUrl: "/sparkdream.rep.v1.ExpertTestimony";
  value: Uint8Array;
}
/**
 * @name ExpertTestimonyAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ExpertTestimony
 */
export interface ExpertTestimonyAmino {
  expert?: string;
  opinion?: string;
  reasoning?: string;
  submitted_at?: string;
}
export interface ExpertTestimonyAminoMsg {
  type: "/sparkdream.rep.v1.ExpertTestimony";
  value: ExpertTestimonyAmino;
}
/**
 * @name CriteriaVote
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.CriteriaVote
 */
export interface CriteriaVote {
  criteriaId: string;
  passed: boolean;
  score: number;
  notes: string;
}
export interface CriteriaVoteProtoMsg {
  typeUrl: "/sparkdream.rep.v1.CriteriaVote";
  value: Uint8Array;
}
/**
 * @name CriteriaVoteAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.CriteriaVote
 */
export interface CriteriaVoteAmino {
  criteria_id?: string;
  passed?: boolean;
  score?: number;
  notes?: string;
}
export interface CriteriaVoteAminoMsg {
  type: "/sparkdream.rep.v1.CriteriaVote";
  value: CriteriaVoteAmino;
}
function createBaseJuryReview(): JuryReview {
  return {
    id: BigInt(0),
    challengeId: BigInt(0),
    initiativeId: BigInt(0),
    jurors: [],
    requiredVotes: 0,
    expertWitnesses: [],
    testimonies: [],
    reviewDeliverable: "",
    challengerClaim: "",
    assigneeResponse: "",
    votes: [],
    deadline: BigInt(0),
    verdict: 0,
    reasoning: "",
    contentChallengeId: BigInt(0),
    acceptanceDeadline: BigInt(0),
    accepted: [],
    redrawCount: 0
  };
}
/**
 * JuryReview defines the JuryReview message.
 * @name JuryReview
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.JuryReview
 */
export const JuryReview = {
  typeUrl: "/sparkdream.rep.v1.JuryReview",
  encode(message: JuryReview, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.challengeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.challengeId);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.initiativeId);
    }
    for (const v of message.jurors) {
      writer.uint32(34).string(v!);
    }
    if (message.requiredVotes !== 0) {
      writer.uint32(40).uint32(message.requiredVotes);
    }
    for (const v of message.expertWitnesses) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.testimonies) {
      ExpertTestimony.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.reviewDeliverable !== "") {
      writer.uint32(66).string(message.reviewDeliverable);
    }
    if (message.challengerClaim !== "") {
      writer.uint32(74).string(message.challengerClaim);
    }
    if (message.assigneeResponse !== "") {
      writer.uint32(82).string(message.assigneeResponse);
    }
    for (const v of message.votes) {
      JurorVote.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(96).int64(message.deadline);
    }
    if (message.verdict !== 0) {
      writer.uint32(104).int32(message.verdict);
    }
    if (message.reasoning !== "") {
      writer.uint32(114).string(message.reasoning);
    }
    if (message.contentChallengeId !== BigInt(0)) {
      writer.uint32(120).uint64(message.contentChallengeId);
    }
    if (message.acceptanceDeadline !== BigInt(0)) {
      writer.uint32(128).int64(message.acceptanceDeadline);
    }
    for (const v of message.accepted) {
      writer.uint32(138).string(v!);
    }
    if (message.redrawCount !== 0) {
      writer.uint32(144).uint32(message.redrawCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): JuryReview {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJuryReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.challengeId = reader.uint64();
          break;
        case 3:
          message.initiativeId = reader.uint64();
          break;
        case 4:
          message.jurors.push(reader.string());
          break;
        case 5:
          message.requiredVotes = reader.uint32();
          break;
        case 6:
          message.expertWitnesses.push(reader.string());
          break;
        case 7:
          message.testimonies.push(ExpertTestimony.decode(reader, reader.uint32()));
          break;
        case 8:
          message.reviewDeliverable = reader.string();
          break;
        case 9:
          message.challengerClaim = reader.string();
          break;
        case 10:
          message.assigneeResponse = reader.string();
          break;
        case 11:
          message.votes.push(JurorVote.decode(reader, reader.uint32()));
          break;
        case 12:
          message.deadline = reader.int64();
          break;
        case 13:
          message.verdict = reader.int32() as any;
          break;
        case 14:
          message.reasoning = reader.string();
          break;
        case 15:
          message.contentChallengeId = reader.uint64();
          break;
        case 16:
          message.acceptanceDeadline = reader.int64();
          break;
        case 17:
          message.accepted.push(reader.string());
          break;
        case 18:
          message.redrawCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<JuryReview>): JuryReview {
    const message = createBaseJuryReview();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.challengeId = object.challengeId !== undefined && object.challengeId !== null ? BigInt(object.challengeId.toString()) : BigInt(0);
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.jurors = object.jurors?.map(e => e) || [];
    message.requiredVotes = object.requiredVotes ?? 0;
    message.expertWitnesses = object.expertWitnesses?.map(e => e) || [];
    message.testimonies = object.testimonies?.map(e => ExpertTestimony.fromPartial(e)) || [];
    message.reviewDeliverable = object.reviewDeliverable ?? "";
    message.challengerClaim = object.challengerClaim ?? "";
    message.assigneeResponse = object.assigneeResponse ?? "";
    message.votes = object.votes?.map(e => JurorVote.fromPartial(e)) || [];
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.verdict = object.verdict ?? 0;
    message.reasoning = object.reasoning ?? "";
    message.contentChallengeId = object.contentChallengeId !== undefined && object.contentChallengeId !== null ? BigInt(object.contentChallengeId.toString()) : BigInt(0);
    message.acceptanceDeadline = object.acceptanceDeadline !== undefined && object.acceptanceDeadline !== null ? BigInt(object.acceptanceDeadline.toString()) : BigInt(0);
    message.accepted = object.accepted?.map(e => e) || [];
    message.redrawCount = object.redrawCount ?? 0;
    return message;
  },
  fromAmino(object: JuryReviewAmino): JuryReview {
    const message = createBaseJuryReview();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.challenge_id !== undefined && object.challenge_id !== null) {
      message.challengeId = BigInt(object.challenge_id);
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    message.jurors = object.jurors?.map(e => e) || [];
    if (object.required_votes !== undefined && object.required_votes !== null) {
      message.requiredVotes = object.required_votes;
    }
    message.expertWitnesses = object.expert_witnesses?.map(e => e) || [];
    message.testimonies = object.testimonies?.map(e => ExpertTestimony.fromAmino(e)) || [];
    if (object.review_deliverable !== undefined && object.review_deliverable !== null) {
      message.reviewDeliverable = object.review_deliverable;
    }
    if (object.challenger_claim !== undefined && object.challenger_claim !== null) {
      message.challengerClaim = object.challenger_claim;
    }
    if (object.assignee_response !== undefined && object.assignee_response !== null) {
      message.assigneeResponse = object.assignee_response;
    }
    message.votes = object.votes?.map(e => JurorVote.fromAmino(e)) || [];
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = object.verdict;
    }
    if (object.reasoning !== undefined && object.reasoning !== null) {
      message.reasoning = object.reasoning;
    }
    if (object.content_challenge_id !== undefined && object.content_challenge_id !== null) {
      message.contentChallengeId = BigInt(object.content_challenge_id);
    }
    if (object.acceptance_deadline !== undefined && object.acceptance_deadline !== null) {
      message.acceptanceDeadline = BigInt(object.acceptance_deadline);
    }
    message.accepted = object.accepted?.map(e => e) || [];
    if (object.redraw_count !== undefined && object.redraw_count !== null) {
      message.redrawCount = object.redraw_count;
    }
    return message;
  },
  toAmino(message: JuryReview): JuryReviewAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.challenge_id = message.challengeId !== BigInt(0) ? message.challengeId?.toString() : undefined;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    if (message.jurors) {
      obj.jurors = message.jurors.map(e => e);
    } else {
      obj.jurors = message.jurors;
    }
    obj.required_votes = message.requiredVotes === 0 ? undefined : message.requiredVotes;
    if (message.expertWitnesses) {
      obj.expert_witnesses = message.expertWitnesses.map(e => e);
    } else {
      obj.expert_witnesses = message.expertWitnesses;
    }
    if (message.testimonies) {
      obj.testimonies = message.testimonies.map(e => e ? ExpertTestimony.toAmino(e) : undefined);
    } else {
      obj.testimonies = message.testimonies;
    }
    obj.review_deliverable = message.reviewDeliverable === "" ? undefined : message.reviewDeliverable;
    obj.challenger_claim = message.challengerClaim === "" ? undefined : message.challengerClaim;
    obj.assignee_response = message.assigneeResponse === "" ? undefined : message.assigneeResponse;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? JurorVote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.deadline = message.deadline !== BigInt(0) ? message.deadline?.toString() : undefined;
    obj.verdict = message.verdict === 0 ? undefined : message.verdict;
    obj.reasoning = message.reasoning === "" ? undefined : message.reasoning;
    obj.content_challenge_id = message.contentChallengeId !== BigInt(0) ? message.contentChallengeId?.toString() : undefined;
    obj.acceptance_deadline = message.acceptanceDeadline !== BigInt(0) ? message.acceptanceDeadline?.toString() : undefined;
    if (message.accepted) {
      obj.accepted = message.accepted.map(e => e);
    } else {
      obj.accepted = message.accepted;
    }
    obj.redraw_count = message.redrawCount === 0 ? undefined : message.redrawCount;
    return obj;
  },
  fromAminoMsg(object: JuryReviewAminoMsg): JuryReview {
    return JuryReview.fromAmino(object.value);
  },
  fromProtoMsg(message: JuryReviewProtoMsg): JuryReview {
    return JuryReview.decode(message.value);
  },
  toProto(message: JuryReview): Uint8Array {
    return JuryReview.encode(message).finish();
  },
  toProtoMsg(message: JuryReview): JuryReviewProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.JuryReview",
      value: JuryReview.encode(message).finish()
    };
  }
};
function createBaseJurorVote(): JurorVote {
  return {
    juror: "",
    criteriaVotes: [],
    verdict: 0,
    confidence: "",
    reasoning: "",
    submittedAt: BigInt(0)
  };
}
/**
 * @name JurorVote
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.JurorVote
 */
export const JurorVote = {
  typeUrl: "/sparkdream.rep.v1.JurorVote",
  encode(message: JurorVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juror !== "") {
      writer.uint32(10).string(message.juror);
    }
    for (const v of message.criteriaVotes) {
      CriteriaVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.verdict !== 0) {
      writer.uint32(24).int32(message.verdict);
    }
    if (message.confidence !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.confidence, 18).atomics);
    }
    if (message.reasoning !== "") {
      writer.uint32(42).string(message.reasoning);
    }
    if (message.submittedAt !== BigInt(0)) {
      writer.uint32(48).int64(message.submittedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): JurorVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJurorVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juror = reader.string();
          break;
        case 2:
          message.criteriaVotes.push(CriteriaVote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.verdict = reader.int32() as any;
          break;
        case 4:
          message.confidence = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.reasoning = reader.string();
          break;
        case 6:
          message.submittedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<JurorVote>): JurorVote {
    const message = createBaseJurorVote();
    message.juror = object.juror ?? "";
    message.criteriaVotes = object.criteriaVotes?.map(e => CriteriaVote.fromPartial(e)) || [];
    message.verdict = object.verdict ?? 0;
    message.confidence = object.confidence ?? "";
    message.reasoning = object.reasoning ?? "";
    message.submittedAt = object.submittedAt !== undefined && object.submittedAt !== null ? BigInt(object.submittedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: JurorVoteAmino): JurorVote {
    const message = createBaseJurorVote();
    if (object.juror !== undefined && object.juror !== null) {
      message.juror = object.juror;
    }
    message.criteriaVotes = object.criteria_votes?.map(e => CriteriaVote.fromAmino(e)) || [];
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = object.verdict;
    }
    if (object.confidence !== undefined && object.confidence !== null) {
      message.confidence = object.confidence;
    }
    if (object.reasoning !== undefined && object.reasoning !== null) {
      message.reasoning = object.reasoning;
    }
    if (object.submitted_at !== undefined && object.submitted_at !== null) {
      message.submittedAt = BigInt(object.submitted_at);
    }
    return message;
  },
  toAmino(message: JurorVote): JurorVoteAmino {
    const obj: any = {};
    obj.juror = message.juror === "" ? undefined : message.juror;
    if (message.criteriaVotes) {
      obj.criteria_votes = message.criteriaVotes.map(e => e ? CriteriaVote.toAmino(e) : undefined);
    } else {
      obj.criteria_votes = message.criteriaVotes;
    }
    obj.verdict = message.verdict === 0 ? undefined : message.verdict;
    obj.confidence = message.confidence === "" ? undefined : message.confidence;
    obj.reasoning = message.reasoning === "" ? undefined : message.reasoning;
    obj.submitted_at = message.submittedAt !== BigInt(0) ? message.submittedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: JurorVoteAminoMsg): JurorVote {
    return JurorVote.fromAmino(object.value);
  },
  fromProtoMsg(message: JurorVoteProtoMsg): JurorVote {
    return JurorVote.decode(message.value);
  },
  toProto(message: JurorVote): Uint8Array {
    return JurorVote.encode(message).finish();
  },
  toProtoMsg(message: JurorVote): JurorVoteProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.JurorVote",
      value: JurorVote.encode(message).finish()
    };
  }
};
function createBaseExpertTestimony(): ExpertTestimony {
  return {
    expert: "",
    opinion: "",
    reasoning: "",
    submittedAt: BigInt(0)
  };
}
/**
 * @name ExpertTestimony
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ExpertTestimony
 */
export const ExpertTestimony = {
  typeUrl: "/sparkdream.rep.v1.ExpertTestimony",
  encode(message: ExpertTestimony, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expert !== "") {
      writer.uint32(10).string(message.expert);
    }
    if (message.opinion !== "") {
      writer.uint32(18).string(message.opinion);
    }
    if (message.reasoning !== "") {
      writer.uint32(26).string(message.reasoning);
    }
    if (message.submittedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.submittedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExpertTestimony {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpertTestimony();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expert = reader.string();
          break;
        case 2:
          message.opinion = reader.string();
          break;
        case 3:
          message.reasoning = reader.string();
          break;
        case 4:
          message.submittedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExpertTestimony>): ExpertTestimony {
    const message = createBaseExpertTestimony();
    message.expert = object.expert ?? "";
    message.opinion = object.opinion ?? "";
    message.reasoning = object.reasoning ?? "";
    message.submittedAt = object.submittedAt !== undefined && object.submittedAt !== null ? BigInt(object.submittedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ExpertTestimonyAmino): ExpertTestimony {
    const message = createBaseExpertTestimony();
    if (object.expert !== undefined && object.expert !== null) {
      message.expert = object.expert;
    }
    if (object.opinion !== undefined && object.opinion !== null) {
      message.opinion = object.opinion;
    }
    if (object.reasoning !== undefined && object.reasoning !== null) {
      message.reasoning = object.reasoning;
    }
    if (object.submitted_at !== undefined && object.submitted_at !== null) {
      message.submittedAt = BigInt(object.submitted_at);
    }
    return message;
  },
  toAmino(message: ExpertTestimony): ExpertTestimonyAmino {
    const obj: any = {};
    obj.expert = message.expert === "" ? undefined : message.expert;
    obj.opinion = message.opinion === "" ? undefined : message.opinion;
    obj.reasoning = message.reasoning === "" ? undefined : message.reasoning;
    obj.submitted_at = message.submittedAt !== BigInt(0) ? message.submittedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ExpertTestimonyAminoMsg): ExpertTestimony {
    return ExpertTestimony.fromAmino(object.value);
  },
  fromProtoMsg(message: ExpertTestimonyProtoMsg): ExpertTestimony {
    return ExpertTestimony.decode(message.value);
  },
  toProto(message: ExpertTestimony): Uint8Array {
    return ExpertTestimony.encode(message).finish();
  },
  toProtoMsg(message: ExpertTestimony): ExpertTestimonyProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.ExpertTestimony",
      value: ExpertTestimony.encode(message).finish()
    };
  }
};
function createBaseCriteriaVote(): CriteriaVote {
  return {
    criteriaId: "",
    passed: false,
    score: 0,
    notes: ""
  };
}
/**
 * @name CriteriaVote
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.CriteriaVote
 */
export const CriteriaVote = {
  typeUrl: "/sparkdream.rep.v1.CriteriaVote",
  encode(message: CriteriaVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.criteriaId !== "") {
      writer.uint32(10).string(message.criteriaId);
    }
    if (message.passed === true) {
      writer.uint32(16).bool(message.passed);
    }
    if (message.score !== 0) {
      writer.uint32(24).uint32(message.score);
    }
    if (message.notes !== "") {
      writer.uint32(34).string(message.notes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CriteriaVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCriteriaVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.criteriaId = reader.string();
          break;
        case 2:
          message.passed = reader.bool();
          break;
        case 3:
          message.score = reader.uint32();
          break;
        case 4:
          message.notes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CriteriaVote>): CriteriaVote {
    const message = createBaseCriteriaVote();
    message.criteriaId = object.criteriaId ?? "";
    message.passed = object.passed ?? false;
    message.score = object.score ?? 0;
    message.notes = object.notes ?? "";
    return message;
  },
  fromAmino(object: CriteriaVoteAmino): CriteriaVote {
    const message = createBaseCriteriaVote();
    if (object.criteria_id !== undefined && object.criteria_id !== null) {
      message.criteriaId = object.criteria_id;
    }
    if (object.passed !== undefined && object.passed !== null) {
      message.passed = object.passed;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    }
    if (object.notes !== undefined && object.notes !== null) {
      message.notes = object.notes;
    }
    return message;
  },
  toAmino(message: CriteriaVote): CriteriaVoteAmino {
    const obj: any = {};
    obj.criteria_id = message.criteriaId === "" ? undefined : message.criteriaId;
    obj.passed = message.passed === false ? undefined : message.passed;
    obj.score = message.score === 0 ? undefined : message.score;
    obj.notes = message.notes === "" ? undefined : message.notes;
    return obj;
  },
  fromAminoMsg(object: CriteriaVoteAminoMsg): CriteriaVote {
    return CriteriaVote.fromAmino(object.value);
  },
  fromProtoMsg(message: CriteriaVoteProtoMsg): CriteriaVote {
    return CriteriaVote.decode(message.value);
  },
  toProto(message: CriteriaVote): Uint8Array {
    return CriteriaVote.encode(message).finish();
  },
  toProtoMsg(message: CriteriaVote): CriteriaVoteProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.CriteriaVote",
      value: CriteriaVote.encode(message).finish()
    };
  }
};