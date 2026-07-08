//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { RecoveredSinceDowntimeOfLengthRequest, RecoveredSinceDowntimeOfLengthResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* RecoveredSinceDowntimeOfLength queries if the chain has recovered for a specified duration
   since experiencing downtime of a given length */
  recoveredSinceDowntimeOfLength = async (params: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.downtime !== "undefined") {
      options.params.downtime = params.downtime;
    }
    if (typeof params?.recovery !== "undefined") {
      options.params.recovery = params.recovery;
    }
    const endpoint = `akash/downtime-detector/v1beta1/RecoveredSinceDowntimeOfLength`;
    return await this.req.get<RecoveredSinceDowntimeOfLengthResponse>(endpoint, options);
  };
}