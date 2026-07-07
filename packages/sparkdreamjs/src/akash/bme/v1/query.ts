//@ts-nocheck
import { LedgerRecordFilters, LedgerRecordFiltersAmino } from "./filters";
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { State, StateAmino, MintStatus, LedgerRecordID, LedgerRecordIDAmino, LedgerRecordStatus, LedgerPendingRecord, LedgerPendingRecordAmino, LedgerRecord, LedgerRecordAmino, LedgerCanceledRecord, LedgerCanceledRecordAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { Decimal } from "@interchainjs/math";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method
 * @name QueryParamsRequest
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/akash.bme.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method
 * @name QueryParamsRequestAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/akash.bme.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method
 * @name QueryParamsResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/akash.bme.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method
 * @name QueryParamsResponseAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/akash.bme.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryVaultStateRequest is the request type for the Query/VaultState RPC method
 * @name QueryVaultStateRequest
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryVaultStateRequest
 */
export interface QueryVaultStateRequest {}
export interface QueryVaultStateRequestProtoMsg {
  typeUrl: "/akash.bme.v1.QueryVaultStateRequest";
  value: Uint8Array;
}
/**
 * QueryVaultStateRequest is the request type for the Query/VaultState RPC method
 * @name QueryVaultStateRequestAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryVaultStateRequest
 */
export interface QueryVaultStateRequestAmino {}
export interface QueryVaultStateRequestAminoMsg {
  type: "/akash.bme.v1.QueryVaultStateRequest";
  value: QueryVaultStateRequestAmino;
}
/**
 * QueryVaultStateResponse is the response type for the Query/VaultState RPC method
 * @name QueryVaultStateResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryVaultStateResponse
 */
export interface QueryVaultStateResponse {
  vaultState: State;
}
export interface QueryVaultStateResponseProtoMsg {
  typeUrl: "/akash.bme.v1.QueryVaultStateResponse";
  value: Uint8Array;
}
/**
 * QueryVaultStateResponse is the response type for the Query/VaultState RPC method
 * @name QueryVaultStateResponseAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryVaultStateResponse
 */
export interface QueryVaultStateResponseAmino {
  vault_state?: StateAmino;
}
export interface QueryVaultStateResponseAminoMsg {
  type: "/akash.bme.v1.QueryVaultStateResponse";
  value: QueryVaultStateResponseAmino;
}
/**
 * QueryStatusRequest is the request type for the circuit breaker status
 * @name QueryStatusRequest
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryStatusRequest
 */
export interface QueryStatusRequest {}
export interface QueryStatusRequestProtoMsg {
  typeUrl: "/akash.bme.v1.QueryStatusRequest";
  value: Uint8Array;
}
/**
 * QueryStatusRequest is the request type for the circuit breaker status
 * @name QueryStatusRequestAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryStatusRequest
 */
export interface QueryStatusRequestAmino {}
export interface QueryStatusRequestAminoMsg {
  type: "/akash.bme.v1.QueryStatusRequest";
  value: QueryStatusRequestAmino;
}
/**
 * QueryMintStatusResponse is the response type for the circuit breaker status
 * @name QueryStatusResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryStatusResponse
 */
export interface QueryStatusResponse {
  /**
   * status is the current circuit breaker status
   */
  status: MintStatus;
  /**
   * collateral_ratio is the current CR
   */
  collateralRatio: string;
  /**
   * warn_threshold is the warning threshold
   */
  warnThreshold: string;
  /**
   * halt_threshold is the halt threshold
   */
  haltThreshold: string;
  /**
   * mints_allowed indicates if new ACT mints are allowed
   */
  mintsAllowed: boolean;
  /**
   * refunds_allowed indicates if ACT refunds are allowed
   */
  refundsAllowed: boolean;
}
export interface QueryStatusResponseProtoMsg {
  typeUrl: "/akash.bme.v1.QueryStatusResponse";
  value: Uint8Array;
}
/**
 * QueryMintStatusResponse is the response type for the circuit breaker status
 * @name QueryStatusResponseAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryStatusResponse
 */
export interface QueryStatusResponseAmino {
  /**
   * status is the current circuit breaker status
   */
  status?: MintStatus;
  /**
   * collateral_ratio is the current CR
   */
  collateral_ratio?: string;
  /**
   * warn_threshold is the warning threshold
   */
  warn_threshold?: string;
  /**
   * halt_threshold is the halt threshold
   */
  halt_threshold?: string;
  /**
   * mints_allowed indicates if new ACT mints are allowed
   */
  mints_allowed?: boolean;
  /**
   * refunds_allowed indicates if ACT refunds are allowed
   */
  refunds_allowed?: boolean;
}
export interface QueryStatusResponseAminoMsg {
  type: "/akash.bme.v1.QueryStatusResponse";
  value: QueryStatusResponseAmino;
}
/**
 * QueryLedgerRecordEntry wraps a ledger record with its ID and status
 * @name QueryLedgerRecordEntry
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryLedgerRecordEntry
 */
export interface QueryLedgerRecordEntry {
  /**
   * id is the unique identifier of the ledger record
   */
  id: LedgerRecordID;
  /**
   * status indicates whether this record is pending or executed
   */
  status: LedgerRecordStatus;
  /**
   * pending_record is set when the record status is pending
   */
  pendingRecord?: LedgerPendingRecord;
  /**
   * executed_record is set when the record status is executed
   */
  executedRecord?: LedgerRecord;
  /**
   * canceled_record is set when the record status is failed
   */
  canceledRecord?: LedgerCanceledRecord;
}
export interface QueryLedgerRecordEntryProtoMsg {
  typeUrl: "/akash.bme.v1.QueryLedgerRecordEntry";
  value: Uint8Array;
}
/**
 * QueryLedgerRecordEntry wraps a ledger record with its ID and status
 * @name QueryLedgerRecordEntryAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryLedgerRecordEntry
 */
export interface QueryLedgerRecordEntryAmino {
  /**
   * id is the unique identifier of the ledger record
   */
  id: LedgerRecordIDAmino;
  /**
   * status indicates whether this record is pending or executed
   */
  status?: LedgerRecordStatus;
  /**
   * pending_record is set when the record status is pending
   */
  pending_record?: LedgerPendingRecordAmino;
  /**
   * executed_record is set when the record status is executed
   */
  executed_record?: LedgerRecordAmino;
  /**
   * canceled_record is set when the record status is failed
   */
  canceled_record?: LedgerCanceledRecordAmino;
}
export interface QueryLedgerRecordEntryAminoMsg {
  type: "/akash.bme.v1.QueryLedgerRecordEntry";
  value: QueryLedgerRecordEntryAmino;
}
/**
 * QueryLedgerRecordsRequest is the request type for the Query/LedgerRecords RPC method
 * @name QueryLedgerRecordsRequest
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryLedgerRecordsRequest
 */
export interface QueryLedgerRecordsRequest {
  /**
   * filters holds the ledger record fields to filter the request
   */
  filters: LedgerRecordFilters;
  /**
   * pagination defines the pagination for the request
   */
  pagination?: PageRequest;
}
export interface QueryLedgerRecordsRequestProtoMsg {
  typeUrl: "/akash.bme.v1.QueryLedgerRecordsRequest";
  value: Uint8Array;
}
/**
 * QueryLedgerRecordsRequest is the request type for the Query/LedgerRecords RPC method
 * @name QueryLedgerRecordsRequestAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryLedgerRecordsRequest
 */
export interface QueryLedgerRecordsRequestAmino {
  /**
   * filters holds the ledger record fields to filter the request
   */
  filters?: LedgerRecordFiltersAmino;
  /**
   * pagination defines the pagination for the request
   */
  pagination?: PageRequestAmino;
}
export interface QueryLedgerRecordsRequestAminoMsg {
  type: "/akash.bme.v1.QueryLedgerRecordsRequest";
  value: QueryLedgerRecordsRequestAmino;
}
/**
 * QueryLedgerRecordsResponse is the response type for the Query/LedgerRecords RPC method
 * @name QueryLedgerRecordsResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryLedgerRecordsResponse
 */
export interface QueryLedgerRecordsResponse {
  /**
   * records is a list of ledger records matching the filters
   */
  records: QueryLedgerRecordEntry[];
  /**
   * pagination contains the information about response pagination
   */
  pagination?: PageResponse;
}
export interface QueryLedgerRecordsResponseProtoMsg {
  typeUrl: "/akash.bme.v1.QueryLedgerRecordsResponse";
  value: Uint8Array;
}
/**
 * QueryLedgerRecordsResponse is the response type for the Query/LedgerRecords RPC method
 * @name QueryLedgerRecordsResponseAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryLedgerRecordsResponse
 */
export interface QueryLedgerRecordsResponseAmino {
  /**
   * records is a list of ledger records matching the filters
   */
  records?: QueryLedgerRecordEntryAmino[];
  /**
   * pagination contains the information about response pagination
   */
  pagination?: PageResponseAmino;
}
export interface QueryLedgerRecordsResponseAminoMsg {
  type: "/akash.bme.v1.QueryLedgerRecordsResponse";
  value: QueryLedgerRecordsResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method
 * @name QueryParamsRequest
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/akash.bme.v1.QueryParamsRequest",
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
      typeUrl: "/akash.bme.v1.QueryParamsRequest",
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
 * QueryParamsResponse is the response type for the Query/Params RPC method
 * @name QueryParamsResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/akash.bme.v1.QueryParamsResponse",
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
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/akash.bme.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVaultStateRequest(): QueryVaultStateRequest {
  return {};
}
/**
 * QueryVaultStateRequest is the request type for the Query/VaultState RPC method
 * @name QueryVaultStateRequest
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryVaultStateRequest
 */
export const QueryVaultStateRequest = {
  typeUrl: "/akash.bme.v1.QueryVaultStateRequest",
  encode(_: QueryVaultStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultStateRequest();
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
  fromPartial(_: DeepPartial<QueryVaultStateRequest>): QueryVaultStateRequest {
    const message = createBaseQueryVaultStateRequest();
    return message;
  },
  fromAmino(_: QueryVaultStateRequestAmino): QueryVaultStateRequest {
    const message = createBaseQueryVaultStateRequest();
    return message;
  },
  toAmino(_: QueryVaultStateRequest): QueryVaultStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryVaultStateRequestAminoMsg): QueryVaultStateRequest {
    return QueryVaultStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultStateRequestProtoMsg): QueryVaultStateRequest {
    return QueryVaultStateRequest.decode(message.value);
  },
  toProto(message: QueryVaultStateRequest): Uint8Array {
    return QueryVaultStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultStateRequest): QueryVaultStateRequestProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.QueryVaultStateRequest",
      value: QueryVaultStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVaultStateResponse(): QueryVaultStateResponse {
  return {
    vaultState: State.fromPartial({})
  };
}
/**
 * QueryVaultStateResponse is the response type for the Query/VaultState RPC method
 * @name QueryVaultStateResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryVaultStateResponse
 */
export const QueryVaultStateResponse = {
  typeUrl: "/akash.bme.v1.QueryVaultStateResponse",
  encode(message: QueryVaultStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vaultState !== undefined) {
      State.encode(message.vaultState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultState = State.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVaultStateResponse>): QueryVaultStateResponse {
    const message = createBaseQueryVaultStateResponse();
    message.vaultState = object.vaultState !== undefined && object.vaultState !== null ? State.fromPartial(object.vaultState) : undefined;
    return message;
  },
  fromAmino(object: QueryVaultStateResponseAmino): QueryVaultStateResponse {
    const message = createBaseQueryVaultStateResponse();
    if (object.vault_state !== undefined && object.vault_state !== null) {
      message.vaultState = State.fromAmino(object.vault_state);
    }
    return message;
  },
  toAmino(message: QueryVaultStateResponse): QueryVaultStateResponseAmino {
    const obj: any = {};
    obj.vault_state = message.vaultState ? State.toAmino(message.vaultState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVaultStateResponseAminoMsg): QueryVaultStateResponse {
    return QueryVaultStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultStateResponseProtoMsg): QueryVaultStateResponse {
    return QueryVaultStateResponse.decode(message.value);
  },
  toProto(message: QueryVaultStateResponse): Uint8Array {
    return QueryVaultStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultStateResponse): QueryVaultStateResponseProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.QueryVaultStateResponse",
      value: QueryVaultStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStatusRequest(): QueryStatusRequest {
  return {};
}
/**
 * QueryStatusRequest is the request type for the circuit breaker status
 * @name QueryStatusRequest
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryStatusRequest
 */
export const QueryStatusRequest = {
  typeUrl: "/akash.bme.v1.QueryStatusRequest",
  encode(_: QueryStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStatusRequest();
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
  fromPartial(_: DeepPartial<QueryStatusRequest>): QueryStatusRequest {
    const message = createBaseQueryStatusRequest();
    return message;
  },
  fromAmino(_: QueryStatusRequestAmino): QueryStatusRequest {
    const message = createBaseQueryStatusRequest();
    return message;
  },
  toAmino(_: QueryStatusRequest): QueryStatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryStatusRequestAminoMsg): QueryStatusRequest {
    return QueryStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStatusRequestProtoMsg): QueryStatusRequest {
    return QueryStatusRequest.decode(message.value);
  },
  toProto(message: QueryStatusRequest): Uint8Array {
    return QueryStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStatusRequest): QueryStatusRequestProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.QueryStatusRequest",
      value: QueryStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStatusResponse(): QueryStatusResponse {
  return {
    status: 0,
    collateralRatio: "",
    warnThreshold: "",
    haltThreshold: "",
    mintsAllowed: false,
    refundsAllowed: false
  };
}
/**
 * QueryMintStatusResponse is the response type for the circuit breaker status
 * @name QueryStatusResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryStatusResponse
 */
export const QueryStatusResponse = {
  typeUrl: "/akash.bme.v1.QueryStatusResponse",
  encode(message: QueryStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.collateralRatio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.collateralRatio, 18).atomics);
    }
    if (message.warnThreshold !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.warnThreshold, 18).atomics);
    }
    if (message.haltThreshold !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.haltThreshold, 18).atomics);
    }
    if (message.mintsAllowed === true) {
      writer.uint32(40).bool(message.mintsAllowed);
    }
    if (message.refundsAllowed === true) {
      writer.uint32(48).bool(message.refundsAllowed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.collateralRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.warnThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.haltThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.mintsAllowed = reader.bool();
          break;
        case 6:
          message.refundsAllowed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryStatusResponse>): QueryStatusResponse {
    const message = createBaseQueryStatusResponse();
    message.status = object.status ?? 0;
    message.collateralRatio = object.collateralRatio ?? "";
    message.warnThreshold = object.warnThreshold ?? "";
    message.haltThreshold = object.haltThreshold ?? "";
    message.mintsAllowed = object.mintsAllowed ?? false;
    message.refundsAllowed = object.refundsAllowed ?? false;
    return message;
  },
  fromAmino(object: QueryStatusResponseAmino): QueryStatusResponse {
    const message = createBaseQueryStatusResponse();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.collateral_ratio !== undefined && object.collateral_ratio !== null) {
      message.collateralRatio = object.collateral_ratio;
    }
    if (object.warn_threshold !== undefined && object.warn_threshold !== null) {
      message.warnThreshold = object.warn_threshold;
    }
    if (object.halt_threshold !== undefined && object.halt_threshold !== null) {
      message.haltThreshold = object.halt_threshold;
    }
    if (object.mints_allowed !== undefined && object.mints_allowed !== null) {
      message.mintsAllowed = object.mints_allowed;
    }
    if (object.refunds_allowed !== undefined && object.refunds_allowed !== null) {
      message.refundsAllowed = object.refunds_allowed;
    }
    return message;
  },
  toAmino(message: QueryStatusResponse): QueryStatusResponseAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.collateral_ratio = message.collateralRatio === "" ? undefined : message.collateralRatio;
    obj.warn_threshold = message.warnThreshold === "" ? undefined : message.warnThreshold;
    obj.halt_threshold = message.haltThreshold === "" ? undefined : message.haltThreshold;
    obj.mints_allowed = message.mintsAllowed === false ? undefined : message.mintsAllowed;
    obj.refunds_allowed = message.refundsAllowed === false ? undefined : message.refundsAllowed;
    return obj;
  },
  fromAminoMsg(object: QueryStatusResponseAminoMsg): QueryStatusResponse {
    return QueryStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStatusResponseProtoMsg): QueryStatusResponse {
    return QueryStatusResponse.decode(message.value);
  },
  toProto(message: QueryStatusResponse): Uint8Array {
    return QueryStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStatusResponse): QueryStatusResponseProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.QueryStatusResponse",
      value: QueryStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLedgerRecordEntry(): QueryLedgerRecordEntry {
  return {
    id: LedgerRecordID.fromPartial({}),
    status: 0,
    pendingRecord: undefined,
    executedRecord: undefined,
    canceledRecord: undefined
  };
}
/**
 * QueryLedgerRecordEntry wraps a ledger record with its ID and status
 * @name QueryLedgerRecordEntry
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryLedgerRecordEntry
 */
export const QueryLedgerRecordEntry = {
  typeUrl: "/akash.bme.v1.QueryLedgerRecordEntry",
  encode(message: QueryLedgerRecordEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LedgerRecordID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.pendingRecord !== undefined) {
      LedgerPendingRecord.encode(message.pendingRecord, writer.uint32(26).fork()).ldelim();
    }
    if (message.executedRecord !== undefined) {
      LedgerRecord.encode(message.executedRecord, writer.uint32(34).fork()).ldelim();
    }
    if (message.canceledRecord !== undefined) {
      LedgerCanceledRecord.encode(message.canceledRecord, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLedgerRecordEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLedgerRecordEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LedgerRecordID.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.pendingRecord = LedgerPendingRecord.decode(reader, reader.uint32());
          break;
        case 4:
          message.executedRecord = LedgerRecord.decode(reader, reader.uint32());
          break;
        case 5:
          message.canceledRecord = LedgerCanceledRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLedgerRecordEntry>): QueryLedgerRecordEntry {
    const message = createBaseQueryLedgerRecordEntry();
    message.id = object.id !== undefined && object.id !== null ? LedgerRecordID.fromPartial(object.id) : undefined;
    message.status = object.status ?? 0;
    message.pendingRecord = object.pendingRecord !== undefined && object.pendingRecord !== null ? LedgerPendingRecord.fromPartial(object.pendingRecord) : undefined;
    message.executedRecord = object.executedRecord !== undefined && object.executedRecord !== null ? LedgerRecord.fromPartial(object.executedRecord) : undefined;
    message.canceledRecord = object.canceledRecord !== undefined && object.canceledRecord !== null ? LedgerCanceledRecord.fromPartial(object.canceledRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryLedgerRecordEntryAmino): QueryLedgerRecordEntry {
    const message = createBaseQueryLedgerRecordEntry();
    if (object.id !== undefined && object.id !== null) {
      message.id = LedgerRecordID.fromAmino(object.id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pending_record !== undefined && object.pending_record !== null) {
      message.pendingRecord = LedgerPendingRecord.fromAmino(object.pending_record);
    }
    if (object.executed_record !== undefined && object.executed_record !== null) {
      message.executedRecord = LedgerRecord.fromAmino(object.executed_record);
    }
    if (object.canceled_record !== undefined && object.canceled_record !== null) {
      message.canceledRecord = LedgerCanceledRecord.fromAmino(object.canceled_record);
    }
    return message;
  },
  toAmino(message: QueryLedgerRecordEntry): QueryLedgerRecordEntryAmino {
    const obj: any = {};
    obj.id = message.id ? LedgerRecordID.toAmino(message.id) : LedgerRecordID.toAmino(LedgerRecordID.fromPartial({}));
    obj.status = message.status === 0 ? undefined : message.status;
    obj.pending_record = message.pendingRecord ? LedgerPendingRecord.toAmino(message.pendingRecord) : undefined;
    obj.executed_record = message.executedRecord ? LedgerRecord.toAmino(message.executedRecord) : undefined;
    obj.canceled_record = message.canceledRecord ? LedgerCanceledRecord.toAmino(message.canceledRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLedgerRecordEntryAminoMsg): QueryLedgerRecordEntry {
    return QueryLedgerRecordEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLedgerRecordEntryProtoMsg): QueryLedgerRecordEntry {
    return QueryLedgerRecordEntry.decode(message.value);
  },
  toProto(message: QueryLedgerRecordEntry): Uint8Array {
    return QueryLedgerRecordEntry.encode(message).finish();
  },
  toProtoMsg(message: QueryLedgerRecordEntry): QueryLedgerRecordEntryProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.QueryLedgerRecordEntry",
      value: QueryLedgerRecordEntry.encode(message).finish()
    };
  }
};
function createBaseQueryLedgerRecordsRequest(): QueryLedgerRecordsRequest {
  return {
    filters: LedgerRecordFilters.fromPartial({}),
    pagination: undefined
  };
}
/**
 * QueryLedgerRecordsRequest is the request type for the Query/LedgerRecords RPC method
 * @name QueryLedgerRecordsRequest
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryLedgerRecordsRequest
 */
export const QueryLedgerRecordsRequest = {
  typeUrl: "/akash.bme.v1.QueryLedgerRecordsRequest",
  encode(message: QueryLedgerRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      LedgerRecordFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLedgerRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLedgerRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = LedgerRecordFilters.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLedgerRecordsRequest>): QueryLedgerRecordsRequest {
    const message = createBaseQueryLedgerRecordsRequest();
    message.filters = object.filters !== undefined && object.filters !== null ? LedgerRecordFilters.fromPartial(object.filters) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLedgerRecordsRequestAmino): QueryLedgerRecordsRequest {
    const message = createBaseQueryLedgerRecordsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = LedgerRecordFilters.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLedgerRecordsRequest): QueryLedgerRecordsRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? LedgerRecordFilters.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLedgerRecordsRequestAminoMsg): QueryLedgerRecordsRequest {
    return QueryLedgerRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLedgerRecordsRequestProtoMsg): QueryLedgerRecordsRequest {
    return QueryLedgerRecordsRequest.decode(message.value);
  },
  toProto(message: QueryLedgerRecordsRequest): Uint8Array {
    return QueryLedgerRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLedgerRecordsRequest): QueryLedgerRecordsRequestProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.QueryLedgerRecordsRequest",
      value: QueryLedgerRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLedgerRecordsResponse(): QueryLedgerRecordsResponse {
  return {
    records: [],
    pagination: undefined
  };
}
/**
 * QueryLedgerRecordsResponse is the response type for the Query/LedgerRecords RPC method
 * @name QueryLedgerRecordsResponse
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.QueryLedgerRecordsResponse
 */
export const QueryLedgerRecordsResponse = {
  typeUrl: "/akash.bme.v1.QueryLedgerRecordsResponse",
  encode(message: QueryLedgerRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      QueryLedgerRecordEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLedgerRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLedgerRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(QueryLedgerRecordEntry.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryLedgerRecordsResponse>): QueryLedgerRecordsResponse {
    const message = createBaseQueryLedgerRecordsResponse();
    message.records = object.records?.map(e => QueryLedgerRecordEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLedgerRecordsResponseAmino): QueryLedgerRecordsResponse {
    const message = createBaseQueryLedgerRecordsResponse();
    message.records = object.records?.map(e => QueryLedgerRecordEntry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLedgerRecordsResponse): QueryLedgerRecordsResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? QueryLedgerRecordEntry.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLedgerRecordsResponseAminoMsg): QueryLedgerRecordsResponse {
    return QueryLedgerRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLedgerRecordsResponseProtoMsg): QueryLedgerRecordsResponse {
    return QueryLedgerRecordsResponse.decode(message.value);
  },
  toProto(message: QueryLedgerRecordsResponse): Uint8Array {
    return QueryLedgerRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLedgerRecordsResponse): QueryLedgerRecordsResponseProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.QueryLedgerRecordsResponse",
      value: QueryLedgerRecordsResponse.encode(message).finish()
    };
  }
};