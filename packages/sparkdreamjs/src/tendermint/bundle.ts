//@ts-nocheck
import * as _560 from "./abci/types";
import * as _561 from "./crypto/keys";
import * as _562 from "./crypto/proof";
import * as _563 from "./p2p/types";
import * as _564 from "./types/block";
import * as _565 from "./types/evidence";
import * as _566 from "./types/params";
import * as _567 from "./types/types";
import * as _568 from "./types/validator";
import * as _569 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._560
  };
  export const crypto = {
    ..._561,
    ..._562
  };
  export const p2p = {
    ..._563
  };
  export const types = {
    ..._564,
    ..._565,
    ..._566,
    ..._567,
    ..._568
  };
  export const version = {
    ..._569
  };
}