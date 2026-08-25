//@ts-nocheck
import * as _356 from "./blog/module/v1/module";
import * as _357 from "./blog/v1/genesis";
import * as _358 from "./blog/v1/params";
import * as _359 from "./blog/v1/post";
import * as _360 from "./blog/v1/query";
import * as _361 from "./blog/v1/tx";
import * as _362 from "./blog/v1/types";
import * as _363 from "./collect/module/v1/module";
import * as _364 from "./collect/v1/curator_activity";
import * as _365 from "./collect/v1/genesis";
import * as _366 from "./collect/v1/params";
import * as _367 from "./collect/v1/query";
import * as _368 from "./collect/v1/tx";
import * as _369 from "./collect/v1/types";
import * as _370 from "./common/v1/content_type";
import * as _371 from "./common/v1/flag_record";
import * as _372 from "./common/v1/moderation_reason";
import * as _373 from "./commons/module/v1/module";
import * as _374 from "./commons/v1/category";
import * as _375 from "./commons/v1/genesis";
import * as _376 from "./commons/v1/group";
import * as _377 from "./commons/v1/params";
import * as _378 from "./commons/v1/policy_permissions";
import * as _379 from "./commons/v1/query";
import * as _380 from "./commons/v1/recurring_spend";
import * as _381 from "./commons/v1/tx";
import * as _382 from "./ecosystem/module/v1/module";
import * as _383 from "./ecosystem/v1/genesis";
import * as _384 from "./ecosystem/v1/params";
import * as _385 from "./ecosystem/v1/query";
import * as _386 from "./ecosystem/v1/tx";
import * as _387 from "./federation/module/v1/module";
import * as _388 from "./federation/v1/genesis";
import * as _389 from "./federation/v1/packet";
import * as _390 from "./federation/v1/params";
import * as _391 from "./federation/v1/query";
import * as _392 from "./federation/v1/tx";
import * as _393 from "./federation/v1/types";
import * as _394 from "./federation/v1/verifier_activity";
import * as _395 from "./forum/module/v1/module";
import * as _396 from "./forum/v1/archive_metadata";
import * as _397 from "./forum/v1/bounty";
import * as _398 from "./forum/v1/genesis";
import * as _399 from "./forum/v1/hide_record";
import * as _400 from "./forum/v1/params";
import * as _401 from "./forum/v1/post_flag";
import * as _402 from "./forum/v1/post";
import * as _403 from "./forum/v1/query";
import * as _404 from "./forum/v1/sentinel_activity";
import * as _405 from "./forum/v1/thread_follow_count";
import * as _406 from "./forum/v1/thread_follow";
import * as _407 from "./forum/v1/thread_lock_record";
import * as _408 from "./forum/v1/thread_metadata";
import * as _409 from "./forum/v1/thread_move_record";
import * as _410 from "./forum/v1/tx";
import * as _411 from "./forum/v1/types";
import * as _412 from "./forum/v1/user_rate_limit";
import * as _413 from "./forum/v1/user_reaction_limit";
import * as _414 from "./futarchy/module/v1/module";
import * as _415 from "./futarchy/v1/genesis";
import * as _416 from "./futarchy/v1/market";
import * as _417 from "./futarchy/v1/params";
import * as _418 from "./futarchy/v1/query";
import * as _419 from "./futarchy/v1/tx";
import * as _420 from "./guardian/module/v1/module";
import * as _421 from "./guardian/v1/query";
import * as _422 from "./guardian/v1/tx";
import * as _423 from "./identity/module/v1/module";
import * as _424 from "./identity/v1/chain_identity";
import * as _425 from "./identity/v1/genesis";
import * as _426 from "./identity/v1/query";
import * as _427 from "./name/module/v1/module";
import * as _428 from "./name/v1/dispute";
import * as _429 from "./name/v1/genesis";
import * as _430 from "./name/v1/name_record";
import * as _431 from "./name/v1/owner_info";
import * as _432 from "./name/v1/params";
import * as _433 from "./name/v1/query";
import * as _434 from "./name/v1/tx";
import * as _435 from "./rep/module/v1/module";
import * as _436 from "./rep/v1/acceptance_criteria";
import * as _437 from "./rep/v1/accountability";
import * as _438 from "./rep/v1/bonded_role";
import * as _439 from "./rep/v1/challenge";
import * as _440 from "./rep/v1/content_challenge";
import * as _441 from "./rep/v1/genesis";
import * as _442 from "./rep/v1/gov_action_appeal";
import * as _443 from "./rep/v1/initiative_review";
import * as _444 from "./rep/v1/initiative";
import * as _445 from "./rep/v1/interim";
import * as _446 from "./rep/v1/invitation";
import * as _447 from "./rep/v1/jury_participation";
import * as _448 from "./rep/v1/jury_review";
import * as _449 from "./rep/v1/member_report";
import * as _450 from "./rep/v1/member_warning";
import * as _451 from "./rep/v1/member";
import * as _452 from "./rep/v1/params";
import * as _453 from "./rep/v1/project";
import * as _454 from "./rep/v1/query";
import * as _455 from "./rep/v1/reserved_tag";
import * as _456 from "./rep/v1/review_bounty";
import * as _457 from "./rep/v1/role_activity";
import * as _458 from "./rep/v1/stake";
import * as _459 from "./rep/v1/tag_budget_award";
import * as _460 from "./rep/v1/tag_budget";
import * as _461 from "./rep/v1/tag_report";
import * as _462 from "./rep/v1/tag";
import * as _463 from "./rep/v1/tx";
import * as _464 from "./reveal/module/v1/module";
import * as _465 from "./reveal/v1/genesis";
import * as _466 from "./reveal/v1/params";
import * as _467 from "./reveal/v1/query";
import * as _468 from "./reveal/v1/tx";
import * as _469 from "./reveal/v1/types";
import * as _470 from "./season/module/v1/module";
import * as _471 from "./season/v1/achievement";
import * as _472 from "./season/v1/display_name_appeal_stake";
import * as _473 from "./season/v1/display_name_moderation";
import * as _474 from "./season/v1/display_name_report_stake";
import * as _475 from "./season/v1/enums";
import * as _476 from "./season/v1/epoch_xp_tracker";
import * as _477 from "./season/v1/forum_xp_cooldown";
import * as _478 from "./season/v1/genesis";
import * as _479 from "./season/v1/guild_invite";
import * as _480 from "./season/v1/guild_membership";
import * as _481 from "./season/v1/guild";
import * as _482 from "./season/v1/member_profile";
import * as _483 from "./season/v1/member_quest_progress";
import * as _484 from "./season/v1/member_registration";
import * as _485 from "./season/v1/member_season_snapshot";
import * as _486 from "./season/v1/next_season_info";
import * as _487 from "./season/v1/nomination";
import * as _488 from "./season/v1/params";
import * as _489 from "./season/v1/query";
import * as _490 from "./season/v1/quest";
import * as _491 from "./season/v1/season_snapshot";
import * as _492 from "./season/v1/season_title_eligibility";
import * as _493 from "./season/v1/season_transition_state";
import * as _494 from "./season/v1/season";
import * as _495 from "./season/v1/title";
import * as _496 from "./season/v1/transition_recovery_state";
import * as _497 from "./season/v1/tx";
import * as _498 from "./season/v1/vote_xp_record";
import * as _499 from "./service/module/v1/module";
import * as _500 from "./service/v1/controller_transfer_case";
import * as _501 from "./service/v1/genesis";
import * as _502 from "./service/v1/operator";
import * as _503 from "./service/v1/params";
import * as _504 from "./service/v1/query";
import * as _505 from "./service/v1/refile_cooldown";
import * as _506 from "./service/v1/report";
import * as _507 from "./service/v1/reporter_rate_limit";
import * as _508 from "./service/v1/service_type_config";
import * as _509 from "./service/v1/system_report_rate_limit";
import * as _510 from "./service/v1/tier1_escrow_entry";
import * as _511 from "./service/v1/tier1_last_slash";
import * as _512 from "./service/v1/tx";
import * as _513 from "./service/v1/types";
import * as _514 from "./session/module/v1/module";
import * as _515 from "./session/v1/genesis";
import * as _516 from "./session/v1/grant";
import * as _517 from "./session/v1/params";
import * as _518 from "./session/v1/query";
import * as _519 from "./session/v1/session";
import * as _520 from "./session/v1/tx";
import * as _521 from "./shield/module/v1/module";
import * as _522 from "./shield/v1/genesis";
import * as _523 from "./shield/v1/params";
import * as _524 from "./shield/v1/query";
import * as _525 from "./shield/v1/tx";
import * as _526 from "./shield/v1/types";
import * as _527 from "./sparkdream/module/v1/module";
import * as _528 from "./sparkdream/v1/genesis";
import * as _529 from "./sparkdream/v1/params";
import * as _530 from "./sparkdream/v1/query";
import * as _531 from "./sparkdream/v1/tx";
import * as _532 from "./split/module/v1/module";
import * as _533 from "./split/v1/genesis";
import * as _534 from "./split/v1/params";
import * as _535 from "./split/v1/query";
import * as _536 from "./split/v1/share";
import * as _537 from "./split/v1/tx";
import * as _763 from "./blog/v1/tx.amino";
import * as _764 from "./collect/v1/tx.amino";
import * as _765 from "./commons/v1/tx.amino";
import * as _766 from "./ecosystem/v1/tx.amino";
import * as _767 from "./federation/v1/tx.amino";
import * as _768 from "./forum/v1/tx.amino";
import * as _769 from "./futarchy/v1/tx.amino";
import * as _770 from "./guardian/v1/tx.amino";
import * as _771 from "./name/v1/tx.amino";
import * as _772 from "./rep/v1/tx.amino";
import * as _773 from "./reveal/v1/tx.amino";
import * as _774 from "./season/v1/tx.amino";
import * as _775 from "./service/v1/tx.amino";
import * as _776 from "./session/v1/tx.amino";
import * as _777 from "./shield/v1/tx.amino";
import * as _778 from "./sparkdream/v1/tx.amino";
import * as _779 from "./split/v1/tx.amino";
import * as _780 from "./blog/v1/tx.registry";
import * as _781 from "./collect/v1/tx.registry";
import * as _782 from "./commons/v1/tx.registry";
import * as _783 from "./ecosystem/v1/tx.registry";
import * as _784 from "./federation/v1/tx.registry";
import * as _785 from "./forum/v1/tx.registry";
import * as _786 from "./futarchy/v1/tx.registry";
import * as _787 from "./guardian/v1/tx.registry";
import * as _788 from "./name/v1/tx.registry";
import * as _789 from "./rep/v1/tx.registry";
import * as _790 from "./reveal/v1/tx.registry";
import * as _791 from "./season/v1/tx.registry";
import * as _792 from "./service/v1/tx.registry";
import * as _793 from "./session/v1/tx.registry";
import * as _794 from "./shield/v1/tx.registry";
import * as _795 from "./sparkdream/v1/tx.registry";
import * as _796 from "./split/v1/tx.registry";
import * as _797 from "./blog/v1/query.lcd";
import * as _798 from "./collect/v1/query.lcd";
import * as _799 from "./commons/v1/query.lcd";
import * as _800 from "./ecosystem/v1/query.lcd";
import * as _801 from "./federation/v1/query.lcd";
import * as _802 from "./forum/v1/query.lcd";
import * as _803 from "./futarchy/v1/query.lcd";
import * as _804 from "./guardian/v1/query.lcd";
import * as _805 from "./identity/v1/query.lcd";
import * as _806 from "./name/v1/query.lcd";
import * as _807 from "./rep/v1/query.lcd";
import * as _808 from "./reveal/v1/query.lcd";
import * as _809 from "./season/v1/query.lcd";
import * as _810 from "./service/v1/query.lcd";
import * as _811 from "./session/v1/query.lcd";
import * as _812 from "./shield/v1/query.lcd";
import * as _813 from "./sparkdream/v1/query.lcd";
import * as _814 from "./split/v1/query.lcd";
import * as _815 from "./blog/v1/query.rpc.Query";
import * as _816 from "./collect/v1/query.rpc.Query";
import * as _817 from "./commons/v1/query.rpc.Query";
import * as _818 from "./ecosystem/v1/query.rpc.Query";
import * as _819 from "./federation/v1/query.rpc.Query";
import * as _820 from "./forum/v1/query.rpc.Query";
import * as _821 from "./futarchy/v1/query.rpc.Query";
import * as _822 from "./guardian/v1/query.rpc.Query";
import * as _823 from "./identity/v1/query.rpc.Query";
import * as _824 from "./name/v1/query.rpc.Query";
import * as _825 from "./rep/v1/query.rpc.Query";
import * as _826 from "./reveal/v1/query.rpc.Query";
import * as _827 from "./season/v1/query.rpc.Query";
import * as _828 from "./service/v1/query.rpc.Query";
import * as _829 from "./session/v1/query.rpc.Query";
import * as _830 from "./shield/v1/query.rpc.Query";
import * as _831 from "./sparkdream/v1/query.rpc.Query";
import * as _832 from "./split/v1/query.rpc.Query";
import * as _833 from "./blog/v1/tx.rpc.msg";
import * as _834 from "./collect/v1/tx.rpc.msg";
import * as _835 from "./commons/v1/tx.rpc.msg";
import * as _836 from "./ecosystem/v1/tx.rpc.msg";
import * as _837 from "./federation/v1/tx.rpc.msg";
import * as _838 from "./forum/v1/tx.rpc.msg";
import * as _839 from "./futarchy/v1/tx.rpc.msg";
import * as _840 from "./guardian/v1/tx.rpc.msg";
import * as _841 from "./name/v1/tx.rpc.msg";
import * as _842 from "./rep/v1/tx.rpc.msg";
import * as _843 from "./reveal/v1/tx.rpc.msg";
import * as _844 from "./season/v1/tx.rpc.msg";
import * as _845 from "./service/v1/tx.rpc.msg";
import * as _846 from "./session/v1/tx.rpc.msg";
import * as _847 from "./shield/v1/tx.rpc.msg";
import * as _848 from "./sparkdream/v1/tx.rpc.msg";
import * as _849 from "./split/v1/tx.rpc.msg";
import * as _859 from "./lcd";
import * as _860 from "./rpc.query";
import * as _861 from "./rpc.tx";
export namespace sparkdream {
  export namespace blog {
    export namespace module {
      export const v1 = {
        ..._356
      };
    }
    export const v1 = {
      ..._357,
      ..._358,
      ..._359,
      ..._360,
      ..._361,
      ..._362,
      ..._763,
      ..._780,
      ..._797,
      ..._815,
      ..._833
    };
  }
  export namespace collect {
    export namespace module {
      export const v1 = {
        ..._363
      };
    }
    export const v1 = {
      ..._364,
      ..._365,
      ..._366,
      ..._367,
      ..._368,
      ..._369,
      ..._764,
      ..._781,
      ..._798,
      ..._816,
      ..._834
    };
  }
  export namespace common {
    export const v1 = {
      ..._370,
      ..._371,
      ..._372
    };
  }
  export namespace commons {
    export namespace module {
      export const v1 = {
        ..._373
      };
    }
    export const v1 = {
      ..._374,
      ..._375,
      ..._376,
      ..._377,
      ..._378,
      ..._379,
      ..._380,
      ..._381,
      ..._765,
      ..._782,
      ..._799,
      ..._817,
      ..._835
    };
  }
  export namespace ecosystem {
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
      ..._766,
      ..._783,
      ..._800,
      ..._818,
      ..._836
    };
  }
  export namespace federation {
    export namespace module {
      export const v1 = {
        ..._387
      };
    }
    export const v1 = {
      ..._388,
      ..._389,
      ..._390,
      ..._391,
      ..._392,
      ..._393,
      ..._394,
      ..._767,
      ..._784,
      ..._801,
      ..._819,
      ..._837
    };
  }
  export namespace forum {
    export namespace module {
      export const v1 = {
        ..._395
      };
    }
    export const v1 = {
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
      ..._409,
      ..._410,
      ..._411,
      ..._412,
      ..._413,
      ..._768,
      ..._785,
      ..._802,
      ..._820,
      ..._838
    };
  }
  export namespace futarchy {
    export namespace module {
      export const v1 = {
        ..._414
      };
    }
    export const v1 = {
      ..._415,
      ..._416,
      ..._417,
      ..._418,
      ..._419,
      ..._769,
      ..._786,
      ..._803,
      ..._821,
      ..._839
    };
  }
  export namespace guardian {
    export namespace module {
      export const v1 = {
        ..._420
      };
    }
    export const v1 = {
      ..._421,
      ..._422,
      ..._770,
      ..._787,
      ..._804,
      ..._822,
      ..._840
    };
  }
  export namespace identity {
    export namespace module {
      export const v1 = {
        ..._423
      };
    }
    export const v1 = {
      ..._424,
      ..._425,
      ..._426,
      ..._805,
      ..._823
    };
  }
  export namespace name {
    export namespace module {
      export const v1 = {
        ..._427
      };
    }
    export const v1 = {
      ..._428,
      ..._429,
      ..._430,
      ..._431,
      ..._432,
      ..._433,
      ..._434,
      ..._771,
      ..._788,
      ..._806,
      ..._824,
      ..._841
    };
  }
  export namespace rep {
    export namespace module {
      export const v1 = {
        ..._435
      };
    }
    export const v1 = {
      ..._436,
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
      ..._451,
      ..._452,
      ..._453,
      ..._454,
      ..._455,
      ..._456,
      ..._457,
      ..._458,
      ..._459,
      ..._460,
      ..._461,
      ..._462,
      ..._463,
      ..._772,
      ..._789,
      ..._807,
      ..._825,
      ..._842
    };
  }
  export namespace reveal {
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
      ..._469,
      ..._773,
      ..._790,
      ..._808,
      ..._826,
      ..._843
    };
  }
  export namespace season {
    export namespace module {
      export const v1 = {
        ..._470
      };
    }
    export const v1 = {
      ..._471,
      ..._472,
      ..._473,
      ..._474,
      ..._475,
      ..._476,
      ..._477,
      ..._478,
      ..._479,
      ..._480,
      ..._481,
      ..._482,
      ..._483,
      ..._484,
      ..._485,
      ..._486,
      ..._487,
      ..._488,
      ..._489,
      ..._490,
      ..._491,
      ..._492,
      ..._493,
      ..._494,
      ..._495,
      ..._496,
      ..._497,
      ..._498,
      ..._774,
      ..._791,
      ..._809,
      ..._827,
      ..._844
    };
  }
  export namespace service {
    export namespace module {
      export const v1 = {
        ..._499
      };
    }
    export const v1 = {
      ..._500,
      ..._501,
      ..._502,
      ..._503,
      ..._504,
      ..._505,
      ..._506,
      ..._507,
      ..._508,
      ..._509,
      ..._510,
      ..._511,
      ..._512,
      ..._513,
      ..._775,
      ..._792,
      ..._810,
      ..._828,
      ..._845
    };
  }
  export namespace session {
    export namespace module {
      export const v1 = {
        ..._514
      };
    }
    export const v1 = {
      ..._515,
      ..._516,
      ..._517,
      ..._518,
      ..._519,
      ..._520,
      ..._776,
      ..._793,
      ..._811,
      ..._829,
      ..._846
    };
  }
  export namespace shield {
    export namespace module {
      export const v1 = {
        ..._521
      };
    }
    export const v1 = {
      ..._522,
      ..._523,
      ..._524,
      ..._525,
      ..._526,
      ..._777,
      ..._794,
      ..._812,
      ..._830,
      ..._847
    };
  }
  export namespace sparkdream {
    export namespace module {
      export const v1 = {
        ..._527
      };
    }
    export const v1 = {
      ..._528,
      ..._529,
      ..._530,
      ..._531,
      ..._778,
      ..._795,
      ..._813,
      ..._831,
      ..._848
    };
  }
  export namespace split {
    export namespace module {
      export const v1 = {
        ..._532
      };
    }
    export const v1 = {
      ..._533,
      ..._534,
      ..._535,
      ..._536,
      ..._537,
      ..._779,
      ..._796,
      ..._814,
      ..._832,
      ..._849
    };
  }
  export const ClientFactory = {
    ..._859,
    ..._860,
    ..._861
  };
}