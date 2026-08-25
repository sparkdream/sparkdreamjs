//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * JuryParticipation is a juror's service record.
 * 
 * Jurors are drawn by lot and paid a flat participation reward for voting.
 * Ignoring a summons is **not** penalised: the adjudication terminal path
 * resolves an inconclusive jury safely and the redraw sweep replaces an
 * unanswered seat within the acceptance window, so what remains of a no-show is
 * a few hours of delay in a week-long review. Pricing that would oblige every
 * eligible member to monitor the chain for an event that reaches them roughly
 * once a year, and under broad sortition non-response is the expected default
 * of a population that never volunteered.
 * 
 * This record instead feeds **selection weight**: a juror who never answers is
 * drawn less often, never removed from the lot. Nobody loses eligibility, and an
 * address can always earn its weight back — which an excluded one could not,
 * since it would never be drawn again to demonstrate otherwise.
 * 
 * The one penalised case is total_abandoned: accepting a summons and then
 * letting it lapse. Accepting is voluntary and declining is free, so that is a
 * broken commitment rather than an accident, and it is charged in reputation.
 * @name JuryParticipation
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.JuryParticipation
 */
export interface JuryParticipation {
  juror: string;
  /**
   * Seats drawn, votes cast, and seats that went to the deadline unanswered.
   */
  totalAssigned: bigint;
  totalVoted: bigint;
  totalTimeouts: bigint;
  lastAssignedAt: bigint;
  /**
   * Seats explicitly handed back. Counted as answering the summons, both for
   * selection weight and so that declining never loads the responsiveness
   * denominator — a decline that counted as silence would cost exactly as much
   * as ignoring the summons, and there would be no free way out of a seat
   * nobody asked for.
   */
  totalDeclined: bigint;
  /**
   * Seats accepted and then left unanswered at the deadline. The one form of
   * absence that is penalised, in reputation.
   */
  totalAbandoned: bigint;
}
export interface JuryParticipationProtoMsg {
  typeUrl: "/sparkdream.rep.v1.JuryParticipation";
  value: Uint8Array;
}
/**
 * JuryParticipation is a juror's service record.
 * 
 * Jurors are drawn by lot and paid a flat participation reward for voting.
 * Ignoring a summons is **not** penalised: the adjudication terminal path
 * resolves an inconclusive jury safely and the redraw sweep replaces an
 * unanswered seat within the acceptance window, so what remains of a no-show is
 * a few hours of delay in a week-long review. Pricing that would oblige every
 * eligible member to monitor the chain for an event that reaches them roughly
 * once a year, and under broad sortition non-response is the expected default
 * of a population that never volunteered.
 * 
 * This record instead feeds **selection weight**: a juror who never answers is
 * drawn less often, never removed from the lot. Nobody loses eligibility, and an
 * address can always earn its weight back — which an excluded one could not,
 * since it would never be drawn again to demonstrate otherwise.
 * 
 * The one penalised case is total_abandoned: accepting a summons and then
 * letting it lapse. Accepting is voluntary and declining is free, so that is a
 * broken commitment rather than an accident, and it is charged in reputation.
 * @name JuryParticipationAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.JuryParticipation
 */
export interface JuryParticipationAmino {
  juror?: string;
  /**
   * Seats drawn, votes cast, and seats that went to the deadline unanswered.
   */
  total_assigned?: string;
  total_voted?: string;
  total_timeouts?: string;
  last_assigned_at?: string;
  /**
   * Seats explicitly handed back. Counted as answering the summons, both for
   * selection weight and so that declining never loads the responsiveness
   * denominator — a decline that counted as silence would cost exactly as much
   * as ignoring the summons, and there would be no free way out of a seat
   * nobody asked for.
   */
  total_declined?: string;
  /**
   * Seats accepted and then left unanswered at the deadline. The one form of
   * absence that is penalised, in reputation.
   */
  total_abandoned?: string;
}
export interface JuryParticipationAminoMsg {
  type: "/sparkdream.rep.v1.JuryParticipation";
  value: JuryParticipationAmino;
}
function createBaseJuryParticipation(): JuryParticipation {
  return {
    juror: "",
    totalAssigned: BigInt(0),
    totalVoted: BigInt(0),
    totalTimeouts: BigInt(0),
    lastAssignedAt: BigInt(0),
    totalDeclined: BigInt(0),
    totalAbandoned: BigInt(0)
  };
}
/**
 * JuryParticipation is a juror's service record.
 * 
 * Jurors are drawn by lot and paid a flat participation reward for voting.
 * Ignoring a summons is **not** penalised: the adjudication terminal path
 * resolves an inconclusive jury safely and the redraw sweep replaces an
 * unanswered seat within the acceptance window, so what remains of a no-show is
 * a few hours of delay in a week-long review. Pricing that would oblige every
 * eligible member to monitor the chain for an event that reaches them roughly
 * once a year, and under broad sortition non-response is the expected default
 * of a population that never volunteered.
 * 
 * This record instead feeds **selection weight**: a juror who never answers is
 * drawn less often, never removed from the lot. Nobody loses eligibility, and an
 * address can always earn its weight back — which an excluded one could not,
 * since it would never be drawn again to demonstrate otherwise.
 * 
 * The one penalised case is total_abandoned: accepting a summons and then
 * letting it lapse. Accepting is voluntary and declining is free, so that is a
 * broken commitment rather than an accident, and it is charged in reputation.
 * @name JuryParticipation
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.JuryParticipation
 */
export const JuryParticipation = {
  typeUrl: "/sparkdream.rep.v1.JuryParticipation",
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
    if (message.totalDeclined !== BigInt(0)) {
      writer.uint32(48).uint64(message.totalDeclined);
    }
    if (message.totalAbandoned !== BigInt(0)) {
      writer.uint32(56).uint64(message.totalAbandoned);
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
          message.totalDeclined = reader.uint64();
          break;
        case 7:
          message.totalAbandoned = reader.uint64();
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
    message.totalDeclined = object.totalDeclined !== undefined && object.totalDeclined !== null ? BigInt(object.totalDeclined.toString()) : BigInt(0);
    message.totalAbandoned = object.totalAbandoned !== undefined && object.totalAbandoned !== null ? BigInt(object.totalAbandoned.toString()) : BigInt(0);
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
    if (object.total_declined !== undefined && object.total_declined !== null) {
      message.totalDeclined = BigInt(object.total_declined);
    }
    if (object.total_abandoned !== undefined && object.total_abandoned !== null) {
      message.totalAbandoned = BigInt(object.total_abandoned);
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
    obj.total_declined = message.totalDeclined !== BigInt(0) ? message.totalDeclined?.toString() : undefined;
    obj.total_abandoned = message.totalAbandoned !== BigInt(0) ? message.totalAbandoned?.toString() : undefined;
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
      typeUrl: "/sparkdream.rep.v1.JuryParticipation",
      value: JuryParticipation.encode(message).finish()
    };
  }
};