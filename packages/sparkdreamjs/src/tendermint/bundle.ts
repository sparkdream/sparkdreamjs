//@ts-nocheck
import * as _566 from "./abci/types";
import * as _567 from "./crypto/keys";
import * as _568 from "./crypto/proof";
import * as _569 from "./p2p/types";
import * as _570 from "./types/block";
import * as _571 from "./types/evidence";
import * as _572 from "./types/params";
import * as _573 from "./types/types";
import * as _574 from "./types/validator";
import * as _575 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._566
  };
  export const crypto = {
    ..._567,
    ..._568
  };
  export const p2p = {
    ..._569
  };
  export const types = {
    ..._570,
    ..._571,
    ..._572,
    ..._573,
    ..._574
  };
  export const version = {
    ..._575
  };
}