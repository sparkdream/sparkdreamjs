//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * NameRecord defines the NameRecord message.
 * @name NameRecord
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.NameRecord
 */
export interface NameRecord {
  name: string;
  owner: string;
  data: string;
}
export interface NameRecordProtoMsg {
  typeUrl: "/sparkdream.name.v1.NameRecord";
  value: Uint8Array;
}
/**
 * NameRecord defines the NameRecord message.
 * @name NameRecordAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.NameRecord
 */
export interface NameRecordAmino {
  name?: string;
  owner?: string;
  data?: string;
}
export interface NameRecordAminoMsg {
  type: "/sparkdream.name.v1.NameRecord";
  value: NameRecordAmino;
}
function createBaseNameRecord(): NameRecord {
  return {
    name: "",
    owner: "",
    data: ""
  };
}
/**
 * NameRecord defines the NameRecord message.
 * @name NameRecord
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.NameRecord
 */
export const NameRecord = {
  typeUrl: "/sparkdream.name.v1.NameRecord",
  encode(message: NameRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NameRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNameRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<NameRecord>): NameRecord {
    const message = createBaseNameRecord();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.data = object.data ?? "";
    return message;
  },
  fromAmino(object: NameRecordAmino): NameRecord {
    const message = createBaseNameRecord();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    return message;
  },
  toAmino(message: NameRecord): NameRecordAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.data = message.data === "" ? undefined : message.data;
    return obj;
  },
  fromAminoMsg(object: NameRecordAminoMsg): NameRecord {
    return NameRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: NameRecordProtoMsg): NameRecord {
    return NameRecord.decode(message.value);
  },
  toProto(message: NameRecord): Uint8Array {
    return NameRecord.encode(message).finish();
  },
  toProtoMsg(message: NameRecord): NameRecordProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.NameRecord",
      value: NameRecord.encode(message).finish()
    };
  }
};