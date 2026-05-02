//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * TagBudget defines the TagBudget message.
 * @name TagBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagBudget
 */
export interface TagBudget {
  id: bigint;
  groupAccount: string;
  tag: string;
  poolBalance: string;
  membersOnly: boolean;
  createdAt: bigint;
  active: boolean;
}
export interface TagBudgetProtoMsg {
  typeUrl: "/sparkdream.rep.v1.TagBudget";
  value: Uint8Array;
}
/**
 * TagBudget defines the TagBudget message.
 * @name TagBudgetAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagBudget
 */
export interface TagBudgetAmino {
  id?: string;
  group_account?: string;
  tag?: string;
  pool_balance?: string;
  members_only?: boolean;
  created_at?: string;
  active?: boolean;
}
export interface TagBudgetAminoMsg {
  type: "/sparkdream.rep.v1.TagBudget";
  value: TagBudgetAmino;
}
function createBaseTagBudget(): TagBudget {
  return {
    id: BigInt(0),
    groupAccount: "",
    tag: "",
    poolBalance: "",
    membersOnly: false,
    createdAt: BigInt(0),
    active: false
  };
}
/**
 * TagBudget defines the TagBudget message.
 * @name TagBudget
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagBudget
 */
export const TagBudget = {
  typeUrl: "/sparkdream.rep.v1.TagBudget",
  encode(message: TagBudget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.groupAccount !== "") {
      writer.uint32(18).string(message.groupAccount);
    }
    if (message.tag !== "") {
      writer.uint32(26).string(message.tag);
    }
    if (message.poolBalance !== "") {
      writer.uint32(34).string(message.poolBalance);
    }
    if (message.membersOnly === true) {
      writer.uint32(40).bool(message.membersOnly);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(48).int64(message.createdAt);
    }
    if (message.active === true) {
      writer.uint32(56).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TagBudget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagBudget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.groupAccount = reader.string();
          break;
        case 3:
          message.tag = reader.string();
          break;
        case 4:
          message.poolBalance = reader.string();
          break;
        case 5:
          message.membersOnly = reader.bool();
          break;
        case 6:
          message.createdAt = reader.int64();
          break;
        case 7:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TagBudget>): TagBudget {
    const message = createBaseTagBudget();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.groupAccount = object.groupAccount ?? "";
    message.tag = object.tag ?? "";
    message.poolBalance = object.poolBalance ?? "";
    message.membersOnly = object.membersOnly ?? false;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: TagBudgetAmino): TagBudget {
    const message = createBaseTagBudget();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.group_account !== undefined && object.group_account !== null) {
      message.groupAccount = object.group_account;
    }
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    if (object.pool_balance !== undefined && object.pool_balance !== null) {
      message.poolBalance = object.pool_balance;
    }
    if (object.members_only !== undefined && object.members_only !== null) {
      message.membersOnly = object.members_only;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: TagBudget): TagBudgetAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.group_account = message.groupAccount === "" ? undefined : message.groupAccount;
    obj.tag = message.tag === "" ? undefined : message.tag;
    obj.pool_balance = message.poolBalance === "" ? undefined : message.poolBalance;
    obj.members_only = message.membersOnly === false ? undefined : message.membersOnly;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: TagBudgetAminoMsg): TagBudget {
    return TagBudget.fromAmino(object.value);
  },
  fromProtoMsg(message: TagBudgetProtoMsg): TagBudget {
    return TagBudget.decode(message.value);
  },
  toProto(message: TagBudget): Uint8Array {
    return TagBudget.encode(message).finish();
  },
  toProtoMsg(message: TagBudget): TagBudgetProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.TagBudget",
      value: TagBudget.encode(message).finish()
    };
  }
};