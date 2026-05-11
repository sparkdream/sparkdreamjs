//@ts-nocheck
import { Params, ParamsAmino, SeasonOperationalParams, SeasonOperationalParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/season/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * @name MsgUpdateOperationalParams
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * operational_params defines the operational parameters to update.
   */
  operationalParams: SeasonOperationalParams;
}
export interface MsgUpdateOperationalParamsProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUpdateOperationalParams";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * @name MsgUpdateOperationalParamsAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateOperationalParams
 */
export interface MsgUpdateOperationalParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * operational_params defines the operational parameters to update.
   */
  operational_params: SeasonOperationalParamsAmino;
}
export interface MsgUpdateOperationalParamsAminoMsg {
  type: "sparkdream/x/season/MsgUpdateOperationalParams";
  value: MsgUpdateOperationalParamsAmino;
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponse {}
export interface MsgUpdateOperationalParamsResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUpdateOperationalParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateOperationalParamsResponse
 */
export interface MsgUpdateOperationalParamsResponseAmino {}
export interface MsgUpdateOperationalParamsResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgUpdateOperationalParamsResponse";
  value: MsgUpdateOperationalParamsResponseAmino;
}
/**
 * MsgSetDisplayName defines the MsgSetDisplayName message.
 * @name MsgSetDisplayName
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetDisplayName
 */
export interface MsgSetDisplayName {
  creator: string;
  name: string;
}
export interface MsgSetDisplayNameProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgSetDisplayName";
  value: Uint8Array;
}
/**
 * MsgSetDisplayName defines the MsgSetDisplayName message.
 * @name MsgSetDisplayNameAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetDisplayName
 */
export interface MsgSetDisplayNameAmino {
  creator?: string;
  name?: string;
}
export interface MsgSetDisplayNameAminoMsg {
  type: "sparkdream/x/season/MsgSetDisplayName";
  value: MsgSetDisplayNameAmino;
}
/**
 * MsgSetDisplayNameResponse defines the MsgSetDisplayNameResponse message.
 * @name MsgSetDisplayNameResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetDisplayNameResponse
 */
export interface MsgSetDisplayNameResponse {}
export interface MsgSetDisplayNameResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgSetDisplayNameResponse";
  value: Uint8Array;
}
/**
 * MsgSetDisplayNameResponse defines the MsgSetDisplayNameResponse message.
 * @name MsgSetDisplayNameResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetDisplayNameResponse
 */
export interface MsgSetDisplayNameResponseAmino {}
export interface MsgSetDisplayNameResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgSetDisplayNameResponse";
  value: MsgSetDisplayNameResponseAmino;
}
/**
 * MsgSetUsername defines the MsgSetUsername message.
 * @name MsgSetUsername
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetUsername
 */
export interface MsgSetUsername {
  creator: string;
  username: string;
}
export interface MsgSetUsernameProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgSetUsername";
  value: Uint8Array;
}
/**
 * MsgSetUsername defines the MsgSetUsername message.
 * @name MsgSetUsernameAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetUsername
 */
export interface MsgSetUsernameAmino {
  creator?: string;
  username?: string;
}
export interface MsgSetUsernameAminoMsg {
  type: "sparkdream/x/season/MsgSetUsername";
  value: MsgSetUsernameAmino;
}
/**
 * MsgSetUsernameResponse defines the MsgSetUsernameResponse message.
 * @name MsgSetUsernameResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetUsernameResponse
 */
export interface MsgSetUsernameResponse {}
export interface MsgSetUsernameResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgSetUsernameResponse";
  value: Uint8Array;
}
/**
 * MsgSetUsernameResponse defines the MsgSetUsernameResponse message.
 * @name MsgSetUsernameResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetUsernameResponse
 */
export interface MsgSetUsernameResponseAmino {}
export interface MsgSetUsernameResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgSetUsernameResponse";
  value: MsgSetUsernameResponseAmino;
}
/**
 * MsgSetDisplayTitle defines the MsgSetDisplayTitle message.
 * @name MsgSetDisplayTitle
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetDisplayTitle
 */
export interface MsgSetDisplayTitle {
  creator: string;
  titleId: string;
}
export interface MsgSetDisplayTitleProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgSetDisplayTitle";
  value: Uint8Array;
}
/**
 * MsgSetDisplayTitle defines the MsgSetDisplayTitle message.
 * @name MsgSetDisplayTitleAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetDisplayTitle
 */
export interface MsgSetDisplayTitleAmino {
  creator?: string;
  title_id?: string;
}
export interface MsgSetDisplayTitleAminoMsg {
  type: "sparkdream/x/season/MsgSetDisplayTitle";
  value: MsgSetDisplayTitleAmino;
}
/**
 * MsgSetDisplayTitleResponse defines the MsgSetDisplayTitleResponse message.
 * @name MsgSetDisplayTitleResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetDisplayTitleResponse
 */
export interface MsgSetDisplayTitleResponse {}
export interface MsgSetDisplayTitleResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgSetDisplayTitleResponse";
  value: Uint8Array;
}
/**
 * MsgSetDisplayTitleResponse defines the MsgSetDisplayTitleResponse message.
 * @name MsgSetDisplayTitleResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetDisplayTitleResponse
 */
export interface MsgSetDisplayTitleResponseAmino {}
export interface MsgSetDisplayTitleResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgSetDisplayTitleResponse";
  value: MsgSetDisplayTitleResponseAmino;
}
/**
 * MsgCreateGuild defines the MsgCreateGuild message.
 * @name MsgCreateGuild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateGuild
 */
export interface MsgCreateGuild {
  creator: string;
  name: string;
  description: string;
  inviteOnly: boolean;
}
export interface MsgCreateGuildProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgCreateGuild";
  value: Uint8Array;
}
/**
 * MsgCreateGuild defines the MsgCreateGuild message.
 * @name MsgCreateGuildAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateGuild
 */
export interface MsgCreateGuildAmino {
  creator?: string;
  name?: string;
  description?: string;
  invite_only?: boolean;
}
export interface MsgCreateGuildAminoMsg {
  type: "sparkdream/x/season/MsgCreateGuild";
  value: MsgCreateGuildAmino;
}
/**
 * MsgCreateGuildResponse defines the MsgCreateGuildResponse message.
 * @name MsgCreateGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateGuildResponse
 */
export interface MsgCreateGuildResponse {}
export interface MsgCreateGuildResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgCreateGuildResponse";
  value: Uint8Array;
}
/**
 * MsgCreateGuildResponse defines the MsgCreateGuildResponse message.
 * @name MsgCreateGuildResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateGuildResponse
 */
export interface MsgCreateGuildResponseAmino {}
export interface MsgCreateGuildResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgCreateGuildResponse";
  value: MsgCreateGuildResponseAmino;
}
/**
 * MsgJoinGuild defines the MsgJoinGuild message.
 * @name MsgJoinGuild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgJoinGuild
 */
export interface MsgJoinGuild {
  creator: string;
  guildId: bigint;
}
export interface MsgJoinGuildProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgJoinGuild";
  value: Uint8Array;
}
/**
 * MsgJoinGuild defines the MsgJoinGuild message.
 * @name MsgJoinGuildAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgJoinGuild
 */
export interface MsgJoinGuildAmino {
  creator?: string;
  guild_id?: string;
}
export interface MsgJoinGuildAminoMsg {
  type: "sparkdream/x/season/MsgJoinGuild";
  value: MsgJoinGuildAmino;
}
/**
 * MsgJoinGuildResponse defines the MsgJoinGuildResponse message.
 * @name MsgJoinGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgJoinGuildResponse
 */
export interface MsgJoinGuildResponse {}
export interface MsgJoinGuildResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgJoinGuildResponse";
  value: Uint8Array;
}
/**
 * MsgJoinGuildResponse defines the MsgJoinGuildResponse message.
 * @name MsgJoinGuildResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgJoinGuildResponse
 */
export interface MsgJoinGuildResponseAmino {}
export interface MsgJoinGuildResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgJoinGuildResponse";
  value: MsgJoinGuildResponseAmino;
}
/**
 * MsgLeaveGuild defines the MsgLeaveGuild message.
 * @name MsgLeaveGuild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgLeaveGuild
 */
export interface MsgLeaveGuild {
  creator: string;
}
export interface MsgLeaveGuildProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgLeaveGuild";
  value: Uint8Array;
}
/**
 * MsgLeaveGuild defines the MsgLeaveGuild message.
 * @name MsgLeaveGuildAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgLeaveGuild
 */
export interface MsgLeaveGuildAmino {
  creator?: string;
}
export interface MsgLeaveGuildAminoMsg {
  type: "sparkdream/x/season/MsgLeaveGuild";
  value: MsgLeaveGuildAmino;
}
/**
 * MsgLeaveGuildResponse defines the MsgLeaveGuildResponse message.
 * @name MsgLeaveGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgLeaveGuildResponse
 */
export interface MsgLeaveGuildResponse {}
export interface MsgLeaveGuildResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgLeaveGuildResponse";
  value: Uint8Array;
}
/**
 * MsgLeaveGuildResponse defines the MsgLeaveGuildResponse message.
 * @name MsgLeaveGuildResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgLeaveGuildResponse
 */
export interface MsgLeaveGuildResponseAmino {}
export interface MsgLeaveGuildResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgLeaveGuildResponse";
  value: MsgLeaveGuildResponseAmino;
}
/**
 * MsgTransferGuildFounder defines the MsgTransferGuildFounder message.
 * @name MsgTransferGuildFounder
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgTransferGuildFounder
 */
export interface MsgTransferGuildFounder {
  creator: string;
  guildId: bigint;
  newFounder: string;
}
export interface MsgTransferGuildFounderProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgTransferGuildFounder";
  value: Uint8Array;
}
/**
 * MsgTransferGuildFounder defines the MsgTransferGuildFounder message.
 * @name MsgTransferGuildFounderAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgTransferGuildFounder
 */
export interface MsgTransferGuildFounderAmino {
  creator?: string;
  guild_id?: string;
  new_founder?: string;
}
export interface MsgTransferGuildFounderAminoMsg {
  type: "sparkdream/x/season/MsgTransferGuildFounder";
  value: MsgTransferGuildFounderAmino;
}
/**
 * MsgTransferGuildFounderResponse defines the MsgTransferGuildFounderResponse message.
 * @name MsgTransferGuildFounderResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgTransferGuildFounderResponse
 */
export interface MsgTransferGuildFounderResponse {}
export interface MsgTransferGuildFounderResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgTransferGuildFounderResponse";
  value: Uint8Array;
}
/**
 * MsgTransferGuildFounderResponse defines the MsgTransferGuildFounderResponse message.
 * @name MsgTransferGuildFounderResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgTransferGuildFounderResponse
 */
export interface MsgTransferGuildFounderResponseAmino {}
export interface MsgTransferGuildFounderResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgTransferGuildFounderResponse";
  value: MsgTransferGuildFounderResponseAmino;
}
/**
 * MsgDissolveGuild defines the MsgDissolveGuild message.
 * @name MsgDissolveGuild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDissolveGuild
 */
export interface MsgDissolveGuild {
  creator: string;
  guildId: bigint;
}
export interface MsgDissolveGuildProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgDissolveGuild";
  value: Uint8Array;
}
/**
 * MsgDissolveGuild defines the MsgDissolveGuild message.
 * @name MsgDissolveGuildAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDissolveGuild
 */
export interface MsgDissolveGuildAmino {
  creator?: string;
  guild_id?: string;
}
export interface MsgDissolveGuildAminoMsg {
  type: "sparkdream/x/season/MsgDissolveGuild";
  value: MsgDissolveGuildAmino;
}
/**
 * MsgDissolveGuildResponse defines the MsgDissolveGuildResponse message.
 * @name MsgDissolveGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDissolveGuildResponse
 */
export interface MsgDissolveGuildResponse {}
export interface MsgDissolveGuildResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgDissolveGuildResponse";
  value: Uint8Array;
}
/**
 * MsgDissolveGuildResponse defines the MsgDissolveGuildResponse message.
 * @name MsgDissolveGuildResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDissolveGuildResponse
 */
export interface MsgDissolveGuildResponseAmino {}
export interface MsgDissolveGuildResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgDissolveGuildResponse";
  value: MsgDissolveGuildResponseAmino;
}
/**
 * MsgPromoteToOfficer defines the MsgPromoteToOfficer message.
 * @name MsgPromoteToOfficer
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgPromoteToOfficer
 */
export interface MsgPromoteToOfficer {
  creator: string;
  guildId: bigint;
  member: string;
}
export interface MsgPromoteToOfficerProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgPromoteToOfficer";
  value: Uint8Array;
}
/**
 * MsgPromoteToOfficer defines the MsgPromoteToOfficer message.
 * @name MsgPromoteToOfficerAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgPromoteToOfficer
 */
export interface MsgPromoteToOfficerAmino {
  creator?: string;
  guild_id?: string;
  member?: string;
}
export interface MsgPromoteToOfficerAminoMsg {
  type: "sparkdream/x/season/MsgPromoteToOfficer";
  value: MsgPromoteToOfficerAmino;
}
/**
 * MsgPromoteToOfficerResponse defines the MsgPromoteToOfficerResponse message.
 * @name MsgPromoteToOfficerResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgPromoteToOfficerResponse
 */
export interface MsgPromoteToOfficerResponse {}
export interface MsgPromoteToOfficerResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgPromoteToOfficerResponse";
  value: Uint8Array;
}
/**
 * MsgPromoteToOfficerResponse defines the MsgPromoteToOfficerResponse message.
 * @name MsgPromoteToOfficerResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgPromoteToOfficerResponse
 */
export interface MsgPromoteToOfficerResponseAmino {}
export interface MsgPromoteToOfficerResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgPromoteToOfficerResponse";
  value: MsgPromoteToOfficerResponseAmino;
}
/**
 * MsgDemoteOfficer defines the MsgDemoteOfficer message.
 * @name MsgDemoteOfficer
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDemoteOfficer
 */
export interface MsgDemoteOfficer {
  creator: string;
  guildId: bigint;
  officer: string;
}
export interface MsgDemoteOfficerProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgDemoteOfficer";
  value: Uint8Array;
}
/**
 * MsgDemoteOfficer defines the MsgDemoteOfficer message.
 * @name MsgDemoteOfficerAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDemoteOfficer
 */
export interface MsgDemoteOfficerAmino {
  creator?: string;
  guild_id?: string;
  officer?: string;
}
export interface MsgDemoteOfficerAminoMsg {
  type: "sparkdream/x/season/MsgDemoteOfficer";
  value: MsgDemoteOfficerAmino;
}
/**
 * MsgDemoteOfficerResponse defines the MsgDemoteOfficerResponse message.
 * @name MsgDemoteOfficerResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDemoteOfficerResponse
 */
export interface MsgDemoteOfficerResponse {}
export interface MsgDemoteOfficerResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgDemoteOfficerResponse";
  value: Uint8Array;
}
/**
 * MsgDemoteOfficerResponse defines the MsgDemoteOfficerResponse message.
 * @name MsgDemoteOfficerResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDemoteOfficerResponse
 */
export interface MsgDemoteOfficerResponseAmino {}
export interface MsgDemoteOfficerResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgDemoteOfficerResponse";
  value: MsgDemoteOfficerResponseAmino;
}
/**
 * MsgInviteToGuild defines the MsgInviteToGuild message.
 * @name MsgInviteToGuild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgInviteToGuild
 */
export interface MsgInviteToGuild {
  creator: string;
  guildId: bigint;
  invitee: string;
}
export interface MsgInviteToGuildProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgInviteToGuild";
  value: Uint8Array;
}
/**
 * MsgInviteToGuild defines the MsgInviteToGuild message.
 * @name MsgInviteToGuildAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgInviteToGuild
 */
export interface MsgInviteToGuildAmino {
  creator?: string;
  guild_id?: string;
  invitee?: string;
}
export interface MsgInviteToGuildAminoMsg {
  type: "sparkdream/x/season/MsgInviteToGuild";
  value: MsgInviteToGuildAmino;
}
/**
 * MsgInviteToGuildResponse defines the MsgInviteToGuildResponse message.
 * @name MsgInviteToGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgInviteToGuildResponse
 */
export interface MsgInviteToGuildResponse {}
export interface MsgInviteToGuildResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgInviteToGuildResponse";
  value: Uint8Array;
}
/**
 * MsgInviteToGuildResponse defines the MsgInviteToGuildResponse message.
 * @name MsgInviteToGuildResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgInviteToGuildResponse
 */
export interface MsgInviteToGuildResponseAmino {}
export interface MsgInviteToGuildResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgInviteToGuildResponse";
  value: MsgInviteToGuildResponseAmino;
}
/**
 * MsgAcceptGuildInvite defines the MsgAcceptGuildInvite message.
 * @name MsgAcceptGuildInvite
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAcceptGuildInvite
 */
export interface MsgAcceptGuildInvite {
  creator: string;
  guildId: bigint;
}
export interface MsgAcceptGuildInviteProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgAcceptGuildInvite";
  value: Uint8Array;
}
/**
 * MsgAcceptGuildInvite defines the MsgAcceptGuildInvite message.
 * @name MsgAcceptGuildInviteAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAcceptGuildInvite
 */
export interface MsgAcceptGuildInviteAmino {
  creator?: string;
  guild_id?: string;
}
export interface MsgAcceptGuildInviteAminoMsg {
  type: "sparkdream/x/season/MsgAcceptGuildInvite";
  value: MsgAcceptGuildInviteAmino;
}
/**
 * MsgAcceptGuildInviteResponse defines the MsgAcceptGuildInviteResponse message.
 * @name MsgAcceptGuildInviteResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAcceptGuildInviteResponse
 */
export interface MsgAcceptGuildInviteResponse {}
export interface MsgAcceptGuildInviteResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgAcceptGuildInviteResponse";
  value: Uint8Array;
}
/**
 * MsgAcceptGuildInviteResponse defines the MsgAcceptGuildInviteResponse message.
 * @name MsgAcceptGuildInviteResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAcceptGuildInviteResponse
 */
export interface MsgAcceptGuildInviteResponseAmino {}
export interface MsgAcceptGuildInviteResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgAcceptGuildInviteResponse";
  value: MsgAcceptGuildInviteResponseAmino;
}
/**
 * MsgRevokeGuildInvite defines the MsgRevokeGuildInvite message.
 * @name MsgRevokeGuildInvite
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgRevokeGuildInvite
 */
export interface MsgRevokeGuildInvite {
  creator: string;
  guildId: bigint;
  invitee: string;
}
export interface MsgRevokeGuildInviteProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgRevokeGuildInvite";
  value: Uint8Array;
}
/**
 * MsgRevokeGuildInvite defines the MsgRevokeGuildInvite message.
 * @name MsgRevokeGuildInviteAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgRevokeGuildInvite
 */
export interface MsgRevokeGuildInviteAmino {
  creator?: string;
  guild_id?: string;
  invitee?: string;
}
export interface MsgRevokeGuildInviteAminoMsg {
  type: "sparkdream/x/season/MsgRevokeGuildInvite";
  value: MsgRevokeGuildInviteAmino;
}
/**
 * MsgRevokeGuildInviteResponse defines the MsgRevokeGuildInviteResponse message.
 * @name MsgRevokeGuildInviteResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgRevokeGuildInviteResponse
 */
export interface MsgRevokeGuildInviteResponse {}
export interface MsgRevokeGuildInviteResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgRevokeGuildInviteResponse";
  value: Uint8Array;
}
/**
 * MsgRevokeGuildInviteResponse defines the MsgRevokeGuildInviteResponse message.
 * @name MsgRevokeGuildInviteResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgRevokeGuildInviteResponse
 */
export interface MsgRevokeGuildInviteResponseAmino {}
export interface MsgRevokeGuildInviteResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgRevokeGuildInviteResponse";
  value: MsgRevokeGuildInviteResponseAmino;
}
/**
 * MsgSetGuildInviteOnly defines the MsgSetGuildInviteOnly message.
 * @name MsgSetGuildInviteOnly
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetGuildInviteOnly
 */
export interface MsgSetGuildInviteOnly {
  creator: string;
  guildId: bigint;
  inviteOnly: boolean;
}
export interface MsgSetGuildInviteOnlyProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgSetGuildInviteOnly";
  value: Uint8Array;
}
/**
 * MsgSetGuildInviteOnly defines the MsgSetGuildInviteOnly message.
 * @name MsgSetGuildInviteOnlyAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetGuildInviteOnly
 */
export interface MsgSetGuildInviteOnlyAmino {
  creator?: string;
  guild_id?: string;
  invite_only?: boolean;
}
export interface MsgSetGuildInviteOnlyAminoMsg {
  type: "sparkdream/x/season/MsgSetGuildInviteOnly";
  value: MsgSetGuildInviteOnlyAmino;
}
/**
 * MsgSetGuildInviteOnlyResponse defines the MsgSetGuildInviteOnlyResponse message.
 * @name MsgSetGuildInviteOnlyResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetGuildInviteOnlyResponse
 */
export interface MsgSetGuildInviteOnlyResponse {}
export interface MsgSetGuildInviteOnlyResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgSetGuildInviteOnlyResponse";
  value: Uint8Array;
}
/**
 * MsgSetGuildInviteOnlyResponse defines the MsgSetGuildInviteOnlyResponse message.
 * @name MsgSetGuildInviteOnlyResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetGuildInviteOnlyResponse
 */
export interface MsgSetGuildInviteOnlyResponseAmino {}
export interface MsgSetGuildInviteOnlyResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgSetGuildInviteOnlyResponse";
  value: MsgSetGuildInviteOnlyResponseAmino;
}
/**
 * MsgUpdateGuildDescription defines the MsgUpdateGuildDescription message.
 * @name MsgUpdateGuildDescription
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateGuildDescription
 */
export interface MsgUpdateGuildDescription {
  creator: string;
  guildId: bigint;
  description: string;
}
export interface MsgUpdateGuildDescriptionProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUpdateGuildDescription";
  value: Uint8Array;
}
/**
 * MsgUpdateGuildDescription defines the MsgUpdateGuildDescription message.
 * @name MsgUpdateGuildDescriptionAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateGuildDescription
 */
export interface MsgUpdateGuildDescriptionAmino {
  creator?: string;
  guild_id?: string;
  description?: string;
}
export interface MsgUpdateGuildDescriptionAminoMsg {
  type: "sparkdream/x/season/MsgUpdateGuildDescription";
  value: MsgUpdateGuildDescriptionAmino;
}
/**
 * MsgUpdateGuildDescriptionResponse defines the MsgUpdateGuildDescriptionResponse message.
 * @name MsgUpdateGuildDescriptionResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateGuildDescriptionResponse
 */
export interface MsgUpdateGuildDescriptionResponse {}
export interface MsgUpdateGuildDescriptionResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUpdateGuildDescriptionResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateGuildDescriptionResponse defines the MsgUpdateGuildDescriptionResponse message.
 * @name MsgUpdateGuildDescriptionResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateGuildDescriptionResponse
 */
export interface MsgUpdateGuildDescriptionResponseAmino {}
export interface MsgUpdateGuildDescriptionResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgUpdateGuildDescriptionResponse";
  value: MsgUpdateGuildDescriptionResponseAmino;
}
/**
 * MsgKickFromGuild defines the MsgKickFromGuild message.
 * @name MsgKickFromGuild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgKickFromGuild
 */
export interface MsgKickFromGuild {
  creator: string;
  guildId: bigint;
  member: string;
  reason: string;
}
export interface MsgKickFromGuildProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgKickFromGuild";
  value: Uint8Array;
}
/**
 * MsgKickFromGuild defines the MsgKickFromGuild message.
 * @name MsgKickFromGuildAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgKickFromGuild
 */
export interface MsgKickFromGuildAmino {
  creator?: string;
  guild_id?: string;
  member?: string;
  reason?: string;
}
export interface MsgKickFromGuildAminoMsg {
  type: "sparkdream/x/season/MsgKickFromGuild";
  value: MsgKickFromGuildAmino;
}
/**
 * MsgKickFromGuildResponse defines the MsgKickFromGuildResponse message.
 * @name MsgKickFromGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgKickFromGuildResponse
 */
export interface MsgKickFromGuildResponse {}
export interface MsgKickFromGuildResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgKickFromGuildResponse";
  value: Uint8Array;
}
/**
 * MsgKickFromGuildResponse defines the MsgKickFromGuildResponse message.
 * @name MsgKickFromGuildResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgKickFromGuildResponse
 */
export interface MsgKickFromGuildResponseAmino {}
export interface MsgKickFromGuildResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgKickFromGuildResponse";
  value: MsgKickFromGuildResponseAmino;
}
/**
 * MsgClaimGuildFounder defines the MsgClaimGuildFounder message.
 * @name MsgClaimGuildFounder
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgClaimGuildFounder
 */
export interface MsgClaimGuildFounder {
  creator: string;
  guildId: bigint;
}
export interface MsgClaimGuildFounderProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgClaimGuildFounder";
  value: Uint8Array;
}
/**
 * MsgClaimGuildFounder defines the MsgClaimGuildFounder message.
 * @name MsgClaimGuildFounderAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgClaimGuildFounder
 */
export interface MsgClaimGuildFounderAmino {
  creator?: string;
  guild_id?: string;
}
export interface MsgClaimGuildFounderAminoMsg {
  type: "sparkdream/x/season/MsgClaimGuildFounder";
  value: MsgClaimGuildFounderAmino;
}
/**
 * MsgClaimGuildFounderResponse defines the MsgClaimGuildFounderResponse message.
 * @name MsgClaimGuildFounderResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgClaimGuildFounderResponse
 */
export interface MsgClaimGuildFounderResponse {}
export interface MsgClaimGuildFounderResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgClaimGuildFounderResponse";
  value: Uint8Array;
}
/**
 * MsgClaimGuildFounderResponse defines the MsgClaimGuildFounderResponse message.
 * @name MsgClaimGuildFounderResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgClaimGuildFounderResponse
 */
export interface MsgClaimGuildFounderResponseAmino {}
export interface MsgClaimGuildFounderResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgClaimGuildFounderResponse";
  value: MsgClaimGuildFounderResponseAmino;
}
/**
 * MsgStartQuest defines the MsgStartQuest message.
 * @name MsgStartQuest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgStartQuest
 */
export interface MsgStartQuest {
  creator: string;
  questId: string;
}
export interface MsgStartQuestProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgStartQuest";
  value: Uint8Array;
}
/**
 * MsgStartQuest defines the MsgStartQuest message.
 * @name MsgStartQuestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgStartQuest
 */
export interface MsgStartQuestAmino {
  creator?: string;
  quest_id?: string;
}
export interface MsgStartQuestAminoMsg {
  type: "sparkdream/x/season/MsgStartQuest";
  value: MsgStartQuestAmino;
}
/**
 * MsgStartQuestResponse defines the MsgStartQuestResponse message.
 * @name MsgStartQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgStartQuestResponse
 */
export interface MsgStartQuestResponse {}
export interface MsgStartQuestResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgStartQuestResponse";
  value: Uint8Array;
}
/**
 * MsgStartQuestResponse defines the MsgStartQuestResponse message.
 * @name MsgStartQuestResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgStartQuestResponse
 */
export interface MsgStartQuestResponseAmino {}
export interface MsgStartQuestResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgStartQuestResponse";
  value: MsgStartQuestResponseAmino;
}
/**
 * MsgClaimQuestReward defines the MsgClaimQuestReward message.
 * @name MsgClaimQuestReward
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgClaimQuestReward
 */
