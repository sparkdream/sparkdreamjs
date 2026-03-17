//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryContributionRequest, QueryContributionResponse, QueryContributionsRequest, QueryContributionsResponse, QueryContributionsByContributorRequest, QueryContributionsByContributorResponse, QueryContributionsByStatusRequest, QueryContributionsByStatusResponse, QueryTrancheRequest, QueryTrancheResponse, QueryTrancheTallyRequest, QueryTrancheTallyResponse, QueryTrancheStakesRequest, QueryTrancheStakesResponse, QueryStakeDetailRequest, QueryStakeDetailResponse, QueryStakesByStakerRequest, QueryStakesByStakerResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Parameters queries the parameters of the module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `sparkdream/reveal/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* Contribution queries a single contribution by ID. */
  contribution = async (params: QueryContributionRequest): Promise<QueryContributionResponse> => {
    const endpoint = `sparkdream/reveal/v1/contribution/${params.contributionId}`;
    return await this.req.get<QueryContributionResponse>(endpoint);
  };
  /* Contributions queries all contributions with pagination. */
  contributions = async (params: QueryContributionsRequest = {
    pagination: undefined
  }): Promise<QueryContributionsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/reveal/v1/contributions`;
    return await this.req.get<QueryContributionsResponse>(endpoint, options);
  };
  /* ContributionsByContributor queries contributions by contributor address. */
  contributionsByContributor = async (params: QueryContributionsByContributorRequest): Promise<QueryContributionsByContributorResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/reveal/v1/contributions_by_contributor/${params.contributor}`;
    return await this.req.get<QueryContributionsByContributorResponse>(endpoint, options);
  };
  /* ContributionsByStatus queries contributions filtered by status. */
  contributionsByStatus = async (params: QueryContributionsByStatusRequest): Promise<QueryContributionsByStatusResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/reveal/v1/contributions_by_status/${params.status}`;
    return await this.req.get<QueryContributionsByStatusResponse>(endpoint, options);
  };
  /* Tranche queries a single tranche detail. */
  tranche = async (params: QueryTrancheRequest): Promise<QueryTrancheResponse> => {
    const endpoint = `sparkdream/reveal/v1/tranche/${params.contributionId}/${params.trancheId}`;
    return await this.req.get<QueryTrancheResponse>(endpoint);
  };
  /* TrancheTally queries the verification tally for a tranche. */
  trancheTally = async (params: QueryTrancheTallyRequest): Promise<QueryTrancheTallyResponse> => {
    const endpoint = `sparkdream/reveal/v1/tranche_tally/${params.contributionId}/${params.trancheId}`;
    return await this.req.get<QueryTrancheTallyResponse>(endpoint);
  };
  /* TrancheStakes queries all stakes for a tranche. */
  trancheStakes = async (params: QueryTrancheStakesRequest): Promise<QueryTrancheStakesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/reveal/v1/tranche_stakes/${params.contributionId}/${params.trancheId}`;
    return await this.req.get<QueryTrancheStakesResponse>(endpoint, options);
  };
  /* StakeDetail queries a single stake by ID. */
  stakeDetail = async (params: QueryStakeDetailRequest): Promise<QueryStakeDetailResponse> => {
    const endpoint = `sparkdream/reveal/v1/stake_detail/${params.stakeId}`;
    return await this.req.get<QueryStakeDetailResponse>(endpoint);
  };
  /* StakesByStaker queries all stakes by a specific staker. */
  stakesByStaker = async (params: QueryStakesByStakerRequest): Promise<QueryStakesByStakerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/reveal/v1/stakes_by_staker/${params.staker}`;
    return await this.req.get<QueryStakesByStakerResponse>(endpoint, options);
  };
  /* VotesByVoter queries all verification votes by a specific voter. */
  votesByVoter = async (params: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/reveal/v1/votes_by_voter/${params.voter}`;
    return await this.req.get<QueryVotesByVoterResponse>(endpoint, options);
  };
}