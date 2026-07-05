//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service for the Deployments package. */
export interface Query {
  /** Deployments queries deployments. */
  deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
  /** Deployment queries deployment details. */
  deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
  /** Group queries group details. */
  group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
  /** Params returns the total set of minting parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Deployments queries deployments. */
  deployments = async (request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> => {
    const data = QueryDeploymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta4.Query", "Deployments", data);
    return promise.then(data => QueryDeploymentsResponse.decode(new BinaryReader(data)));
  };
  /* Deployment queries deployment details. */
  deployment = async (request: QueryDeploymentRequest): Promise<QueryDeploymentResponse> => {
    const data = QueryDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta4.Query", "Deployment", data);
    return promise.then(data => QueryDeploymentResponse.decode(new BinaryReader(data)));
  };
  /* Group queries group details. */
  group = async (request: QueryGroupRequest): Promise<QueryGroupResponse> => {
    const data = QueryGroupRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta4.Query", "Group", data);
    return promise.then(data => QueryGroupResponse.decode(new BinaryReader(data)));
  };
  /* Params returns the total set of minting parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta4.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> {
      return queryService.deployments(request);
    },
    deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse> {
      return queryService.deployment(request);
    },
    group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
      return queryService.group(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};