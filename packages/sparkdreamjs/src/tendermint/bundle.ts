//@ts-nocheck
import * as _475 from "./abci/types";
import * as _476 from "./crypto/keys";
import * as _477 from "./crypto/proof";
import * as _478 from "./p2p/types";
import * as _479 from "./types/block";
import * as _480 from "./types/evidence";
import * as _481 from "./types/params";
import * as _482 from "./types/types";
import * as _483 from "./types/validator";
import * as _484 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._475
  };
  export const crypto = {
    ..._476,
    ..._477
  };
  export const p2p = {
    ..._478
  };
  export const types = {
    ..._479,
    ..._480,
    ..._481,
    ..._482,
    ..._483
  };
  export const version = {
    ..._484
  };
}