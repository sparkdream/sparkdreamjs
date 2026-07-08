//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { PriceData, PriceDataAmino, PriceDataID, PriceDataIDAmino } from "./prices";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the oracle module's genesis state
 * @name GenesisState
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.GenesisState
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
  latestHeight: PriceDataID[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.oracle.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the oracle module's genesis state
 * @name GenesisStateAmino
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.GenesisState
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
  latest_height: PriceDataIDAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/akash.oracle.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    prices: [],
    latestHeight: []
  };
}
/**
 * GenesisState defines the oracle module's genesis state
 * @name GenesisState
 * @package akash.oracle.v1
 * @see proto type: akash.oracle.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/akash.oracle.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.prices) {
      PriceData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.latestHeight) {
      PriceDataID.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.latestHeight.push(PriceDataID.decode(reader, reader.uint32()));
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
    message.latestHeight = object.latestHeight?.map(e => PriceDataID.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.prices = object.prices?.map(e => PriceData.fromAmino(e)) || [];
    message.latestHeight = object.latest_height?.map(e => PriceDataID.fromAmino(e)) || [];
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
    if (message.latestHeight) {
      obj.latest_height = message.latestHeight.map(e => e ? PriceDataID.toAmino(e) : undefined);
    } else {
      obj.latest_height = message.latestHeight;
    }
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
      typeUrl: "/akash.oracle.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};