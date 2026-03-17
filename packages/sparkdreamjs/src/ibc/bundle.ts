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
import * as _418 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _419 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _420 from "./applications/rate_limiting/v1/tx.amino";
import * as _421 from "./applications/transfer/v1/tx.amino";
import * as _422 from "./core/channel/v1/tx.amino";
import * as _423 from "./core/channel/v2/tx.amino";
import * as _424 from "./core/client/v1/tx.amino";
import * as _425 from "./core/client/v2/tx.amino";
import * as _426 from "./core/connection/v1/tx.amino";
import * as _427 from "./lightclients/wasm/v1/tx.amino";
import * as _428 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _429 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _430 from "./applications/rate_limiting/v1/tx.registry";
import * as _431 from "./applications/transfer/v1/tx.registry";
import * as _432 from "./core/channel/v1/tx.registry";
import * as _433 from "./core/channel/v2/tx.registry";
import * as _434 from "./core/client/v1/tx.registry";
import * as _435 from "./core/client/v2/tx.registry";
import * as _436 from "./core/connection/v1/tx.registry";
import * as _437 from "./lightclients/wasm/v1/tx.registry";
import * as _438 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _439 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _440 from "./applications/rate_limiting/v1/query.lcd";
import * as _441 from "./applications/transfer/v1/query.lcd";
import * as _442 from "./core/channel/v1/query.lcd";
import * as _443 from "./core/channel/v2/query.lcd";
import * as _444 from "./core/client/v1/query.lcd";
import * as _445 from "./core/client/v2/query.lcd";
import * as _446 from "./core/connection/v1/query.lcd";
import * as _447 from "./lightclients/wasm/v1/query.lcd";
import * as _448 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _449 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _450 from "./applications/rate_limiting/v1/query.rpc.Query";
import * as _451 from "./applications/transfer/v1/query.rpc.Query";
import * as _452 from "./core/channel/v1/query.rpc.Query";
import * as _453 from "./core/channel/v2/query.rpc.Query";
import * as _454 from "./core/client/v1/query.rpc.Query";
import * as _455 from "./core/client/v2/query.rpc.Query";
import * as _456 from "./core/connection/v1/query.rpc.Query";
import * as _457 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _458 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _459 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _460 from "./applications/rate_limiting/v1/tx.rpc.msg";
import * as _461 from "./applications/transfer/v1/tx.rpc.msg";
import * as _462 from "./core/channel/v1/tx.rpc.msg";
import * as _463 from "./core/channel/v2/tx.rpc.msg";
import * as _464 from "./core/client/v1/tx.rpc.msg";
import * as _465 from "./core/client/v2/tx.rpc.msg";
import * as _466 from "./core/connection/v1/tx.rpc.msg";
import * as _467 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _541 from "./lcd";
import * as _542 from "./rpc.query";
import * as _543 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._122,
          ..._123,
          ..._124,
          ..._418,
          ..._428,
          ..._438,
          ..._448,
          ..._458
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
          ..._419,
          ..._429,
          ..._439,
          ..._449,
          ..._459
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
        ..._420,
        ..._430,
        ..._440,
        ..._450,
        ..._460
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
        ..._421,
        ..._431,
        ..._441,
        ..._451,
        ..._461
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
        ..._422,
        ..._432,
        ..._442,
        ..._452,
        ..._462
      };
      export const v2 = {
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._423,
        ..._433,
        ..._443,
        ..._453,
        ..._463
      };
    }
    export namespace client {
      export const v1 = {
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._424,
        ..._434,
        ..._444,
        ..._454,
        ..._464
      };
      export const v2 = {
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._161,
        ..._425,
        ..._435,
        ..._445,
        ..._455,
        ..._465
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
        ..._426,
        ..._436,
        ..._446,
        ..._456,
        ..._466
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
        ..._427,
        ..._437,
        ..._447,
        ..._457,
        ..._467
      };
    }
  }
  export const ClientFactory = {
    ..._541,
    ..._542,
    ..._543
  };
}