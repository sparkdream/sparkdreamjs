//@ts-nocheck
import * as _186 from "./abci/types";
import * as _187 from "./crypto/keys";
import * as _188 from "./crypto/proof";
import * as _189 from "./p2p/types";
import * as _190 from "./types/block";
import * as _191 from "./types/evidence";
import * as _192 from "./types/params";
import * as _193 from "./types/types";
import * as _194 from "./types/validator";
import * as _195 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._186
  };
  export const crypto = {
    ..._187,
    ..._188
  };
  export const p2p = {
    ..._189
  };
  export const types = {
    ..._190,
    ..._191,
    ..._192,
    ..._193,
    ..._194
  };
  export const version = {
    ..._195
  };
}