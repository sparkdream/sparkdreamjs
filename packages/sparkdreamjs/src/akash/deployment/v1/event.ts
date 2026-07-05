//@ts-nocheck
import { DeploymentID, DeploymentIDAmino } from "./deployment";
import { GroupID, GroupIDAmino } from "./group";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * EventDeploymentCreated event is triggered when deployment is created on chain.
 * It contains all the information required to identify a deployment.
 * @name EventDeploymentCreated
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventDeploymentCreated
 */
export interface EventDeploymentCreated {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentID;
  /**
   * Hash is an hashed representation of the deployment.
   */
  hash: Uint8Array;
}
export interface EventDeploymentCreatedProtoMsg {
  typeUrl: "/akash.deployment.v1.EventDeploymentCreated";
  value: Uint8Array;
}
/**
 * EventDeploymentCreated event is triggered when deployment is created on chain.
 * It contains all the information required to identify a deployment.
 * @name EventDeploymentCreatedAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventDeploymentCreated
 */
export interface EventDeploymentCreatedAmino {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentIDAmino;
  /**
   * Hash is an hashed representation of the deployment.
   */
  hash: string;
}
export interface EventDeploymentCreatedAminoMsg {
  type: "/akash.deployment.v1.EventDeploymentCreated";
  value: EventDeploymentCreatedAmino;
}
/**
 * EventDeploymentUpdated is triggered when deployment is updated on chain.
 * It contains all the information required to identify a deployment.
 * @name EventDeploymentUpdated
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventDeploymentUpdated
 */
export interface EventDeploymentUpdated {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentID;
  /**
   * Hash is an hashed representation of the deployment.
   */
  hash: Uint8Array;
}
export interface EventDeploymentUpdatedProtoMsg {
  typeUrl: "/akash.deployment.v1.EventDeploymentUpdated";
  value: Uint8Array;
}
/**
 * EventDeploymentUpdated is triggered when deployment is updated on chain.
 * It contains all the information required to identify a deployment.
 * @name EventDeploymentUpdatedAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventDeploymentUpdated
 */
export interface EventDeploymentUpdatedAmino {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentIDAmino;
  /**
   * Hash is an hashed representation of the deployment.
   */
  hash: string;
}
export interface EventDeploymentUpdatedAminoMsg {
  type: "/akash.deployment.v1.EventDeploymentUpdated";
  value: EventDeploymentUpdatedAmino;
}
/**
 * EventDeploymentClosed is triggered when deployment is closed on chain.
 * It contains all the information required to identify a deployment.
 * @name EventDeploymentClosed
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventDeploymentClosed
 */
export interface EventDeploymentClosed {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentID;
}
export interface EventDeploymentClosedProtoMsg {
  typeUrl: "/akash.deployment.v1.EventDeploymentClosed";
  value: Uint8Array;
}
/**
 * EventDeploymentClosed is triggered when deployment is closed on chain.
 * It contains all the information required to identify a deployment.
 * @name EventDeploymentClosedAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventDeploymentClosed
 */
export interface EventDeploymentClosedAmino {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentIDAmino;
}
export interface EventDeploymentClosedAminoMsg {
  type: "/akash.deployment.v1.EventDeploymentClosed";
  value: EventDeploymentClosedAmino;
}
/**
 * EventGroupStarted is triggered when deployment group is started.
 * It contains all the information required to identify a group.
 * @name EventGroupStarted
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventGroupStarted
 */
export interface EventGroupStarted {
  /**
   * ID is the unique identifier of the group.
   */
  id: GroupID;
}
export interface EventGroupStartedProtoMsg {
  typeUrl: "/akash.deployment.v1.EventGroupStarted";
  value: Uint8Array;
}
/**
 * EventGroupStarted is triggered when deployment group is started.
 * It contains all the information required to identify a group.
 * @name EventGroupStartedAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventGroupStarted
 */
export interface EventGroupStartedAmino {
  /**
   * ID is the unique identifier of the group.
   */
  id: GroupIDAmino;
}
export interface EventGroupStartedAminoMsg {
  type: "/akash.deployment.v1.EventGroupStarted";
  value: EventGroupStartedAmino;
}
/**
 * EventGroupPaused is triggered when deployment group is paused.
 * It contains all the information required to identify a group.
 * @name EventGroupPaused
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventGroupPaused
 */
export interface EventGroupPaused {
  /**
   * ID is the unique identifier of the group.
   */
  id: GroupID;
}
export interface EventGroupPausedProtoMsg {
  typeUrl: "/akash.deployment.v1.EventGroupPaused";
  value: Uint8Array;
}
/**
 * EventGroupPaused is triggered when deployment group is paused.
 * It contains all the information required to identify a group.
 * @name EventGroupPausedAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventGroupPaused
 */
