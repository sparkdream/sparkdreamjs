//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Nomination represents a retroactive public goods funding nomination.
 * Members nominate completed contributions and the community stakes DREAM
 * conviction on nominations. Top-conviction nominations receive bonus DREAM.
 * @name Nomination
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Nomination
 */
export interface Nomination {
  id: bigint;
  /**
   * address of the nominator
   */
  nominator: string;
  /**
   * e.g. "blog/post/42", "forum/post/7", "collect/collection/3", "rep/initiative/5", "rep/jury/addr"
   */
  contentRef: string;
  rationale: string;
  createdAtBlock: bigint;
  season: bigint;
  totalStaked: string;
  conviction: string;
  rewardAmount: string;
  rewarded: boolean;
}
export interface NominationProtoMsg {
  typeUrl: "/sparkdream.season.v1.Nomination";
  value: Uint8Array;
}
/**
 * Nomination represents a retroactive public goods funding nomination.
 * Members nominate completed contributions and the community stakes DREAM
 * conviction on nominations. Top-conviction nominations receive bonus DREAM.
 * @name NominationAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Nomination
 */
export interface NominationAmino {
  id?: string;
  /**
   * address of the nominator
   */
  nominator?: string;
  /**
   * e.g. "blog/post/42", "forum/post/7", "collect/collection/3", "rep/initiative/5", "rep/jury/addr"
   */
  content_ref?: string;
  rationale?: string;
  created_at_block?: string;
  season?: string;
  total_staked?: string;
  conviction?: string;
  reward_amount?: string;
  rewarded?: boolean;
}
export interface NominationAminoMsg {
  type: "/sparkdream.season.v1.Nomination";
  value: NominationAmino;
}
/**
 * NominationStake represents a DREAM stake on a nomination.
 * @name NominationStake
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.NominationStake
 */
export interface NominationStake {
  nominationId: bigint;
  staker: string;
  amount: string;
  stakedAtBlock: bigint;
}
export interface NominationStakeProtoMsg {
  typeUrl: "/sparkdream.season.v1.NominationStake";
  value: Uint8Array;
}
/**
 * NominationStake represents a DREAM stake on a nomination.
 * @name NominationStakeAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.NominationStake
 */
export interface NominationStakeAmino {
  nomination_id?: string;
  staker?: string;
  amount?: string;
  staked_at_block?: string;
}
export interface NominationStakeAminoMsg {
  type: "/sparkdream.season.v1.NominationStake";
  value: NominationStakeAmino;
}
/**
 * RetroRewardRecord tracks the history of retroactive rewards distributed per season.
 * @name RetroRewardRecord
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.RetroRewardRecord
 */
export interface RetroRewardRecord {
  season: bigint;
  nominationId: bigint;
  /**
   * nominator address
   */
  recipient: string;
  contentRef: string;
  conviction: string;
  rewardAmount: string;
  distributedAtBlock: bigint;
}
export interface RetroRewardRecordProtoMsg {
  typeUrl: "/sparkdream.season.v1.RetroRewardRecord";
  value: Uint8Array;
}
/**
 * RetroRewardRecord tracks the history of retroactive rewards distributed per season.
 * @name RetroRewardRecordAmino
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.RetroRewardRecord
 */
export interface RetroRewardRecordAmino {
  season?: string;
  nomination_id?: string;
  /**
   * nominator address
   */
  recipient?: string;
  content_ref?: string;
  conviction?: string;
  reward_amount?: string;
  distributed_at_block?: string;
}
export interface RetroRewardRecordAminoMsg {
  type: "/sparkdream.season.v1.RetroRewardRecord";
  value: RetroRewardRecordAmino;
}
function createBaseNomination(): Nomination {
  return {
    id: BigInt(0),
    nominator: "",
    contentRef: "",
    rationale: "",
    createdAtBlock: BigInt(0),
    season: BigInt(0),
    totalStaked: "",
    conviction: "",
    rewardAmount: "",
    rewarded: false
  };
}
/**
 * Nomination represents a retroactive public goods funding nomination.
 * Members nominate completed contributions and the community stakes DREAM
 * conviction on nominations. Top-conviction nominations receive bonus DREAM.
 * @name Nomination
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.Nomination
 */
