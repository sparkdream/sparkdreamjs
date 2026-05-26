//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Tier1EscrowEntry holds a tier-1 slash that has been moved out of the
 * operator's bond but not yet released to the community pool — pending
 * either the contest window expiring (release to pool) or the operator
 * contesting (return to bond). See x-service-spec.md §3.4.7.
 * 
 * Keyed by `escrow_id` (auto-incrementing uint64) in the Tier1Escrow
 * store; secondary index by operator (Tier1EscrowByOperator) and by
 * release height (Tier1EscrowReleaseQueue for the EndBlocker sweep).
 * @name Tier1EscrowEntry
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Tier1EscrowEntry
 */
export interface Tier1EscrowEntry {
  /**
   * escrow_id is the auto-incrementing primary key (NextEscrowID counter).
   */
  escrowId: bigint;
  /**
   * report_id is the report this escrow corresponds to (the tier-1
   * resolution that produced the slash).
   */
  reportId: bigint;
  /**
   * operator_address is the operator whose bond was reduced.
   */
  operatorAddress: string;
  /**
   * service_type identifies which operator record this affects.
   */
  serviceType: string;
  /**
   * amount is the SPARK held in escrow, in bond-denom micro-units.
   * Wrapped into sdk.Coin with the chain's bond denom at the point of
   * use.
   */
  amount: string;
  /**
   * release_at is the height at which the escrow becomes eligible for
   * release to the community pool (set to current_height +
   * report_contest_window_blocks at lock time).
   */
  releaseAt: bigint;
}
export interface Tier1EscrowEntryProtoMsg {
  typeUrl: "/sparkdream.service.v1.Tier1EscrowEntry";
  value: Uint8Array;
}
/**
 * Tier1EscrowEntry holds a tier-1 slash that has been moved out of the
 * operator's bond but not yet released to the community pool — pending
 * either the contest window expiring (release to pool) or the operator
 * contesting (return to bond). See x-service-spec.md §3.4.7.
 * 
 * Keyed by `escrow_id` (auto-incrementing uint64) in the Tier1Escrow
 * store; secondary index by operator (Tier1EscrowByOperator) and by
 * release height (Tier1EscrowReleaseQueue for the EndBlocker sweep).
 * @name Tier1EscrowEntryAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Tier1EscrowEntry
 */
export interface Tier1EscrowEntryAmino {
  /**
   * escrow_id is the auto-incrementing primary key (NextEscrowID counter).
   */
  escrow_id?: string;
  /**
   * report_id is the report this escrow corresponds to (the tier-1
   * resolution that produced the slash).
   */
  report_id?: string;
  /**
   * operator_address is the operator whose bond was reduced.
   */
  operator_address?: string;
  /**
   * service_type identifies which operator record this affects.
   */
  service_type?: string;
  /**
   * amount is the SPARK held in escrow, in bond-denom micro-units.
   * Wrapped into sdk.Coin with the chain's bond denom at the point of
   * use.
   */
  amount?: string;
  /**
   * release_at is the height at which the escrow becomes eligible for
   * release to the community pool (set to current_height +
   * report_contest_window_blocks at lock time).
   */
  release_at?: string;
}
export interface Tier1EscrowEntryAminoMsg {
  type: "sparkdream/x/service/Tier1EscrowEntry";
  value: Tier1EscrowEntryAmino;
}
function createBaseTier1EscrowEntry(): Tier1EscrowEntry {
  return {
    escrowId: BigInt(0),
    reportId: BigInt(0),
    operatorAddress: "",
    serviceType: "",
    amount: "",
    releaseAt: BigInt(0)
  };
}
/**
 * Tier1EscrowEntry holds a tier-1 slash that has been moved out of the
 * operator's bond but not yet released to the community pool — pending
 * either the contest window expiring (release to pool) or the operator
 * contesting (return to bond). See x-service-spec.md §3.4.7.
 * 
 * Keyed by `escrow_id` (auto-incrementing uint64) in the Tier1Escrow
 * store; secondary index by operator (Tier1EscrowByOperator) and by
 * release height (Tier1EscrowReleaseQueue for the EndBlocker sweep).
 * @name Tier1EscrowEntry
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Tier1EscrowEntry
 */
export const Tier1EscrowEntry = {
  typeUrl: "/sparkdream.service.v1.Tier1EscrowEntry",
  aminoType: "sparkdream/x/service/Tier1EscrowEntry",
  encode(message: Tier1EscrowEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.escrowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.escrowId);
    }
    if (message.reportId !== BigInt(0)) {
      writer.uint32(16).uint64(message.reportId);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(26).string(message.operatorAddress);
    }
    if (message.serviceType !== "") {
      writer.uint32(34).string(message.serviceType);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.releaseAt !== BigInt(0)) {
      writer.uint32(48).int64(message.releaseAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Tier1EscrowEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTier1EscrowEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.escrowId = reader.uint64();
          break;
        case 2:
          message.reportId = reader.uint64();
          break;
        case 3:
          message.operatorAddress = reader.string();
          break;
        case 4:
          message.serviceType = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.releaseAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Tier1EscrowEntry>): Tier1EscrowEntry {
    const message = createBaseTier1EscrowEntry();
    message.escrowId = object.escrowId !== undefined && object.escrowId !== null ? BigInt(object.escrowId.toString()) : BigInt(0);
    message.reportId = object.reportId !== undefined && object.reportId !== null ? BigInt(object.reportId.toString()) : BigInt(0);
    message.operatorAddress = object.operatorAddress ?? "";
    message.serviceType = object.serviceType ?? "";
    message.amount = object.amount ?? "";
    message.releaseAt = object.releaseAt !== undefined && object.releaseAt !== null ? BigInt(object.releaseAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: Tier1EscrowEntryAmino): Tier1EscrowEntry {
    const message = createBaseTier1EscrowEntry();
    if (object.escrow_id !== undefined && object.escrow_id !== null) {
      message.escrowId = BigInt(object.escrow_id);
    }
    if (object.report_id !== undefined && object.report_id !== null) {
      message.reportId = BigInt(object.report_id);
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.release_at !== undefined && object.release_at !== null) {
      message.releaseAt = BigInt(object.release_at);
    }
    return message;
  },
  toAmino(message: Tier1EscrowEntry): Tier1EscrowEntryAmino {
    const obj: any = {};
    obj.escrow_id = message.escrowId !== BigInt(0) ? message.escrowId?.toString() : undefined;
    obj.report_id = message.reportId !== BigInt(0) ? message.reportId?.toString() : undefined;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.release_at = message.releaseAt !== BigInt(0) ? message.releaseAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: Tier1EscrowEntryAminoMsg): Tier1EscrowEntry {
    return Tier1EscrowEntry.fromAmino(object.value);
  },
  toAminoMsg(message: Tier1EscrowEntry): Tier1EscrowEntryAminoMsg {
    return {
      type: "sparkdream/x/service/Tier1EscrowEntry",
      value: Tier1EscrowEntry.toAmino(message)
    };
  },
  fromProtoMsg(message: Tier1EscrowEntryProtoMsg): Tier1EscrowEntry {
    return Tier1EscrowEntry.decode(message.value);
  },
  toProto(message: Tier1EscrowEntry): Uint8Array {
    return Tier1EscrowEntry.encode(message).finish();
  },
  toProtoMsg(message: Tier1EscrowEntry): Tier1EscrowEntryProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.Tier1EscrowEntry",
      value: Tier1EscrowEntry.encode(message).finish()
    };
  }
};