export interface EventGroupPausedAmino {
  /**
   * ID is the unique identifier of the group.
   */
  id: GroupIDAmino;
}
export interface EventGroupPausedAminoMsg {
  type: "/akash.deployment.v1.EventGroupPaused";
  value: EventGroupPausedAmino;
}
/**
 * EventGroupClosed is triggered when deployment group is closed.
 * It contains all the information required to identify a group.
 * @name EventGroupClosed
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventGroupClosed
 */
export interface EventGroupClosed {
  /**
   * ID is the unique identifier of the group.
   */
  id: GroupID;
}
export interface EventGroupClosedProtoMsg {
  typeUrl: "/akash.deployment.v1.EventGroupClosed";
  value: Uint8Array;
}
/**
 * EventGroupClosed is triggered when deployment group is closed.
 * It contains all the information required to identify a group.
 * @name EventGroupClosedAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventGroupClosed
 */
export interface EventGroupClosedAmino {
  /**
   * ID is the unique identifier of the group.
   */
  id: GroupIDAmino;
}
export interface EventGroupClosedAminoMsg {
  type: "/akash.deployment.v1.EventGroupClosed";
  value: EventGroupClosedAmino;
}
function createBaseEventDeploymentCreated(): EventDeploymentCreated {
  return {
    id: DeploymentID.fromPartial({}),
    hash: new Uint8Array()
  };
}
/**
 * EventDeploymentCreated event is triggered when deployment is created on chain.
 * It contains all the information required to identify a deployment.
 * @name EventDeploymentCreated
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventDeploymentCreated
 */
export const EventDeploymentCreated = {
  typeUrl: "/akash.deployment.v1.EventDeploymentCreated",
  encode(message: EventDeploymentCreated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDeploymentCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeploymentCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventDeploymentCreated>): EventDeploymentCreated {
    const message = createBaseEventDeploymentCreated();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventDeploymentCreatedAmino): EventDeploymentCreated {
    const message = createBaseEventDeploymentCreated();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: EventDeploymentCreated): EventDeploymentCreatedAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    obj.hash = message.hash ? base64FromBytes(message.hash) : "";
    return obj;
  },
  fromAminoMsg(object: EventDeploymentCreatedAminoMsg): EventDeploymentCreated {
    return EventDeploymentCreated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeploymentCreatedProtoMsg): EventDeploymentCreated {
    return EventDeploymentCreated.decode(message.value);
  },
  toProto(message: EventDeploymentCreated): Uint8Array {
    return EventDeploymentCreated.encode(message).finish();
  },
  toProtoMsg(message: EventDeploymentCreated): EventDeploymentCreatedProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.EventDeploymentCreated",
      value: EventDeploymentCreated.encode(message).finish()
    };
  }
};
function createBaseEventDeploymentUpdated(): EventDeploymentUpdated {
  return {
    id: DeploymentID.fromPartial({}),
    hash: new Uint8Array()
  };
}
/**
 * EventDeploymentUpdated is triggered when deployment is updated on chain.
 * It contains all the information required to identify a deployment.
 * @name EventDeploymentUpdated
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventDeploymentUpdated
 */
export const EventDeploymentUpdated = {
  typeUrl: "/akash.deployment.v1.EventDeploymentUpdated",
  encode(message: EventDeploymentUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDeploymentUpdated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeploymentUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventDeploymentUpdated>): EventDeploymentUpdated {
    const message = createBaseEventDeploymentUpdated();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EventDeploymentUpdatedAmino): EventDeploymentUpdated {
    const message = createBaseEventDeploymentUpdated();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: EventDeploymentUpdated): EventDeploymentUpdatedAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    obj.hash = message.hash ? base64FromBytes(message.hash) : "";
    return obj;
  },
  fromAminoMsg(object: EventDeploymentUpdatedAminoMsg): EventDeploymentUpdated {
    return EventDeploymentUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeploymentUpdatedProtoMsg): EventDeploymentUpdated {
    return EventDeploymentUpdated.decode(message.value);
  },
  toProto(message: EventDeploymentUpdated): Uint8Array {
    return EventDeploymentUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventDeploymentUpdated): EventDeploymentUpdatedProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.EventDeploymentUpdated",
      value: EventDeploymentUpdated.encode(message).finish()
    };
  }
};
function createBaseEventDeploymentClosed(): EventDeploymentClosed {
  return {
    id: DeploymentID.fromPartial({})
  };
}
/**
 * EventDeploymentClosed is triggered when deployment is closed on chain.
 * It contains all the information required to identify a deployment.
 * @name EventDeploymentClosed
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventDeploymentClosed
 */
