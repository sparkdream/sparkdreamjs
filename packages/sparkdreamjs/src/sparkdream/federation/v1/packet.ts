//@ts-nocheck
import { TagReputation, TagReputationAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * FederationPacketData defines the Federation IBC data packet.
 * @name FederationPacketData
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.FederationPacketData
 */
export interface FederationPacketData {
  reputationQuery?: ReputationQueryPacket;
  content?: ContentPacket;
  identityVerification?: IdentityVerificationPacket;
  identityConfirmation?: IdentityVerificationConfirmPacket;
}
export interface FederationPacketDataProtoMsg {
  typeUrl: "/sparkdream.federation.v1.FederationPacketData";
  value: Uint8Array;
}
/**
 * FederationPacketData defines the Federation IBC data packet.
 * @name FederationPacketDataAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.FederationPacketData
 */
export interface FederationPacketDataAmino {
  reputation_query?: ReputationQueryPacketAmino;
  content?: ContentPacketAmino;
  identity_verification?: IdentityVerificationPacketAmino;
  identity_confirmation?: IdentityVerificationConfirmPacketAmino;
}
export interface FederationPacketDataAminoMsg {
  type: "/sparkdream.federation.v1.FederationPacketData";
  value: FederationPacketDataAmino;
}
/**
 * ReputationQueryPacket requests reputation data from a remote chain.
 * @name ReputationQueryPacket
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ReputationQueryPacket
 */
export interface ReputationQueryPacket {
  queriedAddress: string;
  requester: string;
}
export interface ReputationQueryPacketProtoMsg {
  typeUrl: "/sparkdream.federation.v1.ReputationQueryPacket";
  value: Uint8Array;
}
/**
 * ReputationQueryPacket requests reputation data from a remote chain.
 * @name ReputationQueryPacketAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ReputationQueryPacket
 */
export interface ReputationQueryPacketAmino {
  queried_address?: string;
  requester?: string;
}
export interface ReputationQueryPacketAminoMsg {
  type: "/sparkdream.federation.v1.ReputationQueryPacket";
  value: ReputationQueryPacketAmino;
}
/**
 * ReputationResponseData is returned in the acknowledgement for a ReputationQueryPacket.
 * @name ReputationResponseData
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ReputationResponseData
 */
export interface ReputationResponseData {
  address: string;
  trustLevel: number;
  isActive: boolean;
  memberSince: bigint;
  reputations: TagReputation[];
}
export interface ReputationResponseDataProtoMsg {
  typeUrl: "/sparkdream.federation.v1.ReputationResponseData";
  value: Uint8Array;
}
/**
 * ReputationResponseData is returned in the acknowledgement for a ReputationQueryPacket.
 * @name ReputationResponseDataAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ReputationResponseData
 */
export interface ReputationResponseDataAmino {
  address?: string;
  trust_level?: number;
  is_active?: boolean;
  member_since?: string;
  reputations?: TagReputationAmino[];
}
export interface ReputationResponseDataAminoMsg {
  type: "/sparkdream.federation.v1.ReputationResponseData";
  value: ReputationResponseDataAmino;
}
/**
 * ContentPacket sends federated content to a remote chain.
 * @name ContentPacket
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ContentPacket
 */
export interface ContentPacket {
  contentType: string;
  remoteContentId: string;
  creator: string;
  creatorName: string;
  title: string;
  body: string;
  contentUri: string;
  createdAt: bigint;
  contentHash: Uint8Array;
  protocolMetadata: Uint8Array;
}
export interface ContentPacketProtoMsg {
  typeUrl: "/sparkdream.federation.v1.ContentPacket";
  value: Uint8Array;
}
/**
 * ContentPacket sends federated content to a remote chain.
 * @name ContentPacketAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ContentPacket
 */
export interface ContentPacketAmino {
  content_type?: string;
  remote_content_id?: string;
  creator?: string;
  creator_name?: string;
  title?: string;
  body?: string;
  content_uri?: string;
  created_at?: string;
  content_hash?: string;
  protocol_metadata?: string;
}
export interface ContentPacketAminoMsg {
  type: "/sparkdream.federation.v1.ContentPacket";
  value: ContentPacketAmino;
}
/**
 * IdentityVerificationPacket initiates identity verification on a remote chain (Phase 1).
 * @name IdentityVerificationPacket
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityVerificationPacket
 */
export interface IdentityVerificationPacket {
  claimedAddress: string;
  claimantAddress: string;
  challenge: Uint8Array;
}
export interface IdentityVerificationPacketProtoMsg {
  typeUrl: "/sparkdream.federation.v1.IdentityVerificationPacket";
  value: Uint8Array;
}
/**
 * IdentityVerificationPacket initiates identity verification on a remote chain (Phase 1).
 * @name IdentityVerificationPacketAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityVerificationPacket
 */
export interface IdentityVerificationPacketAmino {
  claimed_address?: string;
  claimant_address?: string;
  challenge?: string;
}
export interface IdentityVerificationPacketAminoMsg {
  type: "/sparkdream.federation.v1.IdentityVerificationPacket";
  value: IdentityVerificationPacketAmino;
}
/**
 * IdentityVerificationAck acknowledges an identity verification request.
 * @name IdentityVerificationAck
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityVerificationAck
 */
export interface IdentityVerificationAck {
  exists: boolean;
}
export interface IdentityVerificationAckProtoMsg {
  typeUrl: "/sparkdream.federation.v1.IdentityVerificationAck";
  value: Uint8Array;
}
/**
 * IdentityVerificationAck acknowledges an identity verification request.
 * @name IdentityVerificationAckAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityVerificationAck
 */
export interface IdentityVerificationAckAmino {
  exists?: boolean;
}
export interface IdentityVerificationAckAminoMsg {
  type: "/sparkdream.federation.v1.IdentityVerificationAck";
  value: IdentityVerificationAckAmino;
}
/**
 * IdentityVerificationConfirmPacket confirms identity ownership (Phase 2).
 * @name IdentityVerificationConfirmPacket
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityVerificationConfirmPacket
 */
export interface IdentityVerificationConfirmPacket {
  claimedAddress: string;
  claimantAddress: string;
  challenge: Uint8Array;
  confirmed: boolean;
}
export interface IdentityVerificationConfirmPacketProtoMsg {
  typeUrl: "/sparkdream.federation.v1.IdentityVerificationConfirmPacket";
  value: Uint8Array;
}
/**
 * IdentityVerificationConfirmPacket confirms identity ownership (Phase 2).
 * @name IdentityVerificationConfirmPacketAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityVerificationConfirmPacket
 */
export interface IdentityVerificationConfirmPacketAmino {
  claimed_address?: string;
  claimant_address?: string;
  challenge?: string;
  confirmed?: boolean;
}
export interface IdentityVerificationConfirmPacketAminoMsg {
  type: "/sparkdream.federation.v1.IdentityVerificationConfirmPacket";
  value: IdentityVerificationConfirmPacketAmino;
}
/**
 * NoData defines an empty data packet (placeholder for IBC scaffolding).
 * @name NoData
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.NoData
 */
export interface NoData {}
export interface NoDataProtoMsg {
  typeUrl: "/sparkdream.federation.v1.NoData";
  value: Uint8Array;
}
/**
 * NoData defines an empty data packet (placeholder for IBC scaffolding).
 * @name NoDataAmino
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.NoData
 */
export interface NoDataAmino {}
export interface NoDataAminoMsg {
  type: "/sparkdream.federation.v1.NoData";
  value: NoDataAmino;
}
function createBaseFederationPacketData(): FederationPacketData {
  return {
    reputationQuery: undefined,
    content: undefined,
    identityVerification: undefined,
    identityConfirmation: undefined
  };
}
/**
 * FederationPacketData defines the Federation IBC data packet.
 * @name FederationPacketData
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.FederationPacketData
 */
export const FederationPacketData = {
  typeUrl: "/sparkdream.federation.v1.FederationPacketData",
  encode(message: FederationPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reputationQuery !== undefined) {
      ReputationQueryPacket.encode(message.reputationQuery, writer.uint32(10).fork()).ldelim();
    }
    if (message.content !== undefined) {
      ContentPacket.encode(message.content, writer.uint32(18).fork()).ldelim();
    }
    if (message.identityVerification !== undefined) {
      IdentityVerificationPacket.encode(message.identityVerification, writer.uint32(26).fork()).ldelim();
    }
    if (message.identityConfirmation !== undefined) {
      IdentityVerificationConfirmPacket.encode(message.identityConfirmation, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FederationPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFederationPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reputationQuery = ReputationQueryPacket.decode(reader, reader.uint32());
          break;
        case 2:
          message.content = ContentPacket.decode(reader, reader.uint32());
          break;
        case 3:
          message.identityVerification = IdentityVerificationPacket.decode(reader, reader.uint32());
          break;
        case 4:
          message.identityConfirmation = IdentityVerificationConfirmPacket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FederationPacketData>): FederationPacketData {
    const message = createBaseFederationPacketData();
    message.reputationQuery = object.reputationQuery !== undefined && object.reputationQuery !== null ? ReputationQueryPacket.fromPartial(object.reputationQuery) : undefined;
    message.content = object.content !== undefined && object.content !== null ? ContentPacket.fromPartial(object.content) : undefined;
    message.identityVerification = object.identityVerification !== undefined && object.identityVerification !== null ? IdentityVerificationPacket.fromPartial(object.identityVerification) : undefined;
    message.identityConfirmation = object.identityConfirmation !== undefined && object.identityConfirmation !== null ? IdentityVerificationConfirmPacket.fromPartial(object.identityConfirmation) : undefined;
    return message;
  },
  fromAmino(object: FederationPacketDataAmino): FederationPacketData {
    const message = createBaseFederationPacketData();
    if (object.reputation_query !== undefined && object.reputation_query !== null) {
      message.reputationQuery = ReputationQueryPacket.fromAmino(object.reputation_query);
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = ContentPacket.fromAmino(object.content);
    }
    if (object.identity_verification !== undefined && object.identity_verification !== null) {
      message.identityVerification = IdentityVerificationPacket.fromAmino(object.identity_verification);
    }
    if (object.identity_confirmation !== undefined && object.identity_confirmation !== null) {
      message.identityConfirmation = IdentityVerificationConfirmPacket.fromAmino(object.identity_confirmation);
    }
    return message;
  },
  toAmino(message: FederationPacketData): FederationPacketDataAmino {
    const obj: any = {};
    obj.reputation_query = message.reputationQuery ? ReputationQueryPacket.toAmino(message.reputationQuery) : undefined;
    obj.content = message.content ? ContentPacket.toAmino(message.content) : undefined;
    obj.identity_verification = message.identityVerification ? IdentityVerificationPacket.toAmino(message.identityVerification) : undefined;
    obj.identity_confirmation = message.identityConfirmation ? IdentityVerificationConfirmPacket.toAmino(message.identityConfirmation) : undefined;
    return obj;
  },
  fromAminoMsg(object: FederationPacketDataAminoMsg): FederationPacketData {
    return FederationPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message: FederationPacketDataProtoMsg): FederationPacketData {
    return FederationPacketData.decode(message.value);
  },
  toProto(message: FederationPacketData): Uint8Array {
    return FederationPacketData.encode(message).finish();
  },
  toProtoMsg(message: FederationPacketData): FederationPacketDataProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.FederationPacketData",
      value: FederationPacketData.encode(message).finish()
    };
  }
};
function createBaseReputationQueryPacket(): ReputationQueryPacket {
  return {
    queriedAddress: "",
    requester: ""
  };
}
/**
 * ReputationQueryPacket requests reputation data from a remote chain.
 * @name ReputationQueryPacket
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ReputationQueryPacket
 */
