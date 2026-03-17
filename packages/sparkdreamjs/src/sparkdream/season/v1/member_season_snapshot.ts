//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * @name MemberSeasonSnapshot_FinalReputationEntry
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.undefined
 */
export interface MemberSeasonSnapshot_FinalReputationEntry {
  key: string;
  value: string;
}
export interface MemberSeasonSnapshot_FinalReputationEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name MemberSeasonSnapshot_FinalReputationEntryAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberSeasonSnapshot_FinalReputationEntry
 */
export interface MemberSeasonSnapshot_FinalReputationEntryAmino {
  key?: string;
  value?: string;
}
export interface MemberSeasonSnapshot_FinalReputationEntryAminoMsg {
  type: string;
  value: MemberSeasonSnapshot_FinalReputationEntryAmino;
}
/**
 * MemberSeasonSnapshot stores a member's state at the end of a season.
 * @name MemberSeasonSnapshot
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberSeasonSnapshot
 */
export interface MemberSeasonSnapshot {
  /**
   * Composite key: season/address
   */
  seasonAddress: string;
  /**
   * Final DREAM balance at season end
   */
  finalDreamBalance: string;
  /**
   * Final reputation scores by tag
   */
  finalReputation: {
    [key: string]: string;
  };
  /**
   * Number of initiatives completed during the season
   */
  initiativesCompleted: bigint;
  /**
   * Total XP earned during the season
   */
  xpEarned: bigint;
  /**
   * Level achieved at season end
   */
  seasonLevel: bigint;
  /**
   * Achievements earned during this season
   */
  achievementsEarned: string[];
}
export interface MemberSeasonSnapshotProtoMsg {
  typeUrl: "/sparkdream.season.v1.MemberSeasonSnapshot";
  value: Uint8Array;
}
/**
 * MemberSeasonSnapshot stores a member's state at the end of a season.
 * @name MemberSeasonSnapshotAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberSeasonSnapshot
 */
export interface MemberSeasonSnapshotAmino {
  /**
   * Composite key: season/address
   */
  season_address?: string;
  /**
   * Final DREAM balance at season end
   */
  final_dream_balance?: string;
  /**
   * Final reputation scores by tag
   */
  final_reputation?: {
    [key: string]: string;
  };
  /**
   * Number of initiatives completed during the season
   */
  initiatives_completed?: string;
  /**
   * Total XP earned during the season
   */
  xp_earned?: string;
  /**
   * Level achieved at season end
   */
  season_level?: string;
  /**
   * Achievements earned during this season
   */
  achievements_earned?: string[];
}
export interface MemberSeasonSnapshotAminoMsg {
  type: "/sparkdream.season.v1.MemberSeasonSnapshot";
  value: MemberSeasonSnapshotAmino;
}
function createBaseMemberSeasonSnapshot_FinalReputationEntry(): MemberSeasonSnapshot_FinalReputationEntry {
  return {
    key: "",
    value: ""
  };
}
/**
 * @name MemberSeasonSnapshot_FinalReputationEntry
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.undefined
 */
export const MemberSeasonSnapshot_FinalReputationEntry = {
  encode(message: MemberSeasonSnapshot_FinalReputationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberSeasonSnapshot_FinalReputationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberSeasonSnapshot_FinalReputationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MemberSeasonSnapshot_FinalReputationEntry>): MemberSeasonSnapshot_FinalReputationEntry {
    const message = createBaseMemberSeasonSnapshot_FinalReputationEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: MemberSeasonSnapshot_FinalReputationEntryAmino): MemberSeasonSnapshot_FinalReputationEntry {
    const message = createBaseMemberSeasonSnapshot_FinalReputationEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: MemberSeasonSnapshot_FinalReputationEntry): MemberSeasonSnapshot_FinalReputationEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: MemberSeasonSnapshot_FinalReputationEntryAminoMsg): MemberSeasonSnapshot_FinalReputationEntry {
    return MemberSeasonSnapshot_FinalReputationEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberSeasonSnapshot_FinalReputationEntryProtoMsg): MemberSeasonSnapshot_FinalReputationEntry {
    return MemberSeasonSnapshot_FinalReputationEntry.decode(message.value);
  },
  toProto(message: MemberSeasonSnapshot_FinalReputationEntry): Uint8Array {
    return MemberSeasonSnapshot_FinalReputationEntry.encode(message).finish();
  }
};
function createBaseMemberSeasonSnapshot(): MemberSeasonSnapshot {
  return {
    seasonAddress: "",
    finalDreamBalance: "",
    finalReputation: {},
    initiativesCompleted: BigInt(0),
    xpEarned: BigInt(0),
    seasonLevel: BigInt(0),
    achievementsEarned: []
  };
}
/**
 * MemberSeasonSnapshot stores a member's state at the end of a season.
 * @name MemberSeasonSnapshot
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberSeasonSnapshot
 */
