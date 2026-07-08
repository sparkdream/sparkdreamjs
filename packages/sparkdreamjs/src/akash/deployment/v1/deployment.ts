//@ts-nocheck
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** State is an enum which refers to state of deployment. */
export enum Deployment_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state. */
  invalid = 0,
  /** active - DeploymentActive denotes state for deployment active. */
  active = 1,
  /** closed - DeploymentClosed denotes state for deployment closed. */
  closed = 2,
  UNRECOGNIZED = -1,
}
export const Deployment_StateAmino = Deployment_State;
export function deployment_StateFromJSON(object: any): Deployment_State {
  switch (object) {
    case 0:
    case "invalid":
      return Deployment_State.invalid;
    case 1:
    case "active":
      return Deployment_State.active;
    case 2:
    case "closed":
      return Deployment_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Deployment_State.UNRECOGNIZED;
  }
}
export function deployment_StateToJSON(object: Deployment_State): string {
  switch (object) {
    case Deployment_State.invalid:
      return "invalid";
    case Deployment_State.active:
      return "active";
    case Deployment_State.closed:
      return "closed";
    case Deployment_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * DeploymentID represents a unique identifier for a specific deployment on the network.
 * It is composed of two fields: an owner address and a sequence number (dseq).
 * @name DeploymentID
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.DeploymentID
 */
export interface DeploymentID {
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
}
export interface DeploymentIDProtoMsg {
  typeUrl: "/akash.deployment.v1.DeploymentID";
  value: Uint8Array;
}
/**
 * DeploymentID represents a unique identifier for a specific deployment on the network.
 * It is composed of two fields: an owner address and a sequence number (dseq).
 * @name DeploymentIDAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.DeploymentID
 */
export interface DeploymentIDAmino {
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
}
export interface DeploymentIDAminoMsg {
  type: "/akash.deployment.v1.DeploymentID";
  value: DeploymentIDAmino;
}
/**
 * Deployment stores deploymentID, state and checksum details.
 * @name Deployment
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.Deployment
 */
export interface Deployment {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentID;
  /**
   * State defines the sate of the deployment.
   * A deployment can be either active or inactive.
   */
  state: Deployment_State;
  /**
   * Hash is an hashed representation of the deployment.
   */
  hash: Uint8Array;
  /**
   * CreatedAt indicates when the deployment was created as a block height value.
   */
  createdAt: bigint;
  /**
   * reclamation stores the deployment's reclamation requirements for persistence.
   * Needed so that StartGroup can propagate reclamation to newly created orders.
   */
  reclamation?: DeploymentReclamation;
}
export interface DeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1.Deployment";
  value: Uint8Array;
}
/**
 * Deployment stores deploymentID, state and checksum details.
 * @name DeploymentAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.Deployment
 */
export interface DeploymentAmino {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentIDAmino;
  /**
   * State defines the sate of the deployment.
   * A deployment can be either active or inactive.
   */
  state: Deployment_State;
  /**
   * Hash is an hashed representation of the deployment.
   */
  hash: string;
  /**
   * CreatedAt indicates when the deployment was created as a block height value.
   */
  created_at?: string;
  /**
   * reclamation stores the deployment's reclamation requirements for persistence.
   * Needed so that StartGroup can propagate reclamation to newly created orders.
   */
  reclamation?: DeploymentReclamationAmino;
}
export interface DeploymentAminoMsg {
  type: "/akash.deployment.v1.Deployment";
  value: DeploymentAmino;
}
/**
 * DeploymentReclamation defines the tenant's reclamation requirements.
 * Stored on the Deployment and propagated to Orders.
 * @name DeploymentReclamation
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.DeploymentReclamation
 */
export interface DeploymentReclamation {
  /**
   * min_window is the minimum reclamation window the tenant requires.
   */
  minWindow: Duration;
}
export interface DeploymentReclamationProtoMsg {
  typeUrl: "/akash.deployment.v1.DeploymentReclamation";
  value: Uint8Array;
}
/**
 * DeploymentReclamation defines the tenant's reclamation requirements.
 * Stored on the Deployment and propagated to Orders.
 * @name DeploymentReclamationAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.DeploymentReclamation
 */
export interface DeploymentReclamationAmino {
  /**
   * min_window is the minimum reclamation window the tenant requires.
   */
  min_window: DurationAmino;
}
export interface DeploymentReclamationAminoMsg {
  type: "/akash.deployment.v1.DeploymentReclamation";
  value: DeploymentReclamationAmino;
}
function createBaseDeploymentID(): DeploymentID {
  return {
    owner: "",
    dseq: BigInt(0)
  };
}
/**
 * DeploymentID represents a unique identifier for a specific deployment on the network.
 * It is composed of two fields: an owner address and a sequence number (dseq).
 * @name DeploymentID
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.DeploymentID
 */
export const DeploymentID = {
  typeUrl: "/akash.deployment.v1.DeploymentID",
  encode(message: DeploymentID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeploymentID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeploymentID>): DeploymentID {
    const message = createBaseDeploymentID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DeploymentIDAmino): DeploymentID {
    const message = createBaseDeploymentID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    return message;
  },
  toAmino(message: DeploymentID): DeploymentIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: DeploymentIDAminoMsg): DeploymentID {
    return DeploymentID.fromAmino(object.value);
  },
  fromProtoMsg(message: DeploymentIDProtoMsg): DeploymentID {
    return DeploymentID.decode(message.value);
  },
  toProto(message: DeploymentID): Uint8Array {
    return DeploymentID.encode(message).finish();
  },
  toProtoMsg(message: DeploymentID): DeploymentIDProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.DeploymentID",
      value: DeploymentID.encode(message).finish()
    };
  }
};
function createBaseDeployment(): Deployment {
  return {
    id: DeploymentID.fromPartial({}),
    state: 0,
    hash: new Uint8Array(),
    createdAt: BigInt(0),
    reclamation: undefined
  };
}
/**
 * Deployment stores deploymentID, state and checksum details.
 * @name Deployment
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.Deployment
 */
