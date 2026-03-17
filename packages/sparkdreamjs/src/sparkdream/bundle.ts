//@ts-nocheck
import * as _175 from "./blog/module/v1/module";
import * as _176 from "./blog/v1/genesis";
import * as _177 from "./blog/v1/params";
import * as _178 from "./blog/v1/post";
import * as _179 from "./blog/v1/query";
import * as _180 from "./blog/v1/tx";
import * as _181 from "./blog/v1/types";
import * as _182 from "./collect/module/v1/module";
import * as _183 from "./collect/v1/genesis";
import * as _184 from "./collect/v1/params";
import * as _185 from "./collect/v1/query";
import * as _186 from "./collect/v1/tx";
import * as _187 from "./collect/v1/types";
import * as _188 from "./common/v1/content_type";
import * as _189 from "./common/v1/flag_record";
import * as _190 from "./common/v1/moderation_reason";
import * as _191 from "./common/v1/reserved_tag";
import * as _192 from "./common/v1/tag";
import * as _193 from "./commons/module/v1/module";
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
import * as _205 from "./forum/module/v1/module";
import * as _206 from "./forum/v1/archive_metadata";
import * as _207 from "./forum/v1/bounty";
import * as _208 from "./forum/v1/category";
import * as _209 from "./forum/v1/genesis";
import * as _210 from "./forum/v1/gov_action_appeal";
import * as _211 from "./forum/v1/hide_record";
import * as _212 from "./forum/v1/jury_participation";
import * as _213 from "./forum/v1/member_report";
import * as _214 from "./forum/v1/member_salvation_status";
import * as _215 from "./forum/v1/member_warning";
import * as _216 from "./forum/v1/params";
import * as _217 from "./forum/v1/post_flag";
import * as _218 from "./forum/v1/post";
import * as _219 from "./forum/v1/query";
import * as _220 from "./forum/v1/sentinel_activity";
import * as _221 from "./forum/v1/tag_budget_award";
import * as _222 from "./forum/v1/tag_budget";
import * as _223 from "./forum/v1/tag_report";
import * as _224 from "./forum/v1/thread_follow_count";
import * as _225 from "./forum/v1/thread_follow";
import * as _226 from "./forum/v1/thread_lock_record";
import * as _227 from "./forum/v1/thread_metadata";
import * as _228 from "./forum/v1/thread_move_record";
import * as _229 from "./forum/v1/tx";
import * as _230 from "./forum/v1/types";
import * as _231 from "./forum/v1/user_rate_limit";
import * as _232 from "./forum/v1/user_reaction_limit";
import * as _233 from "./futarchy/module/v1/module";
import * as _234 from "./futarchy/v1/genesis";
import * as _235 from "./futarchy/v1/market";
import * as _236 from "./futarchy/v1/params";
import * as _237 from "./futarchy/v1/query";
import * as _238 from "./futarchy/v1/tx";
import * as _239 from "./name/module/v1/module";
import * as _240 from "./name/v1/dispute";
import * as _241 from "./name/v1/genesis";
import * as _242 from "./name/v1/name_record";
import * as _243 from "./name/v1/owner_info";
import * as _244 from "./name/v1/params";
import * as _245 from "./name/v1/query";
import * as _246 from "./name/v1/tx";
import * as _247 from "./rep/module/v1/module";
import * as _248 from "./rep/v1/challenge";
import * as _249 from "./rep/v1/content_challenge";
import * as _250 from "./rep/v1/genesis";
import * as _251 from "./rep/v1/initiative";
import * as _252 from "./rep/v1/interim_template";
import * as _253 from "./rep/v1/interim";
import * as _254 from "./rep/v1/invitation";
import * as _255 from "./rep/v1/jury_review";
import * as _256 from "./rep/v1/member";
import * as _257 from "./rep/v1/params";
import * as _258 from "./rep/v1/project";
import * as _259 from "./rep/v1/query";
import * as _260 from "./rep/v1/stake";
import * as _261 from "./rep/v1/tx";
import * as _262 from "./reveal/module/v1/module";
import * as _263 from "./reveal/v1/genesis";
import * as _264 from "./reveal/v1/params";
import * as _265 from "./reveal/v1/query";
import * as _266 from "./reveal/v1/tx";
import * as _267 from "./reveal/v1/types";
import * as _268 from "./season/module/v1/module";
import * as _269 from "./season/v1/achievement";
import * as _270 from "./season/v1/display_name_appeal_stake";
import * as _271 from "./season/v1/display_name_moderation";
import * as _272 from "./season/v1/display_name_report_stake";
import * as _273 from "./season/v1/enums";
import * as _274 from "./season/v1/epoch_xp_tracker";
import * as _275 from "./season/v1/forum_xp_cooldown";
import * as _276 from "./season/v1/genesis";
import * as _277 from "./season/v1/guild_invite";
import * as _278 from "./season/v1/guild_membership";
import * as _279 from "./season/v1/guild";
import * as _280 from "./season/v1/member_profile";
import * as _281 from "./season/v1/member_quest_progress";
import * as _282 from "./season/v1/member_registration";
import * as _283 from "./season/v1/member_season_snapshot";
import * as _284 from "./season/v1/next_season_info";
import * as _285 from "./season/v1/nomination";
import * as _286 from "./season/v1/params";
import * as _287 from "./season/v1/query";
import * as _288 from "./season/v1/quest";
import * as _289 from "./season/v1/season_snapshot";
import * as _290 from "./season/v1/season_title_eligibility";
import * as _291 from "./season/v1/season_transition_state";
import * as _292 from "./season/v1/season";
import * as _293 from "./season/v1/title";
import * as _294 from "./season/v1/transition_recovery_state";
import * as _295 from "./season/v1/tx";
import * as _296 from "./season/v1/vote_xp_record";
import * as _297 from "./session/module/v1/module";
import * as _298 from "./session/v1/genesis";
import * as _299 from "./session/v1/params";
import * as _300 from "./session/v1/query";
import * as _301 from "./session/v1/session";
import * as _302 from "./session/v1/tx";
import * as _303 from "./shield/module/v1/module";
import * as _304 from "./shield/v1/genesis";
import * as _305 from "./shield/v1/params";
import * as _306 from "./shield/v1/query";
import * as _307 from "./shield/v1/tx";
import * as _308 from "./shield/v1/types";
import * as _309 from "./sparkdream/module/v1/module";
import * as _310 from "./sparkdream/v1/genesis";
import * as _311 from "./sparkdream/v1/params";
import * as _312 from "./sparkdream/v1/query";
import * as _313 from "./sparkdream/v1/tx";
import * as _314 from "./split/module/v1/module";
import * as _315 from "./split/v1/genesis";
import * as _316 from "./split/v1/params";
import * as _317 from "./split/v1/query";
import * as _318 from "./split/v1/share";
import * as _319 from "./split/v1/tx";
import * as _468 from "./blog/v1/tx.amino";
import * as _469 from "./collect/v1/tx.amino";
import * as _470 from "./commons/v1/tx.amino";
import * as _471 from "./ecosystem/v1/tx.amino";
import * as _472 from "./forum/v1/tx.amino";
import * as _473 from "./futarchy/v1/tx.amino";
import * as _474 from "./name/v1/tx.amino";
import * as _475 from "./rep/v1/tx.amino";
import * as _476 from "./reveal/v1/tx.amino";
import * as _477 from "./season/v1/tx.amino";
import * as _478 from "./session/v1/tx.amino";
import * as _479 from "./shield/v1/tx.amino";
import * as _480 from "./sparkdream/v1/tx.amino";
import * as _481 from "./split/v1/tx.amino";
import * as _482 from "./blog/v1/tx.registry";
import * as _483 from "./collect/v1/tx.registry";
import * as _484 from "./commons/v1/tx.registry";
import * as _485 from "./ecosystem/v1/tx.registry";
import * as _486 from "./forum/v1/tx.registry";
import * as _487 from "./futarchy/v1/tx.registry";
import * as _488 from "./name/v1/tx.registry";
import * as _489 from "./rep/v1/tx.registry";
import * as _490 from "./reveal/v1/tx.registry";
import * as _491 from "./season/v1/tx.registry";
import * as _492 from "./session/v1/tx.registry";
import * as _493 from "./shield/v1/tx.registry";
import * as _494 from "./sparkdream/v1/tx.registry";
import * as _495 from "./split/v1/tx.registry";
import * as _496 from "./blog/v1/query.lcd";
import * as _497 from "./collect/v1/query.lcd";
import * as _498 from "./commons/v1/query.lcd";
import * as _499 from "./ecosystem/v1/query.lcd";
import * as _500 from "./forum/v1/query.lcd";
import * as _501 from "./futarchy/v1/query.lcd";
import * as _502 from "./name/v1/query.lcd";
import * as _503 from "./rep/v1/query.lcd";
import * as _504 from "./reveal/v1/query.lcd";
import * as _505 from "./season/v1/query.lcd";
import * as _506 from "./session/v1/query.lcd";
import * as _507 from "./shield/v1/query.lcd";
import * as _508 from "./sparkdream/v1/query.lcd";
import * as _509 from "./split/v1/query.lcd";
import * as _510 from "./blog/v1/query.rpc.Query";
import * as _511 from "./collect/v1/query.rpc.Query";
import * as _512 from "./commons/v1/query.rpc.Query";
import * as _513 from "./ecosystem/v1/query.rpc.Query";
import * as _514 from "./forum/v1/query.rpc.Query";
import * as _515 from "./futarchy/v1/query.rpc.Query";
import * as _516 from "./name/v1/query.rpc.Query";
import * as _517 from "./rep/v1/query.rpc.Query";
import * as _518 from "./reveal/v1/query.rpc.Query";
import * as _519 from "./season/v1/query.rpc.Query";
import * as _520 from "./session/v1/query.rpc.Query";
import * as _521 from "./shield/v1/query.rpc.Query";
import * as _522 from "./sparkdream/v1/query.rpc.Query";
import * as _523 from "./split/v1/query.rpc.Query";
import * as _524 from "./blog/v1/tx.rpc.msg";
import * as _525 from "./collect/v1/tx.rpc.msg";
import * as _526 from "./commons/v1/tx.rpc.msg";
import * as _527 from "./ecosystem/v1/tx.rpc.msg";
import * as _528 from "./forum/v1/tx.rpc.msg";
import * as _529 from "./futarchy/v1/tx.rpc.msg";
import * as _530 from "./name/v1/tx.rpc.msg";
import * as _531 from "./rep/v1/tx.rpc.msg";
import * as _532 from "./reveal/v1/tx.rpc.msg";
import * as _533 from "./season/v1/tx.rpc.msg";
import * as _534 from "./session/v1/tx.rpc.msg";
import * as _535 from "./shield/v1/tx.rpc.msg";
import * as _536 from "./sparkdream/v1/tx.rpc.msg";
import * as _537 from "./split/v1/tx.rpc.msg";
import * as _544 from "./lcd";
import * as _545 from "./rpc.query";
import * as _546 from "./rpc.tx";
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
      ..._468,
      ..._482,
      ..._496,
      ..._510,
      ..._524
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
      ..._469,
      ..._483,
      ..._497,
      ..._511,
      ..._525
    };
  }
  export namespace common {
    export const v1 = {
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192
    };
  }
  export namespace commons {
    export namespace module {
      export const v1 = {
        ..._193
      };
    }
    export const v1 = {
      ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._470,
      ..._484,
      ..._498,
      ..._512,
      ..._526
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
      ..._471,
      ..._485,
      ..._499,
      ..._513,
      ..._527
    };
  }
  export namespace forum {
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
      ..._213,
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
      ..._232,
      ..._472,
      ..._486,
      ..._500,
      ..._514,
      ..._528
    };
  }
  export namespace futarchy {
    export namespace module {
      export const v1 = {
        ..._233
      };
    }
    export const v1 = {
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._473,
      ..._487,
      ..._501,
      ..._515,
      ..._529
    };
  }
  export namespace name {
    export namespace module {
      export const v1 = {
        ..._239
      };
    }
    export const v1 = {
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._474,
      ..._488,
      ..._502,
      ..._516,
      ..._530
    };
  }
  export namespace rep {
    export namespace module {
      export const v1 = {
        ..._247
      };
    }
    export const v1 = {
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
      ..._475,
      ..._489,
      ..._503,
      ..._517,
      ..._531
    };
  }
  export namespace reveal {
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
      ..._267,
      ..._476,
      ..._490,
      ..._504,
      ..._518,
      ..._532
    };
  }
  export namespace season {
    export namespace module {
      export const v1 = {
        ..._268
      };
    }
    export const v1 = {
      ..._269,
      ..._270,
      ..._271,
      ..._272,
      ..._273,
      ..._274,
      ..._275,
      ..._276,
      ..._277,
      ..._278,
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
      ..._477,
      ..._491,
      ..._505,
      ..._519,
      ..._533
    };
  }
  export namespace session {
    export namespace module {
      export const v1 = {
        ..._297
      };
    }
    export const v1 = {
      ..._298,
      ..._299,
      ..._300,
      ..._301,
      ..._302,
      ..._478,
      ..._492,
      ..._506,
      ..._520,
      ..._534
    };
  }
  export namespace shield {
    export namespace module {
      export const v1 = {
        ..._303
      };
    }
    export const v1 = {
      ..._304,
      ..._305,
      ..._306,
      ..._307,
      ..._308,
      ..._479,
      ..._493,
      ..._507,
      ..._521,
      ..._535
    };
  }
  export namespace sparkdream {
    export namespace module {
      export const v1 = {
        ..._309
      };
    }
    export const v1 = {
      ..._310,
      ..._311,
      ..._312,
      ..._313,
      ..._480,
      ..._494,
      ..._508,
      ..._522,
      ..._536
    };
  }
  export namespace split {
    export namespace module {
      export const v1 = {
        ..._314
      };
    }
    export const v1 = {
      ..._315,
      ..._316,
      ..._317,
      ..._318,
      ..._319,
      ..._481,
      ..._495,
      ..._509,
      ..._523,
      ..._537
    };
  }
  export const ClientFactory = {
    ..._544,
    ..._545,
    ..._546
  };
}