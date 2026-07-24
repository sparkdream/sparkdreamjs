//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export enum ChallengeStatus {
  CHALLENGE_STATUS_ACTIVE = 0,
  CHALLENGE_STATUS_IN_JURY_REVIEW = 1,
  CHALLENGE_STATUS_UPHELD = 2,
  CHALLENGE_STATUS_REJECTED = 3,
  /**
   * CHALLENGE_STATUS_VOIDED - VOIDED terminates a challenge without a verdict when the underlying
   * initiative is discarded out from under it — specifically when the parent
   * project is cancelled. The challenger's stake is refunded in full (no burn,
   * no reward) because the dispute was never adjudicated; any pending jury
   * review is closed INCONCLUSIVE.
   */
  CHALLENGE_STATUS_VOIDED = 4,
  UNRECOGNIZED = -1,
}
export const ChallengeStatusAmino = ChallengeStatus;
export function challengeStatusFromJSON(object: any): ChallengeStatus {
  switch (object) {
    case 0:
    case "CHALLENGE_STATUS_ACTIVE":
      return ChallengeStatus.CHALLENGE_STATUS_ACTIVE;
    case 1:
    case "CHALLENGE_STATUS_IN_JURY_REVIEW":
      return ChallengeStatus.CHALLENGE_STATUS_IN_JURY_REVIEW;
    case 2:
    case "CHALLENGE_STATUS_UPHELD":
      return ChallengeStatus.CHALLENGE_STATUS_UPHELD;
    case 3:
    case "CHALLENGE_STATUS_REJECTED":
      return ChallengeStatus.CHALLENGE_STATUS_REJECTED;
    case 4:
    case "CHALLENGE_STATUS_VOIDED":
      return ChallengeStatus.CHALLENGE_STATUS_VOIDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChallengeStatus.UNRECOGNIZED;
  }
}
export function challengeStatusToJSON(object: ChallengeStatus): string {
  switch (object) {
    case ChallengeStatus.CHALLENGE_STATUS_ACTIVE:
      return "CHALLENGE_STATUS_ACTIVE";
    case ChallengeStatus.CHALLENGE_STATUS_IN_JURY_REVIEW:
      return "CHALLENGE_STATUS_IN_JURY_REVIEW";
    case ChallengeStatus.CHALLENGE_STATUS_UPHELD:
      return "CHALLENGE_STATUS_UPHELD";
    case ChallengeStatus.CHALLENGE_STATUS_REJECTED:
      return "CHALLENGE_STATUS_REJECTED";
    case ChallengeStatus.CHALLENGE_STATUS_VOIDED:
      return "CHALLENGE_STATUS_VOIDED";
    case ChallengeStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Challenge defines the Challenge message.
 * @name Challenge
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Challenge
 */
export interface Challenge {
  id: bigint;
  initiativeId: bigint;
  challenger: string;
  reason: string;
  evidence: string[];
  stakedDream: string;
  status: ChallengeStatus;
  createdAt: bigint;
  resolvedAt: bigint;
  responseDeadline: bigint;
}
export interface ChallengeProtoMsg {
  typeUrl: "/sparkdream.rep.v1.Challenge";
  value: Uint8Array;
}
/**
 * Challenge defines the Challenge message.
 * @name ChallengeAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Challenge
 */
export interface ChallengeAmino {
  id?: string;
  initiative_id?: string;
  challenger?: string;
  reason?: string;
  evidence?: string[];
  staked_dream?: string;
  status?: ChallengeStatus;
  created_at?: string;
  resolved_at?: string;
  response_deadline?: string;
}
export interface ChallengeAminoMsg {
  type: "/sparkdream.rep.v1.Challenge";
  value: ChallengeAmino;
}
function createBaseChallenge(): Challenge {
  return {
    id: BigInt(0),
    initiativeId: BigInt(0),
    challenger: "",
    reason: "",
    evidence: [],
    stakedDream: "",
    status: 0,
    createdAt: BigInt(0),
    resolvedAt: BigInt(0),
    responseDeadline: BigInt(0)
  };
}
/**
 * Challenge defines the Challenge message.
 * @name Challenge
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Challenge
 */
export const Challenge = {
  typeUrl: "/sparkdream.rep.v1.Challenge",
  encode(message: Challenge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.initiativeId);
    }
    if (message.challenger !== "") {
      writer.uint32(26).string(message.challenger);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    for (const v of message.evidence) {
      writer.uint32(42).string(v!);
    }
    if (message.stakedDream !== "") {
      writer.uint32(50).string(message.stakedDream);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(96).int64(message.createdAt);
    }
    if (message.resolvedAt !== BigInt(0)) {
      writer.uint32(104).int64(message.resolvedAt);
    }
    if (message.responseDeadline !== BigInt(0)) {
      writer.uint32(112).int64(message.responseDeadline);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Challenge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.initiativeId = reader.uint64();
          break;
        case 3:
          message.challenger = reader.string();
          break;
        case 4:
          message.reason = reader.string();
          break;
        case 5:
          message.evidence.push(reader.string());
          break;
        case 6:
          message.stakedDream = reader.string();
          break;
        case 11:
          message.status = reader.int32() as any;
          break;
        case 12:
          message.createdAt = reader.int64();
          break;
        case 13:
          message.resolvedAt = reader.int64();
          break;
        case 14:
          message.responseDeadline = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Challenge>): Challenge {
    const message = createBaseChallenge();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.challenger = object.challenger ?? "";
    message.reason = object.reason ?? "";
    message.evidence = object.evidence?.map(e => e) || [];
    message.stakedDream = object.stakedDream ?? "";
    message.status = object.status ?? 0;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.resolvedAt = object.resolvedAt !== undefined && object.resolvedAt !== null ? BigInt(object.resolvedAt.toString()) : BigInt(0);
    message.responseDeadline = object.responseDeadline !== undefined && object.responseDeadline !== null ? BigInt(object.responseDeadline.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ChallengeAmino): Challenge {
    const message = createBaseChallenge();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
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
    return message;
  },
  toAmino(message: Challenge): ChallengeAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.challenger = message.challenger === "" ? undefined : message.challenger;
    obj.reason = message.reason === "" ? undefined : message.reason;
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e);
    } else {
      obj.evidence = message.evidence;
    }
    obj.staked_dream = message.stakedDream === "" ? undefined : message.stakedDream;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.resolved_at = message.resolvedAt !== BigInt(0) ? message.resolvedAt?.toString() : undefined;
    obj.response_deadline = message.responseDeadline !== BigInt(0) ? message.responseDeadline?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ChallengeAminoMsg): Challenge {
    return Challenge.fromAmino(object.value);
  },
  fromProtoMsg(message: ChallengeProtoMsg): Challenge {
    return Challenge.decode(message.value);
  },
  toProto(message: Challenge): Uint8Array {
    return Challenge.encode(message).finish();
  },
  toProtoMsg(message: Challenge): ChallengeProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.Challenge",
      value: Challenge.encode(message).finish()
    };
  }
};