//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.Params
 */
export interface Params {
  /**
   * creation_enabled gates MsgCreateVault only. Approve, revoke-approval,
   * execute, cancel and update keep working for existing vaults whatever its
   * value, so governance can never freeze funds already held in a vault.
   */
  creationEnabled: boolean;
  /**
   * creation_fee_amount is burned by MsgCreateVault, in bond-denom micro-units
   * (SPARK; spam pricing like tag creation). Default 10 SPARK.
   */
  creationFeeAmount: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.vault.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.Params
 */
export interface ParamsAmino {
  /**
   * creation_enabled gates MsgCreateVault only. Approve, revoke-approval,
   * execute, cancel and update keep working for existing vaults whatever its
   * value, so governance can never freeze funds already held in a vault.
   */
  creation_enabled?: boolean;
  /**
   * creation_fee_amount is burned by MsgCreateVault, in bond-denom micro-units
   * (SPARK; spam pricing like tag creation). Default 10 SPARK.
   */
  creation_fee_amount?: string;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/vault/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    creationEnabled: false,
    creationFeeAmount: ""
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.vault.v1
 * @see proto type: sparkdream.vault.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.vault.v1.Params",
  aminoType: "sparkdream/x/vault/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creationEnabled === true) {
      writer.uint32(8).bool(message.creationEnabled);
    }
    if (message.creationFeeAmount !== "") {
      writer.uint32(18).string(message.creationFeeAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationEnabled = reader.bool();
          break;
        case 2:
          message.creationFeeAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.creationEnabled = object.creationEnabled ?? false;
    message.creationFeeAmount = object.creationFeeAmount ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.creation_enabled !== undefined && object.creation_enabled !== null) {
      message.creationEnabled = object.creation_enabled;
    }
    if (object.creation_fee_amount !== undefined && object.creation_fee_amount !== null) {
      message.creationFeeAmount = object.creation_fee_amount;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.creation_enabled = message.creationEnabled === false ? undefined : message.creationEnabled;
    obj.creation_fee_amount = message.creationFeeAmount === "" ? undefined : message.creationFeeAmount;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/vault/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.vault.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};