export const ReputationQueryPacket = {
  typeUrl: "/sparkdream.federation.v1.ReputationQueryPacket",
  encode(message: ReputationQueryPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.queriedAddress !== "") {
      writer.uint32(10).string(message.queriedAddress);
    }
    if (message.requester !== "") {
      writer.uint32(18).string(message.requester);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReputationQueryPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReputationQueryPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queriedAddress = reader.string();
          break;
        case 2:
          message.requester = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReputationQueryPacket>): ReputationQueryPacket {
    const message = createBaseReputationQueryPacket();
    message.queriedAddress = object.queriedAddress ?? "";
    message.requester = object.requester ?? "";
    return message;
  },
  fromAmino(object: ReputationQueryPacketAmino): ReputationQueryPacket {
    const message = createBaseReputationQueryPacket();
    if (object.queried_address !== undefined && object.queried_address !== null) {
      message.queriedAddress = object.queried_address;
    }
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester;
    }
    return message;
  },
  toAmino(message: ReputationQueryPacket): ReputationQueryPacketAmino {
    const obj: any = {};
    obj.queried_address = message.queriedAddress === "" ? undefined : message.queriedAddress;
    obj.requester = message.requester === "" ? undefined : message.requester;
    return obj;
  },
  fromAminoMsg(object: ReputationQueryPacketAminoMsg): ReputationQueryPacket {
    return ReputationQueryPacket.fromAmino(object.value);
  },
  fromProtoMsg(message: ReputationQueryPacketProtoMsg): ReputationQueryPacket {
    return ReputationQueryPacket.decode(message.value);
  },
  toProto(message: ReputationQueryPacket): Uint8Array {
    return ReputationQueryPacket.encode(message).finish();
  },
  toProtoMsg(message: ReputationQueryPacket): ReputationQueryPacketProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.ReputationQueryPacket",
      value: ReputationQueryPacket.encode(message).finish()
    };
  }
};
function createBaseReputationResponseData(): ReputationResponseData {
  return {
    address: "",
    trustLevel: 0,
    isActive: false,
    memberSince: BigInt(0),
    reputations: []
  };
}
/**
 * ReputationResponseData is returned in the acknowledgement for a ReputationQueryPacket.
 * @name ReputationResponseData
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ReputationResponseData
 */
