//@ts-nocheck
import { AccountIdentifier, AccountIdentifierAmino } from "./account";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * GenesisState defines the 27-gmp genesis state
 * @name GenesisState
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.GenesisState
 */
export interface GenesisState {
  /**
   * The list of registered ICS27 accounts
   */
  ics27Accounts: RegisteredICS27Account[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the 27-gmp genesis state
 * @name GenesisStateAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * The list of registered ICS27 accounts
   */
  ics27_accounts?: RegisteredICS27AccountAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/**
 * RegisteredICS27Account contains an account identifier and associated interchain account address
 * @name RegisteredICS27Account
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.RegisteredICS27Account
 */
export interface RegisteredICS27Account {
  /**
   * The address of the ics27 account
   */
  accountAddress: string;
  /**
   * The account identifier
   */
  accountId: AccountIdentifier;
}
export interface RegisteredICS27AccountProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.RegisteredICS27Account";
  value: Uint8Array;
}
/**
 * RegisteredICS27Account contains an account identifier and associated interchain account address
 * @name RegisteredICS27AccountAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.RegisteredICS27Account
 */
export interface RegisteredICS27AccountAmino {
  /**
   * The address of the ics27 account
   */
  account_address?: string;
  /**
   * The account identifier
   */
  account_id?: AccountIdentifierAmino;
}
export interface RegisteredICS27AccountAminoMsg {
  type: "cosmos-sdk/RegisteredICS27Account";
  value: RegisteredICS27AccountAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    ics27Accounts: []
  };
}
/**
 * GenesisState defines the 27-gmp genesis state
 * @name GenesisState
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/ibc.applications.gmp.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ics27Accounts) {
      RegisteredICS27Account.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.ics27Accounts.push(RegisteredICS27Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.ics27Accounts = object.ics27Accounts?.map(e => RegisteredICS27Account.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.ics27Accounts = object.ics27_accounts?.map(e => RegisteredICS27Account.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.ics27Accounts) {
      obj.ics27_accounts = message.ics27Accounts.map(e => e ? RegisteredICS27Account.toAmino(e) : undefined);
    } else {
      obj.ics27_accounts = message.ics27Accounts;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseRegisteredICS27Account(): RegisteredICS27Account {
  return {
    accountAddress: "",
    accountId: AccountIdentifier.fromPartial({})
  };
}
/**
 * RegisteredICS27Account contains an account identifier and associated interchain account address
 * @name RegisteredICS27Account
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.RegisteredICS27Account
 */
export const RegisteredICS27Account = {
  typeUrl: "/ibc.applications.gmp.v1.RegisteredICS27Account",
  aminoType: "cosmos-sdk/RegisteredICS27Account",
  encode(message: RegisteredICS27Account, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.accountId !== undefined) {
      AccountIdentifier.encode(message.accountId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredICS27Account {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredICS27Account();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.accountId = AccountIdentifier.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RegisteredICS27Account>): RegisteredICS27Account {
    const message = createBaseRegisteredICS27Account();
    message.accountAddress = object.accountAddress ?? "";
    message.accountId = object.accountId !== undefined && object.accountId !== null ? AccountIdentifier.fromPartial(object.accountId) : undefined;
    return message;
  },
  fromAmino(object: RegisteredICS27AccountAmino): RegisteredICS27Account {
    const message = createBaseRegisteredICS27Account();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    if (object.account_id !== undefined && object.account_id !== null) {
      message.accountId = AccountIdentifier.fromAmino(object.account_id);
    }
    return message;
  },
  toAmino(message: RegisteredICS27Account): RegisteredICS27AccountAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    obj.account_id = message.accountId ? AccountIdentifier.toAmino(message.accountId) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisteredICS27AccountAminoMsg): RegisteredICS27Account {
    return RegisteredICS27Account.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredICS27Account): RegisteredICS27AccountAminoMsg {
    return {
      type: "cosmos-sdk/RegisteredICS27Account",
      value: RegisteredICS27Account.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisteredICS27AccountProtoMsg): RegisteredICS27Account {
    return RegisteredICS27Account.decode(message.value);
  },
  toProto(message: RegisteredICS27Account): Uint8Array {
    return RegisteredICS27Account.encode(message).finish();
  },
  toProtoMsg(message: RegisteredICS27Account): RegisteredICS27AccountProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.RegisteredICS27Account",
      value: RegisteredICS27Account.encode(message).finish()
    };
  }
};