export const MemberSeasonSnapshot = {
  typeUrl: "/sparkdream.season.v1.MemberSeasonSnapshot",
  encode(message: MemberSeasonSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seasonAddress !== "") {
      writer.uint32(10).string(message.seasonAddress);
    }
    if (message.finalDreamBalance !== "") {
      writer.uint32(18).string(message.finalDreamBalance);
    }
    Object.entries(message.finalReputation).forEach(([key, value]) => {
      MemberSeasonSnapshot_FinalReputationEntry.encode({
        key: key as any,
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.initiativesCompleted !== BigInt(0)) {
      writer.uint32(32).uint64(message.initiativesCompleted);
    }
    if (message.xpEarned !== BigInt(0)) {
      writer.uint32(40).uint64(message.xpEarned);
    }
    if (message.seasonLevel !== BigInt(0)) {
      writer.uint32(48).uint64(message.seasonLevel);
    }
    for (const v of message.achievementsEarned) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberSeasonSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberSeasonSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seasonAddress = reader.string();
          break;
        case 2:
          message.finalDreamBalance = reader.string();
          break;
        case 3:
          const entry3 = MemberSeasonSnapshot_FinalReputationEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.finalReputation[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.initiativesCompleted = reader.uint64();
          break;
        case 5:
          message.xpEarned = reader.uint64();
          break;
        case 6:
          message.seasonLevel = reader.uint64();
          break;
        case 7:
          message.achievementsEarned.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MemberSeasonSnapshot>): MemberSeasonSnapshot {
    const message = createBaseMemberSeasonSnapshot();
    message.seasonAddress = object.seasonAddress ?? "";
    message.finalDreamBalance = object.finalDreamBalance ?? "";
    message.finalReputation = Object.entries(object.finalReputation ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.initiativesCompleted = object.initiativesCompleted !== undefined && object.initiativesCompleted !== null ? BigInt(object.initiativesCompleted.toString()) : BigInt(0);
    message.xpEarned = object.xpEarned !== undefined && object.xpEarned !== null ? BigInt(object.xpEarned.toString()) : BigInt(0);
    message.seasonLevel = object.seasonLevel !== undefined && object.seasonLevel !== null ? BigInt(object.seasonLevel.toString()) : BigInt(0);
    message.achievementsEarned = object.achievementsEarned?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MemberSeasonSnapshotAmino): MemberSeasonSnapshot {
    const message = createBaseMemberSeasonSnapshot();
    if (object.season_address !== undefined && object.season_address !== null) {
      message.seasonAddress = object.season_address;
    }
    if (object.final_dream_balance !== undefined && object.final_dream_balance !== null) {
      message.finalDreamBalance = object.final_dream_balance;
    }
    message.finalReputation = Object.entries(object.final_reputation ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.initiatives_completed !== undefined && object.initiatives_completed !== null) {
      message.initiativesCompleted = BigInt(object.initiatives_completed);
    }
    if (object.xp_earned !== undefined && object.xp_earned !== null) {
      message.xpEarned = BigInt(object.xp_earned);
    }
    if (object.season_level !== undefined && object.season_level !== null) {
      message.seasonLevel = BigInt(object.season_level);
    }
    message.achievementsEarned = object.achievements_earned?.map(e => e) || [];
    return message;
  },
  toAmino(message: MemberSeasonSnapshot): MemberSeasonSnapshotAmino {
    const obj: any = {};
    obj.season_address = message.seasonAddress === "" ? undefined : message.seasonAddress;
    obj.final_dream_balance = message.finalDreamBalance === "" ? undefined : message.finalDreamBalance;
    obj.final_reputation = {};
    if (message.finalReputation) {
      Object.entries(message.finalReputation).forEach(([k, v]) => {
        obj.final_reputation[k] = v;
      });
    }
    obj.initiatives_completed = message.initiativesCompleted !== BigInt(0) ? message.initiativesCompleted?.toString() : undefined;
    obj.xp_earned = message.xpEarned !== BigInt(0) ? message.xpEarned?.toString() : undefined;
    obj.season_level = message.seasonLevel !== BigInt(0) ? message.seasonLevel?.toString() : undefined;
    if (message.achievementsEarned) {
      obj.achievements_earned = message.achievementsEarned.map(e => e);
    } else {
      obj.achievements_earned = message.achievementsEarned;
    }
    return obj;
  },
  fromAminoMsg(object: MemberSeasonSnapshotAminoMsg): MemberSeasonSnapshot {
    return MemberSeasonSnapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberSeasonSnapshotProtoMsg): MemberSeasonSnapshot {
    return MemberSeasonSnapshot.decode(message.value);
  },
  toProto(message: MemberSeasonSnapshot): Uint8Array {
    return MemberSeasonSnapshot.encode(message).finish();
  },
  toProtoMsg(message: MemberSeasonSnapshot): MemberSeasonSnapshotProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MemberSeasonSnapshot",
      value: MemberSeasonSnapshot.encode(message).finish()
    };
  }
};