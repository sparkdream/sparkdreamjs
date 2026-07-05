//@ts-nocheck
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * DepositAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 * @name DepositAuthorization
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.DepositAuthorization
 */
export interface DepositAuthorization {
  /**
   * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
   * the purpose of deployment.
   */
  spendLimit: Coin;
}
export interface DepositAuthorizationProtoMsg {
  typeUrl: "/akash.deployment.v1.DepositAuthorization";
  value: Uint8Array;
}
/**
 * DepositAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 * @name DepositAuthorizationAmino
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.DepositAuthorization
 */
export interface DepositAuthorizationAmino {
  /**
   * SpendLimit is the amount the grantee is authorized to spend from the granter's account for
   * the purpose of deployment.
   */
  spend_limit: CoinAmino;
}
export interface DepositAuthorizationAminoMsg {
  type: "/akash.deployment.v1.DepositAuthorization";
  value: DepositAuthorizationAmino;
}
function createBaseDepositAuthorization(): DepositAuthorization {
  return {
    spendLimit: Coin.fromPartial({})
  };
}
/**
 * DepositAuthorization allows the grantee to deposit up to spend_limit coins from
 * the granter's account for a deployment.
 * @name DepositAuthorization
 * @package akash.deployment.v1
 * @see proto type: akash.deployment.v1.DepositAuthorization
 */
export const DepositAuthorization = {
  typeUrl: "/akash.deployment.v1.DepositAuthorization",
  encode(message: DepositAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spendLimit !== undefined) {
      Coin.encode(message.spendLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DepositAuthorization>): DepositAuthorization {
    const message = createBaseDepositAuthorization();
    message.spendLimit = object.spendLimit !== undefined && object.spendLimit !== null ? Coin.fromPartial(object.spendLimit) : undefined;
    return message;
  },
  fromAmino(object: DepositAuthorizationAmino): DepositAuthorization {
    const message = createBaseDepositAuthorization();
    if (object.spend_limit !== undefined && object.spend_limit !== null) {
      message.spendLimit = Coin.fromAmino(object.spend_limit);
    }
    return message;
  },
  toAmino(message: DepositAuthorization): DepositAuthorizationAmino {
    const obj: any = {};
    obj.spend_limit = message.spendLimit ? Coin.toAmino(message.spendLimit) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: DepositAuthorizationAminoMsg): DepositAuthorization {
    return DepositAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositAuthorizationProtoMsg): DepositAuthorization {
    return DepositAuthorization.decode(message.value);
  },
  toProto(message: DepositAuthorization): Uint8Array {
    return DepositAuthorization.encode(message).finish();
  },
  toProtoMsg(message: DepositAuthorization): DepositAuthorizationProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1.DepositAuthorization",
      value: DepositAuthorization.encode(message).finish()
    };
  }
};