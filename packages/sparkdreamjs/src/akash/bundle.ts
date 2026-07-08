//@ts-nocheck
import * as _0 from "./audit/v1/audit";
import * as _1 from "./audit/v1/event";
import * as _2 from "./audit/v1/genesis";
import * as _3 from "./audit/v1/msg";
import * as _4 from "./audit/v1/query";
import * as _5 from "./audit/v1/service";
import * as _6 from "./audit/v1beta3/audit";
import * as _7 from "./audit/v1beta3/genesis";
import * as _8 from "./base/attributes/v1/attribute";
import * as _9 from "./base/deposit/v1/deposit";
import * as _10 from "./base/offchain/sign/v1/sign";
import * as _11 from "./base/resources/v1beta4/cpu";
import * as _12 from "./base/resources/v1beta4/endpoint";
import * as _13 from "./base/resources/v1beta4/gpu";
import * as _14 from "./base/resources/v1beta4/memory";
import * as _15 from "./base/resources/v1beta4/resources";
import * as _16 from "./base/resources/v1beta4/resourcevalue";
import * as _17 from "./base/resources/v1beta4/storage";
import * as _18 from "./base/v1beta3/attribute";
import * as _19 from "./base/v1beta3/cpu";
import * as _20 from "./base/v1beta3/endpoint";
import * as _21 from "./base/v1beta3/gpu";
import * as _22 from "./base/v1beta3/memory";
import * as _23 from "./base/v1beta3/resources";
import * as _24 from "./base/v1beta3/resourcevalue";
import * as _25 from "./base/v1beta3/storage";
import * as _26 from "./bme/v1/events";
import * as _27 from "./bme/v1/filters";
import * as _28 from "./bme/v1/genesis";
import * as _29 from "./bme/v1/msgs";
import * as _30 from "./bme/v1/params";
import * as _31 from "./bme/v1/query";
import * as _32 from "./bme/v1/service";
import * as _33 from "./bme/v1/types";
import * as _34 from "./cert/v1/cert";
import * as _35 from "./cert/v1/filters";
import * as _36 from "./cert/v1/genesis";
import * as _37 from "./cert/v1/msg";
import * as _38 from "./cert/v1/query";
import * as _39 from "./cert/v1/service";
import * as _40 from "./cert/v1beta3/cert";
import * as _41 from "./cert/v1beta3/genesis";
import * as _42 from "./deployment/v1/deployment";
import * as _43 from "./deployment/v1/event";
import * as _44 from "./deployment/v1/group";
import * as _45 from "./deployment/v1beta3/authz";
import * as _46 from "./deployment/v1beta3/deployment";
import * as _47 from "./deployment/v1beta3/deploymentmsg";
import * as _48 from "./deployment/v1beta3/genesis";
import * as _49 from "./deployment/v1beta3/group";
import * as _50 from "./deployment/v1beta3/groupid";
import * as _51 from "./deployment/v1beta3/groupmsg";
import * as _52 from "./deployment/v1beta3/groupspec";
import * as _53 from "./deployment/v1beta3/params";
import * as _54 from "./deployment/v1beta3/resourceunit";
import * as _55 from "./deployment/v1beta4/deploymentmsg";
import * as _56 from "./deployment/v1beta4/filters";
import * as _57 from "./deployment/v1beta4/genesis";
import * as _58 from "./deployment/v1beta4/group";
import * as _59 from "./deployment/v1beta4/groupmsg";
import * as _60 from "./deployment/v1beta4/groupspec";
import * as _61 from "./deployment/v1beta4/params";
import * as _62 from "./deployment/v1beta4/paramsmsg";
import * as _63 from "./deployment/v1beta4/query";
import * as _64 from "./deployment/v1beta4/resourceunit";
import * as _65 from "./deployment/v1beta4/service";
import * as _66 from "./deployment/v1beta5/deploymentmsg";
import * as _67 from "./deployment/v1beta5/filters";
import * as _68 from "./deployment/v1beta5/genesis";
import * as _69 from "./deployment/v1beta5/group";
import * as _70 from "./deployment/v1beta5/groupmsg";
import * as _71 from "./deployment/v1beta5/groupspec";
import * as _72 from "./deployment/v1beta5/params";
import * as _73 from "./deployment/v1beta5/paramsmsg";
import * as _74 from "./deployment/v1beta5/query";
import * as _75 from "./deployment/v1beta5/resourceunit";
import * as _76 from "./deployment/v1beta5/service";
import * as _77 from "./discovery/v1/akash";
import * as _78 from "./discovery/v1/client_info";
import * as _79 from "./discovery/v1/service";
import * as _80 from "./downtimedetector/v1beta1/downtime_duration";
import * as _81 from "./downtimedetector/v1beta1/genesis";
import * as _82 from "./downtimedetector/v1beta1/query";
import * as _83 from "./epochs/v1beta1/events";
import * as _84 from "./epochs/v1beta1/genesis";
import * as _85 from "./epochs/v1beta1/query";
import * as _86 from "./escrow/id/v1/id";
import * as _87 from "./escrow/types/v1/account";
import * as _88 from "./escrow/types/v1/balance";
import * as _89 from "./escrow/types/v1/deposit";
import * as _90 from "./escrow/types/v1/payment";
import * as _91 from "./escrow/types/v1/state";
import * as _92 from "./escrow/v1/authz";
import * as _93 from "./escrow/v1/genesis";
import * as _94 from "./escrow/v1/msg";
import * as _95 from "./escrow/v1/query";
import * as _96 from "./escrow/v1/service";
import * as _97 from "./escrow/v1beta3/genesis";
import * as _98 from "./escrow/v1beta3/query";
import * as _99 from "./escrow/v1beta3/types";
import * as _100 from "./market/v1/bid";
import * as _101 from "./market/v1/event";
import * as _102 from "./market/v1/filters";
import * as _103 from "./market/v1/lease";
import * as _104 from "./market/v1/order";
import * as _105 from "./market/v1/reclamation";
import * as _106 from "./market/v1/types";
import * as _107 from "./market/v1beta4/bid";
import * as _108 from "./market/v1beta4/genesis";
import * as _109 from "./market/v1beta4/lease";
import * as _110 from "./market/v1beta4/order";
import * as _111 from "./market/v1beta4/params";
import * as _112 from "./market/v1beta5/bid";
import * as _113 from "./market/v1beta5/bidmsg";
import * as _114 from "./market/v1beta5/filters";
import * as _115 from "./market/v1beta5/genesis";
import * as _116 from "./market/v1beta5/leasemsg";
import * as _117 from "./market/v1beta5/order";
import * as _118 from "./market/v1beta5/params";
import * as _119 from "./market/v1beta5/paramsmsg";
import * as _120 from "./market/v1beta5/query";
import * as _121 from "./market/v1beta5/resourcesoffer";
import * as _122 from "./market/v1beta5/service";
import * as _123 from "./market/v2beta1/bid";
import * as _124 from "./market/v2beta1/bidmsg";
import * as _125 from "./market/v2beta1/event";
import * as _126 from "./market/v2beta1/filters";
import * as _127 from "./market/v2beta1/genesis";
import * as _128 from "./market/v2beta1/lease";
import * as _129 from "./market/v2beta1/leasemsg";
import * as _130 from "./market/v2beta1/order";
import * as _131 from "./market/v2beta1/params";
import * as _132 from "./market/v2beta1/paramsmsg";
import * as _133 from "./market/v2beta1/query";
import * as _134 from "./market/v2beta1/resourcesoffer";
import * as _135 from "./market/v2beta1/service";
import * as _136 from "./market/v2beta1/types";
import * as _137 from "./oracle/v1/events";
import * as _138 from "./oracle/v1/genesis";
import * as _139 from "./oracle/v1/msgs";
import * as _140 from "./oracle/v1/params";
import * as _141 from "./oracle/v1/prices";
import * as _142 from "./oracle/v1/query";
import * as _143 from "./oracle/v1/service";
import * as _144 from "./oracle/v2/events";
import * as _145 from "./oracle/v2/genesis";
import * as _146 from "./oracle/v2/msgs";
import * as _147 from "./oracle/v2/params";
import * as _148 from "./oracle/v2/prices";
import * as _149 from "./oracle/v2/query";
import * as _150 from "./oracle/v2/service";
import * as _151 from "./provider/v1beta3/genesis";
import * as _152 from "./provider/v1beta3/provider";
import * as _153 from "./provider/v1beta4/event";
import * as _154 from "./provider/v1beta4/genesis";
import * as _155 from "./provider/v1beta4/msg";
import * as _156 from "./provider/v1beta4/provider";
import * as _157 from "./provider/v1beta4/query";
import * as _158 from "./provider/v1beta4/service";
import * as _159 from "./take/v1/genesis";
import * as _160 from "./take/v1/params";
import * as _161 from "./take/v1/paramsmsg";
import * as _162 from "./take/v1/query";
import * as _163 from "./take/v1/service";
import * as _164 from "./take/v1beta3/genesis";
import * as _165 from "./take/v1beta3/params";
import * as _166 from "./take/v1beta3/query";
import * as _167 from "./wasm/v1/event";
import * as _168 from "./wasm/v1/genesis";
import * as _169 from "./wasm/v1/params";
import * as _170 from "./wasm/v1/paramsmsg";
import * as _171 from "./wasm/v1/query";
import * as _172 from "./wasm/v1/service";
import * as _546 from "./audit/v1/service.amino";
import * as _547 from "./bme/v1/service.amino";
import * as _548 from "./cert/v1/service.amino";
import * as _549 from "./deployment/v1beta4/service.amino";
import * as _550 from "./deployment/v1beta5/service.amino";
import * as _551 from "./escrow/v1/service.amino";
import * as _552 from "./market/v1beta5/service.amino";
import * as _553 from "./market/v2beta1/service.amino";
import * as _554 from "./oracle/v1/service.amino";
import * as _555 from "./oracle/v2/service.amino";
import * as _556 from "./provider/v1beta4/service.amino";
import * as _557 from "./take/v1/service.amino";
import * as _558 from "./wasm/v1/service.amino";
import * as _559 from "./audit/v1/service.registry";
import * as _560 from "./bme/v1/service.registry";
import * as _561 from "./cert/v1/service.registry";
import * as _562 from "./deployment/v1beta4/service.registry";
import * as _563 from "./deployment/v1beta5/service.registry";
import * as _564 from "./escrow/v1/service.registry";
import * as _565 from "./market/v1beta5/service.registry";
import * as _566 from "./market/v2beta1/service.registry";
import * as _567 from "./oracle/v1/service.registry";
import * as _568 from "./oracle/v2/service.registry";
import * as _569 from "./provider/v1beta4/service.registry";
import * as _570 from "./take/v1/service.registry";
import * as _571 from "./wasm/v1/service.registry";
import * as _572 from "./audit/v1/query.lcd";
import * as _573 from "./bme/v1/query.lcd";
import * as _574 from "./cert/v1/query.lcd";
import * as _575 from "./deployment/v1beta4/query.lcd";
import * as _576 from "./deployment/v1beta5/query.lcd";
import * as _577 from "./downtimedetector/v1beta1/query.lcd";
import * as _578 from "./epochs/v1beta1/query.lcd";
import * as _579 from "./escrow/v1/query.lcd";
import * as _580 from "./escrow/v1beta3/query.lcd";
import * as _581 from "./market/v1beta5/query.lcd";
import * as _582 from "./market/v2beta1/query.lcd";
import * as _583 from "./oracle/v1/query.lcd";
import * as _584 from "./oracle/v2/query.lcd";
import * as _585 from "./provider/v1beta4/query.lcd";
import * as _586 from "./take/v1/query.lcd";
import * as _587 from "./wasm/v1/query.lcd";
import * as _588 from "./audit/v1/query.rpc.Query";
import * as _589 from "./bme/v1/query.rpc.Query";
import * as _590 from "./cert/v1/query.rpc.Query";
import * as _591 from "./deployment/v1beta4/query.rpc.Query";
import * as _592 from "./deployment/v1beta5/query.rpc.Query";
import * as _593 from "./downtimedetector/v1beta1/query.rpc.Query";
import * as _594 from "./epochs/v1beta1/query.rpc.Query";
import * as _595 from "./escrow/v1/query.rpc.Query";
import * as _596 from "./escrow/v1beta3/query.rpc.Query";
import * as _597 from "./market/v1beta5/query.rpc.Query";
import * as _598 from "./market/v2beta1/query.rpc.Query";
import * as _599 from "./oracle/v1/query.rpc.Query";
import * as _600 from "./oracle/v2/query.rpc.Query";
import * as _601 from "./provider/v1beta4/query.rpc.Query";
import * as _602 from "./take/v1/query.rpc.Query";
import * as _603 from "./take/v1beta3/query.rpc.Query";
import * as _604 from "./wasm/v1/query.rpc.Query";
import * as _605 from "./audit/v1/service.rpc.msg";
import * as _606 from "./bme/v1/service.rpc.msg";
import * as _607 from "./cert/v1/service.rpc.msg";
import * as _608 from "./deployment/v1beta4/service.rpc.msg";
import * as _609 from "./deployment/v1beta5/service.rpc.msg";
import * as _610 from "./escrow/v1/service.rpc.msg";
import * as _611 from "./market/v1beta5/service.rpc.msg";
import * as _612 from "./market/v2beta1/service.rpc.msg";
import * as _613 from "./oracle/v1/service.rpc.msg";
import * as _614 from "./oracle/v2/service.rpc.msg";
import * as _615 from "./provider/v1beta4/service.rpc.msg";
import * as _616 from "./take/v1/service.rpc.msg";
import * as _617 from "./wasm/v1/service.rpc.msg";
import * as _848 from "./lcd";
import * as _849 from "./rpc.query";
import * as _850 from "./rpc.tx";
export namespace akash {
  export namespace audit {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._546,
      ..._559,
      ..._572,
      ..._588,
      ..._605
    };
    export const v1beta3 = {
      ..._6,
      ..._7
    };
  }
  export namespace base {
    export namespace attributes {
      export const v1 = {
        ..._8
      };
    }
    export namespace deposit {
      export const v1 = {
        ..._9
      };
    }
    export namespace offchain {
      export namespace sign {
        export const v1 = {
          ..._10
        };
      }
    }
    export namespace resources {
      export const v1beta4 = {
        ..._11,
        ..._12,
        ..._13,
        ..._14,
        ..._15,
        ..._16,
        ..._17
      };
    }
    export const v1beta3 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25
    };
  }
  export namespace bme {
    export const v1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._547,
      ..._560,
      ..._573,
      ..._589,
      ..._606
    };
  }
  export namespace cert {
    export const v1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._548,
      ..._561,
      ..._574,
      ..._590,
      ..._607
    };
    export const v1beta3 = {
      ..._40,
      ..._41
    };
  }
  export namespace deployment {
    export const v1 = {
      ..._42,
      ..._43,
      ..._44
    };
    export const v1beta3 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._54
    };
    export const v1beta4 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._549,
      ..._562,
      ..._575,
      ..._591,
      ..._608
    };
    export const v1beta5 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._550,
      ..._563,
      ..._576,
      ..._592,
      ..._609
    };
  }
  export namespace discovery {
    export const v1 = {
      ..._77,
      ..._78,
      ..._79
    };
  }
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._577,
      ..._593
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._578,
      ..._594
    };
  }
  export namespace escrow {
    export namespace id {
      export const v1 = {
        ..._86
      };
    }
    export namespace types {
      export const v1 = {
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._91
      };
    }
    export const v1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._551,
      ..._564,
      ..._579,
      ..._595,
      ..._610
    };
    export const v1beta3 = {
      ..._97,
      ..._98,
      ..._99,
      ..._580,
      ..._596
    };
  }
  export namespace market {
    export const v1 = {
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106
    };
    export const v1beta4 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111
    };
    export const v1beta5 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._552,
      ..._565,
      ..._581,
      ..._597,
      ..._611
    };
    export const v2beta1 = {
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._553,
      ..._566,
      ..._582,
      ..._598,
      ..._612
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._554,
      ..._567,
      ..._583,
      ..._599,
      ..._613
    };
    export const v2 = {
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._555,
      ..._568,
      ..._584,
      ..._600,
      ..._614
    };
  }
  export namespace provider {
    export const v1beta3 = {
      ..._151,
      ..._152
    };
    export const v1beta4 = {
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._556,
      ..._569,
      ..._585,
      ..._601,
      ..._615
    };
  }
  export namespace take {
    export const v1 = {
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._557,
      ..._570,
      ..._586,
      ..._602,
      ..._616
    };
    export const v1beta3 = {
      ..._164,
      ..._165,
      ..._166,
      ..._603
    };
  }
  export namespace wasm {
    export const v1 = {
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._558,
      ..._571,
      ..._587,
      ..._604,
      ..._617
    };
  }
  export const ClientFactory = {
    ..._848,
    ..._849,
    ..._850
  };
}