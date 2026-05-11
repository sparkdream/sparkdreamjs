//@ts-nocheck
import { Params, ParamsAmino } from "./params";
import { TrancheDef, TrancheDefAmino, DisputeVerdict } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * params defines the module parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * params defines the module parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "sparkdream/x/reveal/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/sparkdream.reveal.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * Any member with sufficient trust level can propose.
 * Validation:
 * - total_valuation <= max_total_valuation
 * - len(tranches) <= max_tranches
 * - Each tranche: stake_threshold <= max_tranche_valuation
 * - sum(stake_threshold) across all tranches == total_valuation
 * - Contributor has no active proposal_cooldown
 * - Bond (bond_rate * total_valuation) deducted and locked
 * @name MsgPropose
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgPropose
 */
export interface MsgPropose {
  contributor: string;
  projectName: string;
  description: string;
  totalValuation: string;
  tranches: TrancheDef[];
  initialLicense: string;
  finalLicense: string;
}
export interface MsgProposeProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgPropose";
  value: Uint8Array;
}
/**
 * Any member with sufficient trust level can propose.
 * Validation:
 * - total_valuation <= max_total_valuation
 * - len(tranches) <= max_tranches
 * - Each tranche: stake_threshold <= max_tranche_valuation
 * - sum(stake_threshold) across all tranches == total_valuation
 * - Contributor has no active proposal_cooldown
 * - Bond (bond_rate * total_valuation) deducted and locked
 * @name MsgProposeAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgPropose
 */
export interface MsgProposeAmino {
  contributor?: string;
  project_name?: string;
  description?: string;
  total_valuation?: string;
  tranches?: TrancheDefAmino[];
  initial_license?: string;
  final_license?: string;
}
export interface MsgProposeAminoMsg {
  type: "sparkdream/x/reveal/MsgPropose";
  value: MsgProposeAmino;
}
/**
 * MsgProposeResponse returns the new contribution ID.
 * @name MsgProposeResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgProposeResponse
 */
export interface MsgProposeResponse {
  contributionId: bigint;
}
export interface MsgProposeResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgProposeResponse";
  value: Uint8Array;
}
/**
 * MsgProposeResponse returns the new contribution ID.
 * @name MsgProposeResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgProposeResponse
 */
export interface MsgProposeResponseAmino {
  contribution_id?: string;
}
export interface MsgProposeResponseAminoMsg {
  type: "/sparkdream.reveal.v1.MsgProposeResponse";
  value: MsgProposeResponseAmino;
}
/**
 * Operations Committee member initiates approval; routed as Commons Council proposal.
 * The council votes to approve — prevents single-member collusion with contributors.
 * Accept-or-reject only (no term modification by committee or council).
 * @name MsgApprove
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgApprove
 */
export interface MsgApprove {
  /**
   * Commons Council group policy account (executed via proposal)
   */
  authority: string;
  /**
   * Operations Committee member who initiated the proposal
   */
  proposer: string;
  contributionId: bigint;
}
export interface MsgApproveProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgApprove";
  value: Uint8Array;
}
/**
 * Operations Committee member initiates approval; routed as Commons Council proposal.
 * The council votes to approve — prevents single-member collusion with contributors.
 * Accept-or-reject only (no term modification by committee or council).
 * @name MsgApproveAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgApprove
 */
export interface MsgApproveAmino {
  /**
   * Commons Council group policy account (executed via proposal)
   */
  authority?: string;
  /**
   * Operations Committee member who initiated the proposal
   */
  proposer?: string;
  contribution_id?: string;
}
export interface MsgApproveAminoMsg {
  type: "sparkdream/x/reveal/MsgApprove";
  value: MsgApproveAmino;
}
/**
 * @name MsgApproveResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgApproveResponse
 */
export interface MsgApproveResponse {}
export interface MsgApproveResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgApproveResponse";
  value: Uint8Array;
}
/**
 * @name MsgApproveResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgApproveResponse
 */
export interface MsgApproveResponseAmino {}
export interface MsgApproveResponseAminoMsg {
  type: "/sparkdream.reveal.v1.MsgApproveResponse";
  value: MsgApproveResponseAmino;
}
/**
 * Operations Committee member initiates rejection; routed as Commons Council proposal.
 * Contributor may re-propose after proposal_cooldown_epochs.
 * @name MsgReject
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgReject
 */
export interface MsgReject {
  /**
   * Commons Council group policy account (executed via proposal)
   */
  authority: string;
  /**
   * Operations Committee member who initiated the proposal
   */
  proposer: string;
  contributionId: bigint;
  reason: string;
}
export interface MsgRejectProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgReject";
  value: Uint8Array;
}
/**
 * Operations Committee member initiates rejection; routed as Commons Council proposal.
 * Contributor may re-propose after proposal_cooldown_epochs.
 * @name MsgRejectAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgReject
 */
export interface MsgRejectAmino {
  /**
   * Commons Council group policy account (executed via proposal)
   */
  authority?: string;
  /**
   * Operations Committee member who initiated the proposal
   */
  proposer?: string;
  contribution_id?: string;
  reason?: string;
}
export interface MsgRejectAminoMsg {
  type: "sparkdream/x/reveal/MsgReject";
  value: MsgRejectAmino;
}
/**
 * @name MsgRejectResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgRejectResponse
 */
export interface MsgRejectResponse {}
export interface MsgRejectResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgRejectResponse";
  value: Uint8Array;
}
/**
 * @name MsgRejectResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgRejectResponse
 */
