//@ts-nocheck
import { Attribute, AttributeAmino } from "../../base/attributes/v1/attribute";
import { Info, InfoAmino } from "./provider";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgCreateProvider defines an SDK message for creating a provider.
 * @name MsgCreateProvider
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgCreateProvider
 */
export interface MsgCreateProvider {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * HostURI is the Uniform Resource Identifier for provider connection.
   * This URI is used to directly connect to the provider to perform tasks such as sending the manifest.
   */
  hostUri: string;
  /**
   * Attributes is a list of arbitrary attribute key-value pairs.
   */
  attributes: Attribute[];
  /**
   * Info contains additional provider information.
   */
  info: Info;
}
export interface MsgCreateProviderProtoMsg {
  typeUrl: "/akash.provider.v1beta4.MsgCreateProvider";
  value: Uint8Array;
}
/**
 * MsgCreateProvider defines an SDK message for creating a provider.
 * @name MsgCreateProviderAmino
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgCreateProvider
 */
export interface MsgCreateProviderAmino {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * HostURI is the Uniform Resource Identifier for provider connection.
   * This URI is used to directly connect to the provider to perform tasks such as sending the manifest.
   */
  host_uri: string;
  /**
   * Attributes is a list of arbitrary attribute key-value pairs.
   */
  attributes: AttributeAmino[];
  /**
   * Info contains additional provider information.
   */
  info: InfoAmino;
}
export interface MsgCreateProviderAminoMsg {
  type: "/akash.provider.v1beta4.MsgCreateProvider";
  value: MsgCreateProviderAmino;
}
/**
 * MsgCreateProviderResponse defines the Msg/CreateProvider response type.
 * @name MsgCreateProviderResponse
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgCreateProviderResponse
 */
export interface MsgCreateProviderResponse {}
export interface MsgCreateProviderResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta4.MsgCreateProviderResponse";
  value: Uint8Array;
}
/**
 * MsgCreateProviderResponse defines the Msg/CreateProvider response type.
 * @name MsgCreateProviderResponseAmino
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgCreateProviderResponse
 */
export interface MsgCreateProviderResponseAmino {}
export interface MsgCreateProviderResponseAminoMsg {
  type: "/akash.provider.v1beta4.MsgCreateProviderResponse";
  value: MsgCreateProviderResponseAmino;
}
/**
 * MsgUpdateProvider defines an SDK message for updating a provider
 * @name MsgUpdateProvider
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgUpdateProvider
 */
export interface MsgUpdateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info: Info;
}
export interface MsgUpdateProviderProtoMsg {
  typeUrl: "/akash.provider.v1beta4.MsgUpdateProvider";
  value: Uint8Array;
}
/**
 * MsgUpdateProvider defines an SDK message for updating a provider
 * @name MsgUpdateProviderAmino
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgUpdateProvider
 */
export interface MsgUpdateProviderAmino {
  owner: string;
  host_uri: string;
  attributes: AttributeAmino[];
  info: InfoAmino;
}
export interface MsgUpdateProviderAminoMsg {
  type: "/akash.provider.v1beta4.MsgUpdateProvider";
  value: MsgUpdateProviderAmino;
}
/**
 * MsgUpdateProviderResponse defines the Msg/UpdateProvider response type.
 * @name MsgUpdateProviderResponse
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgUpdateProviderResponse
 */
export interface MsgUpdateProviderResponse {}
export interface MsgUpdateProviderResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta4.MsgUpdateProviderResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateProviderResponse defines the Msg/UpdateProvider response type.
 * @name MsgUpdateProviderResponseAmino
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgUpdateProviderResponse
 */
export interface MsgUpdateProviderResponseAmino {}
export interface MsgUpdateProviderResponseAminoMsg {
  type: "/akash.provider.v1beta4.MsgUpdateProviderResponse";
  value: MsgUpdateProviderResponseAmino;
}
/**
 * MsgDeleteProvider defines an SDK message for deleting a provider
 * @name MsgDeleteProvider
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgDeleteProvider
 */
export interface MsgDeleteProvider {
  owner: string;
}
export interface MsgDeleteProviderProtoMsg {
  typeUrl: "/akash.provider.v1beta4.MsgDeleteProvider";
  value: Uint8Array;
}
/**
 * MsgDeleteProvider defines an SDK message for deleting a provider
 * @name MsgDeleteProviderAmino
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgDeleteProvider
 */
