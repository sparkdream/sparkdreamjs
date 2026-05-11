//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPolicyPermissionsRequest, QueryGetPolicyPermissionsResponse, QueryAllPolicyPermissionsRequest, QueryAllPolicyPermissionsResponse, QueryGetDecisionPolicyRequest, QueryGetDecisionPolicyResponse, QueryAllDecisionPoliciesRequest, QueryAllDecisionPoliciesResponse, QueryGetGroupRequest, QueryGetGroupResponse, QueryAllGroupRequest, QueryAllGroupResponse, QueryGetCouncilMembersRequest, QueryGetCouncilMembersResponse, QueryGetProposalRequest, QueryGetProposalResponse, QueryListProposalsRequest, QueryListProposalsResponse, QueryGetProposalVotesRequest, QueryGetProposalVotesResponse, QueryGetCategoryRequest, QueryGetCategoryResponse, QueryAllCategoryRequest, QueryAllCategoryResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ListPolicyPermissions Queries a list of PolicyPermissions items. */
  getPolicyPermissions(request: QueryGetPolicyPermissionsRequest): Promise<QueryGetPolicyPermissionsResponse>;
  /** ListPolicyPermissions defines the ListPolicyPermissions RPC. */
  listPolicyPermissions(request?: QueryAllPolicyPermissionsRequest): Promise<QueryAllPolicyPermissionsResponse>;
  /**
   * GetDecisionPolicy returns the DecisionPolicy (voting threshold, voting
   * period, min execution period) for a given council policy address. Read-only.
   */
  getDecisionPolicy(request: QueryGetDecisionPolicyRequest): Promise<QueryGetDecisionPolicyResponse>;
  /**
   * ListDecisionPolicies returns every stored DecisionPolicy paginated, paired
   * with its policy_address. Useful for UIs that want to render every council's
   * voting rules in one pass.
   */
  listDecisionPolicies(request?: QueryAllDecisionPoliciesRequest): Promise<QueryAllDecisionPoliciesResponse>;
  /** GetGroup queries a specific group by name. */
  getGroup(request: QueryGetGroupRequest): Promise<QueryGetGroupResponse>;
  /** ListGroups queries all groups. */
  listGroups(request?: QueryAllGroupRequest): Promise<QueryAllGroupResponse>;
  /** GetCouncilMembers queries the members of a specific council. */
  getCouncilMembers(request: QueryGetCouncilMembersRequest): Promise<QueryGetCouncilMembersResponse>;
  /** GetProposal queries a specific proposal by ID. */
  getProposal(request: QueryGetProposalRequest): Promise<QueryGetProposalResponse>;
  /** ListProposals queries all proposals with optional filtering. */
  listProposals(request: QueryListProposalsRequest): Promise<QueryListProposalsResponse>;
  /** GetProposalVotes queries votes for a specific proposal. */
  getProposalVotes(request: QueryGetProposalVotesRequest): Promise<QueryGetProposalVotesResponse>;
  /** GetCategory queries a single shared content category by id. */
  getCategory(request: QueryGetCategoryRequest): Promise<QueryGetCategoryResponse>;
  /** ListCategory queries all shared content categories. */
  listCategory(request?: QueryAllCategoryRequest): Promise<QueryAllCategoryResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ListPolicyPermissions Queries a list of PolicyPermissions items. */
  getPolicyPermissions = async (request: QueryGetPolicyPermissionsRequest): Promise<QueryGetPolicyPermissionsResponse> => {
    const data = QueryGetPolicyPermissionsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "GetPolicyPermissions", data);
    return promise.then(data => QueryGetPolicyPermissionsResponse.decode(new BinaryReader(data)));
  };
  /* ListPolicyPermissions defines the ListPolicyPermissions RPC. */
  listPolicyPermissions = async (request: QueryAllPolicyPermissionsRequest = {
    pagination: undefined
  }): Promise<QueryAllPolicyPermissionsResponse> => {
    const data = QueryAllPolicyPermissionsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "ListPolicyPermissions", data);
    return promise.then(data => QueryAllPolicyPermissionsResponse.decode(new BinaryReader(data)));
  };
  /* GetDecisionPolicy returns the DecisionPolicy (voting threshold, voting
   period, min execution period) for a given council policy address. Read-only. */
  getDecisionPolicy = async (request: QueryGetDecisionPolicyRequest): Promise<QueryGetDecisionPolicyResponse> => {
    const data = QueryGetDecisionPolicyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "GetDecisionPolicy", data);
    return promise.then(data => QueryGetDecisionPolicyResponse.decode(new BinaryReader(data)));
  };
  /* ListDecisionPolicies returns every stored DecisionPolicy paginated, paired
   with its policy_address. Useful for UIs that want to render every council's
   voting rules in one pass. */
  listDecisionPolicies = async (request: QueryAllDecisionPoliciesRequest = {
    pagination: undefined
  }): Promise<QueryAllDecisionPoliciesResponse> => {
    const data = QueryAllDecisionPoliciesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "ListDecisionPolicies", data);
    return promise.then(data => QueryAllDecisionPoliciesResponse.decode(new BinaryReader(data)));
  };
  /* GetGroup queries a specific group by name. */
  getGroup = async (request: QueryGetGroupRequest): Promise<QueryGetGroupResponse> => {
    const data = QueryGetGroupRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "GetGroup", data);
    return promise.then(data => QueryGetGroupResponse.decode(new BinaryReader(data)));
  };
  /* ListGroups queries all groups. */
  listGroups = async (request: QueryAllGroupRequest = {
    pagination: undefined
  }): Promise<QueryAllGroupResponse> => {
    const data = QueryAllGroupRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "ListGroups", data);
    return promise.then(data => QueryAllGroupResponse.decode(new BinaryReader(data)));
  };
  /* GetCouncilMembers queries the members of a specific council. */
  getCouncilMembers = async (request: QueryGetCouncilMembersRequest): Promise<QueryGetCouncilMembersResponse> => {
    const data = QueryGetCouncilMembersRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "GetCouncilMembers", data);
    return promise.then(data => QueryGetCouncilMembersResponse.decode(new BinaryReader(data)));
  };
  /* GetProposal queries a specific proposal by ID. */
  getProposal = async (request: QueryGetProposalRequest): Promise<QueryGetProposalResponse> => {
    const data = QueryGetProposalRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "GetProposal", data);
    return promise.then(data => QueryGetProposalResponse.decode(new BinaryReader(data)));
  };
  /* ListProposals queries all proposals with optional filtering. */
  listProposals = async (request: QueryListProposalsRequest): Promise<QueryListProposalsResponse> => {
    const data = QueryListProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "ListProposals", data);
    return promise.then(data => QueryListProposalsResponse.decode(new BinaryReader(data)));
  };
  /* GetProposalVotes queries votes for a specific proposal. */
  getProposalVotes = async (request: QueryGetProposalVotesRequest): Promise<QueryGetProposalVotesResponse> => {
    const data = QueryGetProposalVotesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "GetProposalVotes", data);
    return promise.then(data => QueryGetProposalVotesResponse.decode(new BinaryReader(data)));
  };
  /* GetCategory queries a single shared content category by id. */
  getCategory = async (request: QueryGetCategoryRequest): Promise<QueryGetCategoryResponse> => {
    const data = QueryGetCategoryRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "GetCategory", data);
    return promise.then(data => QueryGetCategoryResponse.decode(new BinaryReader(data)));
  };
  /* ListCategory queries all shared content categories. */
  listCategory = async (request: QueryAllCategoryRequest = {
    pagination: undefined
  }): Promise<QueryAllCategoryResponse> => {
    const data = QueryAllCategoryRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.commons.v1.Query", "ListCategory", data);
    return promise.then(data => QueryAllCategoryResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getPolicyPermissions(request: QueryGetPolicyPermissionsRequest): Promise<QueryGetPolicyPermissionsResponse> {
      return queryService.getPolicyPermissions(request);
    },
    listPolicyPermissions(request?: QueryAllPolicyPermissionsRequest): Promise<QueryAllPolicyPermissionsResponse> {
      return queryService.listPolicyPermissions(request);
    },
    getDecisionPolicy(request: QueryGetDecisionPolicyRequest): Promise<QueryGetDecisionPolicyResponse> {
      return queryService.getDecisionPolicy(request);
    },
    listDecisionPolicies(request?: QueryAllDecisionPoliciesRequest): Promise<QueryAllDecisionPoliciesResponse> {
      return queryService.listDecisionPolicies(request);
    },
    getGroup(request: QueryGetGroupRequest): Promise<QueryGetGroupResponse> {
      return queryService.getGroup(request);
    },
    listGroups(request?: QueryAllGroupRequest): Promise<QueryAllGroupResponse> {
      return queryService.listGroups(request);
    },
    getCouncilMembers(request: QueryGetCouncilMembersRequest): Promise<QueryGetCouncilMembersResponse> {
      return queryService.getCouncilMembers(request);
    },
    getProposal(request: QueryGetProposalRequest): Promise<QueryGetProposalResponse> {
      return queryService.getProposal(request);
    },
    listProposals(request: QueryListProposalsRequest): Promise<QueryListProposalsResponse> {
      return queryService.listProposals(request);
    },
    getProposalVotes(request: QueryGetProposalVotesRequest): Promise<QueryGetProposalVotesResponse> {
      return queryService.getProposalVotes(request);
    },
    getCategory(request: QueryGetCategoryRequest): Promise<QueryGetCategoryResponse> {
      return queryService.getCategory(request);
    },
    listCategory(request?: QueryAllCategoryRequest): Promise<QueryAllCategoryResponse> {
      return queryService.listCategory(request);
    }
  };
};