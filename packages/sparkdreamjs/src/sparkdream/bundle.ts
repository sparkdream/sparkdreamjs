//@ts-nocheck
import * as _173 from "./blog/genesis";
import * as _174 from "./blog/params";
import * as _175 from "./blog/post";
import * as _176 from "./blog/query";
import * as _177 from "./blog/tx";
import * as _178 from "./sparkdream/genesis";
import * as _179 from "./sparkdream/params";
import * as _180 from "./sparkdream/query";
import * as _181 from "./sparkdream/tx";
import * as _326 from "./blog/tx.amino";
import * as _327 from "./sparkdream/tx.amino";
import * as _328 from "./blog/tx.registry";
import * as _329 from "./sparkdream/tx.registry";
import * as _330 from "./blog/query.lcd";
import * as _331 from "./sparkdream/query.lcd";
import * as _332 from "./blog/query.rpc.Query";
import * as _333 from "./sparkdream/query.rpc.Query";
import * as _334 from "./blog/tx.rpc.msg";
import * as _335 from "./sparkdream/tx.rpc.msg";
import * as _342 from "./lcd";
import * as _343 from "./rpc.query";
import * as _344 from "./rpc.tx";
export namespace sparkdream {
  export const blog = {
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._326,
    ..._328,
    ..._330,
    ..._332,
    ..._334
  };
  export const sparkdream = {
    ..._178,
    ..._179,
    ..._180,
    ..._181,
    ..._327,
    ..._329,
    ..._331,
    ..._333,
    ..._335
  };
  export const ClientFactory = {
    ..._342,
    ..._343,
    ..._344
  };
}