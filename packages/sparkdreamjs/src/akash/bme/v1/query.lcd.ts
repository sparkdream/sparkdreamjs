//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryVaultStateRequest, QueryVaultStateResponse, QueryStatusRequest, QueryStatusResponse, QueryLedgerRecordsRequest, QueryLedgerRecordsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params returns the module parameters */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `akash/bme/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* VaultState returns the current vault state */
  vaultState = async (_params: QueryVaultStateRequest = {}): Promise<QueryVaultStateResponse> => {
    const endpoint = `akash/bme/v1/vault`;
    return await this.req.get<QueryVaultStateResponse>(endpoint);
  };
  /* Status returns the current circuit breaker status */
  status = async (_params: QueryStatusRequest = {}): Promise<QueryStatusResponse> => {
    const endpoint = `akash/bme/v1/status`;
    return await this.req.get<QueryStatusResponse>(endpoint);
  };
  /* LedgerRecords queries ledger records with optional filters for status, source, denom, to_denom */
  ledgerRecords = async (params: QueryLedgerRecordsRequest): Promise<QueryLedgerRecordsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `akash/bme/v1/ledger`;
    return await this.req.get<QueryLedgerRecordsResponse>(endpoint, options);
  };
}