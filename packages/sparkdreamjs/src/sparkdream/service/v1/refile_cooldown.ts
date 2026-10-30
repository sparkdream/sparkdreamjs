//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * RefileCooldown bars the reporter of a member report that was
 * AUTO_DISMISSED (controller stall) from re-filing against the same
 * (operator, service_type) within `report_refile_cooldown_blocks`. See
 * x-service-spec.md §3.4.5. Other members can still report the operator,
 * and auto-dismissed system reports record no cooldown at all.
 * 
 * Keyed by (reporter, operator_address, service_type, dismissed_at) in
 * the RefileCooldowns store; lazy expiry — entries are checked at
 * MsgReportOperator time and pruned when expired.
 * @name RefileCooldown
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.RefileCooldown
 */
export interface RefileCooldown {
  /**
   * controller is the operator's controller at dismissal time (the party
   * that let the report lapse). Informational.
   */
  controller: string;
  /**
   * operator_address is the operator the prior dismissed report targeted.
   */
  operatorAddress: string;
  /**
   * service_type identifies the operator record.
   */
  serviceType: string;
  /**
   * dismissed_at is the height the prior PENDING report was
   * AUTO_DISMISSED. Cooldown expires at
   * `dismissed_at + report_refile_cooldown_blocks`.
   */
  dismissedAt: bigint;
  /**
   * reporter is the bech32 address of the member whose report lapsed and
   * who is barred from re-filing until the cooldown expires.
   */
  reporter: string;
}
export interface RefileCooldownProtoMsg {
  typeUrl: "/sparkdream.service.v1.RefileCooldown";
  value: Uint8Array;
}
/**
 * RefileCooldown bars the reporter of a member report that was
 * AUTO_DISMISSED (controller stall) from re-filing against the same
 * (operator, service_type) within `report_refile_cooldown_blocks`. See
 * x-service-spec.md §3.4.5. Other members can still report the operator,
 * and auto-dismissed system reports record no cooldown at all.
 * 
 * Keyed by (reporter, operator_address, service_type, dismissed_at) in
 * the RefileCooldowns store; lazy expiry — entries are checked at
 * MsgReportOperator time and pruned when expired.
 * @name RefileCooldownAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.RefileCooldown
 */
export interface RefileCooldownAmino {
  /**
   * controller is the operator's controller at dismissal time (the party
   * that let the report lapse). Informational.
   */
  controller?: string;
  /**
   * operator_address is the operator the prior dismissed report targeted.
   */
  operator_address?: string;
  /**
   * service_type identifies the operator record.
   */
  service_type?: string;
  /**
   * dismissed_at is the height the prior PENDING report was
   * AUTO_DISMISSED. Cooldown expires at
   * `dismissed_at + report_refile_cooldown_blocks`.
   */
  dismissed_at?: string;
  /**
   * reporter is the bech32 address of the member whose report lapsed and
   * who is barred from re-filing until the cooldown expires.
   */
  reporter?: string;
}
export interface RefileCooldownAminoMsg {
  type: "sparkdream/x/service/RefileCooldown";
  value: RefileCooldownAmino;
}
function createBaseRefileCooldown(): RefileCooldown {
  return {
    controller: "",
    operatorAddress: "",
    serviceType: "",
    dismissedAt: BigInt(0),
    reporter: ""
  };
}
/**
 * RefileCooldown bars the reporter of a member report that was
 * AUTO_DISMISSED (controller stall) from re-filing against the same
 * (operator, service_type) within `report_refile_cooldown_blocks`. See
 * x-service-spec.md §3.4.5. Other members can still report the operator,
 * and auto-dismissed system reports record no cooldown at all.
 * 
 * Keyed by (reporter, operator_address, service_type, dismissed_at) in
 * the RefileCooldowns store; lazy expiry — entries are checked at
 * MsgReportOperator time and pruned when expired.
 * @name RefileCooldown
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.RefileCooldown
 */
export const RefileCooldown = {
  typeUrl: "/sparkdream.service.v1.RefileCooldown",
  aminoType: "sparkdream/x/service/RefileCooldown",
  encode(message: RefileCooldown, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.controller !== "") {
      writer.uint32(10).string(message.controller);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    if (message.serviceType !== "") {
      writer.uint32(26).string(message.serviceType);
    }
    if (message.dismissedAt !== BigInt(0)) {
      writer.uint32(32).int64(message.dismissedAt);
    }
    if (message.reporter !== "") {
      writer.uint32(42).string(message.reporter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RefileCooldown {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefileCooldown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controller = reader.string();
          break;
        case 2:
          message.operatorAddress = reader.string();
          break;
        case 3:
          message.serviceType = reader.string();
          break;
        case 4:
          message.dismissedAt = reader.int64();
          break;
        case 5:
          message.reporter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RefileCooldown>): RefileCooldown {
    const message = createBaseRefileCooldown();
    message.controller = object.controller ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.serviceType = object.serviceType ?? "";
    message.dismissedAt = object.dismissedAt !== undefined && object.dismissedAt !== null ? BigInt(object.dismissedAt.toString()) : BigInt(0);
    message.reporter = object.reporter ?? "";
    return message;
  },
  fromAmino(object: RefileCooldownAmino): RefileCooldown {
    const message = createBaseRefileCooldown();
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.dismissed_at !== undefined && object.dismissed_at !== null) {
      message.dismissedAt = BigInt(object.dismissed_at);
    }
    if (object.reporter !== undefined && object.reporter !== null) {
      message.reporter = object.reporter;
    }
    return message;
  },
  toAmino(message: RefileCooldown): RefileCooldownAmino {
    const obj: any = {};
    obj.controller = message.controller === "" ? undefined : message.controller;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.dismissed_at = message.dismissedAt !== BigInt(0) ? message.dismissedAt?.toString() : undefined;
    obj.reporter = message.reporter === "" ? undefined : message.reporter;
    return obj;
  },
  fromAminoMsg(object: RefileCooldownAminoMsg): RefileCooldown {
    return RefileCooldown.fromAmino(object.value);
  },
  toAminoMsg(message: RefileCooldown): RefileCooldownAminoMsg {
    return {
      type: "sparkdream/x/service/RefileCooldown",
      value: RefileCooldown.toAmino(message)
    };
  },
  fromProtoMsg(message: RefileCooldownProtoMsg): RefileCooldown {
    return RefileCooldown.decode(message.value);
  },
  toProto(message: RefileCooldown): Uint8Array {
    return RefileCooldown.encode(message).finish();
  },
  toProtoMsg(message: RefileCooldown): RefileCooldownProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.RefileCooldown",
      value: RefileCooldown.encode(message).finish()
    };
  }
};