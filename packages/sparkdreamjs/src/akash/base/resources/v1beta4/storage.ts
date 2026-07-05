//@ts-nocheck
import { ResourceValue, ResourceValueAmino } from "./resourcevalue";
import { Attribute, AttributeAmino } from "../../attributes/v1/attribute";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Storage stores resource quantity and storage attributes.
 * @name Storage
 * @package akash.base.resources.v1beta4
 * @see proto type: akash.base.resources.v1beta4.Storage
 */
export interface Storage {
  /**
   * Name holds an arbitrary name for the storage resource.
   */
  name: string;
  /**
   * Quantity of storage available, which represents the amount of memory in bytes.
   * This field is required and must be a non-negative integer.
   */
  quantity: ResourceValue;
  /**
   * Attributes that describe the storage.
   * This field is required and must be a list of Attribute key-values.
   */
  attributes: Attribute[];
}
export interface StorageProtoMsg {
  typeUrl: "/akash.base.resources.v1beta4.Storage";
  value: Uint8Array;
}
/**
 * Storage stores resource quantity and storage attributes.
 * @name StorageAmino
 * @package akash.base.resources.v1beta4
 * @see proto type: akash.base.resources.v1beta4.Storage
 */
export interface StorageAmino {
  /**
   * Name holds an arbitrary name for the storage resource.
   */
  name: string;
  /**
   * Quantity of storage available, which represents the amount of memory in bytes.
   * This field is required and must be a non-negative integer.
   */
  quantity: ResourceValueAmino;
  /**
   * Attributes that describe the storage.
   * This field is required and must be a list of Attribute key-values.
   */
  attributes?: AttributeAmino[];
}
export interface StorageAminoMsg {
  type: "/akash.base.resources.v1beta4.Storage";
  value: StorageAmino;
}
function createBaseStorage(): Storage {
  return {
    name: "",
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
/**
 * Storage stores resource quantity and storage attributes.
 * @name Storage
 * @package akash.base.resources.v1beta4
 * @see proto type: akash.base.resources.v1beta4.Storage
 */
export const Storage = {
  typeUrl: "/akash.base.resources.v1beta4.Storage",
  encode(message: Storage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Storage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Storage>): Storage {
    const message = createBaseStorage();
    message.name = object.name ?? "";
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: StorageAmino): Storage {
    const message = createBaseStorage();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromAmino(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Storage): StorageAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : ResourceValue.toAmino(ResourceValue.fromPartial({}));
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: StorageAminoMsg): Storage {
    return Storage.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageProtoMsg): Storage {
    return Storage.decode(message.value);
  },
  toProto(message: Storage): Uint8Array {
    return Storage.encode(message).finish();
  },
  toProtoMsg(message: Storage): StorageProtoMsg {
    return {
      typeUrl: "/akash.base.resources.v1beta4.Storage",
      value: Storage.encode(message).finish()
    };
  }
};