export interface MsgRejectResponseAmino {}
export interface MsgRejectResponseAminoMsg {
  type: "/sparkdream.reveal.v1.MsgRejectResponse";
  value: MsgRejectResponseAmino;
}
/**
 * Any active member stakes DREAM toward a tranche to show conviction.
 * Staked DREAM is temporarily locked and returned after verification — it is NOT payment.
 * The contributor is paid via freshly minted DREAM on tranche verification.
 * Validation:
 * - Staker must NOT be the contribution's contributor (prevents self-staking loop)
 * - Amount must be >= min_stake_amount (prevents dust stake griefing)
 * - Total staked must not exceed stake_threshold (excess stakes rejected)
 * @name MsgStake
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgStake
 */
export interface MsgStake {
  staker: string;
  contributionId: bigint;
  trancheId: number;
  amount: string;
}
export interface MsgStakeProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgStake";
  value: Uint8Array;
}
/**
 * Any active member stakes DREAM toward a tranche to show conviction.
 * Staked DREAM is temporarily locked and returned after verification — it is NOT payment.
 * The contributor is paid via freshly minted DREAM on tranche verification.
 * Validation:
 * - Staker must NOT be the contribution's contributor (prevents self-staking loop)
 * - Amount must be >= min_stake_amount (prevents dust stake griefing)
 * - Total staked must not exceed stake_threshold (excess stakes rejected)
 * @name MsgStakeAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgStake
 */
export interface MsgStakeAmino {
  staker?: string;
  contribution_id?: string;
  tranche_id?: number;
  amount?: string;
}
export interface MsgStakeAminoMsg {
  type: "sparkdream/x/reveal/MsgStake";
  value: MsgStakeAmino;
}
/**
 * MsgStakeResponse returns the new stake ID.
 * @name MsgStakeResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgStakeResponse
 */
export interface MsgStakeResponse {
  stakeId: bigint;
}
export interface MsgStakeResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgStakeResponse";
  value: Uint8Array;
}
/**
 * MsgStakeResponse returns the new stake ID.
 * @name MsgStakeResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgStakeResponse
 */
export interface MsgStakeResponseAmino {
  stake_id?: string;
}
export interface MsgStakeResponseAminoMsg {
  type: "/sparkdream.reveal.v1.MsgStakeResponse";
  value: MsgStakeResponseAmino;
}
/**
 * Withdraw a stake (only allowed before verification period).
 * @name MsgWithdraw
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgWithdraw
 */
export interface MsgWithdraw {
  staker: string;
  stakeId: bigint;
}
export interface MsgWithdrawProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgWithdraw";
  value: Uint8Array;
}
/**
 * Withdraw a stake (only allowed before verification period).
 * @name MsgWithdrawAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgWithdraw
 */
export interface MsgWithdrawAmino {
  staker?: string;
  stake_id?: string;
}
export interface MsgWithdrawAminoMsg {
  type: "sparkdream/x/reveal/MsgWithdraw";
  value: MsgWithdrawAmino;
}
/**
 * @name MsgWithdrawResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgWithdrawResponse
 */
export interface MsgWithdrawResponse {}
export interface MsgWithdrawResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgWithdrawResponse";
  value: Uint8Array;
}
/**
 * @name MsgWithdrawResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgWithdrawResponse
 */
export interface MsgWithdrawResponseAmino {}
export interface MsgWithdrawResponseAminoMsg {
  type: "/sparkdream.reveal.v1.MsgWithdrawResponse";
  value: MsgWithdrawResponseAmino;
}
/**
 * Contributor reveals the code for a backed tranche.
 * @name MsgReveal
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgReveal
 */
export interface MsgReveal {
  contributor: string;
  contributionId: bigint;
  trancheId: number;
  codeUri: string;
  docsUri: string;
  commitHash: string;
}
export interface MsgRevealProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgReveal";
  value: Uint8Array;
}
/**
 * Contributor reveals the code for a backed tranche.
 * @name MsgRevealAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgReveal
 */
export interface MsgRevealAmino {
  contributor?: string;
  contribution_id?: string;
  tranche_id?: number;
  code_uri?: string;
  docs_uri?: string;
  commit_hash?: string;
}
export interface MsgRevealAminoMsg {
  type: "sparkdream/x/reveal/MsgReveal";
  value: MsgRevealAmino;
}
/**
 * @name MsgRevealResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgRevealResponse
 */
export interface MsgRevealResponse {}
export interface MsgRevealResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgRevealResponse";
  value: Uint8Array;
}
/**
 * @name MsgRevealResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgRevealResponse
 */
export interface MsgRevealResponseAmino {}
export interface MsgRevealResponseAminoMsg {
  type: "/sparkdream.reveal.v1.MsgRevealResponse";
  value: MsgRevealResponseAmino;
}
/**
 * Staker votes on whether revealed code matches promises.
 * Voter must NOT be the contribution's contributor (prevents self-verification).
 * @name MsgVerify
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgVerify
 */
export interface MsgVerify {
  voter: string;
  contributionId: bigint;
  trancheId: number;
  valueConfirmed: boolean;
  /**
   * 1-5
   */
  qualityRating: number;
  comments: string;
}
export interface MsgVerifyProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgVerify";
  value: Uint8Array;
}
/**
 * Staker votes on whether revealed code matches promises.
 * Voter must NOT be the contribution's contributor (prevents self-verification).
 * @name MsgVerifyAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgVerify
 */
export interface MsgVerifyAmino {
  voter?: string;
  contribution_id?: string;
  tranche_id?: number;
  value_confirmed?: boolean;
  /**
   * 1-5
   */
  quality_rating?: number;
  comments?: string;
}
export interface MsgVerifyAminoMsg {
  type: "sparkdream/x/reveal/MsgVerify";
  value: MsgVerifyAmino;
}
/**
 * @name MsgVerifyResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgVerifyResponse
 */
export interface MsgVerifyResponse {}
export interface MsgVerifyResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgVerifyResponse";
  value: Uint8Array;
}
/**
 * @name MsgVerifyResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgVerifyResponse
 */
