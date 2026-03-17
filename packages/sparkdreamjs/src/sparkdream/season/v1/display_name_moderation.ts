//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * DisplayNameModeration defines the DisplayNameModeration message.
 * @name DisplayNameModeration
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.DisplayNameModeration
 */
export interface DisplayNameModeration {
  member: string;
  rejectedName: string;
  reason: string;
  moderatedAt: bigint;
  active: boolean;
  appealChallengeId: string;
  appealedAt: bigint;
  appealSucceeded: boolean;
}
export interface DisplayNameModerationProtoMsg {
  typeUrl: "/sparkdream.season.v1.DisplayNameModeration";
  value: Uint8Array;
}
/**
 * DisplayNameModeration defines the DisplayNameModeration message.
 * @name DisplayNameModerationAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.DisplayNameModeration
 */
export interface DisplayNameModerationAmino {
  member?: string;
  rejected_name?: string;
  reason?: string;
  moderated_at?: string;
  active?: boolean;
  appeal_challenge_id?: string;
  appealed_at?: string;
  appeal_succeeded?: boolean;
}
export interface DisplayNameModerationAminoMsg {
  type: "/sparkdream.season.v1.DisplayNameModeration";
  value: DisplayNameModerationAmino;
}
function createBaseDisplayNameModeration(): DisplayNameModeration {
  return {
    member: "",
    rejectedName: "",
    reason: "",
    moderatedAt: BigInt(0),
    active: false,
    appealChallengeId: "",
    appealedAt: BigInt(0),
    appealSucceeded: false
  };
}
/**
 * DisplayNameModeration defines the DisplayNameModeration message.
 * @name DisplayNameModeration
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.DisplayNameModeration
 */
export const DisplayNameModeration = {
  typeUrl: "/sparkdream.season.v1.DisplayNameModeration",
  encode(message: DisplayNameModeration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.member !== "") {
      writer.uint32(10).string(message.member);
    }
    if (message.rejectedName !== "") {
      writer.uint32(18).string(message.rejectedName);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (message.moderatedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.moderatedAt);
    }
    if (message.active === true) {
      writer.uint32(40).bool(message.active);
    }
    if (message.appealChallengeId !== "") {
      writer.uint32(50).string(message.appealChallengeId);
    }
    if (message.appealedAt !== BigInt(0)) {
      writer.uint32(56).int64(message.appealedAt);
    }
    if (message.appealSucceeded === true) {
      writer.uint32(64).bool(message.appealSucceeded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DisplayNameModeration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisplayNameModeration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = reader.string();
          break;
        case 2:
          message.rejectedName = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.moderatedAt = reader.int64();
          break;
        case 5:
          message.active = reader.bool();
          break;
        case 6:
          message.appealChallengeId = reader.string();
          break;
        case 7:
          message.appealedAt = reader.int64();
          break;
        case 8:
          message.appealSucceeded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DisplayNameModeration>): DisplayNameModeration {
    const message = createBaseDisplayNameModeration();
    message.member = object.member ?? "";
    message.rejectedName = object.rejectedName ?? "";
    message.reason = object.reason ?? "";
    message.moderatedAt = object.moderatedAt !== undefined && object.moderatedAt !== null ? BigInt(object.moderatedAt.toString()) : BigInt(0);
    message.active = object.active ?? false;
    message.appealChallengeId = object.appealChallengeId ?? "";
    message.appealedAt = object.appealedAt !== undefined && object.appealedAt !== null ? BigInt(object.appealedAt.toString()) : BigInt(0);
    message.appealSucceeded = object.appealSucceeded ?? false;
    return message;
  },
  fromAmino(object: DisplayNameModerationAmino): DisplayNameModeration {
    const message = createBaseDisplayNameModeration();
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.rejected_name !== undefined && object.rejected_name !== null) {
      message.rejectedName = object.rejected_name;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.moderated_at !== undefined && object.moderated_at !== null) {
      message.moderatedAt = BigInt(object.moderated_at);
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.appeal_challenge_id !== undefined && object.appeal_challenge_id !== null) {
      message.appealChallengeId = object.appeal_challenge_id;
    }
    if (object.appealed_at !== undefined && object.appealed_at !== null) {
      message.appealedAt = BigInt(object.appealed_at);
    }
    if (object.appeal_succeeded !== undefined && object.appeal_succeeded !== null) {
      message.appealSucceeded = object.appeal_succeeded;
    }
    return message;
  },
  toAmino(message: DisplayNameModeration): DisplayNameModerationAmino {
    const obj: any = {};
    obj.member = message.member === "" ? undefined : message.member;
    obj.rejected_name = message.rejectedName === "" ? undefined : message.rejectedName;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.moderated_at = message.moderatedAt !== BigInt(0) ? message.moderatedAt?.toString() : undefined;
    obj.active = message.active === false ? undefined : message.active;
    obj.appeal_challenge_id = message.appealChallengeId === "" ? undefined : message.appealChallengeId;
    obj.appealed_at = message.appealedAt !== BigInt(0) ? message.appealedAt?.toString() : undefined;
    obj.appeal_succeeded = message.appealSucceeded === false ? undefined : message.appealSucceeded;
    return obj;
  },
  fromAminoMsg(object: DisplayNameModerationAminoMsg): DisplayNameModeration {
    return DisplayNameModeration.fromAmino(object.value);
  },
  fromProtoMsg(message: DisplayNameModerationProtoMsg): DisplayNameModeration {
    return DisplayNameModeration.decode(message.value);
  },
  toProto(message: DisplayNameModeration): Uint8Array {
    return DisplayNameModeration.encode(message).finish();
  },
  toProtoMsg(message: DisplayNameModeration): DisplayNameModerationProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.DisplayNameModeration",
      value: DisplayNameModeration.encode(message).finish()
    };
  }
};