export const Deployment = {
  typeUrl: "/akash.deployment.v1.Deployment",
  encode(message: Deployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    if (message.reclamation !== undefined) {
      DeploymentReclamation.encode(message.reclamation, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.hash = reader.bytes();
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        case 5:
          message.reclamation = DeploymentReclamation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Deployment>): Deployment {
    const message = createBaseDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.state = object.state ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.reclamation = object.reclamation !== undefined && object.reclamation !== null ? DeploymentReclamation.fromPartial(object.reclamation) : undefined;
    return message;
  },
  fromAmino(object: DeploymentAmino): Deployment {
    const message = createBaseDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.reclamation !== undefined && object.reclamation !== null) {
      message.reclamation = DeploymentReclamation.fromAmino(object.reclamation);
    }
    return message;
  },
  toAmino(message: Deployment): DeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    obj.state = message.state ?? 0;
    obj.hash = message.hash ? base64FromBytes(message.hash) : "";
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.reclamation = message.reclamation ? DeploymentReclamation.toAmino(message.reclamation) : undefined;
    return obj;
  },
  fromAminoMsg(object: DeploymentAminoMsg): Deployment {
    return Deployment.fromAmino(object.value);
  },
  fromProtoMsg(message: DeploymentProtoMsg): Deployment {
    return Deployment.decode(message.value);
  },
  toProto(message: Deployment): Uint8Array {
    return Deployment.encode(message).finish();
  },
  toProtoMsg(message: Deployment): DeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.Deployment",
      value: Deployment.encode(message).finish()
    };
  }
};
function createBaseDeploymentReclamation(): DeploymentReclamation {
  return {
    minWindow: Duration.fromPartial({})
  };
}
/**
 * DeploymentReclamation defines the tenant's reclamation requirements.
 * Stored on the Deployment and propagated to Orders.
 * @name DeploymentReclamation
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.DeploymentReclamation
 */
export const DeploymentReclamation = {
  typeUrl: "/akash.deployment.v1.DeploymentReclamation",
  encode(message: DeploymentReclamation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minWindow !== undefined) {
      Duration.encode(message.minWindow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeploymentReclamation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentReclamation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minWindow = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeploymentReclamation>): DeploymentReclamation {
    const message = createBaseDeploymentReclamation();
    message.minWindow = object.minWindow !== undefined && object.minWindow !== null ? Duration.fromPartial(object.minWindow) : undefined;
    return message;
  },
  fromAmino(object: DeploymentReclamationAmino): DeploymentReclamation {
    const message = createBaseDeploymentReclamation();
    if (object.min_window !== undefined && object.min_window !== null) {
      message.minWindow = Duration.fromAmino(object.min_window);
    }
    return message;
  },
  toAmino(message: DeploymentReclamation): DeploymentReclamationAmino {
    const obj: any = {};
    obj.min_window = message.minWindow ? Duration.toAmino(message.minWindow) : Duration.toAmino(Duration.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: DeploymentReclamationAminoMsg): DeploymentReclamation {
    return DeploymentReclamation.fromAmino(object.value);
  },
  fromProtoMsg(message: DeploymentReclamationProtoMsg): DeploymentReclamation {
    return DeploymentReclamation.decode(message.value);
  },
  toProto(message: DeploymentReclamation): Uint8Array {
    return DeploymentReclamation.encode(message).finish();
  },
  toProtoMsg(message: DeploymentReclamation): DeploymentReclamationProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.DeploymentReclamation",
      value: DeploymentReclamation.encode(message).finish()
    };
  }
};