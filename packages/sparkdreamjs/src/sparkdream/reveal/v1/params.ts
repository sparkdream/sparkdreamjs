//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.Params
 */
export interface Params {
  /**
   * max epochs a tranche stays in STAKING
   */
  stakeDeadlineEpochs: bigint;
  /**
   * max epochs after BACKED to submit code
   */
  revealDeadlineEpochs: bigint;
  /**
   * duration of verification voting window
   */
  verificationPeriodEpochs: bigint;
  /**
   * max epochs for council to resolve a dispute
   */
  disputeResolutionEpochs: bigint;
  verificationThreshold: string;
  /**
   * base minimum; scales with tranche valuation
   */
  minVerificationVotes: number;
  maxTranches: number;
  maxTrancheValuation: string;
  /**
   * Bond = bond_rate * total_valuation; slashed if contributor fails to reveal
   */
  bondRate: string;
  /**
   * Minimum trust level required to propose a contribution
   */
  minProposerTrustLevel: number;
  /**
   * Maximum total valuation across all tranches for a single contribution
   */
  maxTotalValuation: string;
  /**
   * Minimum DREAM stake amount (prevents dust stakes used for vote griefing)
   */
  minStakeAmount: string;
  /**
   * Percentage of each tranche payout held back until all tranches complete
   */
  payoutHoldbackRate: string;
  /**
   * Epochs a rejected contributor must wait before re-proposing (prevents spam)
   */
  proposalCooldownEpochs: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.Params
 */
export interface ParamsAmino {
  /**
   * max epochs a tranche stays in STAKING
   */
  stake_deadline_epochs?: string;
  /**
   * max epochs after BACKED to submit code
   */
  reveal_deadline_epochs?: string;
  /**
   * duration of verification voting window
   */
  verification_period_epochs?: string;
  /**
   * max epochs for council to resolve a dispute
   */
  dispute_resolution_epochs?: string;
  verification_threshold?: string;
  /**
   * base minimum; scales with tranche valuation
   */
  min_verification_votes?: number;
  max_tranches?: number;
  max_tranche_valuation?: string;
  /**
   * Bond = bond_rate * total_valuation; slashed if contributor fails to reveal
   */
  bond_rate?: string;
  /**
   * Minimum trust level required to propose a contribution
   */
  min_proposer_trust_level?: number;
  /**
   * Maximum total valuation across all tranches for a single contribution
   */
  max_total_valuation?: string;
  /**
   * Minimum DREAM stake amount (prevents dust stakes used for vote griefing)
   */
  min_stake_amount?: string;
  /**
   * Percentage of each tranche payout held back until all tranches complete
   */
  payout_holdback_rate?: string;
  /**
   * Epochs a rejected contributor must wait before re-proposing (prevents spam)
   */
  proposal_cooldown_epochs?: string;
}
export interface ParamsAminoMsg {
  type: "sparkdream/x/reveal/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    stakeDeadlineEpochs: BigInt(0),
    revealDeadlineEpochs: BigInt(0),
    verificationPeriodEpochs: BigInt(0),
    disputeResolutionEpochs: BigInt(0),
    verificationThreshold: "",
    minVerificationVotes: 0,
    maxTranches: 0,
    maxTrancheValuation: "",
    bondRate: "",
    minProposerTrustLevel: 0,
    maxTotalValuation: "",
    minStakeAmount: "",
    payoutHoldbackRate: "",
    proposalCooldownEpochs: BigInt(0)
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.Params
 */
export const Params = {
  typeUrl: "/sparkdream.reveal.v1.Params",
  aminoType: "sparkdream/x/reveal/Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeDeadlineEpochs !== BigInt(0)) {
      writer.uint32(8).int64(message.stakeDeadlineEpochs);
    }
    if (message.revealDeadlineEpochs !== BigInt(0)) {
      writer.uint32(16).int64(message.revealDeadlineEpochs);
    }
    if (message.verificationPeriodEpochs !== BigInt(0)) {
      writer.uint32(24).int64(message.verificationPeriodEpochs);
    }
    if (message.disputeResolutionEpochs !== BigInt(0)) {
      writer.uint32(32).int64(message.disputeResolutionEpochs);
    }
    if (message.verificationThreshold !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.verificationThreshold, 18).atomics);
    }
    if (message.minVerificationVotes !== 0) {
      writer.uint32(48).uint32(message.minVerificationVotes);
    }
    if (message.maxTranches !== 0) {
      writer.uint32(56).uint32(message.maxTranches);
    }
    if (message.maxTrancheValuation !== "") {
      writer.uint32(66).string(message.maxTrancheValuation);
    }
    if (message.bondRate !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.bondRate, 18).atomics);
    }
    if (message.minProposerTrustLevel !== 0) {
      writer.uint32(80).uint32(message.minProposerTrustLevel);
    }
    if (message.maxTotalValuation !== "") {
      writer.uint32(90).string(message.maxTotalValuation);
    }
    if (message.minStakeAmount !== "") {
      writer.uint32(98).string(message.minStakeAmount);
    }
    if (message.payoutHoldbackRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.payoutHoldbackRate, 18).atomics);
    }
    if (message.proposalCooldownEpochs !== BigInt(0)) {
      writer.uint32(112).int64(message.proposalCooldownEpochs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeDeadlineEpochs = reader.int64();
          break;
        case 2:
          message.revealDeadlineEpochs = reader.int64();
          break;
        case 3:
          message.verificationPeriodEpochs = reader.int64();
          break;
        case 4:
          message.disputeResolutionEpochs = reader.int64();
          break;
        case 5:
          message.verificationThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.minVerificationVotes = reader.uint32();
          break;
        case 7:
          message.maxTranches = reader.uint32();
          break;
        case 8:
          message.maxTrancheValuation = reader.string();
          break;
        case 9:
          message.bondRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.minProposerTrustLevel = reader.uint32();
          break;
        case 11:
          message.maxTotalValuation = reader.string();
          break;
        case 12:
          message.minStakeAmount = reader.string();
          break;
        case 13:
          message.payoutHoldbackRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.proposalCooldownEpochs = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.stakeDeadlineEpochs = object.stakeDeadlineEpochs !== undefined && object.stakeDeadlineEpochs !== null ? BigInt(object.stakeDeadlineEpochs.toString()) : BigInt(0);
    message.revealDeadlineEpochs = object.revealDeadlineEpochs !== undefined && object.revealDeadlineEpochs !== null ? BigInt(object.revealDeadlineEpochs.toString()) : BigInt(0);
    message.verificationPeriodEpochs = object.verificationPeriodEpochs !== undefined && object.verificationPeriodEpochs !== null ? BigInt(object.verificationPeriodEpochs.toString()) : BigInt(0);
    message.disputeResolutionEpochs = object.disputeResolutionEpochs !== undefined && object.disputeResolutionEpochs !== null ? BigInt(object.disputeResolutionEpochs.toString()) : BigInt(0);
    message.verificationThreshold = object.verificationThreshold ?? "";
    message.minVerificationVotes = object.minVerificationVotes ?? 0;
    message.maxTranches = object.maxTranches ?? 0;
    message.maxTrancheValuation = object.maxTrancheValuation ?? "";
    message.bondRate = object.bondRate ?? "";
    message.minProposerTrustLevel = object.minProposerTrustLevel ?? 0;
    message.maxTotalValuation = object.maxTotalValuation ?? "";
    message.minStakeAmount = object.minStakeAmount ?? "";
    message.payoutHoldbackRate = object.payoutHoldbackRate ?? "";
    message.proposalCooldownEpochs = object.proposalCooldownEpochs !== undefined && object.proposalCooldownEpochs !== null ? BigInt(object.proposalCooldownEpochs.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.stake_deadline_epochs !== undefined && object.stake_deadline_epochs !== null) {
      message.stakeDeadlineEpochs = BigInt(object.stake_deadline_epochs);
    }
    if (object.reveal_deadline_epochs !== undefined && object.reveal_deadline_epochs !== null) {
      message.revealDeadlineEpochs = BigInt(object.reveal_deadline_epochs);
    }
    if (object.verification_period_epochs !== undefined && object.verification_period_epochs !== null) {
      message.verificationPeriodEpochs = BigInt(object.verification_period_epochs);
    }
    if (object.dispute_resolution_epochs !== undefined && object.dispute_resolution_epochs !== null) {
      message.disputeResolutionEpochs = BigInt(object.dispute_resolution_epochs);
    }
    if (object.verification_threshold !== undefined && object.verification_threshold !== null) {
      message.verificationThreshold = object.verification_threshold;
    }
    if (object.min_verification_votes !== undefined && object.min_verification_votes !== null) {
      message.minVerificationVotes = object.min_verification_votes;
    }
    if (object.max_tranches !== undefined && object.max_tranches !== null) {
      message.maxTranches = object.max_tranches;
    }
    if (object.max_tranche_valuation !== undefined && object.max_tranche_valuation !== null) {
      message.maxTrancheValuation = object.max_tranche_valuation;
    }
    if (object.bond_rate !== undefined && object.bond_rate !== null) {
      message.bondRate = object.bond_rate;
    }
    if (object.min_proposer_trust_level !== undefined && object.min_proposer_trust_level !== null) {
      message.minProposerTrustLevel = object.min_proposer_trust_level;
    }
    if (object.max_total_valuation !== undefined && object.max_total_valuation !== null) {
      message.maxTotalValuation = object.max_total_valuation;
    }
    if (object.min_stake_amount !== undefined && object.min_stake_amount !== null) {
      message.minStakeAmount = object.min_stake_amount;
    }
    if (object.payout_holdback_rate !== undefined && object.payout_holdback_rate !== null) {
      message.payoutHoldbackRate = object.payout_holdback_rate;
    }
    if (object.proposal_cooldown_epochs !== undefined && object.proposal_cooldown_epochs !== null) {
      message.proposalCooldownEpochs = BigInt(object.proposal_cooldown_epochs);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.stake_deadline_epochs = message.stakeDeadlineEpochs !== BigInt(0) ? message.stakeDeadlineEpochs?.toString() : undefined;
    obj.reveal_deadline_epochs = message.revealDeadlineEpochs !== BigInt(0) ? message.revealDeadlineEpochs?.toString() : undefined;
    obj.verification_period_epochs = message.verificationPeriodEpochs !== BigInt(0) ? message.verificationPeriodEpochs?.toString() : undefined;
    obj.dispute_resolution_epochs = message.disputeResolutionEpochs !== BigInt(0) ? message.disputeResolutionEpochs?.toString() : undefined;
    obj.verification_threshold = message.verificationThreshold === "" ? undefined : message.verificationThreshold;
    obj.min_verification_votes = message.minVerificationVotes === 0 ? undefined : message.minVerificationVotes;
    obj.max_tranches = message.maxTranches === 0 ? undefined : message.maxTranches;
    obj.max_tranche_valuation = message.maxTrancheValuation === "" ? undefined : message.maxTrancheValuation;
    obj.bond_rate = message.bondRate === "" ? undefined : message.bondRate;
    obj.min_proposer_trust_level = message.minProposerTrustLevel === 0 ? undefined : message.minProposerTrustLevel;
    obj.max_total_valuation = message.maxTotalValuation === "" ? undefined : message.maxTotalValuation;
    obj.min_stake_amount = message.minStakeAmount === "" ? undefined : message.minStakeAmount;
    obj.payout_holdback_rate = message.payoutHoldbackRate === "" ? undefined : message.payoutHoldbackRate;
    obj.proposal_cooldown_epochs = message.proposalCooldownEpochs !== BigInt(0) ? message.proposalCooldownEpochs?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "sparkdream/x/reveal/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};