//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
/**
 * MsgSignData defines an arbitrary, general-purpose, off-chain message
 * @name MsgSignData
 * @package akash.base.offchain.sign.v1
 * @see proto type: akash.base.offchain.sign.v1.MsgSignData
 */
export interface MsgSignData {
  /**
   * Signer is the sdk.AccAddress of the message signer
   */
  signer: string;
  /**
   * Data represents the raw bytes of the content that is signed (text, json, etc)
   */
  data: Uint8Array;
}
export interface MsgSignDataProtoMsg {
  typeUrl: "/akash.base.offchain.sign.v1.MsgSignData";
  value: Uint8Array;
}
/**
 * MsgSignData defines an arbitrary, general-purpose, off-chain message
 * @name MsgSignDataAmino
 * @package akash.base.offchain.sign.v1
 * @see proto type: akash.base.offchain.sign.v1.MsgSignData
 */
export interface MsgSignDataAmino {
  /**
   * Signer is the sdk.AccAddress of the message signer
   */
  signer: string;
  /**
   * Data represents the raw bytes of the content that is signed (text, json, etc)
   */
  data: string;
}
export interface MsgSignDataAminoMsg {
  type: "/akash.base.offchain.sign.v1.MsgSignData";
  value: MsgSignDataAmino;
}
function createBaseMsgSignData(): MsgSignData {
  return {
    signer: "",
    data: new Uint8Array()
  };
}
/**
 * MsgSignData defines an arbitrary, general-purpose, off-chain message
 * @name MsgSignData
 * @package akash.base.offchain.sign.v1
 * @see proto type: akash.base.offchain.sign.v1.MsgSignData
 */
export const MsgSignData = {
  typeUrl: "/akash.base.offchain.sign.v1.MsgSignData",
  encode(message: MsgSignData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSignData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSignData>): MsgSignData {
    const message = createBaseMsgSignData();
    message.signer = object.signer ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgSignDataAmino): MsgSignData {
    const message = createBaseMsgSignData();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgSignData): MsgSignDataAmino {
    const obj: any = {};
    obj.signer = message.signer ?? "";
    obj.data = message.data ? base64FromBytes(message.data) : "";
    return obj;
  },
  fromAminoMsg(object: MsgSignDataAminoMsg): MsgSignData {
    return MsgSignData.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignDataProtoMsg): MsgSignData {
    return MsgSignData.decode(message.value);
  },
  toProto(message: MsgSignData): Uint8Array {
    return MsgSignData.encode(message).finish();
  },
  toProtoMsg(message: MsgSignData): MsgSignDataProtoMsg {
    return {
      typeUrl: "/akash.base.offchain.sign.v1.MsgSignData",
      value: MsgSignData.encode(message).finish()
    };
  }
};