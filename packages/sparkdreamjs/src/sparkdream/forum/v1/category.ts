//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Category defines the Category message.
 * @name Category
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Category
 */
export interface Category {
  categoryId: bigint;
  title: string;
  description: string;
  membersOnlyWrite: boolean;
  adminOnlyWrite: boolean;
}
export interface CategoryProtoMsg {
  typeUrl: "/sparkdream.forum.v1.Category";
  value: Uint8Array;
}
/**
 * Category defines the Category message.
 * @name CategoryAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Category
 */
export interface CategoryAmino {
  category_id?: string;
  title?: string;
  description?: string;
  members_only_write?: boolean;
  admin_only_write?: boolean;
}
export interface CategoryAminoMsg {
  type: "/sparkdream.forum.v1.Category";
  value: CategoryAmino;
}
function createBaseCategory(): Category {
  return {
    categoryId: BigInt(0),
    title: "",
    description: "",
    membersOnlyWrite: false,
    adminOnlyWrite: false
  };
}
/**
 * Category defines the Category message.
 * @name Category
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.Category
 */
export const Category = {
  typeUrl: "/sparkdream.forum.v1.Category",
  encode(message: Category, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.categoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.categoryId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.membersOnlyWrite === true) {
      writer.uint32(32).bool(message.membersOnlyWrite);
    }
    if (message.adminOnlyWrite === true) {
      writer.uint32(40).bool(message.adminOnlyWrite);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Category {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryId = reader.uint64();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.membersOnlyWrite = reader.bool();
          break;
        case 5:
          message.adminOnlyWrite = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Category>): Category {
    const message = createBaseCategory();
    message.categoryId = object.categoryId !== undefined && object.categoryId !== null ? BigInt(object.categoryId.toString()) : BigInt(0);
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.membersOnlyWrite = object.membersOnlyWrite ?? false;
    message.adminOnlyWrite = object.adminOnlyWrite ?? false;
    return message;
  },
  fromAmino(object: CategoryAmino): Category {
    const message = createBaseCategory();
    if (object.category_id !== undefined && object.category_id !== null) {
      message.categoryId = BigInt(object.category_id);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.members_only_write !== undefined && object.members_only_write !== null) {
      message.membersOnlyWrite = object.members_only_write;
    }
    if (object.admin_only_write !== undefined && object.admin_only_write !== null) {
      message.adminOnlyWrite = object.admin_only_write;
    }
    return message;
  },
  toAmino(message: Category): CategoryAmino {
    const obj: any = {};
    obj.category_id = message.categoryId !== BigInt(0) ? message.categoryId?.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.members_only_write = message.membersOnlyWrite === false ? undefined : message.membersOnlyWrite;
    obj.admin_only_write = message.adminOnlyWrite === false ? undefined : message.adminOnlyWrite;
    return obj;
  },
  fromAminoMsg(object: CategoryAminoMsg): Category {
    return Category.fromAmino(object.value);
  },
  fromProtoMsg(message: CategoryProtoMsg): Category {
    return Category.decode(message.value);
  },
  toProto(message: Category): Uint8Array {
    return Category.encode(message).finish();
  },
  toProtoMsg(message: Category): CategoryProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.Category",
      value: Category.encode(message).finish()
    };
  }
};