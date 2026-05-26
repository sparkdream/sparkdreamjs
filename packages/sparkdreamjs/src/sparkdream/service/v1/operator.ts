//@ts-nocheck
import { OperatorStatus } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * Operator is the canonical record for a SPARK-bonded external-service
 * operator (see x-service-spec.md §3.1). Live records (status ∈
 * {ACTIVE, UNDERFUNDED, UNBONDING}) live in the Operators store keyed by
 * (address, service_type); terminal records (SLASHED, RETIRED) are moved
 * to ArchivedOperators at the terminal transition.
 * @name Operator
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Operator
 */
export interface Operator {
  /**
   * address is the bech32 address of the operator (the wallet doing the
   * work and signing on-chain ops).
   */
  address: string;
  /**
   * service_type is the service-type-registry key this operator serves
   * (e.g. "akash-funding", "federation-bridge").
   */
  serviceType: string;
  /**
   * controller is the bech32 address of the x/commons Group that hired
   * this operator. MUST not equal `address` (§3.3).
   */
  controller: string;
  /**
   * bond_amount is the SPARK currently locked in the module account's
   * bond pool (excludes any amount sitting in Tier1Escrow), in
   * bond-denom micro-units. Wrapped into sdk.Coin with the chain's bond
   * denom at the point of use.
   */
  bondAmount: string;
  /**
   * metadata is service-specific opaque config (e.g. JSON with akash_dseq);
   * capped by `max_metadata_bytes` param.
   */
  metadata: Uint8Array;
  /**
   * status is the operator's lifecycle status (§3.1).
   */
  status: OperatorStatus;
  /**
   * underfunded_since is the height at which `bond` first fell below the
   * current `min_bond`; 0 if never. Used by the underfunded EndBlocker
   * sweep with `underfunded_grace_blocks` (§3.6 queue 1).
   */
  underfundedSince: bigint;
  /**
   * unbond_complete_at is the height at which UNBONDING completes (subject
   * to clock pausing, §3.5); 0 if not unbonding.
   */
  unbondCompleteAt: bigint;
  /**
   * tier1_slashed_in_window is the cumulative SPARK amount slashed via
   * tier-1 within the current rolling window (§3.4.3). Stored as
   * math.Int string to avoid coin-shape duplication.
   */
  tier1SlashedInWindow: string;
  /**
   * tier1_window_start is the height the current tier-1 rolling window
   * opened.
   */
  tier1WindowStart: bigint;
  /**
   * tier1_window_start_bond is the bond at the moment the current window
   * opened — the denominator for the aggregate-cap check (§3.4.3).
   */
  tier1WindowStartBond: string;
  /**
   * registered_at is the height the live record was created.
   */
  registeredAt: bigint;
  /**
   * retired_at is the height the record transitioned to a terminal status
   * (SLASHED or RETIRED); 0 if live.
   */
  retiredAt: bigint;
  /**
   * total_lifetime_bond_blocks is the running sum of (current_bond *
   * elapsed_active_blocks) for reputation accrual (§6.6). Updated lazily
   * via settleBondBlocks at any event that changes bond or status.
   */
  totalLifetimeBondBlocks: string;
  /**
   * last_bond_block_update_at is the height of the last settleBondBlocks
   * call for this operator; used by lazy accrual (§6.6).
   */
  lastBondBlockUpdateAt: bigint;
}
export interface OperatorProtoMsg {
  typeUrl: "/sparkdream.service.v1.Operator";
  value: Uint8Array;
}
/**
 * Operator is the canonical record for a SPARK-bonded external-service
 * operator (see x-service-spec.md §3.1). Live records (status ∈
 * {ACTIVE, UNDERFUNDED, UNBONDING}) live in the Operators store keyed by
 * (address, service_type); terminal records (SLASHED, RETIRED) are moved
 * to ArchivedOperators at the terminal transition.
 * @name OperatorAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Operator
 */
