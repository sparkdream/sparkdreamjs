//@ts-nocheck
import { QuestObjectiveType } from "./enums";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QuestObjective defines a single objective within a quest.
 * @name QuestObjective
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuestObjective
 */
export interface QuestObjective {
  /**
   * Description of the objective
   */
  description: string;
  /**
   * Type of objective
   */
  type: QuestObjectiveType;
  /**
   * Target value to complete the objective
   */
  target: bigint;
}
export interface QuestObjectiveProtoMsg {
  typeUrl: "/sparkdream.season.v1.QuestObjective";
  value: Uint8Array;
}
/**
 * QuestObjective defines a single objective within a quest.
 * @name QuestObjectiveAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuestObjective
 */
export interface QuestObjectiveAmino {
  /**
   * Description of the objective
   */
  description?: string;
  /**
   * Type of objective
   */
  type?: QuestObjectiveType;
  /**
   * Target value to complete the objective
   */
  target?: string;
}
export interface QuestObjectiveAminoMsg {
  type: "/sparkdream.season.v1.QuestObjective";
  value: QuestObjectiveAmino;
}
/**
 * Quest defines a gamification quest that members can complete for XP.
 * @name Quest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Quest
 */
export interface Quest {
  /**
   * Unique quest ID
   */
  questId: string;
  /**
   * Quest name
   */
  name: string;
  /**
   * Quest description
   */
  description: string;
  /**
   * XP reward for completing the quest
   */
  xpReward: bigint;
  /**
   * Whether the quest can be repeated
   */
  repeatable: boolean;
  /**
   * Cooldown in epochs before quest can be repeated
   */
  cooldownEpochs: bigint;
  /**
   * Season this quest is available in (0 = all seasons)
   */
  season: bigint;
  /**
   * Block when the quest becomes available
   */
  startBlock: bigint;
  /**
   * Block when the quest expires
   */
  endBlock: bigint;
  /**
   * Whether the quest is currently active
   */
  active: boolean;
  /**
   * Minimum level required to start the quest
   */
  minLevel: bigint;
  /**
   * Achievement required to start the quest
   */
  requiredAchievement: string;
  /**
   * Quest that must be completed first
   */
  prerequisiteQuest: string;
  /**
   * Quest chain ID (for grouping related quests)
   */
  questChain: string;
  /**
   * Quest objectives
   */
  objectives: QuestObjective[];
}
export interface QuestProtoMsg {
  typeUrl: "/sparkdream.season.v1.Quest";
  value: Uint8Array;
}
/**
 * Quest defines a gamification quest that members can complete for XP.
 * @name QuestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Quest
 */
export interface QuestAmino {
  /**
   * Unique quest ID
   */
  quest_id?: string;
  /**
   * Quest name
   */
  name?: string;
  /**
   * Quest description
   */
  description?: string;
  /**
   * XP reward for completing the quest
   */
  xp_reward?: string;
  /**
   * Whether the quest can be repeated
   */
  repeatable?: boolean;
  /**
   * Cooldown in epochs before quest can be repeated
   */
  cooldown_epochs?: string;
  /**
   * Season this quest is available in (0 = all seasons)
   */
  season?: string;
  /**
   * Block when the quest becomes available
   */
  start_block?: string;
  /**
   * Block when the quest expires
   */
  end_block?: string;
  /**
   * Whether the quest is currently active
   */
  active?: boolean;
  /**
   * Minimum level required to start the quest
   */
  min_level?: string;
  /**
   * Achievement required to start the quest
   */
  required_achievement?: string;
  /**
   * Quest that must be completed first
   */
  prerequisite_quest?: string;
  /**
   * Quest chain ID (for grouping related quests)
   */
  quest_chain?: string;
  /**
   * Quest objectives
   */
  objectives?: QuestObjectiveAmino[];
}
export interface QuestAminoMsg {
  type: "/sparkdream.season.v1.Quest";
  value: QuestAmino;
}
function createBaseQuestObjective(): QuestObjective {
  return {
    description: "",
    type: 0,
    target: BigInt(0)
  };
}
/**
 * QuestObjective defines a single objective within a quest.
 * @name QuestObjective
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.QuestObjective
 */
