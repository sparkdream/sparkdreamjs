//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Grant, GrantAmino, GrantType } from "./grant";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
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
  /**
   * SPARK gas deposits escrowed in the session module account for
   * SCHEDULED_ONESHOT grants. Exported so an export/import round-trip never
   * strands escrow with no claimant.
   */
  oneshotGasDeposits: OneshotDeposit[];
  /**
   * Per-UTC-day spend buckets backing RECURRING_PULL max_per_epoch_uspark.
   * Exported so a round-trip does not reset the per-day throttle.
   */
  epochSpends: EpochSpendEntry[];
  /**
   * Module that created each grant through the module-bypass entrypoint
   * (CreateGrantOnBehalfOf). Binds the bypass decline and claim paths to
   * the creating module.
   */
  grantCreators: GrantCreator[];
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
  /**
   * SPARK gas deposits escrowed in the session module account for
   * SCHEDULED_ONESHOT grants. Exported so an export/import round-trip never
   * strands escrow with no claimant.
   */
  oneshot_gas_deposits?: OneshotDepositAmino[];
  /**
   * Per-UTC-day spend buckets backing RECURRING_PULL max_per_epoch_uspark.
   * Exported so a round-trip does not reset the per-day throttle.
   */
  epoch_spends?: EpochSpendEntryAmino[];
  /**
   * Module that created each grant through the module-bypass entrypoint
   * (CreateGrantOnBehalfOf). Binds the bypass decline and claim paths to
   * the creating module.
   */
  grant_creators?: GrantCreatorAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.session.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * OneshotDeposit is one escrowed ScheduledOneshot gas deposit.
 * @name OneshotDeposit
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.OneshotDeposit
 */
export interface OneshotDeposit {
  grantId: bigint;
  amount: Coin;
}
export interface OneshotDepositProtoMsg {
  typeUrl: "/sparkdream.session.v1.OneshotDeposit";
  value: Uint8Array;
}
/**
 * OneshotDeposit is one escrowed ScheduledOneshot gas deposit.
 * @name OneshotDepositAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.OneshotDeposit
 */
export interface OneshotDepositAmino {
  grant_id?: string;
  amount: CoinAmino;
}
export interface OneshotDepositAminoMsg {
  type: "/sparkdream.session.v1.OneshotDeposit";
  value: OneshotDepositAmino;
}
/**
 * EpochSpendEntry is one (grant, UTC day) spend bucket.
 * @name EpochSpendEntry
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.EpochSpendEntry
 */
export interface EpochSpendEntry {
  grantId: bigint;
  /**
   * UTC day index (unix seconds / 86400).
   */
  day: bigint;
  /**
   * Amount spent in that day, base units (sdk.Int string).
   */
  amount: string;
}
export interface EpochSpendEntryProtoMsg {
  typeUrl: "/sparkdream.session.v1.EpochSpendEntry";
  value: Uint8Array;
}
/**
 * EpochSpendEntry is one (grant, UTC day) spend bucket.
 * @name EpochSpendEntryAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.EpochSpendEntry
 */
export interface EpochSpendEntryAmino {
  grant_id?: string;
  /**
   * UTC day index (unix seconds / 86400).
   */
  day?: string;
  /**
   * Amount spent in that day, base units (sdk.Int string).
   */
  amount?: string;
}
export interface EpochSpendEntryAminoMsg {
  type: "/sparkdream.session.v1.EpochSpendEntry";
  value: EpochSpendEntryAmino;
}
/**
 * GrantCreator records the module address that created a grant through
 * the module-bypass entrypoint.
 * @name GrantCreator
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.GrantCreator
 */
export interface GrantCreator {
  grantId: bigint;
  moduleAddress: string;
}
export interface GrantCreatorProtoMsg {
  typeUrl: "/sparkdream.session.v1.GrantCreator";
  value: Uint8Array;
}
/**
 * GrantCreator records the module address that created a grant through
 * the module-bypass entrypoint.
 * @name GrantCreatorAmino
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.GrantCreator
 */