export const ReputationResponseData = {
  typeUrl: "/sparkdream.federation.v1.ReputationResponseData",
  encode(message: ReputationResponseData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.trustLevel !== 0) {
      writer.uint32(16).uint32(message.trustLevel);
    }
    if (message.isActive === true) {
      writer.uint32(24).bool(message.isActive);
    }
    if (message.memberSince !== BigInt(0)) {
      writer.uint32(32).int64(message.memberSince);
    }
    for (const v of message.reputations) {
      TagReputation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReputationResponseData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReputationResponseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.trustLevel = reader.uint32();
          break;
        case 3:
          message.isActive = reader.bool();
          break;
        case 4:
          message.memberSince = reader.int64();
          break;
        case 5:
          message.reputations.push(TagReputation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReputationResponseData>): ReputationResponseData {
    const message = createBaseReputationResponseData();
    message.address = object.address ?? "";
    message.trustLevel = object.trustLevel ?? 0;
    message.isActive = object.isActive ?? false;
    message.memberSince = object.memberSince !== undefined && object.memberSince !== null ? BigInt(object.memberSince.toString()) : BigInt(0);
    message.reputations = object.reputations?.map(e => TagReputation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ReputationResponseDataAmino): ReputationResponseData {
    const message = createBaseReputationResponseData();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.trust_level !== undefined && object.trust_level !== null) {
      message.trustLevel = object.trust_level;
    }
    if (object.is_active !== undefined && object.is_active !== null) {
      message.isActive = object.is_active;
    }
    if (object.member_since !== undefined && object.member_since !== null) {
      message.memberSince = BigInt(object.member_since);
    }
    message.reputations = object.reputations?.map(e => TagReputation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ReputationResponseData): ReputationResponseDataAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.trust_level = message.trustLevel === 0 ? undefined : message.trustLevel;
    obj.is_active = message.isActive === false ? undefined : message.isActive;
    obj.member_since = message.memberSince !== BigInt(0) ? message.memberSince?.toString() : undefined;
    if (message.reputations) {
      obj.reputations = message.reputations.map(e => e ? TagReputation.toAmino(e) : undefined);
    } else {
      obj.reputations = message.reputations;
    }
    return obj;
  },
  fromAminoMsg(object: ReputationResponseDataAminoMsg): ReputationResponseData {
    return ReputationResponseData.fromAmino(object.value);
  },
  fromProtoMsg(message: ReputationResponseDataProtoMsg): ReputationResponseData {
    return ReputationResponseData.decode(message.value);
  },
  toProto(message: ReputationResponseData): Uint8Array {
    return ReputationResponseData.encode(message).finish();
  },
  toProtoMsg(message: ReputationResponseData): ReputationResponseDataProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.ReputationResponseData",
      value: ReputationResponseData.encode(message).finish()
    };
  }
};
function createBaseContentPacket(): ContentPacket {
  return {
    contentType: "",
    remoteContentId: "",
    creator: "",
    creatorName: "",
    title: "",
    body: "",
    contentUri: "",
    createdAt: BigInt(0),
    contentHash: new Uint8Array(),
    protocolMetadata: new Uint8Array()
  };
}
/**
 * ContentPacket sends federated content to a remote chain.
 * @name ContentPacket
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.ContentPacket
 */