export const QuestObjective = {
  typeUrl: "/sparkdream.season.v1.QuestObjective",
  encode(message: QuestObjective, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.target !== BigInt(0)) {
      writer.uint32(24).uint64(message.target);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuestObjective {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestObjective();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.target = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuestObjective>): QuestObjective {
    const message = createBaseQuestObjective();
    message.description = object.description ?? "";
    message.type = object.type ?? 0;
    message.target = object.target !== undefined && object.target !== null ? BigInt(object.target.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuestObjectiveAmino): QuestObjective {
    const message = createBaseQuestObjective();
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = BigInt(object.target);
    }
    return message;
  },
  toAmino(message: QuestObjective): QuestObjectiveAmino {
    const obj: any = {};
    obj.description = message.description === "" ? undefined : message.description;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.target = message.target !== BigInt(0) ? message.target?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuestObjectiveAminoMsg): QuestObjective {
    return QuestObjective.fromAmino(object.value);
  },
  fromProtoMsg(message: QuestObjectiveProtoMsg): QuestObjective {
    return QuestObjective.decode(message.value);
  },
  toProto(message: QuestObjective): Uint8Array {
    return QuestObjective.encode(message).finish();
  },
  toProtoMsg(message: QuestObjective): QuestObjectiveProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.QuestObjective",
      value: QuestObjective.encode(message).finish()
    };
  }
};
function createBaseQuest(): Quest {
  return {
    questId: "",
    name: "",
    description: "",
    xpReward: BigInt(0),
    repeatable: false,
    cooldownEpochs: BigInt(0),
    season: BigInt(0),
    startBlock: BigInt(0),
    endBlock: BigInt(0),
    active: false,
    minLevel: BigInt(0),
    requiredAchievement: "",
    prerequisiteQuest: "",
    questChain: "",
    objectives: []
  };
}
/**
 * Quest defines a gamification quest that members can complete for XP.
 * @name Quest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Quest
 */
