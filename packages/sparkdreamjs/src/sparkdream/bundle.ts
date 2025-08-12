//@ts-nocheck
import * as _175 from "./blog/module/v1/module";
import * as _176 from "./blog/v1/genesis";
import * as _177 from "./blog/v1/params";
import * as _178 from "./blog/v1/post";
import * as _179 from "./blog/v1/query";
import * as _180 from "./blog/v1/tx";
import * as _181 from "./sparkdream/module/v1/module";
import * as _182 from "./sparkdream/v1/genesis";
import * as _183 from "./sparkdream/v1/params";
import * as _184 from "./sparkdream/v1/query";
import * as _185 from "./sparkdream/v1/tx";
import * as _334 from "./blog/v1/tx.amino";
import * as _335 from "./sparkdream/v1/tx.amino";
import * as _336 from "./blog/v1/tx.registry";
import * as _337 from "./sparkdream/v1/tx.registry";
import * as _338 from "./blog/v1/query.lcd";
import * as _339 from "./sparkdream/v1/query.lcd";
import * as _340 from "./blog/v1/query.rpc.Query";
import * as _341 from "./sparkdream/v1/query.rpc.Query";
import * as _342 from "./blog/v1/tx.rpc.msg";
import * as _343 from "./sparkdream/v1/tx.rpc.msg";
import * as _350 from "./lcd";
import * as _351 from "./rpc.query";
import * as _352 from "./rpc.tx";
export namespace sparkdream {
  export namespace blog {
    export namespace module {
      export const v1 = {
        ..._175
      };
    }
    export const v1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._334,
      ..._336,
      ..._338,
      ..._340,
      ..._342
    };
  }
  export namespace sparkdream {
    export namespace module {
      export const v1 = {
        ..._181
      };
    }
    export const v1 = {
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._335,
      ..._337,
      ..._339,
      ..._341,
      ..._343
    };
  }
  export const ClientFactory = {
    ..._350,
    ..._351,
    ..._352
  };
}