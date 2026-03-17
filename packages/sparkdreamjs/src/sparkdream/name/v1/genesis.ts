//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { NameRecord, NameRecordAmino } from "./name_record";
import { OwnerInfo, OwnerInfoAmino } from "./owner_info";
import { Dispute, DisputeAmino } from "./dispute";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the name module's genesis state.
 * @name GenesisState
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  nameRecords: NameRecord[];
  ownerInfos: OwnerInfo[];
  disputeMap: Dispute[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.name.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the name module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  name_records?: NameRecordAmino[];
  owner_infos?: OwnerInfoAmino[];
  dispute_map?: DisputeAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.name.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    nameRecords: [],
    ownerInfos: [],
    disputeMap: []
  };
}
/**
 * GenesisState defines the name module's genesis state.
 * @name GenesisState
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.name.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nameRecords) {
      NameRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ownerInfos) {
      OwnerInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.disputeMap) {
      Dispute.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.nameRecords.push(NameRecord.decode(reader, reader.uint32()));
          break;
        case 3:
          message.ownerInfos.push(OwnerInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.disputeMap.push(Dispute.decode(reader, reader.uint32()));
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
    message.nameRecords = object.nameRecords?.map(e => NameRecord.fromPartial(e)) || [];
    message.ownerInfos = object.ownerInfos?.map(e => OwnerInfo.fromPartial(e)) || [];
    message.disputeMap = object.disputeMap?.map(e => Dispute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.nameRecords = object.name_records?.map(e => NameRecord.fromAmino(e)) || [];
    message.ownerInfos = object.owner_infos?.map(e => OwnerInfo.fromAmino(e)) || [];
    message.disputeMap = object.dispute_map?.map(e => Dispute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.nameRecords) {
      obj.name_records = message.nameRecords.map(e => e ? NameRecord.toAmino(e) : undefined);
    } else {
      obj.name_records = message.nameRecords;
    }
    if (message.ownerInfos) {
      obj.owner_infos = message.ownerInfos.map(e => e ? OwnerInfo.toAmino(e) : undefined);
    } else {
      obj.owner_infos = message.ownerInfos;
    }
    if (message.disputeMap) {
      obj.dispute_map = message.disputeMap.map(e => e ? Dispute.toAmino(e) : undefined);
    } else {
      obj.dispute_map = message.disputeMap;
    }
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
      typeUrl: "/sparkdream.name.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};