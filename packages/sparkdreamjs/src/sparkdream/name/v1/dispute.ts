//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Dispute defines a name ownership dispute with DREAM staking.
 * @name Dispute
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.Dispute
 */
export interface Dispute {
  name: string;
  claimant: string;
  /**
   * Block height when filed
   */
  filedAt: bigint;
  /**
   * Claimant's DREAM stake
   */
  stakeAmount: string;
  /**
   * Whether dispute is pending
   */
  active: boolean;
  /**
   * Set when owner contests (for jury tracking)
   */
  contestChallengeId: string;
  /**
   * Block height when contested
   */
  contestedAt: bigint;
  /**
   * Jury verdict: did owner's contest win?
   */
  contestSucceeded: boolean;
}
export interface DisputeProtoMsg {
  typeUrl: "/sparkdream.name.v1.Dispute";
  value: Uint8Array;
}
/**
 * Dispute defines a name ownership dispute with DREAM staking.
 * @name DisputeAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.Dispute
 */
export interface DisputeAmino {
  name?: string;
  claimant?: string;
  /**
   * Block height when filed
   */
  filed_at?: string;
  /**
   * Claimant's DREAM stake
   */
  stake_amount?: string;
  /**
   * Whether dispute is pending
   */
  active?: boolean;
  /**
   * Set when owner contests (for jury tracking)
   */
  contest_challenge_id?: string;
  /**
   * Block height when contested
   */
  contested_at?: string;
  /**
   * Jury verdict: did owner's contest win?
   */
  contest_succeeded?: boolean;
}
export interface DisputeAminoMsg {
  type: "/sparkdream.name.v1.Dispute";
  value: DisputeAmino;
}
/**
 * DisputeStake tracks the claimant's DREAM stake for a name dispute.
 * @name DisputeStake
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.DisputeStake
 */
export interface DisputeStake {
  /**
   * "name_dispute:<name>:<block>"
   */
  challengeId: string;
  /**
   * Claimant address
   */
  staker: string;
  amount: string;
}
export interface DisputeStakeProtoMsg {
  typeUrl: "/sparkdream.name.v1.DisputeStake";
  value: Uint8Array;
}
/**
 * DisputeStake tracks the claimant's DREAM stake for a name dispute.
 * @name DisputeStakeAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.DisputeStake
 */
export interface DisputeStakeAmino {
  /**
   * "name_dispute:<name>:<block>"
   */
  challenge_id?: string;
  /**
   * Claimant address
   */
  staker?: string;
  amount?: string;
}
export interface DisputeStakeAminoMsg {
  type: "/sparkdream.name.v1.DisputeStake";
  value: DisputeStakeAmino;
}
/**
 * ContestStake tracks the owner's DREAM stake when contesting a dispute.
 * @name ContestStake
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.ContestStake
 */
export interface ContestStake {
  /**
   * "name_contest:<name>:<block>"
   */
  challengeId: string;
  /**
   * Current owner address
   */
  owner: string;
  amount: string;
}
export interface ContestStakeProtoMsg {
  typeUrl: "/sparkdream.name.v1.ContestStake";
  value: Uint8Array;
}
/**
 * ContestStake tracks the owner's DREAM stake when contesting a dispute.
 * @name ContestStakeAmino
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.ContestStake
 */
export interface ContestStakeAmino {
  /**
   * "name_contest:<name>:<block>"
   */
  challenge_id?: string;
  /**
   * Current owner address
   */
  owner?: string;
  amount?: string;
}
export interface ContestStakeAminoMsg {
  type: "/sparkdream.name.v1.ContestStake";
  value: ContestStakeAmino;
}
function createBaseDispute(): Dispute {
  return {
    name: "",
    claimant: "",
    filedAt: BigInt(0),
    stakeAmount: "",
    active: false,
    contestChallengeId: "",
    contestedAt: BigInt(0),
    contestSucceeded: false
  };
}
/**
 * Dispute defines a name ownership dispute with DREAM staking.
 * @name Dispute
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.Dispute
 */
