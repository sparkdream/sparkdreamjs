//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ControllerTransferCase records an open jury case to transfer an
 * operator's controller (see x-service-spec.md §5.4). Created by
 * MsgOpenControllerTransferCase, deleted by MsgFinalizeControllerTransfer.
 * 
 * At most one open case per (operator_address, service_type), enforced
 * via OpenControllerTransferByOperator secondary index.
 * @name ControllerTransferCase
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.ControllerTransferCase
 */
export interface ControllerTransferCase {
  /**
   * jury_case_id is the x/rep case id (the primary key for this store).
   */
  juryCaseId: bigint;
  /**
   * operator_address is the operator whose controller is being transferred.
   */
  operatorAddress: string;
  /**
   * service_type identifies which operator record.
   */
  serviceType: string;
  /**
   * opener is the address that filed MsgOpenControllerTransferCase
   * (operator themselves OR an ESTABLISHED+ member).
   */
  opener: string;
  /**
   * proposed_new_controller is the x/commons Group address the case
   * proposes to transfer to. Re-checked at apply time (§5.4).
   */
  proposedNewController: string;
  /**
   * deposit is the SPARK the opener escrowed, in bond-denom micro-units;
   * refunded on ACCEPT, forfeited on REJECT. Wrapped into sdk.Coin with
   * the chain's bond denom at the point of use.
   */
  deposit: string;
  /**
   * opened_at is the height the case was opened.
   */
  openedAt: bigint;
}
export interface ControllerTransferCaseProtoMsg {
  typeUrl: "/sparkdream.service.v1.ControllerTransferCase";
  value: Uint8Array;
}
/**
 * ControllerTransferCase records an open jury case to transfer an
 * operator's controller (see x-service-spec.md §5.4). Created by
 * MsgOpenControllerTransferCase, deleted by MsgFinalizeControllerTransfer.
 * 
 * At most one open case per (operator_address, service_type), enforced
 * via OpenControllerTransferByOperator secondary index.
 * @name ControllerTransferCaseAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.ControllerTransferCase
 */
export interface ControllerTransferCaseAmino {
  /**
   * jury_case_id is the x/rep case id (the primary key for this store).
   */
  jury_case_id?: string;
  /**
   * operator_address is the operator whose controller is being transferred.
   */
  operator_address?: string;
  /**
   * service_type identifies which operator record.
   */
  service_type?: string;
  /**
   * opener is the address that filed MsgOpenControllerTransferCase
   * (operator themselves OR an ESTABLISHED+ member).
   */
  opener?: string;
  /**
   * proposed_new_controller is the x/commons Group address the case
   * proposes to transfer to. Re-checked at apply time (§5.4).
   */
  proposed_new_controller?: string;
  /**
   * deposit is the SPARK the opener escrowed, in bond-denom micro-units;
   * refunded on ACCEPT, forfeited on REJECT. Wrapped into sdk.Coin with
   * the chain's bond denom at the point of use.
   */
  deposit?: string;
  /**
   * opened_at is the height the case was opened.
   */
  opened_at?: string;
}
export interface ControllerTransferCaseAminoMsg {
  type: "sparkdream/x/service/ControllerTransferCase";
  value: ControllerTransferCaseAmino;
}
function createBaseControllerTransferCase(): ControllerTransferCase {
  return {
    juryCaseId: BigInt(0),
    operatorAddress: "",
    serviceType: "",
    opener: "",
    proposedNewController: "",
    deposit: "",
    openedAt: BigInt(0)
  };
}
/**
 * ControllerTransferCase records an open jury case to transfer an
 * operator's controller (see x-service-spec.md §5.4). Created by
 * MsgOpenControllerTransferCase, deleted by MsgFinalizeControllerTransfer.
 * 
 * At most one open case per (operator_address, service_type), enforced
 * via OpenControllerTransferByOperator secondary index.
 * @name ControllerTransferCase
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.ControllerTransferCase
 */
