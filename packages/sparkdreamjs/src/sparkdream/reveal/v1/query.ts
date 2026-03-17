//@ts-nocheck
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContributionStatus, Contribution, ContributionAmino, RevealTranche, RevealTrancheAmino, RevealStake, RevealStakeAmino, VerificationVote, VerificationVoteAmino } from "./types";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/sparkdream.reveal.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/sparkdream.reveal.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * @name QueryContributionRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionRequest
 */
export interface QueryContributionRequest {
  contributionId: bigint;
}
export interface QueryContributionRequestProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionRequest";
  value: Uint8Array;
}
/**
 * @name QueryContributionRequestAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionRequest
 */
export interface QueryContributionRequestAmino {
  contribution_id?: string;
}
export interface QueryContributionRequestAminoMsg {
  type: "/sparkdream.reveal.v1.QueryContributionRequest";
  value: QueryContributionRequestAmino;
}
/**
 * @name QueryContributionResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionResponse
 */
export interface QueryContributionResponse {
  contribution: Contribution;
}
export interface QueryContributionResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionResponse";
  value: Uint8Array;
}
/**
 * @name QueryContributionResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionResponse
 */
export interface QueryContributionResponseAmino {
  contribution?: ContributionAmino;
}
export interface QueryContributionResponseAminoMsg {
  type: "/sparkdream.reveal.v1.QueryContributionResponse";
  value: QueryContributionResponseAmino;
}
/**
 * @name QueryContributionsRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsRequest
 */
export interface QueryContributionsRequest {
  pagination?: PageRequest;
}
export interface QueryContributionsRequestProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionsRequest";
  value: Uint8Array;
}
/**
 * @name QueryContributionsRequestAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsRequest
 */
export interface QueryContributionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryContributionsRequestAminoMsg {
  type: "/sparkdream.reveal.v1.QueryContributionsRequest";
  value: QueryContributionsRequestAmino;
}
/**
 * @name QueryContributionsResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsResponse
 */
export interface QueryContributionsResponse {
  contributions: Contribution[];
  pagination?: PageResponse;
}
export interface QueryContributionsResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionsResponse";
  value: Uint8Array;
}
/**
 * @name QueryContributionsResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsResponse
 */
export interface QueryContributionsResponseAmino {
  contributions?: ContributionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryContributionsResponseAminoMsg {
  type: "/sparkdream.reveal.v1.QueryContributionsResponse";
  value: QueryContributionsResponseAmino;
}
/**
 * @name QueryContributionsByContributorRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsByContributorRequest
 */
export interface QueryContributionsByContributorRequest {
  contributor: string;
  pagination?: PageRequest;
}
export interface QueryContributionsByContributorRequestProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionsByContributorRequest";
  value: Uint8Array;
}
/**
 * @name QueryContributionsByContributorRequestAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsByContributorRequest
 */
export interface QueryContributionsByContributorRequestAmino {
  contributor?: string;
  pagination?: PageRequestAmino;
}
export interface QueryContributionsByContributorRequestAminoMsg {
  type: "/sparkdream.reveal.v1.QueryContributionsByContributorRequest";
  value: QueryContributionsByContributorRequestAmino;
}
/**
 * @name QueryContributionsByContributorResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsByContributorResponse
 */
export interface QueryContributionsByContributorResponse {
  contributions: Contribution[];
  pagination?: PageResponse;
}
export interface QueryContributionsByContributorResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionsByContributorResponse";
  value: Uint8Array;
}
/**
 * @name QueryContributionsByContributorResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsByContributorResponse
 */
export interface QueryContributionsByContributorResponseAmino {
  contributions?: ContributionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryContributionsByContributorResponseAminoMsg {
  type: "/sparkdream.reveal.v1.QueryContributionsByContributorResponse";
  value: QueryContributionsByContributorResponseAmino;
}
/**
 * @name QueryContributionsByStatusRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsByStatusRequest
 */
export interface QueryContributionsByStatusRequest {
  status: ContributionStatus;
  pagination?: PageRequest;
}
export interface QueryContributionsByStatusRequestProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionsByStatusRequest";
  value: Uint8Array;
}
/**
 * @name QueryContributionsByStatusRequestAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsByStatusRequest
 */
export interface QueryContributionsByStatusRequestAmino {
  status?: ContributionStatus;
  pagination?: PageRequestAmino;
}
export interface QueryContributionsByStatusRequestAminoMsg {
  type: "/sparkdream.reveal.v1.QueryContributionsByStatusRequest";
  value: QueryContributionsByStatusRequestAmino;
}
/**
 * @name QueryContributionsByStatusResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsByStatusResponse
 */
export interface QueryContributionsByStatusResponse {
  contributions: Contribution[];
  pagination?: PageResponse;
}
export interface QueryContributionsByStatusResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionsByStatusResponse";
  value: Uint8Array;
}
/**
 * @name QueryContributionsByStatusResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsByStatusResponse
 */
export interface QueryContributionsByStatusResponseAmino {
  contributions?: ContributionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryContributionsByStatusResponseAminoMsg {
  type: "/sparkdream.reveal.v1.QueryContributionsByStatusResponse";
  value: QueryContributionsByStatusResponseAmino;
}
/**
 * @name QueryTrancheRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheRequest
 */
export interface QueryTrancheRequest {
  contributionId: bigint;
  trancheId: number;
}
export interface QueryTrancheRequestProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryTrancheRequest";
  value: Uint8Array;
}
/**
 * @name QueryTrancheRequestAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheRequest
 */
