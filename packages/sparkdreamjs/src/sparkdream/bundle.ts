//@ts-nocheck
import * as _303 from "./blog/module/v1/module";
import * as _304 from "./blog/v1/genesis";
import * as _305 from "./blog/v1/params";
import * as _306 from "./blog/v1/post";
import * as _307 from "./blog/v1/query";
import * as _308 from "./blog/v1/tx";
import * as _309 from "./blog/v1/types";
import * as _310 from "./collect/module/v1/module";
import * as _311 from "./collect/v1/curator_activity";
import * as _312 from "./collect/v1/genesis";
import * as _313 from "./collect/v1/params";
import * as _314 from "./collect/v1/query";
import * as _315 from "./collect/v1/tx";
import * as _316 from "./collect/v1/types";
import * as _317 from "./common/v1/content_type";
import * as _318 from "./common/v1/flag_record";
import * as _319 from "./common/v1/moderation_reason";
import * as _320 from "./commons/module/v1/module";
import * as _321 from "./commons/v1/category";
import * as _322 from "./commons/v1/genesis";
import * as _323 from "./commons/v1/group";
import * as _324 from "./commons/v1/params";
import * as _325 from "./commons/v1/policy_permissions";
import * as _326 from "./commons/v1/query";
import * as _327 from "./commons/v1/recurring_spend";
import * as _328 from "./commons/v1/tx";
import * as _329 from "./ecosystem/module/v1/module";
import * as _330 from "./ecosystem/v1/genesis";
import * as _331 from "./ecosystem/v1/params";
import * as _332 from "./ecosystem/v1/query";
import * as _333 from "./ecosystem/v1/tx";
import * as _334 from "./federation/module/v1/module";
import * as _335 from "./federation/v1/genesis";
import * as _336 from "./federation/v1/packet";
import * as _337 from "./federation/v1/params";
import * as _338 from "./federation/v1/query";
import * as _339 from "./federation/v1/tx";
import * as _340 from "./federation/v1/types";
import * as _341 from "./federation/v1/verifier_activity";
import * as _342 from "./forum/module/v1/module";
import * as _343 from "./forum/v1/archive_metadata";
import * as _344 from "./forum/v1/bounty";
import * as _345 from "./forum/v1/genesis";
import * as _346 from "./forum/v1/hide_record";
import * as _347 from "./forum/v1/params";
import * as _348 from "./forum/v1/post_flag";
import * as _349 from "./forum/v1/post";
import * as _350 from "./forum/v1/query";
import * as _351 from "./forum/v1/sentinel_activity";
import * as _352 from "./forum/v1/thread_follow_count";
import * as _353 from "./forum/v1/thread_follow";
import * as _354 from "./forum/v1/thread_lock_record";
import * as _355 from "./forum/v1/thread_metadata";
import * as _356 from "./forum/v1/thread_move_record";
import * as _357 from "./forum/v1/tx";
import * as _358 from "./forum/v1/types";
import * as _359 from "./forum/v1/user_rate_limit";
import * as _360 from "./forum/v1/user_reaction_limit";
import * as _361 from "./futarchy/module/v1/module";
import * as _362 from "./futarchy/v1/genesis";
import * as _363 from "./futarchy/v1/market";
import * as _364 from "./futarchy/v1/params";
import * as _365 from "./futarchy/v1/query";
import * as _366 from "./futarchy/v1/tx";
import * as _367 from "./guardian/module/v1/module";
import * as _368 from "./guardian/v1/query";
import * as _369 from "./guardian/v1/tx";
import * as _370 from "./identity/module/v1/module";
import * as _371 from "./identity/v1/chain_identity";
import * as _372 from "./identity/v1/genesis";
import * as _373 from "./identity/v1/query";
import * as _374 from "./name/module/v1/module";
import * as _375 from "./name/v1/dispute";
import * as _376 from "./name/v1/genesis";
import * as _377 from "./name/v1/name_record";
import * as _378 from "./name/v1/owner_info";
import * as _379 from "./name/v1/params";
import * as _380 from "./name/v1/query";
import * as _381 from "./name/v1/tx";
import * as _382 from "./rep/module/v1/module";
import * as _383 from "./rep/v1/accountability";
import * as _384 from "./rep/v1/bonded_role";
import * as _385 from "./rep/v1/challenge";
import * as _386 from "./rep/v1/content_challenge";
import * as _387 from "./rep/v1/genesis";
import * as _388 from "./rep/v1/gov_action_appeal";
import * as _389 from "./rep/v1/initiative";
import * as _390 from "./rep/v1/interim_template";
import * as _391 from "./rep/v1/interim";
import * as _392 from "./rep/v1/invitation";
import * as _393 from "./rep/v1/jury_participation";
import * as _394 from "./rep/v1/jury_review";
import * as _395 from "./rep/v1/member_report";
import * as _396 from "./rep/v1/member_warning";
import * as _397 from "./rep/v1/member";
import * as _398 from "./rep/v1/params";
import * as _399 from "./rep/v1/project";
import * as _400 from "./rep/v1/query";
import * as _401 from "./rep/v1/reserved_tag";
import * as _402 from "./rep/v1/role_activity";
import * as _403 from "./rep/v1/stake";
import * as _404 from "./rep/v1/tag_budget_award";
import * as _405 from "./rep/v1/tag_budget";
import * as _406 from "./rep/v1/tag_report";
import * as _407 from "./rep/v1/tag";
import * as _408 from "./rep/v1/tx";
import * as _409 from "./reveal/module/v1/module";
import * as _410 from "./reveal/v1/genesis";
import * as _411 from "./reveal/v1/params";
import * as _412 from "./reveal/v1/query";
import * as _413 from "./reveal/v1/tx";
import * as _414 from "./reveal/v1/types";
import * as _415 from "./season/module/v1/module";
import * as _416 from "./season/v1/achievement";
import * as _417 from "./season/v1/display_name_appeal_stake";
import * as _418 from "./season/v1/display_name_moderation";
import * as _419 from "./season/v1/display_name_report_stake";
import * as _420 from "./season/v1/enums";
import * as _421 from "./season/v1/epoch_xp_tracker";
import * as _422 from "./season/v1/forum_xp_cooldown";
import * as _423 from "./season/v1/genesis";
import * as _424 from "./season/v1/guild_invite";
import * as _425 from "./season/v1/guild_membership";
import * as _426 from "./season/v1/guild";
import * as _427 from "./season/v1/member_profile";
import * as _428 from "./season/v1/member_quest_progress";
import * as _429 from "./season/v1/member_registration";
import * as _430 from "./season/v1/member_season_snapshot";
import * as _431 from "./season/v1/next_season_info";
import * as _432 from "./season/v1/nomination";
import * as _433 from "./season/v1/params";
import * as _434 from "./season/v1/query";
import * as _435 from "./season/v1/quest";
import * as _436 from "./season/v1/season_snapshot";
import * as _437 from "./season/v1/season_title_eligibility";
import * as _438 from "./season/v1/season_transition_state";
import * as _439 from "./season/v1/season";
import * as _440 from "./season/v1/title";
import * as _441 from "./season/v1/transition_recovery_state";
import * as _442 from "./season/v1/tx";
import * as _443 from "./season/v1/vote_xp_record";
import * as _444 from "./service/module/v1/module";
import * as _445 from "./service/v1/controller_transfer_case";
import * as _446 from "./service/v1/genesis";
import * as _447 from "./service/v1/operator";
import * as _448 from "./service/v1/params";
import * as _449 from "./service/v1/query";
import * as _450 from "./service/v1/refile_cooldown";
import * as _451 from "./service/v1/report";
import * as _452 from "./service/v1/reporter_rate_limit";
import * as _453 from "./service/v1/service_type_config";
import * as _454 from "./service/v1/system_report_rate_limit";
import * as _455 from "./service/v1/tier1_escrow_entry";
import * as _456 from "./service/v1/tier1_last_slash";
import * as _457 from "./service/v1/tx";
import * as _458 from "./service/v1/types";
import * as _459 from "./session/module/v1/module";
import * as _460 from "./session/v1/genesis";
import * as _461 from "./session/v1/grant";
import * as _462 from "./session/v1/params";
import * as _463 from "./session/v1/query";
import * as _464 from "./session/v1/session";
import * as _465 from "./session/v1/tx";
import * as _466 from "./shield/module/v1/module";
import * as _467 from "./shield/v1/genesis";
import * as _468 from "./shield/v1/params";
import * as _469 from "./shield/v1/query";
import * as _470 from "./shield/v1/tx";
import * as _471 from "./shield/v1/types";
import * as _472 from "./sparkdream/module/v1/module";
import * as _473 from "./sparkdream/v1/genesis";
import * as _474 from "./sparkdream/v1/params";
import * as _475 from "./sparkdream/v1/query";
import * as _476 from "./sparkdream/v1/tx";
import * as _477 from "./split/module/v1/module";
import * as _478 from "./split/v1/genesis";
import * as _479 from "./split/v1/params";
import * as _480 from "./split/v1/query";
import * as _481 from "./split/v1/share";
import * as _482 from "./split/v1/tx";
import * as _701 from "./blog/v1/tx.amino";
import * as _702 from "./collect/v1/tx.amino";
import * as _703 from "./commons/v1/tx.amino";
import * as _704 from "./ecosystem/v1/tx.amino";
import * as _705 from "./federation/v1/tx.amino";
import * as _706 from "./forum/v1/tx.amino";
import * as _707 from "./futarchy/v1/tx.amino";
import * as _708 from "./guardian/v1/tx.amino";
import * as _709 from "./name/v1/tx.amino";
import * as _710 from "./rep/v1/tx.amino";
import * as _711 from "./reveal/v1/tx.amino";
import * as _712 from "./season/v1/tx.amino";
import * as _713 from "./service/v1/tx.amino";
import * as _714 from "./session/v1/tx.amino";
import * as _715 from "./shield/v1/tx.amino";
import * as _716 from "./sparkdream/v1/tx.amino";
import * as _717 from "./split/v1/tx.amino";
import * as _718 from "./blog/v1/tx.registry";
import * as _719 from "./collect/v1/tx.registry";
import * as _720 from "./commons/v1/tx.registry";
import * as _721 from "./ecosystem/v1/tx.registry";
import * as _722 from "./federation/v1/tx.registry";
import * as _723 from "./forum/v1/tx.registry";
import * as _724 from "./futarchy/v1/tx.registry";
import * as _725 from "./guardian/v1/tx.registry";
import * as _726 from "./name/v1/tx.registry";
import * as _727 from "./rep/v1/tx.registry";
import * as _728 from "./reveal/v1/tx.registry";
import * as _729 from "./season/v1/tx.registry";
import * as _730 from "./service/v1/tx.registry";
import * as _731 from "./session/v1/tx.registry";
import * as _732 from "./shield/v1/tx.registry";
import * as _733 from "./sparkdream/v1/tx.registry";
import * as _734 from "./split/v1/tx.registry";
import * as _735 from "./blog/v1/query.lcd";
import * as _736 from "./collect/v1/query.lcd";
import * as _737 from "./commons/v1/query.lcd";
import * as _738 from "./ecosystem/v1/query.lcd";
import * as _739 from "./federation/v1/query.lcd";
import * as _740 from "./forum/v1/query.lcd";
import * as _741 from "./futarchy/v1/query.lcd";
import * as _742 from "./guardian/v1/query.lcd";
import * as _743 from "./identity/v1/query.lcd";
import * as _744 from "./name/v1/query.lcd";
import * as _745 from "./rep/v1/query.lcd";
import * as _746 from "./reveal/v1/query.lcd";
import * as _747 from "./season/v1/query.lcd";
import * as _748 from "./service/v1/query.lcd";
import * as _749 from "./session/v1/query.lcd";
import * as _750 from "./shield/v1/query.lcd";
import * as _751 from "./sparkdream/v1/query.lcd";
import * as _752 from "./split/v1/query.lcd";
import * as _753 from "./blog/v1/query.rpc.Query";
import * as _754 from "./collect/v1/query.rpc.Query";
import * as _755 from "./commons/v1/query.rpc.Query";
import * as _756 from "./ecosystem/v1/query.rpc.Query";
import * as _757 from "./federation/v1/query.rpc.Query";
import * as _758 from "./forum/v1/query.rpc.Query";
import * as _759 from "./futarchy/v1/query.rpc.Query";
import * as _760 from "./guardian/v1/query.rpc.Query";
import * as _761 from "./identity/v1/query.rpc.Query";
import * as _762 from "./name/v1/query.rpc.Query";
import * as _763 from "./rep/v1/query.rpc.Query";
import * as _764 from "./reveal/v1/query.rpc.Query";
import * as _765 from "./season/v1/query.rpc.Query";
import * as _766 from "./service/v1/query.rpc.Query";
import * as _767 from "./session/v1/query.rpc.Query";
import * as _768 from "./shield/v1/query.rpc.Query";
import * as _769 from "./sparkdream/v1/query.rpc.Query";
import * as _770 from "./split/v1/query.rpc.Query";
import * as _771 from "./blog/v1/tx.rpc.msg";
import * as _772 from "./collect/v1/tx.rpc.msg";
import * as _773 from "./commons/v1/tx.rpc.msg";
import * as _774 from "./ecosystem/v1/tx.rpc.msg";
import * as _775 from "./federation/v1/tx.rpc.msg";
import * as _776 from "./forum/v1/tx.rpc.msg";
import * as _777 from "./futarchy/v1/tx.rpc.msg";
import * as _778 from "./guardian/v1/tx.rpc.msg";
import * as _779 from "./name/v1/tx.rpc.msg";
import * as _780 from "./rep/v1/tx.rpc.msg";
import * as _781 from "./reveal/v1/tx.rpc.msg";
import * as _782 from "./season/v1/tx.rpc.msg";
import * as _783 from "./service/v1/tx.rpc.msg";
import * as _784 from "./session/v1/tx.rpc.msg";
import * as _785 from "./shield/v1/tx.rpc.msg";
import * as _786 from "./sparkdream/v1/tx.rpc.msg";
import * as _787 from "./split/v1/tx.rpc.msg";
import * as _797 from "./lcd";
import * as _798 from "./rpc.query";
import * as _799 from "./rpc.tx";
export namespace sparkdream {
  export namespace blog {
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
      ..._309,
      ..._701,
      ..._718,
      ..._735,
      ..._753,
      ..._771
    };
  }
  export namespace collect {
    export namespace module {
      export const v1 = {
        ..._310
      };
    }
    export const v1 = {
      ..._311,
      ..._312,
      ..._313,
      ..._314,
      ..._315,
      ..._316,
      ..._702,
      ..._719,
      ..._736,
      ..._754,
      ..._772
    };
  }
  export namespace common {
    export const v1 = {
      ..._317,
      ..._318,
      ..._319
    };
  }
  export namespace commons {
    export namespace module {
      export const v1 = {
        ..._320
      };
    }
    export const v1 = {
      ..._321,
      ..._322,
      ..._323,
      ..._324,
      ..._325,
      ..._326,
      ..._327,
      ..._328,
      ..._703,
      ..._720,
      ..._737,
      ..._755,
      ..._773
    };
  }
  export namespace ecosystem {
    export namespace module {
      export const v1 = {
        ..._329
      };
    }
    export const v1 = {
      ..._330,
      ..._331,
      ..._332,
      ..._333,
      ..._704,
      ..._721,
      ..._738,
      ..._756,
      ..._774
    };
  }
  export namespace federation {
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
      ..._705,
      ..._722,
      ..._739,
      ..._757,
      ..._775
    };
  }
  export namespace forum {
    export namespace module {
      export const v1 = {
        ..._342
      };
    }
    export const v1 = {
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
      ..._353,
      ..._354,
      ..._355,
      ..._356,
      ..._357,
      ..._358,
      ..._359,
      ..._360,
      ..._706,
      ..._723,
      ..._740,
      ..._758,
      ..._776
    };
  }
  export namespace futarchy {
    export namespace module {
      export const v1 = {
        ..._361
      };
    }
    export const v1 = {
      ..._362,
      ..._363,
      ..._364,
      ..._365,
      ..._366,
      ..._707,
      ..._724,
      ..._741,
      ..._759,
      ..._777
    };
  }
  export namespace guardian {
    export namespace module {
      export const v1 = {
        ..._367
      };
    }
    export const v1 = {
      ..._368,
      ..._369,
      ..._708,
      ..._725,
      ..._742,
      ..._760,
      ..._778
    };
  }
  export namespace identity {
    export namespace module {
      export const v1 = {
        ..._370
      };
    }
    export const v1 = {
      ..._371,
      ..._372,
      ..._373,
      ..._743,
      ..._761
    };
  }
  export namespace name {
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
      ..._709,
      ..._726,
      ..._744,
      ..._762,
      ..._779
    };
  }
  export namespace rep {
    export namespace module {
      export const v1 = {
        ..._382
      };
    }
    export const v1 = {
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
      ..._401,
      ..._402,
      ..._403,
      ..._404,
      ..._405,
      ..._406,
      ..._407,
      ..._408,
      ..._710,
      ..._727,
      ..._745,
      ..._763,
      ..._780
    };
  }
  export namespace reveal {
    export namespace module {
      export const v1 = {
        ..._409
      };
    }
    export const v1 = {
      ..._410,
      ..._411,
      ..._412,
      ..._413,
      ..._414,
      ..._711,
      ..._728,
      ..._746,
      ..._764,
      ..._781
    };
  }
  export namespace season {
    export namespace module {
      export const v1 = {
        ..._415
      };
    }
    export const v1 = {
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
      ..._436,
      ..._437,
      ..._438,
      ..._439,
      ..._440,
      ..._441,
      ..._442,
      ..._443,
      ..._712,
      ..._729,
      ..._747,
      ..._765,
      ..._782
    };
  }
  export namespace service {
    export namespace module {
      export const v1 = {
        ..._444
      };
    }
    export const v1 = {
      ..._445,
      ..._446,
      ..._447,
      ..._448,
      ..._449,
      ..._450,
      ..._451,
      ..._452,
      ..._453,
      ..._454,
      ..._455,
      ..._456,
      ..._457,
      ..._458,
      ..._713,
      ..._730,
      ..._748,
      ..._766,
      ..._783
    };
  }
  export namespace session {
    export namespace module {
      export const v1 = {
        ..._459
      };
    }
    export const v1 = {
      ..._460,
      ..._461,
      ..._462,
      ..._463,
      ..._464,
      ..._465,
      ..._714,
      ..._731,
      ..._749,
      ..._767,
      ..._784
    };
  }
  export namespace shield {
    export namespace module {
      export const v1 = {
        ..._466
      };
    }
    export const v1 = {
      ..._467,
      ..._468,
      ..._469,
      ..._470,
      ..._471,
      ..._715,
      ..._732,
      ..._750,
      ..._768,
      ..._785
    };
  }
  export namespace sparkdream {
    export namespace module {
      export const v1 = {
        ..._472
      };
    }
    export const v1 = {
      ..._473,
      ..._474,
      ..._475,
      ..._476,
      ..._716,
      ..._733,
      ..._751,
      ..._769,
      ..._786
    };
  }
  export namespace split {
    export namespace module {
      export const v1 = {
        ..._477
      };
    }
    export const v1 = {
      ..._478,
      ..._479,
      ..._480,
      ..._481,
      ..._482,
      ..._717,
      ..._734,
      ..._752,
      ..._770,
      ..._787
    };
  }
  export const ClientFactory = {
    ..._797,
    ..._798,
    ..._799
  };
}