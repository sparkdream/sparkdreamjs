//@ts-nocheck
import { ResourceValue, ResourceValueAmino } from "./resourcevalue";
import { Attribute, AttributeAmino } from "../../attributes/v1/attribute";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Memory stores resource quantity and memory attributes.
 * @name Memory
 * @package akash.base.resources.v1beta4
 * @see proto type: akash.base.resources.v1beta4.Memory
 */
export interface Memory {
  /**
   * Quantity of memory available, which represents the amount of memory in bytes.
   * This field is required and must be a non-negative integer.
   */
  quantity: ResourceValue;
  /**
   * Attributes that describe the memory, such as its type and speed.
   * This field is required and must be a list of Attribute key-values.
   */
  attributes: Attribute[];
}
export interface MemoryProtoMsg {
  typeUrl: "/akash.base.resources.v1beta4.Memory";
  value: Uint8Array;
}
/**
 * Memory stores resource quantity and memory attributes.
 * @name MemoryAmino
 * @package akash.base.resources.v1beta4
 * @see proto type: akash.base.resources.v1beta4.Memory
 */
export interface MemoryAmino {
  /**
   * Quantity of memory available, which represents the amount of memory in bytes.
   * This field is required and must be a non-negative integer.
   */
  quantity: ResourceValueAmino;
  /**
   * Attributes that describe the memory, such as its type and speed.
   * This field is required and must be a list of Attribute key-values.
   */
  attributes?: AttributeAmino[];
}
export interface MemoryAminoMsg {
  type: "/akash.base.resources.v1beta4.Memory";
  value: MemoryAmino;
}
function createBaseMemory(): Memory {
  return {
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
/**
 * Memory stores resource quantity and memory attributes.
 * @name Memory
 * @package akash.base.resources.v1beta4
 * @see proto type: akash.base.resources.v1beta4.Memory
 */
export const Memory = {
  typeUrl: "/akash.base.resources.v1beta4.Memory",
  encode(message: Memory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Memory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Memory>): Memory {
    const message = createBaseMemory();
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MemoryAmino): Memory {
    const message = createBaseMemory();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromAmino(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Memory): MemoryAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : ResourceValue.toAmino(ResourceValue.fromPartial({}));
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: MemoryAminoMsg): Memory {
    return Memory.fromAmino(object.value);
  },
  fromProtoMsg(message: MemoryProtoMsg): Memory {
    return Memory.decode(message.value);
  },
  toProto(message: Memory): Uint8Array {
    return Memory.encode(message).finish();
  },
  toProtoMsg(message: Memory): MemoryProtoMsg {
    return {
      typeUrl: "/akash.base.resources.v1beta4.Memory",
      value: Memory.encode(message).finish()
    };
  }
};