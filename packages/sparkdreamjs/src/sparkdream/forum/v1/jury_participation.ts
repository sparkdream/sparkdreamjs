//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * JuryParticipation defines the JuryParticipation message.
 * @name JuryParticipation
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.JuryParticipation
 */
export interface JuryParticipation {
  juror: string;
  totalAssigned: bigint;
  totalVoted: bigint;
  totalTimeouts: bigint;
  lastAssignedAt: bigint;
  excluded: boolean;
}
export interface JuryParticipationProtoMsg {
  typeUrl: "/sparkdream.forum.v1.JuryParticipation";
  value: Uint8Array;
}
/**
 * JuryParticipation defines the JuryParticipation message.
 * @name JuryParticipationAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.JuryParticipation
 */
export interface JuryParticipationAmino {
  juror?: string;
  total_assigned?: string;
  total_voted?: string;
  total_timeouts?: string;
  last_assigned_at?: string;
  excluded?: boolean;
}
export interface JuryParticipationAminoMsg {
  type: "/sparkdream.forum.v1.JuryParticipation";
  value: JuryParticipationAmino;
}
function createBaseJuryParticipation(): JuryParticipation {
  return {
    juror: "",
    totalAssigned: BigInt(0),
    totalVoted: BigInt(0),
    totalTimeouts: BigInt(0),
    lastAssignedAt: BigInt(0),
    excluded: false
  };
}
/**
 * JuryParticipation defines the JuryParticipation message.
 * @name JuryParticipation
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.JuryParticipation
 */
export const JuryParticipation = {
  typeUrl: "/sparkdream.forum.v1.JuryParticipation",
  encode(message: JuryParticipation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juror !== "") {
      writer.uint32(10).string(message.juror);
    }
    if (message.totalAssigned !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalAssigned);
    }
    if (message.totalVoted !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalVoted);
    }
    if (message.totalTimeouts !== BigInt(0)) {
      writer.uint32(32).uint64(message.totalTimeouts);
    }
    if (message.lastAssignedAt !== BigInt(0)) {
      writer.uint32(40).int64(message.lastAssignedAt);
    }
    if (message.excluded === true) {
      writer.uint32(48).bool(message.excluded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): JuryParticipation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJuryParticipation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juror = reader.string();
          break;
        case 2:
          message.totalAssigned = reader.uint64();
          break;
        case 3:
          message.totalVoted = reader.uint64();
          break;
        case 4:
          message.totalTimeouts = reader.uint64();
          break;
        case 5:
          message.lastAssignedAt = reader.int64();
          break;
        case 6:
          message.excluded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<JuryParticipation>): JuryParticipation {
    const message = createBaseJuryParticipation();
    message.juror = object.juror ?? "";
    message.totalAssigned = object.totalAssigned !== undefined && object.totalAssigned !== null ? BigInt(object.totalAssigned.toString()) : BigInt(0);
    message.totalVoted = object.totalVoted !== undefined && object.totalVoted !== null ? BigInt(object.totalVoted.toString()) : BigInt(0);
    message.totalTimeouts = object.totalTimeouts !== undefined && object.totalTimeouts !== null ? BigInt(object.totalTimeouts.toString()) : BigInt(0);
    message.lastAssignedAt = object.lastAssignedAt !== undefined && object.lastAssignedAt !== null ? BigInt(object.lastAssignedAt.toString()) : BigInt(0);
    message.excluded = object.excluded ?? false;
    return message;
  },
  fromAmino(object: JuryParticipationAmino): JuryParticipation {
    const message = createBaseJuryParticipation();
    if (object.juror !== undefined && object.juror !== null) {
      message.juror = object.juror;
    }
    if (object.total_assigned !== undefined && object.total_assigned !== null) {
      message.totalAssigned = BigInt(object.total_assigned);
    }
    if (object.total_voted !== undefined && object.total_voted !== null) {
      message.totalVoted = BigInt(object.total_voted);
    }
    if (object.total_timeouts !== undefined && object.total_timeouts !== null) {
      message.totalTimeouts = BigInt(object.total_timeouts);
    }
    if (object.last_assigned_at !== undefined && object.last_assigned_at !== null) {
      message.lastAssignedAt = BigInt(object.last_assigned_at);
    }
    if (object.excluded !== undefined && object.excluded !== null) {
      message.excluded = object.excluded;
    }
    return message;
  },
  toAmino(message: JuryParticipation): JuryParticipationAmino {
    const obj: any = {};
    obj.juror = message.juror === "" ? undefined : message.juror;
    obj.total_assigned = message.totalAssigned !== BigInt(0) ? message.totalAssigned?.toString() : undefined;
    obj.total_voted = message.totalVoted !== BigInt(0) ? message.totalVoted?.toString() : undefined;
    obj.total_timeouts = message.totalTimeouts !== BigInt(0) ? message.totalTimeouts?.toString() : undefined;
    obj.last_assigned_at = message.lastAssignedAt !== BigInt(0) ? message.lastAssignedAt?.toString() : undefined;
    obj.excluded = message.excluded === false ? undefined : message.excluded;
    return obj;
  },
  fromAminoMsg(object: JuryParticipationAminoMsg): JuryParticipation {
    return JuryParticipation.fromAmino(object.value);
  },
  fromProtoMsg(message: JuryParticipationProtoMsg): JuryParticipation {
    return JuryParticipation.decode(message.value);
  },
  toProto(message: JuryParticipation): Uint8Array {
    return JuryParticipation.encode(message).finish();
  },
  toProtoMsg(message: JuryParticipation): JuryParticipationProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.JuryParticipation",
      value: JuryParticipation.encode(message).finish()
    };
  }
};