export interface GrantCreatorAmino {
  grant_id?: string;
  module_address?: string;
}
export interface GrantCreatorAminoMsg {
  type: "/sparkdream.session.v1.GrantCreator";
  value: GrantCreatorAmino;
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
    activeGrantCounts: [],
    oneshotGasDeposits: [],
    epochSpends: [],
    grantCreators: []
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
    for (const v of message.oneshotGasDeposits) {
      OneshotDeposit.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.epochSpends) {
      EpochSpendEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.grantCreators) {
      GrantCreator.encode(v!, writer.uint32(58).fork()).ldelim();
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
        case 5:
          message.oneshotGasDeposits.push(OneshotDeposit.decode(reader, reader.uint32()));
          break;
        case 6:
          message.epochSpends.push(EpochSpendEntry.decode(reader, reader.uint32()));
          break;
        case 7:
          message.grantCreators.push(GrantCreator.decode(reader, reader.uint32()));
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
    message.oneshotGasDeposits = object.oneshotGasDeposits?.map(e => OneshotDeposit.fromPartial(e)) || [];
    message.epochSpends = object.epochSpends?.map(e => EpochSpendEntry.fromPartial(e)) || [];
    message.grantCreators = object.grantCreators?.map(e => GrantCreator.fromPartial(e)) || [];
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
    message.oneshotGasDeposits = object.oneshot_gas_deposits?.map(e => OneshotDeposit.fromAmino(e)) || [];
    message.epochSpends = object.epoch_spends?.map(e => EpochSpendEntry.fromAmino(e)) || [];
    message.grantCreators = object.grant_creators?.map(e => GrantCreator.fromAmino(e)) || [];
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
    if (message.oneshotGasDeposits) {
      obj.oneshot_gas_deposits = message.oneshotGasDeposits.map(e => e ? OneshotDeposit.toAmino(e) : undefined);
    } else {
      obj.oneshot_gas_deposits = message.oneshotGasDeposits;
    }
    if (message.epochSpends) {
      obj.epoch_spends = message.epochSpends.map(e => e ? EpochSpendEntry.toAmino(e) : undefined);
    } else {
      obj.epoch_spends = message.epochSpends;
    }
    if (message.grantCreators) {
      obj.grant_creators = message.grantCreators.map(e => e ? GrantCreator.toAmino(e) : undefined);
    } else {
      obj.grant_creators = message.grantCreators;
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
function createBaseOneshotDeposit(): OneshotDeposit {
  return {
    grantId: BigInt(0),
    amount: Coin.fromPartial({})
  };
}
/**
 * OneshotDeposit is one escrowed ScheduledOneshot gas deposit.
 * @name OneshotDeposit
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.OneshotDeposit
 */
export const OneshotDeposit = {
  typeUrl: "/sparkdream.session.v1.OneshotDeposit",
  encode(message: OneshotDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantId !== BigInt(0)) {
      writer.uint32(8).uint64(message.grantId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OneshotDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneshotDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantId = reader.uint64();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OneshotDeposit>): OneshotDeposit {
    const message = createBaseOneshotDeposit();
    message.grantId = object.grantId !== undefined && object.grantId !== null ? BigInt(object.grantId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: OneshotDepositAmino): OneshotDeposit {
    const message = createBaseOneshotDeposit();
    if (object.grant_id !== undefined && object.grant_id !== null) {
      message.grantId = BigInt(object.grant_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: OneshotDeposit): OneshotDepositAmino {
    const obj: any = {};
    obj.grant_id = message.grantId !== BigInt(0) ? message.grantId?.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: OneshotDepositAminoMsg): OneshotDeposit {
    return OneshotDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: OneshotDepositProtoMsg): OneshotDeposit {
    return OneshotDeposit.decode(message.value);
  },
  toProto(message: OneshotDeposit): Uint8Array {
    return OneshotDeposit.encode(message).finish();
  },
  toProtoMsg(message: OneshotDeposit): OneshotDepositProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.OneshotDeposit",
      value: OneshotDeposit.encode(message).finish()
    };
  }
};
function createBaseEpochSpendEntry(): EpochSpendEntry {
  return {
    grantId: BigInt(0),
    day: BigInt(0),
    amount: ""
  };
}
/**
 * EpochSpendEntry is one (grant, UTC day) spend bucket.
 * @name EpochSpendEntry
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.EpochSpendEntry
 */
export const EpochSpendEntry = {
  typeUrl: "/sparkdream.session.v1.EpochSpendEntry",
  encode(message: EpochSpendEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantId !== BigInt(0)) {
      writer.uint32(8).uint64(message.grantId);
    }
    if (message.day !== BigInt(0)) {
      writer.uint32(16).int64(message.day);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochSpendEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochSpendEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantId = reader.uint64();
          break;
        case 2:
          message.day = reader.int64();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EpochSpendEntry>): EpochSpendEntry {
    const message = createBaseEpochSpendEntry();
    message.grantId = object.grantId !== undefined && object.grantId !== null ? BigInt(object.grantId.toString()) : BigInt(0);
    message.day = object.day !== undefined && object.day !== null ? BigInt(object.day.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EpochSpendEntryAmino): EpochSpendEntry {
    const message = createBaseEpochSpendEntry();
    if (object.grant_id !== undefined && object.grant_id !== null) {
      message.grantId = BigInt(object.grant_id);
    }
    if (object.day !== undefined && object.day !== null) {
      message.day = BigInt(object.day);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EpochSpendEntry): EpochSpendEntryAmino {
    const obj: any = {};
    obj.grant_id = message.grantId !== BigInt(0) ? message.grantId?.toString() : undefined;
    obj.day = message.day !== BigInt(0) ? message.day?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: EpochSpendEntryAminoMsg): EpochSpendEntry {
    return EpochSpendEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochSpendEntryProtoMsg): EpochSpendEntry {
    return EpochSpendEntry.decode(message.value);
  },
  toProto(message: EpochSpendEntry): Uint8Array {
    return EpochSpendEntry.encode(message).finish();
  },
  toProtoMsg(message: EpochSpendEntry): EpochSpendEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.EpochSpendEntry",
      value: EpochSpendEntry.encode(message).finish()
    };
  }
};
function createBaseGrantCreator(): GrantCreator {
  return {
    grantId: BigInt(0),
    moduleAddress: ""
  };
}
/**
 * GrantCreator records the module address that created a grant through
 * the module-bypass entrypoint.
 * @name GrantCreator
 * @package sparkdream.session.v1
 * @see proto type: sparkdream.session.v1.GrantCreator
 */
export const GrantCreator = {
  typeUrl: "/sparkdream.session.v1.GrantCreator",
  encode(message: GrantCreator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantId !== BigInt(0)) {
      writer.uint32(8).uint64(message.grantId);
    }
    if (message.moduleAddress !== "") {
      writer.uint32(18).string(message.moduleAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantCreator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantCreator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantId = reader.uint64();
          break;
        case 2:
          message.moduleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GrantCreator>): GrantCreator {
    const message = createBaseGrantCreator();
    message.grantId = object.grantId !== undefined && object.grantId !== null ? BigInt(object.grantId.toString()) : BigInt(0);
    message.moduleAddress = object.moduleAddress ?? "";
    return message;
  },
  fromAmino(object: GrantCreatorAmino): GrantCreator {
    const message = createBaseGrantCreator();
    if (object.grant_id !== undefined && object.grant_id !== null) {
      message.grantId = BigInt(object.grant_id);
    }
    if (object.module_address !== undefined && object.module_address !== null) {
      message.moduleAddress = object.module_address;
    }
    return message;
  },
  toAmino(message: GrantCreator): GrantCreatorAmino {
    const obj: any = {};
    obj.grant_id = message.grantId !== BigInt(0) ? message.grantId?.toString() : undefined;
    obj.module_address = message.moduleAddress === "" ? undefined : message.moduleAddress;
    return obj;
  },
  fromAminoMsg(object: GrantCreatorAminoMsg): GrantCreator {
    return GrantCreator.fromAmino(object.value);
  },
  fromProtoMsg(message: GrantCreatorProtoMsg): GrantCreator {
    return GrantCreator.decode(message.value);
  },
  toProto(message: GrantCreator): Uint8Array {
    return GrantCreator.encode(message).finish();
  },
  toProtoMsg(message: GrantCreator): GrantCreatorProtoMsg {
    return {
      typeUrl: "/sparkdream.session.v1.GrantCreator",
      value: GrantCreator.encode(message).finish()
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