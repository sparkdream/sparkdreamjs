//@ts-nocheck
import * as _538 from "./abci/types";
import * as _539 from "./crypto/keys";
import * as _540 from "./crypto/proof";
import * as _541 from "./p2p/types";
import * as _542 from "./types/block";
import * as _543 from "./types/evidence";
import * as _544 from "./types/params";
import * as _545 from "./types/types";
import * as _546 from "./types/validator";
import * as _547 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._538
  };
  export const crypto = {
    ..._539,
    ..._540
  };
  export const p2p = {
    ..._541
  };
  export const types = {
    ..._542,
    ..._543,
    ..._544,
    ..._545,
    ..._546
  };
  export const version = {
    ..._547
  };
}