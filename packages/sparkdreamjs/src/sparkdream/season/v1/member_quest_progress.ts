//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MemberQuestProgress tracks a member's progress on a quest.
 * @name MemberQuestProgress
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberQuestProgress
 */
export interface MemberQuestProgress {
  /**
   * Composite key: member/quest_id
   */
  memberQuest: string;
  /**
   * Whether the quest is completed
   */
  completed: boolean;
  /**
   * Block when the quest was completed
   */
  completedBlock: bigint;
  /**
   * Block of the last attempt
   */
  lastAttemptBlock: bigint;
  /**
   * Progress on each objective (parallel array with quest objectives)
   */
  objectiveProgress: bigint[];
}
export interface MemberQuestProgressProtoMsg {
  typeUrl: "/sparkdream.season.v1.MemberQuestProgress";
  value: Uint8Array;
}
/**
 * MemberQuestProgress tracks a member's progress on a quest.
 * @name MemberQuestProgressAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberQuestProgress
 */
export interface MemberQuestProgressAmino {
  /**
   * Composite key: member/quest_id
   */
  member_quest?: string;
  /**
   * Whether the quest is completed
   */
  completed?: boolean;
  /**
   * Block when the quest was completed
   */
  completed_block?: string;
  /**
   * Block of the last attempt
   */
  last_attempt_block?: string;
  /**
   * Progress on each objective (parallel array with quest objectives)
   */
  objective_progress?: string[];
}
export interface MemberQuestProgressAminoMsg {
  type: "/sparkdream.season.v1.MemberQuestProgress";
  value: MemberQuestProgressAmino;
}
function createBaseMemberQuestProgress(): MemberQuestProgress {
  return {
    memberQuest: "",
    completed: false,
    completedBlock: BigInt(0),
    lastAttemptBlock: BigInt(0),
    objectiveProgress: []
  };
}
/**
 * MemberQuestProgress tracks a member's progress on a quest.
 * @name MemberQuestProgress
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MemberQuestProgress
 */
export const MemberQuestProgress = {
  typeUrl: "/sparkdream.season.v1.MemberQuestProgress",
  encode(message: MemberQuestProgress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.memberQuest !== "") {
      writer.uint32(10).string(message.memberQuest);
    }
    if (message.completed === true) {
      writer.uint32(16).bool(message.completed);
    }
    if (message.completedBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.completedBlock);
    }
    if (message.lastAttemptBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.lastAttemptBlock);
    }
    writer.uint32(42).fork();
    for (const v of message.objectiveProgress) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MemberQuestProgress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberQuestProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberQuest = reader.string();
          break;
        case 2:
          message.completed = reader.bool();
          break;
        case 3:
          message.completedBlock = reader.int64();
          break;
        case 4:
          message.lastAttemptBlock = reader.int64();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.objectiveProgress.push(reader.uint64());
            }
          } else {
            message.objectiveProgress.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MemberQuestProgress>): MemberQuestProgress {
    const message = createBaseMemberQuestProgress();
    message.memberQuest = object.memberQuest ?? "";
    message.completed = object.completed ?? false;
    message.completedBlock = object.completedBlock !== undefined && object.completedBlock !== null ? BigInt(object.completedBlock.toString()) : BigInt(0);
    message.lastAttemptBlock = object.lastAttemptBlock !== undefined && object.lastAttemptBlock !== null ? BigInt(object.lastAttemptBlock.toString()) : BigInt(0);
    message.objectiveProgress = object.objectiveProgress?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MemberQuestProgressAmino): MemberQuestProgress {
    const message = createBaseMemberQuestProgress();
    if (object.member_quest !== undefined && object.member_quest !== null) {
      message.memberQuest = object.member_quest;
    }
    if (object.completed !== undefined && object.completed !== null) {
      message.completed = object.completed;
    }
    if (object.completed_block !== undefined && object.completed_block !== null) {
      message.completedBlock = BigInt(object.completed_block);
    }
    if (object.last_attempt_block !== undefined && object.last_attempt_block !== null) {
      message.lastAttemptBlock = BigInt(object.last_attempt_block);
    }
    message.objectiveProgress = object.objective_progress?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MemberQuestProgress): MemberQuestProgressAmino {
    const obj: any = {};
    obj.member_quest = message.memberQuest === "" ? undefined : message.memberQuest;
    obj.completed = message.completed === false ? undefined : message.completed;
    obj.completed_block = message.completedBlock !== BigInt(0) ? message.completedBlock?.toString() : undefined;
    obj.last_attempt_block = message.lastAttemptBlock !== BigInt(0) ? message.lastAttemptBlock?.toString() : undefined;
    if (message.objectiveProgress) {
      obj.objective_progress = message.objectiveProgress.map(e => e.toString());
    } else {
      obj.objective_progress = message.objectiveProgress;
    }
    return obj;
  },
  fromAminoMsg(object: MemberQuestProgressAminoMsg): MemberQuestProgress {
    return MemberQuestProgress.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberQuestProgressProtoMsg): MemberQuestProgress {
    return MemberQuestProgress.decode(message.value);
  },
  toProto(message: MemberQuestProgress): Uint8Array {
    return MemberQuestProgress.encode(message).finish();
  },
  toProtoMsg(message: MemberQuestProgress): MemberQuestProgressProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MemberQuestProgress",
      value: MemberQuestProgress.encode(message).finish()
    };
  }
};