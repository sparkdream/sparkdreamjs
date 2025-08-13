//@ts-nocheck
import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./auth/module/v1/module";
import * as _4 from "./auth/v1beta1/auth";
import * as _5 from "./auth/v1beta1/genesis";
import * as _6 from "./auth/v1beta1/query";
import * as _7 from "./auth/v1beta1/tx";
import * as _8 from "./authz/module/v1/module";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/module/v1/module";
import * as _15 from "./bank/v1beta1/authz";
import * as _16 from "./bank/v1beta1/bank";
import * as _17 from "./bank/v1beta1/genesis";
import * as _18 from "./bank/v1beta1/query";
import * as _19 from "./bank/v1beta1/tx";
import * as _20 from "./base/abci/v1beta1/abci";
import * as _21 from "./base/node/v1beta1/query";
import * as _22 from "./base/query/v1beta1/pagination";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/v1beta1/coin";
import * as _25 from "./benchmark/module/v1/module";
import * as _26 from "./benchmark/v1/benchmark";
import * as _27 from "./benchmark/v1/tx";
import * as _28 from "./circuit/module/v1/module";
import * as _29 from "./circuit/v1/query";
import * as _30 from "./circuit/v1/tx";
import * as _31 from "./circuit/v1/types";
import * as _32 from "./consensus/module/v1/module";
import * as _33 from "./consensus/v1/query";
import * as _34 from "./consensus/v1/tx";
import * as _35 from "./counter/module/v1/module";
import * as _36 from "./counter/v1/query";
import * as _37 from "./counter/v1/tx";
import * as _38 from "./crisis/module/v1/module";
import * as _39 from "./crypto/ed25519/keys";
import * as _40 from "./crypto/hd/v1/hd";
import * as _41 from "./crypto/keyring/v1/record";
import * as _42 from "./crypto/multisig/keys";
import * as _43 from "./crypto/secp256k1/keys";
import * as _44 from "./crypto/secp256r1/keys";
import * as _45 from "./distribution/module/v1/module";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./epochs/module/v1/module";
import * as _51 from "./epochs/v1beta1/events";
import * as _52 from "./epochs/v1beta1/genesis";
import * as _53 from "./epochs/v1beta1/query";
import * as _54 from "./evidence/module/v1/module";
import * as _55 from "./feegrant/module/v1/module";
import * as _56 from "./feegrant/v1beta1/feegrant";
import * as _57 from "./feegrant/v1beta1/genesis";
import * as _58 from "./feegrant/v1beta1/query";
import * as _59 from "./feegrant/v1beta1/tx";
import * as _60 from "./genutil/module/v1/module";
import * as _61 from "./gov/module/v1/module";
import * as _62 from "./gov/v1/genesis";
import * as _63 from "./gov/v1/gov";
import * as _64 from "./gov/v1/query";
import * as _65 from "./gov/v1/tx";
import * as _66 from "./gov/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/gov";
import * as _68 from "./gov/v1beta1/query";
import * as _69 from "./gov/v1beta1/tx";
import * as _70 from "./group/module/v1/module";
import * as _71 from "./group/v1/events";
import * as _72 from "./group/v1/genesis";
import * as _73 from "./group/v1/query";
import * as _74 from "./group/v1/tx";
import * as _75 from "./group/v1/types";
import * as _76 from "./ics23/v1/proofs";
import * as _77 from "./mint/module/v1/module";
import * as _78 from "./mint/v1beta1/genesis";
import * as _79 from "./mint/v1beta1/mint";
import * as _80 from "./mint/v1beta1/query";
import * as _81 from "./mint/v1beta1/tx";
import * as _82 from "./msg/textual/v1/textual";
import * as _83 from "./nft/module/v1/module";
import * as _84 from "./params/module/v1/module";
import * as _85 from "./params/v1beta1/params";
import * as _86 from "./params/v1beta1/query";
import * as _87 from "./protocolpool/module/v1/module";
import * as _88 from "./protocolpool/v1/genesis";
import * as _89 from "./protocolpool/v1/query";
import * as _90 from "./protocolpool/v1/tx";
import * as _91 from "./protocolpool/v1/types";
import * as _92 from "./query/v1/query";
import * as _93 from "./reflection/v1/reflection";
import * as _94 from "./slashing/module/v1/module";
import * as _95 from "./staking/module/v1/module";
import * as _96 from "./staking/v1beta1/authz";
import * as _97 from "./staking/v1beta1/genesis";
import * as _98 from "./staking/v1beta1/query";
import * as _99 from "./staking/v1beta1/staking";
import * as _100 from "./staking/v1beta1/tx";
import * as _101 from "./store/internal/kv/v1beta1/kv";
import * as _102 from "./store/snapshots/v1/snapshot";
import * as _103 from "./store/streaming/abci/grpc";
import * as _104 from "./store/v1beta1/commit_info";
import * as _105 from "./store/v1beta1/listening";
import * as _106 from "./tx/config/v1/config";
import * as _107 from "./tx/signing/v1beta1/signing";
import * as _108 from "./tx/v1beta1/service";
import * as _109 from "./tx/v1beta1/tx";
import * as _110 from "./upgrade/module/v1/module";
import * as _111 from "./upgrade/v1beta1/query";
import * as _112 from "./upgrade/v1beta1/tx";
import * as _113 from "./upgrade/v1beta1/upgrade";
import * as _114 from "./vesting/module/v1/module";
import * as _115 from "./vesting/v1beta1/tx";
import * as _116 from "./vesting/v1beta1/vesting";
import * as _196 from "./auth/v1beta1/tx.amino";
import * as _197 from "./authz/v1beta1/tx.amino";
import * as _198 from "./bank/v1beta1/tx.amino";
import * as _199 from "./benchmark/v1/tx.amino";
import * as _200 from "./circuit/v1/tx.amino";
import * as _201 from "./consensus/v1/tx.amino";
import * as _202 from "./counter/v1/tx.amino";
import * as _203 from "./distribution/v1beta1/tx.amino";
import * as _204 from "./feegrant/v1beta1/tx.amino";
import * as _205 from "./gov/v1/tx.amino";
import * as _206 from "./gov/v1beta1/tx.amino";
import * as _207 from "./group/v1/tx.amino";
import * as _208 from "./mint/v1beta1/tx.amino";
import * as _209 from "./protocolpool/v1/tx.amino";
import * as _210 from "./staking/v1beta1/tx.amino";
import * as _211 from "./upgrade/v1beta1/tx.amino";
import * as _212 from "./vesting/v1beta1/tx.amino";
import * as _213 from "./auth/v1beta1/tx.registry";
import * as _214 from "./authz/v1beta1/tx.registry";
import * as _215 from "./bank/v1beta1/tx.registry";
import * as _216 from "./benchmark/v1/tx.registry";
import * as _217 from "./circuit/v1/tx.registry";
import * as _218 from "./consensus/v1/tx.registry";
import * as _219 from "./counter/v1/tx.registry";
import * as _220 from "./distribution/v1beta1/tx.registry";
import * as _221 from "./feegrant/v1beta1/tx.registry";
import * as _222 from "./gov/v1/tx.registry";
import * as _223 from "./gov/v1beta1/tx.registry";
import * as _224 from "./group/v1/tx.registry";
import * as _225 from "./mint/v1beta1/tx.registry";
import * as _226 from "./protocolpool/v1/tx.registry";
import * as _227 from "./staking/v1beta1/tx.registry";
import * as _228 from "./upgrade/v1beta1/tx.registry";
import * as _229 from "./vesting/v1beta1/tx.registry";
import * as _230 from "./auth/v1beta1/query.lcd";
import * as _231 from "./authz/v1beta1/query.lcd";
import * as _232 from "./bank/v1beta1/query.lcd";
import * as _233 from "./base/node/v1beta1/query.lcd";
import * as _234 from "./circuit/v1/query.lcd";
import * as _235 from "./consensus/v1/query.lcd";
import * as _236 from "./distribution/v1beta1/query.lcd";
import * as _237 from "./epochs/v1beta1/query.lcd";
import * as _238 from "./feegrant/v1beta1/query.lcd";
import * as _239 from "./gov/v1/query.lcd";
import * as _240 from "./gov/v1beta1/query.lcd";
import * as _241 from "./group/v1/query.lcd";
import * as _242 from "./mint/v1beta1/query.lcd";
import * as _243 from "./params/v1beta1/query.lcd";
import * as _244 from "./protocolpool/v1/query.lcd";
import * as _245 from "./staking/v1beta1/query.lcd";
import * as _246 from "./tx/v1beta1/service.lcd";
import * as _247 from "./upgrade/v1beta1/query.lcd";
import * as _248 from "./auth/v1beta1/query.rpc.Query";
import * as _249 from "./authz/v1beta1/query.rpc.Query";
import * as _250 from "./bank/v1beta1/query.rpc.Query";
import * as _251 from "./base/node/v1beta1/query.rpc.Service";
import * as _252 from "./circuit/v1/query.rpc.Query";
import * as _253 from "./consensus/v1/query.rpc.Query";
import * as _254 from "./counter/v1/query.rpc.Query";
import * as _255 from "./distribution/v1beta1/query.rpc.Query";
import * as _256 from "./epochs/v1beta1/query.rpc.Query";
import * as _257 from "./feegrant/v1beta1/query.rpc.Query";
import * as _258 from "./gov/v1/query.rpc.Query";
import * as _259 from "./gov/v1beta1/query.rpc.Query";
import * as _260 from "./group/v1/query.rpc.Query";
import * as _261 from "./mint/v1beta1/query.rpc.Query";
import * as _262 from "./params/v1beta1/query.rpc.Query";
import * as _263 from "./protocolpool/v1/query.rpc.Query";
import * as _264 from "./staking/v1beta1/query.rpc.Query";
import * as _265 from "./tx/v1beta1/service.rpc.Service";
import * as _266 from "./upgrade/v1beta1/query.rpc.Query";
import * as _267 from "./auth/v1beta1/tx.rpc.msg";
import * as _268 from "./authz/v1beta1/tx.rpc.msg";
import * as _269 from "./bank/v1beta1/tx.rpc.msg";
import * as _270 from "./benchmark/v1/tx.rpc.msg";
import * as _271 from "./circuit/v1/tx.rpc.msg";
import * as _272 from "./consensus/v1/tx.rpc.msg";
import * as _273 from "./counter/v1/tx.rpc.msg";
import * as _274 from "./distribution/v1beta1/tx.rpc.msg";
import * as _275 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _276 from "./gov/v1/tx.rpc.msg";
import * as _277 from "./gov/v1beta1/tx.rpc.msg";
import * as _278 from "./group/v1/tx.rpc.msg";
import * as _279 from "./mint/v1beta1/tx.rpc.msg";
import * as _280 from "./protocolpool/v1/tx.rpc.msg";
import * as _281 from "./staking/v1beta1/tx.rpc.msg";
import * as _282 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _283 from "./vesting/v1beta1/tx.rpc.msg";
import * as _344 from "./lcd";
import * as _345 from "./rpc.query";
import * as _346 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._3
      };
    }
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._196,
      ..._213,
      ..._230,
      ..._248,
      ..._267
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._8
      };
    }
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._197,
      ..._214,
      ..._231,
      ..._249,
      ..._268
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._14
      };
    }
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._198,
      ..._215,
      ..._232,
      ..._250,
      ..._269
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._21,
        ..._233,
        ..._251
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._22
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._23
      };
    }
    export const v1beta1 = {
      ..._24
    };
  }
  export namespace benchmark {
    export namespace module {
      export const v1 = {
        ..._25
      };
    }
    export const v1 = {
      ..._26,
      ..._27,
      ..._199,
      ..._216,
      ..._270
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._28
      };
    }
    export const v1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._200,
      ..._217,
      ..._234,
      ..._252,
      ..._271
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._32
      };
    }
    export const v1 = {
      ..._33,
      ..._34,
      ..._201,
      ..._218,
      ..._235,
      ..._253,
      ..._272
    };
  }
  export namespace counter {
    export namespace module {
      export const v1 = {
        ..._35
      };
    }
    export const v1 = {
      ..._36,
      ..._37,
      ..._202,
      ..._219,
      ..._254,
      ..._273
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._38
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._39
    };
    export namespace hd {
      export const v1 = {
        ..._40
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._41
      };
    }
    export const multisig = {
      ..._42
    };
    export const secp256k1 = {
      ..._43
    };
    export const secp256r1 = {
      ..._44
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._45
      };
    }
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._203,
      ..._220,
      ..._236,
      ..._255,
      ..._274
    };
  }
  export namespace epochs {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._237,
      ..._256
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._54
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._55
      };
    }
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._204,
      ..._221,
      ..._238,
      ..._257,
      ..._275
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._60
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._61
      };
    }
    export const v1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._205,
      ..._222,
      ..._239,
      ..._258,
      ..._276
    };
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._206,
      ..._223,
      ..._240,
      ..._259,
      ..._277
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._70
      };
    }
    export const v1 = {
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._207,
      ..._224,
      ..._241,
      ..._260,
      ..._278
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._76
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._77
      };
    }
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._208,
      ..._225,
      ..._242,
      ..._261,
      ..._279
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._82
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._83
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._84
      };
    }
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._243,
      ..._262
    };
  }
  export namespace protocolpool {
    export namespace module {
      export const v1 = {
        ..._87
      };
    }
    export const v1 = {
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._209,
      ..._226,
      ..._244,
      ..._263,
      ..._280
    };
  }
  export namespace query {
    export const v1 = {
      ..._92
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._93
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._94
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._95
      };
    }
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._210,
      ..._227,
      ..._245,
      ..._264,
      ..._281
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._101
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._102
      };
    }
    export namespace streaming {
      export const abci = {
        ..._103
      };
    }
    export const v1beta1 = {
      ..._104,
      ..._105
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._106
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._107
      };
    }
    export const v1beta1 = {
      ..._108,
      ..._109,
      ..._246,
      ..._265
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._110
      };
    }
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._211,
      ..._228,
      ..._247,
      ..._266,
      ..._282
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._114
      };
    }
    export const v1beta1 = {
      ..._115,
      ..._116,
      ..._212,
      ..._229,
      ..._283
    };
  }
  export const ClientFactory = {
    ..._344,
    ..._345,
    ..._346
  };
}