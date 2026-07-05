//@ts-nocheck
import { DeploymentID, DeploymentIDAmino } from "../v1/deployment";
import { GroupSpec, GroupSpecAmino } from "./groupspec";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgCreateDeployment defines an SDK message for creating deployment.
 * @name MsgCreateDeployment
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgCreateDeployment
 */
export interface MsgCreateDeployment {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentID;
  /**
   * GroupSpec is a list of group specifications for the deployment.
   * This field is required and must be a list of GroupSpec.
   */
  groups: GroupSpec[];
  /**
   * Hash of the deployment.
   */
  hash: Uint8Array;
  /**
   * Deposit specifies the amount of coins to include in the deployment's first deposit.
   */
  deposit: Coin;
  /**
   * Depositor is the account address of the user who will deposit funds to the deployment.
   * This value can be different than the owner of the deployment if there is authorized spend grants applied.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  depositor: string;
}
export interface MsgCreateDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta4.MsgCreateDeployment";
  value: Uint8Array;
}
/**
 * MsgCreateDeployment defines an SDK message for creating deployment.
 * @name MsgCreateDeploymentAmino
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgCreateDeployment
 */
export interface MsgCreateDeploymentAmino {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentIDAmino;
  /**
   * GroupSpec is a list of group specifications for the deployment.
   * This field is required and must be a list of GroupSpec.
   */
  groups: GroupSpecAmino[];
  /**
   * Hash of the deployment.
   */
  hash: string;
  /**
   * Deposit specifies the amount of coins to include in the deployment's first deposit.
   */
  deposit?: CoinAmino;
  /**
   * Depositor is the account address of the user who will deposit funds to the deployment.
   * This value can be different than the owner of the deployment if there is authorized spend grants applied.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  depositor: string;
}
export interface MsgCreateDeploymentAminoMsg {
  type: "/akash.deployment.v1beta4.MsgCreateDeployment";
  value: MsgCreateDeploymentAmino;
}
/**
 * MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.
 * @name MsgCreateDeploymentResponse
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgCreateDeploymentResponse
 */
export interface MsgCreateDeploymentResponse {}
export interface MsgCreateDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta4.MsgCreateDeploymentResponse";
  value: Uint8Array;
}
/**
 * MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.
 * @name MsgCreateDeploymentResponseAmino
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgCreateDeploymentResponse
 */
export interface MsgCreateDeploymentResponseAmino {}
export interface MsgCreateDeploymentResponseAminoMsg {
  type: "/akash.deployment.v1beta4.MsgCreateDeploymentResponse";
  value: MsgCreateDeploymentResponseAmino;
}
/**
 * MsgUpdateDeployment defines an SDK message for updating deployment.
 * @name MsgUpdateDeployment
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgUpdateDeployment
 */
export interface MsgUpdateDeployment {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentID;
  /**
   * Hash of the deployment.
   */
  hash: Uint8Array;
}
export interface MsgUpdateDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta4.MsgUpdateDeployment";
  value: Uint8Array;
}
/**
 * MsgUpdateDeployment defines an SDK message for updating deployment.
 * @name MsgUpdateDeploymentAmino
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgUpdateDeployment
 */
export interface MsgUpdateDeploymentAmino {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentIDAmino;
  /**
   * Hash of the deployment.
   */
  hash: string;
}
export interface MsgUpdateDeploymentAminoMsg {
  type: "/akash.deployment.v1beta4.MsgUpdateDeployment";
  value: MsgUpdateDeploymentAmino;
}
/**
 * MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type.
 * @name MsgUpdateDeploymentResponse
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgUpdateDeploymentResponse
 */
export interface MsgUpdateDeploymentResponse {}
export interface MsgUpdateDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta4.MsgUpdateDeploymentResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type.
 * @name MsgUpdateDeploymentResponseAmino
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgUpdateDeploymentResponse
 */
export interface MsgUpdateDeploymentResponseAmino {}
export interface MsgUpdateDeploymentResponseAminoMsg {
  type: "/akash.deployment.v1beta4.MsgUpdateDeploymentResponse";
  value: MsgUpdateDeploymentResponseAmino;
}
/**
 * MsgCloseDeployment defines an SDK message for closing deployment
 * @name MsgCloseDeployment
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgCloseDeployment
 */
export interface MsgCloseDeployment {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentID;
}
export interface MsgCloseDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta4.MsgCloseDeployment";
  value: Uint8Array;
}
/**
 * MsgCloseDeployment defines an SDK message for closing deployment
 * @name MsgCloseDeploymentAmino
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgCloseDeployment
 */
export interface MsgCloseDeploymentAmino {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentIDAmino;
}
export interface MsgCloseDeploymentAminoMsg {
  type: "/akash.deployment.v1beta4.MsgCloseDeployment";
  value: MsgCloseDeploymentAmino;
}
/**
 * MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type.
 * @name MsgCloseDeploymentResponse
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgCloseDeploymentResponse
 */
export interface MsgCloseDeploymentResponse {}
export interface MsgCloseDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta4.MsgCloseDeploymentResponse";
  value: Uint8Array;
}
/**
 * MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type.
 * @name MsgCloseDeploymentResponseAmino
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgCloseDeploymentResponse
 */
export interface MsgCloseDeploymentResponseAmino {}
export interface MsgCloseDeploymentResponseAminoMsg {
  type: "/akash.deployment.v1beta4.MsgCloseDeploymentResponse";
  value: MsgCloseDeploymentResponseAmino;
}
function createBaseMsgCreateDeployment(): MsgCreateDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    groups: [],
    hash: new Uint8Array(),
    deposit: Coin.fromPartial({}),
    depositor: ""
  };
}
/**
 * MsgCreateDeployment defines an SDK message for creating deployment.
 * @name MsgCreateDeployment
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgCreateDeployment
 */