export interface MsgVerifyResponseAmino {}
export interface MsgVerifyResponseAminoMsg {
  type: "/sparkdream.reveal.v1.MsgVerifyResponse";
  value: MsgVerifyResponseAmino;
}
/**
 * Contributor cancels their own contribution (only if no tranche is BACKED or beyond).
 * Operations Committee can cancel any contribution at any time.
 * @name MsgCancel
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgCancel
 */
export interface MsgCancel {
  /**
   * contributor or committee member
   */
  authority: string;
  contributionId: bigint;
  reason: string;
}
export interface MsgCancelProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgCancel";
  value: Uint8Array;
}
/**
 * Contributor cancels their own contribution (only if no tranche is BACKED or beyond).
 * Operations Committee can cancel any contribution at any time.
 * @name MsgCancelAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgCancel
 */
export interface MsgCancelAmino {
  /**
   * contributor or committee member
   */
  authority?: string;
  contribution_id?: string;
  reason?: string;
}
export interface MsgCancelAminoMsg {
  type: "sparkdream/x/reveal/MsgCancel";
  value: MsgCancelAmino;
}
/**
 * @name MsgCancelResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgCancelResponse
 */
export interface MsgCancelResponse {}
export interface MsgCancelResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgCancelResponse";
  value: Uint8Array;
}
/**
 * @name MsgCancelResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgCancelResponse
 */
export interface MsgCancelResponseAmino {}
export interface MsgCancelResponseAminoMsg {
  type: "/sparkdream.reveal.v1.MsgCancelResponse";
  value: MsgCancelResponseAmino;
}
/**
 * Dispute resolution routed as Commons Council proposal (same as approvals).
 * Prevents a single committee member from unilaterally siding with a contributor.
 * @name MsgResolveDispute
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgResolveDispute
 */
export interface MsgResolveDispute {
  /**
   * Commons Council group policy account (executed via proposal)
   */
  authority: string;
  /**
   * Operations Committee member who initiated the proposal
   */
  proposer: string;
  contributionId: bigint;
  trancheId: number;
  verdict: DisputeVerdict;
  /**
   * required for IMPROVE/REJECT; feedback for contributor
   */
  reason: string;
}
export interface MsgResolveDisputeProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgResolveDispute";
  value: Uint8Array;
}
/**
 * Dispute resolution routed as Commons Council proposal (same as approvals).
 * Prevents a single committee member from unilaterally siding with a contributor.
 * @name MsgResolveDisputeAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgResolveDispute
 */
export interface MsgResolveDisputeAmino {
  /**
   * Commons Council group policy account (executed via proposal)
   */
  authority?: string;
  /**
   * Operations Committee member who initiated the proposal
   */
  proposer?: string;
  contribution_id?: string;
  tranche_id?: number;
  verdict?: DisputeVerdict;
  /**
   * required for IMPROVE/REJECT; feedback for contributor
   */
  reason?: string;
}
export interface MsgResolveDisputeAminoMsg {
  type: "sparkdream/x/reveal/MsgResolveDispute";
  value: MsgResolveDisputeAmino;
}
/**
 * @name MsgResolveDisputeResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgResolveDisputeResponse
 */
export interface MsgResolveDisputeResponse {}
export interface MsgResolveDisputeResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.MsgResolveDisputeResponse";
  value: Uint8Array;
}
/**
 * @name MsgResolveDisputeResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgResolveDisputeResponse
 */
