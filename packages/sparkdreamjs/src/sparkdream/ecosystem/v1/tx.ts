//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.ecosystem.v1
 * @see proto type: sparkdream.ecosystem.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.ecosystem.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.ecosystem.v1
 * @see proto type: sparkdream.ecosystem.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/ecosystem/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.ecosystem.v1
 * @see proto type: sparkdream.ecosystem.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.ecosystem.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.ecosystem.v1
 * @see proto type: sparkdream.ecosystem.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.ecosystem.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgSpend defines the MsgSpend message.
 * @name MsgSpend
 * @package sparkdream.ecosystem.v1
 * @see proto type: sparkdream.ecosystem.v1.MsgSpend
 */
export interface MsgSpend {
  authority: string;
  recipient: string;
  amount: Coin[];
}
export interface MsgSpendProtoMsg {
  typeUrl: "/sparkdream.ecosystem.v1.MsgSpend";
  value: Uint8Array;
}
/**
 * MsgSpend defines the MsgSpend message.
 * @name MsgSpendAmino
 * @package sparkdream.ecosystem.v1
 * @see proto type: sparkdream.ecosystem.v1.MsgSpend
 */
export interface MsgSpendAmino {
  authority?: string;
  recipient?: string;
  amount?: CoinAmino[];
}
export interface MsgSpendAminoMsg {
  type: "sparkdream/x/ecosystem/MsgSpend";
  value: MsgSpendAmino;
}
/**
 * MsgSpendResponse defines the MsgSpendResponse message.
 * @name MsgSpendResponse
 * @package sparkdream.ecosystem.v1
 * @see proto type: sparkdream.ecosystem.v1.MsgSpendResponse
 */
export interface MsgSpendResponse {}
export interface MsgSpendResponseProtoMsg {
  typeUrl: "/sparkdream.ecosystem.v1.MsgSpendResponse";
  value: Uint8Array;
}
/**
 * MsgSpendResponse defines the MsgSpendResponse message.
 * @name MsgSpendResponseAmino
 * @package sparkdream.ecosystem.v1
 * @see proto type: sparkdream.ecosystem.v1.MsgSpendResponse
 */
export interface MsgSpendResponseAmino {}
export interface MsgSpendResponseAminoMsg {
  type: "/sparkdream.ecosystem.v1.MsgSpendResponse";
  value: MsgSpendResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.ecosystem.v1
 * @see proto type: sparkdream.ecosystem.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.ecosystem.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/ecosystem/MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "sparkdream/x/ecosystem/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.ecosystem.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.ecosystem.v1
 * @see proto type: sparkdream.ecosystem.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.ecosystem.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.ecosystem.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSpend(): MsgSpend {
  return {
    authority: "",
    recipient: "",
    amount: []
  };
}
/**
 * MsgSpend defines the MsgSpend message.
 * @name MsgSpend
 * @package sparkdream.ecosystem.v1
 * @see proto type: sparkdream.ecosystem.v1.MsgSpend
 */
export const MsgSpend = {
  typeUrl: "/sparkdream.ecosystem.v1.MsgSpend",
  aminoType: "sparkdream/x/ecosystem/MsgSpend",
  encode(message: MsgSpend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSpend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSpend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSpend>): MsgSpend {
    const message = createBaseMsgSpend();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSpendAmino): MsgSpend {
    const message = createBaseMsgSpend();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSpend): MsgSpendAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSpendAminoMsg): MsgSpend {
    return MsgSpend.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSpend): MsgSpendAminoMsg {
    return {
      type: "sparkdream/x/ecosystem/MsgSpend",
      value: MsgSpend.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSpendProtoMsg): MsgSpend {
    return MsgSpend.decode(message.value);
  },
  toProto(message: MsgSpend): Uint8Array {
    return MsgSpend.encode(message).finish();
  },
  toProtoMsg(message: MsgSpend): MsgSpendProtoMsg {
    return {
      typeUrl: "/sparkdream.ecosystem.v1.MsgSpend",
      value: MsgSpend.encode(message).finish()
    };
  }
};
function createBaseMsgSpendResponse(): MsgSpendResponse {
  return {};
}
/**
 * MsgSpendResponse defines the MsgSpendResponse message.
 * @name MsgSpendResponse
 * @package sparkdream.ecosystem.v1
 * @see proto type: sparkdream.ecosystem.v1.MsgSpendResponse
 */
export const MsgSpendResponse = {
  typeUrl: "/sparkdream.ecosystem.v1.MsgSpendResponse",
  encode(_: MsgSpendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSpendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSpendResponse();
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
  fromPartial(_: DeepPartial<MsgSpendResponse>): MsgSpendResponse {
    const message = createBaseMsgSpendResponse();
    return message;
  },
  fromAmino(_: MsgSpendResponseAmino): MsgSpendResponse {
    const message = createBaseMsgSpendResponse();
    return message;
  },
  toAmino(_: MsgSpendResponse): MsgSpendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSpendResponseAminoMsg): MsgSpendResponse {
    return MsgSpendResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSpendResponseProtoMsg): MsgSpendResponse {
    return MsgSpendResponse.decode(message.value);
  },
  toProto(message: MsgSpendResponse): Uint8Array {
    return MsgSpendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSpendResponse): MsgSpendResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.ecosystem.v1.MsgSpendResponse",
      value: MsgSpendResponse.encode(message).finish()
    };
  }
};