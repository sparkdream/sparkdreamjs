//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * TagBudgetAward defines the TagBudgetAward message.
 * @name TagBudgetAward
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagBudgetAward
 */
export interface TagBudgetAward {
  id: bigint;
  budgetId: bigint;
  postId: bigint;
  recipient: string;
  amount: string;
  reason: string;
  awardedAt: bigint;
  awardedBy: string;
}
export interface TagBudgetAwardProtoMsg {
  typeUrl: "/sparkdream.rep.v1.TagBudgetAward";
  value: Uint8Array;
}
/**
 * TagBudgetAward defines the TagBudgetAward message.
 * @name TagBudgetAwardAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagBudgetAward
 */
export interface TagBudgetAwardAmino {
  id?: string;
  budget_id?: string;
  post_id?: string;
  recipient?: string;
  amount?: string;
  reason?: string;
  awarded_at?: string;
  awarded_by?: string;
}
export interface TagBudgetAwardAminoMsg {
  type: "/sparkdream.rep.v1.TagBudgetAward";
  value: TagBudgetAwardAmino;
}
function createBaseTagBudgetAward(): TagBudgetAward {
  return {
    id: BigInt(0),
    budgetId: BigInt(0),
    postId: BigInt(0),
    recipient: "",
    amount: "",
    reason: "",
    awardedAt: BigInt(0),
    awardedBy: ""
  };
}
/**
 * TagBudgetAward defines the TagBudgetAward message.
 * @name TagBudgetAward
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.TagBudgetAward
 */
export const TagBudgetAward = {
  typeUrl: "/sparkdream.rep.v1.TagBudgetAward",
  encode(message: TagBudgetAward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.budgetId !== BigInt(0)) {
      writer.uint32(16).uint64(message.budgetId);
    }
    if (message.postId !== BigInt(0)) {
      writer.uint32(24).uint64(message.postId);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.reason !== "") {
      writer.uint32(50).string(message.reason);
    }
    if (message.awardedAt !== BigInt(0)) {
      writer.uint32(56).int64(message.awardedAt);
    }
    if (message.awardedBy !== "") {
      writer.uint32(66).string(message.awardedBy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TagBudgetAward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagBudgetAward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.budgetId = reader.uint64();
          break;
        case 3:
          message.postId = reader.uint64();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.reason = reader.string();
          break;
        case 7:
          message.awardedAt = reader.int64();
          break;
        case 8:
          message.awardedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TagBudgetAward>): TagBudgetAward {
    const message = createBaseTagBudgetAward();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.budgetId = object.budgetId !== undefined && object.budgetId !== null ? BigInt(object.budgetId.toString()) : BigInt(0);
    message.postId = object.postId !== undefined && object.postId !== null ? BigInt(object.postId.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.reason = object.reason ?? "";
    message.awardedAt = object.awardedAt !== undefined && object.awardedAt !== null ? BigInt(object.awardedAt.toString()) : BigInt(0);
    message.awardedBy = object.awardedBy ?? "";
    return message;
  },
  fromAmino(object: TagBudgetAwardAmino): TagBudgetAward {
    const message = createBaseTagBudgetAward();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.budget_id !== undefined && object.budget_id !== null) {
      message.budgetId = BigInt(object.budget_id);
    }
    if (object.post_id !== undefined && object.post_id !== null) {
      message.postId = BigInt(object.post_id);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.awarded_at !== undefined && object.awarded_at !== null) {
      message.awardedAt = BigInt(object.awarded_at);
    }
    if (object.awarded_by !== undefined && object.awarded_by !== null) {
      message.awardedBy = object.awarded_by;
    }
    return message;
  },
  toAmino(message: TagBudgetAward): TagBudgetAwardAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.budget_id = message.budgetId !== BigInt(0) ? message.budgetId?.toString() : undefined;
    obj.post_id = message.postId !== BigInt(0) ? message.postId?.toString() : undefined;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.awarded_at = message.awardedAt !== BigInt(0) ? message.awardedAt?.toString() : undefined;
    obj.awarded_by = message.awardedBy === "" ? undefined : message.awardedBy;
    return obj;
  },
  fromAminoMsg(object: TagBudgetAwardAminoMsg): TagBudgetAward {
    return TagBudgetAward.fromAmino(object.value);
  },
  fromProtoMsg(message: TagBudgetAwardProtoMsg): TagBudgetAward {
    return TagBudgetAward.decode(message.value);
  },
  toProto(message: TagBudgetAward): Uint8Array {
    return TagBudgetAward.encode(message).finish();
  },
  toProtoMsg(message: TagBudgetAward): TagBudgetAwardProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.TagBudgetAward",
      value: TagBudgetAward.encode(message).finish()
    };
  }
};