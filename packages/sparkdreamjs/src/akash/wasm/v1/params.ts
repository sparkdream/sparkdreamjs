//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the x/wasm package.
 * @name Params
 * @package akash.wasm.v1
 * @see proto type: akash.wasm.v1.Params
 */
export interface Params {
  blockedAddresses: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.wasm.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the x/wasm package.
 * @name ParamsAmino
 * @package akash.wasm.v1
 * @see proto type: akash.wasm.v1.Params
 */
export interface ParamsAmino {
  blocked_addresses: string[];
}
export interface ParamsAminoMsg {
  type: "/akash.wasm.v1.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    blockedAddresses: []
  };
}
/**
 * Params defines the parameters for the x/wasm package.
 * @name Params
 * @package akash.wasm.v1
 * @see proto type: akash.wasm.v1.Params
 */
export const Params = {
  typeUrl: "/akash.wasm.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.blockedAddresses) {
      writer.uint32(10).string(v!);
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
          message.blockedAddresses.push(reader.string());
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
    message.blockedAddresses = object.blockedAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.blockedAddresses = object.blocked_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.blockedAddresses) {
      obj.blocked_addresses = message.blockedAddresses.map(e => e);
    } else {
      obj.blocked_addresses = message.blockedAddresses;
    }
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
      typeUrl: "/akash.wasm.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};