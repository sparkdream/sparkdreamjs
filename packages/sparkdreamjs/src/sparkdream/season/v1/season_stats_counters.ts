//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * SeasonStatsCounters holds the running aggregates of one season, updated
 * where the events happen so the SeasonStats query reads them instead of
 * scanning every profile and quest (SEA-35).
 * @name SeasonStatsCounters
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonStatsCounters
 */
export interface SeasonStatsCounters {
  season: bigint;
  /**
   * Sum of season XP held by members (XP granted this season, less XP
   * removed by zeroing).
   */
  totalXpEarned: bigint;
  /**
   * Members holding season XP > 0.
   */
  activeMembers: bigint;
  /**
   * Initiatives completed this season (x/rep completion hook).
   */
  initiativesCompleted: bigint;
  /**
   * Quest rewards claimed this season.
   */
  questsCompleted: bigint;
}
export interface SeasonStatsCountersProtoMsg {
  typeUrl: "/sparkdream.season.v1.SeasonStatsCounters";
  value: Uint8Array;
}
/**
 * SeasonStatsCounters holds the running aggregates of one season, updated
 * where the events happen so the SeasonStats query reads them instead of
 * scanning every profile and quest (SEA-35).
 * @name SeasonStatsCountersAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonStatsCounters
 */
export interface SeasonStatsCountersAmino {
  season?: string;
  /**
   * Sum of season XP held by members (XP granted this season, less XP
   * removed by zeroing).
   */
  total_xp_earned?: string;
  /**
   * Members holding season XP > 0.
   */
  active_members?: string;
  /**
   * Initiatives completed this season (x/rep completion hook).
   */
  initiatives_completed?: string;
  /**
   * Quest rewards claimed this season.
   */
  quests_completed?: string;
}
export interface SeasonStatsCountersAminoMsg {
  type: "/sparkdream.season.v1.SeasonStatsCounters";
  value: SeasonStatsCountersAmino;
}
function createBaseSeasonStatsCounters(): SeasonStatsCounters {
  return {
    season: BigInt(0),
    totalXpEarned: BigInt(0),
    activeMembers: BigInt(0),
    initiativesCompleted: BigInt(0),
    questsCompleted: BigInt(0)
  };
}
/**
 * SeasonStatsCounters holds the running aggregates of one season, updated
 * where the events happen so the SeasonStats query reads them instead of
 * scanning every profile and quest (SEA-35).
 * @name SeasonStatsCounters
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonStatsCounters
 */
export const SeasonStatsCounters = {
  typeUrl: "/sparkdream.season.v1.SeasonStatsCounters",
  encode(message: SeasonStatsCounters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.season !== BigInt(0)) {
      writer.uint32(8).uint64(message.season);
    }
    if (message.totalXpEarned !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalXpEarned);
    }
    if (message.activeMembers !== BigInt(0)) {
      writer.uint32(24).uint64(message.activeMembers);
    }
    if (message.initiativesCompleted !== BigInt(0)) {
      writer.uint32(32).uint64(message.initiativesCompleted);
    }
    if (message.questsCompleted !== BigInt(0)) {
      writer.uint32(40).uint64(message.questsCompleted);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SeasonStatsCounters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonStatsCounters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.season = reader.uint64();
          break;
        case 2:
          message.totalXpEarned = reader.uint64();
          break;
        case 3:
          message.activeMembers = reader.uint64();
          break;
        case 4:
          message.initiativesCompleted = reader.uint64();
          break;
        case 5:
          message.questsCompleted = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SeasonStatsCounters>): SeasonStatsCounters {
    const message = createBaseSeasonStatsCounters();
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    message.totalXpEarned = object.totalXpEarned !== undefined && object.totalXpEarned !== null ? BigInt(object.totalXpEarned.toString()) : BigInt(0);
    message.activeMembers = object.activeMembers !== undefined && object.activeMembers !== null ? BigInt(object.activeMembers.toString()) : BigInt(0);
    message.initiativesCompleted = object.initiativesCompleted !== undefined && object.initiativesCompleted !== null ? BigInt(object.initiativesCompleted.toString()) : BigInt(0);
    message.questsCompleted = object.questsCompleted !== undefined && object.questsCompleted !== null ? BigInt(object.questsCompleted.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SeasonStatsCountersAmino): SeasonStatsCounters {
    const message = createBaseSeasonStatsCounters();
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    if (object.total_xp_earned !== undefined && object.total_xp_earned !== null) {
      message.totalXpEarned = BigInt(object.total_xp_earned);
    }
    if (object.active_members !== undefined && object.active_members !== null) {
      message.activeMembers = BigInt(object.active_members);
    }
    if (object.initiatives_completed !== undefined && object.initiatives_completed !== null) {
      message.initiativesCompleted = BigInt(object.initiatives_completed);
    }
    if (object.quests_completed !== undefined && object.quests_completed !== null) {
      message.questsCompleted = BigInt(object.quests_completed);
    }
    return message;
  },
  toAmino(message: SeasonStatsCounters): SeasonStatsCountersAmino {
    const obj: any = {};
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    obj.total_xp_earned = message.totalXpEarned !== BigInt(0) ? message.totalXpEarned?.toString() : undefined;
    obj.active_members = message.activeMembers !== BigInt(0) ? message.activeMembers?.toString() : undefined;
    obj.initiatives_completed = message.initiativesCompleted !== BigInt(0) ? message.initiativesCompleted?.toString() : undefined;
    obj.quests_completed = message.questsCompleted !== BigInt(0) ? message.questsCompleted?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SeasonStatsCountersAminoMsg): SeasonStatsCounters {
    return SeasonStatsCounters.fromAmino(object.value);
  },
  fromProtoMsg(message: SeasonStatsCountersProtoMsg): SeasonStatsCounters {
    return SeasonStatsCounters.decode(message.value);
  },
  toProto(message: SeasonStatsCounters): Uint8Array {
    return SeasonStatsCounters.encode(message).finish();
  },
  toProtoMsg(message: SeasonStatsCounters): SeasonStatsCountersProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.SeasonStatsCounters",
      value: SeasonStatsCounters.encode(message).finish()
    };
  }
};