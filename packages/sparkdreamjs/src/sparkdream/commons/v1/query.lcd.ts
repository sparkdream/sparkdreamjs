//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPolicyPermissionsRequest, QueryGetPolicyPermissionsResponse, QueryAllPolicyPermissionsRequest, QueryAllPolicyPermissionsResponse, QueryGetDecisionPolicyRequest, QueryGetDecisionPolicyResponse, QueryAllDecisionPoliciesRequest, QueryAllDecisionPoliciesResponse, QueryGetGroupRequest, QueryGetGroupResponse, QueryAllGroupRequest, QueryAllGroupResponse, QueryGetCouncilMembersRequest, QueryGetCouncilMembersResponse, QueryGetProposalRequest, QueryGetProposalResponse, QueryListProposalsRequest, QueryListProposalsResponse, QueryGetProposalVotesRequest, QueryGetProposalVotesResponse, QueryGetCategoryRequest, QueryGetCategoryResponse, QueryAllCategoryRequest, QueryAllCategoryResponse } from "./query";
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
}