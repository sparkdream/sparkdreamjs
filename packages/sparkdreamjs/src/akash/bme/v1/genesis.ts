//@ts-nocheck
import { LedgerRecordID, LedgerRecordIDAmino, LedgerRecord, LedgerRecordAmino, LedgerPendingRecord, LedgerPendingRecordAmino } from "./types";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisLedgerRecord
 * @name GenesisLedgerRecord
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisLedgerRecord
 */
export interface GenesisLedgerRecord {
  id: LedgerRecordID;
  record: LedgerRecord;
}
export interface GenesisLedgerRecordProtoMsg {
  typeUrl: "/akash.bme.v1.GenesisLedgerRecord";
  value: Uint8Array;
}
/**
 * GenesisLedgerRecord
 * @name GenesisLedgerRecordAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisLedgerRecord
 */
export interface GenesisLedgerRecordAmino {
  id: LedgerRecordIDAmino;
  record: LedgerRecordAmino;
}
export interface GenesisLedgerRecordAminoMsg {
  type: "/akash.bme.v1.GenesisLedgerRecord";
  value: GenesisLedgerRecordAmino;
}
/**
 * GenesisLedgerPendingRecord
 * @name GenesisLedgerPendingRecord
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisLedgerPendingRecord
 */
export interface GenesisLedgerPendingRecord {
  id: LedgerRecordID;
  record: LedgerPendingRecord;
}
export interface GenesisLedgerPendingRecordProtoMsg {
  typeUrl: "/akash.bme.v1.GenesisLedgerPendingRecord";
  value: Uint8Array;
}
/**
 * GenesisLedgerPendingRecord
 * @name GenesisLedgerPendingRecordAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisLedgerPendingRecord
 */
export interface GenesisLedgerPendingRecordAmino {
  id: LedgerRecordIDAmino;
  record: LedgerPendingRecordAmino;
}
export interface GenesisLedgerPendingRecordAminoMsg {
  type: "/akash.bme.v1.GenesisLedgerPendingRecord";
  value: GenesisLedgerPendingRecordAmino;
}
/**
 * GenesisLedgerState
 * @name GenesisLedgerState
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisLedgerState
 */
export interface GenesisLedgerState {
  records: GenesisLedgerRecord[];
  pendingRecords: GenesisLedgerPendingRecord[];
}
export interface GenesisLedgerStateProtoMsg {
  typeUrl: "/akash.bme.v1.GenesisLedgerState";
  value: Uint8Array;
}
/**
 * GenesisLedgerState
 * @name GenesisLedgerStateAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisLedgerState
 */
export interface GenesisLedgerStateAmino {
  records: GenesisLedgerRecordAmino[];
  pending_records: GenesisLedgerPendingRecordAmino[];
}
export interface GenesisLedgerStateAminoMsg {
  type: "/akash.bme.v1.GenesisLedgerState";
  value: GenesisLedgerStateAmino;
}
/**
 * GenesisVaultState
 * @name GenesisVaultState
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisVaultState
 */
export interface GenesisVaultState {
  /**
   * burned is the cumulative burn for tracked tokens
   */
  totalBurned: Coin[];
  /**
   * minted is the cumulative mint back for tracked tokens
   */
  totalMinted: Coin[];
  /**
   * remint_credits tracks available credits for reminting tokens
   * (e.g., from previous burns that can be reminted without additional collateral)
   */
  remintCredits: Coin[];
}
export interface GenesisVaultStateProtoMsg {
  typeUrl: "/akash.bme.v1.GenesisVaultState";
  value: Uint8Array;
}
/**
 * GenesisVaultState
 * @name GenesisVaultStateAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisVaultState
 */
export interface GenesisVaultStateAmino {
  /**
   * burned is the cumulative burn for tracked tokens
   */
  total_burned?: CoinAmino[];
  /**
   * minted is the cumulative mint back for tracked tokens
   */
  total_minted?: CoinAmino[];
  /**
   * remint_credits tracks available credits for reminting tokens
   * (e.g., from previous burns that can be reminted without additional collateral)
   */
  remint_credits?: CoinAmino[];
}
export interface GenesisVaultStateAminoMsg {
  type: "/akash.bme.v1.GenesisVaultState";
  value: GenesisVaultStateAmino;
}
/**
 * GenesisState defines the BME module's genesis state
 * @name GenesisState
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines the module parameters
   */
  params: Params;
  /**
   * state is the initial vault state
   */
  state: GenesisVaultState;
  ledger?: GenesisLedgerState;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.bme.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the BME module's genesis state
 * @name GenesisStateAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines the module parameters
   */
  params?: ParamsAmino;
  /**
   * state is the initial vault state
   */
  state?: GenesisVaultStateAmino;
  ledger?: GenesisLedgerStateAmino;
}
export interface GenesisStateAminoMsg {
  type: "/akash.bme.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisLedgerRecord(): GenesisLedgerRecord {
  return {
    id: LedgerRecordID.fromPartial({}),
    record: LedgerRecord.fromPartial({})
  };
}
/**
 * GenesisLedgerRecord
 * @name GenesisLedgerRecord
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisLedgerRecord
 */