export const Nomination = {
  typeUrl: "/sparkdream.season.v1.Nomination",
  encode(message: Nomination, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nominator !== "") {
      writer.uint32(18).string(message.nominator);
    }
    if (message.contentRef !== "") {
      writer.uint32(26).string(message.contentRef);
    }
    if (message.rationale !== "") {
      writer.uint32(34).string(message.rationale);
    }
    if (message.createdAtBlock !== BigInt(0)) {
      writer.uint32(40).int64(message.createdAtBlock);
    }
    if (message.season !== BigInt(0)) {
      writer.uint32(48).uint64(message.season);
    }
    if (message.totalStaked !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.totalStaked, 18).atomics);
    }
    if (message.conviction !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.conviction, 18).atomics);
    }
    if (message.rewardAmount !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.rewardAmount, 18).atomics);
    }
    if (message.rewarded === true) {
      writer.uint32(80).bool(message.rewarded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Nomination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNomination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.nominator = reader.string();
          break;
        case 3:
          message.contentRef = reader.string();
          break;
        case 4:
          message.rationale = reader.string();
          break;
        case 5:
          message.createdAtBlock = reader.int64();
          break;
        case 6:
          message.season = reader.uint64();
          break;
        case 7:
          message.totalStaked = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.conviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.rewardAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.rewarded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Nomination>): Nomination {
    const message = createBaseNomination();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.nominator = object.nominator ?? "";
    message.contentRef = object.contentRef ?? "";
    message.rationale = object.rationale ?? "";
    message.createdAtBlock = object.createdAtBlock !== undefined && object.createdAtBlock !== null ? BigInt(object.createdAtBlock.toString()) : BigInt(0);
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    message.totalStaked = object.totalStaked ?? "";
    message.conviction = object.conviction ?? "";
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewarded = object.rewarded ?? false;
    return message;
  },
  fromAmino(object: NominationAmino): Nomination {
    const message = createBaseNomination();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.nominator !== undefined && object.nominator !== null) {
      message.nominator = object.nominator;
    }
    if (object.content_ref !== undefined && object.content_ref !== null) {
      message.contentRef = object.content_ref;
    }
    if (object.rationale !== undefined && object.rationale !== null) {
      message.rationale = object.rationale;
    }
    if (object.created_at_block !== undefined && object.created_at_block !== null) {
      message.createdAtBlock = BigInt(object.created_at_block);
    }
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    if (object.total_staked !== undefined && object.total_staked !== null) {
      message.totalStaked = object.total_staked;
    }
    if (object.conviction !== undefined && object.conviction !== null) {
      message.conviction = object.conviction;
    }
    if (object.reward_amount !== undefined && object.reward_amount !== null) {
      message.rewardAmount = object.reward_amount;
    }
    if (object.rewarded !== undefined && object.rewarded !== null) {
      message.rewarded = object.rewarded;
    }
    return message;
  },
  toAmino(message: Nomination): NominationAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.nominator = message.nominator === "" ? undefined : message.nominator;
    obj.content_ref = message.contentRef === "" ? undefined : message.contentRef;
    obj.rationale = message.rationale === "" ? undefined : message.rationale;
    obj.created_at_block = message.createdAtBlock !== BigInt(0) ? message.createdAtBlock?.toString() : undefined;
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    obj.total_staked = message.totalStaked === "" ? undefined : message.totalStaked;
    obj.conviction = message.conviction === "" ? undefined : message.conviction;
    obj.reward_amount = message.rewardAmount === "" ? undefined : message.rewardAmount;
    obj.rewarded = message.rewarded === false ? undefined : message.rewarded;
    return obj;
  },
  fromAminoMsg(object: NominationAminoMsg): Nomination {
    return Nomination.fromAmino(object.value);
  },
  fromProtoMsg(message: NominationProtoMsg): Nomination {
    return Nomination.decode(message.value);
  },
  toProto(message: Nomination): Uint8Array {
    return Nomination.encode(message).finish();
  },
  toProtoMsg(message: Nomination): NominationProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.Nomination",
      value: Nomination.encode(message).finish()
    };
  }
};
function createBaseNominationStake(): NominationStake {
  return {
    nominationId: BigInt(0),
    staker: "",
    amount: "",
    stakedAtBlock: BigInt(0)
  };
}
/**
 * NominationStake represents a DREAM stake on a nomination.
 * @name NominationStake
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.NominationStake
 */
