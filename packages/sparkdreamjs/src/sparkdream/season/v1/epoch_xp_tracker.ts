//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * EpochXpTracker defines the EpochXpTracker message.
 * @name EpochXpTracker
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.EpochXpTracker
 */
export interface EpochXpTracker {
  memberEpoch: string;
  voteXpEarned: bigint;
  forumXpEarned: bigint;
  questXpEarned: bigint;
  otherXpEarned: bigint;
}
export interface EpochXpTrackerProtoMsg {
  typeUrl: "/sparkdream.season.v1.EpochXpTracker";
  value: Uint8Array;
}
/**
 * EpochXpTracker defines the EpochXpTracker message.
 * @name EpochXpTrackerAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.EpochXpTracker
 */
export interface EpochXpTrackerAmino {
  member_epoch?: string;
  vote_xp_earned?: string;
  forum_xp_earned?: string;
  quest_xp_earned?: string;
  other_xp_earned?: string;
}
export interface EpochXpTrackerAminoMsg {
  type: "/sparkdream.season.v1.EpochXpTracker";
  value: EpochXpTrackerAmino;
}
function createBaseEpochXpTracker(): EpochXpTracker {
  return {
    memberEpoch: "",
    voteXpEarned: BigInt(0),
    forumXpEarned: BigInt(0),
    questXpEarned: BigInt(0),
    otherXpEarned: BigInt(0)
  };
}
/**
 * EpochXpTracker defines the EpochXpTracker message.
 * @name EpochXpTracker
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.EpochXpTracker
 */
export const EpochXpTracker = {
  typeUrl: "/sparkdream.season.v1.EpochXpTracker",
  encode(message: EpochXpTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberEpoch !== "") {
      writer.uint32(10).string(message.memberEpoch);
    }
    if (message.voteXpEarned !== BigInt(0)) {
      writer.uint32(16).uint64(message.voteXpEarned);
    }
    if (message.forumXpEarned !== BigInt(0)) {
      writer.uint32(24).uint64(message.forumXpEarned);
    }
    if (message.questXpEarned !== BigInt(0)) {
      writer.uint32(32).uint64(message.questXpEarned);
    }
    if (message.otherXpEarned !== BigInt(0)) {
      writer.uint32(40).uint64(message.otherXpEarned);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochXpTracker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochXpTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberEpoch = reader.string();
          break;
        case 2:
          message.voteXpEarned = reader.uint64();
          break;
        case 3:
          message.forumXpEarned = reader.uint64();
          break;
        case 4:
          message.questXpEarned = reader.uint64();
          break;
        case 5:
          message.otherXpEarned = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EpochXpTracker>): EpochXpTracker {
    const message = createBaseEpochXpTracker();
    message.memberEpoch = object.memberEpoch ?? "";
    message.voteXpEarned = object.voteXpEarned !== undefined && object.voteXpEarned !== null ? BigInt(object.voteXpEarned.toString()) : BigInt(0);
    message.forumXpEarned = object.forumXpEarned !== undefined && object.forumXpEarned !== null ? BigInt(object.forumXpEarned.toString()) : BigInt(0);
    message.questXpEarned = object.questXpEarned !== undefined && object.questXpEarned !== null ? BigInt(object.questXpEarned.toString()) : BigInt(0);
    message.otherXpEarned = object.otherXpEarned !== undefined && object.otherXpEarned !== null ? BigInt(object.otherXpEarned.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EpochXpTrackerAmino): EpochXpTracker {
    const message = createBaseEpochXpTracker();
    if (object.member_epoch !== undefined && object.member_epoch !== null) {
      message.memberEpoch = object.member_epoch;
    }
    if (object.vote_xp_earned !== undefined && object.vote_xp_earned !== null) {
      message.voteXpEarned = BigInt(object.vote_xp_earned);
    }
    if (object.forum_xp_earned !== undefined && object.forum_xp_earned !== null) {
      message.forumXpEarned = BigInt(object.forum_xp_earned);
    }
    if (object.quest_xp_earned !== undefined && object.quest_xp_earned !== null) {
      message.questXpEarned = BigInt(object.quest_xp_earned);
    }
    if (object.other_xp_earned !== undefined && object.other_xp_earned !== null) {
      message.otherXpEarned = BigInt(object.other_xp_earned);
    }
    return message;
  },
  toAmino(message: EpochXpTracker): EpochXpTrackerAmino {
    const obj: any = {};
    obj.member_epoch = message.memberEpoch === "" ? undefined : message.memberEpoch;
    obj.vote_xp_earned = message.voteXpEarned !== BigInt(0) ? message.voteXpEarned?.toString() : undefined;
    obj.forum_xp_earned = message.forumXpEarned !== BigInt(0) ? message.forumXpEarned?.toString() : undefined;
    obj.quest_xp_earned = message.questXpEarned !== BigInt(0) ? message.questXpEarned?.toString() : undefined;
    obj.other_xp_earned = message.otherXpEarned !== BigInt(0) ? message.otherXpEarned?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochXpTrackerAminoMsg): EpochXpTracker {
    return EpochXpTracker.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochXpTrackerProtoMsg): EpochXpTracker {
    return EpochXpTracker.decode(message.value);
  },
  toProto(message: EpochXpTracker): Uint8Array {
    return EpochXpTracker.encode(message).finish();
  },
  toProtoMsg(message: EpochXpTracker): EpochXpTrackerProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.EpochXpTracker",
      value: EpochXpTracker.encode(message).finish()
    };
  }
};