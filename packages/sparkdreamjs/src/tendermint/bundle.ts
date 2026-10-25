//@ts-nocheck
import * as _556 from "./abci/types";
import * as _557 from "./crypto/keys";
import * as _558 from "./crypto/proof";
import * as _559 from "./p2p/types";
import * as _560 from "./types/block";
import * as _561 from "./types/evidence";
import * as _562 from "./types/params";
import * as _563 from "./types/types";
import * as _564 from "./types/validator";
import * as _565 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._556
  };
  export const crypto = {
    ..._557,
    ..._558
  };
  export const p2p = {
    ..._559
  };
  export const types = {
    ..._560,
    ..._561,
    ..._562,
    ..._563,
    ..._564
  };
  export const version = {
    ..._565
  };
}