export const Dispute = {
  typeUrl: "/sparkdream.name.v1.Dispute",
  encode(message: Dispute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.claimant !== "") {
      writer.uint32(18).string(message.claimant);
    }
    if (message.filedAt !== BigInt(0)) {
      writer.uint32(24).int64(message.filedAt);
    }
    if (message.stakeAmount !== "") {
      writer.uint32(34).string(message.stakeAmount);
    }
    if (message.active === true) {
      writer.uint32(40).bool(message.active);
    }
    if (message.contestChallengeId !== "") {
      writer.uint32(50).string(message.contestChallengeId);
    }
    if (message.contestedAt !== BigInt(0)) {
      writer.uint32(56).int64(message.contestedAt);
    }
    if (message.contestSucceeded === true) {
      writer.uint32(64).bool(message.contestSucceeded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Dispute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDispute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.claimant = reader.string();
          break;
        case 3:
          message.filedAt = reader.int64();
          break;
        case 4:
          message.stakeAmount = reader.string();
          break;
        case 5:
          message.active = reader.bool();
          break;
        case 6:
          message.contestChallengeId = reader.string();
          break;
        case 7:
          message.contestedAt = reader.int64();
          break;
        case 8:
          message.contestSucceeded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Dispute>): Dispute {
    const message = createBaseDispute();
    message.name = object.name ?? "";
    message.claimant = object.claimant ?? "";
    message.filedAt = object.filedAt !== undefined && object.filedAt !== null ? BigInt(object.filedAt.toString()) : BigInt(0);
    message.stakeAmount = object.stakeAmount ?? "";
    message.active = object.active ?? false;
    message.contestChallengeId = object.contestChallengeId ?? "";
    message.contestedAt = object.contestedAt !== undefined && object.contestedAt !== null ? BigInt(object.contestedAt.toString()) : BigInt(0);
    message.contestSucceeded = object.contestSucceeded ?? false;
    return message;
  },
  fromAmino(object: DisputeAmino): Dispute {
    const message = createBaseDispute();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.claimant !== undefined && object.claimant !== null) {
      message.claimant = object.claimant;
    }
    if (object.filed_at !== undefined && object.filed_at !== null) {
      message.filedAt = BigInt(object.filed_at);
    }
    if (object.stake_amount !== undefined && object.stake_amount !== null) {
      message.stakeAmount = object.stake_amount;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.contest_challenge_id !== undefined && object.contest_challenge_id !== null) {
      message.contestChallengeId = object.contest_challenge_id;
    }
    if (object.contested_at !== undefined && object.contested_at !== null) {
      message.contestedAt = BigInt(object.contested_at);
    }
    if (object.contest_succeeded !== undefined && object.contest_succeeded !== null) {
      message.contestSucceeded = object.contest_succeeded;
    }
    return message;
  },
  toAmino(message: Dispute): DisputeAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.claimant = message.claimant === "" ? undefined : message.claimant;
    obj.filed_at = message.filedAt !== BigInt(0) ? message.filedAt?.toString() : undefined;
    obj.stake_amount = message.stakeAmount === "" ? undefined : message.stakeAmount;
    obj.active = message.active === false ? undefined : message.active;
    obj.contest_challenge_id = message.contestChallengeId === "" ? undefined : message.contestChallengeId;
    obj.contested_at = message.contestedAt !== BigInt(0) ? message.contestedAt?.toString() : undefined;
    obj.contest_succeeded = message.contestSucceeded === false ? undefined : message.contestSucceeded;
    return obj;
  },
  fromAminoMsg(object: DisputeAminoMsg): Dispute {
    return Dispute.fromAmino(object.value);
  },
  fromProtoMsg(message: DisputeProtoMsg): Dispute {
    return Dispute.decode(message.value);
  },
  toProto(message: Dispute): Uint8Array {
    return Dispute.encode(message).finish();
  },
  toProtoMsg(message: Dispute): DisputeProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.Dispute",
      value: Dispute.encode(message).finish()
    };
  }
};
function createBaseDisputeStake(): DisputeStake {
  return {
    challengeId: "",
    staker: "",
    amount: ""
  };
}
/**
 * DisputeStake tracks the claimant's DREAM stake for a name dispute.
 * @name DisputeStake
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.DisputeStake
 */
export const DisputeStake = {
  typeUrl: "/sparkdream.name.v1.DisputeStake",
  encode(message: DisputeStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challengeId !== "") {
      writer.uint32(10).string(message.challengeId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DisputeStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisputeStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeId = reader.string();
          break;
        case 2:
          message.staker = reader.string();
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
  fromPartial(object: DeepPartial<DisputeStake>): DisputeStake {
    const message = createBaseDisputeStake();
    message.challengeId = object.challengeId ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: DisputeStakeAmino): DisputeStake {
    const message = createBaseDisputeStake();
    if (object.challenge_id !== undefined && object.challenge_id !== null) {
      message.challengeId = object.challenge_id;
    }
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: DisputeStake): DisputeStakeAmino {
    const obj: any = {};
    obj.challenge_id = message.challengeId === "" ? undefined : message.challengeId;
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: DisputeStakeAminoMsg): DisputeStake {
    return DisputeStake.fromAmino(object.value);
  },
  fromProtoMsg(message: DisputeStakeProtoMsg): DisputeStake {
    return DisputeStake.decode(message.value);
  },
  toProto(message: DisputeStake): Uint8Array {
    return DisputeStake.encode(message).finish();
  },
  toProtoMsg(message: DisputeStake): DisputeStakeProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.DisputeStake",
      value: DisputeStake.encode(message).finish()
    };
  }
};
function createBaseContestStake(): ContestStake {
  return {
    challengeId: "",
    owner: "",
    amount: ""
  };
}
/**
 * ContestStake tracks the owner's DREAM stake when contesting a dispute.
 * @name ContestStake
 * @package sparkdream.name.v1
 * @see proto type: sparkdream.name.v1.ContestStake
 */
export const ContestStake = {
  typeUrl: "/sparkdream.name.v1.ContestStake",
  encode(message: ContestStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.challengeId !== "") {
      writer.uint32(10).string(message.challengeId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContestStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContestStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
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
  fromPartial(object: DeepPartial<ContestStake>): ContestStake {
    const message = createBaseContestStake();
    message.challengeId = object.challengeId ?? "";
    message.owner = object.owner ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: ContestStakeAmino): ContestStake {
    const message = createBaseContestStake();
    if (object.challenge_id !== undefined && object.challenge_id !== null) {
      message.challengeId = object.challenge_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: ContestStake): ContestStakeAmino {
    const obj: any = {};
    obj.challenge_id = message.challengeId === "" ? undefined : message.challengeId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: ContestStakeAminoMsg): ContestStake {
    return ContestStake.fromAmino(object.value);
  },
  fromProtoMsg(message: ContestStakeProtoMsg): ContestStake {
    return ContestStake.decode(message.value);
  },
  toProto(message: ContestStake): Uint8Array {
    return ContestStake.encode(message).finish();
  },
  toProtoMsg(message: ContestStake): ContestStakeProtoMsg {
    return {
      typeUrl: "/sparkdream.name.v1.ContestStake",
      value: ContestStake.encode(message).finish()
    };
  }
};