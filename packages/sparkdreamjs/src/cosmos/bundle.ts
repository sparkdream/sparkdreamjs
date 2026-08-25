//@ts-nocheck
import * as _175 from "./app/runtime/v1alpha1/module";
import * as _176 from "./auth/module/v1/module";
import * as _177 from "./auth/v1beta1/auth";
import * as _178 from "./auth/v1beta1/genesis";
import * as _179 from "./auth/v1beta1/query";
import * as _180 from "./auth/v1beta1/tx";
import * as _181 from "./authz/module/v1/module";
import * as _182 from "./authz/v1beta1/authz";
import * as _183 from "./authz/v1beta1/event";
import * as _184 from "./authz/v1beta1/genesis";
import * as _185 from "./authz/v1beta1/query";
import * as _186 from "./authz/v1beta1/tx";
import * as _187 from "./bank/module/v1/module";
import * as _188 from "./bank/v1beta1/authz";
import * as _189 from "./bank/v1beta1/bank";
import * as _190 from "./bank/v1beta1/genesis";
import * as _191 from "./bank/v1beta1/query";
import * as _192 from "./bank/v1beta1/tx";
import * as _193 from "./base/abci/v1beta1/abci";
import * as _194 from "./base/node/v1beta1/query";
import * as _195 from "./base/query/v1beta1/pagination";
import * as _196 from "./base/reflection/v2alpha1/reflection";
import * as _197 from "./base/v1beta1/coin";
import * as _198 from "./benchmark/module/v1/module";
import * as _199 from "./benchmark/v1/benchmark";
import * as _200 from "./benchmark/v1/tx";
import * as _201 from "./circuit/module/v1/module";
import * as _202 from "./circuit/v1/query";
import * as _203 from "./circuit/v1/tx";
import * as _204 from "./circuit/v1/types";
import * as _205 from "./consensus/module/v1/module";
import * as _206 from "./consensus/v1/query";
import * as _207 from "./consensus/v1/tx";
import * as _208 from "./counter/module/v1/module";
import * as _209 from "./counter/v1/query";
import * as _210 from "./counter/v1/tx";
import * as _211 from "./crisis/module/v1/module";
import * as _212 from "./crypto/bls12_381/keys";
import * as _213 from "./crypto/ed25519/keys";
import * as _214 from "./crypto/hd/v1/hd";
import * as _215 from "./crypto/keyring/v1/record";
import * as _216 from "./crypto/mldsa65/keys";
import * as _217 from "./crypto/multisig/keys";
import * as _218 from "./crypto/secp256k1/keys";
import * as _219 from "./crypto/secp256r1/keys";
import * as _220 from "./distribution/module/v1/module";
import * as _221 from "./distribution/v1beta1/distribution";
import * as _222 from "./distribution/v1beta1/genesis";
import * as _223 from "./distribution/v1beta1/query";
import * as _224 from "./distribution/v1beta1/tx";
import * as _225 from "./epochs/module/v1/module";
import * as _226 from "./epochs/v1beta1/events";
import * as _227 from "./epochs/v1beta1/genesis";
import * as _228 from "./epochs/v1beta1/query";
import * as _229 from "./evidence/module/v1/module";
import * as _230 from "./feegrant/module/v1/module";
import * as _231 from "./feegrant/v1beta1/feegrant";
import * as _232 from "./feegrant/v1beta1/genesis";
import * as _233 from "./feegrant/v1beta1/query";
import * as _234 from "./feegrant/v1beta1/tx";
import * as _235 from "./genutil/module/v1/module";
import * as _236 from "./gov/module/v1/module";
import * as _237 from "./gov/v1/genesis";
import * as _238 from "./gov/v1/gov";
import * as _239 from "./gov/v1/query";
import * as _240 from "./gov/v1/tx";
import * as _241 from "./gov/v1beta1/genesis";
import * as _242 from "./gov/v1beta1/gov";
import * as _243 from "./gov/v1beta1/query";
import * as _244 from "./gov/v1beta1/tx";
import * as _245 from "./group/module/v1/module";
import * as _246 from "./group/v1/events";
import * as _247 from "./group/v1/genesis";
import * as _248 from "./group/v1/query";
import * as _249 from "./group/v1/tx";
import * as _250 from "./group/v1/types";
import * as _251 from "./ics23/v1/proofs";
import * as _252 from "./mint/module/v1/module";
import * as _253 from "./mint/v1beta1/genesis";
import * as _254 from "./mint/v1beta1/mint";
import * as _255 from "./mint/v1beta1/query";
import * as _256 from "./mint/v1beta1/tx";
import * as _257 from "./msg/textual/v1/textual";
import * as _258 from "./nft/module/v1/module";
import * as _259 from "./params/module/v1/module";
import * as _260 from "./params/v1beta1/params";
import * as _261 from "./params/v1beta1/query";
import * as _262 from "./protocolpool/module/v1/module";
import * as _263 from "./protocolpool/v1/genesis";
import * as _264 from "./protocolpool/v1/query";
import * as _265 from "./protocolpool/v1/tx";
import * as _266 from "./protocolpool/v1/types";
import * as _267 from "./query/v1/query";
import * as _268 from "./reflection/v1/reflection";
import * as _269 from "./slashing/module/v1/module";
import * as _270 from "./staking/module/v1/module";
import * as _271 from "./staking/v1beta1/authz";
import * as _272 from "./staking/v1beta1/genesis";
import * as _273 from "./staking/v1beta1/query";
import * as _274 from "./staking/v1beta1/staking";
import * as _275 from "./staking/v1beta1/tx";
import * as _276 from "./store/internal/kv/v1beta1/kv";
import * as _277 from "./store/snapshots/v1/snapshot";
import * as _278 from "./store/streaming/abci/grpc";
import * as _279 from "./store/v1beta1/commit_info";
import * as _280 from "./store/v1beta1/listening";
import * as _281 from "./tx/config/v1/config";
import * as _282 from "./tx/signing/v1beta1/signing";
import * as _283 from "./tx/v1beta1/service";
import * as _284 from "./tx/v1beta1/tx";
import * as _285 from "./upgrade/module/v1/module";
import * as _286 from "./upgrade/v1beta1/query";
import * as _287 from "./upgrade/v1beta1/tx";
import * as _288 from "./upgrade/v1beta1/upgrade";
import * as _289 from "./vesting/module/v1/module";
import * as _290 from "./vesting/v1beta1/tx";
import * as _291 from "./vesting/v1beta1/vesting";
import * as _620 from "./auth/v1beta1/tx.amino";
import * as _621 from "./authz/v1beta1/tx.amino";
import * as _622 from "./bank/v1beta1/tx.amino";
import * as _623 from "./benchmark/v1/tx.amino";
import * as _624 from "./circuit/v1/tx.amino";
import * as _625 from "./consensus/v1/tx.amino";
import * as _626 from "./counter/v1/tx.amino";
import * as _627 from "./distribution/v1beta1/tx.amino";
import * as _628 from "./feegrant/v1beta1/tx.amino";
import * as _629 from "./gov/v1/tx.amino";
import * as _630 from "./gov/v1beta1/tx.amino";
import * as _631 from "./group/v1/tx.amino";
import * as _632 from "./mint/v1beta1/tx.amino";
import * as _633 from "./protocolpool/v1/tx.amino";
import * as _634 from "./staking/v1beta1/tx.amino";
import * as _635 from "./upgrade/v1beta1/tx.amino";
import * as _636 from "./vesting/v1beta1/tx.amino";
import * as _637 from "./auth/v1beta1/tx.registry";
import * as _638 from "./authz/v1beta1/tx.registry";
import * as _639 from "./bank/v1beta1/tx.registry";
import * as _640 from "./benchmark/v1/tx.registry";
import * as _641 from "./circuit/v1/tx.registry";
import * as _642 from "./consensus/v1/tx.registry";
import * as _643 from "./counter/v1/tx.registry";
import * as _644 from "./distribution/v1beta1/tx.registry";
import * as _645 from "./feegrant/v1beta1/tx.registry";
import * as _646 from "./gov/v1/tx.registry";
import * as _647 from "./gov/v1beta1/tx.registry";
import * as _648 from "./group/v1/tx.registry";
import * as _649 from "./mint/v1beta1/tx.registry";
import * as _650 from "./protocolpool/v1/tx.registry";
import * as _651 from "./staking/v1beta1/tx.registry";
import * as _652 from "./upgrade/v1beta1/tx.registry";
import * as _653 from "./vesting/v1beta1/tx.registry";
import * as _654 from "./auth/v1beta1/query.lcd";
import * as _655 from "./authz/v1beta1/query.lcd";
import * as _656 from "./bank/v1beta1/query.lcd";
import * as _657 from "./base/node/v1beta1/query.lcd";
import * as _658 from "./circuit/v1/query.lcd";
import * as _659 from "./consensus/v1/query.lcd";
import * as _660 from "./distribution/v1beta1/query.lcd";
import * as _661 from "./epochs/v1beta1/query.lcd";
import * as _662 from "./feegrant/v1beta1/query.lcd";
import * as _663 from "./gov/v1/query.lcd";
import * as _664 from "./gov/v1beta1/query.lcd";
import * as _665 from "./group/v1/query.lcd";
import * as _666 from "./mint/v1beta1/query.lcd";
import * as _667 from "./params/v1beta1/query.lcd";
import * as _668 from "./protocolpool/v1/query.lcd";
import * as _669 from "./staking/v1beta1/query.lcd";
import * as _670 from "./tx/v1beta1/service.lcd";
import * as _671 from "./upgrade/v1beta1/query.lcd";
import * as _672 from "./auth/v1beta1/query.rpc.Query";
import * as _673 from "./authz/v1beta1/query.rpc.Query";
import * as _674 from "./bank/v1beta1/query.rpc.Query";
import * as _675 from "./base/node/v1beta1/query.rpc.Service";
import * as _676 from "./circuit/v1/query.rpc.Query";
import * as _677 from "./consensus/v1/query.rpc.Query";
import * as _678 from "./counter/v1/query.rpc.Query";
import * as _679 from "./distribution/v1beta1/query.rpc.Query";
import * as _680 from "./epochs/v1beta1/query.rpc.Query";
import * as _681 from "./feegrant/v1beta1/query.rpc.Query";
import * as _682 from "./gov/v1/query.rpc.Query";
import * as _683 from "./gov/v1beta1/query.rpc.Query";
import * as _684 from "./group/v1/query.rpc.Query";
import * as _685 from "./mint/v1beta1/query.rpc.Query";
import * as _686 from "./params/v1beta1/query.rpc.Query";
import * as _687 from "./protocolpool/v1/query.rpc.Query";
import * as _688 from "./staking/v1beta1/query.rpc.Query";
import * as _689 from "./tx/v1beta1/service.rpc.Service";
import * as _690 from "./upgrade/v1beta1/query.rpc.Query";
import * as _691 from "./auth/v1beta1/tx.rpc.msg";
import * as _692 from "./authz/v1beta1/tx.rpc.msg";
import * as _693 from "./bank/v1beta1/tx.rpc.msg";
import * as _694 from "./benchmark/v1/tx.rpc.msg";
import * as _695 from "./circuit/v1/tx.rpc.msg";
import * as _696 from "./consensus/v1/tx.rpc.msg";
import * as _697 from "./counter/v1/tx.rpc.msg";
import * as _698 from "./distribution/v1beta1/tx.rpc.msg";
import * as _699 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _700 from "./gov/v1/tx.rpc.msg";
import * as _701 from "./gov/v1beta1/tx.rpc.msg";
import * as _702 from "./group/v1/tx.rpc.msg";
import * as _703 from "./mint/v1beta1/tx.rpc.msg";
import * as _704 from "./protocolpool/v1/tx.rpc.msg";
import * as _705 from "./staking/v1beta1/tx.rpc.msg";
import * as _706 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _707 from "./vesting/v1beta1/tx.rpc.msg";
import * as _853 from "./lcd";
import * as _854 from "./rpc.query";
import * as _855 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._175
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._176
      };
    }
    export const v1beta1 = {
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._620,
      ..._637,
      ..._654,
      ..._672,
      ..._691
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._181
      };
    }
    export const v1beta1 = {
      ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._621,
      ..._638,
      ..._655,
      ..._673,
      ..._692
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._187
      };
    }
    export const v1beta1 = {
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._622,
      ..._639,
      ..._656,
      ..._674,
      ..._693
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._193
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._194,
        ..._657,
        ..._675
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._195
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._196
      };
    }
    export const v1beta1 = {
      ..._197
    };
  }
  export namespace benchmark {
    export namespace module {
      export const v1 = {
        ..._198
      };
    }
    export const v1 = {
      ..._199,
      ..._200,
      ..._623,
      ..._640,
      ..._694
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._201
      };
    }
    export const v1 = {
      ..._202,
      ..._203,
      ..._204,
      ..._624,
      ..._641,
      ..._658,
      ..._676,
      ..._695
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._205
      };
    }
    export const v1 = {
      ..._206,
      ..._207,
      ..._625,
      ..._642,
      ..._659,
      ..._677,
      ..._696
    };
  }
  export namespace counter {
    export namespace module {
      export const v1 = {
        ..._208
      };
    }
    export const v1 = {
      ..._209,
      ..._210,
      ..._626,
      ..._643,
      ..._678,
      ..._697
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._211
      };
    }
  }
  export namespace crypto {
    export const bls12_381 = {
      ..._212
    };
    export const ed25519 = {
      ..._213
    };
    export namespace hd {
      export const v1 = {
        ..._214
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._215
      };
    }
    export const mldsa65 = {
      ..._216
    };
    export const multisig = {
      ..._217
    };
    export const secp256k1 = {
      ..._218
    };
    export const secp256r1 = {
      ..._219
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._220
      };
    }
    export const v1beta1 = {
      ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._627,
      ..._644,
      ..._660,
      ..._679,
      ..._698
    };
  }
  export namespace epochs {
    export namespace module {
      export const v1 = {
        ..._225
      };
    }
    export const v1beta1 = {
      ..._226,
      ..._227,
      ..._228,
      ..._661,
      ..._680
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._229
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._230
      };
    }
    export const v1beta1 = {
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._628,
      ..._645,
      ..._662,
      ..._681,
      ..._699
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._235
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._236
      };
    }
    export const v1 = {
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._629,
      ..._646,
      ..._663,
      ..._682,
      ..._700
    };
    export const v1beta1 = {
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._630,
      ..._647,
      ..._664,
      ..._683,
      ..._701
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._245
      };
    }
    export const v1 = {
      ..._246,
      ..._247,
      ..._248,
      ..._249,
      ..._250,
      ..._631,
      ..._648,
      ..._665,
      ..._684,
      ..._702
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._251
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._252
      };
    }
    export const v1beta1 = {
      ..._253,
      ..._254,
      ..._255,
      ..._256,
      ..._632,
      ..._649,
      ..._666,
      ..._685,
      ..._703
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._257
      };
    }
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._258
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._259
      };
    }
    export const v1beta1 = {
      ..._260,
      ..._261,
      ..._667,
      ..._686
    };
  }
  export namespace protocolpool {
    export namespace module {
      export const v1 = {
        ..._262
      };
    }
    export const v1 = {
      ..._263,
      ..._264,
      ..._265,
      ..._266,
      ..._633,
      ..._650,
      ..._668,
      ..._687,
      ..._704
    };
  }
  export namespace query {
    export const v1 = {
      ..._267
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._268
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._269
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._270
      };
    }
    export const v1beta1 = {
      ..._271,
      ..._272,
      ..._273,
      ..._274,
      ..._275,
      ..._634,
      ..._651,
      ..._669,
      ..._688,
      ..._705
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._276
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._277
      };
    }
    export namespace streaming {
      export const abci = {
        ..._278
      };
    }
    export const v1beta1 = {
      ..._279,
      ..._280
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._281
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._282
      };
    }
    export const v1beta1 = {
      ..._283,
      ..._284,
      ..._670,
      ..._689
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._285
      };
    }
    export const v1beta1 = {
      ..._286,
      ..._287,
      ..._288,
      ..._635,
      ..._652,
      ..._671,
      ..._690,
      ..._706
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._289
      };
    }
    export const v1beta1 = {
      ..._290,
      ..._291,
      ..._636,
      ..._653,
      ..._707
    };
  }
  export const ClientFactory = {
    ..._853,
    ..._854,
    ..._855
  };
}