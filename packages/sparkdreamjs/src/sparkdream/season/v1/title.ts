//@ts-nocheck
import { Rarity, RequirementType } from "./enums";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Title defines a title that can be displayed by members.
 * @name Title
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Title
 */
export interface Title {
  /**
   * Unique title ID
   */
  titleId: string;
  /**
   * Title name (displayed to users)
   */
  name: string;
  /**
   * Title description
   */
  description: string;
  /**
   * Rarity level
   */
  rarity: Rarity;
  /**
   * Type of requirement to unlock this title
   */
  requirementType: RequirementType;
  /**
   * Threshold value for the requirement
   */
  requirementThreshold: bigint;
  /**
   * Season requirement (0 = any season)
   */
  requirementSeason: bigint;
  /**
   * Whether this is a seasonal title that expires
   */
  seasonal: boolean;
}
export interface TitleProtoMsg {
  typeUrl: "/sparkdream.season.v1.Title";
  value: Uint8Array;
}
/**
 * Title defines a title that can be displayed by members.
 * @name TitleAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Title
 */
export interface TitleAmino {
  /**
   * Unique title ID
   */
  title_id?: string;
  /**
   * Title name (displayed to users)
   */
  name?: string;
  /**
   * Title description
   */
  description?: string;
  /**
   * Rarity level
   */
  rarity?: Rarity;
  /**
   * Type of requirement to unlock this title
   */
  requirement_type?: RequirementType;
  /**
   * Threshold value for the requirement
   */
  requirement_threshold?: string;
  /**
   * Season requirement (0 = any season)
   */
  requirement_season?: string;
  /**
   * Whether this is a seasonal title that expires
   */
  seasonal?: boolean;
}
export interface TitleAminoMsg {
  type: "/sparkdream.season.v1.Title";
  value: TitleAmino;
}
function createBaseTitle(): Title {
  return {
    titleId: "",
    name: "",
    description: "",
    rarity: 0,
    requirementType: 0,
    requirementThreshold: BigInt(0),
    requirementSeason: BigInt(0),
    seasonal: false
  };
}
/**
 * Title defines a title that can be displayed by members.
 * @name Title
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Title
 */
export const Title = {
  typeUrl: "/sparkdream.season.v1.Title",
  encode(message: Title, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.titleId !== "") {
      writer.uint32(10).string(message.titleId);
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
    if (message.requirementType !== 0) {
      writer.uint32(40).int32(message.requirementType);
    }
    if (message.requirementThreshold !== BigInt(0)) {
      writer.uint32(48).uint64(message.requirementThreshold);
    }
    if (message.requirementSeason !== BigInt(0)) {
      writer.uint32(56).uint64(message.requirementSeason);
    }
    if (message.seasonal === true) {
      writer.uint32(64).bool(message.seasonal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Title {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTitle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.titleId = reader.string();
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
          message.requirementType = reader.int32() as any;
          break;
        case 6:
          message.requirementThreshold = reader.uint64();
          break;
        case 7:
          message.requirementSeason = reader.uint64();
          break;
        case 8:
          message.seasonal = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Title>): Title {
    const message = createBaseTitle();
    message.titleId = object.titleId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rarity = object.rarity ?? 0;
    message.requirementType = object.requirementType ?? 0;
    message.requirementThreshold = object.requirementThreshold !== undefined && object.requirementThreshold !== null ? BigInt(object.requirementThreshold.toString()) : BigInt(0);
    message.requirementSeason = object.requirementSeason !== undefined && object.requirementSeason !== null ? BigInt(object.requirementSeason.toString()) : BigInt(0);
    message.seasonal = object.seasonal ?? false;
    return message;
  },
  fromAmino(object: TitleAmino): Title {
    const message = createBaseTitle();
    if (object.title_id !== undefined && object.title_id !== null) {
      message.titleId = object.title_id;
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
    if (object.requirement_type !== undefined && object.requirement_type !== null) {
      message.requirementType = object.requirement_type;
    }
    if (object.requirement_threshold !== undefined && object.requirement_threshold !== null) {
      message.requirementThreshold = BigInt(object.requirement_threshold);
    }
    if (object.requirement_season !== undefined && object.requirement_season !== null) {
      message.requirementSeason = BigInt(object.requirement_season);
    }
    if (object.seasonal !== undefined && object.seasonal !== null) {
      message.seasonal = object.seasonal;
    }
    return message;
  },
  toAmino(message: Title): TitleAmino {
    const obj: any = {};
    obj.title_id = message.titleId === "" ? undefined : message.titleId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.rarity = message.rarity === 0 ? undefined : message.rarity;
    obj.requirement_type = message.requirementType === 0 ? undefined : message.requirementType;
    obj.requirement_threshold = message.requirementThreshold !== BigInt(0) ? message.requirementThreshold?.toString() : undefined;
    obj.requirement_season = message.requirementSeason !== BigInt(0) ? message.requirementSeason?.toString() : undefined;
    obj.seasonal = message.seasonal === false ? undefined : message.seasonal;
    return obj;
  },
  fromAminoMsg(object: TitleAminoMsg): Title {
    return Title.fromAmino(object.value);
  },
  fromProtoMsg(message: TitleProtoMsg): Title {
    return Title.decode(message.value);
  },
  toProto(message: Title): Uint8Array {
    return Title.encode(message).finish();
  },
  toProtoMsg(message: Title): TitleProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.Title",
      value: Title.encode(message).finish()
    };
  }
};