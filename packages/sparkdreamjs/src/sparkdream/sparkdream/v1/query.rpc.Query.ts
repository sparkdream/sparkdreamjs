//@ts-nocheck
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryContentLicenseRequest, QueryContentLicenseResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * ContentLicense returns the license every piece of content on this chain
   * is published under (CC0 1.0: dedicated to the public domain), the
   * dedication participants make by submitting content, and the licenses
   * content bridged in from other networks must carry. Fixed in code, not a
   * parameter: see docs/content-license.md.
   */
  contentLicense(request?: QueryContentLicenseRequest): Promise<QueryContentLicenseResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.sparkdream.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ContentLicense returns the license every piece of content on this chain
   is published under (CC0 1.0: dedicated to the public domain), the
   dedication participants make by submitting content, and the licenses
   content bridged in from other networks must carry. Fixed in code, not a
   parameter: see docs/content-license.md. */
  contentLicense = async (request: QueryContentLicenseRequest = {}): Promise<QueryContentLicenseResponse> => {
    const data = QueryContentLicenseRequest.encode(request).finish();
    const promise = this.rpc.request("sparkdream.sparkdream.v1.Query", "ContentLicense", data);
    return promise.then(data => QueryContentLicenseResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    contentLicense(request?: QueryContentLicenseRequest): Promise<QueryContentLicenseResponse> {
      return queryService.contentLicense(request);
    }
  };
};