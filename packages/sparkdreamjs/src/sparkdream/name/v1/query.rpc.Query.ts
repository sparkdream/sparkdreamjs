//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryResolveRequest, QueryResolveResponse, QueryReverseResolveRequest, QueryReverseResolveResponse, QueryNamesRequest, QueryNamesResponse, QueryGetDisputeRequest, QueryGetDisputeResponse, QueryAllDisputeRequest, QueryAllDisputeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Resolve Queries a list of Resolve items. */
  resolve(request: QueryResolveRequest): Promise<QueryResolveResponse>;
  /** ReverseResolve Queries a list of ReverseResolve items. */
  reverseResolve(request: QueryReverseResolveRequest): Promise<QueryReverseResolveResponse>;
  /** Names Queries a list of Names items. */
  names(request: QueryNamesRequest): Promise<QueryNamesResponse>;
  /** ListDispute Queries a list of Dispute items. */
  getDispute(request: QueryGetDisputeRequest): Promise<QueryGetDisputeResponse>;
  /** ListDispute defines the ListDispute RPC. */
  listDispute(request?: QueryAllDisputeRequest): Promise<QueryAllDisputeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Resolve Queries a list of Resolve items. */
  resolve = async (request: QueryResolveRequest): Promise<QueryResolveResponse> => {
    const data = QueryResolveRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Query", "Resolve", data);
    return promise.then(data => QueryResolveResponse.decode(new BinaryReader(data)));
  };
  /* ReverseResolve Queries a list of ReverseResolve items. */
  reverseResolve = async (request: QueryReverseResolveRequest): Promise<QueryReverseResolveResponse> => {
    const data = QueryReverseResolveRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Query", "ReverseResolve", data);
    return promise.then(data => QueryReverseResolveResponse.decode(new BinaryReader(data)));
  };
  /* Names Queries a list of Names items. */
  names = async (request: QueryNamesRequest): Promise<QueryNamesResponse> => {
    const data = QueryNamesRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Query", "Names", data);
    return promise.then(data => QueryNamesResponse.decode(new BinaryReader(data)));
  };
  /* ListDispute Queries a list of Dispute items. */
  getDispute = async (request: QueryGetDisputeRequest): Promise<QueryGetDisputeResponse> => {
    const data = QueryGetDisputeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Query", "GetDispute", data);
    return promise.then(data => QueryGetDisputeResponse.decode(new BinaryReader(data)));
  };
  /* ListDispute defines the ListDispute RPC. */
  listDispute = async (request: QueryAllDisputeRequest = {
    pagination: undefined
  }): Promise<QueryAllDisputeResponse> => {
    const data = QueryAllDisputeRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.name.v1.Query", "ListDispute", data);
    return promise.then(data => QueryAllDisputeResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    resolve(request: QueryResolveRequest): Promise<QueryResolveResponse> {
      return queryService.resolve(request);
    },
    reverseResolve(request: QueryReverseResolveRequest): Promise<QueryReverseResolveResponse> {
      return queryService.reverseResolve(request);
    },
    names(request: QueryNamesRequest): Promise<QueryNamesResponse> {
      return queryService.names(request);
    },
    getDispute(request: QueryGetDisputeRequest): Promise<QueryGetDisputeResponse> {
      return queryService.getDispute(request);
    },
    listDispute(request?: QueryAllDisputeRequest): Promise<QueryAllDisputeResponse> {
      return queryService.listDispute(request);
    }
  };
};