export const ContentPacket = {
  typeUrl: "/sparkdream.federation.v1.ContentPacket",
  encode(message: ContentPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentType !== "") {
      writer.uint32(10).string(message.contentType);
    }
    if (message.remoteContentId !== "") {
      writer.uint32(18).string(message.remoteContentId);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.creatorName !== "") {
      writer.uint32(34).string(message.creatorName);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(50).string(message.body);
    }
    if (message.contentUri !== "") {
      writer.uint32(58).string(message.contentUri);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(64).int64(message.createdAt);
    }
    if (message.contentHash.length !== 0) {
      writer.uint32(74).bytes(message.contentHash);
    }
    if (message.protocolMetadata.length !== 0) {
      writer.uint32(82).bytes(message.protocolMetadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContentPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentType = reader.string();
          break;
        case 2:
          message.remoteContentId = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.creatorName = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.body = reader.string();
          break;
        case 7:
          message.contentUri = reader.string();
          break;
        case 8:
          message.createdAt = reader.int64();
          break;
        case 9:
          message.contentHash = reader.bytes();
          break;
        case 10:
          message.protocolMetadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContentPacket>): ContentPacket {
    const message = createBaseContentPacket();
    message.contentType = object.contentType ?? "";
    message.remoteContentId = object.remoteContentId ?? "";
    message.creator = object.creator ?? "";
    message.creatorName = object.creatorName ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.contentUri = object.contentUri ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.contentHash = object.contentHash ?? new Uint8Array();
    message.protocolMetadata = object.protocolMetadata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ContentPacketAmino): ContentPacket {
    const message = createBaseContentPacket();
    if (object.content_type !== undefined && object.content_type !== null) {
      message.contentType = object.content_type;
    }
    if (object.remote_content_id !== undefined && object.remote_content_id !== null) {
      message.remoteContentId = object.remote_content_id;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.creator_name !== undefined && object.creator_name !== null) {
      message.creatorName = object.creator_name;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    if (object.content_uri !== undefined && object.content_uri !== null) {
      message.contentUri = object.content_uri;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = bytesFromBase64(object.content_hash);
    }
    if (object.protocol_metadata !== undefined && object.protocol_metadata !== null) {
      message.protocolMetadata = bytesFromBase64(object.protocol_metadata);
    }
    return message;
  },
  toAmino(message: ContentPacket): ContentPacketAmino {
    const obj: any = {};
    obj.content_type = message.contentType === "" ? undefined : message.contentType;
    obj.remote_content_id = message.remoteContentId === "" ? undefined : message.remoteContentId;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.creator_name = message.creatorName === "" ? undefined : message.creatorName;
    obj.title = message.title === "" ? undefined : message.title;
    obj.body = message.body === "" ? undefined : message.body;
    obj.content_uri = message.contentUri === "" ? undefined : message.contentUri;
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    obj.content_hash = message.contentHash ? base64FromBytes(message.contentHash) : undefined;
    obj.protocol_metadata = message.protocolMetadata ? base64FromBytes(message.protocolMetadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContentPacketAminoMsg): ContentPacket {
    return ContentPacket.fromAmino(object.value);
  },
  fromProtoMsg(message: ContentPacketProtoMsg): ContentPacket {
    return ContentPacket.decode(message.value);
  },
  toProto(message: ContentPacket): Uint8Array {
    return ContentPacket.encode(message).finish();
  },
  toProtoMsg(message: ContentPacket): ContentPacketProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.ContentPacket",
      value: ContentPacket.encode(message).finish()
    };
  }
};
function createBaseIdentityVerificationPacket(): IdentityVerificationPacket {
  return {
    claimedAddress: "",
    claimantAddress: "",
    challenge: new Uint8Array()
  };
}
/**
 * IdentityVerificationPacket initiates identity verification on a remote chain (Phase 1).
 * @name IdentityVerificationPacket
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityVerificationPacket
 */
export const IdentityVerificationPacket = {
  typeUrl: "/sparkdream.federation.v1.IdentityVerificationPacket",
  encode(message: IdentityVerificationPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimedAddress !== "") {
      writer.uint32(10).string(message.claimedAddress);
    }
    if (message.claimantAddress !== "") {
      writer.uint32(18).string(message.claimantAddress);
    }
    if (message.challenge.length !== 0) {
      writer.uint32(26).bytes(message.challenge);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentityVerificationPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentityVerificationPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimedAddress = reader.string();
          break;
        case 2:
          message.claimantAddress = reader.string();
          break;
        case 3:
          message.challenge = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IdentityVerificationPacket>): IdentityVerificationPacket {
    const message = createBaseIdentityVerificationPacket();
    message.claimedAddress = object.claimedAddress ?? "";
    message.claimantAddress = object.claimantAddress ?? "";
    message.challenge = object.challenge ?? new Uint8Array();
    return message;
  },
  fromAmino(object: IdentityVerificationPacketAmino): IdentityVerificationPacket {
    const message = createBaseIdentityVerificationPacket();
    if (object.claimed_address !== undefined && object.claimed_address !== null) {
      message.claimedAddress = object.claimed_address;
    }
    if (object.claimant_address !== undefined && object.claimant_address !== null) {
      message.claimantAddress = object.claimant_address;
    }
    if (object.challenge !== undefined && object.challenge !== null) {
      message.challenge = bytesFromBase64(object.challenge);
    }
    return message;
  },
  toAmino(message: IdentityVerificationPacket): IdentityVerificationPacketAmino {
    const obj: any = {};
    obj.claimed_address = message.claimedAddress === "" ? undefined : message.claimedAddress;
    obj.claimant_address = message.claimantAddress === "" ? undefined : message.claimantAddress;
    obj.challenge = message.challenge ? base64FromBytes(message.challenge) : undefined;
    return obj;
  },
  fromAminoMsg(object: IdentityVerificationPacketAminoMsg): IdentityVerificationPacket {
    return IdentityVerificationPacket.fromAmino(object.value);
  },
  fromProtoMsg(message: IdentityVerificationPacketProtoMsg): IdentityVerificationPacket {
    return IdentityVerificationPacket.decode(message.value);
  },
  toProto(message: IdentityVerificationPacket): Uint8Array {
    return IdentityVerificationPacket.encode(message).finish();
  },
  toProtoMsg(message: IdentityVerificationPacket): IdentityVerificationPacketProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.IdentityVerificationPacket",
      value: IdentityVerificationPacket.encode(message).finish()
    };
  }
};
function createBaseIdentityVerificationAck(): IdentityVerificationAck {
  return {
    exists: false
  };
}
/**
 * IdentityVerificationAck acknowledges an identity verification request.
 * @name IdentityVerificationAck
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityVerificationAck
 */
