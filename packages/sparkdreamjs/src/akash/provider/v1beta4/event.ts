//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * EventProviderCreated defines an SDK message for provider created event.
 * It contains all the required information to identify a provider on-chain.
 * @name EventProviderCreated
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.EventProviderCreated
 */
export interface EventProviderCreated {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
}
export interface EventProviderCreatedProtoMsg {
  typeUrl: "/akash.provider.v1beta4.EventProviderCreated";
  value: Uint8Array;
}
/**
 * EventProviderCreated defines an SDK message for provider created event.
 * It contains all the required information to identify a provider on-chain.
 * @name EventProviderCreatedAmino
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.EventProviderCreated
 */
export interface EventProviderCreatedAmino {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
}
export interface EventProviderCreatedAminoMsg {
  type: "/akash.provider.v1beta4.EventProviderCreated";
  value: EventProviderCreatedAmino;
}
/**
 * EventProviderUpdated defines an SDK message for provider updated event.
 * It contains all the required information to identify a provider on-chain.
 * @name EventProviderUpdated
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.EventProviderUpdated
 */
export interface EventProviderUpdated {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
}
export interface EventProviderUpdatedProtoMsg {
  typeUrl: "/akash.provider.v1beta4.EventProviderUpdated";
  value: Uint8Array;
}
/**
 * EventProviderUpdated defines an SDK message for provider updated event.
 * It contains all the required information to identify a provider on-chain.
 * @name EventProviderUpdatedAmino
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.EventProviderUpdated
 */
export interface EventProviderUpdatedAmino {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
}
export interface EventProviderUpdatedAminoMsg {
  type: "/akash.provider.v1beta4.EventProviderUpdated";
  value: EventProviderUpdatedAmino;
}
/**
 * EventProviderDeleted defines an SDK message for provider deleted event.
 * @name EventProviderDeleted
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.EventProviderDeleted
 */
export interface EventProviderDeleted {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
}
export interface EventProviderDeletedProtoMsg {
  typeUrl: "/akash.provider.v1beta4.EventProviderDeleted";
  value: Uint8Array;
}
/**
 * EventProviderDeleted defines an SDK message for provider deleted event.
 * @name EventProviderDeletedAmino
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.EventProviderDeleted
 */
export interface EventProviderDeletedAmino {
  /**
   * Owner is the bech32 address of the account of the provider.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
}
export interface EventProviderDeletedAminoMsg {
  type: "/akash.provider.v1beta4.EventProviderDeleted";
  value: EventProviderDeletedAmino;
}
function createBaseEventProviderCreated(): EventProviderCreated {
  return {
    owner: ""
  };
}
/**
 * EventProviderCreated defines an SDK message for provider created event.
 * It contains all the required information to identify a provider on-chain.
 * @name EventProviderCreated
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.EventProviderCreated
 */
export const EventProviderCreated = {
  typeUrl: "/akash.provider.v1beta4.EventProviderCreated",
  encode(message: EventProviderCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProviderCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProviderCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventProviderCreated>): EventProviderCreated {
    const message = createBaseEventProviderCreated();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventProviderCreatedAmino): EventProviderCreated {
    const message = createBaseEventProviderCreated();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventProviderCreated): EventProviderCreatedAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    return obj;
  },
  fromAminoMsg(object: EventProviderCreatedAminoMsg): EventProviderCreated {
    return EventProviderCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProviderCreatedProtoMsg): EventProviderCreated {
    return EventProviderCreated.decode(message.value);
  },
  toProto(message: EventProviderCreated): Uint8Array {
    return EventProviderCreated.encode(message).finish();
  },
  toProtoMsg(message: EventProviderCreated): EventProviderCreatedProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta4.EventProviderCreated",
      value: EventProviderCreated.encode(message).finish()
    };
  }
};
function createBaseEventProviderUpdated(): EventProviderUpdated {
  return {
    owner: ""
  };
}
/**
 * EventProviderUpdated defines an SDK message for provider updated event.
 * It contains all the required information to identify a provider on-chain.
 * @name EventProviderUpdated
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.EventProviderUpdated
 */
export const EventProviderUpdated = {
  typeUrl: "/akash.provider.v1beta4.EventProviderUpdated",
  encode(message: EventProviderUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProviderUpdated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProviderUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventProviderUpdated>): EventProviderUpdated {
    const message = createBaseEventProviderUpdated();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventProviderUpdatedAmino): EventProviderUpdated {
    const message = createBaseEventProviderUpdated();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventProviderUpdated): EventProviderUpdatedAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    return obj;
  },
  fromAminoMsg(object: EventProviderUpdatedAminoMsg): EventProviderUpdated {
    return EventProviderUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProviderUpdatedProtoMsg): EventProviderUpdated {
    return EventProviderUpdated.decode(message.value);
  },
  toProto(message: EventProviderUpdated): Uint8Array {
    return EventProviderUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventProviderUpdated): EventProviderUpdatedProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta4.EventProviderUpdated",
      value: EventProviderUpdated.encode(message).finish()
    };
  }
};
function createBaseEventProviderDeleted(): EventProviderDeleted {
  return {
    owner: ""
  };
}
/**
 * EventProviderDeleted defines an SDK message for provider deleted event.
 * @name EventProviderDeleted
 * @package akash.provider.v1beta4
 * @see proto type: akash.provider.v1beta4.EventProviderDeleted
 */
export const EventProviderDeleted = {
  typeUrl: "/akash.provider.v1beta4.EventProviderDeleted",
  encode(message: EventProviderDeleted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProviderDeleted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProviderDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventProviderDeleted>): EventProviderDeleted {
    const message = createBaseEventProviderDeleted();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventProviderDeletedAmino): EventProviderDeleted {
    const message = createBaseEventProviderDeleted();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventProviderDeleted): EventProviderDeletedAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    return obj;
  },
  fromAminoMsg(object: EventProviderDeletedAminoMsg): EventProviderDeleted {
    return EventProviderDeleted.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProviderDeletedProtoMsg): EventProviderDeleted {
    return EventProviderDeleted.decode(message.value);
  },
  toProto(message: EventProviderDeleted): Uint8Array {
    return EventProviderDeleted.encode(message).finish();
  },
  toProtoMsg(message: EventProviderDeleted): EventProviderDeletedProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta4.EventProviderDeleted",
      value: EventProviderDeleted.encode(message).finish()
    };
  }
};