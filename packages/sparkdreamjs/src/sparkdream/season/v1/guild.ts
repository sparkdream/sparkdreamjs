//@ts-nocheck
import { GuildStatus } from "./enums";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Guild represents a member-created social group.
 * @name Guild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Guild
 */
export interface Guild {
  /**
   * Auto-incremented guild ID
   */
  id: bigint;
  /**
   * Guild name (unique)
   */
  name: string;
  /**
   * Guild description
   */
  description: string;
  /**
   * Founder address
   */
  founder: string;
  /**
   * Block when the guild was created
   */
  createdBlock: bigint;
  /**
   * Whether the guild is invite-only
   */
  inviteOnly: boolean;
  /**
   * Guild status (active, frozen, dissolved)
   */
  status: GuildStatus;
  /**
   * Guild officers (can invite and kick members)
   */
  officers: string[];
  /**
   * Pending invites (member addresses)
   */
  pendingInvites: string[];
}
export interface GuildProtoMsg {
  typeUrl: "/sparkdream.season.v1.Guild";
  value: Uint8Array;
}
/**
 * Guild represents a member-created social group.
 * @name GuildAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Guild
 */
export interface GuildAmino {
  /**
   * Auto-incremented guild ID
   */
  id?: string;
  /**
   * Guild name (unique)
   */
  name?: string;
  /**
   * Guild description
   */
  description?: string;
  /**
   * Founder address
   */
  founder?: string;
  /**
   * Block when the guild was created
   */
  created_block?: string;
  /**
   * Whether the guild is invite-only
   */
  invite_only?: boolean;
  /**
   * Guild status (active, frozen, dissolved)
   */
  status?: GuildStatus;
  /**
   * Guild officers (can invite and kick members)
   */
  officers?: string[];
  /**
   * Pending invites (member addresses)
   */
  pending_invites?: string[];
}
export interface GuildAminoMsg {
  type: "/sparkdream.season.v1.Guild";
  value: GuildAmino;
}
function createBaseGuild(): Guild {
  return {
    id: BigInt(0),
    name: "",
    description: "",
    founder: "",
    createdBlock: BigInt(0),
    inviteOnly: false,
    status: 0,
    officers: [],
    pendingInvites: []
  };
}
/**
 * Guild represents a member-created social group.
 * @name Guild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Guild
 */
export const Guild = {
  typeUrl: "/sparkdream.season.v1.Guild",
  encode(message: Guild, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.founder !== "") {
      writer.uint32(34).string(message.founder);
    }
    if (message.createdBlock !== BigInt(0)) {
      writer.uint32(40).int64(message.createdBlock);
    }
    if (message.inviteOnly === true) {
      writer.uint32(48).bool(message.inviteOnly);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    for (const v of message.officers) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.pendingInvites) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Guild {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.founder = reader.string();
          break;
        case 5:
          message.createdBlock = reader.int64();
          break;
        case 6:
          message.inviteOnly = reader.bool();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.officers.push(reader.string());
          break;
        case 9:
          message.pendingInvites.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Guild>): Guild {
    const message = createBaseGuild();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.founder = object.founder ?? "";
    message.createdBlock = object.createdBlock !== undefined && object.createdBlock !== null ? BigInt(object.createdBlock.toString()) : BigInt(0);
    message.inviteOnly = object.inviteOnly ?? false;
    message.status = object.status ?? 0;
    message.officers = object.officers?.map(e => e) || [];
    message.pendingInvites = object.pendingInvites?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GuildAmino): Guild {
    const message = createBaseGuild();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.founder !== undefined && object.founder !== null) {
      message.founder = object.founder;
    }
    if (object.created_block !== undefined && object.created_block !== null) {
      message.createdBlock = BigInt(object.created_block);
    }
    if (object.invite_only !== undefined && object.invite_only !== null) {
      message.inviteOnly = object.invite_only;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    message.officers = object.officers?.map(e => e) || [];
    message.pendingInvites = object.pending_invites?.map(e => e) || [];
    return message;
  },
  toAmino(message: Guild): GuildAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.founder = message.founder === "" ? undefined : message.founder;
    obj.created_block = message.createdBlock !== BigInt(0) ? message.createdBlock?.toString() : undefined;
    obj.invite_only = message.inviteOnly === false ? undefined : message.inviteOnly;
    obj.status = message.status === 0 ? undefined : message.status;
    if (message.officers) {
      obj.officers = message.officers.map(e => e);
    } else {
      obj.officers = message.officers;
    }
    if (message.pendingInvites) {
      obj.pending_invites = message.pendingInvites.map(e => e);
    } else {
      obj.pending_invites = message.pendingInvites;
    }
    return obj;
  },
  fromAminoMsg(object: GuildAminoMsg): Guild {
    return Guild.fromAmino(object.value);
  },
  fromProtoMsg(message: GuildProtoMsg): Guild {
    return Guild.decode(message.value);
  },
  toProto(message: Guild): Uint8Array {
    return Guild.encode(message).finish();
  },
  toProtoMsg(message: Guild): GuildProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.Guild",
      value: Guild.encode(message).finish()
    };
  }
};