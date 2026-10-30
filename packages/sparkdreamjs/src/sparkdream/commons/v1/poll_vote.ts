//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * PollVote is a member's open vote on a poll.
 * @name PollVote
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PollVote
 */
export interface PollVote {
  pollId: bigint;
  voter: string;
  /**
   * option is the index into the poll's options.
   */
  option: bigint;
  votedAt: bigint;
}
export interface PollVoteProtoMsg {
  typeUrl: "/sparkdream.commons.v1.PollVote";
  value: Uint8Array;
}
/**
 * PollVote is a member's open vote on a poll.
 * @name PollVoteAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PollVote
 */
export interface PollVoteAmino {
  poll_id?: string;
  voter?: string;
  /**
   * option is the index into the poll's options.
   */
  option?: string;
  voted_at?: string;
}
export interface PollVoteAminoMsg {
  type: "/sparkdream.commons.v1.PollVote";
  value: PollVoteAmino;
}
function createBasePollVote(): PollVote {
  return {
    pollId: BigInt(0),
    voter: "",
    option: BigInt(0),
    votedAt: BigInt(0)
  };
}
/**
 * PollVote is a member's open vote on a poll.
 * @name PollVote
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.PollVote
 */
export const PollVote = {
  typeUrl: "/sparkdream.commons.v1.PollVote",
  encode(message: PollVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pollId !== BigInt(0)) {
      writer.uint32(8).uint64(message.pollId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== BigInt(0)) {
      writer.uint32(24).uint64(message.option);
    }
    if (message.votedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.votedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PollVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePollVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pollId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.uint64();
          break;
        case 4:
          message.votedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PollVote>): PollVote {
    const message = createBasePollVote();
    message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option !== undefined && object.option !== null ? BigInt(object.option.toString()) : BigInt(0);
    message.votedAt = object.votedAt !== undefined && object.votedAt !== null ? BigInt(object.votedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PollVoteAmino): PollVote {
    const message = createBasePollVote();
    if (object.poll_id !== undefined && object.poll_id !== null) {
      message.pollId = BigInt(object.poll_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = BigInt(object.option);
    }
    if (object.voted_at !== undefined && object.voted_at !== null) {
      message.votedAt = BigInt(object.voted_at);
    }
    return message;
  },
  toAmino(message: PollVote): PollVoteAmino {
    const obj: any = {};
    obj.poll_id = message.pollId !== BigInt(0) ? message.pollId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.option = message.option !== BigInt(0) ? message.option?.toString() : undefined;
    obj.voted_at = message.votedAt !== BigInt(0) ? message.votedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PollVoteAminoMsg): PollVote {
    return PollVote.fromAmino(object.value);
  },
  fromProtoMsg(message: PollVoteProtoMsg): PollVote {
    return PollVote.decode(message.value);
  },
  toProto(message: PollVote): Uint8Array {
    return PollVote.encode(message).finish();
  },
  toProtoMsg(message: PollVote): PollVoteProtoMsg {
    return {
      typeUrl: "/sparkdream.commons.v1.PollVote",
      value: PollVote.encode(message).finish()
    };
  }
};