//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * AccountID is the account identifier.
 * @name AccountID
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.AccountID
 */
export interface AccountID {
  /**
   * Scope holds the scope of the account.
   */
  scope: string;
  /**
   * Xid TODO: What is this?
   */
  xid: string;
}
export interface AccountIDProtoMsg {
  typeUrl: "/akash.escrow.v1.AccountID";
  value: Uint8Array;
}
/**
 * AccountID is the account identifier.
 * @name AccountIDAmino
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.AccountID
 */
export interface AccountIDAmino {
  /**
   * Scope holds the scope of the account.
   */
  scope: string;
  /**
   * Xid TODO: What is this?
   */
  xid: string;
}
export interface AccountIDAminoMsg {
  type: "/akash.escrow.v1.AccountID";
  value: AccountIDAmino;
}
function createBaseAccountID(): AccountID {
  return {
    scope: "",
    xid: ""
  };
}
/**
 * AccountID is the account identifier.
 * @name AccountID
 * @package akash.escrow.v1
 * @see proto type: akash.escrow.v1.AccountID
 */
export const AccountID = {
  typeUrl: "/akash.escrow.v1.AccountID",
  encode(message: AccountID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
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
  fromPartial(object: DeepPartial<AccountID>): AccountID {
    const message = createBaseAccountID();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    return message;
  },
  fromAmino(object: AccountIDAmino): AccountID {
    const message = createBaseAccountID();
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = object.scope;
    }
    if (object.xid !== undefined && object.xid !== null) {
      message.xid = object.xid;
    }
    return message;
  },
  toAmino(message: AccountID): AccountIDAmino {
    const obj: any = {};
    obj.scope = message.scope ?? "";
    obj.xid = message.xid ?? "";
    return obj;
  },
  fromAminoMsg(object: AccountIDAminoMsg): AccountID {
    return AccountID.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountIDProtoMsg): AccountID {
    return AccountID.decode(message.value);
  },
  toProto(message: AccountID): Uint8Array {
    return AccountID.encode(message).finish();
  },
  toProtoMsg(message: AccountID): AccountIDProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1.AccountID",
      value: AccountID.encode(message).finish()
    };
  }
};