//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * NameRecord is the on-chain record for a registered handle.
 * 
 * Forward resolution (`name -> address`) returns `target` when set, otherwise
 * `owner`. Reverse resolution (`address -> name`) is owner-driven via
 * OwnerInfo.primary_name. A target address that wants reverse resolution to
 * point at this name must first call MsgAcceptTarget; only then may that
 * address set the name as its primary. This separation prevents an owner from
 * unilaterally hijacking another address's apparent identity.
 * @name NameRecord
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.NameRecord
 */
export interface NameRecord {
  name: string;
  owner: string;
  data: string;
  /**
   * target, when non-empty, overrides forward resolution: Resolve(name) returns
   * this address. Cleared by passing the empty string to MsgSetTarget.
   */
  target: string;
  /**
   * target_accepted is true once the current `target` address has signed
   * MsgAcceptTarget. Reset to false whenever `target` changes (re-consent
   * required). Only an accepted target may set this name as its primary.
   */
  targetAccepted: boolean;
}
export interface NameRecordProtoMsg {
  typeUrl: "/sparkdream.name.v1.NameRecord";
  value: Uint8Array;
}
/**
 * NameRecord is the on-chain record for a registered handle.
 * 
 * Forward resolution (`name -> address`) returns `target` when set, otherwise
 * `owner`. Reverse resolution (`address -> name`) is owner-driven via
 * OwnerInfo.primary_name. A target address that wants reverse resolution to
 * point at this name must first call MsgAcceptTarget; only then may that
 * address set the name as its primary. This separation prevents an owner from
 * unilaterally hijacking another address's apparent identity.
 * @name NameRecordAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.NameRecord
 */
export interface NameRecordAmino {
  name?: string;
  owner?: string;
  data?: string;
  /**
   * target, when non-empty, overrides forward resolution: Resolve(name) returns
   * this address. Cleared by passing the empty string to MsgSetTarget.
   */
  target?: string;
  /**
   * target_accepted is true once the current `target` address has signed
   * MsgAcceptTarget. Reset to false whenever `target` changes (re-consent
   * required). Only an accepted target may set this name as its primary.
   */
  target_accepted?: boolean;
}
export interface NameRecordAminoMsg {
  type: "/sparkdream.name.v1.NameRecord";
  value: NameRecordAmino;
}
function createBaseNameRecord(): NameRecord {
  return {
    name: "",
    owner: "",
    data: "",
    target: "",
    targetAccepted: false
  };
}
/**
 * NameRecord is the on-chain record for a registered handle.
 * 
 * Forward resolution (`name -> address`) returns `target` when set, otherwise
 * `owner`. Reverse resolution (`address -> name`) is owner-driven via
 * OwnerInfo.primary_name. A target address that wants reverse resolution to
 * point at this name must first call MsgAcceptTarget; only then may that
 * address set the name as its primary. This separation prevents an owner from
 * unilaterally hijacking another address's apparent identity.
 * @name NameRecord
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.NameRecord
 */
export const NameRecord = {
  typeUrl: "/sparkdream.name.v1.NameRecord",
  encode(message: NameRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    if (message.target !== "") {
      writer.uint32(34).string(message.target);
    }
    if (message.targetAccepted === true) {
      writer.uint32(40).bool(message.targetAccepted);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NameRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNameRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.data = reader.string();
          break;
        case 4:
          message.target = reader.string();
          break;
        case 5:
          message.targetAccepted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<NameRecord>): NameRecord {
    const message = createBaseNameRecord();
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.data = object.data ?? "";
    message.target = object.target ?? "";
    message.targetAccepted = object.targetAccepted ?? false;
    return message;
  },
  fromAmino(object: NameRecordAmino): NameRecord {
    const message = createBaseNameRecord();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    }
    if (object.target_accepted !== undefined && object.target_accepted !== null) {
      message.targetAccepted = object.target_accepted;
    }
    return message;
  },
  toAmino(message: NameRecord): NameRecordAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.data = message.data === "" ? undefined : message.data;
    obj.target = message.target === "" ? undefined : message.target;
    obj.target_accepted = message.targetAccepted === false ? undefined : message.targetAccepted;
    return obj;
  },
  fromAminoMsg(object: NameRecordAminoMsg): NameRecord {
    return NameRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: NameRecordProtoMsg): NameRecord {
    return NameRecord.decode(message.value);
  },
  toProto(message: NameRecord): Uint8Array {
    return NameRecord.encode(message).finish();
  },
  toProtoMsg(message: NameRecord): NameRecordProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.NameRecord",
      value: NameRecord.encode(message).finish()
    };
  }
};