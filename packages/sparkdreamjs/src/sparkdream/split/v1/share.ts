//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Share defines the Share message.
 * @name Share
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.Share
 */
export interface Share {
  address: string;
  weight: bigint;
}
export interface ShareProtoMsg {
  typeUrl: "/sparkdream.split.v1.Share";
  value: Uint8Array;
}
/**
 * Share defines the Share message.
 * @name ShareAmino
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.Share
 */
export interface ShareAmino {
  address?: string;
  weight?: string;
}
export interface ShareAminoMsg {
  type: "/sparkdream.split.v1.Share";
  value: ShareAmino;
}
function createBaseShare(): Share {
  return {
    address: "",
    weight: BigInt(0)
  };
}
/**
 * Share defines the Share message.
 * @name Share
 * @package sparkdream.split.v1
 * @see proto type: sparkdream.split.v1.Share
 */
export const Share = {
  typeUrl: "/sparkdream.split.v1.Share",
  encode(message: Share, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== BigInt(0)) {
      writer.uint32(16).uint64(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Share {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Share>): Share {
    const message = createBaseShare();
    message.address = object.address ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ShareAmino): Share {
    const message = createBaseShare();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight);
    }
    return message;
  },
  toAmino(message: Share): ShareAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.weight = message.weight !== BigInt(0) ? message.weight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ShareAminoMsg): Share {
    return Share.fromAmino(object.value);
  },
  fromProtoMsg(message: ShareProtoMsg): Share {
    return Share.decode(message.value);
  },
  toProto(message: Share): Uint8Array {
    return Share.encode(message).finish();
  },
  toProtoMsg(message: Share): ShareProtoMsg {
    return {
      typeUrl: "/sparkdream.split.v1.Share",
      value: Share.encode(message).finish()
    };
  }
};