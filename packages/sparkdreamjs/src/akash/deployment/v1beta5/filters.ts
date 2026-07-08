//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * DeploymentFilters defines filters used to filter deployments.
 * @name DeploymentFilters
 * @package akash.deployment.v1beta5
 * @see proto type: akash.deployment.v1beta5.DeploymentFilters
 */
export interface DeploymentFilters {
  /**
   * Owner is the account bech32 address of the user who owns the deployment.
   * It is a string representing a valid bech32 account address.
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
   * State defines the sate of the deployment. A deployment can be either active or inactive.
   */
  state: string;
}
export interface DeploymentFiltersProtoMsg {
  typeUrl: "/akash.deployment.v1beta5.DeploymentFilters";
  value: Uint8Array;
}
/**
 * DeploymentFilters defines filters used to filter deployments.
 * @name DeploymentFiltersAmino
 * @package akash.deployment.v1beta5
 * @see proto type: akash.deployment.v1beta5.DeploymentFilters
 */
export interface DeploymentFiltersAmino {
  /**
   * Owner is the account bech32 address of the user who owns the deployment.
   * It is a string representing a valid bech32 account address.
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
   * State defines the sate of the deployment. A deployment can be either active or inactive.
   */
  state: string;
}
export interface DeploymentFiltersAminoMsg {
  type: "/akash.deployment.v1beta5.DeploymentFilters";
  value: DeploymentFiltersAmino;
}
/**
 * GroupFilters defines filters used to filter groups
 * @name GroupFilters
 * @package akash.deployment.v1beta5
 * @see proto type: akash.deployment.v1beta5.GroupFilters
 */
export interface GroupFilters {
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
  gseq: bigint;
  /**
   * State defines the sate of the deployment. A deployment can be either active or inactive.
   */
  state: string;
}
export interface GroupFiltersProtoMsg {
  typeUrl: "/akash.deployment.v1beta5.GroupFilters";
  value: Uint8Array;
}
/**
 * GroupFilters defines filters used to filter groups
 * @name GroupFiltersAmino
 * @package akash.deployment.v1beta5
 * @see proto type: akash.deployment.v1beta5.GroupFilters
 */
export interface GroupFiltersAmino {
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
  gseq: string;
  /**
   * State defines the sate of the deployment. A deployment can be either active or inactive.
   */
  state: string;
}
export interface GroupFiltersAminoMsg {
  type: "/akash.deployment.v1beta5.GroupFilters";
  value: GroupFiltersAmino;
}
function createBaseDeploymentFilters(): DeploymentFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    state: ""
  };
}
/**
 * DeploymentFilters defines filters used to filter deployments.
 * @name DeploymentFilters
 * @package akash.deployment.v1beta5
 * @see proto type: akash.deployment.v1beta5.DeploymentFilters
 */
export const DeploymentFilters = {
  typeUrl: "/akash.deployment.v1beta5.DeploymentFilters",
  encode(message: DeploymentFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeploymentFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentFilters();
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
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeploymentFilters>): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: DeploymentFiltersAmino): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: DeploymentFilters): DeploymentFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.state = message.state ?? "";
    return obj;
  },
  fromAminoMsg(object: DeploymentFiltersAminoMsg): DeploymentFilters {
    return DeploymentFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: DeploymentFiltersProtoMsg): DeploymentFilters {
    return DeploymentFilters.decode(message.value);
  },
  toProto(message: DeploymentFilters): Uint8Array {
    return DeploymentFilters.encode(message).finish();
  },
  toProtoMsg(message: DeploymentFilters): DeploymentFiltersProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta5.DeploymentFilters",
      value: DeploymentFilters.encode(message).finish()
    };
  }
};
function createBaseGroupFilters(): GroupFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: BigInt(0),
    state: ""
  };
}
/**
 * GroupFilters defines filters used to filter groups
 * @name GroupFilters
 * @package akash.deployment.v1beta5
 * @see proto type: akash.deployment.v1beta5.GroupFilters
 */
export const GroupFilters = {
  typeUrl: "/akash.deployment.v1beta5.GroupFilters",
  encode(message: GroupFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== BigInt(0)) {
      writer.uint32(24).uint64(message.gseq);
    }
    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupFilters();
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
          message.gseq = reader.uint64();
          break;
        case 4:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GroupFilters>): GroupFilters {
    const message = createBaseGroupFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq !== undefined && object.gseq !== null ? BigInt(object.gseq.toString()) : BigInt(0);
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: GroupFiltersAmino): GroupFilters {
    const message = createBaseGroupFilters();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = BigInt(object.gseq);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: GroupFilters): GroupFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ? message.gseq?.toString() : "0";
    obj.state = message.state ?? "";
    return obj;
  },
  fromAminoMsg(object: GroupFiltersAminoMsg): GroupFilters {
    return GroupFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupFiltersProtoMsg): GroupFilters {
    return GroupFilters.decode(message.value);
  },
  toProto(message: GroupFilters): Uint8Array {
    return GroupFilters.encode(message).finish();
  },
  toProtoMsg(message: GroupFilters): GroupFiltersProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta5.GroupFilters",
      value: GroupFilters.encode(message).finish()
    };
  }
};