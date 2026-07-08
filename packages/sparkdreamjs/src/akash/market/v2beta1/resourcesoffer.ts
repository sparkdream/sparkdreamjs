//@ts-nocheck
import { Resources, ResourcesAmino } from "../../base/resources/v1beta4/resources";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ResourceOffer describes resources that provider is offering
 * for deployment.
 * @name ResourceOffer
 * @package akash.market.v2beta1
 * @see proto type: akash.market.v2beta1.ResourceOffer
 */
export interface ResourceOffer {
  /**
   * Resources holds information about bid resources.
   */
  resources: Resources;
  /**
   * Count is the number of resources.
   */
  count: number;
}
export interface ResourceOfferProtoMsg {
  typeUrl: "/akash.market.v2beta1.ResourceOffer";
  value: Uint8Array;
}
/**
 * ResourceOffer describes resources that provider is offering
 * for deployment.
 * @name ResourceOfferAmino
 * @package akash.market.v2beta1
 * @see proto type: akash.market.v2beta1.ResourceOffer
 */
export interface ResourceOfferAmino {
  /**
   * Resources holds information about bid resources.
   */
  resources: ResourcesAmino;
  /**
   * Count is the number of resources.
   */
  count: number;
}
export interface ResourceOfferAminoMsg {
  type: "/akash.market.v2beta1.ResourceOffer";
  value: ResourceOfferAmino;
}
function createBaseResourceOffer(): ResourceOffer {
  return {
    resources: Resources.fromPartial({}),
    count: 0
  };
}
/**
 * ResourceOffer describes resources that provider is offering
 * for deployment.
 * @name ResourceOffer
 * @package akash.market.v2beta1
 * @see proto type: akash.market.v2beta1.ResourceOffer
 */
export const ResourceOffer = {
  typeUrl: "/akash.market.v2beta1.ResourceOffer",
  encode(message: ResourceOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourceOffer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 2:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResourceOffer>): ResourceOffer {
    const message = createBaseResourceOffer();
    message.resources = object.resources !== undefined && object.resources !== null ? Resources.fromPartial(object.resources) : undefined;
    message.count = object.count ?? 0;
    return message;
  },
  fromAmino(object: ResourceOfferAmino): ResourceOffer {
    const message = createBaseResourceOffer();
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = Resources.fromAmino(object.resources);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    return message;
  },
  toAmino(message: ResourceOffer): ResourceOfferAmino {
    const obj: any = {};
    obj.resources = message.resources ? Resources.toAmino(message.resources) : Resources.toAmino(Resources.fromPartial({}));
    obj.count = message.count ?? 0;
    return obj;
  },
  fromAminoMsg(object: ResourceOfferAminoMsg): ResourceOffer {
    return ResourceOffer.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceOfferProtoMsg): ResourceOffer {
    return ResourceOffer.decode(message.value);
  },
  toProto(message: ResourceOffer): Uint8Array {
    return ResourceOffer.encode(message).finish();
  },
  toProtoMsg(message: ResourceOffer): ResourceOfferProtoMsg {
    return {
      typeUrl: "/akash.market.v2beta1.ResourceOffer",
      value: ResourceOffer.encode(message).finish()
    };
  }
};