export const MsgCreateDeployment = {
  typeUrl: "/akash.deployment.v1beta4.MsgCreateDeployment",
  encode(message: MsgCreateDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(42).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(GroupSpec.decode(reader, reader.uint32()));
          break;
        case 3:
          message.hash = reader.bytes();
          break;
        case 4:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateDeployment>): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
    message.hash = object.hash ?? new Uint8Array();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDeploymentAmino): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromAmino(e)) || [];
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message: MsgCreateDeployment): MsgCreateDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.hash = message.hash ? base64FromBytes(message.hash) : "";
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.depositor = message.depositor ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgCreateDeploymentAminoMsg): MsgCreateDeployment {
    return MsgCreateDeployment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDeploymentProtoMsg): MsgCreateDeployment {
    return MsgCreateDeployment.decode(message.value);
  },
  toProto(message: MsgCreateDeployment): Uint8Array {
    return MsgCreateDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDeployment): MsgCreateDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta4.MsgCreateDeployment",
      value: MsgCreateDeployment.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDeploymentResponse(): MsgCreateDeploymentResponse {
  return {};
}
/**
 * MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type.
 * @name MsgCreateDeploymentResponse
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgCreateDeploymentResponse
 */
export const MsgCreateDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta4.MsgCreateDeploymentResponse",
  encode(_: MsgCreateDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
  fromAmino(_: MsgCreateDeploymentResponseAmino): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
  toAmino(_: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateDeploymentResponseAminoMsg): MsgCreateDeploymentResponse {
    return MsgCreateDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDeploymentResponseProtoMsg): MsgCreateDeploymentResponse {
    return MsgCreateDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgCreateDeploymentResponse): Uint8Array {
    return MsgCreateDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta4.MsgCreateDeploymentResponse",
      value: MsgCreateDeploymentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDeployment(): MsgUpdateDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    hash: new Uint8Array()
  };
}
/**
 * MsgUpdateDeployment defines an SDK message for updating deployment.
 * @name MsgUpdateDeployment
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgUpdateDeployment
 */
export const MsgUpdateDeployment = {
  typeUrl: "/akash.deployment.v1beta4.MsgUpdateDeployment",
  encode(message: MsgUpdateDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 3:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateDeployment>): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgUpdateDeploymentAmino): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: MsgUpdateDeployment): MsgUpdateDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    obj.hash = message.hash ? base64FromBytes(message.hash) : "";
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDeploymentAminoMsg): MsgUpdateDeployment {
    return MsgUpdateDeployment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDeploymentProtoMsg): MsgUpdateDeployment {
    return MsgUpdateDeployment.decode(message.value);
  },
  toProto(message: MsgUpdateDeployment): Uint8Array {
    return MsgUpdateDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDeployment): MsgUpdateDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta4.MsgUpdateDeployment",
      value: MsgUpdateDeployment.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDeploymentResponse(): MsgUpdateDeploymentResponse {
  return {};
}
/**
 * MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type.
 * @name MsgUpdateDeploymentResponse
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgUpdateDeploymentResponse
 */
export const MsgUpdateDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta4.MsgUpdateDeploymentResponse",
  encode(_: MsgUpdateDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDeploymentResponseAmino): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
  toAmino(_: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDeploymentResponseAminoMsg): MsgUpdateDeploymentResponse {
    return MsgUpdateDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDeploymentResponseProtoMsg): MsgUpdateDeploymentResponse {
    return MsgUpdateDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDeploymentResponse): Uint8Array {
    return MsgUpdateDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta4.MsgUpdateDeploymentResponse",
      value: MsgUpdateDeploymentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseDeployment(): MsgCloseDeployment {
  return {
    id: DeploymentID.fromPartial({})
  };
}
/**
 * MsgCloseDeployment defines an SDK message for closing deployment
 * @name MsgCloseDeployment
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgCloseDeployment
 */
export const MsgCloseDeployment = {
  typeUrl: "/akash.deployment.v1beta4.MsgCloseDeployment",
  encode(message: MsgCloseDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseDeployment();
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
  fromPartial(object: DeepPartial<MsgCloseDeployment>): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: MsgCloseDeploymentAmino): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgCloseDeployment): MsgCloseDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCloseDeploymentAminoMsg): MsgCloseDeployment {
    return MsgCloseDeployment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseDeploymentProtoMsg): MsgCloseDeployment {
    return MsgCloseDeployment.decode(message.value);
  },
  toProto(message: MsgCloseDeployment): Uint8Array {
    return MsgCloseDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseDeployment): MsgCloseDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta4.MsgCloseDeployment",
      value: MsgCloseDeployment.encode(message).finish()
    };
  }
};
function createBaseMsgCloseDeploymentResponse(): MsgCloseDeploymentResponse {
  return {};
}
/**
 * MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type.
 * @name MsgCloseDeploymentResponse
 * @package akash.deployment.v1beta4
 * @see proto type: akash.deployment.v1beta4.MsgCloseDeploymentResponse
 */
export const MsgCloseDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta4.MsgCloseDeploymentResponse",
  encode(_: MsgCloseDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },
  fromAmino(_: MsgCloseDeploymentResponseAmino): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },
  toAmino(_: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseDeploymentResponseAminoMsg): MsgCloseDeploymentResponse {
    return MsgCloseDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseDeploymentResponseProtoMsg): MsgCloseDeploymentResponse {
    return MsgCloseDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgCloseDeploymentResponse): Uint8Array {
    return MsgCloseDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta4.MsgCloseDeploymentResponse",
      value: MsgCloseDeploymentResponse.encode(message).finish()
    };
  }
};