export const GenesisLedgerRecord = {
  typeUrl: "/akash.bme.v1.GenesisLedgerRecord",
  encode(message: GenesisLedgerRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LedgerRecordID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.record !== undefined) {
      LedgerRecord.encode(message.record, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisLedgerRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisLedgerRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LedgerRecordID.decode(reader, reader.uint32());
          break;
        case 2:
          message.record = LedgerRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisLedgerRecord>): GenesisLedgerRecord {
    const message = createBaseGenesisLedgerRecord();
    message.id = object.id !== undefined && object.id !== null ? LedgerRecordID.fromPartial(object.id) : undefined;
    message.record = object.record !== undefined && object.record !== null ? LedgerRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: GenesisLedgerRecordAmino): GenesisLedgerRecord {
    const message = createBaseGenesisLedgerRecord();
    if (object.id !== undefined && object.id !== null) {
      message.id = LedgerRecordID.fromAmino(object.id);
    }
    if (object.record !== undefined && object.record !== null) {
      message.record = LedgerRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: GenesisLedgerRecord): GenesisLedgerRecordAmino {
    const obj: any = {};
    obj.id = message.id ? LedgerRecordID.toAmino(message.id) : LedgerRecordID.toAmino(LedgerRecordID.fromPartial({}));
    obj.record = message.record ? LedgerRecord.toAmino(message.record) : LedgerRecord.toAmino(LedgerRecord.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: GenesisLedgerRecordAminoMsg): GenesisLedgerRecord {
    return GenesisLedgerRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisLedgerRecordProtoMsg): GenesisLedgerRecord {
    return GenesisLedgerRecord.decode(message.value);
  },
  toProto(message: GenesisLedgerRecord): Uint8Array {
    return GenesisLedgerRecord.encode(message).finish();
  },
  toProtoMsg(message: GenesisLedgerRecord): GenesisLedgerRecordProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.GenesisLedgerRecord",
      value: GenesisLedgerRecord.encode(message).finish()
    };
  }
};
function createBaseGenesisLedgerPendingRecord(): GenesisLedgerPendingRecord {
  return {
    id: LedgerRecordID.fromPartial({}),
    record: LedgerPendingRecord.fromPartial({})
  };
}
/**
 * GenesisLedgerPendingRecord
 * @name GenesisLedgerPendingRecord
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisLedgerPendingRecord
 */
export const GenesisLedgerPendingRecord = {
  typeUrl: "/akash.bme.v1.GenesisLedgerPendingRecord",
  encode(message: GenesisLedgerPendingRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      LedgerRecordID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.record !== undefined) {
      LedgerPendingRecord.encode(message.record, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisLedgerPendingRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisLedgerPendingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LedgerRecordID.decode(reader, reader.uint32());
          break;
        case 2:
          message.record = LedgerPendingRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisLedgerPendingRecord>): GenesisLedgerPendingRecord {
    const message = createBaseGenesisLedgerPendingRecord();
    message.id = object.id !== undefined && object.id !== null ? LedgerRecordID.fromPartial(object.id) : undefined;
    message.record = object.record !== undefined && object.record !== null ? LedgerPendingRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: GenesisLedgerPendingRecordAmino): GenesisLedgerPendingRecord {
    const message = createBaseGenesisLedgerPendingRecord();
    if (object.id !== undefined && object.id !== null) {
      message.id = LedgerRecordID.fromAmino(object.id);
    }
    if (object.record !== undefined && object.record !== null) {
      message.record = LedgerPendingRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: GenesisLedgerPendingRecord): GenesisLedgerPendingRecordAmino {
    const obj: any = {};
    obj.id = message.id ? LedgerRecordID.toAmino(message.id) : LedgerRecordID.toAmino(LedgerRecordID.fromPartial({}));
    obj.record = message.record ? LedgerPendingRecord.toAmino(message.record) : LedgerPendingRecord.toAmino(LedgerPendingRecord.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: GenesisLedgerPendingRecordAminoMsg): GenesisLedgerPendingRecord {
    return GenesisLedgerPendingRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisLedgerPendingRecordProtoMsg): GenesisLedgerPendingRecord {
    return GenesisLedgerPendingRecord.decode(message.value);
  },
  toProto(message: GenesisLedgerPendingRecord): Uint8Array {
    return GenesisLedgerPendingRecord.encode(message).finish();
  },
  toProtoMsg(message: GenesisLedgerPendingRecord): GenesisLedgerPendingRecordProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.GenesisLedgerPendingRecord",
      value: GenesisLedgerPendingRecord.encode(message).finish()
    };
  }
};
function createBaseGenesisLedgerState(): GenesisLedgerState {
  return {
    records: [],
    pendingRecords: []
  };
}
/**
 * GenesisLedgerState
 * @name GenesisLedgerState
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisLedgerState
 */
export const GenesisLedgerState = {
  typeUrl: "/akash.bme.v1.GenesisLedgerState",
  encode(message: GenesisLedgerState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      GenesisLedgerRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pendingRecords) {
      GenesisLedgerPendingRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisLedgerState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisLedgerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(GenesisLedgerRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pendingRecords.push(GenesisLedgerPendingRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisLedgerState>): GenesisLedgerState {
    const message = createBaseGenesisLedgerState();
    message.records = object.records?.map(e => GenesisLedgerRecord.fromPartial(e)) || [];
    message.pendingRecords = object.pendingRecords?.map(e => GenesisLedgerPendingRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisLedgerStateAmino): GenesisLedgerState {
    const message = createBaseGenesisLedgerState();
    message.records = object.records?.map(e => GenesisLedgerRecord.fromAmino(e)) || [];
    message.pendingRecords = object.pending_records?.map(e => GenesisLedgerPendingRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisLedgerState): GenesisLedgerStateAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? GenesisLedgerRecord.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    if (message.pendingRecords) {
      obj.pending_records = message.pendingRecords.map(e => e ? GenesisLedgerPendingRecord.toAmino(e) : undefined);
    } else {
      obj.pending_records = message.pendingRecords;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisLedgerStateAminoMsg): GenesisLedgerState {
    return GenesisLedgerState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisLedgerStateProtoMsg): GenesisLedgerState {
    return GenesisLedgerState.decode(message.value);
  },
  toProto(message: GenesisLedgerState): Uint8Array {
    return GenesisLedgerState.encode(message).finish();
  },
  toProtoMsg(message: GenesisLedgerState): GenesisLedgerStateProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.GenesisLedgerState",
      value: GenesisLedgerState.encode(message).finish()
    };
  }
};
function createBaseGenesisVaultState(): GenesisVaultState {
  return {
    totalBurned: [],
    totalMinted: [],
    remintCredits: []
  };
}
/**
 * GenesisVaultState
 * @name GenesisVaultState
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisVaultState
 */
export const GenesisVaultState = {
  typeUrl: "/akash.bme.v1.GenesisVaultState",
  encode(message: GenesisVaultState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.totalBurned) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalMinted) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.remintCredits) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisVaultState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisVaultState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBurned.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalMinted.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.remintCredits.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisVaultState>): GenesisVaultState {
    const message = createBaseGenesisVaultState();
    message.totalBurned = object.totalBurned?.map(e => Coin.fromPartial(e)) || [];
    message.totalMinted = object.totalMinted?.map(e => Coin.fromPartial(e)) || [];
    message.remintCredits = object.remintCredits?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisVaultStateAmino): GenesisVaultState {
    const message = createBaseGenesisVaultState();
    message.totalBurned = object.total_burned?.map(e => Coin.fromAmino(e)) || [];
    message.totalMinted = object.total_minted?.map(e => Coin.fromAmino(e)) || [];
    message.remintCredits = object.remint_credits?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisVaultState): GenesisVaultStateAmino {
    const obj: any = {};
    if (message.totalBurned) {
      obj.total_burned = message.totalBurned.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_burned = message.totalBurned;
    }
    if (message.totalMinted) {
      obj.total_minted = message.totalMinted.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_minted = message.totalMinted;
    }
    if (message.remintCredits) {
      obj.remint_credits = message.remintCredits.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.remint_credits = message.remintCredits;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisVaultStateAminoMsg): GenesisVaultState {
    return GenesisVaultState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisVaultStateProtoMsg): GenesisVaultState {
    return GenesisVaultState.decode(message.value);
  },
  toProto(message: GenesisVaultState): Uint8Array {
    return GenesisVaultState.encode(message).finish();
  },
  toProtoMsg(message: GenesisVaultState): GenesisVaultStateProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.GenesisVaultState",
      value: GenesisVaultState.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    state: GenesisVaultState.fromPartial({}),
    ledger: undefined
  };
}
/**
 * GenesisState defines the BME module's genesis state
 * @name GenesisState
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/akash.bme.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      GenesisVaultState.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    if (message.ledger !== undefined) {
      GenesisLedgerState.encode(message.ledger, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = GenesisVaultState.decode(reader, reader.uint32());
          break;
        case 3:
          message.ledger = GenesisLedgerState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.state = object.state !== undefined && object.state !== null ? GenesisVaultState.fromPartial(object.state) : undefined;
    message.ledger = object.ledger !== undefined && object.ledger !== null ? GenesisLedgerState.fromPartial(object.ledger) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = GenesisVaultState.fromAmino(object.state);
    }
    if (object.ledger !== undefined && object.ledger !== null) {
      message.ledger = GenesisLedgerState.fromAmino(object.ledger);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.state = message.state ? GenesisVaultState.toAmino(message.state) : undefined;
    obj.ledger = message.ledger ? GenesisLedgerState.toAmino(message.ledger) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};