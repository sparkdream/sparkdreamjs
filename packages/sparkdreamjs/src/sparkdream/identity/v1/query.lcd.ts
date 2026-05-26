//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryChainIdentityRequest, QueryChainIdentityResponse, QueryBondDenomRequest, QueryBondDenomResponse, QueryDreamDenomRequest, QueryDreamDenomResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* ChainIdentity returns the chain's immutable identity record. */
  chainIdentity = async (_params: QueryChainIdentityRequest = {}): Promise<QueryChainIdentityResponse> => {
    const endpoint = `sparkdream/identity/v1/chain-identity`;
    return await this.req.get<QueryChainIdentityResponse>(endpoint);
  };
  /* BondDenom is a convenience wrapper returning the native gas/staking denom. */
  bondDenom = async (_params: QueryBondDenomRequest = {}): Promise<QueryBondDenomResponse> => {
    const endpoint = `sparkdream/identity/v1/bond-denom`;
    return await this.req.get<QueryBondDenomResponse>(endpoint);
  };
  /* DreamDenom is a convenience wrapper returning the native DREAM denom. */
  dreamDenom = async (_params: QueryDreamDenomRequest = {}): Promise<QueryDreamDenomResponse> => {
    const endpoint = `sparkdream/identity/v1/dream-denom`;
    return await this.req.get<QueryDreamDenomResponse>(endpoint);
  };
}