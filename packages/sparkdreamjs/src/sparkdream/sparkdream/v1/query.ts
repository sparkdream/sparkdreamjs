//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.sparkdream.v1
 * @see proto type: sparkdream.sparkdream.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.sparkdream.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.sparkdream.v1
 * @see proto type: sparkdream.sparkdream.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.sparkdream.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.sparkdream.v1
 * @see proto type: sparkdream.sparkdream.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.sparkdream.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.sparkdream.v1
 * @see proto type: sparkdream.sparkdream.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.sparkdream.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryContentLicenseRequest is the request type for Query/ContentLicense.
 * @name QueryContentLicenseRequest
 * @package sparkdream.sparkdream.v1
 * @see proto type: sparkdream.sparkdream.v1.QueryContentLicenseRequest
 */
export interface QueryContentLicenseRequest {}
export interface QueryContentLicenseRequestProtoMsg {
  typeUrl: "/sparkdream.sparkdream.v1.QueryContentLicenseRequest";
  value: Uint8Array;
}
/**
 * QueryContentLicenseRequest is the request type for Query/ContentLicense.
 * @name QueryContentLicenseRequestAmino
 * @package sparkdream.sparkdream.v1
 * @see proto type: sparkdream.sparkdream.v1.QueryContentLicenseRequest
 */
export interface QueryContentLicenseRequestAmino {}
export interface QueryContentLicenseRequestAminoMsg {
  type: "/sparkdream.sparkdream.v1.QueryContentLicenseRequest";
  value: QueryContentLicenseRequestAmino;
}
/**
 * QueryContentLicenseResponse is the response type for Query/ContentLicense.
 * @name QueryContentLicenseResponse
 * @package sparkdream.sparkdream.v1
 * @see proto type: sparkdream.sparkdream.v1.QueryContentLicenseResponse
 */
export interface QueryContentLicenseResponse {
  /**
   * license is the SPDX id of the license all content is published under
   * ("CC0-1.0").
   */
  license: string;
  /**
   * name is the license's display name.
   */
  name: string;
  /**
   * url links to the license's legal text.
   */
  url: string;
  /**
   * dedication is the statement a participant makes by submitting content.
   * Clients should show it wherever content is composed.
   */
  dedication: string;
  /**
   * accepted_federated_licenses are the licenses content bridged in through
   * x/federation must carry ("CC0-1.0", "PDM-1.0"); everything else is
   * refused.
   */
  acceptedFederatedLicenses: string[];
}
export interface QueryContentLicenseResponseProtoMsg {
  typeUrl: "/sparkdream.sparkdream.v1.QueryContentLicenseResponse";
  value: Uint8Array;
}
/**
 * QueryContentLicenseResponse is the response type for Query/ContentLicense.
 * @name QueryContentLicenseResponseAmino
 * @package sparkdream.sparkdream.v1
 * @see proto type: sparkdream.sparkdream.v1.QueryContentLicenseResponse
 */
