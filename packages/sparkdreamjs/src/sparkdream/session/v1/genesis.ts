//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Grant, GrantAmino, GrantType } from "./grant";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the session module's genesis state.
 * 
 * Active grants (typically empty at genesis). The secondary indexes
 * (GrantsByGranter, GrantsByGrantee, GrantsByExpiration, etc.) are
 * reconstructed from the grants list on InitGenesis and not exported, so
 * the round-trip stays small and cannot double-count.
 * @name GenesisState
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.GenesisState
 */
export interface GenesisState {
  params: Params;
  /**
   * Active grants. Typically empty at genesis.
   */
  grants: Grant[];
  /**
   * Next grant ID to allocate. Allows export/re-import round-trips to
   * preserve the sequence without colliding with already-exported IDs.
   */
  grantSeq: bigint;
  /**
   * Per-(granter, type) active grant counts. Exported so a round-trip
   * does not have to recompute them by walking the grants list a second
   * time, and so InitGenesis can validate the counter matches the actual
   * active grants.
   */
  activeGrantCounts: ActiveGrantCount[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.session.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the session module's genesis state.
 * 
 * Active grants (typically empty at genesis). The secondary indexes
 * (GrantsByGranter, GrantsByGrantee, GrantsByExpiration, etc.) are
 * reconstructed from the grants list on InitGenesis and not exported, so
 * the round-trip stays small and cannot double-count.
 * @name GenesisStateAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.GenesisState
 */
export interface GenesisStateAmino {
  params: ParamsAmino;
  /**
   * Active grants. Typically empty at genesis.
   */
  grants?: GrantAmino[];
  /**
   * Next grant ID to allocate. Allows export/re-import round-trips to
   * preserve the sequence without colliding with already-exported IDs.
   */
  grant_seq?: string;
  /**
   * Per-(granter, type) active grant counts. Exported so a round-trip
   * does not have to recompute them by walking the grants list a second
   * time, and so InitGenesis can validate the counter matches the actual
   * active grants.
   */
  active_grant_counts?: ActiveGrantCountAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.session.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * ActiveGrantCount carries one (granter, type) -> active count entry for
 * the genesis export round-trip.
 * @name ActiveGrantCount
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.ActiveGrantCount
 */
export interface ActiveGrantCount {
  granter: string;
  type: GrantType;
  count: number;
}
export interface ActiveGrantCountProtoMsg {
  typeUrl: "/sparkdream.session.v1.ActiveGrantCount";
  value: Uint8Array;
}
/**
 * ActiveGrantCount carries one (granter, type) -> active count entry for
 * the genesis export round-trip.
 * @name ActiveGrantCountAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.ActiveGrantCount
 */
export interface ActiveGrantCountAmino {
  granter?: string;
  type?: GrantType;
  count?: number;
}
export interface ActiveGrantCountAminoMsg {
  type: "/sparkdream.session.v1.ActiveGrantCount";
  value: ActiveGrantCountAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    grants: [],
    grantSeq: BigInt(0),
    activeGrantCounts: []
  };
}
/**
 * GenesisState defines the session module's genesis state.
 * 
 * Active grants (typically empty at genesis). The secondary indexes
 * (GrantsByGranter, GrantsByGrantee, GrantsByExpiration, etc.) are
 * reconstructed from the grants list on InitGenesis and not exported, so
 * the round-trip stays small and cannot double-count.
 * @name GenesisState
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.session.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.grantSeq !== BigInt(0)) {
      writer.uint32(24).uint64(message.grantSeq);
    }
    for (const v of message.activeGrantCounts) {
      ActiveGrantCount.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.grants.push(Grant.decode(reader, reader.uint32()));
          break;
        case 3:
          message.grantSeq = reader.uint64();
          break;
        case 4:
          message.activeGrantCounts.push(ActiveGrantCount.decode(reader, reader.uint32()));
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
    message.grants = object.grants?.map(e => Grant.fromPartial(e)) || [];
    message.grantSeq = object.grantSeq !== undefined && object.grantSeq !== null ? BigInt(object.grantSeq.toString()) : BigInt(0);
    message.activeGrantCounts = object.activeGrantCounts?.map(e => ActiveGrantCount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.grants = object.grants?.map(e => Grant.fromAmino(e)) || [];
    if (object.grant_seq !== undefined && object.grant_seq !== null) {
      message.grantSeq = BigInt(object.grant_seq);
    }
    message.activeGrantCounts = object.active_grant_counts?.map(e => ActiveGrantCount.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? Grant.toAmino(e) : undefined);
    } else {
      obj.grants = message.grants;
    }
    obj.grant_seq = message.grantSeq !== BigInt(0) ? message.grantSeq?.toString() : undefined;
    if (message.activeGrantCounts) {
      obj.active_grant_counts = message.activeGrantCounts.map(e => e ? ActiveGrantCount.toAmino(e) : undefined);
    } else {
      obj.active_grant_counts = message.activeGrantCounts;
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
      typeUrl: "/sparkdream.session.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseActiveGrantCount(): ActiveGrantCount {
  return {
    granter: "",
    type: 0,
    count: 0
  };
}
/**
 * ActiveGrantCount carries one (granter, type) -> active count entry for
 * the genesis export round-trip.
 * @name ActiveGrantCount
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.ActiveGrantCount
 */
export const ActiveGrantCount = {
  typeUrl: "/sparkdream.session.v1.ActiveGrantCount",
  encode(message: ActiveGrantCount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGrantCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGrantCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ActiveGrantCount>): ActiveGrantCount {
    const message = createBaseActiveGrantCount();
    message.granter = object.granter ?? "";
    message.type = object.type ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
  fromAmino(object: ActiveGrantCountAmino): ActiveGrantCount {
    const message = createBaseActiveGrantCount();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    return message;
  },
  toAmino(message: ActiveGrantCount): ActiveGrantCountAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.count = message.count === 0 ? undefined : message.count;
    return obj;
  },
  fromAminoMsg(object: ActiveGrantCountAminoMsg): ActiveGrantCount {
    return ActiveGrantCount.fromAmino(object.value);
  },
  fromProtoMsg(message: ActiveGrantCountProtoMsg): ActiveGrantCount {
    return ActiveGrantCount.decode(message.value);
  },
  toProto(message: ActiveGrantCount): Uint8Array {
    return ActiveGrantCount.encode(message).finish();
  },
  toProtoMsg(message: ActiveGrantCount): ActiveGrantCountProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.ActiveGrantCount",
      value: ActiveGrantCount.encode(message).finish()
    };
  }
};