export const NominationStake = {
  typeUrl: "/sparkdream.season.v1.NominationStake",
  encode(message: NominationStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nominationId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nominationId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.amount, 18).atomics);
    }
    if (message.stakedAtBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.stakedAtBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NominationStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNominationStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nominationId = reader.uint64();
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.amount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.stakedAtBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<NominationStake>): NominationStake {
    const message = createBaseNominationStake();
    message.nominationId = object.nominationId !== undefined && object.nominationId !== null ? BigInt(object.nominationId.toString()) : BigInt(0);
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "";
    message.stakedAtBlock = object.stakedAtBlock !== undefined && object.stakedAtBlock !== null ? BigInt(object.stakedAtBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NominationStakeAmino): NominationStake {
    const message = createBaseNominationStake();
    if (object.nomination_id !== undefined && object.nomination_id !== null) {
      message.nominationId = BigInt(object.nomination_id);
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.staked_at_block !== undefined && object.staked_at_block !== null) {
      message.stakedAtBlock = BigInt(object.staked_at_block);
    }
    return message;
  },
  toAmino(message: NominationStake): NominationStakeAmino {
    const obj: any = {};
    obj.nomination_id = message.nominationId !== BigInt(0) ? message.nominationId?.toString() : undefined;
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.staked_at_block = message.stakedAtBlock !== BigInt(0) ? message.stakedAtBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NominationStakeAminoMsg): NominationStake {
    return NominationStake.fromAmino(object.value);
  },
  fromProtoMsg(message: NominationStakeProtoMsg): NominationStake {
    return NominationStake.decode(message.value);
  },
  toProto(message: NominationStake): Uint8Array {
    return NominationStake.encode(message).finish();
  },
  toProtoMsg(message: NominationStake): NominationStakeProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.NominationStake",
      value: NominationStake.encode(message).finish()
    };
  }
};
function createBaseRetroRewardRecord(): RetroRewardRecord {
  return {
    season: BigInt(0),
    nominationId: BigInt(0),
    recipient: "",
    contentRef: "",
    conviction: "",
    rewardAmount: "",
    distributedAtBlock: BigInt(0)
  };
}
/**
 * RetroRewardRecord tracks the history of retroactive rewards distributed per season.
 * @name RetroRewardRecord
 * @package sparkdream.season.v1
 * @see proto type: sparkdream.season.v1.RetroRewardRecord
 */
export const RetroRewardRecord = {
  typeUrl: "/sparkdream.season.v1.RetroRewardRecord",
  encode(message: RetroRewardRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.season !== BigInt(0)) {
      writer.uint32(8).uint64(message.season);
    }
    if (message.nominationId !== BigInt(0)) {
      writer.uint32(16).uint64(message.nominationId);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.contentRef !== "") {
      writer.uint32(34).string(message.contentRef);
    }
    if (message.conviction !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.conviction, 18).atomics);
    }
    if (message.rewardAmount !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.rewardAmount, 18).atomics);
    }
    if (message.distributedAtBlock !== BigInt(0)) {
      writer.uint32(56).int64(message.distributedAtBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RetroRewardRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetroRewardRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.season = reader.uint64();
          break;
        case 2:
          message.nominationId = reader.uint64();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.contentRef = reader.string();
          break;
        case 5:
          message.conviction = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.rewardAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.distributedAtBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RetroRewardRecord>): RetroRewardRecord {
    const message = createBaseRetroRewardRecord();
    message.season = object.season !== undefined && object.season !== null ? BigInt(object.season.toString()) : BigInt(0);
    message.nominationId = object.nominationId !== undefined && object.nominationId !== null ? BigInt(object.nominationId.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    message.contentRef = object.contentRef ?? "";
    message.conviction = object.conviction ?? "";
    message.rewardAmount = object.rewardAmount ?? "";
    message.distributedAtBlock = object.distributedAtBlock !== undefined && object.distributedAtBlock !== null ? BigInt(object.distributedAtBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RetroRewardRecordAmino): RetroRewardRecord {
    const message = createBaseRetroRewardRecord();
    if (object.season !== undefined && object.season !== null) {
      message.season = BigInt(object.season);
    }
    if (object.nomination_id !== undefined && object.nomination_id !== null) {
      message.nominationId = BigInt(object.nomination_id);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.content_ref !== undefined && object.content_ref !== null) {
      message.contentRef = object.content_ref;
    }
    if (object.conviction !== undefined && object.conviction !== null) {
      message.conviction = object.conviction;
    }
    if (object.reward_amount !== undefined && object.reward_amount !== null) {
      message.rewardAmount = object.reward_amount;
    }
    if (object.distributed_at_block !== undefined && object.distributed_at_block !== null) {
      message.distributedAtBlock = BigInt(object.distributed_at_block);
    }
    return message;
  },
  toAmino(message: RetroRewardRecord): RetroRewardRecordAmino {
    const obj: any = {};
    obj.season = message.season !== BigInt(0) ? message.season?.toString() : undefined;
    obj.nomination_id = message.nominationId !== BigInt(0) ? message.nominationId?.toString() : undefined;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.content_ref = message.contentRef === "" ? undefined : message.contentRef;
    obj.conviction = message.conviction === "" ? undefined : message.conviction;
    obj.reward_amount = message.rewardAmount === "" ? undefined : message.rewardAmount;
    obj.distributed_at_block = message.distributedAtBlock !== BigInt(0) ? message.distributedAtBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RetroRewardRecordAminoMsg): RetroRewardRecord {
    return RetroRewardRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: RetroRewardRecordProtoMsg): RetroRewardRecord {
    return RetroRewardRecord.decode(message.value);
  },
  toProto(message: RetroRewardRecord): Uint8Array {
    return RetroRewardRecord.encode(message).finish();
  },
  toProtoMsg(message: RetroRewardRecord): RetroRewardRecordProtoMsg {
    return {
      typeUrl: "/sparkdream.season.v1.RetroRewardRecord",
      value: RetroRewardRecord.encode(message).finish()
    };
  }
};