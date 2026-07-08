//@ts-nocheck
import { DecCoin, DecCoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Endpoint_Kind } from "../../base/resources/v1beta4/endpoint";
import { Resources, ResourcesAmino } from "../../base/resources/v1beta4/resources";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * StorageOfferPrice represents the price a provider is offering for a specific
 * class of persistent storage. Providers may offer multiple storage classes
 * (e.g., SSD, HDD, NVMe), each identified by name and priced independently.
 * This type is used as a repeated field within OfferPrices to express
 * per-class storage pricing in a bid.
 * @name StorageOfferPrice
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.StorageOfferPrice
 */
export interface StorageOfferPrice {
  /**
   * Name holds an arbitrary name for the storage class (e.g., "default", "ssd", "hdd").
   * This must match a storage class name from the corresponding resource specification.
   */
  name: string;
  /**
   * Price is the offered price per unit of this storage class, expressed as a
   * DecCoin (decimal coin) to allow fractional pricing. When nil, no explicit
   * price is set for this storage class.
   */
  price?: DecCoin;
}
export interface StorageOfferPriceProtoMsg {
  typeUrl: "/akash.market.v1beta5.StorageOfferPrice";
  value: Uint8Array;
}
/**
 * StorageOfferPrice represents the price a provider is offering for a specific
 * class of persistent storage. Providers may offer multiple storage classes
 * (e.g., SSD, HDD, NVMe), each identified by name and priced independently.
 * This type is used as a repeated field within OfferPrices to express
 * per-class storage pricing in a bid.
 * @name StorageOfferPriceAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.StorageOfferPrice
 */
export interface StorageOfferPriceAmino {
  /**
   * Name holds an arbitrary name for the storage class (e.g., "default", "ssd", "hdd").
   * This must match a storage class name from the corresponding resource specification.
   */
  name: string;
  /**
   * Price is the offered price per unit of this storage class, expressed as a
   * DecCoin (decimal coin) to allow fractional pricing. When nil, no explicit
   * price is set for this storage class.
   */
  price: DecCoinAmino;
}
export interface StorageOfferPriceAminoMsg {
  type: "/akash.market.v1beta5.StorageOfferPrice";
  value: StorageOfferPriceAmino;
}
/**
 * EndpointOfferPrice represents the price a provider is offering for a specific
 * kind of network endpoint. Providers may price each endpoint kind differently
 * (e.g., a leased IP may cost more than a shared HTTP ingress). This type is
 * used as a repeated field within OfferPrices to express per-kind endpoint
 * pricing in a bid.
 * @name EndpointOfferPrice
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.EndpointOfferPrice
 */
export interface EndpointOfferPrice {
  /**
   * Kind specifies the type of network endpoint being priced. Possible values:
   *   - SHARED_HTTP (0): A Kubernetes Ingress endpoint.
   *   - RANDOM_PORT (1): A Kubernetes NodePort endpoint.
   *   - LEASED_IP   (2): A dedicated leased IP endpoint.
   */
  kind: Endpoint_Kind;
  /**
   * Price is the offered price per unit of this endpoint kind, expressed as a
   * DecCoin (decimal coin) to allow fractional pricing. When nil, no explicit
   * price is set for this endpoint kind.
   */
  price?: DecCoin;
}
export interface EndpointOfferPriceProtoMsg {
  typeUrl: "/akash.market.v1beta5.EndpointOfferPrice";
  value: Uint8Array;
}
/**
 * EndpointOfferPrice represents the price a provider is offering for a specific
 * kind of network endpoint. Providers may price each endpoint kind differently
 * (e.g., a leased IP may cost more than a shared HTTP ingress). This type is
 * used as a repeated field within OfferPrices to express per-kind endpoint
 * pricing in a bid.
 * @name EndpointOfferPriceAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.EndpointOfferPrice
 */
