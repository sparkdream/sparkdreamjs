//@ts-nocheck
import { PriceDataID, PriceDataIDAmino, PriceLatestDataState, PriceLatestDataStateAmino, PriceData, PriceDataAmino } from "./prices";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisSourceID maps an oracle source address to its numeric identifier
 * @name GenesisSourceID
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.GenesisSourceID
 */
export interface GenesisSourceID {
  /**
   * address is the bech32 address of the oracle source
   */
  address: string;
  /**
   * id is the numeric identifier assigned to the source
   */
  id: number;
}
export interface GenesisSourceIDProtoMsg {
  typeUrl: "/akash.oracle.v2.GenesisSourceID";
  value: Uint8Array;
}
/**
 * GenesisSourceID maps an oracle source address to its numeric identifier
 * @name GenesisSourceIDAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.GenesisSourceID
 */
export interface GenesisSourceIDAmino {
  /**
   * address is the bech32 address of the oracle source
   */
  address: string;
  /**
   * id is the numeric identifier assigned to the source
   */
  id: number;
}
export interface GenesisSourceIDAminoMsg {
  type: "/akash.oracle.v2.GenesisSourceID";
  value: GenesisSourceIDAmino;
}
/**
 * GenesisLatestPricesIDs stores the latest price state for a given price pair
 * @name GenesisLatestPricesIDs
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.GenesisLatestPricesIDs
 */
export interface GenesisLatestPricesIDs {
  /**
   * id identifies the price pair (source, denom, base_denom)
   */
  id?: PriceDataID;
  /**
   * state holds the timestamp of the latest price record
   */
  state?: PriceLatestDataState;
}
export interface GenesisLatestPricesIDsProtoMsg {
  typeUrl: "/akash.oracle.v2.GenesisLatestPricesIDs";
  value: Uint8Array;
}
/**
 * GenesisLatestPricesIDs stores the latest price state for a given price pair
 * @name GenesisLatestPricesIDsAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.GenesisLatestPricesIDs
 */
export interface GenesisLatestPricesIDsAmino {
  /**
   * id identifies the price pair (source, denom, base_denom)
   */
  id: PriceDataIDAmino;
  /**
   * state holds the timestamp of the latest price record
   */
  state: PriceLatestDataStateAmino;
}
export interface GenesisLatestPricesIDsAminoMsg {
  type: "/akash.oracle.v2.GenesisLatestPricesIDs";
  value: GenesisLatestPricesIDsAmino;
}
/**
 * GenesisState defines the oracle module's genesis state
 * @name GenesisState
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.GenesisState
 */
export interface GenesisState {
  /**
   * params holds the oracle module parameters
   */
  params: Params;
  /**
   * prices is the list of all historical price data entries
   */
  prices: PriceData[];
  /**
   * latest_height tracks the most recent block height for each price feed source
   */
  latestPricesIds: GenesisLatestPricesIDs[];
  /**
   * source_ids is the list of oracle source address-to-ID mappings
   */
  sourceIds: GenesisSourceID[];
  /**
   * source_seq is the next available source identifier sequence number
   */
  sourceSeq: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.oracle.v2.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the oracle module's genesis state
 * @name GenesisStateAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params holds the oracle module parameters
   */
  params: ParamsAmino;
  /**
   * prices is the list of all historical price data entries
   */
  prices: PriceDataAmino[];
  /**
   * latest_height tracks the most recent block height for each price feed source
   */
  latest_prices_ids: GenesisLatestPricesIDsAmino[];
  /**
   * source_ids is the list of oracle source address-to-ID mappings
   */
  source_ids: GenesisSourceIDAmino[];
  /**
   * source_seq is the next available source identifier sequence number
   */
  source_seq: string;
}
export interface GenesisStateAminoMsg {
  type: "/akash.oracle.v2.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisSourceID(): GenesisSourceID {
  return {
    address: "",
    id: 0
  };
}
/**
 * GenesisSourceID maps an oracle source address to its numeric identifier
 * @name GenesisSourceID
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.GenesisSourceID
 */
export const GenesisSourceID = {
  typeUrl: "/akash.oracle.v2.GenesisSourceID",
  encode(message: GenesisSourceID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisSourceID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisSourceID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisSourceID>): GenesisSourceID {
    const message = createBaseGenesisSourceID();
    message.address = object.address ?? "";
    message.id = object.id ?? 0;
    return message;
  },
  fromAmino(object: GenesisSourceIDAmino): GenesisSourceID {
    const message = createBaseGenesisSourceID();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: GenesisSourceID): GenesisSourceIDAmino {
    const obj: any = {};
    obj.address = message.address ?? "";
    obj.id = message.id ?? 0;
    return obj;
  },
  fromAminoMsg(object: GenesisSourceIDAminoMsg): GenesisSourceID {
    return GenesisSourceID.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisSourceIDProtoMsg): GenesisSourceID {
    return GenesisSourceID.decode(message.value);
  },
  toProto(message: GenesisSourceID): Uint8Array {
    return GenesisSourceID.encode(message).finish();
  },
  toProtoMsg(message: GenesisSourceID): GenesisSourceIDProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.GenesisSourceID",
      value: GenesisSourceID.encode(message).finish()
    };
  }
};
function createBaseGenesisLatestPricesIDs(): GenesisLatestPricesIDs {
  return {
    id: undefined,
    state: undefined
  };
}
/**
 * GenesisLatestPricesIDs stores the latest price state for a given price pair
 * @name GenesisLatestPricesIDs
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.GenesisLatestPricesIDs
 */
