//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryContentLicenseRequest, QueryContentLicenseResponse } from "./query";
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
    const endpoint = `sparkdream/sparkdream/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* ContentLicense returns the license every piece of content on this chain
   is published under (CC0 1.0: dedicated to the public domain), the
   dedication participants make by submitting content, and the licenses
   content bridged in from other networks must carry. Fixed in code, not a
   parameter: see docs/content-license.md. */
  contentLicense = async (_params: QueryContentLicenseRequest = {}): Promise<QueryContentLicenseResponse> => {
    const endpoint = `sparkdream/sparkdream/v1/content_license`;
    return await this.req.get<QueryContentLicenseResponse>(endpoint);
  };
}