export interface EndpointOfferPriceAmino {
  /**
   * Kind specifies the type of network endpoint being priced. Possible values:
   *   - SHARED_HTTP (0): A Kubernetes Ingress endpoint.
   *   - RANDOM_PORT (1): A Kubernetes NodePort endpoint.
   *   - LEASED_IP   (2): A dedicated leased IP endpoint.
   */
  kind: Endpoint_Kind;
  /**
   * Price is the offered price per unit of this endpoint kind, expressed as a
   * DecCoin (decimal coin) to allow fractional pricing. When nil, no explicit
   * price is set for this endpoint kind.
   */
  price: DecCoinAmino;
}
export interface EndpointOfferPriceAminoMsg {
  type: "/akash.market.v1beta5.EndpointOfferPrice";
  value: EndpointOfferPriceAmino;
}
/**
 * OfferPrices contains the complete pricing breakdown that a provider includes
 * in a bid for a deployment resource group. Each field represents the price for
 * a specific compute resource type. All price fields use DecCoin (decimal coin)
 * to support fractional pricing denominated in any supported token.
 * 
 * This message is embedded as a nullable field on ResourceOffer, which in turn
 * is carried by Bid and MsgCreateBid messages. A nil OfferPrices on a
 * ResourceOffer indicates that no per-resource pricing was specified.
 * 
 * Field 1 is reserved for backward compatibility with a previously removed field.
 * @name OfferPrices
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.OfferPrices
 */
export interface OfferPrices {
  /**
   * Cpu is the offered price for CPU resources. When nil, no explicit
   * CPU price is set.
   */
  cpu?: DecCoin;
  /**
   * Memory is the offered price for memory resources. When nil, no explicit
   * memory price is set.
   */
  memory?: DecCoin;
  /**
   * Storage is a list of per-class storage prices. Each entry corresponds to a
   * named storage class (e.g., "default", "ssd") and its associated price.
   * Multiple entries allow providers to price different storage tiers independently.
   */
  storage: StorageOfferPrice[];
  /**
   * Gpu is the offered price for GPU resources. When nil, no explicit
   * GPU price is set.
   */
  gpu?: DecCoin;
  /**
   * Endpoints is a list of per-kind endpoint prices. Each entry corresponds to
   * a network endpoint kind (SHARED_HTTP, RANDOM_PORT, or LEASED_IP) and its
   * associated price. Multiple entries allow providers to price different
   * endpoint types independently.
   */
  endpoints: EndpointOfferPrice[];
}
export interface OfferPricesProtoMsg {
  typeUrl: "/akash.market.v1beta5.OfferPrices";
  value: Uint8Array;
}
/**
 * OfferPrices contains the complete pricing breakdown that a provider includes
 * in a bid for a deployment resource group. Each field represents the price for
 * a specific compute resource type. All price fields use DecCoin (decimal coin)
 * to support fractional pricing denominated in any supported token.
 * 
 * This message is embedded as a nullable field on ResourceOffer, which in turn
 * is carried by Bid and MsgCreateBid messages. A nil OfferPrices on a
 * ResourceOffer indicates that no per-resource pricing was specified.
 * 
 * Field 1 is reserved for backward compatibility with a previously removed field.
 * @name OfferPricesAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.OfferPrices
 */
export interface OfferPricesAmino {
  /**
   * Cpu is the offered price for CPU resources. When nil, no explicit
   * CPU price is set.
   */
  cpu: DecCoinAmino;
  /**
   * Memory is the offered price for memory resources. When nil, no explicit
   * memory price is set.
   */
  memory: DecCoinAmino;
  /**
   * Storage is a list of per-class storage prices. Each entry corresponds to a
   * named storage class (e.g., "default", "ssd") and its associated price.
   * Multiple entries allow providers to price different storage tiers independently.
   */
  storage: StorageOfferPriceAmino[];
  /**
   * Gpu is the offered price for GPU resources. When nil, no explicit
   * GPU price is set.
   */
  gpu: DecCoinAmino;
  /**
   * Endpoints is a list of per-kind endpoint prices. Each entry corresponds to
   * a network endpoint kind (SHARED_HTTP, RANDOM_PORT, or LEASED_IP) and its
   * associated price. Multiple entries allow providers to price different
   * endpoint types independently.
   */
  endpoints: EndpointOfferPriceAmino[];
}
export interface OfferPricesAminoMsg {
  type: "/akash.market.v1beta5.OfferPrices";
  value: OfferPricesAmino;
}
/**
 * ResourceOffer describes resources that provider is offering
 * for deployment.
 * @name ResourceOffer
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.ResourceOffer
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
  /**
   * Prices contains per-resource pricing details (CPU, memory, storage, GPU, endpoints) for this offer.
   */
  prices?: OfferPrices;
}
export interface ResourceOfferProtoMsg {
  typeUrl: "/akash.market.v1beta5.ResourceOffer";
  value: Uint8Array;
}
/**
 * ResourceOffer describes resources that provider is offering
 * for deployment.
 * @name ResourceOfferAmino
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.ResourceOffer
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
  /**
   * Prices contains per-resource pricing details (CPU, memory, storage, GPU, endpoints) for this offer.
   */
  prices: OfferPricesAmino;
}
export interface ResourceOfferAminoMsg {
  type: "/akash.market.v1beta5.ResourceOffer";
  value: ResourceOfferAmino;
}
function createBaseStorageOfferPrice(): StorageOfferPrice {
  return {
    name: "",
    price: undefined
  };
}
/**
 * StorageOfferPrice represents the price a provider is offering for a specific
 * class of persistent storage. Providers may offer multiple storage classes
 * (e.g., SSD, HDD, NVMe), each identified by name and priced independently.
 * This type is used as a repeated field within OfferPrices to express
 * per-class storage pricing in a bid.
 * @name StorageOfferPrice
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.StorageOfferPrice
 */