export const GenesisLatestPricesIDs = {
  typeUrl: "/akash.oracle.v2.GenesisLatestPricesIDs",
  encode(message: GenesisLatestPricesIDs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      PriceDataID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      PriceLatestDataState.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisLatestPricesIDs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisLatestPricesIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = PriceDataID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = PriceLatestDataState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisLatestPricesIDs>): GenesisLatestPricesIDs {
    const message = createBaseGenesisLatestPricesIDs();
    message.id = object.id !== undefined && object.id !== null ? PriceDataID.fromPartial(object.id) : undefined;
    message.state = object.state !== undefined && object.state !== null ? PriceLatestDataState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: GenesisLatestPricesIDsAmino): GenesisLatestPricesIDs {
    const message = createBaseGenesisLatestPricesIDs();
    if (object.id !== undefined && object.id !== null) {
      message.id = PriceDataID.fromAmino(object.id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = PriceLatestDataState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: GenesisLatestPricesIDs): GenesisLatestPricesIDsAmino {
    const obj: any = {};
    obj.id = message.id ? PriceDataID.toAmino(message.id) : PriceDataID.toAmino(PriceDataID.fromPartial({}));
    obj.state = message.state ? PriceLatestDataState.toAmino(message.state) : PriceLatestDataState.toAmino(PriceLatestDataState.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: GenesisLatestPricesIDsAminoMsg): GenesisLatestPricesIDs {
    return GenesisLatestPricesIDs.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisLatestPricesIDsProtoMsg): GenesisLatestPricesIDs {
    return GenesisLatestPricesIDs.decode(message.value);
  },
  toProto(message: GenesisLatestPricesIDs): Uint8Array {
    return GenesisLatestPricesIDs.encode(message).finish();
  },
  toProtoMsg(message: GenesisLatestPricesIDs): GenesisLatestPricesIDsProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.GenesisLatestPricesIDs",
      value: GenesisLatestPricesIDs.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    prices: [],
    latestPricesIds: [],
    sourceIds: [],
    sourceSeq: BigInt(0)
  };
}
/**
 * GenesisState defines the oracle module's genesis state
 * @name GenesisState
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.GenesisState
 */
export const GenesisState = {
  typeUrl: "/akash.oracle.v2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.prices) {
      PriceData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.latestPricesIds) {
      GenesisLatestPricesIDs.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sourceIds) {
      GenesisSourceID.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.sourceSeq !== BigInt(0)) {
      writer.uint32(40).uint64(message.sourceSeq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.prices.push(PriceData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.latestPricesIds.push(GenesisLatestPricesIDs.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sourceIds.push(GenesisSourceID.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sourceSeq = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.prices = object.prices?.map(e => PriceData.fromPartial(e)) || [];
    message.latestPricesIds = object.latestPricesIds?.map(e => GenesisLatestPricesIDs.fromPartial(e)) || [];
    message.sourceIds = object.sourceIds?.map(e => GenesisSourceID.fromPartial(e)) || [];
    message.sourceSeq = object.sourceSeq !== undefined && object.sourceSeq !== null ? BigInt(object.sourceSeq.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.prices = object.prices?.map(e => PriceData.fromAmino(e)) || [];
    message.latestPricesIds = object.latest_prices_ids?.map(e => GenesisLatestPricesIDs.fromAmino(e)) || [];
    message.sourceIds = object.source_ids?.map(e => GenesisSourceID.fromAmino(e)) || [];
    if (object.source_seq !== undefined && object.source_seq !== null) {
      message.sourceSeq = BigInt(object.source_seq);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? PriceData.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    if (message.latestPricesIds) {
      obj.latest_prices_ids = message.latestPricesIds.map(e => e ? GenesisLatestPricesIDs.toAmino(e) : undefined);
    } else {
      obj.latest_prices_ids = message.latestPricesIds;
    }
    if (message.sourceIds) {
      obj.source_ids = message.sourceIds.map(e => e ? GenesisSourceID.toAmino(e) : undefined);
    } else {
      obj.source_ids = message.sourceIds;
    }
    obj.source_seq = message.sourceSeq ? message.sourceSeq?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};