export const Quest = {
  typeUrl: "/sparkdream.season.v1.Quest",
  encode(message: Quest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.questId !== "") {
      writer.uint32(10).string(message.questId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.xpReward !== BigInt(0)) {
      writer.uint32(32).uint64(message.xpReward);
    }
    if (message.repeatable === true) {
      writer.uint32(40).bool(message.repeatable);
    }
    if (message.cooldownEpochs !== BigInt(0)) {
      writer.uint32(48).uint64(message.cooldownEpochs);
    }
    if (message.season !== BigInt(0)) {
      writer.uint32(56).uint64(message.season);
    }
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(64).int64(message.startBlock);
    }
    if (message.endBlock !== BigInt(0)) {
      writer.uint32(72).int64(message.endBlock);
    }
    if (message.active === true) {
      writer.uint32(80).bool(message.active);
    }
    if (message.minLevel !== BigInt(0)) {
      writer.uint32(88).uint64(message.minLevel);
    }
    if (message.requiredAchievement !== "") {
      writer.uint32(98).string(message.requiredAchievement);
    }
    if (message.prerequisiteQuest !== "") {
      writer.uint32(106).string(message.prerequisiteQuest);
    }
    if (message.questChain !== "") {
      writer.uint32(114).string(message.questChain);
    }
    for (const v of message.objectives) {
      QuestObjective.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Quest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.questId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.xpReward = reader.uint64();
          break;
        case 5:
          message.repeatable = reader.bool();
          break;
        case 6:
          message.cooldownEpochs = reader.uint64();
          break;
        case 7:
          message.season = reader.uint64();
          break;
        case 8:
          message.startBlock = reader.int64();
          break;
        case 9:
          message.endBlock = reader.int64();
          break;
        case 10:
          message.active = reader.bool();
          break;
        case 11:
          message.minLevel = reader.uint64();
          break;
        case 12:
          message.requiredAchievement = reader.string();
          break;
        case 13:
          message.prerequisiteQuest = reader.string();
          break;
        case 14:
          message.questChain = reader.string();
          break;
        case 15:
          message.objectives.push(QuestObjective.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Quest>): Quest {
    const message = createBaseQuest();
    message.questId = object.questId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.xpReward = object.xpReward !== undefined && object.xpReward !== null ? BigInt(object.xpReward.toString()) : BigInt(0);
    message.repeatable = object.repeatable ?? false;
    message.cooldownEpochs = object.cooldownEpochs !== undefined && object.cooldownEpochs !== null ? BigInt(object.cooldownEpochs.toString()) : BigInt(0);
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? BigInt(object.endBlock.toString()) : BigInt(0);
    message.active = object.active ?? false;
    message.minLevel = object.minLevel !== undefined && object.minLevel !== null ? BigInt(object.minLevel.toString()) : BigInt(0);
    message.requiredAchievement = object.requiredAchievement ?? "";
    message.prerequisiteQuest = object.prerequisiteQuest ?? "";
    message.questChain = object.questChain ?? "";
    message.objectives = object.objectives?.map(e => QuestObjective.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuestAmino): Quest {
    const message = createBaseQuest();
    if (object.quest_id !== undefined && object.quest_id !== null) {
      message.questId = object.quest_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.xp_reward !== undefined && object.xp_reward !== null) {
      message.xpReward = BigInt(object.xp_reward);
    }
    if (object.repeatable !== undefined && object.repeatable !== null) {
      message.repeatable = object.repeatable;
    }
    if (object.cooldown_epochs !== undefined && object.cooldown_epochs !== null) {
      message.cooldownEpochs = BigInt(object.cooldown_epochs);
    }
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    if (object.start_block !== undefined && object.start_block !== null) {
      message.startBlock = BigInt(object.start_block);
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = BigInt(object.end_block);
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.min_level !== undefined && object.min_level !== null) {
      message.minLevel = BigInt(object.min_level);
    }
    if (object.required_achievement !== undefined && object.required_achievement !== null) {
      message.requiredAchievement = object.required_achievement;
    }
    if (object.prerequisite_quest !== undefined && object.prerequisite_quest !== null) {
      message.prerequisiteQuest = object.prerequisite_quest;
    }
    if (object.quest_chain !== undefined && object.quest_chain !== null) {
      message.questChain = object.quest_chain;
    }
    message.objectives = object.objectives?.map(e => QuestObjective.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Quest): QuestAmino {
    const obj: any = {};
    obj.quest_id = message.questId === "" ? undefined : message.questId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.xp_reward = message.xpReward !== BigInt(0) ? message.xpReward?.toString() : undefined;
    obj.repeatable = message.repeatable === false ? undefined : message.repeatable;
    obj.cooldown_epochs = message.cooldownEpochs !== BigInt(0) ? message.cooldownEpochs?.toString() : undefined;
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    obj.start_block = message.startBlock !== BigInt(0) ? message.startBlock?.toString() : undefined;
    obj.end_block = message.endBlock !== BigInt(0) ? message.endBlock?.toString() : undefined;
    obj.active = message.active === false ? undefined : message.active;
    obj.min_level = message.minLevel !== BigInt(0) ? message.minLevel?.toString() : undefined;
    obj.required_achievement = message.requiredAchievement === "" ? undefined : message.requiredAchievement;
    obj.prerequisite_quest = message.prerequisiteQuest === "" ? undefined : message.prerequisiteQuest;
    obj.quest_chain = message.questChain === "" ? undefined : message.questChain;
    if (message.objectives) {
      obj.objectives = message.objectives.map(e => e ? QuestObjective.toAmino(e) : undefined);
    } else {
      obj.objectives = message.objectives;
    }
    return obj;
  },
  fromAminoMsg(object: QuestAminoMsg): Quest {
    return Quest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuestProtoMsg): Quest {
    return Quest.decode(message.value);
  },
  toProto(message: Quest): Uint8Array {
    return Quest.encode(message).finish();
  },
  toProtoMsg(message: Quest): QuestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.Quest",
      value: Quest.encode(message).finish()
    };
  }
};