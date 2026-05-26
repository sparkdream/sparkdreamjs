//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Tier1LastSlash records the height of the most recent tier-1 slash
 * applied by a given (controller, operator, service_type) tuple,
 * consulted to enforce `tier1_cooldown_blocks` (see x-service-spec.md
 * §3.4.4 and §4.1).
 * 
 * Pruned when the operator record archives (BOTH SLASHED and RETIRED
 * transitions) so a re-registered operator never inherits cooldown
 * state from a prior incarnation.
 * @name Tier1LastSlash
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Tier1LastSlash
 */
export interface Tier1LastSlash {
  /**
   * controller is the controller whose cooldown is tracked.
   */
  controller: string;
  /**
   * operator_address is the target operator.
   */
  operatorAddress: string;
  /**
   * service_type identifies the operator record.
   */
  serviceType: string;
  /**
   * last_slash_height is the block height of the most recent tier-1
   * slash by this controller against this operator.
   */
  lastSlashHeight: bigint;
}
export interface Tier1LastSlashProtoMsg {
  typeUrl: "/sparkdream.service.v1.Tier1LastSlash";
  value: Uint8Array;
}
/**
 * Tier1LastSlash records the height of the most recent tier-1 slash
 * applied by a given (controller, operator, service_type) tuple,
 * consulted to enforce `tier1_cooldown_blocks` (see x-service-spec.md
 * §3.4.4 and §4.1).
 * 
 * Pruned when the operator record archives (BOTH SLASHED and RETIRED
 * transitions) so a re-registered operator never inherits cooldown
 * state from a prior incarnation.
 * @name Tier1LastSlashAmino
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Tier1LastSlash
 */
export interface Tier1LastSlashAmino {
  /**
   * controller is the controller whose cooldown is tracked.
   */
  controller?: string;
  /**
   * operator_address is the target operator.
   */
  operator_address?: string;
  /**
   * service_type identifies the operator record.
   */
  service_type?: string;
  /**
   * last_slash_height is the block height of the most recent tier-1
   * slash by this controller against this operator.
   */
  last_slash_height?: string;
}
export interface Tier1LastSlashAminoMsg {
  type: "sparkdream/x/service/Tier1LastSlash";
  value: Tier1LastSlashAmino;
}
function createBaseTier1LastSlash(): Tier1LastSlash {
  return {
    controller: "",
    operatorAddress: "",
    serviceType: "",
    lastSlashHeight: BigInt(0)
  };
}
/**
 * Tier1LastSlash records the height of the most recent tier-1 slash
 * applied by a given (controller, operator, service_type) tuple,
 * consulted to enforce `tier1_cooldown_blocks` (see x-service-spec.md
 * §3.4.4 and §4.1).
 * 
 * Pruned when the operator record archives (BOTH SLASHED and RETIRED
 * transitions) so a re-registered operator never inherits cooldown
 * state from a prior incarnation.
 * @name Tier1LastSlash
 * @package sparkdream.service.v1
 * @see proto type: sparkdream.service.v1.Tier1LastSlash
 */
export const Tier1LastSlash = {
  typeUrl: "/sparkdream.service.v1.Tier1LastSlash",
  aminoType: "sparkdream/x/service/Tier1LastSlash",
  encode(message: Tier1LastSlash, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.controller !== "") {
      writer.uint32(10).string(message.controller);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    if (message.serviceType !== "") {
      writer.uint32(26).string(message.serviceType);
    }
    if (message.lastSlashHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.lastSlashHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Tier1LastSlash {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTier1LastSlash();
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
          message.lastSlashHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Tier1LastSlash>): Tier1LastSlash {
    const message = createBaseTier1LastSlash();
    message.controller = object.controller ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    message.serviceType = object.serviceType ?? "";
    message.lastSlashHeight = object.lastSlashHeight !== undefined && object.lastSlashHeight !== null ? BigInt(object.lastSlashHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: Tier1LastSlashAmino): Tier1LastSlash {
    const message = createBaseTier1LastSlash();
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.service_type !== undefined && object.service_type !== null) {
      message.serviceType = object.service_type;
    }
    if (object.last_slash_height !== undefined && object.last_slash_height !== null) {
      message.lastSlashHeight = BigInt(object.last_slash_height);
    }
    return message;
  },
  toAmino(message: Tier1LastSlash): Tier1LastSlashAmino {
    const obj: any = {};
    obj.controller = message.controller === "" ? undefined : message.controller;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    obj.service_type = message.serviceType === "" ? undefined : message.serviceType;
    obj.last_slash_height = message.lastSlashHeight !== BigInt(0) ? message.lastSlashHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: Tier1LastSlashAminoMsg): Tier1LastSlash {
    return Tier1LastSlash.fromAmino(object.value);
  },
  toAminoMsg(message: Tier1LastSlash): Tier1LastSlashAminoMsg {
    return {
      type: "sparkdream/x/service/Tier1LastSlash",
      value: Tier1LastSlash.toAmino(message)
    };
  },
  fromProtoMsg(message: Tier1LastSlashProtoMsg): Tier1LastSlash {
    return Tier1LastSlash.decode(message.value);
  },
  toProto(message: Tier1LastSlash): Uint8Array {
    return Tier1LastSlash.encode(message).finish();
  },
  toProtoMsg(message: Tier1LastSlash): Tier1LastSlashProtoMsg {
    return {
      typeUrl: "/sparkdream.service.v1.Tier1LastSlash",
      value: Tier1LastSlash.encode(message).finish()
    };
  }
};