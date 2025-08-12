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
import * as _284 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _285 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _286 from "./applications/rate_limiting/v1/tx.amino";
import * as _287 from "./applications/transfer/v1/tx.amino";
import * as _288 from "./core/channel/v1/tx.amino";
import * as _289 from "./core/channel/v2/tx.amino";
import * as _290 from "./core/client/v1/tx.amino";
import * as _291 from "./core/client/v2/tx.amino";
import * as _292 from "./core/connection/v1/tx.amino";
import * as _293 from "./lightclients/wasm/v1/tx.amino";
import * as _294 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _295 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _296 from "./applications/rate_limiting/v1/tx.registry";
import * as _297 from "./applications/transfer/v1/tx.registry";
import * as _298 from "./core/channel/v1/tx.registry";
import * as _299 from "./core/channel/v2/tx.registry";
import * as _300 from "./core/client/v1/tx.registry";
import * as _301 from "./core/client/v2/tx.registry";
import * as _302 from "./core/connection/v1/tx.registry";
import * as _303 from "./lightclients/wasm/v1/tx.registry";
import * as _304 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _305 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _306 from "./applications/rate_limiting/v1/query.lcd";
import * as _307 from "./applications/transfer/v1/query.lcd";
import * as _308 from "./core/channel/v1/query.lcd";
import * as _309 from "./core/channel/v2/query.lcd";
import * as _310 from "./core/client/v1/query.lcd";
import * as _311 from "./core/client/v2/query.lcd";
import * as _312 from "./core/connection/v1/query.lcd";
import * as _313 from "./lightclients/wasm/v1/query.lcd";
import * as _314 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _315 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _316 from "./applications/rate_limiting/v1/query.rpc.Query";
import * as _317 from "./applications/transfer/v1/query.rpc.Query";
import * as _318 from "./core/channel/v1/query.rpc.Query";
import * as _319 from "./core/channel/v2/query.rpc.Query";
import * as _320 from "./core/client/v1/query.rpc.Query";
import * as _321 from "./core/client/v2/query.rpc.Query";
import * as _322 from "./core/connection/v1/query.rpc.Query";
import * as _323 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _324 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _325 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _326 from "./applications/rate_limiting/v1/tx.rpc.msg";
import * as _327 from "./applications/transfer/v1/tx.rpc.msg";
import * as _328 from "./core/channel/v1/tx.rpc.msg";
import * as _329 from "./core/channel/v2/tx.rpc.msg";
import * as _330 from "./core/client/v1/tx.rpc.msg";
import * as _331 from "./core/client/v2/tx.rpc.msg";
import * as _332 from "./core/connection/v1/tx.rpc.msg";
import * as _333 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _347 from "./lcd";
import * as _348 from "./rpc.query";
import * as _349 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._122,
          ..._123,
          ..._124,
          ..._284,
          ..._294,
          ..._304,
          ..._314,
          ..._324
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
          ..._285,
          ..._295,
          ..._305,
          ..._315,
          ..._325
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
        ..._286,
        ..._296,
        ..._306,
        ..._316,
        ..._326
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
        ..._287,
        ..._297,
        ..._307,
        ..._317,
        ..._327
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
        ..._288,
        ..._298,
        ..._308,
        ..._318,
        ..._328
      };
      export const v2 = {
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._289,
        ..._299,
        ..._309,
        ..._319,
        ..._329
      };
    }
    export namespace client {
      export const v1 = {
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._290,
        ..._300,
        ..._310,
        ..._320,
        ..._330
      };
      export const v2 = {
        ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._161,
        ..._291,
        ..._301,
        ..._311,
        ..._321,
        ..._331
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
        ..._292,
        ..._302,
        ..._312,
        ..._322,
        ..._332
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
        ..._293,
        ..._303,
        ..._313,
        ..._323,
        ..._333
      };
    }
  }
  export const ClientFactory = {
    ..._347,
    ..._348,
    ..._349
  };
}