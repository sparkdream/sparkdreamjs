//@ts-nocheck
import { DeploymentID, DeploymentIDAmino } from "./deployment";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgDepositDeployment represents a message to deposit funds into an existing deployment
 * on the blockchain. This is part of the interaction mechanism for managing
 * deployment-related resources.
 * @name MsgDepositDeployment
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.MsgDepositDeployment
 */
export interface MsgDepositDeployment {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentID;
  /**
   * Amount defines the funds to deposit into the deployment.
   * It is specified as a coin amount (denomination and value).
   */
  amount: Coin;
  /**
   * Depositor is the address of the account depositing funds into the deployment.
   * This must be a valid blockchain account address.
   */
  depositor: string;
}
export interface MsgDepositDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1.MsgDepositDeployment";
  value: Uint8Array;
}
/**
 * MsgDepositDeployment represents a message to deposit funds into an existing deployment
 * on the blockchain. This is part of the interaction mechanism for managing
 * deployment-related resources.
 * @name MsgDepositDeploymentAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.MsgDepositDeployment
 */
export interface MsgDepositDeploymentAmino {
  /**
   * ID is the unique identifier of the deployment.
   */
  id: DeploymentIDAmino;
  /**
   * Amount defines the funds to deposit into the deployment.
   * It is specified as a coin amount (denomination and value).
   */
  amount: CoinAmino;
  /**
   * Depositor is the address of the account depositing funds into the deployment.
   * This must be a valid blockchain account address.
   */
  depositor: string;
}
export interface MsgDepositDeploymentAminoMsg {
  type: "/akash.deployment.v1.MsgDepositDeployment";
  value: MsgDepositDeploymentAmino;
}
/**
 * MsgDepositDeploymentResponse defines response type for the MsgDepositDeployment.
 * @name MsgDepositDeploymentResponse
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.MsgDepositDeploymentResponse
 */
export interface MsgDepositDeploymentResponse {}
export interface MsgDepositDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1.MsgDepositDeploymentResponse";
  value: Uint8Array;
}
/**
 * MsgDepositDeploymentResponse defines response type for the MsgDepositDeployment.
 * @name MsgDepositDeploymentResponseAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.MsgDepositDeploymentResponse
 */
export interface MsgDepositDeploymentResponseAmino {}
export interface MsgDepositDeploymentResponseAminoMsg {
  type: "/akash.deployment.v1.MsgDepositDeploymentResponse";
  value: MsgDepositDeploymentResponseAmino;
}
function createBaseMsgDepositDeployment(): MsgDepositDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    amount: Coin.fromPartial({}),
    depositor: ""
  };
}
/**
 * MsgDepositDeployment represents a message to deposit funds into an existing deployment
 * on the blockchain. This is part of the interaction mechanism for managing
 * deployment-related resources.
 * @name MsgDepositDeployment
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.MsgDepositDeployment
 */
export const MsgDepositDeployment = {
  typeUrl: "/akash.deployment.v1.MsgDepositDeployment",
  encode(message: MsgDepositDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDepositDeployment>): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromAmino(object: MsgDepositDeploymentAmino): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message: MsgDepositDeployment): MsgDepositDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    obj.depositor = message.depositor ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgDepositDeploymentAminoMsg): MsgDepositDeployment {
    return MsgDepositDeployment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositDeploymentProtoMsg): MsgDepositDeployment {
    return MsgDepositDeployment.decode(message.value);
  },
  toProto(message: MsgDepositDeployment): Uint8Array {
    return MsgDepositDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositDeployment): MsgDepositDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.MsgDepositDeployment",
      value: MsgDepositDeployment.encode(message).finish()
    };
  }
};
function createBaseMsgDepositDeploymentResponse(): MsgDepositDeploymentResponse {
  return {};
}
/**
 * MsgDepositDeploymentResponse defines response type for the MsgDepositDeployment.
 * @name MsgDepositDeploymentResponse
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.MsgDepositDeploymentResponse
 */
export const MsgDepositDeploymentResponse = {
  typeUrl: "/akash.deployment.v1.MsgDepositDeploymentResponse",
  encode(_: MsgDepositDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositDeploymentResponse();
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
  fromPartial(_: DeepPartial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },
  fromAmino(_: MsgDepositDeploymentResponseAmino): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },
  toAmino(_: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositDeploymentResponseAminoMsg): MsgDepositDeploymentResponse {
    return MsgDepositDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositDeploymentResponseProtoMsg): MsgDepositDeploymentResponse {
    return MsgDepositDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgDepositDeploymentResponse): Uint8Array {
    return MsgDepositDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.MsgDepositDeploymentResponse",
      value: MsgDepositDeploymentResponse.encode(message).finish()
    };
  }
};