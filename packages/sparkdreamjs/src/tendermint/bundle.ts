//@ts-nocheck
import * as _547 from "./abci/types";
import * as _548 from "./crypto/keys";
import * as _549 from "./crypto/proof";
import * as _550 from "./p2p/types";
import * as _551 from "./types/block";
import * as _552 from "./types/evidence";
import * as _553 from "./types/params";
import * as _554 from "./types/types";
import * as _555 from "./types/validator";
import * as _556 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._547
  };
  export const crypto = {
    ..._548,
    ..._549
  };
  export const p2p = {
    ..._550
  };
  export const types = {
    ..._551,
    ..._552,
    ..._553,
    ..._554,
    ..._555
  };
  export const version = {
    ..._556
  };
}