//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * LedgerRecordFilters defines filters used to filter ledger records
 * @name LedgerRecordFilters
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerRecordFilters
 */
export interface LedgerRecordFilters {
  /**
   * source is the account address of the user who initiated the burn/mint
   */
  source: string;
  /**
   * denom filters by the burn denomination
   */
  denom: string;
  /**
   * to_denom filters by the mint denomination
   */
  toDenom: string;
  /**
   * status filters by record status (pending, executed or failed).
   * Uses the string representation of LedgerRecordStatus enum values.
   * If empty, returns both pending and executed records.
   */
  status: string;
}
export interface LedgerRecordFiltersProtoMsg {
  typeUrl: "/akash.bme.v1.LedgerRecordFilters";
  value: Uint8Array;
}
/**
 * LedgerRecordFilters defines filters used to filter ledger records
 * @name LedgerRecordFiltersAmino
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerRecordFilters
 */
export interface LedgerRecordFiltersAmino {
  /**
   * source is the account address of the user who initiated the burn/mint
   */
  source: string;
  /**
   * denom filters by the burn denomination
   */
  denom: string;
  /**
   * to_denom filters by the mint denomination
   */
  to_denom: string;
  /**
   * status filters by record status (pending, executed or failed).
   * Uses the string representation of LedgerRecordStatus enum values.
   * If empty, returns both pending and executed records.
   */
  status: string;
}
export interface LedgerRecordFiltersAminoMsg {
  type: "/akash.bme.v1.LedgerRecordFilters";
  value: LedgerRecordFiltersAmino;
}
function createBaseLedgerRecordFilters(): LedgerRecordFilters {
  return {
    source: "",
    denom: "",
    toDenom: "",
    status: ""
  };
}
/**
 * LedgerRecordFilters defines filters used to filter ledger records
 * @name LedgerRecordFilters
 * @package akash.bme.v1
 * @see proto type: akash.bme.v1.LedgerRecordFilters
 */
export const LedgerRecordFilters = {
  typeUrl: "/akash.bme.v1.LedgerRecordFilters",
  encode(message: LedgerRecordFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.toDenom !== "") {
      writer.uint32(26).string(message.toDenom);
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LedgerRecordFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerRecordFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.toDenom = reader.string();
          break;
        case 4:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LedgerRecordFilters>): LedgerRecordFilters {
    const message = createBaseLedgerRecordFilters();
    message.source = object.source ?? "";
    message.denom = object.denom ?? "";
    message.toDenom = object.toDenom ?? "";
    message.status = object.status ?? "";
    return message;
  },
  fromAmino(object: LedgerRecordFiltersAmino): LedgerRecordFilters {
    const message = createBaseLedgerRecordFilters();
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.to_denom !== undefined && object.to_denom !== null) {
      message.toDenom = object.to_denom;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: LedgerRecordFilters): LedgerRecordFiltersAmino {
    const obj: any = {};
    obj.source = message.source ?? "";
    obj.denom = message.denom ?? "";
    obj.to_denom = message.toDenom ?? "";
    obj.status = message.status ?? "";
    return obj;
  },
  fromAminoMsg(object: LedgerRecordFiltersAminoMsg): LedgerRecordFilters {
    return LedgerRecordFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: LedgerRecordFiltersProtoMsg): LedgerRecordFilters {
    return LedgerRecordFilters.decode(message.value);
  },
  toProto(message: LedgerRecordFilters): Uint8Array {
    return LedgerRecordFilters.encode(message).finish();
  },
  toProtoMsg(message: LedgerRecordFilters): LedgerRecordFiltersProtoMsg {
    return {
      typeUrl: "/akash.bme.v1.LedgerRecordFilters",
      value: LedgerRecordFilters.encode(message).finish()
    };
  }
};