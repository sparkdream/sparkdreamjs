//@ts-nocheck
import * as _295 from "./blog/module/v1/module";
import * as _296 from "./blog/v1/genesis";
import * as _297 from "./blog/v1/params";
import * as _298 from "./blog/v1/post";
import * as _299 from "./blog/v1/query";
import * as _300 from "./blog/v1/tx";
import * as _301 from "./blog/v1/types";
import * as _302 from "./collect/module/v1/module";
import * as _303 from "./collect/v1/curator_activity";
import * as _304 from "./collect/v1/genesis";
import * as _305 from "./collect/v1/params";
import * as _306 from "./collect/v1/query";
import * as _307 from "./collect/v1/tx";
import * as _308 from "./collect/v1/types";
import * as _309 from "./common/v1/content_type";
import * as _310 from "./common/v1/flag_record";
import * as _311 from "./common/v1/moderation_reason";
import * as _312 from "./commons/module/v1/module";
import * as _313 from "./commons/v1/category";
import * as _314 from "./commons/v1/genesis";
import * as _315 from "./commons/v1/group";
import * as _316 from "./commons/v1/params";
import * as _317 from "./commons/v1/policy_permissions";
import * as _318 from "./commons/v1/query";
import * as _319 from "./commons/v1/recurring_spend";
import * as _320 from "./commons/v1/tx";
import * as _321 from "./ecosystem/module/v1/module";
import * as _322 from "./ecosystem/v1/genesis";
import * as _323 from "./ecosystem/v1/params";
import * as _324 from "./ecosystem/v1/query";
import * as _325 from "./ecosystem/v1/tx";
import * as _326 from "./federation/module/v1/module";
import * as _327 from "./federation/v1/genesis";
import * as _328 from "./federation/v1/packet";
import * as _329 from "./federation/v1/params";
import * as _330 from "./federation/v1/query";
import * as _331 from "./federation/v1/tx";
import * as _332 from "./federation/v1/types";
import * as _333 from "./federation/v1/verifier_activity";
import * as _334 from "./forum/module/v1/module";
import * as _335 from "./forum/v1/archive_metadata";
import * as _336 from "./forum/v1/bounty";
import * as _337 from "./forum/v1/genesis";
import * as _338 from "./forum/v1/hide_record";
import * as _339 from "./forum/v1/params";
import * as _340 from "./forum/v1/post_flag";
import * as _341 from "./forum/v1/post";
import * as _342 from "./forum/v1/query";
import * as _343 from "./forum/v1/sentinel_activity";
import * as _344 from "./forum/v1/thread_follow_count";
import * as _345 from "./forum/v1/thread_follow";
import * as _346 from "./forum/v1/thread_lock_record";
import * as _347 from "./forum/v1/thread_metadata";
import * as _348 from "./forum/v1/thread_move_record";
import * as _349 from "./forum/v1/tx";
import * as _350 from "./forum/v1/types";
import * as _351 from "./forum/v1/user_rate_limit";
import * as _352 from "./forum/v1/user_reaction_limit";
import * as _353 from "./futarchy/module/v1/module";
import * as _354 from "./futarchy/v1/genesis";
import * as _355 from "./futarchy/v1/market";
import * as _356 from "./futarchy/v1/params";
import * as _357 from "./futarchy/v1/query";
import * as _358 from "./futarchy/v1/tx";
import * as _359 from "./guardian/module/v1/module";
import * as _360 from "./guardian/v1/query";
import * as _361 from "./guardian/v1/tx";
import * as _362 from "./identity/module/v1/module";
import * as _363 from "./identity/v1/chain_identity";
import * as _364 from "./identity/v1/genesis";
import * as _365 from "./identity/v1/query";
import * as _366 from "./name/module/v1/module";
import * as _367 from "./name/v1/dispute";
import * as _368 from "./name/v1/genesis";
import * as _369 from "./name/v1/name_record";
import * as _370 from "./name/v1/owner_info";
import * as _371 from "./name/v1/params";
import * as _372 from "./name/v1/query";
import * as _373 from "./name/v1/tx";
import * as _374 from "./rep/module/v1/module";
import * as _375 from "./rep/v1/accountability";
import * as _376 from "./rep/v1/bonded_role";
import * as _377 from "./rep/v1/challenge";
import * as _378 from "./rep/v1/content_challenge";
import * as _379 from "./rep/v1/genesis";
import * as _380 from "./rep/v1/gov_action_appeal";
import * as _381 from "./rep/v1/initiative";
import * as _382 from "./rep/v1/interim_template";
import * as _383 from "./rep/v1/interim";
import * as _384 from "./rep/v1/invitation";
import * as _385 from "./rep/v1/jury_participation";
import * as _386 from "./rep/v1/jury_review";
import * as _387 from "./rep/v1/member_report";
import * as _388 from "./rep/v1/member_warning";
import * as _389 from "./rep/v1/member";
import * as _390 from "./rep/v1/params";
import * as _391 from "./rep/v1/project";
import * as _392 from "./rep/v1/query";
import * as _393 from "./rep/v1/reserved_tag";
import * as _394 from "./rep/v1/role_activity";
import * as _395 from "./rep/v1/stake";
import * as _396 from "./rep/v1/tag_budget_award";
import * as _397 from "./rep/v1/tag_budget";
import * as _398 from "./rep/v1/tag_report";
import * as _399 from "./rep/v1/tag";
import * as _400 from "./rep/v1/tx";
import * as _401 from "./reveal/module/v1/module";
import * as _402 from "./reveal/v1/genesis";
import * as _403 from "./reveal/v1/params";
import * as _404 from "./reveal/v1/query";
import * as _405 from "./reveal/v1/tx";
import * as _406 from "./reveal/v1/types";
import * as _407 from "./season/module/v1/module";
import * as _408 from "./season/v1/achievement";
import * as _409 from "./season/v1/display_name_appeal_stake";
import * as _410 from "./season/v1/display_name_moderation";
import * as _411 from "./season/v1/display_name_report_stake";
import * as _412 from "./season/v1/enums";
import * as _413 from "./season/v1/epoch_xp_tracker";
import * as _414 from "./season/v1/forum_xp_cooldown";
import * as _415 from "./season/v1/genesis";
import * as _416 from "./season/v1/guild_invite";
import * as _417 from "./season/v1/guild_membership";
import * as _418 from "./season/v1/guild";
import * as _419 from "./season/v1/member_profile";
import * as _420 from "./season/v1/member_quest_progress";
import * as _421 from "./season/v1/member_registration";
import * as _422 from "./season/v1/member_season_snapshot";
import * as _423 from "./season/v1/next_season_info";
import * as _424 from "./season/v1/nomination";
import * as _425 from "./season/v1/params";
import * as _426 from "./season/v1/query";
import * as _427 from "./season/v1/quest";
import * as _428 from "./season/v1/season_snapshot";
import * as _429 from "./season/v1/season_title_eligibility";
import * as _430 from "./season/v1/season_transition_state";
import * as _431 from "./season/v1/season";
import * as _432 from "./season/v1/title";
import * as _433 from "./season/v1/transition_recovery_state";
import * as _434 from "./season/v1/tx";
import * as _435 from "./season/v1/vote_xp_record";
import * as _436 from "./service/module/v1/module";
import * as _437 from "./service/v1/controller_transfer_case";
import * as _438 from "./service/v1/genesis";
import * as _439 from "./service/v1/operator";
import * as _440 from "./service/v1/params";
import * as _441 from "./service/v1/query";
import * as _442 from "./service/v1/refile_cooldown";
import * as _443 from "./service/v1/report";
import * as _444 from "./service/v1/reporter_rate_limit";
import * as _445 from "./service/v1/service_type_config";
import * as _446 from "./service/v1/system_report_rate_limit";
import * as _447 from "./service/v1/tier1_escrow_entry";
import * as _448 from "./service/v1/tier1_last_slash";
import * as _449 from "./service/v1/tx";
import * as _450 from "./service/v1/types";
import * as _451 from "./session/module/v1/module";
import * as _452 from "./session/v1/genesis";
import * as _453 from "./session/v1/grant";
import * as _454 from "./session/v1/params";
import * as _455 from "./session/v1/query";
import * as _456 from "./session/v1/session";
import * as _457 from "./session/v1/tx";
import * as _458 from "./shield/module/v1/module";
import * as _459 from "./shield/v1/genesis";
import * as _460 from "./shield/v1/params";
import * as _461 from "./shield/v1/query";
import * as _462 from "./shield/v1/tx";
import * as _463 from "./shield/v1/types";
import * as _464 from "./sparkdream/module/v1/module";
import * as _465 from "./sparkdream/v1/genesis";
import * as _466 from "./sparkdream/v1/params";
import * as _467 from "./sparkdream/v1/query";
import * as _468 from "./sparkdream/v1/tx";
import * as _469 from "./split/module/v1/module";
import * as _470 from "./split/v1/genesis";
import * as _471 from "./split/v1/params";
import * as _472 from "./split/v1/query";
import * as _473 from "./split/v1/share";
import * as _474 from "./split/v1/tx";
import * as _688 from "./blog/v1/tx.amino";
import * as _689 from "./collect/v1/tx.amino";
import * as _690 from "./commons/v1/tx.amino";
import * as _691 from "./ecosystem/v1/tx.amino";
import * as _692 from "./federation/v1/tx.amino";
import * as _693 from "./forum/v1/tx.amino";
import * as _694 from "./futarchy/v1/tx.amino";
import * as _695 from "./guardian/v1/tx.amino";
import * as _696 from "./name/v1/tx.amino";
import * as _697 from "./rep/v1/tx.amino";
import * as _698 from "./reveal/v1/tx.amino";
import * as _699 from "./season/v1/tx.amino";
import * as _700 from "./service/v1/tx.amino";
import * as _701 from "./session/v1/tx.amino";
import * as _702 from "./shield/v1/tx.amino";
import * as _703 from "./sparkdream/v1/tx.amino";
import * as _704 from "./split/v1/tx.amino";
import * as _705 from "./blog/v1/tx.registry";
import * as _706 from "./collect/v1/tx.registry";
import * as _707 from "./commons/v1/tx.registry";
import * as _708 from "./ecosystem/v1/tx.registry";
import * as _709 from "./federation/v1/tx.registry";
import * as _710 from "./forum/v1/tx.registry";
import * as _711 from "./futarchy/v1/tx.registry";
import * as _712 from "./guardian/v1/tx.registry";
import * as _713 from "./name/v1/tx.registry";
import * as _714 from "./rep/v1/tx.registry";
import * as _715 from "./reveal/v1/tx.registry";
import * as _716 from "./season/v1/tx.registry";
import * as _717 from "./service/v1/tx.registry";
import * as _718 from "./session/v1/tx.registry";
import * as _719 from "./shield/v1/tx.registry";
import * as _720 from "./sparkdream/v1/tx.registry";
import * as _721 from "./split/v1/tx.registry";
import * as _722 from "./blog/v1/query.lcd";
import * as _723 from "./collect/v1/query.lcd";
import * as _724 from "./commons/v1/query.lcd";
import * as _725 from "./ecosystem/v1/query.lcd";
import * as _726 from "./federation/v1/query.lcd";
import * as _727 from "./forum/v1/query.lcd";
import * as _728 from "./futarchy/v1/query.lcd";
import * as _729 from "./guardian/v1/query.lcd";
import * as _730 from "./identity/v1/query.lcd";
import * as _731 from "./name/v1/query.lcd";
import * as _732 from "./rep/v1/query.lcd";
import * as _733 from "./reveal/v1/query.lcd";
import * as _734 from "./season/v1/query.lcd";
import * as _735 from "./service/v1/query.lcd";
import * as _736 from "./session/v1/query.lcd";
import * as _737 from "./shield/v1/query.lcd";
import * as _738 from "./sparkdream/v1/query.lcd";
import * as _739 from "./split/v1/query.lcd";
import * as _740 from "./blog/v1/query.rpc.Query";
import * as _741 from "./collect/v1/query.rpc.Query";
import * as _742 from "./commons/v1/query.rpc.Query";
import * as _743 from "./ecosystem/v1/query.rpc.Query";
import * as _744 from "./federation/v1/query.rpc.Query";
import * as _745 from "./forum/v1/query.rpc.Query";
import * as _746 from "./futarchy/v1/query.rpc.Query";
import * as _747 from "./guardian/v1/query.rpc.Query";
import * as _748 from "./identity/v1/query.rpc.Query";
import * as _749 from "./name/v1/query.rpc.Query";
import * as _750 from "./rep/v1/query.rpc.Query";
import * as _751 from "./reveal/v1/query.rpc.Query";
import * as _752 from "./season/v1/query.rpc.Query";
import * as _753 from "./service/v1/query.rpc.Query";
import * as _754 from "./session/v1/query.rpc.Query";
import * as _755 from "./shield/v1/query.rpc.Query";
import * as _756 from "./sparkdream/v1/query.rpc.Query";
import * as _757 from "./split/v1/query.rpc.Query";
import * as _758 from "./blog/v1/tx.rpc.msg";
import * as _759 from "./collect/v1/tx.rpc.msg";
import * as _760 from "./commons/v1/tx.rpc.msg";
import * as _761 from "./ecosystem/v1/tx.rpc.msg";
import * as _762 from "./federation/v1/tx.rpc.msg";
import * as _763 from "./forum/v1/tx.rpc.msg";
import * as _764 from "./futarchy/v1/tx.rpc.msg";
import * as _765 from "./guardian/v1/tx.rpc.msg";
import * as _766 from "./name/v1/tx.rpc.msg";
import * as _767 from "./rep/v1/tx.rpc.msg";
import * as _768 from "./reveal/v1/tx.rpc.msg";
import * as _769 from "./season/v1/tx.rpc.msg";
import * as _770 from "./service/v1/tx.rpc.msg";
import * as _771 from "./session/v1/tx.rpc.msg";
import * as _772 from "./shield/v1/tx.rpc.msg";
import * as _773 from "./sparkdream/v1/tx.rpc.msg";
import * as _774 from "./split/v1/tx.rpc.msg";
import * as _784 from "./lcd";
import * as _785 from "./rpc.query";
import * as _786 from "./rpc.tx";
export namespace sparkdream {
  export namespace blog {
    export namespace module {
      export const v1 = {
        ..._295
      };
    }
    export const v1 = {
      ..._296,
      ..._297,
      ..._298,
      ..._299,
      ..._300,
      ..._301,
      ..._688,
      ..._705,
      ..._722,
      ..._740,
      ..._758
    };
  }
  export namespace collect {
    export namespace module {
      export const v1 = {
        ..._302
      };
    }
    export const v1 = {
      ..._303,
      ..._304,
      ..._305,
      ..._306,
      ..._307,
      ..._308,
      ..._689,
      ..._706,
      ..._723,
      ..._741,
      ..._759
    };
  }
  export namespace common {
    export const v1 = {
      ..._309,
      ..._310,
      ..._311
    };
  }
  export namespace commons {
    export namespace module {
      export const v1 = {
        ..._312
      };
    }
    export const v1 = {
      ..._313,
      ..._314,
      ..._315,
      ..._316,
      ..._317,
      ..._318,
      ..._319,
      ..._320,
      ..._690,
      ..._707,
      ..._724,
      ..._742,
      ..._760
    };
  }
  export namespace ecosystem {
    export namespace module {
      export const v1 = {
        ..._321
      };
    }
    export const v1 = {
      ..._322,
      ..._323,
      ..._324,
      ..._325,
      ..._691,
      ..._708,
      ..._725,
      ..._743,
      ..._761
    };
  }
  export namespace federation {
    export namespace module {
      export const v1 = {
        ..._326
      };
    }
    export const v1 = {
      ..._327,
      ..._328,
      ..._329,
      ..._330,
      ..._331,
      ..._332,
      ..._333,
      ..._692,
      ..._709,
      ..._726,
      ..._744,
      ..._762
    };
  }
  export namespace forum {
    export namespace module {
      export const v1 = {
        ..._334
      };
    }
    export const v1 = {
      ..._335,
      ..._336,
      ..._337,
      ..._338,
      ..._339,
      ..._340,
      ..._341,
      ..._342,
      ..._343,
      ..._344,
      ..._345,
      ..._346,
      ..._347,
      ..._348,
      ..._349,
      ..._350,
      ..._351,
      ..._352,
      ..._693,
      ..._710,
      ..._727,
      ..._745,
      ..._763
    };
  }
  export namespace futarchy {
    export namespace module {
      export const v1 = {
        ..._353
      };
    }
    export const v1 = {
      ..._354,
      ..._355,
      ..._356,
      ..._357,
      ..._358,
      ..._694,
      ..._711,
      ..._728,
      ..._746,
      ..._764
    };
  }
  export namespace guardian {
    export namespace module {
      export const v1 = {
        ..._359
      };
    }
    export const v1 = {
      ..._360,
      ..._361,
      ..._695,
      ..._712,
      ..._729,
      ..._747,
      ..._765
    };
  }
  export namespace identity {
    export namespace module {
      export const v1 = {
        ..._362
      };
    }
    export const v1 = {
      ..._363,
      ..._364,
      ..._365,
      ..._730,
      ..._748
    };
  }
  export namespace name {
    export namespace module {
      export const v1 = {
        ..._366
      };
    }
    export const v1 = {
      ..._367,
      ..._368,
      ..._369,
      ..._370,
      ..._371,
      ..._372,
      ..._373,
      ..._696,
      ..._713,
      ..._731,
      ..._749,
      ..._766
    };
  }
  export namespace rep {
    export namespace module {
      export const v1 = {
        ..._374
      };
    }
    export const v1 = {
      ..._375,
      ..._376,
      ..._377,
      ..._378,
      ..._379,
      ..._380,
      ..._381,
      ..._382,
      ..._383,
      ..._384,
      ..._385,
      ..._386,
      ..._387,
      ..._388,
      ..._389,
      ..._390,
      ..._391,
      ..._392,
      ..._393,
      ..._394,
      ..._395,
      ..._396,
      ..._397,
      ..._398,
      ..._399,
      ..._400,
      ..._697,
      ..._714,
      ..._732,
      ..._750,
      ..._767
    };
  }
  export namespace reveal {
    export namespace module {
      export const v1 = {
        ..._401
      };
    }
    export const v1 = {
      ..._402,
      ..._403,
      ..._404,
      ..._405,
      ..._406,
      ..._698,
      ..._715,
      ..._733,
      ..._751,
      ..._768
    };
  }
  export namespace season {
    export namespace module {
      export const v1 = {
        ..._407
      };
    }
    export const v1 = {
      ..._408,
      ..._409,
      ..._410,
      ..._411,
      ..._412,
      ..._413,
      ..._414,
      ..._415,
      ..._416,
      ..._417,
      ..._418,
      ..._419,
      ..._420,
      ..._421,
      ..._422,
      ..._423,
      ..._424,
      ..._425,
      ..._426,
      ..._427,
      ..._428,
      ..._429,
      ..._430,
      ..._431,
      ..._432,
      ..._433,
      ..._434,
      ..._435,
      ..._699,
      ..._716,
      ..._734,
      ..._752,
      ..._769
    };
  }
  export namespace service {
    export namespace module {
      export const v1 = {
        ..._436
      };
    }
    export const v1 = {
      ..._437,
      ..._438,
      ..._439,
      ..._440,
      ..._441,
      ..._442,
      ..._443,
      ..._444,
      ..._445,
      ..._446,
      ..._447,
      ..._448,
      ..._449,
      ..._450,
      ..._700,
      ..._717,
      ..._735,
      ..._753,
      ..._770
    };
  }
  export namespace session {
    export namespace module {
      export const v1 = {
        ..._451
      };
    }
    export const v1 = {
      ..._452,
      ..._453,
      ..._454,
      ..._455,
      ..._456,
      ..._457,
      ..._701,
      ..._718,
      ..._736,
      ..._754,
      ..._771
    };
  }
  export namespace shield {
    export namespace module {
      export const v1 = {
        ..._458
      };
    }
    export const v1 = {
      ..._459,
      ..._460,
      ..._461,
      ..._462,
      ..._463,
      ..._702,
      ..._719,
      ..._737,
      ..._755,
      ..._772
    };
  }
  export namespace sparkdream {
    export namespace module {
      export const v1 = {
        ..._464
      };
    }
    export const v1 = {
      ..._465,
      ..._466,
      ..._467,
      ..._468,
      ..._703,
      ..._720,
      ..._738,
      ..._756,
      ..._773
    };
  }
  export namespace split {
    export namespace module {
      export const v1 = {
        ..._469
      };
    }
    export const v1 = {
      ..._470,
      ..._471,
      ..._472,
      ..._473,
      ..._474,
      ..._704,
      ..._721,
      ..._739,
      ..._757,
      ..._774
    };
  }
  export const ClientFactory = {
    ..._784,
    ..._785,
    ..._786
  };
}