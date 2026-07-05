//@ts-nocheck
import * as _236 from "./applications/gmp/v1/account";
import * as _237 from "./applications/gmp/v1/genesis";
import * as _238 from "./applications/gmp/v1/packet";
import * as _239 from "./applications/gmp/v1/query";
import * as _240 from "./applications/gmp/v1/tx";
import * as _241 from "./applications/interchain_accounts/controller/v1/controller";
import * as _242 from "./applications/interchain_accounts/controller/v1/query";
import * as _243 from "./applications/interchain_accounts/controller/v1/tx";
import * as _244 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _245 from "./applications/interchain_accounts/host/v1/host";
import * as _246 from "./applications/interchain_accounts/host/v1/query";
import * as _247 from "./applications/interchain_accounts/host/v1/tx";
import * as _248 from "./applications/interchain_accounts/v1/account";
import * as _249 from "./applications/interchain_accounts/v1/metadata";
import * as _250 from "./applications/interchain_accounts/v1/packet";
import * as _251 from "./applications/packet_forward_middleware/v1/genesis";
import * as _252 from "./applications/rate_limiting/v1/genesis";
import * as _253 from "./applications/rate_limiting/v1/query";
import * as _254 from "./applications/rate_limiting/v1/rate_limiting";
import * as _255 from "./applications/rate_limiting/v1/tx";
import * as _256 from "./applications/transfer/v1/authz";
import * as _257 from "./applications/transfer/v1/denomtrace";
import * as _258 from "./applications/transfer/v1/genesis";
import * as _259 from "./applications/transfer/v1/packet";
import * as _260 from "./applications/transfer/v1/query";
import * as _261 from "./applications/transfer/v1/token";
import * as _262 from "./applications/transfer/v1/transfer";
import * as _263 from "./applications/transfer/v1/tx";
import * as _264 from "./core/channel/v1/channel";
import * as _265 from "./core/channel/v1/genesis";
import * as _266 from "./core/channel/v1/query";
import * as _267 from "./core/channel/v1/tx";
import * as _268 from "./core/channel/v2/genesis";
import * as _269 from "./core/channel/v2/packet";
import * as _270 from "./core/channel/v2/query";
import * as _271 from "./core/channel/v2/tx";
import * as _272 from "./core/client/v1/client";
import * as _273 from "./core/client/v1/genesis";
import * as _274 from "./core/client/v1/query";
import * as _275 from "./core/client/v1/tx";
import * as _276 from "./core/client/v2/config";
import * as _277 from "./core/client/v2/counterparty";
import * as _278 from "./core/client/v2/genesis";
import * as _279 from "./core/client/v2/query";
import * as _280 from "./core/client/v2/tx";
import * as _281 from "./core/commitment/v1/commitment";
import * as _282 from "./core/commitment/v2/commitment";
import * as _283 from "./core/connection/v1/connection";
import * as _284 from "./core/connection/v1/genesis";
import * as _285 from "./core/connection/v1/query";
import * as _286 from "./core/connection/v1/tx";
import * as _287 from "./lightclients/attestations/v1/attestations";
import * as _288 from "./lightclients/solomachine/v2/solomachine";
import * as _289 from "./lightclients/solomachine/v3/solomachine";
import * as _290 from "./lightclients/tendermint/v1/tendermint";
import * as _291 from "./lightclients/wasm/v1/genesis";
import * as _292 from "./lightclients/wasm/v1/query";
import * as _293 from "./lightclients/wasm/v1/tx";
import * as _294 from "./lightclients/wasm/v1/wasm";
import * as _633 from "./applications/gmp/v1/tx.amino";
import * as _634 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _635 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _636 from "./applications/rate_limiting/v1/tx.amino";
import * as _637 from "./applications/transfer/v1/tx.amino";
import * as _638 from "./core/channel/v1/tx.amino";
import * as _639 from "./core/channel/v2/tx.amino";
import * as _640 from "./core/client/v1/tx.amino";
import * as _641 from "./core/client/v2/tx.amino";
import * as _642 from "./core/connection/v1/tx.amino";
import * as _643 from "./lightclients/wasm/v1/tx.amino";
import * as _644 from "./applications/gmp/v1/tx.registry";
import * as _645 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _646 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _647 from "./applications/rate_limiting/v1/tx.registry";
import * as _648 from "./applications/transfer/v1/tx.registry";
import * as _649 from "./core/channel/v1/tx.registry";
import * as _650 from "./core/channel/v2/tx.registry";
import * as _651 from "./core/client/v1/tx.registry";
import * as _652 from "./core/client/v2/tx.registry";
import * as _653 from "./core/connection/v1/tx.registry";
import * as _654 from "./lightclients/wasm/v1/tx.registry";
import * as _655 from "./applications/gmp/v1/query.lcd";
import * as _656 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _657 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _658 from "./applications/rate_limiting/v1/query.lcd";
import * as _659 from "./applications/transfer/v1/query.lcd";
import * as _660 from "./core/channel/v1/query.lcd";
import * as _661 from "./core/channel/v2/query.lcd";
import * as _662 from "./core/client/v1/query.lcd";
import * as _663 from "./core/client/v2/query.lcd";
import * as _664 from "./core/connection/v1/query.lcd";
import * as _665 from "./lightclients/wasm/v1/query.lcd";
import * as _666 from "./applications/gmp/v1/query.rpc.Query";
import * as _667 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _668 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _669 from "./applications/rate_limiting/v1/query.rpc.Query";
import * as _670 from "./applications/transfer/v1/query.rpc.Query";
import * as _671 from "./core/channel/v1/query.rpc.Query";
import * as _672 from "./core/channel/v2/query.rpc.Query";
import * as _673 from "./core/client/v1/query.rpc.Query";
import * as _674 from "./core/client/v2/query.rpc.Query";
import * as _675 from "./core/connection/v1/query.rpc.Query";
import * as _676 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _677 from "./applications/gmp/v1/tx.rpc.msg";
import * as _678 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _679 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _680 from "./applications/rate_limiting/v1/tx.rpc.msg";
import * as _681 from "./applications/transfer/v1/tx.rpc.msg";
import * as _682 from "./core/channel/v1/tx.rpc.msg";
import * as _683 from "./core/channel/v2/tx.rpc.msg";
import * as _684 from "./core/client/v1/tx.rpc.msg";
import * as _685 from "./core/client/v2/tx.rpc.msg";
import * as _686 from "./core/connection/v1/tx.rpc.msg";
import * as _687 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _781 from "./lcd";
import * as _782 from "./rpc.query";
import * as _783 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace gmp {
      export const v1 = {
        ..._236,
        ..._237,
        ..._238,
        ..._239,
        ..._240,
        ..._633,
        ..._644,
        ..._655,
        ..._666,
        ..._677
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._241,
          ..._242,
          ..._243,
          ..._634,
          ..._645,
          ..._656,
          ..._667,
          ..._678
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._244
        };
      }
      export namespace host {
        export const v1 = {
          ..._245,
          ..._246,
          ..._247,
          ..._635,
          ..._646,
          ..._657,
          ..._668,
          ..._679
        };
      }
      export const v1 = {
        ..._248,
        ..._249,
        ..._250
      };
    }
    export namespace packet_forward_middleware {
      export const v1 = {
        ..._251
      };
    }
    export namespace rate_limiting {
      export const v1 = {
        ..._252,
        ..._253,
        ..._254,
        ..._255,
        ..._636,
        ..._647,
        ..._658,
        ..._669,
        ..._680
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._256,
        ..._257,
        ..._258,
        ..._259,
        ..._260,
        ..._261,
        ..._262,
        ..._263,
        ..._637,
        ..._648,
        ..._659,
        ..._670,
        ..._681
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._264,
        ..._265,
        ..._266,
        ..._267,
        ..._638,
        ..._649,
        ..._660,
        ..._671,
        ..._682
      };
      export const v2 = {
        ..._268,
        ..._269,
        ..._270,
        ..._271,
        ..._639,
        ..._650,
        ..._661,
        ..._672,
        ..._683
      };
    }
    export namespace client {
      export const v1 = {
        ..._272,
        ..._273,
        ..._274,
        ..._275,
        ..._640,
        ..._651,
        ..._662,
        ..._673,
        ..._684
      };
      export const v2 = {
        ..._276,
        ..._277,
        ..._278,
        ..._279,
        ..._280,
        ..._641,
        ..._652,
        ..._663,
        ..._674,
        ..._685
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._281
      };
      export const v2 = {
        ..._282
      };
    }
    export namespace connection {
      export const v1 = {
        ..._283,
        ..._284,
        ..._285,
        ..._286,
        ..._642,
        ..._653,
        ..._664,
        ..._675,
        ..._686
      };
    }
  }
  export namespace lightclients {
    export namespace attestations {
      export const v1 = {
        ..._287
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._288
      };
      export const v3 = {
        ..._289
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._290
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._291,
        ..._292,
        ..._293,
        ..._294,
        ..._643,
        ..._654,
        ..._665,
        ..._676,
        ..._687
      };
    }
  }
  export const ClientFactory = {
    ..._781,
    ..._782,
    ..._783
  };
}