export interface OperatorAmino {
  /**
   * address is the bech32 address of the operator (the wallet doing the
   * work and signing on-chain ops).
   */
  address?: string;
  /**
   * service_type is the service-type-registry key this operator serves
   * (e.g. "akash-funding", "federation-bridge").
   */
  service_type?: string;
  /**
   * controller is the bech32 address of the x/commons Group that hired
   * this operator. MUST not equal `address` (§3.3).
   */
  controller?: string;
  /**
   * bond_amount is the SPARK currently locked in the module account's
   * bond pool (excludes any amount sitting in Tier1Escrow), in
   * bond-denom micro-units. Wrapped into sdk.Coin with the chain's bond
   * denom at the point of use.
   */
  bond_amount?: string;
  /**
   * metadata is service-specific opaque config (e.g. JSON with akash_dseq);
   * capped by `max_metadata_bytes` param.
   */
  metadata?: string;
  /**
   * status is the operator's lifecycle status (§3.1).
   */
  status?: OperatorStatus;
  /**
   * underfunded_since is the height at which `bond` first fell below the
   * current `min_bond`; 0 if never. Used by the underfunded EndBlocker
   * sweep with `underfunded_grace_blocks` (§3.6 queue 1).
   */
  underfunded_since?: string;
  /**
   * unbond_complete_at is the height at which UNBONDING completes (subject
   * to clock pausing, §3.5); 0 if not unbonding.
   */
  unbond_complete_at?: string;
  /**
   * tier1_slashed_in_window is the cumulative SPARK amount slashed via
   * tier-1 within the current rolling window (§3.4.3). Stored as
   * math.Int string to avoid coin-shape duplication.
   */
  tier1_slashed_in_window?: string;
  /**
   * tier1_window_start is the height the current tier-1 rolling window
   * opened.
   */
  tier1_window_start?: string;
  /**
   * tier1_window_start_bond is the bond at the moment the current window
   * opened — the denominator for the aggregate-cap check (§3.4.3).
   */
  tier1_window_start_bond?: string;
  /**
   * registered_at is the height the live record was created.
   */
  registered_at?: string;
  /**
   * retired_at is the height the record transitioned to a terminal status
   * (SLASHED or RETIRED); 0 if live.
   */
  retired_at?: string;
  /**
   * total_lifetime_bond_blocks is the running sum of (current_bond *
   * elapsed_active_blocks) for reputation accrual (§6.6). Updated lazily
   * via settleBondBlocks at any event that changes bond or status.
   */
  total_lifetime_bond_blocks?: string;
  /**
   * last_bond_block_update_at is the height of the last settleBondBlocks
   * call for this operator; used by lazy accrual (§6.6).
   */
  last_bond_block_update_at?: string;
}
export interface OperatorAminoMsg {
  type: "sparkdream/x/service/Operator";
  value: OperatorAmino;
}
function createBaseOperator(): Operator {
  return {
    address: "",
    serviceType: "",
    controller: "",
    bondAmount: "",
    metadata: new Uint8Array(),
    status: 0,
    underfundedSince: BigInt(0),
    unbondCompleteAt: BigInt(0),
    tier1SlashedInWindow: "",
    tier1WindowStart: BigInt(0),
    tier1WindowStartBond: "",
    registeredAt: BigInt(0),
    retiredAt: BigInt(0),
    totalLifetimeBondBlocks: "",
    lastBondBlockUpdateAt: BigInt(0)
  };
}
/**
 * Operator is the canonical record for a SPARK-bonded external-service
 * operator (see x-service-spec.md §3.1). Live records (status ∈
 * {ACTIVE, UNDERFUNDED, UNBONDING}) live in the Operators store keyed by
 * (address, service_type); terminal records (SLASHED, RETIRED) are moved
 * to ArchivedOperators at the terminal transition.
 * @name Operator
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Operator
 */