export interface QueryTrancheRequestAmino {
  contribution_id?: string;
  tranche_id?: number;
}
export interface QueryTrancheRequestAminoMsg {
  type: "/sparkdream.reveal.v1.QueryTrancheRequest";
  value: QueryTrancheRequestAmino;
}
/**
 * @name QueryTrancheResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheResponse
 */
export interface QueryTrancheResponse {
  tranche: RevealTranche;
}
export interface QueryTrancheResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryTrancheResponse";
  value: Uint8Array;
}
/**
 * @name QueryTrancheResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheResponse
 */
export interface QueryTrancheResponseAmino {
  tranche?: RevealTrancheAmino;
}
export interface QueryTrancheResponseAminoMsg {
  type: "/sparkdream.reveal.v1.QueryTrancheResponse";
  value: QueryTrancheResponseAmino;
}
/**
 * @name QueryTrancheTallyRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheTallyRequest
 */
export interface QueryTrancheTallyRequest {
  contributionId: bigint;
  trancheId: number;
}
export interface QueryTrancheTallyRequestProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryTrancheTallyRequest";
  value: Uint8Array;
}
/**
 * @name QueryTrancheTallyRequestAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheTallyRequest
 */
export interface QueryTrancheTallyRequestAmino {
  contribution_id?: string;
  tranche_id?: number;
}
export interface QueryTrancheTallyRequestAminoMsg {
  type: "/sparkdream.reveal.v1.QueryTrancheTallyRequest";
  value: QueryTrancheTallyRequestAmino;
}
/**
 * @name QueryTrancheTallyResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheTallyResponse
 */
export interface QueryTrancheTallyResponse {
  yesWeight: string;
  noWeight: string;
  voteCount: number;
}
export interface QueryTrancheTallyResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryTrancheTallyResponse";
  value: Uint8Array;
}
/**
 * @name QueryTrancheTallyResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheTallyResponse
 */
export interface QueryTrancheTallyResponseAmino {
  yes_weight?: string;
  no_weight?: string;
  vote_count?: number;
}
export interface QueryTrancheTallyResponseAminoMsg {
  type: "/sparkdream.reveal.v1.QueryTrancheTallyResponse";
  value: QueryTrancheTallyResponseAmino;
}
/**
 * @name QueryTrancheStakesRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheStakesRequest
 */
export interface QueryTrancheStakesRequest {
  contributionId: bigint;
  trancheId: number;
  pagination?: PageRequest;
}
export interface QueryTrancheStakesRequestProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryTrancheStakesRequest";
  value: Uint8Array;
}
/**
 * @name QueryTrancheStakesRequestAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheStakesRequest
 */
export interface QueryTrancheStakesRequestAmino {
  contribution_id?: string;
  tranche_id?: number;
  pagination?: PageRequestAmino;
}
export interface QueryTrancheStakesRequestAminoMsg {
  type: "/sparkdream.reveal.v1.QueryTrancheStakesRequest";
  value: QueryTrancheStakesRequestAmino;
}
/**
 * @name QueryTrancheStakesResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheStakesResponse
 */
export interface QueryTrancheStakesResponse {
  stakes: RevealStake[];
  pagination?: PageResponse;
}
export interface QueryTrancheStakesResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryTrancheStakesResponse";
  value: Uint8Array;
}
/**
 * @name QueryTrancheStakesResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheStakesResponse
 */
export interface QueryTrancheStakesResponseAmino {
  stakes?: RevealStakeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryTrancheStakesResponseAminoMsg {
  type: "/sparkdream.reveal.v1.QueryTrancheStakesResponse";
  value: QueryTrancheStakesResponseAmino;
}
/**
 * @name QueryStakeDetailRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryStakeDetailRequest
 */
export interface QueryStakeDetailRequest {
  stakeId: bigint;
}
export interface QueryStakeDetailRequestProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryStakeDetailRequest";
  value: Uint8Array;
}
/**
 * @name QueryStakeDetailRequestAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryStakeDetailRequest
 */
export interface QueryStakeDetailRequestAmino {
  stake_id?: string;
}
export interface QueryStakeDetailRequestAminoMsg {
  type: "/sparkdream.reveal.v1.QueryStakeDetailRequest";
  value: QueryStakeDetailRequestAmino;
}
/**
 * @name QueryStakeDetailResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryStakeDetailResponse
 */
export interface QueryStakeDetailResponse {
  stake: RevealStake;
}
export interface QueryStakeDetailResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryStakeDetailResponse";
  value: Uint8Array;
}
/**
 * @name QueryStakeDetailResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryStakeDetailResponse
 */
export interface QueryStakeDetailResponseAmino {
  stake?: RevealStakeAmino;
}
export interface QueryStakeDetailResponseAminoMsg {
  type: "/sparkdream.reveal.v1.QueryStakeDetailResponse";
  value: QueryStakeDetailResponseAmino;
}
/**
 * @name QueryStakesByStakerRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryStakesByStakerRequest
 */
export interface QueryStakesByStakerRequest {
  staker: string;
  pagination?: PageRequest;
}
export interface QueryStakesByStakerRequestProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryStakesByStakerRequest";
  value: Uint8Array;
}
/**
 * @name QueryStakesByStakerRequestAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryStakesByStakerRequest
 */
export interface QueryStakesByStakerRequestAmino {
  staker?: string;
  pagination?: PageRequestAmino;
}
export interface QueryStakesByStakerRequestAminoMsg {
  type: "/sparkdream.reveal.v1.QueryStakesByStakerRequest";
  value: QueryStakesByStakerRequestAmino;
}
/**
 * @name QueryStakesByStakerResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryStakesByStakerResponse
 */
