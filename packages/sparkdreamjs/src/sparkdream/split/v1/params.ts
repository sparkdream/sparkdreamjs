//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.Params
 */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.split.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.Params
 */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "sparkdream/x/split/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {};
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.split.v1.Params",
  aminoType: "sparkdream/x/split/Params",
  encode(_: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_: ParamsAmino): Params {
    const message = createBaseParams();
    return message;
  },
  toAmino(_: Params): ParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/split/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.split.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};