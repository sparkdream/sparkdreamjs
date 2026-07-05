//@ts-nocheck
import { Attribute, AttributeAmino } from "../../base/attributes/v1/attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgSignProviderAttributes defines an SDK message for signing a provider attributes.
 * @name MsgSignProviderAttributes
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.MsgSignProviderAttributes
 */
export interface MsgSignProviderAttributes {
  /**
   * Owner is the account bech32 address of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Auditor is the account address of the auditor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  auditor: string;
  /**
   * Attributes holds a list of key-value pairs of provider attributes to be audited.
   * Attributes are arbitrary values that a provider exposes.
   */
  attributes: Attribute[];
}
export interface MsgSignProviderAttributesProtoMsg {
  typeUrl: "/akash.audit.v1.MsgSignProviderAttributes";
  value: Uint8Array;
}
/**
 * MsgSignProviderAttributes defines an SDK message for signing a provider attributes.
 * @name MsgSignProviderAttributesAmino
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.MsgSignProviderAttributes
 */
export interface MsgSignProviderAttributesAmino {
  /**
   * Owner is the account bech32 address of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Auditor is the account address of the auditor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  auditor: string;
  /**
   * Attributes holds a list of key-value pairs of provider attributes to be audited.
   * Attributes are arbitrary values that a provider exposes.
   */
  attributes: AttributeAmino[];
}
export interface MsgSignProviderAttributesAminoMsg {
  type: "/akash.audit.v1.MsgSignProviderAttributes";
  value: MsgSignProviderAttributesAmino;
}
/**
 * MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type.
 * @name MsgSignProviderAttributesResponse
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.MsgSignProviderAttributesResponse
 */
export interface MsgSignProviderAttributesResponse {}
export interface MsgSignProviderAttributesResponseProtoMsg {
  typeUrl: "/akash.audit.v1.MsgSignProviderAttributesResponse";
  value: Uint8Array;
}
/**
 * MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type.
 * @name MsgSignProviderAttributesResponseAmino
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.MsgSignProviderAttributesResponse
 */
export interface MsgSignProviderAttributesResponseAmino {}
export interface MsgSignProviderAttributesResponseAminoMsg {
  type: "/akash.audit.v1.MsgSignProviderAttributesResponse";
  value: MsgSignProviderAttributesResponseAmino;
}
/**
 * MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes
 * @name MsgDeleteProviderAttributes
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.MsgDeleteProviderAttributes
 */
export interface MsgDeleteProviderAttributes {
  /**
   * Owner is the account bech32 address of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Auditor is the account address of the auditor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  auditor: string;
  /**
   * Keys holds a list of keys of audited provider attributes to delete from the audit.
   */
  keys: string[];
}
export interface MsgDeleteProviderAttributesProtoMsg {
  typeUrl: "/akash.audit.v1.MsgDeleteProviderAttributes";
  value: Uint8Array;
}
/**
 * MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes
 * @name MsgDeleteProviderAttributesAmino
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.MsgDeleteProviderAttributes
 */
export interface MsgDeleteProviderAttributesAmino {
  /**
   * Owner is the account bech32 address of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Auditor is the account address of the auditor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  auditor: string;
  /**
   * Keys holds a list of keys of audited provider attributes to delete from the audit.
   */
  keys: string[];
}
export interface MsgDeleteProviderAttributesAminoMsg {
  type: "/akash.audit.v1.MsgDeleteProviderAttributes";
  value: MsgDeleteProviderAttributesAmino;
}
/**
 * MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type.
 * @name MsgDeleteProviderAttributesResponse
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.MsgDeleteProviderAttributesResponse
 */
export interface MsgDeleteProviderAttributesResponse {}
export interface MsgDeleteProviderAttributesResponseProtoMsg {
  typeUrl: "/akash.audit.v1.MsgDeleteProviderAttributesResponse";
  value: Uint8Array;
}
/**
 * MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type.
 * @name MsgDeleteProviderAttributesResponseAmino
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.MsgDeleteProviderAttributesResponse
 */
export interface MsgDeleteProviderAttributesResponseAmino {}
export interface MsgDeleteProviderAttributesResponseAminoMsg {
  type: "/akash.audit.v1.MsgDeleteProviderAttributesResponse";
  value: MsgDeleteProviderAttributesResponseAmino;
}
function createBaseMsgSignProviderAttributes(): MsgSignProviderAttributes {
  return {
    owner: "",
    auditor: "",
    attributes: []
  };
}
/**
 * MsgSignProviderAttributes defines an SDK message for signing a provider attributes.
 * @name MsgSignProviderAttributes
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.MsgSignProviderAttributes
 */
export const MsgSignProviderAttributes = {
  typeUrl: "/akash.audit.v1.MsgSignProviderAttributes",
  encode(message: MsgSignProviderAttributes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSignProviderAttributes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignProviderAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSignProviderAttributes>): MsgSignProviderAttributes {
    const message = createBaseMsgSignProviderAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSignProviderAttributesAmino): MsgSignProviderAttributes {
    const message = createBaseMsgSignProviderAttributes();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSignProviderAttributes): MsgSignProviderAttributesAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.auditor = message.auditor ?? "";
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSignProviderAttributesAminoMsg): MsgSignProviderAttributes {
    return MsgSignProviderAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignProviderAttributesProtoMsg): MsgSignProviderAttributes {
    return MsgSignProviderAttributes.decode(message.value);
  },
  toProto(message: MsgSignProviderAttributes): Uint8Array {
    return MsgSignProviderAttributes.encode(message).finish();
  },
  toProtoMsg(message: MsgSignProviderAttributes): MsgSignProviderAttributesProtoMsg {
    return {
      typeUrl: "/akash.audit.v1.MsgSignProviderAttributes",
      value: MsgSignProviderAttributes.encode(message).finish()
    };
  }
};
function createBaseMsgSignProviderAttributesResponse(): MsgSignProviderAttributesResponse {
  return {};
}
/**
 * MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type.
 * @name MsgSignProviderAttributesResponse
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.MsgSignProviderAttributesResponse
 */
