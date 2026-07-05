//@ts-nocheck
import { AccountID, AccountIDAmino } from "./accountid";
import { DecCoin, DecCoinAmino, Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** State defines payment state */
export enum FractionalPayment_State {
  /** invalid - PaymentStateInvalid is the state when the payment is invalid. */
  invalid = 0,
  /** open - PaymentStateOpen is the state when the payment is open. */
  open = 1,
  /** closed - PaymentStateClosed is the state when the payment is closed. */
  closed = 2,
  /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn. */
  overdrawn = 3,
  UNRECOGNIZED = -1,
}
export const FractionalPayment_StateAmino = FractionalPayment_State;
export function fractionalPayment_StateFromJSON(object: any): FractionalPayment_State {
  switch (object) {
    case 0:
    case "invalid":
      return FractionalPayment_State.invalid;
    case 1:
    case "open":
      return FractionalPayment_State.open;
    case 2:
    case "closed":
      return FractionalPayment_State.closed;
    case 3:
    case "overdrawn":
      return FractionalPayment_State.overdrawn;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FractionalPayment_State.UNRECOGNIZED;
  }
}
export function fractionalPayment_StateToJSON(object: FractionalPayment_State): string {
  switch (object) {
    case FractionalPayment_State.invalid:
      return "invalid";
    case FractionalPayment_State.open:
      return "open";
    case FractionalPayment_State.closed:
      return "closed";
    case FractionalPayment_State.overdrawn:
      return "overdrawn";
    case FractionalPayment_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * FractionalPayment stores state for a payment.
 * @name FractionalPayment
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.FractionalPayment
 */
export interface FractionalPayment {
  /**
   * AccountId is the unique identifier for the account.
   */
  accountId: AccountID;
  /**
   * PaymentId is the unique identifier for the payment.
   */
  paymentId: string;
  /**
   * Owner is the bech32 address of the payment.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * State represents the state of the FractionalPayment.
   */
  state: FractionalPayment_State;
  /**
   * Rate holds the rate of the FractionalPayment.
   */
  rate: DecCoin;
  /**
   * Balance is the current available coins.
   */
  balance: DecCoin;
  /**
   * Withdrawn corresponds to the amount of coins withdrawn by the FractionalPayment.
   */
  withdrawn: Coin;
}
export interface FractionalPaymentProtoMsg {
  typeUrl: "/akash.escrow.v1.FractionalPayment";
  value: Uint8Array;
}
/**
 * FractionalPayment stores state for a payment.
 * @name FractionalPaymentAmino
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.FractionalPayment
 */
export interface FractionalPaymentAmino {
  /**
   * AccountId is the unique identifier for the account.
   */
  account_id: AccountIDAmino;
  /**
   * PaymentId is the unique identifier for the payment.
   */
  payment_id: string;
  /**
   * Owner is the bech32 address of the payment.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * State represents the state of the FractionalPayment.
   */
  state: FractionalPayment_State;
  /**
   * Rate holds the rate of the FractionalPayment.
   */
  rate: DecCoinAmino;
  /**
   * Balance is the current available coins.
   */
  balance: DecCoinAmino;
  /**
   * Withdrawn corresponds to the amount of coins withdrawn by the FractionalPayment.
   */
  withdrawn: CoinAmino;
}
export interface FractionalPaymentAminoMsg {
  type: "/akash.escrow.v1.FractionalPayment";
  value: FractionalPaymentAmino;
}
function createBaseFractionalPayment(): FractionalPayment {
  return {
    accountId: AccountID.fromPartial({}),
    paymentId: "",
    owner: "",
    state: 0,
    rate: DecCoin.fromPartial({}),
    balance: DecCoin.fromPartial({}),
    withdrawn: Coin.fromPartial({})
  };
}
/**
 * FractionalPayment stores state for a payment.
 * @name FractionalPayment
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.FractionalPayment
 */
export const FractionalPayment = {
  typeUrl: "/akash.escrow.v1.FractionalPayment",
  encode(message: FractionalPayment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountId !== undefined) {
      AccountID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.paymentId !== "") {
      writer.uint32(18).string(message.paymentId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.rate !== undefined) {
      DecCoin.encode(message.rate, writer.uint32(42).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      DecCoin.encode(message.balance, writer.uint32(50).fork()).ldelim();
    }
    if (message.withdrawn !== undefined) {
      Coin.encode(message.withdrawn, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FractionalPayment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFractionalPayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = AccountID.decode(reader, reader.uint32());
          break;
        case 2:
          message.paymentId = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.state = reader.int32() as any;
          break;
        case 5:
          message.rate = DecCoin.decode(reader, reader.uint32());
          break;
        case 6:
          message.balance = DecCoin.decode(reader, reader.uint32());
          break;
        case 7:
          message.withdrawn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FractionalPayment>): FractionalPayment {
    const message = createBaseFractionalPayment();
    message.accountId = object.accountId !== undefined && object.accountId !== null ? AccountID.fromPartial(object.accountId) : undefined;
    message.paymentId = object.paymentId ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    message.rate = object.rate !== undefined && object.rate !== null ? DecCoin.fromPartial(object.rate) : undefined;
    message.balance = object.balance !== undefined && object.balance !== null ? DecCoin.fromPartial(object.balance) : undefined;
    message.withdrawn = object.withdrawn !== undefined && object.withdrawn !== null ? Coin.fromPartial(object.withdrawn) : undefined;
    return message;
  },
  fromAmino(object: FractionalPaymentAmino): FractionalPayment {
    const message = createBaseFractionalPayment();
    if (object.account_id !== undefined && object.account_id !== null) {
      message.accountId = AccountID.fromAmino(object.account_id);
    }
    if (object.payment_id !== undefined && object.payment_id !== null) {
      message.paymentId = object.payment_id;
    }
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
    if (object.withdrawn !== undefined && object.withdrawn !== null) {
      message.withdrawn = Coin.fromAmino(object.withdrawn);
    }
    return message;
  },
  toAmino(message: FractionalPayment): FractionalPaymentAmino {
    const obj: any = {};
    obj.account_id = message.accountId ? AccountID.toAmino(message.accountId) : AccountID.toAmino(AccountID.fromPartial({}));
    obj.payment_id = message.paymentId ?? "";
    obj.owner = message.owner ?? "";
    obj.state = message.state ?? 0;
    obj.rate = message.rate ? DecCoin.toAmino(message.rate) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.balance = message.balance ? DecCoin.toAmino(message.balance) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.withdrawn = message.withdrawn ? Coin.toAmino(message.withdrawn) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: FractionalPaymentAminoMsg): FractionalPayment {
    return FractionalPayment.fromAmino(object.value);
  },
  fromProtoMsg(message: FractionalPaymentProtoMsg): FractionalPayment {
    return FractionalPayment.decode(message.value);
  },
  toProto(message: FractionalPayment): Uint8Array {
    return FractionalPayment.encode(message).finish();
  },
  toProtoMsg(message: FractionalPayment): FractionalPaymentProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1.FractionalPayment",
      value: FractionalPayment.encode(message).finish()
    };
  }
};