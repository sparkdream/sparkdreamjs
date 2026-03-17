//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GuildInvite defines the GuildInvite message.
 * @name GuildInvite
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.GuildInvite
 */
export interface GuildInvite {
  guildInvitee: string;
  inviter: string;
  createdEpoch: bigint;
  expiresEpoch: bigint;
}
export interface GuildInviteProtoMsg {
  typeUrl: "/sparkdream.season.v1.GuildInvite";
  value: Uint8Array;
}
/**
 * GuildInvite defines the GuildInvite message.
 * @name GuildInviteAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.GuildInvite
 */
export interface GuildInviteAmino {
  guild_invitee?: string;
  inviter?: string;
  created_epoch?: string;
  expires_epoch?: string;
}
export interface GuildInviteAminoMsg {
  type: "/sparkdream.season.v1.GuildInvite";
  value: GuildInviteAmino;
}
function createBaseGuildInvite(): GuildInvite {
  return {
    guildInvitee: "",
    inviter: "",
    createdEpoch: BigInt(0),
    expiresEpoch: BigInt(0)
  };
}
/**
 * GuildInvite defines the GuildInvite message.
 * @name GuildInvite
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.GuildInvite
 */
export const GuildInvite = {
  typeUrl: "/sparkdream.season.v1.GuildInvite",
  encode(message: GuildInvite, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.guildInvitee !== "") {
      writer.uint32(10).string(message.guildInvitee);
    }
    if (message.inviter !== "") {
      writer.uint32(18).string(message.inviter);
    }
    if (message.createdEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.createdEpoch);
    }
    if (message.expiresEpoch !== BigInt(0)) {
      writer.uint32(32).int64(message.expiresEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GuildInvite {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuildInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guildInvitee = reader.string();
          break;
        case 2:
          message.inviter = reader.string();
          break;
        case 3:
          message.createdEpoch = reader.int64();
          break;
        case 4:
          message.expiresEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GuildInvite>): GuildInvite {
    const message = createBaseGuildInvite();
    message.guildInvitee = object.guildInvitee ?? "";
    message.inviter = object.inviter ?? "";
    message.createdEpoch = object.createdEpoch !== undefined && object.createdEpoch !== null ? BigInt(object.createdEpoch.toString()) : BigInt(0);
    message.expiresEpoch = object.expiresEpoch !== undefined && object.expiresEpoch !== null ? BigInt(object.expiresEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GuildInviteAmino): GuildInvite {
    const message = createBaseGuildInvite();
    if (object.guild_invitee !== undefined && object.guild_invitee !== null) {
      message.guildInvitee = object.guild_invitee;
    }
    if (object.inviter !== undefined && object.inviter !== null) {
      message.inviter = object.inviter;
    }
    if (object.created_epoch !== undefined && object.created_epoch !== null) {
      message.createdEpoch = BigInt(object.created_epoch);
    }
    if (object.expires_epoch !== undefined && object.expires_epoch !== null) {
      message.expiresEpoch = BigInt(object.expires_epoch);
    }
    return message;
  },
  toAmino(message: GuildInvite): GuildInviteAmino {
    const obj: any = {};
    obj.guild_invitee = message.guildInvitee === "" ? undefined : message.guildInvitee;
    obj.inviter = message.inviter === "" ? undefined : message.inviter;
    obj.created_epoch = message.createdEpoch !== BigInt(0) ? message.createdEpoch?.toString() : undefined;
    obj.expires_epoch = message.expiresEpoch !== BigInt(0) ? message.expiresEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GuildInviteAminoMsg): GuildInvite {
    return GuildInvite.fromAmino(object.value);
  },
  fromProtoMsg(message: GuildInviteProtoMsg): GuildInvite {
    return GuildInvite.decode(message.value);
  },
  toProto(message: GuildInvite): Uint8Array {
    return GuildInvite.encode(message).finish();
  },
  toProtoMsg(message: GuildInvite): GuildInviteProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.GuildInvite",
      value: GuildInvite.encode(message).finish()
    };
  }
};