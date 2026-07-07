//@ts-nocheck
import * as _483 from "./abci/types";
import * as _484 from "./crypto/keys";
import * as _485 from "./crypto/proof";
import * as _486 from "./p2p/types";
import * as _487 from "./types/block";
import * as _488 from "./types/evidence";
import * as _489 from "./types/params";
import * as _490 from "./types/types";
import * as _491 from "./types/validator";
import * as _492 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._483
  };
  export const crypto = {
    ..._484,
    ..._485
  };
  export const p2p = {
    ..._486
  };
  export const types = {
    ..._487,
    ..._488,
    ..._489,
    ..._490,
    ..._491
  };
  export const version = {
    ..._492
  };
}