export const IdentityVerificationAck = {
  typeUrl: "/sparkdream.federation.v1.IdentityVerificationAck",
  encode(message: IdentityVerificationAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exists === true) {
      writer.uint32(8).bool(message.exists);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentityVerificationAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentityVerificationAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exists = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IdentityVerificationAck>): IdentityVerificationAck {
    const message = createBaseIdentityVerificationAck();
    message.exists = object.exists ?? false;
    return message;
  },
  fromAmino(object: IdentityVerificationAckAmino): IdentityVerificationAck {
    const message = createBaseIdentityVerificationAck();
    if (object.exists !== undefined && object.exists !== null) {
      message.exists = object.exists;
    }
    return message;
  },
  toAmino(message: IdentityVerificationAck): IdentityVerificationAckAmino {
    const obj: any = {};
    obj.exists = message.exists === false ? undefined : message.exists;
    return obj;
  },
  fromAminoMsg(object: IdentityVerificationAckAminoMsg): IdentityVerificationAck {
    return IdentityVerificationAck.fromAmino(object.value);
  },
  fromProtoMsg(message: IdentityVerificationAckProtoMsg): IdentityVerificationAck {
    return IdentityVerificationAck.decode(message.value);
  },
  toProto(message: IdentityVerificationAck): Uint8Array {
    return IdentityVerificationAck.encode(message).finish();
  },
  toProtoMsg(message: IdentityVerificationAck): IdentityVerificationAckProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.IdentityVerificationAck",
      value: IdentityVerificationAck.encode(message).finish()
    };
  }
};
function createBaseIdentityVerificationConfirmPacket(): IdentityVerificationConfirmPacket {
  return {
    claimedAddress: "",
    claimantAddress: "",
    challenge: new Uint8Array(),
    confirmed: false
  };
}
/**
 * IdentityVerificationConfirmPacket confirms identity ownership (Phase 2).
 * @name IdentityVerificationConfirmPacket
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.IdentityVerificationConfirmPacket
 */
