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
import * as _365 from "./auth/v1beta1/tx.amino";
import * as _366 from "./authz/v1beta1/tx.amino";
import * as _367 from "./bank/v1beta1/tx.amino";
import * as _368 from "./benchmark/v1/tx.amino";
import * as _369 from "./circuit/v1/tx.amino";
import * as _370 from "./consensus/v1/tx.amino";
import * as _371 from "./counter/v1/tx.amino";
import * as _372 from "./distribution/v1beta1/tx.amino";
import * as _373 from "./feegrant/v1beta1/tx.amino";
import * as _374 from "./gov/v1/tx.amino";
import * as _375 from "./gov/v1beta1/tx.amino";
import * as _376 from "./group/v1/tx.amino";
import * as _377 from "./mint/v1beta1/tx.amino";
import * as _378 from "./protocolpool/v1/tx.amino";
import * as _379 from "./staking/v1beta1/tx.amino";
import * as _380 from "./upgrade/v1beta1/tx.amino";
import * as _381 from "./vesting/v1beta1/tx.amino";
import * as _382 from "./auth/v1beta1/tx.registry";
import * as _383 from "./authz/v1beta1/tx.registry";
import * as _384 from "./bank/v1beta1/tx.registry";
import * as _385 from "./benchmark/v1/tx.registry";
import * as _386 from "./circuit/v1/tx.registry";
import * as _387 from "./consensus/v1/tx.registry";
import * as _388 from "./counter/v1/tx.registry";
import * as _389 from "./distribution/v1beta1/tx.registry";
import * as _390 from "./feegrant/v1beta1/tx.registry";
import * as _391 from "./gov/v1/tx.registry";
import * as _392 from "./gov/v1beta1/tx.registry";
import * as _393 from "./group/v1/tx.registry";
import * as _394 from "./mint/v1beta1/tx.registry";
import * as _395 from "./protocolpool/v1/tx.registry";
import * as _396 from "./staking/v1beta1/tx.registry";
import * as _397 from "./upgrade/v1beta1/tx.registry";
import * as _398 from "./vesting/v1beta1/tx.registry";
import * as _399 from "./auth/v1beta1/query.lcd";
import * as _400 from "./authz/v1beta1/query.lcd";
import * as _401 from "./bank/v1beta1/query.lcd";
import * as _402 from "./base/node/v1beta1/query.lcd";
import * as _403 from "./circuit/v1/query.lcd";
import * as _404 from "./consensus/v1/query.lcd";
import * as _405 from "./distribution/v1beta1/query.lcd";
import * as _406 from "./epochs/v1beta1/query.lcd";
import * as _407 from "./feegrant/v1beta1/query.lcd";
import * as _408 from "./gov/v1/query.lcd";
import * as _409 from "./gov/v1beta1/query.lcd";
import * as _410 from "./group/v1/query.lcd";
import * as _411 from "./mint/v1beta1/query.lcd";
import * as _412 from "./params/v1beta1/query.lcd";
import * as _413 from "./protocolpool/v1/query.lcd";
import * as _414 from "./staking/v1beta1/query.lcd";
import * as _415 from "./tx/v1beta1/service.lcd";
import * as _416 from "./upgrade/v1beta1/query.lcd";
import * as _417 from "./auth/v1beta1/query.rpc.Query";
import * as _418 from "./authz/v1beta1/query.rpc.Query";
import * as _419 from "./bank/v1beta1/query.rpc.Query";
import * as _420 from "./base/node/v1beta1/query.rpc.Service";
import * as _421 from "./circuit/v1/query.rpc.Query";
import * as _422 from "./consensus/v1/query.rpc.Query";
import * as _423 from "./counter/v1/query.rpc.Query";
import * as _424 from "./distribution/v1beta1/query.rpc.Query";
import * as _425 from "./epochs/v1beta1/query.rpc.Query";
import * as _426 from "./feegrant/v1beta1/query.rpc.Query";
import * as _427 from "./gov/v1/query.rpc.Query";
import * as _428 from "./gov/v1beta1/query.rpc.Query";
import * as _429 from "./group/v1/query.rpc.Query";
import * as _430 from "./mint/v1beta1/query.rpc.Query";
import * as _431 from "./params/v1beta1/query.rpc.Query";
import * as _432 from "./protocolpool/v1/query.rpc.Query";
import * as _433 from "./staking/v1beta1/query.rpc.Query";
import * as _434 from "./tx/v1beta1/service.rpc.Service";
import * as _435 from "./upgrade/v1beta1/query.rpc.Query";
import * as _436 from "./auth/v1beta1/tx.rpc.msg";
import * as _437 from "./authz/v1beta1/tx.rpc.msg";
import * as _438 from "./bank/v1beta1/tx.rpc.msg";
import * as _439 from "./benchmark/v1/tx.rpc.msg";
import * as _440 from "./circuit/v1/tx.rpc.msg";
import * as _441 from "./consensus/v1/tx.rpc.msg";
import * as _442 from "./counter/v1/tx.rpc.msg";
import * as _443 from "./distribution/v1beta1/tx.rpc.msg";
import * as _444 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _445 from "./gov/v1/tx.rpc.msg";
import * as _446 from "./gov/v1beta1/tx.rpc.msg";
import * as _447 from "./group/v1/tx.rpc.msg";
import * as _448 from "./mint/v1beta1/tx.rpc.msg";
import * as _449 from "./protocolpool/v1/tx.rpc.msg";
import * as _450 from "./staking/v1beta1/tx.rpc.msg";
import * as _451 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _452 from "./vesting/v1beta1/tx.rpc.msg";
import * as _590 from "./lcd";
import * as _591 from "./rpc.query";
import * as _592 from "./rpc.tx";
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
      ..._365,
      ..._382,
      ..._399,
      ..._417,
      ..._436
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
      ..._366,
      ..._383,
      ..._400,
      ..._418,
      ..._437
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
      ..._367,
      ..._384,
      ..._401,
      ..._419,
      ..._438
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
        ..._402,
        ..._420
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
      ..._368,
      ..._385,
      ..._439
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
      ..._369,
      ..._386,
      ..._403,
      ..._421,
      ..._440
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
      ..._370,
      ..._387,
      ..._404,
      ..._422,
      ..._441
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
      ..._371,
      ..._388,
      ..._423,
      ..._442
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
      ..._372,
      ..._389,
      ..._405,
      ..._424,
      ..._443
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
      ..._406,
      ..._425
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
      ..._373,
      ..._390,
      ..._407,
      ..._426,
      ..._444
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
      ..._374,
      ..._391,
      ..._408,
      ..._427,
      ..._445
    };
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._375,
      ..._392,
      ..._409,
      ..._428,
      ..._446
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
      ..._376,
      ..._393,
      ..._410,
      ..._429,
      ..._447
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
      ..._377,
      ..._394,
      ..._411,
      ..._430,
      ..._448
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
      ..._412,
      ..._431
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
      ..._378,
      ..._395,
      ..._413,
      ..._432,
      ..._449
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
      ..._379,
      ..._396,
      ..._414,
      ..._433,
      ..._450
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
      ..._415,
      ..._434
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
      ..._380,
      ..._397,
      ..._416,
      ..._435,
      ..._451
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
      ..._381,
      ..._398,
      ..._452
    };
  }
  export const ClientFactory = {
    ..._590,
    ..._591,
    ..._592
  };
}