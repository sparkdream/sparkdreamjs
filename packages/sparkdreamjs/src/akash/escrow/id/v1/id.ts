//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** Scope is an enum which refers to the account scope */
export enum Scope {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state. */
  invalid = 0,
  /** deployment - DeploymentActive denotes state for deployment active. */
  deployment = 1,
  /** bid - DeploymentClosed denotes state for deployment closed. */
  bid = 2,
  UNRECOGNIZED = -1,
}
export const ScopeAmino = Scope;
export function scopeFromJSON(object: any): Scope {
  switch (object) {
    case 0:
    case "invalid":
      return Scope.invalid;
    case 1:
    case "deployment":
      return Scope.deployment;
    case 2:
    case "bid":
      return Scope.bid;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Scope.UNRECOGNIZED;
  }
}
export function scopeToJSON(object: Scope): string {
  switch (object) {
    case Scope.invalid:
      return "invalid";
    case Scope.deployment:
      return "deployment";
    case Scope.bid:
      return "bid";
    case Scope.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Account is the account identifier.
 * @name Account
 * @package akash.escrow.id.v1
 * @see proto type: akash.escrow.id.v1.Account
 */
export interface Account {
  scope: Scope;
  xid: string;
}
export interface AccountProtoMsg {
  typeUrl: "/akash.escrow.id.v1.Account";
  value: Uint8Array;
}
/**
 * Account is the account identifier.
 * @name AccountAmino
 * @package akash.escrow.id.v1
 * @see proto type: akash.escrow.id.v1.Account
 */
export interface AccountAmino {
  scope: Scope;
  xid: string;
}
export interface AccountAminoMsg {
  type: "/akash.escrow.id.v1.Account";
  value: AccountAmino;
}
/**
 * Payment is the payment identifier.
 * @name Payment
 * @package akash.escrow.id.v1
 * @see proto type: akash.escrow.id.v1.Payment
 */
export interface Payment {
  aid: Account;
  xid: string;
}
export interface PaymentProtoMsg {
  typeUrl: "/akash.escrow.id.v1.Payment";
  value: Uint8Array;
}
/**
 * Payment is the payment identifier.
 * @name PaymentAmino
 * @package akash.escrow.id.v1
 * @see proto type: akash.escrow.id.v1.Payment
 */
export interface PaymentAmino {
  aid: AccountAmino;
  xid: string;
}
export interface PaymentAminoMsg {
  type: "/akash.escrow.id.v1.Payment";
  value: PaymentAmino;
}
function createBaseAccount(): Account {
  return {
    scope: 0,
    xid: ""
  };
}
/**
 * Account is the account identifier.
 * @name Account
 * @package akash.escrow.id.v1
 * @see proto type: akash.escrow.id.v1.Account
 */
export const Account = {
  typeUrl: "/akash.escrow.id.v1.Account",
  encode(message: Account, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scope !== 0) {
      writer.uint32(8).int32(message.scope);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
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
          message.scope = reader.int32() as any;
          break;
        case 2:
          message.xid = reader.string();
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
    message.scope = object.scope ?? 0;
    message.xid = object.xid ?? "";
    return message;
  },
  fromAmino(object: AccountAmino): Account {
    const message = createBaseAccount();
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = object.scope;
    }
    if (object.xid !== undefined && object.xid !== null) {
      message.xid = object.xid;
    }
    return message;
  },
  toAmino(message: Account): AccountAmino {
    const obj: any = {};
    obj.scope = message.scope ?? 0;
    obj.xid = message.xid ?? "";
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
      typeUrl: "/akash.escrow.id.v1.Account",
      value: Account.encode(message).finish()
    };
  }
};
function createBasePayment(): Payment {
  return {
    aid: Account.fromPartial({}),
    xid: ""
  };
}
/**
 * Payment is the payment identifier.
 * @name Payment
 * @package akash.escrow.id.v1
 * @see proto type: akash.escrow.id.v1.Payment
 */
export const Payment = {
  typeUrl: "/akash.escrow.id.v1.Payment",
  encode(message: Payment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aid !== undefined) {
      Account.encode(message.aid, writer.uint32(10).fork()).ldelim();
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
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
          message.aid = Account.decode(reader, reader.uint32());
          break;
        case 2:
          message.xid = reader.string();
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
    message.aid = object.aid !== undefined && object.aid !== null ? Account.fromPartial(object.aid) : undefined;
    message.xid = object.xid ?? "";
    return message;
  },
  fromAmino(object: PaymentAmino): Payment {
    const message = createBasePayment();
    if (object.aid !== undefined && object.aid !== null) {
      message.aid = Account.fromAmino(object.aid);
    }
    if (object.xid !== undefined && object.xid !== null) {
      message.xid = object.xid;
    }
    return message;
  },
  toAmino(message: Payment): PaymentAmino {
    const obj: any = {};
    obj.aid = message.aid ? Account.toAmino(message.aid) : Account.toAmino(Account.fromPartial({}));
    obj.xid = message.xid ?? "";
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
      typeUrl: "/akash.escrow.id.v1.Payment",
      value: Payment.encode(message).finish()
    };
  }
};