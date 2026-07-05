//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * DenomTakeRate describes take rate for specified denom.
 * @name DenomTakeRate
 * @package akash.take.v1
 * @see proto type: akash.take.v1.DenomTakeRate
 */
export interface DenomTakeRate {
  /**
   * Denom is the denomination of the take rate (uakt, usdc, etc.).
   */
  denom: string;
  /**
   * Rate is the value of the take rate.
   */
  rate: number;
}
export interface DenomTakeRateProtoMsg {
  typeUrl: "/akash.take.v1.DenomTakeRate";
  value: Uint8Array;
}
/**
 * DenomTakeRate describes take rate for specified denom.
 * @name DenomTakeRateAmino
 * @package akash.take.v1
 * @see proto type: akash.take.v1.DenomTakeRate
 */
export interface DenomTakeRateAmino {
  /**
   * Denom is the denomination of the take rate (uakt, usdc, etc.).
   */
  denom: string;
  /**
   * Rate is the value of the take rate.
   */
  rate: number;
}
export interface DenomTakeRateAminoMsg {
  type: "/akash.take.v1.DenomTakeRate";
  value: DenomTakeRateAmino;
}
/**
 * Params defines the parameters for the x/take package.
 * @name Params
 * @package akash.take.v1
 * @see proto type: akash.take.v1.Params
 */
export interface Params {
  /**
   * DenomTakeRates is a list of configured take rates.
   */
  denomTakeRates: DenomTakeRate[];
  /**
   * DefaultTakeRate holds the default take rate.
   */
  defaultTakeRate: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.take.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the x/take package.
 * @name ParamsAmino
 * @package akash.take.v1
 * @see proto type: akash.take.v1.Params
 */
export interface ParamsAmino {
  /**
   * DenomTakeRates is a list of configured take rates.
   */
  denom_take_rates: DenomTakeRateAmino[];
  /**
   * DefaultTakeRate holds the default take rate.
   */
  default_take_rate: number;
}
export interface ParamsAminoMsg {
  type: "/akash.take.v1.Params";
  value: ParamsAmino;
}
function createBaseDenomTakeRate(): DenomTakeRate {
  return {
    denom: "",
    rate: 0
  };
}
/**
 * DenomTakeRate describes take rate for specified denom.
 * @name DenomTakeRate
 * @package akash.take.v1
 * @see proto type: akash.take.v1.DenomTakeRate
 */
export const DenomTakeRate = {
  typeUrl: "/akash.take.v1.DenomTakeRate",
  encode(message: DenomTakeRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rate !== 0) {
      writer.uint32(16).uint32(message.rate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomTakeRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTakeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.rate = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DenomTakeRate>): DenomTakeRate {
    const message = createBaseDenomTakeRate();
    message.denom = object.denom ?? "";
    message.rate = object.rate ?? 0;
    return message;
  },
  fromAmino(object: DenomTakeRateAmino): DenomTakeRate {
    const message = createBaseDenomTakeRate();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    return message;
  },
  toAmino(message: DenomTakeRate): DenomTakeRateAmino {
    const obj: any = {};
    obj.denom = message.denom ?? "";
    obj.rate = message.rate ?? 0;
    return obj;
  },
  fromAminoMsg(object: DenomTakeRateAminoMsg): DenomTakeRate {
    return DenomTakeRate.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomTakeRateProtoMsg): DenomTakeRate {
    return DenomTakeRate.decode(message.value);
  },
  toProto(message: DenomTakeRate): Uint8Array {
    return DenomTakeRate.encode(message).finish();
  },
  toProtoMsg(message: DenomTakeRate): DenomTakeRateProtoMsg {
    return {
      typeUrl: "/akash.take.v1.DenomTakeRate",
      value: DenomTakeRate.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    denomTakeRates: [],
    defaultTakeRate: 0
  };
}
/**
 * Params defines the parameters for the x/take package.
 * @name Params
 * @package akash.take.v1
 * @see proto type: akash.take.v1.Params
 */
export const Params = {
  typeUrl: "/akash.take.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomTakeRates) {
      DenomTakeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultTakeRate !== 0) {
      writer.uint32(16).uint32(message.defaultTakeRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTakeRates.push(DenomTakeRate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.defaultTakeRate = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.denomTakeRates = object.denomTakeRates?.map(e => DenomTakeRate.fromPartial(e)) || [];
    message.defaultTakeRate = object.defaultTakeRate ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.denomTakeRates = object.denom_take_rates?.map(e => DenomTakeRate.fromAmino(e)) || [];
    if (object.default_take_rate !== undefined && object.default_take_rate !== null) {
      message.defaultTakeRate = object.default_take_rate;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.denomTakeRates) {
      obj.denom_take_rates = message.denomTakeRates.map(e => e ? DenomTakeRate.toAmino(e) : undefined);
    } else {
      obj.denom_take_rates = message.denomTakeRates;
    }
    obj.default_take_rate = message.defaultTakeRate ?? 0;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/akash.take.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};