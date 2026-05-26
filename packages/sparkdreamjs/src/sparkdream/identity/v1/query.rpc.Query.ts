//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryChainIdentityRequest, QueryChainIdentityResponse, QueryBondDenomRequest, QueryBondDenomResponse, QueryDreamDenomRequest, QueryDreamDenomResponse } from "./query";
/** Query defines the gRPC querier service. Identity has no Msg service:
 the ChainIdentity is genesis-only immutable and there is no on-chain
 mutation path. */
export interface Query {
  /** ChainIdentity returns the chain's immutable identity record. */
  chainIdentity(request?: QueryChainIdentityRequest): Promise<QueryChainIdentityResponse>;
  /** BondDenom is a convenience wrapper returning the native gas/staking denom. */
  bondDenom(request?: QueryBondDenomRequest): Promise<QueryBondDenomResponse>;
  /** DreamDenom is a convenience wrapper returning the native DREAM denom. */
  dreamDenom(request?: QueryDreamDenomRequest): Promise<QueryDreamDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ChainIdentity returns the chain's immutable identity record. */
  chainIdentity = async (request: QueryChainIdentityRequest = {}): Promise<QueryChainIdentityResponse> => {
    const data = QueryChainIdentityRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.identity.v1.Query", "ChainIdentity", data);
    return promise.then(data => QueryChainIdentityResponse.decode(new BinaryReader(data)));
  };
  /* BondDenom is a convenience wrapper returning the native gas/staking denom. */
  bondDenom = async (request: QueryBondDenomRequest = {}): Promise<QueryBondDenomResponse> => {
    const data = QueryBondDenomRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.identity.v1.Query", "BondDenom", data);
    return promise.then(data => QueryBondDenomResponse.decode(new BinaryReader(data)));
  };
  /* DreamDenom is a convenience wrapper returning the native DREAM denom. */
  dreamDenom = async (request: QueryDreamDenomRequest = {}): Promise<QueryDreamDenomResponse> => {
    const data = QueryDreamDenomRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.identity.v1.Query", "DreamDenom", data);
    return promise.then(data => QueryDreamDenomResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    chainIdentity(request?: QueryChainIdentityRequest): Promise<QueryChainIdentityResponse> {
      return queryService.chainIdentity(request);
    },
    bondDenom(request?: QueryBondDenomRequest): Promise<QueryBondDenomResponse> {
      return queryService.bondDenom(request);
    },
    dreamDenom(request?: QueryDreamDenomRequest): Promise<QueryDreamDenomResponse> {
      return queryService.dreamDenom(request);
    }
  };
};