export const IdentityVerificationConfirmPacket = {
  typeUrl: "/sparkdream.federation.v1.IdentityVerificationConfirmPacket",
  encode(message: IdentityVerificationConfirmPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimedAddress !== "") {
      writer.uint32(10).string(message.claimedAddress);
    }
    if (message.claimantAddress !== "") {
      writer.uint32(18).string(message.claimantAddress);
    }
    if (message.challenge.length !== 0) {
      writer.uint32(26).bytes(message.challenge);
    }
    if (message.confirmed === true) {
      writer.uint32(32).bool(message.confirmed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentityVerificationConfirmPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentityVerificationConfirmPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimedAddress = reader.string();
          break;
        case 2:
          message.claimantAddress = reader.string();
          break;
        case 3:
          message.challenge = reader.bytes();
          break;
        case 4:
          message.confirmed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IdentityVerificationConfirmPacket>): IdentityVerificationConfirmPacket {
    const message = createBaseIdentityVerificationConfirmPacket();
    message.claimedAddress = object.claimedAddress ?? "";
    message.claimantAddress = object.claimantAddress ?? "";
    message.challenge = object.challenge ?? new Uint8Array();
    message.confirmed = object.confirmed ?? false;
    return message;
  },
  fromAmino(object: IdentityVerificationConfirmPacketAmino): IdentityVerificationConfirmPacket {
    const message = createBaseIdentityVerificationConfirmPacket();
    if (object.claimed_address !== undefined && object.claimed_address !== null) {
      message.claimedAddress = object.claimed_address;
    }
    if (object.claimant_address !== undefined && object.claimant_address !== null) {
      message.claimantAddress = object.claimant_address;
    }
    if (object.challenge !== undefined && object.challenge !== null) {
      message.challenge = bytesFromBase64(object.challenge);
    }
    if (object.confirmed !== undefined && object.confirmed !== null) {
      message.confirmed = object.confirmed;
    }
    return message;
  },
  toAmino(message: IdentityVerificationConfirmPacket): IdentityVerificationConfirmPacketAmino {
    const obj: any = {};
    obj.claimed_address = message.claimedAddress === "" ? undefined : message.claimedAddress;
    obj.claimant_address = message.claimantAddress === "" ? undefined : message.claimantAddress;
    obj.challenge = message.challenge ? base64FromBytes(message.challenge) : undefined;
    obj.confirmed = message.confirmed === false ? undefined : message.confirmed;
    return obj;
  },
  fromAminoMsg(object: IdentityVerificationConfirmPacketAminoMsg): IdentityVerificationConfirmPacket {
    return IdentityVerificationConfirmPacket.fromAmino(object.value);
  },
  fromProtoMsg(message: IdentityVerificationConfirmPacketProtoMsg): IdentityVerificationConfirmPacket {
    return IdentityVerificationConfirmPacket.decode(message.value);
  },
  toProto(message: IdentityVerificationConfirmPacket): Uint8Array {
    return IdentityVerificationConfirmPacket.encode(message).finish();
  },
  toProtoMsg(message: IdentityVerificationConfirmPacket): IdentityVerificationConfirmPacketProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.IdentityVerificationConfirmPacket",
      value: IdentityVerificationConfirmPacket.encode(message).finish()
    };
  }
};
function createBaseNoData(): NoData {
  return {};
}
/**
 * NoData defines an empty data packet (placeholder for IBC scaffolding).
 * @name NoData
 * @package sparkdream.federation.v1
 * @see proto type: sparkdream.federation.v1.NoData
 */
export const NoData = {
  typeUrl: "/sparkdream.federation.v1.NoData",
  encode(_: NoData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NoData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
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
  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  },
  fromAmino(_: NoDataAmino): NoData {
    const message = createBaseNoData();
    return message;
  },
  toAmino(_: NoData): NoDataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: NoDataAminoMsg): NoData {
    return NoData.fromAmino(object.value);
  },
  fromProtoMsg(message: NoDataProtoMsg): NoData {
    return NoData.decode(message.value);
  },
  toProto(message: NoData): Uint8Array {
    return NoData.encode(message).finish();
  },
  toProtoMsg(message: NoData): NoDataProtoMsg {
    return {
      typeUrl: "/sparkdream.federation.v1.NoData",
      value: NoData.encode(message).finish()
    };
  }
};