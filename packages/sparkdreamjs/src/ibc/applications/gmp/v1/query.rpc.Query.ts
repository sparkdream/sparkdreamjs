//@ts-nocheck
import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountAddressRequest, QueryAccountAddressResponse, QueryAccountIdentifierRequest, QueryAccountIdentifierResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /**
   * AccountAddress queries the interchain account address for a given client_id, sender, and salt.
   * If the account is not registered, the address is computed deterministically
   */
  accountAddress(request: QueryAccountAddressRequest): Promise<QueryAccountAddressResponse>;
  /** AccountIdentifier queries the account identifier for a given interchain account address. */
  accountIdentifier(request: QueryAccountIdentifierRequest): Promise<QueryAccountIdentifierResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* AccountAddress queries the interchain account address for a given client_id, sender, and salt.
   If the account is not registered, the address is computed deterministically */
  accountAddress = async (request: QueryAccountAddressRequest): Promise<QueryAccountAddressResponse> => {
    const data = QueryAccountAddressRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.gmp.v1.Query", "AccountAddress", data);
    return promise.then(data => QueryAccountAddressResponse.decode(new BinaryReader(data)));
  };
  /* AccountIdentifier queries the account identifier for a given interchain account address. */
  accountIdentifier = async (request: QueryAccountIdentifierRequest): Promise<QueryAccountIdentifierResponse> => {
    const data = QueryAccountIdentifierRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.gmp.v1.Query", "AccountIdentifier", data);
    return promise.then(data => QueryAccountIdentifierResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accountAddress(request: QueryAccountAddressRequest): Promise<QueryAccountAddressResponse> {
      return queryService.accountAddress(request);
    },
    accountIdentifier(request: QueryAccountIdentifierRequest): Promise<QueryAccountIdentifierResponse> {
      return queryService.accountIdentifier(request);
    }
  };
};