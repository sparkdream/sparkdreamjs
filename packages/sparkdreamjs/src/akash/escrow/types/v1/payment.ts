//@ts-nocheck
import { State } from "./state";
import { DecCoin, DecCoinAmino, Coin, CoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { Payment as Payment1 } from "../../id/v1/id";
import { PaymentAmino as Payment1Amino } from "../../id/v1/id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Payment stores state for a payment.
 * @name PaymentState
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.PaymentState
 */
export interface PaymentState {
  /**
   * Owner is the account bech32 address of the user who owns the deployment.
   * It is a string representing a valid bech32 account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * State represents the state of the Payment.
   */
  state: State;
  /**
   * Rate holds the rate of the Payment.
   */
  rate: DecCoin;
  /**
   * Balance is the current available coins.
   */
  balance: DecCoin;
  /**
   * Unsettled is the amount needed to settle payment if account is overdrawn
   */
  unsettled: DecCoin;
  /**
   * Withdrawn corresponds to the amount of coins withdrawn by the Payment.
   */
  withdrawn: Coin;
}
export interface PaymentStateProtoMsg {
  typeUrl: "/akash.escrow.types.v1.PaymentState";
  value: Uint8Array;
}
/**
 * Payment stores state for a payment.
 * @name PaymentStateAmino
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.PaymentState
 */
export interface PaymentStateAmino {
  /**
   * Owner is the account bech32 address of the user who owns the deployment.
   * It is a string representing a valid bech32 account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * State represents the state of the Payment.
   */
  state: State;
  /**
   * Rate holds the rate of the Payment.
   */
  rate: DecCoinAmino;
  /**
   * Balance is the current available coins.
   */
  balance: DecCoinAmino;
  /**
   * Unsettled is the amount needed to settle payment if account is overdrawn
   */
  unsettled: DecCoinAmino;
  /**
   * Withdrawn corresponds to the amount of coins withdrawn by the Payment.
   */
  withdrawn: CoinAmino;
}
export interface PaymentStateAminoMsg {
  type: "/akash.escrow.types.v1.PaymentState";
  value: PaymentStateAmino;
}
/**
 * Payment
 * @name Payment
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.Payment
 */
export interface Payment {
  id: Payment1;
  state: PaymentState;
}
export interface PaymentProtoMsg {
  typeUrl: "/akash.escrow.types.v1.Payment";
  value: Uint8Array;
}
/**
 * Payment
 * @name PaymentAmino
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.Payment
 */
export interface PaymentAmino {
  id: Payment1Amino;
  state: PaymentStateAmino;
}
export interface PaymentAminoMsg {
  type: "/akash.escrow.types.v1.Payment";
  value: PaymentAmino;
}
function createBasePaymentState(): PaymentState {
  return {
    owner: "",
    state: 0,
    rate: DecCoin.fromPartial({}),
    balance: DecCoin.fromPartial({}),
    unsettled: DecCoin.fromPartial({}),
    withdrawn: Coin.fromPartial({})
  };
}
/**
 * Payment stores state for a payment.
 * @name PaymentState
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.PaymentState
 */
export const PaymentState = {
  typeUrl: "/akash.escrow.types.v1.PaymentState",
  encode(message: PaymentState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.rate !== undefined) {
      DecCoin.encode(message.rate, writer.uint32(26).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      DecCoin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    if (message.unsettled !== undefined) {
      DecCoin.encode(message.unsettled, writer.uint32(42).fork()).ldelim();
    }
    if (message.withdrawn !== undefined) {
      Coin.encode(message.withdrawn, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PaymentState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.rate = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = DecCoin.decode(reader, reader.uint32());
          break;
        case 5:
          message.unsettled = DecCoin.decode(reader, reader.uint32());
          break;
        case 6:
          message.withdrawn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PaymentState>): PaymentState {
    const message = createBasePaymentState();
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    message.rate = object.rate !== undefined && object.rate !== null ? DecCoin.fromPartial(object.rate) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? DecCoin.fromPartial(object.balance) : undefined;
    message.unsettled = object.unsettled !== undefined && object.unsettled !== null ? DecCoin.fromPartial(object.unsettled) : undefined;
    message.withdrawn = object.withdrawn !== undefined && object.withdrawn !== null ? Coin.fromPartial(object.withdrawn) : undefined;
    return message;
  },
  fromAmino(object: PaymentStateAmino): PaymentState {
    const message = createBasePaymentState();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = DecCoin.fromAmino(object.rate);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = DecCoin.fromAmino(object.balance);
    }
    if (object.unsettled !== undefined && object.unsettled !== null) {
      message.unsettled = DecCoin.fromAmino(object.unsettled);
    }
    if (object.withdrawn !== undefined && object.withdrawn !== null) {
      message.withdrawn = Coin.fromAmino(object.withdrawn);
    }
    return message;
  },
  toAmino(message: PaymentState): PaymentStateAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.state = message.state ?? 0;
    obj.rate = message.rate ? DecCoin.toAmino(message.rate) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.balance = message.balance ? DecCoin.toAmino(message.balance) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.unsettled = message.unsettled ? DecCoin.toAmino(message.unsettled) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.withdrawn = message.withdrawn ? Coin.toAmino(message.withdrawn) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: PaymentStateAminoMsg): PaymentState {
    return PaymentState.fromAmino(object.value);
  },
  fromProtoMsg(message: PaymentStateProtoMsg): PaymentState {
    return PaymentState.decode(message.value);
  },
  toProto(message: PaymentState): Uint8Array {
    return PaymentState.encode(message).finish();
  },
  toProtoMsg(message: PaymentState): PaymentStateProtoMsg {
    return {
      typeUrl: "/akash.escrow.types.v1.PaymentState",
      value: PaymentState.encode(message).finish()
    };
  }
};
function createBasePayment(): Payment {
  return {
    id: Payment1.fromPartial({}),
    state: PaymentState.fromPartial({})
  };
}
/**
 * Payment
 * @name Payment
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.Payment
 */
export const Payment = {
  typeUrl: "/akash.escrow.types.v1.Payment",
  encode(message: Payment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      Payment1.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      PaymentState.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Payment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = Payment1.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = PaymentState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Payment>): Payment {
    const message = createBasePayment();
    message.id = object.id !== undefined && object.id !== null ? Payment1.fromPartial(object.id) : undefined;
    message.state = object.state !== undefined && object.state !== null ? PaymentState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: PaymentAmino): Payment {
    const message = createBasePayment();
    if (object.id !== undefined && object.id !== null) {
      message.id = Payment1.fromAmino(object.id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = PaymentState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: Payment): PaymentAmino {
    const obj: any = {};
    obj.id = message.id ? Payment1.toAmino(message.id) : Payment1.toAmino(Payment1.fromPartial({}));
    obj.state = message.state ? PaymentState.toAmino(message.state) : PaymentState.toAmino(PaymentState.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: PaymentAminoMsg): Payment {
    return Payment.fromAmino(object.value);
  },
  fromProtoMsg(message: PaymentProtoMsg): Payment {
    return Payment.decode(message.value);
  },
  toProto(message: Payment): Uint8Array {
    return Payment.encode(message).finish();
  },
  toProtoMsg(message: Payment): PaymentProtoMsg {
    return {
      typeUrl: "/akash.escrow.types.v1.Payment",
      value: Payment.encode(message).finish()
    };
  }
};