export interface MsgResolveDisputeResponseAmino {}
export interface MsgResolveDisputeResponseAminoMsg {
  type: "/sparkdream.reveal.v1.MsgResolveDisputeResponse";
  value: MsgResolveDisputeResponseAmino;
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
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/sparkdream.reveal.v1.MsgUpdateParams",
  aminoType: "sparkdream/x/reveal/MsgUpdateParams",
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
      type: "sparkdream/x/reveal/MsgUpdateParams",
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
      typeUrl: "/sparkdream.reveal.v1.MsgUpdateParams",
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
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/sparkdream.reveal.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/sparkdream.reveal.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPropose(): MsgPropose {
  return {
    contributor: "",
    projectName: "",
    description: "",
    totalValuation: "",
    tranches: [],
    initialLicense: "",
    finalLicense: ""
  };
}
/**
 * Any member with sufficient trust level can propose.
 * Validation:
 * - total_valuation <= max_total_valuation
 * - len(tranches) <= max_tranches
 * - Each tranche: stake_threshold <= max_tranche_valuation
 * - sum(stake_threshold) across all tranches == total_valuation
 * - Contributor has no active proposal_cooldown
 * - Bond (bond_rate * total_valuation) deducted and locked
 * @name MsgPropose
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgPropose
 */
export const MsgPropose = {
  typeUrl: "/sparkdream.reveal.v1.MsgPropose",
  aminoType: "sparkdream/x/reveal/MsgPropose",
  encode(message: MsgPropose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contributor !== "") {
      writer.uint32(10).string(message.contributor);
    }
    if (message.projectName !== "") {
      writer.uint32(18).string(message.projectName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.totalValuation !== "") {
      writer.uint32(34).string(message.totalValuation);
    }
    for (const v of message.tranches) {
      TrancheDef.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.initialLicense !== "") {
      writer.uint32(50).string(message.initialLicense);
    }
    if (message.finalLicense !== "") {
      writer.uint32(58).string(message.finalLicense);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPropose {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPropose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contributor = reader.string();
          break;
        case 2:
          message.projectName = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.totalValuation = reader.string();
          break;
        case 5:
          message.tranches.push(TrancheDef.decode(reader, reader.uint32()));
          break;
        case 6:
          message.initialLicense = reader.string();
          break;
        case 7:
          message.finalLicense = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgPropose>): MsgPropose {
    const message = createBaseMsgPropose();
    message.contributor = object.contributor ?? "";
    message.projectName = object.projectName ?? "";
    message.description = object.description ?? "";
    message.totalValuation = object.totalValuation ?? "";
    message.tranches = object.tranches?.map(e => TrancheDef.fromPartial(e)) || [];
    message.initialLicense = object.initialLicense ?? "";
    message.finalLicense = object.finalLicense ?? "";
    return message;
  },
  fromAmino(object: MsgProposeAmino): MsgPropose {
    const message = createBaseMsgPropose();
    if (object.contributor !== undefined && object.contributor !== null) {
      message.contributor = object.contributor;
    }
    if (object.project_name !== undefined && object.project_name !== null) {
      message.projectName = object.project_name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.total_valuation !== undefined && object.total_valuation !== null) {
      message.totalValuation = object.total_valuation;
    }
    message.tranches = object.tranches?.map(e => TrancheDef.fromAmino(e)) || [];
    if (object.initial_license !== undefined && object.initial_license !== null) {
      message.initialLicense = object.initial_license;
    }
    if (object.final_license !== undefined && object.final_license !== null) {
      message.finalLicense = object.final_license;
    }
    return message;
  },
  toAmino(message: MsgPropose): MsgProposeAmino {
    const obj: any = {};
    obj.contributor = message.contributor === "" ? undefined : message.contributor;
    obj.project_name = message.projectName === "" ? undefined : message.projectName;
    obj.description = message.description === "" ? undefined : message.description;
    obj.total_valuation = message.totalValuation === "" ? undefined : message.totalValuation;
    if (message.tranches) {
      obj.tranches = message.tranches.map(e => e ? TrancheDef.toAmino(e) : undefined);
    } else {
      obj.tranches = message.tranches;
    }
    obj.initial_license = message.initialLicense === "" ? undefined : message.initialLicense;
    obj.final_license = message.finalLicense === "" ? undefined : message.finalLicense;
    return obj;
  },
  fromAminoMsg(object: MsgProposeAminoMsg): MsgPropose {
    return MsgPropose.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPropose): MsgProposeAminoMsg {
    return {
      type: "sparkdream/x/reveal/MsgPropose",
      value: MsgPropose.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgProposeProtoMsg): MsgPropose {
    return MsgPropose.decode(message.value);
  },
  toProto(message: MsgPropose): Uint8Array {
    return MsgPropose.encode(message).finish();
  },
  toProtoMsg(message: MsgPropose): MsgProposeProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgPropose",
      value: MsgPropose.encode(message).finish()
    };
  }
};
function createBaseMsgProposeResponse(): MsgProposeResponse {
  return {
    contributionId: BigInt(0)
  };
}
/**
 * MsgProposeResponse returns the new contribution ID.
 * @name MsgProposeResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgProposeResponse
 */
export const MsgProposeResponse = {
  typeUrl: "/sparkdream.reveal.v1.MsgProposeResponse",
  encode(message: MsgProposeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contributionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contributionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgProposeResponse>): MsgProposeResponse {
    const message = createBaseMsgProposeResponse();
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgProposeResponseAmino): MsgProposeResponse {
    const message = createBaseMsgProposeResponse();
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    return message;
  },
  toAmino(message: MsgProposeResponse): MsgProposeResponseAmino {
    const obj: any = {};
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgProposeResponseAminoMsg): MsgProposeResponse {
    return MsgProposeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeResponseProtoMsg): MsgProposeResponse {
    return MsgProposeResponse.decode(message.value);
  },
  toProto(message: MsgProposeResponse): Uint8Array {
    return MsgProposeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeResponse): MsgProposeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgProposeResponse",
      value: MsgProposeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgApprove(): MsgApprove {
  return {
    authority: "",
    proposer: "",
    contributionId: BigInt(0)
  };
}
/**
 * Operations Committee member initiates approval; routed as Commons Council proposal.
 * The council votes to approve — prevents single-member collusion with contributors.
 * Accept-or-reject only (no term modification by committee or council).
 * @name MsgApprove
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgApprove
 */
export const MsgApprove = {
  typeUrl: "/sparkdream.reveal.v1.MsgApprove",
  aminoType: "sparkdream/x/reveal/MsgApprove",
  encode(message: MsgApprove, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.contributionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApprove {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApprove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.proposer = reader.string();
          break;
        case 3:
          message.contributionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgApprove>): MsgApprove {
    const message = createBaseMsgApprove();
    message.authority = object.authority ?? "";
    message.proposer = object.proposer ?? "";
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgApproveAmino): MsgApprove {
    const message = createBaseMsgApprove();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    return message;
  },
  toAmino(message: MsgApprove): MsgApproveAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgApproveAminoMsg): MsgApprove {
    return MsgApprove.fromAmino(object.value);
  },
  toAminoMsg(message: MsgApprove): MsgApproveAminoMsg {
    return {
      type: "sparkdream/x/reveal/MsgApprove",
      value: MsgApprove.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgApproveProtoMsg): MsgApprove {
    return MsgApprove.decode(message.value);
  },
  toProto(message: MsgApprove): Uint8Array {
    return MsgApprove.encode(message).finish();
  },
  toProtoMsg(message: MsgApprove): MsgApproveProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgApprove",
      value: MsgApprove.encode(message).finish()
    };
  }
};
function createBaseMsgApproveResponse(): MsgApproveResponse {
  return {};
}
/**
 * @name MsgApproveResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgApproveResponse
 */
export const MsgApproveResponse = {
  typeUrl: "/sparkdream.reveal.v1.MsgApproveResponse",
  encode(_: MsgApproveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgApproveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveResponse();
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
  fromPartial(_: DeepPartial<MsgApproveResponse>): MsgApproveResponse {
    const message = createBaseMsgApproveResponse();
    return message;
  },
  fromAmino(_: MsgApproveResponseAmino): MsgApproveResponse {
    const message = createBaseMsgApproveResponse();
    return message;
  },
  toAmino(_: MsgApproveResponse): MsgApproveResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgApproveResponseAminoMsg): MsgApproveResponse {
    return MsgApproveResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgApproveResponseProtoMsg): MsgApproveResponse {
    return MsgApproveResponse.decode(message.value);
  },
  toProto(message: MsgApproveResponse): Uint8Array {
    return MsgApproveResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgApproveResponse): MsgApproveResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgApproveResponse",
      value: MsgApproveResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReject(): MsgReject {
  return {
    authority: "",
    proposer: "",
    contributionId: BigInt(0),
    reason: ""
  };
}
/**
 * Operations Committee member initiates rejection; routed as Commons Council proposal.
 * Contributor may re-propose after proposal_cooldown_epochs.
 * @name MsgReject
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgReject
 */
export const MsgReject = {
  typeUrl: "/sparkdream.reveal.v1.MsgReject",
  aminoType: "sparkdream/x/reveal/MsgReject",
  encode(message: MsgReject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.contributionId);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReject {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.proposer = reader.string();
          break;
        case 3:
          message.contributionId = reader.uint64();
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
  fromPartial(object: DeepPartial<MsgReject>): MsgReject {
    const message = createBaseMsgReject();
    message.authority = object.authority ?? "";
    message.proposer = object.proposer ?? "";
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgRejectAmino): MsgReject {
    const message = createBaseMsgReject();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgReject): MsgRejectAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgRejectAminoMsg): MsgReject {
    return MsgReject.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReject): MsgRejectAminoMsg {
    return {
      type: "sparkdream/x/reveal/MsgReject",
      value: MsgReject.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRejectProtoMsg): MsgReject {
    return MsgReject.decode(message.value);
  },
  toProto(message: MsgReject): Uint8Array {
    return MsgReject.encode(message).finish();
  },
  toProtoMsg(message: MsgReject): MsgRejectProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgReject",
      value: MsgReject.encode(message).finish()
    };
  }
};
function createBaseMsgRejectResponse(): MsgRejectResponse {
  return {};
}
/**
 * @name MsgRejectResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgRejectResponse
 */
export const MsgRejectResponse = {
  typeUrl: "/sparkdream.reveal.v1.MsgRejectResponse",
  encode(_: MsgRejectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRejectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectResponse();
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
  fromPartial(_: DeepPartial<MsgRejectResponse>): MsgRejectResponse {
    const message = createBaseMsgRejectResponse();
    return message;
  },
  fromAmino(_: MsgRejectResponseAmino): MsgRejectResponse {
    const message = createBaseMsgRejectResponse();
    return message;
  },
  toAmino(_: MsgRejectResponse): MsgRejectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRejectResponseAminoMsg): MsgRejectResponse {
    return MsgRejectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRejectResponseProtoMsg): MsgRejectResponse {
    return MsgRejectResponse.decode(message.value);
  },
  toProto(message: MsgRejectResponse): Uint8Array {
    return MsgRejectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRejectResponse): MsgRejectResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgRejectResponse",
      value: MsgRejectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgStake(): MsgStake {
  return {
    staker: "",
    contributionId: BigInt(0),
    trancheId: 0,
    amount: ""
  };
}
/**
 * Any active member stakes DREAM toward a tranche to show conviction.
 * Staked DREAM is temporarily locked and returned after verification — it is NOT payment.
 * The contributor is paid via freshly minted DREAM on tranche verification.
 * Validation:
 * - Staker must NOT be the contribution's contributor (prevents self-staking loop)
 * - Amount must be >= min_stake_amount (prevents dust stake griefing)
 * - Total staked must not exceed stake_threshold (excess stakes rejected)
 * @name MsgStake
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgStake
 */
export const MsgStake = {
  typeUrl: "/sparkdream.reveal.v1.MsgStake",
  aminoType: "sparkdream/x/reveal/MsgStake",
  encode(message: MsgStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.contributionId);
    }
    if (message.trancheId !== 0) {
      writer.uint32(24).uint32(message.trancheId);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.contributionId = reader.uint64();
          break;
        case 3:
          message.trancheId = reader.uint32();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgStake>): MsgStake {
    const message = createBaseMsgStake();
    message.staker = object.staker ?? "";
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    message.trancheId = object.trancheId ?? 0;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgStakeAmino): MsgStake {
    const message = createBaseMsgStake();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    if (object.tranche_id !== undefined && object.tranche_id !== null) {
      message.trancheId = object.tranche_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgStake): MsgStakeAmino {
    const obj: any = {};
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    obj.tranche_id = message.trancheId === 0 ? undefined : message.trancheId;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgStakeAminoMsg): MsgStake {
    return MsgStake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStake): MsgStakeAminoMsg {
    return {
      type: "sparkdream/x/reveal/MsgStake",
      value: MsgStake.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStakeProtoMsg): MsgStake {
    return MsgStake.decode(message.value);
  },
  toProto(message: MsgStake): Uint8Array {
    return MsgStake.encode(message).finish();
  },
  toProtoMsg(message: MsgStake): MsgStakeProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgStake",
      value: MsgStake.encode(message).finish()
    };
  }
};
function createBaseMsgStakeResponse(): MsgStakeResponse {
  return {
    stakeId: BigInt(0)
  };
}
/**
 * MsgStakeResponse returns the new stake ID.
 * @name MsgStakeResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgStakeResponse
 */
export const MsgStakeResponse = {
  typeUrl: "/sparkdream.reveal.v1.MsgStakeResponse",
  encode(message: MsgStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.stakeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgStakeResponse>): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    message.stakeId = object.stakeId !== undefined && object.stakeId !== null ? BigInt(object.stakeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgStakeResponseAmino): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    if (object.stake_id !== undefined && object.stake_id !== null) {
      message.stakeId = BigInt(object.stake_id);
    }
    return message;
  },
  toAmino(message: MsgStakeResponse): MsgStakeResponseAmino {
    const obj: any = {};
    obj.stake_id = message.stakeId !== BigInt(0) ? message.stakeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStakeResponseAminoMsg): MsgStakeResponse {
    return MsgStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeResponseProtoMsg): MsgStakeResponse {
    return MsgStakeResponse.decode(message.value);
  },
  toProto(message: MsgStakeResponse): Uint8Array {
    return MsgStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeResponse): MsgStakeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgStakeResponse",
      value: MsgStakeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    staker: "",
    stakeId: BigInt(0)
  };
}
/**
 * Withdraw a stake (only allowed before verification period).
 * @name MsgWithdraw
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgWithdraw
 */
