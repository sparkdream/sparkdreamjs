//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * EventTrustedAuditorCreated defines an SDK message for when a trusted auditor is created.
 * @name EventTrustedAuditorCreated
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.EventTrustedAuditorCreated
 */
export interface EventTrustedAuditorCreated {
  /**
   * Owner is the account bech32 address of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Auditor is the account address of the auditor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  auditor: string;
}
export interface EventTrustedAuditorCreatedProtoMsg {
  typeUrl: "/akash.audit.v1.EventTrustedAuditorCreated";
  value: Uint8Array;
}
/**
 * EventTrustedAuditorCreated defines an SDK message for when a trusted auditor is created.
 * @name EventTrustedAuditorCreatedAmino
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.EventTrustedAuditorCreated
 */
export interface EventTrustedAuditorCreatedAmino {
  /**
   * Owner is the account bech32 address of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Auditor is the account address of the auditor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  auditor: string;
}
export interface EventTrustedAuditorCreatedAminoMsg {
  type: "/akash.audit.v1.EventTrustedAuditorCreated";
  value: EventTrustedAuditorCreatedAmino;
}
/**
 * EventTrustedAuditorDeleted defines an event for when a trusted auditor is deleted.
 * @name EventTrustedAuditorDeleted
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.EventTrustedAuditorDeleted
 */
export interface EventTrustedAuditorDeleted {
  /**
   * Owner is the account bech32 address of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Auditor is the account address of the auditor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  auditor: string;
}
export interface EventTrustedAuditorDeletedProtoMsg {
  typeUrl: "/akash.audit.v1.EventTrustedAuditorDeleted";
  value: Uint8Array;
}
/**
 * EventTrustedAuditorDeleted defines an event for when a trusted auditor is deleted.
 * @name EventTrustedAuditorDeletedAmino
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.EventTrustedAuditorDeleted
 */
export interface EventTrustedAuditorDeletedAmino {
  /**
   * Owner is the account bech32 address of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Auditor is the account address of the auditor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  auditor: string;
}
export interface EventTrustedAuditorDeletedAminoMsg {
  type: "/akash.audit.v1.EventTrustedAuditorDeleted";
  value: EventTrustedAuditorDeletedAmino;
}
function createBaseEventTrustedAuditorCreated(): EventTrustedAuditorCreated {
  return {
    owner: "",
    auditor: ""
  };
}
/**
 * EventTrustedAuditorCreated defines an SDK message for when a trusted auditor is created.
 * @name EventTrustedAuditorCreated
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.EventTrustedAuditorCreated
 */
export const EventTrustedAuditorCreated = {
  typeUrl: "/akash.audit.v1.EventTrustedAuditorCreated",
  encode(message: EventTrustedAuditorCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTrustedAuditorCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTrustedAuditorCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventTrustedAuditorCreated>): EventTrustedAuditorCreated {
    const message = createBaseEventTrustedAuditorCreated();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    return message;
  },
  fromAmino(object: EventTrustedAuditorCreatedAmino): EventTrustedAuditorCreated {
    const message = createBaseEventTrustedAuditorCreated();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    }
    return message;
  },
  toAmino(message: EventTrustedAuditorCreated): EventTrustedAuditorCreatedAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.auditor = message.auditor ?? "";
    return obj;
  },
  fromAminoMsg(object: EventTrustedAuditorCreatedAminoMsg): EventTrustedAuditorCreated {
    return EventTrustedAuditorCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTrustedAuditorCreatedProtoMsg): EventTrustedAuditorCreated {
    return EventTrustedAuditorCreated.decode(message.value);
  },
  toProto(message: EventTrustedAuditorCreated): Uint8Array {
    return EventTrustedAuditorCreated.encode(message).finish();
  },
  toProtoMsg(message: EventTrustedAuditorCreated): EventTrustedAuditorCreatedProtoMsg {
    return {
      typeUrl: "/akash.audit.v1.EventTrustedAuditorCreated",
      value: EventTrustedAuditorCreated.encode(message).finish()
    };
  }
};
function createBaseEventTrustedAuditorDeleted(): EventTrustedAuditorDeleted {
  return {
    owner: "",
    auditor: ""
  };
}
/**
 * EventTrustedAuditorDeleted defines an event for when a trusted auditor is deleted.
 * @name EventTrustedAuditorDeleted
 * @package akash.audit.v1
 * @see proto type: akash.audit.v1.EventTrustedAuditorDeleted
 */
export const EventTrustedAuditorDeleted = {
  typeUrl: "/akash.audit.v1.EventTrustedAuditorDeleted",
  encode(message: EventTrustedAuditorDeleted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTrustedAuditorDeleted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTrustedAuditorDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventTrustedAuditorDeleted>): EventTrustedAuditorDeleted {
    const message = createBaseEventTrustedAuditorDeleted();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    return message;
  },
  fromAmino(object: EventTrustedAuditorDeletedAmino): EventTrustedAuditorDeleted {
    const message = createBaseEventTrustedAuditorDeleted();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    }
    return message;
  },
  toAmino(message: EventTrustedAuditorDeleted): EventTrustedAuditorDeletedAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.auditor = message.auditor ?? "";
    return obj;
  },
  fromAminoMsg(object: EventTrustedAuditorDeletedAminoMsg): EventTrustedAuditorDeleted {
    return EventTrustedAuditorDeleted.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTrustedAuditorDeletedProtoMsg): EventTrustedAuditorDeleted {
    return EventTrustedAuditorDeleted.decode(message.value);
  },
  toProto(message: EventTrustedAuditorDeleted): Uint8Array {
    return EventTrustedAuditorDeleted.encode(message).finish();
  },
  toProtoMsg(message: EventTrustedAuditorDeleted): EventTrustedAuditorDeletedProtoMsg {
    return {
      typeUrl: "/akash.audit.v1.EventTrustedAuditorDeleted",
      value: EventTrustedAuditorDeleted.encode(message).finish()
    };
  }
};