export const MsgSignProviderAttributesResponse = {
  typeUrl: "/akash.audit.v1.MsgSignProviderAttributesResponse",
  encode(_: MsgSignProviderAttributesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSignProviderAttributesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignProviderAttributesResponse();
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
  fromPartial(_: DeepPartial<MsgSignProviderAttributesResponse>): MsgSignProviderAttributesResponse {
    const message = createBaseMsgSignProviderAttributesResponse();
    return message;
  },
  fromAmino(_: MsgSignProviderAttributesResponseAmino): MsgSignProviderAttributesResponse {
    const message = createBaseMsgSignProviderAttributesResponse();
    return message;
  },
  toAmino(_: MsgSignProviderAttributesResponse): MsgSignProviderAttributesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSignProviderAttributesResponseAminoMsg): MsgSignProviderAttributesResponse {
    return MsgSignProviderAttributesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignProviderAttributesResponseProtoMsg): MsgSignProviderAttributesResponse {
    return MsgSignProviderAttributesResponse.decode(message.value);
  },
  toProto(message: MsgSignProviderAttributesResponse): Uint8Array {
    return MsgSignProviderAttributesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSignProviderAttributesResponse): MsgSignProviderAttributesResponseProtoMsg {
    return {
      typeUrl: "/akash.audit.v1.MsgSignProviderAttributesResponse",
      value: MsgSignProviderAttributesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProviderAttributes(): MsgDeleteProviderAttributes {
  return {
    owner: "",
    auditor: "",
    keys: []
  };
}
/**
 * MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes
 * @name MsgDeleteProviderAttributes
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.MsgDeleteProviderAttributes
 */
export const MsgDeleteProviderAttributes = {
  typeUrl: "/akash.audit.v1.MsgDeleteProviderAttributes",
  encode(message: MsgDeleteProviderAttributes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.keys) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProviderAttributes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
          break;
        case 3:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeleteProviderAttributes>): MsgDeleteProviderAttributes {
    const message = createBaseMsgDeleteProviderAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgDeleteProviderAttributesAmino): MsgDeleteProviderAttributes {
    const message = createBaseMsgDeleteProviderAttributes();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    }
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgDeleteProviderAttributes): MsgDeleteProviderAttributesAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.auditor = message.auditor ?? "";
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = message.keys;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderAttributesAminoMsg): MsgDeleteProviderAttributes {
    return MsgDeleteProviderAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteProviderAttributesProtoMsg): MsgDeleteProviderAttributes {
    return MsgDeleteProviderAttributes.decode(message.value);
  },
  toProto(message: MsgDeleteProviderAttributes): Uint8Array {
    return MsgDeleteProviderAttributes.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProviderAttributes): MsgDeleteProviderAttributesProtoMsg {
    return {
      typeUrl: "/akash.audit.v1.MsgDeleteProviderAttributes",
      value: MsgDeleteProviderAttributes.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProviderAttributesResponse(): MsgDeleteProviderAttributesResponse {
  return {};
}
/**
 * MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type.
 * @name MsgDeleteProviderAttributesResponse
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.MsgDeleteProviderAttributesResponse
 */
export const MsgDeleteProviderAttributesResponse = {
  typeUrl: "/akash.audit.v1.MsgDeleteProviderAttributesResponse",
  encode(_: MsgDeleteProviderAttributesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProviderAttributesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderAttributesResponse();
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
  fromPartial(_: DeepPartial<MsgDeleteProviderAttributesResponse>): MsgDeleteProviderAttributesResponse {
    const message = createBaseMsgDeleteProviderAttributesResponse();
    return message;
  },
  fromAmino(_: MsgDeleteProviderAttributesResponseAmino): MsgDeleteProviderAttributesResponse {
    const message = createBaseMsgDeleteProviderAttributesResponse();
    return message;
  },
  toAmino(_: MsgDeleteProviderAttributesResponse): MsgDeleteProviderAttributesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderAttributesResponseAminoMsg): MsgDeleteProviderAttributesResponse {
    return MsgDeleteProviderAttributesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteProviderAttributesResponseProtoMsg): MsgDeleteProviderAttributesResponse {
    return MsgDeleteProviderAttributesResponse.decode(message.value);
  },
  toProto(message: MsgDeleteProviderAttributesResponse): Uint8Array {
    return MsgDeleteProviderAttributesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProviderAttributesResponse): MsgDeleteProviderAttributesResponseProtoMsg {
    return {
      typeUrl: "/akash.audit.v1.MsgDeleteProviderAttributesResponse",
      value: MsgDeleteProviderAttributesResponse.encode(message).finish()
    };
  }
};