//@ts-nocheck
import * as _320 from "./abci/types";
import * as _321 from "./crypto/keys";
import * as _322 from "./crypto/proof";
import * as _323 from "./p2p/types";
import * as _324 from "./types/block";
import * as _325 from "./types/evidence";
import * as _326 from "./types/params";
import * as _327 from "./types/types";
import * as _328 from "./types/validator";
import * as _329 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._320
  };
  export const crypto = {
    ..._321,
    ..._322
  };
  export const p2p = {
    ..._323
  };
  export const types = {
    ..._324,
    ..._325,
    ..._326,
    ..._327,
    ..._328
  };
  export const version = {
    ..._329
  };
}