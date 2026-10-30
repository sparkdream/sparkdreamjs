//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** PollStatus is a poll's lifecycle state. */
export enum PollStatus {
  POLL_STATUS_UNSPECIFIED = 0,
  /** POLL_STATUS_OPEN - OPEN: voting is open until the deadline. */
  POLL_STATUS_OPEN = 1,
  /** POLL_STATUS_CLOSED - CLOSED: the deadline passed; tallies are final. */
  POLL_STATUS_CLOSED = 2,
  /** POLL_STATUS_CANCELLED - CANCELLED: the creator withdrew it before any vote. */
  POLL_STATUS_CANCELLED = 3,
  UNRECOGNIZED = -1,
}
export const PollStatusAmino = PollStatus;
export function pollStatusFromJSON(object: any): PollStatus {
  switch (object) {
    case 0:
    case "POLL_STATUS_UNSPECIFIED":
      return PollStatus.POLL_STATUS_UNSPECIFIED;
    case 1:
    case "POLL_STATUS_OPEN":
      return PollStatus.POLL_STATUS_OPEN;
    case 2:
    case "POLL_STATUS_CLOSED":
      return PollStatus.POLL_STATUS_CLOSED;
    case 3:
    case "POLL_STATUS_CANCELLED":
      return PollStatus.POLL_STATUS_CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PollStatus.UNRECOGNIZED;
  }
}
export function pollStatusToJSON(object: PollStatus): string {
  switch (object) {
    case PollStatus.POLL_STATUS_UNSPECIFIED:
      return "POLL_STATUS_UNSPECIFIED";
    case PollStatus.POLL_STATUS_OPEN:
      return "POLL_STATUS_OPEN";
    case PollStatus.POLL_STATUS_CLOSED:
      return "POLL_STATUS_CLOSED";
    case PollStatus.POLL_STATUS_CANCELLED:
      return "POLL_STATUS_CANCELLED";
    case PollStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Poll is a non-binding, single-choice question put to a group's members.
 * It never executes anything.
 * @name Poll
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Poll
 */
export interface Poll {
  id: bigint;
  /**
   * council_name is the group whose members vote.
   */
  councilName: string;
  creator: string;
  question: string;
  options: string[];
  /**
   * secret_ballot polls are voted with MsgAnonymousVotePoll against the
   * voter snapshot taken at opening.
   */
  secretBallot: boolean;
  openedAt: bigint;
  /**
   * deadline is the unix time voting closes.
   */
  deadline: bigint;
  status: PollStatus;
  /**
   * tallies[i] counts the votes for options[i] (one member, one vote).
   */
  tallies: bigint[];
  /**
   * voter_root is the Merkle root of the voter snapshot (secret ballots).
   */
  voterRoot: Uint8Array;
  /**
   * eligible_voters is the number of members who could vote at opening:
   * the group's member count for an open poll, the snapshot's leaf count
   * (members with a registered ZK key) for a secret one.
   */
  eligibleVoters: bigint;
  /**
   * closed_at is when the poll closed or was cancelled (0 while open).
   */
  closedAt: bigint;
}
export interface PollProtoMsg {
  typeUrl: "/sparkdream.commons.v1.Poll";
  value: Uint8Array;
}
/**
 * Poll is a non-binding, single-choice question put to a group's members.
 * It never executes anything.
 * @name PollAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Poll
 */
export interface PollAmino {
  id?: string;
  /**
   * council_name is the group whose members vote.
   */
  council_name?: string;
  creator?: string;
  question?: string;
  options?: string[];
  /**
   * secret_ballot polls are voted with MsgAnonymousVotePoll against the
   * voter snapshot taken at opening.
   */
  secret_ballot?: boolean;
  opened_at?: string;
  /**
   * deadline is the unix time voting closes.
   */
  deadline?: string;
  status?: PollStatus;
  /**
   * tallies[i] counts the votes for options[i] (one member, one vote).
   */
  tallies?: string[];
  /**
   * voter_root is the Merkle root of the voter snapshot (secret ballots).
   */
  voter_root?: string;
  /**
   * eligible_voters is the number of members who could vote at opening:
   * the group's member count for an open poll, the snapshot's leaf count
   * (members with a registered ZK key) for a secret one.
   */
  eligible_voters?: string;
  /**
   * closed_at is when the poll closed or was cancelled (0 while open).
   */
  closed_at?: string;
}
export interface PollAminoMsg {
  type: "/sparkdream.commons.v1.Poll";
  value: PollAmino;
}
function createBasePoll(): Poll {
  return {
    id: BigInt(0),
    councilName: "",
    creator: "",
    question: "",
    options: [],
    secretBallot: false,
    openedAt: BigInt(0),
    deadline: BigInt(0),
    status: 0,
    tallies: [],
    voterRoot: new Uint8Array(),
    eligibleVoters: BigInt(0),
    closedAt: BigInt(0)
  };
}
/**
 * Poll is a non-binding, single-choice question put to a group's members.
 * It never executes anything.
 * @name Poll
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Poll
 */
export const Poll = {
  typeUrl: "/sparkdream.commons.v1.Poll",
  encode(message: Poll, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.councilName !== "") {
      writer.uint32(18).string(message.councilName);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.question !== "") {
      writer.uint32(34).string(message.question);
    }
    for (const v of message.options) {
      writer.uint32(42).string(v!);
    }
    if (message.secretBallot === true) {
      writer.uint32(48).bool(message.secretBallot);
    }
    if (message.openedAt !== BigInt(0)) {
      writer.uint32(56).int64(message.openedAt);
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(64).int64(message.deadline);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    writer.uint32(82).fork();
    for (const v of message.tallies) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.voterRoot.length !== 0) {
      writer.uint32(90).bytes(message.voterRoot);
    }
    if (message.eligibleVoters !== BigInt(0)) {
      writer.uint32(96).uint64(message.eligibleVoters);
    }
    if (message.closedAt !== BigInt(0)) {
      writer.uint32(104).int64(message.closedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Poll {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.councilName = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.question = reader.string();
          break;
        case 5:
          message.options.push(reader.string());
          break;
        case 6:
          message.secretBallot = reader.bool();
          break;
        case 7:
          message.openedAt = reader.int64();
          break;
        case 8:
          message.deadline = reader.int64();
          break;
        case 9:
          message.status = reader.int32() as any;
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tallies.push(reader.uint64());
            }
          } else {
            message.tallies.push(reader.uint64());
          }
          break;
        case 11:
          message.voterRoot = reader.bytes();
          break;
        case 12:
          message.eligibleVoters = reader.uint64();
          break;
        case 13:
          message.closedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Poll>): Poll {
    const message = createBasePoll();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.councilName = object.councilName ?? "";
    message.creator = object.creator ?? "";
    message.question = object.question ?? "";
    message.options = object.options?.map(e => e) || [];
    message.secretBallot = object.secretBallot ?? false;
    message.openedAt = object.openedAt !== undefined && object.openedAt !== null ? BigInt(object.openedAt.toString()) : BigInt(0);
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.tallies = object.tallies?.map(e => BigInt(e.toString())) || [];
    message.voterRoot = object.voterRoot ?? new Uint8Array();
    message.eligibleVoters = object.eligibleVoters !== undefined && object.eligibleVoters !== null ? BigInt(object.eligibleVoters.toString()) : BigInt(0);
    message.closedAt = object.closedAt !== undefined && object.closedAt !== null ? BigInt(object.closedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PollAmino): Poll {
    const message = createBasePoll();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.council_name !== undefined && object.council_name !== null) {
      message.councilName = object.council_name;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.question !== undefined && object.question !== null) {
      message.question = object.question;
    }
    message.options = object.options?.map(e => e) || [];
    if (object.secret_ballot !== undefined && object.secret_ballot !== null) {
      message.secretBallot = object.secret_ballot;
    }
    if (object.opened_at !== undefined && object.opened_at !== null) {
      message.openedAt = BigInt(object.opened_at);
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    message.tallies = object.tallies?.map(e => BigInt(e)) || [];
    if (object.voter_root !== undefined && object.voter_root !== null) {
      message.voterRoot = bytesFromBase64(object.voter_root);
    }
    if (object.eligible_voters !== undefined && object.eligible_voters !== null) {
      message.eligibleVoters = BigInt(object.eligible_voters);
    }
    if (object.closed_at !== undefined && object.closed_at !== null) {
      message.closedAt = BigInt(object.closed_at);
    }
    return message;
  },
  toAmino(message: Poll): PollAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.council_name = message.councilName === "" ? undefined : message.councilName;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.question = message.question === "" ? undefined : message.question;
    if (message.options) {
      obj.options = message.options.map(e => e);
    } else {
      obj.options = message.options;
    }
    obj.secret_ballot = message.secretBallot === false ? undefined : message.secretBallot;
    obj.opened_at = message.openedAt !== BigInt(0) ? message.openedAt?.toString() : undefined;
    obj.deadline = message.deadline !== BigInt(0) ? message.deadline?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    if (message.tallies) {
      obj.tallies = message.tallies.map(e => e.toString());
    } else {
      obj.tallies = message.tallies;
    }
    obj.voter_root = message.voterRoot ? base64FromBytes(message.voterRoot) : undefined;
    obj.eligible_voters = message.eligibleVoters !== BigInt(0) ? message.eligibleVoters?.toString() : undefined;
    obj.closed_at = message.closedAt !== BigInt(0) ? message.closedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PollAminoMsg): Poll {
    return Poll.fromAmino(object.value);
  },
  fromProtoMsg(message: PollProtoMsg): Poll {
    return Poll.decode(message.value);
  },
  toProto(message: Poll): Uint8Array {
    return Poll.encode(message).finish();
  },
  toProtoMsg(message: Poll): PollProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.Poll",
      value: Poll.encode(message).finish()
    };
  }
};