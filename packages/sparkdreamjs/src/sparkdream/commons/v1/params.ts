//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Params
 */
export interface Params {
  proposalFee: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.commons.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Params
 */
export interface ParamsAmino {
  proposal_fee?: string;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/commons/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    proposalFee: ""
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.commons.v1
 * @see proto type: sparkdream.commons.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.commons.v1.Params",
  aminoType: "sparkdream/x/commons/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalFee !== "") {
      writer.uint32(10).string(message.proposalFee);
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
          message.proposalFee = reader.string();
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
    message.proposalFee = object.proposalFee ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.proposal_fee !== undefined && object.proposal_fee !== null) {
      message.proposalFee = object.proposal_fee;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.proposal_fee = message.proposalFee === "" ? undefined : message.proposalFee;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/commons/Params",
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
      typeUrl: "/sparkdream.commons.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};