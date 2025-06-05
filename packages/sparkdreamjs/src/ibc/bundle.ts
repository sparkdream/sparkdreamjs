//@ts-nocheck
import * as _124 from "./applications/interchain_accounts/controller/v1/controller";
import * as _125 from "./applications/interchain_accounts/controller/v1/query";
import * as _126 from "./applications/interchain_accounts/controller/v1/tx";
import * as _127 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _128 from "./applications/interchain_accounts/host/v1/host";
import * as _129 from "./applications/interchain_accounts/host/v1/query";
import * as _130 from "./applications/interchain_accounts/host/v1/tx";
import * as _131 from "./applications/interchain_accounts/v1/account";
import * as _132 from "./applications/interchain_accounts/v1/metadata";
import * as _133 from "./applications/interchain_accounts/v1/packet";
import * as _134 from "./applications/packet_forward_middleware/v1/genesis";
import * as _135 from "./applications/transfer/v1/authz";
import * as _136 from "./applications/transfer/v1/denomtrace";
import * as _137 from "./applications/transfer/v1/genesis";
import * as _138 from "./applications/transfer/v1/packet";
import * as _139 from "./applications/transfer/v1/query";
import * as _140 from "./applications/transfer/v1/token";
import * as _141 from "./applications/transfer/v1/transfer";
import * as _142 from "./applications/transfer/v1/tx";
import * as _143 from "./core/channel/v1/channel";
import * as _144 from "./core/channel/v1/genesis";
import * as _145 from "./core/channel/v1/query";
import * as _146 from "./core/channel/v1/tx";
import * as _147 from "./core/channel/v2/genesis";
import * as _148 from "./core/channel/v2/packet";
import * as _149 from "./core/channel/v2/query";
import * as _150 from "./core/channel/v2/tx";
import * as _151 from "./core/client/v1/client";
import * as _152 from "./core/client/v1/genesis";
import * as _153 from "./core/client/v1/query";
import * as _154 from "./core/client/v1/tx";
import * as _155 from "./core/client/v2/config";
import * as _156 from "./core/client/v2/counterparty";
import * as _157 from "./core/client/v2/genesis";
import * as _158 from "./core/client/v2/query";
import * as _159 from "./core/client/v2/tx";
import * as _160 from "./core/commitment/v1/commitment";
import * as _161 from "./core/commitment/v2/commitment";
import * as _162 from "./core/connection/v1/connection";
import * as _163 from "./core/connection/v1/genesis";
import * as _164 from "./core/connection/v1/query";
import * as _165 from "./core/connection/v1/tx";
import * as _166 from "./lightclients/solomachine/v2/solomachine";
import * as _167 from "./lightclients/solomachine/v3/solomachine";
import * as _168 from "./lightclients/tendermint/v1/tendermint";
import * as _169 from "./lightclients/wasm/v1/genesis";
import * as _170 from "./lightclients/wasm/v1/query";
import * as _171 from "./lightclients/wasm/v1/tx";
import * as _172 from "./lightclients/wasm/v1/wasm";
import * as _281 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _282 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _283 from "./applications/transfer/v1/tx.amino";
import * as _284 from "./core/channel/v1/tx.amino";
import * as _285 from "./core/channel/v2/tx.amino";
import * as _286 from "./core/client/v1/tx.amino";
import * as _287 from "./core/client/v2/tx.amino";
import * as _288 from "./core/connection/v1/tx.amino";
import * as _289 from "./lightclients/wasm/v1/tx.amino";
import * as _290 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _291 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _292 from "./applications/transfer/v1/tx.registry";
import * as _293 from "./core/channel/v1/tx.registry";
import * as _294 from "./core/channel/v2/tx.registry";
import * as _295 from "./core/client/v1/tx.registry";
import * as _296 from "./core/client/v2/tx.registry";
import * as _297 from "./core/connection/v1/tx.registry";
import * as _298 from "./lightclients/wasm/v1/tx.registry";
import * as _299 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _300 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _301 from "./applications/transfer/v1/query.lcd";
import * as _302 from "./core/channel/v1/query.lcd";
import * as _303 from "./core/channel/v2/query.lcd";
import * as _304 from "./core/client/v1/query.lcd";
import * as _305 from "./core/client/v2/query.lcd";
import * as _306 from "./core/connection/v1/query.lcd";
import * as _307 from "./lightclients/wasm/v1/query.lcd";
import * as _308 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _309 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _310 from "./applications/transfer/v1/query.rpc.Query";
import * as _311 from "./core/channel/v1/query.rpc.Query";
import * as _312 from "./core/channel/v2/query.rpc.Query";
import * as _313 from "./core/client/v1/query.rpc.Query";
import * as _314 from "./core/client/v2/query.rpc.Query";
import * as _315 from "./core/connection/v1/query.rpc.Query";
import * as _316 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _317 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _318 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _319 from "./applications/transfer/v1/tx.rpc.msg";
import * as _320 from "./core/channel/v1/tx.rpc.msg";
import * as _321 from "./core/channel/v2/tx.rpc.msg";
import * as _322 from "./core/client/v1/tx.rpc.msg";
import * as _323 from "./core/client/v2/tx.rpc.msg";
import * as _324 from "./core/connection/v1/tx.rpc.msg";
import * as _325 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _339 from "./lcd";
import * as _340 from "./rpc.query";
import * as _341 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._124,
          ..._125,
          ..._126,
          ..._281,
          ..._290,
          ..._299,
          ..._308,
          ..._317
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._127
        };
      }
      export namespace host {
        export const v1 = {
          ..._128,
          ..._129,
          ..._130,
          ..._282,
          ..._291,
          ..._300,
          ..._309,
          ..._318
        };
      }
      export const v1 = {
        ..._131,
        ..._132,
        ..._133
      };
    }
    export namespace packet_forward_middleware {
      export const v1 = {
        ..._134
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._135,
        ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._142,
        ..._283,
        ..._292,
        ..._301,
        ..._310,
        ..._319
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._143,
        ..._144,
        ..._145,
        ..._146,
        ..._284,
        ..._293,
        ..._302,
        ..._311,
        ..._320
      };
      export const v2 = {
        ..._147,
        ..._148,
        ..._149,
        ..._150,
        ..._285,
        ..._294,
        ..._303,
        ..._312,
        ..._321
      };
    }
    export namespace client {
      export const v1 = {
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._286,
        ..._295,
        ..._304,
        ..._313,
        ..._322
      };
      export const v2 = {
        ..._155,
        ..._156,
        ..._157,
        ..._158,
        ..._159,
        ..._287,
        ..._296,
        ..._305,
        ..._314,
        ..._323
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._160
      };
      export const v2 = {
        ..._161
      };
    }
    export namespace connection {
      export const v1 = {
        ..._162,
        ..._163,
        ..._164,
        ..._165,
        ..._288,
        ..._297,
        ..._306,
        ..._315,
        ..._324
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._166
      };
      export const v3 = {
        ..._167
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._168
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._169,
        ..._170,
        ..._171,
        ..._172,
        ..._289,
        ..._298,
        ..._307,
        ..._316,
        ..._325
      };
    }
  }
  export const ClientFactory = {
    ..._339,
    ..._340,
    ..._341
  };
}