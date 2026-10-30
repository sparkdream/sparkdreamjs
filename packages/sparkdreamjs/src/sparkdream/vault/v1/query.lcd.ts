//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryVaultByAddressRequest, QueryVaultByAddressResponse, QueryVaultsBySignerRequest, QueryVaultsBySignerResponse, QueryProposalsByVaultRequest, QueryProposalsByVaultResponse, QueryTallyRequest, QueryTallyResponse, QueryGetVaultRequest, QueryGetVaultResponse, QueryAllVaultRequest, QueryAllVaultResponse, QueryGetVaultProposalRequest, QueryGetVaultProposalResponse, QueryAllVaultProposalRequest, QueryAllVaultProposalResponse, QueryProposalsByProposerRequest, QueryProposalsByProposerResponse } from "./query";
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
    const endpoint = `sparkdream/vault/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* VaultByAddress Queries a list of VaultByAddress items. */
  vaultByAddress = async (params: QueryVaultByAddressRequest): Promise<QueryVaultByAddressResponse> => {
    const endpoint = `sparkdream/vault/v1/vault_by_address/${params.address}`;
    return await this.req.get<QueryVaultByAddressResponse>(endpoint);
  };
  /* VaultsBySigner Queries a list of VaultsBySigner items. */
  vaultsBySigner = async (params: QueryVaultsBySignerRequest): Promise<QueryVaultsBySignerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.invited !== "undefined") {
      options.params.invited = params.invited;
    }
    const endpoint = `sparkdream/vault/v1/vaults_by_signer/${params.address}`;
    return await this.req.get<QueryVaultsBySignerResponse>(endpoint, options);
  };
  /* ProposalsByVault Queries a list of ProposalsByVault items. */
  proposalsByVault = async (params: QueryProposalsByVaultRequest): Promise<QueryProposalsByVaultResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/vault/v1/proposals_by_vault/${params.vaultId}`;
    return await this.req.get<QueryProposalsByVaultResponse>(endpoint, options);
  };
  /* Tally Queries a list of Tally items. */
  tally = async (params: QueryTallyRequest): Promise<QueryTallyResponse> => {
    const endpoint = `sparkdream/vault/v1/tally/${params.proposalId}`;
    return await this.req.get<QueryTallyResponse>(endpoint);
  };
  /* ListVault Queries a list of Vault items. */
  getVault = async (params: QueryGetVaultRequest): Promise<QueryGetVaultResponse> => {
    const endpoint = `sparkdream/vault/v1/vault/${params.vaultId}`;
    return await this.req.get<QueryGetVaultResponse>(endpoint);
  };
  /* ListVault defines the ListVault RPC. */
  listVault = async (params: QueryAllVaultRequest = {
    pagination: undefined
  }): Promise<QueryAllVaultResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/vault/v1/vault`;
    return await this.req.get<QueryAllVaultResponse>(endpoint, options);
  };
  /* ListVaultProposal Queries a list of VaultProposal items. */
  getVaultProposal = async (params: QueryGetVaultProposalRequest): Promise<QueryGetVaultProposalResponse> => {
    const endpoint = `sparkdream/vault/v1/vault_proposal/${params.proposalId}`;
    return await this.req.get<QueryGetVaultProposalResponse>(endpoint);
  };
  /* ListVaultProposal defines the ListVaultProposal RPC. */
  listVaultProposal = async (params: QueryAllVaultProposalRequest = {
    pagination: undefined
  }): Promise<QueryAllVaultProposalResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/vault/v1/vault_proposal`;
    return await this.req.get<QueryAllVaultProposalResponse>(endpoint, options);
  };
  /* ProposalsByProposer lists the proposals a signer opened across every
   vault, so a client can show how much of the per-proposer pending cap is
   used. */
  proposalsByProposer = async (params: QueryProposalsByProposerRequest): Promise<QueryProposalsByProposerResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sparkdream/vault/v1/proposals_by_proposer/${params.proposer}`;
    return await this.req.get<QueryProposalsByProposerResponse>(endpoint, options);
  };
}