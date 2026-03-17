//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { Contribution, ContributionAmino, RevealStake, RevealStakeAmino, VerificationVote, VerificationVoteAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the reveal module's genesis state.
 * @name GenesisState
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  contributions: Contribution[];
  stakes: RevealStake[];
  votes: VerificationVote[];
  nextContributionId: bigint;
  nextStakeId: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the reveal module's genesis state.
 * @name GenesisStateAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  contributions?: ContributionAmino[];
  stakes?: RevealStakeAmino[];
  votes?: VerificationVoteAmino[];
  next_contribution_id?: string;
  next_stake_id?: string;
}
export interface GenesisStateAminoMsg {
  type: "/sparkdream.reveal.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    contributions: [],
    stakes: [],
    votes: [],
    nextContributionId: BigInt(0),
    nextStakeId: BigInt(0)
  };
}
/**
 * GenesisState defines the reveal module's genesis state.
 * @name GenesisState
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/sparkdream.reveal.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contributions) {
      Contribution.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.stakes) {
      RevealStake.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.votes) {
      VerificationVote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextContributionId !== BigInt(0)) {
      writer.uint32(40).uint64(message.nextContributionId);
    }
    if (message.nextStakeId !== BigInt(0)) {
      writer.uint32(48).uint64(message.nextStakeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.contributions.push(Contribution.decode(reader, reader.uint32()));
          break;
        case 3:
          message.stakes.push(RevealStake.decode(reader, reader.uint32()));
          break;
        case 4:
          message.votes.push(VerificationVote.decode(reader, reader.uint32()));
          break;
        case 5:
          message.nextContributionId = reader.uint64();
          break;
        case 6:
          message.nextStakeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.contributions = object.contributions?.map(e => Contribution.fromPartial(e)) || [];
    message.stakes = object.stakes?.map(e => RevealStake.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => VerificationVote.fromPartial(e)) || [];
    message.nextContributionId = object.nextContributionId !== undefined && object.nextContributionId !== null ? BigInt(object.nextContributionId.toString()) : BigInt(0);
    message.nextStakeId = object.nextStakeId !== undefined && object.nextStakeId !== null ? BigInt(object.nextStakeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.contributions = object.contributions?.map(e => Contribution.fromAmino(e)) || [];
    message.stakes = object.stakes?.map(e => RevealStake.fromAmino(e)) || [];
    message.votes = object.votes?.map(e => VerificationVote.fromAmino(e)) || [];
    if (object.next_contribution_id !== undefined && object.next_contribution_id !== null) {
      message.nextContributionId = BigInt(object.next_contribution_id);
    }
    if (object.next_stake_id !== undefined && object.next_stake_id !== null) {
      message.nextStakeId = BigInt(object.next_stake_id);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.contributions) {
      obj.contributions = message.contributions.map(e => e ? Contribution.toAmino(e) : undefined);
    } else {
      obj.contributions = message.contributions;
    }
    if (message.stakes) {
      obj.stakes = message.stakes.map(e => e ? RevealStake.toAmino(e) : undefined);
    } else {
      obj.stakes = message.stakes;
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? VerificationVote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.next_contribution_id = message.nextContributionId !== BigInt(0) ? message.nextContributionId?.toString() : undefined;
    obj.next_stake_id = message.nextStakeId !== BigInt(0) ? message.nextStakeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};