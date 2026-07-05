//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * GMPPacketData defines a struct for the packet payload
 * @name GMPPacketData
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.GMPPacketData
 */
export interface GMPPacketData {
  /**
   * the sender address
   */
  sender: string;
  /**
   * the recipient address on the destination chain
   */
  receiver: string;
  /**
   * The salt used to generate the caller account address
   */
  salt: Uint8Array;
  /**
   * The payload of the call
   */
  payload: Uint8Array;
  /**
   * optional memo
   */
  memo: string;
}
export interface GMPPacketDataProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.GMPPacketData";
  value: Uint8Array;
}
/**
 * GMPPacketData defines a struct for the packet payload
 * @name GMPPacketDataAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.GMPPacketData
 */
export interface GMPPacketDataAmino {
  /**
   * the sender address
   */
  sender?: string;
  /**
   * the recipient address on the destination chain
   */
  receiver?: string;
  /**
   * The salt used to generate the caller account address
   */
  salt?: string;
  /**
   * The payload of the call
   */
  payload?: string;
  /**
   * optional memo
   */
  memo?: string;
}
export interface GMPPacketDataAminoMsg {
  type: "cosmos-sdk/GMPPacketData";
  value: GMPPacketDataAmino;
}
/**
 * Acknowledgement defines a struct for the ICS27-2 acknowledgement
 * @name Acknowledgement
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.Acknowledgement
 */
export interface Acknowledgement {
  /**
   * The result of the call
   */
  result: Uint8Array;
}
export interface AcknowledgementProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.Acknowledgement";
  value: Uint8Array;
}
/**
 * Acknowledgement defines a struct for the ICS27-2 acknowledgement
 * @name AcknowledgementAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.Acknowledgement
 */
export interface AcknowledgementAmino {
  /**
   * The result of the call
   */
  result?: string;
}
export interface AcknowledgementAminoMsg {
  type: "cosmos-sdk/Acknowledgement";
  value: AcknowledgementAmino;
}
function createBaseGMPPacketData(): GMPPacketData {
  return {
    sender: "",
    receiver: "",
    salt: new Uint8Array(),
    payload: new Uint8Array(),
    memo: ""
  };
}
/**
 * GMPPacketData defines a struct for the packet payload
 * @name GMPPacketData
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.GMPPacketData
 */
export const GMPPacketData = {
  typeUrl: "/ibc.applications.gmp.v1.GMPPacketData",
  aminoType: "cosmos-sdk/GMPPacketData",
  encode(message: GMPPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.salt.length !== 0) {
      writer.uint32(26).bytes(message.salt);
    }
    if (message.payload.length !== 0) {
      writer.uint32(34).bytes(message.payload);
    }
    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GMPPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGMPPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.salt = reader.bytes();
          break;
        case 4:
          message.payload = reader.bytes();
          break;
        case 5:
          message.memo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GMPPacketData>): GMPPacketData {
    const message = createBaseGMPPacketData();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.salt = object.salt ?? new Uint8Array();
    message.payload = object.payload ?? new Uint8Array();
    message.memo = object.memo ?? "";
    return message;
  },
  fromAmino(object: GMPPacketDataAmino): GMPPacketData {
    const message = createBaseGMPPacketData();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = bytesFromBase64(object.salt);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    return message;
  },
  toAmino(message: GMPPacketData): GMPPacketDataAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    obj.memo = message.memo === "" ? undefined : message.memo;
    return obj;
  },
  fromAminoMsg(object: GMPPacketDataAminoMsg): GMPPacketData {
    return GMPPacketData.fromAmino(object.value);
  },
  toAminoMsg(message: GMPPacketData): GMPPacketDataAminoMsg {
    return {
      type: "cosmos-sdk/GMPPacketData",
      value: GMPPacketData.toAmino(message)
    };
  },
  fromProtoMsg(message: GMPPacketDataProtoMsg): GMPPacketData {
    return GMPPacketData.decode(message.value);
  },
  toProto(message: GMPPacketData): Uint8Array {
    return GMPPacketData.encode(message).finish();
  },
  toProtoMsg(message: GMPPacketData): GMPPacketDataProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.GMPPacketData",
      value: GMPPacketData.encode(message).finish()
    };
  }
};
function createBaseAcknowledgement(): Acknowledgement {
  return {
    result: new Uint8Array()
  };
}
/**
 * Acknowledgement defines a struct for the ICS27-2 acknowledgement
 * @name Acknowledgement
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.Acknowledgement
 */
export const Acknowledgement = {
  typeUrl: "/ibc.applications.gmp.v1.Acknowledgement",
  aminoType: "cosmos-sdk/Acknowledgement",
  encode(message: Acknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result.length !== 0) {
      writer.uint32(10).bytes(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Acknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Acknowledgement>): Acknowledgement {
    const message = createBaseAcknowledgement();
    message.result = object.result ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AcknowledgementAmino): Acknowledgement {
    const message = createBaseAcknowledgement();
    if (object.result !== undefined && object.result !== null) {
      message.result = bytesFromBase64(object.result);
    }
    return message;
  },
  toAmino(message: Acknowledgement): AcknowledgementAmino {
    const obj: any = {};
    obj.result = message.result ? base64FromBytes(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: AcknowledgementAminoMsg): Acknowledgement {
    return Acknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message: Acknowledgement): AcknowledgementAminoMsg {
    return {
      type: "cosmos-sdk/Acknowledgement",
      value: Acknowledgement.toAmino(message)
    };
  },
  fromProtoMsg(message: AcknowledgementProtoMsg): Acknowledgement {
    return Acknowledgement.decode(message.value);
  },
  toProto(message: Acknowledgement): Uint8Array {
    return Acknowledgement.encode(message).finish();
  },
  toProtoMsg(message: Acknowledgement): AcknowledgementProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.Acknowledgement",
      value: Acknowledgement.encode(message).finish()
    };
  }
};