export const StorageOfferPrice = {
  typeUrl: "/akash.market.v1beta5.StorageOfferPrice",
  encode(message: StorageOfferPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StorageOfferPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageOfferPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StorageOfferPrice>): StorageOfferPrice {
    const message = createBaseStorageOfferPrice();
    message.name = object.name ?? "";
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: StorageOfferPriceAmino): StorageOfferPrice {
    const message = createBaseStorageOfferPrice();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: StorageOfferPrice): StorageOfferPriceAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: StorageOfferPriceAminoMsg): StorageOfferPrice {
    return StorageOfferPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageOfferPriceProtoMsg): StorageOfferPrice {
    return StorageOfferPrice.decode(message.value);
  },
  toProto(message: StorageOfferPrice): Uint8Array {
    return StorageOfferPrice.encode(message).finish();
  },
  toProtoMsg(message: StorageOfferPrice): StorageOfferPriceProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.StorageOfferPrice",
      value: StorageOfferPrice.encode(message).finish()
    };
  }
};
function createBaseEndpointOfferPrice(): EndpointOfferPrice {
  return {
    kind: 0,
    price: undefined
  };
}
/**
 * EndpointOfferPrice represents the price a provider is offering for a specific
 * kind of network endpoint. Providers may price each endpoint kind differently
 * (e.g., a leased IP may cost more than a shared HTTP ingress). This type is
 * used as a repeated field within OfferPrices to express per-kind endpoint
 * pricing in a bid.
 * @name EndpointOfferPrice
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.EndpointOfferPrice
 */
export const EndpointOfferPrice = {
  typeUrl: "/akash.market.v1beta5.EndpointOfferPrice",
  encode(message: EndpointOfferPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EndpointOfferPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpointOfferPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.int32() as any;
          break;
        case 2:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EndpointOfferPrice>): EndpointOfferPrice {
    const message = createBaseEndpointOfferPrice();
    message.kind = object.kind ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: EndpointOfferPriceAmino): EndpointOfferPrice {
    const message = createBaseEndpointOfferPrice();
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: EndpointOfferPrice): EndpointOfferPriceAmino {
    const obj: any = {};
    obj.kind = message.kind ?? 0;
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EndpointOfferPriceAminoMsg): EndpointOfferPrice {
    return EndpointOfferPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: EndpointOfferPriceProtoMsg): EndpointOfferPrice {
    return EndpointOfferPrice.decode(message.value);
  },
  toProto(message: EndpointOfferPrice): Uint8Array {
    return EndpointOfferPrice.encode(message).finish();
  },
  toProtoMsg(message: EndpointOfferPrice): EndpointOfferPriceProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.EndpointOfferPrice",
      value: EndpointOfferPrice.encode(message).finish()
    };
  }
};
function createBaseOfferPrices(): OfferPrices {
  return {
    cpu: undefined,
    memory: undefined,
    storage: [],
    gpu: undefined,
    endpoints: []
  };
}
/**
 * OfferPrices contains the complete pricing breakdown that a provider includes
 * in a bid for a deployment resource group. Each field represents the price for
 * a specific compute resource type. All price fields use DecCoin (decimal coin)
 * to support fractional pricing denominated in any supported token.
 * 
 * This message is embedded as a nullable field on ResourceOffer, which in turn
 * is carried by Bid and MsgCreateBid messages. A nil OfferPrices on a
 * ResourceOffer indicates that no per-resource pricing was specified.
 * 
 * Field 1 is reserved for backward compatibility with a previously removed field.
 * @name OfferPrices
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.OfferPrices
 */
