//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../../helpers";
/**
 * Balance holds the unspent coin received from all deposits with same denom
 * DecCoin is not being used here as it does not support negative values,
 * and balance may go negative if account is overdrawn.
 * @name Balance
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.Balance
 */
export interface Balance {
  denom: string;
  amount: string;
}
export interface BalanceProtoMsg {
  typeUrl: "/akash.escrow.types.v1.Balance";
  value: Uint8Array;
}
/**
 * Balance holds the unspent coin received from all deposits with same denom
 * DecCoin is not being used here as it does not support negative values,
 * and balance may go negative if account is overdrawn.
 * @name BalanceAmino
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.Balance
 */
export interface BalanceAmino {
  denom?: string;
  amount?: string;
}
export interface BalanceAminoMsg {
  type: "/akash.escrow.types.v1.Balance";
  value: BalanceAmino;
}
function createBaseBalance(): Balance {
  return {
    denom: "",
    amount: ""
  };
}
/**
 * Balance holds the unspent coin received from all deposits with same denom
 * DecCoin is not being used here as it does not support negative values,
 * and balance may go negative if account is overdrawn.
 * @name Balance
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.Balance
 */
export const Balance = {
  typeUrl: "/akash.escrow.types.v1.Balance",
  encode(message: Balance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.amount, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Balance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Balance>): Balance {
    const message = createBaseBalance();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: BalanceAmino): Balance {
    const message = createBaseBalance();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: Balance): BalanceAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: BalanceAminoMsg): Balance {
    return Balance.fromAmino(object.value);
  },
  fromProtoMsg(message: BalanceProtoMsg): Balance {
    return Balance.decode(message.value);
  },
  toProto(message: Balance): Uint8Array {
    return Balance.encode(message).finish();
  },
  toProtoMsg(message: Balance): BalanceProtoMsg {
    return {
      typeUrl: "/akash.escrow.types.v1.Balance",
      value: Balance.encode(message).finish()
    };
  }
};