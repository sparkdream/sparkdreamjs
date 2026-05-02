//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ReservedTag defines a tag reserved by authority (governance or council).
 * Owned by x/rep.
 * @name ReservedTag
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReservedTag
 */
export interface ReservedTag {
  name: string;
  authority: string;
  membersCanUse: boolean;
}
export interface ReservedTagProtoMsg {
  typeUrl: "/sparkdream.rep.v1.ReservedTag";
  value: Uint8Array;
}
/**
 * ReservedTag defines a tag reserved by authority (governance or council).
 * Owned by x/rep.
 * @name ReservedTagAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReservedTag
 */
export interface ReservedTagAmino {
  name?: string;
  authority?: string;
  members_can_use?: boolean;
}
export interface ReservedTagAminoMsg {
  type: "/sparkdream.rep.v1.ReservedTag";
  value: ReservedTagAmino;
}
function createBaseReservedTag(): ReservedTag {
  return {
    name: "",
    authority: "",
    membersCanUse: false
  };
}
/**
 * ReservedTag defines a tag reserved by authority (governance or council).
 * Owned by x/rep.
 * @name ReservedTag
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.ReservedTag
 */
export const ReservedTag = {
  typeUrl: "/sparkdream.rep.v1.ReservedTag",
  encode(message: ReservedTag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    if (message.membersCanUse === true) {
      writer.uint32(24).bool(message.membersCanUse);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReservedTag {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReservedTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.authority = reader.string();
          break;
        case 3:
          message.membersCanUse = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReservedTag>): ReservedTag {
    const message = createBaseReservedTag();
    message.name = object.name ?? "";
    message.authority = object.authority ?? "";
    message.membersCanUse = object.membersCanUse ?? false;
    return message;
  },
  fromAmino(object: ReservedTagAmino): ReservedTag {
    const message = createBaseReservedTag();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.members_can_use !== undefined && object.members_can_use !== null) {
      message.membersCanUse = object.members_can_use;
    }
    return message;
  },
  toAmino(message: ReservedTag): ReservedTagAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.members_can_use = message.membersCanUse === false ? undefined : message.membersCanUse;
    return obj;
  },
  fromAminoMsg(object: ReservedTagAminoMsg): ReservedTag {
    return ReservedTag.fromAmino(object.value);
  },
  fromProtoMsg(message: ReservedTagProtoMsg): ReservedTag {
    return ReservedTag.decode(message.value);
  },
  toProto(message: ReservedTag): Uint8Array {
    return ReservedTag.encode(message).finish();
  },
  toProtoMsg(message: ReservedTag): ReservedTagProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.ReservedTag",
      value: ReservedTag.encode(message).finish()
    };
  }
};