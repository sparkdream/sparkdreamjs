//@ts-nocheck
import { StakeTargetType } from "./stake";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** ContentChallengeStatus defines the status of a content challenge. */
export enum ContentChallengeStatus {
  CONTENT_CHALLENGE_STATUS_ACTIVE = 0,
  CONTENT_CHALLENGE_STATUS_IN_JURY_REVIEW = 1,
  CONTENT_CHALLENGE_STATUS_UPHELD = 2,
  CONTENT_CHALLENGE_STATUS_REJECTED = 3,
  UNRECOGNIZED = -1,
}
export const ContentChallengeStatusAmino = ContentChallengeStatus;
export function contentChallengeStatusFromJSON(object: any): ContentChallengeStatus {
  switch (object) {
    case 0:
    case "CONTENT_CHALLENGE_STATUS_ACTIVE":
      return ContentChallengeStatus.CONTENT_CHALLENGE_STATUS_ACTIVE;
    case 1:
    case "CONTENT_CHALLENGE_STATUS_IN_JURY_REVIEW":
      return ContentChallengeStatus.CONTENT_CHALLENGE_STATUS_IN_JURY_REVIEW;
    case 2:
    case "CONTENT_CHALLENGE_STATUS_UPHELD":
      return ContentChallengeStatus.CONTENT_CHALLENGE_STATUS_UPHELD;
    case 3:
    case "CONTENT_CHALLENGE_STATUS_REJECTED":
      return ContentChallengeStatus.CONTENT_CHALLENGE_STATUS_REJECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContentChallengeStatus.UNRECOGNIZED;
  }
}
export function contentChallengeStatusToJSON(object: ContentChallengeStatus): string {
  switch (object) {
    case ContentChallengeStatus.CONTENT_CHALLENGE_STATUS_ACTIVE:
      return "CONTENT_CHALLENGE_STATUS_ACTIVE";
    case ContentChallengeStatus.CONTENT_CHALLENGE_STATUS_IN_JURY_REVIEW:
      return "CONTENT_CHALLENGE_STATUS_IN_JURY_REVIEW";
    case ContentChallengeStatus.CONTENT_CHALLENGE_STATUS_UPHELD:
      return "CONTENT_CHALLENGE_STATUS_UPHELD";
    case ContentChallengeStatus.CONTENT_CHALLENGE_STATUS_REJECTED:
      return "CONTENT_CHALLENGE_STATUS_REJECTED";
    case ContentChallengeStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ContentChallenge defines a challenge against bonded content.
 * Any member can challenge content that has an author bond.
 * The challenge routes through the jury system for resolution.
 * @name ContentChallenge
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ContentChallenge
 */
export interface ContentChallenge {
  id: bigint;
  /**
   * Target content identification (author bond type: 7=BLOG, 8=FORUM, 9=COLLECTION, 10=BLOG_REPLY)
   */
  targetType: StakeTargetType;
  targetId: bigint;
  /**
   * Challenger info
   */
  challenger: string;
  reason: string;
  evidence: string[];
  stakedDream: string;
  /**
   * Content author (resolved from author bond at challenge creation time)
   */
  author: string;
  /**
   * Status tracking
   */
  status: ContentChallengeStatus;
  /**
   * block height
   */
  createdAt: bigint;
  /**
   * block height (0 if unresolved)
   */
  resolvedAt: bigint;
  /**
   * block height
   */
  responseDeadline: bigint;
  /**
   * 0 if not yet in jury review
   */
  juryReviewId: bigint;
  /**
   * Author response (set when author responds)
   */
  authorResponse: string;
  authorEvidence: string[];
  /**
   * Bond amount snapshot (for reward calculation even after bond removal)
   */
  bondAmount: string;
}
export interface ContentChallengeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.ContentChallenge";
  value: Uint8Array;
}
/**
 * ContentChallenge defines a challenge against bonded content.
 * Any member can challenge content that has an author bond.
 * The challenge routes through the jury system for resolution.
 * @name ContentChallengeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ContentChallenge
 */
export interface ContentChallengeAmino {
  id?: string;
  /**
   * Target content identification (author bond type: 7=BLOG, 8=FORUM, 9=COLLECTION, 10=BLOG_REPLY)
   */
  target_type?: StakeTargetType;
  target_id?: string;
  /**
   * Challenger info
   */
  challenger?: string;
  reason?: string;
  evidence?: string[];
  staked_dream?: string;
  /**
   * Content author (resolved from author bond at challenge creation time)
   */
  author?: string;
  /**
   * Status tracking
   */
  status?: ContentChallengeStatus;
  /**
   * block height
   */
  created_at?: string;
  /**
   * block height (0 if unresolved)
   */
  resolved_at?: string;
  /**
   * block height
   */
  response_deadline?: string;
  /**
   * 0 if not yet in jury review
   */
  jury_review_id?: string;
  /**
   * Author response (set when author responds)
   */
  author_response?: string;
  author_evidence?: string[];
  /**
   * Bond amount snapshot (for reward calculation even after bond removal)
   */
  bond_amount?: string;
}
export interface ContentChallengeAminoMsg {
  type: "/sparkdream.rep.v1.ContentChallenge";
  value: ContentChallengeAmino;
}
function createBaseContentChallenge(): ContentChallenge {
  return {
    id: BigInt(0),
    targetType: 0,
    targetId: BigInt(0),
    challenger: "",
    reason: "",
    evidence: [],
    stakedDream: "",
    author: "",
    status: 0,
    createdAt: BigInt(0),
    resolvedAt: BigInt(0),
    responseDeadline: BigInt(0),
    juryReviewId: BigInt(0),
    authorResponse: "",
    authorEvidence: [],
    bondAmount: ""
  };
}
/**
 * ContentChallenge defines a challenge against bonded content.
 * Any member can challenge content that has an author bond.
 * The challenge routes through the jury system for resolution.
 * @name ContentChallenge
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ContentChallenge
 */
export const ContentChallenge = {
  typeUrl: "/sparkdream.rep.v1.ContentChallenge",
  encode(message: ContentChallenge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.targetType !== 0) {
      writer.uint32(16).int32(message.targetType);
    }
    if (message.targetId !== BigInt(0)) {
      writer.uint32(24).uint64(message.targetId);
    }
    if (message.challenger !== "") {
      writer.uint32(34).string(message.challenger);
    }
    if (message.reason !== "") {
      writer.uint32(42).string(message.reason);
    }
    for (const v of message.evidence) {
      writer.uint32(50).string(v!);
    }
    if (message.stakedDream !== "") {
      writer.uint32(58).string(message.stakedDream);
    }
    if (message.author !== "") {
      writer.uint32(66).string(message.author);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(80).int64(message.createdAt);
    }
    if (message.resolvedAt !== BigInt(0)) {
      writer.uint32(88).int64(message.resolvedAt);
    }
    if (message.responseDeadline !== BigInt(0)) {
      writer.uint32(96).int64(message.responseDeadline);
    }
    if (message.juryReviewId !== BigInt(0)) {
      writer.uint32(104).uint64(message.juryReviewId);
    }
    if (message.authorResponse !== "") {
      writer.uint32(114).string(message.authorResponse);
    }
    for (const v of message.authorEvidence) {
      writer.uint32(122).string(v!);
    }
    if (message.bondAmount !== "") {
      writer.uint32(130).string(message.bondAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContentChallenge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.targetType = reader.int32() as any;
          break;
        case 3:
          message.targetId = reader.uint64();
          break;
        case 4:
          message.challenger = reader.string();
          break;
        case 5:
          message.reason = reader.string();
          break;
        case 6:
          message.evidence.push(reader.string());
          break;
        case 7:
          message.stakedDream = reader.string();
          break;
        case 8:
          message.author = reader.string();
          break;
        case 9:
          message.status = reader.int32() as any;
          break;
        case 10:
          message.createdAt = reader.int64();
          break;
        case 11:
          message.resolvedAt = reader.int64();
          break;
        case 12:
          message.responseDeadline = reader.int64();
          break;
        case 13:
          message.juryReviewId = reader.uint64();
          break;
        case 14:
          message.authorResponse = reader.string();
          break;
        case 15:
          message.authorEvidence.push(reader.string());
          break;
        case 16:
          message.bondAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContentChallenge>): ContentChallenge {
    const message = createBaseContentChallenge();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.targetType = object.targetType ?? 0;
    message.targetId = object.targetId !== undefined && object.targetId !== null ? BigInt(object.targetId.toString()) : BigInt(0);
    message.challenger = object.challenger ?? "";
    message.reason = object.reason ?? "";
    message.evidence = object.evidence?.map(e => e) || [];
    message.stakedDream = object.stakedDream ?? "";
    message.author = object.author ?? "";
    message.status = object.status ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.resolvedAt = object.resolvedAt !== undefined && object.resolvedAt !== null ? BigInt(object.resolvedAt.toString()) : BigInt(0);
    message.responseDeadline = object.responseDeadline !== undefined && object.responseDeadline !== null ? BigInt(object.responseDeadline.toString()) : BigInt(0);
    message.juryReviewId = object.juryReviewId !== undefined && object.juryReviewId !== null ? BigInt(object.juryReviewId.toString()) : BigInt(0);
    message.authorResponse = object.authorResponse ?? "";
    message.authorEvidence = object.authorEvidence?.map(e => e) || [];
    message.bondAmount = object.bondAmount ?? "";
    return message;
  },
  fromAmino(object: ContentChallengeAmino): ContentChallenge {
    const message = createBaseContentChallenge();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.target_type !== undefined && object.target_type !== null) {
      message.targetType = object.target_type;
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = BigInt(object.target_id);
    }
    if (object.challenger !== undefined && object.challenger !== null) {
      message.challenger = object.challenger;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    message.evidence = object.evidence?.map(e => e) || [];
    if (object.staked_dream !== undefined && object.staked_dream !== null) {
      message.stakedDream = object.staked_dream;
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = object.author;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.resolved_at !== undefined && object.resolved_at !== null) {
      message.resolvedAt = BigInt(object.resolved_at);
    }
    if (object.response_deadline !== undefined && object.response_deadline !== null) {
      message.responseDeadline = BigInt(object.response_deadline);
    }
    if (object.jury_review_id !== undefined && object.jury_review_id !== null) {
      message.juryReviewId = BigInt(object.jury_review_id);
    }
    if (object.author_response !== undefined && object.author_response !== null) {
      message.authorResponse = object.author_response;
    }
    message.authorEvidence = object.author_evidence?.map(e => e) || [];
    if (object.bond_amount !== undefined && object.bond_amount !== null) {
      message.bondAmount = object.bond_amount;
    }
    return message;
  },
  toAmino(message: ContentChallenge): ContentChallengeAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.target_type = message.targetType === 0 ? undefined : message.targetType;
    obj.target_id = message.targetId !== BigInt(0) ? message.targetId?.toString() : undefined;
    obj.challenger = message.challenger === "" ? undefined : message.challenger;
    obj.reason = message.reason === "" ? undefined : message.reason;
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e);
    } else {
      obj.evidence = message.evidence;
    }
    obj.staked_dream = message.stakedDream === "" ? undefined : message.stakedDream;
    obj.author = message.author === "" ? undefined : message.author;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.resolved_at = message.resolvedAt !== BigInt(0) ? message.resolvedAt?.toString() : undefined;
    obj.response_deadline = message.responseDeadline !== BigInt(0) ? message.responseDeadline?.toString() : undefined;
    obj.jury_review_id = message.juryReviewId !== BigInt(0) ? message.juryReviewId?.toString() : undefined;
    obj.author_response = message.authorResponse === "" ? undefined : message.authorResponse;
    if (message.authorEvidence) {
      obj.author_evidence = message.authorEvidence.map(e => e);
    } else {
      obj.author_evidence = message.authorEvidence;
    }
    obj.bond_amount = message.bondAmount === "" ? undefined : message.bondAmount;
    return obj;
  },
  fromAminoMsg(object: ContentChallengeAminoMsg): ContentChallenge {
    return ContentChallenge.fromAmino(object.value);
  },
  fromProtoMsg(message: ContentChallengeProtoMsg): ContentChallenge {
    return ContentChallenge.decode(message.value);
  },
  toProto(message: ContentChallenge): Uint8Array {
    return ContentChallenge.encode(message).finish();
  },
  toProtoMsg(message: ContentChallenge): ContentChallengeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.ContentChallenge",
      value: ContentChallenge.encode(message).finish()
    };
  }
};