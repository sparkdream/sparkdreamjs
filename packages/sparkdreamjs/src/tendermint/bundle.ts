//@ts-nocheck
import * as _330 from "./abci/types";
import * as _331 from "./crypto/keys";
import * as _332 from "./crypto/proof";
import * as _333 from "./p2p/types";
import * as _334 from "./types/block";
import * as _335 from "./types/evidence";
import * as _336 from "./types/params";
import * as _337 from "./types/types";
import * as _338 from "./types/validator";
import * as _339 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._330
  };
  export const crypto = {
    ..._331,
    ..._332
  };
  export const p2p = {
    ..._333
  };
  export const types = {
    ..._334,
    ..._335,
    ..._336,
    ..._337,
    ..._338
  };
  export const version = {
    ..._339
  };
}