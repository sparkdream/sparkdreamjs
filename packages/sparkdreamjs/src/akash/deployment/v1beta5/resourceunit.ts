//@ts-nocheck
import { Resources, ResourcesAmino } from "../../base/resources/v1beta4/resources";
import { DecCoin, DecCoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ResourceUnit extends Resources and adds Count along with the Price.
 * @name ResourceUnit
 * @package akash.deployment.v1beta5
 * @see proto type: akash.deployment.v1beta5.ResourceUnit
 */
export interface ResourceUnit {
  /**
   * Resource holds the amount of resources.
   */
  resource: Resources;
  /**
   * Count corresponds to the amount of replicas to run of the resources.
   */
  count: number;
  /**
   * Price holds the pricing for the resource units.
   */
  prices: DecCoin[];
}
export interface ResourceUnitProtoMsg {
  typeUrl: "/akash.deployment.v1beta5.ResourceUnit";
  value: Uint8Array;
}
/**
 * ResourceUnit extends Resources and adds Count along with the Price.
 * @name ResourceUnitAmino
 * @package akash.deployment.v1beta5
 * @see proto type: akash.deployment.v1beta5.ResourceUnit
 */
export interface ResourceUnitAmino {
  /**
   * Resource holds the amount of resources.
   */
  resource: ResourcesAmino;
  /**
   * Count corresponds to the amount of replicas to run of the resources.
   */
  count: number;
  /**
   * Price holds the pricing for the resource units.
   */
  prices: DecCoinAmino[];
}
export interface ResourceUnitAminoMsg {
  type: "/akash.deployment.v1beta5.ResourceUnit";
  value: ResourceUnitAmino;
}
function createBaseResourceUnit(): ResourceUnit {
  return {
    resource: Resources.fromPartial({}),
    count: 0,
    prices: []
  };
}
/**
 * ResourceUnit extends Resources and adds Count along with the Price.
 * @name ResourceUnit
 * @package akash.deployment.v1beta5
 * @see proto type: akash.deployment.v1beta5.ResourceUnit
 */
export const ResourceUnit = {
  typeUrl: "/akash.deployment.v1beta5.ResourceUnit",
  encode(message: ResourceUnit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resource !== undefined) {
      Resources.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    for (const v of message.prices) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourceUnit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Resources.decode(reader, reader.uint32());
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.prices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResourceUnit>): ResourceUnit {
    const message = createBaseResourceUnit();
    message.resource = object.resource !== undefined && object.resource !== null ? Resources.fromPartial(object.resource) : undefined;
    message.count = object.count ?? 0;
    message.prices = object.prices?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResourceUnitAmino): ResourceUnit {
    const message = createBaseResourceUnit();
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = Resources.fromAmino(object.resource);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    message.prices = object.prices?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResourceUnit): ResourceUnitAmino {
    const obj: any = {};
    obj.resource = message.resource ? Resources.toAmino(message.resource) : Resources.toAmino(Resources.fromPartial({}));
    obj.count = message.count ?? 0;
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    return obj;
  },
  fromAminoMsg(object: ResourceUnitAminoMsg): ResourceUnit {
    return ResourceUnit.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceUnitProtoMsg): ResourceUnit {
    return ResourceUnit.decode(message.value);
  },
  toProto(message: ResourceUnit): Uint8Array {
    return ResourceUnit.encode(message).finish();
  },
  toProtoMsg(message: ResourceUnit): ResourceUnitProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta5.ResourceUnit",
      value: ResourceUnit.encode(message).finish()
    };
  }
};