export interface MsgClaimQuestReward {
  creator: string;
  questId: string;
}
export interface MsgClaimQuestRewardProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgClaimQuestReward";
  value: Uint8Array;
}
/**
 * MsgClaimQuestReward defines the MsgClaimQuestReward message.
 * @name MsgClaimQuestRewardAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgClaimQuestReward
 */
export interface MsgClaimQuestRewardAmino {
  creator?: string;
  quest_id?: string;
}
export interface MsgClaimQuestRewardAminoMsg {
  type: "sparkdream/x/season/MsgClaimQuestReward";
  value: MsgClaimQuestRewardAmino;
}
/**
 * MsgClaimQuestRewardResponse defines the MsgClaimQuestRewardResponse message.
 * @name MsgClaimQuestRewardResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgClaimQuestRewardResponse
 */
export interface MsgClaimQuestRewardResponse {}
export interface MsgClaimQuestRewardResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgClaimQuestRewardResponse";
  value: Uint8Array;
}
/**
 * MsgClaimQuestRewardResponse defines the MsgClaimQuestRewardResponse message.
 * @name MsgClaimQuestRewardResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgClaimQuestRewardResponse
 */
export interface MsgClaimQuestRewardResponseAmino {}
export interface MsgClaimQuestRewardResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgClaimQuestRewardResponse";
  value: MsgClaimQuestRewardResponseAmino;
}
/**
 * MsgAbandonQuest defines the MsgAbandonQuest message.
 * @name MsgAbandonQuest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAbandonQuest
 */
export interface MsgAbandonQuest {
  creator: string;
  questId: string;
}
export interface MsgAbandonQuestProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgAbandonQuest";
  value: Uint8Array;
}
/**
 * MsgAbandonQuest defines the MsgAbandonQuest message.
 * @name MsgAbandonQuestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAbandonQuest
 */
export interface MsgAbandonQuestAmino {
  creator?: string;
  quest_id?: string;
}
export interface MsgAbandonQuestAminoMsg {
  type: "sparkdream/x/season/MsgAbandonQuest";
  value: MsgAbandonQuestAmino;
}
/**
 * MsgAbandonQuestResponse defines the MsgAbandonQuestResponse message.
 * @name MsgAbandonQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAbandonQuestResponse
 */
export interface MsgAbandonQuestResponse {}
export interface MsgAbandonQuestResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgAbandonQuestResponse";
  value: Uint8Array;
}
/**
 * MsgAbandonQuestResponse defines the MsgAbandonQuestResponse message.
 * @name MsgAbandonQuestResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAbandonQuestResponse
 */
export interface MsgAbandonQuestResponseAmino {}
export interface MsgAbandonQuestResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgAbandonQuestResponse";
  value: MsgAbandonQuestResponseAmino;
}
/**
 * MsgCreateQuest defines the MsgCreateQuest message (governance-gated).
 * @name MsgCreateQuest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateQuest
 */
export interface MsgCreateQuest {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  questId: string;
  name: string;
  description: string;
  xpReward: bigint;
  repeatable: boolean;
  cooldownEpochs: bigint;
  season: bigint;
  startBlock: bigint;
  endBlock: bigint;
  minLevel: bigint;
  requiredAchievement: string;
  prerequisiteQuest: string;
  questChain: string;
}
export interface MsgCreateQuestProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgCreateQuest";
  value: Uint8Array;
}
/**
 * MsgCreateQuest defines the MsgCreateQuest message (governance-gated).
 * @name MsgCreateQuestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateQuest
 */
export interface MsgCreateQuestAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  quest_id?: string;
  name?: string;
  description?: string;
  xp_reward?: string;
  repeatable?: boolean;
  cooldown_epochs?: string;
  season?: string;
  start_block?: string;
  end_block?: string;
  min_level?: string;
  required_achievement?: string;
  prerequisite_quest?: string;
  quest_chain?: string;
}
export interface MsgCreateQuestAminoMsg {
  type: "sparkdream/x/season/MsgCreateQuest";
  value: MsgCreateQuestAmino;
}
/**
 * MsgCreateQuestResponse defines the MsgCreateQuestResponse message.
 * @name MsgCreateQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateQuestResponse
 */
export interface MsgCreateQuestResponse {}
export interface MsgCreateQuestResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgCreateQuestResponse";
  value: Uint8Array;
}
/**
 * MsgCreateQuestResponse defines the MsgCreateQuestResponse message.
 * @name MsgCreateQuestResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateQuestResponse
 */
export interface MsgCreateQuestResponseAmino {}
export interface MsgCreateQuestResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgCreateQuestResponse";
  value: MsgCreateQuestResponseAmino;
}
/**
 * MsgDeactivateQuest defines the MsgDeactivateQuest message (governance-gated).
 * @name MsgDeactivateQuest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeactivateQuest
 */
export interface MsgDeactivateQuest {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  questId: string;
}
export interface MsgDeactivateQuestProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgDeactivateQuest";
  value: Uint8Array;
}
/**
 * MsgDeactivateQuest defines the MsgDeactivateQuest message (governance-gated).
 * @name MsgDeactivateQuestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeactivateQuest
 */
export interface MsgDeactivateQuestAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  quest_id?: string;
}
export interface MsgDeactivateQuestAminoMsg {
  type: "sparkdream/x/season/MsgDeactivateQuest";
  value: MsgDeactivateQuestAmino;
}
/**
 * MsgDeactivateQuestResponse defines the MsgDeactivateQuestResponse message.
 * @name MsgDeactivateQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeactivateQuestResponse
 */
export interface MsgDeactivateQuestResponse {}
export interface MsgDeactivateQuestResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgDeactivateQuestResponse";
  value: Uint8Array;
}
/**
 * MsgDeactivateQuestResponse defines the MsgDeactivateQuestResponse message.
 * @name MsgDeactivateQuestResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeactivateQuestResponse
 */
export interface MsgDeactivateQuestResponseAmino {}
export interface MsgDeactivateQuestResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgDeactivateQuestResponse";
  value: MsgDeactivateQuestResponseAmino;
}
/**
 * MsgExtendSeason defines the MsgExtendSeason message (governance-gated).
 * @name MsgExtendSeason
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgExtendSeason
 */
export interface MsgExtendSeason {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  extensionEpochs: bigint;
  reason: string;
}
export interface MsgExtendSeasonProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgExtendSeason";
  value: Uint8Array;
}
/**
 * MsgExtendSeason defines the MsgExtendSeason message (governance-gated).
 * @name MsgExtendSeasonAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgExtendSeason
 */
export interface MsgExtendSeasonAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  extension_epochs?: string;
  reason?: string;
}
export interface MsgExtendSeasonAminoMsg {
  type: "sparkdream/x/season/MsgExtendSeason";
  value: MsgExtendSeasonAmino;
}
/**
 * MsgExtendSeasonResponse defines the MsgExtendSeasonResponse message.
 * @name MsgExtendSeasonResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgExtendSeasonResponse
 */
export interface MsgExtendSeasonResponse {}
export interface MsgExtendSeasonResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgExtendSeasonResponse";
  value: Uint8Array;
}
/**
 * MsgExtendSeasonResponse defines the MsgExtendSeasonResponse message.
 * @name MsgExtendSeasonResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgExtendSeasonResponse
 */
export interface MsgExtendSeasonResponseAmino {}
export interface MsgExtendSeasonResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgExtendSeasonResponse";
  value: MsgExtendSeasonResponseAmino;
}
/**
 * MsgSetNextSeasonInfo defines the MsgSetNextSeasonInfo message (governance-gated).
 * @name MsgSetNextSeasonInfo
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetNextSeasonInfo
 */
export interface MsgSetNextSeasonInfo {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  name: string;
  theme: string;
}
export interface MsgSetNextSeasonInfoProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgSetNextSeasonInfo";
  value: Uint8Array;
}
/**
 * MsgSetNextSeasonInfo defines the MsgSetNextSeasonInfo message (governance-gated).
 * @name MsgSetNextSeasonInfoAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetNextSeasonInfo
 */
export interface MsgSetNextSeasonInfoAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  name?: string;
  theme?: string;
}
export interface MsgSetNextSeasonInfoAminoMsg {
  type: "sparkdream/x/season/MsgSetNextSeasonInfo";
  value: MsgSetNextSeasonInfoAmino;
}
/**
 * MsgSetNextSeasonInfoResponse defines the MsgSetNextSeasonInfoResponse message.
 * @name MsgSetNextSeasonInfoResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetNextSeasonInfoResponse
 */
export interface MsgSetNextSeasonInfoResponse {}
export interface MsgSetNextSeasonInfoResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgSetNextSeasonInfoResponse";
  value: Uint8Array;
}
/**
 * MsgSetNextSeasonInfoResponse defines the MsgSetNextSeasonInfoResponse message.
 * @name MsgSetNextSeasonInfoResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetNextSeasonInfoResponse
 */
export interface MsgSetNextSeasonInfoResponseAmino {}
export interface MsgSetNextSeasonInfoResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgSetNextSeasonInfoResponse";
  value: MsgSetNextSeasonInfoResponseAmino;
}
/**
 * MsgAbortSeasonTransition defines the MsgAbortSeasonTransition message (governance-gated).
 * @name MsgAbortSeasonTransition
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAbortSeasonTransition
 */
export interface MsgAbortSeasonTransition {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
}
export interface MsgAbortSeasonTransitionProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgAbortSeasonTransition";
  value: Uint8Array;
}
/**
 * MsgAbortSeasonTransition defines the MsgAbortSeasonTransition message (governance-gated).
 * @name MsgAbortSeasonTransitionAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAbortSeasonTransition
 */
export interface MsgAbortSeasonTransitionAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
}
export interface MsgAbortSeasonTransitionAminoMsg {
  type: "sparkdream/x/season/MsgAbortSeasonTransition";
  value: MsgAbortSeasonTransitionAmino;
}
/**
 * MsgAbortSeasonTransitionResponse defines the MsgAbortSeasonTransitionResponse message.
 * @name MsgAbortSeasonTransitionResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAbortSeasonTransitionResponse
 */
export interface MsgAbortSeasonTransitionResponse {}
export interface MsgAbortSeasonTransitionResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgAbortSeasonTransitionResponse";
  value: Uint8Array;
}
/**
 * MsgAbortSeasonTransitionResponse defines the MsgAbortSeasonTransitionResponse message.
 * @name MsgAbortSeasonTransitionResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAbortSeasonTransitionResponse
 */
export interface MsgAbortSeasonTransitionResponseAmino {}
export interface MsgAbortSeasonTransitionResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgAbortSeasonTransitionResponse";
  value: MsgAbortSeasonTransitionResponseAmino;
}
/**
 * MsgRetrySeasonTransition defines the MsgRetrySeasonTransition message (governance-gated).
 * @name MsgRetrySeasonTransition
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgRetrySeasonTransition
 */
export interface MsgRetrySeasonTransition {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
}
export interface MsgRetrySeasonTransitionProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgRetrySeasonTransition";
  value: Uint8Array;
}
/**
 * MsgRetrySeasonTransition defines the MsgRetrySeasonTransition message (governance-gated).
 * @name MsgRetrySeasonTransitionAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgRetrySeasonTransition
 */
export interface MsgRetrySeasonTransitionAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
}
export interface MsgRetrySeasonTransitionAminoMsg {
  type: "sparkdream/x/season/MsgRetrySeasonTransition";
  value: MsgRetrySeasonTransitionAmino;
}
/**
 * MsgRetrySeasonTransitionResponse defines the MsgRetrySeasonTransitionResponse message.
 * @name MsgRetrySeasonTransitionResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgRetrySeasonTransitionResponse
 */
export interface MsgRetrySeasonTransitionResponse {}
export interface MsgRetrySeasonTransitionResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgRetrySeasonTransitionResponse";
  value: Uint8Array;
}
/**
 * MsgRetrySeasonTransitionResponse defines the MsgRetrySeasonTransitionResponse message.
 * @name MsgRetrySeasonTransitionResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgRetrySeasonTransitionResponse
 */
export interface MsgRetrySeasonTransitionResponseAmino {}
export interface MsgRetrySeasonTransitionResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgRetrySeasonTransitionResponse";
  value: MsgRetrySeasonTransitionResponseAmino;
}
/**
 * MsgSkipTransitionPhase defines the MsgSkipTransitionPhase message (governance-gated).
 * @name MsgSkipTransitionPhase
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSkipTransitionPhase
 */
export interface MsgSkipTransitionPhase {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
}
export interface MsgSkipTransitionPhaseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgSkipTransitionPhase";
  value: Uint8Array;
}
/**
 * MsgSkipTransitionPhase defines the MsgSkipTransitionPhase message (governance-gated).
 * @name MsgSkipTransitionPhaseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSkipTransitionPhase
 */
export interface MsgSkipTransitionPhaseAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
}
export interface MsgSkipTransitionPhaseAminoMsg {
  type: "sparkdream/x/season/MsgSkipTransitionPhase";
  value: MsgSkipTransitionPhaseAmino;
}
/**
 * MsgSkipTransitionPhaseResponse defines the MsgSkipTransitionPhaseResponse message.
 * @name MsgSkipTransitionPhaseResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSkipTransitionPhaseResponse
 */
export interface MsgSkipTransitionPhaseResponse {}
export interface MsgSkipTransitionPhaseResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgSkipTransitionPhaseResponse";
  value: Uint8Array;
}
/**
 * MsgSkipTransitionPhaseResponse defines the MsgSkipTransitionPhaseResponse message.
 * @name MsgSkipTransitionPhaseResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSkipTransitionPhaseResponse
 */
export interface MsgSkipTransitionPhaseResponseAmino {}
export interface MsgSkipTransitionPhaseResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgSkipTransitionPhaseResponse";
  value: MsgSkipTransitionPhaseResponseAmino;
}
/**
 * MsgReportDisplayName defines the MsgReportDisplayName message.
 * @name MsgReportDisplayName
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgReportDisplayName
 */
export interface MsgReportDisplayName {
  creator: string;
  target: string;
  reason: string;
}
export interface MsgReportDisplayNameProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgReportDisplayName";
  value: Uint8Array;
}
/**
 * MsgReportDisplayName defines the MsgReportDisplayName message.
 * @name MsgReportDisplayNameAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgReportDisplayName
 */
export interface MsgReportDisplayNameAmino {
  creator?: string;
  target?: string;
  reason?: string;
}
export interface MsgReportDisplayNameAminoMsg {
  type: "sparkdream/x/season/MsgReportDisplayName";
  value: MsgReportDisplayNameAmino;
}
/**
 * MsgReportDisplayNameResponse defines the MsgReportDisplayNameResponse message.
 * @name MsgReportDisplayNameResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgReportDisplayNameResponse
 */
export interface MsgReportDisplayNameResponse {}
export interface MsgReportDisplayNameResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgReportDisplayNameResponse";
  value: Uint8Array;
}
/**
 * MsgReportDisplayNameResponse defines the MsgReportDisplayNameResponse message.
 * @name MsgReportDisplayNameResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgReportDisplayNameResponse
 */
export interface MsgReportDisplayNameResponseAmino {}
export interface MsgReportDisplayNameResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgReportDisplayNameResponse";
  value: MsgReportDisplayNameResponseAmino;
}
/**
 * MsgAppealDisplayNameModeration defines the MsgAppealDisplayNameModeration message.
 * @name MsgAppealDisplayNameModeration
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAppealDisplayNameModeration
 */
export interface MsgAppealDisplayNameModeration {
  creator: string;
  appealReason: string;
}
export interface MsgAppealDisplayNameModerationProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgAppealDisplayNameModeration";
  value: Uint8Array;
}
/**
 * MsgAppealDisplayNameModeration defines the MsgAppealDisplayNameModeration message.
 * @name MsgAppealDisplayNameModerationAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAppealDisplayNameModeration
 */
export interface MsgAppealDisplayNameModerationAmino {
  creator?: string;
  appeal_reason?: string;
}
export interface MsgAppealDisplayNameModerationAminoMsg {
  type: "sparkdream/x/season/MsgAppealDisplayNameModeration";
  value: MsgAppealDisplayNameModerationAmino;
}
/**
 * MsgAppealDisplayNameModerationResponse defines the MsgAppealDisplayNameModerationResponse message.
 * @name MsgAppealDisplayNameModerationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAppealDisplayNameModerationResponse
 */
export interface MsgAppealDisplayNameModerationResponse {}
export interface MsgAppealDisplayNameModerationResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgAppealDisplayNameModerationResponse";
  value: Uint8Array;
}
/**
 * MsgAppealDisplayNameModerationResponse defines the MsgAppealDisplayNameModerationResponse message.
 * @name MsgAppealDisplayNameModerationResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAppealDisplayNameModerationResponse
 */
export interface MsgAppealDisplayNameModerationResponseAmino {}
export interface MsgAppealDisplayNameModerationResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgAppealDisplayNameModerationResponse";
  value: MsgAppealDisplayNameModerationResponseAmino;
}
/**
 * ============================================================================
 * Achievement Management Messages
 * ============================================================================
 * MsgCreateAchievement creates a new achievement.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgCreateAchievement
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateAchievement
 */
export interface MsgCreateAchievement {
  authority: string;
  achievementId: string;
  name: string;
  description: string;
  /**
   * Rarity enum value
   */
  rarity: number;
  xpReward: bigint;
  /**
   * RequirementType enum value
   */
  requirementType: number;
  requirementThreshold: bigint;
}
export interface MsgCreateAchievementProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgCreateAchievement";
  value: Uint8Array;
}
/**
 * ============================================================================
 * Achievement Management Messages
 * ============================================================================
 * MsgCreateAchievement creates a new achievement.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgCreateAchievementAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateAchievement
 */
export interface MsgCreateAchievementAmino {
  authority?: string;
  achievement_id?: string;
  name?: string;
  description?: string;
  /**
   * Rarity enum value
   */
  rarity?: number;
  xp_reward?: string;
  /**
   * RequirementType enum value
   */
  requirement_type?: number;
  requirement_threshold?: string;
}
export interface MsgCreateAchievementAminoMsg {
  type: "sparkdream/x/season/MsgCreateAchievement";
  value: MsgCreateAchievementAmino;
}
/**
 * MsgCreateAchievementResponse is the response for MsgCreateAchievement.
 * @name MsgCreateAchievementResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateAchievementResponse
 */
export interface MsgCreateAchievementResponse {}
export interface MsgCreateAchievementResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgCreateAchievementResponse";
  value: Uint8Array;
}
/**
 * MsgCreateAchievementResponse is the response for MsgCreateAchievement.
 * @name MsgCreateAchievementResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateAchievementResponse
 */
export interface MsgCreateAchievementResponseAmino {}
export interface MsgCreateAchievementResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgCreateAchievementResponse";
  value: MsgCreateAchievementResponseAmino;
}
/**
 * MsgUpdateAchievement updates an existing achievement.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgUpdateAchievement
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateAchievement
 */
export interface MsgUpdateAchievement {
  authority: string;
  achievementId: string;
  name: string;
  description: string;
  rarity: number;
  xpReward: bigint;
  requirementType: number;
  requirementThreshold: bigint;
}
export interface MsgUpdateAchievementProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUpdateAchievement";
  value: Uint8Array;
}
/**
 * MsgUpdateAchievement updates an existing achievement.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgUpdateAchievementAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateAchievement
 */
export interface MsgUpdateAchievementAmino {
  authority?: string;
  achievement_id?: string;
  name?: string;
  description?: string;
  rarity?: number;
  xp_reward?: string;
  requirement_type?: number;
  requirement_threshold?: string;
}
export interface MsgUpdateAchievementAminoMsg {
  type: "sparkdream/x/season/MsgUpdateAchievement";
  value: MsgUpdateAchievementAmino;
}
/**
 * MsgUpdateAchievementResponse is the response for MsgUpdateAchievement.
 * @name MsgUpdateAchievementResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateAchievementResponse
 */
export interface MsgUpdateAchievementResponse {}
export interface MsgUpdateAchievementResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUpdateAchievementResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateAchievementResponse is the response for MsgUpdateAchievement.
 * @name MsgUpdateAchievementResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateAchievementResponse
 */
export interface MsgUpdateAchievementResponseAmino {}
export interface MsgUpdateAchievementResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgUpdateAchievementResponse";
  value: MsgUpdateAchievementResponseAmino;
}
/**
 * MsgDeleteAchievement deletes an achievement.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgDeleteAchievement
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeleteAchievement
 */
export interface MsgDeleteAchievement {
  authority: string;
  achievementId: string;
}
export interface MsgDeleteAchievementProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgDeleteAchievement";
  value: Uint8Array;
}
/**
 * MsgDeleteAchievement deletes an achievement.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgDeleteAchievementAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeleteAchievement
 */
export interface MsgDeleteAchievementAmino {
  authority?: string;
  achievement_id?: string;
}
export interface MsgDeleteAchievementAminoMsg {
  type: "sparkdream/x/season/MsgDeleteAchievement";
  value: MsgDeleteAchievementAmino;
}
/**
 * MsgDeleteAchievementResponse is the response for MsgDeleteAchievement.
 * @name MsgDeleteAchievementResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeleteAchievementResponse
 */
export interface MsgDeleteAchievementResponse {}
export interface MsgDeleteAchievementResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgDeleteAchievementResponse";
  value: Uint8Array;
}
/**
 * MsgDeleteAchievementResponse is the response for MsgDeleteAchievement.
 * @name MsgDeleteAchievementResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeleteAchievementResponse
 */
export interface MsgDeleteAchievementResponseAmino {}
export interface MsgDeleteAchievementResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgDeleteAchievementResponse";
  value: MsgDeleteAchievementResponseAmino;
}
/**
 * ============================================================================
 * Title Management Messages
 * ============================================================================
 * MsgCreateTitle creates a new title.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgCreateTitle
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateTitle
 */
export interface MsgCreateTitle {
  authority: string;
  titleId: string;
  name: string;
  description: string;
  /**
   * Rarity enum value
   */
  rarity: number;
  /**
   * RequirementType enum value
   */
  requirementType: number;
  requirementThreshold: bigint;
  /**
   * 0 = any season
   */
  requirementSeason: bigint;
  /**
   * Whether this title expires
   */
  seasonal: boolean;
}
export interface MsgCreateTitleProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgCreateTitle";
  value: Uint8Array;
}
/**
 * ============================================================================
 * Title Management Messages
 * ============================================================================
 * MsgCreateTitle creates a new title.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgCreateTitleAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateTitle
 */
export interface MsgCreateTitleAmino {
  authority?: string;
  title_id?: string;
  name?: string;
  description?: string;
  /**
   * Rarity enum value
   */
  rarity?: number;
  /**
   * RequirementType enum value
   */
  requirement_type?: number;
  requirement_threshold?: string;
  /**
   * 0 = any season
   */
  requirement_season?: string;
  /**
   * Whether this title expires
   */
  seasonal?: boolean;
}
export interface MsgCreateTitleAminoMsg {
  type: "sparkdream/x/season/MsgCreateTitle";
  value: MsgCreateTitleAmino;
}
/**
 * MsgCreateTitleResponse is the response for MsgCreateTitle.
 * @name MsgCreateTitleResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateTitleResponse
 */
export interface MsgCreateTitleResponse {}
export interface MsgCreateTitleResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgCreateTitleResponse";
  value: Uint8Array;
}
/**
 * MsgCreateTitleResponse is the response for MsgCreateTitle.
 * @name MsgCreateTitleResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateTitleResponse
 */
export interface MsgCreateTitleResponseAmino {}
export interface MsgCreateTitleResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgCreateTitleResponse";
  value: MsgCreateTitleResponseAmino;
}
/**
 * MsgUpdateTitle updates an existing title.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgUpdateTitle
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateTitle
 */
export interface MsgUpdateTitle {
  authority: string;
  titleId: string;
  name: string;
  description: string;
  rarity: number;
  requirementType: number;
  requirementThreshold: bigint;
  requirementSeason: bigint;
  seasonal: boolean;
}
export interface MsgUpdateTitleProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUpdateTitle";
  value: Uint8Array;
}
/**
 * MsgUpdateTitle updates an existing title.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgUpdateTitleAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateTitle
 */
export interface MsgUpdateTitleAmino {
  authority?: string;
  title_id?: string;
  name?: string;
  description?: string;
  rarity?: number;
  requirement_type?: number;
  requirement_threshold?: string;
  requirement_season?: string;
  seasonal?: boolean;
}
export interface MsgUpdateTitleAminoMsg {
  type: "sparkdream/x/season/MsgUpdateTitle";
  value: MsgUpdateTitleAmino;
}
/**
 * MsgUpdateTitleResponse is the response for MsgUpdateTitle.
 * @name MsgUpdateTitleResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateTitleResponse
 */
export interface MsgUpdateTitleResponse {}
export interface MsgUpdateTitleResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUpdateTitleResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateTitleResponse is the response for MsgUpdateTitle.
 * @name MsgUpdateTitleResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateTitleResponse
 */
export interface MsgUpdateTitleResponseAmino {}
export interface MsgUpdateTitleResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgUpdateTitleResponse";
  value: MsgUpdateTitleResponseAmino;
}
/**
 * MsgDeleteTitle deletes a title.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgDeleteTitle
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeleteTitle
 */
export interface MsgDeleteTitle {
  authority: string;
  titleId: string;
}
export interface MsgDeleteTitleProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgDeleteTitle";
  value: Uint8Array;
}
/**
 * MsgDeleteTitle deletes a title.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgDeleteTitleAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeleteTitle
 */
export interface MsgDeleteTitleAmino {
  authority?: string;
  title_id?: string;
}
export interface MsgDeleteTitleAminoMsg {
  type: "sparkdream/x/season/MsgDeleteTitle";
  value: MsgDeleteTitleAmino;
}
/**
 * MsgDeleteTitleResponse is the response for MsgDeleteTitle.
 * @name MsgDeleteTitleResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeleteTitleResponse
 */
export interface MsgDeleteTitleResponse {}
export interface MsgDeleteTitleResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgDeleteTitleResponse";
  value: Uint8Array;
}
/**
 * MsgDeleteTitleResponse is the response for MsgDeleteTitle.
 * @name MsgDeleteTitleResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeleteTitleResponse
 */
export interface MsgDeleteTitleResponseAmino {}
export interface MsgDeleteTitleResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgDeleteTitleResponse";
  value: MsgDeleteTitleResponseAmino;
}
/**
 * ============================================================================
 * Quest Update Message
 * ============================================================================
 * MsgUpdateQuest updates an existing quest.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgUpdateQuest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateQuest
 */
export interface MsgUpdateQuest {
  authority: string;
  questId: string;
  name: string;
  description: string;
  xpReward: bigint;
  repeatable: boolean;
  cooldownEpochs: bigint;
  season: bigint;
  startBlock: bigint;
  endBlock: bigint;
  minLevel: bigint;
  requiredAchievement: string;
  prerequisiteQuest: string;
  questChain: string;
  active: boolean;
}
export interface MsgUpdateQuestProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUpdateQuest";
  value: Uint8Array;
}
/**
 * ============================================================================
 * Quest Update Message
 * ============================================================================
 * MsgUpdateQuest updates an existing quest.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgUpdateQuestAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateQuest
 */
