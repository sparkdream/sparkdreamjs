//@ts-nocheck
import * as _0 from "./audit/v1/audit";
import * as _1 from "./audit/v1/event";
import * as _2 from "./audit/v1/genesis";
import * as _3 from "./audit/v1/msg";
import * as _4 from "./audit/v1/query";
import * as _5 from "./audit/v1/service";
import * as _6 from "./audit/v1beta3/audit";
import * as _7 from "./audit/v1beta3/genesis";
import * as _8 from "./audit/v1beta3/query";
import * as _9 from "./base/attributes/v1/attribute";
import * as _10 from "./base/resources/v1beta4/cpu";
import * as _11 from "./base/resources/v1beta4/endpoint";
import * as _12 from "./base/resources/v1beta4/gpu";
import * as _13 from "./base/resources/v1beta4/memory";
import * as _14 from "./base/resources/v1beta4/resources";
import * as _15 from "./base/resources/v1beta4/resourcevalue";
import * as _16 from "./base/resources/v1beta4/storage";
import * as _17 from "./base/v1beta3/attribute";
import * as _18 from "./base/v1beta3/cpu";
import * as _19 from "./base/v1beta3/endpoint";
import * as _20 from "./base/v1beta3/gpu";
import * as _21 from "./base/v1beta3/memory";
import * as _22 from "./base/v1beta3/resources";
import * as _23 from "./base/v1beta3/resourcevalue";
import * as _24 from "./base/v1beta3/storage";
import * as _25 from "./bme/v1/events";
import * as _26 from "./bme/v1/filters";
import * as _27 from "./bme/v1/genesis";
import * as _28 from "./bme/v1/msgs";
import * as _29 from "./bme/v1/params";
import * as _30 from "./bme/v1/query";
import * as _31 from "./bme/v1/service";
import * as _32 from "./bme/v1/types";
import * as _33 from "./cert/v1/cert";
import * as _34 from "./cert/v1/filters";
import * as _35 from "./cert/v1/genesis";
import * as _36 from "./cert/v1/msg";
import * as _37 from "./cert/v1/query";
import * as _38 from "./cert/v1/service";
import * as _39 from "./cert/v1beta3/cert";
import * as _40 from "./cert/v1beta3/genesis";
import * as _41 from "./cert/v1beta3/query";
import * as _42 from "./deployment/v1/authz";
import * as _43 from "./deployment/v1/deployment";
import * as _44 from "./deployment/v1/event";
import * as _45 from "./deployment/v1/group";
import * as _46 from "./deployment/v1/msg";
import * as _47 from "./deployment/v1beta3/authz";
import * as _48 from "./deployment/v1beta3/deployment";
import * as _49 from "./deployment/v1beta3/deploymentmsg";
import * as _50 from "./deployment/v1beta3/genesis";
import * as _51 from "./deployment/v1beta3/group";
import * as _52 from "./deployment/v1beta3/groupid";
import * as _53 from "./deployment/v1beta3/groupmsg";
import * as _54 from "./deployment/v1beta3/groupspec";
import * as _55 from "./deployment/v1beta3/params";
import * as _56 from "./deployment/v1beta3/query";
import * as _57 from "./deployment/v1beta3/resourceunit";
import * as _58 from "./deployment/v1beta3/service";
import * as _59 from "./deployment/v1beta4/deploymentmsg";
import * as _60 from "./deployment/v1beta4/filters";
import * as _61 from "./deployment/v1beta4/genesis";
import * as _62 from "./deployment/v1beta4/group";
import * as _63 from "./deployment/v1beta4/groupmsg";
import * as _64 from "./deployment/v1beta4/groupspec";
import * as _65 from "./deployment/v1beta4/params";
import * as _66 from "./deployment/v1beta4/paramsmsg";
import * as _67 from "./deployment/v1beta4/query";
import * as _68 from "./deployment/v1beta4/resourceunit";
import * as _69 from "./deployment/v1beta4/service";
import * as _70 from "./discovery/v1/akash";
import * as _71 from "./discovery/v1/client_info";
import * as _72 from "./escrow/v1/account";
import * as _73 from "./escrow/v1/accountid";
import * as _74 from "./escrow/v1/fractional_payment";
import * as _75 from "./escrow/v1/genesis";
import * as _76 from "./escrow/v1/query";
import * as _77 from "./escrow/v1beta3/genesis";
import * as _78 from "./escrow/v1beta3/query";
import * as _79 from "./escrow/v1beta3/types";
import * as _80 from "./market/v1/bid";
import * as _81 from "./market/v1/event";
import * as _82 from "./market/v1/filters";
import * as _83 from "./market/v1/lease";
import * as _84 from "./market/v1/order";
import * as _85 from "./market/v1beta4/bid";
import * as _86 from "./market/v1beta4/genesis";
import * as _87 from "./market/v1beta4/lease";
import * as _88 from "./market/v1beta4/order";
import * as _89 from "./market/v1beta4/params";
import * as _90 from "./market/v1beta4/query";
import * as _91 from "./market/v1beta4/service";
import * as _92 from "./market/v1beta5/bid";
import * as _93 from "./market/v1beta5/bidmsg";
import * as _94 from "./market/v1beta5/filters";
import * as _95 from "./market/v1beta5/genesis";
import * as _96 from "./market/v1beta5/leasemsg";
import * as _97 from "./market/v1beta5/order";
import * as _98 from "./market/v1beta5/params";
import * as _99 from "./market/v1beta5/paramsmsg";
import * as _100 from "./market/v1beta5/query";
import * as _101 from "./market/v1beta5/resourcesoffer";
import * as _102 from "./market/v1beta5/service";
import * as _103 from "./provider/v1beta3/genesis";
import * as _104 from "./provider/v1beta3/provider";
import * as _105 from "./provider/v1beta3/query";
import * as _106 from "./provider/v1beta4/event";
import * as _107 from "./provider/v1beta4/genesis";
import * as _108 from "./provider/v1beta4/msg";
import * as _109 from "./provider/v1beta4/provider";
import * as _110 from "./provider/v1beta4/query";
import * as _111 from "./provider/v1beta4/service";
import * as _112 from "./take/v1/genesis";
import * as _113 from "./take/v1/params";
import * as _114 from "./take/v1/paramsmsg";
import * as _115 from "./take/v1/query";
import * as _116 from "./take/v1/service";
import * as _117 from "./take/v1beta3/genesis";
import * as _118 from "./take/v1beta3/params";
import * as _119 from "./take/v1beta3/query";
import * as _493 from "./audit/v1/service.amino";
import * as _494 from "./audit/v1beta3/audit.amino";
import * as _495 from "./bme/v1/service.amino";
import * as _496 from "./cert/v1/service.amino";
import * as _497 from "./cert/v1beta3/cert.amino";
import * as _498 from "./deployment/v1beta3/service.amino";
import * as _499 from "./deployment/v1beta4/service.amino";
import * as _500 from "./market/v1beta4/service.amino";
import * as _501 from "./market/v1beta5/service.amino";
import * as _502 from "./provider/v1beta3/provider.amino";
import * as _503 from "./provider/v1beta4/service.amino";
import * as _504 from "./take/v1/service.amino";
import * as _505 from "./audit/v1/service.registry";
import * as _506 from "./audit/v1beta3/audit.registry";
import * as _507 from "./bme/v1/service.registry";
import * as _508 from "./cert/v1/service.registry";
import * as _509 from "./cert/v1beta3/cert.registry";
import * as _510 from "./deployment/v1beta3/service.registry";
import * as _511 from "./deployment/v1beta4/service.registry";
import * as _512 from "./market/v1beta4/service.registry";
import * as _513 from "./market/v1beta5/service.registry";
import * as _514 from "./provider/v1beta3/provider.registry";
import * as _515 from "./provider/v1beta4/service.registry";
import * as _516 from "./take/v1/service.registry";
import * as _517 from "./audit/v1/query.lcd";
import * as _518 from "./audit/v1beta3/query.lcd";
import * as _519 from "./bme/v1/query.lcd";
import * as _520 from "./cert/v1/query.lcd";
import * as _521 from "./cert/v1beta3/query.lcd";
import * as _522 from "./deployment/v1beta3/query.lcd";
import * as _523 from "./deployment/v1beta4/query.lcd";
import * as _524 from "./escrow/v1/query.lcd";
import * as _525 from "./escrow/v1beta3/query.lcd";
import * as _526 from "./market/v1beta4/query.lcd";
import * as _527 from "./market/v1beta5/query.lcd";
import * as _528 from "./provider/v1beta3/query.lcd";
import * as _529 from "./provider/v1beta4/query.lcd";
import * as _530 from "./take/v1/query.lcd";
import * as _531 from "./audit/v1/query.rpc.Query";
import * as _532 from "./audit/v1beta3/query.rpc.Query";
import * as _533 from "./bme/v1/query.rpc.Query";
import * as _534 from "./cert/v1/query.rpc.Query";
import * as _535 from "./cert/v1beta3/query.rpc.Query";
import * as _536 from "./deployment/v1beta3/query.rpc.Query";
import * as _537 from "./deployment/v1beta4/query.rpc.Query";
import * as _538 from "./escrow/v1/query.rpc.Query";
import * as _539 from "./escrow/v1beta3/query.rpc.Query";
import * as _540 from "./market/v1beta4/query.rpc.Query";
import * as _541 from "./market/v1beta5/query.rpc.Query";
import * as _542 from "./provider/v1beta3/query.rpc.Query";
import * as _543 from "./provider/v1beta4/query.rpc.Query";
import * as _544 from "./take/v1/query.rpc.Query";
import * as _545 from "./take/v1beta3/query.rpc.Query";
import * as _546 from "./audit/v1/service.rpc.msg";
import * as _547 from "./audit/v1beta3/audit.rpc.msg";
import * as _548 from "./bme/v1/service.rpc.msg";
import * as _549 from "./cert/v1/service.rpc.msg";
import * as _550 from "./cert/v1beta3/cert.rpc.msg";
import * as _551 from "./deployment/v1beta3/service.rpc.msg";
import * as _552 from "./deployment/v1beta4/service.rpc.msg";
import * as _553 from "./market/v1beta4/service.rpc.msg";
import * as _554 from "./market/v1beta5/service.rpc.msg";
import * as _555 from "./provider/v1beta3/provider.rpc.msg";
import * as _556 from "./provider/v1beta4/service.rpc.msg";
import * as _557 from "./take/v1/service.rpc.msg";
import * as _788 from "./lcd";
import * as _789 from "./rpc.query";
import * as _790 from "./rpc.tx";
export namespace akash {
  export namespace audit {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._493,
      ..._505,
      ..._517,
      ..._531,
      ..._546
    };
    export const v1beta3 = {
      ..._6,
      ..._7,
      ..._8,
      ..._494,
      ..._506,
      ..._518,
      ..._532,
      ..._547
    };
  }
  export namespace base {
    export namespace attributes {
      export const v1 = {
        ..._9
      };
    }
    export namespace resources {
      export const v1beta4 = {
        ..._10,
        ..._11,
        ..._12,
        ..._13,
        ..._14,
        ..._15,
        ..._16
      };
    }
    export const v1beta3 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24
    };
  }
  export namespace bme {
    export const v1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._495,
      ..._507,
      ..._519,
      ..._533,
      ..._548
    };
  }
  export namespace cert {
    export const v1 = {
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._496,
      ..._508,
      ..._520,
      ..._534,
      ..._549
    };
    export const v1beta3 = {
      ..._39,
      ..._40,
      ..._41,
      ..._497,
      ..._509,
      ..._521,
      ..._535,
      ..._550
    };
  }
  export namespace deployment {
    export const v1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46
    };
    export const v1beta3 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._498,
      ..._510,
      ..._522,
      ..._536,
      ..._551
    };
    export const v1beta4 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._499,
      ..._511,
      ..._523,
      ..._537,
      ..._552
    };
  }
  export namespace discovery {
    export const v1 = {
      ..._70,
      ..._71
    };
  }
  export namespace escrow {
    export const v1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._524,
      ..._538
    };
    export const v1beta3 = {
      ..._77,
      ..._78,
      ..._79,
      ..._525,
      ..._539
    };
  }
  export namespace market {
    export const v1 = {
      ..._80,
      ..._81,
      ..._82,
      ..._83,
      ..._84
    };
    export const v1beta4 = {
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._500,
      ..._512,
      ..._526,
      ..._540,
      ..._553
    };
    export const v1beta5 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._501,
      ..._513,
      ..._527,
      ..._541,
      ..._554
    };
  }
  export namespace provider {
    export const v1beta3 = {
      ..._103,
      ..._104,
      ..._105,
      ..._502,
      ..._514,
      ..._528,
      ..._542,
      ..._555
    };
    export const v1beta4 = {
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._503,
      ..._515,
      ..._529,
      ..._543,
      ..._556
    };
  }
  export namespace take {
    export const v1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._504,
      ..._516,
      ..._530,
      ..._544,
      ..._557
    };
    export const v1beta3 = {
      ..._117,
      ..._118,
      ..._119,
      ..._545
    };
  }
  export const ClientFactory = {
    ..._788,
    ..._789,
    ..._790
  };
}