//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryVaultByAddressRequest, QueryVaultByAddressResponse, QueryVaultsBySignerRequest, QueryVaultsBySignerResponse, QueryProposalsByVaultRequest, QueryProposalsByVaultResponse, QueryTallyRequest, QueryTallyResponse, QueryGetVaultRequest, QueryGetVaultResponse, QueryAllVaultRequest, QueryAllVaultResponse, QueryGetVaultProposalRequest, QueryGetVaultProposalResponse, QueryAllVaultProposalRequest, QueryAllVaultProposalResponse, QueryProposalsByProposerRequest, QueryProposalsByProposerResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** VaultByAddress Queries a list of VaultByAddress items. */
  vaultByAddress(request: QueryVaultByAddressRequest): Promise<QueryVaultByAddressResponse>;
  /** VaultsBySigner Queries a list of VaultsBySigner items. */
  vaultsBySigner(request: QueryVaultsBySignerRequest): Promise<QueryVaultsBySignerResponse>;
  /** ProposalsByVault Queries a list of ProposalsByVault items. */
  proposalsByVault(request: QueryProposalsByVaultRequest): Promise<QueryProposalsByVaultResponse>;
  /** Tally Queries a list of Tally items. */
  tally(request: QueryTallyRequest): Promise<QueryTallyResponse>;
  /** ListVault Queries a list of Vault items. */
  getVault(request: QueryGetVaultRequest): Promise<QueryGetVaultResponse>;
  /** ListVault defines the ListVault RPC. */
  listVault(request?: QueryAllVaultRequest): Promise<QueryAllVaultResponse>;
  /** ListVaultProposal Queries a list of VaultProposal items. */
  getVaultProposal(request: QueryGetVaultProposalRequest): Promise<QueryGetVaultProposalResponse>;
  /** ListVaultProposal defines the ListVaultProposal RPC. */
  listVaultProposal(request?: QueryAllVaultProposalRequest): Promise<QueryAllVaultProposalResponse>;
  /**
   * ProposalsByProposer lists the proposals a signer opened across every
   * vault, so a client can show how much of the per-proposer pending cap is
   * used.
   */
  proposalsByProposer(request: QueryProposalsByProposerRequest): Promise<QueryProposalsByProposerResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* VaultByAddress Queries a list of VaultByAddress items. */
  vaultByAddress = async (request: QueryVaultByAddressRequest): Promise<QueryVaultByAddressResponse> => {
    const data = QueryVaultByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Query", "VaultByAddress", data);
    return promise.then(data => QueryVaultByAddressResponse.decode(new BinaryReader(data)));
  };
  /* VaultsBySigner Queries a list of VaultsBySigner items. */
  vaultsBySigner = async (request: QueryVaultsBySignerRequest): Promise<QueryVaultsBySignerResponse> => {
    const data = QueryVaultsBySignerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Query", "VaultsBySigner", data);
    return promise.then(data => QueryVaultsBySignerResponse.decode(new BinaryReader(data)));
  };
  /* ProposalsByVault Queries a list of ProposalsByVault items. */
  proposalsByVault = async (request: QueryProposalsByVaultRequest): Promise<QueryProposalsByVaultResponse> => {
    const data = QueryProposalsByVaultRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Query", "ProposalsByVault", data);
    return promise.then(data => QueryProposalsByVaultResponse.decode(new BinaryReader(data)));
  };
  /* Tally Queries a list of Tally items. */
  tally = async (request: QueryTallyRequest): Promise<QueryTallyResponse> => {
    const data = QueryTallyRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Query", "Tally", data);
    return promise.then(data => QueryTallyResponse.decode(new BinaryReader(data)));
  };
  /* ListVault Queries a list of Vault items. */
  getVault = async (request: QueryGetVaultRequest): Promise<QueryGetVaultResponse> => {
    const data = QueryGetVaultRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Query", "GetVault", data);
    return promise.then(data => QueryGetVaultResponse.decode(new BinaryReader(data)));
  };
  /* ListVault defines the ListVault RPC. */
  listVault = async (request: QueryAllVaultRequest = {
    pagination: undefined
  }): Promise<QueryAllVaultResponse> => {
    const data = QueryAllVaultRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Query", "ListVault", data);
    return promise.then(data => QueryAllVaultResponse.decode(new BinaryReader(data)));
  };
  /* ListVaultProposal Queries a list of VaultProposal items. */
  getVaultProposal = async (request: QueryGetVaultProposalRequest): Promise<QueryGetVaultProposalResponse> => {
    const data = QueryGetVaultProposalRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Query", "GetVaultProposal", data);
    return promise.then(data => QueryGetVaultProposalResponse.decode(new BinaryReader(data)));
  };
  /* ListVaultProposal defines the ListVaultProposal RPC. */
  listVaultProposal = async (request: QueryAllVaultProposalRequest = {
    pagination: undefined
  }): Promise<QueryAllVaultProposalResponse> => {
    const data = QueryAllVaultProposalRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Query", "ListVaultProposal", data);
    return promise.then(data => QueryAllVaultProposalResponse.decode(new BinaryReader(data)));
  };
  /* ProposalsByProposer lists the proposals a signer opened across every
   vault, so a client can show how much of the per-proposer pending cap is
   used. */
  proposalsByProposer = async (request: QueryProposalsByProposerRequest): Promise<QueryProposalsByProposerResponse> => {
    const data = QueryProposalsByProposerRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.vault.v1.Query", "ProposalsByProposer", data);
    return promise.then(data => QueryProposalsByProposerResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    vaultByAddress(request: QueryVaultByAddressRequest): Promise<QueryVaultByAddressResponse> {
      return queryService.vaultByAddress(request);
    },
    vaultsBySigner(request: QueryVaultsBySignerRequest): Promise<QueryVaultsBySignerResponse> {
      return queryService.vaultsBySigner(request);
    },
    proposalsByVault(request: QueryProposalsByVaultRequest): Promise<QueryProposalsByVaultResponse> {
      return queryService.proposalsByVault(request);
    },
    tally(request: QueryTallyRequest): Promise<QueryTallyResponse> {
      return queryService.tally(request);
    },
    getVault(request: QueryGetVaultRequest): Promise<QueryGetVaultResponse> {
      return queryService.getVault(request);
    },
    listVault(request?: QueryAllVaultRequest): Promise<QueryAllVaultResponse> {
      return queryService.listVault(request);
    },
    getVaultProposal(request: QueryGetVaultProposalRequest): Promise<QueryGetVaultProposalResponse> {
      return queryService.getVaultProposal(request);
    },
    listVaultProposal(request?: QueryAllVaultProposalRequest): Promise<QueryAllVaultProposalResponse> {
      return queryService.listVaultProposal(request);
    },
    proposalsByProposer(request: QueryProposalsByProposerRequest): Promise<QueryProposalsByProposerResponse> {
      return queryService.proposalsByProposer(request);
    }
  };
};