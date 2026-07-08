//@ts-nocheck
import { GroupID, GroupIDAmino } from "../v1/group";
import { GroupSpec, GroupSpecAmino } from "./groupspec";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** State is an enum which refers to state of group. */
export enum Group_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state. */
  invalid = 0,
  /** open - GroupOpen denotes state for group open. */
  open = 1,
  /** paused - GroupOrdered denotes state for group ordered. */
  paused = 2,
  /** insufficient_funds - GroupInsufficientFunds denotes state for group insufficient_funds. */
  insufficient_funds = 3,
  /** closed - GroupClosed denotes state for group closed. */
  closed = 4,
  UNRECOGNIZED = -1,
}
export const Group_StateAmino = Group_State;
export function group_StateFromJSON(object: any): Group_State {
  switch (object) {
    case 0:
    case "invalid":
      return Group_State.invalid;
    case 1:
    case "open":
      return Group_State.open;
    case 2:
    case "paused":
      return Group_State.paused;
    case 3:
    case "insufficient_funds":
      return Group_State.insufficient_funds;
    case 4:
    case "closed":
      return Group_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Group_State.UNRECOGNIZED;
  }
}
export function group_StateToJSON(object: Group_State): string {
  switch (object) {
    case Group_State.invalid:
      return "invalid";
    case Group_State.open:
      return "open";
    case Group_State.paused:
      return "paused";
    case Group_State.insufficient_funds:
      return "insufficient_funds";
    case Group_State.closed:
      return "closed";
    case Group_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Group stores group id, state and specifications of a group.
 * @name Group
 * @package akash.deployment.v1beta5
 * @see proto type: akash.deployment.v1beta5.Group
 */
export interface Group {
  /**
   * Id is the unique identifier for the group.
   */
  id: GroupID;
  /**
   * State represents the state of the group.
   */
  state: Group_State;
  /**
   * GroupSpec holds the specification of a the Group.
   */
  groupSpec: GroupSpec;
  /**
   * CreatedAt is the block height at which the deployment was created.
   */
  createdAt: bigint;
}
export interface GroupProtoMsg {
  typeUrl: "/akash.deployment.v1beta5.Group";
  value: Uint8Array;
}
/**
 * Group stores group id, state and specifications of a group.
 * @name GroupAmino
 * @package akash.deployment.v1beta5
 * @see proto type: akash.deployment.v1beta5.Group
 */
export interface GroupAmino {
  /**
   * Id is the unique identifier for the group.
   */
  id: GroupIDAmino;
  /**
   * State represents the state of the group.
   */
  state: Group_State;
  /**
   * GroupSpec holds the specification of a the Group.
   */
  group_spec: GroupSpecAmino;
  /**
   * CreatedAt is the block height at which the deployment was created.
   */
  created_at?: string;
}
export interface GroupAminoMsg {
  type: "/akash.deployment.v1beta5.Group";
  value: GroupAmino;
}
function createBaseGroup(): Group {
  return {
    id: GroupID.fromPartial({}),
    state: 0,
    groupSpec: GroupSpec.fromPartial({}),
    createdAt: BigInt(0)
  };
}
/**
 * Group stores group id, state and specifications of a group.
 * @name Group
 * @package akash.deployment.v1beta5
 * @see proto type: akash.deployment.v1beta5.Group
 */
export const Group = {
  typeUrl: "/akash.deployment.v1beta5.Group",
  encode(message: Group, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.groupSpec !== undefined) {
      GroupSpec.encode(message.groupSpec, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Group {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.groupSpec = GroupSpec.decode(reader, reader.uint32());
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Group>): Group {
    const message = createBaseGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    message.state = object.state ?? 0;
    message.groupSpec = object.groupSpec !== undefined && object.groupSpec !== null ? GroupSpec.fromPartial(object.groupSpec) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GroupAmino): Group {
    const message = createBaseGroup();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromAmino(object.id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.group_spec !== undefined && object.group_spec !== null) {
      message.groupSpec = GroupSpec.fromAmino(object.group_spec);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: Group): GroupAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : GroupID.toAmino(GroupID.fromPartial({}));
    obj.state = message.state ?? 0;
    obj.group_spec = message.groupSpec ? GroupSpec.toAmino(message.groupSpec) : GroupSpec.toAmino(GroupSpec.fromPartial({}));
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GroupAminoMsg): Group {
    return Group.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupProtoMsg): Group {
    return Group.decode(message.value);
  },
  toProto(message: Group): Uint8Array {
    return Group.encode(message).finish();
  },
  toProtoMsg(message: Group): GroupProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta5.Group",
      value: Group.encode(message).finish()
    };
  }
};