//@ts-nocheck
import * as _175 from "./blog/module/v1/module";
import * as _176 from "./blog/v1/genesis";
import * as _177 from "./blog/v1/params";
import * as _178 from "./blog/v1/post";
import * as _179 from "./blog/v1/query";
import * as _180 from "./blog/v1/tx";
import * as _181 from "./blog/v1/types";
import * as _182 from "./collect/module/v1/module";
import * as _183 from "./collect/v1/curator_activity";
import * as _184 from "./collect/v1/genesis";
import * as _185 from "./collect/v1/params";
import * as _186 from "./collect/v1/query";
import * as _187 from "./collect/v1/tx";
import * as _188 from "./collect/v1/types";
import * as _189 from "./common/v1/content_type";
import * as _190 from "./common/v1/flag_record";
import * as _191 from "./common/v1/moderation_reason";
import * as _192 from "./commons/module/v1/module";
import * as _193 from "./commons/v1/category";
import * as _194 from "./commons/v1/genesis";
import * as _195 from "./commons/v1/group";
import * as _196 from "./commons/v1/params";
import * as _197 from "./commons/v1/policy_permissions";
import * as _198 from "./commons/v1/query";
import * as _199 from "./commons/v1/tx";
import * as _200 from "./ecosystem/module/v1/module";
import * as _201 from "./ecosystem/v1/genesis";
import * as _202 from "./ecosystem/v1/params";
import * as _203 from "./ecosystem/v1/query";
import * as _204 from "./ecosystem/v1/tx";
import * as _205 from "./federation/module/v1/module";
import * as _206 from "./federation/v1/genesis";
import * as _207 from "./federation/v1/packet";
import * as _208 from "./federation/v1/params";
import * as _209 from "./federation/v1/query";
import * as _210 from "./federation/v1/tx";
import * as _211 from "./federation/v1/types";
import * as _212 from "./federation/v1/verifier_activity";
import * as _213 from "./forum/module/v1/module";
import * as _214 from "./forum/v1/archive_metadata";
import * as _215 from "./forum/v1/bounty";
import * as _216 from "./forum/v1/genesis";
import * as _217 from "./forum/v1/hide_record";
import * as _218 from "./forum/v1/params";
import * as _219 from "./forum/v1/post_flag";
import * as _220 from "./forum/v1/post";
import * as _221 from "./forum/v1/query";
import * as _222 from "./forum/v1/sentinel_activity";
import * as _223 from "./forum/v1/thread_follow_count";
import * as _224 from "./forum/v1/thread_follow";
import * as _225 from "./forum/v1/thread_lock_record";
import * as _226 from "./forum/v1/thread_metadata";
import * as _227 from "./forum/v1/thread_move_record";
import * as _228 from "./forum/v1/tx";
import * as _229 from "./forum/v1/types";
import * as _230 from "./forum/v1/user_rate_limit";
import * as _231 from "./forum/v1/user_reaction_limit";
import * as _232 from "./futarchy/module/v1/module";
import * as _233 from "./futarchy/v1/genesis";
import * as _234 from "./futarchy/v1/market";
import * as _235 from "./futarchy/v1/params";
import * as _236 from "./futarchy/v1/query";
import * as _237 from "./futarchy/v1/tx";
import * as _238 from "./name/module/v1/module";
import * as _239 from "./name/v1/dispute";
import * as _240 from "./name/v1/genesis";
import * as _241 from "./name/v1/name_record";
import * as _242 from "./name/v1/owner_info";
import * as _243 from "./name/v1/params";
import * as _244 from "./name/v1/query";
import * as _245 from "./name/v1/tx";
import * as _246 from "./rep/module/v1/module";
import * as _247 from "./rep/v1/accountability";
import * as _248 from "./rep/v1/bonded_role";
import * as _249 from "./rep/v1/challenge";
import * as _250 from "./rep/v1/content_challenge";
import * as _251 from "./rep/v1/genesis";
import * as _252 from "./rep/v1/gov_action_appeal";
import * as _253 from "./rep/v1/initiative";
import * as _254 from "./rep/v1/interim_template";
import * as _255 from "./rep/v1/interim";
import * as _256 from "./rep/v1/invitation";
import * as _257 from "./rep/v1/jury_participation";
import * as _258 from "./rep/v1/jury_review";
import * as _259 from "./rep/v1/member_report";
import * as _260 from "./rep/v1/member_warning";
import * as _261 from "./rep/v1/member";
import * as _262 from "./rep/v1/params";
import * as _263 from "./rep/v1/project";
import * as _264 from "./rep/v1/query";
import * as _265 from "./rep/v1/reserved_tag";
import * as _266 from "./rep/v1/stake";
import * as _267 from "./rep/v1/tag_budget_award";
import * as _268 from "./rep/v1/tag_budget";
import * as _269 from "./rep/v1/tag_report";
import * as _270 from "./rep/v1/tag";
import * as _271 from "./rep/v1/tx";
import * as _272 from "./reveal/module/v1/module";
import * as _273 from "./reveal/v1/genesis";
import * as _274 from "./reveal/v1/params";
import * as _275 from "./reveal/v1/query";
import * as _276 from "./reveal/v1/tx";
import * as _277 from "./reveal/v1/types";
import * as _278 from "./season/module/v1/module";
import * as _279 from "./season/v1/achievement";
import * as _280 from "./season/v1/display_name_appeal_stake";
import * as _281 from "./season/v1/display_name_moderation";
import * as _282 from "./season/v1/display_name_report_stake";
import * as _283 from "./season/v1/enums";
import * as _284 from "./season/v1/epoch_xp_tracker";
import * as _285 from "./season/v1/forum_xp_cooldown";
import * as _286 from "./season/v1/genesis";
import * as _287 from "./season/v1/guild_invite";
import * as _288 from "./season/v1/guild_membership";
import * as _289 from "./season/v1/guild";
import * as _290 from "./season/v1/member_profile";
import * as _291 from "./season/v1/member_quest_progress";
import * as _292 from "./season/v1/member_registration";
import * as _293 from "./season/v1/member_season_snapshot";
import * as _294 from "./season/v1/next_season_info";
import * as _295 from "./season/v1/nomination";
import * as _296 from "./season/v1/params";
import * as _297 from "./season/v1/query";
import * as _298 from "./season/v1/quest";
import * as _299 from "./season/v1/season_snapshot";
import * as _300 from "./season/v1/season_title_eligibility";
import * as _301 from "./season/v1/season_transition_state";
import * as _302 from "./season/v1/season";
import * as _303 from "./season/v1/title";
import * as _304 from "./season/v1/transition_recovery_state";
import * as _305 from "./season/v1/tx";
import * as _306 from "./season/v1/vote_xp_record";
import * as _307 from "./session/module/v1/module";
import * as _308 from "./session/v1/genesis";
import * as _309 from "./session/v1/params";
import * as _310 from "./session/v1/query";
import * as _311 from "./session/v1/session";
import * as _312 from "./session/v1/tx";
import * as _313 from "./shield/module/v1/module";
import * as _314 from "./shield/v1/genesis";
import * as _315 from "./shield/v1/params";
import * as _316 from "./shield/v1/query";
import * as _317 from "./shield/v1/tx";
import * as _318 from "./shield/v1/types";
import * as _319 from "./sparkdream/module/v1/module";
import * as _320 from "./sparkdream/v1/genesis";
import * as _321 from "./sparkdream/v1/params";
import * as _322 from "./sparkdream/v1/query";
import * as _323 from "./sparkdream/v1/tx";
import * as _324 from "./split/module/v1/module";
import * as _325 from "./split/v1/genesis";
import * as _326 from "./split/v1/params";
import * as _327 from "./split/v1/query";
import * as _328 from "./split/v1/share";
import * as _329 from "./split/v1/tx";
import * as _478 from "./blog/v1/tx.amino";
import * as _479 from "./collect/v1/tx.amino";
import * as _480 from "./commons/v1/tx.amino";
import * as _481 from "./ecosystem/v1/tx.amino";
import * as _482 from "./federation/v1/tx.amino";
import * as _483 from "./forum/v1/tx.amino";
import * as _484 from "./futarchy/v1/tx.amino";
import * as _485 from "./name/v1/tx.amino";
import * as _486 from "./rep/v1/tx.amino";
import * as _487 from "./reveal/v1/tx.amino";
import * as _488 from "./season/v1/tx.amino";
import * as _489 from "./session/v1/tx.amino";
import * as _490 from "./shield/v1/tx.amino";
import * as _491 from "./sparkdream/v1/tx.amino";
import * as _492 from "./split/v1/tx.amino";
import * as _493 from "./blog/v1/tx.registry";
import * as _494 from "./collect/v1/tx.registry";
import * as _495 from "./commons/v1/tx.registry";
import * as _496 from "./ecosystem/v1/tx.registry";
import * as _497 from "./federation/v1/tx.registry";
import * as _498 from "./forum/v1/tx.registry";
import * as _499 from "./futarchy/v1/tx.registry";
import * as _500 from "./name/v1/tx.registry";
import * as _501 from "./rep/v1/tx.registry";
import * as _502 from "./reveal/v1/tx.registry";
import * as _503 from "./season/v1/tx.registry";
import * as _504 from "./session/v1/tx.registry";
import * as _505 from "./shield/v1/tx.registry";
import * as _506 from "./sparkdream/v1/tx.registry";
import * as _507 from "./split/v1/tx.registry";
import * as _508 from "./blog/v1/query.lcd";
import * as _509 from "./collect/v1/query.lcd";
import * as _510 from "./commons/v1/query.lcd";
import * as _511 from "./ecosystem/v1/query.lcd";
import * as _512 from "./federation/v1/query.lcd";
import * as _513 from "./forum/v1/query.lcd";
import * as _514 from "./futarchy/v1/query.lcd";
import * as _515 from "./name/v1/query.lcd";
import * as _516 from "./rep/v1/query.lcd";
import * as _517 from "./reveal/v1/query.lcd";
import * as _518 from "./season/v1/query.lcd";
import * as _519 from "./session/v1/query.lcd";
import * as _520 from "./shield/v1/query.lcd";
import * as _521 from "./sparkdream/v1/query.lcd";
import * as _522 from "./split/v1/query.lcd";
import * as _523 from "./blog/v1/query.rpc.Query";
import * as _524 from "./collect/v1/query.rpc.Query";
import * as _525 from "./commons/v1/query.rpc.Query";
import * as _526 from "./ecosystem/v1/query.rpc.Query";
import * as _527 from "./federation/v1/query.rpc.Query";
import * as _528 from "./forum/v1/query.rpc.Query";
import * as _529 from "./futarchy/v1/query.rpc.Query";
import * as _530 from "./name/v1/query.rpc.Query";
import * as _531 from "./rep/v1/query.rpc.Query";
import * as _532 from "./reveal/v1/query.rpc.Query";
import * as _533 from "./season/v1/query.rpc.Query";
import * as _534 from "./session/v1/query.rpc.Query";
import * as _535 from "./shield/v1/query.rpc.Query";
import * as _536 from "./sparkdream/v1/query.rpc.Query";
import * as _537 from "./split/v1/query.rpc.Query";
import * as _538 from "./blog/v1/tx.rpc.msg";
import * as _539 from "./collect/v1/tx.rpc.msg";
import * as _540 from "./commons/v1/tx.rpc.msg";
import * as _541 from "./ecosystem/v1/tx.rpc.msg";
import * as _542 from "./federation/v1/tx.rpc.msg";
import * as _543 from "./forum/v1/tx.rpc.msg";
import * as _544 from "./futarchy/v1/tx.rpc.msg";
import * as _545 from "./name/v1/tx.rpc.msg";
import * as _546 from "./rep/v1/tx.rpc.msg";
import * as _547 from "./reveal/v1/tx.rpc.msg";
import * as _548 from "./season/v1/tx.rpc.msg";
import * as _549 from "./session/v1/tx.rpc.msg";
import * as _550 from "./shield/v1/tx.rpc.msg";
import * as _551 from "./sparkdream/v1/tx.rpc.msg";
import * as _552 from "./split/v1/tx.rpc.msg";
import * as _559 from "./lcd";
import * as _560 from "./rpc.query";
import * as _561 from "./rpc.tx";
export namespace sparkdream {
  export namespace blog {
    export namespace module {
      export const v1 = {
        ..._175
      };
    }
    export const v1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._478,
      ..._493,
      ..._508,
      ..._523,
      ..._538
    };
  }
  export namespace collect {
    export namespace module {
      export const v1 = {
        ..._182
      };
    }
    export const v1 = {
      ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._479,
      ..._494,
      ..._509,
      ..._524,
      ..._539
    };
  }
  export namespace common {
    export const v1 = {
      ..._189,
      ..._190,
      ..._191
    };
  }
  export namespace commons {
    export namespace module {
      export const v1 = {
        ..._192
      };
    }
    export const v1 = {
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._480,
      ..._495,
      ..._510,
      ..._525,
      ..._540
    };
  }
  export namespace ecosystem {
    export namespace module {
      export const v1 = {
        ..._200
      };
    }
    export const v1 = {
      ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._481,
      ..._496,
      ..._511,
      ..._526,
      ..._541
    };
  }
  export namespace federation {
    export namespace module {
      export const v1 = {
        ..._205
      };
    }
    export const v1 = {
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._482,
      ..._497,
      ..._512,
      ..._527,
      ..._542
    };
  }
  export namespace forum {
    export namespace module {
      export const v1 = {
        ..._213
      };
    }
    export const v1 = {
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._483,
      ..._498,
      ..._513,
      ..._528,
      ..._543
    };
  }
  export namespace futarchy {
    export namespace module {
      export const v1 = {
        ..._232
      };
    }
    export const v1 = {
      ..._233,
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._484,
      ..._499,
      ..._514,
      ..._529,
      ..._544
    };
  }
  export namespace name {
    export namespace module {
      export const v1 = {
        ..._238
      };
    }
    export const v1 = {
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._485,
      ..._500,
      ..._515,
      ..._530,
      ..._545
    };
  }
  export namespace rep {
    export namespace module {
      export const v1 = {
        ..._246
      };
    }
    export const v1 = {
      ..._247,
      ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._253,
      ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._259,
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._265,
      ..._266,
      ..._267,
      ..._268,
      ..._269,
      ..._270,
      ..._271,
      ..._486,
      ..._501,
      ..._516,
      ..._531,
      ..._546
    };
  }
  export namespace reveal {
    export namespace module {
      export const v1 = {
        ..._272
      };
    }
    export const v1 = {
      ..._273,
      ..._274,
      ..._275,
      ..._276,
      ..._277,
      ..._487,
      ..._502,
      ..._517,
      ..._532,
      ..._547
    };
  }
  export namespace season {
    export namespace module {
      export const v1 = {
        ..._278
      };
    }
    export const v1 = {
      ..._279,
      ..._280,
      ..._281,
      ..._282,
      ..._283,
      ..._284,
      ..._285,
      ..._286,
      ..._287,
      ..._288,
      ..._289,
      ..._290,
      ..._291,
      ..._292,
      ..._293,
      ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._298,
      ..._299,
      ..._300,
      ..._301,
      ..._302,
      ..._303,
      ..._304,
      ..._305,
      ..._306,
      ..._488,
      ..._503,
      ..._518,
      ..._533,
      ..._548
    };
  }
  export namespace session {
    export namespace module {
      export const v1 = {
        ..._307
      };
    }
    export const v1 = {
      ..._308,
      ..._309,
      ..._310,
      ..._311,
      ..._312,
      ..._489,
      ..._504,
      ..._519,
      ..._534,
      ..._549
    };
  }
  export namespace shield {
    export namespace module {
      export const v1 = {
        ..._313
      };
    }
    export const v1 = {
      ..._314,
      ..._315,
      ..._316,
      ..._317,
      ..._318,
      ..._490,
      ..._505,
      ..._520,
      ..._535,
      ..._550
    };
  }
  export namespace sparkdream {
    export namespace module {
      export const v1 = {
        ..._319
      };
    }
    export const v1 = {
      ..._320,
      ..._321,
      ..._322,
      ..._323,
      ..._491,
      ..._506,
      ..._521,
      ..._536,
      ..._551
    };
  }
  export namespace split {
    export namespace module {
      export const v1 = {
        ..._324
      };
    }
    export const v1 = {
      ..._325,
      ..._326,
      ..._327,
      ..._328,
      ..._329,
      ..._492,
      ..._507,
      ..._522,
      ..._537,
      ..._552
    };
  }
  export const ClientFactory = {
    ..._559,
    ..._560,
    ..._561
  };
}