//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Backend, BackendAmino, ApprovedOperator, ApprovedOperatorAmino, ApprovedScanner, ApprovedScannerAmino, Request, RequestAmino, RemovedHash, RemovedHashAmino, CounterEntry, CounterEntryAmino } from "./storage";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the storage module's genesis state. Indexes and
 * timers are rebuilt from the requests on import.
 * @name GenesisState
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  backends: Backend[];
  approvedOperators: ApprovedOperator[];
  approvedScanners: ApprovedScanner[];
  requests: Request[];
  removedHashes: RemovedHash[];
  counters: CounterEntry[];
  /**
   * request_seq is the last request id handed out.
   */
  requestSeq: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.storage.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the storage module's genesis state. Indexes and
 * timers are rebuilt from the requests on import.
 * @name GenesisStateAmino
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  backends?: BackendAmino[];
  approved_operators?: ApprovedOperatorAmino[];
  approved_scanners?: ApprovedScannerAmino[];
  requests?: RequestAmino[];
  removed_hashes?: RemovedHashAmino[];
  counters?: CounterEntryAmino[];
  /**
   * request_seq is the last request id handed out.
   */
  request_seq?: string;
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.storage.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    backends: [],
    approvedOperators: [],
    approvedScanners: [],
    requests: [],
    removedHashes: [],
    counters: [],
    requestSeq: BigInt(0)
  };
}
/**
 * GenesisState defines the storage module's genesis state. Indexes and
 * timers are rebuilt from the requests on import.
 * @name GenesisState
 * @package sparkdream.storage.v1
 * @see proto type: sparkdream.storage.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.storage.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.backends) {
      Backend.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.approvedOperators) {
      ApprovedOperator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.approvedScanners) {
      ApprovedScanner.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.requests) {
      Request.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.removedHashes) {
      RemovedHash.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.counters) {
      CounterEntry.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.requestSeq !== BigInt(0)) {
      writer.uint32(64).uint64(message.requestSeq);
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
          message.backends.push(Backend.decode(reader, reader.uint32()));
          break;
        case 3:
          message.approvedOperators.push(ApprovedOperator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.approvedScanners.push(ApprovedScanner.decode(reader, reader.uint32()));
          break;
        case 5:
          message.requests.push(Request.decode(reader, reader.uint32()));
          break;
        case 6:
          message.removedHashes.push(RemovedHash.decode(reader, reader.uint32()));
          break;
        case 7:
          message.counters.push(CounterEntry.decode(reader, reader.uint32()));
          break;
        case 8:
          message.requestSeq = reader.uint64();
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
    message.backends = object.backends?.map(e => Backend.fromPartial(e)) || [];
    message.approvedOperators = object.approvedOperators?.map(e => ApprovedOperator.fromPartial(e)) || [];
    message.approvedScanners = object.approvedScanners?.map(e => ApprovedScanner.fromPartial(e)) || [];
    message.requests = object.requests?.map(e => Request.fromPartial(e)) || [];
    message.removedHashes = object.removedHashes?.map(e => RemovedHash.fromPartial(e)) || [];
    message.counters = object.counters?.map(e => CounterEntry.fromPartial(e)) || [];
    message.requestSeq = object.requestSeq !== undefined && object.requestSeq !== null ? BigInt(object.requestSeq.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.backends = object.backends?.map(e => Backend.fromAmino(e)) || [];
    message.approvedOperators = object.approved_operators?.map(e => ApprovedOperator.fromAmino(e)) || [];
    message.approvedScanners = object.approved_scanners?.map(e => ApprovedScanner.fromAmino(e)) || [];
    message.requests = object.requests?.map(e => Request.fromAmino(e)) || [];
    message.removedHashes = object.removed_hashes?.map(e => RemovedHash.fromAmino(e)) || [];
    message.counters = object.counters?.map(e => CounterEntry.fromAmino(e)) || [];
    if (object.request_seq !== undefined && object.request_seq !== null) {
      message.requestSeq = BigInt(object.request_seq);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.backends) {
      obj.backends = message.backends.map(e => e ? Backend.toAmino(e) : undefined);
    } else {
      obj.backends = message.backends;
    }
    if (message.approvedOperators) {
      obj.approved_operators = message.approvedOperators.map(e => e ? ApprovedOperator.toAmino(e) : undefined);
    } else {
      obj.approved_operators = message.approvedOperators;
    }
    if (message.approvedScanners) {
      obj.approved_scanners = message.approvedScanners.map(e => e ? ApprovedScanner.toAmino(e) : undefined);
    } else {
      obj.approved_scanners = message.approvedScanners;
    }
    if (message.requests) {
      obj.requests = message.requests.map(e => e ? Request.toAmino(e) : undefined);
    } else {
      obj.requests = message.requests;
    }
    if (message.removedHashes) {
      obj.removed_hashes = message.removedHashes.map(e => e ? RemovedHash.toAmino(e) : undefined);
    } else {
      obj.removed_hashes = message.removedHashes;
    }
    if (message.counters) {
      obj.counters = message.counters.map(e => e ? CounterEntry.toAmino(e) : undefined);
    } else {
      obj.counters = message.counters;
    }
    obj.request_seq = message.requestSeq !== BigInt(0) ? message.requestSeq?.toString() : undefined;
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
      typeUrl: "/sparkdream.storage.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};