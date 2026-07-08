//@ts-nocheck
import { Account, AccountAmino } from "../id/v1/id";
import { Deposit, DepositAmino } from "../../base/deposit/v1/deposit";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgAccountDeposit represents a message to deposit funds into an existing escrow account
 * on the blockchain. This is part of the interaction mechanism for managing
 * deployment-related resources.
 * @name MsgAccountDeposit
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.MsgAccountDeposit
 */
export interface MsgAccountDeposit {
  /**
   * Signer is the account bech32 address of the user who wants to deposit into
   * an escrow account. Does not necessarily needs to be an owner of the deployment.
   * It is a string representing a valid bech32 account address.
   * 
   * Example:
   *   "akash1..."
   */
  signer: string;
  /**
   * ID is the unique identifier of the account.
   */
  id: Account;
  /**
   * Deposit contains information about the deposit amount and the source of the deposit to the escrow account.
   */
  deposit: Deposit;
}
export interface MsgAccountDepositProtoMsg {
  typeUrl: "/akash.escrow.v1.MsgAccountDeposit";
  value: Uint8Array;
}
/**
 * MsgAccountDeposit represents a message to deposit funds into an existing escrow account
 * on the blockchain. This is part of the interaction mechanism for managing
 * deployment-related resources.
 * @name MsgAccountDepositAmino
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.MsgAccountDeposit
 */
export interface MsgAccountDepositAmino {
  /**
   * Signer is the account bech32 address of the user who wants to deposit into
   * an escrow account. Does not necessarily needs to be an owner of the deployment.
   * It is a string representing a valid bech32 account address.
   * 
   * Example:
   *   "akash1..."
   */
  signer: string;
  /**
   * ID is the unique identifier of the account.
   */
  id: AccountAmino;
  /**
   * Deposit contains information about the deposit amount and the source of the deposit to the escrow account.
   */
  deposit: DepositAmino;
}
export interface MsgAccountDepositAminoMsg {
  type: "/akash.escrow.v1.MsgAccountDeposit";
  value: MsgAccountDepositAmino;
}
/**
 * MsgAccountDepositResponse defines response type for the MsgDeposit.
 * @name MsgAccountDepositResponse
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.MsgAccountDepositResponse
 */
export interface MsgAccountDepositResponse {}
export interface MsgAccountDepositResponseProtoMsg {
  typeUrl: "/akash.escrow.v1.MsgAccountDepositResponse";
  value: Uint8Array;
}
/**
 * MsgAccountDepositResponse defines response type for the MsgDeposit.
 * @name MsgAccountDepositResponseAmino
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.MsgAccountDepositResponse
 */
export interface MsgAccountDepositResponseAmino {}
export interface MsgAccountDepositResponseAminoMsg {
  type: "/akash.escrow.v1.MsgAccountDepositResponse";
  value: MsgAccountDepositResponseAmino;
}
function createBaseMsgAccountDeposit(): MsgAccountDeposit {
  return {
    signer: "",
    id: Account.fromPartial({}),
    deposit: Deposit.fromPartial({})
  };
}
/**
 * MsgAccountDeposit represents a message to deposit funds into an existing escrow account
 * on the blockchain. This is part of the interaction mechanism for managing
 * deployment-related resources.
 * @name MsgAccountDeposit
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.MsgAccountDeposit
 */
export const MsgAccountDeposit = {
  typeUrl: "/akash.escrow.v1.MsgAccountDeposit",
  encode(message: MsgAccountDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.id !== undefined) {
      Account.encode(message.id, writer.uint32(18).fork()).ldelim();
    }
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAccountDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAccountDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.id = Account.decode(reader, reader.uint32());
          break;
        case 3:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAccountDeposit>): MsgAccountDeposit {
    const message = createBaseMsgAccountDeposit();
    message.signer = object.signer ?? "";
    message.id = object.id !== undefined && object.id !== null ? Account.fromPartial(object.id) : undefined;
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: MsgAccountDepositAmino): MsgAccountDeposit {
    const message = createBaseMsgAccountDeposit();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Account.fromAmino(object.id);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Deposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: MsgAccountDeposit): MsgAccountDepositAmino {
    const obj: any = {};
    obj.signer = message.signer ?? "";
    obj.id = message.id ? Account.toAmino(message.id) : Account.toAmino(Account.fromPartial({}));
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : Deposit.toAmino(Deposit.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgAccountDepositAminoMsg): MsgAccountDeposit {
    return MsgAccountDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAccountDepositProtoMsg): MsgAccountDeposit {
    return MsgAccountDeposit.decode(message.value);
  },
  toProto(message: MsgAccountDeposit): Uint8Array {
    return MsgAccountDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgAccountDeposit): MsgAccountDepositProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1.MsgAccountDeposit",
      value: MsgAccountDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgAccountDepositResponse(): MsgAccountDepositResponse {
  return {};
}
/**
 * MsgAccountDepositResponse defines response type for the MsgDeposit.
 * @name MsgAccountDepositResponse
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.MsgAccountDepositResponse
 */
export const MsgAccountDepositResponse = {
  typeUrl: "/akash.escrow.v1.MsgAccountDepositResponse",
  encode(_: MsgAccountDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAccountDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAccountDepositResponse();
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
  fromPartial(_: DeepPartial<MsgAccountDepositResponse>): MsgAccountDepositResponse {
    const message = createBaseMsgAccountDepositResponse();
    return message;
  },
  fromAmino(_: MsgAccountDepositResponseAmino): MsgAccountDepositResponse {
    const message = createBaseMsgAccountDepositResponse();
    return message;
  },
  toAmino(_: MsgAccountDepositResponse): MsgAccountDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAccountDepositResponseAminoMsg): MsgAccountDepositResponse {
    return MsgAccountDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAccountDepositResponseProtoMsg): MsgAccountDepositResponse {
    return MsgAccountDepositResponse.decode(message.value);
  },
  toProto(message: MsgAccountDepositResponse): Uint8Array {
    return MsgAccountDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAccountDepositResponse): MsgAccountDepositResponseProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1.MsgAccountDepositResponse",
      value: MsgAccountDepositResponse.encode(message).finish()
    };
  }
};