export const ControllerTransferCase = {
  typeUrl: "/sparkdream.service.v1.ControllerTransferCase",
  aminoType: "sparkdream/x/service/ControllerTransferCase",
  encode(message: ControllerTransferCase, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.juryCaseId !== BigInt(0)) {
      writer.uint32(8).uint64(message.juryCaseId);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    if (message.serviceType !== "") {
      writer.uint32(26).string(message.serviceType);
    }
    if (message.opener !== "") {
      writer.uint32(34).string(message.opener);
    }
    if (message.proposedNewController !== "") {
      writer.uint32(42).string(message.proposedNewController);
    }
    if (message.deposit !== "") {
      writer.uint32(50).string(message.deposit);
    }
    if (message.openedAt !== BigInt(0)) {
      writer.uint32(56).int64(message.openedAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ControllerTransferCase {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerTransferCase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.juryCaseId = reader.uint64();
          break;
        case 2:
          message.operatorAddress = reader.string();
          break;
        case 3:
          message.serviceType = reader.string();
          break;
        case 4:
          message.opener = reader.string();
          break;
        case 5:
          message.proposedNewController = reader.string();
          break;
        case 6:
          message.deposit = reader.string();
          break;
        case 7:
          message.openedAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ControllerTransferCase>): ControllerTransferCase {
    const message = createBaseControllerTransferCase();
    message.juryCaseId = object.juryCaseId !== undefined && object.juryCaseId !== null ? BigInt(object.juryCaseId.toString()) : BigInt(0);
    message.operatorAddress = object.operatorAddress ?? "";
    message.serviceType = object.serviceType ?? "";
    message.opener = object.opener ?? "";
    message.proposedNewController = object.proposedNewController ?? "";
    message.deposit = object.deposit ?? "";
    message.openedAt = object.openedAt !== undefined && object.openedAt !== null ? BigInt(object.openedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ControllerTransferCaseAmino): ControllerTransferCase {
    const message = createBaseControllerTransferCase();
    if (object.jury_case_id !== undefined && object.jury_case_id !== null) {
      message.juryCaseId = BigInt(object.jury_case_id);
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.opener !== undefined && object.opener !== null) {
      message.opener = object.opener;
    }
    if (object.proposed_new_controller !== undefined && object.proposed_new_controller !== null) {
      message.proposedNewController = object.proposed_new_controller;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    if (object.opened_at !== undefined && object.opened_at !== null) {
      message.openedAt = BigInt(object.opened_at);
    }
    return message;
  },
  toAmino(message: ControllerTransferCase): ControllerTransferCaseAmino {
    const obj: any = {};
    obj.jury_case_id = message.juryCaseId !== BigInt(0) ? message.juryCaseId?.toString() : undefined;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.opener = message.opener === "" ? undefined : message.opener;
    obj.proposed_new_controller = message.proposedNewController === "" ? undefined : message.proposedNewController;
    obj.deposit = message.deposit === "" ? undefined : message.deposit;
    obj.opened_at = message.openedAt !== BigInt(0) ? message.openedAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ControllerTransferCaseAminoMsg): ControllerTransferCase {
    return ControllerTransferCase.fromAmino(object.value);
  },
  toAminoMsg(message: ControllerTransferCase): ControllerTransferCaseAminoMsg {
    return {
      type: "sparkdream/x/service/ControllerTransferCase",
      value: ControllerTransferCase.toAmino(message)
    };
  },
  fromProtoMsg(message: ControllerTransferCaseProtoMsg): ControllerTransferCase {
    return ControllerTransferCase.decode(message.value);
  },
  toProto(message: ControllerTransferCase): Uint8Array {
    return ControllerTransferCase.encode(message).finish();
  },
  toProtoMsg(message: ControllerTransferCase): ControllerTransferCaseProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.ControllerTransferCase",
      value: ControllerTransferCase.encode(message).finish()
    };
  }
};