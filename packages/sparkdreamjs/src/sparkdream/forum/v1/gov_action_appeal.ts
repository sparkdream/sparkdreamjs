//@ts-nocheck
import { GovActionType, GovAppealStatus } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GovActionAppeal defines the GovActionAppeal message.
 * @name GovActionAppeal
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.GovActionAppeal
 */
export interface GovActionAppeal {
  id: bigint;
  appellant: string;
  actionType: GovActionType;
  actionTarget: string;
  originalReason: string;
  appealReason: string;
  appealBond: string;
  createdAt: bigint;
  deadline: bigint;
  initiativeId: bigint;
  status: GovAppealStatus;
  originalCategoryId: bigint;
}
export interface GovActionAppealProtoMsg {
  typeUrl: "/sparkdream.forum.v1.GovActionAppeal";
  value: Uint8Array;
}
/**
 * GovActionAppeal defines the GovActionAppeal message.
 * @name GovActionAppealAmino
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.GovActionAppeal
 */
export interface GovActionAppealAmino {
  id?: string;
  appellant?: string;
  action_type?: GovActionType;
  action_target?: string;
  original_reason?: string;
  appeal_reason?: string;
  appeal_bond?: string;
  created_at?: string;
  deadline?: string;
  initiative_id?: string;
  status?: GovAppealStatus;
  original_category_id?: string;
}
export interface GovActionAppealAminoMsg {
  type: "/sparkdream.forum.v1.GovActionAppeal";
  value: GovActionAppealAmino;
}
function createBaseGovActionAppeal(): GovActionAppeal {
  return {
    id: BigInt(0),
    appellant: "",
    actionType: 0,
    actionTarget: "",
    originalReason: "",
    appealReason: "",
    appealBond: "",
    createdAt: BigInt(0),
    deadline: BigInt(0),
    initiativeId: BigInt(0),
    status: 0,
    originalCategoryId: BigInt(0)
  };
}
/**
 * GovActionAppeal defines the GovActionAppeal message.
 * @name GovActionAppeal
 * @package sparkdream.forum.v1
 * @see proto type: sparkdream.forum.v1.GovActionAppeal
 */
export const GovActionAppeal = {
  typeUrl: "/sparkdream.forum.v1.GovActionAppeal",
  encode(message: GovActionAppeal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.appellant !== "") {
      writer.uint32(18).string(message.appellant);
    }
    if (message.actionType !== 0) {
      writer.uint32(24).int32(message.actionType);
    }
    if (message.actionTarget !== "") {
      writer.uint32(34).string(message.actionTarget);
    }
    if (message.originalReason !== "") {
      writer.uint32(42).string(message.originalReason);
    }
    if (message.appealReason !== "") {
      writer.uint32(50).string(message.appealReason);
    }
    if (message.appealBond !== "") {
      writer.uint32(58).string(message.appealBond);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(64).int64(message.createdAt);
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(72).int64(message.deadline);
    }
    if (message.initiativeId !== BigInt(0)) {
      writer.uint32(80).uint64(message.initiativeId);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.originalCategoryId !== BigInt(0)) {
      writer.uint32(96).uint64(message.originalCategoryId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GovActionAppeal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovActionAppeal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.appellant = reader.string();
          break;
        case 3:
          message.actionType = reader.int32() as any;
          break;
        case 4:
          message.actionTarget = reader.string();
          break;
        case 5:
          message.originalReason = reader.string();
          break;
        case 6:
          message.appealReason = reader.string();
          break;
        case 7:
          message.appealBond = reader.string();
          break;
        case 8:
          message.createdAt = reader.int64();
          break;
        case 9:
          message.deadline = reader.int64();
          break;
        case 10:
          message.initiativeId = reader.uint64();
          break;
        case 11:
          message.status = reader.int32() as any;
          break;
        case 12:
          message.originalCategoryId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GovActionAppeal>): GovActionAppeal {
    const message = createBaseGovActionAppeal();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.appellant = object.appellant ?? "";
    message.actionType = object.actionType ?? 0;
    message.actionTarget = object.actionTarget ?? "";
    message.originalReason = object.originalReason ?? "";
    message.appealReason = object.appealReason ?? "";
    message.appealBond = object.appealBond ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.initiativeId = object.initiativeId !== undefined && object.initiativeId !== null ? BigInt(object.initiativeId.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    message.originalCategoryId = object.originalCategoryId !== undefined && object.originalCategoryId !== null ? BigInt(object.originalCategoryId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GovActionAppealAmino): GovActionAppeal {
    const message = createBaseGovActionAppeal();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.appellant !== undefined && object.appellant !== null) {
      message.appellant = object.appellant;
    }
    if (object.action_type !== undefined && object.action_type !== null) {
      message.actionType = object.action_type;
    }
    if (object.action_target !== undefined && object.action_target !== null) {
      message.actionTarget = object.action_target;
    }
    if (object.original_reason !== undefined && object.original_reason !== null) {
      message.originalReason = object.original_reason;
    }
    if (object.appeal_reason !== undefined && object.appeal_reason !== null) {
      message.appealReason = object.appeal_reason;
    }
    if (object.appeal_bond !== undefined && object.appeal_bond !== null) {
      message.appealBond = object.appeal_bond;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = BigInt(object.deadline);
    }
    if (object.initiative_id !== undefined && object.initiative_id !== null) {
      message.initiativeId = BigInt(object.initiative_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.original_category_id !== undefined && object.original_category_id !== null) {
      message.originalCategoryId = BigInt(object.original_category_id);
    }
    return message;
  },
  toAmino(message: GovActionAppeal): GovActionAppealAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.appellant = message.appellant === "" ? undefined : message.appellant;
    obj.action_type = message.actionType === 0 ? undefined : message.actionType;
    obj.action_target = message.actionTarget === "" ? undefined : message.actionTarget;
    obj.original_reason = message.originalReason === "" ? undefined : message.originalReason;
    obj.appeal_reason = message.appealReason === "" ? undefined : message.appealReason;
    obj.appeal_bond = message.appealBond === "" ? undefined : message.appealBond;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.deadline = message.deadline !== BigInt(0) ? message.deadline?.toString() : undefined;
    obj.initiative_id = message.initiativeId !== BigInt(0) ? message.initiativeId?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.original_category_id = message.originalCategoryId !== BigInt(0) ? message.originalCategoryId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GovActionAppealAminoMsg): GovActionAppeal {
    return GovActionAppeal.fromAmino(object.value);
  },
  fromProtoMsg(message: GovActionAppealProtoMsg): GovActionAppeal {
    return GovActionAppeal.decode(message.value);
  },
  toProto(message: GovActionAppeal): Uint8Array {
    return GovActionAppeal.encode(message).finish();
  },
  toProtoMsg(message: GovActionAppeal): GovActionAppealProtoMsg {
    return {
      typeUrl: "/sparkdream.forum.v1.GovActionAppeal",
      value: GovActionAppeal.encode(message).finish()
    };
  }
};