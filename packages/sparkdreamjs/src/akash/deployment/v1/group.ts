//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GroupID uniquely identifies a group within a deployment on the network.
 * A group represents a specific collection of resources or configurations
 * within a deployment.
 * It stores owner, deployment sequence number (dseq) and group sequence number (gseq).
 * @name GroupID
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.GroupID
 */
export interface GroupID {
  /**
   * Owner is the account address of the user who owns the group.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Dseq (deployment sequence number) is a unique numeric identifier for the deployment.
   * It is used to differentiate deployments created by the same owner.
   */
  dseq: bigint;
  /**
   * Gseq (group sequence number) is a unique numeric identifier for the group.
   * It is used to differentiate groups created by the same owner in a deployment.
   */
  gseq: number;
}
export interface GroupIDProtoMsg {
  typeUrl: "/akash.deployment.v1.GroupID";
  value: Uint8Array;
}
/**
 * GroupID uniquely identifies a group within a deployment on the network.
 * A group represents a specific collection of resources or configurations
 * within a deployment.
 * It stores owner, deployment sequence number (dseq) and group sequence number (gseq).
 * @name GroupIDAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.GroupID
 */
export interface GroupIDAmino {
  /**
   * Owner is the account address of the user who owns the group.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * Dseq (deployment sequence number) is a unique numeric identifier for the deployment.
   * It is used to differentiate deployments created by the same owner.
   */
  dseq: string;
  /**
   * Gseq (group sequence number) is a unique numeric identifier for the group.
   * It is used to differentiate groups created by the same owner in a deployment.
   */
  gseq: number;
}
export interface GroupIDAminoMsg {
  type: "/akash.deployment.v1.GroupID";
  value: GroupIDAmino;
}
function createBaseGroupID(): GroupID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0
  };
}
/**
 * GroupID uniquely identifies a group within a deployment on the network.
 * A group represents a specific collection of resources or configurations
 * within a deployment.
 * It stores owner, deployment sequence number (dseq) and group sequence number (gseq).
 * @name GroupID
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.GroupID
 */
export const GroupID = {
  typeUrl: "/akash.deployment.v1.GroupID",
  encode(message: GroupID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GroupID>): GroupID {
    const message = createBaseGroupID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    return message;
  },
  fromAmino(object: GroupIDAmino): GroupID {
    const message = createBaseGroupID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    }
    return message;
  },
  toAmino(message: GroupID): GroupIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ?? 0;
    return obj;
  },
  fromAminoMsg(object: GroupIDAminoMsg): GroupID {
    return GroupID.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupIDProtoMsg): GroupID {
    return GroupID.decode(message.value);
  },
  toProto(message: GroupID): Uint8Array {
    return GroupID.encode(message).finish();
  },
  toProtoMsg(message: GroupID): GroupIDProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.GroupID",
      value: GroupID.encode(message).finish()
    };
  }
};