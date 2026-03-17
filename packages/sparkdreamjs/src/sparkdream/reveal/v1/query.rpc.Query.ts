//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryContributionRequest, QueryContributionResponse, QueryContributionsRequest, QueryContributionsResponse, QueryContributionsByContributorRequest, QueryContributionsByContributorResponse, QueryContributionsByStatusRequest, QueryContributionsByStatusResponse, QueryTrancheRequest, QueryTrancheResponse, QueryTrancheTallyRequest, QueryTrancheTallyResponse, QueryTrancheStakesRequest, QueryTrancheStakesResponse, QueryStakeDetailRequest, QueryStakeDetailResponse, QueryStakesByStakerRequest, QueryStakesByStakerResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Contribution queries a single contribution by ID. */
  contribution(request: QueryContributionRequest): Promise<QueryContributionResponse>;
  /** Contributions queries all contributions with pagination. */
  contributions(request?: QueryContributionsRequest): Promise<QueryContributionsResponse>;
  /** ContributionsByContributor queries contributions by contributor address. */
  contributionsByContributor(request: QueryContributionsByContributorRequest): Promise<QueryContributionsByContributorResponse>;
  /** ContributionsByStatus queries contributions filtered by status. */
  contributionsByStatus(request: QueryContributionsByStatusRequest): Promise<QueryContributionsByStatusResponse>;
  /** Tranche queries a single tranche detail. */
  tranche(request: QueryTrancheRequest): Promise<QueryTrancheResponse>;
  /** TrancheTally queries the verification tally for a tranche. */
  trancheTally(request: QueryTrancheTallyRequest): Promise<QueryTrancheTallyResponse>;
  /** TrancheStakes queries all stakes for a tranche. */
  trancheStakes(request: QueryTrancheStakesRequest): Promise<QueryTrancheStakesResponse>;
  /** StakeDetail queries a single stake by ID. */
  stakeDetail(request: QueryStakeDetailRequest): Promise<QueryStakeDetailResponse>;
  /** StakesByStaker queries all stakes by a specific staker. */
  stakesByStaker(request: QueryStakesByStakerRequest): Promise<QueryStakesByStakerResponse>;
  /** VotesByVoter queries all verification votes by a specific voter. */
  votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Contribution queries a single contribution by ID. */
  contribution = async (request: QueryContributionRequest): Promise<QueryContributionResponse> => {
    const data = QueryContributionRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Query", "Contribution", data);
    return promise.then(data => QueryContributionResponse.decode(new BinaryReader(data)));
  };
  /* Contributions queries all contributions with pagination. */
  contributions = async (request: QueryContributionsRequest = {
    pagination: undefined
  }): Promise<QueryContributionsResponse> => {
    const data = QueryContributionsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Query", "Contributions", data);
    return promise.then(data => QueryContributionsResponse.decode(new BinaryReader(data)));
  };
  /* ContributionsByContributor queries contributions by contributor address. */
  contributionsByContributor = async (request: QueryContributionsByContributorRequest): Promise<QueryContributionsByContributorResponse> => {
    const data = QueryContributionsByContributorRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Query", "ContributionsByContributor", data);
    return promise.then(data => QueryContributionsByContributorResponse.decode(new BinaryReader(data)));
  };
  /* ContributionsByStatus queries contributions filtered by status. */
  contributionsByStatus = async (request: QueryContributionsByStatusRequest): Promise<QueryContributionsByStatusResponse> => {
    const data = QueryContributionsByStatusRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Query", "ContributionsByStatus", data);
    return promise.then(data => QueryContributionsByStatusResponse.decode(new BinaryReader(data)));
  };
  /* Tranche queries a single tranche detail. */
  tranche = async (request: QueryTrancheRequest): Promise<QueryTrancheResponse> => {
    const data = QueryTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Query", "Tranche", data);
    return promise.then(data => QueryTrancheResponse.decode(new BinaryReader(data)));
  };
  /* TrancheTally queries the verification tally for a tranche. */
  trancheTally = async (request: QueryTrancheTallyRequest): Promise<QueryTrancheTallyResponse> => {
    const data = QueryTrancheTallyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Query", "TrancheTally", data);
    return promise.then(data => QueryTrancheTallyResponse.decode(new BinaryReader(data)));
  };
  /* TrancheStakes queries all stakes for a tranche. */
  trancheStakes = async (request: QueryTrancheStakesRequest): Promise<QueryTrancheStakesResponse> => {
    const data = QueryTrancheStakesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Query", "TrancheStakes", data);
    return promise.then(data => QueryTrancheStakesResponse.decode(new BinaryReader(data)));
  };
  /* StakeDetail queries a single stake by ID. */
  stakeDetail = async (request: QueryStakeDetailRequest): Promise<QueryStakeDetailResponse> => {
    const data = QueryStakeDetailRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Query", "StakeDetail", data);
    return promise.then(data => QueryStakeDetailResponse.decode(new BinaryReader(data)));
  };
  /* StakesByStaker queries all stakes by a specific staker. */
  stakesByStaker = async (request: QueryStakesByStakerRequest): Promise<QueryStakesByStakerResponse> => {
    const data = QueryStakesByStakerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Query", "StakesByStaker", data);
    return promise.then(data => QueryStakesByStakerResponse.decode(new BinaryReader(data)));
  };
  /* VotesByVoter queries all verification votes by a specific voter. */
  votesByVoter = async (request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse> => {
    const data = QueryVotesByVoterRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.reveal.v1.Query", "VotesByVoter", data);
    return promise.then(data => QueryVotesByVoterResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    contribution(request: QueryContributionRequest): Promise<QueryContributionResponse> {
      return queryService.contribution(request);
    },
    contributions(request?: QueryContributionsRequest): Promise<QueryContributionsResponse> {
      return queryService.contributions(request);
    },
    contributionsByContributor(request: QueryContributionsByContributorRequest): Promise<QueryContributionsByContributorResponse> {
      return queryService.contributionsByContributor(request);
    },
    contributionsByStatus(request: QueryContributionsByStatusRequest): Promise<QueryContributionsByStatusResponse> {
      return queryService.contributionsByStatus(request);
    },
    tranche(request: QueryTrancheRequest): Promise<QueryTrancheResponse> {
      return queryService.tranche(request);
    },
    trancheTally(request: QueryTrancheTallyRequest): Promise<QueryTrancheTallyResponse> {
      return queryService.trancheTally(request);
    },
    trancheStakes(request: QueryTrancheStakesRequest): Promise<QueryTrancheStakesResponse> {
      return queryService.trancheStakes(request);
    },
    stakeDetail(request: QueryStakeDetailRequest): Promise<QueryStakeDetailResponse> {
      return queryService.stakeDetail(request);
    },
    stakesByStaker(request: QueryStakesByStakerRequest): Promise<QueryStakesByStakerResponse> {
      return queryService.stakesByStaker(request);
    },
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse> {
      return queryService.votesByVoter(request);
    }
  };
};