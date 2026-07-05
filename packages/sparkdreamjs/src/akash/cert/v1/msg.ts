//@ts-nocheck
import { ID, IDAmino } from "./cert";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgCreateCertificate defines an SDK message for creating certificate.
 * @name MsgCreateCertificate
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.MsgCreateCertificate
 */
export interface MsgCreateCertificate {
  /**
   * Owner is the account address of the user who owns the certificate.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Cert holds the bytes representing the certificate.
   */
  cert: Uint8Array;
  /**
   * PubKey holds the public key.
   */
  pubkey: Uint8Array;
}
export interface MsgCreateCertificateProtoMsg {
  typeUrl: "/akash.cert.v1.MsgCreateCertificate";
  value: Uint8Array;
}
/**
 * MsgCreateCertificate defines an SDK message for creating certificate.
 * @name MsgCreateCertificateAmino
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.MsgCreateCertificate
 */
export interface MsgCreateCertificateAmino {
  /**
   * Owner is the account address of the user who owns the certificate.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Cert holds the bytes representing the certificate.
   */
  cert: string;
  /**
   * PubKey holds the public key.
   */
  pubkey: string;
}
export interface MsgCreateCertificateAminoMsg {
  type: "/akash.cert.v1.MsgCreateCertificate";
  value: MsgCreateCertificateAmino;
}
/**
 * MsgCreateCertificateResponse defines the Msg/CreateCertificate response type.
 * @name MsgCreateCertificateResponse
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.MsgCreateCertificateResponse
 */
export interface MsgCreateCertificateResponse {}
export interface MsgCreateCertificateResponseProtoMsg {
  typeUrl: "/akash.cert.v1.MsgCreateCertificateResponse";
  value: Uint8Array;
}
/**
 * MsgCreateCertificateResponse defines the Msg/CreateCertificate response type.
 * @name MsgCreateCertificateResponseAmino
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.MsgCreateCertificateResponse
 */
export interface MsgCreateCertificateResponseAmino {}
export interface MsgCreateCertificateResponseAminoMsg {
  type: "/akash.cert.v1.MsgCreateCertificateResponse";
  value: MsgCreateCertificateResponseAmino;
}
/**
 * MsgRevokeCertificate defines an SDK message for revoking certificate.
 * @name MsgRevokeCertificate
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.MsgRevokeCertificate
 */
export interface MsgRevokeCertificate {
  /**
   * Id corresponds to the certificate ID which includes owner and sequence number.
   */
  id: ID;
}
export interface MsgRevokeCertificateProtoMsg {
  typeUrl: "/akash.cert.v1.MsgRevokeCertificate";
  value: Uint8Array;
}
/**
 * MsgRevokeCertificate defines an SDK message for revoking certificate.
 * @name MsgRevokeCertificateAmino
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.MsgRevokeCertificate
 */
export interface MsgRevokeCertificateAmino {
  /**
   * Id corresponds to the certificate ID which includes owner and sequence number.
   */
  id: IDAmino;
}
export interface MsgRevokeCertificateAminoMsg {
  type: "/akash.cert.v1.MsgRevokeCertificate";
  value: MsgRevokeCertificateAmino;
}
/**
 * MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type.
 * @name MsgRevokeCertificateResponse
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.MsgRevokeCertificateResponse
 */
export interface MsgRevokeCertificateResponse {}
export interface MsgRevokeCertificateResponseProtoMsg {
  typeUrl: "/akash.cert.v1.MsgRevokeCertificateResponse";
  value: Uint8Array;
}
/**
 * MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type.
 * @name MsgRevokeCertificateResponseAmino
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.MsgRevokeCertificateResponse
 */
export interface MsgRevokeCertificateResponseAmino {}
export interface MsgRevokeCertificateResponseAminoMsg {
  type: "/akash.cert.v1.MsgRevokeCertificateResponse";
  value: MsgRevokeCertificateResponseAmino;
}
function createBaseMsgCreateCertificate(): MsgCreateCertificate {
  return {
    owner: "",
    cert: new Uint8Array(),
    pubkey: new Uint8Array()
  };
}
/**
 * MsgCreateCertificate defines an SDK message for creating certificate.
 * @name MsgCreateCertificate
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.MsgCreateCertificate
 */
