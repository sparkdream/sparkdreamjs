//@ts-nocheck
import { AccountIdentifier, AccountIdentifierAmino } from "./account";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * QueryAccountAddressRequest is the request type for the Query/AccountAddress RPC method.
 * @name QueryAccountAddressRequest
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.QueryAccountAddressRequest
 */
export interface QueryAccountAddressRequest {
  /**
   * The (local) client identifier
   */
  clientId: string;
  /**
   * The sender of the packet
   */
  sender: string;
  /**
   * The salt of the packet (in hex format)
   */
  salt: string;
}
export interface QueryAccountAddressRequestProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.QueryAccountAddressRequest";
  value: Uint8Array;
}
/**
 * QueryAccountAddressRequest is the request type for the Query/AccountAddress RPC method.
 * @name QueryAccountAddressRequestAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.QueryAccountAddressRequest
 */
export interface QueryAccountAddressRequestAmino {
  /**
   * The (local) client identifier
   */
  client_id?: string;
  /**
   * The sender of the packet
   */
  sender?: string;
  /**
   * The salt of the packet (in hex format)
   */
  salt?: string;
}
export interface QueryAccountAddressRequestAminoMsg {
  type: "cosmos-sdk/QueryAccountAddressRequest";
  value: QueryAccountAddressRequestAmino;
}
/**
 * QueryAccountAddressResponse is the response type for the Query/AccountAddress RPC method.
 * @name QueryAccountAddressResponse
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.QueryAccountAddressResponse
 */
export interface QueryAccountAddressResponse {
  /**
   * The interchain account address
   */
  accountAddress: string;
}
export interface QueryAccountAddressResponseProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.QueryAccountAddressResponse";
  value: Uint8Array;
}
/**
 * QueryAccountAddressResponse is the response type for the Query/AccountAddress RPC method.
 * @name QueryAccountAddressResponseAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.QueryAccountAddressResponse
 */
export interface QueryAccountAddressResponseAmino {
  /**
   * The interchain account address
   */
  account_address?: string;
}
export interface QueryAccountAddressResponseAminoMsg {
  type: "cosmos-sdk/QueryAccountAddressResponse";
  value: QueryAccountAddressResponseAmino;
}
/**
 * QueryAccountIdentifierRequest is the request type for querying the account identifier by account address.
 * @name QueryAccountIdentifierRequest
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.QueryAccountIdentifierRequest
 */
export interface QueryAccountIdentifierRequest {
  accountAddress: string;
}
export interface QueryAccountIdentifierRequestProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.QueryAccountIdentifierRequest";
  value: Uint8Array;
}
/**
 * QueryAccountIdentifierRequest is the request type for querying the account identifier by account address.
 * @name QueryAccountIdentifierRequestAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.QueryAccountIdentifierRequest
 */
export interface QueryAccountIdentifierRequestAmino {
  account_address?: string;
}
export interface QueryAccountIdentifierRequestAminoMsg {
  type: "cosmos-sdk/QueryAccountIdentifierRequest";
  value: QueryAccountIdentifierRequestAmino;
}
/**
 * QueryAccountIdentifierResponse is the response type for querying the account identifier by account address.
 * @name QueryAccountIdentifierResponse
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.QueryAccountIdentifierResponse
 */
export interface QueryAccountIdentifierResponse {
  accountId?: AccountIdentifier;
}
export interface QueryAccountIdentifierResponseProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.QueryAccountIdentifierResponse";
  value: Uint8Array;
}
/**
 * QueryAccountIdentifierResponse is the response type for querying the account identifier by account address.
 * @name QueryAccountIdentifierResponseAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.QueryAccountIdentifierResponse
 */
export interface QueryAccountIdentifierResponseAmino {
  account_id?: AccountIdentifierAmino;
}
export interface QueryAccountIdentifierResponseAminoMsg {
  type: "cosmos-sdk/QueryAccountIdentifierResponse";
  value: QueryAccountIdentifierResponseAmino;
}
function createBaseQueryAccountAddressRequest(): QueryAccountAddressRequest {
  return {
    clientId: "",
    sender: "",
    salt: ""
  };
}
/**
 * QueryAccountAddressRequest is the request type for the Query/AccountAddress RPC method.
 * @name QueryAccountAddressRequest
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.QueryAccountAddressRequest
 */
export const QueryAccountAddressRequest = {
  typeUrl: "/ibc.applications.gmp.v1.QueryAccountAddressRequest",
  aminoType: "cosmos-sdk/QueryAccountAddressRequest",
  encode(message: QueryAccountAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.salt !== "") {
      writer.uint32(26).string(message.salt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.salt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountAddressRequest>): QueryAccountAddressRequest {
    const message = createBaseQueryAccountAddressRequest();
    message.clientId = object.clientId ?? "";
    message.sender = object.sender ?? "";
    message.salt = object.salt ?? "";
    return message;
  },
  fromAmino(object: QueryAccountAddressRequestAmino): QueryAccountAddressRequest {
    const message = createBaseQueryAccountAddressRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = object.salt;
    }
    return message;
  },
  toAmino(message: QueryAccountAddressRequest): QueryAccountAddressRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.salt = message.salt === "" ? undefined : message.salt;
    return obj;
  },
  fromAminoMsg(object: QueryAccountAddressRequestAminoMsg): QueryAccountAddressRequest {
    return QueryAccountAddressRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountAddressRequest): QueryAccountAddressRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountAddressRequest",
      value: QueryAccountAddressRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAccountAddressRequestProtoMsg): QueryAccountAddressRequest {
    return QueryAccountAddressRequest.decode(message.value);
  },
  toProto(message: QueryAccountAddressRequest): Uint8Array {
    return QueryAccountAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAddressRequest): QueryAccountAddressRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.QueryAccountAddressRequest",
      value: QueryAccountAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountAddressResponse(): QueryAccountAddressResponse {
  return {
    accountAddress: ""
  };
}
/**
 * QueryAccountAddressResponse is the response type for the Query/AccountAddress RPC method.
 * @name QueryAccountAddressResponse
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.QueryAccountAddressResponse
 */
