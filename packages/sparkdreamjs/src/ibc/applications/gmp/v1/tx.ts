//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * MsgSendCall defines a msg to send a call to a contract/receiver on a ICS27-2 enabled chain.
 * @name MsgSendCall
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.MsgSendCall
 */
export interface MsgSendCall {
  /**
   * the client by which the packet will be sent
   */
  sourceClient: string;
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
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   */
  timeoutTimestamp: bigint;
  /**
   * optional memo
   */
  memo: string;
  /**
   * optional encoding
   */
  encoding: string;
}
export interface MsgSendCallProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.MsgSendCall";
  value: Uint8Array;
}
/**
 * MsgSendCall defines a msg to send a call to a contract/receiver on a ICS27-2 enabled chain.
 * @name MsgSendCallAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.MsgSendCall
 */
export interface MsgSendCallAmino {
  /**
   * the client by which the packet will be sent
   */
  source_client?: string;
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
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   */
  timeout_timestamp?: string;
  /**
   * optional memo
   */
  memo?: string;
  /**
   * optional encoding
   */
  encoding?: string;
}
export interface MsgSendCallAminoMsg {
  type: "cosmos-sdk/MsgSendCall";
  value: MsgSendCallAmino;
}
/**
 * MsgSendCallResponse defines the Msg/SendCall response type.
 * @name MsgSendCallResponse
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.MsgSendCallResponse
 */
export interface MsgSendCallResponse {
  /**
   * sequence number of the GMP packet sent
   */
  sequence: bigint;
}
export interface MsgSendCallResponseProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.MsgSendCallResponse";
  value: Uint8Array;
}
/**
 * MsgSendCallResponse defines the Msg/SendCall response type.
 * @name MsgSendCallResponseAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.MsgSendCallResponse
 */
export interface MsgSendCallResponseAmino {
  /**
   * sequence number of the GMP packet sent
   */
  sequence?: string;
}
export interface MsgSendCallResponseAminoMsg {
  type: "cosmos-sdk/MsgSendCallResponse";
  value: MsgSendCallResponseAmino;
}
function createBaseMsgSendCall(): MsgSendCall {
  return {
    sourceClient: "",
    sender: "",
    receiver: "",
    salt: new Uint8Array(),
    payload: new Uint8Array(),
    timeoutTimestamp: BigInt(0),
    memo: "",
    encoding: ""
  };
}
/**
 * MsgSendCall defines a msg to send a call to a contract/receiver on a ICS27-2 enabled chain.
 * @name MsgSendCall
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.MsgSendCall
 */
export const MsgSendCall = {
  typeUrl: "/ibc.applications.gmp.v1.MsgSendCall",
  aminoType: "cosmos-sdk/MsgSendCall",
  encode(message: MsgSendCall, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourceClient !== "") {
      writer.uint32(10).string(message.sourceClient);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.salt.length !== 0) {
      writer.uint32(34).bytes(message.salt);
    }
    if (message.payload.length !== 0) {
      writer.uint32(42).bytes(message.payload);
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(48).uint64(message.timeoutTimestamp);
    }
    if (message.memo !== "") {
      writer.uint32(58).string(message.memo);
    }
    if (message.encoding !== "") {
      writer.uint32(66).string(message.encoding);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendCall {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceClient = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.salt = reader.bytes();
          break;
        case 5:
          message.payload = reader.bytes();
          break;
        case 6:
          message.timeoutTimestamp = reader.uint64();
          break;
        case 7:
          message.memo = reader.string();
          break;
        case 8:
          message.encoding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSendCall>): MsgSendCall {
    const message = createBaseMsgSendCall();
    message.sourceClient = object.sourceClient ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.salt = object.salt ?? new Uint8Array();
    message.payload = object.payload ?? new Uint8Array();
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
    message.memo = object.memo ?? "";
    message.encoding = object.encoding ?? "";
    return message;
  },
  fromAmino(object: MsgSendCallAmino): MsgSendCall {
    const message = createBaseMsgSendCall();
    if (object.source_client !== undefined && object.source_client !== null) {
      message.sourceClient = object.source_client;
    }
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
    if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeout_timestamp);
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = object.encoding;
    }
    return message;
  },
  toAmino(message: MsgSendCall): MsgSendCallAmino {
    const obj: any = {};
    obj.source_client = message.sourceClient === "" ? undefined : message.sourceClient;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp?.toString() : undefined;
    obj.memo = message.memo === "" ? undefined : message.memo;
    obj.encoding = message.encoding === "" ? undefined : message.encoding;
    return obj;
  },
  fromAminoMsg(object: MsgSendCallAminoMsg): MsgSendCall {
    return MsgSendCall.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSendCall): MsgSendCallAminoMsg {
    return {
      type: "cosmos-sdk/MsgSendCall",
      value: MsgSendCall.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSendCallProtoMsg): MsgSendCall {
    return MsgSendCall.decode(message.value);
  },
  toProto(message: MsgSendCall): Uint8Array {
    return MsgSendCall.encode(message).finish();
  },
  toProtoMsg(message: MsgSendCall): MsgSendCallProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.MsgSendCall",
      value: MsgSendCall.encode(message).finish()
    };
  }
};
function createBaseMsgSendCallResponse(): MsgSendCallResponse {
  return {
    sequence: BigInt(0)
  };
}
/**
 * MsgSendCallResponse defines the Msg/SendCall response type.
 * @name MsgSendCallResponse
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.MsgSendCallResponse
 */
export const MsgSendCallResponse = {
  typeUrl: "/ibc.applications.gmp.v1.MsgSendCallResponse",
  aminoType: "cosmos-sdk/MsgSendCallResponse",
  encode(message: MsgSendCallResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendCallResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendCallResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSendCallResponse>): MsgSendCallResponse {
    const message = createBaseMsgSendCallResponse();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSendCallResponseAmino): MsgSendCallResponse {
    const message = createBaseMsgSendCallResponse();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: MsgSendCallResponse): MsgSendCallResponseAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSendCallResponseAminoMsg): MsgSendCallResponse {
    return MsgSendCallResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSendCallResponse): MsgSendCallResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSendCallResponse",
      value: MsgSendCallResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSendCallResponseProtoMsg): MsgSendCallResponse {
    return MsgSendCallResponse.decode(message.value);
  },
  toProto(message: MsgSendCallResponse): Uint8Array {
    return MsgSendCallResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendCallResponse): MsgSendCallResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.MsgSendCallResponse",
      value: MsgSendCallResponse.encode(message).finish()
    };
  }
};