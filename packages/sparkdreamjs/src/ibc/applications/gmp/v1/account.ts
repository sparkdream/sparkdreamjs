//@ts-nocheck
import { Any, AnyAmino } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * AccountIdentifier is used to identify a ICS27 account.
 * @name AccountIdentifier
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.AccountIdentifier
 */
export interface AccountIdentifier {
  /**
   * The (local) client identifier
   */
  clientId: string;
  /**
   * The sender of the packet
   */
  sender: string;
  /**
   * The salt of the packet
   */
  salt: Uint8Array;
}
export interface AccountIdentifierProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.AccountIdentifier";
  value: Uint8Array;
}
/**
 * AccountIdentifier is used to identify a ICS27 account.
 * @name AccountIdentifierAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.AccountIdentifier
 */
export interface AccountIdentifierAmino {
  /**
   * The (local) client identifier
   */
  client_id?: string;
  /**
   * The sender of the packet
   */
  sender?: string;
  /**
   * The salt of the packet
   */
  salt?: string;
}
export interface AccountIdentifierAminoMsg {
  type: "cosmos-sdk/AccountIdentifier";
  value: AccountIdentifierAmino;
}
/**
 * An ICS27Account is defined as a BaseAccount & the account identifier
 * @name ICS27Account
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.ICS27Account
 */
export interface ICS27Account {
  address: string;
  accountId?: AccountIdentifier;
}
export interface ICS27AccountProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.ICS27Account";
  value: Uint8Array;
}
/**
 * An ICS27Account is defined as a BaseAccount & the account identifier
 * @name ICS27AccountAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.ICS27Account
 */
export interface ICS27AccountAmino {
  address?: string;
  account_id?: AccountIdentifierAmino;
}
export interface ICS27AccountAminoMsg {
  type: "cosmos-sdk/ICS27Account";
  value: ICS27AccountAmino;
}
/**
 * CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain.
 * @name CosmosTx
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.CosmosTx
 */
export interface CosmosTx {
  messages: Any[];
}
export interface CosmosTxProtoMsg {
  typeUrl: "/ibc.applications.gmp.v1.CosmosTx";
  value: Uint8Array;
}
/**
 * CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain.
 * @name CosmosTxAmino
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.CosmosTx
 */
export interface CosmosTxAmino {
  messages?: AnyAmino[];
}
export interface CosmosTxAminoMsg {
  type: "cosmos-sdk/CosmosTx";
  value: CosmosTxAmino;
}
function createBaseAccountIdentifier(): AccountIdentifier {
  return {
    clientId: "",
    sender: "",
    salt: new Uint8Array()
  };
}
/**
 * AccountIdentifier is used to identify a ICS27 account.
 * @name AccountIdentifier
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.AccountIdentifier
 */
export const AccountIdentifier = {
  typeUrl: "/ibc.applications.gmp.v1.AccountIdentifier",
  aminoType: "cosmos-sdk/AccountIdentifier",
  encode(message: AccountIdentifier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.salt.length !== 0) {
      writer.uint32(26).bytes(message.salt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountIdentifier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountIdentifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.salt = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AccountIdentifier>): AccountIdentifier {
    const message = createBaseAccountIdentifier();
    message.clientId = object.clientId ?? "";
    message.sender = object.sender ?? "";
    message.salt = object.salt ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AccountIdentifierAmino): AccountIdentifier {
    const message = createBaseAccountIdentifier();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = bytesFromBase64(object.salt);
    }
    return message;
  },
  toAmino(message: AccountIdentifier): AccountIdentifierAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccountIdentifierAminoMsg): AccountIdentifier {
    return AccountIdentifier.fromAmino(object.value);
  },
  toAminoMsg(message: AccountIdentifier): AccountIdentifierAminoMsg {
    return {
      type: "cosmos-sdk/AccountIdentifier",
      value: AccountIdentifier.toAmino(message)
    };
  },
  fromProtoMsg(message: AccountIdentifierProtoMsg): AccountIdentifier {
    return AccountIdentifier.decode(message.value);
  },
  toProto(message: AccountIdentifier): Uint8Array {
    return AccountIdentifier.encode(message).finish();
  },
  toProtoMsg(message: AccountIdentifier): AccountIdentifierProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.AccountIdentifier",
      value: AccountIdentifier.encode(message).finish()
    };
  }
};
function createBaseICS27Account(): ICS27Account {
  return {
    address: "",
    accountId: undefined
  };
}
/**
 * An ICS27Account is defined as a BaseAccount & the account identifier
 * @name ICS27Account
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.ICS27Account
 */