export const MsgCreateCertificate = {
  typeUrl: "/akash.cert.v1.MsgCreateCertificate",
  encode(message: MsgCreateCertificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.cert.length !== 0) {
      writer.uint32(18).bytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(26).bytes(message.pubkey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCertificate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.cert = reader.bytes();
          break;
        case 3:
          message.pubkey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateCertificate>): MsgCreateCertificate {
    const message = createBaseMsgCreateCertificate();
    message.owner = object.owner ?? "";
    message.cert = object.cert ?? new Uint8Array();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgCreateCertificateAmino): MsgCreateCertificate {
    const message = createBaseMsgCreateCertificate();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = bytesFromBase64(object.cert);
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = bytesFromBase64(object.pubkey);
    }
    return message;
  },
  toAmino(message: MsgCreateCertificate): MsgCreateCertificateAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.cert = message.cert ? base64FromBytes(message.cert) : "";
    obj.pubkey = message.pubkey ? base64FromBytes(message.pubkey) : "";
    return obj;
  },
  fromAminoMsg(object: MsgCreateCertificateAminoMsg): MsgCreateCertificate {
    return MsgCreateCertificate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCertificateProtoMsg): MsgCreateCertificate {
    return MsgCreateCertificate.decode(message.value);
  },
  toProto(message: MsgCreateCertificate): Uint8Array {
    return MsgCreateCertificate.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCertificate): MsgCreateCertificateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1.MsgCreateCertificate",
      value: MsgCreateCertificate.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCertificateResponse(): MsgCreateCertificateResponse {
  return {};
}
/**
 * MsgCreateCertificateResponse defines the Msg/CreateCertificate response type.
 * @name MsgCreateCertificateResponse
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.MsgCreateCertificateResponse
 */
export const MsgCreateCertificateResponse = {
  typeUrl: "/akash.cert.v1.MsgCreateCertificateResponse",
  encode(_: MsgCreateCertificateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCertificateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificateResponse();
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
  fromPartial(_: DeepPartial<MsgCreateCertificateResponse>): MsgCreateCertificateResponse {
    const message = createBaseMsgCreateCertificateResponse();
    return message;
  },
  fromAmino(_: MsgCreateCertificateResponseAmino): MsgCreateCertificateResponse {
    const message = createBaseMsgCreateCertificateResponse();
    return message;
  },
  toAmino(_: MsgCreateCertificateResponse): MsgCreateCertificateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateCertificateResponseAminoMsg): MsgCreateCertificateResponse {
    return MsgCreateCertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCertificateResponseProtoMsg): MsgCreateCertificateResponse {
    return MsgCreateCertificateResponse.decode(message.value);
  },
  toProto(message: MsgCreateCertificateResponse): Uint8Array {
    return MsgCreateCertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCertificateResponse): MsgCreateCertificateResponseProtoMsg {
    return {
      typeUrl: "/akash.cert.v1.MsgCreateCertificateResponse",
      value: MsgCreateCertificateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeCertificate(): MsgRevokeCertificate {
  return {
    id: ID.fromPartial({})
  };
}
/**
 * MsgRevokeCertificate defines an SDK message for revoking certificate.
 * @name MsgRevokeCertificate
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.MsgRevokeCertificate
 */
export const MsgRevokeCertificate = {
  typeUrl: "/akash.cert.v1.MsgRevokeCertificate",
  encode(message: MsgRevokeCertificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      ID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeCertificate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevokeCertificate>): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    message.id = object.id !== undefined && object.id !== null ? ID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: MsgRevokeCertificateAmino): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    if (object.id !== undefined && object.id !== null) {
      message.id = ID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgRevokeCertificate): MsgRevokeCertificateAmino {
    const obj: any = {};
    obj.id = message.id ? ID.toAmino(message.id) : ID.toAmino(ID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgRevokeCertificateAminoMsg): MsgRevokeCertificate {
    return MsgRevokeCertificate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeCertificateProtoMsg): MsgRevokeCertificate {
    return MsgRevokeCertificate.decode(message.value);
  },
  toProto(message: MsgRevokeCertificate): Uint8Array {
    return MsgRevokeCertificate.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeCertificate): MsgRevokeCertificateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1.MsgRevokeCertificate",
      value: MsgRevokeCertificate.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeCertificateResponse(): MsgRevokeCertificateResponse {
  return {};
}
/**
 * MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type.
 * @name MsgRevokeCertificateResponse
 * @package akash.cert.v1
 * @see proto type: akash.cert.v1.MsgRevokeCertificateResponse
 */
export const MsgRevokeCertificateResponse = {
  typeUrl: "/akash.cert.v1.MsgRevokeCertificateResponse",
  encode(_: MsgRevokeCertificateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeCertificateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCertificateResponse();
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
  fromPartial(_: DeepPartial<MsgRevokeCertificateResponse>): MsgRevokeCertificateResponse {
    const message = createBaseMsgRevokeCertificateResponse();
    return message;
  },
  fromAmino(_: MsgRevokeCertificateResponseAmino): MsgRevokeCertificateResponse {
    const message = createBaseMsgRevokeCertificateResponse();
    return message;
  },
  toAmino(_: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeCertificateResponseAminoMsg): MsgRevokeCertificateResponse {
    return MsgRevokeCertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeCertificateResponseProtoMsg): MsgRevokeCertificateResponse {
    return MsgRevokeCertificateResponse.decode(message.value);
  },
  toProto(message: MsgRevokeCertificateResponse): Uint8Array {
    return MsgRevokeCertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseProtoMsg {
    return {
      typeUrl: "/akash.cert.v1.MsgRevokeCertificateResponse",
      value: MsgRevokeCertificateResponse.encode(message).finish()
    };
  }
};