export const EventDeploymentClosed = {
  typeUrl: "/akash.deployment.v1.EventDeploymentClosed",
  encode(message: EventDeploymentClosed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDeploymentClosed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeploymentClosed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventDeploymentClosed>): EventDeploymentClosed {
    const message = createBaseEventDeploymentClosed();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: EventDeploymentClosedAmino): EventDeploymentClosed {
    const message = createBaseEventDeploymentClosed();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: EventDeploymentClosed): EventDeploymentClosedAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventDeploymentClosedAminoMsg): EventDeploymentClosed {
    return EventDeploymentClosed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeploymentClosedProtoMsg): EventDeploymentClosed {
    return EventDeploymentClosed.decode(message.value);
  },
  toProto(message: EventDeploymentClosed): Uint8Array {
    return EventDeploymentClosed.encode(message).finish();
  },
  toProtoMsg(message: EventDeploymentClosed): EventDeploymentClosedProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.EventDeploymentClosed",
      value: EventDeploymentClosed.encode(message).finish()
    };
  }
};
function createBaseEventGroupStarted(): EventGroupStarted {
  return {
    id: GroupID.fromPartial({})
  };
}
/**
 * EventGroupStarted is triggered when deployment group is started.
 * It contains all the information required to identify a group.
 * @name EventGroupStarted
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventGroupStarted
 */
export const EventGroupStarted = {
  typeUrl: "/akash.deployment.v1.EventGroupStarted",
  encode(message: EventGroupStarted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGroupStarted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGroupStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventGroupStarted>): EventGroupStarted {
    const message = createBaseEventGroupStarted();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: EventGroupStartedAmino): EventGroupStarted {
    const message = createBaseEventGroupStarted();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: EventGroupStarted): EventGroupStartedAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : GroupID.toAmino(GroupID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventGroupStartedAminoMsg): EventGroupStarted {
    return EventGroupStarted.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGroupStartedProtoMsg): EventGroupStarted {
    return EventGroupStarted.decode(message.value);
  },
  toProto(message: EventGroupStarted): Uint8Array {
    return EventGroupStarted.encode(message).finish();
  },
  toProtoMsg(message: EventGroupStarted): EventGroupStartedProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.EventGroupStarted",
      value: EventGroupStarted.encode(message).finish()
    };
  }
};
function createBaseEventGroupPaused(): EventGroupPaused {
  return {
    id: GroupID.fromPartial({})
  };
}
/**
 * EventGroupPaused is triggered when deployment group is paused.
 * It contains all the information required to identify a group.
 * @name EventGroupPaused
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventGroupPaused
 */
export const EventGroupPaused = {
  typeUrl: "/akash.deployment.v1.EventGroupPaused",
  encode(message: EventGroupPaused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGroupPaused {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGroupPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventGroupPaused>): EventGroupPaused {
    const message = createBaseEventGroupPaused();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: EventGroupPausedAmino): EventGroupPaused {
    const message = createBaseEventGroupPaused();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: EventGroupPaused): EventGroupPausedAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : GroupID.toAmino(GroupID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventGroupPausedAminoMsg): EventGroupPaused {
    return EventGroupPaused.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGroupPausedProtoMsg): EventGroupPaused {
    return EventGroupPaused.decode(message.value);
  },
  toProto(message: EventGroupPaused): Uint8Array {
    return EventGroupPaused.encode(message).finish();
  },
  toProtoMsg(message: EventGroupPaused): EventGroupPausedProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.EventGroupPaused",
      value: EventGroupPaused.encode(message).finish()
    };
  }
};
function createBaseEventGroupClosed(): EventGroupClosed {
  return {
    id: GroupID.fromPartial({})
  };
}
/**
 * EventGroupClosed is triggered when deployment group is closed.
 * It contains all the information required to identify a group.
 * @name EventGroupClosed
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.EventGroupClosed
 */
export const EventGroupClosed = {
  typeUrl: "/akash.deployment.v1.EventGroupClosed",
  encode(message: EventGroupClosed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGroupClosed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGroupClosed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventGroupClosed>): EventGroupClosed {
    const message = createBaseEventGroupClosed();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: EventGroupClosedAmino): EventGroupClosed {
    const message = createBaseEventGroupClosed();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: EventGroupClosed): EventGroupClosedAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : GroupID.toAmino(GroupID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: EventGroupClosedAminoMsg): EventGroupClosed {
    return EventGroupClosed.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGroupClosedProtoMsg): EventGroupClosed {
    return EventGroupClosed.decode(message.value);
  },
  toProto(message: EventGroupClosed): Uint8Array {
    return EventGroupClosed.encode(message).finish();
  },
  toProtoMsg(message: EventGroupClosed): EventGroupClosedProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.EventGroupClosed",
      value: EventGroupClosed.encode(message).finish()
    };
  }
};