//@ts-nocheck
import * as _354 from "./abci/types";
import * as _355 from "./crypto/keys";
import * as _356 from "./crypto/proof";
import * as _357 from "./p2p/types";
import * as _358 from "./types/block";
import * as _359 from "./types/evidence";
import * as _360 from "./types/params";
import * as _361 from "./types/types";
import * as _362 from "./types/validator";
import * as _363 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._354
  };
  export const crypto = {
    ..._355,
    ..._356
  };
  export const p2p = {
    ..._357
  };
  export const types = {
    ..._358,
    ..._359,
    ..._360,
    ..._361,
    ..._362
  };
  export const version = {
    ..._363
  };
}