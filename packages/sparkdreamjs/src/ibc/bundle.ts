//@ts-nocheck
import * as _297 from "./applications/gmp/v1/account";
import * as _298 from "./applications/gmp/v1/genesis";
import * as _299 from "./applications/gmp/v1/packet";
import * as _300 from "./applications/gmp/v1/query";
import * as _301 from "./applications/gmp/v1/tx";
import * as _302 from "./applications/interchain_accounts/controller/v1/controller";
import * as _303 from "./applications/interchain_accounts/controller/v1/query";
import * as _304 from "./applications/interchain_accounts/controller/v1/tx";
import * as _305 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _306 from "./applications/interchain_accounts/host/v1/host";
import * as _307 from "./applications/interchain_accounts/host/v1/query";
import * as _308 from "./applications/interchain_accounts/host/v1/tx";
import * as _309 from "./applications/interchain_accounts/v1/account";
import * as _310 from "./applications/interchain_accounts/v1/metadata";
import * as _311 from "./applications/interchain_accounts/v1/packet";
import * as _312 from "./applications/packet_forward_middleware/v1/genesis";
import * as _313 from "./applications/rate_limiting/v1/genesis";
import * as _314 from "./applications/rate_limiting/v1/query";
import * as _315 from "./applications/rate_limiting/v1/rate_limiting";
import * as _316 from "./applications/rate_limiting/v1/tx";
import * as _317 from "./applications/transfer/v1/authz";
import * as _318 from "./applications/transfer/v1/denomtrace";
import * as _319 from "./applications/transfer/v1/genesis";
import * as _320 from "./applications/transfer/v1/packet";
import * as _321 from "./applications/transfer/v1/query";
import * as _322 from "./applications/transfer/v1/token";
import * as _323 from "./applications/transfer/v1/transfer";
import * as _324 from "./applications/transfer/v1/tx";
import * as _325 from "./core/channel/v1/channel";
import * as _326 from "./core/channel/v1/genesis";
import * as _327 from "./core/channel/v1/query";
import * as _328 from "./core/channel/v1/tx";
import * as _329 from "./core/channel/v2/genesis";
import * as _330 from "./core/channel/v2/packet";
import * as _331 from "./core/channel/v2/query";
import * as _332 from "./core/channel/v2/tx";
import * as _333 from "./core/client/v1/client";
import * as _334 from "./core/client/v1/genesis";
import * as _335 from "./core/client/v1/query";
import * as _336 from "./core/client/v1/tx";
import * as _337 from "./core/client/v2/config";
import * as _338 from "./core/client/v2/counterparty";
import * as _339 from "./core/client/v2/genesis";
import * as _340 from "./core/client/v2/query";
import * as _341 from "./core/client/v2/tx";
import * as _342 from "./core/commitment/v1/commitment";
import * as _343 from "./core/commitment/v2/commitment";
import * as _344 from "./core/connection/v1/connection";
import * as _345 from "./core/connection/v1/genesis";
import * as _346 from "./core/connection/v1/query";
import * as _347 from "./core/connection/v1/tx";
import * as _348 from "./lightclients/attestations/v1/attestations";
import * as _349 from "./lightclients/solomachine/v2/solomachine";
import * as _350 from "./lightclients/solomachine/v3/solomachine";
import * as _351 from "./lightclients/tendermint/v1/tendermint";
import * as _352 from "./lightclients/wasm/v1/genesis";
import * as _353 from "./lightclients/wasm/v1/query";
import * as _354 from "./lightclients/wasm/v1/tx";
import * as _355 from "./lightclients/wasm/v1/wasm";
import * as _726 from "./applications/gmp/v1/tx.amino";
import * as _727 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _728 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _729 from "./applications/rate_limiting/v1/tx.amino";
import * as _730 from "./applications/transfer/v1/tx.amino";
import * as _731 from "./core/channel/v1/tx.amino";
import * as _732 from "./core/channel/v2/tx.amino";
import * as _733 from "./core/client/v1/tx.amino";
import * as _734 from "./core/client/v2/tx.amino";
import * as _735 from "./core/connection/v1/tx.amino";
import * as _736 from "./lightclients/wasm/v1/tx.amino";
import * as _737 from "./applications/gmp/v1/tx.registry";
import * as _738 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _739 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _740 from "./applications/rate_limiting/v1/tx.registry";
import * as _741 from "./applications/transfer/v1/tx.registry";
import * as _742 from "./core/channel/v1/tx.registry";
import * as _743 from "./core/channel/v2/tx.registry";
import * as _744 from "./core/client/v1/tx.registry";
import * as _745 from "./core/client/v2/tx.registry";
import * as _746 from "./core/connection/v1/tx.registry";
import * as _747 from "./lightclients/wasm/v1/tx.registry";
import * as _748 from "./applications/gmp/v1/query.lcd";
import * as _749 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _750 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _751 from "./applications/rate_limiting/v1/query.lcd";
import * as _752 from "./applications/transfer/v1/query.lcd";
import * as _753 from "./core/channel/v1/query.lcd";
import * as _754 from "./core/channel/v2/query.lcd";
import * as _755 from "./core/client/v1/query.lcd";
import * as _756 from "./core/client/v2/query.lcd";
import * as _757 from "./core/connection/v1/query.lcd";
import * as _758 from "./lightclients/wasm/v1/query.lcd";
import * as _759 from "./applications/gmp/v1/query.rpc.Query";
import * as _760 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _761 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _762 from "./applications/rate_limiting/v1/query.rpc.Query";
import * as _763 from "./applications/transfer/v1/query.rpc.Query";
import * as _764 from "./core/channel/v1/query.rpc.Query";
import * as _765 from "./core/channel/v2/query.rpc.Query";
import * as _766 from "./core/client/v1/query.rpc.Query";
import * as _767 from "./core/client/v2/query.rpc.Query";
import * as _768 from "./core/connection/v1/query.rpc.Query";
import * as _769 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _770 from "./applications/gmp/v1/tx.rpc.msg";
import * as _771 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _772 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _773 from "./applications/rate_limiting/v1/tx.rpc.msg";
import * as _774 from "./applications/transfer/v1/tx.rpc.msg";
import * as _775 from "./core/channel/v1/tx.rpc.msg";
import * as _776 from "./core/channel/v2/tx.rpc.msg";
import * as _777 from "./core/client/v1/tx.rpc.msg";
import * as _778 from "./core/client/v2/tx.rpc.msg";
import * as _779 from "./core/connection/v1/tx.rpc.msg";
import * as _780 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _884 from "./lcd";
import * as _885 from "./rpc.query";
import * as _886 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace gmp {
      export const v1 = {
        ..._297,
        ..._298,
        ..._299,
        ..._300,
        ..._301,
        ..._726,
        ..._737,
        ..._748,
        ..._759,
        ..._770
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._302,
          ..._303,
          ..._304,
          ..._727,
          ..._738,
          ..._749,
          ..._760,
          ..._771
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._305
        };
      }
      export namespace host {
        export const v1 = {
          ..._306,
          ..._307,
          ..._308,
          ..._728,
          ..._739,
          ..._750,
          ..._761,
          ..._772
        };
      }
      export const v1 = {
        ..._309,
        ..._310,
        ..._311
      };
    }
    export namespace packet_forward_middleware {
      export const v1 = {
        ..._312
      };
    }
    export namespace rate_limiting {
      export const v1 = {
        ..._313,
        ..._314,
        ..._315,
        ..._316,
        ..._729,
        ..._740,
        ..._751,
        ..._762,
        ..._773
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._317,
        ..._318,
        ..._319,
        ..._320,
        ..._321,
        ..._322,
        ..._323,
        ..._324,
        ..._730,
        ..._741,
        ..._752,
        ..._763,
        ..._774
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._325,
        ..._326,
        ..._327,
        ..._328,
        ..._731,
        ..._742,
        ..._753,
        ..._764,
        ..._775
      };
      export const v2 = {
        ..._329,
        ..._330,
        ..._331,
        ..._332,
        ..._732,
        ..._743,
        ..._754,
        ..._765,
        ..._776
      };
    }
    export namespace client {
      export const v1 = {
        ..._333,
        ..._334,
        ..._335,
        ..._336,
        ..._733,
        ..._744,
        ..._755,
        ..._766,
        ..._777
      };
      export const v2 = {
        ..._337,
        ..._338,
        ..._339,
        ..._340,
        ..._341,
        ..._734,
        ..._745,
        ..._756,
        ..._767,
        ..._778
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._342
      };
      export const v2 = {
        ..._343
      };
    }
    export namespace connection {
      export const v1 = {
        ..._344,
        ..._345,
        ..._346,
        ..._347,
        ..._735,
        ..._746,
        ..._757,
        ..._768,
        ..._779
      };
    }
  }
  export namespace lightclients {
    export namespace attestations {
      export const v1 = {
        ..._348
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._349
      };
      export const v3 = {
        ..._350
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._351
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._352,
        ..._353,
        ..._354,
        ..._355,
        ..._736,
        ..._747,
        ..._758,
        ..._769,
        ..._780
      };
    }
  }
  export const ClientFactory = {
    ..._884,
    ..._885,
    ..._886
  };
}