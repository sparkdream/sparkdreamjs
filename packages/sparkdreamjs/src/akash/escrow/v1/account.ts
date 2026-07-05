//@ts-nocheck
import { AccountID, AccountIDAmino } from "./accountid";
import { DecCoin, DecCoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** State stores state for an escrow account. */
export enum Account_State {
  /** invalid - AccountStateInvalid is an invalid state. */
  invalid = 0,
  /** open - AccountOpen is the state when an account is open. */
  open = 1,
  /** closed - AccountClosed is the state when an account is closed. */
  closed = 2,
  /** overdrawn - AccountOverdrawn is the state when an account is overdrawn. */
  overdrawn = 3,
  UNRECOGNIZED = -1,
}
export const Account_StateAmino = Account_State;
export function account_StateFromJSON(object: any): Account_State {
  switch (object) {
    case 0:
    case "invalid":
      return Account_State.invalid;
    case 1:
    case "open":
      return Account_State.open;
    case 2:
    case "closed":
      return Account_State.closed;
    case 3:
    case "overdrawn":
      return Account_State.overdrawn;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Account_State.UNRECOGNIZED;
  }
}
export function account_StateToJSON(object: Account_State): string {
  switch (object) {
    case Account_State.invalid:
      return "invalid";
    case Account_State.open:
      return "open";
    case Account_State.closed:
      return "closed";
    case Account_State.overdrawn:
      return "overdrawn";
    case Account_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Account stores state for an escrow account.
 * @name Account
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.Account
 */
export interface Account {
  /**
   * Id is the unique identifier for an escrow account.
   */
  id: AccountID;
  /**
   * Owner is the bech32 address of the account.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * State represents the current state of an Account.
   */
  state: Account_State;
  /**
   * Balance holds the unspent coins received from the owner's wallet.
   */
  balance: DecCoin;
  /**
   * Transferred total coins spent by this account.
   */
  transferred: DecCoin;
  /**
   * SettledAt represents the block height at which this account was last settled.
   */
  settledAt: bigint;
  /**
   * Depositor is the bech32 address of the depositor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   * If depositor is same as the owner, then any incoming coins are added to the Balance.
   * If depositor isn't same as the owner, then any incoming coins are added to the Funds.
   */
  depositor: string;
  /**
   * Funds are unspent coins received from the (non-Owner) Depositor's wallet.
   * If there are any funds, they should be spent before spending the Balance.
   */
  funds: DecCoin;
}
export interface AccountProtoMsg {
  typeUrl: "/akash.escrow.v1.Account";
  value: Uint8Array;
}
/**
 * Account stores state for an escrow account.
 * @name AccountAmino
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.Account
 */
export interface AccountAmino {
  /**
   * Id is the unique identifier for an escrow account.
   */
  id: AccountIDAmino;
  /**
   * Owner is the bech32 address of the account.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * State represents the current state of an Account.
   */
  state: Account_State;
  /**
   * Balance holds the unspent coins received from the owner's wallet.
   */
  balance: DecCoinAmino;
  /**
   * Transferred total coins spent by this account.
   */
  transferred: DecCoinAmino;
  /**
   * SettledAt represents the block height at which this account was last settled.
   */
  settled_at: string;
  /**
   * Depositor is the bech32 address of the depositor.
   * It is a string representing a valid account address.
   * 
   * Example:
   *   "akash1..."
   * If depositor is same as the owner, then any incoming coins are added to the Balance.
   * If depositor isn't same as the owner, then any incoming coins are added to the Funds.
   */
  depositor: string;
  /**
   * Funds are unspent coins received from the (non-Owner) Depositor's wallet.
   * If there are any funds, they should be spent before spending the Balance.
   */
  funds: DecCoinAmino;
}
export interface AccountAminoMsg {
  type: "/akash.escrow.v1.Account";
  value: AccountAmino;
}
function createBaseAccount(): Account {
  return {
    id: AccountID.fromPartial({}),
    owner: "",
    state: 0,
    balance: DecCoin.fromPartial({}),
    transferred: DecCoin.fromPartial({}),
    settledAt: BigInt(0),
    depositor: "",
    funds: DecCoin.fromPartial({})
  };
}
/**
 * Account stores state for an escrow account.
 * @name Account
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.Account
 */
export const Account = {
  typeUrl: "/akash.escrow.v1.Account",
  encode(message: Account, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      AccountID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.balance !== undefined) {
      DecCoin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    if (message.transferred !== undefined) {
      DecCoin.encode(message.transferred, writer.uint32(42).fork()).ldelim();
    }
    if (message.settledAt !== BigInt(0)) {
      writer.uint32(48).int64(message.settledAt);
    }
    if (message.depositor !== "") {
      writer.uint32(58).string(message.depositor);
    }
    if (message.funds !== undefined) {
      DecCoin.encode(message.funds, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Account {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = AccountID.decode(reader, reader.uint32());
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.state = reader.int32() as any;
          break;
        case 4:
          message.balance = DecCoin.decode(reader, reader.uint32());
          break;
        case 5:
          message.transferred = DecCoin.decode(reader, reader.uint32());
          break;
        case 6:
          message.settledAt = reader.int64();
          break;
        case 7:
          message.depositor = reader.string();
          break;
        case 8:
          message.funds = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Account>): Account {
    const message = createBaseAccount();
    message.id = object.id !== undefined && object.id !== null ? AccountID.fromPartial(object.id) : undefined;
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    message.balance = object.balance !== undefined && object.balance !== null ? DecCoin.fromPartial(object.balance) : undefined;
    message.transferred = object.transferred !== undefined && object.transferred !== null ? DecCoin.fromPartial(object.transferred) : undefined;
    message.settledAt = object.settledAt !== undefined && object.settledAt !== null ? BigInt(object.settledAt.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.funds = object.funds !== undefined && object.funds !== null ? DecCoin.fromPartial(object.funds) : undefined;
    return message;
  },
  fromAmino(object: AccountAmino): Account {
    const message = createBaseAccount();
    if (object.id !== undefined && object.id !== null) {
      message.id = AccountID.fromAmino(object.id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = DecCoin.fromAmino(object.balance);
    }
    if (object.transferred !== undefined && object.transferred !== null) {
      message.transferred = DecCoin.fromAmino(object.transferred);
    }
    if (object.settled_at !== undefined && object.settled_at !== null) {
      message.settledAt = BigInt(object.settled_at);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    if (object.funds !== undefined && object.funds !== null) {
      message.funds = DecCoin.fromAmino(object.funds);
    }
    return message;
  },
  toAmino(message: Account): AccountAmino {
    const obj: any = {};
    obj.id = message.id ? AccountID.toAmino(message.id) : AccountID.toAmino(AccountID.fromPartial({}));
    obj.owner = message.owner ?? "";
    obj.state = message.state ?? 0;
    obj.balance = message.balance ? DecCoin.toAmino(message.balance) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.transferred = message.transferred ? DecCoin.toAmino(message.transferred) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.settled_at = message.settledAt ? message.settledAt?.toString() : "0";
    obj.depositor = message.depositor ?? "";
    obj.funds = message.funds ? DecCoin.toAmino(message.funds) : DecCoin.toAmino(DecCoin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: AccountAminoMsg): Account {
    return Account.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountProtoMsg): Account {
    return Account.decode(message.value);
  },
  toProto(message: Account): Uint8Array {
    return Account.encode(message).finish();
  },
  toProtoMsg(message: Account): AccountProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1.Account",
      value: Account.encode(message).finish()
    };
  }
};