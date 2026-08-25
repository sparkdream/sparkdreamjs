//@ts-nocheck
import { CriteriaVote, CriteriaVoteAmino } from "./jury_review";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * One bonded reviewer's verdict on a round of submitted work.
 * 
 * Keyed by (initiative_id, round, reviewer): a rejection sends the initiative
 * back to ASSIGNED for the assignee to fix and resubmit, and each resubmission
 * opens a new round, so the same reviewer may legitimately file again on the
 * same initiative. Rounds are bounded by max_review_rounds.
 * 
 * Reviewers are paid per verdict filed, never per approval — the whole point of
 * the role is that judging pays and the outcome does not.
 * @name InitiativeReview
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.InitiativeReview
 */
export interface InitiativeReview {
  initiativeId: bigint;
  /**
   * Which review round this verdict belongs to, from Initiative.review_round.
   */
  round: number;
  reviewer: string;
  approved: boolean;
  /**
   * Per-criterion verdicts, validated against the initiative's
   * acceptance_criteria. This is CriteriaVote's proper home: a per-item verdict
   * belongs to somebody accountable for getting it right.
   */
  criteriaVotes: CriteriaVote[];
  comments: string;
  createdAt: bigint;
  /**
   * Bond committed against this verdict, released when the challenge window
   * closes unchallenged and slashed when a jury overturns it. Scales with the
   * initiative budget, so liability tracks what the review could mint.
   */
  bondReserved: string;
  /**
   * Set once the verdict's bond has been released or slashed, so the sweep does
   * not settle the same verdict twice.
   */
  settled: boolean;
}
export interface InitiativeReviewProtoMsg {
  typeUrl: "/sparkdream.rep.v1.InitiativeReview";
  value: Uint8Array;
}
/**
 * One bonded reviewer's verdict on a round of submitted work.
 * 
 * Keyed by (initiative_id, round, reviewer): a rejection sends the initiative
 * back to ASSIGNED for the assignee to fix and resubmit, and each resubmission
 * opens a new round, so the same reviewer may legitimately file again on the
 * same initiative. Rounds are bounded by max_review_rounds.
 * 
 * Reviewers are paid per verdict filed, never per approval — the whole point of
 * the role is that judging pays and the outcome does not.
 * @name InitiativeReviewAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.InitiativeReview
 */
export interface InitiativeReviewAmino {
  initiative_id?: string;
  /**
   * Which review round this verdict belongs to, from Initiative.review_round.
   */
  round?: number;
  reviewer?: string;
  approved?: boolean;
  /**
   * Per-criterion verdicts, validated against the initiative's
   * acceptance_criteria. This is CriteriaVote's proper home: a per-item verdict
   * belongs to somebody accountable for getting it right.
   */
  criteria_votes?: CriteriaVoteAmino[];
  comments?: string;
  created_at?: string;
  /**
   * Bond committed against this verdict, released when the challenge window
   * closes unchallenged and slashed when a jury overturns it. Scales with the
   * initiative budget, so liability tracks what the review could mint.
   */
  bond_reserved?: string;
  /**
   * Set once the verdict's bond has been released or slashed, so the sweep does
   * not settle the same verdict twice.
   */
  settled?: boolean;
}
export interface InitiativeReviewAminoMsg {
  type: "/sparkdream.rep.v1.InitiativeReview";
  value: InitiativeReviewAmino;
}
function createBaseInitiativeReview(): InitiativeReview {
  return {
    initiativeId: BigInt(0),
    round: 0,
    reviewer: "",
    approved: false,
    criteriaVotes: [],
    comments: "",
    createdAt: BigInt(0),
    bondReserved: "",
    settled: false
  };
}
/**
 * One bonded reviewer's verdict on a round of submitted work.
 * 
 * Keyed by (initiative_id, round, reviewer): a rejection sends the initiative
 * back to ASSIGNED for the assignee to fix and resubmit, and each resubmission
 * opens a new round, so the same reviewer may legitimately file again on the
 * same initiative. Rounds are bounded by max_review_rounds.
 * 
 * Reviewers are paid per verdict filed, never per approval — the whole point of
 * the role is that judging pays and the outcome does not.
 * @name InitiativeReview
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.InitiativeReview
 */