export interface MsgDeleteProviderAmino {
  owner: string;
}
export interface MsgDeleteProviderAminoMsg {
  type: "/akash.provider.v1beta4.MsgDeleteProvider";
  value: MsgDeleteProviderAmino;
}
/**
 * MsgDeleteProviderResponse defines the Msg/DeleteProvider response type.
 * @name MsgDeleteProviderResponse
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgDeleteProviderResponse
 */
export interface MsgDeleteProviderResponse {}
export interface MsgDeleteProviderResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta4.MsgDeleteProviderResponse";
  value: Uint8Array;
}
/**
 * MsgDeleteProviderResponse defines the Msg/DeleteProvider response type.
 * @name MsgDeleteProviderResponseAmino
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgDeleteProviderResponse
 */
export interface MsgDeleteProviderResponseAmino {}
export interface MsgDeleteProviderResponseAminoMsg {
  type: "/akash.provider.v1beta4.MsgDeleteProviderResponse";
  value: MsgDeleteProviderResponseAmino;
}
function createBaseMsgCreateProvider(): MsgCreateProvider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: Info.fromPartial({})
  };
}
/**
 * MsgCreateProvider defines an SDK message for creating a provider.
 * @name MsgCreateProvider
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgCreateProvider
 */
export const MsgCreateProvider = {
  typeUrl: "/akash.provider.v1beta4.MsgCreateProvider",
  encode(message: MsgCreateProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      Info.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = Info.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateProvider>): MsgCreateProvider {
    const message = createBaseMsgCreateProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? Info.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateProviderAmino): MsgCreateProvider {
    const message = createBaseMsgCreateProvider();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.host_uri !== undefined && object.host_uri !== null) {
      message.hostUri = object.host_uri;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    if (object.info !== undefined && object.info !== null) {
      message.info = Info.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: MsgCreateProvider): MsgCreateProviderAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.host_uri = message.hostUri ?? "";
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    obj.info = message.info ? Info.toAmino(message.info) : Info.toAmino(Info.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCreateProviderAminoMsg): MsgCreateProvider {
    return MsgCreateProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProviderProtoMsg): MsgCreateProvider {
    return MsgCreateProvider.decode(message.value);
  },
  toProto(message: MsgCreateProvider): Uint8Array {
    return MsgCreateProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProvider): MsgCreateProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta4.MsgCreateProvider",
      value: MsgCreateProvider.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProviderResponse(): MsgCreateProviderResponse {
  return {};
}
/**
 * MsgCreateProviderResponse defines the Msg/CreateProvider response type.
 * @name MsgCreateProviderResponse
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgCreateProviderResponse
 */
export const MsgCreateProviderResponse = {
  typeUrl: "/akash.provider.v1beta4.MsgCreateProviderResponse",
  encode(_: MsgCreateProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProviderResponse();
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
  fromPartial(_: DeepPartial<MsgCreateProviderResponse>): MsgCreateProviderResponse {
    const message = createBaseMsgCreateProviderResponse();
    return message;
  },
  fromAmino(_: MsgCreateProviderResponseAmino): MsgCreateProviderResponse {
    const message = createBaseMsgCreateProviderResponse();
    return message;
  },
  toAmino(_: MsgCreateProviderResponse): MsgCreateProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateProviderResponseAminoMsg): MsgCreateProviderResponse {
    return MsgCreateProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProviderResponseProtoMsg): MsgCreateProviderResponse {
    return MsgCreateProviderResponse.decode(message.value);
  },
  toProto(message: MsgCreateProviderResponse): Uint8Array {
    return MsgCreateProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProviderResponse): MsgCreateProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta4.MsgCreateProviderResponse",
      value: MsgCreateProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProvider(): MsgUpdateProvider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: Info.fromPartial({})
  };
}
/**
 * MsgUpdateProvider defines an SDK message for updating a provider
 * @name MsgUpdateProvider
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgUpdateProvider
 */
export const MsgUpdateProvider = {
  typeUrl: "/akash.provider.v1beta4.MsgUpdateProvider",
  encode(message: MsgUpdateProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      Info.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = Info.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateProvider>): MsgUpdateProvider {
    const message = createBaseMsgUpdateProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? Info.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateProviderAmino): MsgUpdateProvider {
    const message = createBaseMsgUpdateProvider();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.host_uri !== undefined && object.host_uri !== null) {
      message.hostUri = object.host_uri;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    if (object.info !== undefined && object.info !== null) {
      message.info = Info.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: MsgUpdateProvider): MsgUpdateProviderAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.host_uri = message.hostUri ?? "";
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    obj.info = message.info ? Info.toAmino(message.info) : Info.toAmino(Info.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProviderAminoMsg): MsgUpdateProvider {
    return MsgUpdateProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProviderProtoMsg): MsgUpdateProvider {
    return MsgUpdateProvider.decode(message.value);
  },
  toProto(message: MsgUpdateProvider): Uint8Array {
    return MsgUpdateProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProvider): MsgUpdateProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta4.MsgUpdateProvider",
      value: MsgUpdateProvider.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProviderResponse(): MsgUpdateProviderResponse {
  return {};
}
/**
 * MsgUpdateProviderResponse defines the Msg/UpdateProvider response type.
 * @name MsgUpdateProviderResponse
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgUpdateProviderResponse
 */
export const MsgUpdateProviderResponse = {
  typeUrl: "/akash.provider.v1beta4.MsgUpdateProviderResponse",
  encode(_: MsgUpdateProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProviderResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateProviderResponse>): MsgUpdateProviderResponse {
    const message = createBaseMsgUpdateProviderResponse();
    return message;
  },
  fromAmino(_: MsgUpdateProviderResponseAmino): MsgUpdateProviderResponse {
    const message = createBaseMsgUpdateProviderResponse();
    return message;
  },
  toAmino(_: MsgUpdateProviderResponse): MsgUpdateProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProviderResponseAminoMsg): MsgUpdateProviderResponse {
    return MsgUpdateProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProviderResponseProtoMsg): MsgUpdateProviderResponse {
    return MsgUpdateProviderResponse.decode(message.value);
  },
  toProto(message: MsgUpdateProviderResponse): Uint8Array {
    return MsgUpdateProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProviderResponse): MsgUpdateProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta4.MsgUpdateProviderResponse",
      value: MsgUpdateProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProvider(): MsgDeleteProvider {
  return {
    owner: ""
  };
}
/**
 * MsgDeleteProvider defines an SDK message for deleting a provider
 * @name MsgDeleteProvider
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgDeleteProvider
 */
export const MsgDeleteProvider = {
  typeUrl: "/akash.provider.v1beta4.MsgDeleteProvider",
  encode(message: MsgDeleteProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeleteProvider>): MsgDeleteProvider {
    const message = createBaseMsgDeleteProvider();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteProviderAmino): MsgDeleteProvider {
    const message = createBaseMsgDeleteProvider();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgDeleteProvider): MsgDeleteProviderAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderAminoMsg): MsgDeleteProvider {
    return MsgDeleteProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteProviderProtoMsg): MsgDeleteProvider {
    return MsgDeleteProvider.decode(message.value);
  },
  toProto(message: MsgDeleteProvider): Uint8Array {
    return MsgDeleteProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProvider): MsgDeleteProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta4.MsgDeleteProvider",
      value: MsgDeleteProvider.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProviderResponse(): MsgDeleteProviderResponse {
  return {};
}
/**
 * MsgDeleteProviderResponse defines the Msg/DeleteProvider response type.
 * @name MsgDeleteProviderResponse
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.MsgDeleteProviderResponse
 */
export const MsgDeleteProviderResponse = {
  typeUrl: "/akash.provider.v1beta4.MsgDeleteProviderResponse",
  encode(_: MsgDeleteProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderResponse();
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
  fromPartial(_: DeepPartial<MsgDeleteProviderResponse>): MsgDeleteProviderResponse {
    const message = createBaseMsgDeleteProviderResponse();
    return message;
  },
  fromAmino(_: MsgDeleteProviderResponseAmino): MsgDeleteProviderResponse {
    const message = createBaseMsgDeleteProviderResponse();
    return message;
  },
  toAmino(_: MsgDeleteProviderResponse): MsgDeleteProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderResponseAminoMsg): MsgDeleteProviderResponse {
    return MsgDeleteProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteProviderResponseProtoMsg): MsgDeleteProviderResponse {
    return MsgDeleteProviderResponse.decode(message.value);
  },
  toProto(message: MsgDeleteProviderResponse): Uint8Array {
    return MsgDeleteProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProviderResponse): MsgDeleteProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta4.MsgDeleteProviderResponse",
      value: MsgDeleteProviderResponse.encode(message).finish()
    };
  }
};