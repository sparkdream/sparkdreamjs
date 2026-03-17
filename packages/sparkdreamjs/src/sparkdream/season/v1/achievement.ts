//@ts-nocheck
import { Rarity, RequirementType } from "./enums";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Achievement defines an achievement that can be earned by members.
 * @name Achievement
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Achievement
 */
export interface Achievement {
  /**
   * Unique achievement ID
   */
  achievementId: string;
  /**
   * Achievement name
   */
  name: string;
  /**
   * Achievement description
   */
  description: string;
  /**
   * Rarity level
   */
  rarity: Rarity;
  /**
   * XP reward for earning this achievement
   */
  xpReward: bigint;
  /**
   * Type of requirement to earn this achievement
   */
  requirementType: RequirementType;
  /**
   * Threshold value for the requirement
   */
  requirementThreshold: bigint;
}
export interface AchievementProtoMsg {
  typeUrl: "/sparkdream.season.v1.Achievement";
  value: Uint8Array;
}
/**
 * Achievement defines an achievement that can be earned by members.
 * @name AchievementAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Achievement
 */
export interface AchievementAmino {
  /**
   * Unique achievement ID
   */
  achievement_id?: string;
  /**
   * Achievement name
   */
  name?: string;
  /**
   * Achievement description
   */
  description?: string;
  /**
   * Rarity level
   */
  rarity?: Rarity;
  /**
   * XP reward for earning this achievement
   */
  xp_reward?: string;
  /**
   * Type of requirement to earn this achievement
   */
  requirement_type?: RequirementType;
  /**
   * Threshold value for the requirement
   */
  requirement_threshold?: string;
}
export interface AchievementAminoMsg {
  type: "/sparkdream.season.v1.Achievement";
  value: AchievementAmino;
}
function createBaseAchievement(): Achievement {
  return {
    achievementId: "",
    name: "",
    description: "",
    rarity: 0,
    xpReward: BigInt(0),
    requirementType: 0,
    requirementThreshold: BigInt(0)
  };
}
/**
 * Achievement defines an achievement that can be earned by members.
 * @name Achievement
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Achievement
 */
export const Achievement = {
  typeUrl: "/sparkdream.season.v1.Achievement",
  encode(message: Achievement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.achievementId !== "") {
      writer.uint32(10).string(message.achievementId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.rarity !== 0) {
      writer.uint32(32).int32(message.rarity);
    }
    if (message.xpReward !== BigInt(0)) {
      writer.uint32(40).uint64(message.xpReward);
    }
    if (message.requirementType !== 0) {
      writer.uint32(48).int32(message.requirementType);
    }
    if (message.requirementThreshold !== BigInt(0)) {
      writer.uint32(56).uint64(message.requirementThreshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Achievement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAchievement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievementId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.rarity = reader.int32() as any;
          break;
        case 5:
          message.xpReward = reader.uint64();
          break;
        case 6:
          message.requirementType = reader.int32() as any;
          break;
        case 7:
          message.requirementThreshold = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Achievement>): Achievement {
    const message = createBaseAchievement();
    message.achievementId = object.achievementId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rarity = object.rarity ?? 0;
    message.xpReward = object.xpReward !== undefined && object.xpReward !== null ? BigInt(object.xpReward.toString()) : BigInt(0);
    message.requirementType = object.requirementType ?? 0;
    message.requirementThreshold = object.requirementThreshold !== undefined && object.requirementThreshold !== null ? BigInt(object.requirementThreshold.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AchievementAmino): Achievement {
    const message = createBaseAchievement();
    if (object.achievement_id !== undefined && object.achievement_id !== null) {
      message.achievementId = object.achievement_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.rarity !== undefined && object.rarity !== null) {
      message.rarity = object.rarity;
    }
    if (object.xp_reward !== undefined && object.xp_reward !== null) {
      message.xpReward = BigInt(object.xp_reward);
    }
    if (object.requirement_type !== undefined && object.requirement_type !== null) {
      message.requirementType = object.requirement_type;
    }
    if (object.requirement_threshold !== undefined && object.requirement_threshold !== null) {
      message.requirementThreshold = BigInt(object.requirement_threshold);
    }
    return message;
  },
  toAmino(message: Achievement): AchievementAmino {
    const obj: any = {};
    obj.achievement_id = message.achievementId === "" ? undefined : message.achievementId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.rarity = message.rarity === 0 ? undefined : message.rarity;
    obj.xp_reward = message.xpReward !== BigInt(0) ? message.xpReward?.toString() : undefined;
    obj.requirement_type = message.requirementType === 0 ? undefined : message.requirementType;
    obj.requirement_threshold = message.requirementThreshold !== BigInt(0) ? message.requirementThreshold?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AchievementAminoMsg): Achievement {
    return Achievement.fromAmino(object.value);
  },
  fromProtoMsg(message: AchievementProtoMsg): Achievement {
    return Achievement.decode(message.value);
  },
  toProto(message: Achievement): Uint8Array {
    return Achievement.encode(message).finish();
  },
  toProtoMsg(message: Achievement): AchievementProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.Achievement",
      value: Achievement.encode(message).finish()
    };
  }
};