export const InitiativeReview = {
  typeUrl: "/sparkdream.rep.v1.InitiativeReview",
  encode(message: InitiativeReview, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.initiativeId);
    }
    if (message.round !== 0) {
      writer.uint32(16).uint32(message.round);
    }
    if (message.reviewer !== "") {
      writer.uint32(26).string(message.reviewer);
    }
    if (message.approved === true) {
      writer.uint32(32).bool(message.approved);
    }
    for (const v of message.criteriaVotes) {
      CriteriaVote.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(50).string(message.comments);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(56).int64(message.createdAt);
    }
    if (message.bondReserved !== "") {
      writer.uint32(66).string(message.bondReserved);
    }
    if (message.settled === true) {
      writer.uint32(72).bool(message.settled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InitiativeReview {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitiativeReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiativeId = reader.uint64();
          break;
        case 2:
          message.round = reader.uint32();
          break;
        case 3:
          message.reviewer = reader.string();
          break;
        case 4:
          message.approved = reader.bool();
          break;
        case 5:
          message.criteriaVotes.push(CriteriaVote.decode(reader, reader.uint32()));
          break;
        case 6:
          message.comments = reader.string();
          break;
        case 7:
          message.createdAt = reader.int64();
          break;
        case 8:
          message.bondReserved = reader.string();
          break;
        case 9:
          message.settled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InitiativeReview>): InitiativeReview {
    const message = createBaseInitiativeReview();
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.round = object.round ?? 0;
    message.reviewer = object.reviewer ?? "";
    message.approved = object.approved ?? false;
    message.criteriaVotes = object.criteriaVotes?.map(e => CriteriaVote.fromPartial(e)) || [];
    message.comments = object.comments ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.bondReserved = object.bondReserved ?? "";
    message.settled = object.settled ?? false;
    return message;
  },
  fromAmino(object: InitiativeReviewAmino): InitiativeReview {
    const message = createBaseInitiativeReview();
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = object.reviewer;
    }
    if (object.approved !== undefined && object.approved !== null) {
      message.approved = object.approved;
    }
    message.criteriaVotes = object.criteria_votes?.map(e => CriteriaVote.fromAmino(e)) || [];
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.bond_reserved !== undefined && object.bond_reserved !== null) {
      message.bondReserved = object.bond_reserved;
    }
    if (object.settled !== undefined && object.settled !== null) {
      message.settled = object.settled;
    }
    return message;
  },
  toAmino(message: InitiativeReview): InitiativeReviewAmino {
    const obj: any = {};
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.round = message.round === 0 ? undefined : message.round;
    obj.reviewer = message.reviewer === "" ? undefined : message.reviewer;
    obj.approved = message.approved === false ? undefined : message.approved;
    if (message.criteriaVotes) {
      obj.criteria_votes = message.criteriaVotes.map(e => e ? CriteriaVote.toAmino(e) : undefined);
    } else {
      obj.criteria_votes = message.criteriaVotes;
    }
    obj.comments = message.comments === "" ? undefined : message.comments;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.bond_reserved = message.bondReserved === "" ? undefined : message.bondReserved;
    obj.settled = message.settled === false ? undefined : message.settled;
    return obj;
  },
  fromAminoMsg(object: InitiativeReviewAminoMsg): InitiativeReview {
    return InitiativeReview.fromAmino(object.value);
  },
  fromProtoMsg(message: InitiativeReviewProtoMsg): InitiativeReview {
    return InitiativeReview.decode(message.value);
  },
  toProto(message: InitiativeReview): Uint8Array {
    return InitiativeReview.encode(message).finish();
  },
  toProtoMsg(message: InitiativeReview): InitiativeReviewProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.InitiativeReview",
      value: InitiativeReview.encode(message).finish()
    };
  }
};