export interface MsgUpdateQuestAmino {
  authority?: string;
  quest_id?: string;
  name?: string;
  description?: string;
  xp_reward?: string;
  repeatable?: boolean;
  cooldown_epochs?: string;
  season?: string;
  start_block?: string;
  end_block?: string;
  min_level?: string;
  required_achievement?: string;
  prerequisite_quest?: string;
  quest_chain?: string;
  active?: boolean;
}
export interface MsgUpdateQuestAminoMsg {
  type: "sparkdream/x/season/MsgUpdateQuest";
  value: MsgUpdateQuestAmino;
}
/**
 * MsgUpdateQuestResponse is the response for MsgUpdateQuest.
 * @name MsgUpdateQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateQuestResponse
 */
export interface MsgUpdateQuestResponse {}
export interface MsgUpdateQuestResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUpdateQuestResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateQuestResponse is the response for MsgUpdateQuest.
 * @name MsgUpdateQuestResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateQuestResponse
 */
export interface MsgUpdateQuestResponseAmino {}
export interface MsgUpdateQuestResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgUpdateQuestResponse";
  value: MsgUpdateQuestResponseAmino;
}
/**
 * MsgResolveDisplayNameAppeal resolves a display name appeal.
 * Authorized: Commons Council, Operations Committee, or governance authority.
 * @name MsgResolveDisplayNameAppeal
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgResolveDisplayNameAppeal
 */
export interface MsgResolveDisplayNameAppeal {
  authority: string;
  member: string;
  appealSucceeded: boolean;
}
export interface MsgResolveDisplayNameAppealProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgResolveDisplayNameAppeal";
  value: Uint8Array;
}
/**
 * MsgResolveDisplayNameAppeal resolves a display name appeal.
 * Authorized: Commons Council, Operations Committee, or governance authority.
 * @name MsgResolveDisplayNameAppealAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgResolveDisplayNameAppeal
 */
export interface MsgResolveDisplayNameAppealAmino {
  authority?: string;
  member?: string;
  appeal_succeeded?: boolean;
}
export interface MsgResolveDisplayNameAppealAminoMsg {
  type: "sparkdream/x/season/MsgResolveDisplayNameAppeal";
  value: MsgResolveDisplayNameAppealAmino;
}
/**
 * MsgResolveDisplayNameAppealResponse defines the MsgResolveDisplayNameAppealResponse message.
 * @name MsgResolveDisplayNameAppealResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgResolveDisplayNameAppealResponse
 */
export interface MsgResolveDisplayNameAppealResponse {}
export interface MsgResolveDisplayNameAppealResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgResolveDisplayNameAppealResponse";
  value: Uint8Array;
}
/**
 * MsgResolveDisplayNameAppealResponse defines the MsgResolveDisplayNameAppealResponse message.
 * @name MsgResolveDisplayNameAppealResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgResolveDisplayNameAppealResponse
 */
export interface MsgResolveDisplayNameAppealResponseAmino {}
export interface MsgResolveDisplayNameAppealResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgResolveDisplayNameAppealResponse";
  value: MsgResolveDisplayNameAppealResponseAmino;
}
/**
 * MsgResolveUnappealedModeration resolves a display name moderation where the appeal period
 * expired without an appeal. The report is upheld, the reporter's DREAM stake is returned,
 * and the display name stays cleared.
 * Authorized: Commons Council, Operations Committee, or governance authority.
 * @name MsgResolveUnappealedModeration
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgResolveUnappealedModeration
 */
export interface MsgResolveUnappealedModeration {
  authority: string;
  member: string;
}
export interface MsgResolveUnappealedModerationProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgResolveUnappealedModeration";
  value: Uint8Array;
}
/**
 * MsgResolveUnappealedModeration resolves a display name moderation where the appeal period
 * expired without an appeal. The report is upheld, the reporter's DREAM stake is returned,
 * and the display name stays cleared.
 * Authorized: Commons Council, Operations Committee, or governance authority.
 * @name MsgResolveUnappealedModerationAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgResolveUnappealedModeration
 */
export interface MsgResolveUnappealedModerationAmino {
  authority?: string;
  member?: string;
}
export interface MsgResolveUnappealedModerationAminoMsg {
  type: "sparkdream/x/season/MsgResolveUnappealedModeration";
  value: MsgResolveUnappealedModerationAmino;
}
/**
 * MsgResolveUnappealedModerationResponse defines the response for MsgResolveUnappealedModeration.
 * @name MsgResolveUnappealedModerationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgResolveUnappealedModerationResponse
 */
export interface MsgResolveUnappealedModerationResponse {}
export interface MsgResolveUnappealedModerationResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgResolveUnappealedModerationResponse";
  value: Uint8Array;
}
/**
 * MsgResolveUnappealedModerationResponse defines the response for MsgResolveUnappealedModeration.
 * @name MsgResolveUnappealedModerationResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgResolveUnappealedModerationResponse
 */
export interface MsgResolveUnappealedModerationResponseAmino {}
export interface MsgResolveUnappealedModerationResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgResolveUnappealedModerationResponse";
  value: MsgResolveUnappealedModerationResponseAmino;
}
/**
 * MsgNominate creates a retroactive public goods funding nomination.
 * @name MsgNominate
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgNominate
 */
export interface MsgNominate {
  creator: string;
  /**
   * e.g. "blog/post/42"
   */
  contentRef: string;
  rationale: string;
}
export interface MsgNominateProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgNominate";
  value: Uint8Array;
}
/**
 * MsgNominate creates a retroactive public goods funding nomination.
 * @name MsgNominateAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgNominate
 */
export interface MsgNominateAmino {
  creator?: string;
  /**
   * e.g. "blog/post/42"
   */
  content_ref?: string;
  rationale?: string;
}
export interface MsgNominateAminoMsg {
  type: "sparkdream/x/season/MsgNominate";
  value: MsgNominateAmino;
}
/**
 * MsgNominateResponse defines the response for MsgNominate.
 * @name MsgNominateResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgNominateResponse
 */
export interface MsgNominateResponse {
  nominationId: bigint;
}
export interface MsgNominateResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgNominateResponse";
  value: Uint8Array;
}
/**
 * MsgNominateResponse defines the response for MsgNominate.
 * @name MsgNominateResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgNominateResponse
 */
export interface MsgNominateResponseAmino {
  nomination_id?: string;
}
export interface MsgNominateResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgNominateResponse";
  value: MsgNominateResponseAmino;
}
/**
 * MsgStakeNomination stakes DREAM on a nomination.
 * @name MsgStakeNomination
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgStakeNomination
 */
export interface MsgStakeNomination {
  creator: string;
  nominationId: bigint;
  /**
   * DREAM amount as decimal string
   */
  amount: string;
}
export interface MsgStakeNominationProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgStakeNomination";
  value: Uint8Array;
}
/**
 * MsgStakeNomination stakes DREAM on a nomination.
 * @name MsgStakeNominationAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgStakeNomination
 */
export interface MsgStakeNominationAmino {
  creator?: string;
  nomination_id?: string;
  /**
   * DREAM amount as decimal string
   */
  amount?: string;
}
export interface MsgStakeNominationAminoMsg {
  type: "sparkdream/x/season/MsgStakeNomination";
  value: MsgStakeNominationAmino;
}
/**
 * MsgStakeNominationResponse defines the response for MsgStakeNomination.
 * @name MsgStakeNominationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgStakeNominationResponse
 */
export interface MsgStakeNominationResponse {}
export interface MsgStakeNominationResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgStakeNominationResponse";
  value: Uint8Array;
}
/**
 * MsgStakeNominationResponse defines the response for MsgStakeNomination.
 * @name MsgStakeNominationResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgStakeNominationResponse
 */
export interface MsgStakeNominationResponseAmino {}
export interface MsgStakeNominationResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgStakeNominationResponse";
  value: MsgStakeNominationResponseAmino;
}
/**
 * MsgUnstakeNomination removes a DREAM stake from a nomination.
 * @name MsgUnstakeNomination
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUnstakeNomination
 */
export interface MsgUnstakeNomination {
  creator: string;
  nominationId: bigint;
}
export interface MsgUnstakeNominationProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUnstakeNomination";
  value: Uint8Array;
}
/**
 * MsgUnstakeNomination removes a DREAM stake from a nomination.
 * @name MsgUnstakeNominationAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUnstakeNomination
 */
export interface MsgUnstakeNominationAmino {
  creator?: string;
  nomination_id?: string;
}
export interface MsgUnstakeNominationAminoMsg {
  type: "sparkdream/x/season/MsgUnstakeNomination";
  value: MsgUnstakeNominationAmino;
}
/**
 * MsgUnstakeNominationResponse defines the response for MsgUnstakeNomination.
 * @name MsgUnstakeNominationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUnstakeNominationResponse
 */
export interface MsgUnstakeNominationResponse {}
export interface MsgUnstakeNominationResponseProtoMsg {
  typeUrl: "/sparkdream.season.v1.MsgUnstakeNominationResponse";
  value: Uint8Array;
}
/**
 * MsgUnstakeNominationResponse defines the response for MsgUnstakeNomination.
 * @name MsgUnstakeNominationResponseAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUnstakeNominationResponse
 */
export interface MsgUnstakeNominationResponseAmino {}
export interface MsgUnstakeNominationResponseAminoMsg {
  type: "/sparkdream.season.v1.MsgUnstakeNominationResponse";
  value: MsgUnstakeNominationResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.season.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/season/MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "sparkdream/x/season/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.season.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParams(): MsgUpdateOperationalParams {
  return {
    authority: "",
    operationalParams: SeasonOperationalParams.fromPartial({})
  };
}
/**
 * MsgUpdateOperationalParams is the Msg/UpdateOperationalParams request type.
 * @name MsgUpdateOperationalParams
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateOperationalParams
 */
export const MsgUpdateOperationalParams = {
  typeUrl: "/sparkdream.season.v1.MsgUpdateOperationalParams",
  aminoType: "sparkdream/x/season/MsgUpdateOperationalParams",
  encode(message: MsgUpdateOperationalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.operationalParams !== undefined) {
      SeasonOperationalParams.encode(message.operationalParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.operationalParams = SeasonOperationalParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateOperationalParams>): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    message.authority = object.authority ?? "";
    message.operationalParams = object.operationalParams !== undefined && object.operationalParams !== null ? SeasonOperationalParams.fromPartial(object.operationalParams) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOperationalParamsAmino): MsgUpdateOperationalParams {
    const message = createBaseMsgUpdateOperationalParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.operational_params !== undefined && object.operational_params !== null) {
      message.operationalParams = SeasonOperationalParams.fromAmino(object.operational_params);
    }
    return message;
  },
  toAmino(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.operational_params = message.operationalParams ? SeasonOperationalParams.toAmino(message.operationalParams) : SeasonOperationalParams.toAmino(SeasonOperationalParams.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsAminoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsAminoMsg {
    return {
      type: "sparkdream/x/season/MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsProtoMsg): MsgUpdateOperationalParams {
    return MsgUpdateOperationalParams.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParams): Uint8Array {
    return MsgUpdateOperationalParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParams): MsgUpdateOperationalParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUpdateOperationalParams",
      value: MsgUpdateOperationalParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperationalParamsResponse(): MsgUpdateOperationalParamsResponse {
  return {};
}
/**
 * MsgUpdateOperationalParamsResponse defines the response structure for executing a
 * MsgUpdateOperationalParams message.
 * @name MsgUpdateOperationalParamsResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateOperationalParamsResponse
 */
export const MsgUpdateOperationalParamsResponse = {
  typeUrl: "/sparkdream.season.v1.MsgUpdateOperationalParamsResponse",
  encode(_: MsgUpdateOperationalParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperationalParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperationalParamsResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateOperationalParamsResponse>): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOperationalParamsResponseAmino): MsgUpdateOperationalParamsResponse {
    const message = createBaseMsgUpdateOperationalParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperationalParamsResponseAminoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperationalParamsResponseProtoMsg): MsgUpdateOperationalParamsResponse {
    return MsgUpdateOperationalParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOperationalParamsResponse): Uint8Array {
    return MsgUpdateOperationalParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperationalParamsResponse): MsgUpdateOperationalParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUpdateOperationalParamsResponse",
      value: MsgUpdateOperationalParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetDisplayName(): MsgSetDisplayName {
  return {
    creator: "",
    name: ""
  };
}
/**
 * MsgSetDisplayName defines the MsgSetDisplayName message.
 * @name MsgSetDisplayName
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetDisplayName
 */
export const MsgSetDisplayName = {
  typeUrl: "/sparkdream.season.v1.MsgSetDisplayName",
  aminoType: "sparkdream/x/season/MsgSetDisplayName",
  encode(message: MsgSetDisplayName, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDisplayName {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDisplayName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetDisplayName>): MsgSetDisplayName {
    const message = createBaseMsgSetDisplayName();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgSetDisplayNameAmino): MsgSetDisplayName {
    const message = createBaseMsgSetDisplayName();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgSetDisplayName): MsgSetDisplayNameAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgSetDisplayNameAminoMsg): MsgSetDisplayName {
    return MsgSetDisplayName.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDisplayName): MsgSetDisplayNameAminoMsg {
    return {
      type: "sparkdream/x/season/MsgSetDisplayName",
      value: MsgSetDisplayName.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDisplayNameProtoMsg): MsgSetDisplayName {
    return MsgSetDisplayName.decode(message.value);
  },
  toProto(message: MsgSetDisplayName): Uint8Array {
    return MsgSetDisplayName.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDisplayName): MsgSetDisplayNameProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgSetDisplayName",
      value: MsgSetDisplayName.encode(message).finish()
    };
  }
};
function createBaseMsgSetDisplayNameResponse(): MsgSetDisplayNameResponse {
  return {};
}
/**
 * MsgSetDisplayNameResponse defines the MsgSetDisplayNameResponse message.
 * @name MsgSetDisplayNameResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetDisplayNameResponse
 */
export const MsgSetDisplayNameResponse = {
  typeUrl: "/sparkdream.season.v1.MsgSetDisplayNameResponse",
  encode(_: MsgSetDisplayNameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDisplayNameResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDisplayNameResponse();
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
  fromPartial(_: DeepPartial<MsgSetDisplayNameResponse>): MsgSetDisplayNameResponse {
    const message = createBaseMsgSetDisplayNameResponse();
    return message;
  },
  fromAmino(_: MsgSetDisplayNameResponseAmino): MsgSetDisplayNameResponse {
    const message = createBaseMsgSetDisplayNameResponse();
    return message;
  },
  toAmino(_: MsgSetDisplayNameResponse): MsgSetDisplayNameResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDisplayNameResponseAminoMsg): MsgSetDisplayNameResponse {
    return MsgSetDisplayNameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDisplayNameResponseProtoMsg): MsgSetDisplayNameResponse {
    return MsgSetDisplayNameResponse.decode(message.value);
  },
  toProto(message: MsgSetDisplayNameResponse): Uint8Array {
    return MsgSetDisplayNameResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDisplayNameResponse): MsgSetDisplayNameResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgSetDisplayNameResponse",
      value: MsgSetDisplayNameResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetUsername(): MsgSetUsername {
  return {
    creator: "",
    username: ""
  };
}
/**
 * MsgSetUsername defines the MsgSetUsername message.
 * @name MsgSetUsername
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetUsername
 */
export const MsgSetUsername = {
  typeUrl: "/sparkdream.season.v1.MsgSetUsername",
  aminoType: "sparkdream/x/season/MsgSetUsername",
  encode(message: MsgSetUsername, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetUsername {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUsername();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetUsername>): MsgSetUsername {
    const message = createBaseMsgSetUsername();
    message.creator = object.creator ?? "";
    message.username = object.username ?? "";
    return message;
  },
  fromAmino(object: MsgSetUsernameAmino): MsgSetUsername {
    const message = createBaseMsgSetUsername();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    }
    return message;
  },
  toAmino(message: MsgSetUsername): MsgSetUsernameAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.username = message.username === "" ? undefined : message.username;
    return obj;
  },
  fromAminoMsg(object: MsgSetUsernameAminoMsg): MsgSetUsername {
    return MsgSetUsername.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetUsername): MsgSetUsernameAminoMsg {
    return {
      type: "sparkdream/x/season/MsgSetUsername",
      value: MsgSetUsername.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetUsernameProtoMsg): MsgSetUsername {
    return MsgSetUsername.decode(message.value);
  },
  toProto(message: MsgSetUsername): Uint8Array {
    return MsgSetUsername.encode(message).finish();
  },
  toProtoMsg(message: MsgSetUsername): MsgSetUsernameProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgSetUsername",
      value: MsgSetUsername.encode(message).finish()
    };
  }
};
function createBaseMsgSetUsernameResponse(): MsgSetUsernameResponse {
  return {};
}
/**
 * MsgSetUsernameResponse defines the MsgSetUsernameResponse message.
 * @name MsgSetUsernameResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetUsernameResponse
 */
export const MsgSetUsernameResponse = {
  typeUrl: "/sparkdream.season.v1.MsgSetUsernameResponse",
  encode(_: MsgSetUsernameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetUsernameResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUsernameResponse();
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
  fromPartial(_: DeepPartial<MsgSetUsernameResponse>): MsgSetUsernameResponse {
    const message = createBaseMsgSetUsernameResponse();
    return message;
  },
  fromAmino(_: MsgSetUsernameResponseAmino): MsgSetUsernameResponse {
    const message = createBaseMsgSetUsernameResponse();
    return message;
  },
  toAmino(_: MsgSetUsernameResponse): MsgSetUsernameResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetUsernameResponseAminoMsg): MsgSetUsernameResponse {
    return MsgSetUsernameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetUsernameResponseProtoMsg): MsgSetUsernameResponse {
    return MsgSetUsernameResponse.decode(message.value);
  },
  toProto(message: MsgSetUsernameResponse): Uint8Array {
    return MsgSetUsernameResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetUsernameResponse): MsgSetUsernameResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgSetUsernameResponse",
      value: MsgSetUsernameResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetDisplayTitle(): MsgSetDisplayTitle {
  return {
    creator: "",
    titleId: ""
  };
}
/**
 * MsgSetDisplayTitle defines the MsgSetDisplayTitle message.
 * @name MsgSetDisplayTitle
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetDisplayTitle
 */
export const MsgSetDisplayTitle = {
  typeUrl: "/sparkdream.season.v1.MsgSetDisplayTitle",
  aminoType: "sparkdream/x/season/MsgSetDisplayTitle",
  encode(message: MsgSetDisplayTitle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.titleId !== "") {
      writer.uint32(18).string(message.titleId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDisplayTitle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDisplayTitle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.titleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetDisplayTitle>): MsgSetDisplayTitle {
    const message = createBaseMsgSetDisplayTitle();
    message.creator = object.creator ?? "";
    message.titleId = object.titleId ?? "";
    return message;
  },
  fromAmino(object: MsgSetDisplayTitleAmino): MsgSetDisplayTitle {
    const message = createBaseMsgSetDisplayTitle();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.title_id !== undefined && object.title_id !== null) {
      message.titleId = object.title_id;
    }
    return message;
  },
  toAmino(message: MsgSetDisplayTitle): MsgSetDisplayTitleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.title_id = message.titleId === "" ? undefined : message.titleId;
    return obj;
  },
  fromAminoMsg(object: MsgSetDisplayTitleAminoMsg): MsgSetDisplayTitle {
    return MsgSetDisplayTitle.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDisplayTitle): MsgSetDisplayTitleAminoMsg {
    return {
      type: "sparkdream/x/season/MsgSetDisplayTitle",
      value: MsgSetDisplayTitle.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDisplayTitleProtoMsg): MsgSetDisplayTitle {
    return MsgSetDisplayTitle.decode(message.value);
  },
  toProto(message: MsgSetDisplayTitle): Uint8Array {
    return MsgSetDisplayTitle.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDisplayTitle): MsgSetDisplayTitleProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgSetDisplayTitle",
      value: MsgSetDisplayTitle.encode(message).finish()
    };
  }
};
function createBaseMsgSetDisplayTitleResponse(): MsgSetDisplayTitleResponse {
  return {};
}
/**
 * MsgSetDisplayTitleResponse defines the MsgSetDisplayTitleResponse message.
 * @name MsgSetDisplayTitleResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetDisplayTitleResponse
 */
export const MsgSetDisplayTitleResponse = {
  typeUrl: "/sparkdream.season.v1.MsgSetDisplayTitleResponse",
  encode(_: MsgSetDisplayTitleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDisplayTitleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDisplayTitleResponse();
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
  fromPartial(_: DeepPartial<MsgSetDisplayTitleResponse>): MsgSetDisplayTitleResponse {
    const message = createBaseMsgSetDisplayTitleResponse();
    return message;
  },
  fromAmino(_: MsgSetDisplayTitleResponseAmino): MsgSetDisplayTitleResponse {
    const message = createBaseMsgSetDisplayTitleResponse();
    return message;
  },
  toAmino(_: MsgSetDisplayTitleResponse): MsgSetDisplayTitleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDisplayTitleResponseAminoMsg): MsgSetDisplayTitleResponse {
    return MsgSetDisplayTitleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDisplayTitleResponseProtoMsg): MsgSetDisplayTitleResponse {
    return MsgSetDisplayTitleResponse.decode(message.value);
  },
  toProto(message: MsgSetDisplayTitleResponse): Uint8Array {
    return MsgSetDisplayTitleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDisplayTitleResponse): MsgSetDisplayTitleResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgSetDisplayTitleResponse",
      value: MsgSetDisplayTitleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGuild(): MsgCreateGuild {
  return {
    creator: "",
    name: "",
    description: "",
    inviteOnly: false
  };
}
/**
 * MsgCreateGuild defines the MsgCreateGuild message.
 * @name MsgCreateGuild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateGuild
 */
export const MsgCreateGuild = {
  typeUrl: "/sparkdream.season.v1.MsgCreateGuild",
  aminoType: "sparkdream/x/season/MsgCreateGuild",
  encode(message: MsgCreateGuild, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.inviteOnly === true) {
      writer.uint32(32).bool(message.inviteOnly);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGuild {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.inviteOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateGuild>): MsgCreateGuild {
    const message = createBaseMsgCreateGuild();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.inviteOnly = object.inviteOnly ?? false;
    return message;
  },
  fromAmino(object: MsgCreateGuildAmino): MsgCreateGuild {
    const message = createBaseMsgCreateGuild();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.invite_only !== undefined && object.invite_only !== null) {
      message.inviteOnly = object.invite_only;
    }
    return message;
  },
  toAmino(message: MsgCreateGuild): MsgCreateGuildAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.invite_only = message.inviteOnly === false ? undefined : message.inviteOnly;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGuildAminoMsg): MsgCreateGuild {
    return MsgCreateGuild.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGuild): MsgCreateGuildAminoMsg {
    return {
      type: "sparkdream/x/season/MsgCreateGuild",
      value: MsgCreateGuild.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGuildProtoMsg): MsgCreateGuild {
    return MsgCreateGuild.decode(message.value);
  },
  toProto(message: MsgCreateGuild): Uint8Array {
    return MsgCreateGuild.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGuild): MsgCreateGuildProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgCreateGuild",
      value: MsgCreateGuild.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGuildResponse(): MsgCreateGuildResponse {
  return {};
}
/**
 * MsgCreateGuildResponse defines the MsgCreateGuildResponse message.
 * @name MsgCreateGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateGuildResponse
 */
export const MsgCreateGuildResponse = {
  typeUrl: "/sparkdream.season.v1.MsgCreateGuildResponse",
  encode(_: MsgCreateGuildResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGuildResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGuildResponse();
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
  fromPartial(_: DeepPartial<MsgCreateGuildResponse>): MsgCreateGuildResponse {
    const message = createBaseMsgCreateGuildResponse();
    return message;
  },
  fromAmino(_: MsgCreateGuildResponseAmino): MsgCreateGuildResponse {
    const message = createBaseMsgCreateGuildResponse();
    return message;
  },
  toAmino(_: MsgCreateGuildResponse): MsgCreateGuildResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateGuildResponseAminoMsg): MsgCreateGuildResponse {
    return MsgCreateGuildResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGuildResponseProtoMsg): MsgCreateGuildResponse {
    return MsgCreateGuildResponse.decode(message.value);
  },
  toProto(message: MsgCreateGuildResponse): Uint8Array {
    return MsgCreateGuildResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGuildResponse): MsgCreateGuildResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgCreateGuildResponse",
      value: MsgCreateGuildResponse.encode(message).finish()
    };
  }
};
function createBaseMsgJoinGuild(): MsgJoinGuild {
  return {
    creator: "",
    guildId: BigInt(0)
  };
}
/**
 * MsgJoinGuild defines the MsgJoinGuild message.
 * @name MsgJoinGuild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgJoinGuild
 */
export const MsgJoinGuild = {
  typeUrl: "/sparkdream.season.v1.MsgJoinGuild",
  aminoType: "sparkdream/x/season/MsgJoinGuild",
  encode(message: MsgJoinGuild, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinGuild {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgJoinGuild>): MsgJoinGuild {
    const message = createBaseMsgJoinGuild();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgJoinGuildAmino): MsgJoinGuild {
    const message = createBaseMsgJoinGuild();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    return message;
  },
  toAmino(message: MsgJoinGuild): MsgJoinGuildAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgJoinGuildAminoMsg): MsgJoinGuild {
    return MsgJoinGuild.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinGuild): MsgJoinGuildAminoMsg {
    return {
      type: "sparkdream/x/season/MsgJoinGuild",
      value: MsgJoinGuild.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinGuildProtoMsg): MsgJoinGuild {
    return MsgJoinGuild.decode(message.value);
  },
  toProto(message: MsgJoinGuild): Uint8Array {
    return MsgJoinGuild.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinGuild): MsgJoinGuildProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgJoinGuild",
      value: MsgJoinGuild.encode(message).finish()
    };
  }
};
function createBaseMsgJoinGuildResponse(): MsgJoinGuildResponse {
  return {};
}
/**
 * MsgJoinGuildResponse defines the MsgJoinGuildResponse message.
 * @name MsgJoinGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgJoinGuildResponse
 */
