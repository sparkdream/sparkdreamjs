//@ts-nocheck
import { State } from "./state";
import { DecCoin, DecCoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { Balance, BalanceAmino } from "./balance";
import { Depositor, DepositorAmino } from "./deposit";
import { Account as Account1 } from "../../id/v1/id";
import { AccountAmino as Account1Amino } from "../../id/v1/id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Account stores state for an escrow account.
 * @name AccountState
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.AccountState
 */
export interface AccountState {
  /**
   * Owner is the account bech32 address of the user who owns the deployment.
   * It is a string representing a valid bech32 account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * State represents the current state of an Account.
   */
  state: State;
  /**
   * Transferred total coins spent by this account.
   */
  transferred: DecCoin[];
  /**
   * SettledAt represents the block height at which this account was last settled.
   */
  settledAt: bigint;
  /**
   * Funds holds the unspent coins received from all deposits
   */
  funds: Balance[];
  deposits: Depositor[];
}
export interface AccountStateProtoMsg {
  typeUrl: "/akash.escrow.types.v1.AccountState";
  value: Uint8Array;
}
/**
 * Account stores state for an escrow account.
 * @name AccountStateAmino
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.AccountState
 */
export interface AccountStateAmino {
  /**
   * Owner is the account bech32 address of the user who owns the deployment.
   * It is a string representing a valid bech32 account address.
   * 
   * Example:
   *   "akash1..."
   */
  owner: string;
  /**
   * State represents the current state of an Account.
   */
  state: State;
  /**
   * Transferred total coins spent by this account.
   */
  transferred: DecCoinAmino[];
  /**
   * SettledAt represents the block height at which this account was last settled.
   */
  settled_at: string;
  /**
   * Funds holds the unspent coins received from all deposits
   */
  funds: BalanceAmino[];
  deposits: DepositorAmino[];
}
export interface AccountStateAminoMsg {
  type: "/akash.escrow.types.v1.AccountState";
  value: AccountStateAmino;
}
/**
 * Account
 * @name Account
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.Account
 */
export interface Account {
  id: Account1;
  state: AccountState;
}
export interface AccountProtoMsg {
  typeUrl: "/akash.escrow.types.v1.Account";
  value: Uint8Array;
}
/**
 * Account
 * @name AccountAmino
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.Account
 */
export interface AccountAmino {
  id: Account1Amino;
  state: AccountStateAmino;
}
export interface AccountAminoMsg {
  type: "/akash.escrow.types.v1.Account";
  value: AccountAmino;
}
function createBaseAccountState(): AccountState {
  return {
    owner: "",
    state: 0,
    transferred: [],
    settledAt: BigInt(0),
    funds: [],
    deposits: []
  };
}
/**
 * Account stores state for an escrow account.
 * @name AccountState
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.AccountState
 */
export const AccountState = {
  typeUrl: "/akash.escrow.types.v1.AccountState",
  encode(message: AccountState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    for (const v of message.transferred) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.settledAt !== BigInt(0)) {
      writer.uint32(32).int64(message.settledAt);
    }
    for (const v of message.funds) {
      Balance.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.deposits) {
      Depositor.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountState();
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
          message.transferred.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.settledAt = reader.int64();
          break;
        case 5:
          message.funds.push(Balance.decode(reader, reader.uint32()));
          break;
        case 6:
          message.deposits.push(Depositor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AccountState>): AccountState {
    const message = createBaseAccountState();
    message.owner = object.owner ?? "";
    message.state = object.state ?? 0;
    message.transferred = object.transferred?.map(e => DecCoin.fromPartial(e)) || [];
    message.settledAt = object.settledAt !== undefined && object.settledAt !== null ? BigInt(object.settledAt.toString()) : BigInt(0);
    message.funds = object.funds?.map(e => Balance.fromPartial(e)) || [];
    message.deposits = object.deposits?.map(e => Depositor.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AccountStateAmino): AccountState {
    const message = createBaseAccountState();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    message.transferred = object.transferred?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.settled_at !== undefined && object.settled_at !== null) {
      message.settledAt = BigInt(object.settled_at);
    }
    message.funds = object.funds?.map(e => Balance.fromAmino(e)) || [];
    message.deposits = object.deposits?.map(e => Depositor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountState): AccountStateAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.state = message.state ?? 0;
    if (message.transferred) {
      obj.transferred = message.transferred.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.transferred = message.transferred;
    }
    obj.settled_at = message.settledAt ? message.settledAt?.toString() : "0";
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Balance.toAmino(e) : undefined);
    } else {
      obj.funds = message.funds;
    }
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Depositor.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    return obj;
  },
  fromAminoMsg(object: AccountStateAminoMsg): AccountState {
    return AccountState.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountStateProtoMsg): AccountState {
    return AccountState.decode(message.value);
  },
  toProto(message: AccountState): Uint8Array {
    return AccountState.encode(message).finish();
  },
  toProtoMsg(message: AccountState): AccountStateProtoMsg {
    return {
      typeUrl: "/akash.escrow.types.v1.AccountState",
      value: AccountState.encode(message).finish()
    };
  }
};
function createBaseAccount(): Account {
  return {
    id: Account1.fromPartial({}),
    state: AccountState.fromPartial({})
  };
}
/**
 * Account
 * @name Account
 * @package akash.escrow.types.v1
 * @see proto type: akash.escrow.types.v1.Account
 */
export const Account = {
  typeUrl: "/akash.escrow.types.v1.Account",
  encode(message: Account, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      Account1.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      AccountState.encode(message.state, writer.uint32(18).fork()).ldelim();
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
          message.id = Account1.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = AccountState.decode(reader, reader.uint32());
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
    message.id = object.id !== undefined && object.id !== null ? Account1.fromPartial(object.id) : undefined;
    message.state = object.state !== undefined && object.state !== null ? AccountState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: AccountAmino): Account {
    const message = createBaseAccount();
    if (object.id !== undefined && object.id !== null) {
      message.id = Account1.fromAmino(object.id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = AccountState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: Account): AccountAmino {
    const obj: any = {};
    obj.id = message.id ? Account1.toAmino(message.id) : Account1.toAmino(Account1.fromPartial({}));
    obj.state = message.state ? AccountState.toAmino(message.state) : AccountState.toAmino(AccountState.fromPartial({}));
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
      typeUrl: "/akash.escrow.types.v1.Account",
      value: Account.encode(message).finish()
    };
  }
};