export const OfferPrices = {
  typeUrl: "/akash.market.v1beta5.OfferPrices",
  encode(message: OfferPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cpu !== undefined) {
      DecCoin.encode(message.cpu, writer.uint32(18).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      DecCoin.encode(message.memory, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.storage) {
      StorageOfferPrice.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.gpu !== undefined) {
      DecCoin.encode(message.gpu, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      EndpointOfferPrice.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OfferPrices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOfferPrices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.cpu = DecCoin.decode(reader, reader.uint32());
          break;
        case 3:
          message.memory = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.storage.push(StorageOfferPrice.decode(reader, reader.uint32()));
          break;
        case 5:
          message.gpu = DecCoin.decode(reader, reader.uint32());
          break;
        case 6:
          message.endpoints.push(EndpointOfferPrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OfferPrices>): OfferPrices {
    const message = createBaseOfferPrices();
    message.cpu = object.cpu !== undefined && object.cpu !== null ? DecCoin.fromPartial(object.cpu) : undefined;
    message.memory = object.memory !== undefined && object.memory !== null ? DecCoin.fromPartial(object.memory) : undefined;
    message.storage = object.storage?.map(e => StorageOfferPrice.fromPartial(e)) || [];
    message.gpu = object.gpu !== undefined && object.gpu !== null ? DecCoin.fromPartial(object.gpu) : undefined;
    message.endpoints = object.endpoints?.map(e => EndpointOfferPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OfferPricesAmino): OfferPrices {
    const message = createBaseOfferPrices();
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = DecCoin.fromAmino(object.cpu);
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = DecCoin.fromAmino(object.memory);
    }
    message.storage = object.storage?.map(e => StorageOfferPrice.fromAmino(e)) || [];
    if (object.gpu !== undefined && object.gpu !== null) {
      message.gpu = DecCoin.fromAmino(object.gpu);
    }
    message.endpoints = object.endpoints?.map(e => EndpointOfferPrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OfferPrices): OfferPricesAmino {
    const obj: any = {};
    obj.cpu = message.cpu ? DecCoin.toAmino(message.cpu) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.memory = message.memory ? DecCoin.toAmino(message.memory) : DecCoin.toAmino(DecCoin.fromPartial({}));
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? StorageOfferPrice.toAmino(e) : undefined);
    } else {
      obj.storage = message.storage;
    }
    obj.gpu = message.gpu ? DecCoin.toAmino(message.gpu) : DecCoin.toAmino(DecCoin.fromPartial({}));
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? EndpointOfferPrice.toAmino(e) : undefined);
    } else {
      obj.endpoints = message.endpoints;
    }
    return obj;
  },
  fromAminoMsg(object: OfferPricesAminoMsg): OfferPrices {
    return OfferPrices.fromAmino(object.value);
  },
  fromProtoMsg(message: OfferPricesProtoMsg): OfferPrices {
    return OfferPrices.decode(message.value);
  },
  toProto(message: OfferPrices): Uint8Array {
    return OfferPrices.encode(message).finish();
  },
  toProtoMsg(message: OfferPrices): OfferPricesProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta5.OfferPrices",
      value: OfferPrices.encode(message).finish()
    };
  }
};
function createBaseResourceOffer(): ResourceOffer {
  return {
    resources: Resources.fromPartial({}),
    count: 0,
    prices: undefined
  };
}
/**
 * ResourceOffer describes resources that provider is offering
 * for deployment.
 * @name ResourceOffer
 * @package akash.market.v1beta5
 * @see proto type: akash.market.v1beta5.ResourceOffer
 */
export const ResourceOffer = {
  typeUrl: "/akash.market.v1beta5.ResourceOffer",
  encode(message: ResourceOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.prices !== undefined) {
      OfferPrices.encode(message.prices, writer.uint32(26).fork()).ldelim();
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
        case 3:
          message.prices = OfferPrices.decode(reader, reader.uint32());
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
    message.prices = object.prices !== undefined && object.prices !== null ? OfferPrices.fromPartial(object.prices) : undefined;
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
    if (object.prices !== undefined && object.prices !== null) {
      message.prices = OfferPrices.fromAmino(object.prices);
    }
    return message;
  },
  toAmino(message: ResourceOffer): ResourceOfferAmino {
    const obj: any = {};
    obj.resources = message.resources ? Resources.toAmino(message.resources) : Resources.toAmino(Resources.fromPartial({}));
    obj.count = message.count ?? 0;
    obj.prices = message.prices ? OfferPrices.toAmino(message.prices) : OfferPrices.toAmino(OfferPrices.fromPartial({}));
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
      typeUrl: "/akash.market.v1beta5.ResourceOffer",
      value: ResourceOffer.encode(message).finish()
    };
  }
};