export const ICS27Account = {
  typeUrl: "/ibc.applications.gmp.v1.ICS27Account",
  aminoType: "cosmos-sdk/ICS27Account",
  encode(message: ICS27Account, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.accountId !== undefined) {
      AccountIdentifier.encode(message.accountId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ICS27Account {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICS27Account();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: DeepPartial<ICS27Account>): ICS27Account {
    const message = createBaseICS27Account();
    message.address = object.address ?? "";
    message.accountId = object.accountId !== undefined && object.accountId !== null ? AccountIdentifier.fromPartial(object.accountId) : undefined;
    return message;
  },
  fromAmino(object: ICS27AccountAmino): ICS27Account {
    const message = createBaseICS27Account();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.account_id !== undefined && object.account_id !== null) {
      message.accountId = AccountIdentifier.fromAmino(object.account_id);
    }
    return message;
  },
  toAmino(message: ICS27Account): ICS27AccountAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.account_id = message.accountId ? AccountIdentifier.toAmino(message.accountId) : undefined;
    return obj;
  },
  fromAminoMsg(object: ICS27AccountAminoMsg): ICS27Account {
    return ICS27Account.fromAmino(object.value);
  },
  toAminoMsg(message: ICS27Account): ICS27AccountAminoMsg {
    return {
      type: "cosmos-sdk/ICS27Account",
      value: ICS27Account.toAmino(message)
    };
  },
  fromProtoMsg(message: ICS27AccountProtoMsg): ICS27Account {
    return ICS27Account.decode(message.value);
  },
  toProto(message: ICS27Account): Uint8Array {
    return ICS27Account.encode(message).finish();
  },
  toProtoMsg(message: ICS27Account): ICS27AccountProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.ICS27Account",
      value: ICS27Account.encode(message).finish()
    };
  }
};
function createBaseCosmosTx(): CosmosTx {
  return {
    messages: []
  };
}
/**
 * CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain.
 * @name CosmosTx
 * @package ibc.applications.gmp.v1
 * @see proto type: ibc.applications.gmp.v1.CosmosTx
 */
export const CosmosTx = {
  typeUrl: "/ibc.applications.gmp.v1.CosmosTx",
  aminoType: "cosmos-sdk/CosmosTx",
  encode(message: CosmosTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CosmosTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmosTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CosmosTx>): CosmosTx {
    const message = createBaseCosmosTx();
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CosmosTxAmino): CosmosTx {
    const message = createBaseCosmosTx();
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CosmosTx): CosmosTxAmino {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = message.messages;
    }
    return obj;
  },
  fromAminoMsg(object: CosmosTxAminoMsg): CosmosTx {
    return CosmosTx.fromAmino(object.value);
  },
  toAminoMsg(message: CosmosTx): CosmosTxAminoMsg {
    return {
      type: "cosmos-sdk/CosmosTx",
      value: CosmosTx.toAmino(message)
    };
  },
  fromProtoMsg(message: CosmosTxProtoMsg): CosmosTx {
    return CosmosTx.decode(message.value);
  },
  toProto(message: CosmosTx): Uint8Array {
    return CosmosTx.encode(message).finish();
  },
  toProtoMsg(message: CosmosTx): CosmosTxProtoMsg {
    return {
      typeUrl: "/ibc.applications.gmp.v1.CosmosTx",
      value: CosmosTx.encode(message).finish()
    };
  }
};