export interface QueryStakesByStakerResponse {
  stakes: RevealStake[];
  pagination?: PageResponse;
}
export interface QueryStakesByStakerResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryStakesByStakerResponse";
  value: Uint8Array;
}
/**
 * @name QueryStakesByStakerResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryStakesByStakerResponse
 */
export interface QueryStakesByStakerResponseAmino {
  stakes?: RevealStakeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryStakesByStakerResponseAminoMsg {
  type: "/sparkdream.reveal.v1.QueryStakesByStakerResponse";
  value: QueryStakesByStakerResponseAmino;
}
/**
 * @name QueryVotesByVoterRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryVotesByVoterRequest
 */
export interface QueryVotesByVoterRequest {
  voter: string;
  pagination?: PageRequest;
}
export interface QueryVotesByVoterRequestProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryVotesByVoterRequest";
  value: Uint8Array;
}
/**
 * @name QueryVotesByVoterRequestAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryVotesByVoterRequest
 */
export interface QueryVotesByVoterRequestAmino {
  voter?: string;
  pagination?: PageRequestAmino;
}
export interface QueryVotesByVoterRequestAminoMsg {
  type: "/sparkdream.reveal.v1.QueryVotesByVoterRequest";
  value: QueryVotesByVoterRequestAmino;
}
/**
 * @name QueryVotesByVoterResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryVotesByVoterResponse
 */
export interface QueryVotesByVoterResponse {
  votes: VerificationVote[];
  pagination?: PageResponse;
}
export interface QueryVotesByVoterResponseProtoMsg {
  typeUrl: "/sparkdream.reveal.v1.QueryVotesByVoterResponse";
  value: Uint8Array;
}
/**
 * @name QueryVotesByVoterResponseAmino
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryVotesByVoterResponse
 */
