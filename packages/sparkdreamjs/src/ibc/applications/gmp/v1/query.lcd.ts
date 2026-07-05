//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryAccountAddressRequest, QueryAccountAddressResponse, QueryAccountIdentifierRequest, QueryAccountIdentifierResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* AccountAddress queries the interchain account address for a given client_id, sender, and salt.
   If the account is not registered, the address is computed deterministically */
  accountAddress = async (params: QueryAccountAddressRequest): Promise<QueryAccountAddressResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.salt !== "undefined") {
      options.params.salt = params.salt;
    }
    const endpoint = `ibc/apps/gmp/v1/clients/${params.clientId}/accounts/${params.sender}/${params.salt}`;
    return await this.req.get<QueryAccountAddressResponse>(endpoint, options);
  };
  /* AccountIdentifier queries the account identifier for a given interchain account address. */
  accountIdentifier = async (params: QueryAccountIdentifierRequest): Promise<QueryAccountIdentifierResponse> => {
    const endpoint = `ibc/apps/gmp/v1/accounts/${params.accountAddress}/identifier`;
    return await this.req.get<QueryAccountIdentifierResponse>(endpoint);
  };
}