export const Operator = {
  typeUrl: "/sparkdream.service.v1.Operator",
  aminoType: "sparkdream/x/service/Operator",
  encode(message: Operator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    if (message.controller !== "") {
      writer.uint32(26).string(message.controller);
    }
    if (message.bondAmount !== "") {
      writer.uint32(34).string(message.bondAmount);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.underfundedSince !== BigInt(0)) {
      writer.uint32(56).int64(message.underfundedSince);
    }
    if (message.unbondCompleteAt !== BigInt(0)) {
      writer.uint32(64).int64(message.unbondCompleteAt);
    }
    if (message.tier1SlashedInWindow !== "") {
      writer.uint32(74).string(message.tier1SlashedInWindow);
    }
    if (message.tier1WindowStart !== BigInt(0)) {
      writer.uint32(80).int64(message.tier1WindowStart);
    }
    if (message.tier1WindowStartBond !== "") {
      writer.uint32(90).string(message.tier1WindowStartBond);
    }
    if (message.registeredAt !== BigInt(0)) {
      writer.uint32(96).int64(message.registeredAt);
    }
    if (message.retiredAt !== BigInt(0)) {
      writer.uint32(104).int64(message.retiredAt);
    }
    if (message.totalLifetimeBondBlocks !== "") {
      writer.uint32(114).string(message.totalLifetimeBondBlocks);
    }
    if (message.lastBondBlockUpdateAt !== BigInt(0)) {
      writer.uint32(120).int64(message.lastBondBlockUpdateAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Operator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.serviceType = reader.string();
          break;
        case 3:
          message.controller = reader.string();
          break;
        case 4:
          message.bondAmount = reader.string();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.underfundedSince = reader.int64();
          break;
        case 8:
          message.unbondCompleteAt = reader.int64();
          break;
        case 9:
          message.tier1SlashedInWindow = reader.string();
          break;
        case 10:
          message.tier1WindowStart = reader.int64();
          break;
        case 11:
          message.tier1WindowStartBond = reader.string();
          break;
        case 12:
          message.registeredAt = reader.int64();
          break;
        case 13:
          message.retiredAt = reader.int64();
          break;
        case 14:
          message.totalLifetimeBondBlocks = reader.string();
          break;
        case 15:
          message.lastBondBlockUpdateAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Operator>): Operator {
    const message = createBaseOperator();
    message.address = object.address ?? "";
    message.serviceType = object.serviceType ?? "";
    message.controller = object.controller ?? "";
    message.bondAmount = object.bondAmount ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    message.status = object.status ?? 0;
    message.underfundedSince = object.underfundedSince !== undefined && object.underfundedSince !== null ? BigInt(object.underfundedSince.toString()) : BigInt(0);
    message.unbondCompleteAt = object.unbondCompleteAt !== undefined && object.unbondCompleteAt !== null ? BigInt(object.unbondCompleteAt.toString()) : BigInt(0);
    message.tier1SlashedInWindow = object.tier1SlashedInWindow ?? "";
    message.tier1WindowStart = object.tier1WindowStart !== undefined && object.tier1WindowStart !== null ? BigInt(object.tier1WindowStart.toString()) : BigInt(0);
    message.tier1WindowStartBond = object.tier1WindowStartBond ?? "";
    message.registeredAt = object.registeredAt !== undefined && object.registeredAt !== null ? BigInt(object.registeredAt.toString()) : BigInt(0);
    message.retiredAt = object.retiredAt !== undefined && object.retiredAt !== null ? BigInt(object.retiredAt.toString()) : BigInt(0);
    message.totalLifetimeBondBlocks = object.totalLifetimeBondBlocks ?? "";
    message.lastBondBlockUpdateAt = object.lastBondBlockUpdateAt !== undefined && object.lastBondBlockUpdateAt !== null ? BigInt(object.lastBondBlockUpdateAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OperatorAmino): Operator {
    const message = createBaseOperator();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller;
    }
    if (object.bond_amount !== undefined && object.bond_amount !== null) {
      message.bondAmount = object.bond_amount;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.underfunded_since !== undefined && object.underfunded_since !== null) {
      message.underfundedSince = BigInt(object.underfunded_since);
    }
    if (object.unbond_complete_at !== undefined && object.unbond_complete_at !== null) {
      message.unbondCompleteAt = BigInt(object.unbond_complete_at);
    }
    if (object.tier1_slashed_in_window !== undefined && object.tier1_slashed_in_window !== null) {
      message.tier1SlashedInWindow = object.tier1_slashed_in_window;
    }
    if (object.tier1_window_start !== undefined && object.tier1_window_start !== null) {
      message.tier1WindowStart = BigInt(object.tier1_window_start);
    }
    if (object.tier1_window_start_bond !== undefined && object.tier1_window_start_bond !== null) {
      message.tier1WindowStartBond = object.tier1_window_start_bond;
    }
    if (object.registered_at !== undefined && object.registered_at !== null) {
      message.registeredAt = BigInt(object.registered_at);
    }
    if (object.retired_at !== undefined && object.retired_at !== null) {
      message.retiredAt = BigInt(object.retired_at);
    }
    if (object.total_lifetime_bond_blocks !== undefined && object.total_lifetime_bond_blocks !== null) {
      message.totalLifetimeBondBlocks = object.total_lifetime_bond_blocks;
    }
    if (object.last_bond_block_update_at !== undefined && object.last_bond_block_update_at !== null) {
      message.lastBondBlockUpdateAt = BigInt(object.last_bond_block_update_at);
    }
    return message;
  },
  toAmino(message: Operator): OperatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.controller = message.controller === "" ? undefined : message.controller;
    obj.bond_amount = message.bondAmount === "" ? undefined : message.bondAmount;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.underfunded_since = message.underfundedSince !== BigInt(0) ? message.underfundedSince?.toString() : undefined;
    obj.unbond_complete_at = message.unbondCompleteAt !== BigInt(0) ? message.unbondCompleteAt?.toString() : undefined;
    obj.tier1_slashed_in_window = message.tier1SlashedInWindow === "" ? undefined : message.tier1SlashedInWindow;
    obj.tier1_window_start = message.tier1WindowStart !== BigInt(0) ? message.tier1WindowStart?.toString() : undefined;
    obj.tier1_window_start_bond = message.tier1WindowStartBond === "" ? undefined : message.tier1WindowStartBond;
    obj.registered_at = message.registeredAt !== BigInt(0) ? message.registeredAt?.toString() : undefined;
    obj.retired_at = message.retiredAt !== BigInt(0) ? message.retiredAt?.toString() : undefined;
    obj.total_lifetime_bond_blocks = message.totalLifetimeBondBlocks === "" ? undefined : message.totalLifetimeBondBlocks;
    obj.last_bond_block_update_at = message.lastBondBlockUpdateAt !== BigInt(0) ? message.lastBondBlockUpdateAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OperatorAminoMsg): Operator {
    return Operator.fromAmino(object.value);
  },
  toAminoMsg(message: Operator): OperatorAminoMsg {
    return {
      type: "sparkdream/x/service/Operator",
      value: Operator.toAmino(message)
    };
  },
  fromProtoMsg(message: OperatorProtoMsg): Operator {
    return Operator.decode(message.value);
  },
  toProto(message: Operator): Uint8Array {
    return Operator.encode(message).finish();
  },
  toProtoMsg(message: Operator): OperatorProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.Operator",
      value: Operator.encode(message).finish()
    };
  }
};