export interface QueryContentLicenseResponseAmino {
  /**
   * license is the SPDX id of the license all content is published under
   * ("CC0-1.0").
   */
  license?: string;
  /**
   * name is the license's display name.
   */
  name?: string;
  /**
   * url links to the license's legal text.
   */
  url?: string;
  /**
   * dedication is the statement a participant makes by submitting content.
   * Clients should show it wherever content is composed.
   */
  dedication?: string;
  /**
   * accepted_federated_licenses are the licenses content bridged in through
   * x/federation must carry ("CC0-1.0", "PDM-1.0"); everything else is
   * refused.
   */
  accepted_federated_licenses?: string[];
}
export interface QueryContentLicenseResponseAminoMsg {
  type: "/sparkdream.sparkdream.v1.QueryContentLicenseResponse";
  value: QueryContentLicenseResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.sparkdream.v1
 * @see proto type: sparkdream.sparkdream.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.sparkdream.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.sparkdream.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.sparkdream.v1
 * @see proto type: sparkdream.sparkdream.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.sparkdream.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.sparkdream.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContentLicenseRequest(): QueryContentLicenseRequest {
  return {};
}
/**
 * QueryContentLicenseRequest is the request type for Query/ContentLicense.
 * @name QueryContentLicenseRequest
 * @package sparkdream.sparkdream.v1
 * @see proto type: sparkdream.sparkdream.v1.QueryContentLicenseRequest
 */
export const QueryContentLicenseRequest = {
  typeUrl: "/sparkdream.sparkdream.v1.QueryContentLicenseRequest",
  encode(_: QueryContentLicenseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContentLicenseRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContentLicenseRequest();
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
  fromPartial(_: DeepPartial<QueryContentLicenseRequest>): QueryContentLicenseRequest {
    const message = createBaseQueryContentLicenseRequest();
    return message;
  },
  fromAmino(_: QueryContentLicenseRequestAmino): QueryContentLicenseRequest {
    const message = createBaseQueryContentLicenseRequest();
    return message;
  },
  toAmino(_: QueryContentLicenseRequest): QueryContentLicenseRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryContentLicenseRequestAminoMsg): QueryContentLicenseRequest {
    return QueryContentLicenseRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContentLicenseRequestProtoMsg): QueryContentLicenseRequest {
    return QueryContentLicenseRequest.decode(message.value);
  },
  toProto(message: QueryContentLicenseRequest): Uint8Array {
    return QueryContentLicenseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContentLicenseRequest): QueryContentLicenseRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.sparkdream.v1.QueryContentLicenseRequest",
      value: QueryContentLicenseRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContentLicenseResponse(): QueryContentLicenseResponse {
  return {
    license: "",
    name: "",
    url: "",
    dedication: "",
    acceptedFederatedLicenses: []
  };
}
/**
 * QueryContentLicenseResponse is the response type for Query/ContentLicense.
 * @name QueryContentLicenseResponse
 * @package sparkdream.sparkdream.v1
 * @see proto type: sparkdream.sparkdream.v1.QueryContentLicenseResponse
 */
export const QueryContentLicenseResponse = {
  typeUrl: "/sparkdream.sparkdream.v1.QueryContentLicenseResponse",
  encode(message: QueryContentLicenseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.license !== "") {
      writer.uint32(10).string(message.license);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.dedication !== "") {
      writer.uint32(34).string(message.dedication);
    }
    for (const v of message.acceptedFederatedLicenses) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContentLicenseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContentLicenseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.license = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.dedication = reader.string();
          break;
        case 5:
          message.acceptedFederatedLicenses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContentLicenseResponse>): QueryContentLicenseResponse {
    const message = createBaseQueryContentLicenseResponse();
    message.license = object.license ?? "";
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    message.dedication = object.dedication ?? "";
    message.acceptedFederatedLicenses = object.acceptedFederatedLicenses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryContentLicenseResponseAmino): QueryContentLicenseResponse {
    const message = createBaseQueryContentLicenseResponse();
    if (object.license !== undefined && object.license !== null) {
      message.license = object.license;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.dedication !== undefined && object.dedication !== null) {
      message.dedication = object.dedication;
    }
    message.acceptedFederatedLicenses = object.accepted_federated_licenses?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryContentLicenseResponse): QueryContentLicenseResponseAmino {
    const obj: any = {};
    obj.license = message.license === "" ? undefined : message.license;
    obj.name = message.name === "" ? undefined : message.name;
    obj.url = message.url === "" ? undefined : message.url;
    obj.dedication = message.dedication === "" ? undefined : message.dedication;
    if (message.acceptedFederatedLicenses) {
      obj.accepted_federated_licenses = message.acceptedFederatedLicenses.map(e => e);
    } else {
      obj.accepted_federated_licenses = message.acceptedFederatedLicenses;
    }
    return obj;
  },
  fromAminoMsg(object: QueryContentLicenseResponseAminoMsg): QueryContentLicenseResponse {
    return QueryContentLicenseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContentLicenseResponseProtoMsg): QueryContentLicenseResponse {
    return QueryContentLicenseResponse.decode(message.value);
  },
  toProto(message: QueryContentLicenseResponse): Uint8Array {
    return QueryContentLicenseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContentLicenseResponse): QueryContentLicenseResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.sparkdream.v1.QueryContentLicenseResponse",
      value: QueryContentLicenseResponse.encode(message).finish()
    };
  }
};