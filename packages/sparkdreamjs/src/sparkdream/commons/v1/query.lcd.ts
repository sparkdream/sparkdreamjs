//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPolicyPermissionsRequest, QueryGetPolicyPermissionsResponse, QueryAllPolicyPermissionsRequest, QueryAllPolicyPermissionsResponse, QueryGetDecisionPolicyRequest, QueryGetDecisionPolicyResponse, QueryAllDecisionPoliciesRequest, QueryAllDecisionPoliciesResponse, QueryGetGroupRequest, QueryGetGroupResponse, QueryAllGroupRequest, QueryAllGroupResponse, QueryGetCouncilMembersRequest, QueryGetCouncilMembersResponse, QueryGetProposalRequest, QueryGetProposalResponse, QueryListProposalsRequest, QueryListProposalsResponse, QueryGetProposalVotesRequest, QueryGetProposalVotesResponse, QueryGetCategoryRequest, QueryGetCategoryResponse, QueryAllCategoryRequest, QueryAllCategoryResponse, QueryGetRecurringSpendRequest, QueryGetRecurringSpendResponse, QueryListRecurringSpendsRequest, QueryListRecurringSpendsResponse, QueryGetPollRequest, QueryGetPollResponse, QueryListPollsRequest, QueryListPollsResponse, QueryGetPollVotesRequest, QueryGetPollVotesResponse, QueryGetProposalVoterTreeRequest, QueryGetProposalVoterTreeResponse, QueryGetPollVoterTreeRequest, QueryGetPollVoterTreeResponse } from "./query";
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
    const endpoint = `sparkdream/commons/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* ListPolicyPermissions Queries a list of PolicyPermissions items. */
  getPolicyPermissions = async (params: QueryGetPolicyPermissionsRequest): Promise<QueryGetPolicyPermissionsResponse> => {
    const endpoint = `sparkdream/commons/v1/policy_permissions/${params.policyAddress}`;
    return await this.req.get<QueryGetPolicyPermissionsResponse>(endpoint);
  };
  /* ListPolicyPermissions defines the ListPolicyPermissions RPC. */
  listPolicyPermissions = async (params: QueryAllPolicyPermissionsRequest = {
    pagination: undefined
  }): Promise<QueryAllPolicyPermissionsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/commons/v1/policy_permissions`;
    return await this.req.get<QueryAllPolicyPermissionsResponse>(endpoint, options);
  };
  /* GetDecisionPolicy returns the DecisionPolicy (voting threshold, voting
   period, min execution period) for a given council policy address. Read-only. */
  getDecisionPolicy = async (params: QueryGetDecisionPolicyRequest): Promise<QueryGetDecisionPolicyResponse> => {
    const endpoint = `sparkdream/commons/v1/decision_policy/${params.policyAddress}`;
    return await this.req.get<QueryGetDecisionPolicyResponse>(endpoint);
  };
  /* ListDecisionPolicies returns every stored DecisionPolicy paginated, paired
   with its policy_address. Useful for UIs that want to render every council's
   voting rules in one pass. */
  listDecisionPolicies = async (params: QueryAllDecisionPoliciesRequest = {
    pagination: undefined
  }): Promise<QueryAllDecisionPoliciesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/commons/v1/decision_policy`;
    return await this.req.get<QueryAllDecisionPoliciesResponse>(endpoint, options);
  };
  /* GetGroup queries a specific group by name. */
  getGroup = async (params: QueryGetGroupRequest): Promise<QueryGetGroupResponse> => {
    const endpoint = `sparkdream/commons/v1/group/${params.index}`;
    return await this.req.get<QueryGetGroupResponse>(endpoint);
  };
  /* ListGroups queries all groups. */
  listGroups = async (params: QueryAllGroupRequest = {
    pagination: undefined
  }): Promise<QueryAllGroupResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/commons/v1/group`;
    return await this.req.get<QueryAllGroupResponse>(endpoint, options);
  };
  /* GetCouncilMembers queries the members of a specific council. */
  getCouncilMembers = async (params: QueryGetCouncilMembersRequest): Promise<QueryGetCouncilMembersResponse> => {
    const endpoint = `sparkdream/commons/v1/council_members/${params.councilName}`;
    return await this.req.get<QueryGetCouncilMembersResponse>(endpoint);
  };
  /* GetProposal queries a specific proposal by ID. */
  getProposal = async (params: QueryGetProposalRequest): Promise<QueryGetProposalResponse> => {
    const endpoint = `sparkdream/commons/v1/proposal/${params.proposalId}`;
    return await this.req.get<QueryGetProposalResponse>(endpoint);
  };
  /* ListProposals queries all proposals with optional filtering. */
  listProposals = async (params: QueryListProposalsRequest): Promise<QueryListProposalsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.councilName !== "undefined") {
      options.params.council_name = params.councilName;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/commons/v1/proposals`;
    return await this.req.get<QueryListProposalsResponse>(endpoint, options);
  };
  /* GetProposalVotes queries votes for a specific proposal. */
  getProposalVotes = async (params: QueryGetProposalVotesRequest): Promise<QueryGetProposalVotesResponse> => {
    const endpoint = `sparkdream/commons/v1/proposal/${params.proposalId}/votes`;
    return await this.req.get<QueryGetProposalVotesResponse>(endpoint);
  };
  /* GetCategory queries a single shared content category by id. */
  getCategory = async (params: QueryGetCategoryRequest): Promise<QueryGetCategoryResponse> => {
    const endpoint = `sparkdream/commons/v1/category/${params.categoryId}`;
    return await this.req.get<QueryGetCategoryResponse>(endpoint);
  };
  /* ListCategory queries all shared content categories. */
  listCategory = async (params: QueryAllCategoryRequest = {
    pagination: undefined
  }): Promise<QueryAllCategoryResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/commons/v1/category`;
    return await this.req.get<QueryAllCategoryResponse>(endpoint, options);
  };
  /* GetRecurringSpend queries a single recurring spend schedule by id. */
  getRecurringSpend = async (params: QueryGetRecurringSpendRequest): Promise<QueryGetRecurringSpendResponse> => {
    const endpoint = `sparkdream/commons/v1/recurring_spend/${params.id}`;
    return await this.req.get<QueryGetRecurringSpendResponse>(endpoint);
  };
  /* ListRecurringSpends queries recurring spend schedules, optionally
   filtered by authority (council policy address) or recipient. */
  listRecurringSpends = async (params: QueryListRecurringSpendsRequest): Promise<QueryListRecurringSpendsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.authority !== "undefined") {
      options.params.authority = params.authority;
    }
    if (typeof params?.recipient !== "undefined") {
      options.params.recipient = params.recipient;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/commons/v1/recurring_spends`;
    return await this.req.get<QueryListRecurringSpendsResponse>(endpoint, options);
  };
  /* GetPoll returns a poll. */
  getPoll = async (params: QueryGetPollRequest): Promise<QueryGetPollResponse> => {
    const endpoint = `sparkdream/commons/v1/poll/${params.pollId}`;
    return await this.req.get<QueryGetPollResponse>(endpoint);
  };
  /* ListPolls lists stored polls in ID order (pagination.reverse for newest
   first), optionally for one group and one status. */
  listPolls = async (params: QueryListPollsRequest): Promise<QueryListPollsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.councilName !== "undefined") {
      options.params.council_name = params.councilName;
    }
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/commons/v1/polls`;
    return await this.req.get<QueryListPollsResponse>(endpoint, options);
  };
  /* GetPollVotes lists the open votes on a poll. */
  getPollVotes = async (params: QueryGetPollVotesRequest): Promise<QueryGetPollVotesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/commons/v1/poll/${params.pollId}/votes`;
    return await this.req.get<QueryGetPollVotesResponse>(endpoint, options);
  };
  /* GetProposalVoterTree returns a secret-ballot proposal's voter snapshot
   (while voting is open), for building a shield proof. */
  getProposalVoterTree = async (params: QueryGetProposalVoterTreeRequest): Promise<QueryGetProposalVoterTreeResponse> => {
    const endpoint = `sparkdream/commons/v1/proposal/${params.proposalId}/voter_tree`;
    return await this.req.get<QueryGetProposalVoterTreeResponse>(endpoint);
  };
  /* GetPollVoterTree returns a secret-ballot poll's voter snapshot (while
   voting is open). */
  getPollVoterTree = async (params: QueryGetPollVoterTreeRequest): Promise<QueryGetPollVoterTreeResponse> => {
    const endpoint = `sparkdream/commons/v1/poll/${params.pollId}/voter_tree`;
    return await this.req.get<QueryGetPollVoterTreeResponse>(endpoint);
  };
}