export const QueryAccountAddressResponse = {
  typeUrl: "/ibc.applications.gmp.v1.QueryAccountAddressResponse",
  aminoType: "cosmos-sdk/QueryAccountAddressResponse",
  encode(message: QueryAccountAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountAddressResponse>): QueryAccountAddressResponse {
    const message = createBaseQueryAccountAddressResponse();
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
  fromAmino(object: QueryAccountAddressResponseAmino): QueryAccountAddressResponse {
    const message = createBaseQueryAccountAddressResponse();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    return message;
  },
  toAmino(message: QueryAccountAddressResponse): QueryAccountAddressResponseAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    return obj;
  },
  fromAminoMsg(object: QueryAccountAddressResponseAminoMsg): QueryAccountAddressResponse {
    return QueryAccountAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountAddressResponse): QueryAccountAddressResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountAddressResponse",
      value: QueryAccountAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAccountAddressResponseProtoMsg): QueryAccountAddressResponse {
    return QueryAccountAddressResponse.decode(message.value);
  },
  toProto(message: QueryAccountAddressResponse): Uint8Array {
    return QueryAccountAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAddressResponse): QueryAccountAddressResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.QueryAccountAddressResponse",
      value: QueryAccountAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountIdentifierRequest(): QueryAccountIdentifierRequest {
  return {
    accountAddress: ""
  };
}
/**
 * QueryAccountIdentifierRequest is the request type for querying the account identifier by account address.
 * @name QueryAccountIdentifierRequest
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.QueryAccountIdentifierRequest
 */
export const QueryAccountIdentifierRequest = {
  typeUrl: "/ibc.applications.gmp.v1.QueryAccountIdentifierRequest",
  aminoType: "cosmos-sdk/QueryAccountIdentifierRequest",
  encode(message: QueryAccountIdentifierRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountIdentifierRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountIdentifierRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountIdentifierRequest>): QueryAccountIdentifierRequest {
    const message = createBaseQueryAccountIdentifierRequest();
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
  fromAmino(object: QueryAccountIdentifierRequestAmino): QueryAccountIdentifierRequest {
    const message = createBaseQueryAccountIdentifierRequest();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    return message;
  },
  toAmino(message: QueryAccountIdentifierRequest): QueryAccountIdentifierRequestAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    return obj;
  },
  fromAminoMsg(object: QueryAccountIdentifierRequestAminoMsg): QueryAccountIdentifierRequest {
    return QueryAccountIdentifierRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountIdentifierRequest): QueryAccountIdentifierRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountIdentifierRequest",
      value: QueryAccountIdentifierRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAccountIdentifierRequestProtoMsg): QueryAccountIdentifierRequest {
    return QueryAccountIdentifierRequest.decode(message.value);
  },
  toProto(message: QueryAccountIdentifierRequest): Uint8Array {
    return QueryAccountIdentifierRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountIdentifierRequest): QueryAccountIdentifierRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.QueryAccountIdentifierRequest",
      value: QueryAccountIdentifierRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountIdentifierResponse(): QueryAccountIdentifierResponse {
  return {
    accountId: undefined
  };
}
/**
 * QueryAccountIdentifierResponse is the response type for querying the account identifier by account address.
 * @name QueryAccountIdentifierResponse
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.QueryAccountIdentifierResponse
 */
export const QueryAccountIdentifierResponse = {
  typeUrl: "/ibc.applications.gmp.v1.QueryAccountIdentifierResponse",
  aminoType: "cosmos-sdk/QueryAccountIdentifierResponse",
  encode(message: QueryAccountIdentifierResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountId !== undefined) {
      AccountIdentifier.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountIdentifierResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountIdentifierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = AccountIdentifier.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountIdentifierResponse>): QueryAccountIdentifierResponse {
    const message = createBaseQueryAccountIdentifierResponse();
    message.accountId = object.accountId !== undefined && object.accountId !== null ? AccountIdentifier.fromPartial(object.accountId) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountIdentifierResponseAmino): QueryAccountIdentifierResponse {
    const message = createBaseQueryAccountIdentifierResponse();
    if (object.account_id !== undefined && object.account_id !== null) {
      message.accountId = AccountIdentifier.fromAmino(object.account_id);
    }
    return message;
  },
  toAmino(message: QueryAccountIdentifierResponse): QueryAccountIdentifierResponseAmino {
    const obj: any = {};
    obj.account_id = message.accountId ? AccountIdentifier.toAmino(message.accountId) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountIdentifierResponseAminoMsg): QueryAccountIdentifierResponse {
    return QueryAccountIdentifierResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountIdentifierResponse): QueryAccountIdentifierResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountIdentifierResponse",
      value: QueryAccountIdentifierResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAccountIdentifierResponseProtoMsg): QueryAccountIdentifierResponse {
    return QueryAccountIdentifierResponse.decode(message.value);
  },
  toProto(message: QueryAccountIdentifierResponse): Uint8Array {
    return QueryAccountIdentifierResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountIdentifierResponse): QueryAccountIdentifierResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.QueryAccountIdentifierResponse",
      value: QueryAccountIdentifierResponse.encode(message).finish()
    };
  }
};