export const MsgWithdraw = {
  typeUrl: "/sparkdream.reveal.v1.MsgWithdraw",
  aminoType: "sparkdream/x/reveal/MsgWithdraw",
  encode(message: MsgWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.stakeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.stakeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.stakeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.staker = object.staker ?? "";
    message.stakeId = object.stakeId !== undefined && object.stakeId !== null ? BigInt(object.stakeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgWithdrawAmino): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.stake_id !== undefined && object.stake_id !== null) {
      message.stakeId = BigInt(object.stake_id);
    }
    return message;
  },
  toAmino(message: MsgWithdraw): MsgWithdrawAmino {
    const obj: any = {};
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.stake_id = message.stakeId !== BigInt(0) ? message.stakeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw {
    return MsgWithdraw.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdraw): MsgWithdrawAminoMsg {
    return {
      type: "sparkdream/x/reveal/MsgWithdraw",
      value: MsgWithdraw.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw {
    return MsgWithdraw.decode(message.value);
  },
  toProto(message: MsgWithdraw): Uint8Array {
    return MsgWithdraw.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgWithdraw",
      value: MsgWithdraw.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
/**
 * @name MsgWithdrawResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgWithdrawResponse
 */
export const MsgWithdrawResponse = {
  typeUrl: "/sparkdream.reveal.v1.MsgWithdrawResponse",
  encode(_: MsgWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();
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
  fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawResponseAmino): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
  toAmino(_: MsgWithdrawResponse): MsgWithdrawResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse {
    return MsgWithdrawResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawResponse): Uint8Array {
    return MsgWithdrawResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgWithdrawResponse",
      value: MsgWithdrawResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReveal(): MsgReveal {
  return {
    contributor: "",
    contributionId: BigInt(0),
    trancheId: 0,
    codeUri: "",
    docsUri: "",
    commitHash: ""
  };
}
/**
 * Contributor reveals the code for a backed tranche.
 * @name MsgReveal
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgReveal
 */
export const MsgReveal = {
  typeUrl: "/sparkdream.reveal.v1.MsgReveal",
  aminoType: "sparkdream/x/reveal/MsgReveal",
  encode(message: MsgReveal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contributor !== "") {
      writer.uint32(10).string(message.contributor);
    }
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.contributionId);
    }
    if (message.trancheId !== 0) {
      writer.uint32(24).uint32(message.trancheId);
    }
    if (message.codeUri !== "") {
      writer.uint32(34).string(message.codeUri);
    }
    if (message.docsUri !== "") {
      writer.uint32(42).string(message.docsUri);
    }
    if (message.commitHash !== "") {
      writer.uint32(50).string(message.commitHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReveal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReveal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contributor = reader.string();
          break;
        case 2:
          message.contributionId = reader.uint64();
          break;
        case 3:
          message.trancheId = reader.uint32();
          break;
        case 4:
          message.codeUri = reader.string();
          break;
        case 5:
          message.docsUri = reader.string();
          break;
        case 6:
          message.commitHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgReveal>): MsgReveal {
    const message = createBaseMsgReveal();
    message.contributor = object.contributor ?? "";
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    message.trancheId = object.trancheId ?? 0;
    message.codeUri = object.codeUri ?? "";
    message.docsUri = object.docsUri ?? "";
    message.commitHash = object.commitHash ?? "";
    return message;
  },
  fromAmino(object: MsgRevealAmino): MsgReveal {
    const message = createBaseMsgReveal();
    if (object.contributor !== undefined && object.contributor !== null) {
      message.contributor = object.contributor;
    }
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    if (object.tranche_id !== undefined && object.tranche_id !== null) {
      message.trancheId = object.tranche_id;
    }
    if (object.code_uri !== undefined && object.code_uri !== null) {
      message.codeUri = object.code_uri;
    }
    if (object.docs_uri !== undefined && object.docs_uri !== null) {
      message.docsUri = object.docs_uri;
    }
    if (object.commit_hash !== undefined && object.commit_hash !== null) {
      message.commitHash = object.commit_hash;
    }
    return message;
  },
  toAmino(message: MsgReveal): MsgRevealAmino {
    const obj: any = {};
    obj.contributor = message.contributor === "" ? undefined : message.contributor;
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    obj.tranche_id = message.trancheId === 0 ? undefined : message.trancheId;
    obj.code_uri = message.codeUri === "" ? undefined : message.codeUri;
    obj.docs_uri = message.docsUri === "" ? undefined : message.docsUri;
    obj.commit_hash = message.commitHash === "" ? undefined : message.commitHash;
    return obj;
  },
  fromAminoMsg(object: MsgRevealAminoMsg): MsgReveal {
    return MsgReveal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReveal): MsgRevealAminoMsg {
    return {
      type: "sparkdream/x/reveal/MsgReveal",
      value: MsgReveal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevealProtoMsg): MsgReveal {
    return MsgReveal.decode(message.value);
  },
  toProto(message: MsgReveal): Uint8Array {
    return MsgReveal.encode(message).finish();
  },
  toProtoMsg(message: MsgReveal): MsgRevealProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgReveal",
      value: MsgReveal.encode(message).finish()
    };
  }
};
function createBaseMsgRevealResponse(): MsgRevealResponse {
  return {};
}
/**
 * @name MsgRevealResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgRevealResponse
 */
export const MsgRevealResponse = {
  typeUrl: "/sparkdream.reveal.v1.MsgRevealResponse",
  encode(_: MsgRevealResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevealResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevealResponse();
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
  fromPartial(_: DeepPartial<MsgRevealResponse>): MsgRevealResponse {
    const message = createBaseMsgRevealResponse();
    return message;
  },
  fromAmino(_: MsgRevealResponseAmino): MsgRevealResponse {
    const message = createBaseMsgRevealResponse();
    return message;
  },
  toAmino(_: MsgRevealResponse): MsgRevealResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevealResponseAminoMsg): MsgRevealResponse {
    return MsgRevealResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevealResponseProtoMsg): MsgRevealResponse {
    return MsgRevealResponse.decode(message.value);
  },
  toProto(message: MsgRevealResponse): Uint8Array {
    return MsgRevealResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevealResponse): MsgRevealResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgRevealResponse",
      value: MsgRevealResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVerify(): MsgVerify {
  return {
    voter: "",
    contributionId: BigInt(0),
    trancheId: 0,
    valueConfirmed: false,
    qualityRating: 0,
    comments: ""
  };
}
/**
 * Staker votes on whether revealed code matches promises.
 * Voter must NOT be the contribution's contributor (prevents self-verification).
 * @name MsgVerify
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgVerify
 */
export const MsgVerify = {
  typeUrl: "/sparkdream.reveal.v1.MsgVerify",
  aminoType: "sparkdream/x/reveal/MsgVerify",
  encode(message: MsgVerify, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.contributionId);
    }
    if (message.trancheId !== 0) {
      writer.uint32(24).uint32(message.trancheId);
    }
    if (message.valueConfirmed === true) {
      writer.uint32(32).bool(message.valueConfirmed);
    }
    if (message.qualityRating !== 0) {
      writer.uint32(40).uint32(message.qualityRating);
    }
    if (message.comments !== "") {
      writer.uint32(50).string(message.comments);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVerify {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.contributionId = reader.uint64();
          break;
        case 3:
          message.trancheId = reader.uint32();
          break;
        case 4:
          message.valueConfirmed = reader.bool();
          break;
        case 5:
          message.qualityRating = reader.uint32();
          break;
        case 6:
          message.comments = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgVerify>): MsgVerify {
    const message = createBaseMsgVerify();
    message.voter = object.voter ?? "";
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    message.trancheId = object.trancheId ?? 0;
    message.valueConfirmed = object.valueConfirmed ?? false;
    message.qualityRating = object.qualityRating ?? 0;
    message.comments = object.comments ?? "";
    return message;
  },
  fromAmino(object: MsgVerifyAmino): MsgVerify {
    const message = createBaseMsgVerify();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    if (object.tranche_id !== undefined && object.tranche_id !== null) {
      message.trancheId = object.tranche_id;
    }
    if (object.value_confirmed !== undefined && object.value_confirmed !== null) {
      message.valueConfirmed = object.value_confirmed;
    }
    if (object.quality_rating !== undefined && object.quality_rating !== null) {
      message.qualityRating = object.quality_rating;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    }
    return message;
  },
  toAmino(message: MsgVerify): MsgVerifyAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    obj.tranche_id = message.trancheId === 0 ? undefined : message.trancheId;
    obj.value_confirmed = message.valueConfirmed === false ? undefined : message.valueConfirmed;
    obj.quality_rating = message.qualityRating === 0 ? undefined : message.qualityRating;
    obj.comments = message.comments === "" ? undefined : message.comments;
    return obj;
  },
  fromAminoMsg(object: MsgVerifyAminoMsg): MsgVerify {
    return MsgVerify.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVerify): MsgVerifyAminoMsg {
    return {
      type: "sparkdream/x/reveal/MsgVerify",
      value: MsgVerify.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVerifyProtoMsg): MsgVerify {
    return MsgVerify.decode(message.value);
  },
  toProto(message: MsgVerify): Uint8Array {
    return MsgVerify.encode(message).finish();
  },
  toProtoMsg(message: MsgVerify): MsgVerifyProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgVerify",
      value: MsgVerify.encode(message).finish()
    };
  }
};
function createBaseMsgVerifyResponse(): MsgVerifyResponse {
  return {};
}
/**
 * @name MsgVerifyResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgVerifyResponse
 */
export const MsgVerifyResponse = {
  typeUrl: "/sparkdream.reveal.v1.MsgVerifyResponse",
  encode(_: MsgVerifyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyResponse();
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
  fromPartial(_: DeepPartial<MsgVerifyResponse>): MsgVerifyResponse {
    const message = createBaseMsgVerifyResponse();
    return message;
  },
  fromAmino(_: MsgVerifyResponseAmino): MsgVerifyResponse {
    const message = createBaseMsgVerifyResponse();
    return message;
  },
  toAmino(_: MsgVerifyResponse): MsgVerifyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVerifyResponseAminoMsg): MsgVerifyResponse {
    return MsgVerifyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVerifyResponseProtoMsg): MsgVerifyResponse {
    return MsgVerifyResponse.decode(message.value);
  },
  toProto(message: MsgVerifyResponse): Uint8Array {
    return MsgVerifyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVerifyResponse): MsgVerifyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgVerifyResponse",
      value: MsgVerifyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancel(): MsgCancel {
  return {
    authority: "",
    contributionId: BigInt(0),
    reason: ""
  };
}
/**
 * Contributor cancels their own contribution (only if no tranche is BACKED or beyond).
 * Operations Committee can cancel any contribution at any time.
 * @name MsgCancel
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgCancel
 */
export const MsgCancel = {
  typeUrl: "/sparkdream.reveal.v1.MsgCancel",
  aminoType: "sparkdream/x/reveal/MsgCancel",
  encode(message: MsgCancel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(16).uint64(message.contributionId);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.contributionId = reader.uint64();
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
  fromPartial(object: DeepPartial<MsgCancel>): MsgCancel {
    const message = createBaseMsgCancel();
    message.authority = object.authority ?? "";
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgCancelAmino): MsgCancel {
    const message = createBaseMsgCancel();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgCancel): MsgCancelAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgCancelAminoMsg): MsgCancel {
    return MsgCancel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancel): MsgCancelAminoMsg {
    return {
      type: "sparkdream/x/reveal/MsgCancel",
      value: MsgCancel.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelProtoMsg): MsgCancel {
    return MsgCancel.decode(message.value);
  },
  toProto(message: MsgCancel): Uint8Array {
    return MsgCancel.encode(message).finish();
  },
  toProtoMsg(message: MsgCancel): MsgCancelProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgCancel",
      value: MsgCancel.encode(message).finish()
    };
  }
};
function createBaseMsgCancelResponse(): MsgCancelResponse {
  return {};
}
/**
 * @name MsgCancelResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgCancelResponse
 */
export const MsgCancelResponse = {
  typeUrl: "/sparkdream.reveal.v1.MsgCancelResponse",
  encode(_: MsgCancelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelResponse();
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
  fromPartial(_: DeepPartial<MsgCancelResponse>): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  },
  fromAmino(_: MsgCancelResponseAmino): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  },
  toAmino(_: MsgCancelResponse): MsgCancelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelResponseAminoMsg): MsgCancelResponse {
    return MsgCancelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelResponseProtoMsg): MsgCancelResponse {
    return MsgCancelResponse.decode(message.value);
  },
  toProto(message: MsgCancelResponse): Uint8Array {
    return MsgCancelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelResponse): MsgCancelResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgCancelResponse",
      value: MsgCancelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgResolveDispute(): MsgResolveDispute {
  return {
    authority: "",
    proposer: "",
    contributionId: BigInt(0),
    trancheId: 0,
    verdict: 0,
    reason: ""
  };
}
/**
 * Dispute resolution routed as Commons Council proposal (same as approvals).
 * Prevents a single committee member from unilaterally siding with a contributor.
 * @name MsgResolveDispute
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgResolveDispute
 */
export const MsgResolveDispute = {
  typeUrl: "/sparkdream.reveal.v1.MsgResolveDispute",
  aminoType: "sparkdream/x/reveal/MsgResolveDispute",
  encode(message: MsgResolveDispute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.contributionId);
    }
    if (message.trancheId !== 0) {
      writer.uint32(32).uint32(message.trancheId);
    }
    if (message.verdict !== 0) {
      writer.uint32(40).int32(message.verdict);
    }
    if (message.reason !== "") {
      writer.uint32(50).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveDispute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveDispute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.proposer = reader.string();
          break;
        case 3:
          message.contributionId = reader.uint64();
          break;
        case 4:
          message.trancheId = reader.uint32();
          break;
        case 5:
          message.verdict = reader.int32() as any;
          break;
        case 6:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgResolveDispute>): MsgResolveDispute {
    const message = createBaseMsgResolveDispute();
    message.authority = object.authority ?? "";
    message.proposer = object.proposer ?? "";
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    message.trancheId = object.trancheId ?? 0;
    message.verdict = object.verdict ?? 0;
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: MsgResolveDisputeAmino): MsgResolveDispute {
    const message = createBaseMsgResolveDispute();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    if (object.tranche_id !== undefined && object.tranche_id !== null) {
      message.trancheId = object.tranche_id;
    }
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = object.verdict;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: MsgResolveDispute): MsgResolveDisputeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    obj.tranche_id = message.trancheId === 0 ? undefined : message.trancheId;
    obj.verdict = message.verdict === 0 ? undefined : message.verdict;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: MsgResolveDisputeAminoMsg): MsgResolveDispute {
    return MsgResolveDispute.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResolveDispute): MsgResolveDisputeAminoMsg {
    return {
      type: "sparkdream/x/reveal/MsgResolveDispute",
      value: MsgResolveDispute.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgResolveDisputeProtoMsg): MsgResolveDispute {
    return MsgResolveDispute.decode(message.value);
  },
  toProto(message: MsgResolveDispute): Uint8Array {
    return MsgResolveDispute.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveDispute): MsgResolveDisputeProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgResolveDispute",
      value: MsgResolveDispute.encode(message).finish()
    };
  }
};
function createBaseMsgResolveDisputeResponse(): MsgResolveDisputeResponse {
  return {};
}
/**
 * @name MsgResolveDisputeResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.MsgResolveDisputeResponse
 */
export const MsgResolveDisputeResponse = {
  typeUrl: "/sparkdream.reveal.v1.MsgResolveDisputeResponse",
  encode(_: MsgResolveDisputeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResolveDisputeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResolveDisputeResponse();
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
  fromPartial(_: DeepPartial<MsgResolveDisputeResponse>): MsgResolveDisputeResponse {
    const message = createBaseMsgResolveDisputeResponse();
    return message;
  },
  fromAmino(_: MsgResolveDisputeResponseAmino): MsgResolveDisputeResponse {
    const message = createBaseMsgResolveDisputeResponse();
    return message;
  },
  toAmino(_: MsgResolveDisputeResponse): MsgResolveDisputeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResolveDisputeResponseAminoMsg): MsgResolveDisputeResponse {
    return MsgResolveDisputeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgResolveDisputeResponseProtoMsg): MsgResolveDisputeResponse {
    return MsgResolveDisputeResponse.decode(message.value);
  },
  toProto(message: MsgResolveDisputeResponse): Uint8Array {
    return MsgResolveDisputeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgResolveDisputeResponse): MsgResolveDisputeResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.MsgResolveDisputeResponse",
      value: MsgResolveDisputeResponse.encode(message).finish()
    };
  }
};