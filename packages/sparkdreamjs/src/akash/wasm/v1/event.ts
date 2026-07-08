//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * EventMsgBlocked is triggered when smart contract does not
 * pass message filter
 * @name EventMsgBlocked
 * @package akash.wasm.v1
 * @see proto type: akash.wasm.v1.EventMsgBlocked
 */
export interface EventMsgBlocked {
  contractAddress: string;
  msgType: string;
  reason: string;
}
export interface EventMsgBlockedProtoMsg {
  typeUrl: "/akash.wasm.v1.EventMsgBlocked";
  value: Uint8Array;
}
/**
 * EventMsgBlocked is triggered when smart contract does not
 * pass message filter
 * @name EventMsgBlockedAmino
 * @package akash.wasm.v1
 * @see proto type: akash.wasm.v1.EventMsgBlocked
 */
export interface EventMsgBlockedAmino {
  contract_address: string;
  msg_type: string;
  reason: string;
}
export interface EventMsgBlockedAminoMsg {
  type: "/akash.wasm.v1.EventMsgBlocked";
  value: EventMsgBlockedAmino;
}
function createBaseEventMsgBlocked(): EventMsgBlocked {
  return {
    contractAddress: "",
    msgType: "",
    reason: ""
  };
}
/**
 * EventMsgBlocked is triggered when smart contract does not
 * pass message filter
 * @name EventMsgBlocked
 * @package akash.wasm.v1
 * @see proto type: akash.wasm.v1.EventMsgBlocked
 */
export const EventMsgBlocked = {
  typeUrl: "/akash.wasm.v1.EventMsgBlocked",
  encode(message: EventMsgBlocked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.msgType !== "") {
      writer.uint32(18).string(message.msgType);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMsgBlocked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMsgBlocked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.msgType = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventMsgBlocked>): EventMsgBlocked {
    const message = createBaseEventMsgBlocked();
    message.contractAddress = object.contractAddress ?? "";
    message.msgType = object.msgType ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: EventMsgBlockedAmino): EventMsgBlocked {
    const message = createBaseEventMsgBlocked();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.msg_type !== undefined && object.msg_type !== null) {
      message.msgType = object.msg_type;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: EventMsgBlocked): EventMsgBlockedAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress ?? "";
    obj.msg_type = message.msgType ?? "";
    obj.reason = message.reason ?? "";
    return obj;
  },
  fromAminoMsg(object: EventMsgBlockedAminoMsg): EventMsgBlocked {
    return EventMsgBlocked.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMsgBlockedProtoMsg): EventMsgBlocked {
    return EventMsgBlocked.decode(message.value);
  },
  toProto(message: EventMsgBlocked): Uint8Array {
    return EventMsgBlocked.encode(message).finish();
  },
  toProtoMsg(message: EventMsgBlocked): EventMsgBlockedProtoMsg {
    return {
      typeUrl: "/akash.wasm.v1.EventMsgBlocked",
      value: EventMsgBlocked.encode(message).finish()
    };
  }
};