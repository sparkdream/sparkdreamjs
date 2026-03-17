//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * OwnerInfo defines the OwnerInfo message.
 * @name OwnerInfo
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.OwnerInfo
 */
export interface OwnerInfo {
  address: string;
  primaryName: string;
  lastActiveTime: bigint;
}
export interface OwnerInfoProtoMsg {
  typeUrl: "/sparkdream.name.v1.OwnerInfo";
  value: Uint8Array;
}
/**
 * OwnerInfo defines the OwnerInfo message.
 * @name OwnerInfoAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.OwnerInfo
 */
export interface OwnerInfoAmino {
  address?: string;
  primary_name?: string;
  last_active_time?: string;
}
export interface OwnerInfoAminoMsg {
  type: "/sparkdream.name.v1.OwnerInfo";
  value: OwnerInfoAmino;
}
function createBaseOwnerInfo(): OwnerInfo {
  return {
    address: "",
    primaryName: "",
    lastActiveTime: BigInt(0)
  };
}
/**
 * OwnerInfo defines the OwnerInfo message.
 * @name OwnerInfo
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.OwnerInfo
 */
export const OwnerInfo = {
  typeUrl: "/sparkdream.name.v1.OwnerInfo",
  encode(message: OwnerInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.primaryName !== "") {
      writer.uint32(18).string(message.primaryName);
    }
    if (message.lastActiveTime !== BigInt(0)) {
      writer.uint32(24).int64(message.lastActiveTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OwnerInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwnerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.primaryName = reader.string();
          break;
        case 3:
          message.lastActiveTime = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OwnerInfo>): OwnerInfo {
    const message = createBaseOwnerInfo();
    message.address = object.address ?? "";
    message.primaryName = object.primaryName ?? "";
    message.lastActiveTime = object.lastActiveTime !== undefined && object.lastActiveTime !== null ? BigInt(object.lastActiveTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OwnerInfoAmino): OwnerInfo {
    const message = createBaseOwnerInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.primary_name !== undefined && object.primary_name !== null) {
      message.primaryName = object.primary_name;
    }
    if (object.last_active_time !== undefined && object.last_active_time !== null) {
      message.lastActiveTime = BigInt(object.last_active_time);
    }
    return message;
  },
  toAmino(message: OwnerInfo): OwnerInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.primary_name = message.primaryName === "" ? undefined : message.primaryName;
    obj.last_active_time = message.lastActiveTime !== BigInt(0) ? message.lastActiveTime?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OwnerInfoAminoMsg): OwnerInfo {
    return OwnerInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: OwnerInfoProtoMsg): OwnerInfo {
    return OwnerInfo.decode(message.value);
  },
  toProto(message: OwnerInfo): Uint8Array {
    return OwnerInfo.encode(message).finish();
  },
  toProtoMsg(message: OwnerInfo): OwnerInfoProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.OwnerInfo",
      value: OwnerInfo.encode(message).finish()
    };
  }
};