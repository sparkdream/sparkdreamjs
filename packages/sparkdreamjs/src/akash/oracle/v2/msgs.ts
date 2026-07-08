//@ts-nocheck
import { DataID, DataIDAmino } from "./prices";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
/**
 * MsgAddPriceEntry defines an SDK message to add oracle price entry.
 * @name MsgAddPriceEntry
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.MsgAddPriceEntry
 */
export interface MsgAddPriceEntry {
  /**
   * Signer is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  signer: string;
  /**
   * id uniquely identifies the price data by denomination and base denomination
   */
  id: DataID;
  /**
   * price is the decimal price value
   */
  price: string;
  /**
   * timestamp is when this price was observed
   */
  timestamp: Date;
}
export interface MsgAddPriceEntryProtoMsg {
  typeUrl: "/akash.oracle.v2.MsgAddPriceEntry";
  value: Uint8Array;
}
/**
 * MsgAddPriceEntry defines an SDK message to add oracle price entry.
 * @name MsgAddPriceEntryAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.MsgAddPriceEntry
 */
export interface MsgAddPriceEntryAmino {
  /**
   * Signer is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  signer: string;
  /**
   * id uniquely identifies the price data by denomination and base denomination
   */
  id: DataIDAmino;
  /**
   * price is the decimal price value
   */
  price: string;
  /**
   * timestamp is when this price was observed
   */
  timestamp: string;
}
export interface MsgAddPriceEntryAminoMsg {
  type: "/akash.oracle.v2.MsgAddPriceEntry";
  value: MsgAddPriceEntryAmino;
}
/**
 * MsgAddPriceEntryResponse defines the Msg/MsgAddPriceEntry response type.
 * @name MsgAddPriceEntryResponse
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.MsgAddPriceEntryResponse
 */
export interface MsgAddPriceEntryResponse {}
export interface MsgAddPriceEntryResponseProtoMsg {
  typeUrl: "/akash.oracle.v2.MsgAddPriceEntryResponse";
  value: Uint8Array;
}
/**
 * MsgAddPriceEntryResponse defines the Msg/MsgAddPriceEntry response type.
 * @name MsgAddPriceEntryResponseAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.MsgAddPriceEntryResponse
 */
export interface MsgAddPriceEntryResponseAmino {}
export interface MsgAddPriceEntryResponseAminoMsg {
  type: "/akash.oracle.v2.MsgAddPriceEntryResponse";
  value: MsgAddPriceEntryResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: akash v2.0.0
 * @name MsgUpdateParams
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address of the governance account.
   */
  authority: string;
  /**
   * params defines the x/oracle parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/akash.oracle.v2.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: akash v2.0.0
 * @name MsgUpdateParamsAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the governance account.
   */
  authority?: string;
  /**
   * params defines the x/oracle parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/akash.oracle.v2.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: akash v2.0.0
 * @name MsgUpdateParamsResponse
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/akash.oracle.v2.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: akash v2.0.0
 * @name MsgUpdateParamsResponseAmino
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/akash.oracle.v2.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgAddPriceEntry(): MsgAddPriceEntry {
  return {
    signer: "",
    id: DataID.fromPartial({}),
    price: "",
    timestamp: new Date()
  };
}
/**
 * MsgAddPriceEntry defines an SDK message to add oracle price entry.
 * @name MsgAddPriceEntry
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.MsgAddPriceEntry
 */
export const MsgAddPriceEntry = {
  typeUrl: "/akash.oracle.v2.MsgAddPriceEntry",
  encode(message: MsgAddPriceEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.id !== undefined) {
      DataID.encode(message.id, writer.uint32(18).fork()).ldelim();
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddPriceEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPriceEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.id = DataID.decode(reader, reader.uint32());
          break;
        case 3:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAddPriceEntry>): MsgAddPriceEntry {
    const message = createBaseMsgAddPriceEntry();
    message.signer = object.signer ?? "";
    message.id = object.id !== undefined && object.id !== null ? DataID.fromPartial(object.id) : undefined;
    message.price = object.price ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: MsgAddPriceEntryAmino): MsgAddPriceEntry {
    const message = createBaseMsgAddPriceEntry();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = DataID.fromAmino(object.id);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    return message;
  },
  toAmino(message: MsgAddPriceEntry): MsgAddPriceEntryAmino {
    const obj: any = {};
    obj.signer = message.signer ?? "";
    obj.id = message.id ? DataID.toAmino(message.id) : DataID.toAmino(DataID.fromPartial({}));
    obj.price = message.price ?? "";
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : new Date();
    return obj;
  },
  fromAminoMsg(object: MsgAddPriceEntryAminoMsg): MsgAddPriceEntry {
    return MsgAddPriceEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPriceEntryProtoMsg): MsgAddPriceEntry {
    return MsgAddPriceEntry.decode(message.value);
  },
  toProto(message: MsgAddPriceEntry): Uint8Array {
    return MsgAddPriceEntry.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPriceEntry): MsgAddPriceEntryProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.MsgAddPriceEntry",
      value: MsgAddPriceEntry.encode(message).finish()
    };
  }
};
function createBaseMsgAddPriceEntryResponse(): MsgAddPriceEntryResponse {
  return {};
}
/**
 * MsgAddPriceEntryResponse defines the Msg/MsgAddPriceEntry response type.
 * @name MsgAddPriceEntryResponse
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.MsgAddPriceEntryResponse
 */
export const MsgAddPriceEntryResponse = {
  typeUrl: "/akash.oracle.v2.MsgAddPriceEntryResponse",
  encode(_: MsgAddPriceEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddPriceEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPriceEntryResponse();
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
  fromPartial(_: DeepPartial<MsgAddPriceEntryResponse>): MsgAddPriceEntryResponse {
    const message = createBaseMsgAddPriceEntryResponse();
    return message;
  },
  fromAmino(_: MsgAddPriceEntryResponseAmino): MsgAddPriceEntryResponse {
    const message = createBaseMsgAddPriceEntryResponse();
    return message;
  },
  toAmino(_: MsgAddPriceEntryResponse): MsgAddPriceEntryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddPriceEntryResponseAminoMsg): MsgAddPriceEntryResponse {
    return MsgAddPriceEntryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPriceEntryResponseProtoMsg): MsgAddPriceEntryResponse {
    return MsgAddPriceEntryResponse.decode(message.value);
  },
  toProto(message: MsgAddPriceEntryResponse): Uint8Array {
    return MsgAddPriceEntryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPriceEntryResponse): MsgAddPriceEntryResponseProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.MsgAddPriceEntryResponse",
      value: MsgAddPriceEntryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: akash v2.0.0
 * @name MsgUpdateParams
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/akash.oracle.v2.MsgUpdateParams",
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
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/akash.oracle.v2.MsgUpdateParams",
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
 * 
 * Since: akash v2.0.0
 * @name MsgUpdateParamsResponse
 * @package akash.oracle.v2
 * @see proto type: akash.oracle.v2.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/akash.oracle.v2.MsgUpdateParamsResponse",
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
      typeUrl: "/akash.oracle.v2.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};