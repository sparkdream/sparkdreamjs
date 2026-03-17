//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * SeasonSnapshot defines the SeasonSnapshot message.
 * @name SeasonSnapshot
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonSnapshot
 */
export interface SeasonSnapshot {
  season: bigint;
  snapshotBlock: bigint;
}
export interface SeasonSnapshotProtoMsg {
  typeUrl: "/sparkdream.season.v1.SeasonSnapshot";
  value: Uint8Array;
}
/**
 * SeasonSnapshot defines the SeasonSnapshot message.
 * @name SeasonSnapshotAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonSnapshot
 */
export interface SeasonSnapshotAmino {
  season?: string;
  snapshot_block?: string;
}
export interface SeasonSnapshotAminoMsg {
  type: "/sparkdream.season.v1.SeasonSnapshot";
  value: SeasonSnapshotAmino;
}
function createBaseSeasonSnapshot(): SeasonSnapshot {
  return {
    season: BigInt(0),
    snapshotBlock: BigInt(0)
  };
}
/**
 * SeasonSnapshot defines the SeasonSnapshot message.
 * @name SeasonSnapshot
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.SeasonSnapshot
 */
export const SeasonSnapshot = {
  typeUrl: "/sparkdream.season.v1.SeasonSnapshot",
  encode(message: SeasonSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.season !== BigInt(0)) {
      writer.uint32(8).uint64(message.season);
    }
    if (message.snapshotBlock !== BigInt(0)) {
      writer.uint32(16).int64(message.snapshotBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SeasonSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.season = reader.uint64();
          break;
        case 2:
          message.snapshotBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SeasonSnapshot>): SeasonSnapshot {
    const message = createBaseSeasonSnapshot();
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    message.snapshotBlock = object.snapshotBlock !== undefined && object.snapshotBlock !== null ? BigInt(object.snapshotBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SeasonSnapshotAmino): SeasonSnapshot {
    const message = createBaseSeasonSnapshot();
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    if (object.snapshot_block !== undefined && object.snapshot_block !== null) {
      message.snapshotBlock = BigInt(object.snapshot_block);
    }
    return message;
  },
  toAmino(message: SeasonSnapshot): SeasonSnapshotAmino {
    const obj: any = {};
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    obj.snapshot_block = message.snapshotBlock !== BigInt(0) ? message.snapshotBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SeasonSnapshotAminoMsg): SeasonSnapshot {
    return SeasonSnapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: SeasonSnapshotProtoMsg): SeasonSnapshot {
    return SeasonSnapshot.decode(message.value);
  },
  toProto(message: SeasonSnapshot): Uint8Array {
    return SeasonSnapshot.encode(message).finish();
  },
  toProtoMsg(message: SeasonSnapshot): SeasonSnapshotProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.SeasonSnapshot",
      value: SeasonSnapshot.encode(message).finish()
    };
  }
};