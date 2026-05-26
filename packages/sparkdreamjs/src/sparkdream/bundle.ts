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
import * as _199 from "./commons/v1/recurring_spend";
import * as _200 from "./commons/v1/tx";
import * as _201 from "./ecosystem/module/v1/module";
import * as _202 from "./ecosystem/v1/genesis";
import * as _203 from "./ecosystem/v1/params";
import * as _204 from "./ecosystem/v1/query";
import * as _205 from "./ecosystem/v1/tx";
import * as _206 from "./federation/module/v1/module";
import * as _207 from "./federation/v1/genesis";
import * as _208 from "./federation/v1/packet";
import * as _209 from "./federation/v1/params";
import * as _210 from "./federation/v1/query";
import * as _211 from "./federation/v1/tx";
import * as _212 from "./federation/v1/types";
import * as _213 from "./federation/v1/verifier_activity";
import * as _214 from "./forum/module/v1/module";
import * as _215 from "./forum/v1/archive_metadata";
import * as _216 from "./forum/v1/bounty";
import * as _217 from "./forum/v1/genesis";
import * as _218 from "./forum/v1/hide_record";
import * as _219 from "./forum/v1/params";
import * as _220 from "./forum/v1/post_flag";
import * as _221 from "./forum/v1/post";
import * as _222 from "./forum/v1/query";
import * as _223 from "./forum/v1/sentinel_activity";
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
import * as _239 from "./guardian/module/v1/module";
import * as _240 from "./guardian/v1/query";
import * as _241 from "./guardian/v1/tx";
import * as _242 from "./identity/module/v1/module";
import * as _243 from "./identity/v1/chain_identity";
import * as _244 from "./identity/v1/genesis";
import * as _245 from "./identity/v1/query";
import * as _246 from "./name/module/v1/module";
import * as _247 from "./name/v1/dispute";
import * as _248 from "./name/v1/genesis";
import * as _249 from "./name/v1/name_record";
import * as _250 from "./name/v1/owner_info";
import * as _251 from "./name/v1/params";
import * as _252 from "./name/v1/query";
import * as _253 from "./name/v1/tx";
import * as _254 from "./rep/module/v1/module";
import * as _255 from "./rep/v1/accountability";
import * as _256 from "./rep/v1/bonded_role";
import * as _257 from "./rep/v1/challenge";
import * as _258 from "./rep/v1/content_challenge";
import * as _259 from "./rep/v1/genesis";
import * as _260 from "./rep/v1/gov_action_appeal";
import * as _261 from "./rep/v1/initiative";
import * as _262 from "./rep/v1/interim_template";
import * as _263 from "./rep/v1/interim";
import * as _264 from "./rep/v1/invitation";
import * as _265 from "./rep/v1/jury_participation";
import * as _266 from "./rep/v1/jury_review";
import * as _267 from "./rep/v1/member_report";
import * as _268 from "./rep/v1/member_warning";
import * as _269 from "./rep/v1/member";
import * as _270 from "./rep/v1/params";
import * as _271 from "./rep/v1/project";
import * as _272 from "./rep/v1/query";
import * as _273 from "./rep/v1/reserved_tag";
import * as _274 from "./rep/v1/stake";
import * as _275 from "./rep/v1/tag_budget_award";
import * as _276 from "./rep/v1/tag_budget";
import * as _277 from "./rep/v1/tag_report";
import * as _278 from "./rep/v1/tag";
import * as _279 from "./rep/v1/tx";
import * as _280 from "./reveal/module/v1/module";
import * as _281 from "./reveal/v1/genesis";
import * as _282 from "./reveal/v1/params";
import * as _283 from "./reveal/v1/query";
import * as _284 from "./reveal/v1/tx";
import * as _285 from "./reveal/v1/types";
import * as _286 from "./season/module/v1/module";
import * as _287 from "./season/v1/achievement";
import * as _288 from "./season/v1/display_name_appeal_stake";
import * as _289 from "./season/v1/display_name_moderation";
import * as _290 from "./season/v1/display_name_report_stake";
import * as _291 from "./season/v1/enums";
import * as _292 from "./season/v1/epoch_xp_tracker";
import * as _293 from "./season/v1/forum_xp_cooldown";
import * as _294 from "./season/v1/genesis";
import * as _295 from "./season/v1/guild_invite";
import * as _296 from "./season/v1/guild_membership";
import * as _297 from "./season/v1/guild";
import * as _298 from "./season/v1/member_profile";
import * as _299 from "./season/v1/member_quest_progress";
import * as _300 from "./season/v1/member_registration";
import * as _301 from "./season/v1/member_season_snapshot";
import * as _302 from "./season/v1/next_season_info";
import * as _303 from "./season/v1/nomination";
import * as _304 from "./season/v1/params";
import * as _305 from "./season/v1/query";
import * as _306 from "./season/v1/quest";
import * as _307 from "./season/v1/season_snapshot";
import * as _308 from "./season/v1/season_title_eligibility";
import * as _309 from "./season/v1/season_transition_state";
import * as _310 from "./season/v1/season";
import * as _311 from "./season/v1/title";
import * as _312 from "./season/v1/transition_recovery_state";
import * as _313 from "./season/v1/tx";
import * as _314 from "./season/v1/vote_xp_record";
import * as _315 from "./service/module/v1/module";
import * as _316 from "./service/v1/controller_transfer_case";
import * as _317 from "./service/v1/genesis";
import * as _318 from "./service/v1/operator";
import * as _319 from "./service/v1/params";
import * as _320 from "./service/v1/query";
import * as _321 from "./service/v1/refile_cooldown";
import * as _322 from "./service/v1/report";
import * as _323 from "./service/v1/reporter_rate_limit";
import * as _324 from "./service/v1/service_type_config";
import * as _325 from "./service/v1/system_report_rate_limit";
import * as _326 from "./service/v1/tier1_escrow_entry";
import * as _327 from "./service/v1/tier1_last_slash";
import * as _328 from "./service/v1/tx";
import * as _329 from "./service/v1/types";
import * as _330 from "./session/module/v1/module";
import * as _331 from "./session/v1/genesis";
import * as _332 from "./session/v1/grant";
import * as _333 from "./session/v1/params";
import * as _334 from "./session/v1/query";
import * as _335 from "./session/v1/session";
import * as _336 from "./session/v1/tx";
import * as _337 from "./shield/module/v1/module";
import * as _338 from "./shield/v1/genesis";
import * as _339 from "./shield/v1/params";
import * as _340 from "./shield/v1/query";
import * as _341 from "./shield/v1/tx";
import * as _342 from "./shield/v1/types";
import * as _343 from "./sparkdream/module/v1/module";
import * as _344 from "./sparkdream/v1/genesis";
import * as _345 from "./sparkdream/v1/params";
import * as _346 from "./sparkdream/v1/query";
import * as _347 from "./sparkdream/v1/tx";
import * as _348 from "./split/module/v1/module";
import * as _349 from "./split/v1/genesis";
import * as _350 from "./split/v1/params";
import * as _351 from "./split/v1/query";
import * as _352 from "./split/v1/share";
import * as _353 from "./split/v1/tx";
import * as _502 from "./blog/v1/tx.amino";
import * as _503 from "./collect/v1/tx.amino";
import * as _504 from "./commons/v1/tx.amino";
import * as _505 from "./ecosystem/v1/tx.amino";
import * as _506 from "./federation/v1/tx.amino";
import * as _507 from "./forum/v1/tx.amino";
import * as _508 from "./futarchy/v1/tx.amino";
import * as _509 from "./guardian/v1/tx.amino";
import * as _510 from "./name/v1/tx.amino";
import * as _511 from "./rep/v1/tx.amino";
import * as _512 from "./reveal/v1/tx.amino";
import * as _513 from "./season/v1/tx.amino";
import * as _514 from "./service/v1/tx.amino";
import * as _515 from "./session/v1/tx.amino";
import * as _516 from "./shield/v1/tx.amino";
import * as _517 from "./sparkdream/v1/tx.amino";
import * as _518 from "./split/v1/tx.amino";
import * as _519 from "./blog/v1/tx.registry";
import * as _520 from "./collect/v1/tx.registry";
import * as _521 from "./commons/v1/tx.registry";
import * as _522 from "./ecosystem/v1/tx.registry";
import * as _523 from "./federation/v1/tx.registry";
import * as _524 from "./forum/v1/tx.registry";
import * as _525 from "./futarchy/v1/tx.registry";
import * as _526 from "./guardian/v1/tx.registry";
import * as _527 from "./name/v1/tx.registry";
import * as _528 from "./rep/v1/tx.registry";
import * as _529 from "./reveal/v1/tx.registry";
import * as _530 from "./season/v1/tx.registry";
import * as _531 from "./service/v1/tx.registry";
import * as _532 from "./session/v1/tx.registry";
import * as _533 from "./shield/v1/tx.registry";
import * as _534 from "./sparkdream/v1/tx.registry";
import * as _535 from "./split/v1/tx.registry";
import * as _536 from "./blog/v1/query.lcd";
import * as _537 from "./collect/v1/query.lcd";
import * as _538 from "./commons/v1/query.lcd";
import * as _539 from "./ecosystem/v1/query.lcd";
import * as _540 from "./federation/v1/query.lcd";
import * as _541 from "./forum/v1/query.lcd";
import * as _542 from "./futarchy/v1/query.lcd";
import * as _543 from "./guardian/v1/query.lcd";
import * as _544 from "./identity/v1/query.lcd";
import * as _545 from "./name/v1/query.lcd";
import * as _546 from "./rep/v1/query.lcd";
import * as _547 from "./reveal/v1/query.lcd";
import * as _548 from "./season/v1/query.lcd";
import * as _549 from "./service/v1/query.lcd";
import * as _550 from "./session/v1/query.lcd";
import * as _551 from "./shield/v1/query.lcd";
import * as _552 from "./sparkdream/v1/query.lcd";
import * as _553 from "./split/v1/query.lcd";
import * as _554 from "./blog/v1/query.rpc.Query";
import * as _555 from "./collect/v1/query.rpc.Query";
import * as _556 from "./commons/v1/query.rpc.Query";
import * as _557 from "./ecosystem/v1/query.rpc.Query";
import * as _558 from "./federation/v1/query.rpc.Query";
import * as _559 from "./forum/v1/query.rpc.Query";
import * as _560 from "./futarchy/v1/query.rpc.Query";
import * as _561 from "./guardian/v1/query.rpc.Query";
import * as _562 from "./identity/v1/query.rpc.Query";
import * as _563 from "./name/v1/query.rpc.Query";
import * as _564 from "./rep/v1/query.rpc.Query";
import * as _565 from "./reveal/v1/query.rpc.Query";
import * as _566 from "./season/v1/query.rpc.Query";
import * as _567 from "./service/v1/query.rpc.Query";
import * as _568 from "./session/v1/query.rpc.Query";
import * as _569 from "./shield/v1/query.rpc.Query";
import * as _570 from "./sparkdream/v1/query.rpc.Query";
import * as _571 from "./split/v1/query.rpc.Query";
import * as _572 from "./blog/v1/tx.rpc.msg";
import * as _573 from "./collect/v1/tx.rpc.msg";
import * as _574 from "./commons/v1/tx.rpc.msg";
import * as _575 from "./ecosystem/v1/tx.rpc.msg";
import * as _576 from "./federation/v1/tx.rpc.msg";
import * as _577 from "./forum/v1/tx.rpc.msg";
import * as _578 from "./futarchy/v1/tx.rpc.msg";
import * as _579 from "./guardian/v1/tx.rpc.msg";
import * as _580 from "./name/v1/tx.rpc.msg";
import * as _581 from "./rep/v1/tx.rpc.msg";
import * as _582 from "./reveal/v1/tx.rpc.msg";
import * as _583 from "./season/v1/tx.rpc.msg";
import * as _584 from "./service/v1/tx.rpc.msg";
import * as _585 from "./session/v1/tx.rpc.msg";
import * as _586 from "./shield/v1/tx.rpc.msg";
import * as _587 from "./sparkdream/v1/tx.rpc.msg";
import * as _588 from "./split/v1/tx.rpc.msg";
import * as _595 from "./lcd";
import * as _596 from "./rpc.query";
import * as _597 from "./rpc.tx";
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
      ..._502,
      ..._519,
      ..._536,
      ..._554,
      ..._572
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
      ..._503,
      ..._520,
      ..._537,
      ..._555,
      ..._573
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
      ..._200,
      ..._504,
      ..._521,
      ..._538,
      ..._556,
      ..._574
    };
  }
  export namespace ecosystem {
    export namespace module {
      export const v1 = {
        ..._201
      };
    }
    export const v1 = {
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._505,
      ..._522,
      ..._539,
      ..._557,
      ..._575
    };
  }
  export namespace federation {
    export namespace module {
      export const v1 = {
        ..._206
      };
    }
    export const v1 = {
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._506,
      ..._523,
      ..._540,
      ..._558,
      ..._576
    };
  }
  export namespace forum {
    export namespace module {
      export const v1 = {
        ..._214
      };
    }
    export const v1 = {
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
      ..._507,
      ..._524,
      ..._541,
      ..._559,
      ..._577
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
      ..._508,
      ..._525,
      ..._542,
      ..._560,
      ..._578
    };
  }
  export namespace guardian {
    export namespace module {
      export const v1 = {
        ..._239
      };
    }
    export const v1 = {
      ..._240,
      ..._241,
      ..._509,
      ..._526,
      ..._543,
      ..._561,
      ..._579
    };
  }
  export namespace identity {
    export namespace module {
      export const v1 = {
        ..._242
      };
    }
    export const v1 = {
      ..._243,
      ..._244,
      ..._245,
      ..._544,
      ..._562
    };
  }
  export namespace name {
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
      ..._510,
      ..._527,
      ..._545,
      ..._563,
      ..._580
    };
  }
  export namespace rep {
    export namespace module {
      export const v1 = {
        ..._254
      };
    }
    export const v1 = {
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
      ..._272,
      ..._273,
      ..._274,
      ..._275,
      ..._276,
      ..._277,
      ..._278,
      ..._279,
      ..._511,
      ..._528,
      ..._546,
      ..._564,
      ..._581
    };
  }
  export namespace reveal {
    export namespace module {
      export const v1 = {
        ..._280
      };
    }
    export const v1 = {
      ..._281,
      ..._282,
      ..._283,
      ..._284,
      ..._285,
      ..._512,
      ..._529,
      ..._547,
      ..._565,
      ..._582
    };
  }
  export namespace season {
    export namespace module {
      export const v1 = {
        ..._286
      };
    }
    export const v1 = {
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
      ..._307,
      ..._308,
      ..._309,
      ..._310,
      ..._311,
      ..._312,
      ..._313,
      ..._314,
      ..._513,
      ..._530,
      ..._548,
      ..._566,
      ..._583
    };
  }
  export namespace service {
    export namespace module {
      export const v1 = {
        ..._315
      };
    }
    export const v1 = {
      ..._316,
      ..._317,
      ..._318,
      ..._319,
      ..._320,
      ..._321,
      ..._322,
      ..._323,
      ..._324,
      ..._325,
      ..._326,
      ..._327,
      ..._328,
      ..._329,
      ..._514,
      ..._531,
      ..._549,
      ..._567,
      ..._584
    };
  }
  export namespace session {
    export namespace module {
      export const v1 = {
        ..._330
      };
    }
    export const v1 = {
      ..._331,
      ..._332,
      ..._333,
      ..._334,
      ..._335,
      ..._336,
      ..._515,
      ..._532,
      ..._550,
      ..._568,
      ..._585
    };
  }
  export namespace shield {
    export namespace module {
      export const v1 = {
        ..._337
      };
    }
    export const v1 = {
      ..._338,
      ..._339,
      ..._340,
      ..._341,
      ..._342,
      ..._516,
      ..._533,
      ..._551,
      ..._569,
      ..._586
    };
  }
  export namespace sparkdream {
    export namespace module {
      export const v1 = {
        ..._343
      };
    }
    export const v1 = {
      ..._344,
      ..._345,
      ..._346,
      ..._347,
      ..._517,
      ..._534,
      ..._552,
      ..._570,
      ..._587
    };
  }
  export namespace split {
    export namespace module {
      export const v1 = {
        ..._348
      };
    }
    export const v1 = {
      ..._349,
      ..._350,
      ..._351,
      ..._352,
      ..._353,
      ..._518,
      ..._535,
      ..._553,
      ..._571,
      ..._588
    };
  }
  export const ClientFactory = {
    ..._595,
    ..._596,
    ..._597
  };
}