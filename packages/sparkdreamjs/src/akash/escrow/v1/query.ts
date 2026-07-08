//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountAmino } from "../types/v1/account";
import { Payment, PaymentAmino } from "../types/v1/payment";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryAccountRequest is request type for the Query/Account RPC method.
 * @name QueryAccountsRequest
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.QueryAccountsRequest
 */
export interface QueryAccountsRequest {
  /**
   * State represents the current state of an Account.
   */
  state: string;
  /**
   * Scope holds the scope of the account.
   */
  xid: string;
  /**
   * Pagination is used to paginate the request.
   */
  pagination?: PageRequest;
}
export interface QueryAccountsRequestProtoMsg {
  typeUrl: "/akash.escrow.v1.QueryAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryAccountRequest is request type for the Query/Account RPC method.
 * @name QueryAccountsRequestAmino
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.QueryAccountsRequest
 */
export interface QueryAccountsRequestAmino {
  /**
   * State represents the current state of an Account.
   */
  state?: string;
  /**
   * Scope holds the scope of the account.
   */
  xid: string;
  /**
   * Pagination is used to paginate the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryAccountsRequestAminoMsg {
  type: "/akash.escrow.v1.QueryAccountsRequest";
  value: QueryAccountsRequestAmino;
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryAccountsResponse
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.QueryAccountsResponse
 */
export interface QueryAccountsResponse {
  /**
   * Accounts is a list of Account.
   */
  accounts: Account[];
  /**
   * Pagination contains the information about response pagination.
   */
  pagination?: PageResponse;
}
export interface QueryAccountsResponseProtoMsg {
  typeUrl: "/akash.escrow.v1.QueryAccountsResponse";
  value: Uint8Array;
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryAccountsResponseAmino
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.QueryAccountsResponse
 */
export interface QueryAccountsResponseAmino {
  /**
   * Accounts is a list of Account.
   */
  accounts?: AccountAmino[];
  /**
   * Pagination contains the information about response pagination.
   */
  pagination?: PageResponseAmino;
}
export interface QueryAccountsResponseAminoMsg {
  type: "/akash.escrow.v1.QueryAccountsResponse";
  value: QueryAccountsResponseAmino;
}
/**
 * QueryPaymentRequest is request type for the Query/Payment RPC method
 * @name QueryPaymentsRequest
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.QueryPaymentsRequest
 */
export interface QueryPaymentsRequest {
  /**
   * State represents the current state of a Payment.
   */
  state: string;
  xid: string;
  /**
   * Pagination is used to paginate the request.
   */
  pagination?: PageRequest;
}
export interface QueryPaymentsRequestProtoMsg {
  typeUrl: "/akash.escrow.v1.QueryPaymentsRequest";
  value: Uint8Array;
}
/**
 * QueryPaymentRequest is request type for the Query/Payment RPC method
 * @name QueryPaymentsRequestAmino
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.QueryPaymentsRequest
 */
export interface QueryPaymentsRequestAmino {
  /**
   * State represents the current state of a Payment.
   */
  state?: string;
  xid: string;
  /**
   * Pagination is used to paginate the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryPaymentsRequestAminoMsg {
  type: "/akash.escrow.v1.QueryPaymentsRequest";
  value: QueryPaymentsRequestAmino;
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryPaymentsResponse
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.QueryPaymentsResponse
 */
export interface QueryPaymentsResponse {
  /**
   * Payments is a list of payments.
   */
  payments: Payment[];
  /**
   * Pagination contains the information about response pagination.
   */
  pagination?: PageResponse;
}
export interface QueryPaymentsResponseProtoMsg {
  typeUrl: "/akash.escrow.v1.QueryPaymentsResponse";
  value: Uint8Array;
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryPaymentsResponseAmino
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.QueryPaymentsResponse
 */
export interface QueryPaymentsResponseAmino {
  /**
   * Payments is a list of payments.
   */
  payments?: PaymentAmino[];
  /**
   * Pagination contains the information about response pagination.
   */
  pagination?: PageResponseAmino;
}
export interface QueryPaymentsResponseAminoMsg {
  type: "/akash.escrow.v1.QueryPaymentsResponse";
  value: QueryPaymentsResponseAmino;
}
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    state: "",
    xid: "",
    pagination: undefined
  };
}
/**
 * QueryAccountRequest is request type for the Query/Account RPC method.
 * @name QueryAccountsRequest
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.QueryAccountsRequest
 */
export const QueryAccountsRequest = {
  typeUrl: "/akash.escrow.v1.QueryAccountsRequest",
  encode(message: QueryAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== "") {
      writer.uint32(10).string(message.state);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.string();
          break;
        case 2:
          message.xid = reader.string();
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.state = object.state ?? "";
    message.xid = object.xid ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.xid !== undefined && object.xid !== null) {
      message.xid = object.xid;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino {
    const obj: any = {};
    obj.state = message.state === "" ? undefined : message.state;
    obj.xid = message.xid ?? "";
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.decode(message.value);
  },
  toProto(message: QueryAccountsRequest): Uint8Array {
    return QueryAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1.QueryAccountsRequest",
      value: QueryAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryAccountsResponse
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.QueryAccountsResponse
 */
export const QueryAccountsResponse = {
  typeUrl: "/akash.escrow.v1.QueryAccountsResponse",
  encode(message: QueryAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
    } else {
      obj.accounts = message.accounts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.decode(message.value);
  },
  toProto(message: QueryAccountsResponse): Uint8Array {
    return QueryAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1.QueryAccountsResponse",
      value: QueryAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentsRequest(): QueryPaymentsRequest {
  return {
    state: "",
    xid: "",
    pagination: undefined
  };
}
/**
 * QueryPaymentRequest is request type for the Query/Payment RPC method
 * @name QueryPaymentsRequest
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.QueryPaymentsRequest
 */
export const QueryPaymentsRequest = {
  typeUrl: "/akash.escrow.v1.QueryPaymentsRequest",
  encode(message: QueryPaymentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== "") {
      writer.uint32(10).string(message.state);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.string();
          break;
        case 2:
          message.xid = reader.string();
          break;
        case 6:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPaymentsRequest>): QueryPaymentsRequest {
    const message = createBaseQueryPaymentsRequest();
    message.state = object.state ?? "";
    message.xid = object.xid ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPaymentsRequestAmino): QueryPaymentsRequest {
    const message = createBaseQueryPaymentsRequest();
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.xid !== undefined && object.xid !== null) {
      message.xid = object.xid;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPaymentsRequest): QueryPaymentsRequestAmino {
    const obj: any = {};
    obj.state = message.state === "" ? undefined : message.state;
    obj.xid = message.xid ?? "";
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentsRequestAminoMsg): QueryPaymentsRequest {
    return QueryPaymentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentsRequestProtoMsg): QueryPaymentsRequest {
    return QueryPaymentsRequest.decode(message.value);
  },
  toProto(message: QueryPaymentsRequest): Uint8Array {
    return QueryPaymentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentsRequest): QueryPaymentsRequestProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1.QueryPaymentsRequest",
      value: QueryPaymentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentsResponse(): QueryPaymentsResponse {
  return {
    payments: [],
    pagination: undefined
  };
}
/**
 * QueryProvidersResponse is response type for the Query/Providers RPC method
 * @name QueryPaymentsResponse
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.QueryPaymentsResponse
 */
export const QueryPaymentsResponse = {
  typeUrl: "/akash.escrow.v1.QueryPaymentsResponse",
  encode(message: QueryPaymentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.payments) {
      Payment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payments.push(Payment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPaymentsResponse>): QueryPaymentsResponse {
    const message = createBaseQueryPaymentsResponse();
    message.payments = object.payments?.map(e => Payment.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPaymentsResponseAmino): QueryPaymentsResponse {
    const message = createBaseQueryPaymentsResponse();
    message.payments = object.payments?.map(e => Payment.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPaymentsResponse): QueryPaymentsResponseAmino {
    const obj: any = {};
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? Payment.toAmino(e) : undefined);
    } else {
      obj.payments = message.payments;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentsResponseAminoMsg): QueryPaymentsResponse {
    return QueryPaymentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentsResponseProtoMsg): QueryPaymentsResponse {
    return QueryPaymentsResponse.decode(message.value);
  },
  toProto(message: QueryPaymentsResponse): Uint8Array {
    return QueryPaymentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentsResponse): QueryPaymentsResponseProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1.QueryPaymentsResponse",
      value: QueryPaymentsResponse.encode(message).finish()
    };
  }
};