export const MsgJoinGuildResponse = {
  typeUrl: "/sparkdream.season.v1.MsgJoinGuildResponse",
  encode(_: MsgJoinGuildResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinGuildResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinGuildResponse();
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
  fromPartial(_: DeepPartial<MsgJoinGuildResponse>): MsgJoinGuildResponse {
    const message = createBaseMsgJoinGuildResponse();
    return message;
  },
  fromAmino(_: MsgJoinGuildResponseAmino): MsgJoinGuildResponse {
    const message = createBaseMsgJoinGuildResponse();
    return message;
  },
  toAmino(_: MsgJoinGuildResponse): MsgJoinGuildResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgJoinGuildResponseAminoMsg): MsgJoinGuildResponse {
    return MsgJoinGuildResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinGuildResponseProtoMsg): MsgJoinGuildResponse {
    return MsgJoinGuildResponse.decode(message.value);
  },
  toProto(message: MsgJoinGuildResponse): Uint8Array {
    return MsgJoinGuildResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinGuildResponse): MsgJoinGuildResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgJoinGuildResponse",
      value: MsgJoinGuildResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveGuild(): MsgLeaveGuild {
  return {
    creator: ""
  };
}
/**
 * MsgLeaveGuild defines the MsgLeaveGuild message.
 * @name MsgLeaveGuild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgLeaveGuild
 */
export const MsgLeaveGuild = {
  typeUrl: "/sparkdream.season.v1.MsgLeaveGuild",
  aminoType: "sparkdream/x/season/MsgLeaveGuild",
  encode(message: MsgLeaveGuild, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveGuild {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgLeaveGuild>): MsgLeaveGuild {
    const message = createBaseMsgLeaveGuild();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgLeaveGuildAmino): MsgLeaveGuild {
    const message = createBaseMsgLeaveGuild();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgLeaveGuild): MsgLeaveGuildAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgLeaveGuildAminoMsg): MsgLeaveGuild {
    return MsgLeaveGuild.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLeaveGuild): MsgLeaveGuildAminoMsg {
    return {
      type: "sparkdream/x/season/MsgLeaveGuild",
      value: MsgLeaveGuild.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLeaveGuildProtoMsg): MsgLeaveGuild {
    return MsgLeaveGuild.decode(message.value);
  },
  toProto(message: MsgLeaveGuild): Uint8Array {
    return MsgLeaveGuild.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaveGuild): MsgLeaveGuildProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgLeaveGuild",
      value: MsgLeaveGuild.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveGuildResponse(): MsgLeaveGuildResponse {
  return {};
}
/**
 * MsgLeaveGuildResponse defines the MsgLeaveGuildResponse message.
 * @name MsgLeaveGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgLeaveGuildResponse
 */
export const MsgLeaveGuildResponse = {
  typeUrl: "/sparkdream.season.v1.MsgLeaveGuildResponse",
  encode(_: MsgLeaveGuildResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveGuildResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGuildResponse();
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
  fromPartial(_: DeepPartial<MsgLeaveGuildResponse>): MsgLeaveGuildResponse {
    const message = createBaseMsgLeaveGuildResponse();
    return message;
  },
  fromAmino(_: MsgLeaveGuildResponseAmino): MsgLeaveGuildResponse {
    const message = createBaseMsgLeaveGuildResponse();
    return message;
  },
  toAmino(_: MsgLeaveGuildResponse): MsgLeaveGuildResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLeaveGuildResponseAminoMsg): MsgLeaveGuildResponse {
    return MsgLeaveGuildResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLeaveGuildResponseProtoMsg): MsgLeaveGuildResponse {
    return MsgLeaveGuildResponse.decode(message.value);
  },
  toProto(message: MsgLeaveGuildResponse): Uint8Array {
    return MsgLeaveGuildResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaveGuildResponse): MsgLeaveGuildResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgLeaveGuildResponse",
      value: MsgLeaveGuildResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferGuildFounder(): MsgTransferGuildFounder {
  return {
    creator: "",
    guildId: BigInt(0),
    newFounder: ""
  };
}
/**
 * MsgTransferGuildFounder defines the MsgTransferGuildFounder message.
 * @name MsgTransferGuildFounder
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgTransferGuildFounder
 */
export const MsgTransferGuildFounder = {
  typeUrl: "/sparkdream.season.v1.MsgTransferGuildFounder",
  aminoType: "sparkdream/x/season/MsgTransferGuildFounder",
  encode(message: MsgTransferGuildFounder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    if (message.newFounder !== "") {
      writer.uint32(26).string(message.newFounder);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferGuildFounder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferGuildFounder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        case 3:
          message.newFounder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransferGuildFounder>): MsgTransferGuildFounder {
    const message = createBaseMsgTransferGuildFounder();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.newFounder = object.newFounder ?? "";
    return message;
  },
  fromAmino(object: MsgTransferGuildFounderAmino): MsgTransferGuildFounder {
    const message = createBaseMsgTransferGuildFounder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.new_founder !== undefined && object.new_founder !== null) {
      message.newFounder = object.new_founder;
    }
    return message;
  },
  toAmino(message: MsgTransferGuildFounder): MsgTransferGuildFounderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.new_founder = message.newFounder === "" ? undefined : message.newFounder;
    return obj;
  },
  fromAminoMsg(object: MsgTransferGuildFounderAminoMsg): MsgTransferGuildFounder {
    return MsgTransferGuildFounder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferGuildFounder): MsgTransferGuildFounderAminoMsg {
    return {
      type: "sparkdream/x/season/MsgTransferGuildFounder",
      value: MsgTransferGuildFounder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferGuildFounderProtoMsg): MsgTransferGuildFounder {
    return MsgTransferGuildFounder.decode(message.value);
  },
  toProto(message: MsgTransferGuildFounder): Uint8Array {
    return MsgTransferGuildFounder.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferGuildFounder): MsgTransferGuildFounderProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgTransferGuildFounder",
      value: MsgTransferGuildFounder.encode(message).finish()
    };
  }
};
function createBaseMsgTransferGuildFounderResponse(): MsgTransferGuildFounderResponse {
  return {};
}
/**
 * MsgTransferGuildFounderResponse defines the MsgTransferGuildFounderResponse message.
 * @name MsgTransferGuildFounderResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgTransferGuildFounderResponse
 */
export const MsgTransferGuildFounderResponse = {
  typeUrl: "/sparkdream.season.v1.MsgTransferGuildFounderResponse",
  encode(_: MsgTransferGuildFounderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferGuildFounderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferGuildFounderResponse();
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
  fromPartial(_: DeepPartial<MsgTransferGuildFounderResponse>): MsgTransferGuildFounderResponse {
    const message = createBaseMsgTransferGuildFounderResponse();
    return message;
  },
  fromAmino(_: MsgTransferGuildFounderResponseAmino): MsgTransferGuildFounderResponse {
    const message = createBaseMsgTransferGuildFounderResponse();
    return message;
  },
  toAmino(_: MsgTransferGuildFounderResponse): MsgTransferGuildFounderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferGuildFounderResponseAminoMsg): MsgTransferGuildFounderResponse {
    return MsgTransferGuildFounderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferGuildFounderResponseProtoMsg): MsgTransferGuildFounderResponse {
    return MsgTransferGuildFounderResponse.decode(message.value);
  },
  toProto(message: MsgTransferGuildFounderResponse): Uint8Array {
    return MsgTransferGuildFounderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferGuildFounderResponse): MsgTransferGuildFounderResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgTransferGuildFounderResponse",
      value: MsgTransferGuildFounderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDissolveGuild(): MsgDissolveGuild {
  return {
    creator: "",
    guildId: BigInt(0)
  };
}
/**
 * MsgDissolveGuild defines the MsgDissolveGuild message.
 * @name MsgDissolveGuild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDissolveGuild
 */
export const MsgDissolveGuild = {
  typeUrl: "/sparkdream.season.v1.MsgDissolveGuild",
  aminoType: "sparkdream/x/season/MsgDissolveGuild",
  encode(message: MsgDissolveGuild, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDissolveGuild {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDissolveGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDissolveGuild>): MsgDissolveGuild {
    const message = createBaseMsgDissolveGuild();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDissolveGuildAmino): MsgDissolveGuild {
    const message = createBaseMsgDissolveGuild();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    return message;
  },
  toAmino(message: MsgDissolveGuild): MsgDissolveGuildAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDissolveGuildAminoMsg): MsgDissolveGuild {
    return MsgDissolveGuild.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDissolveGuild): MsgDissolveGuildAminoMsg {
    return {
      type: "sparkdream/x/season/MsgDissolveGuild",
      value: MsgDissolveGuild.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDissolveGuildProtoMsg): MsgDissolveGuild {
    return MsgDissolveGuild.decode(message.value);
  },
  toProto(message: MsgDissolveGuild): Uint8Array {
    return MsgDissolveGuild.encode(message).finish();
  },
  toProtoMsg(message: MsgDissolveGuild): MsgDissolveGuildProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgDissolveGuild",
      value: MsgDissolveGuild.encode(message).finish()
    };
  }
};
function createBaseMsgDissolveGuildResponse(): MsgDissolveGuildResponse {
  return {};
}
/**
 * MsgDissolveGuildResponse defines the MsgDissolveGuildResponse message.
 * @name MsgDissolveGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDissolveGuildResponse
 */
export const MsgDissolveGuildResponse = {
  typeUrl: "/sparkdream.season.v1.MsgDissolveGuildResponse",
  encode(_: MsgDissolveGuildResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDissolveGuildResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDissolveGuildResponse();
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
  fromPartial(_: DeepPartial<MsgDissolveGuildResponse>): MsgDissolveGuildResponse {
    const message = createBaseMsgDissolveGuildResponse();
    return message;
  },
  fromAmino(_: MsgDissolveGuildResponseAmino): MsgDissolveGuildResponse {
    const message = createBaseMsgDissolveGuildResponse();
    return message;
  },
  toAmino(_: MsgDissolveGuildResponse): MsgDissolveGuildResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDissolveGuildResponseAminoMsg): MsgDissolveGuildResponse {
    return MsgDissolveGuildResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDissolveGuildResponseProtoMsg): MsgDissolveGuildResponse {
    return MsgDissolveGuildResponse.decode(message.value);
  },
  toProto(message: MsgDissolveGuildResponse): Uint8Array {
    return MsgDissolveGuildResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDissolveGuildResponse): MsgDissolveGuildResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgDissolveGuildResponse",
      value: MsgDissolveGuildResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPromoteToOfficer(): MsgPromoteToOfficer {
  return {
    creator: "",
    guildId: BigInt(0),
    member: ""
  };
}
/**
 * MsgPromoteToOfficer defines the MsgPromoteToOfficer message.
 * @name MsgPromoteToOfficer
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgPromoteToOfficer
 */
export const MsgPromoteToOfficer = {
  typeUrl: "/sparkdream.season.v1.MsgPromoteToOfficer",
  aminoType: "sparkdream/x/season/MsgPromoteToOfficer",
  encode(message: MsgPromoteToOfficer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    if (message.member !== "") {
      writer.uint32(26).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPromoteToOfficer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPromoteToOfficer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        case 3:
          message.member = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgPromoteToOfficer>): MsgPromoteToOfficer {
    const message = createBaseMsgPromoteToOfficer();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: MsgPromoteToOfficerAmino): MsgPromoteToOfficer {
    const message = createBaseMsgPromoteToOfficer();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: MsgPromoteToOfficer): MsgPromoteToOfficerAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: MsgPromoteToOfficerAminoMsg): MsgPromoteToOfficer {
    return MsgPromoteToOfficer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPromoteToOfficer): MsgPromoteToOfficerAminoMsg {
    return {
      type: "sparkdream/x/season/MsgPromoteToOfficer",
      value: MsgPromoteToOfficer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPromoteToOfficerProtoMsg): MsgPromoteToOfficer {
    return MsgPromoteToOfficer.decode(message.value);
  },
  toProto(message: MsgPromoteToOfficer): Uint8Array {
    return MsgPromoteToOfficer.encode(message).finish();
  },
  toProtoMsg(message: MsgPromoteToOfficer): MsgPromoteToOfficerProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgPromoteToOfficer",
      value: MsgPromoteToOfficer.encode(message).finish()
    };
  }
};
function createBaseMsgPromoteToOfficerResponse(): MsgPromoteToOfficerResponse {
  return {};
}
/**
 * MsgPromoteToOfficerResponse defines the MsgPromoteToOfficerResponse message.
 * @name MsgPromoteToOfficerResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgPromoteToOfficerResponse
 */
export const MsgPromoteToOfficerResponse = {
  typeUrl: "/sparkdream.season.v1.MsgPromoteToOfficerResponse",
  encode(_: MsgPromoteToOfficerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPromoteToOfficerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPromoteToOfficerResponse();
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
  fromPartial(_: DeepPartial<MsgPromoteToOfficerResponse>): MsgPromoteToOfficerResponse {
    const message = createBaseMsgPromoteToOfficerResponse();
    return message;
  },
  fromAmino(_: MsgPromoteToOfficerResponseAmino): MsgPromoteToOfficerResponse {
    const message = createBaseMsgPromoteToOfficerResponse();
    return message;
  },
  toAmino(_: MsgPromoteToOfficerResponse): MsgPromoteToOfficerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPromoteToOfficerResponseAminoMsg): MsgPromoteToOfficerResponse {
    return MsgPromoteToOfficerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPromoteToOfficerResponseProtoMsg): MsgPromoteToOfficerResponse {
    return MsgPromoteToOfficerResponse.decode(message.value);
  },
  toProto(message: MsgPromoteToOfficerResponse): Uint8Array {
    return MsgPromoteToOfficerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPromoteToOfficerResponse): MsgPromoteToOfficerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgPromoteToOfficerResponse",
      value: MsgPromoteToOfficerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDemoteOfficer(): MsgDemoteOfficer {
  return {
    creator: "",
    guildId: BigInt(0),
    officer: ""
  };
}
/**
 * MsgDemoteOfficer defines the MsgDemoteOfficer message.
 * @name MsgDemoteOfficer
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDemoteOfficer
 */
export const MsgDemoteOfficer = {
  typeUrl: "/sparkdream.season.v1.MsgDemoteOfficer",
  aminoType: "sparkdream/x/season/MsgDemoteOfficer",
  encode(message: MsgDemoteOfficer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    if (message.officer !== "") {
      writer.uint32(26).string(message.officer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDemoteOfficer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDemoteOfficer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        case 3:
          message.officer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDemoteOfficer>): MsgDemoteOfficer {
    const message = createBaseMsgDemoteOfficer();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.officer = object.officer ?? "";
    return message;
  },
  fromAmino(object: MsgDemoteOfficerAmino): MsgDemoteOfficer {
    const message = createBaseMsgDemoteOfficer();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.officer !== undefined && object.officer !== null) {
      message.officer = object.officer;
    }
    return message;
  },
  toAmino(message: MsgDemoteOfficer): MsgDemoteOfficerAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.officer = message.officer === "" ? undefined : message.officer;
    return obj;
  },
  fromAminoMsg(object: MsgDemoteOfficerAminoMsg): MsgDemoteOfficer {
    return MsgDemoteOfficer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDemoteOfficer): MsgDemoteOfficerAminoMsg {
    return {
      type: "sparkdream/x/season/MsgDemoteOfficer",
      value: MsgDemoteOfficer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDemoteOfficerProtoMsg): MsgDemoteOfficer {
    return MsgDemoteOfficer.decode(message.value);
  },
  toProto(message: MsgDemoteOfficer): Uint8Array {
    return MsgDemoteOfficer.encode(message).finish();
  },
  toProtoMsg(message: MsgDemoteOfficer): MsgDemoteOfficerProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgDemoteOfficer",
      value: MsgDemoteOfficer.encode(message).finish()
    };
  }
};
function createBaseMsgDemoteOfficerResponse(): MsgDemoteOfficerResponse {
  return {};
}
/**
 * MsgDemoteOfficerResponse defines the MsgDemoteOfficerResponse message.
 * @name MsgDemoteOfficerResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDemoteOfficerResponse
 */
export const MsgDemoteOfficerResponse = {
  typeUrl: "/sparkdream.season.v1.MsgDemoteOfficerResponse",
  encode(_: MsgDemoteOfficerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDemoteOfficerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDemoteOfficerResponse();
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
  fromPartial(_: DeepPartial<MsgDemoteOfficerResponse>): MsgDemoteOfficerResponse {
    const message = createBaseMsgDemoteOfficerResponse();
    return message;
  },
  fromAmino(_: MsgDemoteOfficerResponseAmino): MsgDemoteOfficerResponse {
    const message = createBaseMsgDemoteOfficerResponse();
    return message;
  },
  toAmino(_: MsgDemoteOfficerResponse): MsgDemoteOfficerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDemoteOfficerResponseAminoMsg): MsgDemoteOfficerResponse {
    return MsgDemoteOfficerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDemoteOfficerResponseProtoMsg): MsgDemoteOfficerResponse {
    return MsgDemoteOfficerResponse.decode(message.value);
  },
  toProto(message: MsgDemoteOfficerResponse): Uint8Array {
    return MsgDemoteOfficerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDemoteOfficerResponse): MsgDemoteOfficerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgDemoteOfficerResponse",
      value: MsgDemoteOfficerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInviteToGuild(): MsgInviteToGuild {
  return {
    creator: "",
    guildId: BigInt(0),
    invitee: ""
  };
}
/**
 * MsgInviteToGuild defines the MsgInviteToGuild message.
 * @name MsgInviteToGuild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgInviteToGuild
 */
export const MsgInviteToGuild = {
  typeUrl: "/sparkdream.season.v1.MsgInviteToGuild",
  aminoType: "sparkdream/x/season/MsgInviteToGuild",
  encode(message: MsgInviteToGuild, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    if (message.invitee !== "") {
      writer.uint32(26).string(message.invitee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInviteToGuild {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInviteToGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        case 3:
          message.invitee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgInviteToGuild>): MsgInviteToGuild {
    const message = createBaseMsgInviteToGuild();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.invitee = object.invitee ?? "";
    return message;
  },
  fromAmino(object: MsgInviteToGuildAmino): MsgInviteToGuild {
    const message = createBaseMsgInviteToGuild();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.invitee !== undefined && object.invitee !== null) {
      message.invitee = object.invitee;
    }
    return message;
  },
  toAmino(message: MsgInviteToGuild): MsgInviteToGuildAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.invitee = message.invitee === "" ? undefined : message.invitee;
    return obj;
  },
  fromAminoMsg(object: MsgInviteToGuildAminoMsg): MsgInviteToGuild {
    return MsgInviteToGuild.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInviteToGuild): MsgInviteToGuildAminoMsg {
    return {
      type: "sparkdream/x/season/MsgInviteToGuild",
      value: MsgInviteToGuild.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgInviteToGuildProtoMsg): MsgInviteToGuild {
    return MsgInviteToGuild.decode(message.value);
  },
  toProto(message: MsgInviteToGuild): Uint8Array {
    return MsgInviteToGuild.encode(message).finish();
  },
  toProtoMsg(message: MsgInviteToGuild): MsgInviteToGuildProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgInviteToGuild",
      value: MsgInviteToGuild.encode(message).finish()
    };
  }
};
function createBaseMsgInviteToGuildResponse(): MsgInviteToGuildResponse {
  return {};
}
/**
 * MsgInviteToGuildResponse defines the MsgInviteToGuildResponse message.
 * @name MsgInviteToGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgInviteToGuildResponse
 */
export const MsgInviteToGuildResponse = {
  typeUrl: "/sparkdream.season.v1.MsgInviteToGuildResponse",
  encode(_: MsgInviteToGuildResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgInviteToGuildResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInviteToGuildResponse();
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
  fromPartial(_: DeepPartial<MsgInviteToGuildResponse>): MsgInviteToGuildResponse {
    const message = createBaseMsgInviteToGuildResponse();
    return message;
  },
  fromAmino(_: MsgInviteToGuildResponseAmino): MsgInviteToGuildResponse {
    const message = createBaseMsgInviteToGuildResponse();
    return message;
  },
  toAmino(_: MsgInviteToGuildResponse): MsgInviteToGuildResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInviteToGuildResponseAminoMsg): MsgInviteToGuildResponse {
    return MsgInviteToGuildResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInviteToGuildResponseProtoMsg): MsgInviteToGuildResponse {
    return MsgInviteToGuildResponse.decode(message.value);
  },
  toProto(message: MsgInviteToGuildResponse): Uint8Array {
    return MsgInviteToGuildResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInviteToGuildResponse): MsgInviteToGuildResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgInviteToGuildResponse",
      value: MsgInviteToGuildResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptGuildInvite(): MsgAcceptGuildInvite {
  return {
    creator: "",
    guildId: BigInt(0)
  };
}
/**
 * MsgAcceptGuildInvite defines the MsgAcceptGuildInvite message.
 * @name MsgAcceptGuildInvite
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAcceptGuildInvite
 */
export const MsgAcceptGuildInvite = {
  typeUrl: "/sparkdream.season.v1.MsgAcceptGuildInvite",
  aminoType: "sparkdream/x/season/MsgAcceptGuildInvite",
  encode(message: MsgAcceptGuildInvite, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptGuildInvite {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptGuildInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcceptGuildInvite>): MsgAcceptGuildInvite {
    const message = createBaseMsgAcceptGuildInvite();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAcceptGuildInviteAmino): MsgAcceptGuildInvite {
    const message = createBaseMsgAcceptGuildInvite();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    return message;
  },
  toAmino(message: MsgAcceptGuildInvite): MsgAcceptGuildInviteAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAcceptGuildInviteAminoMsg): MsgAcceptGuildInvite {
    return MsgAcceptGuildInvite.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcceptGuildInvite): MsgAcceptGuildInviteAminoMsg {
    return {
      type: "sparkdream/x/season/MsgAcceptGuildInvite",
      value: MsgAcceptGuildInvite.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcceptGuildInviteProtoMsg): MsgAcceptGuildInvite {
    return MsgAcceptGuildInvite.decode(message.value);
  },
  toProto(message: MsgAcceptGuildInvite): Uint8Array {
    return MsgAcceptGuildInvite.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptGuildInvite): MsgAcceptGuildInviteProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgAcceptGuildInvite",
      value: MsgAcceptGuildInvite.encode(message).finish()
    };
  }
};
function createBaseMsgAcceptGuildInviteResponse(): MsgAcceptGuildInviteResponse {
  return {};
}
/**
 * MsgAcceptGuildInviteResponse defines the MsgAcceptGuildInviteResponse message.
 * @name MsgAcceptGuildInviteResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAcceptGuildInviteResponse
 */
export const MsgAcceptGuildInviteResponse = {
  typeUrl: "/sparkdream.season.v1.MsgAcceptGuildInviteResponse",
  encode(_: MsgAcceptGuildInviteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcceptGuildInviteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptGuildInviteResponse();
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
  fromPartial(_: DeepPartial<MsgAcceptGuildInviteResponse>): MsgAcceptGuildInviteResponse {
    const message = createBaseMsgAcceptGuildInviteResponse();
    return message;
  },
  fromAmino(_: MsgAcceptGuildInviteResponseAmino): MsgAcceptGuildInviteResponse {
    const message = createBaseMsgAcceptGuildInviteResponse();
    return message;
  },
  toAmino(_: MsgAcceptGuildInviteResponse): MsgAcceptGuildInviteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcceptGuildInviteResponseAminoMsg): MsgAcceptGuildInviteResponse {
    return MsgAcceptGuildInviteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcceptGuildInviteResponseProtoMsg): MsgAcceptGuildInviteResponse {
    return MsgAcceptGuildInviteResponse.decode(message.value);
  },
  toProto(message: MsgAcceptGuildInviteResponse): Uint8Array {
    return MsgAcceptGuildInviteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcceptGuildInviteResponse): MsgAcceptGuildInviteResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgAcceptGuildInviteResponse",
      value: MsgAcceptGuildInviteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeGuildInvite(): MsgRevokeGuildInvite {
  return {
    creator: "",
    guildId: BigInt(0),
    invitee: ""
  };
}
/**
 * MsgRevokeGuildInvite defines the MsgRevokeGuildInvite message.
 * @name MsgRevokeGuildInvite
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgRevokeGuildInvite
 */
export const MsgRevokeGuildInvite = {
  typeUrl: "/sparkdream.season.v1.MsgRevokeGuildInvite",
  aminoType: "sparkdream/x/season/MsgRevokeGuildInvite",
  encode(message: MsgRevokeGuildInvite, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    if (message.invitee !== "") {
      writer.uint32(26).string(message.invitee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeGuildInvite {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeGuildInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        case 3:
          message.invitee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevokeGuildInvite>): MsgRevokeGuildInvite {
    const message = createBaseMsgRevokeGuildInvite();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.invitee = object.invitee ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeGuildInviteAmino): MsgRevokeGuildInvite {
    const message = createBaseMsgRevokeGuildInvite();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.invitee !== undefined && object.invitee !== null) {
      message.invitee = object.invitee;
    }
    return message;
  },
  toAmino(message: MsgRevokeGuildInvite): MsgRevokeGuildInviteAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.invitee = message.invitee === "" ? undefined : message.invitee;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeGuildInviteAminoMsg): MsgRevokeGuildInvite {
    return MsgRevokeGuildInvite.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeGuildInvite): MsgRevokeGuildInviteAminoMsg {
    return {
      type: "sparkdream/x/season/MsgRevokeGuildInvite",
      value: MsgRevokeGuildInvite.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeGuildInviteProtoMsg): MsgRevokeGuildInvite {
    return MsgRevokeGuildInvite.decode(message.value);
  },
  toProto(message: MsgRevokeGuildInvite): Uint8Array {
    return MsgRevokeGuildInvite.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeGuildInvite): MsgRevokeGuildInviteProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgRevokeGuildInvite",
      value: MsgRevokeGuildInvite.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeGuildInviteResponse(): MsgRevokeGuildInviteResponse {
  return {};
}
/**
 * MsgRevokeGuildInviteResponse defines the MsgRevokeGuildInviteResponse message.
 * @name MsgRevokeGuildInviteResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgRevokeGuildInviteResponse
 */
export const MsgRevokeGuildInviteResponse = {
  typeUrl: "/sparkdream.season.v1.MsgRevokeGuildInviteResponse",
  encode(_: MsgRevokeGuildInviteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeGuildInviteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeGuildInviteResponse();
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
  fromPartial(_: DeepPartial<MsgRevokeGuildInviteResponse>): MsgRevokeGuildInviteResponse {
    const message = createBaseMsgRevokeGuildInviteResponse();
    return message;
  },
  fromAmino(_: MsgRevokeGuildInviteResponseAmino): MsgRevokeGuildInviteResponse {
    const message = createBaseMsgRevokeGuildInviteResponse();
    return message;
  },
  toAmino(_: MsgRevokeGuildInviteResponse): MsgRevokeGuildInviteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeGuildInviteResponseAminoMsg): MsgRevokeGuildInviteResponse {
    return MsgRevokeGuildInviteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeGuildInviteResponseProtoMsg): MsgRevokeGuildInviteResponse {
    return MsgRevokeGuildInviteResponse.decode(message.value);
  },
  toProto(message: MsgRevokeGuildInviteResponse): Uint8Array {
    return MsgRevokeGuildInviteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeGuildInviteResponse): MsgRevokeGuildInviteResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgRevokeGuildInviteResponse",
      value: MsgRevokeGuildInviteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetGuildInviteOnly(): MsgSetGuildInviteOnly {
  return {
    creator: "",
    guildId: BigInt(0),
    inviteOnly: false
  };
}
/**
 * MsgSetGuildInviteOnly defines the MsgSetGuildInviteOnly message.
 * @name MsgSetGuildInviteOnly
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetGuildInviteOnly
 */
export const MsgSetGuildInviteOnly = {
  typeUrl: "/sparkdream.season.v1.MsgSetGuildInviteOnly",
  aminoType: "sparkdream/x/season/MsgSetGuildInviteOnly",
  encode(message: MsgSetGuildInviteOnly, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    if (message.inviteOnly === true) {
      writer.uint32(24).bool(message.inviteOnly);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetGuildInviteOnly {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetGuildInviteOnly();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        case 3:
          message.inviteOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetGuildInviteOnly>): MsgSetGuildInviteOnly {
    const message = createBaseMsgSetGuildInviteOnly();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.inviteOnly = object.inviteOnly ?? false;
    return message;
  },
  fromAmino(object: MsgSetGuildInviteOnlyAmino): MsgSetGuildInviteOnly {
    const message = createBaseMsgSetGuildInviteOnly();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.invite_only !== undefined && object.invite_only !== null) {
      message.inviteOnly = object.invite_only;
    }
    return message;
  },
  toAmino(message: MsgSetGuildInviteOnly): MsgSetGuildInviteOnlyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.invite_only = message.inviteOnly === false ? undefined : message.inviteOnly;
    return obj;
  },
  fromAminoMsg(object: MsgSetGuildInviteOnlyAminoMsg): MsgSetGuildInviteOnly {
    return MsgSetGuildInviteOnly.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetGuildInviteOnly): MsgSetGuildInviteOnlyAminoMsg {
    return {
      type: "sparkdream/x/season/MsgSetGuildInviteOnly",
      value: MsgSetGuildInviteOnly.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetGuildInviteOnlyProtoMsg): MsgSetGuildInviteOnly {
    return MsgSetGuildInviteOnly.decode(message.value);
  },
  toProto(message: MsgSetGuildInviteOnly): Uint8Array {
    return MsgSetGuildInviteOnly.encode(message).finish();
  },
  toProtoMsg(message: MsgSetGuildInviteOnly): MsgSetGuildInviteOnlyProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgSetGuildInviteOnly",
      value: MsgSetGuildInviteOnly.encode(message).finish()
    };
  }
};
function createBaseMsgSetGuildInviteOnlyResponse(): MsgSetGuildInviteOnlyResponse {
  return {};
}
/**
 * MsgSetGuildInviteOnlyResponse defines the MsgSetGuildInviteOnlyResponse message.
 * @name MsgSetGuildInviteOnlyResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetGuildInviteOnlyResponse
 */
export const MsgSetGuildInviteOnlyResponse = {
  typeUrl: "/sparkdream.season.v1.MsgSetGuildInviteOnlyResponse",
  encode(_: MsgSetGuildInviteOnlyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetGuildInviteOnlyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetGuildInviteOnlyResponse();
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
  fromPartial(_: DeepPartial<MsgSetGuildInviteOnlyResponse>): MsgSetGuildInviteOnlyResponse {
    const message = createBaseMsgSetGuildInviteOnlyResponse();
    return message;
  },
  fromAmino(_: MsgSetGuildInviteOnlyResponseAmino): MsgSetGuildInviteOnlyResponse {
    const message = createBaseMsgSetGuildInviteOnlyResponse();
    return message;
  },
  toAmino(_: MsgSetGuildInviteOnlyResponse): MsgSetGuildInviteOnlyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetGuildInviteOnlyResponseAminoMsg): MsgSetGuildInviteOnlyResponse {
    return MsgSetGuildInviteOnlyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetGuildInviteOnlyResponseProtoMsg): MsgSetGuildInviteOnlyResponse {
    return MsgSetGuildInviteOnlyResponse.decode(message.value);
  },
  toProto(message: MsgSetGuildInviteOnlyResponse): Uint8Array {
    return MsgSetGuildInviteOnlyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetGuildInviteOnlyResponse): MsgSetGuildInviteOnlyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgSetGuildInviteOnlyResponse",
      value: MsgSetGuildInviteOnlyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGuildDescription(): MsgUpdateGuildDescription {
  return {
    creator: "",
    guildId: BigInt(0),
    description: ""
  };
}
/**
 * MsgUpdateGuildDescription defines the MsgUpdateGuildDescription message.
 * @name MsgUpdateGuildDescription
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateGuildDescription
 */
export const MsgUpdateGuildDescription = {
  typeUrl: "/sparkdream.season.v1.MsgUpdateGuildDescription",
  aminoType: "sparkdream/x/season/MsgUpdateGuildDescription",
  encode(message: MsgUpdateGuildDescription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGuildDescription {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGuildDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateGuildDescription>): MsgUpdateGuildDescription {
    const message = createBaseMsgUpdateGuildDescription();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateGuildDescriptionAmino): MsgUpdateGuildDescription {
    const message = createBaseMsgUpdateGuildDescription();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgUpdateGuildDescription): MsgUpdateGuildDescriptionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGuildDescriptionAminoMsg): MsgUpdateGuildDescription {
    return MsgUpdateGuildDescription.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGuildDescription): MsgUpdateGuildDescriptionAminoMsg {
    return {
      type: "sparkdream/x/season/MsgUpdateGuildDescription",
      value: MsgUpdateGuildDescription.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGuildDescriptionProtoMsg): MsgUpdateGuildDescription {
    return MsgUpdateGuildDescription.decode(message.value);
  },
  toProto(message: MsgUpdateGuildDescription): Uint8Array {
    return MsgUpdateGuildDescription.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGuildDescription): MsgUpdateGuildDescriptionProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUpdateGuildDescription",
      value: MsgUpdateGuildDescription.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGuildDescriptionResponse(): MsgUpdateGuildDescriptionResponse {
  return {};
}
/**
 * MsgUpdateGuildDescriptionResponse defines the MsgUpdateGuildDescriptionResponse message.
 * @name MsgUpdateGuildDescriptionResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateGuildDescriptionResponse
 */
export const MsgUpdateGuildDescriptionResponse = {
  typeUrl: "/sparkdream.season.v1.MsgUpdateGuildDescriptionResponse",
  encode(_: MsgUpdateGuildDescriptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGuildDescriptionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGuildDescriptionResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateGuildDescriptionResponse>): MsgUpdateGuildDescriptionResponse {
    const message = createBaseMsgUpdateGuildDescriptionResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGuildDescriptionResponseAmino): MsgUpdateGuildDescriptionResponse {
    const message = createBaseMsgUpdateGuildDescriptionResponse();
    return message;
  },
  toAmino(_: MsgUpdateGuildDescriptionResponse): MsgUpdateGuildDescriptionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGuildDescriptionResponseAminoMsg): MsgUpdateGuildDescriptionResponse {
    return MsgUpdateGuildDescriptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGuildDescriptionResponseProtoMsg): MsgUpdateGuildDescriptionResponse {
    return MsgUpdateGuildDescriptionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGuildDescriptionResponse): Uint8Array {
    return MsgUpdateGuildDescriptionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGuildDescriptionResponse): MsgUpdateGuildDescriptionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUpdateGuildDescriptionResponse",
      value: MsgUpdateGuildDescriptionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgKickFromGuild(): MsgKickFromGuild {
  return {
    creator: "",
    guildId: BigInt(0),
    member: "",
    reason: ""
  };
}
/**
 * MsgKickFromGuild defines the MsgKickFromGuild message.
 * @name MsgKickFromGuild
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgKickFromGuild
 */
export const MsgKickFromGuild = {
  typeUrl: "/sparkdream.season.v1.MsgKickFromGuild",
  aminoType: "sparkdream/x/season/MsgKickFromGuild",
  encode(message: MsgKickFromGuild, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    if (message.member !== "") {
      writer.uint32(26).string(message.member);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgKickFromGuild {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgKickFromGuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        case 3:
          message.member = reader.string();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgKickFromGuild>): MsgKickFromGuild {
    const message = createBaseMsgKickFromGuild();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    message.member = object.member ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgKickFromGuildAmino): MsgKickFromGuild {
    const message = createBaseMsgKickFromGuild();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgKickFromGuild): MsgKickFromGuildAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    obj.member = message.member === "" ? undefined : message.member;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgKickFromGuildAminoMsg): MsgKickFromGuild {
    return MsgKickFromGuild.fromAmino(object.value);
  },
  toAminoMsg(message: MsgKickFromGuild): MsgKickFromGuildAminoMsg {
    return {
      type: "sparkdream/x/season/MsgKickFromGuild",
      value: MsgKickFromGuild.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgKickFromGuildProtoMsg): MsgKickFromGuild {
    return MsgKickFromGuild.decode(message.value);
  },
  toProto(message: MsgKickFromGuild): Uint8Array {
    return MsgKickFromGuild.encode(message).finish();
  },
  toProtoMsg(message: MsgKickFromGuild): MsgKickFromGuildProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgKickFromGuild",
      value: MsgKickFromGuild.encode(message).finish()
    };
  }
};
function createBaseMsgKickFromGuildResponse(): MsgKickFromGuildResponse {
  return {};
}
/**
 * MsgKickFromGuildResponse defines the MsgKickFromGuildResponse message.
 * @name MsgKickFromGuildResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgKickFromGuildResponse
 */
export const MsgKickFromGuildResponse = {
  typeUrl: "/sparkdream.season.v1.MsgKickFromGuildResponse",
  encode(_: MsgKickFromGuildResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgKickFromGuildResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgKickFromGuildResponse();
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
  fromPartial(_: DeepPartial<MsgKickFromGuildResponse>): MsgKickFromGuildResponse {
    const message = createBaseMsgKickFromGuildResponse();
    return message;
  },
  fromAmino(_: MsgKickFromGuildResponseAmino): MsgKickFromGuildResponse {
    const message = createBaseMsgKickFromGuildResponse();
    return message;
  },
  toAmino(_: MsgKickFromGuildResponse): MsgKickFromGuildResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgKickFromGuildResponseAminoMsg): MsgKickFromGuildResponse {
    return MsgKickFromGuildResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgKickFromGuildResponseProtoMsg): MsgKickFromGuildResponse {
    return MsgKickFromGuildResponse.decode(message.value);
  },
  toProto(message: MsgKickFromGuildResponse): Uint8Array {
    return MsgKickFromGuildResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgKickFromGuildResponse): MsgKickFromGuildResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgKickFromGuildResponse",
      value: MsgKickFromGuildResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimGuildFounder(): MsgClaimGuildFounder {
  return {
    creator: "",
    guildId: BigInt(0)
  };
}
/**
 * MsgClaimGuildFounder defines the MsgClaimGuildFounder message.
 * @name MsgClaimGuildFounder
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgClaimGuildFounder
 */
export const MsgClaimGuildFounder = {
  typeUrl: "/sparkdream.season.v1.MsgClaimGuildFounder",
  aminoType: "sparkdream/x/season/MsgClaimGuildFounder",
  encode(message: MsgClaimGuildFounder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.guildId !== BigInt(0)) {
      writer.uint32(16).uint64(message.guildId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimGuildFounder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimGuildFounder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.guildId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimGuildFounder>): MsgClaimGuildFounder {
    const message = createBaseMsgClaimGuildFounder();
    message.creator = object.creator ?? "";
    message.guildId = object.guildId !== undefined && object.guildId !== null ? BigInt(object.guildId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgClaimGuildFounderAmino): MsgClaimGuildFounder {
    const message = createBaseMsgClaimGuildFounder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.guild_id !== undefined && object.guild_id !== null) {
      message.guildId = BigInt(object.guild_id);
    }
    return message;
  },
  toAmino(message: MsgClaimGuildFounder): MsgClaimGuildFounderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.guild_id = message.guildId !== BigInt(0) ? message.guildId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimGuildFounderAminoMsg): MsgClaimGuildFounder {
    return MsgClaimGuildFounder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimGuildFounder): MsgClaimGuildFounderAminoMsg {
    return {
      type: "sparkdream/x/season/MsgClaimGuildFounder",
      value: MsgClaimGuildFounder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimGuildFounderProtoMsg): MsgClaimGuildFounder {
    return MsgClaimGuildFounder.decode(message.value);
  },
  toProto(message: MsgClaimGuildFounder): Uint8Array {
    return MsgClaimGuildFounder.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimGuildFounder): MsgClaimGuildFounderProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgClaimGuildFounder",
      value: MsgClaimGuildFounder.encode(message).finish()
    };
  }
};
function createBaseMsgClaimGuildFounderResponse(): MsgClaimGuildFounderResponse {
  return {};
}
/**
 * MsgClaimGuildFounderResponse defines the MsgClaimGuildFounderResponse message.
 * @name MsgClaimGuildFounderResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgClaimGuildFounderResponse
 */
export const MsgClaimGuildFounderResponse = {
  typeUrl: "/sparkdream.season.v1.MsgClaimGuildFounderResponse",
  encode(_: MsgClaimGuildFounderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimGuildFounderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimGuildFounderResponse();
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
  fromPartial(_: DeepPartial<MsgClaimGuildFounderResponse>): MsgClaimGuildFounderResponse {
    const message = createBaseMsgClaimGuildFounderResponse();
    return message;
  },
  fromAmino(_: MsgClaimGuildFounderResponseAmino): MsgClaimGuildFounderResponse {
    const message = createBaseMsgClaimGuildFounderResponse();
    return message;
  },
  toAmino(_: MsgClaimGuildFounderResponse): MsgClaimGuildFounderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimGuildFounderResponseAminoMsg): MsgClaimGuildFounderResponse {
    return MsgClaimGuildFounderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimGuildFounderResponseProtoMsg): MsgClaimGuildFounderResponse {
    return MsgClaimGuildFounderResponse.decode(message.value);
  },
  toProto(message: MsgClaimGuildFounderResponse): Uint8Array {
    return MsgClaimGuildFounderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimGuildFounderResponse): MsgClaimGuildFounderResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgClaimGuildFounderResponse",
      value: MsgClaimGuildFounderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStartQuest(): MsgStartQuest {
  return {
    creator: "",
    questId: ""
  };
}
/**
 * MsgStartQuest defines the MsgStartQuest message.
 * @name MsgStartQuest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgStartQuest
 */
export const MsgStartQuest = {
  typeUrl: "/sparkdream.season.v1.MsgStartQuest",
  aminoType: "sparkdream/x/season/MsgStartQuest",
  encode(message: MsgStartQuest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.questId !== "") {
      writer.uint32(18).string(message.questId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStartQuest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartQuest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.questId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgStartQuest>): MsgStartQuest {
    const message = createBaseMsgStartQuest();
    message.creator = object.creator ?? "";
    message.questId = object.questId ?? "";
    return message;
  },
  fromAmino(object: MsgStartQuestAmino): MsgStartQuest {
    const message = createBaseMsgStartQuest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.quest_id !== undefined && object.quest_id !== null) {
      message.questId = object.quest_id;
    }
    return message;
  },
  toAmino(message: MsgStartQuest): MsgStartQuestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.quest_id = message.questId === "" ? undefined : message.questId;
    return obj;
  },
  fromAminoMsg(object: MsgStartQuestAminoMsg): MsgStartQuest {
    return MsgStartQuest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStartQuest): MsgStartQuestAminoMsg {
    return {
      type: "sparkdream/x/season/MsgStartQuest",
      value: MsgStartQuest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStartQuestProtoMsg): MsgStartQuest {
    return MsgStartQuest.decode(message.value);
  },
  toProto(message: MsgStartQuest): Uint8Array {
    return MsgStartQuest.encode(message).finish();
  },
  toProtoMsg(message: MsgStartQuest): MsgStartQuestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgStartQuest",
      value: MsgStartQuest.encode(message).finish()
    };
  }
};
function createBaseMsgStartQuestResponse(): MsgStartQuestResponse {
  return {};
}
/**
 * MsgStartQuestResponse defines the MsgStartQuestResponse message.
 * @name MsgStartQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgStartQuestResponse
 */
export const MsgStartQuestResponse = {
  typeUrl: "/sparkdream.season.v1.MsgStartQuestResponse",
  encode(_: MsgStartQuestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStartQuestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartQuestResponse();
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
  fromPartial(_: DeepPartial<MsgStartQuestResponse>): MsgStartQuestResponse {
    const message = createBaseMsgStartQuestResponse();
    return message;
  },
  fromAmino(_: MsgStartQuestResponseAmino): MsgStartQuestResponse {
    const message = createBaseMsgStartQuestResponse();
    return message;
  },
  toAmino(_: MsgStartQuestResponse): MsgStartQuestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStartQuestResponseAminoMsg): MsgStartQuestResponse {
    return MsgStartQuestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStartQuestResponseProtoMsg): MsgStartQuestResponse {
    return MsgStartQuestResponse.decode(message.value);
  },
  toProto(message: MsgStartQuestResponse): Uint8Array {
    return MsgStartQuestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStartQuestResponse): MsgStartQuestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgStartQuestResponse",
      value: MsgStartQuestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimQuestReward(): MsgClaimQuestReward {
  return {
    creator: "",
    questId: ""
  };
}
/**
 * MsgClaimQuestReward defines the MsgClaimQuestReward message.
 * @name MsgClaimQuestReward
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgClaimQuestReward
 */
export const MsgClaimQuestReward = {
  typeUrl: "/sparkdream.season.v1.MsgClaimQuestReward",
  aminoType: "sparkdream/x/season/MsgClaimQuestReward",
  encode(message: MsgClaimQuestReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.questId !== "") {
      writer.uint32(18).string(message.questId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimQuestReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimQuestReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.questId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimQuestReward>): MsgClaimQuestReward {
    const message = createBaseMsgClaimQuestReward();
    message.creator = object.creator ?? "";
    message.questId = object.questId ?? "";
    return message;
  },
  fromAmino(object: MsgClaimQuestRewardAmino): MsgClaimQuestReward {
    const message = createBaseMsgClaimQuestReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.quest_id !== undefined && object.quest_id !== null) {
      message.questId = object.quest_id;
    }
    return message;
  },
  toAmino(message: MsgClaimQuestReward): MsgClaimQuestRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.quest_id = message.questId === "" ? undefined : message.questId;
    return obj;
  },
  fromAminoMsg(object: MsgClaimQuestRewardAminoMsg): MsgClaimQuestReward {
    return MsgClaimQuestReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimQuestReward): MsgClaimQuestRewardAminoMsg {
    return {
      type: "sparkdream/x/season/MsgClaimQuestReward",
      value: MsgClaimQuestReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimQuestRewardProtoMsg): MsgClaimQuestReward {
    return MsgClaimQuestReward.decode(message.value);
  },
  toProto(message: MsgClaimQuestReward): Uint8Array {
    return MsgClaimQuestReward.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimQuestReward): MsgClaimQuestRewardProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgClaimQuestReward",
      value: MsgClaimQuestReward.encode(message).finish()
    };
  }
};
function createBaseMsgClaimQuestRewardResponse(): MsgClaimQuestRewardResponse {
  return {};
}
/**
 * MsgClaimQuestRewardResponse defines the MsgClaimQuestRewardResponse message.
 * @name MsgClaimQuestRewardResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgClaimQuestRewardResponse
 */
export const MsgClaimQuestRewardResponse = {
  typeUrl: "/sparkdream.season.v1.MsgClaimQuestRewardResponse",
  encode(_: MsgClaimQuestRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimQuestRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimQuestRewardResponse();
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
  fromPartial(_: DeepPartial<MsgClaimQuestRewardResponse>): MsgClaimQuestRewardResponse {
    const message = createBaseMsgClaimQuestRewardResponse();
    return message;
  },
  fromAmino(_: MsgClaimQuestRewardResponseAmino): MsgClaimQuestRewardResponse {
    const message = createBaseMsgClaimQuestRewardResponse();
    return message;
  },
  toAmino(_: MsgClaimQuestRewardResponse): MsgClaimQuestRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimQuestRewardResponseAminoMsg): MsgClaimQuestRewardResponse {
    return MsgClaimQuestRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimQuestRewardResponseProtoMsg): MsgClaimQuestRewardResponse {
    return MsgClaimQuestRewardResponse.decode(message.value);
  },
  toProto(message: MsgClaimQuestRewardResponse): Uint8Array {
    return MsgClaimQuestRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimQuestRewardResponse): MsgClaimQuestRewardResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgClaimQuestRewardResponse",
      value: MsgClaimQuestRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAbandonQuest(): MsgAbandonQuest {
  return {
    creator: "",
    questId: ""
  };
}
/**
 * MsgAbandonQuest defines the MsgAbandonQuest message.
 * @name MsgAbandonQuest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAbandonQuest
 */
export const MsgAbandonQuest = {
  typeUrl: "/sparkdream.season.v1.MsgAbandonQuest",
  aminoType: "sparkdream/x/season/MsgAbandonQuest",
  encode(message: MsgAbandonQuest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.questId !== "") {
      writer.uint32(18).string(message.questId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAbandonQuest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAbandonQuest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.questId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAbandonQuest>): MsgAbandonQuest {
    const message = createBaseMsgAbandonQuest();
    message.creator = object.creator ?? "";
    message.questId = object.questId ?? "";
    return message;
  },
  fromAmino(object: MsgAbandonQuestAmino): MsgAbandonQuest {
    const message = createBaseMsgAbandonQuest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.quest_id !== undefined && object.quest_id !== null) {
      message.questId = object.quest_id;
    }
    return message;
  },
  toAmino(message: MsgAbandonQuest): MsgAbandonQuestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.quest_id = message.questId === "" ? undefined : message.questId;
    return obj;
  },
  fromAminoMsg(object: MsgAbandonQuestAminoMsg): MsgAbandonQuest {
    return MsgAbandonQuest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAbandonQuest): MsgAbandonQuestAminoMsg {
    return {
      type: "sparkdream/x/season/MsgAbandonQuest",
      value: MsgAbandonQuest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAbandonQuestProtoMsg): MsgAbandonQuest {
    return MsgAbandonQuest.decode(message.value);
  },
  toProto(message: MsgAbandonQuest): Uint8Array {
    return MsgAbandonQuest.encode(message).finish();
  },
  toProtoMsg(message: MsgAbandonQuest): MsgAbandonQuestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgAbandonQuest",
      value: MsgAbandonQuest.encode(message).finish()
    };
  }
};
function createBaseMsgAbandonQuestResponse(): MsgAbandonQuestResponse {
  return {};
}
/**
 * MsgAbandonQuestResponse defines the MsgAbandonQuestResponse message.
 * @name MsgAbandonQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAbandonQuestResponse
 */
export const MsgAbandonQuestResponse = {
  typeUrl: "/sparkdream.season.v1.MsgAbandonQuestResponse",
  encode(_: MsgAbandonQuestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAbandonQuestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAbandonQuestResponse();
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
  fromPartial(_: DeepPartial<MsgAbandonQuestResponse>): MsgAbandonQuestResponse {
    const message = createBaseMsgAbandonQuestResponse();
    return message;
  },
  fromAmino(_: MsgAbandonQuestResponseAmino): MsgAbandonQuestResponse {
    const message = createBaseMsgAbandonQuestResponse();
    return message;
  },
  toAmino(_: MsgAbandonQuestResponse): MsgAbandonQuestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAbandonQuestResponseAminoMsg): MsgAbandonQuestResponse {
    return MsgAbandonQuestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAbandonQuestResponseProtoMsg): MsgAbandonQuestResponse {
    return MsgAbandonQuestResponse.decode(message.value);
  },
  toProto(message: MsgAbandonQuestResponse): Uint8Array {
    return MsgAbandonQuestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAbandonQuestResponse): MsgAbandonQuestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgAbandonQuestResponse",
      value: MsgAbandonQuestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateQuest(): MsgCreateQuest {
  return {
    authority: "",
    questId: "",
    name: "",
    description: "",
    xpReward: BigInt(0),
    repeatable: false,
    cooldownEpochs: BigInt(0),
    season: BigInt(0),
    startBlock: BigInt(0),
    endBlock: BigInt(0),
    minLevel: BigInt(0),
    requiredAchievement: "",
    prerequisiteQuest: "",
    questChain: ""
  };
}
/**
 * MsgCreateQuest defines the MsgCreateQuest message (governance-gated).
 * @name MsgCreateQuest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateQuest
 */
export const MsgCreateQuest = {
  typeUrl: "/sparkdream.season.v1.MsgCreateQuest",
  aminoType: "sparkdream/x/season/MsgCreateQuest",
  encode(message: MsgCreateQuest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.questId !== "") {
      writer.uint32(18).string(message.questId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.xpReward !== BigInt(0)) {
      writer.uint32(40).uint64(message.xpReward);
    }
    if (message.repeatable === true) {
      writer.uint32(48).bool(message.repeatable);
    }
    if (message.cooldownEpochs !== BigInt(0)) {
      writer.uint32(56).uint64(message.cooldownEpochs);
    }
    if (message.season !== BigInt(0)) {
      writer.uint32(64).uint64(message.season);
    }
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(72).int64(message.startBlock);
    }
    if (message.endBlock !== BigInt(0)) {
      writer.uint32(80).int64(message.endBlock);
    }
    if (message.minLevel !== BigInt(0)) {
      writer.uint32(88).uint64(message.minLevel);
    }
    if (message.requiredAchievement !== "") {
      writer.uint32(98).string(message.requiredAchievement);
    }
    if (message.prerequisiteQuest !== "") {
      writer.uint32(106).string(message.prerequisiteQuest);
    }
    if (message.questChain !== "") {
      writer.uint32(114).string(message.questChain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateQuest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateQuest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.questId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.xpReward = reader.uint64();
          break;
        case 6:
          message.repeatable = reader.bool();
          break;
        case 7:
          message.cooldownEpochs = reader.uint64();
          break;
        case 8:
          message.season = reader.uint64();
          break;
        case 9:
          message.startBlock = reader.int64();
          break;
        case 10:
          message.endBlock = reader.int64();
          break;
        case 11:
          message.minLevel = reader.uint64();
          break;
        case 12:
          message.requiredAchievement = reader.string();
          break;
        case 13:
          message.prerequisiteQuest = reader.string();
          break;
        case 14:
          message.questChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateQuest>): MsgCreateQuest {
    const message = createBaseMsgCreateQuest();
    message.authority = object.authority ?? "";
    message.questId = object.questId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.xpReward = object.xpReward !== undefined && object.xpReward !== null ? BigInt(object.xpReward.toString()) : BigInt(0);
    message.repeatable = object.repeatable ?? false;
    message.cooldownEpochs = object.cooldownEpochs !== undefined && object.cooldownEpochs !== null ? BigInt(object.cooldownEpochs.toString()) : BigInt(0);
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? BigInt(object.endBlock.toString()) : BigInt(0);
    message.minLevel = object.minLevel !== undefined && object.minLevel !== null ? BigInt(object.minLevel.toString()) : BigInt(0);
    message.requiredAchievement = object.requiredAchievement ?? "";
    message.prerequisiteQuest = object.prerequisiteQuest ?? "";
    message.questChain = object.questChain ?? "";
    return message;
  },
  fromAmino(object: MsgCreateQuestAmino): MsgCreateQuest {
    const message = createBaseMsgCreateQuest();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.quest_id !== undefined && object.quest_id !== null) {
      message.questId = object.quest_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.xp_reward !== undefined && object.xp_reward !== null) {
      message.xpReward = BigInt(object.xp_reward);
    }
    if (object.repeatable !== undefined && object.repeatable !== null) {
      message.repeatable = object.repeatable;
    }
    if (object.cooldown_epochs !== undefined && object.cooldown_epochs !== null) {
      message.cooldownEpochs = BigInt(object.cooldown_epochs);
    }
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    if (object.start_block !== undefined && object.start_block !== null) {
      message.startBlock = BigInt(object.start_block);
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = BigInt(object.end_block);
    }
    if (object.min_level !== undefined && object.min_level !== null) {
      message.minLevel = BigInt(object.min_level);
    }
    if (object.required_achievement !== undefined && object.required_achievement !== null) {
      message.requiredAchievement = object.required_achievement;
    }
    if (object.prerequisite_quest !== undefined && object.prerequisite_quest !== null) {
      message.prerequisiteQuest = object.prerequisite_quest;
    }
    if (object.quest_chain !== undefined && object.quest_chain !== null) {
      message.questChain = object.quest_chain;
    }
    return message;
  },
  toAmino(message: MsgCreateQuest): MsgCreateQuestAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.quest_id = message.questId === "" ? undefined : message.questId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.xp_reward = message.xpReward !== BigInt(0) ? message.xpReward?.toString() : undefined;
    obj.repeatable = message.repeatable === false ? undefined : message.repeatable;
    obj.cooldown_epochs = message.cooldownEpochs !== BigInt(0) ? message.cooldownEpochs?.toString() : undefined;
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    obj.start_block = message.startBlock !== BigInt(0) ? message.startBlock?.toString() : undefined;
    obj.end_block = message.endBlock !== BigInt(0) ? message.endBlock?.toString() : undefined;
    obj.min_level = message.minLevel !== BigInt(0) ? message.minLevel?.toString() : undefined;
    obj.required_achievement = message.requiredAchievement === "" ? undefined : message.requiredAchievement;
    obj.prerequisite_quest = message.prerequisiteQuest === "" ? undefined : message.prerequisiteQuest;
    obj.quest_chain = message.questChain === "" ? undefined : message.questChain;
    return obj;
  },
  fromAminoMsg(object: MsgCreateQuestAminoMsg): MsgCreateQuest {
    return MsgCreateQuest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateQuest): MsgCreateQuestAminoMsg {
    return {
      type: "sparkdream/x/season/MsgCreateQuest",
      value: MsgCreateQuest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateQuestProtoMsg): MsgCreateQuest {
    return MsgCreateQuest.decode(message.value);
  },
  toProto(message: MsgCreateQuest): Uint8Array {
    return MsgCreateQuest.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateQuest): MsgCreateQuestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgCreateQuest",
      value: MsgCreateQuest.encode(message).finish()
    };
  }
};
function createBaseMsgCreateQuestResponse(): MsgCreateQuestResponse {
  return {};
}
/**
 * MsgCreateQuestResponse defines the MsgCreateQuestResponse message.
 * @name MsgCreateQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateQuestResponse
 */
export const MsgCreateQuestResponse = {
  typeUrl: "/sparkdream.season.v1.MsgCreateQuestResponse",
  encode(_: MsgCreateQuestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateQuestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateQuestResponse();
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
  fromPartial(_: DeepPartial<MsgCreateQuestResponse>): MsgCreateQuestResponse {
    const message = createBaseMsgCreateQuestResponse();
    return message;
  },
  fromAmino(_: MsgCreateQuestResponseAmino): MsgCreateQuestResponse {
    const message = createBaseMsgCreateQuestResponse();
    return message;
  },
  toAmino(_: MsgCreateQuestResponse): MsgCreateQuestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateQuestResponseAminoMsg): MsgCreateQuestResponse {
    return MsgCreateQuestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateQuestResponseProtoMsg): MsgCreateQuestResponse {
    return MsgCreateQuestResponse.decode(message.value);
  },
  toProto(message: MsgCreateQuestResponse): Uint8Array {
    return MsgCreateQuestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateQuestResponse): MsgCreateQuestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgCreateQuestResponse",
      value: MsgCreateQuestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeactivateQuest(): MsgDeactivateQuest {
  return {
    authority: "",
    questId: ""
  };
}
/**
 * MsgDeactivateQuest defines the MsgDeactivateQuest message (governance-gated).
 * @name MsgDeactivateQuest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeactivateQuest
 */
export const MsgDeactivateQuest = {
  typeUrl: "/sparkdream.season.v1.MsgDeactivateQuest",
  aminoType: "sparkdream/x/season/MsgDeactivateQuest",
  encode(message: MsgDeactivateQuest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.questId !== "") {
      writer.uint32(18).string(message.questId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateQuest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateQuest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.questId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeactivateQuest>): MsgDeactivateQuest {
    const message = createBaseMsgDeactivateQuest();
    message.authority = object.authority ?? "";
    message.questId = object.questId ?? "";
    return message;
  },
  fromAmino(object: MsgDeactivateQuestAmino): MsgDeactivateQuest {
    const message = createBaseMsgDeactivateQuest();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.quest_id !== undefined && object.quest_id !== null) {
      message.questId = object.quest_id;
    }
    return message;
  },
  toAmino(message: MsgDeactivateQuest): MsgDeactivateQuestAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.quest_id = message.questId === "" ? undefined : message.questId;
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateQuestAminoMsg): MsgDeactivateQuest {
    return MsgDeactivateQuest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeactivateQuest): MsgDeactivateQuestAminoMsg {
    return {
      type: "sparkdream/x/season/MsgDeactivateQuest",
      value: MsgDeactivateQuest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeactivateQuestProtoMsg): MsgDeactivateQuest {
    return MsgDeactivateQuest.decode(message.value);
  },
  toProto(message: MsgDeactivateQuest): Uint8Array {
    return MsgDeactivateQuest.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateQuest): MsgDeactivateQuestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgDeactivateQuest",
      value: MsgDeactivateQuest.encode(message).finish()
    };
  }
};
function createBaseMsgDeactivateQuestResponse(): MsgDeactivateQuestResponse {
  return {};
}
/**
 * MsgDeactivateQuestResponse defines the MsgDeactivateQuestResponse message.
 * @name MsgDeactivateQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeactivateQuestResponse
 */
export const MsgDeactivateQuestResponse = {
  typeUrl: "/sparkdream.season.v1.MsgDeactivateQuestResponse",
  encode(_: MsgDeactivateQuestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateQuestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateQuestResponse();
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
  fromPartial(_: DeepPartial<MsgDeactivateQuestResponse>): MsgDeactivateQuestResponse {
    const message = createBaseMsgDeactivateQuestResponse();
    return message;
  },
  fromAmino(_: MsgDeactivateQuestResponseAmino): MsgDeactivateQuestResponse {
    const message = createBaseMsgDeactivateQuestResponse();
    return message;
  },
  toAmino(_: MsgDeactivateQuestResponse): MsgDeactivateQuestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateQuestResponseAminoMsg): MsgDeactivateQuestResponse {
    return MsgDeactivateQuestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeactivateQuestResponseProtoMsg): MsgDeactivateQuestResponse {
    return MsgDeactivateQuestResponse.decode(message.value);
  },
  toProto(message: MsgDeactivateQuestResponse): Uint8Array {
    return MsgDeactivateQuestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateQuestResponse): MsgDeactivateQuestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgDeactivateQuestResponse",
      value: MsgDeactivateQuestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExtendSeason(): MsgExtendSeason {
  return {
    authority: "",
    extensionEpochs: BigInt(0),
    reason: ""
  };
}
/**
 * MsgExtendSeason defines the MsgExtendSeason message (governance-gated).
 * @name MsgExtendSeason
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgExtendSeason
 */
export const MsgExtendSeason = {
  typeUrl: "/sparkdream.season.v1.MsgExtendSeason",
  aminoType: "sparkdream/x/season/MsgExtendSeason",
  encode(message: MsgExtendSeason, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.extensionEpochs !== BigInt(0)) {
      writer.uint32(16).uint64(message.extensionEpochs);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendSeason {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendSeason();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.extensionEpochs = reader.uint64();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgExtendSeason>): MsgExtendSeason {
    const message = createBaseMsgExtendSeason();
    message.authority = object.authority ?? "";
    message.extensionEpochs = object.extensionEpochs !== undefined && object.extensionEpochs !== null ? BigInt(object.extensionEpochs.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgExtendSeasonAmino): MsgExtendSeason {
    const message = createBaseMsgExtendSeason();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.extension_epochs !== undefined && object.extension_epochs !== null) {
      message.extensionEpochs = BigInt(object.extension_epochs);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgExtendSeason): MsgExtendSeasonAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.extension_epochs = message.extensionEpochs !== BigInt(0) ? message.extensionEpochs?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgExtendSeasonAminoMsg): MsgExtendSeason {
    return MsgExtendSeason.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExtendSeason): MsgExtendSeasonAminoMsg {
    return {
      type: "sparkdream/x/season/MsgExtendSeason",
      value: MsgExtendSeason.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExtendSeasonProtoMsg): MsgExtendSeason {
    return MsgExtendSeason.decode(message.value);
  },
  toProto(message: MsgExtendSeason): Uint8Array {
    return MsgExtendSeason.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendSeason): MsgExtendSeasonProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgExtendSeason",
      value: MsgExtendSeason.encode(message).finish()
    };
  }
};
function createBaseMsgExtendSeasonResponse(): MsgExtendSeasonResponse {
  return {};
}
/**
 * MsgExtendSeasonResponse defines the MsgExtendSeasonResponse message.
 * @name MsgExtendSeasonResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgExtendSeasonResponse
 */
export const MsgExtendSeasonResponse = {
  typeUrl: "/sparkdream.season.v1.MsgExtendSeasonResponse",
  encode(_: MsgExtendSeasonResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendSeasonResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendSeasonResponse();
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
  fromPartial(_: DeepPartial<MsgExtendSeasonResponse>): MsgExtendSeasonResponse {
    const message = createBaseMsgExtendSeasonResponse();
    return message;
  },
  fromAmino(_: MsgExtendSeasonResponseAmino): MsgExtendSeasonResponse {
    const message = createBaseMsgExtendSeasonResponse();
    return message;
  },
  toAmino(_: MsgExtendSeasonResponse): MsgExtendSeasonResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExtendSeasonResponseAminoMsg): MsgExtendSeasonResponse {
    return MsgExtendSeasonResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExtendSeasonResponseProtoMsg): MsgExtendSeasonResponse {
    return MsgExtendSeasonResponse.decode(message.value);
  },
  toProto(message: MsgExtendSeasonResponse): Uint8Array {
    return MsgExtendSeasonResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendSeasonResponse): MsgExtendSeasonResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgExtendSeasonResponse",
      value: MsgExtendSeasonResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetNextSeasonInfo(): MsgSetNextSeasonInfo {
  return {
    authority: "",
    name: "",
    theme: ""
  };
}
/**
 * MsgSetNextSeasonInfo defines the MsgSetNextSeasonInfo message (governance-gated).
 * @name MsgSetNextSeasonInfo
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetNextSeasonInfo
 */
export const MsgSetNextSeasonInfo = {
  typeUrl: "/sparkdream.season.v1.MsgSetNextSeasonInfo",
  aminoType: "sparkdream/x/season/MsgSetNextSeasonInfo",
  encode(message: MsgSetNextSeasonInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.theme !== "") {
      writer.uint32(26).string(message.theme);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetNextSeasonInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNextSeasonInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.theme = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetNextSeasonInfo>): MsgSetNextSeasonInfo {
    const message = createBaseMsgSetNextSeasonInfo();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    message.theme = object.theme ?? "";
    return message;
  },
  fromAmino(object: MsgSetNextSeasonInfoAmino): MsgSetNextSeasonInfo {
    const message = createBaseMsgSetNextSeasonInfo();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.theme !== undefined && object.theme !== null) {
      message.theme = object.theme;
    }
    return message;
  },
  toAmino(message: MsgSetNextSeasonInfo): MsgSetNextSeasonInfoAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    obj.theme = message.theme === "" ? undefined : message.theme;
    return obj;
  },
  fromAminoMsg(object: MsgSetNextSeasonInfoAminoMsg): MsgSetNextSeasonInfo {
    return MsgSetNextSeasonInfo.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetNextSeasonInfo): MsgSetNextSeasonInfoAminoMsg {
    return {
      type: "sparkdream/x/season/MsgSetNextSeasonInfo",
      value: MsgSetNextSeasonInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetNextSeasonInfoProtoMsg): MsgSetNextSeasonInfo {
    return MsgSetNextSeasonInfo.decode(message.value);
  },
  toProto(message: MsgSetNextSeasonInfo): Uint8Array {
    return MsgSetNextSeasonInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgSetNextSeasonInfo): MsgSetNextSeasonInfoProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgSetNextSeasonInfo",
      value: MsgSetNextSeasonInfo.encode(message).finish()
    };
  }
};
function createBaseMsgSetNextSeasonInfoResponse(): MsgSetNextSeasonInfoResponse {
  return {};
}
/**
 * MsgSetNextSeasonInfoResponse defines the MsgSetNextSeasonInfoResponse message.
 * @name MsgSetNextSeasonInfoResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSetNextSeasonInfoResponse
 */
export const MsgSetNextSeasonInfoResponse = {
  typeUrl: "/sparkdream.season.v1.MsgSetNextSeasonInfoResponse",
  encode(_: MsgSetNextSeasonInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetNextSeasonInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNextSeasonInfoResponse();
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
  fromPartial(_: DeepPartial<MsgSetNextSeasonInfoResponse>): MsgSetNextSeasonInfoResponse {
    const message = createBaseMsgSetNextSeasonInfoResponse();
    return message;
  },
  fromAmino(_: MsgSetNextSeasonInfoResponseAmino): MsgSetNextSeasonInfoResponse {
    const message = createBaseMsgSetNextSeasonInfoResponse();
    return message;
  },
  toAmino(_: MsgSetNextSeasonInfoResponse): MsgSetNextSeasonInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetNextSeasonInfoResponseAminoMsg): MsgSetNextSeasonInfoResponse {
    return MsgSetNextSeasonInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetNextSeasonInfoResponseProtoMsg): MsgSetNextSeasonInfoResponse {
    return MsgSetNextSeasonInfoResponse.decode(message.value);
  },
  toProto(message: MsgSetNextSeasonInfoResponse): Uint8Array {
    return MsgSetNextSeasonInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetNextSeasonInfoResponse): MsgSetNextSeasonInfoResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgSetNextSeasonInfoResponse",
      value: MsgSetNextSeasonInfoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAbortSeasonTransition(): MsgAbortSeasonTransition {
  return {
    authority: ""
  };
}
/**
 * MsgAbortSeasonTransition defines the MsgAbortSeasonTransition message (governance-gated).
 * @name MsgAbortSeasonTransition
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAbortSeasonTransition
 */
export const MsgAbortSeasonTransition = {
  typeUrl: "/sparkdream.season.v1.MsgAbortSeasonTransition",
  aminoType: "sparkdream/x/season/MsgAbortSeasonTransition",
  encode(message: MsgAbortSeasonTransition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAbortSeasonTransition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAbortSeasonTransition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAbortSeasonTransition>): MsgAbortSeasonTransition {
    const message = createBaseMsgAbortSeasonTransition();
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgAbortSeasonTransitionAmino): MsgAbortSeasonTransition {
    const message = createBaseMsgAbortSeasonTransition();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgAbortSeasonTransition): MsgAbortSeasonTransitionAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgAbortSeasonTransitionAminoMsg): MsgAbortSeasonTransition {
    return MsgAbortSeasonTransition.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAbortSeasonTransition): MsgAbortSeasonTransitionAminoMsg {
    return {
      type: "sparkdream/x/season/MsgAbortSeasonTransition",
      value: MsgAbortSeasonTransition.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAbortSeasonTransitionProtoMsg): MsgAbortSeasonTransition {
    return MsgAbortSeasonTransition.decode(message.value);
  },
  toProto(message: MsgAbortSeasonTransition): Uint8Array {
    return MsgAbortSeasonTransition.encode(message).finish();
  },
  toProtoMsg(message: MsgAbortSeasonTransition): MsgAbortSeasonTransitionProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgAbortSeasonTransition",
      value: MsgAbortSeasonTransition.encode(message).finish()
    };
  }
};
function createBaseMsgAbortSeasonTransitionResponse(): MsgAbortSeasonTransitionResponse {
  return {};
}
/**
 * MsgAbortSeasonTransitionResponse defines the MsgAbortSeasonTransitionResponse message.
 * @name MsgAbortSeasonTransitionResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAbortSeasonTransitionResponse
 */
export const MsgAbortSeasonTransitionResponse = {
  typeUrl: "/sparkdream.season.v1.MsgAbortSeasonTransitionResponse",
  encode(_: MsgAbortSeasonTransitionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAbortSeasonTransitionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAbortSeasonTransitionResponse();
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
  fromPartial(_: DeepPartial<MsgAbortSeasonTransitionResponse>): MsgAbortSeasonTransitionResponse {
    const message = createBaseMsgAbortSeasonTransitionResponse();
    return message;
  },
  fromAmino(_: MsgAbortSeasonTransitionResponseAmino): MsgAbortSeasonTransitionResponse {
    const message = createBaseMsgAbortSeasonTransitionResponse();
    return message;
  },
  toAmino(_: MsgAbortSeasonTransitionResponse): MsgAbortSeasonTransitionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAbortSeasonTransitionResponseAminoMsg): MsgAbortSeasonTransitionResponse {
    return MsgAbortSeasonTransitionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAbortSeasonTransitionResponseProtoMsg): MsgAbortSeasonTransitionResponse {
    return MsgAbortSeasonTransitionResponse.decode(message.value);
  },
  toProto(message: MsgAbortSeasonTransitionResponse): Uint8Array {
    return MsgAbortSeasonTransitionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAbortSeasonTransitionResponse): MsgAbortSeasonTransitionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgAbortSeasonTransitionResponse",
      value: MsgAbortSeasonTransitionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRetrySeasonTransition(): MsgRetrySeasonTransition {
  return {
    authority: ""
  };
}
/**
 * MsgRetrySeasonTransition defines the MsgRetrySeasonTransition message (governance-gated).
 * @name MsgRetrySeasonTransition
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgRetrySeasonTransition
 */
export const MsgRetrySeasonTransition = {
  typeUrl: "/sparkdream.season.v1.MsgRetrySeasonTransition",
  aminoType: "sparkdream/x/season/MsgRetrySeasonTransition",
  encode(message: MsgRetrySeasonTransition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRetrySeasonTransition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetrySeasonTransition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRetrySeasonTransition>): MsgRetrySeasonTransition {
    const message = createBaseMsgRetrySeasonTransition();
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgRetrySeasonTransitionAmino): MsgRetrySeasonTransition {
    const message = createBaseMsgRetrySeasonTransition();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgRetrySeasonTransition): MsgRetrySeasonTransitionAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgRetrySeasonTransitionAminoMsg): MsgRetrySeasonTransition {
    return MsgRetrySeasonTransition.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRetrySeasonTransition): MsgRetrySeasonTransitionAminoMsg {
    return {
      type: "sparkdream/x/season/MsgRetrySeasonTransition",
      value: MsgRetrySeasonTransition.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRetrySeasonTransitionProtoMsg): MsgRetrySeasonTransition {
    return MsgRetrySeasonTransition.decode(message.value);
  },
  toProto(message: MsgRetrySeasonTransition): Uint8Array {
    return MsgRetrySeasonTransition.encode(message).finish();
  },
  toProtoMsg(message: MsgRetrySeasonTransition): MsgRetrySeasonTransitionProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgRetrySeasonTransition",
      value: MsgRetrySeasonTransition.encode(message).finish()
    };
  }
};
function createBaseMsgRetrySeasonTransitionResponse(): MsgRetrySeasonTransitionResponse {
  return {};
}
/**
 * MsgRetrySeasonTransitionResponse defines the MsgRetrySeasonTransitionResponse message.
 * @name MsgRetrySeasonTransitionResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgRetrySeasonTransitionResponse
 */
export const MsgRetrySeasonTransitionResponse = {
  typeUrl: "/sparkdream.season.v1.MsgRetrySeasonTransitionResponse",
  encode(_: MsgRetrySeasonTransitionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRetrySeasonTransitionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetrySeasonTransitionResponse();
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
  fromPartial(_: DeepPartial<MsgRetrySeasonTransitionResponse>): MsgRetrySeasonTransitionResponse {
    const message = createBaseMsgRetrySeasonTransitionResponse();
    return message;
  },
  fromAmino(_: MsgRetrySeasonTransitionResponseAmino): MsgRetrySeasonTransitionResponse {
    const message = createBaseMsgRetrySeasonTransitionResponse();
    return message;
  },
  toAmino(_: MsgRetrySeasonTransitionResponse): MsgRetrySeasonTransitionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRetrySeasonTransitionResponseAminoMsg): MsgRetrySeasonTransitionResponse {
    return MsgRetrySeasonTransitionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRetrySeasonTransitionResponseProtoMsg): MsgRetrySeasonTransitionResponse {
    return MsgRetrySeasonTransitionResponse.decode(message.value);
  },
  toProto(message: MsgRetrySeasonTransitionResponse): Uint8Array {
    return MsgRetrySeasonTransitionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRetrySeasonTransitionResponse): MsgRetrySeasonTransitionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgRetrySeasonTransitionResponse",
      value: MsgRetrySeasonTransitionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSkipTransitionPhase(): MsgSkipTransitionPhase {
  return {
    authority: ""
  };
}
/**
 * MsgSkipTransitionPhase defines the MsgSkipTransitionPhase message (governance-gated).
 * @name MsgSkipTransitionPhase
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSkipTransitionPhase
 */
export const MsgSkipTransitionPhase = {
  typeUrl: "/sparkdream.season.v1.MsgSkipTransitionPhase",
  aminoType: "sparkdream/x/season/MsgSkipTransitionPhase",
  encode(message: MsgSkipTransitionPhase, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSkipTransitionPhase {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSkipTransitionPhase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSkipTransitionPhase>): MsgSkipTransitionPhase {
    const message = createBaseMsgSkipTransitionPhase();
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgSkipTransitionPhaseAmino): MsgSkipTransitionPhase {
    const message = createBaseMsgSkipTransitionPhase();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgSkipTransitionPhase): MsgSkipTransitionPhaseAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgSkipTransitionPhaseAminoMsg): MsgSkipTransitionPhase {
    return MsgSkipTransitionPhase.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSkipTransitionPhase): MsgSkipTransitionPhaseAminoMsg {
    return {
      type: "sparkdream/x/season/MsgSkipTransitionPhase",
      value: MsgSkipTransitionPhase.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSkipTransitionPhaseProtoMsg): MsgSkipTransitionPhase {
    return MsgSkipTransitionPhase.decode(message.value);
  },
  toProto(message: MsgSkipTransitionPhase): Uint8Array {
    return MsgSkipTransitionPhase.encode(message).finish();
  },
  toProtoMsg(message: MsgSkipTransitionPhase): MsgSkipTransitionPhaseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgSkipTransitionPhase",
      value: MsgSkipTransitionPhase.encode(message).finish()
    };
  }
};
function createBaseMsgSkipTransitionPhaseResponse(): MsgSkipTransitionPhaseResponse {
  return {};
}
/**
 * MsgSkipTransitionPhaseResponse defines the MsgSkipTransitionPhaseResponse message.
 * @name MsgSkipTransitionPhaseResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgSkipTransitionPhaseResponse
 */
export const MsgSkipTransitionPhaseResponse = {
  typeUrl: "/sparkdream.season.v1.MsgSkipTransitionPhaseResponse",
  encode(_: MsgSkipTransitionPhaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSkipTransitionPhaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSkipTransitionPhaseResponse();
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
  fromPartial(_: DeepPartial<MsgSkipTransitionPhaseResponse>): MsgSkipTransitionPhaseResponse {
    const message = createBaseMsgSkipTransitionPhaseResponse();
    return message;
  },
  fromAmino(_: MsgSkipTransitionPhaseResponseAmino): MsgSkipTransitionPhaseResponse {
    const message = createBaseMsgSkipTransitionPhaseResponse();
    return message;
  },
  toAmino(_: MsgSkipTransitionPhaseResponse): MsgSkipTransitionPhaseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSkipTransitionPhaseResponseAminoMsg): MsgSkipTransitionPhaseResponse {
    return MsgSkipTransitionPhaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSkipTransitionPhaseResponseProtoMsg): MsgSkipTransitionPhaseResponse {
    return MsgSkipTransitionPhaseResponse.decode(message.value);
  },
  toProto(message: MsgSkipTransitionPhaseResponse): Uint8Array {
    return MsgSkipTransitionPhaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSkipTransitionPhaseResponse): MsgSkipTransitionPhaseResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgSkipTransitionPhaseResponse",
      value: MsgSkipTransitionPhaseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReportDisplayName(): MsgReportDisplayName {
  return {
    creator: "",
    target: "",
    reason: ""
  };
}
/**
 * MsgReportDisplayName defines the MsgReportDisplayName message.
 * @name MsgReportDisplayName
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgReportDisplayName
 */
export const MsgReportDisplayName = {
  typeUrl: "/sparkdream.season.v1.MsgReportDisplayName",
  aminoType: "sparkdream/x/season/MsgReportDisplayName",
  encode(message: MsgReportDisplayName, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.target !== "") {
      writer.uint32(18).string(message.target);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportDisplayName {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportDisplayName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.target = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReportDisplayName>): MsgReportDisplayName {
    const message = createBaseMsgReportDisplayName();
    message.creator = object.creator ?? "";
    message.target = object.target ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgReportDisplayNameAmino): MsgReportDisplayName {
    const message = createBaseMsgReportDisplayName();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgReportDisplayName): MsgReportDisplayNameAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.target = message.target === "" ? undefined : message.target;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgReportDisplayNameAminoMsg): MsgReportDisplayName {
    return MsgReportDisplayName.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReportDisplayName): MsgReportDisplayNameAminoMsg {
    return {
      type: "sparkdream/x/season/MsgReportDisplayName",
      value: MsgReportDisplayName.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgReportDisplayNameProtoMsg): MsgReportDisplayName {
    return MsgReportDisplayName.decode(message.value);
  },
  toProto(message: MsgReportDisplayName): Uint8Array {
    return MsgReportDisplayName.encode(message).finish();
  },
  toProtoMsg(message: MsgReportDisplayName): MsgReportDisplayNameProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgReportDisplayName",
      value: MsgReportDisplayName.encode(message).finish()
    };
  }
};
function createBaseMsgReportDisplayNameResponse(): MsgReportDisplayNameResponse {
  return {};
}
/**
 * MsgReportDisplayNameResponse defines the MsgReportDisplayNameResponse message.
 * @name MsgReportDisplayNameResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgReportDisplayNameResponse
 */
export const MsgReportDisplayNameResponse = {
  typeUrl: "/sparkdream.season.v1.MsgReportDisplayNameResponse",
  encode(_: MsgReportDisplayNameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReportDisplayNameResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportDisplayNameResponse();
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
  fromPartial(_: DeepPartial<MsgReportDisplayNameResponse>): MsgReportDisplayNameResponse {
    const message = createBaseMsgReportDisplayNameResponse();
    return message;
  },
  fromAmino(_: MsgReportDisplayNameResponseAmino): MsgReportDisplayNameResponse {
    const message = createBaseMsgReportDisplayNameResponse();
    return message;
  },
  toAmino(_: MsgReportDisplayNameResponse): MsgReportDisplayNameResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReportDisplayNameResponseAminoMsg): MsgReportDisplayNameResponse {
    return MsgReportDisplayNameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReportDisplayNameResponseProtoMsg): MsgReportDisplayNameResponse {
    return MsgReportDisplayNameResponse.decode(message.value);
  },
  toProto(message: MsgReportDisplayNameResponse): Uint8Array {
    return MsgReportDisplayNameResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReportDisplayNameResponse): MsgReportDisplayNameResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgReportDisplayNameResponse",
      value: MsgReportDisplayNameResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAppealDisplayNameModeration(): MsgAppealDisplayNameModeration {
  return {
    creator: "",
    appealReason: ""
  };
}
/**
 * MsgAppealDisplayNameModeration defines the MsgAppealDisplayNameModeration message.
 * @name MsgAppealDisplayNameModeration
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAppealDisplayNameModeration
 */
export const MsgAppealDisplayNameModeration = {
  typeUrl: "/sparkdream.season.v1.MsgAppealDisplayNameModeration",
  aminoType: "sparkdream/x/season/MsgAppealDisplayNameModeration",
  encode(message: MsgAppealDisplayNameModeration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.appealReason !== "") {
      writer.uint32(18).string(message.appealReason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealDisplayNameModeration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealDisplayNameModeration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.appealReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAppealDisplayNameModeration>): MsgAppealDisplayNameModeration {
    const message = createBaseMsgAppealDisplayNameModeration();
    message.creator = object.creator ?? "";
    message.appealReason = object.appealReason ?? "";
    return message;
  },
  fromAmino(object: MsgAppealDisplayNameModerationAmino): MsgAppealDisplayNameModeration {
    const message = createBaseMsgAppealDisplayNameModeration();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.appeal_reason !== undefined && object.appeal_reason !== null) {
      message.appealReason = object.appeal_reason;
    }
    return message;
  },
  toAmino(message: MsgAppealDisplayNameModeration): MsgAppealDisplayNameModerationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.appeal_reason = message.appealReason === "" ? undefined : message.appealReason;
    return obj;
  },
  fromAminoMsg(object: MsgAppealDisplayNameModerationAminoMsg): MsgAppealDisplayNameModeration {
    return MsgAppealDisplayNameModeration.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAppealDisplayNameModeration): MsgAppealDisplayNameModerationAminoMsg {
    return {
      type: "sparkdream/x/season/MsgAppealDisplayNameModeration",
      value: MsgAppealDisplayNameModeration.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAppealDisplayNameModerationProtoMsg): MsgAppealDisplayNameModeration {
    return MsgAppealDisplayNameModeration.decode(message.value);
  },
  toProto(message: MsgAppealDisplayNameModeration): Uint8Array {
    return MsgAppealDisplayNameModeration.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealDisplayNameModeration): MsgAppealDisplayNameModerationProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgAppealDisplayNameModeration",
      value: MsgAppealDisplayNameModeration.encode(message).finish()
    };
  }
};
function createBaseMsgAppealDisplayNameModerationResponse(): MsgAppealDisplayNameModerationResponse {
  return {};
}
/**
 * MsgAppealDisplayNameModerationResponse defines the MsgAppealDisplayNameModerationResponse message.
 * @name MsgAppealDisplayNameModerationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgAppealDisplayNameModerationResponse
 */
export const MsgAppealDisplayNameModerationResponse = {
  typeUrl: "/sparkdream.season.v1.MsgAppealDisplayNameModerationResponse",
  encode(_: MsgAppealDisplayNameModerationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAppealDisplayNameModerationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppealDisplayNameModerationResponse();
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
  fromPartial(_: DeepPartial<MsgAppealDisplayNameModerationResponse>): MsgAppealDisplayNameModerationResponse {
    const message = createBaseMsgAppealDisplayNameModerationResponse();
    return message;
  },
  fromAmino(_: MsgAppealDisplayNameModerationResponseAmino): MsgAppealDisplayNameModerationResponse {
    const message = createBaseMsgAppealDisplayNameModerationResponse();
    return message;
  },
  toAmino(_: MsgAppealDisplayNameModerationResponse): MsgAppealDisplayNameModerationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAppealDisplayNameModerationResponseAminoMsg): MsgAppealDisplayNameModerationResponse {
    return MsgAppealDisplayNameModerationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAppealDisplayNameModerationResponseProtoMsg): MsgAppealDisplayNameModerationResponse {
    return MsgAppealDisplayNameModerationResponse.decode(message.value);
  },
  toProto(message: MsgAppealDisplayNameModerationResponse): Uint8Array {
    return MsgAppealDisplayNameModerationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAppealDisplayNameModerationResponse): MsgAppealDisplayNameModerationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgAppealDisplayNameModerationResponse",
      value: MsgAppealDisplayNameModerationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAchievement(): MsgCreateAchievement {
  return {
    authority: "",
    achievementId: "",
    name: "",
    description: "",
    rarity: 0,
    xpReward: BigInt(0),
    requirementType: 0,
    requirementThreshold: BigInt(0)
  };
}
/**
 * ============================================================================
 * Achievement Management Messages
 * ============================================================================
 * MsgCreateAchievement creates a new achievement.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgCreateAchievement
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateAchievement
 */
export const MsgCreateAchievement = {
  typeUrl: "/sparkdream.season.v1.MsgCreateAchievement",
  aminoType: "sparkdream/x/season/MsgCreateAchievement",
  encode(message: MsgCreateAchievement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.achievementId !== "") {
      writer.uint32(18).string(message.achievementId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.rarity !== 0) {
      writer.uint32(40).uint32(message.rarity);
    }
    if (message.xpReward !== BigInt(0)) {
      writer.uint32(48).uint64(message.xpReward);
    }
    if (message.requirementType !== 0) {
      writer.uint32(56).uint32(message.requirementType);
    }
    if (message.requirementThreshold !== BigInt(0)) {
      writer.uint32(64).uint64(message.requirementThreshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAchievement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAchievement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.achievementId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.rarity = reader.uint32();
          break;
        case 6:
          message.xpReward = reader.uint64();
          break;
        case 7:
          message.requirementType = reader.uint32();
          break;
        case 8:
          message.requirementThreshold = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateAchievement>): MsgCreateAchievement {
    const message = createBaseMsgCreateAchievement();
    message.authority = object.authority ?? "";
    message.achievementId = object.achievementId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rarity = object.rarity ?? 0;
    message.xpReward = object.xpReward !== undefined && object.xpReward !== null ? BigInt(object.xpReward.toString()) : BigInt(0);
    message.requirementType = object.requirementType ?? 0;
    message.requirementThreshold = object.requirementThreshold !== undefined && object.requirementThreshold !== null ? BigInt(object.requirementThreshold.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateAchievementAmino): MsgCreateAchievement {
    const message = createBaseMsgCreateAchievement();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.achievement_id !== undefined && object.achievement_id !== null) {
      message.achievementId = object.achievement_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.rarity !== undefined && object.rarity !== null) {
      message.rarity = object.rarity;
    }
    if (object.xp_reward !== undefined && object.xp_reward !== null) {
      message.xpReward = BigInt(object.xp_reward);
    }
    if (object.requirement_type !== undefined && object.requirement_type !== null) {
      message.requirementType = object.requirement_type;
    }
    if (object.requirement_threshold !== undefined && object.requirement_threshold !== null) {
      message.requirementThreshold = BigInt(object.requirement_threshold);
    }
    return message;
  },
  toAmino(message: MsgCreateAchievement): MsgCreateAchievementAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.achievement_id = message.achievementId === "" ? undefined : message.achievementId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.rarity = message.rarity === 0 ? undefined : message.rarity;
    obj.xp_reward = message.xpReward !== BigInt(0) ? message.xpReward?.toString() : undefined;
    obj.requirement_type = message.requirementType === 0 ? undefined : message.requirementType;
    obj.requirement_threshold = message.requirementThreshold !== BigInt(0) ? message.requirementThreshold?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAchievementAminoMsg): MsgCreateAchievement {
    return MsgCreateAchievement.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateAchievement): MsgCreateAchievementAminoMsg {
    return {
      type: "sparkdream/x/season/MsgCreateAchievement",
      value: MsgCreateAchievement.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateAchievementProtoMsg): MsgCreateAchievement {
    return MsgCreateAchievement.decode(message.value);
  },
  toProto(message: MsgCreateAchievement): Uint8Array {
    return MsgCreateAchievement.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAchievement): MsgCreateAchievementProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgCreateAchievement",
      value: MsgCreateAchievement.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAchievementResponse(): MsgCreateAchievementResponse {
  return {};
}
/**
 * MsgCreateAchievementResponse is the response for MsgCreateAchievement.
 * @name MsgCreateAchievementResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateAchievementResponse
 */
export const MsgCreateAchievementResponse = {
  typeUrl: "/sparkdream.season.v1.MsgCreateAchievementResponse",
  encode(_: MsgCreateAchievementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAchievementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAchievementResponse();
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
  fromPartial(_: DeepPartial<MsgCreateAchievementResponse>): MsgCreateAchievementResponse {
    const message = createBaseMsgCreateAchievementResponse();
    return message;
  },
  fromAmino(_: MsgCreateAchievementResponseAmino): MsgCreateAchievementResponse {
    const message = createBaseMsgCreateAchievementResponse();
    return message;
  },
  toAmino(_: MsgCreateAchievementResponse): MsgCreateAchievementResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateAchievementResponseAminoMsg): MsgCreateAchievementResponse {
    return MsgCreateAchievementResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAchievementResponseProtoMsg): MsgCreateAchievementResponse {
    return MsgCreateAchievementResponse.decode(message.value);
  },
  toProto(message: MsgCreateAchievementResponse): Uint8Array {
    return MsgCreateAchievementResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAchievementResponse): MsgCreateAchievementResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgCreateAchievementResponse",
      value: MsgCreateAchievementResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAchievement(): MsgUpdateAchievement {
  return {
    authority: "",
    achievementId: "",
    name: "",
    description: "",
    rarity: 0,
    xpReward: BigInt(0),
    requirementType: 0,
    requirementThreshold: BigInt(0)
  };
}
/**
 * MsgUpdateAchievement updates an existing achievement.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgUpdateAchievement
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateAchievement
 */
export const MsgUpdateAchievement = {
  typeUrl: "/sparkdream.season.v1.MsgUpdateAchievement",
  aminoType: "sparkdream/x/season/MsgUpdateAchievement",
  encode(message: MsgUpdateAchievement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.achievementId !== "") {
      writer.uint32(18).string(message.achievementId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.rarity !== 0) {
      writer.uint32(40).uint32(message.rarity);
    }
    if (message.xpReward !== BigInt(0)) {
      writer.uint32(48).uint64(message.xpReward);
    }
    if (message.requirementType !== 0) {
      writer.uint32(56).uint32(message.requirementType);
    }
    if (message.requirementThreshold !== BigInt(0)) {
      writer.uint32(64).uint64(message.requirementThreshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAchievement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAchievement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.achievementId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.rarity = reader.uint32();
          break;
        case 6:
          message.xpReward = reader.uint64();
          break;
        case 7:
          message.requirementType = reader.uint32();
          break;
        case 8:
          message.requirementThreshold = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateAchievement>): MsgUpdateAchievement {
    const message = createBaseMsgUpdateAchievement();
    message.authority = object.authority ?? "";
    message.achievementId = object.achievementId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rarity = object.rarity ?? 0;
    message.xpReward = object.xpReward !== undefined && object.xpReward !== null ? BigInt(object.xpReward.toString()) : BigInt(0);
    message.requirementType = object.requirementType ?? 0;
    message.requirementThreshold = object.requirementThreshold !== undefined && object.requirementThreshold !== null ? BigInt(object.requirementThreshold.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateAchievementAmino): MsgUpdateAchievement {
    const message = createBaseMsgUpdateAchievement();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.achievement_id !== undefined && object.achievement_id !== null) {
      message.achievementId = object.achievement_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.rarity !== undefined && object.rarity !== null) {
      message.rarity = object.rarity;
    }
    if (object.xp_reward !== undefined && object.xp_reward !== null) {
      message.xpReward = BigInt(object.xp_reward);
    }
    if (object.requirement_type !== undefined && object.requirement_type !== null) {
      message.requirementType = object.requirement_type;
    }
    if (object.requirement_threshold !== undefined && object.requirement_threshold !== null) {
      message.requirementThreshold = BigInt(object.requirement_threshold);
    }
    return message;
  },
  toAmino(message: MsgUpdateAchievement): MsgUpdateAchievementAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.achievement_id = message.achievementId === "" ? undefined : message.achievementId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.rarity = message.rarity === 0 ? undefined : message.rarity;
    obj.xp_reward = message.xpReward !== BigInt(0) ? message.xpReward?.toString() : undefined;
    obj.requirement_type = message.requirementType === 0 ? undefined : message.requirementType;
    obj.requirement_threshold = message.requirementThreshold !== BigInt(0) ? message.requirementThreshold?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAchievementAminoMsg): MsgUpdateAchievement {
    return MsgUpdateAchievement.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateAchievement): MsgUpdateAchievementAminoMsg {
    return {
      type: "sparkdream/x/season/MsgUpdateAchievement",
      value: MsgUpdateAchievement.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateAchievementProtoMsg): MsgUpdateAchievement {
    return MsgUpdateAchievement.decode(message.value);
  },
  toProto(message: MsgUpdateAchievement): Uint8Array {
    return MsgUpdateAchievement.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAchievement): MsgUpdateAchievementProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUpdateAchievement",
      value: MsgUpdateAchievement.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAchievementResponse(): MsgUpdateAchievementResponse {
  return {};
}
/**
 * MsgUpdateAchievementResponse is the response for MsgUpdateAchievement.
 * @name MsgUpdateAchievementResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateAchievementResponse
 */
export const MsgUpdateAchievementResponse = {
  typeUrl: "/sparkdream.season.v1.MsgUpdateAchievementResponse",
  encode(_: MsgUpdateAchievementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAchievementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAchievementResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateAchievementResponse>): MsgUpdateAchievementResponse {
    const message = createBaseMsgUpdateAchievementResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAchievementResponseAmino): MsgUpdateAchievementResponse {
    const message = createBaseMsgUpdateAchievementResponse();
    return message;
  },
  toAmino(_: MsgUpdateAchievementResponse): MsgUpdateAchievementResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAchievementResponseAminoMsg): MsgUpdateAchievementResponse {
    return MsgUpdateAchievementResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAchievementResponseProtoMsg): MsgUpdateAchievementResponse {
    return MsgUpdateAchievementResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAchievementResponse): Uint8Array {
    return MsgUpdateAchievementResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAchievementResponse): MsgUpdateAchievementResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUpdateAchievementResponse",
      value: MsgUpdateAchievementResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAchievement(): MsgDeleteAchievement {
  return {
    authority: "",
    achievementId: ""
  };
}
/**
 * MsgDeleteAchievement deletes an achievement.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgDeleteAchievement
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeleteAchievement
 */
export const MsgDeleteAchievement = {
  typeUrl: "/sparkdream.season.v1.MsgDeleteAchievement",
  aminoType: "sparkdream/x/season/MsgDeleteAchievement",
  encode(message: MsgDeleteAchievement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.achievementId !== "") {
      writer.uint32(18).string(message.achievementId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAchievement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAchievement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.achievementId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeleteAchievement>): MsgDeleteAchievement {
    const message = createBaseMsgDeleteAchievement();
    message.authority = object.authority ?? "";
    message.achievementId = object.achievementId ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteAchievementAmino): MsgDeleteAchievement {
    const message = createBaseMsgDeleteAchievement();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.achievement_id !== undefined && object.achievement_id !== null) {
      message.achievementId = object.achievement_id;
    }
    return message;
  },
  toAmino(message: MsgDeleteAchievement): MsgDeleteAchievementAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.achievement_id = message.achievementId === "" ? undefined : message.achievementId;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAchievementAminoMsg): MsgDeleteAchievement {
    return MsgDeleteAchievement.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteAchievement): MsgDeleteAchievementAminoMsg {
    return {
      type: "sparkdream/x/season/MsgDeleteAchievement",
      value: MsgDeleteAchievement.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteAchievementProtoMsg): MsgDeleteAchievement {
    return MsgDeleteAchievement.decode(message.value);
  },
  toProto(message: MsgDeleteAchievement): Uint8Array {
    return MsgDeleteAchievement.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAchievement): MsgDeleteAchievementProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgDeleteAchievement",
      value: MsgDeleteAchievement.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAchievementResponse(): MsgDeleteAchievementResponse {
  return {};
}
/**
 * MsgDeleteAchievementResponse is the response for MsgDeleteAchievement.
 * @name MsgDeleteAchievementResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeleteAchievementResponse
 */
export const MsgDeleteAchievementResponse = {
  typeUrl: "/sparkdream.season.v1.MsgDeleteAchievementResponse",
  encode(_: MsgDeleteAchievementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAchievementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAchievementResponse();
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
  fromPartial(_: DeepPartial<MsgDeleteAchievementResponse>): MsgDeleteAchievementResponse {
    const message = createBaseMsgDeleteAchievementResponse();
    return message;
  },
  fromAmino(_: MsgDeleteAchievementResponseAmino): MsgDeleteAchievementResponse {
    const message = createBaseMsgDeleteAchievementResponse();
    return message;
  },
  toAmino(_: MsgDeleteAchievementResponse): MsgDeleteAchievementResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAchievementResponseAminoMsg): MsgDeleteAchievementResponse {
    return MsgDeleteAchievementResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAchievementResponseProtoMsg): MsgDeleteAchievementResponse {
    return MsgDeleteAchievementResponse.decode(message.value);
  },
  toProto(message: MsgDeleteAchievementResponse): Uint8Array {
    return MsgDeleteAchievementResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAchievementResponse): MsgDeleteAchievementResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgDeleteAchievementResponse",
      value: MsgDeleteAchievementResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTitle(): MsgCreateTitle {
  return {
    authority: "",
    titleId: "",
    name: "",
    description: "",
    rarity: 0,
    requirementType: 0,
    requirementThreshold: BigInt(0),
    requirementSeason: BigInt(0),
    seasonal: false
  };
}
/**
 * ============================================================================
 * Title Management Messages
 * ============================================================================
 * MsgCreateTitle creates a new title.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgCreateTitle
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateTitle
 */
export const MsgCreateTitle = {
  typeUrl: "/sparkdream.season.v1.MsgCreateTitle",
  aminoType: "sparkdream/x/season/MsgCreateTitle",
  encode(message: MsgCreateTitle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.titleId !== "") {
      writer.uint32(18).string(message.titleId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.rarity !== 0) {
      writer.uint32(40).uint32(message.rarity);
    }
    if (message.requirementType !== 0) {
      writer.uint32(48).uint32(message.requirementType);
    }
    if (message.requirementThreshold !== BigInt(0)) {
      writer.uint32(56).uint64(message.requirementThreshold);
    }
    if (message.requirementSeason !== BigInt(0)) {
      writer.uint32(64).uint64(message.requirementSeason);
    }
    if (message.seasonal === true) {
      writer.uint32(72).bool(message.seasonal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTitle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTitle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.titleId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.rarity = reader.uint32();
          break;
        case 6:
          message.requirementType = reader.uint32();
          break;
        case 7:
          message.requirementThreshold = reader.uint64();
          break;
        case 8:
          message.requirementSeason = reader.uint64();
          break;
        case 9:
          message.seasonal = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateTitle>): MsgCreateTitle {
    const message = createBaseMsgCreateTitle();
    message.authority = object.authority ?? "";
    message.titleId = object.titleId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rarity = object.rarity ?? 0;
    message.requirementType = object.requirementType ?? 0;
    message.requirementThreshold = object.requirementThreshold !== undefined && object.requirementThreshold !== null ? BigInt(object.requirementThreshold.toString()) : BigInt(0);
    message.requirementSeason = object.requirementSeason !== undefined && object.requirementSeason !== null ? BigInt(object.requirementSeason.toString()) : BigInt(0);
    message.seasonal = object.seasonal ?? false;
    return message;
  },
  fromAmino(object: MsgCreateTitleAmino): MsgCreateTitle {
    const message = createBaseMsgCreateTitle();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.title_id !== undefined && object.title_id !== null) {
      message.titleId = object.title_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.rarity !== undefined && object.rarity !== null) {
      message.rarity = object.rarity;
    }
    if (object.requirement_type !== undefined && object.requirement_type !== null) {
      message.requirementType = object.requirement_type;
    }
    if (object.requirement_threshold !== undefined && object.requirement_threshold !== null) {
      message.requirementThreshold = BigInt(object.requirement_threshold);
    }
    if (object.requirement_season !== undefined && object.requirement_season !== null) {
      message.requirementSeason = BigInt(object.requirement_season);
    }
    if (object.seasonal !== undefined && object.seasonal !== null) {
      message.seasonal = object.seasonal;
    }
    return message;
  },
  toAmino(message: MsgCreateTitle): MsgCreateTitleAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.title_id = message.titleId === "" ? undefined : message.titleId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.rarity = message.rarity === 0 ? undefined : message.rarity;
    obj.requirement_type = message.requirementType === 0 ? undefined : message.requirementType;
    obj.requirement_threshold = message.requirementThreshold !== BigInt(0) ? message.requirementThreshold?.toString() : undefined;
    obj.requirement_season = message.requirementSeason !== BigInt(0) ? message.requirementSeason?.toString() : undefined;
    obj.seasonal = message.seasonal === false ? undefined : message.seasonal;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTitleAminoMsg): MsgCreateTitle {
    return MsgCreateTitle.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateTitle): MsgCreateTitleAminoMsg {
    return {
      type: "sparkdream/x/season/MsgCreateTitle",
      value: MsgCreateTitle.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateTitleProtoMsg): MsgCreateTitle {
    return MsgCreateTitle.decode(message.value);
  },
  toProto(message: MsgCreateTitle): Uint8Array {
    return MsgCreateTitle.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTitle): MsgCreateTitleProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgCreateTitle",
      value: MsgCreateTitle.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTitleResponse(): MsgCreateTitleResponse {
  return {};
}
/**
 * MsgCreateTitleResponse is the response for MsgCreateTitle.
 * @name MsgCreateTitleResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgCreateTitleResponse
 */
export const MsgCreateTitleResponse = {
  typeUrl: "/sparkdream.season.v1.MsgCreateTitleResponse",
  encode(_: MsgCreateTitleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTitleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTitleResponse();
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
  fromPartial(_: DeepPartial<MsgCreateTitleResponse>): MsgCreateTitleResponse {
    const message = createBaseMsgCreateTitleResponse();
    return message;
  },
  fromAmino(_: MsgCreateTitleResponseAmino): MsgCreateTitleResponse {
    const message = createBaseMsgCreateTitleResponse();
    return message;
  },
  toAmino(_: MsgCreateTitleResponse): MsgCreateTitleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateTitleResponseAminoMsg): MsgCreateTitleResponse {
    return MsgCreateTitleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTitleResponseProtoMsg): MsgCreateTitleResponse {
    return MsgCreateTitleResponse.decode(message.value);
  },
  toProto(message: MsgCreateTitleResponse): Uint8Array {
    return MsgCreateTitleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTitleResponse): MsgCreateTitleResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgCreateTitleResponse",
      value: MsgCreateTitleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTitle(): MsgUpdateTitle {
  return {
    authority: "",
    titleId: "",
    name: "",
    description: "",
    rarity: 0,
    requirementType: 0,
    requirementThreshold: BigInt(0),
    requirementSeason: BigInt(0),
    seasonal: false
  };
}
/**
 * MsgUpdateTitle updates an existing title.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgUpdateTitle
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateTitle
 */
export const MsgUpdateTitle = {
  typeUrl: "/sparkdream.season.v1.MsgUpdateTitle",
  aminoType: "sparkdream/x/season/MsgUpdateTitle",
  encode(message: MsgUpdateTitle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.titleId !== "") {
      writer.uint32(18).string(message.titleId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.rarity !== 0) {
      writer.uint32(40).uint32(message.rarity);
    }
    if (message.requirementType !== 0) {
      writer.uint32(48).uint32(message.requirementType);
    }
    if (message.requirementThreshold !== BigInt(0)) {
      writer.uint32(56).uint64(message.requirementThreshold);
    }
    if (message.requirementSeason !== BigInt(0)) {
      writer.uint32(64).uint64(message.requirementSeason);
    }
    if (message.seasonal === true) {
      writer.uint32(72).bool(message.seasonal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTitle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTitle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.titleId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.rarity = reader.uint32();
          break;
        case 6:
          message.requirementType = reader.uint32();
          break;
        case 7:
          message.requirementThreshold = reader.uint64();
          break;
        case 8:
          message.requirementSeason = reader.uint64();
          break;
        case 9:
          message.seasonal = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateTitle>): MsgUpdateTitle {
    const message = createBaseMsgUpdateTitle();
    message.authority = object.authority ?? "";
    message.titleId = object.titleId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.rarity = object.rarity ?? 0;
    message.requirementType = object.requirementType ?? 0;
    message.requirementThreshold = object.requirementThreshold !== undefined && object.requirementThreshold !== null ? BigInt(object.requirementThreshold.toString()) : BigInt(0);
    message.requirementSeason = object.requirementSeason !== undefined && object.requirementSeason !== null ? BigInt(object.requirementSeason.toString()) : BigInt(0);
    message.seasonal = object.seasonal ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateTitleAmino): MsgUpdateTitle {
    const message = createBaseMsgUpdateTitle();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.title_id !== undefined && object.title_id !== null) {
      message.titleId = object.title_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.rarity !== undefined && object.rarity !== null) {
      message.rarity = object.rarity;
    }
    if (object.requirement_type !== undefined && object.requirement_type !== null) {
      message.requirementType = object.requirement_type;
    }
    if (object.requirement_threshold !== undefined && object.requirement_threshold !== null) {
      message.requirementThreshold = BigInt(object.requirement_threshold);
    }
    if (object.requirement_season !== undefined && object.requirement_season !== null) {
      message.requirementSeason = BigInt(object.requirement_season);
    }
    if (object.seasonal !== undefined && object.seasonal !== null) {
      message.seasonal = object.seasonal;
    }
    return message;
  },
  toAmino(message: MsgUpdateTitle): MsgUpdateTitleAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.title_id = message.titleId === "" ? undefined : message.titleId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.rarity = message.rarity === 0 ? undefined : message.rarity;
    obj.requirement_type = message.requirementType === 0 ? undefined : message.requirementType;
    obj.requirement_threshold = message.requirementThreshold !== BigInt(0) ? message.requirementThreshold?.toString() : undefined;
    obj.requirement_season = message.requirementSeason !== BigInt(0) ? message.requirementSeason?.toString() : undefined;
    obj.seasonal = message.seasonal === false ? undefined : message.seasonal;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTitleAminoMsg): MsgUpdateTitle {
    return MsgUpdateTitle.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateTitle): MsgUpdateTitleAminoMsg {
    return {
      type: "sparkdream/x/season/MsgUpdateTitle",
      value: MsgUpdateTitle.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateTitleProtoMsg): MsgUpdateTitle {
    return MsgUpdateTitle.decode(message.value);
  },
  toProto(message: MsgUpdateTitle): Uint8Array {
    return MsgUpdateTitle.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTitle): MsgUpdateTitleProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUpdateTitle",
      value: MsgUpdateTitle.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTitleResponse(): MsgUpdateTitleResponse {
  return {};
}
/**
 * MsgUpdateTitleResponse is the response for MsgUpdateTitle.
 * @name MsgUpdateTitleResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateTitleResponse
 */
export const MsgUpdateTitleResponse = {
  typeUrl: "/sparkdream.season.v1.MsgUpdateTitleResponse",
  encode(_: MsgUpdateTitleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTitleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTitleResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateTitleResponse>): MsgUpdateTitleResponse {
    const message = createBaseMsgUpdateTitleResponse();
    return message;
  },
  fromAmino(_: MsgUpdateTitleResponseAmino): MsgUpdateTitleResponse {
    const message = createBaseMsgUpdateTitleResponse();
    return message;
  },
  toAmino(_: MsgUpdateTitleResponse): MsgUpdateTitleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTitleResponseAminoMsg): MsgUpdateTitleResponse {
    return MsgUpdateTitleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateTitleResponseProtoMsg): MsgUpdateTitleResponse {
    return MsgUpdateTitleResponse.decode(message.value);
  },
  toProto(message: MsgUpdateTitleResponse): Uint8Array {
    return MsgUpdateTitleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTitleResponse): MsgUpdateTitleResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUpdateTitleResponse",
      value: MsgUpdateTitleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTitle(): MsgDeleteTitle {
  return {
    authority: "",
    titleId: ""
  };
}
/**
 * MsgDeleteTitle deletes a title.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgDeleteTitle
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeleteTitle
 */
export const MsgDeleteTitle = {
  typeUrl: "/sparkdream.season.v1.MsgDeleteTitle",
  aminoType: "sparkdream/x/season/MsgDeleteTitle",
  encode(message: MsgDeleteTitle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.titleId !== "") {
      writer.uint32(18).string(message.titleId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteTitle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteTitle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.titleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeleteTitle>): MsgDeleteTitle {
    const message = createBaseMsgDeleteTitle();
    message.authority = object.authority ?? "";
    message.titleId = object.titleId ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteTitleAmino): MsgDeleteTitle {
    const message = createBaseMsgDeleteTitle();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.title_id !== undefined && object.title_id !== null) {
      message.titleId = object.title_id;
    }
    return message;
  },
  toAmino(message: MsgDeleteTitle): MsgDeleteTitleAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.title_id = message.titleId === "" ? undefined : message.titleId;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTitleAminoMsg): MsgDeleteTitle {
    return MsgDeleteTitle.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteTitle): MsgDeleteTitleAminoMsg {
    return {
      type: "sparkdream/x/season/MsgDeleteTitle",
      value: MsgDeleteTitle.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteTitleProtoMsg): MsgDeleteTitle {
    return MsgDeleteTitle.decode(message.value);
  },
  toProto(message: MsgDeleteTitle): Uint8Array {
    return MsgDeleteTitle.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTitle): MsgDeleteTitleProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgDeleteTitle",
      value: MsgDeleteTitle.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTitleResponse(): MsgDeleteTitleResponse {
  return {};
}
/**
 * MsgDeleteTitleResponse is the response for MsgDeleteTitle.
 * @name MsgDeleteTitleResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgDeleteTitleResponse
 */
export const MsgDeleteTitleResponse = {
  typeUrl: "/sparkdream.season.v1.MsgDeleteTitleResponse",
  encode(_: MsgDeleteTitleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteTitleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteTitleResponse();
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
  fromPartial(_: DeepPartial<MsgDeleteTitleResponse>): MsgDeleteTitleResponse {
    const message = createBaseMsgDeleteTitleResponse();
    return message;
  },
  fromAmino(_: MsgDeleteTitleResponseAmino): MsgDeleteTitleResponse {
    const message = createBaseMsgDeleteTitleResponse();
    return message;
  },
  toAmino(_: MsgDeleteTitleResponse): MsgDeleteTitleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTitleResponseAminoMsg): MsgDeleteTitleResponse {
    return MsgDeleteTitleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTitleResponseProtoMsg): MsgDeleteTitleResponse {
    return MsgDeleteTitleResponse.decode(message.value);
  },
  toProto(message: MsgDeleteTitleResponse): Uint8Array {
    return MsgDeleteTitleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTitleResponse): MsgDeleteTitleResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgDeleteTitleResponse",
      value: MsgDeleteTitleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateQuest(): MsgUpdateQuest {
  return {
    authority: "",
    questId: "",
    name: "",
    description: "",
    xpReward: BigInt(0),
    repeatable: false,
    cooldownEpochs: BigInt(0),
    season: BigInt(0),
    startBlock: BigInt(0),
    endBlock: BigInt(0),
    minLevel: BigInt(0),
    requiredAchievement: "",
    prerequisiteQuest: "",
    questChain: "",
    active: false
  };
}
/**
 * ============================================================================
 * Quest Update Message
 * ============================================================================
 * MsgUpdateQuest updates an existing quest.
 * Authorized: Commons Council or Commons Operations Committee
 * @name MsgUpdateQuest
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateQuest
 */
export const MsgUpdateQuest = {
  typeUrl: "/sparkdream.season.v1.MsgUpdateQuest",
  aminoType: "sparkdream/x/season/MsgUpdateQuest",
  encode(message: MsgUpdateQuest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.questId !== "") {
      writer.uint32(18).string(message.questId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.xpReward !== BigInt(0)) {
      writer.uint32(40).uint64(message.xpReward);
    }
    if (message.repeatable === true) {
      writer.uint32(48).bool(message.repeatable);
    }
    if (message.cooldownEpochs !== BigInt(0)) {
      writer.uint32(56).uint64(message.cooldownEpochs);
    }
    if (message.season !== BigInt(0)) {
      writer.uint32(64).uint64(message.season);
    }
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(72).int64(message.startBlock);
    }
    if (message.endBlock !== BigInt(0)) {
      writer.uint32(80).int64(message.endBlock);
    }
    if (message.minLevel !== BigInt(0)) {
      writer.uint32(88).uint64(message.minLevel);
    }
    if (message.requiredAchievement !== "") {
      writer.uint32(98).string(message.requiredAchievement);
    }
    if (message.prerequisiteQuest !== "") {
      writer.uint32(106).string(message.prerequisiteQuest);
    }
    if (message.questChain !== "") {
      writer.uint32(114).string(message.questChain);
    }
    if (message.active === true) {
      writer.uint32(120).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateQuest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateQuest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.questId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.xpReward = reader.uint64();
          break;
        case 6:
          message.repeatable = reader.bool();
          break;
        case 7:
          message.cooldownEpochs = reader.uint64();
          break;
        case 8:
          message.season = reader.uint64();
          break;
        case 9:
          message.startBlock = reader.int64();
          break;
        case 10:
          message.endBlock = reader.int64();
          break;
        case 11:
          message.minLevel = reader.uint64();
          break;
        case 12:
          message.requiredAchievement = reader.string();
          break;
        case 13:
          message.prerequisiteQuest = reader.string();
          break;
        case 14:
          message.questChain = reader.string();
          break;
        case 15:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateQuest>): MsgUpdateQuest {
    const message = createBaseMsgUpdateQuest();
    message.authority = object.authority ?? "";
    message.questId = object.questId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.xpReward = object.xpReward !== undefined && object.xpReward !== null ? BigInt(object.xpReward.toString()) : BigInt(0);
    message.repeatable = object.repeatable ?? false;
    message.cooldownEpochs = object.cooldownEpochs !== undefined && object.cooldownEpochs !== null ? BigInt(object.cooldownEpochs.toString()) : BigInt(0);
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? BigInt(object.endBlock.toString()) : BigInt(0);
    message.minLevel = object.minLevel !== undefined && object.minLevel !== null ? BigInt(object.minLevel.toString()) : BigInt(0);
    message.requiredAchievement = object.requiredAchievement ?? "";
    message.prerequisiteQuest = object.prerequisiteQuest ?? "";
    message.questChain = object.questChain ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateQuestAmino): MsgUpdateQuest {
    const message = createBaseMsgUpdateQuest();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.quest_id !== undefined && object.quest_id !== null) {
      message.questId = object.quest_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.xp_reward !== undefined && object.xp_reward !== null) {
      message.xpReward = BigInt(object.xp_reward);
    }
    if (object.repeatable !== undefined && object.repeatable !== null) {
      message.repeatable = object.repeatable;
    }
    if (object.cooldown_epochs !== undefined && object.cooldown_epochs !== null) {
      message.cooldownEpochs = BigInt(object.cooldown_epochs);
    }
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    if (object.start_block !== undefined && object.start_block !== null) {
      message.startBlock = BigInt(object.start_block);
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = BigInt(object.end_block);
    }
    if (object.min_level !== undefined && object.min_level !== null) {
      message.minLevel = BigInt(object.min_level);
    }
    if (object.required_achievement !== undefined && object.required_achievement !== null) {
      message.requiredAchievement = object.required_achievement;
    }
    if (object.prerequisite_quest !== undefined && object.prerequisite_quest !== null) {
      message.prerequisiteQuest = object.prerequisite_quest;
    }
    if (object.quest_chain !== undefined && object.quest_chain !== null) {
      message.questChain = object.quest_chain;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: MsgUpdateQuest): MsgUpdateQuestAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.quest_id = message.questId === "" ? undefined : message.questId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.xp_reward = message.xpReward !== BigInt(0) ? message.xpReward?.toString() : undefined;
    obj.repeatable = message.repeatable === false ? undefined : message.repeatable;
    obj.cooldown_epochs = message.cooldownEpochs !== BigInt(0) ? message.cooldownEpochs?.toString() : undefined;
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    obj.start_block = message.startBlock !== BigInt(0) ? message.startBlock?.toString() : undefined;
    obj.end_block = message.endBlock !== BigInt(0) ? message.endBlock?.toString() : undefined;
    obj.min_level = message.minLevel !== BigInt(0) ? message.minLevel?.toString() : undefined;
    obj.required_achievement = message.requiredAchievement === "" ? undefined : message.requiredAchievement;
    obj.prerequisite_quest = message.prerequisiteQuest === "" ? undefined : message.prerequisiteQuest;
    obj.quest_chain = message.questChain === "" ? undefined : message.questChain;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateQuestAminoMsg): MsgUpdateQuest {
    return MsgUpdateQuest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateQuest): MsgUpdateQuestAminoMsg {
    return {
      type: "sparkdream/x/season/MsgUpdateQuest",
      value: MsgUpdateQuest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateQuestProtoMsg): MsgUpdateQuest {
    return MsgUpdateQuest.decode(message.value);
  },
  toProto(message: MsgUpdateQuest): Uint8Array {
    return MsgUpdateQuest.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateQuest): MsgUpdateQuestProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUpdateQuest",
      value: MsgUpdateQuest.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateQuestResponse(): MsgUpdateQuestResponse {
  return {};
}
/**
 * MsgUpdateQuestResponse is the response for MsgUpdateQuest.
 * @name MsgUpdateQuestResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUpdateQuestResponse
 */
export const MsgUpdateQuestResponse = {
  typeUrl: "/sparkdream.season.v1.MsgUpdateQuestResponse",
  encode(_: MsgUpdateQuestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateQuestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateQuestResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateQuestResponse>): MsgUpdateQuestResponse {
    const message = createBaseMsgUpdateQuestResponse();
    return message;
  },
  fromAmino(_: MsgUpdateQuestResponseAmino): MsgUpdateQuestResponse {
    const message = createBaseMsgUpdateQuestResponse();
    return message;
  },
  toAmino(_: MsgUpdateQuestResponse): MsgUpdateQuestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateQuestResponseAminoMsg): MsgUpdateQuestResponse {
    return MsgUpdateQuestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateQuestResponseProtoMsg): MsgUpdateQuestResponse {
    return MsgUpdateQuestResponse.decode(message.value);
  },
  toProto(message: MsgUpdateQuestResponse): Uint8Array {
    return MsgUpdateQuestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateQuestResponse): MsgUpdateQuestResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUpdateQuestResponse",
      value: MsgUpdateQuestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResolveDisplayNameAppeal(): MsgResolveDisplayNameAppeal {
  return {
    authority: "",
    member: "",
    appealSucceeded: false
  };
}
/**
 * MsgResolveDisplayNameAppeal resolves a display name appeal.
 * Authorized: Commons Council, Operations Committee, or governance authority.
 * @name MsgResolveDisplayNameAppeal
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgResolveDisplayNameAppeal
 */
export const MsgResolveDisplayNameAppeal = {
  typeUrl: "/sparkdream.season.v1.MsgResolveDisplayNameAppeal",
  aminoType: "sparkdream/x/season/MsgResolveDisplayNameAppeal",
  encode(message: MsgResolveDisplayNameAppeal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.member !== "") {
      writer.uint32(18).string(message.member);
    }
    if (message.appealSucceeded === true) {
      writer.uint32(24).bool(message.appealSucceeded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveDisplayNameAppeal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveDisplayNameAppeal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.member = reader.string();
          break;
        case 3:
          message.appealSucceeded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgResolveDisplayNameAppeal>): MsgResolveDisplayNameAppeal {
    const message = createBaseMsgResolveDisplayNameAppeal();
    message.authority = object.authority ?? "";
    message.member = object.member ?? "";
    message.appealSucceeded = object.appealSucceeded ?? false;
    return message;
  },
  fromAmino(object: MsgResolveDisplayNameAppealAmino): MsgResolveDisplayNameAppeal {
    const message = createBaseMsgResolveDisplayNameAppeal();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    if (object.appeal_succeeded !== undefined && object.appeal_succeeded !== null) {
      message.appealSucceeded = object.appeal_succeeded;
    }
    return message;
  },
  toAmino(message: MsgResolveDisplayNameAppeal): MsgResolveDisplayNameAppealAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.member = message.member === "" ? undefined : message.member;
    obj.appeal_succeeded = message.appealSucceeded === false ? undefined : message.appealSucceeded;
    return obj;
  },
  fromAminoMsg(object: MsgResolveDisplayNameAppealAminoMsg): MsgResolveDisplayNameAppeal {
    return MsgResolveDisplayNameAppeal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResolveDisplayNameAppeal): MsgResolveDisplayNameAppealAminoMsg {
    return {
      type: "sparkdream/x/season/MsgResolveDisplayNameAppeal",
      value: MsgResolveDisplayNameAppeal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResolveDisplayNameAppealProtoMsg): MsgResolveDisplayNameAppeal {
    return MsgResolveDisplayNameAppeal.decode(message.value);
  },
  toProto(message: MsgResolveDisplayNameAppeal): Uint8Array {
    return MsgResolveDisplayNameAppeal.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveDisplayNameAppeal): MsgResolveDisplayNameAppealProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgResolveDisplayNameAppeal",
      value: MsgResolveDisplayNameAppeal.encode(message).finish()
    };
  }
};
function createBaseMsgResolveDisplayNameAppealResponse(): MsgResolveDisplayNameAppealResponse {
  return {};
}
/**
 * MsgResolveDisplayNameAppealResponse defines the MsgResolveDisplayNameAppealResponse message.
 * @name MsgResolveDisplayNameAppealResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgResolveDisplayNameAppealResponse
 */
export const MsgResolveDisplayNameAppealResponse = {
  typeUrl: "/sparkdream.season.v1.MsgResolveDisplayNameAppealResponse",
  encode(_: MsgResolveDisplayNameAppealResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveDisplayNameAppealResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveDisplayNameAppealResponse();
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
  fromPartial(_: DeepPartial<MsgResolveDisplayNameAppealResponse>): MsgResolveDisplayNameAppealResponse {
    const message = createBaseMsgResolveDisplayNameAppealResponse();
    return message;
  },
  fromAmino(_: MsgResolveDisplayNameAppealResponseAmino): MsgResolveDisplayNameAppealResponse {
    const message = createBaseMsgResolveDisplayNameAppealResponse();
    return message;
  },
  toAmino(_: MsgResolveDisplayNameAppealResponse): MsgResolveDisplayNameAppealResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResolveDisplayNameAppealResponseAminoMsg): MsgResolveDisplayNameAppealResponse {
    return MsgResolveDisplayNameAppealResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveDisplayNameAppealResponseProtoMsg): MsgResolveDisplayNameAppealResponse {
    return MsgResolveDisplayNameAppealResponse.decode(message.value);
  },
  toProto(message: MsgResolveDisplayNameAppealResponse): Uint8Array {
    return MsgResolveDisplayNameAppealResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveDisplayNameAppealResponse): MsgResolveDisplayNameAppealResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgResolveDisplayNameAppealResponse",
      value: MsgResolveDisplayNameAppealResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResolveUnappealedModeration(): MsgResolveUnappealedModeration {
  return {
    authority: "",
    member: ""
  };
}
/**
 * MsgResolveUnappealedModeration resolves a display name moderation where the appeal period
 * expired without an appeal. The report is upheld, the reporter's DREAM stake is returned,
 * and the display name stays cleared.
 * Authorized: Commons Council, Operations Committee, or governance authority.
 * @name MsgResolveUnappealedModeration
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgResolveUnappealedModeration
 */
export const MsgResolveUnappealedModeration = {
  typeUrl: "/sparkdream.season.v1.MsgResolveUnappealedModeration",
  aminoType: "sparkdream/x/season/MsgResolveUnappealedModeration",
  encode(message: MsgResolveUnappealedModeration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.member !== "") {
      writer.uint32(18).string(message.member);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveUnappealedModeration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveUnappealedModeration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.member = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgResolveUnappealedModeration>): MsgResolveUnappealedModeration {
    const message = createBaseMsgResolveUnappealedModeration();
    message.authority = object.authority ?? "";
    message.member = object.member ?? "";
    return message;
  },
  fromAmino(object: MsgResolveUnappealedModerationAmino): MsgResolveUnappealedModeration {
    const message = createBaseMsgResolveUnappealedModeration();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    }
    return message;
  },
  toAmino(message: MsgResolveUnappealedModeration): MsgResolveUnappealedModerationAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.member = message.member === "" ? undefined : message.member;
    return obj;
  },
  fromAminoMsg(object: MsgResolveUnappealedModerationAminoMsg): MsgResolveUnappealedModeration {
    return MsgResolveUnappealedModeration.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResolveUnappealedModeration): MsgResolveUnappealedModerationAminoMsg {
    return {
      type: "sparkdream/x/season/MsgResolveUnappealedModeration",
      value: MsgResolveUnappealedModeration.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResolveUnappealedModerationProtoMsg): MsgResolveUnappealedModeration {
    return MsgResolveUnappealedModeration.decode(message.value);
  },
  toProto(message: MsgResolveUnappealedModeration): Uint8Array {
    return MsgResolveUnappealedModeration.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveUnappealedModeration): MsgResolveUnappealedModerationProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgResolveUnappealedModeration",
      value: MsgResolveUnappealedModeration.encode(message).finish()
    };
  }
};
function createBaseMsgResolveUnappealedModerationResponse(): MsgResolveUnappealedModerationResponse {
  return {};
}
/**
 * MsgResolveUnappealedModerationResponse defines the response for MsgResolveUnappealedModeration.
 * @name MsgResolveUnappealedModerationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgResolveUnappealedModerationResponse
 */
export const MsgResolveUnappealedModerationResponse = {
  typeUrl: "/sparkdream.season.v1.MsgResolveUnappealedModerationResponse",
  encode(_: MsgResolveUnappealedModerationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveUnappealedModerationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveUnappealedModerationResponse();
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
  fromPartial(_: DeepPartial<MsgResolveUnappealedModerationResponse>): MsgResolveUnappealedModerationResponse {
    const message = createBaseMsgResolveUnappealedModerationResponse();
    return message;
  },
  fromAmino(_: MsgResolveUnappealedModerationResponseAmino): MsgResolveUnappealedModerationResponse {
    const message = createBaseMsgResolveUnappealedModerationResponse();
    return message;
  },
  toAmino(_: MsgResolveUnappealedModerationResponse): MsgResolveUnappealedModerationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResolveUnappealedModerationResponseAminoMsg): MsgResolveUnappealedModerationResponse {
    return MsgResolveUnappealedModerationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveUnappealedModerationResponseProtoMsg): MsgResolveUnappealedModerationResponse {
    return MsgResolveUnappealedModerationResponse.decode(message.value);
  },
  toProto(message: MsgResolveUnappealedModerationResponse): Uint8Array {
    return MsgResolveUnappealedModerationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveUnappealedModerationResponse): MsgResolveUnappealedModerationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgResolveUnappealedModerationResponse",
      value: MsgResolveUnappealedModerationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgNominate(): MsgNominate {
  return {
    creator: "",
    contentRef: "",
    rationale: ""
  };
}
/**
 * MsgNominate creates a retroactive public goods funding nomination.
 * @name MsgNominate
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgNominate
 */
export const MsgNominate = {
  typeUrl: "/sparkdream.season.v1.MsgNominate",
  aminoType: "sparkdream/x/season/MsgNominate",
  encode(message: MsgNominate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contentRef !== "") {
      writer.uint32(18).string(message.contentRef);
    }
    if (message.rationale !== "") {
      writer.uint32(26).string(message.rationale);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgNominate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNominate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contentRef = reader.string();
          break;
        case 3:
          message.rationale = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgNominate>): MsgNominate {
    const message = createBaseMsgNominate();
    message.creator = object.creator ?? "";
    message.contentRef = object.contentRef ?? "";
    message.rationale = object.rationale ?? "";
    return message;
  },
  fromAmino(object: MsgNominateAmino): MsgNominate {
    const message = createBaseMsgNominate();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.content_ref !== undefined && object.content_ref !== null) {
      message.contentRef = object.content_ref;
    }
    if (object.rationale !== undefined && object.rationale !== null) {
      message.rationale = object.rationale;
    }
    return message;
  },
  toAmino(message: MsgNominate): MsgNominateAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.content_ref = message.contentRef === "" ? undefined : message.contentRef;
    obj.rationale = message.rationale === "" ? undefined : message.rationale;
    return obj;
  },
  fromAminoMsg(object: MsgNominateAminoMsg): MsgNominate {
    return MsgNominate.fromAmino(object.value);
  },
  toAminoMsg(message: MsgNominate): MsgNominateAminoMsg {
    return {
      type: "sparkdream/x/season/MsgNominate",
      value: MsgNominate.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgNominateProtoMsg): MsgNominate {
    return MsgNominate.decode(message.value);
  },
  toProto(message: MsgNominate): Uint8Array {
    return MsgNominate.encode(message).finish();
  },
  toProtoMsg(message: MsgNominate): MsgNominateProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgNominate",
      value: MsgNominate.encode(message).finish()
    };
  }
};
function createBaseMsgNominateResponse(): MsgNominateResponse {
  return {
    nominationId: BigInt(0)
  };
}
/**
 * MsgNominateResponse defines the response for MsgNominate.
 * @name MsgNominateResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgNominateResponse
 */
export const MsgNominateResponse = {
  typeUrl: "/sparkdream.season.v1.MsgNominateResponse",
  encode(message: MsgNominateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nominationId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nominationId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgNominateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNominateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nominationId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgNominateResponse>): MsgNominateResponse {
    const message = createBaseMsgNominateResponse();
    message.nominationId = object.nominationId !== undefined && object.nominationId !== null ? BigInt(object.nominationId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgNominateResponseAmino): MsgNominateResponse {
    const message = createBaseMsgNominateResponse();
    if (object.nomination_id !== undefined && object.nomination_id !== null) {
      message.nominationId = BigInt(object.nomination_id);
    }
    return message;
  },
  toAmino(message: MsgNominateResponse): MsgNominateResponseAmino {
    const obj: any = {};
    obj.nomination_id = message.nominationId !== BigInt(0) ? message.nominationId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgNominateResponseAminoMsg): MsgNominateResponse {
    return MsgNominateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgNominateResponseProtoMsg): MsgNominateResponse {
    return MsgNominateResponse.decode(message.value);
  },
  toProto(message: MsgNominateResponse): Uint8Array {
    return MsgNominateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgNominateResponse): MsgNominateResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgNominateResponse",
      value: MsgNominateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStakeNomination(): MsgStakeNomination {
  return {
    creator: "",
    nominationId: BigInt(0),
    amount: ""
  };
}
/**
 * MsgStakeNomination stakes DREAM on a nomination.
 * @name MsgStakeNomination
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgStakeNomination
 */
export const MsgStakeNomination = {
  typeUrl: "/sparkdream.season.v1.MsgStakeNomination",
  aminoType: "sparkdream/x/season/MsgStakeNomination",
  encode(message: MsgStakeNomination, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nominationId !== BigInt(0)) {
      writer.uint32(16).uint64(message.nominationId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeNomination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeNomination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nominationId = reader.uint64();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgStakeNomination>): MsgStakeNomination {
    const message = createBaseMsgStakeNomination();
    message.creator = object.creator ?? "";
    message.nominationId = object.nominationId !== undefined && object.nominationId !== null ? BigInt(object.nominationId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgStakeNominationAmino): MsgStakeNomination {
    const message = createBaseMsgStakeNomination();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nomination_id !== undefined && object.nomination_id !== null) {
      message.nominationId = BigInt(object.nomination_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgStakeNomination): MsgStakeNominationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nomination_id = message.nominationId !== BigInt(0) ? message.nominationId?.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgStakeNominationAminoMsg): MsgStakeNomination {
    return MsgStakeNomination.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStakeNomination): MsgStakeNominationAminoMsg {
    return {
      type: "sparkdream/x/season/MsgStakeNomination",
      value: MsgStakeNomination.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStakeNominationProtoMsg): MsgStakeNomination {
    return MsgStakeNomination.decode(message.value);
  },
  toProto(message: MsgStakeNomination): Uint8Array {
    return MsgStakeNomination.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeNomination): MsgStakeNominationProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgStakeNomination",
      value: MsgStakeNomination.encode(message).finish()
    };
  }
};
function createBaseMsgStakeNominationResponse(): MsgStakeNominationResponse {
  return {};
}
/**
 * MsgStakeNominationResponse defines the response for MsgStakeNomination.
 * @name MsgStakeNominationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgStakeNominationResponse
 */
export const MsgStakeNominationResponse = {
  typeUrl: "/sparkdream.season.v1.MsgStakeNominationResponse",
  encode(_: MsgStakeNominationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeNominationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeNominationResponse();
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
  fromPartial(_: DeepPartial<MsgStakeNominationResponse>): MsgStakeNominationResponse {
    const message = createBaseMsgStakeNominationResponse();
    return message;
  },
  fromAmino(_: MsgStakeNominationResponseAmino): MsgStakeNominationResponse {
    const message = createBaseMsgStakeNominationResponse();
    return message;
  },
  toAmino(_: MsgStakeNominationResponse): MsgStakeNominationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgStakeNominationResponseAminoMsg): MsgStakeNominationResponse {
    return MsgStakeNominationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeNominationResponseProtoMsg): MsgStakeNominationResponse {
    return MsgStakeNominationResponse.decode(message.value);
  },
  toProto(message: MsgStakeNominationResponse): Uint8Array {
    return MsgStakeNominationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeNominationResponse): MsgStakeNominationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgStakeNominationResponse",
      value: MsgStakeNominationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeNomination(): MsgUnstakeNomination {
  return {
    creator: "",
    nominationId: BigInt(0)
  };
}
/**
 * MsgUnstakeNomination removes a DREAM stake from a nomination.
 * @name MsgUnstakeNomination
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUnstakeNomination
 */
export const MsgUnstakeNomination = {
  typeUrl: "/sparkdream.season.v1.MsgUnstakeNomination",
  aminoType: "sparkdream/x/season/MsgUnstakeNomination",
  encode(message: MsgUnstakeNomination, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nominationId !== BigInt(0)) {
      writer.uint32(16).uint64(message.nominationId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeNomination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeNomination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nominationId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnstakeNomination>): MsgUnstakeNomination {
    const message = createBaseMsgUnstakeNomination();
    message.creator = object.creator ?? "";
    message.nominationId = object.nominationId !== undefined && object.nominationId !== null ? BigInt(object.nominationId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnstakeNominationAmino): MsgUnstakeNomination {
    const message = createBaseMsgUnstakeNomination();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nomination_id !== undefined && object.nomination_id !== null) {
      message.nominationId = BigInt(object.nomination_id);
    }
    return message;
  },
  toAmino(message: MsgUnstakeNomination): MsgUnstakeNominationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.nomination_id = message.nominationId !== BigInt(0) ? message.nominationId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeNominationAminoMsg): MsgUnstakeNomination {
    return MsgUnstakeNomination.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnstakeNomination): MsgUnstakeNominationAminoMsg {
    return {
      type: "sparkdream/x/season/MsgUnstakeNomination",
      value: MsgUnstakeNomination.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnstakeNominationProtoMsg): MsgUnstakeNomination {
    return MsgUnstakeNomination.decode(message.value);
  },
  toProto(message: MsgUnstakeNomination): Uint8Array {
    return MsgUnstakeNomination.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeNomination): MsgUnstakeNominationProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUnstakeNomination",
      value: MsgUnstakeNomination.encode(message).finish()
    };
  }
};
function createBaseMsgUnstakeNominationResponse(): MsgUnstakeNominationResponse {
  return {};
}
/**
 * MsgUnstakeNominationResponse defines the response for MsgUnstakeNomination.
 * @name MsgUnstakeNominationResponse
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.MsgUnstakeNominationResponse
 */
export const MsgUnstakeNominationResponse = {
  typeUrl: "/sparkdream.season.v1.MsgUnstakeNominationResponse",
  encode(_: MsgUnstakeNominationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeNominationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeNominationResponse();
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
  fromPartial(_: DeepPartial<MsgUnstakeNominationResponse>): MsgUnstakeNominationResponse {
    const message = createBaseMsgUnstakeNominationResponse();
    return message;
  },
  fromAmino(_: MsgUnstakeNominationResponseAmino): MsgUnstakeNominationResponse {
    const message = createBaseMsgUnstakeNominationResponse();
    return message;
  },
  toAmino(_: MsgUnstakeNominationResponse): MsgUnstakeNominationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeNominationResponseAminoMsg): MsgUnstakeNominationResponse {
    return MsgUnstakeNominationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeNominationResponseProtoMsg): MsgUnstakeNominationResponse {
    return MsgUnstakeNominationResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeNominationResponse): Uint8Array {
    return MsgUnstakeNominationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeNominationResponse): MsgUnstakeNominationResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.MsgUnstakeNominationResponse",
      value: MsgUnstakeNominationResponse.encode(message).finish()
    };
  }
};