//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export enum TrustLevel {
  TRUST_LEVEL_NEW = 0,
  TRUST_LEVEL_PROVISIONAL = 1,
  TRUST_LEVEL_ESTABLISHED = 2,
  TRUST_LEVEL_TRUSTED = 3,
  TRUST_LEVEL_CORE = 4,
  UNRECOGNIZED = -1,
}
export const TrustLevelAmino = TrustLevel;
export function trustLevelFromJSON(object: any): TrustLevel {
  switch (object) {
    case 0:
    case "TRUST_LEVEL_NEW":
      return TrustLevel.TRUST_LEVEL_NEW;
    case 1:
    case "TRUST_LEVEL_PROVISIONAL":
      return TrustLevel.TRUST_LEVEL_PROVISIONAL;
    case 2:
    case "TRUST_LEVEL_ESTABLISHED":
      return TrustLevel.TRUST_LEVEL_ESTABLISHED;
    case 3:
    case "TRUST_LEVEL_TRUSTED":
      return TrustLevel.TRUST_LEVEL_TRUSTED;
    case 4:
    case "TRUST_LEVEL_CORE":
      return TrustLevel.TRUST_LEVEL_CORE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TrustLevel.UNRECOGNIZED;
  }
}
export function trustLevelToJSON(object: TrustLevel): string {
  switch (object) {
    case TrustLevel.TRUST_LEVEL_NEW:
      return "TRUST_LEVEL_NEW";
    case TrustLevel.TRUST_LEVEL_PROVISIONAL:
      return "TRUST_LEVEL_PROVISIONAL";
    case TrustLevel.TRUST_LEVEL_ESTABLISHED:
      return "TRUST_LEVEL_ESTABLISHED";
    case TrustLevel.TRUST_LEVEL_TRUSTED:
      return "TRUST_LEVEL_TRUSTED";
    case TrustLevel.TRUST_LEVEL_CORE:
      return "TRUST_LEVEL_CORE";
    case TrustLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum MemberStatus {
  MEMBER_STATUS_ACTIVE = 0,
  MEMBER_STATUS_INACTIVE = 1,
  MEMBER_STATUS_ZEROED = 2,
  UNRECOGNIZED = -1,
}
export const MemberStatusAmino = MemberStatus;
export function memberStatusFromJSON(object: any): MemberStatus {
  switch (object) {
    case 0:
    case "MEMBER_STATUS_ACTIVE":
      return MemberStatus.MEMBER_STATUS_ACTIVE;
    case 1:
    case "MEMBER_STATUS_INACTIVE":
      return MemberStatus.MEMBER_STATUS_INACTIVE;
    case 2:
    case "MEMBER_STATUS_ZEROED":
      return MemberStatus.MEMBER_STATUS_ZEROED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MemberStatus.UNRECOGNIZED;
  }
}
export function memberStatusToJSON(object: MemberStatus): string {
  switch (object) {
    case MemberStatus.MEMBER_STATUS_ACTIVE:
      return "MEMBER_STATUS_ACTIVE";
    case MemberStatus.MEMBER_STATUS_INACTIVE:
      return "MEMBER_STATUS_INACTIVE";
    case MemberStatus.MEMBER_STATUS_ZEROED:
      return "MEMBER_STATUS_ZEROED";
    case MemberStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * @name Member_ReputationScoresEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export interface Member_ReputationScoresEntry {
  key: string;
  value: string;
}
export interface Member_ReputationScoresEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name Member_ReputationScoresEntryAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Member_ReputationScoresEntry
 */
export interface Member_ReputationScoresEntryAmino {
  key?: string;
  value?: string;
}
export interface Member_ReputationScoresEntryAminoMsg {
  type: string;
  value: Member_ReputationScoresEntryAmino;
}
/**
 * @name Member_LifetimeReputationEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export interface Member_LifetimeReputationEntry {
  key: string;
  value: string;
}
export interface Member_LifetimeReputationEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name Member_LifetimeReputationEntryAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Member_LifetimeReputationEntry
 */
export interface Member_LifetimeReputationEntryAmino {
  key?: string;
  value?: string;
}
export interface Member_LifetimeReputationEntryAminoMsg {
  type: string;
  value: Member_LifetimeReputationEntryAmino;
}
/**
 * @name Member_ReputationGainedThisEpochEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export interface Member_ReputationGainedThisEpochEntry {
  key: string;
  value: string;
}
export interface Member_ReputationGainedThisEpochEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name Member_ReputationGainedThisEpochEntryAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Member_ReputationGainedThisEpochEntry
 */
export interface Member_ReputationGainedThisEpochEntryAmino {
  key?: string;
  value?: string;
}
export interface Member_ReputationGainedThisEpochEntryAminoMsg {
  type: string;
  value: Member_ReputationGainedThisEpochEntryAmino;
}
/**
 * Member defines the Member message.
 * @name Member
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Member
 */
export interface Member {
  address: string;
  /**
   * DREAM balance
   */
  dreamBalance: string;
  stakedDream: string;
  lifetimeEarned: string;
  lifetimeBurned: string;
  /**
   * Reputation (current season)
   */
  reputationScores: {
    [key: string]: string;
  };
  /**
   * Reputation (lifetime archive)
   */
  lifetimeReputation: {
    [key: string]: string;
  };
  /**
   * Trust
   */
  trustLevel: TrustLevel;
  trustLevelUpdatedAt: bigint;
  /**
   * Invitation info
   */
  joinedSeason: number;
  joinedAt: bigint;
  invitedBy: string;
  /**
   * ancestors, max 5
   */
  invitationChain: string[];
  invitationCredits: number;
  /**
   * Status
   */
  status: MemberStatus;
  zeroedAt: bigint;
  zeroedCount: number;
  lastDecayEpoch: bigint;
  tipsGivenThisEpoch: number;
  lastTipEpoch: bigint;
  /**
   * Cached counts for performance (avoid full table scans)
   */
  completedInterimsCount: number;
  /**
   * Incremented on initiative completion
   */
  completedInitiativesCount: number;
  /**
   * Gift tracking for rate limiting
   */
  giftsSentThisEpoch: string;
  /**
   * Epoch when gift counter was last reset
   */
  lastGiftEpoch: bigint;
  /**
   * Invitation credit tracking for lazy seasonal reset
   */
  lastCreditResetSeason: bigint;
  /**
   * Per-epoch reputation gain cap tracking
   * Maps tag -> stringified Dec of reputation gained in the current epoch
   */
  reputationGainedThisEpoch: {
    [key: string]: string;
  };
  /**
   * Epoch when reputation gain counter was last reset
   */
  lastRepGainEpoch: bigint;
  /**
   * ZK public key for anonymous operations (trust tree leaf computation).
   * Set via MsgRegisterZkPublicKey. Used by the persistent Merkle tree
   * to build leaves as MiMC(zk_public_key, trust_level).
   */
  zkPublicKey: Uint8Array;
  /**
   * Salvation counters.
   * epoch_salvations: count of salvations performed in the current epoch.
   * last_salvation_epoch: Unix timestamp marking the start of the current
   * salvation epoch window.
   */
  epochSalvations: number;
  lastSalvationEpoch: bigint;
}
export interface MemberProtoMsg {
  typeUrl: "/sparkdream.rep.v1.Member";
  value: Uint8Array;
}
/**
 * Member defines the Member message.
 * @name MemberAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Member
 */
export interface MemberAmino {
  address?: string;
  /**
   * DREAM balance
   */
  dream_balance?: string;
  staked_dream?: string;
  lifetime_earned?: string;
  lifetime_burned?: string;
  /**
   * Reputation (current season)
   */
  reputation_scores?: {
    [key: string]: string;
  };
  /**
   * Reputation (lifetime archive)
   */
  lifetime_reputation?: {
    [key: string]: string;
  };
  /**
   * Trust
   */
  trust_level?: TrustLevel;
  trust_level_updated_at?: string;
  /**
   * Invitation info
   */
  joined_season?: number;
  joined_at?: string;
  invited_by?: string;
  /**
   * ancestors, max 5
   */
  invitation_chain?: string[];
  invitation_credits?: number;
  /**
   * Status
   */
  status?: MemberStatus;
  zeroed_at?: string;
  zeroed_count?: number;
  last_decay_epoch?: string;
  tips_given_this_epoch?: number;
  last_tip_epoch?: string;
  /**
   * Cached counts for performance (avoid full table scans)
   */
  completed_interims_count?: number;
  /**
   * Incremented on initiative completion
   */
  completed_initiatives_count?: number;
  /**
   * Gift tracking for rate limiting
   */
  gifts_sent_this_epoch?: string;
  /**
   * Epoch when gift counter was last reset
   */
  last_gift_epoch?: string;
  /**
   * Invitation credit tracking for lazy seasonal reset
   */
  last_credit_reset_season?: string;
  /**
   * Per-epoch reputation gain cap tracking
   * Maps tag -> stringified Dec of reputation gained in the current epoch
   */
  reputation_gained_this_epoch?: {
    [key: string]: string;
  };
  /**
   * Epoch when reputation gain counter was last reset
   */
  last_rep_gain_epoch?: string;
  /**
   * ZK public key for anonymous operations (trust tree leaf computation).
   * Set via MsgRegisterZkPublicKey. Used by the persistent Merkle tree
   * to build leaves as MiMC(zk_public_key, trust_level).
   */
  zk_public_key?: string;
  /**
   * Salvation counters.
   * epoch_salvations: count of salvations performed in the current epoch.
   * last_salvation_epoch: Unix timestamp marking the start of the current
   * salvation epoch window.
   */
  epoch_salvations?: number;
  last_salvation_epoch?: string;
}
export interface MemberAminoMsg {
  type: "/sparkdream.rep.v1.Member";
  value: MemberAmino;
}
/**
 * GiftRecord tracks the last time a sender gifted a specific recipient
 * Used to enforce per-recipient cooldown periods
 * @name GiftRecord
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.GiftRecord
 */
export interface GiftRecord {
  sender: string;
  recipient: string;
  /**
   * Block height when last gift was sent
   */
  lastGiftBlock: bigint;
}
export interface GiftRecordProtoMsg {
  typeUrl: "/sparkdream.rep.v1.GiftRecord";
  value: Uint8Array;
}
/**
 * GiftRecord tracks the last time a sender gifted a specific recipient
 * Used to enforce per-recipient cooldown periods
 * @name GiftRecordAmino
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.GiftRecord
 */
export interface GiftRecordAmino {
  sender?: string;
  recipient?: string;
  /**
   * Block height when last gift was sent
   */
  last_gift_block?: string;
}
export interface GiftRecordAminoMsg {
  type: "/sparkdream.rep.v1.GiftRecord";
  value: GiftRecordAmino;
}
function createBaseMember_ReputationScoresEntry(): Member_ReputationScoresEntry {
  return {
    key: "",
    value: ""
  };
}
/**
 * @name Member_ReputationScoresEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export const Member_ReputationScoresEntry = {
  encode(message: Member_ReputationScoresEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Member_ReputationScoresEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember_ReputationScoresEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Member_ReputationScoresEntry>): Member_ReputationScoresEntry {
    const message = createBaseMember_ReputationScoresEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: Member_ReputationScoresEntryAmino): Member_ReputationScoresEntry {
    const message = createBaseMember_ReputationScoresEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Member_ReputationScoresEntry): Member_ReputationScoresEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: Member_ReputationScoresEntryAminoMsg): Member_ReputationScoresEntry {
    return Member_ReputationScoresEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Member_ReputationScoresEntryProtoMsg): Member_ReputationScoresEntry {
    return Member_ReputationScoresEntry.decode(message.value);
  },
  toProto(message: Member_ReputationScoresEntry): Uint8Array {
    return Member_ReputationScoresEntry.encode(message).finish();
  }
};
function createBaseMember_LifetimeReputationEntry(): Member_LifetimeReputationEntry {
  return {
    key: "",
    value: ""
  };
}
/**
 * @name Member_LifetimeReputationEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export const Member_LifetimeReputationEntry = {
  encode(message: Member_LifetimeReputationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Member_LifetimeReputationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember_LifetimeReputationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Member_LifetimeReputationEntry>): Member_LifetimeReputationEntry {
    const message = createBaseMember_LifetimeReputationEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: Member_LifetimeReputationEntryAmino): Member_LifetimeReputationEntry {
    const message = createBaseMember_LifetimeReputationEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Member_LifetimeReputationEntry): Member_LifetimeReputationEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: Member_LifetimeReputationEntryAminoMsg): Member_LifetimeReputationEntry {
    return Member_LifetimeReputationEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Member_LifetimeReputationEntryProtoMsg): Member_LifetimeReputationEntry {
    return Member_LifetimeReputationEntry.decode(message.value);
  },
  toProto(message: Member_LifetimeReputationEntry): Uint8Array {
    return Member_LifetimeReputationEntry.encode(message).finish();
  }
};
function createBaseMember_ReputationGainedThisEpochEntry(): Member_ReputationGainedThisEpochEntry {
  return {
    key: "",
    value: ""
  };
}
/**
 * @name Member_ReputationGainedThisEpochEntry
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.undefined
 */
export const Member_ReputationGainedThisEpochEntry = {
  encode(message: Member_ReputationGainedThisEpochEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Member_ReputationGainedThisEpochEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember_ReputationGainedThisEpochEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Member_ReputationGainedThisEpochEntry>): Member_ReputationGainedThisEpochEntry {
    const message = createBaseMember_ReputationGainedThisEpochEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: Member_ReputationGainedThisEpochEntryAmino): Member_ReputationGainedThisEpochEntry {
    const message = createBaseMember_ReputationGainedThisEpochEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Member_ReputationGainedThisEpochEntry): Member_ReputationGainedThisEpochEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: Member_ReputationGainedThisEpochEntryAminoMsg): Member_ReputationGainedThisEpochEntry {
    return Member_ReputationGainedThisEpochEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Member_ReputationGainedThisEpochEntryProtoMsg): Member_ReputationGainedThisEpochEntry {
    return Member_ReputationGainedThisEpochEntry.decode(message.value);
  },
  toProto(message: Member_ReputationGainedThisEpochEntry): Uint8Array {
    return Member_ReputationGainedThisEpochEntry.encode(message).finish();
  }
};
function createBaseMember(): Member {
  return {
    address: "",
    dreamBalance: "",
    stakedDream: "",
    lifetimeEarned: "",
    lifetimeBurned: "",
    reputationScores: {},
    lifetimeReputation: {},
    trustLevel: 0,
    trustLevelUpdatedAt: BigInt(0),
    joinedSeason: 0,
    joinedAt: BigInt(0),
    invitedBy: "",
    invitationChain: [],
    invitationCredits: 0,
    status: 0,
    zeroedAt: BigInt(0),
    zeroedCount: 0,
    lastDecayEpoch: BigInt(0),
    tipsGivenThisEpoch: 0,
    lastTipEpoch: BigInt(0),
    completedInterimsCount: 0,
    completedInitiativesCount: 0,
    giftsSentThisEpoch: "",
    lastGiftEpoch: BigInt(0),
    lastCreditResetSeason: BigInt(0),
    reputationGainedThisEpoch: {},
    lastRepGainEpoch: BigInt(0),
    zkPublicKey: new Uint8Array(),
    epochSalvations: 0,
    lastSalvationEpoch: BigInt(0)
  };
}
/**
 * Member defines the Member message.
 * @name Member
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.Member
 */
export const Member = {
  typeUrl: "/sparkdream.rep.v1.Member",
  encode(message: Member, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.dreamBalance !== "") {
      writer.uint32(18).string(message.dreamBalance);
    }
    if (message.stakedDream !== "") {
      writer.uint32(26).string(message.stakedDream);
    }
    if (message.lifetimeEarned !== "") {
      writer.uint32(34).string(message.lifetimeEarned);
    }
    if (message.lifetimeBurned !== "") {
      writer.uint32(42).string(message.lifetimeBurned);
    }
    Object.entries(message.reputationScores).forEach(([key, value]) => {
      Member_ReputationScoresEntry.encode({
        key: key as any,
        value
      }, writer.uint32(50).fork()).ldelim();
    });
    Object.entries(message.lifetimeReputation).forEach(([key, value]) => {
      Member_LifetimeReputationEntry.encode({
        key: key as any,
        value
      }, writer.uint32(58).fork()).ldelim();
    });
    if (message.trustLevel !== 0) {
      writer.uint32(64).int32(message.trustLevel);
    }
    if (message.trustLevelUpdatedAt !== BigInt(0)) {
      writer.uint32(72).int64(message.trustLevelUpdatedAt);
    }
    if (message.joinedSeason !== 0) {
      writer.uint32(80).uint32(message.joinedSeason);
    }
    if (message.joinedAt !== BigInt(0)) {
      writer.uint32(88).int64(message.joinedAt);
    }
    if (message.invitedBy !== "") {
      writer.uint32(98).string(message.invitedBy);
    }
    for (const v of message.invitationChain) {
      writer.uint32(106).string(v!);
    }
    if (message.invitationCredits !== 0) {
      writer.uint32(112).uint32(message.invitationCredits);
    }
    if (message.status !== 0) {
      writer.uint32(120).int32(message.status);
    }
    if (message.zeroedAt !== BigInt(0)) {
      writer.uint32(128).int64(message.zeroedAt);
    }
    if (message.zeroedCount !== 0) {
      writer.uint32(136).uint32(message.zeroedCount);
    }
    if (message.lastDecayEpoch !== BigInt(0)) {
      writer.uint32(144).int64(message.lastDecayEpoch);
    }
    if (message.tipsGivenThisEpoch !== 0) {
      writer.uint32(152).uint32(message.tipsGivenThisEpoch);
    }
    if (message.lastTipEpoch !== BigInt(0)) {
      writer.uint32(160).int64(message.lastTipEpoch);
    }
    if (message.completedInterimsCount !== 0) {
      writer.uint32(168).uint32(message.completedInterimsCount);
    }
    if (message.completedInitiativesCount !== 0) {
      writer.uint32(176).uint32(message.completedInitiativesCount);
    }
    if (message.giftsSentThisEpoch !== "") {
      writer.uint32(186).string(message.giftsSentThisEpoch);
    }
    if (message.lastGiftEpoch !== BigInt(0)) {
      writer.uint32(192).int64(message.lastGiftEpoch);
    }
    if (message.lastCreditResetSeason !== BigInt(0)) {
      writer.uint32(200).int64(message.lastCreditResetSeason);
    }
    Object.entries(message.reputationGainedThisEpoch).forEach(([key, value]) => {
      Member_ReputationGainedThisEpochEntry.encode({
        key: key as any,
        value
      }, writer.uint32(210).fork()).ldelim();
    });
    if (message.lastRepGainEpoch !== BigInt(0)) {
      writer.uint32(216).int64(message.lastRepGainEpoch);
    }
    if (message.zkPublicKey.length !== 0) {
      writer.uint32(226).bytes(message.zkPublicKey);
    }
    if (message.epochSalvations !== 0) {
      writer.uint32(232).uint32(message.epochSalvations);
    }
    if (message.lastSalvationEpoch !== BigInt(0)) {
      writer.uint32(240).int64(message.lastSalvationEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Member {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.dreamBalance = reader.string();
          break;
        case 3:
          message.stakedDream = reader.string();
          break;
        case 4:
          message.lifetimeEarned = reader.string();
          break;
        case 5:
          message.lifetimeBurned = reader.string();
          break;
        case 6:
          const entry6 = Member_ReputationScoresEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.reputationScores[entry6.key] = entry6.value;
          }
          break;
        case 7:
          const entry7 = Member_LifetimeReputationEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.lifetimeReputation[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.trustLevel = reader.int32() as any;
          break;
        case 9:
          message.trustLevelUpdatedAt = reader.int64();
          break;
        case 10:
          message.joinedSeason = reader.uint32();
          break;
        case 11:
          message.joinedAt = reader.int64();
          break;
        case 12:
          message.invitedBy = reader.string();
          break;
        case 13:
          message.invitationChain.push(reader.string());
          break;
        case 14:
          message.invitationCredits = reader.uint32();
          break;
        case 15:
          message.status = reader.int32() as any;
          break;
        case 16:
          message.zeroedAt = reader.int64();
          break;
        case 17:
          message.zeroedCount = reader.uint32();
          break;
        case 18:
          message.lastDecayEpoch = reader.int64();
          break;
        case 19:
          message.tipsGivenThisEpoch = reader.uint32();
          break;
        case 20:
          message.lastTipEpoch = reader.int64();
          break;
        case 21:
          message.completedInterimsCount = reader.uint32();
          break;
        case 22:
          message.completedInitiativesCount = reader.uint32();
          break;
        case 23:
          message.giftsSentThisEpoch = reader.string();
          break;
        case 24:
          message.lastGiftEpoch = reader.int64();
          break;
        case 25:
          message.lastCreditResetSeason = reader.int64();
          break;
        case 26:
          const entry26 = Member_ReputationGainedThisEpochEntry.decode(reader, reader.uint32());
          if (entry26.value !== undefined) {
            message.reputationGainedThisEpoch[entry26.key] = entry26.value;
          }
          break;
        case 27:
          message.lastRepGainEpoch = reader.int64();
          break;
        case 28:
          message.zkPublicKey = reader.bytes();
          break;
        case 29:
          message.epochSalvations = reader.uint32();
          break;
        case 30:
          message.lastSalvationEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Member>): Member {
    const message = createBaseMember();
    message.address = object.address ?? "";
    message.dreamBalance = object.dreamBalance ?? "";
    message.stakedDream = object.stakedDream ?? "";
    message.lifetimeEarned = object.lifetimeEarned ?? "";
    message.lifetimeBurned = object.lifetimeBurned ?? "";
    message.reputationScores = Object.entries(object.reputationScores ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.lifetimeReputation = Object.entries(object.lifetimeReputation ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.trustLevel = object.trustLevel ?? 0;
    message.trustLevelUpdatedAt = object.trustLevelUpdatedAt !== undefined && object.trustLevelUpdatedAt !== null ? BigInt(object.trustLevelUpdatedAt.toString()) : BigInt(0);
    message.joinedSeason = object.joinedSeason ?? 0;
    message.joinedAt = object.joinedAt !== undefined && object.joinedAt !== null ? BigInt(object.joinedAt.toString()) : BigInt(0);
    message.invitedBy = object.invitedBy ?? "";
    message.invitationChain = object.invitationChain?.map(e => e) || [];
    message.invitationCredits = object.invitationCredits ?? 0;
    message.status = object.status ?? 0;
    message.zeroedAt = object.zeroedAt !== undefined && object.zeroedAt !== null ? BigInt(object.zeroedAt.toString()) : BigInt(0);
    message.zeroedCount = object.zeroedCount ?? 0;
    message.lastDecayEpoch = object.lastDecayEpoch !== undefined && object.lastDecayEpoch !== null ? BigInt(object.lastDecayEpoch.toString()) : BigInt(0);
    message.tipsGivenThisEpoch = object.tipsGivenThisEpoch ?? 0;
    message.lastTipEpoch = object.lastTipEpoch !== undefined && object.lastTipEpoch !== null ? BigInt(object.lastTipEpoch.toString()) : BigInt(0);
    message.completedInterimsCount = object.completedInterimsCount ?? 0;
    message.completedInitiativesCount = object.completedInitiativesCount ?? 0;
    message.giftsSentThisEpoch = object.giftsSentThisEpoch ?? "";
    message.lastGiftEpoch = object.lastGiftEpoch !== undefined && object.lastGiftEpoch !== null ? BigInt(object.lastGiftEpoch.toString()) : BigInt(0);
    message.lastCreditResetSeason = object.lastCreditResetSeason !== undefined && object.lastCreditResetSeason !== null ? BigInt(object.lastCreditResetSeason.toString()) : BigInt(0);
    message.reputationGainedThisEpoch = Object.entries(object.reputationGainedThisEpoch ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.lastRepGainEpoch = object.lastRepGainEpoch !== undefined && object.lastRepGainEpoch !== null ? BigInt(object.lastRepGainEpoch.toString()) : BigInt(0);
    message.zkPublicKey = object.zkPublicKey ?? new Uint8Array();
    message.epochSalvations = object.epochSalvations ?? 0;
    message.lastSalvationEpoch = object.lastSalvationEpoch !== undefined && object.lastSalvationEpoch !== null ? BigInt(object.lastSalvationEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MemberAmino): Member {
    const message = createBaseMember();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.dream_balance !== undefined && object.dream_balance !== null) {
      message.dreamBalance = object.dream_balance;
    }
    if (object.staked_dream !== undefined && object.staked_dream !== null) {
      message.stakedDream = object.staked_dream;
    }
    if (object.lifetime_earned !== undefined && object.lifetime_earned !== null) {
      message.lifetimeEarned = object.lifetime_earned;
    }
    if (object.lifetime_burned !== undefined && object.lifetime_burned !== null) {
      message.lifetimeBurned = object.lifetime_burned;
    }
    message.reputationScores = Object.entries(object.reputation_scores ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.lifetimeReputation = Object.entries(object.lifetime_reputation ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.trust_level !== undefined && object.trust_level !== null) {
      message.trustLevel = object.trust_level;
    }
    if (object.trust_level_updated_at !== undefined && object.trust_level_updated_at !== null) {
      message.trustLevelUpdatedAt = BigInt(object.trust_level_updated_at);
    }
    if (object.joined_season !== undefined && object.joined_season !== null) {
      message.joinedSeason = object.joined_season;
    }
    if (object.joined_at !== undefined && object.joined_at !== null) {
      message.joinedAt = BigInt(object.joined_at);
    }
    if (object.invited_by !== undefined && object.invited_by !== null) {
      message.invitedBy = object.invited_by;
    }
    message.invitationChain = object.invitation_chain?.map(e => e) || [];
    if (object.invitation_credits !== undefined && object.invitation_credits !== null) {
      message.invitationCredits = object.invitation_credits;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.zeroed_at !== undefined && object.zeroed_at !== null) {
      message.zeroedAt = BigInt(object.zeroed_at);
    }
    if (object.zeroed_count !== undefined && object.zeroed_count !== null) {
      message.zeroedCount = object.zeroed_count;
    }
    if (object.last_decay_epoch !== undefined && object.last_decay_epoch !== null) {
      message.lastDecayEpoch = BigInt(object.last_decay_epoch);
    }
    if (object.tips_given_this_epoch !== undefined && object.tips_given_this_epoch !== null) {
      message.tipsGivenThisEpoch = object.tips_given_this_epoch;
    }
    if (object.last_tip_epoch !== undefined && object.last_tip_epoch !== null) {
      message.lastTipEpoch = BigInt(object.last_tip_epoch);
    }
    if (object.completed_interims_count !== undefined && object.completed_interims_count !== null) {
      message.completedInterimsCount = object.completed_interims_count;
    }
    if (object.completed_initiatives_count !== undefined && object.completed_initiatives_count !== null) {
      message.completedInitiativesCount = object.completed_initiatives_count;
    }
    if (object.gifts_sent_this_epoch !== undefined && object.gifts_sent_this_epoch !== null) {
      message.giftsSentThisEpoch = object.gifts_sent_this_epoch;
    }
    if (object.last_gift_epoch !== undefined && object.last_gift_epoch !== null) {
      message.lastGiftEpoch = BigInt(object.last_gift_epoch);
    }
    if (object.last_credit_reset_season !== undefined && object.last_credit_reset_season !== null) {
      message.lastCreditResetSeason = BigInt(object.last_credit_reset_season);
    }
    message.reputationGainedThisEpoch = Object.entries(object.reputation_gained_this_epoch ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.last_rep_gain_epoch !== undefined && object.last_rep_gain_epoch !== null) {
      message.lastRepGainEpoch = BigInt(object.last_rep_gain_epoch);
    }
    if (object.zk_public_key !== undefined && object.zk_public_key !== null) {
      message.zkPublicKey = bytesFromBase64(object.zk_public_key);
    }
    if (object.epoch_salvations !== undefined && object.epoch_salvations !== null) {
      message.epochSalvations = object.epoch_salvations;
    }
    if (object.last_salvation_epoch !== undefined && object.last_salvation_epoch !== null) {
      message.lastSalvationEpoch = BigInt(object.last_salvation_epoch);
    }
    return message;
  },
  toAmino(message: Member): MemberAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.dream_balance = message.dreamBalance === "" ? undefined : message.dreamBalance;
    obj.staked_dream = message.stakedDream === "" ? undefined : message.stakedDream;
    obj.lifetime_earned = message.lifetimeEarned === "" ? undefined : message.lifetimeEarned;
    obj.lifetime_burned = message.lifetimeBurned === "" ? undefined : message.lifetimeBurned;
    obj.reputation_scores = {};
    if (message.reputationScores) {
      Object.entries(message.reputationScores).forEach(([k, v]) => {
        obj.reputation_scores[k] = v;
      });
    }
    obj.lifetime_reputation = {};
    if (message.lifetimeReputation) {
      Object.entries(message.lifetimeReputation).forEach(([k, v]) => {
        obj.lifetime_reputation[k] = v;
      });
    }
    obj.trust_level = message.trustLevel === 0 ? undefined : message.trustLevel;
    obj.trust_level_updated_at = message.trustLevelUpdatedAt !== BigInt(0) ? message.trustLevelUpdatedAt?.toString() : undefined;
    obj.joined_season = message.joinedSeason === 0 ? undefined : message.joinedSeason;
    obj.joined_at = message.joinedAt !== BigInt(0) ? message.joinedAt?.toString() : undefined;
    obj.invited_by = message.invitedBy === "" ? undefined : message.invitedBy;
    if (message.invitationChain) {
      obj.invitation_chain = message.invitationChain.map(e => e);
    } else {
      obj.invitation_chain = message.invitationChain;
    }
    obj.invitation_credits = message.invitationCredits === 0 ? undefined : message.invitationCredits;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.zeroed_at = message.zeroedAt !== BigInt(0) ? message.zeroedAt?.toString() : undefined;
    obj.zeroed_count = message.zeroedCount === 0 ? undefined : message.zeroedCount;
    obj.last_decay_epoch = message.lastDecayEpoch !== BigInt(0) ? message.lastDecayEpoch?.toString() : undefined;
    obj.tips_given_this_epoch = message.tipsGivenThisEpoch === 0 ? undefined : message.tipsGivenThisEpoch;
    obj.last_tip_epoch = message.lastTipEpoch !== BigInt(0) ? message.lastTipEpoch?.toString() : undefined;
    obj.completed_interims_count = message.completedInterimsCount === 0 ? undefined : message.completedInterimsCount;
    obj.completed_initiatives_count = message.completedInitiativesCount === 0 ? undefined : message.completedInitiativesCount;
    obj.gifts_sent_this_epoch = message.giftsSentThisEpoch === "" ? undefined : message.giftsSentThisEpoch;
    obj.last_gift_epoch = message.lastGiftEpoch !== BigInt(0) ? message.lastGiftEpoch?.toString() : undefined;
    obj.last_credit_reset_season = message.lastCreditResetSeason !== BigInt(0) ? message.lastCreditResetSeason?.toString() : undefined;
    obj.reputation_gained_this_epoch = {};
    if (message.reputationGainedThisEpoch) {
      Object.entries(message.reputationGainedThisEpoch).forEach(([k, v]) => {
        obj.reputation_gained_this_epoch[k] = v;
      });
    }
    obj.last_rep_gain_epoch = message.lastRepGainEpoch !== BigInt(0) ? message.lastRepGainEpoch?.toString() : undefined;
    obj.zk_public_key = message.zkPublicKey ? base64FromBytes(message.zkPublicKey) : undefined;
    obj.epoch_salvations = message.epochSalvations === 0 ? undefined : message.epochSalvations;
    obj.last_salvation_epoch = message.lastSalvationEpoch !== BigInt(0) ? message.lastSalvationEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberAminoMsg): Member {
    return Member.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberProtoMsg): Member {
    return Member.decode(message.value);
  },
  toProto(message: Member): Uint8Array {
    return Member.encode(message).finish();
  },
  toProtoMsg(message: Member): MemberProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.Member",
      value: Member.encode(message).finish()
    };
  }
};
function createBaseGiftRecord(): GiftRecord {
  return {
    sender: "",
    recipient: "",
    lastGiftBlock: BigInt(0)
  };
}
/**
 * GiftRecord tracks the last time a sender gifted a specific recipient
 * Used to enforce per-recipient cooldown periods
 * @name GiftRecord
 * @package sparkdream.rep.v1
 * @see proto type: sparkdream.rep.v1.GiftRecord
 */
export const GiftRecord = {
  typeUrl: "/sparkdream.rep.v1.GiftRecord",
  encode(message: GiftRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.lastGiftBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.lastGiftBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GiftRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGiftRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.lastGiftBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GiftRecord>): GiftRecord {
    const message = createBaseGiftRecord();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.lastGiftBlock = object.lastGiftBlock !== undefined && object.lastGiftBlock !== null ? BigInt(object.lastGiftBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GiftRecordAmino): GiftRecord {
    const message = createBaseGiftRecord();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.last_gift_block !== undefined && object.last_gift_block !== null) {
      message.lastGiftBlock = BigInt(object.last_gift_block);
    }
    return message;
  },
  toAmino(message: GiftRecord): GiftRecordAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.last_gift_block = message.lastGiftBlock !== BigInt(0) ? message.lastGiftBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GiftRecordAminoMsg): GiftRecord {
    return GiftRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: GiftRecordProtoMsg): GiftRecord {
    return GiftRecord.decode(message.value);
  },
  toProto(message: GiftRecord): Uint8Array {
    return GiftRecord.encode(message).finish();
  },
  toProtoMsg(message: GiftRecord): GiftRecordProtoMsg {
    return {
      typeUrl: "/sparkdream.rep.v1.GiftRecord",
      value: GiftRecord.encode(message).finish()
    };
  }
};