//@ts-nocheck
import * as _122 from "./applications/interchain_accounts/controller/v1/controller";
import * as _123 from "./applications/interchain_accounts/controller/v1/query";
import * as _124 from "./applications/interchain_accounts/controller/v1/tx";
import * as _125 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _126 from "./applications/interchain_accounts/host/v1/host";
import * as _127 from "./applications/interchain_accounts/host/v1/query";
import * as _128 from "./applications/interchain_accounts/host/v1/tx";
import * as _129 from "./applications/interchain_accounts/v1/account";
import * as _130 from "./applications/interchain_accounts/v1/metadata";
import * as _131 from "./applications/interchain_accounts/v1/packet";
import * as _132 from "./applications/packet_forward_middleware/v1/genesis";
import * as _133 from "./applications/rate_limiting/v1/genesis";
import * as _134 from "./applications/rate_limiting/v1/query";
import * as _135 from "./applications/rate_limiting/v1/rate_limiting";
import * as _136 from "./applications/rate_limiting/v1/tx";
import * as _137 from "./applications/transfer/v1/authz";
import * as _138 from "./applications/transfer/v1/denomtrace";
import * as _139 from "./applications/transfer/v1/genesis";
import * as _140 from "./applications/transfer/v1/packet";
import * as _141 from "./applications/transfer/v1/query";
import * as _142 from "./applications/transfer/v1/token";
import * as _143 from "./applications/transfer/v1/transfer";
import * as _144 from "./applications/transfer/v1/tx";
import * as _145 from "./core/channel/v1/channel";
import * as _146 from "./core/channel/v1/genesis";
import * as _147 from "./core/channel/v1/query";
import * as _148 from "./core/channel/v1/tx";
import * as _149 from "./core/channel/v2/genesis";
import * as _150 from "./core/channel/v2/packet";
import * as _151 from "./core/channel/v2/query";
import * as _152 from "./core/channel/v2/tx";
import * as _153 from "./core/client/v1/client";
import * as _154 from "./core/client/v1/genesis";
import * as _155 from "./core/client/v1/query";
import * as _156 from "./core/client/v1/tx";
import * as _157 from "./core/client/v2/config";
import * as _158 from "./core/client/v2/counterparty";
import * as _159 from "./core/client/v2/genesis";
import * as _160 from "./core/client/v2/query";
import * as _161 from "./core/client/v2/tx";
import * as _162 from "./core/commitment/v1/commitment";
import * as _163 from "./core/commitment/v2/commitment";
import * as _164 from "./core/connection/v1/connection";
import * as _165 from "./core/connection/v1/genesis";
import * as _166 from "./core/connection/v1/query";
import * as _167 from "./core/connection/v1/tx";
import * as _168 from "./lightclients/solomachine/v2/solomachine";
import * as _169 from "./lightclients/solomachine/v3/solomachine";
import * as _170 from "./lightclients/tendermint/v1/tendermint";
import * as _171 from "./lightclients/wasm/v1/genesis";
import * as _172 from "./lightclients/wasm/v1/query";
import * as _173 from "./lightclients/wasm/v1/tx";
import * as _174 from "./lightclients/wasm/v1/wasm";
import * as _453 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _454 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _455 from "./applications/rate_limiting/v1/tx.amino";
import * as _456 from "./applications/transfer/v1/tx.amino";
import * as _457 from "./core/channel/v1/tx.amino";
import * as _458 from "./core/channel/v2/tx.amino";
import * as _459 from "./core/client/v1/tx.amino";
import * as _460 from "./core/client/v2/tx.amino";
import * as _461 from "./core/connection/v1/tx.amino";
import * as _462 from "./lightclients/wasm/v1/tx.amino";
import * as _463 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _464 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _465 from "./applications/rate_limiting/v1/tx.registry";
import * as _466 from "./applications/transfer/v1/tx.registry";
import * as _467 from "./core/channel/v1/tx.registry";
import * as _468 from "./core/channel/v2/tx.registry";
import * as _469 from "./core/client/v1/tx.registry";
import * as _470 from "./core/client/v2/tx.registry";
import * as _471 from "./core/connection/v1/tx.registry";
import * as _472 from "./lightclients/wasm/v1/tx.registry";
import * as _473 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _474 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _475 from "./applications/rate_limiting/v1/query.lcd";
import * as _476 from "./applications/transfer/v1/query.lcd";
import * as _477 from "./core/channel/v1/query.lcd";
import * as _478 from "./core/channel/v2/query.lcd";
import * as _479 from "./core/client/v1/query.lcd";
import * as _480 from "./core/client/v2/query.lcd";
import * as _481 from "./core/connection/v1/query.lcd";
import * as _482 from "./lightclients/wasm/v1/query.lcd";
import * as _483 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _484 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _485 from "./applications/rate_limiting/v1/query.rpc.Query";
import * as _486 from "./applications/transfer/v1/query.rpc.Query";
import * as _487 from "./core/channel/v1/query.rpc.Query";
import * as _488 from "./core/channel/v2/query.rpc.Query";
import * as _489 from "./core/client/v1/query.rpc.Query";
import * as _490 from "./core/client/v2/query.rpc.Query";
import * as _491 from "./core/connection/v1/query.rpc.Query";
import * as _492 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _493 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _494 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _495 from "./applications/rate_limiting/v1/tx.rpc.msg";
import * as _496 from "./applications/transfer/v1/tx.rpc.msg";
import * as _497 from "./core/channel/v1/tx.rpc.msg";
import * as _498 from "./core/channel/v2/tx.rpc.msg";
import * as _499 from "./core/client/v1/tx.rpc.msg";
import * as _500 from "./core/client/v2/tx.rpc.msg";
import * as _501 from "./core/connection/v1/tx.rpc.msg";
import * as _502 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _593 from "./lcd";
import * as _594 from "./rpc.query";
import * as _595 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._122,
          ..._123,
          ..._124,
          ..._453,
          ..._463,
          ..._473,
          ..._483,
          ..._493
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._125
        };
      }
      export namespace host {
        export const v1 = {
          ..._126,
          ..._127,
          ..._128,
          ..._454,
          ..._464,
          ..._474,
          ..._484,
          ..._494
        };
      }
      export const v1 = {
        ..._129,
        ..._130,
        ..._131
      };
    }
    export namespace packet_forward_middleware {
      export const v1 = {
        ..._132
      };
    }
    export namespace rate_limiting {
      export const v1 = {
        ..._133,
        ..._134,
        ..._135,
        ..._136,
        ..._455,
        ..._465,
        ..._475,
        ..._485,
        ..._495
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._137,
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._142,
        ..._143,
        ..._144,
        ..._456,
        ..._466,
        ..._476,
        ..._486,
        ..._496
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._145,
        ..._146,
        ..._147,
        ..._148,
        ..._457,
        ..._467,
        ..._477,
        ..._487,
        ..._497
      };
      export const v2 = {
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._458,
        ..._468,
        ..._478,
        ..._488,
        ..._498
      };
    }
    export namespace client {
      export const v1 = {
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._459,
        ..._469,
        ..._479,
        ..._489,
        ..._499
      };
      export const v2 = {
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._161,
        ..._460,
        ..._470,
        ..._480,
        ..._490,
        ..._500
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._162
      };
      export const v2 = {
        ..._163
      };
    }
    export namespace connection {
      export const v1 = {
        ..._164,
        ..._165,
        ..._166,
        ..._167,
        ..._461,
        ..._471,
        ..._481,
        ..._491,
        ..._501
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._168
      };
      export const v3 = {
        ..._169
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._170
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._171,
        ..._172,
        ..._173,
        ..._174,
        ..._462,
        ..._472,
        ..._482,
        ..._492,
        ..._502
      };
    }
  }
  export const ClientFactory = {
    ..._593,
    ..._594,
    ..._595
  };
}