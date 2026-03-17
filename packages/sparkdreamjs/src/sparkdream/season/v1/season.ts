//@ts-nocheck
import { SeasonStatus } from "./enums";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Season represents the current or historical season state.
 * @name Season
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Season
 */
export interface Season {
  /**
   * Season number (1-indexed)
   */
  number: bigint;
  /**
   * Season name
   */
  name: string;
  /**
   * Season theme
   */
  theme: string;
  /**
   * Block when the season started
   */
  startBlock: bigint;
  /**
   * Block when the season ends (may be extended)
   */
  endBlock: bigint;
  /**
   * Current season status
   */
  status: SeasonStatus;
  /**
   * Number of times the season has been extended
   */
  extensionsCount: bigint;
  /**
   * Total epochs added by extensions
   */
  totalExtensionEpochs: bigint;
  /**
   * Original end block before any extensions
   */
  originalEndBlock: bigint;
}
export interface SeasonProtoMsg {
  typeUrl: "/sparkdream.season.v1.Season";
  value: Uint8Array;
}
/**
 * Season represents the current or historical season state.
 * @name SeasonAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Season
 */
export interface SeasonAmino {
  /**
   * Season number (1-indexed)
   */
  number?: string;
  /**
   * Season name
   */
  name?: string;
  /**
   * Season theme
   */
  theme?: string;
  /**
   * Block when the season started
   */
  start_block?: string;
  /**
   * Block when the season ends (may be extended)
   */
  end_block?: string;
  /**
   * Current season status
   */
  status?: SeasonStatus;
  /**
   * Number of times the season has been extended
   */
  extensions_count?: string;
  /**
   * Total epochs added by extensions
   */
  total_extension_epochs?: string;
  /**
   * Original end block before any extensions
   */
  original_end_block?: string;
}
export interface SeasonAminoMsg {
  type: "/sparkdream.season.v1.Season";
  value: SeasonAmino;
}
function createBaseSeason(): Season {
  return {
    number: BigInt(0),
    name: "",
    theme: "",
    startBlock: BigInt(0),
    endBlock: BigInt(0),
    status: 0,
    extensionsCount: BigInt(0),
    totalExtensionEpochs: BigInt(0),
    originalEndBlock: BigInt(0)
  };
}
/**
 * Season represents the current or historical season state.
 * @name Season
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Season
 */
export const Season = {
  typeUrl: "/sparkdream.season.v1.Season",
  encode(message: Season, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.number !== BigInt(0)) {
      writer.uint32(8).uint64(message.number);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.theme !== "") {
      writer.uint32(26).string(message.theme);
    }
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.startBlock);
    }
    if (message.endBlock !== BigInt(0)) {
      writer.uint32(40).int64(message.endBlock);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.extensionsCount !== BigInt(0)) {
      writer.uint32(56).uint64(message.extensionsCount);
    }
    if (message.totalExtensionEpochs !== BigInt(0)) {
      writer.uint32(64).uint64(message.totalExtensionEpochs);
    }
    if (message.originalEndBlock !== BigInt(0)) {
      writer.uint32(72).int64(message.originalEndBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Season {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeason();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.theme = reader.string();
          break;
        case 4:
          message.startBlock = reader.int64();
          break;
        case 5:
          message.endBlock = reader.int64();
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.extensionsCount = reader.uint64();
          break;
        case 8:
          message.totalExtensionEpochs = reader.uint64();
          break;
        case 9:
          message.originalEndBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Season>): Season {
    const message = createBaseSeason();
    message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.theme = object.theme ?? "";
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? BigInt(object.endBlock.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.extensionsCount = object.extensionsCount !== undefined && object.extensionsCount !== null ? BigInt(object.extensionsCount.toString()) : BigInt(0);
    message.totalExtensionEpochs = object.totalExtensionEpochs !== undefined && object.totalExtensionEpochs !== null ? BigInt(object.totalExtensionEpochs.toString()) : BigInt(0);
    message.originalEndBlock = object.originalEndBlock !== undefined && object.originalEndBlock !== null ? BigInt(object.originalEndBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SeasonAmino): Season {
    const message = createBaseSeason();
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.theme !== undefined && object.theme !== null) {
      message.theme = object.theme;
    }
    if (object.start_block !== undefined && object.start_block !== null) {
      message.startBlock = BigInt(object.start_block);
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = BigInt(object.end_block);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.extensions_count !== undefined && object.extensions_count !== null) {
      message.extensionsCount = BigInt(object.extensions_count);
    }
    if (object.total_extension_epochs !== undefined && object.total_extension_epochs !== null) {
      message.totalExtensionEpochs = BigInt(object.total_extension_epochs);
    }
    if (object.original_end_block !== undefined && object.original_end_block !== null) {
      message.originalEndBlock = BigInt(object.original_end_block);
    }
    return message;
  },
  toAmino(message: Season): SeasonAmino {
    const obj: any = {};
    obj.number = message.number !== BigInt(0) ? message.number?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.theme = message.theme === "" ? undefined : message.theme;
    obj.start_block = message.startBlock !== BigInt(0) ? message.startBlock?.toString() : undefined;
    obj.end_block = message.endBlock !== BigInt(0) ? message.endBlock?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.extensions_count = message.extensionsCount !== BigInt(0) ? message.extensionsCount?.toString() : undefined;
    obj.total_extension_epochs = message.totalExtensionEpochs !== BigInt(0) ? message.totalExtensionEpochs?.toString() : undefined;
    obj.original_end_block = message.originalEndBlock !== BigInt(0) ? message.originalEndBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SeasonAminoMsg): Season {
    return Season.fromAmino(object.value);
  },
  fromProtoMsg(message: SeasonProtoMsg): Season {
    return Season.decode(message.value);
  },
  toProto(message: Season): Uint8Array {
    return Season.encode(message).finish();
  },
  toProtoMsg(message: Season): SeasonProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.Season",
      value: Season.encode(message).finish()
    };
  }
};