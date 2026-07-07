//@ts-nocheck
import * as _244 from "./applications/gmp/v1/account";
import * as _245 from "./applications/gmp/v1/genesis";
import * as _246 from "./applications/gmp/v1/packet";
import * as _247 from "./applications/gmp/v1/query";
import * as _248 from "./applications/gmp/v1/tx";
import * as _249 from "./applications/interchain_accounts/controller/v1/controller";
import * as _250 from "./applications/interchain_accounts/controller/v1/query";
import * as _251 from "./applications/interchain_accounts/controller/v1/tx";
import * as _252 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _253 from "./applications/interchain_accounts/host/v1/host";
import * as _254 from "./applications/interchain_accounts/host/v1/query";
import * as _255 from "./applications/interchain_accounts/host/v1/tx";
import * as _256 from "./applications/interchain_accounts/v1/account";
import * as _257 from "./applications/interchain_accounts/v1/metadata";
import * as _258 from "./applications/interchain_accounts/v1/packet";
import * as _259 from "./applications/packet_forward_middleware/v1/genesis";
import * as _260 from "./applications/rate_limiting/v1/genesis";
import * as _261 from "./applications/rate_limiting/v1/query";
import * as _262 from "./applications/rate_limiting/v1/rate_limiting";
import * as _263 from "./applications/rate_limiting/v1/tx";
import * as _264 from "./applications/transfer/v1/authz";
import * as _265 from "./applications/transfer/v1/denomtrace";
import * as _266 from "./applications/transfer/v1/genesis";
import * as _267 from "./applications/transfer/v1/packet";
import * as _268 from "./applications/transfer/v1/query";
import * as _269 from "./applications/transfer/v1/token";
import * as _270 from "./applications/transfer/v1/transfer";
import * as _271 from "./applications/transfer/v1/tx";
import * as _272 from "./core/channel/v1/channel";
import * as _273 from "./core/channel/v1/genesis";
import * as _274 from "./core/channel/v1/query";
import * as _275 from "./core/channel/v1/tx";
import * as _276 from "./core/channel/v2/genesis";
import * as _277 from "./core/channel/v2/packet";
import * as _278 from "./core/channel/v2/query";
import * as _279 from "./core/channel/v2/tx";
import * as _280 from "./core/client/v1/client";
import * as _281 from "./core/client/v1/genesis";
import * as _282 from "./core/client/v1/query";
import * as _283 from "./core/client/v1/tx";
import * as _284 from "./core/client/v2/config";
import * as _285 from "./core/client/v2/counterparty";
import * as _286 from "./core/client/v2/genesis";
import * as _287 from "./core/client/v2/query";
import * as _288 from "./core/client/v2/tx";
import * as _289 from "./core/commitment/v1/commitment";
import * as _290 from "./core/commitment/v2/commitment";
import * as _291 from "./core/connection/v1/connection";
import * as _292 from "./core/connection/v1/genesis";
import * as _293 from "./core/connection/v1/query";
import * as _294 from "./core/connection/v1/tx";
import * as _295 from "./lightclients/attestations/v1/attestations";
import * as _296 from "./lightclients/solomachine/v2/solomachine";
import * as _297 from "./lightclients/solomachine/v3/solomachine";
import * as _298 from "./lightclients/tendermint/v1/tendermint";
import * as _299 from "./lightclients/wasm/v1/genesis";
import * as _300 from "./lightclients/wasm/v1/query";
import * as _301 from "./lightclients/wasm/v1/tx";
import * as _302 from "./lightclients/wasm/v1/wasm";
import * as _646 from "./applications/gmp/v1/tx.amino";
import * as _647 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _648 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _649 from "./applications/rate_limiting/v1/tx.amino";
import * as _650 from "./applications/transfer/v1/tx.amino";
import * as _651 from "./core/channel/v1/tx.amino";
import * as _652 from "./core/channel/v2/tx.amino";
import * as _653 from "./core/client/v1/tx.amino";
import * as _654 from "./core/client/v2/tx.amino";
import * as _655 from "./core/connection/v1/tx.amino";
import * as _656 from "./lightclients/wasm/v1/tx.amino";
import * as _657 from "./applications/gmp/v1/tx.registry";
import * as _658 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _659 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _660 from "./applications/rate_limiting/v1/tx.registry";
import * as _661 from "./applications/transfer/v1/tx.registry";
import * as _662 from "./core/channel/v1/tx.registry";
import * as _663 from "./core/channel/v2/tx.registry";
import * as _664 from "./core/client/v1/tx.registry";
import * as _665 from "./core/client/v2/tx.registry";
import * as _666 from "./core/connection/v1/tx.registry";
import * as _667 from "./lightclients/wasm/v1/tx.registry";
import * as _668 from "./applications/gmp/v1/query.lcd";
import * as _669 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _670 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _671 from "./applications/rate_limiting/v1/query.lcd";
import * as _672 from "./applications/transfer/v1/query.lcd";
import * as _673 from "./core/channel/v1/query.lcd";
import * as _674 from "./core/channel/v2/query.lcd";
import * as _675 from "./core/client/v1/query.lcd";
import * as _676 from "./core/client/v2/query.lcd";
import * as _677 from "./core/connection/v1/query.lcd";
import * as _678 from "./lightclients/wasm/v1/query.lcd";
import * as _679 from "./applications/gmp/v1/query.rpc.Query";
import * as _680 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _681 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _682 from "./applications/rate_limiting/v1/query.rpc.Query";
import * as _683 from "./applications/transfer/v1/query.rpc.Query";
import * as _684 from "./core/channel/v1/query.rpc.Query";
import * as _685 from "./core/channel/v2/query.rpc.Query";
import * as _686 from "./core/client/v1/query.rpc.Query";
import * as _687 from "./core/client/v2/query.rpc.Query";
import * as _688 from "./core/connection/v1/query.rpc.Query";
import * as _689 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _690 from "./applications/gmp/v1/tx.rpc.msg";
import * as _691 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _692 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _693 from "./applications/rate_limiting/v1/tx.rpc.msg";
import * as _694 from "./applications/transfer/v1/tx.rpc.msg";
import * as _695 from "./core/channel/v1/tx.rpc.msg";
import * as _696 from "./core/channel/v2/tx.rpc.msg";
import * as _697 from "./core/client/v1/tx.rpc.msg";
import * as _698 from "./core/client/v2/tx.rpc.msg";
import * as _699 from "./core/connection/v1/tx.rpc.msg";
import * as _700 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _794 from "./lcd";
import * as _795 from "./rpc.query";
import * as _796 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace gmp {
      export const v1 = {
        ..._244,
        ..._245,
        ..._246,
        ..._247,
        ..._248,
        ..._646,
        ..._657,
        ..._668,
        ..._679,
        ..._690
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._249,
          ..._250,
          ..._251,
          ..._647,
          ..._658,
          ..._669,
          ..._680,
          ..._691
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._252
        };
      }
      export namespace host {
        export const v1 = {
          ..._253,
          ..._254,
          ..._255,
          ..._648,
          ..._659,
          ..._670,
          ..._681,
          ..._692
        };
      }
      export const v1 = {
        ..._256,
        ..._257,
        ..._258
      };
    }
    export namespace packet_forward_middleware {
      export const v1 = {
        ..._259
      };
    }
    export namespace rate_limiting {
      export const v1 = {
        ..._260,
        ..._261,
        ..._262,
        ..._263,
        ..._649,
        ..._660,
        ..._671,
        ..._682,
        ..._693
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._264,
        ..._265,
        ..._266,
        ..._267,
        ..._268,
        ..._269,
        ..._270,
        ..._271,
        ..._650,
        ..._661,
        ..._672,
        ..._683,
        ..._694
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._272,
        ..._273,
        ..._274,
        ..._275,
        ..._651,
        ..._662,
        ..._673,
        ..._684,
        ..._695
      };
      export const v2 = {
        ..._276,
        ..._277,
        ..._278,
        ..._279,
        ..._652,
        ..._663,
        ..._674,
        ..._685,
        ..._696
      };
    }
    export namespace client {
      export const v1 = {
        ..._280,
        ..._281,
        ..._282,
        ..._283,
        ..._653,
        ..._664,
        ..._675,
        ..._686,
        ..._697
      };
      export const v2 = {
        ..._284,
        ..._285,
        ..._286,
        ..._287,
        ..._288,
        ..._654,
        ..._665,
        ..._676,
        ..._687,
        ..._698
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._289
      };
      export const v2 = {
        ..._290
      };
    }
    export namespace connection {
      export const v1 = {
        ..._291,
        ..._292,
        ..._293,
        ..._294,
        ..._655,
        ..._666,
        ..._677,
        ..._688,
        ..._699
      };
    }
  }
  export namespace lightclients {
    export namespace attestations {
      export const v1 = {
        ..._295
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._296
      };
      export const v3 = {
        ..._297
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._298
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._299,
        ..._300,
        ..._301,
        ..._302,
        ..._656,
        ..._667,
        ..._678,
        ..._689,
        ..._700
      };
    }
  }
  export const ClientFactory = {
    ..._794,
    ..._795,
    ..._796
  };
}