export interface QueryVotesByVoterResponseAmino {
  votes?: VerificationVoteAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryVotesByVoterResponseAminoMsg {
  type: "/sparkdream.reveal.v1.QueryVotesByVoterResponse";
  value: QueryVotesByVoterResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/sparkdream.reveal.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/sparkdream.reveal.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContributionRequest(): QueryContributionRequest {
  return {
    contributionId: BigInt(0)
  };
}
/**
 * @name QueryContributionRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionRequest
 */
export const QueryContributionRequest = {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionRequest",
  encode(message: QueryContributionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contributionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContributionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContributionRequest();
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
  fromPartial(object: DeepPartial<QueryContributionRequest>): QueryContributionRequest {
    const message = createBaseQueryContributionRequest();
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryContributionRequestAmino): QueryContributionRequest {
    const message = createBaseQueryContributionRequest();
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    return message;
  },
  toAmino(message: QueryContributionRequest): QueryContributionRequestAmino {
    const obj: any = {};
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContributionRequestAminoMsg): QueryContributionRequest {
    return QueryContributionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContributionRequestProtoMsg): QueryContributionRequest {
    return QueryContributionRequest.decode(message.value);
  },
  toProto(message: QueryContributionRequest): Uint8Array {
    return QueryContributionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContributionRequest): QueryContributionRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryContributionRequest",
      value: QueryContributionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContributionResponse(): QueryContributionResponse {
  return {
    contribution: Contribution.fromPartial({})
  };
}
/**
 * @name QueryContributionResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionResponse
 */
export const QueryContributionResponse = {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionResponse",
  encode(message: QueryContributionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contribution !== undefined) {
      Contribution.encode(message.contribution, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContributionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContributionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contribution = Contribution.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContributionResponse>): QueryContributionResponse {
    const message = createBaseQueryContributionResponse();
    message.contribution = object.contribution !== undefined && object.contribution !== null ? Contribution.fromPartial(object.contribution) : undefined;
    return message;
  },
  fromAmino(object: QueryContributionResponseAmino): QueryContributionResponse {
    const message = createBaseQueryContributionResponse();
    if (object.contribution !== undefined && object.contribution !== null) {
      message.contribution = Contribution.fromAmino(object.contribution);
    }
    return message;
  },
  toAmino(message: QueryContributionResponse): QueryContributionResponseAmino {
    const obj: any = {};
    obj.contribution = message.contribution ? Contribution.toAmino(message.contribution) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContributionResponseAminoMsg): QueryContributionResponse {
    return QueryContributionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContributionResponseProtoMsg): QueryContributionResponse {
    return QueryContributionResponse.decode(message.value);
  },
  toProto(message: QueryContributionResponse): Uint8Array {
    return QueryContributionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContributionResponse): QueryContributionResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryContributionResponse",
      value: QueryContributionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContributionsRequest(): QueryContributionsRequest {
  return {
    pagination: undefined
  };
}
/**
 * @name QueryContributionsRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsRequest
 */
export const QueryContributionsRequest = {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionsRequest",
  encode(message: QueryContributionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContributionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContributionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContributionsRequest>): QueryContributionsRequest {
    const message = createBaseQueryContributionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryContributionsRequestAmino): QueryContributionsRequest {
    const message = createBaseQueryContributionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContributionsRequest): QueryContributionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContributionsRequestAminoMsg): QueryContributionsRequest {
    return QueryContributionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContributionsRequestProtoMsg): QueryContributionsRequest {
    return QueryContributionsRequest.decode(message.value);
  },
  toProto(message: QueryContributionsRequest): Uint8Array {
    return QueryContributionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContributionsRequest): QueryContributionsRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryContributionsRequest",
      value: QueryContributionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContributionsResponse(): QueryContributionsResponse {
  return {
    contributions: [],
    pagination: undefined
  };
}
/**
 * @name QueryContributionsResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsResponse
 */
export const QueryContributionsResponse = {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionsResponse",
  encode(message: QueryContributionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contributions) {
      Contribution.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContributionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContributionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contributions.push(Contribution.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContributionsResponse>): QueryContributionsResponse {
    const message = createBaseQueryContributionsResponse();
    message.contributions = object.contributions?.map(e => Contribution.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryContributionsResponseAmino): QueryContributionsResponse {
    const message = createBaseQueryContributionsResponse();
    message.contributions = object.contributions?.map(e => Contribution.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContributionsResponse): QueryContributionsResponseAmino {
    const obj: any = {};
    if (message.contributions) {
      obj.contributions = message.contributions.map(e => e ? Contribution.toAmino(e) : undefined);
    } else {
      obj.contributions = message.contributions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContributionsResponseAminoMsg): QueryContributionsResponse {
    return QueryContributionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContributionsResponseProtoMsg): QueryContributionsResponse {
    return QueryContributionsResponse.decode(message.value);
  },
  toProto(message: QueryContributionsResponse): Uint8Array {
    return QueryContributionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContributionsResponse): QueryContributionsResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryContributionsResponse",
      value: QueryContributionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContributionsByContributorRequest(): QueryContributionsByContributorRequest {
  return {
    contributor: "",
    pagination: undefined
  };
}
/**
 * @name QueryContributionsByContributorRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsByContributorRequest
 */
export const QueryContributionsByContributorRequest = {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionsByContributorRequest",
  encode(message: QueryContributionsByContributorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contributor !== "") {
      writer.uint32(10).string(message.contributor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContributionsByContributorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContributionsByContributorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contributor = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContributionsByContributorRequest>): QueryContributionsByContributorRequest {
    const message = createBaseQueryContributionsByContributorRequest();
    message.contributor = object.contributor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryContributionsByContributorRequestAmino): QueryContributionsByContributorRequest {
    const message = createBaseQueryContributionsByContributorRequest();
    if (object.contributor !== undefined && object.contributor !== null) {
      message.contributor = object.contributor;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContributionsByContributorRequest): QueryContributionsByContributorRequestAmino {
    const obj: any = {};
    obj.contributor = message.contributor === "" ? undefined : message.contributor;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContributionsByContributorRequestAminoMsg): QueryContributionsByContributorRequest {
    return QueryContributionsByContributorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContributionsByContributorRequestProtoMsg): QueryContributionsByContributorRequest {
    return QueryContributionsByContributorRequest.decode(message.value);
  },
  toProto(message: QueryContributionsByContributorRequest): Uint8Array {
    return QueryContributionsByContributorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContributionsByContributorRequest): QueryContributionsByContributorRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryContributionsByContributorRequest",
      value: QueryContributionsByContributorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContributionsByContributorResponse(): QueryContributionsByContributorResponse {
  return {
    contributions: [],
    pagination: undefined
  };
}
/**
 * @name QueryContributionsByContributorResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsByContributorResponse
 */
export const QueryContributionsByContributorResponse = {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionsByContributorResponse",
  encode(message: QueryContributionsByContributorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contributions) {
      Contribution.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContributionsByContributorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContributionsByContributorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contributions.push(Contribution.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContributionsByContributorResponse>): QueryContributionsByContributorResponse {
    const message = createBaseQueryContributionsByContributorResponse();
    message.contributions = object.contributions?.map(e => Contribution.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryContributionsByContributorResponseAmino): QueryContributionsByContributorResponse {
    const message = createBaseQueryContributionsByContributorResponse();
    message.contributions = object.contributions?.map(e => Contribution.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContributionsByContributorResponse): QueryContributionsByContributorResponseAmino {
    const obj: any = {};
    if (message.contributions) {
      obj.contributions = message.contributions.map(e => e ? Contribution.toAmino(e) : undefined);
    } else {
      obj.contributions = message.contributions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContributionsByContributorResponseAminoMsg): QueryContributionsByContributorResponse {
    return QueryContributionsByContributorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContributionsByContributorResponseProtoMsg): QueryContributionsByContributorResponse {
    return QueryContributionsByContributorResponse.decode(message.value);
  },
  toProto(message: QueryContributionsByContributorResponse): Uint8Array {
    return QueryContributionsByContributorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContributionsByContributorResponse): QueryContributionsByContributorResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryContributionsByContributorResponse",
      value: QueryContributionsByContributorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContributionsByStatusRequest(): QueryContributionsByStatusRequest {
  return {
    status: 0,
    pagination: undefined
  };
}
/**
 * @name QueryContributionsByStatusRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsByStatusRequest
 */
export const QueryContributionsByStatusRequest = {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionsByStatusRequest",
  encode(message: QueryContributionsByStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContributionsByStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContributionsByStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContributionsByStatusRequest>): QueryContributionsByStatusRequest {
    const message = createBaseQueryContributionsByStatusRequest();
    message.status = object.status ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryContributionsByStatusRequestAmino): QueryContributionsByStatusRequest {
    const message = createBaseQueryContributionsByStatusRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContributionsByStatusRequest): QueryContributionsByStatusRequestAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContributionsByStatusRequestAminoMsg): QueryContributionsByStatusRequest {
    return QueryContributionsByStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContributionsByStatusRequestProtoMsg): QueryContributionsByStatusRequest {
    return QueryContributionsByStatusRequest.decode(message.value);
  },
  toProto(message: QueryContributionsByStatusRequest): Uint8Array {
    return QueryContributionsByStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContributionsByStatusRequest): QueryContributionsByStatusRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryContributionsByStatusRequest",
      value: QueryContributionsByStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContributionsByStatusResponse(): QueryContributionsByStatusResponse {
  return {
    contributions: [],
    pagination: undefined
  };
}
/**
 * @name QueryContributionsByStatusResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryContributionsByStatusResponse
 */
export const QueryContributionsByStatusResponse = {
  typeUrl: "/sparkdream.reveal.v1.QueryContributionsByStatusResponse",
  encode(message: QueryContributionsByStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contributions) {
      Contribution.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContributionsByStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContributionsByStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contributions.push(Contribution.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContributionsByStatusResponse>): QueryContributionsByStatusResponse {
    const message = createBaseQueryContributionsByStatusResponse();
    message.contributions = object.contributions?.map(e => Contribution.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryContributionsByStatusResponseAmino): QueryContributionsByStatusResponse {
    const message = createBaseQueryContributionsByStatusResponse();
    message.contributions = object.contributions?.map(e => Contribution.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContributionsByStatusResponse): QueryContributionsByStatusResponseAmino {
    const obj: any = {};
    if (message.contributions) {
      obj.contributions = message.contributions.map(e => e ? Contribution.toAmino(e) : undefined);
    } else {
      obj.contributions = message.contributions;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContributionsByStatusResponseAminoMsg): QueryContributionsByStatusResponse {
    return QueryContributionsByStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContributionsByStatusResponseProtoMsg): QueryContributionsByStatusResponse {
    return QueryContributionsByStatusResponse.decode(message.value);
  },
  toProto(message: QueryContributionsByStatusResponse): Uint8Array {
    return QueryContributionsByStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContributionsByStatusResponse): QueryContributionsByStatusResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryContributionsByStatusResponse",
      value: QueryContributionsByStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTrancheRequest(): QueryTrancheRequest {
  return {
    contributionId: BigInt(0),
    trancheId: 0
  };
}
/**
 * @name QueryTrancheRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheRequest
 */
export const QueryTrancheRequest = {
  typeUrl: "/sparkdream.reveal.v1.QueryTrancheRequest",
  encode(message: QueryTrancheRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contributionId);
    }
    if (message.trancheId !== 0) {
      writer.uint32(16).uint32(message.trancheId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTrancheRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTrancheRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contributionId = reader.uint64();
          break;
        case 2:
          message.trancheId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTrancheRequest>): QueryTrancheRequest {
    const message = createBaseQueryTrancheRequest();
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    message.trancheId = object.trancheId ?? 0;
    return message;
  },
  fromAmino(object: QueryTrancheRequestAmino): QueryTrancheRequest {
    const message = createBaseQueryTrancheRequest();
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    if (object.tranche_id !== undefined && object.tranche_id !== null) {
      message.trancheId = object.tranche_id;
    }
    return message;
  },
  toAmino(message: QueryTrancheRequest): QueryTrancheRequestAmino {
    const obj: any = {};
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    obj.tranche_id = message.trancheId === 0 ? undefined : message.trancheId;
    return obj;
  },
  fromAminoMsg(object: QueryTrancheRequestAminoMsg): QueryTrancheRequest {
    return QueryTrancheRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTrancheRequestProtoMsg): QueryTrancheRequest {
    return QueryTrancheRequest.decode(message.value);
  },
  toProto(message: QueryTrancheRequest): Uint8Array {
    return QueryTrancheRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTrancheRequest): QueryTrancheRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryTrancheRequest",
      value: QueryTrancheRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTrancheResponse(): QueryTrancheResponse {
  return {
    tranche: RevealTranche.fromPartial({})
  };
}
/**
 * @name QueryTrancheResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheResponse
 */
export const QueryTrancheResponse = {
  typeUrl: "/sparkdream.reveal.v1.QueryTrancheResponse",
  encode(message: QueryTrancheResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tranche !== undefined) {
      RevealTranche.encode(message.tranche, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTrancheResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTrancheResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tranche = RevealTranche.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTrancheResponse>): QueryTrancheResponse {
    const message = createBaseQueryTrancheResponse();
    message.tranche = object.tranche !== undefined && object.tranche !== null ? RevealTranche.fromPartial(object.tranche) : undefined;
    return message;
  },
  fromAmino(object: QueryTrancheResponseAmino): QueryTrancheResponse {
    const message = createBaseQueryTrancheResponse();
    if (object.tranche !== undefined && object.tranche !== null) {
      message.tranche = RevealTranche.fromAmino(object.tranche);
    }
    return message;
  },
  toAmino(message: QueryTrancheResponse): QueryTrancheResponseAmino {
    const obj: any = {};
    obj.tranche = message.tranche ? RevealTranche.toAmino(message.tranche) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTrancheResponseAminoMsg): QueryTrancheResponse {
    return QueryTrancheResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTrancheResponseProtoMsg): QueryTrancheResponse {
    return QueryTrancheResponse.decode(message.value);
  },
  toProto(message: QueryTrancheResponse): Uint8Array {
    return QueryTrancheResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTrancheResponse): QueryTrancheResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryTrancheResponse",
      value: QueryTrancheResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTrancheTallyRequest(): QueryTrancheTallyRequest {
  return {
    contributionId: BigInt(0),
    trancheId: 0
  };
}
/**
 * @name QueryTrancheTallyRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheTallyRequest
 */
export const QueryTrancheTallyRequest = {
  typeUrl: "/sparkdream.reveal.v1.QueryTrancheTallyRequest",
  encode(message: QueryTrancheTallyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contributionId);
    }
    if (message.trancheId !== 0) {
      writer.uint32(16).uint32(message.trancheId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTrancheTallyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTrancheTallyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contributionId = reader.uint64();
          break;
        case 2:
          message.trancheId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTrancheTallyRequest>): QueryTrancheTallyRequest {
    const message = createBaseQueryTrancheTallyRequest();
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    message.trancheId = object.trancheId ?? 0;
    return message;
  },
  fromAmino(object: QueryTrancheTallyRequestAmino): QueryTrancheTallyRequest {
    const message = createBaseQueryTrancheTallyRequest();
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    if (object.tranche_id !== undefined && object.tranche_id !== null) {
      message.trancheId = object.tranche_id;
    }
    return message;
  },
  toAmino(message: QueryTrancheTallyRequest): QueryTrancheTallyRequestAmino {
    const obj: any = {};
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    obj.tranche_id = message.trancheId === 0 ? undefined : message.trancheId;
    return obj;
  },
  fromAminoMsg(object: QueryTrancheTallyRequestAminoMsg): QueryTrancheTallyRequest {
    return QueryTrancheTallyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTrancheTallyRequestProtoMsg): QueryTrancheTallyRequest {
    return QueryTrancheTallyRequest.decode(message.value);
  },
  toProto(message: QueryTrancheTallyRequest): Uint8Array {
    return QueryTrancheTallyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTrancheTallyRequest): QueryTrancheTallyRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryTrancheTallyRequest",
      value: QueryTrancheTallyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTrancheTallyResponse(): QueryTrancheTallyResponse {
  return {
    yesWeight: "",
    noWeight: "",
    voteCount: 0
  };
}
/**
 * @name QueryTrancheTallyResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheTallyResponse
 */
export const QueryTrancheTallyResponse = {
  typeUrl: "/sparkdream.reveal.v1.QueryTrancheTallyResponse",
  encode(message: QueryTrancheTallyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yesWeight !== "") {
      writer.uint32(10).string(message.yesWeight);
    }
    if (message.noWeight !== "") {
      writer.uint32(18).string(message.noWeight);
    }
    if (message.voteCount !== 0) {
      writer.uint32(24).uint32(message.voteCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTrancheTallyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTrancheTallyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesWeight = reader.string();
          break;
        case 2:
          message.noWeight = reader.string();
          break;
        case 3:
          message.voteCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTrancheTallyResponse>): QueryTrancheTallyResponse {
    const message = createBaseQueryTrancheTallyResponse();
    message.yesWeight = object.yesWeight ?? "";
    message.noWeight = object.noWeight ?? "";
    message.voteCount = object.voteCount ?? 0;
    return message;
  },
  fromAmino(object: QueryTrancheTallyResponseAmino): QueryTrancheTallyResponse {
    const message = createBaseQueryTrancheTallyResponse();
    if (object.yes_weight !== undefined && object.yes_weight !== null) {
      message.yesWeight = object.yes_weight;
    }
    if (object.no_weight !== undefined && object.no_weight !== null) {
      message.noWeight = object.no_weight;
    }
    if (object.vote_count !== undefined && object.vote_count !== null) {
      message.voteCount = object.vote_count;
    }
    return message;
  },
  toAmino(message: QueryTrancheTallyResponse): QueryTrancheTallyResponseAmino {
    const obj: any = {};
    obj.yes_weight = message.yesWeight === "" ? undefined : message.yesWeight;
    obj.no_weight = message.noWeight === "" ? undefined : message.noWeight;
    obj.vote_count = message.voteCount === 0 ? undefined : message.voteCount;
    return obj;
  },
  fromAminoMsg(object: QueryTrancheTallyResponseAminoMsg): QueryTrancheTallyResponse {
    return QueryTrancheTallyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTrancheTallyResponseProtoMsg): QueryTrancheTallyResponse {
    return QueryTrancheTallyResponse.decode(message.value);
  },
  toProto(message: QueryTrancheTallyResponse): Uint8Array {
    return QueryTrancheTallyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTrancheTallyResponse): QueryTrancheTallyResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryTrancheTallyResponse",
      value: QueryTrancheTallyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTrancheStakesRequest(): QueryTrancheStakesRequest {
  return {
    contributionId: BigInt(0),
    trancheId: 0,
    pagination: undefined
  };
}
/**
 * @name QueryTrancheStakesRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheStakesRequest
 */
export const QueryTrancheStakesRequest = {
  typeUrl: "/sparkdream.reveal.v1.QueryTrancheStakesRequest",
  encode(message: QueryTrancheStakesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contributionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.contributionId);
    }
    if (message.trancheId !== 0) {
      writer.uint32(16).uint32(message.trancheId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTrancheStakesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTrancheStakesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contributionId = reader.uint64();
          break;
        case 2:
          message.trancheId = reader.uint32();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTrancheStakesRequest>): QueryTrancheStakesRequest {
    const message = createBaseQueryTrancheStakesRequest();
    message.contributionId = object.contributionId !== undefined && object.contributionId !== null ? BigInt(object.contributionId.toString()) : BigInt(0);
    message.trancheId = object.trancheId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTrancheStakesRequestAmino): QueryTrancheStakesRequest {
    const message = createBaseQueryTrancheStakesRequest();
    if (object.contribution_id !== undefined && object.contribution_id !== null) {
      message.contributionId = BigInt(object.contribution_id);
    }
    if (object.tranche_id !== undefined && object.tranche_id !== null) {
      message.trancheId = object.tranche_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTrancheStakesRequest): QueryTrancheStakesRequestAmino {
    const obj: any = {};
    obj.contribution_id = message.contributionId !== BigInt(0) ? message.contributionId?.toString() : undefined;
    obj.tranche_id = message.trancheId === 0 ? undefined : message.trancheId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTrancheStakesRequestAminoMsg): QueryTrancheStakesRequest {
    return QueryTrancheStakesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTrancheStakesRequestProtoMsg): QueryTrancheStakesRequest {
    return QueryTrancheStakesRequest.decode(message.value);
  },
  toProto(message: QueryTrancheStakesRequest): Uint8Array {
    return QueryTrancheStakesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTrancheStakesRequest): QueryTrancheStakesRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryTrancheStakesRequest",
      value: QueryTrancheStakesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTrancheStakesResponse(): QueryTrancheStakesResponse {
  return {
    stakes: [],
    pagination: undefined
  };
}
/**
 * @name QueryTrancheStakesResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryTrancheStakesResponse
 */
export const QueryTrancheStakesResponse = {
  typeUrl: "/sparkdream.reveal.v1.QueryTrancheStakesResponse",
  encode(message: QueryTrancheStakesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakes) {
      RevealStake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTrancheStakesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTrancheStakesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakes.push(RevealStake.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTrancheStakesResponse>): QueryTrancheStakesResponse {
    const message = createBaseQueryTrancheStakesResponse();
    message.stakes = object.stakes?.map(e => RevealStake.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTrancheStakesResponseAmino): QueryTrancheStakesResponse {
    const message = createBaseQueryTrancheStakesResponse();
    message.stakes = object.stakes?.map(e => RevealStake.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTrancheStakesResponse): QueryTrancheStakesResponseAmino {
    const obj: any = {};
    if (message.stakes) {
      obj.stakes = message.stakes.map(e => e ? RevealStake.toAmino(e) : undefined);
    } else {
      obj.stakes = message.stakes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTrancheStakesResponseAminoMsg): QueryTrancheStakesResponse {
    return QueryTrancheStakesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTrancheStakesResponseProtoMsg): QueryTrancheStakesResponse {
    return QueryTrancheStakesResponse.decode(message.value);
  },
  toProto(message: QueryTrancheStakesResponse): Uint8Array {
    return QueryTrancheStakesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTrancheStakesResponse): QueryTrancheStakesResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryTrancheStakesResponse",
      value: QueryTrancheStakesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakeDetailRequest(): QueryStakeDetailRequest {
  return {
    stakeId: BigInt(0)
  };
}
/**
 * @name QueryStakeDetailRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryStakeDetailRequest
 */
export const QueryStakeDetailRequest = {
  typeUrl: "/sparkdream.reveal.v1.QueryStakeDetailRequest",
  encode(message: QueryStakeDetailRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.stakeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakeDetailRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeDetailRequest();
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
  fromPartial(object: DeepPartial<QueryStakeDetailRequest>): QueryStakeDetailRequest {
    const message = createBaseQueryStakeDetailRequest();
    message.stakeId = object.stakeId !== undefined && object.stakeId !== null ? BigInt(object.stakeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryStakeDetailRequestAmino): QueryStakeDetailRequest {
    const message = createBaseQueryStakeDetailRequest();
    if (object.stake_id !== undefined && object.stake_id !== null) {
      message.stakeId = BigInt(object.stake_id);
    }
    return message;
  },
  toAmino(message: QueryStakeDetailRequest): QueryStakeDetailRequestAmino {
    const obj: any = {};
    obj.stake_id = message.stakeId !== BigInt(0) ? message.stakeId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakeDetailRequestAminoMsg): QueryStakeDetailRequest {
    return QueryStakeDetailRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakeDetailRequestProtoMsg): QueryStakeDetailRequest {
    return QueryStakeDetailRequest.decode(message.value);
  },
  toProto(message: QueryStakeDetailRequest): Uint8Array {
    return QueryStakeDetailRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakeDetailRequest): QueryStakeDetailRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryStakeDetailRequest",
      value: QueryStakeDetailRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakeDetailResponse(): QueryStakeDetailResponse {
  return {
    stake: RevealStake.fromPartial({})
  };
}
/**
 * @name QueryStakeDetailResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryStakeDetailResponse
 */
export const QueryStakeDetailResponse = {
  typeUrl: "/sparkdream.reveal.v1.QueryStakeDetailResponse",
  encode(message: QueryStakeDetailResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stake !== undefined) {
      RevealStake.encode(message.stake, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakeDetailResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeDetailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stake = RevealStake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryStakeDetailResponse>): QueryStakeDetailResponse {
    const message = createBaseQueryStakeDetailResponse();
    message.stake = object.stake !== undefined && object.stake !== null ? RevealStake.fromPartial(object.stake) : undefined;
    return message;
  },
  fromAmino(object: QueryStakeDetailResponseAmino): QueryStakeDetailResponse {
    const message = createBaseQueryStakeDetailResponse();
    if (object.stake !== undefined && object.stake !== null) {
      message.stake = RevealStake.fromAmino(object.stake);
    }
    return message;
  },
  toAmino(message: QueryStakeDetailResponse): QueryStakeDetailResponseAmino {
    const obj: any = {};
    obj.stake = message.stake ? RevealStake.toAmino(message.stake) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakeDetailResponseAminoMsg): QueryStakeDetailResponse {
    return QueryStakeDetailResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakeDetailResponseProtoMsg): QueryStakeDetailResponse {
    return QueryStakeDetailResponse.decode(message.value);
  },
  toProto(message: QueryStakeDetailResponse): Uint8Array {
    return QueryStakeDetailResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakeDetailResponse): QueryStakeDetailResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryStakeDetailResponse",
      value: QueryStakeDetailResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStakesByStakerRequest(): QueryStakesByStakerRequest {
  return {
    staker: "",
    pagination: undefined
  };
}
/**
 * @name QueryStakesByStakerRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryStakesByStakerRequest
 */
export const QueryStakesByStakerRequest = {
  typeUrl: "/sparkdream.reveal.v1.QueryStakesByStakerRequest",
  encode(message: QueryStakesByStakerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakesByStakerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakesByStakerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryStakesByStakerRequest>): QueryStakesByStakerRequest {
    const message = createBaseQueryStakesByStakerRequest();
    message.staker = object.staker ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryStakesByStakerRequestAmino): QueryStakesByStakerRequest {
    const message = createBaseQueryStakesByStakerRequest();
    if (object.staker !== undefined && object.staker !== null) {
      message.staker = object.staker;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStakesByStakerRequest): QueryStakesByStakerRequestAmino {
    const obj: any = {};
    obj.staker = message.staker === "" ? undefined : message.staker;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakesByStakerRequestAminoMsg): QueryStakesByStakerRequest {
    return QueryStakesByStakerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakesByStakerRequestProtoMsg): QueryStakesByStakerRequest {
    return QueryStakesByStakerRequest.decode(message.value);
  },
  toProto(message: QueryStakesByStakerRequest): Uint8Array {
    return QueryStakesByStakerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStakesByStakerRequest): QueryStakesByStakerRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryStakesByStakerRequest",
      value: QueryStakesByStakerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStakesByStakerResponse(): QueryStakesByStakerResponse {
  return {
    stakes: [],
    pagination: undefined
  };
}
/**
 * @name QueryStakesByStakerResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryStakesByStakerResponse
 */
export const QueryStakesByStakerResponse = {
  typeUrl: "/sparkdream.reveal.v1.QueryStakesByStakerResponse",
  encode(message: QueryStakesByStakerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stakes) {
      RevealStake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStakesByStakerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakesByStakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakes.push(RevealStake.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryStakesByStakerResponse>): QueryStakesByStakerResponse {
    const message = createBaseQueryStakesByStakerResponse();
    message.stakes = object.stakes?.map(e => RevealStake.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryStakesByStakerResponseAmino): QueryStakesByStakerResponse {
    const message = createBaseQueryStakesByStakerResponse();
    message.stakes = object.stakes?.map(e => RevealStake.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStakesByStakerResponse): QueryStakesByStakerResponseAmino {
    const obj: any = {};
    if (message.stakes) {
      obj.stakes = message.stakes.map(e => e ? RevealStake.toAmino(e) : undefined);
    } else {
      obj.stakes = message.stakes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStakesByStakerResponseAminoMsg): QueryStakesByStakerResponse {
    return QueryStakesByStakerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStakesByStakerResponseProtoMsg): QueryStakesByStakerResponse {
    return QueryStakesByStakerResponse.decode(message.value);
  },
  toProto(message: QueryStakesByStakerResponse): Uint8Array {
    return QueryStakesByStakerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStakesByStakerResponse): QueryStakesByStakerResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryStakesByStakerResponse",
      value: QueryStakesByStakerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByVoterRequest(): QueryVotesByVoterRequest {
  return {
    voter: "",
    pagination: undefined
  };
}
/**
 * @name QueryVotesByVoterRequest
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryVotesByVoterRequest
 */
export const QueryVotesByVoterRequest = {
  typeUrl: "/sparkdream.reveal.v1.QueryVotesByVoterRequest",
  encode(message: QueryVotesByVoterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesByVoterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVotesByVoterRequest>): QueryVotesByVoterRequest {
    const message = createBaseQueryVotesByVoterRequest();
    message.voter = object.voter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesByVoterRequestAmino): QueryVotesByVoterRequest {
    const message = createBaseQueryVotesByVoterRequest();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestAmino {
    const obj: any = {};
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByVoterRequestAminoMsg): QueryVotesByVoterRequest {
    return QueryVotesByVoterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotesByVoterRequestProtoMsg): QueryVotesByVoterRequest {
    return QueryVotesByVoterRequest.decode(message.value);
  },
  toProto(message: QueryVotesByVoterRequest): Uint8Array {
    return QueryVotesByVoterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryVotesByVoterRequest",
      value: QueryVotesByVoterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotesByVoterResponse(): QueryVotesByVoterResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
/**
 * @name QueryVotesByVoterResponse
 * @package sparkdream.reveal.v1
 * @see proto type: sparkdream.reveal.v1.QueryVotesByVoterResponse
 */
export const QueryVotesByVoterResponse = {
  typeUrl: "/sparkdream.reveal.v1.QueryVotesByVoterResponse",
  encode(message: QueryVotesByVoterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      VerificationVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesByVoterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesByVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(VerificationVote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVotesByVoterResponse>): QueryVotesByVoterResponse {
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map(e => VerificationVote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVotesByVoterResponseAmino): QueryVotesByVoterResponse {
    const message = createBaseQueryVotesByVoterResponse();
    message.votes = object.votes?.map(e => VerificationVote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? VerificationVote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesByVoterResponseAminoMsg): QueryVotesByVoterResponse {
    return QueryVotesByVoterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotesByVoterResponseProtoMsg): QueryVotesByVoterResponse {
    return QueryVotesByVoterResponse.decode(message.value);
  },
  toProto(message: QueryVotesByVoterResponse): Uint8Array {
    return QueryVotesByVoterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseProtoMsg {
    return {
      typeUrl: "/sparkdream.reveal.v1.QueryVotesByVoterResponse",
      value: QueryVotesByVoterResponse.encode(message).finish()
    };
  }
};