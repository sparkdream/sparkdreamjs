//@ts-nocheck
import * as _536 from "./abci/types";
import * as _537 from "./crypto/keys";
import * as _538 from "./crypto/proof";
import * as _539 from "./p2p/types";
import * as _540 from "./types/block";
import * as _541 from "./types/evidence";
import * as _542 from "./types/params";
import * as _543 from "./types/types";
import * as _544 from "./types/validator";
import * as _545 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._536
  };
  export const crypto = {
    ..._537,
    ..._538
  };
  export const p2p = {
    ..._539
  };
  export const types = {
    ..._540,
    ..._541,
    ..._542,
    ..._543,
    ..._544
  };
  export const version = {
    ..._545
  };
}